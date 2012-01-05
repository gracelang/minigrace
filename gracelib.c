#include <stdio.h>
#include <stdarg.h>
#include <stdlib.h>
#include <string.h>
#include <dlfcn.h>
#include <time.h>
#include <sys/time.h>
#include <sys/stat.h>
#include <stdint.h>
#include <libgen.h>
#include <setjmp.h>

#include "gracelib.h"
Object Float64_asString(Object, int nparams,
        Object*, int flags);
Object Float64_Add(Object, int nparams,
        Object*, int flags);
Object Object_asString(Object, int nparams,
        Object*, int flags);
Object Object_Equals(Object, int,
        Object*, int flags);
Object Object_NotEquals(Object, int,
        Object*, int);
Object String_concat(Object, int nparams,
        Object*, int flags);
Object String_index(Object, int nparams,
        Object*, int flags);

Object String_size(Object , int, Object *, int flags);
Object String_at(Object , int, Object *, int flags);
Object String_replace_with(Object , int, Object *, int flags);
Object String_substringFrom_to(Object , int, Object *, int flags);
Object makeEscapedString(char *);
void ConcatString__FillBuffer(Object s, char *c, int len);
char *ConcatString__Flatten(Object s);

Object undefined = NULL;
Object none = NULL;
Object iomodule;
Object sysmodule;

Object BOOLEAN_TRUE = NULL;
Object BOOLEAN_FALSE = NULL;
Object FLOAT64_ZERO = NULL;
Object FLOAT64_ONE = NULL;
Object FLOAT64_TWO = NULL;

#define FLOAT64_INTERN_MIN -10
#define FLOAT64_INTERN_MAX 10000
#define FLOAT64_INTERN_SIZE FLOAT64_INTERN_MAX-FLOAT64_INTERN_MIN

Object Float64_Interned[FLOAT64_INTERN_SIZE];
Object String_Interned_1[256];

ClassData Number;
ClassData Boolean;
ClassData String;
ClassData ConcatString;
ClassData StringIter;
ClassData Octets;
ClassData List;
ClassData ListIter;
ClassData Undefined;
ClassData noneClass;
ClassData File;
ClassData IOModule;
ClassData SysModule;

struct StringObject {
    int32_t flags;
    ClassData class;
    int blen;
    int size;
    unsigned int hashcode;
    int ascii;
    char *flat;
    char body[];
};
struct ConcatStringObject {
    int32_t flags;
    ClassData class;
    int blen;
    int size;
    unsigned int hashcode;
    int ascii;
    char *flat;
    Object left;
    Object right;
};
struct OctetsObject {
    int32_t flags;
    ClassData class;
    int blen;
    char body[];
};
struct ListObject {
    int32_t flags;
    ClassData class;
    int size;
    int space;
    Object *items;
};
struct IOModuleObject {
    int32_t flags;
    ClassData class;
    Object _stdin;
    Object _stdout;
    Object _stderr;
};
struct FileObject {
    int32_t flags;
    ClassData class;
    FILE* file;
};
struct SysModule {
    int flags;
    ClassData class;
    Object argv;
};
struct UserClosure {
    int32_t flags;
    Object *vars[];
};

struct SFLinkList {
    void(*func)();
    struct SFLinkList *next;
};

struct BlockObject {
    int32_t flags;
    ClassData class;
    jmp_buf *retpoint;
    Object data[1];
};

struct SFLinkList *shutdown_functions;

int linenumber = 0;

int heapsize;

int objectcount = 0;
int Strings_allocated = 0;

int start_clocks = 0;
double start_time = 0;



char **ARGV = NULL;

int stack_size = 1024;
#define STACK_SIZE stack_size
static jmp_buf *return_stack;
Object return_value;
char (*callstack)[256];
int calldepth = 0;
void backtrace() {
    int i;
    for (i=0; i<calldepth; i++) {
        fprintf(stderr, "  Called %s\n", callstack[i]);
    }
}
void gracedie(char *msg, ...) {
    va_list args;
    va_start(args, msg);
    fprintf(stderr, "Error around line %i: ", linenumber);
    vfprintf(stderr, msg, args);
    fprintf(stderr, "\n");
    backtrace();
    va_end(args);
    exit(1);
}
void die(char *msg, ...) {
    va_list args;
    va_start(args, msg);
    fprintf(stderr, "Error around line %i: ", linenumber);
    vfprintf(stderr, msg, args);
    fprintf(stderr, "\n");
    backtrace();
    va_end(args);
    exit(1);
}

void *glmalloc(size_t s) {
    heapsize += s;
    void *v = malloc(s);
    return v;
}
void initprofiling() {
    start_clocks = clock();
    struct timeval ar;
    gettimeofday(&ar, NULL);
    start_time = ar.tv_sec + (double)ar.tv_usec / 1000000;
}
void grace_register_shutdown_function(void(*func)()) {
    struct SFLinkList *nw = glmalloc(sizeof(struct SFLinkList));
    nw->func = func;
    nw->next = shutdown_functions;
    shutdown_functions = nw;
}
void grace_run_shutdown_functions() {
    while (shutdown_functions != NULL) {
        shutdown_functions->func();
        shutdown_functions = shutdown_functions->next;
    }
}

int istrue(Object o) {
    if (o == undefined)
        die("Undefined value used in boolean test.");
    return o != NULL && o != BOOLEAN_FALSE && o != undefined;
}
int isclass(Object o, const char *class) {
    return (strcmp(o->class->name, class) == 0);
}
char *cstringfromString(Object s) {
    struct StringObject* so = (struct StringObject*)s;
    int zs = so->blen;
    zs = zs + 1;
    char *c = glmalloc(zs);
    if (s->class == String) {
        strcpy(c, so->body);
        return c;
    }
    ConcatString__Flatten(s);
    ConcatString__FillBuffer(s, c, zs);
    return c;
}
void bufferfromString(Object s, char *c) {
    struct StringObject* so = (struct StringObject*)s;
    if (s->class == String) {
        strcpy(c, so->body);
        return;
    }
    int z = so->blen;
    ConcatString__Flatten(s);
    ConcatString__FillBuffer(s, c, z);
}
int integerfromAny(Object p) {
    p = callmethod(p, "asString", 0, NULL);
    char *c = cstringfromString(p);
    int i = atoi(c);
    free(c);
    return i;
}
void addmethod2(Object o, char *name,
        Object (*func)(Object, int, Object*, int)) {
    add_Method(o->class, name, func);
}
Object identity_function(Object receiver, int nparams,
        Object* params, int flags) {
    return receiver;
}
Object Object_asString(Object receiver, int nparams,
        Object* params, int flags) {
    char buf[40];
    sprintf(buf, "%s[0x%p]", receiver->class->name, receiver);
    return alloc_String(buf);
}

Object Object_concat(Object receiver, int nparams,
        Object* params, int flags) {
    Object a = callmethod(receiver, "asString", 0, NULL);
    return callmethod(a, "++", nparams, params);
}
Object Object_NotEquals(Object receiver, int nparams,
        Object* params, int flags) {
    Object b = callmethod(receiver, "==", nparams, params);
    return callmethod(b, "not", 0, NULL);
}
Object Object_Equals(Object receiver, int nparams,
        Object* params, int flags) {
    return alloc_Boolean(receiver == params[0]);
}
Object String_Equals(Object self, int nparams,
        Object *params, int flags) {
    Object other = params[0];
    if ((other->class != String) && (other->class != ConcatString))
        return alloc_Boolean(0);
    struct StringObject* ss = (struct StringObject*)self;
    struct StringObject* so = (struct StringObject*)other;
    if (ss->size != so->size)
        return alloc_Boolean(0);
    char theirs[so->blen + 1];
    bufferfromString(other, theirs);
    if (strcmp(ss->body, theirs)) {
        return alloc_Boolean(0);
    }
    return alloc_Boolean(1);
}
Object ListIter_next(Object self, int nparams,
        Object *args, int flags) {
    int *pos = (int*)self->data;
    Object *arr = (Object*)(self->data + sizeof(int));
    struct ListObject *lst = (struct ListObject*)(*arr);
    int rpos = *pos;
    *pos  = *pos + 1;
    return lst->items[rpos];
}
Object ListIter_havemore(Object self, int nparams,
        Object *args, int flags) {
    int *pos = (int*)self->data;
    Object *arr = (Object*)(self->data + sizeof(int));
    struct ListObject *lst = (struct ListObject*)(*arr);
    int rpos = *pos;
    if (*pos < lst->size)
        return alloc_Boolean(1);
    return alloc_Boolean(0);
}
Object alloc_ListIter(Object array) {
    if (ListIter == NULL) {
        ListIter = alloc_class("ListIter", 2);
        add_Method(ListIter, "havemore", &ListIter_havemore);
        add_Method(ListIter, "next", &ListIter_next);
    }
    Object o = alloc_obj(sizeof(int) + sizeof(Object), ListIter);
    int *pos = (int*)o->data;
    Object *lst = (Object*)(o->data + sizeof(int));
    *pos = 0;
    *lst = array;
    return o;
}
Object List_pop(Object self, int nparams,
        Object *args, int flags) {
    struct ListObject *sself = (struct ListObject*)self;
    sself->size--;
    if (sself->size < 0)
        die("popped from negative value: %i", sself->size);
    return sself->items[sself->size];
}
Object List_push(Object self, int nparams,
        Object *args, int flags) {
    struct ListObject *sself = (struct ListObject*)self;
    Object other = args[0];
    if (sself->size == sself->space) {
        Object *dt = glmalloc(sizeof(Object) * sself->space * 2);
        sself->space *= 2;
        int i;
        for (i=0; i<sself->size; i++)
            dt[i] = sself->items[i];
        free(sself->items);
        sself->items = dt;
    }
    sself->items[sself->size] = other;
    sself->size++;
    return alloc_Boolean(1);
}
Object List_indexAssign(Object self, int nparams,
        Object *args, int flags) {
    struct ListObject *sself = (struct ListObject*)self;
    Object idx = args[0];
    Object val = args[1];
    int index = integerfromAny(idx);
    if (index > sself->size) {
        die("Error: list index out of bounds: %i/%i",
                index, sself->size);
    }
    if (index <= 0) {
        die("Error: list index out of bounds: %i <= 0",
                index);
    }
    index--;
    sself->items[index] = val;
    return val;
}
Object List_contains(Object self, int nparams,
        Object *args, int flags) {
    struct ListObject *sself = (struct ListObject*)self;
    Object other = args[0];
    Object my, b;
    int index;
    for (index=0; index<sself->size; index++) {
        my = sself->items[index];
        b = callmethod(other, "==", 1, &my);
        if (istrue(b))
            return b;
    }
    return alloc_Boolean(0);
}
Object List_index(Object self, int nparams,
        Object *args, int flags) {
    struct ListObject *sself = (struct ListObject*)self;
    int index = integerfromAny(args[0]);
    if (index > sself->size) {
        die("Error: list index out of bounds: %i/%i\n",
                index, sself->size);
    }
    if (index <= 0) {
        die("Error: list index out of bounds: %i <= 0",
                index);
    }
    index--;
    return sself->items[index];
}
Object List_iter(Object self, int nparams,
        Object *args, int flags) {
    return alloc_ListIter(self);
}
Object List_length(Object self, int nparams,
        Object *args, int flags) {
    struct ListObject *sself = (struct ListObject*)self;
    return alloc_Float64(sself->size);
}
Object List_asString(Object self, int nparams,
        Object *args, int flags) {
    struct ListObject *sself = (struct ListObject*)self;
    int len = sself->size;
    int i = 0;
    Object other;
    Object s = alloc_String("[");
    Object c = alloc_String(",");
    for (i=0; i<len; i++) {
        other = callmethod(sself->items[i], "asString", 0, NULL);
        s = callmethod(s, "++", 1, &other);
        if (i != len-1)
            s = callmethod(s, "++", 1, &c);
    }
    Object cb = alloc_String("]");
    s = callmethod(s, "++", 1, &cb);
    return s;
}
Object List_indices(Object self, int nparams,
        Object *args, int flags) {
    struct ListObject *sself = (struct ListObject*)self;
    Object o = alloc_List();
    int i;
    Object f;
    for (i=1; i<=sself->size; i++) {
        f = alloc_Float64(i);
        List_push(o, 1, &f, 0);
    }
    return o;
}
Object List_first(Object self, int nparams,
        Object *args, int flags) {
    struct ListObject *sself = (struct ListObject*)self;
    return sself->items[0];
}
Object List_last(Object self, int nparams,
        Object *args, int flags) {
    struct ListObject *sself = (struct ListObject*)self;
    return sself->items[sself->size-1];
}
Object List_prepended(Object self, int nparams,
        Object *args, int flags) {
    struct ListObject *sself = (struct ListObject*)self;
    int i;
    Object nl = alloc_List();
    callmethod(nl, "push", 1, args);
    for (i = 0; i < sself->size; i++) {
        List_push(nl, 1, sself->items + i, 0);
    }
    return nl;
}
Object alloc_List() {
    if (List == NULL) {
        List = alloc_class("List", 18);
        add_Method(List, "asString", &List_asString);
        add_Method(List, "at", &List_index);
        add_Method(List, "[]", &List_index);
        add_Method(List, "at(1)put", &List_indexAssign);
        add_Method(List, "[]:=", &List_indexAssign);
        add_Method(List, "push", &List_push);
        add_Method(List, "pop", &List_pop);
        add_Method(List, "length", &List_length);
        add_Method(List, "size", &List_length);
        add_Method(List, "iter", &List_iter);
        add_Method(List, "contains", &List_contains);
        add_Method(List, "==", &Object_Equals);
        add_Method(List, "!=", &Object_NotEquals);
        add_Method(List, "/=", &Object_NotEquals);
        add_Method(List, "indices", &List_indices);
        add_Method(List, "first", &List_first);
        add_Method(List, "last", &List_last);
        add_Method(List, "prepended", &List_prepended);
    }
    Object o = alloc_obj(sizeof(Object*) + sizeof(int) * 2, List);
    struct ListObject *lo = (struct ListObject*)o;
    lo->size = 0;
    lo->space = 8;
    lo->items = glmalloc(sizeof(Object) * 8);
    return o;
}
int getutf8charlen(const char *s) {
    int i;
    if ((s[0] & 128) == 0)
        return 1;
    if ((s[0] & 64) == 0) {
        // Unexpected continuation byte, error
        die("Unexpected continuation byte starting character: %x",
                (int)(s[0] & 255));
    }
    if ((s[0] & 32) == 0)
        return 2;
    if ((s[0] & 16) == 0)
        return 3;
    if ((s[0] & 8) == 0)
        return 4;
    return -1;
}
int getutf8char(const char *s, char buf[5]) {
    int i;
    int charlen = getutf8charlen(s);
    int cp = 0;
    for (i=0; i<5; i++) {
        if (i < charlen) {
            int c = s[i] & 255;
            buf[i] = c;
            if (i == 0) {
                if (charlen == 1)
                    cp = c;
                else if (charlen == 2)
                    cp = c & 31;
                else if (charlen == 3)
                    cp = c & 15;
                else
                    cp = c & 7;
            } else
                cp = (cp << 6) | (c & 63);
            if ((c == 192) || (c == 193) || (c > 244)) {
                die("Invalid byte in UTF-8 sequence: %x at position %i",
                        c, i);
            }
            if ((i > 0) && ((c & 192) != 128)) {
                die("Invalid byte in UTF-8 sequence, expected continuation "
                        "byte: %x at position %i", c, i);
            }
        } else
            buf[i] = 0;
    }
    if ((cp >= 0xD800) && (cp <= 0xDFFF)) {
        die("Illegal surrogate in UTF-8 sequence: U+%x", cp);
    }
    if ((cp & 0xfffe) == 0xfffe) {
        die("Illegal non-character in UTF-8 sequence: U+%x", cp);
    }
    if ((cp >= 0xfdd0) && (cp <= 0xfdef)) {
        die("Illegal non-character in UTF-8 sequence: U+%x", cp);
    }
    return 0;
}
Object StringIter_next(Object self, int nparams,
        Object *args, int flags) {
    int *pos = (int*)self->data;
    Object o = *(Object *)(self->data + sizeof(int));
    struct StringObject *str = (struct StringObject*)o;
    char *cstr = str->body;
    int rpos = *pos;
    int charlen = getutf8charlen(cstr + rpos);
    char buf[5];
    int i;
    *pos  = *pos + charlen;
    getutf8char(cstr + rpos, buf);
    return alloc_String(buf);
}
Object StringIter_havemore(Object self, int nparams,
        Object *args, int flags) {
    int *pos = (int*)self->data;
    Object *strp = (Object*)(self->data + sizeof(int));
    Object str = *strp;
    int len = *(int*)str->data;
    if (*pos < len)
        return alloc_Boolean(1);
    return alloc_Boolean(0);
}
Object alloc_StringIter(Object string) {
    if (StringIter == NULL) {
        StringIter = alloc_class("StringIter", 4);
        add_Method(StringIter, "havemore", &StringIter_havemore);
        add_Method(StringIter, "next", &StringIter_next);
    }
    Object o = alloc_obj(sizeof(int) + sizeof(Object), StringIter);
    int *pos = (int*)o->data;
    *pos = 0;
    Object *strp = (Object*)(o->data + sizeof(int));
    *strp = string;
    return o;
}

char *ConcatString__Flatten(Object self) {
    struct ConcatStringObject *s = (struct ConcatStringObject*)self;
    if (s->flat != NULL)
        return s->flat;
    char *flat = glmalloc(s->blen + 1);
    ConcatString__FillBuffer(self, flat, s->blen);
    s->flat = flat;
    return flat;
}

void ConcatString__FillBuffer(Object self, char *buf, int len) {
    struct ConcatStringObject *sself = (struct ConcatStringObject*)self;
    int size = sself->size;
    Object left = sself->left;
    Object right = sself->right;
    int i;
    if (sself->flat != NULL) {
        strncpy(buf, sself->flat, len);
        buf[sself->blen] = 0;
        return;
    }
    struct StringObject *lefts = (struct StringObject*)left;
    int ls = lefts->blen;
    if (left->class == String) {
        strncpy(buf, lefts->body, lefts->blen);
    } else {
        ConcatString__FillBuffer(left, buf, ls + 1);
    }
    buf[lefts->blen] = 0;
    buf += ls;
    len -= ls;
    struct StringObject *rights = (struct StringObject*)right;
    if (right->class == String) {
        strncpy(buf, rights->body, rights->blen);
    } else {
        ConcatString__FillBuffer(right, buf, rights->blen + 1);
    }
    buf[rights->blen] = 0;
}
Object String_indices(Object self, int nparams,
        Object *args, int flags) {
    struct StringObject *sself = (struct StringObject*)self;
    Object o = alloc_List();
    int i;
    Object f;
    for (i=1; i<=sself->size; i++) {
        f = alloc_Float64(i);
        List_push(o, 1, &f, 0);
    }
    return o;
}
Object ConcatString_Equals(Object self, int nparams,
        Object *args, int flags) {
    if (self == args[0])
        return alloc_Boolean(1);
    struct ConcatStringObject *sself = (struct ConcatStringObject*)self;
    struct ConcatStringObject *other = (struct ConcatStringObject*)args[0];
    if (sself->size != other->size)
        return alloc_Boolean(0);
    if (sself->blen != other->blen)
        return alloc_Boolean(0);
    char *a = ConcatString__Flatten(self);
    char *b = ConcatString__Flatten(args[0]);
    return alloc_Boolean(strcmp(a,b) == 0);
}
Object ConcatString_Concat(Object self, int nparams,
        Object *args, int flags) {
    Object o = callmethod(args[0], "asString", 0, NULL);
    return alloc_ConcatString(self, o);
}
Object ConcatString__escape(Object self, int nparams,
        Object *args, int flags) {
    char *c = ConcatString__Flatten(self);
    Object o = makeEscapedString(c);
    return o;
}
Object ConcatString_ord(Object self, int nparams,
        Object *args, int flags) {
    struct ConcatStringObject *sself = (struct ConcatStringObject*)self;
    Object left = sself->left;
    struct StringObject *lefts = (struct StringObject*)left;
    int ls = lefts->size;
    if (ls > 0)
        return callmethod(left, "ord", 0, NULL);
    Object right = sself->right;
    return callmethod(right, "ord", 0, NULL);
}
Object ConcatString_at(Object self, int nparams,
        Object *args, int flags) {
    struct ConcatStringObject *sself = (struct ConcatStringObject*)self;
    int p = integerfromAny(args[0]);
    int ms = *(int*)(self->data + sizeof(int));
    if (ms == 1 && p == 1)
        return self;
    ConcatString__Flatten(self);
    return String_at(self, nparams, args, flags);
}
Object ConcatString_length(Object self, int nparams,
        Object *args, int flags) {
    struct ConcatStringObject *sself = (struct ConcatStringObject*)self;
    return alloc_Float64(sself->blen);
}
Object ConcatString_iter(Object self, int nparams,
        Object *args, int flags) {
    char *c = ConcatString__Flatten(self);
    Object o = alloc_String(c);
    return callmethod(o, "iter", 0, NULL);
}
Object ConcatString_substringFrom_to(Object self,
        int nparams, Object *args, int flags) {
    int st = integerfromAny(args[0]);
    int en = integerfromAny(args[1]);
    st--;
    en--;
    struct ConcatStringObject *sself = (struct ConcatStringObject*)self;
    ConcatString__Flatten(self);
    return String_substringFrom_to(self, nparams, args, flags);
    int mysize = sself->size;
    if (en > mysize)
        en = mysize;
    int cl = en - st;
    int myblen = sself->blen;
    char buf[cl * 4 + 1];
    char *bufp = buf;
    char value[myblen + 1];
    ConcatString__FillBuffer(self, value, myblen);
    buf[0] = 0;
    int i;
    char *pos = value;
    for (i=0; i<st; i++) {
        pos += getutf8charlen(pos);
    }
    char cp[5];
    for (i=0; i<=cl; i++) {
        getutf8char(pos, cp);
        strcpy(bufp, cp);
        while (bufp[0] != 0) {
            pos++;
            bufp++;
        }
    }
    return alloc_String(buf);
}
Object ConcatString_hashcode(Object self, int nparams,
        Object *args, int flags) {
    struct ConcatStringObject *sself = (struct ConcatStringObject*)self;
    return alloc_Float64(sself->hashcode);
}
unsigned int uipow(unsigned int base, unsigned int exponent)
{
  if(exponent == 0)
      return 1;
  if(base == 0)
      return 0;
  unsigned int r = 1;
  while(1) {
    if(exponent & 1) r *= base;
    if((exponent >>= 1) == 0)	return r;
    base *= base;
  }
  return r;
}
Object alloc_ConcatString(Object left, Object right) {
    if (ConcatString == NULL) {
        ConcatString = alloc_class("ConcatString", 18);
        add_Method(ConcatString, "asString", &identity_function);
        add_Method(ConcatString, "++", &ConcatString_Concat);
        add_Method(ConcatString, "size", &String_size);
        add_Method(ConcatString, "at", &ConcatString_at);
        add_Method(ConcatString, "[]", &ConcatString_at);
        add_Method(ConcatString, "==", &ConcatString_Equals);
        add_Method(ConcatString, "!=", &Object_NotEquals);
        add_Method(ConcatString, "/=", &Object_NotEquals);
        add_Method(ConcatString, "_escape", &ConcatString__escape);
        add_Method(ConcatString, "length", &ConcatString_length);
        add_Method(ConcatString, "iter", &ConcatString_iter);
        add_Method(ConcatString, "substringFrom(1)to",
                &ConcatString_substringFrom_to);
        add_Method(ConcatString, "replace(1)with", &String_replace_with);
        add_Method(ConcatString, "hashcode", &ConcatString_hashcode);
        add_Method(ConcatString, "indices", &String_indices);
        add_Method(ConcatString, "ord", &ConcatString_ord);
    }
    struct StringObject *lefts = (struct StringObject*)left;
    struct StringObject *rights = (struct StringObject*)right;
    Object o = alloc_obj(sizeof(int) * 4 + sizeof(char*) * 1 +
            sizeof(Object) * 2, ConcatString);
    struct ConcatStringObject *so = (struct ConcatStringObject*)o;
    so->left = left;
    so->right = right;
    so->blen = lefts->blen + rights->blen;
    so->size = lefts->size + rights->size;
    so->ascii = lefts->ascii & rights->ascii;
    so->flat = NULL;
    so->hashcode = lefts->hashcode * uipow(23, rights->size) + rights->hashcode;
    return o;
}
Object String__escape(Object, int, Object*, int flags);
Object String_length(Object, int, Object*, int flags);
Object String_iter(Object receiver, int nparams,
        Object* args, int flags) {
    return alloc_StringIter(receiver);
}
Object String_at(Object self, int nparams,
        Object *args, int flags) {
    Object idxobj = args[0];
    int idx = integerfromAny(idxobj);
    idx--;
    int i = 0;
    char *ptr = ((struct StringObject*)(self))->flat;
    char buf[5];
    if (((struct StringObject*)(self))->ascii) {
        buf[0] = ptr[idx];
        buf[1] = 0;
        return alloc_String(buf);
    }
    while (i < idx){
        ptr += getutf8charlen(ptr);
        i++;
    }
    getutf8char(ptr, buf);
    return alloc_String(buf);
}
Object String_ord(Object self, int nparams,
        Object *args, int flags) {
    struct StringObject* sself = (struct StringObject*)self;
    char buf[5];
    int i;
    int codepoint = 0;
    getutf8char(sself->body, buf);
    if (buf[1] == 0)
        return alloc_Float64((int)buf[0]&127);
    if (buf[2] == 0)
        codepoint = buf[0] & 31;
    else if (buf[3] == 0)
        codepoint = buf[0] & 15;
    else
        codepoint = buf[0] & 7;
    for (i=1; buf[i] != 0; i++) {
        int more = buf[i] & 63;
        codepoint = codepoint << 6;
        codepoint = codepoint | more;
    }
    return alloc_Float64(codepoint);
}
Object String_size(Object self, int nparams,
        Object *args, int flags) {
    struct StringObject* sself = (struct StringObject*)self;
    return alloc_Float64(sself->size);
}
Object String_encode(Object self, int nparams,
        Object *args, int flags) {
    struct StringObject* sself = (struct StringObject*)self;
    return alloc_Octets(sself->body,
            sself->blen);
}
Object String_substringFrom_to(Object self,
        int nparams, Object *args, int flags) {
    struct StringObject* sself = (struct StringObject*)self;
    int st = integerfromAny(args[0]);
    int en = integerfromAny(args[1]);
    st--;
    en--;
    int mysize = sself->size;
    if (en > mysize)
        en = mysize;
    int cl = en - st;
    char buf[cl * 4 + 1];
    char *bufp = buf;
    buf[0] = 0;
    int i;
    char *pos = sself->flat;
    for (i=0; i<st; i++) {
        pos += getutf8charlen(pos);
    }
    char cp[5];
    for (i=0; i<=cl; i++) {
        getutf8char(pos, cp);
        strcpy(bufp, cp);
        while (bufp[0] != 0) {
            pos++;
            bufp++;
        }
    }
    return alloc_String(buf);
}
Object String_replace_with(Object self,
        int nparams, Object *args, int flags) {
    struct StringObject* sself = (struct StringObject*)self;
    struct StringObject* sa = (struct StringObject*)args[0];
    struct StringObject* sb = (struct StringObject*)args[1];
    int *al = &sa->blen;
    int *bl = &sb->blen;
    int *ml = &sself->blen;
    char what_buf[*al + 1];
    char with_buf[*bl + 1];
    char my_buf[*ml + 1];
    char *what = what_buf;
    char *with = with_buf;
    char *my = my_buf;
    bufferfromString(args[0], what);
    bufferfromString(args[1], with);
    bufferfromString(self, my);
    char *ins;
    char *tmp;
    char *lst;
    int whatlen;
    int withlen;
    int startlen;
    int count;
    if (!(ins = strstr(my, what)))
        return self;
    if (!with)
        with = "";
    whatlen = strlen(what);
    withlen = strlen(with);
    lst = NULL;
    for (count = 0; (tmp = strstr(ins, what)); ++count) {
        ins = tmp + 1;
        lst = ins;
    }
    char result[*ml + (withlen - whatlen) * count + 1];
    result[0] = 0;
    tmp = result;
    int i;
    ins = strstr(my, what);
    for (i=0; i<count; i++) {
        startlen = ins - my;
        tmp = strncpy(tmp, my, startlen) + startlen;
        tmp = strcpy(tmp, with) + withlen;
        my += startlen + whatlen;
        ins = strstr(my, what);
    }
    strcpy(tmp, my);
    return alloc_String(result);
}
Object String_hashcode(Object self, int nparams,
        Object *args, int flags) {
    struct StringObject* sself = (struct StringObject*)self;
    return alloc_Float64(sself->hashcode);
}
Object alloc_String(const char *data) {
    int blen = strlen(data);
    if (String == NULL) {
        String = alloc_class("String", 19);
        add_Method(String, "asString", &identity_function);
        add_Method(String, "++", &String_concat);
        add_Method(String, "at", &String_at);
        add_Method(String, "[]", &String_at);
        add_Method(String, "==", &String_Equals);
        add_Method(String, "!=", &Object_NotEquals);
        add_Method(String, "/=", &Object_NotEquals);
        add_Method(String, "_escape", &String__escape);
        add_Method(String, "length", &String_length);
        add_Method(String, "size", &String_size);
        add_Method(String, "iter", &String_iter);
        add_Method(String, "ord", &String_ord);
        add_Method(String, "encode", &String_encode);
        add_Method(String, "substringFrom(1)to", &String_substringFrom_to);
        add_Method(String, "replace(1)with", &String_replace_with);
        add_Method(String, "hashcode", &String_hashcode);
        add_Method(String, "indices", &String_indices);
    }
    if (blen == 1) {
        if (String_Interned_1[data[0]] != NULL)
            return String_Interned_1[data[0]];
    }
    Object o = alloc_obj(sizeof(int) * 4 + sizeof(char*) + blen + 1, String);
    struct StringObject* so = (struct StringObject*)o;
    so->blen = blen;
    char *d = so->body;
    int size = 0;
    int i;
    int hc = 0;
    int ascii = 1;
    for (i=0; i<blen; ) {
        int l = getutf8charlen(data + i);
        int j = i + l;
        if (l > 1 && ascii == 1)
            ascii = 0;
        for (; i<j; i++) {
            d[i] = data[i];
            hc *= 23;
            hc += data[i];
        }
        size = size + 1;
    }
    so->hashcode = hc;
    d[i] = 0;
    so->size = size;
    so->ascii = ascii;
    so->flat = so->body;
    Strings_allocated++;
    if (blen == 1) {
        String_Interned_1[data[0]] = o;
    }
    return o;
}
Object makeEscapedString(char *p) {
    int len = strlen(p);
    char buf[len * 3 + 1];
    int op;
    int ip;
    for (ip=0, op=0; ip<len; ip++, op++) {
        if (p[ip] == '"') {
            buf[op++] = '\\';
            buf[op++] = '2';
            buf[op] = '2';
        } else if (p[ip] == '\\') {
            buf[op++] = '\\';
            buf[op] = '\\';
        } else if (p[ip] >= 32 && p[ip] <= 126) {
            buf[op] = p[ip]; 
        } else {
            buf[op++] = '\\';
            char b2[3];
            b2[0] = 0;
            b2[1] = 0;
            b2[2] = 0;
            sprintf(b2, "%x", (int)p[ip]&255);
            if (b2[1] == 0) {
                buf[op++] = '0';
                buf[op] = b2[0];
            } else {
                buf[op++] = b2[0];
                buf[op] = b2[1];
            }
        }
    }
    buf[op] = 0;
    return alloc_String(buf);
}
Object String__escape(Object self, int nparams,
        Object *args, int flags) {
    struct StringObject* sself = (struct StringObject*)self;
    char *p = sself->body;
    return makeEscapedString(p);
}
Object String_length(Object self, int nparams,
        Object *args, int flags) {
    struct StringObject* sself = (struct StringObject*)self;
    return alloc_Float64(sself->blen);
}
Object String_index(Object self, int nparams,
        Object *args, int flags) {
    int index = integerfromAny(args[0]);
    struct StringObject* sself = (struct StringObject*)self;
    char buf[2];
    char *c = sself->body;
    buf[0] = c[index];
    buf[1] = '\0';
    return alloc_String(buf);
}
Object String_concat(Object self, int nparams,
        Object *args, int flags) {
    Object asStr = callmethod(args[0], "asString", 0, NULL);
    return alloc_ConcatString(self, asStr);
}
Object Octets_size(Object receiver, int nparams,
        Object *args, int flags) {
    struct OctetsObject *self = (struct OctetsObject*)receiver;
    return alloc_Float64(self->blen);
}
Object Octets_asString(Object receiver, int nparams,
        Object *args, int flags) {
    struct OctetsObject *self = (struct OctetsObject*)receiver;
    char *data = self->body;
    int size = self->blen;
    char dt[4 + size * 2];
    int i;
    dt[0] = 'x';
    dt[1] = '"';
    for (i=0; i<size; i++) {
        sprintf(dt + 2 + i*2, "%x", (int)data[i]&255);
    }
    dt[2 + size * 2] = '"';
    dt[3 + size * 2] = 0;
    return alloc_String(dt);
}
Object Octets_at(Object receiver, int nparams,
        Object *args, int flags) {
    struct OctetsObject *self = (struct OctetsObject*)receiver;
    char *data = self->body;
    int size = self->blen;
    int i = integerfromAny(args[0]);
    if (i >= size)
        die("Octets index out of bounds: %i/%i", i, size);
    return alloc_Float64((int)data[i]&255);
}
Object Octets_Equals(Object receiver, int nparams,
        Object *args, int flags) {
    struct OctetsObject *self = (struct OctetsObject*)receiver;
    struct OctetsObject *other = (struct OctetsObject*)args[0];
    if (self->blen != other->blen)
        return alloc_Boolean(0);
    int i;
    for (i=0; i<self->blen; i++)
        if (self->body[i] != other->body[i])
            return alloc_Boolean(0);
    return alloc_Boolean(1);
}
Object Octets_Concat(Object receiver, int nparams,
        Object *args, int flags) {
    struct OctetsObject *self = (struct OctetsObject*)receiver;
    struct OctetsObject *other = (struct OctetsObject*)args[0];
    int newsize = self->blen + other->blen;
    char newdata[newsize];
    int i;
    memcpy(newdata, self->body, self->blen);
    memcpy(newdata + self->blen, other->body, other->blen);
    return alloc_Octets(newdata, newsize);
}
Object Octets_decode(Object receiver, int nparams,
        Object *args, int flags) {
    struct OctetsObject *self = (struct OctetsObject*)receiver;
    Object codec = args[0];
    char newdata[self->blen + 1];
    memcpy(newdata, self->body, self->blen);
    newdata[self->blen] = 0;
    return alloc_String(newdata);
}
Object alloc_Octets(const char *data, int len) {
    if (Octets == NULL) {
        Octets = alloc_class("Octets", 8);
        add_Method(Octets, "asString", &Octets_asString);
        add_Method(Octets, "++", &Octets_Concat);
        add_Method(Octets, "at", &Octets_at);
        add_Method(Octets, "==", &Octets_Equals);
        add_Method(Octets, "!=", &Object_NotEquals);
        add_Method(Octets, "/=", &Object_NotEquals);
        add_Method(Octets, "size", &Octets_size);
        add_Method(Octets, "decode", &Octets_decode);
    }
    Object o = alloc_obj(sizeof(int) + len, Octets);
    struct OctetsObject *oo = (struct OctetsObject*)o;
    oo->blen = len;
    memcpy(oo->body, data, len);
    return o;
}
Object Float64_Range(Object self, int nparams,
        Object *args, int flags) {
    Object other = args[0];
    double a = *(double*)self->data;
    double b = *(double*)other->data;
    int i = a;
    int j = b;
    Object arr = alloc_List();
    for (; i<=b; i++) {
        Object v = alloc_Float64(i);
        List_push(arr, 1, &v, 0);
    }
    return (Object)arr;
}
Object Float64_Add(Object self, int nparams,
        Object *args, int flags) {
    Object other = args[0];
    double a = *((double*)self->data);
    double b;
    if (other->class == Number)
        b = *(double*)other->data;
    else
        b = integerfromAny(other);
    return alloc_Float64(a+b);
}
Object Float64_Sub(Object self, int nparams,
        Object *args, int flags) {
    Object other = args[0];
    double a = *(double*)self->data;
    double b;
    if (other->class == Number)
        b = *(double*)other->data;
    else
        b = integerfromAny(other);
    return alloc_Float64(a-b);
}
Object Float64_Mul(Object self, int nparams,
        Object *args, int flags) {
    Object other = args[0];
    double a = *(double*)self->data;
    double b;
    if (other->class == Number)
        b = *(double*)other->data;
    else
        b = integerfromAny(other);
    return alloc_Float64(a*b);
}
Object Float64_Div(Object self, int nparams,
        Object *args, int flags) {
    Object other = args[0];
    double a = *(double*)self->data;
    double b;
    if (other->class == Number)
        b = *(double*)other->data;
    else
        b = integerfromAny(other);
    return alloc_Float64(a/b);
}
Object Float64_Mod(Object self, int nparams,
        Object *args, int flags) {
    Object other = args[0];
    double a = *(double*)self->data;
    unsigned int i = (unsigned int)a;
    double b;
    if (other->class == Number)
        b = *(double*)other->data;
    else
        b = integerfromAny(other);
    unsigned int j = (unsigned int)b;
    return alloc_Float64(i % j);
}
Object Float64_Equals(Object self, int nparams,
        Object *args, int flags) {
    Object other = args[0];
    double a = *(double*)self->data;
    double b;
    if (other->class == Number)
        b = *(double*)other->data;
    else {
        return alloc_Boolean(0);
    }
    return alloc_Boolean(a == b);
}
Object Float64_LessThan(Object self, int nparams,
        Object *args, int flags) {
    Object other = args[0];
    double a = *(double*)self->data;
    double b;
    if (other->class == Number)
        b = *(double*)other->data;
    else
        b = integerfromAny(other);
    return alloc_Boolean(a < b);
}
Object Float64_GreaterThan(Object self, int nparams,
        Object *args, int flags) {
    Object other = args[0];
    double a = *(double*)self->data;
    double b;
    if (other->class == Number)
        b = *(double*)other->data;
    else
        b = integerfromAny(other);
    return alloc_Boolean(a > b);
}
Object Float64_LessOrEqual(Object self, int nparams,
        Object *args, int flags) {
    Object other = args[0];
    double a = *(double*)self->data;
    double b;
    if (other->class == Number)
        b = *(double*)other->data;
    else
        b = integerfromAny(other);
    return alloc_Boolean(a <= b);
}
Object Float64_GreaterOrEqual(Object self, int nparams,
        Object *args, int flags) {
    Object other = args[0];
    double a = *(double*)self->data;
    double b;
    if (other->class == Number)
        b = *(double*)other->data;
    else
        b = integerfromAny(other);
    return alloc_Boolean(a >= b);
}
Object Float64_Negate(Object self, int nparams,
        Object *args, int flags) {
    double a = *(double*)self->data;
    return alloc_Float64(-a);
}
Object Float64_asInteger32(Object self, int nparams,
        Object *args, int flags) {
    int i = integerfromAny(self);
    return alloc_Integer32(i);
}
Object Float64_hashcode(Object self, int nparams,
        Object *args) {
    double *d = (double*)self->data;
    uint32_t *w1 = (uint32_t*)d;
    uint32_t *w2 = (uint32_t*)(d + 4);
    uint32_t hc = *w1 ^ *w2;
    return alloc_Float64(hc);
}
Object alloc_Float64(double num) {
    if (num == 0 && FLOAT64_ZERO != NULL)
        return FLOAT64_ZERO;
    if (num == 1 && FLOAT64_ONE != NULL)
        return FLOAT64_ONE;
    if (num == 2 && FLOAT64_TWO != NULL)
        return FLOAT64_TWO;
    int ival = num;
    if (ival == num && ival >= FLOAT64_INTERN_MIN
            && ival < FLOAT64_INTERN_MAX
            && Float64_Interned[ival-FLOAT64_INTERN_MIN] != NULL)
        return Float64_Interned[ival-FLOAT64_INTERN_MIN];
    if (Number == NULL) {
        Number = alloc_class("Number", 19);
        add_Method(Number, "+", &Float64_Add);
        add_Method(Number, "*", &Float64_Mul);
        add_Method(Number, "-", &Float64_Sub);
        add_Method(Number, "/", &Float64_Div);
        add_Method(Number, "%", &Float64_Mod);
        add_Method(Number, "==", &Float64_Equals);
        add_Method(Number, "!=", &Object_NotEquals);
        add_Method(Number, "/=", &Object_NotEquals);
        add_Method(Number, "++", &Object_concat);
        add_Method(Number, "<", &Float64_LessThan);
        add_Method(Number, ">", &Float64_GreaterThan);
        add_Method(Number, "<=", &Float64_LessOrEqual);
        add_Method(Number, ">=", &Float64_GreaterOrEqual);
        add_Method(Number, "..", &Float64_Range);
        add_Method(Number, "asString", &Float64_asString);
        add_Method(Number, "asInteger32", &Float64_asInteger32);
        add_Method(Number, "prefix-", &Float64_Negate);
    }
    Object o = alloc_obj(sizeof(double) + sizeof(Object), Number);
    double *d = (double*)o->data;
    *d = num;
    Object *str = (Object*)(o->data + sizeof(double));
    *str = NULL;
    if (ival == num && ival >= FLOAT64_INTERN_MIN
            && ival < FLOAT64_INTERN_MAX)
        Float64_Interned[ival-FLOAT64_INTERN_MIN] = o;
    if (num == 0)
        FLOAT64_ZERO = o;
    if (num == 1)
        FLOAT64_ONE = o;
    if (num == 2)
        FLOAT64_TWO = o;
    return o;
}
Object Float64_asString(Object self, int nparams,
        Object *args, int flags) {
    Object *strp = (Object*)(self->data + sizeof(double));
    if (*strp != NULL)
        return *strp;
    double num = *(double*)self->data;
    char s[32];
    sprintf(s, "%f", num);
    int l = strlen(s) - 1;
    while (s[l] == '0')
        s[l--] = '\0';
    if (s[l] == '.')
        s[l] = '\0';
    Object str = alloc_String(s);
    *strp = str;
    return str;
}
Object Boolean_asString(Object self, int nparams,
        Object *args, int flags) {
    int myval = *(int8_t*)self->data;
    if (myval) {
        return alloc_String("true");
    } else { 
        return alloc_String("false");
    }
}
Object Boolean_And(Object self, int nparams,
        Object *args, int flags) {
    int8_t myval = *(int8_t*)self->data;
    int8_t otherval = *(int8_t*)args[0]->data;
    if (myval && otherval) {
        return self;
    } else { 
        return alloc_Boolean(0);
    }
}
Object Boolean_Or(Object self, int nparams,
        Object *args, int flags) {
    int8_t myval = *(int8_t*)self->data;
    int8_t otherval = *(int8_t*)args[0]->data;
    if (myval || otherval) {
        return alloc_Boolean(1);
    } else { 
        return alloc_Boolean(0);
    }
}
Object Boolean_AndAnd(Object self, int nparams,
        Object *args, int flags) {
    int8_t myval = *(int8_t*)self->data;
    if (!myval) {
        return self;
    }
    Object o = callmethod(args[0], "apply", 0, NULL);
    return o;
}
Object Boolean_OrOr(Object self, int nparams,
        Object *args, int flags) {
    int8_t myval = *(int8_t*)self->data;
    if (myval)
        return self;
    Object o = callmethod(args[0], "apply", 0, NULL);
    return o;
}
Object Boolean_ifTrue(Object self, int nparams,
        Object *args, int flags) {
    int8_t myval = *(int8_t*)self->data;
    Object block = args[0];
    if (myval) {
        return callmethod(block, "apply", 0, NULL);
    } else {
        return self;
    }
}
Object Boolean_not(Object self, int nparams,
        Object *args, int flags) {
    if (self == BOOLEAN_TRUE)
        return alloc_Boolean(0);
    return alloc_Boolean(1);
}
Object Boolean_Equals(Object self, int nparams,
        Object *args, int flags) {
    return alloc_Boolean(self == args[0]);
}
Object Boolean_NotEquals(Object self, int nparams,
        Object *args, int flags) {
    return alloc_Boolean(self != args[0]);
}
Object alloc_Boolean(int val) {
    if (val && BOOLEAN_TRUE != NULL)
        return BOOLEAN_TRUE;
    if (!val && BOOLEAN_FALSE != NULL)
        return BOOLEAN_FALSE;
    if (Boolean == NULL) {
        Boolean = alloc_class("Boolean", 11);
        add_Method(Boolean, "asString", &Boolean_asString);
        add_Method(Boolean, "&", &Boolean_And);
        add_Method(Boolean, "|", &Boolean_Or);
        add_Method(Boolean, "&&", &Boolean_AndAnd);
        add_Method(Boolean, "||", &Boolean_OrOr);
        add_Method(Boolean, "prefix!", &Boolean_not);
        add_Method(Boolean, "not", &Boolean_not);
        add_Method(Boolean, "ifTrue", &Boolean_ifTrue);
        add_Method(Boolean, "==", &Boolean_Equals);
        add_Method(Boolean, "!=", &Boolean_NotEquals);
        add_Method(Boolean, "/=", &Boolean_NotEquals);
    }
    Object o = alloc_obj(sizeof(int8_t), Boolean);
    int8_t *d = (int8_t*)o->data;
    *d = (int8_t)val;
    if (val)
        BOOLEAN_TRUE = o;
    else
        BOOLEAN_FALSE = o;
    return o;
}
Object File_close(Object self, int nparams,
        Object *args, int flags) {
    struct FileObject *s = (struct FileObject*)self;
    int rv = fclose(s->file);
    return alloc_Boolean(1);
}
Object File_write(Object self, int nparams,
        Object *args, int flags) {
    struct FileObject *s = (struct FileObject*)self;
    FILE *file = s->file;
    struct StringObject *so = (struct StringObject*)args[0];
    char data[so->blen+1];
    bufferfromString(args[0], data);
    int wrote = fwrite(data, sizeof(char), so->blen, file);
    if (wrote != so->blen) {
        perror("Error writing to file");
        die("Error writing to file.");
    }
    return alloc_Boolean(1);
}
Object File_readline(Object self, int nparams,
        Object *args, int flags) {
    struct FileObject *s = (struct FileObject*)self;
    FILE *file = s->file;
    int bsize = 1024;
    char buf[bsize];
    buf[0] = 0;
    char *cv = fgets(buf, bsize, file);
    Object ret = alloc_String(buf);
    return ret;
}
Object File_read(Object self, int nparams,
        Object *args, int flags) {
    struct FileObject *s = (struct FileObject*)self;
    FILE *file = s->file;
    int bsize = 128;
    int pos = 0;
    char *buf = glmalloc(bsize);
    pos += fread(buf, sizeof(char), bsize, file);
    while (!feof(file)) {
        bsize *= 2;
        buf = realloc(buf, bsize);
        pos += fread(buf+pos, sizeof(char), bsize-pos-1, file);
    }
    buf[pos] = 0;
    return alloc_String(buf);
}
Object alloc_File_from_stream(FILE *stream) {
    if (File == NULL) {
        File = alloc_class("File", 6);
        add_Method(File, "read", &File_read);
        add_Method(File, "write", &File_write);
        add_Method(File, "close", &File_close);
        add_Method(File, "==", &Object_Equals);
        add_Method(File, "!=", &Object_NotEquals);
        add_Method(File, "/=", &Object_NotEquals);
    }
    Object o = alloc_obj(sizeof(FILE*), File);
    struct FileObject* so = (struct FileObject*)o;
    so->file = stream;
    return o;
}
Object alloc_File(const char *filename, const char *mode) {
    FILE *file = fopen(filename, mode);
    if (file == NULL) {
        perror("File access failed");
        die("File access failed: could not open %s for %s.",
                filename, mode);
    }
    return alloc_File_from_stream(file);
}
Object io_input(Object self, int nparams,
        Object *args, int flags) {
    struct IOModuleObject *s = (struct IOModuleObject*)self;
    return s->_stdin;
}
Object io_output(Object self, int nparams,
        Object *args, int flags) {
    struct IOModuleObject *s = (struct IOModuleObject*)self;
    return s->_stdout;
}
Object io_error(Object self, int nparams,
        Object *args, int flags) {
    struct IOModuleObject *s = (struct IOModuleObject*)self;
    return s->_stderr;
}
Object io_open(Object self, int nparams,
        Object *args, int flags) {
    Object fnstr = args[0];
    Object modestr = args[1];
    char *fn = cstringfromString(fnstr);
    char *mode = cstringfromString(modestr);
    Object ret = alloc_File(fn, mode);
    free(fn);
    free(mode);
    return ret;
}
Object io_system(Object self, int nparams,
        Object *args, int flags) {
    Object cmdstr = args[0];
    char *cmd = cstringfromString(cmdstr);
    int rv = system(cmd);
    Object ret = alloc_Boolean(0);
    if (rv == 0)
        ret = alloc_Boolean(1);
    return ret;
}
Object io_newer(Object self, int nparams,
        Object *args, int flags) {
    struct StringObject *sa = (struct StringObject*)args[0];
    struct StringObject *sb = (struct StringObject*)args[1];
    int sal = sa->blen;
    char ba[sal + 1];
    bufferfromString((Object)sa, ba);
    int sbl = sb->blen;;
    char bb[sbl + 1];
    bufferfromString((Object)sb, bb);
    struct stat sta;
    struct stat stb;
    if (stat(ba, &sta) != 0)
        return alloc_Boolean(0);
    if (stat(bb, &stb) != 0)
        return alloc_Boolean(1);
    return alloc_Boolean(sta.st_mtime > stb.st_mtime);
}
Object io_exists(Object self, int nparams,
        Object *args, int flags) {
    Object so = args[0];
    struct StringObject *ss = (struct StringObject*)args[0];
    int sbl = ss->blen;
    char buf[sbl + 1];
    bufferfromString(so, buf);
    struct stat st;
    return alloc_Boolean(stat(buf, &st) == 0);
}
Object module_io_init() {
    if (iomodule != NULL)
        return iomodule;
    IOModule = alloc_class("Module<io>", 7);
    add_Method(IOModule, "input", &io_input);
    add_Method(IOModule, "output", &io_output);
    add_Method(IOModule, "error", &io_error);
    add_Method(IOModule, "open", &io_open);
    add_Method(IOModule, "system", &io_system);
    add_Method(IOModule, "exists", &io_exists);
    add_Method(IOModule, "newer", &io_newer);
    Object o = alloc_obj(sizeof(Object) * 3, IOModule);
    struct IOModuleObject *so = (struct IOModuleObject*)o;
    so->_stdin = alloc_File_from_stream(stdin);
    so->_stdout = alloc_File_from_stream(stdout);
    so->_stderr = alloc_File_from_stream(stderr);
    return o;
}
Object sys_argv(Object self, int nparams,
        Object *args, int flags) {
    struct SysModule *so = (struct SysModule*)self;
    return so->argv;
}
Object argv_List = NULL;
void module_sys_init_argv(Object argv) {
    argv_List = argv;
}
Object sys_cputime(Object self, int nparams,
        Object *args, int flags) {
    int i = clock() - start_clocks;
    double d = i;
    d /= CLOCKS_PER_SEC;
    return alloc_Float64(d);
}
Object sys_elapsed(Object self, int nparams,
        Object *args, int flags) {
    struct timeval ar;
    gettimeofday(&ar, NULL);
    double now = ar.tv_sec + (double)ar.tv_usec / 1000000;
    double d = now - start_time;
    return alloc_Float64(d);
}
Object sys_exit(Object self, int nparams,
        Object *args, int flags) {
    int i = integerfromAny(args[0]);
    gracelib_stats();
    exit(i);
    return NULL;
}
Object sys_execPath(Object self, int nparams,
        Object *args, int flags) {
    char *ep = ARGV[0];
    char epm[strlen(ep) + 1];
    strcpy(epm, ep);
    char *dn = dirname(epm);
    return alloc_String(dn);
}
Object module_sys_init() {
    if (sysmodule != NULL)
        return sysmodule;
    SysModule = alloc_class("Module<sys>", 5);
    add_Method(SysModule, "argv", &sys_argv);
    add_Method(SysModule, "cputime", &sys_cputime);
    add_Method(SysModule, "elapsed", &sys_elapsed);
    add_Method(SysModule, "exit", &sys_exit);
    add_Method(SysModule, "execPath", &sys_execPath);
    Object o = alloc_obj(sizeof(Object), SysModule);
    struct SysModule *so = (struct SysModule*)o;
    so->argv = argv_List;
    sysmodule = o;
    return o;
}
Object alloc_none() {
    if (none != NULL)
        return none;
    noneClass = alloc_class("none", 0);
    Object o = alloc_obj(0, noneClass);
    none = o;
    return o;
}
Object alloc_Undefined() {
    if (undefined != NULL)
        return undefined;
    Undefined = alloc_class("Undefined", 0);
    Object o = alloc_obj(0, Undefined);
    undefined = o;
    return o;
}
void block_return(Object self, Object obj) {
    struct UserObject *uo = (struct UserObject*)self;
    jmp_buf *buf = uo->retpoint;
    return_value = obj;
    longjmp(*buf, 1);
}
void block_savedest(Object self) {
    struct UserObject *uo = (struct UserObject*)self;
    uo->retpoint = (void *)&return_stack[calldepth-1];
}
FILE *callgraph;
int track_callgraph = 0;
Object callmethod2(Object self, const char *name,
        int argc, Object *argv) {
    ClassData c = self->class;
    Method *m = NULL;
    int i = 0;
    for (i=0; i < c->nummethods; i++) {
        if (strcmp(c->methods[i].name, name) == 0) {
            m = &c->methods[i];
            break;
        }
    }
    sprintf(callstack[calldepth], "%s.%s (%i)", self->class->name, name,
            linenumber);
    if (track_callgraph && calldepth > 0) {
        char tmp[255];
        char *prev;
        strcpy(tmp, callstack[calldepth-1]);
        prev = strtok(tmp, " ");
        fprintf(callgraph, "\"%s\" -> \"%s.%s\";\n", prev, self->class->name,
                name);
    }
    calldepth++;
    if (calldepth == STACK_SIZE) {
        die("Maximum call stack depth exceeded.");
    }
    if (m != NULL) {
        Object ret = m->func(self, argc, argv, 0);
        calldepth--;
        return ret;
    }
    fprintf(stderr, "Available methods are:\n");
    for (i=0; i<c->nummethods; i++) {
        fprintf(stderr, "  %s\n", c->methods[i].name);
    }
    die("Method lookup error: no %s in %s.",
            name, self->class->name);
    exit(1);
}
Object callmethod(Object receiver, const char *name,
        int nparams, Object *args) {
    int i;
    int start_calldepth = calldepth;
    if (strcmp(name, "_apply") != 0 && strcmp(name, "apply") != 0
            && strcmp(name, "applyIndirectly") != 0) {
        if (setjmp(return_stack[calldepth])) {
            Object rv = return_value;
            return_value = NULL;
            calldepth = start_calldepth;
            return rv;
        }
    } else {
        memcpy(return_stack[calldepth], return_stack[calldepth-1],
                sizeof(return_stack[calldepth]));
    }
    if (receiver == undefined) {
        die("method call on undefined value");
    }
    for (i=0; i<nparams; i++)
        if (args[i] == undefined)
            die("undefined value used as argument to %s", name);
    return callmethod2(receiver, name, nparams, (Object*)args);
}
void enable_callgraph(char *filename) {
    callgraph = fopen(filename, "w");
    fprintf(callgraph, "digraph CallGraph {\n");
    track_callgraph = 1;
}
Object gracelib_print(Object receiver, int nparams,
        Object *args) {
    int i;
    char *sp = " ";
    for (i=0; i<nparams; i++) {
        Object o = args[i];
        if (i == nparams - 1)
            sp = "";
        o = callmethod(o, "asString", 0, NULL);
        char *s = ConcatString__Flatten(o);
        printf("%s%s", s, sp);
    }
    puts("");
    return none;
}

Object** createclosure(int size) {
    Object** cvb = glmalloc(sizeof(Object *)
            * (size + 1));
    int i;
    for (i=0; i<=size; i++)
        cvb[i] = NULL;
    return cvb;
}
void addtoclosure(Object **closure, Object *op) {
    int i;
    for (i=0; closure[i] != NULL; i++) {}
    closure[i] = op;
}
Object *getfromclosure(Object **closure, int idx) {
    return closure[idx];
}
Object gracelib_readall(Object self, int nparams,
        Object *args) {
    char *ptr = glmalloc(100000);
    int l = fread(ptr, 1, 100000, stdin);
    ptr[l] = 0;
    return alloc_String(ptr);
}
Object gracelib_length(Object self) {
    if (self == NULL) {
        die("null passed to gracelib_length()");
        exit(1);
    } else {
        return callmethod(self, "length", 0, NULL);
    }
}
Object *alloc_var() {
    return glmalloc(sizeof(Object));
}
void add_Method(ClassData c, const char *name,
        Object(*func)(Object, int, Object*, int)) {
    int i;
    for (i=0; c->methods[i].name != NULL; i++) {
        if (strcmp(name, c->methods[i].name) == 0) {
            Object(*tmpf)(Object, int, Object*, int) = func;
            func = c->methods[i].func;
            c->methods[i].func = tmpf;
        }
    }
    c->methods[i].name = glmalloc(strlen(name) + 1);
    strcpy(c->methods[i].name, name);
    c->methods[i].func = func;
    c->nummethods++;
}
Object alloc_obj(int additional_size, ClassData class) {
    Object o = glmalloc(sizeof(struct Object) + additional_size);
    o->class = class;
    o->flags = 1;
    objectcount++;
    return o;
}
Object alloc_newobj(int additional_size, ClassData class) {
    return alloc_obj(additional_size, class);
}
ClassData alloc_class(const char *name, int nummethods) {
    ClassData c = glmalloc(sizeof(struct ClassData));
    c->name = glmalloc(strlen(name) + 1);
    strcpy(c->name, name);
    c->methods = glmalloc(sizeof(Method) * nummethods);
    c->nummethods = 0;
    int i;
    for (i=0; i<nummethods; i++) {
        c->methods[i].name = NULL;
        c->methods[i].flags = 0;
    }
    return c;
}

Object Integer32_Equals(Object self, int nargs, Object *args, int flags) {
    int ival = *(int*)self->data;
    int oval = integerfromAny(args[0]);
    return (Object)alloc_Boolean(ival == oval);
}
Object Integer32_NotEquals(Object self, int nargs, Object *args, int flags) {
    int ival = *(int*)self->data;
    int oval = integerfromAny(args[0]);
    return (Object)alloc_Boolean(ival /= oval);
}
Object Integer32_Plus(Object self, int nargs, Object *args, int flags) {
    int ival = *(int*)self->data;
    int oval;
    if (self->class == args[0]->class) {
        oval = *(int*)args[0]->data;
        return alloc_Integer32(ival + oval);
    }
    oval = integerfromAny(args[0]);
    return (Object)alloc_Float64(ival + oval);
}
Object Integer32_Times(Object self, int nargs, Object *args, int flags) {
    int ival = *(int*)self->data;
    int oval;
    if (self->class == args[0]->class) {
        oval = *(int*)args[0]->data;
        return alloc_Integer32(ival * oval);
    }
    oval = integerfromAny(args[0]);
    return (Object)alloc_Float64(ival * oval);
}
Object Integer32_Minus(Object self, int nargs, Object *args, int flags) {
    int ival = *(int*)self->data;
    int oval;
    if (self->class == args[0]->class) {
        oval = *(int*)args[0]->data;
        return alloc_Integer32(ival - oval);
    }
    oval = integerfromAny(args[0]);
    return (Object)alloc_Float64(ival - oval);
}
Object Integer32_DividedBy(Object self, int nargs, Object *args, int flags) {
    int ival = *(int*)self->data;
    int oval;
    if (self->class == args[0]->class) {
        oval = *(int*)args[0]->data;
        return alloc_Integer32(ival / oval);
    }
    oval = integerfromAny(args[0]);
    return (Object)alloc_Float64(ival / oval);
}
Object Integer32_LShift(Object self, int nargs, Object *args, int flags) {
    int ival = *(int*)self->data;
    int oval = integerfromAny(args[0]);
    return alloc_Integer32(ival << oval);
}
Object Integer32_RShift(Object self, int nargs, Object *args, int flags) {
    int ival = *(int*)self->data;
    int oval = integerfromAny(args[0]);
    return alloc_Integer32(ival >> oval);
}
Object Integer32_And(Object self, int nargs, Object *args, int flags) {
    int ival = *(int*)self->data;
    int oval = integerfromAny(args[0]);
    return alloc_Integer32(ival & oval);
}
Object Integer32_Or(Object self, int nargs, Object *args, int flags) {
    int ival = *(int*)self->data;
    int oval = integerfromAny(args[0]);
    return alloc_Integer32(ival | oval);
}
Object Integer32_LessThan(Object self, int nargs, Object *args, int flags) {
    int ival = *(int*)self->data;
    int oval = integerfromAny(args[0]);
    return (Object)alloc_Boolean(ival < oval);
}
Object Integer32_GreaterThan(Object self, int nargs, Object *args, int flags) {
    int ival = *(int*)self->data;
    int oval = integerfromAny(args[0]);
    return (Object)alloc_Boolean(ival > oval);
}
Object Integer32_asString(Object self, int nargs, Object *args, int flags) {
    int ival = *(int*)self->data;
    char buf[12];
    sprintf(buf, "%i", ival);
    return (Object)alloc_String(buf);
}
Object Integer32_isInteger32(Object self, int nargs, Object *args, int flags) {
    return (Object)alloc_Boolean(1);
}
ClassData Integer32 = NULL;
Object alloc_Integer32(int i) {
    if (Integer32 == NULL) {
        Integer32 = alloc_class("Integer32", 15);
        add_Method(Integer32, "==", &Integer32_Equals);
        add_Method(Integer32, "!=", &Integer32_NotEquals);
        add_Method(Integer32, "/=", &Integer32_NotEquals);
        add_Method(Integer32, "+", &Integer32_Plus);
        add_Method(Integer32, "*", &Integer32_Times);
        add_Method(Integer32, "-", &Integer32_Minus);
        add_Method(Integer32, "/", &Integer32_DividedBy);
        add_Method(Integer32, "<", &Integer32_LessThan);
        add_Method(Integer32, ">", &Integer32_GreaterThan);
        add_Method(Integer32, "<<", &Integer32_LShift);
        add_Method(Integer32, ">>", &Integer32_RShift);
        add_Method(Integer32, "&", &Integer32_And);
        add_Method(Integer32, "|", &Integer32_Or);
        add_Method(Integer32, "asString", &Integer32_asString);
        add_Method(Integer32, "isInteger32", &Integer32_isInteger32);
    }
    Object o = alloc_obj(sizeof(int32_t), Integer32);
    int32_t *d = (int32_t*)o->data;
    *d = i;
    return (Object)o;
}
ClassData HashMap = NULL;
Object HashMap_undefined;
struct HashMapPair {
    Object key;
    Object value;
};
struct HashMap {
    int32_t flags;
    ClassData class;
    int nelems;
    int nslots;
    struct HashMapPair *table;
};
int HashMap__findSlot(struct HashMap* h, Object key) {
    Object ko = callmethod(key, "hashcode", 0, NULL);
    unsigned int hc = integerfromAny(ko);
    unsigned int s = hc % h->nslots;
    while (h->table[s].key != HashMap_undefined) {
        if (istrue(callmethod(h->table[s].key, "==", 1, &key)))
            return s;
        s = (s + 1) % h->nslots;
    }
    return s;
}
int HashMap__ensureSize(struct HashMap *h, Object key, unsigned int hc) {
    if (h->nelems > h->nslots / 2) {
        int oslots = h->nslots;
        h->nslots *= 2;
        struct HashMapPair* d = glmalloc(sizeof(struct HashMapPair) *
                h->nslots);
        struct HashMapPair *old = h->table;
        h->table = d;
        int i;
        for (i=0; i < h->nslots; i++)
            h->table[i].key = HashMap_undefined;
        for (i=0; i < oslots; i++) {
            struct HashMapPair p = old[i];
            if (p.key != HashMap_undefined) {
                unsigned int th = integerfromAny(callmethod(p.key, "hashcode", 0, NULL));
                th %= h->nslots;
                while (h->table[th].key != HashMap_undefined)
                    th = (th + 1) % h->nslots;
                h->table[th].key = p.key;
                h->table[th].value = p.value;
            }
        }
        free(old);
        hc = integerfromAny(callmethod(key, "hashcode", 0, NULL));
        hc %= h->nslots;
        while (h->table[hc].key != HashMap_undefined)
            hc = (hc + 1) % h->nslots;
    }
    return hc;
}
Object HashMap_contains(Object self, int nargs, Object *args, int flags) {
    struct HashMap *h = (struct HashMap*)self;
    unsigned int s = HashMap__findSlot(h, args[0]);
    Object tk = h->table[s].key;
    if (tk == HashMap_undefined)
        return alloc_Boolean(0);
    return alloc_Boolean(1);
}
Object HashMap_get(Object self, int nargs, Object *args, int flags) {
    struct HashMap *h = (struct HashMap*)self;
    unsigned int s = HashMap__findSlot(h, args[0]);
    Object tk = h->table[s].key;
    if (tk == HashMap_undefined) {
        Object p = callmethod(args[0], "asString", 0, NULL);
        char *c = cstringfromString(p);
        die("key '%s' not found in HashMap.", c);
    }
    return h->table[s].value;
}
Object HashMap_put(Object self, int nargs, Object *args, int flags) {
    struct HashMap *h = (struct HashMap*)self;
    unsigned int s = HashMap__findSlot(h, args[0]);
    if (h->table[s].key == HashMap_undefined) {
        h->nelems++;
        s = HashMap__ensureSize(h, args[0], s);
    }
    h->table[s].key = args[0];
    h->table[s].value = args[1];
    return self;
}
Object HashMap_asString(Object self, int nargs, Object *args, int flags) {
    struct HashMap *h = (struct HashMap*)self;
    int i;
    Object comma = alloc_String(", ");
    Object colon = alloc_String(": ");
    Object str = alloc_String("[{");
    int first = 1;
    for (i=0; i<h->nslots; i++) {
        struct HashMapPair p = h->table[i];
        if (p.key == HashMap_undefined)
            continue;
        if (!first)
            str = callmethod(str, "++", 1, &comma);
        first = 0;
        str = callmethod(str, "++", 1, &p.key);
        str = callmethod(str, "++", 1, &colon);
        str = callmethod(str, "++", 1, &p.value);
    }
    Object cls = alloc_String("}]");
    str = callmethod(str, "++", 1, &cls);
    return str;
}
Object alloc_HashMap() {
    if (HashMap == NULL) {
        HashMap = alloc_class("HashMap", 7);
        add_Method(HashMap, "==", &Object_Equals);
        add_Method(HashMap, "!=", &Object_NotEquals);
        add_Method(HashMap, "/=", &Object_NotEquals);
        add_Method(HashMap, "contains", &HashMap_contains);
        add_Method(HashMap, "get", &HashMap_get);
        add_Method(HashMap, "put", &HashMap_put);
        add_Method(HashMap, "asString", &HashMap_asString);
    }
    Object o = alloc_obj(sizeof(struct HashMap)
            + sizeof(struct HashMapPair*), HashMap);
    struct HashMap *h = (struct HashMap*)o;
    h->nelems = 0;
    h->nslots = 8;
    HashMap_undefined = alloc_Undefined();
    h->table = glmalloc(sizeof(struct HashMapPair) * 8);
    int i;
    for (i=0; i<h->nslots; i++) {
        h->table[i].key = HashMap_undefined;
    }
    return o;
}
Object HashMapClassObject_new(Object self, int nargs, Object *args, int flags) {
    return alloc_HashMap();
}
Object alloc_HashMapClassObject() {
    ClassData c = alloc_class("Class<HashMap>", 5);
    add_Method(c, "==", &Object_Equals);
    add_Method(c, "!=", &Object_NotEquals);
    add_Method(c, "/=", &Object_NotEquals);
    add_Method(c, "new", &HashMapClassObject_new);
    Object o = alloc_obj(0, c);
    return o;
}
Object Block_apply(Object self, int nargs, Object *args, int flags) {
    return callmethod(self, "_apply", nargs, args);
}
Object Block_applyIndirectly(Object self, int nargs, Object *args, int flags) {
    Object tuple = args[0];
    Object size = callmethod(tuple, "size", 0, NULL);
    int sz = integerfromAny(size);
    int i;
    Object rargs[sz];
    for (i=0; i<sz; i++) {
        Object flt = alloc_Float64(i + 1);
        rargs[i] = callmethod(tuple, "[]", 1, &flt);
    }
    return callmethod(self, "_apply", sz, rargs);
}
Object alloc_Block(Object self, Object(*body)(Object, int, Object*, int)) {
    ClassData c = alloc_class("Block«unknown:-1»", 8);
    add_Method(c, "asString", &Object_asString);
    add_Method(c, "++", &Object_concat);
    add_Method(c, "==", &Object_Equals);
    add_Method(c, "!=", &Object_NotEquals);
    add_Method(c, "/=", &Object_NotEquals);
    add_Method(c, "apply", &Block_apply);
    add_Method(c, "applyIndirectly", &Block_applyIndirectly);
    struct BlockObject *o = (struct BlockObject*)(
            alloc_obj(sizeof(jmp_buf*) + sizeof(Object), c));
    return (Object)o;
}
void set_type(Object o, int16_t t) {
    int32_t flags = o->flags;
    flags &= 0xffff;
    flags |= (t << 16);
    o->flags = flags;
}
Object alloc_userobj(int numMethods, int numFields) {
    ClassData c = alloc_class("Object", numMethods + 6);
    Object o = alloc_obj(sizeof(Object) * numFields + sizeof(jmp_buf *), c);
    add_Method(c, "asString", &Object_asString);
    add_Method(c, "++", &Object_concat);
    add_Method(c, "==", &Object_Equals);
    add_Method(c, "!=", &Object_NotEquals);
    add_Method(c, "/=", &Object_NotEquals);
    return o;
}
Object alloc_obj2(int numMethods, int numFields) {
    return alloc_userobj(numMethods, numFields);
}
void setclassname(Object self, char *name) {
    char *cpy = glmalloc(strlen(name) + 1);
    strcpy(cpy, name);
    self->class->name = cpy;
}
void adddatum2(Object o, Object datum, int index) {
    struct UserObject *uo = (struct UserObject*)o;
    uo->data[index] = datum;
}
Object getdatum2(Object o, int index) {
    struct UserObject *uo = (struct UserObject*)o;
    return uo->data[index];
}
Object process_varargs(Object *args, int fixed, int nargs) {
    int i = fixed;
    Object lst = alloc_List();
    for (; i<nargs; i++) {
        callmethod(lst, "push", 1, &args[i]);
    }
    return lst;
}
int find_gso(const char *name, char *buf) {
    // Try:
    // 1) .
    // 2) dirname(argv[0])
    // 3) GRACE_MODULE_PATH
    struct stat st;
    strcpy(buf, "./");
    strcat(buf, name);
    strcat(buf, ".gso");
    if (stat(buf, &st) == 0) {
        return 1;
    }
    char *ep = ARGV[0];
    char epm[strlen(ep) + 1];
    strcpy(epm, ep);
    char *dn = dirname(epm);
    strcpy(buf, dn);
    strcat(buf, "/");
    strcat(buf, name);
    strcat(buf, ".gso");
    if (stat(buf, &st) == 0) {
        return 1;
    }
    if (getenv("GRACE_MODULE_PATH") != NULL) {
        char *gmp = getenv("GRACE_MODULE_PATH");
        strcpy(buf, gmp);
        strcat(buf, "/");
        strcat(buf, name);
        strcat(buf, ".gso");
        if (stat(buf, &st) == 0) {
            return 1;
        }
    }
    return 0;
}
Object dlmodule(const char *name) {
    int blen = strlen(name) + 13;
    if (getenv("GRACE_MODULE_PATH") != NULL)
        blen += strlen(getenv("GRACE_MODULE_PATH"));
    char buf[blen];
    if (!find_gso(name, buf)) {
        fprintf(stderr, "minigrace: could not find dynamic module %s.\n",
                name);
        exit(1);
    }
    void *handle = dlopen(buf, RTLD_LAZY | RTLD_GLOBAL);
    strcpy(buf, "module_");
    strcat(buf, name);
    strcat(buf, "_init");
    Object (*init)() = dlsym(handle, buf);
    return init();
}
void gracelib_stats() {
    grace_run_shutdown_functions();
    if (track_callgraph)
        fprintf(callgraph, "}\n");
    if (getenv("GRACE_STATS") == NULL)
        return;
    fprintf(stderr, "Total objects allocated: %i\n", objectcount);
    fprintf(stderr, "Total strings allocated: %i\n", Strings_allocated);
    fprintf(stderr, "Total heap allocated: %iB\n", heapsize);
    fprintf(stderr, "                      %iKiB\n", heapsize/1024);
    fprintf(stderr, "                      %iMiB\n", heapsize/1024/1024);
    fprintf(stderr, "                      %iGiB\n", heapsize/1024/1024/1024);
    int nowclocks = (clock() - start_clocks);
    float clocks = nowclocks;
    clocks /= CLOCKS_PER_SEC;
    struct timeval ar;
    gettimeofday(&ar, NULL);
    double etime = ar.tv_sec + (double)ar.tv_usec / 1000000;
    etime -= start_time;
    fprintf(stderr, "CPU time: %f\n", clocks);
    fprintf(stderr, "Elapsed time: %f\n", etime);
}
void gracelib_argv(char **argv) {
    ARGV = argv;
    if (getenv("GRACE_STACK") != NULL) {
        stack_size = atoi(getenv("GRACE_STACK"));
    }
    callstack = calloc(STACK_SIZE, 256);
    // We need return_stack[-1] to be available.
    return_stack = calloc(STACK_SIZE + 1, sizeof(jmp_buf));
    return_stack++;
}
void setline(int l) {
    linenumber = l;
}
