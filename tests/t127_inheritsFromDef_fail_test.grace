def singluarObject = object {
    def foo is public = "OK"
    method bar { "OK" }
}

object {
    inherit singluarObject
    print(foo)
    print(bar)
}

