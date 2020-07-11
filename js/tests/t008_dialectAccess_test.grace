dialect "subtest/t008_mockDialect"

testSuite "access attribues of a dialect" with {
    test "def access" by {
        assert (red.asString) shouldBe "color r 255 g 0 b 0" }
    test "type access" by {
        assert (Color.asString) shouldBe "type Color" }
    test "method access" by {
        assert (blue.asString) shouldBe "color r 0 g 0 b 255" }
    test "var access" by {
        assert (lineWidth) shouldBe 1 }
    test "var writing" by {
        lineWidth := 2
        assert (lineWidth) shouldBe 2 }
    test "indirect var access" by {
        assert (penWidth) shouldBe (lineWidth) }
    test "indirect var writing" by {
        penWidth := 2
        assert (lineWidth) shouldBe 2
        assert (penWidth) shouldBe 2 }
}

exit
