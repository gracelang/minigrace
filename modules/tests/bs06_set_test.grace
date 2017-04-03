dialect "beginningStudent"
print "prelude is {prelude}"
print "outer is {outer}"

var tl:Set[[Number]] := set
print(tl)

tl := set(1)
print(tl)

var t2:Set := set(1, 2)

print(t2)

var t3:Set := set(1, 2, 3)
print(t3)

var t4:Set := set(1, 2, 3, 4)
print(t4)

var t5:Set := set(1, 2, 3, 4, 5)
print(t5)
print(t4.isSubset(t5))

var t6:Set := set(1, 2, 3, 4, 5, 6)
print(t6)
print(t5.isSubset(t6))
