
method while(cond) do(aBlock) {
    print "Non-repeating while loop"
    if (cond.apply) then {
        aBlock.apply
    }
    print "Done"
}

while {1 < 0} do {
    print "Up is down"
}
while {0 < 1} do {
    print "Up is still up"
}
