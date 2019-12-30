dialect "standard"
// Implements a prefix tree, also known as a trie.  Maintains a prefix-closed
// set of sequences.
//
// If [a, b, c] is already in the trie, it is considered to also contain
// all prefixes, i.e., [], [a] and [a, b], even though it has size 1
// The empty prefix tree contains the empty sequence.

import "fastDict" as fd

def end = object {
    inherit singleton "end"
    method size { 1 }
    method at(_)ifAbsent(anAction) { anAction.apply }
    method add(entry) index (ix) { prefixTree.add(entry) index(ix) }
}

class prefixTree {
    // answers an empty prefix tree
    def dict = fd.dictionary.empty
    
    method add (entry:Collection) {
        add (entry) index 1
    }

    method empty { outer.prefixTree }
    method with (entry) { outer.prefixTree.add(entry) }
    method withAll (entries) {
        def result = outer.prefixTree
        entries.do { each -> result.add(each) }
        result
    }
    
    method add(entry) index (ix) {
        if (ix > entry.size) then { return }
        def first = entry.at(ix)
        var value := dict.at(first) ifAbsent {
            if (entry.size == ix) then { end } else { prefixTree }
        }
        if (entry.size > ix) then {
            value := value.add (entry) index (ix + 1)
        }
        dict.at(first) put(value)
        self
    }
    
    method contains (entry:Collection) → Boolean {
        var currentDict := dict
        entry.keysAndValuesDo { ix, next →
            currentDict := currentDict.at(next) ifAbsent { return false }
        }
        true
    }
    
    method size {
        var count := 0
        dict.valuesDo { v → count := count + v.size }
        count
    }
    
    method at(key) ifAbsent (action) {
        dict.at(key) ifAbsent (action) 
    }
}
