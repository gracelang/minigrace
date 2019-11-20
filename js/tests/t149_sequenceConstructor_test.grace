dialect "standard"
import "gUnit" as gU
import "sequenceTest" as sequenceTest

// re-use the sequence tests for the built-in sequence construtors

trait sequenceConstructorTest {
    class forMethod(m) {
        inherit sequenceTest.sequenceTest.forMethod(m)

        method sequenceUnderTestWithAll⟦T⟧ (elems)  is override {
            [] ++ elems
        }
        method sequenceUnderTestWith⟦T⟧ (elem)  is override {
            [ elem ]
        }
        method sequenceUnderTestEmpty  is override { [] }
    }
}

def sequenceConstructorTests = gU.testSuite.fromTestMethodsIn(sequenceConstructorTest)
sequenceConstructorTests.runAndPrintResults

gU.exit
