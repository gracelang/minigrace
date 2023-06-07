dialect "standard"
import "util" as util
import "scope" as sm
import "basic" as basic
import "constantScope" as constantScope

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

use basic.open

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
    def newList = list []
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

trait typeArguments {
    // adds-in the ability to have type arguments

    method generics -> Collection | Boolean is required
    method generics:=(nu) is required

    method numTypeArgs {
        if (false == generics) then { 0 } else { generics.size }
    }
    method typeArgs {
        if (false == generics) then { [] } else { generics }
    }
    method typeArgsDo (action) {
        if (false == generics) then { return }
        generics.do(action)
    }
    method hasTypeArgs {
        if (false == generics) then { false } else { generics.isEmpty.not }
    }
    method withGenericArgs(gens) {
        generics := gens
        self
    }
}

class baseNode {
    // the superclass of all AST nodes
    use identityEquality
    var register is public := ""
    var line is public := util.linenum
    var column is public := util.column
    var symbolTable := fakeSymbolTable
    symbolTable.node := self
    var comments is public := false

    method attributeScope is abstract
    // for expressions, the scope that defines the attributes of the corresponding value

    method isDeclaredByParent { false }
    method childrenDo(anAction:Procedure1) is abstract
    method childrenMap(f:Function1) is abstract
    method newAccept(aVisitor) is abstract
    method do(anAction) { anAction.apply(self) }
    method map(fun) { fun.apply(self) }

    method setLine (l) col (c) {
        line := l
        column := c
        self
    }
    method setPositionFrom (tokenOrNode) {
        line := tokenOrNode.line
        column := tokenOrNode.column
        self
    }
    method setStart(p: Position) {
        line := p.line
        column := p.column
        self
    }
    method start { line (line) column (column) }
    method end { line (line) column (column + self.value.size - 1) }
    method endCol { end.column }
    method range { start (start) end (end) }
    method kind is abstract
    method annotations { [] }   // overriden by those nodes that can be annotated
    method hasAnnotation(annName) {
        annotations.do { ann ->
            if (ann.nameString == annName) then { return true }
        }
        false
    }
    method hasTypeParams { false }
    method isNull { false }
    method isAppliedOccurrence { isBindingOccurrence.not }
    method isAnnotations { false }
    method isBindingOccurrence { true }
    method isMarkerDeclaration { false }
    method isMatchingBlock { false }
    method isFieldDec { false }
    method isVarDec { false }
    method isInherits { false }
    method isLegalInTrait { false }
    method isMember { false }
    method isMethod { false }
    method isModule { false }
    method isExecutable { true }
    method isCall { false }
    method isComment { false }
    method isConcrete { false } // is a concrete method declaration
    method isClass { false }    // is a method that returns a fresh object
    method inClass { false }    // object in a syntactic class definiton
    method isTrait { false }    // is a method that returns a trait object
    method inTrait { false }    // object in a syntactic trait definition
    method isAssignment { false }
    method isReturn { false }
    method isSelf { false }
    method isBuiltIn { false }
    method isOuter { false }
    method isSelfOrOuter { false }
    method isBlock { false }
    method isObject { false }
    method isIdentifier { false }
    method isInterface { false }
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
    method hash { line.hash * column.hash }
    method asString { "{kind} {nodeString} ({range})" }
    method nameString is abstract
    method nodeString { "" }
    method isWritable { true }
    method isUnknownType { false }
    method isReadable { true }
    method isPublic { true }
    method isConfidential { isPublic.not }
    method decType {
        if (false == self.dtype) then { return unknownLiteral }
        self.dtype
    }
    method isTyped {
        if (false == self.dtype) then { return false }
        if (self.dtype.isUnknownType) then { return false }
        true
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
        column := other.column
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
            "{range} {description} (opening {scope.asDebugString} defining {scope.localNames.keys.sorted})\n"
        } elseif {scope.variety == "fake"} then {
            "{range} {description}"
        } else {
            "{range} {description} ({scope.asDebugString})"
        }
    }
    method basePretty(depth) { prettyPrefix(depth) }
    method pretty(depth) { basePretty(depth) }
    method deepCopy {
        self.map { each -> each } ancestors(ancestorChain.empty)
    }
    method enclosingObject {
        scope.outerScope.currentObjectScope.node
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
    method arrow { ("-" * (column-1)) ++ ("^" * (endCol - column + 1)) }
        // so that the node can behave as an error object
    method sugg { [] }
        // so that the node can behave as an error object
}

def implicit is public = object {
    // represents the implicit receiver
    inherit baseNode
    line := 0
    column := 0
    method kind { "implicit" }
    def nameString is public = "implicit"

    method childrenDo(anAction:Procedure1) { done }
    method childrenMap(f:Function1) { [] }
    method newAccept(aVisitor) {
        aVisitor.preVisit(self)
        aVisitor.postVisit(self) result(aVisitor.newVisitImplicit(self))
    }

    method range { emptyRange }
    method isImplicit { true }
    method toGrace(depth) { "" }
    method nodeString { "" }
    method map(blk) ancestors(ac) { self }
    method accept(visitor) from (ac) {
        visitor.visitImplicit(self) up (ac)
    }
    method pretty(depth) { "implicit" }
}

class ifExpr (cond, thenblock', elseblock') {
    inherit baseNode
    method kind { "if" }
    var value is public := cond
    var thenblock is public := thenblock'
    var elseblock is public := elseblock'
    var handledIdentifiers is public := false

    method attributeScope {
        thenblock.attributeScope.meet(elseblock.attributeScope)
    }
    method childrenDo(anAction:Procedure1) {
        anAction.apply(value)
        anAction.apply(thenblock)
        anAction.apply(elseblock)
    }
    method childrenMap(f:Function1) {
        [ value.map(f), thenblock.map(f), elseblock.map(f) ]
    }

    method newAccept(aVisitor) {
        aVisitor.preVisit(self)
        aVisitor.postVisit(self) result(aVisitor.newVisitIf(self))
    }

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
        ifExpr(nullNode, nullNode, nullNode).shallowCopyFieldsFrom(self)
    }
    method postCopy(other) {
        handledIdentifiers := other.handledIdentifiers
        self
    }
}

method noAnnotations {
    annotations(list.empty)
}

class annotations(someAnnotations) {
    inherit baseNode
    method kind { "annonations" }
    def anns is public = someAnnotations

    method childrenDo(anAction:Procedure1) {
        anns.do(anAction)
    }
    method childrenMap(f:Function1) {
        def result = list.empty
        anns.map(f) >> result
    }
    method add(anAnnotation) {
        anns.add(anAnnotation)
        self
    }
    method newAccept(aVisitor) {
        aVisitor.preVisit(self)
        aVisitor.postVisit(self) result(aVisitor.newVisitAnnotations(self))
    }
    method do(anAction) { anns.do(anAction) }
    method isEmpty { anns.isEmpty }
    method size { anns.size }

    method pretty(depth) {
        var s := "{basePretty(depth)}\n"
        do { a ->
            s := s ++ "\n{a.pretty(depth+2)}"
        }
        s
    }
    method nodeString { pretty 0 }
    method shallowCopy {
        annotations(anns).shallowCopyFieldsFrom(self)
            // this shares ans, rather than copying.
    }
}

class block(params', body') {
    inherit baseNode
    method kind { "block" }
    def value is public = "block"
    var params is public := params'
    var body is public := body'
    def selfclosure is public = true
    var matchingPattern is public := false
    var extraRuntimeData is public := false

    method attributeScope {     // TODO:  look for early returns
        if (isEmpty) then {
            constantScope.doneScope
        } else {
            body.last.attributeScope
        }
    }
    method childrenDo(anAction:Procedure1) {
        params.do(anAction)
        body.do(anAction)
    }
    method childrenMap(f:Function1) {
        def result = list.empty
        params.map(f) >> result
        body.map(f) >> result
    }

    method newAccept(aVisitor) {
        aVisitor.preVisit(self)
        aVisitor.postVisit(self) result(aVisitor.newVisitBlock(self))
    }

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
    method createVariableFor(id) { sm.parameterVariableFrom(id) }
    method isMatchingBlock { params.size == 1 }
    method returnsObject {
        (body.size > 0) && { body.last.returnsObject }
    }
    method returnedObject {
        // precondition: returnsObject
        body.last.returnedObject
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
        block(params, body).shallowCopyFieldsFrom(self)
    }
    method postCopy(other) {
        matchingPattern := other.matchingPattern
        extraRuntimeData := other.extraRuntimeData
        self
    }
}
class tryCatch (block, cases', finally') {
    inherit baseNode
    method kind { "trycatch" }
    var value is public := block
    var cases is public := cases'
    var finally is public := finally'

    method attributeScope {
        cases.fold {acc, each ->
            acc.meet(each.attributeScope)
        } startingWith ( constantScope.doneScope )
    }

    method childrenDo(anAction:Procedure1) {
        value.do(anAction)
        cases.do(anAction)
    }
    method childrenMap(f:Function1) {
        def result = list.empty
        value.map(f) >> result
        cases.map(f) >> result
    }
    method newAccept(aVisitor) {
        aVisitor.preVisit(self)
        aVisitor.postVisit(self) result(aVisitor.newVisitTryCatch(self))
    }

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
        tryCatch(nullNode, [], false).shallowCopyFieldsFrom(self)
    }
}
class matchCase (matchee', cases', elsecase') {
    inherit baseNode
    method kind { "matchcase" }
    var value is public := matchee'
    var cases is public := cases'
    var elsecase is public := elsecase'

    method attributeScope {
        var result := cases.fold {acc, each ->
            acc.meet(each.attributeScope)
        } startingWith ( constantScope.universalScope )
        if (false ≠ elsecase) then {
            result := result.meet(elsecase.attributeScope)
        }
        result
    }

    method childrenDo(anAction:Procedure1) {
        value.do(anAction)
        cases.do(anAction)
        if (false ≠ elsecase) then { elsecase.do(anAction) }
    }
    method childrenMap(f:Function1) {
        def result = list.empty
        value.map(f) >> result
        cases.map(f) >> result
        if (false ≠ elsecase) then { elsecase.map(f) >> result }
    }
    method newAccept(aVisitor) {
        aVisitor.preVisit(self)
        aVisitor.postVisit(self) result(aVisitor.newVisitMatchCase(self))
    }

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
            value.accept(visitor) from(newChain)
            for (cases) do { mx ->
                mx.accept(visitor) from(newChain)
            }
            if (false ≠ elsecase) then {
                elsecase.accept(visitor) from(newChain)
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
        for (cases) do { mx ->
            s := s ++ "\n{spc}Case:\n{spc}  {mx.pretty(depth+2)}"
        }
        if (false ≠ elsecase) then {
            s := s ++ "\n{spc}Else:\n{spc}  {elsecase.pretty(depth+2)}"
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
            s := s ++ "\n" ++ spc ++ "    " ++ "else " ++ elsecase.toGrace(depth + 2)
        }
        s
    }
    method shallowCopy {
        matchCase(nullNode, [], false).shallowCopyFieldsFrom(self)
    }
}

class methodSignature (parts', dtype', universals) {
    // Represents a method signature in a type literal, or in an inheritance modifier.
    // parts' is a sequence of signaturePart objects, which
    // contain the parts of this method's name and the parameter lists;
    // dtype' is the return type of this method, or false if not specified.
    // universals is a sequence of declarations of universally-quantified types.

    inherit baseNode
    method kind { "methodtype" }
    var signatureParts is public := parts'
    var dtype is public := dtype'
    var universalTypeDecls is public := universals
    var cachedIdentifier := uninitialized
    var isBindingOccurrence is readable := true
            // the only exceptions are the oldMethodName in an alias clause,
            // and an excluded name
    var isDeclaredByParent is public := false
    method nodeString { nameString }
    method childrenDo(anAction:Procedure1) {
        signatureParts.do(anAction)
        dtype.do(anAction)
    }
    method childrenMap(f:Function1) {
        def result = list.empty
        signatureParts.map(f) >> result
        dtype.map(f) >> result
    }
    method newAccept(aVisitor) {
        aVisitor.preVisit(self)
        aVisitor.postVisit(self) result(aVisitor.newVisitMethodSignature(self))
    }

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

    method hasParams { signatureParts.first.params.isEmpty.not }
    method numParams {
        signatureParts.fold { acc, p -> acc + p.numParams } startingWith 0
    }
    method parametersDo(b) {
        signatureParts.do { part ->
            part.params.do { each -> b.apply(each) }
        }
    }
    method parameterCounts {
        def result = list []
        signatureParts.do { part ->
            result.push(part.params.size)
        }
        result
    }
    method parameterNames {
        def result = list []
        signatureParts.do { part ->
            part.params.do { param ->
                result.push(param.nameString)
            }
        }
        result
    }
    method typeParameterNames {
        if (hasTypeParams.not) then { return list [] }
        def result = list []
        signatureParts.first.typeParams.do { each ->
            result.push(each.nameString)
        }
        result
    }
    method numTypeParams { signatureParts.first.numTypeParams }
    method hasTypeParams { false ≠ signatureParts.first.typeParams }
    method typeParams { signatureParts.first.typeParams }
    method withTypeParams(tp) {
        signatureParts.first.typeParams := tp
        self
    }
    method end -> Position {
        if ((false ≠ dtype) && {dtype.line ≠ 0}) then { return dtype.end }
        signatureParts.last.end
    }
    method nameString {
        // the name of the method being defined, in numeric form
        signatureParts.fold { acc, each -> acc ++ each.nameString }
            startingWith ""
    }

    method canonicalName {
        // the name of the method being defined, in underscore form
        signatureParts.fold { acc, each -> acc ++ each.canonicalName }
            startingWith ""
    }

    method asIdentifier {
        if (uninitialized == cachedIdentifier) then {
            cachedIdentifier := identifier(nameString, false)
            cachedIdentifier.line := signatureParts.first.line
            cachedIdentifier.column := signatureParts.first.column
            cachedIdentifier.end := signatureParts.last.end
            cachedIdentifier.canonicalName := canonicalName
            cachedIdentifier.isBindingOccurrence := isBindingOccurrence
            cachedIdentifier.isDeclaredByParent := isDeclaredByParent
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
        ac.parent.declarationKindWithAncestors(ac.forebears)
    }

    method declaringNodeWithAncestors(ac) {
        if (ac.parent.isInterface) then {
            self
        } else {
            ac.parent.declaringNodeWithAncestors(ac.forebears)
        }
    }

    method accept(visitor : AstVisitor) from(ac) {
        if (visitor.visitMethodSignature(self) up(ac)) then {
            def newChain = ac.extend(self)
            for (universalTypeDecls) do { decl ->
                decl.accept(visitor) from(newChain)
            }
            for (signatureParts) do { part ->
                part.accept(visitor) from(newChain)
            }
            if (false != dtype) then {
                dtype.accept(visitor) from(newChain)
            }
        }
    }
    method map(blk) ancestors(ac) {
        var n := shallowCopy
        def newChain = ac.extend(n)
        n.universalTypeDecls := listMap(universalTypeDecls, blk) ancestors(newChain)
        n.dtype := maybeMap(dtype, blk) ancestors(newChain)
        n.signatureParts := listMap(signatureParts, blk) ancestors(newChain)
        blk.apply(n, ac)
    }
    method pretty(depth) {
        def spc = "  " * (depth+1)
        var s := basePretty(depth)
        s := "{s}\n{spc}Name: {nameString}"
        if (false != dtype) then {
            s := "{s}\n{spc}Returns: {dtype.pretty(depth + 2)}"
        }
        for (universalTypeDecls) do { decl ->
            s := "{s}\n{spc}forall {decl.name}"
        }
        s := "{s}\n{spc}Signature Parts:"
        for (signatureParts) do { part ->
            s := "{s}\n  {spc}{part.pretty(depth + 2)}"
        }
        s
    }
    method toGrace(depth : Number) -> String {
        var s := ""
        signatureParts.do { part -> s:= s ++ part.toGrace(depth + 1) }
        if (false != dtype) then {
            s := "{s} → {dtype.toGrace(depth + 1)}"
        }
        if (universalTypeDecls.isEmpty.not) then {
            s := s ++ " forall "
            universalTypeDecls.do { decl -> s := "{s}{decl.toGrace(depth)}" }
                                separatedBy { s := "{s}, "}
        }
        s
    }
    method shallowCopy {
        methodSignature(signatureParts, dtype, universalTypeDecls).shallowCopyFieldsFrom(self)
    }
}
class interfaceLiteral (methods', types') {
    inherit baseNode
    method kind { "interfaceliteral" }
    var methods is public := methods'
    var types is public := types'
    var nominal is public := false
    var anonymous is public := true
    var value is public := "‹anon›"
    method isInterface { true }

    method childrenDo(anAction:Procedure1) {
        methods.do(anAction)
        types.do(anAction)
    }
    method childrenMap(f:Function1) {
        def result = list.empty
        methods.map(f) >> result
        types.map(f) >> result
    }
    method newAccept(aVisitor) {
        aVisitor.preVisit(self)
        aVisitor.postVisit(self) result(aVisitor.newVisitInterfaceLiteral(self))
    }

    method name { value }
    method name:=(n) {
        value := n
        anonymous := false
    }
    method nameString { value }
    method nodeString {
        "(methods = {methods}, types = {types})"
    }
    method createVariableFor(id) { sm.typeVariableFrom(self) }

    method isExecutable { false }

    method end -> Position {
        def tEnd = if (types.isEmpty) then {noPosition} else {types.last.end}
        def mEnd = if (methods.isEmpty) then {noPosition} else {methods.last.end}
        positionOfNext "}" after (max(max(tEnd, mEnd), start))
    }

    method accept(visitor : AstVisitor) from(ac) {
        if (visitor.visitInterfaceLiteral(self) up(ac)) then {
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
        interfaceLiteral([], []).shallowCopyFieldsFrom(self)
    }
    method postCopy(other) {
        nominal := other.nominal
        anonymous := other.anonymous
        value := other.value
        self
    }
    method attributeScope { constantScope.typeScope }
}

class typeDec (name', typeValue) {
    inherit baseNode
    method kind { "typedec" }
    var name is public := name'
    name.bindingOccurrence
    var value is public := typeValue
    var parentKind is public := "unset"
    var annotations is public := list []
    var typeParams is public := false

    method childrenDo(anAction:Procedure1) {
        name.do(anAction)
        value.do(anAction)
        typeParams.do(anAction)
        annotations.do(anAction)
    }
    method childrenMap(f:Function1) {
        def result = list.empty
        name.map(f) >> result
        value.map(f) >> result
        typeParams.map(f) >> result
        annotations.map(f) >> result
    }
    method newAccept(aVisitor) {
        aVisitor.preVisit(self)
        aVisitor.postVisit(self) result(aVisitor.newVisitTypeDec(self))
    }

    method nameString → String { name.value }
    method nameWithParams → String {
        if (false == typeParams) then { return nameString }
        nameString ++ typeParams.toGrace
    }
    method end -> Position { value.end }
    method isLegalInTrait { true }
    method isTypeDec { true }
    method decType is override { typeType }
    method scope:=(st) {
        // sets up the 2-way conection between this node
        // and the synmol table that defines the scope that I open.
        symbolTable := st
        st.node := self
    }

    method isExecutable { false }
    method declaringNodeWithAncestors(ac) { self }
    method createVariableFor(id) { sm.typeVariableFrom(self) }
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
        typeDec(name, nullNode).shallowCopyFieldsFrom(self)
    }
    method postCopy(other) {
        parentKind := other.parentKind
        self
    }
    method attributeScope { constantScope.typeScope }
}

class universalDec (name') {
    // the "forall T" clause in a method signature that declares T as universally-quantified
    inherit typeDec (name', false)
    method kind { "forall type" }
    method childrenDo(anAction:Procedure1) {
        name.do(anAction)
    }
    method childrenMap(f:Function1) {
        name.map(f)
    }
    method createVariableFor(id) { sm.universalVariableFrom(self) }
    method end -> Position { name.end }
    method isLegalInTrait { true }
    method isTypeDec { true }
    method decType is override { typeType }
    method scope:=(st) {
        // sets up the 2-way conection between this node
        // and the synmol table that defines the scope that I open.
        symbolTable := st
        st.node := self
    }

    method accept(visitor : AstVisitor) from(ac) {
        if (visitor.visitUniversalDec(self) up(ac)) then {
            def newChain = ac.extend(self)
            name.accept(visitor) from(newChain)
        }
    }
    method map(blk) ancestors(ac) {
        var n := shallowCopy
        def newChain = ac.extend(n)
        n.name := name.map(blk) ancestors(newChain)
        blk.apply(n, ac)
    }
    method pretty(depth) {
        def spc = "  " * (depth+1)
        var s := basePretty(depth) ++ "\n"
        s := s ++ spc ++ self.name.pretty(depth + 1) ++ "\n"
        if (false != comments) then {
            s := s ++ comments.pretty(depth + 1)
        }
        s
    }
    method toGrace(depth : Number) -> String {
        name.value
    }
    method shallowCopy {
        universalDec(name).shallowCopyFieldsFrom(self)
    }
}


class methodDec (signature', body', dtype', universals) {
    // Represents a method declaration
    // The name of the method is constructed from:
    // signature' — sequence of signatureParts;
    // body — a sequence of statements and declarations;
    // dtype — the declared return type of the method, or false;
    // universals — a sequence of declarations of universally-quantified types.

    inherit baseNode
        alias hasReturnType = isTyped
    method kind { "methodDec" }
    var description is public := kind   // changed to "class" or "trait" by parser
    var signatureParts is public := signature'
    var hasBody is public := true
    var body is public := body'
    if (false == body') then {
        body := sequence.empty
        hasBody := false
    }
    var dtype is public := dtype'
    var selfclosure is public := false
    var annotations is public := list []
    var isFresh is public := false      // a method is 'fresh' if it answers a new object
    var isOnceMethod is public := false
    var universalTypeDecls is public := universals

    method isDeclaredByParent { true }
    method nodeString { nameString }

    method attributeScope {
        if (returnsObject) then {
            returnedObjectScope
        } else {
            constantScope.doneScope
        }
    }
    method isTyped {
        if (hasReturnType) then { return true }
        signatureParts.anySatisfy{ each -> each.isTyped }
    }
    method childrenDo(anAction:Procedure1) {
        universals.do(anAction)
        signatureParts.do(anAction)
        decType.do(anAction)
        body.do(anAction)
    }
    method childrenMap(f:Function1) {
        def result = list.empty
        universals.map(f) >> result
        signatureParts.map(f) >> result
        decType.map(f) >> result
        body.map(f) >> result
    }
    method newAccept(aVisitor) {
        aVisitor.preVisit(self)
        aVisitor.postVisit(self) result(aVisitor.newvisitMethodDec(self))
    }

    method usesClassSyntax { "class" == description }
    method usesTraitSyntax { "trait" == description }
    var cachedIdentifier := uninitialized
    var isBindingOccurrence is readable := true

    method end -> Position {
        if (hasBody && {body.isEmpty.not}) then {
            if (usesClassSyntax) then { return body.last.end }
            return positionOfNext "}" after (body.last.end)
        }
        if (false ≠ dtype) then {
            return positionOfNext "}" after (dtype.end)
        }
        return positionOfNext "}" after (signatureParts.last.end)
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
        signatureParts.fold { acc, p -> acc + p.numParams } startingWith 0
    }
    method parametersDo(b) {
        signatureParts.do { part ->
            part.params.do { each -> b.apply(each) }
        }
    }
    method parameterCounts {
        def result = list []
        signatureParts.do { part ->
            result.push(part.params.size)
        }
        result
    }
    method parameterNames {
        def result = list []
        signatureParts.do { part ->
            part.params.do { param ->
                result.push(param.nameString)
            }
        }
        result
    }
    method typeParameterNames {
        if (hasTypeParams.not) then { return list [] }
        def result = list []
        signatureParts.first.typeParams.do { each ->
            result.push(each.nameString)
        }
        result
    }
    method numTypeParams { signatureParts.first.numTypeParams }
    method endCol {
        def lastPart = signatureParts.last
        lastPart.column + lastPart.name.size - 1
    }
    method headerRange {
        start ( self.start ) end ( signatureParts.last.end )
    }

    once method nameString {
        signatureParts.fold { acc, each -> acc ++ each.nameString }
            startingWith ""
    }
    method asIdentifier {
        if (uninitialized == cachedIdentifier) then {
            cachedIdentifier := identifier(nameString, false)
            cachedIdentifier.scope := scope
            cachedIdentifier.line := signatureParts.first.line
            cachedIdentifier.column := signatureParts.first.column
            cachedIdentifier.isBindingOccurrence := isBindingOccurrence
            cachedIdentifier.end := signatureParts.last.end
            cachedIdentifier.canonicalName := canonicalName
        }
        cachedIdentifier
    }
    method value { asIdentifier }
    method canonicalName {
        signatureParts.fold { acc, each -> acc ++ each.canonicalName }
            startingWith ""
    }
    method hasParams { signatureParts.first.params.isEmpty.not }
    method numParamLists {
        // the number of my parameter lists.  If I have a single
        // part to my name, there may be 0 or 1
        def sigSz = signatureParts.size
        if (sigSz > 1) then { return sigSz }
        if {signatureParts.first.params.isEmpty} then { return 0 }
        return 1
    }
    method hasTypeParams { false ≠ signatureParts.first.typeParams }
    method typeParams { signatureParts.first.typeParams }
    method withTypeParams(tp) {
        signatureParts.first.typeParams := tp
        self
    }
    method isMethod { true }
    method isExecutable { false }
    method isLegalInTrait { true }
    method isClass { usesClassSyntax || isFresh }
    method isTrait { usesTraitSyntax || (isFresh && { body.last.isTrait } ) }
    method needsArgChecks {
        signatureParts.do { part ->
            part.params.do { p -> if (p.isTyped) then { return true } }
        }
        return false
    }
    method scope:=(st) {
        // sets up the 2-way conection between this node
        // and the synmol table that defines the scope that I open.
        symbolTable := st
        st.node := self
        if (uninitialized ≠ cachedIdentifier) then {
            cachedIdentifier.scope := st
        }
    }
    method declaringNodeWithAncestors(ac) { self }
    method createVariableFor(id) {
        if (asIdentifier == id) then {
            // declaration is for this method
            if (isConcrete) then {
                sm.methodVariableFrom(self)
            } else {
                // TODO: do we need to distinguish between abstract and required?
                sm.requiredMethodVariableFrom(self)
            }
        } else {
            // declaration is for a parameter of this method
            sm.parameterVariableFrom(id)
        }
    }
    method isConfidential { hasAnnotation  "confidential" }
    method isPublic { isConfidential.not }
    method isWritable { false }
    method isReadable { isPublic }
    method isAbstract { hasAnnotation "abstract" }
    method isRequired { hasAnnotation "required" }
    method isConcrete {
        if (isAbstract) then { return false }
        if (isRequired) then { return false }
        true
    }
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
    method returnedObject {
        // precondition: returnsObject
        body.last.returnedObject
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
        if (visitor.visitMethodDec(self) up(ac)) then {
            def newChain = ac.extend(self)
            asIdentifier.accept(visitor) from(newChain)
            for (universalTypeDecls) do { decl ->
                decl.accept(visitor) from(newChain)
            }
            for (self.signatureParts) do { part ->
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
        n.universalTypeDecls := listMap(universalTypeDecls, blk) ancestors(newChain)
        n.signatureParts := listMap(signatureParts, blk) ancestors(newChain)
        n.body := listMap(body, blk) ancestors(newChain)
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
        for (universalTypeDecls) do { decl ->
            s := "{s}\n{spc}forall {decl.name}"
        }
        for (signatureParts) do { part ->
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
        for (self.signatureParts) do { part -> s := s ++ part.toGrace(depth) }
        if (false != self.dtype) then {
            s := s ++ " -> {self.dtype.toGrace(0)}"
        }
        if (universalTypeDecls.isEmpty.not) then {
            s := s ++ " forall "
            universalTypeDecls.do { decl -> s := "{s}{decl.toGrace(depth)}" }
                                separatedBy { s := "{s}, "}
        }
        if (self.annotations.isEmpty.not) then {
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
        methodDec(signatureParts, body, dtype, universalTypeDecls).shallowCopyFieldsFrom(self)
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
class request (receiver', parts') {
    // used as request(receiver':AstNode, parts:Sequence⟦RequestPart⟧)
    // Represents a method request with arguments.

    inherit baseNode
    use typeArguments

    method kind { "call" }
    var parts is public := parts'          // [ RequestPart ]
    var receiver is public := receiver'    // formerly `value`
    var isSelfRequest is public := false
    var isTailCall is public := false      // is possibly the result of a method
    var isFresh is public := false         // calls a fresh method
    var returnedObjectScope is public := fakeSymbolTable
                                           // the scope of the generated fresh object
    var cachedIdentifier := uninitialized
    var endPos:Position is public := noPosition

    method attributeScope {
        if (returnsObject) then {
            returnedObjectScope
        } else {
            constantScope.doneScope
        }
    }

    method childrenDo(anAction:Procedure1) {
        receiver.do(anAction)
        parts.do(anAction)
        typeArgs.do(anAction)
    }
    method childrenMap(f:Function1) {
        def result = list.empty
        receiver.map(f) >> result
        parts.map(f) >> result
        typeArgs.map(f) >> result
    }
    method newAccept(aVisitor) {
        aVisitor.preVisit(self)
        aVisitor.postVisit(self) result(aVisitor.newVisitRequest(self))
    }

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

    method generics:=(gens) {   // required by typeArguments trait
        parts.first.withGenericArgs(gens)
    }

    method generics { parts.first.generics }

    method canonicalName {
        // the name of the method being requested, in underscore form
        parts.fold { acc, each -> acc ++ each.canonicalName }
            startingWith ""
    }

    method isCall { true }
    method returnsObject {
        isFresh
    }
    method returnedObject {
        // precondition: returnsObject
        returnedObjectScope.node
    }
    method arguments {
        def result = list []
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

    method accept(visitor : AstVisitor) from(ac) {
        if (visitor.visitRequest(self) up(ac)) then {
            def newChain = ac.extend(self)
            self.receiver.accept(visitor) from(newChain)
            typeArgsDo { t -> t.accept(visitor) from(newChain) }
            argumentsDo { arg -> arg.accept(visitor) from(newChain) }
        }
    }
    method map(blk) ancestors(ac) {
        var n := shallowCopy
        def newChain = ac.extend(n)
        n.receiver := receiver.map(blk) ancestors(newChain)
        n.parts := listMap(parts, blk) ancestors(newChain)
        blk.apply(n, ac)
    }
    method pretty(depth) {
        def spc = "  " * (depth+1)
        var s := basePretty(depth)
        s := s ++ if (isSelfRequest) then { " on self\n" } else { "\n" }
        s := s ++ spc ++ "Receiver: {receiver.pretty(depth+2)}\n"
        s := s ++ spc ++ "Method Name: {nameString}\n"
        s := s ++ spc ++ "Parts:"
        for (self.parts) do { part ->
            s := s ++ "\n  " ++ spc ++ part.pretty(depth+2)
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
            cachedIdentifier := identifier(nameString, false).setScope(scope)
            cachedIdentifier.inRequest := true
            cachedIdentifier.line := parts.first.line
            cachedIdentifier.column := parts.first.column
            cachedIdentifier.canonicalName := canonicalName
            cachedIdentifier.end := end
        }
        cachedIdentifier
    }
    method nodeString { toGrace 0 }
    method shallowCopy {
        request(receiver, parts).shallowCopyFieldsFrom(self)
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

class module (b) named(nm) {
    inherit objectWithBody(b)
        alias oPostCopy(_) = postCopy(_)
        alias objChildrenDo(_) = childrenDo(_)
        alias objChildrenMap(_) = childrenMap(_)

    name := nm      // inherited value is "object"
    method kind { "module" }
    def sourceLines = util.lines
    var theDialect is public := dialectStatement "standard"
    theDialect.setStart(noPosition)             // dialect is implicit
    setStart(line 1 column 1)    // the start of the input
    var imports is public := list.empty
    var directImports is public := list.empty

    method dialectName { theDialect.moduleName }

    method childrenDo(anAction:Procedure1) {
        theDialect.do(anAction)
        objChildrenDo(anAction)
    }
    method childrenMap(f:Function1) {
        def result = list.empty
        theDialect.map(f) >> result
        objChildrenMap(f) >> result
    }
    method newAccept(aVisitor) {
        aVisitor.preVisit(self)
        aVisitor.postVisit(self) result(aVisitor.newVisitModule(self))
    }

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
        module(value)named(name).shallowCopyFieldsFrom(self)
    }
    method postCopy(other) {
        imports := other.imports
        directImports := other.directImports
        theDialect := other.theDialect
        oPostCopy(other)
        self
    }
}

class objectWithBody(b) {
    inherit objectWithBody (b) inheriting (false) using (list [])
    // TODO:  make this a method, rather than a class — it _should_ be fresh
}

class objectWithBody (b) inheriting (superclass') using (ts) {
    inherit baseNode
    method kind { "object" }
    var value is public := b
    var superclass is public := superclass'
    var usedTraits is public := ts
    var name is public := "object"
    var inClass is public := false
    var inTrait is public := false
    var isFresh is public := false  // unless in a method
    var myLocalNames := false
    var annotations is public := list []

    method attributeScope {
        scope
    }

    method childrenDo(anAction:Procedure1) {
        superclass.do(anAction)
        usedTraits.do(anAction)
        annotations.do(anAction)
        value.do(anAction)
    }
    method childrenMap(f:Function1) {
        def result = list.empty
        superclass.map(f) >> result
        usedTraits.map(f) >> result
        annotations.map(f) >> result
        value.map(f) >> result
    }
    method newAccept(aVisitor) {
        aVisitor.preVisit(self)
        aVisitor.postVisit(self) result(aVisitor.newVisitObject(self))
    }

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
    method dtype {
        false // because the syntax does not allow type annotations on objects
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

    method localNames -> Set⟦String⟧ {
        // answers the names of all of the methods defined directly in
        // this object.  Inherited names are _not_ included.
        if (false == myLocalNames) then {
            myLocalNames := set.empty
            value.do { node ->
                if (node.isConcrete) then {
                    myLocalNames.add(node.nameString)
                }
                if (node.isVarDec) then {
                    myLocalNames.add(node.nameString ++ ":=(1)")
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
    method returnedObject { self }
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
        objectWithBody(value) inheriting (superclass) using (usedTraits).
              shallowCopyFieldsFrom(self)
    }
    method postCopy(other) {
        name := other.name
        inClass := other.inClass
        inTrait := other.inTrait
        annotations := other.annotations
        self
    }
    method nodeString { nameString }
}

class sequenceConstructor (values) {
    inherit baseNode
    method kind { "sequence" }
    var value is public := values

    method attributeScope {
        constantScope.sequenceScope
    }

    method childrenDo(anAction:Procedure1) {
        value.do(anAction)
    }
    method childrenMap(f:Function1) {
        value.map(f) >> sequence
    }
    method newAccept(aVisitor) {
        aVisitor.preVisit(self)
        aVisitor.postVisit(self) result(aVisitor.newVisitSequence(self))
    }

    method isSequenceConstructor { true }
    method end -> Position {
        if (value.isEmpty) then {
            positionOfNext "]" after (start)
        } else {
            positionOfNext "]" after (value.last.end)
        }
    }
    method accept(visitor : AstVisitor) from(ac) {
        if (visitor.visitSequence(self) up(ac)) then {
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
        sequenceConstructor[].shallowCopyFieldsFrom(self)
    }
}
class yourselfNode(levels) {
    // levels is a number; I represent `self` when levels == 0,
    // otherwise an outer sequence of length levels

    inherit baseNode

    method kind { "yourself" }
    var theObjects is public := uninitialized
    def numberOfLevels is public = levels
    var end is public := if (line == 0) then { noPosition } else {
        line (line) column (column - 2 + (6 * numberOfLevels))
    }

    method attributeScope {
        if (levels == 0) then {
            scope.currentObjectScope
        } else {
            theObjects.last.scope.outerScope.currentObjectScope
        }
    }

    method childrenDo(anAction:Procedure1) {
        // don't iterate over theObjects, since this would introduce a cycle
        // theObjects.do(anAction)
    }
    method childrenMap(f:Function1) {
        // don't map theObjects, since this would introduce a cycle
        // theObjects.map(f) >> sequence
    }
    method newAccept(aVisitor) {
        aVisitor.preVisit(self)
        aVisitor.postVisit(self) result(aVisitor.newvisitYourself(self))
    }

    method nodeString {
        if (isSelf) then { return "self" }
        if (uninitialized == theObjects) then { return "outer^{numberOfLevels}" }
        "‹object outside that at line {theObjects.last.line}›"
    }
    method pretty(depth) {
        var s := basePretty(depth)
        if (isSelf) then { return s ++ "self" }
        if (uninitialized == theObjects) then { return s ++ "outer^{numberOfLevels}" }
        theObjects.do { each ->
            s := s ++ "‹object outside that at line {each.line}›"
        } separatedBy { s := s ++ "." }
        s
    }
    method accept(visitor) from (ac) {
        visitor.visitYourself(self) up (ac)
        // don't visit theObjects, since this would introduce a cycle
    }
    method toGrace(depth) {
        if (numberOfLevels == 0) then {
            "self"
        } else {
            "outer" ++ (".outer" * (numberOfLevels - 1))
        }
    }
    method isOuter { numberOfLevels > 0 }
    method isSelf { numberOfLevels == 0 }
    method isSelfOrOuter { true }
    method shallowCopy {
        yourselfNode(numberOfLevels).shallowCopyFieldsFrom(self)
    }
    method map (blk) ancestors (ac) {
        def nd = shallowCopy
        blk.apply(nd, ac)
    }
    method postCopy(other) {
        theObjects := other.theObjects
        end := other.end
    }
}
class requestWithoutArgs(request, receiver') {
    // Represents a dotted request ‹receiver'›.‹request› with no arguments.

    inherit baseNode
    use typeArguments

    method kind { "member" }
    var value:String is public := request
    var receiver is public := receiver'
    var generics is public := false
    var isSelfRequest is public := false
    var isTailCall is public := false      // is possibly the result of a method
    var isFresh is public := false         // calls a fresh method
    var returnedObjectScope is public := fakeSymbolTable
                                           // the scope of the generated fresh object

    method attributeScope {
       receiver.attributeScope.attributeScopeOf(request) in (self)
    }
    method childrenDo(anAction:Procedure1) {
        receiver.do(anAction)
        typeArgs.do(anAction)
    }
    method childrenMap(f:Function1) {
        def result = list.empty
        receiver.map(f) >> result
        typeArgs.map(f) >> result
    }
    method newAccept(aVisitor) {
        aVisitor.preVisit(self)
        aVisitor.postVisit(self) result(aVisitor.newVisitRequestWithoutArgs(self))
    }

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

    method parts { list.with(requestPart(nameString).setStart(reqStart)) }
    method arguments { [] }
    method argumentsDo(action) { }
    method numArgs { 0 }

    method accept(visitor : AstVisitor) from(ac) {
        if (visitor.visitRequestWithoutArgs(self) up(ac)) then {
            def newChain = ac.extend(self)
            if (false != generics) then {
                generics.do { each -> each.accept(visitor) from(newChain) }
            }
            receiver.accept(visitor) from(newChain)
        }
    }
    method isSelfOrOuter {
        // TODO — shouldn't this just return false, i.e., use the inherited method?
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
        s := s ++ spc ++ "Receiver: " ++ receiver.pretty(depth+2) ++ "\n"
        s := s ++ spc ++ "Method Name: " ++ parts.first.pretty(depth)
        if (false != generics) then {
            s := s ++ "\n" ++ spc ++ "TypeArgs:"
            for (generics) do {g->
                s := s ++ "\n" ++ spc ++ "  " ++ g.pretty(depth+2)
            }
        }
        s
    }
    method toGrace(depth : Number) -> String {
        var s := receiver.toGrace 0
        if ("" ≠ s) then { s := s ++ "." }
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
    method nodeString { toGrace 0 }
    method asIdentifier {
        // make and return an identifiderNode for my request
        if (scope.variety == "fake") then {
            ProgrammingError.raise "asIdentifier requested on {toGrace} when scope was fake"
        }
        def resultNode = identifier (nameString, false).setScope (scope)
        resultNode.inRequest := true
        resultNode.line := line
        resultNode.column := column
        return resultNode
    }
    method shallowCopy {
        requestWithoutArgs(nameString, receiver).shallowCopyFieldsFrom(self)
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

class typeApplication (base, arguments) {
    // represents an application of a parameterized type to some arguments.
    inherit baseNode
    method kind { "typeapp" }
    var value is public := base
        // in a type application, `value` is the applied type
        // e.g. in List⟦Number⟧, value is Identifier‹List›
    var args is public := arguments

    method childrenDo(anAction:Procedure1) {
        value.do(anAction)
        arguments.do(anAction)
    }
    method childrenMap(f:Function1) {
        def result = list.empty
        value.map(f) >> result
        arguments.map(f) >> result
    }
    method newAccept(aVisitor) {
        aVisitor.preVisit(self)
        aVisitor.postVisit(self) result(aVisitor.newVtypeApplication(self))
    }

    method end -> Position { positionOfNext "⟧" after (args.last.end) }
    method nameString { value.nameString }
    method nodeString { toGrace 0 }
    method accept(visitor : AstVisitor) from(ac) {
        if (visitor.visitTypeApplication(self) up(ac)) then {
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
        typeApplication(value, args).shallowCopyFieldsFrom(self)
    }
}

class typeParameters(params') whereClauses (conditions) {
    inherit baseNode
    method kind { "typeparams" }
    var params is public := params'
    var whereClauses is public := conditions
    method nodeString { toGrace 0 }
    method createVariableFor(id) { sm.variableTypeParameterFrom(id) }

    method childrenDo(anAction:Procedure1) {
        params.do(anAction)
        whereClauses.do(anAction)
    }
    method childrenMap(f:Function1) {
        def result = list.empty
        params.map(f) >> result
        whereClauses.map(f) >> result
    }
    method newAccept(aVisitor) {
        aVisitor.preVisit(self)
        aVisitor.postVisit(self) result(aVisitor.newVisitTypeParameters(self))
    }

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
    method declaringNodeWithAncestors(_) { self }
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
        typeParameters[] whereClauses[].shallowCopyFieldsFrom(self)
    }
}

var wildcardCount := 1

class wildcardIdentifier(declType) {
    inherit identifier ("__{wildcardCount}", declType)
    wildcardCount := wildcardCount + 1
    wildcard := true
    end := line (line) column (column)
}

class identifier (name', dtype') {
    inherit baseNode
    use typeArguments
    method kind { "identifier" }
    var value is public := name'
    var wildcard is public := false
    var dtype is public := dtype'
    var isBindingOccurrence is public := false
    var isParameter is public := false
    var isTypeParameter is public := false
    var isAssigned is public := false
    var inRequest is public := false
    var generics is public := false
        // TODO: remove them and see what happens
    var isDeclaredByParent is public := false
    var variable is public := "not yet bound"   // the variable for this id
    var end:Position is public := if (line ≠ 0) then {
        line (line) column (column + value.size - 1)
    } else {
        line (line) column (column-1)
    }

    method attributeScope {
        if (isBindingOccurrence) then {
            ProgrammingError.raise "asking {kind} {nameString} at {self.range} for its attributeScope"
            // disambiguating with range in standard dialect
        }
        scope.attributeScopeOf(nameString) in (self)
    }
    method numTypeParams { 0 }

    method childrenDo(anAction:Procedure1) {
        typeArgs.do(anAction)
        decType.do(anAction)
    }
    method childrenMap(f:Function1) {
        def result = list.empty
        typeArgs.map(f) >> result
        decType.map(f) >> result
    }
    method newAccept(aVisitor) {
        aVisitor.preVisit(self)
        aVisitor.postVisit(self) result(aVisitor.newVisitIdentifier(self))
    }
    method bindingOccurrence {
        isBindingOccurrence := true
        self
    }
    method numArgs { 0 }
    method appliedOccurrence {
        isBindingOccurrence := false
        self
    }
    method typeParameter {
        isBindingOccurrence := true
        isTypeParameter := true
        self
    }
    method name { value }
    method name:=(nu) {
        value := nu
        end := line (line) column (column + nu.size - 1)
    }
    method nameString { value }
    once method writerNameString { "{value}:=(1)" }
    var canonicalName is public := value
    method quoted { value.quoted }
    method isIdentifier { true }

    method isSelf { "self" == value }       // TODO: return false
    method isBuiltIn { "$builtIn" == value }
    method isOuter {
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
        ac.parent.declarationKindWithAncestors(ac.forebears)
    }
    method declaringNodeWithAncestors(ac) {
        if (isBindingOccurrence) then {
            ac.parent
        } else {
            ac.parent.declaringNodeWithAncestors(ac.forebears)
        }
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

    method nodeString {
        if (isBindingOccurrence) then {
            "binding ‹{value}›"
        } else {
            "‹{value}›"
        }
    }
    method shallowCopy {
        identifier(value, dtype).shallowCopyFieldsFrom(self)
    }
    method postCopy(other) {
        wildcard := other.wildcard
        isBindingOccurrence := other.isBindingOccurrence
        isParameter := other.isParameter
        isTypeParameter := other.isTypeParameter
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

class ellipsis {
    inherit identifier("...", false)
    method kind { "ellipsis" }

    method childrenDo(anAction:Procedure1) { }
    method childrenMap(f:Function1) { [] }
    method newAccept(aVisitor) {
        aVisitor.preVisit(self)
        aVisitor.postVisit(self) result(aVisitor.newVisitEllipsis(self))
    }
    method isAppliedOccurrence { false }     // so that I'm not transformed as an identifier
    method accept(visitor : AstVisitor) from(ac) {
        visitor.visitEllipsis(self) up(ac)
    }
    method shallowCopy {
        ellipsis.shallowCopyFieldsFrom(self)
    }
    method map(blk) ancestors(ac) {
        var n := shallowCopy
        def newChain = ac.extend(n)
        blk.apply(n, ac)
    }
}

class unknownLiteral {
    inherit baseNode
    method isUnknownType { true }
    method kind { "unknown" }
    method nameString { "Unknown" }
    method toGrace(_) { nameString }
    method nodeString { nameString }
    method pretty { nameString }
    method childrenDo(anAction:Procedure1) { done }
    method childrenMap(f:Function1) { [] }
    method newAccept(aVisitor) {
        aVisitor.preVisit(self)
        aVisitor.postVisit(self) result(aVisitor.newVisitUnknown(self))
    }
    method accept(visitor : AstVisitor) from(ac) {
        visitor.visitUnknown(self) up(ac)
    }
    method map(blk) ancestors(ac) { blk.apply(self, ac) }
    method statementName { "type" }
    method end { line (line) column (column + 6) }
}

class selfTypeLiteral {
    inherit baseNode
    method isUnknownType { false }
    method kind { "selftype" }
    method nameString { "Self" }
    method toGrace(_) { nameString }
    method nodeString { nameString }
    method pretty { nameString }
    method childrenDo(anAction:Procedure1) { done }
    method childrenMap(f:Function1) { [] }
    method newAccept(aVisitor) {
        aVisitor.preVisit(self)
        aVisitor.postVisit(self) result(aVisitor.newVisitSelfType(self))
    }
    method accept(visitor : AstVisitor) from(ac) {
        visitor.visitSelfType(self) up(ac)
    }
    method map(blk) ancestors(ac) { blk.apply(self, ac) }
    method statementName { "type" }
    method end { line (line) column (column + 3) }
}

class stringLiteral (v) {
    inherit baseNode
    method kind { "string" }
    var value is public := v
    var end is public := line (line) column (column + v.size + 1)
        // +1 to allow for quotes

    method attributeScope {
        constantScope.stringScope
    }

    method childrenDo(anAction:Procedure1) { done }
    method childrenMap(f:Function1) { [] }
    method newAccept(aVisitor) {
        aVisitor.preVisit(self)
        aVisitor.postVisit(self) result(aVisitor.newVisitString(self))
    }

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
        if (end.line > start.line) then {
            "‹" ++value ++ "›"
        } else {
            def q = "\""
            q ++ value.quoted ++ q
        }
    }
    method nodeString { toGrace 0 }
    method shallowCopy {
        stringLiteral(value).shallowCopyFieldsFrom(self)
    }
    method postCopy(other) {
        end := other.end
        self
    }
    method statementName { "expression" }
    method isDelimited { true }
    method isConstant { true }
}

class numeral (val) {
    inherit baseNode
    method kind { "num" }
    var value is public := val

    method attributeScope {
        constantScope.numberScope
    }
    method childrenDo(anAction:Procedure1) { done }
    method childrenMap(f:Function1) { [] }
    method newAccept(aVisitor) {
        aVisitor.preVisit(self)
        aVisitor.postVisit(self) result(aVisitor.newVisitNumeral(self))
    }

    method accept(visitor : AstVisitor) from(ac) {
        visitor.visitNumeral(self) up(ac)
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
    method nodeString { value }
    method shallowCopy {
        numeral(value).shallowCopyFieldsFrom(self)
    }
    method statementName { "expression" }
    method isDelimited { true }
    method isConstant { true }
}

class opRequest (op, l, r) {
    inherit baseNode
    use typeArguments

    method kind { "op" }
    def value is public = op     // a String
    var left is public := l
    var right is public := r
    var generics is public := false
    var isTailCall is public := false      // is possibly the final value of a method
    var isSelfRequest is public := left.isSelfOrOuter


    method attributeScope {
        left.attributeScope.attributeScopeOf(nameString) in (self)
    }

    method childrenDo(anAction:Procedure1) {
        typeArgs.do(anAction)
        left.do(anAction)
        right.do(anAction)
    }
    method childrenMap(f:Function1) {
        def result = list.empty
        typeArgs.map(f) >> result
        left.map(f) >> result
        right.map(f) >> result
    }
    method newAccept(aVisitor) {
        aVisitor.preVisit(self)
        aVisitor.postVisit(self) result(aVisitor.newVisitOp(self))
    }

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
    method nodeString { value }
    method receiver { left }
    method isCall { true }

    method parts {
        list.with(requestPart (value) withArgs [right] .setStart(opPos))
    }
    method arguments { [ right ] }
    method argumentsDo(action) { action.apply(right) }
    method numArgs { 1 }

    method accept(visitor : AstVisitor) from(ac) {
        if (visitor.visitOp(self) up(ac)) then {
            def newChain = ac.extend(self)
            typeArgsDo { each -> each.accept(visitor) from (newChain) }
            left.accept(visitor) from(newChain)
            right.accept(visitor) from(newChain)
        }
    }
    method map(blk) ancestors(ac) {
        var n := shallowCopy
        def newChain = ac.extend(n)
        n.left := left.map(blk) ancestors(newChain)
        n.right := right.map(blk) ancestors(newChain)
        n.generics := maybeListMap(typeArgs, blk) ancestors(newChain)
        blk.apply(n, ac)
    }
    method pretty(depth) {
        def spc = "  " * (depth+1)
        var s := "{basePretty(depth)} ‹{nameString}›\n"
        s := "{s}{spc}Receiver: {left.pretty(depth+2)}\n"
        if (hasTypeArgs) then {
            s := "{s}{spc}TypeArgs:"
            typeArgs.do { tArg ->
                s := "{s}\n{spc}  {tArg.pretty(depth+2)}"
            }
        }
        s := "{s}{spc}Arg: {right.pretty(depth+2)}"
        s
    }
    method toGrace(depth : Number) -> String {
        var s := ""
        if ((left.kind == "op") && {left.value != self.value}) then {
            s := "(" ++ left.toGrace(0) ++ ")"
        } else {
            s := left.toGrace(0)
        }
        var v := self.value
        if (hasTypeArgs) then {
            v := v ++ "⟦"
            typeArgs.do { tArg ->
                v := v ++ tArg.toGrace(depth + 1)
            } separatedBy { v := v ++ ", " }
            v := v ++ "⟧"
        }
        if (self.value == "..") then {
            s := s ++ v
        } else {
            s := s ++ " " ++ v ++ " "
        }
        if ((right.kind == "op") && {right.value != self.value}) then {
            s := s ++ "(" ++ right.toGrace(0) ++ ")"
        } else {
            s := s ++ right.toGrace(0)
        }
        s
    }
    method asIdentifier {
        // make an identifiderNode with the same properties ac me
        def resultNode = identifier (nameString, false).setScope (scope)
        resultNode.inRequest := true
        resultNode.line := line
        resultNode.column := column
        resultNode.canonicalName := canonicalName
        return resultNode
    }
    method shallowCopy {
        opRequest(value, nullNode, nullNode).shallowCopyFieldsFrom(self)
    }
    method postCopy(other) {
        isTailCall := other.isTailCall
        isSelfRequest := other.isSelfRequest
        generics := other.generics
        self
    }
}

class assignment (dest', val') {
    // an assignment, or a request of a setter-method
    inherit baseNode
    method kind { "assignment" }
    var dest is public := dest'
    var value is public := val'

    method attributeScope {
        constantScope.doneScope
    }
    method lhs { dest }
    method rhs { value }
    method childrenDo(anAction:Procedure1) {
        dest.do(anAction)
        value.do(anAction)
    }
    method childrenMap(f:Function1) {
        def result = list.empty
        dest.map(f) >> result
        value.map(f) >> result
    }
    method newAccept(aVisitor) {
        aVisitor.preVisit(self)
        aVisitor.postVisit(self) result(aVisitor.newVisitAssignment(self))
    }
    method parts {
        def part = requestPart "{dest.value}:=" withArgs [value].setScope(scope)
        part.setPositionFrom(self)
        [ part ]
    }
    method end -> Position { value.end }
    method nameString { dest.nameString ++ ":=(1)" }
    method canonicalName { dest.nameString ++ ":=(_)" }
    method isAssignment { true }
    method nodeString { "{dest} := {value}" }
    method accept(visitor : AstVisitor) from(ac) {
        if (visitor.visitAssignment(self) up(ac)) then {
            def newChain = ac.extend(self)
            self.dest.accept(visitor) from(newChain)
            self.value.accept(visitor) from(newChain)
        }
    }
    method generics { false }   // TODO: an assignable variable can't have type params.
                                // But perhaps a writer method can?
    method numArgs { 1 }        // When considered as a request on a writer method
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
        assignment(dest, value).shallowCopyFieldsFrom(self)
    }
    method statementName { "assignment or assigment request" }
}
class declaration(identifier, val, declaredType) {
    // an abstract superclass for declarations

    inherit baseNode

    var name is public := identifier
    var value is public := val
    var dtype is public := declaredType
    var parentKind is public := "unset"
    def nameString is public = identifier.nameString
    var annotations is public := list []
    var variable is public := "not yet bound"

    method childrenDo(anAction:Procedure1) {
        name.do(anAction)
        decType.do(anAction)
        annotations.do(anAction)
        if (false != value) then { value.do(anAction) }
    }
    method childrenMap(f:Function1) {
        def result = list.empty
        name.map(f) >> result
        decType.map(f) >> result
        annotations.map(f) >> result
        if (false != value) then { value.map(f) >> result } else { result }
    }

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
    method isConcrete { true }
    method nodeString { nameString }
}

class defDec (name', val, dtype') {
    inherit declaration(name', val, dtype')

    method kind { "defdec" }
    method description { "def" }
    method newAccept(aVisitor) {
        aVisitor.preVisit(self)
        aVisitor.postVisit(self) result(aVisitor.newVisitDefDec(self))
    }

    method isPublic {
        // defs are confidential by default
        if (hasAnnotation "public") then { return true }
        hasAnnotation "readable"
    }
    method isWritable { false }
    method isReadable { isPublic }
    method declaringNodeWithAncestors(ac) { self }
    method createVariableFor(id) { sm.defVariableFrom(self) }
    method returnsObject { value.returnsObject }    // a call to a fresh method, or an object constructor
    method returnedObject {
        // precondition: returnsObject
        value.returnedObject
    }
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
        if (isTyped) then {
            s := s ++ " : " ++ self.dtype.toGrace 0
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
        defDec(name, value, dtype).shallowCopyFieldsFrom(self)
    }
    method postCopy(other) {
        parentKind := other.parentKind
        self
    }
    method statementName { "definition" }

    method attributeScope { value.attributeScope }
}

class varDec (name', val, dtype') {
    inherit declaration(name', val, dtype')

    method kind { "vardec" }

    method newAccept(aVisitor) {
        aVisitor.preVisit(self)
        aVisitor.postVisit(self) result(aVisitor.newVisitVarDec(self))
    }

    method isVarDec { true }
    once method writerNameString { "{nameString}:=(1)" }
    method description { "var" }
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
    method declaringNodeWithAncestors(ac) { self }
    method createVariableFor(id) { sm.varVariableFrom(self) }

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
        if (isTyped) then {
            s := s ++ " : " ++ self.dtype.toGrace 0
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
        varDec(name, value, dtype).shallowCopyFieldsFrom(self)
    }
    method postCopy(other) {
        parentKind := other.parentKind
        self
    }
    method statementName { "variable declaration" }

    method attributeScope {
        constantScope.emptyScope    // we don't know the attributes of a var
    }
}
class importStatement(path', name', dtype') {
    inherit baseNode
    method kind { "import" }
    var value is public := name'
    var path is public := path'
    var annotations is public := list []
    var dtype is public := dtype'

    method childrenDo(anAction:Procedure1) {
        annotations.do(anAction)
        value.do(anAction)
        decType.do(anAction)
    }
    method childrenMap(f:Function1) {
        def result = list.empty
        annotations.map(f) >> result
        value.map(f) >> result
        decType.map(f) >> result
    }
    method newAccept(aVisitor) {
        aVisitor.preVisit(self)
        aVisitor.postVisit(self) result(aVisitor.newVisitImport(self))
    }

    method end -> Position { value.end }
    method isImport { true }
    method isExternal { true }
    method isExecutable { false }
    method name { value }
    method nameString { value.nameString }
    method nodeString { nameString }
    method isPublic {
        // imports, like defs, are confidential by default
        if (hasAnnotation "public") then { return true }
        hasAnnotation "readable"
    }
    once method moduleName { withoutLeadingComponents(path) }
    method isWritable { false }
    method isReadable { isPublic }
    method declaringNodeWithAncestors(ac) { self }
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
        "import \"{self.path}\" as {nameString}"
    }
    method shallowCopy {
        importStatement(path, nullNode, false).shallowCopyFieldsFrom(self)
    }
    method postCopy(other) {
        annotations := other.annotations
        self
    }
    method attributeScope {
        scope.at(name).attributeScope   // ask our variable
    }
}
class dialectFromStringLiteral(s) {
    inherit dialectStatement(s.value)
    end := s.end
}
class dialectStatement (pathString) {
    inherit baseNode
    method kind { "dialect" }
    var value is public := pathString
    var end is public := noPosition

    method childrenDo(anAction:Procedure1) { done }
    method childrenMap(f:Function1) { [] }
    method newAccept(aVisitor) {
        aVisitor.preVisit(self)
        aVisitor.postVisit(self) result(aVisitor.newVisitDialect(self))
    }

    method isDialect { true }
    method isExternal { true }
    method isExecutable { false }
    once method moduleName {
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
    method nodeString { moduleName }
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
        dialectStatement(value).shallowCopyFieldsFrom(self)
    }
    method postCopy(other) {
        end := other.end
        self
    }
}
class returnStatement (expr) {
    inherit baseNode
    method kind { "return" }
    var value is public := expr
    var dtype is public := false  // the enclosing method's declared return type

    method attributeScope {
        value.attributeScope
    }
    method childrenDo(anAction:Procedure1) {
        value.do(anAction)
        decType.do(anAction)
    }
    method childrenMap(f:Function1) {
        def result = list.empty
        value.map(f) >> result
        decType.map(f) >> result
    }
    method newAccept(aVisitor) {
        aVisitor.preVisit(self)
        aVisitor.postVisit(self) result(aVisitor.newVisitReturn(self))
    }

    method end -> Position {
        if (noPosition ≠ value.end) then {
            value.end
        } else {
            line (line) column (column + 5)
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
        returnStatement(value).shallowCopyFieldsFrom(self)
    }
    method postCopy(other) {
        dtype := other.dtype
        self
    }
    method returnsObject { value.returnsObject }
    method returnedObject {
        // precondition: returnsObject
        value.returnedObject
    }
    method returnedObjectScope {
        // precondition: returns object
        value.returnedObjectScope
    }
    method resultExpression { value }
}
class inheritStatement (expr) {
    inherit baseNode
    method kind { "inherit" }
    var value is public := expr
    var reusedScope is public := set.empty
    var aliases is public := list []
    var exclusions is public := list []
    var isUse is public := false  // this is a `use trait` clause, not an inherit

    method reuseExpr { value }

    method childrenDo(anAction:Procedure1) {
        value.do(anAction)
        aliases.do(anAction)
        exclusions.do(anAction)
    }
    method childrenMap(f:Function1) {
        def result = list.empty
        value.map(f) >> result
        aliases.map(f) >> result
        exclusions.map(f) >> result
    }
    method newAccept(aVisitor) {
        aVisitor.preVisit(self)
        aVisitor.postVisit(self) result(aVisitor.newVisitInherit(self))
    }

    method end -> Position { value.end }
    method isLegalInTrait { isUse }
    method isInherits { true }
    method inheritFromMember { value.isMember }
    method inheritFromCall { value.isCall }
    method isExecutable { false }
    method accept(visitor : AstVisitor) from(ac) {
        if (visitor.visitInherit(self) up(ac)) then {
            def newChain = ac.extend(self)
            value.accept(visitor) from(newChain)
            aliases.do { a -> a.accept(visitor) from(newChain) }
            exclusions.do { e -> e.accept(visitor) from(newChain) }
        }
    }
    method createVariableFor(id) { sm.methodVariableFrom(self) }
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
        if (reusedScope.isEmpty.not) then {
            s := s ++ "\n{spc}Reusing: {reusedScope}"
        }
        s
    }
    method toGrace(depth : Number) -> String {
        var s := ""
        repeat (depth) times {
            s := s ++ "    "
        }
        s := s ++ "{statementName} {value.toGrace 0}"
        aliases.do { a ->
            s := "{s} {a} "
        }
        exclusions.do { e ->
            s := "{s} exclude {e.nameString} "
        }
        s
    }
    method asString is override {
        "{statementName} {nodeString} ({self.range})"
        // TODO: is this `self.` still necessary?
        // use statementName rather than kind
    }
    method nodeString { value.toGrace 0 }
    method nameString { value.toGrace 0 }
    method addAlias (newSig) for (oldSig) {
        aliases.push(aliasNew(newSig) old(oldSig))
    }
    method addExclusion(meth) {
        exclusions.push(meth)
    }
    method shallowCopy {
        inheritStatement(nullNode).shallowCopyFieldsFrom(self)
    }
    method postCopy(other) {
        reusedScope := other.reusedScope
        aliases := other.aliases
        exclusions := other.exclusions
        isUse := other.isUse
        self
    }
    method statementName {
        if (isUse) then { "use" } else { "inherit" }
    }
}
type AliasPair = interface {
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
    method kind { "alias" }

    method childrenDo(anAction:Procedure1) {
        newSignature.do(anAction)
        oldSignature.do(anAction)
    }
    method childrenMap(f:Function1) {
        def result = list.empty
        newSignature.map(f) >> result
        oldSignature.map(f) >> result
    }
    method newAccept(aVisitor) {
        aVisitor.preVisit(self)
        aVisitor.postVisit(self) result(aVisitor.newVisitAlias(self))
    }

    method newName {newSignature.asIdentifier}
    method oldName {oldSignature.asIdentifier}
    method nodeString { "{newSignature.nameString} = {oldSignature.nameString}" }
    method pretty(depth) {
        def spc = "  " * (depth+1)
        "{spc}alias\n{spc}  {newSignature.pretty(depth+2)}\n{spc}  =\n{spc}  {oldSignature.pretty(depth+2)}"
    }
    method end { oldSignature.end }
    method accept(visitor) from (ac) {
        if (visitor.visitAlias(self) up (ac)) then {
            def newChain = ac.extend(self)
            newSignature.accept(visitor) from (newChain)
            oldSignature.accept(visitor) from (newChain)
        }
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

class signaturePart(n) params(ps) {
    // a sequence of objects of this class make up the signatureParts
    // component of a methodDec
    inherit baseNode
    method kind { "signaturepart" }
    var name is public := n
    var params is public := ps
    var typeParams is public := false  // TODO make the default value []
    var lineLength is public := 0

    method childrenDo(anAction:Procedure1) {
        if (false ≠ typeParams) then { typeParams.do(anAction) }
        params.do(anAction)
    }
    method childrenMap(f:Function1) {
        def result = list.empty
        if (false ≠ typeParams) then { typeParams.map(f) >> result }
        params.map(f) >> result
    }
    method newAccept(aVisitor) {
        aVisitor.preVisit(self)
        aVisitor.postVisit(self) result(aVisitor.newVisitSignaturePart(self))
    }

    method end -> Position {
        if (params.isEmpty.not) then {
            return positionOfNext ")" after (params.last.end)
        }
        if (false ≠ typeParams) then {
            return positionOfNext "⟧" after (typeParams.last.end)
        }
        return line (line) column (column + name.size - 1)
    }
    method hasTypeParams { false ≠ typeParams }
    method numTypeParams { if (hasTypeParams) then {typeParams.size} else {0} }
    method numParams { params.size }
    method nameString {
        if (params.isEmpty) then {return name}
        name ++ "(" ++ params.size ++ ")"
    }
    method isTyped {
        params.anySatisfy { each -> each.isTyped }
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
    method declaringNodeWithAncestors(ac) {
        ac.parent.declaringNodeWithAncestors(ac.forebears)
    }
    method createVariableFor(id) { sm.parameterVariableFrom(id) }
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
        signaturePart(name) params(params)
            .shallowCopyFieldsFrom(self)
    }
    method postCopy(other) {
        typeParams := other.typeParams
        lineLength := other.lineLength
        self
    }
    method nodeString { nameString }
}

method requestPart(name) { requestPart(name) withArgs [] }

class requestPart(rPart) withArgs(xs) {
    inherit baseNode
    use typeArguments
    method kind { "callwithpart" }
    var name is public := rPart
    var args is public := xs
    var generics is public := false
    var lineLength is public := 0

    method childrenDo(anAction:Procedure1) {
        typeArgs.do(anAction)
        args.do(anAction)
    }
    method childrenMap(f:Function1) {
        def result = list.empty
        typeArgs.map(f) >> result
        args.map(f) >> result
    }
    method newAccept(aVisitor) {
        aVisitor.preVisit(self)
        aVisitor.postVisit(self) result(aVisitor.newVisitRequestPart(self))
    }

    method declaringNodeWithAncestors(ac) { self }
    method createVariableFor(id) { sm.parameterVariableFrom(id) }

    method end -> Position {
        if (args.isEmpty.not) then {
            return args.last.end  // there may or may not be a following `)`
        }
        if (typeArgs.isEmpty.not) then {
            return positionOfNext "⟧" after (typeArgs.last.end)
        }
        return line (line) column (column + name.size - 1)
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
        n.generics := maybeListMap(generics, blk) ancestors(newChain)
        blk.apply(n, ac)
    }
    method pretty(depth) {
        def spc = "  " * (depth+1)
        var s := "{basePretty(depth)}: {name}"
        if (hasTypeArgs) then {
            s := "{s}\n{spc}TypeArgs:"
            typeArgs.do { tArg ->
                s := "{s}\n    {spc}{tArg.pretty(depth + 2)}"
            }
        }
        if (args.size > 0) then {
            s := "{s}\n{spc}Args:"
            for (args) do { a ->
                s := "{s}\n    {spc}{a.pretty(depth + 2)}"
            }
        }
        s
    }
    method toGrace(depth) {
        var s := name
        if (hasTypeArgs) then {
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
        requestPart(name) withArgs(args).shallowCopyFieldsFrom(self)
    }
    method postCopy(other) {
        lineLength := other.lineLength
        generics := other.generics
        self
    }
    method statementName { "request" }
}

class comment (val') {
    inherit baseNode
    method kind { "comment" }
    var value is public := val'
    var isPartialLine:Boolean is public := false
    var isPreceededByBlankLine is public := false
    var endLine is public := util.linenum

    method childrenDo(anAction:Procedure1) { done }
    method childrenMap(f:Function1) { [] }
    method newAccept(aVisitor) {
        aVisitor.preVisit(self)
        aVisitor.postVisit(self) result(aVisitor.newVisitComment(self))
    }

    method end -> Position { line (endLine) column (util.lines.at(endLine).size) }
    method isComment { true }
    method isLegalInTrait { true }
    method isExecutable { false }
    method nodeString { value }
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
        comment(nullNode).shallowCopyFieldsFrom(self)
    }
    method postCopy(other) {
        value := other.value
        isPartialLine := other.isPartialLine
        isPreceededByBlankLine := other.isPreceededByBlankLine
        endLine := other.endLine
        self
    }
}

def typeType = identifier ("Type", false)

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


type AstVisitor = interface {
    visitIf(o) up(ac) -> Boolean
    visitBlock(o) up(ac) -> Boolean
    visitMatchCase(o) up(ac) -> Boolean
    visitTryCatch(o) up(ac) -> Boolean
    visitMethodSignature(o) up(ac) -> Boolean
    visitSignaturePart(o) up(ac) -> Boolean
    visitInterfaceLiteral(o) up(ac) -> Boolean
    visitTypeParameters(o) up(ac) -> Boolean
    visitTypeDec(o) up(ac) -> Boolean
    visitUniversalDec(o) up(ac) -> Boolean
    visitUnknown(o) up(ac) -> Boolean
    visitMethodDec(o) up(ac) -> Boolean
    visitRequest(o) up(ac) -> Boolean
    visitObject(o) up(ac) -> Boolean
    visitModule(o) up(ac) -> Boolean
    visitSequence(o) up(ac) -> Boolean
    visitRequestWithoutArgs(o) up(ac) -> Boolean
    visitTypeApplication(o) up(ac) -> Boolean
    visitIdentifier(o) up(ac) -> Boolean
    visitEllipsis(o) up(ac) -> Boolean
    visitString(o) up(ac) -> Boolean
    visitNumeral(o) up(ac) -> Boolean
    visitOp(o) up(ac) -> Boolean
    visitAssignment(o) up(ac) -> Boolean
    visitDefDec(o) up(ac) -> Boolean
    visitVarDec(o) up(ac) -> Boolean
    visitImport(o) up(ac) -> Boolean
    visitReturn(o) up(ac) -> Boolean
    visitInherit(o) up(ac) -> Boolean
    visitDialect(o) up(ac) -> Boolean
    visitComment(o) up(ac) -> Boolean
    visitImplicit(o) up(ac) -> Boolean
    visitYourself(o) up(ac) -> Boolean
    visitSelfType(o) up(ac) -> Boolean
    visitAlias(o) up(ac) -> Boolean
}

trait upConversion {
    method visitIf(o) up(ac) { visitIf(o) }
    method visitBlock(o) up(ac) { visitBlock(o) }
    method visitMatchCase(o) up(ac) { visitMatchCase(o) }
    method visitTryCatch(o) up(ac) { visitTryCatch(o) }
    method visitMethodSignature(o) up(ac) { visitMethodSignature(o) }
    method visitSignaturePart(o) up(ac) { visitSignaturePart(o) }
    method visitTypeDec(o) up(ac) { visitTypeDec(o) }
    method visitUniversalDec(o) up(ac) { visitUniversalDec(o) }
    method visitUnknown(o) up(ac) { visitUnknown(o) }
    method visitInterfaceLiteral(o) up(ac) { visitInterfaceLiteral(o) }
    method visitTypeParameters(o) up(ac) { visitTypeParameters(o) }
    method visitMethodDec(o) up(ac) { visitMethodDec(o) }
    method visitRequest(o) up(ac) { visitRequest(o) }
    method visitObject(o) up(ac) { visitObject(o) }
    method visitModule(o) up(ac) { visitModule(o) }
    method visitSequence(o) up(ac) { visitSequence(o) }
    method visitRequestWithoutArgs(o) up(ac) { visitRequestWithoutArgs(o) }
    method visitTypeApplication(o) up(ac) { visitTypeApplication(o) }
    method visitIdentifier(o) up(ac) { visitIdentifier(o) }
    method visitEllipsis(o) up(ac) { visitEllipsis(o) }
    method visitString(o) up(ac) { visitString(o) }
    method visitNumeral(o) up(ac) { visitNumeral(o) }
    method visitOp(o) up(ac) { visitOp(o) }
    method visitAssignment(o) up(ac) { visitAssignment(o) }
    method visitDefDec(o) up(ac) { visitDefDec(o) }
    method visitVarDec(o) up(ac) { visitVarDec(o) }
    method visitImport(o) up(ac) { visitImport(o) }
    method visitReturn(o) up(ac) { visitReturn(o) }
    method visitInherit(o) up(ac) { visitInherit(o) }
    method visitDialect(o) up(ac) { visitDialect(o) }
    method visitComment(o) up(ac) { visitComment(o) }
    method visitImplicit(o) up(ac) { visitImplicit(o) }
    method visitYourself(o) up(ac) -> Boolean { visitYourself(o) }
    method visitSelfType(o) up(ac) -> Boolean { visitSelfType(o) }
    method visitAlias(o) up(ac) -> Boolean { visitAlias(o) }

    method visitIf(o) is required
    method visitBlock(o) is required
    method visitMatchCase(o) is required
    method visitTryCatch(o) is required
    method visitMethodSignature(o) is required
    method visitSignaturePart(o) is required
    method visitTypeDec(o) is required
    method visitUniversalDec(o) is required
    method visitUnknown(o) is required
    method visitInterfaceLiteral(o) is required
    method visitTypeParameters(o) is required
    method visitMethodDec(o) is required
    method visitRequest(o) is required
    method visitObject(o) is required
    method visitModule(o) is required
    method visitSequence(o) is required
    method visitRequestWithoutArgs(o) is required
    method visitTypeApplication(o) is required
    method visitIdentifier(o) is required
    method visitEllipsis(o) is required
    method visitString(o) is required
    method visitNumeral(o) is required
    method visitOp(o) is required
    method visitAssignment(o) is required
    method visitDefDec(o) is required
    method visitVarDec(o) is required
    method visitImport(o) is required
    method visitReturn(o) is required
    method visitInherit(o) is required
    method visitDialect(o) is required
    method visitComment(o) is required
    method visitImplicit(o) is required
    method visitYourself(o) is required
    method visitSelfType(o) is required
    method visitAlias(o) is required
}

class baseVisitor -> AstVisitor {
    use upConversion

    method visitIf(o) -> Boolean { true }
    method visitBlock(o) -> Boolean { true }
    method visitMatchCase(o) -> Boolean { true }
    method visitTryCatch(o) -> Boolean { true }
    method visitMethodSignature(o) -> Boolean { true }
    method visitSignaturePart(o) -> Boolean { true }
    method visitTypeDec(o) -> Boolean { true }
    method visitUniversalDec(o) -> Boolean { true }
    method visitUnknown(o) -> Boolean { true }
    method visitInterfaceLiteral(o) -> Boolean { true }
    method visitTypeParameters(o) -> Boolean { true }
    method visitMethodDec(o) -> Boolean { true }
    method visitRequest(o) -> Boolean { true }
    method visitObject(o) -> Boolean { true }
    method visitModule(o) -> Boolean { true }
    method visitSequence(o) -> Boolean { true }
    method visitRequestWithoutArgs(o) -> Boolean { true }
    method visitTypeApplication(o) -> Boolean { true }
    method visitIdentifier(o) -> Boolean { true }
    method visitEllipsis(o) -> Boolean { true }
    method visitString(o) -> Boolean { true }
    method visitNumeral(o) -> Boolean { true }
    method visitOp(o) -> Boolean { true }
    method visitAssignment(o) -> Boolean { true }
    method visitDefDec(o) -> Boolean { true }
    method visitVarDec(o) -> Boolean { true }
    method visitImport(o) -> Boolean { true }
    method visitReturn(o) -> Boolean { true }
    method visitInherit(o) -> Boolean { true }
    method visitDialect(o) -> Boolean { true }
    method visitComment(o) -> Boolean { true }
    method visitImplicit(o) -> Boolean { true }
    method visitYourself(o) -> Boolean { true }
    method visitSelfType(o) -> Boolean { true }
    method visitAlias(o) -> Boolean { true }

    method asString { "an AST visitor" }
}

class pluggableVisitor(visitation:Predicate2⟦AstNode, Object⟧) -> AstVisitor {
    // Manufactures a default visitor, given a 2-parameter block.
    // Typically, some of the methods will be overridden.
    // The visitation predicate will be applied with the AST node as the first argument
    // and the ancestor chain as the second, and should answer true if
    // the visitation is to continue and false if it is to go no deeper.

    method visitIf(o) up(ac) { visitation.apply (o, ac) }
    method visitBlock(o) up(ac) { visitation.apply (o, ac) }
    method visitMatchCase(o) up(ac) { visitation.apply (o, ac) }
    method visitTryCatch(o) up(ac) { visitation.apply (o, ac) }
    method visitMethodSignature(o) up(ac) { visitation.apply (o, ac) }
    method visitSignaturePart(o) up(ac) { visitation.apply (o, ac) }
    method visitTypeDec(o) up(ac) { visitation.apply (o, ac) }
    method visitUniversalDec(o) up(ac) { visitation.apply (o, ac) }
    method visitUnknown(o) up(ac) { visitation.apply (o, ac) }
    method visitInterfaceLiteral(o) up(ac) { visitation.apply (o, ac) }
    method visitMethodDec(o) up(ac) { visitation.apply (o, ac) }
    method visitRequest(o) up(ac) { visitation.apply (o, ac) }
    method visitObject(o) up(ac) { visitation.apply (o, ac) }
    method visitModule(o) up(ac) { visitation.apply (o, ac) }
    method visitSequence(o) up(ac) { visitation.apply (o, ac) }
    method visitRequestWithoutArgs(o) up(ac) { visitation.apply (o, ac) }
    method visitTypeApplication(o) up(ac) { visitation.apply (o, ac) }
    method visitIdentifier(o) up(ac) { visitation.apply (o, ac) }
    method visitEllipsis(o) up(ac) { visitation.apply (o, ac) }
    method visitString(o) up(ac) { visitation.apply (o, ac) }
    method visitNumeral(o) up(ac) { visitation.apply (o, ac) }
    method visitOp(o) up(ac) { visitation.apply (o, ac) }
    method visitAssignment(o) up(ac) { visitation.apply (o, ac) }
    method visitDefDec(o) up(ac) { visitation.apply (o, ac) }
    method visitVarDec(o) up(ac) { visitation.apply (o, ac) }
    method visitImport(o) up(ac) { visitation.apply (o, ac) }
    method visitReturn(o) up(ac) { visitation.apply (o, ac) }
    method visitInherit(o) up(ac) { visitation.apply (o, ac) }
    method visitDialect(o) up(ac) { visitation.apply (o, ac) }
    method visitComment(o) up(ac) { visitation.apply (o, ac) }
    method visitImplicit(o) up(ac) { visitation.apply (o, ac) }
    method visitYourself(o) up(ac) { visitation.apply (o, ac) }
    method visitSelfType(o) up(ac) { visitation.apply (o, ac) }
    method visitAlias(o) up(ac) { visitation.apply (o, ac) }

    method asString { "a pluggable AST visitor" }
}

type Visitor = interface {  // the new ast visitor
    newVisitImplicit(aNode) -> Object
    newVisitNull(aNode) -> Object
    newVisitIf(aNode) -> Object
    newVisitBlock(aNode) -> Object
    newVisitTryCatch(aNode) -> Object
    newVisitMatchCase(aNode) -> Object
    newVisitMethodSignature(aNode) -> Object
    newVisitInterfaceLiteral(aNode) -> Object
    newVisitTypeDec(aNode) -> Object
    newVisitUniversalDec(aNode) -> Object
    newVisitUnknown(aNode) -> Object
    newvisitMethodDec(aNode) -> Object
    newVisitRequest(aNode) -> Object
    newVisitModule(aNode) -> Object
    newVisitObject(aNode) -> Object
    newVisitSequence(aNode) -> Object
    newVisitYourself(aNode) -> Object
    newVisitSelfType(aNode) -> Object
    newVisitRequestWithoutArgs(aNode) -> Object
    newVtypeApplication(aNode) -> Object
    newVisitTypeParameters(aNode) -> Object
    newVisitIdentifier(aNode) -> Object
    newVisitEllipsis(aNode) -> Object
    newVisitAnnotations(aNode) -> Object
    newVisitString(aNode) -> Object
    newVisitNumeral(aNode) -> Object
    newVisitOp(aNode) -> Object
    newVisitAssignment(aNode) -> Object
    newVisitDefDec(aNode) -> Object
    newVisitVarDec(aNode) -> Object
    newVisitImport(aNode) -> Object
    newVisitDialect(aNode) -> Object
    newVisitReturn(aNode) -> Object
    newVisitInherit(aNode) -> Object
    newVisitAlias(aNode) -> Object
    newVisitSignaturePart(aNode) -> Object
    newVisitRequestPart(aNode) -> Object
    newVisitComment(aNode) -> Object
}

class rootVisitor {
    // the superobject for visitors that have effects, but return no result

    method newVisitRoot(aNode) -> Done {
        aNode.childrenDo{ each -> each.newAccept(self) }
    }
    method newVisitImplicit(aNode) -> Done {
        newVisitRoot(aNode)
    }
    method newVisitNull(aNode) -> Done {
        newVisitRoot(aNode)
    }
    method newVisitIf(aNode) -> Done {
        newVisitRoot(aNode)
    }
    method newVisitBlock(aNode) -> Done {
        newVisitRoot(aNode)
    }
    method newVisitTryCatch(aNode) -> Done {
        newVisitRoot(aNode)
    }
    method newVisitMatchCase(aNode) -> Done {
        newVisitRoot(aNode)
    }
    method newVisitMethodSignature(aNode) -> Done {
        newVisitRoot(aNode)
    }
    method newVisitInterfaceLiteral(aNode) -> Done {
        newVisitRoot(aNode)
    }
    method newVisitTypeDec(aNode) -> Done {
        newVisitRoot(aNode)
    }
    method newVisitUnknown(aNode) -> Done {
        newVisitRoot(aNode)
    }
    method newvisitMethodDec(aNode) -> Done {
        newVisitRoot(aNode)
    }
    method newVisitRequest(aNode) -> Done {
        newVisitRoot(aNode)
    }
    method newVisitModule(aNode) -> Done {
        newVisitObject(aNode)
    }
    method newVisitObject(aNode) -> Done {
        newVisitRoot(aNode)
    }
    method newVisitSequence(aNode) -> Done {
        newVisitRoot(aNode)
    }
    method newVisitYourself(aNode) -> Done {
        newVisitRoot(aNode)
    }
    method newVisitSelfType(aNode) -> Done {
        newVisitRoot(aNode)
    }
    method newVisitRequestWithoutArgs(aNode) -> Done {
        newVisitRoot(aNode)
    }
    method newVtypeApplication(aNode) -> Done {
        newVisitRoot(aNode)
    }
    method newVisitTypeParameters(aNode) -> Done {
        newVisitRoot(aNode)
    }
    method newVisitIdentifier(aNode) -> Done {
        newVisitRoot(aNode)
    }
    method newVisitEllipsis(aNode) -> Done {
        newVisitIdentifier(aNode)
    }
    method newVisitAnnotations(aNode) -> Done {
        newVisitRoot(aNode)
    }
    method newVisitString(aNode) -> Done {
        newVisitRoot(aNode)
    }
    method newVisitNumeral(aNode) -> Done {
        newVisitRoot(aNode)
    }
    method newVisitOp(aNode) -> Done {
        newVisitRoot(aNode)
    }
    method newVisitAssignment(aNode) -> Done {
        newVisitRoot(aNode)
    }
    method newVisitDefDec(aNode) -> Done {
        newVisitDeclaration(aNode)
    }
    method newVisitVarDec(aNode) -> Done {
        newVisitRoot(aNode)
    }
    method newVisitDeclaration(aNode) -> Done {
        newVisitRoot(aNode)
    }
    method newVisitUniversalDec(aNode) -> Done {
        newVisitRoot(aNode)
    }
    method newVisitImport(aNode) -> Done {
        newVisitRoot(aNode)
    }
    method newVisitDialect(aNode) -> Done {
        newVisitRoot(aNode)
    }
    method newVisitReturn(aNode) -> Done {
        newVisitRoot(aNode)
    }
    method newVisitInherit(aNode) -> Done {
        newVisitRoot(aNode)
    }
    method newVisitAlias(aNode) -> Done {
        newVisitRoot(aNode)
    }
    method newVisitSignaturePart(aNode) -> Done {
        newVisitRoot(aNode)
    }
    method newVisitRequestPart(aNode) -> Done {
        newVisitRoot(aNode)
    }
    method newVisitComment(aNode) -> Done {
        newVisitRoot(aNode)
    }
    method preVisit -> Done {
        // hook method
    }
    method postVisit(result) {
        // hook method
        result
    } 
}

class rootMappingVisitor {
    // the superobject for visitors that have a result.  I'm not yet sure how
    // they should work!  So, for now, this is the same as rootVisitor.

    inherit rootVisitor
}
