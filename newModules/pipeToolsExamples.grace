import "pipeTools" as pt

def words = ["one", "two", "three", "four"] >> sequence⟦String⟧

print "sort the sequence alphabetically: {words >> pt.sort}"
print "turn it into a dictionary: {words >> pt.enumerate >> dictionary}"
print "label with numbers from 1: {(50..60) >> pt.enumerate >> list}"
print "label with numbers from 4 down to 1: {words >> pt.tagWith (4.downTo 1)}"
print "reject words containing a 't': {words >> pt.reject {w → w.contains "t"}}"
print "select words containing an 'o' {words >> pt.select {w → w.contains "o"}}"
print "sort backwards: {(1..10) >> pt.sortBy { a, b → b - a }}"
print "sum: {(1..10) >> pt.sum}"
print "average: {(1..10) >> pt.average}"
print "summary of 1..48: {(1..48) >> pt.summary}"
print "summary of 1..49: {(1..49) >> pt.summary}"
print "summary of 1..50: {(1..50) >> pt.summary}"
print "summary of 1..51: {(1..51) >> pt.summary}"
print "summary of 1..52: {(1..52) >> pt.summary}"


