dialect "standard"
import "gUnit" as gU

trait lazyEnumTest {
    class forMethod(m) {
        inherit gU.testCaseNamed(m)
        def oneToFive = (1..5).filter{ x -> true }
        def empty = (1..5).filter{ x -> false }

        method testLazyFold {
            def sum = oneToFive.fold{ a, x -> a + x } startingWith 0
            assert (sum) shouldBe 15
        }
        method testLazyFoldEmpty {
            def sum = empty.fold{ a, x -> a + x } startingWith 0
            assert (sum) shouldBe 0
        }
        method testLazyEquality {
            assert (oneToFive) shouldBe (1..5)
        }
        method testLazyEqualityEmpty {
            assert (empty) shouldBe (sequence.empty)
        }
        method testLazyFailFast {
            def o25List = list.withAll(oneToFive)
            def o25Iter = o25List.iterator
            def first = o25Iter.next
            assert (first) shouldBe 1
            o25List.addFirst 0
            assert {o25Iter.next} shouldRaise (ConcurrentModification)
        }
    }
}
