dialect "minitest"
import "scope" as scope
import "ast" as ast
import "sourcePosition" as pos

testSuite "scope" with {
    test "empty scope construction" by {
        assert (scope.graceEmptyScope.isTheEmptyScope) description
            "graceEmptyScope isn't the empty scope"
    }

    test "empty scope has no local names" by {
        assert (scope.graceEmptyScope.localNames.isEmpty) description
            "graceEmptyScope contains local names"
    }

    test "empty scope has no reused names" by {
        assert (scope.graceEmptyScope.reusedNames.isEmpty) description
            "graceEmptyScope contains reused names"
    }

    test "can't add to empty scope" by {
        assert {scope.graceEmptyScope.add (defNode) withName "wombat"}
            shouldRaise(ProgrammingError) mentioning "a non-existant scope"
    }

    test "object scope with definition" by {
        def s = scope.graceObjectScope
        s.outerScope := scope.graceEmptyScope
        s.node := objectNode
        def d = varDefWombat
        assert (d.declaredName) shouldBe "wombat"
        s.add(d)
        assert(s.definesLocally "wombat")
              description "{s} does not define `wombat`"
    }

    test "object scope with method" by {
        def s = scope.graceObjectScope
        s.outerScope := scope.graceEmptyScope
        s.node := objectNode
        def m = varMethFooBar
        assert (m.declaredName) shouldBe "foo(1)bar(1)"
        s.add(m)
        assert(s.definesLocally "foo(1)bar(1)")
              description "{s} does not define `foo(1)bar(1)`"
    }

    test "if(_)then(_)else(_) defined by magic" by {
        def s = scope.graceModuleScope
        s.outerScope := scope.graceEmptyScope
        s.node := objectNode
        def m = scope.variableMethodFrom(magicMethNode)
        assert (m.declaredName) shouldBe(scope.magicKey)
        s.add(m)
        assert(s.definesLocally "if(1)then(1)")
              description "{s} does not define `if(1)then(1)`"
        assert(s.lookup "if(1)then(1)".isSpecialControlStructure)
              description "`if(_)then(_)` is not a sepcial control structure"
        assert(s.lookup "if(1)then(1)".isIfThenElse)
              description "`if(_)then(_)` is not an ifThenElse"
    }
}

method objectNode {
    def result = ast.objectNode.body [] named "wombat"
    result.setStart(pos.line 2 column 12)
    result
}

method defNode {
    def result = ast.defDecNode.new(
          ast.identifierNode.new("wombat", false),
          objectNode,
          ast.unknownType)
    result.setStart(pos.line 2 column 5)
    result
}

method a { ast.identifierNode.new("a", false) }
method b { ast.identifierNode.new("b", false) }

method methNode {
    def sig = list []
    sig.add(ast.signaturePart.partName "foo" params [a])
    sig.add(ast.signaturePart.partName "bar" params [b])
    def result = ast.methodNode.new(sig, [], ast.unknownType)
    result.setStart(pos.line 3 column 5)
    result
}

method magicMethNode {
    def sig = [ ast.signaturePart.partName(scope.magicKey) ]
    def result = ast.methodNode.new(sig, [], ast.unknownType)
    result.setStart(pos.line 1 column 5)
    result
}

method varDefWombat -> scope.Variable {
    vars.graceDefFrom(defNode)
}

method varMethFooBar -> vars.Variable {
    vars.graceMethodFrom(methNode)
}

method varSpecialControl -> vars.Variable {
    vars.graceSpecialControlStructureFrom(magicMethNode)
}

exit
