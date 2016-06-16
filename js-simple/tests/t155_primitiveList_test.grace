#pragma ExtendedLineups
import "gUnit" as gU

def primitiveListTest = object {
    class forMethod(m) {
        inherits gU.testCaseNamed(m)

        def oneToFive = [1, 2, 3, 4, 5]
        def evens = [2, 4, 6, 8]
        def empty = []

        method testListTypeCollection {
            def witness = [1, 2, 3, 4, 5, 6]
            assert (witness) hasType (Collection<Number>)
        }
        method testListTypeIterable {
            def witness = [1, 2, 3, 4, 5, 6]
            assert (witness) hasType (Iterable<Number>)
        }
        method testListSize {
            assert(oneToFive.size) shouldBe 5
            assert(empty.size) shouldBe 0
            assert(evens.size) shouldBe 4
        }

        method testListEmptyDo {
            empty.do {each -> failBecause "emptyList.do did with {each}"}
            assert(true)
        }

        method testListEqualityEmpty {
            assert(empty == emptyList) description "empty list ≠ itself!"
            assert(empty == emptySequence) description "empty list ≠ empty sequence"
        }

        method testListInequalityEmpty {
            deny(empty == list [1])
            assert(empty != list [1])
            deny(empty == 3)
            deny(empty == evens)
        }

        method testListInequalityFive {
            deny(oneToFive == list [1, 2, 3, 4, 6])
            assert(oneToFive != list [1, 2, 3, 4, 6])
        }

        method testListEqualityFive {
            def isEqual = (oneToFive == list [1, 2, 3, 4, 5])
            assert(isEqual)
            deny(oneToFive != list [1, 2, 3, 4, 5])
        }

        method testListOneToFiveDo {
            var element := 1
            oneToFive.do { each ->
                assert (each) shouldBe (element)
                element := element + 1
            }
        }
        method testListContains {
            assert (oneToFive.contains(1)) description "oneToFive does not contain 1"
            assert (oneToFive.contains(5)) description "oneToFive does not contain 5"
            deny (oneToFive.contains(0)) description "oneToFive contains 0"
            deny (oneToFive.contains(6)) description "oneToFive contains 6"
        }
        method testListFirstEmpty {
            assert{empty.first} shouldRaise (BoundsError)
        }
        method testListFirstNonEmpty {
            assert(evens.first) shouldBe (2)
            assert(oneToFive.first) shouldBe (1)
        }
        method testListAt {
            def naN = "foo".asNumber
            assert {empty.at(1)} shouldRaise (BoundsError)
            assert (oneToFive.at(1)) shouldBe (1)
            assert (oneToFive.at(1)) shouldBe (1)
            assert (oneToFive.at(5)) shouldBe (5)
            assert (evens.at(4)) shouldBe (8)
            assert {evens.at(5)} shouldRaise (BoundsError)
            assert {evens.at(naN)} shouldRaise (TypeError)
        }

        method testListOrdinals {
            assert {empty.first} shouldRaise (BoundsError)
            assert (oneToFive.first) shouldBe (1)
            assert (oneToFive.second) shouldBe (2)
            assert (oneToFive.third) shouldBe (3)
            assert (evens.fourth) shouldBe (8)
            assert {evens.fifth} shouldRaise (BoundsError)
        }

        method testListAtPut {
            def naN = "foo".asNumber
            oneToFive.at(1) put (11)
            assert (oneToFive.at(1)) shouldBe (11)
            oneToFive.at(2) put (12)
            assert (oneToFive.at(2)) shouldBe (12)
            assert (oneToFive.at(3)) shouldBe (3)
            assert {evens.at 6 put 10} shouldRaise (BoundsError)
            assert {evens.at 0 put 0} shouldRaise (BoundsError)
            assert {evens.at(naN) put 0} shouldRaise (BoundsError)
            assert (oneToFive.at 2 put 21) shouldBe (oneToFive)
        }

        method testElementAssign {
            def naN = "foo".asNumber
            oneToFive.at 1 put 11
            assert (oneToFive.at(1)) shouldBe 11
            oneToFive.at 2 put 12
            assert (oneToFive.at(2)) shouldBe 12
            assert (oneToFive.at(3)) shouldBe 3
            assert {evens.at(6) put 10} shouldRaise (BoundsError)
            assert {evens.at(0) put 0} shouldRaise (BoundsError)
            assert {evens.at(naN) put 0} shouldRaise (BoundsError)
            assert (assign21at2.asString) shouldBe ([11, 21, 3, 4, 5].asString)
                // equality of primitive lists is object identity, so compare strings
        }
        
        method assign21at2 { oneToFive.at 2 put 21 }

        method testListAtPutExtend {
            assert (empty.at 1 put 99) shouldBe (list [99])
            oneToFive.at 6 put 6
            assert (oneToFive.at 6) shouldBe 6
            oneToFive.at 7 put 7
            assert (oneToFive.at 7) shouldBe 7
            assert (oneToFive) shouldBe (1..7)
        }
        method testListPop {
            assert (oneToFive.pop) shouldBe 5
            assert (oneToFive) shouldBe [1, 2, 3, 4]
        }
        method testListPopEmpty {
            assert {empty.pop} shouldRaise (BoundsError)
        }
        method testListAddLast {
            assert (empty.addLast(9)) shouldBe [9]
            assert (evens.addLast(10)) shouldBe [2, 4, 6, 8, 10]
        }
        method testListAdd {
            assert (empty.add(9)) shouldBe [9]
            assert (evens.add(10)) shouldBe [2, 4, 6, 8, 10]
        }
        method testAddAll {
            assert (evens.addAll(oneToFive)) shouldBe [2, 4, 6, 8, 1, 2, 3, 4, 5]
            assert (evens) shouldBe [2, 4, 6, 8, 1, 2, 3, 4, 5]
        }
        method testAddFirst {
            def l = [ 5 ]
            assert (l.addFirst 4) shouldBe [4, 5]
            assert (l.addFirst 3) shouldBe [3, 4, 5]
            assert (l.addFirst 2) shouldBe [2, 3, 4, 5]
            assert (l.addFirst 1) shouldBe [1, 2, 3, 4, 5]
        }
        method testListRemoveFirst {
            def removed = oneToFive.removeFirst
            assert (removed) shouldBe (1)
            assert (oneToFive.size) shouldBe (4)
            assert (oneToFive) shouldBe [2, 3, 4, 5]
        }
        method testListRemoveValue {
            def l = [3, 5, 7]
            assert (l) shouldBe (list [3, 5, 7])
            l.remove 3
            assert (l) shouldBe (list [5, 7])
            l.remove 5.remove 7
            assert (l) shouldBe (list [ ])
        }
        method testListChaining {
            oneToFive.at(1)put(11).at(2)put(12).at(3)put(13)
            assert(oneToFive.at(1))shouldBe(11)
            assert(oneToFive.at(2))shouldBe(12)
            assert(oneToFive.at(3))shouldBe(13)
        }
        method testListPushAndExpand {
            evens.push(10)
            evens.push(12)
            evens.push(14)
            evens.push(16)
            evens.push(18)
            evens.push(20)
            assert (evens) shouldBe [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
        }

        method testListReversedOneToFive {
            def ofr = oneToFive.reversed
            assert (ofr) shouldBe [5, 4, 3, 2, 1]
            assert (oneToFive) shouldBe [1, 2, 3, 4, 5]
        }

        method testListReversedEvens {
            def er = evens.reversed
            assert (er) shouldBe [8, 6, 4, 2]
            assert (evens) shouldBe [2, 4, 6, 8]
            assert (er.reversed) shouldBe (evens)
        }

        method testListReversedEmpty {
            assert (empty.reversed) shouldBe (empty)
        }

        method testListReverseOneToFive {
            def ofr = oneToFive.reverse
            assert (ofr) shouldBe [5, 4, 3, 2, 1]
            assert (oneToFive == ofr) description "reverse does not return self"
            oneToFive.reverse
            assert (oneToFive) shouldBe [1, 2, 3, 4, 5]
        }

        method testListReverseEvens {
            def er = evens.reverse
            assert (er) shouldBe [8, 6, 4, 2]
            assert (evens == er) description "reverse does not return self"
            assert (er.reversed) shouldBe [2, 4, 6, 8]
        }

        method testListReverseEmpty {
            def er = empty.reverse
            assert (empty.reverse.size) shouldBe 0
        }

        method testListConcatWithEmpty {
            assert(empty ++ oneToFive)shouldBe(oneToFive)
            assert(oneToFive ++ empty)shouldBe(oneToFive)
        }

        method testListConcatWithNonEmpty {
            assert(oneToFive ++ evens) shouldBe [1, 2, 3, 4, 5, 2, 4, 6, 8]
            assert(evens ++ oneToFive) shouldBe [2, 4, 6, 8, 1, 2, 3, 4, 5]
        }

        method testListIndicesAndKeys {
            def lst = oneToFive ++ evens
            def siz = oneToFive.size + evens.size
            assert (lst.indices) shouldBe (1..siz)
            assert (lst.indices) shouldBe (lst.keys.asSequence)
        }

        method testListFold {
            assert(oneToFive.fold{a, each -> a + each}startingWith(0))shouldBe(15)
            assert(evens.fold{a, each -> a + each}startingWith(0))shouldBe(20)
            assert(empty.fold{a, each -> a + each}startingWith(17))shouldBe(17)
        }

        method testListDoSeparatedBy {
            var s := ""
            evens.do { each -> s := s ++ each.asString } separatedBy { s := s ++ ", " }
            assert (s) shouldBe ("2, 4, 6, 8")
        }

        method testListDoSeparatedByEmpty {
            var s := "nothing"
            empty.do { failBecause "do did when list is empty" }
                separatedBy { s := "kilroy" }
            assert (s) shouldBe ("nothing")
        }

        method testListDoSeparatedBySingleton {
            var s := "nothing"
            list [1].do { each -> assert(each)shouldBe(1) }
                separatedBy { s := "kilroy" }
            assert (s) shouldBe ("nothing")
        }

        method testListKeysAndValuesDo {
            def accum = emptyDictionary
            var n := 1
            evens.keysAndValuesDo { k, v ->
                accum.at(k)put(v)
                assert (accum.size) shouldBe (n)
                n := n + 1
            }
            assert(accum) shouldBe (dictionary [1::2, 2::4, 3::6, 4::8])
        }

        method testListAsStringNonEmpty {
            assert (evens.asString) shouldBe ("[2, 4, 6, 8]")
        }

        method testListAsStringEmpty {
            assert (empty.asString) shouldBe ("[]")
        }

        method testListMapEmpty {
            assert (empty.map{x -> x * x}.into(emptyList)) shouldBe (emptyList)
        }

        method testListMapEvens {
            assert(evens.map{x -> x + 1}.into(emptyList)) shouldBe [3, 5, 7, 9]
        }

        method testListMapEvensInto {
            assert(evens.map{x -> x + 10}.into(list(evens)))
                shouldBe [2, 4, 6, 8, 12, 14, 16, 18]
        }

        method testListFilterNone {
            deny(oneToFive.filter{x -> false}.iterator.hasNext)
        }

        method testListFilterEmpty {
            deny(empty.filter{x -> (x % 2) == 1}.iterator.hasNext)
        }

        method testListFilterOdd {
            assert(oneToFive.filter{x -> (x % 2) == 1}.into(emptyList))
                shouldBe [1, 3, 5]
        }

        method testListMapAndFilter {
            assert(oneToFive.map{x -> x + 10}.filter{x -> (x % 2) == 1}.into(emptyList))
                shouldBe [11, 13, 15]
        }

        method testListCopy {
            def evensCopy = evens.copy
            evens.removeLast
            evens.removeLast
            assert (evens) shouldBe [2, 4]
            assert (evensCopy) shouldBe [2, 4, 6, 8]
        }
        method testListIteratorEmpty {
            deny (empty.iterator.hasNext)
                description "empty iterator has an element"
        }
        method testListIteratorNonEmpty {
            def accum = emptySet
            def iter = oneToFive.iterator
            while { iter.hasNext } do { accum.add(iter.next) }
            assert (accum) shouldBe (set [1, 2, 3, 4, 5])
        }
        method testListIteratorToSetDuplicates {
            def accum = emptySet
            def iter = [1, 1, 2, 2, 4].iterator
            while { iter.hasNext } do { accum.add(iter.next) }
            assert (accum) shouldBe (set [1, 2, 4])
        }
        method testListIteratorRaisesExhausted {
            def iter = [1, 2, 3].iterator
            assert (iter.next) shouldBe 1
            assert (iter.next) shouldBe 2
            assert (iter.next) shouldBe 3
            assert {iter.next} shouldRaise (IteratorExhausted)
        }
        method testAsList {
            def l = oneToFive.asList
            assert (l) hasType (List)
            assert (l) shouldBe (list [1, 2, 3, 4, 5])
        }
        method testAsSet {
            def s = oneToFive.asSet
            assert (s) hasType (Set)
            assert (s) shouldBe (set [1, 2, 3, 4, 5])
        } 
        method testAsSequence {
            def s = oneToFive.asSequence
            assert (s) hasType (Sequence)
            assert (s) shouldBe (sequence [1, 2, 3, 4, 5])
        }
    }
}

def listTests = gU.testSuite.fromTestMethodsIn(primitiveListTest)
listTests.runAndPrintResults
