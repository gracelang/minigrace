import "ast" as ast
import "errormessages" as errormessages

import "StandardPrelude" as prelude

inherits prelude.methods


// Checker error

def CheckerFailure = Error.refine("CheckerFailure")


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

// Short fail-with-message

// Will be updated with each node examined
var currentLine := 0
method fail(message) {
    CheckerFailure.raiseWith(message, object {
        def line is public = currentLine
        def linePos is public = 1
    })
}
method fail(message)at(p) {
    CheckerFailure.raiseWith(message, p)
}
method fail(message)from(startPos)to(endPos)suggest(sugg) {
    def o = object {
        def line is public = currentLine
        def posStart is public = startPos
        def posEnd is public = endPos
        def suggestions is public = [sugg]
    }
    CheckerFailure.raiseWith(message, o)
}
method fail(message)from(startPos)to(endPos) {
    def o = object {
        def line is public = currentLine
        def posStart is public = startPos
        def posEnd is public = endPos
        def suggestions is public = []
    }
    CheckerFailure.raiseWith(message, o)
}
method fail(msg)when(pat) {
    rule { x ->
        def mat = pat.match(x)
        if (mat.andAlso {mat.result}) then {
            fail(msg)
        }
    }
}
method createSuggestion {
    errormessages.suggestion.new
}
method when(pat)error(msg) {
    fail(msg)when(pat)
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

    method enter(bl) {
        variables.stack.push(aMutableMap.empty)
        methods.stack.push(aMutableMap.empty)
        types.stack.push(aMutableMap.empty)

        def result = bl.apply

        variables.stack.pop
        methods.stack.pop
        types.stack.pop

        return result
    }

    method asString -> String is override {
        "scope<{size}>"
    }
}

method checkTypes(node) {
    node.accept(astVisitor)
}

method typeOf(node) {
    checkTypes(node)
    cache.atKey(node) do { value -> return value }
    CheckerFailure.raiseWith("cannot type non-expression", node)
}

method runRules(node) {
    cache.atKey(node) do { value -> return value }
    currentLine := node.line

    var result := done
    for(rules) do { rule ->
        def matched = rule.match(node)
        if(matched) then {
            def result' = matched.result

            if(done != result') then {
                result := result'
                cache.at(node) put(result)
            }
        }
    }

    return result
}


// Type checker

// Checks the defined rules on the given AST.
method check(nodes) -> Done {
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
                FailedMatch.new(node)
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
def TypeAnnotation is public = aNodePattern.forKind("dtype")
def Method is public = aNodePattern.forKind("method")
def Parameter is public = aNodePattern.forKind("parameter")
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

// Special requests patterns.

class aRequestPattern.forName(name : String) -> Pattern {
    inherits BasicPattern.new

    method match(obj : Object) {
        match(obj) case { node : AstNode ->
            if((node.kind == "call").andAlso {
                node.value.value == name
            }) then {
                SuccessfulMatch.new(node, makeBindings(node))
            } else {
                FailedMatch.new(node)
            }
        } else { FailedMatch.new(obj) }
    }

    method makeBindings(node) { [] }
}

def While is public = object {
    inherits aRequestPattern.forName("while()do")

    method makeBindings(node) -> List is override {
        def sig = node.with
        [node.with[1].args[1], node.with[2].args[1]]
    }
}

def For is public = object {
    inherits aRequestPattern.forName("for()do")

    method makeBindings(node) -> List is override {
        [node.with[1].args[1], node.with[2].args[1]]
    }
}

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
        checkMatch(node)
    }

    method visitBlock(node) -> Boolean {
        runRules(node)

        for(node.params) do { param ->
            runRules(aParameter.fromNode(param))
        }

        for(node.body) do { stmt ->
            stmt.accept(self)
        }

        return false
    }

    method visitMatchCase(node) -> Boolean {
        checkMatch(node)
    }

    method visitCatchCase(node) -> Boolean {
        checkMatch(node)
    }

    method visitMethodType(node) -> Boolean {
        runRules(node)

        for(node.signature) do { part ->
            for(part.params) do { param ->
                runRules(aParameter.fromNode(param))
            }
        }

        return false
    }

    method visitType(node) -> Boolean {
        checkMatch(node)
    }

    method visitMethod(node) -> Boolean {
        runRules(node)

        for(node.signature) do { part ->
            for(part.params) do { param ->
                runRules(aParameter.fromNode(param))
            }
        }

        for(node.body) do { stmt ->
            stmt.accept(self)
        }

        return false
    }

    method visitCall(node) -> Boolean {
        checkMatch(node)

        match(node.value) case { memb : Member ->
            memb.in.accept(self)
        } else {}

        for(node.with) do { part ->
            for(part.args) do { arg ->
                arg.accept(self)
            }
        }

        return false
    }

    method visitClass(node) -> Boolean {
        checkMatch(node)

        for(node.signature) do { part ->
            for(part.params) do { param ->
                runRules(aParameter.fromNode(param))
            }
        }

        if(node.superclass != false) then {
            node.superclass.accept(self)
        }

        for(node.value) do { stmt ->
            stmt.accept(self)
        }

        return false
    }

    method visitObject(node) -> Boolean {
        checkMatch(node)
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

class aTypeAnnotation.fromNode(node) -> TypeAnnotation is confidential {
    def kind is public = "dtype"
    def value is public = node
    def line is public = node.line
    def linePos is public = node.linePos
}

class aParameter.fromNode(node) -> Parameter is confidential {
    def kind is public = "parameter"
    def value is public = node.value
    def dtype is public = node.dtype
    def line is public = node.line
    def linePos is public = node.linePos
}

