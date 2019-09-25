dialect "minitest"

method hypotenuse(a, b) {
    def asq = a * a
    def hypsq = asq + bsq
    def bsq = b * b
    return hypsq.sqrt
}

testSuite {
    test "use bsq before definition" by {
        assert {hypotenuse(3, 4)} shouldRaise (UninitializedVariable)
    }
}
