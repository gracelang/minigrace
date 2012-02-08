def a = object {
    var x := 1
    x := x + 2
    print(x)
    method foo {
        print(x)
    }
    def b = object {
        outer.foo
    }
}

