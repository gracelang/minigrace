dialect "standard"
import "gUnit" as g
import "setTest" as setTest

trait mapSetTest {
    class forMethod(m) {
        inherit setTest.setTest.forMethod(m)

        method setUnderTestWith (members) is override {
            set⟦Number⟧ (members)
        }
        method setUnderTestEmpty { set.empty }
        method setUnderTestFactory { set }
    }
}

def collisionReuseTest = object {
    class forMethod(m) {
        inherit gU.testCaseNamed(m)

        def collidingKeys = ["FBYA", "EZAX", "FCAX", "FBXX", "FCBA", "EYXX", "EZBA", "EYYA"]
        method testCollisions {
            // tests that the above 8 keys do indeed all have the same hash
            def theHash = collidingKeys.first.hash
            collidingKeys.do { each ->
                assert (each.hash == theHash) description "{each.asDebugString}.hash ≠ {theHash}"
            }
        }
        method testInsertRemoveCollisions {
            // the idea of this test is to first, populate a set with some
            // elements that share the same hash, and then check that the "removed"
            // tombestones don't disrupt the membership test, and are reused when
            // an element is re-inserted.
            // This test is "white box"; it knows about the internal structure of a mapset
            def s = mapSet.set.empty
            collidingKeys.do { each -> s.add(each) }
            assert (s.size) shouldBe (collidingKeys.size)
            repeat 2 times {
                (1..4).do { i ->
                    def e = collidingKeys.at(i)
                    s.remove(e)
                    deny(s.contains(e)) description "just removed {e}, but it's still in {s}"
                    def n = collidingKeys.at(i+1)
                    assert(s.contains(n)) description "did not remove {n}, but it's gone from {s}"
                }
                assert (s.asDebugString.startsWith "mapSet 4/8")
                (1..4).reversed.do { i ->
                    def e = collidingKeys.at(i)
                    s.add(e)
                    assert (s.contains(e)) description "just added {e}, but not in {s}"
                }
                assert (s.asDebugString.startsWith "mapSet 8/8")
            }
            assert (s) shouldBe (collidingKeys >> set)
        }
    }
}

def setTests = gU.testSuite.fromTestMethodsIn(mapSetTest) named "setTest"
setTests.add(collisionReuseTest.forMethod "testCollisions")
setTests.add(collisionReuseTest.forMethod "testInsertRemoveCollisions")
setTests.runAndPrintResults

gU.exit
