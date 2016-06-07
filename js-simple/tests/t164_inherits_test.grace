import "gUnit" as gu
inherits gu.assertion

method countOneAssertion {
    print "one assertion in module"
}

method b { "this is b" }

def o = object {
    inherits gu.assertion
    method countOneAssertion {
        print "one assertion in o"
    }
    method d { "this is d" }

    self.assert( 1 == 1 )
}

print(b)
assert(true)
print(o.d)
print "done"
