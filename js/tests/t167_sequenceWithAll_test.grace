def empty = sequence.withAll(list.empty)
print "1 list: empty = {empty}"
def oneTwo = sequence.withAll(list [1,2])
print "1 list: oneTwo = {oneTwo}"
def oneToFour = sequence.withAll(collections.lazyConcatenation(list [1,2], list [3,4]))
print "2 lists: oneToFour = {oneToFour}"
def oneTo12 = sequence.withAll((1..2) ++ (3..4) ++ (5..8) ++ (9..12))
print "4 lists: oneTo12 = {oneTo12}"
