dialect "minitest"

import "lexer" as lexer
import "parser" as parser
import "util" as util
import "errormessages" as errormessages

def SyntaxError = errormessages.SyntaxError     // for brevity

testSuite "Parser error messages" with {

    test "Issue 321 first parameter" by {
        def input = ‹method variable (class) name (cannonicalName) kind (knd) {
   ...
}
›
        util.lines.clear
        util.lines.addAll(input)
        assert {parser.parse ( lexer.lexString (input) )} shouldRaise (SyntaxError)
            mentioning "'class' is a reserved word"
            and "cannot be used as an identifier"
    }

    test "Issue 321 second parameter" by {
        def input = ‹method variable (cls) name (trait) kind (knd) {
   ...
}
›
        util.lines.clear
        util.lines.addAll(input)
        assert {parser.parse ( lexer.lexString (input) )} shouldRaise (SyntaxError)
            mentioning "'trait' is a reserved word"
            and "cannot be used as an identifier"
    }

    test "Issue 321 third parameter" by {
        def input = ‹method variable (cls) name (n) kind (type) {
   ...
}
›
        util.lines.clear
        util.lines.addAll(input)
        assert{parser.parse ( lexer.lexString (input) )} shouldRaise (SyntaxError)
            mentioning "'type' is a reserved word"
            and "cannot be used as an identifier"
    }

    test "Missing comma in first parameter list" by {
        def input = ‹method variable (clas kind) {
   ...
}
›
        util.lines.clear
        util.lines.addAll(input)
        assert {parser.parse ( lexer.lexString (input) )} shouldRaise (SyntaxError)
            mentioning "the identifiers in a parameter list must be separated by commas"
    }

    test "Missing comma in second parameter list" by {
        def input = ‹method variable (clas) names (canonical numeric) {
   ...
}
›
        util.lines.clear
        util.lines.addAll(input)
        assert{parser.parse ( lexer.lexString (input) )} shouldRaise (SyntaxError)
            mentioning "the identifiers in a parameter list must be separated by commas"
    }

}

exit
