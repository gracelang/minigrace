import "gUnit" as gU

class objWithX {
    var x is public := 2
}

def uVarTest = object {
    class forMethod(m) {
        inherit gU.testCaseNamed(m)

        method testSimpleUninitVarAccess {
            var a
            assert { a } shouldRaise (ProgrammingError)
        }

        method testSimpleUninitVarRequest {
            var a
            assert {a + 1} shouldRaise (ProgrammingError)
        }

        method testAccessorUninitVarAccess {
            def o = object {
                var a is readable
            }
            assert { o.a } shouldRaise (ProgrammingError)
        }

        method testAccessorUninitVarRequest {
            def o = object {
                var a is readable
            }
            assert { o.a + 1 } shouldRaise (ProgrammingError)
        }
        method returnDecl {
            def v = 7
        }
        method testDecDone {
            assert (returnDecl.asString) shouldBe "done"
            assert {returnDecl == done} shouldRaise (NoSuchMethod)
        }
        method returnAssignment {
            var f
            f := 9
        }
        method testAssign {
            assert (returnAssignment.asString) shouldBe "done"
            assert {returnAssignment == done} shouldRaise (NoSuchMethod)
        }
        method testdoneEquality {
            assert { done == 3 } shouldRaise (NoSuchMethod)
        }
        method testdoneIsDone {
            assert (done) hasType (Done)
        }
        method testNumberIsDone {
            assert (3) hasType (Done)
        }
    }
}

gU.testSuite.fromTestMethodsIn(uVarTest).runAndPrintResults
