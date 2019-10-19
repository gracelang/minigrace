dialect "minitest"

import "lexer" as lexer
import "parser" as parser
import "errormessages" as errormessages
import "util" as util
import "ast" as ast
import "mirror" as mirror
import "unixFilePath" as fp
import "sys" as sys

//////////////////
// immutable points
//////////////////

method pointTx(x') y(y') constructor(fn:Function2) {
    // the fn argument is a function that will construct a new object of
    // whatever class uses this trait
    object {
        method x { x' }
        method y { y' }
        method + (o) {
            fn.apply(o.x + x, o.y + y)
        }
        method asString { "point({x}, {y})" }
    }
}

method colorT(c') constructor(fn:Function1) {
    // the fn argument is a function that will construct a new object of
    // whatever class uses this trait
    object {
        method c { c' }
        method darker { 
            fn.apply "dark {c}"
        }
        method asString { "color {c}" }
    }
}

class pointX(xcoord) y(ycoord) colored(initialC) {
    use pointTx(xcoord) y(ycoord) constructor {x, y → pointX(x) y(y) colored(initialC)}
        // notice how we provide the 2-parameter constructor required by this trait
        alias pointAsString = asString
    use colorT(initialC) constructor {c → pointX(xcoord) y(ycoord) colored(c)}
        alias colorAsString = asString
    method asString { pointAsString ++ " " ++ colorAsString }
}

testSuiteNamed "parameterized traits" with {
    test "red origin" by {
        def origin = pointX 0 y 0 colored "red"
        assert (origin.asString) shouldBe "point(0, 0) color red"
    }
    test "blue right" by {
        def right = pointX 4 y 0 colored "blue"
        assert "{right}" shouldBe "point(4, 0) color blue"
    }
    test "darker new point" by {
        def right = pointX 4 y 0 colored "blue"
        def up = pointX 0 y 3 colored "green"
        def sum = right + up
        def darkSum = sum.darker
        def darkRight = right.darker
        assert "{right}" shouldBe "point(4, 0) color blue"
        assert "{up}" shouldBe "point(0, 3) color green"
        assert "{sum}" shouldBe "point(4, 3) color blue"
        assert "{darkSum}" shouldBe "point(4, 3) color dark blue"
        assert "{darkRight}" shouldBe "point(4, 0) color dark blue"
    }
}

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

testSuiteNamed "indentation" with {
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


testSuiteNamed "string lexing" with {
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

testSuiteNamed "continuation lines" with {
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

def input = ‹once method oneTypeDependent[[K]] {
    return K
}
once method twoTypeDependent⟦K⟧ {
    return K
}
method sumOf(a) and (b) { a + b }
›.split "\n"

util.lines.clear
util.lines.addAll(input)
    // lexLines does this too, but then reinstates the old
    // input before returning.

def module = parser.parse ( lexer.lexLines (input) )

def firstMethod = module.body.first
def secondMethod = module.body.second
def thirdMethod = module.body.third

testSuiteNamed "once methods" with {
    test "found first once method" by {
        assert (firstMethod.isMethod) description "firstMethod is a {firstMethod.kind}"
        assert (firstMethod.isOnceMethod) description "method {firstMethod.nameString} is not a once method"
    }
    
    test "first once method header range starts at 1:1" by {
        def r = firstMethod.headerRange
        assert (r.start) shouldBe (ast.line 1 column 1)
    }
    
    test "first once method header range ends at 1:33" by {
        def r = firstMethod.headerRange
        assert (r.end) shouldBe (ast.line 1 column 33)
        assert (util.lines.first.substringFrom 32 to 33) shouldBe "]]"
    }
    test "found second once method" by {
        assert (secondMethod.isMethod) description "secondMethod is a {secondMethod.kind}"
        assert (secondMethod.isOnceMethod) description "method {secondMethod.nameString} is not a once method"
    }
    
    test "second once method header range starts at 4:1" by {
        def r = secondMethod.headerRange
        assert (r.start) shouldBe (ast.line 4 column 1)
    }
    
    test "second once method header range ends at 4:31" by {
        def r = secondMethod.headerRange
        assert (r.end) shouldBe (ast.line 4 column 31)
        assert (util.lines.fourth.substringFrom 31 to 31) shouldBe "⟧"
    }
    test "found third method" by {
        assert (thirdMethod.isMethod) description "thirdMethod is a {thirdMethod.kind}"
        deny (thirdMethod.isOnceMethod) description "method {thirdMethod.nameString} is a once method"
    }
    
    test "third method header range starts at 7:1" by {
        def r = thirdMethod.headerRange
        assert (r.start) shouldBe (ast.line 7 column 1)
    }
    
    test "third once method header range ends at 7:23" by {
        def r = thirdMethod.headerRange
        assert (r.end) shouldBe (ast.line 7 column 23)
        assert (util.lines.at(7).substringFrom 21 to 23) shouldBe "(b)"
    }
}

type T = interface {
    x -> Number
    U -> Type⟦String⟧
    y -> String
}

method foo -> T {
    object {
        method x {...}
        method y {...}
    }
}

method betterFoo -> T {
    object {
        method x {...}
        type U = String
        method y {...}
    }
}

testSuiteNamed "types in interfaces" with {
    test "type T has U method" by {
        assert (T.methodNames) shouldBe (set.withAll ["x", "y", "U"])
    }
    
    test "foo doesn't return a T" by {
        assert { foo } shouldRaise (TypeError) mentioning "missing method U"
    }

    test "betterFoo does return a T" by {
        assert (betterFoo) hasType (T)
    }

    test "local type has method W" by {
        def local = object {
            type L = interface {
                W -> Type
                x -> Number
            }
        }
        assert (local.L.methodNames) shouldBe (set.withAll ["x", "W"])
    }
}

testSuiteNamed "numeric ordering" with {
    test "equality of numbers" by { assert (17 == 17) }
    test "equality of number and string"  by { deny (17 == "17") }
    test "< on numbers true" by { assert (17 < 18) }
    test "< on numbers false" by { deny (18 < 18) }
    test "< on numbers error" by { assert {19 < "18"} shouldRaise (TypeError)}
    test "> on numbers true" by { assert (19 > 18) }
    test "> on numbers false" by { deny (18 > 18) }
    test "> on numbers error" by { assert {19 > "18"} shouldRaise (TypeError)}
    test "≤ on numbers true" by { assert (17 ≤ 18) }
    test "≤ on numbers false" by { deny (18 ≤ 17) }
    test "≤ on numbers error" by { assert {19 ≤ "18"} shouldRaise (TypeError)}
    test "≥ on numbers true" by { assert (19 ≥ 18) }
    test "≥ on numbers false" by { deny (18 ≥ 19) }
    test "≥ on numbers error" by { assert {19 ≥ "18"} shouldRaise (TypeError)}
    test "prefix <" by {
        def p = < 6
        assert(p.matches 5)
        deny (p.matches 6)
        deny (p.matches 7)
    }
    test "prefix >" by {
        def p = > 6
        assert(p.matches 7)
        deny (p.matches 6)
        deny (p.matches 5)
    }
    test "prefix ≤" by {
        def p = ≤ 6
        assert(p.matches 5)
        assert (p.matches 6)
        deny (p.matches 7)
    }
    test "prefix ≥" by {
        def p = ≥ 6
        assert(p.matches 7)
        assert (p.matches 6)
        deny (p.matches 5)
    }
}

testSuiteNamed "file paths" with {
    test "split two colon" by {
        def p = "abd:def"
        assert (fp.split(p)) shouldBe [ "abd/", "def/" ]
    }
    test "split two colon suffix" by {
        def p = "abd:def:"
        assert (fp.split(p)) shouldBe [ "abd/", "def/" ]
    }
    test "split two colon prefix" by {
        def p = ":abd:def"
        assert (fp.split(p)) shouldBe [ "abd/", "def/" ]
    }
    test "split two with double colon" by {
        def p = "abd::def:"
        assert (fp.split(p)) shouldBe [ "abd/", "def/" ]
    }
    test "from String" by {
        def p = fp.fromString "/usr/local/lib/grace"
        assert (p.directory) shouldBe "/usr/local/lib/"
        assert (p.base) shouldBe "grace"
        assert (p.extension) shouldBe ""
    }

    test "type lower bound" by {
        def p = fp.fromString "/usr/local/lib/grace"
        assert (p) hasType (fp.FilePath)
    }
    test "type upper bound" by {
        def p = fp.fromString "/usr/local/lib/grace"
        assertType (fp.FilePath) describes (p)
    }
    test "directory never empty" by {
        def p = fp.fromString "foo.grace"
        assert (p.directory) shouldBe "./"
        assert (p.base) shouldBe "foo"
        assert (p.extension) shouldBe ".grace"
    }
    test "from String with extension" by {
        def p = fp.fromString "/usr/local/lib/grace/compiler.grace"
        assert (p.directory) shouldBe "/usr/local/lib/grace/"
        assert (p.base) shouldBe "compiler"
        assert (p.extension) shouldBe ".grace"
    }
    test "building" by {
        def p = fp.null
            .setDirectory "/usr/local/lib/grace/"
            .setBase "compiler"
            .setExtension "grace"
        assert (p.directory) shouldBe "/usr/local/lib/grace/"
        assert (p.base) shouldBe "compiler"
        assert (p.extension) shouldBe ".grace"
    }
    test "extension modification" by {
        def p = fp.null
            .setDirectory "/usr/local/lib/grace/"
            .setBase "compiler"
            .setExtension "grace"
        assert (p.extension) shouldBe ".grace"
        p.setExtension "js"
        assert (p.directory) shouldBe "/usr/local/lib/grace/"
        assert (p.base) shouldBe "compiler"
        assert (p.extension) shouldBe ".js"
    }
    test "directory modification" by {
        def p = fp.null
            .setDirectory "/usr/local/lib/grace/"
            .setBase "compiler"
            .setExtension "grace"
        assert (p.extension) shouldBe ".grace"
        p.setDirectory "/users/black/"
        assert (p.directory) shouldBe "/users/black/"
        assert (p.base) shouldBe "compiler"
        assert (p.extension) shouldBe ".grace"
    }
    test "base modification" by {
        def p = fp.null
            .setDirectory "/usr/local/lib/grace/"
            .setBase "compiler"
            .setExtension "grace"
        assert (p.extension) shouldBe ".grace"
        p.setBase "minigrace"
        assert (p.directory) shouldBe "/usr/local/lib/grace/"
        assert (p.base) shouldBe "minigrace"
        assert (p.extension) shouldBe ".grace"
    }
    test "as string" by {
        def p = fp.fromString "/usr/local/lib/grace/compiler.grace"
        assert (p.asString) shouldBe "/usr/local/lib/grace/compiler.grace"
    }
    test "equality" by {
        def p = fp.fromString "/usr/local/lib/grace/compiler.grace"
        def q = fp.withDirectory "/usr/local/lib/grace/"
                    .setBase "compiler" .setExtension "grace"
        assert (p.asString) shouldBe "/usr/local/lib/grace/compiler.grace"
        assert (q.asString) shouldBe "/usr/local/lib/grace/compiler.grace"
        assert (p) shouldBe (q)
        assert (q) shouldBe (p)
        assert (p.hash) shouldBe (q.hash)
    }
    test "inequality" by {
        def p = fp.fromString "/usr/local/lib/grace/compiler.grace"
        def q = fp.withDirectory "/usr/lib/grace/"
                    .setBase "compiler" .setExtension "grace"
        assert (p.asString) shouldBe "/usr/local/lib/grace/compiler.grace"
        assert (q.asString) shouldBe "/usr/lib/grace/compiler.grace"
        assert (p) shouldntBe (q)
        assert (q) shouldntBe (p)
        assert (p.hash) shouldntBe (q.hash)
    }
    test "absolute file name" by {
        def p = fp.filePath
                .setBase "t004_minitest_consolidated_test"
                .setExtension "grace"
        def cwd = sys.cwd
        if (cwd.endsWith "minigrace/") then {
            // make test work when run from minigrace/ as well as from tests/
            p.directory := "js/tests/"
        }
        assert (p.exists) description "{p} does not exist"
        def q = p.absolute
        assert (q.exists) description "{q} does not exist"
        assert (q.asString.startsWith(cwd))
            description "q.asString is {q}; it does not start with {cwd}"
        assert (q.directory.endsWith "/") description "{q} does not end with a \"/\""
    }
}
testSuite "sys" with {
    test "sys.argv" by {
        def cmdArgs:Sequence⟦String⟧ = sys.argv
        assert ((cmdArgs.at 2).contains "/t004_minitest_consolidated_test")
              description "command line arguments = {cmdArgs}"
    }
    test "working directory" by {
        def workingDirectory = sys.cwd
        assert (workingDirectory.endsWith "minigrace/" ||
            workingDirectory.endsWith "tests/")
    }
    test "elapsedTime" by {
        def t0:Number = sys.elapsedTime
        def t1:Number = sys.elapsedTime
        assert (t0 < 2) description "elapsedTime = {t0}"
        assert ((t1 - t0) < 1) description "duration = {t1 - t0}"
    }
    test "execPath" by {
        def p = sys.execPath
        assert (p.endsWith "minigrace/js/tests/")
            description "sys.execPath = {p}"
    }
    test "requestCount" by {
        def c0 = sys.requestCount
        def c1 = sys.requestCount
        assert (c1) shouldBe (c0 + 1)
    }
    test "environ" by {
        def env:sys.Environment = sys.environ
        def os = env.at "OS"
        assert (env.contains "OS")
            description "Environment does not define OS"
        assert ((os == "Darwin") || (os == "Linux"))
            description "$(OS) = {os}"
    }
    test "environ put" by {
        def env:sys.Environment = sys.environ
        deny (env.contains "Wombat_76")
            description "environment contains \"Wombat_76\""
        env.at "Wombat_76" put "koala"
        assert (env.contains "Wombat_76")
            description "Environment does not define Wombat_76 after it was put there"
        assert (env.at "Wombat_76") shouldBe "koala"
        env.remove "Wombat_76"
        deny (env.contains "Wombat_76")
    }
}

var s

def a = object {
    method new(arg) {
        object {
            s := s ++ "object a ({arg})"
        }
    }
    method asString { "a" }
}

testSuiteNamed "initialization" with  {

    test "initialized exactly once" by {
        s := ""
        a.new "in constructor"
        assert (s) shouldBe "object a (in constructor)"
    }

    test "initialized exactly once in inherit" by {
        s := ""
        object {
            inherit a.new "in inherit"
            s := s ++ " in body of constructor"
        }
        assert (s) shouldBe "object a (in inherit) in body of constructor"
    }
}

testSuiteNamed "many arguments are passed" with {
    def obj = object {
        method sum(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
            a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 + a10 + a11
        }
        method returnSum(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
            sum(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11)     // self request
        }
        def innerObj is public = object {
            method returnSum(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
                sum(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11)     // outer request
            }
        }
        method new(a1, a2, a3, a4, a5, a6, a7, a8) {
            assert (sum(a1, a2, a3, a4, a5, a6, a7, a8, 0, 0, 0)) shouldBe 36
            object { }
        }
    }

    test "11 arg other request" by {
        assert (obj.sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)) shouldBe 66
    }
    test "11 arg outer reuest" by {
        assert (obj.innerObj.returnSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)) shouldBe 66
    }
    test "11 arg self request" by {
        assert (obj.returnSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)) shouldBe 66
    }
    test "inherits from 8 arg request" by {
        def sub = object {
            inherit obj.new(1, 2, 3, 4, 5, 6, 7, 8)
        }
        assert (sub.asString) shouldBe "a sub"
    }
}

exit
