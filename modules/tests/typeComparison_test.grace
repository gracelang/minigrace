dialect "minitest"
import "typeComparison" as tc

testSuite {
    test "missing — List and sequence" by {
        assert (tc.methodsIn (List) missingFrom (sequence [1, 2])) shouldBe
            "add(_), addAll(_), addAllFirst(_), addFirst(_), addLast(_), at(_)put(_), clear, copy, insert(_)at(_), pop, remove(_), remove(_)ifAbsent(_), removeAll(_), removeAll(_)ifAbsent(_), removeAt(_), removeFirst, removeLast, reverse, sort, and sortBy(_)"
    }

    test "missing — Sequence and string" by {
        assert (tc.methodsIn (Sequence) missingFrom "x") shouldBe
            "at(_)ifAbsent(_), reversed, sorted, sortedBy(_), and values"
    }

    test "coverage – false and Object" by {
        assert(tc.protocolOf (false) notCoveredBy (Object)) shouldBe
            "&&(_), ::(_), ==(_), hash, ifFalse(_), ifFalse(_)ifTrue(_), ifTrue(_), ifTrue(_)ifFalse(_), not, prefix!, prefix==, prefix≠, ||(_), and ≠(_)"
    }
    test "coverage – done and Object" by {
        assert(tc.protocolOf (done) notCoveredBy (Done)) shouldBe ""
    }
}

exit
