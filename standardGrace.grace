#pragma NativePrelude
#pragma ExtendedLineups

class SuccessfulMatch.new(result', bindings') {
    inherit true
    method result { result' }
    method bindings { bindings' }
    method asString {
        "SuccessfulMatch(result = {result}, bindings = {bindings})"
    }
}

class FailedMatch.new(result') {
    inherit false
    method result { result' }
    method bindings { emptySequence }
    method asString {
        "FailedMatch(result = {result})"
    }
}

method abstract {
    SubobjectResponsibility.raise "abstract method not overriden by subobject"
}


method required {
    SubobjectResponsibility.raise "required method not overriden by subobject"
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

method valueOf (nullaryBlock) {
    nullaryBlock.apply
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
    inherit BasicPattern.new
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
                def b = items.at(i).match(mbindings.at(i))
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
    inherit BasicPattern.new
    method match(o) {
        SuccessfulMatch.new(o, [o])
    }
}

class BindingPattern.new(pat) {
    inherit BasicPattern.new
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
    inherit BasicPattern.new
    method match(o) {
        SuccessfulMatch.new(done, [])
    }
}

class AndPattern.new(p1, p2) {
    inherit BasicPattern.new
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
    inherit BasicPattern.new
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
    class new {
        inherit BasicPattern.new
        method match(other) {
            if (self.isMe(other)) then {
                SuccessfulMatch.new(other, [])
            } else {
                FailedMatch.new(other)
            }
        }
        method ==(other) { self.isMe(other) }
    }
    class named(printString) {
        inherit Singleton.new
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
    inherit AndPattern.new(t1, t2)
    // inherit BaseType.new
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
    inherit OrPattern.new(t1, t2)
    // inherit BaseType.new
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
    inherit BasicPattern.new
//    inherit BaseType.new
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
    inherit BasicPattern.new
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
    bindings -> List⟦Unknown⟧
}

type Pattern = {
    & (other:Pattern) -> Pattern
    | (other:Pattern) -> Pattern
    match(value:Object) -> MatchResult
}

type ExceptionKind = Pattern & type {
    refine (parentKind:ExceptionKind) -> ExceptionKind
    parent -> ExceptionKind
    raise (message:String) -> Done
    raise (message:String) with (argument:Object) -> Done
}

type Point =  {

    x -> Number
    // the x-coordinates of self

    y -> Number
    // the y-coordinate of self

    == (other:Object) -> Boolean
    // true if other is a Point with the same x and y coordinates as self.

    + (other:Point) -> Point
    // the Point that is the vector sum of self and other, i.e. (self.x+other.x) @ (self.y+other.y)

    - (other:Point) -> Point
    // the Point that is the vector difference of self and other, i.e. (self.x-other.x) @ (self.y-other.y)

    prefix- -> Point
    // the negation of self
    
    * (factor:Number) -> Point
    // this point scaled by factor, i.e. (self.x*factor) @ (self.y*factor)
    
    / (factor:Number) -> Point
    // this point scaled by 1/factor, i.e. (self.x/factor) @ (self.y/factor)

    length -> Number
    // distance from self to the origin

    distanceTo(other:Point) -> Number
    // distance from self to other

    dot (other:Point) -> Number
    ⋅ (other:Point) -> Number
    // dot product of self and other

    norm -> Point
    // the unit vector (vecor of length 1) in same direction as self

    hash -> Number
    // the hash of self
}

class alwaysEqual {     // a trait
    method == (other) {
        self.isMe(other)
    }
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
    method dot (other:Point) -> Number {
        // dot product
        (x * other.x) + (y * other.y)
    }
    method ⋅ (other:Point) -> Number {
        // dot product
        (x * other.x) + (y * other.y)
    }
    method reverseTimesNumber(n) { point2Dx (n * x) y (n * x) }
    method reversePlusNumber(n) { point2Dx (n + x) y (n + x) }
    method reverseDivideNumber(n) { point2Dx (n / x) y (n / x) }
    method reverseMinusNumber(n) { point2Dx (n - x) y (n - x) }
    method norm { self / self.length }
    method hash { hashCombine(x.hash, y.hash) }
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
        return new GraceNum((aHash * 2) ^ bHash);›
}
import "collectionsPrelude" as coll
// collectionsPrelude defines types using &, so it can't be imported until
// the above definition of TypeIntersection has been executed.

// We should just be able to put "is public" on the above import, but this is
// not fully implemented.  So instead we create an alias:
def collections is public = coll

type Block0⟦R⟧ = collections.Block0⟦R⟧
type Block1⟦T,R⟧ = collections.Block1⟦T,R⟧
type Block2⟦S,T,R⟧ = collections.Block2⟦S,T,R⟧
type Block3⟦S,T,U,R⟧ = type {
    apply(a:S, b:T, c:U) -> R
}
type Cmd = Block0⟦Done⟧
type Fun⟦T,R⟧ = Block1⟦T,R⟧
type Fun2⟦T,U,R⟧ = Block2⟦T,U,R⟧
type Fun3⟦T,U,W,R⟧ = Block3⟦T,U,W,R⟧
type Proc⟦T⟧ = Block1⟦T,Done⟧
type Proc2⟦T,U⟧ = Block2⟦T,U,Done⟧
type Proc3⟦T,U,W⟧ = Block3⟦T,U,W,Done⟧

type Collection⟦T⟧ = collections.Collection⟦T⟧
type Iterable⟦T⟧ = collections.Iterable⟦T⟧
type Expandable⟦T⟧ = collections.Expandable⟦T⟧
type Enumerable⟦T⟧ = collections.Enumerable⟦T⟧
type Binding⟦K,T⟧ = collections.Binding⟦K,T⟧
type Iterator⟦T⟧ = collections.Iterator⟦T⟧
type Sequence⟦T⟧ = collections.Sequence⟦T⟧
type List⟦T⟧ = collections.List⟦T⟧
type Set⟦T⟧ = collections.Set⟦T⟧
type Dictionary⟦K,T⟧ = collections.Dictionary⟦K,T⟧

def BoundsError is public = collections.BoundsError
def IteratorExhausted is public = collections.IteratorExhausted
def NoSuchObject is public = collections.NoSuchObject
def RequestError is public = collections.RequestError
def SubobjectResponsibility is public = collections.SubobjectResponsibility
def ConcurrentModification is public = collections.ConcurrentModification
def UninitializedVariable is public = ProgrammingError.refine "UninitializedVariable"

def collection is public = collections.collection
def enumerable is public = collections.enumerable
def indexable is public = collections.indexable

method sequence⟦T⟧ { collections.sequence⟦T⟧ }
method sequence⟦T⟧(arg) { collections.sequence⟦T⟧.withAll(arg) }
def emptySequence is public = collections.sequence.empty

method list⟦T⟧ { collections.list⟦T⟧ }
method list⟦T⟧(arg) { collections.list⟦T⟧.withAll(arg) }
method emptyList⟦T⟧ { collections.list⟦T⟧.empty }

method set⟦T⟧ { collections.set⟦T⟧ }
method set⟦T⟧(arg) { collections.set⟦T⟧.withAll(arg) }
method emptySet⟦T⟧ { collections.set⟦T⟧.empty }

method dictionary⟦K, T⟧  { collections.dictionary⟦K, T⟧ }
method dictionary⟦K, T⟧(arg) { collections.dictionary⟦K, T⟧.withAll(arg) }
method emptyDictionary⟦K, T⟧ { collections.dictionary⟦K, T⟧.empty }

def binding is public = collections.binding
def range is public = collections.range

method methods {
    prelude.clone(self)
}
