import "random" as random

type Vector = {
    data
    <-
}
class vector {
    var data is readable := list []
    method <-(v) {
        match(v)
            case {n : Number -> data := list [v]}
            case {v' : Vector -> data := v'.data }
            case {_ -> data := list (v)}
        self
    }
    method ←(v) {
        self <- v
    }
    method +(v) {
        def n = vector
        for (data) do {d->
            n.data.push(d + v)
        }
        n
    }
    method *(v) {
        def n = vector
        for (data) do {d->
            n.data.push(d * v)
        }
        n
    }
    method ×(v) {
        self * v
    }
    method /(v) { // compression: select elements from v according to 1s in self
        def tmp = vector
        for (data.indices) do {i->
            if (data.at(i) == 1) then {
                tmp.data.push(v.data.at(i))
            }
        }
        tmp
    }
    method ÷(v) {
        def n = vector
        for (data) do {d->
            n.data.push(d / v)
        }
        n
    }
    method prefix+/ {
        if (data.size == 1) then {
            return data.first
        }
        var sum := data.at(1) + data.at(2)
        for (3..data.size) do {i->
            sum := sum + data.at(i)
        }
        sum
    }
    method prefix*/ {
        if (data.size == 1) then {
            return data.first
        }
        var prod := data.at(1) + data.at(2)
        for (3..data.size) do {i->
            prod := prod * data.at(i)
        }
        prod
    }
    method ∘⋅+(o) {
        def tmp = vector
        for (data) do {d->
            tmp.data.push(o + d)
        }
        tmp
    }
    method ∘⋅*(o) {
        def tmp = vector
        for (data) do {d->
            tmp.data.push(o * d)
        }
        tmp
    }
    method ⇊(o) {   // indexing
        def tmp = vector
        for (o.data) do {d->
            tmp.data.push(data.at(d))
        }
        tmp
    }
    method prefix⍋ {
        def ret = vector
        def indices = ret.data
        def used = set []
        var minsIndex := 1
        for (1..data.size) do {_->
            for (data.indices) do {i->
                if (data.at(i) < data.at(minsIndex)) then {
                    if (!used.contains(i)) then {
                        minsIndex := i
                    }
                }
            }
            indices.push(minsIndex)
            used.add(minsIndex)
            for (1..data.size) do {i->
                if (!used.contains(i)) then {
                    minsIndex := i
                }
            }
        }
        ret
    }
    method prefix⍒ {
        def ret = vector
        def indices = ret.data
        def used = set []
        var maxsIndex := 1
        for (1..data.size) do {_->
            for (data.indices) do {i->
                if (data.at(i) > data.at(maxsIndex)) then {
                    if (!used.contains(i)) then {
                        maxsIndex := i
                    }
                }
            }
            indices.push(maxsIndex)
            used.add(maxsIndex)
            for (1..data.size) do {i->
                if (!used.contains(i)) then {
                    maxsIndex := i
                }
            }
        }
        ret
    }
    method ∊(o) {
        def tmp = vector
        for (data) do {d->
            var found := 0
            for (o.data) do {d'->
                match (d')
                    case { v : Vector ->
                        if (v.contains(d)) then {
                            found := 1
                        }
                    }
                    case { n : Number ->
                        if (d == d') then {
                            found := 1
                        }
                    }
            }
            tmp.data.push(found)
        }
        tmp
    }
    method prefix~ {
        def tmp = vector
        for (data) do {d->
            if (d == 0) then {
                tmp.data.push 1
            } else {
                tmp.data.push 0
            }
        }
        tmp
    }
    method contains(v) {
        for (data) do {d->
            if (v == d) then {
                return true
            }
        }
        return false
    }
    method asString {
        var s := "[ "
        for (data) do {d->
            match(d)
                case { v : Vector -> s := "{s}\n  {d}" }
                case { _ -> s := "{s}{d} " }
        }
        s ++ "]"
    }
}

method f(b) {
    object {
        method /(o) {
            def tmp = vector
            for (o.data) do {d->
                tmp.data.push(b.apply(d))
            }
            tmp
        }
    }
}

def A is public = vector
def B is public = vector
def C is public = vector
def D is public = vector
def E is public = vector
def F is public = vector
def G is public = vector
def H is public = vector
def I is public = vector
def J is public = vector
def K is public = vector
def L is public = vector
def M is public = vector
def N is public = vector
def O is public = vector
def P is public = vector
def Q is public = vector
def R is public = vector
def S is public = vector
def T is public = vector
def U is public = vector
def V is public = vector
def W is public = vector
def X is public = vector
def Y is public = vector
def Z is public = vector

method ι(n) {
    def tmp = vector
    for (1..n) do {i->
        tmp.data.push(i)
    }
    tmp
}

method n(n') {
    object {
        method ?(o) {
            def ret = vector
            def used = set []
            for (1..n') do {i->
                var num := 1 + (random.between0And1 * o).truncated
                while {used.contains(num)} do {
                    num := 1 + (random.between0And1 * o).truncated
                }
                used.add(num)
                ret.data.push(num)
            }
            ret
        }
        method ↓(v) {
            def tmp = vector
            for (2..v.data.size) do {i->
                tmp.data.push(v.data.at(i))
            }
            tmp
        }
    }
}
