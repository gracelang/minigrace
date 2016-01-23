// GUnit.grace
// GUnit project
//
// Created by Andrew Black on 6/26/12.


import "mirrors" as mirror
import "math" as math

type Assertion = { 
    assert(bb:Boolean) description(str:String) -> Done
    deny(bb:Boolean) description (str:String)  -> Done
    assert(bb:Boolean) -> Done
    deny(bb:Boolean) -> Done
    assert(s1:Object) shouldBe(s2:Object) -> Done
    assert(s1:Object) shouldntBe(s2:Object) -> Done
    assert(n1:Number) shouldEqual(n2:Number) within(epsilon:Number) -> Done
    assert(b:Block) shouldRaise(desireed:ExceptionKind) -> Done
    assert(b:Block) shouldntRaise(undesired:ExceptionKind) -> Done
    assert(s:Object) hasType(t:Type) -> Done
    failBecause(Message:String) -> Done
}
   
type TestCase = Assertion & type {
    run(_:TestResult) -> Done
    debug(_:TestResult) -> Done
    size -> Number
    name -> String
}

type TestRecord = {
    name -> String
    message -> String
}

type TestResult =  {
    testStarted(name:String) -> Done
    testFailed(name:String) -> Done
    testErrored(name:String) -> Done
    testFinished(name:String) -> Done
    erroredTestNames -> List<String>
    failedTestNames -> List<String>
    summary -> String
    detailedSummary -> String
    numberOfErrors -> Number
    errors -> List<TestRecord>
    numberOfFailures -> Number
    failures -> List<TestRecord>
    numberRun -> Number
}

type TestSuite = TestCase & type {
    add(t:TestCase) -> Done
    rerunErrors(r:TestResult) -> Done
}

var numberOfErrorsToRerun is public := 10

class assertion.trait {
    def AssertionFailure is readable = Exception.refine "AssertionFailure"
    method countOneAssertion { abstract }
    
    method failBecause(str) {
        assert (false) description (str)
    }
    method assert(bb: Boolean)description(str) {
        countOneAssertion
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
    method assert(s1:Object) shouldntBe (s2:Object) {
        assert ((s1 == s2).not) description "‹{s1}› should not be ‹{s2}›"
    }
    method deny(s1:Object) shouldBe (s2:Object) {
        assert ((s1 == s2).not) description "‹{s1}› should not be ‹{s2}›"
    }
    method assert(n1:Number) shouldEqual (n2:Number) within (epsilon:Number) {
        assert (math.abs(n1 - n2) <= epsilon) description "‹{n1}› should be approximatly ‹{n2}›"
    }
    method assert(block0) shouldRaise (desiredException) {
        var completedNormally
        countOneAssertion
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
        countOneAssertion
        try {
            block0.apply
        } catch { raisedException:undesiredException ->
            failBecause "code raised exception {raisedException.exception}"
        } catch { _ -> 
            // do nothing; it's OK to raise a different exception.
        }
    }
    method assert(value) hasType (Desired:Type) {
        match (value)
            case { _:Desired -> countOneAssertion }
            case { _ -> 
                def m = methodsIn(Desired) missingFrom (value)
                failBecause "{value} does not have type {Desired}; it's missing methods {m}." }
    }
    method assertType(T:Type) describes (value) {
        def missingFromT = protocolOf(value) notCoveredBy(T)
        assert (missingFromT.isEmpty) description (missingFromT)
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
    method protocolOf(value) notCoveredBy (Q:Type) -> String is confidential {
        var s := ""
        def vMethods = set.withAll(mirror.reflect(value).methodNames)
        def qMethods = set.withAll(Q.methodNames)
        def missing = (vMethods -- qMethods).filter{m -> 
            (! m.endsWith "()object") && (m != "outer")}.asSet
        if (missing.isEmpty.not) then {
            s := "{Q.asDebugString} is missing "
            missing.do { each -> s := s ++ each } 
                separatedBy { s := s ++ ", " }
        }
        return s
    }
    method deny(value) hasType (Undesired:Type) {
        match (value)
            case { _:Undesired ->
                failBecause "{value} has type {Undesired}"
            }
            case { _ -> 
                countOneAssertion 
            }
    }
}

def noArguments = sequence.with(sequence.empty)

factory method testCaseNamed(name') -> TestCase {
    inherits assertion.trait

    def size is public = 1
    var currentResult
    method name {name'}

    method setup { }
    method teardown { }
    method countOneAssertion {
        currentResult.countOneAssertion
    }

    method run (result) {
        currentResult := result
        result.testStarted(name)
        try {
            try {
                setup
                runTest
            } finally { teardown }
        } catch {e: self.AssertionFailure ->
            result.testFailed(name)withMessage(e.message)
        } catch {e: Exception ->
            result.testErrored(name)withMessage "{e.exception}: {e.message}"
        }
        result.testFinished(name)
    }

    method debug (result) {
        currentResult := result
        result.testStarted(name)
        try {
            print "\ndebugging method {name} ..."
            try {
                setup
                runTest
            } finally { teardown }
        } catch {e: Exception ->
            result.testErrored(name)withMessage(e.message)
            printBackTrace(e) limitedTo(name)
        }
        result.testFinished(name)
    }
    
    method runTest {
        def methodImage = mirror.reflect(self).getMethod(name)
        methodImage.request(noArguments)
    }

    method printBackTrace(exceptionPacket) limitedTo(testName) {
        def ex = exceptionPacket.exception
        def msg = exceptionPacket.message
        def lineNr = exceptionPacket.lineNumber
        print "{ex} on line {lineNr}: {msg}"
        def bt = exceptionPacket.backtrace
        while {bt.size > 0} do {
            def frameDescription = bt.pop
            print("  called from " ++ frameDescription)
            if (frameDescription.contains(testName)) then { return }
            if (frameDescription.contains "testCaseNamed()setupIn()asTestNumber")
                    then {  
                // this is for minitest, where the name won't be on the stack
                return
            }
        }
    }

    method runAndPrintResults {
        def result = testResult
        self.run(result)
        if (name == "") then {
            print "{result.detailedSummary}"
        } else {
            print "{self.name}: {result.detailedSummary}"
        }
    }
    
    method debugAndPrintResults {
        def result = testResult
        self.debug(result)
        if (name == "") then {
            print "{result.detailedSummary}"
        } else {
            print "{self.name}: {result.detailedSummary}"
        }
    }
}


factory method testResult {
    var failSet := set.empty
    var errorSet := set.empty
    var runCount := 0
    var currentCountOfAssertions := 0

    method countOneAssertion {
        currentCountOfAssertions := currentCountOfAssertions + 1
    }

    method testStarted(name) {
        runCount := runCount + 1
        currentCountOfAssertions := 0
    }

    method testFinished(name) {
        if(currentCountOfAssertions == 0) then {
            failSet.add(testRecordFor(name)message("no assertions were checked in this test"))
        }
    }
    
    method testFailed(name)withMessage(msg) {
        failSet.add(testRecordFor(name)message(msg))
    }
    
    method testErrored(name)withMessage(msg) {
        errorSet.add(testRecordFor(name)message(msg))
        currentCountOfAssertions := 1   // to prevent the "no assertions" failure
    }
    
    method summary {
        def s = if (numberOfErrors == 1) then {""} else {"s"}
        "{runCount} run, {numberOfFailures} failed, {numberOfErrors} error{s}"
    }
    
    method detailedSummary {
        var output := summary
        if (numberOfFailures > 0) then {
            output := output ++ "\nFailures:"
            for (failSet.asList.sort) do { each ->
                output := output ++ "\n    " ++ each
            }
        }
        if (numberOfErrors > 0) then {
            output := output ++ "\nErrors:"
            for (errorSet.asList.sort) do { each ->
                output := output ++ "\n    " ++ each
            }
        }
        output
    }
    
    method numberOfErrors {
        errorSet.size
    }
    
    method errors {
        list.withAll(errorSet).sort
    }
    
    method erroredTestNames {
        errorSet.map{each -> each.name}.asList.sort
    }
    
    method numberOfFailures {
        failSet.size
    }
    
    method failures {
        list.withAll(failSet).sort
    }
    
    method failedTestNames {
        failSet.map{each -> each.name}.asList.sort
    }
    
    method numberRun {
        runCount
    }
}

factory method testRecordFor(testName)message(testMsg) {
    method name {testName}
    method message {testMsg}
    method asString {"{testName}: {testMsg}"}
    method hash {testName.hash}
    method compare(other) { testName.compare(other.name) }
    method < (other) { testName < other.name }
    method <= (other) { testName <= other.name }
    method ≤ (other) { testName ≤ other.name }
    method > (other) { testName < other.name }
    method >= (other) { testName >= other.name }
    method ≥ (other) { testName ≥ other.name }
}

def testSuite is public = object {
    inherits collections.collectionFactory.trait
    factory method withAll(initialContents) {
        inherits collections.enumerable.trait
        var name is public := ""
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
        
        method runAndPrintResults {
            def result = testResult
            self.run(result)
            if (name == "") then {
                print "{result.detailedSummary}"
            } else {
                print "{self.name}: {result.detailedSummary}"
            }
            if (result.numberOfErrors > 0) then {
                rerunErrors(result)
            }
        }
        
        method debugAndPrintResults {
            def result = testResult
            self.debug(result)
            if (name == "") then {
                print "{result.detailedSummary}"
            } else {
                print "{self.name}: {result.detailedSummary}"
            }
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
        method rerunErrors(result) {
            if (numberOfErrorsToRerun <= 0) then { return }
            var n := min(result.numberOfErrors, numberOfErrorsToRerun)
            if (n == 1) then {
                print "\nRe-running 1 error."
            } else {
                print "\nRe-running {n} errors."
            }
            def newResult = testResult
            def errors = result.erroredTestNames
            tests.do { each ->
                if (errors.contains(each.name)) then {
                    each.debug(newResult)
                    n := n - 1
                    if (n == 0) then { return }
                }
            }
        }
    }
    
    method fromTestMethodsIn(aTestClass) {
        def newSuite = self.empty
        def example = aTestClass.forMethod("null")
        newSuite.name := className(aTestClass)
        for (mirror.reflect(example).methods) do { each ->
            if (each.name.startsWith "test") then {
                if (! each.name.endsWith "()object") then {
                    // we should also check that there are no arguments
                    // but a mirror on a method with no arguments currently
                    // has a partcount of 1!
                    newSuite.add(aTestClass.forMethod(each.name))
                }
            }
        }
        newSuite
    }
}

method className(testClass) {
    if (prelude.engine == "js") then {
        def cName = testClass.asString
        if (cName.startsWith "class ") then {
            return cName.substringFrom 7 to (cName.size)
        } else {
            return "un-named"
        }
    }
    def description = testClass.forMethod("null").asString
    // description looks like "self.wombat[0x0x7fa7d2603ce8]"
    var answer := ""
    description.do { ch ->
        if (ch == ".") then { 
            answer := ""
        } elseif {ch == "["} then { 
            return answer 
        } else {
            answer := answer ++ ch
        }
    }
    if (answer == "forMethod") then { return "un-named" }
    return answer
}
