import "gUnit" as gu
inherits gu.assertion

method b { "this is b" }

def o = object {
    inherits gu.assertion
    method d { "this is d" }

    assert( 1 == 1 )
}

print(b)
assert(true)
print(o.d)
print "done"
