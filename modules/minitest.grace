import "gUnit" as gu

inherit outer.methods
use gu.assertion        // makes available all the assert ... methods

method countOneAssertion {
    currentResult.countOneAssertion
}

var currentResult := object {
    method countOneAssertion {
        print "countOneAssertion requested on dummy result"
    }
}

def MinitestError = prelude.ProgrammingError.refine "MinitestError"
type Block = prelude.Procedure0

def nullSuite = prelude.Singleton.named "nullSuite"
def nullBlock = prelude.Singleton.named "nullBlock"

var currentTestSuiteForDialect := nullSuite
var currentSetupBlockForTesting := nullBlock
var currentTestBlockForTesting := 0
var currentTestInThisEvaluation := 0
var errorsToBeRerun := true

method numberOfErrorsToRerun -> Number { gu.numberOfErrorsToRerun }
method numberOfErrorsToRerun:=(n:Number) {
    gu.numberOfErrorsToRerun := n
}


method testSuite (name:String) with (block:Block) {
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

method testSuite (block:Block) {
    testSuite "" with (block)
}

method exit { gu.exit }

method test(name:String) by(block:Block) {
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
        outer.currentResult := r
    }

    method currentResult is override { outer.currentResult }

    method runTest is override {
        // for minitest, the test is run in setup
    }
}

