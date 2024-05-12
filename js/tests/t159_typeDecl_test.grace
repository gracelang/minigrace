dialect "minitest"

type A = interface {a(n:Number) -> Number}
type B = interface {b(s:String) -> String}
type A' = A
type B' = B
type C = interface {c -> Done }
type AB = A & B
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
    test "A.asString" by { assert (A.asDebugString) shouldBe "interface A" }
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

exit
