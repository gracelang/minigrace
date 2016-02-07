dialect "minitest"

testSuiteNamed "old and new collection factories" with {
    test "new list construction" by {
        def l = list [1, 2, 3]
        assert(l) hasType (List)
        assert(l.size) shouldBe 3
        assert(l) shouldBe [1, 2, 3]
    }

    test "old list construction" by {
        def l = list.with(1, 2, 3)
        assert(l) hasType (List)
        assert(l.size) shouldBe 3
        assert(l) shouldBe [1, 2, 3]
    }
    
    test "withAll list construction" by {
        def l = list.withAll [1, 2, 3]
        assert(l) hasType (List)
        assert(l.size) shouldBe 3
        assert(l) shouldBe [1, 2, 3]
    }
    
    test "new sequence construction" by {
        def l = sequence [1, 2, 3]
        assert(l) hasType (Sequence)
        assert(l.size) shouldBe 3
        assert(l) shouldBe [1, 2, 3]
    }

    test "old sequence construction" by {
        def l = sequence.with(1, 2, 3)
        assert(l) hasType (Sequence)
        assert(l.size) shouldBe 3
        assert(l) shouldBe [1, 2, 3]
    }
    
    test "withAll sequence construction" by {
        def l = sequence.withAll [1, 2, 3]
        assert(l) hasType (Sequence)
        assert(l.size) shouldBe 3
        assert(l) shouldBe [1, 2, 3]
    }

    test "new dictionary construction" by {
        def l = dictionary ["one"::1, "two"::2, "three"::3]
        assert(l) hasType (Dictionary)
        assert(l.size) shouldBe 3
        assert(l.at "one") shouldBe 1
        assert(l.at "two") shouldBe 2
        assert(l.at "three") shouldBe 3
    }

    test "old dictionary construction" by {
        def l = dictionary.with("one"::1, "two"::2, "three"::3)
        assert(l) hasType (Dictionary)
        assert(l.size) shouldBe 3
        assert(l.at "one") shouldBe 1
        assert(l.at "two") shouldBe 2
        assert(l.at "three") shouldBe 3
    }
    
    test "withAll dictionary construction" by {
        def l = dictionary.withAll ["one"::1, "two"::2, "three"::3]
        assert(l) hasType (Dictionary)
        assert(l.size) shouldBe 3
        assert(l.at "one") shouldBe 1
        assert(l.at "two") shouldBe 2
        assert(l.at "three") shouldBe 3
    }
}
