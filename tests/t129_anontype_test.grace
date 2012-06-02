method foo(x : { bar -> String }) {
    print(x.bar)
}

def y = object {
    def bar = "OK"
}

foo(y)
