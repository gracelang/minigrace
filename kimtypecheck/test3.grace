dialect "gradualTypes"
 
method d(aa:Number) → Number {aa}

print(d(5))
type A = {
    p(n:Number) -> Number
    q → String
    sf → Number
    sf:= (n: Number) → Done
}

var y:Number is public := 16

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
        method p(n: Number) → Number {n + 1}
        method q → String {"d"}
    }
}

class cc → A {
    var sf: Number is public := 12
    method p(n: Number) → Number {n + 1}
    method q → String {"d"}
}

def co: A = cc
co.sf
co.sf := 5
print "co.sf = {co.sf}"

print "{c.q}"

print (c.p (17))

def d: A = c
print(d.sf)
d.sf := 12
def xy: Number = d.sf - 47
print(xy)

print (1 + c.p(11))



