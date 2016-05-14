// Constants distinguishing between different kinds of identifier.
// Defines observers for their properties.

type T = type {
    isParameter -> Boolean
    isAssignable -> Boolean
    isImplicit -> Boolean
    forUsers -> Boolean
    fromParent -> Boolean
    ==(o:T) -> Boolean
}

class kindConstant(name) {
    method asString { name }
    method isParameter { false }
    method isAssignable { false }
    method isImplicit { false }
    method forUsers { true }
    method fromParent { false }
    method forGct { true }
    method ==(other) { self.isMe(other) }
}

def undefined = kindConstant "undefined"
def defdec = kindConstant "defdec"
def methdec = kindConstant "method"
def typedec = kindConstant "typedec"
def selfDef = object {
    inherits kindConstant "selfDef"
    method isImplicit { true }
    method forUsers { false }
    method forGct { false }
}
def fromTrait = object {
    inherits kindConstant "from a trait"
    method isImplicit { true }
    method fromParent { true }
}
def inherited = object {
    inherits kindConstant "inherited"
    method isImplicit { true }
    method fromParent { true }
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
    inherits kindConstant "from graceObject"
    method isImplicit { true }
    method forUsers { false }
    method fromParent { true }
    method forGct { false }
}
