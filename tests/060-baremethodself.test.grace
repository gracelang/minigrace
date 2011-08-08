def b = object {
    var pp := 0
}
def a = object {
    def x = 3
    var y := 4
    var z := 0
    method test {
        y := y + 1
        print(x)
        print(y)
    }
}

a.test
