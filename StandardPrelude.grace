#pragma NativePrelude
#pragma ExtendedLineups

var isStandardPrelude := true

class SuccessfulMatch.new(result', bindings') {
    inherits true
    method result { result' }
    method bindings { bindings' }
    method asString {
        "SuccessfulMatch(result = {result}, bindings = {bindings})"
    }
}

class FailedMatch.new(result') {
    inherits false
    method result { result' }
    method bindings { emptySequence }
    method asString {
        "FailedMatch(result = {result})"
    }
}

method abstract {
    SubobjectResponsibility.raise "abstract method not overriden by subobject"
}

method do(action)while(condition) {
    while {
        action.apply
        condition.apply
    } do { }
}

method repeat(n)times(action) {
    var ix := n
    while {ix > 0} do {
        ix := ix - 1
        action.apply
    }
}

method for (cs) and (ds) do (action) -> Done {
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

class BasicPattern.new {
    method &(o) {
        AndPattern.new(self, o)
    }
    method |(o) {
        OrPattern.new(self, o)
    }
}
class MatchAndDestructuringPattern.new(pat, items') {
    inherits BasicPattern.new
    def pattern = pat
    def items = items'
    method match(o) {
        def m = pat.match(o)
        if (m) then{
            var mbindings := m.bindings
            def bindings = []
            if (mbindings.size < items.size) then {
                if (Extractable.match(o)) then {
                    mbindings := o.extract
                } else {
                    return FailedMatch.new(o)
                }
            }
            for (items.indices) do {i->
                def b = items[i].match(mbindings[i])
                if (!b) then {
                    return FailedMatch.new(o)
                }
                for (b.bindings) do {bb->
                    bindings.push(bb)
                }
            }
            SuccessfulMatch.new(o, bindings)
        } else {
            FailedMatch.new(o)
        }
    }
}

class VariablePattern.new(nm) {
    inherits BasicPattern.new
    method match(o) {
        SuccessfulMatch.new(o, [o])
    }
}

class BindingPattern.new(pat) {
    inherits BasicPattern.new
    method match(o) {
        def bindings = [o]
        def m = pat.match(o)
        if (!m) then {
            return m
        }
        for (m.bindings) do {b->
            bindings.push(b)
        }
        SuccessfulMatch.new(o, bindings)
    }
}

class WildcardPattern.new {
    inherits BasicPattern.new
    method match(o) {
        SuccessfulMatch.new(done, [])
    }
}

class AndPattern.new(p1, p2) {
    inherits BasicPattern.new
    method match(o) {
        def m1 = p1.match(o)
        if (!m1) then {
            return m1
        }
        def m2 = p2.match(o)
        if (!m2) then {
            return m2
        }
        def bindings = []
        for (m1.bindings) do {b->
            bindings.push(b)
        }
        for (m2.bindings) do {b->
            bindings.push(b)
        }
        SuccessfulMatch.new(o, bindings)
    }
}

class OrPattern.new(p1, p2) {
    inherits BasicPattern.new
    method match(o) {
        if (p1.match(o)) then {
            return SuccessfulMatch.new(o, [])
        }
        if (p2.match(o)) then {
            return SuccessfulMatch.new(o, [])
        }
        FailedMatch.new(o)
    }
}

def Singleton is public = object {
    factory method new {
        inherits BasicPattern.new
        method match(other) {
            if (self == other) then {
                SuccessfulMatch.new(other, [])
            } else {
                FailedMatch.new(other)
            }
        }
    }
    factory method named(printString) {
        inherits Singleton.new
        method asString { printString }
    }
}

class BaseType.new(name) {
    method &(o) {
        TypeIntersection.new(self, o)
    }
    method |(o) {
        TypeVariant.new(self, o)
    }
    method +(o) {
        TypeUnion.new(self, o)
    }
    method -(o) {
        TypeSubtraction.new(self, o)
    }
    method asString {
        if (name == "") then { "type ‹anon›" }
                        else { "type {name}" }
    }
}

class TypeIntersection.new(t1, t2) {
    inherits AndPattern.new(t1, t2)
    // inherits BaseType.new
    method &(o) {
        TypeIntersection.new(self, o)
    }
    method |(o) {
        TypeVariant.new(self, o)
    }
    method +(o) {
        TypeUnion.new(self, o)
    }
    method -(o) {
        TypeSubtraction.new(self, o)
    }
    method methodNames {
        t1.methodNames.addAll(t2.methodNames)
    }
    method asString { "({t1} & {t2})" }
}

class TypeVariant.new(t1, t2) {
    inherits OrPattern.new(t1, t2)
    // inherits BaseType.new
    method &(o) {
        TypeIntersection.new(self, o)
    }
    method |(o) {
        TypeVariant.new(self, o)
    }
    method +(o) {
        TypeUnion.new(self, o)
    }
    method -(o) {
        TypeSubtraction.new(self, o)
    }
    method methodNames {
        self.TypeVariantsCannotBeCharacterizedByASetOfMethods
    }
    method asString { "({t1} | {t2})" }
}

class TypeUnion.new(t1, t2) {
    inherits BasicPattern.new(t1, t2)
//    inherits BaseType.new
    method &(o) {
        TypeIntersection.new(self, o)
    }
    method |(o) {
        TypeVariant.new(self, o)
    }
    method +(o) {
        TypeUnion.new(self, o)
    }
    method -(o) {
        TypeSubtraction.new(self, o)
    }
    method methodNames {
        t1.methodNames ** t2.methodNames
    }
    method match(o) {
        ResourceException.raise "matching against a TypeUnion not yet implemented"
        // Why not?  Becuase it requires reflection, which
        // requires the mirror module, which requires this module.
        def mirror = ...
        def oMethodNames = mirror.reflect(o).methodNames
        for (self.methodNames) do { each ->
            if (! oMethodNames.contains(each)) then {
                return FailedMatch.new(o)
            }
        }
        return SuccessfulMatch.new(o, [])
    }
    method asString { "({t1} + {t2})" }
}

class TypeSubtraction.new(t1, t2) {
    inherits BasicPattern.new(t1, t2)
    method &(o) {
        TypeIntersection.new(self, o)
    }
    method |(o) {
        TypeVariant.new(self, o)
    }
    method +(o) {
        TypeUnion.new(self, o)
    }
    method -(o) {
        TypeSubtraction.new(self, o)
    }
    method methodNames {
        t1.methodNames.removeAll(t2.methodNames)
    }
    method asString { "({t1} - {t2})" }
}

// Now define the types.  Because some of the types are defined using &,
// TypeIntersection must be defined first.

type Extractable = {
    extract
}

type MatchResult = Boolean & type {
    result -> Unknown
    bindings -> List<Unknown>
}

type Pattern = {
    & (other:Pattern) -> Pattern
    | (other:Pattern) -> Pattern
    match(value:Object) -> MatchResult
}

type ExceptionKind = Pattern & type {
    refine -> ExceptionKind
    parent -> ExceptionKind
    raise(message:String) -> Done
    raise(message:String) with (argument:Object) -> Done
}

type Point =  {

    x -> Number
    // the x-coordinates of self

    y -> Number
    // the y-coordinate of self

    + (other:Point) -> Point
    // the Point that is the vector sum of self and other, i.e. (self.x+other.x) @ (self.y+other.y)

    - (other:Point) -> Point
    // the Point that is the vector difference of self and other, i.e. (self.x-other.x) @ (self.y-other.y)
    
    * (factor:Number) -> Point
    // this point scaled by factor, i.e. (self.x*factor) @ (self.y*factor)
    
    / (factor:Number) -> Point
    // this point scaled by 1/factor, i.e. (self.x/factor) @ (self.y/factor)

    length -> Number
    // distance from self to the origin

    distanceTo(other:Point) -> Number
    // distance from self to other
}

class point2Dx (x') y (y') {
    def x is readable = x'
    def y is readable = y'
    method asString { "({x}@{y})" }
    method asDebugString { self.asString }
    method distanceTo(other:Point) { (((x - other.x)^2) + ((y - other.y)^2))^(0.5) }
    method -(other:Point) { point2Dx (x - other.x) y (y - other.y) }
    method +(other:Point) { point2Dx (x + other.x) y (y + other.y) }
    method /(other:Number) { point2Dx (x / other) y (y / other) }
    method *(other:Number) { point2Dx (x * other) y (y * other) }
    method length {((x^2) + (y^2))^0.5}
    method ==(other) {
        match (other)
            case {o:Point -> (x == o.x) && (y == o.y)}
            case {_ -> false}
    }
    method prefix- { point2Dx (-x) y (-y) }
}

import "collectionsPrelude" as coll
// collectionsPrelude defines types using &, so it can't be imported until
// the above definition of TypeIntersection has been executed.

// We should just be able to put "is public" on the above import, but this is
// not fully implemented.  So instead we create an alias:
def collections is public = coll

type Block0<R> = collections.Block0<R>
type Block1<T,R> = collections.Block1<T,R>
type Fun<T,R> = collections.Block1<T,R>
type Block2<S,T,R> = collections.Block2<S,T,R>

type Collection<T> = collections.Collection<T>
type Iterable<T> = collections.Iterable<T>
type Expandable<T> = collections.Expandable<T>
type Enumerable<T> = collections.Enumerable<T>
type Binding<K,T> = collections.Binding<K,T>
type Iterator<T> = collections.Iterator<T>
type Sequence<T> = collections.Sequence<T>
type List<T> = collections.List<T>
type Set<T> = collections.Set<T>
type Dictionary<K,T> = collections.Dictionary<K,T>

def BoundsError is public = collections.BoundsError
def IteratorExhausted is public = collections.IteratorExhausted
def NoSuchObject is public = collections.NoSuchObject
def RequestError is public = collections.RequestError
def SubobjectResponsibility is public = collections.SubobjectResponsibility
def ConcurrentModification is public = collections.ConcurrentModification

def collection is public = collections.collection
def enumerable is public = collections.enumerable
def indexable is public = collections.indexable

method sequence<T>(arg) {
    collections.sequence<T>.withAll(arg)
}

def emptySequence is public = collections.sequence.empty

method list<T>(arg) {
    collections.list<T>.withAll(arg)
}
method emptyList { collections.list.empty }

method set<T>(arg) {
    collections.set<T>.withAll(arg)
}
method emptySet { collections.set.empty }

method dictionary<K, T>(arg) {
    collections.dictionary<K, T>.withAll(arg)
}
method emptyDictionary { collections.dictionary.empty }

def binding is public = collections.binding
def range is public = collections.range

method methods {
    prelude.clone(self)
}


