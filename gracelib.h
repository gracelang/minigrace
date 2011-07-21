
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
    int32_t flags;
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
Object alloc_Float64(double);
Object alloc_List();
Object alloc_String(const char*);
void *callmethod(void *receiver, const char *name,
        int nparams, void *args);
Object alloc_Boolean(int val);
Object alloc_Octets(const char *data, int len);
Object alloc_ConcatString(Object, Object);
Object alloc_Undefined();
Object alloc_Integer32(int);
void add_Method(ClassData, const char *,
        Object(*func)(Object, int, Object*, int));
Object alloc_newobj(int, ClassData);
ClassData alloc_class(const char *, int);

char *cstringfromString(Object);
int integerfromAny(Object);
