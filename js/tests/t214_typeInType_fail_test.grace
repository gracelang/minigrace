dialect "minitest"

type A = {
    m (n:Number) → Number
    type B = Number
}

def a = object {
    method m (n:Number) → Number {
        n + 1
    }
    type B = Number
}

def x:A.B = 3

testSuite {
    test "type methods" by {
        assert (A.methodNames) shouldBe (set.withAll ["m(_)", "B"])
    }
    test "type types" by {
        assert (A.typeNames) shouldBe (set.with "B")
    }
    test "test nested type" by {
        assert (A.B) shouldBe (Number)
    }
    test "test type in object" by {
        assert (a.B) shouldBe (Number)
    }
}
