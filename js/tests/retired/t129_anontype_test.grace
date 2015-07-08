method foo(x : type { bar -> String }) {
    print(x.bar)
}

def y = object {
    def bar is public = "OK"
}

foo(y)
