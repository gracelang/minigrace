#include <stdio.h>
#include <stdlib.h>
#include <string.h>

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
struct Object* alloc_String(char*);
struct Object *String_concat(struct Object*, unsigned int nparams,
        struct Object**);
struct Object *String_index(struct Object*, unsigned int nparams,
        struct Object**);
struct Object *callmethod(struct Object *receiver, const char *name,
        unsigned int nparams, struct Object **args);
struct Object *alloc_Boolean(int val);

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

struct Method *ObjectMethod_asString = NULL;
struct Method *ObjectMethod_concat = NULL;
struct Method *ObjectMethod_Equals = NULL;
struct Method *ObjectMethod_NotEquals = NULL;


int heapsize;

int objectcount = 0;

void *glmalloc(size_t s) {
    heapsize += s;
    return malloc(s);
}

int istrue(struct Object *o) {
    return o != NULL && o != BOOLEAN_FALSE;
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
        fprintf(stderr, "Error: array index out of bounds: %i/%i\n",
                index, *len);
        exit(1);
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
        addmethod(o, "[]", &Array_index);
        addmethod(o, "[]:=", &Array_indexAssign);
        addmethod(o, "push", &Array_push);
        addmethod(o, "pop", &Array_pop);
        addmethod(o, "length", &Array_length);
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
struct Object *String__escape(struct Object*, unsigned int, struct Object**);
struct Object *String_length(struct Object*, unsigned int, struct Object**);
struct Object *alloc_String(char *data) {
    struct Object *o = alloc_obj();
    strcpy(o->type, "String");
    o->bdata = glmalloc(sizeof(void*));
    o->bdata[0] = glmalloc(strlen(data) + 1);
    char *d = o->bdata[0];
    strcpy(d, data);
    if (String_Methods == NULL) {
        addmethod(o, "asString", &identity_function);
        addmethod(o, "++", &String_concat);
        addmethod(o, "[]", &String_index);
        addmethod(o, "==", &String_Equals);
        addmethod(o, "_escape", &String__escape);
        addmethod(o, "length", &String_length);
        String_Methods = o->methods;
        String_NumMethods = o->nummethods;
    } else {
        o->methods = String_Methods;
        o->nummethods = String_NumMethods;
    }
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
        } else {
            buf[op] = p[ip];
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
    if (val)
        BOOLEAN_TRUE = o;
    else
        BOOLEAN_FALSE = o;
    return o;
}
struct Object *callmethod(struct Object *receiver, const char *name,
        unsigned int nparams, struct Object **args) {
    int i;
    struct Method *m;
    for (i=0; i<receiver->nummethods; i++) {
        m = receiver->methods[i];
        if (strcmp(m->name, name) == 0)
            break;
        m = NULL;
    }
    if (m != NULL) {
        if (m->closure != NULL) {
            return m->cfunc(receiver, nparams, args, m->closure);
        } else {
            return m->func(receiver, nparams, args);
        }
    }
    printf("Method lookup error: no %s in %s.\n", name, receiver->type);
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
    return NULL;
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
        printf("ERROR: null passed to gracelib_length()\n");
        exit(1);
    } else {
        return callmethod(self, "length", 0, NULL);
    }
}
struct Object **alloc_var() {
    return glmalloc(sizeof(struct Object*));
}
void gracelib_stats() {
    fprintf(stderr, "Total objects allocated: %i\n", objectcount);
    fprintf(stderr, "Total heap allocated: %iB\n", heapsize);
    fprintf(stderr, "                      %iKiB\n", heapsize/1024);
    fprintf(stderr, "                      %iMiB\n", heapsize/1024/1024);
    fprintf(stderr, "                      %iGiB\n", heapsize/1024/1024/1024);
}
void setdatum(struct Object *o, struct Object**params, int idx) {
    o->data[idx] = params[0];
}
