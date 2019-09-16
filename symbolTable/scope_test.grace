dialect "minitest"
import "scope" as scope

testSuiteNamed "symbol table" with {
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
        assert (scope.graceEmptyScope.add (vars.) withName "wombat"
}
