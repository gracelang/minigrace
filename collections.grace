def boundsError = RuntimeError.refine "index out of bounds"
def exhausted = RuntimeError.refine "iterator exhausted"
def subobjectResponsibility = Error.refine "a subobject should have overridden this method"
def noSuchObject = RuntimeError.refine "no such object"

type IndexableCollection = {
    size -> Number
    at -> Unknown
}

type Collection = {
    size -> Number
    contains(e:Object) -> Boolean
    iterator -> Iterator
}

type Dictionary = {
    size -> Number
    containsKey(k) -> Boolean
    containsValue(v) -> Boolean
    at(k)ifAbsent(action:Block) -> Unknown
}

type Iterator = {
    iterator -> Iterator
    iter -> Iterator
    onto(factory:EmptyCollectionFactory) -> Collection
    into(accumulator:Collection) -> Collection
    do(action:Block) -> Collection
    map(Block) -> Iterator
    fold(combiningOp:Block)startingWith(initial:Object) -> Object
    filter -> Iterator
    asString -> String
    asDebugString -> String
}

type CollectionFactory = { 
    withAll (contents:Collection) -> Collection
    with (*contents:Object) -> Collection
    empty -> Collection
}

type EmptyCollectionFactory = {
    empty -> Collection
}

class aCollectionFactory.trait {
    // requires withAll
    method new(*a) { self.withAll(a) }
    method with(*a) { self.withAll(a) }
    method empty { self.with() }
    // method withAll(a) { subobjectResponsibility.raise "withAll()" }
}

class anIterator.trait {
    // requires next, havemore
    //    method havemore { subobjectResponsibility.raise "havemore" }
    //    method next is abstract { subobjectResponsibility.raise "next" }
    method iterator { self }
    method iter { self }
    method onto(factory) {
        def resultCollection = factory.empty
        while {self.havemore} do { resultCollection.add(self.next) }
        return resultCollection
    }
    method into(existingCollection) {
        while {self.havemore} do { existingCollection.add(self.next) }
        return existingCollection
    }
    method do(block1) {
        while {self.havemore} do { block1.apply(self.next) }
        return self
    }
    method map(block1) {
        return object {                     // this "return" is to work around a compiler bug
            inherits anIterator.trait
            method havemore { outer.havemore }
            method next { block1.apply(outer.next) }
        }
    }
    method fold(block2)startingWith(initial) {
        var res := initial
        while { self.havemore } do { res := block2.apply(res, self.next) }
        return res
    }
    method filter(selectionCondition) {
    // return an iterator that emits only those elements of the underlying
    // iterator for which selectionCondition holds.
        return object {                     // this "return" is to work around a compiler bug
            inherits anIterator.trait
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
                } catch { ex:exhausted -> return false }
                return true
            }
            method next {
                if (cacheLoaded.not) then { cache := nextAcceptableElement }
                cacheLoaded := false
                return cache
            }
            method nextAcceptableElement is confidential {
            // return the next element of the underlying iterator that satisfies
            // selectionCondition.  If there is none, raises exhausted exception
                var outerNext
                while { true } do {
                    outerNext := outer.next
                    def acceptable = selectionCondition.apply(outerNext)
                    if (acceptable) then { return outerNext }
                }
            }
        }
    }
    method asString { "an Iterator" }
    method asDebugString { self.asString }
}

class anEnumerable.trait {
    // requires do, iterator
    method iterator { subobjectResponsibility.raise "iterator" }
    method do { subobjectResponsibility.raise "do" }
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
    method reduce(initial, blk) {   // backwawrd compatibility
        fold(blk)startingWith(initial)
    }
    method map(block1) {
        iterator.map(block1)
    }
    method fold(blk)startingWith(initial) {
        var res := initial
        for (self) do {it->
            res := blk.apply(res, it)
        }
        return res
    }
    method filter(condition) {
        iterator.filter(condition)
    }
    method iter { return self.iterator }
}

def aList is readable = object {
    inherits aCollectionFactory.trait

    method withAll(a) {
        object {
            inherits anEnumerable.trait
            var inner := PrimitiveArray.new(a.size * 2 + 1)
            var size is readable := 0
            for (a) do {x->
                inner.at(size)put(x)
                size := size + 1
            }
            method boundsCheck(n) is confidential {
                if ((n < 1) || (n > size)) then {
                    boundsError.raise "index {n} out of bounds 1..{size}" 
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
                boundsCheck(n)
                inner.at(n-1)put(x)
                self
            }
            method []:=(n,x) {
                boundsCheck(n)
                inner.at(n-1)put(x)
                self
            }
            method add(x) {
                inner.at(size)put(x)
                size := size + 1
                if (size == inner.size) then { expand }
                self
            }
            method push(x) { add(x) }       // compatibility
            method addLast(x) { add(x) }    // compatibility
            method removeLast {
                def result = inner.at(size - 1)
                size := size - 1
                result
            }
            method addFirst(x) {
                if (size == inner.size) then { expand }
                for (aRange.from(size)downTo(1)) do {i->
                    inner.at(i)put(inner.at(i-1))
                }
                inner.at(0)put(x)
                size := size + 1
                self
            }
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
            method pop { removeLast }
            method indices {
                aRange.from(1)to(size)
            }
            method first { at(1) }
            method second { at(2) }
            method third { at(3) }
            method fourth { at(4) }
            method last { at(size) }
            method ++(o) {
                def l = aList.withAll(self)
                for (o) do {it->
                    l.push(it)
                }
                l
            }
            method asString {
                var s := "list<"
                for (0..(size-1)) do {i->
                    s := s ++ inner.at(i).asString
                    if (i < (size-1)) then { s := s ++ "," }
                }
                s ++ ">"
            }
            method addAll(l) {
                for (l) do {i->
                    push(i)
                }
                self
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
                    case {o:IndexableCollection ->
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
                    inherits anIterator.trait
                    var idx := 1
                    method asDebugString { "aListIterator<{idx}>" }
                    method asString { "aListIterator" }
                    method havemore { idx <= size }
                    method next {
                        if (idx > size) then { exhausted.raise "on list" }
                        def ret = at(idx)
                        idx := idx + 1
                        ret
                    }
                }
            }

            method expand is confidential {
                def c = inner.size
                def n = c * 2
                def newInner = PrimitiveArray.new(n)
                for (0..(size-1)) do {i->
                    newInner.at(i)put(inner.at(i))
                }
                inner := newInner
            }
            method copy {
                outer.withAll(self)
            }
        }
    }
}

def aSet is readable = object {
    inherits aCollectionFactory.trait

    method withAll(a:Collection) {
        object {
            inherits anEnumerable.trait
            var inner := PrimitiveArray.new(if (a.size > 1)
                then {a.size * 3 + 1} else {8})
            def unused = object { 
                var unused := true 
                method asString { "unused" }
            }
            def removed = object { 
                var removed := true 
                method asString { "removed" }
                method asDebugString { "removed" }
            }
            var size is readable := 0
            for (0..(inner.size-1)) do {i->
                inner.at(i)put(unused)
            }
            for (a) do { x-> add(x) }

            method add(*elements) {
                for (elements) do { x ->
                    if (! contains(x)) then {
                        var t := findPositionForAdd(x)
                        inner.at(t)put(x)
                        size := size + 1
                        if (size > (inner.size / 2)) then {
                            expand
                        }
                    }
                }
                self    // for chaining
            }
            method remove(*elements) {
                for (elements) do { x ->
                    remove(x)ifAbsent{noSuchObject.raise "set does not contain {x}"}
                }
                self    // for chaining
            }
            method remove(*elements)ifAbsent(block) {
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
                def h = x.hashcode
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
                def h = x.hashcode
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
                def result = aSet.new
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
                    inherits anIterator.trait
                    var count := 1
                    var idx := 0
                    method havemore {
                        count <= size
                    }
                    method next {
                        var candidate
                        while {
                            candidate := inner.at(idx)
                            (candidate == unused).orElse{candidate == removed}
                        } do {
                            idx := idx + 1
                            if (idx == inner.size) then {
                                exhausted.raise "over {outer.asString}"
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
                inner := PrimitiveArray.new(n)
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
                aSet.withAll(self)
            }

        }
    }
}

type Binding = {
    key -> Object
    value -> Object
    hashcode -> Number
    == -> Boolean
}

class aBinding.key(k)value(v) {
    method key {k}
    method value {v}
    method asString { "{k}=>{v}" }
    method asDebugString { asString }
    method hashcode { (k.hashcode * 1021) + v.hashcode }
    method == (other) {
        match (other)
            case {o:Binding -> (k == o.key) && (v == o.value) }
            case {_ -> return false }
    }
}

def aDictionary is readable = object {
    inherits aCollectionFactory.trait
    method at(k)put(v) {
            self.empty.at(k)put(v)
    }
    method withAll(initialBindings) {
        object {
            inherits anEnumerable.trait
            var size is readable := 0
            var inner := PrimitiveArray.new(8)
            def unused = object { 
                var unused := true
                def key is readable = self
                def value is readable = self
                method asString { "unused" }
                method asDebugString { "unused" }
            }
            def removed = object { 
                var removed := true
                def key is readable = self
                def value is readable = self
                method asString { "removed" }
                method asDebugString { "removed" }
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
                inner.at(t)put(aBinding.key(key')value(value'))
                if ((size * 2) > inner.size) then { expand }
                self    // for chaining
            }
            method []:=(k, v) { at(k)put(v) }
            method at(k) { 
                var b := inner.at(findPosition(k))
                if (b.key == k) then {
                    return b.value
                }
                noSuchObject.raise "dictionary does not contain entry with key {k}"
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
            method removeKey(*keys) {
                for (keys) do { k ->
                    var t := findPosition(k)
                    if (inner.at(t).key == k) then {
                        inner.at(t)put(removed)
                        size := size - 1
                    } else {
                        noSuchObject.raise "dictionary does not contain entry with key {k}"
                    }
                }
                return self
            }
            method removeValue(*removals) {
                for (0..(inner.size-1)) do {i->
                    def a = inner.at(i)
                    if (removals.contains(a.value)) then {
                        inner.at(i)put(removed)
                        size := size - 1
                    }
                }
                return self
            }
            method containsValue(v) {
                self.valuesDo{ each ->
                    if (v == each) then { return true }
                }
                return false
            }
            method contains(v) { containsValue(v) }
            method findPosition(x) is confidential {
                def h = x.hashcode
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
                def h = x.hashcode
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
                var s := "dict["
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
//                self.do { a -> s := s ++ "{a.key}=>{a.value}" }
//                    separatedBy { s := s ++ ", " }
                return (s ++ "]")
            }
            method asDebugString {
                var s := "dict["
                for (0..(inner.size-1)) do {i->
                    if (i > 0) then { s := s ++ ", " }
                    def a = inner.at(i)
                    if ((a != unused).andAlso{a != removed}) then {
                        s := s ++ "{i}:{a.key}=>{a.value}"
                    } else {
                        s := s ++ "{i}:{a.asDebugString}"
                    }

                }
                s ++ "]"
            }
            method keys {
                object {
                    inherits anIterator.trait
                    // We could just inherit from outer.bindings, and
                    // override next to do return super.next.key
                    // This would use stateful inheritance, and save two lines.
                    def outerIterator = bindings
                    method havemore { outerIterator.havemore }
                    method next { outerIterator.next.key }
                }
            }
            method values {
                object {
                    inherits anIterator.trait
                    // We could just inherit from outer.bindings, and
                    // override next to do return super.next.value
                    // This would use stateful inheritance, and save two lines.
                    def outerIterator = bindings
                    method havemore { outerIterator.havemore }
                    method next { outerIterator.next.value }
                }
            }
            method iterator { values }
            method bindings {
                object {
                    inherits anIterator.trait
                    var count := 1
                    var idx := 0
                    var elt
                    method havemore {
                        count <= size
                    }
                    method next {
                        if (count > size) then { 
                            exhausted.raise "over {outer.asString}"
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
                inner := PrimitiveArray.new(n)
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
                def newCopy = aDictionary.empty
                self.keyAndValuesDo{ k, v ->
                    newCopy.at(k)put(v)
                }
                newCopy
            }
        }
    }
}

def aRange is readable = object {
    method from(lower)to(upper) {
        object {
            inherits anEnumerable.trait
            def start = lower.truncate
            def stop = upper.truncate
            if (start != lower) then {
                RuntimeError.raise "lower bound {lower}" ++ 
                    " in aRange.from()to() is not an integer"
            }
            if (stop != upper) then {
                RuntimeError.raise "upper bound {upper}" ++ 
                    " in aRange.from()to() is not an integer"
            }
            def size is readable = 
                if ((upper-lower+1) < 0) then { 0 } else {upper-lower+1}
            method iterator -> Iterator {
                object {
                    inherits anIterator.trait
                    var val := start
                    method havemore {
                        val <= stop
                    }
                    method next {
                        if (val > stop) then { 
                            exhausted.raise "over {outer.asString}" 
                        }
                        val := val + 1
                        return (val - 1)
                    }
                    method asString { "{super.asString} from {upper} to {lower}" }
                }
            }
            method contains(elem) -> Boolean {
                try {
                    def intElem = elem.truncate
                    if (intElem != elem) then {return false}
                    if (intElem < start) then {return false}
                    if (intElem > stop) then {return false}
                } catch { ex:RuntimeError -> return false }
                return true
            }
            method do(block1) {
                var val := start
                while {val <= stop} do {
                    block1.apply(val)
                    val := val + 1
                }
            }
            method reversed {
                from(upper)downTo(lower)
            }
            method ==(other){
                if (self.size != other.size) then { return false }
                def selfIter = self.iterator
                def otherIter = other.iterator
                while {selfIter.havemore} do {
                    if (selfIter.next != otherIter.next) then {
                        return false
                    }
                }
                return true
            }

            method asString -> String{
                return "aRange.from({lower})to({upper})"
            }

            method asList{
                var result := aList.empty
                for (self) do { each -> result.add(each) }
                result
            }
        }
    }
    method from(upper)downTo(lower) {
        object {
            inherits anEnumerable.trait
            def start = upper.truncate
            def stop = lower.truncate
            if (start != upper) then {
                RuntimeError.raise "upper bound {upper}" ++ 
                    " in aRange.from({upper})downTo({lower}) is not an integer"
            }
            if (stop != lower) then {
                RuntimeError.raise "lower bound {lower}" ++
                    " in aRange.from({upper})downTo({lower}) is not an integer"
            }
            def size is readable = 
                if ((upper-lower+1) < 0) then { 0 } else {upper-lower+1}
            method iterator {
                object {
                    inherits anIterator.trait
                    var val := start
                    method havemore {
                        val >= stop
                    }
                    method next {
                        if (val < stop) then { exhausted.raise "outer.asString" }
                        val := val - 1
                        return (val + 1)
                    }
                    method asString { "{super.asString} from {upper} downTo {lower}" }
                }
            }
            method contains(elem) -> Boolean {
                try {
                    def intElem = elem.truncate
                    if (intElem != elem) then {return false}
                    if (intElem > start) then {return false}
                    if (intElem < stop) then {return false}
                } catch { ex:RuntimeError -> return false }
                return true
            }
            method do(block1) {
                var val := start
                while {val >= stop} do {
                    block1.apply(val)
                    val := val - 1
                }
            }
            method reversed {
                from(lower)to(upper)
            }
            method ==(other:Collection){
                if (self.size != other.size) then {
                    return false
                }

                def selfIter = self.iterator
                def otherIter = other.iterator

                while {selfIter.havemore} do {
                    if (selfIter.next != otherIter.next) then {
                        return false
                    }
                }

                return true
            }

            method asString -> String{
                return "aRange.from({upper})downTo({lower})"
            }

            method asList{
                var result := aList.empty

                def iter = self.iterator

                while {iter.havemore} do {
                    result.add(iter.next)
                }

                result
            }
        }
    }
}

