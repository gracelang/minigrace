dialect "minitest"

testSuite {
    def l = list.with(1, 3, 5, 2, 4)

    test "list is mutated by add" by {
        l.push(6)
        assert (l.size) shouldBe (6)
    }

    test "list unchanged in separate test" by {
        assert (l.size) shouldBe (5)
    }
}
