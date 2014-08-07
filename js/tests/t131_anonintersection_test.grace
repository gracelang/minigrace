type A = {
    bar -> String
}

type B = A & type {
    quux -> Number
}

method btaker(b : B) {
    print "{b.bar}{b.quux}"
}

btaker(object {
    def bar = "YE"
    def quux = 5
})
