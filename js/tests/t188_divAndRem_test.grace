import "gUnit" as gU

def divisionTest = object {
    class forMethod(meth) {
        inherit gU.testCaseNamed(meth)

        def Ds = list [78, 32, -78, -32, 17.5]
        def ds = list [5, 10, -5, -10, 2.5, 2, -2]

        method testEuclid {
            // The four assertions in this text correspond to the properties of
            // Euclidean division.  See, for example, Boute, TOPLAS 14(2)p 132.
            Ds.do { D ->
                ds.do { d ->
                    def q = D ÷ d
                    def r = D % d
                    assert (q.truncated == q) 
                        description "quotient {q} of {D}÷{d} is not an integer."
                    assert (r ≥ 0) 
                        description "remainder {r} of {D}÷{d} is negative."
                    assert (r < D.abs) 
                        description "remainder {r} {D}÷{d} is ≥{D}."
                    assert (D == ((d*q) + r)) 
                        description "{d}*{q}+{r}={(d*q)+r}, should be {D}."
//                    print "{D} ÷ {d} = {q} remainder {r}"
                }
            }
        }
    }
}


def divisionTests = gU.testSuite.fromTestMethodsIn(divisionTest)
divisionTests.name := "div and rem tests"
divisionTests.runAndPrintResults
