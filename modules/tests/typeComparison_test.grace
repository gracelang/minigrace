dialect "minitest"
import "typeComparison" as tc
import "mirror" as m

testSuite {
    test "missing — List and sequence" by {
        assert (tc.methodsIn (List) missingFrom (sequence [1, 2])) shouldBe
            "add(_), addAll(_), addAllFirst(_), addFirst(_), addLast(_), at(_)put(_), clear, copy, insert(_)at(_), pop, remove(_), remove(_)ifAbsent(_), removeAll(_), removeAll(_)ifAbsent(_), removeAt(_), removeFirst, removeLast, reverse, sort, and sortBy(_)"
    }

    test "missing — Sequence and string" by {
        assert (tc.methodsIn (Sequence) missingFrom "x") shouldBe
            "at(_)ifAbsent(_), reversed, sorted, sortedBy(_), and values"
    }

    test "coverage – false and Iterable" by {
        assert(tc.protocolOf (false) notCoveredBy (Object)) shouldBe
            "&&(_), &(_), ::(_), ==(_), hash, ifFalse(_), ifFalse(_)ifTrue(_), ifTrue(_), ifTrue(_)ifFalse(_), matches(_), not, prefix!, prefix¬, |(_), ||(_), and ≠(_)"
    }
    test "coverage – done and Object" by {
        assert(tc.protocolOf (done) notCoveredBy (Done)) shouldBe ""
    }

    test "canonical abc" by {
        assert(m.canonicalName "abc") shouldBe "abc"
    }

    test "canonical abc(3)" by {
        assert(m.canonicalName "abc(3)") shouldBe "abc(_,_,_)"
    }

    test "canonical abc(3)efg(1)" by {
        assert(m.canonicalName "abc(3)efg(1)") shouldBe "abc(_,_,_)efg(_)"
    }
    test "numeric abc" by {
        assert(m.numericName "abc") shouldBe "abc"
    }
    test "numeric abc(3)" by {
        assert(m.numericName "abc(_,_,_)") shouldBe "abc(3)"
    }
    test "numeric abc(3)efg(1)" by {
        assert(m.numericName "abc(_,_,_)efg(_)") shouldBe "abc(3)efg(1)"
    }
}

exit
