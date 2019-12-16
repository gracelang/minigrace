dialect "none"
import "intrinsic" as intrinsic

trait open {

    use intrinsic.types

    type Object = interface {
        asString → String
        asDebugString → String
    }

    type Pattern = Object & interface {
        & (other:Pattern) → Pattern
        | (other:Pattern) → Pattern
        matches(value:Object) → Boolean
        prefix ¬ → Pattern
        isType → Boolean
    }

    type Binding⟦K,T⟧ = Object & interface {
        key → K
        value → T
        hash → Number
        ==(other) → Boolean
    }

    type EqualityObject = Object & interface {
        ::(o:Object) → Binding
        ==(other:Object) → Boolean
        ≠(other:Object) → Boolean
        hash → Number
    }

    type ExceptionKind = EqualityObject & Pattern & interface {
        refine (parentKind:ExceptionKind) → ExceptionKind
        parent → ExceptionKind
        name → String
        raise (message:String) → Done
        raise (message:String) with (argument:Object) → Done
    }

    type ExceptionPacket = Object & interface {
        exception → ExceptionKind   // the exceptionKind that raised this exception.
        message → String            // the message provided when this exception was raised.

        data → Object               // the data object associated with this exception
                                     // when it was raised, if there was one. Otherwise,
                                     // the string "no data".

        lineNumber → Number         // the source-code line of the raise request
                                    //  that created this exception.

        moduleName → String         // the name of the module containing the raise
                                    // request that created this exception.

        backtrace → Sequence⟦String⟧
        // a description of the call stack at the time that this exception was raised.
        // backtrace.first is the initial execution environment; backtrace.last is the
        // context that raised the exception.

        printBacktrace → Done       // writes a readable description of this
                                    // exceptionPacket and its backtrace to io.error

        printBacktraceSkippingModules(skipable:Collection) → Done
                                    // like printBacktrace, but omiting those stackframes
                                    // representing modules in skipable

        reraise → None              // raise this exceptionPacket again
    }

    type Function0⟦ResultT⟧  = Object & interface {
        apply → ResultT     // Function with no arguments and a result of type ResultT
    }
    type Function1⟦ArgT1, ResultT⟧ = Object & interface {
        apply(a1:ArgT1) → ResultT      // Function with argument a1 of type ArgT1,
                                        // and a result of type ResultT
        matches(a1:Object) → Boolean   // answers true if a1 <: ArgT1
    }
    type Function2⟦ArgT1, ArgT2, ResultT⟧ = Object & interface {
        apply(a1:ArgT1, a2:ArgT2) → ResultT
            // Function with arguments of types ArgT1 and ArgT2, and a result of type ResultT
        matches(a1:Object, a2:Object) → Boolean
            // answers true if a1 <: ArgT1 and a2 <: ArgT2
    }
    type Function3⟦ArgT1, ArgT2, ArgT3, ResultT⟧  = Object & interface {
        apply(a1:ArgT1, a2:ArgT2, a3:ArgT3) → ResultT
        matches(a1:Object, a2:Object, a3:Object) → Boolean
            // answers true if a1 <: ArgT1 and a2 <: ArgT2 and a3 :< ArgT3
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

    type Collection⟦T⟧ = Object & interface {
        // Note that Collection does not include :: or hash, so collections
        // cannot be used as keys in dictionaries (although Sequences can)

        iterator → Iterator⟦T⟧
            // the iterator on which I am based
        isEmpty → Boolean
            // true if I have no elements
        size → Number
            // my size (the number of elements that I contain);
            // may raise SizeUnknown.
        sizeIfUnknown(action: Function0⟦Number⟧)
            // my size; if not known, then the result of applying action
        == (other) → Boolean
            // other and self have the same size, and contain the same elements.
        ≠ (other) → Boolean
            // other and self do not contain the same elements.
        first → T
            // my first element; raises BoundsError if I have none.
        do (body: Procedure1⟦T⟧) → Done
            // an internal iterator; applies body to each of my elements
        do (body:Procedure1⟦T⟧) separatedBy(separator:Procedure0) → Done
            // an internal iterator; applies body to each of my elements, and applies separator in between
        ++ (other: Collection⟦T⟧) → Collection⟦T⟧
            // returns a new Collection over the concatenation of self and other
        fold (binaryFunction:Function2⟦T, T, T⟧) startingWith(initial:T) → T
            // the left-associative fold of binaryFunction over self, starting with initial
        map⟦U⟧ (function:Function1⟦T, U⟧) → Collection⟦U⟧
            // returns a new collection that yields my elements mapped by function
        filter (condition:Predicate1⟦T⟧) → Collection⟦T⟧
            // returns a new collection that yields those of my elements for which condition holds
        contains (elem:T) → Boolean
            // returns true if elem is one of my elements
        includes (condition:Predicate1⟦T⟧) → Boolean
            // returns true if I contain an element e such that condition.apply(e) holds
        >> (target: Collection⟦T⟧ | CollectionFactory⟦T⟧) → Collection⟦T⟧
            // returns target << self; used for writing pipelines
        << (source: Collection⟦T⟧) → Collection⟦T⟧
            // returns self ++ source; used for writing pipelines
    }

    type CollectionFactory⟦T⟧ = Object & interface {
        empty → Collection⟦T⟧                  // an empty collection
        with(element:T) → Collection⟦T⟧        // a collection containing a single element
        withAll(source:Collection⟦T⟧) → Collection⟦T⟧  // a collection containing the elements of source
        << (source:Collection⟦T⟧) → Collection⟦T⟧  // a collection containing the elements of source
    }

    type Iterator⟦T⟧ = interface {
        hasNext → Boolean
        next → T
    }

    type Expandable⟦T⟧ = Collection⟦T⟧ & interface {
        add(x: T) → SelfType
        addAll(xs: Collection⟦T⟧) → SelfType
    }

    type Enumerable⟦T⟧ = Collection⟦T⟧ & interface {
        values → Collection⟦T⟧
        keysAndValuesDo(action:Function2⟦Number,T,Object⟧) → Done
        sortedBy(comparison:Function2⟦T,T,Number⟧) → SelfType
        sorted → SelfType
    }

    type Sequenceable⟦T⟧ = Enumerable⟦T⟧ & interface {
        size → Number
        at(n:Number) → T
        at⟦W⟧(n:Number) ifAbsent(action:Function0⟦W⟧) → T | W
        indices → Sequence⟦Number⟧
        keys → Sequence⟦Number⟧
        second → T
        third → T
        fourth → T
        fifth → T
        last → T
        indexOf⟦W⟧(elem:T) ifAbsent(action:Function0⟦W⟧) → Number | W
        indexOf(elem:T) → Number
        reversed → Sequence⟦T⟧
    }

    type Sequence⟦T⟧ = EqualityObject & Sequenceable⟦T⟧

    type SelfType = Unknown     // becuase it's not yet in the language
}
