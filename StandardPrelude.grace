#pragma NativePrelude
#pragma DefaultVisibility=public

var isStandardPrelude := true

class SuccessfulMatch.new(result', bindings') {
    inherits true
    def result = result'
    def bindings = bindings'
    method asString {
        "SuccessfulMatch(result = {result}, bindings = {bindings})"
    }
}

class FailedMatch.new(result') {
    inherits false
    def result = result'
    def bindings = []
    method asString {
        "FailedMatch(result = {result})"
    }
}

type Extractable = {
    extract
}

type MatchResult = {
  result -> Object
  bindings -> List<Object>
}

type Pattern = {
  &(and : Pattern) -> Pattern
  |(or : Pattern) -> Pattern
  match(value : Object) -> MatchResult
}

method abstract {
    // this is copied from collectionsPrelude, because there is
    // no simple way to delegate to it.
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

type Point = type {
    x -> Number
    y -> Number
    asString -> String
    distanceTo(other:Point) -> Number
    -(other:Point) -> Point
    +(other:Point) -> Point
    length -> Number
    ==(other:Object) -> Boolean
}

class point2D.x(x')y(y') {
    def x is readable = x'
    def y is readable = y'
    method asString { "({x}@{y})" }
    method asDebugString { self.asString }
    method distanceTo(other:Point) { (((x - other.x)^2) + ((y - other.y)^2))^(0.5) }
    method -(other:Point) { point2D.x (x - other.x) y (y - other.y) }
    method +(other:Point) { point2D.x (x + other.x) y (y + other.y) }
    method /(other:Number) { point2D.x (x / other) y (y / other) }
    method *(other:Number) { point2D.x (x * other) y (y * other) }
    method length {((x^2) + (y^2))^0.5}
    method ==(other) {
        match (other)
            case {o:Point -> (x == o.x) && (y == o.y)}
            case {_ -> false}
    }
}

import "collectionsPrelude" as coll
// collectionsPrelude defines types using &, so it can't be imported until
// the above definition of TypeIntersection has been executed.

// We should just be able to put "is public" on the above import, but this is
// not fully implemented.  So intead we create an alias:
def collections is public = coll

type Block0<R> = collections.Block0<R>
type Block1<T,R> = collections.Block1<T,R>
type Block2<S,T,R> = collections.Block1<T,R>

type Collection<T> = collections.Collection<T>
type Enumerable<T> = collections.Enumerable<T>
type Binding<K,T> = collections.Binding<K,T>
type Iterator<T> = collections.Iterator<T>
type CollectionFactory<T> = collections.CollectionFactory<T>
type EmptyCollectionFactory<T> = collections.EmptyCollectionFactory<T>
type Sequence<T> = collections.Sequence<T>
type List<T> = collections.List<T>
type Set<T> = collections.Set<T>
type Dictionary<K,T> = collections.Dictionary<K,T>

def BoundsError is public = collections.BoundsError
def Exhausted is public = collections.Exhausted
def NoSuchObject is public = collections.NoSuchObject
def RequestError is public = collections.RequestError
def SubobjectResponsibility is public = collections.SubobjectResponsibility
def ConcurrentModification is public = collections.ConcurrentModification

def collectionFactory is public = collections.collectionFactory
def collection is public = collections.collection
def enumerable is public = collections.enumerable
def indexable is public = collections.indexable
def sequence is public = collections.sequence
def list is public = collections.list
def set is public = collections.set
def dictionary is public = collections.dictionary
def binding is public = collections.binding
def range is public = collections.range

method methods {
    prelude.clone(self)
}


