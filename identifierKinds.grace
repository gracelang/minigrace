// Constants distinguishing between different kinds of identifier.

type T = type {
    isParameter -> Boolean
    isAssignable -> Boolean
}

class kindConstant(name) {
    method asString { name }
    method isParameter { false }
    method isAssignable { false }
}

def defdec = kindConstant "defdec"
def methdec = kindConstant "method"
def typedec = kindConstant "typedec"
def inherited = kindConstant "inherited"
def undefined = kindConstant "undefined"
def vardec = object {
    inherits kindConstant "vardec"
    method isAssignable { true }
}
def parameter = object {
    inherits kindConstant "parameter"
    method isParameter { true }
}
def typeparam = object {
    inherits kindConstant "typeparam"
    method isParameter { true }
}
