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
        addName "self" as(k.selfDef)
        at "self" putScope(self)
    }
    method == (other) { self.isMe(other) }
    method isEmpty { elements.size == 0 }
    method addName(n) {
        elements.put(n, k.methdec)
        elementLines.put(n, util.linenum)
    }
    method addName (n) as (kind:DeclKind) {
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
            atRange(util.line, util.linePos, util.linePos + n.size - 1)
    }
    method addNode (nd) as (kind) {
        def ndName = nd.value
        checkShadowing(nd) as(kind)
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
            ++ " redeclared because it is already declared"
            ++ more ++ " as well as here at line {nd.line}.")
            atRange(nd.line, nd.linePos, nd.linePos + ndName.size - 1)
    }
    method contains (n) {
        elements.contains(n)
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
    method kind (n) { elements.get(n) }
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
        elements.asList.sortBy(keyOrdering).do { each ->
            result := "{result} {each.key}({kind(each.key)}) "
        }
        result ++ "\n"
    }

    method asDebugString { "(ST {serialNumber})" }

    method elementScopesAsString {
        def referencedScopes = emptySet
        var result := "\n    [elementScopes:"
        elementScopes.asList.sortBy(keyOrdering).do { each ->
            result := "{result} {each.key}➞{each.value.asDebugString}"
            referencedScopes.add (each.value)
        }
        result := result ++ "]\n____________\n"
        referencedScopes.asList
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
        return k.undefined
    }
    method thatDefines(name) ifNone(action) {
        withSurroundingScopesDo { s->
            if (s.contains(name)) then { return s }
        }
        action.apply
    }
    method thatDefines(name) {
        withSurroundingScopesDo { s->
            if (s.contains(name)) then { return s }
        }
        print(self.asStringWithParents)
        ProgrammingError.raise "no scope defines {name}"
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
    method resolveOuterMethod(name) fromNode (aNode) {
        // replace name by outer.outer. ... .name,
        // depending on where name is declared.
        var mem := ast.identifierNode.new("self", false) scope(self)
        withSurroundingScopesDo { s->
            if (s.contains(name)) then {
                if (s.variety == "dialect") then {
                    return ast.memberNode.new(name,
                        ast.identifierNode.new("prelude", false) scope(self)) scope(self).onSelf
                }
                return ast.memberNode.new(name, mem) scope(self).onSelf
            }
            if (s.variety == "object") then {
                mem := ast.memberNode.new("outer", mem) scope(self)
            } elseif {s.variety == "class"} then {
                mem := ast.memberNode.new("outer", mem) scope(self)
                mem := ast.memberNode.new("outer", mem) scope(self)
            }
        }
        errormessages.syntaxError "no method {aNode.canonicalName}"
                atRange(aNode.line, aNode.linePos, aNode.linePos + name.size - 1)
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
            errormessages.syntaxError "no method {nd.canonicalName}"
                atRange(nd.line, nd.linePos, nd.linePos + sought.size - 1)
        } elseif {nd.kind == "op"} then {
            def receiverScope = self.scopeReferencedBy(nd.left)
            return receiverScope.scopeReferencedBy(nd.asIdentifier)
        } elseif {nd.isCall} then { // this includes "memberNodes"
            def receiver = nd.receiver
            if (receiver.isImplicit) then {
                util.log 60 verbose "inherit from implicit.{nd.nameString} on line {nd.line}"
            }
            def newNd = transformCall(nd)
            def receiverScope = self.scopeReferencedBy(newNd.receiver)
            return receiverScope.scopeReferencedBy(newNd.asIdentifier)
        }
        ProgrammingError.raise("{nd.nameString} is not a Call, Member, Identifier or op.\n"
            ++ nd.pretty(0))
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
    method checkShadowing(ident) as(newKind) {
        def name = ident.nameString
        def priorScope = thatDefines(name) ifNone {
            return
        }
        def description =
            if (priorScope == self) then {
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
                atRange(ident.line, ident.linePos, ident.linePos + name.size - 1)
                withSuggestions(suggs)
        } else {
            errormessages.syntaxError("'{ident.canonicalName}' cannot be "
                ++ "redeclared because it is already declared in "
                ++ "{description} scope{more}. Use a different name.")
                atRange(ident.line, ident.linePos,
                    ident.linePos + name.size - 1)
        }
    }
}

def emptyScope = newScopeKind("empty")
ast.nullNode.scope := emptyScope      // TODO: eliminate!
def builtInsScope = newScopeIn(emptyScope) kind("built-in")
def preludeScope = newScopeIn(builtInsScope) kind("dialect")
def moduleScope = newScopeIn(preludeScope) kind("module")
def graceObjectScope = newScopeIn(emptyScope) kind("object")
def booleanScope = newScopeIn(builtInsScope) kind "object"

def universalScope = object {
    // The scope that defines every identifier,
    // used when we have no information about an object
    inherit newScopeIn(emptyScope) kind("universal")
    method hasParent { false }
    method parent { ProgrammingError.raise "universal scope has no parent" }
    method addName(n) { ProgrammingError.raise "can't add to the universal scope" }
    method addName(n)as(kd) { ProgrammingError.raise "can't add to the universal scope" }
    method addNode(n)as(kd) { ProgrammingError.raise "can't add to the universal scope" }
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
        for (arg.with) do { part ->
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

method transformIdentifier(node) ancestors(as) {
    // node is a (copy of an) ast node that represents an applied occurence of
    // an identifer id.   This implies that node is a leaf in the ast.
    // This method may or may not transform node into another ast.
    // There is no spec for what this method should do.  The code below
    // was developed by addding and removing particular cases until
    // the transformed AST was sufficiecntly similar to the one emitted by the
    // old identifier resolution pass for the C code generator to accept it.
    // This method seems to do the following:
    // - id is self => do nothing
    // - id is super => do nothing
    // - id is in an assignment position and a method ‹id›:=(_) is in scope => do nothing.  The enclosing bind will transform it.
    // - id is in the lexical scope: store binding occurence of id in node
    // - id is a method in an outer object scope: transform into member nodes.
    // - id is a self-method: transform into a request on self
    // - id is not declared: generate an error message

    // Some clauses are flagged "TODO Compatability Kludge — remove when possible"
    // This means that APB put them there to produce an AST close enough to the
    // former identifier resolution pass to keep the C code generator (genc) happy.
    // They may represent things that APB doesn't understand, or bugs in genc

    var nm := node.nameString
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
        def selfId = ast.identifierNode.new("self", false) scope(nodeScope)
        def memb = ast.memberNode.new("outer", selfId) scope(nodeScope)
        if (as.parent.isCall) then { as.parent.onSelf }
        return memb
        // TODO: represent outer statically
    }
    if (nm == "self") then {
        return node
    }
    checkForAmbiguityOf (node) definedIn (definingScope) as (nodeKind)
    def v = definingScope.variety
    if (v == "built-in") then { return node }
    if (v == "dialect") then {
        def p = ast.identifierNode.new("prelude", false) scope(nodeScope)
        return ast.memberNode.new(nm, p) scope(nodeScope).onSelf
    }
    if (nodeKind.isParameter) then { return node }
    if (nodeKind == k.typedec) then { return node }

    // TODO Compatability Kludge — remove when possible
    if (node.inTypePositionWithAncestors(as)) then { return node }
    // the latter is necessary until .gct files distinguish types

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
method checkForAmbiguityOf (node) definedIn (definingScope) as (kind) {
    def currentScope = node.scope
    if (kind.fromParent.not) then { return }
    if (currentScope.enclosingObjectScope != definingScope) then { return }
    def name = node.nameString
    def conflictingScope = definingScope.parent.thatDefines(name) ifNone {
        return
    }
    def conflictingKind = conflictingScope.kind(name)
    if (conflictingKind.fromParent) then { return }
    var more := ""
    if (conflictingScope.elementLines.contains(name)) then {
        def earlierDef = conflictingScope.elementLines.get(name)
        if (earlierDef != 0) then {
            more := " at line {earlierDef}"
        }
    }
    util.log 60 verbose "currentScope = {currentScope}\n defines {name} as {kind}\nconflictingScope = {conflictingScope}\n defines {name} as {conflictingKind}"
    errormessages.syntaxError "{node.canonicalName} is both {kind}, and defined in an enclosing scope{more}."
        atRange(node.line, node.linePos, node.linePos + name.size - 1)
}
method checkForReservedName(node) {
    def ns = node.nameString
    if (reserved.contains(ns)) then {
        errormessages.syntaxError "{ns} is a reserved name and cannot be re-declared."
            atRange(node.line, node.linePos, node.linePos + ns.size - 1)
    }
}

method isSameIgnoringCase(c1, c2) {
    // necessary because the C library doesn't implement asLower or asUpper
    if (c1 == c2) then { return true }
    return (c1.ord - c2.ord).abs == 32
}

method reportUndeclaredIdentifier(node) {
    def nodeScope = node.scope
    def nm = node.nameString
    def nmSize = nm.size
    def sizeLimit = nmSize * 2
        // below which we want the startChars to match
    def thresh = ((nmSize / 3) + 1).truncated
    def suggestions = []
    def startChar = nm.first
    var suggestion
    nodeScope.withSurroundingScopesDo { s ->
        s.elements.keysDo { v ->
            if ((nmSize - v.size).abs < thresh) then {
                util.log 100 verbose "matching {nm} to {v} within {thresh}"
                def matchExtent = errormessages.name (nm) matches (v) within (thresh)
                if (((matchExtent > 1) && (isSameIgnoringCase(v.first, startChar)) &&
                      (nmSize <= v.size) && (v.size <= sizeLimit)) || {
                      (nmSize > 2) && (matchExtent == v.size) } ) then {
                    suggestion := errormessages.suggestion.new
                    suggestion.replaceRange(node.linePos, node.linePos +
                        node.value.size - 1) with (v) onLine(node.line)
                    suggestions.push(suggestion)
                }
            }
        }
    }
    nodeScope.elementScopes.keysDo { s ->
        if (nodeScope.elementScopes.get(s).contains(nm)) then {
            suggestion := errormessages.suggestion.new
            suggestion.insert("{s}.")atPosition(node.linePos)onLine(node.line)
            suggestions.push(suggestion)
        }
    }
    var highlightLength := node.value.size
    if (node.value.replace "()" with "XX" != node.value) then {
        var i := 0
        var found := false
        for (node.value) do {c->
            if ((c == "(") && (!found)) then {
                highlightLength := i
                found := true
            }
            i := i + 1
        }
    }
    if (node.inRequest) then {
        var extra := ""
        if (node.value == "while") then {
            suggestion := errormessages.suggestion.new
            suggestion.append " do \{ \}" onLine(node.line)
            suggestions.push(suggestion)
        }
        if (node.value == "for") then {
            suggestion := errormessages.suggestion.new
            suggestion.append " do \{ aVarName -> \}" onLine(node.line)
            suggestions.push(suggestion)
        }
        errormessages.syntaxError "unknown method '{node.canonicalName}'. This may be a spelling mistake or an attempt to access a method in another scope.{extra}"
            atRange(node.line, node.linePos, node.linePos +
                highlightLength - 1)
            withSuggestions(suggestions)
    }
    errormessages.syntaxError("unknown variable or method '{node.canonicalName}'. This may be a spelling mistake or an attempt to access a variable in another scope.")atRange(
        node.line, node.linePos, node.linePos + highlightLength - 1)withSuggestions(suggestions)
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
              atRange(node.line, node.linePos, node.linePos + name.size - 1)
    } elseif { reserved.contains(name) } then {
        errormessages.syntaxError("'{name}' is a reserved name and " ++
              "cannot be re-bound.")
              atRange(node.line, node.linePos, node.linePos + name.size - 1)
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
                    atRange(node.line, node.linePos, node.linePos + name.size - 1)
            }
        }
        errormessages.syntaxError("'{name}' cannot be changed "
            ++ "because it was declared with 'def'{more}. "
            ++ "To make it a variable, use 'var' in the declaration")
            atRange(node.line, node.linePos, node.linePos + name.size - 1)
            withSuggestions(suggestions)
    } elseif { kind == k.typedec } then {
        errormessages.syntaxError("'{name}' cannot be re-bound "
            ++ "because it is declared as a type{more}.")
            atRange(node.line, node.linePos, node.linePos + name.size - 1)
    } elseif { kind.isParameter } then {
        errormessages.syntaxError("'{name}' cannot be re-bound "
            ++ "because it is declared as a parameter{more}.")
            atRange(node.line, node.linePos, node.linePos + name.size - 1)
    } elseif { kind == k.methdec } then {
        errormessages.syntaxError("'{name}' cannot be re-bound "
            ++ "because it is declared as a method{more}.")
            atRange(node.line, node.linePos, node.linePos + name.size - 1)
    }
}

method resolveIdentifiers(topNode) {
    // Recursively replace bare identifiers with their fully-qualified
    // equivalents.  Creates and returns a new AST; map works
    // bottom-up, so by the time a node is mapped, all of its
    // descendents have already been mapped.

    topNode.map { node, as ->
        if ( node.isAppliedOccurenceOfIdentifier ) then {
            transformIdentifier(node) ancestors(as)
        } elseif { node.isCall } then {
            transformCall(node)
        } elseif { node.isInherits } then {
            transformInherits(node) ancestors(as)
        } elseif { node.isBind } then {
            transformBind(node) ancestors(as)
        } elseif { node.isTypeDec } then {
            node
        } else {
            node
        }
    } ancestors (ast.ancestorChain.empty)
}

method processGCT(gct, importedModuleScope) {
    gct.at "classes" ifAbsent {emptySequence}.do { c ->
        def cmeths = []
        def constrs = gct.at "constructors-of:{c}"
        def classScope = newScopeIn(importedModuleScope) kind "class"
        for (constrs) do { constr ->
            def ns = newScopeIn(importedModuleScope) kind("object")
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

method setupContext(moduleObject) {
    // define the built-in names
    util.setPosition(0, 0)

    builtInsScope.addName "Type" as(k.typedec)
    builtInsScope.addName "Object" as(k.typedec)
    builtInsScope.addName "Unknown" as(k.typedec)
    builtInsScope.addName "String" as(k.typedec)
    builtInsScope.addName "Number" as(k.typedec)
    builtInsScope.addName "Boolean" as(k.typedec)
    builtInsScope.addName "Block" as(k.typedec)
    builtInsScope.addName "Done" as(k.typedec)
    builtInsScope.addName "done" as(k.defdec)
    builtInsScope.addName "true" as(k.defdec)
    builtInsScope.addName "false" as(k.defdec)
    builtInsScope.addName "super" as(k.defdec)
    builtInsScope.addName "outer" as(k.defdec)
    builtInsScope.addName "readable"
    builtInsScope.addName "writable"
    builtInsScope.addName "public"
    builtInsScope.addName "confidential"
    builtInsScope.addName "override"
    builtInsScope.addName "parent"
    builtInsScope.addName "..." as(k.defdec)

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
    preludeScope.addName "Exception" as(k.defdec)
    preludeScope.addName "RuntimeError" as(k.defdec)
    preludeScope.addName "NoSuchMethod" as(k.defdec)
    preludeScope.addName "ProgrammingError" as(k.defdec)
    preludeScope.addName "TypeError" as(k.defdec)
    preludeScope.addName "ResourceException" as(k.defdec)
    preludeScope.addName "EnvironmentException" as(k.defdec)
    preludeScope.addName "π" as(k.defdec)
    preludeScope.addName "infinity" as(k.defdec)
    preludeScope.addName "minigrace"
    preludeScope.addName "_methods"
    preludeScope.addName "primitiveArray"
    preludeScope.addName "become(1)"
    preludeScope.addName "unbecome(1)"
    preludeScope.addName "clone(1)"
    preludeScope.addName "inBrowser"
    preludeScope.addName "engine"

    graceObjectScope.addName "isMe(1)" as (k.graceObjectMethod)
    graceObjectScope.addName "≠(1)" as (k.graceObjectMethod)
    graceObjectScope.addName "basicAsString" as (k.graceObjectMethod)
    graceObjectScope.addName "asString" as (k.graceObjectMethod)
    graceObjectScope.addName "asDebugString" as (k.graceObjectMethod)
    graceObjectScope.addName "::(1)" as (k.graceObjectMethod)

    booleanScope.addName "prefix!"
    booleanScope.addName "&&(1)"
    booleanScope.addName "||(1)"
    booleanScope.addName "not"

    builtInsScope.addName "graceObject"
    builtInsScope.at "graceObject" putScope(graceObjectScope)
    builtInsScope.addName "prelude" as(k.defdec)
    builtInsScope.at "prelude" putScope(preludeScope)
    builtInsScope.addName "_prelude" as(k.defdec)
    builtInsScope.at "_prelude" putScope(preludeScope)
    builtInsScope.at "true" putScope(booleanScope)
    builtInsScope.at "false" putScope(booleanScope)

    // Historical - should be removed eventually
    if (!util.extensions.contains("NativePrelude")) then {
        var hadDialect := false
        for (moduleObject.value) do {val->
            if (val.kind == "dialect") then {
                hadDialect := true
                xmodule.checkExternalModule(val)
                def gctDict = xmodule.parseGCT(val.value)
                gctDict.at "public" ifAbsent {emptySequence}.do { mn ->
                    preludeScope.addName(mn)
                }
                gctDict.at "confidential" ifAbsent {emptySequence}.do { mn ->
                    preludeScope.addName(mn)
                }
                processGCT(gctDict, preludeScope)
            }
        }
        if (!hadDialect) then {
            def gctDict = xmodule.parseGCT "standardGrace"
            gctDict.at "public" ifAbsent{emptySequence}.do { mn ->
                preludeScope.addName(mn)
            }
            gctDict.at "confidential" ifAbsent {emptySequence}.do { mn ->
                preludeScope.addName(mn)
            }
            processGCT(gctDict, preludeScope)
        }
    }
}

method checkTraitBody(traitObjNode) {
//    util.log 70 verbose "checking trait object at line {traitObjNode.line}"
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

        method visitBind (o) up (as) {
            o.scope := as.parent.scope
            def lValue = o.dest
            if (lValue.kind == "identifier") then {
                lValue.isAssigned := true
            }
            return true
        }
        method visitCall (o) up (as) {
            o.scope := as.parent.scope
            def callee = o.receiver
            if (callee.kind == "identifier") then {
                callee.inRequest := true
            }
            return true
        }
        method visitBlock (o) up (as) {
            o.scope := newScopeIn(as.parent.scope) kind "block"
            true
        }
        method visitDefDec (o) up (as) {
            o.scope := as.parent.scope
            if (false != o.startToken) then {
                as.parent.scope.elementTokens.put(o.nameString, o.startToken)
            }
            if (o.value.isObject) then { o.value.name := o.nameString }
            true
        }
        method visitIdentifier (o) up (as) {
            var scope := as.parent.scope
            o.scope := scope
            if (o.isBindingOccurrence) then {
                if ((o.isDeclaredByParent.not) && {o.wildcard.not}) then {
                    checkForReservedName(o)
                    def kind = o.declarationKindWithAncestors(as)
                    if (kind.isParameter) then {
                        if (scope.variety == "object") then {
                            // this is a hack for declaring the parameters of the factory
                            // method of a dotted class.  The class's symbol table is that of the
                            // fresh object; the factory method's parameters need to go in
                            // the _enclosing_ scope.
                            scope := scope.parent
                            if (scope.variety != "method") then {
                                ProgrammingError.raise "object scope not in method scope"
                            }
                        }
                    }
                    scope.addNode(o) as (kind)
                }
            } elseif {o.wildcard} then {
                errormessages.syntaxError("'_' cannot be used in an expression")
                    atRange(o.line, o.linePos, o.linePos)
            }
            true
        }
        method visitImport (o) up (as) {
            o.scope := as.parent.scope
            xmodule.checkExternalModule(o)
            def gct = xmodule.parseGCT(o.path)
            def otherModule = newScopeIn(as.parent.scope) kind "module"
            otherModule.node := o
            processGCT(gct, otherModule)
            o.scope.at(o.nameString) putScope(otherModule)
            true
        }
        method visitInherits (o) up (as) {
            o.scope := as.parent.scope
            if (o.isUse) then {
                if (as.parent.canUse.not) then {
                    errormessages.syntaxError("use statements must " ++
                        "be inside an object, class, or trait")
                        atRange(o.line, o.linePos, o.linePos + 3)
                }
            } else {
                if (as.parent.canInherit.not) then {
                    errormessages.syntaxError("inherit statements must " ++
                        "be inside an object or class; a trait cannot inherit")
                        atRange(o.line, o.linePos, o.linePos + 7)
                }
            }
            true
        }
        method visitMethod (o) up (as) {
            def surroundingScope = as.parent.scope
            if (surroundingScope.isObjectScope.not) then {
                // This check needs to be here so long as the parser accepts
                // class declarations as statments, rather than as method
                // declarations.  Why does it do so?  Because of the old
                // "dotted" class syntax, wherein a class decl was actually a def.
                errormessages.syntaxError("class declarations are permitted only" ++
                    " inside an object") atRange(o.line, o.linePos, o.linePos + 4)
            }
            def ident = o.asIdentifier
            checkForReservedName(ident)
            surroundingScope.addNode(ident) as(k.methdec)
            ident.isDeclaredByParent := true
            if (ident.isBindingOccurrence) then {
                // aliased and excluded names are appliedOccurences
                o.scope := newScopeIn(surroundingScope) kind "method"
                if (o.returnsObject) then {
                    o.isFresh := true
                }
            }
            true
        }
        method visitMethodType (o) up (as) {
            o.scope := newScopeIn(as.parent.scope) kind "methodtype"
            // the scope for the parameters (including the type parameters,
            // if any) of this method.
            true
        }
        method visitObject (o) up (as) {
            def myParent = as.parent
            o.scope := newScopeIn(myParent.scope) kind "object"
            if (o.inTrait) then { checkTraitBody(o) }
            if (myParent.kind == "defdec") then {
                o.name := myParent.nameString
            }
            true
        }
        method visitModule(o) up (as) {
            // the module scope was set before the traversal started
            true
        }
        method visitTypeDec (o) up (as) {
            def enclosingScope = as.parent.scope
            enclosingScope.addNode(o.name) as(k.typedec)
            o.name.isDeclaredByParent := true
            o.scope := newScopeIn(enclosingScope) kind "typedec"
            // this scope will be the home for any type parameters.
            // If there are no parameters, it won't be used.
            // For now, we don't distinguish between type decs and type params
            true
        }
        method visitTypeLiteral (o) up (as) {
            o.scope := newScopeIn(as.parent.scope) kind "type"
            true
        }
        method visitTypeParameters(o) up (as) { o.scope := as.parent.scope ; true }
        method visitIf(o) up (as) { o.scope := as.parent.scope ; true }
        method visitMatchCase(o) up (as) { o.scope := as.parent.scope ; true }
        method visitTryCatch(o) up (as) { o.scope := as.parent.scope ; true }
        method visitSignaturePart(o) up (as) { o.scope := as.parent.scope ; true }
        method visitArray(o) up (as) { o.scope := as.parent.scope ; true }
        method visitMember(o) up (as) { o.scope := as.parent.scope ; true }
        method visitGeneric(o) up (as) { o.scope := as.parent.scope ; true }
        method visitString(o) up (as) { o.scope := as.parent.scope ; true }
        method visitNum(o) up (as) { o.scope := as.parent.scope ; true }
        method visitOp(o) up (as) { o.scope := as.parent.scope ; true }
        method visitVarDec(o) up (as) { o.scope := as.parent.scope ; true }
        method visitReturn(o) up (as) { o.scope := as.parent.scope ; true }
        method visitDialect(o) up (as) { o.scope := as.parent.scope ; true }
        method visitBlank(o) up (as) { o.scope := as.parent.scope ; true }
        method visitCommentNode(o) up (as) { o.scope := as.parent.scope ; true }
    }   // end of symbolTableVis

    def objectScopesVis = object {
        // This traversal can't be completed in the buildSymbolTable visitor,
        // because the visitation is top-down, and hence the scope of the
        // body of a def or method won't have been allocated when the
        // delcaration is visited.

        inherit ast.baseVisitor
        method visitDefDec (o) up (as) {
            if (o.returnsObject) then {
                o.scope.at(o.nameString)
                    putScope(o.returnedObjectScope)
            }
            true
        }
        method visitMethod (o) up (as) {
            def myParent = as.parent
            if (o.returnsObject) then {
                myParent.scope.at(o.nameString) putScope(o.returnedObjectScope)
                if (as.forebears.forebears.isEmpty.not) then {
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
        method visitObject (o) up (as) {
            collectParentNames(o)
            true
        }
        method visitModule (o) up (as) {
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
    if (ast.fakeSymbolTable == nodeScope) then {
        util.log 20 verbose "node {node} has no scope.\n{node.pretty 0}"
    }
    if (nodeScope.inheritedNames == completed) then {
        return
    }
    if (nodeScope.inheritedNames == inProgress) then {
        errormessages.syntaxError "cyclic inheritance or trait use"
            atRange(node.line, node.linePos, node.linePos)
    }
    nodeScope.inheritedNames := inProgress
    gatherInheritedNames(node)
    gatherUsedNames(node)
    nodeScope.inheritedNames := completed
}

method gatherInheritedNames(node) is confidential {
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
            } else {
                util.log 70 verbose "‹{node.nameString}›.superscope.node == nullNode"
            }
        } else {
            util.log 70 verbose "superscope of {node.nameString} is universal"
        }
    }
    superScope.elements.keysDo { each ->
        if (each != "self") then {
            objScope.addName(each) as(inheritedKind)
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
                atRange(a.oldName.line, a.oldName.linePos,
                        a.oldName.linePos + old.size - 1)
        }
    }
    inhNode.exclusions.do { exId ->
        inhNode.providedNames.remove(exId.nameString) ifAbsent {
            errormessages.syntaxError("can't exclude {exId.canonicalName} " ++
                "because it is not present in the inherited object")
                atRange(exId.line, exId.linePos,
                        exId.linePos + exId.nameString.size - 1)
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
        util.log 70 verbose "examining parents of trait {t} which has scope {traitScope}\ndefined in node {traitNode}"
        if (traitNode.isObject) then {
            collectParentNames(traitScope.node)
        } else {
            util.log 70 verbose "traitNode {traitNode} is not an object.\n{traitNode.pretty 1}"
        }
        traitScope.keysAndKindsDo { nm, kd ->
            if (kd.forUsers) then {
                util.log 70 verbose "meth {nm} is forUsers; (kind = {kd})"
                objScope.addName(nm) as(k.fromTrait)
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
                    atRange(a.oldName.line, a.oldName.linePos,
                            a.oldName.linePos + old.size - 1)
            }
        }
        t.exclusions.do { exId ->
            t.providedNames.remove(exId.nameString) ifAbsent {
                errormessages.syntaxError("can't exclude {exId.canonicalName} " ++
                    "because it is not available in the trait")
                    atRange(exId.line, exId.linePos,
                            exId.linePos + exId.nameString.size - 1)
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
            util.log 70 verbose("{objNode.nameString}'s scope = {objNode.scope}" ++
                  "\n and {objNode.nameString}'s localNames = {objNode.localNames}")
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
              readableStringFrom(sourceList) ++ ".\n    "
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

method readableStringFrom(xs:Sequence) {
    var result := ""
    xs.keysAndValuesDo { ix, v ->
        result := result ++ v.asString
        if (ix == (xs.size - 1)) then {
            result := result ++ " and "
        } elseif { ix < (xs.size - 1) } then {
            result := result ++ ", "
        }
    }
    result
}

method transformBind(bindNode) ancestors(as) {
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
                return ast.callNode.new(rcvr, [ part ]) scope(currentScope)
            } else {
                util.log 20 verbose "bind check 2 failed"
            }
        }
    }
    bindNode
}


method transformInherits(inhNode) ancestors(as) {
    // inhNode is (a shallow copy of) an inheritNode.  Transform it to deal
    // with superobject initialization and inherited names, including
    // inheritance modifiers
    def superObject = inhNode.value
    def currentScope = inhNode.scope
    if (currentScope.isObjectScope.not) then {
        errormessages.syntaxError "{inhNode.statementName} statements must be directly inside an object"
                    atRange(inhNode.line, inhNode.linePos, inhNode.linePos + (inhNode.statementName.size - 1))
    }
    if (superObject.isAppliedOccurenceOfIdentifier) then {
        // this deals with "inherit true" etc.
        def definingScope = currentScope.thatDefines(superObject.nameString)
        if (definingScope.variety == "built-in") then { return inhNode }
    }
    def superScope = currentScope.scopeReferencedBy(superObject)
    if (inhNode.isUse) then {
        // a `use` statement; no transformation necessary
    } elseif {inhNode.inheritFromMember} then {
        def newcall = ast.callNode.new(inhNode.value.receiver, [
            ast.requestPart.request(inhNode.value.value) withArgs( [] ) scope(currentScope),
            ast.requestPart.request "$object" withArgs (
                [ast.identifierNode.new("self", false) scope(currentScope)]) scope(currentScope)
            ]
        ) scope(currentScope)
        inhNode.value := newcall
    } elseif {inhNode.inheritFromCall} then {
        var superCall := inhNode.value
        superCall.with.push(ast.requestPart.request "$object"
            withArgs ( [ast.identifierNode.new("self", false) scope(currentScope)] ))
    } elseif {! util.extensions.contains "ObjectInheritance"} then {
        errormessages.syntaxError "inheritance must be from a freshly-created object"
            atRange(inhNode.line, superObject.linePos,
                superObject.linePos + superObject.nameString.size - 1)
    }
    inhNode
}

method transformCall(cNode) -> ast.AstNode {
    def methodName = cNode.nameString
    def s = cNode.scope
    if (cNode.receiver.isImplicit) then {
        def rcvr = s.resolveOuterMethod(methodName) fromNode(cNode)
        if (rcvr.isIdentifier) then {
            util.log 60 verbose "Transformed {cNode.pretty 0} answered identifier {rcvr.nameString}"
            return cNode
        }
        def definingScope = s.thatDefines(methodName)
        checkForAmbiguityOf (cNode)
            definedIn (definingScope) as (definingScope.kind(methodName))
        cNode.receiver := rcvr.receiver
        cNode.onSelf
    } else {
        cNode
    }
}

method rewriteMatches(topNode) {
    topNode.map { node, as ->
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

    def patternMatchModule = rewriteMatches(moduleObject)
    util.log_verbose "pattern-match rewriting done."

    if (util.target == "patterns") then {
        util.outprint "====================================="
        util.outprint "module after pattern-match re-writing"
        util.outprint "====================================="
        util.outprint(patternMatchModule.pretty(0))
        util.log_verbose "done"
        sys.exit(0)
    }

    buildSymbolTableFor(patternMatchModule) ancestors(preludeChain)
    util.log_verbose "symbol tables built."

    if (util.target == "symbols") then {
        util.outprint "====================================="
        util.outprint "module with symbol tables"
        util.outprint "====================================="
        util.outprint "top-level"
        util.outprint "Universal scope = {universalScope.asDebugString}"
        patternMatchModule.scope.withSurroundingScopesDo { each ->
            util.outprint (each.asString)
            util.outprint (each.elementScopesAsString)
            util.outprint "----------------"
        }
        util.outprint(patternMatchModule.pretty(0))
        util.log_verbose "done"
        sys.exit(0)
    }
    resolveIdentifiers(patternMatchModule)
}
