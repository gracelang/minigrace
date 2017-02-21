dialect "gradualTypes"
//dialect "gradualTypes"

var y: String := "abc"

method m(x:Number) → Number {2}
print "hello"

m(6)

type A = {
    p(n:Number) -> Number
}

def z: A = object {
    method p(n:Number) -> Number {n}
}

method d(aa:Number) → A {z}

def h: A = d(3)

def rr: Number = z.p(22)

def j:Number = d(3).p(5)
// following crashes if write d.p(5)
print "d.p(5) should be 5, but is {h.p(5)}"

method x → Number {   // not work because no self type
    12
}

// def x: Number = 12   // works fine with def

method f → Number {
    x
}

method c → A {
    object {
        method p(n: Number) → Number {n}
    }
}

// print (z.p("abc"))  // should give type error - bad argument type
print (z.p(11+3))
method n(i:Number) → Number {5}
print(n(3) + 1)

////print (1 + n(3))  Causes errors!!

var abc: Number := 5

// while {abc} do {        // Should give type error
while {abc > 0} do {
    print(abc)
    abc := abc - 1
}

for (10..12) do {i: Number →
    print (i-1)
}

type Block1⟦C,B⟧ = {
    apply(a:C) → B
}



def bl:Block1⟦Number,Number⟧ = {k: Number → k+1}

//print(bl.apply("abc"))  // should give error, bad argument type
print(bl.apply(55))