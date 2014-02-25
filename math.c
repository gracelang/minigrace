#include <string.h>
#include <stdlib.h>
#include <stdint.h>
#include <stdio.h>
#include <math.h>
#include <time.h>

#include "gracelib.h"

Object math_module = NULL;

Object math_asString(Object self, int nparts, int *argcv, Object *args, int flags) {
    
    return alloc_String("the \"math\" module");
}

Object math_asDebugString(Object self, int nparts, int *argcv, Object *args, int flags) {
    
    return callmethod(self, "asString", 0, NULL, NULL);
}

Object math_sin(Object self, int nparams, int *argcv, Object *argv, int flags) {

    return alloc_Float64(sin(*(double*) argv[0]->data));
}

Object math_cos(Object self, int nparams, int *argcv, Object *argv, int flags) {

    return alloc_Float64(cos(*(double*) argv[0]->data));
}

Object math_tan(Object self, int nparams, int *argcv, Object *argv, int flags) {

    return alloc_Float64(tan(*(double*) argv[0]->data));
}

Object math_asin(Object self, int nparams, int *argcv, Object *argv, int flags) {

    return alloc_Float64(asin(*(double*) argv[0]->data));
}

Object math_acos(Object self, int nparams, int *argcv, Object *argv, int flags) {

    return alloc_Float64(acos(*(double*) argv[0]->data));
}

Object math_atan(Object self, int nparams, int *argcv, Object *argv, int flags) {

    return alloc_Float64(atan(*(double*) argv[0]->data));
}

Object math_random(Object self, int nparams, int *argcv, Object *argv, int flags) {

    return alloc_Float64((double)rand() / RAND_MAX);
}

Object math_pi(Object self, int nparams, int *argcv, Object *argv, int flags) {
    
    return alloc_Float64((double)3.141592653589793);
}

Object math_sqrt(Object self, int nparams, int *argcv, Object *argv, int flags) {
    
    return alloc_Float64(sqrt(*(double*) argv[0]->data));
}

Object math_abs(Object self, int nparams, int *argcv, Object *argv, int flags) {
    
    return alloc_Float64(fabs(*(double*) argv[0]->data));
}


// Create and return a grace object which contains the above functions
Object module_math_init() {

    if (math_module != NULL)
        return math_module;

    srand(time(NULL));

    ClassData c = alloc_class("Module<math>", 13);
    
    add_Method(c, "asString", &math_asString);
    add_Method(c, "asDebugString", &math_asDebugString);
    add_Method(c, "sin", &math_sin);
    add_Method(c, "cos", &math_cos);
    add_Method(c, "tan", &math_tan);
    add_Method(c, "asin", &math_asin);
    add_Method(c, "acos", &math_acos);
    add_Method(c, "atan", &math_atan);
    add_Method(c, "random", &math_random);
    add_Method(c, "pi", &math_pi);
    add_Method(c, "π", &math_pi);
    add_Method(c, "sqrt", &math_sqrt);
    add_Method(c, "abs", &math_abs);

    Object o = alloc_newobj(0, c);
    math_module = o;
    gc_root(math_module);

    return o;
}