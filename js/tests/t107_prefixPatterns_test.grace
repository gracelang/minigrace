dialect "minitest"

print (>40)

method tryUnaryNumericPatterns(x) {
    match(x)
          case {>40 → "greater than 40"}
          case {≥30 → "greater than or equal to 30"}
          case {17-> "equal to 17"}
          case {≤18 → "less than or equal to 18"}
          case {<20-> "less than a score"}
}

testSuite {
    test "> pattern" by {
        assert (tryUnaryNumericPatterns 42) shouldBe "greater than 40"
    }
    test "≥ pattern exact" by {
        assert (tryUnaryNumericPatterns 30) shouldBe "greater than or equal to 30"
    }
    test "≥ pattern exceeds" by {
        assert (tryUnaryNumericPatterns 32) shouldBe "greater than or equal to 30"
    }
    test "< pattern" by {
        assert (tryUnaryNumericPatterns 19.5) shouldBe "less than a score"
    }
    test "≤ pattern exact" by {
        assert (tryUnaryNumericPatterns 18) shouldBe "less than or equal to 18"
    }
    test "≤ pattern exceeds" by {
        assert (tryUnaryNumericPatterns 17.5) shouldBe "less than or equal to 18"
    }
    test "= pattern exact" by {
        assert (tryUnaryNumericPatterns 17) shouldBe "equal to 17"
    }
}
