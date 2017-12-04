#pragma ExtendedLineups
//#pragma noTypeChecks
dialect "none"
import "standardGrace" as sg

import "ast" as ast 
import "xmodule" as xmodule
import "io" as io

inherit sg.methods

// Copied from Dialect2
// data structure to hold cached type assignments

// Checker error

def CheckerFailure is public = Exception.refine "CheckerFailure"

var methodtypes := [ ]
// visitor to convert a type expression to a string
def typeVisitor: ast.AstVisitor = object {
    inherit ast.baseVisitor
    var literalCount := 1
    method visitTypeLiteral(lit) {
        for (lit.methods) do { meth ->
            var mtstr := "{literalCount} "
            for (meth.signature) do { part ->
                mtstr := mtstr ++ part.name
                if (part.params.size > 0) then {
                    mtstr := mtstr ++ "("
                    for (part.params.indices) do { pnr ->
                        var p := part.params.at(pnr)
                        if (p.dtype != false) then {
                            mtstr := mtstr ++ p.toGrace(1)
                        } else {
                            // if parameter type not listed, give it type Unknown
                            if(p.wildcard) then {
                                mtstr := mtstr ++ "_"
                            } else {
                                mtstr := mtstr ++ p.value
                            }
                            mtstr := mtstr ++ ":" ++ ast.unknownType.value
                            if (false != p.generics) then {
                                mtstr := mtstr ++ "⟦"
                                for (1..(p.generics.size - 1)) do {ix ->
                                    mtstr := mtstr ++ p.generics.at(ix).toGrace(1) ++ ", "
                                }
                                mtstr := mtstr ++ p.generics.last.toGrace(1) ++ "⟧"
                            }
                        }
                        if (pnr < part.params.size) then {
                            mtstr := mtstr ++ ", "
                        }
                    }
                    mtstr := mtstr ++ ")"
                }
            }
            if (meth.rtype != false) then {
                mtstr := mtstr ++ " → " ++ meth.rtype.toGrace(1)
            }
            methodtypes.push(mtstr)
        }
        io.error.write "methodtypes of {lit} is {methodtypes}"
        return false
    }
    method visitOp(op) {
        if ((op.value=="&") || (op.value=="|")) then {
            def leftkind = op.left.kind
            def rightkind = op.right.kind
            if ((leftkind=="identifier") || (leftkind=="member")) then {
                var typeIdent := op.left.toGrace(0)
                methodtypes.push("{op.value} {typeIdent}")
            } elseif { leftkind=="typeliteral" } then {
                literalCount := literalCount + 1
                methodtypes.push("{op.value} {literalCount}")
                visitTypeLiteral(op.left)
            } elseif { leftkind=="op" } then {
                visitOp(op.left)
            }
            if ((rightkind=="identifier") || (rightkind=="member")) then {
                var typeIdent := op.right.toGrace(0)
                methodtypes.push("{op.value} {typeIdent}")
            } elseif { rightkind=="typeliteral" } then {
                literalCount := literalCount + 1
                methodtypes.push("{op.value} {literalCount}")
                visitTypeLiteral(op.right)
            } elseif { rightkind=="op" } then {
                visitOp(op.right)
            }
        }
        return false
    }
}

// convert type expression to string for debugging
method dtypeToString(dtype) {
    if (false == dtype) then {
        "Unknown"
    } elseif {dtype.kind == "typeliteral"} then {
        methodtypes := []
        dtype.accept(typeVisitor)
        methodtypes.at(1)
    } else {
        dtype.value
    }
}




// The cached type assignments.
def cache: Dictionary = emptyDictionary

// Scope represents stack of scopes using stackOfKind

type StackOfKind⟦V⟧ = {
    stack → List⟦Dictionary⟧
    at (name : String) put (value:V) -> Done
    find (name : String) butIfMissing (bl: Function0⟦V⟧) → V
}

class stackOfKind⟦V⟧(kind : String) → StackOfKind⟦V⟧ is confidential {
    def stack: List⟦Dictionary⟧ is public = list[emptyDictionary]
    // add <name,value> to current scope
    method at (name : String) put (value:V) -> Done {
        stack.last.at(name) put(value)
    }

    // Find name in stack of current scopes & return its value
    // If not there perform action in bl
    method find (name : String) butIfMissing (bl: Function0⟦V⟧) → V {
        var i: Number := stack.size
        while { i > 0 } do {
            var found: Boolean := true
            def val = stack.at(i).at(name) ifAbsent {
                found := false
            }
            if(found) then {
                return val
            }

            i := i - 1
        }

        return bl.apply
    }

}

type Scope = {
    variables → StackOfKind⟦ObjectType⟧
    methods → StackOfKind⟦MethodType⟧
    types → StackOfKind⟦ObjectType⟧
    size → Number
    enter⟦V⟧(bl: Function0⟦V⟧) → V
}

// scope consists of stacks of scopes for each of variables, methods, & types
def scope: Scope is public = object {
    // keep track of each kind of expression separately
    def variables is public = stackOfKind ("variable")
    def methods is public = stackOfKind ⟦MethodType⟧("method")
    def types is public = stackOfKind ⟦ObjectType⟧("type")

    method size -> Number {
        variables.stack.size
    }

    // Enter new scope to execute block bl and then delete afterwards
    // returns value of bl
    method enter⟦V⟧ (bl:Function0⟦V⟧) → V {
        variables.stack.push (sg.emptyDictionary)
        methods.stack.push (sg.emptyDictionary)
        types.stack.push (sg.emptyDictionary)

        def result: V = bl.apply

        variables.stack.pop
        methods.stack.pop
        types.stack.pop

        result
    }

    method asString -> String is override {
        "scope<{size}>"
    }
}

// check the type of node and insert into cache
method checkTypes (node: AstNode) → Done {
    io.error.write "\n182: checking types of {node}"
    node.accept (astVisitor)
}

// check type of node & then retrieve value from cache
method typeOf (node: AstNode) → ObjectType {
    checkTypes (node)
    cache.at (node) ifAbsent { 
        CheckerFailure.raise "cannot type non-expression {node}" with (node)
    }
}

type AstNode = { kind -> String }

// Create a pattern for matching kind
class aPatternMatchingNode (kind : String) -> Pattern {
    inherit outer.BasicPattern.new

    method match (obj : Object) → MatchResult | false {
        match (obj) 
          case { node : AstNode ->
            if (kind == node.kind) then {
                SuccessfulMatch.new (node, outer.emptySequence)
            } else {
                false
            }
          } case { _ -> false }
    }
}

type Matcher = {
    match(obj: AstNode) → MatchResult
}

// A pattern that matches if parameter satisfies predicate
class booleanPattern (predicate: Function1⟦AstNode⟧) → Pattern {
    inherit BasicPattern.new
    method match (obj: AstNode) → MatchResult {
        if (predicate.apply (obj)) then { 
            SuccessfulMatch.new (obj, outer.emptySequence)
        } else {
            false
        }
    }
}

// patterns for built-in AST Nodes
def If: Pattern is public = aPatternMatchingNode "if"
def BlockLiteral: Pattern is public = aPatternMatchingNode "block"
def MatchCase: Pattern is public = aPatternMatchingNode "matchcase"
def TryCatch: Pattern is public = aPatternMatchingNode "trycatch"
def Outer: Pattern is public = aPatternMatchingNode "outer"
def MethodSignature: Pattern is public = aPatternMatchingNode "methodtype"
def TypeLiteral: Pattern is public = aPatternMatchingNode "typeliteral"
def TypeDeclaration: Pattern is public = aPatternMatchingNode "typedec"
def TypeAnnotation: Pattern is public = aPatternMatchingNode "dtype"
def Member: Pattern is public = aPatternMatchingNode "member"
def Method: Pattern is public = aPatternMatchingNode "method"
def Parameter: Pattern is public = aPatternMatchingNode "parameter"
// matches anything that is a call
def Request: Pattern is public = booleanPattern { x → x.isCall }
def Class: Pattern is public = aPatternMatchingNode "class"
def ObjectLiteral: Pattern is public = aPatternMatchingNode "object"
def ArrayLiteral: Pattern is public = aPatternMatchingNode "array"
def Generic: Pattern is public = aPatternMatchingNode "generic"
def Identifier: Pattern is public = aPatternMatchingNode "identifier"
def OctetsLiteral: Pattern is public = aPatternMatchingNode "octets"
def StringLiteral: Pattern is public = aPatternMatchingNode "string"
def NumberLiteral: Pattern is public = aPatternMatchingNode "num"
def Operator: Pattern is public = aPatternMatchingNode "op"
def Bind: Pattern is public = aPatternMatchingNode "bind"
def Def: Pattern is public = aPatternMatchingNode "defdec"
def Var: Pattern is public = aPatternMatchingNode "vardec"
def Import: Pattern is public = aPatternMatchingNode "import"
def Dialect: Pattern is public = aPatternMatchingNode "dialect"
def Return: Pattern is public = aPatternMatchingNode "return"
def Inherit: Pattern is public = aPatternMatchingNode "inherit"
def Module: Pattern is public = aPatternMatchingNode "module"


// -------------------------------------------------------------------
// Type declarations for type representations to use for type checking
// -------------------------------------------------------------------

// Method signature information.
// isSpecialization and restriction are used for type-checking
type MethodType = {
    name -> String
    signature -> List⟦MixPart⟧
    returnType -> ObjectType
    isSpecialisationOf (other : MethodType) -> Boolean
    restriction (other : MethodType) -> MethodType
}

// type of a parameter
type Param = {
    name -> String
    typeAnnotation -> ObjectType
}

type ParamFactory = {
    withName (name' : String) ofType (type' : ObjectType) -> Param
    ofType (type' : Object) -> Param
}
 
// Create parameter with given name' and type'
// if no name then use wildcard "_"
def aParam: ParamFactory = object {
    method withName(name': String) ofType(type' : ObjectType) -> Param {
        object {
            def name : String is public = name'
            def typeAnnotation : ObjectType is public = type'

            def asString : String is public, override =
                "{name} : {typeAnnotation}"
        }
    }

    method ofType (type': ObjectType) -> Param {
        withName("_") ofType(type')
    }
}

// MixPart is a "segment" of a method:
// Ex. for (param1) do (param2), for and do are separate "MixParts."
type MixPart = {
    name -> String
    parameters -> List⟦Param⟧
}

// create a mixpart with given name' and parameters'
class aMixPartWithName(name' : String)
        parameters(parameters' : List⟦Param⟧) -> MixPart {
    def name : String is public = name'
    def parameters : List⟦Param⟧ is public = parameters'
}

type MethodTypeFactory = {
    signature (signature' : List⟦MixPart⟧)
            returnType (rType : ObjectType)-> MethodType
    member (name : String) ofType (rType : ObjectType) -> MethodType
    fromGctLine (line : String) -> MethodType
    fromNode (node: AstNode) -> MethodType
}
    
// factory for creating method types from various inputs
def aMethodType: MethodTypeFactory = object {
    // create method type from list of mixparts and return type
    method signature (signature' : List⟦MixPart⟧)
            returnType (rType : ObjectType) -> MethodType {
        object {
            def signature : List⟦MixPart⟧ is public = signature'
            def returnType : ObjectType is public = rType

            var name : String is readable := ""
            var nameString : String is readable := ""
            var show : String := ""

            def fst: MixPart = signature.first

            if (fst.parameters.isEmpty) then {
                name := fst.name
                nameString := fst.name
                show := name
            } else {
                for (signature) do { part ->
                    name := "{name}{part.name}()"
                    nameString := "{nameString}{part.name}({part.parameters.size})"
                    show := "{show}{part.name}("
                    var once: Boolean := false
                    for (part.parameters) do { param ->
                        if (once) then {
                            show := "{show}, "
                        }
                        show := "{show}{param}"
                        once := true
                    }
                    show := "{show})"
                }

                name := name.substringFrom (1) to (name.size - 2)
            }
            
            show := "{show} -> {returnType}"

            method hash → Number is override {name.hash}
            
            method == (other: MethodType) → Boolean {
                nameString == other.nameString
            }
            
            // Mask unknown fields in corresponding methods
            // Assume that the methods share a signature.
            method restriction (other : MethodType) -> MethodType {
                def restrictParts: List⟦MixPart⟧ = list[]
                if (other.signature.size != signature.size) then {
                    return self
                }
                for (signature) and (other.signature) 
                                        do {part: MixPart, part': MixPart ->
                    if (part.name == part'.name) then {
                        def restrictParams: List⟦Param⟧ = list[]
                        if (part.parameters.size != part'.parameters.size) then {
                              io.error.write ("Programmer error: part {part.name} has {part.parameters.size}" ++
                                    " while part {part'.name} has {part'.parameters.size}")}
                        for (part.parameters) and (part'.parameters) 
                                                do { p: Param, p': Param ->
                            def pt': ObjectType = p'.typeAnnotation
    
                            // Contravariant in parameter types.
                            if (pt'.isDynamic) then {
                                restrictParams.push (
                                    aParam.withName (p.name) ofType (anObjectType.dynamic))
                            } else {
                                restrictParams.push (p)
                            }
                        }
                        restrictParts.push (
                            aMixPartWithName (part.name) parameters (restrictParams))
                    } else {
                        restrictParts.push (part)
                    }
                }
                return aMethodType.signature (restrictParts) returnType (returnType)
            }

            // Determines if this method is a specialisation of the given one.
            method isSpecialisationOf (other : MethodType) -> Boolean {
                
                if (self.isMe (other)) then {
                    return true
                }

                if (name != other.name) then {
                    return false
                }
                
                if (other.signature.size != signature.size) then {
                    return false
                }
                
                for (signature) and (other.signature) 
                                            do { part: MixPart, part': MixPart ->
                    if (part.name != part'.name) then {
                        return false
                    }
                    
                    if (part.parameters.size != part'.parameters.size) then {
                        return false
                    }
                    
                    for (part.parameters) and (part'.parameters) 
                                                    do { p: Param, p': Param ->
                        def pt: ObjectType = p.typeAnnotation
                        def pt': ObjectType = p'.typeAnnotation

                        // Contravariant in parameter types.
                        if (pt'.isSubtypeOf (pt).not) then {
                            return false
                        }
                    }
                }

                return returnType.isSubtypeOf (other.returnType)
            }

            def asString : String is public, override = show
        }
    }

    // Create method type with no parameters, but returning rType
    method member (name : String) ofType (rType : ObjectType) -> MethodType {
        signature(list[aMixPartWithName (name) parameters (list[])]) returnType (rType)
    }
        
    // Parses a methodtype line from a gct file into a MethodType object.
    // Lines will always be formatted like this:
    //  1 methname(param : ParamType)part(param : ParamType) -> ReturnType
    // The number at the beginning is ignored here, since it is handled
    // down in the Imports rule.
    method fromGctLine (line : String) -> MethodType {
        //TODO: Generics are currently skipped over and ignored entirely.
        var mstr: String
        var fst: Number
        var lst: Number
        def parts: List⟦MixPart⟧ = list[]
        var ret
        mstr := if (line.at(1).startsWithLetter) then {
            line
        } else {
            line.substringFrom (line.indexOf (" ") + 1) to (line.size)
        }
        
        fst := 1
        var par: Number := mstr.indexOf ("(") startingAt (fst)
        lst := par - 1
        
        if (par > 0) then {
            while {par > 0} do {
                //Collect the signature part name
                var partName: String := mstr.substringFrom (fst) to (lst)
                // io.error.write "partName: {partName}"
       
                var partParams: List⟦Param⟧ := list[]
                fst := lst + 2
                lst := fst
                var multiple: Boolean := true
                while {multiple} do {
                    while {mstr.at (lst) != ":"} do {
                        lst := lst + 1
                    }
                 
                    var paramName: String := mstr.substringFrom(fst)to(lst - 1)
                    io.error.write "paramName: {paramName}"
                    fst := lst + 1
                    while {(mstr.at (lst) != ")") && (mstr.at (lst) != ",") 
                                                && (mstr.at(lst) != "⟦")} do {
                        lst := lst + 1
                    }
                    var paramType: String := mstr.substringFrom(fst)to(lst - 1)
                    io.error.write "paramType = {paramType}"
                    if (mstr.at (lst) == ",") then {
                        fst := lst + 2
                        lst := fst
                    } else {
                        multiple := false
                    }
                    partParams.push (aParam.withName (paramName) ofType (
                        scope.types.find ("{paramType}") butIfMissing {
                            anObjectType.dynamic
                            //ast.identifierNode.new("{paramType}", anObjectType.dynamic)
                            }))
                }
                par := mstr.indexOf ("(") startingAt (lst)
                fst := lst + 1
                lst := par - 1
                parts.add (aMixPartWithName (partName) parameters (partParams))
            }
        } else {
            var partName: String := mstr.substringFrom (fst) to (mstr.indexOf(" →") - 1)
            // io.error.write "partName = {partName}"
            parts.add (aMixPartWithName (partName) parameters (list[]))
        }

        fst := mstr.indexOf ("→ ") startingAt (1) + 2
        if (fst < 1) then {
            io.error.write "no arrow in method type {mstr}"
        }
        ret := mstr.substringFrom (fst) to (mstr.size)
        // io.error.write "ret = {ret}"
        def rType: ObjectType = anObjectType.fromIdentifier (
                                    ast.identifierNode.new (ret, false))
        // io.error.write "rType = {rType}"
        aMethodType.signature (parts) returnType (rType)
    }

    // if node is a method, class, method signature,
    // def, or var, create appropriate method type
    method fromNode (node: AstNode) -> MethodType {
        match (node) case { meth : Method | Class | MethodSignature ->
            def signature: List⟦MixPart⟧ = list[]

            for (meth.signature) do { part ->   // type of part?
                def params: List⟦Param⟧ = list[]

                for (part.params) do { param -> // not of type Param??
                    params.push (aParam.withName (param.value)
                        ofType (anObjectType.fromDType (param.dtype)))
                }

                signature.push (aMixPartWithName (part.name) parameters (params))
            }

            def rType: AstNode = match (meth) case { m : Method | Class ->
                m.dtype
            } case { m : MethodSignature ->
                meth.rtype
            }

            return signature (signature)
                returnType (anObjectType.fromDType (rType))
        } case { defd : Def | Var ->
            io.error.write "574: defd: {defd}"
            io.error.write "575: defd.dtype {defd.dtype}"
            def signature: List⟦MixPart⟧ = 
                    list[aMixPartWithName (defd.name.value) parameters (list[])]
            def dtype: ObjectType = if (defd.dtype == false) then {
                    anObjectType.dynamic
                } else {
                    anObjectType.fromDType (defd.dtype)
                }
            return signature (signature) returnType (dtype)
        } case { _ ->
            Exception.raise "unrecognised method node" with(node)
        }
    }

}


// Object type information.

def noSuchMethod: outer.Pattern = object {
    inherit BasicPattern.new

    method match(obj : Object) {
        if(self.isMe(obj)) then {
            SuccessfulMatch.new(self, list[])
        } else {
            FailedMatch.new(obj)
        }
    }
}

// represents the type of an expression as a collection of method types
type ObjectType = {
    methods -> Set⟦MethodType⟧
    // getMethod (name : String) -> MethodType | noSuchMethod
    isDynamic -> Boolean
    isSubtypeOf (other : ObjectType) -> Boolean
    | (other : ObjectType) -> ObjectType
    & (other : ObjectType) -> ObjectType
    restriction (other : ObjectType) -> ObjectType
    isConsistentSubtypeOf (other : ObjectType) -> Boolean
}

// methods to create an object type from various inputs
type ObjectTypeFactory = {
    fromMethods (methods' : Set⟦MethodType⟧) -> ObjectType
    fromMethods (methods' : Set⟦MethodType⟧)
                                withName (name : String) -> ObjectType
    fromDType (dtype) -> ObjectType
    fromBlock (block) -> ObjectType
    fromBlockBody (body) -> ObjectType
    dynamic -> ObjectType
    bottom -> ObjectType
    blockTaking (params : List⟦Parameter⟧)
            returning (rType : ObjectType) -> ObjectType
    blockReturning (rType : ObjectType) -> ObjectType
    base -> ObjectType
    doneType -> ObjectType
    pattern -> ObjectType
    iterator -> ObjectType
    boolean -> ObjectType
    number -> ObjectType
    string -> ObjectType
    listTp -> ObjectType
    set -> ObjectType
    sequence -> ObjectType
    dictionary -> ObjectType
    point -> ObjectType
    binding -> ObjectType
    collection -> ObjectType
    enumerable -> ObjectType
}

def anObjectType: ObjectTypeFactory = object {

    class placeholder → ObjectType {
        inherit fromMethods(emptySet)
        
        method updateMethods(meths: Set⟦MethodType⟧) {
            methods.addAll (meths)
        }
    }
    
    method fromMethods (methods' : Set⟦MethodType⟧) -> ObjectType { object {
        def methods : Set⟦MethodType⟧ is public = (if (base == dynamic)
            then { emptySet } else { emptySet.addAll(base.methods) }).addAll(methods')

        method getMethod(name : String) -> MethodType | noSuchMethod {
            for(methods) do { meth ->
                if(meth.nameString == name) then {
                    return meth
                }
            }

            return noSuchMethod
        }
        
        method == (other:ObjectType) → Boolean {
            self.isMe(other)
        }

        def isDynamic : Boolean is public = false
        
        // List of variant types (A | B | ... )
        var variantTypes: List⟦ObjectType⟧ := list[]
        
        method getVariantTypes → List⟦ObjectType⟧ { variantTypes }
        
        method setVariantTypes(newVariantTypes:List⟦ObjectType⟧) -> Done {
          variantTypes := newVariantTypes
        }

        // Necessary to prevent infinite loops of subtype testing.
        def currentlyTesting: List⟦ObjectType⟧ = emptyList

        method isSubtypeOf(other : ObjectType) -> Boolean {
            
            if(self.isMe(other)) then {
                return true
            }

            if(other.isDynamic) then {
                return true
            }

            // If this test is already being performed, assume it succeeds.
            if(currentlyTesting.contains(other)) then {
                return true
            }
            currentlyTesting.push(other)

            var mct1 := 0
            for (other.methods) doWithContinue { a, continue ->
                for (methods) do { b ->
                    if (b.isSpecialisationOf (a)) then {
                        mct1 := mct1 + 1
                        if ((mct1 == other.methods.size) 
                            && (self.getVariantTypes.size == 0)) then {
                            // If each of our methods is a specialisation of
                            // some method from other, self must be a subtype of other,
                            // unless self is a variant type (handled later).
                            return true
                        }
                        continue.apply
                    }
                }
                currentlyTesting.pop
                return false
            }
            
            var subtypeOfVariantTypes: Boolean := true
            
            // if self is a variant type, check if each of its variant types 
            // is a variant type in other.
            // Basically: is self's set of variant types contained in other's
            // set of variant types.
            if (self.getVariantTypes.size != 0) then {
              for (self.getVariantTypes) doWithContinue { selfType: ObjectType, continue ->
                var subtypeOfAVariantType: Boolean := false

                for (other.getVariantTypes) do { otherType: ObjectType ->
                  if (selfType.isSubtypeOf(otherType)) then {
                    subtypeOfAVariantType := true
                    continue.apply
                  }
                }
                
                if (!subtypeOfAVariantType) then {
                  subtypeOfVariantTypes := false
                }
              }
              
            } else {
              // Check if self is a subtype of any of the other's variant types.
              // If other is not a variant type, this loop does not run.
              // Note that this case runs only if self is NOT a variant type.
              // This is a bit of a hack since there is not a straightforward way
              // to check if a type is a subtype of a variant type using the
              // "standard" subtyping algorithm.
              subtypeOfVariantTypes := false
              for (other.getVariantTypes) doWithBreak { otherType: ObjectType, break ->
                if(self.isSubtypeOf(otherType)) then {
                  subtypeOfVariantTypes := true
                  break.apply
                }
              }
            }

            currentlyTesting.pop

            return (true && subtypeOfVariantTypes)
        }
        
        // Consistent-subtyping:
        // If self restrict other is a subtype of other restrict self.
        method isConsistentSubtypeOf(other : ObjectType) -> Boolean {
            def selfRestType = self.restriction(other)
            def otherRestType = other.restriction(self)
//            io.error.write "self's restricted type is {selfRestType}"
//            io.error.write "other's restricted type is {otherRestType}"
            
            return selfRestType.isSubtypeOf(otherRestType)  //  FIX!!!
            //true
        }


        // Variant
        // Construct a variant type from two object types.
        // Note: variant types can only be created by this constructor.
        method |(other : ObjectType) -> ObjectType {
            if(self == other) then { return self }
            if(other.isDynamic) then { return dynamic }

            def combine: Set⟦MethodType⟧ = emptySet
            
            // Variant types of the new object.
            var newVariantTypes := list[]
            
            // If self is a variant type, add its variant types
            // to the new object type's variant types.
            // If self is not a variant type, add itself to the
            // new object type's variant types.
            if (self.getVariantTypes.size != 0) then {
              newVariantTypes := newVariantTypes ++ self.getVariantTypes
            } else {
              newVariantTypes.push(self)
            }
            
            // If other is a variant type, add its variant types
            // to the new object type's variant types.
            // If other is not a variant type, add itself to the
            // new object types's variant types.
            if (other.getVariantTypes.size != 0) then {
              newVariantTypes := newVariantTypes ++ other.getVariantTypes
            } else {
              newVariantTypes.push(other)
            }
            
            return object {
                inherit anObjectType.fromMethods(combine)
                
                // Set the new object type's variant types to equal
                // the new variant types.
                self.setVariantTypes(newVariantTypes)
              
                method asString -> String is override {
                    "{outer} | {other}"
                }
                
            }
        }
        
        method restriction(other : ObjectType) -> ObjectType {
            if (other.isDynamic) then { return dynamic}
            def restrictTypes:Set⟦ObjectType⟧ = emptySet
            // Restrict matching methods
            for(methods) doWithContinue { meth, continue ->
              // Forget restricting if it is a type
              if (asString.substringFrom (1) to (7) != "Pattern") then {
                for(other.methods) do { meth' ->
                  if(meth.name == meth'.name) then {
                    restrictTypes.add(meth.restriction(meth'))
                    continue.apply
                  }
                }
              }
              restrictTypes.add(meth)
            }
            return object {
              inherit anObjectType.fromMethods(restrictTypes)
              
              method asString -> String is override {
                "{outer}|{other}"
              }
            }
        }

        method &(other : ObjectType) -> ObjectType {
            if(self == other) then { return self }
            if(other.isDynamic) then { return dynamic }

            def combine: Set⟦ObjectType⟧ = emptySet
            def twice = emptySet

            // Produce union between two object types.
            for(methods) doWithContinue { meth, continue ->
                for(other.methods) do { meth':MethodType ->
                    if(meth.name == meth'.name) then {
                        if(meth.isSpecialisationOf(meth')) then {
                            combine.add(meth)
                        } elseif{meth'.isSpecialisationOf(meth)} then {
                            combine.add(meth')
                        } else {
                            TypeError.raise("cannot produce union of " ++
                                "incompatible types '{self}' and '{other}' because of {meth'}")
                        }

                        twice.add(meth.name)

                        continue.apply
                    }
                }

                combine.add(meth)
            }

            for(other.methods) do { meth ->
                if(twice.contains(meth.name).not) then {
                    combine.add(meth)
                }
            }

            object {
                inherit anObjectType.fromMethods(combine)

                method asString -> String is override {
                    "\{{self.methods}\} & {other}"
                }
            }
        }

        method asString -> String is override {
            if(methods.size == 3) then {
                return "Object"
            }

            var out: String := "\{ "

            for(methods) do { mtype: MethodType ->
                if(["==", "!=", "asString"].contains(mtype.name).not) then {
                    out := "{out}\n  {mtype}; "
                }
            }

            return "{out}\}\n"
        }
    }}

    method fromMethods(methods' : Set⟦MethodType⟧)
            withName(name : String) -> ObjectType {
        object {
            inherit fromMethods(methods')
            
            var out: String := name
            if (!methods.isEmpty) then {
                out := out ++ "\{ "
                for(methods') do { mtype ->
                    if(["==", "!=", "asString"].contains(mtype.name).not) then {
                        out := "{out}{mtype}; "
                    }
                }
            
                out := out ++ " \}"
            }
            def asString : String is public, override = out
        }
    }

    method fromDType(dtype: AstNode) -> ObjectType {
        match(dtype) 
          case { (false) ->
            dynamic
        } case { typeDec : TypeDeclaration ->
            io.error.write "\n1008: converting {dtype} to ObjectType\n"
//        TODO: re-write this code to understand the syntax of type expressions
//          and type declarations, which are not the same!
            anObjectType.fromDType(typeDec.value)
            
        } case { typeLiteral : TypeLiteral ->
            def typeMethods : List⟦MethodType⟧ = list(typeLiteral.methods)
            def typeName : String = typeLiteral.name
            def meths = emptySet
            for(typeLiteral.methods) do { mType ->
                meths.add(aMethodType.fromNode(mType))
            }
            
            // FIX for new type parameter syntax!
            if((typeName != false) && { typeName.at(1) != "⟦" }) then {
                anObjectType.fromMethods(meths) withName(typeName)
            } else {
                anObjectType.fromMethods(meths)
            }
                    
        } case { op: Operator ->
            // Operator takes care of type expressions: Ex. A & B, A | C
            // What type of operator (& or |)?
            var opValue: String := op.value
            // io.error.write "opValue is {opValue}"
            // Left side of operator (TypeDeclaration or Operator)
            var left: AstNode := op.left
            // io.error.write "Left is {left}"
            var leftType: ObjectType := fromDType(left)
            // io.error.write "leftType is {leftType}"
            // Right side of operator (TypeDeclaration or Operator)
            var right: AstNode := op.right
            // io.error.write "right is {right}"
            var rightType: ObjectType := fromDType(right)
            // io.error.write "693:about to match"
            match(opValue) case { "&" ->
              leftType & rightType
            } case { "|" ->
              leftType | rightType
            } case { _ ->
              ProgrammingError.raise("Expected '&' or '|', got {opValue}") with(op)
            }
            
        } case { ident : Identifier ->
            anObjectType.fromIdentifier(ident)
        } case { generic : Generic ->
//            io.error.write "\n971: Handling generic: {generic}"
            anObjectType.fromIdentifier(generic.value)
        } case { memb : Member ->
             scope.types.find("{memb.receiver.value}.{memb.value}") butIfMissing {dynamic}
        } case { str : StringLiteral ->
            anObjectType.string
        } case { num : NumberLiteral ->
            anObjectType.number
        } case { _ ->
            ProgrammingError.raise "No case for node of kind {dtype.kind}" with(dtype)
        }
    }

    method fromIdentifier(ident : Identifier) -> ObjectType {
        scope.types.find(ident.value) butIfMissing { dynamic }
    }

    method fromBlock(block: AstNode) -> ObjectType {
        def bType = typeOf(block)

        if(bType.isDynamic) then { return dynamic }

        def numParams: Number = block.params.size
        def applyName: String = if (numParams == 0) then {
            "apply"
        } else {
            "apply({numParams})"
        }
        def apply: MethodType = bType.getMethod(applyName)

        match(apply) case { (noSuchMethod) ->
            def strip = {x → x.nameString}
            TypeError.raise ("1000: the expression `{stripNewLines(block.toGrace(0))}` of " ++
                "type '{bType}' does not satisfy the type 'Block'") with(block)
        } case { meth : MethodType ->
            return meth.returnType
        }
    }

    method fromBlockBody(body: Sequence⟦AstNode⟧) -> ObjectType {
        if(body.size == 0) then {
            anObjectType.doneType
        } else {
            typeOf(body.last)
        }
    }

    method dynamic -> ObjectType {
        object {
            def methods: Set⟦MethodType⟧ is public = sg.emptySet

            method getMethod(_ : String) -> noSuchMethod { noSuchMethod }

            def isDynamic : Boolean is public = true

            method isSubtypeOf(_ : ObjectType) -> Boolean { true }

            method |(_ : ObjectType) -> dynamic { dynamic }

            method &(_ : ObjectType) -> dynamic { dynamic }
            
            method restriction(_ : ObjectType) -> dynamic { dynamic }
            
            method isConsistentSubtypeOf(_ : ObjectType) -> Boolean { true }

            def asString : String is public, override = "Unknown"
            
            method ==(other:ObjectType) → Boolean{self.isMe(other)}
        }
    }
    
    method bottom -> ObjectType {
        object {
            inherit dynamic
            def isDynamic : Boolean is public, override = false
            def asString : String is public, override = "Bottom"
        }
    }

    method blockTaking(params : List⟦Parameter⟧)
            returning(rType : ObjectType) -> ObjectType {
        def signature = list[aMixPartWithName("apply") parameters(params)]
        def meths: Set⟦MethodType⟧ = emptySet
        meths.add(aMethodType.signature(signature) returnType(rType))

        fromMethods(meths) withName("Block")
    }

    method blockReturning(rType : ObjectType) -> ObjectType {
        blockTaking(list[]) returning(rType)
    }

    // add method to oType.  Only use this variant if method is parameterless
    method addTo (oType : ObjectType) name (name' : String)
            returns (rType : ObjectType) -> Done is confidential {
        def signature = list[aMixPartWithName(name') parameters(list[])]
        oType.methods.add (aMethodType.signature(signature) returnType(rType))
    }

    // add method to oType.  Only use this variant if one part with one or more
    // parameters
    method addTo (oType : ObjectType) name (name' : String)
            params (ptypes : List⟦ObjectType⟧) returns (rType : ObjectType)
            -> Done is confidential {
        def parameters = list[]
        for(ptypes) do { ptype ->
            parameters.push(aParam.ofType(ptype))
        }

        def signature = list[aMixPartWithName(name') parameters (parameters)]

        oType.methods.add (aMethodType.signature(signature) returnType (rType))
    }
    
    // add method to oType.  Only use this variant for method with one part
    // and exactly one parameter
    method addTo (oType : ObjectType) name (name' : String)
            param(ptype : ObjectType) returns (rType : ObjectType)
            -> Done is confidential {
        def parameters = list[aParam.ofType(ptype)]

        def signature = list[aMixPartWithName(name') parameters(parameters)]

        oType.methods.add (aMethodType.signature(signature) returnType(rType))
    }

    // add method to oType.  Only use if more than one part.
    method addTo (oType: ObjectType) names (name: List⟦String⟧)
         parts(p: List⟦List⟦ObjectType⟧ ⟧) returns (rType: ObjectType) -> Done 
                                    is confidential{
         def parts: List⟦List⟦Param⟧⟧ = list[]
         var nameString: String := ""
         for (p) do { part: List⟦ObjectType⟧ ->
             def parameters: List⟦Param⟧ = list[]
             for (part) do {ptype: ObjectType ->
                 parameters.push(aParam.ofType(ptype))
             }
             parts.push(parameters)
         }
         
         def signature: List⟦MixPart⟧ = list[]
         for (1 .. name.size) do {i ->
             signature.push(aMixPartWithName (name.at(i)) parameters (parts.at(i)))
         }
         oType.methods.add (aMethodType.signature (signature) returnType (rType))
    }


    method extend(this : ObjectType) with(that : ObjectType)
            -> Done is confidential {
        this.methods.addAll(that.methods)
    }

    var base : ObjectType is readable := dynamic
    def doneType : ObjectType is public = fromMethods(sg.emptySet) withName("Done")
    base := fromMethods(sg.emptySet) withName("Object")

    def pattern : ObjectType is public = fromMethods(sg.emptySet) withName("Pattern")
    def iterator : ObjectType is public = fromMethods(sg.emptySet) withName("Iterator")
    def boolean : ObjectType is public = fromMethods(sg.emptySet) withName("Boolean")
    def number : ObjectType is public = fromMethods(sg.emptySet) withName("Number")
    def string : ObjectType is public = fromMethods(sg.emptySet) withName("String")
    def listTp : ObjectType is public = fromMethods(sg.emptySet) withName("List")
    def set : ObjectType is public = fromMethods(sg.emptySet) withName("Set")
    def sequence : ObjectType is public = fromMethods(sg.emptySet) withName("Sequence")
    def dictionary : ObjectType is public = fromMethods(sg.emptySet) withName("Dictionary")
    def point : ObjectType is public = fromMethods(sg.emptySet) withName("Point")
    def binding : ObjectType is public = fromMethods(sg.emptySet) withName("Binding")
    def collection : ObjectType is public = fromMethods(sg.emptySet) withName("Collection")
    def enumerable : ObjectType is public = fromMethods(sg.emptySet) withName("Enumerable")
    def rangeTp : ObjectType is public = fromMethods(sg.emptySet) withName("Range")

    addTo (base) name ("==") param(base) returns(boolean)
    addTo (base) name ("≠") param(base) returns(boolean)
    addTo (base) name ("hash") returns(number)
    addTo (base) name ("match") returns(dynamic)
    addTo (base) name ("asString") returns(string)
    addTo (base) name ("basicAsString") returns(string)
    addTo (base) name ("asDebugString") returns(string)
    addTo (base) name ("debugValue") returns(string)
    addTo (base) name ("debugIterator") returns(iterator)
    addTo (base) name ("::") returns(binding)
    addTo (base) name ("list") param(collection) returns(listTp)

    extend (pattern) with (base)
    addTo (pattern) name ("match") param (base) returns (dynamic)
    addTo (pattern) name ("|") param (pattern) returns (pattern)
    addTo (pattern) name("&") param (pattern) returns (pattern)
    extend (iterator) with (base)
    addTo (iterator) name ("hasNext") returns (boolean)
    addTo (iterator) name ("next") returns (dynamic)

    def shortCircuit: ObjectType = 
        blockTaking (list[aParam.ofType(blockReturning(dynamic))]) returning (base)
    extend (boolean) with(base)
    addTo (boolean) name("&&") param(boolean) returns(boolean)
    addTo (boolean) name("||") param(boolean) returns(boolean)
    addTo (boolean) name("prefix!") returns(boolean)
    addTo (boolean) name("not") returns(boolean)
    addTo (boolean) name("andAlso") param(shortCircuit) returns(dynamic)
    addTo (boolean) name("orElse") param(shortCircuit) returns(dynamic)

    extend (number) with(base)
    addTo (number) name("+") param(number) returns(number)
    addTo (number) name("*") param(number) returns(number)
    addTo (number) name("-") param(number) returns(number)
    addTo (number) name("/") param(number) returns(number)
    addTo (number) name("^") param(number) returns(number)
    addTo (number) name("%") param(number) returns(number)
    addTo (number) name("@") param(number) returns(point)
    addTo (number) name("hashcode") returns(string)
    addTo (number) name("++") param(base) returns(string)
    addTo (number) name("<") param(number) returns(boolean)
    addTo (number) name(">") param(number) returns(boolean)
    addTo (number) name("<=") param(number) returns(boolean)
    addTo (number) name("≤") param(number) returns(boolean)
    addTo (number) name(">=") param(number) returns(boolean)
    addTo (number) name("≥") param(number) returns(boolean)
    addTo (number) name("..") param(number) returns(listTp)
    addTo (number) name("asInteger32") returns(number)
    addTo (number) name("prefix-") returns(number)
    addTo (number) name("inBase") param(number) returns(number)
    addTo (number) name("truncated") returns(number)
    addTo (number) name("rounded") returns(number)
    addTo (number) name("prefix<") returns(pattern)
    addTo (number) name("prefix>") returns(pattern)
    addTo (number) name("abs") returns(number)

    def ifAbsentBlock: ObjectType = blockTaking (list[]) returning (dynamic)
    def stringDoBlock: ObjectType = blockTaking (list[aParam.ofType(string)])
            returning(doneType)
    def stringKeysValuesDoBlock: ObjectType = 
        blockTaking (list[aParam.ofType(number), aParam.ofType(string)]) 
           returning (doneType)
    extend (string) with(base)
    addTo (string) name("*") param(number) returns(string)
    addTo (string) name("&") param(pattern) returns(pattern)
    addTo (string) name("++") param(base) returns(string)
    addTo (string) name(">") param(string) returns(boolean)
    addTo (string) name(">=") param(string) returns(boolean)
    addTo (string) name("<") param(string) returns(boolean)
    addTo (string) name("<=") param(string) returns(boolean)
    addTo (string) name("≤") param(string) returns(boolean)
    addTo (string) name("≥") param(string) returns(boolean)
    addTo (string) name("at") param(number) returns(string)
    addTo (string) name("asLower") returns(string)
    addTo (string) name("asNumber") returns(number)
    addTo (string) name("asUpper") returns(string)
    addTo (string) name("capitalized") returns(string)
    addTo (string) name("compare") param(string) returns(boolean)
    addTo (string) name("contains") param(string) returns(boolean)
    addTo (string) name("encode") returns(string)
    addTo (string) name("endsWith") param(string) returns(boolean)
    addTo (string) name ("indexOf") param(string) returns (number)
    addTo(string) names (list["indexOf","startingAt"]) 
           parts(list [ list[string], list[number] ]) returns (number)
//    addTo(string) names(["indexOf","startingAt","ifAbsent"]) 
//           parts([ [string], [number],[ifAbsentBlock] ]) returns(number | dynamic)
//    addTo(string) names(["indexOf","startingAt","ifAbsent"]) 
//           parts([ [string], [number],[ifAbsentBlock] ]) returns(number | dynamic)
    addTo (string) name ("lastIndexOf") param(string) returns(number)
    addTo (string) names (list["lastIndexOf","startingAt"]) 
           parts(list[ list[string], list[number] ]) returns (number)
//    addTo(string) names(["lastIndexOf","ifAbsent"]) parts([ [string], [ifAbsentBlock] ]) returns(number | dynamic)
//    addTo(string) names(["lastIndexOf","startingAt","ifAbsent"]) parts([ [string], [number],[ifAbsentBlock] ]) returns(number | dynamic)
    addTo(string) name ("indices") returns(listTp)
    addTo(string) name("isEmpty") returns(boolean)
    addTo(string) name("iterator") returns(base)
    addTo(string) name("lastIndexOf") param(string) returns(number)
//    addTo(string) name("lastIndexOf()ifAbsent") params(string, ifAbsentBlock) returns(number | dynamic)
//    addTo(string) name("lastIndexOf()startingAt()ifAbsent") params(string, ifAbsentBlock) returns(number | dynamic)
    addTo(string) name("ord") returns(number)
    addTo(string) names(list["replace","with"]) parts(list[ list[string], list[string] ]) returns(string)
    addTo(string) name("size") returns(number)
    addTo(string) name("startsWith") param(string) returns(boolean)
    addTo(string) name("startsWithDigit") returns(boolean)
    addTo(string) name("startsWithLetter") returns(boolean)
    addTo(string) name("startsWithPeriod") returns(boolean)
    addTo(string) name("startsWithSpace") returns(boolean)
    addTo(string) names(list["substringFrom","size"]) 
        parts(list[ list[number], list[number] ]) returns(string)
    addTo(string) names(list["substringFrom","to"]) 
        parts(list[ list[number], list[number] ]) returns(string)
    addTo(string) name("_escape") returns(string)
    addTo(string) name("trim") returns(string)
    addTo(string) name("do") param(stringDoBlock) returns (doneType)
    addTo(string) name("size") returns(number)
    addTo(string) name("iter") returns(iterator)
    
    extend(point) with(base)
    addTo(point) name("x") returns(number)
    addTo(point) name("y") returns(number)
    addTo(point) name("distanceTo") param(point) returns(number)
    addTo(point) name("+") param(point) returns(point)
    addTo(point) name("-") param(point) returns(point)
    addTo(point) name("*") param(point) returns(point)
    addTo(point) name("/") param(point) returns(point)
    addTo(point) name("length") returns(number)
    
    def fold: ObjectType = blockTaking(list[aParam.ofType(dynamic), aParam.ofType(dynamic)])
        returning (dynamic)
    extend (listTp) with (base)
    addTo (listTp) name("at") param(number) returns(dynamic)
    addTo(listTp) names(list["at","put"]) parts(list[ list[number], list[dynamic] ]) returns(doneType)
    addTo(listTp) name("push") param(dynamic) returns(doneType)
    addTo(listTp) name("add") param(dynamic) returns(listTp)
    addTo(listTp) name("addFirst") param(dynamic) returns(listTp)   // need to add varparams
    addTo(listTp) name("addLast") param(dynamic) returns(listTp)
    addTo(listTp) name("addAll") param(listTp) returns(listTp)
    addTo(listTp) name("pop") returns(dynamic)
    addTo(listTp) name("size") returns(number)
    addTo(listTp) name("iter") returns(iterator)
    addTo(listTp) name("iterator") returns(iterator)
    addTo(listTp) name("contains") param(dynamic) returns(boolean)
    addTo(listTp) name("indexOf") param(dynamic) returns(number)
    addTo(listTp) name("indices") returns(listTp)
    addTo(listTp) name("first") returns(dynamic)
    addTo(listTp) name("last") returns(dynamic)
    addTo(listTp) name("prepended") param(dynamic) returns(listTp)
    addTo(listTp) name("++") param(listTp) returns (listTp)
    addTo(listTp) name("reduce") params(list[dynamic, fold]) returns (dynamic)
    addTo(listTp) name("reversed") returns(dynamic)
    addTo(listTp) name("removeFirst") returns(dynamic)
    addTo(listTp) name("removeLast") returns(dynamic)
    addTo(listTp) name("removeAt") param(number) returns(dynamic)
    addTo(listTp) name("remove") param(dynamic) returns(listTp)
    addTo(listTp) name("removeAll") param(listTp) returns(listTp)
    addTo(listTp) name("copy") returns(listTp)
    addTo(listTp) name("sort") returns(listTp)
    addTo(listTp) name("reverse") returns(listTp)

    
    extend(binding) with(base)
    addTo(binding) name("key") returns(dynamic)
    addTo(binding) name("value") returns(dynamic)

    scope.types.at("Unknown") put(dynamic)
    scope.types.at("Done") put(doneType)
    scope.types.at("Object") put(base)
    scope.types.at("Pattern") put(pattern)
    scope.types.at("Boolean") put(boolean)
    scope.types.at("Number") put(number)
    scope.types.at("String") put(string)
    scope.types.at("List") put(listTp)
    scope.types.at("Set") put(set)
    scope.types.at("Sequence") put(sequence)
    scope.types.at("Dictionary") put(dictionary)
    scope.types.at("Point") put(point)
    scope.types.at("Binding") put(binding)
    scope.types.at("Range") put(rangeTp)

    addVar("Unknown") ofType(pattern)
    addVar("Dynamic") ofType(pattern)
    addVar("Done") ofType(pattern)
    addVar("Object") ofType(pattern)
    addVar("Pattern") ofType(pattern)
    addVar("Boolean") ofType(pattern)
    addVar("Number") ofType(pattern)
    addVar("String") ofType(pattern)
    addVar("List") ofType(pattern)
    addVar("Set") ofType(pattern)
    addVar("Sequence") ofType(pattern)
    addVar("Dictionary") ofType(pattern)
    addVar("Point") ofType(pattern)
    addVar("Binding") ofType(pattern)
    addVar("Range") ofType(pattern)

    addVar("done") ofType(self.doneType)
    addVar("true") ofType(boolean)
    addVar("false") ofType(boolean)
}

// Adds name to variables and as parameterless method (really def, not var!)
method addVar (name : String) ofType (oType : ObjectType) → Done is confidential {
    scope.variables.at (name) put (oType)
    scope.methods.at (name) put (aMethodType.member(name) ofType(oType))
}

// Object literals.

def ObjectError: outer.ExceptionKind = TypeError.refine("ObjectError")

// Class declaration.

def ClassError: outer.ExceptionKind = TypeError.refine("Class TypeError")

def MethodError = TypeError.refine("Method TypeError")

// Def and var declarations.

def DefError: outer.ExceptionKind = TypeError.refine("Def TypeError")

// Check if the signature and parameters of a request match
// the declaration, return the type of the result
method check(req : Request)
        against(meth : MethodType) -> ObjectType is confidential {
    def name: String = meth.name   // CHANGE TO NAMESTRING

    for(meth.signature) and(req.parts) do { sigPart: MixPart, reqPart ->
        def params: List⟦Param⟧ = sigPart.parameters
        def args: Collection⟦AstNode⟧   = reqPart.args

        def pSize: Number = params.size
        def aSize: Number = args.size

        if(aSize != pSize) then {
            def which: String = if(aSize > pSize) then { "many" } else { "few" }
            def where: Number = if(aSize > pSize) then {
                    args.at(pSize + 1)
                } else {
                // Can we get beyond the final argument?
                    req.value
                }

            outer.RequestError
                .raise("too {which} arguments to method part " ++
                    "'{sigPart.name}', expected {pSize} but got {aSize}") 
                    with(where)
        }

        for (params) and (args) do { param: Param, arg: AstNode ->
            def pType: ObjectType = param.typeAnnotation
            def aType: ObjectType = typeOf(arg)

            if (typeOf (arg).isConsistentSubtypeOf (pType).not) then {
                outer.RequestError.raise("the expression " ++
                    "`{stripNewLines(arg.toGrace(0))}` of type '{aType}' does not " ++
                    "satisfy the type of parameter '{param}' in the " ++
                    "method '{name}'") with(arg)
            }
        }
    }
    meth.returnType
}

// Throw error only if type of node is not consistent subtype of eType
method check (node: AstNode) matches(eType : ObjectType)
        inMethod (name : String) -> Done is confidential {
    def aType: ObjectType = typeOf(node)
    if (aType.isConsistentSubtypeOf (eType).not) then {
        MethodError.raise("the method '{name}' declares a result of " ++
            "type '{eType}', but returns an expression of type " ++
            "'{aType}'") with (node)
    }
}

// break of input string into list of strings as divided by separator
method split(input : String, separator : String) -> List⟦String⟧ {
    var start: Number := 1
    var end: Number := 1
    var output: List⟦ List⟦String⟧ ⟧ := list[]
    while {end < input.size} do {
        if (input.substringFrom(end)to(end) == (separator)) then {
            var cand := input.substringFrom(start)to(end-1)
            if (cand.size > 0) then {
                output.push(cand)
            }
            start := end + 1
        }
        end := end + 1
    }
    output.push(input.substringFrom(start)to(end))
    return output
}

// Static type checker visitor
// methods return false if goes no further recursively
def astVisitor: ast.AstVisitor = object {
    inherit ast.baseVisitor
    
    // Default behavior serving as placeholder only for cases not yet implemented
    method checkMatch(node: AstNode) → Boolean {
        io.error.write "1436: checkMatch in astVisitor"
        true
    }
    
    // type-check if statement
    method visitIf (ifnode: If) -> Boolean {
        def cond: AstNode = ifnode.value
        if (typeOf (cond).isConsistentSubtypeOf (anObjectType.boolean).not) then {
            outer.RequestError.raise("1366: the expression `{stripNewLines(cond.toGrace(0))}` does not " ++
                "satisfy the type 'Boolean' for an 'if' condition'") with (cond)
        }

        def thenType: ObjectType = anObjectType.fromBlock(ifnode.thenblock)

        def hasElse: Boolean = ifnode.elseblock.body.size > 0
        def elseType: ObjectType = if (hasElse) then {
            anObjectType.fromBlock(ifnode.elseblock)
        } else {
            anObjectType.doneType
        }

        // type of expression is whichever branch has largest type.
        // If incompatible return variant formed by the two types
        def ifType: ObjectType = if (hasElse) then {
                if (thenType.isConsistentSubtypeOf (elseType)) then {
                    elseType
                } elseif {elseType.isConsistentSubtypeOf(thenType)} then {
                    thenType
                } else {
                    thenType | elseType
                }
            } else {
                anObjectType.doneType
            }
            
        // save type in cache
        cache.at (ifnode) put (ifType)
        false
    }

    // Type check block.  Fails if don't give types to block parameters
    // Should it?
    // params are identifier nodes.
    method visitBlock (block: AstNode) -> Boolean {
        // Raises exception if block parameters not given types
        for (block.params) do {p->
            if ((p.kind == "identifier") && {p.wildcard.not} && {p.decType.value=="Unknown"}) then {
                CheckerFailure.raise("no type given to declaration"
                    ++ " of parameter '{p.value}'") with (p)
            }
        }

        def body = sequence(block.body)
        var retType: ObjectType
        
        scope.enter {
            for(block.params) do { param ->
                // Don't understand why this case is here.  
                // Isn't param always a string?
                match (param)
                    case { _ : StringLiteral ->
                        scope.variables.at(param.value)
                            put(anObjectType.fromDType(param))
                    } case { _ : NumberLiteral ->
                        scope.variables.at(param.value)
                            put(anObjectType.fromDType(param))
                    } case { _ ->
                        io.error.write("1517: {param.value} has {param.dtype}")
                        scope.variables.at(param.value)
                            put(anObjectType.fromDType(param.dtype))
                    }
            }
    
    
            collectTypes(body)
    
            for(body) do { stmt: AstNode ->
                checkTypes(stmt)
            }
            
            retType := anObjectType.fromBlockBody(body)
        }
        // At this point, know block type checks.
        
        // Now compute type of block and put in cache
        def parameters = list[]
        for(block.params) do { param: AstNode ->
            match (param)
                case { _:StringLiteral ->
                        parameters.push(aParam.withName(param.value)
                            ofType(anObjectType.fromDType(param)))
                } case { _:NumberLiteral ->
                        parameters.push(aParam.withName(param.value)
                            ofType(anObjectType.fromDType(param)))
                } case { _ ->
                        parameters.push(aParam.withName(param.value)
                            ofType(anObjectType.fromDType(param.dtype)))
                }
        }

        def blockType: ObjectType = anObjectType.blockTaking(parameters)
            returning(retType)
            
        cache.at (block) put (blockType)
        io.error.write "block has type {blockType}"
        false
    }

    // not implemented yet
    method visitMatchCase (node: MatchCase) -> Boolean {
        // matchee, cases
        io.error.write "\n1538: MatchCase visit not implemented yet\n"
        checkMatch (node)
    }

    // not implemented yet
    method visitTryCatch (node) -> Boolean {
        io.error.write "\n1544: TryCatch visit not implemented yet\n"
        checkMatch (node)
    }

//    method visitMethodType (node) -> Boolean {
//        io.error.write "\n1549: visiting method type {node} not implemented\n"
//
//        runRules (node)
//
//        node.parametersDo { param ->
//            runRules (parameterFromNode(param))
//        }
//
//        return false
//    }

//    method visitType (node) -> Boolean {
//        io.error.write "\n1561: visiting type {node} (not implemented)\n"
//        checkMatch (node)
////        io.error.write "432: done visiting type {node}"
//    }

    method visitMethod (meth: AstNode) -> Boolean {
        io.error.write "\n1567: Visiting method {meth}\n"
        
        // ensure all parameters have known types and provide return type
        for (meth.signature) do {s: AstNode ->
            for (s.params) do {p: AstNode ->
                if ((p.kind == "identifier") && {p.wildcard.not} && {p.decType.value=="Unknown"}) then {
                    CheckerFailure.raise("no type given to declaration"
                        ++ " of parameter '{p.value}'") with (p)
                }
            }
        }
        if (meth.decType.value=="Unknown") then {
            CheckerFailure.raise ("no return type given to declaration"
                ++ " of method '{meth.value.value}'") with (meth.value)
        }
    
        // meth.value is Identifier Node
        def name: String = meth.value.value
        def mType: MethodType = aMethodType.fromNode(meth)
        def returnType: ObjectType = mType.returnType
        
        io.error.write "\n1585: Entering scope for {meth}\n"
        scope.enter {
            for(meth.signature) do { part: AstNode ->
                for(part.params) do { param: AstNode ->
                    scope.variables.at(param.value)
                        put(anObjectType.fromDType(param.dtype))
                }
            }
            
            collectTypes((meth.body))
            io.error.write "\n1595: collected types for {list(meth.body)}\n"
    
            for(meth.body) do { stmt: AstNode ->
                checkTypes(stmt)
                
                // Write visitor to make sure return statements have right type
                stmt.accept(object {
                    inherit ast.baseVisitor
    
                    method visitReturn(ret) → Boolean is override {
                        check (ret.value) matches (returnType) inMethod (name)
                        cache.at(ret) put (returnType)
                        return false
                    }
    
                    method visitMethod(node) → Boolean is override {
                        false
                    }
                })
            }
    
            if(meth.body.size == 0) then {
                if(anObjectType.doneType.isConsistentSubtypeOf(returnType).not) then {
                    MethodError.raise("the method '{name}' declares a " ++
                        "result of type '{returnType}', but has no body") with (meth)
                }
            } else {
                def lastNode: AstNode = meth.body.last
                if (Return.match(lastNode).not) then {
                    def lastType = typeOf(lastNode)
                    if(lastType.isConsistentSubtypeOf(returnType).not) then {
                        MethodError.raise("the method '{name}' declares a " ++
                            "result of type '{returnType}', but returns an " ++
                            "expression of type '{lastType}'") with (lastNode)
                    }
                }
            }
        }
    
        if (isMember(mType)) then {
            scope.variables.at(name) put(returnType)
        }
    
        scope.methods.at(name) put(mType)
        
        cache.at(meth) put (anObjectType.doneType)
        false

    }

    method visitCall (req) -> Boolean {
        def rec: AstNode = req.receiver
        io.error.write "1672: receiver is {rec}"    
        def rType: ObjectType = if(rec.isIdentifier && 
            {(rec.nameString == "self") || (rec.nameString =="module()object")}) then {
            io.error.write "1675: looking for type of self"
            scope.types.find("$elf") butIfMissing {
                Exception.raise "type of self missing" with(rec)
            }
        } else {
            typeOf(rec)
        }
        io.error.write "\n1680: type of receiver is {typeOf(rec)}"
        
        def callType: ObjectType = if (rType.isDynamic) then {
            anObjectType.dynamic
        } else { 
        
            def name: String = req.nameString
            io.error.write "request on {name}"
        
            match(rType.getMethod(name)) 
              case { (noSuchMethod) ->
                outer.RequestError.raise("no such method '{name}' in " ++
                    "`{stripNewLines(rec.toGrace(0))}` of type\n" ++
                    "    '{rType}' \nin type \n  '{rType.methods}'") 
                        with(req)
            } case { meth : MethodType ->
                io.error.write "checking request {req} against {meth}"
                check(req) against(meth)
            }
        
        }
        io.error.write "1701: callType: {callType}"
        cache.at(req) put (callType)
        true  // request to continue on arguments
        
    }

    // returns false so don't recurse into object
    method visitObject (obj :AstNode) -> Boolean {
        def objType: ObjectType = scope.enter { 
            processBody (list (obj.value), obj.superclass) 
        }
        cache.at(obj) put (objType)
        false
    }
    
    // skip for now
    method visitModule (node: AstNode) → Boolean {  // added kim
        io.error.write "\n1698: visiting module {node}"
        checkMatch (node)
    }

    // array literals represent collections (should fix to be lineups)
    method visitArray (lineUpLiteral) -> Boolean {
        io.error.write "\n1704: visiting array {lineUpLiteral}"
        cache.at (lineUpLiteral) put (anObjectType.collection)
        false
    }

    // members are treated like calls
    method visitMember (node: AstNode) -> Boolean {
        visitCall (node)
    }

    method visitGeneric (node: AstNode) -> Boolean {
        io.error.write "\n1715: visiting generic {node} (not implemented)"
        checkMatch (node)
    }

    // look up identifier type in scope
    method visitIdentifier (ident: AstNode) -> Boolean {
        def idType: ObjectType = match(ident.value) 
            case { "outer" ->
                outerAt(scope.size)
            } 
            case { _ ->
                scope.variables.find(ident.value) 
                    butIfMissing { anObjectType.dynamic }
            }
        cache.at (ident) put (idType)
        true

    }

    // Fix later
    method visitOctets (node: AstNode) -> Boolean {
        io.error.write "\n1736: visiting Octets {node} (not implemented)"
        false
    }

    // type of string is String
    method visitString (node: AstNode) -> Boolean {
        cache.at (node) put (anObjectType.string)
        true
    }

    // type of number is Number
    method visitNum (node: AstNode) -> Boolean {
        cache.at (node) put (anObjectType.number)
        true
    }

    // ops handled same as calls
    method visitOp (node: AstNode) -> Boolean {
        visitCall (node)
    }

    method visitBind (bind: AstNode) -> Boolean {
        io.error.write "\n 1758: Visit Bind"
        def dest: AstNode = bind.dest
    
        match (dest) case { _ : Member ->
            var nm: String := dest.nameString
            if (! nm.endsWith ":=(1)") then {
                nm := nm ++ ":=(1)"
            }
            // rec.memb
            def rec: AstNode = dest.in
    
            // Type of receiver
            def rType: ObjectType = if(Identifier.match(rec) && {rec.value == "self"}) then {
                scope.types.find("$elf") butIfMissing {
                    Exception.raise "type of self missing" with(rec)
                }
            } else {
                typeOf(rec)
            }
    
            if (rType.isDynamic) then {
                anObjectType.dynamic
            } else {
    
                match(rType.getMethod(nm)) 
                  case { (noSuchMethod) ->
                    outer.RequestError.raise("no such method '{nm}' in " ++
                        "`{stripNewLines(rec.toGrace(0))}` of type '{rType}'") with (bind)
                } case { meth : MethodType ->
                    def req = ast.callNode.new(dest, 
                        list [ast.callWithPart.new(dest.value, list [bind.value])])
                    check(req) against(meth)
                }
            }
    
        } case { _ ->
            def dType: ObjectType = typeOf(dest)
    
            def value: AstNode = bind.value
            def vType: ObjectType = typeOf(value)
    
            if(vType.isConsistentSubtypeOf(dType).not) then {
                DefError.raise("the expression `{stripNewLines(value.toGrace(0))}` of type " ++
                    "'{vType}' does not satisfy the type '{dType}' of " ++
                    "`{stripNewLines(dest.toGrace(0))}`") with (value)
            }
        }
        cache.at (bind) put (anObjectType.doneType)
        false
    }
    

    // handles both defs and var declarations
    method visitDefDec (defd: AstNode) -> Boolean {
        if (defd.decType.value=="Unknown") then {
            var typ: String := "def"
            if (Var.match(defd)) then { typ := "var" } 
            CheckerFailure.raise("no type given to declaration"
                ++ " of {typ} '{defd.name.value}'") with (defd.name)
        }
        var defType: ObjectType := anObjectType.fromDType(defd.dtype)
        io.error.write "\n1820: defType is {defType}"
        def value = defd.value
    
        if(value != false) then {
            def vType: ObjectType = typeOf(value)
            // infer type if definition w/out type
            if(defType.isDynamic && (defd.kind == "defdec")) then {
                defType := vType
            } 
            if(vType.isConsistentSubtypeOf(defType).not) then {
                DefError.raise("the expression `{stripNewLines(value.toGrace(0))}` of type " ++
                    "'{vType}' does not have type {defd.kind} " ++
                    "annotation '{defType}'") with (value)
            }
        }

        def name: String = defd.nameString
        scope.variables.at(name) put(defType)
        if (defd.isReadable) then { 
            scope.methods.at(name) put(aMethodType.member(name) ofType(defType))
        }
        if (defd.isWritable) then {
            def name' = name ++ ":=(1)"
            def param = aParam.withName(name) ofType(defType)
            def sig = list[aMixPartWithName(name') parameters(list[param])]
            scope.methods.at(name')
                put(aMethodType.signature(sig) returnType(anObjectType.doneType))
        }
        cache.at (defd) put (anObjectType.doneType)
        false
    } 

    // Handle variable declaration like definition
    method visitVarDec (node: AstNode) -> Boolean {
        visitDefDec (node)
    }

    // Grab information from gct file
    method visitImport (imp: AstNode) -> Boolean {
        io.error.write "\n1861: visiting import {imp}"
        def gct: Dictionary⟦ List⟦String⟧ ⟧ = xmodule.parseGCT(imp.path)
        // headers of sections of gct form keys
        // Associated values are lines beneath the header
        def placeholders: List⟦ObjectType⟧ = list[]
        def typeNames: List⟦ObjectType⟧ = list[]
        io.error.write("\n1954 keys are {gct.keys}\n")
        
        // Add to scope imported types w/placeholder as values
        if (gct.containsKey("types")) then {
            for(gct.at("types")) do { typ ->
                def placeholder: ObjectType = anObjectType.dynamic
                typeNames.push(typ)
                placeholders.push(placeholder)
                scope.types.at("{imp.nameString}.{typ}")put(placeholder)
            }
        }
        
        if (typeNames.size > 0) then {
            // ID for type declarations
            var counter := 1
            gct.keys.do { key : String ->
              if (key.startsWith("methodtypes-of:")) then {
                  var parseMethodTypes: List⟦String⟧ := split(key, ":")
                  var typeOfMethods: String := parseMethodTypes.at(2)
                  io.error.write "\n1881: typeOfMethods is {typeOfMethods}"
                  def typeliterals: Dictionary = outer.dictionary.empty
                  var unionTypes: List⟦ObjectType⟧ := list[]
                  var variantTypes: List ⟦ObjectType⟧ := list[]
                  for (gct.at(key)) do { methodSignature: String ->
                      if (typeOfMethods == "&") then {
                          unionTypes.push (methodSignature.substringFrom(3)
                                                  to (methodSignature.size))
                      } elseif {typeOfMethods == "|"} then {
                          variantTypes.push(methodSignature.substringFrom(3)to(methodSignature.size))
                      } else {
                          if (!typeliterals.containsKey(typeOfMethods)) then {
                              typeliterals.at(typeOfMethods)put(emptySet)
                          }
                          typeliterals.at(typeOfMethods).add
                                  (aMethodType.fromGctLine(methodSignature))
                      }
                  }
                  
                  scope.types.at ("{imp.nameString}.{typeOfMethods}")
                      put (anObjectType.fromMethods (typeliterals.at (typeOfMethods)))
              }
            }
        }
        cache.at(imp) put (anObjectType.doneType)
        
        def importedMethodTypes = gct.at("publicMethodTypes") ifAbsent {
            io.error.write "nothing imported from {imp.nameString}"
            list[]
        }
        
        def methodTypes = emptySet
        
        for (importedMethodTypes) do {methodSignature → 
            io.error.write "\n1998: methodSignature is {methodSignature}"
            methodTypes.add(aMethodType.fromGctLine(methodSignature))
        }
        
        def importType: ObjectType = anObjectType.fromMethods(methodTypes)

        scope.variables.at(imp.nameString) put(importType)
        false
    }

    method visitReturn (node: AstNode) -> Boolean {
        cache.at(node) put (typeOf(node.value))
        false
    }

    method visitInherits (node: AstNode) -> Boolean {
        cache.at(node) put (typeOf(node.value))
        false
    }


    // Not done
    // Should be treated like import, but at top level
    // Add to base type
    method visitDialect (node: AstNode) -> Boolean {
        io.error.write "\n1919: visiting dialect {node}"
        checkMatch (node)
    }

}


// DEBUG: Outer not handled correctly yet

method outerAt(i : Number) -> ObjectType is confidential {
    // Required to cope with not knowing the prelude.
    if(i <= 1) then {
        return anObjectType.dynamic
    }
    io.error.write "processing outer"
    def vStack: List⟦Dictionary⟧ = scope.variables.stack
    def curr: ObjectType = vStack.at(i)

    return curr.at("outer") ifAbsent {
        def prev: ObjectType = outerAt(i - 1)

        def mStack: List⟦Dictionary⟧ = scope.methods.stack

        def vars: Dictionary = vStack.at(i - 1)
        def meths: Set⟦MethodType⟧ = mStack.at(i - 1).values

        def oType: ObjectType = anObjectType.fromMethods(meths)
        def mType: MethodType = aMethodType.member("outer") ofType(oType)

        curr.at("outer") put(oType)
        mStack.at(i).at("outer") put(mType)

        oType
    }
}


// Typing methods.

method processBody(body : List⟦AstNode⟧, superclass: AstNode | false) -> ObjectType is confidential {
    io.error.write "\n1958: superclass: {superclass}\n"
    // Collect the declarative types directly in the object body.
    collectTypes(body)

    var inheritedMethods: Set⟦MethodType⟧ := emptySet
    def hasInherits = false ≠ superclass
    io.error.write "\n1965: hasInherits is {hasInherits}\n"
    def superType = if(hasInherits) then {
        def inheriting: AstNode = superclass
//        inheriting.accept(object {
//            inherit ast.baseVisitor

//            def illegal = ["self", "super"]

//            method visitIdentifier(ident) {
//                if(illegal.contains(ident.value)) then {
//                    ObjectError.raise("reference to '{ident.value}' " ++
//                        "in inheritance clause") with (ident)
//                }
//                true
//            }
//        })
        io.error.write "\nGT1981: checking types of inheriting = {inheriting}\n"
        def inheritedType: ObjectType = typeOf(inheriting)
        inheritedMethods := inheritedType.methods
        io.error.write "\n1984: inherited methods: {inheritedMethods}"
        inheritedType
    } else {
        anObjectType.base
    }
    io.error.write "\n1989: superType is {superType}\n"
    scope.variables.at("super") put(superType)

    // If the super type is dynamic, then we can't know anything about the
    // self type.  TODO We actually can, because an object cannot have two
    // methods with the same name.
    def publicType: ObjectType = if(superType.isDynamic) then {
        scope.types.at("$elf") put(superType)
        superType
    } else {
        // Collect the method types to add the two self types.
        def isParam: Param = aParam.withName("other") ofType (anObjectType.base)
        def part: MixPart = aMixPartWithName("isMe")parameters(list[isParam])
        
        // add isMe method as confidential
        def isMeMeth: MethodType = aMethodType.signature(list[part]) returnType(anObjectType.boolean)
        
        def publicMethods: Set⟦MethodType⟧ = emptySet
        def allMethods: Set⟦MethodType⟧ = emptySet
        allMethods.add(isMeMeth)
        
        // gather types as well?
        def publicTypes: Dictionary⟦String,ObjectType⟧ = emptyDictionary
        def allTypes: Dictionary⟦String,ObjectType⟧ = emptyDictionary

        for(body) do { stmt: AstNode ->
            io.error.write "\n2009: processing {stmt}"
            match(stmt) case { meth : Method ->
                def mType: MethodType = aMethodType.fromNode(meth)
                allMethods.add(mType)
                if(isPublic(meth)) then {
                    publicMethods.add(mType)
                }

                scope.methods.at(mType.name) put(mType)
                if(isMember(mType)) then {
                    scope.variables.at(mType.name) put(mType.returnType)
                }
            } case { defd : Def | Var ->
                io.error.write "\n2022: in def or var case"
                def mType: MethodType = aMethodType.fromNode(defd)
                allMethods.add(mType)
                io.error.write "\n2024: add {mType} to allMethods"
                if(defd.isReadable) then {
                    publicMethods.add(mType)
                }
                if(defd.isWritable) then {
                    def name': String = defd.nameString ++ ":=" //(1)"
                    def dType: ObjectType = anObjectType.fromDType(defd.dtype)
                    def param: Param = aParam.withName(defd.nameString) ofType(dType)
                    def sig: List⟦MixPart⟧ = list[aMixPartWithName(name') parameters(list[param])]
 
                    def aType: MethodType = aMethodType.signature(sig) returnType(anObjectType.doneType)
                    scope.methods.at(name')
                        put(aType)
                    allMethods.add(aType)
                    publicMethods.add(aType)
                }
            } case { _ -> 
            }
        }
        def internalType: ObjectType = anObjectType.fromMethods(allMethods)
        io.error.write "\n2045: internalType is {internalType}\n"
        scope.types.at("$elf") put (internalType)
        // io.error.write "added $elf to scope"
        if (hasInherits) then {
            def allMethodsWithInheritedMethods: Set⟦MethodType⟧ = 
                    allMethods ++ inheritedMethods
            anObjectType.fromMethods(allMethodsWithInheritedMethods)
        } else {
            anObjectType.fromMethods(publicMethods)
        }
    }
    // io.error.write "1820:done calculating publicType"

    scope.variables.at("self") put(publicType)
    io.error.write "\n2058: publicType is {publicType}\n"

    // Type-check the object body.
    def indices: Collection⟦Number⟧ = if(hasInherits) then {
        2..body.size
    } else {
        body.indices
    }
    
    for(indices) do { i: Number ->
        io.error.write "\n2070: checking index {i} at line {body.at(i).line}" 
        checkTypes(body.at(i))
        io.error.write "\n2072: finished index {i}" 
    }
    publicType
}


def TypeDeclarationError = TypeError.refine "TypeDeclarationError"

// The first pass over a body, collecting all type declarations so that they can
// reference one another declaratively.
method collectTypes(nodes : Collection⟦AstNode⟧) -> Done is confidential {
    def names: List⟦String⟧ = list[]
    def types: List⟦AstNode⟧ = list[]
    def placeholders: List⟦ObjectType⟧ = list[]

    for(nodes) do { node ->
        match(node) case { td : TypeDeclaration ->
            if(names.contains(td.nameString)) then {
                TypeDeclarationError.raise("the type {td.nameString} uses " ++
                    "the same name as another type in the same scope") with(td)
            }

            names.push(td.nameString)

            // In order to allow the types to be declarative, the scope needs
            // to be populated by placeholder types first.
            def placeholder: ObjectType = anObjectType.placeholder
            types.push(td)
            placeholders.push(placeholder)
            scope.types.at(td.nameString) put(placeholder)
        } case { _ ->
        }
    }

    for(types) and(placeholders) do { td: AstNode, ph: ObjectType ->
        def oType = anObjectType.fromDType(td)
        ph.updateMethods(oType.methods)
    }
    // io.error.write "1881: done collecting types"
}


// Determines if a node is publicly available.
method isPublic(node : Method | Def | Var) -> Boolean is confidential {
    match(node) case { _ : Method ->
        for(node.annotations) do { ann ->
            if(ann.value == "confidential") then {
                return false
            }
        }

        true
    } case { _ ->
        for(node.annotations) do { ann ->
            if((ann.value == "public") || (ann.value == "readable")) then {
                return true
            }
        }

        false
    }
}


// Determines if a method will be accessed as a member.
method isMember(mType : MethodType) -> Boolean is confidential {
    (mType.signature.size == 1) && {
        mType.signature.first.parameters.size == 0
    }
}


// Helper methods.

// For loop with break.
method for(a) doWithBreak(bl) -> Done {
    for(a) do { e ->
        bl.apply(e, {
            return
        })
    }
}

// For loop with continue.
method for(a) doWithContinue(bl) -> Done {
    for(a) do { e ->
        continue'(e, bl)
    }
}

method continue'(e, bl) -> Done is confidential {
    bl.apply(e, { return })
}


// Replace newline characters with spaces. This is a
// workaround for issue #116 on the gracelang/minigrace
// git repo. The result of certain astNodes.toGrace(0)
// is a string containing newlines, and error messages
// containing these strings get cut off at the first
// newline character, resulting in an unhelpful error
// message.
method stripNewLines(str) -> String is confidential {
    str.replace("\n")with(" ")
}

class parameterFromNode (node) -> Parameter is confidential {
    inherit ast.identifierNode.new (node.name, node.dtype)
    method kind { "parameter" }
}

def thisDialect is public = object {
    method astChecker (moduleObj) { moduleObj.accept(astVisitor) }
}


