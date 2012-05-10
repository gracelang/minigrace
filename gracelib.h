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
    char *name;
    int32_t flags;
    Object(*func)(Object, int, int*, Object*, int);
    int pos;
    struct MethodType *type;
} Method;
#define MFLAG_REALSELFONLY 2
#define MFLAG_REALSELFALSO 4
#define MFLAG_DEF 8

#define OFLAG_MUTABLE 64

struct ClassData {
    int32_t flags;
    ClassData class;
    char *name;
    Method *methods;
    int nummethods;
    void (*mark)(void *);
    void (*release)(void *);
};

struct Object {
    int32_t flags;
    ClassData class;
    char data[];
};

struct UserObject {
    int32_t flags;
    ClassData class;
    jmp_buf *retpoint;
    Object super;
    void *data[];
};

struct StackFrameObject {
    int32_t flags;
    ClassData class;
    struct StackFrameObject *parent;
    int size;
    Object slots[];
};

Object alloc_Float64(double);
Object alloc_List();
Object alloc_String(const char*);
Object tailcall(Object, const char *, int, int *, Object *, int);
Object callmethod3(Object, const char *, int, int *, Object *, int);
Object callmethod(Object receiver, const char *name,
        int nparts, int *nparams, Object *args);
Object alloc_Boolean(int val);
Object alloc_Octets(const char *data, int len);
Object alloc_ConcatString(Object, Object);
Object alloc_Undefined();
Object alloc_none();
Object alloc_ellipsis();
Object alloc_MatchFailed();
Object matchCase(Object, Object*, int, Object);
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
Object alloc_userobj(int, int);
Object alloc_userobj2(int, int, ClassData);
Object alloc_obj2(int, int);
Object* alloc_var();
Object alloc_HashMapClassObject();
Object gracelib_print(Object, int, Object*);
Object gracelib_length(Object);
Object dlmodule(const char *);
Object process_varargs(Object *, int, int);

void bufferfromString(Object, char *);
char *cstringfromString(Object);
int integerfromAny(Object);
Object createclosure(int, char*);
struct StackFrameObject *alloc_StackFrame(int, struct StackFrameObject *);
void setclosureframe(Object, struct StackFrameObject *);
struct StackFrameObject *getclosureframe(Object);

void setline(int);
void gracedie(char *msg, ...);

void grace_register_shutdown_function(void(*)());

char *grcstring(Object);


void gc_mark(Object);
void gc_root(Object);

// These are used by code generation, and shouldn't need to be
// used elsewhere.
void initprofiling();
void gracelib_argv(char **);
void module_sys_init_argv(Object);
void gracelib_stats();
void addtoclosure(Object, Object *);
Object *getfromclosure(Object, int);
void addmethod2(Object, char *, Object (*)(Object, int, int*, Object*, int));
Method *addmethod2pos(Object, char *, Object (*)(Object, int, int*, Object*, int), int);
void addmethodreal(Object, char *, Object (*)(Object, int, int*, Object*, int));
void addmethodrealflags(Object, char *, Object (*)(Object, int, int*, Object*, int), int);
void adddatum2(Object, Object, int);
Object getdatum(Object, int, int);
void set_type(Object, int16_t);
void setsuperobj(Object, Object);
void block_savedest(Object);
void block_return(Object, Object);
void setclassname(Object, char*);
void gracelib_stats();
int istrue(Object);
void setmodule(const char *);
Object grace_userobj_outer(Object, int, int*, Object*, int);
Object grace_prelude();
