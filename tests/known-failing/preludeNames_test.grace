dialect "minitest"
import "mirrors" as m
print "prelude is '{prelude}', should be 'minitest module'"
print "_prelude is '{_prelude}', , should be 'standardGrace module'"
print "m is {m}"
print "outer is {outer}"
def meths = m.reflect(prelude).methodNames
if (meths.contains "testSuite") then {
    print "prelude is minitest"
} else {
    print "prelude is Standard Prelude"
}
testSuite {        
    test "remove" by {
        assert (list [1].remove 1) shouldBe  (emptyList)
    }
}

