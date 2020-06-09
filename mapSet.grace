dialect "none"
import "collections" as collections
import "intrinsic" as intrinsic
import "basicTypesBundle" as basicTypesBundle

use intrinsic.annotations
use basicTypesBundle.open

def ConcurrentModification is public =
    intrinsic.constants.ProgrammingError.refine "ConcurrentModification"

type Collection⟦T⟧ = collections.Collection⟦T⟧
def NoSuchObject = collections.NoSuchObject
def IteratorExhausted = collections.IteratorExhausted

method emptyJSMap is confidential {
    native "js" code ‹return new Map();›
}

def removed = object {
    // Used as a tombstone to mark the location of a removed element.
    method asString { "removed" }
    method == (other) { self.isMe(other) }
    method ≠ (other) { self.isMe(other).not }
    method hash { self.myIdentityHash }
}

once class set⟦T⟧ {
    // A convenience object that provides conventional access to sets of Ts

    method asString { "the set⟦{T}⟧ factory" }
    method withAll(a: Collection⟦T⟧) { set⟦T⟧ (a) }
    method with(x:T) { set⟦T⟧ [x] }
    method empty { set⟦T⟧ [] }
    method << (source) { set⟦T⟧ (source) }
}

class set⟦T⟧ (initialContents: Collection⟦T⟧) -> collections.Set⟦T⟧ {
    // Answers a fresh set containing the elements in initialConetents

    use collections.collection⟦T⟧
    var mods := 0
    var table := emptyJSMap
    var size is readable := 0

    initialContents.do { x -> self.add(x) }

    method isEmpty { size == 0 }

    method addAll(elements) {
        elements.do { each -> add(each) }
        self    // for chaining
    }

    method add(x:T) {
        native "js" code ‹var hc = request(var_x, "hash", [0])._value;
            while (true) {
                let entry = this.data.table.get(hc)
                if (! entry) break;  // get answers undefined if hc is not present
                if (var_removed === entry) {
                    var recyclableHashCode = hc;
                } else if (Grace_isTrue(request(entry, "==(1)", [1], var_x))) {
                    return this;  // the element is already present
                }
                hc++;
            }
            if (recyclableHashCode) hc = recyclableHashCode;
            this.data.table.set(hc, var_x);
            this.data.mods = new GraceNum(this.data.mods._value + 1);
            this.data.size = new GraceNum(this.data.size._value + 1);
            return this;
        ›
    }

    method rehash is confidential {
        // makes a new map, without any of the removed entries
        mods := mods + 1
        size := 0;
        native "js" code ‹
        let oldT = this.data.table;
        this.data.table = new Map();
        for (let p of oldT.values()) {
            if (var_removed !== p) {
                request(this, 'add(1)', [1], p);
            }
        }
        ›
        self
    }

    method removeAll(elements) {
        elements.do { x ->
            remove (x) ifAbsent {
                NoSuchObject.raise "set does not contain {x}"
            }
        }
        self    // for chaining
    }
    method removeAll (elements) ifAbsent (action:Procedure0⟦T⟧) {
        elements.do { x ->
            remove(x) ifAbsent (action)
        }
        self    // for chaining
    }
    method clear {
        mods := mods + 1
        native "js" code ‹this.data.table.clear();›
        size := 0
    }

    method remove (elt:T) ifAbsent (action:Procedure0⟦T⟧) {
        native "js" code ‹
        var hc = request(var_elt, "hash", [0])._value;
        while (true) {
            let entry = this.data.table.get(hc);
            if (! entry) break;
            if (Grace_isTrue(request(entry, "==(1)", [1], var_elt))) {
                if (var_removed === entry) break;
                this.data.table.set(hc, var_removed);
                this.data.size = new GraceNum(this.data.size._value - 1);
                this.data.mods = new GraceNum(this.data.mods._value + 1);
                if (this.data.table.size > (2 * this.data.size._value))
                    selfRequest(this, 'rehash');
                return this;
            }
            hc++;
        };›
        action.apply
    }
    method remove(elt:T) {
        remove (elt) ifAbsent {
            NoSuchObject.raise "set does not contain {elt}"
        }
        self    // for chaining
    }

    method contains(x) {
        native "js" code ‹
        var hc = request(var_x, "hash", [0])._value;
        while (true) {
            let entry = this.data.table.get(hc);
            if (! entry) break;
            if (Grace_isTrue(request(entry, "==(1)", [1], var_x))) {
                return GraceTrue;
            }
            hc++;
        };
        return GraceFalse;›
    }
    method find(booleanBlock) ifNone(notFoundBlock) {
        self.do { each ->
            if (booleanBlock.apply(each)) then { return each }
        }
        return notFoundBlock.apply
    }
    method anyone {
        self.do { each -> return each }
        NoSuchObject.raise "no element in set"
    }
    method asString {
        var s := "set ["
        do {each -> s := s ++ each.asString }
            separatedBy { s := s ++ ", " }
        s ++ "]"
    }
    method allocated is confidential {
       native "js" code ‹return new GraceNum(this.data.table.size);›
    }
    method asDebugString {
        var s := "mapSet {size}/{allocated}\{"
        do {each -> s := s ++ each.asDebugString }
            separatedBy { s := s ++ ", " }
        s ++ "\}"
    }
    method do(block1) {
        native "js" code ‹
        let t = this.data.table;
        let iMods = this.data.mods._value;
        for (let p of t.values()) {
            if (var_removed != p) {
                if (iMods !== this.data.mods._value)
                    request(var_ConcurrentModification, "raise(1)", [1], request(this, "asDebugString", [0]));
                request(var_block1, 'apply(1)', [1], p);
            }
        }
        ›
    }
    class iterator {
        def iMods = mods
        var count := 1
        def underlyingSet = outer;
        native "js" code ‹this.data.allTheKeys = this.data.underlyingSet.data.table.keys();›
        method hasNext { size >= count }
        method next {
            if (iMods != mods) then {
                ConcurrentModification.raise (outer.asString)
            }
            if (size < count) then { IteratorExhausted.raise "over {outer.asString}" }
            native "js" code ‹
            while (true) {
                let iResult = this.data.allTheKeys.next();
                if (iResult.done) break;
                let nextKey = iResult.value
                let entry = this.data.underlyingSet.data.table.get(nextKey);
                    if (var_removed !== entry) {
                        this.data.count = new GraceNum(this.data.count._value + 1);
                        return entry;
                    }
            }
            console.warn("broke out of iterator while loop");
            ›
            IteratorExhausted.raise "(JSIterator) over {outer.asString}"
        }
    }

    method ==(other) {
        if (Collection.matches(other)) then {
            if (other.size ≠ self.size) then { return false }
            other.do { each ->
                if (! self.contains(each)) then {
                    return false
                }
            }
            true
        } else {
            false
        }
    }
    method hash {
        // we have to sort our elements to obtain the same hash for two equal sets
        collections.list(self).sort.hash
    }
    method ≠ (other) { (self == other).not }
    method copy {
        outer.set⟦T⟧ (self)
    }
    method ++ (other:Collection⟦T⟧) {
    // set union
        copy.addAll(other)
    }
    method -- (other:Collection⟦T⟧) {
    // set difference
        def result = set.empty
        self.do {v->
            if (!other.contains(v)) then {
                result.add(v)
            }
        }
        result
    }
    method ** (other) {
    // set intersection
        set (filter {each -> other.contains(each)})
    }
    method isSubset(s2: collections.Set⟦T⟧) {
        self.do{ each ->
            if (s2.contains(each).not) then { return false }
        }
        return true
    }

    method isSuperset(s2: collections.Collection⟦T⟧) {
        s2.do{ each ->
            if (self.contains(each).not) then { return false }
        }
        return true
    }
    method << (source) {
        self.addAll(source)
    }
}