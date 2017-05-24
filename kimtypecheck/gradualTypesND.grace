#pragma ExtendedLineups
//#pragma noTypeChecks
//dialect "none"


import "ast" as ast 
import "xmodule" as xmodule
import "io" as io

inherit prelude.methods

// Copied from Dialect2
// data structure to hold cached type assignments

// Checker error

def CheckerFailure is public = prelude.Exception.refine "CheckerFailure"

type List = prelude.List

method olist(lst) → List { prelude.list(lst) }

var methodtypes := [ ]
def typeVisitor = object {
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

method dtypeToString(dtype) {
    if (false == dtype) then {"Unknown"}
    elseif {dtype.kind == "typeliteral"} then {
        methodtypes := []
        dtype.accept(typeVisitor)
        methodtypes.at(1)
    } else {
        dtype.value
    }
}


// Helper Map

class entryFrom (key') to(value') is confidential {
    def key is public = key'
    var value is public := value'
}

class aMutableMap {

    def entries = olist[]

    method isEmpty -> Boolean { size == 0 }

    method size -> Number { entries.size }

    method at (key) {
        atKey (key) do { value -> return value }

        prelude.NoSuchObject.raise "no key {key} in aMutableMap"
    }

    method at (key) put (value) -> Done {
        if (value.asString == "done") then {
            prelude.ProgrammingError.raise "mutableMap: attempting to put ‹done› at key {key}"
        }
        for(entries) do { entry ->
            if(entry.key == key) then {
                entry.value := value
                return done
            }
        }

        entries.push (entryFrom (key) to (value))
    }

    method keys -> List {
        def keys' = olist[]

        for (entries) do { entry ->
            keys'.push (entry.key)
        }

        return keys'
    }

    method values -> List {
        def values' = olist[]

        for (entries) do { entry ->
            values'.push (entry.value)
        }

        return values'
    }

    method containsKey (key) -> Boolean {
        atKey (key) do { _ -> return true }

        return false
    }

    method atKey(key) do(block) -> Done {
        atKey(key) do(block) else {}
        return
    }

    method atKey (key) do (block) else (block') {
        for (entries) do { entry ->
            if (entry.key == key) then {
                return block.apply (entry.value)
            }
        }

        return block'.apply
    }

    method asString -> String is override {
        if (isEmpty) then {
            return "\{\}"
        }

        var out := "\{"

        var once := false
        for (entries) do { entry ->
            if (once) then {
                out := "{out},"
            }
            out := "{out} {entry.key} => {entry.value}"
            once := true
        }

        return "{out} \}"
    }

}


// The cached type assignments.
def cache = aMutableMap

// Scope represents stack of scopes

class stackOfKind(kind : String) is confidential {
    def stack is public = olist[aMutableMap]

    // add <name,value> to current scope
    method at (name : String) put (value) -> Done {
        stack.last.at(name) put(value)
    }

    // Find name in stack of current scopes & return its value
    // If not there perform action in bl
    method find (name : String) butIfMissing (bl) {
        var i := stack.size
        while { i > 0 } do {
            stack.at (i).atKey (name) do { value ->
                return value
            }

            i := i - 1
        }

        return bl.apply
    }

}

// scope consists of stacks of scopes for each of variables, methods, & types
def scope is public = object {
    def variables is public = stackOfKind ("variable")
    def methods is public = stackOfKind ("method")
    def types is public = stackOfKind ("type")

    method size -> Number {
        variables.stack.size
    }

    method enter (bl) {
        variables.stack.push (aMutableMap)
        methods.stack.push (aMutableMap)
        types.stack.push (aMutableMap)

        def result = bl.apply

        variables.stack.pop
        methods.stack.pop
        types.stack.pop

        result
    }

    method asString -> String is override {
        "scope<{size}>"
    }
}

method checkTypes (node) → Done {
    io.error.write "\n182: checking types of {node}"
    node.accept (astVisitor)
    io.error.write "\n184: done checking types of {node}"
}

method typeOf (node) → ObjectType {
    io.error.write "\n188: ready to checkTypes"
    checkTypes (node)
    cache.atKey (node) do { value -> return value }
    CheckerFailure.raise "cannot type non-expression {node}" with (node)
}

type AstNode = { kind -> String }

class aPatternMatchingNode (kind : String) -> prelude.Pattern {
    inherit outer.BasicPattern.new

    method match (obj : Object) → prelude.MatchResult | false {
        match (obj) 
          case { node : AstNode ->
            if (kind == node.kind) then {
                prelude.SuccessfulMatch.new (node, outer.emptySequence)
            } else {
                false
            }
          } case { _ -> false }
    }
}

class booleanPattern (predicate) → prelude.MatchResult | false {
    method match (obj) {
        if (predicate.apply (obj)) then { 
            prelude.SuccessfulMatch.new (obj, outer.emptySequence)
        } else {
            false
        }
    }
}

def If is public = aPatternMatchingNode "if"
def BlockLiteral is public = aPatternMatchingNode "block"
def MatchCase is public = aPatternMatchingNode "matchcase"
def TryCatch is public = aPatternMatchingNode "trycatch"
def Outer is public = aPatternMatchingNode "outer"
def MethodSignature is public = aPatternMatchingNode "methodtype"
def TypeLiteral is public = aPatternMatchingNode "typeliteral"
def TypeDeclaration is public = aPatternMatchingNode "typedec"
def TypeAnnotation is public = aPatternMatchingNode "dtype"
def Member is public = aPatternMatchingNode "member"
def Method is public = aPatternMatchingNode "method"
def Parameter is public = aPatternMatchingNode "parameter"
def Request is public = booleanPattern { x → x.isCall }
def Class is public = aPatternMatchingNode "class"
def ObjectLiteral is public = aPatternMatchingNode "object"
def ArrayLiteral is public = aPatternMatchingNode "array"
def Generic is public = aPatternMatchingNode "generic"
def Identifier is public = aPatternMatchingNode "identifier"
def OctetsLiteral is public = aPatternMatchingNode "octets"
def StringLiteral is public = aPatternMatchingNode "string"
def NumberLiteral is public = aPatternMatchingNode "num"
def Operator is public = aPatternMatchingNode "op"
def Bind is public = aPatternMatchingNode "bind"
def Def is public = aPatternMatchingNode "defdec"
def Var is public = aPatternMatchingNode "vardec"
def Import is public = aPatternMatchingNode "import"
def Dialect is public = aPatternMatchingNode "dialect"
def Return is public = aPatternMatchingNode "return"
def Inherit is public = aPatternMatchingNode "inherit"
def Module is public = aPatternMatchingNode "module"


// -------------------------------------------------------------------
// Type declarations for type representations to use for type checking
// -------------------------------------------------------------------

def debug = true
// Type error.

def TypeError is public = CheckerFailure.refine "TypeError"

// Method signature information.

type MethodType = {
    name -> String
    signature -> List⟦MixPart⟧
    returnType -> ObjectType
    isSpecialisationOf (other : MethodType) -> Boolean
    restriction (other : MethodType) -> MethodType
}

type Param = {
    name -> String
    typeAnnotation -> ObjectType
}

type ParamFactory = {
    withName (name' : String) ofType (type' : ObjectType) -> Param
    ofType (type' : Object) -> Param
}
 
def aParam: ParamFactory = object {
    method withName(name': String) ofType(type' : ObjectType) -> Param {
        object {
            def name : String is public = name'
            def typeAnnotation : ObjectType is public = type'

            def asString : String is public, override =
                "{name} : {typeAnnotation}"
        }
    }

    method ofType (type': Object) -> Param {
        withName("_") ofType(type')
    }
}

// MixPart is a "segment" of a method:
// Ex. for (param1) do (param2), for and do are separate "MixParts."
type MixPart = {
    name -> String
    parameters -> List⟦Param⟧
}

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
    fromNode (node) -> MethodType
}
    
def aMethodType: MethodTypeFactory = object {
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

            // Mask unknown fields in corresponding methods
            // Assume that the methods share a signature.
            method restriction (other : MethodType) -> MethodType {
                def restrictParts: List⟦MixPart⟧ = olist[]
                if (other.signature.size != signature.size) then {
                    return self
                }
                for (signature) and (other.signature) 
                                        do {part: MixPart, part': MixPart ->
                    if (part.name == part'.name) then {
                        def restrictParams: List⟦Param⟧ = olist[]
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

    method member (name : String) ofType (rType : ObjectType) -> MethodType {
        signature(olist[aMixPartWithName (name) parameters (olist[])]) returnType (rType)
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
        def parts = olist[]
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
       
                var partParams: List⟦Param⟧ := olist[]
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
            parts.add (aMixPartWithName (partName) parameters (olist[]))
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


    method fromNode (node) -> MethodType {
        match (node) case { meth : Method | Class | MethodSignature ->
            def signature: List⟦MixPart⟧ = olist[]

            for (meth.signature) do { part ->   // type of part?
                def params: List⟦Param⟧ = olist[]

                for (part.params) do { param -> // not of type Param??
                    params.push (aParam.withName (param.value)
                        ofType (anObjectType.fromDType (param.dtype)))
                }

                signature.push (aMixPartWithName (part.name) parameters (params))
            }

            def rType = match (meth) case { m : Method | Class ->
                m.dtype
            } case { m : MethodSignature ->
                meth.rtype
            }

            return signature (signature)
                returnType (anObjectType.fromDType (rType))
        } case { defd : Def | Var ->
            def signature: List⟦MixPart⟧ = 
                    olist[aMixPartWithName (defd.name.value) parameters (olist[])]
            def dtype: ObjectType = anObjectType.fromDType (defd.dtype)
            return signature (signature) returnType (dtype)
        } case { _ ->
            prelude.Exception.raise "unrecognised method node" with(node)
        }
    }

}


// Object type information.

def noSuchMethod: outer.Pattern = object {
    inherit prelude.BasicPattern.new

    method match(obj : Object) {
        if(self.isMe(obj)) then {
            prelude.SuccessfulMatch.new(self, olist[])
        } else {
            prelude.FailedMatch.new(obj)
        }
    }
}

type ObjectType = {
    methods -> List⟦MethodType⟧
    getMethod (name : String) -> MethodType | noSuchMethod
    isDynamic -> Boolean
    isSubtypeOf (other : ObjectType) -> Boolean
    | (other : ObjectType) -> ObjectType
    & (other : ObjectType) -> ObjectType
    restriction (other : ObjectType) -> ObjectType
    isConsistentSubtypeOf (other : ObjectType) -> Boolean
}

type ObjectTypeFactory = {
    fromMethods (methods' : List⟦MethodType⟧) -> ObjectType
    fromMethods (methods' : List⟦MethodType⟧)
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

    method fromMethods (methods' : List⟦MethodType⟧) -> ObjectType { object {
        def methods : List⟦MethodType⟧ is public = if(base == dynamic)
            then { olist[] } else { base.methods } ++ methods'

        method getMethod(name : String) -> MethodType | noSuchMethod {
            for(methods) do { meth ->
                if(meth.nameString == name) then {
                    return meth
                }
            }

            return noSuchMethod
        }
        
        method ==(other:ObjectType) → Boolean {
            self.isMe(other)
        }

        def isDynamic : Boolean is public = false
        
        // List of variant types (A | B | ... )
        var variantTypes := olist[]
        
        method getVariantTypes { variantTypes }
        
        method setVariantTypes(newVariantTypes:List⟦ObjectType⟧) -> Done {
          variantTypes := newVariantTypes
        }

        // Necessary to prevent infinite loops of subtype testing.
        def currentlyTesting = olist[]

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
            
            var subtypeOfVariantTypes := true
            
            // if self is a variant type, check if each of its variant types 
            // is a variant type in other.
            // Basically: is self's set of variant types contained in other's
            // set of variant types.
            if (self.getVariantTypes.size != 0) then {
              for (self.getVariantTypes) doWithContinue { selfType, continue ->
                var subtypeOfAVariantType := false

                for (other.getVariantTypes) do { otherType ->
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
              for (other.getVariantTypes) doWithBreak { otherType, break ->
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
            
            return self.restriction(other).isSubtypeOf(other.restriction(self))  //  FIX!!!
            //true
        }


        // Variant
        // Construct a variant type from two object types.
        // Note: variant types can only be created by this constructor.
        method |(other : ObjectType) -> ObjectType {
            if(self == other) then { return self }
            if(other.isDynamic) then { return dynamic }

            def combine = olist[]
            
              // Old code made intersection between two types.
              // Code below:
//            for(methods) doWithContinue { meth, continue ->
//                for(other.methods) do { meth'->
//                    if(meth.name == meth'.name) then {
//                        if(meth.isSpecialisationOf(meth')) then {
//                            combine.push(meth)
//                        } elseif(meth'.isSpecialisationOf(meth)) then {
//                            combine.push(meth')
//                        } else {
//                            TypeError.raise("cannot produce intersection of " ++
//                                "incompatible types '{self}' and '{other}'")
//                        }
//
//                        continue.apply
//                    }
//                }
//            }

//            def hack = anObjectType  // WHY?
            
            // Variant types of the new object.
            var newVariantTypes := olist[]
            
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
//                inherit hack.fromMethods(combine)  // why was hack here instead of anObjectType?
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
//            io.error.write "starting restriction to {other}\n"
            def restrictTypes = olist[]
            // Restrict matching methods
            for(methods) doWithContinue { meth, continue ->
              // Forget restricting if it is a type
              if (asString.substringFrom (1) to (7) != "Pattern") then {
//                io.error.write "in for with ${asString}$"
                for(other.methods) do { meth' ->
                  if(meth.name == meth'.name) then {
//                    io.error.write "568: restricted meth in {asString} is \n   {meth.restriction(meth')}\n"
                    restrictTypes.push(meth.restriction(meth'))
                    continue.apply
                  }
                }
              }
              restrictTypes.push(meth)
            }
//            def hack = anObjectType        ????
            return object {
//              inherit hack.fromMethods(restrictTypes)    ???
              inherit anObjectType.fromMethods(restrictTypes)
              
              method asString -> String is override {
                "{outer}|{other}"
              }
            }
        }

        method &(other : ObjectType) -> ObjectType {
            if(self == other) then { return self }
            if(other.isDynamic) then { return dynamic }

            def combine = olist[]
            def twice = olist[]

            // Produce union between two object types.
            for(methods) doWithContinue { meth, continue ->
                for(other.methods) do { meth' ->
                    if(meth.name == meth'.name) then {
                        if(meth.isSpecialisationOf(meth')) then {
                            combine.push(meth)
                        } elseif{meth'.isSpecialisationOf(meth)} then {
                            combine.push(meth')
                        } else {
                            TypeError.raise("cannot produce union of " ++
                                "incompatible types '{self}' and '{other}'")
                        }

                        twice.push(meth.name)

                        continue.apply
                    }
                }

                combine.push(meth)
            }

            for(other.methods) do { meth ->
                if(twice.contains(meth.name).not) then {
                    combine.push(meth)
                }
            }

// DEBUG: left out so get cleaner look at type.
// If leave in get error with "outer" being undefined.
//            def hack = anObjectType
            object {
//                inherit hack.fromMethods(combine)
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

            var out := "\{ "

            for(methods) do { mtype ->
                if(["==", "!=", "asString"].contains(mtype.name).not) then {
                    out := "{out}\n  {mtype}; "
                }
            }

            return "{out}\}\n"
        }
    }}

    method fromMethods(methods' : List⟦MethodType⟧)
            withName(name : String) -> ObjectType {
        object {
            inherit fromMethods(methods')
            
            var out := "\{ "

            for(methods') do { mtype ->
                if(["==", "!=", "asString"].contains(mtype.name).not) then {
                    out := "{out}{mtype}; "
                }
            }
            
            var methAsString := "{name} {out} \}"
            def asString : String is public, override = methAsString
        }
    }

    method fromDType(dtype) -> ObjectType {
        // io.error.write "fromDType with {dtype}"
//        io.error.write "\1002 testing dtypeToString"
//        io.error.write "{dtype} is {dtypeToString(dtype)}"
        match(dtype) 
          case { (false) ->
            dynamic
        } case { typeDec : TypeDeclaration ->
            io.error.write "\n1008: converting {dtype} to ObjectType\n"
//        TODO: re-write this code to understand the syntax of type expressions
//          and type declarations, which are not the same!
            anObjectType.fromDType(typeDec.value)
            
        } case { typeLiteral : TypeLiteral ->
            def typeMethods : List⟦MethodType⟧ = olist(typeLiteral.methods)
            def typeName : String = typeLiteral.name
            def meths = olist[]
            for(typeLiteral.methods) do { mType ->
                meths.push(aMethodType.fromNode(mType))
            }
            
            // FIX for new type parameter syntax!
            if((typeName != false) && { typeName.at(1) != "<" }) then {
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
            var left := op.left
            // io.error.write "Left is {left}"
            var leftType: ObjectType := fromDType(left)
            // io.error.write "leftType is {leftType}"
            // Right side of operator (TypeDeclaration or Operator)
            var right := op.right
            // io.error.write "right is {right}"
            var rightType := fromDType(right)
            // io.error.write "693:about to match"
            match(opValue) case { "&" ->
              leftType & rightType
            } case { "|" ->
              // io.error.write "in case for |"
              def lort = leftType | rightType
              // io.error.write "lort: {lort}"
              lort
            } case { _ ->
              ProgrammingError.raise("Expected '&' or '|', got {opValue}") with(op)
            }
            
        } case { ident : Identifier ->
            // io.error.write "703: ident is {ident}"
            def temp2 = anObjectType.fromIdentifier(ident)
            // io.error.write "temp2 is {temp2}"
            temp2
        } case { generic : Generic ->
            io.error.write "\n971: Handling generic: {generic}"
            anObjectType.fromIdentifier(generic.value)
        } case { memb : Member ->
            // io.error.write "709GT: {memb.receiver.value}.{memb.value}"
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
        // io.error.write "721:fromIdentifier with {ident}"
        def temp = scope.types.find(ident.value) butIfMissing { dynamic }
        // io.error.write "723: type is {temp}"
        temp
    }

    method fromBlock(block) -> ObjectType {
        def bType = typeOf(block)
//        io.error.write "752: btype is {bType}"

        if(bType.isDynamic) then { return dynamic }

        def numParams: Number = block.params.size
        def applyName: String = if (numParams == 0) then {
            "apply"
        } else {
            "apply({numParams})"
        }
        def apply = bType.getMethod(applyName)

        match(apply) case { (noSuchMethod) ->
            def strip = {x → x.nameString}
            io.error.write "methods in bType are {bType.methods.map(strip)}"
            TypeError.raise ("1000: the expression `{stripNewLines(block.toGrace(0))}` of " ++
                "type '{bType}' does not satisfy the type 'Block'") with(block)
        } case { meth : MethodType ->
            return meth.returnType
        }
    }

    method fromBlockBody(body) -> ObjectType {
        if(body.size == 0) then {
            anObjectType.doneType
        } else {
            typeOf(body.last)
        }
    }

    method dynamic -> ObjectType {
        object {
            def methods is public = olist[]

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
        def signature = olist[aMixPartWithName("apply") parameters(params)]
        def meths = olist[aMethodType.signature(signature) returnType(rType)]

        fromMethods(meths) withName("Block")
    }

    method blockReturning(rType : ObjectType) -> ObjectType {
        blockTaking(olist[]) returning(rType)
    }

    method addTo(oType : ObjectType) name(name' : String)
            returns(rType : ObjectType) -> Done is confidential {
        def signature = olist[aMixPartWithName(name') parameters(olist[])]
        oType.methods.push(aMethodType.signature(signature) returnType(rType))
    }

    method addTo(oType : ObjectType) name(name' : String)
            params(ptypes : List⟦ObjectType⟧) returns(rType : ObjectType)
            -> Done is confidential {
        def parameters = olist[]
        for(ptypes) do { ptype ->
            parameters.push(aParam.ofType(ptype))
        }

        def signature = olist[aMixPartWithName(name') parameters(parameters)]

        oType.methods.push(aMethodType.signature(signature) returnType(rType))
    }
    
    method addTo(oType : ObjectType) name(name' : String)
            param(ptype : ObjectType) returns(rType : ObjectType)
            -> Done is confidential {
        def parameters = olist[aParam.ofType(ptype)]

        def signature = olist[aMixPartWithName(name') parameters(parameters)]

        oType.methods.push(aMethodType.signature(signature) returnType(rType))
    }

    
    method addTo(oType: ObjectType) names (name: List⟦String⟧)
         parts(p: List⟦List⟦ObjectType⟧ ⟧) returns (rType: ObjectType) -> Done 
                                    is confidential{
         def parts = olist[]
         for (p) do { part ->
             def parameters = olist[]
             for (part) do {ptype ->
                 parameters.push(aParam.ofType(ptype))
             }
             parts.push(parameters)
         }
         def signature = olist[]
         for (1 .. name.size) do {i ->
             signature.push(aMixPartWithName (name.at(i)) parameters (parts.at(i)))
         }
         oType.methods.push (aMethodType.signature (signature) returnType (rType))
    }


    method extend(this : ObjectType) with(that : ObjectType)
            -> Done is confidential {
        for(that.methods) do { mType ->
            this.methods.push(mType)
        }
    }

    var base : ObjectType is readable := dynamic
    def doneType : ObjectType is public = fromMethods(olist[]) withName("Done")
    base := fromMethods(olist[]) withName("Object")

    def pattern : ObjectType is public = fromMethods(olist[]) withName("Pattern")
    def iterator : ObjectType is public = fromMethods(olist[]) withName("Iterator")
    def boolean : ObjectType is public = fromMethods(olist[]) withName("Boolean")
    def number : ObjectType is public = fromMethods(olist[]) withName("Number")
    def string : ObjectType is public = fromMethods(olist[]) withName("String")
    def listTp : ObjectType is public = fromMethods(olist[]) withName("List")
    def set : ObjectType is public = fromMethods(olist[]) withName("Set")
    def sequence : ObjectType is public = fromMethods(olist[]) withName("Sequence")
    def dictionary : ObjectType is public = fromMethods(olist[]) withName("Dictionary")
    def point : ObjectType is public = fromMethods(olist[]) withName("Point")
    def binding : ObjectType is public = fromMethods(olist[]) withName("Binding")
    def collection : ObjectType is public = fromMethods(olist[]) withName("Collection")
    def enumerable : ObjectType is public = fromMethods(olist[]) withName("Enumerable")
    def rangeTp : ObjectType is public = fromMethods(olist[]) withName("Range")

    addTo(base) name("==") param(base) returns(boolean)
    addTo(base) name("!=") param(base) returns(boolean)
    addTo(base) name("/=") param(base) returns(boolean)
    addTo(base) name("≠") param(base) returns(boolean)
    addTo(base) name("hash") returns(number)
    addTo(base) name("match") returns(dynamic)
    addTo(base) name("asString") returns(string)
    addTo(base) name("basicAsString") returns(string)
    addTo(base) name("asDebugString") returns(string)
    addTo(base) name("debugValue") returns(string)
    addTo(base) name("debugIterator") returns(iterator)
    addTo(base) name("::") returns(binding)
    addTo(base) name("list") param(collection) returns(listTp)

    extend(pattern) with(base)
    addTo(pattern) name("match") param(base) returns(dynamic)
    addTo(pattern) name("|") param(pattern) returns(pattern)
    addTo(pattern) name("&") param(pattern) returns(pattern)

    extend(iterator) with(base)
    addTo(iterator) name("hasNext") returns(boolean)
    addTo(iterator) name("next") returns(dynamic)

    def shortCircuit = blockTaking(olist[aParam.ofType(blockReturning(dynamic))])
        returning(base)
    extend(boolean) with(base)
    addTo(boolean) name("&&") param(boolean) returns(boolean)
    addTo(boolean) name("||") param(boolean) returns(boolean)
    addTo(boolean) name("prefix!") returns(boolean)
    addTo(boolean) name("not") returns(boolean)
    addTo(boolean) name("andAlso") param(shortCircuit) returns(dynamic)
    addTo(boolean) name("orElse") param(shortCircuit) returns(dynamic)

    extend(number) with(base)
    addTo(number) name("+") param(number) returns(number)
    addTo(number) name("*") param(number) returns(number)
    addTo(number) name("-") param(number) returns(number)
    addTo(number) name("/") param(number) returns(number)
    addTo(number) name("^") param(number) returns(number)
    addTo(number) name("%") param(number) returns(number)
    addTo(number) name("@") param(number) returns(point)
    addTo(number) name("hashcode") returns(string)
//    addTo(number) name("hash") returns(string)
    addTo(number) name("++") param(base) returns(string)
    addTo(number) name("<") param(number) returns(boolean)
    addTo(number) name(">") param(number) returns(boolean)
    addTo(number) name("<=") param(number) returns(boolean)
    addTo(number) name("≤") param(number) returns(boolean)
    addTo(number) name(">=") param(number) returns(boolean)
    addTo(number) name("≥") param(number) returns(boolean)
    addTo(number) name("..") param(number) returns(listTp)
    addTo(number) name("asInteger32") returns(number)
    addTo(number) name("prefix-") returns(number)
    addTo(number) name("inBase") param(number) returns(number)
    addTo(number) name("truncated") returns(number)
    addTo(number) name("rounded") returns(number)
    addTo(number) name("prefix<") returns(pattern)
    addTo(number) name("prefix>") returns(pattern)
    addTo(number) name("abs") returns(number)

    def ifAbsentBlock = blockTaking(olist[])returning(dynamic)
    def stringDoBlock = blockTaking(olist[aParam.ofType(string)])returning(doneType)
    def stringKeysValuesDoBlock = blockTaking(olist[aParam.ofType(number), aParam.ofType(string)])returning(doneType)
    extend(string) with(base)
    addTo(string) name("*") param(number) returns(string)
    addTo(string) name("&") param(pattern) returns(pattern)
    addTo(string) name("++") param(base) returns(string)
    addTo(string) name(">") param(string) returns(boolean)
    addTo(string) name(">=") param(string) returns(boolean)
    addTo(string) name("<") param(string) returns(boolean)
    addTo(string) name("<=") param(string) returns(boolean)
    addTo(string) name("≤") param(string) returns(boolean)
    addTo(string) name("≥") param(string) returns(boolean)
    addTo(string) name("at") param(number) returns(string)
//    addTo(string) name("[]") param(number) returns(string)
    addTo(string) name("asLower") returns(string)
    addTo(string) name("asNumber") returns(number)
    addTo(string) name("asUpper") returns(string)
    addTo(string) name("capitalized") returns(string)
    addTo(string) name("compare") param(string) returns(boolean)
    addTo(string) name("contains") param(string) returns(boolean)
    addTo(string) name("encode") returns(string)
    addTo(string) name("endsWith") param(string) returns(boolean)
    addTo(string) name("indexOf") param(string) returns(number)
//    addTo(string) names(["indexOf","startingAt","ifAbsent"]) 
//           parts([ [string], [number],[ifAbsentBlock] ]) returns(number | dynamic)
//    addTo(string) names(["lastIndexOf","ifAbsent"]) parts([ [string], [ifAbsentBlock] ]) returns(number | dynamic)
//    addTo(string) names(["lastIndexOf","startingAt","ifAbsent"]) parts([ [string], [number],[ifAbsentBlock] ]) returns(number | dynamic)
    addTo(string) name("indices") returns(listTp)
    addTo(string) name("isEmpty") returns(boolean)
    addTo(string) name("iterator") returns(base)
    addTo(string) name("lastIndexOf") param(string) returns(number)
//    addTo(string) name("lastIndexOf()ifAbsent") params(string, ifAbsentBlock) returns(number | dynamic)
//    addTo(string) name("lastIndexOf()startingAt()ifAbsent") params(string, ifAbsentBlock) returns(number | dynamic)
    addTo(string) name("ord") returns(number)
    addTo(string) names(olist["replace","with"]) parts(olist[ olist[string], olist[string] ]) returns(string)
    addTo(string) name("size") returns(number)
    addTo(string) name("startsWith") param(string) returns(boolean)
    addTo(string) name("startsWithDigit") returns(boolean)
    addTo(string) name("startsWithLetter") returns(boolean)
    addTo(string) name("startsWithPeriod") returns(boolean)
    addTo(string) name("startsWithSpace") returns(boolean)
    addTo(string) names(olist["substringFrom","size"]) 
        parts(olist[ olist[number], olist[number] ]) returns(string)
    addTo(string) names(olist["substringFrom","to"]) 
        parts(olist[ olist[number], olist[number] ]) returns(string)
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
    
    def fold = blockTaking(olist[aParam.ofType(dynamic), aParam.ofType(dynamic)])
        returning(dynamic)
    extend(listTp) with(base)
    addTo((listTp)) name("at") param(number) returns(dynamic)
//    addTo(list) name("[]") param(number) returns(dynamic)
    addTo((listTp)) names(olist["at","put"]) parts(olist[ olist[number], olist[dynamic] ]) returns(doneType)
//    addTo(list) name("[]:=") param([number, dynamic]) returns(doneType)
    addTo((listTp)) name("push") param(dynamic) returns(doneType)
    addTo((listTp)) name("add") param(dynamic) returns(listTp)
    addTo((listTp)) name("addFirst") param(dynamic) returns(listTp)   // need to add varparams
    addTo((listTp)) name("addLast") param(dynamic) returns(listTp)
    addTo((listTp)) name("addAll") param(listTp) returns(listTp)
    addTo((listTp)) name("pop") returns(dynamic)
//    addTo((listTp)) name("length") returns(number)
    addTo((listTp)) name("size") returns(number)
    addTo((listTp)) name("iter") returns(iterator)
    addTo((listTp)) name("iterator") returns(iterator)
    addTo((listTp)) name("contains") param(dynamic) returns(boolean)
    addTo((listTp)) name("indexOf") param(dynamic) returns(number)
    addTo((listTp)) name("indices") returns(listTp)
    addTo((listTp)) name("first") returns(dynamic)
    addTo((listTp)) name("last") returns(dynamic)
    addTo((listTp)) name("prepended") param(dynamic) returns(listTp)
    addTo((listTp)) name("++") param(listTp) returns (listTp)
    addTo((listTp)) name("reduce") params(olist[dynamic, fold]) returns (dynamic)
    addTo((listTp)) name("reversed") returns(dynamic)
    addTo((listTp)) name("removeFirst") returns(dynamic)
    addTo((listTp)) name("removeLast") returns(dynamic)
    addTo((listTp)) name("removeAt") param(number) returns(dynamic)
    addTo((listTp)) name("remove") param(dynamic) returns(listTp)
    addTo((listTp)) name("removeAll") param(listTp) returns(listTp)
    addTo((listTp)) name("copy") returns(listTp)
    addTo((listTp)) name("sort") returns(listTp)
    addTo((listTp)) name("reverse") returns(listTp)

    
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
// the declaration
method check(req : Request)
        against(meth : MethodType) -> ObjectType is confidential {
    def name: String = meth.name   // CHANGE TO NAMESTRING

    for(meth.signature) and(req.parts) do { sigPart: MixPart, reqPart ->
        def params: List⟦Param⟧ = sigPart.parameters
        def args   = reqPart.args

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

        for (params) and (args) do { param, arg ->
            def pType = param.typeAnnotation
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

method check(node) matches(eType : ObjectType)
        inMethod(name : String) -> Done is confidential {
    def aType = typeOf(node)
    if(aType.isConsistentSubtypeOf(eType).not) then {
        MethodError.raise("the method '{name}' declares a result of " ++
            "type '{eType}', but returns an expression of type " ++
            "'{aType}'") with (node)
    }
}

method split(input : String, separator : String) -> List⟦String⟧ {
    var start := 1
    var end := 1
    var output := olist[]
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


def astVisitor = object {
    inherit ast.baseVisitor
    
    method checkMatch(node) → Boolean {
        io.error.write "1436: checkMatch in astVisitor"
        true
    }
    
//    method runRules(node) → Boolean {
//        io.error.write "1349: runRules"
//        true
//    }

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
        cache.at (ifnode) put (ifType)
        false
    }

    // params are identifier nodes.
    method visitBlock (block) -> Boolean {
        io.error.write "1478: visiting block {block}"
        for (block.params) do {p->
            if ((p.kind == "identifier") && {p.wildcard.not} && {p.decType.value=="Unknown"}) then {
                CheckerFailure.raise("no type given to declaration"
                    ++ " of parameter '{p.value}'") with (p)
            }
        }

        def body = olist(block.body)

        scope.enter {
            for(block.params) do { param ->
                match (param)
                    case { _ : StringLiteral ->
                        scope.variables.at(param.value)
                            put(anObjectType.fromDType(param))
                    } case { _ : NumberLiteral ->
                        scope.variables.at(param.value)
                            put(anObjectType.fromDType(param))
                    } case { _ ->
                        scope.variables.at(param.value)
                            put(anObjectType.fromDType(param.dtype))
                    }
            }
    
    
            collectTypes(body)
    
            for(body) do { stmt ->
                checkTypes(stmt)
            }
        }
    
        // why is this code repeated???
        def parameters = olist[]
        for(block.params) do { param ->
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
            returning(anObjectType.fromBlockBody(body))
            
        io.error.write "\n1529: blockType is {blockType}\n"

        cache.at (block) put (blockType)

        true
    }

    // not implemented yet
    method visitMatchCase (node) -> Boolean {
        io.error.write "\n1538: MatchCase visit not implemented yet\n"
        checkMatch (node)
    }

    // not implemented yet
    method visitTryCatch (node) -> Boolean {
        io.error.write "\n1544: TryCatch visit not implemented yet\n"
        checkMatch (node)
    }

    method visitMethodType (node) -> Boolean {
        io.error.write "\n1549: visiting method type {node} not implemented\n"

//        runRules (node)
//
//        node.parametersDo { param ->
//            runRules (parameterFromNode(param))
//        }
//
        return false
    }

    method visitType (node) -> Boolean {
        io.error.write "\n1561: visiting type {node} (not implemented)\n"
        checkMatch (node)
//        io.error.write "432: done visiting type {node}"
    }

    method visitMethod (meth) -> Boolean {
        io.error.write "\n1567: Visiting method {meth}\n"
        for (meth.signature) do {s->
            for (s.params) do {p->
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
    
        def name = meth.value.value
        def mType = aMethodType.fromNode(meth)
        def returnType = mType.returnType
        
        io.error.write "\n1585: Entering scope for {meth}\n"
        scope.enter {
            for(meth.signature) do { part ->
                for(part.params) do { param ->
                    scope.variables.at(param.value)
                        put(anObjectType.fromDType(param.dtype))
                }
            }
            
            collectTypes(olist(meth.body))
            io.error.write "\n1595: collected types for {olist(meth.body)}\n"
    
            for(meth.body) do { stmt ->
                checkTypes(stmt)
                io.error.write "1599: ready to accept {stmt}"
                stmt.accept(object {
                    inherit ast.baseVisitor
    
                    method visitReturn(ret) is override {
                        io.error.write "\n1604: checking return {ret.value}"
                        check (ret.value) matches (returnType) inMethod (name)
                        cache.at(ret) put (returnType)
                        return false
                    }
    
                    method visitMethod(node) is override {
                        false
                    }
                })
//                io.error.write "1594: cache.atKey (node) do { value -> return value }
            }
    
            if(meth.body.size == 0) then {
                if(anObjectType.doneType.isConsistentSubtypeOf(returnType).not) then {
                    MethodError.raise("the method '{name}' declares a " ++
                        "result of type '{returnType}', but has no body") with (meth)
                }
            } else {
                def lastNode = meth.body.last
                if(Return.match(lastNode).not) then {
                    def lastType = typeOf(lastNode)
                    if(lastType.isConsistentSubtypeOf(returnType).not) then {
                        MethodError.raise("the method '{name}' declares a " ++
                            "result of type '{returnType}', but returns an " ++
                            "expression of type '{lastType}'") with (lastNode)
                    }
                }
            }
        }
    
        if(isMember(mType)) then {
            scope.variables.at(name) put(returnType)
        }
    
        scope.methods.at(name) put(mType)
        
        cache.at(meth) put (anObjectType.doneType)
        false

    }

    method visitCall (req) -> Boolean {
        io.error.write "\n1647: visiting call {req}"
        def rec: AstNode = req.receiver
            
        def rType: ObjectType = if(rec.isIdentifier && {rec.nameString == "self"}) then {
            io.error.write "\n1651: Looking up $elf"
            scope.types.find("$elf") butIfMissing {
                prelude.Exception.raise "type of self missing" with(rec)
            }
        } else {
            io.error.write "\n1656: non-self case"
            typeOf(rec)
        }
        
        io.error.write "\n1660: type of receiver is {rType}"
        def callType: ObjectType = if (rType.isDynamic) then {
            anObjectType.dynamic
        } else { 
        
            def name: String = req.nameString
            // io.error.write "request on {name}"
        
            match(rType.getMethod(name)) 
              case { (noSuchMethod) ->
                outer.RequestError.raise("no such method '{name}' in " ++
                    "`{stripNewLines(rec.toGrace(0))}` of type\n" ++
                    "    '{rType}' \nin type \n  '{rType.methods}'") 
                        with(req)
            } case { meth : MethodType ->
                // io.error.write "checking against {meth.nameString}"
                check(req) against(meth)
            }
        
        }
        cache.at(req) put (callType)
        true
        
    }

    // returns false so don't recurse into object
    method visitObject (obj) -> Boolean {
        io.error.write "\n1687: visiting object {obj}\n"
        def objType: ObjectType = scope.enter { 
            processBody (olist (obj.value), obj.superclass) 
        }
        io.error.write "\n1691: type of {obj} is {objType}\n"
        cache.at(obj) put (objType)
        false
    }
    
    // skip for now
    method visitModule (node) → Boolean {  // added kim
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
    method visitMember (node) -> Boolean {
        visitCall (node)
    }

    method visitGeneric (node) -> Boolean {
        io.error.write "\n1715: visiting generic {node} (not implemented)"
        checkMatch (node)
    }

    // look up identifier type in scope
    method visitIdentifier (ident) -> Boolean {
        def idType = match(ident.value) 
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
    method visitOctets (node) -> Boolean {
        io.error.write "\n1736: visiting Octets {node} (not implemented)"
        false
    }

    // type of string is String
    method visitString (node) -> Boolean {
        cache.at (node) put (anObjectType.string)
        true
    }

    // type of number is Number
    method visitNum (node) -> Boolean {
        cache.at (node) put (anObjectType.number)
        true
    }

    // ops handled same as calls
    method visitOp (node) -> Boolean {
        visitCall (node)
    }

    method visitBind (bind) -> Boolean {
        io.error.write "\n 1758: Visit Bind"
        def dest = bind.dest
    
        match (dest) case { _ : Member ->
            var nm := dest.nameString
            if (! nm.endsWith ":=(1)") then {
                nm := nm ++ ":=(1)"
            }
            // rec.memb
            def rec = dest.in
    
            // Type of receiver
            def rType = if(Identifier.match(rec) && {rec.value == "self"}) then {
                scope.types.find("$elf") butIfMissing {
                    prelude.Exception.raise "type of self missing" with(rec)
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
                        olist [ast.callWithPart.new(dest.value, olist [bind.value])])
                    check(req) against(meth)
                }
            }
    
        } case { _ ->
            def dType = typeOf(dest)
    
            def value = bind.value
            def vType = typeOf(value)
    
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
    method visitDefDec (defd) -> Boolean {
        if (defd.decType.value=="Unknown") then {
            var typ := "def"
            if (Var.match(defd)) then { typ := "var" } 
            CheckerFailure.raise("no type given to declaration"
                ++ " of {typ} '{defd.name.value}'") with (defd.name)
        }
        io.error.write "\n1818: type is {defd.dtype}"
        var defType := anObjectType.fromDType(defd.dtype)
        io.error.write "\n1820: defType is {defType}"
        def value = defd.value
    
        if(value != false) then {
            def vType = typeOf(value)
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

        def name = defd.nameString
        // io.error.write "name is {name}"
        scope.variables.at(name) put(defType)
        // io.error.write "1502: added scope"
        if (defd.isReadable) then { 
            scope.methods.at(name) put(aMethodType.member(name) ofType(defType))
        }
        if (defd.isWritable) then {
            def name' = name ++ ":=(1)"
            def param = aParam.withName(name) ofType(defType)
            def sig = olist[aMixPartWithName(name') parameters(olist[param])]
            scope.methods.at(name')
                put(aMethodType.signature(sig) returnType(anObjectType.doneType))
        }
        // io.error.write "1515: returning from Def | Var case"
        cache.at (defd) put (anObjectType.doneType)
        false
    } 

    method visitVarDec (node) -> Boolean {
        io.error.write "\n1856: visiting var dec {node}"
        visitDefDec (node)
    }

    method visitImport (imp) -> Boolean {
        io.error.write "\n1861: visiting import {imp}"
        def gct = xmodule.parseGCT(imp.path)
        def placeholders = olist[]
        def typeNames = olist[]
        io.error.write("\n1954 keys are {gct.keys}\n")
        
        if (gct.containsKey("types")) then {
            for(gct.at("types")) do { typ ->
                def placeholder = anObjectType.dynamic
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
                  var parseMethodTypes := split(key, ":")
                  var typeOfMethods := parseMethodTypes.at(2)
                  io.error.write "\n1881: typeOfMethods is {typeOfMethods}"
                  def typeliterals = outer.dictionary.empty
                  var unionTypes := olist[]
                  var variantTypes := olist[]
                  for (gct.at(key)) do { methodSignature ->
                      if (typeOfMethods == "&") then {
                          unionTypes.push(methodSignature.substringFrom(3)to(methodSignature.size))
                      } elseif {typeOfMethods == "|"} then {
                          variantTypes.push(methodSignature.substringFrom(3)to(methodSignature.size))
                      } else {
                          if (!typeliterals.containsKey(typeOfMethods)) then {
                              typeliterals.at(typeOfMethods)put(olist[])
                          }
                          typeliterals.at(typeOfMethods).push(aMethodType.fromGctLine(methodSignature))
                      }
                  }
                  
                  scope.types.at("{imp.nameString}.{typeOfMethods}")put(anObjectType.fromMethods(typeliterals.at(typeOfMethods)))
              }
            }
        }
        cache.at(imp) put (anObjectType.doneType)
        
        def importedMethodTypes = gct.at("publicMethodTypes") ifAbsent {
            io.error.write "nothing imported from {imp.nameString}"
            olist[]
        }
        
        def methodTypes = olist[]
        
        for (importedMethodTypes) do {methodSignature → 
            io.error.write "\n1998: methodSignature is {methodSignature}"
            methodTypes.push(aMethodType.fromGctLine(methodSignature))
        }
        
        def importType = anObjectType.fromMethods(methodTypes)

        scope.variables.at(imp.nameString) put(importType)
        false
    }

    method visitReturn (node) -> Boolean {
        io.error.write "\n1907: visiting return {node}"
        cache.at(node) put (typeOf(node.value))
        false
    }

    method visitInherits (node) -> Boolean {
        io.error.write "\n1913: visiting inherits {node}"
        cache.at(node) put (typeOf(node.value))
        false
    }

    method visitDialect (node) -> Boolean {
        io.error.write "\n1919: visiting dialect {node}"
        checkMatch (node)
    }

}



method outerAt(i : Number) -> ObjectType is confidential {
    // Required to cope with not knowing the prelude.
    if(i <= 1) then {
        return anObjectType.dynamic
    }

    def vStack = scope.variables.stack
    def curr = vStack.at(i)

    return curr.atKey("outer") do { t -> t } else {
        def prev = outerAt(i - 1)

        def mStack = scope.methods.stack

        def vars = vStack.at(i - 1)
        def meths = mStack.at(i - 1).values

        def oType = anObjectType.fromMethods(meths)
        def mType = aMethodType.member("outer") ofType(oType)

        curr.at("outer") put(oType)
        mStack.at(i).at("outer") put(mType)

        oType
    }
}


// Typing methods.

method processBody(body : List, superclass: AstNode | false) -> ObjectType is confidential {
    io.error.write "\n1958: superclass: {superclass}\n"
    // Collect the declarative types directly in the object body.
    collectTypes(body)
    // io.error.write "1732: collected types"
    // Inheritance typing.
    var inheritedMethods := olist[]
    def hasInherits = false ≠ superclass
    io.error.write "\n1965: hasInherits is {hasInherits}\n"
    def superType = if(hasInherits) then {
        def inheriting = superclass
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
        def inheritedType = typeOf(inheriting)
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
    def publicType = if(superType.isDynamic) then {
        scope.types.at("$elf") put(superType)
        superType
    } else {
        // Collect the method types to add the two self types.
        def isParam = aParam.withName("other") ofType (anObjectType.base)
        def part = aMixPartWithName("isMe")parameters(olist[isParam])

        def isMeMeth = aMethodType.signature(olist[part]) returnType(anObjectType.boolean)
        
        def publicMethods = olist[]
        def allMethods = olist[isMeMeth]

        for(body) do { stmt ->
            io.error.write "\n2009: processing {stmt}"
            match(stmt) case { meth : Method ->
                def mType = aMethodType.fromNode(meth)
                allMethods.push(mType)
                if(isPublic(meth)) then {
                    publicMethods.push(mType)
                }

                scope.methods.at(mType.name) put(mType)
                if(isMember(mType)) then {
                    scope.variables.at(mType.name) put(mType.returnType)
                }
            } case { defd : Def | Var ->
                io.error.write "\n2022: in def or var case"
                def mType = aMethodType.fromNode(defd)
                allMethods.push(mType)
                io.error.write "\n2024: add {mType} to allMethods"
                if(defd.isReadable) then {
                    publicMethods.push(mType)
                }
                if(defd.isWritable) then {
                    def name' = defd.nameString ++ ":=" //(1)"
                    def dType = anObjectType.fromDType(defd.dtype)
                    def param = aParam.withName(defd.nameString) ofType(dType)
                    def sig = olist[aMixPartWithName(name') parameters(olist[param])]
 
                    def aType = aMethodType.signature(sig) returnType(anObjectType.doneType)
                    scope.methods.at(name')
                        put(aType)
                    allMethods.push(aType)
                    publicMethods.push(aType)
                }
                // io.error.write "1806: done with defd case"
            } case { _ -> 
            }
        }
        def internalType = anObjectType.fromMethods(allMethods)
        io.error.write "\n2045: internalType is {internalType}\n"
        scope.types.at("$elf") put (internalType)
        // io.error.write "added $elf to scope"
        if (hasInherits) then {
            def allMethodsWithInheritedMethods = allMethods++inheritedMethods
            anObjectType.fromMethods(allMethodsWithInheritedMethods)
        } else {
            anObjectType.fromMethods(publicMethods)
        }
    }
    // io.error.write "1820:done calculating publicType"

    scope.variables.at("self") put(publicType)
    io.error.write "\n2058: publicType is {publicType}\n"

    // Type-check the object body.
    def indices = if(hasInherits) then {
        2..body.size
    } else {
        body.indices
    }
    
    io.error.write "\n2067: indices = {indices}"

    for(indices) do { i ->
        io.error.write "\n2070: checking index {i} at line {body.at(i).line}" 
        checkTypes(body.at(i))
        io.error.write "\n2072: finished index {i}" 
    }
    io.error.write "\n2074: exiting processBody {body}"
    publicType
}


def TypeDeclarationError = TypeError.refine "TypeDeclarationError"

// The first pass over a body, collecting all type declarations so that they can
// reference one another declaratively.
method collectTypes(nodes : List) -> Done is confidential {
    def names = olist[]
    def types = olist[]
    def placeholders = olist[]

    for(nodes) do { node ->
        match(node) case { td : TypeDeclaration ->
            if(names.contains(td.nameString)) then {
                TypeDeclarationError.raise("the type {td.nameString} uses " ++
                    "the same name as another type in the same scope") with(td)
            }

            names.push(td.nameString)

            // In order to allow the types to be declarative, the scope needs
            // to be populated by placeholder types first.
            def placeholder = anObjectType.dynamic
            types.push(td)
            placeholders.push(placeholder)
            scope.types.at(td.nameString) put(placeholder)
        } case { _ ->
        }
    }

    for(types) and(placeholders) do { td, ph ->
        def oType = anObjectType.fromDType(td)
        prelude.become(ph, oType)
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

// Loop over the elements of two collections at once.
method for(a) and(b) do(bl) -> Done {
    if (a.size != b.size) then {
       ProgrammingError.raise("a and b have different sizes in parallel for loop")
    }
    for(a.indices) do { i ->
        bl.apply(a.at(i), b.at(i))
    }
}

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


