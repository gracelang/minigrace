var a := object {
    def x = "test"
}
var b := object {
    def x = "test"
}
var c := object {
    var x := "test"
}
var d := object {
    def x = "test"
    def y = "hello"
}
var e := object {
    def x = "test"
    def z = "hello"
}
var f := object {
    def x = "hello"
}
var g := object {
    def x = "test"
    method z { "hello" }
}
method hmaker {
    def word = "hello"
    object {
        def x = "test"
        method z { word }
    }
}
var i := object {
    def x = "test"
    method z { g ; "hello" }
}
var j := object {
    inherits i
}

print "Should be three trues and then all false"
print(a==b)
print(c==c)
print(j==i)
print(a==c)
print(c==a)
print(a==d)
print(d==a)
print(d==e)
print(a==f)
print(e==g)
print(g==e)
print(hmaker==hmaker)
