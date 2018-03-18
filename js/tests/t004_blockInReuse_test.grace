dialect "minitest"

//////////////////
// immutable points
//////////////////

method pointTx(x') y(y') constructor(fn:Function2) {
    // the fn argument is a function that will construct a new object of
    // whatever class uses this trait
    object {
        method x { x' }
        method y { y' }
        method + (o) {
            fn.apply(o.x + x, o.y + y)
        }
        method asString { "point({x}, {y})" }
    }
}

method colorT(c') constructor(fn:Function1) {
    // the fn argument is a function that will construct a new object of
    // whatever class uses this trait
    object {
        method c { c' }
        method darker { 
            fn.apply "dark {c}"
        }
        method asString { "color {c}" }
    }
}

class pointX(xcoord) y(ycoord) colored(initialC) {
    use pointTx(xcoord) y(ycoord) constructor {x, y → pointX(x) y(y) colored(initialC)}
        // notice how we provide the 2-parameter constructor required by this trait
        alias pointAsString = asString
    use colorT(initialC) constructor {c → pointX(xcoord) y(ycoord) colored(c)}
        alias colorAsString = asString
    method asString { pointAsString ++ " " ++ colorAsString }
}

testSuite {
    test "red origin" by {
        def origin = pointX 0 y 0 colored "red"
        assert (origin.asString) shouldBe "point(0, 0) color red"
    }
    test "blue right" by {
        def right = pointX 4 y 0 colored "blue"
        assert "{right}" shouldBe "point(4, 0) color blue"
    }
    test "darker new point" by {
        def right = pointX 4 y 0 colored "blue"
        def up = pointX 0 y 3 colored "green"
        def sum = right + up
        def darkSum = sum.darker
        def darkRight = right.darker
        assert "{right}" shouldBe "point(4, 0) color blue"
        assert "{up}" shouldBe "point(0, 3) color green"
        assert "{sum}" shouldBe "point(4, 3) color blue"
        assert "{darkSum}" shouldBe "point(4, 3) color dark blue"
        assert "{darkRight}" shouldBe "point(4, 0) color dark blue"
    }
}