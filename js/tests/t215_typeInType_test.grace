dialect "minitest"

type A = {
    m (n:Number) → Number
    B → Type[[Number]]
}

def a = object {
    method m (n:Number) → Number {
        n + 1
    }
    type B = Number
}

def x:a.B = 3

testSuite {
    test "type methods" by {
        assert (A.methodNames) shouldBe (set.withAll ["m(_)", "B"])
    }
    test "test type in object" by {
        assert (a.B) shouldBe (Number)
    }
}
