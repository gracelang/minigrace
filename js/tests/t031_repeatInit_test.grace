dialect "minitest"

var s

def a = object {
    method new(arg) {
        object {
            s := s ++ "object a ({arg})"
        }
    }
    method asString { "a" }
}

testSuite {

    test "initialized exactly once" by {
        s := ""
        a.new "in constructor"
        assert (s) shouldBe "object a (in constructor)"
    }

    test "initialized exactly once in inherit" by {
        s := ""
        object {
            inherit a.new "in inherit"
            s := s ++ " in body of constructor"
        }
        assert (s) shouldBe "object a (in inherit) in body of constructor"
    }

}
