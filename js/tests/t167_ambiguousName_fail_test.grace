import "gUnit" as gu

method assert(cond) {
    print "top-level assert {cond}"
}

method b { "this is b" }

def o = object {
    inherit gu.assertion
    method countOneAssertion { print "o's assert" }
    method d { "this is d" }

    assert( 1 == 1 )
}

print(b)
assert(true)
print(o.d)
print "done"
