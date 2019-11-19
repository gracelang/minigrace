dialect "standard"

import "gUnit" as gu

def nullSuite = singleton "nullSuite"
def nullBlock = singleton "nullBlock"

var currentTestSuite := nullSuite
var currentSetupBlock := nullBlock
var currentTestBlock := 0
var testNumberToRun := 0
var errorsToBeRerun := true
var currentResult := object {
    method countOneAssertion {
        print "countOneAssertion requested on dummy result"
    }
}

trait open {
    use gu.assertion          // makes available all the assert ... methods

    method countOneAssertion {
        currentResult.countOneAssertion
    }

    once method MinispecError {
        ProgrammingError.refine "MinispecError"
    }

    method numberOfErrorsToRerun -> Number { gu.numberOfErrorsToRerun }
    method numberOfErrorsToRerun:=(n:Number) {
        gu.numberOfErrorsToRerun := n
    }

    method expect (cond:Boolean) orSay (complaint:String) {
        assert(cond) description (complaint)
    }

    method expect(s1:Object) toBe (s2:Object) {
        assert(s1) shouldBe (s2)
    }

    method expect(s1:Object) toBe (s2:Object) orSay (complaint) {
        assert(s1 == s2)
            description (complaint)
    }

    method expect(s1:Object) notToBe (s2:Object) {
        assert(s1) shouldntBe (s2)
    }

    method expect(s1:Object) notToBe (s2:Object) orSay (complaint) {
        assert(s1 ≠ s2)
            description (complaint)
    }

    method expect(n1:Number) toBe (n2:Number) within (epsilon:Number) {
        assert(n1) shouldEqual (n2) within (epsilon)
    }

    method expect(b:Procedure0) toRaise (desired:ExceptionKind) {
        assert(b) shouldRaise (desired)
    }

    method expect(b:Procedure0) toRaise (desired:ExceptionKind) mentioning (error) {
        assert(b) shouldRaise (desired) mentioning (error)
    }

    method expect(b:Procedure0) toRaise (desired:ExceptionKind) mentioning (err1) and (err2) {
        assert(b) shouldRaise (desired) mentioning (err1) and (err2)
    }

    method expect(b:Procedure0) notToRaise (undesired:ExceptionKind) {
        assert(b) shouldntRaise (undesired)
    }

    method expect(s:Unknown) toHaveType (desired:Type) {
        assert(s) hasType (desired)
    }

    method expect(s:Unknown) notToHaveType (undesired:Type) {
        deny(s) hasType (undesired)
    }

    method failAndSay(reason) {
        assert(false) description(reason)
    }

    method describe (name:String) with (block:Procedure0) {
        if (nullSuite ≠ currentTestSuite) then {
            MinispecError.raise "`describe` cannot be used inside `describe`"
        }
        currentTestSuite := gu.testSuite.empty
        currentTestSuite.name := name
        currentSetupBlock := block
        testNumberToRun := 0
        block.apply
        currentSetupBlock := nullBlock
        currentTestSuite.runAndPrintResults
        currentTestSuite := nullSuite
        currentTestBlock := 0
    }

    method doNotRerunErrors { errorsToBeRerun := false }
    method doRerunErrors { errorsToBeRerun := true }

    method exit { gu.exit }

    method specify (name:String) by (block:Procedure0) {
        if (nullSuite == currentTestSuite) then {
            MinispecError.raise "a `specify` can be created only within a `describe`"
        }
        testNumberToRun := testNumberToRun + 1
        if (nullBlock ≠ currentSetupBlock) then {
            currentTestSuite.add(testCaseNamed(name)
                setupIn(currentSetupBlock)
                asTestNumber(testNumberToRun))
        } elseif { testNumberToRun == currentTestBlock } then {
            block.apply
        }
    }

    class testCaseNamed(name') setupIn(setupBlock) asTestNumber(number) -> gu.TestCase
            is confidential {
        inherit gu.testCaseNamed(name') alias guSetup = setup

        method setup {
            guSetup
            currentTestBlock := number
            testNumberToRun := 0
            setupBlock.apply
        }

        method teardown {
            currentTestBlock := 0
        }

        method currentResult:= (r) is override {
            outer.outer.currentResult := r
        }

        method runTest is override {
            // for minispec, the test is run in setup
        }
    }
}
