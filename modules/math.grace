// C calling conventions:
// - the method's arguments are in args[0], args[1], ...
// - the insatnce variables of an object o are in o->data, but exactly where depends
//     on whether it is built-in or defined in Grace.
// - ‹return› returns from the method
// - the native code insertions can be treated as an expression answering a value;
//     that value should be assigend to ‹result›

// JS conventions:
// - Access ‹param› by writing var_‹param›
// - Access ‹field› by writing this.data.‹field›
// - set result by assigning to ‹result›
// - ‹return› returns from the method


method sin(a:Number) {
    // sine of a (assumed to be radians)
    native "c" code ‹    return alloc_Float64(sin(*(double*) args[0]->data));›
    native "js" code ‹    return new GraceNum(Math.sin(var_a._value));›
}

method cos(a:Number) {
    // cosine of a (assumed to be radians)
    native "c" code ‹    return alloc_Float64(cos(*(double*) args[0]->data));›
    native "js" code ‹    return new GraceNum(Math.cos(var_a._value));›
}

method tan(a:Number) {
    // tangent of a (assumed to be radians)
    native "c" code ‹    return alloc_Float64(tan(*(double*) args[0]->data));›
    native "js" code ‹    return new GraceNum(Math.tan(var_a._value));;›
}

method asin(a:Number) {
    // arcsin of a (in radians)
    native "c" code ‹    return alloc_Float64(asin(*(double*) args[0]->data));›
    native "js" code ‹    return new GraceNum(Math.asin(var_a._value));›
}

method acos(a:Number) {
    // arccos of a (in radians)
    native "c" code ‹    return alloc_Float64(acos(*(double*) args[0]->data));›
    native "js" code ‹    return new GraceNum(Math.acos(var_a._value));›
}

method atan(a:Number) {
    // arctan of a (in radians)
    native "c" code ‹    return alloc_Float64(atan(*(double*) args[0]->data));›
    native "js" code ‹    return new GraceNum(Math.atan(var_a._value));›
}

method random {
    // a pseudo-random number
    native "c" code ‹    return alloc_Float64((double)rand() / RAND_MAX);›
    native "js" code ‹    return new GraceNum(Math.random());›
}

method π {
    // an approximation of the constant π
    native "c" code ‹    return alloc_Float64((double)3.141592653589793);›
    native "js" code ‹    return new GraceNum(3.141592653589793);›
}

method pi {
    // same as π — for those who don't know Greek
    native "c" code ‹    return alloc_Float64((double)3.141592653589793);›
    native "js" code ‹    return new GraceNum(3.141592653589793);›
}

method sqrt(a:Number) {
    // square root of a
    native "c" code ‹    return alloc_Float64(sqrt(*(double*) args[0]->data));›
    native "js" code ‹    return new GraceNum(Math.sqrt(var_a._value));›
}

method abs(a:Number) {
    // absolute value of a
    native "c" code ‹    return alloc_Float64(fabs(*(double*) args[0]->data));›
    native "js" code ‹    return new GraceNum(Math.abs(var_a._value));›
}

method lg(a:Number) {
    // logarithm to base 2 of a
    native "c" code ‹    double log2 = log(2.0);
    double logA = log(*(double*) args[0]->data);
    return alloc_Float64(logA/log2);›
    native "js" code ‹    return new GraceNum(Math.log(var_a._value) / Math.LN2);›
}

method ln(a:Number) {
    // natural logarithm (base e) of a
    native "c" code ‹    return alloc_Float64(log(*(double*) args[0]->data));›
    native "js" code ‹    return new GraceNum(Math.log(var_a._value));›
}

method exp(a:Number) {
    // e to the power a
    native "c" code ‹    return alloc_Float64(exp(*(double*) args[0]->data));›
    native "js" code ‹    return new GraceNum(Math.exp(var_a._value));›
}

method log10(a:Number) {
    // logarithm to base 10 of a
    native "c" code ‹    return alloc_Float64(log10(*(double*) args[0]->data));›
    native "js" code ‹    return new GraceNum(Math.log(var_a._value) / Math.LN10);›
}
