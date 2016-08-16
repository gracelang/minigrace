method x {
    object {
        def foo = "OK"
    }
}

object {
    inherit x
    print(foo)
}

