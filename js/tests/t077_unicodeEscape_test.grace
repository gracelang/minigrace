import "gUnit" as gU
import "unicode" as u

def patternTest = object {
    class forMethod(m) {
        inherit gU.testCaseNamed(m)
        
        method testUnicodeEscape {
            assert "\u45EF" shouldBe "\u45ef"
        }
        
        method testName {
            assert(u.name "\u202f") shouldBe "NARROW NO-BREAK SPACE"
        }
        
        method testInCategoryNBS {
            assert (u.inCategory("\u202f", "Zs")) description "\\u202f is not in category Zs"
            assert (u.inCategory("\u202f", "Z")) description "\\u202f is not in category Z"
        }

        method testInCategorySpace {
            assert (u.inCategory(" ", "Zs")) description "space is not in category Zs"
            assert (u.inCategory(" ", "Z")) description "space is not in category Z"
        }
        
        method testCategorySpace {
            assert (u.category " ") shouldBe "Zs"
        }
        
        method testCategoryæ {
            assert (u.category "æ") shouldBe "Ll"
        }
        
        method testOrd {
            assert("\u202f".ord) shouldBe 16x202f
        }
        
    //    method testLookupNNBS {
    //        assert(u.lookup "NARROW NO-BREAK SPACE") shouldBe "\u202f"
    //    }
    //
    //    method testLookupDAGGER {
    //        assert(u.lookup "DAGGER") shouldBe "\u2020"
    //    }

        method testPatternBadSeparatorNNBS {
            def badSeparator = u.pattern ["Z", 9] not [32, 8232]
            assert(badSeparator.matches "\u202f") 
                description "badSeparator doesn't match \\u202f (Narrow no-break space)"
        }

        method testPatternClasses {
            def letters = u.pattern ["L", "N", "Z"] not [32, "N"]
            assert(letters.matches "a")
                description "letters doesn't match `a`"
            deny(letters.matches " ")
                description "letters matches space"
            assert(letters.matches "\u2029")
                description "letters doesn't match paragraph separator"
        }

        method testPatternBadSeparatorTab {
            def badSeparator = u.pattern ["Z", "\t".ord] not [32, 160]
            assert(badSeparator.matches "\t") 
                description "badSeparator doesn't match \\t"
        }

        method testPatternBadSeparatorParaSep {
            def badSeparator = u.pattern ["Z", "\t".ord] not [32, 160]
            assert(badSeparator.matches "\u2029") 
                description "badSeparator doesn't match \\u2029 (Paragraph Separator)"
        }
            
        method testPatternBadSeparatorSpace {
            def badSeparator = u.pattern ["Z", 9] not [32, 160]
            deny(badSeparator.matches " ") 
                description "badSeparator matches space"
        }

        method testPatternBadSeparatorNBS {
            def badSeparator = u.pattern ["Z", 9] not [32, 160]
            deny(badSeparator.matches "\u00A0") 
                description "badSeparator matches non-breaking space"
        }
    }
}

def patternTests = gU.testSuite.fromTestMethodsIn(patternTest)
patternTests.runAndPrintResults
