#include <stdint.h>
#include <setjmp.h>

typedef struct Object* Object;

typedef struct Method {
    char *name;
    int32_t flags;
    Object(*func)(Object, int, Object*, int);
} Method;

typedef struct ClassData {
    char *name;
    Method *methods;
    int nummethods;
}* ClassData;

struct Object {
    int32_t flags;
    ClassData class;
    char data[];
};

struct UserObject {
    int32_t flags;
    ClassData class;
    jmp_buf *retpoint;
    void *data[];
};


Object alloc_Float64(double);
Object alloc_List();
Object alloc_String(const char*);
Object callmethod(Object receiver, const char *name,
        int nparams, Object *args);
Object alloc_Boolean(int val);
Object alloc_Octets(const char *data, int len);
Object alloc_ConcatString(Object, Object);
Object alloc_Undefined();
Object alloc_Nothing();
Object alloc_Integer32(int);
void add_Method(ClassData, const char *,
        Object(*func)(Object, int, Object*, int));
Object alloc_obj(int, ClassData);
Object alloc_newobj(int, ClassData);
ClassData alloc_class(const char *, int);
Object alloc_userobj(int, int);
Object alloc_obj2(int, int);
Object* alloc_var();
Object alloc_HashMapClassObject();
Object gracelib_print(Object, int, Object*);
Object gracelib_length(Object);
Object dlmodule(const char *);

char *cstringfromString(Object);
int integerfromAny(Object);
Object **createclosure(int);

void setline(int);
void gracedie(char *msg, ...);
