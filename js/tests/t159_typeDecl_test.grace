dialect "minitest"

type A = interface {a(n:Number) -> Number}
type B = interface {b(s:String) -> String}
type D = interface {d(u:Unknown) -> Unknown}
type D' = interface {d(_)e(_,_)}
type A' = A
type B' = B
type C = interface {c -> Done }
type AB = A & B
type AB' = A | B
type ABC = A & B & C
type ABC' = A | B | C
type S = Self
type U = Unknown
type W = interface {
    a(s:String) -> String
    x(n:Number) -> Number
}

type ListWithoutSequence = List - Sequence

def differenceBetweenListAndSequence = [
    "add(_)",    "addAll(_)",    "addAllFirst(_)",    "addFirst(_)",
    "addLast(_)",    "at(_)put(_)",    "clear",    "copy",    "insert(_)at(_)",
    "pop",    "remove(_)",    "remove(_)ifAbsent(_)",    "removeAll(_)",
    "removeAll(_)ifAbsent(_)",    "removeAt(_)",    "removeFirst",
    "removeLast",    "reverse",    "sort",    "sortBy(_)"
]

testSuite "method names in interfaces" with {
    test "name of A" by { assert (A.name) shouldBe "A" }
    test "A.asDebugString" by { assert (A.asDebugString) shouldBe "interface A" }
    test "A.asString" by { assert (A.asString) shouldBe "type A" }
    test "methods of A" by {
        assert (A.methodNames) shouldBe [ "a(_)" ]
    }
    test "methods of B" by {
        assert (B.methodNames) shouldBe [ "b(_)" ]
    }
    test "name of A'" by { assert (A'.name) shouldBe "A" }
    test "methods of A'" by {
        assert (A.methodNames) shouldBe [ "a(_)" ]
    }
    test "methods of B'" by {
        assert (B.methodNames) shouldBe [ "b(_)" ]
    }
    test "methods of ABC" by {
        assert (ABC.methodNames) shouldBe [ "a(_)", "b(_)", "c" ]
    }
    test "name of ABC" by {
        assert (ABC.name) shouldBe "ABC"
    }
    test "name of A & B & C" by {
        assert ( (A & B & C).name ) shouldBe "A & B & C"
    }
    test "A & B & C asString" by {
        assert ((A & B & C).asDebugString) shouldBe "interface A & B & C"
    }
    test "difference between List and Sequence" by {
        assert ((List.methodNames >> set) -- (Sequence.methodNames >> set))
            shouldBe (differenceBetweenListAndSequence >> set)
    }
    test "type exclusion" by {
        assert (ListWithoutSequence.methodNames)
            shouldBe (differenceBetweenListAndSequence)
    }
    test "set vs sequence" by {
        assert ([1, 2, 3] == ([1, 2, 3] >> set))
            description "sets and sequences with the same elements are not equal"
    }
}

testSuite "type names" with {
    test "name of A" by { assert (A.name) shouldBe "A" }
    test "name of A'" by { assert (A'.name) shouldBe "A" }
    test "name of AB" by { assert (AB.name) shouldBe "AB" }
    test "AB.asString" by { assert (AB.asString) shouldBe "type AB" }
    test "AB.asDebugString" by { assert (AB.asDebugString) shouldBe "interface AB" }
    test "name of AB'" by { assert (AB'.name) shouldBe "AB'" }
    test "AB'.asString" by { assert (AB'.asString) shouldBe "type AB'" }
    test "AB'.asDebugString" by { assert (AB'.asDebugString) shouldBe "type AB'" }
    test "name of A | B" by { assert ((A | B).name) shouldBe "A | B" }
    test "name of A & B" by { assert ((A & B).name) shouldBe "A & B" }
    test "name of S" by { assert (S.name) shouldBe "Self" }
    test "name of Self" by { assert (Self.name) shouldBe "Self" }
    test "name of U" by { assert (U.name) shouldBe "Unknown" }
    test "name of Unknown" by { assert (Unknown.name) shouldBe "Unknown" }
    test "AB' & C has a generated name" by {
        assert ((AB' & C).name) shouldBe "AB' & C"
    }
    test "ABC' has its own name" by {
        assert (ABC'.name) shouldBe "ABC'"
    }
}

testSuite "Type Equality" with {
    test "U == Unknown" by {
        assert (U == Unknown) description "U isn't the same as Unknown" }
    test "S == Self" by {
        assert (S == Self) description "S isn't the same as Self" }
}

testSuite "Composite Types" with {
    test "A & B is an interface" by {
        assert ((A & B).isInterface) description "A & B is not an interface"
    }
    test "A & B has generated name" by {
        assert ((A & B).name) shouldBe "A & B"
    }
    test "AB has its own name" by {
        assert (AB.name) shouldBe "AB"
    }
    test "methodNames is understood by composite interface" by {
        assert (AB.methodNames) shouldBe [ "a(_)", "b(_)"]
    }
    test "A | B | C is not an interface" by {
        deny ((A | B | C ).isInterface) description "A | B | C is an interface"
    }
    test "A | B | C has generated name" by {
        assert ((A | B | C ).name) shouldBe "A | B | C"
    }
    test "Variant type expressions do not understand `methodNames`" by {
        assert {(A | B | C).methodNames} shouldRaise (NoSuchMethod)
    }
    test "Variant types know their consituent interfaces" by {
        assert ((A | B | C).interfaces) shouldBe [ A, B, C ]
    }
    test "ABC' is not an interface" by {
        deny (ABC'.isInterface) description "ABC' is an interface"
    }
    test "Named variant types do not understand `methodNames`" by {
        assert {ABC'.methodNames} shouldRaise (NoSuchMethod)
    }
    test "Variant & interface is put into disjunctive normal form" by {
        deny ((AB' & C).isInterface) description "AB' & C is an interface"
    }
    test "Variant & interface first variant" by {
        assert ((AB' & C).interfaces.size) shouldBe 2
        def firstVariant = (AB' & C).interfaces.first
        assert (firstVariant.methodNames) shouldBe ((A & C).methodNames)
        assert (firstVariant) shouldBe (A & C)
    }
    test "Variant & interface second variant" by {
        assert ((AB' & C).interfaces.size) shouldBe 2
        def secondVariant = (AB' & C).interfaces.second
        assert (secondVariant.methodNames) shouldBe ((B & C).methodNames)
        assert (secondVariant) shouldBe (B & C)
    }
    test "(Variant & Interface) does not understand methodNames" by {
        assert {(AB' & C).methodNames} shouldRaise (NoSuchMethod)
    }
    test "(Unknown & Interface) is intersection type" by {
        assert ((Unknown & C).name) shouldBe "Unknown & C"
    }
    test "Simple exclusion" by {
        assert (AB - B) shouldBe (A)
    }
    test "Null exclusion" by {
        assert (AB - interface { z(_:String) -> Done }) shouldBe (AB)
    }
    test "Invalid exclusion" by {
        assert {AB - AB'} shouldRaise (TypeError)
            mentioning "right-hand argument" and "not an interface"
    }
}

testSuite "Signatures" with {
    test "method names" by {
        assert (D.methodNames) shouldBe [ "d(_)" ]
    }
    test "method name in signature" by {
        assert (D.methodAt "d(_)".name) shouldBe "d(_)"
        assert (D.methodAt "d(_)".numericName) shouldBe "d(1)"
    }
    test "parameter name when given" by {
        assert (D.methodAt "d(_)".parameterNames) shouldBe [ "u" ]
    }
    test  "parameter name when omitted" by {
        assert (D'.methodAt "d(_)e(_,_)".parameterNames) shouldBe [ "__1", "__2", "__3" ]
    }
    test "parameter type when given" by {
        assert (B.methodAt "b(_)".parameterTypes) shouldBe [ String ]
    }
    test  "methodAt for a method that doesn't exist" by {
        assert {D'.methodAt "d(_)"} shouldRaise (NoSuchObject)
            mentioning "D' does not have a method d(_)"
    }
    test  "parameter types when omitted" by {
        assert (D'.methodAt "d(_)e(_,_)".parameterTypes) shouldBe [ Unknown, Unknown, Unknown ]
    }
    test  "parameter type when Unknown" by {
        assert (D.methodAt "d(_)".parameterTypes) shouldBe [ Unknown ]
    }
    test "result type when given" by {
        assert (B.methodAt "b(_)".returnType) shouldBe (String)
    }
    test  "result type when omitted" by {
        assert (D'.methodAt "d(_)e(_,_)".returnType) shouldBe (Unknown)
    }
    test  "result type when Unknown" by {
        assert (D.methodAt "d(_)".returnType) shouldBe (Unknown)
    }
    test "Signature after exclusion" by {
        assert ((ABC - C).methodAt "a(_)") shouldBe (A.methodAt "a(_)")
    }
    test "Excluded Signature" by {
        assert (C.methodAt "c") hasType (Signature)
        assert ((ABC - C).methodNames) shouldBe [ "a(_)", "b(_)" ]
        assert {(ABC - C).methodAt "c"} shouldRaise (NoSuchObject)
            mentioning "does not have a method c"
    }
    test "Type & has the union of methodNames" by {
        assert ((ABC & W).methodNames) shouldBe ["a(_)", "b(_)", "c", "x(_)"]
    }
    test "Signature & has a composed signature" by {
        def combined_a = interface { a(s:Number|String) -> Number|String }.methodAt "a(_)"
        assert ((ABC & W).methodAt "a(_)") shouldBe (combined_a)
    }
}

exit
