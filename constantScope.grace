dialect "standard"

import "scope" as sm
import "mirror" as mirror
import "basic" as basic

use basic.open

def emptyScope is public = sm.emptyScope
def builtInsScope is public = sm.builtInScope.in(emptyScope)
def objectScope is public = sm.predefinedObjectScope "graceObject"
def booleanScope is public = sm.predefinedObjectScope "boolean"
def numberScope is public = sm.predefinedObjectScope "number"
def stringScope is public = sm.predefinedObjectScope "string"
def sequenceScope is public = sm.predefinedObjectScope "sequence"
def patternScope is public = sm.predefinedObjectScope "pattern"
def iterScope is public = sm.predefinedObjectScope "iter"
def doneScope is public = sm.predefinedObjectScope "done"
def fn0Scope is public = sm.predefinedObjectScope "function 0"
def fn1Scope is public = sm.predefinedObjectScope "function 1"
def fn2Scope is public = sm.predefinedObjectScope "function 2"
def fn3Scope is public = sm.predefinedObjectScope "function 3"
def bindingScope is public = sm.predefinedObjectScope "binding"
def exceptionScope is public = sm.predefinedObjectScope "exception"
def universalScope is public = sm.universalScope
def typeScope is public = sm.predefinedObjectScope "Type"


def un is public = typeNode "Unknown"       // used from identifierresolution
def bool = typeNode "Boolean"
def str = typeNode "String"
def num = typeNode "Number"
def obj = typeNode "Object"
def seq = typeNode "Sequence" params 1
def iter = typeNode "Iterator" params 1
def dn = typeNode "Done"
def non = typeNode "None"
def fn0 = typeNode "Function0" params 2
def fn1 = typeNode "Function1" params 2
def fn2 = typeNode "Function2" params 2
def fn3 = typeNode "Function3" params 2
def pat = typeNode "Pattern"
def ex = typeNode "Exception"
def bind = typeNode "Binding"  params 2
def typ = typeNode "Type"  params 1

// The dictionaries below define the attributes of various built-in objects
// It's ok that some methods are missing; they are treated as returning
// Unknown objects, and given as attributeScope "universalScope"

def graceObjectAttributes = dictionary [
    "def"::objectScope,
    "asString"::str, "asDebugString"::str, "basicAsString"::str,
    "isMe(_)"::bool, "myIdentityHash"::num
]
def doneAttributes = graceObjectAttributes  // will they always be the same?
def equalityAttributes = graceObjectAttributes ++ dictionary [
    "==(_)"::bool, "≠(_)"::bool, "hash"::bool, "::(_)"::bind, "matches(_)"::bool
]
def patternAttributes = dictionary [
    "def"::patternScope,
    "matches(_)"::bool, "&(_)"::pat, "|(_)"::pat, "prefix¬"::pat
]
def booleanAttributes = equalityAttributes ++ patternAttributes ++ dictionary [
    "def"::booleanScope,
    "not"::bool, "prefix!"::bool, "&&(_)"::bool, "||(_)"::bool
]
def numberAttributes = equalityAttributes ++ patternAttributes ++ dictionary [
    "def"::numberScope,
    "+(_)"::num, "-(_)"::num, "^(_)"::num,
    "*(_)"::num, "/(_)"::num, "%(_)"::num,
    "÷(_)"::num, "..(_)"::seq, "downTo(_)"::seq,
    "prefix-"::num, "<(_)"::bool, "≤(_)"::bool,
    "≥(_)"::bool, ">(_)"::bool, "compare(_)"::num,
    "isInteger"::bool, "inBase(_)"::str, "asString"::str,
    "asDebugString"::str, "asStringDecimals(_)"::str, "truncated"::num,
    "rounded"::num, "floor"::num, "ceiling"::num, "abs"::num,
    "sgn"::num, "isNaN"::bool, "isEven"::bool, "isOdd"::bool,
    "sin"::num, "cos"::num, "tan"::num, "asin"::num,
    "acos"::num, "atan"::num, "lg"::num, "ln"::num, "sqrt"::num,
    "exp"::num, "log10"::num, "matches(_)"::bool,
    "prefix<"::pat, "prefix≤"::pat, "prefix>"::pat, "prefix≥"::pat
]
def stringAttributes = graceObjectAttributes ++ patternAttributes ++
    equalityAttributes ++ dictionary [
    "def"::stringScope,
    "*(_)"::str, "++(_)"::str, "<(_)"::bool,
    "≤(_)"::bool, "reverseTimesNumber(_)"::str,
    ">(_)"::bool, "≥(_)"::bool, "at(_)"::str,
    "first"::str, "second"::str, "third"::str, "fourth"::str, "fifth"::str,
    "asLower"::str, "asNumber"::num, "asUpper"::str,
    "do(_)"::dn, "capitalized"::str, "compare(_)"::num,
    "contains(_)"::bool, "endsWith(_)"::bool, "filter(_)"::str,
    "fold(_)startingWith(_)"::un, "hash"::num, "indexOf(_)"::num,
    "indexOf(_)ifAbsent(_)"::num, "indexOf(_)startingAt(_)"::num,
    "indexOf(_)startingAt(_)ifAbsent(_)"::num, "indices"::str,
    "keys"::str, "isEmpty"::bool, "iterator"::iter, "includes(_)"::bool,
    "keysAndValuesDo(_)"::dn, "lastIndexOf(_)"::num,
    "lastIndexOf(_)startingAt(_)"::num, "lastIndexOf(_)ifAbsent(_)"::num,
    "lastIndexOf(_)startingAt(_)ifAbsent(_)"::num, "map(_)"::str,
    "matches(_)"::bool, "ord"::num, "replace(_)with(_)"::str,
    "size"::num, "split(_)"::str, "startsWith(_)"::bool,
    "startsWithDigit"::bool, "startsWithLetter"::bool, "startsWithPeriod"::bool,
    "startsWithSpace"::bool, "substringFrom(_)size(_)"::str,
    "substringFrom(_)to(_)"::str, "substringFrom(_)"::str,
    "trim"::str, "quoted"::str, ">>(_)"::str, "last"::str,
    "<<(_)"::str, "do(_)separatedBy(_)"::dn
]
def sequenceAttributes = graceObjectAttributes ++ equalityAttributes ++ dictionary [
    "def"::sequenceScope,
    "size"::num, "indexOf(_)"::num, "indexOf(_)ifAbsent(_)"::num,
        "contains(_)"::bool, "reversed"::seq, "keys"::seq, "indices"::seq,
        "includes(_)"::bool, "keysAndValuesDo(_)"::dn,  "do(_)"::dn,
        "do(_)separatedBy(_)"::dn, "sorted"::seq, "iterator"::iter,
        "++(_)"::seq, "isEmpty"::bool, "sortedBy(_)"::seq, "filter(_)"::seq,
        "map(_)"::seq, "values"::seq
]
def iterAttributes = graceObjectAttributes ++ dictionary [
    "def"::iterScope,
    "next"::un, "hasNext"::bool
]
def exAttributes = graceObjectAttributes ++ dictionary [
    "def"::exceptionScope,
    "raise(_)"::non, "raise(_)with(_)"::non, "refine(_)"::ex
]
def noAttributes = dictionary [
    "def"::emptyScope
]
def bindAttributes = graceObjectAttributes ++ equalityAttributes ++ dictionary [
    "def"::bindingScope
]
def fn0Attributes = graceObjectAttributes ++ dictionary [
    "def"::fn0Scope
]
def fn1Attributes = graceObjectAttributes ++ dictionary [
    "def"::fn1Scope, "matches(_)"::bool
]
def fn2Attributes = graceObjectAttributes ++ dictionary [
    "def"::fn2Scope, "matches(_,_)"::bool
]
def fn3Attributes = graceObjectAttributes ++ dictionary [
    "def"::fn3Scope, "matches(_,_,_)"::bool
]
def typeAttributes = graceObjectAttributes ++ equalityAttributes ++
    patternAttributes ++ dictionary [
    "def"::typeScope,
    "<:(_)"::bool, ":>(_)"::bool
]

def basicObjectAttributes = dictionary [
    obj::graceObjectAttributes,
    bool::booleanAttributes,
    num::numberAttributes,
    str::stringAttributes,
    seq::sequenceAttributes,
    iter::iterAttributes,
    dn::doneAttributes,
    fn0::fn0Attributes,
    fn1::fn1Attributes,
    fn2::fn2Attributes,
    fn3::fn3Attributes,
    non::noAttributes,
    ex::exAttributes,
    pat::patternAttributes,
    bind::bindAttributes,
    typ::typeAttributes
]

initializeConstantScopes

method scopeFor(typePseudoNode) {
    // answers the scope for typePseudoNode, e.g., if typePseudoNode == bool, return booleanScope

    def attribDict = basicObjectAttributes.at(typePseudoNode) ifAbsent {
        if (typePseudoNode == un) then { return universalScope }
        ProgrammingError.raise "no entry for {typePseudoNode} in the dictionary basicObjectAttributes"
    }
    attribDict.at "def"
}

method initializeConstantScopes {
    // populate the scopes corresponding to the language literals.
    // We reflect on a witness object, rather than using its type,
    // so that we include the confidential method names

    mirror.reflect(object{}).allMethodNames.do { each ->
        objectScope.add(sm.graceObjectMethodFrom (
            pseudoNode (numericName(each))
            typed (graceObjectAttributes.at(each) ifAbsent{ un })))
    }
    mirror.reflect(true).allMethodNames.do { each ->
        booleanScope.add(sm.methodVariableFrom (
            pseudoNode (numericName(each))
            typed (booleanAttributes.at(each) ifAbsent{ un })))
    }
    mirror.reflect(1).allMethodNames.do { each ->
        numberScope.add(sm.methodVariableFrom (
            pseudoNode (numericName(each))
            typed (numberAttributes.at(each) ifAbsent{ un })))
    }
    mirror.reflect "a".allMethodNames.do { each ->
        stringScope.add(sm.methodVariableFrom (
            pseudoNode (numericName(each))
            typed (stringAttributes.at(each) ifAbsent{ un })))
    }
    mirror.reflect [].allMethodNames.do { each ->
        sequenceScope.add(sm.methodVariableFrom (
            pseudoNode (numericName(each))
            typed (sequenceAttributes.at(each) ifAbsent{ un })))
    }
    mirror.reflect ([].iterator).allMethodNames.do { each ->
        iterScope.add(sm.methodVariableFrom (
            pseudoNode (numericName(each))
            typed (iterAttributes.at(each) ifAbsent{ un })))
    }
    mirror.reflect {}.allMethodNames.do { each ->
        fn0Scope.add(sm.methodVariableFrom (
            pseudoNode (numericName(each))
            typed (fn0Attributes.at(each) ifAbsent { un })))
    }
    mirror.reflect {_ -> }.allMethodNames.do { each ->
        fn1Scope.add(sm.methodVariableFrom (
            pseudoNode (numericName(each))
            typed (fn0Attributes.at(each) ifAbsent { un })))
    }
    mirror.reflect {_, _ -> }.allMethodNames.do { each ->
        fn2Scope.add(sm.methodVariableFrom (
            pseudoNode (numericName(each))
            typed (fn0Attributes.at(each) ifAbsent { un })))
    }
    mirror.reflect {_, _, _ -> }.allMethodNames.do { each ->
        fn3Scope.add(sm.methodVariableFrom (
            pseudoNode (numericName(each))
            typed (fn3Attributes.at(each) ifAbsent { un })))
    }

    builtInsScope.add(
        sm.defVariableFrom (pseudoNode "true" typed (bool)))
    builtInsScope.add(
        sm.defVariableFrom (pseudoNode "false" typed (bool)))
    builtInsScope.add(
        sm.methodVariableFrom (pseudoNode "print(1)" typed (dn)))
    builtInsScope.add(
        sm.methodVariableFrom (pseudoNode "native(1)code(1)" typed (un)))
}

class pseudoNode (name) typed (t) scope (s) {
    // a pseudoNode is a fake AST node for things that do not have
    // a real AST node, eg., imported things, and built-in things.
    // It support just enough of the AstNode interface to work …
    use equality

    def nameString is public = name
    method == (other) { nameString == other.nameString }
    def hash is public = nameString.hash    // we KNOW that we will need this
    def decType is public = t
    def scope is public = s

    var attrScope := false        // whereas a real node will find its attribute
                                  // scope in the AST, a pseudoNode just remembers it
    method attributeScope(scp) {
        // a writer method that retrns self, for chaining
        attrScope := scp
        self
    }
    method attributeScope {
        if (false == attrScope) then { attrScope := scopeFor(t) }
            // delayed evaluation to allow for circularity
        attrScope
    }
    method range { emptyRange }
    method isMarkerDeclaration { false }
    method annotations { [] }
    method isIdentifier { false }
    method isDialect { name == "$dialect" }
    method isModule { (name == "$module") || isDialect }
    method isDeclaredByParent { false }
    var numberOfParameters is public := mirror.numberOfParameters(name)
    var numTypeParams is public := 0
    method line { 0 }
    method column { 0 }
    method arrow { "" }
    method sugg { [] }

}
class pseudoNode (name) typed (t) {
    inherit pseudoNode (name) typed (t) scope (builtInsScope)
    // TODO: make this a method that just delegates to the above
    // not currently recognized as fresh
}

class typeNode (name) params (n) {
    // a pseudoNode with the declared type of "Type"
    inherit pseudoNode (name) typed false
    def numTypeParams is public = n
    method decType is override { typeType }   // delayed, to avoid an initialization loop
    method attributeScope { typeScope }
}

method typeNode (name) {
    typeNode (name) params 0
}

once class typeType {
    // the pseudoNode for type type
    inherit typeNode "type" params 1

    method decType { self }     // ties the recursive knot
}

sm.typeType := typeType         // inject into scope module
