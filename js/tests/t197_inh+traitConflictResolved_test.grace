dialect "minitest"

class inhAndUseOverride {
    inherit fish
    use cat
    method move { "waddle" }
}
class inhAndUseCombine {
    inherit fish
        alias fishMove = move
        exclude breathe
    use cat
        alias catMove = move
    method move { "waddle, a combination of {fishMove} and {catMove}" }
}
class inhAndUseExcludeFishMove {
    inherit fish exclude move
    use cat
}
class inhAndUseExcludeCatMove {
    inherit fish
    use cat exclude move
}
trait preCat {
    method vocalize { "purr" }
}
trait preFish {
    method breathe { "bubble" }
}
trait cat {
    use preCat
    method move { "walk" }
}
trait fish {
    use preFish
    method move { "swim" }
}

testSuiteNamed "conflict resolution" with {
    test "composed method with override" by {
        assert (inhAndUseOverride.move) shouldBe "waddle"
    }
    test "composed method with inheritance exclusion" by {
        assert (inhAndUseExcludeFishMove.move) shouldBe "walk"
    }
    test "composed method with use exclusion" by {
        assert (inhAndUseExcludeCatMove.move) shouldBe "swim"
    }
    test "composed method with use exclusion nested trait" by {
        assert (inhAndUseExcludeCatMove.breathe) shouldBe "bubble"
        assert (inhAndUseExcludeCatMove.vocalize) shouldBe "purr"
    }
    test "aliases used for combination" by {
        assert (inhAndUseCombine.move) shouldBe "waddle, a combination of swim and walk"
        assert {inhAndUseCombine.breathe} shouldRaise (NoSuchMethod)
        assert (inhAndUseCombine.vocalize) shouldBe "purr"
    }
    test "aliases used for combination excludes breathe" by {
        assert {inhAndUseCombine.breathe} shouldRaise (NoSuchMethod)
    }
    test "aliases used for combination can vocalize" by {
        assert (inhAndUseCombine.vocalize) shouldBe "purr"
    }
}
