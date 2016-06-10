#pragma ExtendedLineups
import "util" as util
import "identifierKinds" as k

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

def lineLength is public = 80

method listMap(l, b) ancestors(as) is confidential {
    def newList = [ ]
    l.do { nd -> newList.addLast(nd.map(b) ancestors(as)) }
    newList
}
method maybeMap(n, b) ancestors(as) is confidential {
    if (false != n) then {
        n.map(b) ancestors(as)
    } else {
        n
    }
}
method maybeListMap(n, b) ancestors(as) is confidential {
    if (false != n) then {
        listMap(n, b) ancestors(as)
    } else {
        n
    }
}

def ancestorChain = object {
    class empty {
        method isEmpty { true }
        method asString { "ancestorChain ▫" }
        method extend(n) { cons(n) onto(self) }
    }
    method with(n) { empty.extend(n) }
    class cons(p) onto(as) is confidential {
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

def emptySeq = emptySequence

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
    comments -> AstNode
        // Comments associated with this node
}

type SymbolTable = Unknown

class baseNode {
    // the superclass of all AST nodes
    var register is public := ""
    var line is public := util.linenum
    var linePos is public := util.linepos
    var symbolTable := fakeSymbolTable
    var comments is public := false

    method setLine (l) col (c) {
        line := l
        linePos := c
        self
    }
    method setPositionFrom (token) {
        line := token.line
        linePos := token.linePos
        self
    }
    method kind { abstract }
    method ==(other) { self.isMe(other) }       // for usesAsType
    method isAppliedOccurenceOfIdentifier { false }
    method isMatchingBlock { false }
    method isFieldDec { false }
    method isInherits { false }
    method isLegalInTrait { false }
    method isMember { false }
    method isMethod { false }
    method isExecutable { true }
    method isCall { false }
    method isComment { false }
    method isClass { false }    // is a method that returns a fresh object
    method inClass { false }    // object in a syntactic class definiton
    method isTrait { false }    // is a method that returns a trait object
    method inTrait { false }    // object in a syntactic trait definition
    method isBind { false }
    method isBlock { false }
    method isObject { false }
    method isIdentifier { false }
    method isDialect { false }
    method isImport { false }
    method isTypeDec { false }
    method isExternal { false }
    method canInherit { false }
    method returnsObject { false }
    method usesAsType(aNode) { false }
    method hash { line.hash * linePos.hash }
    method asString { "{kind} {nameString}" }
    method nameString { "?" }
    method isWritable { true }
    method isReadable { true }
    method isPublic { true }
    method isConfidential { isPublic.not }
    method decType {
        if (false == self.dtype) then {
            return unknownType
        }
        return self.dtype
    }
    method isSimple { true }  // needs no parens when used as reciever
    method description { kind }
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
        if ((scope.node == self) && {util.target == "symbols"}) then {
            "{line}:{linePos} {description}\n{spc}Symbols({scope.variety}): {scope}{scope.elementScopesAsString}"
        } elseif {scope.variety == "fake"} then {
            "{line}:{linePos} {description}"
        } else {
            "{line}:{linePos} {description} {scope.asDebugString}"
        }
    }
    method deepCopy {
        self.map { each -> each } ancestors(ancestorChain.empty)
    }
    method enclosingObject {
        def obj = scope.enclosingObjectScope.node
        obj
    }
    method addComment(cmtNode) {
        if (false == comments) then {
            comments := cmtNode
        } else {
            comments.extendCommentUsing(cmtNode)
        }
    }
    method addComments(cmtNodeList) {
        cmtNodeList.do { each -> addComment(each) }
    }
    method statementName { kind }
}

def nullNode is public = object {
    inherits baseNode
    def kind is public = "null"
    method toGrace(depth) {
        "// null"
    }
    method asString { "the nullNode" }
    method == (other) { self.isMe(other) }
}

def fakeSymbolTable = object {
    var node is public := nullNode
    method asString { "the fakeSymbolTable" }
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
    method ==(other) { self.isMe(other) }
}

def ifNode is public = object {
  class new(cond, thenblock', elseblock') {
    inherits baseNode
    def kind is public = "if"
    var value is public := cond
    var thenblock is public := thenblock'
    var elseblock is public := elseblock'
    var handledIdentifiers is public := false
    method isSimple { false }  // needs parens when used as reciever
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
        repeat (depth) times {
            spc := spc ++ "    "
        }
        var s := "if ({self.value.toGrace(0)}) then \{"
        for (self.thenblock.body) do { ix ->
            s := s ++ "\n" ++ spc ++ "    " ++ ix.toGrace(depth + 1)
        }
        if (self.elseblock.isntEmpty) then {
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
}
def blockNode is public = object {
  class new(params', body') {
    inherits baseNode
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
    method isBlock { true }
    method isEmpty { body.size == 0 }
    method isntEmpty { body.size > 0 }
    method scope:=(st) {
        // sets up the 2-way conection between this node
        // and the synmol table that defines the scope that I open.
        symbolTable := st
        st.node := self
    }
    method declarationKindWithAncestors(as) { k.parameter }
    method isMatchingBlock { params.size == 1 }
    method returnsObject {
        (body.size > 0) && { body.last.returnsObject }
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
            if (false != self.matchingPattern) then {
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
        if (false != self.matchingPattern) then {
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
                var p := self.params.at(i)
                if (false != self.matchingPattern) then {
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
}
def tryCatchNode is public = object {
  class new(block, cases', finally') {
    inherits baseNode
    def kind is public = "trycatch"
    var value is public := block
    var cases is public := cases'
    var finally is public := finally'
    method isSimple { false }  // needs parens when used as reciever

    method accept(visitor : ASTVisitor) from(as) {
        if (visitor.visitTryCatch(self) up(as)) then {
            def newChain = as.extend(self)
            self.value.accept(visitor) from(newChain)
            for (self.cases) do { mx ->
                mx.accept(visitor) from(newChain)
            }
            if (false != self.finally) then {
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
        var s := "try " ++ self.value.toGrace(depth + 1) ++ " "
        for (self.cases) do { case ->
            s := s ++ "\n" ++ spc ++ "    " ++ "catch " ++ case.toGrace(depth + 1)
        }
        if (false != self.finally) then {
            s := s ++ "\n" ++ spc ++ "    " ++ "finally " ++ self.finally.toGrace(depth + 1)
        }
        s
    }
    method shallowCopy {
        tryCatchNode.new(nullNode, emptySeq, false).shallowCopyFieldsFrom(self)
    }
  }
}
def matchCaseNode is public = object {
  class new(matchee', cases', elsecase') {
    inherits baseNode
    def kind is public = "matchcase"
    var value is public := matchee'
    var cases is public := cases'
    var elsecase is public := elsecase'
    method isSimple { false }  // needs parens when used as reciever
    method matchee { value }
    method accept(visitor : ASTVisitor) from(as) {
        if (visitor.visitMatchCase(self) up(as)) then {
            def newChain = as.extend(self)
            self.value.accept(visitor) from(newChain)
            for (self.cases) do { mx ->
                mx.accept(visitor) from(newChain)
            }
            if (false != self.elsecase) then {
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
        if (false != self.elsecase) then {
            s := s ++ "\n" ++ spc ++ "    " ++ "else " ++ self.elsecase.toGrace(depth + 2)
        }
        s
    }
    method shallowCopy {
        matchCaseNode.new(nullNode, emptySeq, false).shallowCopyFieldsFrom(self)
    }
  }
}
def methodTypeNode is public = object {
  class new(name', signature', rtype') {
    // Represents the signature of a method in a type literal
    // signature is an Iterable of callWithPart objects

    inherits baseNode
    def kind is public = "methodtype"
    var value is public := name'
    var signature is public := signature'
    var rtype is public := rtype'
    var typeParams is public := false
    def nameString:String is public = value

    method isExecutable { false }
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
    method declarationKindWithAncestors(as) { k.typedec }
    method accept(visitor : ASTVisitor) from(as) {
        if (visitor.visitMethodType(self) up(as)) then {
            def newChain = as.extend(self)
            if (false != typeParams) then {
                typeParams.accept(visitor) from(newChain)
            }
            if (false != rtype) then {
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
        n.typeParams := maybeMap(typeParams, blk) ancestors(newChain)
        blk.apply(n, as)
    }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        var s := super.pretty(depth) ++ "\n"
        s := "{s}{spc}Name: {value}\n"
        if (false != rtype) then {
            s := "{s}{spc}Returns:\n  {spc}{rtype.pretty(depth + 2)}"
        }
        if (false != typeParams) then {
            s := "{s}\n{spc}TypeParams:\n"
            s := s ++ typeParams.pretty(depth + 2)
        }
        s := "{s}\n{spc}Signature:"
        for (signature) do { part ->
            s := "{s}\n  {spc}{part.pretty(depth + 2)}"
        }
        s
    }
    method toGrace(depth : Number) -> String {
        var s := ""
        var firstPart := true
        for (self.signature) do { part ->
            s := s ++ part.name
            if (firstPart) then {
                firstPart := false
                if (false != typeParams) then {
                    typeParams.toGrace(depth + 1)
                }
            }
            if (part.params.size > 0) then {
                s := s ++ "("
                for (part.params.indices) do { pnr ->
                    var p := part.params.at(pnr)
                    s := s ++ p.toGrace(depth + 1)
                    if (pnr < part.params.size) then {
                        s := s ++ ", "
                    }
                }
                s := s ++ ")"
            }
        }
        if (false != self.rtype) then {
            s := s ++ " -> " ++ self.rtype.toGrace(depth + 1)
        }
        s
    }
    method shallowCopy {
        methodTypeNode.new(value, emptySeq, false).shallowCopyFieldsFrom(self)
    }
  }
}
def typeLiteralNode is public = object {
  class new(methods', types') {
    inherits baseNode
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
        "typeliteral: methods = {methods}, types = {types}"
    }
    method declarationKindWithAncestors(as) { k.typedec }
    method isExecutable { false }

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
}

def typeDecNode is public = object {
  class new(name', typeValue) {
    inherits baseNode
    def kind is public = "typedec"
    var name is public := name'
    var value is public := typeValue
    def nameString:String is public = name.value
    var annotations is public := [ ]
    var typeParams is public := false

    method isLegalInTrait { true }
    method isTypeDec { true }
    method scope:=(st) {
        // sets up the 2-way conection between this node
        // and the synmol table that defines the scope that I open.
        symbolTable := st
        st.node := self
    }

    method isExecutable { true }
    method declarationKindWithAncestors(as) { k.typeparam }
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
            if (false != typeParams) then {
                typeParams.accept(visitor) from(newChain)
            }
            annotations.do { each -> each.accept(visitor) from(newChain) }
            value.accept(visitor) from(newChain)
        }
    }
    method map(blk) ancestors(as) {
        var n := shallowCopy
        def newChain = as.extend(n)
        n.name := name.map(blk) ancestors(newChain)
        n.typeParams := maybeMap(typeParams, blk) ancestors(newChain)
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
        if (false != typeParams) then {
            s := "{s}{spc}Type parameters:\n{typeParams.pretty(depth + 2)}\n"
        }
        s := s ++ spc ++ "Value:"
        s := s ++ value.pretty(depth+2)
        s := s ++ "\n"
        if (false != comments) then {
            s := s ++ comments.pretty(depth+2)
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
        if (false != typeParams) then {
            typeParams.toGrace(0)
        }
        s ++ " = " ++ value.toGrace(depth + 2)
    }
    method shallowCopy {
        typeDecNode.new(name, nullNode).shallowCopyFieldsFrom(self)
    }
  }
}

def methodNode = object {
    method new(name, signature, body, dtype) scope(s) {
        def result = new(name, signature, body, dtype)
        result.scope := s
        result
    }

    class new(name', signature', body', dtype') {
        // Represents a method declaration
        // name' is the name of the method (an identifierNode),
        // signature is a sequence of signatureParts,
        // body is a sequence of statements and declarations,
        // dtype is the declared return type of the method, or false.

        inherits baseNode
        def kind is public = "method"
        var signature is public := signature'
        var body is public := body'
        var dtype is public := dtype'
        var typeParams is public := false
        var selfclosure is public := false
        var annotations is public := [ ]
        var isFresh is public := false      // a method is 'fresh' if it answers a new object
        var usesClassSyntax is public := false

        method nameString {
            signature.fold { acc, each -> acc ++ each.nameString }
                startingWith ""
        }
        method value {
            def id = identifierNode.new(nameString, false)
            id.line := signature.first.line
            id.linePos := signature.first.linePos
            id.isBindingOccurrence := true
            id
        }
        method canonicalName {
            signature.fold { acc, each -> acc ++ each.canonicalName }
                startingWith ""
        }
        method isMethod { true }
        method isExecutable { false }
        method isLegalInTrait { true }
        method isClass { isFresh || usesClassSyntax }
        method isTrait {
            if (isFresh) then {
                body.last.isTrait
            } else {
                false
            }
        }
        method needsArgChecks {
            signature.do { part ->
                part.params.do { p ->
                    if ((false != p.dtype) && {
                            p.dtype.nameString != "Unknown" }) then {
                        return true
                    }
                }
            }
            return false
        }
        method scope:=(st) {
            // sets up the 2-way conection between this node
            // and the synmol table that defines the scope that I open.
            symbolTable := st
            st.node := self
        }
        method declarationKindWithAncestors(as) { k.parameter }
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
            body.isEmpty.not && {body.last.returnsObject}
        }
        method returnedObjectScope {
            // precondition: returnsObject
            body.last.returnedObjectScope
        }
        method accept(visitor : ASTVisitor) from(as) {
            if (visitor.visitMethod(self) up(as)) then {
                def newChain = as.extend(self)
                self.value.accept(visitor) from(newChain)
                if (false != typeParams) then {
                    typeParams.accept(visitor) from(newChain)
                }
                for (self.signature) do { part ->
                    for (part.params) do { p ->
                        p.accept(visitor) from(newChain)
                    }
                }
                if (false != dtype) then {
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
            n.typeParams := maybeMap(typeParams, blk) ancestors(newChain)
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
            s := s ++ spc ++ "Name: " ++ value.pretty(depth+1) ++ "\n"
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
            }
            s := s ++ "\n"
            if (false != typeParams) then {
                s := "{s}{spc}Generics:"
                typeParams.do {g->
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
            if (false != comments) then {
                s := s ++ comments.pretty(depth+2)
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
                if (firstPart && {false != typeParams}) then {
                    s := s ++ typeParams.toGrace(depth + 1)
                }
                firstPart := false
                if (part.params.size > 0) then {
                    s := s ++ "("
                    for (part.params.indices) do { pnr ->
                        var p := part.params.at(pnr)
                        s := s ++ p.toGrace(depth + 1)
                        if (pnr < part.params.size) then {
                            s := s ++ ", "
                        }
                    }
                    s := s ++ ")"
                }
            }
            if (false != self.dtype) then {
                s := s ++ " -> {self.dtype.toGrace(0)}"
            }
            if (self.annotations.size > 0) then {
                s := s ++ " is "
                s := s ++ self.annotations.fold{ a,b ->
                    if (a != "") then { a ++ ", " } else { "" } ++ b.toGrace(0) }
                        startingWith ""
            }
            s := s ++ " \{"
            if (false != comments) then {
                s := s ++ comments.toGrace(depth + 1)
            }
            for (self.body) do { mx ->
                s := s ++ "\n" ++ spc ++ "    " ++ mx.toGrace(depth + 1)
            }
            s := s ++ "\n" ++ spc ++ "\}"
            s
        }
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
    class new(what, with') {
        // requested as callNode.new(target:AstNode, parts:List)
        // Represents a method request with arguments.
        // The ‹target›.‹methodName› part is in `value`
        // The argument list is in `with`, as a sequence of `callWithPart`s.
        // [with]
        //     object {
        //         name := ""
        //         args := emptySequence
        //     }
        //     object {
        //         name := ""
        //         args := emptySequence
        //     }
        //     ...
        //     object {
        //         ...
        //     }
        inherits baseNode
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
            repeat (depth) times {
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
                if (member.in.isSimple) then {
                    s := "{member.in.toGrace 0}."
                } else {
                    s := "({member.in.toGrace 0})."
                }
            }
            var firstPart := true
            for (self.with) do { part ->
                s := s ++ part.name
                if (firstPart && {false != generics}) then {
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
                        var arg := part.args.at(anr)
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
        method asString { "call {what.pretty(0)}" }
        method shallowCopy {
            callNode.new(value, with).shallowCopyFieldsFrom(self)
        }
        method shallowCopyFieldsFrom(other) {
            super.shallowCopyFieldsFrom(other)
            isPattern := other.isPattern
            self
        }
        method statementName { "request" }
    }
}
def moduleNode = object {
    method body(b) named(n) scope(s) {
        def result = body(b)
        result.name := n
        result.scope := s
        result
    }
    method body(b) named(n) {
        def result = body(b)
        result.name := n
        result
    }
    class body(b) {
        inherits objectNode.new(b, false)
        def kind is public = "module"
        def sourceLines = util.lines
        line := 0       // because the module is always implicit
        linePos := 0
        var imports is public := [ ]

        method isModule { true }
        method returnsObject { false }
        method externalsDo(action) {
            value.do { o ->
                if (o.isExternal) then { action.apply(o) }
            }
        }
        method accept(visitor : ASTVisitor) from(as) {
            if (visitor.visitModule(self) up(as)) then {
                def newChain = as.extend(self)
                if (false != self.superclass) then {
                    self.superclass.accept(visitor) from(newChain)
                }
                for (self.value) do { x ->
                    x.accept(visitor) from(newChain)
                }
            }
        }
        method shallowCopy {
            moduleNode.body(emptySeq).shallowCopyFieldsFrom(self)
        }
        method shallowCopyFieldsFrom(other) {
            super.shallowCopyFieldsFrom(other)
            imports := other.imports
            self
        }
    }
}
def objectNode is public = object {
    method body(b) named(n) scope(s) {
        def result = new(b, false)
        result.name := n
        result.scope := s
        result
    }
    method body(b) named(n) {
        body(b) named(n) scope(fakeSymbolTable)
    }
    class new(b, superclass') {
        inherits baseNode
        def kind is public = "object"
        var value is public := b
        var superclass is public := superclass'
        var usedTraits is public := [ ]
        var name:String is public := "object"
        var inClass is public := false
        var inTrait is public := false
        var myLocalNames := false
        var annotations is public := [ ]

        method description -> String {
            if (isTrait) then {
                "{kind} (trait)"
            } elseif { inClass } then {
                "{kind} (class)"
            } else {
                kind
            }
        }
        method isTrait {
            // answers true if this object qualifies to be a trait, whether
            // or not it was declared with the trait syntax
            if (inTrait) then { return true }
            if (false != superclass) then { return false }
            value.do { each ->
                if (each.isLegalInTrait.not) then { return false }
            }
            return true
        }

        method localNames -> Set<String> {
            // answers the names of all of the methods defined directly in
            // this object.  Inherited names are _not_ included.
            if (false == myLocalNames) then {
                myLocalNames := emptySet
                value.do { node ->
                    if (node.isFieldDec || node.isMethod) then {
                        myLocalNames.add(node.nameString)
                    }
                }
            }
            myLocalNames
        }

        method parentsDo(action) {
            // iterate over my superclass and my used traits

            if (false != superclass) then { action.apply(superclass) }
            usedTraits.do { t -> action.apply(t) }
        }

        method methodsDo(action) {
            // iterate over my method declarations

            value.do { o ->
                if (o.isMethod) then { action.apply(o) }
            }
        }

        method executableComponentsDo(action) {
            // iterate over my executable code, including
            // field declarations (since they may have initializers)
            value.do { o ->
                if (o.isExecutable) then { action.apply(o) }
            }
        }

        method scope:=(st) {
            // sets up the 2-way conection between this node
            // and the symbol table that defines the scope that I open.
            symbolTable := st
            st.node := self
        }
        method body { value }
        method returnsObject { true }
        method returnedObjectScope { scope }
        method canInherit { inTrait.not }   // an object can inherit if not in a trait
        method canUse { true }
        method isObject { true }
        method accept(visitor : ASTVisitor) from(as) {
            if (visitor.visitObject(self) up(as)) then {
                def newChain = as.extend(self)
                if (false != superclass) then {
                    superclass.accept(visitor) from(newChain)
                }
                usedTraits.do { t -> t.accept(visitor) from(newChain) }
                value.do { x -> x.accept(visitor) from(newChain) }
            }
        }
        method nameString {
            if (name == "object") then {
                "object_on_line_{line}"
            } else {
                name
            }
        }
        method map(blk) ancestors(as) {
            var n := shallowCopy
            def newChain = as.extend(n)
            n.value := listMap(value, blk) ancestors(newChain)
            n.superclass := maybeMap(superclass, blk) ancestors(newChain)
            n.usedTraits := listMap(usedTraits, blk) ancestors(newChain)
            blk.apply(n, as)
        }
        method pretty(depth') {
            var depth := depth'
            var spc := ""
            for (0..depth) do { i ->
                spc := spc ++ "  "
            }
            var s := super.pretty(depth)
            s := "{s}\n{spc}Name: {self.name}"
            if (false != self.superclass) then {
                s := s ++ "\n" ++ spc ++ "Superclass: " ++
                        self.superclass.pretty(depth + 1)
            }
            if (usedTraits.isEmpty.not) then {
                s := s ++ "\n" ++ spc ++ "Traits:"
                usedTraits.do { t ->
                    s := "{s}\n{spc}  {t.pretty(depth + 1)}"
                }
            }
            value.do { x ->
                s := s ++ "\n"++ spc ++ x.pretty(depth + 1)
            }
            s
        }
        method toGrace(depth : Number) -> String {
            var spc := ""
            for (0..(depth - 1)) do { i ->
                spc := spc ++ "    "
            }
            var s := "object \{"
            if (inTrait) then { s := s ++ "   // trait" }
            if (inClass) then { s := s ++ "   // class" }
            if (false != superclass) then {
                s := s ++ "\n" ++ superclass.toGrace(depth + 1)
            }
            usedTraits.do { t -> s := s ++ "\n" ++ t.toGrace(depth + 1) }
            value.do { x ->
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
            name := other.name
            value := other.value
            superclass := other.superclass
            usedTraits := other.usedTraits
            inClass := other.inClass
            inTrait := other.inTrait
            annotations := other.annotations
            self
        }
        method asString {
            "object {nameString}"
        }
    }
}
def arrayNode is public = object {
  class new(values) {
    inherits baseNode
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
            s := s ++ self.value.at(i).toGrace(0)
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
}
def memberNode = object {
    method new(request, receiver) scope(s) {
        def result = new(request, receiver)
        result.scope := s
        result
    }
    class new(request, receiver) {
        // Represents a dotted request ‹receiver›.‹request›
        inherits baseNode
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
                if (false != generics) then {
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
            if (false != generics) then {
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
            if (false != generics) then {
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
            if (fakeSymbolTable == scope) then {
                ProgrammingError.raise "asIdentifier requested on {pretty 0} when scope was fake"
            }
            def resultNode = identifierNode.new (value, false) scope (scope)
            resultNode.inRequest := true
            resultNode.line := line
            resultNode.linePos := linePos
            return resultNode
        }
        method shallowCopy {
            memberNode.new(value, nullNode).shallowCopyFieldsFrom(self)
        }
        method statementName { "expression" }
    }
}
def genericNode is public = object {
  class new(base, arguments) {
    // represents an application of a parameterized type to some arguments.
    inherits baseNode
    def kind is public = "generic"
    var value is public := base
        // in a generic application, `value` is the applied type
        // e.g. in List<Number>, value is Identifier‹List›
    var args is public := arguments
    method nameString { value.nameString }
    method asString { toGrace 0 }
    method accept(visitor : ASTVisitor) from(as) {
        if (visitor.visitGeneric(self) up(as)) then {
            def newChain = as.extend(self)
            self.value.accept(visitor) from(newChain)
            for (self.args) do { p ->
                p.accept(visitor) from(newChain)
            }
        }
    }
    method map(blk) ancestors(as) {
        var n := shallowCopy
        def newChain = as.extend(n)
        n.value := value.map(blk) ancestors(newChain)
        n.args := listMap(args, blk) ancestors(newChain)
        blk.apply(n, as)
    }
    method pretty(depth) {
        var s := "{super.pretty(depth)}({value.pretty(depth)})<"
        args.do { each -> s := s ++ each.pretty(depth+2) }
            separatedBy { s := s ++ ", " }
        s ++ ">"
    }
    method toGrace(depth : Number) -> String {
        var s := nameString ++ "<"
        args.do { each -> s := s ++ each.toGrace(0) }
            separatedBy { s := s ++ ", " }
        s ++ ">"
    }
    method shallowCopy {
        genericNode.new(value, args).shallowCopyFieldsFrom(self)
    }
  }
}

def typeParametersNode is public = object {
  class new(params') {
    inherits baseNode
    def kind is public = "typeparams"
    var params is public := params'
    method asString { toGrace 0 }
    method declarationKindWithAncestors(as) { k.typeparam }

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
        var s := spc ++ super.pretty(depth) ++ "<"
        params.do { each -> s := s ++ each.pretty(depth+2) }
            separatedBy { s := s ++ ", " }
        s ++ ">"
    }
    method toGrace(depth:Number) -> String {
        var s := "<"
        params.do { each -> s := "{s}{each.toGrace(depth)}" }
            separatedBy { s := s ++ ", " }
        s ++ ">"
    }
    method shallowCopy {
        typeParametersNode.new(emptySeq).shallowCopyFieldsFrom(self)
    }
  }
}
def identifierNode = object {

    method new(name, dtype) scope(s) {
        def result = new(name, dtype)
        result.scope := s
        result
    }

    class new(name, dtype') {
        inherits baseNode
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
        method quoted { value.quoted }
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
                if (false != self.dtype) then {
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
            if (false != self.dtype) then {
                s := s ++ "\n" ++ spc ++ "  Type: "
                s := s ++ self.dtype.pretty(depth + 2)
            }
            if (false != generics) then {
                s := s ++ "\n" ++ spc ++ "Generics:"
                for (generics) do {g->
                    s := s ++ "\n" ++ spc ++ "  " ++ g.pretty(depth + 2)
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
            if (false != self.dtype) then {
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
                "identifierBinding‹{value}›"
            } else {
                "identifier‹{value}›"
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
        method statementName { "expression" }
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

    class new(v) {
        inherits baseNode
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
            def q = "\""
            q ++ value.quoted ++ q
        }
        method shallowCopy {
            stringNode.new(value).shallowCopyFieldsFrom(self)
        }
        method statementName { "expression" }
    }
}
def numNode is public = object {
    class new(val) {
        inherits baseNode
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
        method asString { "num {value}" }
        method shallowCopy {
            numNode.new(value).shallowCopyFieldsFrom(self)
        }
        method statementName { "expression" }
    }
}
def opNode is public = object {
  class new(op, l, r) {
    inherits baseNode
    def kind is public = "op"
    def value is public = op     // a String
    var left is public := l
    var right is public := r
    method isSimple { false }    // needs parens when used as reciever
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
        def resultNode = identifierNode.new (value, false) scope (scope)
        resultNode.inRequest := true
        resultNode.line := line
        resultNode.linePos := linePos
        return resultNode
    }
    method shallowCopy {
        opNode.new(value, nullNode, nullNode).shallowCopyFieldsFrom(self)
    }
  }
}
def bindNode is public = object {
  class new(dest', val') {
    // an assignment, or a request of a setter-method
    inherits baseNode
    def kind is public = "bind"
    var dest is public := dest'
    var value is public := val'

    method isBind { true }
    method asString { "bind {value}" }
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
    method statementName { "assignment or assigment request" }
  }
}
def defDecNode = object {
    method new(name', val, dtype') scope(s) {
        def result = new(name', val, dtype')
        result.scope := s
        result
    }

    class new(name', val, dtype') {
        inherits baseNode
        def kind is public = "defdec"
        var name is public := name'
        var value is public := val
        var dtype is public := dtype'
        def nameString:String is public = name.nameString
        var annotations is public := [ ]
        var startToken is public := false

        method isPublic {
            // defs are confidential by default
            if (annotations.size == 0) then { return false }
            if (findAnnotation(self, "public")) then { return true }
            findAnnotation(self, "readable")
        }
        method isFieldDec { true }
        method isWritable { false }
        method isReadable { isPublic }

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
        method declarationKindWithAncestors(as) { k.defdec }

        method accept(visitor : ASTVisitor) from(as) {
            if (visitor.visitDefDec(self) up(as)) then {
                def newChain = as.extend(self)
                self.name.accept(visitor) from(newChain)
                if (false != self.dtype) then {
                    self.dtype.accept(visitor) from(newChain)
                }
                for (self.annotations) do { ann ->
                    ann.accept(visitor) from(newChain)
                }
                value.accept(visitor) from(newChain)
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
            if (false != dtype) then {
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
            if (false != comments) then {
                s := s ++ comments.pretty(depth+2)
            }
            s
        }
        method toGrace(depth : Number) -> String {
            var spc := ""
            for (0..(depth - 1)) do { i ->
                spc := spc ++ "    "
            }
            var s := "def {self.name.toGrace(0)}"
            if ( (false != self.dtype) && {
                    self.dtype.value != "Unknown" }) then {
                s := s ++ " : " ++ self.dtype.toGrace(0)
            }
            if (self.annotations.size > 0) then {
                s := s ++ " is "
                s := s ++ self.annotations.fold{ a,b ->
                    if (a != "") then { a ++ ", " } else { "" } ++ b.toGrace(0) }
                        startingWith ""
            }
            if (false != self.value) then {
                s := s ++ " = " ++ self.value.toGrace(depth)
            }
            s
        }
        method shallowCopy {
            defDecNode.new(name, value, dtype).shallowCopyFieldsFrom(self)
        }
        method shallowCopyFieldsFrom(other) {
            super.shallowCopyFieldsFrom(other)
            startToken := other.startToken
            self
        }
        method statementName { "definition" }
    }
}
def varDecNode is public = object {
  class new(name', val', dtype') {
    inherits baseNode
    def kind is public = "vardec"
    var name is public := name'
    var value is public := val'
    var dtype is public := dtype'
    def nameString:String is public = name.value
    var annotations is public := [ ]

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
    method isFieldDec { true }

    method usesAsType(aNode) {
        aNode == dtype
    }

    method declarationKindWithAncestors(as) { k.vardec }

    method accept(visitor : ASTVisitor) from(as) {
        if (visitor.visitVarDec(self) up(as)) then {
            def newChain = as.extend(self)
            self.name.accept(visitor) from(newChain)
            if (false != self.dtype) then {
                self.dtype.accept(visitor) from(newChain)
            }
            for (self.annotations) do { ann ->
                ann.accept(visitor) from(newChain)
            }
            if (false != self.value) then {
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
        if (false != self.dtype) then {
            s := s ++ "\n" ++ spc ++ "Type: "
            s := s ++ self.dtype.pretty(depth + 2)
        }
        if (false != self.value) then {
            s := s ++ "\n" ++ spc ++ "Value: "
            s := s ++ self.value.pretty(depth + 2)
        }
        if (false != comments) then {
            s := s ++ comments.pretty(depth+2)
        }
        s
    }
    method toGrace(depth : Number) -> String {
        var spc := ""
        repeat (depth) times {
            spc := spc ++ "    "
        }
        var s := "var {self.name.toGrace(0)}"
        if ( (false != self.dtype) && {
                self.dtype.value != "Unknown" }) then {
            s := s ++ " : " ++ self.dtype.toGrace(0)
        }
        if (self.annotations.size > 0) then {
            s := s ++ " is "
            s := s ++ self.annotations.fold{ a,b ->
                if (a != "") then { a ++ ", " } else { "" } ++ b.toGrace(0) }
                    startingWith ""
        }
        if (false != self.value) then {
            s := s ++ " := " ++ self.value.toGrace(depth)
        }
        s
    }
    method shallowCopy {
        varDecNode.new(name, value, dtype).shallowCopyFieldsFrom(self)
    }
    method statementName { "variable declaration" }

  }
}
def importNode is public = object {
  class new(path', name', dtype') {
    inherits baseNode
    def kind is public = "import"
    var value is public := name'
    var path is public := path'
    var annotations is public := [ ]
    var dtype is public := dtype'
    method isImport { true }
    method isExternal { true }
    method isExecutable { false }
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
    method declarationKindWithAncestors(as) { k.defdec }
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
            if (false != self.dtype) then {
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
}
def dialectNode is public = object {
  class new(path') {
    inherits baseNode
    def kind is public = "dialect"
    var value is public := path'

    method isDialect { true }
    method isExternal { true }
    method isExecutable { false }
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
}
def returnNode is public = object {
  class new(expr) {
    inherits baseNode
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
}
def inheritsNode = object {
    method new(expr) scope(s) {
        def result = new(expr)
        result.scope := s
        result
    }
    class new(expr) {
        inherits baseNode
        def kind is public = "inherits"
        var value is public := expr
        var providedNames is public := emptySet
        var aliases is public := [ ]
        var exclusions is public := [ ]
        var isUse is public := false  // this is a `use trait` clause, not an inherits

        method isLegalInTrait { isUse }
        method isInherits { true }
        method inheritsFromMember { value.isMember }
        method inheritsFromCall { value.isCall }
        method isExecutable { false }
        method accept(visitor : ASTVisitor) from(as) {
            if (visitor.visitInherits(self) up(as)) then {
                def newChain = as.extend(self)
                value.accept(visitor) from(newChain)
                aliases.do { a ->
                    a.newName.accept(visitor) from(newChain)
                    a.oldName.accept(visitor) from(newChain)
                }
                exclusions.do { e -> e.accept(visitor) from(newChain) }
            }
        }
        method declarationKindWithAncestors(as) {
            // identifiers declared in an inherits statement are aliases for
            // methods.  We treat them as methods, because (unlike inherited names)
            // they can't be overridden by local methods.
            k.methdec
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
            var s := super.pretty(depth)
            if (isUse) then { s := "{s} (use)" }
            s := s ++ "\n" ++ spc ++ self.value.pretty(depth + 1)
            aliases.do { a ->
                s := "{s}\n{a.pretty(depth)}"
            }
            if (exclusions.isEmpty.not) then { s := "{s}\n{spc}" }
            exclusions.do { e ->
                s := "{s} exclude {e} "
            }
            if (providedNames.isEmpty.not) then {
                s := s ++ "\n{spc}Provided names: {providedNames.asList.sort}"
            }
            s
        }
        method toGrace(depth : Number) -> String {
            var s := if (isUse) then { "use " } else { "inherit " }
            s := s ++ self.value.toGrace(0)
            aliases.do { a ->
                s := "{s} {a} "
            }
            exclusions.do { e ->
                s := "{s} exclude {e.nameString} "
            }
            s
        }
        method asString {
            if (isUse) then { "use " } else { "inherit " } ++ value.toGrace 0
        }
        method nameString { value.toGrace(0) }
        method addAlias (newName) for (oldName) {
            aliases.push(aliasNew(newName) old(oldName))
        }
        method addExclusion(methName) {
            exclusions.push(methName)
        }
        method shallowCopy {
            inheritsNode.new(nullNode).shallowCopyFieldsFrom(self)
        }
        method shallowCopyFieldsFrom(other) {
            super.shallowCopyFieldsFrom(other)
            providedNames := other.providedNames
            aliases := other.aliases
            exclusions := other.exclusions
            isUse := other.isUse
            self
        }
        method statementName {
            if (isUse) then { "use" } else { "inherit" }
        }
    }
}
type AliasPair = {
    newName
    oldName
}

class aliasNew(n) old(o) {
    method newName {n}
    method oldName {o}
    method asString { "alias {n.nameString} = {o.nameString}" }
    method pretty(depth) {
        var spc := ""
        for (0..depth) do { i ->
            spc := spc ++ "  "
        }
        "{spc}  alias {n.pretty(depth)} = {o.pretty(depth)}"
    }
    method hash { (n.hash * 1171) + o.hash }
    method isExecutable { false }
    method == (other) {
        match (other)
            case { that:AliasPair -> (n == that.newName) && (o == that.oldName) }
            case { _ -> false }
    }
}
def blankNode is public = object {
    class new {
        inherits baseNode
        def kind is public = "blank"
        def value is public = "blank"
        method isExecutable { false }


        method accept(visitor : ASTVisitor) from(as) {
            visitor.visitBlank(self) up(as)
        }
        method map(blk) ancestors(as) {
            var n := shallowCopy
            def newChain = as.extend(n)
            blk.apply(n, as)
        }
        method nameString { "" }
        method asString { "blank" }
        method toGrace(depth : Number) -> String { "" }
        method shallowCopy {
            blankNode.new.shallowCopyFieldsFrom(self)
        }
    }
}
def signaturePart = object {
    method new {
        partName "" params []
    }
    method partName(n:String) scope(s) {
        def result = partName(n) params []
        result.scope := s
        result
    }
    method partName(n:String) params(ps) scope(s) {
        def result = partName(n) params(ps)
        result.scope := s
        result
    }
    method partName(n:String) {
        partName(n) params []
    }
    class partName(n:String) params(ps) {
        inherits baseNode
        def kind is public = "signaturepart"
        var name is public := n
        var params is public := ps
        var typeParams is public := false
        var lineLength is public := 0

        method nameString {
            if (params.size == 0) then {return name}
            name ++ "(" ++ params.size ++ ")"
        }

        method canonicalName {
            if (params.size == 0) then {return name}
            var underScores := ""
            params.do { _ -> underScores := underScores ++ "_" }
                separatedBy { underScores := underScores ++ "," }
            name ++ "(" ++ underScores ++ ")"
        }

        method accept(visitor : ASTVisitor) from(as) {
            if (visitor.visitSignaturePart(self) up(as)) then {
                def newChain = as.extend(self)
                params.do { p -> p.accept(visitor) from(newChain) }
                if (false != typeParams) then {
                    typeParams.accept(visitor) from(newChain)
                }
            }
        }
        method declarationKindWithAncestors(as) { k.parameter }
        method map(blk) ancestors(as) {
            var nd := shallowCopy
            def newChain = as.extend(nd)
            nd.params := listMap(params, blk) ancestors(newChain)
            nd.typeParams := maybeMap(typeParams, blk) ancestors(newChain)
            blk.apply(nd, as)
        }
        method pretty(depth) {
            var spc := ""
            for (0..depth) do { i ->
                spc := spc ++ "  "
            }
            var s := "{super.pretty(depth)}: {name}"
            if (params.isEmpty.not) then { s := "{s}\n{spc}Parameters:" }
            for (params) do { p ->
                s := "{s}\n  {spc}{p.pretty(depth + 2)}"
            }
            if (false != typeParams) then {
                s := "{s}\n  {spc}TypeParams: {typeParams.pretty(depth + 1)}"
            }
            s
        }
        method shallowCopy {
            signaturePart.partName(name) params(params)
                .shallowCopyFieldsFrom(self)
        }
        method shallowCopyFieldsFrom(other) {
            super.shallowCopyFieldsFrom(other)
            typeParams := other.typeParams
            lineLength := other.lineLength
            self
        }
        method asString {
            "part: {nameString}"
        }
    }
}

def callWithPart = object {
    method new {
        request "" withArgs( [] )
    }
    method request(name) withArgs(argList) scope (s) {
        def result = request(name) withArgs(argList)
        result.scope := s
        result
    }
    class request(rPart:String) withArgs(xs) {
        inherits baseNode
        def kind is public = "callwithpart"
        var name is public := rPart
        var args is public := xs
        var lineLength is public := 0

        method map(blk) ancestors(as) {
            var n := shallowCopy
            def newChain = as.extend(n)
            n.args := listMap(args, blk) ancestors(newChain)
            blk.apply(n, as)
        }
        method pretty(depth) {
            var spc := ""
            repeat (depth+1) times {
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
            callWithPart.request(name) withArgs(args).shallowCopyFieldsFrom(self)
        }
        method shallowCopyFieldsFrom(other) {
            super.shallowCopyFieldsFrom(other)
            lineLength := other.lineLength
            self
        }
        method statementName { "request" }
    }
}

def commentNode = object {
    class new(val') {
        inherits baseNode
        def kind is public = "comment"
        var value:String is public := val'
        var isPartialLine:Boolean is public := false
        var isPreceededByBlankLine is public := false
        var endLine is public := util.linenum
        method isComment { true }
        method isLegalInTrait { true }
        method isExecutable { false }
        method asString { "comment ({line}–{endLine}): {value}" }
        method extendCommentUsing(cmtNode) {
            value := value ++ " " ++ cmtNode.value
            endLine := cmtNode.endLine
        }
        method map(blk) ancestors(as) {
            var n := shallowCopy
            def newChain = as.extend(n)
            blk.apply(n, as)
        }
        method accept(visitor : ASTVisitor) from(as) {
            visitor.visitComment(self) up(as)
        }
        method pretty(depth) {
            var s := "\n"
            repeat (depth-1) times {
                s := s ++ "  "
            }
            def pb = if (isPreceededByBlankLine) then { " > blank" } else { "" }
            "{s}Comment{pb}({line}–{endLine}): ‹{value}›"
        }
        method toGrace(depth) {
            // Partial line comments don't start with a newline, whereas
            // full-line comments do.  No newline at end in either case.
            if (isPartialLine) then {
                "// (partial) {value}"
            } else {
                var spc := ""
                repeat (depth) times { spc := spc ++ "    " }
                wrap(value) to (lineLength) prefix (spc ++ "// ")
            }
        }
        method shallowCopy {
            commentNode.new(nullNode).shallowCopyFieldsFrom(self)
        }
        method shallowCopyFieldsFrom(other) {
            super.shallowCopyFieldsFrom(other)
            value := other.value
            isPartialLine := other.isPartialLine
            endLine := other.endLine
            self
        }
    }
}

method wrap(str:String) to (l:Number) prefix (margin:String) {
    def ind = margin.size
    def len = max(ind + 4, l)
    if ((ind + str.size) <= len) then {
        return "\n" ++ margin ++ str
    }
    var currBreak
    var trimmedLine

    try {
        currBreak := str.lastIndexOf " " startingAt (len - ind)
            ifAbsent {len - ind}
        trimmedLine := str.substringFrom (1) to (currBreak).trim
    } catch { ex:NoSuchMethod ->  // C string libraries lack methods
        currBreak := min(len - ind, str.size)
        (1..currBreak).do { ix ->
            if (str.at(ix) == " ") then { currBreak := ix }
        }
        var end := currBreak
        while {(end >= 1) && {str.at(end) == " "}} do {
            end := end - 1
        }
        var start := 1
        while {(start <= str.size) && {str.at(start) == " "}} do {
            start := start + 1
        }
        trimmedLine := str.substringFrom (start) to (end)
    }
    "\n" ++ margin ++ trimmedLine ++
        wrap(str.substringFrom (currBreak+1) to (str.size))
            to (l) prefix (margin)
}


type ASTVisitor = {
     visitIf(o) up(as) -> Boolean
     visitBlock(o) up(as) -> Boolean
     visitMatchCase(o) up(as) -> Boolean
     visitTryCatch(o) up(as) -> Boolean
     visitMethodType(o) up(as) -> Boolean
     visitSignaturePart(o) up(as) -> Boolean
     visitTypeLiteral(o) up(as) -> Boolean
     visitTypeParameters(o) up(as) -> Boolean
     visitTypeDec(o) up(as) -> Boolean
     visitMethod(o) up(as) -> Boolean
     visitCall(o) up(as) -> Boolean
     visitObject(o) up(as) -> Boolean
     visitModule(o) up(as) -> Boolean
     visitArray(o) up(as) -> Boolean
     visitMember(o) up(as) -> Boolean
     visitGeneric(o) up(as) -> Boolean
     visitIdentifier(o) up(as) -> Boolean
     visitString(o) up(as) -> Boolean
     visitNum(o) up(as) -> Boolean
     visitOp(o) up(as) -> Boolean
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

class baseVisitor -> ASTVisitor {
    method visitIf(o) up(as) { visitIf(o) }
    method visitBlock(o) up(as) { visitBlock(o) }
    method visitMatchCase(o) up(as) { visitMatchCase(o) }
    method visitTryCatch(o) up(as) { visitTryCatch(o) }
    method visitMethodType(o) up(as) { visitMethodType(o) }
    method visitSignaturePart(o) up(as) { visitSignaturePart(o) }
    method visitTypeDec(o) up(as) { visitTypeDec(o) }
    method visitTypeLiteral(o) up(as) { visitTypeLiteral(o) }
    method visitTypeParameters(o) up(as) { visitTypeParameters(o) }
    method visitMethod(o) up(as) { visitMethod(o) }
    method visitCall(o) up(as) { visitCall(o) }
    method visitObject(o) up(as) { visitObject(o) }
    method visitModule(o) up(as) { visitObject(o) }
    method visitArray(o) up(as) { visitArray(o) }
    method visitMember(o) up(as) { visitMember(o) }
    method visitGeneric(o) up(as) { visitGeneric(o) }
    method visitIdentifier(o) up(as) { visitIdentifier(o) }
    method visitString(o) up(as) { visitString(o) }
    method visitNum(o) up(as) { visitNum(o) }
    method visitOp(o) up(as) { visitOp(o) }
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
    method visitTryCatch(o) -> Boolean { true }
    method visitMethodType(o) -> Boolean { true }
    method visitSignaturePart(o) -> Boolean { true }
    method visitTypeDec(o) -> Boolean { true }
    method visitTypeLiteral(o) -> Boolean { true }
    method visitTypeParameters(o) -> Boolean { true }
    method visitMethod(o) -> Boolean { true }
    method visitCall(o) -> Boolean { true }
    method visitObject(o) -> Boolean { true }
    method visitModule(o) -> Boolean { true }
    method visitArray(o) -> Boolean { true }
    method visitMember(o) -> Boolean { true }
    method visitGeneric(o) -> Boolean { true }
    method visitIdentifier(o) -> Boolean { true }
    method visitString(o) -> Boolean { true }
    method visitNum(o) -> Boolean { true }
    method visitOp(o) -> Boolean { true }
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

class pluggableVisitor(visitation:Block2) -> ASTVisitor {
    // Manufactures a default visitor, given a 2-parameter block.
    // Typically, some of the methods will be overridden.
    // The block will be applied with the AST node as the first argument
    // and the ancestor chain as the second, and should answer true if
    // the visitation is to continue and false if it is to go no deeper.

    method visitIf(o) up(as) { visitation.apply (o, as) }
    method visitBlock(o) up(as) { visitation.apply (o, as) }
    method visitMatchCase(o) up(as) { visitation.apply (o, as) }
    method visitTryCatch(o) up(as) { visitation.apply (o, as) }
    method visitMethodType(o) up(as) { visitation.apply (o, as) }
    method visitSignaturePart(o) up(as) { visitation.apply (o, as) }
    method visitTypeDec(o) up(as) { visitation.apply (o, as) }
    method visitTypeLiteral(o) up(as) { visitation.apply (o, as) }
    method visitMethod(o) up(as) { visitation.apply (o, as) }
    method visitCall(o) up(as) { visitation.apply (o, as) }
    method visitObject(o) up(as) { visitation.apply (o, as) }
    method visitModule(o) up(as) { visitation.apply (o, as) }
    method visitArray(o) up(as) { visitation.apply (o, as) }
    method visitMember(o) up(as) { visitation.apply (o, as) }
    method visitGeneric(o) up(as) { visitation.apply (o, as) }
    method visitIdentifier(o) up(as) { visitation.apply (o, as) }
    method visitString(o) up(as) { visitation.apply (o, as) }
    method visitNum(o) up(as) { visitation.apply (o, as) }
    method visitOp(o) up(as) { visitation.apply (o, as) }
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
        if ((ann.kind == "identifier") && {
            ann.value == annName }) then {
            return object {
                inherits true
                def value is public = ann
            }
        }
    }
    false
}
