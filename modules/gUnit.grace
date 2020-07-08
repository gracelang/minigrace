dialect "standard"
// GUnit.grace
// GUnit project
//
// Created by Andrew Black on 6/26/12.

import "collections" as collections
import "mirror" as mirror
import "sys" as sys
import "regularExpression" as regularExpression

type Assertion = interface { 
    assert(bb:Boolean) description(str:String) -> Done
    deny(bb:Boolean) description (str:String)  -> Done
    assert(bb:Boolean) -> Done
    deny(bb:Boolean) -> Done
    assert(s1:Object) shouldBe(s2:Object) -> Done
    assert(s1:Object) shouldntBe(s2:Object) -> Done
    assert(n1:Number) shouldEqual(n2:Number) within(epsilon:Number) -> Done
    assert(b:Procedure0) shouldRaise(desireed:ExceptionKind) -> Done
    assert(b:Procedure0) shouldntRaise(undesired:ExceptionKind) -> Done
    assert(s:Object) hasType(t:Type) -> Done
    deny(s:Object) hasType(t:Type) -> Done
    assertType(T:Type) describes (value) -> Done
    failBecause(Message:String) -> Done
}
   
type TestCase = Assertion & interface {
    run(_:TestResult) -> Done
    debug(_:TestResult) -> Done
    size -> Number
    name -> String
}

type TestRecord = interface {
    name -> String
    message -> String
}

type TestResult = interface {
    testStarted(name:String) -> Done
    testFailed(name:String) -> Done
    testErrored(name:String) -> Done
    testFinished(name:String) -> Done
    erroredTestNames -> List⟦String⟧
    failedTestNames -> List⟦String⟧
    summary -> String
    detailedSummary -> String
    numberOfErrors -> Number
    errors -> List⟦TestRecord⟧
    numberOfFailures -> Number
    failures -> List⟦TestRecord⟧
    numberRun -> Number
    doNotRerunErrors -> Done
    doRerunErrors -> Done
}

type TestSuite = TestCase & interface {
    add(t:TestCase) -> Done
    rerunErrors(r:TestResult) -> Done
}

var numberOfErrorsToRerun is public := 10
var someTestDidNotPass := false

trait assertion {
    once method AssertionFailure {
        Exception.refine "AssertionFailure"
    }
    method countOneAssertion { abstract }
    
    method failBecause(str) {
        assert (false) description (str)
    }
    method assert(bb: Boolean) description(str) {
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
        assert (s1 == s2)
            description "‹{s1.asDebugString}› should be ‹{s2.asDebugString}›"
    }
    method assert(s1:Object) shouldntBe (s2:Object) {
        assert ((s1 == s2).not)
            description "‹{s1.asDebugString}› should not be ‹{s2.asDebugString}›"
    }
    method deny(s1:Object) shouldBe (s2:Object) {
        assert ((s1 == s2).not)
            description "‹{s1.asDebugString}› should not be ‹{s2.asDebugString}›"
    }
    method assert(n1:Number) shouldEqual (n2:Number) within (epsilon:Number) {
        assert ((n1 - n2).abs ≤ epsilon)
            description "‹{n1.asDebugString}› should be approximately ‹{n2.asDebugString}›"
    }
    method assert(block0) shouldRaise (desiredException) {
        assert(block0) shouldRaise (desiredException) mentioning "" and ""
    }
    method assert(block0) shouldRaise (desiredException) mentioning (error) {
        assert(block0) shouldRaise (desiredException) mentioning (error) and ""
    }
    method assert(block0:Procedure0) shouldRaise (desiredException:Pattern)
              mentioning (error1:String) and (error2:String) {
        var completedNormally := true
        countOneAssertion
        try {
            block0.apply
        } catch { raisedException:desiredException ->
            completedNormally := false
            if (raisedException.message.contains(error1).not) then {
                failBecause("code raised exception {raisedException.exception} as expected,"
                    ++ " but the message was\n\"{raisedException.message}\","
                    ++ " which does not mention\n\"{error1}\"")
            }
            if (raisedException.message.contains(error2).not) then {
                failBecause("code raised exception {raisedException.exception} as expected,"
                    ++ " but the message was\n\"{raisedException.message}\","
                    ++ " which does not mention\n\"{error2}\"")
            }
        } catch { raisedException ->
            completedNormally := false
            failBecause("code raised exception {raisedException.exception}" ++
                ": \"{raisedException.message}\" instead of {desiredException}")
        } finally {
            if (completedNormally) then {
                failBecause "code did not raise an exception"
            }
        }
    }
    method assert(block0:Procedure0) shouldRaise (desiredException:Pattern)
              matchedBy (regexStr) {
        var completedNormally := true
        countOneAssertion
        try {
            block0.apply
        } catch { raisedException:desiredException ->
            completedNormally := false
            if (regularExpression.fromString(regexStr).matches(raisedException.message).not) then {
                failBecause("code raised exception {raisedException.exception} as expected,"
                    ++ " but the message was\n\"{raisedException.message}\","
                    ++ " which is not matched by \"{regexStr}\"")
            }
        } catch { raisedException ->
            completedNormally := false
            failBecause("code raised exception {raisedException.exception}" ++
                ": \"{raisedException.message}\" instead of {desiredException}")
        } finally {
            if (completedNormally) then {
                failBecause "code did not raise an exception"
            }
        }
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
        if (Desired.matches(value)) then {
            countOneAssertion
        } else {
            def m = methodsIn(Desired) missingFrom (value)
            def s = if (m.contains " ") then { "s" } else { "" }
            failBecause "{value.asDebugString} does not have {Desired}; it's missing method{s} {m}."
        }
    }
    method assertType(T:Type) describes (value) {
        def missingFromT = protocolOf(value) notCoveredBy(T)
        assert (missingFromT.isEmpty) description (missingFromT)
    }

    method methodsIn(DesiredType) missingFrom (value) -> String is confidential {
        def vMirror = mirror.reflect(value)
        def allMethods = vMirror.methodNames
        def publicMethods = allMethods.filter{ each ->
            vMirror.onMethod(each).isPublic} >> set
        def tMethods = DesiredType.methodNames >> set
        def missing = tMethods -- publicMethods
        if (missing.isEmpty) then {
            ProgrammingError.raise "{value.asDebugString} seems to have all the methods of {DesiredType}"
        } else {
            var s := ""
            missing.do { each -> s := s ++ each } 
                separatedBy { s := s ++ ", " }
            s
        }
    }
    method protocolOf(value) notCoveredBy (Q:Type) -> String is confidential {
        var s := ""
        def vMirror = mirror.reflect(value)
        def allMethods = vMirror.methodNames
        def publicMethods = allMethods.filter{ each ->
            vMirror.onMethod(each).isPublic} >> set
        def qMethods = Q.methodNames >> set
        def missing = publicMethods -- qMethods
        if (missing.isEmpty.not) then {
            s := "{Q} is missing "
            missing.do { each -> s := s ++ each } 
                separatedBy { s := s ++ ", " }
        }
        return s
    }
    method deny(value) hasType (Undesired:Type) {
        if (Undesired.matches(value)) then {
            failBecause "{value.asDebugString} has type {Undesired}"
        } else { 
            countOneAssertion 
        }
    }
}

class testCaseNamed(name') -> TestCase {
    use assertion

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
        def methodImage = mirror.reflect(self).onMethod(name)
        methodImage.requestWithArgs []
    }

    method printBackTrace(exceptionPacket) limitedTo(testName) {
        def ex = exceptionPacket.exception
        def msg = exceptionPacket.message
        def lineNr = exceptionPacket.lineNumber
        def modName = exceptionPacket.moduleName
        if (lineNr == 0) then {
            if (modName == "native code") then {
                print "{ex}: {msg}"
            } else {
                print "{ex} in {modName}: {msg}"
            }
        } else {
            print "{ex} on line {lineNr} of {modName}: {msg}"
        }
        def bt = exceptionPacket.backtrace
        bt.reversed.do { frameDescription ->
            print("  requested from " ++ frameDescription)
            if (frameDescription.contains(testName)) then { return }
            if (frameDescription.contains "test(_)by(_)") then {  
                // this is for minitest, where testName won't be on the stack
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


class testResult {
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
        someTestDidNotPass := true
    }
    
    method testErrored(name)withMessage(msg) {
        errorSet.add(testRecordFor(name)message(msg))
        someTestDidNotPass := true
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
            for (list.withAll(failSet).sort) do { each ->
                output := output ++ "\n    " ++ each
            }
        }
        if (numberOfErrors > 0) then {
            output := output ++ "\nErrors:"
            for (list.withAll(errorSet).sort) do { each ->
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
        list.withAll(errorSet.map{each -> each.name}).sort
    }
    
    method numberOfFailures {
        failSet.size
    }
    
    method failures {
        list.withAll(failSet).sort
    }
    
    method failedTestNames {
        list.withAll(failSet.map{each -> each.name}).sort
    }
    
    method numberRun {
        runCount
    }
}

class testRecordFor(testName)message(testMsg) {
    use equality
    def name is public = testName
    def message is public = testMsg
    method asString {"{name}: {testMsg}"}
    method hash {name.hash}
    method compare(other) { name.compare(other.name) }
    method < (other) { name < other.name }
    method ≤ (other) { name ≤ other.name }
    method == (other) { name == other.name }
    method > (other) { name < other.name }
    method ≥ (other) { name ≥ other.name }
}

def testSuite is public = object {

    class withAll(initialContents) {
        use collections.enumerable
        var name is public := ""
        def tests = list [ ]
        def testNames = set.empty
        var errorsToBeRerun := true

        method doNotRerunErrors { errorsToBeRerun := false }
        method doRerunErrors { errorsToBeRerun := true }
        for (initialContents) do { each -> self.add(each) }
                
        method add(e) {
            def eName = e.name
            if (testNames.contains (eName)) then {
                print "Warning: more than one test named \"{eName}\""
            } else {
                testNames.add(eName)
            }
            tests.push(e)
        }

        method testAt(index) {
            tests.at(index)
        }
        
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
            if ((result.numberOfErrors > 0) && errorsToBeRerun) then {
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
            if (numberOfErrorsToRerun ≤ 0) then { return }
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
    
    method empty { withAll [] }
    
    method fromTestMethodsIn(aTestClass) named (aName) {
        def newSuite = self.empty
        def example = aTestClass.forMethod("null")
        newSuite.name := aName
        for (mirror.reflect(example).methods) do { each ->
            if (each.name.startsWith "test") then {
                if (! each.name.contains "$") then {
                    // we should also check that there are no arguments
                    // but the C-backend needs to emit the metadata
                    newSuite.add(aTestClass.forMethod(each.name))
                }
            }
        }
        newSuite
    }
    
    method fromTestMethodsIn(aTestClass) {
        fromTestMethodsIn(aTestClass) named (className(aTestClass))
    }
}

method className(testClass) {
    def cName = testClass.asString
    if (cName.startsWith "class ") then {
        cName.substringFrom 7 to (cName.size)
    } elseif { cName.startsWith "trait " } then {
        cName.substringFrom 7 to (cName.size)
    } elseif { cName.startsWith "a " } then {
        cName.substringFrom 3 to (cName.size)
    } elseif { cName.startsWith "an " } then {
        cName.substringFrom 4 to (cName.size)
    } else {
        "un-named"
    }
}

method exit {
    // exit the program with a a return code
    // Exit code zero means that all tests passed;
    // exit code 1 means that at least one test did not pass.
    if (someTestDidNotPass.not) then { print "all tests passed" }
    sys.exit(if (someTestDidNotPass) then {1} else {10})
}
