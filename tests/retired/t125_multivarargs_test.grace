type X = {
    bar(a, *b)baz(c, *d)
}

var x : X := object {
    method bar(a, *b)baz(c, *d) {
        print(a)
        for (b) do { v ->
            print "In b: {v}"
        }
        print(c)
        for (d) do { v ->
            print "In d: {v}"
        }
    }
}
x.bar("hello", 17, 42)baz("world", -1, 0, 1)

class Foo.with(a, *b)varargs(c, *d) {
    method bar {
        print(a)
        for (b) do { e ->
            print("In b: {e}")
        }
        print(c)
        for (d) do { e ->
            print("In d: {e}")
        }
    }
}
var y := Foo.with("one", "two", "three")varargs("four", "five", "six")
y.bar
