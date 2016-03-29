
method between0And1 -> Number {
    // A pseudo-random number between in the interval [0..1)
    native "c" code ‹    return alloc_Float64((double)rand() / RAND_MAX);›
    native "js" code ‹    return new GraceNum(Math.random());›
}

method between (m: Number) and (n: Number) -> Number {
    // A pseudo-random number in the interval [m..n)
    ((n - m) * between0And1) + m
}

method integerIn (m: Number) to (n: Number) -> Number {
    // A pseudo-random integer in the interval [m..n]
    ((n - m + 1) * between0And1).truncated + m
}
