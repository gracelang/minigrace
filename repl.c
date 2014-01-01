#include <string.h>
#include <stdlib.h>
#include <stdint.h>
#include <stdio.h>

#include "gracelib.h"

Object repl_module = NULL;
Object visitor = NULL;

Object module_ast_init();
Object module_ast;
Object module_interactive_init();
Object module_interactive;

Object Object_asString(Object, int, int*, Object*, int);

// This function will receive the name and target object of a method,
// create the appropriate interactive objects for the interpreter and then
// call back to the interpreter with them. This way the actual method gets
// executed in the interpreter and we don't have to create functions at
// runtime.
Object trampoline(Object self, Object realself, int nparts, int *argcv,
        Object *args, int flags) {
    int pos = (flags >> 16) & 255;
    Object callinfo = getdatum(self, pos, 0);
    int largcv[] = {1};
    Object idx1 = alloc_Integer32(1);
    Object idx2 = alloc_Integer32(2);
    Object objname  = callmethod(callinfo, "at", 1, largcv, &idx1);
    Object methname = callmethod(callinfo, "at", 1, largcv, &idx2);

    Object replobjclass = callmethod(module_interactive, "replObj", 0, NULL, NULL);
    Object kind = alloc_String("value");
    Object roargs[] = {kind, self};
    int roargcv[] = {2};
    Object selfreplobj = callmethod(replobjclass, "new", 1, roargcv, roargs);
    gc_root(selfreplobj);

    Object idclass = callmethod(module_ast, "identifierNode", 0, NULL, NULL);
    Object idargs[] = {objname, alloc_Boolean(0)};
    int idargcv[] = {2};
    Object selfid = callmethod(idclass, "new", 1, idargcv, idargs);
    gc_root(selfid);

    Object memberclass = callmethod(module_ast, "memberNode", 0, NULL, NULL);
    Object memberargs[] = {methname, selfid};
    int memberargcv[] = {2};
    Object methmember = callmethod(memberclass, "new",
                                   1, memberargcv, memberargs);
    gc_root(methmember);

    Object withclass = callmethod(module_ast, "callWithPart", 0, NULL, NULL);
    Object with = alloc_List();
    int i, j;
    int k = 0;
    int pushargcv[] = {1};
    int withargcv[] = {2};
    for (i = 0; i < nparts; i++) {
        Object curpart = alloc_List();
        for (j = 0; j < argcv[i]; j++) {
            Object curarg = args[k];
            callmethod(curpart, "push", 1, pushargcv, &curarg);
            k++;
        }
        Object withargs[] = {alloc_String(""), curpart};
        Object withpart = callmethod(withclass, "new", 1, withargcv, withargs);
        gc_root(withpart);
        callmethod(with, "push", 1, pushargcv, &withpart);
    }
    gc_root(with);

    Object callclass = callmethod(module_ast, "callNode", 0, NULL, NULL);
    Object nodeargs[] = {methmember, with};
    int nodeargcv[] = {2};
    Object callnode = callmethod(callclass, "new", 1, nodeargcv, nodeargs);
    gc_root(callnode);

    int acceptargcv[] = {1};
    callmethod(callnode, "accept", 1, acceptargcv, &visitor);
    Object replvar = callmethod(visitor, "_result", 0, NULL, NULL);
    return callmethod(replvar, "val", 0, NULL, NULL);
}

// This has to be called before the first method call so the trampoline
// methods knows where to call back to.
Object repl_registerVisitor(Object self, int nparts, int *argcv, Object *args,
        int flags) {
    if (nparts != 1 && argcv[0] != 1)
        gracedie("registerVisitor requires exactly one argument");

    gc_pause(); // temporary
    visitor = args[0];
    return alloc_done();
}

Object repl_createobject(Object self, int nparts, int *argcv, Object *args,
        int flags) {
    int nummethods = integerfromAny(args[0]);
    int numfields = integerfromAny(args[1]);
    return alloc_userobj(nummethods, numfields);
}

// Add a wrapper for the named method that actually points to the trampoline
// function so that the function will call back to the interpreter to actually
// execute the method.
Object repl_addmethod(Object self, int nparts, int *argcv, Object *args,
        int flags) {
    Object o = args[0];
    Object objname  = args[1];
    gc_root(objname);
    Object methname = args[2];
    gc_root(methname);
    int pos = integerfromAny(args[3]);

    Object(*func)(Object, int, int*, Object*, int);
    func = (Object(*)(Object, int, int*, Object*, int))trampoline;
    Method *m = add_Method(o->class, cstringfromString(methname), func);
    m->flags &= ~MFLAG_REALSELFONLY;
    m->flags |=  MFLAG_REALSELFALSO;
    m->pos = pos;

    Object callinfo = alloc_List();
    gc_root(callinfo); // ugly workaround
    gc_pause();
    int largcv[] = {1};
    callmethod(callinfo, "push", 1, largcv, &objname);
    callmethod(callinfo, "push", 1, largcv, &methname);
    gc_unpause();
    adddatum2(o, callinfo, pos);

    return alloc_done();
}

Object module_repl_init() {
    if (repl_module != NULL)
        return repl_module;
    ClassData c = alloc_class("Module<repl>", 12);
    add_Method(c, "asString", &Object_asString);
    add_Method(c, "registerVisitor", &repl_registerVisitor);
    add_Method(c, "createobject", &repl_createobject);
    add_Method(c, "addmethod", &repl_addmethod);
    Object o = alloc_newobj(0, c);
    repl_module = o;
    gc_root(repl_module);
    if (module_ast == NULL)
        module_ast = module_ast_init();
    if (module_interactive == NULL)
        module_interactive = module_interactive_init();
    return o;
}
