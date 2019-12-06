dialect "minitest"

import "lexer" as lexer
import "parser" as parser
import "ast" as ast
import "util" as util
import "io" as io
import "xmodule" as xmodule
import "identifierresolution" as ir
import "errormessages" as em

def MatchError = ProgrammingError.refine "MatchError"

def input1 = list [
    "var x: Number is writable := 100",
    "def xx: Number is readable = 3",
    "method m(y: Number) -> Done \{",
    "    print(47+y)",
    "\}",
    "method n(a) -> Number is confidential \{3\}",
    "type A = B⟦T⟧ | other.C | other.U⟦T⟧ | interface \{",
    "    m1(n:Number) -> Number",
    "    m2(n:Number) -> Done",
    "\}",
    "type D = Dictionary⟦K, T⟧ & F & G",
    "type H⟦T⟧ = interface \{",
    "    m3(x:T) -> T",
    "\}",
    "type Z = interface \{",
    "    m4(x:Y) -> Y",
    "\} & interface \{",
    "    m5(x:Z) -> Z",
    "\}"
]

util.lines.clear
util.lines.addAll(input1)
util.gracelibPath := "../../j2/"
def tokens1 = lexer.lexInputLines
def module1 = parser.parse(tokens1)
module1.name := "test_179_output"
util.extensions.at "gctfile" put true
util.outDir := "./"
xmodule.writeGctForModule(module1)
def gct = xmodule.gctDictionaryFor "test_179_output"
def gctText = xmodule.gctAsString(gct)

testSuiteNamed "gct" with {
    test "gct text" by {
        assert (gctText) shouldBe ‹classes:
confidential:
 n(1)
 x
dialect:
 standard
fresh-methods:
methodtypes-of:A:
 2 m1(n:Number) → Number
 2 m2(n:Number) → Done
 | 2
 | B⟦T⟧
 | other.C
 | other.U⟦T⟧
methodtypes-of:D:
 & Dictionary⟦K, T⟧
 & F
 & G
methodtypes-of:H⟦T⟧:
 2 m3(x:T) → T
methodtypes-of:Z:
 & 3
 & 4
 3 m4(x:Y) → Y
 4 m5(x:Z) → Z
modules:
path:
 /dev/stdin
public:
 A
 D
 H
 Z
 m(1)
 x:=(1)
 xx
publicMethod:m(1):
 m(y:Number) → Done
publicMethod:x:=(1):
 x:=(x': Number) → Done
publicMethod:xx:
 xx → Number
publicMethodTypes:
 m(y:Number) → Done
 x:=(x': Number) → Done
 xx → Number
typedec-of:A:
 type A = B⟦T⟧ | other.C | other.U⟦T⟧ | interface {
    m1(n:Number) → Number
    m2(n:Number) → Done}
typedec-of:D:
 type D = Dictionary⟦K, T⟧ & F & G
typedec-of:H⟦T⟧:
 type H⟦T⟧ = interface {
        m3(x:T) → T}
typedec-of:Z:
 type Z = interface {
    m4(x:Y) → Y} & interface {
    m5(x:Z) → Z}
types:
 A
 D
 H⟦T⟧
 Z
›
    }
}

def input3 = ‹dialect "standard"
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
util.lines.addAll(input3)

def module3 = parser.parse ( lexer.lexLines (input3) )

testSuiteNamed "alias and method with same name" with {
    test "alias w and method w clash" by {
        assert {ir.resolve(module3)} shouldRaise (em.SyntaxError)
            mentioning "'w(_)' cannot be redeclared"
    }
}


method astNode (kind) from (code) {
    def toks = lexer.lexString(code)
    def module = parser.parse(toks)
    def result = module.body.first
    assert (result.kind) shouldBe (kind)
    result
}

method resolveIdentifiersIn (code) {
    def toks = lexer.lexString(code)
    def module = parser.parse(toks)
    def resolved = ir.resolve(module)
    resolved
}

testSuiteNamed "toGrace methods" with {
    test "methodRequest" by {
        def a = astNode "call" from
            ‹someTarget.firstPart(arg1, arg2) seceondPart(arg3) thirdPart "arg4"›
        assert (a.toGrace 1) shouldBe
            ‹someTarget.firstPart(arg1, arg2) seceondPart(arg3) thirdPart "arg4"›
    }

    test "typeDec" by {
        def a = astNode "typedec" from ‹type NewType⟦T⟧ = interface {
    foo → Done
    bar(x:T) → NewType ⟦T⟧
}›
        assert (a.toGrace 0) shouldBe
              ‹type NewType⟦T⟧ = interface {
        foo → Done
        bar(x:T) → NewType⟦T⟧}›
    }

    test "methodSignature" by {
        def a = astNode "typeliteral" from
            ‹interface {
    firstPart(param1:Number, param2:String)
        seceondPart(param3:interface{foo→Done})
        thirdPart(param4:NewType⟦T⟧)
}›
        def sig = a.methods.first
        assert (sig.kind) shouldBe "methodtype"
        assert (sig.toGrace 1) shouldBe
              ‹firstPart(param1:Number, param2:String)seceondPart(param3:interface {
                foo → Done})thirdPart(param4:NewType⟦T⟧)›
    }
}

testSuiteNamed "RHS of typedec #289" with {
    test "RHS must be type expression" by {
        assert { astNode "typeDec" from ‹type X = object{}› }
              shouldRaise (em.SyntaxError)
              mentioning "a type declaration must have a type expression"
    }
}

testSuite "module name ending with .grace #248" with {
    test "import wih .grace" by {
        assert { resolveIdentifiersIn ‹import "mirror.grace" as m› }
              shouldRaise (em.SyntaxError)
              mentioning "import" and "must not end with \".grace\""
    }
    test "dialect with .grace" by {
        assert { astNode "dialect" from ‹dialect "objectdraw.grace"› }
              shouldRaise (em.SyntaxError)
              mentioning "dialect" and "must not end with \".grace\""
    }
}

testSuite "Unknown is reserved #290" with {
    test "Can't redefine type Unknown" by {
        assert{ resolveIdentifiersIn ‹dialect "none"
type Unknown = interface{}› }
              shouldRaise (em.SyntaxError)
              mentioning "Unknown is a reserved name"
    }
    test "Can't def Unknown" by {
        assert{ resolveIdentifiersIn ‹dialect "none"
def Unknown = object{}› }
              shouldRaise (em.SyntaxError)
              mentioning "Unknown is a reserved name"
    }
}

testSuite "else block" with {
    test "missing operator in statement in then block" by {
        assert {astNode "defdec" from ‹
def count = 1
var result := "something"
def xs = ["apple", "pear"]
if (count == 1) then {
    if (xs.size > 2) then { result := result ++ "," }
    result := result ++ " " connectingWord ++ " "
    // missing ++ here ----^
}›} shouldRaise (em.SyntaxError) mentioning "statements must be separated"
    }
}

testSuite "match case" with {
    test "case blocks must have a parameter" by {
        assert {astNode "try-catch" from ‹
method tryIt(a) {
    match(a) case { 1 →
        print "a=1"
    } case { s:String →
        print "string {s}"
    } case { print "no argument here"
    } else {
        print "some other value ({a})"
    }
}
›} shouldRaise (em.SyntaxError) mentioning "the case block" and "must have one parameter"
    }
    test "exactly one block must match" by {
        assert {
            match ( object { method foo -> Number { ... } } )
                case { _ : interface { foo -> String} -> print "foo returns String" }
                case { _ : interface { foo -> Number} -> print "foo returns Number" }
        } shouldRaise (MatchError) mentioning "2 cases match"
    }
}

exit

