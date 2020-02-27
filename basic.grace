dialect "standard"

// A bundle of basic definitions used in many parts of the minigrace compiler
//
// AstNode: the type of a parse node cum AST node
// Position — the type of a point in the source code
// Range — the type of a range of the source code
// Scope — the type of a symbol table of declared identifiers
// Variable — the type of symbol table entry describing a declared variable
// noPosition — a null source-code position
// emptyRange — an empty source code range
// nullNode:AstNode — a "null" for AST nodes
// class fakeSymbolTable — generates a new placeholder symbol table

trait open {

    // defines positions, and ranges, in the source

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
        rangeString -> String
        rangeLongString -> String
        lineRangeString -> String
    }
    type Scope = Object & interface {
        outerScope → Scope
        node → AstNode
        uid → String
        allNames → Sequence⟦String⟧
        in(anotherScope) → SelfType
            // sets the outerScope for this scope, and returns self
        node(nu:AstNode) → SelfType
            // sets the node for this scope, and returns self
        lookup (name) ifAbsent (aBlock)
            // Return the variable corresponding to name, which may or may not be
            // defined in this scope, or in one of the lexically surrounding scopes.
            // If it is not defined, return the value of executing aBlock.
        lookup (name)
            // Return the variable corresponding to name, which must be
            // defined in this scope, or in one of the lexically surrounding scopes.

        lookupLocally (name) ifAbsent (aBlock) ifPresent (pBlock)
            // Look up variable corresponding to name, which may or may not be defined
            // in this scope. If it is not defined, return the result of executing
            // aBlock; otherwise, return the result of applying pBlock to the variable.
        isFresh → Boolean
            // answer true if this scope is one that can be used or inherited
        attributeScopeOf (aName) → Scope
        asString → String
        lookupLocallyOrReused (name) ifAbsent (aBlock)
            // Return the variable corresponding to name, which may or may not be defined in this scope,
            // or in one of the scopes that it reuses.
            // If name is not defined, return the value of executing aBlock.
        lookupLocallyOrReused (name)
        copy(other)
        areReusedNamesCompleted → Boolean
        objectScope → SelfType
        reusedNames → Dictionary
        isModuleScope → Boolean
        reuses (name) → Boolean
            // Is name defined by a scope that this scope reuses?
        lookup (name) ifAbsent (aBlock) ifPresent (pBlock)
            // applies pBlock to the variable corresponding to name, if it is defined
            // in this scope, or in one of the lexically surrounding scopes.  If it
            // is not defined, return the value of executing aBlock
        == (other) → Boolean
        lookupLexically (name)
        redeclarationError (aMessage) variable (aVariable) → None
            // raises a NamingError
        add (aVariable) withName (aName) → Variable
        structuralError (aMessage) variable (aVariable) → None
            // raises a NamingError
        allNamesAndValuesDo (aBlock) → Done
        defines (name) → Boolean
            // Is name defined in this scope, or in one of the lexically surrounding scopes?
        redefine (aVariable) withName (aName) → Variable
        hash → Number
        isTrait → Boolean
        isTheEmptyScope → Boolean
        isDialectScope → Boolean
        localAndReusedNamesAndValuesDo (aBlock) → Done
        lookupReused (name) ifAbsent (aBlock)
        lookupReused (name) ifAbsent (aBlock) ifPresent (pBlock)
        lookupLexically (name) ifAbsent (aBlock)
        definesLocallyOrReuses (name) → Boolean
        dialectError (aString) → None
            // raises a CompilationError
        localNamesAndValuesDo (aBlock) → Done
        removeReused (aName) ifAbsent (aBlock) → Done
        lookupLocallyOrOutwards (name) ifAbsent (aBlock) → Variable
        add (aVariable) → Variable
        localNames → Dictionary
        lookupLocally (name) ifAbsent (aBlock) → Variable
        reusedNamesAndValuesDo (aBlock) → Done
        definesLocally (name) → Boolean
            // Is name defined in this scope (ignoring surrounding scopes and required methods)

        doesNotDefineLocally (name) → Boolean
        lookupLocallyOrReused (name) ifAbsent (aBlock) ifPresent (pBlock) → Variable
        isObjectScope → Boolean
        variety → String
        clear → Done
        at (name) putScope (attrScope)
            // mutates the variable associated with name so that its attributeScope is attrScope
        withSurroundingScopesDo (b) → Done
            // do b in this scope and all surrounding scopes.
    }
    type Variable = interface {
        canBeOriginOfSuperExpression → Boolean
        declaredName → String
        definingParseNode → AstNode
        definingScope → Scope
        isAnnotatedConfidential → Boolean
        isAnnotatedPublic → Boolean
        isAnnotatedReadable → Boolean
        isAnnotatedWith (anAnnotationName) → Boolean
        isAnnotatedWritable → Boolean
        isAssignable → Boolean
        isAvailableForReuse → Boolean
        isConcrete → Boolean
        isConfidential → Boolean
        isExplicitMethod → Boolean
        isIfThenElse → Boolean
        isImport → Boolean
        isMatchCase → Boolean
        isMethod → Boolean
        isMethodOrParameterizedType → Boolean
        isOnceMethod → Boolean
        isPublic → Boolean
        isPublicByDefault → Boolean
        isReadable → Boolean
        isSpecialControlStructure → Boolean
        isTryCatch → Boolean
        isType → Boolean
        isTypeParameter → Boolean
        isWritable → Boolean
        kind → String
        lineRangeString → String
        moduleName → String
        range → Range
        rangeLongString → String
        rangeString → Boolean
        startPosition → Position
        stopPosition → Position
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
        method asString { rangeString }
        method == (other) {
            (start == other.start) && (end == other.end)
        }
        method hash -> Number {
            hashCombine(start.hash, end.hash)
        }
        method rangeLongString {
            // returns a range string such as "line 17 column 5" ,
            // "line 17 columns 5 to 25", or "line 17 column 5 to line 22 column 10"
            if ((start == end) || (end == noPosition)) then {
                "line {start.line} column {start.column}"
            } elseif { end.line == start.line } then {
                "line {start.line}, columns {start.column}-{end.column}"
            } else {
                "line {start.line} column {start.column} to line " ++
                        "{end.line} column {end.column}"
            }
        }
        method rangeString {
            // returns a range string such as "17:5" , "17:5-25" or "17:5–22:10"
            if ((start == end) || (end == noPosition)) then {
                start.asString
            } elseif { end.line == start.line } then {
                "{start}-{end.column}"
            } else {
                "{start}-{end}"
            }
        }
        method lineRangeString {
            // returns a line range such as "line 17", or "lines 17–21"
            if ((start.line == end.line) || (end == noPosition)) then {
                "line {start.line}"
            } else {
                "lines {start.line}-{end.line}"
            }
        }
    }
    once method noPosition { line 0 column 0 }
    once method emptyRange { start (noPosition) end (noPosition) }

    type AstNode = interface {
        kind -> String
            // Used for pseudo-instanceof tests, and for printing
        register -> String
            // Used in the code generator to name the resulting object
        line -> Number
            // The source line the node came from; the first line is 1
        line:=(ln:Number)
        column -> Number
            // the first column is 1
        column:=(lp:Number)
        scope -> Scope
            // The symbol table for names defined in this node and its sub-nodes
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

    once class nullNode -> AstNode {
        use identityEquality
        def kind is public = "null"
        def register is public = "null"
        def line is public = 0
        def column is public = 0
        def scope is public = fakeSymbolTable
        method decType {
            self   // can't be Unknown, because ast depends on this module
        }
        method nameString { asString }
        method isMarkerDeclaration { false }
        method hasAnnotation(_) { false }
        method isMember { false }
        method isMethod { false }
        method isDialect { false }
        method isModule { false }
        method isExecutable { false }
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
        method isBuiltIn { false }
        method isOuter { false }
        method isSelfOrOuter { false }
        method isBlock { false }
        method isObject { false }
        method isIdentifier { false }
        method isImport { false }
        method isTypeDec { false }
        method isExternal { false }
        method isFresh { false }
        method isConstant { false }
        method isSequenceConstructor { false }
        method start { line (line) column (column) }
        method childrenDo(anAction:Procedure1) { done }
        method childrenMap(f:Function1) { [] }
        method newAccept(aVisitor) {
            aVisitor.preVisit(self)
            aVisitor.postVisit(self) result(aVisitor.newVisitNull(self))
        }
        method toGrace(depth) {
            "// null"
        }
        method range { emptyRange }
        method endCol { 0 }
        method annotations { [] }
        method end -> Position { line (0) column (0) }
        method asString { "the nullNode" }
        method isNull { true }
        method accept(visitor) from (ac) { }
        method map(blk) ancestors(ac) { self }
        method shallowCopy { self }
        method column:=(_) { ProgrammingError.raise "Can't change column of nullNode" }
        method comments { ProgrammingError.raise "Can't get comments from nullNode" }
        method line:=(_) { ProgrammingError.raise "Can't change line of nullNode" }
        method pretty(n) { toGrace(n) }
    }

    class fakeSymbolTable is public {
        use identityEquality
        var node is public     // will be initialized when this node
          // is placed in an AstNode using scope:=(_).
          // Can't make it nullNode now, because nullNode
          // initializes its scope to fakeSymbolTable
        method asString { "the fakeSymbolTable" }
        method addNode (n) ac (kind) {
            ProgrammingError.raise "fakeSymbolTable(on node {node}).addNode({n}) ac \"{kind}\""
        }
        method variety { "fake" }
    }
}
