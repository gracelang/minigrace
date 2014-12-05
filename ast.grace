// #pragma noTypeChecks
import "util" as util

// This module contains pseudo-classes for all the AST nodes used
// in the parser. The module predates the existence of classes in the
// implementation, so they are written as object literals inside methods.
// Each node has a different signature according to its function, but the
// common interface is:
// dtype ASTNode {
//   kind -> String // Used for pseudo-instanceof tests.
//   register -> String // Used later on to hold the LLVM register of
//                      // the resulting object.
//   line -> Number // The source line the node came from.
//   pretty(n:Number) -> String // Pretty-print of node at depth n,
// }
// Most also contain "value", with varied dtypes, holding the main value
// in the node. Some contain other fields for their specific use: while has
// both a value (the condition) and a "body", for example. None of the nodes
// are particularly notable in any way.

method listMap(l, b)before(blkBefore)after(blkAfter) {
    def r = list.empty
    for (l) do {v->
        def replacement = v.map(b)before(blkBefore)after(blkAfter)
        r.push(replacement)
    }
    r
}
method maybeMap(n, b, before, after) {
    if (n != false) then {
        n.map(b)before(before)after(after)
    } else {
        n
    }
}
method listMap(l, b) parent(p) {
    def newList = list.empty
    for (l) do { nd -> newList.addLast(nd.map(b) parent(p)) }
    if (newList.contains(done)) then {
        print "node list contains done!"
        print "    original list = {l}"
        print "    mapped list = {newList}"
    }
    newList
}
method maybeMap(n, b) parent(p) {
    if (n != false) then {
        n.map(b) parent(p)
    } else {
        n
    }
}

def emptySeq = sequence.empty

type AstNode = type {
    register -> String
    line -> Number
    line:=(ln:Number)
    linePos -> Number
    linePos:=(lp:Number)
    hasSymbolTable -> Boolean
    hasSymbolTable:=(st:Boolean)
    parent -> AstNode
    parent:=(p:AstNode)
}

class baseNode.new {
    // the superclass of all AST nodes
    var register is public := ""
    var line is public := util.linenum
    var linePos is public := util.linepos
    var parent is public := nullNode
    var hasSymbolTable is public := false

    method isAppliedOccurenceOfIdentifier { false }
    method isMatchingBlock { false }
    method isFieldDec { false }
    method isInherits { false }
    method isMember { false }
    method isCall { false }
    method isClass { false }
    method isBind { false }
    method isObject { false }
    method needsMembersWrapped { false }
    method definesObject { false }
    method definesScope { false }
    method usesAsType(aNode) { false }
    method hash { line.hash * linePos.hash }
    method asString { "astNode {self.kind}" }
    method isWritable { true }
    method isReadable { true }
    method isPublic { true }
    method isConfidential { isPublic.not }
    method decType {
        if (self.dtype == false) then {
            return unknownType
        }
        return self.dtype
    }
    method accept(visitor) {
        self.accept(visitor) from (nullNode)
    }
    method withParentRefs {
        self.accept(addParentVisitor)
        self
    }
    method declarationKind { self.kind }     // the kind of identifiers defined within me
    method scope {
        var node := self
        while { node.hasSymbolTable.not } do { node := node.parent }
        node.symbolTable
        // TODO: add cache of this value, look at symboltable module
    }
    method shallowCopyFieldsFrom(other) parent(p:AstNode){
        register := other.register
        line := other.line
        linePos := other.linePos
        parent := p
        hasSymbolTable := other.hasSymbolTable
        self
    }
    method pretty(depth) { 
        self.kind
    }
    method deepCopy {
        self.map { each -> each } parent (nullNode)
    }
    method isUnder(lns) {
        // lns is a list of strings representing kinds of AST node,
        // from the bottom up.  Is this node a subtree of such a structure?
        var nd := self
        for (lns) do { each ->
            nd := nd.parent
            if (nd == nullNode) then { return false }
            if (nd.kind != each) then { return false }
        }
        return true
    }
}

class symbolTableNode.new {
    // The superclass of all AST nodes that open a new scope,
    // and thus may have a symbolTable.
    inherits baseNode.new

    var symbolTable'
    method symbolTable { 
        if (hasSymbolTable) then { symbolTable' } else {
            ProgrammingError.raise "Trying to get a non-existant symbolTable "
        }
    }
    method symbolTable:=(s) {
        symbolTable' := s
        s.node := self
        hasSymbolTable := true
    }
    method shallowCopyFieldsFrom(other) parent(p){
        super.shallowCopyFieldsFrom(other) parent(p)
        if (other.hasSymbolTable) then {
            symbolTable' := other.symbolTable
        }
        self
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        if ((hasSymbolTable).andAlso{util.target == "symbols"}) then {
            "{super.pretty(depth)}\n{spc}Symbols({symbolTable.variety}): {symbolTable'.keysAndValuesAsList}"
        } else {
            super.pretty(depth)
        }
    }
}

def nullNode is public = object {
    inherits symbolTableNode.new
    def kind is public = "null"
    method childrenDo(block1) { }
    method toGrace(depth) {
        "// null"
    }
}

class ifNode.new(cond, thenblock', elseblock') {
    inherits baseNode.new
    def kind is public = "if"
    var value is public := cond
    var thenblock is public := thenblock'
    var elseblock is public := elseblock'
    var handledIdentifiers is public := false
    method needsMembersWrapped { true }
    method childrenDo(b) {
        b.apply(value)
        b.apply(thenblock)
        b.apply(elseblock)
    }
    method accept(visitor : ASTVisitor) from(pNode) {
        if (visitor.visitIf(self) up(pNode)) then {
            value.accept(visitor) from(self)
            thenblock.accept(visitor) from(self)
            elseblock.accept(visitor) from(self)
        }
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        def v = self.value.map(blk)before(blkBefore)after(blkAfter)
        def tb = thenblock.map(blk)before(blkBefore)after(blkAfter)
        blkAfter.apply(self)
        blkBefore.apply(self)
        def eb = elseblock.map(blk)before(blkBefore)after(blkAfter)
        var n := ifNode.new(v, tb, eb)
        n := blk.apply(n)
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) parent(p) {
        var n := shallowCopyWithParent(p)
        n.value := value.map(blk) parent(n)
        n.thenblock := thenblock.map(blk) parent(n)
        n.elseblock := elseblock.map(blk) parent(n)
        n := blk.apply(n)
        n
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := super.pretty(depth) ++ "\n"
        s := s ++ spc ++ self.value.pretty(depth+1)
        s := s ++ "\n"
        if (util.target == "symbols") then {
            s := s ++ spc ++ "Then: {thenblock.pretty(depth+2)}\n"
            s := s ++ spc ++ "Else: {elseblock.pretty(depth+2)}"
        } else {
            s := s ++ spc ++ "Then:"
            for (self.thenblock.body) do { ix ->
                s := s ++ "\n  "++ spc ++ ix.pretty(depth+2)
            }
            s := s ++ "\n"
            s := s ++ spc ++ "Else:"
            for (self.elseblock.body) do { ix ->
                s := s ++ "\n  "++ spc ++ ix.pretty(depth+2)
            }
        }
        s
    }
    method toGrace(depth : Number) -> String {
        var spc := ""
        for (0..(depth - 1)) do { i ->
            spc := spc ++ "    "
        }
        var s := "if ({self.value.toGrace(0)}) then \{"
        for (self.thenblock.body) do { ix ->
            s := s ++ "\n" ++ spc ++ "    " ++ ix.toGrace(depth + 1)
        }
        if (self.elseblock.size > 0) then {
            s := s ++ "\n" ++ spc ++ "\} else \{"
            for (self.elseblock.body) do { ix ->
                s := s ++ "\n" ++ spc ++ "    " ++ ix.toGrace(depth + 1)
            }
        }
        s := s ++ "\n" ++ spc ++ "\}"
        s
    }
    method shallowCopyWithParent(p) {
        ifNode.new(nullNode, nullNode, nullNode).shallowCopyFieldsFrom(self) parent(p)
    }
    method shallowCopyFieldsFrom(other) parent(p) {
        super.shallowCopyFieldsFrom(other) parent(p)
        handledIdentifiers := other.handledIdentifiers
        self
    }
}
class blockNode.new(params', body') {
    inherits symbolTableNode.new
    def kind is public = "block"
    def value is public = "block"
    var params is public := params'
    var body is public := body'
    def selfclosure is public = true
    var matchingPattern is public := false
    var extraRuntimeData is public := false
    for (params') do {p->
        p.accept(patternMarkVisitor) from(self)
    }
    method declarationKind {
        "parameter"
    }
    method isMatchingBlock { params.size == 1 }
    method definesObject {
        body.isEmpty.not.andAlso { body.last.definesObject }
    }
    method childrenDo(b) {
        params.do(b)
        body.do(b)
        if (false =! matchingPattern) then { b.apply(matchingPattern) }
    }
    method parametersDo(b) {
        params.do(b)
    }
    method accept(visitor : ASTVisitor) from(pNode) {
        if (visitor.visitBlock(self) up(pNode)) then {
            for (self.params) do { mx ->
                mx.accept(visitor) from(self)
            }
            for (self.body) do { mx ->
                mx.accept(visitor) from(self)
            }
            if (self.matchingPattern != false) then {
                self.matchingPattern.accept(visitor) from(self)
            }
        }
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := blockNode.new(listMap(params, blk)before(blkBefore)after(blkAfter),
            listMap(body, blk)before(blkBefore)after(blkAfter))
        if (self.matchingPattern != false) then {
            n.matchingPattern := self.matchingPattern.map(blk)
                before(blkBefore)after(blkAfter)
        }
        n := blk.apply(n)
        n.extraRuntimeData := extraRuntimeData
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) parent(p) {
        var n := shallowCopyWithParent(p)
        n.params := listMap(params, blk) parent(n)
        n.body := listMap(body, blk) parent(n)
        n.matchingPattern := maybeMap(matchingPattern, blk) parent(n)
        n := blk.apply(n)
        n
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := super.pretty(depth) ++ "\n"
        s := s ++ spc ++ "Parameters:"
        for (self.params) do { mx ->
            s := s ++ "\n  "++ spc ++ mx.pretty(depth+2)
        }
        s := s ++ "\n"
        s := s ++ spc ++ "Body:"
        for (self.body) do { mx ->
            s := s ++ "\n  "++ spc ++ mx.pretty(depth+2)
        }
        if (self.matchingPattern != false) then {
            s := s ++ "\n"
            s := s ++ spc ++ "Pattern:"
            s := s ++ "\n  "++ spc ++ self.matchingPattern.pretty(depth+2)
        }
        s
    }
    method toGrace(depth : Number) -> String {
        var spc := ""
        for (0..(depth - 1)) do { i ->
            spc := spc ++ "    "
        }
        var s := "\{"
        if (self.params.size > 0) then {
            s := s ++ " "
            for (self.params.indices) do { i ->
                var p := self.params[i]
                if (self.matchingPattern != false) then {
                    s := s ++ "(" ++ p.toGrace(0) ++ ")"
                } else {
                    s := s ++ p.toGrace(0)
                }
                if (i < self.params.size) then {
                    s := s ++ ", "
                } else {
                    s := s ++ " ->"
                }
            }
        }
        for (self.body) do { mx ->
            s := s ++ "\n" ++ spc ++ "    " ++ mx.toGrace(depth + 1)
        }
        s := s ++ "\n" ++ spc ++ "\}"
        s
    }
    method shallowCopyWithParent(p) {
        blockNode.new(params, body).shallowCopyFieldsFrom(self) parent(p)
    }
    method shallowCopyFieldsFrom(other) parent(p) {
        super.shallowCopyFieldsFrom(other) parent(p)
        matchingPattern := other.matchingPattern
        extraRuntimeData := other.extraRuntimeData
        self
    }
}
class catchCaseNode.new(block, cases', finally') {
    inherits baseNode.new
    def kind is public = "catchcase"
    var value is public := block
    var cases is public := cases'
    var finally is public := finally'

    method childrenDo(b) {
        b.apply(value)
        cases.do(b)
        if (false =! finally) then { b.apply(finally) }
    }
    method accept(visitor : ASTVisitor) from(pNode) {
        if (visitor.visitCatchCase(self) up(pNode)) then {
            self.value.accept(visitor) from(self)
            for (self.cases) do { mx ->
                mx.accept(visitor) from(self)
            }
            if (self.finally != false) then {
                self.finally.accept(visitor) from(self)
            }
        }
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := catchCaseNode.new(value.map(blk)before(blkBefore)after(blkAfter),
            listMap(cases, blk)before(blkBefore)after(blkAfter),
            maybeMap(finally, blk, blkBefore, blkAfter))
        n.line := line
        n
    }
    method map(blk) parent(p) {
        var n := shallowCopyWithParent(p)
        n.value := value.map(blk) parent(n)
        n.cases := listMap(cases, blk) parent(n)
        n.finally := maybeMap(finally, blk) parent(n)
        n
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := "Catch\n"
        s := s ++ spc ++ value.pretty(depth + 2)
        for (self.cases) do { mx ->
            s := s ++ "\n{spc}Case:\n{spc}  {mx.pretty(depth+2)}"
        }
        if (false != self.finally) then {
            s := s ++ "\n{spc}Finally:\n{spc}  {self.finally.pretty(depth+2)}"
        }
        s
    }
    method toGrace(depth : Number) -> String {
        var spc := ""
        for (0..(depth - 1)) do { i ->
            spc := spc ++ "    "
        }
        var s := "catch " ++ self.value.toGrace(0) ++ " "
        for (self.cases) do { case ->
            s := s ++ "\n" ++ spc ++ "    " ++ "case " ++ case.toGrace(depth + 2)
        }
        if (self.finally != false) then {
            s := s ++ "\n" ++ spc ++ "    " ++ "finally " ++ self.finally.toGrace(depth + 2)
        }
        s
    }
    method shallowCopyWithParent(p) {
        catchCaseNode.new(nullNode, emptySeq, false).shallowCopyFieldsFrom(self) parent(p)
    }
}
class matchCaseNode.new(matchee', cases', elsecase') {
    inherits baseNode.new
    def kind is public = "matchcase"
    var value is public := matchee'
    var cases is public := cases'
    var elsecase is public := elsecase'
    method matchee { value }
    method childrenDo(b) {
        b.apply(value)
        cases.do(b)
        if (false =! elsecase) then { b.apply(elsecase) }
    }
    method accept(visitor : ASTVisitor) from(pNode) {
        if (visitor.visitMatchCase(self) up(pNode)) then {
            self.value.accept(visitor) from(self)
            for (self.cases) do { mx ->
                mx.accept(visitor) from(self)
            }
            if (self.elsecase != false) then {
                self.elsecase.accept(visitor) from(self)
            }
        }
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        def newcases = listMap(cases, blk)before(blkBefore)after(blkAfter)
        var n := matchCaseNode.new(value.map(blk)before(blkBefore)after(blkAfter),
            newcases,
            maybeMap(elsecase, blk, blkBefore, blkAfter))
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) parent(p) {
        var n := shallowCopyWithParent(p)
        n.value := value.map(blk) parent(n)
        n.cases := listMap(cases, blk) parent(n)
        n.elsecase := maybeMap(elsecase, blk) parent(n)
        n := blk.apply(n)
        n
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := super.pretty(depth) ++ "\n"
        s := s ++ spc ++ matchee.pretty(depth + 2)
        for (self.cases) do { mx ->
            s := s ++ "\n{spc}Case:\n{spc}  {mx.pretty(depth+2)}"
        }
        if (false != self.elsecase) then {
            s := s ++ "\n{spc}Else:\n{spc}  {self.elsecase.pretty(depth+2)}"
        }
        s
    }
    method toGrace(depth : Number) -> String {
        var spc := ""
        for (0..(depth - 1)) do { i ->
            spc := spc ++ "    "
        }
        var s := "match(" ++ self.value.toGrace(0) ++ ")"
        for (self.cases) do { case ->
            s := s ++ "\n" ++ spc ++ "    " ++ "case " ++ case.toGrace(depth + 2)
        }
        if (self.elsecase != false) then {
            s := s ++ "\n" ++ spc ++ "    " ++ "else " ++ self.elsecase.toGrace(depth + 2)
        }
        s
    }
    method shallowCopyWithParent(p) {
        matchCaseNode.new(nullNode, emptySeq, false).shallowCopyFieldsFrom(self) parent(p)
    }
}
class methodTypeNode.new(name', signature', rtype') {
    // Represents the signature of a method in a type literal
    // [signature]
    //     object {
    //         name := ""
    //         params := sequence.empty
    //         vararg := false/identifier
    //     }
    //     object {
    //         name := ""
    //         params := sequence.empty
    //         vararg := false/identifier
    //     }
    //     ...
    //     object {
    //         ...
    //     }
    inherits symbolTableNode.new
    def kind is public = "methodtype"
    var value is public := name'
    var signature is public := signature'
    var rtype is public := rtype'
    var generics is public := sequence.empty
    def nameString:String is public = value
    method asString { "MethodType {value} -> {rtype}" }    
    method parametersDo(b) {
        signature.do { part -> 
            part.params.do { each -> b.apply(each) }
        }
    }
    method declarationKind { "typedec" }
    method typeParametersDo(b) {
        if (false != generics) then {
            generics.do { each -> b.apply(each) }
        }
    }
    method childrenDo(b) {
        if (self.rtype != false) then { b.apply(rtype) }
        signature.do{ part -> b.apply(part) }
        generics.do(b)
    }
    method accept(visitor : ASTVisitor) from(pNode) {
        if (visitor.visitMethodType(self) up(pNode)) then {
            if (rtype != false) then {
                rtype.accept(visitor) from(self)
            }
            for (generics) do { each ->
                each.accept(visitor) from(self)
            }
            for (signature) do { part ->
                part.accept(visitor) from(self)
            }
        }
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var rt := false
        if (rtype != false) then {
            rt := rtype.map(blk)before(blkBefore)after(blkAfter)
        }
        var n := methodTypeNode.new(value, listMap(signature, blk)before(blkBefore)after(blkAfter),
            rt)
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) parent(p) {
        var n := shallowCopyWithParent(p)
        n.rtype := maybeMap(rtype, blk) parent(n)
        n.signature := listMap(signature, blk) parent(n)
        n.generics := listMap(generics, blk) parent(n)
        n := blk.apply(n)
        n
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := super.pretty(depth) ++ "\n"
        s := "{s}{spc}Name: {value}\n"
        if (rtype != false) then {
            s := "{s}{spc}Returns:\n  {spc}{rtype.pretty(depth + 2)}"
        }
        if (generics.isEmpty.not) then {
            s := "{s}\n{spc}TypeParams:"
            for (generics) do { each -> 
                s := "{s}\n{spc}  {each.pretty(depth + 2)}"
            }
        }
        s := "{s}\n{spc}Signature:"
        for (signature) do { part ->
            s := "{s}\n  {spc}{part.pretty(depth + 2)}"
        }
        s
    }
    method toGrace(depth : Number) -> String {
        var s := ""
        for (self.signature) do { part ->
            s := s ++ part.name
            if ((part.params.size > 0) || (part.vararg != false)) then {
                s := s ++ "("
                for (part.params.indices) do { pnr ->
                    var p := part.params[pnr]
                    s := s ++ p.toGrace(depth + 1)
                    if ((pnr < part.params.size) || (part.vararg != false)) then {
                        s := s ++ ", "
                    }
                }
                if (part.vararg != false) then {
                    s := s ++ "*" ++ part.vararg.value
                }
                s := s ++ ")"
            }
        }
        if (self.rtype != false) then {
            s := s ++ " -> " ++ self.rtype.toGrace(depth + 1)
        }
        s
    }
    method shallowCopyWithParent(p) {
        methodTypeNode.new(value, emptySeq, false).shallowCopyFieldsFrom(self) parent(p)
    }
}
class typeLiteralNode.new(methods', types') {
    inherits baseNode.new
    def kind is public = "typeliteral"
    var methods is public := methods'
    var types is public := types'
    var nominal is public := false
    var anonymous is public := true
    var value is public := "‹anon›"

    
    method name { value }
    method name:=(n:String) {
        value := n
        anonymous := false
    }
    method asString {
        "TypeLiteral: methods = {methods}, types = {types}"
    }
    method childrenDo(b) {
        types.do(b)
        methods.do(b)
    }
    method accept(visitor : ASTVisitor) from(pNode) {
        if (visitor.visitTypeLiteral(self) up(pNode)) then {
            for (self.methods) do { each ->
                each.accept(visitor) from(self)
            }
            for (self.types) do { each ->
                each.accept(visitor) from(self)
            }
        }
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := typeLiteralNode.new(
            listMap(methods, blk)before(blkBefore)after(blkAfter),
            listMap(types, blk)before(blkBefore)after(blkAfter))
        n := blk.apply(n)
        n.line := line
        n.linePos := linePos
        blkAfter.apply(n)
        n
    }
    method map(blk) parent(p) {
        var n := shallowCopyWithParent(p)
        n.methods := listMap(methods, blk) parent (n)
        n.types := listMap(types, blk) parent (n)
        n := blk.apply(n)
        n
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := "Type literal\n"
        s := s ++ spc ++ "Types:"
        for (types) do { each ->
            s := s ++ "\n  "++ spc ++ each.pretty(depth+2)
        }
        s := s ++ "\n" ++ spc ++ "Methods:"
        for (methods) do { each ->
            s := s ++ "\n  "++ spc ++ each.pretty(depth+2)
        }
        s := s ++ "\n"
        s
    }
    method toGrace(depth : Number) -> String {
        var spc := ""
        for (0..(depth - 1)) do { i ->
            spc := spc ++ "    "
        }
        var s := "type"
        if (self.generics.size > 0) then {
            s := s ++ "<"
            for (self.generics.indices) do { i ->
                s := s ++ self.generics[i].value
                if (i < self.generics.size) then {
                    s := s ++ ", "
                }
            }
            s := s ++ ">"
        }
        s := s ++ " = \{"
        for (self.methods) do { each ->
            s := s ++ "\n" ++ spc ++ "    " ++ each.toGrace(depth + 1)
        }
        for (self.types) do { each ->
            s := s ++ "\n" ++ spc ++ "    " ++ each.toGrace(depth + 1)
        }
        s ++ "\}"
    }
    method shallowCopyWithParent(p) {
        typeLiteralNode.new(emptySeq, emptySeq).shallowCopyFieldsFrom(self) parent(p)
    }
    method shallowCopyFieldsFrom(other) parent(p) {
        super.shallowCopyFieldsFrom(other) parent(p)
        nominal := other.nominal
        anonymous := other.anonymous
        value := other.value
        self
    }
}

class typeDecNode.new(name', typeValue) {
    inherits symbolTableNode.new
    def kind is public = "typedec"
    var name is public := name'
    var value is public := typeValue
    def nameString:String is public = name.value
    var annotations is public := list.empty
    var generics is public := list.empty

    method declarationKind {
        "parameter"
    }
    method isConfidential {
        if (annotations.size == 0) then { return false }
        findAnnotation(self, "confidential")
    }
    method isPublic { isConfidential.not }
    method isWritable { false }
    method isReadable { isPublic }

    method childrenDo(b) {
        b.apply(name)
        generics.do(b)
        annotations.do(b)
        b.apply(value)
    }
    method accept(visitor : ASTVisitor) from(pNode) {
        if (visitor.visitTypeDec(self) up(pNode)) then {
            value.accept(visitor) from(self)
            generics.do { each -> each.accept(visitor) from(self) }
            annotations.do { each -> each.accept(visitor) from(self) }
        }
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := typeDecNode.new(name, value.map(blk)before(blkBefore)after(blkAfter))
        for (listMap(annotations, blk)before(blkBefore)after(blkAfter)) do {a->
            n.annotations.push(a)
        }
        for (listMap(generics, blk)before(blkBefore)after(blkAfter)) do {g->
            n.generics.push(g)
        }
        n.line := line
        n.linePos := linePos
        blkAfter.apply(n)
        n
    }
    method map(blk) parent(p) {
        var n := shallowCopyWithParent(p)
        if (name.kind != "identifier") then { 
            print "typeDecNode {nameString} does not contain an identifier" 
        }
        n.name := name.map(blk) parent(n)
        n.value := value.map(blk) parent(n)
        n.annotations := listMap(annotations, blk) parent(n)
        n.generics := listMap(generics, blk) parent(n)
        n := blk.apply(n)
        n
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := super.pretty(depth) ++ "\n"
        s := s ++ spc ++ self.name.pretty(depth + 1) ++ "\n"
        if (generics.size > 0) then {
            s := "{s}{spc}Generic parameters:\n"
            for (generics) do {ut->
                s := "{s}{spc}  {ut}\n"
            }
        }
        s := s ++ spc ++ "Value:"
        s := s ++ value.pretty(depth+2)
        s := s ++ "\n"
        s
    }
    method toGrace(depth : Number) -> String {
        var spc := ""
        for (0..(depth - 1)) do { i ->
            spc := spc ++ "    "
        }
        var s := ""
        s := "type {self.name}"
        if (self.generics.size > 0) then {
            s := s ++ "<"
            for (self.generics.indices) do { i ->
                s := s ++ self.generics[i].value
                if (i < self.generics.size) then {
                    s := s ++ ", "
                }
            }
            s := s ++ ">"
        }
        s := s ++ " = " ++ value(toGrace(depth + 2))
        s
    }
    method asString { "TypeDec {nameString}" }
    method shallowCopyWithParent(p) {
        typeDecNode.new(name, nullNode).shallowCopyFieldsFrom(self) parent(p)
    }
}

class methodNode.new(name', signature', body', dtype') {
    // Represents a method declaration
    // [signature]
    //     object {
    //         name := ""
    //         params := sequence.empty
    //         vararg := false/identifier
    //     }
    //     object {
    //         name := ""
    //         params := sequence.empty
    //         vararg := false/identifier
    //     }
    //     ...
    //     object {
    //         ...
    //     }
    inherits symbolTableNode.new
    def kind is public = "method"
    var value is public := name'
    var signature is public := signature'
    var body is public := body'
    var dtype is public := dtype'
    var varargs is public := false
    var generics is public := sequence.empty
    var selfclosure is public := false
    def nameString:String is public = value.value
    var annotations is public := list.empty
    var isFresh is public := false      // a method is 'fresh' if it answers a new object

    method needsMembersWrapped { true }
    method declarationKind {
        "parameter"
    }
    method isConfidential {
        if (annotations.size == 0) then { return false }
        findAnnotation(self, "confidential")
    }
    method isPublic { isConfidential.not }
    method isWritable { false }
    method isReadable { isPublic }
    method usesAsType(aNode) {
        aNode == dtype
    }
    method definesScope { 
        body.isEmpty.not.andAlso {body.last.definesObject}
    }
    method objectScope {
        scope.parent
    }
    method parametersDo(b) {
        signature.do { part -> 
            part.params.do { each -> b.apply(each) }
        }
    }
    method typeParametersDo(b) {
        if (false != generics) then {
            generics.do { each -> b.apply(each) }
        }
    }
    method childrenDo(b) {
        b.apply(value)
        signature.do { part -> b.apply(part) }
        generics.do(b)
        annotations.do(b)
        b.apply(value)
    }
    method accept(visitor : ASTVisitor) from(pNode) {
        if (visitor.visitMethod(self) up(pNode)) then {
            self.value.accept(visitor) from(self)
            if (self.dtype != false) then {
                self.dtype.accept(visitor) from(self)
            }
            for (generics) do { each ->
                each.accept(visitor) from(self)
            }
            for (self.signature) do { part ->
                for (part.params) do { p ->
                    p.accept(visitor) from(self)
                }
                if (part.vararg != false) then {
                    part.vararg.accept(visitor) from(self)
                }
            }
            for (self.body) do { mx ->
                mx.accept(visitor) from(self)
            }
        }
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var dt := false
        if (dtype != false) then {
            dt := dtype.map(blk)before(blkBefore)after(blkAfter)
        }
        var n := methodNode.new(name', signature, listMap(body, blk)before(blkBefore)after(blkAfter), dt)
        for (listMap(annotations, blk)before(blkBefore)after(blkAfter)) do {a->
            n.annotations.push(a)
        }
        for (listMap(generics, blk)before(blkBefore)after(blkAfter)) do {a->
            n.generics.push(a)
        }
        n := blk.apply(n)
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) parent(p){
        var n := shallowCopyWithParent(p)
        n.body := listMap(body, blk) parent(n)
        n.signature := listMap(signature, blk) parent(n)
        n.annotations := listMap(annotations, blk) parent(n)
        n.generics := listMap(generics, blk) parent(n)
        n.dtype := maybeMap(dtype, blk) parent(n)
        n := blk.apply(n)
        n
    }
    method eachParameter(blk) {
        for (signature) do {s->
            for (s.params) do {p->
                blk.apply(p)
            }
        }
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := super.pretty(depth) ++ "\n"
        s := s ++ spc ++ "Name: " ++ self.value.pretty(depth+1)
        s := s ++ "\n"
        if (false != self.dtype) then {
            s := s ++ spc ++ "Returns:\n" ++ spc ++ "  "
            s := s ++ self.dtype.pretty(depth + 2) ++ "\n"
        }
        s := "{s}{spc}Signature:"
        for (signature) do { part ->
            s := "{s}\n  {spc}Part: {part.name}"
            s := "{s}\n    {spc}Parameters:"
            for (part.params) do { p ->
                s := "{s}\n      {spc}{p.pretty(depth + 4)}"
            }
            if (part.vararg != false) then {
                s := "{s}\n    {spc}Vararg: {part.vararg.pretty(depth + 3)}"
            }
        }
        s := s ++ "\n"
        if (false != generics) then {
            s := "{s}{spc}Generics:"
            for (generics) do {g->
                s := "{s}\n{spc}  {g.pretty(0)}"
            }
            s := s ++ "\n"
        }
        if (annotations.size > 0) then {
            s := "{s}{spc}Annotations:"
            for (annotations) do {an->
                s := "{s}\n{spc}  {an.pretty(depth + 2)}"
            }
            s := s ++ "\n"
        }
        s := s ++ spc ++ "Body:"
        for (self.body) do { mx ->
            s := s ++ "\n  "++ spc ++ mx.pretty(depth+2)
        }
        s
    }
    method toGrace(depth : Number) -> String {
        var spc := ""
        for (0..(depth - 1)) do { i ->
            spc := spc ++ "    "
        }
        var s := "method "
        var firstPart := true
        for (self.signature) do { part ->
            s := s ++ part.name
            if (firstPart.andAlso{generics.size != 0}) then {
                s := s ++ "<"
                for (1..(generics.size - 1)) do {ix ->
                    s := s ++ generics.at(ix).toGrace(depth + 1)
                }
                s := s ++ generics.last.toGrace(depth + 1) ++ ">"
            }
            firstPart := false
            if ((part.params.size > 0) || (part.vararg != false)) then {
                s := s ++ "("
                for (part.params.indices) do { pnr ->
                    var p := part.params[pnr]
                    s := s ++ p.toGrace(depth + 1)
                    if ((pnr < part.params.size) || (part.vararg != false)) then {
                        s := s ++ ", "
                    }
                }
                if (part.vararg != false) then {
                    s := s ++ "*" ++ part.vararg.value
                }
                s := s ++ ")"
            }
        }
        if (self.dtype != false) then {
            s := s ++ " -> {self.dtype.toGrace(0)}"
        }
        if (self.annotations.size > 0) then {
            s := s ++ " is "
            s := s ++ self.annotations.reduce("", { a,b ->
                if (a != "") then { a ++ ", " } else { "" } ++ b.toGrace(0) })
        }
        s := s ++ " \{"
        for (self.body) do { mx ->
            s := s ++ "\n" ++ spc ++ "    " ++ mx.toGrace(depth + 1)
        }
        s := s ++ "\n" ++ spc ++ "\}"
        s
    }
    method asString { "Method {nameString}" }
    method shallowCopyWithParent(p) {
        methodNode.new(value, signature, body, dtype).shallowCopyFieldsFrom(self) parent(p)
    }
    method shallowCopyFieldsFrom(other) parent(p) {
        super.shallowCopyFieldsFrom(other) parent(p)
        isFresh := other.isFresh
        selfclosure := other.selfclosure
        self
    }
}
class callNode.new(what, with') {
    // requested as callNode.new(target:AstNode, parts:List)
    // The first is equivalent to the second with an empty list of arguments
    // Represents a method request with arguments.
    // The ‹target›.‹methodName› part is in `value`
    // The argument list is in `with`, as a sequence of `callWithPart`s.
    // [with]
    //     object {
    //         name := ""
    //         args := sequence.empty
    //     }
    //     object {
    //         name := ""
    //         args := sequence.empty
    //     }
    //     ...
    //     object {
    //         ...
    //     }
    inherits baseNode.new
    def kind is public = "call"
    var value is public := what        // method being requested
    var with is public := with'        // arguments
    var generics is public := false
    var isPattern is public := false
    def nameString:String is public = what
    
    method target { value }
    method isCall { true }
    method childrenDo(b) {
        b.apply(value)
        with.do { part -> b.apply(part) }
        if (generics != false) then { generics.do(b) }
    }
    method accept(visitor : ASTVisitor) from(pNode) {
        if (visitor.visitCall(self) up(pNode)) then {
            self.value.accept(visitor) from(self)
            for (self.with) do { part ->
                for (part.args) do { arg ->
                    arg.accept(visitor) from(self)
                }
            }
        }
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := callNode.new(value.map(blk)before(blkBefore)after(blkAfter),
            listMap(with, blk)before(blkBefore)after(blkAfter))
        if (generics != false) then {
            n.generics := listMap(generics, blk)before(blkBefore)after(blkAfter)
        }
        n.isPattern := isPattern
        n := blk.apply(n)
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) parent(p) {
        var n := shallowCopyWithParent(p)
        n.value := value.map(blk) parent(n)
        n.with := listMap(with, blk) parent(n)
        n.generics := maybeMap(generics, blk) parent(n)
        n := blk.apply(n)
        n
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := super.pretty(depth) ++ "\n"
        s := s ++ spc ++ "Method Name: {self.value.pretty(depth + 1)}"
        s := s ++ "\n"
        if (false != generics) then {
            s := s ++ spc ++ "  Generics:\n"
            for (generics) do {g->
                s := s ++ spc ++ "    " ++ g.pretty(depth + 2) ++ "\n"
            }
        }
        s := s ++ spc ++ "Arguments:"
        for (self.with) do { part ->
            s := s ++ "\n  " ++ spc ++ "Part: " ++ part.name
            for (part.args) do { arg ->
                s := s ++ "\n      " ++ spc ++ arg.pretty(depth + 2)
            }
        }
        s
    }
    method toGrace(depth : Number) -> String {
        var spc := ""
        for (0..(depth - 1)) do { i ->
            spc := spc ++ "    "
        }
        var s := ""
        // only the last member is the method call we need to handle
        if (self.value.kind == "member") then {
            var member := self.value
            if (member.value.substringFrom(1)to(6) == "prefix") then {
                s := member.value.substringFrom(7)to(member.value.size)
                return s ++ member.in.toGrace(0)
            }
            s := member.in.toGrace(0) ++ "."
        }
        var firstPart := true
        for (self.with) do { part ->
            s := s ++ part.name
            if (firstPart.andAlso{generics != false}) then {
                s := s ++ "<"
                for (1..(generics.size - 1)) do {ix ->
                    s := s ++ generics.at(ix).toGrace(depth + 1)
                }
                s := s ++ generics.last.toGrace(depth + 1) ++ ">"
            }
            firstPart := false
            if (part.args.size > 0) then {
                s := s ++ "("
                for (part.args.indices) do { anr ->
                    var arg := part.args[anr]
                    s := s ++ arg.toGrace(depth + 1)
                    if (anr < part.args.size) then {
                        s := s ++ ", "
                    }
                }
                s := s ++ ")"
            }
        }
        s
    }
    method asString { "Call {what.pretty(0)}" }
    method shallowCopyWithParent(p) {
        callNode.new(value, with).shallowCopyFieldsFrom(self) parent(p)
    }
    method shallowCopyFieldsFrom(other) parent(p) {
        super.shallowCopyFieldsFrom(other) parent(p)
        isPattern := other.isPattern
        self
    }
}
class classNode.new(name', signature', body', superclass', constructor', dtype') {
    // TODO  remove superclass as a parameter
    // [signature]
    //     object {
    //         name := ""
    //         params := sequence.empty
    //         vararg := false/identifier
    //     }
    //     object {
    //         name := ""
    //         params := sequence.empty
    //         vararg := false/identifier
    //     }
    //     ...
    //     object {
    //         ...
    //     }
    inherits symbolTableNode.new
    def kind is public = "class"
    var value is public := body'
    var name is public := name'
    var constructor is public := constructor'
    var signature is public := signature'
    var dtype is public := dtype'
    var generics is public := sequence.empty
    var superclass is public := superclass'
    var annotations is public := list.empty
    def nameString:String is public = name.value

    var data is public := false
    
    method fullName { "{nameString}.{constructor.nameString}" }
    method declarationKind {
        "method"
    }
    method definesObject { true }
    method isClass { true }
    method isPublic {
        // assume that classes are public by default
        if (annotations.size == 0) then { return true }
        findAnnotation(self, "confidential").not
    }
    method isWritable { false }
    method isReadable { isPublic }
    method usesAsType(aNode) {
        aNode == dtype
    }
    method parametersDo(b) {
        signature.do { part -> 
            part.params.do { each -> b.apply(each) }
        }
    }
    method typeParametersDo(b) {
        if (false != generics) then {
            generics.do { each -> b.apply(each) }
        }
    }
    method childrenDo(b) {
        b.apply(name)
        b.apply(constructor)
        signature.do(b)
        b.apply(dtype)
        generics.do(b)
        if (false != superclass) then { b.apply(superclass) }
        annotations.do(b)
        value.do(b)
    }
    method accept(visitor : ASTVisitor) from(pNode) {
        if (visitor.visitClass(self) up(pNode)) then {
            self.name.accept(visitor) from(self)
            self.constructor.accept(visitor) from(self)
            if (self.superclass != false) then {
                self.superclass.accept(visitor) from(self)
            }
            for (self.signature) do { partNode ->
                partNode.accept(visitor) from(self)
            }
            for (self.value) do { each ->
                each.accept(visitor) from(self)
            }
        }
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := classNode.new(name.map(blk)before(blkBefore)after(blkAfter),
            listMap(signature, blk)before(blkBefore)after(blkAfter), listMap(value, blk)before(blkBefore)after(blkAfter),
            maybeMap(superclass, blk, blkBefore, blkAfter), constructor, dtype)
        for (listMap(annotations, blk)before(blkBefore)after(blkAfter)) do {a->
            n.annotations.push(a.map(blk)before(blkBefore)after(blkAfter))
        }
        n := blk.apply(n)
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) parent(p) {
        var n := shallowCopyWithParent(p)
        n.value := listMap(value, blk) parent(n)
        n.name := name.map(blk) parent(n)
        n.signature := listMap(signature, blk) parent(n)
        n.generics := listMap(generics, blk) parent(n)
        n.annotations := listMap(annotations, blk) parent(n)
        n.superclass := maybeMap(superclass, blk) parent(n)
        n.constructor := constructor.map(blk) parent(n)
        n.dtype := maybeMap(dtype, blk) parent(n)
        n := blk.apply(n)
        n
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := super.pretty(depth) ++ "\n"
        s := "{s}{spc}Name: {self.name.pretty(0)}"
        if (util.target == "symbols") then {
            s := s ++ "\n{spc}Parent Symbols({symbolTable'.parent.variety}): {symbolTable'.parent.keysAndValuesAsList}"
            s := s ++ "\n{spc}Parent^2 Symbols({symbolTable'.parent.parent.variety}): {symbolTable'.parent.parent.keysAndValuesAsList}"
        }
        if (self.superclass != false) then {
            s := s ++ "\n" ++ spc ++ "Superclass:"
            s := s ++ "\n  " ++ spc ++ self.superclass.pretty(depth + 2)
        }
        s := s ++ "\n"
        s := "{s}{spc}Factory method: {constructor.pretty(0)}\n"
        if(false != dtype) then {
            s := "{s}{spc}Returns:\n  {spc}{dtype.pretty(depth + 2)}\n"
        }
        s := "{s}{spc}Signature:"
        for (signature) do { part ->
            s := "{s}\n  {spc}Part: {part.name}"
            s := "{s}\n    {spc}Parameters:"
            for (part.params) do { p ->
                s := "{s}\n      {spc}{p.pretty(depth + 4)}"
            }
            if (part.vararg != false) then {
                s := "{s}\n    {spc}Vararg: {part.vararg.pretty(depth + 3)}"
            }
        }
        if (generics.isEmpty.not) then {
            s := s ++ "\n" ++ spc ++ "TypeParams:"
            for (generics) do {g->
                s := s ++ "\n  {spc}{g.pretty(0)}"
            }
        }
        if (annotations.size > 0) then {
            s := s ++ "\n" ++ spc ++ "Annotations:"
            for (annotations) do {a->
                s := s ++ " {a.pretty(depth + 2)}"
            }
        }
        s := s ++ "\n" ++ spc ++ "Body:"
        for (self.value) do { x ->
            s := s ++ "\n  "++ spc ++ x.pretty(depth+2)
        }
        s
    }
    method toGrace(depth : Number) -> String {
        var spc := ""
        for (0..(depth - 1)) do { i ->
            spc := spc ++ "    "
        }
        var s := "class {self.name.toGrace(0)}"
        if (self.name.kind != "generic") then {
            // TODO generics + new-style constructors aren't possible at the moment
            s := s ++ "."
            for (self.signature) do { part ->
                s := s ++ part.name
                if ((part.params.size > 0) || (part.vararg != false)) then {
                    s := s ++ "("
                    for (part.params.indices) do { pnr ->
                        var p := part.params[pnr]
                        s := s ++ p.toGrace(depth + 1)
                        if ((pnr < part.params.size) || (part.vararg != false)) then {
                            s := s ++ ", "
                        }
                    }
                    if (part.vararg != false) then {
                        s := s ++ "*" ++ part.vararg.value
                    }
                    s := s ++ ")"
                }
            }
        }
        if(false != dtype) then {
            s := "{s} -> {dtype.toGrace(depth + 1)}"
        }
        s := s ++ " \{"
        for (self.value) do { mx ->
            s := s ++ "\n" ++ spc ++ "    " ++ mx.toGrace(depth + 1)
        }
        s := s ++ "\n" ++ spc ++ "\}"
        s
    }
    method shallowCopyWithParent(p) {
        classNode.new(name, emptySeq, emptySeq, false, nullNode, false)
            .shallowCopyFieldsFrom(self) parent(p)
    }
    method shallowCopyFieldsFrom(other) parent(p) {
        super.shallowCopyFieldsFrom(other) parent(p)
        data := other.data
        self
    }
}
class objectNode.new(body, superclass') {
    // TODO  remove superclass as a parameter
    inherits symbolTableNode.new
    def kind is public = "object"
    var value is public := body
    var superclass is public := superclass'
    var classname is public := "object"
    var data is public := false
    
    method fullName { 
        if (classname != "object") then { return classname }
        if (parent.kind == "defdec") then { return parent.nameString }
        return classname
    }
    method definesObject { true }
    method isObject { true }
    method childrenDo(b) {
        b.apply(superclass)
        value.do(b)
    }
    method accept(visitor : ASTVisitor) from(pNode) {
        if (visitor.visitObject(self) up(pNode)) then {
            if (self.superclass != false) then {
                self.superclass.accept(visitor) from(self)
            }
            for (self.value) do { x ->
                x.accept(visitor) from(self)
            }
        }
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := objectNode.new(listMap(value, blk)before(blkBefore)after(blkAfter),
                    maybeMap(superclass, blk, blkBefore, blkAfter))
        n := blk.apply(n)
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) parent(p) {
        var n := shallowCopyWithParent(p)
        n.value := listMap(value, blk) parent(n)
        n.superclass := maybeMap(superclass, blk) parent(n)
        n := blk.apply(n)
        n
    }
    method pretty(depth') {
        var depth := depth'
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := super.pretty(depth)
        if (self.superclass != false) then {
            s := s ++ "\n" ++ spc ++ "Superclass:"
            s := s ++ "\n  " ++ spc ++ self.superclass.pretty(depth + 1)
            s := s ++ "\n" ++ spc ++ "Body:"
            depth := depth + 1
        }
        for (self.value) do { x ->
            s := s ++ "\n"++ spc ++ x.pretty(depth+1)
        }
        s
    }
    method toGrace(depth : Number) -> String {
        var spc := ""
        for (0..(depth - 1)) do { i ->
            spc := spc ++ "    "
        }
        var s := "object \{"
        for (self.value) do { x ->
            s := s ++ "\n" ++ spc ++ "    " ++ x.toGrace(depth + 1)
        }
        s := s ++ "\n" ++ spc ++ "\}"
        s
    }
    method shallowCopyWithParent(p) {
        objectNode.new(emptySeq, false).shallowCopyFieldsFrom(self) parent(p)
    }
    method shallowCopyFieldsFrom(other) parent(p) {
        super.shallowCopyFieldsFrom(other) parent(p)
        data := other.data
        classname := other.classname
        self
    }
    method asString {
        "object \{{classname} inherits {superclass}\}"
    }
}
class arrayNode.new(values) {
    inherits baseNode.new
    def kind is public = "array"
    var value is public := values
    method accept(visitor : ASTVisitor) from(pNode) {
        if (visitor.visitArray(self) up(pNode)) then {
            for (self.value) do { ax ->
                ax.accept(visitor) from(self)
            }
        }
    }
    method childrenDo(b) {
        value.do(b)
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := arrayNode.new(listMap(value, blk)before(blkBefore)after(blkAfter))
        n := blk.apply(n)
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) parent(p) {
        var n := shallowCopyWithParent(p)
        n.value := listMap(value, blk) parent(n)
        n := blk.apply(n)
        n
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { ai ->
            spc := spc ++ "  "
        }
        var s := super.pretty(depth)
        for (self.value) do { ax ->
            s := s ++ "\n"++ spc ++ ax.pretty(depth+1)
        }
        s
    }
    method toGrace(depth : Number) -> String {
        var s := "["
        for (self.value.indices) do { i ->
            s := s ++ self.value[i].toGrace(0)
            if (i < self.value.size) then {
                s := s ++ ", "
            }
        }
        s := s ++ "]"
        s
    }
    method shallowCopyWithParent(p) {
        arrayNode.new(emptySeq).shallowCopyFieldsFrom(self) parent(p)
    }
}
class memberNode.new(what, in') {
    // Represents a dotted request ‹in›.‹value›
    inherits baseNode.new
    def kind is public = "member"
    var value is public := what  // NB: value is a String, not an Identifier
    var in is public := in'
    var generics is public := false

    method target { in }
    method nameString { value }
    method isMember { true }
    method needsMembersWrapped {
        if (value == "outer") then { return false }
        parent.isMember && parent.parent.isMember.not
    }
    method wrapWithCall {
        // TODO Compatability Kludge — remove when possible
        // since a member node represents a method request, and is compiled as such
        callNode.new(self, [callWithPart.new(value)]).withParentRefs
    }
    method childrenDo(b) {
        b.apply(in)
    }
    method accept(visitor : ASTVisitor) from(pNode) {
        if (visitor.visitMember(self) up(pNode)) then {
            self.in.accept(visitor) from(self)
        }
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := memberNode.new(value, in.map(blk)before(blkBefore)after(blkAfter))
        if (generics != false) then {
            n.generics := listMap(generics, blk)before(blkBefore)after(blkAfter)
        }
        n := blk.apply(n)
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) parent(p) {
        var n := shallowCopyWithParent(p)
        n.in := in.map(blk) parent(n)
        if (generics != false) then {
            n.generics := listMap(generics, blk) parent(n)
        }
        n := blk.apply(n)
        n
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := "Member‹" ++ self.value ++ "›\n"
        s := s ++ spc ++ in.pretty(depth)
        if (generics != false) then {
            s := s ++ "\n" ++ spc ++ "  Generics:"
            for (generics) do {g->
                s := s ++ "\n" ++ spc ++ "    " ++ g.pretty(0)
            }
        }
        s
    }
    method toGrace(depth : Number) -> String {
        var s := ""
        if (self.value.substringFrom(1)to(6) == "prefix") then {
            s := self.value.substringFrom(7)to(value.size)
            s := s ++ " " ++ self.in.toGrace(0)
        } else {
            s := self.in.toGrace(depth) ++ "." ++ self.value
        }
        if (generics != false) then {
            s := s ++ "<"
            for (1..(generics.size - 1)) do {ix ->
                s := s ++ generics.at(ix).toGrace(depth + 1)
            }
            s := s ++ generics.last.toGrace(depth + 1) ++ ">"
        }
        s
    }
    method asString { "Member‹{value}›" }
    method asIdentifier {
        // make an identifiderNode with the same properties as me
        def resultNode = identifierNode.new(value, false)
        resultNode.inRequest := true
        resultNode.line := line
        resultNode.linePos := linePos
        return resultNode
    }
    method shallowCopyWithParent(p) {
        memberNode.new(value, nullNode).shallowCopyFieldsFrom(self) parent(p)
    }
}
class genericNode.new(base, params') {
    inherits baseNode.new
    def kind is public = "generic"
    var value is public := base        // APB: in a generic call, value is the called node
                            // e.g. in List<Number>, value is Identifier‹List›
    var params is public := params'
    method nameString { value.nameString }
    method asString { 
        var s := "{base}<"
        params.do { each -> s := "{s}{each}" } separatedBy { s := s ++ ", " }
        s ++ ">"
    }
    method childrenDo(b) {
        params.do(b)
    }
    method accept(visitor : ASTVisitor) from(pNode) {
        if (visitor.visitGeneric(self) up(pNode)) then {
            self.value.accept(visitor) from(self)
            for (self.params) do { p ->
                p.accept(visitor) from(self)
            }
        }
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := genericNode.new(value.map(blk)before(blkBefore)after(blkAfter), listMap(params, blk)before(blkBefore)after(blkAfter))
        n := blk.apply(n)
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) parent(p) {
        var n := shallowCopyWithParent(p)
        n.value := value.map(blk) parent(n)
        n.params := listMap(params, blk) parent(n)
        n := blk.apply(n)
        n
    }
    method pretty(depth) {
        self.toGrace(depth)
    }
    method toGrace(depth : Number) -> String {
        var s := self.value.value ++ "<"
        for (self.params.indices) do { i ->
            s := s ++ self.params[i].toGrace(0)
            if (i < self.params.size) then {
                s := s ++ ", "
            }
        }
        s := s ++ ">"
        s
    }
    method shallowCopyWithParent(p) {
        genericNode.new(value, emptySeq).shallowCopyFieldsFrom(self) parent(p)
    }
}
class identifierNode.new(name, dtype') {
    inherits baseNode.new
    def kind is public = "identifier"
    var value is public := name
    var wildcard is public := false
    var dtype is public := dtype'
    var isBindingOccurrence is public := false
    var isAssigned is public := false
    var inRequest is public := false
    var generics is public := false
    var isDeclaredByParent is public := false

    method nameString { value }     //  value changes when parsing "[]"

    method isAppliedOccurenceOfIdentifier {
        isBindingOccurrence.not
    }
    method declarationKind {
        parent.declarationKind
    }
    method inTypePosition {
        // am I used by my parent node as a type?
        // This is a hack, uses as a subsitute for having information in the .gct
        // telling us which identifiers represent types
        parent.usesAsType(self)
    }
    method usesAsType(aNode) {
        aNode == dtype
    }
    method childrenDo(b) {
        if (dtype != false) then { b.apply(dtype) }
    }
    method accept(visitor : ASTVisitor) from(pNode) {
        if (visitor.visitIdentifier(self) up(pNode)) then {
            if (self.dtype != false) then {
                self.dtype.accept(visitor) from(self)
            }
        }
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        util.setPosition(line, linePos)
        var n := identifierNode.new(value, maybeMap(dtype, blk, blkBefore,
        blkAfter))
        n.wildcard := wildcard
        n.isBindingOccurrence := isBindingOccurrence
        n.isAssigned := isAssigned
        n.inRequest := inRequest
        n := blk.apply(n)
        n.line := line
        if (n.kind == "identifier") then {
            n.linePos := linePos
            n.wildcard := wildcard
            n.isBindingOccurrence := isBindingOccurrence
            n.isAssigned := isAssigned
            n.inRequest := inRequest
        }
        blkAfter.apply(n)
        n
    }
    method map(blk) parent(p) {
        var n := shallowCopyWithParent(p)
        n.dtype := maybeMap(dtype, blk) parent(n)
        n := blk.apply(n)
        n
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s
        if(self.wildcard) then {
            s := "WildcardIdentifier"
        } else {
            s := self.asString
        }
        if (self.dtype != false) then {
            s := s ++ "\n" ++ spc ++ "  Type: "
            s := s ++ self.dtype.pretty(depth + 2)
        }
        if (false != generics) then {
            s := s ++ "\n" ++ spc ++ "Generics:"
            for (generics) do {g->
                s := s ++ spc ++ "  " ++ g.pretty(depth + 2)
            }
        }
        s
    }
    method toGrace(depth : Number) -> String {
        var s
        if(self.wildcard) then {
            s := "_"
        } else {
            s := self.value
        }
        if (self.dtype != false) then {
            s := s ++ " : " ++ self.dtype.toGrace(depth + 1)
        }
        if (false != generics) then {
            s := s ++ "<"
            for (1..(generics.size - 1)) do {ix ->
                s := s ++ generics.at(ix).toGrace(depth + 1)
            }
            s := s ++ generics.last.toGrace(depth + 1) ++ ">"
        }
        s
    }

    method asString { 
        if (isBindingOccurrence.andAlso{util.target != "processed-ast"}) then {
            "IdentifierBinding‹{value}›"
        } else { 
            "Identifier‹{value}›"
        }
    }
    method shallowCopyWithParent(p) {
        identifierNode.new(value, false).shallowCopyFieldsFrom(self) parent(p)
    }
    method shallowCopyFieldsFrom(other) parent(p) {
        super.shallowCopyFieldsFrom(other) parent(p)
        wildcard := other.wildcard
        isBindingOccurrence := other.isBindingOccurrence
        isDeclaredByParent := other.isDeclaredByParent
        isAssigned := other.isAssigned
        inRequest := other.inRequest
        self
    }
}

def typeType is public = identifierNode.new("Type", false)
def unknownType is public = identifierNode.new("Unknown", typeType)

class octetsNode.new(num) {
    inherits baseNode.new
    def kind is public = "octets"
    var value is public := num
    method childrenDo(b) { }
    method accept(visitor : ASTVisitor) from(pNode) {
        visitor.visitOctets(self) up(pNode)
    }
    method pretty(depth) {
        "{super.pretty(depth)}({self.value})"
    }
    method toGrace(depth : Number) -> String {
        self.value
    }
    method map(blk) parent(p) {
        var n := shallowCopyWithParent(p)
        n := blk.apply(n)
        n
    }
    method shallowCopyWithParent(p) {
        octetsNode.new(value).shallowCopyFieldsFrom(self) parent(p)
    }
}
class stringNode.new(v) {
    inherits baseNode.new
    def kind is public = "string"
    var value is public := v
    method childrenDo(b) { }
    method accept(visitor : ASTVisitor) from(pNode) {
        visitor.visitString(self) up(pNode)
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := blk.apply(self)
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) parent(p) {
        var n := shallowCopyWithParent(p)
        n := blk.apply(n)
        n
    }
    method pretty(depth) {
        "{super.pretty(depth)}({self.value})"
    }
    method toGrace(depth : Number) -> String {
        var s := "\""
        for (self.value) do { c ->
            // TODO: what escapes are missing?
            if (c == "\n") then {
                s := s ++ "\\n"
            } elseif (c == "\t") then {
                s := s ++ "\\t"
            } elseif (c == "\"") then {
                s := s ++ "\\\""
            } elseif (c == "\\") then {
                s := s ++ "\\\\"
            } else {
                s := s ++ c
            }
        }
        s := s ++ "\""
        s
    }
    method shallowCopyWithParent(p) {
        stringNode.new(value).shallowCopyFieldsFrom(self) parent(p)
    }
}
class numNode.new(val) {
    inherits baseNode.new
    def kind is public = "num"
    var value is public := val
    method childrenDo(b) { }
    method accept(visitor : ASTVisitor) from(pNode) {
        visitor.visitNum(self) up(pNode)
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := blk.apply(self)
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) parent(p) {
        var n := shallowCopyWithParent(p)
        n := blk.apply(n)
        n
    }
    method pretty(depth) {
        "{super.pretty(depth)}({self.value})"
    }
    method toGrace(depth : Number) -> String {
        self.value.asString
    }
    method asString { "Number {value}" }
    method shallowCopyWithParent(p) {
        numNode.new(value).shallowCopyFieldsFrom(self) parent(p)
    }
}
class opNode.new(op, l, r) {
    inherits baseNode.new
    def kind is public = "op"
    def value is public = op     // a String
    var left is public := l
    var right is public := r
    method needsMembersWrapped { true }
    method childrenDo(b) {
        b.apply(left)
        b.apply(right)
    }
    method accept(visitor : ASTVisitor) from(pNode) {
        if (visitor.visitOp(self) up(pNode)) then {
            self.left.accept(visitor) from(self)
            self.right.accept(visitor) from(self)
        }
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := opNode.new(value, left.map(blk)before(blkBefore)after(blkAfter), right.map(blk)before(blkBefore)after(blkAfter))
        n := blk.apply(n)
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) parent(p) {
        var n := shallowCopyWithParent(p)
        n.left := left.map(blk) parent(n)
        n.right := right.map(blk) parent(n)
        n := blk.apply(n)
        n
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := "Op(" ++ self.value ++ ")"
        s := s ++ "\n"
        s := s ++ spc ++ self.left.pretty(depth + 1)
        s := s ++ "\n"
        s := s ++ spc ++ self.right.pretty(depth + 1)
        s
    }
    method toGrace(depth : Number) -> String {
        var s := ""
        if ((self.left.kind == "op") && (self.left.value != self.value)) then {
            s := "(" ++ self.left.toGrace(0) ++ ")"
        } else {
            s := self.left.toGrace(0)
        }
        if (self.value == "..") then {
            s := s ++ self.value
        } else {
            s := s ++ " " ++ self.value ++ " "
        }
        if ((self.right.kind == "op") && (self.right.value != self.value)) then {
            s := s ++ "(" ++ self.right.toGrace(0) ++ ")"
        } else {
            s := s ++ self.right.toGrace(0)
        }
        s
    }
    method shallowCopyWithParent(p) {
        opNode.new(value, nullNode, nullNode).shallowCopyFieldsFrom(self) parent(p)
    }
}
class indexNode.new(expr, index') {
    // an expression in square brackets
    inherits baseNode.new
    def kind is public = "index"
    var value is public := expr
    var index is public := index'
    
    method childrenDo(b) {
        b.apply(value)
        b.apply(index)
    }
    method accept(visitor : ASTVisitor) from(pNode) {
        if (visitor.visitIndex(self) up(pNode)) then {
            self.value.accept(visitor) from(self)
            self.index.accept(visitor) from(self)
        }
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := indexNode.new(value.map(blk)before(blkBefore)after(blkAfter), index.map(blk)before(blkBefore)after(blkAfter))
        n := blk.apply(n)
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) parent(p) {
        var n := shallowCopyWithParent(p)
        n.value := value.map(blk) parent(n)
        n.index := index.map(blk) parent(n)
        n := blk.apply(n)
        n
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := super.pretty(depth) ++ "\n"
        s := s ++ spc ++ self.value.pretty(depth + 1)
        s := s ++ "\n"
        s := s ++ spc ++ self.index.pretty(depth + 1)
        s
    }
    method toGrace(depth : Number) -> String {
        var spc := ""
        for (0..(depth - 1)) do { i ->
            spc := spc ++ "    "
        }
        var s := self.value.toGrace(depth + 1)
        s := s ++ "[" ++ self.index.toGrace(depth + 1) ++ "]"
        s
    }
    method shallowCopyWithParent(p) {
        indexNode.new(nullNode, nullNode).shallowCopyFieldsFrom(self) parent(p)
    }
}
class bindNode.new(dest', val') {
    // an assignment, or a request of a setter-method
    inherits baseNode.new
    def kind is public = "bind"
    var dest is public := dest'
    var value is public := val'
    
    method childrenDo(b) {
        b.apply(value)
        b.apply(dest)
    }
    method isBind { true }
    method asString { "Bind {value}" }
    method accept(visitor : ASTVisitor) from(pNode) {
        if (visitor.visitBind(self) up(pNode)) then {
            self.dest.accept(visitor) from(self)
            self.value.accept(visitor) from(self)
        }
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := bindNode.new(dest.map(blk)before(blkBefore)after(blkAfter), value.map(blk)before(blkBefore)after(blkAfter))
        n := blk.apply(n)
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) parent(p) {
        var n := shallowCopyWithParent(p)
        n.dest := dest.map(blk) parent(n)
        n.value := value.map(blk) parent(n)
        n := blk.apply(n)
        n
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := super.pretty(depth) ++ "\n"
        s := s ++ spc ++ self.dest.pretty(depth + 1)
        s := s ++ "\n"
        s := s ++ spc ++ self.value.pretty(depth + 1)
        s
    }
    method toGrace(depth : Number) -> String {
        var spc := ""
        for (0..(depth - 1)) do { i ->
            spc := spc ++ "    "
        }
        var s := self.dest.toGrace(depth + 1)
        s := s ++ " := " ++ self.value.toGrace(depth + 1)
        s
    }
    method shallowCopyWithParent(p) {
        bindNode.new(dest, value).shallowCopyFieldsFrom(self) parent(p)
    }
}
class defDecNode.new(name', val, dtype') {
    inherits baseNode.new
    def kind is public = "defdec"
    var name is public := name'
    var value is public := val
    var dtype is public := dtype'
    def nameString:String is public = name.value
    var annotations is public := list.empty
    var data is public := false
    var startToken is public := false

    method isPublic {
        // defs are confidential by default
        if (annotations.size == 0) then { return false }
        if (findAnnotation(self, "public")) then { return true }
        def res = findAnnotation(self, "readable")
        if (nameString == "bindings") then {
            print "bindings is public"
        }
        res
    }
    method isWritable { false }
    method isReadable { isPublic }
    method isFieldDec { 
        if (parent.kind == "object") then { true }
            elseif {parent.kind == "class"} then { true }
            else { false }
    }
    method definesScope {
        value.definesObject
    }
    method objectScope {
        scope
    }
    method usesAsType(aNode) {
        aNode == dtype
    }
    method childrenDo(b) {
        b.apply(value)
        b.apply(name)
        b.apply(dtype)
        annotations.do(b)
    }
    method accept(visitor : ASTVisitor) from(pNode) {
        if (visitor.visitDefDec(self) up(pNode)) then {
            self.name.accept(visitor) from(self)
            if (self.dtype != false) then {
                self.dtype.accept(visitor) from(self)
            }
            if (self.value != false) then {
                self.value.accept(visitor) from(self)
            }
        }
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := defDecNode.new(name, value.map(blk)before(blkBefore)after(blkAfter),
            maybeMap(dtype, blk, blkBefore, blkAfter))
        for (listMap(annotations, blk)before(blkBefore)after(blkAfter)) do {a->
            n.annotations.push(a.map(blk)before(blkBefore)after(blkAfter))
        }
        n := blk.apply(n)
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) parent(p) {
        var n := shallowCopyWithParent(p)
        n.name := name.map(blk) parent(n)
        n.value := value.map(blk) parent(n)
        n.dtype := maybeMap(dtype, blk) parent(n)
        n.annotations := listMap(annotations, blk) parent(n)
        n := blk.apply(n)
        n
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := super.pretty(depth) ++ "\n"
        s := s ++ spc ++ self.name.pretty(depth)
        if (dtype != false) then {
            s := s ++ "\n" ++ spc ++ "Type: " ++ self.dtype.pretty(depth + 2)
        }
        if (false != value) then {
            s := s ++ "\n" ++ spc ++ "Value: " ++ value.pretty(depth + 2)
        }
//        if (annotations.isEmpty.not) then {
//            s := s ++ "\n{spc}Annotations:"
//            annotations.do { ann ->
//                s := "{s} {ann.pretty(depth + 2)}"
//            }
//        }
        s
    }
    method toGrace(depth : Number) -> String {
        var spc := ""
        for (0..(depth - 1)) do { i ->
            spc := spc ++ "    "
        }
        var s := "def {self.name.toGrace(0)}"
        if (self.dtype.value != "Unknown") then {
            s := s ++ " : " ++ self.dtype.toGrace(0)
        }
        if (self.annotations.size > 0) then {
            s := s ++ " is "
            s := s ++ self.annotations.reduce("", { a,b ->
                if (a != "") then { a ++ ", " } else { "" } ++ b.toGrace(0) })
        }
        if (self.value != false) then {
            s := s ++ " = " ++ self.value.toGrace(depth)
        }
        s
    }
    method shallowCopyWithParent(p) {
        defDecNode.new(name, value, dtype).shallowCopyFieldsFrom(self) parent(p)
    }
    method shallowCopyFieldsFrom(other) parent(p) {
        super.shallowCopyFieldsFrom(other) parent(p)
        data := other.data
        startToken := other.startToken
        self
    }
}
class varDecNode.new(name', val', dtype') {
    inherits baseNode.new
    def kind is public = "vardec"
    var name is public := name'
    var value is public := val'
    var dtype is public := dtype'
    def nameString:String is public = name.value
    var annotations is public := list.empty

    method needsMembersWrapped { true }
    method childrenDo(b) {
        b.apply(value)
        b.apply(name)
        b.apply(dtype)
        annotations.do(b)
    }
    method isPublic {
        // vars are confidential by default
        if (annotations.size == 0) then { return false }
        if (findAnnotation(self, "public")) then { return true }
        findAnnotation(self, "readable")
    }
    method isWritable {
        if (annotations.size == 0) then { return false }
        if (findAnnotation(self, "public")) then { return true }
        if (findAnnotation(self, "writable")) then { return true }
        false
    }
    method isReadable {
        if (annotations.size == 0) then { return false }
        if (findAnnotation(self, "public")) then { return true }
        if (findAnnotation(self, "readable")) then { return true }
        false
    }
    method isFieldDec { 
        if (parent.kind == "object") then { true }
            elseif {parent.kind == "class"} then { true }
            else { false }
    }
    method usesAsType(aNode) {
        aNode == dtype
    }
    method accept(visitor : ASTVisitor) from(pNode) {
        if (visitor.visitVarDec(self) up(pNode)) then {
            self.name.accept(visitor) from(self)
            if (self.dtype != false) then {
                self.dtype.accept(visitor) from(self)
            }
            if (self.value != false) then {
                self.value.accept(visitor) from(self)
            }
        }
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := varDecNode.new(name, maybeMap(value, blk,
                blkBefore, blkAfter),
            maybeMap(dtype, blk, blkBefore, blkAfter))
        for (listMap(annotations, blk)before(blkBefore)after(blkAfter)) do {a->
            n.annotations.push(a.map(blk)before(blkBefore)after(blkAfter))
        }
        n := blk.apply(n)
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) parent(p) {
        var n := shallowCopyWithParent(p)
        n.name := name.map(blk) parent(n)
        n.value := maybeMap(value, blk) parent(n)
        n.dtype := maybeMap(dtype, blk) parent(n)
        n.annotations := listMap(annotations, blk) parent(n)
        n := blk.apply(n)
        n
    }
    method pretty(depth) {
        var spc := ""
        for ((0..depth)) do { i ->
            spc := spc ++ "  "
        }
        var s := super.pretty(depth) ++ "\n"
        s := s ++ spc ++ self.name.pretty(depth + 1)
        if (self.dtype != false) then {
            s := s ++ "\n" ++ spc ++ "Type: "
            s := s ++ self.dtype.pretty(depth + 2)
        }
        if (false != self.value) then {
            s := s ++ "\n" ++ spc ++ "Value: "
            s := s ++ self.value.pretty(depth + 2)
        }
        s
    }
    method toGrace(depth : Number) -> String {
        var spc := ""
        for (0..(depth - 1)) do { i ->
            spc := spc ++ "    "
        }
        var s := "var {self.name.toGrace(0)}"
        if (self.dtype.value != "Unknown") then {
            s := s ++ " : " ++ self.dtype.toGrace(0)
        }
        if (self.annotations.size > 0) then {
            s := s ++ " is "
            s := s ++ self.annotations.reduce("", { a,b ->
                if (a != "") then { a ++ ", " } else { "" } ++ b.toGrace(0) })
        }
        if (self.value != false) then {
            s := s ++ " := " ++ self.value.toGrace(depth)
        }
        s
    }
    method shallowCopyWithParent(p) {
        varDecNode.new(name, value, dtype).shallowCopyFieldsFrom(self) parent(p)
    }
}
class importNode.new(path', name', dtype') {
    inherits baseNode.new
    def kind is public = "import"
    var value is public := name'
    var path is public := path'
    var annotations is public := list.empty
    var dtype is public := dtype'
    method name { value }
    method nameString { value.nameString }
    method isPublic {
        // imports, like defs, are confidential by default
        if (annotations.size == 0) then { return false }
        if (findAnnotation(self, "public")) then { return true }
        findAnnotation(self, "readable")
    }
    method isWritable { false }
    method isReadable { isPublic }
    method declarationKind { "defdec" }
    method usesAsType(aNode) {
        aNode == dtype
    }
    method childrenDo(b) {
        if (dtype != false) then { b.apply(dtype) }
        annotations.do(b)
    }
    method accept(visitor : ASTVisitor) from(pNode) {
        if (visitor.visitImport(self) up(pNode)) then {
            self.value.accept(visitor) from(self)
            if (self.dtype != false) then {
                self.dtype.accept(visitor) from(self)
            }
        }
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        def nameNd = value.map(blk)before(blkBefore)after(blkAfter)
        var n := importNode.new(path, nameNd)
        for (listMap(annotations, blk)before(blkBefore)after(blkAfter)) do {a->
            n.annotations.push(a.map(blk)before(blkBefore)after(blkAfter))
        }
        n := blk.apply(n)
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) parent(p) {
        var n := shallowCopyWithParent(p)
        n.value := value.map(blk) parent(n)
        n.dtype := maybeMap(dtype, blk) parent(n)
        n.annotations := listMap(annotations, blk) parent(n)
        n := blk.apply(n)
        n
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := super.pretty(depth) ++ "\n"
        s := s ++ "{spc}Path: {path}\n"
        s := s ++ "{spc}Identifier: {value}\n"
        if (annotations.size > 0) then {
            s := s ++ "{spc}Anotations: {annotations}\n"
        }
        s
    }
    method toGrace(depth : Number) -> String {
        "import \"{self.path}\" as {nameString}"
    }
    method shallowCopyWithParent(p) {
        importNode.new(path, nullNode, false).shallowCopyFieldsFrom(self) parent(p)
    }
}
class dialectNode.new(path') {
    inherits baseNode.new
    def kind is public = "dialect"
    var value is public := path'
    
    method childrenDo(b) { }
    method accept(visitor : ASTVisitor) from(pNode) {
        visitor.visitDialect(self) up(pNode)
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := blk.apply(self)
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) parent(p) {
        var n := shallowCopyWithParent(p)
        n := blk.apply(n)
        n
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := super.pretty(depth) ++ "\n"
        s := s ++ "{spc}Path: {self.value}\n"
        s
    }
    method toGrace(depth : Number) -> String {
        "dialect \"{self.value}\""
    }
    method shallowCopyWithParent(p) {
        dialectNode.new(value).shallowCopyFieldsFrom(self) parent(p)
    }
}
class returnNode.new(expr) {
    inherits baseNode.new
    def kind is public = "return"
    var value is public := expr

    method needsMembersWrapped { true }
    method childrenDo(b) {
        b.apply(value)
    }
    method accept(visitor : ASTVisitor) from(pNode) {
        if (visitor.visitReturn(self) up(pNode)) then {
            self.value.accept(visitor) from(self)
        }
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := returnNode.new(value.map(blk)before(blkBefore)after(blkAfter))
        n := blk.apply(n)
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) parent(p) {
        var n := shallowCopyWithParent(p)
        n.value := value.map(blk) parent(n)
        n := blk.apply(n)
        n
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := super.pretty(depth) ++ "\n"
        s := s ++ spc ++ self.value.pretty(depth + 1)
        s
    }
    method toGrace(depth : Number) -> String {
        "return " ++ self.value.toGrace(depth)
    }
    method shallowCopyWithParent(p) {
        returnNode.new(nullNode).shallowCopyFieldsFrom(self) parent(p)
    }
}
class inheritsNode.new(expr) {
    inherits baseNode.new
    def kind is public = "inherits"
    var value is public := expr
    var providedNames is public := list.empty
    
    method isInherits { true }
    method inheritsFromMember { value.isMember }
    method inheritsFromCall { value.isCall }
    method childrenDo(b) {
        b.apply(value)
    }
    method accept(visitor : ASTVisitor) from(pNode) {
        if (visitor.visitInherits(self) up(pNode)) then {
            self.value.accept(visitor) from(self)
        }
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := inheritsNode.new(value.map(blk)before(blkBefore)after(blkAfter))
        n.providedNames.addAll(providedNames)
        n := blk.apply(n)
        n.line := line
        blkAfter.apply(n)
        n
    }
    method map(blk) parent(p) {
        var n := shallowCopyWithParent(p)
        n.value := value.map(blk) parent(n)
        n := blk.apply(n)
        n
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := super.pretty(depth) ++ "\n"
        s := s ++ spc ++ self.value.pretty(depth + 1)
        if (providedNames.isEmpty.not) then {
            s := s ++ "\n{spc}Provided names: {providedNames}"
        }
        s
    }
    method toGrace(depth : Number) -> String {
        "inherits {self.value.toGrace(0)}"
    }
    method nameString { value.toGrace(0) }
    method asString { "Inherits {nameString}" }
    method shallowCopyWithParent(p) {
        inheritsNode.new(nullNode).shallowCopyFieldsFrom(self) parent(p)
    }
    method shallowCopyFieldsFrom(other) parent(p) {
        super.shallowCopyFieldsFrom(other) parent(p)
        providedNames := other.providedNames
        self
    }
}
class blankNode.new {
    inherits baseNode.new
    def kind is public = "blank"
    def value is public = "blank"
    
    method childrenDo(b) { }
    method accept(visitor : ASTVisitor) from(pNode) {
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        self
    }
    method map(blk) parent(p) {
        var n := shallowCopyWithParent(p)
        n := blk.apply(n)
        n
    }
    method toGrace(depth : Number) -> String {
        ""
    }
    method shallowCopyWithParent(p) {
        blankNode.new.shallowCopyFieldsFrom(self) parent(p)
    }
}

class signaturePart.new(*values) {
    inherits baseNode.new
    def kind is public = "signaturepart"
    var name is public := ""
    var params is public := list.empty
    var vararg is public := false
    var generics is public := list.empty
    var lineLength is public := 0
    if (values.size > 0) then {
        name := values[1]
    }
    if (values.size > 1) then {
        params := values[2]
    }
    if (values.size > 2) then {
        vararg := values[3]
    }
    method accept(visitor : ASTVisitor) from(pNode) {
        if (visitor.visitSignaturePart(self) up(pNode)) then {
            params.do { p -> p.accept(visitor) from(self) }
            if (false != vararg) then { vararg.accept(visitor) from(self) }
            generics.do { g -> g.accept(visitor) from(self) }
        }
    }
    method declarationKind { "parameter" }
    method childrenDo(b) {
        b.apply(name)
        params.do(b)
        if (vararg != false) then {
            b.apply(vararg)
        }
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := signaturePart.new(name, listMap(params, blk)before(blkBefore)after(blkAfter), vararg)
        n := blk.apply(n)
        blkAfter.apply(n)
        n
    }
    method map(blk) parent(p) {
        var n := shallowCopyWithParent(p)
        n.params := listMap(params, blk) parent(n)
        n.vararg := maybeMap(vararg, blk) parent(n)
        n := blk.apply(n)
        n
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := "Part: {name}"
        s := "{s}\n{spc}Parameters:"
        for (params) do { p ->
            s := "{s}\n  {spc}{p.pretty(depth + 2)}"
        }
        if (vararg != false) then {
            s := "{s}\n  {spc}Vararg: {vararg.pretty(depth + 1)}"
        }
        s
    }
    method shallowCopyWithParent(p) {
        signaturePart.new(name).shallowCopyFieldsFrom(self) parent(p)
    }
    method shallowCopyFieldsFrom(other) parent(p) {
        super.shallowCopyFieldsFrom(other) parent(p)
        lineLength := other.lineLength
        self
    }
    method asString {
        "Part: {name}"
    }
}

class callWithPart.new(*values) {
    // requested as
    // - callWithPart.new(request:String), or
    // - callWithPart.new(request:String, arguments:List)
    // The first is equivalent to the second with an empty list of arguments
    inherits baseNode.new
    def kind is public = "callwithpart"
    var name is public := ""
    var args is public := list.empty
    var lineLength is public := 0
    if (values.size > 0) then {
        name := values[1]
    }
    if (values.size > 1) then {
        args := values[2]
    }
    
    method needsMembersWrapped { true }
    method childrenDo(b) {
        args.do(b)
    }
    method map(blk)before(blkBefore)after(blkAfter) {
        blkBefore.apply(self)
        var n := callWithPart.new(name, listMap(args, blk)before(blkBefore)after(blkAfter))
        n := blk.apply(n)
        blkAfter.apply(n)
        n
    }
    method map(blk) parent(p) {
        var n := shallowCopyWithParent(p)
        n.args := listMap(args, blk) parent(n)
        n := blk.apply(n)
        n
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := "CallPart: {name}"
        s := "{s}\n    {spc}Args:"
        for (args) do { a ->
            s := "{s}\n    {spc}{a.pretty(depth + 4)}"
        }
        s
    }
    method shallowCopyWithParent(p) {
        callWithPart.new(name).shallowCopyFieldsFrom(self) parent(p)
    }
    method shallowCopyFieldsFrom(other) parent(p) {
        super.shallowCopyFieldsFrom(other) parent(p)
        lineLength := other.lineLength
        self
    }
}

type ASTVisitor = {
     visitIf(o) up(pNode) -> Boolean
     visitBlock(o) up(pNode) -> Boolean
     visitMatchCase(o) up(pNode) -> Boolean
     visitCatchCase(o) up(pNode) -> Boolean
     visitMethodType(o) up(pNode) -> Boolean
     visitSignaturePart(o) up(pNode) -> Boolean
     visitTypeLiteral(o) up(pNode) -> Boolean
     visitTypeDec(o) up(pNode) -> Boolean
     visitMethod(o) up(pNode) -> Boolean
     visitCall(o) up(pNode) -> Boolean
     visitClass(o) up(pNode) -> Boolean
     visitObject(o) up(pNode) -> Boolean
     visitArray(o) up(pNode) -> Boolean
     visitMember(o) up(pNode) -> Boolean
     visitGeneric(o) up(pNode) -> Boolean
     visitIdentifier(o) up(pNode) -> Boolean
     visitOctets(o) up(pNode) -> Boolean
     visitString(o) up(pNode) -> Boolean
     visitNum(o) up(pNode) -> Boolean
     visitOp(o) up(pNode) -> Boolean
     visitIndex(o) up(pNode) -> Boolean 
     visitBind(o) up(pNode) -> Boolean
     visitDefDec(o) up(pNode) -> Boolean
     visitVarDec(o) up(pNode) -> Boolean
     visitImport(o) up(pNode) -> Boolean
     visitReturn(o) up(pNode) -> Boolean
     visitInherits(o) up(pNode) -> Boolean
     visitDialect(o) up(pNode) -> Boolean
}
factory method baseVisitor -> ASTVisitor {
    method visitIf(o) up(pNode) { visitIf(o) }
    method visitBlock(o) up(pNode) { visitBlock(o) }
    method visitMatchCase(o) up(pNode) { visitMatchCase(o) }
    method visitCatchCase(o) up(pNode) { visitCatchCase(o) }
    method visitMethodType(o) up(pNode) { visitMethodType(o) }
    method visitSignaturePart(o) up(pNode) { visitSignaturePart(o) }
    method visitTypeDec(o) up(pNode) { visitTypeDec(o) }
    method visitTypeLiteral(o) up(pNode) { visitTypeLiteral(o) }
    method visitMethod(o) up(pNode) { visitMethod(o) }
    method visitCall(o) up(pNode) { visitCall(o) }
    method visitClass(o) up(pNode) { visitClass(o) }
    method visitObject(o) up(pNode) { visitObject(o) }
    method visitArray(o) up(pNode) { visitArray(o) }
    method visitMember(o) up(pNode) { visitMember(o) }
    method visitGeneric(o) up(pNode) { visitGeneric(o) }
    method visitIdentifier(o) up(pNode) { visitIdentifier(o) }
    method visitOctets(o) up(pNode) { visitOctets(o) }
    method visitString(o) up(pNode) { visitString(o) }
    method visitNum(o) up(pNode) { visitNum(o) }
    method visitOp(o) up(pNode) { visitOp(o) }
    method visitIndex(o) up(pNode) { visitIndex(o) }
    method visitBind(o) up(pNode) { visitBind(o) }
    method visitDefDec(o) up(pNode) { visitDefDec(o) }
    method visitVarDec(o) up(pNode) { visitVarDec(o) }
    method visitImport(o) up(pNode) { visitImport(o) }
    method visitReturn(o) up(pNode) { visitReturn(o) }
    method visitInherits(o) up(pNode) { visitInherits(o) }
    method visitDialect(o) up(pNode) { visitDialect(o) }

    method visitIf(o) -> Boolean { true }
    method visitBlock(o) -> Boolean { true }
    method visitMatchCase(o) -> Boolean { true }
    method visitCatchCase(o) -> Boolean { true }
    method visitMethodType(o) -> Boolean { true }
    method visitSignaturePart(o) -> Boolean { true }
    method visitTypeDec(o) -> Boolean { true }
    method visitTypeLiteral(o) -> Boolean { true }
    method visitMethod(o) -> Boolean { true }
    method visitCall(o) -> Boolean { true }
    method visitClass(o) -> Boolean { true }
    method visitObject(o) -> Boolean { true }
    method visitArray(o) -> Boolean { true }
    method visitMember(o) -> Boolean { true }
    method visitGeneric(o) -> Boolean { true }
    method visitIdentifier(o) -> Boolean { true }
    method visitOctets(o) -> Boolean { true }
    method visitString(o) -> Boolean { true }
    method visitNum(o) -> Boolean { true }
    method visitOp(o) -> Boolean { true }
    method visitIndex(o) -> Boolean { true }
    method visitBind(o) -> Boolean { true }
    method visitDefDec(o) -> Boolean { true }
    method visitVarDec(o) -> Boolean { true }
    method visitImport(o) -> Boolean { true }
    method visitReturn(o) -> Boolean { true }
    method visitInherits(o) -> Boolean { true }
    method visitDialect(o) -> Boolean { true }
}

factory method addParentVisitor -> ASTVisitor {
    method visitIdentifier(o) up(pNode) { o.parent := pNode; true }
    method visitMethod(o) up(pNode) { o.parent := pNode; true }
    method visitBlock(o) up(pNode) { o.parent := pNode; true }
    method visitClass(o) up(pNode) { o.parent := pNode; true }
    method visitObject(o) up(pNode) { o.parent := pNode; true }
    method visitIf(o) up(pNode) { o.parent := pNode; true }
    method visitMatchCase(o) up(pNode) { o.parent := pNode; true }
    method visitCatchCase(o) up(pNode) { o.parent := pNode; true }
    method visitMethodType(o) up(pNode) { o.parent := pNode; true }
    method visitSignaturePart(o) up(pNode) { o.parent := pNode; true }
    method visitTypeDec(o) up(pNode) { o.parent := pNode; true }
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

def patternMarkVisitor = object {
    inherits baseVisitor
    method visitCall(c) up(pNode) {
        c.isPattern := true
        true
    }
}

method findAnnotation(node, annName) {
    for (node.annotations) do {ann->
        if ((ann.kind == "identifier").andAlso {
            ann.value == annName }) then {
            return object {
                inherits true
                def value is public = ann
            }
        }
    }
    false
}
