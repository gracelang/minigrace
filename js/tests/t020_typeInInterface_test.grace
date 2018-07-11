dialect "minitest"
import "mirrors" as mirror

type T = interface {
    x -> Number
    type U = String
    y -> U
}

method foo -> T {
    object {
        method x {...}
        method y {...}
    }
}

method betterFoo -> T {
    object {
        method x {...}
        type U = String
        method y {...}
    }
}



testSuite {
    test "type T has U method" by {
        assert (T.methodNames) shouldBe (set.withAll ["x", "y", "U"])
    }

    test "type T's U attribute is String" by {
        assert (T.U) shouldBe (String)
    }

    test "foo doesn't return a T" by {
        assert { foo } shouldRaise (TypeError) mentioning "missing method U"
    }

    test "betterFoo does return a T" by {
        assert (betterFoo) hasType (T)
    }

    test "local type has method W" by {
        type Local = interface {
            type W = T
            x -> Number
        }
        assert (Local.methodNames) shouldBe (set.withAll ["x", "W"])
    }
}
