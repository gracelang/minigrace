#pragma ClassMethods
import "collections" as coll

// Stub version of mgcollections.  Works with the C backend, but not the
// JS backend, where outer.bindings (lines 41 & 49) seems to answer undefined

var listDeprecatedWarning := true
var setDeprecatedWarning := true
var mapDeprecatedWarning := true

method showDeprecation {
    listDeprecatedWarning := true
    setDeprecatedWarning := true
    mapDeprecatedWarning := true
}

method hideDeprecation {
    listDeprecatedWarning := false
    setDeprecatedWarning := false
    mapDeprecatedWarning := false
}

method list {
    if (listDeprecatedWarning) then {
        listDeprecatedWarning := false
        print "mgcollections.list is deprecated; use collections.aList instead."
    }
    return coll.aList
}

method set {
    if (setDeprecatedWarning) then {
        setDeprecatedWarning := false
        print "mgcollections.set is deprecated; use collections.aSet instead."
    }
    return coll.aSet
}

class map {
    inherits coll.aCollectionFactory.trait
    class withAll(bs) {
        inherits coll.aDictionary.withAll(bs)
        if (mapDeprecatedWarning) then {
            mapDeprecatedWarning := false
            print "mgcollections.map is deprecated; use collections.aDictionary instead."
        }
        method get(k) { self.at(k) }
        method put(k, v) { self.at(k)put(v) }
        method contains(k) { self.containsKey(k) }
        method keys {
            object {
                inherits coll.anIterator.trait
                def outerIterator = outer.bindings
                method havemore { outerIterator.havemore }
                method next { outerIterator.next.key }
            }
        }
        method values {
            object {
                inherits coll.anIterator.trait
                def outerIterator = outer.bindings
                method havemore { outerIterator.havemore }
                method next { outerIterator.next.value }
            }
        }
        method iter { self.keys }
    }
}
