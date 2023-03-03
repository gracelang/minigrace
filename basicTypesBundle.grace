dialect "none"
import "intrinsic" as intrinsic

trait open {

    type None = intrinsic.NoneType

    type Type⟦T⟧ = Object & interface {
        name → String           // the name of this type
        typeParameterNames → Sequence⟦String⟧
        isNone → Boolean        // true for the type None, otherwise false
        matches (value:Object) → Boolean
        & (other:Type) → Type⟦?⟧   // ansers the join (Self & other)
        | (other:Type) → Type⟦?⟧   // answers the variant type (Self | other)
        + (other:Type)          // answers the meet of Self and other (do we need this?)
        - (other:Type)          // answers the type that is like Self
                                // but excludes the methods of other
        :> (other:Type) → Boolean       // other conforms to self
        <: (other:Type) → Boolean       // self conforms to other
        :=: (other:Type) → Boolean      // (self <: other) && (other :> self)
        == (other:Type) → Boolean       // object identity
        ≠ (other:Type) → Boolean        // object non-identity
        hash → Number
        interfaces → Sequence⟦Interface⟦?⟧⟧
        subject → Type⟦T⟧               // the parameter T
    }

    type Interface⟦T⟧ = Type⟦T⟧ & interface {
        methods → Dictionary⟦String, Signature⟧
            // keys are the canonical names of the methods,
            // and values their signatures
        methodNames → Sequence⟦String⟧  // sorted sequence of Self's methods.keys
        - (other:Interface) → Interface     // the interface that is like self,
            // but with a methods dictionary whose keys exclude other.methods.keys
    }

    type Signature = interface {
        name → String
            // the canonical name of the method
        typeParameterNames → Sequence⟦String⟧
        parameterNames → Sequence⟦String⟧
        parameterTypes → Sequence⟦Type⟦?⟧⟧
            // the types of the parameters, in order
        result → Type⟦?⟧
            // the type of the result
    }

    type Object = interface {
        asString → String
        asDebugString → String
    }

    type Done = interface {
        asString → String
        asDebugString → String
    }

    type Boolean =  EqualityObject & interface {

        not → Boolean
        prefix ! → Boolean
        // the negation of self

        && (other: Predicate0 | Boolean) → Boolean
        // returns true when self and other are both true

        || (other: Predicate0 | Boolean) → Boolean
        // returns true when either self or other (or both) are true

        ifTrue (action:Function0⟦Unknown⟧) → Unknown
        // if self is true, executes action and returns its result

        ifFalse (action:Function0⟦Unknown⟧) → Unknown
        // if self is false, executes action and returns its result

        ifTrue(trueAction:Function0⟦Unknown⟧) ifFalse(falseAction:Function0⟦Unknown⟧) → Unknown
        // if self is true, executes trueAction; otherewise, executes falseAction.
        // Answers the result of the action that was executed

        ifFalse(falseAction:Function0⟦Unknown⟧) ifTrue(trueAction:Function0⟦Unknown⟧) → Unknown
        // if self is false, executes falseAction; otherewise, executes trueAction.
        // Answers the result of the action that was executed

        asString → String
        asDebugString → Unknown
        // answers thes string "true" or "false"

        hash → Number
        // the hash of this boolean; true.hash ≠ false.hash

        prefix == → Pattern
        // the pattern that matches objects o sucj that self.==(o)

    }

    type Pattern = Object & interface {
        matches(value:Object) → Boolean
        & (other:Pattern) → Pattern
        | (other:Pattern) → Pattern
        prefix ¬ → Pattern
        isType → Boolean
    }

    type Binding⟦K,T⟧ = EqualityObject & interface {
        key → K
        value → T
    }

    type EqualityObject = Object & interface {
        ::(o:Object) → Binding
        ==(other:Object) → Boolean
        ≠(other:Object) → Boolean
        hash → Number
        prefix == → Pattern
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

        line → Number               // the source-code line of the raise request
                                    // that created this exception.

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
        apply(a1:ArgT1) → ResultT       // Function with argument a1 of type ArgT1,
                                        // and a result of type ResultT
        matches(a1:Object) → Boolean    // answers true if a1 <: ArgT1
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

    // Procedures are functions that have no result (oterh than Done)
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

    type String = EqualityObject & Pattern & interface {
        reverseTimesNumber(n:Number) → String
        // answers self * n.  (Used by numbers to implement number * String)

        * (n: Number) → String
        // returns a string that contains n repetitions of self, so "Abc" * 3 = "AbcAbcAbc"

        ++(other: Object) → String
        // returns a string that is the concatenation of self and other.asString

        < (other: String)
        // true if self precedes other lexicographically

        <= (other: String)
        // (self == other) || (self < other)

        > (other: String)
        // true if self follows other lexicographically

        >= (other: String)
        // (self == other) || (self > other)

        at(index: Number) → String
        // returns the character in position index (as a string of size 1); index must be an integer in
        // the range 1..size

        first → String
        // returns the first character of self, as a String of size 1; self must not be empty

        second → String
        // returns the second character of self, as a String of size 1; requires self.size ≥ 2

        third → String
        // returns the third character of self, as a String of size 1; requires self.size ≥ 3

        fourth → String
        // returns the fourth character of self, as a String of size 1; requires self.size ≥ 4

        fifth → String
        // returns the fifth character of self, as a String of size 1; requires self.size ≥ 5

        last → String
        // returns the last character of self, as a String of size 1; self must not be empty

        allSatisfy(p:Predicate1⟦String⟧) → Boolean
        // answers true iff all the characters in self satisfy the predicate p

        anySatisfy(p:Predicate1⟦String⟧) → Boolean
        // answers true iff any one of the characters in self satisfies the predicate p

        asDebugString → String
        // returns self enclosed in quotes, and with embedded special characters quoted.  See also quoted.

        asLower → String
        // returns a string like self, except that all letters are in lower case

        asNumber → Number
        // attempts to parse self as a number;  returns that number, or NaN if it can't.

        asUpper → String
        // returns a string like self, except that all letters are in upper case

        do(action:Procedure1⟦String⟧) → Done
        // applies action to each character of self.

        do(action:Procedure1⟦String⟧) separatedBy(sep:Procedure0) → Done
        // applied action to each character of self, and applies sep between actions.

        capitalized → String
        // returns a string like self, except that the initial letters of all words are in upper case

        compare (other:String) → Number
        // a three-way comparison: -1 if (self < other), 0 if (self == other), and +1 if (self > other).
        // This is useful when writing a comparison function for sortBy

        contains (other:String) → Boolean
        // returns true if other is a substring of self

        endsWith (possibleSuffix: String)
        // true if self ends with possibleSuffix

        filter (predicate: Function1⟦String,Boolean⟧) → String
        // returns the String containing those characters of self for which predicate returns true

        fold⟦U⟧ (binaryFunction: Function2⟦U,String,U⟧) startingWith(initial: U) → U
        // performs a left fold of binaryFunction over self, starting with initial.
        // For example, fold {a, b → a + b.ord} startingWith 0 will compute the sum
        // of the ords of the characters in self

        indexOf (pattern:String) → Number
        // returns the leftmost index at which pattern appears in self, or 0 if it is not there.

        indexOf⟦W⟧ (pattern:String) ifAbsent (absent:Function0⟦W⟧) → Number | W
        // returns the leftmost index at which pattern appears in self; applies absent if it is not there.

        indexOf (pattern:String) startingAt (offset) → Number
        // like indexOf(pattern), but returns the smallest index ≥ offset, or 0 if pattern is not found.

        indexOf⟦W⟧ (pattern:String) startingAt(offset) ifAbsent (action:Function0⟦W⟧) → Number | W
        // like the above, except that it returns the result of applying action if there is no such index.

        indices → Sequence⟦Number⟧
        keys → Sequence⟦Number⟧
        // an object representing the range of indices of self (1..self.size).

        isEmpty → Boolean
        // true if self is the empty string

        iterator → Iterator⟦String⟧
        // an iterator over the characters of self

        keysAndValuesDo(action:Function2⟦Number, String, Done⟧) → Done
        // applies action to two arguments for each character in self: the key (index) of the character,
        // and the character itself.

        lastIndexOf (sub:String) → Number
        // returns the rightmost index at which sub appears in self, or 0 if it is not there.

        lastIndexOf (sub:String) startingAt (offset) →  Number
        // like the above, except that it returns the rightmost index ≤ offset.

        lastIndexOf⟦W⟧ (sub:String) ifAbsent (absent:Function0⟦W⟧) → Number | W
        // returns the rightmost index at which sub appears in self; applies absent if it is not there.

        lastIndexOf⟦W⟧ (sub:String)
           startingAt (offset)
           ifAbsent (action:Function0⟦W⟧) →  Number | W
        // like the above, except that it returns the rightmost index ≤ offset.

        map⟦U⟧ (function:Function1⟦String,U⟧) → Collection⟦U⟧
        // returns a Collection containing the results of successive applications of function to the
        // individual characters of self. Note that the result is not a String, even if type U happens to be String.
        // If a String is desired, use fold (_) startingWith "" with a function that concatenates.

        ord → Number
        // a numeric representation of the first character of self, or NaN if self is empty.

        replace (pattern:String) with (new:String) → String
        // a string like self, but with all occurrences of pattern replaced by new

        size → Number
        // returns the size of self, i.e., the number of characters it contains.

        sizeIfUnknown⟦W⟧(action:Procedure0⟦W⟧) → Number
        // returns the size of self, which is always known, so action is never executed.

        split(splitter:String) → Sequence⟦String⟧
        // answers a sequence of substrings of self, split before and after each
        // occurrence of splitter in self.  If self is empty, the result sequence
        // will also be empty; otherwise, if self does not contain splitter,
        // the result sequence will be of size 1.

        startsWith (possiblePrefix:String) → Boolean
        // true when possiblePrefix is a prefix of self

        startsWithDigit → Boolean
        // true if the first character of self is a (Unicode) digit.

        startsWithLetter → Boolean
        // true if the first character of self is a (Unicode) letter

        startsWithPeriod → Boolean
        // true if the first character of self is a period

        startsWithSpace → Boolean
        // true if the first character of self is a (Unicode) space.

        substringFrom (start:Number) size (max:Number) → String
        // returns the substring of self starting at index start and of length max characters,
        // or extending to the end of self if that is less than max.  If start = self.size + 1 or
        // stop < start, the empty string is returned.   If start is outside the range
        // 1..self.size+1, BoundsError is raised.

        substringFrom (start:Number) to (stop:Number) → String
        // returns the substring of self starting at index start and extending
        // either to the end of self, or to stop.    If start = self.size + 1, or
        // stop < start, the empty string is returned.   If start is outside the range
        // 1..self.size+1, BoundsError is raised.

        substringFrom (start:Number) → String
        // returns the substring of self starting at index start and extending
        // to the end of self.    If start = self.size + 1, the empty string is returned.
        // If start is outside the range 1..self.size+1, BoundsError is raised.

        trim → String
        // a string like self except that leading and trailing spaces are omitted.

        quoted → String
        // returns a quoted version of self, with internal characters like " and \ and newline escaped,
        // but without surrounding quotes.  See also asDebugString

        >> (target:Sink⟦String⟧) → Collection
        // returns target << self

        << (source:Collection⟦String⟧) → String
        // returns a string containing me, followed in order by the elements of source.
    }

    type Collection⟦T⟧ = Object & interface {
        // Note that Collection does not include :: or hash, so collections
        // cannot be used as keys in dictionaries (although Sequences can).
        // In general, a collection may be mutable; Lists are, but Sequences are not.

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
        anySatisfy (condition:Predicate1⟦T⟧) → Boolean
            // returns true if I contain an element e such that condition.apply(e) holds
        allSatisfy (condition:Predicate1⟦T⟧) → Boolean
            // returns true all of my elements e are such that condition.apply(e) holds
        >> (target: Sink⟦T⟧) → Collection⟦T⟧
            // returns target << self; used for writing pipelines
        << (source: Collection⟦T⟧) → Collection⟦T⟧
            // returns self ++ source; used for writing pipelines
    }

    type Number = EqualityObject & Pattern & interface {
        @ (other: Number) → Point
        // asnsers a point with self as the x-coordinate, and other as the y-coordinate

        ^ (n: Object) → Number
        // answers self raised to the power n, if n is a Number.
        // Otherwise, answers n.reversePowerNumber(self)

        sqrt → Number
        // answers the square root of self

        + (n: Object) → Number
        // sum of self and n, if n is a Number.
        // Otherwise, answers n.reversePlusNumber(self)

        - (n: Object) → Number
        // difference of self and n, if n is a Number.
        // Otherwise, answers n.reverseMinusNumber(self)

        * (n: Object) → Number
        // product of self and n, if n is a Number.
        // Otherwise, answers n.reverseTimesNumber(self)

        / (n: Object) → Number
        // quotient of self divided by n (in general, a fraction), if n is a Number.
        // Otherwise, answers n.reverseDivideNumber(self)

        % (n: Object) → Number
        // if n is a Number, answers the remainder r after integer division of
        // self by n, where 0 ≤ r < self;  see also ÷.
        // If n is not a Number, answers n.reverseRemainderNumber(self)

        ÷ (n: Object) → Number
        // quotient q of self after integer division by n, if n is a Number:
        // self = (n * q) + remainder, where remainder = (self % other)
        // If n is not a Number, answers n.reverseQuotientNumber(self)

        .. (last: Number) → Sequence⟦Number⟧
        // the Sequence of numbers from self to last, so 2..4 contains 2, 3, and 4

        downTo(last:Number) → Sequence⟦Number⟧
        // the Sequence of numbers from self down to last, so 2.downTo 0 contains 2, 1 and 0.

        < (other: Number) → Boolean
        // true iff self is less than other

        <= (other: Number) → Boolean
        // true iff self is less than or equal to other

        > (other: Number) → Boolean
        // true iff self is greater than other

        >= (other: Number) → Boolean
        // true iff self is greater than or equal to other

        prefix - → Number
        // negation of self

        compare (other:Number) → Number
        // a three-way comparison: -1 if (self < other), 0 if (self == other), and +1 if (self > other).
        // This is useful when writing a comparison function for sortBy

        inBase (base:Number) → String
        // a string representing self as a base number (e.g., 5.inBase 2 = "101")

        asString → String
        // returns a string representing self rounded to six decimal places

        asDebugString → String
        // returns a string representing self with all available precision

        asStringDecimals(d) → String
        // returns a string representing self with exactly d decimal digits

        isInteger → Boolean
        // true if number is an integer, i.e., a whole number with no fractional part

        truncated → Number
        // number obtained by throwing away self's fractional part

        rounded → Number
        // whole number closest to self

        floor → Number
        // largest whole number less than or equal to self

        ceiling → Number
        // smallest whole number greater than or equal to self

        abs → Number
        // the absolute value of self

        sgn → Number
        // the signum function: 0 when self == 0, -1 when self < 0, and +1 when self > 0

        isNaN → Boolean
        // true if this Number is not a number, i.e., if it is NaN.  For example, 0/0 returns NaN

        isEven → Boolean
        // true if this number is even

        isOdd → Boolean
        // true if this number is odd

        sin → Number
        // trigonometric sine (self in radians)

        cos → Number
        // cosine (self in radians)

        tan → Number
        // tangent (self in radians)

        asin → Number
        // arcsine of self (result in radians)

        acos → Number
        // arccosine of self (result in radians)

        atan → Number
        // arctangent of self (result in radians)

        lg → Number
        // log base 2 of self

        ln → Number
        // the natural log of self

        exp → Number
        // e raised to the power of self

        log10 → Number
        // log base 10 of self

        prefix > → Pattern
        // a pattern that matches all numbers > self

        prefix ≥ → Pattern
        // a pattern that matches all numbers ≥ self

        prefix < → Pattern
        // a pattern that matches all numbers < self

        prefix ≤ → Pattern
        // a pattern that matches all numbers ≤ self
    }

    type Point =  EqualityObject & interface {

        x → Number
        // the x-coordinates of self

        y → Number
        // the y-coordinate of self

        == (other:outer.Object) → Boolean
        // true if other is a Point with the same x and y coordinates as self.

        + (other:Point|Number) → Point
        // if other is a Point, returns the Point that is the vector sum of self
        // and other, i.e. (self.x+other.x) @ (self.y+other.y).  If other is a Number,
        // returns the point (self.x+other) @ (self.y+other)

        - (other:Point|Number) → Point
        // if other is a Point, returns the Point that is the vector difference of
        // self and other, i.e. (self.x-other.x) @ (self.y-other.y). If other is a
        // Number, returns the point (self.x-other) @ (self.y-other)

        prefix - → Point
        // the negation of self

        * (factor:Number) → Point
        // this point scaled by factor, i.e. (self.x*factor) @ (self.y*factor)

        / (factor:Number) → Point
        // this point scaled by 1/factor, i.e. (self.x/factor) @ (self.y/factor)

        length → Number
        // distance from self to the origin

        distanceTo(other:Point) → Number
        // distance from self to other

        dot (other:Point) → Number
        ⋅ (other:Point) → Number
        // dot product of self and other: (self.x * other.x) + (self.y + other.y)

        norm → Point
        // the unit vector (vecor of length 1) in same direction as self

        reverseTimesNumber(n:Number) → Point       // for double-dispatch; answers (n * x)@(n * y)
        reversePlusNumber(n:Number) → Point        // for double-dispatch; answers (n + x)@(n + y)
        reverseDivideNumber(n:Number) → Point      // for double-dispatch; answers (n / x)@(n / y)
        reverseMinusNumber(n:Number) → Point       // for double-dispatch; answers (n - x)@(n - y)
    }

    type Sink⟦T⟧ = interface {
        << (source:Collection⟦T⟧) → Collection⟦T⟧
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

    type SelfType = Unknown     // becuase Self is not yet in the language
}
