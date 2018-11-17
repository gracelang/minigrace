#pragma ExtendedLineups
dialect "none"

method abstract {
    SubobjectResponsibility.raise "abstract method not overriden by subobject"
}


method required {
    SubobjectResponsibility.raise "required method not provided by subobject"
}

method do(action)while(condition) {
    while {
        action.apply
        condition.apply
    } do { }
}

method repeat(n)times(action) {
    if (n.isInteger.not) then {
        ProgrammingError.raise "you can't repeat {n} times, because {n} is not an integer"
    }
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

def BasicPattern is public = object {
    class new {
        method &(o) {
            AndPattern.new(self, o)
        }
        method |(o) {
            OrPattern.new(self, o)
        }
    }
}

def AndPattern is public = object {
    class new(p1, p2) {
        inherit BasicPattern.new
        method matches(obj) {
            if (p1.matches(obj)) then {
                p2.matches(obj)
            } else {
                false
            }
        }
    }
}

def OrPattern is public = object {
    class new(p1, p2) {
        inherit BasicPattern.new
        method matches(o) {
            if (p1.matches(o)) then { return true }
            p2.matches(o)
        }
    }
}

def Singleton is public = object {
    class new {
        inherit BasicPattern.new
        use identityEquality
        method matches(other) { self.isMe(other) }
    }
    class named(printString) {
        inherit Singleton.new
        method asString { printString }
    }
}

method singleton { Singleton.new }

method singleton (nameString) { Singleton.named(nameString) }

trait BaseType {
    use identityEquality
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
        "type {self.name}"
    }
    method setName(nu) is confidential {
        self.name:=(nu)
        return self     // for chaining
    }
}

def TypeIntersection is public = object {
    class new(t1, t2) {
        inherit AndPattern.new(t1, t2)
        use BaseType
        var name is readable := "‹anon›"
        method methodNames {
            t1.methodNames.addAll(t2.methodNames)
        }
        method typeNames {
            t1.typeNames.addAll(t2.typeNames)
        }
        method asString {
            if (self.name == "‹anon›") then {
                "({t1} & {t2})"
            } else {
                "type {self.name}"
            }
        }

    }
}

def TypeVariant is public = object {
    class new(t1, t2) {
        inherit OrPattern.new(t1, t2)
        use BaseType
        var name is readable := "‹anon›"
        method methodNames {
            self.MethodsInTypeVariantsNotImplemented
        }
        method typeNames {
            self.TypesInTypeVariantsNotImplemented
        }
        method asString {
            if (self.name == "‹anon›") then {
                "({t1} | {t2})"
            } else {
                "type {self.name}"
            }
        }
    }
}

def TypeUnion is public = object {
    class new(t1, t2) {
        inherit BasicPattern.new
        use BaseType
        var name is readable := "‹anon›"
        method methodNames {
            t1.methodNames ** t2.methodNames
        }
        method matches(o) {
            ResourceException.raise "matching against a TypeUnion not yet implemented"
            // Why not?  Becuase it requires reflection, which
            // requires the mirror module, which requires this module.
            def mirror = ...
            def oMethodNames = mirror.reflect(o).methodNames
            for (self.methodNames) do { each ->
                if (! oMethodNames.contains(each)) then {
                    return false
                }
            }
            return true
        }
        method typeNames {
            t1.typeNames ** t2.typeNames
        }
        method asString {
            if (self.name == "‹anon›") then {
                "({t1} + {t2})"
            } else {
                "type {self.name}"
            }
        }
    }
}

def TypeSubtraction is public = object {
    class new(t1, t2) {
        inherit BasicPattern.new
        use BaseType
        var name is readable := "‹anon›"
        method methodNames {
            t1.methodNames.removeAll(t2.methodNames)
        }
        method typeNames {
            t1.typeNames.removeAll(t2.typeNames)
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

// Now define the types.  Because some of the types are defined using &,
// TypeIntersection must be defined first.

type Extractable = {
    extract
}

type Pattern = {
    & (other:Pattern) -> Pattern
    | (other:Pattern) -> Pattern
    matches(value:Object) -> Boolean
}

type ExceptionKind = Pattern & interface {
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

    + (other:Point|Number) -> Point
    // if other is a Point, returns the Point that is the vector sum of self
    // and other, i.e. (self.x+other.x) @ (self.y+other.y).  If other is a Number,
    // returns the point (self.x+other) @ (self.y+other)

    - (other:Point|Number) -> Point
    // if other is a Point, returns the Point that is the vector difference of
    // self and other, i.e. (self.x-other.x) @ (self.y-other.y). If other is a
    // Number, returns the point (self.x-other) @ (self.y-other)


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

class point2Dx (x') y (y') {
    use equality
    def x is readable = x'
    def y is readable = y'
    method asString { "({x}@{y})" }
    method asDebugString { self.asString }
    method distanceTo(other:Point) {
        (((x - other.x)^2) + ((y - other.y)^2)).sqrt
    }
    method -(other) {
        match(other)
            case { o:Point -> point2Dx (x - o.x) y (y - o.y) }
            case { n:Number -> point2Dx (x - n) y (y - n) }
            case { _ -> other.reverseMinusPoint(self) }
    }
    method +(other) {
        match(other)
            case { o:Point -> point2Dx (x + o.x) y (y + o.y) }
            case { n:Number -> point2Dx (x + n) y (y + n) }
            case { _ -> other.reversePlusPoint(self) }
    }
    method /(other:Number) { point2Dx (x / other) y (y / other) }
    method *(other:Number) { point2Dx (x * other) y (y * other) }
    method length { ((x^2) + (y^2)).sqrt }
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
    method reverseTimesNumber(n) { point2Dx (n * x) y (n * y) }
    method reversePlusNumber(n) { point2Dx (n + x) y (n + y) }
    method reverseDivideNumber(n) { point2Dx (n / x) y (n / y) }
    method reverseMinusNumber(n) { point2Dx (n - x) y (n - y) }
    method norm { self / self.length }
    method hash { hashCombine(x.hash, y.hash) }
}

def pi is public = π

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

trait equality {
    method == (other) is required
    method hash is required    // should obey invariant (a == b) => (a.hash == b.hash)
    method ≠ (other)  { (self == other).not }
    method :: (obj) { binding.key (self) value (obj) }
}

trait identityEquality {
    use equality
    method == (other) { self.isMe(other) }
    method hash { self.myIdentityHash }
}

// New names for Blocks: FunctionN == BlockN

type Function0⟦ResultT⟧  = interface {
    apply -> ResultT     // Function with no arguments and a result of type ResultT
    //  matches -> Boolean   // answers true
}
type Function1⟦ArgT1, ResultT⟧ = interface {
    apply(a1:ArgT1) -> ResultT    // Function with argument a1 of type ArgT1, and a result of type ResultT
    matches(a1:Object) -> Boolean   // answers true if a1 <: ArgT1
}
type Function2⟦ArgT1, ArgT2, ResultT⟧ = interface {
    apply(a1:ArgT1, a2:ArgT2) -> ResultT
    // Function with arguments of types ArgT1 and ArgT2, and a result of type ResultT
    matches(a1:Object, a2:Object) -> Boolean
        // answers true if a1 <: ArgT1 and a2 <: ArgT2
}
type Function3⟦ArgT1, ArgT2, ArgT3, ResultT⟧  = interface {
    apply(a1:ArgT1, a2:ArgT2, a3:ArgT3) -> ResultT
    matches(a1:Object, a2:Object, a3:Object) -> Boolean
        // answers true if a1 <: ArgT1 and a2 <: ArgT2 and a3 :< ArgT3
}

type EqualityObject = Object & interface {
    ::(o:Object) -> Binding
    ==(other:Object) -> Boolean
    ≠(other:Object) -> Boolean
    hash -> Number
}

// Procedures are fuctions that have no result

type Procedure0 = Function0⟦Done⟧
    // Function with no arguments and no result
type Procedure1⟦ArgT1⟧ = Function1⟦ArgT1, Done⟧
    // Function with 1 argument of type ArgT1, and no result
type Procedure2⟦ArgT1, ArgT2⟧ = Function2⟦ArgT1, ArgT2, Done⟧ 
    // Function with 2 arguments of types ArgT1 and ArgT2, and no result
type Procedure3⟦ArgT1, ArgT2, ArgT3⟧ = Function3⟦ArgT1, ArgT2, ArgT3, Done⟧

// Predictates are functions that return a Boolean

type Predicate0 = Function0⟦Boolean⟧
    // Function with no arguments returning Boolean
type Predicate1⟦ArgT1⟧ = Function1⟦ArgT1, Boolean⟧
    // Function with 1 argument of type ArgT1, returning Boolean
type Predicate2⟦ArgT1, ArgT2⟧ = Function2⟦ArgT1, ArgT2, Boolean⟧
    // Function with 2 arguments of types ArgT1 and ArgT2, returning Boolean
type Predicate3⟦ArgT1, ArgT2, ArgT3⟧ = Function3⟦ArgT1, ArgT2, ArgT3, Boolean⟧
    // Function with 3 arguments of types ArgT1, ArgT2, and ArgT3, returning Boolean

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

method collection⟦T⟧ { collections.collection⟦T⟧ }
method enumerable⟦T⟧ { collections.enumerable⟦T⟧ }
method indexable⟦T⟧ { collections.indexable⟦T⟧ }

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
