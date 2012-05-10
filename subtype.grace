
import util

def types = []
def typesToId = HashMap.new
def matrix = HashMap.new
var DynamicType
var modified := true

method stringifyType(t) {
    var s := t.value
    if (t.kind == "identifier") then {
        return s
    }
    if (t.generics.size > 0) then {
        def joinees = []
        for (t.generics) do {g->
            joinees.push(stringifyType(g))
        }
        s := s ++ "<" ++ util.join(",", joinees) ++ ">"
    }
    s
}

method resetMatrix {
    for (types) do {t->
        def inner = HashMap.new
        def d = stringifyType(t)
        for (types) do {t2->
            inner.put(stringifyType(t2), true)
        }
        matrix.put(d, inner)
    }
}

method addType(t) {
    def d = stringifyType(t)
    if (matrix.contains(d)) then {
        return false
    }
    if (d == "Dynamic") then {
        DynamicType := t
    }
    typesToId.put(d, types.size)
    types.push(t)
    def inner = HashMap.new
    for (types) do {t2->
        def d2 = stringifyType(t2)
        inner.put(d2, true)
        if (t2 /= t) then {
            matrix.get(d2).put(d, true)
        }
    }
    matrix.put(d, inner)
    modified := true
    true
}

method resetType(t) {
    def d = stringifyType(t)
    if (matrix.contains(d).not) then {
        return addType(t)
    }
    def inner = HashMap.new
    for (types) do {t2->
        def d2 = stringifyType(t2)
        inner.put(d2, true)
        matrix.get(d2).put(d, true)
        if (d2 == d) then {
            for (t.methods) do {tm->
                t2.methods.push(tm)
            }
        }
    }
    matrix.put(t.value, inner)
    modified := true
    true
}

method typeId(t) {
    if (t == false) then {
        return typeId(DynamicType)
    }
    typesToId.get(stringifyType(t))
}

method boolMatrix {
    if (modified) then {
        findSubtypes
    }
    def mtrx = []
    for (types) do {t->
        def row = matrix.get(stringifyType(t))
        def inner = []
        for (types) do {t2->
            inner.push(row.get(stringifyType(t2)))
        }
        mtrx.push(inner)
    }
    mtrx
}

method printMatrix {
    if (modified) then {
        findSubtypes
    }
    for (types) do {t->
        def d = stringifyType(t)
        def row = matrix.get(d)
        var st := ""
        for (types) do {t2->
            def d2 = stringifyType(t2)
            if (row.get(d2)) then {
                st := "{st} {d2}"
            }
        }
        print("{d} is a subtype of:{st}")
    }
}
method findType(typeid) {
    if (typeid == false) then {
        return DynamicType
    }
    if (typeid.kind == "type") then {
        return typeid
    }
    for (types) do {t->
        if (stringifyType(t) == typeid.value) then {
            return t
        }
    }
    false
}

method simpleCheckThat(a)mayBeSubtypeOf(b) {
    if ((a == false) | (b == false)) then {
        return true
    }
    matrix.get(stringifyType(a)).get(stringifyType(b))
}
method checkThat(a)mayBeSubtypeOf(b) {
    if (a.value == "Dynamic") then {
        return true
    }
    if (b.value == "Dynamic") then {
        return true
    }
    def at = stringifyType(a)
    def bt = stringifyType(b)
    if (matrix.get(at).get(bt).not) then {
        return false
    }
    if (a.nominal | b.nominal) then {
        return (a == b)
    }
    if (a.unionTypes.size > 0) then {
        for (a.unionTypes) do {ut->
            if (checkThat(findType(ut))mayBeSubtypeOf(b).not) then {
                return false
            }
        }
        return true
    }
    if (b.unionTypes.size > 0) then {
        for (b.unionTypes) do {ut->
            if (checkThat(a)mayBeSubtypeOf(findType(ut))) then {
                return true
            }
        }
        return false
    }
    if (a.methods.size < b.methods.size) then {
        return false
    }
    for (b.methods) do {bm->
        var found := false
        for (a.methods) do {am->
            if (am.value == bm.value) then {
                found := true
                if (simpleCheckThat(findType(am.rtype))mayBeSubtypeOf(findType(bm.rtype)).not) then {
                    return false
                }
                if (am.signature.size != bm.signature.size) then {
                    return false
                }
                if (am.signature.first[2].size > 0) then {
                    for (am.signature.indices) do { partnr ->
                        if (am.signature[partnr].size != bm.signature[partnr].size) then {
                            return false
                        }
                        var part := am.signature[partnr]
                        for (part[2].indices) do { i ->
                            def ap = am.signature[partnr][2][i]
                            def bp = bm.signature[partnr][2][i]
                            if (simpleCheckThat(findType(bp.dtype))mayBeSubtypeOf(findType(ap.dtype)).not) then {
                                return false
                            }
                        }
                    }
                }
            }
        }
        if (!found) then {
            return false
        }
    }
    return true
}

method findSubtypes {
    var changed := true
    while {changed} do {
        changed := false
        for (types) do {t1->
            def row = matrix.get(stringifyType(t1))
            for (types) do {t2->
                def d2 = stringifyType(t2)
                if (row.get(d2)) then {
                    if (checkThat(t1)mayBeSubtypeOf(t2).not) then {
                        row.put(d2, false)
                        changed := true
                    }
                }
            }
        }
    }
    modified := false
}

method conformsType(a)to(b) {
    if (addType(a) | addType(b) | modified) then {
        findSubtypes
    }
    matrix.get(stringifyType(a)).get(stringifyType(b))
}

method nicename(t) {
    if (addType(t) | modified) then {
        findSubtypes
    }
    def id = stringifyType(t)
    if (id.at(1) /= "<") then {
        return id
    }
    def st = matrix.get(id)
    def maybe = []
    for (types) do { t2 ->
        def d2 = stringifyType(t2)
        if ((d2 /= "Dynamic") & st.get(d2) & matrix.get(d2).get(id)) then {
            maybe.push(d2)
        }
    }
    var best := ""
    for (maybe) do {mn ->
        if (mn.size > best.size) then {
            if (mn.at(1) /= "<") then {
                best := mn
            }
        }
    }
    if (best.size > 0) then {
        return best
    }
    return id
}

