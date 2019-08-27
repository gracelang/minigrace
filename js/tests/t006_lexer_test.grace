dialect "minitest"
import "lexer" as lexer
import "parser" as parser
import "errormessages" as errormessages
import "util" as util

method assert (tokens1) hasSameTokensAs (tokens2) {
    var message := ""
    if (tokens1.size ≠ tokens2.size) then {
        message := "first token stream has size {tokens1.size} but second stream has size {tokens2.size}\n"
    }
    var t1 := tokens1.first
    var t2 := tokens2.first
    def sz = min(tokens1.size, tokens2.size)
    (1..sz).do { ix →
        if (token (t1) isSameAs (t2) .not) then {
            message := message ++ "streams differ at element {ix}:\n{t1}\n{t2}\n"
        }
        t1 := t1.next
        t2 := t2.next
    }
    assert (message.isEmpty) description (message)
}
method token (t1) isSameAs (t2) {
    (t1.value == t2.value) && (t1.kind == t2.kind)
}

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
            mentioning "indent the body of a block"
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
            mentioning "string interpolation may not contain a newline"
    }

    test "unclosed string" by {
        def s = ‹def badString = "Here is a string
def goodString = "and here is another"›
        assert { lexer.lexString(s) }
            shouldRaise (errormessages.SyntaxError)
            mentioning "string must be terminated by a \""
    }
}

testSuiteNamed "lexLines" with {
    test "interface on one line" by {
        def s = ‹interface { w -> Boolean ; y(arg:String) -> Done }›
        def toks = lexer.lexLines [s]
        def first = toks.poll
        assert (first.kind) shouldBe "keyword"
        assert (first.value) shouldBe "interface"
    }
    test "interface on multiple lines" by {
        def s = ‹interface {
    w -> Boolean
    y(arg:String) -> Done
}›
        def toks = lexer.lexLines [s]
        def first = toks.poll
        assert (first.kind) shouldBe "keyword"
        assert (first.value) shouldBe "interface"
    }
}

testSuiteNamed "lexString" with {
    test "interface on one line" by {
        def s = ‹interface { w -> Boolean ; y(arg:String) -> Done }›
        def toks = lexer.lexString(s)
        def first = toks.poll
        assert (first.kind) shouldBe "keyword"
        assert (first.value) shouldBe "interface"
    }
    test "interface on multiple lines" by {
        def s = ‹interface {
    w -> Boolean
    y(arg:String) -> Done
}›
        def toks = lexer.lexString(s)
        def first = toks.poll
        assert (first.kind) shouldBe "keyword"
        assert (first.value) shouldBe "interface"
    }
}

testSuiteNamed "continuations, and other non-separator newlines" with {
    test "confuse continuation with block start 1" by {
        def l1 = lexer.lexString ‹if ((ann.kind == "identifier") && {
    ann.value == annName }) then {
    return 17
}›  // l1, line 2 is not a continuation line, since it starts a block
        def l2 = lexer.lexString ‹if ((ann.kind == "identifier") && { ann.value == annName }) then {
    return 17
}›
        assert (l1) hasSameTokensAs (l2)
    }

    test "confuse continuation with block start 2" by {
        def l1 = lexer.lexString ‹if ((ann.kind == "identifier") && {
            ann.value == annName }
) then {
    return 17
}›
        def l2 = lexer.lexString ‹if ((ann.kind == "identifier") && { ann.value == annName }) then {
    return 17
}›
        assert (l1) hasSameTokensAs (l2)
    }

    test "confuse continuation with block start 3" by {
        def l1 = lexer.lexString ‹method findAnnotation(node, annName) {
    for (node.annotations) do {ann->
        if ((ann.kind == "identifier") && {
            ann.value == annName }) then {
            return object {
                inherit true
                def value is public = ann
            }
        }
    }
    false
}›
        def l2 = lexer.lexString ‹method findAnnotation(node, annName) {
    for (node.annotations) do {ann->
        if ((ann.kind == "identifier") && { ann.value == annName }) then {
            return object {
                inherit true
                def value is public = ann
            }
        }
    }
    false
}›
        assert (l1) hasSameTokensAs (l2)
    }

    test "badly-indented def" by {
        // the end of the then block does not return to the correct indentation
        def m = ‹method test {
    def rnm = if (opSym == "+") then { "sum"
                } else { "opresult"
                }
}›
        assert {lexer.lexString(m)}
            shouldRaise (errormessages.SyntaxError)
            mentioning "this is not the body of a block"
    }

    test "well-indented def" by {
        // the end of the then block is at the same indentation as the start
        def m = ‹method test(opSym) {
    def rnm = if (opSym == "+") then { "sum"
    } else { "opresult"
    }
}›
        var tok := lexer.lexString(m).first
        while {tok.isEof.not} do {
            assert (tok.isSeparator.not)
                description "separator token {tok} found"
            tok := tok.next
        }
    }

    test "def with continuation line" by {
        // the whole def is on one (continued) line
        def m = ‹method test(opSym) {
    def rnm = if (opSym == "+") then { "sum" }
          else { "opresult" }
}›
        var tok := lexer.lexString(m).first
        while {tok.isEof.not} do {
            assert (tok.isSeparator.not)
                description "separator token {tok} found"
            tok := tok.next
        }
    }
}

