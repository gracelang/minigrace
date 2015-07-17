import "math" as math

type Vector = {
    data
    <-
}
class vector.new {
    var data is readable := []
    method <-(v) {
        match(v)
            case {n : Number -> data := [v]}
            case {v' : Vector -> data := v'.data }
            case {_ -> data := v}
        self
    }
    method ←(v) {
        self <- v
    }
    method +(v) {
        def n = vector.new
        for (data) do {d->
            n.data.push(d + v)
        }
        n
    }
    method *(v) {
        def n = vector.new
        for (data) do {d->
            n.data.push(d * v)
        }
        n
    }
    method ×(v) {
        self * v
    }
    method /(v) { // compression: select elements from v according to 1s in self
        def tmp = vector.new
        for (data.indices) do {i->
            if (data.at(i) == 1) then {
                tmp.data.push(v.data.at(i))
            }
        }
        tmp
    }
    method ÷(v) {
        def n = vector.new
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
    method ∘·+(o) {
        def tmp = vector.new
        for (data) do {d->
            tmp.data.push(o + d)
        }
        tmp
    }
    method ∘·*(o) {
        def tmp = vector.new
        for (data) do {d->
            tmp.data.push(o * d)
        }
        tmp
    }
    method [](o) {
        def tmp = vector.new
        for (o.data) do {d->
            tmp.data.push(data.at(d))
        }
        tmp
    }
    method prefix⍋ {
        def ret = vector.new
        def indices = ret.data
        def used = set.empty
        var min := 1
        for (1..data.size) do {_->
            for (data.indices) do {i->
                if (data.at(i) < data.at(min)) then {
                    if (!used.contains(i)) then {
                        min := i
                    }
                }
            }
            indices.push(min)
            used.add(min)
            for (1..data.size) do {i->
                if (!used.contains(i)) then {
                    min := i
                }
            }
        }
        ret
    }
    method prefix⍒ {
        def ret = vector.new
        def indices = ret.data
        def used = set.empty
        var max := 1
        for (1..data.size) do {_->
            for (data.indices) do {i->
                if (data.at(i) > data.at(max)) then {
                    if (!used.contains(i)) then {
                        max := i
                    }
                }
            }
            indices.push(max)
            used.add(max)
            for (1..data.size) do {i->
                if (!used.contains(i)) then {
                    max := i
                }
            }
        }
        ret
    }
    method ∊(o) {
        def tmp = vector.new
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
        def tmp = vector.new
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
            def tmp = vector.new
            for (o.data) do {d->
                tmp.data.push(b.apply(d))
            }
            tmp
        }
    }
}

def A is public = vector.new
def B is public = vector.new
def C is public = vector.new
def D is public = vector.new
def E is public = vector.new
def F is public = vector.new
def G is public = vector.new
def H is public = vector.new
def I is public = vector.new
def J is public = vector.new
def K is public = vector.new
def L is public = vector.new
def M is public = vector.new
def N is public = vector.new
def O is public = vector.new
def P is public = vector.new
def Q is public = vector.new
def R is public = vector.new
def S is public = vector.new
def T is public = vector.new
def U is public = vector.new
def V is public = vector.new
def W is public = vector.new
def X is public = vector.new
def Y is public = vector.new
def Z is public = vector.new

method ι(n) {
    def tmp = vector.new
    for (1..n) do {i->
        tmp.data.push(i)
    }
    tmp
}

method n(n') {
    object {
        method ?(o) {
            def ret = vector.new
            def used = set.empty
            for (1..n') do {i->
                var num := 1 + (math.random * o).truncated
                while {used.contains(num)} do {
                    num := 1 + (math.random * o).truncated
                }
                used.add(num)
                ret.data.push(num)
            }
            ret
        }
        method ↓(v) {
            def tmp = vector.new
            for (2..v.data.size) do {i->
                tmp.data.push(v.data.at(i))
            }
            tmp
        }
    }
}
