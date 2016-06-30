inherits prelude.methods

method Relationship<From, To> {
    object {
        def map = dictionary []
        method add(f : From, t : To) is public {
            if (!map.containsKey(f)) then {
                map.at(f) put(set [])
            }
            map.at(f).add(t)
        }
        method to(t) is public {
            def res = list []
            map.keysDo {k->
                if (map.at(k).contains(t)) then {
                    res.add(k)
                }
            }
            res
        }
        method from(f) is public {
            map.at(f).asList
        }
    }
}

method ReflexiveRelationship<T> {
    Relationship<T,T>
}

