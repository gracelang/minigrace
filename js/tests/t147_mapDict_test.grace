dialect "standard"
import "gUnit" as gU
import "mapDict" as md
import "dictionaryTest" as dictionaryTest

def ConcurrentModification is public = ProgrammingError.refine "ConcurrentModification"

trait fastDictTest {
    class forMethod(m) {
        inherit dictionaryTest.dictionaryTest.forMethod(m)

        method dictionaryUnderTestWith (bindings) is override {
            md.dictionary⟦String, Number⟧.withAll (bindings)
        }
        method dictionaryUnderTestEmpty { md.dictionary.empty }
        method dictionaryUnderTestFactory { md.dictionary }
    }
}

def dictTests = gU.testSuite.fromTestMethodsIn(fastDictTest) named "dictionaryTest"
dictTests.runAndPrintResults

gU.exit
