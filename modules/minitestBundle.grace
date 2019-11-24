dialect "standard"

import "gUnit" as gu

def nullSuite = singleton "nullSuite"
def nullBlock = singleton "nullBlock"

var currentTestSuiteForDialect := nullSuite
var currentSetupBlockForTesting := nullBlock
var currentTestBlockForTesting := 0
var currentTestInThisEvaluation := 0
var errorsToBeRerun := true
var currentResult := object {
    method countOneAssertion {
        print "countOneAssertion requested on dummy result"
    }
}

trait open {
    use gu.assertion        // makes available all the assert ... methods

    method countOneAssertion {
        currentResult.countOneAssertion
    }
    once method MinitestError {
        self.ProgrammingError.refine "MinitestError"
    }
    method numberOfErrorsToRerun -> Number { gu.numberOfErrorsToRerun }
    method numberOfErrorsToRerun:=(n:Number) {
        gu.numberOfErrorsToRerun := n
    }
    method testSuite (name:String) with (block:Procedure0) {
        if (nullSuite ≠ currentTestSuiteForDialect) then {
            MinitestError.raise "a testSuite cannot be created inside a testSuite"
        }
        currentTestSuiteForDialect := gu.testSuite.empty
        currentTestSuiteForDialect.name := name
        currentSetupBlockForTesting := block
        currentTestInThisEvaluation := 0
        block.apply
        currentSetupBlockForTesting := nullBlock
        currentTestSuiteForDialect.runAndPrintResults
        currentTestSuiteForDialect := nullSuite
        currentTestBlockForTesting := 0
    }

    method testSuiteNamed(name) with (block) {
        // for backward compatibility
        testSuite (name) with (block)
    }

    method doNotRerunErrors { errorsToBeRerun := false }
    method doRerunErrors { errorsToBeRerun := true }

    method testSuite (block:Procedure0) {
        testSuite "" with (block)
    }

    method exit { gu.exit }

    method test(name:String) by(block:Procedure0) {
        if (nullSuite == currentTestSuiteForDialect) then {
            MinitestError.raise "a test can be created only within a testSuite"
        }
        currentTestInThisEvaluation := currentTestInThisEvaluation + 1
        if (nullBlock ≠ currentSetupBlockForTesting) then {
            currentTestSuiteForDialect.add(testCaseNamed(name)
                setupIn(currentSetupBlockForTesting)
                asTestNumber(currentTestInThisEvaluation))
        } elseif { currentTestInThisEvaluation == currentTestBlockForTesting } then {
            block.apply
        }
    }

    class testCaseNamed(name') setupIn(setupBlock) asTestNumber(number) -> gu.TestCase {
        inherit gu.testCaseNamed(name') alias guSetup = setup

        method setup {
            guSetup
            currentTestBlockForTesting := number
            currentTestInThisEvaluation := 0
            setupBlock.apply
        }

        method teardown {
            currentTestBlockForTesting := 0
        }

        method currentResult:= (r) is override {
            outer.outer.currentResult := r
        }

        method currentResult is override { outer.outer.currentResult }

        method runTest is override {
            // for minitest, the test is run in setup
        }
    }
}
