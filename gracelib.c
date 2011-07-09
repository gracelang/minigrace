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

struct ClosureVarBinding {
    char *name;
    struct Object **ptr;
};
struct Method {
    char *name;
    struct Object* (*func)(struct Object*, int,
            struct Object**);
    struct Object*** closure;
    struct Object* (*cfunc)(struct Object*, int,
            struct Object**, struct Object ***closure);
};

struct Object {
    int32_t flags;
    char type[32];
    struct Method **methods;
    struct Object **data;
    void **bdata;
    int nummethods;
    int methodspace;
};

typedef struct NewObject* Object;

typedef struct NewMethod {
    char *name;
    Object(*func)(Object, int, Object*, int);
} Method;

typedef struct ClassData {
    char *name;
    Method *methods;
    int nummethods;
}* ClassData;

struct NewObject {
    int32_t flags;
    ClassData class;
    char data[];
};

typedef union EitherObject {
    Object new;
    struct Object *old;
} EitherObject;

void addmethod(struct Object*, char*,
        struct Object* (*)(struct Object*, int, struct Object**));
struct Object *Float64_asString(Object, int nparams,
        Object*, int flags);
Object alloc_Float64(double);
Object Float64_Add(Object, int nparams,
        Object*, int flags);
struct Object *Object_asString(struct Object*, int nparams,
        struct Object**);
struct Object *Object_concat(struct Object*, int nparams,
        struct Object**);
struct Object *Object_NotEquals(struct Object*, int,
        struct Object**);
Object Object_Equals(struct Object*, int,
        struct Object**);
Object NewObject_NotEquals(Object, int,
        Object*, int);
Object alloc_String(const char*);
Object String_concat(Object, int nparams,
        Object*, int flags);
Object String_index(Object, int nparams,
        Object*, int flags);
void *callmethod(void *receiver, const char *name,
        int nparams, struct Object **args);
Object alloc_Boolean(int val);
struct Object *alloc_Octets(const char *data, int len);
Object alloc_ConcatString(Object, Object);
struct Object *alloc_Undefined();

Object alloc_Integer32(int);
void add_Method(ClassData, const char *,
        Object(*func)(Object, int, Object*, int));
Object alloc_newobj(int, ClassData);
ClassData alloc_class(const char *, int);

Object String_size(Object , int, Object *, int flags);
Object String_replace_with(Object , int, Object *, int flags);
Object makeEscapedString(char *);
void ConcatString__FillBuffer(Object s, char *c, int len);

struct Object *undefined = NULL;

struct Object *BOOLEAN_TRUE = NULL;
struct Object *BOOLEAN_FALSE = NULL;
struct Object *FLOAT64_ZERO = NULL;
struct Object *FLOAT64_ONE = NULL;
struct Object *FLOAT64_TWO = NULL;

#define FLOAT64_INTERN_MIN -10
#define FLOAT64_INTERN_MAX 10000
#define FLOAT64_INTERN_SIZE FLOAT64_INTERN_MAX-FLOAT64_INTERN_MIN

struct Object *Float64_Interned[FLOAT64_INTERN_SIZE];

struct Method **Float64_Methods = NULL;
int Float64_NumMethods = 0;
struct Method **String_Methods = NULL;
int String_NumMethods = 0;
struct Method **List_Methods = NULL;
int List_NumMethods = 0;
struct Method **Octets_Methods = NULL;
int Octets_NumMethods;
struct Method** ConcatString_methods = NULL;
int ConcatString_nummethods = 0;

struct Method *ObjectMethod_asString = NULL;
struct Method *ObjectMethod_concat = NULL;
struct Method *ObjectMethod_Equals = NULL;
struct Method *ObjectMethod_NotEquals = NULL;

ClassData Number;
ClassData Boolean;
ClassData String;
ClassData ConcatString;
ClassData StringIter;

struct StringObject {
    int32_t flags;
    ClassData class;
    int blen;
    int size;
    char body[];
};
struct ConcatStringObject {
    int32_t flags;
    ClassData class;
    int blen;
    int size;
    Object left;
    Object right;
};

int linenumber = 0;

int heapsize;

int objectcount = 0;
int Strings_allocated = 0;

int start_clocks = 0;
double start_time = 0;

char **ARGV = NULL;

char callstack[256][256];
int calldepth = 0;
void backtrace() {
    int i;
    for (i=0; i<calldepth; i++) {
        fprintf(stderr, "  Called %s\n", callstack[i]);
    }
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
int istrue(struct Object *o) {
    return o != NULL && o != BOOLEAN_FALSE && o != undefined;
}
int isclass(void *v, const char *class) {
    struct Object *o = v;
    Object p = v;
    if (o->flags & 1) {
        return (strcmp(p->class->name, class) == 0);
    }
    return (strcmp(o->type, class) == 0);
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
    ConcatString__FillBuffer(s, c, z);
}
int integerfromAny(void *d) {
    struct Object *o = d;
    Object p = d;
    if (0 && o->flags & 1) {
        if (p->class == Number) {
            double d = *(double *)p->data;
            int i = d;
            return i;
        }
        if (strcmp(p->class->name, "Integer32") == 0) {
            return *(int*)p->data;
        }
    }
    o = callmethod(o, "asString", 0, NULL);
    char *c = cstringfromString(o);
    int i = atoi(c);
    free(c);
    return i;
}
struct Object* alloc_obj() {
    struct Object *x = glmalloc(sizeof(struct Object));
    strcpy(x->type, "Object");
    x->flags = 0;
    x->nummethods = 0;
    x->bdata = NULL;
    x->data = NULL;
    x->methods = glmalloc(4 * sizeof(struct Method*));
    x->methodspace = 4;
    if (ObjectMethod_asString == NULL) {
        addmethod(x, "asString", &Object_asString);
        ObjectMethod_asString = x->methods[0];
    } else {
        x->methods[0] = ObjectMethod_asString;
        x->nummethods++;
    }
    if (ObjectMethod_concat == NULL) {
        addmethod(x, "++", &Object_concat);
        ObjectMethod_concat = x->methods[1];
    } else {
        x->methods[1] = ObjectMethod_concat;
        x->nummethods++;
    }
    if (ObjectMethod_Equals == NULL) {
        addmethod(x, "==", &Object_Equals);
        ObjectMethod_Equals = x->methods[2];
    } else {
        x->methods[2] = ObjectMethod_Equals;
        x->nummethods++;
    }
    if (ObjectMethod_NotEquals == NULL) {
        addmethod(x, "/=", &Object_NotEquals);
        ObjectMethod_NotEquals = x->methods[3];
    } else {
        x->methods[3] = ObjectMethod_NotEquals;
        x->nummethods++;
    }
    objectcount++;
    return x;
}

struct Method* alloc_meth(char *name) {
    struct Method *x = glmalloc(sizeof(struct Method));
    x->name = glmalloc(strlen(name) + 1);
    strcpy(x->name, name);
    x->func = NULL;
    x->closure = NULL;
    x->cfunc = NULL;
    return x;
}

void addmethod(struct Object *o, char *name,
        struct Object* (*func)(struct Object*, int, struct Object**)) {
    int i;
    struct Method **meths;
    if (o->nummethods == o->methodspace) {
        meths = glmalloc(o->methodspace * 2
                    * sizeof(struct Method*));
        for (i=0; i<o->nummethods; i++)
            meths[i] = o->methods[i];
        struct Method **oldmeths = o->methods;
        o->methods = meths;
        free(oldmeths);
        o->methodspace *= 2;
    } else {
        meths = o->methods;
    }
    struct Method *meth = alloc_meth(name);
    meth->func = func;
    for (i=0; i<o->nummethods; i++) {
        struct Method *m = meths[i];
        if (strcmp(m->name, meth->name) == 0) {
            meths[i] = meth;
            meth = m;
        }
    }
    meths[o->nummethods] = meth;
    o->nummethods++;
}
void addclosuremethod(struct Object *o, char *name,
        struct Object* (*cfunc)(struct Object*, int, struct Object**,
            struct Object***), struct Object ***closure) {
    addmethod(o, name, NULL);
    int i;
    struct Method *m;
    for (i=0; i<o->nummethods; i++) {
        m = o->methods[i];
        if (strcmp(m->name, name) == 0) {
            break;
        }
    }
    m->cfunc = cfunc;
    m->closure = closure;
}
struct Object* identity_function(struct Object* receiver, int nparams,
        struct Object** params) {
    return receiver;
}
struct Object *Object_asString(struct Object* receiver, int nparams,
        struct Object** params) {
    int i = (int)&receiver;
    char buf[40];
    sprintf(buf, "%s[0x%x]", receiver->type, i);
    return alloc_String(buf);
}

struct Object *Object_concat(struct Object* receiver, int nparams,
        struct Object** params) {
    struct Object *a = callmethod(receiver, "asString", 0, NULL);
    return callmethod(a, "++", nparams, params);
}
struct Object *Object_NotEquals(struct Object* receiver, int nparams,
        struct Object** params) {
    struct Object* b = callmethod(receiver, "==", nparams, params);
    return callmethod(b, "not", 0, NULL);
}
Object NewObject_NotEquals(Object receiver, int nparams,
        Object* params, int flags) {
    Object b = callmethod(receiver, "==", nparams, params);
    return callmethod(b, "not", 0, NULL);
}
Object Object_Equals(struct Object* receiver, int nparams,
        struct Object** params) {
    return alloc_Boolean(receiver == params[0]);
}
Object String_Equals(Object self, int nparams,
        Object *params, int flags) {
    Object other = params[0];
    if ((other->class != String) && (other->class != ConcatString))
        return alloc_Boolean(0);
    struct StringObject* ss = (struct StringObject*)self;
    struct StringObject* so = (struct StringObject*)other;
    char theirs[so->blen + 1];
    bufferfromString(other, theirs);
    if (strcmp(ss->body, theirs)) {
        return alloc_Boolean(0);
    }
    return alloc_Boolean(1);
}
struct Object *ListIter_next(struct Object *self, int nparams,
        struct Object **args) {
    int *pos = self->bdata[0];
    struct Object *arr = self->data[0];
    int *len = arr->bdata[0];
    int rpos = *pos;
    *pos  = *pos + 1;
    return arr->data[rpos];
}
Object ListIter_havemore(struct Object *self, int nparams,
        struct Object **args) {
    int *pos = self->bdata[0];
    struct Object *arr = self->data[0];
    int *len = arr->bdata[0];
    if (*pos < *len)
        return alloc_Boolean(1);
    return alloc_Boolean(0);
}
struct Object *alloc_ListIter(struct Object *array) {
    struct Object *o = alloc_obj();
    o->data = glmalloc(sizeof(struct Object*));
    o->data[0] = array;
    strcpy(o->type, "ListIter");
    o->bdata = glmalloc(sizeof(void*));
    o->bdata[0] = glmalloc(sizeof(int));
    int *pos = o->bdata[0];
    *pos = 0;
    addmethod(o, "havemore", &ListIter_havemore);
    addmethod(o, "next", &ListIter_next);
    return o;
}
struct Object *List_pop(struct Object *self, int nparams,
        struct Object **args) {
    int *pos = self->bdata[0];
    *pos = *pos - 1;
    if (*pos < 0)
        die("popped from negative value: %i", *pos);
    return self->data[*pos];
}
Object List_push(struct Object *self, int nparams,
        struct Object **args) {
    struct Object *other = args[0];
    int *pos = self->bdata[0];
    int *size = self->bdata[1];
    if (*pos == *size) {
        struct Object **dt = glmalloc(sizeof(struct Object*) * *size * 2);
        *size = *size * 2;
        int i;
        for (i=0; i<*pos; i++)
            dt[i] = self->data[i];
        free(self->data);
        self->data = dt;
    }
    self->data[*pos] = other;
    *pos = *pos + 1;
    return alloc_Boolean(1);
}
struct Object *List_indexAssign(struct Object *self, int nparams,
        struct Object **args) {
    struct Object *idx = args[0];
    struct Object *val = args[1];
    int index = integerfromAny(idx);
    int *len = self->bdata[0];
    if (index >= *len) {
        die("Error: list index out of bounds: %i/%i",
                index, *len);
    }
    self->data[index] = val;
    return val;
}
Object List_contains(struct Object *self, int nparams,
        struct Object **args) {
    struct Object *other = args[0];
    struct Object *my, *b;
    int *len = self->bdata[0];
    int index;
    for (index=0; index<*len; index++) {
        my = self->data[index];
        b = callmethod(other, "==", 1, &my);
        if (istrue(b))
            return b;
    }
    return alloc_Boolean(0);
}
struct Object *List_index(struct Object *self, int nparams,
        struct Object **args) {
    int index = integerfromAny(args[0]);
    int *len = self->bdata[0];
    if (index >= *len) {
        fprintf(stderr, "Error: list index out of bounds: %i/%i\n",
                index, *len);
        exit(1);
    }
    return self->data[index];
}
struct Object *List_iter(struct Object *self, int nparams,
        struct Object **args) {
    return alloc_ListIter(self);
}
struct Object *List_length(struct Object *self, int nparams,
        struct Object **args) {
    int *pos = self->bdata[0];
    return alloc_Float64(*pos);
}
struct Object *List_asString(struct Object *self, int nparams,
        struct Object **args) {
    struct Object *other;
    int *lenp = self->bdata[0];
    int len = *lenp;
    int i = 0;
    struct Object *s = alloc_String("[");
    struct Object *c = alloc_String(",");
    for (i=0; i<len; i++) {
        other = callmethod(self->data[i], "asString", 0, NULL);
        s = callmethod(s, "++", 1, &other);
        if (i != len-1)
            s = callmethod(s, "++", 1, &c);
    }
    struct Object *cb = alloc_String("]");
    s = callmethod(s, "++", 1, &cb);
    return s;
}
struct Object *alloc_List() {
    struct Object *o = alloc_obj();
    strcpy(o->type, "List");
    o->bdata = glmalloc(sizeof(void*)*2);
    o->bdata[0] = glmalloc(sizeof(int));
    int *c = o->bdata[0];
    *c = 0;
    o->bdata[1] = glmalloc(sizeof(int));
    int *d = o->bdata[1];
    *d = 8;
    o->data = glmalloc(sizeof(struct Object*) * 8);
    if (List_Methods == NULL) {
        addmethod(o, "asString", &List_asString);
        addmethod(o, "at", &List_index);
        addmethod(o, "[]", &List_index);
        addmethod(o, "[]:=", &List_indexAssign);
        addmethod(o, "push", &List_push);
        addmethod(o, "pop", &List_pop);
        addmethod(o, "length", &List_length);
        addmethod(o, "size", &List_length);
        addmethod(o, "iter", &List_iter);
        addmethod(o, "contains", &List_contains);
        List_Methods = o->methods;
        List_NumMethods = o->nummethods;
    } else {
        o->methods = List_Methods;
        o->nummethods = List_NumMethods;
    }
    int *t = o->bdata[0];
    int r = *t;
    return o;
}
struct Object *Array_indexAssign(struct Object *self, int nparams,
        struct Object **args) {
    int idx = integerfromAny(args[0]);
    int size = (int)self->bdata[0];
    if (idx >= size || idx < 0)
        die("array index out of bounds: %i/%i", idx, size);
    self->data[idx] = args[1];
    return args[1];
}
struct Object *Array_index(struct Object *self, int nparams,
        struct Object **args) {
    int idx = integerfromAny(args[0]);
    int size = (int)self->bdata[0];
    if (idx >= size || idx < 0)
        die("array index out of bounds: %i/%i", idx, size);
    return self->data[idx];
}
struct Object *Array_size(struct Object *self, int nparams,
        struct Object **args) {
    int size = (int)self->bdata[0];
    return alloc_Float64(size);
}
struct Object *alloc_Array(int size) {
    struct Object *o = alloc_obj();
    strcpy(o->type, "Array");
    o->bdata = glmalloc(sizeof(void*));
    o->bdata[0] = (void*)size;
    o->data = glmalloc(sizeof(struct Object*) * size);
    struct Object *u = alloc_Undefined();
    int i;
    for (i=0; i<size; i++)
        o->data[i] = u;
    addmethod(o, "at", &Array_index);
    addmethod(o, "size", &Array_size);
    addmethod(o, "[]", &Array_index);
    addmethod(o, "[]:=", &Array_indexAssign);
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
    for (i=0; i<5; i++) {
        if (i < charlen) {
            int c = s[i] & 255;
            buf[i] = c;
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
    Object o = alloc_newobj(sizeof(int) + sizeof(Object), StringIter);
    int *pos = (int*)o->data;
    *pos = 0;
    Object *strp = (Object*)(o->data + sizeof(int));
    *strp = string;
    return o;
}

void ConcatString__FillBuffer(Object self, char *buf, int len) {
    struct ConcatStringObject *sself = (struct ConcatStringObject*)self;
    int size = sself->size;
    Object left = sself->left;
    Object right = sself->right;
    int i;
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
    char *a = cstringfromString(self);
    char *b = cstringfromString(args[0]);
    return alloc_Boolean(strcmp(a,b) == 0);
}
Object ConcatString_Concat(Object self, int nparams,
        Object *args, int flags) {
    Object o = callmethod(args[0], "asString", 0, NULL);
    return alloc_ConcatString(self, o);
}
Object ConcatString__escape(Object self, int nparams,
        Object *args, int flags) {
    char *c = cstringfromString(self);
    Object o = makeEscapedString(c);
    free(c);
    return o;
}
Object ConcatString_at(Object self, int nparams,
        Object *args, int flags) {
    struct ConcatStringObject *sself = (struct ConcatStringObject*)self;
    int p = integerfromAny(args[0]);
    int ms = *(int*)(self->data + sizeof(int));
    if (ms == 1 && p == 0)
        return self;
    Object left = sself->left;
    Object right = sself->right;
    struct StringObject *lefts = (struct StringObject*)left;
    struct StringObject *rights = (struct StringObject*)right;
    int ls = lefts->size;
    if (p < ls)
        return callmethod(left, "at", 1, args);
    Object d = args[0];
    Object lso = alloc_Float64(ls);
    d = callmethod(d, "-", 1, &lso);
    return callmethod(right, "at", 1, &d);
}
Object ConcatString_length(Object self, int nparams,
        Object *args) {
    struct ConcatStringObject *sself = (struct ConcatStringObject*)self;
    return alloc_Float64(sself->blen);
}
Object ConcatString_iter(Object self, int nparams,
        Object *args, int flags) {
    char *c = cstringfromString(self);
    Object o = alloc_String(c);
    free(c);
    return callmethod(o, "iter", 0, NULL);
}
Object ConcatString_substringFrom_to(Object self,
        int nparams, Object *args, int flags) {
    int st = integerfromAny(args[0]);
    int en = integerfromAny(args[1]);
    struct ConcatStringObject *sself = (struct ConcatStringObject*)self;
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
    for (i=0; i<cl; i++) {
        getutf8char(pos, cp);
        strcpy(bufp, cp);
        while (bufp[0] != 0) {
            pos++;
            bufp++;
        }
    }
    return alloc_String(buf);
}
Object alloc_ConcatString(Object left, Object right) {
    if (ConcatString == NULL) {
        ConcatString = alloc_class("ConcatString", 14);
        add_Method(ConcatString, "asString", &identity_function);
        add_Method(ConcatString, "++", &ConcatString_Concat);
        add_Method(ConcatString, "size", &String_size);
        add_Method(ConcatString, "at", &ConcatString_at);
        add_Method(ConcatString, "==", &ConcatString_Equals);
        add_Method(ConcatString, "/=", &Object_NotEquals);
        add_Method(ConcatString, "_escape", &ConcatString__escape);
        add_Method(ConcatString, "length", &ConcatString_length);
        add_Method(ConcatString, "iter", &ConcatString_iter);
        add_Method(ConcatString, "substringFrom()to",
                &ConcatString_substringFrom_to);
        add_Method(ConcatString, "replace()with", &String_replace_with);
    }
    struct StringObject *lefts = (struct StringObject*)left;
    struct StringObject *rights = (struct StringObject*)right;
    Object o = alloc_newobj(sizeof(int) * 2 + sizeof(Object) * 2, ConcatString);
    struct ConcatStringObject *so = (struct ConcatStringObject*)o;
    so->left = left;
    so->right = right;
    so->blen = lefts->blen + rights->blen;
    so->size = lefts->size + rights->size;
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
    int i = 0;
    char *ptr = ((struct StringObject*)(self))->body;
    while (i < idx){
        ptr += getutf8charlen(ptr);
        i++;
    }
    char buf[5];
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
    int mysize = sself->size;
    if (en > mysize)
        en = mysize;
    int cl = en - st;
    char buf[cl * 4 + 1];
    char *bufp = buf;
    buf[0] = 0;
    int i;
    char *pos = sself->body;
    for (i=0; i<st; i++) {
        pos += getutf8charlen(pos);
    }
    char cp[5];
    for (i=0; i<cl; i++) {
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
Object alloc_String(const char *data) {
    int blen = strlen(data);
    if (String == NULL) {
        String = alloc_class("String", 16);
        add_Method(String, "asString", &identity_function);
        add_Method(String, "++", &String_concat);
        add_Method(String, "at", &String_at);
        add_Method(String, "[]", &String_index);
        add_Method(String, "==", &String_Equals);
        add_Method(String, "/=", &NewObject_NotEquals);
        add_Method(String, "_escape", &String__escape);
        add_Method(String, "length", &String_length);
        add_Method(String, "size", &String_size);
        add_Method(String, "iter", &String_iter);
        add_Method(String, "ord", &String_ord);
        add_Method(String, "encode", &String_encode);
        add_Method(String, "substringFrom()to", &String_substringFrom_to);
        add_Method(String, "replace()with", &String_replace_with);
    }
    Object o = alloc_newobj(sizeof(int) * 2 + blen + 1, String);
    struct StringObject* so = (struct StringObject*)o;
    so->blen = blen;
    char *d = so->body;
    int size = 0;
    int i;
    for (i=0; i<blen; ) {
        int l = getutf8charlen(data + i);
        int j = i + l;
        for (; i<j; i++) {
            d[i] = data[i];
        }
        size = size + 1;
    }
    d[i] = 0;
    so->size = size;
    Strings_allocated++;
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
struct Object *Octets_size(struct Object *receiver, int nparams,
        struct Object **args) {
    int *size = receiver->bdata[1];
    return alloc_Float64(*size);
}
struct Object *Octets_asString(struct Object *receiver, int nparams,
        struct Object **args) {
    char *data = receiver->bdata[0];
    int *size = receiver->bdata[1];
    char *dt = glmalloc(4 + *size * 2);
    int i;
    dt[0] = 'x';
    dt[1] = '"';
    for (i=0; i<*size; i++) {
        sprintf(dt + 2 + i*2, "%x", (int)data[i]&255);
    }
    dt[2 + *size * 2] = '"';
    dt[3 + *size * 2] = 0;
    struct Object *ret = alloc_String(dt);
    free(dt);
    return ret;
}
struct Object *Octets_at(struct Object *receiver, int nparams,
        struct Object **args) {
    char *data = receiver->bdata[0];
    int *size = receiver->bdata[1];
    int i = integerfromAny(args[0]);
    if (i >= *size)
        die("Octets index out of bounds: %i/%i", i, *size);
    return alloc_Float64((int)data[i]&255);
}
Object Octets_Equals(struct Object *receiver, int nparams,
        struct Object **args) {
    char *data = receiver->bdata[0];
    int *size = receiver->bdata[1];
    struct Object *other = args[0];
    char *odata = other->bdata[0];
    int *osize = other->bdata[1];
    if (*size != *osize)
        return alloc_Boolean(0);
    int i;
    for (i=0; i<*size; i++)
        if (data[i] != odata[i])
            return alloc_Boolean(0);
    return alloc_Boolean(1);
}
struct Object *Octets_Concat(struct Object *receiver, int nparams,
        struct Object **args) {
    char *data = receiver->bdata[0];
    int *size = receiver->bdata[1];
    struct Object *other = args[0];
    char *odata = other->bdata[0];
    int *osize = other->bdata[1];
    int newsize = *size + *osize;
    char *newdata = glmalloc(newsize);
    int i;
    memcpy(newdata, data, *size);
    memcpy(newdata + *size, odata, *osize);
    struct Object *ret = alloc_Octets(newdata, newsize);
    free(newdata);
    return ret;
}
struct Object *Octets_decode(struct Object *receiver, int nparams,
        struct Object **args) {
    char *data = receiver->bdata[0];
    int *size = receiver->bdata[1];
    struct Object *codec = args[0];
    int newsize = *size + 1;
    char *newdata = glmalloc(newsize);
    memcpy(newdata, data, *size);
    newdata[*size] = 0;
    struct Object *ret = alloc_String(newdata);
    free(newdata);
    return ret;
}
struct Object *alloc_Octets(const char *data, int len) {
    struct Object *o = alloc_obj();
    strcpy(o->type, "Octets");
    o->bdata = glmalloc(sizeof(void*) * 2);
    o->bdata[0] = glmalloc(len);
    o->bdata[1] = glmalloc(sizeof(int));
    char *d = o->bdata[0];
    int *size = o->bdata[1];
    *size = len;
    memcpy(d, data, len);
    if (Octets_Methods == NULL) {
        addmethod(o, "asString", &Octets_asString);
        addmethod(o, "++", &Octets_Concat);
        addmethod(o, "at", &Octets_at);
        addmethod(o, "==", &Octets_Equals);
        addmethod(o, "size", &Octets_size);
        addmethod(o, "decode", &Octets_decode);
        Octets_Methods = o->methods;
        Octets_NumMethods = o->nummethods;
    } else {
        o->methods = Octets_Methods;
        o->nummethods = Octets_NumMethods;
    }
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
        List_push(arr, 1, &v);
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
    int i = (int)a;
    double b;
    if (other->class == Number)
        b = *(double*)other->data;
    else
        b = integerfromAny(other);
    int j = (int)b;
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
        Number = alloc_class("Number", 16);
        add_Method(Number, "+", &Float64_Add);
        add_Method(Number, "*", &Float64_Mul);
        add_Method(Number, "-", &Float64_Sub);
        add_Method(Number, "/", &Float64_Div);
        add_Method(Number, "%", &Float64_Mod);
        add_Method(Number, "==", &Float64_Equals);
        add_Method(Number, "/=", &NewObject_NotEquals);
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
    Object o = alloc_newobj(sizeof(double) + sizeof(Object), Number);
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
struct Object *Float64_asString(Object self, int nparams,
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
struct Object* Boolean_asString(Object self, int nparams,
        Object *args, int flags) {
    int myval = *(int*)self->data;
    if (myval) {
        return alloc_String("true");
    } else { 
        return alloc_String("false");
    }
}
Object Boolean_And(Object self, int nparams,
        Object *args, int flags) {
    int8_t myval = *(int8_t*)self->data;
    int8_t *otherval = *(int8_t*)args[0]->data;
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
Object Boolean_ifTrue(Object self, int nparams,
        Object *args, int flags) {
    int8_t myval = *(int8_t*)self->data;
    struct Object *block = args[0];
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
        Object *args) {
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
        Boolean = alloc_class("Boolean", 8);
        add_Method(Boolean, "asString", &Boolean_asString);
        add_Method(Boolean, "&", &Boolean_And);
        add_Method(Boolean, "|", &Boolean_Or);
        add_Method(Boolean, "prefix!", &Boolean_not);
        add_Method(Boolean, "not", &Boolean_not);
        add_Method(Boolean, "ifTrue", &Boolean_ifTrue);
        add_Method(Boolean, "==", &Boolean_Equals);
        add_Method(Boolean, "/=", &Boolean_NotEquals);
    }
    Object o = alloc_newobj(sizeof(int8_t), Boolean);
    int8_t *d = (int8_t*)o->data;
    *d = (int8_t)val;
    if (val)
        BOOLEAN_TRUE = o;
    else
        BOOLEAN_FALSE = o;
    return o;
}
Object File_close(struct Object *self, int nparams,
        struct Object **args) {
    FILE **fileP = self->bdata[0];
    FILE *file = *fileP;
    int rv = fclose(file);
    return alloc_Boolean(1);
}
Object File_write(struct Object *self, int nparams,
        struct Object **args) {
    FILE **fileP = self->bdata[0];
    FILE *file = *fileP;
    char *data = cstringfromString(args[0]);
    int len = strlen(data);
    int wrote = fwrite(data, sizeof(char), len, file);
    if (wrote != len) {
        perror("Error writing to file");
        die("Error writing to file.");
    }
    return alloc_Boolean(1);
}
struct Object *File_readline(struct Object *self, int nparams,
        struct Object **args) {
    FILE **fileP = self->bdata[0];
    FILE *file = *fileP;
    int bsize = 1024;
    char *buf = glmalloc(bsize);
    buf[0] = 0;
    char *cv = fgets(buf, bsize, file);
    struct Object *ret = alloc_String(buf);
    free(buf);
    return ret;
}
struct Object *File_read(struct Object *self, int nparams,
        struct Object **args) {
    FILE **fileP = self->bdata[0];
    FILE *file = *fileP;
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
struct Object *alloc_File_from_stream(FILE *stream) {
    struct Object *o = alloc_obj();
    strcpy(o->type, "File");
    o->bdata = glmalloc(sizeof(void*));
    o->bdata[0] = glmalloc(sizeof(FILE*));
    FILE **fileP = o->bdata[0];
    *fileP = stream;
    addmethod(o, "read", &File_read);
    addmethod(o, "write", &File_write);
    addmethod(o, "close", &File_close);
    return o;
}
struct Object *alloc_File(const char *filename, const char *mode) {
    FILE *file = fopen(filename, mode);
    if (file == NULL) {
        perror("File access failed");
        die("File access failed: could not open %s for %s.",
                filename, mode);
    }
    return alloc_File_from_stream(file);
}
struct Object *io_input(struct Object *self, int nparams,
        struct Object **args) {
    return self->data[0];
}
struct Object *io_output(struct Object *self, int nparams,
        struct Object **args) {
    return self->data[1];
}
struct Object *io_error(struct Object *self, int nparams,
        struct Object **args) {
    return self->data[2];
}
struct Object *io_open(struct Object *self, int nparams,
        struct Object **args) {
    struct Object *fnstr = args[0];
    struct Object *modestr = args[1];
    char *fn = cstringfromString(fnstr);
    char *mode = cstringfromString(modestr);
    struct Object *ret = alloc_File(fn, mode);
    free(fn);
    free(mode);
    return ret;
}
struct Object *io_system(struct Object *self, int nparams,
        struct Object **args) {
    struct Object *cmdstr = args[0];
    char *cmd = cstringfromString(cmdstr);
    int rv = system(cmd);
    struct Object *ret = alloc_Boolean(0);
    if (rv == 0)
        ret = alloc_Boolean(1);
    return ret;
}
Object io_newer(struct Object *self, int nparams,
        struct Object **args) {
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
Object io_exists(struct Object *self, int nparams,
        struct Object **args) {
    struct Object *so = args[0];
    struct StringObject *ss = (struct StringObject*)args[0];
    int sbl = ss->blen;
    char buf[sbl + 1];
    bufferfromString(so, buf);
    struct stat st;
    return alloc_Boolean(stat(buf, &st) == 0);
}
struct Object *module_io_init() {
    struct Object *o = alloc_obj();
    strcpy(o->type, "Module<io>");
    o->data = glmalloc(sizeof(struct Object*)*3);
    o->data[0] = alloc_File_from_stream(stdin);
    o->data[1] = alloc_File_from_stream(stdout);
    o->data[2] = alloc_File_from_stream(stderr);
    addmethod(o, "input", &io_input);
    addmethod(o, "output", &io_output);
    addmethod(o, "error", &io_error);
    addmethod(o, "open", &io_open);
    addmethod(o, "system", &io_system);
    addmethod(o, "exists", &io_exists);
    addmethod(o, "newer", &io_newer);
    return o;
}
struct Object *sys_argv(struct Object *self, int nparams,
        struct Object **args) {
    return self->data[0];
}
struct Object *argv_List = NULL;
void module_sys_init_argv(struct Object *argv) {
    argv_List = argv;
}
struct Object *sys_cputime(struct Object *self, int nparams,
        struct Object **args) {
    int i = clock() - start_clocks;
    double d = i;
    d /= CLOCKS_PER_SEC;
    return alloc_Float64(d);
}
struct Object *sys_elapsed(struct Object *self, int nparams,
        struct Object **args) {
    struct timeval ar;
    gettimeofday(&ar, NULL);
    double now = ar.tv_sec + (double)ar.tv_usec / 1000000;
    double d = now - start_time;
    return alloc_Float64(d);
}
struct Object *sys_exit(struct Object *self, int nparams,
        struct Object **args) {
    int i = integerfromAny(args[0]);
    exit(i);
    return NULL;
}
struct Object *sys_execPath(struct Object *self, int nparams,
        struct Object **args) {
    char *ep = ARGV[0];
    char epm[strlen(ep) + 1];
    strcpy(epm, ep);
    char *dn = dirname(epm);
    return alloc_String(dn);
}
struct Object *Array_new(struct Object *self, int nparams,
        struct Object **args) {
    int size = integerfromAny(args[0]);
    return alloc_Array(size);
}
struct Object *sys_Array_val = NULL;
struct Object *sys_Array(struct Object *self, int nparams,
        struct Object **args) {
    if (sys_Array_val != NULL)
        return sys_Array_val;
    sys_Array_val = alloc_obj();
    addmethod(sys_Array_val, "new", &Array_new);
    return sys_Array_val;
}
struct Object *module_sys_init() {
    struct Object *o = alloc_obj();
    strcpy(o->type, "Module<sys>");
    o->data = glmalloc(sizeof(struct Object*)*1);
    o->data[0] = argv_List;
    addmethod(o, "argv", &sys_argv);
    addmethod(o, "cputime", &sys_cputime);
    addmethod(o, "elapsed", &sys_elapsed);
    addmethod(o, "exit", &sys_exit);
    addmethod(o, "execPath", &sys_execPath);
    addmethod(o, "Array", &sys_Array);
    return o;
}
struct Object * alloc_Undefined() {
    if (undefined != NULL)
        return undefined;
    struct Object *o = alloc_obj();
    strcpy(o->type, "Undefined");
    undefined = o;
    return o;
}
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
    calldepth++;
    if (calldepth == 128) {
        die("Maximum call stack depth exceeded.");
    }
    if (m != NULL) {
        Object ret = m->func(self, argc, argv, 0);
        calldepth--;
        return ret;
    }
    die("Method lookup error: no %s in %s.",
            name, self->class->name);
    exit(1);
}
void *callmethod(void *receiver, const char *name,
        int nparams, struct Object **args) {
    int i;
    struct Method *m;
    struct Object *o;
    struct Object *r = receiver;
    if (r->flags & 1)
        return callmethod2(receiver, name, nparams, (Object*)args);
    for (i=0; i<r->nummethods; i++) {
        m = r->methods[i];
        if (strcmp(m->name, name) == 0)
            break;
        m = NULL;
    }
    sprintf(callstack[calldepth], "%s.%s (%i)", r->type, name,
            linenumber);
    calldepth++;
    if (calldepth == 128) {
        die("Maximum call stack depth exceeded.");
    }
    if (m != NULL) {
        if (m->closure != NULL) {
            o = m->cfunc(r, nparams, args, m->closure);
            calldepth--;
            return o;
        } else {
            o = m->func(r, nparams, args);
            calldepth--;
            return o;
        }
    }
    die("Method lookup error: no %s in %s.",
            name, r->type);
    exit(1);
}

struct Object *gracelib_print(struct Object *receiver, int nparams,
        struct Object **args) {
    int i;
    char *sp = " ";
    for (i=0; i<nparams; i++) {
        struct Object *o = args[i];
        if (i == nparams - 1)
            sp = "";
        o = callmethod(o, "asString", 0, NULL);
        char *s = cstringfromString(o);
        printf("%s%s", s, sp);
        free(s);
    }
    puts("");
    return alloc_Undefined();
}

struct Object*** createclosure(int size) {
    struct Object*** cvb = glmalloc(sizeof(struct Object **)
            * (size + 1));
    int i;
    for (i=0; i<=size; i++)
        cvb[i] = NULL;
    return cvb;
}
void addtoclosure(struct Object ***closure, struct Object **op) {
    int i;
    for (i=0; closure[i] != NULL; i++) {}
    closure[i] = op;
}
struct Object **getfromclosure(struct Object ***closure, int idx) {
    return closure[idx];
}
void adddatum(struct Object *obj, struct Object *datum, int index) {
    struct Object **newdata = glmalloc((index+2) * sizeof(struct Object*));
    int i = 0;
    if (obj->data != NULL) {
        while (obj->data[i] != NULL) {
            newdata[i] = obj->data[i];
            i++;
        }
    }
    newdata[i] = datum;
    newdata[i+1] = NULL;
    free(obj->data);
    obj->data = newdata;
}
struct Object *gracelib_readall(struct Object *self, int nparams,
        struct Object **args) {
    char *ptr = glmalloc(100000);
    int l = fread(ptr, 1, 100000, stdin);
    ptr[l] = 0;
    return alloc_String(ptr);
}
struct Object *gracelib_length(struct Object *self) {
    if (self == NULL) {
        die("null passed to gracelib_length()");
        exit(1);
    } else {
        return callmethod(self, "length", 0, NULL);
    }
}
struct Object **alloc_var() {
    return glmalloc(sizeof(struct Object*));
}
void add_Method(ClassData c, const char *name,
        Object(*func)(Object, int, Object*, int)) {
    int i;
    for (i=0; c->methods[i].name != NULL; i++) { }
    c->methods[i].name = glmalloc(strlen(name) + 1);
    strcpy(c->methods[i].name, name);
    c->methods[i].func = func;
    c->nummethods++;
}
Object alloc_newobj(int additional_size, ClassData class) {
    Object o = glmalloc(sizeof(struct NewObject) + additional_size);
    o->class = class;
    o->flags = 1;
    return o;
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
        Integer32 = alloc_class("Integer32", 14);
        add_Method(Integer32, "==", &Integer32_Equals);
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
    Object o = alloc_newobj(sizeof(int32_t), Integer32);
    int32_t *d = (int32_t*)o->data;
    *d = i;
    return (Object)o;
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
struct Object *dlmodule(const char *name) {
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
    struct Object *(*init)() = dlsym(handle, buf);
    return init();
}
void gracelib_stats() {
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
}
void setdatum(struct Object *o, struct Object**params, int idx) {
    o->data[idx] = params[0];
}
void setline(int l) {
    linenumber = l;
}
