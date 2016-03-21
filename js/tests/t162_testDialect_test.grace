dialect "minitest"

method hook { abstract }

testSuite {

    test "request abstract method" by {
        assert {hook} shouldRaise (SubobjectResponsibility)
    }
    
    def v1 = Singleton.new
    def v2 = Singleton.new
    
    test "singleton equals itself" by {
        assert (v1 == v1) description "singleton ≠ itself!"
    }

    test "singleton matches itself" by {
        assert (v1.match(v1)) description "singleton doesn't match itself!"
    }
    
    test "singleton not equal other" by {
        deny (v1 == v2) description "singleton == other!"
    }

    test "singleton doesn't match itself" by {
        deny (v1.match(v2)) description "singleton matches other!"
    }

    def n1 = Singleton.named "n1"
    def n2 = Singleton.named "n2"
    
    test "named singleton equals itself" by {
        assert (n1 == n1) description "singleton ≠ itself!"
    }

    test "named singleton matches itself" by {
        assert (n1.match(n1)) description "named singleton doesn't match itself!"
    }
    
    test "named singleton not equal other" by {
        deny (n1 == n2) description "named singleton == other!"
    }

    test "named singleton doesn't match itself" by {
        deny (n1.match(n2)) description "named singleton matches other!"
    }
    
    test "named singleton asString" by {
        assert (n1.asString) shouldBe "n1"
    }

    test "named singleton asDebugString" by {
        assert (n1.asDebugString) shouldBe "n1"
    }
    
    test "Do-While once" by {
        var v := 4
        def accum = emptyList
        do { accum.addLast(v) ; v := v - 1 } while { false }
        assert (accum) shouldBe (list [4])
    }   

    test "Do-While many" by {
        var v := 4
        def accum = emptyList
        do { accum.addLast(v) ; v := v - 1 } while { accum.size < 4}
        assert (accum) shouldBe (list [4, 3, 2, 1])
    }

}