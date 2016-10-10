inherit prelude.methods

method relationship⟦From, To⟧ {
    object {
        def map = prelude.dictionary []
        method add(f : From, t : To) is public {
            if (!map.containsKey(f)) then {
                map.at(f) put(prelude.set [])
            }
            map.at(f).add(t)
        }
        method to(t) is public {
            def res = prelude.list []
            map.keysDo {k->
                if (map.at(k).contains(t)) then {
                    res.add(k)
                }
            }
            res
        }
        method from(f) is public {
            prelude.list(map.at(f))
        }
    }
}

method reflexiveRelationship⟦T⟧ {
    relationship⟦T,T⟧
}

