method foo(x : interface { bar -> String }) {
    print(x.bar)
}

def y = object {
    def bar is public = "OK"
}

foo(y)
