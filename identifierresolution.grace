#pragma ExtendedLineups
import "io" as io
import "sys" as sys
import "ast" as ast
import "util" as util
import "xmodule" as xmodule
import "stringMap" as map
import "mirrors" as mirrors
import "errormessages" as errormessages
import "identifierKinds" as k

def completed = Singleton.named "completed"
def inProgress = Singleton.named "inProgress"
def undiscovered = Singleton.named "undiscovered"
// constants used in detecting cyclic inheritance

var stSerial := 100

def reserved = sequence ["self", "super", "outer", "true", "false"]
// reserved names that cannot be re-assigned or re-declared

method newScopeKind(variety') {
    // for the top of the scope chain
    def s = newScopeIn(object {})kind(variety')
    s.hasParent := false
    s
}

def keyOrdering = { a, b -> a.key.compare(b.key) }

type DeclKind = k.T

class newScopeIn(parent') kind(variety') {
    def elements is public = map.new
    def elementScopes is public = map.new
    def elementLines is public = map.new
    def elementTokens is public = map.new
    def parent is public = parent'
    var hasParent is public := true
    def variety is public = variety'
    var node is public := ast.nullNode      // the outermost ast node that I'm in
    var inheritedNames is public := undiscovered
    stSerial := stSerial + 1
    def serialNumber is public = stSerial
    def hash is public = serialNumber.hash

    if (isObjectScope) then {
        addName "self" asA(k.selfDef)
        at "self" putScope(self)
    }
    method == (other) { self.isMe(other) }
    method isEmpty { elements.size == 0 }
    method addName(n) {
        elements.put(n, k.methdec)
        elementLines.put(n, util.linenum)
    }
    method addName (n) asA (kind:DeclKind) {
        def oldKind = elements.get(n) ifAbsent {
            elements.put(n, kind)
            elementLines.put(n, util.linenum)
            return
        }
        if (kind.isImplicit) then {
            return  // don't overwrite local id with id from trait or super
        }
        if (oldKind.isImplicit)  then {
            elements.put(n, kind)
            elementLines.put(n, util.linenum)
            return
        }
        errormessages.syntaxError("'{n}' cannot be" ++
            " redefined as {kind} because it is already declared as {oldKind}")
            atRange(util.linenum, util.linepos, util.linepos + n.size - 1)
    }
    method addNode (nd) asA (kind) {
        def ndName = nd.value
        checkShadowing(nd) asA(kind)
        def oldKind = elements.get(ndName) ifAbsent {
            elements.put(ndName, kind)
            elementLines.put(ndName, nd.line)
            return
        }
        if (kind.isImplicit) then {
            return  // don't overwrite local id with id from trait or super
        }
        if (oldKind.isImplicit)  then {
            elements.put(ndName, kind)
            elementLines.put(ndName, nd.line)
            return
        }
        var more := " in this scope"
        if (elementLines.contains(ndName)) then {
            more := " as a {oldKind}"
                ++ " on line {elementLines.get(ndName)}"
        }
        errormessages.syntaxError("'{nd.canonicalName}' cannot be"
            ++ " redeclared because it is already declared" ++ more )
            atRange(nd.range)
    }
    method contains (n) {
        if (elements.contains(n)) then { return true }
        if (isInBeginningStudentDialect.not) then { return false }
        if (self ≠ preludeScope) then { return false }
        return isSpecial(n)
    }
    method withSurroundingScopesDo (b) {
        // do b in this scope and all surounding scopes.
        var cur := self
        while {b.apply(cur); cur.hasParent} do {
            cur := cur.parent
        }
    }
    method keysAsList {
        def result = emptyList
        elements.keysDo { each -> result.addLast(each) }
        result
    }
    method keysAndKindsDo (action) {
        elements.keysAndValuesDo(action)
    }
    method kind (n) {
        if { isInBeginningStudentDialect } then {
            if (isSpecial(n)) then { return k.methdec }
        }
        elements.get(n)
    }
    method kind (n) ifAbsent (action) {
        if { isInBeginningStudentDialect } then {
            if (isSpecial(n)) then { return k.methdec }
        }
        elements.get(n) ifAbsent (action)
    }
    method at(n) putScope(scp) {
        elementScopes.put(n, scp)
    }
    method getScope(n) {
        if (elementScopes.contains(n)) then {
            return elementScopes.get(n)
        }
//        util.log 70 verbose ("scope {self}: elements.contains({n}) = {elements.contains(n)}" ++
//              " but elementScopes.contains({n}) = {elementScopes.contains(n)}")
        //  This occurs for names like `true` that are built-in, but for which there
        //  is no symbolTable describing their atttributes.
        //  TODO: add complete information for the built-in names.
        //  in the meantime:
        return universalScope
    }
    method asStringWithParents {
        var result := "\nCurrent: {self}"
        var s := self
        while {s.hasParent} do {
            s := s.parent
            result := result ++ "\nParent: {s}"
        }
        result ++ "\n"
    }
    method asString {
        var result := "({variety} ST: "
        withSurroundingScopesDo { each ->
            result := result ++ each.serialNumber
            if (each.hasParent) then { result := result ++ "➞" }
        }
        result := result ++  "):\n    "
        elements.bindings.sortBy(keyOrdering).do { each ->
            result := "{result} {each.key}({kind(each.key)}) "
        }
        result ++ "\n"
    }

    method asDebugString { "(ST {serialNumber})" }

    method elementScopesAsString {
        def referencedScopes = emptySet
        var result := "\n    [elementScopes:"
        elementScopes.bindings.sortBy(keyOrdering).do { each ->
            result := "{result} {each.key}➞{each.value.asDebugString}"
            referencedScopes.add (each.value)
        }
        result := result ++ "]\n____________\n"
        list(referencedScopes)
            .sortBy { a, b -> a.serialNumber.compare(b.serialNumber) }
                .do { each -> result := result ++ each.asString }
        result ++ "____________\n"
    }
    method hasDefinitionInNest(nm) {
        withSurroundingScopesDo { s ->
            if (s.contains(nm)) then {
                return true
            }
        }
        if { isInBeginningStudentDialect } then {
            if (isSpecial(nm)) then { return true }
        }
        return false
    }
    method kindInNest(nm) {
        // NEVER answers `inherited` or `fromTrait` !
        withSurroundingScopesDo {s->
            if (s.contains(nm)) then {
                def kd = s.kind(nm)
                if (kd.fromParent) then {
                    return k.methdec
                } else {
                    return kd
                }
            }
        }
        if { isInBeginningStudentDialect } then {
            if (isSpecial(nm)) then { return k.methdec }
        }
        return k.undefined
    }
    method scopeInNest(nm) {
        // answers the elementScope associated with nm, or universalScope
        // if there is none

        withSurroundingScopesDo { s->
            if (s.contains(nm)) then {
                return s.getScope(nm)
            }
        }
        if { isInBeginningStudentDialect } then {
            if (isSpecial(nm)) then { return preludeScope }
        }
        return universalScope
    }
    method thatDefines(name) ifNone(action) {
        withSurroundingScopesDo { s->
            if (s.contains(name)) then { return s }
        }
        if { isInBeginningStudentDialect } then {
            if (isSpecial(name)) then { return preludeScope }
        }
        action.apply
    }
    method thatDefines(name) {
        withSurroundingScopesDo { s->
            if (s.contains(name)) then { return s }
        }
        if { isInBeginningStudentDialect } then {
            if (isSpecial(name)) then { return preludeScope }
        }
        print(self.asStringWithParents)
        ProgrammingError.raise "no scope defines {name}"
    }
    method receiverScope(rcvrNode) {
        // rcvrNode is the receiver of a request. Answer the scope
        // associated with it.  So, if the receiver is a.b.c,
        // find the scope associated with c in the scope associated with b
        // in the scope associated with a in this scope.  Answers
        // universalScope if we don't have enough information to be exact.

        if (rcvrNode.isIdentifier) then {
            scopeInNest(rcvrNode.nameString)
        } elseif { rcvrNode.isCall } then {
            receiverScope(rcvrNode.receiver).getScope(rcvrNode.nameString)
        } elseif { rcvrNode.isOuter } then {
            var resultScope := rcvrNode.scope.enclosingObjectScope  // self's scope
            repeat (rcvrNode.numberOfLevels) times {
                resultScope := resultScope.enclosingObjectScope
            }
            resultScope
        } elseif { rcvrNode.isConstant } then {
            universalScope  //  TODO: deine scopes for strings and numbers
        } else {
            ProgrammingError.raise("unexpected receiver {rcvrNode.toGrace 0} " ++
                  "on line {rcvrNode.line}")
        }
    }
    method isInSameObjectAs (enclosingScope) {
        if (self == enclosingScope) then { return true }
        if (self.parent.isObjectScope) then { return false }
        self.parent.isInSameObjectAs(enclosingScope)
    }
    method isObjectScope {
        if (variety == "object") then { return true }
        if (variety == "module") then { return true }
        if (variety == "dialect") then { return true }
        if (variety == "class") then { return true }
        if (variety == "built-in") then { return true }
        false
    }
    method isMethodScope {
        variety == "method"
    }
    method isModuleScope {
        variety == "module"
    }
    method isInheritableScope {
        "class | object".contains(variety)
    }
    method resolveOuterMethod(name) fromNode (aNode) {
        // replace name by a request with receiver self, or an outerNode

        def outerChain = [ ]
        withSurroundingScopesDo { s->
            if (s.contains(name)) then {
                if (s.variety == "dialect") then {
                    return ast.memberNode.new(name,
                          ast.identifierNode.new("prelude", false)
                                scope(self)) scope(self).onSelf
                } elseif { s.variety == "module" } then {
                    return ast.memberNode.new(name, thisModule) scope(self).onSelf
                }
                def rcvr = if (outerChain.isEmpty) then {
                    ast.identifierNode.new("self", false) scope(self).
                          setStart(ast.noPosition)
                } else {
                    ast.outerNode(outerChain).setScope(self).
                          setStart(ast.noPosition)
                }
                return ast.memberNode.new(name, rcvr).setScope(self).
                      setPositionFrom(aNode).onSelf
            }
            if (s.variety == "object") then {
                def definingObjNode = s.node
                if (outerChain.isEmpty.not && {outerChain.last == definingObjNode}) then {
                    ProgrammingError.raise "adding {definingObjNode} twice"
                } else {
                    outerChain.addLast(s.node)
                }
            }
        }

        if (aNode.nameString == "explOde(1)") then {
            ProgrammingError.raise "the compiler exploded."
        }
        errormessages.syntaxError "there is no method {aNode.canonicalName}."
                atRange(aNode.range)
    }
    method isSpecial(name) is confidential {
        if (name.startsWith "list") then {
            endsWithParenthesizedNumber(name, 5)
        } elseif { name.startsWith "set" } then {
            endsWithParenthesizedNumber(name, 4)
        } elseif { name.startsWith "sequence" } then {
            endsWithParenthesizedNumber(name, 9)
        } elseif { name.startsWith "dictionary" } then {
            endsWithParenthesizedNumber(name, 11)
        } else {
            false
        }
    }
    method endsWithParenthesizedNumber(name, startIndex) is confidential {
        def sz = name.size
        if ( startIndex ≥ sz ) then { return false }
        if ( name.at(startIndex) ≠ "(" ) then { return false }
        var i := startIndex + 1
        while { name.at(i).startsWithDigit } do {
            i := i + 1
            if (i > sz) then { return false }
        }
        ( name.at(i) == ")" ) && ( i == sz )
    }
    method scopeReferencedBy(nd:ast.AstNode) {
        // Finds the scope referenced by astNode nd.
        // If nd references an object, then the returned
        // scope will have bindings for the methods of that object.
        // Otherwise, it will be the empty scope.

        if (nd.isIdentifier) then {
            def sought = nd.nameString
            if (sought == "outer") then {
                return parent.enclosingObjectScope
            }
            withSurroundingScopesDo {s->
                if (s.contains(sought)) then {
                    return s.getScope(sought)
                }
            }
            if (nd.nameString == "explOde(1)") then {
                ProgrammingError.raise "the compiler exploded."
            }
            errormessages.syntaxError "no method {nd.canonicalName}."
                  atRange (nd.range)
        } elseif {nd.kind == "outer"} then {
            nd.theObjects.last.scope
        } elseif {nd.kind == "op"} then {
            def receiverScope = self.scopeReferencedBy(nd.left)
            receiverScope.scopeReferencedBy(nd.asIdentifier)
        } elseif {nd.isCall} then { // this includes "memberNodes"
            def receiver = nd.receiver
            if (receiver.isImplicit) then {
                util.log 60 verbose "inherit from implicit.{nd.nameString} on line {nd.line}"
            }
            def newNd = transformCall(nd)
            def receiverScope = self.scopeReferencedBy(newNd.receiver)
            receiverScope.scopeReferencedBy(newNd.asIdentifier)
        } else {
            ProgrammingError.raise("{nd.nameString} is not a Call, Member, Identifier, Outer or Op node.\n"
                    ++ nd.pretty(0))
        }
    }
    method enclosingObjectScope {
        // Answer the closest enclosing scope that describes an
        // object, class or module.  Could answer self.
        withSurroundingScopesDo { s ->
            if (s.isObjectScope) then { return s }
        }
        ProgrammingError.raise "no object scope found!"
        // the outermost scope should always be a module scope,
        // which is an object scope.
    }
    method inSameContextAs(encScope) {
        // Is this scope within the same context as encScope?
        // i.e. within the same method and object?
        if (encScope.isObjectScope) then { return false }
        withSurroundingScopesDo { s ->
            if (s == encScope) then { return true }
            if (s.isObjectScope) then { return false }
            if (s.isMethodScope) then { return false }
        }
        ProgrammingError.raise "self = {self}; encScope = {encScope}"
    }
    method isUniversal { false }
    method checkShadowing(ident) asA(newKind) {
        def name = ident.nameString
        def priorScope = thatDefines(name) ifNone {
            return
        }
        def description = if (priorScope == self) then {
            "this"
        } else {
            "an enclosing {priorScope.variety}"
        }
        def priorKind = priorScope.kind(name)
        if (priorScope.isObjectScope && {self.isObjectScope}) then {
            return
        }
        // new object attributes can shadow old, but other shadowing is illegal
        var more := ""
        if (priorScope.elementLines.contains(name)) then {
            def ln = priorScope.elementLines.get(name)
            if (ln > 0) then {
                more := " on line {priorScope.elementLines.get(name)}"
            }
        }
        if (newKind == k.vardec) then {
            def suggs = [ ]
            def sugg = errormessages.suggestion.new
            if (sugg.replaceUntil("=")with("{name} :=")
                    onLine(ident.line)
                ) then {
                suggs.push(sugg)
            }
            if (priorKind == k.vardec) then {
                more := more ++ ". To assign to the existing variable, remove 'var'"
            }
            errormessages.syntaxError("'{ident.canonicalName}' cannot be "
                ++ "redeclared because it is already declared in "
                ++ "{description} scope{more}.")
                atRange(ident.range)
                withSuggestions(suggs)
        } else {
            errormessages.syntaxError("'{ident.canonicalName}' cannot be "
                ++ "redeclared because it is already declared in "
                ++ "{description} scope{more}. Use a different name.")
                atRange(ident.range)
        }
    }
}

def emptyScope = newScopeKind("empty")
ast.nullNode.scope := emptyScope      // TODO: eliminate!
def builtInsScope = newScopeIn(emptyScope) kind "built-in"
def preludeScope = newScopeIn(builtInsScope) kind "dialect"
def moduleScope = newScopeIn(preludeScope) kind "module"
def graceObjectScope = newScopeIn(emptyScope) kind "object"
def booleanScope = newScopeIn(builtInsScope) kind "object"
def varFieldDecls = []   // a list of declarations of var fields

util.setPosition(0, 0)
def thisModule = ast.identifierNode.new("module()object", false)
                                       scope(moduleScope)
    // a hack to give us a way of referring to this module,
    // other than by a chain of `outer`s.  The name is one that
    // cannot occur naturally in a program
moduleScope.addName "module()object" asA (k.defdec)
moduleScope.at "module()object" putScope(moduleScope)

def universalScope = object {
    // The scope that defines every identifier,
    // used when we have no information about an object
    inherit newScopeIn(emptyScope) kind "universal"
    method hasParent { false }
    method parent { ProgrammingError.raise "universal scope has no parent" }
    method addName(n) { ProgrammingError.raise "can't add to the universal scope" }
    method addName(n)asA(kd) { ProgrammingError.raise "can't add to the universal scope" }
    method addNode(n)asA(kd) { ProgrammingError.raise "can't add to the universal scope" }
    method contains(n) { true }
    method withSurroundingScopesDo(b) { b.apply(self) }
    method kind(n) { "unknown" }
    method at(n) putScope(scp) { }
    method getScope(n) { self }
    method isUniversal { true }
}

method rewritematchblockterm(arg) {
    // arg is an AstNode prepresenting the pattern from a pattern-block
    // Answer a pair consisting of a new AstNode that does the pattren-match,
    // and a list of bindings.
    util.setPosition(arg.line, arg.linePos)
    if (arg.kind == "num") then {
        return [arg, [] ]
    }
    if (arg.kind == "string") then {
        return [arg, [] ]
    }
    if (arg.kind == "boolean") then {
        return [arg, [] ]
    }
    if ((arg.kind == "call") && {arg.receiver.nameString.substringFrom(1)to(6)
        == "prefix"}) then {
        return [arg, [] ]
    }
    if (arg.kind == "member") then {
        return [arg, [] ]
    }
    if (arg.kind == "call") then {
        def bindings = []
        def subpats = []
        for (arg.parts) do { part ->
            for (part.args) do { a ->
                def tmp = rewritematchblockterm(a)
                subpats.push(tmp.first)
                for (tmp.second) do {b->
                    bindings.push(b)
                }
            }
        }
        def callpat = ast.callNode.new(
                ast.memberNode.new("MatchAndDestructuringPattern",
                    ast.identifierNode.new("prelude", false)),
            [ast.requestPart.request "new" withArgs( [arg.receiver, ast.arrayNode.new(subpats)] )]
        )
        return [callpat, bindings]
    }
    if (arg.isIdentifier) then {
        def varpat = ast.callNode.new(
                ast.memberNode.new("VariablePattern",
                    ast.identifierNode.new("prelude", false)),
            [ast.requestPart.request "new" withArgs( [ast.stringNode.new(arg.value)] )]
        )
        if (false != arg.dtype) then {
            if (arg.dtype.isIdentifier) then {
                return [ast.callNode.new(
                        ast.memberNode.new("AndPattern",
                            ast.identifierNode.new("prelude", false)),
                    [ast.requestPart.request "new" withArgs( [varpat, arg.dtype] )]
                ), [arg] ]
            }
            def tmp = rewritematchblockterm(arg.dtype)
            def bindings = [arg]
            for (tmp.second) do {b->
                bindings.push(b)
            }
            def bindingpat = ast.callNode.new(
                    ast.memberNode.new("AndPattern",
                        ast.identifierNode.new("prelude", false)),
                [ast.requestPart.request "new" withArgs( [varpat, tmp.first ] )]
            )
            return [bindingpat, bindings]
        }
        return [varpat, [arg] ]
    }
    if (arg.kind == "typeliteral") then {
        return [arg, [] ]
    }
    ProgrammingError.raise("Internal error in compiler: fell through when rewriting "
        ++ "match block of unexpected kind '{arg.kind}'.")
}
method rewritematchblock(blk) {
    def arg = blk.params.first
    var pattern := false
    var newparams := [ ]
    for (blk.params) do { p ->
        newparams.push(p)
    }
    if ((arg.kind == "num") || (arg.kind == "string") ||
        (arg.kind == "boolean")) then {
        def tmp = rewritematchblockterm(arg)
        pattern := tmp.first
        newparams := tmp.second
    }
    if (arg.kind == "identifier") then {
        def varpat = ast.callNode.new(
                ast.memberNode.new("VariablePattern",
                    ast.identifierNode.new("prelude", false)),
            [ast.requestPart.request "new" withArgs( [ast.stringNode.new(arg.value)] )] )
        if (false != arg.dtype) then {
            match (arg.dtype.kind)
              case { "identifier" | "op" ->
                pattern := ast.callNode.new(
                        ast.memberNode.new("AndPattern",
                            ast.identifierNode.new("prelude", false)),
                    [ast.requestPart.request "new" withArgs( [varpat, arg.dtype] )] )
            } case { _ ->
                def tmp = rewritematchblockterm(arg.dtype)
                def bindingpat = ast.callNode.new(
                        ast.memberNode.new("AndPattern",
                            ast.identifierNode.new("prelude", false)),
                    [ast.requestPart.request "new" withArgs( [varpat, tmp.first ] )] )
                pattern := bindingpat
                for (tmp.second) do {p->
                    // We can't name both p and the extra param binding
                    // occurences, because then there would be shadowing.
                    if (p.wildcard) then {
                        p.isBindingOccurrence := true
                    } else {
                        def extraParam = p.deepCopy
                        // The deepCopy copies the type too.
                        // Does this cause an unnecessary dynamic type-check?
                        extraParam.isBindingOccurrence := true
                        newparams.push(extraParam)
                    }
                }
            }
        } else {
            if (false != blk.matchingPattern) then {
                if (blk.matchingPattern.value == arg.value) then {
                    pattern := arg
                    newparams := []
                }
            }
        }
    } else {
        if (false != blk.matchingPattern) then {
            if (blk.matchingPattern.value == arg.value) then {
                pattern := arg
                newparams := []
            }
        }
    }
    def newblk = ast.blockNode.new(newparams, blk.body)
    newblk.matchingPattern := pattern
    newblk.line := blk.line
    return newblk
}

method transformIdentifier(node) ancestors(anc) {
    // node is a (copy of an) ast node that represents an applied occurence of
    // an identifer id.
    // This method may or may not transform node into another ast.
    // There is no spec for what this method should do.  The code below
    // was developed by addding and removing particular cases until
    // the transformed AST was sufficiecntly similar to the one emitted by the
    // old identifier resolution pass for the C code generator to accept it.
    // This method seems to do the following:
    // - id is self => do nothing
    // - id is super => do nothing
    // - id is outer => transform to an outerNode
    // - id is in an assignment position and a method ‹id›:=(_) is in scope => do nothing.  The enclosing bind will transform it.
    // - id is in the lexical scope: store binding occurence of id in node
    // - id is a method in an outer object scope: transform into member nodes or requests on outerNodes
    // - id is a self-method: transform into a request on self
    // - id is not declared: generate an error message

    def nm = node.nameString
    def nodeScope = node.scope
    def nmGets = nm ++ ":=(1)"
    util.setPosition(node.line, node.linePos)
    if (node.isAssigned) then {
        if (nodeScope.hasDefinitionInNest(nmGets)) then {
            if (nodeScope.kindInNest(nmGets) == k.methdec) then {
                return node     // do nothing; this will be tranformed by the enclosing bind
            }
        }
    }
    def definingScope = nodeScope.thatDefines(nm) ifNone {
        reportUndeclaredIdentifier(node)
    }
    def nodeKind = definingScope.kind(nm)
    if (node.isAssigned) then {
        if (nodeKind.isAssignable.not) then {
            reportAssignmentTo(node) declaredInScope(definingScope)
        }
    }
    if (nm == "outer") then {
        return ast.outerNode [nodeScope.enclosingObjectScope.node].
                setPositionFrom(node).setScope(nodeScope)
    }
    if (nm == "self") then {
        return node
    }
    checkForAmbiguityOf (node) definedIn (definingScope) asA (nodeKind)
    def v = definingScope.variety
    if (v == "built-in") then { return node }
    if (v == "typedec") then { return node }
    if (v == "dialect") then {
        def p = ast.identifierNode.new("prelude", false) scope(nodeScope)
        return ast.memberNode.new(nm, p) scope(nodeScope).onSelf
    }
    if (nodeKind.isParameter) then { return node }

    if (definingScope == moduleScope) then {
        if (nodeKind == k.defdec) then { return node }
        if (nodeKind == k.typedec) then { return node }
        if (nodeKind == k.vardec) then { return node }
    }
    if (definingScope == nodeScope.enclosingObjectScope) then {
        return ast.memberNode.new(nm,
            ast.identifierNode.new("self", false) scope(nodeScope)
        ) scope(nodeScope).onSelf
    }
    if (nodeScope.isObjectScope.not
             && {nodeScope.isInSameObjectAs(definingScope)}) then {
        if (nodeKind == k.methdec) then { return node }
        if (nodeKind == k.defdec) then { return node }
        if (nodeKind == k.vardec) then { return node }
    }
    if (v == "method") then { return node }
        // node is defined in the closest enclosing method.
        // there may be intervening blocks, but no objects or clases.
        // If this identifier is in a block that is returned, then ids
        // defined in the enclosing method scope have to go in a closure
        // In that case, leaving the id untouched may be wrong
    if (v == "block") then { return node }
    return nodeScope.resolveOuterMethod(nm) fromNode(node)
}
method checkForAmbiguityOf (node) definedIn (definingScope) asA (kind) {
    // The spec says:
    // When resolving an implicit request, the usual rules of lexical scoping
    // apply, so a definition of m in the current scope will take precedence
    // over any definitions in enclosing scopes. However, if m is defined in
    // the current scope by inheritance or trait use, rather than directly,
    // and also defined directly in an enclosing scope, then an implicit
    // request of m is ambiguous and is an error.
    
    def currentScope = node.scope
    if (kind.fromParent.not) then { return }
    def name = node.nameString
    def conflictingScope = definingScope.parent.thatDefines(name) ifNone {
        return
    }
    def conflictingKind = conflictingScope.kind(name)
    if (conflictingKind.fromParent) then {
        return    // request is ambiguous only if name is defined
                  // _directly_ in an enclosing scope.  
    }
    var more := ""
    if (conflictingScope.elementLines.contains(name)) then {
        def earlierDef = conflictingScope.elementLines.get(name)
        if (earlierDef != 0) then {
            more := " at line {earlierDef}"
        }
    }
    util.log 60 verbose "currentScope = {currentScope}\n defines {name} as {kind}\nconflictingScope = {conflictingScope}\n defines {name} as {conflictingKind}"
    errormessages.syntaxError "{node.canonicalName} is both {kind}, and defined in an enclosing scope{more}."
        atRange(node.range)
}
method checkForReservedName(node) {
    def ns = node.nameString
    if (reserved.contains(ns)) then {
        errormessages.syntaxError "{ns} is a reserved name and cannot be re-declared."
            atRange(node.range)
    }
}

method suggestionsForIdentifier(node) {
    def nm = node.nameString
    def suggestions = [ ]
    def nodeScope = node.scope
    def thresh = 4      // max number of suggestions
    nodeScope.withSurroundingScopesDo { s ->
        s.elements.keysDo { v ->
            if (errormessages.name (nm) mightBeIntendedToBe(v)) then {
                def sug = errormessages.suggestion.new
                sug.replaceRange(node.linePos, node.linePos +
                    node.value.size - 1) with (v) onLine(node.line)
                suggestions.push(sug)
                if (suggestions.size ≥ thresh) then { return suggestions }
            }
        }
    }
    nodeScope.elementScopes.keysDo { s ->
        if (nodeScope.elementScopes.get(s).contains(nm)) then {
            def sug = errormessages.suggestion.new
            sug.insert "{s}." atPosition (node.linePos) onLine(node.line)
            suggestions.push(sug)
            if (suggestions.size ≥ thresh) then { return suggestions }
        }
    }
    suggestions
}

method reportUndeclaredIdentifier(node) {
    def suggestions = suggestionsForIdentifier(node)
    errormessages.syntaxError("unknown variable or method '{node.canonicalName}'. " ++
          "This may be a spelling mistake or an attempt to access a variable in another scope.")
          atRange (node.range) withSuggestions (suggestions)
}

method reportAssignmentTo(node) declaredInScope(scp) {
    // Report a syntax error for an illegal assignment

    def name = node.nameString
    def kind = scp.kind(name)
    var more := ""
    def suggestions = []
    if (scp.elementLines.contains(name)) then {
        more := " on line {scp.elementLines.get(name)}"
    }
    if (kind == k.selfDef) then {
        errormessages.syntaxError("'{name}' cannot be re-bound; " ++
              "it always refers to the current object.")
              atRange(node.range)
    } elseif { reserved.contains(name) } then {
        errormessages.syntaxError("'{name}' is a reserved name and " ++
              "cannot be re-bound.")
              atRange(node.range)
    } elseif { kind == k.defdec } then {
        if (scp.elementTokens.contains(name)) then {
            def tok = scp.elementTokens.get(name)
            def sugg = errormessages.suggestion.new
            if (tok.value == "def") then {
                var eq := tok
                while {(eq.kind != "op") || (eq.value != "=")} do {
                    eq := eq.next
                }
                sugg.replaceToken(eq)with(":=")
                sugg.replaceToken(tok)with("var")
                suggestions.push(sugg)
            } else {
                errormessages.syntaxError("'{name}' cannot be changed " ++
                    "because it was declared as a '{tok.value}'{more}.")
                    atRange(node.range)
            }
        }
        errormessages.syntaxError("'{name}' cannot be changed "
            ++ "because it was declared with 'def'{more}. "
            ++ "To make it a variable, use 'var' in the declaration")
            atRange(node.range)
            withSuggestions(suggestions)
    } elseif { kind == k.typedec } then {
        errormessages.syntaxError("'{name}' cannot be re-bound "
            ++ "because it is declared as a type{more}.")
            atRange(node.range)
    } elseif { kind.isParameter } then {
        errormessages.syntaxError("'{name}' cannot be re-bound "
            ++ "because it is declared as a parameter{more}.")
            atRange(node.range)
    } elseif { kind == k.methdec } then {
        errormessages.syntaxError("'{name}' cannot be re-bound "
            ++ "because it is declared as a method{more}.")
            atRange(node.range)
    }
}

method resolveIdentifiers(topNode) {
    // Recursively replace bare identifiers with their fully-qualified
    // equivalents.  Creates and returns a new AST; map works
    // bottom-up, so by the time a node is mapped, all of its
    // descendents have already been mapped.

    def newModule = topNode.map { node, anc ->
        if ( node.isAppliedOccurenceOfIdentifier ) then {
            transformIdentifier(node) ancestors(anc)
        } elseif { node.isCall } then {
            transformCall(node)
        } elseif { node.isInherits } then {
            transformInherits(node) ancestors(anc)
        } elseif { node.isBind } then {
            transformBind(node) ancestors(anc)
        } elseif { node.isTypeDec } then {
            node
        } else {
            node
        }
    } ancestors (ast.ancestorChain.empty)
    addAssignmentMethodsToSymbolTable
    newModule
}

method addAssignmentMethodsToSymbolTable {
    // Adds the ‹var›(_):= methods for var fields to the symbol table, so that
    // they will be inserted into the gct file.  This is delayed until after
    // identifiers have been resolved, so that assignments to module-level
    // var fields are _not_ resolved into requests on the ‹var›(_):= method,
    // but are compiled as simple assignments (which are more efficient). Note
    // that module-level var fields that are not public don't get (_):= methods

    varFieldDecls.do { decl ->
        def dScope = decl.scope
        def nameGets = decl.nameString ++ ":=(_)"
        if (dScope.isModuleScope.not || decl.isPublic) then {
            util.setPosition(decl.line, decl.linePos)
            dScope.addName(nameGets) asA (k.methdec)  // will complain if already declared
        }
    }
}

method processGCT(gct, importedModuleScope) {
    gct.at "classes" ifAbsent {emptySequence}.do { c ->
        def cmeths = []
        def constrs = gct.at "constructors-of:{c}"
        def classScope = newScopeIn(importedModuleScope) kind "class"
        for (constrs) do { constr ->
            def ns = newScopeIn(importedModuleScope) kind "object"
            classScope.addName(constr)
            classScope.at(constr) putScope(ns)
            gct.at "methods-of:{c}.{constr}".do { mn ->
                ns.addName(mn)
            }
        }
        importedModuleScope.addName(c)
        importedModuleScope.at(c) putScope(classScope)
    }
    gct.at "fresh-methods" ifAbsent {emptySequence}.do { c ->
        def objScope = newScopeIn(importedModuleScope) kind "object"
        gct.at "fresh:{c}".do { mn ->
            objScope.addName(mn)
        }
        importedModuleScope.addName(c)
        importedModuleScope.at(c) putScope(objScope)
    }
}

var isInBeginningStudentDialect := false

method setupContext(moduleObject) {
    // define the built-in names
    util.setPosition(0, 0)

    builtInsScope.addName "Type" asA(k.typedec)
    builtInsScope.addName "Object" asA(k.typedec)
    builtInsScope.addName "Unknown" asA(k.typedec)
    builtInsScope.addName "String" asA(k.typedec)
    builtInsScope.addName "Number" asA(k.typedec)
    builtInsScope.addName "Boolean" asA(k.typedec)
    builtInsScope.addName "Block" asA(k.typedec)
    builtInsScope.addName "Done" asA(k.typedec)
    builtInsScope.addName "done" asA(k.defdec)
    builtInsScope.addName "true"
    builtInsScope.addName "false"
    builtInsScope.addName "outer" asA(k.defdec)
    builtInsScope.addName "readable"
    builtInsScope.addName "writable"
    builtInsScope.addName "public"
    builtInsScope.addName "confidential"
    builtInsScope.addName "override"
    builtInsScope.addName "parent"
    builtInsScope.addName "..." asA(k.defdec)

    preludeScope.addName "asString"
    preludeScope.addName "::(1)"
    preludeScope.addName "++(1)"
    preludeScope.addName "==(1)"
    preludeScope.addName "≠(1)"
    preludeScope.addName "for(1)do(1)"
    preludeScope.addName "while(1)do(1)"
    preludeScope.addName "print(1)"
    preludeScope.addName "native(1)code(1)"
    preludeScope.addName "native(1)header(1)"
    preludeScope.addName "Exception" asA(k.defdec)
    preludeScope.addName "RuntimeError" asA(k.defdec)
    preludeScope.addName "NoSuchMethod" asA(k.defdec)
    preludeScope.addName "ProgrammingError" asA(k.defdec)
    preludeScope.addName "TypeError" asA(k.defdec)
    preludeScope.addName "ResourceException" asA(k.defdec)
    preludeScope.addName "EnvironmentException" asA(k.defdec)
    preludeScope.addName "π" asA(k.defdec)
    preludeScope.addName "infinity" asA(k.defdec)
    preludeScope.addName "minigrace"
    preludeScope.addName "_methods"
    preludeScope.addName "primitiveArray"
    preludeScope.addName "become(1)"
    preludeScope.addName "unbecome(1)"
    preludeScope.addName "clone(1)"
    preludeScope.addName "inBrowser"
    preludeScope.addName "engine"

    graceObjectScope.addName "isMe(1)" asA (k.graceObjectMethod)
    graceObjectScope.addName "≠(1)" asA (k.graceObjectMethod)
    graceObjectScope.addName "basicAsString" asA (k.graceObjectMethod)
    graceObjectScope.addName "asString" asA (k.graceObjectMethod)
    graceObjectScope.addName "asDebugString" asA (k.graceObjectMethod)
    graceObjectScope.addName "::(1)" asA (k.graceObjectMethod)

    booleanScope.addName "prefix!"
    booleanScope.addName "&&(1)"
    booleanScope.addName "||(1)"
    booleanScope.addName "not"

    builtInsScope.addName "graceObject"
    builtInsScope.at "graceObject" putScope(graceObjectScope)
    builtInsScope.addName "prelude" asA(k.defdec)
    builtInsScope.at "prelude" putScope(preludeScope)
    builtInsScope.addName "_prelude" asA(k.defdec)
    builtInsScope.at "_prelude" putScope(preludeScope)
    builtInsScope.at "true" putScope(booleanScope)
    builtInsScope.at "false" putScope(booleanScope)

    def dialectNode = moduleObject.theDialect
    def dialectName:String = dialectNode.value
    if (dialectName ≠ "none") then {
        xmodule.checkExternalModule(dialectNode)
        def gctDict = xmodule.parseGCT(dialectName)
        def typeDecls = set(gctDict.at "types" ifAbsent {emptySequence})
        gctDict.at "public" ifAbsent {emptySequence}.do { mn ->
            preludeScope.addName(mn) asA (if (typeDecls.contains(mn))
                                           then { k.typedec } else { k.methdec })
        }
        processGCT(gctDict, preludeScope)
    }
    if (dialectName == "beginningStudent") then {
        isInBeginningStudentDialect := true
    }
}

method checkTraitBody(traitObjNode) {
    traitObjNode.value.do { node ->
        if (node.isLegalInTrait.not) then {
            def badThing = node.statementName
            def article = articleFor (badThing)
            errormessages.syntaxError("{article} {badThing} cannot appear in " ++
                "a trait (defined on line {traitObjNode.line})")
                atLine(node.line)
        }
    }
}

method articleFor(str) {
    // the indefinite article to preceed str
    if ("aeioAEIO".contains(str.first)) then { "an" } else { "a" }
}

method buildSymbolTableFor(topNode) ancestors(topChain) {
    def symbolTableVis = object {
        inherit ast.baseVisitor

        method visitBind (o) up (anc) {
            o.scope := anc.parent.scope
            def lValue = o.dest
            if (lValue.kind == "identifier") then {
                lValue.isAssigned := true
            }
            return true
        }
        method visitCall (o) up (anc) {
            def enclosingNode = anc.parent
            o.scope := enclosingNode.scope
            def callee = o.receiver
            if (callee.kind == "identifier") then {
                callee.inRequest := true
            }
            if (enclosingNode.isMethod) then {
                if (enclosingNode.body.last == o) then {
                    o.isTailCall := true
                }
            } elseif { enclosingNode.isReturn } then {
                    o.isTailCall := true
            }
            return true
        }
        method visitBlock (o) up (anc) {
            o.scope := newScopeIn(anc.parent.scope) kind "block"
            true
        }
        method visitDefDec (o) up (anc) {
            def myParent = anc.parent
            o.scope := myParent.scope
            o.parentKind := myParent.kind
            def declaredName = o.nameString
            if (false != o.startToken) then {
                myParent.scope.elementTokens.put(declaredName, o.startToken)
            }
            if (o.value.isObject) then { o.value.name := declaredName }
            true
        }
        method visitVarDec(o) up (anc) {
            def myParent = anc.parent
            o.scope := myParent.scope
            o.parentKind := myParent.kind
            true
        }
        method visitIdentifier (o) up (anc) {
            var scope := anc.parent.scope
            o.scope := scope
            if (o.isBindingOccurrence) then {
                if ((o.isDeclaredByParent.not) && {o.wildcard.not}) then {
                    checkForReservedName(o)
                    def kind = o.declarationKindWithAncestors(anc)
                    if (scope.isObjectScope && (kind == k.vardec)) then {
                        varFieldDecls.add(anc.parent)
                        // Why not just add the :=(_) now?
                        // Because we want some field assignments to be compiled as
                        // direct assignments, and hence have to distinguish
                        // programmer-writen :=(_) methods from synthetic ones.
                    }
                    scope.addNode(o) asA (kind)
                }
            } elseif {o.wildcard} then {
                errormessages.syntaxError("'_' cannot be used in an expression")
                    atRange(o.range)
            }
            true
        }
        method visitImport (o) up (anc) {
            o.scope := anc.parent.scope
            xmodule.checkExternalModule(o)
            def gct = xmodule.parseGCT(o.path)
            def otherModule = newScopeIn(anc.parent.scope) kind "module"
            otherModule.node := o
            processGCT(gct, otherModule)
            o.scope.at(o.nameString) putScope(otherModule)
            true
        }
        method visitInherits (o) up (anc) {
            o.scope := anc.parent.scope
            if (o.isUse) then {
                if (anc.parent.canUse.not) then {
                    errormessages.syntaxError("use statements must " ++
                        "be inside an object, class, or trait")
                        atRange(o.range)
                }
            } else {
                if (anc.parent.canInherit.not) then {
                    errormessages.syntaxError("inherit statements must " ++
                        "be inside an object or class; a trait cannot inherit")
                        atRange(o.range)
                }
            }
            true
        }
        method visitMethod (o) up (anc) {
            def surroundingScope = anc.parent.scope
            if (surroundingScope.isObjectScope.not) then {
                // This check needs to be here so long as the parser accepts
                // class declarations as statments, rather than as method
                // declarations.  Why does it do so?  Because of the old
                // "dotted" class syntax, wherein a class decl was actually a def.
                errormessages.syntaxError("class declarations are permitted only" ++
                    " inside an object") atRange(o.range)
            }
            def ident = o.asIdentifier
            checkForReservedName(ident)
            surroundingScope.addNode(ident) asA(k.methdec)
            ident.isDeclaredByParent := true
            if (ident.isBindingOccurrence) then {
                // aliased and excluded names are appliedOccurences
                o.scope := newScopeIn(surroundingScope) kind "method"
                if (o.returnsObject) then {
                    o.isFresh := true
                }
            }
            if (o.body.isEmpty.not && {o.body.last.isObject}) then {
                o.body.last.name := o.canonicalName
            }
            true
        }
        method visitMethodType (o) up (anc) {
            o.scope := newScopeIn(anc.parent.scope) kind "methodtype"
            // the scope for the parameters (including the type parameters,
            // if any) of this method.
            true
        }
        method visitObject (o) up (anc) {
            def myParent = anc.parent
            o.scope := newScopeIn(myParent.scope) kind "object"
            if (o.inTrait) then { checkTraitBody(o) }
            true
        }
        method visitModule(o) up (anc) {
            // the module scope was set before the traversal started
            true
        }
        method visitTypeDec (o) up (anc) {
            def enclosingScope = anc.parent.scope
            enclosingScope.addNode(o.name) asA(k.typedec)
            o.name.isDeclaredByParent := true
            o.scope := newScopeIn(enclosingScope) kind "typedec"
            // this scope will be the home for any type parameters.
            // If there are no parameters, it won't be used.
            // For now, we don't distinguish between type decs and type params
            true
        }
        method visitTypeLiteral (o) up (anc) {
            o.scope := newScopeIn(anc.parent.scope) kind "type"
            true
        }
        method visitReturn(o) up (anc) {
            o.scope := anc.parent.scope;
            def enclosingMethodNode = anc.suchThat { n -> n.isMethod } ifAbsent {
                errormessages.syntaxError "`return` statements must be inside methods."
                    atRange(o.range)
            }
            o.dtype := enclosingMethodNode.dtype
            true
        }
        method visitTypeParameters(o) up (anc) { o.scope := anc.parent.scope ; true }
        method visitIf(o) up (anc) { o.scope := anc.parent.scope ; true }
        method visitMatchCase(o) up (anc) { o.scope := anc.parent.scope ; true }
        method visitTryCatch(o) up (anc) { o.scope := anc.parent.scope ; true }
        method visitSignaturePart(o) up (anc) { o.scope := anc.parent.scope ; true }
        method visitArray(o) up (anc) { o.scope := anc.parent.scope ; true }
        method visitMember(o) up (anc) { o.scope := anc.parent.scope ; true }
        method visitGeneric(o) up (anc) { o.scope := anc.parent.scope ; true }
        method visitString(o) up (anc) { o.scope := anc.parent.scope ; true }
        method visitNum(o) up (anc) { o.scope := anc.parent.scope ; true }
        method visitOp(o) up (anc) { o.scope := anc.parent.scope ; true }
        method visitDialect(o) up (anc) { o.scope := anc.parent.scope ; true }
        method visitCommentNode(o) up (anc) { o.scope := anc.parent.scope ; true }
    }   // end of symbolTableVis

    def objectScopesVis = object {
        // This traversal can't be completed in the buildSymbolTable visitor,
        // because the visitation is top-down, and hence the scope of the
        // body of a def or method won't have been allocated when the
        // delcaration is visited.

        inherit ast.baseVisitor
        method visitDefDec (o) up (anc) {
            if (o.returnsObject) then {
                o.scope.at(o.nameString)
                    putScope(o.returnedObjectScope)
            }
            true
        }
        method visitMethod (o) up (anc) {
            def myParent = anc.parent
            if (o.returnsObject) then {
                myParent.scope.at(o.nameString) putScope(o.returnedObjectScope)
                if (anc.forebears.forebears.isEmpty.not) then {
                    // omit this if I'm at the module-level
                    def factoryName = myParent.name
                    def tailNode = o.body.last
                    if ((factoryName != "object") && (tailNode.isObject)) then {
                        tailNode.name := factoryName ++ "." ++ tailNode.name
                    }
                }
            }
            true
        }
    }

    def inheritanceVis = object {
        inherit ast.baseVisitor
        method visitObject (o) up (anc) {
            collectParentNames(o)
            true
        }
        method visitModule (o) up (anc) {
            collectParentNames(o)
            true
        }
    }

    topNode.accept(symbolTableVis) from(topChain)
    topNode.accept(objectScopesVis) from(topChain)
    topNode.accept(inheritanceVis) from(topChain)
}

method collectParentNames(node) {
    // node is an object or class; put the names that it inherit into its scope.
    // In the process, checks for a cycle in the inheritance chain.
    def nodeScope = node.scope
    if (nodeScope.inheritedNames == completed) then {
        return
    }
    if (nodeScope.inheritedNames == inProgress) then {
        errormessages.syntaxError "cyclic inheritance or trait use."
            atRange(node.line, node.linePos, node.linePos + 4)
    }
    nodeScope.inheritedNames := inProgress
    gatherInheritedNames(node)
    gatherUsedNames(node)
    nodeScope.inheritedNames := completed
}

method gatherInheritedNames(node) is confidential {
    if (node.isObject) then {
        var inhNode := node.superclass
        def objScope = node.scope
        var superScope
        var inheritedKind := k.inherited
        if (false == inhNode) then {
            def gO = ast.identifierNode.new("graceObject", false) scope(objScope)
            inhNode := ast.inheritNode.new(gO) scope(objScope)
            superScope := graceObjectScope
            inheritedKind := k.graceObjectMethod
        } else {
            superScope := objScope.scopeReferencedBy(inhNode.value)
            // If superScope is the universal scope, then we have no information
            // about the inherited attributes
            if (superScope.isUniversal.not) then {
                if (ast.nullNode != superScope.node) then {
                    // superScope.node == nullNode when superScope describes
                    // an imported module.
                    collectParentNames(superScope.node)
                }
            }
        }
        superScope.elements.keysDo { each ->
            if (each != "self") then {
                objScope.addName(each) asA(inheritedKind)
                inhNode.providedNames.add(each)
            }
        }
        inhNode.aliases.do { a ->
            def old = a.oldName.nameString
            if (superScope.contains(old)) then {
                inhNode.providedNames.add(a.newName.nameString)
            } else {
                errormessages.syntaxError("can't define an alias for {old} " ++
                    "because it is not present in the inherited object")
                    atRange(a.oldName.range)
            }
        }
        inhNode.exclusions.do { exId ->
            inhNode.providedNames.remove(exId.nameString) ifAbsent {
                errormessages.syntaxError("can't exclude {exId.canonicalName} " ++
                    "because it is not present in the inherited object")
                    atRange(exId.range)
            }
        }
    }
}

method gatherUsedNames(objNode) is confidential {
    // For each of objNodes's used traits, gather the names
    // introduced by that trait, as modified by alias and exclude.

    def traitMethods = map.new
    def objScope = objNode.scope
    objNode.usedTraits.do { t ->
        def traitScope = objScope.scopeReferencedBy(t.value)
        def traitNode = traitScope.node
        if (traitNode.isObject) then {
            collectParentNames(traitScope.node)
        }
        traitScope.keysAndKindsDo { nm, kd ->
            if (kd.forUsers) then {
                objScope.addName(nm) asA(k.fromTrait)
                t.providedNames.add(nm)
            }
        }
        t.aliases.do { a ->
            def old = a.oldName.nameString
            if (traitScope.contains(old)) then {
                t.providedNames.add(a.newName.nameString)
            } else {
                errormessages.syntaxError("can't define an alias for " ++
                    "{old} because it is not present in the trait")
                    atRange(a.oldName.range)
            }
        }
        t.exclusions.do { exId ->
            t.providedNames.remove(exId.nameString) ifAbsent {
                errormessages.syntaxError("can't exclude {exId.canonicalName} " ++
                    "because it is not available in the trait")
                    atRange(exId.range)
            }
        }
        t.providedNames.do { methName ->
            def definingTraits = traitMethods.get(methName) ifAbsent { [] }
            definingTraits.push(t)
            traitMethods.put(methName, definingTraits)
        }
    }
    checkForConflicts(objNode, traitMethods)
}

method checkForConflicts(objNode, traitMethods) {
    // traitMethods is a dictionary with methodNames as keys, and
    // a list of sources as values.  Multiple sources indicate a conflict,
    // unless there is a local definition too.
    def conflicts = emptyList

    traitMethods.keysDo { methName ->
        def sources = traitMethods.get(methName)
        if (sources.size > 1) then {    // a method has more than one source trait
            if (objNode.localNames.contains(methName).not) then {
                conflicts.addLast (conflictForMethodName(methName) from(sources))
            }
        }
    }

    if (conflicts.isEmpty) then { return }

    var maxSourceLine := 0
    var message := if (conflicts.size > 1) then {
        "Trait conflicts found:\n    "
    } else {
        "Trait conflict found: "
    }
    conflicts.do { each ->
        def sourceList = each.sources.map { s -> s.nameString }
        maxSourceLine := each.sources.fold {a, s -> max(a, s.line) }
              startingWith(maxSourceLine)
        message := message ++ "method `{each.methodName}` is defined in " ++
              errormessages.readableStringFrom(sourceList) ++ ".\n    "
    }
    if (maxSourceLine == 0) then {
        errormessages.error(message)
    } else {
        errormessages.error(message) atLine (maxSourceLine)
    }
}

class conflictForMethodName(nm) from(srcs) {
    def methodName is public = nm
    def sources is public = srcs
}

method transformBind(bindNode) ancestors(anc) {
    // bindNode is (a shallow copy of) a bindNode.  If it is binding a
    // "member" or an identifier, transform it into a request on a setter

    def dest = bindNode.dest
    def currentScope = bindNode.scope
    util.setPosition(bindNode.line, bindNode.linePos)
    if ( dest.isMember ) then {
        def nm = dest.nameString
        def nmGets = nm ++ ":="
        def part = ast.requestPart.request(nmGets) withArgs [bindNode.value]
                scope(currentScope)
        def newCall = ast.callNode.new(dest.receiver, [part]) scope(currentScope)
        newCall.end := bindNode.value.end
        if (dest.receiver.isSelfOrOuter) then {
            newCall.onSelf
        }
        return newCall
    } elseif { dest.isIdentifier } then {
        def nm = dest.nameString
        def nmGets = nm ++ ":=(1)"
        if (currentScope.hasDefinitionInNest(nmGets)) then {
            if (currentScope.kindInNest(nmGets) == k.methdec) then {
                def rcvr = currentScope.resolveOuterMethod(nmGets) fromNode(bindNode).receiver
                def part = ast.requestPart.request(nm ++ ":=")
                        withArgs [ bindNode.value ] scope(currentScope)
                def newCall = ast.callNode.new(rcvr, [ part ]) scope(currentScope).onSelf
                newCall.end := bindNode.value.end
                return newCall
            } else {
                util.log 20 verbose "bind check 2 failed"
            }
        }
    }
    bindNode
}


method transformInherits(inhNode) ancestors(anc) {
    // inhNode is (a shallow copy of) an inheritNode.  Transform it to deal
    // with superobject initialization and inherited names, including
    // inheritance modifiers
    def superExpr = inhNode.value
    def currentScope = inhNode.scope
    if (currentScope.isObjectScope.not) then {
        errormessages.syntaxError "{inhNode.statementName} statements must be directly inside an object."
                    atRange(inhNode.range)
    }
    if (superExpr.isAppliedOccurenceOfIdentifier) then {
        def nm = superExpr.nameString
        def definingScope = currentScope.thatDefines(nm)
        if (definingScope == currentScope) then {
            errormessages.syntaxError "the object being inherited must be from an enclosing scope."
                atRange(superExpr.range)
        }
        if ((definingScope.kind(nm)) ≠ k.methdec) then {
            errormessages.syntaxError "the object being inherited must be freshly generated from a method."
                  atRange(superExpr.range)
        }
        def sv = definingScope.variety
        if ((sv == "built-in") || (sv == "dialect")) then {
            // this deals with "inherit true" etc; identifiers from the built-in
            // scope have not been transformed to member nodes
            def preludeName = if (sv == "built-in") then { "_prelude" }
                                                    else { "prelude" }
            def preludeNode = ast.identifierNode.new(preludeName, false) scope(currentScope)
            def newCall = ast.callNode.new(preludeNode, [
                ast.requestPart.request (nm) withArgs [] scope(currentScope),
                ast.requestPart.request "$object" withArgs [
                    ast.identifierNode.new("self", false) scope(currentScope)] scope(currentScope) ])
            newCall.end := superExpr.end
            inhNode.value := newCall
        } else {
            ProgrammingError.raise ("untransformed idfentifer `{nm}` found " ++
                "in {inhNode.statementName} statement on line {inhNode.line}")
        }
    } elseif {superExpr.isMember} then {
        def newCall = ast.callNode.new(inhNode.value.receiver, [
            ast.requestPart.request(inhNode.value.value) withArgs( [] ) scope(currentScope),
            ast.requestPart.request "$object" withArgs (
                [ast.identifierNode.new("self", false) scope(currentScope)]) scope(currentScope)
            ]
        ) scope(currentScope)
        newCall.isSelfRequest := superExpr.isSelfRequest
        newCall.end := superExpr.end
        inhNode.value := newCall
    } elseif {superExpr.isCall} then {
        superExpr.parts.push(ast.requestPart.request "$object"
            withArgs ( [ast.identifierNode.new("self", false) scope(currentScope)] ))
    } else {
        errormessages.syntaxError "inheritance must be from a freshly-created object."
            atRange(inhNode.range)
    }
    inhNode
}

method transformCall(cNode) -> ast.AstNode {
    def methodName = cNode.nameString
    var result := cNode
    def s = cNode.scope
    def nominalRcvr = cNode.receiver
    if (nominalRcvr.isImplicit) then {
        def rcvr = s.resolveOuterMethod(methodName) fromNode(cNode)
        if (rcvr.isIdentifier) then {
            util.log 60 verbose "Transformed {cNode.pretty 0} did nothing"
            return cNode
        }
        def definingScope = s.thatDefines(methodName)
        checkForAmbiguityOf (cNode)
            definedIn (definingScope) asA (definingScope.kind(methodName))
        cNode.receiver := rcvr.receiver
        cNode.onSelf
        if (definingScope.kind(methodName) == "object") then {
            cNode.isFresh := true
        }
    } elseif { nominalRcvr.isOuter && (cNode.nameString == "outer") } then {
        // deal with outer.outer ..., which has been parsed into a memberNode
        // The reciever has already been converted from an identifier to an
        // outerNode; here we add another object to that outerNode's object list.

        def priorOuter = nominalRcvr.theObjects.last
        def newOuter = priorOuter.scope.parent.enclosingObjectScope.node
        nominalRcvr.theObjects.addLast(newOuter)
        result := nominalRcvr
    } else {
        if (cNode.isTailCall) then {    // don't do this work if no one cares
            result.isFresh := callReturnsFreshObject(cNode)
        }
    }
    result
}

method callReturnsFreshObject(cNode) {
    def rcvrScope = cNode.scope.receiverScope(cNode.receiver)
    def ansrScope = rcvrScope.getScope(cNode.nameString)
    ansrScope.isObjectScope
}

method rewriteMatches(topNode) {
    topNode.map { node, anc ->
        if (node.isMatchingBlock) then {
            rewritematchblock(node)
        } else {
            node
        }
    } ancestors (ast.ancestorChain.empty)
}

method resolve(moduleObject) {
    util.log_verbose "rewriting tree."
    setupContext(moduleObject)
    util.setPosition(0, 0)
    moduleObject.scope := moduleScope
    def preludeObject = ast.moduleNode.body([moduleObject])
        named "prelude" scope (preludeScope)
    def preludeChain = ast.ancestorChain.with(preludeObject)

    if (util.target == "patterns") then {
        util.outprint "====================================="
        util.outprint "module after pattern-match re-writing"
        util.outprint "====================================="
        util.outprint(moduleObject.pretty(0))
        util.log_verbose "done"
        sys.exit(0)
    }

    buildSymbolTableFor(moduleObject) ancestors(preludeChain)
    util.log_verbose "symbol tables built."

    if (util.target == "symbols") then {
        util.outprint "====================================="
        util.outprint "module with symbol tables"
        util.outprint "====================================="
        util.outprint "top-level"
        util.outprint "Universal scope = {universalScope.asDebugString}"
        moduleObject.scope.withSurroundingScopesDo { each ->
            util.outprint (each.asString)
            util.outprint (each.elementScopesAsString)
            util.outprint "----------------"
        }
        util.outprint(moduleObject.pretty(0))
        util.log_verbose "done"
        sys.exit(0)
    }
    resolveIdentifiers(moduleObject)
}
