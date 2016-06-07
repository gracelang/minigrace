dialect "minitest"
import "mirrors" as mirror
import "stringMap" as stringMap

method hook { abstract }

class stringSet {
    inherits stringMap.new
    
    method add(key) {
        put(key, true)
    }
    
    method asString {
        var s := "set\{"
        var first := true
        keysDo { each ->
            if (first) then {
                s := s ++ each
                first := false
            } else {
                s := s ++ ", " ++ each
            }
        }
        s ++ "\}"
    }
}

class newPrelude {
    inherits prelude.methods
    
    method compareProtocols {
        def mSelf = mirror.reflect(self).methodNames
        def mPrelude = mirror.reflect(prelude.methods).methodNames
        (mPrelude ++ set ["hook", "compareProtocols", "doIt"]) == mSelf
    }

    
    method hook {
        abstract
    }
    
    method doIt { hook }
}

testSuite {
    test "abstact" by {
        assert {newPrelude.hook} shouldRaise (SubobjectResponsibility)
    }
    
    test "prelude inheritance" by {
        assert (newPrelude.compareProtocols)
    }
    
    test "stringSet get" by {
        def s = stringSet
        s.add "foo"
        assert (s.get "foo")
        assert (s.get "bar" ifAbsent {"absent"}) shouldBe "absent"
    }
    
    test "stringSet contains" by {
        def s = stringSet
        s.add "foo"
        assert (s.contains "foo")
        deny (s.contains "bar")
    }
    
    test "string set asString" by {
        def s = stringSet
        s.add "foo"
        s.add "valueOf"
        def sas = s.asString
        assert ((sas == "set\{foo, valueOf\}") || (sas == "set\{valueOf, foo}"))
            description "sas = {sas}"
    }
    
    test "emptySet asString" by {
        assert(stringSet.asString) shouldBe "set\{}"
    }
}
