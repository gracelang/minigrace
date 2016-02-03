import "gUnit" as gU

factory method objWithX {
    var x is public := 2
}

def uVarTest = object {
    class forMethod(m) {
        inherits gU.testCaseNamed(m)
        
        method testSimpleUVar {
            var a
            assert { a } shouldRaise (ProgrammingError)
        }
        
        method testAccessorUVar {
            def o = object {
                var a is readable
            }
            assert { o.a } shouldRaise (ProgrammingError)
        }
    }
}


gU.testSuite.fromTestMethodsIn(uVarTest).runAndPrintResults
