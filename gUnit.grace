// GUnit.grace
// GUnit project
//
// Created by Andrew Black on 6/26/12.


import "mirrors" as mirror
import "math" as math

type Assertion = { 
    assert(bb:Boolean)description(str:String) -> Done
    deny(bb:Boolean)description (str:String)  -> Done        
    assert(bb:Boolean) -> Done
    deny(bb:Boolean)-> Done
    assert(s1:Object)shouldBe(s2:Object) -> Done
    assert(b:Block)shouldRaise(de:Exception) -> Done
    assert(b:Block)shouldntRaise(ue:Exception) -> Done
    assert(s:Object) hasType (t:Type) -> Done
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
    testStarted(name:String) -> Done
    testFailed(name:String) -> Done
    testErrored(name:String) -> Done
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
    rerunErrorsAndFailures(r:TestResult) -> Done
}


class assertion.trait {
    def AssertionFailure is readable = Exception.refine "AssertionFailure"
    
    method failBecause(str) {
        assert (false) description (str)
    }
    method assert(bb: Boolean) description (str) {
        if (! bb) then { AssertionFailure.raise(str) }
    }
    method deny(bb: Boolean) description (str) {
        assert (! bb) description (str)
    }
    method assert(bb: Boolean) {
        assert (bb) description "Assertion failed!"
    }
    method deny(bb: Boolean) {
        assert (! bb)
    }
    method assert(s1:Object) shouldBe (s2:Object) {
        assert (s1 == s2) description "‹{s1}› should be ‹{s2}›"
    }
    method assert(n1:Number) shouldEqual (n2:Number) within (epsilon:Number) {
        assert (math.abs(n1 - n2) <= epsilon) description "‹{n1}› should be approximatly ‹{n2}›"
    }
    method assert(block0) shouldRaise (desiredException) {
        var completedNormally
        try {
            block0.apply
            completedNormally := true
        } catch { raisedException:desiredException ->
            completedNormally := false
        } catch { raisedException ->
            failBecause("code raised exception {raisedException.exception}" ++
                ": \"{raisedException.message}\" instead of {desiredException}")
        }
        if (completedNormally) then {failBecause "code did not raise an exception"}
    }
    method assert(block0) shouldntRaise (undesiredException) {
        try {
            block0.apply
        } catch { raisedException:undesiredException ->
            failBecause "code raised exception {raisedException.exception}"
        } catch { raisedException -> // do nothing: it's ok to raise some other exception
        }
    }
    method assert(value) hasType (DesiredType) {
        match (value)
            case { _:DesiredType -> assert (true) }
            case { _ -> 
                def m = methodsIn(DesiredType) missingFrom (value)
                failBecause "{value} does not have type {DesiredType}; it's missing methods {m}." }
    }
    method methodsIn(DesiredType) missingFrom (value) -> String is confidential {
        def vMethods = mirror.reflect(value).methodNames
        def tMethods = DesiredType.methodNames
        def missing = tMethods -- vMethods
        if (missing.size == 0) then {
            ProgrammingError.raise "{value} seems to have all the methods of {DesiredType}"
        } else {
            var s := ""
            missing.do { each -> s := s ++ each } 
                separatedBy { s := s ++ ", " }
            s
        }
    }
    method deny(value) hasType (UndesiredType) {
        match (value)
            case { _:UndesiredType -> failBecause "{value} has type {UndesiredType}" }
            case { _ -> assert (true) }
    }
}


factory method testCaseNamed(name') -> TestCase {
    inherits assertion.trait

    def size is public = 1
    method name {name'}

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
            print "debugging method {name} ..."
            try {
                setup
                def methodImage = mirror.reflect(self).getMethod(name)
                methodImage.request([[]])
            } finally { teardown }
        } catch {e: self.AssertionFailure ->
            result.testFailed(name)withMessage(e.message)
            printBackTrace(e) limitedTo(16)
        } catch {e: Exception ->
            result.testErrored(name)withMessage(e.message)
            printBackTrace(e) limitedTo(16)
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
        def result = testResult
        self.run(result)
        print(result.detailedSummary)
    }
    
    method debugAndPrintResults {
        def result = testResult
        self.debug(result)
        print(result.detailedSummary)
    }
}


factory method testResult {
    var failSet := set.empty
    var errorSet := set.empty
    var runCount := 0
    
    method testStarted(name) {
        runCount := runCount + 1
    }
    
    method testFailed(name)withMessage(msg) {
        failSet.add(testRecordFor(name)message(msg))
    }
    
    method testErrored(name)withMessage(msg) {
        errorSet.add(testRecordFor(name)message(msg))
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
        set.withAll(errorSet)
    }
    
    method erroredTestNames {
        errorSet.map{each -> each.name}.onto(set)
    }
    
    method numberOfFailures {
        failSet.size
    }
    
    method failures {
        set.withAll(failSet)
    }
    
    method failedTestNames {
        failSet.map{each -> each.name}.onto(set)
    }
    
    method numberOfRuns {
        runCount
    }
}

factory method testRecordFor(testName)message(testMsg) {
    method name {testName}
    method message {testMsg}
    method asString {"{testName}: {testMsg}"}
    method hash {testName.hash}
}

def testSuite is readable = object {
    inherits collections.collectionFactory.trait
    factory method withAll(initialContents) -> TestSuite {
        inherits collections.enumerable.trait
        def tests = list.empty
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
            def result = testResult
            self.run(result)
            print(result.detailedSummary)
            if ((result.numberOfErrors + result.numberOfFailures) > 0) then {
                rerunErrorsAndFailures(result)
            }
        }
        
        method debugAndPrintResults {
            def result = testResult
            self.debug(result)
            print(result.detailedSummary)
        }
        
        method iterator { tests.iterator }
        method do (aBlock) { tests.do (aBlock) }
        method addAll(anotherSuite) {
            anotherSuite.do { each -> self.add(each) }
            self
        }
        method ++ (anotherSuite) {
            outer.withAll(tests).addAll(anotherSuite)
        }
        method rerunErrorsAndFailures(result) {
            print "\nRe-running errors and failures."
            def newResult = testResult
            def errorsAndFailures = 
                result.erroredTestNames.addAll(result.failedTestNames)
            tests.do { each ->
                if (errorsAndFailures.contains(each.name)) then {
                    each.debug(newResult)
                }
            }
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


