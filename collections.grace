dialect "none"
import "intrinsic" as intrinsic
import "basicTypesBundle" as basicTypesBundle
import "equalityBundle" as equalityBundle

use intrinsic.controlStructures
use basicTypesBundle.open
use intrinsic.annotations
use equalityBundle.open

def intrinsicConstants = intrinsic.constants
def primitiveArray = intrinsicConstants.primitiveArray
def Exception = intrinsicConstants.Exception

def BoundsError is public = intrinsicConstants.BoundsError
def ProgrammingError is public = intrinsicConstants.ProgrammingError
def IteratorExhausted is public = ProgrammingError.refine "IteratorExhausted"
def SubobjectResponsibility is public = ProgrammingError.refine "SubobjectResponsibility"
def NoSuchObject is public = ProgrammingError.refine "NoSuchObject"
def RequestError is public = ProgrammingError.refine "RequestError"
def ConcurrentModification is public = ProgrammingError.refine "ConcurrentModification"
def SizeUnknown is public = Exception.refine "SizeUnknown"

type List⟦T⟧ = Sequenceable⟦T⟧ & interface {
    add(x: T) -> List⟦T⟧
    addAll(xs: Collection⟦T⟧) -> List⟦T⟧
    addFirst(x: T) -> List⟦T⟧
    addAllFirst(xs: Collection⟦T⟧) -> List⟦T⟧
    addLast(x: T) -> List⟦T⟧    // same as add
    at(ix:Number) put(v:T) -> List⟦T⟧
    clear -> List⟦T⟧
    removeFirst -> T
    removeAt(n: Number) -> T
    removeLast -> T
    remove(v:T)
    remove(v:T) ifAbsent(action:Procedure0)
    removeAll(vs: Collection⟦T⟧)
    removeAll(vs: Collection⟦T⟧) ifAbsent(action:Procedure0)
    insert(elt:T)at(n:Number) -> List⟦T⟧
    pop -> T
    ++(o: List⟦T⟧) -> List⟦T⟧
    copy -> List⟦T⟧
    sort -> List⟦T⟧
    sortBy(sortBlock:Function2⟦T,T,Number⟧) -> List⟦T⟧
    reverse -> List⟦T⟧
    reversed -> List⟦T⟧
}

type Set⟦T⟧ = Collection⟦T⟧ & interface {
    size -> Number
    add(x:T) -> SelfType
    addAll(elements: Collection⟦T⟧) -> SelfType
    remove(x: T) -> Set⟦T⟧
    remove(x: T) ifAbsent(block: Procedure0) -> Set⟦T⟧
    clear -> Set⟦T⟧
    anyone -> T
    find(booleanBlock: Predicate1⟦T⟧) ifNone(notFoundBlock: Function0⟦T⟧) -> T
    copy -> Set⟦T⟧
    contains(elem:T) -> Boolean
    ** (other:Set⟦T⟧) -> Set⟦T⟧
    -- (other:Set⟦T⟧) -> Set⟦T⟧
    ++ (other:Set⟦T⟧) -> Set⟦T⟧
    isSubset(s2: Set⟦T⟧) -> Boolean
    isSuperset(s2: Collection⟦T⟧) -> Boolean
    removeAll(elems: Collection⟦T⟧)
    removeAll(elems: Collection⟦T⟧)ifAbsent(action:Procedure0) -> Set⟦T⟧
}

type Dictionary⟦K,T⟧ = Collection⟦T⟧ & interface {
    size -> Number
    containsKey(k:K) -> Boolean
    containsValue(v:T) -> Boolean
    contains(elem:T) -> Boolean
    at(key:K)ifAbsent(action:Function0⟦Unknown⟧) -> Unknown
    at(key:K)put(value:T) -> Dictionary⟦K,T⟧
    at(k:K) -> T
    removeAllKeys(keys: Collection⟦K⟧) -> Dictionary⟦K,T⟧
    removeKey(key:K) -> Dictionary⟦K,T⟧
    removeAllValues(values: Collection⟦T⟧) -> Dictionary⟦K,T⟧
    removeValue(v:T) -> Dictionary⟦K,T⟧
    clear -> Dictionary⟦K,T⟧
    keys -> Enumerable⟦K⟧
    values -> Enumerable⟦T⟧
    bindings -> Enumerable⟦Binding⟦K,T⟧⟧
    keysAndValuesDo(action:Procedure2⟦K,T⟧) -> Done
    keysDo(action:Procedure1⟦K⟧) -> Done
    valuesDo(action:Procedure1⟦T⟧) -> Done
    == (other:Object) -> Boolean
    copy -> Dictionary⟦K,T⟧
    ++ (other:Dictionary⟦K, T⟧) -> Dictionary⟦K, T⟧
    -- (other:Dictionary⟦K, T⟧) -> Dictionary⟦K, T⟧
}

type DictionaryFactory⟦K,T⟧ = interface {
    empty -> Dictionary⟦K,T⟧
    // an empty dictionary

    with(b:Binding⟦K,T⟧) -> Dictionary⟦K,T⟧
    // a dictionary containing single mapping from b.key to b.value

    withAll(bs:Binding⟦K,T⟧) -> Dictionary⟦K,T⟧
    // a dictionary containing a mapping for each binding in bs

    <<(bs:Binding⟦K,T⟧) -> Dictionary⟦K,T⟧
    // identical to withAll(_)
}

trait iteratorOver⟦T,R⟧ (sourceIterator: Iterator⟦T⟧)
        mappedBy (function:Function1⟦T, R⟧) -> Iterator⟦R⟧ {
    method asString { "a mapped iterator over {sourceIterator}" }
    method hasNext { sourceIterator.hasNext }
    method next { function.apply(sourceIterator.next) }
}

class lazySequenceOver⟦T,R⟧ (source: Collection⟦T⟧)
        mappedBy (function:Function1⟦T, R⟧) -> Enumerable⟦R⟧ {
    use enumerable⟦T⟧
    class iterator {
        use iteratorOver⟦T,R⟧ (source.iterator) mappedBy (function)
    }
    method size { source.size }
    method isEmpty { source.isEmpty }
    method asDebugString { "a lazy sequence mapping over {source}" }
}

method iteratorOver⟦T⟧ (sourceIterator: Iterator⟦T⟧)
        filteredBy(predicate:Predicate1⟦T⟧) -> Iterator⟦T⟧ {
    // returns a trait that supplies the iteration protocol

    var cache
    var cacheLoaded := false
    object {
        use intrinsic.controlStructures
        method asString { "a filtered iterator over {sourceIterator}" }
        method hasNext {
            // To determine if this iterator has a next element, we have to find
            // an acceptable element; this is then cached, for the use of next
            // If I return true, the cache is loaded.
            if (cacheLoaded) then { return true }
            while { sourceIterator.hasNext } do {
                def outerNext = sourceIterator.next
                def isAcceptable = predicate.apply(outerNext)
                if (isAcceptable) then {
                    cacheLoaded := true
                    cache := outerNext
                    return true
                }
            }
            return false
        }
        method next {
            if (hasNext) then {
                cacheLoaded := false
                return cache
            } else {
                IteratorExhausted.raise "no more elements in {self}"
            }
        }
    }
}

class lazySequenceOver⟦T⟧ (source: Collection⟦T⟧)
        filteredBy(predicate:Predicate1⟦T⟧) -> Enumerable⟦T⟧ {
    use enumerable⟦T⟧
    class iterator {
        use iteratorOver⟦T⟧ (source.iterator) filteredBy (predicate)
    }
    method asDebugString { "a lazy sequence filtering {source}" }
}

class iteratorConcat⟦T⟧(left:Iterator⟦T⟧, right:Iterator⟦T⟧) {
    method next {
        if (left.hasNext) then {
            left.next
        } else {
            right.next
        }
    }
    method hasNext {
        if (left.hasNext) then { return true }
        return right.hasNext
    }
    method asDebugString { "iteratorConcat of {left} and {right}" }
    method asString { "an iterator over a concatenation" }
}
class lazyConcatenation⟦T⟧(left, right) -> Enumerable⟦T⟧{
    use enumerable⟦T⟧
    method iterator {
        iteratorConcat(left.iterator, right.iterator)
    }
    method asDebugString { "lazy concatenation of {left} and {right}" }
    method size { left.size + right.size }  // may raise SizeUnknown
}

trait collection⟦T⟧ {
    use intrinsic.controlStructures
    method asString { "a collection trait" }
    method sizeIfUnknown(action) {
        // override if size is known
        action.apply
    }
    method size {
        sizeIfUnknown {
            SizeUnknown.raise "collection {asDebugString} does not know its size"
        }
    }
    method do(action) {   // can be overridden for efficiency
        def iter = self.iterator
        while {iter.hasNext} do { action.apply(iter.next) }
    }
    method contains(element) {
        do { each -> if (each == element) then { return true } }
        return false
    }
    method anySatisfy(booleanBlock) {
        do { each ->
            if (booleanBlock.apply(each)) then { return true }
        }
        false
    }
    method allSatisfy(booleanBlock) {
        do { each ->
            if (booleanBlock.apply(each).not) then { return false }
        }
        true
    }
    method iterator is required
    method isEmpty {
        // override if size is known
        iterator.hasNext.not
    }
    method first {
        def iter = iterator
        if (iter.hasNext) then {
            iter.next
        } else {
            BoundsError.raise "no first element in {self}"
        }
    }
    method do(block1) separatedBy(block0) {
        var firstTime := true
        do { each ->
            if (firstTime) then {
                firstTime := false
            } else {
                block0.apply
            }
            block1.apply(each)
        }
        return self
    }
    method fold(blk)startingWith(initial) {
        var result := initial
        do {each ->
            result := blk.apply(result, each)
        }
        return result
    }
    method map⟦R⟧(block1:Function1⟦T, R⟧) -> Enumerable⟦R⟧ {
        lazySequenceOver(self) mappedBy(block1)
    }
    method filter(selectionCondition:Predicate1⟦T⟧) -> Enumerable⟦T⟧ {
        lazySequenceOver(self) filteredBy(selectionCondition)
    }
    method >>(target) { target << self }
    method <<(source) { self ++ source }

}   // end of trait collection

trait enumerable⟦T⟧ {
    use collection⟦T⟧
    method iterator is required
    method ==(other) {
        isEqual (self) toCollection (other)
    }
    method ≠ (other) { (self == other).not }
    method do(block1:Procedure1⟦T⟧) -> Done {
        def selfIterator = self.iterator
        while {selfIterator.hasNext} do {
            block1.apply(selfIterator.next)
        }
    }
    method keysAndValuesDo(block2:Procedure2⟦Number,T⟧) -> Done {
        var ix := 0
        def selfIterator = self.iterator
        while {selfIterator.hasNext} do {
            ix := ix + 1
            block2.apply(ix, selfIterator.next)
        }
    }
    method values -> Collection⟦T⟧ {
        self
    }
    method fold⟦R⟧(block2)startingWith(initial) -> R {
        var res := initial
        def selfIterator = self.iterator
        while { selfIterator.hasNext } do {
            res := block2.apply(res, selfIterator.next)
        }
        return res
    }
    method ++ (other:Collection⟦T⟧) -> Enumerable⟦T⟧ {
        lazyConcatenation(self, other)
    }
    method sortedBy(sortBlock:Function2) -> List⟦T⟧ {
        list.withAll(self).sortBy(sortBlock)
    }
    method sorted -> List⟦T⟧ {
        list.withAll(self).sort
    }
    method asString {
        var s := "["
        do { each -> s := s ++ each.asString } separatedBy { s := s ++ ", " }
        s ++ "]"
    }
}   // end of trait enumerable

trait indexable⟦T⟧ {
    use collection⟦T⟧
    method at(index) is required
    method size is required
    method sizeIfUnknown(action) { size }
    method isEmpty { size == 0 }
    method keysAndValuesDo(action:Procedure2⟦Number,T⟧) -> Done {
        def curSize = size
        var i := 1
        while {i <= curSize} do {
            action.apply(i, self.at(i))
            i := i + 1
        }
    }
    method first { at(1) }
    method second { at(2) }
    method third { at(3) }
    method fourth { at(4) }
    method fifth { at(5) }
    method last { at(size) }
    method indices { range.from 1 to(size) }
    method indexOf(sought:T)  {
        indexOf(sought) ifAbsent { NoSuchObject.raise "collection does not contain {sought}" }
    }
    method indexOf(sought:T) ifAbsent(action:Function0⟦Unknown⟧)  {
        keysAndValuesDo { ix, v ->
            if (v == sought) then { return ix }
        }
        action.apply
    }
    method ==(other) {
        isEqual (self) toCollection (other)
    }
    method hash {
        self.fold { acc, each ->
            hashAndCombine(acc, each)
        } startingWith ([].hash)
    }
    method ≠ (other) { (self == other).not }
}   // end of trait indexable

method max(a,b) is confidential {       // copied from standard prelude
    if (a > b) then { a } else { b }
}

method emptyJSMap is confidential {
    native "js" code ‹return new Map();›
}

class sequence⟦T⟧ {
    method asString { "the sequence factory" }
    method empty { [] }   // faster than caching an emptySequence
    method with(x:T) { [] ++ [x] }
    method withAll(arg: Collection⟦T⟧) { [] ++ arg }
    method << (source) { [] ++ source }
}

method sequence⟦T⟧(xs) { [] ++ xs }

type MinimalyIterable = interface {
    iterator -> Iterator
}

method isEqual(left) toCollection(right) {
    if (MinimalyIterable.matches(right)) then {
        def leftIter = left.iterator
        def rightIter = right.iterator
        while {leftIter.hasNext && rightIter.hasNext} do {
            if (leftIter.next != rightIter.next) then {
                return false
            }
        }
        leftIter.hasNext == rightIter.hasNext
    } else {
        false
    }
}


method hashAndCombine(aHash, anObj) {
    def objHash = anObj.hash
    native "js" code ‹return new GraceNum((var_aHash._value * 2) ^ var_objHash._value);
›       //  ^ is bitwsie XOR
}

class list⟦T⟧ {
    method asString { "the list factory" }
    method empty -> List⟦T⟧ { list [] }
    method with(x:T)  -> List⟦T⟧ { list [x] }
    method withAll(xs) -> List⟦T⟧ { list (xs) }
    method << (source) { list (source) }
}

class list⟦T⟧ (a: Collection⟦T⟧) -> List⟦T⟧ {
    use indexable⟦T⟧

    var mods := 0
    native "js" code ‹this._value = [];
        this.className = 'list';›
    a.do { each ->
        native "js" code ‹this._value.push(var_each);›
    }
    method size {
        native "js" code ‹return new GraceNum(this._value.length);›
    }
    method at(n) {
        native "js" code ‹var idx = var_n._value;
            var result = this._value[idx-1];
            if (result !== undefined) return result;     // fast path
            // Now investigate the cause of the problem:
            checkBounds(this, var_n);›
    }

    method at(n) ifAbsent(action) {
        native "js" code ‹var idx = var_n._value;
            var result = this._value[idx-1];
            if (result !== undefined) return result;     // fast path
            return request(var_action, "apply", [0]);›
    }

    method at(n)put(x) {
        mods := mods + 1
        native "js" code ‹var  ix = var_n._value;
            checkBounds(this, var_n, this._value.length + 1);
                // we allow n to be one greater than the current size
            this._value[ix-1] = var_x;
            return this;›
    }

    method add(x:T) {
        mods := mods + 1
        native "js" code ‹this._value.push(var_x);
            return this;›
    }
    method addAll(l) {
        mods := mods + 1
        l.do { each ->
            native "js" code ‹this._value.push(var_each);›
        }
        self
    }
    method push(x) {        // backward compatibility
        mods := mods + 1
        native "js" code ‹this._value.push(var_x);
            return this;›
    }
    method addLast(x) {
        mods := mods + 1
        native "js" code ‹this._value.push(var_x);
            return this;›
    }
    method removeLast {
        mods := mods + 1
        if (size == 0) then {
            BoundsError.raise "you can't remove an element from an empty list"
        }
        native "js" code ‹return this._value.pop();›
    }
    method addAllFirst(l) {
        mods := mods + 1
        var ix := l.size;
        while {ix > 0} do {
            def each = l.at(ix)
            ix := ix - 1
            native "js" code ‹this._value.unshift(var_each);›
        }
        self
    }
    method addFirst(elem) {
        mods := mods + 1
        native "js" code ‹this._value.unshift(var_elem);›
        self
    }
    method clear {
        mods := mods + 1
        native "js" code ‹this._value = [];›
        self
    }

    method removeFirst {
        removeAt(1)
    }
    method removeAt(n) {
        mods := mods + 1
        def removed = self.at(n)    // does the bounds check
        native "js" code ‹this._value.splice(var_n._value - 1, 1);›
        return removed
    }

    method remove(elt:T) {
        def ix = self.indexOf(elt) ifAbsent {
            NoSuchObject.raise "list does not contain {elt}"
        }
        removeAt(ix)
        self
    }

    method remove(elt:T) ifAbsent(action:Procedure0) {
        def ix = self.indexOf(elt) ifAbsent {
            action.apply
            return self
        }
        removeAt(ix)
        self
    }

    method removeAll(vs: Collection⟦T⟧) {
        removeAll(vs) ifAbsent { NoSuchObject.raise "list does not contain object" }
        self
    }
    method removeAll(vs: Collection⟦T⟧) ifAbsent(action:Procedure0)  {
        vs.do { each ->
            def ix = indexOf(each) ifAbsent { 0 }
            if (ix ≠ 0) then {
                removeAt(ix)
            } else {
                action.apply
            }
        }
        self
    }
    method insert(elt:T) at(n) {
        mods := mods + 1
        native "js" code ‹checkBounds(this, var_n, this._value.length + 1);
            this._value.splice(var_n._value - 1, 0, var_elt);›
        self
    }
    method pop { removeLast }
    method reversed {
        def result = list.empty
        do { each -> result.addFirst(each) }
        result
    }
    method reverse {
        mods := mods + 1
        var hiIx := size
        var loIx := 1
        while {loIx < hiIx} do {
            def hiVal = self.at(hiIx)
            self.at(hiIx) put (self.at(loIx))
            self.at(loIx) put (hiVal)
            hiIx := hiIx - 1
            loIx := loIx + 1
        }
        self
    }
    method ++ (o:Collection⟦T⟧) {
        def l = list.withAll(self)
        l.addAll(o)
    }
    method asString {
        var s := "list ["
        do { each -> s := s ++ each.asString }
              separatedBy { s := s ++ ", " }
        s ++ "]"
    }
    method asDebugString {
        var s := "list ["
        do { each -> s := s ++ each.asDebugString }
              separatedBy { s := s ++ ", " }
        s ++ "]"
    }
    method do(block1) {
        def iMods = mods
        var i := 1
        while {i ≤ size} do {
            if (iMods ≠ mods) then {
                ConcurrentModification.raise (asDebugString)
            }
            block1.apply(self.at(i))
            i := i + 1
        }
    }
    method iterator {
        object {
            def iMods = mods
            var idx := 1
            method asDebugString { "{asString}⟪{idx}⟫" }
            method asString { "aListIterator" }
            method hasNext { idx <= size }
            method next {
                if (iMods != mods) then {
                    ConcurrentModification.raise (asDebugString)
                }
                if (idx > size) then { IteratorExhausted.raise "on list" }
                def ret = at(idx)
                idx := idx + 1
                ret
            }
        }
    }
    method values {
        self
    }
    method keys {
        self.indices
    }
    method sortBy(sortBlock:Function2) {
        mods := mods + 1
        native "js" code ‹var compareFun = function compareFun(a, b) {
                var res = callmethod(var_sortBlock, "apply(2)", [2], a, b);
                if (res.className == "number") return res._value;
                throw new GraceExceptionPacket(TypeErrorObject,
                       new GraceString("sort block in list.sortBy method did not return a number"));
      };
      this._value.sort(compareFun);›
        self
    }
    method sort {
        sortBy { l, r ->
            if (l == r) then {0}
                elseif {l < r} then {-1}
                else {1}
        }
    }
    method sortedBy(sortBlock:Function2) {
        copy.sortBy(sortBlock)
    }
    method sorted {
        copy.sort
    }
    method copy {
        list⟦T⟧ (self)
    }
    method << (source) {
        self.addAll(source)
    }
}   // end of list(_)

def removed = object {
    // Used as a tombstone to mark the location of a removed VALUE.
    // The key, and the key-value binding object, remain in the dictionary
    method asString { "removed" }
    method == (other) { self.isMe(other) }
    method ≠ (other) { self.isMe(other).not }
    method hash { self.myIdentityHash }
}

once class set⟦T⟧ -> CollectionFactory⟦T⟧ {
    // A convenience object that provides conventional access to sets of Ts

    method asString { "the set⟦{T}⟧ factory" }
    method withAll(a: Collection⟦T⟧) { set⟦T⟧ (a) }
    method with(x:T) { set⟦T⟧ [x] }
    method empty { set⟦T⟧ [] }
    method << (source) { set⟦T⟧ (source) }
}

class set⟦T⟧ (initialContents: Collection⟦T⟧) -> Set⟦T⟧ {
    // Answers a fresh set containing the elements in initialConetents

    use collection⟦T⟧
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
        self
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
    method asStringWithRemovals {
        "mapSet {size}/{allocated} \{" ++ native "js" code ‹
        let t = this.data.table;
        result = "";
        for (let h of t.keys()) {
            result = result + h + "->" + request(t.get(h), "asString")._value + " ";
        }
        result = new GraceString(result + "}");
        ›
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
        list(self).sort.hash
    }
    method ≠ (other) { (self == other).not }
    method copy {
        set⟦T⟧ (self)
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
    method isSubset(s2: Set⟦T⟧) {
        self.do{ each ->
            if (s2.contains(each).not) then { return false }
        }
        return true
    }

    method isSuperset(s2: Collection⟦T⟧) {
        s2.do{ each ->
            if (self.contains(each).not) then { return false }
        }
        return true
    }
    method << (source) {
        self.addAll(source)
    }
}

type ComparableToDictionary⟦K,T⟧ = interface {
    size -> Number
    at(_:K)ifAbsent(_) -> T
}

once class dictionary⟦K,T⟧ {
    method asString { "the dictionary factory" }
    method empty { dictionary⟦K,T⟧ [] }
    method with(aBinding) { dictionary⟦K,T⟧ [aBinding] }
    method withAll(initial: Collection⟦Binding⟦K,T⟧⟧) { dictionary⟦K,T⟧ (initial) }
    method << (source:Collection⟦Binding⟦K,T⟧⟧) { self.withAll(source) }
}

class dictionary⟦K, T⟧ (initialBindings: Collection⟦Binding⟦K,T⟧⟧) {

    use collection⟦T⟧
    var mods is readable := 0
    var numBindings := 0
    var table := emptyJSMap

    initialBindings.do { b:Binding -> self.add(b) }

    method size { numBindings }

    method at (k) put (v) {
        mods := mods + 1
        native "js" code ‹var hc = request(var_k, "hash", [0])._value;
            while (true) {
                let b = this.data.table.get(hc)
                if (! b) break;  // get answers undedined if the key is not present
                if (Grace_isTrue(request(b.key, "==(1)", [1], var_k))) {
                    if (var_removed === b.value) {
                        this.data.numBindings = new GraceNum(this.data.numBindings._value + 1);
                    }   // otherwise, we are overwriting an existing binding
                    b.value = var_v;
                    return this;
                }
                hc++;
            }
            this.data.table.set(hc, {key: var_k, value: var_v});
            this.data.numBindings = new GraceNum(this.data.numBindings._value + 1);
            return this;
        ›
    }
    method add(aBinding) {
        self.at (aBinding.key) put (aBinding.value)
    }
    method addAll(bindings) {
        bindings.do{ each -> add(each) }
        self    // for chaining
    }
    method rehash is confidential {
        // makes a new map, without any of the removed entries
        mods := mods + 1
        numBindings := 0;
        native "js" code ‹
        let oldT = this.data.table;
        this.data.table = new Map();
        for (let p of oldT.values()) {
            if (var_removed !== p.value) {
                request(this, 'at(1)put(1)', [2], p.key, p.value);
            }
        }
        ›
        self
    }
    method at(k) {
        native "js" code ‹
        var hc = request(var_k, "hash", [0])._value;
        while (true) {
            let b = this.data.table.get(hc);
            if (! b) break;
            if (Grace_isTrue(request(b.key, "==(1)", [1], var_k))) {
                if (var_removed === b.value) break;
                return b.value;
            }
            hc++;
        }›
        NoSuchObject.raise "dictionary does not contain entry with key {k}"
    }
    method at(k) ifAbsent(action) {
        native "js" code ‹
        var hc = request(var_k, "hash", [0])._value;
        while (true) {
            let b = this.data.table.get(hc);
            if (! b) break;
            if (Grace_isTrue(request(b.key, "==(1)", [1], var_k))) {
                if (var_removed === b.value) break;
                return b.value;
            }
            hc++;
        }›
        action.apply
    }
    method containsKey(k) {
        native "js" code ‹
        var hc = request(var_k, "hash", [0])._value;
        while (true) {
            let b = this.data.table.get(hc);
            if (! b) break;
            if (Grace_isTrue(request(b.key, "==(1)", [1], var_k))) {
                return (var_removed === b.value ? GraceFalse : GraceTrue);
            }
            hc++;
        };
        return GraceFalse;›
    }
    method removeAllKeys(keys) {
        mods := mods + 1
        keys.do { k → removeKey(k) }
        self
    }
    method removeKey(k) {
        mods := mods + 1
        native "js" code ‹
        var hc = request(var_k, "hash", [0])._value;
        while (true) {
            let b = this.data.table.get(hc);
            if (! b) break;
            if (Grace_isTrue(request(b.key, "==(1)", [1], var_k))) {
                if (var_removed === b.value) break;
                b.value = var_removed;
                this.data.numBindings = new GraceNum(this.data.numBindings._value - 1);
                return this;
            }
            hc++;
        };›
        NoSuchObject.raise "dictionary does not contain entry with key {k}"
    }
    method removeKey(k) ifAbsent (action) {
        native "js" code ‹
        var hc = request(var_k, "hash", [0])._value;
        while (true) {
            let b = this.data.table.get(hc);
            if (! b) break;
            if (Grace_isTrue(request(b.key, "==(1)", [1], var_k))) {
                if (var_removed === b.value) break;
                b.value = var_removed;
                this.data.numBindings = new GraceNum(this.data.numBindings._value - 1);
                this.data.mods = new GraceNum(this.data.mods._value + 1)
                if (this.data.table.size > (2 * this.data.numBindings._value))
                    selfRequest(this, 'rehash');
                return this;
            }
            hc++;
        };›
        action.apply
    }
    method removeAllValues(removals) {
        // remove all bindings with any of the values in removals
        mods := mods + 1
        native "js" code ‹
        let t = this.data.table
        for (let b of t.values()) {
            if (Grace_isTrue(request(var_removals, 'contains(1)', [1], b.value))) {
                b.value = var_removed;
                this.data.numBindings = new GraceNum(this.data.numBindings._value - 1);
            }
        };
        if (this.data.table.size > (2 * this.data.numBindings._value))
            selfRequest(this, 'rehash');
        ›
        self
    }
    method removeValue(v) {
        // remove all bindings with value v
        mods := mods + 1
        def initialNumBindings = numBindings
        native "js" code ‹
        let t = this.data.table
        for (let b of t.values()) {
            if (Grace_isTrue(request(var_v, '==(1)', [1], b.value))) {
                b.value = var_removed;
                this.data.numBindings = new GraceNum(this.data.numBindings._value - 1);
            }
        };›
        if (numBindings == initialNumBindings) then {
            NoSuchObject.raise "dictionary does not contain any entries with value {v}"
        }
        self
    }
    method removeValue(v) ifAbsent (action) {
        // remove all bindings with value v
        mods := mods + 1
        def initialNumBindings = numBindings
        native "js" code ‹
        let t = this.data.table
        for (let b of t.values()) {
            if (Grace_isTrue(request(var_v, '==(1)', [1], b.value))) {
                b.value = var_removed;
                this.data.numBindings = new GraceNum(this.data.numBindings._value - 1);
            }
        };›
        if (numBindings == initialNumBindings) then {
            action.apply
        }
        self
    }
    method clear {
        native "js" code ‹this.data.table.clear();›
        numBindings := 0
        mods := mods + 1
        self
    }
    method containsValue(v) {
        self.valuesDo{ each ->
            if (v == each) then { return true }
        }
        false
    }
    method contains(v) { containsValue(v) }
    method asString {
        // do()separatedBy won't work, because it iterates over values,
        // and we need an iterator over bindings.
        native "js" code ‹
        var s = "dictionary [";
        var first = true;
        let t = this.data.table;
        for (let p of t.values()) {
            if (var_removed !== p.value) {
                if (first)
                    first = false;
                else
                    s += ", ";
                s += request(p.key, "asString", [0])._value;
                s += "::";
                s += request(p.value, "asString", [0])._value;
            }
        }
        s += "]";
        return new GraceString(s);
    ›
    }
    method asDebugString {
        native "js" code ‹
        const t = this.data.table;
        const size = this.data.numBindings._value;
        const cap = t.size;
        var s = "dict " + size + "/" + cap + "⟬";
        var first = true;
        for (let p of t.values()) {
            if (first)
                first = false;
            else
                s += ", ";
            s += request(p.key, "asDebugString", [0])._value;
            s += "::";
            s += request(p.value, "asDebugString", [0])._value;
        }
        s += "⟭";
        return new GraceString(s);
    ›
    }
    method keys  {
        def sourceDictionary = self
        object {
            use enumerable⟦K⟧
            class iterator {
                def sourceIterator = sourceDictionary.bindingsIterator
                method hasNext { sourceIterator.hasNext }
                method next { sourceIterator.next.key }
                method asString {
                    "an iterator over keys of {sourceDictionary}"
                }
            }
            def size is public = sourceDictionary.size
            method asString {
                "a lazy sequence over keys of {sourceDictionary}"
            }
        }
    }
    method values {
        def sourceDictionary = self
        object {
            use enumerable⟦T⟧
            class iterator {
                def sourceIterator = sourceDictionary.bindingsIterator
                // should be request on outer
                method hasNext { sourceIterator.hasNext }
                method next { sourceIterator.next.value }
                method asString {
                    "an iterator over values of {sourceDictionary}"
                }
            }
            def size is public = sourceDictionary.size
            method asString {
                "a lazy sequence over values of {sourceDictionary}"
            }
        }
    }
    method bindings {
        def sourceDictionary = self
        object {
            use enumerable⟦T⟧
            method iterator { sourceDictionary.bindingsIterator }
            // should be request on outer
            def size is public = sourceDictionary.size
            method asString {
                "a lazy sequence over bindings of {sourceDictionary}"
            }
        }
    }
    method iterator { values.iterator }
    class bindingsIterator {
        // this should be confidential, but can't be until `outer` is fixed.
        def iMods = mods
        var count := 1
        def subjectDictionary = outer;
        native "js" code ‹this.data.allTheKeys = this.data.subjectDictionary.data.table.keys();
        ›
        method hasNext { size >= count }
        method next {
            if (iMods != mods) then {
                ConcurrentModification.raise (outer.asString)
            }
            if (size < count) then { IteratorExhausted.raise "over {outer.asString}" }
            native "js" code ‹
            let binding = request(var_$module, 'binding', [0]);
            while (true) {
                let iResult = this.data.allTheKeys.next();
                if (iResult.done) break;
                let nextKey = iResult.value
                let b = this.data.subjectDictionary.data.table.get(nextKey);
                    if (var_removed !== b.value) {
                        this.data.count = new GraceNum(this.data.count._value + 1);
                        return request(binding, 'key(1)value(1)',  [1,1], b.key, b.value);
                    }
            }
            ›
            // This exception should never be raised, because the (size < count) guard
            // before the native code means that iResult.done will never occur
            IteratorExhausted.raise "(JSIterator) over {outer.asString}"
        }
    }
    method keysAndValuesDo(block2) {
        native "js" code ‹
        let t = this.data.table;
        let iMods = this.data.mods._value;
        for (let p of t.values()) {
            if (var_removed !== p.value) {
                if (iMods !== this.data.mods._value)
                    request(var_ConcurrentModification, "raise(1)", [1], request(this, "asDebugString", [0]));
                request(var_block2, 'apply(2)', [2], p.key, p.value);
            }
        }
        ›
    }
    method keysDo(block1) {
        native "js" code ‹
        let t = this.data.table;
        let iMods = this.data.mods._value;
        for (let p of t.values()) {
            if (var_removed !== p.value) {
                if (iMods !== this.data.mods._value)
                    request(var_ConcurrentModification, "raise(1)", [1], request(this, "asDebugString", [0]));
                request(var_block1, 'apply(1)', [1], p.key);
            }
        }
        ›
    }
    method valuesDo(block1) {
        native "js" code ‹
        let t = this.data.table;
        let iMods = this.data.mods._value;
        for (let p of t.values()) {
            if (var_removed != p.value) {
                if (iMods !== this.data.mods._value)
                    request(var_ConcurrentModification, "raise(1)", [1], request(this, "asDebugString", [0]));
                request(var_block1, 'apply(1)', [1], p.value);
            }
        }
        ›
    }
    method do(block1) { valuesDo(block1) }

    method ==(other) {
        match (other) case { o:ComparableToDictionary⟦K,T⟧ ->
            if (self.size != o.size) then {return false}
            self.keysAndValuesDo { k, v ->
                if (o.at(k)ifAbsent{return false} != v) then {
                    return false
                }
            }
            return true
        } else {
            return false
        }
    }
    method ≠ (other) { (self == other).not }

    method copy {
        def newCopy = dictionary⟦K,T⟧ []
        self.keysAndValuesDo{ k, v ->
            newCopy.at(k) put(v)
        }
        newCopy
    }

    method ++ (other:Collection⟦T⟧) {
        // answers a new dictionary containing all my keys and the keys of other;
        // if other contains one of my keys, other's value overrides mine
        def newDict = self.copy
        other.keysAndValuesDo {k, v ->
            newDict.at(k) put(v)
        }
        newDict
    }

    method -- (other:Collection⟦T⟧) {
        // answers a new dictionary like me but excluding the keys of other
        def newDict = dictionary []
        keysAndValuesDo { k, v ->
            if (! other.containsKey(k)) then {
                newDict.at(k) put(v)
            }
        }
        return newDict
    }

    method >>(target) is override {
        target << self.bindings
    }

    method <<(source) is override {
        self.addAll(source)
    }
}

def range is public = object {
    method asString { "the range factory" }
    method from(lower)to(upper) {
        //  returns Sequence⟦Number⟧
        match (lower)
          case { _:Number ->
        } else {
            RequestError.raise ("lower bound {lower}" ++
                " in range.from({lower})to({upper}) is not an integer")
        }
        def start = lower.truncated
        if (start != lower) then {
            RequestError.raise ("lower bound {lower}" ++
                " in range.from({lower})to({upper}) is not an integer") }

        match (upper)
          case {_:Number ->
        } else {
            RequestError.raise ("upper bound {upper}" ++
                " in range.from({lower})to({upper}) is not an integer")
        }
        def stop = upper.truncated
        if (stop != upper) then {
            RequestError.raise ("upper bound {upper}" ++
                " in range.from()to() is not an integer")
        }

        uncheckedFrom (lower) to (upper)
    }

    method uncheckedFrom (lower) to (upper) {
        //  returns Sequence⟦Number⟧
        object {
            use indexable⟦Number⟧
            def start = lower
            def stop = upper
            def size is public =
                if ((upper-lower+1) < 0) then { 0 } else {upper-lower+1}

            method iterator -> Iterator {
                object {
                    var val := start
                    method hasNext { val <= stop }
                    method next {
                        if (val > stop) then {
                            IteratorExhausted.raise "over {outer.asString}"
                        }
                        val := val + 1
                        return (val - 1)
                    }
                    method asString { "iterator over {outer.asString} at {val}" }
                }
            }
            method at(ix:Number) {
                if (!(ix <= self.size)) then {
                    BoundsError.raise "requested range.at({ix}), but upper bound is {size}"
                }
                if (!(ix >= 1)) then {
                    BoundsError.raise "requested range.at({ix}), but lower bound is 1"
                }
                return start + (ix - 1)
            }
            method at(ix:Number)ifAbsent(action) {
                if ((ix >= 1) && (ix <= self.size)) then {
                    start + (ix - 1)
                } else {
                    action.apply
                }
            }
            method contains(elem) -> Boolean {
                try {
                    def intElem = elem.truncated
                    if (intElem != elem) then {return false}
                    if (intElem < start) then {return false}
                    if (intElem > stop) then {return false}
                } catch { ex:Exception -> return false }
                return true
            }
            method do(block1) {
                var val := start
                while {val <= stop} do {
                    block1.apply(val)
                    val := val + 1
                }
            }
            method keysAndValuesDo(block2) {
                var key := 1
                var val := start
                while {val <= stop} do {
                    block2.apply(key, val)
                    key := key + 1
                    val := val + 1
                }
            }
            method reversed {
                from(upper)downTo(lower)
            }
            method ++ (other:Collection⟦Number⟧) {
                sequence.withAll(lazyConcatenation(self, other))
            }
            method ==(other) {
                isEqual (self) toCollection (other)
            }
            method hash {
                // must be compatable with hash on sequences
                var result := 0x5E0EACE;     // sort of like SEQENCE
                do { each ->
                    result := hashAndCombine(result, each)
                }
                result
            }
            method :: (obj) { binding.key (self) value (obj) }
            method ≠ (other) { (self == other).not }
            method sorted { self }

            method sortedBy(c) { list.withAll(self).sortBy(c) }

            method keys { 1..self.size }

            method values { self }

            method asString -> String{
                "range.from({lower})to({upper})"
            }
        }
    }
    method from(upper)downTo(lower) -> Sequence⟦Number⟧ {
        object {
            use indexable⟦Number⟧
            match (upper)
              case {_:Number ->
            } else {
                RequestError.raise ("upper bound {upper}" ++
                    " in range.from({upper})downTo({lower}) is not an integer") }
            def start = upper.truncated
            if (start != upper) then {
                RequestError.raise ("upper bound {upper}" ++
                    " in range.from({upper})downTo({lower}) is not an integer")
            }
            match (lower)
              case {_:Number ->
            } else {
                RequestError.raise ("lower bound {lower}" ++
                    " in range.from({upper})downTo({lower}) is not an integer")
            }
            def stop = lower.truncated
            if (stop != lower) then {
                RequestError.raise ("lower bound {lower}" ++
                    " in range.from({upper})downTo({lower}) is not an integer")
            }
            def size is public =
                if ((upper-lower+1) < 0) then { 0 } else {upper-lower+1}
            method iterator {
                object {
                    var val := start
                    method hasNext { val >= stop }
                    method next {
                        if (val < stop) then { IteratorExhausted.raise "over {outer.asString}" }
                        val := val - 1
                        return (val + 1)
                    }
                    method asString { "an iterator over {outer.asString} at {val}" }
                }
            }
            method at(ix:Number) {
                if (!(ix <= self.size)) then {
                    BoundsError.raise "requested range.at({ix}) but upper bound is {size}"
                }
                if (!(ix >= 1)) then {
                    BoundsError.raise "requested range.at({ix}) but lower bound is 1"
                }
                return start - (ix - 1)
            }
            method at(ix:Number)ifAbsent(action) {
                if ((ix >= 1) && (ix <= self.size)) then {
                    start - (ix - 1)
                } else {
                    action.apply
                }
            }
            method contains(elem) -> Boolean {
                try {
                    def intElem = elem.truncated
                    if (intElem != elem) then {return false}
                    if (intElem > start) then {return false}
                    if (intElem < stop) then {return false}
                } catch { ex:Exception -> return false }
                return true
            }
            method do(block1) {
                var val := start
                while {val >= stop} do {
                    block1.apply(val)
                    val := val - 1
                }
            }
            method keysAndValuesDo(block2) {
                var key := 1
                var val := start
                while {val >= stop} do {
                    block2.apply(key, val)
                    key := key + 1
                    val := val - 1
                }
            }
            method reversed {
                from(lower)to(upper)
            }
            method ++ (other:Collection⟦Number⟧) {
                sequence.withAll(lazyConcatenation(self, other))
            }
            method ==(other) {
                isEqual (self) toCollection (other)
            }
            method hash {
                // must be compatable with hash on sequences
                var result := 0x5E0EACE;     // sort of like SEQENCE
                do { each ->
                    result := hashAndCombine(result, each)
                }
                result
            }
            method :: (obj) { binding.key (self) value (obj) }
            method ≠ (other) { (self == other).not }
            method sorted { self.reversed }

            method sortedBy(c) { list.withAll(self).sortBy(c) }

            method keys { 1..self.size }

            method values { self }

            method asString -> String {
                "range.from {upper} downTo {lower}"
            }
        }
    }
}
