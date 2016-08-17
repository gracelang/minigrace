#pragma NativePrelude

def BoundsError = ProgrammingError.refine "BoundsError"
def IteratorExhausted = ProgrammingError.refine "IteratorExhausted"
def SubobjectResponsibility = ProgrammingError.refine "SubobjectResponsibility"
def NoSuchObject = ProgrammingError.refine "NoSuchObject"
def RequestError = ProgrammingError.refine "RequestError"
def ConcurrentModification = ProgrammingError.refine "ConcurrentModification"
def SizeUnknown = Exception.refine "SizeUnknown"

method abstract is confidential {
    // copied from standardGrace
    SubobjectResponsibility.raise "abstract method not overriden by subobject"
}

type Block0⟦R⟧ = type {
    apply -> R
}

type Block1⟦T,R⟧ = type {
    apply(a:T) -> R
}

type Block2⟦S,T,R⟧ = type {
    apply(a:S, b:T) -> R
}

type SelfType = Unknown     // becuase it's not yet in the language

type Iterable⟦T⟧ = Object & type {
    iterator -> Iterator⟦T⟧
        // the iterator on which I am based
    isEmpty -> Boolean
        // true if I have no elements
    size -> Number
        // my size (the number of elements that I contain);
        // may raise SizeUnknown.
    sizeIfUnknown(action: Block0⟦Number⟧)
        // my size; if not known, then the result of applying action
    first -> T
        // my first element; raises BoundsError if I have none.
    do(block1: Block1⟦T, Done⟧) -> Done
        // an internal iterator; applies block1 to each of my elements
    do(body:Block1⟦T, Done⟧) separatedBy(separator:Block0⟦Done⟧) -> Done
        // an internal iterator; ; applies block1 to each of my elements, and applies separator in between
    ++(other: Iterable⟦T⟧) -> Iterable⟦T⟧
        // returns a new Iterable over the concatenation of self and other
    fold(binaryFunction:Block2⟦T, T, T⟧) startingWith(initial:T) -> Object
        // the left-associative fold of binaryFunction over self, starting with initial
    map⟦U⟧(function:Block1⟦T, U⟧) -> Iterable⟦U⟧
        // returns a new iterator that yields my elements mapped by function
    filter(condition:Block1⟦T,Boolean⟧) -> Iterable⟦T⟧
        // returns a new iterator that yields those of my elements for which condition holds
}

type Expandable⟦T⟧ = Iterable⟦T⟧ & type {
    add(x: T) -> SelfType
    addAll(xs: Iterable⟦T⟧) -> SelfType
}

type Collection⟦T⟧ = Iterable⟦T⟧ & type {
    asList -> List⟦T⟧
    asSequence -> Sequence⟦T⟧
    asSet -> Set⟦T⟧
}

type Enumerable⟦T⟧ = Collection⟦T⟧ & type {
    values -> Collection⟦T⟧
    asDictionary -> Dictionary⟦Number,T⟧
    keysAndValuesDo(action:Block2⟦Number,T,Object⟧) -> Done
    into(existing: Expandable⟦Unknown⟧) -> Collection⟦Unknown⟧
    sortedBy(comparison:Block2⟦T,T,Number⟧) -> SelfType
    sorted -> SelfType
}

type Sequence⟦T⟧ = Enumerable⟦T⟧ & type {
    size -> Number
    at(n:Number) -> T
    indices -> Sequence⟦Number⟧
    keys -> Sequence⟦Number⟧
    second -> T
    third -> T
    fourth -> T
    fifth -> T
    last -> T
    indexOf⟦W⟧(elem:T)ifAbsent(action:Block0⟦W⟧) -> Number | W
    indexOf(elem:T) -> Number
    contains(elem:T) -> Boolean
    reversed -> Sequence⟦T⟧
}

type List⟦T⟧ = Sequence⟦T⟧ & type {
    add(x: T) -> List⟦T⟧
    addAll(xs: Iterable⟦T⟧) -> List⟦T⟧
    addFirst(x: T) -> List⟦T⟧
    addAllFirst(xs: Iterable⟦T⟧) -> List⟦T⟧
    addLast(x: T) -> List⟦T⟧    // same as add
    at(ix:Number) put(v:T) -> List⟦T⟧
    clear -> List⟦T⟧
    removeFirst -> T
    removeAt(n: Number) -> T
    removeLast -> T
    remove(v:T)
    remove(v:T) ifAbsent(action:Block0⟦Done⟧)
    removeAll(vs: Iterable⟦T⟧)
    removeAll(vs: Iterable⟦T⟧) ifAbsent(action:Block0⟦Unknown⟧)
    pop -> T
    ++(o: List⟦T⟧) -> List⟦T⟧
    addAll(l: Iterable⟦T⟧) -> List⟦T⟧
    copy -> List⟦T⟧
    sort -> List⟦T⟧
    sortBy(sortBlock:Block2⟦T,T,Number⟧) -> List⟦T⟧
    reverse -> List⟦T⟧
    reversed -> List⟦T⟧
}

type Set⟦T⟧ = Collection⟦T⟧ & type {
    size -> Number
    add(x:T) -> SelfType
    addAll(elements: Iterable⟦T⟧) -> SelfType
    remove(x: T) -> Set⟦T⟧
    remove(x: T) ifAbsent(block: Block0⟦Done⟧) -> Set⟦T⟧
    clear -> Set⟦T⟧
    includes(booleanBlock: Block1⟦T,Boolean⟧) -> Boolean
    find(booleanBlock: Block1⟦T,Boolean⟧) ifNone(notFoundBlock: Block0⟦T⟧) -> T
    copy -> Set⟦T⟧
    contains(elem:T) -> Boolean
    ** (other:Set⟦T⟧) -> Set⟦T⟧
    -- (other:Set⟦T⟧) -> Set⟦T⟧
    ++ (other:Set⟦T⟧) -> Set⟦T⟧
    isSubset(s2: Set⟦T⟧) -> Boolean
    isSuperset(s2: Iterable⟦T⟧) -> Boolean
    removeAll(elems: Iterable⟦T⟧)
    removeAll(elems: Iterable⟦T⟧)ifAbsent(action:Block0⟦Done⟧) -> Set⟦T⟧
    into(existing: Expandable⟦Unknown⟧) -> Collection⟦Unknown⟧
}

type Dictionary⟦K,T⟧ = Collection⟦T⟧ & type {
    size -> Number
    containsKey(k:K) -> Boolean
    containsValue(v:T) -> Boolean
    contains(elem:T) -> Boolean
    at(key:K)ifAbsent(action:Block0⟦Unknown⟧) -> Unknown
    at(key:K)put(value:T) -> Dictionary⟦K,T⟧
    at(k:K) -> T
    removeAllKeys(keys: Iterable⟦K⟧) -> Dictionary⟦K,T⟧
    removeKey(key:K) -> Dictionary⟦K,T⟧
    removeAllValues(removals: Iterable⟦T⟧) -> Dictionary⟦K,T⟧
    removeValue(v:T) -> Dictionary⟦K,T⟧
    clear -> Dictionary⟦K,T⟧
    keys -> Enumerable⟦K⟧
    values -> Enumerable⟦T⟧
    bindings -> Enumerable⟦Binding⟦K,T⟧⟧
    keysAndValuesDo(action:Block2⟦K,T,Done⟧) -> Done
    keysDo(action:Block1⟦K,Done⟧) -> Done
    valuesDo(action:Block1⟦T,Done⟧) -> Done
    == (other:Object) -> Boolean
    copy -> Dictionary⟦K,T⟧
    ++ (other:Dictionary⟦K, T⟧) -> Dictionary⟦K, T⟧
    -- (other:Dictionary⟦K, T⟧) -> Dictionary⟦K, T⟧
    asDictionary -> Dictionary⟦K, T⟧
}

type Iterator⟦T⟧ = type {
    hasNext -> Boolean
    next -> T
}

class lazySequenceOver⟦T,R⟧ (source: Iterable⟦T⟧)
        mappedBy (function:Block1⟦T,R⟧) -> Enumerable⟦R⟧ is confidential {
    inherit enumerable.TRAIT⟦T⟧
    class iterator {
        def sourceIterator = source.iterator
        method asString { "an iterator over a lazy map sequence" }
        method hasNext { sourceIterator.hasNext }
        method next { function.apply(sourceIterator.next) }
    }
    method size { source.size }
    method isEmpty { source.isEmpty }
    method asDebugString { "a lazy sequence mapping over {source}" }
}

class lazySequenceOver⟦T⟧ (source: Iterable⟦T⟧)
        filteredBy(predicate:Block1⟦T,Boolean⟧) -> Enumerable⟦T⟧ is confidential {
    inherit enumerable.TRAIT⟦T⟧
    class iterator {
        var cache
        var cacheLoaded := false
        def sourceIterator = source.iterator
        method asString { "an iterator over filtered {source}" }
        method hasNext {
        // To determine if this iterator has a next element, we have to find
        // an acceptable element; this is then cached, for the use of next
            if (cacheLoaded) then { true } else { hasNextAcceptableElement }
        }
        method next {
            if (cacheLoaded.not) then { cache := nextAcceptableElement }
            cacheLoaded := false
            return cache
        }
        method nextAcceptableElement is confidential {
        // return the next element of the underlying iterator satisfying
        // predicate; if there is none, raises IteratorExhausted.
            while { true } do {
                def outerNext = sourceIterator.next
                def isAcceptable = predicate.apply(outerNext)
                if (isAcceptable) then { return outerNext }
            }
        }
        method hasNextAcceptableElement is confidential {
        // returns true is there is another element in the underlying iterator
        // satisfying predicate, otherwise false
            while { true } do {
                if (sourceIterator.hasNext.not) then { return false }
                def outerNext = sourceIterator.next
                def isAcceptable = predicate.apply(outerNext)
                if (isAcceptable) then {
                    cacheLoaded := true
                    cache := outerNext
                    return true
                }
            }
        }
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
    inherit enumerable.TRAIT⟦T⟧
    method iterator {
        iteratorConcat(left.iterator, right.iterator)
    }
    method asDebugString { "lazy concatenation of {left} and {right}" }
    method size { left.size + right.size }  // may raise SizeUnknown
}

class collection.TRAIT⟦T⟧ {
    
    method asString { "a collection TRAIT" }
    method sizeIfUnknown(action) {
        action.apply
    }
    method size {
        SizeUnknown.raise "this collection does not know its size"
    }
    method do { abstract }
    method iterator { abstract }
    method isEmpty {
        // override if size is known
        iterator.hasNext.not
    }
    method first {
        def it = self.iterator
        if (it.hasNext) then { 
            it.next
        } else {
            BoundsError.raise "no first element in {self}"
        }
    }
    method do(block1) separatedBy(block0) {
        var firstTime := true
        var i := 0
        self.do { each ->
            if (firstTime) then {
                firstTime := false
            } else {
                block0.apply
            }
            block1.apply(each)
        }
        return self
    }
    method reduce(initial, blk) {
    // deprecated; for compatibility with builtInList
        fold(blk)startingWith(initial)
    }
    method fold(blk)startingWith(initial) {
        var result := initial
        self.do {it ->
            result := blk.apply(result, it)
        }
        return result
    }
    method map⟦R⟧(block1:Block1⟦T,R⟧) -> Enumerable⟦R⟧ {
        lazySequenceOver(self) mappedBy(block1)
    }
    method filter(selectionCondition:Block1⟦T,Boolean⟧) -> Enumerable⟦T⟧ {
        lazySequenceOver(self) filteredBy(selectionCondition)
    }

    method iter { self.iterator }

    method asSequence {
        sequence.withAll(self)
    }
    method asList {
        list.withAll(self)
    }
    method asSet {
        set.withAll(self)
    }
}

class enumerable.TRAIT⟦T⟧ {
    inherit collection.TRAIT⟦T⟧
    method iterator { abstract }
    method size {
        // override if size is known
        SizeUnknown.raise "size requested on {asDebugString}"
    }
    method asDictionary {
        def result = dictionary.empty
        keysAndValuesDo { k, v ->
            result.at(k) put(v)
        }
        return result
    }
    method into(existing: Expandable⟦T⟧) -> Collection⟦T⟧ {
        def selfIterator = self.iterator
        while {selfIterator.hasNext} do {
            existing.add(selfIterator.next)
        }
        existing
    }
    method ==(other) {
        isEqual (self) toIterable (other)
    }
    method do(block1:Block1⟦T,Done⟧) -> Done {
        def selfIterator = self.iterator
        while {selfIterator.hasNext} do {
            block1.apply(selfIterator.next)
        }
    }
    method keysAndValuesDo(block2:Block2⟦Number,T,Done⟧) -> Done {
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
    method ++ (other) -> Enumerable⟦T⟧ {
        lazyConcatenation(self, other)
    }
    method sortedBy(sortBlock:Block2) -> List⟦T⟧ {
        self.asList.sortBy(sortBlock:Block2)
    }
    method sorted -> List⟦T⟧ {
        self.asList.sort
    }
    method asString {
        var s := "⟨"
        do { each -> s := s ++ each.asString } separatedBy { s := s ++ ", " }
        s ++ "⟩"
    }
}

class indexable.TRAIT⟦T⟧ {
    inherit collection.TRAIT⟦T⟧
    method at(index) { abstract }
    method size { abstract }
    method isEmpty { size == 0 }
    method keysAndValuesDo(action:Block2⟦Number,T,Done⟧) -> Done {
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
    method indexOf(sought:T) ifAbsent(action:Block0)  {
        keysAndValuesDo { ix, v ->
            if (v == sought) then { return ix }
        }
        action.apply
    }
    method asDictionary {
        def result = dictionary.empty
        keysAndValuesDo { k, v ->
            result.at(k) put(v)
        }
        return result
    }
    method into(existing: Expandable⟦T⟧) -> Collection⟦T⟧ {
        def selfIterator = self.iterator
        while {selfIterator.hasNext} do {
            existing.add(selfIterator.next)
        }
        existing
    }
}

method max(a,b) is confidential {       // copied from standard prelude
    if (a > b) then { a } else { b }
}

def emptySequence is confidential = object {
    inherit indexable.TRAIT
    method size { 0 }
    method isEmpty { true }
    method at(n) { BoundsError.raise "index {n} of empty sequence" }
    method keys { self }
    method values { self }
    method keysAndValuesDo(block2) { done }
    method reversed { self }
    method ++(other: Iterable) { sequence.withAll(other) }
    method asString { "⟨⟩" }
    method contains(element) { false }
    method do(block1) { done }
    method ==(other) {
        match (other)
            case {o: Iterable ->
                o.isEmpty
            }
            case {_ ->
                false
            }
    }
    class iterator {
        method asString { "emptySequenceIterator" }
        method hasNext { false }
        method next { IteratorExhausted.raise "on empty sequence" }
    }
    method sorted { self }
    method sortedBy(sortBlock:Block2){ self }
}

class sequence⟦T⟧ {

    method asString { "a sequence factory" }

    method empty {
        // this is an optimization: there need be just one empty sequence
        emptySequence
    }

    method withAll(arg: Iterable⟦T⟧) {
        var sizeCertain := true
        // size might be uncertain if arg is a lazy collection.
        def forecastSize = arg.sizeIfUnknown {
            sizeCertain := false
            8
        }
        var inner := _prelude.primitiveArray.new(forecastSize)
        var innerSize := inner.size
        var ix := 0
        if (sizeCertain) then {
            // common, fast path
            for (arg) do { elt ->
                inner.at(ix)put(elt)
                ix := ix + 1
            }
        } else {
            // less-than-optimal path
            for (arg) do { elt ->
                if (innerSize <= ix) then {
                    def newInner = _prelude.primitiveArray.new(innerSize * 2)
                    for (0..(innerSize-1)) do { i ->
                        newInner.at(i)put(inner.at(i))
                    }
                    inner := newInner
                    innerSize := inner.size
                }
                inner.at(ix)put(elt)
                ix := ix + 1
            }
        }
        if (ix == 0) then { return emptySequence }
        self.fromprimitiveArray(inner, ix)
    }
    method fromprimitiveArray(pArray, sz) is confidential {
        // constructs a sequence from the first sz elements of pArray

        object {
            inherit indexable.TRAIT
            def size is public = sz
            def inner = pArray

            method boundsCheck(n) is confidential {
                if (!(n >= 1) || !(n <= size)) then {
                    // the condition is written this way because NaN always
                    // compares false
                    BoundsError.raise "index {n} out of bounds 1..{size}"
                }
            }
            method at(n) {
                boundsCheck(n)
                inner.at(n-1)
            }
            method keys {
                range.from(1)to(size)
            }
            method values {
                self
            }
            method keysAndValuesDo(block2) {
                var i := 0
                while {i < size} do {
                    block2.apply(i+1, inner.at(i))
                    i := i + 1
                }
            }
            method reversed {
                def freshArray = _prelude.primitiveArray.new(size)
                var ix := size - 1
                do { each ->
                    freshArray.at (ix) put(each)
                    ix := ix - 1
                }
                outer.fromprimitiveArray(freshArray, size)
            }
            method ++(other: Iterable) {
                sequence.withAll(lazyConcatenation(self, other))
            }
            method asString {
                var s := "⟨"
                for (0..(size-1)) do {i->
                    s := s ++ inner.at(i).asString
                    if (i < (size-1)) then { s := s ++ ", " }
                }
                s ++ "⟩"
            }
            method contains(element) {
                do { each -> if (each == element) then { return true } }
                return false
            }
            method do(block1) {
                var i := 0
                while {i < size} do {
                    block1.apply(inner.at(i))
                    i := i + 1
                }
            }
            method ==(other) {
                isEqual (self) toIterable (other)
            }
            method iterator {
                object {
                    var idx := 1
                    method asDebugString { "{asString}⟪{idx}⟫" }
                    method asString { "aSequenceIterator" }
                    method hasNext { idx <= sz }
                    method next {
                        if (idx > sz) then { IteratorExhausted.raise "on sequence {outer}⟪{idx}⟫" }
                        def ret = at(idx)
                        idx := idx + 1
                        ret
                    }
                }
            }
            method sorted {
                asList.sortBy { l, r ->
                    if (l == r) then {0}
                        elseif {l < r} then {-1}
                        else {1}
                }.asSequence
            }
            method sortedBy(sortBlock:Block2){
                asList.sortBy(sortBlock:Block2).asSequence
            }
        }
    }
}

type MinimalyIterable = type {
    iterator -> Iterator
}

method isEqual(left) toIterable(right) {
    if (MinimalyIterable.match(right)) then {
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

class list⟦T⟧ {
    
    method asString { "a list factory" }
    
    method empty -> List⟦T⟧ {
        withAll(emptySequence)
    }

    method withAll(a: Iterable⟦T⟧) -> List⟦T⟧ {
        if (engine == "js") then {
          if (native "js" code ‹result = (this === superDepth) ? GraceTrue : GraceFalse;›) then {
            return object {
                inherit indexable.TRAIT⟦T⟧

                var mods is readable := 0
                var sz := 0
                var jsArray := native "js" code ‹result = [];›
                a.do { each ->
                    native "js" code ‹this.data.jsArray.push(var_each);›
                }

                method size {
                    native "js" code ‹return new GraceNum(this.data.jsArray.length);›
                    sz
                }

                method at(n) {
                    native "js" code ‹var ix = var_n._value;
                        if ( !(ix >= 1) || !(ix <= this.data.jsArray.length)) {
                            var msg = "index " + ix + " out of bounds 1.." + this.data.jsArray.length;
                            var BoundsError = callmethod(Grace_prelude, "BoundsError", [0]);
                            callmethod(BoundsError, "raise(1)", [1], new GraceString(msg));
                        }
                        return this.data.jsArray[ix - 1];›
                }

                method at(n)put(x) {
                    mods := mods + 1
                    native "js" code ‹var  ix = var_n._value;
                        if (!(ix >= 1) || !(ix <= this.data.jsArray.length + 1)) {
                            var msg = "index " + ix + " out of bounds 1.." + this.data.jsArray.length;
                            var BoundsError = callmethod(Grace_prelude, "BoundsError", [0]);
                            callmethod(BoundsError, "raise(1)", [1], new GraceString(msg));
                        }
                        this.data.jsArray[ix-1] = var_x;
                        return this;›
                }

                method add(x:T) {
                    mods := mods + 1
                    native "js" code ‹this.data.jsArray.push(var_x);
                        return this;›
                }

                method push(x) {
                    mods := mods + 1
                    native "js" code ‹this.data.jsArray.push(var_x);
                        return this;›
                }

                method removeLast {
                    mods := mods + 1
                    native "js" code ‹if (this.data.jsArray.length === 0) {
                        var msg = "you can't remove an element from an empty list";
                        var BoundsError = callmethod(Grace_prelude, "BoundsError", [0]);
                        callmethod(BoundsError, "raise(1)", [1], new GraceString(msg));
                    } else
                        return this.data.jsArray.pop();›
                }
                method clear {
                    mods := mods + 1
                    native "js" code ‹this.data.jsArray = [];
                        return this;›
                }
                method addAllFirst(l) {
                    mods := mods + 1
                    var ix := l.size;
                    while {ix > 0} do {
                        def each = l.at(ix)
                        ix := ix - 1
                        native "js" code ‹this.data.jsArray.unshift(var_each);›
                    }
                    self
                }

                method removeAt(n) {
                    mods := mods + 1
                    def removed = self.at(n)    // does the bounds check
                    native "js" code ‹this.data.jsArray.splice(var_n._value - 1, 1);›
                    return removed
                }

                method sortBy(sortBlock:Block2) {
                    mods := mods + 1
                    native "js" code ‹var compareFun = function compareFun(a, b) {
                              var res = callmethod(var_sortBlock, "apply(2)", [2], a, b);
                              if (res.className == "number") return res._value;
                              throw new GraceExceptionPacket(TypeErrorObject,
                                     new GraceString("sort block in list.sortBy method did not return a number"));
                          };
                          this.data.jsArray.sort(compareFun);›
                    self
                }
                // end of native methods


                method addLast(x) { push(x) }    // compatibility
                method addAll(l) {
                    for (l) do { each -> push(each) }
                    self
                }

                method addFirst(elem) {
                    mods := mods + 1
                    native "js" code ‹this.data.jsArray.unshift(var_elem);›
                    self
                }                

                method removeFirst {
                    removeAt(1)
                }


                method remove(elt:T) {
                    def ix = self.indexOf(elt) ifAbsent {
                        NoSuchObject.raise "list does not contain object {elt}"
                    }
                    removeAt(ix)
                    self
                }


                method remove(elt:T) ifAbsent(action:Block0⟦Done⟧) {
                    def ix = self.indexOf(elt) ifAbsent {
                        return action.apply
                    }
                    removeAt(ix)
                    self
                }

                method removeAll(vs: Iterable⟦T⟧) {
                    removeAll(vs) ifAbsent { NoSuchObject.raise "list does not contain object" }
                }


                method removeAll(vs: Iterable⟦T⟧) ifAbsent(action:Block0⟦Unknown⟧)  {
                    for (vs) do { each ->
                        def ix = self.indexOf(each) ifAbsent { 0 }
                        if (ix ≠ 0) then {
                            removeAt(ix)
                        } else {
                            action.apply
                        }
                    }
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

                method ++(o) {
                    def l = list.withAll(self)
                    l.addAll(o)
                }


                method asString {
                    var s := "["
                    def curSize = self.size
                    for (1..curSize) do { i ->
                        s := s ++ at(i).asString
                        if (i < curSize) then { s := s ++ ", " }
                    }
                    s ++ "]"
                }

                method asDebugString {
                    var s := "["
                    def curSize = self.size
                    for (1..curSize) do { i ->
                        s := s ++ at(i).asDebugString
                        if (i < curSize) then { s := s ++ ", " }
                    }
                    s ++ "]"
                }

                method extend(l) { addAll(l); done }    // compatibility


                method contains(element) {
                    do { each -> if (each == element) then { return true } }
                    return false
                }

                method do(block1) {
                    var i := 1
                    def curSize = self.size
                    while {i <= curSize} do {
                        block1.apply(self.at(i))
                        i := i + 1
                    }
                }

                method ==(other) {
                    isEqual (self) toIterable (other)
                }

                method iterator {
                    object {
                        var imods := mods
                        var idx := 1
                        method asDebugString { "{asString}⟪{idx}⟫" }
                        method asString { "aListIterator" }
                        method hasNext { idx <= size }
                        method next {
                            if (imods != mods) then {
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

                method sort {
                    mods := mods + 1
                    sortBy { l, r ->
                        if (l == r) then {0}
                            elseif {l < r} then {-1}
                            else {1}
                    }
                }
                method sortedBy(sortBlock:Block2) {
                    copy.sortBy(sortBlock:Block2)
                }
                method sorted {
                    copy.sort
                }
                method copy {
                    outer.withAll(self)
                }
            }
          }
        }   // end of if (engine == "js") then ...

        object {
            // the new list object without native code
            inherit indexable.TRAIT⟦T⟧

            var mods is readable := 0
            var sizeCertain := true
            // size might be uncertain if a is a lazy collection.
            def initialSize = a.sizeIfUnknown{ sizeCertain := false ; 4 } * 2 + 1
            var inner := _prelude.primitiveArray.new(initialSize)
            var size is readable := 0
            if (sizeCertain) then {
                // common, fast path
                for (a) do { x ->
                    inner.at(size)put(x)
                    size := size + 1
                }
            } else {
                // less-than-optimal path
                var innerSize := initialSize
                for (a) do { x ->
                    if (innerSize <= size) then {
                        def newInner = _prelude.primitiveArray.new(innerSize * 2)
                        for (0..(innerSize-1)) do { i ->
                            newInner.at (i) put (inner.at(i) )
                        }
                        inner := newInner
                        innerSize := inner.size
                    }
                    inner.at(size)put(x)
                    size := size + 1
                }
            }
            method boundsCheck(n) is confidential {
                if ( !(n >= 1) || !(n <= size)) then {
                    BoundsError.raise "index {n} out of bounds 1..{size}"
                }
            }
            method at(n) {
                boundsCheck(n)
                inner.at(n-1)
            }
            method at(n)put(x) {
                mods := mods + 1
                if (n == (size+1)) then {
                    addLast(x)
                } else {
                    boundsCheck(n)
                    inner.at(n-1)put(x)
                }
                self
            }
            method add(x) {
                mods := mods + 1
                if (size == inner.size) then { expandTo(inner.size * 2) }
                inner.at(size)put(x)
                size := size + 1
                self
            }
            method addAll(l) {
                mods := mods + 1
                if ((size + l.size) > inner.size) then {
                    expandTo(max(size + l.size, size * 2))
                }
                for (l) do {each ->
                    inner.at(size)put(each)
                    size := size + 1
                }
                self
            }
            method push(x) {
                mods := mods + 1
                if (size == inner.size) then { expandTo(inner.size * 2) }
                inner.at(size)put(x)
                size := size + 1
                self
            }
            method addLast(x) { push(x) }    // compatibility
            method removeLast {
                mods := mods + 1
                def result = inner.at(size - 1)
                size := size - 1
                result
            }
            method addAllFirst(l) {
                mods := mods + 1
                def increase = l.size
                if ((size + increase) > inner.size) then {
                    expandTo(max(size + increase, size * 2))
                }
                for (range.from(size-1)downTo(0)) do {i->
                    inner.at(i+increase)put(inner.at(i))
                }
                var insertionIndex := 0
                for (l) do {each ->
                    inner.at(insertionIndex)put(each)
                    insertionIndex := insertionIndex + 1
                }
                size := size + increase
                self
            }
            method addFirst(elt:T) {
                mods := mods + 1
                if ((size + 1) > inner.size) then {
                    expandTo(size * 2)
                }
                for (range.from (size-1) downTo 0) do {i->
                    inner.at (i+1) put (inner.at(i) )
                }
                inner.at(0)put(elt)
                size := size + 1
                self
            }
            method clear {
                mods := mods + 1
                inner := _prelude.primitiveArray.new(initialSize)
                size := 0
                self
            }
            method removeFirst {
                removeAt(1)
            }
            method removeAt(n) {
                mods := mods + 1
                boundsCheck(n)
                def removed = inner.at(n-1)
                for (n..(size-1)) do {i->
                    inner.at(i-1)put(inner.at(i))
                }
                size := size - 1
                return removed
            }

            method remove(elt:T) {
                def ix = self.indexOf(elt) ifAbsent {
                    NoSuchObject.raise "list does not contain {elt}"
                }
                removeAt(ix)
                self
            }

            method remove(elt:T) ifAbsent(action:Block0⟦Done⟧) {
                def ix = self.indexOf(elt) ifAbsent {
                    action.apply
                    return self
                }
                removeAt(ix)
                self
            }

            method removeAll(vs: Iterable⟦T⟧) {
                removeAll(vs) ifAbsent { NoSuchObject.raise "list does not contain object" }
                self
            }
            method removeAll(vs: Iterable⟦T⟧) ifAbsent(action:Block0⟦Done⟧)  {
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
            method ++(o) {
                def l = list.withAll(self)
                l.addAll(o)
            }
            method asString {
                var s := "["
                for (0..(size-1)) do {i->
                    s := s ++ inner.at(i).asString
                    if (i < (size-1)) then { s := s ++ ", " }
                }
                s ++ "]"
            }
            method asDebugString {
                var s := "["
                for (0..(size-1)) do {i->
                    s := s ++ inner.at(i).asDebugString
                    if (i < (size-1)) then { s := s ++ ", " }
                }
                s ++ "]"
            }
            method contains(element) {
                do { each -> if (each == element) then { return true } }
                return false
            }
            method do(block1) {
                var i := 0
                while {i < size} do {
                    block1.apply(inner.at(i))
                    i := i + 1
                }
            }

            method ==(other) {
                isEqual (self) toIterable (other)
            }
            method iterator {
                object {
                    var imods := mods
                    var idx := 1
                    method asDebugString { "{asString}⟪{idx}⟫" }
                    method asString { "aListIterator" }
                    method hasNext { idx <= size }
                    method next {
                        if (imods != mods) then {
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
            method expandTo(newSize) is confidential {
                def newInner = _prelude.primitiveArray.new(newSize)
                for (0..(size-1)) do {i->
                    newInner.at(i)put(inner.at(i))
                }
                inner := newInner
            }
            method sortBy(sortBlock:Block2) {
                mods := mods + 1
                inner.sortInitial(size) by(sortBlock)
                self
            }
            method sort {
                sortBy { l, r ->
                    if (l == r) then {0}
                        elseif {l < r} then {-1}
                        else {1}
                }
            }
            method sortedBy(sortBlock:Block2) {
                copy.sortBy(sortBlock:Block2)
            }
            method sorted {
                copy.sort
            }
            method copy {
                outer.withAll(self)
            }
        }
    }
}


def unused = object {
    var unused := true
    def key is public = self
    def value is public = self
    method asString { "unused" }
    method == (other) { self.isMe(other) }
}

def removed = object {
    var removed := true
    def key is public = self
    def value is public = self
    method asString { "removed" }
    method == (other) { self.isMe(other) }
}

class set⟦T⟧ {

    method asString { "a set factory" }

    method withAll(a: Iterable⟦T⟧) -> Set⟦T⟧ {
        def cap = max (a.sizeIfUnknown{2} * 3 + 1, 8)
        def result = ofCapacity (cap)
        a.do { x -> result.add(x) }
        result
    }
    
    method empty -> Set⟦T⟧ {
        ofCapacity 8
    }

    class ofCapacity(cap) -> Set⟦T⟧ is confidential {
        inherit collection.TRAIT
        var mods is readable := 0
        var inner := _prelude.primitiveArray.new(cap)
        var size is readable := 0
        (0..(cap - 1)).do { i ->
            inner.at (i) put (unused)
        }

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
        method removeAll(elements)ifAbsent(block:Block1⟦T,Done⟧) {
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
            inner := _prelude.primitiveArray.new(cap)
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
            var s := "set\{"
            do {each -> s := s ++ each.asString }
                separatedBy { s := s ++ ", " }
            s ++ "\}"
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
            var i := 0
            var found := 0
            var candidate
            while {found < size} do {
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
                var imods:Number := mods
                var count := 1
                var idx := -1
                method hasNext { size >= count }
                method next {
                    var candidate
                    def innerSize = inner.size
                    while {
                        idx := idx + 1
                        if (imods != mods) then {
                            ConcurrentModification.raise (outer.asString)
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
            inner := _prelude.primitiveArray.new(n)
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
            if (Iterable.match(other)) then {
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
        method copy {
            outer.withAll(self)
        }
        method ++ (other) {
        // set union
            copy.addAll(other)
        }
        method -- (other) {
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
            (filter {each -> other.contains(each)}).asSet
        }
        method isSubset(s2: Set⟦T⟧) {
            self.do{ each ->
                if (s2.contains(each).not) then { return false }
            }
            return true
        }

        method isSuperset(s2: Iterable⟦T⟧) {
            s2.do{ each ->
                if (self.contains(each).not) then { return false }
            }
            return true
        }
        method into(existing: Expandable⟦T⟧) -> Collection⟦T⟧ {
            do { each -> existing.add(each) }
            existing
        }
    }
}

type Binding⟦K,T⟧ = {
    key -> K
    value -> T
    hash -> Number
    ==(other) -> Boolean
}

def binding = object {
    method asString { "binding class" }

    class key(k)value(v) {
        method key {k}
        method value {v}
        method asString { "{k}::{v}" }
        method hashcode { (k.hashcode * 1021) + v.hashcode }
        method hash { (k.hash * 1021) + v.hash }
        method == (other) {
            match (other)
                case {o:Binding -> (k == o.key) && (v == o.value) }
                case {_ -> return false }
        }
    }
}

type ComparableToDictionary⟦K,T⟧ = type {
    size -> Number
    at(_:K)ifAbsent(_) -> T
}

class dictionary⟦K,T⟧ {

    method asString { "a dictionary factory" }

    method withAll(initialBindings: Iterable⟦Binding⟦K,T⟧⟧) -> Dictionary⟦K,T⟧ {
        def result = empty
        for (initialBindings) do { b -> result.add(b) }
        result
    }

    class empty -> Dictionary⟦K,T⟧ {
        inherit collection.TRAIT⟦T⟧
        var mods is readable := 0
        var numBindings := 0
        var inner := _prelude.primitiveArray.new(8)
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
        method removeValue(v) ifAbsent (action:Block0⟦Unknown⟧) {
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
            inner := _prelude.primitiveArray.new(8)
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
            // do()separatedBy won't work, because it iterates over values,
            // and we need an iterator over bindings.
            var s := "dict⟬"
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
            s ++ "⟭"
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
        method keys -> Enumerable⟦K⟧ {
            def sourceDictionary = self
            object {
                inherit enumerable.TRAIT⟦K⟧
                class iterator {
                    def sourceIterator = sourceDictionary.bindingsIterator
                    method hasNext { sourceIterator.hasNext }
                    method next { sourceIterator.next.key }
                    method asString {
                        "an iterator over keys of {sourceDictionary}"
                    }
                }
                def size is public = sourceDictionary.size
                method asDebugString {
                    "a lazy sequence over keys of {sourceDictionary}"
                }
            }
        }
        method values -> Enumerable⟦T⟧ {
            def sourceDictionary = self
            object {
                inherit enumerable.TRAIT⟦T⟧
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
                method asDebugString {
                    "a lazy sequence over values of {sourceDictionary}"
                }
            }
        }
        method bindings -> Enumerable⟦T⟧ {
            def sourceDictionary = self
            object {
                inherit enumerable.TRAIT⟦T⟧
                method iterator { sourceDictionary.bindingsIterator }
                // should be request on outer
                def size is public = sourceDictionary.size
                method asDebugString {
                    "a lazy sequence over bindings of {sourceDictionary}"
                }
            }
        }
        method iterator -> Iterator⟦T⟧ { values.iterator }
        class bindingsIterator -> Iterator⟦Binding⟦K, T⟧⟧ {
            // this should be confidential, but can't be until `outer` is fixed.
            def imods:Number = mods
            var count := 1
            var idx := 0
            var elt
            method hasNext { size >= count }
            method next {
                if (imods != mods) then {
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
            inner := _prelude.primitiveArray.new(n)
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
            for (0..(inner.size-1)) do {i->
                def a = inner.at(i)
                if ((unused ≠ a) && (removed ≠ a)) then {
                    block1.apply(a.key)
                }
            }
        }
        method valuesDo(block1) {
            for (0..(inner.size-1)) do {i->
                def a = inner.at(i)
                if ((unused ≠ a) && (removed ≠ a)) then {
                    block1.apply(a.value)
                }
            }
        }
        method do(block1) { valuesDo(block1) }

        method ==(other) {
            match (other)
                case {o:ComparableToDictionary⟦K,V⟧ ->
                    if (self.size != o.size) then {return false}
                    self.keysAndValuesDo { k, v ->
                        if (o.at(k)ifAbsent{return false} != v) then {
                            return false
                        }
                    }
                    return true
                }
                case {_ ->
                    return false
                }
        }

        method copy {
            def newCopy = dictionary.empty
            self.keysAndValuesDo{ k, v ->
                newCopy.at(k)put(v)
            }
            newCopy
        }

        method asDictionary {
            self
        }

        method ++(other) {
            def newDict = self.copy
            other.keysAndValuesDo {k, v ->
                newDict.at(k) put(v)
            }
            return newDict
        }

        method --(other) {
            def newDict = dictionary.empty
            keysAndValuesDo { k, v ->
                if (! other.containsKey(k)) then {
                    newDict.at(k) put(v)
                }
            }
            return newDict
        }
    }
}

class range {
    method from(lower)to(upper) -> Sequence⟦Number⟧ {
        match (lower)
            case {_:Number -> }
            case {_ -> RequestError.raise ("lower bound {lower}" ++
                " in range.from({lower})to({upper}) is not an integer") }
        def start = lower.truncated
        if (start != lower) then {
            RequestError.raise ("lower bound {lower}" ++
                " in range.from({lower})to({upper}) is not an integer") }

        match (upper)
            case {_:Number -> }
            case {_ -> RequestError.raise ("upper bound {upper}" ++
                " in range.from({lower})to({upper}) is not an integer") }
        def stop = upper.truncated
        if (stop != upper) then {
            RequestError.raise ("upper bound {upper}" ++
                " in range.from()to() is not an integer")
        }

        uncheckedFrom (lower) to (upper)
    }

    method uncheckedFrom (lower) to (upper) -> Sequence⟦Number⟧ {
        object {
            inherit indexable.TRAIT⟦Number⟧
            def start = lower
            def stop = upper
            def size is public =
                if ((upper-lower+1) < 0) then { 0 } else {upper-lower+1}

            def hash is public = { ((start.hash * 1021) + stop.hash) * 3 }

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
            method contains(elem) -> Boolean {
                try {
                    def intElem = elem.truncated
                    if (intElem != elem) then {return false}
                    if (intElem < start) then {return false}
                    if (intElem > stop) then {return false}
                } catch { ex:_prelude.Exception -> return false }
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
            method ++(other) {
                sequence.withAll(lazyConcatenation(self, other))
            }
            method ==(other) {
                isEqual (self) toIterable (other)
            }
            method sorted { self }

            method sortedBy(c) { self.asList.sortBy(c) }

            method keys { 1..self.size }

            method values { self }

            method asString -> String{
                "range.from({lower})to({upper})"
            }

            method asList{
                var result := list.empty
                for (self) do { each -> result.add(each) }
                result
            }

            method asSequence {
                self
            }
        }
    }
    method from(upper)downTo(lower) -> Sequence⟦Number⟧ {
        object {
            inherit indexable.TRAIT
            match (upper)
                case {_:Number -> }
                case {_ -> RequestError.raise ("upper bound {upper}" ++
                    " in range.from({upper})downTo({lower}) is not an integer") }
            def start = upper.truncated
            if (start != upper) then {
                RequestError.raise ("upper bound {upper}" ++
                    " in range.from({upper})downTo({lower}) is not an integer")
            }
            match (lower)
                case {_:Number -> }
                case {_ -> RequestError.raise ("lower bound {lower}" ++
                    " in range.from({upper})downTo({lower}) is not an integer") }
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
                    method asString { "anIterator over {outer.asString} at {val}" }
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
            method contains(elem) -> Boolean {
                try {
                    def intElem = elem.truncated
                    if (intElem != elem) then {return false}
                    if (intElem > start) then {return false}
                    if (intElem < stop) then {return false}
                } catch { ex:_prelude.Exception -> return false }
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
            method ++(other) {
                sequence.withAll(lazyConcatenation(self, other))
            }
            method ==(other) {
                isEqual (self) toIterable (other)
            }
            method sorted { self.reversed }

            method sortedBy(c) { self.asList.sortBy(c) }

            method keys { 1..self.size }

            method values { self }

            method asString -> String {
                "range.from {upper} downTo {lower}"
            }
            method asSequence {
                self
            }
        }
    }
}
