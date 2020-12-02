dialect "minitest"

import "compiler" as compiler
import "identifierresolution" as identifierresolution
import "errormessages" as errormessages
import "constantScope" as constantScope

def MatchError = ProgrammingError.refine "MatchError"
def SyntaxError = errormessages.SyntaxError
def ReuseError = errormessages.ReuseError
def NamingError = errormessages.NamingError

def constReassign053 = ‹dialect "standard"
def x = 5
x := 3
print(x)
›

def multipleDecls055 = ‹dialect "standard"
var x := 1
var x := 2
›

def methodParameterShadowsVar056 = ‹dialect "standard"
var x := 1
method test(x) {

}
›

def blockParameterShadowsVar066 = ‹dialect "standard"
var x := 1

for (1..5) do { x -> print(x) }
›

def typeParameterShadowsDef067 = ‹dialect "standard"
def X = 1

method test⟦X⟧ {}
›

def multipleClasses068 = ‹dialect "standard"
class x {}
class x {}
›
def paramShadowsParam069 = ‹dialect "standard"
method test(x) {
    for (1..5) do {x->
        print(x)
    }
}
›
def dupicateDefInObject070 = ‹dialect "standard"
def testObj = object {
    def a is public = "OK"
    def b is public = true
    def a is public = "nok OK"     // should be an error
}
›
testSuite "identifier resolution errors" with {
    test "def x can't be assigned" by {
        def module = compiler.parseString (constReassign053)
        assert {identifierresolution.resolve(module)} shouldRaise (SyntaxError)
              mentioning "'x' cannot be changed"
              and "declared with 'def' on line 2"
    }
    test "var x can't be declared twice" by {
        def module = compiler.parseString (multipleDecls055)
        assert {identifierresolution.resolve(module)} shouldRaise (NamingError)
              matchedBy ‹can't declare 'x' as .* var.* 'x' .* declared as a var on line 2›
    }
    test "var x can't be shadowed by a method parameter" by {
        def module = compiler.parseString (methodParameterShadowsVar056)
        assert {identifierresolution.resolve(module)} shouldRaise (NamingError)
              matchedBy ‹can't use 'x' as .* parameter.* 'x' .* declared as a var on line 2›
    }
    test "var x can't be shadowed by a block parameter" by {
        def module = compiler.parseString (blockParameterShadowsVar066)
        assert {identifierresolution.resolve(module)} shouldRaise (NamingError)
              matchedBy ‹can't use 'x' .* parameter,.* declared .* var .* line 2.* surrounding module›
    }
    test "var X can't be shadowed by a type parameter" by {
        def module = compiler.parseString (typeParameterShadowsDef067)
        assert {identifierresolution.resolve(module)} shouldRaise (NamingError)
              matchedBy ‹can't use 'X' as .* a type parameter, .* 'X' .* declared as a def .* line 2 in a surrounding module scope›
    }
    test "class x can't be declared twice" by {
        def module = compiler.parseString (multipleClasses068)
        assert {identifierresolution.resolve(module)} shouldRaise (NamingError)
              matchedBy ‹can't declare 'x' as a class.* 'x' .* declared as a class on line 2, columns 1-10›
    }
    test "block parameter shadows method parameter" by {
        def module = compiler.parseString (paramShadowsParam069)
        assert {identifierresolution.resolve(module)} shouldRaise (NamingError)
              matchedBy ‹can't use 'x' as .* a parameter, because 'x' .* declared .* line 2 .* surrounding .* scope›
    }
    test "multiple fields with same name" by {
        def module = compiler.parseString (dupicateDefInObject070)
        assert {identifierresolution.resolve(module)} shouldRaise (NamingError)
              matchedBy ‹can't declare 'a' as a def.* 'a' .* declared as a def on line 3, columns 5-26.* same scope›
    }
}
def twoDefsOfW = ‹dialect "standard"
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

def twoMethodsNe = ‹
trait ne {
    method ≠(other) { (self == other ).not }
    method ==(other) is required
}

trait id {
    method ≠(o) { self.isMe(o).not }
}

class twoNeMethods {
    use ne
    use id
}
›



testSuite "reuse of methods" with {
    test "alias w and method w clash" by {
        def module = compiler.parseString (twoDefsOfW)
        assert {identifierresolution.resolve(module)} shouldRaise (ReuseError)
              mentioning "can't declare 'w(_)' as an alias"
              and "also declared as a method"
    }
    test "two definitions of ≠" by {
        def tree = compiler.parseString(twoMethodsNe)
        assert {identifierresolution.resolve(tree)} shouldRaise(ReuseError)
              matchedBy ‹trait conflict.*≠\(_\).* defined in ne and id›
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
        def a = parseNode "interfaceliteral" from
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
              mentioning "'Unknown' is a reserved word"
    }
    test "Can't def Unknown" by {
        assert{ compiler.astFromString ‹dialect "none"
def Unknown = object{}› }
              shouldRaise (SyntaxError)
              mentioning "'Unknown' is a reserved word"
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

    test "each case answers number, so whole match…case annswers number" by {
        def module = identifierresolution.resolve(compiler.parseString(‹
class pieceOn (colorNum: Number) {
    def current:Number = match(colorNum)
        case {1 -> 2}
        case {2 -> 3}
        case {3 -> 4}
        case {4 -> 5}
}
›))
        def moduleScope = module.scope
        def pieceOnScope = moduleScope.lookup "pieceOn(1)" .attributeScope
        def currentScope = pieceOnScope.lookup "current" .attributeScope
        assert (currentScope) shouldBe (constantScope.numberScope)
    }
}

exit

