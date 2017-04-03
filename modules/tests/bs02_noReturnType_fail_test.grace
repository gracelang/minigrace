dialect "beginningStudent"

def size = 10
var count:Number := 1
while {count ≤ size} do {
    printAndIncrement
}

method printAndIncrement {
    // prints count and increments it
    // returns nothing
    print(count)
    count := count + 1
}
