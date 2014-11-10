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
factory method newScopeIn(parent')kind(variety') {
    def elements = collections.map.new
    def elementScopes = collections.map.new
    def elementDeclarations = collections.map.new
    def elementLines = collections.map.new
    def elementTokens = collections.map.new
    def parent = parent'
    var hasParent := true
    var variety := variety'
    var name := ""
    method isEmpty { elements.size == 0 }
    method addName(n) {
        elements.put(n, "method")
        elementLines.put(n, util.linenum)
    }
    method addName(n)as(k) {
        elements.put(n, k)
        elementLines.put(n, util.linenum)
//        if (n == "blk") then {
//            try {
//                ProgrammingError.raise "{n} declared"
//            } catch { ex:ProgrammingError -> 
//                print "while adding name {n} as {k}"
//                ex.printBacktrace
//            }
//        }
    }
    method addNode(nd) as(kind) {
        def name = nd.value
//        if (name =="blk") then {
//            try {
//                ProgrammingError.raise "{name} declared"
//            } catch { ex:ProgrammingError -> 
//                print "while adding node {nd} as {kind}"
//                ex.printBacktrace
//            }
//        }
        def oldKind = elements.get(name) ifAbsent { "inherited" }
        if (oldKind == "inherited")  then {
//            print "putting {name} = {nd.pretty(0)}"
            elements.put(name, kind)
            elementLines.put(name, nd.line)
        } else {
            print(self)
            var more := " in this scope"
            print(nd.scope.asStringWithParents)
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
        return universalScope
    }
    method new(v) {
        newScopeIn(self) kind(v)
    }
    method asStringWithParents {
        var result := "\nCurrent: {self.variety}\n"
        var s := self
        while {s.hasParent} do {
            for (s.elements) do { each ->
                result := result ++ each.asString ++ "({s.kind(each)}) "
            }
            result := result ++ "\nParent: {s.parent.variety}\n    "
            s := s.parent
        }
        for (s.elements) do { each ->
            result := result ++ each.asString ++ "({s.kind(each)}) "
        }
        return result ++ "\n"
    }
    method asString {
        var result := "\nCurrent: {variety}\n"
        for (elements) do { each ->
            result := result ++ each.asString ++ "({kind(each)}) "
        }
        return result ++ "\n"
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
    method findDeepMethod(name) {
        // APB: I moved this method from the top-level (where it operated
        // on the now-defunct 'scope' module variable) to this class.
        // It makes no sense, however: the match statment and assignments to mem
        // are effectively dead code.  
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
    method enclosingObject {
        // Answer the closest scope that describes an object,
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

def emptyScope = newScopeIn(object { }) kind("empty")
emptyScope.hasParent := false
ast.nullNode.symbolTable := emptyScope
def preludeScope = newScopeIn(emptyScope) kind("dialect")
def moduleScope = newScopeIn(preludeScope) kind("module")

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
    Error.raise("Compiler logic error: fell through when rewriting match block"
        ++ ": unexpected kind '{arg.kind}'.")
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
            pattern := resolveIdentifiers(pattern)
        } else {
            if (false != blk.matchingPattern) then {
                if (blk.matchingPattern.value == arg.value) then {
                    pattern := resolveIdentifiers(arg)
                    newparams := []
                }
            }
        }
    } else {
        if (false != blk.matchingPattern) then {
            if (blk.matchingPattern.value == arg.value) then {
                pattern := resolveIdentifiers(arg)
                newparams := []
            }
        }
    }
    def newblk = ast.blockNode.new(newparams, blk.body)
    newblk.matchingPattern := pattern
    newblk.line := blk.line
    return newblk
}

method resolveIdentifier(node) {
    // node is an applied occurence of an identifer.   That means that 
    // it a leaf node in the ast.
    // This method does the following:
    // - id is self => do nothing
    // - id is super => do nothing
    // - id is in an assignment position and a method ‹id›:= is in scope:
    //          replace node by a method request
    // - id is in the lexical scope: store binding occurence of id in node
    // - id is in an outer: find binding occurence of id and store in node
    // - id is a self-method: replace node by a method request
    // - id is none of the above: generate an error message
    var nm := node.value
    def nodeScope = node.scope
    def nmGets = nm ++ ":="
    util.setPosition(node.line, node.linePos)
    if (node.isAssigned) then {
        if (nodeScope.hasDefinitionInNest(nm)) then {
            if (nodeScope.hasDefinitionInNest(nmGets)) then {
                if (nodeScope.kindInNest(nmGets) == "method") then {
                    // method request without arguments
                    def meth = nodeScope.findDeepMethod(nmGets)
                    def member = ast.memberNode.new(nm, ast.nullNode)
                    member.in := meth.in.shallowCopyWithParent(member)
                    def call = ast.callNode.new(member, [ast.callWithPart.new(member.value)])
                    member.parent := call
                    call
                }
            }
        }
    }
    if (nodeScope.hasDefinitionInNest(nm).not) then {
        if (node.wildcard) then {
            errormessages.syntaxError("'_' can be used only as a parameter")
                atRange(node.line, node.linePos, node.linePos)
        } else {
            def suggestions = []
            var suggestion
            for(nodeScope.elements) do { v ->
                var thresh := 1
                if (nm.size > 2) then {
                    thresh := ((nm.size / 3) + 1).truncated
                }
                if(errormessages.dameraulevenshtein(v, nm) <= thresh) then {
                    suggestion := errormessages.suggestion.new
                    suggestion.replaceRange(node.linePos, node.linePos + 
                        node.value.size - 1)with(v)onLine(node.line)
                    suggestions.push(suggestion)
                }
            }

            for(nodeScope.elementScopes) do { s ->
                if(nodeScope.elementScopes.get(s).contains(nm)) then {
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
                errormessages.syntaxError "Unknown method '{nm}'. This may be due to a spelling mistake or trying to access a method within another scope.{extra}"
                    atRange(node.line, node.linePos, node.linePos +
                        highlightLength - 1)
                    withSuggestions(suggestions)
            }
            print "Unknown name {nm}."
            print(nodeScope.asStringWithParents)
            printAstHierarchy(node)
            errormessages.syntaxError("Unknown variable or method '{nm}'. This may be due to a spelling mistake or trying to access a variable within another scope.")atRange(
                node.line, node.linePos, node.linePos + highlightLength - 1)withSuggestions(suggestions)
        }
    }
    if (nm == "outer") then {
        def selfId = ast.identifierNode.new("self", false)
        def memb = ast.memberNode.new("outer", selfId)
        selfId.parent := memb
        memb.parent := node.parent
        return memb
    }
    if (nm == "self") then {
        return node
    }
    if (nodeScope.kindInNest(nm) == "method") then {
        // Bare method request without arguments
        def meth = nodeScope.findDeepMethod(nm)
        def call = ast.callNode.new(meth, [ast.callWithPart.new(meth.value)])
        meth.parent := call
        call.parent := node.parent
        return call
    }
    node
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
        if (node.isAppliedOccurenceOfIdentifier) then {
            resolveIdentifier(node)
        } elseif { node.isMatchingBlock } then {
//            rewritematchblock(node)
            node
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
    preludeScope.addName "for()do"
    preludeScope.addName "while()do"
    preludeScope.addName "print"
    preludeScope.addName "Type" as "typedef"
    preludeScope.addName "Object" as "typedef"
    preludeScope.addName "Unknown" as "typedef"
    preludeScope.addName "String" as "typedef"
    preludeScope.addName "Number" as "typedef"
    preludeScope.addName "Boolean" as "typedef"
    preludeScope.addName "Block" as "typedef"
    preludeScope.addName "Done" as "typedef"
    preludeScope.addName "done" as "def"
    preludeScope.addName "true" as "def"
    preludeScope.addName "false" as "def"
    preludeScope.addName "self" as "def"
    preludeScope.addName "super" as "def"
    preludeScope.addName "outer" as "def"
    preludeScope.addName "readable"
    preludeScope.addName "writable"
    preludeScope.addName "public"
    preludeScope.addName "confidential"
    preludeScope.addName "override"
    preludeScope.addName "parent"
    preludeScope.addName "..." as "def"
    preludeScope.addName "GraceType" as "typedef"
    preludeScope.addName "Exception" as "def"
    preludeScope.addName "PrimitiveArray" as "def"
    preludeScope.addName "ProgrammingError" as "def"

    def graceObjectScope = newScopeIn(emptyScope) kind("object")
    graceObjectScope.addName "=="
    graceObjectScope.addName "!="
    graceObjectScope.addName "≠"
    graceObjectScope.addName "basicAsString"
    graceObjectScope.addName "asString"
    graceObjectScope.addName "asDebugString"
    graceObjectScope.addName "::"
    
    preludeScope.addName "graceObject"
    preludeScope.putScope("graceObject", graceObjectScope)
    preludeScope.addName "prelude" as "def"
    preludeScope.putScope("prelude", preludeScope)
    preludeScope.addName "_prelude" as "def"
    preludeScope.putScope("_prelude", preludeScope)

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
    def moduleNode = ast.objectNode.new(values, superObject)
    moduleNode.symbolTable := moduleScope
    buildSymbolTableFor(values) in(moduleNode)
    def newModule = resolveIdentifiers(moduleNode)
    return newModule.value
}

method buildSymbolTableFor(topLevelNodes) in(parent) {
    def vis = object {
        inherits ast.addParentVisitor
        method visitIdentifier(o) up(pNode) {
            o.parent := pNode
            if (o.isBindingOccurrence) then {
                if (o.isMethodName.not) then {
                    pNode.scope.addNode(o) as (o.declarationKind)
                    if (o.declarationKind == "parameter") then {
                        print(pNode.scope.asStringWithParents)
                    }
                }
            }
            true
        }
        method visitMethod(o) up(pNode) { 
            o.parent := pNode
            pNode.scope.addNode(o.value) as "method"
            o.value.isMethodName := true
            o.symbolTable := newScopeIn(pNode.scope) kind("method")
            true
        }
        method visitBlock(o) up(pNode) { 
            o.parent := pNode
            o.symbolTable := newScopeIn(pNode.scope) kind("method")
            true
        }
        method visitClass(o) up(pNode) { 
            o.parent := pNode
            pNode.scope.addNode(o.name) as "method"
            o.name.isMethodName := true
            def objectScope = newScopeIn(pNode.scope) kind("object")
            objectScope.addNode(o.constructor) as "method"
            o.generics.do { each -> objectScope.addNode(each) as "typeparam" }
            o.constructor.isMethodName := true
            o.symbolTable := newScopeIn(objectScope) kind("object")
            true
        }
        method visitObject(o) up(pNode) { 
            o.parent := pNode
            o.symbolTable := newScopeIn(pNode.scope) kind("object")
            util.log_verbose "new object scope {o.symbolTable.asStringWithParents}"
            true
        }
        method visitMethodType(o) up(pNode) {
            o.parent := pNode
            o.symbolTable := newScopeIn(pNode.scope) kind("methodtype")
            true
        }
        method visitTypeDec(o) up(pNode) { 
            o.parent := pNode
            pNode.scope.addNode(o.name) as "typedef"
            if (o.generics.isEmpty) then { return true }
            o.symbolTable := newScopeIn(pNode.scope) kind("typeparam")
            true
        }
    }
    for (topLevelNodes) do { each -> each.accept(vis) from(parent) }
}



