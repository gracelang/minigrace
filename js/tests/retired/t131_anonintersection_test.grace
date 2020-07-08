type A = interface {
    bar -> String
}

type B = A & interface {
    quux -> Number
}

method btaker(b : B) {
    print "{b.bar}{b.quux}"
}

btaker(object {
    def bar is public = "YE"
    method quux { 5 }
})
