dialect "minitest"
import "scope" as scope
import "ast" as ast
import "basic" as basic

inherit basic.open

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
        def dv = scope.variableDefFrom(defWombatNode)
        assert {scope.graceEmptyScope.add (dv) withName "wombat"}
            shouldRaise(ProgrammingError) matchedBy ‹add.*wombat.*to the empty scope›
    }

    test "object scope with definition" by {
        def s = scope.graceObjectScope
        s.node := objectNode
        def dv = scope.variableDefFrom(defWombatNode)
        assert (dv.declaredName) shouldBe "wombat"
        s.add(dv)
        assert(s.definesLocally "wombat")
              description "{s} does not define `wombat`"
    }

    test "object scope with method" by {
        def s = scope.graceObjectScope
        s.node := objectNode
        def mv = scope.variableMethodFrom(methFooBarNode)
        assert (mv.declaredName) shouldBe "foo(1)bar(1)"
        s.add(mv)
        assert(s.definesLocally "foo(1)bar(1)")
              description "{s} does not define `foo(1)bar(1)`"
    }

    test "if(_)then(_)else(_) defined by magic" by {
        def s = scope.graceModuleScope
        s.node := objectNode
        def mv = scope.variableMethodFrom(magicMethNode)
        assert (mv.declaredName) shouldBe(scope.magicKey)
        s.add(mv)
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
    result.setStart(line 2 column 12)
    result
}

method defWombatNode {
    def result = ast.defDecNode.new(
          ast.identifierNode.new("wombat", false),
          objectNode,
          ast.unknownNode)
    result.setStart(line 2 column 5)
    result
}

method a { ast.identifierNode.new("a", false) }
method b { ast.identifierNode.new("b", false) }

method methFooBarNode {
    def sig = list []
    sig.add(ast.signaturePart.partName "foo" params [a])
    sig.add(ast.signaturePart.partName "bar" params [b])
    def result = ast.methodNode.new(sig, [], ast.unknownNode)
    result.setStart(line 3 column 5).
        setScope(scope.graceMethodScope.in(scope.graceEmptyScope))
    result
}

method magicMethNode {
    def sig = [ ast.signaturePart.partName(scope.magicKey) ]
    def result = ast.methodNode.new(sig, [], ast.unknownNode)
    result.setStart(line 1 column 5).
        setScope(scope.graceMethodScope.in(scope.graceEmptyScope))
    result
}

exit
