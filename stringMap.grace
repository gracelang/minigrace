def unused = object { var unused := true ; def key = self }

class map.new {
    var size := 0
    var inner := PrimitiveArray.new(4)
    native "js" code ‹this.data.inner = { };›
    for (0..(inner.size-1)) do {i->
        inner.at(i)put(unused)
    }
    method put(k, v) {
        native "js" code ‹this.data.inner[var_k] = var_v;
                        return this;›
        var t := findPosition(key')
        if (inner.at(t) == unused) then {
            size := size + 1
        }
        inner.at(t)put(key'::value')
        if (size > (inner.size / 2)) then {
            expand
        }
    }
    method get(key') {
        var t := findPosition(key')
        var c := inner.at(t)
        if (c == unused) then { NoSuchObject.raise "no value for key {key'}" }
        return c.value
    }
    method get(key') ifAbsent (absentBlock) {
        var t := findPosition(key')
        var c := inner.at(t)
        if (c == unused) 
            then { return absentBlock.apply }
            else { return c.value }
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
                s := s ++ "{a.key}::{a.value},"
            }
        }
        s ++ "]"
    }
    method asDebugString {
        asString
    }
    method iterator {
        object {
            var count := 1
            var idx := 0
            method havemore {
                count <= size
            }
            method hasNext {
                count <= size
            }
            method next {
                if (count > size) then { IteratorExhausted.raise "on string map" }
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
    method asList {
        def result = list.empty
        var count := 1
        var idx := 0
        while {count <= size} do {
            while {inner.at(idx) == unused} do {
                idx := idx + 1
            }
            result.add (inner.at(idx))
            count := count + 1
            idx := idx + 1
        }
        result
    }
}
