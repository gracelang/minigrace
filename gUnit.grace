// GUnit.grace
// GUnit project
//
// Created by Andrew Black on 6/26/12.


import "mirrors" as mirror
import "collections" as collections
def aList = collections.aList
def aSet = collections.aSet

type Object = { 
    == (Object) -> Boolean
//    asString  -> String
//    asDebugString -> String
}

type Assertion = { 
    assert(bb:Boolean)description(str:String) -> Done
    deny(bb:Boolean)description (str:String)  -> Done        
    assert(bb:Boolean) -> Done
    deny(bb:Boolean)-> Done
    assert(s1:Object)shouldBe(s2:Object) -> Done
    assert(b:Block)shouldRaise(de:Exception) -> Done
    assert(b:Block)shouldntRaise(ue:Exception) -> Done
}
   
type TestCase = Assertion & type {
    run(_:TestResult) -> Done
    debug(_:TestResult) -> Done
    size -> Number
    name -> String
}

type Set = {
    add -> done
    ...
}

type TestResult =  {
    testStarted(String) -> Done
    testFailed(String) -> Done
    testErrored(String) -> Done
    summary -> String
    detailedSummary -> String
    numberOfErrors -> Number
    errors -> Set<String>
    numberOfFailures -> Number
    failures -> Set<String>
    numberOfRuns -> Number
}

type TestSuite = TestCase & type {
    add(t:TestCase) -> Done
}


class assertion.trait {
    def failure is readable = Error.refine "Assertion Failure"
    
    method failBecause(str) {
        assert (false) description (str)
    }

    method assert(bb: Boolean)description(str) {
        if (! bb) 
        then {
            failure.raise(str)
        }        
    }

    method deny(bb: Boolean)description (str) {
        assert (! bb) description (str)
    }
        
    method assert(bb: Boolean) {
        assert (bb) description "Assertion failed!"
    }

    method deny(bb: Boolean) {
        assert (! bb)
    }

    method assert(s1:Object)shouldBe(s2:Object) {
        assert (s1 == s2) description "‹{s1}› should be ‹{s2}›"
    }
    
    method assert(block0)shouldRaise(desiredException) {
        var completedNormally
        try {
            block0.apply
            completedNormally := true
        } catch { raisedException:desiredException ->
            completedNormally := false
        } catch { raisedException ->
            failBecause "code raised exception {raisedException.exception} instead of {desiredException}" 
        }
        if (completedNormally) then {failBecause "code did not raise an exception"}
    }
    
    method assert(block0)shouldntRaise(undesiredException) {
        try {
            block0.apply
        } catch { raisedException:undesiredException ->
            failBecause "code raised exception {raisedException.exception}"
        } catch { raisedException -> // do nothing: it's ok to raise some other exception
        }
    }
}


class aTestCaseNamed(name') -> TestCase {
    inherits assertion.trait
         
    method setup { }
    method teardown { }

    method run (result) {
        result.testStarted(name)
        try {
            try {
                setup
                def methodImage = mirror.reflect(self).getMethod(name)
                methodImage.request([[]])
            } finally { teardown }
        } catch {e: self.failure ->
            result.testFailed(name)withMessage(e.message)
        } catch {e: Exception ->
            result.testErrored(name)withMessage(e.message)
        }
    }

    method debug (result) {
        result.testStarted(name)
        try {
            print ""
            print "debugging method {name} ..."
            try {
                setup
                def methodImage = mirror.reflect(self).getMethod(name)
                methodImage.request([[]])
            } finally { teardown }
        } catch {e: self.failure ->
            result.testFailed(name)withMessage(e.message)
            printBackTrace(e) limitedTo(8)
        } catch {e: Exception ->
            result.testErrored(name)withMessage(e.message)
            printBackTrace(e) limitedTo(8)
        }
    }
    
    method printBackTrace(exceptionPacket) limitedTo(callLimit) {
        def ex = exceptionPacket.exception
        def msg = exceptionPacket.message
        def lineNr = exceptionPacket.lineNumber
        print "{ex} on line {lineNr}: {msg}"
        def bt = exceptionPacket.backtrace
        var backTraceLimit := callLimit
        while {bt.size > 0} do {
            backTraceLimit := backTraceLimit - 1
            if (backTraceLimit <= 0) then {
                print "..."
                return
            }
            print("  called from " ++ bt.pop)
        }
    }
    
    method printFullBacktrace(exceptionPacket) {
        print "backtrace:"
        def bt = exceptionPacket.backtrace
        while {bt.size > 0} do {
            print("  called from " ++ bt.pop)
        }
    }

    method runAndPrintResults {
        def result = aTestResult
        self.run(result)
        print(result.detailedSummary)
    }
    
    method debugAndPrintResults {
        def result = aTestResult
        self.debug(result)
        print(result.detailedSummary)
    }

    def size is public = 1

    method name {name'}
}


class aTestResult{
    var failSet := aSet.empty
    var errorSet := aSet.empty
    var runCount := 0
    
    method testStarted(name) {
        runCount := runCount + 1
    }
    
    method testFailed(name)withMessage(msg) {
        failSet.add(aTestRecordFor(name)message(msg))
    }
    
    method testErrored(name)withMessage(msg) {
        errorSet.add(aTestRecordFor(name)message(msg))
    }
    
    method summary {
        def s = if (numberOfErrors == 1) then {""} else {"s"}
        "{runCount} run, {numberOfFailures} failed, {numberOfErrors} error{s}"
    }
    
    method detailedSummary {
        var output := summary
        if (numberOfFailures > 0) then {
            output := output ++ "\nFailures:"
            for (failSet) do { each ->
                output := output ++ "\n    " ++ each
            }
        }
        if (numberOfErrors > 0) then {
            output := output ++ "\nErrors:"
            for (errorSet) do { each ->
                output := output ++ "\n    " ++ each
            }
        }
        output
    }
    
    method numberOfErrors {
        errorSet.size
    }
    
    method errors {
        aSet.withAll(errorSet)
    }
    
    method erroredTestNames {
        errorSet.map{each -> each.name}.onto(aSet)
    }
    
    method numberOfFailures {
        failSet.size
    }
    
    method failures {
        aSet.withAll(failSet)
    }
    
    method failedTestNames {
        failSet.map{each -> each.name}.onto(aSet)
    }
    
    method numberOfRuns {
        runCount
    }
}

class aTestRecordFor(testName)message(testMsg) {
    method name {testName}
    method message {testMsg}
    method asString {"{testName}: {testMsg}"}
    method hashcode {testName.hashcode}
}

def aTestSuite is readable = object {
    inherits collections.aCollectionFactory.trait
    method withAll(initialContents) -> TestSuite {
        object {
            inherits collections.anEnumerable.trait
            def tests = aList.new
            for (initialContents) do { each -> self.add(each) }
                    
            method add(e) { tests.push(e) }
            
            method run(result) {
                for (tests) do { each -> each.run(result) }
            }
            
            method debug(result) {
                for (tests) do { each -> each.debug(result) }
            }

            method size { tests.size }
            
            method name { 
                var namelist := ""
                for (tests) do { each -> namelist := namelist ++ each.name ++ " " }
                namelist
            }
            
            method runAndPrintResults {
                def result = aTestResult
                self.run(result)
                print(result.detailedSummary)
            }
            
            method debugAndPrintResults {
                def result = aTestResult
                self.debug(result)
                print(result.detailedSummary)
            }
            
            method iterator { tests.iterator }
            method do { tests.do }
        }
    }
    
    method fromTestMethodsIn(aTestClass) -> TestCase {
        def newSuite = self.empty
        def example = aTestClass.forMethod("null")
        for (mirror.reflect(example).methods) do { each ->
            if (each.name.substringFrom(1)to(4)=="test") then {
                newSuite.add(aTestClass.forMethod(each.name))
            }
        }
        newSuite
    }
}


