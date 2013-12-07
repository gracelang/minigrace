import "mgcollections" as collections
import "StandardPrelude" as StandardPrelude
inherits StandardPrelude.methods

method Relationship<From, To> {
    object {
        def map = collections.map.new
        method add(f : From, t : To) is public {
            if (!map.contains(f)) then {
                map.put(f, collections.set.new)
            }
            map.get(f).add(t)
        }
        method to(t) is public {
            def res = collections.list.new
            for (map) do {k->
                if (map.get(k).contains(t)) then {
                    res.push(k)
                }
            }
            res
        }
        method from(f) is public {
            def res = collections.list.new
            for (map.get(f)) do {v->
                res.push(v)
            }
            res
        }
    }
}

method ReflexiveRelationship<T> {
    Relationship<T,T>
}

