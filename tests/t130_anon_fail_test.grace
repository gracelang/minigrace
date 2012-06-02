method foo(x : { bar -> String }) {
    print(x.bar)
}

def y = object {
    def bar = 1
}

foo(y)
