def x = object {
    method a {
        2
    }
    method b {
        object {
            method foo {
                outer.c
            }
        }
    }
    method c {
        print "Hello"
    }
    method d {
        object {
            method test1 {
                outer.a
            }
            method test2 {
                outer.b.foo
            }
        }
    }
}

print(x.d.test1)
x.d.test2
