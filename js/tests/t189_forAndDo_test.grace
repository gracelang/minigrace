dialect "minitest"

testSuiteNamed "for and" with {
    test "same size" by {
        def result = emptyList
        def a's = [1, 2, 3, 4, 5]
        def b's = ["one", "two", "three", "four", "five"]
        for (a's) and (b's) do { a, b ->
            result.add(a::b)
        }
        assert (result) shouldBe
            [1::"one", 2::"two", 3::"three", 4::"four", 5::"five"]
    }
    
    test "first smaller" by {
        def result = emptyList
        def a's = [1, 2, 3]
        def b's = ["one", "two", "three", "four", "five"]
        for (a's) and (b's) do { a, b ->
            result.add(a::b)
        }
        assert (result) shouldBe [1::"one", 2::"two", 3::"three"]
    }
    
    test "second smaller" by {
        def result = emptyList
        def a's = [1, 2, 3, 4, 5]
        def b's = ["one", "two", "three"]
        for (a's) and (b's) do { a, b ->
            result.add(a::b)
        }
        assert (result) shouldBe [1::"one", 2::"two", 3::"three"]
    }
    
    test "first empty" by {
        def result = emptyList
        def a's = []
        def b's = ["one", "two", "three"]
        for (a's) and (b's) do { a, b ->
            result.add(a::b)
        }
        assert (result) shouldBe []
    }
    
    test "second empty" by {
        def result = emptyList
        def a's = [1, 2, 3, 4, 5]
        def b's = []
        for (a's) and (b's) do { a, b ->
            result.add(a::b)
        }
        assert (result) shouldBe []
    }
    
    test "both empty" by {
        def result = emptyList
        def a's = []
        def b's = []
        for (a's) and (b's) do { a, b ->
            result.add(a::b)
        }
        assert (result) shouldBe []
    }
}
