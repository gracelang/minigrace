dialect "minitest"

class twoTraitsExcludeMove {
    use fishClass alias fishMove = move
        exclude move
    use catClass
        alias catMove = move
        exclude move
    method move {
        "{fishMove} {catMove}"
    }
}

class twoTraitsAndMove {
    use fishClass alias fishMove = move
    use catClass
        alias catMove = move
    method move {
        "{catMove} {fishMove}"
    }
}

trait catClass {
    method move { "walk" }
}
trait  fishClass { 
    method move { "swim" } 
}
testSuiteNamed "conflict resolution" with {
    test "composed method with exclusion" by {
        assert (twoTraitsExcludeMove.move) shouldBe "swim walk"
    }
    
    test "composed method without exclusion" by {
        assert (twoTraitsAndMove.move) shouldBe "walk swim"
    }
}
