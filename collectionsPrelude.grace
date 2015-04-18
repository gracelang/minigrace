#pragma NativePrelude

def BoundsError = ProgrammingError.refine "BoundsError"
def Exhausted = ProgrammingError.refine "iterator Exhausted"
def SubobjectResponsibility = ProgrammingError.refine "SubobjectResponsibility"
def NoSuchObject = ProgrammingError.refine "no such object"
def RequestError = ProgrammingError.refine "inapproriate argument in method request"

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
    contains(element) -> Boolean
}

type ReifiedCollection<T> = Collection<T> & type {
    size -> Number
}

type Sequence<T> = ReifiedCollection<T> & type {
    at(n:Number) -> T
    [](n:Number) -> T
    indices -> ReifiedCollection<T>
    first -> T 
    second -> T
    third -> T
    fourth -> T 
    fifth -> T
    last -> T
    keys -> Collection<Number>
    values -> Collection<T>
    copySortedBy(comparison:Block2<T,T,Number>) -> SelfType
    asList -> List<T>
    asSequence -> Sequence<T>
    asDictionary -> Dictionary<Number,T>
    asSet -> Set<T>
    keysAndValuesDo(action:Block2<Number,T,Done>) -> Done
}

type List<T> = Sequence<T> & type {
    add(x: T) -> List<T>
    addFirst(x: T) -> List<T>
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
    extend(l: Collection<T>) -> Done
    copy -> List<T>
    copySorted -> SelfType
    sort -> SelfType
}

type Set<T> = ReifiedCollection<T> & type {
    add(*elements:T) -> SelfType
    addAll(elements:Collection<T>) -> SelfType
    remove(*elements: T) -> Set<T>
    remove(*elements: T) ifAbsent(block: Block0<Done>) -> Set<T>
    includes(booleanBlock: Block1<T,Boolean>) -> Boolean
    find(booleanBlock: Block1<T,Boolean>) ifNone(notFoundBlock: Block0<T>) -> T
    -(o: T) -> Set<T>
    extend(l: Collection<T>) -> Set<T>
    copy -> Set<T>
}

type Dictionary<K,T> = {
    size -> Number
    isEmpty -> Boolean
    containsKey(k:K) -> Boolean
    containsValue(v:T) -> Boolean
    at(key:K)ifAbsent(action:Block0<Unknown>) -> Unknown
    at(key:K)put(value:T) -> Dictionary<K,T>
    []:=(k:K, v:T) -> Done
    at(k:K) -> T
    [](k:K) -> T
    removeAllKeys(keys:Collection<K>) -> Dictionary<K,T>
    removeKey(*keys:K) -> Dictionary<K,T>
    removeAllValues(removals:Collection<T>) -> Dictionary<K,T>
    removeValue(*removals:T) -> Dictionary<K,T>
    keys -> Iterator<K>
    values -> Iterator<T>
    bindings -> Iterator<Binding<K,T>>
    keysAndValuesDo(action:Block2<K,T,Done>) -> Done
    keysDo(action:Block1<K,Done>) -> Done
    valuesDo(action:Block1<T,Done>) -> Done
    do(action:Block1<T,Done>) -> Done
    ==(other:Object) -> Boolean
    copy -> Dictionary<K,T>
}

type Iterator<T> = {
    hasNext -> Boolean
    next -> T
    iterator -> Iterator
    iter -> Iterator
    onto(resultFactory:EmptyCollectionFactory) -> Collection<T>
    into(accumulator:Collection<Unknown>) -> Collection<Unknown>
    do(action:Block) -> Done
    do(body:Block1<T,Done>) separatedBy(separator:Block0<Done>) -> Done
    fold(blk:Block1<Object,T>) startingWith(initial:Object) -> Object
    map(blk:Block1<T,Object>) -> Iterator<Object>
    filter(condition:Block1<T,Boolean>) -> Iterator<T>
}

type CollectionFactory<T> = {
    withAll<T> (elts:Collection<T>) -> Collection<T>
    with<T> (*elts:Object) -> Collection<T>
    empty<T> -> Collection<T>
}

type EmptyCollectionFactory<T> = {
    empty<T> -> Collection<T>
}

def unknown = object { 
    method asString { "unknown" }
    method match(other) { self == other }
}

class collectionFactory.trait<T> {
    method withAll(elts:Collection<T>) -> Collection<T> { abstract }
    method with(*a:T) -> Unknown { self.withAll(a) }
    method empty -> Unknown { self.with() }
}

class iterable.trait<T> {
    method hasNext { abstract }
    method next { abstract }
    method iterator { self }
    method iter { self }
    method onto(resultFactory) {
        def resultCollection = resultFactory.empty
        while {self.hasNext} do { resultCollection.add(self.next) }
        return resultCollection
    }
    method into(existingCollection) {
        while {self.hasNext} do { existingCollection.add(self.next) }
        return existingCollection
    }
    method asSet {
        return self.onto(set)
    }
    method asList {
        return self.onto(list)
    }
    method asSequence {
        return self.onto(list).asSequence
    }
    method do(block1:Block1<T,Done>) -> SelfType {
        while {self.hasNext} do { block1.apply(self.next) }
        return self
    }
    method map<R>(block1:Block1<T,R>) -> Iterator<R> {
        object {
            inherits iterable.trait<T>
            method havemore { outer.havemore }
            method hasNext { outer.hasNext }
            method next { block1.apply(outer.next) }
            method size { outer.size }
            method asString { "a map iterator" }
        }
    }
    method fold(block2)startingWith(initial) {
        var res := initial
        while { self.hasNext } do { res := block2.apply(res, self.next) }
        return res
    }
    method filter(selectionCondition) {
    // return an iterator that emits only those elements of the underlying
    // iterator for which selectionCondition holds.
        object {
            inherits iterable.trait
            var cache
            var cacheLoaded := false
            method havemore {
            // return true if this iterator has more elements.
            // To determine the answer, we have to find an acceptable element;
            // this is then cached, for the use of next
                if (cacheLoaded) then { return true }
                try {
                    cache := nextAcceptableElement
                    cacheLoaded := true
                } catch { ex:Exhausted -> return false }
                return true
            }
            method hasNext {
            // return true if this iterator has a next element.
            // To determine the answer, we have to find an acceptable element;
            // this is then cached, for the use of next
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
            // return the next element of the underlying iterator that satisfies
            // selectionCondition.  If there is none, raises Exhausted exception
                var outerNext
                while { true } do {
                    outerNext := outer.next
                    def acceptable = selectionCondition.apply(outerNext)
                    if (acceptable) then { return outerNext }
                }
            }
            method size { unknown }
            method asString { "a filter iterator" }
        }
    }
    method asString { "an iterator" }
}

class enumerable.trait<T> {
    method do { abstract }
    method iterator { abstract }
    method size { abstract }
    method isEmpty { self.size == 0 }
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
    // backward compatibility

        fold(blk)startingWith(initial)
    }
    method map(block1) {
        self.iterator.map(block1)
    }
    method fold(blk)startingWith(initial) {
        var res := initial
        self.do {it->
            res := blk.apply(res, it)
        }
        return res
    }
    method filter(condition) {
        self.iterator.filter(condition)
    }
    method iter { return self.iterator }
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

class indexable.trait<T> {
    inherits enumerable.trait<T>
    method at { abstract }
    method size { abstract }
    method keysAndValuesDo { abstract }

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
}

method max(a,b) is confidential {
    if (a > b) then { a } else { b }
}

factory method sequence<T> {
    inherits collectionFactory.trait<T>
    
    method withAll(*a:Collection) {
        var totalSize := 0
        for (a) do { arg ->
            totalSize := totalSize + arg.size
        }
        def inner = _prelude.PrimitiveArray.new(totalSize)
        var ix := 0
        for (a) do { arg ->
            for (arg) do { elt ->
                inner.at(ix)put(elt)
                ix := ix + 1
            }
        }
        self.fromPrimitiveArray(inner, totalSize)
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
                range.from(1)to(size).iterator
            }
            method values {
                self.iterator
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
                    if (i < (size-1)) then { s := s ++ "," }
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
                    case {o:Sequence<T> ->
                        if (self.size != o.size) then {return false}
                        self.indices.do { ix ->
                            if (self.at(ix) != o.at(ix)) then {
                                return false
                            }
                        }
                        return true
                    } 
                    case {_ ->
                        return false
                    }
            }
            method iterator {
                object {
                    inherits iterable.trait
                    var idx := 1
                    method asDebugString { "{asString}⟪{idx}⟫" }
                    method asString { "aSequenceIterator" }
                    method havemore { idx <= sz }
                    method hasNext { idx <= sz }
                    method next {
                        if (idx > sz) then { Exhausted.raise "on sequence {outer}⟪{idx}⟫" }
                        def ret = at(idx)
                        idx := idx + 1
                        ret
                    }
                    method size { sz - idx + 1 }
                }
            }
            method copySorted {
                asList.sortBy { l, r ->
                    if (l == r) then {0} 
                        elseif (l < r) then {-1} 
                        else {1}
                }.asSequence
            }
            method copySortedBy(sortBlock:Block2){
                asList.sortBy(sortBlock:Block2).asSequence
            }
        }
    }
}

factory method list<T> {
    inherits collectionFactory.trait<T>

    method withAll(a:Collection<T>) -> List<T> {
        object {
            inherits indexable.trait<T>
            var inner := _prelude.PrimitiveArray.new(a.size * 2 + 1)
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
                    if (i < (size-1)) then { s := s ++ "," }
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
                    case {o:Sequence ->
                        if (self.size != o.size) then {return false}
                        self.indices.do { ix ->
                            if (self.at(ix) != o.at(ix)) then {
                                return false
                            }
                        }
                        return true
                    } 
                    case {_ ->
                        return false
                    }
            }
            method iterator {
                object {
                    inherits iterable.trait
                    var idx := 1
                    method asDebugString { "{asString}⟪{idx}⟫" }
                    method asString { "aListIterator" }
                    method havemore { idx <= size }
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
                self.iterator
            }
            method keys {
                self.indices.iterator
            }
            method keysAndValuesDo(block2) {
                var i := 0
                while {i < size} do { 
                    block2.apply(i+1, inner.at(i))
                    i := i + 1
                }
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
            method copySortedBy(sortBlock:Block2) {
                copy.sortBy(sortBlock:Block2)
            }
            method copySorted {
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
            inherits enumerable.trait
            var inner := _prelude.PrimitiveArray.new(if (a.size > 1)
                then {a.size * 3 + 1} else {8})
            def unused = object { 
                var unused := true 
                method asString { "unused" }
            }
            def removed = object { 
                var removed := true 
                method asString { "removed" }
            }
            var size is public := 0
            for (0..(inner.size-1)) do {i->
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
                    separatedBy { s := s ++ "," }
                s ++ "\}"
            }
            method -(o) {
                def result = set.empty
                for (self) do {v->
                    if (!o.contains(v)) then {
                        result.add(v)
                    }
                }
                result
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
                    inherits iterable.trait
                    var count := 1
                    var idx := 0
                    method havemore { count <= size }
                    method hasNext { count <= size }
                    method next {
                        var candidate
                        while {
                            candidate := inner.at(idx)
                            (candidate == unused).orElse{candidate == removed}
                        } do {
                            idx := idx + 1
                            if (idx == inner.size) then {
                                Exhausted.raise "over {outer.asString}"
                            }
                        }
                        count := count + 1
                        idx := idx + 1
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
                        if (self.size != o.size) then {return false}
                        self.do { each ->
                            if (! o.contains(each)) then {
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
                outer.withAll(self)
            }
            method ++ (other) {
            // set union
                copy.addAll(other)
            }
            method -- (other) {
            // set difference
                copy.removeAll(other) ifAbsent { done }
            }
            method ** (other) {
            // set intersection
                (filter {each -> other.contains(each)}).asSet
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
            inherits enumerable.trait
            var size is public := 0
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
            
            method at(key')put(value') {
                var t := findPositionForAdd(key')
                if ((inner.at(t) == unused).orElse{inner.at(t) == removed}) then {
                    size := size + 1
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
            method at(k)ifAbsent(action) {
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
                        size := size - 1
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
                        size := size - 1
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
                var s := "dict⟬"
                var numberRemaining := size
                for (0..(inner.size-1)) do {i->
                    def a = inner.at(i)
                    if ((a != unused).andAlso{a != removed}) then {
                        s := s ++ "{a.key}::{a.value}"
                        numberRemaining := numberRemaining - 1
                        if (numberRemaining > 0) then {
                            s := s ++ ", "
                        }
                    }
                }
//                self.do { a -> s := s ++ "{a.key}::{a.value}" }
//                    separatedBy { s := s ++ ", " }
                return (s ++ "⟭")
            }
            method asDebugString {
                var s := "dict⟬"
                for (0..(inner.size-1)) do {i->
                    if (i > 0) then { s := s ++ ", " }
                    def a = inner.at(i)
                    if ((a != unused).andAlso{a != removed}) then {
                        s := s ++ "{i}:{a.key}=>{a.value}"
                    } else {
                        s := s ++ "{i}:{a.asDebugString}"
                    }
                }
                s ++ "⟭"
            }
            method keys {
                object {
                    inherits iterable.trait
                    // We could just inherit from outer.bindings, and
                    // override next to do return super.next.key
                    // This would use stateful inheritance, and save two lines.
                    def baseIterator = bindings
                    method havemore { baseIterator.havemore }
                    method hasNext { baseIterator.hasNext }
                    method next { baseIterator.next.key }
                }
            }
            method values {
                object {
                    inherits iterable.trait
                    // We could just inherit from outer.bindings, and
                    // override next to do return super.next.value
                    // This would use stateful inheritance, and save two lines.
                    def baseIterator = bindings
                    method havemore { baseIterator.havemore }
                    method hasNext { baseIterator.hasNext }
                    method next { baseIterator.next.value }
                }
            }
            method iterator { values }
            method bindings {
                object {
                    inherits iterable.trait
                    var count := 1
                    var idx := 0
                    var elt
                    method havemore { count <= size }
                    method hasNext { count <= size }
                    method next {
                        if (count > size) then { 
                            Exhausted.raise "over {outer.asString}"
                        }
                        while {
                            elt := inner.at(idx)
                            (elt == unused).orElse{elt == removed}
                        } do {
                            idx := idx + 1
                        }
                        count := count + 1
                        idx := idx + 1
                        elt
                    }
                }
            }
            method expand is confidential {
                def c = inner.size
                def n = c * 2
                def oldInner = inner
                inner := _prelude.PrimitiveArray.new(n)
                for (0..(inner.size-1)) do {i->
                    inner.at(i)put(unused)
                }
                size := 0
                for (0..(oldInner.size-1)) do {i->
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
                    inherits iterable.trait
                    var val := start
                    method havemore { val <= stop }
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
                        if (self.size != other.size) then { return false }
                        def selfIter = self.iterator
                        def otherIter = other.iterator
                        while {selfIter.hasNext} do {
                            if (selfIter.next != otherIter.next) then {
                                return false
                            }
                        }
                        return true
                    } 
                    case {_ ->
                        return false
                    }
            }
            method copySortedBy(c) { self.asList.sortBy(c) }
            
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
                    inherits iterable.trait
                    var val := start
                    method havemore { val >= stop }
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
                        if (self.size != other.size) then { return false }
                        def selfIter = self.iterator
                        def otherIter = other.iterator
                        while {selfIter.hasNext} do {
                            if (selfIter.next != otherIter.next) then {
                                return false
                            }
                        }
                        return true
                    } 
                    case {_ ->
                        return false
                    }
            }
            method copySortedBy(c) { self.asList.sortBy(c) }
            
            method keys { 1..self.size }
            
            method values { self }

            method asString -> String {
                "range.from({upper})downTo({lower})"
            }
            method asSequence {
                self
            }
        }
    }
}

