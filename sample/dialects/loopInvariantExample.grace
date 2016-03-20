dialect "loopInvariant"

// Try changing 3 to -3 to break the invariant

def data = list [2, 3, 4, 5]

var sum : Number := 0
for (data) invariant { sum >= 0 } do { item : Number ->
    sum := sum + item
}
print "Sum: {sum}"
