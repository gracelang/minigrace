#pragma noTypeChecks
#pragma ExtendedLineups
dialect "dialect"

import "ast" as ast
import "util" as util
import "standardGraceClass" as sgc

inherit sgc.standardGrace

type List⟦T⟧ = prelude.List⟦T⟧

// def ProgrammingError = outer.ProgrammingError  // won't work with C-backend
def ProgrammingError = _prelude.ProgrammingError
def TypeError is public = CheckerFailure.refine "TypeError"

type MethodType = {
    // Method signature information consisting of the name, list of MixParts,
    // return type and info on what types it specializes.
    name -> String
    signature -> List⟦MixPart⟧
    returnType -> ObjectType
    isSpecialisationOf (other: MethodType) -> Boolean
}

type Param = {
    name -> String
    typeAnnotation -> ObjectType
}

// factory method to create parameters with given name and type
def aParam = object {
    // create parameter with name': type'
    class withName (name': String) ofType (type': ObjectType) -> Param {
        def name: String is public = name'
        def typeAnnotation: ObjectType is public = type'
        method asString is override { "{name}:{typeAnnotation}" }
    }

    // create parameter with type', but use wildcard as name
    method ofType (type': Object) -> Param {
        withName "_" ofType (type')
    }
}

type MixPart = {
    name -> String
    parameters -> List⟦Param⟧
}

// create a mixPart from name and list of parameters 
class mixPartNamed (name': String)
        parameters (parameters': List⟦Param⟧) -> MixPart {
    def name: String is public = name'
    def parameters: List⟦Param⟧ is public = parameters'
}

// A factory object to create method types
def aMethodType = object {
    // create method type from signature and return type
    // The name is constructed by gluing together part names
    class signature (signature': List⟦MixPart⟧)
          returnType (rType: ObjectType)-> MethodType {
        def signature: List⟦MixPart⟧ is public = signature'
        def returnType: ObjectType is public = rType

        var name: String is readable:= ""
        var show: String:= ""

        def fst = signature.at 1

        if (fst.parameters.size == 0) then {
            name := fst.name
            show := name
        } else {
            signature.do { part ->
                name:= "{name}{part.name}("
                show:= "{show}{part.name}("
                var once:= false
                part.parameters.do { param ->
                    if (once) then {
                        show := show ++ ", "
                        name := name ++ ","
                    }
                    show := show ++ param
                    name := name ++ "_"
                    once:= true
                }
                show := show ++ ")"
                name := name ++ ")"
            }
        }

        show := "{show} -> {returnType}"

        // Determines if this method is a specialisation of the given one.
        method isSpecialisationOf (other: MethodType) -> Boolean {
            if (self.isMe(other)) then {
                return true
            }

            if (name != other.name) then {
                return false
            }

            if (other.signature.size != signature.size) then {
                return false
            }

            prelude.for (signature) and (other.signature) do { part, part' ->
                if (part.name != part'.name) then {
                    return false
                }

                prelude.for (part.parameters) and (part'.parameters) do { p, p' ->
                    def pt = p.typeAnnotation
                    def pt' = p'.typeAnnotation

                    // Contravariant in parameter types.
                    if (pt'.isSubtypeOf (pt).not) then {
                        return false
                    }
                }
            }

            return returnType.isSubtypeOf (other.returnType)
        }

        def asString: String is public, override = show
    }

    // create method type for methods without parameters
    method member (name: String) ofType (rType: ObjectType) -> MethodType {
        signature ([mixPartNamed (name) parameters [ ] ]) returnType (rType)
    }

    // create method type from a node
    // Do obvious thing if method, class, or method signature
    // If it is a def or var, create method to return value
    method fromNode (node) -> MethodType {
        match (node) case { meth: Method | Class | MethodSignature ->
            def signature = []

            meth.signature.do { part ->
                def params = []

                part.params.do { param ->
                    params.push (aParam.withName (param.value)
                        ofType (objectType.fromDType (param.dtype)))
                }

                signature.push (mixPartNamed (part.name) parameters (params))
            }

            def rType = match (meth) case { m: Method | Class ->
                            m.dtype
                        } case { m: MethodSignature ->
                            meth.rtype
                        } case { _ -> }

            return signature (signature)
                returnType (objectType.fromDType (rType))
        } case { defd: Def | Var ->
            def signature = [mixPartNamed (defd.name.value) parameters [ ] ]
            def dtype = objectType.fromDType (defd.dtype)
            return signature (signature) returnType (dtype)
        } case { _ ->
            prelude.Exception.raise "unrecognised method node" with (node)
        }
    }

}


// Object type information.

def noSuchMethod = prelude.Singleton.named "noSuchMethod"

type ObjectType = {
    // return list of methods
    methods -> List⟦MethodType⟧
    // return method type matching name, if it exists
    getMethod (name: String) -> MethodType | noSuchMethod
    // return whether type is unknown
    isUnknown -> Boolean
    // return if type is subytpe of other
    isSubtypeOf (other: ObjectType) -> Boolean
    // create new types using |, &
    |(other: ObjectType) -> ObjectType
    &(other: ObjectType) -> ObjectType
}

// Factory for creating object types
def objectType = object {

    // return object type built from methods'
    class fromMethods (methods': List⟦MethodType⟧) -> ObjectType {
        def methods: List⟦MethodType⟧ is public = if (base == unknown)
            then { [] } else { base.methods } ++ methods'

        method getMethod (name: String) -> MethodType | noSuchMethod {
            methods.do { meth ->
                if (meth.name == name) then {
                    return meth
                }
            }

            return noSuchMethod
        }

        def isUnknown: Boolean is public = false

        // Necessary to prevent infinite loops of subtype testing.
        def currentlyTesting = []

        method isSubtypeOf (other: ObjectType) -> Boolean {
            if (self.isMe(other)) then {
                return true
            }

            if (other.isUnknown) then {
                return true
            }

            // If this test is already being performed, assume it succeeds.
            if (currentlyTesting.contains (other)) then {
                return true
            }

            currentlyTesting.push (other)

            for (other.methods) doWithContinue { a, continue ->
                methods.do { b ->
                    if (b.isSpecialisationOf (a)) then {
                        continue.apply
                    }
                }

                currentlyTesting.pop
                return false
            }

            currentlyTesting.pop
            return true
        }

        method |(other: ObjectType) -> ObjectType {
            if (self.isMe(other)) then { return self }
            if (other.isUnknown) then { return unknown }

            def combine = []

            for (methods) doWithContinue { meth, continue ->
                other.methods.do { meth'->
                    if (meth.name == meth'.name) then {
                        if (meth.isSpecialisationOf (meth')) then {
                            combine.push (meth)
                        } elseif { meth'.isSpecialisationOf (meth) } then {
                            combine.push (meth')
                        } else {
                            TypeError.raise ("cannot produce intersection of " ++
                                "incompatible types '{self}' and '{other}'")
                        }

                        continue.apply
                    }
                }
            }

            def hack = objectType
            return object {
                inherit hack.fromMethods (combine)

                method asString -> String is override {
                    "{outer} | {other}"
                }
            }
        }

        method &(other: ObjectType) -> ObjectType {
            if (self.isMe(other)) then { return self }
            if (other.isUnknown) then { return unknown }

            def combine = []
            def twice = []

            for (methods) doWithContinue { meth, continue ->
                other.methods.do { meth' ->
                    if (meth.name == meth'.name) then {
                        if (meth.isSpecialisationOf (meth')) then {
                            combine.push (meth)
                        } elseif { meth'.isSpecialisationOf (meth) } then {
                            combine.push (meth')
                        } else {
                            TypeError.raise ("cannot produce union of " ++
                                "incompatible types '{self}' and '{other}'")
                        }

                        twice.push (meth.name)

                        continue.apply
                    }
                }

                combine.push (meth)
            }

            other.methods.do { meth ->
                if (twice.contains (meth.name).not) then {
                    combine.push (meth)
                }
            }

            def hack = objectType
            object {
                inherit hack.fromMethods (combine)

                method asString -> String is override {
                    "{outer} & {other}"
                }
            }
        }

        method asString -> String is override {
            if (methods.size == 3) then {
                return "Object"
            }

            var out:= "\{ "

            methods.do { mtype ->
                if (["!=", "≠", "asString", "asDebugString", "::"].contains (mtype.name).not) then {
                    out:= "{out}{mtype}; "
                }
            }

            return "{out}\}"
        }
    }

    class fromMethods (methods': List⟦MethodType⟧)
            withName (name: String) -> ObjectType {
        inherit fromMethods (methods')

        method asString is override { name }
        method ==(other) { self.isMe(other) }
    }

    method fromDType (dtype) -> ObjectType {
        match (dtype) case { (false) ->
            unknown
        } case { lit: TypeDeclaration ->
//        TODO: re-write this code to understand the syntax of type expressions
//          and type declarations, which are not the same!
            return unknown
            def intersection = lit.intersectionTypes
            if (intersection.size > 1) then {
                var oType:= fromDType (intersection.first)

                for (2..(intersection.size - 1)) do { i ->
                    oType:= oType & fromDType (intersection.at (i))
                }

                return if (false ≠ lit.value) then {
                    object {
//                        inherit oType & fromDType (intersection.last)
                        inherit prelude.TypeIntersection.new (oType, fromDType (intersection.last))

                        method asString is override { lit.value }
                    }
                } else {
                    oType & fromDType (intersection.last)
                }
            }

            def union = lit.unionTypes
            if (union.size > 1) then {
                var oType:= fromDType (union.first)

                for (2..(union.size - 1)) do { i ->
                    oType:= oType | fromDType (union.at (i))
                }

                return if (false ≠ lit.value) then {
                    object {
//                        inherit oType | fromDType (union.last)
                        inherit prelude.TypeUnion.new (oType, fromDType (union.last))
                        def asString: String is public, override = lit.value
                    }
                } else {
                    oType | fromDType (union.last)
                }
            }

            def meths = []

            lit.methods.do { mType ->
                meths.push (aMethodType.fromNode (mType))
            }

            if ((lit.value != false) && { lit.value.at (1) != "<" }) then {
                objectType.fromMethods (meths) withName (lit.value)
            } else {
                objectType.fromMethods (meths)
            }
        } case { ident: Identifier ->
            objectType.fromIdentifier (ident)
        } case { generic: Generic ->
//            TODO: figure out what to do here!
            objectType.fromIdentifier (generic.value)
        } case { _ ->
            ProgrammingError.raise "No case for node of kind {dtype.kind}" with (dtype)
        }
    }

    method fromIdentifier (ident: Identifier) -> ObjectType {
        scope.types.find (ident.value) butIfMissing { unknown }
    }

    method fromBlock (block) -> ObjectType {
        def bType = typeOf (block)

        if (bType.isUnknown) then { return unknown }

        def apply = bType.getMethod "apply"

        match (apply) case { (noSuchMethod) ->
            TypeError.raise ("the expression `{block.toGrace (0)}` of " ++
                "type '{bType}' does not satisfy the type 'Block'") with (block)
        } case { meth: MethodType ->
            return meth.returnType
        } case { _ -> }
    }

    method fromBlockBody (body) -> ObjectType {
        if (body.size == 0) then {
            objectType.done
        } else {
            typeOf (body.last)
        }
    }

    def unknown:ObjectType is public = object {
        def methods is public = []
        method getMethod (_: String) -> noSuchMethod { noSuchMethod }
        def isUnknown: Boolean is public = true
        method isSubtypeOf (_: ObjectType) -> Boolean { true }
        method |(_: ObjectType) -> unknown { unknown }
        method &(_: ObjectType) -> unknown { unknown }
        def asString: String is public, override = "Unknown"
        method ==(other) { self.isMe(other) }
    }

    method blockTaking (params: List⟦Parameter⟧)
            returning (rType: ObjectType) -> ObjectType {
        def signature = [mixPartNamed "apply" parameters (params)]
        def meths = [aMethodType.signature (signature) returnType (rType)]

        fromMethods (meths) withName "Block"
    }

    method blockReturning (rType: ObjectType) -> ObjectType {
        blockTaking [ ] returning (rType)
    }

    method addTo (oType: ObjectType) name (name': String)
            returns (rType: ObjectType) -> Done is confidential {
        def signature = [mixPartNamed (name') parameters [ ] ]
        oType.methods.push (aMethodType.signature (signature) returnType (rType))
    }

    method addTo (oType: ObjectType) name (name': String)
            params (ptypes: prelude.Iterable⟦ObjectType⟧) returns (rType: ObjectType)
            -> Done is confidential {
        def parameters = []
        ptypes.do { ptype ->
            parameters.push (aParam.ofType (ptype))
        }

        def signature = [mixPartNamed (name') parameters (parameters)]

        oType.methods.push (aMethodType.signature (signature) returnType (rType))
    }

    method extend (this: ObjectType) with (that: ObjectType)
            -> Done is confidential {
        that.methods.do { mType ->
            this.methods.push (mType)
        }
    }

    var base: ObjectType is readable := unknown     // to avoid a circularity
    def done: ObjectType is public = fromMethods [ ] withName "Done"
    base := fromMethods [ ] withName "Object"

    def pattern: ObjectType is public = fromMethods [ ] withName "Pattern"
    def iterator: ObjectType is public = fromMethods [ ] withName "Iterator"
    def binding: ObjectType is public = fromMethods [ ] withName "Binding"
    def boolean: ObjectType is public = fromMethods [ ] withName "Boolean"
    def number: ObjectType is public = fromMethods [ ] withName "Number"
    def string: ObjectType is public = fromMethods [ ] withName "String"
    def list: ObjectType is public = fromMethods [ ] withName "List"
    def point: ObjectType is public = fromMethods [ ] withName "Point"

    addTo (binding) name "key" returns (base)
    addTo (binding) name "value" returns (base)

    addTo (base) name "≠(_)" params [base] returns (boolean)
    addTo (base) name "asDebugString" returns (string)
    addTo (base) name "asString" returns (string)
    addTo (base) name "::(_)" returns (binding)
    addTo (base) name "emptyList" returns (list)

    addTo (done) name "asDebugString" returns (string)
    addTo (done) name "asString" returns (string)

    extend (pattern) with (base)
    addTo (pattern) name "match(_)" params [base] returns (unknown)
    addTo (pattern) name "|(_)" params [pattern] returns (pattern)
    addTo (pattern) name "&(_)" params [pattern] returns (pattern)

    extend (iterator) with (base)
    addTo (iterator) name "hasNext" returns (boolean)
    addTo (iterator) name "next" returns (unknown)

    def shortCircuit = blockTaking ([aParam.ofType (blockReturning (unknown))])
        returning (base)
    extend (boolean) with (base)
    addTo (boolean) name "&&(_)" params [boolean] returns (boolean)
    addTo (boolean) name "||(_)" params [boolean] returns (boolean)
    addTo (boolean) name "prefix!" returns (boolean)
    addTo (boolean) name "not" returns (boolean)

    extend (number) with (base)
    addTo (number) name "+(_)" params [number] returns (number)
    addTo (number) name "*(_)" params [number] returns (number)
    addTo (number) name "-(_)" params [number] returns (number)
    addTo (number) name "/(_)" params [number] returns (number)
    addTo (number) name "^(_)" params [number] returns (number)
    addTo (number) name "%(_)" params [number] returns (number)
    addTo (number) name "÷(_)" params [number] returns (number)
    addTo (number) name "@(_)" params [number] returns (point)
    addTo (number) name "hash" returns (number)
    addTo (number) name "++(_)" params [base] returns (string)
    addTo (number) name "<(_)" params [number] returns (boolean)
    addTo (number) name ">(_)" params [number] returns (boolean)
    addTo (number) name "≤(_)" params [number] returns (boolean)
    addTo (number) name "≥(_)" params [number] returns (boolean)
    addTo (number) name "..(_)" params [number] returns (list)
    addTo (number) name "asInteger32" returns (number)
    addTo (number) name "prefix-" returns (number)
    addTo (number) name "inBase(_)" params [number] returns (number)
    addTo (number) name "truncated" returns (number)
    addTo (number) name "rounded" returns (number)
    addTo (number) name "prefix<" returns (pattern)
    addTo (number) name "prefix>" returns (pattern)

    extend (point) with (base)
    addTo (point) name "x" returns (number)
    addTo (point) name "y" returns (number)

    extend (string) with (base)
    addTo (string) name "++(_)" params [base] returns (string)
    addTo (string) name "at(_)" params [number] returns (string)
    addTo (string) name "iterator" returns (base)
    addTo (string) name "quoted" returns (string)
    addTo (string) name "size" returns (number)
    addTo (string) name "iterator" returns (iterator)
    addTo (string) name "ord" returns (number)
    addTo (string) name "substringFrom(_)to(_)" params [number, number] returns (string)
    addTo (string) name "replace()with(_)" params [string, string] returns (string)
    addTo (string) name "hash" returns (string)
    addTo (string) name "indices" returns (list)
    addTo (string) name "asNumber" returns (number)

    def fold = blockTaking ([aParam.ofType (unknown), aParam.ofType (unknown)])
        returning (unknown)
    extend (list) with (base)
    addTo (list) name "at(_)" params [number] returns (unknown)
    addTo (list) name "at(_)put(_)" params [number, unknown] returns (done)
    addTo (list) name "push(_)" params [unknown] returns (done)
    addTo (list) name "pop" returns (unknown)
    addTo (list) name "size" returns (number)
    addTo (list) name "iterator" returns (iterator)
    addTo (list) name "contains(_)" params [unknown] returns (boolean)
    addTo (list) name "indices" returns (list)
    addTo (list) name "first" returns (unknown)
    addTo (list) name "last" returns (unknown)
    addTo (list) name "add(_)" params [unknown] returns (list)
    addTo (list) name "addFirst(_)" params [unknown] returns (list)
    addTo (list) name "addAll(_)" params [unknown] returns (list)
    addTo (list) name "++(_)" params [list] returns (list)
    addTo (list) name "fold(_)startingWith(_)" params [fold, unknown] returns (unknown)

    scope.types.at "Unknown" put (unknown)
    scope.types.at "Done" put (done)
    scope.types.at "Object" put (base)
    scope.types.at "Pattern" put (pattern)
    scope.types.at "Boolean" put (boolean)
    scope.types.at "Number" put (number)
    scope.types.at "String" put (string)
    scope.types.at "List" put (list)
    scope.types.at "Point" put (point)

    addVar "Unknown" ofType (pattern)
    addVar "Dynamic" ofType (pattern)
    addVar "Done" ofType (pattern)
    addVar "Object" ofType (pattern)
    addVar "Pattern" ofType (pattern)
    addVar "Boolean" ofType (pattern)
    addVar "Number" ofType (pattern)
    addVar "String" ofType (pattern)
    addVar "List" ofType (pattern)
    addVar "Point" ofType (pattern)

    addVar "done" ofType (self.done)
    addVar "true" ofType (boolean)
    addVar "false" ofType (boolean)
    addVar "emptyList" ofType (list)
}

method addVar (name: String) ofType (oType: ObjectType) is confidential {
    scope.variables.at (name) put (oType)
    scope.methods.at (name) put (aMethodType.member (name) ofType (oType))
}


// Object literals.

def ObjectError = TypeError.refine "ObjectError"

rule { obj: ObjectLiteral ->
    scope.enter { processBody (obj.value) }
}


// Simple literals.

rule { _: NumberLiteral | OctetsLiteral ->
    objectType.number
}

rule { _: StringLiteral ->
    objectType.string
}

rule { _: ArrayLiteral ->
    objectType.list
}


// Method requests.

def RequestError = TypeError.refine "RequestError"

rule { req: Request ->
    match (req.receiver)
      case { innerReq: Request ->
        def rec = innerReq.receiver
        def rType = if (Identifier.match (rec) && (rec.value == "self")) then {
            scope.types.find "Self" butIfMissing {
                prelude.Exception.raise "type of self missing" with (rec)
            }
        } else {
            typeOf (rec)
        }

        if (rType.isUnknown) then {
            objectType.unknown
        } else {
            def name = innerReq.canonicalName

            match (rType.getMethod (name))
                case { (noSuchMethod) ->
                    RequestError.raise ("no method `{name}` in " ++
                        "`{rec.toGrace (0)}` of type `{rType}`") with (innerReq)
                } case { meth: MethodType ->
                    check (req) against (meth)
                }
        }
    } case { ident: Identifier ->
        find (req) atScope (scope.methods.stack.size)
    } case { outerObj: Outer ->
        objectType.unknown      // we should be able to do better than that!
    } case { other: Object ->
        print "receiver {req} is not a Request, an Identifier or an Outer node"
        objectType.unknown
    }
}

method check (req: Request)
        against (meth: MethodType) -> ObjectType is confidential {
    def name = meth.name

    prelude.for (meth.signature) and (req.with) do { part, args' ->
        def params = part.parameters
        def args   = args'.args

        def pSize = params.size
        def aSize = args.size

        if (aSize != pSize) then {
            def which = if (aSize > pSize) then { "many" } else { "few" }
            def where = if (aSize > pSize) then {
                args.at (pSize + 1)
            } else {
                // Can we get beyond the final argument?
                req.value
            }

            RequestError
                .raise ("too {which} arguments to method part " ++
                    "'{part.name}', expected {pSize} but got {aSize}")
                    with (where)
        }

        prelude.for (params) and (args) do { param, arg ->
            def pType = param.typeAnnotation
            def aType = typeOf (arg)

            if (typeOf (arg).isSubtypeOf (pType).not) then {
                RequestError.raise ("the expression " ++
                    "`{arg.toGrace (0)}` of type '{aType}' does not " ++
                    "satisfy the type of parameter '{param}' in the " ++
                    "method '{name}'") with (arg)
            }
        }
    }

    return meth.returnType
}

method find (req: Request) atScope (i: Number) -> ObjectType is confidential {
    if (i == 0) then {
        return objectType.unknown
    }

    def sType = objectType.fromMethods (scope.methods.stack.at (i).values)

    return match (sType.getMethod (req.receiver.value)) case { (noSuchMethod) ->
        find (req) atScope (i - 1)
    } case { meth: MethodType ->
        check (req) against (meth)
    }
}

rule { memb: Member ->
    typeOf (ast.callNode.new (memb, [object {
        def name is public = memb.value
        def args is public = []
    }]))
}

rule { op: Operator ->
    def rec = op.left
    def rType = typeOf (rec)

    if (rType.isUnknown) then {
        objectType.unknown
    } else {
        def name = op.value

        match (rType.getMethod (name)) case { (noSuchMethod) ->
            RequestError.raise ("no method '{name}' in " ++
                "`{rec.toGrace (0)}` of type '{rType}'") with (op)
        } case { meth: MethodType ->
            def arg = op.right
            def params = meth.signature.first.parameters

            if (params.size == 0) then {
                RequestError.raise ("the definition of operator " ++
                    "`{name}` is missing its parameter") with (op)
            }

            def param = params.first
            def pType = param.typeAnnotation

            if (typeOf (arg).isSubtypeOf (pType).not) then {
                RequestError.raise ("the expression " ++
                    "`{arg.toGrace 0}` does not satisfy the type of " ++
                    "parameter `{param}` in the method `{name}`") with (arg)
            }

            meth.returnType
        }
    }
}


// Special cases.

rule { req: If ->
    def cond = req.value
    if (typeOf (cond).isSubtypeOf (objectType.boolean).not) then {
        RequestError.raise ("the condition `{cond.toGrace 0}` does not " ++
            "conform to type `Boolean`.") with (cond)
    }

    def then = objectType.fromBlock (req.thenblock)

    def else = objectType.fromBlock (req.elseblock)

    then | else
}

rule { req: MatchCase ->
    def cases = req.cases
    var union := done

    cases.do { case ->
        def cType = objectType.fromBlock (case)
        union := if (done == union) then {
            cType
        } else {
            union | cType
        }
    }
    union
}

rule { req: TryCatch ->
    match (req.value) case { bl: BlockLiteral ->
        def params = bl.params
        if (params.size > 0) then {
            RequestError.raise "too many parameters for try block" with (bl)
        }
    }

    req.cases.do { eachCase ->
        match (eachCase) case { bl: BlockLiteral ->
            def params = bl.params
            if (params.size != 1) then {
                def which = if (params.size == 0)
                    then { "not enough" } else { "too many" }

                RequestError.raise "{which} parameters for catch block" with (bl)
            }
        }
    }

    if (false ≠ req.finally) then {
        match (req.finally) case { bl: BlockLiteral ->
            def params = bl.params
            if (params.size > 0) then {
                RequestError.raise "too many parameters to finally" with (bl)
            }
        }
    }

    objectType.done
}


// Method declaration.

def MethodError = TypeError.refine "MethodError"

rule { meth: Method ->
    def name = meth.value.value
    def mType = aMethodType.fromNode (meth)
    def returnType = mType.returnType

    scope.enter {
        meth.signature.do { part ->
            part.params.do { param ->
                scope.variables.at (param.value)
                    put (objectType.fromDType (param.dtype))
            }
        }

        collectTypes (meth.body)

        meth.body.do { stmt ->
            checkTypes (stmt)

            stmt.accept (object {
                inherit ast.baseVisitor

                method visitReturn (ret) is override {
                    check (ret.value) matches (returnType) inMethod (name)
                    return false
                }

                method visitMethod (node) is override {
                    false
                }
            })
        }

        if (meth.body.size == 0) then {
            if (objectType.done.isSubtypeOf (returnType).not) then {
                MethodError.raise ("method `{name}` declares a " ++
                    "result of type '{returnType}', but has no body") with (meth)
            }
        } else {
            def lastNode = meth.body.last
            if (Return.match (lastNode).not) then {
                def lastType = typeOf (lastNode)
                if (lastType.isSubtypeOf (returnType).not) then {
                    MethodError.raise ("method `{name}` declares a " ++
                        "result of type `{returnType}`, but returns an " ++
                        "expression of type `{lastType}`") with (lastNode)
                }
            }
        }
    }

    if (isMember (mType)) then {
        scope.variables.at (name) put (returnType)
    }

    scope.methods.at (name) put (mType)
    objectType.done
}

method check (node) matches (eType: ObjectType)
        inMethod (name: String) -> Done is confidential {
    def aType = typeOf (node)
    if (aType.isSubtypeOf (eType).not) then {
        MethodError.raise ("method `{name}` declares a result of " ++
            "type `{eType}`, but returns an expression of type " ++
            "`{aType}`") with (node)
    }
}


// Class declaration.

def ClassError = TypeError.refine "ClassError"

rule { cls: Class ->
    def name = cls.name.value
    def dType = objectType.fromDType (cls.dtype)
    def cType = scope.enter {
        cls.signature.do { part ->
            part.params.do { param ->
                scope.variables.at (param.value)
                    put (objectType.fromDType (param.dtype))
            }
        }

        def aType = processBody (cls.value)
        if (aType.isUnknown) then {
            objectType.unknown
        } else {
            if (aType.isSubtypeOf (dType).not) then {
                ClassError.raise ("class `{name}` declares a result " ++
                    "of type `{dType}`, but constructs an object of type " ++
                    "`{aType}`") with (cls)
            }

            aType
        }
    }

    scope.variables.at (name)
        put (objectType.fromMethods ([aMethodType.fromNode (cls)]))

    if (dType.isUnknown) then {
        // Class type inference.
        cType
    } else {
        dType
    }
}


// Def and var declarations.

def DefError = TypeError.refine "DefError"

rule { defd: Def | Var ->
    var defType:= objectType.fromDType (defd.dtype)

    def value = defd.value

    if (value != false) then {
        def vType = typeOf (value)

        if (defType.isUnknown && (defd.kind == "defdec")) then {
            defType:= vType
        }

        if (vType.isSubtypeOf (defType).not) then {
            DefError.raise ("the expression `{value.toGrace 0}` of type " ++
                "`{vType}` does not satisfy the type of {defd.kind} " ++
                "annotation `{defType}`") with (value)
        }
    }

    def name = defd.name.value
    scope.variables.at (name) put (defType)

    defd.annotations.do { ann ->
        if (ann.value == "public") then {
            scope.methods.at (name) put (aMethodType.member (name) ofType (defType))

            if (defd.kind == "vardec") then {
                def name' = name ++ ":="
                def param = aParam.withName (name) ofType (defType)
                def sig = [mixPartNamed (name') parameters ([param])]

                scope.methods.at (name')
                    put (aMethodType.signature (sig) returnType (objectType.done))
            }

            return
        }
    }
    objectType.done
}

rule { bind: Bind ->
    def dest = bind.dest
    def dType = typeOf (dest)

    def value = bind.value
    def vType = typeOf (value)

    if (vType.isSubtypeOf (dType).not) then {
        DefError.raise ("the expression `{value.toGrace 0}` of type " ++
            "`{vType}` does not satisfy the type `{dType}` of " ++
            "`{dest.toGrace 0}`") with (value)
    }
    objectType.done
}


// Import declarations.

rule { imp: Import ->
    scope.variables.at (imp.nameString) put (objectType.unknown)
    objectType.done
}


// Block expressions.

rule { block: BlockLiteral ->
    def body = block.body

    scope.enter {
        block.params.do { param ->
            scope.variables.at (param.value)
                put (objectType.fromDType (param.dtype))
        }

        collectTypes (body)

        body.do { stmt ->
            checkTypes (stmt)
        }
    }

    def parameters = []
    block.params.do { param ->
        parameters.push (aParam.withName (param.value)
            ofType (objectType.fromDType (param.dtype)))
    }

    objectType.blockTaking (parameters)
        returning (objectType.fromBlockBody (body))
}


// Identifier references.

rule { ident: Identifier ->
    match (ident.value) case { "outer" ->
        outerAt (scope.size)
    } case { _ ->
        scope.variables.find (ident.value) butIfMissing { objectType.unknown }
    }
}

method outerAt (i: Number) -> ObjectType is confidential {
    // Required to cope with not knowing the prelude.
    if (i <= 1) then {
        return objectType.unknown
    }

    def vStack = scope.variables.stack
    def curr = vStack.at (i)

    return curr.atKey "outer" do { t -> t } else {
        def prev = outerAt (i - 1)

        def mStack = scope.methods.stack

        def vars = vStack.at (i - 1)
        def meths = mStack.at (i - 1).values

        def oType = objectType.fromMethods (meths)
        def mType = aMethodType.member "outer" ofType (oType)

        curr.at "outer" put (oType)
        mStack.at (i).at "outer" put (mType)

        oType
    }
}


// Typing methods.

method processBody (body: List) -> ObjectType is confidential {
    // Collect the declarative types directly in the object body.
    collectTypes (body)

    // Inheritance typing.
    def hasInherits = (body.size > 0) && { Inherit.match (body.first) }
    def superType = if (hasInherits) then {
        def inheriting = body.first.value
        inheriting.accept (object {
            inherit ast.baseVisitor

            def illegal = ["self", "super"]

            method visitIdentifier (ident) {
                if (illegal.contains (ident.value)) then {
                    ObjectError.raise ("reference to `{ident.value}` " ++
                        "in inheritance clause") with (ident)
                }
            }
        })

        typeOf (inheriting)
    } else {
        objectType.base
    }

    scope.variables.at "super" put (superType)

    // If the super type is unknown, then we can't know anything about the
    // self type.  TODO We actually can, because an object cannot have two
    // methods with the same name.
    def publicType = if (superType.isUnknown) then {
        scope.types.at "Self" put (superType)
        superType
    } else {
        // Collect the method types to add the two self types.
        def publicMethods = []
        def allMethods = []

        body.do { stmt ->
            match (stmt) case { meth: Method ->
                def mType = aMethodType.fromNode (meth)
                allMethods.push (mType)
                if (isPublic (meth)) then {
                    publicMethods.push (mType)
                }

                scope.methods.at (mType.name) put (mType)
                if (isMember (mType)) then {
                    scope.variables.at (mType.name) put (mType.returnType)
                }
            } case { defd: Def | Var ->
                if (isPublic (defd)) then {
                    def mType = aMethodType.fromNode (defd)
                    allMethods.push (mType)
                    publicMethods.push (mType)
                }
            } case { _ -> }
        }

        scope.types.at "Self" put (objectType.fromMethods (allMethods))
        objectType.fromMethods (publicMethods)
    }

    scope.variables.at "self" put (publicType)

    // Type-check the object body.
    def indices = if (hasInherits) then {
        2..body.size
    } else {
        body.indices
    }

    indices.do { i ->
        checkTypes (body.at (i))
    }

    return publicType
}


def TypeDeclarationError = TypeError.refine "TypeDeclarationError"

// The first pass over a body, collecting all type declarations so that they can
// reference one another declaratively.
method collectTypes (nodes: List) -> Done is confidential {
    def names = []
    def types = []
    def placeholders = []

    nodes.do { node ->
        match (node) case { td: TypeDeclaration ->
            if (names.contains (td.nameString)) then {
                TypeDeclarationError.raise ("the type {td.nameString} uses " ++
                    "the same name as another type in the same scope") with (td)
            }

            names.push (td.value)

            // In order to allow the types to be declarative, the scope needs
            // to be populated by placeholder types first.
            def placeholder = objectType.unknown
            types.push (td)
            placeholders.push (placeholder)
            scope.types.at (td.nameString) put (placeholder)
        } case { _ -> }
    }

    prelude.for (types) and (placeholders) do { td, ph ->
        def oType = objectType.fromDType (td)
        prelude.become (ph, oType)
    }
}


// Determines if a node is publicly available.
method isPublic (node: Method | Def | Var) -> Boolean is confidential {
    match (node) case { _: Method ->
        node.annotations.do { ann ->
            if (ann.value == "confidential") then {
                return false
            }
        }

        true
    } case { _ ->
        node.annotations.do { ann ->
            if ((ann.value == "public") || (ann.value == "readable")) then {
                return true
            }
        }

        false
    }
}


// Determines if a method will be accessed as a member.
method isMember (mType: MethodType) -> Boolean is confidential {
    (mType.signature.size == 1) && {
        mType.signature.first.parameters.size == 0
    }
}


// Helper methods.


// For loop with break.
method for (a) doWithBreak (bl) -> Done {
    a.do { e ->
        bl.apply (e, {
            return
        })
    }
}

// For loop with continue.
method for (a) doWithContinue (bl) -> Done {
    a.do { e ->
        continue'(e, bl)
    }
}

method continue'(e, bl) -> Done is confidential {
    bl.apply (e, {
        return
    })
}

def thisDialect is public = object {
    method astChecker (moduleObj) { check (moduleObj) }
    method atStart { print "module start" }
    method atEnd { print "module end" }
}
