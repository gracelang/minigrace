class foo{
    var i := 1
    def adder = object {
        method add {
            i := i + 1
            print (i)
        }
    }
    method add {
        adder.add
    }
}
def bar = foo
bar.add
