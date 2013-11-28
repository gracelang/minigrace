dialect "checking"

import "ast" as ast
import "StandardPrelude" as prelude

inherits prelude.new


// Type error.

def TypeError is public = CheckerFailure.refine("TypeError")

// Method signature information.

type MethodType = {
    name -> String
    signature -> List<MixPart>
    returnType -> ObjectType
    matches(other : MethodType) -> Boolean
}

type Param = {
    name -> String
    typeAnnotation -> ObjectType
}

def aParam = object {
    method withName(name' : String) ofType(type' : ObjectType) -> Param {
        object {
            def name : String is public = name'
            def typeAnnotation : ObjectType is public = type'

            def asString : String is public, override =
                "{name} : {typeAnnotation}"
        }
    }

    method ofType(type' : Object) -> Param {
        withName("_") ofType(type')
    }
}

type MixPart = {
    name -> String
    parameters -> List<Param>
}

class aMixPart.withName(name' : String)
        parameters(parameters' : List<Param>) -> MixPart {
    def name : String is public = name'
    def parameters : List<Param> is public = parameters'
}

def aMethodType = object {

    method signature(signature' : List<MixPart>)
            returnType(rType : ObjectType)-> MethodType {
        object {
            def signature : List<MixPart> is public = signature'
            def returnType : ObjectType is public = rType

            var name : String is readable := ""
            var show : String := ""

            def fst = signature.at(1)

            if(fst.parameters.size == 0) then {
                name := fst.name
                show := name
            } else {
                for(signature) do { part ->
                    name := "{name}{part.name}()"
                    show := "{show}{part.name}("
                    var once := false
                    for(part.parameters) do { param ->
                        if(once) then {
                            show := ", "
                        }
                        show := "{show}{param}"
                        once := true
                    }
                    show := "{show})"
                }

                name := name.substringFrom(1) to(name.size - 2)
            }

            show := "{show} -> {returnType}"

            // Currently doesn't allow specialisation of any types.
            method matches(other : MethodType) -> Boolean {
                if(other.signature.size != signature.size) then {
                    return false
                }

                for(signature) and(other.signature) do { part, part' ->
                    if(part.name != part'.name) then {
                        return false
                    }

                    for(part.parameters) and(part'.parameters) do { p, p' ->
                        def pt = p.typeAnnotation
                        def pt' = p'.typeAnnotation
                        if(pt != pt') then {
                            if(pt.isDynamic.not && pt'.isDynamic.not) then {
                                return false
                            }
                        }
                    }
                }

                return (returnType == other.returnType).orElse {
                    returnType.isDynamic || other.returnType.isDynamic
                }
            }

            def asString : String is public, override = show
        }
    }

    method fromNode(node) -> MethodType {
        match(node) case { meth : Method | MethodSignature ->
            def signature = []

            for(meth.signature) do { part ->
                def params = []

                for(part.params) do { param ->
                    params.push(aParam.withName(param.value)
                        ofType(anObjectType.fromDType(param.dtype)))
                }

                signature.push(aMixPart.withName(part.name) parameters(params))
            }

            def rType = match(meth) case { m : Method ->
                m.dtype
            } case { m : MethodSignature ->
                meth.rtype
            }

            return signature(signature)
                returnType(anObjectType.fromDType(rType))
        } case { defd : Def | Var ->
            def signature = [aMixPart.withName(defd.name.value) parameters([])]
            def dtype = anObjectType.fromDType(defd.dtype)
            return signature(signature) returnType(dtype)
        }
    }

}


// Object type information.

def noSuchMethod = object {
    inherits prelude.BasicPattern.new

    method match(obj : Object) {
        if(self == obj) then {
            prelude.SuccessfulMatch.new(self, [])
        } else {
            prelude.FailedMatch.new(obj)
        }
    }
}

type ObjectType = {
    methods -> List<MethodType>
    getMethod(name : String) -> MethodType | noSuchMethod
    isDynamic -> Boolean
    isSubtypeOf(other : ObjectType) -> Boolean
    |(other : ObjectType) -> ObjectType
    &(other : ObjectType) -> ObjectType
}

def anObjectType = object {

    method fromMethods(methods' : List<MethodType>) -> ObjectType { object {
        def baseMethods = if(base == false)
            then { [] } else { base.methods }

        def methods : List<MethodType> is public = baseMethods ++ methods'

        method getMethod(name : String) -> MethodType | noSuchMethod {
            for(methods) do { meth ->
                if(meth.name == name) then {
                    return meth
                }
            }

            return noSuchMethod
        }

        def isDynamic : Boolean is public = false

        method isSubtypeOf(other : ObjectType) -> Boolean {
            if(other.isDynamic) then {
                return true
            }

            for(other.methods) doWithContinue { a, continue ->
                for(methods) do { b ->
                    if(a.matches(b)) then {
                        continue.apply
                    }
                }

                return false
            }

            return true
        }

        method |(other : ObjectType) -> ObjectType {
            if(self == other) then { return self }
            if(other.isDynamic) then { return dynamic }

            def combine = []

            for(methods) doWithContinue { meth, continue ->
                for(other.methods) do { meth'->
                    if(meth.name == meth'.name) then {
                        if(meth.matches(meth').not) then {
                            TypeError.raise("cannot produce intersection of " ++
                                "incompatible types '{self}' and '{other}'")
                        }

                        combine.push(meth)
                        continue.apply
                    }
                }
            }

            def original = self
            return object {
                inherits fromMethods(combine)

                method asString -> String is override {
                    "{original} | {other}"
                }
            }
        }

        method &(other : ObjectType) -> ObjectType {
            if(self == other) then { return self }
            if(other.isDynamic) then { return dynamic }

            def combine = []

            for(methods) doWithContinue { meth, continue ->
                for(other.methods) doWithContinue { meth' ->
                    if(meth.name == meth'.name) then {
                        if(meth.matches(meth').not) then {
                            TypeError.raise("cannot produce union of " ++
                                "incompatible types '{self}' and '{other}'")
                        }

                        continue.apply
                    }
                }

                combine.push(meth)
            }

            for(other.methods) do { meth ->
                combine.push(meth)
            }

            def original = self
            object {
                inherits fromMethods(combine)

                method asString -> String is override {
                    "{original} & {other}"
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
                    out := "{out}{mtype}; "
                }
            }

            return "{out}\}"
        }
    }}

    method fromMethods(methods' : List<MethodType>)
            withName(name : String) -> ObjectType {
        object {
            inherits fromMethods(methods')

            def asString : String is public, override = name
        }
    }

    method fromDType(dtype) -> ObjectType {
        return match(dtype) case { (false) ->
            dynamic
        } case { lit : TypeDeclaration ->
            def methods = []

            for(lit.methods) do { mType ->
                methods.push(aMethodType.fromNode(mType))
            }

            if(lit.value != false) then {
                anObjectType.fromMethods(methods) withName(lit.value)
            } else {
                anObjectType.fromMethods(methods)
            }
        } case { ident : Identifier ->
            anObjectType.fromIdentifier(ident)
        } else {
            prelude.Error.raise("unrecognised type node {dtype.kind}")
        }
    }

    method fromIdentifier(ident : Identifier) -> ObjectType {
        scope.types.find(ident)
    }

    method fromBlock(block) -> ObjectType {
        def bType = typeOf(block)

        if(bType.isDynamic) then { return dynamic }

        def apply = bType.getMethod("apply")

        match(apply) case { (noSuchMethod) ->
            TypeError.raiseWith("the expression `{block.toGrace(0)}` of " ++
                "type '{bType}' does not satisfy the type 'Block'", block)
        } case { meth : MethodType ->
            return meth.returnType
        }
    }

    method fromBlockBody(body) -> ObjectType {
        if(body.size == 0) then {
            anObjectType.done
        } else {
            typeOf(body.last)
        }
    }

    def dynamic : ObjectType is public = object {
        def methods : List<MethodType> is public = []

        method getMethod(_ : String) -> noSuchMethod { noSuchMethod }

        def isDynamic : Boolean is public = true

        method isSubtypeOf(_ : ObjectType) -> Boolean { true }

        method |(_ : ObjectType) -> dynamic { dynamic }

        method &(_ : ObjectType) -> dynamic { dynamic }

        def asString : String is public, override = "Dynamic"
    }

    method blockTaking(params : List<Parameter>)
            returning(rType : ObjectType) -> ObjectType {
        def signature = [aMixPart.withName("apply") parameters(params)]
        def methods = [aMethodType.signature(signature) returnType(rType)]

        fromMethods(methods) withName("Block")
    }

    method blockReturning(rType : ObjectType) -> ObjectType {
        blockTaking([]) returning(rType)
    }

    method addTo(oType : ObjectType) name(name' : String)
            returns(rType : ObjectType) -> Done is confidential {
        def signature = [aMixPart.withName(name') parameters([])]
        oType.methods.push(aMethodType.signature(signature) returnType(rType))
    }

    method addTo(oType : ObjectType) name(name' : String)
            params(*ptypes : ObjectType) returns(rType : ObjectType)
            -> Done is confidential {
        def parameters = []
        for(ptypes) do { ptype ->
            parameters.push(aParam.ofType(ptype))
        }

        def signature = [aMixPart.withName(name') parameters(parameters)]

        oType.methods.push(aMethodType.signature(signature) returnType(rType))
    }

    method extend(this : ObjectType) with(that : ObjectType)
            -> Done is confidential {
        for(that.methods) do { mType ->
            this.methods.push(mType)
        }
    }

    var base : ObjectType is readable := false
    def done : ObjectType is public = fromMethods([]) withName("Done")
    base := fromMethods([]) withName("Object")

    def pattern : ObjectType is public = fromMethods([]) withName("Pattern")
    def iterator : ObjectType is public = fromMethods([]) withName("Iterator")
    def boolean : ObjectType is public = fromMethods([]) withName("Boolean")
    def number : ObjectType is public = fromMethods([]) withName("Number")
    def string : ObjectType is public = fromMethods([]) withName("String")
    def list : ObjectType is public = fromMethods([]) withName("List")

    addTo(base) name("==") params(base) returns(boolean)
    addTo(base) name("!=") params(base) returns(boolean)
    addTo(base) name("asString") returns(string)

    extend(pattern) with(base)
    addTo(pattern) name("match") params(base) returns(dynamic)
    addTo(pattern) name("|") params(pattern) returns(pattern)
    addTo(pattern) name("&") params(pattern) returns(pattern)

    extend(iterator) with(base)
    addTo(iterator) name("havemore") returns(boolean)
    addTo(iterator) name("next") returns(dynamic)

    def shortCircuit = blockTaking([aParam.ofType(blockReturning(dynamic))])
        returning(base)
    extend(boolean) with(base)
    addTo(boolean) name("&&") params(boolean) returns(boolean)
    addTo(boolean) name("||") params(boolean) returns(boolean)
    addTo(boolean) name("prefix!") returns(boolean)
    addTo(boolean) name("not") returns(boolean)
    addTo(boolean) name("andAlso") params(shortCircuit) returns(dynamic)
    addTo(boolean) name("orElse") params(shortCircuit) returns(dynamic)

    extend(number) with(base)
    addTo(number) name("+") params(number) returns(number)
    addTo(number) name("*") params(number) returns(number)
    addTo(number) name("-") params(number) returns(number)
    addTo(number) name("/") params(number) returns(number)
    addTo(number) name("^") params(number) returns(number)
    addTo(number) name("%") params(number) returns(number)
    addTo(number) name("hashcode") returns(string)
    addTo(number) name("++") params(base) returns(string)
    addTo(number) name("<") params(number) returns(boolean)
    addTo(number) name(">") params(number) returns(boolean)
    addTo(number) name("<=") params(number) returns(boolean)
    addTo(number) name(">=") params(number) returns(boolean)
    addTo(number) name("..") params(number) returns(list)
    addTo(number) name("asInteger32") returns(number)
    addTo(number) name("prefix-") returns(number)
    addTo(number) name("inBase") params(number) returns(number)
    addTo(number) name("truncate") returns(number)
    addTo(number) name("prefix<") returns(pattern)
    addTo(number) name("prefix>") returns(pattern)

    extend(string) with(base)
    addTo(string) name("++") params(base) returns(string)
    addTo(string) name("at") params(number) returns(string)
    addTo(string) name("[]") params(number) returns(string)
    addTo(string) name("iterator") returns(base)
    addTo(string) name("_escape") returns(string)
    addTo(string) name("length") returns(number)
    addTo(string) name("size") returns(number)
    addTo(string) name("iter") returns(iterator)
    addTo(string) name("ord") returns(number)
    addTo(string) name("encode") returns(string)
    addTo(string) name("substringFrom()to") params(number, number) returns(string)
    addTo(string) name("replace()with") params(string, string) returns(string)
    addTo(string) name("hashcode") returns(string)
    addTo(string) name("indices") returns(list)
    addTo(string) name("asNumber") returns(number)

    def fold = blockTaking([aParam.ofType(dynamic), aParam.ofType(dynamic)])
        returning(dynamic)
    extend(list) with(base)
    addTo(list) name("at") params(number) returns(dynamic)
    addTo(list) name("[]") params(number) returns(dynamic)
    addTo(list) name("at()put") params(number, dynamic) returns(done)
    addTo(list) name("[]:=") params(number, dynamic) returns(done)
    addTo(list) name("push") params(dynamic) returns(done)
    addTo(list) name("pop") returns(dynamic)
    addTo(list) name("length") returns(number)
    addTo(list) name("size") returns(number)
    addTo(list) name("iter") returns(iterator)
    addTo(list) name("iterator") returns(iterator)
    addTo(list) name("contains") params(dynamic) returns(boolean)
    addTo(list) name("indices") returns(list)
    addTo(list) name("first") returns(dynamic)
    addTo(list) name("last") returns(dynamic)
    addTo(list) name("prepended") params(dynamic) returns(list)
    addTo(list) name("++") params(list) returns (list)
    addTo(list) name("reduce") params(dynamic, fold) returns (dynamic)

    scope.types.at("Dynamic") put(dynamic)
    scope.types.at("Done") put(done)
    scope.types.at("Object") put(base)
    scope.types.at("Pattern") put(pattern)
    scope.types.at("Boolean") put(boolean)
    scope.types.at("Number") put(number)
    scope.types.at("String") put(string)
    scope.types.at("List") put(list)

    scope.variables.at("Dynamic") put(pattern)
    scope.variables.at("Done") put(pattern)
    scope.variables.at("Object") put(pattern)
    scope.variables.at("Pattern") put(pattern)
    scope.variables.at("Boolean") put(pattern)
    scope.variables.at("Number") put(pattern)
    scope.variables.at("String") put(pattern)
    scope.variables.at("List") put(pattern)

    scope.variables.at("done") put(self.done)
    scope.variables.at("true") put(boolean)
    scope.variables.at("false") put(boolean)

}


// Object literals.

rule { obj : ObjectLiteral ->
    def methods = []

    var isDynamic := false
    for(obj.value) doWithBreak { stmt, break ->
        match(stmt) case { inh : Inherits ->
            def iType = typeOf(inh.value)
            if(iType.isDynamic) then {
                isDynamic := true
                break.apply
            } else {
                for(iType.methods) do { meth ->
                    methods.push(meth)
                }
            }
        } case { meth : Method ->
            methods.push(aMethodType.fromNode(meth))
        } case { defd : Def | Var ->
            for(defd.annotations) do { ann ->
                if((ann.value == "public") || (ann.value == "readable")) then {
                    methods.push(aMethodType.fromNode(defd))
                }
            }
        } else {}
    }

    if(isDynamic) then {
        anObjectType.dynamic
    } else {
        anObjectType.fromMethods(methods)
    }
}


// Simple literals.

rule { _ : NumberLiteral | OctetsLiteral ->
    anObjectType.number
}

rule { _ : StringLiteral ->
    anObjectType.string
}

rule { _ : ArrayLiteral ->
    anObjectType.list
}


// Method requests.

def RequestError = TypeError.refine("Request TypeError")

rule { req : Request ->
    def rType = match(req.value) case { memb : Member ->
        typeOf(memb.in)
    } case { ident : Identifier ->
        // TODO Type the prelude
        anObjectType.dynamic
    }

    if(rType.isDynamic) then {
        anObjectType.dynamic
    } else {
        def rec = req.value.in
        def name = req.value.value

        match(rType.getMethod(name)) case { (noSuchMethod) ->
            RequestError.raiseWith("no such method '{name}' in " ++
                "`{rec.toGrace(0)}` of type '{rType}'", req.value)
        } case { meth : MethodType ->
            for(meth.signature) and(req.with) do { part, args' ->
                def params = part.parameters
                def args   = args'.args

                def pSize = params.size
                def aSize = args.size

                if(aSize != pSize) then {
                    def which = if(aSize > pSize) then { "many" } else { "few" }
                    def where = if(aSize > pSize) then {
                        args.at(pSize + 1)
                    } else {
                        // Can we get beyond the final argument?
                        req.value
                    }

                    RequestError
                        .raiseWith("too {which} arguments to method part " ++
                            "'{part.name}', expected {pSize} but got {aSize}",
                            where)
                }

                for(params) and(args) do { param, arg ->
                    def pType = param.typeAnnotation

                    if(typeOf(arg).isSubtypeOf(pType).not) then {
                        RequestError.raiseWith("the expression " ++
                            "`{arg.toGrace(0)}` does not satisfy the type of" ++
                            " parameter '{param}' in the method '{name}'", arg)
                    }
                }
            }

            meth.returnType
        }
    }
}

rule { memb : Member ->
    def rec = memb.in
    def rType = typeOf(rec)

    if(rType.isDynamic) then {
        anObjectType.dynamic
    } else {
        def name = memb.value

        match(rType.getMethod(name)) case { (noSuchMethod) ->
            RequestError.raiseWith("no such method '{name}' in " ++
                "`{rec.toGrace(0)}` of type '{rType}'", memb)
        } case { meth : MethodType ->
            if((meth.signature.size > 1) ||
                    (meth.signature.first.parameters.size > 0)) then {
                RequestError.raiseWith("cannot access method '{meth}' as " ++
                    "a member, the method requires parameters", memb)
            }

            meth.returnType
        }
    }
}

rule { op : Operator ->
    def rec = op.left
    def rType = typeOf(rec)

    if(rType.isDynamic) then {
        anObjectType.dynamic
    } else {
        def name = op.value

        match(rType.getMethod(name)) case { (noSuchMethod) ->
            RequestError.raiseWith("no such method '{name}' in " ++
                "`{rec.toGrace(0)}` of type '{rType}'", op)
        } case { meth : MethodType ->
            def arg = op.right
            def param = meth.signature.first.parameters.first
            def pType = param.typeAnnotation

            if(typeOf(arg).isSubtypeOf(pType).not) then {
                RequestError.raiseWith("the expression " ++
                    "`{arg.toGrace(0)}` does not satisfy the type of " ++
                    "parameter '{param}' in the method '{name}'", arg)
            }

            meth.returnType
        }
    }
}

rule { index : Index ->
    def rec = index.value
    def rType = typeOf(rec)

    var meth := false

    for(rType.methods) do { meth' ->
        if(meth'.name == "[]") then {
            meth := meth'
        }
    }

    if(meth == false) then {
        RequestError.raiseWith("no such method '[]' in `{rec.toGrace(0)}` " ++
            "of type '{rType}'", index)
    }

    def ind = index.index
    def iType = typeOf(ind)
    def param = meth.signature.first.parameters.first

    if(iType.isSubtypeOf(param.typeAnnotation).not) then {
        RequestError.raiseWith("the expression `{ind.toGrace(0)}` does not " ++
            "satisfy the type of parameter '{param}' in the method '[]'", ind)
    }

    meth.returnType
}

// Special cases.

rule { req : If ->
    def cond = req.value
    if(typeOf(cond).isSubtypeOf(anObjectType.boolean).not) then {
        RequestError.raiseWith("the expression `{cond.toGrace(0)}` does not " ++
            "satisfy the type 'Boolean' for an 'if' condition'", cond)
    }

    def then = anObjectType.fromBlockBody(req.thenblock)
    def else = anObjectType.fromBlockBody(req.elseblock)

    then | else
}

rule { req : MatchCase ->
    def hasElse = req.elsecase != false
    def else = if(hasElse) then {
        anObjectType.fromBlock(req.elsecase)
    } else {
        anObjectType.done
    }

    def cases = req.cases
    if(cases.size == 0) then {
        else
    } else {
        var union := done

        for(cases) do { case ->
            def cType = anObjectType.fromBlock(case)
            union := if(union == done) then {
                cType
            } else {
                union | cType
            }
        }

        if(hasElse) then { union | else } else { union }
    }
}

rule { req : CatchCase ->
    match(req.value) case { bl : BlockLiteral ->
        def params = bl.params
        if(params.size > 0) then {
            RequestError.raiseWith("Too many parameters to catch", bl)
        }
    } else {}

    for(req.cases) do { case ->
        match(case) case { bl : BlockLiteral ->
            def params = bl.params
            if(params.size != 1) then {
                def which = if(params.size == 0)
                    then { "Not enough" } else { "Too many" }

                RequestError.raiseWith("{which} parameters to case of catch",
                    bl)
            }
        } else {}
    }

    if(req.finally != false) then {
        match(req.finally) case { bl : BlockLiteral ->
            def params = bl.params
            if(params.size > 0) then {
                RequestError.raiseWith("Too many parameters to finally", bl)
            }
        } else {}
    }

    anObjectType.done
}


// Method declaration.

def MethodError = TypeError.refine("Method TypeError")

rule { meth : Method ->
    def name = meth.value.value
    def returnType = anObjectType.fromDType(meth.dtype)

    if(meth.body.size == 0) then {
        if(anObjectType.done.isSubtypeOf(returnType).not) then {
            MethodError.raiseWith("the method '{name}' declares a result of " ++
                "type '{returnType}', but has no body", meth)
        }
    } else {
        def lastNode = match(meth.body.last) case { ret : Return ->
            ret.value
        } else { expr ->
            expr
        }

        def lastType = typeOf(lastNode)
        if(lastType.isSubtypeOf(returnType).not) then {
            MethodError.raiseWith("the method '{name}' declares a result of " ++
                "type '{returnType}', but returns an expression of type " ++
                "'{lastType}'", lastNode)
        }
    }

    for(meth.body) do { stmt ->
        stmt.accept(object {
            inherits ast.baseVisitor

            method visitReturn(ret) is override {
                check(ret.value) matches(returnType) inMethod(name)
            }

            method visitMethod(node) is override {
                false
            }
        })
    }

    def sig = meth.signature
    if((sig.size == 1).andAlso { sig.first.params.size == 0 }) then {
        scope.variables.at(name) put(returnType)
    }
}

method check(node) matches(eType : ObjectType)
        inMethod(name : String) -> Done is confidential {
    def aType = typeOf(node)
    if(aType.isSubtypeOf(eType).not) then {
        MethodError.raiseWith("the method '{name}' declares a result of " ++
            "type '{eType}', but returns an expression of type " ++
            "'{aType}'", node)
    }
}


// Type declaration.

rule { typeD : TypeDeclaration ->
    def name = typeD.value
    def oType = anObjectType.fromDType(typeD)

    scope.types.at(name) put(oType)
    scope.variables.at(name) put(anObjectType.pattern)
}


// Class declaration.

def ClassError = TypeError.refine("Class TypeError")

rule { cls : Class ->
    def methods = []

    var isDynamic := false
    for(cls.value) doWithBreak { stmt, break ->
        match(stmt) case { inh : Inherits ->
            def iType = typeOf(inh.value)
            if(iType.isDynamic) then {
                isDynamic := true
                break.apply
            } else {
                for(iType.methods) do { meth ->
                    methods.push(meth)
                }
            }
        } case { meth : Method ->
            methods.push(aMethodType.fromNode(meth))
        } case { defd : Def | Var ->
            for(defd.annotations) do { ann ->
                if((ann.value == "public") || (ann.value == "readable")) then {
                    methods.push(aMethodType.fromNode(defd))
                }
            }
        } else {}
    }

    if(isDynamic) then {
        anObjectType.isDynamic
    } else {
        def name = cls.name.value

        def dType = anObjectType.fromDType(cls.dtype)
        def aType = anObjectType.fromMethods(methods)

        if(aType.isSubtypeOf(dType).not) then {
            ClassError.raiseWith("class '{name}' declares a result of type " ++
                "'{dType}', but constructs an object of type '{aType}'", cls)
        }

        scope.variables.at(name)
            put(anObjectType.fromMethods([aMethodType.fromNode(cls)]))

        aType
    }
}


// Def and var declarations.

def DefError = TypeError.refine("Def TypeError")

rule { defd : Def | Var ->
    var defType := anObjectType.fromDType(defd.dtype)

    def value = defd.value

    if(value != false) then {
        def vType = typeOf(value)

        if(defType.isDynamic && (defd.kind == "defdec")) then {
            defType := vType
        }

        if(vType.isSubtypeOf(defType).not) then {
            DefError.raiseWith("the expression `{value.toGrace(0)}` of type " ++
                "'{vType}' does not satisfy the type of {defd.kind} " ++
                "annotation '{defType}'", value)
        }
    }

    scope.variables.at(defd.name.value) put(defType)
}

rule { bind : Bind ->
    def dest = bind.dest
    def dType = typeOf(dest)

    def value = bind.value
    def vType = typeOf(value)

    if(vType.isSubtypeOf(dType).not) then {
        DefError.raiseWith("the expression `{value.toGrace(0)}` of type " ++
            "'{vType}' does not the satisfy the type '{dType}' of " ++
            "`{dest.toGrace(0)}`", value)
    }
}


// Import declarations.

rule { imp : Import ->
    scope.variables.at(imp.value) put(anObjectType.dynamic)
}


// Block expressions.

rule { block : BlockLiteral ->
    def body = block.body

    def parameters = []
    for(block.params) do { param ->
        parameters.push(aParam.withName(param.value)
            ofType(anObjectType.fromDType(param.dtype)))
    }

    anObjectType.blockTaking(parameters)
        returning(anObjectType.fromBlockBody(body))
}


// Identifier references.

rule { ident : Identifier ->
    scope.variables.find(ident)
}


// Method parameters.

rule { param : Parameter ->
    scope.variables.at(param.value) put(anObjectType.fromDType(param.dtype))
}


// Run the type rules.
method checker(nodes) {
    typeCheck(nodes)
}


// Helper methods.

// Loop over the elements of two collections at once.
method for(a) and(b) do(bl) -> Done {
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
    bl.apply(e, {
        return
    })
}

