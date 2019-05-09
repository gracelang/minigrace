import "pipeTools" as pt

def words = ["one", "two", "three", "four"] >> sequence⟦String⟧


print "sort the sequence alphabetically: {words >> pt.sort}"
print "turn it into a dictionary: {words >> pt.enumerate >> dictionary}"
print "label with numbers from 1: {(50..60) >> pt.enumerate >> list}"
print "label with numbers from 4 down to 1: {words >> pt.tagWith (range.from 4 downTo 1)}"
print "reject words contining a 't': {words >> pt.reject {w → w.contains "t"}}"
print "select words containing an 'o' {words >> pt.select {w → w.contains "o"}}"
print "sort backwards: {(1..10) >> pt.sortBy { a, b → b - a }}"

// or, with types:
print "sort the sequence alphabetically: {words >> pt.sort⟦String⟧}"
print "turn it into a dictionary: {words >> pt.enumerate >> dictionary⟦Number, String⟧}"
print "label with numbers from 1: {(50..60) >> pt.enumerate >> list⟦Binding⟦Number,Number⟧⟧}"
print "label with numbers from 4 down to 1: {words >> pt.tagWith⟦Number,String⟧ (range.from 4 downTo 1)}"
print "reject words contining a 't': {words >> pt.reject⟦String⟧ {w → w.contains "t"}}"
print "select words containing an 'o' {words >> pt.select⟦String⟧ {w → w.contains "o"}}"
print "sort backwards: {(1..10) >> pt.sortBy⟦Number⟧ { a, b → b - a }}"
