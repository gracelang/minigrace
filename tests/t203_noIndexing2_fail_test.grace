import "gUnit" as gU

class objWithX {
    var x is public := 2
    method (index) { index + x }
    method []:=(index) { x := index }
}


def uVarTest = object {
    class forMethod(m) {
        inherit gU.testCaseNamed(m)

        method testIndex {
            def o = objWithX
            assert (o[3]) shouldBe 5
        }
        method testIndexUpdate {
            def o = objWithX
            o[3] := 7
            assert (o.x) shouldBe 10
        }
    }
}

gU.testSuite.fromTestMethodsIn(uVarTest).runAndPrintResults
