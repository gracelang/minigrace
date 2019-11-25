dialect "beginningStudent"
print "dialect is {outer}"

var t1:Sequence[[Number]] := sequence.empty
print(t1)
def es = sequence.empty
print (t1 == es)

t1 := sequence(1)
print(t1)

t1 := sequence.withAll(1..6)
print(t1)

def t2 = sequence.empty ++ range.from 6 downTo 1
print(t2)

print((set.withAll(t1) >> sequence).sorted)
print(set.withAll(t1).removeAll(t2))
