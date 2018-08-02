dialect "minitest"
import "lexer" as lexer
import "parser" as parser
import "errormessages" as errormessages

testSuiteNamed "Indentation" with {
    // These tests are for the version of the lexer that
    // checks indentation

    test "leading spaces on first line" by {
        def s = ‹  def x = 3
  def y = 7
›
        assert { parser.parse(lexer.lexString(s)) }
            shouldRaise (errormessages.SyntaxError)
            mentioning "first line"
    }

    test "tabs used for indentation" by {
        def s = ‹method example {
    def good = "this line is indented with spaces"
	def bad = "this line is indented with a tab"
}›
        assert { lexer.lexString(s) }
            shouldRaise (errormessages.SyntaxError)
            mentioning "spaces, not tabs"
    }

    test "indent body of block" by {
        def s = ‹method example {
def good = "this line is not indented"
    def bad = "this line is indented"
}›
        assert { lexer.lexString(s) }
            shouldRaise (errormessages.SyntaxError)
            mentioning "Please indent"
    }

    test "indent consistently, not decreasing" by {
        def s = ‹method example {
    def good = "this line is indented correctly"
  def bad = "this line is indented less than the prior line"
}›
        assert { lexer.lexString(s) }
            shouldRaise (errormessages.SyntaxError)
            mentioning "do not reduce the indentation"
    }

    test "indent must not increase by one" by {
        def s = ‹method example {
    def good = "this line is indented correctly"
     def bad = "this line is indented one space more than the prior line"
}›
        assert { lexer.lexString(s) }
            shouldRaise (errormessages.SyntaxError)
            mentioning "change of indentation of 1"
    }

    test "opens two blocks" by {
        def s = ‹method example { object {
    def good = "this line is indented correctly"
    def bad = "this line is also indented correctly"
  }
}›
        assert { lexer.lexString(s) }
            shouldRaise (errormessages.SyntaxError)
            mentioning "prior line opened two blocks"
    }

    test "indentatation returns to prior level" by {
        def s = ‹method example {
    def good = "this line is indented correctly"
    def bad = "this line is also indented correctly"
  }  // the close brace should have indentation 0
  method another { "this method is indented by 2, should be 0" }›
        assert { lexer.lexString(s) }
            shouldRaise (errormessages.SyntaxError)
            mentioning "indentation must return to that of the line on which the block was opened"
    }

    test "bad continuation" by {
        def s = ‹method example {
    def continuedString = "this line is indented correctly" ++
          " and this is a continuation" ++
        "but what is this?"
}›
        assert { lexer.lexString(s) }
            shouldRaise (errormessages.SyntaxError)
            mentioning "indentation must be at least 10"
    }
}


testSuiteNamed "Strings" with {
    // These tests are for malformed strings

    test "unclosed string interpolation" by {
        def s = ‹def badString = "Here is a { string with an unmatched brace"›
        assert { lexer.lexString(s) }
            shouldRaise (errormessages.SyntaxError)
            mentioning "string interpolation must end with a '\}'"
    }

    test "string interpolation at end of line" by {
        def s = ‹def badString = "Here is a {
def goodString = "that's all"›
        assert { lexer.lexString(s) }
            shouldRaise (errormessages.SyntaxError)
            mentioning "A string interpolation may not contain a newline."
    }

    test "unclosed string" by {
        def s = ‹def badString = "Here is a string
def goodString = "and here is another"›
        assert { lexer.lexString(s) }
            shouldRaise (errormessages.SyntaxError)
            mentioning "string must be terminated by a \""
    }
}

testSuiteNamed "Single line" with {
    test "interface" by {
        def s = ‹interface { x -> Boolean ; y(arg:String) -> Done }›
        def toks = lexer.lexLine(s)
        def first = toks.poll
        assert (first.kind) shouldBe "keyword"
        assert (first.value) shouldBe "interface"
    }
    test "multiple lines" by {
        def s = ‹interface {
    x -> Boolean
    y(arg:String) -> Done
}›
        assert { lexer.lexLine(s) }
            shouldRaise (ProgrammingError)
            mentioning "not a single line"
    }
}
