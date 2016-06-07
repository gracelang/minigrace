dialect "minitest"

testSuiteNamed "for and" with {
    test "same size" by {
        def result = emptyList
        def as = [1, 2, 3, 4, 5]
        def bs = ["one", "two", "three", "four", "five"]
        for (as) and (bs) do { a, b ->
            result.add(a::b)
        }
        assert (result) shouldBe
            [1::"one", 2::"two", 3::"three", 4::"four", 5::"five"]
    }
    
    test "first smaller" by {
        def result = emptyList
        def as = [1, 2, 3]
        def bs = ["one", "two", "three", "four", "five"]
        for (as) and (bs) do { a, b ->
            result.add(a::b)
        }
        assert (result) shouldBe [1::"one", 2::"two", 3::"three"]
    }
    
    test "second smaller" by {
        def result = emptyList
        def as = [1, 2, 3, 4, 5]
        def bs = ["one", "two", "three"]
        for (as) and (bs) do { a, b ->
            result.add(a::b)
        }
        assert (result) shouldBe [1::"one", 2::"two", 3::"three"]
    }
    
    test "first empty" by {
        def result = emptyList
        def as = []
        def bs = ["one", "two", "three"]
        for (as) and (bs) do { a, b ->
            result.add(a::b)
        }
        assert (result) shouldBe []
    }
    
    test "second empty" by {
        def result = emptyList
        def as = [1, 2, 3, 4, 5]
        def bs = []
        for (as) and (bs) do { a, b ->
            result.add(a::b)
        }
        assert (result) shouldBe []
    }
    
    test "both empty" by {
        def result = emptyList
        def as = []
        def bs = []
        for (as) and (bs) do { a, b ->
            result.add(a::b)
        }
        assert (result) shouldBe []
    }
}