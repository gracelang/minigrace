#pragma DefaultVisibility=public
import "io" as io
import "sys" as sys
import "ast" as ast
import "util" as util
import "xmodule" as xmodule
import "mgcollections" as collections
import "mirrors" as mirrors
import "errormessages" as errormessages

method printBacktrace(caption) {
    try { Exception.raise "here I am"
    } catch { ex ->
        print(caption)
        for (ex.backtrace) do { line -> print(line) }
    }
}
method printAstHierarchy(node) {
    print "AST chain starting with {node}"
    var n := node.parent
    while {n != ast.nullNode} do {
        print(n)
        n := n.parent
    }
}
// constants used in detecting cyclic inheritance
def completed = object { 
//    inherits Singleton.new      TODO — uncomment once this is in STABLE
    var asString is readable := "completed"
}
def inProgress = object { 
//    inherits Singleton.new      TODO — uncomment once this is in STABLE
    var asString is readable := "inProgress"
}
def undiscovered = object {
//    inherits Singleton.new      TODO — uncomment once this is in STABLE
    var asString is readable := "undiscovered"
}
method newScopeKind(variety') {
    // for the top of the scope chain
    // TODO: switch the dependency between this and the next method.
    def s = newScopeIn(object {})kind(variety')
    s.hasParent := false
    s
}
factory method newScopeIn(parent') kind(variety') {
    def elements = collections.map.new
    def elementScopes = collections.map.new
    def elementDeclarations = collections.map.new
    def elementLines = collections.map.new
    def elementTokens = collections.map.new
    def parent = parent'
    var hasParent := true
    var variety := variety'
    var name := ""
    var node := ast.nullNode        // the ast node that I'm in
    var inheritedNames := undiscovered
    method isEmpty { elements.size == 0 }
    method addName(n) {
        elements.put(n, "method")
        elementLines.put(n, util.linenum)
    }
    method addName(n)as(k) {
        elements.put(n, k)
        elementLines.put(n, util.linenum)
    }
    method addNode(nd) as(kind) {
        def name = nd.value
        def oldKind = elements.get(name) ifAbsent { "inherited" }
        if (oldKind == "inherited")  then {
            elements.put(name, kind)
            elementLines.put(name, nd.line)
//            if (name == "asString") then {
//                util.log_verbose "add {name} to {self} as {kind}"
//            }
        } else {
            print(self)
            var more := " in this scope"
            if (elementLines.contains(name)) then {
                more := " as a {oldKind}"
                    ++ " on line {elementLines.get(name)}"
            }
            errormessages.syntaxError("'{name}' cannot be"
                ++ " redeclared because it is already declared"
                ++ more ++ " as well as here at line {nd.line}.")
                atRange(nd.line, nd.linePos, nd.linePos + name.size - 1)
        }
    }
    method contains(n) {
        elements.contains(n)
    }
    method do(b) {
        var cur := self
        while {b.apply(cur); cur.hasParent} do {
            cur := cur.parent
        }
    }
    method keysAsList {
        def result = list.empty
        for (elements) do { each -> result.addLast(each) }
        result
    }
    method keysAndValuesAsList {
        def result = list.empty
        for (elements) do { each -> result.addLast(each::kind(each)) }
        result
    }
    method kind(n) {
        elements.get(n)
    }
    method bindAs(n) {
        parent.elementScopes.put(n, self)
    }
    method putScope(n, scp) {
        elementScopes.put(n, scp)
    }
    method getScope(n) {
        if (elementScopes.contains(n)) then {
            return elementScopes.get(n)
        }
        //    print("scope {self}: elements.contains({n}) = {elements.contains(n)}" ++
        //        " but elementScopes.contains({n}) = {elementScopes.contains(n)}")
        //  This occurs for names like `true` that are built-in, but for which there
        //  is no symbolTable describing their atttributes.
        //  TODO: add complete information for the built-in names.
        //  in the meantime:
        return universalScope
    }
    method new(v) {
        newScopeIn(self) kind(v)
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
        var result := "variety = {variety}:\n"
        for (elements) do { each ->
            result := result ++ each.asString ++ "({kind(each)}) "
        }
        result ++ "\n"
    }
    method hasDefinitionInNest(nm) {
        self.do { s ->
            if (s.contains(nm)) then {
                return true
            }
        }
        return false
    }
    method kindInNest(nm) {
        self.do {s->
            if (s.contains(nm)) then {
                def kind = s.kind(nm)
                if (kind == "inherited") then {
                    return "method"
                } else {
                    return kind
                }
            }
        }
        return "undefined"
    }
    method thatDefines(name) ifNone(action) {
        self.do { s->
            if (s.contains(name)) then { return s }
        }
        action.apply
    }
    method thatDefines(name) {
        self.do { s->
            if (s.contains(name)) then { return s }
        }
        print(self.asStringWithParents)
        ProgrammingError.refine "no scope defines {name}"
    }

    method findDeepMethod(name) {
        // APB: I moved this method from the top-level (where it operated
        // on the now-defunct 'scope' module variable) to this class.
        //
        // TODO: figure out what the purpose of this method is, and make it work!
        var mem := ast.identifierNode.new("self", false)
        self.do { s->
            if (s.contains(name)) then {
                if (s.variety == "dialect") then {
                    return ast.memberNode.new(name,
                        ast.identifierNode.new("prelude", false))
                }
                return ast.memberNode.new(name, mem)
            }
            match(s.variety)
                case { "object" -> mem := ast.memberNode.new("outer", mem) }
                case { "class" ->
                    mem := ast.memberNode.new("outer", mem)
                    mem := ast.memberNode.new("outer", mem)
                    }
                case { _ -> }
        }
        // Not found - leave it alone
        return ast.identifierNode.new(name, false)
    }
    method shadows(node) {
        // determines if the identifier node shadows an enclosing identifier.
        def name = node.nameString
        if (! elements.contains(name)) then { return false }
        if (elementLines(name) == node.line) then { return false }
        if ((kind(name) == "inherited").andAlso{node.kind == "method"}) then {
            return false 
        }
        return true
    }
    method scopeReferencedBy(node) {
        // Finds the scope referenced by node.
        // If node references an object, then the returned
        // scope will have bindings for the methods of that object.
        // Otherwise, it will be the empty scope.
        if (node.kind == "identifier") then {
            def sought = node.nameString
            if (sought == "self") then {
                var s := self
                while {s.hasParent} do {
                    if (s.variety == "object") then { return s }
                    if (s.variety == "class") then { return s }
                    if (s.variety == "module") then { return s }
                    s := s.parent
                }
            } elseif (sought == "prelude") then {
                return preludeScope
            } else {
                self.do {s->
                    if (s.contains(sought)) then {
                        return s.getScope(sought)
                    }
                }
                ProgrammingError.raise "Identifier {sought} is undeclared."
            }
        } elseif (node.kind == "member") then {
            def targetScope = self.scopeReferencedBy(node.in)
            if (node.value == "outer") then {
                return targetScope.parent
            }
            return targetScope.scopeReferencedBy(node.asIdentifier)
        } elseif (node.kind == "call") then {
            return scopeReferencedBy(node.value)
        }
        ProgrammingError.raise("{node.value} is not a Call, Member or Identifier\n"
            ++ node.pretty(0))
    }
    method enclosingObjectScope {
        // Answer the closest enclosing scope that describes an object,
        // class or module scope
        self.do { s ->
            if (s.variety == "object") then { return s }
            if (s.variety == "class") then { return s }
            if (s.variety == "module") then { return s }
        }
        ProgrammingError "no object scope found!"
        // the outermost scope should always be a module scope.
    }
}

def emptyScope = newScopeKind("empty")
ast.nullNode.symbolTable := emptyScope      // TODO: eliminate!
def builtInsScope = newScopeIn(emptyScope) kind("built-in")
def preludeScope = newScopeIn(builtInsScope) kind("dialect")
def moduleScope = newScopeIn(preludeScope) kind("module")
def graceObjectScope = newScopeIn(emptyScope) kind("object")

def universalScope = object {
    // The scope that defines every identifier,
    // used when we have no information about an object
    inherits newScopeIn(emptyScope) kind("universal")
    method hasParent { false }
    method parent { ProgrammingError.raise "universal scope has no parent" }
    method addName(n) { ProgrammingError.raise "can't add to the universal scope" }
    method addName(n)as(k) { ProgrammingError.raise "can't add to the universal scope" }
    method addNode(n)as(k) { ProgrammingError.raise "can't add to the universal scope" }
    method contains(n) { true }
    method do(b) { b.apply(self) }
    method kind(n) { "unknown" }
    method putScope(n, scp) { }
    method getScope(n) { self }
}

method rewritematchblockterm(arg) {
    util.setPosition(arg.line, arg.linePos)
    if (arg.kind == "num") then {
        return [arg, []]
    }
    if (arg.kind == "string") then {
        return [arg, []]
    }
    if (arg.kind == "boolean") then {
        return [arg, []]
    }
    if ((arg.kind == "call").andAlso {arg.value.value.substringFrom(1)to(6)
        == "prefix"}) then {
        return [arg, []]
    }
    if (arg.kind == "member") then {
        return [arg, []]
    }
    if (arg.kind == "call") then {
        def bindings = []
        def subpats = []
        for (arg.with) do { part ->
            for (part.args) do { a ->
                def tmp = rewritematchblockterm(a)
                subpats.push(tmp[1])
                for (tmp[2]) do {b->
                    bindings.push(b)
                }
            }
        }
        def callpat = ast.callNode.new(
            ast.memberNode.new(
                "new",
                ast.memberNode.new("MatchAndDestructuringPattern",
                    ast.identifierNode.new("prelude", false)
                )
            ),
            [ast.callWithPart.new("new", [arg.value, ast.arrayNode.new(subpats)])]
        )
        return [callpat, bindings]
    }
    if (arg.kind == "identifier") then {
        def varpat = ast.callNode.new(
            ast.memberNode.new(
                "new",
                ast.memberNode.new("VariablePattern",
                    ast.identifierNode.new("prelude", false)
                )
            ),
            [ast.callWithPart.new("new", [ast.stringNode.new(arg.value)])]
        )
        if (arg.dtype != false) then {
            if (arg.dtype.kind == "identifier") then {
                return [ast.callNode.new(
                    ast.memberNode.new(
                        "new",
                        ast.memberNode.new("AndPattern",
                            ast.identifierNode.new("prelude", false)
                        )
                    ),
                    [ast.callWithPart.new("new", [varpat, arg.dtype])]
                ), [arg]]
            }
            def tmp = rewritematchblockterm(arg.dtype)
            def bindings = [arg]
            for (tmp[2]) do {b->
                bindings.push(b)
            }
            def bindingpat = ast.callNode.new(
                ast.memberNode.new(
                    "new",
                    ast.memberNode.new("AndPattern",
                        ast.identifierNode.new("prelude", false)
                    )
                ),
                [ast.callWithPart.new("new", [varpat, tmp[1]])]
            )
            return [bindingpat, bindings]
        }
        return [varpat, [arg]]
    }
    if (arg.kind == "typeliteral") then {
        return [arg, []]
    }
    Error.raise("Internal error in compiler: fell through when rewriting match block"
        ++ "of unexpected kind '{arg.kind}'.")
}
method rewritematchblock(blk) {
    def arg = blk.params[1]
    var pattern := false
    var newparams := collections.list.new
    for (blk.params) do { p ->
        newparams.push(p)
    }
    if ((arg.kind == "num") || (arg.kind == "string") ||
        (arg.kind == "boolean")) then {
        def tmp = rewritematchblockterm(arg)
        pattern := tmp[1]
        newparams := tmp[2]
    }
    if (arg.kind == "identifier") then {
        def varpat = ast.callNode.new(
            ast.memberNode.new(
                "new",
                ast.memberNode.new("VariablePattern",
                    ast.identifierNode.new("prelude", false)
                )
            ),
            [ast.callWithPart.new("new", [ast.stringNode.new(arg.value)])]
        )
        if (arg.dtype != false) then {
            match (arg.dtype.kind)
                case { "identifier" ->
                    pattern := ast.callNode.new(
                        ast.memberNode.new("new",
                            ast.memberNode.new("AndPattern",
                                ast.identifierNode.new("prelude", false)
                                )
                            ),
                        [ast.callWithPart.new("new", [varpat, arg.dtype])])
                } case { "op" ->
                    pattern := ast.callNode.new(
                        ast.memberNode.new("new",
                            ast.memberNode.new("AndPattern",
                                ast.identifierNode.new("prelude", false)
                                )
                            ),
                        [ast.callWithPart.new("new", [varpat, arg.dtype])])
                } case { _ ->
                    def tmp = rewritematchblockterm(arg.dtype)
                    def bindingpat = ast.callNode.new(
                        ast.memberNode.new("new",
                            ast.memberNode.new("AndPattern",
                                ast.identifierNode.new("prelude", false)
                                )
                            ),
                        [ast.callWithPart.new("new", [varpat, tmp[1]])]
                    )
                    pattern := bindingpat
                    for (tmp[2]) do {p->
                        newparams.push(p)
                    }
                }
//            pattern := resolveIdentifiers(pattern)
        } else {
            if (false != blk.matchingPattern) then {
                if (blk.matchingPattern.value == arg.value) then {
//                    pattern := resolveIdentifiers(arg)
                    pattern := arg
                    newparams := []
                }
            }
        }
    } else {
        if (false != blk.matchingPattern) then {
            if (blk.matchingPattern.value == arg.value) then {
//                pattern := resolveIdentifiers(arg)
                pattern := arg
                newparams := []
            }
        }
    }
    def newblk = ast.blockNode.new(newparams, blk.body)
    newblk.matchingPattern := pattern
    newblk.line := blk.line
    return newblk.withParentRefs
}



method rewriteIdentifier(node) {
    // node is a (copy of an) ast node that represents an applied occurence of
    // an identifer id.   This implies that node is a leaf in the ast.
    // This method may or may not transform node into another ast.
    // There is no spec for what this method should do.  The code below 
    // was developed by addding and removing particular cases until
    // the transformed AST was sufficiecntly similar to the one emitted by the
    // old revolveidentifiers pass for the C code generator to accept it.
    // This method seems to do the following:
    // - id is self => do nothing
    // - id is super => do nothing
    // - id is in an assignment position and a method ‹id›:= is in scope:
    //          replace node by a method request
    // - id is in the lexical scope: store binding occurence of id in node
    // - id is a method in an outer scope: make into member nodes.
    //  TODO: make references to fields direct
    // - id is a self-method: replace node by a request on self
    // - id is not declared: generate an error message
    var nm := node.value
    def nodeScope = node.scope
    def nmGets = nm ++ ":="
    util.setPosition(node.line, node.linePos)
    if (node.isAssigned) then {
        if (nodeScope.hasDefinitionInNest(nm)) then {
            if (nodeScope.hasDefinitionInNest(nmGets)) then {
                if (nodeScope.kindInNest(nmGets) == "method") then {
                    def meth = nodeScope.findDeepMethod(nmGets)
                    def meth2 = ast.memberNode.new(nm, meth.in)
                    return ast.callNode.new(meth2, [ast.callWithPart.new(meth2.value)]).
                        withParentRefs
                }
            }
        }
    }
    if (nodeScope.hasDefinitionInNest(nm).not) then {
        reportUndeclaredIdentifier(node)
    }
    if (nm == "outer") then {
        def selfId = ast.identifierNode.new("self", false)
        def memb = ast.memberNode.new("outer", selfId)
        selfId.parent := memb
        return memb
    }
    if (nm == "self") then {
        return node
    }
    def definingScope = nodeScope.thatDefines(nm)
    def v = definingScope.variety
    def declKind = definingScope.kind(nm)
    if (declKind == "parameter") then { return node }
    if (declKind == "typeparam") then { return node }
    if (definingScope == nodeScope) then {
        if (declKind == "defdec") then { return node }
        if (declKind == "vardec") then { return node }
    }
    if (definingScope == nodeScope.enclosingObjectScope) then {
        return ast.memberNode.new(nm,
            ast.identifierNode.new("self", false)).withParentRefs
    }
    if (v == "built-in") then {
        return node
    }
    if (v == "dialect") then {
        return ast.memberNode.new(nm,
            ast.identifierNode.new("prelude", false)).withParentRefs
    }
    if (declKind == "method") then {
        return nodeScope.findDeepMethod(nm)
    }
    node
}
method reportUndeclaredIdentifier(node) {
    if (node.wildcard) then {
        errormessages.syntaxError("'_' can be used only as a parameter")
            atRange(node.line, node.linePos, node.linePos)
    }
    def nodeScope = node.scope
    def nm = node.nameString
    def suggestions = []
    var suggestion
    for (nodeScope.elements) do { v ->
        var thresh := 1
        if (nm.size > 2) then {
            thresh := ((nm.size / 3) + 1).truncated
        }
        if (errormessages.dameraulevenshtein(v, nm) <= thresh) then {
            suggestion := errormessages.suggestion.new
            suggestion.replaceRange(node.linePos, node.linePos + 
                node.value.size - 1)with(v)onLine(node.line)
            suggestions.push(suggestion)
        }
    }
    for (nodeScope.elementScopes) do { s ->
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
        errormessages.syntaxError "Unknown method '{nm}'. This may be due to a spelling mistake or an attempt to access a method in another scope.{extra}"
            atRange(node.line, node.linePos, node.linePos +
                highlightLength - 1)
            withSuggestions(suggestions)
    }
    print "Unknown name {nm}."
    print(nodeScope.asStringWithParents)
    print "AST one level up from {node}"
    print(node.parent.pretty(0))
    print "AST two levels up from {node}"
    print(node.parent.parent.pretty(0))
    print "AST three levels up from {node}"
    print(node.parent.parent.parent.pretty(0))
    errormessages.syntaxError("Unknown variable or method '{nm}'. This may be a spelling mistake or an  attempt to access a variable in another scope.")atRange(
        node.line, node.linePos, node.linePos + highlightLength - 1)withSuggestions(suggestions)
}

method checkDuplicateDefinition(declNode) {
    def name = declNode.nameString
    if (declNode.scope.shadows(declNode)) then {
        var more := " in this scope"
        var which
        if (declNode.scope.elementLines.contains(name)) then {
            which := if (declNode.scope == emptyScope) then { " in emptyScope"
                     } elseif {declNode.scope == preludeScope} then { " in preludeScope"
                     } elseif (declNode.scope == moduleScope) then { " in moduleScope"
                     } else { "" }
            more := " as a {declNode.scope.kind(name)}"
                ++ " on line {declNode.scope.elementLines.get(name)} as well as here at line {declNode.line}"
        }
        errormessages.syntaxError("'{name}' cannot be"
            ++ " redeclared{which} because it is already declared"
            ++ more ++ ".")
            atRange(declNode.line, declNode.linePos,
                    declNode.linePos + name.size - 1)
    }
}
method checkRedefinition(ident)as(kind) {
    if ((false == ident) || (true == ident)) then {
         ProgrammingError.raise "ident node is Boolean {ident}"
    }
    def name = ident.value
    def priorScope = ident.scope.thatDefines(name) ifNone {
        return
    }
    if (priorScope.elementDeclarations.contains(name)) then {
        def priorKind = priorScope.kind(name)
        // methods can shadow methods, but other shadowing is illegal
        if ((kind != "method") || (priorKind != "method")) then {
            var more := ""
            if (priorScope.elementLines.contains(name)) then {
                more := " on line {priorScope.elementLines.get(name)}"
            }
            if ((kind == "def").orElse {kind == "typedef"}) then {
                errormessages.syntaxError("'{name}' cannot be "
                    ++ "redeclared because it is already declared in "
                    ++ "scope{more}.")
                    atRange(ident.line, ident.linePos,
                        ident.linePos + name.size - 1)
            } else {
                def suggs = collections.list.new
                def sugg = errormessages.suggestion.new
                if (sugg.replaceUntil("=")with("{name} :=")
                        onLine(ident.line)
                    ) then {
                    suggs.push(sugg)
                }
                errormessages.syntaxError("'{name}' cannot be "
                        ++ "redeclared because it is already declared in "
                        ++ "scope{more}. To assign to the existing variable, "
                        ++ "remove 'var'.")
                    atRange(ident.line, ident.linePos,
                        ident.linePos + name.size - 1)
                    withSuggestions(suggs)
            }
        }
    }
    util.setline(ident.line)
    ident.scope.elementDeclarations.put(name, true)
}

method resolveIdentifiers(topNode) {
    // Recursively replace bare identifiers with their fully-qualified
    // equivalents.
    // This creates a new AST
    if (topNode == false) then {
        ProgrammingError.raise "**************** topNode == false!! *************"
    }
    topNode.map { node ->
        if ( node.isAppliedOccurenceOfIdentifier ) then {
            rewriteIdentifier(node)
        } elseif { node.isInherits } then {
            transformInherits(node)
        } else {
            node
        } 
    } parent (ast.nullNode)
}

method processGCT(gct, otherModule) {
    def classes = collections.map.new
    if (gct.contains("classes")) then {
        for (gct.get("classes")) do {c->
            def cmeths = []
            def constrs = gct.get("constructors-of:{c}")
            def classScope = newScopeIn(otherModule) kind("class")
            for (constrs) do {constr->
                def ns = newScopeIn(otherModule) kind("object")
                classScope.addName(constr)
                classScope.putScope(constr, ns)
                for (gct.get("methods-of:{c}.{constr}")) do {mn->
                    ns.addName(mn)
                }
            }
            otherModule.addName(c)
            otherModule.putScope(c, classScope)
        }
    }
    if (gct.contains("fresh-methods")) then {
        for (gct.get("fresh-methods")) do {c->
            def mScope = newScopeIn(otherModule) kind("module")
            for (gct.get("fresh:{c}")) do {mn->
                mScope.addName(mn)
            }
            otherModule.addName(c)
            otherModule.putScope(c, mScope)
        }
    }
}

method setupContext(values) {
    // define the built-in names
    util.setPosition(0, 0)

    builtInsScope.addName "Type" as "typedef"
    builtInsScope.addName "Object" as "typedef"
    builtInsScope.addName "Unknown" as "typedef"
    builtInsScope.addName "String" as "typedef"
    builtInsScope.addName "Number" as "typedef"
    builtInsScope.addName "Boolean" as "typedef"
    builtInsScope.addName "Block" as "typedef"
    builtInsScope.addName "Done" as "typedef"
    builtInsScope.addName "done" as "def"
    builtInsScope.addName "true" as "def"
    builtInsScope.addName "false" as "def"
    builtInsScope.addName "self" as "def"
    builtInsScope.addName "super" as "def"
    builtInsScope.addName "outer" as "def"
    builtInsScope.addName "readable"
    builtInsScope.addName "writable"
    builtInsScope.addName "public"
    builtInsScope.addName "confidential"
    builtInsScope.addName "override"
    builtInsScope.addName "parent"
    builtInsScope.addName "..." as "def"

    preludeScope.addName "for()do"
    preludeScope.addName "while()do"
    preludeScope.addName "print"
    preludeScope.addName "Exception" as "def"
    preludeScope.addName "PrimitiveArray" as "def"
    preludeScope.addName "ProgrammingError" as "def"

    graceObjectScope.addName "=="
    graceObjectScope.addName "!="
    graceObjectScope.addName "≠"
    graceObjectScope.addName "basicAsString"
    graceObjectScope.addName "asString"
    graceObjectScope.addName "asDebugString"
    graceObjectScope.addName "::"
    
    builtInsScope.addName "graceObject"
    builtInsScope.putScope("graceObject", graceObjectScope)
    builtInsScope.addName "prelude" as "def"
    builtInsScope.putScope("prelude", preludeScope)
    builtInsScope.addName "_prelude" as "def"
    builtInsScope.putScope("_prelude", preludeScope)

    // Historical - should be removed eventually
    if (!util.extensions.contains("NativePrelude")) then {
        var hadDialect := false
        for (values) do {val->
            if (val.kind == "dialect") then {
                hadDialect := true
                def data = xmodule.parseGCT(val.value, "/nosuchfile")
                if (data.contains("public")) then {
                    for (data.get("public")) do {mn->
                        preludeScope.addName(mn)
                    }
                }
                if (data.contains("confidential")) then {
                    for (data.get("confidential")) do {mn->
                        preludeScope.addName(mn)
                    }
                }
                processGCT(data, preludeScope)
            }
        }
        if (!hadDialect) then {
            for (prelude._methods) do {mn->
                preludeScope.addName(mn)
            }
    // The above is wrong: it makes visible the methods that were in the prelude 
    // when the compiler was compiled, not those in the prelude when the subject
    // program is compiled.  The commented-out code below seems like it should
    // do the right thing — but it doesn't quite work.
//            def data = xmodule.parseGCT("StandardPrelude", "./StandardPrelude.gct")
//            print "got StandardPrelude.gct"
//            print "data = {data}"
//            if (data.contains("public")) then {
//                for (data.get("public")) do {mn->
//                    preludeScope.addName(mn)
//                    print "adding {mn} to prelude"
//                }
//            }
//            if (data.contains("confidential")) then {
//                for (data.get("confidential")) do {mn->
//                    preludeScope.addName(mn)
//                    print "adding {mn} to prelude"
//                }
//            }
//            processGCT(data, preludeScope)
        }
    }
}
method buildSymbolTableFor(topLevelNodes) in(parent) {
    def symbolTableVis = object {
        inherits ast.addParentVisitor
        method visitIdentifier(o) up(pNode) {
            o.parent := pNode
            if (o.isBindingOccurrence) then {
                if ((o.isDeclaredByParent.not).andAlso{o.wildcard.not}) then {
                    pNode.scope.addNode(o) as (o.declarationKind)
                }
            }
            true
        }
        method visitMethod(o) up(pNode) { 
            o.parent := pNode
            pNode.scope.addNode(o.value) as "method"
            o.value.isDeclaredByParent := true
            o.symbolTable := newScopeIn(pNode.scope) kind "method"
            if (o.definesScope) then { o.isFresh := true }
            true
        }
        method visitBlock(o) up(pNode) { 
            o.parent := pNode
            o.symbolTable := newScopeIn(pNode.scope) kind "block"
            true
        }
        method visitClass(o) up(pNode) { 
            o.parent := pNode
            def classNameNode = o.name
            pNode.scope.addNode(classNameNode) as "method"
            classNameNode.isDeclaredByParent := true
            def objectScope = newScopeIn(pNode.scope) kind "object"
            objectScope.bindAs(classNameNode.nameString)
            objectScope.addNode(o.constructor) as "method"
            o.generics.do { each -> objectScope.addNode(each) as "typeparam" }
            o.constructor.isDeclaredByParent := true
            o.symbolTable := newScopeIn(objectScope) kind "object"
            o.symbolTable.bindAs(o.constructor.nameString)
            true
        }
        method visitObject(o) up(pNode) { 
            o.parent := pNode
            o.symbolTable := newScopeIn(pNode.scope) kind "object"
            if (o.parent.definesScope) then {
                o.symbolTable.bindAs(o.parent.nameString)
            }
            true
        }
        method visitMethodType(o) up(pNode) {
            o.parent := pNode
            o.symbolTable := newScopeIn(pNode.scope) kind "methodtype"
            true
        }
        method visitTypeDec(o) up(pNode) { 
            o.parent := pNode
            pNode.scope.addNode(o.name) as "typedef"
            if (o.generics.isEmpty) then { return true }
            o.symbolTable := newScopeIn(pNode.scope) kind "typeparam"
            true
        }
        method visitInherits(o) up (pNode) {
            // cache the inherits expression in the object or class that contains it
            o.parent := pNode
            if (pNode.definesObject.not) then {
                errormessages.syntaxError "inherits statements must be inside an object"
                    atRange(o.line, o.linePos, o.linePos + 7)
            }
            if (pNode.superclass != false) then {
                errormessages.syntaxError ("there can be no more than one inherits " ++
                    "statement in an object; there was a prior inherits statement " ++
                    "on line {pNode.superclass.line}")
                    atRange(o.line, o.linePos, o.linePos + 7)
            }
            pNode.superclass := o.value    // the expression from inheritsNode o
            true
        }
    }
    def inheritanceVis = object {
        inherits ast.baseVisitor
        method visitClass(o) up (pNode) {
            collectInheritedNames(o)
            // TODO: while the `data` attribute is still used by the code generators,
            // put there a redundant reference to the symbolTable.  Remove when this is fixed.
            o.data := o.symbolTable
            true
        }
        method visitObject(o) up (pNode) {
            collectInheritedNames(o)
            // TODO: while the `data` attribute is still used by the code generators,
            // put there a redundant reference to the symbolTable.  Remove when this is fixed.
            o.data := o.symbolTable
            true
        }
        method visitDefDec(o) up (pNode) {
            // TODO: while the `data` attribute is still used by the code generators,
            // put there a redundant reference to the symbolTable.  Remove when this is fixed.
            if (o.value.isObject) then {
                o.data := o.value.symbolTable
            }
            true
        }
    }
    for (topLevelNodes) do { each -> each.accept(symbolTableVis) from(parent) }
    for (topLevelNodes) do { each -> each.accept(inheritanceVis) from(parent) }
}

method collectInheritedNames(node) {
    // node is an object or class node.
    def nodeScope = node.symbolTable
    if (nodeScope.inheritedNames == completed) then { 
        return
    }
    if (nodeScope.inheritedNames == inProgress) then {
        errormessages.syntaxError "cyclic inheritance"
            atRange(node.line, node.linePos, node.linePos)
    }
    var superScope
    nodeScope.inheritedNames := inProgress
    if (node.superclass == false) then { 
        superScope := graceObjectScope
    } else {
        superScope := nodeScope.scopeReferencedBy(node.superclass)
        // If superScope == universalScope then we have no information
        // about the inherited attributes
        if (superScope != universalScope) then {
            if (superScope.node == ast.nullNode) then {
                print (superScope.asStringWithParents)
                ProgrammingError.raise "superScope.node = nullNode"
            }
            collectInheritedNames(superScope.node)
        }
    }
    for (superScope.elements) do { each ->
        nodeScope.addName(each) as "inherited"
    }
    nodeScope.inheritedNames := completed
}


method transformInherits(inhNode) {
    // inhNode is an inheritsNode.  Transform it to deal with 
    // superobject initialization and inherited names
    def superObject = inhNode.value
    def currentScope = inhNode.scope
    if (superObject.isAppliedOccurenceOfIdentifier) then {
        // this deals with "inherits true" etc.
        def definingScope = currentScope.thatDefines(superObject.nameString)
        if (definingScope.variety == "built-in") then { return inhNode }
    }
    def superScope = currentScope.scopeReferencedBy(superObject)
    var newInhNode
    if (inhNode.inheritsFromCall) then {
        inhNode.value.with.push(ast.callWithPart.new("object",
            [ast.identifierNode.new("self", false)]))
        def newmem = ast.memberNode.new(inhNode.value.value.value ++ "()object",
            inhNode.value.value.in
        )
        def newcall = ast.callNode.new(newmem, inhNode.value.with)
        newInhNode := ast.inheritsNode.new(newcall)
        newInhNode.providedNames.addAll(superScope.elements)
            // iterating through elements returns just the keys (= names)
    } elseif {inhNode.inheritsFromMember} then {
        def newmem = ast.memberNode.new(inhNode.value.value ++ "()object",
            inhNode.value.in
        )
        def newcall = ast.callNode.new(newmem, collections.list.new(
            ast.callWithPart.new(inhNode.value.value, []),
            ast.callWithPart.new("object",
                [ast.identifierNode.new("self", false)])
            )
        )
        if (inhNode.value.in.value == "StandardPrelude") then {
            return inhNode
        }
        newInhNode := ast.inheritsNode.new(newcall)
        newInhNode.providedNames.addAll(superScope.elements)
            // iterating through elements returns just the keys (= names)
    }
    if (currentScope.variety != "object") then {
        errormessages.syntaxError "inherits statements must be inside an object"
                    atRange(inhNode.line, inhNode.linePos, inhNode.linePos + 7)
    }
    for (newInhNode.providedNames) do { each ->
        currentScope.addName(each) as "inherited"
    }
    newInhNode
}

method rewriteMatches(topNode) {
    topNode.map { node ->
        if (node.isMatchingBlock) then {
            rewritematchblock(node)
        } else {
            node
        }
    } parent (ast.nullNode)
}

method resolve(values) {
    setupContext(values)
    util.setPosition(0, 0)
    var superObject := false
    def vis = object {
        inherits ast.baseVisitor
        method visitBind(o) {
            def d = o.dest
            if (d.kind == "identifier") then {
                d.isAssigned := true
            }
            return true
        }
        method visitCall(o) {
            def d = o.value
            if (d.kind == "identifier") then {
                d.inRequest := true
            }
            return true
        }
    }
    for (values) do { nd ->
        if (nd.kind == "inherits") then {
            if (false == superObject) then {
                superObject := nd.value
            } else {
                errormessages.syntaxError "There can be no more than one inherits statement in a module; there was a prior inherits statement on line {superObject.line}"
                    atRange(nd.line, nd.linePos, nd.linePos + 7)
            }
        }
    }
    if (false == superObject) then { 
        superObject := ast.identifierNode.new("graceObject", false)
    }
    def module = ast.objectNode.new(values, superObject)
    module.symbolTable := moduleScope

    def patternMatchModule = rewriteMatches(module)
    if (util.target == "patterns") then {
        print "====================================="
        print "module after pattern match re-writing"
        print "====================================="
        print(patternMatchModule.pretty(0))
        sys.exit(0)
    }

    buildSymbolTableFor(patternMatchModule.value) in(module)

    if (util.target == "symbols") then {
        print "====================================="
        print "module with symbol tables"
        print "====================================="
        print "top-level"
        print (patternMatchModule.symbolTable.asStringWithParents)
        print "====================================="
        print(patternMatchModule.pretty(0))
        sys.exit(0)
    }
    def resolvedModule = resolveIdentifiers(patternMatchModule)
    return resolvedModule.value
}



