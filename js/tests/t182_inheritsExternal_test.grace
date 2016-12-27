dialect "minitest"
import "mirrors" as mirror
import "stringMap" as stringMap

method hook { abstract }

class stringSet {
    inherit stringMap.new
    
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
    inherit prelude.methods
    
    method compareProtocols {
        def mSelf = mirror.reflect(self).methodNames --
                    self.set ["hook", "compareProtocols", "doIt"]
        def mPrelude = mirror.reflect(_prelude).methodNames
        if (mPrelude == mSelf) then {
            true
        } else {
            def preludeExtras = mPrelude -- mSelf
            def selfExtras = mSelf -- mPrelude
            if (preludeExtras.isEmpty.not) then {
                print "prelude contains additional methods {self.list(preludeExtras).sort}\n"
            }
            if (selfExtras.isEmpty.not) then {
                print "newPrelude contains additional methods {self.list(selfExtras).sort}\n"
            }
            false
        }
    }

    
    method hook {
        self.abstract
    }
    
    method doIt { hook }
}

testSuite {
    test "abstact" by {
        assert {newPrelude.hook} shouldRaise (SubobjectResponsibility)
    }
    
    test "prelude inheritance" by {
        def mNewPrelude = mirror.reflect(newPrelude).methodNames
        assert (mNewPrelude.contains "set(_)")
            description "method 'set(_)' missing from newPrelude"
        assert (mNewPrelude.contains "compareProtocols")
            description "method 'compareProtocols' missing from newPrelude"
        assert (mNewPrelude.contains "Sequence")
            description "type 'Sequence' missing from newPrelude"
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
