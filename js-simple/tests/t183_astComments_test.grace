dialect "minitest"
import "lexer" as lexer
import "parser" as parser
import "ast" as ast
import "util" as util
import "io" as io

def input = sequence [
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
    "method m -> Done \{ //post-comment (sameline) method m",
    "    //post-comment one for method m, which should be merged with ",
    "    //post-comment two method m",
    "    print \"hello\"",
    "    //Comment on request of print (should not be captured)",  
    "\}",
    "",
    "//pre-comment one class person",
    "//pre-comment two class person",
    "class person(name', age') -> Person \{",
    "   // post-comment on class person",
    "   def name:String is public = name'",
    "   // post-comment on def name",
    "   def age:Number is public = age'",
    "\}"                                                
]

util.lines.addAll(input)

//input.keysAndValuesDo { linenum, code -> 
//    print "{linenum}    {code}"
//}

def tokens = lexer.new.lexinput(input)
def module = parser.parse(tokens)
def nodes = module.value

testSuiteNamed "comment tests" with {
    test "pre-comment on def" by {
        def firstDef = nodes.filter { n -> n.kind == "defdec" }.first
        assert (firstDef.nameString) shouldBe "x"
        assert (firstDef.comments.value.contains "Pre-comment def x")
            description "first.comments doesn't include Pre-comment def x"
    }
    
    test "post-comment on def" by {
        def firstDef = nodes.filter { n -> n.kind == "defdec" }.first
        assert (firstDef.nameString) shouldBe "x"
        assert (firstDef.comments.value.contains "Post-comment def x")
            description "first.comments doesn't include Post-comment def x"
    }
    test "blanks" by {
        def blankNodes = nodes.filter { each -> each.kind == "blank" }
        def blankLineNums = blankNodes.map { each -> each.line }
        def emptyLineNums = emptyList
        input.keysAndValuesDo { n, s ->
            if (s == "") then { emptyLineNums.push(n) }
        }
        assert (blankLineNums) shouldBe (emptyLineNums)
    }
    test "var y" by {
        def varNodes = nodes.filter { each -> each.kind == "vardec" }
        def varY = varNodes.filter {n -> n.nameString == "y"}.first
        assert (varY.nameString) shouldBe "y"
        assert (varY.comments.value == "Post-comment var y")
            description "var y.comments doesn't include Post-comment var y"
    }
    test "var z" by {
        def varNodes = nodes.filter { each -> each.kind == "vardec" }
        def varZ = varNodes.filter {n -> n.nameString == "z"}.first
        assert (varZ.comments.value == "Post-comment var z")
            description "var z.comments doesn't include Post-comment var z"
    }
    test "var q" by {
        def varNodes = nodes.filter { each -> each.kind == "vardec" }
        def varQ = varNodes.filter {n -> n.nameString == "q"}.first
        assert (varQ.comments == false) description "var q has comments"
    }
    test "person" by {
        def typeNodes = nodes.filter { each -> each.kind == "typedec" }
        def typePerson = typeNodes.filter { each -> each.nameString == "Person" }.first
        assert (typePerson.comments != false) description "no comments on type dec Person"
        assert (typePerson.comments.value) shouldBe "Pre-comment one type Person after blank Pre-comment two type Person, which is quite long and may cause the printout to wrap the line if we go on for long enough Post-comment type Person"
    }
    test "method signature name" by {
        def typeNodes = nodes.filter { each -> each.kind == "typedec" }
        def typePerson = typeNodes.filter { each -> each.nameString == "Person" }.first
        def methodtypeName = list(typePerson.value.methods)
            .filter { each -> each.nameString == "name" }.first
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
        def typePerson = typeNodes.filter { each -> each.nameString == "Person" }.first
        def methodtypeAge = list(typePerson.value.methods)
            .filter { each -> each.nameString == "age" }.first
        assert (methodtypeAge.comments == false) description "Comments found on methodtype age"
    }
    
    test "method m" by {
        def methodMNode = nodes.filter { each -> (each.kind == "method")
             && {each.nameString == "m"} }.first
        def mComments = methodMNode.comments.value
        assert (mComments.contains "post-comment (sameline) method m") 
            description "method m is missing the sameline comment"
        assert (mComments.contains "post-comment one")
            description "method m is missing post-comment one"
        assert (mComments.contains "post-comment two method m")
            description "method m is missing post-comment two"
    }
    
    test "class person" by {
        def classPerson = nodes.filter { each ->
            each.isMethod && { each.nameString == "person" } }.first
        def personComments = classPerson.comments
        def commentString = personComments.value
        assert (personComments.isPreceededByBlankLine)
            description "blank line not recognized before comments for class person"
        assert (commentString.contains "pre-comment one class person")
            description "pre-comment one not on class person"
        assert (commentString.contains "pre-comment two class person")
            description "pre-comment two not on class person"
        assert (commentString.contains "post-comment on class person")
            description "post-comment missing from class person; found ‹{personComments}›"
    }
    
    test "person field name" by {
        def classPerson = nodes.filter { each ->
            each.isMethod && { each.nameString == "person" } }.first
        def classPersonBody = classPerson.body.first.value
        def classPersonDefs = classPersonBody.filter { each ->
            each.kind == "defdec" }
        var personName
        classPersonDefs.do { each -> 
            if (each.nameString == "name") then { personName := each }
        }
        assert (personName.comments.value) shouldBe "post-comment on def name"
    }
    
    test "person field age" by {
        def classPerson = nodes.filter { each ->
            each.isMethod && { each.nameString == "person" } }.first
        def classPersonBody = classPerson.body.first.value
        def classPersonDefs = classPersonBody.filter { each ->
            each.kind == "defdec" }
        var personAge 
        classPersonDefs.do { each ->
            if (each.nameString == "age") then { personAge := each }
        }
        assert (personAge.comments == false)
            description  "comments found on field age"
    }
}
