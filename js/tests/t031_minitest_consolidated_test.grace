dialect "minitest"
import "mirror" as mirror
import "errormessages" as em


numberOfErrorsToRerun := 1

def testObj = object { }
def tom = mirror.reflect(testObj)
tom.whenNoMethodDo { name, args, receiver ->
    "method {name} requested with args {args>>sequence} on {receiver}"
}

testSuite "no such method handler" with  {
    test "small arguments" by {
        assert(testObj.impossible 4 and 5 and 6)
            shouldBe "method impossible(_)and(_)and(_) requested with args [4, 5, 6] on a testObj"
    }
    test "large arguments" by {
        assert(testObj.impossible (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12))
            shouldBe "method impossible(_,_,_,_,_,_,_,_,_,_,_,_) requested with args [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] on a testObj"
    }
    test "small arguments on self" by {
        object {
            def tom = mirror.reflect(self)
            def asString is public = "object declared on line 21"
            tom.whenNoMethodDo { name, args, receiver ->
                "{receiver} is pretending to respond to method {name} with args {args}"
            }
            assert(self.impossible 4 and 5)
                shouldBe "object declared on line 21 is pretending to respond to method impossible(_)and(_) with args [4, 5]"
        }
    }
    test "large arguments on self" by {
        object {
            def tom = mirror.reflect(self)
            def asString is public = "this object"
            tom.whenNoMethodDo { name, args, receiver ->
                "{receiver} is pretending to respond to method {name} with args {args}"
            }
            assert(self.impossible (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12))
                shouldBe "this object is pretending to respond to method impossible(_,_,_,_,_,_,_,_,_,_,_,_) with args [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]"
        }
    }
}


testSuite "EDP algorithm" with {
    test "one char match at pos 2" by {
        def rng = em.name "5" matches "45678" within 1
        assert (rng) shouldBe 1
    }
    test "one char match at pos 1" by {
        def rng = em.name "5" matches "5678" within 1
        assert (rng) shouldBe 1
    }
    test "one char no match" by {
        def rng = em.name "5" matches "4678" within 1
        assert (rng) shouldBe 1
    }
    test "three char approx match" by {
        def rng = em.name "(5)" matches "(6)" within 1
        assert (rng) shouldBe 3
    }
    test "three char no approx match w/i 1" by {
        def rng = em.name "(5)" matches "<|>" within 1
        assert (rng) shouldBe 0
    }
    test "three char no approx match w/i 2" by {
        def rng = em.name "(5)" matches "<|>" within 2
        assert (rng) shouldBe 0
    }
    test "three char no approx match w/i 3" by {
        def rng = em.name "(5)" matches "<|>" within 3
        assert (rng) shouldBe 3
    }
    test "vargv and argv 1" by {
        def rng = em.name "vargv" matches "argv" within 1
        assert (rng) shouldBe 4
    }
    test "var_v and argv 2" by {
        def rng = em.name "var_v" matches "argv" within 2
        assert (rng) shouldBe 4
    }
    test "var_v and argv 3" by {
        def rng = em.name "var_v" matches "argv" within 3
        assert (rng) shouldBe 4
    }
    test "var_v and argv 4" by {
        def rng = em.name "var_v" matches "argv" within 4
        assert (rng) shouldBe 4
    }
    test "var_v and argv 5" by {
        def rng = em.name "var_v" matches "argv" within 5
        assert (rng) shouldBe 4
    }
    test "Procedure and it" by {
        def rng = em.name "Procedure" matches "it" within 1
        assert (rng) shouldBe 0
    }
    test "Procedure and π" by {
        def rng = em.name "Procedure" matches "π" within 1
        assert (rng) shouldBe 0
    }
}

testSuite "approx string match" with {
    test "number of args" by {
        assert (em.name "print(2)" mightBeIntendedToBe "print(1)")
            description "print(2) mightn't be print(1)"
    }
    test "prefix" by {
        assert (em.name "turn(1)" mightBeIntendedToBe "turnRight(1)")
            description "turn(1) mightn't be turnRight(1)"
    }
    test "one part itead of two" by {
        assert (em.name "print(2)" mightBeIntendedToBe "print(1)andAlso(1)")
            description "print(2) mightn't be print(1)AndAlso(1)"
    }
    test "unrelated" by {
        deny (em.name "wombat(1)" mightBeIntendedToBe "kangaroo(2)")
            description "wombat(1) might be kangaroo(2)"
    }
    test "+ and ++" by {
        assert (em.name "+(1)" mightBeIntendedToBe "++(1)")
            description "+(1) mightn't be ++(1)"
    }
    test "wilbur" by {
        assert (em.name "wolbur" mightBeIntendedToBe "wilbur")
            description "wolbur mightn't be wilbur"
    }
    test "name(1)mightBeINtendedToBe(1)" by {
        assert (em.name "name(1)mightBeINtendedToBe(1)" mightBeIntendedToBe "name(1)mightBeIntendedToBe(1)")
            description "name(1)mightBeINtendedToBe(1) does not suggest name(1)mightBeIntendedToBe(1)"
    }
    test "assert(_)descritption(_)" by {
        assert (em.name "assert(_)descritption(_)" mightBeIntendedToBe "assert(_)description(_)")
            description "assert(_)descritption(_) does not suggest assert(_)description(_)"
    }
    test "plus or minus" by {
        assert(em.name "prefix±" mightBeIntendedToBe "prefix-")
            description "prefix± might not be intended to be prefix-"
    }
    test "Procedure and Procedure1" by {
        assert(em.name "Procedure" mightBeIntendedToBe "Procedure1")
            description "Procedure might not be intended to be Procedure1"
    }
    test "Procedure and π" by {
        deny(em.name "Procedure" mightBeIntendedToBe "π")
            description "Procedure might be intended to be π"
    }
    test "Procedure and T" by {
        deny(em.name "Procedure" mightBeIntendedToBe "T")
            description "Procedure might be intended to be T"
    }
    test "Procedure and it" by {
        deny(em.name "Procedure" mightBeIntendedToBe "it")
            description "Procedure might be intended to be it"
    }
}

testSuite "readable lists" with {
    test "one element" by {
        assert (em.readableStringFrom ["apples"]) shouldBe "apples"
    }
    test "two elements" by {
        assert (em.readableStringFrom ["apples", "pears"])
              shouldBe "apples and pears"
    }
    test "three elements" by {
        assert (em.readableStringFrom ["apples", "pears", "peaches"])
              shouldBe "apples, pears, and peaches"
    }
    test "four elements" by {
        assert (em.readableStringFrom ["apples", "pears", "peaches", "oranges"])
              shouldBe "apples, pears, peaches, and oranges"
    }
    test "four elements with or" by {
        assert (em.readableStringFrom ["apples", "pears", "peaches", "oranges"] using "or")
              shouldBe "apples, pears, peaches, or oranges"
    }
}

type A = interface {
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

testSuite "type in type" with {
    test "type methods" by {
        assert (A.methodNames) shouldBe ["B", "m(_)"]
    }
    test "test type in object" by {
        assert (a.B) shouldBe (Number)
    }
}

trait aT {
    method border { }
    method size { 3 }
}

trait b {
    method color { }
    method size { 2 }
}

trait t1 {
    method x(size:Number) { "method x" }
    method y(name:String) { "method y arg {name}" }
}

class c1 {
    use t1 alias w(name) = y(name) exclude x(_)
    // y(name) in the alias clause used to cause a crash, while y(_) worked fine.
    // The w(name) is ok, because w is being declared.
    method w'(kind) { w(kind) }
    method name { "should not be at shadowing error" }
}

class shape {
    use aT 
        alias asize = size
    use b alias bsize = size exclude size
    method draw { }
    method publicBsize { bsize }
    method size { asize + bsize }
}

testSuite "aliases and exclusions" with {
    test "alias is confidential" by {
        assert {shape.bsize} shouldRaise (NoSuchMethod)
    }
    test "exclude does not exclude its alias" by {
        assert (shape.publicBsize) shouldBe 2
    }
    test "2 + 3 = 5" by {
        assert (shape.size) shouldBe 5
    }
    test "alias w works on self" by {
        assert (c1.w' "w") shouldBe "method y arg w"
    }
    test "alias w is confidential" by {
        assert {c1.w "w"} shouldRaise (NoSuchMethod) mentioning "confidential"
    }
}

exit
