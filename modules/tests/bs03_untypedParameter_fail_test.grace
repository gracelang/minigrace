dialect "beginningStudent"

def size = 10
var count:Number := 1
while {count ≤ size} do {
    printAndIncrementBy 2
}

method printAndIncrementBy(inc) -> Done {
    // prints count and increments it
    print(count)
    count := count + inc
}
