dialect "gradualTypes"
 
method d(aa:Number) → Number {aa}

print(d(5))
type A = {
    p(n:Number) -> Number
    q → String
}

var y:Number := 16

method c → A {
    object {
        method p(n: Number) → Number {n}
        method q → String {"d"}
    }
}

c.q

print (c.p (17))



