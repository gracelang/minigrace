#include <stdio.h>
#include <stdarg.h>
#include <stdlib.h>
#include <string.h>
#include <dlfcn.h>
#include <time.h>
#include <sys/time.h>

struct ClosureVarBinding {
    char *name;
    struct Object **ptr;
};
struct Method {
    char *name;
    struct Object* (*func)(struct Object*, unsigned int,
            struct Object**);
    struct Object*** closure;
    struct Object* (*cfunc)(struct Object*, unsigned int,
            struct Object**, struct Object ***closure);
};

struct Object {
    char type[32];
    struct Method **methods;
    struct Object **data;
    void **bdata;
    int nummethods;
    int methodspace;
};

void addmethod(struct Object*, char*,
        struct Object* (*)(struct Object*, unsigned int, struct Object**));
struct Object *Float64_asString(struct Object*, unsigned int nparams,
        struct Object**);
struct Object *alloc_Float64(double);
struct Object *Float64_Add(struct Object*, unsigned int nparams,
        struct Object**);
struct Object *Object_asString(struct Object*, unsigned int nparams,
        struct Object**);
struct Object *Object_concat(struct Object*, unsigned int nparams,
        struct Object**);
struct Object *Object_NotEquals(struct Object*, unsigned int,
        struct Object**);
struct Object *Object_Equals(struct Object*, unsigned int,
        struct Object**);
struct Object* alloc_String(const char*);
struct Object *String_concat(struct Object*, unsigned int nparams,
        struct Object**);
struct Object *String_index(struct Object*, unsigned int nparams,
        struct Object**);
struct Object *callmethod(struct Object *receiver, const char *name,
        unsigned int nparams, struct Object **args);
struct Object *alloc_Boolean(int val);
struct Object *alloc_Octets(const char *data, int len);

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
struct Method **Array_Methods = NULL;
int Array_NumMethods = 0;
struct Method **Octets_Methods = NULL;
int Octets_NumMethods;

struct Method *ObjectMethod_asString = NULL;
struct Method *ObjectMethod_concat = NULL;
struct Method *ObjectMethod_Equals = NULL;
struct Method *ObjectMethod_NotEquals = NULL;

int linenumber = 0;

int heapsize;

int objectcount = 0;
int Strings_allocated = 0;

int start_clocks = 0;
double start_time = 0;

char callstack[128][128];
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
    return malloc(s);
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
char *cstringfromString(struct Object *s) {
    char *c = glmalloc(strlen(s->bdata[0]) + 1);
    strcpy(c, s->bdata[0]);
    return c;
}
struct Object* alloc_obj() {
    struct Object *x = glmalloc(sizeof(struct Object));
    strcpy(x->type, "Object");
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
        struct Object* (*func)(struct Object*, unsigned int, struct Object**)) {
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
        struct Object* (*cfunc)(struct Object*, unsigned int, struct Object**,
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
struct Object* identity_function(struct Object* receiver, unsigned int nparams,
        struct Object** params) {
    return receiver;
}
struct Object *Object_asString(struct Object* receiver, unsigned int nparams,
        struct Object** params) {
    int i = (int)&receiver;
    char buf[40];
    sprintf(buf, "%s[0x%x]", receiver->type, i);
    return alloc_String(buf);
}

struct Object *Object_concat(struct Object* receiver, unsigned int nparams,
        struct Object** params) {
    struct Object *a = callmethod(receiver, "asString", 0, NULL);
    return callmethod(a, "++", nparams, params);
}
struct Object *Object_NotEquals(struct Object* receiver, unsigned int nparams,
        struct Object** params) {
    struct Object* b = callmethod(receiver, "==", nparams, params);
    return callmethod(b, "not", 0, NULL);
}
struct Object *Object_Equals(struct Object* receiver, unsigned int nparams,
        struct Object** params) {
    return alloc_Boolean(receiver == params[0]);
}
struct Object *String_Equals(struct Object *receiver, unsigned int nparams,
        struct Object **params) {
    struct Object *other = params[0];
    if (strcmp(other->type, "String"))
        return alloc_Boolean(0);
    char *mine = receiver->bdata[0];
    char *theirs = other->bdata[0];
    if (strcmp(mine, theirs)) {
        return alloc_Boolean(0);
    }
    return alloc_Boolean(1);
}
struct Object *ArrayIter_next(struct Object *self, unsigned int nparams,
        struct Object **args) {
    int *pos = self->bdata[0];
    struct Object *arr = self->data[0];
    int *len = arr->bdata[0];
    int rpos = *pos;
    *pos  = *pos + 1;
    return arr->data[rpos];
}
struct Object *ArrayIter_havemore(struct Object *self, unsigned int nparams,
        struct Object **args) {
    int *pos = self->bdata[0];
    struct Object *arr = self->data[0];
    int *len = arr->bdata[0];
    if (*pos < *len)
        return alloc_Boolean(1);
    return alloc_Boolean(0);
}
struct Object *alloc_ArrayIter(struct Object *array) {
    struct Object *o = alloc_obj();
    o->data = glmalloc(sizeof(struct Object*));
    o->data[0] = array;
    strcpy(o->type, "ArrayIter");
    o->bdata = glmalloc(sizeof(void*));
    o->bdata[0] = glmalloc(sizeof(int));
    int *pos = o->bdata[0];
    *pos = 0;
    addmethod(o, "havemore", &ArrayIter_havemore);
    addmethod(o, "next", &ArrayIter_next);
    return o;
}
struct Object *Array_pop(struct Object *self, unsigned int nparams,
        struct Object **args) {
    int *pos = self->bdata[0];
    *pos = *pos - 1;
    return self->data[*pos];
}
struct Object *Array_push(struct Object *self, unsigned int nparams,
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
struct Object *Array_indexAssign(struct Object *self, unsigned int nparams,
        struct Object **args) {
    struct Object *idx = args[0];
    struct Object *val = args[1];
    idx = callmethod(idx, "asString", 0, NULL);
    int index = atoi(idx->bdata[0]);
    int *len = self->bdata[0];
    if (index >= *len) {
        die("Error: array index out of bounds: %i/%i",
                index, *len);
    }
    self->data[index] = val;
    return val;
}
struct Object *Array_contains(struct Object *self, unsigned int nparams,
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
struct Object *Array_index(struct Object *self, unsigned int nparams,
        struct Object **args) {
    struct Object *other = args[0];
    other = callmethod(other, "asString", 0, NULL);
    int index = atoi(other->bdata[0]);
    int *len = self->bdata[0];
    if (index >= *len) {
        fprintf(stderr, "Error: array index out of bounds: %i/%i\n",
                index, *len);
        exit(1);
    }
    return self->data[index];
}
struct Object *Array_iter(struct Object *self, unsigned int nparams,
        struct Object **args) {
    return alloc_ArrayIter(self);
}
struct Object *Array_length(struct Object *self, unsigned int nparams,
        struct Object **args) {
    int *pos = self->bdata[0];
    return alloc_Float64(*pos);
}
struct Object *Array_asString(struct Object *self, unsigned int nparams,
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
    free(cb);
    return s;
}
struct Object *alloc_Array() {
    struct Object *o = alloc_obj();
    strcpy(o->type, "Array");
    o->bdata = glmalloc(sizeof(void*)*2);
    o->bdata[0] = glmalloc(sizeof(int));
    int *c = o->bdata[0];
    *c = 0;
    o->bdata[1] = glmalloc(sizeof(int));
    int *d = o->bdata[1];
    *d = 8;
    o->data = glmalloc(sizeof(struct Object*) * 8);
    if (Array_Methods == NULL) {
        addmethod(o, "asString", &Array_asString);
        addmethod(o, "at", &Array_index);
        addmethod(o, "[]", &Array_index);
        addmethod(o, "[]:=", &Array_indexAssign);
        addmethod(o, "push", &Array_push);
        addmethod(o, "pop", &Array_pop);
        addmethod(o, "length", &Array_length);
        addmethod(o, "size", &Array_length);
        addmethod(o, "iter", &Array_iter);
        addmethod(o, "contains", &Array_contains);
        Array_Methods = o->methods;
        Array_NumMethods = o->nummethods;
    } else {
        o->methods = Array_Methods;
        o->nummethods = Array_NumMethods;
    }
    int *t = o->bdata[0];
    int r = *t;
    return o;
}
int getutf8charlen(char *s) {
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
int getutf8char(char *s, char buf[5]) {
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
struct Object *StringIter_next(struct Object *self, unsigned int nparams,
        struct Object **args) {
    int *pos = self->bdata[0];
    struct Object *str = self->data[0];
    char *cstr = str->bdata[0];
    int rpos = *pos;
    int charlen = getutf8charlen(cstr + rpos);
    char buf[5];
    int i;
    *pos  = *pos + charlen;
    getutf8char(cstr + rpos, buf);
    return alloc_String(buf);
}
struct Object *StringIter_havemore(struct Object *self, unsigned int nparams,
        struct Object **args) {
    int *pos = self->bdata[0];
    struct Object *str = self->data[0];
    int len = strlen(str->bdata[0]);
    if (*pos < len)
        return alloc_Boolean(1);
    return alloc_Boolean(0);
}
struct Object *alloc_StringIter(struct Object *string) {
    struct Object *o = alloc_obj();
    o->data = glmalloc(sizeof(struct Object*));
    o->data[0] = string;
    strcpy(o->type, "StringIter");
    o->bdata = glmalloc(sizeof(void*));
    o->bdata[0] = glmalloc(sizeof(int));
    int *pos = o->bdata[0];
    *pos = 0;
    addmethod(o, "havemore", &StringIter_havemore);
    addmethod(o, "next", &StringIter_next);
    return o;
}
struct Object *String__escape(struct Object*, unsigned int, struct Object**);
struct Object *String_length(struct Object*, unsigned int, struct Object**);
struct Object *String_iter(struct Object *receiver, unsigned int nparams,
        struct Object** args) {
    return alloc_StringIter(receiver);
}
struct Object *String_at(struct Object *receiver, unsigned int nparams,
        struct Object **args) {
    struct Object *idxobj = args[0];
    struct Object *as = callmethod(idxobj, "asString", 0, NULL);
    int idx = atoi(as->bdata[0]);
    int i = 0;
    char *ptr = receiver->bdata[0];
    while (i < idx){
        ptr += getutf8charlen(ptr);
        i++;
    }
    char buf[5];
    getutf8char(ptr, buf);
    return alloc_String(buf);
}
struct Object *String_ord(struct Object *receiver, unsigned int nparams,
        struct Object **args) {
    char buf[5];
    int i;
    unsigned int codepoint = 0;
    getutf8char(receiver->bdata[0], buf);
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
struct Object *String_size(struct Object *receiver, unsigned int nparams,
        struct Object **args) {
    // In the long run, this should be calculated on string allocation
    // (during strcpy), but it can't do that until the compiler is
    // fully Unicode-aware.
    char *s = receiver->bdata[0];
    int *z = receiver->bdata[1];
    int i;
    int size = 0;
    if (*z == -1) {
        for (i=0; s[i] != 0; ) {
            int l = getutf8charlen(s + i);
            i += l;
            size = size + 1;
        }
        *z = size;
    }
    return alloc_Float64(*z);
}
struct Object *String_encode(struct Object *receiver, unsigned int nparams,
        struct Object **args) {
    return alloc_Octets(receiver->bdata[0], strlen(receiver->bdata[0]));
}
struct Object *alloc_String(const char *data) {
    struct Object *o = alloc_obj();
    strcpy(o->type, "String");
    o->bdata = glmalloc(sizeof(void*) * 2);
    o->bdata[0] = glmalloc(strlen(data) + 1);
    o->bdata[1] = glmalloc(sizeof(int));
    char *d = o->bdata[0];
    int *size = o->bdata[1];
    *size = -1;
    strcpy(d, data);
    if (String_Methods == NULL) {
        addmethod(o, "asString", &identity_function);
        addmethod(o, "++", &String_concat);
        addmethod(o, "at", &String_at);
        addmethod(o, "[]", &String_index);
        addmethod(o, "==", &String_Equals);
        addmethod(o, "_escape", &String__escape);
        addmethod(o, "length", &String_length);
        addmethod(o, "size", &String_size);
        addmethod(o, "iter", &String_iter);
        addmethod(o, "ord", &String_ord);
        addmethod(o, "encode", &String_encode);
        String_Methods = o->methods;
        String_NumMethods = o->nummethods;
    } else {
        o->methods = String_Methods;
        o->nummethods = String_NumMethods;
    }
    Strings_allocated++;
    return o;
}
struct Object *String__escape(struct Object *self, unsigned int nparams,
        struct Object **args) {
    char *p = self->bdata[0];
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
            sprintf(b2, "%x", (unsigned int)p[ip]&255);
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
struct Object *String_length(struct Object *self, unsigned int nparams,
        struct Object **args) {
    char *c = self->bdata[0];
    return alloc_Float64(strlen(c));
}
struct Object *String_index(struct Object *self, unsigned int nparams,
        struct Object **args) {
    struct Object *other = args[0];
    other = callmethod(other, "asString", 0, NULL);
    int index = atoi(other->bdata[0]);
    char buf[2];
    char *c = self->bdata[0];
    buf[0] = c[index];
    buf[1] = '\0';
    return alloc_String(buf);
}
struct Object *String_concat(struct Object *self, unsigned int nparams,
        struct Object **args) {
    struct Object *other = args[0];
    other = callmethod(other, "asString", 0, NULL);
    int len = strlen(self->bdata[0]) + strlen(other->bdata[0]) + 1;
    char buf[len];
    strcpy(buf, self->bdata[0]);
    strcat(buf, other->bdata[0]);
    return alloc_String(buf);
}
struct Object *Octets_size(struct Object *receiver, unsigned int nparams,
        struct Object **args) {
    int *size = receiver->bdata[1];
    return alloc_Float64(*size);
}
struct Object *Octets_asString(struct Object *receiver, unsigned int nparams,
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
struct Object *Octets_at(struct Object *receiver, unsigned int nparams,
        struct Object **args) {
    char *data = receiver->bdata[0];
    int *size = receiver->bdata[1];
    struct Object *s = callmethod(args[0], "asString", 0, NULL);
    int i = atoi(s->bdata[0]);
    if (i >= *size)
        die("Octets index out of bounds: %i/%i", i, *size);
    return alloc_Float64((unsigned int)data[i]&255);
}
struct Object *Octets_Equals(struct Object *receiver, unsigned int nparams,
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
struct Object *Octets_Concat(struct Object *receiver, unsigned int nparams,
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
struct Object *Octets_decode(struct Object *receiver, unsigned int nparams,
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
struct Object *Float64_Range(struct Object *self, unsigned int nparams,
        struct Object **args) {
    struct Object *other = args[0];
    double a = *((double*)self->bdata[0]);
    double b = *((double*)other->bdata[0]);
    int i = a;
    int j = b;
    struct Object* arr = alloc_Array();
    for (; i<=b; i++) {
        struct Object *v = alloc_Float64(i);
        Array_push(arr, 1, &v);
    }
    return arr;
}
struct Object *Float64_Add(struct Object *self, unsigned int nparams,
        struct Object **args) {
    struct Object *other = args[0];
    double a = *((double*)self->bdata[0]);
    double b = *((double*)other->bdata[0]);
    return alloc_Float64(a+b);
}
struct Object *Float64_Sub(struct Object *self, unsigned int nparams,
        struct Object **args) {
    struct Object *other = args[0];
    double a = *((double*)self->bdata[0]);
    double b = *((double*)other->bdata[0]);
    return alloc_Float64(a-b);
}
struct Object *Float64_Mul(struct Object *self, unsigned int nparams,
        struct Object **args) {
    struct Object *other = args[0];
    double a = *((double*)self->bdata[0]);
    double b = *((double*)other->bdata[0]);
    return alloc_Float64(a*b);
}
struct Object *Float64_Div(struct Object *self, unsigned int nparams,
        struct Object **args) {
    struct Object *other = args[0];
    double a = *((double*)self->bdata[0]);
    double b = *((double*)other->bdata[0]);
    return alloc_Float64(a/b);
}
struct Object *Float64_Mod(struct Object *self, unsigned int nparams,
        struct Object **args) {
    struct Object *other = args[0];
    double a = *((double*)self->bdata[0]);
    double b = *((double*)other->bdata[0]);
    int i = (int)a;
    int j = (int)b;
    return alloc_Float64(i % j);
}
struct Object *Float64_Equals(struct Object *self, unsigned int nparams,
        struct Object **args) {
    struct Object *other = args[0];
    double a = *((double*)self->bdata[0]);
    double b = *((double*)other->bdata[0]);
    return alloc_Boolean(a == b);
}
struct Object *Float64_LessThan(struct Object *self, unsigned int nparams,
        struct Object **args) {
    struct Object *other = args[0];
    double a = *((double*)self->bdata[0]);
    double b = *((double*)other->bdata[0]);
    return alloc_Boolean(a < b);
}
struct Object *Float64_GreaterThan(struct Object *self, unsigned int nparams,
        struct Object **args) {
    struct Object *other = args[0];
    double a = *((double*)self->bdata[0]);
    double b = *((double*)other->bdata[0]);
    return alloc_Boolean(a > b);
}
struct Object *Float64_LessOrEqual(struct Object *self, unsigned int nparams,
        struct Object **args) {
    struct Object *other = args[0];
    double a = *((double*)self->bdata[0]);
    double b = *((double*)other->bdata[0]);
    return alloc_Boolean(a <= b);
}
struct Object *Float64_GreaterOrEqual(struct Object *self, unsigned int nparams,
        struct Object **args) {
    struct Object *other = args[0];
    double a = *((double*)self->bdata[0]);
    double b = *((double*)other->bdata[0]);
    return alloc_Boolean(a >= b);
}
struct Object *alloc_Float64(double num) {
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
    struct Object *o = alloc_obj();
    strcpy(o->type, "Float64");
    o->bdata = glmalloc(2*sizeof(void*));
    o->bdata[0] = glmalloc(8);
    double *d = o->bdata[0];
    *d = num;
    o->bdata[1] = glmalloc(32);
    char *s = o->bdata[1];
    sprintf(s, "%f", num);
    int l = strlen(s) - 1;
    while (s[l] == '0')
        s[l--] = '\0';
    if (s[l] == '.')
        s[l] = '\0';
    if (1 || Float64_Methods == NULL) {
        addmethod(o, "+", &Float64_Add);
        addmethod(o, "*", &Float64_Mul);
        addmethod(o, "-", &Float64_Sub);
        addmethod(o, "/", &Float64_Div);
        addmethod(o, "%", &Float64_Mod);
        addmethod(o, "==", &Float64_Equals);
        addmethod(o, "<", &Float64_LessThan);
        addmethod(o, ">", &Float64_GreaterThan);
        addmethod(o, "<=", &Float64_LessOrEqual);
        addmethod(o, ">=", &Float64_GreaterOrEqual);
        addmethod(o, "..", &Float64_Range);
        addmethod(o, "asString", &Float64_asString);
        Float64_Methods = o->methods;
        Float64_NumMethods = o->nummethods;
    } else {
        o->methods = Float64_Methods;
        o->nummethods = Float64_NumMethods;
    }
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
struct Object *Float64_asString(struct Object *self, unsigned int nparams,
        struct Object **args) {
    char *a = self->bdata[1];
    return alloc_String(a);
}
struct Object* Boolean_asString(struct Object *self, unsigned int nparams,
        struct Object **args) {
    int *myval = self->bdata[0];
    if (*myval) {
        return alloc_String("true");
    } else { 
        return alloc_String("false");
    }
}
struct Object* Boolean_And(struct Object *self, unsigned int nparams,
        struct Object **args) {
    int *myval = self->bdata[0];
    int *otherval = args[0]->bdata[0];
    if (*myval && *otherval) {
        return self;
    } else { 
        return alloc_Boolean(0);
    }
}
struct Object* Boolean_Or(struct Object *self, unsigned int nparams,
        struct Object **args) {
    int *myval = self->bdata[0];
    int *otherval = args[0]->bdata[0];
    if (*myval || *otherval) {
        return alloc_Boolean(1);
    } else { 
        return alloc_Boolean(0);
    }
}
struct Object* Boolean_ifTrue(struct Object *self, unsigned int nparams,
        struct Object **args) {
    int *myval = self->bdata[0];
    struct Object *block = args[0];
    if (*myval) {
        return callmethod(block, "apply", 0, NULL);
    } else {
        return self;
    }
}
struct Object *Boolean_not(struct Object *self, unsigned int nparams,
        struct Object **args) {
    if (self == BOOLEAN_TRUE)
        return alloc_Boolean(0);
    return alloc_Boolean(1);
}
struct Object* alloc_Boolean(int val) {
    if (val && BOOLEAN_TRUE != NULL)
        return BOOLEAN_TRUE;
    if (!val && BOOLEAN_FALSE != NULL)
        return BOOLEAN_FALSE;
    struct Object *o = alloc_obj();
    strcpy(o->type, "Boolean");
    o->bdata = glmalloc(sizeof(void*));
    o->bdata[0] = glmalloc(sizeof(int));
    int *d = o->bdata[0];
    *d = val;
    addmethod(o, "asString", &Boolean_asString);
    addmethod(o, "&", &Boolean_And);
    addmethod(o, "|", &Boolean_Or);
    addmethod(o, "not", &Boolean_not);
    addmethod(o, "ifTrue", &Boolean_ifTrue);
    if (val)
        BOOLEAN_TRUE = o;
    else
        BOOLEAN_FALSE = o;
    return o;
}
struct Object *File_close(struct Object *self, unsigned int nparams,
        struct Object **args) {
    FILE **fileP = self->bdata[0];
    FILE *file = *fileP;
    int rv = fclose(file);
    return alloc_Boolean(1);
}
struct Object *File_write(struct Object *self, unsigned int nparams,
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
struct Object *File_readline(struct Object *self, unsigned int nparams,
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
struct Object *File_read(struct Object *self, unsigned int nparams,
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
struct Object *io_input(struct Object *self, unsigned int nparams,
        struct Object **args) {
    return self->data[0];
}
struct Object *io_output(struct Object *self, unsigned int nparams,
        struct Object **args) {
    return self->data[1];
}
struct Object *io_error(struct Object *self, unsigned int nparams,
        struct Object **args) {
    return self->data[2];
}
struct Object *io_open(struct Object *self, unsigned int nparams,
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
struct Object *io_system(struct Object *self, unsigned int nparams,
        struct Object **args) {
    struct Object *cmdstr = args[0];
    char *cmd = cstringfromString(cmdstr);
    int rv = system(cmd);
    struct Object *ret = alloc_Boolean(0);
    if (rv == 0)
        ret = alloc_Boolean(1);
    return ret;
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
    return o;
}
struct Object *sys_argv(struct Object *self, unsigned int nparams,
        struct Object **args) {
    return self->data[0];
}
struct Object *argv_Array = NULL;
void module_sys_init_argv(struct Object *argv) {
    argv_Array = argv;
}
struct Object *sys_cputime(struct Object *self, unsigned int nparams,
        struct Object **args) {
    int i = clock() - start_clocks;
    double d = i;
    d /= CLOCKS_PER_SEC;
    return alloc_Float64(d);
}
struct Object *sys_elapsed(struct Object *self, unsigned int nparams,
        struct Object **args) {
    struct timeval ar;
    gettimeofday(&ar, NULL);
    double now = ar.tv_sec + (double)ar.tv_usec / 1000000;
    double d = now - start_time;
    return alloc_Float64(d);
}
struct Object *module_sys_init() {
    struct Object *o = alloc_obj();
    strcpy(o->type, "Module<sys>");
    o->data = glmalloc(sizeof(struct Object*)*1);
    o->data[0] = argv_Array;
    addmethod(o, "argv", &sys_argv);
    addmethod(o, "cputime", &sys_cputime);
    addmethod(o, "elapsed", &sys_elapsed);
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
struct Object *callmethod(struct Object *receiver, const char *name,
        unsigned int nparams, struct Object **args) {
    int i;
    struct Method *m;
    struct Object *o;
    for (i=0; i<receiver->nummethods; i++) {
        m = receiver->methods[i];
        if (strcmp(m->name, name) == 0)
            break;
        m = NULL;
    }
    sprintf(callstack[calldepth], "%s.%s (%i)", receiver->type, name,
            linenumber);
    calldepth++;
    if (calldepth == 128) {
        die("Maximum call stack depth exceeded.");
    }
    if (m != NULL) {
        if (m->closure != NULL) {
            o = m->cfunc(receiver, nparams, args, m->closure);
            calldepth--;
            return o;
        } else {
            o = m->func(receiver, nparams, args);
            calldepth--;
            return o;
        }
    }
    die("Method lookup error: no %s in %s.",
            name, receiver->type);
    exit(1);
}

struct Object *gracelib_print(struct Object *receiver, unsigned int nparams,
        struct Object **args) {
    int i;
    for (i=0; i<nparams; i++) {
        struct Object *o = args[i];
        o = callmethod(o, "asString", 0, NULL);
        char *s = o->bdata[0];
        printf("%s ", s);
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
struct Object *gracelib_readall(struct Object *self, unsigned int nparams,
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
struct Object *dlmodule(const char *name) {
    char *buf = glmalloc(strlen(name) + 13);
    strcpy(buf, "./");
    strcat(buf, name);
    strcat(buf, ".gso");
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
void setdatum(struct Object *o, struct Object**params, int idx) {
    o->data[idx] = params[0];
}
void setline(int l) {
    linenumber = l;
}
