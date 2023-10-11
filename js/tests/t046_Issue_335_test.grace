dialect "minitest"

import "lexer" as lexer
import "parser" as parser
import "util" as util
import "errormessages" as errormessages

def SyntaxError = errormessages.SyntaxError     // for brevity

testSuite "Parser error messages for mal-formed type argument lists" with {

    test "Issue 335 missing comma" by {
        def input = ‹assertType (Function3⟦Unknown, Unknown, Unknown Number⟧) describes {a, b, c → 1}
›
        util.lines.clear
        util.lines.addAll(input)
        assert {parser.parse ( lexer.lexString (input) )} shouldRaise (SyntaxError)
            mentioning "type argument list"
            and "must have commas between the arguments"
    }

    test "Missing ⟧" by {
        def input = ‹assertType (Function3⟦Unknown, Unknown, Unknown) describes {a, b, c → 1}
›
        util.lines.clear
        util.lines.addAll(input)
        assert {parser.parse ( lexer.lexString (input) )} shouldRaise (SyntaxError)
            mentioning "type argument list"
            and "matching '⟧' at the end"
    }

    test "Empty type argument list" by {
        def input = ‹assertType (Function3⟦⟧) describes {a, b, c → 1}
›
        util.lines.clear
        util.lines.addAll(input)
        assert{parser.parse ( lexer.lexString (input) )} shouldRaise (SyntaxError)
            mentioning "'⟦' must be followed by one or more type arguments"
    }
}

exit
