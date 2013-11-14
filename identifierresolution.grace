#pragma DefaultVisibility=public
import "io" as io
import "sys" as sys
import "ast" as ast
import "util" as util
import "xmodule" as xmodule
import "mgcollections" as collections
import "mirrors" as mirrors
import "errormessages" as errormessages

class Scope.new(parent') {
    def elements = collections.map.new
    def elementScopes = collections.map.new
    def elementDeclarations = collections.map.new
    def elementLines = collections.map.new
    def parent = parent'
    var hasParent := true
    var variety := "block"
    var name := ""
    method add(n) {
        elements.put(n, "method")
    }
    method add(n)as(k) {
        elements.put(n, k)
        elementLines.put(n, util.linenum)
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
    method getScope(n) {
        if (elementScopes.contains(n)) then {
            return elementScopes.get(n)
        }
        return Scope.new(self)
    }
    method new {
        Scope.new(self)
    }
}

def builtinObj = Scope.new(object { })
builtinObj.variety := "top"
builtinObj.hasParent := false
def preludeObj = Scope.new(builtinObj)
preludeObj.variety := "dialect"
def moduleObj = Scope.new(preludeObj)
moduleObj.variety := "module"
var scope := moduleObj

method pushScope {
    scope := scope.new
}
method popScope {
    scope := scope.parent
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
            return s.getKind(nm)
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

method findDeepScope'(node, scope') {
    if (node.kind == "identifier") then {
        if (node.value == "self") then {
            var s := scope'
            while {s.hasParent} do {
                if (s.variety == "object") then {
                    return s
                }
                if (s.variety == "class") then {
                    return s
                }
                if (s.variety == "module") then {
                    return s
                }
                s := s.parent
            }
        }
        if (node.value == "prelude") then {
            return preludeObj
        }
        scope'.do {s->
            if (s.contains(node.value)) then {
                return s.getScope(node.value)
            }
        }
        return scope'.getScope(node.value)
    }
    if (node.kind == "member") then {
        def tmp = findDeepScope'(node.in, scope')
        if (node.value == "outer") then {
            return tmp.parent
        }
        return tmp.getScope(node.value)
    }
    if (node.kind == "call") then {
        return findDeepScope'(node.value, scope')
    }
    return Scope.new(scope')
}

method findDeepScope(node) {
    findDeepScope'(node, scope)
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
    if (arg.kind == "type") then {
        return [arg, []]
    }
    Error.raise "Compiler logic error: fell through when rewriting match block"
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
    if (node.kind != "identifier") then {
        return node
    }
    var nm := node.value
    util.setPosition(node.line, node.linePos)
    if (node.inBind) then {
        if (!haveBinding(nm)) then {
            if (haveBinding(nm ++ ":=")) then {
                if (getNameKind(nm ++ ":=") == "method") then {
                    // Bare method call with no arguments
                    def meth = findDeepMethod(nm ++ ":=")
                    def meth2 = ast.memberNode.new(nm, meth.in)
                    return ast.callNode.new(meth2, [ast.callWithPart.new(meth2.value)])
                }
            }
        }
    }
    if (haveBinding(nm).not) then {
        if (node.wildcard) then {
            errormessages.syntaxError("'_' can only be used as a parameter name")atRange(node.line, node.linePos, node.linePos)
        } else {
            def suggestions = []
            var suggestion
            for(scope.elements) do { v ->
                var thresh := 1
                if (nm.size > 5) then {
                    thresh := ((nm.size - 2) / 4 + 1).truncate
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

            if (!node.inBind) then {
                suggestion := errormessages.suggestion.new
                suggestion.insert("\"")atPosition(node.linePos + node.value.size)onLine(node.line)
                suggestion.insert("\"")atPosition(node.linePos)onLine(node.line)
                suggestions.push(suggestion)
            }
            errormessages.syntaxError("Unknown variable or method name '{nm}'. This may be due to a spelling mistake or trying to access a variable within another scope.")atRange(
                node.line, node.linePos, node.linePos + node.value.size - 1)withSuggestions(suggestions)
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
    if (node.kind == "identifier") then {
        return resolveIdentifier(node)
    }
    if (node.kind == "import") then {
        scope.add(node.value) as "def"
    }
    if (node.kind == "call") then {
        if (node.value.kind == "call") then {
            def tmp = ast.callNode.new(node.value.value, node.with)
            tmp.line := node.line
            tmp.generics := node.generics
            return tmp
        }
        if (node.value.kind == "identifier") then {
            def ck = getNameKind(node.value.value)
            if (!node.isPattern) then {
                if ((ck == "def") || (ck == "var")) then {
                    util.semantic_error ""
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
        }
        if (node.dest.kind == "identifier") then {
            if (getNameKind(node.dest.value) == "def") then {
                errormessages.syntaxError("The value of '{node.dest.value}' cannot be changed because it is a constant. To make it a variable use 'var' instead of 'def' in the declaration.")atLine(node.line)
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
            return ast.inheritsNode.new(newcall)
        } else {
            if (node.value.kind == "member") then {
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
                return ast.inheritsNode.new(newcall)
            }
        }
    }
    node
}
method checkRedefinition(ident) {
    def nk = getNameKind(ident.value)
    if ((nk == "def").orElse {nk == "var"}) then {
        if (getNameScope(ident.value)
            .elementDeclarations.contains(ident.value)
        ) then {
            def scp = getNameScope(ident.value)
            var more := ""
            if (scp.elementLines.contains(ident.value)) then {
                more := " as a {scp.elements.get(ident.value)}"
                    ++ " on line {scp.elementLines.get(ident.value)}"
            }
            if(nk == "def") then {
                errormessages.syntaxError("'{ident.value}' cannot be "
                    ++ "redeclared because it is already declared in "
                    ++ "scope{more}.")
                    atRange(ident.line, ident.linePos,
                        ident.linePos + ident.value.size - 1)
            } else {
                def suggs = collections.list.new
                def sugg = errormessages.suggestion.new
                if (sugg.replaceUntil("=")with("{ident.value} :=")
                        onLine(ident.line)
                    ) then {
                    suggs.push(sugg)
                }
                errormessages.syntaxError("'{ident.value}' cannot be "
                        ++ "redeclared because it is already declared in "
                        ++ "scope{more}. To assign to the existing variable, "
                        ++ "remove 'var' or 'def'.")
                    atRange(ident.line, ident.linePos,
                        ident.linePos + ident.value.size - 1)
                    withSuggestions(suggs)
            }
        }
    }
    util.setline(ident.line)
    scope.elementDeclarations.put(ident.value, true)
}
method resolveIdentifiers(topNode) {
    // Recursively replace bare identifiers with their fully-qualified
    // equivalents.
    if (topNode == false) then {
        return topNode
    }
    topNode.map { n -> resolveIdentifiersActual(n) } before { node ->
        util.setline(node.line)
        if (node.kind == "class") then {
            checkRedefinition(node.name)
            scope.add(node.name.value) as "def"
            def classScope = Scope.new(scope)
            classScope.add(node.constructor.value)
            classScope.bindAs(node.name.value)
            pushScope
            if (false != node.generics) then {
                for (node.generics) do {g->
                    scope.add(g.value) as "def"
                }
            }
            for (node.signature) do {s->
                for (s.params) do {p->
                    scope.add(p.value)as "def"
                }
                if (false != s.vararg) then {
                    scope.add(s.vararg.value) as "def"
                }
            }
            pushScope
            scope.variety := "class"
            classScope.elementScopes.put(node.constructor.value, scope)
            for (node.value) do {n->
                if (n.kind == "method") then {
                    scope.add(n.value.value)
                }
                if (n.kind == "vardec") then {
                    scope.add(n.name.value)
                    scope.add(n.name.value ++ ":=")
                }
                if (n.kind == "defdec") then {
                    scope.add(n.name.value)
                }
                if (n.kind == "inherits") then {
                    def parent = resolveIdentifiers(n.value)
                    def parentScope = findDeepScope(parent)
                    for (parentScope.elements) do {e->
                        scope.add(e)
                    }
                    for (node.signature) do {s->
                        for (s.params) do {p->
                            if (parentScope.elements.contains(p.value)) then {
                                def suggestion = errormessages.suggestion.new
                                suggestion.insert("'")atPosition(p.linePos + p.value.size)onLine(p.line)
                                var primes := "'"
                                while { scope.elements.contains(p.value ++ primes) || parentScope.elements.contains(p.value ++ primes) } do {
                                    suggestion.insert("'")atPosition(p.linePos + p.value.size)onLine(p.line)
                                    primes := primes ++ "'"
                                }
                                errormessages.syntaxError("The parameter name '{p.value}' cannot be used because this class inherits a method named '{p.value}'.")atRange(
                                    p.line, p.linePos, p.linePos + p.value.size - 1)withSuggestion(suggestion)
                            }
                        }
                    }
                }
            }
        }
        if (node.kind == "object") then {
            pushScope
            scope.variety := "object"
            for (node.value) do {n->
                if (n.kind == "method") then {
                    scope.add(n.value.value)
                }
                if (n.kind == "vardec") then {
                    scope.add(n.name.value)
                    scope.add(n.name.value ++ ":=")
                }
                if (n.kind == "defdec") then {
                    scope.add(n.name.value)
                }
                if (n.kind == "inherits") then {
                    def parent = resolveIdentifiers(n.value)
                    def parentScope = findDeepScope(parent)
                    for (parentScope.elements) do {e->
                        scope.add(e)
                    }
                }
            }
        }
        if (node.kind == "if") then {
            pushScope
        }
        if (node.kind == "block") then {
            pushScope
            var tmp := node
            if (node.params.size == 1) then {
                tmp := rewritematchblock(tmp)
            }
            for (tmp.params) do {p->
                checkRedefinition(p)
                scope.add(p.value)as "def"
            }
        }
        if (node.kind == "type") then {
            scope.add(node.value) as "def"
            pushScope
            scope.variety := "type"
            for (node.generics) do {n->
                scope.add(n.value) as "def"
            }
        }
        if (node.kind == "methodtype") then {
            scope.add(node.value)
            pushScope
            for (node.generics) do {g->
                scope.add(g.value) as "def"
            }
            for (node.signature) do {s->
                for (s.params) do {p->
                    scope.add(p.value)as "def"
                }
                if (false != s.vararg) then {
                    scope.add(s.vararg.value) as "def"
                }
            }
        }
        if (node.kind == "method") then {
            scope.add(node.value.value)
            pushScope
            scope.variety := "method"
            scope.name := node.value.value
            for (node.generics) do {g->
                checkRedefinition(g)
                scope.add(g.value) as "def"
            }
            for (node.signature) do {s->
                for (s.params) do {p->
                    checkRedefinition(p)
                    scope.add(p.value)as "def"
                }
                if (false != s.vararg) then {
                    scope.add(s.vararg.value) as "def"
                }
            }
        }
        if (node.kind == "vardec") then {
            if ((scope.variety != "object") && (scope.variety != "class")) then {
                checkRedefinition(node.name)
                scope.add(node.name.value)as "var"
            } else {
                scope.add(node.name.value)
            }
        }
        if (node.kind == "defdec") then {
            if ((scope.variety != "object") && (scope.variety != "class")) then {
                checkRedefinition(node.name)
                scope.add(node.name.value)as "def"
            } else {
                scope.add(node.name.value)
            }
        }
        if (node.kind == "import") then {
            checkRedefinition(node)
            scope.add(node.value) as "def"
        }
    } after { node ->
        if (node.kind == "class") then {
            node.data := scope
            popScope
            popScope
        }
        if (node.kind == "object") then {
            if (scope.parent.variety == "method") then {
                scope.parent.parent.elementScopes.put(scope.parent.name,
                    scope)
            }
            node.data := scope
            popScope
        }
        if (node.kind == "if") then {
            popScope
        }
        if (node.kind == "block") then {
            popScope
        }
        if (node.kind == "method") then {
            popScope
        }
        if (node.kind == "methodtype") then {
            popScope
        }
        if (node.kind == "type") then {
            popScope
        }
        if (node.kind == "defdec") then {
            if (node.value.kind == "object") then {
                scope.elementScopes.put(node.name.value, node.value.data)
                node.data := scope
            } else {
                def sc = findDeepScope(node.value)
                scope.elementScopes.put(node.name.value, sc)
            }
            if (ast.findAnnotation(node, "parent")) then {
                def sc = findDeepScope(node.value)
                for (sc.elements) do {m->
                    scope.add(m)
                }
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
            def classScope = Scope.new(otherModule)
            for (constrs) do {constr->
                def ns = Scope.new(otherModule)
                classScope.add(constr)
                classScope.elementScopes.put(constr, ns)
                for (gct.get("methods-of:{c}.{constr}")) do {mn->
                    ns.add(mn)
                }
            }
            otherModule.add(c)
            otherModule.elementScopes.put(c, classScope)
        }
    }
    def freshmeths = collections.map.new
    if (gct.contains("fresh-methods")) then {
        for (gct.get("fresh-methods")) do {c->
            def mScope = Scope.new(otherModule)
            for (gct.get("fresh:{c}")) do {mn->
                mScope.add(mn)
            }
            otherModule.add(c)
            otherModule.elementScopes.put(c, mScope)
        }
    }
}
method handleImport(e) {
    def gct = xmodule.parseGCT(e.path, "/nosuchpath")
    def otherModule = Scope.new(builtinObj)
    processGCT(gct, otherModule)
    scope.add(e.value) as "def"
    scope.elementScopes.put(e.value, otherModule)
}

method resolve(values) {
    util.log_verbose "resolving identifiers."
    preludeObj.add "for()do"
    preludeObj.add "while()do"
    preludeObj.add "print"
    builtinObj.add "Object" as "def"
    builtinObj.add "Dynamic" as "def"
    builtinObj.add "String" as "def"
    builtinObj.add "Number" as "def"
    builtinObj.add "Boolean" as "def"
    builtinObj.add "List" as "def"
    builtinObj.add "Block" as "def"
    builtinObj.add "Done" as "def"
    builtinObj.add "done" as "def"
    builtinObj.add "true" as "def"
    builtinObj.add "false" as "def"
    builtinObj.add "self" as "def"
    builtinObj.add "super" as "def"
    builtinObj.add "outer" as "def"
    builtinObj.add "readable" as "def"
    builtinObj.add "writable" as "def"
    builtinObj.add "public" as "def"
    builtinObj.add "confidential" as "def"
    builtinObj.add "override" as "def"
    builtinObj.add "parent" as "method"
    builtinObj.add "prelude" as "def"
    builtinObj.add "_prelude" as "def"
    builtinObj.add "..." as "def"
    // Historical - should be removed eventually
    if (!util.extensions.contains("NativePrelude")) then {
        var hadDialect := false
        for (values) do {val->
            if (val.kind == "dialect") then {
                hadDialect := true
                def data = xmodule.parseGCT(val.value, "/nosuchfile")
                if (data.contains("public")) then {
                    for (data.get("public")) do {mn->
                        preludeObj.add(mn)
                    }
                }
                if (data.contains("confidential")) then {
                    for (data.get("confidential")) do {mn->
                        preludeObj.add(mn)
                    }
                }
                processGCT(data, preludeObj)
            }
        }
        if (!hadDialect) then {
            for (prelude._methods) do {mn->
                preludeObj.add(mn)
            }
        }
    }
    def vals = collections.list.new
    for (values) do { n ->
        if (n.kind == "method") then {
            scope.add(n.value.value)
        }
        if ((n.kind == "class") || (n.kind == "defdec")) then {
            scope.add(n.name.value) as "def"
        }
        if (n.kind == "vardec") then {
            scope.add(n.name.value) as "var"
        }
        if (n.kind == "type") then {
            scope.add(n.value)
        }
        if (n.kind == "import") then {
            handleImport(n)
        }
    }
    def vis = object {
        inherits ast.baseVisitor
        method visitBind(o) {
            def d = o.dest
            if (d.kind == "identifier") then {
                d.inBind := true
            }
            return true
        }
    }
    for (values) do { v ->
        v.accept(vis)
        def v' = resolveIdentifiers(v)
        vals.push(v')
        if (v'.kind == "method") then {
            if (moduleObj.elementScopes.contains(v'.value.value)) then {
                v'.properties.put("fresh", moduleObj.getScope(v'.value.value))
            }
            if (v'.body.size > 0) then {
                def lastStatement = v'.body.last
                if (lastStatement.kind == "call") then {
                    if (lastStatement.value.kind == "member") then {
                        def mem = lastStatement.value
                        if (mem.value == "clone") then {
                            v'.properties.put("fresh", moduleObj)
                        }
                    }
                }
            }
        }
    }
    vals
}
