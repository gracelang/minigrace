method x {
    object {
        def foo = "OK"
    }
}

object {
    inherits x
    print(foo)
}

