
method minusOne(x) -> Number {
    return -1
}

print(minusOne(4))

print(object {
        inherit minusOne(4)
        method asString { "I inherit from minusOne" }
})
