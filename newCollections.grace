#pragma NativePrelude

def BoundsError = ProgrammingError.refine "BoundsError"
def Exhausted = ProgrammingError.refine "iterator Exhausted"
def SubobjectResponsibility = ProgrammingError.refine "SubobjectResponsibility"
def NoSuchObject = ProgrammingError.refine "no such object"
def RequestError = ProgrammingError.refine "inapproriate argument in method request"
def SizeUnknown = Exception.refine "the size is unknown"

method abstract {
    // repeated in StandardPrelude
    SubobjectResponsibility.raise "abstract method not overriden by subobject"
}

type Block0<R> = type {
    apply -> R
}

type Block1<T,R> = type {
    apply(a:T) -> R
}

type Block2<S,T,R> = type {
    apply(a:S, b:T) -> R
}

type SelfType = Unknown     // becuase it's not yet in the language

type Collection<T> = Object & type {
    isEmpty -> Boolean
    do(block1: Block1<T,Done>) -> Done
    do(body:Block1<T,Done>) separatedBy(separator:Block0<Done>) -> Done
    fold(blk:Block1<Object, T>) startingWith(initial:Object) -> Object
    map(blk:Block1<T,Object>) -> Iterator<Object>
    filter(condition:Block1<T,Boolean>) -> Iterator<T>
    iterator -> Iterator<T>
    ++(o: Collection<T>) -> Collection<T>
    asList -> List<T>
    asSequence -> Sequence<T>
    asSet -> Set<T>
}

type Enumerable<T> = Collection<T> & type {
    size -> Number  
        // may raise SizeUnknow if size is expensive to computer
    values -> Collection<T>
    asDictionary -> Dictionary<Number,T>
    keysAndValuesDo(action:Block2<Number,T,Object>) -> Done
    onto(resultFactory:EmptyCollectionFactory<T>) -> Collection<T>
    into(existing:Collection<Unknown>) -> Collection<Unknown>
    sortedBy(comparison:Block2<T,T,Number>) -> SelfType
    sorted -> SelfType
}

type Sequence<T> = Enumerable<T> & type {
    at(n:Number) -> T
    [](n:Number) -> T
    indices -> Sequence<Number>
    keys -> Sequence<Number>
    first -> T 
    second -> T
    third -> T
    fourth -> T 
    fifth -> T
    last -> T
    indexOf<W>(elem:T)ifAbsent(action:Block0<W>) -> Number | W
    indexOf(elem:T) -> Number
    contains(elem:T) -> Boolean
    reversed -> Sequence<T>
}

type List<T> = Sequence<T> & type {
    add(*x: T) -> List<T>
    addFirst(*x: T) -> List<T>
    addAllFirst(xs:Collection<T>) -> List<T>
    addLast(x: T) -> List<T>    // same as add
    at(ix:Number) put(v:T) -> List<T>
    []:= (ix:Number, v:T) -> Done
    removeFirst -> T 
    removeAt(n: Number) -> T
    removeLast -> T
    remove(*v:T)
    remove(*v:T) ifAbsent(action:Block0<Done>)
    removeAll(vs: Collection<T>)
    removeAll(vs: Collection<T>) ifAbsent(action:Block0<Done>)
    indexOf(v:T)
    indexOf<U>(v:T) ifAbsent(action:Block0<U>)
    pop -> T
    first -> T 
    second -> T
    third -> T
    fourth -> T
    fifth -> T
    last -> T 
    ++(o: List<T>) -> List<T>
    addAll(l: Collection<T>) -> List<T>
    copy -> List<T>
    sort -> List<T>
    sortBy(sortBlock:Block2<T,T,Number>) -> List<T>
    reverse -> List<T>
}

type Set<T> = Collection<T> & type {
    size -> Number
    add(*elements:T) -> SelfType
    addAll(elements:Collection<T>) -> SelfType
    remove(*elements: T) -> Set<T>
    remove(*elements: T) ifAbsent(block: Block0<Done>) -> Set<T>
    includes(booleanBlock: Block1<T,Boolean>) -> Boolean
    find(booleanBlock: Block1<T,Boolean>) ifNone(notFoundBlock: Block0<T>) -> T
    copy -> Set<T>
    contains(elem:T) -> Boolean
    ** (other:Set<T>) -> Set<T>
    -- (other:Set<T>) -> Set<T>
    ++ (other:Set<T>) -> Set<T>
    removeAll(elems:Collection<T>)
    removeAll(elems:Collection<T>)ifAbsent(action:Block0<Done>) -> Set<T>
    onto(resultFactory:EmptyCollectionFactory<T>) -> Collection<T>
    into(existing:Collection<Unknown>) -> Collection<Unknown>
}

type Dictionary<K,T> = Collection<T> & type {
    size -> Number
    containsKey(k:K) -> Boolean
    containsValue(v:T) -> Boolean
    contains(elem:T) -> Boolean
    at(key:K)ifAbsent(action:Block0<Unknown>) -> Unknown
    at(key:K)put(value:T) -> Dictionary<K,T>
    []:= (k:K, v:T) -> Done
    at(k:K) -> T
    [] (k:K) -> T
    removeAllKeys(keys:Collection<K>) -> Dictionary<K,T>
    removeKey(*keys:K) -> Dictionary<K,T>
    removeAllValues(removals:Collection<T>) -> Dictionary<K,T>
    removeValue(*removals:T) -> Dictionary<K,T>
    keys -> Enumerable<K>
    values -> Enumerable<T>
    bindings -> Enumerable<Binding<K,T>>
    keysAndValuesDo(action:Block2<K,T,Done>) -> Done
    keysDo(action:Block1<K,Done>) -> Done
    valuesDo(action:Block1<T,Done>) -> Done
    == (other:Object) -> Boolean
    copy -> Dictionary<K,T>
    ++ (other:Dictionary<K, T>) -> Dictionary<K, T>
    -- (other:Dictionary<K, T>) -> Dictionary<K, T>
    asDictionary -> Dictionary<K, T>
}

type Iterator<T> = type {
    hasNext -> Boolean
    next -> T
}

type CollectionFactory<T> = type {
    withAll<T> (elts:Collection<T>) -> Collection<T>
    with<T> (*elts:Object) -> Collection<T>
    empty<T> -> Collection<T>
}

type EmptyCollectionFactory<T> = type {
    empty<T> -> Collection<T>
}

class collectionFactory.trait<T> {
    method withAll(elts:Collection<T>) -> Collection<T> { abstract }
    method with(*a:T) -> Unknown { self.withAll(a) }
    method empty -> Unknown { self.with() }
}

factory method lazySequenceOver<T,R>(source:Collection<T>)
        mappedBy(function:Block1<T,R>) -> Enumerable<R> is confidential {
    inherits lazySequence.trait<T>
    factory method iterator {
        def sourceIterator = source.iterator
        method asString { "an iterator over a lazy map sequence" }
        method hasNext { sourceIterator.hasNext }
        method next { function.apply(sourceIterator.next) }
    }
    method size { source.size }
    method asDebugString { "a lazy sequence mapping over {source}" }
}

factory method lazySequenceOver<T>(source:Collection<T>) 
        filteredBy(predicate:Block1<T,Boolean>) -> Enumerable<T> is confidential {
    inherits lazySequence.trait<T>
    factory method iterator {
        var cache
        var cacheLoaded := false
        def sourceIterator = source.iterator
        method asString { "an iterator over filtered {source}" }
        method hasNext {
        // To determine if this iterator has a next element, we have to find
        // an acceptable element; this is then cached, for the use of next
            if (cacheLoaded) then { return true }
            try {
                cache := nextAcceptableElement
                cacheLoaded := true
            } catch { ex:Exhausted -> return false }
            return true
        }
        method next {
            if (cacheLoaded.not) then { cache := nextAcceptableElement }
            cacheLoaded := false
            return cache
        }
        method nextAcceptableElement is confidential {
        // return the next element of the underlying iterator satisfying
        // predicate; if there is none, raises Exhausted.
            while { true } do {
                def outerNext = sourceIterator.next
                def acceptable = predicate.apply(outerNext)
                if (acceptable) then { return outerNext }
            }
        }
    }
    method size { SizeUnknown.raise "size requested on {asDebugString}" }
    method asDebugString { "a lazy sequence filtering {source}" }
    method asString { super.asString }  // fix code generator bug
}
factory method iteratorConcat<T>(left:Iterator<T>, right:Iterator<T>) {
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
factory method lazyConcatenation<T>(left, right) -> Enumerable<T>{
    inherits lazySequence.trait<T>
    method iterator {
        iteratorConcat(left.iterator, right.iterator)
    }
    method asDebugString { "lazy concatenation of {left} and {right}" }
    method asString { super.asString }
    method size { left.size + right.size }  // may raise SizeUnknown
}

class collection.trait<T> {
    method do { abstract }
    method iterator { abstract }
    method size { abstract }
    method isEmpty {
        try { return size == 0 } 
            catch { _:SizeUnknown -> return iterator.hasNext.not }
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
    method map<R>(block1:Block1<T,R>) -> Enumerable<R> {
        lazySequenceOver(self) mappedBy(block1)
    }
    method filter(selectionCondition:Block1<T,Boolean>) -> Enumerable<T> {
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

class lazySequence.trait<T> {
    inherits collection.trait<T>
    method iterator { abstract }
    method size { 
        // override if size is known
        SizeUnknown.raise "size requested on {asDebugString}"
    }
    method asSet -> Set<T> {
        set.withAll(self)
    }
    method asList -> List<T> {
        list.withAll(self)
    }
    method asSequence -> Sequence<T> {
        sequence.withAll(self)
    }    
    method asDictionary {
        def result = dictionary.empty
        keysAndValuesDo { k, v ->
            result.at(k) put(v)
        }
        return result
    }
    method onto(f: CollectionFactory<T>) -> Collection<T> {
        f.withAll(self)
    }
    method into(existing: Collection<T>) -> Collection<T> {
        def selfIterator = self.iterator
        while {selfIterator.hasNext} do { 
            existing.add(selfIterator.next)
        }
        existing
    }
    method ==(other) {
        // TODO: fix inheritance!  This whole method is copied from sequence.
//        print "entering lazySequence.trait == method"
        match (other)
            case {o:Collection ->
                def selfIter = self.iterator
                def otherIter = other.iterator
                while {selfIter.hasNext && otherIter.hasNext} do {
                    if (selfIter.next != otherIter.next) then {
                        return false
                    }
                }
                def result = selfIter.hasNext == otherIter.hasNext
//                print "    leaving == with {result}"
                return result
            } 
            case {_ ->
//                print "    other not a Collection"
                return false
            }
    }
    method do(block1:Block1<T,Done>) -> Done {
        def selfIterator = self.iterator
        while {selfIterator.hasNext} do { 
            block1.apply(selfIterator.next)
        }
    }
    method keysAndValuesDo(block2:Block2<Number,T,Done>) -> Done {
        var ix := 0
        def selfIterator = self.iterator
        while {selfIterator.hasNext} do { 
            ix := ix + 1
            block2.apply(ix, selfIterator.next)
        }
    }
    method values -> Collection<T> {
        self
    }
    method fold<R>(block2)startingWith(initial) -> R {
        var res := initial
        while { self.hasNext } do { res := block2.apply(res, self.next) }
        return res
    }
    method ++ (other) -> Enumerable<T> {
        lazyConcatenation(self, other)
    }
    method sortedBy(sortBlock:Block2) -> List<T> {
        self.asList.sortBy(sortBlock:Block2)
    }
    method sorted -> List<T> {
        self.asList.sort
    }
    method asString {
        var s := "⟨"
        do { each -> s := s ++ each.asString } separatedBy { s := s ++ ", " }
        s ++ "⟩"
    }
}

class indexable.trait<T> {
    inherits collection.trait<T>
    method at { abstract }
    method size { abstract }
    method keysAndValuesDo(action:Block2<Number,T,Done>) -> Done {
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
    method [](ix) { at(ix) }
    method indices { range.from 1 to(size) }
    method indexOf(sought:T)  {
        indexOf(sought) ifAbsent { NoSuchObject.raise "{sought} not in collection" }
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
    method onto(f: CollectionFactory<T>) -> Collection<T> {
        f.withAll(self)
    }
    method into(existing: Collection<T>) -> Collection<T> {
        def selfIterator = self.iterator
        while {selfIterator.hasNext} do { 
            existing.add(selfIterator.next)
        }
        existing
    }
}

method max(a,b) is confidential {
    if (a > b) then { a } else { b }
}

factory method sequence<T> {
    inherits collectionFactory.trait<T>
    
    method withAll(*a:Collection) {
        var forecastSize := 0
        var sizeUncertain := false
        // size might be uncertain if one of the arguments is a lazy collection.
        for (a) do { arg ->
            try {
                forecastSize := forecastSize + arg.size
            } catch { _:SizeUnknown -> 
                forecastSize := forecastSize + 8
                sizeUncertain := true
            }
        }
        var inner := _prelude.PrimitiveArray.new(forecastSize)
        var innerSize := inner.size
        var ix := 0
        if (sizeUncertain) then {
            // less-than-optimal path
            for (a) do { arg ->
                for (arg) do { elt ->
                    if (innerSize <= ix) then {
                        def newInner = _prelude.PrimitiveArray.new(innerSize*2)
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
        } else {
            // common, fast path
            for (a) do { arg ->
                for (arg) do { elt ->
                    inner.at(ix)put(elt)
                    ix := ix + 1
                }
            }
        }
        self.fromPrimitiveArray(inner, ix)
    }
    method fromPrimitiveArray(pArray, sz) is confidential {
        object {
            inherits indexable.trait
            def size is public = sz
            def inner = pArray

            method boundsCheck(n) is confidential {
                if ((n < 1) || (n > size)) then {
                    BoundsError.raise "index {n} out of bounds 1..{size}" 
                }
            }
            method at(n) {
                boundsCheck(n)
                inner.at(n-1)
            }
            method [](n) {
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
                def freshArray = _prelude.PrimitiveArray.new(size)
                var ix := size - 1
                do { each -> 
                    freshArray.at (ix) put(each)
                    ix := ix - 1
                }
                outer.fromPrimitiveArray(freshArray, size)
            }
            method ++(other:Collection) {
                sequence.withAll(self, other)
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
                match (other)
                    case {o:Collection ->
                        def selfIter = self.iterator
                        def otherIter = other.iterator
                        while {selfIter.hasNext && otherIter.hasNext} do {
                            if (selfIter.next != otherIter.next) then {
                                return false
                            }
                        }
                        return selfIter.hasNext == otherIter.hasNext
                    } 
                    case {_ ->
                        return false
                    }
            }
            method iterator {
                object {
                    var idx := 1
                    method asDebugString { "{asString}⟪{idx}⟫" }
                    method asString { "aSequenceIterator" }
                    method hasNext { idx <= sz }
                    method next {
                        if (idx > sz) then { Exhausted.raise "on sequence {outer}⟪{idx}⟫" }
                        def ret = at(idx)
                        idx := idx + 1
                        ret
                    }
                }
            }
            method sorted {
                asList.sortBy { l, r ->
                    if (l == r) then {0} 
                        elseif (l < r) then {-1} 
                        else {1}
                }.asSequence
            }
            method sortedBy(sortBlock:Block2){
                asList.sortBy(sortBlock:Block2).asSequence
            }
        }
    }
}

factory method list<T> {
    inherits collectionFactory.trait<T>

    method withAll(a:Collection<T>) -> List<T> {
        if (engine == "js") then {
            return object {
                inherits indexable.trait<T>
                var sz := 0
                var jsArray := native "js" code ‹var result = [];›
                a.do { each ->
                    native "js" code ‹this.data.jsArray.push(var_each);›
                }


                method boundsCheck(n) is confidential {
                    native "js" code ‹var ix = var_n._value;
                            if ((ix < 1) || (ix > this.data.jsArray.length)) {
                                var msg = "index " + ix + " out of bounds 1.." + this.data.jsArray.length;
                                var BoundsError = callmethod(Grace_prelude, "BoundsError", [0]);
                                callmethod(BoundsError,"raise", [1], new GraceString(msg));
                            }›
                    if ((n < 1) || (n > size)) then {
                        BoundsError.raise "index {n} out of bounds 1..{size}" 
                    }
                }
                

                method size {
                    native "js" code ‹return new GraceNum(this.data.jsArray.length)›
                    sz
                }
                

                method at(n) {
                    native "js" code ‹var ix = var_n._value;
                            if ((ix < 1) || (ix > this.data.jsArray.length)) {
                                var msg = "index " + ix + " out of bounds 1.." + this.data.jsArray.length;
                                var BoundsError = callmethod(Grace_prelude, "BoundsError", [0]);
                                callmethod(BoundsError, "raise", [1], new GraceString(msg));
                            }
                            return this.data.jsArray[ix - 1];›
                }
                

                method [](n) {
                    native "js" code ‹var ix = var_n._value;
                            if ((ix < 1) || (ix > this.data.jsArray.length)) {
                                var msg = "index " + ix + " out of bounds 1.." + this.data.jsArray.length;
                                var BoundsError = callmethod(Grace_prelude, "BoundsError", [0]);
                                callmethod(BoundsError, "raise", [1], new GraceString(msg));
                            }
                            return this.data.jsArray[ix - 1];›
                }
                

                method at(n)put(x) {
                    native "js" code ‹var  ix = var_n._value;
                            if ((ix < 1) || (ix > this.data.jsArray.length + 1)) {
                                var msg = "index " + ix + " out of bounds 1.." + this.data.jsArray.length;
                                var BoundsError = callmethod(Grace_prelude, "BoundsError", [0]);
                                callmethod(BoundsError, "raise", [1], new GraceString(msg));
                            }
                            this.data.jsArray[ix-1] = var_x;
                            return this;›
                }

                method []:=(n, x) {
                    native "js" code ‹var ix = var_n._value;
                            if ((ix < 1) || (ix > this.data.jsArray.length + 1)) {
                                var msg = "index " + ix + " out of bounds 1.." + this.data.jsArray.length;
                                var BoundsError = callmethod(Grace_prelude, "BoundsError", [0]);
                                callmethod(BoundsError, "raise", [1], new GraceString(msg));
                            }
                            this.data.jsArray[ix-1] = var_x;
                            return GraceDone;›
                }

                method add(*x) {
                    if (x.size == 1) then {
                        native "js" code ‹var v = callmethod(var_x, "first", [0]);
                            this.data.jsArray.push(v);
                            return this;›
                    }
                    addAll(x)
                }

                method push(x) {
                    native "js" code ‹this.data.jsArray.push(var_x);
                            return this;›
                }

                method removeLast {
                    def result = self.at(size)
                    native "js" code ‹if (this.data.jsArray.length = 0) {
                                var msg = "index " + ix + " out of bounds 1.." + this.data.jsArray.length;
                                var BoundsError = callmethod(Grace_prelude, "BoundsError", [0]);
                                callmethod(BoundsError, "raise", [1], new GraceString(msg));
                            } else return this.data.jsArray.pop();›
                }

                method addAllFirst(l) {
                    var ix := l.size;
                    while {ix > 0} do {
                        def each = l.at(ix)
                        ix := ix - 1
                        native "js" code ‹this.data.jsArray.unshift(var_each);›
                    }
                    self
                }

                method removeAt(n) {
                    def removed = self.at(n)    // does the bounds check
                    native "js" code ‹this.data.jsArray.splice(var_n._value - 1, 1);›
                    return removed
                }
                
                method sortBy(sortBlock:Block2) {
                    native "js" code ‹var compareFun = function compareFun(a, b) {
                              var res = callmethod(var_sortBlock, "apply", [2], a, b);
                              if (res.className == "number") return res._value;
                              throw new GraceExceptionPacket(TypeErrorObject,
                                     new GraceString("sort block in list.sortBy method did not return a number"));
                          }
                          this.data.jsArray.sort(compareFun);›
                    self
                }
                // end of native methods

                
                method addLast(*x) { addAll(x) }    // compatibility
                method addAll(l) {
                    for (l) do { each -> push(each) }
                    self
                }

                method addFirst(*l) { addAllFirst(l) }
                

                method removeFirst {
                    removeAt(1)
                }
                

                method remove(*v:T) {
                    removeAll(v)
                }
                

                method remove(*v:T) ifAbsent(action:Block0<Done>) {
                    removeAll(v) ifAbsent (action)
                }
                

                method removeAll(vs: Collection<T>) {
                    removeAll(vs) ifAbsent { NoSuchObject.raise "object not in list" }
                }
                

                method removeAll(vs: Collection<T>) ifAbsent(action:Block0<Done>)  {
                    for (vs) do { each -> 
                        def ix = self.indexOf(each) ifAbsent {return action.apply}
                        removeAt(ix)
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
                    match (other)
                        case {o:Collection ->
                            def selfIter = self.iterator
                            def otherIter = other.iterator
                            while {selfIter.hasNext && otherIter.hasNext} do {
                                if (selfIter.next != otherIter.next) then {
                                    return false
                                }
                            }
                            return selfIter.hasNext == otherIter.hasNext
                        } 
                        case {_ ->
                            return false
                        }
                }

                method iterator {
                    object {
                        var idx := 1
                        method asDebugString { "{asString}⟪{idx}⟫" }
                        method asString { "aListIterator" }
                        method hasNext { idx <= size }
                        method next {
                            if (idx > size) then { Exhausted.raise "on list" }
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
                    sortBy { l, r ->
                        if (l == r) then {0} 
                            elseif (l < r) then {-1} 
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
        }   // end of if (engine == "js") then ...

        object {
            // the new list object without native code
            inherits indexable.trait<T>
            var initialSize
            try { initialSize := a.size * 2 + 1 } 
                catch { _ex:SizeUnknown -> initialSize := 9 }
            var inner := _prelude.PrimitiveArray.new(initialSize)
            var size is public := 0
            for (a) do {x->
                inner.at(size)put(x)
                size := size + 1
            }
            method boundsCheck(n) is confidential {
                if ((n < 1) || (n > size)) then {
                    BoundsError.raise "index {n} out of bounds 1..{size}" 
                }
            }
            method at(n) {
                boundsCheck(n)
                inner.at(n-1)
            }
            method [](n) {
                boundsCheck(n)
                inner.at(n-1)
            }
            method at(n)put(x) {
                if (n == (size+1)) then {
                    addLast(x)
                } else {
                    boundsCheck(n)
                    inner.at(n-1)put(x)
                }
                self
            }
            method []:=(n,x) {
                if (n == (size+1)) then {
                    addLast(x)
                } else {
                    boundsCheck(n)
                    inner.at(n-1)put(x)
                }
                done
            }
            method add(*x) {
                addAll(x)
            }
            method addAll(l) {
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
                if (size == inner.size) then { expandTo(inner.size * 2) }
                inner.at(size)put(x)
                size := size + 1
                self
            }
            method addLast(*x) { addAll(x) }    // compatibility
            method removeLast {
                def result = inner.at(size - 1)
                size := size - 1
                result
            }
            method addAllFirst(l) {
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
            method addFirst(*l) { addAllFirst(l) }
            method removeFirst {
                removeAt(1)
            }
            method removeAt(n) {
                boundsCheck(n)
                def removed = inner.at(n-1)
                for (n..(size-1)) do {i->
                    inner.at(i-1)put(inner.at(i))
                }
                size := size - 1
                return removed
            }
            method remove(*v:T) {
                removeAll(v)
            }
            method remove(*v:T) ifAbsent(action:Block0<Done>) {
                removeAll(v) ifAbsent (action)
            }
            method removeAll(vs: Collection<T>) {
                removeAll(vs) ifAbsent { NoSuchObject.raise "object not in list" }
            }
            method removeAll(vs: Collection<T>) ifAbsent(action:Block0<Done>)  {
                for (vs) do { each -> 
                    def ix = indexOf(each) ifAbsent {return action.apply}
                    removeAt(ix)
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
            method extend(l) { addAll(l); done }    // compatibility
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
                match (other)
                    case {o:Collection ->
                        def selfIter = self.iterator
                        def otherIter = other.iterator
                        while {selfIter.hasNext && otherIter.hasNext} do {
                            if (selfIter.next != otherIter.next) then {
                                return false
                            }
                        }
                        return selfIter.hasNext == otherIter.hasNext
                    } 
                    case {_ ->
                        return false
                    }
            }
            method iterator {
                object {
                    var idx := 1
                    method asDebugString { "{asString}⟪{idx}⟫" }
                    method asString { "aListIterator" }
                    method hasNext { idx <= size }
                    method next {
                        if (idx > size) then { Exhausted.raise "on list" }
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
                def newInner = _prelude.PrimitiveArray.new(newSize)
                for (0..(size-1)) do {i->
                    newInner.at(i)put(inner.at(i))
                }
                inner := newInner
            }
            method sortBy(sortBlock:Block2) {
                inner.sortInitial(size) by(sortBlock)
                self
            }
            method sort {
                sortBy { l, r ->
                    if (l == r) then {0} 
                        elseif (l < r) then {-1} 
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
factory method set<T> {
    inherits collectionFactory.trait<T>

    method withAll(a:Collection<T>) -> Set<T> {
        object {
            inherits collection.trait
            var initialSize
            try { initialSize := max(a.size * 3 + 1, 8) } 
                catch { _:SizeUnknown -> initialSize := 8 }
            var inner := _prelude.PrimitiveArray.new(initialSize)
            def unused = object { 
                var unused := true 
                method asString { "unused" }
            }
            def removed = object { 
                var removed := true 
                method asString { "removed" }
            }
            var size is public := 0
            for (0..(initialSize - 1)) do {i->
                inner.at(i)put(unused)
            }
            for (a) do { x-> add(x) }

            method addAll(elements) {
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
            
            method add(*elements) { addAll(elements) }

            method removeAll(elements) {
                for (elements) do { x ->
                    remove (x) ifAbsent {
                        NoSuchObject.raise "set does not contain {x}"
                    }
                }
                self    // for chaining
            }
            method removeAll(elements)ifAbsent(block) {
                for (elements) do { x ->
                    var t := findPosition(x)
                    if (inner.at(t) == x) then {
                        inner.at(t) put (removed)
                        size := size - 1
                    } else { 
                        block.apply
                    }
                }
                self    // for chaining
            }
            
            method remove(*elements)ifAbsent(block) {
                removeAll(elements) ifAbsent(block)
            }
            
            method remove(*elements) {
                removeAll(elements)
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
                    candidate != unused
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
                    (candidate != unused).andAlso{candidate != removed}
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
                    if ((candidate != unused).andAlso{candidate != removed}) then {
                        found := found + 1
                        block1.apply(candidate)
                    }
                    i := i + 1
                }
            }
            method iterator {
                object {
                    var count := 1
                    var idx := -1
                    method hasNext { size >= count }
                    method next {
                        var candidate
                        def innerSize = inner.size
                        while {
                            idx := idx + 1
                            if (idx >= innerSize) then {
                                Exhausted.raise "iterator over {outer.asString}"
                            }
                            candidate := inner.at(idx)
                            (candidate == unused).orElse{candidate == removed}
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
                inner := _prelude.PrimitiveArray.new(n)
                for (0..(inner.size-1)) do {i->
                    inner.at(i)put(unused)
                }
                for (0..(oldInner.size-1)) do {i->
                    if ((oldInner.at(i) != unused).andAlso{oldInner.at(i) != removed}) then {
                        add(oldInner.at(i))
                    }
                }
            }
            method ==(other) {
                match (other)
                    case {o:Collection ->
                        var oSize := 0
                        o.do { each ->
                            oSize := oSize + 1
                            if (! self.contains(each)) then {
                                return false
                            }
                        }
                        return oSize == self.size
                    } 
                    case {_ ->
                        return false
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
            method onto(f: CollectionFactory<T>) -> Collection<T> {
                f.withAll(self)
            }
            method into(existing: Collection<T>) -> Collection<T> {
                do { each -> existing.add(each) }
                existing
            }
        }
    }
}

type Binding<K,T> = {
    key -> K
    value -> T
    hash -> Number
    == -> Boolean
}

class binding.key(k)value(v) {
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

factory method dictionary<K,T> {
    inherits collectionFactory.trait<T>
    method at(k:K)put(v:T) {
            self.empty.at(k)put(v)
    }
    method withAll(initialBindings:Collection<Binding<K,T>>) -> Dictionary<K,T> {
        object {
            inherits collection.trait<T>
            var numBindings := 0
            var inner := _prelude.PrimitiveArray.new(8)
            def unused = object { 
                var unused := true
                def key is public = self
                def value is public = self
                method asString { "unused" }
            }
            def removed = object { 
                var removed := true
                def key is public = self
                def value is public = self
                method asString { "removed" }
            }
            for (0..(inner.size-1)) do {i->
                inner.at(i)put(unused)
            }
            for (initialBindings) do { b -> at(b.key)put(b.value) }
            method size { numBindings }
            method at(key')put(value') {
                var t := findPositionForAdd(key')
                if ((inner.at(t) == unused).orElse{inner.at(t) == removed}) then {
                    numBindings := numBindings + 1
                }
                inner.at(t)put(binding.key(key')value(value'))
                if ((size * 2) > inner.size) then { expand }
                self    // for chaining
            }
            method []:=(k, v) { 
                at(k)put(v) 
                done
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
                return action.apply
            }
            method [](k) { at(k) }
            method containsKey(k) {
                var t := findPosition(k)
                if (inner.at(t).key == k) then {
                    return true
                }
                return false
            }
            method removeAllKeys(keys) {
                for (keys) do { k ->
                    var t := findPosition(k)
                    if (inner.at(t).key == k) then {
                        inner.at(t)put(removed)
                        numBindings := numBindings - 1
                    } else {
                        NoSuchObject.raise "dictionary does not contain entry with key {k}"
                    }
                }
                return self
            }
            method removeKey(*keys) {
                removeAllKeys(keys)
            }
            method removeAllValues(removals) {
                for (0..(inner.size-1)) do {i->
                    def a = inner.at(i)
                    if (removals.contains(a.value)) then {
                        inner.at(i)put(removed)
                        numBindings := numBindings - 1
                    }
                }
                return self
            }
            method removeValue(*removals) {
                removeAllValues(removals)
            }
            method containsValue(v) {
                self.valuesDo{ each ->
                    if (v == each) then { return true }
                }
                return false
            }
            method contains(v) { containsValue(v) }
            method findPosition(x) is confidential {
                def h = x.hash
                def s = inner.size
                var t := h % s
                var jump := 5
                while {inner.at(t) != unused} do {
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
                while {(inner.at(t) != unused).andAlso{inner.at(t) != removed}} do {
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
                    if ((a != unused) && (a != removed)) then {
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
                    if ((a != unused) && (a != removed)) then {
                        s := s ++ "{i}→{a.key}::{a.value}"
                    } else {
                        s := s ++ "{i}→{a.asDebugString}"
                    }
                }
                s ++ "⟭"
            }
            method keys -> Enumerable<K> {
                def sourceDictionary = self
                object {
                    inherits lazySequence.trait<K>
                    factory method iterator {
                        def sourceIterator = sourceDictionary.bindingsIterator
                        method hasNext { sourceIterator.hasNext }
                        method next { sourceIterator.next.key }
                        method asString { 
                            "an iterator over keys of {sourceDictionary}"
                        }
                    }
                    def size is public = sourceDictionary.size
                    method asString { super.asString }  // TODO: fix js code generator bug!
                    method ==(other) { super == other } // TODO: fix js code generator bug!
                    method asDebugString { 
                        "a lazy sequence over keys of {sourceDictionary}"
                    }
                }
            }
            method values -> Enumerable<T> {
                def sourceDictionary = self
                object {
                    inherits lazySequence.trait<T>
                    factory method iterator {
                        def sourceIterator = sourceDictionary.bindingsIterator
                        // should be request on outer
                        method hasNext { sourceIterator.hasNext }
                        method next { sourceIterator.next.value }
                        method asString { 
                            "an iterator over values of {sourceDictionary}"
                        }
                    }
                    def size is public = sourceDictionary.size
                    method asString { super.asString }  // TODO: fix code generator bug!
                    method ==(other) { 
                        // TODO: fix code generator bug!
//                        print "requesting super =="
                        def result = (super == other)
//                        print "done requesting super =="
                        return result
                    }
                    method asDebugString {
                        "a lazy sequence over values of {sourceDictionary}"
                    }
                }
            }
            method bindings -> Enumerable<T> {
                def sourceDictionary = self
                object {
                    inherits lazySequence.trait<T>
                    method iterator { sourceDictionary.bindingsIterator }
                    // should be request on outer
                    def size is public = sourceDictionary.size
                    method asDebugString { 
                        "a lazy sequence over bindings of {sourceDictionary}"
                    }
                }
            }
            method iterator -> Iterator<T> { values.iterator }
            factory method bindingsIterator -> Iterator<Binding<K, T>> {
                // this should be confidential, but can't be until `outer` is fixed.
                var count := 1
                var idx := 0
                var elt
                method hasNext { size >= count }
                method next {
                    if (size < count) then {
                        Exhausted.raise "over {outer.asString}"
                    }
                    while {
                        elt := inner.at(idx)
                        (elt == unused) || (elt == removed)
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
                inner := _prelude.PrimitiveArray.new(n)
                for (0..(n - 1)) do {i->
                    inner.at(i)put(unused)
                }
                numBindings := 0
                for (0..(c - 1)) do {i->
                    def a = oldInner.at(i)
                    if ((a != unused).andAlso{a != removed}) then {
                        self.at(a.key)put(a.value)
                    }
                }
            }
            method keysAndValuesDo(block2) {
                 for (0..(inner.size-1)) do {i->
                    def a = inner.at(i)
                    if ((a != unused).andAlso{a != removed}) then {
                        block2.apply(a.key, a.value)
                    }
                }
            }
            method keysDo(block1) {
                 for (0..(inner.size-1)) do {i->
                    def a = inner.at(i)
                    if ((a != unused).andAlso{a != removed}) then {
                        block1.apply(a.key)
                    }
                }
            }
            method valuesDo(block1) {
                 for (0..(inner.size-1)) do {i->
                    def a = inner.at(i)
                    if ((a != unused).andAlso{a != removed}) then {
                        block1.apply(a.value)
                    }
                }
            }
            method do(block1) { valuesDo(block1) }

            method ==(other) {
                match (other)
                    case {o:Dictionary ->
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
}

factory method range {
    method from(lower)to(upper) -> Sequence<Number> {
        object {
            inherits indexable.trait<Number>
            match (lower)
                case {_:Number -> }
                case {_ -> RequestError.raise "lower bound {lower}" ++
                    " in range.from({lower})to({upper}) is not an integer" }
            def start = lower.truncated
            if (start != lower) then {
                RequestError.raise "lower bound {lower}" ++
                    " in range.from({lower})to({upper}) is not an integer" }

            match (upper)
                case {_:Number -> }
                case {_ -> RequestError.raise "upper bound {upper}" ++
                    " in range.from({lower})to({upper}) is not an integer" }
            def stop = upper.truncated
            if (stop != upper) then {
                RequestError.raise "upper bound {upper}" ++
                    " in range.from()to() is not an integer"
            }

            def size is public =
                if ((upper-lower+1) < 0) then { 0 } else {upper-lower+1}

            def hash is public = { ((start.hash * 1021) + stop.hash) * 3 }

            method iterator -> Iterator {
                object {
                    var val := start
                    method hasNext { val <= stop }
                    method next {
                        if (val > stop) then { 
                            Exhausted.raise "over {outer.asString}" 
                        }
                        val := val + 1
                        return (val - 1)
                    }
                    method asString { "{super.asString} from {upper} to {lower}" }
                }
            }
            method at(ix:Number) {
                if (ix > self.size) then {
                    BoundsError.raise "requested range.at({ix}), but upper bound is {size}"
                }
                if (ix < 1) then {
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
                sequence.withAll(self, other)
            }
            method ==(other) {
                match (other)
                    case {o:Collection ->
                        def selfIter = self.iterator
                        def otherIter = other.iterator
                        while {selfIter.hasNext && otherIter.hasNext} do {
                            if (selfIter.next != otherIter.next) then {
                                return false
                            }
                        }
                        return selfIter.hasNext == otherIter.hasNext
                    } 
                    case {_ ->
                        return false
                    }
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
    method from(upper)downTo(lower) -> Sequence<Number> {
        object {
            inherits indexable.trait
            match (upper)
                case {_:Number -> }
                case {_ -> RequestError.raise "upper bound {upper}" ++
                    " in range.from({upper})downTo({lower}) is not an integer" }
            def start = upper.truncated
            if (start != upper) then {
                RequestError.raise "upper bound {upper}" ++
                    " in range.from({upper})downTo({lower}) is not an integer"
            }
            match (lower)
                case {_:Number -> }
                case {_ -> RequestError.raise "lower bound {lower}" ++
                    " in range.from({upper})downTo({lower}) is not an integer" }
            def stop = lower.truncated
            if (stop != lower) then {
                RequestError.raise "lower bound {lower}" ++
                    " in range.from({upper})downTo({lower}) is not an integer"
            }
            def size is public = 
                if ((upper-lower+1) < 0) then { 0 } else {upper-lower+1}
            method iterator {
                object {
                    var val := start
                    method hasNext { val >= stop }
                    method next {
                        if (val < stop) then { Exhausted.raise "over {outer.asString}" }
                        val := val - 1
                        return (val + 1)
                    }
                    method asString { "anIterator over {super.asString}" }
                }
            }
            method at(ix:Number) {
                if (ix > self.size) then {
                    BoundsError.raise "requested range.at({ix}) but upper bound is {size}"
                }
                if (ix < 1) then {
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
                sequence.withAll(self, other)
            }
            method ==(other) {
                match (other)
                    case {o:Collection ->
                        def selfIter = self.iterator
                        def otherIter = other.iterator
                        while {selfIter.hasNext && otherIter.hasNext} do {
                            if (selfIter.next != otherIter.next) then {
                                return false
                            }
                        }
                        return selfIter.hasNext == otherIter.hasNext
                    } 
                    case {_ ->
                        return false
                    }
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

