#include <string.h>
#include <stdlib.h>
#include <stdint.h>
#include <stdio.h>
#include <math.h>
#include <time.h>

#include "gracelib.h"

Object math_module = NULL;

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


// Create and return a grace object which contains the above functions
Object module_math_init() {

    if (math_module != NULL)
        return math_module;

    srand(time(NULL));

    ClassData c = alloc_class("Module<math>", 7);

    add_Method(c, "sin", &math_sin);
    add_Method(c, "cos", &math_cos);
    add_Method(c, "tan", &math_tan);
    add_Method(c, "asin", &math_asin);
    add_Method(c, "acos", &math_acos);
    add_Method(c, "atan", &math_atan);
    add_Method(c, "random", &math_random);

    Object o = alloc_newobj(0, c);
    math_module = 0;
    gc_root(math_module);

    return o;
}