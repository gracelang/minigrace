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
    method asString {
        var s := "list.new("
        for (0..(size-1)) do {i->
            s := s ++ inner.at(i).asString ++ ","
        }
        s ++ ")"
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
