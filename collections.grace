dialect "none"
import "intrinsic" as intrinsic
import "basicTypesBundle" as basicTypesBundle

use intrinsic.controlStructures
use basicTypesBundle.open
use intrinsic.annotations

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

method for (xs) do (action) { xs.do (action) }

type SelfType = Unknown     // becuase it's not yet in the language

type CollectionFactory⟦T⟧ = interface {
    empty -> Collection⟦T⟧
        // an empty collection
    with(element:T) -> Collection⟦T⟧
        // a collection containing a single element
    withAll(elements:Collection⟦T⟧) -> Collection⟦T⟧
        // a collection containing elements
    << (source:Collection⟦T⟧) -> Collection⟦T⟧
}

type Collection⟦T⟧ = Object & interface {
    // Note that Collection does not include :: or hash, so collections
    // cannot be used as keys in dictionaries (although Sequences can)

    iterator -> Iterator⟦T⟧
        // the iterator on which I am based
    isEmpty -> Boolean
        // true if I have no elements
    size -> Number
        // my size (the number of elements that I contain);
        // may raise SizeUnknown.
    sizeIfUnknown(action: Function0⟦Number⟧)
        // my size; if not known, then the result of applying action
    == (other) -> Boolean
        // other and self have the same size, and contain the same elements.
    ≠ (other) -> Boolean
        // other and self do not contain the same elements.
    first -> T
        // my first element; raises BoundsError if I have none.
    do (body: Procedure1⟦T⟧) -> Done
        // an internal iterator; applies body to each of my elements
    do (body:Procedure1⟦T⟧) separatedBy(separator:Procedure0) -> Done
        // an internal iterator; applies body to each of my elements, and applies separator in between
    ++ (other: Collection⟦T⟧) -> Collection⟦T⟧
        // returns a new Collection over the concatenation of self and other
    fold (binaryFunction:Function2⟦T, T, T⟧) startingWith(initial:T) -> T
        // the left-associative fold of binaryFunction over self, starting with initial
    map⟦U⟧ (function:Function1⟦T, U⟧) -> Collection⟦U⟧
        // returns a new collection that yields my elements mapped by function
    filter (condition:Predicate1⟦T⟧) -> Collection⟦T⟧
        // returns a new collection that yields those of my elements for which condition holds
    >> (target: Collection⟦T⟧ | CollectionFactory⟦T⟧) -> Collection⟦T⟧
        // returns target << self; used for writing pipelines
    << (source: Collection⟦T⟧) -> Collection⟦T⟧
        // returns self ++ source; used for writing pipelines
}

type Expandable⟦T⟧ = Collection⟦T⟧ & interface {
    add(x: T) -> SelfType
    addAll(xs: Collection⟦T⟧) -> SelfType
}

type Enumerable⟦T⟧ = Collection⟦T⟧ & interface {
    values -> Collection⟦T⟧
    keysAndValuesDo(action:Function2⟦Number,T,Object⟧) -> Done
    sortedBy(comparison:Function2⟦T,T,Number⟧) -> SelfType
    sorted -> SelfType
}

type Sequenceable⟦T⟧ = Enumerable⟦T⟧ & interface {
    size -> Number
    at(n:Number) -> T
    at⟦W⟧(n:Number) ifAbsent(action:Function0⟦W⟧) -> T | W
    indices -> Sequence⟦Number⟧
    keys -> Sequence⟦Number⟧
    second -> T
    third -> T
    fourth -> T
    fifth -> T
    last -> T
    indexOf⟦W⟧(elem:T) ifAbsent(action:Function0⟦W⟧) -> Number | W
    indexOf(elem:T) -> Number
    contains(elem:T) -> Boolean
    reversed -> Sequence⟦T⟧
}

type Sequence⟦T⟧ = EqualityObject & Sequenceable⟦T⟧

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
    includes(booleanBlock: Predicate1⟦T⟧) -> Boolean
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
    removeAllValues(removals: Collection⟦T⟧) -> Dictionary⟦K,T⟧
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

type Iterator⟦T⟧ = interface {
    hasNext -> Boolean
    next -> T
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

// we used to define
// once method emptySequence⟦T⟧ is confidential { ... }
// and use this to define sequence.empty, but it turns out that getting the
// correct emptySequence from the cache is slower than just creating a [ ]

class sequence⟦T⟧ {

    method asString { "the sequence factory" }

    method empty { [] }

    method with(x:T) { [] ++ [x] }

    method withAll(arg: Collection⟦T⟧) { [] ++ arg }

    method << (source) { [] ++ source }

}

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
    
    method empty -> List⟦T⟧ { withAll [] }
    
    method with(x:T)  -> List⟦T⟧ { withAll [x] }

    class withAll(a: Collection⟦T⟧) -> List⟦T⟧ {
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
            native "js" code ‹this._value = [];
                return this;›
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
            for (vs) do { each ->
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
        method contains(element) {
            do { each -> if (each == element) then { return true } }
            return false
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
            outer.withAll(self)
        }
        method << (source) {
            self.addAll(source)
        }
    }   // end of list.withAll

    method << (source) { self.withAll(source) }

}   // end of list class

def unused = object {
    var unused := true
    def key is public = self
    def value is public = self
    method asString { "unused" }
    method == (other) { self.isMe(other) }
    method ≠ (other) { self.isMe(other).not }
    method hash { self.myIdentityHash }
}

def removed = object {
    var removed := true
    def key is public = self
    def value is public = self
    method asString { "removed" }
    method == (other) { self.isMe(other) }
    method ≠ (other) { self.isMe(other).not }
    method hash { self.myIdentityHash }
}

class set⟦T⟧ {

    method asString { "the set factory" }

    method withAll(a: Collection⟦T⟧) -> Set⟦T⟧ {
        def cap = max (a.sizeIfUnknown{2} * 3 + 1, 8)
        def result = ofCapacity (cap)
        a.do { x -> result.add(x) }
        result
    }
    method with(x:T) -> Set⟦T⟧ {
        empty.add(x)
    }
    method empty -> Set⟦T⟧ {
        ofCapacity 8
    }
    
    method << (source) { self.withAll(source) }

    class ofCapacity(cap) -> Set⟦T⟧ is confidential {
        use collection⟦T⟧
        var mods := 0
        var inner := primitiveArray.new(cap)
        var size is readable := 0
        (0..(cap - 1)).do { i ->
            inner.at (i) put (unused)
        }

        method isEmpty { size == 0 }

        method addAll(elements) {
            mods := mods + 1
            for (elements) do { x ->
                if (! contains(x)) then {
                    def t = findPositionForAdd(x)
                    inner.at(t)put(x)
                    size := size + 1
                    if (size > (inner.size / 2)) then {
                        expand
                    }
                }
            }
            self    // for chaining
        }

        method add(x:T) {
            if (! contains(x)) then {
                mods := mods + 1
                def t = findPositionForAdd(x)
                inner.at(t)put(x)
                size := size + 1
                if (size > (inner.size / 2)) then {
                    expand
                }
            }
            self    // for chaining
        }

        method removeAll(elements) {
            for (elements) do { x ->
                remove (x) ifAbsent {
                    NoSuchObject.raise "set does not contain {x}"
                }
            }
            self    // for chaining
        }
        method removeAll(elements)ifAbsent(block:Procedure1⟦T⟧) {
            mods := mods + 1
            for (elements) do { x ->
                var t := findPosition(x)
                if (inner.at(t) == x) then {
                    inner.at(t) put (removed)
                    size := size - 1
                } else {
                    block.apply(x)
                }
            }
            self    // for chaining
        }
        method clear {
            mods := mods + 1
            inner := primitiveArray.new(cap)
            size := 0
            self
        }

        method remove (elt:T) ifAbsent (block) {
            var t := findPosition(elt)
            if (inner.at(t) == elt) then {
                inner.at(t) put (removed)
                mods := mods + 1
                size := size - 1
            } else {
                block.apply
            }
            self    // for chaining
        }

        method remove(elt:T) {
            remove (elt) ifAbsent {
                NoSuchObject.raise "set does not contain {elt}"
            }
            self    // for chaining
        }

        method contains(x) {
            var t := findPosition(x)
            if (inner.at(t) == x) then {
                return true
            }
            return false
        }
        method includes(booleanBlock) {
            self.do { each ->
                if (booleanBlock.apply(each)) then { return true }
            }
            return false
        }
        method find(booleanBlock)ifNone(notFoundBlock) {
            self.do { each ->
                if (booleanBlock.apply(each)) then { return each }
            }
            return notFoundBlock.apply
        }
        method anyone {
            self.do { each -> return each }
            NoSuchObject.raise "no element in set"
        }
        method findPosition(x) is confidential {
            def h = x.hash
            def s = inner.size
            var t := h % s
            var jump := 5
            var candidate
            while {
                candidate := inner.at(t)
                unused ≠ candidate
            } do {
                if (candidate == x) then {
                    return t
                }
                if (jump != 0) then {
                    t := (t * 3 + 1) % s
                    jump := jump - 1
                } else {
                    t := (t + 1) % s
                }
            }
            return t
        }
        method findPositionForAdd(x) is confidential {
            def h = x.hash
            def s = inner.size
            var t := h % s
            var jump := 5
            var candidate
            while {
                candidate := inner.at(t)
                (unused != candidate) && (removed != candidate)
            } do {
                if (candidate == x) then {
                    return t
                }
                if (jump != 0) then {
                    t := (t * 3 + 1) % s
                    jump := jump - 1
                } else {
                    t := (t + 1) % s
                }
            }
            return t
        }

        method asString {
            var s := "set ["
            do {each -> s := s ++ each.asString }
                separatedBy { s := s ++ ", " }
            s ++ "]"
        }
        method asDebugString {
            var s := "set\{"
            do {each -> s := s ++ each.asDebugString }
                separatedBy { s := s ++ ", " }
            s ++ "\}"
        }
        method extend(l) {
            for (l) do {i->
                add(i)
            }
        }
        method do(block1) {
            def iMods = mods
            var i := 0
            var found := 0
            var candidate
            while {found < size} do {
                if (iMods != mods) then {
                    ConcurrentModification.raise (outer.asDebugString)
                }
                candidate := inner.at(i)
                if ((unused != candidate) && (removed != candidate)) then {
                    found := found + 1
                    block1.apply(candidate)
                }
                i := i + 1
            }
        }
        method iterator {
            object {
                def iMods = mods
                var count := 1
                var idx := -1
                method hasNext { size >= count }
                method next {
                    var candidate
                    def innerSize = inner.size
                    while {
                        idx := idx + 1
                        if (iMods != mods) then {
                            ConcurrentModification.raise (outer.asDebugString)
                        }
                        if (idx >= innerSize) then {
                            IteratorExhausted.raise "iterator over {outer.asString}"
                        }
                        candidate := inner.at(idx)
                        (unused == candidate) || (removed == candidate)
                    } do { }
                    count := count + 1
                    candidate
                }
            }
        }

        method expand is confidential {
            def c = inner.size
            def n = c * 2
            def oldInner = inner
            size := 0
            inner := primitiveArray.new(n)
            for (0..(inner.size-1)) do {i->
                inner.at(i)put(unused)
            }
            for (0..(oldInner.size-1)) do {i->
                if ((unused != oldInner.at(i)) && (removed != oldInner.at(i))) then {
                    add(oldInner.at(i))
                }
            }
        }
        method ==(other) {
            if (Collection.matches(other)) then {
                var otherSize := 0
                other.do { each ->
                    otherSize := otherSize + 1
                    if (! self.contains(each)) then {
                        return false
                    }
                }
                otherSize == self.size
            } else { 
                false
            }
        }
        method hash {
            // we have to sort our elements to obtain the same hash for two equal sets
            list.withAll(self).sort.hash
        }
        method ≠ (other) { (self == other).not }
        method copy {
            outer.withAll(self)
        }
        method ++ (other:Collection⟦T⟧) {
        // set union
            copy.addAll(other)
        }
        method -- (other:Collection⟦T⟧) {
        // set difference
            def result = set.empty
            for (self) do {v->
                if (!other.contains(v)) then {
                    result.add(v)
                }
            }
            result
        }
        method ** (other) {
        // set intersection
            set.withAll((filter {each -> other.contains(each)}))
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
}

type Binding⟦K,T⟧ = {
    key -> K
    value -> T
    hash -> Number
    ==(other) -> Boolean
}

class binding⟦K, T⟧ {
    method asString { "the binding factory" }

    class key(k)value(v) {
        def key is public = k
        def value is public = v
        method asString { "{key}::{value}" }
        method asDebugString { "{key.asDebugString}::{value.asDebugString}" }
        method hash { (key.hash * 1021) + value.hash }
        method == (other) {
            match (other)
                case { o:Binding -> (key == o.key) && (value == o.value) }
                else { return false }
        }
        method ≠ (other) { (self == other).not }
    }
}

type ComparableToDictionary⟦K,T⟧ = interface {
    size -> Number
    at(_:K)ifAbsent(_) -> T
}

class dictionary⟦K,T⟧ {

    method asString { "the dictionary factory" }

    method with(aBinding) {
        empty.add(aBinding)
    }

    method withAll(initialBindings: Collection⟦Binding⟦K,T⟧⟧) {
        // we can't say -> Dictionary⟦K,T⟧, because checking that (dynamically)
        // requires building a dictionary for the memo table in the Dictionary type

        def result = empty
        initialBindings.do { b:Binding -> result.add(b) }
        result
    }
    
    method << (source:Collection⟦Binding⟦K,T⟧⟧) { self.withAll(source) }

    class empty {
        // we can't say -> Dictionary⟦K,T⟧, because checking that (dynamically)
        // requires building a dictionary for the memo table in the Dictionary type

        use collection⟦T⟧
        var mods := 0
        var numBindings := 0
        var inner := primitiveArray.new(8)
        for (0..(inner.size-1)) do { i ->
            inner.at(i)put(unused)
        }
        method size { numBindings }
        method at(key')put(value') {
            mods := mods + 1
            var t := findPositionForAdd(key')
            if ((unused == inner.at(t)) || (removed == inner.at(t))) then {
                numBindings := numBindings + 1
            }
            inner.at(t)put(binding.key(key')value(value'))
            if ((size * 2) > inner.size) then { expand }
            self    // for chaining
        }
        method add(aBinding) {
            mods := mods + 1
            var t := findPositionForAdd (aBinding.key)
            if ((unused == inner.at(t)) || (removed == inner.at(t))) then {
                numBindings := numBindings + 1
            }
            inner.at(t)put(aBinding)
            if ((size * 2) > inner.size) then { expand }
            self    // for chaining
        }
        method addAll(bindings) {
            bindings.do{ each -> add(each) }
            self    // for chaining
        }
        method at(k) {
            var b := inner.at(findPosition(k))
            if (b.key == k) then {
                return b.value
            }
            NoSuchObject.raise "dictionary does not contain entry with key {k}"
        }
        method at(k) ifAbsent(action) {
            var b := inner.at(findPosition(k))
            if (b.key == k) then {
                return b.value
            }
            action.apply
        }
        method containsKey(k) {
            var t := findPosition(k)
            if (inner.at(t).key == k) then {
                return true
            }
            false
        }
        method removeAllKeys(keys) {
            mods := mods + 1
            for (keys) do { k ->
                var t := findPosition(k)
                if (inner.at(t).key == k) then {
                    inner.at(t)put(removed)
                    numBindings := numBindings - 1
                } else {
                    NoSuchObject.raise "dictionary does not contain entry with key {k}"
                }
            }
            self
        }
        method removeKey(k:K) {
            mods := mods + 1
            var t := findPosition(k)
            if (inner.at(t).key == k) then {
                inner.at(t)put(removed)
                numBindings := numBindings - 1
            } else {
                NoSuchObject.raise "dictionary does not contain entry with key {k}"
            }
            self
        }
        method removeKey(k:K) ifAbsent (action:Function0⟦Unknown⟧) {
            mods := mods + 1
            var t := findPosition(k)
            if (inner.at(t).key == k) then {
                inner.at(t)put(removed)
                numBindings := numBindings - 1
            } else {
                action.apply
            }
            self
        }
        method removeAllValues(removals) {
            mods := mods + 1
            for (0..(inner.size-1)) do {i->
                def a = inner.at(i)
                if (removals.contains(a.value)) then {
                    inner.at(i)put(removed)
                    numBindings := numBindings - 1
                }
            }
            self
        }
        method removeValue(v) {
            // remove all bindings with value v
            mods := mods + 1
            def initialNumBindings = numBindings
            for (0..(inner.size-1)) do {i->
                def a = inner.at(i)
                if (v == a.value) then {
                    inner.at (i) put (removed)
                    numBindings := numBindings - 1
                }
            }
            if (numBindings == initialNumBindings) then {
                NoSuchObject.raise "dictionary does not contain entry with value {v}"
            }
            self
        }
        method removeValue(v) ifAbsent (action:Function0⟦Unknown⟧) {
            // remove all bindings with value v
            mods := mods + 1
            def initialNumBindings = numBindings
            for (0..(inner.size-1)) do {i->
                def a = inner.at(i)
                if (v == a.value) then {
                    inner.at (i) put (removed)
                    numBindings := numBindings - 1
                }
            }
            if (numBindings == initialNumBindings) then {
                action.apply
            }
            self
        }
        method clear {
            inner := primitiveArray.new(8)
            numBindings := 0
            mods := mods + 1
            for (0..(inner.size-1)) do { i ->
                inner.at(i)put(unused)
            }
            self
        }
        method containsValue(v) {
            self.valuesDo{ each ->
                if (v == each) then { return true }
            }
            false
        }
        method contains(v) { containsValue(v) }

        method findPosition(x) is confidential {
            def h = x.hash
            def s = inner.size
            var t := h % s
            var jump := 5
            while { unused ≠ inner.at(t) } do {
                if (inner.at(t).key == x) then {
                    return t
                }
                if (jump != 0) then {
                    t := (t * 3 + 1) % s
                    jump := jump - 1
                } else {
                    t := (t + 1) % s
                }
            }
            return t
        }
        method findPositionForAdd(x) is confidential {
            def h = x.hash
            def s = inner.size
            var t := h % s
            var jump := 5
            while { (unused ≠ inner.at(t)) && (removed ≠ inner.at(t)) } do {
                if (inner.at(t).key == x) then {
                    return t
                }
                if (jump != 0) then {
                    t := (t * 3 + 1) % s
                    jump := jump - 1
                } else {
                    t := (t + 1) % s
                }
            }
            return t
        }
        method asString {
            // do(_)separatedBy(_) won't work; it iterates over values,
            // and we need an iterator over bindings.
            var s := "dictionary ["
            var firstElement := true
            for (0..(inner.size-1)) do {i->
                def a = inner.at(i)
                if ((unused ≠ a) && (removed ≠ a)) then {
                    if (! firstElement) then {
                        s := s ++ ", "
                    } else {
                        firstElement := false
                    }
                    s := s ++ "{a.key}::{a.value}"
                }
            }
            s ++ "]"
        }
        method asDebugString {
            var s := "dict⟬"
            for (0..(inner.size-1)) do {i->
                if (i > 0) then { s := s ++ ", " }
                def a = inner.at(i)
                if ((unused ≠ a) && (removed ≠ a)) then {
                    s := s ++ "{i}→{a.key}::{a.value}"
                } else {
                    s := s ++ "{i}→{a.asDebugString}"
                }
            }
            s ++ "⟭"
        }
        class keys -> Enumerable⟦K⟧ {
            use enumerable⟦K⟧
            class iterator {
                def sourceIterator = outer.outer.bindingsIterator
                method hasNext { sourceIterator.hasNext }
                method next { sourceIterator.next.key }
                method asString {
                    "an iterator over keys of {outer.outer}"
                }
            }
            def size is public = outer.size
            method asDebugString {
                "a lazy sequence over keys of {outer}"
            }
        }
        class values -> Enumerable⟦T⟧ {
            use enumerable⟦T⟧
            class iterator {
                def sourceIterator = outer.outer.bindingsIterator
                method hasNext { sourceIterator.hasNext }
                method next { sourceIterator.next.value }
                method asString {
                    "an iterator over values of {outer.outer}"
                }
            }
            def size is public = outer.size
            method asDebugString {
                "a lazy sequence over values of {outer}"
            }
        }
        class bindings -> Enumerable⟦T⟧ {
            use enumerable⟦T⟧
            method iterator { outer.bindingsIterator }
            def size is public = outer.size
            method asDebugString {
                "a lazy sequence over bindings of {outer}"
            }
        }
        method iterator -> Iterator⟦T⟧ { values.iterator }
        class bindingsIterator -> Iterator⟦Binding⟦K, T⟧⟧ is confidential {
            def iMods = mods
            var count := 1
            var idx := 0
            var elt
            method hasNext { size >= count }
            method next {
                if (iMods != mods) then {
                    ConcurrentModification.raise (outer.asString)
                }
                if (size < count) then { IteratorExhausted.raise "over {outer.asString}" }
                while {
                    elt := inner.at(idx)
                    (unused == elt) || (removed == elt)
                } do {
                    idx := idx + 1
                }
                count := count + 1
                idx := idx + 1
                elt
            }
        }
        method expand is confidential {
            def c = inner.size
            def n = c * 2
            def oldInner = inner
            inner := primitiveArray.new(n)
            for (0..(n - 1)) do {i->
                inner.at(i)put(unused)
            }
            numBindings := 0
            for (0..(c - 1)) do {i->
                def a = oldInner.at(i)
                if ((unused ≠ a) && (removed ≠ a)) then {
                    self.at(a.key)put(a.value)
                }
            }
        }
        method keysAndValuesDo(block2) {
            for (0..(inner.size-1)) do {i->
                def a = inner.at(i)
                if ((unused ≠ a) && (removed ≠ a)) then {
                    block2.apply(a.key, a.value)
                }
            }
        }
        method keysDo(block1) {
            def iMods = mods
            for (0..(inner.size-1)) do { i ->
                if (iMods ≠ mods) then {
                    ConcurrentModification.raise (asDebugString)
                }
                def a = inner.at(i)
                if ((unused ≠ a) && (removed ≠ a)) then {
                    block1.apply(a.key)
                }
            }
        }
        method valuesDo(block1) {
            def iMods = mods
            for (0..(inner.size-1)) do { i ->
                if (iMods ≠ mods) then {
                    ConcurrentModification.raise (asDebugString)
                }
                def a = inner.at(i)
                if ((unused ≠ a) && (removed ≠ a)) then {
                    block1.apply(a.value)
                }
            }
        }
        method do(block1) { valuesDo(block1) }

        method ==(other) {
            match (other)
              case { o:ComparableToDictionary⟦K,T⟧ ->
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
            def newCopy = dictionary.empty
            self.keysAndValuesDo{ k, v ->
                newCopy.at(k)put(v)
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
            return newDict
        }

        method -- (other:Collection⟦T⟧) {
            // answers a new dictionary like me but excluding the keys of other
            def newDict = dictionary.empty
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
