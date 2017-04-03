dialect "beginningStudent"

method factorial(n:Number) -> Number {
        // the factorial of n, i.e.,
        // n * (n-1) * (n-2) * ... * 1
        if (n == 1) then { 1 } else { n * factorial(n-1) }
}

print "factorial of 6 is {factorial(6)}"
