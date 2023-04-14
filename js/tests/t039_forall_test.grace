dialect "minitest"
import "lexer" as lexer
import "parser" as parser
import "ast" as ast
import "util" as util

def input = list [
    "type Boolean = interface \{",
    "",
    "   not -> Boolean",
    "   prefix ! -> Boolean",
    "   // the negation of self",
    "",
    "   && (other: Predicate0 | Boolean) -> Boolean",
    "   // returns true when self and other are both true",
    "",
    "   || (other: Predicate0 | Boolean) -> Boolean",
    "   // returns true when either self or other (or both) are true",
    "",
    "   ifTrue (action:Function0⟦T⟧) → T | Done forall T",
    "   // if self is true, executes action and returns its result",
    "",
    "   ifFalse (action:Function0⟦F⟧) → F | Done forall F",
    "   // if self is false, executes action and returns its result",
    "",
    "   ifTrue(trueAction:Function0⟦T⟧) ifFalse(falseAction:Function0⟦F⟧) → T | F forall T, F",
    "   // if self is true, executes trueAction; otherewise, executes falseAction.",
    "   // Answers the result of the action that was executed",
    "",
    "   ifFalse(falseAction:Function0⟦F⟧) ifTrue(trueAction:Function0⟦T⟧) → T | F forall T, F",
    "   // if self is false, executes falseAction; otherewise, executes trueAction.",
    "   // Answers the result of the action that was executed",
    "",
    "   asString → String",
    "   asDebugString → Unknown",
    "",
    "   hash → Number",
    "   // the hash of this boolean; true.hash ≠ false.hash",
    "}"
]

util.lines.clear
util.lines.addAll(input)
def tokens = lexer.lexInputLines
def module = parser.parse(tokens)

print (module.pretty 0)
