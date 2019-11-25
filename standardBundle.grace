dialect "none"
import "intrinsic" as intrinsic
import "basicTypesBundle" as basicTypesBundle
import "collections" as collections
import "pattern+typeBundle" as patternAndTypeBundle
import "pointBundle" as pointBundle

trait open {
    use basicTypesBundle.open
    use patternAndTypeBundle.open
    use intrinsic.controlStructures
    use intrinsic.constants
    use intrinsic.annotations
    use pointBundle.open

    method do(action)while(condition) {
        self.while {
            action.apply
            condition.apply
        } do { }
    }

    method repeat(n)times(action) {
        if (n.isInteger.not) then {
            self.ProgrammingError.raise "you can't repeat {n} times, because {n} is not an integer"
        }
        var ix := n
        self.while {ix > 0} do {
            ix := ix - 1
            action.apply
        }
    }

    method for (collection) do (block) {
        collection.do(block)
    }

    method for (cs) and (ds) do (action) {
        def dIter = ds.iterator
        cs.do { c ->
            if (dIter.hasNext) then {
                action.apply(c, dIter.next)
            } else {
                return
            }
        }
    }

    method min(a, b) {
        if (a < b) then { a } else { b }
    }

    method max(a, b) {
        if (a > b) then { a } else { b }
    }

    method valueOf (nullaryBlock) {
        nullaryBlock.apply
    }

    trait singleton {
        use BasePattern
        use identityEquality
        method matches(other) { self.isMe(other) }
    }

    trait singleton (nameString) {
        use singleton
        method asString { nameString }
    }

    method hashCombine(a, b) {
        native "c" code ‹
            int a = (int)(args[0]->data);
            int b = (int)(args[1]->data);
            int aHash = a * 1664525;
            int bHash = (b * 1664525 - 0xA21FE89) * 3;
            return alloc_Float64((aHash * 2) ^ bHash);›
        native "js" code ‹
            var a = var_a._value;
            var b = var_b._value;
            var aHash = a * 1664525;
            var bHash = (b * 1664525 - 0xA21FE89) * 3;
            result = new GraceNum((aHash * 2) ^ bHash);›
    }

    type Collection⟦T⟧ = collections.Collection⟦T⟧
    // type Sequence⟦T⟧ is defined in basicTypeBundle
    type List⟦T⟧ = collections.List⟦T⟧
    type Set⟦T⟧ = collections.Set⟦T⟧
    type Dictionary⟦K,T⟧ = collections.Dictionary⟦K,T⟧

    once method BoundsError { collections.BoundsError }
    once method IteratorExhausted { collections.IteratorExhausted }
    once method NoSuchObject { collections.NoSuchObject }
    once method RequestError { collections.RequestError }
    once method SubobjectResponsibility { collections.SubobjectResponsibility }
    once method ConcurrentModification { collections.ConcurrentModification }
    once method UninitializedVariable { self.ProgrammingError.refine "UninitializedVariable" }

    once method π { 3.141592653589793 }
    once method pi { π }

    method collection⟦T⟧ { collections.collection⟦T⟧ }
    method enumerable⟦T⟧ { collections.enumerable⟦T⟧ }
    method indexable⟦T⟧ { collections.indexable⟦T⟧ }

    method sequence⟦T⟧ { collections.sequence⟦T⟧ }
    method sequence⟦T⟧(arg) { collections.sequence⟦T⟧.withAll(arg) }

    method list⟦T⟧ { collections.list⟦T⟧ }
    method list⟦T⟧(arg) { collections.list⟦T⟧.withAll(arg) }

    method set⟦T⟧ { collections.set⟦T⟧ }
    method set⟦T⟧(arg) { collections.set⟦T⟧.withAll(arg) }

    method dictionary⟦K, T⟧  { collections.dictionary⟦K, T⟧ }
    method dictionary⟦K, T⟧(arg) { collections.dictionary⟦K, T⟧.withAll(arg) }

    once method binding { collections.binding }
    once method range { collections.range }

}
