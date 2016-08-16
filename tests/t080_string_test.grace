import "gUnit" as gU

class stringTest.forMethod(m) {
    inherit gU.testCaseNamed(m)
    
    method test_concat {
        assert ("abc" ++ "def") shouldBe "abcdef"
    }

    method test_compare_identity_concat {
        def s = "abcd" ++ "ef"
        assert (s.compare(s) == 0) description "identical strings do not compare 0"
    }
    
    method test_compare_same_concat {
        def s = "abcd" ++ "ef"
        def t = "abcdef"
        assert (s.compare(t) == 0) description "{s} doesn't compare 0 to {t}"
    }
    
    method test_compare_identity_flat {
        def s = "rstuvwxyz"
        assert (s.compare(s) == 0) description "identical strings do not compare 0"
    }

    method test_comparelessThan_concat_first {
        def s = "abcd" ++ "ef"
        def t = "bcdef"
        assert (s.compare(t) == -1) description "{s} doesn't compare < {t}"
    }

    method test_compareLessThan_concat_second {
        def s = "abcd" ++ "ea"
        def t = "abcd" ++ "ef"
        assert (s.compare(t) == -1) description "{s} doesn't compare < {t}"
    }
    
    method test_compareLessThan_concat_shorter {
        def s = "abcd" ++ "e"
        def t = "abcd" ++ "ef"
        assert (s.compare(t) == -1) description "{s} doesn't compare < {t}"
    }

    method test_compareLessThan_flat {
        def s = "abcdea"
        def t = "abcdef"
        assert (s.compare(t) == -1) description "{s} doesn't compare < {t}"
    }

    method test_comparegreaterThan_concat_first {
        def s = "abcd" ++ "ef"
        def t = "aacd"
        assert (s.compare(t) == 1) description "{s} doesn't compare > {t}"
    }

    method test_compareGreaterThan_concat_second {
        def s = "abcd" ++ "ef"
        def t = "abcd" ++ "ea"
        assert (s.compare(t) == 1) description "{s} doesn't compare > {t}"
    }
    
    method test_compareGreaterThan_concat_shorter {
        def s = "abcd" ++ "x"
        def t = "abcd" ++ "ef"
        assert (s.compare(t) == 1) description "{s} doesn't compare > {t}"
    }

    method test_compareGreaterThan_flat {
        def s = "abcdef"
        def t = "abcdea"
        assert (s.compare(t) == 1) description "{s} doesn't compare > {t}"
    }

    method test_lessThan_concat_first {
        def s = "abcd" ++ "ef"
        def t = "bcdef"
        assert (s < t) description "{s} not < {t}"
    }

    method test_lessThan_concat_second {
        def s = "abcd" ++ "ea"
        def t = "abcd" ++ "ef"
        assert (s < t) description "{s} not < {t}"
    }
    
    method test_lessThan_concat_shorter {
        def s = "abcd" ++ "e"
        def t = "abcd" ++ "ef"
        assert (s < t) description "{s} not < {t}"
    }

    method test_lessThan_flat {
        def s = "abcdea"
        def t = "abcdef"
        assert (s < t) description "{s} not < {t}"
    }

    method test_greaterThan_concat_first {
        def s = "abcd" ++ "ef"
        def t = "aacd"
        assert (s > t) description "{s} not > {t}"
    }

    method test_greaterThan_concat_second {
        def s = "abcd" ++ "ef"
        def t = "abcd" ++ "ea"
        assert (s > t) description "{s} not > {t}"
    }
    
    method test_greaterThan_concat_shorter {
        def s = "abcd" ++ "x"
        def t = "abcd" ++ "ef"
        assert (s > t) description "{s} not > {t}"
    }

    method test_greaterThan_flat {
        def s = "abcdef"
        def t = "abcdea"
        assert (s > t) description "{s} not > {t}"
    }
    
    method test_lessThanOrEqual_concat_first {
        def s = "abcd" ++ "ef"
        def t = "bcdef"
        assert (s ≤ t) description "{s} not ≤ {t}"
        assert (s <= t) description "{s} not <= {t}"
    }

    method test_lessThanOrEqual_concat_second {
        def s = "abcd" ++ "ea"
        def t = "abcd" ++ "ef"
        assert (s ≤ t) description "{s} not ≤ {t}"
        assert (s <= t) description "{s} not <= {t}"
    }
    
    method test_lessThanOrEqual_concat_shorter {
        def s = "abcd" ++ "e"
        def t = "abcd" ++ "ef"
        assert (s ≤ t) description "{s} not ≤ {t}"
        assert (s <= t) description "{s} not <= {t}"
    }

    method test_lessThanOrEqual_flat {
        def s = "abcdea"
        def t = "abcdef"
        assert (s ≤ t) description "{s} not ≤ {t}"
        assert (s <= t) description "{s} not <= {t}"
    }

    method test_lessThanOrEqual_equal_flat {
        def s = "abcdef"
        def t = "abcdef"
        assert (s ≤ t) description "{s} not ≤ {t}"
        assert (s <= t) description "{s} not <= {t}"
    }

    method test_greaterThanOrEqual_concat_first {
        def s = "abcd" ++ "ef"
        def t = "aacd"
        assert (s >= t) description "{s} not >= {t}"
        assert (s ≥ t) description "{s} not ≥ {t}"
    }

    method test_greaterThanOrEqual_concat_second {
        def s = "abcd" ++ "ef"
        def t = "abcd" ++ "ea"
        assert (s >= t) description "{s} not >= {t}"
        assert (s ≥ t) description "{s} not ≥ {t}"
    }
    
    method test_greaterThanOrEqual_concat_shorter {
        def s = "abcd" ++ "x"
        def t = "abcd" ++ "ef"
        assert (s >= t) description "{s} not >= {t}"
        assert (s ≥ t) description "{s} not ≥ {t}"
    }

    method test_greaterThanOrEqual_flat {
        def s = "abcdef"
        def t = "abcdea"
        assert (s >= t) description "{s} not >= {t}"
        assert (s ≥ t) description "{s} not ≥ {t}"
    }

    method test_greaterThanOrEqual_equal_flat {
        def s = "abcdef"
        def t = "abcdef"
        assert (s >= t) description "{s} not >= {t}"
        assert (s ≥ t) description "{s} not ≥ {t}"
    }

    method test_equal_equal_flat {
        def s = "abcdef"
        def t = "abcdef"
        assert (s == t) description "{s} not == {t}"
        assert ((s ≥ t) && (s ≤ t)) description "{s} not both ≥ and ≤ to {t}"
    }
    method test_do {
        def s = "abçdéfg"
        var r := ""
        var count := 0
        s.do { ch -> 
            r := r ++ ch
            count := count + 1
        }
        assert (count) shouldBe (s.size)
        assert (r) shouldBe (s)
    }
    method test_do_with_concatString {
        def s = "abçdéfg‹›ﬁﬂ‡°·‚—±Œ„´‰ˇÁ¨ˆØ∏”ÅÍÎÏ˝" ++ 
                    "ÓÔ\uf8ffÒÚÆ¿˘¯Â˜ı◊Ç˛¸Ω≈ç¡™£¢∞§¶•ªº–≠"  // a concatString
        var r := ""
        var count := 0
        s.do { ch -> 
            r := r ++ ch
            count := count + 1
        }
        assert (count) shouldBe (s.size)
        assert (r) shouldBe (s)
    }
}

def stringTests = gU.testSuite.fromTestMethodsIn(stringTest)
stringTests.runAndPrintResults
