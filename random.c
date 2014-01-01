#include <string.h>
#include <stdlib.h>
#include <stdint.h>
#include <stdio.h>
#include <time.h>

#include "gracelib.h"

// random.c defines a Grace module "random" which can be compiled for
// dynamic or static linking. The module contains one method:
//   random -> Number
// returning a random number in the range [0,1]

Object random_module = NULL;
Object random_random(Object self, int nparams, int *argcv,
        Object *argv, int flags) {
    return alloc_Float64((double)rand() / RAND_MAX);
}

// Create and return a Grace object with all the above functions as methods.
Object module_random_init() {
    if (random_module != NULL)
        return random_module;
    srand(time(NULL));
    ClassData c = alloc_class("Module<random>", 12);
    add_Method(c, "random", &random_random);
    Object o = alloc_newobj(0, c);
    random_module = o;
    gc_root(random_module);
    return o;
}

