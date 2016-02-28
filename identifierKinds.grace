// Constants distinguishing between different kinds of identifier.
// Defines observers for their properties.

type T = type {
    isParameter -> Boolean
    isAssignable -> Boolean
    isImplicit -> Boolean
    forUsers -> Boolean
}

class kindConstant(name) {
    method asString { name }
    method isParameter { false }
    method isAssignable { false }
    method isImplicit { false }
    method forUsers { true }
}

def undefined = kindConstant "undefined"
def defdec = kindConstant "defdec"
def methdec = kindConstant "method"
def typedec = kindConstant "typedec"
def selfDef = object {
    inherits kindConstant "selfDef"
    method isImplicit { true }
    method forUsers { false }
}
def fromTrait = object {
    inherits kindConstant "fromTrait"
    method isImplicit { true }
}
def inherited = object {
    inherits kindConstant "inherited"
    method isImplicit { true }
}
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
def graceObjectMethod = object {
    inherits kindConstant "graceObjectMethod"
    method isImplicit { true }
    method forUsers { false }
}
