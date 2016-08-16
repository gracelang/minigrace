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

def o = sub
print (o.baz)
print (o.bad)
