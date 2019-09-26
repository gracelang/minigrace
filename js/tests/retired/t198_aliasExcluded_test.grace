dialect "minitest"

trait top {
    method x { "x" }
    method y { "y" }
}

class bottom {
    use top 
        alias y = x
        alias x = y
    method publicX { x }
    method publicY { y }
}

class justY {
    use top 
        exclude x
        alias y = x
    method publicX { x }
    method publicY { y }
}


testSuite {
    test "bottom.x is y" by {
        assert (bottom.publicX) shouldBe "y"
    }
    test "bottom.y is x" by {
        assert (bottom.publicY) shouldBe "x"
    }

    test "justY.y is x" by {
        assert (justY.publicY) shouldBe "x"
    }
    test "there is no x" by {
        assert {justY.publicX} shouldRaise (NoSuchMethod)
    }
}
