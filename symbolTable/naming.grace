import "ast" as ast
import "unixFilePath" as filePath
import "errormessages" as errormessages
import "xmodule" as xmodule
import "sys" as sys
import "util" as util
import "sourcePosition" as sourcePosition
import "scope" as scope

method assert (aPredicate) {
    if (aPredicate.apply.not) then {
        ProgrammingError.raise "Assertion failure"
    }
}

def markerAnnotations = ["annotation", "required", "abstract"]

method isMarkerAnnotation(anAnnotation) {
    markerAnnotations.contains(anAnnotation)
}

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
        // in the current scope.    This is so that all objects have the same
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

    method underscore (aParseNode) {
        NamingError.raise "`_` cannot be used in an expression" with (aParseNode)
    }

    method undeclaredIdentifier (anIdentifierNode) {
        def message = "The name {anIdentifierNode.stringName} has not been declared. " ++
              "This may be a spelling mistake, or an attempt to access a name " ++
              "declared in another scope"
        // TODO: provide better diagnostics, e.g., by searching other scopes or
        // by trying an approximate string match
        NamingError.raise (message) with (anIdentifierNode)
    }

    method definition (aGraceMethod) usedAsAnnotation (anAnnotationNode) {
        def declaringModule = aGraceMethod.definingParseNode.moduleName
        var location := aGraceMethod.definingParseNode.range.lineRangeString
        if (declaringModule ≠ anAnnotationNode.moduleName) then {
            location := "{location} of module {declaringModule}"
        }
        def message = "{anAnnotationNode.requestedName}, which is declared on " ++
                  "{location}, is not an annotation"
        NamingError.raise(message) with(anAnnotationNode)
    }
}

def syntaxError = object {

    method bodyAndMarker(anAnnotation) node (aNode) {
        def message = "{aNode.description} with the annotation `{anAnnotation}` " ++
            "is a marker declaration, and must not have a body"
        errormessages.SyntaxError.raise(message) with (aNode)
    }
    method initializerAndMarker (anAnnotation) on (aNode) {
        def message = "{aNode.description} with the annotation `{aNode}` is a " ++
            "marker declaration, and must not have an initialzation expression"
        errormessages.SyntaxError.raise (message) with (aNode)
    }
    method declaration (aDeclaration) cannotBeMadeWritable (aWritableAnnotation) {
        def message = "{aDeclaration.description} cannot be made writable"
        errormessages.SyntaxError.raise (message) with (aWritableAnnotation)
    }
    method noBodyIn (aMethodDecl) {
        def message = "{aMethodDecl.description} must have a body enclosed in "
            ++ "\{ and \} after the header"
        errormessages.SyntaxError.raise (message) with (aMethodDecl)
    }
    method noInitializerIn (aDefDecl) {
        def message = "a definition must have `=` and a value after the name"
        errormessages.SyntaxError.raise (message) with (aDefDecl)
    }
    method annotation (a1) conflictsWith (a2) in (anAnnotationsNode) {
        def message = "the annotations {a1} and {a2} conflict; choose one or the other"
        errormessages.SyntaxError.raise (message) with (anAnnotationsNode)
    }
}

class disambiguationVisitor {
    inherit ast.rootVisitor
        alias superVisitAnnotations(_) = newVisitAnnotations(_)
        alias superVisitIdentifier(_) = newVisitIdentifier(_)
        alias superVisitCall(_) = newVisitCall(_)
        alias superVisitBind(_) = newVisitBind(_)

    // I replace implicit requests by explicit requests.  I also make some other
    // checks on the parse tree: those that cannot be performed until all of the
    // scopes have been constructed.  For example, I check that all names used
    // as annotations have been declared as annotations.
    // Specifically, each ImplicitRequest node is replaced by an OuterRequest
    // node or a SelfRequest node.  I also signal an exception if the reciever
    // of the implicit request can't be determined, either because the request
    // is not defined in scope, or because it is defined in multiple places.
    // I update the parse-tree that I am visiting in place.


    method newVisitAnnotations (anAnnotation) {
        // check that all of the annotations are declared as annotations
        anAnnotation.anns.do { anAnnLabel →
            def defn = anAnnotation.scope.lookup (anAnnLabel.requestedName) ifAbsent {
                return namingError.undeclaredIdentifier (anAnnLabel)
            }
            if (defn.isAnnotation.not) then {
                return namingError.definition (defn) usedAsAnnotation (anAnnLabel)
            }
        }
        return superVisitAnnotations (anAnnotation)
    }
    method newVisitIdentifier (anIdentifier) {
        // We may re-write this identifier into a OneselfRequest.  In this case, the
        // super-visitation will be on a different class of node.
        def possiblyRewrittenNode = nodeRewriter.rewriteIdentifier (anIdentifier)
        if (possiblyRewrittenNode.isIdentifier) then {
            superVisitIdentifier (possiblyRewrittenNode)
        } else {
            possiblyRewrittenNode.newAccept(self)
        }
    }
    method newVisitCall (aCallNode) {
        if (aCallNode.receiver.isImplicit.not) then {
            return superVisitCall(aCallNode)
        }
        def rewrittenNode = nodeRewriter.rewriteImplicitRequest (aCallNode)
        if ((rewrittenNode == aCallNode )) then {
            superVisitCall (aCallNode)
        } else {
            rewrittenNode.acceptVisitor (self)
        }
    }
    method newVisitBind (anAssignment) {
        // if this is an assignment request, replace this assignment node with a request node
        def rewrittenNode = nodeRewriter.rewriteAssignment (anAssignment)
        if ((rewrittenNode == anAssignment )) then {
            superVisitBind (anAssignment)
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
        def defs = variableResolver.definitionsOf (theRequest.requestedName) visibleIn (anImplicitRequest.scope)
        if (defs.isEmpty) then {
            return namingError.undeclaredIdentifier (theRequest)
        }
        if ((defs.size == 1)) then {
            return updateImplicitRequest (anImplicitRequest) using (defs.first)
        }
        assert { defs.size > 1 }
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
        def defs = variableResolver.definitionsOf (anIdentifier.name) visibleIn (anIdentifier.scope)
        if (defs.isEmpty) then {
            return namingError.undeclaredIdentifier (anIdentifier)
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
        def defs = variableResolver.definitionsOf (anAssignment.assignmentRequestName) visibleIn (anAssignment.scope)
        defs.ifEmpty {
            def badBinding = anAssignment.scope.lookup (lhs.name) ifAbsent {
                assignmentError "`{lhs.name}` is not declared" node (lhs)
            }
            assignmentError ("You can't assign to `{lhs.name}` because " ++
                  "it is not declared as a variable") node (lhs)
        }
        if (defs.size > 1) then {
            ambiguityError (defs) node (lhs)
        }
        updateAssignment (anAssignment) using (defs.first)
    }
    method assignmentError (aMessage) node (aParseNode) is confidential {
        AssignmentError.raise (aMessage) with (aParseNode)
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
        AmbiguityError.raise (msg.contents) with (aNode)
    }
}
class reuseVisitor {
    inherit ancestorsVisitor
        alias superVisitMethod(_) = newVisitMethod(_)
        alias superVisitObject(_) = newVisitObject(_)
        alias superVisitTypeDec(_) = newVisitTypeDec(_)
        alias superVisitBlock(_) = newVisitBlock(_)
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

    method newVisitMethod (aMethod) {
        // Check for shadowing
        aMethod.scope.reportShadowingErrors
        return superVisitMethod (aMethod)
    }
    method newVisitObject(anObjectConstructor) {
        // this method is also used to visit Module nodes — a subclass of ObjectConstructor nodes
        definitionGatherer.for (anObjectConstructor).collectReusedNames
        return superVisitObject (anObjectConstructor)
    }
    method newVisitTypeDec (aTypeDecl) {
        // Check for shadowing of the type parameters
        aTypeDecl.typeParameterList.ifNotNil { tp →
            tp.scope.reportShadowingErrors
        }
        return superVisitTypeDec (aTypeDecl)
    }
    method newVisitBlock (aBlock) {
        // Check for shadowing
        aBlock.scope.reportShadowingErrors
        return superVisitBlock (aBlock)
    }
}

class buildScopesVisitor {
    // I build the "scopes" for the nodes in the parse tree.  Scopes are also
    // known as symbol tables.  I know about parse tree nodes that create scopes,
    // and about the declarations that can appear in thise scopes.  I add entries
    // to the scopes corresponding to the declarations.   I don't know about
    // trait use and inheritance; that is the responsibility of the reuseVisitor.
    // I am a visitor, and thus inherit (indirectly) from ast.rootVisitor

    inherit ancestorsVisitor
        alias superVisitDefDec(_) = newVisitDefDec(_)
        alias superVisitIdentifier(_) = newVisitIdentifier(_)
        alias superVisitDialect(_) = newVisitDialect(_)
        alias superVisitInterfaceLiteral(_) = newVisitInterfaceLiteral(_)
        alias superVisitMethodSignature(_) = newVisitMethodSignature(_)
        alias superVisitMethod(_) = newVisitMethod(_)
        alias superVisitReturn(_) = newVisitReturn(_)
        alias superVisitImport(_) = newVisitImport(_)
        alias superVisitModule(_) = newVisitModule(_)
        alias superVisitObject(_) = newVisitObject(_)
        alias superVisitTypeDeclaration(_) = newVisitTypeDec(_)
        alias superVisitBlock(_) = newVisitBlock(_)
        alias superVisitVarDec(_) = newVisitVarDec(_)

    method newVisitDefDec (aDefDecl) {
        aDefDecl.id.markAsDefinition
        checkDefAnnotations (aDefDecl)
        if (aDefDecl.id.isAnonymous.not) then {
            aDefDecl.scope.add (GraceDef.fromParseTreeNode (aDefDecl))
        }
        return superVisitDefDec (aDefDecl)
    }
    method newVisitMethodParameter (aMethodParameter) {
        aMethodParameter.id.markAsDefinition
        if (aMethodParameter.id.isAnonymous.not) then {
            aMethodParameter.scope.add (GraceParameter.fromParseTreeNode (aMethodParameter))
        }
        return superVisitMethodParameter (aMethodParameter)
    }
    method newVisitDialect (aDialectNode) {
        assert {
            aDialectNode.parent.isModule
        }
        def dialectName = aDialectNode.name
        if ((dialectName == "none").not) then {
            installScopeForDialect (dialectName) outside (aDialectNode.scope)
        }
        return superVisitDialect (aDialectNode)
    }
    method installScopeForDialect (dialectName) outside (currentScope) is confidential {
        def dialectScope = moduleRegistry.attributeScopeOf (dialectName)
        currentScope.outerScope (dialectScope)
        addOuterBindingFor (dialectScope) in (currentScope)
    }
    method newVisitInterfaceLiteral (anInterfaceLiteral) {
        createScope (GraceInterfaceScope) in (anInterfaceLiteral)
        return superVisitInterfaceLiteral (anInterfaceLiteral)
    }
    method createScope (ScopeClass) in (aNode) is confidential {
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
    method newVisitMethodSignature (aSignature) {
        aSignature.scope.add (GraceMethod.fromParseTreeNode (aSignature))
        createScope (aSignature.scopeKind) in (aSignature)
        return superVisitMethodSignature (aSignature)
    }
    method newVisitMethod (aMethodDecl) {
        if (aMethodDecl.isMarkerDeclaration.not && { aMethodDecl.hasBody.not }) then {
            syntaxError.noBodyIn (aMethodDecl)
        }
        if (aMethodDecl.hasBody) then {
            aMethodDecl.annotationNames.do { each →
                if (isMarkerAnnotation (each)) then {
                    syntaxError.bodyAndMarker (each) node (aMethodDecl)
                }
            }
        }
        if (aMethodDecl.hasAnnotations "public" and "confidential") then {
            syntaxError.annotation "public" conflictsWith "confidential" in (aMethodDecl.annotationList)
        }
        if (aMethodDecl.hasAnnotation "writable") then {
            syntaxError.declaration (aMethodDecl) cannotBeMadeWritable (aMethodDecl.annotationList)
        }
        aMethodDecl.scope.add (GraceMethod.fromParseTreeNode (aMethodDecl))
        createScope (aMethodDecl.scopeKind) in (aMethodDecl)
        return superVisitMethod (aMethodDecl)
    }
    method newVisitIdentifier (anIdentifier) {
        if (anIdentifier.isAnonymous) then {
            if (anIdentifier.isApplication) then {
                namingError.underscore (anIdentifier)
            }
        } elseif { anIdentifier.isParameter } then {
            anIdentifier.scope.add (GraceParameter.fromParseTreeNode (anIdentifier))
        } elseif { anIdentifier.isTypeParameter } then {
            anIdentifier.scope.add (GraceTypeParameter.fromParseTreeNode (anIdentifier))
        }
        superVisitIdentifier (anIdentifier)
    }
    method newVisitReturn (aReturn) {
        def theMethod = aReturn.enclosingMethod
        if (theMethod == GraceNoParentNode.instance) then {
            errormessages.SyntaxError.raise
                  "a return statement is meaningful only inside a method"
                  with (aReturn)
        }
        aReturn.declaredType (theMethod.decType)
        superVisitReturn (aReturn)
    }
    method addOuterBindingFor (enclosingObjectScope) in (newScope) is confidential {
        newScope.add (GracePseudovariable.fromParseTreeNode (enclosingObjectScope.node).attributeScope (enclosingObjectScope)) withName "outer"
    }
    method dialectScopeFor (aDialectNode) is confidential {
        moduleRegistry.lookup (aDialectNode.name).scope
    }
    method checkDefAnnotations (aDefDecl)is confidential  {
        if (aDefDecl.isMarkerDeclaration.not && {
            aDefDecl.hasInitializer.not
        }) then {
            syntaxError.noInitializerIn (aDefDecl)
        }
        if (aDefDecl.hasInitializer) then {
            aDefDecl.annotationNames.do { each →
                if (isMarkerAnnotation (each)) then {
                    syntaxError.initializerAndMarker (each) on (aDefDecl)
                }
            }
        }
        if (aDefDecl.hasAnnotation "writable") then {
            syntaxError.declaration (aDefDecl) cannotBeMadeWritable (aDefDecl.annotationList)
        }
        if (aDefDecl.hasAnnotation "confidential") then {
            aDefDecl.annotationNames.do { each →
                if (GraceParser.confidentialConflictsWith (each)) then {
                    syntaxError.annotation (each) conflictsWith "confidential" in (aDefDecl.annotation)
                }
            }
        }
    }
    method newVisitImport (anImport) {
        anImport.id.markAsDefinition
        anImport.scope.add (GraceImport.fromParseTreeNode (anImport))
        return superVisitImport (anImport)
    }
    method newVisitModule (aModule) {
        createScope (GraceModuleScope) in (aModule)
        aModule.theDialect.ifNil {
            installScopeForDialect "standardGrace" outside (aModule.scope)
        }
        return superVisitModule (aModule)
    }
    method newVisitBlockParameter (blockParam) {
        blockParam.id.ifNotNil { id →
            id.markAsDefinition
            if (id.isAnonymous.not) then {
                blockParam.scope.add (GraceParameter.fromParseTreeNode (blockParam))
            }
        }
        return superVisitBlockParameter (blockParam)
    }
    method newVisitObject (anObjCons) {
        if (anObjCons.scopeNotYetSet) then {
            createScope (GraceObjectScope) in (anObjCons)
        }
        if (anObjCons.inTrait) then {   // object declared with trait syntax
            anObjCons.items.do { each →
                if (each.isLegalInTrait.not) then {
                    reuseError.malformedTraitContaining (each)
                }
            }
        }
        return superVisitObject (anObjCons)
    }
    method newVisitTypeDec (aTypeDecl) {
        aTypeDecl.id.markAsDefinition
        aTypeDecl.scope.add (GraceType.fromParseTreeNode (aTypeDecl))
        createScope (GraceTypeScope) in (aTypeDecl)
        return superVisitTypeDeclaration (aTypeDecl)
    }
    method newVisitBlock (aBlock) {
        createScope (GraceBlockScope) in (aBlock)
        return superVisitBlock (aBlock)
    }
    method newVisitVarDec (aVarDecl) {
        def theScope = aVarDecl.scope
        aVarDecl.id.markAsDefinition
        if (aVarDecl.id.isAnonymous.not) then {
            theScope.add (GraceVar.fromParseTreeNode (aVarDecl))
            theScope.add (GraceImplicitMethod.fromParseTreeNode (aVarDecl)) withName ((aVarDecl.declaredName ++ ":=(_)"))
        }
        return superVisitVarDec (aVarDecl)
    }
}

class ancestorsVisitor {
    inherit ast.rootVisitor
    // This (abstract) visitor records the route back to the root node of the
    // parse tree, on the stack `ancestors`.  It's useful if there are no up-links
    // in the tree.  When used as a superclass for other visitors, these
    // vistors have access to the ancestors stack.

    def ancestors = list.with (GraceNoParentNode.instance)

    method newVisitRoot (aRoot) {
        ancestors.addFirst (aRoot)
        return {
            newVisitSmaCCParseNode (aRoot)
        }.ensure {
            ancestors.removeFirst
        }
    }
}

def NamingError = errormessages.SyntaxError.refine "NamingError"
    // Raised on a context-sensitive syntax error caused by a mis-use of a name
    // such as an undeclared identifier or multiply-declared identifier.

def AmbiguityError = NamingError.refine "AmbiguityError"
    // This error is generated when the compiler cannot resolve an implicit
    // request, either because there is no method with the requested name, or
    // when there are two, one reused and the other in the lexical scope.

def AssignmentError = errormessages.NamingError.refine "AssignmentError"
    // I represent an error in the use of assignment.

class nameResolutionVisitor {   // no longer used; kept for the comment
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

class resolvedVariable {   
    // My instances represent the defining occurence of a name, as seen from
    // the perspective of an applied occurrence of that name.

    var definition is public // a subinstance of GraceAbstractVariable, representing the defining occurence.
    var isReused  is public  // true if the definition is obtained from a use of a trait, or from
                    // an inherited object.
    var objectsUp is public  // the number of levels of object nesting above me where the
                    // defining occurence was found.  0 means that the defining occurence
                    // is in the current object, 1 in the outer object, etc.
    var levelsUp is public  // the number of levels of scope above me where the defining occurence was found

    method resolutionString {
        // Answers a string, suitable for printing, that describes the location of this variable.
        return String.streamContents { s →
            (s << definition.kind << " " << reuseString << " by the ")
            if ((objectsUp == 0)) then {
                (s << "current")
            } else {
                (1 .. objectsUp ).do { _ →
                    (s << "outer")
                } separatedBy {
                    (s << ".")
                }
            }
            (s << " object")
        }
    }
    method reuseString {
        // Answers a string, suitable for printing, that describes my reuse.
        return if (isReused) then {
             "reused "
        } else {
             "lexically-enclosing "
        }
    }
    method definingScope {
        // the scope in which this 'variable' is defined
        return definition.definingParseNode.scope
    }
    method asString {
        "reuseString{definition.kind} declared on {definition.rangeLongString}"
    }
    method moduleName {
        // the name of the module in which this name was defined
        return definition.moduleName
    }
}
def variableResolver = object {
    // I respresent the process of finding the defining occurences of a name
    // I am a singleton object with no state

    method outerDefinitionOf (aName) in (aScope) addTo (aCollection) {
        // Looks for definitions of aName in the scopes surrounding aScope, and adds the first one to aCollection, after tagging it with its depth from our start point.  This method is complicated by the fact that we stop searching one level above the first module, since that scope is our dialect.
        var currentScope
        var objectLevel
        var scopeLevel
        currentScope := aScope
        objectLevel := 0
        scopeLevel := 0
        while {
            currentScope.isModuleScope.not
        } do {
            scopeLevel := (scopeLevel + 1)
            if (currentScope.isObjectScope) then {
                objectLevel := (objectLevel + 1)
            }
            currentScope := currentScope.outerScope
            currentScope.lookupLocally (aName) ifAbsent {
                currentScope.lookupReused (aName) ifAbsent {

                } ifPresent { defn →
                    aCollection.add (reusedDefinition (defn) atObject (objectLevel) levels (scopeLevel))
                    return aCollection
                }
            } ifPresent { defn →
                aCollection.add (definition (defn) atObject (objectLevel) levels (scopeLevel))
                return aCollection
            }
        }
        def dialectDef = currentScope.outerScope.lookupLocallyOrReused (aName) ifAbsent {
            return aCollection
        }
        if (dialectDef.isPublic) then {
            if (currentScope.outerScope.definesLocally (aName)) then {
                aCollection.add (definition (dialectDef) atObject ((objectLevel + 1)) levels (scopeLevel))
            } else {
                aCollection.add (reusedDefinition (dialectDef) atObject ((objectLevel + 1)) levels (scopeLevel))
            }
        }
        return aCollection
    }
    method reusedDefinitionOf (aName) in (aScope) addTo (aCollection) {
        if (aScope.areReusedNamesCompleted.not) then {
            return aCollection
        }
        def defn = aScope.lookupReused (aName) ifAbsent {
            return aCollection
        }
        aCollection.add (reusedDefinition (defn))
        return aCollection
    }
    method definition (aVariable) atObject (o) levels (n) {
        def result = resolvedVariable
        result.definition := aVariable 
        result.isReused := false 
        result.objectsUp := o 
        result.levelsUp := n
        result
    }
    method reusedDefinition (aVariable) atObject (o) levels (n) {
        def result = resolvedVariable
        result.definition := aVariable 
        result.isReused := true 
        result.objectsUp := o 
        result.levelsUp := n
        result
    }
    method lexicalOrLocalDefinitionOf (aName) in (aScope) {
        // Look for aName in the nest of method and block scopes including and surrounding aScope,
        // but not outside the current object.  Don't look at reused names.  Returns nil if
        // aName is not found.
        var currentScope
        currentScope := aScope
        {
            currentScope.lookupLocally (aName) ifAbsent {

            } ifPresent { defn →
                return localDefinition (defn)
            }
            if (currentScope.isObjectScope) then {
                return nil
            }
            currentScope := currentScope.outerScope
        }.repeat
    }
    method lexicalOrLocalDefinitionOf (aName) in (aScope) ifPresent (pBlock) {
        // Look for a definition of aName in the nest of method and block scopes including and
        // surrounding aScope, but not outside the current object.  Don't look at reused names.
        // Returns nil if aName is not found; if it is found, applies pBlock to a ResolvedVariable
        // containing the definition.
        var currentScope
        currentScope := aScope
        {
            currentScope.lookupLocally (aName) ifAbsent {

            } ifPresent { defn →
                return pBlock.apply (localDefinition (defn))
            }
            if (currentScope.isObjectScope) then {
                return nil
            }
            currentScope := currentScope.outerScope
        }.repeat
    }
    method reusedDefinition (aVariable) {
        reusedDefinition (aVariable) atObject 0 levels 0
    }
    method localDefinition (aVariable) {
        definition (aVariable) atObject 0 levels 0
    }
    method definitionsOf (aName) visibleIn (aScope) {
        // answers a collection of my instances describing the definitions of aName, visible from aScope. The collection is empty if there is no definition. If aName is defined locally in aScope, then we allways answer a singleton collection, ignoring inherited definitions and those in outer scopes; this gives local definitions priority over inherited and enclosing definitions. If aName is defined by inheritance _and_ in an outer scope, then the collection will have 2 elements.  In no case will it have more than 2 elements.
        var result
        lexicalOrLocalDefinitionOf (aName) in (aScope) ifPresent { defn →
            return list.with (defn)
        }
        def objectScope = aScope.objectScope
        result := reusedDefinitionOf (aName) in (objectScope) addTo (list.empty)
        result := outerDefinitionOf (aName) in (objectScope) addTo (result)
        return result
    }
}
