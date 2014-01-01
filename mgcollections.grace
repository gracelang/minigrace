#pragma DefaultVisibility=public

class list.new(*a) {
    var inner := PrimitiveArray.new(a.size * 2 + 1)
    var size := 0
    for (a) do {x->
        inner.at(size)put(x)
        size := size + 1
    }
    method at(n) {
        inner.at(n-1)
    }
    method [](n) {
        inner.at(n-1)
    }
    method at(n)put(x) {
        inner.at(n-1)put(x)
    }
    method []:=(n,x) {
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
        1..size
    }
    method first {
        inner.at(0)
    }
    method second {
        inner.at(1)
    }
    method third {
        inner.at(2)
    }
    method fourth {
        inner.at(3)
    }
    method last {
        inner.at(size - 1)
    }
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
        var s := "list.new("
        for (0..(size-1)) do {i->
            s := s ++ inner.at(i).asString
            if (i < (size-1)) then { s := s ++ "," }
        }
        s ++ ")"
    }
    method asDebugString {
        asString
    }
    method extend(l) {
        for (l) do {i->
            push(i)
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
}

def set = object {
    method new(*a) { withAll(a) }

    method with(*a) { withAll(a) }

    method empty { with() }

    method withAll(a:Collection) {
        object {
            var inner := PrimitiveArray.new(if (a.size > 1)
                then {a.size * 3 + 1} else {8})
            def unused = object { var unused := true }
            var size := 0
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
                var s := "set.new("
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
                s ++ ")"
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
            method asDebugString {
                asString
            }
            method extend(l) {
                for (l) do {i->
                    add(i)
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
        }
    }
}

class map.new {
    var size := 0
    var inner := PrimitiveArray.new(8)
    def unused = object { var unused := true ; def key = self }
    for (0..(inner.size-1)) do {i->
        inner.at(i)put(unused)
    }
    method put(key', value') {
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
    }
    method get(key') {
        var t := findPosition(key')
        var c := inner.at(t)
        return c.value
    }
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
        var s := "map.new["
        for (0..(inner.size-1)) do {i->
            def a = inner.at(i)
            if (a != unused) then {
                s := s ++ "{a.key} => {a.value},"
            }
        }
        s ++ "]"
    }
    method asDebugString {
        asString
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
}
