import "gUnit" as gU

def lineUpTest = object {
    class forMethod(m) {
        inherit gU.testCaseNamed(m)

        var oneToFive
        var evens
        var empty

        method setup {
            oneToFive := [1, 2, 3, 4, 5]
            evens := [2, 4, 6, 8]
            empty := [ ]
        }

        method testSequenceTypeCollection {
            def witness = sequence⟦Number⟧ [1,3]
            assert (witness) hasType (Collection⟦Number⟧)
        }
        method testSequenceTypeSequence {
            def witness = [1,3]
            assert (witness) hasType (Sequence⟦Number⟧)
        }
        method testSequenceTypeEnumerable {
            def witness = [1,3]
            assert (witness) hasType (Enumerable⟦Number⟧)
        }
        method testEmptySequenceTypeCollection {
            def witness = emptySequence
            assert (witness) hasType (Collection)
        }
        method testEmptySequenceTypeSequence {
            def witness = emptySequence
            assert (witness) hasType (Sequence)
        }
        method testEmptySequenceTypeEnumerable {
            def witness = emptySequence
            assert (witness) hasType (Enumerable)
        }
        method testSingletonSequenceTypeSequence {
            def witness = sequence.with "a word"
            assert (witness) hasType (Sequence)
        }
        method testFilteredSequenceTypeEnumerable {
            def witness = [1,3].filter{x -> true}
            assert (witness) hasType (Enumerable⟦Number⟧)
        }
        method testSequenceNotTypeWithWombat {
            def witness = [1,3]
            deny (witness) hasType (Collection⟦Number⟧ & interface { wombat })
        }
        method testSequenceSize {
            assert(oneToFive.size) shouldBe 5
            assert(empty.size) shouldBe 0
            assert(evens.size) shouldBe 4
        }
        method testSingletonSequenceSize {
            def singletonSeq = sequence.with "a word"
            assert (singletonSeq.size) shouldBe 1
        }
        method testSequenceEmptyDo {
            empty.do {each -> failBecause "emptySequence.do did with {each}"}
            assert(true)
        }

        method testSequenceEqualityEmpty {
            assert(empty == emptySequence) description "empty sequence ≠ itself!"
            assert(empty == emptyList) description "empty sequence ≠ empty list"
        }

        method testSequenceHashEmpty {
            assert(empty.hash == [].hash) description "empty lineup hash ≠ [] hash"
            assert(empty.hash == sequence.empty.hash) description "empty lineup hash ≠ empty sequence hash"
        }

        method testSequenceHashNonEmpty {
            assert(oneToFive.hash == [1, 2, 3, 4, 5].hash) description "1 to 5 hash ≠ [1..5] hash"
        }

        method testLineUpHashAndSequenceHash {
            def one = [1]
            def oneSeq = sequence.withAll(one)
            assert(one.hash == oneSeq.hash) description "[1].hash = {one.hash}, but {oneSeq}.hash = {oneSeq.hash}"
        }

        method testSequenceHashEqualsRangeHash {
            assert(oneToFive) shouldBe (1..5)
            assert(oneToFive.hash) shouldBe ((1..5).hash)
        }

        method testSequenceInequalityEmpty {
            deny(empty == [1])
            assert(empty != [1])
            deny(empty == 3)
            deny(empty == evens)
        }

        method testSequenceInequalityFive {
            deny(oneToFive == [1, 2, 3, 4, 6])
            assert(oneToFive != [1, 2, 3, 4, 6])
        }

        method testSequenceEqualityFive {
            def isEqual = (oneToFive == [1, 2, 3, 4, 5])
            assert(isEqual)
            deny(oneToFive != [1, 2, 3, 4, 5])
        }

        method testSequenceOneToFiveDo {
            var element := 1
            oneToFive.do { each ->
                assert (each) shouldBe (element)
                element := element + 1
            }
        }
        method testSequenceContains {
            assert (oneToFive.contains(1)) description "oneToFive does not contain 1"
            assert (oneToFive.contains(5)) description "oneToFive does not contain 5"
            deny (oneToFive.contains(0)) description "oneToFive contains 0"
            deny (oneToFive.contains(6)) description "oneToFive contains 6"
        }

        method testSequenceFirst {
            assert{empty.first} shouldRaise (BoundsError)
            assert(evens.first) shouldBe (2)
            assert(oneToFive.first) shouldBe (1)
        }

        method testSequenceAt {
            def naN = "fff".asNumber
            assert {empty.at(1)} shouldRaise (BoundsError)
            assert (oneToFive.at(1)) shouldBe (1)
            assert (oneToFive.at(1)) shouldBe (1)
            assert (oneToFive.at(5)) shouldBe (5)
            assert (evens.at(4)) shouldBe (8)
            assert {evens.at(5)} shouldRaise (BoundsError)
            assert {evens.at(naN)} shouldRaise (BoundsError)
            assert {evens.at "fff"} shouldRaise (TypeError)
        }

        method testSequenceOrdinals {
            assert {empty.first} shouldRaise (BoundsError)
            assert (oneToFive.first) shouldBe (1)
            assert (oneToFive.second) shouldBe (2)
            assert (oneToFive.third) shouldBe (3)
            assert (evens.fourth) shouldBe (8)
            assert {evens.fifth} shouldRaise (BoundsError)
        }

        method testSequenceConcatWithEmpty {
            assert(empty ++ oneToFive)shouldBe(oneToFive)
            assert(oneToFive ++ empty)shouldBe(oneToFive)
        }

        method testSequenceConcatWithNonEmpty {
            assert(oneToFive ++ evens) shouldBe([1, 2, 3, 4, 5, 2, 4, 6, 8])
            assert(evens ++ oneToFive) shouldBe([2, 4, 6, 8, 1, 2, 3, 4, 5])
        }

        method testSequenceIndicesAndKeys {
            def seq = oneToFive ++ evens
            def totalSize = oneToFive.size + evens.size
            assert (seq.indices) shouldBe (1..totalSize)
            assert (seq.indices) shouldBe (seq.keys)
        }

        method testSequenceFold {
            assert(oneToFive.fold{a, each -> a + each}startingWith(0))shouldBe(15)
            assert(evens.fold{a, each -> a + each}startingWith(0))shouldBe(20)
            assert(empty.fold{a, each -> a + each}startingWith(17))shouldBe(17)
        }

        method testSequenceDoSeparatedBy {
            var s := ""
            evens.do { each -> s := s ++ each.asString } separatedBy { s := s ++ ", " }
            assert (s) shouldBe ("2, 4, 6, 8")
        }

        method testSequenceDoSeparatedByEmpty {
            var s := "nothing"
            empty.do { failBecause "do did when sequence is empty" }
                separatedBy { s := "kilroy" }
            assert (s) shouldBe ("nothing")
        }

        method testSequenceDoSeparatedBySingleton {
            var s := "nothing"
            [1].do { each -> assert(each)shouldBe(1) }
                separatedBy { s := "kilroy" }
            assert (s) shouldBe ("nothing")
        }

        method testSequenceKeysAndValuesDo {
            def accum = emptyDictionary
            var n := 1
            evens.keysAndValuesDo { k, v ->
                accum.at(k)put(v)
                assert (accum.size) shouldBe (n)
                n := n + 1
            }
            assert(accum) shouldBe (dictionary [1::2, 2::4, 3::6, 4::8])
        }

        method testSequenceReversedOneToFive {
            assert (oneToFive.reversed) shouldBe ([5, 4, 3, 2, 1])
        }

        method testSequenceReversedEvens {
            assert (evens.reversed) shouldBe ([8, 6, 4, 2])
            assert (evens.reversed.reversed) shouldBe (evens)
        }

        method testSequenceReversedEmpty {
            assert (empty.reversed) shouldBe (empty)
        }

        method testSequenceAsStringNonEmpty {
            assert (evens.asString) shouldBe ("[2, 4, 6, 8]")
        }

        method testSequenceAsStringEmpty {
            assert (empty.asString) shouldBe ("[]")
        }

        method testSequenceMapEmpty {
            assert (empty.map{x -> x * x} >> emptyList) shouldBe (emptyList)
        }

        method testSequenceMapEvens {
            assert(evens.map{x -> x + 1} >> emptyList)
                shouldBe (list [3, 5, 7, 9])
        }

        method testSequenceMapEvensFlow {
            assert(evens.map{x -> x + 10} >> list.withAll (evens))
                shouldBe (list [2, 4, 6, 8, 12, 14, 16, 18])
        }

        method testSequenceFilterNone {
            deny(oneToFive.filter{x -> false}.iterator.hasNext)
        }

        method testSequenceFilterEmpty {
            assert(empty.filter{x -> (x % 2) == 1}.isEmpty)
        }

        method testSequenceFilterOdd {
            assert(oneToFive.filter{x -> (x % 2) == 1} >> emptyList)
                shouldBe (list [1, 3, 5])
        }

        method testSequenceMapAndFilter {
            assert(oneToFive.map{x -> x + 10}.filter{x -> (x % 2) == 1} >> list)
                shouldBe (list [11, 13, 15])
        }
        method testSequenceToSetDuplicates {
            def theSet = set.withAll([1,1,2,2,4])
            assert (theSet) shouldBe (set.withAll [1, 2, 4])
            assert (theSet) hasType (Set)
        }
        method testSequenceIteratorEmpty {
            deny (empty.iterator.hasNext)
                description "empty iterator has an element"
        }
        method testSequenceIteratorNonEmpty {
            def accum = emptySet
            def iter = oneToFive.iterator
            while {iter.hasNext} do { accum.add(iter.next) }
            assert (accum) shouldBe (set [1, 2, 3, 4, 5])
        }
        method testSequenceIteratorToSetDuplicates {
            def accum = emptySet
            def iter = [1, 1, 2, 2, 4].iterator
            while {iter.hasNext} do { accum.add(iter.next) }
            assert (accum) shouldBe (set [1, 2, 4])
        }
        method testSequenceSorted {
            def input = [5, 3, 11, 7, 2]
            def output = input.sorted
            assert (output) shouldBe [2, 3, 5, 7, 11]
            assert (output.asString.startsWith (sequence.empty.asString.first)) description
                ".sorted does not look like a sequence; it starts with {output.asString.first}"
            assert (output) hasType (Sequence)
        }
        method testSequenceSortedBy {
            def input = [5, 3, 11, 7, 2]
            def output = input.sortedBy {l, r ->
                if (l == r) then {0}
                    elseif {l < r} then {1}
                    else {-1}
            }
            assert (input) shouldBe ([5, 3, 11, 7, 2])
            assert (output) shouldBe ([11, 7, 5, 3, 2])
            assert (output.asString.startsWith (sequence.empty.asString.first)) description
                "sorted does not look like a sequence; it starts with {output.asString.first}"
            assert (output) hasType (Sequence)
        }
        method testSequenceLazyConcat {
            def s1 = oneToFive.filter{x -> (x % 2) == 1}
            def s2 = evens.filter{x -> true}
            assert(s1 ++ s2) shouldBe ([1, 3, 5, 2, 4, 6, 8])
        }
        method testSequenceMultipleConcat {
            def oneToTwelve = [1,2] ++ [3,4] ++ [5,6,7,8] ++ [9,10,11,12]
            assert (oneToTwelve) shouldBe (1..12)
        }
    }
}


def lineupTests = gU.testSuite.fromTestMethodsIn(lineUpTest)
lineupTests.runAndPrintResults
