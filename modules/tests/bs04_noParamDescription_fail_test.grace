dialect "beginningStudent"

def size = 10
var count:Number := 1
while {count ≤ size} do {
    printAndIncrementBy 2
}

method printAndIncrementBy(inc:Number) -> Done {
    // prints count and bumps it
    print(count)
    count := count + inc
}
