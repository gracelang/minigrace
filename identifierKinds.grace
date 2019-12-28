dialect "standard"
// Constants distinguishing between different kinds of identifier.
// Defines observers for their properties.

type T = EqualityObject & interface {
    isParameter -> Boolean
    isAssignable -> Boolean
    isImplicit -> Boolean
    isRequired -> Boolean
    forUsers -> Boolean
    fromParent -> Boolean
    isFresh -> Boolean
    tag -> String
}

class kindConstant(name) {
    use identityEquality
    method asString { name }
    method isParameter { false }
    method isAssignable { false }
    method isImplicit { false }
    method forUsers { true }
    method fromParent { false }
    method forGct { true }
    method isRequired { false }
    method fromGraceObject { false }
    method isFresh  { false }
    method tag -> String {
        // converts a kind constant to a tag
        def t = tags.at(self)
        if (t.isEmpty) then { t } else { " " ++ t }
    }
}

def undefined is public = kindConstant "undefined"
def defdec is public = kindConstant "defdec"
def methdec is public = kindConstant "method"
def typedec is public = kindConstant "typedec"
def aliasdec is public = kindConstant "alias"
def importdec is public = kindConstant "import"

def freshmeth is public = object {
    inherit kindConstant "freshmeth"
    method isFresh  { true }
}
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
def required is public = object {
    inherit kindConstant "required"
    method isRequired {true}
    method isImplicit { true }
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
    method fromGraceObject { true }
}

def tags = dictionary [
    undefined::"(und)",
    defdec::"(def)",
    methdec::"",
    freshmeth::"(fresh)",
    typedec::"(type)",
    aliasdec::"(al)",
    importdec::"(impt)",
    fromTrait::"(ft)",
    inherited::"(fs)",
    required::"(req)",
    vardec::"(var)",
    parameter::"(par)",
    typeparam::"(tpar)",
    graceObjectMethod::"(fgo)"]

def constants = dictionary.empty
tags.keysAndValuesDo { k, v -> constants.at(v) put(k) }


method for(aTag:String) -> T {
    // converts a tag to a kind constant
    constants.at(aTag)
}
