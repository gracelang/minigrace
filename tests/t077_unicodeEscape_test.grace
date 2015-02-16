import "gUnit" as gU
import "unicode" as u

class paternTest.forMethod(m) {
    inherits gU.testCaseNamed(m)
    
    method testUnicodeEscape {
        assert "\u45EF" shouldBe "\u45ef"
    }
    
    method testName {
        assert(u.name "\u202f") shouldBe "NARROW NO-BREAK SPACE"
    }
    
    method testClass {
        assert (u.category "\u202f") shouldBe "Zs"
        assert (u.category " ") shouldBe "Zs"
    }
    
    method testOrd {
        assert("\u202f".ord) shouldBe 16x202f
    }
    
    method testLookupNNBS {
        assert(u.lookup "NARROW NO-BREAK SPACE") shouldBe "\u202f"
    }

    method testLookupDAGGER {
        assert(u.lookup "DAGGER") shouldBe "\u2020"
    }
    
    method testPatternBadSeparatorNNBS {
        def badSeparator = u.pattern("Z", 9)not(32, 8232)
        assert(badSeparator.match "\u202f") 
            description "badSeparator doesn't match \\u202f (Narrow no-break space)"
    }

    method testPatternBadSeparatorTab {
        def badSeparator = u.pattern("Z", "\t".ord)not(32, 160)
        assert(badSeparator.match "\t") 
            description "badSeparator doesn't match \\t"
    }

    method testPatternBadSeparatorParaSep {
        def badSeparator = u.pattern("Z", "\t".ord)not(32, 160)
        assert(badSeparator.match "\u2029") 
            description "badSeparator doesn't match \\u2029 (Paragraph Separator)"
    }
        
    method testPatternBadSeparatorSpace {
        def badSeparator = u.pattern("Z", 9)not(32, 160)
        deny(badSeparator.match " ") 
            description "badSeparator matches space"
    }

    method testPatternBadSeparatorNBS {
        def badSeparator = u.pattern("Z", 9)not(32, 160)
        deny(badSeparator.match "\u00A0") 
            description "badSeparator matches non-breaking space"
    }
}

def patternTests = gU.testSuite.fromTestMethodsIn(paternTest)
// patternTests.debugAndPrintResults
patternTests.runAndPrintResults
