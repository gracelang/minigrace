import "gUnit" as gUnit

def gUnitTest = object {
    class forMethod(name') {
        inherits gUnit.testCaseNamed(name')
        var log is readable
        
        method testMethod { 
            log := log ++ "testMethod "
            assert(true)
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
        
        method testNoAssertion {
        }

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

def theResult = gUnit.testResult

def a = object {
    inherits gUnit.assertion.trait
    method countOneAssertion {
        theResult.countOneAssertion
    }
}
def suite = gUnit.testSuite.fromTestMethodsIn(gUnitTest)
print "size of test suite is {suite.size}"
suite.run(theResult)
print "theResult.summary = {theResult.summary}"

def oneTest = gUnitTest.forMethod("testMethod")
oneTest.run(theResult)
print "oneTest.log = {oneTest.log}"
print "theResult.summary = {theResult.summary}"

print "theResult.failedTestNames = {theResult.failedTestNames.asList.sort}"
print "theResult.erroredTestNames = {theResult.erroredTestNames}"

print (theResult.detailedSummary)


