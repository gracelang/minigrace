import "gUnit" as gu

inherit prelude.methods

def MinispecError = prelude.ProgrammingError.refine "MinispecError"

def nullSuite = prelude.Singleton.named "nullSuite"
def nullBlock = prelude.Singleton.named "nullBlock"

var currentTestSuite := nullSuite
var currentSetupBlock := nullBlock
var currentTestBlock := 0
var testNumberToRun := 0
var errorsToBeRerun := true

method numberOfErrorsToRerun -> Number { gu.numberOfErrorsToRerun }
method numberOfErrorsToRerun:=(n:Number) {
    gu.numberOfErrorsToRerun := n
}

def mtAssertion = object {
    inherit gu.assertion
    var currentResult is writable := object {
        method countOneAssertion {
            print "countOneAssertion requested on dummy result"
        }
    }

    method countOneAssertion {
        currentResult.countOneAssertion
    }
}

method expect (cond:Boolean) orSay (complaint:String) {
    mtAssertion.assert(cond) description (complaint)
}

method expect(s1:Object) toBe (s2:Object) {
    mtAssertion.assert(s1) shouldBe (s2)
}

method expect(s1:Object) toBe (s2:Object) orSay (complaint) {
    mtAssertion.assert(s1 == s2)
        description (complaint)
}

method expect(s1:Object) notToBe (s2:Object) {
    mtAssertion.assert(s1) shouldntBe (s2)
}

method expect(s1:Object) notToBe (s2:Object) orSay (complaint) {
    mtAssertion.assert(s1 ≠ s2)
        description (complaint)
}

method expect(n1:Number) toBe (n2:Number) within (epsilon:Number) {
    mtAssertion.assert(n1) shouldEqual (n2) within (epsilon)
}

method expect(b:Block) toRaise (desired:prelude.ExceptionKind) {
    mtAssertion.assert(b) shouldRaise (desired)
}

method expect(b:Block) notToRaise (undesired:prelude.ExceptionKind) {
    mtAssertion.assert(b) shouldntRaise (undesired)
}

method expect(s:Object) toHaveType (desired:Type) {
    mtAssertion.assert(s) hasType (desired)
}

method expect(s:Object) notToHaveType (undesired:Type) {
    mtAssertion.deny(s) hasType (undesired)
}

method failAndSay(reason) {
    mtAssertion.assert(false) description(reason)
}

method describe (name:String) with (block:Block) {
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


method specify (name:String) by (block:Block) {
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

method testCaseNamed(name') setupIn(setupBlock) asTestNumber(number) -> gu.TestCase
        is confidential {
    object {
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
            mtAssertion.currentResult := r
        }
        
        method runTest is override {
            // for minispec, the test is run in setup
        }
    }
}
