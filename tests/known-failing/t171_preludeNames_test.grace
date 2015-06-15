dialect "minitest"
import "mirrors" as m
print "prelude is {prelude}"
print "_prelude is {_prelude}"
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
        assert (list.with(1).remove(1)) shouldBe  (list.empty)
    }
}
