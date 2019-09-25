dialect "minitest"

import "util" as util
import "lexer" as lexer
import "parser" as parser
import "ast" as ast

def input = ‹once method oneTypeDependent[[K]] {
    return K
}
once method twoTypeDependent⟦K⟧ {
    return K
}
method sumOf(a) and (b) { a + b }
›.split "\n"

util.lines.clear
util.lines.addAll(input)
    // lexLines does this too, but then reinstates the old
    // input before returning.

def module = parser.parse ( lexer.lexLines (input) )

def firstMethod = module.body.first
def secondMethod = module.body.second
def thirdMethod = module.body.third

testSuite {
    test "found first once method" by {
        assert (firstMethod.isMethod) description "firstMethod is a {firstMethod.kind}"
        assert (firstMethod.isOnceMethod) description "method {firstMethod.nameString} is not a once method"
    }
    
    test "first once method header range starts at 1:1" by {
        def r = firstMethod.headerRange
        assert (r.start) shouldBe (ast.line 1 column 1)
    }
    
    test "first once method header range ends at 1:33" by {
        def r = firstMethod.headerRange
        assert (r.end) shouldBe (ast.line 1 column 33)
        assert (util.lines.first.substringFrom 32 to 33) shouldBe "]]"
    }
    test "found second once method" by {
        assert (secondMethod.isMethod) description "secondMethod is a {secondMethod.kind}"
        assert (secondMethod.isOnceMethod) description "method {secondMethod.nameString} is not a once method"
    }
    
    test "second once method header range starts at 4:1" by {
        def r = secondMethod.headerRange
        assert (r.start) shouldBe (ast.line 4 column 1)
    }
    
    test "second once method header range ends at 4:31" by {
        def r = secondMethod.headerRange
        assert (r.end) shouldBe (ast.line 4 column 31)
        assert (util.lines.fourth.substringFrom 31 to 31) shouldBe "⟧"
    }
    test "found third method" by {
        assert (thirdMethod.isMethod) description "thirdMethod is a {thirdMethod.kind}"
        deny (thirdMethod.isOnceMethod) description "method {thirdMethod.nameString} is a once method"
    }
    
    test "third method header range starts at 7:1" by {
        def r = thirdMethod.headerRange
        assert (r.start) shouldBe (ast.line 7 column 1)
    }
    
    test "third once method header range ends at 7:23" by {
        def r = thirdMethod.headerRange
        assert (r.end) shouldBe (ast.line 7 column 23)
        assert (util.lines.at(7).substringFrom 21 to 23) shouldBe "(b)"
    }
}
