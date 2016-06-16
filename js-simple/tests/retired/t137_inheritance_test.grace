method parent {
    object {
        def x is readable = foo
        method foo { 1 }
        method bar { 0 }
    }
}

method child {
    object {
        inherits parent
        method bar { 3 }
    }
}

def a = object {
    inherits parent
    method foo { 2 }
}

def c = object {
    inherits child
}
print(c.bar)
print(a.x)
print(c.x)
