#pragma ExtendedLineups
import "errormessages" as errormessages
import "ast" as ast

inherits prelude.methods

// Checker error

def CheckerFailure is public = Exception.refine "CheckerFailure"


// Helper Map

class entryFrom(key') to(value') is confidential {
    def key is public = key'
    var value is public := value'
}

class aMutableMap {

    def entries = []

    method isEmpty -> Boolean { size == 0 }

    method size -> Number { entries.size }

    method at(key) {
        atKey(key) do { value -> return value }

        NoSuchObject.raise "no key {key} in aMutableMap"
    }

    method at(key) put(value) -> Done {
        for(entries) do { entry ->
            if(entry.key == key) then {
                entry.value := value
                return done
            }
        }

        entries.push(entryFrom(key) to(value))
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
def cache = aMutableMap

// Creates a new type rule.
method rule(block) -> Done {
    rules.push(block)
}

// Short fail-with-message

// Will be updated with each node examined
var currentLine := 0
method fail(message) {
    CheckerFailure.raise (message) with (object {
        def line is public = currentLine
        def linePos is public = 1
    })
}
method fail(message)at(p) {
    CheckerFailure.raise (message) with (p)
}
method fail(message)from(startPos)to(endPos)suggest(sugg) {
    def o = object {
        def line is public = currentLine
        def posStart is public = startPos
        def posEnd is public = endPos
        def suggestions is public = [sugg]
    }
    CheckerFailure.raise (message) with (o)
}
method fail(message)from(startPos)to(endPos) {
    def o = object {
        def line is public = currentLine
        def posStart is public = startPos
        def posEnd is public = endPos
        def suggestions is public = []
    }
    CheckerFailure.raise (message) with (o)
}
method fail(msg)when(pat) {
    rule { x ->
        def mat = pat.match(x)
        if (mat && {mat.result}) then {
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

class stackOfKind(kind : String) is confidential {
    def stack is public = [aMutableMap]

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

def scope is public = object {
    def variables is public = stackOfKind("variable")
    def methods is public = stackOfKind("method")
    def types is public = stackOfKind("type")

    method size -> Number {
        variables.stack.size
    }

    method enter(bl) {
        variables.stack.push(aMutableMap)
        methods.stack.push(aMutableMap)
        types.stack.push(aMutableMap)

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
    CheckerFailure.raise "cannot type non-expression" with (node)
}

method runRules(node) {
    // apply all rules to node; returns the last SuccessfulMatch.
    // if there is no successful match, returns FailedMatch(node).
    cache.atKey(node) do { value -> return value }
    currentLine := node.line

    var result := FailedMatch.new(node)
    for(rules) do { each ->
        def matched = each.match(node)
        if(matched) then {
            result := matched.result
            cache.at(node) put(result)
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

class aPatternMatchingNode(kind : String) -> Pattern {
    inherits BasicPattern.new

    method match(obj : Object) {
        match(obj) 
          case { node : AstNode ->
            if(kind == node.kind) then {
                SuccessfulMatch.new(node, [])
            } else {
                FailedMatch.new(node)
            }
          } case { _ -> FailedMatch.new(obj) }
    }
}

def If is public = aPatternMatchingNode "if"
def BlockLiteral is public = aPatternMatchingNode "block"
def MatchCase is public = aPatternMatchingNode "matchcase"
def TryCatch is public = aPatternMatchingNode "trycatch"
def MethodSignature is public = aPatternMatchingNode "methodtype"
def TypeLiteral is public = aPatternMatchingNode "typeliteral"
def TypeDeclaration is public = aPatternMatchingNode "typedec"
def TypeAnnotation is public = aPatternMatchingNode "dtype"
def Method is public = aPatternMatchingNode "method"
def Parameter is public = aPatternMatchingNode "parameter"
def Request is public = aPatternMatchingNode "call"
def Class is public = aPatternMatchingNode "class"
def ObjectLiteral is public = aPatternMatchingNode "object"
def ArrayLiteral is public = aPatternMatchingNode "array"
def Member is public = aPatternMatchingNode "member"
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
def Inherits is public = aPatternMatchingNode "inherits"

// Special requests patterns.

class RequestOf(methodName:String) -> Pattern {

    inherits prelude.BasicPattern.new

    method match(obj : Object) {
        match(obj) 
          case { node : AstNode ->
            if((node.kind == "call") && {
                node.value.value == methodName
            }) then {
                SuccessfulMatch.new(node, makeBindings(node))
            } else {
                FailedMatch.new(node)
            }
          } case { _ -> FailedMatch.new(obj)
          }
    }

    method makeBindings(node) { [] }
}

def WhileRequest is public = RequestOf "while()do"
def ForRequest is public = RequestOf "for()do"

method whileCond(node) {
    // answers the condition expression from node, which must be a
    // a callNode calling "while(_)do(_)"
    def sig = node.with
    sig.first.args.first
}

method whileBody(node) {
    // answers the body expression from node, which must be a
    // a callNode calling "while(_)do(_)"
    def sig = node.with
    sig.second.args.first
}

method forCollection(node) {
    // answers the collection expression from node, which must be a
    // a callNode calling "for(_)do(_)"
    def sig = node.with
    sig.first.args.first
}

method forBody(node) {
    // answers the body expression from node, which must be a
    // a callNode calling "for(_)do(_)"
    def sig = node.with
    sig.second.args.first
}

def astVisitor = object {
    inherits ast.baseVisitor

    method checkMatch(node) -> Boolean {
        runRules(node)
        return true
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

    method visitTryCatch(node) -> Boolean {
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
        } case { _ -> }

        for(node.with) do { part ->
            for(part.args) do { arg ->
                arg.accept(self)
            }
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

def aTypeAnnotation is confidential = object {
    class fromNode(node) -> TypeAnnotation {
        def kind is public = "dtype"
        def value is public = node
        def line is public = node.line
        def linePos is public = node.linePos
        method == (o) { self.isMe(o) }
    }
}

def aParameter is confidential = object {
    class fromNode(node) -> Parameter {
        def kind is public = "parameter"
        def value is public = node.value
        def dtype is public = node.dtype
        def line is public = node.line
        def linePos is public = node.linePos
        method == (o) { self.isMe(o) }
    }
}

