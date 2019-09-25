dialect "minitest"

once class feather(n) {
    use identityEquality
    method asString { "a boxed {n} ({self.hash})" }
    method value { n }
}

testSuite {
    test "creation" by {
        def f1 = feather 1
        def f2 = feather 2
        assert (f1.value) shouldBe 1
        assert (f2.value) shouldBe 2
        assert (f1) shouldntBe (f2)
    }


    test "identity" by {
        def f1 = feather 34
        def f2 = feather 34
        assert (f1.value) shouldBe 34
        assert (f2.value) shouldBe 34
        assert (f1) shouldBe (f2)
    }
}

