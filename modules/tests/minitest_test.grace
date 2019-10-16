dialect "minitest"

def TestError = Exception.refine "TestError"

testSuite "minitest" with {
    def l = list [1, 3, 5, 2, 4]

    test "list is mutated by add" by {
        l.push(6)
        assert (l.size) shouldBe (6)
    }

    test "list unchanged in separate test" by {
        assert (l.size) shouldBe (5)
    }

    test "makes no assertion" by {
    }

    test "asserts a falsehood" by {
        assert 3 shouldBe 0
    }

    test "raises an exception" by {
        assert { TestError.raise "message containing wombat and kanga" }
              shouldRaise (TestError) mentioning "wombat" and "kanga"
    }
}
