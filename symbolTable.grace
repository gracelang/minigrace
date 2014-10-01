import "ast" as ast
import "errormessages" as errormessages

factory method tag(name:String) {
    // superobject for a set of tags, with object identity for ==
    var n := name
    method asDebugString { "tag‹{n}›" }
    method asString { n }
}

def methodT = object { inherits tag("method") }
def objectT  = object { inherits tag("object") }
def inheritedT = object { inherits tag("inherited") }
def unknownT = object { inherits tag("unknown") }

factory method newScope(tag) in(myAstNode) {
    inherits dictionary.empty
    myAstNode.symbols := self
    var parentNodeDefiningScope := unknownT
    method astNode { myAstNode }

    method addNode(nd) as(kind) {
        def name = nd.nameString
        if (name == "isStandardPrelude") then {
            printBacktrace "adding node isStandardPrelude to scope {self}"
        }
        def oldEntry = self.at(name) ifAbsent { 
            self.at(name) put(entry(nd, kind))
            return
        }
        if (oldEntry.kind == inheritedT) then {
            self.at(name) put(entry(nd, kind))
            return
        }
        // This is a duplicate declaration
        errormessages.syntaxError("'{name}' cannot be"
            ++ " redeclared because it is already declared"
            ++ " as a {oldEntry.kind} on line {oldEntry.line}"
            ++ " as well as here at line {nd.line}.")
            atRange(nd.line, nd.linePos, nd.linePos + name.size - 1)
    }
    method contains(name) { self.containsKey(name) }
    method parent {
        // answers the scope surounding this one
        if (parentNodeDefiningScope == unknownT) then {
            var p := myAstNode.parent
            while (p.symbols.isEmpty) do { p := p.parent }
            parentNodeDefiningScope := p
        }
        parentNodeDefiningScope
    }
    method do(action:Block1) { 
        var p := self
        while (p != ast.nullNode) do {
            action.apply(p)
            p := p.parent
        }
    }
    method getKind(name) {
        self.at(name).kind
    }

}

factory method entry(astNode, kind') {
    method node { astNode }
    method line { astNode.line }
    method linePos { astNode.linePos }
    method kind { kind' }
}