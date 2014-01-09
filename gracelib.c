#define _POSIX_C_SOURCE 200809L
#define _XOPEN_SOURCE 700
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
#include <float.h>
#include <math.h>
#include <sys/wait.h>
#include <limits.h>
#include <unistd.h>
#include <dirent.h>

#include "gracelib.h"
#define IN_GRACELIB 1
#include "definitions.h"
#define max(x,y) (x>y?x:y)

void debugger();

Object Float64_asString(Object, int nparts, int *argcv,
        Object*, int flags);
Object Float64_Add(Object, int nparts, int *argcv,
        Object*, int flags);
Object Object_asString(Object, int nparts, int *argcv,
        Object*, int flags);
Object Singleton_asString(Object, int nparts, int *argcv,
        Object*, int);
Object Object_Equals(Object, int, int*,
        Object*, int flags);
Object Object_NotEquals(Object, int, int*,
        Object*, int);
Object String_concat(Object, int nparts, int *argcv,
        Object*, int flags);
Object String_index(Object, int nparts, int *argcv,
        Object*, int flags);
FILE *debugfp;
int debug_enabled = 0;

Object String_size(Object , int, int*, Object *, int flags);
Object String_at(Object , int, int*, Object *, int flags);
Object String_replace_with(Object , int, int*, Object *, int flags);
Object String_substringFrom_to(Object , int, int*, Object *, int flags);
Object makeEscapedString(char *);
void ConcatString__FillBuffer(Object s, char *c, int len);

Object alloc_OrPattern(Object l, Object r);
Object alloc_AndPattern(Object l, Object r);

Object alloc_ExceptionPacket(Object msg, Object exception);
Object alloc_Exception(char *name, Object parent);

int gc_period = 100000;
int rungc();
int expand_living();
void gc_pause();
int gc_unpause();

char *grcstring(Object s);

int hash_init = 0;

Object undefined = NULL;
Object done = NULL;
Object ellipsis = NULL;
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
ClassData Block;
ClassData Octets;
ClassData BuiltinList;
ClassData BuiltinListIter;
ClassData PrimitiveArray;
ClassData Undefined;
ClassData Done;
ClassData Nothing;
ClassData ellipsisClass;
ClassData File;
ClassData IOModule;
ClassData SysModule;
ClassData Type;
ClassData Class;
ClassData MatchResult;
ClassData OrPattern;
ClassData AndPattern;
ClassData GreaterThanPattern;
ClassData LessThanPattern;
ClassData ExceptionPacket;
ClassData Exception;

Object Dynamic;
Object List;
Object prelude = NULL;

struct StringObject {
    OBJECT_HEADER;
    int blen;
    int size;
    unsigned int hashcode;
    int ascii;
    char *flat;
    char body[];
};
struct ConcatStringObject {
    OBJECT_HEADER;
    int blen;
    int size;
    unsigned int hashcode;
    int ascii;
    char *flat;
    int depth;
    Object left;
    Object right;
};
struct BuiltinListObject {
    OBJECT_HEADER;
    int size;
    int space;
    Object *items;
};
struct PrimitiveArrayObject {
    OBJECT_HEADER;
    int size;
    int space;
    Object *items;
};
struct IOModuleObject {
    OBJECT_HEADER;
    Object _stdin;
    Object _stdout;
    Object _stderr;
};
struct FileObject {
    OBJECT_HEADER;
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
    OBJECT_HEADER;
    jmp_buf *retpoint;
    Object super;
    Object *data;
    int ndata;
};
struct TypeObject {
    OBJECT_HEADER;
    char *name;
    Method *methods;
    int nummethods;
};

struct ExceptionPacketObject {
    OBJECT_HEADER;
    Object message;
    Object exception;
    Object data;
    char **moduleSourceLines;
    int lineNumber;
    int calldepth;
    char **backtrace;
};

struct ExceptionObject {
    OBJECT_HEADER;
    char *name;
    Object parent;
};

struct SFLinkList *shutdown_functions;

int linenumber = 0;
const char *modulename;
char **moduleSourceLines;

size_t heapsize;
size_t heapcurrent;
size_t heapmax;

int objectcount = 0;
int freedcount = 0;
Object *objects_living;
int objects_living_size = 0;
int objects_living_next = 0;
int objects_living_max = 0;
struct GC_Root {
    Object object;
    struct GC_Root *next;
};
struct GC_Root *GC_roots;
#define FLAG_FRESH 2
#define FLAG_REACHABLE 4
#define FLAG_DEAD 8
#define FLAG_USEROBJ 16
#define FLAG_BLOCK 32
#define FLAG_MUTABLE 64
int gc_dofree = 1;
int gc_dowarn = 0;
int gc_enabled = 1;

int Strings_allocated = 0;

int start_clocks = 0;
double start_time = 0;



char **ARGV = NULL;

int stack_size = 1024;
#define STACK_SIZE stack_size
static jmp_buf error_jump;
static int error_jump_set;
static Object currentException;
static jmp_buf *exceptionHandler_stack;
static Object *finally_stack;
static int exceptionHandlerDepth;
static Object ExceptionObject;
static Object ErrorObject;
static Object RuntimeErrorObject;

static jmp_buf *return_stack;
Object return_value;
char (*callstack)[256];
int calldepth = 0;
struct StackFrameObject **frame_stack;
struct ClosureEnvObject **closure_stack;
void backtrace() {
    int i;
    for (i=0; i<calldepth; i++) {
        fprintf(stderr, "  Called %s\n", callstack[i]);
    }
}
void pushstackframe(struct StackFrameObject *f, char *name) {
    frame_stack[calldepth-1] = f;
    f->name = name;
}
void pushclosure(Object c) {
    closure_stack[calldepth-1] = (struct ClosureEnvObject *)c;
}
void setframeelementname(struct StackFrameObject *f, int p, char *name) {
    if (getenv("GRACE_FOO"))
        fprintf(stderr, "adding name %s(%p) to slot %i of %s(%p)\n",
                name, name, p, f->name, f);
    f->names[p] = name;
}
void gracedie(char *msg, ...) {
    va_list args;
    va_start(args, msg);
    if (error_jump_set) {
        char buf[strlen(msg) * 4 + 1024];
        vsprintf(buf, msg, args);
        currentException = alloc_ExceptionPacket(alloc_String(buf),
                RuntimeErrorObject);
        longjmp(error_jump, 1);
    }
    fprintf(stderr, "Error around line %i: RuntimeError: ", linenumber);
    vfprintf(stderr, msg, args);
    fprintf(stderr, "\n");
    backtrace();
    int fl = linenumber - 2;
    if (fl < 0) fl = 0;
    for (; fl<linenumber+1; fl++)
        if (moduleSourceLines[fl])
            fprintf(stderr, "    %i: %s\n", fl + 1, moduleSourceLines[fl]);
        else
            break;
    va_end(args);
    if (getenv("GRACE_DEBUGGER"))
        debugger();
    exit(1);
}
void die(char *msg, ...) {
    va_list args;
    va_start(args, msg);
    if (error_jump_set) {
        char buf[strlen(msg) * 4 + 1024];
        vsprintf(buf, msg, args);
        currentException = alloc_ExceptionPacket(alloc_String(buf),
                RuntimeErrorObject);
        longjmp(error_jump, 1);
    }
    fprintf(stderr, "Error around line %i: RuntimeError: ", linenumber);
    vfprintf(stderr, msg, args);
    fprintf(stderr, "\n");
    backtrace();
    int fl = linenumber - 2;
    if (fl < 0) fl = 0;
    for (; fl<linenumber+1; fl++)
        if (moduleSourceLines[fl])
            fprintf(stderr, "    %i: %s\n", fl + 1, moduleSourceLines[fl]);
        else
            break;
    va_end(args);
    if (getenv("GRACE_DEBUGGER"))
        debugger();
    exit(1);
}
void debug(char *msg, ...) {
    if (!debug_enabled)
        return;
    va_list args;
    va_start(args, msg);
    fprintf(debugfp, "%s:%i:", modulename, linenumber);
    vfprintf(debugfp, msg, args);
    fprintf(debugfp, "\n");
    va_end(args);
}

void assertClass(Object obj, ClassData cl) {
    if (obj->class != cl)
        gracedie("expected instance of %s; got a %s", cl->name,
                obj->class->name);
}

void *glmalloc(size_t s) {
    heapsize += s;
    heapcurrent += s;
    if (heapcurrent >= heapmax)
        heapmax = heapcurrent;
    void *v = calloc(1, s + sizeof(size_t));
    size_t *i = v;
    *i = s;
    return v + sizeof(size_t);
}
void glfree(void *p) {
    size_t *i = p - sizeof(size_t);
    debug("glfree: freed %p (%i)", p, *i);
    heapcurrent -= *i;
    memset(i, 0, *i);
    free(i);
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
    if (o == NULL || o == BOOLEAN_FALSE)
        return 0;
    if (o == BOOLEAN_TRUE)
        return 1;
    if (o->flags & FLAG_USEROBJ)
        return istrue(((struct UserObject *)o)->super);
    return 0;
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
    grcstring(s);
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
    grcstring(s);
    ConcatString__FillBuffer(s, c, z);
}
int integerfromAny(Object p) {
    if (p->class == Number) {
        double *d = (double*)p->data;
        int j = *d;
        return j;
    }
    p = callmethod(p, "asString", 0, NULL, NULL);
    char *c = grcstring(p);
    int i = atoi(c);
    return i;
}
Object gracebecome(Object subObject, Object superObject) {
    struct UserObject *sub = (struct UserObject *)subObject;
    struct UserObject *sup = (struct UserObject *)superObject;
    struct UserObject *tmpSup = sup;
    ClassData subclass = sub->class;
    Object *subdata = (Object *)sub->data;
    sub->super = sup->super;
    sup->super = subObject;
    sub->class = sup->class;
    sub->data = (Object *)(sup->data);
    sup->class = subclass;
    sup->data = subdata;
    int tmpndata = sub->ndata;
    sub->ndata = sup->ndata;
    sup->ndata = tmpndata;
    return superObject;
}
Object graceunbecome(Object topObj) {
    struct UserObject *top = (struct UserObject *)topObj;
    struct UserObject *extra = (struct UserObject *)top->super;
    // Swap the class and data on the two objects
    ClassData extraclass = top->class;
    Object *extradata = (Object *)top->data;
    ClassData topclass = extra->class;
    Object *topdata = (Object *)extra->data;
    top->class = topclass;
    top->data = topdata;
    extra->class = extraclass;
    extra->data = extradata;
    // Remove the extra object from the chain
    top->super = extra->super;
    return (Object)extra;
}
Method *addmethodrealflags(Object o, char *name,
        Object (*func)(Object, int, int*, Object*, int), int flags) {
    Method *m = add_Method(o->class, name, func);
    m->flags |= flags;
    return m;
}
void addmethodreal(Object o, char *name,
        Object (*func)(Object, int, int*, Object*, int)) {
    Method *m = add_Method(o->class, name, func);
}
void addmethod2(Object o, char *name,
        Object (*func)(Object, int, int*, Object*, int)) {
    Method *m = add_Method(o->class, name, func);
    m->flags &= ~MFLAG_REALSELFONLY;
}
Method *addmethod2pos(Object o, char *name,
        Object (*func)(Object, int, int*, Object*, int), int pos) {
    Method *m = add_Method(o->class, name, func);
    m->flags &= ~MFLAG_REALSELFONLY;
    m->pos = pos;
    return m;
}
Object identity_function(Object receiver, int nparts, int *argcv,
        Object* params, int flags) {
    return receiver;
}
Object Object_asString(Object receiver, int nparts, int *argcv,
        Object* params, int flags) {
    char buf[40];
    sprintf(buf, "%s[0x%p]", receiver->class->name, receiver);
    return alloc_String(buf);
}

Object Singleton_asString(Object receiver, int nparts, int *argcv,
        Object* params, int flags) {
    return alloc_String(receiver->class->name);
}

Object Object_concat(Object receiver, int nparts, int *argcv,
        Object* params, int flags) {
    Object a = callmethod(receiver, "asString", 0, NULL, NULL);
    return callmethod(a, "++", 1, argcv, params);
}
Object Object_NotEquals(Object receiver, int nparts, int *argcv,
        Object* params, int flags) {
    Object b = callmethod(receiver, "==", 1, argcv, params);
    return callmethod(b, "not", 0, NULL, NULL);
}
Object Object_Equals(Object receiver, int nparts, int *argcv,
        Object* params, int flags) {
    return alloc_Boolean(receiver == params[0]);
}
Object MatchResult_result(Object self, int nparts, int *argcv,
        Object *argv, int flags) {
    return ((struct UserObject *)self)->data[0];
}
Object MatchResult_bindings(Object self, int nparts, int *argcv,
        Object *argv, int flags) {
    return ((struct UserObject *)self)->data[1];
}
Object MatchResult_asString(Object self, int nparts, int *argcv,
        Object *argv, int flags) {
    struct UserObject *uo = (struct UserObject *)self;
    gc_pause();
    Object str;
    if (uo->super == BOOLEAN_TRUE)
        str = alloc_String("SuccessfulMatch(result = ");
    else
        str = alloc_String("FailedMatch(result = ");
    int partcv[] = {1};
    Object tmpstr = callmethod(uo->data[0], "asString", 0, NULL, NULL);
    str = callmethod(str, "++", 1, partcv, &tmpstr);
    tmpstr = alloc_String(", bindings = ");
    str = callmethod(str, "++", 1, partcv, &tmpstr);
    tmpstr = callmethod(uo->data[1], "asString", 0, NULL, NULL);
    str = callmethod(str, "++", 1, partcv, &tmpstr);
    tmpstr = alloc_String(")");
    str = callmethod(str, "++", 1, partcv, &tmpstr);
    gc_unpause();
    return str;
}
Object alloc_MatchResult(Object result, Object bindings) {
    gc_pause();
    if (bindings == NULL)
        bindings = alloc_BuiltinList();
    Object o = alloc_userobj2(3, 2, MatchResult);
    if (!MatchResult) {
        MatchResult = o->class;
        add_Method(MatchResult, "result", &MatchResult_result);
        add_Method(MatchResult, "bindings", &MatchResult_bindings);
        add_Method(MatchResult, "asString", &MatchResult_asString);
    }
    struct UserObject *uo = (struct UserObject *)o;
    uo->data[0] = result;
    uo->data[1] = bindings;
    gc_unpause();
    return o;
}
Object alloc_SuccessfulMatch(Object result, Object bindings) {
    Object o = alloc_MatchResult(result, bindings);
    ((struct UserObject *)o)->super = alloc_Boolean(1);
    return o;
}
Object alloc_FailedMatch(Object result, Object bindings) {
    Object o = alloc_MatchResult(result, bindings);
    ((struct UserObject *)o)->super = alloc_Boolean(0);
    return o;
}
Object literal_match(Object self, int nparts, int *argcv,
        Object *argv, int flags) {
    if (nparts < 1 || (nparts >= 1 && argcv[0] < 1))
        die("match requires an argument");
    Object other = argv[0];
    int partcv[] = {1};
    if (!istrue(callmethod(self, "==", 1, partcv, argv)))
        return alloc_FailedMatch(other, NULL);
    return alloc_SuccessfulMatch(other, NULL);
}
Object literal_or(Object self, int nparts, int *argcv,
        Object *argv, int flags) {
    if (nparts < 1 || (nparts >= 1 && argcv[0] < 1))
        die("| requires an argument");
    return alloc_OrPattern(self, argv[0]);
}
Object literal_and(Object self, int nparts, int *argcv,
        Object *argv, int flags) {
    if (nparts < 1 || (nparts >= 1 && argcv[0] < 1))
        die("& requires an argument");
    return alloc_AndPattern(self, argv[0]);
}

Object AndPattern_match(Object self, int nparts, int *argcv, Object *argv,
        int flags) {
    Object target = argv[0];
    struct UserObject *b = (struct UserObject *)self;
    Object left = b->data[0];
    Object right = b->data[1];
    Object m = callmethod(left, "match", 1, argcv, argv);
    if (!istrue(m))
        return m;
    Object bindings = callmethod(m, "bindings", 0, NULL, NULL);
    m = callmethod(right, "match", 1, argcv, argv);
    if (!istrue(m))
        return m;
    Object bindings2 = callmethod(m, "bindings", 0, NULL, NULL);
    bindings = callmethod(bindings, "++", 1, argcv, &bindings2);
    return alloc_SuccessfulMatch(target, bindings);
}
Object OrPattern_match(Object self, int nparts, int *argcv, Object *argv,
        int flags) {
    Object target = argv[0];
    struct UserObject *b = (struct UserObject *)self;
    Object left = b->data[0];
    Object right = b->data[1];
    int tmp[1] = {1};
    Object m = callmethod(left, "match", 1, argcv, argv);
    if (istrue(m))
        return alloc_SuccessfulMatch(target, NULL);
    m = callmethod(right, "match", 1, argcv, argv);
    if (istrue(m))
        return alloc_SuccessfulMatch(target, NULL);
    return alloc_FailedMatch(target, NULL);
}
Object alloc_OrPattern(Object l, Object r) {
    Object o = alloc_userobj2(3, 2, OrPattern);
    if (!OrPattern) {
        OrPattern = o->class;
        glfree(o->class->name);
        o->class->name = "OrPattern";
        add_Method(OrPattern, "|", &literal_or);
        add_Method(OrPattern, "&", &literal_and);
        add_Method(OrPattern, "match", &OrPattern_match);
    }
    struct UserObject *b = (struct UserObject *)o;
    b->data[0] = l;
    b->data[1] = r;
    return o;
}
Object alloc_AndPattern(Object l, Object r) {
    Object o = alloc_userobj2(3, 2, AndPattern);
    if (!AndPattern) {
        AndPattern = o->class;
        glfree(o->class->name);
        o->class->name = "AndPattern";
        add_Method(AndPattern, "|", &literal_or);
        add_Method(AndPattern, "&", &literal_and);
        add_Method(AndPattern, "match", &AndPattern_match);
    }
    struct UserObject *b = (struct UserObject *)o;
    b->data[0] = l;
    b->data[1] = r;
    return o;
}
Object LessThanPattern_match(Object self, int nparts, int *argcv, Object *argv,
        int flags) {
    struct UserObject *b = (struct UserObject *)self;
    Object target = argv[0];
    Object right = b->data[0];
    int tmp[1] = {1};
    Object m = callmethod(target, "<", 1, argcv, &right);
    if (istrue(m))
        return alloc_SuccessfulMatch(target, NULL);
    return alloc_FailedMatch(target, NULL);
}
Object alloc_LessThanPattern(Object r) {
    Object o = alloc_userobj2(3, 2, LessThanPattern);
    if (!LessThanPattern) {
        LessThanPattern = o->class;
        glfree(o->class->name);
        o->class->name = "LessThanPattern";
        add_Method(LessThanPattern, "|", &literal_or);
        add_Method(LessThanPattern, "&", &literal_and);
        add_Method(LessThanPattern, "match", &LessThanPattern_match);
    }
    struct UserObject *b = (struct UserObject *)o;
    b->data[0] = r;
    return o;
}
Object GreaterThanPattern_match(Object self, int nparts, int *argcv, Object *argv,
        int flags) {
    struct UserObject *b = (struct UserObject *)self;
    Object target = argv[0];
    Object right = b->data[0];
    int tmp[1] = {1};
    Object m = callmethod(target, "<", 1, argcv, &right);
    if (istrue(m))
        return alloc_SuccessfulMatch(target, NULL);
    return alloc_FailedMatch(target, NULL);
}
Object alloc_GreaterThanPattern(Object r) {
    Object o = alloc_userobj2(3, 2, GreaterThanPattern);
    if (!GreaterThanPattern) {
        GreaterThanPattern = o->class;
        glfree(o->class->name);
        o->class->name = "GreaterThanPattern";
        add_Method(GreaterThanPattern, "|", &literal_or);
        add_Method(GreaterThanPattern, "&", &literal_and);
        add_Method(GreaterThanPattern, "match", &GreaterThanPattern_match);
    }
    struct UserObject *b = (struct UserObject *)o;
    b->data[0] = r;
    return o;
}

void printExceptionBacktrace(Object o) {
    struct ExceptionPacketObject *e = (struct ExceptionPacketObject *)o;
    struct ExceptionObject *x = (struct ExceptionObject *)e->exception;
    fprintf(stderr, "Error around line %i: %s: %s\n", e->lineNumber,
            x->name, grcstring(e->message));
    int start_calldepth = calldepth;
    int start_linenumber = linenumber;
    char **start_moduleSourceLines = moduleSourceLines;
    calldepth = e->calldepth;
    linenumber = e->lineNumber;
    moduleSourceLines = e->moduleSourceLines;
    for (int i=0; e->backtrace[i] != NULL; i++) {
        fprintf(stderr, "  Called %s\n", e->backtrace[i]);
    }
    int fl = linenumber - 2;
    if (fl < 0) fl = 0;
    for (; fl<linenumber+1; fl++)
        if (moduleSourceLines[fl])
            fprintf(stderr, "    %i: %s\n", fl + 1, moduleSourceLines[fl]);
        else
            break;
    calldepth = start_calldepth;
    linenumber = start_linenumber;
    moduleSourceLines = start_moduleSourceLines;
}
void ExceptionPacket__mark(struct ExceptionPacketObject *e) {
    gc_mark(e->message);
    gc_mark(e->exception);
    gc_mark(e->data);
}
void ExceptionPacket__release(struct ExceptionPacketObject *e) {
    int i;
    for (i=0; i<e->calldepth; i++) {
        glfree(e->backtrace[i]);
    }
    glfree(e->backtrace);
}
Object ExceptionPacket_message(Object self, int argc, int *argcv, Object *argv,
        int flags) {
    struct ExceptionPacketObject *e = (struct ExceptionPacketObject *)self;
    return e->message;
}
Object ExceptionPacket_exception(Object self, int argc, int *argcv,
        Object *argv, int flags) {
    struct ExceptionPacketObject *e = (struct ExceptionPacketObject *)self;
    return e->exception;
}
Object ExceptionPacket_data(Object self, int argc, int *argcv,
        Object *argv, int flags) {
    struct ExceptionPacketObject *e = (struct ExceptionPacketObject *)self;
    if (e->data)
        return e->data;
    return alloc_done();
}
Object ExceptionPacket_asString(Object self, int argc, int *argcv,
        Object *argv, int flags) {
    struct ExceptionPacketObject *e = (struct ExceptionPacketObject *)self;
    struct ExceptionObject *x = (struct ExceptionObject *)e->exception;
    char buf[strlen(x->name+3)];
    strcpy(buf, x->name);
    strcat(buf, ": ");
    int tmp[1] = {1};
    return callmethod(alloc_String(buf), "++", 1, tmp, &(e->message));
}
Object ExceptionPacket_printBacktrace(Object self, int argc, int *argcv,
        Object *argv, int flags) {
    printExceptionBacktrace(self);
    return alloc_done();
}
Object alloc_ExceptionPacket(Object msg, Object exception) {
    if (!ExceptionPacket) {
        ExceptionPacket = alloc_class3("ExceptionPacket", 6,
                (void*)&ExceptionPacket__mark,
                (void*)&ExceptionPacket__release);
        add_Method(ExceptionPacket, "message", &ExceptionPacket_message);
        add_Method(ExceptionPacket, "exception", &ExceptionPacket_exception);
        add_Method(ExceptionPacket, "asString", &ExceptionPacket_asString);
        add_Method(ExceptionPacket, "data", &ExceptionPacket_data);
        add_Method(ExceptionPacket, "asDebugString", &Object_asString);
        add_Method(ExceptionPacket, "printBacktrace",
                &ExceptionPacket_printBacktrace);
    }
    Object o = alloc_obj(sizeof(struct ExceptionPacketObject)
            - sizeof(struct Object), ExceptionPacket);
    struct ExceptionPacketObject *e = (struct ExceptionPacketObject *)o;
    e->message = msg;
    e->exception = exception;
    e->data = NULL;
    e->moduleSourceLines = moduleSourceLines;
    e->lineNumber = linenumber;
    e->calldepth = calldepth;
    e->backtrace = glmalloc(sizeof(char *) * (calldepth + 1));
    int i;
    for (i=0; i<calldepth; i++) {
        e->backtrace[i] = glmalloc(256);
        strcpy(e->backtrace[i], callstack[i]);
    }
    return o;
}
Object Exception_raise(Object self, int argc, int *argcv, Object *argv,
        int flags) {
    if (error_jump_set) {
        currentException = alloc_ExceptionPacket(argv[0],
                self);
        longjmp(error_jump, 1);
    }
    printExceptionBacktrace(alloc_ExceptionPacket(argv[0], self));
    exit(1);
    return self;
}
Object Exception_raiseWith(Object self, int argc, int *argcv, Object *argv,
        int flags) {
    currentException = alloc_ExceptionPacket(argv[0], self);
    struct ExceptionPacketObject *p =
        (struct ExceptionPacketObject *)currentException;
    p->data = argv[1];
    if (error_jump_set) {
        longjmp(error_jump, 1);
    }
    printExceptionBacktrace(alloc_ExceptionPacket(argv[0], self));
    exit(1);
    return self;
}
Object Exception_refine(Object self, int argc, int *argcv, Object *argv,
        int flags) {
    char *name = grcstring(argv[0]);
    return alloc_Exception(name, self);
}
Object Exception_match(Object self, int argc, int *argcv, Object *argv,
        int flags) {
    struct ExceptionObject *e = (struct ExceptionObject *)self;
    Object packet = argv[0];
    if (packet->class != ExceptionPacket)
        return alloc_FailedMatch(packet, NULL);
    struct ExceptionPacketObject *p = (struct ExceptionPacketObject *)packet;
    if (p->exception == self)
        return alloc_SuccessfulMatch(packet, NULL);
    struct ExceptionObject *x = (struct ExceptionObject *)p->exception;
    if (strcmp(e->name, x->name) == 0)
        return alloc_SuccessfulMatch(packet, NULL);
    while (x->parent) {
        if (x->parent == self)
            return alloc_SuccessfulMatch(packet, NULL);
        if (strcmp(e->name, x->name) == 0)
            return alloc_SuccessfulMatch(packet, NULL);
        x = (struct ExceptionObject *)x->parent;
    }
    if (strcmp(e->name, x->name) == 0)
        return alloc_SuccessfulMatch(packet, NULL);
    return alloc_FailedMatch(packet, NULL);
}
Object Exception_asString(Object self, int argc, int *argcv, Object *argv,
        int flags) {
    struct ExceptionObject *e = (struct ExceptionObject *)self;
    return alloc_String(e->name);
}
Object alloc_Exception(char *name, Object parent) {
    if (!Exception) {
        Exception = alloc_class("Exception", 10);
        add_Method(Exception, "match", &Exception_match);
        add_Method(Exception, "refine", &Exception_refine);
        add_Method(Exception, "raise", &Exception_raise);
        add_Method(Exception, "raiseWith", &Exception_raiseWith);
        add_Method(Exception, "==", &Object_Equals);
        add_Method(Exception, "!=", &Object_NotEquals);
        add_Method(Exception, "asString", &Exception_asString);
        add_Method(Exception, "asDebugString", &Object_asString);
        add_Method(Exception, "|", &literal_or);
        add_Method(Exception, "&", &literal_and);
    }
    Object o = alloc_obj(sizeof (struct ExceptionObject)
            - sizeof(struct Object), Exception);
    struct ExceptionObject *e = (struct ExceptionObject *)o;
    e->name = glmalloc(strlen(name) + 1);
    strcpy(e->name, name);
    e->parent = parent;
    return o;
}

Object String_Equals(Object self, int nparts, int *argcv,
        Object *params, int flags) {
    Object other = params[0];
    if ((other->class != String) && (other->class != ConcatString))
        return alloc_Boolean(0);
    struct StringObject* ss = (struct StringObject*)self;
    struct StringObject* so = (struct StringObject*)other;
    if (ss->size != so->size)
        return alloc_Boolean(0);
    char *theirs = grcstring(other);
    if (strcmp(ss->body, theirs)) {
        return alloc_Boolean(0);
    }
    return alloc_Boolean(1);
}
Object BuiltinListIter_next(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    int *pos = (int*)self->data;
    Object *arr = (Object*)(self->data + sizeof(int));
    struct BuiltinListObject *lst = (struct BuiltinListObject*)(*arr);
    int rpos = *pos;
    *pos  = *pos + 1;
    return lst->items[rpos];
}
Object BuiltinListIter_havemore(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    int *pos = (int*)self->data;
    Object *arr = (Object*)(self->data + sizeof(int));
    struct BuiltinListObject *lst = (struct BuiltinListObject*)(*arr);
    int rpos = *pos;
    if (*pos < lst->size)
        return alloc_Boolean(1);
    return alloc_Boolean(0);
}
void BuiltinListIter_mark(Object o) {
    Object *lst = (Object*)(o->data + sizeof(int));
    gc_mark(*lst);
}
Object alloc_BuiltinListIter(Object array) {
    if (BuiltinListIter == NULL) {
        BuiltinListIter = alloc_class2("BuiltinListIter", 2, (void*)&BuiltinListIter_mark);
        add_Method(BuiltinListIter, "havemore", &BuiltinListIter_havemore);
        add_Method(BuiltinListIter, "next", &BuiltinListIter_next);
    }
    Object o = alloc_obj(sizeof(int) + sizeof(Object), BuiltinListIter);
    int *pos = (int*)o->data;
    Object *lst = (Object*)(o->data + sizeof(int));
    *pos = 0;
    *lst = array;
    return o;
}
Object BuiltinList_pop(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    struct BuiltinListObject *sself = (struct BuiltinListObject*)self;
    sself->size--;
    if (sself->size < 0)
        die("popped from negative value: %i", sself->size);
    return sself->items[sself->size];
}
Object BuiltinList_push(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    struct BuiltinListObject *sself = (struct BuiltinListObject*)self;
    Object other = args[0];
    if (sself->size == sself->space) {
        Object *dt = glmalloc(sizeof(Object) * sself->space * 2);
        sself->space *= 2;
        int i;
        for (i=0; i<sself->size; i++)
            dt[i] = sself->items[i];
        glfree(sself->items);
        sself->items = dt;
    }
    sself->items[sself->size] = other;
    sself->size++;
    return alloc_Boolean(1);
}
Object BuiltinList_indexAssign(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    struct BuiltinListObject *sself = (struct BuiltinListObject*)self;
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
Object BuiltinList_contains(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    struct BuiltinListObject *sself = (struct BuiltinListObject*)self;
    Object other = args[0];
    Object my, b;
    int index;
    for (index=0; index<sself->size; index++) {
        my = sself->items[index];
        int partcv[] = {1};
        b = callmethod(other, "==", 1, partcv, &my);
        if (istrue(b))
            return b;
    }
    return alloc_Boolean(0);
}
Object BuiltinList_reduce(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    struct BuiltinListObject *sself = (struct BuiltinListObject*)self;
    Object initialValue = args[0];
    Object functionBlock = args[1];
    Object each;
    Object accum = initialValue;
    int slot = gc_frame_newslot(accum);
    int index;
    for (index=0; index<sself->size; index++) {
        each = sself->items[index];
        int partcv[] = {2};
        accum = callmethod(functionBlock, "apply", 1, partcv, &accum);
        gc_frame_setslot(slot, accum);
    }
    return accum;
}
Object BuiltinList_index(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    struct BuiltinListObject *sself = (struct BuiltinListObject*)self;
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
Object BuiltinList_iter(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    return alloc_BuiltinListIter(self);
}
Object BuiltinList_length(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    struct BuiltinListObject *sself = (struct BuiltinListObject*)self;
    return alloc_Float64(sself->size);
}
Object BuiltinList_asString(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    struct BuiltinListObject *sself = (struct BuiltinListObject*)self;
    int len = sself->size;
    int i = 0;
    int partcv[] = {1};
    Object other;
    gc_pause();
    Object s = alloc_String("[");
    Object c = alloc_String(",");
    for (i=0; i<len; i++) {
        other = callmethod(sself->items[i], "asString", 0, NULL, NULL);
        s = callmethod(s, "++", 1, partcv, &other);
        if (i != len-1)
            s = callmethod(s, "++", 1, partcv, &c);
    }
    Object cb = alloc_String("]");
    s = callmethod(s, "++", 1, partcv, &cb);
    gc_unpause();
    return s;
}
Object BuiltinList_indices(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    struct BuiltinListObject *sself = (struct BuiltinListObject*)self;
    Object o = alloc_BuiltinList();
    int slot = gc_frame_newslot(o);
    int i;
    Object f;
    int partcv[] = {1};
    for (i=1; i<=sself->size; i++) {
        f = alloc_Float64(i);
        BuiltinList_push(o, 1, partcv, &f, 0);
    }
    gc_frame_setslot(slot, undefined);
    return o;
}
Object BuiltinList_first(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    struct BuiltinListObject *sself = (struct BuiltinListObject*)self;
    if (sself->size == 0)
        die("empty list has no first element");
    return sself->items[0];
}
Object BuiltinList_last(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    struct BuiltinListObject *sself = (struct BuiltinListObject*)self;
    if (sself->size == 0)
        die("empty list has no last element");
    return sself->items[sself->size-1];
}
Object BuiltinList_prepended(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    struct BuiltinListObject *sself = (struct BuiltinListObject*)self;
    int i;
    Object nl = alloc_BuiltinList();
    int partcv[] = {1};
    callmethod(nl, "push", 1, partcv, args);
    for (i = 0; i < sself->size; i++) {
        BuiltinList_push(nl, 1, partcv, sself->items + i, 0);
    }
    return nl;
}
Object BuiltinList_concat(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    struct BuiltinListObject *sself = (struct BuiltinListObject*)self;
    struct BuiltinListObject *sother = (struct BuiltinListObject*)args[0];
    int i;
    Object nl = alloc_BuiltinList();
    int partcv[] = {1};
    for (i=0; i<sself->size; i++)
        BuiltinList_push(nl, 1, partcv, sself->items + i, 0);
    Object iter = callmethod(args[0], "iter", 0, NULL, NULL);
    gc_frame_newslot(iter);
    while (istrue(callmethod(iter, "havemore", 0, NULL, NULL))) {
        Object val = callmethod(iter, "next", 0, NULL, NULL);
        BuiltinList_push(nl, 1, partcv, &val, 0);
    }
    return nl;
}
void BuiltinList__release(Object o) {
    struct BuiltinListObject *s = (struct BuiltinListObject *)o;
    glfree(s->items);
}
void BuiltinList_mark(Object o) {
    struct BuiltinListObject *s = (struct BuiltinListObject *)o;
    int i;
    for (i=0; i<s->size; i++)
        gc_mark(s->items[i]);
}
Object alloc_BuiltinList() {
    if (BuiltinList == NULL) {
        BuiltinList = alloc_class3("BuiltinList", 20, (void*)&BuiltinList_mark,
                (void*)&BuiltinList__release);
        add_Method(BuiltinList, "asString", &BuiltinList_asString);
        add_Method(BuiltinList, "at", &BuiltinList_index);
        add_Method(BuiltinList, "[]", &BuiltinList_index);
        add_Method(BuiltinList, "at()put", &BuiltinList_indexAssign);
        add_Method(BuiltinList, "[]:=", &BuiltinList_indexAssign);
        add_Method(BuiltinList, "push", &BuiltinList_push);
        add_Method(BuiltinList, "pop", &BuiltinList_pop);
        add_Method(BuiltinList, "length", &BuiltinList_length);
        add_Method(BuiltinList, "size", &BuiltinList_length);
        add_Method(BuiltinList, "iter", &BuiltinList_iter);
        add_Method(BuiltinList, "iterator", &BuiltinList_iter);
        add_Method(BuiltinList, "contains", &BuiltinList_contains);
        add_Method(BuiltinList, "==", &Object_Equals);
        add_Method(BuiltinList, "!=", &Object_NotEquals);
        add_Method(BuiltinList, "indices", &BuiltinList_indices);
        add_Method(BuiltinList, "first", &BuiltinList_first);
        add_Method(BuiltinList, "last", &BuiltinList_last);
        add_Method(BuiltinList, "prepended", &BuiltinList_prepended);
        add_Method(BuiltinList, "++", &BuiltinList_concat);
        add_Method(BuiltinList, "reduce", &BuiltinList_reduce);
    }
    Object o = alloc_obj(sizeof(Object*) + sizeof(int) * 2, BuiltinList);
    struct BuiltinListObject *lo = (struct BuiltinListObject*)o;
    lo->size = 0;
    lo->space = 8;
    lo->items = glmalloc(sizeof(Object) * 8);
    return o;
}
Object alloc_List() {
    return alloc_BuiltinList();
}
Object PrimitiveArray_indexAssign(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    struct PrimitiveArrayObject *sself = (struct PrimitiveArrayObject*)self;
    Object idx = args[0];
    Object val = args[1];
    int index = integerfromAny(idx);
    if (index >= sself->size) {
        die("Error: array index out of bounds: %i/%i",
                index, sself->size);
    }
    if (index < 0) {
        die("Error: array index out of bounds: %i < 0",
                index);
    }
    sself->items[index] = val;
    return val;
}
Object PrimitiveArray_index(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    struct PrimitiveArrayObject *sself = (struct PrimitiveArrayObject*)self;
    int index = integerfromAny(args[0]);
    if (index >= sself->size) {
        die("Error: array index out of bounds: %i/%i\n",
                index, sself->size);
    }
    if (index < 0) {
        die("Error: array index out of bounds: %i < 0",
                index);
    }
    return sself->items[index];
}
Object alloc_PrimitiveArray(int size) {
    if (PrimitiveArray == NULL) {
        PrimitiveArray = alloc_class3("PrimitiveArray", 9, (void*)&BuiltinList_mark,
                (void*)&BuiltinList__release);
        add_Method(PrimitiveArray, "at", &PrimitiveArray_index);
        add_Method(PrimitiveArray, "[]", &PrimitiveArray_index);
        add_Method(PrimitiveArray, "at()put", &PrimitiveArray_indexAssign);
        add_Method(PrimitiveArray, "[]:=", &PrimitiveArray_indexAssign);
        add_Method(PrimitiveArray, "asString", &BuiltinList_asString);
        add_Method(PrimitiveArray, "size", &BuiltinList_length);
        add_Method(PrimitiveArray, "==", &Object_Equals);
        add_Method(PrimitiveArray, "!=", &Object_NotEquals);
    }
    int i;
    Object o = alloc_obj(sizeof(Object*) + sizeof(int) * 2, PrimitiveArray);
    struct PrimitiveArrayObject *lo = (struct PrimitiveArrayObject*)o;
    lo->size = size;
    lo->space = size;
    lo->items = glmalloc(sizeof(Object) * size);
    for (i=0; i<size; i++)
        lo->items[i] = undefined;
    return o;
}
Object PrimitiveArrayClassObject_new(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    if (argcv[0] != 1)
        die("array construction requires size argument");
    return alloc_PrimitiveArray(integerfromAny(args[0]));
}
Object PrimitiveArrayClassObject;
Object alloc_PrimitiveArrayClassObject() {
    if (PrimitiveArrayClassObject)
        return PrimitiveArrayClassObject;
    ClassData c = alloc_class("Class<PrimitiveArray>", 3);
    add_Method(c, "==", &Object_Equals);
    add_Method(c, "!=", &Object_NotEquals);
    add_Method(c, "new", &PrimitiveArrayClassObject_new);
    Object o = alloc_obj(0, c);
    gc_root(o);
    PrimitiveArrayClassObject = o;
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
Object StringIter_next(Object self, int nparts, int *argcv,
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
Object StringIter_havemore(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    int *pos = (int*)self->data;
    Object *strp = (Object*)(self->data + sizeof(int));
    Object str = *strp;
    int len = *(int*)str->data;
    if (*pos < len)
        return alloc_Boolean(1);
    return alloc_Boolean(0);
}
void StringIter__mark(Object o) {
    Object *strp = (Object*)(o->data + sizeof(int));
    gc_mark(*strp);
}
Object alloc_StringIter(Object string) {
    if (StringIter == NULL) {
        StringIter = alloc_class2("StringIter", 4, (void *)&StringIter__mark);
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

char *grcstring(Object self) {
    if (self->class != ConcatString && self->class != String) {
        self = callmethod(self, "asString", 0, NULL, NULL);
    }
    struct StringObject *sself = (struct StringObject *)self;
    if (sself->flat)
        return sself->flat;
    return ConcatString__Flatten(self);
}

void ConcatString__FillBuffer(Object self, char *buf, int len) {
    struct ConcatStringObject *sself = (struct ConcatStringObject*)self;
    int i;
    if (sself->flat != NULL) {
        strncpy(buf, sself->flat, len);
        buf[sself->blen] = 0;
        return;
    }
    int size = sself->size;
    Object left = sself->left;
    Object right = sself->right;
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
Object String_indices(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    struct StringObject *sself = (struct StringObject*)self;
    Object o = alloc_BuiltinList();
    int i;
    Object f;
    gc_pause();
    int partcv[] = {1};
    for (i=1; i<=sself->size; i++) {
        f = alloc_Float64(i);
        BuiltinList_push(o, 1, partcv, &f, 0);
    }
    gc_unpause();
    return o;
}
Object ConcatString_Equals(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    if (self == args[0])
        return alloc_Boolean(1);
    struct ConcatStringObject *sself = (struct ConcatStringObject*)self;
    struct ConcatStringObject *other = (struct ConcatStringObject*)args[0];
    if (other->class != String && other->class != ConcatString)
        return alloc_Boolean(0);
    if (sself->size != other->size)
        return alloc_Boolean(0);
    if (sself->blen != other->blen)
        return alloc_Boolean(0);
    char *a = grcstring(self);
    char *b = grcstring(args[0]);
    return alloc_Boolean(strcmp(a,b) == 0);
}
Object ConcatString__escape(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    char *c = grcstring(self);
    Object o = makeEscapedString(c);
    return o;
}
Object ConcatString_ord(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    struct ConcatStringObject *sself = (struct ConcatStringObject*)self;
    if (sself->flat)
        return callmethod(alloc_String(sself->flat), "ord", 0, NULL, NULL);
    Object left = sself->left;
    struct StringObject *lefts = (struct StringObject*)left;
    int ls = lefts->size;
    if (ls > 0)
        return callmethod(left, "ord", 0, NULL, NULL);
    Object right = sself->right;
    return callmethod(right, "ord", 0, NULL, NULL);
}
Object ConcatString_at(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    struct ConcatStringObject *sself = (struct ConcatStringObject*)self;
    int p = integerfromAny(args[0]);
    int ms = *(int*)(self->data + sizeof(int));
    if (ms == 1 && p == 1)
        return self;
    ConcatString__Flatten(self);
    return String_at(self, nparts, argcv, args, flags);
}
Object ConcatString_length(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    struct ConcatStringObject *sself = (struct ConcatStringObject*)self;
    return alloc_Float64(sself->blen);
}
Object ConcatString_iter(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    char *c = ConcatString__Flatten(self);
    Object o = alloc_String(c);
    return callmethod(o, "iter", 0, NULL, NULL);
}
Object ConcatString_substringFrom_to(Object self,
        int nparts, int *argcv, Object *args, int flags) {
    struct ConcatStringObject *sself = (struct ConcatStringObject*)self;
    ConcatString__Flatten(self);
    return String_substringFrom_to(self, nparts, argcv, args, flags);
}
Object String_hashcode(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    struct StringObject* sself = (struct StringObject*)self;
    if (!sself->hashcode) {
        int32_t hashcode = hash_init;
        char *c = grcstring(self);
        while (*c != 0) {
            hashcode = (hashcode << 5) + hashcode + *c++;
        }
        sself->hashcode = hashcode;
    }
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
void ConcatString__release(Object o) {
    struct ConcatStringObject *s = (struct ConcatStringObject *)o;
    if (s->flat)
        glfree(s->flat);
}
void ConcatString__mark(Object o) {
    struct ConcatStringObject *s = (struct ConcatStringObject *)o;
    if (s->flat)
        return;
    ConcatString__Flatten(o);
}
Object String_asNumber(Object self, int nparts, int *argcv,
        Object *argv, int flags) {
    char *c = grcstring(self);
    return alloc_Float64(atof(c));
}
Object String_encode(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    struct StringObject* sself = (struct StringObject*)self;
    grcstring(self);
    return alloc_Octets(sself->flat,
            sself->blen);
}
Object alloc_ConcatString(Object left, Object right) {
    if (ConcatString == NULL) {
        ConcatString = alloc_class3("ConcatString", 24,
                (void*)&ConcatString__mark,
                (void*)&ConcatString__release);
        add_Method(ConcatString, "asString", &identity_function);
        add_Method(ConcatString, "++", &String_concat);
        add_Method(ConcatString, "size", &String_size);
        add_Method(ConcatString, "at", &ConcatString_at);
        add_Method(ConcatString, "[]", &ConcatString_at);
        add_Method(ConcatString, "==", &ConcatString_Equals);
        add_Method(ConcatString, "!=", &Object_NotEquals);
        add_Method(ConcatString, "iterator", &ConcatString_iter);
        add_Method(ConcatString, "_escape", &ConcatString__escape);
        add_Method(ConcatString, "length", &ConcatString_length);
        add_Method(ConcatString, "iter", &ConcatString_iter);
        add_Method(ConcatString, "encode", &String_encode);
        add_Method(ConcatString, "substringFrom()to",
                &ConcatString_substringFrom_to);
        add_Method(ConcatString, "replace()with", &String_replace_with);
        add_Method(ConcatString, "hashcode", &String_hashcode);
        add_Method(ConcatString, "indices", &String_indices);
        add_Method(ConcatString, "ord", &ConcatString_ord);
        add_Method(ConcatString, "asNumber", &String_asNumber);
        add_Method(ConcatString, "match", &literal_match);
        add_Method(ConcatString, "|", &literal_or);
        add_Method(ConcatString, "&", &literal_and);
    }
    struct StringObject *lefts = (struct StringObject*)left;
    struct StringObject *rights = (struct StringObject*)right;
    int depth = 1;
    if (lefts->size == 0)
        return right;
    if (rights->size == 0)
        return left;
    if (lefts->class == ConcatString)
        depth = max(depth, ((struct ConcatStringObject*)lefts)->depth + 1);
    if (rights->class == ConcatString)
        depth = max(depth, ((struct ConcatStringObject*)rights)->depth + 1);
    if (depth > 100) {
        int len = lefts->blen + rights->blen + 1;
        char buf[len];
        ConcatString__FillBuffer(left, buf, len);
        ConcatString__FillBuffer(right, buf + lefts->blen, len - lefts->blen);
        return alloc_String(buf);
    }
    Object o = alloc_obj(sizeof(struct ConcatStringObject)
            - sizeof(struct Object), ConcatString);
    struct ConcatStringObject *so = (struct ConcatStringObject*)o;
    so->left = left;
    so->right = right;
    so->blen = lefts->blen + rights->blen;
    so->size = lefts->size + rights->size;
    so->ascii = lefts->ascii & rights->ascii;
    so->flat = NULL;
    so->depth = depth;
    so->hashcode = 0;
    return o;
}
Object String__escape(Object, int, int*, Object*, int flags);
Object String_length(Object, int, int*, Object*, int flags);
Object String_iter(Object receiver, int nparts, int *argcv,
        Object* args, int flags) {
    return alloc_StringIter(receiver);
}
Object String_at(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    Object idxobj = args[0];
    assertClass(idxobj, Number);
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
Object String_ord(Object self, int nparts, int *argcv,
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
Object String_size(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    struct StringObject* sself = (struct StringObject*)self;
    return alloc_Float64(sself->size);
}
Object String_substringFrom_to(Object self,
        int nparts, int *argcv, Object *args, int flags) {
    struct StringObject* sself = (struct StringObject*)self;
    int st = integerfromAny(args[0]);
    int en = (argcv[1] > 0 ? integerfromAny(args[1]) : sself->size + 1);
    st--;
    en--;
    int mysize = sself->size;
    if (en > mysize)
        en = mysize;
    int cl = en - st;
    if (cl < 0)
        return alloc_String("");
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
        int nparts, int *argcv, Object *args, int flags) {
    struct StringObject* sself = (struct StringObject*)self;
    int *ml = &sself->blen;
    char *what = grcstring(args[0]);
    char *with = grcstring(args[1]);
    char *my = grcstring(self);
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
        String = alloc_class("String", 24);
        add_Method(String, "asString", &identity_function);
        add_Method(String, "++", &String_concat);
        add_Method(String, "at", &String_at);
        add_Method(String, "[]", &String_at);
        add_Method(String, "==", &String_Equals);
        add_Method(String, "!=", &Object_NotEquals);
        add_Method(String, "iterator", &String_iter);
        add_Method(String, "_escape", &String__escape);
        add_Method(String, "length", &String_length);
        add_Method(String, "size", &String_size);
        add_Method(String, "iter", &String_iter);
        add_Method(String, "ord", &String_ord);
        add_Method(String, "encode", &String_encode);
        add_Method(String, "substringFrom()to", &String_substringFrom_to);
        add_Method(String, "replace()with", &String_replace_with);
        add_Method(String, "hashcode", &String_hashcode);
        add_Method(String, "indices", &String_indices);
        add_Method(String, "asNumber", &String_asNumber);
        add_Method(String, "match", &literal_match);
        add_Method(String, "|", &literal_or);
        add_Method(String, "&", &literal_and);
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
    int hc = hash_init;
    int ascii = 1;
    for (i=0; i<blen; ) {
        int l = getutf8charlen(data + i);
        int j = i + l;
        if (l > 1 && ascii == 1)
            ascii = 0;
        for (; i<j; i++) {
            d[i] = data[i];
            hc = (hc << 5) + hc + data[i];
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
        gc_root(o);
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
Object String__escape(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    struct StringObject* sself = (struct StringObject*)self;
    char *p = sself->body;
    return makeEscapedString(p);
}
Object String_length(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    struct StringObject* sself = (struct StringObject*)self;
    return alloc_Float64(sself->blen);
}
Object String_index(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    int index = integerfromAny(args[0]);
    struct StringObject* sself = (struct StringObject*)self;
    char buf[2];
    char *c = sself->body;
    buf[0] = c[index];
    buf[1] = '\0';
    return alloc_String(buf);
}
Object String_concat(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    int frame = gc_frame_new();
    Object asStr = callmethod(args[0], "asString", 0, NULL, NULL);
    gc_frame_newslot(asStr);
    Object r = alloc_ConcatString(self, asStr);
    gc_frame_end(frame);
    return r;
}
Object Octets_size(Object receiver, int nparts, int *argcv,
        Object *args, int flags) {
    struct OctetsObject *self = (struct OctetsObject*)receiver;
    return alloc_Float64(self->blen);
}
Object Octets_asString(Object receiver, int nparts, int *argcv,
        Object *args, int flags) {
    struct OctetsObject *self = (struct OctetsObject*)receiver;
    char *data = self->body;
    int size = self->blen;
    char dt[4 + size * 2];
    int i;
    dt[0] = 'x';
    dt[1] = '"';
    for (i=0; i<size; i++) {
        sprintf(dt + 2 + i*2, "%.2x", (int)data[i]&255);
    }
    dt[2 + size * 2] = '"';
    dt[3 + size * 2] = 0;
    return alloc_String(dt);
}
Object Octets_at(Object receiver, int nparts, int *argcv,
        Object *args, int flags) {
    struct OctetsObject *self = (struct OctetsObject*)receiver;
    char *data = self->body;
    int size = self->blen;
    int i = integerfromAny(args[0]);
    if (i >= size)
        die("Octets index out of bounds: %i/%i", i, size);
    return alloc_Float64((int)data[i]&255);
}
Object Octets_Equals(Object receiver, int nparts, int *argcv,
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
Object Octets_Concat(Object receiver, int nparts, int *argcv,
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
Object Octets_decode(Object receiver, int nparts, int *argcv,
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
        add_Method(Octets, "[]", &Octets_at);
        add_Method(Octets, "==", &Octets_Equals);
        add_Method(Octets, "!=", &Object_NotEquals);
        add_Method(Octets, "size", &Octets_size);
        add_Method(Octets, "decode", &Octets_decode);
    }
    Object o = alloc_obj(sizeof(int) + len, Octets);
    struct OctetsObject *oo = (struct OctetsObject*)o;
    oo->blen = len;
    memcpy(oo->body, data, len);
    return o;
}
Object Float64_Range(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    Object other = args[0];
    double a = *(double*)self->data;
    double b = *(double*)other->data;
    int i = a;
    int j = b;
    gc_pause();
    Object arr = alloc_BuiltinList();
    int partcv[] = {1};
    for (; i<=b; i++) {
        Object v = alloc_Float64(i);
        BuiltinList_push(arr, 1, partcv, &v, 0);
    }
    gc_unpause();
    return (Object)arr;
}
Object Float64_Add(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    Object other = args[0];
    assertClass(other, Number);
    double a = *((double*)self->data);
    double b;
    if (other->class == Number)
        b = *(double*)other->data;
    else
        b = integerfromAny(other);
    return alloc_Float64(a+b);
}
Object Float64_Sub(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    Object other = args[0];
    assertClass(other, Number);
    double a = *(double*)self->data;
    double b;
    if (other->class == Number)
        b = *(double*)other->data;
    else
        b = integerfromAny(other);
    return alloc_Float64(a-b);
}
Object Float64_Mul(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    Object other = args[0];
    assertClass(other, Number);
    double a = *(double*)self->data;
    double b;
    if (other->class == Number)
        b = *(double*)other->data;
    else
        b = integerfromAny(other);
    return alloc_Float64(a*b);
}
Object Float64_Div(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    Object other = args[0];
    assertClass(other, Number);
    double a = *(double*)self->data;
    double b;
    if (other->class == Number)
        b = *(double*)other->data;
    else
        b = integerfromAny(other);
    return alloc_Float64(a/b);
}
Object Float64_Exp(Object self, int nparts, int *argcv,
                   Object *args, int flags) {
    Object other = args[0];
    assertClass(other, Number);
    double a = *(double*)self->data;
    double b = *(double*)other->data;
    return alloc_Float64(pow(a,b));
}
Object Float64_Mod(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    Object other = args[0];
    assertClass(other, Number);
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
Object Float64_Equals(Object self, int nparts, int *argcv,
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
Object Float64_LessThan(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    Object other = args[0];
    assertClass(other, Number);
    double a = *(double*)self->data;
    double b;
    if (other->class == Number)
        b = *(double*)other->data;
    else
        b = integerfromAny(other);
    return alloc_Boolean(a < b);
}
Object Float64_GreaterThan(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    Object other = args[0];
    assertClass(other, Number);
    double a = *(double*)self->data;
    double b;
    if (other->class == Number)
        b = *(double*)other->data;
    else
        b = integerfromAny(other);
    return alloc_Boolean(a > b);
}
Object Float64_LessOrEqual(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    Object other = args[0];
    assertClass(other, Number);
    double a = *(double*)self->data;
    double b;
    if (other->class == Number)
        b = *(double*)other->data;
    else
        b = integerfromAny(other);
    return alloc_Boolean(a <= b);
}
Object Float64_GreaterOrEqual(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    Object other = args[0];
    assertClass(other, Number);
    double a = *(double*)self->data;
    double b;
    if (other->class == Number)
        b = *(double*)other->data;
    else
        b = integerfromAny(other);
    return alloc_Boolean(a >= b);
}
Object Float64_Negate(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    double a = *(double*)self->data;
    return alloc_Float64(-a);
}
Object Float64_asInteger32(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    int i = integerfromAny(self);
    return alloc_Integer32(i);
}
Object Float64_hashcode(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    double *d = (double*)self->data;
    uint32_t *w1 = (uint32_t*)d;
    uint32_t *w2 = (uint32_t*)(d + 4);
    uint32_t hc = *w1 ^ *w2;
    return alloc_Float64(hc);
}
Object Float64_inBase(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    Object basenum = args[0];
    double based = *((double*)args[0]->data);
    double mined = *((double*)self->data);
    int base = (int)based;
    int mine = (int)mined;
    if (base > 36 || base < 2)
        die("base must be in range 2..36");
    char symbols[] = "0123456789abcdefghijklmnopqrstuvwxyz";
    char buf[DBL_MAX_EXP + 3]; // One byte for sign, one for null, one for luck
    int i = 0;
    char *b = buf + DBL_MAX_EXP + 2;
    *b = 0;
    char before = 0;
    if (mine < 0) {
        before = '-';
        mine = -mine;
    }
    while (mine != 0) {
        b--;
        int r = mine % base;
        *(b-1) = *(b+1);
        *b = symbols[r];
        mine = (mine - r) / base;
    }
    if (before)
        *(--b) = before;
    return alloc_String(b);
}
Object Float64_truncate(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    double *d = (double*)self->data;
    double r;
    if (*d < 0)
        r = ceil(*d);
    else
        r = floor(*d);
    if (*d == r)
        return self;
    return alloc_Float64(r);
}
void Float64__mark(Object self) {
    Object *strp = (Object*)(self->data + sizeof(double));
    if (*strp != NULL)
        gc_mark(*strp);
}
Object Float64_prefixLessThan(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    return alloc_LessThanPattern(self);
}
Object Float64_prefixGreaterThan(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    return alloc_GreaterThanPattern(self);
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
        Number = alloc_class2("Number", 27, (void*)&Float64__mark);
        add_Method(Number, "+", &Float64_Add);
        add_Method(Number, "*", &Float64_Mul);
        add_Method(Number, "-", &Float64_Sub);
        add_Method(Number, "/", &Float64_Div);
        add_Method(Number, "^", &Float64_Exp);
        add_Method(Number, "%", &Float64_Mod);
        add_Method(Number, "==", &Float64_Equals);
        add_Method(Number, "!=", &Object_NotEquals);
        add_Method(Number, "hashcode", &Float64_hashcode);
        add_Method(Number, "++", &Object_concat);
        add_Method(Number, "<", &Float64_LessThan);
        add_Method(Number, ">", &Float64_GreaterThan);
        add_Method(Number, "<=", &Float64_LessOrEqual);
        add_Method(Number, ">=", &Float64_GreaterOrEqual);
        add_Method(Number, "..", &Float64_Range);
        add_Method(Number, "asString", &Float64_asString);
        add_Method(Number, "asInteger32", &Float64_asInteger32);
        add_Method(Number, "prefix-", &Float64_Negate);
        add_Method(Number, "inBase", &Float64_inBase);
        add_Method(Number, "truncate", &Float64_truncate);
        add_Method(Number, "match", &literal_match);
        add_Method(Number, "|", &literal_or);
        add_Method(Number, "&", &literal_and);
        add_Method(Number, "prefix<", &Float64_prefixLessThan);
        add_Method(Number, "prefix>", &Float64_prefixGreaterThan);
    }
    Object o = alloc_obj(sizeof(double) + sizeof(Object), Number);
    double *d = (double*)o->data;
    *d = num;
    Object *str = (Object*)(o->data + sizeof(double));
    *str = NULL;
    if (ival == num && ival >= FLOAT64_INTERN_MIN
            && ival < FLOAT64_INTERN_MAX) {
        Float64_Interned[ival-FLOAT64_INTERN_MIN] = o;
        gc_root(o);
    }
    if (num == 0)
        FLOAT64_ZERO = o;
    if (num == 1)
        FLOAT64_ONE = o;
    if (num == 2)
        FLOAT64_TWO = o;
    return o;
}
Object Float64_asString(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    Object *strp = (Object*)(self->data + sizeof(double));
    if (*strp != NULL)
        return *strp;
    double num = *(double*)self->data;
    char s[1024];
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
Object Boolean_asString(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    int myval = *(int8_t*)self->data;
    if (myval) {
        return alloc_String("true");
    } else {
        return alloc_String("false");
    }
}
Object Boolean_And(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    int8_t myval = *(int8_t*)self->data;
    int8_t otherval = *(int8_t*)args[0]->data;
    if (myval && otherval) {
        return self;
    } else {
        return alloc_Boolean(0);
    }
}
Object Boolean_Or(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    int8_t myval = *(int8_t*)self->data;
    int8_t otherval = *(int8_t*)args[0]->data;
    if (myval || otherval) {
        return alloc_Boolean(1);
    } else {
        return alloc_Boolean(0);
    }
}
Object Boolean_AndAnd(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    int8_t myval = *(int8_t*)self->data;
    if (!myval) {
        return self;
    }
    if (args[0]->flags & FLAG_BLOCK)
        return callmethod(args[0], "apply", 0, NULL, NULL);
    return alloc_Boolean(istrue(args[0]));
}
Object Boolean_OrOr(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    int8_t myval = *(int8_t*)self->data;
    if (myval)
        return self;
    if (args[0]->flags & FLAG_BLOCK)
        return callmethod(args[0], "apply", 0, NULL, NULL);
    return alloc_Boolean(istrue(args[0]));
}
Object Boolean_andAlso(Object self, int nparts, int *argcv,
        Object *argv, int flags) {
    if (self == BOOLEAN_TRUE)
        return callmethod(argv[0], "apply", 0, NULL, NULL);
    return self;
}
Object Boolean_orElse(Object self, int nparts, int *argcv,
        Object *argv, int flags) {
    if (self == BOOLEAN_FALSE)
        return callmethod(argv[0], "apply", 0, NULL, NULL);
    return self;
}
Object Boolean_not(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    if (self == BOOLEAN_TRUE)
        return alloc_Boolean(0);
    return alloc_Boolean(1);
}
Object Boolean_Equals(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    return alloc_Boolean(self == args[0] && ((flags >> 24 & 255) == 0));
}
Object Boolean_NotEquals(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    return alloc_Boolean(self != args[0]);
}
Object alloc_Boolean(int val) {
    if (val && BOOLEAN_TRUE != NULL)
        return BOOLEAN_TRUE;
    if (!val && BOOLEAN_FALSE != NULL)
        return BOOLEAN_FALSE;
    if (Boolean == NULL) {
        Boolean = alloc_class("Boolean", 13);
        add_Method(Boolean, "asString", &Boolean_asString);
        add_Method(Boolean, "&", &literal_and);
        add_Method(Boolean, "|", &literal_or);
        add_Method(Boolean, "&&", &Boolean_AndAnd);
        add_Method(Boolean, "||", &Boolean_OrOr);
        add_Method(Boolean, "prefix!", &Boolean_not);
        add_Method(Boolean, "not", &Boolean_not);
        add_Method(Boolean, "andAlso", &Boolean_andAlso);
        add_Method(Boolean, "==", &Boolean_Equals);
        add_Method(Boolean, "!=", &Boolean_NotEquals);
        add_Method(Boolean, "orElse", &Boolean_orElse);
        add_Method(Boolean, "match", &literal_match);
    }
    Object o = alloc_obj(sizeof(int8_t), Boolean);
    int8_t *d = (int8_t*)o->data;
    *d = (int8_t)val;
    if (val)
        BOOLEAN_TRUE = o;
    else
        BOOLEAN_FALSE = o;
    gc_root(o);
    return o;
}
Object File_close(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    struct FileObject *s = (struct FileObject*)self;
    int rv = fclose(s->file);
    return alloc_Boolean(1);
}
Object File_write(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    struct FileObject *s = (struct FileObject*)self;
    FILE *file = s->file;
    struct StringObject *so = (struct StringObject*)args[0];
    char *data = grcstring(args[0]);
    int wrote = fwrite(data, sizeof(char), so->blen, file);
    if (wrote != so->blen) {
        perror("Error writing to file");
        die("Error writing to file.");
    }
    return alloc_Boolean(1);
}
Object File_getline(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    struct FileObject *s = (struct FileObject*)self;
    FILE *file = s->file;
    char *line = NULL;
    size_t len = 0;
    ssize_t read;
    Object str;
    if ((read = getline(&line, &len, file)) != -1) {
        if (read > 0) {
            line[read - 1] = '\0';
        }
        str = alloc_String(line);
    } else {
        str = alloc_String("");
    }
    if (line)
        free(line);
    return str;
}
Object File_read(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    struct FileObject *s = (struct FileObject*)self;
    FILE *file = s->file;
    int bsize = 128;
    int pos = 0;
    char *buf = malloc(bsize);
    pos += fread(buf, sizeof(char), bsize, file);
    while (!feof(file)) {
        bsize *= 2;
        buf = realloc(buf, bsize);
        pos += fread(buf+pos, sizeof(char), bsize-pos-1, file);
    }
    buf[pos] = 0;
    Object str = alloc_String(buf);
    free(buf);
    return str;
}
Object File_readBinary(Object self, int nparts, int *argcv,
        Object *argv, int flags) {
    struct FileObject *s = (struct FileObject*)self;
    FILE *file = s->file;
    int size = integerfromAny(argv[0]);
    char *buf = malloc(size);
    int pos = fread(buf, sizeof(char), size, file);
    Object ret = alloc_Octets(buf, pos);
    free(buf);
    return ret;
}
Object File_writeBinary(Object self, int nparts, int *argcv,
        Object *argv, int flags) {
    struct FileObject *s = (struct FileObject*)self;
    FILE *file = s->file;
    Object oct = argv[0];
    struct OctetsObject *octo = (struct OctetsObject *)oct;
    int size = integerfromAny(callmethod(oct, "size", 0, NULL, NULL));
    int pos = fwrite(octo->body, sizeof(char), size, file);
    return alloc_Float64(pos);
}
Object File_seek(Object self, int nparts, int *argcv,
        Object *argv, int flags) {
    struct FileObject *s = (struct FileObject*)self;
    FILE *file = s->file;
    int loc = integerfromAny(argv[0]);
    fseek(file, loc, SEEK_SET);
    return self;
}
Object File_seekForward(Object self, int nparts, int *argcv,
        Object *argv, int flags) {
    struct FileObject *s = (struct FileObject*)self;
    FILE *file = s->file;
    int loc = integerfromAny(argv[0]);
    fseek(file, loc, SEEK_CUR);
    return self;
}
Object File_seekBackward(Object self, int nparts, int *argcv,
        Object *argv, int flags) {
    struct FileObject *s = (struct FileObject*)self;
    FILE *file = s->file;
    int loc = integerfromAny(argv[0]);
    fseek(file, -loc, SEEK_CUR);
    return self;
}
Object File_iter(Object self, int nparts, int *argcv,
        Object *argv, int flags) {
    return self;
}
Object File_havemore(Object self, int nparts, int *argcv,
        Object *argv, int flags) {
    struct FileObject *s = (struct FileObject*)self;
    return alloc_Boolean(!feof(s->file));
}
Object File_next(Object self, int nparts, int *argcv,
        Object *argv, int flags) {
    struct FileObject *s = (struct FileObject*)self;
    FILE *file = s->file;
    char c = getc(s->file);
    char buf[5];
    char *b = buf;
    int l = getutf8charlen(&c);
    *b++ = c;
    while (--l)
        *b++ = getc(s->file);
    *b = 0;
    return alloc_String(buf);
}
Object File_eof(Object self, int nparts, int *argcv,
        Object *argv, int flags) {
    struct FileObject *s = (struct FileObject*)self;
    return alloc_Boolean(feof(s->file));
}
Object File_isatty(Object self, int nparts, int *argcv,
        Object *argv, int flags) {
    struct FileObject *s = (struct FileObject*)self;
    return alloc_Boolean(isatty(fileno(s->file)));
}
Object alloc_File_from_stream(FILE *stream) {
    if (File == NULL) {
        File = alloc_class("File", 16);
        add_Method(File, "read", &File_read);
        add_Method(File, "getline", &File_getline);
        add_Method(File, "write", &File_write);
        add_Method(File, "close", &File_close);
        add_Method(File, "seek", &File_seek);
        add_Method(File, "seekForward", &File_seekForward);
        add_Method(File, "seekBackward", &File_seekBackward);
        add_Method(File, "iter", &File_iter);
        add_Method(File, "havemore", &File_havemore);
        add_Method(File, "next", &File_next);
        add_Method(File, "readBinary", &File_readBinary);
        add_Method(File, "writeBinary", &File_writeBinary);
        add_Method(File, "eof", &File_eof);
        add_Method(File, "isatty", &File_isatty);
        add_Method(File, "==", &Object_Equals);
        add_Method(File, "!=", &Object_NotEquals);
    }
    Object o = alloc_obj(sizeof(FILE*) + sizeof(int), File);
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
Object io_input(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    struct IOModuleObject *s = (struct IOModuleObject*)self;
    return s->_stdin;
}
Object io_output(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    struct IOModuleObject *s = (struct IOModuleObject*)self;
    return s->_stdout;
}
Object io_error(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    struct IOModuleObject *s = (struct IOModuleObject*)self;
    return s->_stderr;
}
Object io_open(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    Object fnstr = args[0];
    Object modestr = args[1];
    char *fn = grcstring(fnstr);
    char *mode = grcstring(modestr);
    Object ret = alloc_File(fn, mode);
    return ret;
}
Object io_system(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    Object cmdstr = args[0];
    char *cmd = grcstring(cmdstr);
    int rv = system(cmd);
    Object ret = alloc_Boolean(0);
    if (rv == 0)
        ret = alloc_Boolean(1);
    return ret;
}
Object io_newer(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    char *ba = grcstring(args[0]);
    char *bb = grcstring(args[1]);
    struct stat sta;
    struct stat stb;
    if (stat(ba, &sta) != 0)
        return alloc_Boolean(0);
    if (stat(bb, &stb) != 0)
        return alloc_Boolean(1);
    return alloc_Boolean(sta.st_mtime > stb.st_mtime);
}
Object io_exists(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    Object so = args[0];
    struct StringObject *ss = (struct StringObject*)args[0];
    int sbl = ss->blen;
    char *buf = grcstring(args[0]);
    struct stat st;
    return alloc_Boolean(stat(buf, &st) == 0);
}
Object io_realpath(Object self, int nparts, int *argcv, Object *argv,
        int flags) {
    char buf[PATH_MAX];
    realpath(grcstring(argv[0]), buf);
    return alloc_String(buf);
}
struct ProcessObject {
    OBJECT_HEADER;
    pid_t pid;
    int status;
    int done;
};
ClassData Process;
Object Process_wait(Object self, int nparts, int *argcv,
        Object *argv, int flags) {
    struct ProcessObject *p = (struct ProcessObject *)self;
    waitpid(p->pid, &(p->status), 0);
    p->done = 1;
    if (WIFEXITED(p->status)) {
        return alloc_Float64(WEXITSTATUS(p->status));
    }
    return alloc_Float64(-WTERMSIG(p->status));
}
Object Process_status(Object self, int nparts, int *argcv,
        Object *argv, int flags) {
    struct ProcessObject *p = (struct ProcessObject *)self;
    if (!p->done)
        callmethod(self, "wait", 0, NULL, NULL);
    if (WIFEXITED(p->status)) {
        return alloc_Float64(WEXITSTATUS(p->status));
    }
    return alloc_Float64(-WTERMSIG(p->status));
}
Object Process_success(Object self, int nparts, int *argcv,
        Object *argv, int flags) {
    struct ProcessObject *p = (struct ProcessObject *)self;
    waitpid(p->pid, &(p->status), 0);
    if (WIFEXITED(p->status))
        return alloc_Boolean(WEXITSTATUS(p->status) == 0);
    return alloc_Boolean(0);
}
Object Process_terminated(Object self, int nparts, int *argcv,
        Object *argv, int flags) {
    struct ProcessObject *p = (struct ProcessObject *)self;
    if (p->done)
        return alloc_Boolean(1);
    int n = waitpid(p->pid, &(p->status), WNOHANG);
    if ((n == 0) || (n == (pid_t)-1))
        return alloc_Boolean(0);
    return alloc_Boolean(1);
}
Object alloc_Process(pid_t pid) {
    if (Process == NULL) {
        Process = alloc_class("Process", 6);
        add_Method(Process, "wait", &Process_wait);
        add_Method(Process, "success", &Process_success);
        add_Method(Process, "terminated", &Process_terminated);
        add_Method(Process, "status", &Process_status);
        add_Method(Process, "==", &Object_Equals);
        add_Method(Process, "!=", &Object_NotEquals);
    }
    Object o = alloc_obj(sizeof(pid_t) + sizeof(int) * 2, Process);
    struct ProcessObject *p = (struct ProcessObject *)o;
    p->pid = pid;
    p->status = 0;
    p->done = 0;
    return o;
}
Object io_spawn(Object self, int nparts, int *argcv,
        Object *argv, int flags) {
    char *args[argcv[0] + 1];
    int i;
    for (i=0; i<argcv[0]; i++)
        args[i] = grcstring(argv[i]);
    args[i] = NULL;
    pid_t pid;
    if (!(pid = fork())) {
        execvp(args[0], args);
        exit(127);
    }
    return alloc_Process(pid);
}
Object io_spawnv(Object self, int nparts, int *argcv,
        Object *argv, int flags) {
    int size = integerfromAny(callmethod(argv[1], "size", 0, NULL, NULL));
    char *args[size + 2];
    args[0] = grcstring(argv[0]);
    int i;
    Object iter = callmethod(argv[1], "iterator", 0, NULL, NULL);
    for (i=0; i<size; i++)
        args[i+1] = grcstring(callmethod(iter, "next", 0, NULL, NULL));
    args[i+1] = NULL;
    pid_t pid;
    if (!(pid = fork())) {
        execvp(args[0], args);
        exit(127);
    }
    return alloc_Process(pid);
}
Object io_listdir(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    DIR *dp;
    Object ret = alloc_BuiltinList();
    Object argobj = args[0];
    char *strval = grcstring(argobj);
    if((dp = opendir(strval)) == NULL) {
        return ret;
    }
    struct dirent *entry;
    int partcv[] = {1};
    while((entry = readdir(dp)) != NULL){
        Object str = alloc_String(entry->d_name);
        callmethod(ret,"push",1,partcv,&str);
    }
    return ret;
}
void io__mark(struct IOModuleObject *o) {
    gc_mark(o->_stdin);
    gc_mark(o->_stdout);
    gc_mark(o->_stderr);
}
Object module_io_init() {
    if (iomodule != NULL)
        return iomodule;
    IOModule = alloc_class2("Module<io>", 11, (void*)&io__mark);
    add_Method(IOModule, "input", &io_input);
    add_Method(IOModule, "output", &io_output);
    add_Method(IOModule, "error", &io_error);
    add_Method(IOModule, "open", &io_open);
    add_Method(IOModule, "system", &io_system);
    add_Method(IOModule, "exists", &io_exists);
    add_Method(IOModule, "newer", &io_newer);
    add_Method(IOModule, "spawn", &io_spawn);
    add_Method(IOModule, "spawnv", &io_spawnv);
    add_Method(IOModule, "realpath", &io_realpath);
    add_Method(IOModule, "listdir", &io_listdir);
    Object o = alloc_obj(sizeof(Object) * 3, IOModule);
    struct IOModuleObject *so = (struct IOModuleObject*)o;
    so->_stdin = alloc_File_from_stream(stdin);
    so->_stdout = alloc_File_from_stream(stdout);
    so->_stderr = alloc_File_from_stream(stderr);
    gc_root(o);
    return o;
}
ClassData EnvironObject;
Object environObject;
Object environObject_at(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    char *s = grcstring(args[0]);
    char *v = getenv(s);
    if (v)
        return alloc_String(v);
    return alloc_String("");
}
Object environObject_atPut(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    char *s = grcstring(args[0]);
    char *v = grcstring(args[1]);
    setenv(s, v, 1);
    return alloc_Boolean(1);
}
Object environObject_contains(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    char *s = grcstring(args[0]);
    char *v = getenv(s);
    if (v)
        return alloc_Boolean(1);
    return alloc_Boolean(0);
}
Object alloc_environObject() {
    if (environObject)
        return environObject;
    if (!EnvironObject) {
        EnvironObject = alloc_class("Environ", 5);
        add_Method(EnvironObject, "at", &environObject_at);
        add_Method(EnvironObject, "[]", &environObject_at);
        add_Method(EnvironObject, "at()put", &environObject_atPut);
        add_Method(EnvironObject, "[]:=", &environObject_atPut);
        add_Method(EnvironObject, "contains", &environObject_contains);
    }
    environObject = alloc_obj(0, EnvironObject);
    gc_root(environObject);
    return environObject;
}
Object sys_argv(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    struct SysModule *so = (struct SysModule*)self;
    return so->argv;
}
Object argv_List = NULL;
void module_sys_init_argv(Object argv) {
    argv_List = argv;
}
Object sys_cputime(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    int i = clock() - start_clocks;
    double d = i;
    d /= CLOCKS_PER_SEC;
    return alloc_Float64(d);
}
Object sys_elapsed(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    struct timeval ar;
    gettimeofday(&ar, NULL);
    double now = ar.tv_sec + (double)ar.tv_usec / 1000000;
    double d = now - start_time;
    return alloc_Float64(d);
}
Object sys_exit(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    int i = integerfromAny(args[0]);
    if (i == 0)
        gracelib_stats();
    exit(i);
    return NULL;
}

char *execPathHelper(){
    char *ep = ARGV[0];
    if (ep[0] == '/') {
        // Absolute path - needs no work
    } else if (strchr(ep, '/')) {
        // Relative path - we will ignore the work
    } else {
        // We have to search PATH
        char *p = getenv("PATH");
        char path[strlen(p)];
        strcpy(path, p);
        char *c = strtok(path, ":");
        char buf[PATH_MAX];
        struct stat st;
        while (c) {
            strcpy(buf, c);
            strcat(buf, "/");
            strcat(buf, ep);
            if (stat(buf, &st) == 0) {
                ep = buf;
                break;
            }
            c = strtok(NULL, ":");
        }
    }
    char epm[strlen(ep) + 1];
    strcpy(epm, ep);
    char *dn = dirname(epm);
    return dn;
}

Object sys_execPath(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    return alloc_String(execPathHelper());
}
Object sys_environ(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    if (!environObject)
        environObject = alloc_environObject();
    return environObject;
}
void sys__mark(struct SysModule *o) {
    gc_mark(o->argv);
}
Object module_sys_init() {
    if (sysmodule != NULL)
        return sysmodule;
    SysModule = alloc_class2("Module<sys>", 6, (void*)*sys__mark);
    add_Method(SysModule, "argv", &sys_argv);
    add_Method(SysModule, "cputime", &sys_cputime);
    add_Method(SysModule, "elapsed", &sys_elapsed);
    add_Method(SysModule, "exit", &sys_exit);
    add_Method(SysModule, "execPath", &sys_execPath);
    add_Method(SysModule, "environ", &sys_environ);
    Object o = alloc_obj(sizeof(Object), SysModule);
    struct SysModule *so = (struct SysModule*)o;
    so->argv = argv_List;
    sysmodule = o;
    gc_root(o);
    return o;
}
Object alloc_done() {
    if (done != NULL)
        return done;
    Done = alloc_class("done", 4);
    add_Method(Done, "==", &Object_Equals);
    add_Method(Done, "!=", &Object_NotEquals);
    add_Method(Done, "asDebugString", &Singleton_asString);
    add_Method(Done, "asString", &Singleton_asString);
    Object o = alloc_obj(0, Done);
    done = o;
    gc_root(o);
    return o;
}
Object alloc_ellipsis() {
    if (ellipsis != NULL)
        return ellipsis;
    ellipsisClass = alloc_class("ellipsis", 4);
    add_Method(ellipsisClass, "asString", &Object_asString);
    add_Method(ellipsisClass, "++", &Object_concat);
    add_Method(ellipsisClass, "==", &Object_Equals);
    add_Method(ellipsisClass, "!=", &Object_NotEquals);
    Object o = alloc_obj(0, ellipsisClass);
    gc_root(o);
    ellipsis = o;
    return o;
}
Object alloc_Undefined() {
    if (undefined != NULL)
        return undefined;
    Undefined = alloc_class("Undefined", 0);
    Object o = alloc_obj(0, Undefined);
    undefined = o;
    gc_root(o);
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
struct TailCallObject {
    OBJECT_HEADER;
    Object self;
    const char *name;
    int nparts;
    int *argcv;
    Object *argv;
    int superdepth;
};
ClassData TailCall = NULL;
void TailCall__mark(struct TailCallObject *t) {
    gc_mark(t->self);
    int i, j;
    int n = 0;
    for (i = 0; i < t->nparts; i++) {
        for (j = 0; j < t->argcv[i]; j++) {
            gc_mark(t->argv[n]);
            n++;
        }
    }
}
void TailCall__release(struct TailCallObject *t) {
    glfree(t->argv);
}
Object tailcall(Object self, const char *name, int nparts, int *argcv,
        Object *argv, int superdepth) {
    if (TailCall == NULL) {
        TailCall = alloc_class3("TailCall", 0, (void*)&TailCall__mark,
                (void*)&TailCall__release);
    }
    struct TailCallObject *o = (struct TailCallObject*)alloc_obj(
            sizeof(struct TailCallObject) - sizeof(int32_t)
                - sizeof(ClassData), TailCall);
    o->flags = 0;
    o->class = TailCall;
    o->self = self;
    o->name = name;
    o->nparts = nparts;
    o->argcv = argcv;
    int i, j;
    int n = 0;
    for (i = 0; i < nparts; i++) {
        for (j = 0; j < argcv[i]; j++) {
            n++;
        }
    }
    o->argv = glmalloc(sizeof(Object) * n);
    n = 0;
    for (i = 0; i < nparts; i++) {
        for (j = 0; j < argcv[i]; j++) {
            o->argv[n] = argv[n];
            n++;
        }
    }
    o->superdepth = superdepth;
    return (Object)o;
}

Object sourceObject;
Method *findmethod(Object *selfp, Object *realselfp, const char *name,
        int superdepth, int *cflags) {
    Object self = *selfp;
    Object realself = *realselfp;
    int i;
    int callflags = *cflags;
    Method *m = NULL;
    ClassData c = self->class;
    Method *methods = c->methods;
    char *this_class_name = c->name;
    for (i=0; i < c->nummethods; i++) {
        Method this_method = c->methods[i];
        char *this_name = c->methods[i].name;
        if (strcmp(c->methods[i].name, name) == 0) {
            m = &c->methods[i];
            break;
        }
    }
    if (superdepth)
        m = NULL;
    if ((m == NULL || superdepth > 0) && (self->flags & FLAG_USEROBJ)) {
        Object o = self;
        int depth = 0;
        while (m == NULL && (o->flags & FLAG_USEROBJ)) {
            struct UserObject *uo = (struct UserObject *)o;
            if (uo->super) {
                depth++;
                c = uo->super->class;
                i = 0;
                if (depth < superdepth) {
                    o = uo->super;
                    continue;
                }
                for (i=0; i < c->nummethods; i++) {
                    if (strcmp(c->methods[i].name, name) == 0) {
                        m = &c->methods[i];
                        if (m->flags & MFLAG_REALSELFONLY)
                            self = uo->super;
                        if (m->flags & MFLAG_REALSELFALSO)
                            realself = uo->super;
                        callflags |= depth << 24;
                        break;
                    }
                }
                o = uo->super;
            } else {
                break;
            }
        }
    }
    if (m)
        callflags |= (m->pos & 255) << 16;
    *cflags = callflags;
    *selfp = self;
    *realselfp = realself;
    return m;
}
Method *findmethodsimple(Object self, const char *name) {
    int i = 0;
    return findmethod(&self, &self, name, 0, &i);
}
int checkmethodcall(Method *m, int nparts, int *argcv, Object *argv) {
    int i, j;
    int k = 0;
    struct MethodType *t = m->type;
    if (t == NULL || nparts == 0 || argcv == NULL || argv == NULL)
        return 1;
    int partcv[] = {1};
    for (i = 0; i < nparts && i < t->nparts; i++) {
        for (j = 0; j < argcv[i] && j < t->argcv[i]; j++) {
            if (t->types[k])
                if (!istrue(callmethod(t->types[k], "match", 1, partcv, &argv[k]))) {
                    die("Type error: expected %s for argument %s (%i) of %s (defined at %s:%i), got %s",
                            ((struct TypeObject *)t->types[k])->name,
                            (struct TypeObject *)t->names[k], k + 1,
                            m->name, m->definitionModule, m->definitionLine,
                            argv[k]->class->name);
                }
            k++;
        }
    }
    return 1;
}
FILE *callgraph;
int track_callgraph = 0;
int callcount = 0;
int tailcount = 0;
Object callmethod4(Object self, const char *name,
        int partc, int *argcv, Object *argv, int superdepth, int callflags) {
    debug("callmethod %s on %p (%s)", name, self, self->class->name);
    int frame = gc_frame_new();
    int istail = 0;
start:
    callcount++;
    int i, j;
    int k = 0;
    for (i = 0; i < partc; i++) {
        for (j = 0; j < argcv[i]; j++) {
            debug("  arg: %p (%s)", argv[k], argv[k]->class->name);
            k++;
        }
    }
    int slot = gc_frame_newslot(self);
    ClassData c = self->class;
    Object originalself = self;
    Object realself = self;
    Method *m = findmethod(&self, &realself, name, superdepth, &callflags);
    char objDesc[256];
    char methDesc[256];
    int unknownmodule = originalself->class->definitionModule == NULL
        ||strcmp(originalself->class->definitionModule, "unknown") == 0;
    if (originalself->class->definitionLine
            && !unknownmodule)
        sprintf(objDesc, " in object at %s:%i",
                originalself->class->definitionModule,
                originalself->class->definitionLine);
    else if (!unknownmodule)
        sprintf(objDesc, " in %s module",
                originalself->class->definitionModule);
    else
        objDesc[0] = 0;
    if (m)
        sprintf(methDesc, "at %s:%i", m->definitionModule,
                m->definitionLine);
    else
        strcpy(methDesc, "nowhere");
    sprintf(callstack[calldepth], "%s%s.%s (defined %s%s) at %s:%i", (istail ? "tailcall " : ""),
            self->class->name, name, methDesc,
            objDesc,
            modulename,
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
    int searchdepth = (callflags >> 24) & 0xff;
    if (m != NULL && m->flags & MFLAG_CONFIDENTIAL
            && !(callflags & CFLAG_SELF)) {
        gracedie("requested confidential method \"%s\" (defined at %s:%i) from outside.", name, m->definitionModule, m->definitionLine);
    }
    if (m != NULL && m->type != NULL && partc && argcv && argv) {
        if (!checkmethodcall(m, partc, argcv, argv))
            die("Type error.");
    }
    Object prevSourceObject = sourceObject;
    sourceObject = realself;
    Object ret = NULL;
    if (m != NULL && (m->flags & MFLAG_REALSELFALSO)) {
        calldepth--;
        Object(*func)(Object, Object, int, int*, Object*, int);
        func = (Object(*)(Object, Object, int, int*, Object*, int))m->func;
        ret = func(self, realself, partc, argcv, argv, callflags);
    } else if (m != NULL) {
        ret = m->func(self, partc, argcv, argv, callflags);
        calldepth--;
        if (ret != NULL && (ret->flags & FLAG_DEAD)) {
            debug("returned freed object %p from %s.%s",
                    ret, self->class->name, name);
        }
    }
    sourceObject = prevSourceObject;
    if (ret != NULL) {
        gc_frame_end(frame);
        debug(" returned %p (%s) from %s on %p", ret, ret->class->name, name, self);
        if (ret->class == TailCall) {
            frame = gc_frame_new();
            gc_frame_newslot(ret);
            struct TailCallObject *t = (struct TailCallObject*)ret;
            self = t->self;
            name = t->name;
            partc = t->nparts;
            argcv = t->argcv;
            argv = t->argv;
            superdepth = t->superdepth;
            debug("tailcall to %s on %p (%s)", name, self, self->class->name);
            istail = 1;
            tailcount++;
            goto start;
        }
        return ret;
    }
    if (m) {
        fprintf(stderr, "Method returned null: %s.%s on line %i. This is a bug in the compiler runtime or an external native module. Terminating the program.\n",
                self->class->name, name, linenumber);
        exit(1);
    }
    if (error_jump_set) {
        char buf[1024];
        sprintf(buf, "Method lookup error: no %s in %s.", name,
                self->class->name);
        currentException = alloc_ExceptionPacket(alloc_String(buf),
                RuntimeErrorObject);
        longjmp(error_jump, 1);
    }
    fprintf(stderr, "Available methods are:\n");
    int len = 0;
    for (i=0; i<c->nummethods; i++) {
        len += 2 + strlen(c->methods[i].name);
        if (len > 80) {
            fprintf(stderr, "\n");
            len = strlen(c->methods[i].name);
        }
        fprintf(stderr, "  %s", c->methods[i].name);
    }
    fprintf(stderr, "\n");
    die("Method lookup error: no %s in %s.",
            name, self->class->name);
    exit(1);
}
Object callmethod3(Object self, const char *name,
        int partc, int *argcv, Object *argv, int superdepth) {
    return callmethod4(self, name, partc, argcv, argv, superdepth, 0);
}
Object callmethod2(Object self, const char *name,
        int partc, int *argcv, Object *argv) {
    return callmethod3(self, name, partc, argcv, argv, 0);
}
Object callmethodflags(Object receiver, const char *name,
        int nparts, int *nparamsv, Object *args, int callflags) {
    int i, j;
    int start_calldepth = calldepth;
    int start_exceptionHandlerDepth = exceptionHandlerDepth;
    if (receiver->flags & FLAG_DEAD) {
        debug("called method on freed object %p: %s.%s",
                receiver, receiver->class->name, name);
    }
    if (strcmp(name, "_apply") != 0 && strcmp(name, "apply") != 0
            && strcmp(name, "applyIndirectly") != 0) {
        if (setjmp(return_stack[calldepth])) {
            Object rv = return_value;
            return_value = NULL;
            for (i=calldepth; i>start_calldepth; i--)
                if (finally_stack[i]) {
                    callmethod(finally_stack[i], "apply", 0, NULL, NULL);
                    finally_stack[i] = NULL;
                    memcpy(error_jump, exceptionHandler_stack[i],
                            sizeof(jmp_buf));
                }
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
    int n = 0;
    for (i = 0; i < nparts; i++) {
        for (j = 0; j < nparamsv[i]; j++) {
            if (args[n] == undefined)
                die("undefined value used as argument to %s", name);
            n++;
        }
    }
    return callmethod4(receiver, name, nparts, nparamsv, (Object*)args,
            0, callflags);
}
Object callmethod(Object receiver, const char *name,
        int nparts, int *nparamsv, Object *args) {
    return callmethodflags(receiver, name, nparts, nparamsv, args, 0);
}
Object callmethodself(Object receiver, const char *name,
        int nparts, int *nparamsv, Object *args) {
    return callmethodflags(receiver, name, nparts, nparamsv, args, CFLAG_SELF);
}
void enable_callgraph(char *filename) {
    callgraph = fopen(filename, "w");
    fprintf(callgraph, "digraph CallGraph {\n");
    track_callgraph = 1;
}
Object MatchFailed;
Object alloc_MatchFailed() {
    if (!MatchFailed) {
        MatchFailed = alloc_userobj(0, 0);
        gc_root(MatchFailed);
    }
    return MatchFailed;
}
Object matchCase(Object matchee, Object *cases, int ncases, Object elsecase) {
    int i;
    int partcv[] = {1};
    for (i=0; i<ncases; i++) {
        Object ret = callmethod(cases[i], "match", 1, partcv, &matchee);
        if (istrue(ret))
            return callmethod(ret, "result", 0, NULL, NULL);
    }
    if (elsecase)
        return callmethod(elsecase, "apply", 1, partcv, &matchee);
    return alloc_FailedMatch(matchee, NULL);
}
Object catchCase(Object block, Object *caseList, int ncases,
        Object finally) {
    int old_error_jump_set = error_jump_set;
    error_jump_set = 1;
    int start_calldepth = calldepth;
    if (!finally) {
        finally = alloc_Block(NULL, NULL, "implicit finally", -1);
        gc_frame_newslot(finally);
        block_savedest(finally);
    }
    finally_stack[calldepth] = finally;
    int start_exceptionHandlerDepth = exceptionHandlerDepth++;
    jmp_buf old_error_jump;
    if (error_jump)
        memcpy(old_error_jump, error_jump, sizeof(jmp_buf));
    if (setjmp(error_jump)) {
        memcpy(error_jump, old_error_jump, sizeof(jmp_buf));
        error_jump_set = old_error_jump_set;
        calldepth = start_calldepth;
        int partcv[1] = {1};
        for (int i=0; i<ncases; i++) {
            Object val = caseList[i];
            Object ret = callmethod(val, "match", 1, partcv,
                    &currentException);
            if (istrue(ret)) {
                callmethod(finally, "apply", 0, NULL, NULL);
                finally_stack[start_calldepth] = NULL;
                exceptionHandlerDepth--;
                return alloc_done();
            }
        }
        callmethod(finally, "apply", 0, NULL, NULL);
        finally_stack[start_calldepth] = NULL;
        exceptionHandlerDepth--;
        // try next level of stack
        if (exceptionHandlerDepth > 0)
            longjmp(old_error_jump, 1);
        // Exception propagated to top
        printExceptionBacktrace(currentException);
        exit(1);
    }
    memcpy(exceptionHandler_stack[calldepth], error_jump,
            sizeof(jmp_buf));
    Object rv = callmethod(block, "apply", 0, NULL, NULL);
    error_jump_set = old_error_jump_set;
    memcpy(error_jump, old_error_jump, sizeof(jmp_buf));
    exceptionHandlerDepth = start_exceptionHandlerDepth;
    callmethod(finally, "apply", 0, NULL, NULL);
    finally_stack[start_calldepth] = NULL;
    return rv;
}
Object gracelib_print(Object receiver, int nparams,
        Object *args) {
    if (nparams == 0) {
        puts("");
    } else {
        Object o = callmethod(args[0], "asString", 0, NULL, NULL);
        char *s = grcstring(o);
        puts(s);
    }
    return done;
}

ClassData StackFrame;
void StackFrame__mark(struct StackFrameObject *o) {
    int i;
    for (i=0; i<o->size; i++)
        gc_mark(o->slots[i]);
    if (o->parent != NULL)
        gc_mark((Object)o->parent);
}
void StackFrame__release(struct StackFrameObject *o) {
    glfree(o->names);
}
struct StackFrameObject *alloc_StackFrame(int size,
        struct StackFrameObject *parent) {
    int i;
    if (StackFrame == NULL) {
        StackFrame = alloc_class3("StackFrame", 0, (void*)&StackFrame__mark,
                (void*)&StackFrame__release);
    }
    Object o = alloc_obj(sizeof(struct StackFrameObject) + sizeof(Object)*size
            - sizeof(struct Object), StackFrame);
    struct StackFrameObject *s = (struct StackFrameObject *)o;
    s->size = size;
    s->parent = parent;
    s->names = glmalloc(sizeof(char *) * (size + 1));
    Object u = alloc_Undefined();
    for (i=0; i<size; i++) {
        s->slots[i] = u;
    }
    return s;
}


ClassData ClosureEnv;
void ClosureEnv__mark(struct ClosureEnvObject *o) {
    int i;
    if (o->frame != NULL)
        gc_mark(o->frame);
}
void setclosureframe(Object c, struct StackFrameObject *p) {
    ((struct ClosureEnvObject*)c)->frame = (Object)p;
}
struct StackFrameObject *getclosureframe(Object c) {
    return (struct StackFrameObject *)(((struct ClosureEnvObject*)c)->frame);
}
Object createclosure(int size, char *name) {
    if (ClosureEnv == NULL) {
        ClosureEnv = alloc_class2("ClosureEnv", 0, (void*)&ClosureEnv__mark);
    }
    Object o = alloc_obj(sizeof(struct ClosureEnvObject)
            + sizeof(Object *) * size, ClosureEnv);
    struct ClosureEnvObject *oo = (struct ClosureEnvObject *)o;
    oo->size = size;
    oo->frame = NULL;
    int i;
    for (i=0; i<size; i++)
        oo->data[i] = NULL;
    strcpy(oo->name, name);
    return o;
}
Object** createclosure2(int size) {
    Object** cvb = glmalloc(sizeof(Object *)
            * (size + 1));
    int i;
    for (i=0; i<=size; i++)
        cvb[i] = NULL;
    return cvb;
}
void addtoclosure(Object o, Object *op) {
    struct ClosureEnvObject *closure = (struct ClosureEnvObject *)o;
    int i;
    for (i=0; closure->data[i] != NULL; i++) {}
    closure->data[i] = op;
}
Object *getfromclosure(Object o, int idx) {
    struct ClosureEnvObject *closure = (struct ClosureEnvObject *)o;
    if (o->flags & FLAG_DEAD) {
        debug("getting from freed closure %p(%s)", closure, closure->name);
    }
    return closure->data[idx];
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
        return callmethod(self, "length", 0, NULL, NULL);
    }
}
Object *alloc_var() {
    return glmalloc(sizeof(Object));
}
Method* add_Method(ClassData c, const char *name,
        Object(*func)(Object, int, int*, Object*, int)) {
    int i;
    for (i=0; c->methods[i].name != NULL; i++) {
        if (strcmp(name, c->methods[i].name) == 0) {
            Object(*tmpf)(Object, int, int*, Object*, int) = func;
            func = c->methods[i].func;
            c->methods[i].func = tmpf;
            c->methods[i].flags = MFLAG_REALSELFONLY;
            return &c->methods[i];
        }
    }
    c->methods[i].flags = MFLAG_REALSELFONLY;
    c->methods[i].name = name;
    c->methods[i].func = func;
    c->nummethods++;
    return &c->methods[i];
}
struct MethodType *alloc_MethodType(int nparts, int *argcv) {
    struct MethodType *t = glmalloc(sizeof(struct MethodType));
    int size = 0;
    int i;
    int *tmp = glmalloc(sizeof(int) * nparts);
    for (i = 0; i < nparts; i++) {
        size += argcv[i];
        tmp[i] = argcv[i];
    }
    t->nparts = nparts;
    t->argcv = tmp;
    t->types = glmalloc(sizeof(ClassData) * size);
    t->names = glmalloc(sizeof(char *) * size);
    return t;
}
Object alloc_obj(int additional_size, ClassData class) {
    Object o = glmalloc(sizeof(struct Object) + additional_size);
    o->class = class;
    o->flags = 3;
    objectcount++;
    if (gc_enabled) {
        if (objects_living_next >= objects_living_size)
            expand_living();
        if (objectcount % gc_period == 0)
            rungc();
        objects_living[objects_living_next++] = o;
        if (objects_living_next > objects_living_max)
            objects_living_max = objects_living_next;
    }
    return o;
}
Object alloc_newobj(int additional_size, ClassData class) {
    return alloc_obj(additional_size, class);
}
Object Type_match(Object self, int nparts, int *argcv,
        Object *argv, int flags) {
    Object obj = argv[0];
    if (obj->class == (ClassData)self)
        return alloc_SuccessfulMatch(obj, NULL);
    struct TypeObject *t = (struct TypeObject *)self;
    int i;
    for (i=0; i<t->nummethods; i++) {
        Method m = t->methods[i];
        if (!findmethodsimple(obj, m.name))
            return alloc_FailedMatch(obj, NULL);
    }
    return alloc_SuccessfulMatch(obj, NULL);
}
Object Type_asString(Object self, int nparts, int *argcv,
        Object *argv, int flags) {
    struct TypeObject *t = (struct TypeObject *)self;
    char buf[strlen(t->name) + 7];
    strcpy(buf, "Type<");
    strcat(buf, t->name);
    strcat(buf, ">");
    return alloc_String(buf);
}
Object alloc_Type(const char *name, int nummethods) {
    if (Type == NULL) {
        Type = alloc_class("Type", 6);
        add_Method(Type, "==", &Object_Equals);
        add_Method(Type, "!=", &Object_NotEquals);
        add_Method(Type, "asString", &Type_asString);
        add_Method(Type, "match", &Type_match);
        add_Method(Type, "&", &literal_and);
        add_Method(Type, "|", &literal_or);
    }
    Object o = alloc_obj(sizeof(struct TypeObject)
            - sizeof(int32_t) - sizeof(ClassData), Type);
    struct TypeObject *t = (struct TypeObject *)o;
    t->methods = glmalloc(sizeof(Method) * nummethods);
    t->name = glmalloc(strlen(name) + 1);
    strcpy(t->name, name);
    return (Object)t;
}
void ClassData__release(struct ClassData *c) {
    for (int i=0; i<c->nummethods; i++)
        if (c->methods[i].type) {
            glfree(c->methods[i].type->names);
            glfree(c->methods[i].type->argcv);
            glfree(c->methods[i].type);
        }
    glfree(c->methods);
}
Object Class_asString(Object self, int nparts, int *argcv,
        Object *argv, int flags) {
    struct TypeObject *t = (struct TypeObject *)self;
    char buf[strlen(t->name) + 8];
    strcpy(buf, "Class<");
    strcat(buf, t->name);
    strcat(buf, ">");
    return alloc_String(buf);
}
static inline void initialise_Class() {
    if (Class == NULL) {
        Class = glmalloc(sizeof(struct ClassData));
        Class->flags = 3;
        Class->class = Class;
        Class->name = "ClassOf<Class>";
        Class->methods = glmalloc(sizeof(Method) * 4);
        Class->nummethods = 3;
        Class->mark = NULL;
        Class->release = (void *)&ClassData__release;
        add_Method(Class, "match", &Type_match);
        add_Method(Class, "&", &literal_and);
        add_Method(Class, "|", &literal_or);
        add_Method(Class, "asString", &Class_asString);
    }
}
ClassData alloc_class(const char *name, int nummethods) {
    initialise_Class();
    ClassData c = glmalloc(sizeof(struct ClassData));
    c->name = glmalloc(strlen(name) + 1);
    strcpy(c->name, name);
    c->methods = glmalloc(sizeof(Method) * nummethods);
    c->flags = 3;
    c->class = Class;
    c->nummethods = 0;
    c->mark = NULL;
    c->release = NULL;
    c->definitionModule = "unknown";
    c->definitionLine = 0;
    int i;
    for (i=0; i<nummethods; i++) {
        c->methods[i].name = NULL;
        c->methods[i].flags = 0;
        c->methods[i].pos = 0;
        c->methods[i].definitionModule = "unknown";
    }
    return c;
}
ClassData alloc_class2(const char *name, int nummethods, void (*mark)(void*)) {
    initialise_Class();
    ClassData c = glmalloc(sizeof(struct ClassData));
    c->name = glmalloc(strlen(name) + 1);
    strcpy(c->name, name);
    c->methods = glmalloc(sizeof(Method) * nummethods);
    c->flags = 3;
    c->class = Class;
    c->nummethods = 0;
    c->mark = mark;
    c->release = NULL;
    c->definitionModule = "unknown";
    c->definitionLine = 0;
    int i;
    for (i=0; i<nummethods; i++) {
        c->methods[i].name = NULL;
        c->methods[i].flags = 0;
        c->methods[i].pos = 0;
        c->methods[i].definitionModule = "unknown";
    }
    return c;
}
ClassData alloc_class3(const char *name, int nummethods, void (*mark)(void*),
        void (*release)(void*)) {
    ClassData c = alloc_class(name, nummethods);
    c->flags = 3;
    c->class = NULL;
    c->mark = mark;
    c->release = release;
    return c;
}
Object Integer32_Equals(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    int ival = *(int*)self->data;
    int oval = integerfromAny(args[0]);
    return (Object)alloc_Boolean(ival == oval);
}
Object Integer32_NotEquals(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    int ival = *(int*)self->data;
    int oval = integerfromAny(args[0]);
    return (Object)alloc_Boolean(ival /= oval);
}
Object Integer32_Plus(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    int ival = *(int*)self->data;
    int oval;
    if (self->class == args[0]->class) {
        oval = *(int*)args[0]->data;
        return alloc_Integer32(ival + oval);
    }
    oval = integerfromAny(args[0]);
    return (Object)alloc_Float64(ival + oval);
}
Object Integer32_Times(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    int ival = *(int*)self->data;
    int oval;
    if (self->class == args[0]->class) {
        oval = *(int*)args[0]->data;
        return alloc_Integer32(ival * oval);
    }
    oval = integerfromAny(args[0]);
    return (Object)alloc_Float64(ival * oval);
}
Object Integer32_Minus(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    int ival = *(int*)self->data;
    int oval;
    if (self->class == args[0]->class) {
        oval = *(int*)args[0]->data;
        return alloc_Integer32(ival - oval);
    }
    oval = integerfromAny(args[0]);
    return (Object)alloc_Float64(ival - oval);
}
Object Integer32_DividedBy(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    int ival = *(int*)self->data;
    int oval;
    if (self->class == args[0]->class) {
        oval = *(int*)args[0]->data;
        return alloc_Integer32(ival / oval);
    }
    oval = integerfromAny(args[0]);
    return (Object)alloc_Float64(ival / oval);
}
Object Integer32_LShift(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    int ival = *(int*)self->data;
    int oval = integerfromAny(args[0]);
    return alloc_Integer32(ival << oval);
}
Object Integer32_RShift(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    int ival = *(int*)self->data;
    int oval = integerfromAny(args[0]);
    return alloc_Integer32(ival >> oval);
}
Object Integer32_And(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    int ival = *(int*)self->data;
    int oval = integerfromAny(args[0]);
    return alloc_Integer32(ival & oval);
}
Object Integer32_Or(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    int ival = *(int*)self->data;
    int oval = integerfromAny(args[0]);
    return alloc_Integer32(ival | oval);
}
Object Integer32_LessThan(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    int ival = *(int*)self->data;
    int oval = integerfromAny(args[0]);
    return (Object)alloc_Boolean(ival < oval);
}
Object Integer32_GreaterThan(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    int ival = *(int*)self->data;
    int oval = integerfromAny(args[0]);
    return (Object)alloc_Boolean(ival > oval);
}
Object Integer32_asString(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    int ival = *(int*)self->data;
    char buf[12];
    sprintf(buf, "%i", ival);
    return (Object)alloc_String(buf);
}
Object Integer32_isInteger32(Object self, int nparts, int *argcv,
        Object *args, int flags) {
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
Object Block_apply(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    struct BlockObject *bo = (struct BlockObject*)self;
    memcpy(return_stack[calldepth - 1], bo->retpoint,
            sizeof(return_stack[calldepth - 1]));
    if (argcv != NULL)
        return callmethod(self, "_apply", 1, argcv, args);
    else
        return callmethod(self, "_apply", 0, argcv, args);
}
Object Block_applyIndirectly(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    Object tuple = args[0];
    Object size = callmethod(tuple, "size", 0, NULL, NULL);
    int sz = integerfromAny(size);
    int i;
    int partcv[] = {1};
    Object rargs[sz];
    for (i=0; i<sz; i++) {
        Object flt = alloc_Float64(i + 1);
        rargs[i] = callmethod(tuple, "[]", 1, partcv, &flt);
    }
    partcv[0] = sz;
    return callmethod(self, "_apply", 1, partcv, rargs);
}
Object Block_match(Object self, int nparts, int *argcv, Object *args, int flags) {
    struct BlockObject *bo = (struct BlockObject*)self;
    if (!bo->data[1]) {
        if (nparts != 1 || argcv == NULL || argcv[0] != 1)
            die("block is not a matching block");
        Object r = callmethod(self, "apply", nparts, argcv, args);
        return alloc_SuccessfulMatch(r, NULL);
    }
    Object pattern = bo->data[1];
    int partcv[] = {1};
    Object match = callmethod(pattern, "match", 1, partcv, args);
    if (!istrue(match))
        return match;
    Object bindings = callmethod(match, "bindings", 0, NULL, NULL);
    Object rv = callmethod(self, "applyIndirectly", 1, partcv, &bindings);
    return alloc_SuccessfulMatch(rv, NULL);
}
Object Block_pattern(Object self, int argc, int *argcv,
        Object *argv, int flags) {
    struct BlockObject *o = (struct BlockObject *)self;
    if (!o->data[1])
        return done;
    return o->data[1];
}
void Block__mark(struct BlockObject *o) {
    gc_mark(o->data[0]);
    gc_mark(o->data[1]);
}
void Block__release(struct BlockObject *o) {
    ClassData__release(o->class);
    glfree(o->class);
    glfree(o->data);
}
Object alloc_Block(Object self, Object(*body)(Object, int, Object*, int),
        const char *modname, int line) {
    char buf[strlen(modname) + 15];
    sprintf(buf, "Block[%s:%i]", modname, line);
    ClassData c = alloc_class3(buf, 10, (void*)&Block__mark,
            (void*)&Block__release);
    if (!Block)
        Block = c;
    add_Method(c, "apply", &Block_apply);
    add_Method(c, "applyIndirectly", &Block_applyIndirectly);
    add_Method(c, "match", &Block_match);
    add_Method(c, "asString", &Object_asString);
    add_Method(c, "asDebugString", &Object_asString);
    add_Method(c, "==", &Object_Equals);
    add_Method(c, "!=", &Object_NotEquals);
    add_Method(c, "pattern", &Block_pattern);
    if (self == NULL && line == -1)
        add_Method(c, "_apply", &identity_function);
    struct BlockObject *o = (struct BlockObject*)(
            alloc_obj(sizeof(struct BlockObject) - sizeof(struct Object), c));
    o->data = glmalloc(sizeof(Object) * 3);
    o->super = NULL;
    o->ndata = 3;
    o->flags |= FLAG_BLOCK;
    return (Object)o;
}
void set_type(Object o, int16_t t) {
    int32_t flags = o->flags;
    flags &= 0xffff;
    flags |= (t << 16);
    o->flags = flags;
}
Object setsuperobj(Object sub, Object super) {
    struct UserObject *uo = (struct UserObject *)sub;
    if (super->flags & FLAG_USEROBJ)
        return gracebecome(sub, super);
    uo->super = super;
    return sub;
}
void UserObj__mark(struct UserObject *o) {
    int i;
    for (i=0; i<o->ndata; i++) {
        if (o->data[i])
            gc_mark(o->data[i]);
    }
    if (o->super)
        gc_mark(o->super);
}
Object UserObj_Equals(Object self, int nparts, int *argcv,
        Object *args, int flags) {
    Object other = args[0];
    if (self == other)
        return alloc_Boolean(1);
    if (self->flags & FLAG_MUTABLE)
        return alloc_Boolean(0);
    if (other->flags & FLAG_MUTABLE)
        return alloc_Boolean(0);
    if (!(other->flags & FLAG_USEROBJ))
        return alloc_Boolean(0);
    ClassData myclass = self->class;
    ClassData otclass = other->class;
    int i, j;
    for (i=0; i<myclass->nummethods; i++) {
        struct Method *m = &myclass->methods[i];
        if (strcmp(m->name, "outer") == 0) {
        } else if (m->flags & MFLAG_DEF) {
            Method *om = findmethodsimple(other, m->name);
            if (!om || !(om->flags & MFLAG_DEF))
                return alloc_Boolean(0);
            Object myval = callmethodself(self, m->name, 0, NULL, NULL);
            Object otval = callmethodself(other, m->name, 0, NULL, NULL);
            int partcv[] = {1};
            if (!istrue(callmethod(myval, "==", 1, partcv, &otval)))
                return alloc_Boolean(0);
        } else {
            Object realself = other;
            Object tmpself = other;
            int cflags = 0;
            Method *om = findmethod(&tmpself, &realself, m->name, 0, &cflags);
            if (!om)
                return alloc_Boolean(0);
            if (m->func != om->func)
                return alloc_Boolean(0);
            struct ClosureEnvObject *myclosure = (struct ClosureEnvObject *)(((struct UserObject*)self)->data[m->pos]);
            struct ClosureEnvObject *otclosure = (struct ClosureEnvObject *)(((struct UserObject*)realself)->data[om->pos]);
            if (myclosure->frame != otclosure->frame)
                return alloc_Boolean(0);
        }
    }
    for (i=0; i<otclass->nummethods; i++) {
        struct Method *m = &otclass->methods[i];
        Method *mm = findmethodsimple(self, m->name);
        if (!mm)
            return alloc_Boolean(0);
    }
    return alloc_Boolean(1);
}
void UserObj__release(struct UserObject *o) {
    int i;
    glfree(o->data);
}
Object GraceDefaultObject;
Object alloc_userobj2(int numMethods, int numFields, ClassData c) {
    if (GraceDefaultObject == NULL) {
        ClassData dc = alloc_class2("DefaultObject", 6,
                (void*)&UserObj__mark);
        GraceDefaultObject = alloc_obj(sizeof(struct UserObject) -
                sizeof(struct Object), dc);
        GraceDefaultObject->flags |= FLAG_USEROBJ;
        struct UserObject *duo = (struct UserObject *)GraceDefaultObject;
        duo->super = NULL;
        duo->data = glmalloc(sizeof(Object));
        duo->data[0] = NULL;
        addmethod2(GraceDefaultObject, "asString", &Object_asString);
        addmethod2(GraceDefaultObject, "++", &Object_concat);
        addmethod2(GraceDefaultObject, "==", &UserObj_Equals);
        addmethod2(GraceDefaultObject, "!=", &Object_NotEquals);
        addmethod2(GraceDefaultObject, "asDebugString", &Object_asString);
    }
    if (c == NULL) {
        c = alloc_class3("Object", numMethods + 1,
                (void*)&UserObj__mark, (void*)&UserObj__release);
    }
    numFields++;
    Object o = alloc_obj(sizeof(struct UserObject) - sizeof(struct Object), c);
    o->flags |= FLAG_USEROBJ;
    struct UserObject *uo = (struct UserObject *)o;
    int i;
    uo->data = glmalloc(sizeof(Object) * numFields);
    for (i=0; i<numFields; i++)
        uo->data[i] = NULL;
    uo->super = GraceDefaultObject;
    uo->ndata = numFields;
    return o;
}
Object alloc_userobj(int numMethods, int numFields) {
    return alloc_userobj2(numMethods, numFields, NULL);
}
Object alloc_obj2(int numMethods, int numFields) {
    return alloc_userobj2(numMethods, numFields, NULL);
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
Object getdatum(Object o, int index, int depth) {
    struct UserObject *uo = (struct UserObject*)o;
    while (depth-- > 0)
        uo = (struct UserObject*)uo->super;
    return uo->data[index];
}
Object getdatum2(Object o, int index) {
    struct UserObject *uo = (struct UserObject*)o;
    return uo->data[index];
}
Object process_varargs(Object *args, int fixed, int nargs) {
    int i = fixed;
    Object lst = alloc_BuiltinList();
    int partcv[] = {1};
    for (; i<nargs; i++) {
        callmethod(lst, "push", 1, partcv, &args[i]);
    }
    return lst;
}
char * compilerModulePath;
void setCompilerModulePath(char *s) {
    compilerModulePath = s;
}
int find_gso(const char *name, char *buf) {
    // Try:
    // 1) dirname(argv[0])
    // 2) dirname(argv[0])/../lib/minigrace
    // 3) GRACE_MODULE_PATH
    // 4) Path of the compiler used to build
    // 5) Path of the compiler used to build/../lib/minigrace
    // 6) .


    char *sep = execPathHelper();
    char *gmp = getenv("GRACE_MODULE_PATH");
    char *home = getenv("HOME");
    char buf1[PATH_MAX];
    struct stat st;

    strcpy(buf1, sep);

    //an array of strings ot hold the locations to look
    char *locations[] = {".", sep, "/usr/lib/grace/modules", NULL, NULL, strcat(buf1, "/../lib/minigrace/modules")}; 

    if(home != NULL){
        char buf2[PATH_MAX];
        strcpy(buf2, home); 
        locations[3] = strcat(buf2, "/.local/lib/grace/modules");
    }
    if(gmp != NULL){
        char buf3[PATH_MAX];
        strcpy(buf3, gmp);
        locations[4] = strcat(buf3, "/");
    }
    
    int i = 0;

    for(i = 0; i < 6; i++){
        if(locations[i] == NULL){
            continue;
        }
        strcpy(buf, locations[i]);
        strcat(buf, "/");
        strcat(buf, name);
        strcat(buf, ".gso");

        if(stat(buf, &st) == 0){
            return 1;
        }
    }

    return 0;
}
Object dlmodule(const char *name) {
    int blen = PATH_MAX;
    char buf[blen];
    if (!find_gso(name, buf)) {
        gracedie("unable to find dynamic module '%s'", name);
    }
    void *handle = dlopen(buf, RTLD_LAZY | RTLD_GLOBAL);
    if (!handle)
        gracedie("failed to load dynamic module '%s': %s", buf, dlerror());
    strcpy(buf, "module_");
    int new_size = 0;
    char c;
    for (int i = 0; (c = name[i]) != '\0'; i++) {
        new_size += c == '/' ? 4 : 1;
    }
    char escaped[new_size + 1];
    for (int i = 0, j = 0; (c = name[i]) != '\0'; i++) {
        if (c == '/') {
            escaped[j++] = '_';
            escaped[j++] = '4';
            escaped[j++] = '7';
            escaped[j++] = '_';
        } else {
            escaped[j++] = c;
        }
    }
    escaped[new_size] = '\0';
    strcat(buf, escaped);
    strcat(buf, "_init");
    Object (*init)() = dlsym(handle, buf);
    if (!init)
        gracedie("failed to find initialiser in dynamic module '%s'", buf);
    Object mod = init();
    gc_root(mod);
    return mod;
}
void gracelib_stats() {
    grace_run_shutdown_functions();
    if (track_callgraph)
        fprintf(callgraph, "}\n");
    if (getenv("GRACE_STATS") == NULL)
        return;
    fprintf(stderr, "Total objects allocated: %i\n", objectcount);
    fprintf(stderr, "Total objects freed:     %i\n", freedcount);
    fprintf(stderr, "Total strings allocated: %i\n", Strings_allocated);
    fprintf(stderr, "Total method calls made: %i\n", callcount);
    fprintf(stderr, "Total tail calls made:   %i\n", tailcount);
    fprintf(stderr, "Total heap allocated: %zuB\n", heapsize);
    fprintf(stderr, "                      %zuKiB\n", heapsize/1024);
    fprintf(stderr, "                      %zuMiB\n", heapsize/1024/1024);
    fprintf(stderr, "                      %zuGiB\n", heapsize/1024/1024/1024);
    fprintf(stderr, "Peak heap allocated:  %zuB\n", heapmax);
    fprintf(stderr, "                      %zuKiB\n", heapmax/1024);
    fprintf(stderr, "                      %zuMiB\n", heapmax/1024/1024);
    fprintf(stderr, "                      %zuGiB\n", heapmax/1024/1024/1024);
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
    frame_stack = calloc(STACK_SIZE + 1, sizeof(struct StackFrameObject *));
    frame_stack++;
    closure_stack = calloc(STACK_SIZE + 1, sizeof(struct ClosureEnvObject *));
    closure_stack++;
    exceptionHandler_stack = calloc(STACK_SIZE + 1, sizeof(jmp_buf));
    exceptionHandler_stack++;
    finally_stack = calloc(STACK_SIZE + 1, sizeof(Object));
    finally_stack++;
    debug_enabled = (getenv("GRACE_DEBUG_LOG") != NULL);
    if (debug_enabled) {
        debugfp = fopen("debug", "w");
        setbuf(debugfp, NULL);
    }
    objects_living_size = 2048;
    objects_living = calloc(sizeof(Object), objects_living_size);
    char *periodstr = getenv("GRACE_GC_PERIOD");
    if (periodstr)
        gc_period = atoi(periodstr);
    else
        gc_period = 100000;
    gc_dofree = (getenv("GRACE_GC_DISABLE") == NULL);
    gc_dowarn = (getenv("GRACE_GC_WARN") != NULL);
    gc_enabled = gc_dofree | gc_dowarn;
    if (gc_dowarn)
        gc_dofree = 0;
    srand(time(NULL));
    hash_init = rand();
    alloc_Float64(1);
    alloc_Boolean(0);
    Dynamic = alloc_Type("Dynamic", 0);
    gc_root(Dynamic);
    List = alloc_Type("List", 14);
    gc_root(List);
    add_Method((ClassData)List, "==", NULL);
    add_Method((ClassData)List, "!=", NULL);
    add_Method((ClassData)List, "push", NULL);
    add_Method((ClassData)List, "pop", NULL);
    add_Method((ClassData)List, "at", NULL);
    add_Method((ClassData)List, "at()put", NULL);
    add_Method((ClassData)List, "[]", NULL);
    add_Method((ClassData)List, "[]:=", NULL);
    add_Method((ClassData)List, "size", NULL);
    add_Method((ClassData)List, "iterator", NULL);
    add_Method((ClassData)List, "++", NULL);
    add_Method((ClassData)List, "asString", NULL);
    add_Method((ClassData)List, "asDebugString", NULL);
    ExceptionObject = alloc_Exception("Exception", NULL);
    gc_root(ExceptionObject);
    ErrorObject = alloc_Exception("Error", ExceptionObject);
    gc_root(ErrorObject);
    RuntimeErrorObject = alloc_Exception("RuntimeError", ErrorObject);
    gc_root(RuntimeErrorObject);
}
void setline(int l) {
    linenumber = l;
}
void setmodule(const char *mod) {
    modulename = mod;
}
void setsource(char *msl[]) {
    moduleSourceLines = msl;
}

int freed_since_expansion;
int expand_living() {
    int freed = rungc();
    int mul = 2;
    if (freed_since_expansion * 3 > objects_living_size)
        mul = 1;
    int i;
    Object *before = objects_living;
    objects_living = calloc(sizeof(Object), objects_living_size * mul);
    int j = 0;
    for (i=0; i<objects_living_size; i++) {
        if (before[i] != NULL)
            objects_living[j++] = before[i];
    }
    if (mul == 1) {
        freed_since_expansion -= (objects_living_max - j);
    } else {
        freed_since_expansion = 0;
    }
    objects_living_max = j;
    objects_living_next = j;
    objects_living_size *= mul;
    debug("expanded next %i size %i mul %i freed %i fse %i", j, objects_living_size, mul, freed, freed_since_expansion);
    free(before);
    return 0;
}
void gc_mark(Object o) {
    if (o == NULL)
        return;
    if (o->flags & FLAG_REACHABLE)
        return;
    ClassData c = o->class;
    o->flags |= FLAG_REACHABLE;
    if (c && c->mark)
        c->mark(o);
}
void gc_root(Object o) {
    struct GC_Root *r = malloc(sizeof(struct GC_Root));
    r->object = o;
    r->next = GC_roots;
    GC_roots = r;
}
int gc_paused;
int gc_wouldHaveRun;
void gc_pause() {
    gc_paused++;
}
int gc_unpause() {
    gc_paused--;
    return gc_wouldHaveRun;
}
Object *gc_stack;
int gc_framepos = 0;
int gc_stack_size;
int gc_frame_new() {
    if (gc_stack == NULL) {
        gc_stack_size = STACK_SIZE * 1024;
        gc_stack = calloc(sizeof(Object), gc_stack_size);
    }
    return gc_framepos;
}
void gc_frame_end(int pos) {
    gc_framepos = pos;
}
int gc_frame_newslot(Object o) {
    if (gc_framepos == gc_stack_size) {
        die("gc shadow stack size exceeded\n");
    }
    gc_stack[gc_framepos] = o;
    return gc_framepos++;
}
void gc_frame_setslot(int slot, Object o) {
    gc_stack[slot] = o;
}
int rungc() {
    int i;
    if (gc_paused) {
        debug("skipping GC; paused %i times", gc_paused);
        gc_wouldHaveRun = 1;
        return 0;
    }
    gc_wouldHaveRun = 0;
    int32_t unreachable = 0xffffffff ^ FLAG_REACHABLE;
    for (i=0; i<objects_living_max; i++) {
        Object o = objects_living[i];
        if (o == NULL)
            continue;
        o->flags = o->flags & unreachable;
    }
    struct GC_Root *r = GC_roots;
    int freednow = 0;
    while (r != NULL) {
        gc_mark(r->object);
        r = r->next;
    }
    for (i=0; i<gc_framepos; i++)
        gc_mark(gc_stack[i]);
    int reached = 0;
    int unreached = 0;
    int freed = 0;
    int doinfo = (getenv("GRACE_GC_INFO") != NULL);
    for (i=0; i<objects_living_max; i++) {
        Object o = objects_living[i];
        if (o == NULL)
            continue;
        if (o->flags & FLAG_REACHABLE) {
            reached++;
        } else {
            if (gc_enabled) {
                o->flags |= FLAG_DEAD;
                debug("reaping %p (%s)", o, o->class->name);
                if (gc_dofree) {
                    if (o->class->release != NULL)
                        o->class->release(o);
                    glfree(o);
                    objects_living[i] = NULL;
                    freednow++;
                }
                freed++;
            } else {
                o->flags &= 0xfffffffd;
                unreached++;
            }
        }
    }
    debug("reaped %i objects", freednow);
    freedcount += freednow;
    freed_since_expansion += freednow;
    if (doinfo) {
        fprintf(stderr, "Reachable:   %i\n", reached);
        fprintf(stderr, "Unreachable: %i\n", unreached);
        fprintf(stderr, "Freed:       %i\n", freed);
        fprintf(stderr, "Heap:        %zu\n", heapcurrent);
    }
    return freednow;
}
Object grace_userobj_outer(Object self, int nparts, int *argcv,
        Object *argv, int flags) {
    struct UserObject *o = (struct UserObject *)self;
    return o->data[0];
}
Object grace_while_do(Object self, int nparts, int *argcv,
        Object *argv, int flags) {
    if (nparts != 2 || argcv[0] != 1 || argcv[1] != 1)
        die("while-do requires exactly two arguments");
    if (argv[0]->class == Boolean || argv[0]->class == Number) {
        gracedie("Type error: expected Block for argument condition (1) of "
                "while()do (defined at NativePrelude:0), got %s",
                argv[0]->class->name);
    }
    while (istrue(callmethod(argv[0], "apply", 0, NULL, NULL))) {
        callmethod(argv[1], "apply", 0, NULL, NULL);
    }
    return done;
}
Object grace_for_do(Object self, int nparts, int *argcv,
        Object *argv, int flags) {
    if (nparts != 2 || argcv[0] != 1 || argcv[1] != 1)
        die("for-do requires exactly two arguments");
    Object iter = callmethod(argv[0], "iter", 0, NULL, NULL);
    gc_frame_newslot(iter);
    // Stack slot for argument object
    int slot = gc_frame_newslot(NULL);
    int partcv[] = {1};
    while (istrue(callmethod(iter, "havemore", 0, NULL, NULL))) {
        Object val = callmethod(iter, "next", 0, NULL, NULL);
        gc_frame_setslot(slot, val);
        callmethod(argv[1], "apply", 1, partcv, &val);
    }
    return done;
}
void grace_iterate(Object iterable, void(*callback)(Object, void *),
        void *userdata) {
    Object iter = callmethod(iterable, "iter", 0, NULL, NULL);
    gc_frame_newslot(iter);
    // Stack slot for argument object
    int slot = gc_frame_newslot(NULL);
    int partcv[] = {1};
    while (istrue(callmethod(iter, "havemore", 0, NULL, NULL))) {
        Object val = callmethod(iter, "next", 0, NULL, NULL);
        callback(val, userdata);
    }
}
#define HEXVALC(c) ((c >= '0' && c <= '9') ? c - '0' : ((c >= 'a' && c <= 'f') ? c - 'a' + 10 : -1))
Object grace_octets(Object self, int npart, int *argcv,
        Object *argv, int flags) {
    if (argcv[0] != 1)
        die("octets requires exactly one argument");
    char *str = grcstring(argv[0]);
    int slen = integerfromAny(callmethod(argv[0], "size", 0, NULL, NULL));
    if (slen % 2 != 0)
        die("octets requires an even-length string");
    int len = slen / 2;
    char buf[len];
    int i, j;
    for (i=0, j=0; i<len; i++, j=j+2) {
        int c1 = HEXVALC(str[j]);
        int c2 = HEXVALC(str[j+1]);
        if (c1 < 0 || c2 < 0)
            die("octets requires only hexadecimal digits [0-9a-f]");
        buf[i] = 16 * c1 + c2;
    }
    return alloc_Octets(buf, len);
}
Object prelude__methods(Object self, int argc, int *argcv,
        Object *argv, int flags) {
    ClassData c = self->class;
    gc_pause();
    Object l = alloc_BuiltinList();
    while (c != NULL) {
        int i;
        int partcv[] = {1};
        for (i=0; i<c->nummethods; i++) {
            Object str = alloc_String(c->methods[i].name);
            callmethod(l, "push", 1, partcv, &str);
        }
        c = NULL;
        if (self->flags & FLAG_USEROBJ) {
            self = ((struct UserObject *)self)->super;
            if (self != NULL)
                c = self->class;
        }
    }
    gc_unpause();
    return l;
}
Object minigrace_obj;
Object minigrace_warranty(Object self, int argc, int *argcv,
        Object *argv, int flags) {
    char *w =
    "Copyright (C) 2011-2013 Michael Homer and authors\n"
    "This program is free software: you can redistribute it and/or modify\n"
    "it under the terms of the GNU General Public License as published by\n"
    "the Free Software Foundation, either version 3 of the License, or\n"
    "(at your option) any later version.\n"
    "\n"
    "This program is distributed in the hope that it will be useful,\n"
    "but WITHOUT ANY WARRANTY; without even the implied warranty of\n"
    "MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n"
    "GNU General Public License for more details.\n"
    "\n"
    "You should have received a copy of the GNU General Public License\n"
    "along with this program.  If not, see <http://www.gnu.org/licenses/>.\n";
    fprintf(stdout, "%s", w);
    return done;
}
Object minigrace_credits(Object self, int argc, int *argcv,
        Object *argv, int flags) {
    char *w =
    "Minigrace contains code by:\n"
    " * Michael Homer\n"
    " * Timothy Jones\n"
    " * Jan Larres\n";
    fprintf(stdout, "%s", w);
    return done;
}
Object grace_minigrace(Object self, int argc, int *argcv,
        Object *argv, int flags) {
    if (!minigrace_obj) {
        ClassData c = alloc_class("Minigrace", 3);
        add_Method(c, "warranty", &minigrace_warranty);
        add_Method(c, "w", &minigrace_warranty);
        add_Method(c, "credits", &minigrace_credits);
        minigrace_obj = alloc_userobj2(0, 0, c);
        gc_root(minigrace_obj);
    }
    return minigrace_obj;
}
Object prelude_PrimitiveArray(Object self, int argc, int *argcv,
        Object *argv, int flags) {
    return alloc_PrimitiveArrayClassObject();
}
Object prelude_Exception(Object self, int argc, int *argcv, Object *argv,
        int flags) {
    return ExceptionObject;
}
Object prelude_Error(Object self, int argc, int *argcv, Object *argv,
        int flags) {
    return ErrorObject;
}
Object prelude_RuntimeError(Object self, int argc, int *argcv, Object *argv,
        int flags) {
    return RuntimeErrorObject;
}
Object prelude_become(Object self, int argc, int *argcv, Object *argv,
        int flags) {
    return gracebecome(argv[0], argv[1]);
}
Object prelude_unbecome(Object self, int argc, int *argcv, Object *argv,
        int flags) {
    return graceunbecome(argv[0]);
}
Object prelude_clone(Object self, int argc, int *argcv, Object *argv,
        int flags) {
  if (!(argv[0]->flags & OFLAG_USEROBJ))
    return argv[0];
  Object obj = argv[0];
  struct UserObject *uo = (struct UserObject *)obj;
  void *sz = ((char *)obj) - sizeof(size_t);
  size_t *size = sz;
  int nfields = (*size - sizeof(struct UserObject)) / sizeof(Object) + 1;
  Object ret = alloc_userobj2(0, nfields, obj->class);
  struct UserObject *uret = (struct UserObject *)ret;
  memcpy(ret, obj, *size);
  if (uo->super)
    uret->super = prelude_clone(self, argc, argcv, &uo->super, flags);
  return ret;
}
Object _prelude = NULL;
Object grace_prelude() {
    if (prelude != NULL)
        return prelude;
    ClassData c = alloc_class2("NativePrelude", 16, (void*)&UserObj__mark);
    add_Method(c, "asString", &Object_asString);
    add_Method(c, "++", &Object_concat);
    add_Method(c, "==", &Object_Equals);
    add_Method(c, "!=", &Object_NotEquals);
    add_Method(c, "while()do", &grace_while_do);
    add_Method(c, "for()do", &grace_for_do);
    add_Method(c, "Exception", &prelude_Exception);
    add_Method(c, "Error", &prelude_Error);
    add_Method(c, "RuntimeError", &prelude_RuntimeError);
    add_Method(c, "octets", &grace_octets);
    add_Method(c, "minigrace", &grace_minigrace);
    add_Method(c, "_methods", &prelude__methods)->flags ^= MFLAG_REALSELFONLY;
    add_Method(c, "PrimitiveArray", &prelude_PrimitiveArray);
    add_Method(c, "become", &prelude_become);
    add_Method(c, "unbecome", &prelude_unbecome);
    add_Method(c, "clone", &prelude_clone);
    _prelude = alloc_userobj2(0, 0, c);
    struct UserObject *uo = (struct UserObject *)_prelude;
    gc_root(_prelude);
    prelude = _prelude;
    return _prelude;
}
