dialect "minitest"

method trymatch(e) {
    match (e)
    case {n: Number -> n+1}
    case {s: String -> "Got " ++ s}
}

testSuiteNamed "match tests" with {
    test "number" by {
        assert(trymatch 4) shouldBe 5
    }
    test "string" by {
        assert(trymatch "beer") shouldBe "Got beer"
    }

    test "boolean" by {
        assert{trymatch (true)} shouldRaise (ProgrammingError)
    }
}
