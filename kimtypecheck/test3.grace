dialect "gradualTypes"
 
method d(aa:Number) → Number {aa}

print(d(5))
type A = {
    p(n:Number) -> Number
    q → String
    sf → Number
    sf:= (n: Number) → Done
}

var y:Number := 16

def obj: A = object {
        var sf: Number is public := 12
        method p(m: Number) → Number {m}
        method q → String {"d"}
    }
    
obj.sf

obj.p(23)

method c → A {
    object {
        var sf: Number is public := 12
        method p(n: Number) → Number {n}
        method q → String {"d"}
    }
}

c.q

print (c.p (17))

def d: A = c
print(d.sf)
d.sf := 12
print(d.sf)



