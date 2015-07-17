// gUnitTests.grace
// GUnit project
//
// Created by Andrew Black on 7 March 2013.

import "gUnit" as gUnit

def gUnitTest = object {
    class forMethod(name') {
        inherits gUnit.testCaseNamed(name')
        var log is readable
        
        method testMethod { 
            log := log ++ "testMethod "
        }  
        
        method testFailingMethod { 
            self.assert (false) description "deliberate failure"
        }
        
        method testShouldRaise {
            def testException = Exception.refine "for testing"
            self.assert {testException.raise} shouldRaise (testException)
        }
        
        method testShouldntRaise {
            def testException = Exception.refine "for testing"
            self.assert {var x:= 3} shouldntRaise (testException)
            self.assert {Exception.raise} shouldntRaise (testException)
        }
        
        method testBrokenMethod {
            gUnit.thisMethodDoesNotExist
        }
        
//        method testNoAssertion {
//        }

        method setup is confidential {
            super.setup
            log := "setup "
        }
        
        method teardown is confidential {
            super.teardown
            log := log ++ "teardown "
        }
    }
}

def a = gUnit.assertion.trait
def suite = gUnit.testSuite.fromTestMethodsIn(gUnitTest)
a.assert (suite.size) shouldBe 5
def theResult = gUnit.testResult
suite.run(theResult)
a.assert (theResult.summary) shouldBe "5 run, 1 failed, 1 error"

def oneTest = gUnitTest.forMethod("testMethod")
oneTest.run(theResult)
oneTest.assert (oneTest.log) shouldBe "setup testMethod teardown "
a.assert (theResult.summary) shouldBe "6 run, 1 failed, 1 error"
a.assert (theResult.numberOfFailures) shouldBe 1
a.assert (theResult.numberOfErrors) shouldBe 1
a.assert (theResult.failedTestNames.contains "testFailingMethod") description "testFailingMethod did not fail"
a.assert (theResult.erroredTestNames.contains "testBrokenMethod") description "testBrokenMethod did not break"
a.assert (theResult.summary) shouldBe "6 run, 1 failed, 1 error"

if (theResult.summary == "6 run, 1 failed, 1 error") then {
    print "behaved correctly."
} else {
    print(theResult.detailedSummary)
    print "Unexpected result tests of gUnit: {theResult.detailedSummary}"
}


