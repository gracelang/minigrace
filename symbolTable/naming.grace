import "ast" as ast
import "unixFilePath" as filePath
import "errormessages" as errormessages
import "xmodule" as xmodule
import "sys" as sys
import "util" as util
import "sourcePosition" as sourcePosition
import "scope" as scope

def moduleRegistry = object {
    // I am a singleton object that stores the parse trees for previosuly compiled modules.

    var modules    //  a dictionary mapping module names to parse trees
    initialize

    method lookup (aName) {
        // answers the module registered with aName
        return lookup (aName) ifAbsent {
            moduleRegistry.tryToCompile (aName)
        }
    }
    method initialize {
        modules := dictionary.empty
    }
    method lookup (aName) ifAbsent (aBlock) {
        // answers the module registered with aName.  Tries to recompile
        // if it's out of date with respect to the source.
        def module = modules.at (aName) ifAbsent {
            return aBlock.apply
        }
        if (module.isUpToDate) then {
            return module
        }
        return tryToCompile (aName)
    }
    method add (aParseTree) {
        modules.at (aParseTree.name) put (aParseTree)
        return aParseTree
    }

    method clear {
        // clear the registry
        initialize
    }
    method fileModificationTimeOf (aModuleName) {
        return locateSourceFor (aModuleName).modificationTime
    }
    method attributeScopeOf (aModule) {
        lookup (aModule) ifAbsent {
            tryToCompile (aModule)
        }.scope
    }
    method locateSourceFor (aModule) {
        // find the source file for aModule

        def gmp = sys.environ.at "GRACE_MODULE_PATH"
        def fileName = filePath.fromString(aModule).setExtension "grace"
        util.file(fileName) on (util.sourceDir) orPath (gmp) otherwise { dirs ->
            errormessages.error
                  ("can't find source for module \"{aModule}\"; " ++
                  "looked in {errormessages.readableStringFrom(dirs)}")
                  atRange(sourcePosition.emptyRange)  // TODO get the range
        }
    }
    method tryToCompile (aModuleName) {
        def source = locateSourceFor (aModuleName)
        xmodule.compileModule (aModuleName) inFile (source) forDialect(false) // TODO is this a dialect?
              atRange(sourcePosition.emptyRange)  // TODO get the range
    }
}

def ReuseError = errormessages.CompilationError.refine "ReuseError"

class reuseError {

    method nonObjectReuseOf (receiverScope) from (reuseNode) {
        def componentName = receiverScope.node.declaredName
        ReuseError.raise ("element {componentName} of your {reuseNode.description} " ++
              "is not an object")
              with (reuseNode)
    }
    method notManifest (aReuseNode) {
        ReuseError.raise ("sorry, you can't {aReuseNode.description} " ++
              "{aReuseNode.superExpr.description}, because it might be overriden")
              with (aReuseNode.superExpr)
    }
    method notGenerative (aReuseNode) {
        ReuseError.raise ("the expression in your {aReuseNode.description} " ++
              "statement does not generate a fresh object")
              with (aReuseNode.superExpr)
    }
    method notLegalTrait (aUseNode) {
        ReuseError.raise ("the expression in your {aUseNode.description} " ++
              "statement does not refer to a trait")
              with (aUseNode.superExpr)
    }
    method notFresh (aNode) {
        ReuseError.raise ("this method can't be reused, because it does not " ++
              "return a fresh object")
              with (aNode)
    }
    method malformedTraitContaining (aBadNode) {
        ReuseError.raise "{aBadNode.description} is not allowed in a trait"
              with (aBadNode)
    }
    method badAlias (anAliasNode) {
        def old = anAliasNode.oldMethod.declaredName
        def new = anAliasNode.newMethod.declaredName
        def superDescription = anAliasNode.parent.description
        ReuseError.raise ("can't define `{new}` as an alias for `{old}` " ++
              "because `{old}` is not present in {superDescription}")
              with (anAliasNode)
    }
    method badExclusion (anExcludedIdentifier) in (aReuseNode) {
        def superDescription = if (aReuseNode.isInheritStatement) then {
             "the inherited object"
        } else {
             "the used trait"
        }
        ReuseError.raise ("can't exclude {anExcludedIdentifier.nameString} " ++
              " because it is not present in {superDescription}")
              with (anExcludedIdentifier)
    }
    method multipleInheritance (inhNodes) {
        ReuseError.raise "there can be at most one inherit statement per object constructor"
              with (inhNodes.second)
    }
    method selfReuse (aReuseNode) {
        def superDescription = aReuseNode.description
        ReuseError.raise
              ("it's not possible to {superDescription} from `self`, " ++
              "because `self` does not exist when the {superDescription} " ++
              "statement is executed")
              with (aReuseNode.superExpr)
    }
}
class definitionGatherer {
    // This class represents the process of gathering the reused names for an
    // objectConstructor, class, trait or module that inherits or uses definitions
    // from another class, trait, or method that returns a fresh object.
    // Instance variables:


    var node // the node that represents the objectConstructor, class, trait
             // or module to whose scope we are addding additional names.
    var nodeScope  // node's scope

    method for (aNode) {
        // sets the node on whose behalf we are gathering
        node := aNode
        nodeScope := aNode.scope
        return self
    }
    method disambiguateSuperExpressionIn (useNode) {
        def superExpr = useNode.superExpr
        if (superExpr.isImplicitRequest) then {
            return nodeRewriter.rewriteImplicitRequest (superExpr)
        }
        if (superExpr.isIdentifier) then {
            return nodeRewriter.rewriteIdentifier (superExpr)
        }
    }
    method addAliasesFrom (aReuseStatement) to (aScope) from (reusedScope) {
        // Look at the alias clauses in aReuseStatement, and add the appropriate attributes to aScope
        def aliases = aReuseStatement.modifiers.select { each →
            each.isAliasClause
        }
        aliases.do { al →
            def oldName = al.oldMethod.declaredName
            def oldValue = reusedScope.lookup (oldName) ifAbsent {
                reuseError.badAlias (al)
            }
            aScope.add (oldValue) withName (al.newMethod.declaredName)
        }
    }
    method namesFrom (reusedScope) excludedBy (aReuseStatement) {
        // look at all of the exclusion clauses in aReuseStatement, and make sure that each excluded
        // name is actually present in reusedScope.  Returns a collection containing the excluded names.
        def exclusionClauses = aReuseStatement.modifiers.select { each →
            each.isExcludeClause
        }
        exclusionClauses.do { ex →
            if (reusedScope.defines (ex.nameString).not) then {
                reuseError.badExclusion (ex)
            }
        }
        return exclusionClauses.map { each →
            each.nameString
        }
    }
    method addInheritedNamesFrom (reusedScope) to (result) excluding (excludedNames) {
        reusedScope.localAndReusedNamesAndValuesDo { nm, val →
            if (excludedNames.includes (nm).not) then {
                result.add (val) withName (nm)
            }
        }
    }
    method defaultInheritedScope {
        // Note that we inherit from intrinsic.graceObject, not the graceObject
        // in the current scope.	This is so that all objects have the same
        // ultimate ancestor, and because of the rule that `use` excludes
        // methods from graceObject.
        //
        // The exception is that in the module intrinsic, we don't inherit from
        // intrinsic.graceObject

        if (node.isInIntrinsicModule) then {
            scope.graceEmptyScope
        } else {
            moduleRegistry.attributeScopeOf "intrinsic".attributeScopeOf "graceObject"
        }
    }
    method addUsedNamesFrom (reusedScope) to (result) excluding (excludedNames) {
        reusedScope.localAndReusedNamesAndValuesDo { nm, val →
            if ((excludedNames.includes (nm) || {
                val.definingParseNode.isFrom_graceObject
            }).not) then {
                result.add (val) withName (nm)
            }
        }
    }
    method gatherUsedNames {
        // add to node's scope the names obtained from its `use` statements,
        // except for names obtained from `graceObject`
        def useNodes = node.items.select { each →
            each.isUseStatement
        }
        useNodes.do { useNode →
            disambiguateSuperExpressionIn (useNode)
        }
        def modifiedTraits = useNodes.collect { useNode →
            applyUseModifiersOf (useNode)
        }
        combineTraits (modifiedTraits)
    }
    method reuseError (aMessage) {
        ReuseError.raise (aMessage) with (node)
    }
    method reusedScope (aGraceReuseStatement) {
        // answers the scope referenced by the super expression
        def expr = aGraceReuseStatement.superExpr
        if (expr.startsWithSelf) then {
            reuseError.selfReuse (aGraceReuseStatement)
        }
        return expr.objectScopeFor (aGraceReuseStatement)
    }
    method applyInheritanceModifiersOf (anInheritStatement) {
        // answer a new scope that contains the names provided by this `use` or
        // `inherit` statement, as modified by its `exclude` and `alias` clauses

        def reusedScope = reusedScope (anInheritStatement)
        if (reusedScope.isGenerative.not) then {
            return reuseError.notGenerative (anInheritStatement)
        }
        definitionGatherer.for (reusedScope.node).collectReusedNames
        def result = scope.graceObjectScope.node (anInheritStatement)
        def excludedNames = namesFrom (reusedScope) excludedBy (anInheritStatement)
        addInheritedNamesFrom (reusedScope) to (result) excluding (excludedNames)
        addAliasesFrom (anInheritStatement) to (result) from (reusedScope)
        return result
    }
    method combineTraits (traitScopes) {
        def tempScope = scope.graceObjectScope
        traitScopes.do { s →
            s.localAndReusedNamesAndValuesDo { nm, vl →
                if ((vl.isAvailableForReuse && {
                    nodeScope.definesLocally (nm).not
                })) then {
                    if (tempScope.definesLocally (nm)) then {
                        ReuseError.raise ("trait conflict — there are multiple " ++
                              "definitions of `{nm}`, but no local override")
                              with (s.node)
                    }
                    tempScope.add (vl) withName (nm)
                }
            }
        }
        nodeScope.addLocalAndReusedFrom (tempScope)
    }

    method gatherInheritedNames {
        // node represents a class, objectConstructor, or module;
        // add to node's scope the names obtained from its `inherit` statements
        var inhNode
        def inhNodes = node.items.select { each →
            each.isInheritStatement
        }
        if ((inhNodes.size > 1)) then {
            reuseError.multipleInheritance (inhNodes)
        }
        def objScope = node.scope
        inhNodes.ifEmpty {
            inhNode := ast.nullNode
            def superScope = defaultInheritedScope
            objScope.addLocalAndReusedFrom (superScope)
        } ifNotEmpty {
            inhNode := inhNodes.first
            disambiguateSuperExpressionIn (inhNode)
            def modifiedSuper = applyInheritanceModifiersOf (inhNode)
            objScope.addLocalAndReusedFrom (modifiedSuper)
        }
    }
    method applyUseModifiersOf (aUseStatement) {
        // answer a new scope that contains the names provided by this `use`
        // statement, as modified by its `exclude` and `alias` clauses.
        def reusedScope = reusedScope (aUseStatement)
        if (reusedScope.isGenerative.not) then {
            return reuseError.notGenerative (aUseStatement)
        }
        if (reusedScope.isLegalAsTrait.not) then {
            return reuseError.notLegalTrait (aUseStatement)
        }
        def result = scope.graceObjectScope.node (aUseStatement)
        def excludedNames = namesFrom (reusedScope) excludedBy (aUseStatement)
        addUsedNamesFrom (reusedScope) to (result) excluding (excludedNames)
        addAliasesFrom (aUseStatement) to (result) from (reusedScope)
        return result
    }

    method collectReusedNames {
        if (nodeScope.areReusedNamesCompleted) then {
            return self
        }
        if (nodeScope.areReusedNamesInProgress) then {
            reuseError "cyclic inheritance or trait use"
        }
        nodeScope.markReusedNamesAsInProgress
        gatherInheritedNames
        gatherUsedNames
        nodeScope.markReusedNamesAsCompleted
    }
}

def namingError = object {

    method underscore (aMessage) node (aGraceParseNode) {
        return GraceNamingError.raise (aMessage) with (aGraceParseNode)
    }
}

def multiplicativeAndAdditive = ["+", "*", "/", "-"]

class disambiguationVisitor {
    inherit nameResolutionVisitor
    // I replace implicit requests by explicit requests.  I also make some other checks on the parse tree: those that cannot be performed until all of the scopes have been constructed.  For example, I check that all names used as annotations have been declared as annotations.
    // Specifically, each ImplicitRequest node is replaced by an OuterRequest node or a SelfRequest node.  I also signal an exception if the reciever of the implicit request can't be determined, either because the request is not defined in scope, or because it is defined in multiple places.
    // I update the parse-tree that I am visiting in place.


    method visitAnnotations (anAnnotation) {
        // check that all of the annotations are declared as annotations
        anAnnotation.anns.do { anAnnLabel →
            def defn = anAnnotation.scope.lookup (anAnnLabel.requestedName) ifAbsent {
                return GraceNamingError.undeclaredIdentifier (anAnnLabel)
            }
            if (defn.isAnnotation.not) then {
                return GraceNamingError.definition (defn) usedAsAnnotation (anAnnLabel)
            }
        }
        return super.visitAnnotations (anAnnotation)
    }
    method operatorsToBePoppedFrom (operatorTokens) {
        var result
        result := 1
        operatorTokens.reversed.overlappingPairsDo { a, b →
            if (operator (b) isOfGreaterOrEqualPrecedence (a).not) then {
                return result
            }
            result := (result + 1)
        }
        return result
    }
    method visitBinaryRequest (aBinaryRequest) {
        def operators = aBinaryRequest.ops.collect "name".asSet
        if ((operators.size == 1)) then {
            return super.visitBinaryRequest (aBinaryRequest)
        }
        if (multiplicativeAndAdditive.includesAll (operators)) then {
            return super.visitBinaryRequest (implementPrecedenceForPlusAndTimes (aBinaryRequest))
        }
        return precedenceError "Sorry, I don't know how to parenthesize this sequence of binary operators" node (aBinaryRequest)
    }
    method implementPrecedenceForPlusAndTimes (binaryRequest) {
        var ix
        var newNode
        def operands = list.with (binaryRequest.receiver)
        def operators = list.empty
        ix := 1
        while {
            while {
                operators.addLast (binaryRequest.ops.at (ix))
                operands.addLast (binaryRequest.args.at (ix))
                ix := (ix + 1)
                ((ix ≤ binaryRequest.ops.size) && {
                    operator (binaryRequest.ops.at (ix)) isOfGreaterOrEqualPrecedence (operators.last)
                })
            } do {

            }
            def numberOfOperatorsToPop = operatorsToBePoppedFrom (operators)
            def newOperands = operands.removeLast ((numberOfOperatorsToPop + 1))
            def newOperators = operators.removeLast (numberOfOperatorsToPop)
            newNode := GraceBinaryRequestNode.withOperands (newOperands) operators (newOperators)
            operands.addLast (newNode)
            (ix ≤ binaryRequest.ops.size)
        } do {

        }
        assert ((operands.size == ((operators.size + 1))))
        if ((operands.size > 1)) then {
            newNode := GraceBinaryRequestNode.withOperands (operands) operators (operators)
        }
        binaryRequest.replaceWith (newNode.fixParentPointers)
        return newNode
    }
    method visitIdentifier (anIdentifier) {
        // We may re-write this identifier into a OneselfRequest.  In this case, the
        // super-visitation will be on a different class of node.
        def possiblyRewrittenNode = nodeRewriter.rewriteIdentifier (anIdentifier)
        return if (possiblyRewrittenNode.isIdentifier) then {
            super.visitIdentifier (possiblyRewrittenNode)
        } else {
            acceptNode (possiblyRewrittenNode)
        }
    }
    method operator (aNewGraceToken) isOfGreaterOrEqualPrecedence (aPriorGraceToken) {
        // The tokens must be members of the set {*, +, /, -}, since Grace has no other precedence rules
        return ("*/".includesSubstring (aNewGraceToken.value) || {
             "+-".includesSubstring (aPriorGraceToken.value)
        })
    }
    method assignmentError (aMessage) node (aParseNode) {
        assignmentError.raise (aMessage) with (aParseNode)
    }
    method precedenceError (aMessage) node (aGraceParseNode) {
        AmbiguityError.raise (aMessage) with (aGraceParseNode)
    }
    method visitImplicitRequest (anImplicitNode) {
        def rewrittenNode = nodeRewriter.rewriteImplicitRequest (anImplicitNode)
        return if ((rewrittenNode == anImplicitNode )) then {
            super.visitImplicitRequest (anImplicitNode)
        } else {
            rewrittenNode.acceptVisitor (self)
        }
    }
    method visitAssignment (anAssignment) {
        // if this is an assignment request, replace this assignment node with a request node
        def rewrittenNode = nodeRewriter.rewriteAssignment (anAssignment)
        return if ((rewrittenNode == anAssignment )) then {
            super.visitAssignment (anAssignment)
        } else {
            rewrittenNode.acceptVisitor (self)
        }
    }
}

def nodeRewriter = object {
    // I am responsible for the re-writing a single parse-tree node, and
    // splicing the new node back into the parse tree.  I have no state.

    method rewriteImplicitRequest (anImplicitRequest) {
        def theRequest = anImplicitRequest.request
        def defs = GraceResolvedVariable.definitionsOf (theRequest.requestedName) visibleIn (anImplicitRequest.scope)
        if (defs.isEmpty) then {
            return GraceNamingError.undeclaredIdentifier (theRequest)
        }
        if ((defs.size == 1)) then {
            return updateImplicitRequest (anImplicitRequest) using (defs.first)
        }
        assert {
            (defs.size > 1)
        }
        return ambiguityError (defs) node (anImplicitRequest)
    }
    method updateIdentifier (anIdentifierNode) using (aResolvedVariable) {
        anIdentifierNode.variable (aResolvedVariable.definition)
        if (aResolvedVariable.definition.isMethod.not) then {
            return anIdentifierNode
        }
        def request = ast.requestPart.request (anIdentifierNode.nameString)
        def newNode = generateOneselfRequestOf (request) from (anIdentifierNode) objectsOut (aResolvedVariable.objectsUp)
        anIdentifierNode.replaceWith (newNode)
        return newNode
    }
    method updateAssignment (anAssignment) using (aResolvedVariable) {
        if (aResolvedVariable.definition.isMethod.not) then {
            return self
        }
        def request = buildRequestPartFromAssignment (anAssignment)
        def newNode = generateOneselfRequestOf (request) from (anAssignment) objectsOut (aResolvedVariable.objectsUp)
        anAssignment.replaceWith (newNode)
        return newNode
    }
    method updateImplicitRequest (anImplicitRequestNode) using (aResolvedVariable) {
        if (aResolvedVariable.definition.isMethodOrParameterizedType.not) then {
            return anImplicitRequestNode
        }
        def request = anImplicitRequestNode.request.copy
        def newNode = generateOneselfRequestOf (request) from (anImplicitRequestNode) objectsOut (aResolvedVariable.objectsUp)
        anImplicitRequestNode.replaceWith (newNode)
        return newNode
    }
    method buildRequestPartFromAssignment (anAssignment) {
        // return a new requestPart node to replace anAssignment

        def requestName = anAssignment.lhs.nameString ++ ":="
        def newNode = ast.requestPart.request(requestName) withArgs [anAssignment.rhs]
        newNode.setPositionFrom := anAssignment
        newNode.fixParentPointers
    }
    method rewriteIdentifier (anIdentifier) {
        if (anIdentifier.isDefinition) then {
            return anIdentifier
        }
        def defs = GraceResolvedVariable.definitionsOf (anIdentifier.name) visibleIn (anIdentifier.scope)
        if (defs.isEmpty) then {
            return GraceNamingError.undeclaredIdentifier (anIdentifier)
        }
        if ((defs.size == 1)) then {
            return updateIdentifier (anIdentifier) using (defs.first)
        }
        if ((defs.size > 1)) then {
            return ambiguityError (defs) node (anIdentifier)
        }
    }
    method rewriteAssignment (anAssignment) {
        def lhs = anAssignment.lhs
        def defs = GraceResolvedVariable.definitionsOf (anAssignment.assignmentRequestName) visibleIn (anAssignment.scope)
        defs.ifEmpty {
            def badBinding = anAssignment.scope.lookup (lhs.name) ifAbsent {
                AssignmentError.raise "`{lhs.name}` is not declared" with (lhs)
            }
            AssignmentError.raise ("You can't assign to `{lhs.name}` because " ++
                  "it is not declared as a variable") with (lhs)
        }
        if (defs.size > 1) then {
            return ambiguityError (defs) node (lhs)
        }
        return updateAssignment (anAssignment) using (defs.first)
    }
    method generateOneselfRequestOf (request) from (aSourceNode) objectsOut (objectsUp) {
        var newNode
        def scanner = aSourceNode.scanner
        if ((objectsUp == 0)) then {
            newNode := GraceSelfRequestNode.new.request (request)
            newNode.selfDotToken (GraceToken.value "" start (aSourceNode.startPosition) ids [ scanner.selfDotId ]  scanner (scanner))
        } else {
            newNode := GraceOuterRequestNode.new.request (request)
            def outerDotToken = GraceToken.value "" start (aSourceNode.startPosition) ids [ scanner.outerDotId ]  scanner (scanner)
            newNode.outerDotTokens ((1 .. objectsUp ).collect { _ →
                outerDotToken
            })
        }
        return newNode.fixParentPointers
    }
    method ambiguityError (defs) node (aNode) {
        // Signals an ambiguity error.  Does not return
        def msg = WriteStream.on (String.new)
        (msg << "the name `" << aNode.requestedName << "` is ambiguous; it might refer to ")
        (msg << "either the ")
        defs.do { variable →
            (msg << variable.resolutionString)
        } separatedBy {
            (msg << ", or the ")
        }
        AmbiguityError.rasie (msg.contents) with (aNode)
    }
}
class reuseVisitor {
    inherit ancestorsVisitor
    // I add reused names to object scopes.
    // Reused names are those that are made available through trait use or
    // inherit statements.  I visit the parse tree, and expect the scopes to
    // already have been created and populated with local declarations by the
    // BuildScopesVisitor.
    // I must deal with a potential circularity.  Finding the target of the
    // superExpression in the reuse statement means doing a scope lookup.
    // Is it possible that the target is defined by reuse, and therefore
    // requires that resused names already be in the scopes?   Scopes are
    // built on demand to avoid this problem.

    method visitClassDeclaration (aClass) {
        definitionGatherer.for (aClass).collectReusedNames
        return super.visitClassDeclaration (aClass)
    }
    method visitMethodDeclaration (aMethod) {
        // Check for shadowing
        aMethod.scope.reportShadowingErrors
        return super.visitMethodDeclaration (aMethod)
    }
    method visitObjectConstructor (anObjectConstructor) {
        // this method is also used to visit Module nodes — a subclass of ObjectConstructor nodes
        definitionGatherer.for (anObjectConstructor).collectReusedNames
        return super.visitObjectConstructor (anObjectConstructor)
    }
    method visitTypeDeclaration (aTypeDecl) {
        // Check for shadowing of the type parameters
        aTypeDecl.typeParameterList.ifNotNil { tp →
            tp.scope.reportShadowingErrors
        }
        return super.visitTypeDeclaration (aTypeDecl)
    }
    method visitBlock (aBlock) {
        // Check for shadowing
        aBlock.scope.reportShadowingErrors
        return super.visitBlock (aBlock)
    }
    method visitTraitDeclaration (aClass) {
        definitionGatherer.for (aClass).collectReusedNames
        return super.visitTraitDeclaration (aClass)
    }
}

class buildScopesVisitor {
    inherit ancestorsVisitor
    // I build the "scopes" for the nodes in the parse tree.  Scopes are also
    // known as symbol tables.  I know about parse tree nodes that create scopes,
    // and about the declarations that can appear in thise scopes.  I add entries
    // to the scopes corresponding to the declarations.   I don't know about
    // trait use and inheritance; that is the responsibility of the reuseVisitor.
    // I am a visitor, and thus inherit (indirectly) from ast.rootVisitor

    method visitDefDeclaration (aDefDecl) {
        aDefDecl.id.markAsDefinition
        checkDefAnnotations (aDefDecl)
        if (aDefDecl.id.isAnonymous.not) then {
            aDefDecl.scope.add (GraceDef.fromParseTreeNode (aDefDecl))
        }
        return super.visitDefDeclaration (aDefDecl)
    }
    method visitMethodParameter (aMethodParameter) {
        aMethodParameter.id.markAsDefinition
        if (aMethodParameter.id.isAnonymous.not) then {
            aMethodParameter.scope.add (GraceParameter.fromParseTreeNode (aMethodParameter))
        }
        return super.visitMethodParameter (aMethodParameter)
    }
    method visitDialect (aDialectNode) {
        assert {
            aDialectNode.parent.isModule
        }
        def dialectName = aDialectNode.name
        if ((dialectName == "none").not) then {
            installScopeForDialect (dialectName) outside (aDialectNode.scope)
        }
        return super.visitDialect (aDialectNode)
    }
    method installScopeForDialect (dialectName) outside (currentScope) {
        def dialectScope = moduleRegistry.attributeScopeOf (dialectName)
        currentScope.outerScope (dialectScope)
        addOuterBindingFor (dialectScope) in (currentScope)
    }
    method visitInterfaceLiteral (anInterfaceLiteral) {
        createScope (GraceInterfaceScope) in (anInterfaceLiteral)
        return super.visitInterfaceLiteral (anInterfaceLiteral)
    }
    method createScope (ScopeClass) in (aNode) {
        def newScope = ScopeClass.new
        newScope.outerScope (aNode.parent.scope)
        newScope.node := aNode
        aNode.scope := newScope
        if (newScope.isObjectScope) then {
            def enclosingObjectScope = newScope.enclosingObjectScope
            if (enclosingObjectScope.isTheEmptyScope.not) then {
                addOuterBindingFor (enclosingObjectScope) in (newScope)
            }
        }
        return newScope
    }
    method visitSignature (aSignature) {
        aSignature.scope.add (GraceMethod.fromParseTreeNode (aSignature))
        createScope (aSignature.scopeKind) in (aSignature)
        return super.visitSignature (aSignature)
    }
    method visitGenerativeDeclaration (aGenDeclaration) {
        if ((aGenDeclaration.isMarkerDeclaration.not && {
            aGenDeclaration.hasBody.not
        })) then {
            GraceSyntaxError.noBodyIn (aGenDeclaration)
        }
        if (aGenDeclaration.hasBody) then {
            aGenDeclaration.annotationNames.do { each →
                if (GraceParser.isMarkerAnnotation (each)) then {
                    GraceSyntaxError.bodyAndMarker (each) on (aGenDeclaration)
                }
            }
        }
        if (aGenDeclaration.hasAnnotations "public" and "confidential") then {
            GraceSyntaxError.annotation "public" conflictsWith "confidential" in (aGenDeclaration.annotationList)
        }
        if (aGenDeclaration.hasAnnotation "writable") then {
            GraceSyntaxError.declaration (aGenDeclaration) cannotBeMadeWritable (aGenDeclaration.annotationList)
        }
        aGenDeclaration.scope.add (GraceMethod.fromParseTreeNode (aGenDeclaration))
        createScope (aGenDeclaration.scopeKind) in (aGenDeclaration)
        return super.visitGenerativeDeclaration (aGenDeclaration)
    }
    method visitIdentifier (anIdentifier) {
        if ((anIdentifier.isApplication && {
            anIdentifier.isAnonymous
        })) then {
            error.underscore "`_` cannot be used in an expression" node (anIdentifier)
        }
    }
    method addOuterBindingFor (enclosingObjectScope) in (newScope) {
        newScope.add (GracePseudovariable.fromParseTreeNode (enclosingObjectScope.node).attributeScope (enclosingObjectScope)) withName "outer"
    }
    method dialectScopeFor (aDialectNode) {
        moduleRegistry.lookup (aDialectNode.name).scope
    }
    method visitReturn (aReturn) {
        def theMethod = aReturn.enclosingMethod
        if (theMethod == GraceNoParentNode.instance) then {
            errormessages.SyntaxError.raise
                  "a return statement is meaningful only inside a method"
                  with (aReturn)
        }
        aReturn.declaredType (theMethod.decType)
        super.visitReturn (aReturn)
    }
    method checkDefAnnotations (aDefDecl) {
        if (aDefDecl.isMarkerDeclaration.not && {
            aDefDecl.hasInitializer.not
        }) then {
            GraceSyntaxError.noInitializerIn (aDefDecl)
        }
        if (aDefDecl.hasInitializer) then {
            aDefDecl.annotationNames.do { each →
                if (GraceParser.isMarkerAnnotation (each)) then {
                    GraceSyntaxError.initializerAndMarker (each) on (aDefDecl)
                }
            }
        }
        if (aDefDecl.hasAnnotation "writable") then {
            GraceSyntaxError.declaration (aDefDecl) cannotBeMadeWritable (aDefDecl.annotationList)
        }
        if (aDefDecl.hasAnnotation "confidential") then {
            aDefDecl.annotationNames.do { each →
                if (GraceParser.confidentialConflictsWith (each)) then {
                    GraceSyntaxError.annotation (each) conflictsWith "confidential" in (aDefDecl.annotation)
                }
            }
        }
    }
    method visitAssignmentMethodHeader (anAssignmentMethodHeader) {
        anAssignmentMethodHeader.id.markAsDefinition
        return super.visitAssignmentMethodHeader (anAssignmentMethodHeader)
    }
    method visitImport (anImport) {
        anImport.id.markAsDefinition
        anImport.scope.add (GraceImport.fromParseTreeNode (anImport))
        return super.visitImport (anImport)
    }
    method visitTypeParameter (typeParam) {
        typeParam.id.markAsDefinition
        if (typeParam.id.isAnonymous.not) then {
            typeParam.scope.add (GraceTypeParameter.fromParseTreeNode (typeParam))
        }
        return super.visitTypeParameter (typeParam)
    }
    method createWildcardIdFor (aGraceBlockParameterNode) {
        shouldBeImplemented
    }
    method visitModule (aModule) {
        createScope (GraceModuleScope) in (aModule)
        aModule.theDialect.ifNil {
            installScopeForDialect "standardGrace" outside (aModule.scope)
        }
        return super.visitModule (aModule)
    }
    method visitBlockParameter (blockParam) {
        blockParam.id.ifNotNil { id →
            id.markAsDefinition
            if (id.isAnonymous.not) then {
                blockParam.scope.add (GraceParameter.fromParseTreeNode (blockParam))
            }
        }
        return super.visitBlockParameter (blockParam)
    }
    method visitObjectConstructor (anObjCons) {
        if (anObjCons.scopeNotYetSet) then {
            createScope (GraceObjectScope) in (anObjCons)
        }
        return super.visitObjectConstructor (anObjCons)
    }
    method visitTypeDeclaration (aTypeDecl) {
        aTypeDecl.id.markAsDefinition
        aTypeDecl.scope.add (GraceType.fromParseTreeNode (aTypeDecl))
        createScope (GraceTypeScope) in (aTypeDecl)
        return super.visitTypeDeclaration (aTypeDecl)
    }
    method visitBlock (aBlock) {
        createScope (GraceBlockScope) in (aBlock)
        return super.visitBlock (aBlock)
    }
    method visitTraitDeclaration (aTraitDeclaration) {
        aTraitDeclaration.items.do { each →
            if (each.isLegalInTrait.not) then {
                error.malformedTraitContaining (each)
            }
        }
        return super.visitTraitDeclaration (aTraitDeclaration)
    }
    method visitVarDeclaration (aVarDecl) {
        def theScope = aVarDecl.scope
        aVarDecl.id.markAsDefinition
        if (aVarDecl.id.isAnonymous.not) then {
            theScope.add (GraceVar.fromParseTreeNode (aVarDecl))
            theScope.add (GraceImplicitMethod.fromParseTreeNode (aVarDecl)) withName ((aVarDecl.declaredName ++ ":=(_)"))
        }
        return super.visitVarDeclaration (aVarDecl)
    }
}
def AssignmentError = errormessages.CompilationError.refine "AssignmentError"
    // I represent an error in the use of assignment.

class ancestorsVisitor {
    inherit nameResolutionVisitor
    // This (abstract) visitor records the route back to the root node of the
    // parse tree, on the stack `ancestors`.  It's useful if there are no up-links
    // in the tree.  When used as a superclass for other visitors, these
    // vistors have access to the ancestors stack.

    var ancestors
    method initialize {
        super.initialize
        ancestors := OrderedCollection.with (GraceNoParentNode.instance)
    }
    method visitRoot (aRoot) {
        ancestors.addFirst (aRoot)
        return {
            visitSmaCCParseNode (aRoot)
        }.ensure {
            ancestors.removeFirst
        }
    }
}
def AmbiguityError = CompilationError.refine "AmbiguityError"
    // This error is generated when the compiler cannot resolve an implicit
    // request, either because there is no method with the requested name, or
    // when there are two, one reused and the other in the lexical scope.

class nameResolutionVisitor {
    inherit ast.rootVisitor
    // An abstract superclass for the various visitors used to do name resolution.
    // Its primary purpose is to make a place to put the error methods that are
    // used by more than one visitor. (Why can't these error methods go in the
    // GraceRootNodeVisitor?  Because it is in the Grace-Parser package, so doing
    // that would introduce a circular dependency.)
    // The Ancestors visitor does nothing but record the route back to the root
    // node of the parse tree, on the stack `ancestors`.  It's useful if there
    // are no up-links in the tree.
    // The Build Scopes visitor creates a scope in each node that defines one,
    // and links these scopes on a lexical chain.  It populates the object scopes
    // with the attributes that they define, but not with those that they reuse.
    // The Reuse Visitor is responsible for inserting the reused attributesinto
    // the scopes.  This is a separate visitation of the tree, because it relies
    // on the information collected by the Build Scopes visitation.
    // Once the scopes are populated, the Disambiguaiton visitor re-writes
    // Implicit Requests into Explicit Requests,  or complains that they are
    // ill-formed or ambiguous.
    // The Checking visitor implement various checks that don't seem to fit
    // into the other visitors.
}

