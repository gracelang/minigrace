dialect "standard"
import "gUnit" as gU
import "collections" as collections

trait sequenceTest {
    class forMethod(m) {
        inherit gU.testCaseNamed(m)

        var oneToFive
        var evens
        var empty

        method sequenceUnderTestWithAll⟦T⟧ (elems) {
            collections.sequence⟦T⟧.withAll (elems)
        }
        method sequenceUnderTestWith⟦T⟧ (elem) {
            collections.sequence⟦T⟧.with (elem)
        }
        method sequenceUnderTestEmpty { collections.sequence.empty }

        method setup {
            oneToFive := sequenceUnderTestWithAll⟦Number⟧ [1, 2, 3, 4, 5]
            evens := sequenceUnderTestWithAll⟦Number⟧ [2, 4, 6, 8]
            empty := sequenceUnderTestEmpty
        }

        method testSequenceTypeCollection {
            def witness = sequenceUnderTestWithAll⟦Number⟧ [1,3]
            assert (witness) hasType (Collection⟦Number⟧)
        }
        method testSequenceTypeSequence {
            def witness = sequenceUnderTestWithAll⟦Number⟧ [1,3]
            assert (witness) hasType (Sequence⟦Number⟧)
        }
        method testSequenceTypeEnumerable {
            def witness = sequenceUnderTestWithAll⟦Number⟧ [1,3]
            assert (witness) hasType (Enumerable⟦Number⟧)
        }
        method testEmptySequenceTypeCollection {
            def witness = sequenceUnderTestEmpty
            assert (witness) hasType (Collection)
        }
        method testEmptySequenceTypeSequence {
            def witness = sequenceUnderTestEmpty
            assert (witness) hasType (Sequence)
        }
        method testEmptySequenceTypeEnumerable {
            def witness = sequenceUnderTestEmpty
            assert (witness) hasType (Enumerable)
        }
        method testSingletonSequenceTypeSequence {
            def witness = sequenceUnderTestWith "a word"
            assert (witness) hasType (Sequence)
        }
        method testFilteredSequenceTypeEnumerable {
            def witness = sequenceUnderTestWithAll⟦Number⟧ [1,3].filter{x -> true}
            assert (witness) hasType (Enumerable⟦Number⟧)
        }
        method testSequenceNotTypeWithWombat {
            def witness = sequenceUnderTestWithAll⟦Number⟧ [1,3]
            deny (witness) hasType (Collection⟦Number⟧ & interface { wombat })
        }
        method testSequenceSize {
            assert(oneToFive.size) shouldBe 5
            assert(empty.size) shouldBe 0
            assert(evens.size) shouldBe 4
        }
        method testSingletonSequenceSize {
            def singletonSeq = sequenceUnderTestWith "a word"
            assert (singletonSeq.size) shouldBe 1
        }
        method testSequenceEmptyDo {
            empty.do {each -> failBecause "empty sequence.do did with {each}"}
            assert(true)
        }

        method testSequenceEqualityEmpty {
            assert(empty == sequenceUnderTestEmpty) description "empty sequence ≠ itself!"
            assert(empty == list.empty) description "empty sequence ≠ empty list"
        }

        method testSequenceInequalityEmpty {
            deny(empty == sequenceUnderTestWithAll [1])
            assert(empty != sequenceUnderTestWithAll [1])
            deny(empty == 3)
            deny(empty == evens)
        }

        method testSequenceInequalityFive {
            deny(oneToFive == sequenceUnderTestWithAll [1, 2, 3, 4, 6])
            assert(oneToFive != sequenceUnderTestWithAll [1, 2, 3, 4, 6])
        }

        method testSequenceEqualityFive {
            def isEqual = (oneToFive == sequenceUnderTestWithAll [1, 2, 3, 4, 5])
            assert(isEqual)
            deny(oneToFive != sequenceUnderTestWithAll [1, 2, 3, 4, 5])
        }

        method testSequenceOneToFiveDo {
            var element := 1
            oneToFive.do { each ->
                assert (each) shouldBe (element)
                element := element + 1
            }
        }
        method testPipeIntoSequenceFactory {
            def witness = (list.withAll [1, 2, 3]) >> sequence
            assert (witness) hasType (Sequence)
            assert (witness) shouldBe [1, 2, 3]
            deny {witness.at 1 put 2} hasType (List)
        }
        method testPipeIntoExistingSequence {
            def witness = (list.withAll [1, 2, 3]) >> evens
            assert (witness) hasType (Sequence)
            assert (witness) shouldBe [2, 4, 6, 8, 1, 2, 3]
            deny {witness.at 1 put 2} hasType (List)
        }
        method testSequenceContains {
            assert (oneToFive.contains(1)) description "oneToFive does not contain 1"
            assert (oneToFive.contains(5)) description "oneToFive does not contain 5"
            deny (oneToFive.contains(0)) description "oneToFive contains 0"
            deny (oneToFive.contains(6)) description "oneToFive contains 6"
        }
        method testSequnceIncludes {
            assert (oneToFive.includes { x -> (x/2).isEven })
                description "oneToFive does not include 4"
            deny (empty.includes {_ -> true})
                description "empty includes something!"
            deny (oneToFive.includes {x -> x > 5})
                description "oneToFive includes an element grreater than 5"
            deny (oneToFive.includes { x -> x == 6 }) description "oneToFive includes 6"
        }
        method testSequenceFirst {
            assert{empty.first} shouldRaise (BoundsError)
            assert(evens.first) shouldBe (2)
            assert(oneToFive.first) shouldBe (1)
        }

        method testSequenceAt {
            assert {empty.at(1)} shouldRaise (BoundsError)
            assert (oneToFive.at(1)) shouldBe (1)
            assert (oneToFive.at(1)) shouldBe (1)
            assert (oneToFive.at(5)) shouldBe (5)
            assert (evens.at(4)) shouldBe (8)
        }

        method testSequenceAtIfAbsent {
            def naN = "fff".asNumber
            var n := empty.at 1 ifAbsent { 7 }
            assert (n) shouldBe 7
            n := oneToFive.at 1.5 ifAbsent { 10 }
            assert (n) shouldBe 10
            n := oneToFive.at 6 ifAbsent { 12 }
            assert (n) shouldBe 12
            oneToFive.at 6 ifAbsent { n := 16 }
            assert (n) shouldBe 16
            oneToFive.at (naN) ifAbsent { n := 20 }
            assert (n) shouldBe 20
        }

        method testSequenceBoundsError {
            def naN = "fff".asNumber
            assert {evens.at(5)} shouldRaise (BoundsError) mentioning "5"
            assert {evens.at(naN)} shouldRaise (BoundsError) mentioning "NaN"
            assert {evens.at(infinity)} shouldRaise (BoundsError) mentioning "infinity"
            assert {evens.at (1/3)} shouldRaise (BoundsError) mentioning "not an integer"
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
            assert(oneToFive ++ evens) shouldBe(sequenceUnderTestWithAll [1, 2, 3, 4, 5, 2, 4, 6, 8])
            assert(evens ++ oneToFive) shouldBe(sequenceUnderTestWithAll [2, 4, 6, 8, 1, 2, 3, 4, 5])
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
            sequenceUnderTestWithAll [1].do { each -> assert(each)shouldBe(1) }
                separatedBy { s := "kilroy" }
            assert (s) shouldBe ("nothing")
        }

        method testSequenceKeysAndValuesDo {
            def accum = dictionary.empty
            var n := 1
            evens.keysAndValuesDo { k, v ->
                accum.at(k)put(v)
                assert (accum.size) shouldBe (n)
                n := n + 1
            }
            assert(accum) shouldBe (dictionary [1::2, 2::4, 3::6, 4::8])
        }

        method testSequenceReversedOneToFive {
            assert (oneToFive.reversed) shouldBe (sequenceUnderTestWithAll [5, 4, 3, 2, 1])
        }

        method testSequenceReversedEvens {
            assert (evens.reversed) shouldBe (sequenceUnderTestWithAll [8, 6, 4, 2])
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
            assert (empty.map{x -> x * x} >> list) shouldBe (list.empty)
        }

        method testSequenceMapEvens {
            assert(evens.map{x -> x + 1} >> list) shouldBe (list [3, 5, 7, 9])
        }

        method testSequenceMapEvensInto {
            assert(evens.map{x -> x + 10} >> evens >> list)
                shouldBe (list [2, 4, 6, 8, 12, 14, 16, 18])
        }

        method testSequenceFilterNone {
            deny(oneToFive.filter{x -> false}.iterator.hasNext)
        }

        method testSequenceFilterEmpty {
            assert(empty.filter{x -> (x % 2) == 1}.isEmpty)
        }

        method testSequenceFilterOdd {
            assert(oneToFive.filter{x -> (x % 2) == 1} >> list)
                shouldBe (list [1, 3, 5])
        }

        method testSequenceMapAndFilter {
            assert(oneToFive.map{x -> x + 10}.filter{x -> (x % 2) == 1} >> list)
                shouldBe (list [11, 13, 15])
        }
        method testSequenceToSetDuplicates {
            def theSet = set.withAll(sequenceUnderTestWithAll [1,1,2,2,4])
            assert (theSet) shouldBe (set.withAll [1, 2, 4])
            assert (theSet) hasType (Set)
        }
        method testSequenceIteratorEmpty {
            deny (empty.iterator.hasNext)
                description "empty iterator has an element"
        }
        method testSequenceIteratorEmptyRaisesException {
            assert {empty.iterator.next} shouldRaise (IteratorExhausted)
                mentioning "[]"
        }
        method testSequenceIteratorNonEmpty {
            def accum = set.empty
            def iter = oneToFive.iterator
            while {iter.hasNext} do { accum.add(iter.next) }
            assert (accum) shouldBe (set [1, 2, 3, 4, 5])
            assert {iter.next} shouldRaise (IteratorExhausted)
                mentioning (oneToFive.asString)
        }
        method testSequenceIteratorToSetDuplicates {
            def accum = set.empty
            def iter = sequenceUnderTestWithAll [1, 1, 2, 2, 4].iterator
            while {iter.hasNext} do { accum.add(iter.next) }
            assert (accum) shouldBe (set [1, 2, 4])
        }
        method testSequenceSorted {
            def input = sequenceUnderTestWithAll [5, 3, 11, 7, 2]
            def output = input.sorted
            assert (output) shouldBe (sequenceUnderTestWithAll [2, 3, 5, 7, 11])
            assert (output.asString.startsWith (sequenceUnderTestEmpty.asString.first)) description
                ".sorted does not look like a sequence"
            assert (output) hasType (Sequence)
        }
        method testSequenceSortedBy {
            def input = sequenceUnderTestWithAll [5, 3, 11, 7, 2]
            def output = input.sortedBy {l, r ->
                if (l == r) then {0}
                    elseif {l < r} then {1}
                    else {-1}
            }
            assert (input) shouldBe (sequenceUnderTestWithAll [5, 3, 11, 7, 2])
            assert (output) shouldBe (sequenceUnderTestWithAll [11, 7, 5, 3, 2])
            assert (output.asString.startsWith (sequenceUnderTestEmpty.asString.first)) description
                "sorted does not look like a sequence"
            assert (output) hasType (Sequence)
        }
        method testSequenceLazyConcat {
            def s1 = oneToFive.filter{x -> (x % 2) == 1}
            def s2 = evens.filter{x -> true}
            assert(s1 ++ s2) shouldBe (sequenceUnderTestWithAll [1, 3, 5, 2, 4, 6, 8])
        }
        method testSequenceExplicitLazyConcat {
            def oneToFour = sequenceUnderTestWithAll (collections.lazyConcatenation([1,2], [3,4]))
            assert (oneToFour) shouldBe (1..4)
        }
        method testSequenceMultipleConcat {
            def oneToTwelve = sequenceUnderTestWithAll ((1..2) ++ (3..4) ++ (5..8) ++ (9..12))
            assert (oneToTwelve) shouldBe (1..12)
        }
    }
}
