dialect "standard"
"import "gUnit" as gU

trait rangeTest {
    class forMethod(m) {
        inherit gU.testCaseNamed(m)

        def rangeUp = range.from 3 to 6
        def rangeDown = range.from 10 downTo 7
        def emptyUp = range.from 5 to 4
        def emptyDown = range.from 7 downTo 8
        def singleUp = range.from 4 to 4
        def singleDown = range.from 7 downTo 7

        method testRangeTypeCollection {
            def witness = range.from 1 to 6
            assert (witness) hasType (Collection⟦Number⟧)
        }
        method testRangeTypeSequence {
            def witness = range.from 1 to 6
            assert (witness) hasType (Sequence⟦Number⟧)
        }
        method testRangeTypeEnumerable {
            def witness = range.from 1 to 6
            assert (witness) hasType (Enumerable⟦Number⟧)
        }
        method testRangeTypeNotTypeWithWombat {
            def witness = range.from 1 to 6
            deny (witness) hasType (Collection⟦Number⟧ & interface { wombat })
        }
        method testDotDotPreconditionUp1 {
            assert {4.5 .. 5} shouldRaise (RequestError)
        }

        method testDotDotPreconditionUp2 {
            assert {4 .. 9.5} shouldRaise (RequestError)
        }

        method testDotDotPreconditionUp3 {
            assert {4 .. "foo"} shouldRaise (TypeError)
        }
        method testRangePreconditionUp1 {
            assert {range.from 4.5 to 5} shouldRaise (RequestError)
        }

        method testRangePreconditionUp2 {
            assert {range.from 4 to 9.5} shouldRaise (RequestError)
        }

        method testRangePreconditionUp3 {
            assert {range.from 4 to "foo"} shouldRaise (RequestError)
        }

        method testRangePreconditionDown1 {
            assert {range.from 4 downTo 1.5} shouldRaise (RequestError)
        }

        method testRangePreconditionDown2 {
            assert {range.from 4 downTo 1.5} shouldRaise (RequestError)
        }

        method testRangePreconditionDown3 {
            assert {range.from 4.5 downTo "foo"} shouldRaise (RequestError)
        }

        method testRangeSizesUp {
            assert (rangeUp.size) shouldBe (4)
            assert (emptyUp.size) shouldBe (0)
            assert (singleUp.size) shouldBe (1)
        }
        method testRangeSizesDown {
            assert (rangeDown.size) shouldBe (4)
            assert (emptyDown.size) shouldBe (0)
            assert (singleDown.size) shouldBe (1)
        }
        method testRangeUpContainsIn {
            assert (rangeUp.contains 3) description "{rangeUp} doesn't contain 3"
            assert (rangeUp.contains 4) description "{rangeUp} doesn't contain 4"
            assert (rangeUp.contains 5) description "{rangeUp} doesn't contain 5"
            assert (rangeUp.contains 6) description "{rangeUp} doesn't contain 6"
        }
        method testRangeUpContainsOut {
            deny (rangeUp.contains 2) description "{rangeUp} contains 2"
            deny (rangeUp.contains 7) description "{rangeUp} contains 7"
            deny (rangeUp.contains 5.5) description "{rangeUp} contains 5.5"
            deny (rangeUp.contains "foo") description "{rangeUp} contains \"foo\""
        }
        method testRangeElementsUp {
            def elements = list.empty
            for (rangeUp) do {each -> elements.add(each)}
            assert (elements) shouldBe (list [3, 4, 5, 6])
            assert (list.withAll(rangeUp)) shouldBe (list [3, 4, 5, 6])
        }
        method testRangeElementsUpWithFold {
            def elements = rangeUp.fold {acc, each -> acc.add(each)}
                startingWith (list.empty)
            assert (elements) shouldBe (list [3, 4, 5, 6])
        }
        method testRangeUpFold {
            def sum = rangeUp.fold {acc, each -> acc + each} startingWith 0
            assert (sum) shouldBe 18
        }
        method testRangeDownContainsIn {
            assert (rangeDown.contains 10) description "{rangeDown} doesn't contain 10"
            assert (rangeDown.contains 9) description "{rangeDown} doesn't contain 9"
            assert (rangeDown.contains 8) description "{rangeDown} doesn't contain 8"
            assert (rangeDown.contains 7) description "{rangeDown} doesn't contain 7"
        }
        method testRangeDownContainsOut {
            deny (rangeDown.contains 6) description "{rangeDown} contains 6"
            deny (rangeDown.contains 11) description "{rangeDown} contains 11"
            deny (rangeDown.contains 5.5) description "{rangeDown} contains 5.5"
            deny (rangeDown.contains "foo") description "{rangeDown} contains \"foo\""
        }

        method testRangeElementsDown {
            def elements = list.empty
            for (rangeDown) do {each -> elements.add(each)}
            assert (elements) shouldBe (list [10, 9, 8, 7])
        }
        method testRangeElementsEmptyUp {
            def elements = list.empty
            for (emptyUp) do {each -> elements.add(each)}
            assert (elements) shouldBe (list.empty)
        }
        method testRangeElementsEmptyDown {
            def elements = list.empty
            for (emptyDown) do {each -> elements.add(each)}
            assert (elements) shouldBe (list.empty)
        }
        method testRangeElementsSingletonUp {
            def elements = list.empty
            for (singleUp) do {each -> elements.add(each)}
            assert (elements) shouldBe (list [4])
        }
        method testRangeElementsSingletonDown {
            def elements = list.empty
            for (singleDown) do {each -> elements.add(each)}
            assert (elements) shouldBe (list [7])
        }
        method testRangeElementsDoUp {
            def elements = list.empty
            (rangeUp).do {each -> elements.add(each)}
            assert (elements) shouldBe (list [3, 4, 5, 6])
        }
        method testRangeKeysAndValues {
            var s := ""
            rangeUp.keysAndValuesDo { k, v -> s := s ++ "{k}::{v} " }
            assert (s) shouldBe "1::3 2::4 3::5 4::6 "
        }
        method testRangeUpKeysAndValuesEmpty {
            var s := ""
            emptyUp.keysAndValuesDo { k, v -> s := s ++ "{k}::{v} " }
            assert (s) shouldBe ""
        }
        method testRangeElementsDoDown {
            def elements = list.empty
            (rangeDown).do {each -> elements.add(each)}
            assert (elements) shouldBe (list [10, 9, 8, 7])
        }
        method testRangeKeysAndValuesDown {
            var s := ""
            rangeDown.keysAndValuesDo { k, v -> s := s ++ "{k}::{v} " }
            assert (s) shouldBe "1::10 2::9 3::8 4::7 "
        }
        method testRangeDownKeysAndValuesEmpty {
            var s := ""
            emptyDown.keysAndValuesDo { k, v -> s := s ++ "{k}::{v} " }
            assert (s) shouldBe ""
        }
        method testRangeUpReverse {
            assert (rangeUp.reversed) shouldBe (range.from(6)downTo(3))
        }
        method testRangeFilterExhausted {
            def rangeFiltered = rangeUp.filter{each -> each > 10}
            def rangeFilteredIterator = rangeFiltered.iterator
            assert(rangeFilteredIterator) hasType (Iterator)
            deny(rangeFilteredIterator.hasNext) description "empty rangeFilteredIterator hasNext!"
            assert{rangeFilteredIterator.next} shouldRaise (IteratorExhausted)
        }
        method testRangeFilterEmptyList {
            assert (rangeUp.filter{each -> each > 10} >> list) shouldBe (list.empty)
        }
        method testRangeFilterEmpty {
            assert (rangeUp.filter{each -> each > 10}.isEmpty)
                description "range filter by an everywhere-false predicate isn't empty"
        }
        method testRangeDownReverse {
            assert (rangeDown.reversed) shouldBe (range.from(7)to(10))
        }
        method testRangeEqualityWithList {
            assert(rangeDown == list [10,9,8,7])
                description "range.from 10 downTo 7 ≠ list [10, 9, 8 ,7]"
            assert(emptyUp == list.empty)
                description "The empty range was not equal to the empty list"
        }
        method testRangeInequalityWithNumber {
            deny(rangeDown == 7) description ("rangeDown == 7")
        }
        method testRangeInequalityWithList {
            assert(rangeDown != []) description("Failed trying the empty list")
            assert(rangeDown != [3,4,5])
                description("Range = list with a different size.")
            assert(rangeDown != [10,9,8,5])
                description("Range = list with different contents")
        }
        method testRangeDownAt {
            def naN = "foo".asNumber
            assert(rangeDown.at(1)) shouldBe 10
            assert(rangeDown.at(2)) shouldBe 9
            assert(rangeDown.at(3)) shouldBe 8
            assert(rangeDown.at(4)) shouldBe 7
            assert{rangeDown.at(5)} shouldRaise (BoundsError)
            assert{rangeDown.at(0)} shouldRaise (BoundsError)
            assert{rangeDown.at(naN)} shouldRaise (BoundsError)
        }
        method testRangeUpAt {
            def naN = "foo".asNumber
            assert(rangeUp.at(1)) shouldBe 3
            assert(rangeUp.at(2)) shouldBe 4
            assert(rangeUp.at(3)) shouldBe 5
            assert(rangeUp.at(4)) shouldBe 6
            assert{rangeUp.at(5)} shouldRaise (BoundsError)
            assert{rangeUp.at(0)} shouldRaise (BoundsError)
            assert{rangeUp.at(naN)} shouldRaise (BoundsError)
        }
        method testRangeUpAtIfAbsent {
            def naN = "foo".asNumber
            assert(rangeUp.at 5 ifAbsent { 22 }) shouldBe 22
            assert(rangeUp.at 0 ifAbsent { 23 }) shouldBe 23
            assert(rangeUp.at(naN) ifAbsent { 24 }) shouldBe 24
        }
        method testRangeDownAtIfAbsent {
            def naN = "foo".asNumber
            assert(rangeDown.at 5 ifAbsent { 22 }) shouldBe 22
            assert(rangeDown.at 0 ifAbsent { 23 }) shouldBe 23
            assert(rangeDown.at(naN) ifAbsent { 24 }) shouldBe 24
        }
        method testHashRangeUp {
            assert (rangeUp.hash) shouldBe (sequence(rangeUp).hash)
        }
        method testHashRangeDown {
            assert (rangeDown.hash) shouldBe (sequence(rangeDown).hash)
        }
        method testHashesDiffer {
            assert (rangeDown.hash) shouldntBe (rangeUp.hash)
        }
    }
}
