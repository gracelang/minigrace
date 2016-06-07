import "gUnit" as gU

factory method objWithX {
    var x is public := 2
}

class assignmentTest.forMethod(m) {
    inherits gU.testCaseNamed(m)
    
    method testXgetsNoX {
        def o = object {
            var hx is readable := 0
            method x:= (n) { hx := n }
            x := 6
        }
        assert (o.hx) shouldBe 6
    }
    
    method testXgetsInheritsX {
        def o = object {
            inherits objWithX
            var hx is readable := 0
            method x:= (n) { hx := n }
        }
        assert (o.x == 2) description "o.x originally not 2"
        o.x := 6
        assert (o.x == 2) description "o.x should not have changed"
        assert (o.hx) shouldBe 6
    }
    
    method testXgetsOuterX {
        def enc = object {
            var x is readable := 2
            def o = object {
                var hx is readable := 0
                method x:= (n) { hx := n }
                x := 6
            }
            assert (o.hx) shouldBe 6
        }
        assert (enc.x) shouldBe 2
    }
}

gU.testSuite.fromTestMethodsIn(assignmentTest).runAndPrintResults
