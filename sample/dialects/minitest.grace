import "gUnit" as gu

inherits prelude.methods

var currentTestSuiteForDialect := done
var currentSetupBlockForTesting := done
var currentTestBlockForTesting := 0
var currentTestInThisEvaluation := 0
var currentCountOfAssertions := 0

method test(name:String) by(block:Block) is public {
    if(currentTestSuiteForDialect == done) then {
        Exception.raise("a test can only be created within a testSuite")
    }
    currentTestInThisEvaluation := currentTestInThisEvaluation + 1
    if(currentSetupBlockForTesting != done) then {
        currentTestSuiteForDialect.add(testCaseNamed(name)setupIn(currentSetupBlockForTesting)asTestNumber(currentTestInThisEvaluation))
    } else {
        if(currentTestInThisEvaluation == currentTestBlockForTesting) then {
            currentCountOfAssertions := 0
            block.apply()
            if(currentCountOfAssertions == 0) then {
                gu.assertion.trait.AssertionFailure.raise("no assertions were checked in this test")
            }
        }
    }
}

method assert(bb:Boolean)description(str:String) is public {
    currentCountOfAssertions := currentCountOfAssertions + 1
    gu.assertion.trait.assert(bb)description(str)
}

method deny(bb:Boolean)description (str:String) is public {
    currentCountOfAssertions := currentCountOfAssertions + 1
    gu.assertion.trait.deny(bb)description(str)
}

method assert(bb:Boolean) is public {
    currentCountOfAssertions := currentCountOfAssertions + 1
    gu.assertion.trait.assert(bb)
}

method deny(bb:Boolean) is public {
    currentCountOfAssertions := currentCountOfAssertions + 1
    gu.assertion.trait.deny(bb)
}

method assert(s1:Object)shouldBe(s2:Object) is public {
    currentCountOfAssertions := currentCountOfAssertions + 1
    gu.assertion.trait.assert(s1)shouldBe(s2)
}

method assert(b:Block)shouldRaise(de:Exception) is public {
    currentCountOfAssertions := currentCountOfAssertions + 1
    gu.assertion.trait.assert(b)shouldRaise(de)
}

method assert(b:Block)shouldntRaise(ue:Exception) is public {
    currentCountOfAssertions := currentCountOfAssertions + 1
    gu.assertion.trait.assert(b)shouldntRaise(ue)
}

method assert(s:Object) hasType (t:Type) is public {
    currentCountOfAssertions := currentCountOfAssertions + 1
    gu.assertion.trait.assert(s) hasType (t)
}

method testSuite(block:Block) is public {
    if(currentTestSuiteForDialect != done) then {
        Exception.raise("a testSuite cannot be created inside a testSuite")
    }
    currentTestSuiteForDialect := gu.testSuite.empty
    currentSetupBlockForTesting := block
    currentTestInThisEvaluation := 0
    block.apply()
    currentSetupBlockForTesting := done
    currentTestSuiteForDialect.runAndPrintResults()
    currentTestSuiteForDialect := done
    currentTestBlockForTesting := 0
}

method testCaseNamed(name') setupIn(setupBlock) asTestNumber(number) -> gu.TestCase {
    object {
        inherits gu.testCaseNamed(name')
             
        method setup { currentTestBlockForTesting := number; currentTestInThisEvaluation := 0; setupBlock.apply() }
        method teardown { currentTestBlockForTesting := 0 }

        method run (result) {
            result.testStarted(name)
            try {
                try {
                    setup
                } finally { teardown }
            } catch {e: self.AssertionFailure ->
                result.testFailed(name)withMessage(e.message)
            } catch {e: Exception ->
                result.testErrored(name)withMessage "{e.exception}: {e.message}"
            }
        }

        method debug (result) {
            result.testStarted(name)
            try {
                print ""
                print "debugging test {name} ..."
                try {
                    setup
                } finally { teardown }
            } catch {e: self.AssertionFailure ->
                result.testFailed(name)withMessage(e.message)
                printBackTrace(e) limitedTo(8)
            } catch {e: Exception ->
                result.testErrored(name)withMessage(e.message)
                printBackTrace(e) limitedTo(8)
            }
        }
    }
}
