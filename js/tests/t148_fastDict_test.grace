import "gUnit" as gU
import "fastDict" as fd
import "dictionaryTest" as dictionaryTest

def ConcurrentModification is public = ProgrammingError.refine "ConcurrentModification"

trait fastDictTest {
    class forMethod(m) {
        inherit dictionaryTest.dictionaryTest.forMethod(m)

        method dictionaryUnderTestWith (bindings) is override {
            fd.dictionary⟦String, Number⟧.withAll (bindings)
        }
        method dictionaryUnderTestEmpty { fd.dictionary.empty }
        method dictionaryUnderTestFactory { fd.dictionary }
    }
}

def dictTests = gU.testSuite.fromTestMethodsIn(fastDictTest) named "dictionaryTest"
dictTests.runAndPrintResults


