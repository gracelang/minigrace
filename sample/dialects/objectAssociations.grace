inherits prelude.methods

method Relationship<From, To> {
    object {
        def map = dictionary.empty
        method add(f : From, t : To) is public {
            if (!map.containsKey(f)) then {
                map.at(f) put(set.empty)
            }
            map.at(f).add(t)
        }
        method to(t) is public {
            def res = list.empty
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

