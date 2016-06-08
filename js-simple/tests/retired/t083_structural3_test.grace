type A = {
    +(other : Number) -> A
    asString -> String
}

var a : A := 3
a := a + 5
print(a)
