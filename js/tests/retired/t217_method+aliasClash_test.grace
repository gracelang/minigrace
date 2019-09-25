dialect "minitest"

import "util" as util
import "lexer" as lexer
import "parser" as parser
import "identifierresolution" as ir
import "errormessages" as em

def input = ‹
trait t1 {
    method x(size:Number) { "method x" }
    method y(name:String) { "method y arg {name}" }
}

class c1 {
    use t1 alias w(name) = y(name) exclude x(_)
    method w(kind) { "should be a redeclaration error" }
    method w'(kind) { w(kind) }
}
›.split "\n"

util.lines.clear
util.lines.addAll(input)

def module = parser.parse ( lexer.lexLines (input) )

testSuite {
    test "alias w and method w clash" by {
        assert {ir.resolve(module)} shouldRaise (em.SyntaxError)
            mentioning "'w(_)' cannot be redeclared"
    }
}
