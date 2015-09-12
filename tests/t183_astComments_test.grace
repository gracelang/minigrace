dialect "minitest"
import "lexer" as lexer
import "parser" as parser
import "ast" as ast
import "util" as util
import "io" as io

def input = list.with(
    "import \"stuff\" as stuff",
    "",
    "//Pre-comment def x",
    "def x = 10",
    "//Post-comment def x", 
    "var y := 47",          
    "//Post-comment var y", 
    "",                     
    "var z := 42",          
    "//Post-comment var z", 
    "",                     
    "def w = 10",           
    "//Post-comment def w",
    "var q",                
    "",
    "//Pre-comment one type Person after blank",        
    "//Pre-comment two type Person, which is quite long and may cause the printout to wrap the line if we go on for long enough",                    
    "type Person = \{",
    "//Post-comment type Person",
    "",
    "    //pre-comment for methodtype name",
    "    name -> String //sameline comment for methodtype name",   
    "    //post-comment one for methodtype name, which should be merged with",
    "    //post-comment two for methodtype name",
    "    age -> Number",
    "}",
//    "//post-Comment on typeDec person",                 
    "method m -> Done \{ //post-comment (sameline) method m",
    "    //post-comment one for method m, which should be merged with ",
    "    //post-comment two method m",
    "    print \"hello\"",
    "    //Comment on request of print (should not be captured)",  
    "\}",
    "",
    "//pre-comment one class person.new",
    "//pre-comment two class person.new",
    "class person.new(name', age') -> Person \{",       
    "   // post-comment on class person.new",
    "   def name:String is public = name'",
    "   // post-comment on def name",
    "   def age:Number is public = age'",
    "\}"                                                
)

util.lines := input
//input.keysAndValuesDo { linenum, code -> 
//    print "{linenum}    {code}"
//}
def tokens = lexer.new.lexinput(input)
def nodes = parser.parse(tokens)

testSuiteNamed "comment tests" with {
    test "pre-comment on def" by {
        def firstDef = nodes.filter { n -> n.kind == "defdec" }.iterator.next
        assert (firstDef.nameString) shouldBe "x"
        assert (firstDef.comments.value.contains "Pre-comment def x")
            description "first.comments doesn't include Pre-comment def x"
    }
    
    test "post-comment on def" by {
        def firstDef = nodes.filter { n -> n.kind == "defdec" }.iterator.next
        assert (firstDef.nameString) shouldBe "x"
        assert (firstDef.comments.value.contains "Post-comment def x")
            description "first.comments doesn't include Post-comment def x"
    }
    test "blanks" by {
        def blankNodes = nodes.filter { each -> each.kind == "blank" }
        def blankLineNums = blankNodes.map { each -> each.line }
        def emptyLineNums = list.empty
        input.keysAndValuesDo { n, s ->
            if (s == "") then { emptyLineNums.push(n) }
        }
        assert (blankLineNums) shouldBe (emptyLineNums)
    }
    test "var y" by {
        def varNodes = nodes.filter { each -> each.kind == "vardec" }
        def varY = varNodes.filter {n -> n.nameString == "y"}.iterator.next
        assert (varY.nameString) shouldBe "y"
        assert (varY.comments.value == "Post-comment var y")
            description "var y.comments doesn't include Post-comment var y"
    }
    test "var z" by {
        def varNodes = nodes.filter { each -> each.kind == "vardec" }
        def varZ = varNodes.filter {n -> n.nameString == "z"}.iterator.next
        assert (varZ.comments.value == "Post-comment var z")
            description "var z.comments doesn't include Post-comment var z"
    }
    test "var q" by {
        def varNodes = nodes.filter { each -> each.kind == "vardec" }
        def varQ = varNodes.filter {n -> n.nameString == "q"}.iterator.next
        assert (varQ.comments == false) description "var q has comments"
    }
    test "person" by {
        def typeNodes = nodes.filter { each -> each.kind == "typedec" }
        def typePerson = typeNodes.filter { each -> each.nameString == "Person" }.iterator.next
        assert (typePerson.comments != false) description "no comments on type dec Person"
        assert (typePerson.comments.value) shouldBe "Pre-comment one type Person after blank Pre-comment two type Person, which is quite long and may cause the printout to wrap the line if we go on for long enough Post-comment type Person"
    }
    test "method signature name" by {
        def typeNodes = nodes.filter { each -> each.kind == "typedec" }
        def typePerson = typeNodes.filter { each -> each.nameString == "Person" }.iterator.next
        def methodtypeName = list.withAll(typePerson.value.methods)
            .filter { each -> each.nameString == "name" }.iterator.next
        def nameComments = methodtypeName.comments.value
        assert (nameComments.contains "pre-comment for methodtype name") 
            description "methodtype name missing pre-comment"
        assert (nameComments.contains "sameline comment")
            description "methodtype name missing sameline comment"
        assert (nameComments.contains "post-comment one for methodtype name")
            description "methodtype name missing post-comment one"
        assert (nameComments.contains "post-comment two for methodtype name")
            description "methodtype name missing post-comment two"
    }
    test "method signature age" by {
        def typeNodes = nodes.filter { each -> each.kind == "typedec" }
        def typePerson = typeNodes.filter { each -> each.nameString == "Person" }.iterator.next
        def methodtypeAge = list.withAll(typePerson.value.methods)
            .filter { each -> each.nameString == "age" }.iterator.next
        assert (methodtypeAge.comments == false) description "Comments found on methodtype age"
    }
    
    test "method m" by {
        def methodMNode = nodes.filter { each -> (each.kind == "method")
            .andAlso {each.nameString == "m"} }.iterator.next
        def mComments = methodMNode.comments.value
        assert (mComments.contains "post-comment (sameline) method m") 
            description "method m is missing the sameline comment"
        assert (mComments.contains "post-comment one")
            description "method m is missing post-comment one"
        assert (mComments.contains "post-comment two method m")
            description "method m is missing post-comment two"
    }
    
    test "class person.new" by {
        def classNodes = nodes.filter { each -> each.kind == "class" }
        def classPerson = classNodes.iterator.next
        def classPersonComments = classPerson.comments.value
        assert (classPersonComments.contains "pre-comment one class person.new") 
            description "pre-comment one not on class person"
        assert (classPersonComments.contains "pre-comment two class person.new")
            description "pre-comment two not on class person"
        assert (classPersonComments.contains "post-comment on class person.new")
            description "post-comment missing from class person; found ‹{classPersonComments}›"
    }
    
    test "person field name" by {
        def classNodes = nodes.filter { each -> each.kind == "class" }
        def classPersonDefs = list.withAll(classNodes.iterator.next.value).filter { each ->
            each.kind == "defdec" }
        var personName
        classPersonDefs.do { each -> 
            if (each.nameString == "name") then { personName := each }
        }
        assert (personName.comments.value) shouldBe "post-comment on def name"
    }
    
    test "person field age" by {
        def classNodes = nodes.filter { each -> each.kind == "class" }
        def classPersonDefs = list.withAll(classNodes.iterator.next.value).filter { each ->
            each.kind == "defdec" }
        var personAge 
        classPersonDefs.do { each -> 
            if (each.nameString == "age") then { personAge := each }
        }
        assert (personAge.comments == false)
            description  "comments found on field age"
    }
}
