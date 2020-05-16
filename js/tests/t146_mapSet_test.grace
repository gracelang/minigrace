dialect "standard"
import "gUnit" as gU
import "mapSet" as mapSet
import "setTest" as setTest

def ConcurrentModification is public = mapSet.ConcurrentModification

trait mapSetTest {
    class forMethod(m) {
        inherit setTest.setTest.forMethod(m)

        method setUnderTestWith (members) is override {
            mapSet.set⟦Number⟧.withAll (members)
        }
        method setUnderTestEmpty { mapSet.set.empty }
        method setUnderTestFactory { mapSet.set }
    }
}

def setTests = gU.testSuite.fromTestMethodsIn(mapSetTest) named "setTest"
setTests.runAndPrintResults

gU.exit
