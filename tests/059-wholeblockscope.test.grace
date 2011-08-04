class X {
    method a {
        Y.new("Hello")
    }
}
class Y { v'->
    def v = v'
    method asString {
        "Y({v})"
    }
}

print(X.new.a)
