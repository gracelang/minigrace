import "gUnit" as gU
import "math" as math

def divisionTest = object {
    class forMethod(meth) {
        inherits gU.testCaseNamed(meth)
      
        def Ds = list.with(78, 32, -78, -32, 17.5)
        def ds = list.with(5, 10, -5, -10, 2.5, 2, -2)
        
        method testEuclid {
            Ds.do { D ->
                ds.do { d ->
                    def q = D ÷ d
                    def r = D % d
                    assert (q.truncated == q) description "q = {q} is not an integer"
                    assert (r ≥ 0) description "remainder of {D}÷{d} is {r} (<0)"
                    assert (r < D.abs) description "remainder of {D}÷{d} is {r} (≥{D})"
                    assert (D == ((d*q) + r)) description "{d}*{q}+{r}={(d*q)+r} (≠{D})"
                    print "{D} ÷ {d} = {q} remainder {r}"
                }
            }
        }
    }
}


def divisionTests = gU.testSuite.fromTestMethodsIn(divisionTest)
divisionTests.name := "div and rem tests"
divisionTests.runAndPrintResults