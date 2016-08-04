class a {
    method foo {
        "world"
    }
}

class b {
    inherit a
    method bar {
        print "hello {foo}"
    }
}

class c {
    inherit b
    method quux {
        print "X"
        bar
    }
}

object {
    inherit a
}

def x = b

x.bar

type T = {
    foo
    quux
}
def y:T = c
y.quux

