dialect "minitest"

testSuite "primitive array operations" with {
    def a = primitiveArray.new(4)

    test "asString" by {
        assert (a.asString)
            shouldBe "primitiveArray [4: ‹undefined›, ‹undefined›, ‹undefined›, ‹undefined›]"
    }
    test "asDebugString" by {
        assert (a.asDebugString)
            shouldBe "primitiveArray [4: ‹undefined›, ‹undefined›, ‹undefined›, ‹undefined›]"
    }
    test "at(_)put(_)" by {
        a.at 2 put 1
        assert (a.at(2)) shouldBe 1
    }
    test "multiple at(_)put(_)s" by {
        a.at 1 put "Hello"
        a.at 2 put 1
        a.at 3 put "is \"foo\\bar\" a word?"
        a.at 0 put true
        assert (a.asString) shouldBe
            ‹primitiveArray [4: true, Hello, 1, is "foo\bar" a word?]›
        assert (a.asDebugString) shouldBe
            ‹primitiveArray [4: true, "Hello", 1, "is \"foo\\bar\" a word?"]›
        assert (a.size) shouldBe 4
    }
    test "empty iterator" by {
        def empty = primitiveArray.new 0
        deny (empty.iterator.hasNext)
            description "empty iterator has an element"
    }
    test "empty iterator raises exception" by {
        def empty = primitiveArray.new 0
        assert {empty.iterator.next} shouldRaise (IteratorExhausted)
            mentioning "primitiveArray [0: ]"
    }
    test "non-empty iterator" by {
        def accum = set.empty
        def oneToFive = primitiveArray.new 5
        var elem := 0
        while {elem < 5} do {
            oneToFive.at (elem) put (elem + 1)
            elem := elem + 1
        }
        def iter = oneToFive.iterator
        while {iter.hasNext} do { accum.add(iter.next) }
        assert (accum) shouldBe (set [1, 2, 3, 4, 5])
        assert {iter.next} shouldRaise (IteratorExhausted)
            mentioning (oneToFive.asString)
    }
    test "empty do" by {
        def empty = primitiveArray.new 5     // empty, because not initialized
        empty.do { each -> failBecause "found element {each} in empty array" }
        assert true
    }
    test "non-empty do" by {
        def accum = list.empty
        def oneToFive = primitiveArray.new 5
        var elem := 0
        while {elem < 5} do {
            oneToFive.at (elem) put (elem + 1)
            elem := elem + 1
        }
        oneToFive.do { each -> accum.addLast(each) }
        assert (accum) shouldBe [1, 2, 3, 4, 5]
    }
    test "do and iterator agree" by {
        def accum = list.empty
        def sparse = primitiveArray.new 5
        sparse.at 0 put "zero"
        sparse.at 2 put "two"
        sparse.at 4 put "four"
        def iter = sparse.iterator
        sparse.do { each ->
            assert (each) shouldBe (iter.next)
        }
        assert (iter.hasNext) shouldBe false
    }
}

testSuite "primitive array sort" with {

        test "sort initial elements" by {
            def a = primitiveArray.new(6)
            a.at 0 put 17
            a.at 1 put 20
            a.at 2 put 10
            a.at 3 put 5
            a.at 4 put 1
            a.at 5 put 0
            assert (a.asString) shouldBe
                "primitiveArray [6: 17, 20, 10, 5, 1, 0]"
            a.sortInitial 4 by {l, r ->
                if (l == r) then {0} elseif {l < r} then {-1} else {1}
            }
            assert (a.asString) shouldBe
                "primitiveArray [6: 5, 10, 17, 20, ‹undefined›, ‹undefined›]"
        }

        test "sort empty array" by {
            def b = primitiveArray.new(0)
            assert (b.asString) shouldBe "primitiveArray [0: ]"
            b.sortInitial 0 by {l, r ->
                if (l == r) then {0} elseif {l < r} then {-1} else {1}
            }
            assert (b.asString) shouldBe "primitiveArray [0: ]"
        }

        test "sort strings" by {
            def c = primitiveArray.new(9)
            c.at 0 put "a"
            c.at 1 put "w"
            c.at 2 put "q"
            c.at 3 put "b"
            c.at 4 put "d"
            c.at 5 put "z"
            c.at 6 put "t"
            assert (c.asString) shouldBe
                "primitiveArray [9: a, w, q, b, d, z, t, ‹undefined›, ‹undefined›]"
            c.sortInitial 7 by {l, r ->
                if (l == r) then {0} elseif {l.ord < r.ord} then {-1} else {1}
            }
            assert(c.asDebugString) shouldBe
                "primitiveArray [9: \"a\", \"b\", \"d\", \"q\", \"t\", \"w\", \"z\", ‹undefined›, ‹undefined›]"
        }

        test "type error in comparison" by {
            def a = primitiveArray.new(6)
            a.at 0 put 17
            a.at 1 put 20
            a.at 2 put 10
            a.at 3 put 5
            a.at 4 put 1
            a.at 5 put 0
            def badSortBlock = {l, r ->
                if (l == r) then {"equal"}
                    elseif {l < r} then {"less"}
                    else {"greater"}
            }
            assert {a.sortInitial 6 by (badSortBlock)}
                shouldRaise (TypeError)
                mentioning "compare block" and "did not return a Number"
        }
}

exit
