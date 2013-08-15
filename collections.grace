def boundsError = Error.refine "index out of bounds"

def aList = object {
    method new(*a)  { withAll(a) }

    method with(*a) { withAll(a) }

    method empty { with() }

    method withAll(a) {
        object {
            var inner := PrimitiveArray.new(a.size * 2 + 1)
            var size is readable := 0
            for (a) do {x->
                inner.at(size)put(x)
                size := size + 1
            }
            method boundsCheck(n) is confidential {
                if ((n < 1) || (n > size)) then { 
                    print "bounds error {n}"
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
            }
            method []:=(n,x) {
                boundsCheck(n)
                inner.at(n-1)put(x)
            }
            method push(x) {
                inner.at(size)put(x)
                size := size + 1
                if (size == inner.size) then {
                    expand
                }
            }
            method pop {
                def ret = inner.at(size - 1)
                size := size - 1
                ret
            }
            method indices {
                aRange.from(1)to(size)
            }
            method first { at(1) }
            method second { at(2) }
            method third { at(3) }
            method fourth { at(4) }
            method last { at(size) }
            method ++(o) {
                def l = list.new
                for (self) do {it->
                    l.push(it)
                }
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
            method extend(l) {
                for (l) do {i->
                    push(i)
                }
            }
            method do(block1) {
                var i := 0
                while {i < size} do { 
                    block1.apply(inner.at(i))
                    i := i + 1
                }
            }
            method do(block1)separatedBy(block0) {
                var i := 0
                while {i <= size} do {
                    if (i != 0) then {block0.apply}
                    block1.apply(inner.at(i-1))
                    i := i + 1
                }
            }
            method reduce(initial, blk) {
                if (size == 0) then {
                    return initial
                }
                var res := initial
                for (self) do {it->
                    res := blk.apply(res, it)
                }
                res
            }
            method iter {
                object {
                    var idx := 1
                    method havemore {
                        idx <= size
                    }
                    method next {
                        def ret = at(idx)
                        idx := idx + 1
                        ret
                    }
                }
            }
            method iterator {
                iter
            }
            method expand {
                def c = inner.size
                def n = c * 2
                def newInner = PrimitiveArray.new(n)
                for (0..(size-1)) do {i->
                    newInner.at(i)put(inner.at(i))
                }
                inner := newInner
            }
            method copy {
                list.withAll(self)
            }
        }
    }
}

def aSet = object {
    method new(*a) { withAll(a) }

    method with(*a) { withAll(a) }

    method empty { with() }

    method withAll(a:Collection) {
        object {
            var inner := PrimitiveArray.new(if (a.size > 1)
                then {a.size * 3 + 1} else {8})
            def unused = object { var unused := true }
            var size is readable := 0
            for (0..(inner.size-1)) do {i->
                inner.at(i)put(unused)
            }
            for (a) do { x-> add(x) }

            method add(x) {
                if (contains(x)) then {
                    return true
                }
                var t := findPosition(x)
                inner.at(t)put(x)
                size := size + 1
                if (size > (inner.size / 2)) then {
                    expand
                }
            }
            method contains(x) {
                var t := findPosition(x)
                if (inner.at(t) == x) then {
                    return true
                }
                return false
            }
            method findPosition(x) {
                def h = x.hashcode
                def s = inner.size
                var t := h % s
                var jump := 5
                while {inner.at(t) != unused} do {
                    if (inner.at(t) == x) then {
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
                var firstTime := true
                var s := "set\{"
                for (0..(inner.size-1)) do {i->
                    if (inner.at(i) != unused) then {
                        if (firstTime) then {
                            firstTime := false
                            s := s ++ inner.at(i).asString
                        } else {
                            s := s ++ "," ++ inner.at(i).asString
                        }
                    }
                }
                s ++ "\}"
            }
            method -(o) {
                def ret = set.new
                for (self) do {v->
                    if (!o.contains(v)) then {
                        ret.add(v)
                    }
                }
                ret
            }
            method extend(l) {
                for (l) do {i->
                    add(i)
                }
            }
            method do(block1) {
                var i := 0
                while {i < size} do { 
                    if (inner.at(i) != unused) then { block1.apply(inner.at(i)) }
                    i := i + 1
                }
            }
            method do(block1) separatedBy(block0) {
                var firstTime := true
                var i := 0
                while {i < size} do {
                    if (!firstTime) then {block0.apply}
                    if (inner.at(i) != unused) then { 
                        block1.apply(inner.at(i))
                        firstTime := false
                    }
                    i := i + 1
                }
            }
            method reduce(initial, blk) {
                if (size == 0) then {
                    return initial
                }
                var res := initial
                for (self) do {it->
                    res := blk.apply(res, it)
                }
                res
            }
            method iter {
                object {
                    var count := 1
                    var idx := 0
                    method havemore {
                        count <= size
                    }
                    method next {
                        while {inner.at(idx) == unused} do {
                            idx := idx + 1
                            if (idx == inner.size) then {
                                return
                            }
                        }
                        def ret = inner.at(idx)
                        count := count + 1
                        idx := idx + 1
                        ret
                    }
                }
            }
            method iterator {
                iter
            }
            method expand {
                def c = inner.size
                def n = c * 2
                def oldInner = inner
                size := 0
                inner := PrimitiveArray.new(n)
                for (0..(inner.size-1)) do {i->
                    inner.at(i)put(unused)
                }
                for (0..(oldInner.size-1)) do {i->
                    if (oldInner.at(i) != unused) then {
                        add(oldInner.at(i))
                    }
                }
            }
            
            method copy {
                set.withAll(self)
            }

        }
    }
}

def aMap = object {
    method empty { new }
    method at(k)put(v) {
            aMap.empty.at(k)put(v)
    }
    method new {
        object {
            var size := 0
            var inner := PrimitiveArray.new(8)
            def unused = object { var unused := true ; def key = self }
            for (0..(inner.size-1)) do {i->
                inner.at(i)put(unused)
            }
            method at(key')put(value') {
                var t := findPosition(key')
                if (inner.at(t) == unused) then {
                    size := size + 1
                }
                inner.at(t)put(object {
                    def key = key'
                    var value := value'
                })
                if (size > (inner.size / 2)) then {
                    expand
                }
                self    // for chaining
            }
            method put(k, v) { at(k)put(v) }
            method get(key') {
                var t := findPosition(key')
                var c := inner.at(t)
                return c.value
            }
            method at(k) { get(k) }
            method contains(key') {
                var t := findPosition(key')
                if (inner.at(t).key == key') then {
                    return true
                }
                return false
            }
            method findPosition(x) {
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
            method asString {
                var s := "map["
                for (0..(inner.size-1)) do {i->
                    def a = inner.at(i)
                    if (a != unused) then {
                        s := s ++ "{a.key}=>{a.value},"
                    }
                }
                s ++ "]"
            }
            method iter {
                object {
                    var count := 1
                    var idx := 0
                    method havemore {
                        count <= size
                    }
                    method next {
                        if (count > size) then { RuntimeError.raise "iterator exhausted" }
                        while {inner.at(idx) == unused} do {
                            idx := idx + 1
                        }
                        def ret = inner.at(idx).key
                        count := count + 1
                        idx := idx + 1
                        ret
                    }
                }
            }
            method iterator {
                iter
            }
            method expand {
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
                    if (a != unused) then {
                        put(a.key, a.value)
                    }
                }
            }
            method keysAndValuesDo(block2) {
                 for (0..(inner.size-1)) do {i->
                    def a = inner.at(i)
                    if (a != unused) then {
                        block2.apply(a.key, a.value)
                    }
                }
            }
            method keysDo(block1) {
                 for (0..(inner.size-1)) do {i->
                    def a = inner.at(i)
                    if (a != unused) then {
                        block1.apply(a.key)
                    }
                }
            }
            method valuesDo(block1) {
                 for (0..(inner.size-1)) do {i->
                    def a = inner.at(i)
                    if (a != unused) then {
                        block1.apply(a.value)
                    }
                }
            }
            method copy {
                def newCopy = aMap.empty
                self.keyAndValuesDo{ k, v ->
                    newCopy.at(k)put(v)
                }
                newCopy
            }
        }
    }
}

class aRange.from(lower)to(upper) {
    def start = lower.truncate
    def stop = upper.truncate
    if (start != lower) then {
        RuntimeError.raise "lower bound to aRange.from()to() is not an integer"
    }
    if (stop != upper) then {
        RuntimeError.raise "lower bound to aRange.from()to() is not an integer"
    }
    def size is public = if ((upper-lower+1) < 0) then { 0 } else {upper-lower+1}
    method iter {
        object {
            var val := start
            method havemore {
                val <= stop
            }
            method next {
                if (val > stop) then { RuntimeError.raise "range iterator exhausted" }
                val := val + 1
                return (val - 1)
            }
        }
    }
    method do(block1) {
        for(self)do(block1)
    }
}

def list = aList
def set = aSet
def map = aMap
