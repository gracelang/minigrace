dialect "minitest"

class inhAndUseOverride {
    inherit fishClass
    use catClass
    method move { "waddle" }
}

class inhAndUseExcludeFishMove {
    inherit fishClass exclude move
    use catClass
}

class inhAndUseExcludeCatMove {
    inherit fishClass
    use catClass exclude move
}

trait catClass {
    method move { "walk" }
}

trait fishClass {
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
}
