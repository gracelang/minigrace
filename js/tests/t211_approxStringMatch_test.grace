dialect "minitest"
import "errormessages" as em

numberOfErrorsToRerun := 1

testSuiteNamed "EDP" with {
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

testSuiteNamed "ApproxMatch" with {
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

