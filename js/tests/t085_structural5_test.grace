
type Finished = {
    isFinished -> Boolean
}
type InnerList = {
    data -> Number
    next -> OuterList | Finished
}
type OuterList = {
    data -> Number
    next -> InnerList | Finished
}

def finished : Finished = object {
    def isFinished : Boolean = true
}

var l1  := object {
    var data := 3
    var next := finished
}
var l2 : OuterList := object {
    def data : Number = 5
    def next : InnerList | Finished = finished
}
print(l1.data)
l1 := l2
l2 := l1
print(l1.data)
