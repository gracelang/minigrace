import "collections" as coll

var listDeprecatedWarning := true
var setDeprecatedWarning := true
var mapDeprecatedWarning := true

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

class map.new {
    inherits coll.aDictionary.empty
    if (mapDeprecatedWarning) then {
        mapDeprecatedWarning := false
        print "mgcollections.map is deprecated; use collections.aDictionary instead."
    }
    method get(k) { self.at(k) }
    method put(k, v) { self.at(k)put(v) }
    method contains(k) { self.containsKey(k) }
}
