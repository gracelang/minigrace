dialect "minitest"

method unfinished { 
    // declaring this method should be fine
    ...
}

testSuiteNamed "gracelib tests" with {
    test "string multiply" by {
        assert ("hello " * 3) shouldBe "hello hello hello "
    }
    test "double dispatch number *" by {
        assert (3 * " world") shouldBe " world world world"
    }
    test "ellipsis" by {
        assert {unfinished} shouldRaise (ProgrammingError)
        assert {...} shouldRaise (ProgrammingError)
    }
}

