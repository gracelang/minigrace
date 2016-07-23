class foo {
    var i := 0
    def counter = object {
        method inc { i := i + 1 } }
    method add { counter.inc }
    method val { i }
}
def bar = foo 
bar.add
print "the value of the counter is {bar.val}, should be 1"


def o = object {
    var f := 8
    f := 10
    method printF {
        print "f is {f}, should be 10"
    }
}

o.printF
