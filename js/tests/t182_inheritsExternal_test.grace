dialect "minitest"
import "mirrors" as mirror
import "unixFilePath" as filePath

method hook { abstract }

class subFilePath {
    inherit filePath.filePath
    
    method direct {
        directory
    }
}

class newPrelude {
    inherit prelude.methods
    
    method compareProtocols {
        def mSelf = mirror.reflect(self).methodNames --
                    self.set ["hook", "compareProtocols", "doIt(_)"]
        def mPrelude = mirror.reflect(_prelude).methodNames
        if (mPrelude == mSelf) then {
            true
        } else {
            def preludeExtras = mPrelude -- mSelf
            def selfExtras = mSelf -- mPrelude
            if (preludeExtras.isEmpty.not) then {
                print "prelude contains additional methods {self.list.withAll(preludeExtras).sort}\n"
            }
            if (selfExtras.isEmpty.not) then {
                print "newPrelude contains additional methods {self.list.withAll(selfExtras).sort}\n"
            }
            false
        }
    }
    
    method hook {
        self.abstract
    }
    
    method doIt(a) { hook }
}

testSuite {
    test "abstact" by {
        assert {newPrelude.hook} shouldRaise (SubobjectResponsibility)
    }
    
    test "prelude inheritance contains set(_)" by {
        def mNewPrelude = mirror.reflect(newPrelude).methodNames
        assert (mNewPrelude.contains "set(_)")
            description "method 'set(_)' missing from newPrelude"
    }
    test "prelude inheritance contains compareProtocols" by {
        def mNewPrelude = mirror.reflect(newPrelude).methodNames
        assert (mNewPrelude.contains "compareProtocols")
            description "method 'compareProtocols' missing from newPrelude"
    }
    test "prelude inheritance contains Sequence" by {
        def mNewPrelude = mirror.reflect(newPrelude).methodNames
        assert (mNewPrelude.contains "Sequence")
            description "type 'Sequence' missing from newPrelude"
    }

    test "firpath direct" by {
        def f = subFilePath.setDirectory "root/a" .setBase "file" .setExtension "grace"
        assert (f.asString) shouldBe "root/a/file.grace"
        assert (f.direct) shouldBe "root/a/"
    }
}
