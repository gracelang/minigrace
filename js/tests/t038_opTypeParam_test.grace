dialect "minitest"
import "compiler" as compiler
import "identifierresolution" as identifierresolution

def issue326 = ‹method +⟦T⟧(x) { print(T) }
self +⟦String⟧ self
›

def parseTree = compiler.parseString (issue326)
def moduleAst = identifierresolution.resolve (parseTree)

def t = object {
    method +⟦T⟧(x) { "+⟦{T}⟧ {x}" }
    method *⟦T⟧(x) { "*⟦{T}⟧ {x}" }
}


testSuite "operator with type argument" with {
    test "parses operator application" by {
        assert (moduleAst.body.second.isCall) description
            "second statement is not a request"
        assert (moduleAst.body.second.isSelfRequest) description
            "second statement is a request, but not a self-request"
    }
    test "operator has single argument" by {
        assert (moduleAst.body.second.numArgs) shouldBe 1
    }
    test "operator has single type argument" by {
        assert (moduleAst.body.second.numTypeArgs) shouldBe 1
    }
    test "type parameters passed correctly" by {
        assert (t +⟦Number⟧ 1) shouldBe "+⟦type Number⟧ 1"
        assert (t *⟦String⟧ 2) shouldBe "*⟦type String⟧ 2"
    }
    test "operator precedence" by {
        assert (3 + 1 * 2) shouldBe 5
    }
}

exit
