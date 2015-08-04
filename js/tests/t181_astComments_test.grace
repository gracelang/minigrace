import "lexer" as lexer
import "parser" as parser
import "ast" as ast
import "util" as util

def input = list.with(
    "//Comment def A",
    "def x = 10",
    "//Comment var 1A",
    "var y := 47",
    "//Comment var 1B",
    "",
    "var z := 42",
    "//Comment var 2A",
    "",
    "//Comment type A",
    "//Comment type B",
    "type Person = \{",
    "//Comment type C",
    "",
    "    //Comment for methodtype 1A",
    "    name -> String //Comment for methodtype 1B",
    "    //Comment for methodtype 2A",
    "    //Comment for methodtype 2B",
    "    age -> Number",
    "}",
    "//Comment method A",
    "method m -> Done \{ //Comment method B",
    "    //Comment method C",
    "    //Comment method D",
    "    print \"hello\"",
    "    //Comment method E (should not print)",
    "\}",
    "",
    "//Comment class A",
    "//Comment class B",
    "class person.new(name', age') -> Person \{",
    "   def name:String is public = name'",
    "   def age:Number is public = age'",
    "\}"
)

util.lines := input
def tokens = lexer.new.lexinput(input)
def nodes = parser.parse(tokens)

for (1..nodes.size) do { i ->
    print "comments for node {i}:"
    for (nodes[i].comments) do { c ->
        print ("  "++c.pretty(0))
    }
    if (nodes[i].kind == "typedec") then {
        print "  inner comments:"
        for (nodes[i].value.methods) do {mt ->
            for (mt.comments) do { mtc ->
                print ("    "++mtc.pretty(0))
            }
            print ""
        }
    }
}