import "gUnit" as gUnit
import "lexer" as lexer
import "parser" as parser
import "xmodule" as xmodule
import "ast" as ast
import "util" as util

method checkedModuleFrom (code) {
    def toks = lexer.lexString(code)
    def module3 = parser.parse(toks)
    xmodule.checkDialect(module3)
    module3
}

def DialectError = xmodule.DialectError

class beginningStudentSyntaxCheckingTest {
    class forMethod(m) {
        inherit gUnit.testCaseNamed(m)

        var stuff:List

        method testThatSquareBracketsAreBanned {
            util.verbosity := 60
            assert {checkedModuleFrom ‹dialect "beginningStudent"
var stuff:Sequence := [4, 5]›}
                shouldRaise (DialectError)
                mentioning "square brackets are not used"
        }

        method testForReturnType {
            util.verbosity := util.defaultVerbosity
            assert {checkedModuleFrom ‹dialect "beginningStudent"
method printAndIncrement {
    // prints count and increments it
    // returns nothing
    print(count)
    count := count + 1
}
›} shouldRaise (DialectError) mentioning "no return type given"
        }

        method testForParameterType {
            assert {checkedModuleFrom ‹dialect "beginningStudent"
method printAndIncrementBy(inc) -> Done {
    // prints count and increments it
    print(count)
    count := count + inc
}›} shouldRaise (DialectError) mentioning "no type given" and "parameter 'inc'"
        }

        method testForParameterDescription {
            assert {checkedModuleFrom ‹dialect "beginningStudent"
method printAndIncrementBy(inc:Number) -> Done {
    // prints count and bumps it
    print(count)
    count := count + inc
}›} shouldRaise (DialectError) mentioning "purpose statement" and "parameter inc"
        }
    }
}

def bsTests = gUnit.testSuite.fromTestMethodsIn(beginningStudentSyntaxCheckingTest) named "beginning student syntax test"
bsTests.runAndPrintResults
gUnit.exit

