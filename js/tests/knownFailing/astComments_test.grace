
dialect "minitest"
import "lexer" as lexer
import "parser" as parser
import "ast" as ast
import "util" as util
import "io" as io

def input = list.with(
    "//Pre-comment def x",  // 1
    "def x = 10",           // 2
    "//Post-comment def x", // 3
    "var y := 47",          // 4
    "//Post-comment var y", // 5
    "",                     // 6
    "var z := 42",          // 7
    "//Post-comment var z", // 8
    "",                     // 9
    "def w = 10",           // 10
    "//Post-comment def w",
    "var q",                // 12
    "",
    "//Pre-comment one type Person after blank",        // 14
    "//Pre-comment two type Person",                    // 15
    "type Person = \{",
    "//Post-comment type Person",
    "",
    "    //pre-comment for methodtype name",
    "    name -> String //sameline comment for methodtype name",   // 20
    "    //post-comment for methodtype name",
    "    //post-comment for methodtype name",
    "    age -> Number",
    "}",
    "//post-Comment on typeDec person",                 // 25
    "method m -> Done \{ //post-comment (sameline) method m",
    "    //post-comment one method m",
    "    //post-comment two method m",
    "    print \"hello\"",
    "    //Comment on request of print (should not be captured)",  // 30
    "\}",
    "",
    "//pre-comment one class person.new",
    "//pre-comment two class person.new",
    "class person.new(name', age') -> Person \{",       // 35
    "   // post-comment on class person.new",
    "   def name:String is public = name'",
    "   // post-comment on def name'",
    "   def age:Number is public = age'",
    "\}"                                                // 40
)

util.lines := input
input.keysAndValuesDo { linenum, code -> 
    print "{linenum}    {code}"
}
def tokens = lexer.new.lexinput(input)
def nodes = parser.parse(tokens)
nodes.do { each -> print(each.pretty 0) }

testSuite {
    test "pre-comment on def" by {
        def first = nodes.first
        assert (first.kind) shouldBe "defdec"
        assert (first.comments.value.contains "Pre-comment def x")
            description "first.comments doesn't include Pre-comment def x"
    }
    
    test "post-comment on def" by {
        def first = nodes.first
        assert (first.kind) shouldBe "defdec"
        assert (first.comments.value.contains "Post-comment def x")
            description "first.comments doesn't include Post-comment def x"
    }
    test "blanks" by {
        def blankNodes = nodes.filter { each -> each.kind == "blank" }
        def blankLines = blankNodes.map { each -> each.line }
        assert (blankLines) shouldBe (list.with(6, 9, 13, 18, 32))
    }
    test "var y" by {
        def varNodes = nodes.filter { each -> each.kind == "vardec" }
        def varY = varNodes.filter {n -> n.nameString == "y"}.iterator.next
        assert (varY.comments.value.contains "Post-comment var y")
            description "var y.comments doesn't include Post-comment var y"
    }
    test "var z" by {
        def varNodes = nodes.filter { each -> each.kind == "vardec" }
        def varZ = varNodes.filter {n -> n.nameString == "z"}.iterator.next
        assert (varZ.comments.value.contains "Post-comment var z")
            description "var y.comments doesn't include Post-comment var y"
    }
    test "var q" by {
        def varNodes = nodes.filter { each -> each.kind == "vardec" }
        def varQ = varNodes.filter {n -> n.nameString == "q"}.iterator.next
        deny (varQ.comments) description "var q has comments"
    }
}

nodes.keysAndValuesDo { i, node ->
    if ( node.comments != false ) then {
        io.output.write "comments for node {i} {node}:"
        print("‹{node.comments.toGrace 1}›")
    }
    if (node.kind == "typedec") then {
        print "  methods in type:"
        node.value.methods.do { mt ->
            io.output.write "        {mt}"
            if (mt.comments != false) then {
                print("‹{mt.comments.toGrace 2}›")
            }
            print ""
        }
    }
}