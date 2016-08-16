class sc {
    method foo { "foo" }
    method bar { "bar" }
}

class sub {
    inherit sc
        alias foo2 = foo
        exclude bar
        
    method baz { foo ++ " " ++ foo2 }
    method bad {
        try {
            foo ++ bar
        } catch { ex:NoSuchMethod -> 
            "bad raised exception NoSuchMethod"
        }
    }
}
method try_foo2 {
    try { o.foo2 }
      catch { ex:NoSuchMethod ->
            print "Attempt to request confidential alias foo2\n{ex}"
            return
    } catch { ex:Exception ->
            print "unexpected exception {ex}"
            return
    }
    print "error: foo2 should be confidential"
}


def o = sub
print (o.baz)
print (o.bad)
try_foo2
