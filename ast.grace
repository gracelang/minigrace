// #pragma noTypeChecks
import "util" as util

// This module contains classes and pseudo-classes for all the AST nodes used
// in the parser. Because of the limitations of the class syntax, classes that
// need more than one method are written as object literals containing methods.
// Each node has a different signature according to its function, but the
// common interface is given by type ASTNode 
//
// Most nodes also contain a "value" field, with varied type, holding the `main value`
// in the node.  This field is confusing and should be appropriately re-named in
// each case. Some nodes contain other fields for their specific use: while has
// both a value (the condition) and a body, for example.


method listMap(l, b) ancestors(as) is confidential {
    def newList = list.empty
    l.do { nd -> newList.addLast(nd.map(b) ancestors(as)) }
    newList
}
method maybeMap(n, b) ancestors(as) is confidential {
    if (n != false) then {
        n.map(b) ancestors(as)
    } else {
        n
    }
}
method maybeListMap(n, b) ancestors(as) is confidential {
    if (n != false) then {
        listMap(n, b) ancestors(as)
    } else {
        n
    }
}

def ancestorChain = object {
    factory method empty {
        method isEmpty { true }
        method asString { "ancestorChain ▫" }
        method extend(n) { cons(n) onto(self) }
    }
    method with(n) { empty.extend(n) }
    factory method cons(p) onto(as) is confidential {
        method forebears { as }
        method isEmpty { false }
        method parent { p }
        method grandparent { forebears.parent }
        
        method asString {
            var a := self
            var s := "ancestorChain "
            while { a.isEmpty.not } do {
                s := s ++ a.parent ++ "➤"
                a := a.forebears
            }
            s ++ "▫"
        }
        method extend(n) { cons(n) onto(self) }
    }
}

def emptySeq = sequence.empty

type AstNode = type {
    kind -> String 
        // Used for pseudo-instanceof tests.
    register -> String
        // Used in the code generator on to name the resulting object
    line -> Number
        // The source line the node came from
    line:=(ln:Number)
    linePos -> Number
    linePos:=(lp:Number)
    scope -> SymbolTable
        // The symbolTable for names defined in this node and its sub-nodes
    pretty(n:Number) -> String 
        // Pretty-print-string of node at depth n
    comments -> List<AstNode>
        // Comments associated with this node
}

type SymbolTable = Unknown

class baseNode.new {
    // the superclass of all AST nodes
    var register is public := ""
    var line is public := util.linenum
    var linePos is public := util.linepos
    var symbolTable := fakeSymbolTable
    var comments is public := list.empty

    method isAppliedOccurenceOfIdentifier { false }
    method isMatchingBlock { false }
    method isFieldDec { false }
    method isInherits { false }
    method isMember { false }
    method isCall { false }
    method isComment { false }
    method isClass { false }
    method isBind { false }
    method isObject { false }
    method isIdentifier { false }
    method isDialect { false }
    method isImport { false }
    method canInherit {true }
    method returnsObject { false }
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
        self.accept(visitor) from (ancestorChain.empty)
    }
    method scope { symbolTable }

    method scope:=(st) {
        // override this method in subobjects that open a new scope. In such
        // subobjects, and only in such subobjects, there should be a 2-way
        // conection between the node and the symbol table that defines its scope.
        symbolTable := st
    }
    method declarationKindWithAncestors(as) { self.kind }     
        // the kind of identifiers defined within me
    method shallowCopyFieldsFrom(other) {
        register := other.register
        line := other.line
        linePos := other.linePos
        scope := other.scope
        self
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        if ((scope.node == self).andAlso{util.target == "symbols"}) then {
            "{line}:{linePos} {self.kind}\n{spc}Symbols({scope.variety}): {scope}{scope.elementScopesAsString}"
        } elseif {scope.variety == "fake"} then {
            "{line}:{linePos} {self.kind}"
        } else {
            "{line}:{linePos} {self.kind} {scope.asDebugString}"
        }
    }
    method deepCopy {
        self.map { each -> each } ancestors(ancestorChain.empty)
    }
    method enclosingObject {
        def obj = scope.enclosingObjectScope.node
        util.log 20 verbose "object enclosing {self} is {obj}"
        obj
    }
    method addComment(cmtNode) {
        self.comments.push(cmtNode)
    }
    method addComments(cmtNodeList) {
        self.comments := self.comments ++ cmtNodeList
    }
}

def nullNode is public = object {
    inherits baseNode.new
    def kind is public = "null"
    method toGrace(depth) {
        "// null"
    }
}

def fakeSymbolTable = object {
    var node is public := nullNode
    method asString { "fake Symbol Table" }
    method addNode (n) as (kind) {
        ProgrammingError.raise "fakeSymbolTable(on node {node}).addNode({n}) as \"{kind}\" requested"
    }
    method thatDefines (name) ifNone (action) {
        ProgrammingError.raise "fakeSymbolTable.thatDefines({name})."
    }
    method enclosingObjectScope {
        ProgrammingError.raise "fakeSymbolTable.enclosingObjectScope on node {node}"
    }
    method variety { "fake" }
}

class ifNode.new(cond, thenblock', elseblock') {
    inherits baseNode.new
    def kind is public = "if"
    var value is public := cond
    var thenblock is public := thenblock'
    var elseblock is public := elseblock'
    var handledIdentifiers is public := false
    method accept(visitor : ASTVisitor) from(as) {
        if (visitor.visitIf(self) up(as)) then {
            def newChain = as.extend(self)
            value.accept(visitor) from(newChain)
            thenblock.accept(visitor) from(newChain)
            elseblock.accept(visitor) from(newChain)
        }
    }
    method map(blk) ancestors(as) {
        var n := shallowCopy
        def newChain = as.extend(n)
        n.value := value.map(blk) ancestors(newChain)
        n.thenblock := thenblock.map(blk) ancestors(newChain)
        n.elseblock := elseblock.map(blk) ancestors(newChain)
        blk.apply(n, as)
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
    method shallowCopy {
        ifNode.new(nullNode, nullNode, nullNode).shallowCopyFieldsFrom(self)
    }
    method shallowCopyFieldsFrom(other) {
        super.shallowCopyFieldsFrom(other)
        handledIdentifiers := other.handledIdentifiers
        self
    }
}
class blockNode.new(params', body') {
    inherits baseNode.new
    def kind is public = "block"
    def value is public = "block"
    var params is public := params'
    var body is public := body'
    def selfclosure is public = true
    var matchingPattern is public := false
    var extraRuntimeData is public := false
    for (params') do {p->
        p.accept(patternMarkVisitor) from(ancestorChain.with(self))
    }
    method scope:=(st) {
        // sets up the 2-way conection between this node
        // and the synmol table that defines the scope that I open.
        symbolTable := st
        st.node := self
    }
    method declarationKindWithAncestors(as) {
        "parameter"
    }
    method isMatchingBlock { params.size == 1 }
    method returnsObject {
        body.isEmpty.not.andAlso { body.last.returnsObject }
    }
    method returnedObjectScope {
        // precondition: returnsObject
        body.last.returnedObjectScope
    }
    method parametersDo(b) {
        params.do(b)
    }
    method accept(visitor : ASTVisitor) from(as) {
        if (visitor.visitBlock(self) up(as)) then {
            def newChain = as.extend(self)
            for (self.params) do { mx ->
                mx.accept(visitor) from(newChain)
            }
            for (self.body) do { mx ->
                mx.accept(visitor) from(newChain)
            }
            if (self.matchingPattern != false) then {
                self.matchingPattern.accept(visitor) from(newChain)
            }
        }
    }
    method map(blk) ancestors(as) {
        var n := shallowCopy
        def newChain = as.extend(n)
        n.params := listMap(params, blk) ancestors(newChain)
        n.body := listMap(body, blk) ancestors(newChain)
        n.matchingPattern := maybeMap(matchingPattern, blk) ancestors(newChain)
        blk.apply(n, as)
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
    method shallowCopy {
        blockNode.new(params, body).shallowCopyFieldsFrom(self)
    }
    method shallowCopyFieldsFrom(other) {
        super.shallowCopyFieldsFrom(other)
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

    method accept(visitor : ASTVisitor) from(as) {
        if (visitor.visitCatchCase(self) up(as)) then {
            def newChain = as.extend(self)
            self.value.accept(visitor) from(newChain)
            for (self.cases) do { mx ->
                mx.accept(visitor) from(newChain)
            }
            if (self.finally != false) then {
                self.finally.accept(visitor) from(newChain)
            }
        }
    }
    method map(blk) ancestors(as) {
        var n := shallowCopy
        def newChain = as.extend(n)
        n.value := value.map(blk) ancestors(newChain)
        n.cases := listMap(cases, blk) ancestors(newChain)
        n.finally := maybeMap(finally, blk) ancestors(newChain)
        blk.apply(n, as)
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := "{super.pretty(depth)}\n"
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
    method shallowCopy {
        catchCaseNode.new(nullNode, emptySeq, false).shallowCopyFieldsFrom(self)
    }
}
class matchCaseNode.new(matchee', cases', elsecase') {
    inherits baseNode.new
    def kind is public = "matchcase"
    var value is public := matchee'
    var cases is public := cases'
    var elsecase is public := elsecase'
    method matchee { value }
    method accept(visitor : ASTVisitor) from(as) {
        if (visitor.visitMatchCase(self) up(as)) then {
            def newChain = as.extend(self)
            self.value.accept(visitor) from(newChain)
            for (self.cases) do { mx ->
                mx.accept(visitor) from(newChain)
            }
            if (self.elsecase != false) then {
                self.elsecase.accept(visitor) from(newChain)
            }
        }
    }
    method map(blk) ancestors(as) {
        var n := shallowCopy
        def newChain = as.extend(n)
        n.value := value.map(blk) ancestors(newChain)
        n.cases := listMap(cases, blk) ancestors(newChain)
        n.elsecase := maybeMap(elsecase, blk) ancestors(newChain)
        blk.apply(n, as)
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
    method shallowCopy {
        matchCaseNode.new(nullNode, emptySeq, false).shallowCopyFieldsFrom(self)
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
    inherits baseNode.new
    def kind is public = "methodtype"
    var value is public := name'
    var signature is public := signature'
    var rtype is public := rtype'
    var generics is public := false
    def nameString:String is public = value
    method asString { "MethodType {value} -> {rtype}" }

    method parametersDo(b) {
        signature.do { part -> 
            part.params.do { each -> b.apply(each) }
        }
    }
    method scope:=(st) {
        // sets up the 2-way conection between this node
        // and the symbol table that defines the scope that I open.
        symbolTable := st
        st.node := self
    }
    method declarationKindWithAncestors(as) { "typedec" }
    method accept(visitor : ASTVisitor) from(as) {
        if (visitor.visitMethodType(self) up(as)) then {
            def newChain = as.extend(self)
            if (false != generics) then {
                generics.accept(visitor) from(newChain)
            }
            if (rtype != false) then {
                rtype.accept(visitor) from(newChain)
            }
            for (signature) do { part ->
                part.accept(visitor) from(newChain)
            }
        }
    }
    method map(blk) ancestors(as) {
        var n := shallowCopy
        def newChain = as.extend(n)
        n.rtype := maybeMap(rtype, blk) ancestors(newChain)
        n.signature := listMap(signature, blk) ancestors(newChain)
        n.generics := maybeMap(generics, blk) ancestors(newChain)
        blk.apply(n, as)
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
        if (false != generics) then {
            s := "{s}\n{spc}TypeParams:\n" 
            s := s ++ generics.pretty(depth + 2)
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
    method shallowCopy {
        methodTypeNode.new(value, emptySeq, false).shallowCopyFieldsFrom(self)
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
    method name:=(n) {
        value := n
        anonymous := false
    }
    method asString {
        "TypeLiteral: methods = {methods}, types = {types}"
    }
    method accept(visitor : ASTVisitor) from(as) {
        if (visitor.visitTypeLiteral(self) up(as)) then {
            def newChain = as.extend(self)
            for (self.methods) do { each ->
                each.accept(visitor) from(newChain)
            }
            for (self.types) do { each ->
                each.accept(visitor) from(newChain)
            }
        }
    }
    method map(blk) ancestors(as) {
        var n := shallowCopy
        def newChain = as.extend(n)
        n.methods := listMap(methods, blk) ancestors (as)
        n.types := listMap(types, blk) ancestors (as)
        blk.apply(n, as)
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := "{super.pretty(depth)}\n"
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
        s := s ++ " = \{"
        for (self.methods) do { each ->
            s := s ++ "\n" ++ spc ++ "    " ++ each.toGrace(depth + 1)
        }
        for (self.types) do { each ->
            s := s ++ "\n" ++ spc ++ "    " ++ each.toGrace(depth + 1)
        }
        s ++ "\}"
    }
    method shallowCopy {
        typeLiteralNode.new(emptySeq, emptySeq).shallowCopyFieldsFrom(self)
    }
    method shallowCopyFieldsFrom(other) {
        super.shallowCopyFieldsFrom(other)
        nominal := other.nominal
        anonymous := other.anonymous
        value := other.value
        self
    }
}

class typeDecNode.new(name', typeValue) {
    inherits baseNode.new
    def kind is public = "typedec"
    var name is public := name'
    var value is public := typeValue
    def nameString:String is public = name.value
    var annotations is public := list.empty
    var generics is public := false

    method scope:=(st) {
        // sets up the 2-way conection between this node
        // and the synmol table that defines the scope that I open.
        symbolTable := st
        st.node := self
    }
    method declarationKindWithAncestors(as) {
        "parameter"
    }
    method isConfidential {
        if (annotations.size == 0) then { return false }
        findAnnotation(self, "confidential")
    }
    method isPublic { isConfidential.not }
    method isWritable { false }
    method isReadable { isPublic }

    method accept(visitor : ASTVisitor) from(as) {
        if (visitor.visitTypeDec(self) up(as)) then {
            def newChain = as.extend(self)
            name.accept(visitor) from(newChain)
            if (generics != false) then {
                generics.accept(visitor) from(newChain)
            }
            annotations.do { each -> each.accept(visitor) from(newChain) }
            value.accept(visitor) from(newChain)
        }
    }
    method map(blk) ancestors(as) {
        var n := shallowCopy
        def newChain = as.extend(n)
        n.name := name.map(blk) ancestors(newChain)
        n.generics := maybeMap(generics, blk) ancestors(newChain)
        n.value := value.map(blk) ancestors(newChain)
        n.annotations := listMap(annotations, blk) ancestors(newChain)
        blk.apply(n, as)
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := super.pretty(depth) ++ "\n"
        s := s ++ spc ++ self.name.pretty(depth + 1) ++ "\n"
        if (false != generics) then {
            s := "{s}{spc}Type parameters:\n{generics.pretty(depth + 2)}\n"
        }
        s := s ++ spc ++ "Value:"
        s := s ++ value.pretty(depth+2)
        s := s ++ "\n"
        if (comments.size > 0) then {
            s := s ++ "\n" ++ spc ++ "Comments:"
            for (comments) do {c->
                s := s ++ "\n {c.pretty(depth + 2)}"
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
        s := "type {self.name}"
        if (false != generics) then {
            generics.toGrace(0)
        }
        s ++ " = " ++ value(toGrace(depth + 2))
    }
    method asString { "TypeDec {nameString}" }
    method shallowCopy {
        typeDecNode.new(name, nullNode).shallowCopyFieldsFrom(self)
    }
}

def methodNode = object {
    method new(name, signature, body, dtype) scope(s) {
        def result = new(name, signature, body, dtype)
        result.scope := s
        result
    }
    
    factory method new(name', signature', body', dtype') {
        // Represents a method declaration
        // name' is the name of the method (an identifierNode),
        // signature is a sequence of signatureParts,
        // body is a sequence of statements and declarations,
        // dtype is the declared return type of the method, or false.

        inherits baseNode.new
        def kind is public = "method"
        var value is public := name'
        var signature is public := signature'
        var body is public := body'
        var dtype is public := dtype'
        var varargs is public := false
        var generics is public := false
        var selfclosure is public := false
        def nameString:String is public = value.value
        var annotations is public := list.empty
        var isFresh is public := false      // a method is 'fresh' if it answers a new object

        method scope:=(st) {
            // sets up the 2-way conection between this node
            // and the synmol table that defines the scope that I open.
            symbolTable := st
            st.node := self
        }
        method declarationKindWithAncestors(as) {
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
        method returnsObject {
            body.isEmpty.not.andAlso {body.last.returnsObject}
        }
        method returnedObjectScope {
            // precondition: returnsObject
            body.last.returnedObjectScope
        }
        method accept(visitor : ASTVisitor) from(as) {
            if (visitor.visitMethod(self) up(as)) then {
                def newChain = as.extend(self)
                self.value.accept(visitor) from(newChain)
                if (false != generics) then {
                    generics.accept(visitor) from(newChain)
                }
                for (self.signature) do { part ->
                    for (part.params) do { p ->
                        p.accept(visitor) from(newChain)
                    }
                    if (part.vararg != false) then {
                        part.vararg.accept(visitor) from(newChain)
                    }
                }
                if (dtype != false) then {
                    dtype.accept(visitor) from(newChain)
                }
                for (self.annotations) do { ann ->
                    ann.accept(visitor) from(newChain)
                }
                for (self.body) do { mx ->
                    mx.accept(visitor) from(newChain)
                }
            }
        }
        method map(blk) ancestors(as){
            var n := shallowCopy
            def newChain = as.extend(n)
            n.body := listMap(body, blk) ancestors(newChain)
            n.generics := maybeMap(generics, blk) ancestors(newChain)
            n.signature := listMap(signature, blk) ancestors(newChain)
            n.annotations := listMap(annotations, blk) ancestors(newChain)
            n.dtype := maybeMap(dtype, blk) ancestors(newChain)
            blk.apply(n, as)
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
            if (isFresh) then { s := s ++ spc ++ "Fresh\n" }
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
                generics.do {g->
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
            if (comments.size > 0) then {
                s := "{s}\n{spc}Comments:"
                for (comments) do {c->
                    s := "{s}\n{spc}  {c.pretty(depth + 2)}"
                }
                s := s ++ "\n"
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
                if (firstPart.andAlso{false != generics}) then {
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
        method shallowCopy {
            methodNode.new(value, signature, body, dtype).shallowCopyFieldsFrom(self)
        }
        method shallowCopyFieldsFrom(other) {
            super.shallowCopyFieldsFrom(other)
            isFresh := other.isFresh
            selfclosure := other.selfclosure
            self
        }
    }
}
def callNode = object {
    method new(what, with) scope(s) {
        def result = new(what, with)
        result.scope := s
        result
    }
    factory method new(what, with') {
        // requested as callNode.new(target:AstNode, parts:List)
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
        def nameString:String is public = value.nameString
        
        method target { value }
        method isCall { true }
        method returnsObject {
            if (value.isMember.not) then { return false }
            if (value.nameString == "clone") then { return true }
            if (value.nameString == "copy") then { return true }
            return false
        }
        method returnedObjectScope {
            // precondition: returnsObject
            self.scope
        }
        method accept(visitor : ASTVisitor) from(as) {
            if (visitor.visitCall(self) up(as)) then {
                def newChain = as.extend(self)
                self.value.accept(visitor) from(newChain)
                for (self.with) do { part ->
                    for (part.args) do { arg ->
                        arg.accept(visitor) from(newChain)
                    }
                }
                if (false != generics) then {
                    generics.do { each ->
                        each.accept(visitor) from(newChain)
                    }
                }
            }
        }
        method map(blk) ancestors(as) {
            var n := shallowCopy
            def newChain = as.extend(n)
            n.value := value.map(blk) ancestors(newChain)
            n.with := listMap(with, blk) ancestors(newChain)
            n.generics := maybeListMap(generics, blk) ancestors(newChain)
            blk.apply(n, as)
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
        method shallowCopy {
            callNode.new(value, with).shallowCopyFieldsFrom(self)
        }
        method shallowCopyFieldsFrom(other) {
            super.shallowCopyFieldsFrom(other)
            isPattern := other.isPattern
            self
        }
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
    inherits baseNode.new
    def kind is public = "class"
    var value is public := body'
    var name is public := name'
    var constructor is public := constructor'
    var signature is public := signature'
    var dtype is public := dtype'
    var generics is public := false
    var superclass is public := superclass'
    var annotations is public := list.empty
    def nameString:String is public = name.value

    var data is public := false

    method declarationKindWithAncestors(as) {
        "method"
    }
    method scope:=(st) {
        // sets up the 2-way conection between this node and the
        // symbol table that defines the scope that it opens.
        symbolTable := st
        st.node := self
    }
    method canInherit {true }
    method returnsObject { true }
    method returnedObjectScope { scope }

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
    method accept(visitor : ASTVisitor) from(as) {
        if (visitor.visitClass(self) up(as)) then {
            def newChain = as.extend(self)
            self.name.accept(visitor) from(newChain)
            self.constructor.accept(visitor) from(newChain)
            if (false != generics) then {
                generics.do { each ->
                    each.accept(visitor) from(newChain)
                }
            }
            if (superclass != false) then {
                superclass.accept(visitor) from(newChain)
            }
            for (signature) do { partNode ->
                partNode.accept(visitor) from(newChain)
            }
            if (dtype != false) then {
                dtype.accept(visitor) from(newChain)
            }
            for (annotations) do { ann ->
                ann.accept(visitor) from(newChain)
            }
            for (value) do { each ->
                each.accept(visitor) from(newChain)
            }
        }
    }
    method map(blk) ancestors(as) {
        var n := shallowCopy
        def newChain = as.extend(n)
        n.value := listMap(value, blk) ancestors(newChain)
        n.name := name.map(blk) ancestors(newChain)
        n.signature := listMap(signature, blk) ancestors(newChain)
        n.generics := maybeMap(generics, blk) ancestors(newChain)
        n.annotations := listMap(annotations, blk) ancestors(newChain)
        n.superclass := maybeMap(superclass, blk) ancestors(newChain)
        n.constructor := constructor.map(blk) ancestors(newChain)
        n.dtype := maybeMap(dtype, blk) ancestors(newChain)
        blk.apply(n, as)
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := super.pretty(depth) ++ "\n"
        s := "{s}{spc}Name: {self.name.pretty(0)}"
        if (util.target == "symbols") then {
            s := s ++ "\n{spc}Inner object symbols({scope.variety}): {scope.asString}"
            s := s ++ "\n{spc}Factory method symbols({scope.parent.variety}): {scope.parent.asString}"
            s := s ++ "\n{spc}Outer object symbols({scope.parent.parent.variety}): {scope.parent.parent.asString}"
            s := s ++ "\n{spc}enclosing symbols({scope.parent.parent.parent.variety}): {scope.parent.parent.parent.asDebugString}"
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
        if (generics != false) then {
            s := s ++ "\n" ++ spc ++ "Type Parameters:\n" ++
                generics.pretty(depth + 2)
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
        if (comments.size > 0) then {
            s := s ++ "\n" ++ spc ++ "Comments:"
            for (comments) do {c->
                s := s ++ "\n {c.pretty(depth + 2)}"
            }
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
    method shallowCopy {
        classNode.new(name, emptySeq, emptySeq, false, nullNode, false)
            .shallowCopyFieldsFrom(self)
    }
    method shallowCopyFieldsFrom(other) {
        super.shallowCopyFieldsFrom(other)
        data := other.data
        self
    }
}
def moduleNode = object {
    method body(b) named(n) scope(s) {
        def result = new(b)
        result.classname := n
        result.scope := s
        result
    }
    factory method new(body) {
        inherits objectNode.new(body, false)
        def kind is public = "module"
        method classname { "module" }
        method isModule { true }
        method returnsObject { false }
        method accept(visitor : ASTVisitor) from(as) {
            if (visitor.visitModule(self) up(as)) then {
                def newChain = as.extend(self)
                if (self.superclass != false) then {
                    self.superclass.accept(visitor) from(newChain)
                }
                for (self.value) do { x ->
                    x.accept(visitor) from(newChain)
                }
            }
        }
        method shallowCopy {
            moduleNode.new(emptySeq).shallowCopyFieldsFrom(self)
        }
    }
}
def objectNode = object {
    method body(b) named(n) scope(s) {
        def result = new(b, false)
        result.classname := n
        result.scope := s
        result
    }
    method body(b) named(n) {
        body(b) named(n) scope(fakeSymbolTable)
    }
    factory method new(body, superclass') {
        // TODO  remove superclass as a parameter
        inherits baseNode.new
        def kind is public = "object"
        var value is public := body
        var superclass is public := superclass'
        var classname is public := "object"
        var data is public := false

        method scope:=(st) {
            // sets up the 2-way conection between this node
            // and the symbol table that defines the scope that I open.
            symbolTable := st
            st.node := self
        }
        method returnsObject { true }
        method returnedObjectScope { scope }
        method canInherit {true }
        method isObject { true }
        method accept(visitor : ASTVisitor) from(as) {
            if (visitor.visitObject(self) up(as)) then {
                def newChain = as.extend(self)
                if (self.superclass != false) then {
                    self.superclass.accept(visitor) from(newChain)
                }
                for (self.value) do { x ->
                    x.accept(visitor) from(newChain)
                }
            }
        }
        method nameString { 
            if (classname == "object") then {
                "object_on_line_{line}"
            } else {
                classname
            }
        }
        method map(blk) ancestors(as) {
            var n := shallowCopy
            def newChain = as.extend(n)
            n.value := listMap(value, blk) ancestors(newChain)
            n.superclass := maybeMap(superclass, blk) ancestors(newChain)
            blk.apply(n, as)
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
        method shallowCopy {
            objectNode.new(emptySeq, false).shallowCopyFieldsFrom(self)
        }
        method shallowCopyFieldsFrom(other) {
            super.shallowCopyFieldsFrom(other)
            data := other.data
            classname := other.classname
            self
        }
        method asString {
            "object {nameString}"
        }
    }
}
class arrayNode.new(values) {
    inherits baseNode.new
    def kind is public = "array"
    var value is public := values
    method accept(visitor : ASTVisitor) from(as) {
        if (visitor.visitArray(self) up(as)) then {
            def newChain = as.extend(self)
            for (self.value) do { ax ->
                ax.accept(visitor) from(newChain)
            }
        }
    }
    method map(blk) ancestors(as) {
        var n := shallowCopy
        def newChain = as.extend(n)
        n.value := listMap(value, blk) ancestors(newChain)
        blk.apply(n, as)
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
    method shallowCopy {
        arrayNode.new(emptySeq).shallowCopyFieldsFrom(self)
    }
}
def memberNode = object {
    method new(request, receiver) scope(s) {
        def result = new(request, receiver)
        result.scope := s
        result
    }
    factory method new(request, receiver) {
        // Represents a dotted request ‹receiver›.‹request›
        inherits baseNode.new
        def kind is public = "member"
        var value is public := request  // NB: value is a String, not an Identifier
        var in is public := receiver
        var generics is public := false

        method target { in }
        method nameString { value }
        method isMember { true }
        method accept(visitor : ASTVisitor) from(as) {
            if (visitor.visitMember(self) up(as)) then {
                def newChain = as.extend(self)
                if (generics != false) then {
                    generics.do { each -> each.accept(visitor) from(newChain) }
                }
                in.accept(visitor) from(newChain)
            }
        }
        method map(blk) ancestors(as) {
            var n := shallowCopy
            def newChain = as.extend(n)
            n.in := in.map(blk) ancestors(newChain)
            n.generics := maybeListMap(generics, blk) ancestors(newChain)
            blk.apply(n, as)
        }
        method pretty(depth) {
            var spc := ""
            for (0..depth) do { i ->
                spc := spc ++ "  "
            }
            var s := "{super.pretty(depth)}‹" ++ self.value ++ "›\n"
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
        method asString { "{in}.{value}" }
        method asIdentifier {
            // make and return an identifiderNode for my request
            def resultNode = identifierNode.new(value, false)
            resultNode.inRequest := true
            resultNode.line := line
            resultNode.linePos := linePos
            return resultNode
        }
        method shallowCopy {
            memberNode.new(value, nullNode).shallowCopyFieldsFrom(self)
        }
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
    method accept(visitor : ASTVisitor) from(as) {
        if (visitor.visitGeneric(self) up(as)) then {
            def newChain = as.extend(self)
            self.value.accept(visitor) from(newChain)
            for (self.params) do { p ->
                p.accept(visitor) from(newChain)
            }
        }
    }
    method map(blk) ancestors(as) {
        var n := shallowCopy
        def newChain = as.extend(n)
        n.value := value.map(blk) ancestors(newChain)
        n.params := listMap(params, blk) ancestors(newChain)
        blk.apply(n, as)
    }
    method pretty(depth) {
        var s := "{super.pretty(depth)}‹{self.value.value}›<"
        for (self.params.indices) do { i ->
            s := s ++ self.params[i].pretty(depth+2)
            if (i < self.params.size) then {
                s := s ++ ", "
            }
        }
        s := s ++ ">"
        s

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
    method shallowCopy {
        genericNode.new(value, emptySeq).shallowCopyFieldsFrom(self)
    }
}

class typeParametersNode.new(params') {
    inherits baseNode.new
    def kind is public = "typeparams"
    var params is public := params'
    method asString { 
        var s := "<"
        params.do { each -> s := "{s}{each}" } separatedBy { s := s ++ ", " }
        s ++ ">"
    }
    method declarationKindWithAncestors(as) {
        "typeparam"
    }
    method accept(visitor : ASTVisitor) from(as) {
        if (visitor.visitTypeParameters(self) up(as)) then {
            def newChain = as.extend(self)
            params.do { p ->
                p.accept(visitor) from(newChain)
            }
        }
    }
    method do(blk) {
        params.do(blk)
    }
    method size { params.size }
    method map(blk) ancestors(as) {
        var n := shallowCopy
        def newChain = as.extend(n)
        n.params := listMap(params, blk) ancestors(newChain)
        blk.apply(n, as)
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        spc ++ super.pretty(depth) ++ self.asString
    }
    method toGrace(depth : Number) -> String {
        self.asString
    }
    method shallowCopy {
        typeParametersNode.new(emptySeq).shallowCopyFieldsFrom(self)
    }
}
def identifierNode = object {

    method new(name, dtype) scope(s) {
        def result = new(name, dtype)
        result.scope := s
        result
    }

    factory method new(name, dtype') {
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
        
        method isIdentifier { true }

        method isAppliedOccurenceOfIdentifier {
            if (wildcard) then { 
                false 
            } else {
                isBindingOccurrence.not
            }
        }
        method declarationKindWithAncestors(as) {
            as.parent.declarationKindWithAncestors(as)
        }
        method inTypePositionWithAncestors(as) {
            // am I used by my parent node as a type?
            // This is a hack, used as a subsitute for having information in the .gct
            // telling us which identifiers represent types
            if (as.isEmpty) then { return false }
            as.parent.usesAsType(self)
        }
        method usesAsType(aNode) {
            aNode == dtype
        }
        method accept(visitor : ASTVisitor) from(as) {
            if (visitor.visitIdentifier(self) up(as)) then {
                def newChain = as.extend(self)
                if (self.dtype != false) then {
                    self.dtype.accept(visitor) from(newChain)
                }
            }
        }
        method map(blk) ancestors(as) {
            var n := shallowCopy
            def newChain = as.extend(n)
            n.dtype := maybeMap(dtype, blk) ancestors(newChain)
            blk.apply(n, as)
        }
        method pretty(depth) {
            var spc := ""
            for (0..depth) do { i ->
                spc := spc ++ "  "
            }
            var s := super.pretty(depth)
            if ( wildcard ) then {
                s := s ++ " Wildcard"
            } elseif { isBindingOccurrence } then {
                s := s ++ "Binding‹{value}›"
            } else {
                s := s ++ "‹{value}›"
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
            if (isBindingOccurrence) then {
                "IdentifierBinding‹{value}›"
            } else { 
                "Identifier‹{value}›"
            }
        }
        method shallowCopy {
            identifierNode.new(value, false).shallowCopyFieldsFrom(self)
        }
        method shallowCopyFieldsFrom(other) {
            super.shallowCopyFieldsFrom(other)
            wildcard := other.wildcard
            isBindingOccurrence := other.isBindingOccurrence
            isDeclaredByParent := other.isDeclaredByParent
            isAssigned := other.isAssigned
            inRequest := other.inRequest
            self
        }
    }
}

def typeType is public = identifierNode.new("Type", false)
def unknownType is public = identifierNode.new("Unknown", typeType)

def stringNode = object {
    method new(v) scope(s) {
        def result = new(v)
        result.scope := s
        result
    }

    factory method new(v) {
        inherits baseNode.new
        def kind is public = "string"
        var value is public := v
        method accept(visitor : ASTVisitor) from(as) {
            visitor.visitString(self) up(as)
        }
        method map(blk) ancestors(as) {
            var n := shallowCopy
            def newChain = as.extend(n)
            blk.apply(n, as)
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
        method shallowCopy {
            stringNode.new(value).shallowCopyFieldsFrom(self)
        }
    }
}
class numNode.new(val) {
    inherits baseNode.new
    def kind is public = "num"
    var value is public := val
    method accept(visitor : ASTVisitor) from(as) {
        visitor.visitNum(self) up(as)
    }
    method map(blk) ancestors(as) {
        var n := shallowCopy
        def newChain = as.extend(n)
        blk.apply(n, as)
    }
    method pretty(depth) {
        "{super.pretty(depth)}({self.value})"
    }
    method toGrace(depth : Number) -> String {
        self.value.asString
    }
    method asString { "Number {value}" }
    method shallowCopy {
        numNode.new(value).shallowCopyFieldsFrom(self)
    }
}
class opNode.new(op, l, r) {
    inherits baseNode.new
    def kind is public = "op"
    def value is public = op     // a String
    var left is public := l
    var right is public := r
    method nameString { value }
    method accept(visitor : ASTVisitor) from(as) {
        if (visitor.visitOp(self) up(as)) then {
            def newChain = as.extend(self)
            self.left.accept(visitor) from(newChain)
            self.right.accept(visitor) from(newChain)
        }
    }
    method map(blk) ancestors(as) {
        var n := shallowCopy
        def newChain = as.extend(n)
        n.left := left.map(blk) ancestors(newChain)
        n.right := right.map(blk) ancestors(newChain)
        blk.apply(n, as)
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := "{super.pretty(depth)}‹" ++ self.value ++ "›"
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
    method asIdentifier {
        // make an identifiderNode with the same properties as me
        def resultNode = identifierNode.new(value, false)
        resultNode.inRequest := true
        resultNode.line := line
        resultNode.linePos := linePos
        return resultNode
    }
    method shallowCopy {
        opNode.new(value, nullNode, nullNode).shallowCopyFieldsFrom(self)
    }
}
class indexNode.new(expr, index') {
    // an expression in square brackets
    inherits baseNode.new
    def kind is public = "index"
    var value is public := expr
    var index is public := index'
    
    method accept(visitor : ASTVisitor) from(as) {
        if (visitor.visitIndex(self) up(as)) then {
            def newChain = as.extend(self)
            self.value.accept(visitor) from(newChain)
            self.index.accept(visitor) from(newChain)
        }
    }
    method map(blk) ancestors(as) {
        var n := shallowCopy
        def newChain = as.extend(n)
        n.value := value.map(blk) ancestors(newChain)
        n.index := index.map(blk) ancestors(newChain)
        blk.apply(n, as)
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
    method shallowCopy {
        indexNode.new(nullNode, nullNode).shallowCopyFieldsFrom(self)
    }
}
class bindNode.new(dest', val') {
    // an assignment, or a request of a setter-method
    inherits baseNode.new
    def kind is public = "bind"
    var dest is public := dest'
    var value is public := val'
    
    method isBind { true }
    method asString { "Bind {value}" }
    method accept(visitor : ASTVisitor) from(as) {
        if (visitor.visitBind(self) up(as)) then {
            def newChain = as.extend(self)
            self.dest.accept(visitor) from(newChain)
            self.value.accept(visitor) from(newChain)
        }
    }
    method map(blk) ancestors(as) {
        var n := shallowCopy
        def newChain = as.extend(n)
        n.dest := dest.map(blk) ancestors(newChain)
        n.value := value.map(blk) ancestors(newChain)
        blk.apply(n, as)
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
    method shallowCopy {
        bindNode.new(dest, value).shallowCopyFieldsFrom(self)
    }
}
def defDecNode = object {
    method new(name', val, dtype') scope(s) {
        def result = new(name', val, dtype')
        result.scope := s
        result
    }

    factory method new(name', val, dtype') {
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
            findAnnotation(self, "readable")
        }
        method isWritable { false }
        method isReadable { isPublic }
    //    method isFieldDec { 
    //        if (parent.kind == "object") then { true }
    //            elseif {parent.kind == "class"} then { true }
    //            else { false }
    //    }
        method returnsObject {
            value.returnsObject
        }
        method returnedObjectScope {
            // precondition: returnsObject
            value.returnedObjectScope
        }
        method usesAsType(aNode) {
            aNode == dtype
        }
        method accept(visitor : ASTVisitor) from(as) {
            if (visitor.visitDefDec(self) up(as)) then {
                def newChain = as.extend(self)
                self.name.accept(visitor) from(newChain)
                if (self.dtype != false) then {
                    self.dtype.accept(visitor) from(newChain)
                }
                for (self.annotations) do { ann ->
                    ann.accept(visitor) from(newChain)
                }
                if (self.value != false) then {
                    self.value.accept(visitor) from(newChain)
                }
            }
        }
        method map(blk) ancestors(as) {
            var n := shallowCopy
            def newChain = as.extend(n)
            n.name := name.map(blk) ancestors(newChain)
            n.value := value.map(blk) ancestors(newChain)
            n.dtype := maybeMap(dtype, blk) ancestors(newChain)
            n.annotations := listMap(annotations, blk) ancestors(newChain)
            blk.apply(n, as)
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
            if (annotations.isEmpty.not) then {
                s := s ++ "\n{spc}Annotations:"
                annotations.do { ann ->
                    s := "{s} {ann.pretty(depth + 2)}"
                }
            }
            if (comments.size > 0) then {
                s := s ++ "\n" ++ spc ++ "Comments:"
                for (comments) do {c->
                    s := s ++ "\n {c.pretty(depth + 2)}"
                }
            }
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
        method shallowCopy {
            defDecNode.new(name, value, dtype).shallowCopyFieldsFrom(self)
        }
        method shallowCopyFieldsFrom(other) {
            super.shallowCopyFieldsFrom(other)
            data := other.data
            startToken := other.startToken
            self
        }
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
//    method isFieldDec { 
//        if (parent.kind == "object") then { true }
//            elseif {parent.kind == "class"} then { true }
//            else { false }
//    }
    method usesAsType(aNode) {
        aNode == dtype
    }
    method accept(visitor : ASTVisitor) from(as) {
        if (visitor.visitVarDec(self) up(as)) then {
            def newChain = as.extend(self)
            self.name.accept(visitor) from(newChain)
            if (self.dtype != false) then {
                self.dtype.accept(visitor) from(newChain)
            }
            for (self.annotations) do { ann ->
                ann.accept(visitor) from(newChain)
            }
            if (self.value != false) then {
                self.value.accept(visitor) from(newChain)
            }
        }
    }
    method map(blk) ancestors(as) {
        var n := shallowCopy
        def newChain = as.extend(n)
        n.name := name.map(blk) ancestors(newChain)
        n.value := maybeMap(value, blk) ancestors(newChain)
        n.dtype := maybeMap(dtype, blk) ancestors(newChain)
        n.annotations := listMap(annotations, blk) ancestors(newChain)
        blk.apply(n, as)
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
        if (comments.size > 0) then {
            s := s ++ "\n" ++ spc ++ "Comments:"
            for (comments) do {c->
                s := s ++ "\n {c.pretty(depth + 2)}"
            }
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
    method shallowCopy {
        varDecNode.new(name, value, dtype).shallowCopyFieldsFrom(self)
    }
}
class importNode.new(path', name', dtype') {
    inherits baseNode.new
    def kind is public = "import"
    var value is public := name'
    var path is public := path'
    var annotations is public := list.empty
    var dtype is public := dtype'
    method isImport { true }
    method name { value }
    method nameString { value.nameString }
    method isPublic {
        // imports, like defs, are confidential by default
        if (annotations.size == 0) then { return false }
        if (findAnnotation(self, "public")) then { return true }
        findAnnotation(self, "readable")
    }
    method moduleName {
        var bnm := ""
        for (path) do {c->
            if (c == "/") then {
                bnm := ""
            } else {
                bnm := bnm ++ c
            }
        }
        bnm
    }
    method isWritable { false }
    method isReadable { isPublic }
    method declarationKindWithAncestors(as) { "defdec" }
    method usesAsType(aNode) {
        aNode == dtype
    }
    method accept(visitor : ASTVisitor) from(as) {
        if (visitor.visitImport(self) up(as)) then {
            def newChain = as.extend(self)
            for (self.annotations) do { ann ->
                ann.accept(visitor) from(newChain)
            }
            self.value.accept(visitor) from(newChain)
            if (self.dtype != false) then {
                self.dtype.accept(visitor) from(newChain)
            }
        }
    }
    method map(blk) ancestors(as) {
        var n := shallowCopy
        def newChain = as.extend(n)
        n.value := value.map(blk) ancestors(newChain)
        n.dtype := maybeMap(dtype, blk) ancestors(newChain)
        n.annotations := listMap(annotations, blk) ancestors(newChain)
        blk.apply(n, as)
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
    method shallowCopy {
        importNode.new(path, nullNode, false).shallowCopyFieldsFrom(self)
    }
}
class dialectNode.new(path') {
    inherits baseNode.new
    def kind is public = "dialect"
    var value is public := path'
    
    method isDialect { true }
    method moduleName {
        var bnm := ""
        for (value) do {c->
            if (c == "/") then {
                bnm := ""
            } else {
                bnm := bnm ++ c
            }
        }
        bnm
    }
    method path {
        value
    }
    method accept(visitor : ASTVisitor) from(as) {
        visitor.visitDialect(self) up(as)
    }
    method map(blk) ancestors(as) {
        var n := shallowCopy
        def newChain = as.extend(n)
        blk.apply(n, as)
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
    method shallowCopy {
        dialectNode.new(value).shallowCopyFieldsFrom(self)
    }
}
class returnNode.new(expr) {
    inherits baseNode.new
    def kind is public = "return"
    var value is public := expr

    method accept(visitor : ASTVisitor) from(as) {
        if (visitor.visitReturn(self) up(as)) then {
            def newChain = as.extend(self)
            self.value.accept(visitor) from(newChain)
        }
    }
    method map(blk) ancestors(as) {
        var n := shallowCopy
        def newChain = as.extend(n)
        n.value := value.map(blk) ancestors(newChain)
        blk.apply(n, as)
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
    method shallowCopy {
        returnNode.new(nullNode).shallowCopyFieldsFrom(self)
    }
}
def inheritsNode = object {
    method new(expr) scope(s) {
        def result = new(expr)
        result.scope := s
        result
    }
    factory method new(expr) {
        inherits baseNode.new
        def kind is public = "inherits"
        var value is public := expr
        var providedNames is public := list.empty
        
        method isInherits { true }
        method inheritsFromMember { value.isMember }
        method inheritsFromCall { value.isCall }
        method accept(visitor : ASTVisitor) from(as) {
            if (visitor.visitInherits(self) up(as)) then {
                def newChain = as.extend(self)
                self.value.accept(visitor) from(newChain)
            }
        }
        method map(blk) ancestors(as) {
            var n := shallowCopy
            def newChain = as.extend(n)
            n.value := value.map(blk) ancestors(newChain)
            blk.apply(n, as)
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
        method shallowCopy {
            inheritsNode.new(nullNode).shallowCopyFieldsFrom(self)
        }
        method shallowCopyFieldsFrom(other) {
            super.shallowCopyFieldsFrom(other)
            providedNames := other.providedNames
            self
        }
    }
}
class blankNode.new {
    inherits baseNode.new
    def kind is public = "blank"
    def value is public = "blank"
    
    method accept(visitor : ASTVisitor) from(as) {
        visitor.visitBlank(self) up(as)
    }
    method map(blk) ancestors(as) {
        var n := shallowCopy
        def newChain = as.extend(n)
        blk.apply(n, as)
    }
    method toGrace(depth : Number) -> String {
        ""
    }
    method shallowCopy {
        blankNode.new.shallowCopyFieldsFrom(self)
    }
}
def signaturePart = object {
    method new(*values) scope(s) {
        var result
        if (values.size == 1) then {
            result := new(values[1])
        } elseif { values.size == 2 } then {
            result := new(values[1], values[2])
        } else {
            ProgrammingError.raise "wrong number of arguments for signaturePart()scope()"
        }
        result.scope := s
        result
    }
    factory method new(*values) {
        //  all parameters are optional
        //     values[1]: this part of the method-name
        //     values[2]: the sequence of paremeters
        //     values[3]: false if there is no variable arity parameter,
        //          otherwise the identifier representing it.

        inherits baseNode.new
        def kind is public = "signaturepart"
        var name is public := ""
        var params is public := list.empty
        var vararg is public := false
        var generics is public := false
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
        method accept(visitor : ASTVisitor) from(as) {
            if (visitor.visitSignaturePart(self) up(as)) then {
                def newChain = as.extend(self)
                params.do { p -> p.accept(visitor) from(newChain) }
                if (false != vararg) then { vararg.accept(visitor) from(newChain) }
                if (false != generics) then {
                    generics.do { g -> g.accept(visitor) from(newChain) }
                }
            }
        }
        method declarationKindWithAncestors(as) { "parameter" }
        method map(blk) ancestors(as) {
            var n := shallowCopy
            def newChain = as.extend(n)
            n.params := listMap(params, blk) ancestors(newChain)
            n.vararg := maybeMap(vararg, blk) ancestors(newChain)
            blk.apply(n, as)
        }
        method pretty(depth) {
            var spc := ""
            for (0..depth) do { i ->
                spc := spc ++ "  "
            }
            var s := "{super.pretty(depth)}: {name}"
            s := "{s}\n{spc}Parameters:"
            for (params) do { p ->
                s := "{s}\n  {spc}{p.pretty(depth + 2)}"
            }
            if (vararg != false) then {
                s := "{s}\n  {spc}Vararg: {vararg.pretty(depth + 1)}"
            }
            s
        }
        method shallowCopy {
            signaturePart.new(name).shallowCopyFieldsFrom(self)
        }
        method shallowCopyFieldsFrom(other) {
            super.shallowCopyFieldsFrom(other)
            lineLength := other.lineLength
            self
        }
        method asString {
            "Part: {name}"
        }
    }
}

def callWithPart = object {
    method new(name, argList) scope (s) {
        def result = new(name, argList)
        result.scope := s
        result
    }
    factory method new(*values) {
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

        method map(blk) ancestors(as) {
            var n := shallowCopy
            def newChain = as.extend(n)
            n.args := listMap(args, blk) ancestors(newChain)
            blk.apply(n, as)
        }
        method pretty(depth) {
            var spc := ""
            for (0..depth) do { i ->
                spc := spc ++ "  "
            }
            var s := "{super.pretty(depth)}: {name}"
            s := "{s}\n    {spc}Args:"
            for (args) do { a ->
                s := "{s}\n    {spc}{a.pretty(depth + 4)}"
            }
            s
        }
        method shallowCopy {
            callWithPart.new(name).shallowCopyFieldsFrom(self)
        }
        method shallowCopyFieldsFrom(other) {
            super.shallowCopyFieldsFrom(other)
            lineLength := other.lineLength
            self
        }
    }
}

def commentNode = object {
    factory method new(val') {
        inherits baseNode.new
        def kind is public = "comment"
        var value:String is public := val'
        var isPartialLine:Boolean is public := false
        method isComment { true }
        method asString { "Comment: {value}" }

        method map(blk) ancestors(as) {
            var n := shallowCopy
            def newChain = as.extend(n)
            blk.apply(n, as)
        }
        method accept(visitor : ASTVisitor) from(as) {
            visitor.visitComment(self) up(as)
        }
        method pretty(depth) {
            "{super.pretty(depth)}({value})"
        }
        method toGrace(depth) {
            "// {value}"
        }
        method shallowCopy {
            commentNode.new(nullNode).shallowCopyFieldsFrom(self)
        }
        method shallowCopyFieldsFrom(other) {
            super.shallowCopyFieldsFrom(other)
            value := other.value
            isPartialLine := other.isPartialLine
            self
        }
    }
}

type ASTVisitor = {
     visitIf(o) up(as) -> Boolean
     visitBlock(o) up(as) -> Boolean
     visitMatchCase(o) up(as) -> Boolean
     visitCatchCase(o) up(as) -> Boolean
     visitMethodType(o) up(as) -> Boolean
     visitSignaturePart(o) up(as) -> Boolean
     visitTypeLiteral(o) up(as) -> Boolean
     visitTypeParameters(o) up(as) -> Boolean
     visitTypeDec(o) up(as) -> Boolean
     visitMethod(o) up(as) -> Boolean
     visitCall(o) up(as) -> Boolean
     visitClass(o) up(as) -> Boolean
     visitObject(o) up(as) -> Boolean
     visitModule(o) up(as) -> Boolean
     visitArray(o) up(as) -> Boolean
     visitMember(o) up(as) -> Boolean
     visitGeneric(o) up(as) -> Boolean
     visitIdentifier(o) up(as) -> Boolean
     visitString(o) up(as) -> Boolean
     visitNum(o) up(as) -> Boolean
     visitOp(o) up(as) -> Boolean
     visitIndex(o) up(as) -> Boolean 
     visitBind(o) up(as) -> Boolean
     visitDefDec(o) up(as) -> Boolean
     visitVarDec(o) up(as) -> Boolean
     visitImport(o) up(as) -> Boolean
     visitReturn(o) up(as) -> Boolean
     visitInherits(o) up(as) -> Boolean
     visitDialect(o) up(as) -> Boolean
     visitBlank(o) up(as) -> Boolean
     visitComment(o) up(as) -> Boolean
}

factory method baseVisitor -> ASTVisitor {
    method visitIf(o) up(as) { visitIf(o) }
    method visitBlock(o) up(as) { visitBlock(o) }
    method visitMatchCase(o) up(as) { visitMatchCase(o) }
    method visitCatchCase(o) up(as) { visitCatchCase(o) }
    method visitMethodType(o) up(as) { visitMethodType(o) }
    method visitSignaturePart(o) up(as) { visitSignaturePart(o) }
    method visitTypeDec(o) up(as) { visitTypeDec(o) }
    method visitTypeLiteral(o) up(as) { visitTypeLiteral(o) }
    method visitTypeParameters(o) up(as) { visitTypeParameters(o) }
    method visitMethod(o) up(as) { visitMethod(o) }
    method visitCall(o) up(as) { visitCall(o) }
    method visitClass(o) up(as) { visitClass(o) }
    method visitObject(o) up(as) { visitObject(o) }
    method visitModule(o) up(as) { visitObject(o) }
    method visitArray(o) up(as) { visitArray(o) }
    method visitMember(o) up(as) { visitMember(o) }
    method visitGeneric(o) up(as) { visitGeneric(o) }
    method visitIdentifier(o) up(as) { visitIdentifier(o) }
    method visitString(o) up(as) { visitString(o) }
    method visitNum(o) up(as) { visitNum(o) }
    method visitOp(o) up(as) { visitOp(o) }
    method visitIndex(o) up(as) { visitIndex(o) }
    method visitBind(o) up(as) { visitBind(o) }
    method visitDefDec(o) up(as) { visitDefDec(o) }
    method visitVarDec(o) up(as) { visitVarDec(o) }
    method visitImport(o) up(as) { visitImport(o) }
    method visitReturn(o) up(as) { visitReturn(o) }
    method visitInherits(o) up(as) { visitInherits(o) }
    method visitDialect(o) up(as) { visitDialect(o) }
    method visitBlank(o) up(as) { visitBlank(o) }
    method visitComment(o) up(as) { visitComment(o) }

    method visitIf(o) -> Boolean { true }
    method visitBlock(o) -> Boolean { true }
    method visitMatchCase(o) -> Boolean { true }
    method visitCatchCase(o) -> Boolean { true }
    method visitMethodType(o) -> Boolean { true }
    method visitSignaturePart(o) -> Boolean { true }
    method visitTypeDec(o) -> Boolean { true }
    method visitTypeLiteral(o) -> Boolean { true }
    method visitTypeParameters(o) -> Boolean { true }
    method visitMethod(o) -> Boolean { true }
    method visitCall(o) -> Boolean { true }
    method visitClass(o) -> Boolean { true }
    method visitObject(o) -> Boolean { true }
    method visitModule(o) -> Boolean { true }
    method visitArray(o) -> Boolean { true }
    method visitMember(o) -> Boolean { true }
    method visitGeneric(o) -> Boolean { true }
    method visitIdentifier(o) -> Boolean { true }
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
    method visitBlank(o) -> Boolean { true }
    method visitComment(o) -> Boolean { true }
    
    method asString { "an AST visitor" }
}

factory method pluggableVisitor(visitation:Block2) -> ASTVisitor {
    // Manufactures a default visitor, given a 2-parameter block.
    // Typically, some of the methods will be overridden.
    // The block will be applied with the AST node as the first argument
    // and the ancestor chain as the second, and should answer true if
    // the visitation is to continue and false if it is to go no deeper.

    method visitIf(o) up(as) { visitation.apply (o, as) }
    method visitBlock(o) up(as) { visitation.apply (o, as) }
    method visitMatchCase(o) up(as) { visitation.apply (o, as) }
    method visitCatchCase(o) up(as) { visitation.apply (o, as) }
    method visitMethodType(o) up(as) { visitation.apply (o, as) }
    method visitSignaturePart(o) up(as) { visitation.apply (o, as) }
    method visitTypeDec(o) up(as) { visitation.apply (o, as) }
    method visitTypeLiteral(o) up(as) { visitation.apply (o, as) }
    method visitMethod(o) up(as) { visitation.apply (o, as) }
    method visitCall(o) up(as) { visitation.apply (o, as) }
    method visitClass(o) up(as) { visitation.apply (o, as) }
    method visitObject(o) up(as) { visitation.apply (o, as) }
    method visitModule(o) up(as) { visitation.apply (o, as) }
    method visitArray(o) up(as) { visitation.apply (o, as) }
    method visitMember(o) up(as) { visitation.apply (o, as) }
    method visitGeneric(o) up(as) { visitation.apply (o, as) }
    method visitIdentifier(o) up(as) { visitation.apply (o, as) }
    method visitString(o) up(as) { visitation.apply (o, as) }
    method visitNum(o) up(as) { visitation.apply (o, as) }
    method visitOp(o) up(as) { visitation.apply (o, as) }
    method visitIndex(o) up(as) { visitation.apply (o, as) }
    method visitBind(o) up(as) { visitation.apply (o, as) }
    method visitDefDec(o) up(as) { visitation.apply (o, as) }
    method visitVarDec(o) up(as) { visitation.apply (o, as) }
    method visitImport(o) up(as) { visitation.apply (o, as) }
    method visitReturn(o) up(as) { visitation.apply (o, as) }
    method visitInherits(o) up(as) { visitation.apply (o, as) }
    method visitDialect(o) up(as) { visitation.apply (o, as) }
    method visitBlank(o) up(as) { visitation.apply (o, as) }
    method visitComment(o) up(as) { visitation.apply (o, as) }
    
    method asString { "a pluggable AST visitor" }
}


def patternMarkVisitor = object {
    inherits baseVisitor
    method visitCall(c) up(as) {
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
