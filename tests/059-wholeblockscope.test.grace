class X.new {
    method a {
        Y.new("Hello")
    }
}
class Y.new(v') {
    def v = v'
    method asString {
        "Y({v})"
    }
}

print(X.new.a)
