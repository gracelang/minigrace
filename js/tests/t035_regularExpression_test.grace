dialect "minitest"
import "regularExpression" as re

testSuite "regex syntax errors" with {

    test "mismatched paren" by {
        assert {re.fromString "text ("} shouldRaise (re.SyntaxError)
              mentioning "Invalid regular expression" and "Unterminated group"
    }
    test "bad modifiers" by {
        assert {re.fromString "abc" modifiers "wx"} shouldRaise (re.SyntaxError)
              mentioning "Invalid flags"
    }
}

testSuiteNamed "single matches" with {

    test "matches succeeds" by {
        def pat = re.fromString "ae|ie|ou"
        assert (pat.matches "aeroplane") description "{pat} did not match \"aeroplane\""
        assert (pat.matches "piebald") description "{pat} did not match \"piebald\""
    }

    test "match fails" by {
        def pat = re.fromString "ho*se"
        deny (pat.matches "zebra")
        deny (pat.matches "armadillo")
    }

    test "firstMatch succeeds" by {
        def pat = re.fromString "ae|ie|ou"
        assert (pat.firstMatchingPosition "aeroplane" ifNone {failBecause "pattern {pat} did not match"})
            shouldBe 1
        assert (pat.firstMatchingPosition "piebald" ifNone {failBecause "pattern {pat} did not match"})
            shouldBe 2
    }

    test "firstMatch fails" by {
        def pat = re.fromString "ae|ie|ou"
        var noMatch := false
        def matchPos = pat.firstMatchingPosition "airplane" ifNone {noMatch := true}
        assert (noMatch) description "{pat} matched \"airplane\" at index {matchPos}"
    }

    test "matchingString succeeds" by {
        def pat = re.fromString "ae|ie|ou"
        assert (pat.firstMatchingString "aeroplane" ifNone {failBecause "pattern {pat} did not match"})
            shouldBe "ae"
        assert (pat.firstMatchingString "piebald" ifNone {failBecause "pattern {pat} did not match"})
            shouldBe "ie"
    }

    test "matchingString fails" by {
        def pat = re.fromString "ae|ie|ou"
        var noMatch := false
        def matchStr = pat.firstMatchingString "airplane" ifNone {noMatch := true}
        assert (noMatch) description "{pat} matched \"airplane\" substring {matchStr}"
    }

}

testSuiteNamed "global matches" with {

    test "allMatches succeeds test first" by {
        def pat = re.fromString ‹(ae)|(ie)|(ou)|(l[ie])› modifiers "g"
        def text = "outboard lie aeroplanes"
        def matches = pat.allMatches (text)
        deny (matches.isEmpty) description "‹{pat}› did not match ‹{text}›"
        assert (matches.size) shouldBe 4
        def firstMatch = matches.first
        assert (firstMatch.position) shouldBe 1
        assert (firstMatch.whole) shouldBe "ou"
        assert (firstMatch.group 1) shouldBe ""
        assert (firstMatch.group 2) shouldBe ""
        assert (firstMatch.group 3) shouldBe "ou"
        assert (firstMatch.group 4) shouldBe ""
    }

    test "allMatches succeeds test second" by {
        def pat = re.fromString ‹(ae)|(ie)|(ou)|l(.)› modifiers "g"
        def text = "outboard lie aeroplanes"
        def matches = pat.allMatches (text)
        deny (matches.isEmpty) description "‹{pat}› did not match ‹{text}›"
        assert (matches.size) shouldBe 5
        def secondMatch = matches.second
        assert (secondMatch.position) shouldBe 10
        assert (secondMatch.whole) shouldBe "li"
        assert (secondMatch.group 1) shouldBe ""
        assert (secondMatch.group 2) shouldBe ""
        assert (secondMatch.group 3) shouldBe ""
        assert (secondMatch.group 4) shouldBe "i"
    }

    test "allMatches succeeds test third" by {
        def pat = re.fromString ‹(ae)|(ie)|(ou)|l(.)› modifiers "g"
        def text = "outboard lie aeroplanes"
        def matches = pat.allMatches (text)
        deny (matches.isEmpty) description "‹{pat}› did not match ‹{text}›"
        assert (matches.size) shouldBe 5
        def thirdMatch = matches.third
        assert (thirdMatch.position) shouldBe 11
        assert (thirdMatch.whole) shouldBe "ie"
        assert (thirdMatch.group 1) shouldBe ""
        assert (thirdMatch.group 2) shouldBe "ie"
        assert (thirdMatch.group 3) shouldBe ""
        assert (thirdMatch.group 4) shouldBe ""
    }

    test "allMatches succeeds test fourth" by {
        def pat = re.fromString ‹(ae)|(ie)|(ou)|l(.)› modifiers "g"
        def text = "outboard lie aeroplanes"
        def matches = pat.allMatches (text)
        deny (matches.isEmpty) description "‹{pat}› did not match ‹{text}›"
        assert (matches.size) shouldBe 5
        def fourthMatch = matches.fourth
        assert (fourthMatch.position) shouldBe 14
        assert (fourthMatch.whole) shouldBe "ae"
        assert (fourthMatch.group 1) shouldBe "ae"
        assert (fourthMatch.group 2) shouldBe ""
        assert (fourthMatch.group 3) shouldBe ""
        assert (fourthMatch.group 4) shouldBe ""
    }

    test "allMatches succeeds test fifth" by {
        def pat = re.fromString ‹(ae)|(ie)|(ou)|l(.)› modifiers "g"
        def text = "outboard lie aeroplanes"
        def matches = pat.allMatches (text)
        deny (matches.isEmpty) description "‹{pat}› did not match ‹{text}›"
        assert (matches.size) shouldBe 5
        def fifthMatch = matches.fifth
        assert (fifthMatch.position) shouldBe 19
        assert (fifthMatch.whole) shouldBe "la"
        assert (fifthMatch.group 1) shouldBe ""
        assert (fifthMatch.group 2) shouldBe ""
        assert (fifthMatch.group 3) shouldBe ""
        assert (fifthMatch.group 4) shouldBe "a"
    }

    test "match fails" by {
        def pat = re.fromString "ho*se" modifiers "g"
        assert (pat.allMatches "zebra".isEmpty)
        assert (pat.allMatches "armadillo".isEmpty)
    }
}

exit
