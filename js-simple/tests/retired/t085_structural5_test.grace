
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
    var data is public := 3
    var next is public := finished
}
var l2 : OuterList := object {
    def data : Number is public = 5
    def next : (InnerList | Finished) is public = finished
}
print(l1.data)
l1 := l2
l2 := l1
print(l1.data)
