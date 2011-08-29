
type Done = {
    isDone -> Boolean
}
type InnerList = {
    data -> Number
    next -> OuterList | Done
}
type OuterList = {
    data -> Number
    next -> InnerList | Done
}

def done : Done = object {
    def isDone : Boolean = true
}

var l1  := object {
    var data := 3
    var next := done
}
var l2 : OuterList := object {
    def data : Number = 5
    def next : InnerList | Done = done
}
print(l1.data)
l1 := l2
l2 := l1
print(l1.data)
