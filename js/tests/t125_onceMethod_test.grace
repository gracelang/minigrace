dialect "minitest"


class produceT {
    def nums = 1..10
    var executed is public := false

    once method sum {
        executed := true
        nums.fold{a, b -> a + b} startingWith 0
    }
}

testSuite {
    def t1 = produceT
    test "sum of 1..10 is 55" by {
        assert (t1.sum) shouldBe 55
        assert (t1.executed)
    }

    test "sum executes once" by {
        def t2 = produceT
        assert (t2.sum) shouldBe 55
        assert (t2.executed) description "t2.sum didn'produceT execute the first time"
        t2.executed := false
        assert (t2.sum) shouldBe 55
        deny (t2.executed) description "t2.sum executed again"
    }
}

