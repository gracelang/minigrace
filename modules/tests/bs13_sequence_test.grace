dialect "beginningStudent"
print "dialect is {outer}"

var t1:Sequence[[Number]] := sequence
print(t1)
def es = emptySequence
print (t1 == es)

t1 := sequence(1)
print(t1)

t1 := prelude.sequence.withAll(1..6)
print(t1)

def t2 = emptySequence ++ range.from 6 downTo 1
print(t2)

print(set.addAll(t1))
print(set.addAll(t1).removeAll(t2))
