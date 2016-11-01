dialect "minitest"
import "typeComparison" as tc

testSuite {
    test "missing — List and sequence" by {
        assert (tc.methodsIn (List) missingFrom (sequence [1, 2])) shouldBe
            "add(_), addAll(_), addAllFirst(_), addFirst(_), addLast(_), at(_)put(_), clear, copy, pop, remove(_), remove(_)ifAbsent(_), removeAll(_), removeAll(_)ifAbsent(_), removeAt(_), removeFirst, removeLast, reverse, sort, sortBy(_)"
    }

    test "missing — Sequence and string" by {
        assert (tc.methodsIn (Sequence) missingFrom "x") shouldBe
            "asDictionary, into(_), reversed, sorted, sortedBy(_), values"
    }

    test "coverage – false and Iterable" by {
        assert(tc.protocolOf (false) notCoveredBy (Object)) shouldBe
            "&&(_), &(_), ==(_), hash, isMe(_), match(_), not, prefix!, |(_), ||(_)"
    }
    test "coverage – done and Object" by {
        assert(tc.protocolOf (done) notCoveredBy (Done)) shouldBe ""
    }

    test "canonical abc" by {
        assert(tc.canonical "abc") shouldBe "abc"
    }

    test "canonical abc(3)" by {
        assert(tc.canonical "abc(3)") shouldBe "abc(_,_,_)"
    }

    test "canonical abc(3)efg(1)" by {
        assert(tc.canonical "abc(3)efg(1)") shouldBe "abc(_,_,_)efg(_)"
    }

}
