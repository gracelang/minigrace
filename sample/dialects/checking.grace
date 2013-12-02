import "ast" as ast

import "StandardPrelude" as prelude

inherits prelude.new


// Checker error

def CheckerFailure = Error.refine("CheckerFailure")

def InternalError = CheckerFailure.refine("InternalError")


// Helper Map

def MapException = Exception.refine("MapException")

class anEntry.from(key') to(value') is confidential {
    def key is public = key'
    var value is public := value'
}

class aMutableMap.empty {

    def entries = []

    method isEmpty -> Boolean { size == 0 }

    method size -> Number { entries.size }

    method at(key) {
        atKey(key) do { value -> return value }

        MapException.raise("No such value at key {key}")
    }

    method at(key) put(value) -> Done {
        for(entries) do { entry ->
            if(entry.key == key) then {
                entry.value := value
                return done
            }
        }

        entries.push(anEntry.from(key) to(value))
    }

    method keys -> List {
        def keys' = []

        for(entries) do { entry ->
            keys'.push(entry.key)
        }

        return keys'
    }

    method values -> List {
        def values' = []

        for(entries) do { entry ->
            values'.push(entry.value)
        }

        return values'
    }

    method containsKey(key) -> Boolean {
        atKey(key) do { _ -> return true }

        return false
    }

    method atKey(key) do(block) -> Done {
        atKey(key) do(block) else {}
        return
    }

    method atKey(key) do(block) else(block') {
        for(entries) do { entry ->
            if(entry.key == key) then {
                return block.apply(entry.value)
            }
        }

        return block'.apply
    }

    method asString -> String is override {
        if(isEmpty) then {
            return "\{\}"
        }

        var out := "\{"

        var once := false
        for(entries) do { entry ->
            if(once) then {
                out := "{out},"
            }
            out := "{out} {entry.key} => {entry.value}"
            once := true
        }

        return "{out} \}"
    }

}



// Rules

// The defined type rules.
def rules = []

// The cached type assignments.
def cache = aMutableMap.empty

// Creates a new type rule.
method rule(block) -> Done {
    rules.push(block)
}


// Scope

class aStack.ofKind(kind : String) is confidential {
    def stack is public = [aMutableMap.empty]

    method at(name : String) put(value) -> Done {
        stack.last.at(name) put(value)
    }

    method find(name : String) butIfMissing(bl) {
        var i := stack.size
        while { i > 0 } do {
            stack.at(i).atKey(name) do { value ->
                return value
            }

            i := i - 1
        }

        return bl.apply
    }

}

def scope = object {
    def variables is public = aStack.ofKind("variable")
    def methods is public = aStack.ofKind("method")
    def types is public = aStack.ofKind("type")

    method size -> Number {
        variables.stack.size
    }

    method enter(bl) -> Done {
        variables.stack.push(aMutableMap.empty)
        methods.stack.push(aMutableMap.empty)
        types.stack.push(aMutableMap.empty)
        bl.apply
        variables.stack.pop
        methods.stack.pop
        types.stack.pop
        done
    }
}

method typeOf(node) {
    node.accept(astVisitor)
    cache.atKey(node) do { value -> return value }
    Error.raise("unrecognised expression node {node.kind}")
}

method runRules(node) {
    cache.atKey(node) do { value -> return value }

    for(rules) do { rule ->
        def matched = rule.match(node)
        if(matched) then {
            def result = matched.result

            if(done != result) then {
                cache.at(node) put(result)
            }

            return result
        }
    }

    return false
}


// Type checker

// Checks the defined rules on the given AST.
method typeCheck(nodes) -> Done {
    // Sets the baseType.
    ast.objectNode.new([], false).accept(astVisitor)

    // Runs the check on the module object.
    ast.objectNode.new(nodes, false).accept(astVisitor)
}

type AstNode = { kind -> String }

class aNodePattern.forKind(kind : String) -> Pattern {
    inherits BasicPattern.new

    method match(obj : Object) {
        match(obj) case { node : AstNode ->
            if(kind == node.kind) then {
                SuccessfulMatch.new(node, [])
            } else {
                FailedMatch.new(obj)
            }
        } else { FailedMatch.new(obj) }
    }
}

def If is public = aNodePattern.forKind("if")
def BlockLiteral is public = aNodePattern.forKind("block")
def MatchCase is public = aNodePattern.forKind("matchcase")
def CatchCase is public = aNodePattern.forKind("catchcase")
def MethodSignature is public = aNodePattern.forKind("methodtype")
def TypeDeclaration is public = aNodePattern.forKind("type")
def Method is public = aNodePattern.forKind("method")
def Request is public = aNodePattern.forKind("call")
def Class is public = aNodePattern.forKind("class")
def ObjectLiteral is public = aNodePattern.forKind("object")
def ArrayLiteral is public = aNodePattern.forKind("array")
def Member is public = aNodePattern.forKind("member")
def Generic is public = aNodePattern.forKind("generic")
def Identifier is public = aNodePattern.forKind("identifier")
def OctetsLiteral is public = aNodePattern.forKind("octets")
def StringLiteral is public = aNodePattern.forKind("string")
def NumberLiteral is public = aNodePattern.forKind("num")
def Operator is public = aNodePattern.forKind("op")
def Index is public = aNodePattern.forKind("index")
def Bind is public = aNodePattern.forKind("bind")
def Def is public = aNodePattern.forKind("defdec")
def Var is public = aNodePattern.forKind("vardec")
def Import is public = aNodePattern.forKind("import")
def Dialect is public = aNodePattern.forKind("dialect")
def Return is public = aNodePattern.forKind("return")
def Inherits is public = aNodePattern.forKind("inherits")
def Parameter is public = aNodePattern.forKind("parameter")

def astVisitor = object {

    method checkMatch(node) -> Boolean {
        runRules(node)
        return true
    }

    method visitFor(node) -> Boolean {
        Error.raise("for is no longer special-cased")
    }

    method visitWhile(node) -> Boolean {
        Error.raise("while is no longer special-cased")
    }

    method visitIf(node) -> Boolean {
        node.value.accept(self)

        scope.enter {
            for(node.thenblock) do { stmt ->
                stmt.accept(self)
            }
        }

        scope.enter {
            for(node.elseblock) do { stmt ->
                stmt.accept(self)
            }
        }

        checkMatch(node)

        return false
    }

    method visitBlock(node) -> Boolean {
        scope.enter {
            for(node.params) do { param ->
                checkMatch(object {
                    def kind : String is public = "parameter"
                    def value : String is public = param.value
                    def dtype is public = param.dtype
                    def line : Number is public = param.line
                    def linePos : Number is public = param.linePos
                })
            }

            for(node.body) do { stmt ->
                stmt.accept(self)
            }
        }

        checkMatch(node)

        return false
    }

    method visitMatchCase(node) -> Boolean {
        node.value.accept(self)

        for(node.cases) do { case ->
            case.accept(self)
        }

        if(node.elsecase != false) then {
            node.elsecase.accept(self)
        }

        checkMatch(node)

        return false
    }

    method visitCatchCase(node) -> Boolean {
        checkMatch(node)
    }

    method visitMethodType(node) -> Boolean {
        checkMatch(node)

        return false
    }

    method visitType(node) -> Boolean {
        checkMatch(node)
    }

    method visitMethod(node) -> Boolean {
        scope.enter {
            for(node.signature) do { part ->
                for(part.params) do { param ->
                    checkMatch(object {
                        def kind : String is public = "parameter"
                        def value : String is public = param.value
                        def dtype is public = param.dtype
                        def line : Number is public = param.line
                        def linePos : Number is public = param.linePos
                    })
                }
            }

            for(node.body) do { stmt ->
                stmt.accept(self)
            }
        }

        checkMatch(node)

        return false
    }

    method visitCall(node) -> Boolean {
        match(node.value) case { memb : Member ->
            memb.in.accept(self)
        } else {}

        for(node.with) do { part ->
            for(part.args) do { arg ->
                arg.accept(self)
            }
        }

        checkMatch(node)

        return false
    }

    var baseType := false

    method visitClass(node) -> Boolean {
        checkMatch(node)

        scope.enter {
            cache.atKey(node) do { cType ->
                scope.variables.at("self") put(cType)

                for(cType.methods) do { meth ->
                    def sig = meth.signature
                    if(sig.size == 1) then {
                        if(sig.first.parameters.size == 0) then {
                            scope.variables.at(meth.name) put(meth.returnType)
                        }
                    }
                }
            }

            for(node.signature) do { part ->
                for(part.params) do { param ->
                    checkMatch(object {
                        def kind : String is public = "parameter"
                        def value : String is public = param.value
                        def dtype is public = param.dtype
                        def line : Number is public = param.line
                        def linePos : Number is public = param.linePos
                    })
                }
            }

            def body = node.value
            scope.variables.at("super")
                put(if((body.size > 0).andAlso {
                    Inherits.match(body.first)
                }) then { typeOf(body.first.value) } else { baseType })

            for(body) do { stmt ->
                stmt.accept(self)
            }
        }

        return false
    }

    method visitObject(node) -> Boolean {
        checkMatch(node)

        scope.enter {
            cache.atKey(node) do { oType ->
                scope.variables.at("self") put(oType)

                for(oType.methods) do { meth ->
                    def sig = meth.signature
                    if(sig.size == 1) then {
                        if(sig.first.parameters.size == 0) then {
                            scope.variables.at(meth.name) put(meth.returnType)
                        }
                    }
                }

                if(baseType == false) then {
                    baseType := oType
                }
            }

            def body = node.value
            scope.variables.at("super")
                put(if((body.size > 0).andAlso {
                    Inherits.match(body.first)
                }) then { typeOf(body.first.value) } else { baseType })

            for(body) do { stmt ->
                stmt.accept(self)
            }
        }

        return false
    }

    method visitArray(node) -> Boolean {
        checkMatch(node)
    }

    method visitMember(node) -> Boolean {
        checkMatch(node)
    }

    method visitGeneric(node) -> Boolean {
        checkMatch(node)
    }

    method visitIdentifier(node) -> Boolean {
        checkMatch(node)
    }

    method visitOctets(node) -> Boolean {
        checkMatch(node)
    }

    method visitString(node) -> Boolean {
        checkMatch(node)
    }

    method visitNum(node) -> Boolean {
        checkMatch(node)
    }

    method visitOp(node) -> Boolean {
        checkMatch(node)
    }

    method visitIndex(node) -> Boolean {
        checkMatch(node)
    }

    method visitBind(node) -> Boolean {
        checkMatch(node)
    }

    method visitDefDec(node) -> Boolean {
        checkMatch(node)
    }

    method visitVarDec(node) -> Boolean {
        checkMatch(node)
    }

    method visitImport(node) -> Boolean {
        checkMatch(node)
    }

    method visitReturn(node) -> Boolean {
        checkMatch(node)
    }

    method visitInherits(node) -> Boolean {
        checkMatch(node)
    }

    method visitDialect(node) -> Boolean {
        checkMatch(node)
    }

}

