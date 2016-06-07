import "gUnit" as gU

method noType(a1) { a1 + 1 }
method numType(n1:Number) { n1 + 2 }
method paramType<T>(x:T) { x.asString }

class typeTest.forMethod(m) {
    inherits gU.testCaseNamed(m)
    
    method testMethodNoType {
        assert (noType 8) shouldBe 9
    }
    method testMethodNumber {
        assert (numType 7) shouldBe 9
    }
    method testMethodParametricNumber {
        assert (paramType<Number> 5) shouldBe "5"
    }
    method testMethodParametricString {
        assert (paramType<String> "foo") shouldBe "foo"
    }
    
    method testMethodNoTypeFail {
        assert {noType "foo"} shouldRaise (NoSuchMethod)
    }
    method testMethodNumberFail {
        assert {numType "foo"} shouldRaise (TypeError)
    }
    method testMethodParametricNumberFail {
        assert {paramType<Number> "foo"} shouldRaise (TypeError)
    }
    method testMethodParametricStringFail {
        assert {paramType<String> 5} shouldRaise (TypeError)
    }
}

def typeTests = gU.testSuite.fromTestMethodsIn(typeTest)
typeTests.runAndPrintResults
