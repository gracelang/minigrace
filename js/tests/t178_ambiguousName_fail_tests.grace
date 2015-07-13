import "gUnit" as gu
inherits gu.assertion.trait

method b { "this is b" }

def o = object {
    inherits gu.assertion.trait
    method d { "this is d" }

    assert( 1 == 1 )
}

print(b)
assert(true)
print(o.d)
print "done"
