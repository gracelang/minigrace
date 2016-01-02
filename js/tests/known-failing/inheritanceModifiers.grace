class sc {
    method foo { "foo" }
    method bar { "bar" }
}

class sub {
    inherits sc
        alias foo2 = foo
        exclude bar
        
    method baz { foo ++ foo2 }
    method bad {
        try {
            foo ++ bar
        } catch { ex:NoSuchMethod -> 
            print "raised exception {ex}"
        }
    }
}

def o = sub
print (o.baz)
print (o.bad)
