dialect "minitest"

import "lexer" as lexer
import "parser" as parser
import "util" as util

// This test repeats the interesting parts of t039_forall_test, but without
// being subject to the vaguaries of the pretty-printing mechanism. It should
// be expanded to check more interesting atttributes of the syntax tree.

def input = ‹dialect "none"

type Object = interface {
    asString → String
    asDebugString → String
}

type Done = interface {
    asString → String
    asDebugString → String
}

type Function0⟦ResultT⟧ = Object & interface {
    apply → ResultT     // Function with no arguments and a result of type ResultT
}

type Predicate0 = Function0⟦Boolean⟧

type Boolean = interface {
    not → Boolean
    prefix ! → Boolean
    // the negation of self

    && (other: Predicate0 | Boolean) → Boolean
    // returns true when self and other are both true

    || (other: Predicate0 | Boolean) → Boolean
    // returns true when either self or other (or both) are true

    ifTrue (action:Function0⟦T⟧) → Done | T forall T
    // if self is true, executes action
    ifFalse (action:Function0⟦T⟧) → Done | T forall T
    // if self is false, executes action

    ifTrue (trueAction:Function0⟦T⟧) ifFalse(falseAction:Function0⟦F⟧) → T | F forall T, F
    // if self is true, executes trueAction; otherewise, executes falseAction.
    // Answers the result of the action that was executed

    ifFalse (falseAction:Function0⟦F⟧) ifTrue(trueAction:Function0⟦T⟧) → T | F forall T, F
    // if self is false, executes falseAction; otherewise, executes trueAction.
    // Answers the result of the action that was executed

    asString → String
    asDebugString → String
    // answers thes string "true" or "false"

}

type String = Unknown
›

util.lines.clear
util.lines.addAll(input)
def module = parser.parse ( lexer.lexString (input) )

def typeDecs = module.value.filter { each → each.isTypeDec }
def typeBoolean = typeDecs.filter { each → each.nameString == "Boolean" } .first
def ifTrueMeth = typeBoolean.value.methods.filter { each → each.nameString == "ifTrue(1)" } .first

testSuite "Where Clause Parsing" with {

    test "found typedec Boolean" by {
        assert (typeBoolean.nameString) shouldBe "Boolean"
    }

    test "found ifTrue" by {
        assert (ifTrueMeth.kind) shouldBe "methodtype"
    }

    test "has universal type dec" by {
        assert (ifTrueMeth.universalTypeDecls.size) shouldBe 1
        def forallDec = ifTrueMeth.universalTypeDecls.first
        assert (forallDec.isTypeDec) shouldBe true
    }

    test "components of universal declaration" by {
        def forallDec = ifTrueMeth.universalTypeDecls.first
        assert (forallDec.kind) shouldBe "forall type"
        assert (forallDec.nameString) shouldBe "T"
    }

}


exit
