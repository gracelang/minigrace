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

tl := outer.list(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)
print(tl)
