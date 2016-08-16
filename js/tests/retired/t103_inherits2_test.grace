class A.new {
    method foo {
        "world"
    }
}

class B.new {
    inherit A.new
    method bar {
        print "hello {foo}"
    }
}

class C.new {
    inherit B.new
    method quux {
        print "X"
        bar
    }
}

object {
    inherit A.new
}

def x = B.new
x.bar
type T = {
    foo
    quux
}
def y : T = C.new
y.quux

