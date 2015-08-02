import "gUnit" as gU
import "./math" as math

class libTests.forMethod(m) {
    inherits gU.testCaseNamed(m)
    
    method testModuleAsString {
        assert (math.asString) shouldBe "the \"math\" module"
    }
    method testModuleAsDebugString {
        assert (math.asDebugString) shouldBe "the \"math\" module"
    }
    method testSin {
        assert (math.sin(math.π/2)) shouldEqual 1 within (10^(-10))
        assert (math.sin 0 ) shouldBe 0
        assert (math.sin(-math.π/2)) shouldEqual (-1) within (10^(-10))
    }
    method testCos {
        assert (math.cos 0) shouldBe 1
        assert (math.cos(math.π/2)) shouldEqual 0 within (10^(-10))
        assert (math.cos(math.pi)) shouldEqual (-1) within (10^(-10))
    }
    method testTan {
        assert (math.tan(math.π/4)) shouldEqual 1 within (10^(-10))
        assert (math.tan(math.π*5/4)) shouldEqual 1 within (10^(-10))
    }
    method testArcSin {
        assert (math.asin(-1/2) * 180 / math.π) shouldEqual (-30) within (10^(-10))
    }
    method testArcCos {
        assert (math.acos(1/2) * 180 / math.π) shouldEqual 60 within (10^(10))
    }
    method testArcTan {
        assert (math.atan(1) * 180 / math.π) shouldBe 45
    }
    method testPi {
        assert (math.π) shouldBe (math.pi)
    }
    method testSqrt {
        assert (math.sqrt 4) shouldBe 2
        assert ((math.sqrt 10) * (math.sqrt 10)) shouldEqual 10 within (10^(-10))
    }
    method testAbs {
        assert (math.abs (-21.34)) shouldBe 21.34
        assert (math.abs 19.23) shouldBe 19.23
        assert (math.abs (-0)) shouldBe 0
    }
    method testLg {
        assert (math.lg 128) shouldBe 7
        assert (math.lg 1024) shouldBe 10
        assert (math.lg 1) shouldBe 0
    }
    method testLnAndExp {
        assert (math.ln(math.exp 7)) shouldBe 7
        assert (math.ln(math.exp 10)) shouldBe 10
        assert (math.ln 1) shouldBe 0
    }
    method testExp {
        assert (math.exp(math.ln 15)) shouldBe 15
        assert (math.exp 1) shouldEqual 2.71828183 within (10^(-8))
        assert (math.exp 0) shouldEqual 1 within (10^(-10))
    }
    method testLog10 {
        assert (math.log10 1000) shouldEqual 3 within (10^(-10))
        assert (math.log10 (10^15)) shouldEqual 15 within (10^(-10)) 
        assert (math.log10 (10^(-15))) shouldEqual (-15) within (10^(-10))
    }
    method testRandom {
        repeat 100 times {
            def r = math.random
            assert ((r >= 0) && (r < 1)) description "random number {r} out of range"
        }
    }
}
    
    
def mathTests = gU.testSuite.fromTestMethodsIn(libTests)
mathTests.runAndPrintResults
