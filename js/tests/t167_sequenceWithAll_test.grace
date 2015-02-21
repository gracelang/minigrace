def empty = sequence.withAll(list.empty)
print "1 list: empty = {empty}"
def oneTwo = sequence.withAll(list.with(1,2))
print "1 list: oneTwo = {oneTwo}"
def oneToFour = sequence.withAll(list.with(1,2), list.with(3,4))
print "2 lists: oneToFour = {oneToFour}"
def oneTo12 = sequence.withAll(list.with(1,2), list.with(3,4), 5..8, sequence.with(9,10,11,12))
print "4 lists: oneTo12 = {oneTo12}"
