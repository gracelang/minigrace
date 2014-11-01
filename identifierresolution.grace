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
        ex.backtrace.do{ line -> print(line) }
    }
}
class Scope.new(parent', variety') {
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
    }
    method addNode(nd) as(kind) {
        def name = nd.nameString
        def oldKind = elements.get(name) ifAbsent { "inherited" }
        if (oldKind == "inherited")  then {
            elements.put(name, kind)
            elementLines.put(name, nd.line)
        } else {
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
        b.apply(self)
        if (hasParent) then {
            parent.do(b)
        }
    }
    method getKind(n) {
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
        Scope.new(self, v)
    }
    method asString {
        var result := "\nCurrent: {self.variety}\n"
        var s := self
        while {s.hasParent} do {
            for (s.elements) do { each ->
                result := result ++ each.asString ++ "({s.getKind(each)}) "
            }
            result := result ++ "\nParent: {s.parent.variety}\n    "
            s := s.parent
        }
        for (s.elements) do { each ->
            result := result ++ each.asString ++ "({s.getKind(each)}) "
        }
        return result ++ "\n"
    }
    method alreadyDefines(node) {
        def name = node.nameString
        if (! elements.contains(name)) then { return false }
        if (elementLines(name) == node.line) then { return false }
        if ((getKind(name) == "inherited").andAlso{node.kind == "method"}) then {
            return false 
        }
        return true
    }
    method scopeReferencedBy(node) {
        // Finds the scope referenced by node.
        // If node references an object, then the scope returned
        // scope will have bindings for the method of that object.
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
                return preludeObj
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
//            print "sRB: found scope for Member {node.value} of {node.in}:"
//            print(targetScope)
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
        do { s ->
            if (s.variety == "object") then { return s }
            if (s.variety == "class") then { return s }
            if (s.variety == "module") then { return s }
        }
        ProgrammingError "no object scope found!"
        // the outermost scope should always be a module scope.
    }
}


def emptyScope = Scope.new(object { }, "empty")
emptyScope.hasParent := false
def preludeObj = Scope.new(emptyScope, "dialect")
def moduleObj = Scope.new(preludeObj, "module")
var scope := moduleObj

def universalScope = object {
    // The scope that defines every identifier,
    // used when we have no information about an object
    inherits Scope.new(emptyScope, "universal")
    method hasParent { false }
    method parent { ProgrammingError.raise "universal scope has no parent" }
    method addName(n) { ProgrammingError.raise "can't add to the universal scope" }
    method addName(n)as(k) { ProgrammingError.raise "can't add to the universal scope" }
    method addNode(n)as(k) { ProgrammingError.raise "can't add to the universal scope" }
    method contains(n) { true }
    method do(b) { b.apply(self) }
    method getKind(n) { "unknown" }
    method putScope(n, scp) { }
    method getScope(n) { self }
}

var scopeDepth := 3

method pushScope(v) {
    scope := scope.new(v)
//    scopeDepth := scopeDepth + 1
//    var indent := " "
//    for (1..scopeDepth) do { indent := indent ++ " " }
//    print "{indent} pshScope {scope.variety}"
}
method popScope {
    scope := scope.parent
//    var indent := " "
//    for (1..scopeDepth) do { indent := indent ++ " " }
//    print "{indent} popScope {scope.variety}"
//    scopeDepth := scopeDepth - 1
}
method haveBinding(nm) {
    var cur := scope
    while {cur.hasParent} do {
        if (cur.contains(nm)) then {
            return true
        }
        cur := cur.parent
    }
    if (cur.contains(nm)) then {
        return true
    }
    return false
}

method getNameKind(nm) {
    scope.do {s->
        if (s.contains(nm)) then {
            def kind = s.getKind(nm)
            if (kind == "inherited") then {
                return "method"
            } else {
                return kind
            }
        }
    }
    return "undefined"
}

method getNameScope(nm) {
    scope.do {s->
        if (s.contains(nm)) then {
            return s
        }
    }
    return "undefined"
}

method findDeepMethod(name) {
    var mem := ast.identifierNode.new("self", false)
    scope.do { s->
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
    var nm := node.value
    def nmGets = nm ++ ":="
    util.setPosition(node.line, node.linePos)
    if (node.isAssigned) then {
        if (!haveBinding(nm)) then {
            if (haveBinding(nmGets)) then {
                if (getNameKind(nmGets) == "method") then {
                    // Bare method call with no arguments
                    def meth = findDeepMethod(nmGets)
                    def meth2 = ast.memberNode.new(nm, meth.in)
                    return ast.callNode.new(meth2, [ast.callWithPart.new(meth2.value)])
                }
            }
        }
    }
    if (haveBinding(nm).not) then {
//        print(scope)
        if (node.wildcard) then {
            errormessages.syntaxError("'_' can be used only as a parameter")atRange(node.line, node.linePos, node.linePos)
        } else {
            def suggestions = []
            var suggestion
            for(scope.elements) do { v ->
                var thresh := 1
                if (nm.size > 2) then {
                    thresh := ((nm.size / 3) + 1).truncated
                }
                if(errormessages.dameraulevenshtein(v, nm) <= thresh) then {
                    suggestion := errormessages.suggestion.new
                    suggestion.replaceRange(node.linePos, node.linePos + node.value.size - 1)with(v)onLine(node.line)
                    suggestions.push(suggestion)
                }
            }

            for(scope.elementScopes) do { s ->
                if(scope.elementScopes.get(s).contains(nm)) then {
                    suggestion := errormessages.suggestion.new
                    suggestion.insert("{s}.")atPosition(node.linePos)onLine(node.line)
                    suggestions.push(suggestion)
                }
            }
//            var offerString := !node.isAssigned && !node.inRequest
// This is so rarely useful it's probably better never to suggest it.
            var offerString := false
            var highlightLength := node.value.size
            if (node.value.replace "()" with "XX" != node.value) then {
                offerString := false
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
            if (offerString) then {
                suggestion := errormessages.suggestion.new
                suggestion.insert("\"")atPosition(node.linePos + node.value.size)onLine(node.line)
                suggestion.insert("\"")atPosition(node.linePos)onLine(node.line)
                suggestions.push(suggestion)
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
            printBacktrace "Unknown variable {nm}"
            errormessages.syntaxError("Unknown variable or method '{nm}'. This may be due to a spelling mistake or trying to access a variable within another scope.")atRange(
                node.line, node.linePos, node.linePos + highlightLength - 1)withSuggestions(suggestions)
        }
    }
    if (nm == "outer") then {
        return ast.memberNode.new("outer", ast.identifierNode.new("self", false))
    }
    if (nm == "self") then {
        return node
    }
    if (getNameKind(nm) == "method") then {
        // Bare method call with no arguments
        def meth = findDeepMethod(nm)
        return ast.callNode.new(meth, [ast.callWithPart.new(meth.value)])
    }
    node
}

method resolveIdentifiersActual(node) {
    util.setline(node.line)
    if (node == false) then {
        return node
    }
    if ((node.kind == "identifier").andAlso{node.isBindingOccurence.not}) then {
        return resolveIdentifier(node)
    }
    if (node.kind == "call") then {
        if (node.value.kind == "call") then {
            def tmp = ast.callNode.new(node.value.value, node.with)
            tmp.line := node.line
            tmp.generics := node.generics
            return tmp
        } elseif (node.value.kind == "identifier") then {
            def ck = getNameKind(node.value.value)
            if (!node.isPattern) then {
                if ((ck == "def") || (ck == "var")) then {
                    util.semantic_error "{node.value.value} is a {ck}; it can't be requested with arguments."
                }
            }
        }
    }
    if (node.kind == "block") then {
        if (node.params.size == 1) then {
            return rewritematchblock(node)
        }
    }
    if (node.kind == "bind") then {
        if (node.dest.kind == "call") then {
            def tmp = ast.bindNode.new(node.dest.value, node.value)
            tmp.line := node.line
            return tmp
        } elseif (node.dest.kind == "identifier") then {
            def declKind = getNameKind(node.dest.value)
            if (declKind == "def") then {
                def name = node.dest.value
                def scp = getNameScope(name)
                var more := ""
                def suggestions = []
                if (scp.elementLines.contains(name)) then {
                    more := " on line {scp.elementLines.get(name)}"
                }
                if (scp.elementTokens.contains(name)) then {
                    def tok = scp.elementTokens.get(name)
                    def sugg = errormessages.suggestion.new
                    var eq := tok
                    while {(eq.kind != "op") || (eq.value != "=")} do {
                        eq := eq.next
                    }
                    sugg.replaceToken(eq)with(":=")
                    sugg.replaceToken(tok)with("var")
                    suggestions.push(sugg)
                }
                errormessages.syntaxError("The value of '{node.dest.value}' cannot be changed. To make it a variable, use 'var' instead of 'def' in the declaration{more}.")
                    atLine(node.line)
                    withSuggestions(suggestions)
            } elseif {declKind == "typedef"} then {
                def name = node.dest.value
                def scp = getNameScope(name)
                var more := ""
                if (scp.elementLines.contains(name)) then {
                    more := " on line {scp.elementLines.get(name)}"
                }
                errormessages.syntaxError("'{node.dest.value}' cannot be re-bound " 
                    ++ "because it is declared as a type{more}.")
                    atLine(node.line)
            }
        }
    }
    if (node.kind == "method") then {
        if (node.body.size > 0) then {
            def lastStatement = node.body.last
            if (lastStatement.kind == "object") then {
                node.properties.put("fresh", true)
            }
        }
    }
    if (node.kind == "inherits") then {
        if (node.value.kind == "call") then{
            node.value.with.push(ast.callWithPart.new("object",
                [ast.identifierNode.new("self", false)]))
            def newmem = ast.memberNode.new(node.value.value.value
                                                ++ "()object",
                node.value.value.in
            )
            def newcall = ast.callNode.new(newmem, node.value.with)
            def newInhNode = ast.inheritsNode.new(newcall)
            newInhNode.providedNames.addAll(node.providedNames)
            return newInhNode
        } elseif {node.value.kind == "member"} then {
            def newmem = ast.memberNode.new(node.value.value
                                            ++ "()object",
                node.value.in
            )
            def newcall = ast.callNode.new(newmem, collections.list.new(
                ast.callWithPart.new(node.value.value, []),
                ast.callWithPart.new("object",
                    [ast.identifierNode.new("self", false)])
                )
            )
            if (node.value.in.value == "StandardPrelude") then {
                return node
            }
            def newInhNode = ast.inheritsNode.new(newcall)
            newInhNode.providedNames.addAll(node.providedNames)
            return newInhNode
        }
    }
    node
}

method checkDuplicateDefinition(declNode) {
    def name = declNode.nameString
    if (scope.alreadyDefines(declNode)) then {
        var more := " in this scope"
        var which
        if (scope.elementLines.contains(name)) then {
            which := if (scope == emptyScope) then { " in emptyScope"
                     } elseif {scope == preludeObj} then { " in preludeObj"
                     } elseif (scope == moduleObj) then { " in moduleObj" 
                     } else { "" }
            more := " as a {scope.getKind(name)}"
                ++ " on line {scope.elementLines.get(name)} as well as here at line {declNode.line}"
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
    def priorScope = getNameScope(name)
    if (priorScope == "undefined") then { 
        return
    }
    if (priorScope.elementDeclarations.contains(name)) then {
        def priorKind = priorScope.getKind(name)
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
    scope.elementDeclarations.put(name, true)
}
method resolveIdentifiers(topNode) {
    // Recursively replace bare identifiers with their fully-qualified
    // equivalents.
    if (topNode == false) then {
        return topNode
    }
    topNode.map { node -> resolveIdentifiersActual(node) }
        before { node -> preResolve(node) }
        after { node -> postResolve(node) }
}
    
method preResolve(node) {
        util.setPosition(node.line, node.linePos)
        def definingObject = (scope.variety == "object")
                            .orElse{scope.variety == "class"}
                                .orElse{scope.variety == "module"}
        if (node.kind == "class") then {
            checkRedefinition(node.name) as "method"
            scope.addNode(node) as "method"
            def classScope = Scope.new(scope, "class")
            classScope.addNode(node.constructor) as "method"
            classScope.bindAs(node.nameString)
            pushScope("method")
            if (false != node.generics) then {
                for (node.generics) do {g->
                    scope.addNode(g) as "def"
                }
            }
            for (node.signature) do {s->
                for (s.params) do {p->
                    scope.addName(p.value)as "def"
                }
                if (false != s.vararg) then {
                    scope.addName(s.vararg.value) as "def"
                }
            }
            pushScope("class")
            classScope.putScope(node.constructor.value, scope)
//            for (node.value) do {n->
//                util.setPosition(n.line, n.linePos)
//                if (n.kind == "method") then {
//                    checkRedefinition(n.value) as "method"
//                    scope.addNode(n) as "method"
//                } elseif {n.kind == "vardec"} then {
//                    checkRedefinition(n.name) as "method"
//                    scope.addNode(n) as "method"
//                    scope.addName(n.name.value ++ ":=") as "method"
//                } elseif {(n.kind == "defdec").orElse{n.kind == "typedec"}} then {
//                    checkRedefinition(n.name) as "method"
//                    scope.addNode(n)
//                } elseif {n.kind == "inherits"} then {
//                    def parent = resolveIdentifiers(n.value)
//                    def parentScope = scope.scopeReferencedBy(parent)
//                    for (parentScope.elements) do {e->
//                        scope.addName(e) as "inherited"
//                        n.providedNames.add(e)
//                    }
//                    for (node.signature) do {s->
//                        for (s.params) do {p->
//                            if (parentScope.elements.contains(p.value)) then {
//                                def suggestion = errormessages.suggestion.new
//                                suggestion.insert("'")atPosition(p.linePos + p.value.size)onLine(p.line)
//                                var primes := "'"
//                                while { scope.elements.contains(p.value ++ primes) || parentScope.elements.contains(p.value ++ primes) } do {
//                                    suggestion.insert("'")atPosition(p.linePos + p.value.size)onLine(p.line)
//                                    primes := primes ++ "'"
//                                }
//                                errormessages.syntaxError("'{p.value}' cannot be used to name a parameter because this class inherits a method named '{p.value}'.")atRange(
//                                    p.line, p.linePos, p.linePos + p.value.size - 1)withSuggestion(suggestion)
//                            }
//                        }
//                    }
//                }
//            }
        } elseif {node.kind == "object"} then {
            pushScope("object")
//            for (node.value) do {n->
//                util.setPosition(n.line, n.linePos)
//                if (n.kind == "method") then {
//                    checkRedefinition(n.value) as "method"
//                    scope.addNode(n) as "method"
//                }
//                if (n.kind == "vardec") then {
//                    checkRedefinition(n.name) as "method"
//                    scope.addNode(n) as "method"
//                    scope.addName(n.nameString ++ ":=")
//                }
//                if (n.kind == "defdec") then {
//                    checkRedefinition(n.name) as "method"
//                    scope.addNode(n) as "method"
//                }
//                if (n.kind == "inherits") then {
//                    def parent = resolveIdentifiers(n.value)
//                    def parentScope = scope.scopeReferencedBy(parent)
//                    if (n.value.kind == "member") then {
//                        print "object inherits: found scope for ({n.pretty(0)})"
//                        print(parentScope)
//                    }
//                    for (parentScope.elements) do {e->
//                        scope.addName(e) as "inherited"
//                        n.providedNames.add(e)
//                    }
//                }
//            }
        } elseif (node.kind == "if") then {
            pushScope("block")
        } elseif (node.kind == "block") then {
            pushScope("block")
            var tmp := node
            if (node.params.size == 1) then {
                tmp := rewritematchblock(tmp)
            }
            for (tmp.params) do {p->
                util.setPosition(p.line, p.linePos)
                checkRedefinition(p) as "def"
                scope.addNode(p)as "def"
            }
        } elseif (node.kind == "typedec") then {
            if ((scope.variety != "object") && (scope.variety != "class")) then {
                checkRedefinition(node.name) as "typedef"
                scope.add(node.name.value) as "typedef"
                pushScope
                scope.variety := "typeparams"
                for (node.generics) do {n->
                    checkDuplicateDefinition(n)
                    scope.add(n.value) as "def"
                }
            } else {
                scope.add(node.name.value) as "typedef"
                pushScope
                scope.variety := "typeparams"
                for (node.generics) do {n->
                    util.setPosition(n.line, n.linePos)
                    checkDuplicateDefinition(n)
                    scope.add(n.value) as "def"
                }
            }
        } elseif (node.kind == "typeliteral") then {
            pushScope("typeliteral")
            for (node.methods) do { each ->
                scope.addNode(each) as "method"
            }
            for (node.types) do { each ->
                scope.addNode(each) as "def"
            }
        } elseif (node.kind == "methodtype") then {
            scope.addNode(node) as "method"
            pushScope("methodtype")
            for (node.generics) do {g->
                scope.addNode(g) as "def"
            }
            for (node.signature) do {s->
                for (s.params) do {p->
                    scope.addNode(p)as "def"
                }
                if (false != s.vararg) then {
                    scope.addNode(s.vararg) as "def"
                }
            }
        } elseif (node.kind == "method") then {
            scope.addNode(node) as "method"
            pushScope("method")
            scope.name := node.nameString
            for (node.generics) do {g->
                util.setPosition(g.line, g.linePos)
                checkRedefinition(g) as "def"
                scope.addNode(g) as "def"
            }
            for (node.signature) do {s->
                util.setPosition(s.line, s.linePos)
                for (s.params) do {p->
                    checkRedefinition(p) as "def"
                    scope.addName(p.value) as "def"
                }
                if (false != s.vararg) then {
                    scope.addName(s.vararg.value) as "def"
                }
            }
        } elseif (node.kind == "vardec") then {
            def kind = if (definingObject)
                then { "method" }
                else { "var" }
            checkRedefinition(node.name) as (kind)
            scope.addNode(node) as (kind)
        } elseif (node.kind == "defdec") then {
            def kind = if (definingObject)
                then { "method" }
                else { "def" }
            checkRedefinition(node.name) as (kind)
            scope.addNode(node) as (kind)
            if (false != node.startToken) then {
                scope.elementTokens.put(node.name.value, node.startToken)
            }
        } elseif (node.kind == "import") then {
            checkRedefinition(node) as "method"
            scope.addNode(node) as "method"
        }
}

method postResolve(node) {
        if (node.kind == "class") then {
            node.data := scope
            popScope
            popScope
        } elseif (node.kind == "object") then {
            if (scope.parent.variety == "method") then {
                scope.parent.parent.putScope(scope.parent.name,
                    scope)
            }
            node.data := scope
            popScope
        } elseif (node.kind == "if") then {
            popScope
        } elseif (node.kind == "block") then {
            popScope
        } elseif (node.kind == "method") then {
            def enclosingObject = scope.enclosingObject
            def methName = node.nameString
            if (enclosingObject.elementScopes.contains(methName)) then {
                    node.properties.put("fresh", enclosingObject.getScope(methName))
                }
            if (node.body.size > 0) then {
                def lastStatement = node.body.last
                if (lastStatement.kind == "call") then {
                    if (lastStatement.value.kind == "member") then {
                        def mem = lastStatement.value
                        if (mem.value == "clone") then {
                            node.properties.put("fresh", enclosingObject)
                        }
                    }
                }
            }
            popScope
        } elseif (node.kind == "methodtype") then {
            if (scope.variety != "methodtype") then {ProgrammingError.raise "scope not methodtype"}
            popScope
        } elseif (node.kind == "typedec") then {
            if (scope.variety != "typeparams") then {ProgrammingError.raise "scope not typedec"}
            popScope
        } elseif (node.kind == "typeliteral") then {
            if (scope.variety != "typeliteral") then {ProgrammingError.raise "scope not typeLiteral"}
            popScope
        } elseif (node.kind == "defdec") then {
            if (node.value.kind == "object") then {
                scope.putScope(node.name.value, node.value.data)
                node.data := scope
            } else {
                def sc = scope.scopeReferencedBy(node.value)
                scope.putScope(node.nameString, sc)
            }
            if (ast.findAnnotation(node, "parent")) then {
                def sc = scope.scopeReferencedBy(node.value)
                util.setPosition(node.line, node.linePos)
                for (sc.elements) do {m->
                    scope.addName(m)
                }
            }
        }
}

method processGCT(gct, otherModule) {
    def classes = collections.map.new
    if (gct.contains("classes")) then {
        for (gct.get("classes")) do {c->
            def cmeths = []
            def constrs = gct.get("constructors-of:{c}")
            def classScope = Scope.new(otherModule, "class")
            for (constrs) do {constr->
                def ns = Scope.new(otherModule, "object")
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
            def mScope = Scope.new(otherModule, "module")
            for (gct.get("fresh:{c}")) do {mn->
                mScope.addName(mn)
            }
            otherModule.addName(c)
            otherModule.putScope(c, mScope)
        }
    }
}
method handleImport(e) {
    def gct = xmodule.parseGCT(e.path, "/nosuchpath")
    def otherModule = Scope.new(preludeObj, "module")
    processGCT(gct, otherModule)
    scope.addNode(e) as "method"
    scope.putScope(e.value, otherModule)
}

method setupContext {
    preludeObj.addName "for()do"
    preludeObj.addName "while()do"
    preludeObj.addName "print"
    builtinObj.addName "Type" as "typedef"
    preludeObj.addName "Object" as "typedef"
    preludeObj.addName "Unknown" as "typedef"
    preludeObj.addName "String" as "typedef"
    preludeObj.addName "Number" as "typedef"
    preludeObj.addName "Boolean" as "typedef"
    preludeObj.addName "Block" as "typedef"
    preludeObj.addName "Done" as "typedef"
    preludeObj.addName "done" as "def"
    preludeObj.addName "true" as "def"
    preludeObj.addName "false" as "def"
    preludeObj.addName "self" as "def"
    preludeObj.addName "super" as "def"
    preludeObj.addName "outer" as "def"
    preludeObj.addName "readable"
    preludeObj.addName "writable"
    preludeObj.addName "public"
    preludeObj.addName "confidential"
    preludeObj.addName "override"
    preludeObj.addName "parent"
    preludeObj.addName "prelude" as "def"
    preludeObj.putScope("prelude", preludeObj)
    preludeObj.addName "_prelude" as "def"
    preludeObj.putScope("_prelude", preludeObj)
    preludeObj.addName "..." as "def"
    preludeObj.addName "GraceType" as "typedef"
    preludeObj.addName "Exception" as "def"
    preludeObj.addName "PrimitiveArray" as "def"
    preludeObj.addName "NoSuchMethod" as "def"
    preludeObj.addName "ProgrammingError" as "def"
    preludeObj.addName "ResourceException" as "def"
    preludeObj.addName "RuntimeError" as "def"
    preludeObj.addName "BoundsError" as "def"
    preludeObj.addName "EnvironmentException" as "def"

    // Historical - should be removed eventually
    if (!util.extensions.contains("NativePrelude")) then {
        var hadDialect := false
        for (values) do {val->
            if (val.kind == "dialect") then {
                hadDialect := true
                def data = xmodule.parseGCT(val.value, "/nosuchfile")
                if (data.contains("public")) then {
                    for (data.get("public")) do {mn->
                        preludeObj.addName(mn)
                    }
                }
                if (data.contains("confidential")) then {
                    for (data.get("confidential")) do {mn->
                        preludeObj.addName(mn)
                    }
                }
                processGCT(data, preludeObj)
            }
        }
        if (!hadDialect) then {
            for (prelude._methods) do {mn->
                preludeObj.addName(mn)
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
//                    preludeObj.addName(mn)
//                    print "adding {mn} to prelude"
//                }
//            }
//            if (data.contains("confidential")) then {
//                for (data.get("confidential")) do {mn->
//                    preludeObj.addName(mn)
//                    print "adding {mn} to prelude"
//                }
//            }
//            processGCT(data, preludeObj)
        }
    }
}

method resolve(values) {
    setupContext
    util.setPosition(0, 0)
    var superObject := ast.identifierNode.new("graceObject", false)
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
    values.do {
        if (v.kind == "inherits") then {
            superObject := o.value
        }
    }
    def wholeModule = ast.objectNode.new(values, superObject)
    def preludeContext = ast.objectNode.new([wholeModule], superObject)
    buildSymbolTables(wholeModule)
    def newModule = resolveIdentifiers(wholeModule)
    return newModule.body
}

method buildSymbolTable(topNode) {
    def vis = object {
        method visitIdentifier(o) up(pNode) { 
            o.parent := pNode
            if (o.isBindingOccurence) then {
                o.scope.addNode(o) as (o.parent.kind)
                // TODO: make kind depend on object context
            }
            true
        }
        method visitMethod(o) up(pNode) { 
            o.parent := pNode
            o.symbolTable := Scope.new(o.scope, "method")
            o.hasSymbolTable := true
            def registerDeclaration = { each ->
                o.addNode(each) as "def"
            }
            o.parametersDo(registerDeclaration)
            o.typeParametersDo(registerDeclaration)
            true
        }
        method visitBlock(o) up(pNode) { 
            o.parent := pNode
            o.symbolTable := Scope.new(o.scope, "method")
            o.hasSymbolTable := true
            o.parammetersDo { each -> o.addNode(each) as "def" }
            true
        }
        method visitClass(o) up(pNode) { 
            o.parent := pNode
            o.symbolTable := Scope.new(o.scope, "method")
            o.hasSymbolTable := true
            def registerDeclaration = { each ->
                o.addNode(each) as "def"
            }
            o.parametersDo(registerDeclaration)
            o.typeParametersDo(registerDeclaration)
            true
        }
        method visitObject(o) up(pNode) { 
            o.parent := pNode
            o.symbolTable := Scope.new(o.scope, "method")
            o.hasSymbolTable := true
            true
        }
        method visitIf(o) up(pNode) { o.parent := pNode; true }
        method visitMatchCase(o) up(pNode) { o.parent := pNode; true }
        method visitCatchCase(o) up(pNode) { o.parent := pNode; true }
        method visitMethodType(o) up(pNode) { o.parent := pNode; true }
        method visitTypeDec(o) up(pNode) { 
            o.parent := pNode
            if (o.generics.isEmpty) then { return true }
            o.symbolTable := Scope.new(o.scope, "typeparams")
            o.hasSymbolTable := true
            o.generics.do { each ->
                o.addNode(each) as "def"
            }
            true
        }
        method visitTypeLiteral(o) up(pNode) { o.parent := pNode; true }
        method visitCall(o) up(pNode) { o.parent := pNode; true }
        method visitArray(o) up(pNode) { o.parent := pNode; true }
        method visitMember(o) up(pNode) { o.parent := pNode; true }
        method visitGeneric(o) up(pNode) { o.parent := pNode; true }
        method visitOctets(o) up(pNode) { o.parent := pNode; true }
        method visitString(o) up(pNode) { o.parent := pNode; true }
        method visitNum(o) up(pNode) { o.parent := pNode; true }
        method visitOp(o) up(pNode) { o.parent := pNode; true }
        method visitIndex(o) up(pNode) { o.parent := pNode; true }
        method visitBind(o) up(pNode) { o.parent := pNode; true }
        method visitDefDec(o) up(pNode) { o.parent := pNode; true }
        method visitVarDec(o) up(pNode) { o.parent := pNode; true }
        method visitImport(o) up(pNode) { o.parent := pNode; true }
        method visitReturn(o) up(pNode) { o.parent := pNode; true }
        method visitInherits(o) up(pNode) { o.parent := pNode; true }
        method visitDialect(o) up(pNode) { o.parent := pNode; true }
    }
    topNode.accept(vis)
}



