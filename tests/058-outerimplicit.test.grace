def x = object {
    method a {
        2
    }
    method c {
        print "Hello"
    }
    method b {
        object {
            method foo {
                c
            }
        }
    }
    method d {
        object {
            method test1 {
                a
            }
            method test2 {
                b.foo
            }
            method test3 {
                object {
                    method bar {
                        c
                    }
                }
            }
        }
    }
}

print(x.d.test1)
x.d.test2
x.d.test3.bar
