dialect "beginningStudent"

print "dialect is {outer}"

var tl:List[[Number]] := list.empty
print(tl)

tl := list(1)
print(tl)

tl := outer.list(1, 2, 3, 4, 5, 6)
print(tl)

tl := list(1, 2, 3, 4, 5, 6)
print(tl)
