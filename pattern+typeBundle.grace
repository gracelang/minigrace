dialect "none"
import "equalityBundle" as equalityBundle
import "mirror" as mirror

trait open {

    use equalityBundle.open

    method asString { "pattern+typeBundle.open" }

    trait BasicPattern {
        method &(o) {
            AndPattern(self, o)
        }
        method |(o) {
            OrPattern(self, o)
        }
        method prefix ¬ {
            NotPattern(self)
        }
    }

    trait AndPattern(p1, p2) {
        use BasicPattern
        method matches(obj) {
            if (p1.matches(obj)) then { p2.matches(obj) } else { false }
        }
    }

    trait OrPattern(p1, p2) {
        use BasicPattern
        method matches(o) {
            if (p1.matches(o)) then { true } else { p2.matches(o) }
        }
    }

    trait NotPattern(p) {
        use BasicPattern
        method matches(o) {
            p.matches(o).not
        }
    }

    trait BaseType {
        use identityEquality

        method &(o) { TypeIntersection(self, o)  }
        method |(o) { TypeVariant(self, o) }
        method +(o) { TypeUnion(self, o) }
        method -(o) { TypeSubtraction(self, o) }
        method asString { "type {self.name}" }
        method setName(nu) is confidential {
            self.name:=(nu)
            return self     // for chaining
        }
        method matchHook(obj) is required   // does the actual matching
        method matches(obj) {
            // this caches the result of matchHook, under the assumption
            // that two objects with the same classUid will have the same type
            native "js" code ‹
                if (! this.matchCache) this.matchCache = [];
                let key = var_obj.classUid;
                result = this.matchCache[key];
                if (result) return result;
                result = selfRequest(this, "matchHook(1)", [1], var_obj);
                this.matchCache[key] = result;
            ›
        }
    }

    class TypeIntersection (t1, t2) {
        use AndPattern (t1, t2)
            alias matchHook(_) = matches(_)
            exclude &(_)
            exclude |(_)
            exclude matches(_)
        use BaseType
        var name is readable := "‹anon›"
        method methodNames {
            t1.methodNames.addAll(t2.methodNames)
        }
        method asString {
            if (self.name == "‹anon›") then {
                "({t1} & {t2})"
            } else {
                "type {self.name}"
            }
        }
    }

    class TypeVariant (t1, t2) {
        use OrPattern (t1, t2)
            alias matchHook(_) = matches(_)
            exclude &(_)
            exclude |(_)
            exclude matches(_)
        use BaseType
        var name is readable := "‹anon›"
        method methodNames {
            self.MethodsInTypeVariantsNotImplemented
        }
        method asString {
            if (self.name == "‹anon›") then {
                "({t1} | {t2})"
            } else {
                "type {self.name}"
            }
        }
    }

    class TypeUnion (t1, t2) {
        use BaseType
        var name is readable := "‹anon›"
        method methodNames {
            t1.methodNames ** t2.methodNames
        }
        method matchHook(o) {
            def oMethodNames = mirror.reflect(o).methodNames
            for (self.methodNames) do { each ->
                if (! oMethodNames.contains(each)) then {
                    return false
                }
            }
            return true
        }
        method asString {
            if (self.name == "‹anon›") then {
                "({t1} + {t2})"
            } else {
                "type {self.name}"
            }
        }
    }

    class TypeSubtraction (t1, t2) {
        use BaseType
        var name is readable := "‹anon›"
        method methodNames {
            t1.methodNames.removeAll(t2.methodNames)
        }
        method asString {
            if (self.name == "‹anon›") then {
                "({t1} - {t2})"
            } else {
                "type {self.name}"
            }
        }
    }

}
