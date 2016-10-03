#include <string.h>
#include <stdlib.h>
#include <stdint.h>
#include <stdio.h>

#include "gracelib.h"

// mirrors.c defines a Grace module "mirrors" which can be compiled for
// dynamic or static linking. The module contains one method:
//   reflect(obj : Any) -> Mirror
// Mirrors support two methods:
//   methods -> List<MirrorMethod>
//   methodNames -> Set<String>
//   getMethod(name : String) -> MirrorMethod
// MirrorMethods support four methods:
//   name -> String
//   request(arglists : List of Lists) -> Any
//   partcount -> Number            the number of parts in the method name
//   paramcounts -> List of Numbers, of length partcount; the nth
//                                  number being the number of parameters in the nth parameter list,
//                                  or zero if there is no such list.
// A sample use might be:
//   mirrors.reflect(1).getMethod("+").request([[2]]) == 3

Object module_mirrors = NULL;
ClassData MirrorClass;
ClassData MirrorMethodClass;

Method *findmethodsimple(Object self, const char *name);

struct MirrorObject {
    OBJECT_HEADER;
    Object obj;
};

struct MirrorMethodObject {
    OBJECT_HEADER;
    Method *method;
    Object obj;
};

Object MirrorMethod_asString(Object self, int nparams, int *argcv, Object *argv,
        int flags) {
    struct MirrorMethodObject *s = (struct MirrorMethodObject*)self;
    char buf[strlen(s->method->name) + 12];
    strcpy(buf, "mirror on `");
    strcat(buf, s->method->name);
    strcat(buf, "`");
    return alloc_String(buf);
}

Object MirrorMethod_name(Object self, int nparams, int *argcv, Object *argv,
        int flags) {
    struct MirrorMethodObject *s = (struct MirrorMethodObject*)self;
    return alloc_String(canonicalMethodName(s->method->name));
}

Object MirrorMethod_partcount(Object self, int nparams, int *argcv,
        Object *argv, int flags) {
    struct MirrorMethodObject *s = (struct MirrorMethodObject*)self;
    if (!s->method->type)
        return alloc_Float64(-1);
    return alloc_Float64(s->method->type->nparts);
}

Object MirrorMethod_paramcounts(Object self, int nparams, int *argcv,
        Object *argv, int flags) {
    struct MirrorMethodObject *s = (struct MirrorMethodObject*)self;
    int i;
    if (!s->method->type)
        return alloc_done();
    gc_pause();
    Object l = alloc_BuiltinList();
    int cargcv[] = {1};
    Object carg;
    for (i=0; i<s->method->type->nparts; i++) {
        carg = alloc_Float64(s->method->type->argcv[i]);
        callmethod(l, "push(1)", 1, cargcv, &carg);
    }
    gc_unpause();
    return l;
}

Object MirrorMethod_request(Object self, int nparts, int *argcv, Object *argv,
        int flags) {
    struct MirrorMethodObject *s = (struct MirrorMethodObject*)self;
    Object partsl = argv[0];
    int cparts = integerfromAny(callmethod(partsl, "size", 0, NULL, NULL));
    int i = 0;
    int size = 0;
    int cargcv[cparts];
    gc_pause();
    Object partsiter = callmethod(partsl, "iterator", 0, NULL, NULL);
    while (istrue(callmethod(partsiter, "hasNext", 0, NULL, NULL))) {
        Object argsl = callmethod(partsiter, "next", 0, NULL, NULL);
        cargcv[i] = integerfromAny(callmethod(argsl, "size", 0, NULL, NULL));
        size += cargcv[i];
        i++;
    }
    Object cargv[size];
    i = 0;
    partsiter = callmethod(partsl, "iterator", 0, NULL, NULL);
    while (istrue(callmethod(partsiter, "hasNext", 0, NULL, NULL))) {
        Object argsl = callmethod(partsiter, "next", 0, NULL, NULL);
        Object argsiter = callmethod(argsl, "iterator", 0, NULL, NULL);
        while (istrue(callmethod(argsiter, "hasNext", 0, NULL, NULL))) {
            Object o = callmethod(argsiter, "next", 0, NULL, NULL);
            cargv[i] = o;
            i++;
        }
    }
    gc_unpause();
    Object rv = callmethod(s->obj, s->method->name, cparts, cargcv,
            cargv);
    return rv;
}
Object MirrorMethod_request_with_args(Object self, int nparts, int *argcv, Object *argv,
                            int flags) {
    // The single argument is a Grace Iterable containing all
    // of the arguments for this request,
    struct MirrorMethodObject *s = (struct MirrorMethodObject*)self;
    Object args = argv[0];
    int cparts = s->method->type->nparts;
    int *cargcv = s->method->type->argcv;
    int size = 0;
    int i;
    for (i = 0; i < cparts; i++) { size = size + cargcv[i]; }
    Object cargv[size];
    gc_pause();
    Object argsiter = callmethod(args, "iterator", 0, NULL, NULL);
    i = 0;
    while (istrue(callmethod(argsiter, "hasNext", 0, NULL, NULL))) {
        Object arg = callmethod(argsiter, "next", 0, NULL, NULL);
        cargv[i] = arg;
        i++;
        if (i == size) break;
    }
    gc_unpause();
    return callmethod(s->obj, s->method->name, cparts, cargcv, cargv);
}

Object alloc_MirrorMethod(Method *method, Object obj) {
    if (MirrorMethodClass == NULL) {
        MirrorMethodClass = alloc_class("MirrorMethod", 7);
        add_Method(MirrorMethodClass, "request(1)", &MirrorMethod_request);
        add_Method(MirrorMethodClass, "requestWithArgs(1)", &MirrorMethod_request_with_args);
        add_Method(MirrorMethodClass, "name", &MirrorMethod_name);
        add_Method(MirrorMethodClass, "asString", &MirrorMethod_asString);
        add_Method(MirrorMethodClass, "asDebugString", &MirrorMethod_asString);
        add_Method(MirrorMethodClass, "partcount", &MirrorMethod_partcount);
        add_Method(MirrorMethodClass, "paramcounts", &MirrorMethod_paramcounts);
    }
    Object o = alloc_obj(sizeof(struct MirrorMethodObject)
            - sizeof(struct Object), MirrorMethodClass);
    struct MirrorMethodObject *p = (struct MirrorMethodObject*)o;
    p->obj = obj;
    p->method = method;
    return o;
}

Object Mirror_getMethod(Object self, int nparams, int *argcv, Object *argv,
        int flags) {
    struct MirrorObject *s = (struct MirrorObject*)self;
    Object o = s->obj;
    char *numericName = numericMethodName(grcstring(argv[0]));
    Method *m = findmethodsimple(o, numericName);
    if (m == NULL) {
        graceRaise(NoSuchMethod(), "method '%s' not found by mirror\n",
                        numericName);
    }
    return alloc_MirrorMethod(m, o);
}

Object Mirror_methods(Object self, int nparams, int *argcv, Object *args,
        int flags) {
    struct MirrorObject *s = (struct MirrorObject*)self;
    Object o = s->obj;
    ClassData c = o->class;
    Method *m;
    gc_pause();
    Object l = alloc_BuiltinList();
    Object arg;
    int tmp = 1;
    int i;
    for (i=0; i<c->nummethods; i++) {
        m = &c->methods[i];
        arg = alloc_MirrorMethod(m, o);
        callmethod(l, "push(1)", 1, &tmp, &arg);
    }
    gc_unpause();
    return l;
}

Object Mirror_methodNames(Object self, int nparams, int *argcv, Object *args,
                          int flags) {
    struct MirrorObject *s = (struct MirrorObject*)self;
    Object current = s->obj;
    int i;
    Object mn;
    ClassData c;
    int partcv[] = {1};
    gc_pause();
    Object emptyList = alloc_BuiltinList();
    Object result = callmethod(grace_prelude(), "set(1)", 1, partcv, &emptyList);
    while (current != NULL) {
        c = current->class;
        for (i=0; i < c->nummethods; i++) {
            mn = alloc_String(canonicalMethodName(c->methods[i].name));
            callmethod(result, "add(1)", 1, partcv, &mn);
        }
        if (current->flags & OFLAG_USEROBJ) {
            current = ((struct UserObject *) current)->super;
        } else {
            current = NULL;
        }
    }
    gc_unpause();
    return result;
}

Object Mirror_asString() {
    return alloc_String("an object mirror");
}


Object alloc_mirror(Object obj) {
    if (MirrorClass == NULL) {
        MirrorClass = alloc_class("Mirror", 5);
        add_Method(MirrorClass, "methods", &Mirror_methods);
        add_Method(MirrorClass, "methodNames", &Mirror_methodNames);
        add_Method(MirrorClass, "getMethod(1)", &Mirror_getMethod);
        add_Method(MirrorClass, "asString", &Mirror_asString);
        add_Method(MirrorClass, "asDebugString", &Mirror_asString);
    }
    Object o = alloc_obj(sizeof(Object), MirrorClass);
    struct MirrorObject *p = (struct MirrorObject*)o;
    p->obj = obj;
    return o;
}

Object mirrors_reflect(Object self, int nparams, int *argcv, Object *args,
        int flags) {
    if (nparams != 1)
        gracedie("mirrors.reflect requires one argument");
    return alloc_mirror(args[0]);
}

Object mirrors_loadDynamicModule(Object self, int nparams, int *argcv,
        Object *argv, int flags) {
    if (nparams != 1)
        gracedie("mirrors.loadDynamicModule requires one argument");
    char *s = grcstring(argv[0]);
    return dlmodule(s);
}

Object mirrors_asString() {
    return alloc_String("the mirrors module");
}

// Create and return a Grace object with the above functions as methods.
Object module_mirrors_init() {
    if (module_mirrors != NULL)
        return module_mirrors;
    ClassData c = alloc_class("mirrors", 4);
    add_Method(c, "asString", &mirrors_asString);
    add_Method(c, "asDebugString", &mirrors_asString);
    add_Method(c, "reflect(1)", &mirrors_reflect);
    add_Method(c, "loadDynamicModule(1)", &mirrors_loadDynamicModule);
    Object o = alloc_newobj(0, c);
    module_mirrors = o;
    gc_root(module_mirrors);
    return o;
}

