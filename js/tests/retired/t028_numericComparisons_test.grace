dialect "minitest"

testSuite {
    test "equality of numbers" by { assert (17 == 17) }
    test "equality of number and string"  by { deny (17 == "17") }
    test "< on numbers true" by { assert (17 < 18) }
    test "< on numbers false" by { deny (18 < 18) }
    test "< on numbers error" by { assert {19 < "18"} shouldRaise (TypeError)}
    test "> on numbers true" by { assert (19 > 18) }
    test "> on numbers false" by { deny (18 > 18) }
    test "> on numbers error" by { assert {19 > "18"} shouldRaise (TypeError)}
    test "≤ on numbers true" by { assert (17 ≤ 18) }
    test "≤ on numbers false" by { deny (18 ≤ 17) }
    test "≤ on numbers error" by { assert {19 ≤ "18"} shouldRaise (TypeError)}
    test "≥ on numbers true" by { assert (19 ≥ 18) }
    test "≥ on numbers false" by { deny (18 ≥ 19) }
    test "≥ on numbers error" by { assert {19 ≥ "18"} shouldRaise (TypeError)}
    test "prefix <" by {
        def p = < 6
        assert(p.matches 5)
        deny (p.matches 6)
        deny (p.matches 7)
    }
    test "prefix >" by {
        def p = > 6
        assert(p.matches 7)
        deny (p.matches 6)
        deny (p.matches 5)
    }
    test "prefix ≤" by {
        def p = ≤ 6
        assert(p.matches 5)
        assert (p.matches 6)
        deny (p.matches 7)
    }
    test "prefix ≥" by {
        def p = ≥ 6
        assert(p.matches 7)
        assert (p.matches 6)
        deny (p.matches 5)
    }
}
