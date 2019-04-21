def words = ["one", "two", "three", "four"] >> sequence


def enumerate = object {
    method <<⟦T⟧ (source:Collection⟦T⟧) {
        // returns a sequence of bindings, in which the keys are
        // numbers indicating the order in which source is delivered.
        var counter := 0
        collections.lazySequenceOver(source) mappedBy { each →
            counter := counter + 1
            counter::each
        }
    }
}

def sort = object {
    method <<⟦T⟧ (source:Collection⟦T⟧) {
        // returns a sorted version of source
        list.withAll(source).sort
    }
}

class sortBy⟦T⟧(ordering:Function2⟦T, T, Number⟧) {
    method << (source:Collection⟦T⟧) {
        // returns a sorted version of source
        list.withAll(source).sortBy(ordering)
    }
}

class tagWith⟦K⟧(tags:Enumerable⟦K⟧) {
    method <<⟦T⟧(source:Collection⟦T⟧) {
        // returns a sequence of bindings, in which the keys are
        // taken from tags, and the values from source
        var tagStream := tags.iterator
        collections.lazySequenceOver(source) mappedBy { each →
            if (tagStream.hasNext) then {
                tagStream.next::each
            } else {
                RequestError.raise "not enough tags"
            }
        }
    }
}

class reject⟦T⟧(condition:Predicate1⟦T⟧) {
    method << (source:Collection⟦T⟧) {
        collections.lazySequenceOver(source) filteredBy { each → 
            condition.apply(each).not 
        }
    }
}

class select⟦T⟧(condition:Predicate1⟦T⟧) {
    method << (source:Collection⟦T⟧) {
        collections.lazySequenceOver(source) filteredBy { each → 
            condition.apply(each)
        }
    }
}


print(words.asDictionary)
print(words >> sort)
print(words >> enumerate >> dictionary)
print((1..10) >> enumerate >> list)
print(words >> tagWith⟦Number⟧ (range.from 4 downTo 1))
print(words >> reject {w → w.contains "o"})
print(words >> select {w → w.contains "o"})
print((1..10) >> sortBy⟦Number⟧ { a, b → b - a })
