dialect "minitest"
import "mirrors" as mirror

def testObj = object { }
def tom = mirror.reflect(testObj)
tom.whenNoMethodDo { name, args ->
    "method {name} requested with args {args}"
}

testSuite {
    test "small arguments" by {
        assert(testObj.impossible 4 and 5 and 6)
            shouldBe "method impossible(1)and(1)and(1) requested with args [4, 5, 6]"
    }
    test "large arguments" by {
        assert(testObj.impossible (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12))
            shouldBe "method impossible(12) requested with args [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]"
    }
    test "small arguments on self" by {
        object {
            def tom = mirror.reflect(self)
            tom.whenNoMethodDo { name, args ->
                "method {name} requested with args {args}"
            }
            assert(self.impossible 4 and 5 and 6)
                shouldBe "method impossible(1)and(1)and(1) requested with args [4, 5, 6]"
        }
    }
    test "large arguments on self" by {
        object {
            def tom = mirror.reflect(self)
            tom.whenNoMethodDo { name, args ->
                "method {name} requested with args {args}"
            }
            assert(self.impossible (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12))
                shouldBe "method impossible(12) requested with args [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]"
        }
    }
}
