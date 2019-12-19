dialect "minitest"

import "lexer" as lexer
import "parser" as parser
import "ast" as ast
import "util" as util
import "io" as io
import "identifierresolution" as ir
import "errormessages" as em

def MatchError = ProgrammingError.refine "MatchError"

def input1 = ‹var w: Number is writable := 100
def xx: Number is readable = 3
def other = object {
    class create {
        method things(n:Number) { "thing "*n }
        method thong -> String { "thong" }
    }
    type C = interface { ca → Done }
    type U⟦W⟧ = Collection⟦W⟧
}
method m(y: Number) -> Done {
    print(47+y)
}
method n(a) -> Number is confidential {3}
type A = other.C | other.U⟦Number⟧ | interface {
    m1(n:Number) → Number
    m2(n:Number) -> Done
}
type D = Dictionary⟦String, Number⟧ & A & H⟦String⟧
type H⟦T⟧ = interface {
    m3(x:T) → T
}
type Z = interface {
    m4(x:D) -> A
} & interface {
    m5(x:Z) -> Z
}›.split "\n"


util.lines.clear
util.lines.addAll(input1)
util.gracelibPath := "../../j2/"
def tokens1 = lexer.lexInputLines
def module1 = parser.parse(tokens1)
def resolvedModule1 = ir.resolve(module1)
def gct = ir.generateGctForModule(resolvedModule1)

method assert (gctDict) at (key) includesEntryStartingWith (s) {
    def value = gctDict.at(key)
    assert (value.includes { each -> each.startsWith(s) })
        description("gct entry \"{key}\" does not include an entry starting " ++
            "with \"{s}\"; it is\n{value}")
}

method deny (gctDict) at (key) includesEntryStartingWith (s) {
    def value = gctDict.at(key)
    deny (value.includes { each -> each.startsWith(s) })
        description("gct entry \"{key}\" includes an entry starting " ++
            "with \"{s}\"")
}

testSuite "gct" with {
    test "gct def'd object" by {
        assert (gct) at "methods" includesEntryStartingWith "other (def)"
    }
    test "gct dialect" by {
        assert (gct.at "dialect") shouldBe ["standard"]
    }
    test "gct fresh-methods of other" by {
        assert (gct) at "methods-of:other" includesEntryStartingWith "create (fresh)"
    }
    test "gct methods of other.create" by {
        assert (gct.at "methods-of:other.create") shouldBe [
              "asDebugString (fgo)", "asString (fgo)",
              "basicAsString (fgo)", "isMe(1) (fgo)",
              "myIdentityHash (fgo)", "things(1)", "thong"
        ]
    }
    test "gct methods present" by {
        ["A", "D", "H", "Z", "m(1)", "xx", "w (var)"].do { m ->
            assert (gct) at "methods" includesEntryStartingWith (m)
        }
    }
    test "gct methods absent" by {
        deny (gct) at "methods" includesEntryStartingWith "w:=(1)"
        // this entry should not be in the gct; instead, such
        // a method can be inferred from the presence of w (var)
    }
    test "gct method types" by {
        assert (gct.at "methodTypes") shouldBe [
            "m(y:Number) → Done", "w:=(_:Number) → Done", "xx → Number"
        ]
    }
    test "gct typedec A" by {
        assert (gct.at "typedec-of:A") shouldBe [‹type A = other.C | other.U⟦Number⟧ | interface {
    m1(n:Number) → Number
    m2(n:Number) → Done}›]
    }
    test "gct typedec D" by {
        assert (gct.at "typedec-of:D") shouldBe [‹type D = Dictionary⟦String, Number⟧ & A & H⟦String⟧›]
    }
    test "gct typedec of H" by {
        assert (gct.at "typedec-of:H") shouldBe [‹type H⟦T⟧ = interface {
        m3(x:T) → T}› ]
        // key can't be "typedec-of:H⟦T⟧", because we don't
        // yet know about the existence of parameter T
    }
    test "gct typedec of Z" by {
        assert (gct.at "typedec-of:Z") shouldBe [‹type Z = interface {
    m4(x:D) → A} & interface {
    m5(x:Z) → Z}›]
    }
    test "gct types" by {
        assert (gct.at "types") shouldBe ["A", "D", "H", "Z", "other.C", "other.U"]
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

testSuite "alias and method with same name" with {
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

testSuite "toGrace methods" with {
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

testSuite "RHS of typedec #289" with {
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

