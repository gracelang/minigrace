dialect "none"
import "equalityBundle" as equalityBundle
import "mirror" as mirror
import "collections" as coll
import "intrinsic" as intrinsic

def ic = intrinsic.controlStructures
use intrinsic.annotations

trait open {

    use equalityBundle.open

    trait BasePattern {
        method &(o) {
            AndPattern(self, o)
        }
        method |(o) {
            OrPattern(self, o)
        }
        method prefix ¬ {
            NotPattern(self)
        }
        method isType { false }
        method setTypeName(_) is confidential {
            // This method exists so that if compiled code tries to setTypeName
            // on a pattern, we will get a nicer error than NoSuchMethod.
            // It is confidetial so that it does not show up in the Pattern type.
            intrinsic.constants.TypeError.raise "{self} is a Pattern, but not a Type"
        }
    }

    trait AndPattern(p1, p2) {
        use BasePattern
        method matches(obj) {
            if (p1.matches(obj)) then { p2.matches(obj) } else { false }
        }
    }

    trait OrPattern(p1, p2) {
        use BasePattern
        method matches(o) {
            if (p1.matches(o)) then { true } else { p2.matches(o) }
        }
    }

    trait NotPattern(p) {
        use BasePattern
        method matches(o) {
            p.matches(o).not
        }
    }

    trait BaseType {
        use identityEquality

        method &(o) { TypeIntersection(self, o)  }
        method |(o) { TypeVariant(self, o) }
        method -(o) { TypeExclusion(self, o) }
        method prefix ¬ { NotPattern(self) }
        method asString { "type {self.name}" }
        method setName(nu) is confidential {
            self.name := nu
            self     // for chaining
        }
        method setTypeName(nu) is confidential {
            // requested from compiled code when a named type is declared
            self.name := nu
            self     // for chaining
        }
        method name:=(nu) is required
        method name is required
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
        method isNone { false }
        method isType { true }
        method methodNames {
            native "js" code ‹
                let jsResult = [];
                for (let i=0; i<this.typeMethods.length; i++) {
                    const methName = this.typeMethods[i];
                    jsResult.push(canonicalMethodName(methName));
                }
                return new GraceSequence(jsResult.sort().map(
                    nm => new GraceString(nm)));
            ›
        }
    }

    method merge(cs, ds) {
        // cs and ds are sorted sequences.  Return their sorted merge
        def cIter = cs.iterator
        def dIter = ds.iterator
        def result = coll.list.empty

        if (cIter.hasNext.not) then { return ds }
        if (dIter.hasNext.not) then { return cs }

        var c := cIter.next
        var d := dIter.next

        ic.while {cIter.hasNext && dIter.hasNext} do {
            if (c <= d) then {
                result.addLast(c)
                c := cIter.next
                if (c == d) then {  d := dIter.next }
            } else {
                result.addLast(d)
                d := dIter.next
            }
        }

        if (c <= d) then {
            result.addAll [c,d]
        } else {
            result.addAll [d,c]
        }
        ic.while {cIter.hasNext} do { result.addLast(cIter.next) }
        ic.while {dIter.hasNext} do { result.addLast(dIter.next) }
        result
    }


    method TypeIntersection (t1, t2) {
        if (t2.isType.not) then { return t2 & t1 }   // double-dispatch to Pattern t2
        if (t1.isNone) then {return t1}
        if (t2.isNone) then {return t2}
        AndType (t1, t2)
    }
    class AndType (t1, t2) {
        use AndPattern (t1, t2)
            alias matchHook(_) = matches(_)
            exclude &(_)
            exclude |(_)
            exclude matches(_)
            exclude isType
            exclude setTypeName(_)
            exclude prefix ¬
        use BaseType
        var name is readable := "‹anon›"
        method methodNames {
            merge(t1.methodNames, t2.methodNames)
        }
        method asString {
            if (self.name == "‹anon›") then {
                "({t1} & {t2})"
            } else {
                "type {self.name}"
            }
        }
    }

    method TypeVariant (t1, t2) {
        if (t2.isType.not) then { return t2 | t1 }   // double-dispatch to Pattern t2
        if (t1.isNone) then {return t2}
        if (t2.isNone) then {return t1}
        BarType(t1, t2)
    }
    class BarType(t1, t2)  {
        use OrPattern (t1, t2)
            alias matchHook(_) = matches(_)
            exclude &(_)
            exclude |(_)
            exclude matches(_)
            exclude isType
            exclude setTypeName(_)
            exclude prefix ¬
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

    class TypeExclusion (t1, t2) {
        use BaseType
        var name is readable := "‹anon›"
        method methodNames {
            coll.list(t1.methodNames).removeAll(t2.methodNames)
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
