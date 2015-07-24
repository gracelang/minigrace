import "gUnit" as gu

inherits prelude.methods

var currentTestSuiteForDialect := done
var currentSetupBlockForTesting := done
var currentTestBlockForTesting := 0
var currentTestInThisEvaluation := 0

method test(name:String) by(block:Block) {
    if(currentTestSuiteForDialect == done) then {
        Exception.raise("a test can be created only within a testSuite")
    }
    currentTestInThisEvaluation := currentTestInThisEvaluation + 1
    if(currentSetupBlockForTesting != done) then {
        currentTestSuiteForDialect.add(testCaseNamed(name)
            setupIn(currentSetupBlockForTesting)
            asTestNumber(currentTestInThisEvaluation))
    } else {
        if(currentTestInThisEvaluation == currentTestBlockForTesting) then {
            block.apply()
        }
    }
}

method assert(bb:Boolean) description(str:String) {
    gu.assertion.trait.assert(bb)description(str)
}

method deny(bb:Boolean) description(str:String) {
    gu.assertion.trait.deny(bb)description(str)
}

method assert(bb:Boolean) {
    gu.assertion.trait.assert(bb)
}

method deny(bb:Boolean) {
    gu.assertion.trait.deny(bb)
}

method assert(s1:Object) shouldBe (s2:Object) {
    gu.assertion.trait.assert(s1)shouldBe(s2)
}

method assert(s1:Object) shouldntBe (s2:Object) {
    gu.assertion.trait.assert(s1) shouldntBe (s2)
}

method assert(n1:Number) shouldEqual (n2:Number) within (epsilon:Number) {
    gu.assert(n1) shouldEqual (n2) within (epsilon)
}

method assert(b:Block) shouldRaise(de:Exception) {
    gu.assertion.trait.assert(b)shouldRaise(de)
}

method assert(b:Block) shouldntRaise(ue:Exception) {
    gu.assertion.trait.assert(b)shouldntRaise(ue)
}

method assert(s:Object) hasType (t:Type) {
    gu.assertion.trait.assert(s) hasType (t)
}

method deny(s:Object) hasType (UndesiredType) {
    gu.deny(s) hasType (UndesiredType)
}

method failBecause(reason) {
    assert(false) description(reason)
}

method testSuite(block:Block) {
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
                printBackTrace(e) limitedTo(name)
            } catch {e: Exception ->
                result.testErrored(name)withMessage(e.message)
                printBackTrace(e) limitedTo(name)
            }
        }
    }
}

assert(self) hasType (gu.Assertion)
