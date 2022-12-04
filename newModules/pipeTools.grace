import "collections" as collections

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
        sequence.withAll(source).sorted
    }
}

class sortBy⟦T⟧(ordering:Function2⟦T, T, Number⟧) {
    method << (source:Collection⟦T⟧) {
        // returns a sorted version of source
        sequence.withAll(source).sortedBy(ordering)
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
    method << (source:Collection⟦T⟧) → Collection⟦T⟧ {
        collections.lazySequenceOver(source) filteredBy { each:T → 
            condition.apply(each).not 
        }
    }
}

class select⟦T⟧(condition:Predicate1⟦T⟧) {
    method << (source:Collection⟦T⟧) → Collection⟦T⟧ {
        collections.lazySequenceOver(source) filteredBy { each:T → 
            condition.apply(each)
        }
    }
}

class sum {
    method << (source:Collection⟦Number⟧) → Number {
        var total := 0
        source.do { each:Number → total := total + each }
        total
    }
}

class average {
    method << (source:Collection⟦Number⟧) → Number {
        var total := 0
        var count := 0
        source.do { each:Number → 
            total := total + each
            count := count + 1
        }
        total / count
    }
}

type Summary = interface {
    min → Number
    lowerQ → Number
    median → Number
    upperQ → Number
    max → Number
}

class summary {
    method << (source:Collection⟦Number⟧) → Summary {
        def n = source.size
        def c = source.sorted
        object {
            def lowerQ is public = Q(1)
            def median is public = Q(2)
            def upperQ is public = Q(3)
            method min {c.first}
            method max {c.last}
            method Q(q) {
                def ix = (n * q) / 4
                if (ix.isInteger) then {
                    (c.at(ix) + c.at(ix + 1)) / 2
                } else {
                    c.at(ix.ceiling)
                }
            }
            method asString { "min={min}; Q₁={lowerQ}; Q₂={median}; Q₃={upperQ}; max={max}" }
        }
    }
}
