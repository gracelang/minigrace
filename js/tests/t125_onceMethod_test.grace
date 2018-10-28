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
        assert (t2.executed) description "t2.sum didn't execute the first time"
        t2.executed := false
        assert (t2.sum) shouldBe 55
        deny (t2.executed) description "t2.sum executed again"
    }
    
    test "execeptions are not memoized" by {
        def o = object {
            def nums = 1..10
            var exceptional is public := true
            var executed is public := false
            once method sum {
                executed := true
                if (exceptional) then { Exception.raise "sum raised an exception" }
                nums.fold{a, b -> a + b} startingWith 0
            }
        }
        assert {o.sum} shouldRaise (Exception) mentioning "sum raised an exception"
        assert (o.executed) description "o.sum didn't execute when it raised an exception"
        o.executed := false
        o.exceptional := false
        assert (o.sum) shouldBe 55
        assert (o.executed) description "o.sum didn't execute when it returned 55"
        o.executed := false
        assert (o.sum) shouldBe 55
        deny (o.executed) description "o.sum executed again"
    }
}

