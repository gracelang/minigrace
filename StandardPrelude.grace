#pragma NativePrelude
#pragma DefaultVisibility=public
inherits _prelude
var isStandardPrelude := true

import "collectionsPrelude" as coll
def collections is readable = coll

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
    method distanceTo(other:XandY) { (((x - other.x)^2) + ((y - other.y)^2))^(0.5) }
    method -(other:XandY) { point2D.x (x - other.x) y (y - other.y) }
    method +(other:XandY) { point2D.x (x + other.x) y (y + other.y) }
    method length {((x^2) + (y^2))^0.5}
    method ==(other) {
        match (other)
            case {o:Point -> (x == o.x) && (y == o.y)}
            case {_ -> false}
    }
}

type Block0<R> = collections.Block0<R>
type Block1<T,R> = collections.Block1<T,R>
type Block2<S,T,R> = collections.Block1<T,R>

type IndexableCollection<T> = collections.IndexableCollection
type Collection = collections.Collection
type Dictionary = collections.Dictionary
type Binding = collections.Binding
type Iterator<T> = collections.Iterator<T>
type CollectionFactory = collections.CollectionFactory
type EmptyCollectionFactory = collections.EmptyCollectionFactory

def BoundsError is public = collections.BoundsError
def Exhausted is public = collections.Exhausted
def NoSuchObject is public = collections.NoSuchObject
def RequestError is public = collections.RequestError

def collectionFactory is public = collections.collectionFactory
def iterable is public = collections.iterable
def enumerable is public = collections.enumerable
def list is public = collections.list
def set is public = collections.set
def dictionary is public = collections.dictionary
def binding is public = collections.binding
def range is public = collections.range

def _standardPrelude = self
def BasicGrace = object {
    method new {
        _prelude.clone(_standardPrelude)
    }
}
method new {
    _prelude.clone(self)
}
method methods {
    _prelude.clone(self)
}


