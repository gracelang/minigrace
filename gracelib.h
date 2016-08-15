#include <stdint.h>
#include <setjmp.h>

typedef struct Object* Object;

typedef struct ClassData* ClassData;
struct MethodType {
    int nparts;
    int *argcv;
    Object *types;
    char **names;
};
typedef struct Method {
    const char *name;
    int32_t flags;
    Object(*func)(Object, int, int*, Object*, int);
    int pos;
    struct MethodType *type;
    const char *definitionModule;
    int definitionLine;
} Method;

#ifdef DYNAMIC
    #define LOAD_MODULE(name) dlmodule(#name) 
#else
    #define LOAD_MODULE(name) module_ ## name ## _init();
#endif
#define MFLAG_REALSELFONLY 2
#define MFLAG_REALSELFALSO 4
#define MFLAG_DEF 8
#define MFLAG_CONFIDENTIAL 16
#define MFLAG_PRIVATE 32

#define OFLAG_USEROBJ 16
#define OFLAG_MUTABLE 64

#define CFLAG_SELF 128

#define OBJECT_HEADER int32_t flags; \
                      ClassData class;
#define isUserObj(o) (o->flags & OFLAG_USEROBJ)

struct ClassData {
    OBJECT_HEADER;
    char *name;
    Method *methods;
    int nummethods;
    int methodsCapacity;   // capacity of the `methods` array
    void (*mark)(void *);
    void (*release)(void *);
    const char *definitionModule;
    int definitionLine;
};

struct Object {
    OBJECT_HEADER;
    char data[];
};

struct UserObject {
    OBJECT_HEADER;
    jmp_buf *retpoint;
    Object super;
    Object *data;
    int ndata;
};

struct StackFrameObject {
    OBJECT_HEADER;
    struct StackFrameObject *parent;
    int size;
    char *name;
    char **names;
    Object slots[];
};

struct ClosureEnvObject {
    OBJECT_HEADER;
    char name[256];
    int size;
    Object frame;
    Object *data[];
};

struct OctetsObject {
    OBJECT_HEADER;
    int blen;
    char body[];
};

Object alloc_Float64(double);
Object alloc_Lineup();
Object alloc_List();
Object alloc_BuiltinList();
Object alloc_String(const char*);
Object tailcall(Object, const char *, int, int *, Object *, int);
Object callmethod3(Object, const char *, int, int *, Object *, int);
Object callmethod(Object receiver, const char *name,
        int nparts, int *nparams, Object *args);
Object callmethodflags(Object receiver, const char *name,
        int nparts, int *nparams, Object *args, int callflags);
Object callmethod4(Object, const char *,
        int, int *, Object *, int, int);
Object callmethodself(Object receiver, const char *name,
        int nparts, int *nparamsv, Object *args);

Method *findmethodsimple(Object self, const char *name);
Method *findmethod(Object *selfp, Object *realselfp,
        const char *name, int superdepth, int *cflags);
Object required_method(Object self, int nparts, int *argcv,
                       Object *argv, int flags);
Object alloc_Boolean(int val);
Object alloc_Octets(const char *data, int len);
Object alloc_ConcatString(Object, Object);
Object alloc_Undefined();
Object alloc_done();
Object alloc_ellipsis();
Object alloc_MatchFailed();
Object matchCase(Object, Object*, int, Object);
Object tryCatch(Object, Object*, int, Object);
Object catchCase(Object, Object*, int, Object);
Object alloc_Integer32(int);
Object alloc_Block(Object self, Object(*body)(Object, int, Object*, int),
        const char *, int);
Method* add_Method(ClassData, const char *,
        Object(*func)(Object, int, int*, Object*, int));
struct MethodType *alloc_MethodType(int, int*);
Object alloc_obj(int, ClassData);
Object alloc_newobj(int, ClassData);
ClassData alloc_class(const char *, int);
ClassData alloc_class2(const char *, int, void(*)(void *));
ClassData alloc_class3(const char *, int, void(*)(void *), void(*)(void *));
Object alloc_Type(const char *, int);
Object alloc_userobj2(int, int, ClassData);
Object alloc_obj2(int, int);
Object* alloc_var();
Object alloc_ObjectType();
Object alloc_HashMapClassObject();
Object gracelib_print(Object, int, Object*);
Object gracelib_length(Object);
Object dlmodule(const char *);
Object process_varargs(Object *, int, int);
void assertClass(Object, ClassData);

void bufferfromString(Object, char *);
char *cstringfromString(Object);
int integerfromAny(Object);
Object createclosure(int, char*);
struct StackFrameObject *alloc_StackFrame(int, struct StackFrameObject *);
void setclosureframe(Object, struct StackFrameObject *);
struct StackFrameObject *getclosureframe(Object);

void setline(int);
void gracedie(char *msg, ...);
void graceRaise(Object, char *msg, ...);
Object ProgrammingError();
Object RequestError();
Object NoSuchMethod();

void grace_register_shutdown_function(void(*)());
Object alloc_SuccessfulMatch(Object result, Object bindings);
Object alloc_FailedMatch(Object result, Object bindings);

char *grcstring(Object);


void gc_mark(Object);
void gc_root(Object);
void gc_pause();
int gc_unpause();
int gc_frame_new();
void gc_frame_end(int);
int gc_frame_newslot(Object);
void gc_frame_setslot(int, Object);

// Prototypes used by dynamic-module objects
Object Object_Equals(Object, int, int *, Object*, int);
Object Object_NotEquals(Object, int, int *, Object*, int);
Object Object_asString(Object, int, int *, Object*, int);
Object Singleton_asString(Object, int, int *, Object*, int);
Object Module_asString(Object, int, int *, Object*, int);

// These are used by code generation, and shouldn't need to be
// used elsewhere.
void initprofiling();
void gracelib_argv(char **);
void module_sys_init_argv(Object);
void gracelib_stats();
void addtoclosure(Object, Object *);
void glfree(void *);
void setCompilerModulePath(char *);
void setModulePath(char *);
Object *getfromclosure(Object, int);
void addmethod2(Object, char *, Object (*)(Object, int, int*, Object*, int));
Method *addmethod2pos(Object, char *, Object (*)(Object, int, int*, Object*, int), int);
void addmethodreal(Object, char *, Object (*)(Object, int, int*, Object*, int));
Method *addmethodrealflags(Object, char *, Object (*)(Object, int, int*, Object*, int), int);
void adddatum2(Object, Object, int);
Object getdatum(Object, int, int);
Object gracebecome(Object, Object);
void set_type(Object, int16_t);
Object setsuperobj(Object, Object);
void block_savedest(Object);
void block_return(Object, Object);
void setclassname(Object, char*);
void pushstackframe(struct StackFrameObject *, char *name);
void setframeelementname(struct StackFrameObject *, int, char *);
void pushclosure(Object c);
void gracelib_stats();
int istrue(Object);
void setmodule(const char *);
void setsource(char *sl[]);
Object grace_userobj_outer(Object, int, int*, Object*, int);
Object grace_prelude();

