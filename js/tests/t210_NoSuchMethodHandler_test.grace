dialect "minitest"
import "mirrors" as mirror

def testObj = object { }
def tom = mirror.reflect(testObj)
tom.whenNoMethodDo { name, args, receiver ->
    "method {name} requested with args {args>>sequence} on {receiver}"
}

testSuite {
    test "small arguments" by {
        assert(testObj.impossible 4 and 5 and 6)
            shouldBe "method impossible(1)and(1)and(1) requested with args [4, 5, 6] on a testObj"
    }
    test "large arguments" by {
        assert(testObj.impossible (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12))
            shouldBe "method impossible(12) requested with args [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] on a testObj"
    }
    test "small arguments on self" by {
        object {
            def tom = mirror.reflect(self)
            def asString is public = "object declared on line 21"
            tom.whenNoMethodDo { name, args, receiver ->
                "{receiver} is pretending to respond to method {name} with arg {args}"
            }
            assert(self.impossible 4 and 5)
                shouldBe "object declared on line 21 is pretending to respond to method impossible(1)and(1) with arg list [4, 5]"
        }
    }
    test "large arguments on self" by {
        object {
            def tom = mirror.reflect(self)
            def asString is public = "this object"
            tom.whenNoMethodDo { name, args, receiver ->
                "{receiver} is pretending to respond to method {name} with arg {args}"
            }
            assert(self.impossible (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12))
                shouldBe "this object is pretending to respond to method impossible(12) with arg list [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]"
        }
    }
}
