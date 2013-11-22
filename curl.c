#include <string.h>
#include <stdlib.h>
#include <stdint.h>
#include <stdio.h>

#include <curl/curl.h>

#include "gracelib.h"

// curl.c defines a Grace module "curl" which can be compiled for
// dynamic or static linking. The module is a relatively thin wrapper
// of a subset of the libcurl API. The module contains one method:
//   easy -> CurlEasy
// This method wraps curl_easy_init, returning a CurlEasy object
// representing a CURL* handle. CurlEasy objects support these methods:
//   onReceive(blk : Block) -> Done
//     Set the block to be executed when data is received in response
//     to a request. The block is passed the received data as an Octets
//     object. Wraps CURLOPT_WRITEFUNCTION.
//   url:=(url : String) -> Done
//     Set the URL to be requested. Wraps CURLOPT_URL.
//   perform -> Done
//     Make the request. Wraps curl_easy_perform.
//   onHeader(blk : Block) -> Done
//     Set the block to be executed when a header is received in response
//     to a request. The block is passed the received header as an Octets
//     object. Wraps CURLOPT_HEADERFUNCTION.
//   escape(s : String | Octets) -> String
//     URL-encodes s. Wraps curl_easy_escape.
//   unescape(s : String | Octets) -> Octets
//     URL-decodes s. Wraps curl_easy_unescape.
//   responseCode -> Number
//     Returns the result code of the most recent request performed.
//     Wraps CURLINFO_RESPONSE_CODE.
//   effectiveUrl -> String
//     Returns the effective URL, after any redirects, of the most
//     recent request performed. Wraps CURLINFO_EFFECTIVE_URL.
//   includeResponseHeader:=(b : Boolean) -> Done
//     Sets whether to include response headers in the returned data.
//     Wraps CURLOPT_HEADER.
//   followLocation:=(b : Boolean) -> Done
//     Sets whether to follow any Location: headers that appear in.
//     Wraps CURLOPT_FOLLOWLOCATION.
// A sample use might be:
//   def req = curl.easy
//   req.url := "http://example.com/"
//   req.onReceive {d->
//     io.output.write(d.decode("utf-8"))
//   }
//   req.perform

Object curl_module = NULL;
ClassData CurlEasy;
extern ClassData Octets;

struct CurlModuleObject {
    OBJECT_HEADER;
};

#define MINIGRACE_CURLEASY_OBJECTS 3
struct CurlEasyObject {
    OBJECT_HEADER;
    CURL *handle;
    Object objects[MINIGRACE_CURLEASY_OBJECTS];
};

Object CurlEasy_perform(Object self, int nparts, int *argcv, Object *argv,
        int flags) {
    struct CurlEasyObject *r = (struct CurlEasyObject *)self;
    curl_easy_perform(r->handle);
    return self;
}

size_t CurlEasy__receive(char *ptr, size_t size, size_t nmemb,
        void *blk) {
    size_t bsz = size * nmemb;
    char buf[bsz];
    int tmp = 1;
    Object arg = alloc_Octets(ptr, bsz);
    callmethod(blk, "apply", 1, &tmp, &arg);
    return bsz;
}

Object CurlEasy_onReceive(Object self, int nparts, int *argcv,
        Object *argv, int flags) {
    struct CurlEasyObject *r = (struct CurlEasyObject *)self;
    curl_easy_setopt(r->handle, CURLOPT_WRITEFUNCTION, &CurlEasy__receive);
    curl_easy_setopt(r->handle, CURLOPT_WRITEDATA, argv[0]);
    r->objects[0] = argv[0];
    return alloc_done();
}

size_t CurlEasy__receiveHeader(char *ptr, size_t size, size_t nmemb,
        void *blk) {
    size_t bsz = size * nmemb;
    char buf[bsz];
    int tmp = 1;
    Object arg = alloc_Octets(ptr, bsz);
    callmethod(blk, "apply", 1, &tmp, &arg);
    return bsz;
}

Object CurlEasy_onHeader(Object self, int nparts, int *argcv,
        Object *argv, int flags) {
    struct CurlEasyObject *r = (struct CurlEasyObject *)self;
    curl_easy_setopt(r->handle, CURLOPT_HEADERFUNCTION, &CurlEasy__receiveHeader);
    curl_easy_setopt(r->handle, CURLOPT_HEADERDATA, argv[0]);
    r->objects[2] = argv[0];
    return alloc_done();
}

Object CurlEasy_url_assign(Object self, int nparts, int *argcv, Object *argv,
        int flags) {
    struct CurlEasyObject *r = (struct CurlEasyObject *)self;
    curl_easy_setopt(r->handle, CURLOPT_URL, grcstring(argv[0]));
    r->objects[1] = argv[0];
    return alloc_done();
}

Object CurlEasy_includeResponseHeader(Object self, int nparts, int *argcv,
        Object *argv, int flags) {
    struct CurlEasyObject *r = (struct CurlEasyObject *)self;
    curl_easy_setopt(r->handle, CURLOPT_HEADER, istrue(argv[0]));
    return alloc_done();
}

Object CurlEasy_followLocation(Object self, int nparts, int *argcv,
        Object *argv, int flags) {
    struct CurlEasyObject *r = (struct CurlEasyObject *)self;
    curl_easy_setopt(r->handle, CURLOPT_FOLLOWLOCATION, istrue(argv[0]));
    return alloc_done();
}

Object CurlEasy_responseCode(Object self, int nparts, int *argcv, Object *argv,
        int flags) {
    struct CurlEasyObject *r = (struct CurlEasyObject *)self;
    long l;
    curl_easy_getinfo(r->handle, CURLINFO_RESPONSE_CODE, &l);
    return alloc_Float64(l);
}

Object CurlEasy_effectiveUrl(Object self, int nparts, int *argcv, Object *argv,
        int flags) {
    struct CurlEasyObject *r = (struct CurlEasyObject *)self;
    char *c;
    curl_easy_getinfo(r->handle, CURLINFO_EFFECTIVE_URL, &c);
    return alloc_String(c);
}

Object CurlEasy_escape(Object self, int nparts, int *argcv, Object *argv,
        int flags) {
    struct CurlEasyObject *r = (struct CurlEasyObject *)self;
    char *inp;
    int len = 0;
    if (argv[0]->class == Octets) {
        struct OctetsObject *oct = (struct OctetsObject *)argv[0];
        inp = oct->body;
        len = oct->blen;
    } else {
        inp = grcstring(argv[0]);
    }
    char *c = curl_easy_escape(r->handle, inp, len);
    Object o = alloc_String(c);
    curl_free(c);
    return o;
}

Object CurlEasy_unescape(Object self, int nparts, int *argcv, Object *argv,
        int flags) {
    struct CurlEasyObject *r = (struct CurlEasyObject *)self;
    char *inp;
    int len = 0;
    if (argv[0]->class == Octets) {
        struct OctetsObject *oct = (struct OctetsObject *)argv[0];
        inp = oct->body;
        len = oct->blen;
    } else {
        inp = grcstring(argv[0]);
    }
    char *c = curl_easy_unescape(r->handle, inp, len, &len);
    Object o = alloc_Octets(c, len);
    curl_free(c);
    return o;
}

void CurlEasy__mark(struct CurlEasyObject *r) {
    for (int i=0; i<MINIGRACE_CURLEASY_OBJECTS; i++)
        gc_mark(r->objects[i]);
}

void CurlEasy__release(struct CurlEasyObject *r) {
    curl_easy_cleanup(r->handle);
}

Object alloc_CurlEasy() {
    if (!CurlEasy) {
        CurlEasy = alloc_class3("CurlEasy", 14, (void*)&CurlEasy__mark,
                (void*)&CurlEasy__release);
        add_Method(CurlEasy, "perform", &CurlEasy_perform);
        add_Method(CurlEasy, "onReceive", &CurlEasy_onReceive);
        add_Method(CurlEasy, "url:=", &CurlEasy_url_assign);
        add_Method(CurlEasy, "responseCode", &CurlEasy_responseCode);
        add_Method(CurlEasy, "effectiveUrl", &CurlEasy_effectiveUrl);
        add_Method(CurlEasy, "onHeader", &CurlEasy_onHeader);
        add_Method(CurlEasy, "followLocation:=", &CurlEasy_followLocation);
        add_Method(CurlEasy, "includeResponseHeader:=",
                &CurlEasy_includeResponseHeader);
        add_Method(CurlEasy, "escape", &CurlEasy_escape);
        add_Method(CurlEasy, "unescape", &CurlEasy_unescape);
        add_Method(CurlEasy, "==", &Object_Equals);
        add_Method(CurlEasy, "!=", &Object_NotEquals);
        add_Method(CurlEasy, "asString", &Object_asString);
        add_Method(CurlEasy, "asDebugString", &Object_asString);
    }
    Object o = alloc_obj(sizeof(struct CurlEasyObject)
            - sizeof(struct Object), CurlEasy);
    struct CurlEasyObject *r = (struct CurlEasyObject *)o;
    r->handle = curl_easy_init();
    curl_easy_setopt(r->handle, CURLOPT_PROTOCOLS, CURLPROTO_HTTP | CURLPROTO_HTTPS | CURLPROTO_FTP);
    curl_easy_setopt(r->handle, CURLOPT_MAXREDIRS, 10);
    curl_easy_setopt(r->handle, CURLOPT_USERAGENT, "Minigrace HTTP Library");
    return o;
}

Object curl_easy(Object self, int nparams, int *argcv, Object *argv,
        int flags) {
    if (nparams != 1)
        gracedie("curl.easy requires one argument");
    return alloc_CurlEasy();
}

// Create and return a Grace object with all the above functions as methods.
Object module_curl_init() {
    if (curl_module != NULL)
        return curl_module;
    ClassData c = alloc_class("Module<curl>", 12);
    add_Method(c, "easy", &curl_easy);
    Object o = alloc_newobj(sizeof(struct CurlModuleObject)
            - sizeof(struct Object), c);
    curl_module = o;
    gc_root(curl_module);
    struct CurlModuleObject *cmo = (struct CurlModuleObject *)o;
    curl_global_init(CURL_GLOBAL_DEFAULT);
    return o;
}

