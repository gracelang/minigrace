import "gUnit" as gUnit

def gUnitTest = object {
    class forMethod(name') {
        inherit gUnit.testCaseNamed(name')
            alias tcSetup = setup
            alias tcTeardown = teardown
        var log is readable
        
        method testMethod { 
            log := log ++ "testMethod "
            assert(true)
        }  
        
        method testFailingMethod { 
            self.assert (false) description "deliberate failure"
        }
        
        method testShouldRaise {
            def testException = Exception.refine "testException"
            self.assert {testException.raise "message"} shouldRaise (testException)
        }
        
        method testShouldntRaise {
            def testException = Exception.refine "testException"
            self.assert {var x:= 3} shouldntRaise (testException)
            self.assert {Exception.raise "deliberately raised exception"}
                shouldntRaise (testException)
        }
        
        method testBrokenMethod {
            gUnit.thisMethodDoesNotExist
        }
        
        method testNoAssertion {
        }

        method setup is confidential {
            tcSetup
            log := "setup "
        }
        
        method teardown is confidential {
            tcTeardown
            log := log ++ "teardown "
        }
    }
}

def theResult = gUnit.testResult

def a = object {
    inherit gUnit.assertion
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

print "theResult.failedTestNames = {list(theResult.failedTestNames).sort}"
print "theResult.erroredTestNames = {theResult.erroredTestNames}"

print "Failed:"
theResult.failures.do { each:gUnit.TestRecord ->
    print "    {each.name}: {each.message}"
}

print "Errored:"
theResult.errors.do { each:gUnit.TestRecord ->
    print "    {each.name}: {each.message.substringFrom 1 to 48}"
}



