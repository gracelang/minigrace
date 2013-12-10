var a := object {
    method &(other) {
        print("Called & with {other}")
        return "wrong!"
    }
    method prefix& {
        print "Called prefix&"
    }
    method asString {
        "right object"
    }
}

a & 1
var b := a
& a
print("got {b}")
var c := a
    & a
print("not {c}")
