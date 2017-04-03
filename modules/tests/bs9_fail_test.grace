dialect "beginningStudent"

method Factorial(n:Number) -> Number {
    // returns the factorial of n, i.e.,
    // n * (n-1) * (n-2) * ... * 1
    if (n == 1) then { 1 } else { n * Factorial(n-1) }
}

print "factorial of 6 is {Factorial(6)}"
