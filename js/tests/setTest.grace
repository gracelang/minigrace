dialect "standard"
import "gUnit" as gU

trait setTest {
    class forMethod(m) {
        inherit gU.testCaseNamed(m)

        var oneToFive
        var evens
        var empty

        method setup {
            oneToFive := set [1, 2, 3, 4, 5]
            evens := set [2, 4, 6, 8]
            empty := set [ ]
        }
        
        method testSetTypeCollection {
            def witness = set⟦Number⟧ [1, 2, 3, 4, 5, 6]
            assert (witness) hasType (Collection⟦Number⟧)
        }
        method testSetTypeSet {
            def witness = set⟦Number⟧ [1, 2, 3, 4, 5, 6]
            assert (witness) hasType (Set⟦Number⟧)
        }
        method testSingletonSeteTypeSet {
            def witness = set.with "a word"
            assert (witness) hasType (Set)
        }
        method testSetTypeNotSequence {
            def witness = set⟦Number⟧ [1, 2, 3, 4, 5, 6]
            deny (witness) hasType (Sequence⟦Number⟧)
        }

        method testSetSize {
            assert(oneToFive.size) shouldBe 5
            assert(empty.size) shouldBe 0
            assert(evens.size) shouldBe 4
        }
        method testSingletonSetSize {
            def singletonSeq = set.with "a word"
            assert (singletonSeq.size) shouldBe 1
        }

        method testSetEmptyDo {
            empty.do {each -> failBecause "set.empty.do did with {each}"}
            assert(true)
        }

        method testSetEqualityEmpty {
            assert(empty == set.empty)
            deny (empty != set.empty)
        }

        method testSetInequalityEmpty {
            deny(empty == set [1])
            assert(empty != set [1])
            deny(empty == 3)
            deny(empty == evens)
        }

        method testSetInequalityFive {
            deny(oneToFive == set [1, 2, 3, 4, 6])
            assert(oneToFive != set [1, 2, 3, 4, 6])
        }

        method testSetEqualityFive {
            def isEqual = (oneToFive == set [1, 2, 3, 4, 5])
            assert(isEqual)
            deny(oneToFive != set [1, 2, 3, 4, 5])
        }

        method testSetOneToFiveDo {
            def accum = set.empty
            var n := 1
            oneToFive.do { each ->
                accum.add(each)
                assert (accum.size) shouldBe (n)
                n := n + 1
            }
            assert(accum) shouldBe (oneToFive)
        }

        method testPipeIntoSetFactory {
            def witness = (list.withAll [1, 2, 3]) >> set
            assert (witness) hasType (Set)
            assert (witness) shouldBe (set.withAll [1, 2, 3])
            deny (witness) hasType (List)
        }

        method testPipeIntoExistingSet {
            def witness = (list.withAll [1, 2, 3]) >> evens
            assert (witness) hasType (Set)
            assert (witness) shouldBe (set.withAll [2, 4, 6, 8, 1, 2, 3])
            deny (witness) hasType (List)
            assert (evens) shouldBe (set.withAll [2, 4, 6, 8, 1, 2, 3])
        }

        method testSetAdd {
            assert (empty.add(9)) shouldBe (set [9])
            assert (evens.add(10)) shouldBe (set [2, 4, 6, 8, 10])
        }

        method testSetRemove2 {
            assert (evens.remove(2)) shouldBe (set [4, 6, 8])
            assert (evens) shouldBe (set [4, 6, 8])
        }
        method testSetRemove4 {
            assert (evens.remove(4)) shouldBe (set [2, 6, 8])
            assert (evens) shouldBe (set [2, 6, 8])
        }
        method testSetRemove6 {
            assert (evens.remove(6)) shouldBe (set [2, 4, 8])
            assert (evens) shouldBe (set [2, 4, 8])
        }
        method testSetRemove8 {
            assert (evens.remove(8)) shouldBe (set [2, 4, 6])
            assert (evens) shouldBe (set [2, 4, 6])
        }
        method testSetRemoveMultiple {
            assert (evens.remove 4 .remove 6 .remove 8) shouldBe (set [2])
            assert (evens.size) shouldBe 1
            assert (evens) shouldBe (set [2])
        }
        method testSetRemove5 {
            assert {evens.remove(5)} shouldRaise (NoSuchObject)
        }

        method testSetChaining {
            oneToFive.add(11).add(12).add(13)
            assert (oneToFive) shouldBe (set [1, 2, 3, 4, 5, 11, 12, 13])
        }
        method testSetPushAndExpand {
            evens.add 10
            evens.add 12
            evens.add 14
            evens.add 16 .add 18 .add 20
            assert (evens) shouldBe (set [2, 4, 6, 8, 10, 12, 14, 16, 18, 20])
        }
        method testEmptyIterator {
            deny (empty.iterator.hasNext) description "the empty iterator has an element"
        }
        method testEvensIterator {
            def ei = evens.iterator
            assert (evens.size == 4) description "evens.size = {evens.size}, should be 4"
            assert (ei.hasNext) description "the evens iterator has no elements"
            def copySet = set [ei.next, ei.next, ei.next, ei.next]
            deny (ei.hasNext) description "the evens iterator has more than 4 elements"
            assert (copySet) shouldBe (evens)
        }
        method testSetFold {
            assert(oneToFive.fold{a, each -> a + each}startingWith(5))shouldBe(20)
            assert(evens.fold{a, each -> a + each}startingWith(0))shouldBe(20)
            assert(empty.fold{a, each -> a + each}startingWith(17))shouldBe(17)
        }

        method testSetDoSeparatedBy {
            var s := ""
            evens.remove(2).remove(4)
            evens.do { each -> s := s ++ each.asString } separatedBy { s := s ++ ", " }
            assert ((s == "6, 8") || (s == "8, 6"))
                description "{s} should be \"8, 6\" or \"6, 8\""
        }

        method testSetDoSeparatedByEmpty {
            var s := "nothing"
            empty.do { failBecause "do did when list is empty" }
                separatedBy { s := "kilroy" }
            assert (s) shouldBe ("nothing")
        }

        method testSetDoSeparatedBySingleton {
            var s := "nothing"
            set [1].do { each -> assert(each)shouldBe(1) }
                separatedBy { s := "kilroy" }
            assert (s) shouldBe ("nothing")
        }

        method testSetAsStringNonEmpty {
            evens.remove(6).remove(8)
            assert ((evens.asString == "set [2, 4]") || (evens.asString == "set [4, 2]"))
                description "set [2, 4].asString is {evens.asString}"
        }

        method testSetAsStringEmpty {
            assert (empty.asString) shouldBe ("set []")
        }

        method testSetMapEmpty {
            assert (empty.map{x -> x * x} >> set) shouldBe (set.empty)
        }

        method testSetMapEvens {
            assert(evens.map{x -> x + 1} >> set) shouldBe (set [3, 5, 7, 9])
        }

        method testSetMapEvensInto {
            assert(evens.map{x -> x + 10} >> evens.copy)
                shouldBe (set [2, 4, 6, 8, 12, 14, 16, 18])
        }

        method testSetFilterNone {
            assert(oneToFive.filter{x -> false}.isEmpty)
                description "filtered(false) set isn't empty"
        }

        method testSetFilterEmpty {
            assert(evens.filter{x -> (x % 2) == 1}.isEmpty)
                description "filtered(odd) set isn't empty"
        }

        method testSetFilterOdd {
            assert(oneToFive.filter{x -> (x % 2) == 1} >> set)
                shouldBe (set [1, 3, 5])
        }

        method testSetMapAndFilter {
            assert(oneToFive.map{x -> x + 10}.filter{x -> (x % 2) == 1} >> set)
                shouldBe (set [11, 13, 15])
        }

        method testSetCopy {
            def evensCopy = evens.copy
            evens.remove 2 .remove 4
            assert (evens.size) shouldBe 2
            assert (evens) shouldBe (set [6, 8])
            assert (evensCopy) shouldBe (set [2, 4, 6, 8])
        }
        method testSetUnion {
            assert (oneToFive ++ evens) shouldBe (set [1, 2, 3, 4, 5, 6, 8])
        }
        method testSetDifference {
            assert (oneToFive -- evens) shouldBe (set [1, 3, 5])
        }
        method testSetIntersection {
            assert (oneToFive ** evens) shouldBe (set [2, 4])
        }
        method testSetFailFastIteratorAdd {
            def iter = oneToFive.iterator
            oneToFive.add(6)
            assert {iter.next} shouldRaise (ConcurrentModification)
        }
        method testSetFailFastIteratorNormal {
            def iter2 = oneToFive.iterator
            assert {iter2.next} shouldntRaise (ConcurrentModification)
        }
        method testSetFailFastIteratorRemove {
            def iter3 = oneToFive.iterator
            oneToFive.remove(2)
            assert {iter3.next} shouldRaise (ConcurrentModification)
        }
        method testSetFailFastDoRemove {
          assert {
              oneToFive.do { each ->
                  if (each == 3) then { oneToFive.remove(each) }
              }
          } shouldRaise (ConcurrentModification)
        }
        method testSetFailFastDoNothing {
          def iter2 = oneToFive.iterator
          assert {
            oneToFive.do { each -> }
          } shouldntRaise (ConcurrentModification)
        }
        method testSetFailFastDoAddLast {
          assert {
            oneToFive.do { each ->
                if (! oneToFive.contains 0) then {
                    // without this check, a bad implementation will loop forever
                    oneToFive.add 0
                }
            }
          } shouldRaise (ConcurrentModification)
        }
        method testSetClear {
            var toClear := set [1, 2, 3]
            assert (toClear.clear) shouldBe (set.empty)
        }
        method testSetAnySatisfy {
            assert (oneToFive.anySatisfy { x -> (x/2).isEven })
                description "oneToFive does not any element x s.t. x/2 is even"
            deny (empty.anySatisfy {_ -> true})
                description "empty includes some element!"
            deny (oneToFive.anySatisfy {x -> x > 5})
                description "oneToFive includes an element greater than 5"
            deny (oneToFive.anySatisfy { x -> x == 6 }) description "oneToFive includes 6"
        }
        method testSetAllSatisfy {
            assert (oneToFive.allSatisfy { x -> (x/2) < x })
                description "not all of oneToFive are s.t. x > x/2"
            assert (empty.allSatisfy {_ -> false})
                description "all of empty satisfies all predicates"
            deny (oneToFive.allSatisfy {x -> x > 2})
                description "all of oneToFive are greater than 2"
            assert (oneToFive.allSatisfy { x -> x ≠ 6 }) description "one of oneToFive == 6"
        }
        method testSetMultipleRemoves {
            // this test causes set to fill up with removed tombestones,
            // even though it stillhas plenty of space
            var smallSet := set.with 1
            assert (smallSet) shouldBe (set.with 1)
            (2..1000).do { each → 
                smallSet.add(each)
                smallSet.remove(each)
            }
            assert (smallSet) shouldBe (set.with 1)
        }
    }
}
