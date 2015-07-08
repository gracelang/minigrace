def singluarObject = object {
    def foo is public = "OK"
    method bar { "OK" }
}

object {
    inherits singluarObject
    print(foo)
    print(bar)
}

