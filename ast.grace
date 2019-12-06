dialect "standard"
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

type Position = interface {
    line -> Number
    column -> Number
    > (other) -> Boolean
    ≥ (other) -> Boolean
    == (other) -> Boolean
    < (other) -> Boolean
    ≤ (other) -> Boolean
}
type Range = interface {
    start -> Position
    end -> Position
}
class line (l:Number) column (c:Number) -> Position {
    use equality
    def line is public = l
    def column is public = c
    method > (other:Position) -> Boolean {
        if (line > other.line) then { return true }
        if (line < other.line) then { return false }
        (column > other.column)
    }
    method ≥ (other:Position) -> Boolean {
        if (line > other.line) then { return true }
        if (line < other.line) then { return false }
        (column ≥ other.column)
    }
    method == (other:Position) -> Boolean {
        (line == other.line) && (column == other.column)
    }
    method hash -> Number {
        hashCombine(line.hash, column.hash)
    }
    method ≤ (other:Position) -> Boolean {
        (other > self).not
    }
    method < (other:Position) -> Boolean {
        (other ≥ self).not
    }
    method asString { "{line}:{column}" }
}
class start (s:Position) end (e:Position) -> Range {
    use equality
    def start is public = s
    def end is public = e
    method asString {
        if (start.line == end.line) then {
            "{start}-{end.column}"
        } elseif { end.line == noPosition } then {
            start.asString
        } else {
            "{start}-{end}"
        }
    }
    method == (other) {
        (start == other.start) && (end == other.end)
    }
    method hash -> Number {
        hashCombine(start.hash, end.hash)
    }
}
def noPosition is public = line 0 column 0
def emptyRange is public = start (noPosition) end (noPosition)

method positionOfNext (needle:String) after (pos:Position) -> Position {
    // returns the Position of the end of needle in the source

    if (needle == "⟦") then {
        return positionOfNext "[[" or "⟦" after (pos)
    }
    if (needle == "⟧") then {
        return positionOfNext "]]" or "⟧" after (pos)
    }
    def sourceLines = util.lines
    var lineNr := pos.line
    if (lineNr == 0) then { return noPosition }
    var found := sourceLines.at(lineNr).indexOf (needle) startingAt (pos.column + 1)
    while { found == 0 } do {
        lineNr := lineNr + 1
        if (lineNr > sourceLines.size) then { return noPosition }
        found := sourceLines.at(lineNr).indexOf (needle)
    }
    line (lineNr) column (found + needle.size - 1)
}

method positionOfNext (needle1:String) or (needle2:String)
          after (pos:Position) -> Position {
    def sourceLines = util.lines
    def startLine = pos.line
    if (startLine == 0) then { return noPosition }
    var found := sourceLines.at(startLine).indexOf (needle1) startingAt (pos.column + 1)
    if (found ≠ 0) then {
        return line (startLine) column (found + needle1.size - 1)
    }
    found := sourceLines.at(startLine).indexOf (needle2) startingAt (pos.column + 1)
    if (found ≠ 0) then {
        return line (startLine) column (found + needle2.size - 1)
    }
    for (startLine..sourceLines.size) do { ln ->
        found := sourceLines.at(ln).indexOf (needle1)
        if (found ≠ 0) then {
            return line (ln) column (found + needle1.size - 1)
        }
        found := sourceLines.at(ln).indexOf (needle2)
        if (found ≠ 0) then {
            return line (ln) column (found + needle2.size - 1)
        }
    }
    return noPosition
}

def lineLength is public = 80
def uninitialized = singleton "uninitialized"
method listMap(l, b) ancestors(ac) is confidential {
    def newList = list [ ]
    l.do { nd -> newList.addLast(nd.map(b) ancestors(ac)) }
    newList
}
method maybeMap(n, b) ancestors(ac) is confidential {
    if (false != n) then {
        n.map(b) ancestors(ac)
    } else {
        n
    }
}
method maybeListMap(n, b) ancestors(ac) is confidential {
    if (false != n) then {
        listMap(n, b) ancestors(ac)
    } else {
        n
    }
}
method withoutLeadingComponents(path) {
    // strips any leading components from path, up to the final /.
    // If there is no /, returns path
    var bnm := ""
    for (path) do { c->
        if (c == "/") then {
            bnm := ""
        } else {
            bnm := bnm ++ c
        }
    }
    bnm
}

def ancestorChain is public = object {
    class empty {
        method isEmpty { true }
        method asString { "ancestorChain ▫" }
        method extend(n) { cons(n) onto(self) }
    }
    method with(n) { empty.extend(n) }
    class cons(p) onto(ac) is confidential {
        method forebears { ac }
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
        method suchThat(cond) ifAbsent (action) {
            var a := self
            while { a.isEmpty.not } do {
                if (cond.apply(a.parent)) then { return a.parent }
                a := a.forebears
            }
            action.apply
        }
        method extend(n) { cons(n) onto(self) }
    }
}

def emptySeq = []

type AstNode = interface {
    kind -> String
        // Used for pseudo-instanceof tests, and for printing
    register -> String
        // Used in the code generator to name the resulting object
    line -> Number
        // The source line the node came from; the first line is 1
    line:=(ln:Number)
    column -> Number
    linePos -> Number
        // linePos and column are aliases; the first column is 1
    linePos:=(lp:Number)
    scope -> SymbolTable
        // The symbolTable for names defined in this node and its sub-nodes
    pretty(n:Number) -> String
        // Pretty-print-string of node at depth n
    comments -> AstNode
        // Comments associated with this node
    range -> Range
        // The source range represented by this node
    start -> Position
        // The start of the source range represented by this node
    end -> Position
        // The end of the source range represented by this node
}

type SymbolTable = Unknown

class baseNode {
    // the superclass of all AST nodes
    use identityEquality
    var register is public := ""
    var line is public := util.linenum
    var linePos is public := util.linepos
    var symbolTable := fakeSymbolTable
    symbolTable.node := self
    var comments is public := false

    method setLine (l) col (c) {
        line := l
        linePos := c
        self
    }
    method setPositionFrom (tokenOrNode) {
        line := tokenOrNode.line
        linePos := tokenOrNode.linePos
        self
    }
    method setStart(p: Position) {
        line := p.line
        linePos := p.column
        self
    }
    method column { linePos }   // so that AstNode conforms to Position
    method start { line (line) column (linePos) }
    method end -> Position { line (line) column (linePos + self.value.size - 1) }
    method range { start (start) end (end) }
    method kind is abstract
    method annotations { [] }   // overriden by those nodes that can be annotated
    method hasAnnotation(annName) {
        annotations.do { ann ->
            if (ann.nameString == annName) then { return true }
        }
        false
    }
    method isNull { false }
    method isAppliedOccurrence { isBindingOccurrence.not }
    method isBindingOccurrence { true }
    method isMarkerDeclaration { false }
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
    method isReturn { false }
    method isSelf { false }
    method isSuper { false }
    method isPrelude { ProgrammingError.raise "isPrelude requested" }
    method isBuiltIn { false }
    method isOuter { false }
    method isSelfOrOuter { false }
    method isBlock { false }
    method isObject { false }
    method isIdentifier { false }
    method isDialect { false }
    method isImport { false }
    method isTypeDec { false }
    method isExternal { false }
    method isFresh { false }
    method isConstant { false }
    method isSequenceConstructor { false }
    method canInherit { false }
    method returnsObject { false }
    method isImplicit { false }
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
    method isSimple { true }  // needs no parens when used as receiver
    method isDelimited { false }  // needs no parens when used as argument
    method description { kind }
    method accept(visitor) {
        self.accept(visitor) from (ancestorChain.empty)
    }
    method hasScope { fakeSymbolTable ≠ symbolTable }
    method scope {
        if (hasScope) then {
            symbolTable
        } else {
            ProgrammingError.raise "accessing unset symbol table"
        }
    }

    method scope:=(st) {
        // override this method in subobjects that open a new scope. In such
        // subobjects, and only in such subobjects, there should be a 2-way
        // conection between the node and the symbol table that defines its scope.
        symbolTable := st
    }
    method setScope(st) {
        // sets the symboltable, and answers self, for chaining.
        scope := st
        self
    }
    method shallowCopyFieldsFrom(other) {
        register := other.register
        line := other.line
        linePos := other.linePos
        scope := other.scope
        postCopy(other)
        self
    }
    method postCopy(other) {
        // hook method, to be overridden by sub-objects if desired
    }

    method prettyPrefix(depth) {
        def spc = "  " * (depth+1)
        if ((scope.node == self) && {util.target == "symbols"}) then {
            "{range} {description}\n{spc}Symbols({scope.variety}): {scope}{scope.elementScopesAsString}"
        } elseif {scope.variety == "fake"} then {
            "{range} {description}"
        } else {
            "{range} {description} {scope.asDebugString}"
        }
    }
    method basePretty(depth) { prettyPrefix(depth) }
    method pretty(depth) { basePretty(depth) }
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
    method toGrace(depth) is abstract
    method toGrace { toGrace 0 }
}

def implicit is public = object {
    inherit baseNode
    line := 0
    linePos := 0
    def kind is public = "implicit"
    def nameString is public = "implicit"
    method range { emptyRange }
    method isImplicit { true }
    method toGrace(depth) { "implicit" }
    method asString { "the implicit receiver" }
    method map(blk) ancestors(ac) { self }
    method accept(visitor) from (ac) {
        visitor.visitImplicit(self) up (ac)
    }
    method pretty(depth) { "implicit" }
}

def nullNode is public = object {
    inherit baseNode
    def kind is public = "null"
    method toGrace(depth) {
        "// null"
    }
    method range { emptyRange }
    method endPos { 0 }
    method end -> Position { line (0) column (0) }
    method asString { "the nullNode" }
    method isNull { true }
    method accept(visitor) from (ac) { }
    method map(blk) ancestors(ac) { self }
    method shallowCopy { self }
}

class fakeSymbolTable is public {
    use identityEquality
    var node is public    // will be initialized when this node
      // is placed in an AstNode using scope:=(_).
      // Can't make it nullNode now, because nullNode
      // inherits from baseNode, which uses fakeSymbolTable
    method asString { "the fakeSymbolTable" }
    method addNode (n) ac (kind) {
        ProgrammingError.raise "fakeSymbolTable(on node {node}).addNode({n}) ac \"{kind}\""
    }
    method thatDefines (name) ifNone (action) {
        action.apply
    }
    method thatDefines (name) {
        ProgrammingError.raise "fakeSymbolTable(on node {node}).thatDefines({name})."
    }
    method enclosingObjectScope {
        ProgrammingError.raise "fakeSymbolTable(on node {node}).enclosingObjectScope"
    }
    method variety { "fake" }
    method elementScopesAsString { "[fake]" }
}

def ifNode is public = object {
  class new(cond, thenblock', elseblock') {
    inherit baseNode
    def kind is public = "if"
    var value is public := cond
    var thenblock is public := thenblock'
    var elseblock is public := elseblock'
    var handledIdentifiers is public := false
    method isSimple { false }  // needs parens when used as receiver
    method accept(visitor : AstVisitor) from(ac) {
        if (visitor.visitIf(self) up(ac)) then {
            def newChain = ac.extend(self)
            value.accept(visitor) from(newChain)
            thenblock.accept(visitor) from(newChain)
            elseblock.accept(visitor) from(newChain)
        }
    }
    method end -> Position { elseblock.end }
    method map(blk) ancestors(ac) {
        var n := shallowCopy
        def newChain = ac.extend(n)
        n.value := value.map(blk) ancestors(newChain)
        n.thenblock := thenblock.map(blk) ancestors(newChain)
        n.elseblock := elseblock.map(blk) ancestors(newChain)
        blk.apply(n, ac)
    }
    method pretty(depth) {
        def spc = "  " * (depth+1)
        var s := basePretty(depth) ++ "\n"
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
        def spc = "    " * depth
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
    method postCopy(other) {
        handledIdentifiers := other.handledIdentifiers
        self
    }
  }
}
def blockNode is public = object {
  class new(params', body') {
    inherit baseNode
    def kind is public = "block"
    def value is public = "block"
    var params is public := params'
    var body is public := body'
    def selfclosure is public = true
    var matchingPattern is public := false
    var extraRuntimeData is public := false

    method isBlock { true }
    method isDelimited { true }
    method isEmpty { body.size == 0 }
    method isntEmpty { body.size > 0 }
    method scope:=(st) {
        // sets up the 2-way conection between this node
        // and the synmol table that defines the scope that I open.
        symbolTable := st
        st.node := self
    }
    method declarationKindWithAncestors(ac) { k.parameter }
    method isMatchingBlock { params.size == 1 }
    method returnsObject {
        (body.size > 0) && { body.last.returnsObject }
    }
    method returnedObjectScope {
        // precondition: returnsObject
        body.last.returnedObjectScope
    }
    method hasParams { params.isEmpty.not }
    method numParams { params.size }
    method parametersDo(b) {
        params.do(b)
    }
    method parameterCounts { [ params.size ] }
    method parameterNames {
        list.withAll(params.map { each -> each.nameString })
    }
    method typeParameterNames { list.empty }
    method hasTypeParams { false }
    method aParametersHasATypeAnnotation {
        params.do { p -> if (false ≠ p.dtype) then { return true } }
        return false
    }
    method end -> Position {
        if (body.size > 0) then { return body.last.end }
        if (params.isEmpty) then {
            positionOfNext "}" after (start)
        } else {
            positionOfNext "}" after (params.last.end)
        }
    }
    method accept(visitor : AstVisitor) from(ac) {
        if (visitor.visitBlock(self) up(ac)) then {
            def newChain = ac.extend(self)
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
    method map(blk) ancestors(ac) {
        var n := shallowCopy
        def newChain = ac.extend(n)
        n.params := listMap(params, blk) ancestors(newChain)
        n.body := listMap(body, blk) ancestors(newChain)
        n.matchingPattern := maybeMap(matchingPattern, blk) ancestors(newChain)
        blk.apply(n, ac)
    }
    method pretty(depth) {
        def spc = "  " * (depth+1)
        var s := basePretty(depth) ++ "\n"
        s := s ++ spc ++ "Parameters:"
        for (self.params) do { mx ->
            s := s ++ "\n  "++ spc ++ mx.pretty(depth+1)
        }
        s := s ++ "\n"
        s := s ++ spc ++ "Body:"
        for (self.body) do { mx ->
            s := s ++ "\n  "++ spc ++ mx.pretty(depth+1)
        }
        if (false != self.matchingPattern) then {
            s := s ++ "\n"
            s := s ++ spc ++ "Pattern:"
            s := s ++ "\n  "++ spc ++ self.matchingPattern.pretty(depth+1)
        }
        s
    }
    method toGrace(depth : Number) -> String {
        def spc = "    " * depth
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
                    s := s ++ " →"
                }
            }
        }
        for (self.body) do { mx ->
            s := s ++ "\n" ++ spc ++ mx.toGrace(depth + 1)
        }
        s := s ++ "\n"
        repeat (depth - 1) times { s := s ++ "    " }
        s ++ "\}"
    }
    method shallowCopy {
        blockNode.new(params, body).shallowCopyFieldsFrom(self)
    }
    method postCopy(other) {
        matchingPattern := other.matchingPattern
        extraRuntimeData := other.extraRuntimeData
        self
    }
  }
}
def tryCatchNode is public = object {
  class new(block, cases', finally') {
    inherit baseNode
    def kind is public = "trycatch"
    var value is public := block
    var cases is public := cases'
    var finally is public := finally'
    method isSimple { false }  // needs parens when used as receiver
    method end -> Position {
        if (false ≠ finally) then { return finally.end }
        if (cases.isEmpty.not) then { return cases.last.end }
        return value.end
    }
    method accept(visitor : AstVisitor) from(ac) {
        if (visitor.visitTryCatch(self) up(ac)) then {
            def newChain = ac.extend(self)
            self.value.accept(visitor) from(newChain)
            for (self.cases) do { mx ->
                mx.accept(visitor) from(newChain)
            }
            if (false != self.finally) then {
                self.finally.accept(visitor) from(newChain)
            }
        }
    }
    method map(blk) ancestors(ac) {
        var n := shallowCopy
        def newChain = ac.extend(n)
        n.value := value.map(blk) ancestors(newChain)
        n.cases := listMap(cases, blk) ancestors(newChain)
        n.finally := maybeMap(finally, blk) ancestors(newChain)
        blk.apply(n, ac)
    }
    method pretty(depth) {
        def spc = "  " * (depth+1)
        var s := "{basePretty(depth)}\n"
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
        def spc = "    " * depth
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
    inherit baseNode
    def kind is public = "matchcase"
    var value is public := matchee'
    var cases is public := cases'
    var elsecase is public := elsecase'
    method isSimple { false }  // needs parens when used as receiver
    method end -> Position {
        if (false ≠ elsecase) then { return elsecase.end }
        if (cases.isEmpty.not) then { return cases.last.end }
        return value.end
    }
    method matchee { value }
    method accept(visitor : AstVisitor) from(ac) {
        if (visitor.visitMatchCase(self) up(ac)) then {
            def newChain = ac.extend(self)
            self.value.accept(visitor) from(newChain)
            for (self.cases) do { mx ->
                mx.accept(visitor) from(newChain)
            }
            if (false != self.elsecase) then {
                self.elsecase.accept(visitor) from(newChain)
            }
        }
    }
    method map(blk) ancestors(ac) {
        var n := shallowCopy
        def newChain = ac.extend(n)
        n.value := value.map(blk) ancestors(newChain)
        n.cases := listMap(cases, blk) ancestors(newChain)
        n.elsecase := maybeMap(elsecase, blk) ancestors(newChain)
        blk.apply(n, ac)
    }
    method pretty(depth) {
        def spc = "  " * (depth+1)
        var s := basePretty(depth) ++ "\n"
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
        def spc = "    " * depth
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

class methodSignatureNode(parts', rtype') {
    // Represents a method signature in a type literal, or in an inheritance modifier.
    // parts' is a collection of signaturePart objects, which
    // contain the parts of this method's name and the parameter lists;
    // rtype' is the return type of this method, or false if not specified.

    inherit baseNode
    def kind is public = "methodtype"
    var signature is public := parts'
    var rtype is public := rtype'
    var cachedIdentifier := uninitialized
    var isBindingOccurrence is readable := true
            // the only exceptions are the oldMethodName in an alias clause,
            // and an excluded name

    method postCopy(other) {
        isBindingOccurrence := other.isBindingOccurrence
    }

    method appliedOccurrence {
        isBindingOccurrence := false
        if (uninitialized ≠ cachedIdentifier) then {
            cachedIdentifier.isBindingOccurrence := false
        }
        self
    }

    method hasParams { signature.first.params.isEmpty.not }
    method numParams {
        signature.fold { acc, p -> acc + p.numParams } startingWith 0
    }
    method parametersDo(b) {
        signature.do { part ->
            part.params.do { each -> b.apply(each) }
        }
    }
    method parameterCounts {
        def result = list [ ]
        signature.do { part ->
            result.push(part.params.size)
        }
        result
    }
    method parameterNames {
        def result = list [ ]
        signature.do { part ->
            part.params.do { param ->
                result.push(param.nameString)
            }
        }
        result
    }
    method typeParameterNames {
        if (hasTypeParams.not) then { return list [ ] }
        def result = list [ ]
        signature.first.typeParams.do { each ->
            result.push(each.nameString)
        }
        result
    }
    method numTypeParams { signature.first.numTypeParams }
    method hasTypeParams { false ≠ signature.first.typeParams }
    method typeParams { signature.first.typeParams }
    method withTypeParams(tp) {
        signature.first.typeParams := tp
        self
    }
    method end -> Position {
        if ((false ≠ rtype) && {rtype.line ≠ 0}) then { return rtype.end }
        signature.last.end
    }
    method endPos {
        end.column
    }
    method nameString {
        // the name of the method being defined, in numeric form
        signature.fold { acc, each -> acc ++ each.nameString }
            startingWith ""
    }

    method canonicalName {
        // the name of the method being defined, in underscore form
        signature.fold { acc, each -> acc ++ each.canonicalName }
            startingWith ""
    }

    method asIdentifier {
        if (uninitialized == cachedIdentifier) then {
            cachedIdentifier := identifierNode.new(nameString, false)
            cachedIdentifier.line := signature.first.line
            cachedIdentifier.linePos := signature.first.linePos
            cachedIdentifier.end := signature.last.end
            cachedIdentifier.canonicalName := canonicalName
            cachedIdentifier.isBindingOccurrence := isBindingOccurrence
        }
        cachedIdentifier
    }
    method isExecutable { false }

    method scope:=(st) {
        // sets up the 2-way conection between this node
        // and the symbol table that defines the scope that I open.
        symbolTable := st
        if (isBindingOccurrence) then {
            st.node := self
            // it's important that this assignment _not_ happen for excluded
            // methods, because that will over-write the node field of the
            // enclosing object's symbol table
        }
    }
    method declarationKindWithAncestors(ac) {
        ac.parent.declarationKindWithAncestors(ac)
    }
    method accept(visitor : AstVisitor) from(ac) {
        if (visitor.visitMethodType(self) up(ac)) then {
            def newChain = ac.extend(self)
            for (signature) do { part ->
                part.accept(visitor) from(newChain)
            }
            if (false != rtype) then {
                rtype.accept(visitor) from(newChain)
            }
        }
    }
    method map(blk) ancestors(ac) {
        var n := shallowCopy
        def newChain = ac.extend(n)
        n.rtype := maybeMap(rtype, blk) ancestors(newChain)
        n.signature := listMap(signature, blk) ancestors(newChain)
        blk.apply(n, ac)
    }
    method pretty(depth) {
        def spc = "  " * (depth+1)
        var s := basePretty(depth) ++ "\n"
        s := "{s}{spc}Name: {asIdentifier}\n"
        if (false != rtype) then {
            s := "{s}{spc}Returns:\n  {spc}{rtype.pretty(depth + 2)}"
        }
        s := "{s}\n{spc}Signature Parts:"
        for (signature) do { part ->
            s := "{s}\n  {spc}{part.pretty(depth + 2)}"
        }
        s
    }
    method toGrace(depth : Number) -> String {
        var s := ""
        signature.do { part -> s:= s ++ part.toGrace(depth + 1) }
        if (false != rtype) then {
            s := "{s} → {rtype.toGrace(depth + 1)}"
        }
        s
    }
    method shallowCopy {
        methodSignatureNode(signature, rtype).shallowCopyFieldsFrom(self)
    }
}
def typeLiteralNode is public = object {
  class new(methods', types') {
    inherit baseNode
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
    method declarationKindWithAncestors(ac) { k.typedec }
    method isExecutable { false }

    method end -> Position {
        def tEnd = if (types.isEmpty) then {noPosition} else {types.last.end}
        def mEnd = if (methods.isEmpty) then {noPosition} else {methods.last.end}
        positionOfNext "}" after (max(max(tEnd, mEnd), start))
    }

    method accept(visitor : AstVisitor) from(ac) {
        if (visitor.visitTypeLiteral(self) up(ac)) then {
            def newChain = ac.extend(self)
            for (self.methods) do { each ->
                each.accept(visitor) from(newChain)
            }
            for (self.types) do { each ->
                each.accept(visitor) from(newChain)
            }
        }
    }
    method map(blk) ancestors(ac) {
        var n := shallowCopy
        def newChain = ac.extend(n)
        n.methods := listMap(methods, blk) ancestors (ac)
        n.types := listMap(types, blk) ancestors (ac)
        blk.apply(n, ac)
    }
    method pretty(depth) {
        def spc = "  " * (depth+1)
        var s := basePretty(depth) ++ "\n"
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
        def spc = "    " * depth
        var s := "interface \{"
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
    method postCopy(other) {
        nominal := other.nominal
        anonymous := other.anonymous
        value := other.value
        self
    }
  }
}

def typeDecNode is public = object {
  class new(name', typeValue) {
    inherit baseNode
    def kind is public = "typedec"
    var name is public := name'
    var value is public := typeValue
    var parentKind is public := "unset"
    var annotations is public := list [ ]
    var typeParams is public := false

    method nameString → String { name.value }
    method nameWithParams → String {
        if (false == typeParams) then { return nameString }
        nameString ++ typeParams.toGrace
    }
    method end -> Position { value.end }
    method isLegalInTrait { true }
    method isTypeDec { true }
    method scope:=(st) {
        // sets up the 2-way conection between this node
        // and the synmol table that defines the scope that I open.
        symbolTable := st
        st.node := self
    }

    method isExecutable { false }
    method declarationKindWithAncestors(ac) { k.typeparam }
    method isConfidential { hasAnnotation  "confidential" }
    method isPublic { isConfidential.not }
    method isWritable { false }
    method isReadable { isPublic }
    method numTypeParams {
        if (false == typeParams) then {0} else {typeParams.size}
    }
    method accept(visitor : AstVisitor) from(ac) {
        if (visitor.visitTypeDec(self) up(ac)) then {
            def newChain = ac.extend(self)
            name.accept(visitor) from(newChain)
            if (false != typeParams) then {
                typeParams.accept(visitor) from(newChain)
            }
            annotations.do { each -> each.accept(visitor) from(newChain) }
            value.accept(visitor) from(newChain)
        }
    }
    method map(blk) ancestors(ac) {
        var n := shallowCopy
        def newChain = ac.extend(n)
        n.name := name.map(blk) ancestors(newChain)
        n.typeParams := maybeMap(typeParams, blk) ancestors(newChain)
        n.value := value.map(blk) ancestors(newChain)
        n.annotations := listMap(annotations, blk) ancestors(newChain)
        blk.apply(n, ac)
    }
    method pretty(depth) {
        def spc = "  " * (depth+1)
        var s := basePretty(depth) ++ "\n"
        s := s ++ spc ++ self.name.pretty(depth + 1) ++ "\n"
        if (false != typeParams) then {
            s := "{s}{spc}Type parameters:\n{typeParams.pretty(depth + 1)}\n"
        }
        s := s ++ spc ++ "Value:"
        s := s ++ value.pretty(depth + 1)
        s := s ++ "\n"
        if (false != comments) then {
            s := s ++ comments.pretty(depth + 1)
        }
        s
    }
    method toGrace(depth : Number) -> String {
        "type {nameWithParams} = {value.toGrace(depth + 1)}"
    }
    method shallowCopy {
        typeDecNode.new(name, nullNode).shallowCopyFieldsFrom(self)
    }
    method postCopy(other) {
        parentKind := other.parentKind
        self
    }
  }
}

def methodNode is public = object {
    method new(signature, body, dtype) scope(s) {
        def result = new(signature, body, dtype)
        result.scope := s
        result
    }

    class new(signature', body', dtype') {
        // Represents a method declaration
        // The name of the method is constructed from signature',
        // which is a sequence of signatureParts;
        // body is a sequence of statements and declarations.
        // dtype is the declared return type of the method, or false.

        inherit baseNode
        def kind is public = "method"
        var description is public := kind   // changed to "class" or "trait" by parser
        var signature is public := signature'
        var hasBody is public := true
        var body is public := body'
        if (false == body') then {
            body := sequence.empty
            hasBody := false
        }
        var dtype is public := dtype'
        var selfclosure is public := false
        var annotations is public := list [ ]
        var isFresh is public := false      // a method is 'fresh' if it answers a new object
        var isOnceMethod is public := false
        method usesClassSyntax { "class" == description }
        method usesTraitSyntax { "trait" == description }
        var cachedIdentifier := uninitialized
        var isBindingOccurrence is readable := true

        method end -> Position {
            if (body.isEmpty.not) then {
                if (usesClassSyntax) then { return body.last.end }
                return positionOfNext "}" after (body.last.end)
            }
            if (false ≠ dtype) then {
                return positionOfNext "}" after (dtype.end)
            }
            return positionOfNext "}" after (signature.last.end)
        }
        method ilkName {
            // a string describing the ilk of the objects returned by this method
            if (isFresh && {body.last.isObject}) then {
                body.last.name
            } else {
                canonicalName
            }
        }
        method appliedOccurrence {
            isBindingOccurrence := false
            if (uninitialized ≠ cachedIdentifier) then {
                cachedIdentifier.isBindingOccurrence := false
            }
            self
        }
        method numParams {
            signature.fold { acc, p -> acc + p.numParams } startingWith 0
        }
        method parametersDo(b) {
            signature.do { part ->
                part.params.do { each -> b.apply(each) }
            }
        }
        method parameterCounts {
            def result = list [ ]
            signature.do { part ->
                result.push(part.params.size)
            }
            result
        }
        method parameterNames {
            def result = list [ ]
            signature.do { part ->
                part.params.do { param ->
                    result.push(param.nameString)
                }
            }
            result
        }
        method typeParameterNames {
            if (hasTypeParams.not) then { return list [ ] }
            def result = list [ ]
            signature.first.typeParams.do { each ->
                result.push(each.nameString)
            }
            result
        }
        method numTypeParams { signature.first.numTypeParams }
        method endPos {
            def lastPart = signature.last
            lastPart.linePos + lastPart.name.size - 1
        }
        method headerRange {
            start ( self.start ) end ( signature.last.end )
        }

        method nameString {
            signature.fold { acc, each -> acc ++ each.nameString }
                startingWith ""
        }
        method asIdentifier {
            if (uninitialized == cachedIdentifier) then {
                cachedIdentifier := identifierNode.new(nameString, false)
                cachedIdentifier.line := signature.first.line
                cachedIdentifier.linePos := signature.first.linePos
                cachedIdentifier.isBindingOccurrence := isBindingOccurrence
                cachedIdentifier.end := signature.last.end
                cachedIdentifier.canonicalName := canonicalName
            }
            cachedIdentifier
        }
        method value { asIdentifier }
        method canonicalName {
            signature.fold { acc, each -> acc ++ each.canonicalName }
                startingWith ""
        }
        method hasParams { signature.first.params.isEmpty.not }
        method numParamLists {
            // the number of my parameter lists.  If I have a single
            // part to my name, there may be 0 or 1
            def sigSz = signature.size
            if (sigSz > 1) then { return sigSz }
            if {signature.first.params.isEmpty} then { return 0 }
            return 1
        }
        method hasTypeParams { false ≠ signature.first.typeParams }
        method typeParams { signature.first.typeParams }
        method withTypeParams(tp) {
            signature.first.typeParams := tp
            self
        }
        method isMethod { true }
        method isExecutable { false }
        method isLegalInTrait { true }
        method isClass { usesClassSyntax || isFresh }
        method isTrait { usesTraitSyntax || (isFresh && { body.last.isTrait } ) }
        method needsArgChecks {
            signature.do { part ->
                part.params.do { p ->
                    if ((false != p.dtype) &&
                          { p.dtype.nameString != "Unknown" }) then {
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
        method declarationKindWithAncestors(ac) { k.parameter }
        method isConfidential { hasAnnotation  "confidential" }
        method isPublic { isConfidential.not }
        method isWritable { false }
        method isReadable { isPublic }
        method isAbstract { hasAnnotation "abstract" }
        method isRequired { hasAnnotation "required" }
        method isAnnotationDecl { hasAnnotation "annotation" }
        method isMarkerDeclaration {
            if (isAbstract) then { return true }
            if (isRequired) then { return true }
            isAnnotationDecl
        }
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
        method resultExpression {   // precondition: body is not empty
            if (body.isEmpty) then { ProgrammingError.raise "method has no body" }
            var last := body.last
            if (last.isReturn) then { last := last.value }
            last
        }
        method accept(visitor : AstVisitor) from(ac) {
            if (visitor.visitMethod(self) up(ac)) then {
                def newChain = ac.extend(self)
                self.value.accept(visitor) from(newChain)
                for (self.signature) do { part ->
                    part.accept(visitor) from(newChain)
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
        method map(blk) ancestors(ac){
            var n := shallowCopy
            def newChain = ac.extend(n)
            n.body := listMap(body, blk) ancestors(newChain)
            n.signature := listMap(signature, blk) ancestors(newChain)
            n.annotations := listMap(annotations, blk) ancestors(newChain)
            n.dtype := maybeMap(dtype, blk) ancestors(newChain)
            blk.apply(n, ac)
        }
        method pretty(depth) {
            def spc = "  " * (depth+1)
            var s := basePretty(depth) ++
                  if (isOnceMethod) then { " (once)\n" } else { "\n" }
            s := s ++ spc ++ "Name: " ++ value.pretty(depth+1) ++ "\n"
            if (false != self.dtype) then {
                s := s ++ spc ++ "Returns:\n" ++ spc ++ "  "
                s := s ++ self.dtype.pretty(depth + 2) ++ "\n"
            }
            if (isBindingOccurrence.not) then { s := s ++ spc ++ "Applied\n" }
            if (isFresh) then { s := s ++ spc ++ "Fresh\n" }
            s := "{s}{spc}Signature:"
            for (signature) do { part ->
                s := "{s}\n  {spc}Part: {part.name}"
                if (part.hasTypeParams) then {
                    s := "{s}\n    {spc}Type Parameters:"
                    for (part.typeParams) do { p ->
                        s := "{s}\n      {spc}{p.pretty(depth + 4)}"
                    }
                }
                if (hasParams) then {
                    s := "{s}\n    {spc}Parameters:"
                    for (part.params) do { p ->
                        s := "{s}\n      {spc}{p.pretty(depth + 4)}"
                    }
                }
            }
            s := s ++ "\n"
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
            def spc = "    " * depth
            var s := if (isOnceMethod) then { "once "} else { "" }
            s := s ++ description ++ " "
            for (self.signature) do { part -> s := s ++ part.toGrace(depth) }
            if (false != self.dtype) then {
                s := s ++ " -> {self.dtype.toGrace(0)}"
            }
            if (self.annotations.size > 0) then {
                s := s ++ " is "
                s := s ++ self.annotations.fold{ a,b ->
                    if (a != "") then { a ++ ", " } else { "" } ++ b.toGrace(0)
                } startingWith ""
            }
            if (self.hasBody) then {
                s := s ++ " \{"
                if (false != comments) then {
                    s := s ++ comments.toGrace(depth + 1)
                }
                for (self.body) do { mx ->
                    s := s ++ "\n" ++ spc ++ "    " ++ mx.toGrace(depth + 1)
                }
                s := s ++ "\n" ++ spc ++ "\}"
            }
            s
        }
        method shallowCopy {
            methodNode.new(signature, body, dtype).shallowCopyFieldsFrom(self)
        }
        method postCopy(other) {
            isFresh := other.isFresh
            isOnceMethod := other.isOnceMethod
            description := other.description
            hasBody := other.hasBody
            selfclosure := other.selfclosure
            if (other.isAppliedOccurrence) then {
                self.appliedOccurrence
            }
            self
        }
    }
}
def callNode is public = object {
    method new(receiver, parts) scope(s) {
        def result = new(receiver, parts)
        result.scope := s
        result
    }
    class new(receiver', parts') {
        // requested as callNode.new(receiver':AstNode, parts:Sequence⟦RequestPart⟧)
        // Represents a method request with arguments.

        inherit baseNode
        def kind is public = "call"
        var parts is public := parts'            // [ requestPart ]
        var generics is public := false
        var receiver is public := receiver'    // formerly `value`
        var isSelfRequest is public := false
        var isTailCall is public := false      // is possibly the result of a method
        var isFresh is public := false         // calls a fresh method
        var returnedObjectScope is public := fakeSymbolTable
                                               // the scope of the generated fresh object
        var cachedIdentifier := uninitialized
        var endPos is public := noPosition

        method end -> Position {
            if (endPos == noPosition) then {
                if (isRequestOfPrefixOperator) then {
                    receiver.end
                } else {
                    parts.last.end
                }
            } else {
                endPos
            }
        }
        method end:=(newPos) { endPos := newPos }
        method isRequestOfPrefixOperator { parts.first.name.startsWith "prefix" }
        method onSelf {
            // mark as a self-request.  Answers self for chaining.
            isSelfRequest := true
            self
        }

        method nameString {
            // the name of the method being requested, in numeric form
            parts.fold { acc, each -> acc ++ each.nameString } startingWith ""
        }

        method canonicalName {
            // the name of the method being requested, in underscore form
            parts.fold { acc, each -> acc ++ each.canonicalName }
                startingWith ""
        }

        method isCall { true }
        method returnsObject {
            isFresh
        }
        method arguments {
            def result = list [ ]
            for (parts) do { part ->
                for (part.args) do { arg -> result.push(arg) }
            }
            result
        }

        method argumentsDo(action) {
            for (parts) do { part ->
                for (part.args) do { arg -> action.apply(arg) }
            }
        }

        method numArgs {
            parts.fold { acc, part -> acc + part.args.size } startingWith 0
        }

        method numTypeArgs {
            if (false == generics) then { 0 } else { generics.size }
        }

        method hasTypeArgs { false ≠ generics }

        method accept(visitor : AstVisitor) from(ac) {
            if (visitor.visitCall(self) up(ac)) then {
                def newChain = ac.extend(self)
                self.receiver.accept(visitor) from(newChain)
                for (self.parts) do { part ->
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
        method map(blk) ancestors(ac) {
            var n := shallowCopy
            def newChain = ac.extend(n)
            n.receiver := receiver.map(blk) ancestors(newChain)
            n.parts := listMap(parts, blk) ancestors(newChain)
            n.generics := maybeListMap(generics, blk) ancestors(newChain)
            blk.apply(n, ac)
        }
        method pretty(depth) {
            def spc = "  " * (depth+1)
            var s := basePretty(depth)
            s := s ++ if (isSelfRequest) then { " on self\n" } else { "\n" }
            s := s ++ spc ++ "Receiver: {receiver.pretty(depth + 1)}\n"
            s := s ++ spc ++ "Method Name: {nameString}\n"
            if (false != generics) then {
                s := s ++ spc ++ "  Generics:\n"
                for (generics) do {g->
                    s := s ++ spc ++ "    " ++ g.pretty(depth + 2) ++ "\n"
                }
            }
            s := s ++ spc ++ "Parts:"
            for (self.parts) do { part ->
                s := s ++ "\n  " ++ spc ++ part.pretty(depth + 2)
            }
            s
        }
        method toGrace(depth : Number) -> String {
            if (isRequestOfPrefixOperator) then {
                def opSymbol = parts.first.name.substringFrom 7
                return "{opSymbol} {self.receiver.toGrace}"
            }
            var s := ""
            if ((receiver.isImplicit || receiver.isSelfOrOuter).not) then {
                if (receiver.isSimple) then {
                    s := "{receiver.toGrace (depth + 1)}."
                } else {
                    s := "({receiver.toGrace (depth + 1)})."
                }
            }
            parts.do { part -> s := s ++ part.toGrace(depth + 1) }
                separatedBy { s := s ++ " " }
            s
        }
        method asIdentifier {
            // make and return an identifiderNode for my request

            if (uninitialized == cachedIdentifier) then {
                if (scope.variety == "fake") then {
                    ProgrammingError.raise
                        "asIdentifier requested on {pretty 0} when scope was fake"
                }
                cachedIdentifier := identifierNode.new(nameString, false) scope (scope)
                cachedIdentifier.inRequest := true
                cachedIdentifier.line := parts.first.line
                cachedIdentifier.linePos := parts.first.linePos
                cachedIdentifier.canonicalName := canonicalName
                cachedIdentifier.end := end
            }
            cachedIdentifier
        }
        method asString { "call {toGrace}" }
        method shallowCopy {
            callNode.new(receiver, parts).shallowCopyFieldsFrom(self)
        }
        method postCopy(other) {
            isSelfRequest := other.isSelfRequest
            isTailCall := other.isTailCall
            isFresh := other.isFresh
            returnedObjectScope := other.returnedObjectScope
            endPos := other.endPos
            self
        }
        method statementName { "request" }
    }
}
def moduleNode is public = object {
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
        inherit objectNode.new(b, false)
            alias oNPostCopy(_) = postCopy(_)
        def kind is public = "module"
        def sourceLines = util.lines
        var theDialect is public := dialectNode.new "standard"
        theDialect.setStart(noPosition)     // dialect is implicit
        setStart(line 1 column 1)           // always starts at the start of the puput
        var imports is public := list.empty
        var directImports is public := list.empty

        method end -> Position {
            line (util.lines.size) column (util.lines.last.size)
        }
        method isModule { true }
        method isTrait { false }
        method returnsObject { false }
        method importsDo(action) {
            value.do { o ->
                if (o.isExternal) then { action.apply(o) }
            }
        }
        method accept(visitor : AstVisitor) from(ac) {
            if (visitor.visitModule(self) up(ac)) then {
                def newChain = ac.extend(self)
                theDialect.accept(visitor) from (newChain)
                if (false != superclass) then {
                    superclass.accept(visitor) from(newChain)
                }
                usedTraits.do { t -> t.accept(visitor) from(newChain) }
                value.do { x -> x.accept(visitor) from(newChain) }
            }
        }
        method map(blk) ancestors(ac) {
            var n := shallowCopy
            def newChain = ac.extend(n)
            n.theDialect := theDialect.map(blk) ancestors(newChain)
            n.value := listMap(value, blk) ancestors(newChain)
            n.superclass := maybeMap(superclass, blk) ancestors(newChain)
            n.usedTraits := listMap(usedTraits, blk) ancestors(newChain)
            blk.apply(n, ac)
        }
        method basePretty(depth) {
            def spc = "  " * (depth+1)
            prettyPrefix(depth) ++ "\n" ++
                "{spc}{theDialect.pretty 0}"
        }
        method shallowCopy {
            moduleNode.body(emptySeq).shallowCopyFieldsFrom(self)
        }
        method postCopy(other) {
            imports := other.imports
            directImports := other.directImports
            theDialect := other.theDialect
            // copy the fields of moduleNode

            oNPostCopy(other)
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
        inherit baseNode
        def kind is public = "object"
        var value is public := b
        var superclass is public := superclass'
        var usedTraits is public := list [ ]
        var name is public := "object"
        var inClass is public := false
        var inTrait is public := false
        var myLocalNames := false
        var annotations is public := list [ ]

        method end -> Position {
            if (value.isEmpty.not) then {
                return positionOfNext "}" after (value.last.end)
            }
            def iEnd = if (false == superclass) then { noPosition } else { superclass.end }
            def tEnd = if (usedTraits.isEmpty) then { noPosition } else { usedTraits.last.end }
            if (iEnd ≠ tEnd) then {
                positionOfNext "}" after (max(iEnd, tEnd))
            } else {
                positionOfNext "}" after (start)
            }
        }
        method description -> String {
            if (isTrait) then {
                "{kind} (is trait)"
            } elseif { inClass } then {
                "{kind} (in class)"
            } else {
                kind
            }
        }
        method isFresh { true }     // the epitome of freshness!
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

        method localNames -> Set⟦String⟧ {
            // answers the names of all of the methods defined directly in
            // this object.  Inherited names are _not_ included.
            if (false == myLocalNames) then {
                myLocalNames := set.empty
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

        method methodsAndTypesDo(action) {
            // iterate over my method and type declarations
            value.do { o ->
                if (o.isMethod || o.isTypeDec) then { action.apply(o) }
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
        method accept(visitor : AstVisitor) from(ac) {
            if (visitor.visitObject(self) up(ac)) then {
                def newChain = ac.extend(self)
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
        method map(blk) ancestors(ac) {
            var n := shallowCopy
            def newChain = ac.extend(n)
            n.value := listMap(value, blk) ancestors(newChain)
            n.superclass := maybeMap(superclass, blk) ancestors(newChain)
            n.usedTraits := listMap(usedTraits, blk) ancestors(newChain)
            blk.apply(n, ac)
        }
        method pretty(depth') {
            var depth := depth'
            def spc = "  " * (depth+1)
            var s := basePretty(depth)
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
            def spc = "    " * depth
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
        method postCopy(other) {
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
            kind ++ " " ++ nameString
        }
    }
}
def arrayNode is public = object {
  class new(values) {
    inherit baseNode
    def kind is public = "array"
    var value is public := values
    method isSequenceConstructor { true }
    method end -> Position {
        if (value.isEmpty) then {
            positionOfNext "]" after (start)
        } else {
            positionOfNext "]" after (value.last.end)
        }
    }
    method accept(visitor : AstVisitor) from(ac) {
        if (visitor.visitArray(self) up(ac)) then {
            def newChain = ac.extend(self)
            for (self.value) do { ax ->
                ax.accept(visitor) from(newChain)
            }
        }
    }
    method map(blk) ancestors(ac) {
        var n := shallowCopy
        def newChain = ac.extend(n)
        n.value := listMap(value, blk) ancestors(newChain)
        blk.apply(n, ac)
    }
    method pretty(depth) {
        def spc = "  " * (depth+1)
        var s := basePretty(depth)
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
class outerNode(nodes) {
    // references an object outside the current object.
    // nodes, a sequence of objectNodes, tells us which one.
    // The object that we refer to is the one OUTSIDE nodes.last
    inherit baseNode
    def kind is public = "outer"
    def theObjects is public = list.withAll(nodes)
    method numberOfLevels { theObjects.size }
    method asString { "‹object outside that at line {theObjects.last.line}›" }
    method pretty(depth) { basePretty(depth) ++ asString }
    method accept(visitor) from (ac) {
        visitor.visitOuter(self) up (ac)
        // don't visit theObject, since this would introduce a cycle
    }
    method toGrace(depth) {
        "outer" ++ (".outer" * (theObjects.size - 1))
    }
    method isOuter { true }
    method isSelfOrOuter { true }
    method shallowCopy {
        outerNode(theObjects).shallowCopyFieldsFrom(self)
    }
    method map (blk) ancestors (ac) {
        var nd := shallowCopy
        blk.apply(nd, ac)
    }
    def end is public = if (line == 0) then { noPosition } else {
        line (line) column (linePos + 4)
    }
}
def memberNode is public = object {
    method new(request, receiver) scope(s) {
        // Represents a dotted request ‹receiver›.‹request› with no arguments.
        def result = new(request, receiver)
        result.scope := s
        result
    }
    class new(request, receiver') {
        // Represents a dotted request ‹receiver›.‹request› with no arguments.
        inherit baseNode
        def kind is public = "member"
        var value:String is public := request
        var receiver is public := receiver'
        var generics is public := false
        var isSelfRequest is public := false
        var isTailCall is public := false      // is possibly the result of a method
        var isFresh is public := false         // calls a fresh method
        var returnedObjectScope is public := fakeSymbolTable
                                               // the scope of the generated fresh object
        method end -> Position {
            if (receiver.isImplicit) then {
                positionOfNext (request) after (start)
            } else {
                positionOfNext (request) after (receiver.end)
            }
        }
        method onSelf {
            isSelfRequest := true
            self
        }
        method withGenericArgs(gens) {
            generics := gens
            self
        }
        method reqStart is confidential {
            // the position of the start of the ‹request› in this ‹receiver›.‹request›
            if (receiver.isImplicit) then {
                start
            } else {
                def reqEnd = positionOfNext (request) after (receiver.end)
                line (reqEnd.line) column (reqEnd.column - request.size + 1)
            }
        }
        method nameString { value }
        method canonicalName { value }
        method isMember { true }
        method isCall { true }

        method parts { list.with(requestPart.request(nameString).setStart(reqStart)) }
        method arguments { emptySeq }
        method argumentsDo(action) { }
        method numArgs { 0 }
        method numTypeArgs {
            if (false == generics) then { 0 } else { generics.size }
        }
        method hasTypeArgs { false ≠ generics }

        method accept(visitor : AstVisitor) from(ac) {
            if (visitor.visitMember(self) up(ac)) then {
                def newChain = ac.extend(self)
                if (false != generics) then {
                    generics.do { each -> each.accept(visitor) from(newChain) }
                }
                receiver.accept(visitor) from(newChain)
            }
        }
        method isSelfOrOuter {
            receiver.isSelfOrOuter
        }
        method map(blk) ancestors(ac) {
            var n := shallowCopy
            def newChain = ac.extend(n)
            n.receiver := receiver.map(blk) ancestors(newChain)
            n.generics := maybeListMap(generics, blk) ancestors(newChain)
            blk.apply(n, ac)
        }
        method pretty(depth) {
            def spc = "  " * (depth+1)
            var s := basePretty(depth)
            s := s ++ if (isSelfRequest) then { " on self\n" } else { "\n" }
            s := s ++ spc ++ "Receiver: " ++ receiver.pretty(depth) ++ "\n"
            s := s ++ spc ++ "Method Name: " ++ parts.first.pretty(depth)
            if (false != generics) then {
                s := s ++ "\n" ++ spc ++ "Generics:"
                for (generics) do {g->
                    s := s ++ "\n" ++ spc ++ "  " ++ g.pretty(depth+1)
                }
            }
            s
        }
        method toGrace(depth : Number) -> String {
            var s := ""
            if ((receiver.isImplicit || receiver.isSelfOrOuter).not) then {
                s := receiver.toGrace(depth) ++ "."
            }
            s := s ++ self.value
            if (false != generics) then {
                s := s ++ "⟦"
                for (1..(generics.size - 1)) do {ix ->
                    s := s ++ generics.at(ix).toGrace(depth + 1) ++ ", "
                }
                s := s ++ generics.last.toGrace(depth + 1) ++ "⟧"
            }
            s
        }
        method asString { toGrace }
        method asIdentifier {
            // make and return an identifiderNode for my request
            if (scope.variety == "fake") then {
                ProgrammingError.raise "asIdentifier requested on {toGrace} when scope was fake"
            }
            def resultNode = identifierNode.new (nameString, false) scope (scope)
            resultNode.inRequest := true
            resultNode.line := line
            resultNode.linePos := linePos
            return resultNode
        }
        method shallowCopy {
            memberNode.new(nameString, receiver).shallowCopyFieldsFrom(self)
        }
        method statementName { "expression" }
        method postCopy(other) {
            generics := other.generics
            isSelfRequest := other.isSelfRequest
            isTailCall := other.isTailCall
            isFresh := other.isFresh
            returnedObjectScope := other.returnedObjectScope
            self
        }
    }
}
def genericNode is public = object {
  class new(base, arguments) {
    // represents an application of a parameterized type to some arguments.
    inherit baseNode
    def kind is public = "generic"
    var value is public := base
        // in a generic application, `value` is the applied type
        // e.g. in List⟦Number⟧, value is Identifier‹List›
    var args is public := arguments
    method end -> Position { positionOfNext "⟧" after (args.last.end) }
    method nameString { value.nameString }
    method asString { toGrace }
    method accept(visitor : AstVisitor) from(ac) {
        if (visitor.visitGeneric(self) up(ac)) then {
            def newChain = ac.extend(self)
            self.value.accept(visitor) from(newChain)
            for (self.args) do { p ->
                p.accept(visitor) from(newChain)
            }
        }
    }
    method map(blk) ancestors(ac) {
        var n := shallowCopy
        def newChain = ac.extend(n)
        n.value := value.map(blk) ancestors(newChain)
        n.args := listMap(args, blk) ancestors(newChain)
        blk.apply(n, ac)
    }
    method pretty(depth) {
        var s := "{basePretty(depth)}({value.pretty(depth)})⟦"
        args.do { each -> s := s ++ each.pretty(depth+2) }
            separatedBy { s := s ++ ", " }
        s ++ "⟧"
    }
    method toGrace(depth : Number) -> String {
        var s := nameString ++ "⟦"
        args.do { each -> s := s ++ each.toGrace(0) }
            separatedBy { s := s ++ ", " }
        s ++ "⟧"
    }
    method shallowCopy {
        genericNode.new(value, args).shallowCopyFieldsFrom(self)
    }
  }
}

class typeParametersNode(params') whereClauses (conditions) {
    inherit baseNode
    def kind is public = "typeparams"
    var params is public := params'
    var whereClauses is public := conditions
    method asString { toGrace }
    method declarationKindWithAncestors(ac) { k.typeparam }
    once method end -> Position {
        if (whereClauses.isEmpty) then {
            positionOfNext "⟧" after (params.last.end)
        } else {
            positionOfNext "⟧" after (whereClauses.last.end)
        }
    }

    method accept(visitor : AstVisitor) from(ac) {
        if (visitor.visitTypeParameters(self) up(ac)) then {
            def newChain = ac.extend(self)
            params.do { p ->
                p.accept(visitor) from(newChain)
            }
            whereClauses.do { w ->
                w.accept(visitor) from(newChain)
            }
        }
    }
    method do(blk) {
        params.do(blk)
    }
    method do(blk) separatedBy (sepBlk) {
        params.do(blk) separatedBy (sepBlk)
    }
    method size { params.size }
    method last { params.last }
    method map(blk) ancestors(ac) {
        var n := shallowCopy
        def newChain = ac.extend(n)
        n.params := listMap(params, blk) ancestors(newChain)
        blk.apply(n, ac)
    }
    method pretty(depth) {
        def spc = "  " * (depth+1)
        var s := spc ++ basePretty(depth) ++ "⟦"
        params.do { each -> s := s ++ each.pretty(depth+2) }
            separatedBy { s := s ++ ", " }
        s ++ "⟧"
    }
    method toGrace(depth:Number) -> String {
        var s := "⟦"
        params.do { each -> s := "{s}{each.toGrace(depth)}" }
            separatedBy { s := s ++ ", " }
        s ++ "⟧"
    }
    method postCopy(other) {
        params := other.params
        whereClauses := other.whereClauses
        self
    }
    method shallowCopy {
        typeParametersNode(emptySeq) whereClauses(emptySeq).shallowCopyFieldsFrom(self)
    }
}
def identifierNode is public = object {

    method new(name, dtype) scope(s) {
        def result = new(name, dtype)
        result.scope := s
        result
    }

    var wildcardCount := 0
    method wildcard(dtype) {
        wildcardCount := wildcardCount + 1
        def idNode = new("__{wildcardCount}", dtype)
        idNode.wildcard := true
        idNode.end := line (idNode.line) column (idNode.linePos)
        idNode
    }

    method prelude {
        new("prelude", false)
    }

    class new(name', dtype') {
        inherit baseNode
        def kind is public = "identifier"
        var value is public := name'
        var wildcard is public := false
        var dtype is public := dtype'
        var isBindingOccurrence is public := false
        var isAssigned is public := false
        var inRequest is public := false
        var generics is public := false
        var isDeclaredByParent is public := false
        var variable is public := "not yet bound"   // the variable for this id
        var end:Position is public := if (line ≠ 0) then {
            line (line) column (linePos + value.size - 1)
        } else {
            line (line) column (linePos-1)
        }

        method bindingOccurrence { isBindingOccurrence := true }
        method appliedOccurrence { isBindingOccurrence := false }

        method name { value }
        method name:=(nu) {
            value := nu
            end := line (line) column (linePos + nu.size - 1)
        }
        method nameString { value }
        var canonicalName is public := value
        method quoted { value.quoted }
        method isIdentifier { true }

        method isSelf { "self" == value }
        method isSuper { "super" == value }
        method isBuiltIn { "$builtIn" == value }
        method isOuter {
            if ("outer" == value) then { return true }
            if ("$module" == value) then { return true }
            if ("$dialect" == value) then { return true }
            return false
        }
        method isSelfOrOuter {
            if (isSelf) then { return true }
            if (isOuter) then { return true }
            return false
        }
        method isAppliedOccurrence {
            if (wildcard) then {
                false
            } else {
                isBindingOccurrence.not
            }
        }
        method declarationKindWithAncestors(ac) {
            ac.parent.declarationKindWithAncestors(ac)
        }
        method inTypePositionWithAncestors(ac) {
            // am I used by my parent node as a type?
            // This is a hack, used as a subsitute for having information in the .gct
            // telling us which identifiers represent types
            if (ac.isEmpty) then { return false }
            ac.parent.usesAsType(self)
        }
        method usesAsType(aNode) {
            aNode == dtype
        }
        method numTypeArgs {
            if (false == generics) then { 0 } else { generics.size }
        }
        method hasTypeArgs { false ≠ generics }
        method accept(visitor : AstVisitor) from(ac) {
            if (visitor.visitIdentifier(self) up(ac)) then {
                def newChain = ac.extend(self)
                if (false != self.dtype) then {
                    self.dtype.accept(visitor) from(newChain)
                }
                if (false != generics) then {
                    generics.do { each -> each.accept(visitor) from(newChain) }
                }
            }
        }
        method map(blk) ancestors(ac) {
            var n := shallowCopy
            def newChain = ac.extend(n)
            n.dtype := maybeMap(dtype, blk) ancestors(newChain)
            n.generics := maybeListMap(generics, blk) ancestors(newChain)
            blk.apply(n, ac)
        }
        method pretty(depth) {
            def spc = "  " * (depth+1)
            var s := basePretty(depth)
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
            if (false ≠ generics) then {
                s := s ++ "⟦"
                for (1..(generics.size - 1)) do {ix ->
                    s := s ++ generics.at(ix).toGrace(depth + 1) ++ ", "
                }
                s := s ++ generics.last.toGrace(depth + 1) ++ "⟧"
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
            identifierNode.new(value, dtype).shallowCopyFieldsFrom(self)
        }
        method postCopy(other) {
            wildcard := other.wildcard
            isBindingOccurrence := other.isBindingOccurrence
            isDeclaredByParent := other.isDeclaredByParent
            isAssigned := other.isAssigned
            inRequest := other.inRequest
            isDeclaredByParent := other.isDeclaredByParent
            generics := other.generics
            end := other.end
            canonicalName := other.canonicalName
            self
        }
        method statementName { "expression" }
    }
}

def typeType is public = identifierNode.new("Type", false)
def unknownType is public = identifierNode.new("Unknown", typeType)

def stringNode is public = object {
    method new(v) scope(s) {
        def result = new(v)
        result.scope := s
        result
    }

    class new(v) {
        inherit baseNode
        def kind is public = "string"
        var value is public := v
        var end is public := line (line) column (linePos + v.size + 1)
            // +1 to allow for quotes

        method accept(visitor : AstVisitor) from(ac) {
            visitor.visitString(self) up(ac)
        }
        method map(blk) ancestors(ac) {
            var n := shallowCopy
            def newChain = ac.extend(n)
            blk.apply(n, ac)
        }
        method pretty(depth) {
            "{basePretty(depth)}({self.value})"
        }
        method toGrace(depth : Number) -> String {
            def q = "\""
            q ++ value.quoted ++ q
        }
        method asString { "string {toGrace}" }
        method shallowCopy {
            stringNode.new(value).shallowCopyFieldsFrom(self)
        }
        method postCopy(other) {
            end := other.end
            self
        }
        method statementName { "expression" }
        method isDelimited { true }
        method isConstant { true }
    }
}
def numNode is public = object {
    class new(val) {
        inherit baseNode
        def kind is public = "num"
        var value is public := val
        method accept(visitor : AstVisitor) from(ac) {
            visitor.visitNum(self) up(ac)
        }
        method map(blk) ancestors(ac) {
            var n := shallowCopy
            def newChain = ac.extend(n)
            blk.apply(n, ac)
        }
        method pretty(depth) {
            "{basePretty(depth)}({self.value})"
        }
        method toGrace(depth : Number) -> String {
            self.value.asString
        }
        method asString { "num {value}" }
        method shallowCopy {
            numNode.new(value).shallowCopyFieldsFrom(self)
        }
        method statementName { "expression" }
        method isDelimited { true }
        method isConstant { true }
    }
}
def opNode is public = object {
  class new(op, l, r) {
    inherit baseNode
    def kind is public = "op"
    def value is public = op     // a String
    var left is public := l
    var right is public := r
    var generics is public := false
    var isTailCall is public := false      // is possibly the result of a method
    var isSelfRequest is public := false

    method start -> Position { left.start }
    method end -> Position { right.end }
    method onSelf {
        isSelfRequest := true
        self
    }
    method opPos is confidential {
        // the position of the start of the ‹op› in this ‹left› ‹op› ‹right›
        positionOfNext (value) after (left.end)
    }
    method isSimple { false }    // needs parens when used as receiver
    method nameString { value ++ "(1)" }
    method canonicalName { value ++ "(_)" }
    method receiver { left }
    method isCall { true }

    method parts {
        list.with(requestPart.request (value) withArgs [right] .setStart(opPos))
    }
    method arguments { [ right ] }
    method argumentsDo(action) { action.apply(right) }
    method numArgs { 1 }
    method numTypeArgs { 0 }

    method accept(visitor : AstVisitor) from(ac) {
        if (visitor.visitOp(self) up(ac)) then {
            def newChain = ac.extend(self)
            self.left.accept(visitor) from(newChain)
            self.right.accept(visitor) from(newChain)
        }
    }
    method map(blk) ancestors(ac) {
        var n := shallowCopy
        def newChain = ac.extend(n)
        n.left := left.map(blk) ancestors(newChain)
        n.right := right.map(blk) ancestors(newChain)
        blk.apply(n, ac)
    }
    method pretty(depth) {
        def spc = "  " * (depth+1)
        var s := "{basePretty(depth)}‹{self.nameString}›"
        s := s ++ "\n"
        s := s ++ spc ++ self.left.pretty(depth + 1)
        s := s ++ "\n"
        s := s ++ spc ++ self.right.pretty(depth + 1)
        s
    }
    method toGrace(depth : Number) -> String {
        var s := ""
        if ((self.left.kind == "op") && {self.left.value != self.value}) then {
            s := "(" ++ self.left.toGrace(0) ++ ")"
        } else {
            s := self.left.toGrace(0)
        }
        if (self.value == "..") then {
            s := s ++ self.value
        } else {
            s := s ++ " " ++ self.value ++ " "
        }
        if ((self.right.kind == "op") && {self.right.value != self.value}) then {
            s := s ++ "(" ++ self.right.toGrace(0) ++ ")"
        } else {
            s := s ++ self.right.toGrace(0)
        }
        s
    }
    method asIdentifier {
        // make an identifiderNode with the same properties ac me
        def resultNode = identifierNode.new (nameString, false) scope (scope)
        resultNode.inRequest := true
        resultNode.line := line
        resultNode.linePos := linePos
        resultNode.canonicalName := canonicalName
        return resultNode
    }
    method shallowCopy {
        opNode.new(value, nullNode, nullNode).shallowCopyFieldsFrom(self)
    }
    method postCopy(other) {
        isTailCall := other.isTailCall
        isSelfRequest := other.isSelfRequest
        self
    }
  }
}
def bindNode is public = object {
  class new(dest', val') {
    // an assignment, or a request of a setter-method
    inherit baseNode
    def kind is public = "bind"
    var dest is public := dest'
    var value is public := val'

    method end -> Position { value.end }
    method nameString { dest.nameString ++ ":=(1)" }
    method canonicalName { dest.nameString ++ ":=(_)" }
    method isBind { true }
    method asString { "bind {value}" }
    method accept(visitor : AstVisitor) from(ac) {
        if (visitor.visitBind(self) up(ac)) then {
            def newChain = ac.extend(self)
            self.dest.accept(visitor) from(newChain)
            self.value.accept(visitor) from(newChain)
        }
    }
    method generics { false }   // an assignable variable can't have type params.
                                // But perhaps a writer method can?
    method map(blk) ancestors(ac) {
        var n := shallowCopy
        def newChain = ac.extend(n)
        n.dest := dest.map(blk) ancestors(newChain)
        n.value := value.map(blk) ancestors(newChain)
        blk.apply(n, ac)
    }
    method pretty(depth) {
        def spc = "  " * (depth+1)
        var s := basePretty(depth) ++ "\n"
        s := s ++ spc ++ self.dest.pretty(depth + 1)
        s := s ++ "\n"
        s := s ++ spc ++ self.value.pretty(depth + 1)
        s
    }
    method toGrace(depth : Number) -> String {
        def spc = "    " * depth
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
class declarationNode(identifier, val, declaredType) {
    // an abstract superclass for declarations

    inherit baseNode

    var name is public := identifier
    var value is public := val
    var dtype is public := declaredType
    var parentKind is public := "unset"
    def nameString is public = identifier.nameString
    var annotations is public := list [ ]
    var variable is public := "not yet bound"

    method isFieldDec { true }
    method isAnnotationDecl { hasAnnotation "annotation" }
    method isMarkerDeclaration { isAnnotationDecl }
    method end -> Position {
        if (false ≠ value) then { return value.end }
        if (annotations.isEmpty.not) then { return annotations.last.end }
        if (false ≠ dtype) then { return dtype.end }
        return name.end
    }
    method usesAsType(aNode) {
        aNode == dtype
    }
}

def defDecNode is public = object {
    method new(name', val, dtype') scope(s) {
        def result = new(name', val, dtype')
        result.scope := s
        result
    }

    class new(name', val, dtype') {
        inherit declarationNode(name', val, dtype')

        def kind is public = "defdec"

        method isPublic {
            // defs are confidential by default
            if (hasAnnotation "public") then { return true }
            hasAnnotation "readable"
        }
        method isWritable { false }
        method isReadable { isPublic }
        method declarationKindWithAncestors(ac) { k.defdec }
        method returnsObject { value.returnsObject }    // a call to a fresh method, or an object constructor
        method returnedObjectScope {
            // precondition: returnsObject
            value.returnedObjectScope
        }
        method accept(visitor : AstVisitor) from(ac) {
            if (visitor.visitDefDec(self) up(ac)) then {
                def newChain = ac.extend(self)
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
        method map(blk) ancestors(ac) {
            var n := shallowCopy
            def newChain = ac.extend(n)
            n.name := name.map(blk) ancestors(newChain)
            n.value := value.map(blk) ancestors(newChain)
            n.dtype := maybeMap(dtype, blk) ancestors(newChain)
            n.annotations := listMap(annotations, blk) ancestors(newChain)
            blk.apply(n, ac)
        }
        method pretty(depth) {
            def spc = "  " * (depth+1)
            var s := basePretty(depth) ++ "\n"
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
            def spc = "    " * depth
            var s := "def {self.name.toGrace(0)}"
            if ((false != self.dtype) && { self.dtype.value != "Unknown" }) then {
                s := s ++ " : " ++ self.dtype.toGrace(0)
            }
            if (self.annotations.size > 0) then {
                s := s ++ " is "
                s := s ++ self.annotations.fold { a,b ->
                    if (a != "") then { a ++ ", " } else { "" } ++ b.toGrace(0)
                } startingWith ""
            }
            if (false != self.value) then {
                s := s ++ " = " ++ self.value.toGrace(depth)
            }
            s
        }
        method shallowCopy {
            defDecNode.new(name, value, dtype).shallowCopyFieldsFrom(self)
        }
        method postCopy(other) {
            parentKind := other.parentKind
            self
        }
        method statementName { "definition" }
    }
}
def varDecNode is public = object {
    class new(name', val, dtype') {
        inherit declarationNode(name', val, dtype')

        def kind is public = "vardec"

        method isPublic {
            // vars are confidential by default
            hasAnnotation "public"
        }
        method isWritable {
            if (hasAnnotation "public") then { return true }
            if (hasAnnotation "writable") then { return true }
            false
        }
        method isReadable {
            if (hasAnnotation "public") then { return true }
            if (hasAnnotation "readable") then { return true }
            false
        }
        method declarationKindWithAncestors(ac) { k.vardec }

        method accept(visitor : AstVisitor) from(ac) {
            if (visitor.visitVarDec(self) up(ac)) then {
                def newChain = ac.extend(self)
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
        method map(blk) ancestors(ac) {
            var n := shallowCopy
            def newChain = ac.extend(n)
            n.name := name.map(blk) ancestors(newChain)
            n.value := maybeMap(value, blk) ancestors(newChain)
            n.dtype := maybeMap(dtype, blk) ancestors(newChain)
            n.annotations := listMap(annotations, blk) ancestors(newChain)
            blk.apply(n, ac)
        }
        method pretty(depth) {
            def spc = "  " * (depth+1)
            var s := basePretty(depth) ++ "\n"
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
            def spc = "    " * depth
            var s := "var {self.name.toGrace(0)}"
            if ((false != self.dtype) && {
                    self.dtype.value != "Unknown"
            }) then {
                s := s ++ " : " ++ self.dtype.toGrace(0)
            }
            if (self.annotations.size > 0) then {
                s := s ++ " is "
                s := s ++ self.annotations.fold { a,b ->
                    if (a != "") then { a ++ ", " } else { "" } ++ b.toGrace(0)
                } startingWith ""
            }
            if (false != self.value) then {
                s := s ++ " := " ++ self.value.toGrace(depth)
            }
            s
        }
        method shallowCopy {
            varDecNode.new(name, value, dtype).shallowCopyFieldsFrom(self)
        }
        method postCopy(other) {
            parentKind := other.parentKind
            self
        }
        method statementName { "variable declaration" }
    }
}
def importNode is public = object {
  class new(path', name', dtype') {
    inherit baseNode
    def kind is public = "import"
    var value is public := name'
    var path is public := path'
    var annotations is public := list [ ]
    var dtype is public := dtype'
    method end -> Position { value.end }
    method isImport { true }
    method isExternal { true }
    method isExecutable { false }
    method name { value }
    method nameString { value.nameString }
    method isPublic {
        // imports, like defs, are confidential by default
        if (hasAnnotation "public") then { return true }
        hasAnnotation "readable"
    }
    once method moduleName { withoutLeadingComponents(path) }
    method isWritable { false }
    method isReadable { isPublic }
    method declarationKindWithAncestors(ac) { k.importdec }
    method usesAsType(aNode) {
        aNode == dtype
    }
    method accept(visitor : AstVisitor) from(ac) {
        if (visitor.visitImport(self) up(ac)) then {
            def newChain = ac.extend(self)
            for (self.annotations) do { ann ->
                ann.accept(visitor) from(newChain)
            }
            self.value.accept(visitor) from(newChain)
            if (false != self.dtype) then {
                self.dtype.accept(visitor) from(newChain)
            }
        }
    }
    method map(blk) ancestors(ac) {
        var n := shallowCopy
        def newChain = ac.extend(n)
        n.value := value.map(blk) ancestors(newChain)
        n.dtype := maybeMap(dtype, blk) ancestors(newChain)
        n.annotations := listMap(annotations, blk) ancestors(newChain)
        blk.apply(n, ac)
    }
    method pretty(depth) {
        def spc = "  " * (depth+1)
        var s := basePretty(depth) ++ "\n"
        s := s ++ "{spc}Path: {path}\n"
        s := s ++ "{spc}Identifier: {value}\n"
        if (annotations.size > 0) then {
            s := s ++ "{spc}Anotations: {annotations}\n"
        }
        s
    }
    method toGrace(depth : Number) -> String {
        "import \"{self.path}\" ac {nameString}"
    }
    method shallowCopy {
        importNode.new(path, nullNode, false).shallowCopyFieldsFrom(self)
    }
    method postCopy(other) {
        annotations := other.annotations
        self
    }
  }
}
def dialectNode is public = object {
  method fromStringNode(s) {
    def result = new(s.value)
    result.end := s.end
    result
  }
  class new(pathString) {
    inherit baseNode
    def kind is public = "dialect"
    var value is public := pathString
    var end is public := noPosition

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
    method accept(visitor : AstVisitor) from(ac) {
        visitor.visitDialect(self) up(ac)
    }
    method map(blk) ancestors(ac) {
        var n := shallowCopy
        def newChain = ac.extend(n)
        blk.apply(n, ac)
    }
    method pretty(depth) {
        def spc = "  " * (depth+1)
        var s := basePretty(depth) ++ "\n"
        s := s ++ "{spc}    Path: {self.value}"
        s
    }
    method toGrace(depth : Number) -> String {
        "dialect \"{self.value}\""
    }
    method shallowCopy {
        dialectNode.new(value).shallowCopyFieldsFrom(self)
    }
    method postCopy(other) {
        end := other.end
        self
    }
  }
}
def returnNode is public = object {
  class new(expr) {
    inherit baseNode
    def kind is public = "return"
    var value is public := expr
    var dtype is public := false  // the enclosing method's declared return type

    method end -> Position {
        if (noPosition ≠ value.end) then {
            value.end
        } else {
            line (line) column (linePos + 5)
        }
    }
    method isReturn { true }
    method accept(visitor : AstVisitor) from(ac) {
        if (visitor.visitReturn(self) up(ac)) then {
            def newChain = ac.extend(self)
            self.value.accept(visitor) from(newChain)
        }
    }
    method map(blk) ancestors(ac) {
        var n := shallowCopy
        def newChain = ac.extend(n)
        n.value := value.map(blk) ancestors(newChain)
        n.dtype := maybeMap(dtype, blk) ancestors(newChain)
        blk.apply(n, ac)
    }
    method pretty(depth) {
        def spc = "  " * (depth+1)
        var s := basePretty(depth) ++ "\n"
        s := s ++ spc ++ self.value.pretty(depth + 1)
        if (false ≠ dtype) then { s := "{s} (type {dtype.toGrace})" }
        s
    }
    method toGrace(depth : Number) -> String {
        "return " ++ self.value.toGrace(depth)
    }
    method shallowCopy {
        returnNode.new(value).shallowCopyFieldsFrom(self)
    }
    method postCopy(other) {
        dtype := other.dtype
        self
    }
    method returnsObject { value.returnsObject }
    method returnedObjectScope {
        // precondition: returns object
        value.returnedObjectScope
    }
    method resultExpression { value }
  }
}
def inheritNode is public = object {
    method new(expr) scope(s) {
        def result = new(expr)
        result.scope := s
        result
    }
    class new(expr) {
        inherit baseNode
        def kind is public = "inherit"
        var value is public := expr
        var providedNames is public := set.empty
        var aliases is public := list [ ]
        var exclusions is public := list [ ]
        var isUse is public := false  // this is a `use trait` clause, not an inherit

        method end -> Position { value.end }
        method isLegalInTrait { isUse }
        method isInherits { true }
        method inheritFromMember { value.isMember }
        method inheritFromCall { value.isCall }
        method isExecutable { false }
        method accept(visitor : AstVisitor) from(ac) {
            if (visitor.visitInherits(self) up(ac)) then {
                def newChain = ac.extend(self)
                value.accept(visitor) from(newChain)
                aliases.do { a -> a.accept(visitor) from(newChain) }
                exclusions.do { e -> e.accept(visitor) from(newChain) }
            }
        }
        method declarationKindWithAncestors(ac) {
            // identifiers declared in an inherit statement are aliases for
            // methods.  We treat them ac methods, because (unlike inherited names)
            // they can't be overridden by local methods.
            k.methdec
        }
        method map(blk) ancestors(ac) {
            var n := shallowCopy
            def newChain = ac.extend(n)
            n.value := value.map(blk) ancestors(newChain)
            blk.apply(n, ac)
        }
        method pretty(depth) {
            def spc = "  " * (depth+1)
            var s := basePretty(depth)
            if (isUse) then { s := "{s} (use)" }
            s := s ++ "\n" ++ spc ++ self.value.pretty(depth + 1)
            aliases.do { a ->
                s := "{s}\n{a.pretty(depth + 1)}"
            }
            if (exclusions.isEmpty.not) then {
                s := "{s}\n{spc}  exclusions:"
            }
            exclusions.do { e ->
                s := "{s}\n{spc}    {e.pretty(depth + 2)}"
            }
            if (providedNames.isEmpty.not) then {
                s := s ++ "\n{spc}Provided names: {list.withAll(providedNames).sort}"
            }
            s
        }
        method toGrace(depth : Number) -> String {
            var s := ""
            repeat (depth) times {
                s := s ++ "    "
            }
            s := s ++ if (isUse) then { "use " } else { "inherit " }
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
            if (isUse) then { "use " } else { "inherit " } ++ value.toGrace
        }
        method nameString { value.toGrace(0) }
        method addAlias (newSig) for (oldSig) {
            aliases.push(aliasNew(newSig) old(oldSig))
        }
        method addExclusion(meth) {
            exclusions.push(meth)
        }
        method shallowCopy {
            inheritNode.new(nullNode).shallowCopyFieldsFrom(self)
        }
        method postCopy(other) {
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
    newSignature
    oldSignature
}

class aliasNew(n) old(o) {
    inherit baseNode
    use equality

    def newSignature is public = n
    def oldSignature is public = o
    def kind is public = "alias"
    method newName {newSignature.asIdentifier}
    method oldName {oldSignature.asIdentifier}
    method asString { "alias {newSignature.nameString} = {oldSignature.nameString}" }
    method pretty(depth) {
        def spc = "  " * (depth+1)
        "{spc}alias\n{spc}  {newSignature.pretty(depth+2)}\n{spc}  =\n{spc}  {oldSignature.pretty(depth+2)}"
    }
    method accept(visitor) from (ac) {
        if (visitor.visitAlias(self) up (ac)) then {
            def newChain = ac.extend(self)
            newSignature.accept(visitor) from (newChain)
            oldSignature.accept(visitor) from (newChain)
        }
    }
    method declarationKindWithAncestors(ac) {
        k.aliasdec
    }
    method hash { (newSignature.hash * 1171) + oldSignature.hash }
    method isExecutable { false }
    method == (other) {
        match (other) case { that:AliasPair ->
            (newSignature == that.newSignature) && (oldSignature == that.oldSignature)
        } else {
            false
        }
    }
}
def signaturePart is public = object {
    method new {
        partName "" params (list [])
    }
    method partName(n) scope(s) {
        def result = partName(n) params (list [])
        result.scope := s
        result
    }
    method partName(n) params(ps) scope(s) {
        def result = partName(n) params(ps)
        result.scope := s
        result
    }
    method partName(n) {
        partName(n) params (list [])
    }
    class partName(n) params(ps) {
        inherit baseNode
        def kind is public = "signaturepart"
        var name is public := n
        var params is public := ps
        var typeParams is public := false
        var lineLength is public := 0

        method end -> Position {
            if (params.isEmpty.not) then {
                return positionOfNext ")" after (params.last.end)
            }
            if (false ≠ typeParams) then {
                return positionOfNext "⟧" after (typeParams.last.end)
            }
            return line (line) column (linePos + name.size - 1)
        }
        method hasTypeParams { false ≠ typeParams }
        method numTypeParams { if (hasTypeParams) then {typeParams.size} else {0} }
        method numParams { params.size }
        method nameString {
            if (params.isEmpty) then {return name}
            name ++ "(" ++ params.size ++ ")"
        }
        method canonicalName {
            if (params.isEmpty) then {return name}
            var underScores := ""
            params.do { _ -> underScores := underScores ++ "_" }
                separatedBy { underScores := underScores ++ "," }
            name ++ "(" ++ underScores ++ ")"
        }

        method accept(visitor : AstVisitor) from(ac) {
            if (visitor.visitSignaturePart(self) up(ac)) then {
                def newChain = ac.extend(self)
                if (false != typeParams) then {
                    typeParams.accept(visitor) from(newChain)
                }
                params.do { p -> p.accept(visitor) from(newChain) }

            }
        }
        method declarationKindWithAncestors(ac) { k.parameter }
        method map(blk) ancestors(ac) {
            var nd := shallowCopy
            def newChain = ac.extend(nd)
            nd.params := listMap(params, blk) ancestors(newChain)
            nd.typeParams := maybeMap(typeParams, blk) ancestors(newChain)
            blk.apply(nd, ac)
        }
        method pretty(depth) {
            def spc = "  " * (depth+1)
            var s := "{basePretty(depth)}: {name}"
            if (hasTypeParams) then {
                s := "{s}\n{spc}Type Parameters:"
                typeParams.do { tp ->
                    s := "{s}\n  {spc}{tp.pretty(depth + 2)}"
                }
            }
            if (params.isEmpty.not) then { s := "{s}\n{spc}Parameters:" }
            for (params) do { p ->
                s := "{s}\n  {spc}{p.pretty(depth + 2)}"
            }
            s
        }
        method toGrace(depth) {
            var s := name
            if (false ≠ typeParams) then {
                s := s ++ typeParams.toGrace(depth + 1)
            }
            if (params.isEmpty.not) then {
                s := s ++ "("
                params.do { each ->
                    s := s ++ each.toGrace(depth + 1)
                    if (false ≠ each.dtype) then {
                        s := s ++ ":" ++ each.dtype.toGrace(depth + 1)
                    }
                } separatedBy { s := s ++ ", " }
                s := s ++ ")"
            }
            s
        }
        method shallowCopy {
            signaturePart.partName(name) params(params)
                .shallowCopyFieldsFrom(self)
        }
        method postCopy(other) {
            typeParams := other.typeParams
            lineLength := other.lineLength
            self
        }
        method asString {
            "part: {nameString}"
        }
    }
}

def requestPart is public = object {
    method new { request "" withArgs [] }
    method request(name) { request(name) withArgs [] }
    method request(name) withArgs(argList) scope (s) {
        def result = request(name) withArgs(argList)
        result.scope := s
        result
    }
    class request(rPart) withArgs(xs) {
        inherit baseNode
        def kind is public = "callwithpart"
        var name is public := rPart
        var args is public := xs
        var typeArgs := emptySeq
        var lineLength is public := 0

        method end -> Position {
            if (args.isEmpty.not) then {
                return args.last.end  // there may or may not be a following `)`
            }
            if (typeArgs.isEmpty.not) then {
                return positionOfNext "⟧" after (typeArgs.last.end)
            }
            return line (line) column (linePos + name.size - 1)
        }
        method nameString {
            if (args.size == 0) then {return name}
            name ++ "(" ++ args.size ++ ")"
        }

        method canonicalName {
            if (args.size == 0) then {return name}
            var underScores := ""
            args.do { _ -> underScores := underScores ++ "_" }
                separatedBy { underScores := underScores ++ "," }
            name ++ "(" ++ underScores ++ ")"
        }

        method map(blk) ancestors(ac) {
            var n := shallowCopy
            def newChain = ac.extend(n)
            n.args := listMap(args, blk) ancestors(newChain)
            blk.apply(n, ac)
        }
        method pretty(depth) {
            def spc = "  " * (depth+1)
            var s := "{basePretty(depth)}: {name}"
            s := "{s}\n{spc}Args:"
            for (args) do { a ->
                s := "{s}\n  {spc}{a.pretty(depth + 3)}"
            }
            s
        }
        method toGrace(depth) {
            var s := name
            if (typeArgs.size > 0) then {
                s := s ++ "⟦"
                typeArgs.do { tArg ->
                    s := s ++ tArg.toGrace(depth + 1)
                } separatedBy { s := s ++ ", " }
                s := s ++ "⟧"
            }
            if (args.size > 0) then {
                def needsParens = (args.size > 1) || (args.first.isDelimited.not)
                s := s ++ if (needsParens) then { "(" } else { " " }
                args.do { arg ->
                    s := s ++ arg.toGrace(depth)
                } separatedBy {
                    s := s ++ ", "
                }
                if (needsParens) then { s := s ++ ")" }
            }
            s
        }

        method shallowCopy {
            requestPart.request(name) withArgs(args).shallowCopyFieldsFrom(self)
        }
        method postCopy(other) {
            lineLength := other.lineLength
            self
        }
        method statementName { "request" }
    }
}

def commentNode is public = object {
    class new(val') {
        inherit baseNode
        def kind is public = "comment"
        var value is public := val'
        var isPartialLine:Boolean is public := false
        var isPreceededByBlankLine is public := false
        var endLine is public := util.linenum

        method end -> Position { line (endLine) column (util.lines.at(endLine).size) }
        method isComment { true }
        method isLegalInTrait { true }
        method isExecutable { false }
        method asString { "comment ({line}–{endLine}): {value}" }
        method extendCommentUsing(cmtNode) {
            value := value ++ " " ++ cmtNode.value
            endLine := cmtNode.endLine
        }
        method map(blk) ancestors(ac) {
            var n := shallowCopy
            def newChain = ac.extend(n)
            blk.apply(n, ac)
        }
        method accept(visitor : AstVisitor) from(ac) {
            visitor.visitComment(self) up(ac)
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
                def spc = "    " * depth
                wrap(value) to (lineLength) prefixedBy (spc ++ "// ")
            }
        }
        method shallowCopy {
            commentNode.new(nullNode).shallowCopyFieldsFrom(self)
        }
        method postCopy(other) {
            value := other.value
            isPartialLine := other.isPartialLine
            isPreceededByBlankLine := other.isPreceededByBlankLine
            endLine := other.endLine
            self
        }
    }
}

method wrap(str) to (l:Number) prefixedBy (margin) {
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
            to (l) prefixedBy (margin)
}


type AstVisitor = {
    visitIf(o) up(ac) -> Boolean
    visitBlock(o) up(ac) -> Boolean
    visitMatchCase(o) up(ac) -> Boolean
    visitTryCatch(o) up(ac) -> Boolean
    visitMethodType(o) up(ac) -> Boolean
    visitSignaturePart(o) up(ac) -> Boolean
    visitTypeLiteral(o) up(ac) -> Boolean
    visitTypeParameters(o) up(ac) -> Boolean
    visitTypeDec(o) up(ac) -> Boolean
    visitMethod(o) up(ac) -> Boolean
    visitCall(o) up(ac) -> Boolean
    visitObject(o) up(ac) -> Boolean
    visitModule(o) up(ac) -> Boolean
    visitArray(o) up(ac) -> Boolean
    visitMember(o) up(ac) -> Boolean
    visitGeneric(o) up(ac) -> Boolean
    visitIdentifier(o) up(ac) -> Boolean
    visitString(o) up(ac) -> Boolean
    visitNum(o) up(ac) -> Boolean
    visitOp(o) up(ac) -> Boolean
    visitBind(o) up(ac) -> Boolean
    visitDefDec(o) up(ac) -> Boolean
    visitVarDec(o) up(ac) -> Boolean
    visitImport(o) up(ac) -> Boolean
    visitReturn(o) up(ac) -> Boolean
    visitInherits(o) up(ac) -> Boolean
    visitDialect(o) up(ac) -> Boolean
    visitComment(o) up(ac) -> Boolean
    visitImplicit(o) up(ac) -> Boolean
    visitOuter(o) up(ac) -> Boolean
}

class baseVisitor -> AstVisitor {
    method visitIf(o) up(ac) { visitIf(o) }
    method visitBlock(o) up(ac) { visitBlock(o) }
    method visitMatchCase(o) up(ac) { visitMatchCase(o) }
    method visitTryCatch(o) up(ac) { visitTryCatch(o) }
    method visitMethodType(o) up(ac) { visitMethodType(o) }
    method visitSignaturePart(o) up(ac) { visitSignaturePart(o) }
    method visitTypeDec(o) up(ac) { visitTypeDec(o) }
    method visitTypeLiteral(o) up(ac) { visitTypeLiteral(o) }
    method visitTypeParameters(o) up(ac) { visitTypeParameters(o) }
    method visitMethod(o) up(ac) { visitMethod(o) }
    method visitCall(o) up(ac) { visitCall(o) }
    method visitObject(o) up(ac) { visitObject(o) }
    method visitModule(o) up(ac) { visitModule(o) }
    method visitArray(o) up(ac) { visitArray(o) }
    method visitMember(o) up(ac) { visitMember(o) }
    method visitGeneric(o) up(ac) { visitGeneric(o) }
    method visitIdentifier(o) up(ac) { visitIdentifier(o) }
    method visitString(o) up(ac) { visitString(o) }
    method visitNum(o) up(ac) { visitNum(o) }
    method visitOp(o) up(ac) { visitOp(o) }
    method visitBind(o) up(ac) { visitBind(o) }
    method visitDefDec(o) up(ac) { visitDefDec(o) }
    method visitVarDec(o) up(ac) { visitVarDec(o) }
    method visitImport(o) up(ac) { visitImport(o) }
    method visitReturn(o) up(ac) { visitReturn(o) }
    method visitInherits(o) up(ac) { visitInherits(o) }
    method visitDialect(o) up(ac) { visitDialect(o) }
    method visitComment(o) up(ac) { visitComment(o) }
    method visitImplicit(o) up(ac) { visitImplicit(o) }
    method visitOuter(o) up(ac) -> Boolean { visitOuter(o) }
    method visitAlias(o) up(ac) -> Boolean { visitAlias(o) }

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
    method visitComment(o) -> Boolean { true }
    method visitImplicit(o) -> Boolean { true }
    method visitOuter(o) -> Boolean { true }
    method visitAlias(o) -> Boolean { true }

    method asString { "an AST visitor" }
}

class pluggableVisitor(visitation:Predicate2⟦AstNode, Object⟧) -> AstVisitor {
    // Manufactures a default visitor, given a 2-parameter block.
    // Typically, some of the methods will be overridden.
    // The visitation predicate will be applied with the AST node ac the first argument
    // and the ancestor chain ac the second, and should answer true if
    // the visitation is to continue and false if it is to go no deeper.

    method visitIf(o) up(ac) { visitation.apply (o, ac) }
    method visitBlock(o) up(ac) { visitation.apply (o, ac) }
    method visitMatchCase(o) up(ac) { visitation.apply (o, ac) }
    method visitTryCatch(o) up(ac) { visitation.apply (o, ac) }
    method visitMethodType(o) up(ac) { visitation.apply (o, ac) }
    method visitSignaturePart(o) up(ac) { visitation.apply (o, ac) }
    method visitTypeDec(o) up(ac) { visitation.apply (o, ac) }
    method visitTypeLiteral(o) up(ac) { visitation.apply (o, ac) }
    method visitMethod(o) up(ac) { visitation.apply (o, ac) }
    method visitCall(o) up(ac) { visitation.apply (o, ac) }
    method visitObject(o) up(ac) { visitation.apply (o, ac) }
    method visitModule(o) up(ac) { visitation.apply (o, ac) }
    method visitArray(o) up(ac) { visitation.apply (o, ac) }
    method visitMember(o) up(ac) { visitation.apply (o, ac) }
    method visitGeneric(o) up(ac) { visitation.apply (o, ac) }
    method visitIdentifier(o) up(ac) { visitation.apply (o, ac) }
    method visitString(o) up(ac) { visitation.apply (o, ac) }
    method visitNum(o) up(ac) { visitation.apply (o, ac) }
    method visitOp(o) up(ac) { visitation.apply (o, ac) }
    method visitBind(o) up(ac) { visitation.apply (o, ac) }
    method visitDefDec(o) up(ac) { visitation.apply (o, ac) }
    method visitVarDec(o) up(ac) { visitation.apply (o, ac) }
    method visitImport(o) up(ac) { visitation.apply (o, ac) }
    method visitReturn(o) up(ac) { visitation.apply (o, ac) }
    method visitInherits(o) up(ac) { visitation.apply (o, ac) }
    method visitDialect(o) up(ac) { visitation.apply (o, ac) }
    method visitComment(o) up(ac) { visitation.apply (o, ac) }
    method visitImplicit(o) up(ac) { visitation.apply (o, ac) }
    method visitOuter(o) up(ac) { visitation.apply (o, ac) }
    method visitAlias(o) up(ac) { visitation.apply (o, ac) }

    method asString { "a pluggable AST visitor" }
}

