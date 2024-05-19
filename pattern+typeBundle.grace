dialect "none"
import "equalityBundle" as equalityBundle
import "collections" as coll
import "intrinsic" as intrinsic

// This module _defines_ the & and | operations on types.  Hence, we
// _cannot_ define or use here any types made with & or |.

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
                return result;
            ›
        }
        method isNone { false }
        method isType { true }
        method typeParameterNames {
            native "js" code ‹
                if (! this.typeParamNames) {
                    return new GraceSequence([]);
                }
                return new GraceSequence(this.typeParamNames.map(
                        nm => new GraceString(nm)));
            ›
        }
        method interfaces is required
        method isInterface { false }
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
        // t1 can't be a GraceInterface (from gracelib) — it must be an
        // exclusion
        var name is readable := "{t1.name} & {t2.name}"
        def interfaces is readable = t1.interfaces.map { each -> each & t2 }
        method asDebugString {
            var result := ""
            interfaces.do { each -> result := result ++ each.name }
                separatedBy { result := result ++ " | " }
            result
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
        var name is readable := {  // not a once method, because
            // compiled code uses name:=(_) to set the name
            def t1Name = if (t1.name.startsWith "(") then { t1.name }
                elseif { t1.name.contains "&" } then { "({t1.name})" }
                else { t1.name }

            def t2Name = if (t2.name.startsWith "(") then { t2.name }
                elseif { t2.name.contains "&" } then { "({t2.name})" }
                else { t2.name }

            "{t1Name} | {t2Name}"
        }.apply
        once method interfaces {
            def result = t1.interfaces >> coll.list
            t2.interfaces.do { each ->
                if (! result.contains(each)) then {
                    result.addLast(each)
                }
            }
            result >> coll.sequence
        }
        method isInterface { false }
    }

    class TypeExclusion (t1, t2) {
        use BaseType
        var name is readable := "{t1} - {t2}"
        if (t2.isInterface.not) then {
            intrinsic.constants.TypeError.raise
                "right-hand argument to `-` operator is not an interface"
        }

        once method interfaces {
            t1.interfaces.map { each -> each - t2 }
        }
    }

}
