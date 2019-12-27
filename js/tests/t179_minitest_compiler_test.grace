dialect "minitest"

import "compiler" as compiler
import "identifierresolution" as identifierresolution
import "errormessages" as errormessages

def MatchError = ProgrammingError.refine "MatchError"
def SyntaxError = errormessages.SyntaxError

def input = ‹dialect "standard"
trait t1 {
    method x(size:Number) { "method x" }
    method y(name:String) { "method y arg {name}" }
}

class c1 {
    use t1 alias w(name) = y(name) exclude x(_)
    method w(kind) { "should be a redeclaration error" }
    method w'(kind) { w(kind) }
}
›

def module = compiler.parseString (input)

testSuite "alias and method with same name" with {
    test "alias w and method w clash" by {
        assert {identifierresolution.resolve(module)} shouldRaise (SyntaxError)
            mentioning "'w(_)' cannot be redeclared"
    }
}

method astNode (kind) from (code) {
    def moduleNode = compiler.astFromString(code)
    def result = moduleNode.body.first
    assert (result.kind) shouldBe (kind)
    result
}

method parseNode (kind) from (code) {
    def moduleNode = compiler.parseString(code)
    def result = moduleNode.body.first
    assert (result.kind) shouldBe (kind)
    result
}

testSuite "toGrace methods" with {
    test "methodRequest" by {
        def a = parseNode "call" from
            ‹someTarget.firstPart(arg1, arg2) seceondPart(arg3) thirdPart "arg4"›
        assert (a.toGrace 1) shouldBe
            ‹someTarget.firstPart(arg1, arg2) seceondPart(arg3) thirdPart "arg4"›
    }

    test "typeDec" by {
        def a = parseNode "typedec" from ‹type NewType⟦T⟧ = interface {
    foo → Done
    bar(x:T) → NewType ⟦T⟧
}›
        assert (a.toGrace 0) shouldBe
              ‹type NewType⟦T⟧ = interface {
        foo → Done
        bar(x:T) → NewType⟦T⟧}›
    }

    test "methodSignature" by {
        def a = parseNode "typeliteral" from
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
              shouldRaise (SyntaxError)
              mentioning "a type declaration must have a type expression"
    }
}

testSuite "module name ending with .grace #248" with {
    test "import wih .grace" by {
        assert { parseNode "import" from ‹import "mirror.grace" as m› }
              shouldRaise (SyntaxError)
              mentioning "import" and "must not end with \".grace\""
    }
    test "dialect with .grace" by {
        assert { parseNode "dialect" from ‹dialect "objectdraw.grace"› }
              shouldRaise (SyntaxError)
              mentioning "dialect" and "must not end with \".grace\""
    }
}

testSuite "Unknown is reserved #290" with {
    test "Can't redefine type Unknown" by {
        assert{ compiler.astFromString ‹dialect "none"
type Unknown = interface{}› }
              shouldRaise (SyntaxError)
              mentioning "Unknown is a reserved name"
    }
    test "Can't def Unknown" by {
        assert{ compiler.astFromString ‹dialect "none"
def Unknown = object{}› }
              shouldRaise (SyntaxError)
              mentioning "Unknown is a reserved name"
    }
}

testSuite "then block" with {
    test "missing operator in statement in then block" by {
        assert {astNode "defdec" from ‹
def count = 1
var result := "something"
def xs = ["apple", "pear"]
if (count == 1) then {
    if (xs.size > 2) then { result := result ++ "," }
    result := result ++ " " connectingWord ++ " "
    // missing ++ here ----^
}›} shouldRaise (SyntaxError) mentioning "statements must be separated"
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
›} shouldRaise (SyntaxError) mentioning "the case block" and "must have one parameter"
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

