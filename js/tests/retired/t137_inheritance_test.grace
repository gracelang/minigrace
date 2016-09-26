method parent {
    print "creating a new parent"
    object {
        print "initializing parent"
        def x is readable = foo * 2
        method foo { 1 }
        method bar { 0 }
    }
}

method child {
    print "creating a new child"
    object {
        inherit parent
        print "initializing child"
        method bar { 3 }
        def x is readable = 6
    }
}

print "creating c"
def c = object {
    inherit child
    print "initializing c"
}

print "simple object construction"
print "    {parent.bar} should be 0"
print "    {parent.foo} should be 1"
print "    {parent.x} should be 2"

print "\nsimple inheritance"
print "    {child.bar} should be 3"
print "    {child.foo} should be 1"
print "    {child.x} should be 6"

print "\nnull inheritance"
print "    {c.bar} should be 3"
print "    {c.foo} should be 1"
print "    {c.x} should be 6"
