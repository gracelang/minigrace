
class enumerate⟦T⟧ {
    method << (source:Collection⟦T⟧) {
        // returns a sequence of bindings, in which the values are drawn from
        // source, and the keys are numbers indicating the order in which 
        // source is delivered.
        var counter := 0
        collections.lazySequenceOver(source) mappedBy { each:T →
            counter := counter + 1
            counter::each
        }
    }
}

class sort⟦T⟧ {
    method << (source:Collection⟦T⟧) {
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

class tagWith⟦K,T⟧(tags:Enumerable⟦K⟧) {
    method << (source:Collection⟦T⟧) {
        // returns a sequence of bindings, in which the keys are
        // taken from tags, and the values from source
        var tagStream := tags.iterator
        collections.lazySequenceOver(source) mappedBy { each:T →
            if (tagStream.hasNext) then {
                def tag:K = tagStream.next
                tag::each
            } else {
                RequestError.raise "not enough tags"
            }
        }
    }
}

class reject⟦T⟧(condition:Predicate1⟦T⟧) {
    method << (source:Collection⟦T⟧) {
        collections.lazySequenceOver(source) filteredBy { each:T → 
            condition.apply(each).not 
        }
    }
}

class select⟦T⟧(condition:Predicate1⟦T⟧) {
    method << (source:Collection⟦T⟧) {
        collections.lazySequenceOver(source) filteredBy { each:T → 
            condition.apply(each)
        }
    }
}
