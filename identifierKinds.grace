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

def undefined is public = kindConstant "undefined"
def defdec is public = kindConstant "defdec"
def methdec is public = kindConstant "method"
def typedec is public = kindConstant "typedec"
def selfDef is public = object {
    inherit kindConstant "selfDef"
    method isImplicit { true }
    method forUsers { false }
    method forGct { false }
}
def fromTrait is public = object {
    inherit kindConstant "from a trait"
    method isImplicit { true }
    method fromParent { true }
}
def inherited is public = object {
    inherit kindConstant "inherited"
    method isImplicit { true }
    method fromParent { true }
}
def vardec is public = object {
    inherit kindConstant "vardec"
    method isAssignable { true }
}
def parameter is public = object {
    inherit kindConstant "parameter"
    method isParameter { true }
}
def typeparam is public = object {
    inherit kindConstant "typeparam"
    method isParameter { true }
}
def graceObjectMethod is public = object {
    inherit kindConstant "from graceObject"
    method isImplicit { true }
    method forUsers { false }
    method fromParent { true }
    method forGct { false }
}
