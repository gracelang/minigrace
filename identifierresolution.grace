dialect "standard"
// This is a transitional version of the compiler. There is now a dialect
// scope in addition to a built-in scope. The predefined preludeScope has
// been eliminated

import "io" as io
import "sys" as sys
import "ast" as ast
import "util" as util
import "xmodule" as xmodule
import "fastDict" as map
import "errormessages" as errormessages
import "identifierKinds" as k
import "mirror" as mirror

def completed = singleton "completed"
def inProgress = singleton "inProgress"
def undiscovered = singleton "undiscovered"
// constants used in detecting cyclic inheritance

var stSerial := 100

def reserved = ["self", "outer", "true", "false", "Unknown"]
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
    use identityEquality
    def elements is public = map.dictionary.empty
    def elementScopes is public = map.dictionary.empty
    def elementLines is public = map.dictionary.empty
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

    method clear {
        elements.clear
        elementScopes.clear
        elementLines.clear
        node := ast.nullNode
        inheritedNames := undiscovered
        if (isObjectScope) then {
            addName "self" asA(k.selfDef)
            at "self" putScope(self)
        }
    }
    method isEmpty { elements.size == 0 }
    method addName(n) {
        elements.at(n)put(k.methdec)
    }
    method addName (n) asA (kind:DeclKind) {
        def oldKind = elements.at(n) ifAbsent {
            elements.at(n)put(kind)
            elementLines.at(n)put(util.linenum)
            return
        }
        if (kind.isImplicit) then {
            return  // don't overwrite local id with id from trait or super
        }
        if (oldKind.isImplicit)  then {
            elements.at(n)put(kind)
            elementLines.at(n)put(util.linenum)
            return
        }
        errormessages.syntaxError("'{n}' cannot be" ++
            " redefined in a {variety} scope as {kind} because it is already declared as {oldKind}")
            atRange(util.linenum, util.linepos, util.linepos + n.size - 1)
    }
    method addNode (nd) asA (kind) {
        def ndName = nd.value
        checkShadowing(nd) asA(kind)
        def oldKind = elements.at(ndName) ifAbsent {
            elements.at(ndName)put(kind)
            elementLines.at(ndName)put(nd.line)
            return
        }
        if (kind.isImplicit) then {
            return  // don't overwrite local id with id from trait or super
        }
        if (oldKind.isImplicit)  then {
            elements.at(ndName)put(kind)
            elementLines.at(ndName)put(nd.line)
            return
        }
        var more := " in this scope"
        if (elementLines.containsKey(ndName)) then {
            more := " as a {oldKind}"
                ++ " on line {elementLines.at(ndName)}"
        }
        errormessages.syntaxError("'{nd.canonicalName}' cannot be"
            ++ " redeclared because it is already declared" ++ more )
            atRange(nd.range)
    }
    method contains (n) {
        if (elements.containsKey(n)) then { return true }
        if (isInBeginningStudentDialect.not) then { return false }
        if (self ≠ dialectScope) then { return false }
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
        def result = list.empty
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
        elements.at(n)
    }
    method kind (n) ifAbsent (action) {
        if { isInBeginningStudentDialect } then {
            if (isSpecial(n)) then { return k.methdec }
        }
        elements.at(n) ifAbsent (action)
    }
    method at(n) putScope(scp) {
        elementScopes.at(n)put(scp)
    }
    method getScope(n) {
        if (elementScopes.containsKey(n)) then {
            return elementScopes.at(n)
        }
//        util.log 70 verbose ("scope {self}: elements.containsKey({n}) = {elements.containsKey(n)}" ++
//              " but elementScopes.containsKey({n}) = {elementScopes.containsKey(n)}")
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
        elements.bindings.sortedBy(keyOrdering).do { each ->
            result := "{result} {each.key}({kind(each.key)}) "
        }
        result ++ "\n"
    }

    method asDebugString { "(ST {serialNumber})" }

    method elementScopesAsString {
        def referencedScopes = set.empty
        var result := "\n    [elementScopes:"
        elementScopes.bindings.sortedBy(keyOrdering).do { each ->
            result := "{result} {each.key}➞{each.value.asDebugString}"
            referencedScopes.add (each.value)
        }
        result := result ++ "]\n____________\n"
        list.withAll(referencedScopes)
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
            if (isSpecial(nm)) then { return dialectScope }
        }
        return universalScope
    }
    method thatDefines(name) ifNone(action) {
        withSurroundingScopesDo { s->
            if (s.contains(name)) then { return s }
        }
        if { isInBeginningStudentDialect } then {
            if (isSpecial(name)) then { return dialectScope }
        }
        action.apply
    }
    method thatDefines(name) {
        withSurroundingScopesDo { s->
            if (s.contains(name)) then { return s }
        }
        if { isInBeginningStudentDialect } then {
            if (isSpecial(name)) then { return dialectScope }
        }
        print(self.asStringWithParents)
        ProgrammingError.raise "no scope defines {name}"
    }
    method receiverScope(rcvrNode) {
        // rcvrNode is the receiver of a request. Answer the scope
        // associated with it.  So, if the receiver is a.b.c,
        // find the scope associated with c in the scope associated with b
        // in the scope associated with a in this scope.

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
            match (rcvrNode.kind)
                  case {"string" -> stringScope }
                  case {"num" -> numberScope }
        } elseif { rcvrNode.isSequenceConstructor } then {
            sequenceScope
        } elseif { rcvrNode.isObject } then {
            rcvrNode.scope
        } else {
            ProgrammingError.raise("unexpected receiver {rcvrNode.toGrace 0} " ++
                  "on line {rcvrNode.line}")
        }
    }
    method scopeForDottedName(dottedName:String) {
        // dottedName is a_1.a_2.a_3. ... .a_n
        // answers the scope for a_n, creating it if necessary
        def splitName = dottedName.split "."
        var result := self
        splitName.do { component ->
            var componentScope := result.getScope(component)
            if (componentScope.isUniversal) then {
                componentScope := newScopeKind "object"
                result.at (component) putScope (componentScope)
            }
            result := componentScope
        }
        result
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
        if (variety == "builtIn") then { return true }
        false
    }
    method isFreshObjectScope {     // modules, dialects, etc are not fresh
        if (variety == "object") then { return true }
        if (variety == "class") then { return true }
        false
    }
    method allowsShadowing {
        if (variety == "type") then { return true }
        isObjectScope
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

        def outerChain = list [ ]
        withSurroundingScopesDo { s->
            def v = s.variety
            if (s.contains(name)) then {
                if ((v == "dialect") || (v == "builtIn")) then {
                    return ast.memberNode.new(name,
                          ast.identifierNode.new("$" ++ v, false)
                                scope(self)) scope(self).
                                      onSelf.withGenericArgs(aNode.generics)
                } elseif { v == "module" } then {
                    return ast.memberNode.new(name, thisModule) scope(self).
                          onSelf.withGenericArgs(aNode.generics)
                }
                def rcvr = if (outerChain.isEmpty) then {
                    ast.identifierNode.new("self", false) scope(self).
                          setStart(ast.noPosition)
                } else {
                    ast.outerNode(outerChain).setScope(self).
                          setStart(ast.noPosition)
                }
                return ast.memberNode.new(name, rcvr).setScope(self).
                      setPositionFrom(aNode).
                        onSelf.withGenericArgs(aNode.generics)
            }
            if (v == "object") then {
                outerChain.addLast(s.node)
            }
        }
        reportUndeclaredIdentifier(aNode.asIdentifier)
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
        // If nd references an object, then the result
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
            errormessages.syntaxError "no method {nd.canonicalName}."
                  atRange (nd.range)
        } elseif {nd.kind == "outer"} then {
            nd.theObjects.last.scope
        } elseif {nd.kind == "op"} then {
            def receiverScope = self.scopeReferencedBy(nd.left)
            receiverScope.scopeReferencedBy(nd.asIdentifier)
        } elseif {nd.isCall} then { // this includes "memberNodes"
            def newNd = transformCall(nd)   // resolves implicit receiver
            def receiverScope = self.scopeReferencedBy(newNd.receiver)
            receiverScope.scopeReferencedBy(newNd.asIdentifier)
        } else {
            ProgrammingError.raise("{nd.nameString} is not a Call, Member, " ++
                  "Identifier, Outer or Op node.\n{nd.pretty 0}")
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
        if (priorScope.allowsShadowing && {self.allowsShadowing}) then {
            return
        }
        // new object attributes can shadow old, but other shadowing is illegal
        var more := ""
        if (priorScope.elementLines.containsKey(name)) then {
            def ln = priorScope.elementLines.at(name)
            if (ln > 0) then {
                more := " on line {priorScope.elementLines.at(name)}"
            }
        }
        if (newKind == k.vardec) then {
            def suggs = list [ ]
            def sugg = errormessages.suggestion.new
            if (sugg.replaceUntil("=")with("{name} :=")
                    onLine(ident.line)) then {
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
                ++ "redeclared in this {variety} scope because it is already declared in "
                ++ "{description} scope{more}. Use a different name.")
                atRange(ident.range)
        }
    }
}

def emptyScope = newScopeKind "empty"
ast.nullNode.scope := emptyScope      // TODO: eliminate!
def builtInsScope = newScopeIn(emptyScope) kind "builtIn"
def dialectScope = newScopeIn(builtInsScope) kind "dialect"
def moduleScope = newScopeIn(dialectScope) kind "module"
def graceObjectScope = newScopeIn(emptyScope) kind "object"
def booleanScope = newScopeIn(builtInsScope) kind "object"
def numberScope = newScopeIn(builtInsScope) kind "object"
def stringScope = newScopeIn(builtInsScope) kind "object"
def sequenceScope = newScopeIn(builtInsScope) kind "object"

initializeConstantScopes

def varFieldDecls = list []   // a list of declarations of var fields

util.setPosition(0, 0)
def thisModule = ast.identifierNode.new("$module", false)
                                       scope(moduleScope)
    // a way of referring to this module, other than by a chain of `outer`s.
    // The name is one that cannot occur naturally in a Grace program

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

method initializeConstantScopes {
    // populate the scopes corresponding to the language literals.
    // we reflect on a witness object, rather than using its type,
    // so that we include the confidential method names

    mirror.reflect(object{}).allMethodNames.do { each ->
        graceObjectScope.addName (mirror.numericName(each))
              asA (k.graceObjectMethod)
    }
    mirror.reflect(true).allMethodNames.do { each ->
        booleanScope.addName (mirror.numericName(each))
    }
    mirror.reflect(1).allMethodNames.do { each ->
        numberScope.addName (mirror.numericName(each))
    }
    mirror.reflect "a".allMethodNames.do { each ->
        stringScope.addName (mirror.numericName(each))
    }
    mirror.reflect [].allMethodNames.do { each ->
        sequenceScope.addName (mirror.numericName(each))
    }

    builtInsScope.addName "true"
    builtInsScope.addName "false"
    builtInsScope.at "true" putScope(booleanScope)
    builtInsScope.at "false" putScope(booleanScope)
    builtInsScope.addName "Unknown" asA (k.typedec)
    builtInsScope.addName "outer" asA(k.defdec)
    builtInsScope.addName "..." asA(k.defdec)
    builtInsScope.addName "print(1)"
    builtInsScope.addName "native(1)code(1)"
    builtInsScope.addName "native(1)header(1)"
}

method transformIdentifier(node) ancestors(anc) {
    // node is a (copy of an) ast node that represents an applied occurrence of
    // an identifer id.
    // This method may or may not transform node into another ast.
    // There is no spec for what this method should do.  The code below
    // was developed by addding and removing particular cases until
    // the transformed AST was sufficiecntly similar to the one emitted by the
    // old identifier resolution pass for the C code generator to accept it.
    // This method seems to do the following:
    // - id is self, $module, $dialect => do nothing
    // - id is outer => transform to an outerNode
    // - id is in an assignment position and a method ‹id›:=(_) is in scope => do nothing.  The enclosing bind will transform it.
    // - id is in the lexical scope: store binding occurrence of id in node
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
    if (nodeKind == k.selfDef) then {
        return node     // covers self, $module, and $dialect
    }
    checkForAmbiguityOf (node) definedIn (definingScope) asA (nodeKind)
    def v = definingScope.variety
    if ((v == "dialect") || (v == "builtIn")) then {
        def p = ast.identifierNode.new("$" ++ v, false) scope(nodeScope)
        return ast.memberNode.new(nm, p)
              scope(nodeScope).onSelf.withGenericArgs(node.generics)
    }
    if (nodeKind.isParameter) then { return node }

    if (definingScope == moduleScope) then {
        if (nodeKind == k.defdec) then { return node }
        if (nodeKind == k.vardec) then { return node }
        if (nodeKind == k.importdec) then { return node }
    }
    if (definingScope == nodeScope.enclosingObjectScope) then {
        return ast.memberNode.new(nm,
            ast.identifierNode.new("self", false) scope(nodeScope)
        ) scope(nodeScope).onSelf.withGenericArgs(node.generics)
    }
    if (nodeScope.isObjectScope.not
             && {nodeScope.isInSameObjectAs(definingScope)}) then {
        if (nodeKind == k.methdec) then { return node }     // can this ever happen?
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
    if (conflictingScope.variety == "builtIn") then {
        return  // TODO:  this is a temporary hack to
                // allow us to get rid of the built-ins.
                // If we can't redefine them in a Grace file
                // we can't get rid of them!
    }
    def conflictingKind = conflictingScope.kind(name)
    if (conflictingKind.fromParent) then {
        return    // request is ambiguous only if name is defined
                  // _directly_ in an enclosing scope.
    }
    var more := ""
    if (conflictingScope.elementLines.containsKey(name)) then {
        def earlierDef = conflictingScope.elementLines.at(name)
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

method guessesForIdentifier(node) {
    def nm = node.nameString
    def suggestions = set.empty
    def nodeScope = node.scope
    def thresh = 4      // max number of suggestions
    nodeScope.withSurroundingScopesDo { s ->
        s.elements.keysDo { v ->
            if (errormessages.name (nm) mightBeIntendedToBe(v)) then {
                suggestions.add(canonical(v))
                if (suggestions.size ≥ thresh) then { return suggestions }
            }
        }
    }
    nodeScope.elementScopes.keysDo { s ->
        if (nodeScope.elementScopes.at(s).contains(nm)) then {
            suggestions.add "{s}.{nm}"
            if (suggestions.size ≥ thresh) then { return suggestions }
        }
    }
    suggestions
}

method canonical(numericName) {
    def parts = numericName.split "("
    var output := parts.first
    for (2..parts.size) do { i ->
        def part_split = parts.at(i).split ")"
        def n = part_split.first.asNumber
        if (n.isNaN) then {
            output := output ++ part_split.first
        } else {
            output := output ++ "(" ++ ("_," * (n - 1)) ++ "_)"
            if (part_split.size > 1) then {
                output := output ++ part_split.second
            }
        }
    }
    return output
}

method reportUndeclaredIdentifier(node) {
    def guesses = guessesForIdentifier(node)
    def cn = node.canonicalName
    def varBit = if (cn.endsWith ")") then { "" } else { " variable or" }
    def guessBit = if (guesses.isEmpty) then {
        ""
    } else {
        ". Did you mean {errormessages.readableStringFrom(guesses) using "or"}?"
    }
    errormessages.syntaxError("unknown{varBit} method '{cn}'; " ++
          "this may be a spelling mistake, or an attempt to access a{varBit} " ++
          "method in another scope{guessBit}")
          atRange (node.range)
}

method reportAssignmentTo(node) declaredInScope(scp) {
    // Report a syntax error for an illegal assignment

    def name = node.nameString
    def kind = scp.kind(name)
    var lineInfo := ""
    if (scp.elementLines.containsKey(name)) then {
        lineInfo := " on line {scp.elementLines.at(name)}"
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
        errormessages.syntaxError("'{name}' cannot be changed " ++
            "because it was declared with 'def'{lineInfo}. To make it " ++
            "a variable, use 'var {name}' and ':=' in the declaration")
            atRange(node.range)
    } elseif { kind == k.importdec } then {
        errormessages.syntaxError("'{name}' cannot be changed " ++
            "because it was declared with 'import'{lineInfo}.")
            atRange(node.range)
    } elseif { kind == k.typedec } then {
        errormessages.syntaxError("'{name}' cannot be re-bound " ++
            "because it is declared as a type{lineInfo}.")
            atRange(node.range)
    } elseif { kind.isParameter } then {
        errormessages.syntaxError("'{name}' cannot be re-bound " ++
            "because it is declared as a parameter{lineInfo}.")
            atRange(node.range)
    } elseif { kind == k.methdec } then {
        errormessages.syntaxError("'{name}' cannot be re-bound " ++
            "because it is declared as a method{lineInfo}.")
            atRange(node.range)
    }
}

method resolveIdentifiers(topNode) {
    // Recursively replace bare identifiers with their fully-qualified
    // equivalents.  Creates and returns a new AST; map works
    // bottom-up, so by the time a node is mapped, all of its
    // descendents have already been mapped.

    def newModule = topNode.map { node, anc ->
        if ( node.isAppliedOccurrence ) then {
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

method writeGctForModule(moduleObject) {
    xmodule.writeGCT(moduleObject.name, generateGctForModule(moduleObject))
}

method generateGctForModule(module) {
    // The gct is essentially a representation of module's symbol table.
    // We built this representation by iterating over the symbol table.
    // Older versions of this method used to iterate over the ast,
    // but reused methods are not in the ast, and so were omitted.

    def gct = dictionary.empty
    def publicMethodTypes = list.empty
    def theDialect = module.theDialect.moduleName
    def methodList = list.empty
    def ms = module.scope
    def pathsToProcess = list.empty
    ms.keysAndKindsDo { vName, knd ->
        if (knd.forGct) then {
            methodList.add (vName ++ knd.tag)
            if (knd.isFresh) then {
                pathsToProcess.addLast(vName)
            }
        }
        if (knd == k.typedec) then {
            def v = ms.getScope(vName).node
            if (ast.nullNode ≠ v) then {
                gct.at "typedec-of:{v.nameWithParams}" put [v.toGrace 0]
            }
        } elseif { knd == k.methdec } then {
            var s := ms.getScope(vName)
            if (s.variety == "object") then { s := s.parent }
                // s is now the surrounding method
            def v = s.node
            if (ast.nullNode ≠ v) then {
                publicMethodTypes.add (methodSignature(v))
            }
        }
    }
    while { pathsToProcess.isEmpty.not } do {
        def subList = list.empty
        def vName = pathsToProcess.removeFirst
        util.log 45 verbose "generating gct entry for {vName}`"
        ms.scopeForDottedName(vName).keysAndKindsDo { subName, subKnd ->
            if (subKnd.forGct) then {
                subList.add (subName ++ subKnd.tag)
                if (subKnd.isFresh) then {
                    pathsToProcess.addLast "{vName}.{subName}"
                }
            }
        }
        gct.at "methods-of:{vName}" put (subList.sort)
    }
    gct.at "methods" put (methodList.sort)
    gct.at "modules" put (list(module.imports).sort)
    gct.at "publicMethodTypes" put(publicMethodTypes.sort)
    def p = util.infile.pathname
    gct.at "path" put [ if (p.isEmpty) then {
        ""
    } elseif { p.startsWith "/" } then {
        p
    } else {
        io.realpath(p)
    } ]
    gct.at "dialect" put (
        if (theDialect == "none") then { [] } else { [theDialect] }
    )
    gct
}

method methodSignature(methNode) -> String {
    var depth: Number := 0
    var s: String := ""
    var shouldEmitTypeParams := methNode.hasTypeParams
    for (methNode.signature) do { part ->
        s := s ++ part.name
        if (shouldEmitTypeParams) then {
            s := s ++ methNode.typeParams.toGrace(depth + 1)
            shouldEmitTypeParams := false   // emit them once, after first part
        }
        if (part.params.isEmpty.not) then {
            s := s ++ "("
            part.params.do { p ->
                s := "{s}{p.toGrace(depth + 1)}:{p.decType.toGrace(depth + 1)}"
            } separatedBy {
                s := "{s}, "
            }
            s := s ++ ")"
        }
    }
    "{s} → {methNode.decType.toGrace 0}"
}

method addFreshMethod (node) to (freshlist) for (gct) is confidential {
    def methName = node.nameString
    freshlist.add(methName)
    def freshMethExpression = node.body.last
    if (freshMethExpression.isObject) then {
        def exportedMethods = list.empty
        freshMethExpression.scope.keysAndKindsDo { key, knd ->
            if (knd.forGct) then {
                def flag = if (knd.fromGraceObject) then {
                    " (fgo)" } else { "" }
                exportedMethods.add(key ++ flag)
            }
        }
        gct.at "methods-of:{methName}" put (exportedMethods.sort)
    } else {
        ProgrammingError.raise
            "fresh method result of an unexpected kind: {freshMethExpression.pretty(0)}"
    }
}

method processGCT(gct, importedModuleScope) {
    // Populates importedModuleScope with the information in gct,
    // which is a dictionary mapping gct keys to collections.

    def moduleMethods = gct.at "methods" ifAbsent { [] } >> set
    moduleMethods.do { meth ->
        addMethod (meth) toScope (importedModuleScope)
    }
    while {moduleMethods.isEmpty.not} do {
        def meth = moduleMethods.anyone
        moduleMethods.remove(meth)
        def split = meth.split " "
        def methName = split.first
        def knd = if (split.size == 1) then {
            k.methdec
        } else {
            k.for(split.second)
        }
        if (knd == k.freshmeth) then {
            def objScope = importedModuleScope.scopeForDottedName(methName)
            gct.at "methods-of:{methName}" .do { each ->
                def eachName = each.split " ".first
                addMethod(each) toScope (objScope)
                def ns = newScopeIn(objScope) kind "object"
                objScope.at(eachName) putScope(ns)
                moduleMethods.add "{methName}.{each}"
            }
            def where' = valueOf {
                def namePrefix = methName.substringFrom 1 to (methName.lastIndexOf "." ifAbsent { 1 } - 1)
                importedModuleScope.scopeForDottedName(namePrefix)
            }
        }
    }
}

method addMethod (meth) toScope (s) {
    // meth is s string: <methodName>" <tag>"?
    // add it to scope s, with the approriate kind, based on the <tag>
    def split = meth.split " "
    if (split.size == 1) then {
        s.addName(meth) asA (k.methdec)
    } elseif {split.size == 2} then {
        s.addName(split.first) asA (k.for(split.second))
    }
}

var isInBeginningStudentDialect := false

method setupContext(moduleNode) {
    // define the built-in names
    util.setPosition(0, 0)

    dialectScope.clear      // so that resolve can be serially re-used.
    moduleScope.clear
    varFieldDecls.clear

    moduleScope.addName "$module" asA (k.selfDef)
    moduleScope.at "$module" putScope(moduleScope)

    moduleScope.addName "$dialect" asA (k.selfDef)
    moduleScope.at "$dialect" putScope(dialectScope)

    def dialectNode = moduleNode.theDialect
    def dialectName:String = dialectNode.value
    if (dialectName ≠ "none") then {
        xmodule.checkExternalModule(dialectNode)
        processGCT(xmodule.gctDictionaryFor(dialectName), dialectScope)
    }
    isInBeginningStudentDialect := (dialectName == "beginningStudent")
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
            def scope = enclosingNode.scope
            o.scope := scope
            def callee = o.receiver
            if (callee.isIdentifier) then {
                callee.inRequest := true
            }
            o.parts.do { each -> each.scope := scope }
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
        method visitAlias (o) up (ac) {
            o.scope := ac.parent.scope
            o.newName.accept(self) from (ac.extend(o))
            false   // no need to visit the aliasNode's other components
        }
        method visitImport (o) up (anc) {
            o.scope := anc.parent.scope
            xmodule.checkExternalModule(o)
            def gct = xmodule.gctDictionaryFor(o.moduleName)
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
                // The parser accepts method declarations as statments, and thus
                // class and trait declarations as statements too.
                // Here we check that they are inside an object.
                // This produces better diagnostics than rejecting them in
                // the parser, as well as simplifying the parser.

                errormessages.syntaxError("{o.description} declarations are permitted only" ++
                    " inside an object") atRange(o.range)
            }
            def ident = o.asIdentifier
            checkForReservedName(ident)
            if (ident.isBindingOccurrence) then {
                ident.isDeclaredByParent := true
                // aliased and excluded names are appliedOccurrences
                o.scope := newScopeIn(surroundingScope) kind "method"
                if (o.returnsObject && o.isOnceMethod.not) then {
                    o.isFresh := true
                }
                def knd = if (o.isRequired) then {
                    k.required
                } elseif {o.isFresh} then {
                    k.freshmeth
                } else {
                    k.methdec
                }
                surroundingScope.addNode (ident) asA (knd)
            }
            if (o.body.isEmpty.not && {o.body.last.isObject}) then {
                o.body.last.name := o.canonicalName
            }
            true
        }
        method visitMethodType (o) up (anc) {       // used to visit a methodSignatureNode
            def surroundingScope = anc.parent.scope
            if (o.isAppliedOccurrence) then {       // on rhs of an alias, or in an exclude
                o.scope := surroundingScope
                return true
            }
            def ident = o.asIdentifier
            checkForReservedName(ident)
            surroundingScope.addNode (ident) asA (k.methdec)
            ident.isDeclaredByParent := true
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
            if (enclosingScope.isObjectScope.not) then {
                errormessages.syntaxError("type declarations are permitted only" ++
                    " inside an object") atRange(o.range)
            }
            def ident = o.name
            checkForReservedName(ident)
            enclosingScope.addNode(ident) asA(k.typedec)
            ident.isDeclaredByParent := true
            o.scope := newScopeIn(enclosingScope) kind "typedec"
            // this scope will be the home for any type parameters.
            // If there are no parameters, it won't be used.
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
        method visitMember(o) up (anc) {
            visitCall(o) up (anc)
        }
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
            def rhs = o.value
            if (rhs.returnsObject) then {
                o.scope.at(o.nameString) putScope(rhs.returnedObjectScope)
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
    // node is an object or class; puts the names that it inherits and uses into
    // its scope.  In the process, checks for a cycle in the inheritance chain
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
                errormessages.syntaxError("can't define an alias for " ++ a.oldName.canonicalName ++
                    " because it is not present in the inherited object")
                    atRange(a.oldName.range)
            }
        }
        inhNode.exclusions.do { exMeth ->
            inhNode.providedNames.remove(exMeth.nameString) ifAbsent {
                errormessages.syntaxError("can't exclude {exMeth.canonicalName} " ++
                    "because it is not present in the inherited object")
                    atRange(exMeth.range)
            }
        }
    }
}

method gatherUsedNames(objNode) is confidential {
    // For each of objNodes's used traits, gather the names
    // introduced by that trait, as modified by alias and exclude.

    def traitMethods = map.dictionary.empty
    def objScope = objNode.scope
    objNode.usedTraits.do { t ->
        def traitScope = objScope.scopeReferencedBy(t.value)
        def traitNode = traitScope.node
        def requiredNames = list.empty
        if (traitNode.isNull.not) then {
            // if traitNode is null, the trait's scope comes from a gct, and
            // we have no information as to whether or not it references a trait.
            // TODO: add this information to gct
            if (traitNode.isTrait.not) then {
                errormessages.syntaxError("{t.value.toGrace 0} is not a trait,"
                      + " so it may not appear in a 'use' statement")
                      atRange(t)
            }
        }
        if (traitNode.isObject) then {
            collectParentNames(traitScope.node)
        }
        traitScope.keysAndKindsDo { nm, kd ->
            if (kd.forUsers) then {
                objScope.addName(nm) asA(k.fromTrait)
                t.providedNames.add(nm)
                if (kd.isRequired) then {
                    requiredNames.add(nm)
                }
            }
        }
        t.aliases.do { a ->
            def old = a.oldName.nameString
            if (traitScope.contains(old)) then {
                t.providedNames.add(a.newName.nameString)
            } else {
                errormessages.syntaxError("can't define an alias for " ++ a.oldName.canonicalName ++
                    " because it is not present in the trait")
                    atRange(a.oldName.range)
            }
        }
        t.exclusions.do { exMeth ->
            t.providedNames.remove(exMeth.nameString) ifAbsent {
                errormessages.syntaxError("can't exclude {exMeth.canonicalName} " ++
                    "because it is not available in the used trait")
                    atRange(exMeth.range)
            }
        }
        t.providedNames.do { methName ->
            if (requiredNames.contains(methName).not) then {
                def definingTraits = traitMethods.at(methName) ifAbsent { list [] }
                definingTraits.push(t)
                traitMethods.at(methName)put(definingTraits)
            }
        }
    }
    checkForConflicts(objNode, traitMethods)
}

method checkForConflicts(objNode, traitMethods) {
    // traitMethods is a dictionary with methodNames as keys, and
    // a list of sources as values.  Multiple sources indicate a conflict,
    // unless there is a local definition too.
    def conflicts = list.empty

    traitMethods.keysDo { methName ->
        def sources = traitMethods.at(methName)
        if (sources.size > 1) then {    // a method has more than one source trait
            if (objNode.localNames.contains(methName).not) then {
                conflicts.addLast (conflictForMethodName(methName) from(sources))
            }
        }
    }

    if (conflicts.isEmpty) then { return }

    var maxSourceLine := 0
    var message := if (conflicts.size > 1) then {
        "trait conflicts found.\n    "
    } else {
        "trait conflict found. "
    }
    conflicts.do { each ->
        def sourceList = each.sources.map { s -> s.nameString }
        maxSourceLine := each.sources.fold {a, s -> max(a, s.line) }
              startingWith(maxSourceLine)
        message := message ++ "Method `{each.methodName}` is defined in " ++
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
    if (superExpr.isAppliedOccurrence) then {
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
        if ((sv == "builtIn") || (sv == "dialect")) then {
            // this deals with "inherit true" etc; identifiers from the built-in
            // scope have not been transformed to member nodes

            def receiverNode = ast.identifierNode.new("$" ++ sv, false) scope(currentScope)
            def newCall = ast.callNode.new(receiverNode, [
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
            [ast.identifierNode.new("self", false) scope(currentScope)]) scope(currentScope) ]
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
        if ((rcvr.isMember) && {rcvr.value == "out(1)"}) then {
            native "js" code "debugger;"
        }
        if (rcvr.isIdentifier) then {
            util.log 60 verbose "Transformed {cNode.pretty 0} did nothing"
            return cNode
        }
        def definingScope = s.thatDefines(methodName)
        checkForAmbiguityOf (cNode)
            definedIn (definingScope) asA (definingScope.kind(methodName))
        cNode.receiver := rcvr.receiver
        cNode.onSelf
        if (definingScope.kind(methodName).isFresh) then {
            cNode.isFresh := true
            cNode.returnedObjectScope := definingScope.getScope(methodName)
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
            def rcvrScope = cNode.scope.receiverScope(cNode.receiver)
            def ansrScope = rcvrScope.getScope(cNode.nameString)
            if (ansrScope.isFreshObjectScope) then {
                result.isFresh := true
                result.returnedObjectScope := ansrScope
            }
        }
    }
    result
}

method resolve(moduleNode) {
    util.log_verbose "rewriting tree."
    setupContext(moduleNode)
    util.setPosition(0, 0)
    moduleNode.scope := moduleScope
    def dialectObject = ast.moduleNode.body [moduleNode]
        named "$dialect" scope (dialectScope)
    def dialectChain = ast.ancestorChain.with(dialectObject)

    buildSymbolTableFor(moduleNode) ancestors(dialectChain)
    util.log_verbose "symbol tables built."

    if (util.target == "symbols") then {
        def additionalScopes = set.empty
        util.outprint "====================================="
        util.outprint "module with symbol tables"
        util.outprint "====================================="
        util.outprint "top-level"
        util.outprint "Universal scope = {universalScope.asDebugString}"
        moduleNode.scope.withSurroundingScopesDo { each ->
            util.outprint (each.asString)
            util.outprint (each.elementScopesAsString)
            each.elementScopes.values >> additionalScopes
        }
        additionalScopes.do { each ->
            util.outprint (each.asString)
            util.outprint (each.elementScopesAsString)
            util.outprint "----------------"
        }
        util.outprint(moduleNode.pretty 0)
        util.log_verbose "done"
        util.outfile.close
        sys.exit(0)
    }
    resolveIdentifiers(moduleNode)
}
