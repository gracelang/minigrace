class A.new {
    method foo {
        "world"
    }
}

class B.new {
    inherits A.new
    method bar {
        print "hello {foo}"
    }
}

class C.new {
    inherits B.new
    method quux {
        print "X"
        bar
    }
}

object {
    inherits A.new
}

def x = B.new
x.bar
type T = {
    foo
    quux
}
def y : T = C.new
y.quux

