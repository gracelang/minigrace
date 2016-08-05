dialect "minitest"
import "typeComparison" as tc

testSuite {
    test "missing — List and lineup" by {
        assert (tc.methodsIn (List) missingFrom [1, 2]) shouldBe
            "add(1), addAll(1), addAllFirst(1), addFirst(1), addLast(1), asDictionary, asList, asSequence, asSet, at(1), at(1)put(1), contains(1), copy, indexOf(1), indexOf(1)ifAbsent(1), indices, into(1), keys, keysAndValuesDo(1), last, pop, remove(1), remove(1)ifAbsent(1), removeAll(1), removeAll(1)ifAbsent(1), removeAt(1), removeFirst, removeLast, reverse, reversed, sort, sortBy(1), sorted, sortedBy(1), values"
    }

    test "missing — Sequence and string" by {
        assert (tc.methodsIn (Sequence) missingFrom "x") shouldBe
            "asDictionary, asList, asSequence, asSet, basicAsString, do(1)separatedBy(1), into(1), keys, reversed, sorted, sortedBy(1), values"
    }

    test "coverage – [] and Iterable" by {
        assert(tc.protocolOf (list []) notCoveredBy (Iterable)) shouldBe
            "==(1), add(1), addAll(1), addAllFirst(1), addFirst(1), addLast(1), asDictionary, asList, asSequence, asSet, at(1), at(1)put(1), boundsCheck(1), contains(1), copy, do, expandTo(1), fifth, fourth, indexOf(1), indexOf(1)ifAbsent(1), indices, initialSize, inner, inner:=(1), into(1), isMe(1), iter, keys, keysAndValuesDo(1), last, mods, mods:=(1), pop, push(1), reduce(2), remove(1), remove(1)ifAbsent(1), removeAll(1), removeAll(1)ifAbsent(1), removeAt(1), removeFirst, removeLast, reverse, reversed, second, size:=(1), sizeCertain, sizeCertain:=(1), sort, sortBy(1), sorted, sortedBy(1), third, values"
    }
    test "coverage – done and Object" by {
        assert(tc.protocolOf (done) notCoveredBy (Done)) shouldBe ""
    }
}
