dialect "minitest"

type A = interface {a(n:Number) -> Number}
type B = interface {b(s:String) -> String}
type A' = A
type B' = B
type C = interface {c -> Done }
type AB = A & B
type AB' = A | B
type ABC = A & B & C
type ABC' = A | B | C

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
}


testSuite "Compoiste Types" with {
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
    test "Composite types do not understand methodNames" by {
        assert {(A | B | C).methodNames} shouldRaise (NoSuchMethod)
    }

    test "ABC' is not an interface" by {
        deny (ABC'.isInterface) description "ABC' is an interface"
    }
    test "ABC' has its own name" by {
        assert (ABC'.name) shouldBe "ABC'"
    }
    test "Variant types do not understand methodNames" by {
        assert {ABC'.methodNames} shouldRaise (NoSuchMethod)
    }

    test "AB' & C is put into disjunctive normal form" by {
        deny ((AB' & C).isInterface) description "AB' & C is an interface"
    }
    test "AB' & C has a generated name" by {
        assert ((AB' & C).name) shouldBe "AB' & C"
    }
    test "Variant & interface first variant" by {
        assert ((AB' & C).interfaces.size) shouldBe 2
        def firstVariant = (AB' & C).interfaces.first
        assert (firstVariant.methodNames) shouldBe ((A & C).methodNames)
        assert (firstVariant) shouldBe (A & C)
    }
    test "Variant & interface second variant" by {
        assert ((AB' & C).interfaces.size) shouldBe 2
        def secondVariant = sequence.withAll((AB' & C).interfaces).second
        assert (secondVariant.methodNames) shouldBe ((B & C).methodNames)
        assert (secondVariant) shouldBe (B & C)
    }
    test "(Variant & Interface) does not understand methodNames" by {
        assert {(AB' & C).methodNames} shouldRaise (NoSuchMethod)
    }
}

exit
