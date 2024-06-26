dialect "standard"

import "io" as io
import "sys" as sys
import "ast" as ast
import "util" as util
import "xmodule" as xmodule
import "errormessages" as errormessages
import "scope" as sm
import "constantScope" as constantScope
import "basic" as basic

use basic.open

def completed = singleton "completed"
def inProgress = singleton "inProgress"
def undiscovered = singleton "undiscovered"
// constants used in detecting cyclic inheritance

var stSerial := 100

def keyOrdering = { a, b → a.key.compare(b.key) }

def dialectScope = sm.graceDialectScope.in(constantScope.builtInsScope)
def moduleScope = sm.moduleScope.in(dialectScope)

def varFieldDecls = list []   // a list of nodes that declare var fields

util.setPosition(0, 0)

method transformIdentifier(anIdentifier) ancestors(anc) {
    // anIdentifier is a (copy of an) ast node that represents an applied
    // occurrence of an identifer id.
    // This method may or may not transform anIdentifier into another ast node.
    // If anIdentifier refers to a variable in a block or method,
    // then it should be left as a variable.  However, if it refers to
    // a field of an object, then it is tranformed into a method request.
    // Note that it would be possible for confidential fields of stale objects to
    // be compiled as identifiers. We do not do so, because distinguishing
    // this case seems like a lot of work, and V8 will probably inline the
    // accessors for us anyway

    if (anIdentifier.isAssigned) then {
        return anIdentifier     // will be transformed to a request by transformBind.
                                // Transformation is bottom-up, so this has yet to happen
    }
    def defs = sm.variableResolver.definitionsOf (anIdentifier.name) visibleIn (anIdentifier.scope)
    if (defs.isEmpty) then {
        errormessages.undeclaredIdentifier (anIdentifier)
    }
    if (defs.size > 1) then {
        errormessages.ambiguityError (defs) node (anIdentifier)
    }
    def resolution = defs.first
    def variable = resolution.definition
    if (variable.isMethodOrType) then {
        generateOneselfRequestFrom (anIdentifier) using (resolution)
    } elseif { variable.definingScope.varsAreMethods } then {
        // Anything defined in a fresh scope, including a var, can be overridden,
        // so we need to access it via a request.
        generateOneselfRequestFrom (anIdentifier) using (resolution)
    } else {
        anIdentifier
    }
}

method generateOneselfRequestFrom (aSourceNode) using (aResolvedVariable) {
    // generates and returns some form of "self request" based on aSourceNode.
    // The receiver of the generated request may be a yourselfNode, a bind node,
    // or the identifier for the module or dialect.

    def objectsUp = aResolvedVariable.objectsUp
    def nodeScope = aSourceNode.scope
    def outerChain = list.empty
    var s := nodeScope.currentObjectScope
    repeat (objectsUp) times {
        outerChain.addLast(s.node)
        s := s.enclosingObjectScope
    }
    def v = s.variety
    def receiver = if ("dialect | builtIn | module".contains(v)) then {
        ast.identifier("$" ++ v, false).setScope (nodeScope)
    } else {
        def ynd = ast.yourselfNode(outerChain.size).setScope(nodeScope)
        ynd.line := aSourceNode.line
        ynd.theObjects := outerChain
        ynd
    }
    def result = if (aSourceNode.numArgs == 0) then {
        ast.requestWithoutArgs (aSourceNode.nameString, receiver)
    } else {
        ast.request (receiver, aSourceNode.parts)
    }
    result.setScope(nodeScope).
          onSelf.
          withGenericArgs (aSourceNode.generics).
          setPositionFrom (aSourceNode)
}

method resolveIdentifiers(topNode) {
    // Recursively replace bare identifiers with their fully-qualified
    // equivalents.  Creates and returns a new AST; map works
    // bottom-up, so by the time a node is mapped, all of its
    // descendents have already been mapped.

    def newModule = topNode.map { node, anc →
        if ( node.isAppliedOccurrence ) then {
            transformIdentifier(node) ancestors(anc)
        } elseif { node.isCall } then {
            transformCall(node)
        } elseif { node.isInherits } then {
            transformReuse(node) ancestors(anc)
        } elseif { node.isAssignment } then {
            transformBind(node) ancestors(anc)
        } else {
            node
        }
    } ancestors (ast.ancestorChain.empty)
    newModule
}

method writeGctForModule(moduleObject) {
    // requested by genjs to write the gct to the generated JS file

    xmodule.writeGCT(moduleObject.name, generateGctForModule(moduleObject))
}

method generateGctForModule(module) {
    // The gct is essentially a representation of module's symbol table.
    // We built this representation by iterating over the symbol table.
    // Older versions of this method used to iterate over the ast,
    // but reused methods are not in the ast, and so were omitted.
    //
    // The Gct should be thought of as a mapping from keys to collections of
    // "gcLines".  A plain-text version of any gct can be obtained by running
    // tools/eg --gct module.js on the compiled file module.js
    //
    // Important keys are:
    // -- dialect:  the name of the dialect in which this module is written
    //              (empty if no dialect)
    // -- freshScopes: the uid of every scope that describes a fresh object
    //              the uid is tagged with "trait" if the object is a trait
    // -- methodTypes:<uid>: the type signatures of all methods defined in scope <uid>
    // -- modules: the names of the directly-imported modules (including the dialect)
    // -- path: the path in the file system where the source code was found
    // -- self:  the value is the uid for the moduleScope
    // -- scope:<uid>:  the entries in that scope
    // -- types: the declarations of all named types.  The name is prefixed
    //              by the uid of the scope that defines that type name
    //
    // The lines in a scope:<uid> entry are parsed by addGctLine(_)toScope(_).
    // Each has one of two formats:
    //  - <typeName> type
    //      this is used for types
    //  - <methodName> <declaredType> <kindString> <attributeScope> <attributes>
    //      used for everything else.
    // <attributes> is optional, and consists of a comma-separated list of strings

    def gct = dictionary.empty
    def theDialect = module.theDialect.moduleName
    def methodList = list.empty
    def typeList = list.empty
    def ms = module.scope
    gct.at "self" put [ms.uid]
    def scopesToProcess = set.with(ms)
    def scopesAlreadyProcessed = set.withAll(sm.predefined.values)

    var pathCount := 0
    def epl = sys.environ.at "PATH_LIMIT"
    def pathLimit = if (epl.isEmpty) then { 1000 } else {epl.asNumber}


    while { scopesToProcess.isEmpty.not } do {
        def s = scopesToProcess.anyone
        scopesToProcess.remove(s)
        if (scopesAlreadyProcessed.contains(s).not) then {
            scopesAlreadyProcessed.add(s)
            def entries = list.empty
            s.localAndReusedNamesAndValuesDo { vName, v →
                if (v.forGct) then {
                    entries.add(serializeVariable (v) withName(vName) in (s))
                    def subScope = v.attributeScope
                    if (scopesAlreadyProcessed.contains(subScope).not) then {
                        if (pathCount < pathLimit) then {
                            scopesToProcess.add(subScope)
                            pathCount := pathCount + 1
                        }
                    }
                }
            }
            gct.at "scope:{s.uid}" put (entries.sort)    // yes, this will store an empty scope
            if (s.methodTypes.isEmpty.not) then {
                gct.at "methodTypes:{s.uid}" put (s.methodTypes.values.sorted)
            }
            s.types.keysAndValuesDo { eachType, eachDef →
                gct.at "typedec:{s.uid}.{eachType}" put [eachDef]
                typeList.add "{s.uid}.{eachType}"
            }
        }
    }
    gct.at "types" put (typeList.sort)
    gct.at "modules" put (xmodule.externalModules.keys.sorted)
    def p = util.infile.pathname
    gct.at "path" put [ if (p.isEmpty) then {
        ""
    } elseif { p.startsWith "/" } then {
        p
    } else {
        io.realpath(p)
    } ]
    gct.at "dialect" put (
        if (theDialect == "none") then { [] } else { [theDialect] }
    )
    gct.at "freshScopes" put (
        scopesAlreadyProcessed.filter {s -> s.isFresh}.map { s ->
            def traitSuffix = if (s.isTrait) then {
                " trait"
            } else {
                ""
            }
            s.uid ++ traitSuffix
    }.sorted )
    util.log_verbose "{pathCount} paths added to gct (limit = {pathLimit})"
    gct
}

method serializeVariable (defn) withName(n) in (s) {
    // returns a string representation of the variable defn
    // Note that in the case of a writer method for a variable x,
    // n will be x:=(1), whereas defn.name will be x

    if (defn.isType) then { return "{n} type" }
    var anns
    if { defn.annotations.isEmpty } then {
        anns := ""
    } else {
        anns := " "
        defn.annotations.do { each →
            anns := anns ++ each.nameString
        } separatedBy { anns := anns ++ "," }
    }
    def attrScp = defn.attributeScope
    def tn = typeName (defn.declaredType) in (attrScp)
    "{n} {tn} {defn.tag} {attrScp.uid}{anns}"
}

type HasName = interface { nameString → String }

method typeName (typeNode) in (scope) {
    // returns a name for the type expression denoted by typeNode.
    // typeNode may be an ast node (identifier or unknownLiteral),
    // a constantScope.typeNode, or a string (such as "Unknown").
    // If necessary, creates a name starting with $, and enters it in scope's
    // types dictionary

    match(typeNode)
      case { nd:HasName -> nd.nameString
    } case { s:String -> s
    } else {
        def name = "$type{sequenceNr}"
        scope.types.at (name) put (typeNode.toGrace 0)
        name
    }
}

var seed := 100

method sequenceNr {
    seed := seed + 1
    seed
}

method methodSignature(methNode) → String {
    var s: String := ""
    var shouldEmitTypeParams := methNode.hasTypeParams
    methNode.signatureParts.do { part →
        s := s ++ part.name
        if (shouldEmitTypeParams) then {
            s := s ++ methNode.typeParams.toGrace 1
            shouldEmitTypeParams := false   // emit them once, after first part
        }
        if (part.params.isEmpty.not) then {
            s := s ++ "("
            part.params.do { p →
                s := "{s}{p.toGrace 1}:{p.decType.toGrace 1}"
            } separatedBy {
                s := "{s}, "
            }
            s := s ++ ")"
        }
    }
    "{s} → {methNode.decType.toGrace 0}"
}

method readerSignature(declNode) → String {
    "{declNode.nameString} → {declNode.decType.toGrace 0}"
}

method writerSignature(declNode) → String {
    "{declNode.nameString}:=(_:{declNode.decType.toGrace 0}) → Done"
}

def importedScopes = dictionary.empty

method processGct(gct, importedModuleScope) {
    // Populates importedModuleScope with the information in gct,
    // which is a dictionary mapping gct keys to collections.
    // TODO: make the gct dictionary a real object.

    def moduleName = (ast.withoutLeadingComponents (gct.at "path".first)).
            replace ".grace" with ""
    importedScopes.clear        // because we will be importing multiple modules
    def moduleScopeId = gct.at "self".first
    def scopeKey = "scope:{moduleScopeId}"
    importedScopes.at (moduleScopeId) put (importedModuleScope)
    gct.at (scopeKey) ifAbsent {
        ProgrammingError.raise "gct for \"{moduleName}\" missing \"{scopeKey}\" for the module itself"
    }.do { gctLine →
        addGctLine (gctLine) toScope (importedModuleScope) for (gct)
    }
    gct.at "freshScopes".do { eachLine ->
        def elems = eachLine.split " "
        def eachScope = scopeWithUid(elems.first) for (gct)
        eachScope.isFresh := true
        if ((elems.size > 1) && {elems.second == "trait"}) then {
            eachScope.isTrait := true
        }
    }
}

method addGctLine (gctLine:String) toScope (s) for (gct) {
    // Adds a symbol table entry based on gctLine to scope s
    //
    // gctLine is generated by the method generateGctForModule, and has format
    // <methodName> <declaredType> <kindString> <attributeScope> <attributes>
    // where attributes is optional, and consists of a comma-separated list of strings

    def split = gctLine.split " "
    var newVar
    if (split.size == 2) then {
        def typeName = split.first
        newVar := sm.typeVariableFrom (
            constantScope.typeNode (typeName) params (numTypeParams(typeName)))
    } elseif { split.size ≥ 4 } then {
        def name = split.first
        def typeName = split.second
        def tag = split.third
        def scpdId = split.fourth
        newVar := sm.variable (tag) from (
              constantScope.pseudoNode (name) typed (typeName) scope (s).
                attributeScope (scopeWithUid(scpdId) for (gct)))
        if (split.size ≥ 5) then {
            def annNames = split.fifth
            newVar.annotationNames := annNames.split ","
            if (newVar.annotationNames.contains "$fresh") then {
                newVar.attributeScope.markAsFresh
            }
        }
    } else {
        EnvironmentException.raise "gct line \"{gctLine}\" has wrong number of fields"
    }
    s.add(newVar)
}

method numTypeParams(typeName) is confidential {
    // typeName can contain a parameter list, as in "Dictonary⟦K,T⟧"

    var ix := typeName.indexOf "⟦" ifAbsent { return 0 }
    var p := 1
    while { true } do {
        ix := typeName.indexOf "," startingAt (ix + 1) ifAbsent { return p }
        p := p + 1
    }
}

method scopeWithUid(str) for (gct) {
    // find the appropriate external scope, or create it if it
    // does not yet exist

    def result = importedScopes.at(str) ifAbsent {
        sm.predefined.at(str) ifAbsent {
            def newScope = sm.externalScope
            def scopeKey = "scope:{str}"
            importedScopes.at(str) put (newScope)
            gct.at (scopeKey) ifAbsent {
                def moduleName = (ast.withoutLeadingComponents (gct.at "path".first)).
                        replace ".grace" with ""
                ProgrammingError.raise "gct for module \"{moduleName}\" does not contain \"{scopeKey}\""
            }.do { gctLine →
                addGctLine (gctLine) toScope (newScope) for (gct)
            }
            newScope
        }
    }
    result
}

method setupContext(moduleNode) {
    util.setPosition(0, 0)

    dialectScope.clear      // so that resolve can be serially re-used.
    moduleScope.clear
    varFieldDecls.clear

    def dialectName:String = moduleNode.dialectName
    if (dialectName ≠ "none") then {
        xmodule.checkDialect(moduleNode)
        processGct(xmodule.gctDictionaryFor(dialectName), dialectScope)
    }
}

method checkTraitBody(traitObjNode) {
    traitObjNode.value.do { node →
        if (node.isLegalInTrait.not) then {
            def badThing = node.statementName
            def article = articleFor (badThing)
            errormessages.syntaxError("{article} {badThing} cannot appear in " ++
                "a trait (defined on line {traitObjNode.line})")
                atLine(node.line)
        }
    }
}

method articleFor(str) {
    // the indefinite article to preceed str
    if ("aeioAEIO".contains(str.first)) then { "an" } else { "a" }
}

method buildSymbolTableFor(topNode) ancestors(topChain) {
    def symbolTableVis = object {
        inherit ast.baseVisitor

        method visitAssignment (o) up (anc) {
            o.scope := anc.parent.scope
            def lValue = o.dest
            if (lValue.isIdentifier) then {
                lValue.isAssigned := true
            }
            return true
        }
        method visitRequest (o) up (anc) {
            def enclosingNode = anc.parent
            def scope = enclosingNode.scope
            o.scope := scope
            def callee = o.receiver
            if (callee.isIdentifier) then {
                callee.inRequest := true
            }
            o.parts.do { each → each.scope := scope }
            if (enclosingNode.isMethod) then {
                if (enclosingNode.body.last == o) then {
                    o.isTailCall := true
                }
            } elseif { enclosingNode.isReturn } then {
                    o.isTailCall := true
            }
            return true
        }
        method visitBlock (o) up (anc) {
            o.scope := sm.blockScope.in(anc.parent.scope)
            true
        }
        method visitDefDec (o) up (anc) {
            def myParent = anc.parent
            def s = myParent.scope
            o.scope := s
            o.parentKind := myParent.kind
            def rhs = o.value
            def nameString = o.nameString
            if (rhs.isObject) then { rhs.name := nameString }
            if (myParent.isObject) then {
                if (o.isTyped) then {
                    s.methodTypes.at(nameString) put(readerSignature(o))
                }
            }
            true
        }
        method visitVarDec (o) up (anc) {
            def myParent = anc.parent
            def s = myParent.scope
            o.scope := s
            o.parentKind := myParent.kind
            if (myParent.isObject) then {
                if (o.isTyped) then {
                    s.methodTypes.at (o.nameString) put(readerSignature(o))
                    s.methodTypes.at (o.writerNameString) put(writerSignature(o))
                }
            }
            true
        }
        method visitUniversalDec (o) up (anc) {
            def myParent = anc.parent
            def s = myParent.scope      // the scope of the method parameters
            o.scope := s
            o.parentKind := myParent.kind   // methodDec or methodtype (for a signature)
            true        // hope that visitIdentifier creates the variable
        }
        method visitIdentifier (o) up (anc) {
            var scope := anc.parent.scope
            o.scope := scope
            def isWild = o.wildcard
            if (o.isBindingOccurrence) then {
                if (o.isDeclaredByParent.not && isWild.not) then {
                    def declaringNode = o.declaringNodeWithAncestors(anc)
                    if (scope.isObjectScope && declaringNode.isVarDec) then {
                        scope.add(sm.varVariableFrom(declaringNode)) withName (o.writerNameString)
                        // scope.add will complain if o.writerNameString is already declared.
                        // We use a variableVar and not a variableMethod to
                        // distinguish this from a hand-written assignment method
                    }
                    scope.add(declaringNode.createVariableFor(o))
                }
            } elseif {isWild} then {
                errormessages.syntaxError("'_' cannot be used in an expression")
                    atRange(o.range)
            }
            true
        }
        method visitAlias (o) up (ac) {
            o.scope := ac.parent.scope
            o.newSignature.isDeclaredByParent := true
            o.newName.accept(self) from (ac.extend(o))
            false   // no need to visit the aliasNode's other components
        }
        method visitImport (o) up (anc) {
            o.scope := anc.parent.scope
            xmodule.checkExternalModule(o)
            def gct = xmodule.gctDictionaryFor(o.moduleName)
            def importedScope = sm.externalScope
            importedScope.node := o
            processGct(gct, importedScope)
            o.scope.add(sm.importVariableFrom(o).attributeScope(importedScope))
                    withName(o.nameString)
            o.name.isDeclaredByParent := true
            // to prevent redeclaration when we visit the identifier
            true
        }
        method visitInherit (o) up (anc) {
            o.scope := anc.parent.scope
            if (o.isUse) then {
                if (anc.parent.canUse.not) then {
                    errormessages.syntaxError("use statements must " ++
                        "be inside an object, class, or trait")
                        atRange(o.range)
                }
            } else {
                if (anc.parent.canInherit.not) then {
                    errormessages.syntaxError("inherit statements must " ++
                        "be inside an object or class; a trait cannot inherit")
                        atRange(o.range)
                }
            }
            true
        }
        method visitMethodDec (o) up (anc) {
            def surroundingScope = anc.parent.scope
            if (surroundingScope.isObjectScope.not) then {
                // The parser accepts method declarations as statments, and thus
                // class and trait declarations as statements too.
                // Here we check that they are inside an object.
                // This produces better diagnostics than rejecting them in
                // the parser, as well as simplifying the parser.

                errormessages.syntaxError("{o.description} declarations are " ++
                    "permitted only inside an object") atRange(o.range)
            }
            def ident = o.asIdentifier
            if (ident.isBindingOccurrence) then {
                ident.isDeclaredByParent := true
                // aliased and excluded names are appliedOccurrences
                o.scope := sm.methodScope.in(surroundingScope)
                surroundingScope.add(o.createVariableFor(ident))
                if (o.isPublic) then {
                    if (o.isTyped) then {
                        surroundingScope.methodTypes.at(ident.nameString) put(methodSignature(o))
                    }
                }
            }
            if (o.returnsObject) then {
                o.returnedObject.name := o.canonicalName
            }
            true
        }
        method visitMethodSignature (o) up (anc) {
            def surroundingScope = anc.parent.scope
            if (o.isAppliedOccurrence) then {       // on rhs of an alias, or in an exclude
                o.scope := surroundingScope
                return true
            }
            def ident = o.asIdentifier
            if (ident.isDeclaredByParent.not) then {
                surroundingScope.add(sm.methodVariableFrom (o))
                ident.isDeclaredByParent := true
            }
            o.scope := sm.parameterScope.in(anc.parent.scope)
            // the scope for the parameters (including the type parameters,
            // if any) of this method.
            true
        }
        method visitObject (o) up (anc) {
            def myParent = anc.parent
            o.scope := sm.objectScope.in(myParent.scope)
            if (o.inTrait) then { checkTraitBody(o) }
            true
        }
        method visitModule(o) up (anc) {
            // the module scope was set before the traversal started
            true
        }
        method visitTypeDec (o) up (anc) {
            def enclosingScope = anc.parent.scope
            if (enclosingScope.isObjectScope.not) then {
                errormessages.syntaxError("type declarations are permitted only" ++
                    " inside an object") atRange(o.range)
            }
            def ident = o.name
            enclosingScope.add(sm.typeVariableFrom(o))
            enclosingScope.types.at(ident.nameString) put(o.toGrace 0)
            ident.isDeclaredByParent := true
            o.scope := sm.typeScope.in(enclosingScope)
            // this scope will be the home for any type parameters.
            // If there are no parameters, it won't be used.
            true
        }
        method visitInterfaceLiteral (o) up (anc) {
            o.scope := sm.interfaceScope.in(anc.parent.scope)
            true
        }
        method visitReturn(o) up (anc) {
            o.scope := anc.parent.scope;
            def enclosingMethodNode = anc.suchThat { n → n.isMethod } ifAbsent {
                errormessages.syntaxError "`return` statements must be inside methods."
                    atRange(o.range)
            }
            o.dtype := enclosingMethodNode.dtype
            true
        }
        method visitYourself(o) up (anc) {
            def currentScope = anc.parent.scope
            o.scope := currentScope
            def nodeObjects = list []
            o.theObjects := nodeObjects
            var currentObjectScope := currentScope.currentObjectScope
            repeat (o.numberOfLevels) times {
                nodeObjects.addLast(currentObjectScope.node)
                currentObjectScope := currentObjectScope.enclosingObjectScope
            }
            true
        }
        method visitTypeParameters(o) up (anc) { o.scope := anc.parent.scope ; true }
        method visitIf(o) up (anc) { o.scope := anc.parent.scope ; true }
        method visitMatchCase(o) up (anc) { o.scope := anc.parent.scope ; true }
        method visitTryCatch(o) up (anc) { o.scope := anc.parent.scope ; true }
        method visitSignaturePart(o) up (anc) { o.scope := anc.parent.scope ; true }
        method visitSequence(o) up (anc) { o.scope := anc.parent.scope ; true }
        method visitRequestWithoutArgs(o) up (anc) {
            visitRequest(o) up (anc)
        }
        method visitTypeApplication(o) up (anc) { o.scope := anc.parent.scope ; true }
        method visitString(o) up (anc) { o.scope := anc.parent.scope ; true }
        method visitNumeral(o) up (anc) { o.scope := anc.parent.scope ; true }
        method visitOp(o) up (anc) { o.scope := anc.parent.scope ; true }
        method visitDialect(o) up (anc) { o.scope := anc.parent.scope ; true }
        method visitCommentNode(o) up (anc) { o.scope := anc.parent.scope ; true }
        method visitEllipsis(o) up (anc) { o.scope := anc.parent.scope ; true }
    }   // end of symbolTableVis

    def currentObjectScopesVis = object {
        // Puts the scope of returned objects into the symbol table and
        // marks variables as being Fresh

        // This traversal can't be completed in the buildSymbolTable visitor,
        // because the visitation is top-down, and hence the scope of the
        // body of a def or method won't have been allocated when the
        // declaration is visited.

        inherit ast.baseVisitor

        method noEarlyReturn(methNode) {
            def erv = earlyReturnVis
            methNode.accept(erv)
            erv.containsEarlyReturn.not
        }
        method visitMethodDec (o) up (anc) {
            def myParent = anc.parent
            def surroundingScope = myParent.scope
            if (o.returnsObject) then {
                if (anc.forebears.forebears.isEmpty.not) then {
                    // prefixes a dotted name to the name of the returned object
                    // --- but not if I'm at the module-level
                    def factoryName = myParent.name
                    def tailNode = o.returnedObject
                    if ((factoryName != "object") && (tailNode.isObject)) then {
                        tailNode.name := factoryName ++ "." ++ tailNode.name
                    }
                }
                if (o.isOnceMethod.not) then {
                    if (noEarlyReturn(o)) then {
                        o.isFresh := true
                        def methodVariable = surroundingScope.lookup(o.nameString)
                        methodVariable.isFresh := true
                        o.returnedObjectScope.isFresh := true  // TODO — is this right?
                    }
                }
            }
            true
        }
    }

    def inheritanceVis = object {
        inherit ast.baseVisitor
        method visitObject (o) up (anc) {
            collectReusedNames(o)
            true
        }
        method visitModule (o) up (anc) {
            collectReusedNames(o)
            true
        }
    }

    topNode.accept(symbolTableVis) from(topChain)
    topNode.accept(currentObjectScopesVis) from(topChain)
    topNode.accept(inheritanceVis) from(topChain)
}

class earlyReturnVis {
    inherit ast.baseVisitor
    var containsEarlyReturn is readable := false
    method visitReturn(o) {
        containsEarlyReturn := true
        false   // stop visitattion
    }
    method visitObject(o) {
        false   // stop visitation
    }
}

method collectReusedNames(node) is confidential {
    // node is an object or class; puts the names that it inherits and uses into
    // its scope.  In the process, checks for a cycle in the inheritance chain
    def nodeScope = node.scope
    if (nodeScope.areReusedNamesCompleted) then {
        return
    }
    if (nodeScope.areReusedNamesInProgress) then {
        errormessages.syntaxError "cyclic inheritance or trait use."
            atRange(node.line, node.column, node.column + 4)
    }
    nodeScope.markReusedNamesAsInProgress
    gatherInheritedNames(node)
    gatherUsedNames(node)
    nodeScope.markReusedNamesAsCompleted
}

method gatherInheritedNames(node) is confidential {
    if (node.isObject) then {
        var inhNode := node.superclass
        def objScope = node.scope
        var superScope
        if (false == inhNode) then {
            def gO = ast.identifier("graceObject", false).setScope (objScope)
            inhNode := ast.inheritStatement(gO).setScope (objScope)
            superScope := constantScope.objectScope
        } else {
            superScope := scopeReferencedByReuseExpr(inhNode.value)
            inhNode.reusedScope := superScope
            if (superScope.isExternal.not) then { collectReusedNames(superScope.node) }
        }
        def excludedNames = inhNode.exclusions.map { exMeth → exMeth.nameString } >> list
        superScope.localAndReusedNamesAndValuesDo { name, defn →
            if ((name ≠ "self") && (excludedNames.contains(name).not)) then {
                objScope.addReused(defn) withName (name)
            }
        }
        inhNode.aliases.do { a →
            def old = a.oldName.nameString
            def new = a.newName.nameString
            def defn = superScope.lookupLocallyOrReused(old) ifAbsent {
                errormessages.syntaxError("can't define an alias for " ++
                    a.oldName.canonicalName ++
                    " because it is not present in the inherited object")
                    atRange(a.oldName.range)
            }
            objScope.add (sm.aliasMethodVariableFrom(a) to (defn)) withName (new)
            // An alias is added as a local method, not as a reused method
        }
        inhNode.exclusions.do { exMeth →
            if (superScope.definesLocallyOrReuses(exMeth.nameString).not) then {
                errormessages.syntaxError("can't exclude {exMeth.canonicalName} " ++
                    "because it is not present in the inherited object")
                    atRange(exMeth.range)
            }
        }
    }
}

method gatherUsedNames(objNode) is confidential {
    // For each of objNodes's used traits, gather the names
    // introduced by that trait, as modified by alias and exclude.

    def traitMethods = dictionary.empty
        // maps method names to the trait(s) that provide(s) them - for detecting conflicts
    def objScope = objNode.scope
    objNode.usedTraits.do { t ->
        def traitScope = scopeReferencedByReuseExpr(t.value)
        util.log 46 verbose "gathering trait {t.value.toGrace 0} with {traitScope}"
        t.reusedScope := traitScope
        if (traitScope.isTrait.not) then {
            errormessages.syntaxError("{t.value.toGrace 0} is not a trait," ++
                  " so it may not appear in a 'use' statement") atRange(t)
        }   // TODO: is this necessary? There is another check in transformReuse(_)ancestors(_)
        if (traitScope.isExternal.not) then { collectReusedNames(traitScope.node) }
        def excludedNames = t.exclusions.map { exMeth → exMeth.nameString } >> list

        def requiredNames = list.empty
        traitScope.localAndReusedNamesAndValuesDo { nm, defn →
            if (defn.forUsers && excludedNames.contains(nm).not) then {
                objScope.addReused(defn)
                if (defn.isRequired) then {
                    requiredNames.add(nm)
                } else {
                    def definingTraits = traitMethods.at(nm) ifAbsent { list [] }
                    definingTraits.add(t)
                    traitMethods.at(nm)put(definingTraits)
                    // TODO:  Make definingtraits a multi-dictionary
                }
            }
        }
        t.aliases.do { a →
            def old = a.oldName.nameString
            def new = a.newName.nameString
            traitScope.lookupLocallyOrReused(old) ifAbsent {
                errormessages.reuseError("sorry, you can't define an alias for " ++
                    "{a.oldName.canonicalName} because it is not present in the trait")
                    atRange(a.oldName.range)
            } ifPresent { defn →
                try {
                    objScope.add (defn) withName (new)
                    // the spec says: Attributes introduced by an alias clause are
                    // treated as being introduced by the object under construction,
                    // and thus do not conflict with (and may therefore override)
                    // attributes obtained by reuse. They do conflict with attributes
                    // declared in the object under construction.
                } catch {re:errormessages.NamingError →
                    def priorDecl = objScope.lookupLocally (new)
                        ifAbsent { ProgrammingError.raise "impossible" }
                    errormessages.reuseError(
                        "sorry, you can't declare '{canonicalName(new)}' " ++
                        "as an alias, because it's also declared as a " ++
                        "{priorDecl.kind} on {priorDecl.rangeLongString}, " ++
                        "which is in the same object; use a different name")
                        atRange (defn.definingParseNode)
                }
            }
        }
        t.exclusions.do { exMeth →
            if (traitScope.definesLocallyOrReuses(exMeth.nameString).not) then {
                errormessages.syntaxError("can't exclude {exMeth.canonicalName} " ++
                    "because it is not available in the used trait")
                    atRange(exMeth.range)
            }
        }
    }
    checkForConflicts(objNode, traitMethods)
}

method checkForConflicts(objNode, traitMethods) {
    // traitMethods is a dictionary with methodNames as keys, and
    // a list of sources as values.  Multiple sources indicate a conflict,
    // unless there is a local definition too.
    def conflicts = list.empty

    traitMethods.keysDo { methName →
        def sources = traitMethods.at(methName)
        if (sources.size > 1) then {    // a method has more than one source trait
            if (objNode.localNames.contains(methName).not) then {
                conflicts.addLast (conflictForMethodName(methName) from(sources))
            }
        }
    }

    if (conflicts.isEmpty) then { return }

    var maxSourceRange:Range := emptyRange
    var message := if (conflicts.size > 1) then {
        "trait conflicts found.\n    "
    } else {
        "trait conflict found. "
    }
    conflicts.do { each →
        def sourceList = each.sources.map { s → s.nameString }
        maxSourceRange := each.sources.fold {a, s → max(a, s.range) }
              startingWith(maxSourceRange)
        message := message ++ "Method `{each.canonicalName}` is defined in " ++
              errormessages.readableStringFrom(sourceList) ++ ".\n    "
    }
    if (maxSourceRange == emptyRange) then {
        errormessages.reuseError(message)
    } else {
        errormessages.reuseError(message) atRange (maxSourceRange)
    }
}

class conflictForMethodName(nm) from(srcs) {
    def methodName is public = nm
    def sources is public = srcs
    method canonicalName { canonicalName(methodName) }
}

method scopeReferencedByReuseExpr(nd) {
    // answers the scope referenced by astNode nd, which is the
    // reuse expresion in an inherit or use clause.
    // This is a tricky case: nd cannot reference anything
    // in the current object, because that object does not yet exist.
    // (The exception is when the current object is a module,
    // and nd is an expression starting with the nickname of an import.)
    // However, the meaning of self and outer^n depend on the
    // lexical position of the reuse expression.
    // Note also that, because this method is requested from the
    // inheritanceVisitor, nd has not yet been disambiguated.
    // If nd references an object, then the result
    // scope will have bindings for the methods of that object.
    // Otherwise, we raise an error.

    def scp = nd.scope

    if (nd.isIdentifier) then {
        def sought = nd.nameString
        if (sought == "outer") then {
            return scp.outerScope.enclosingObjectScope
        }
        def variable = scp.lookupLocally (sought) ifAbsent {
            ensureOuterScopesCollected(scp)
            return scp.outerScope.lookup (sought) ifAbsent {
                errormessages.undeclaredIdentifier(nd)
            }.attributeScope
        }
        if (variable.isImport) then { return variable.attributeScope }
        errormessages.syntaxError "a reuse expression cannot refer to an attribute of 'self'"
              atRange (nd.range)
    } elseif { nd.isOuter } then {
        nd.theObjects.last.scope
    } elseif {nd.kind == "op"} then {
        def receiverScope = scopeReferencedByReuseExpr(nd.left)
        receiverScope.lookup (nd.nameString) ifAbsent {
            errormessages.syntaxError "no operator {nd.canonicalName} on {nd.left.toGrace 0}"
                    atRange (nd.range)
        }.attributeScope
    } elseif {nd.isCall} then { // this includes "memberNodes"
        if (nd.receiver.isImplicit) then {
            def defs = sm.variableResolver.definitionsOf (nd.nameString) visibleIn (scp.outerScope)
            if (defs.isEmpty) then {
                errormessages.undeclaredIdentifier(nd)
            } elseif { defs.size > 1 } then {
                errormessages.ambiguityError (defs) node (nd)
            }
            defs.first.definition.attributeScope
        } else {
            scopeReferencedByReuseExpr(nd.receiver)
                .attributeScopeOf(nd.nameString) in (nd)
        }
    } elseif { nd.isObject } then {
        // inheriting from a literal object expression — weird, but legal
        nd.scope
    } else {
        errormessages.reuseError ("you can't reuse {nd.pretty 0}; " ++
              "it does not return a fresh object") atRange (nd)
    }
}

method ensureOuterScopesCollected(s) {
    // look at all the scopes surrounding s, and make sure that their
    // reused names have been collected.
    var scp := s.outerScope.currentObjectScope
    while {scp.isDialectScope.not} do {
        collectReusedNames(scp.node)
        scp := scp.outerScope.currentObjectScope
    }
}

method reusedScope (aReuseStatement) {
    // answers the scope referenced by the super expression in aReuseStatement
    def expr = aReuseStatement.reuseExpr
    if (expr.receiver.isSelf) then {
        def reuseKind = aReuseStatement.statementName
        errormessages.reuseError(
              "sorry, it's not possible to {reuseKind} 'self', because 'self' " ++
              "does not yet exist when the {reuseKind} statement is executed"
        ) atRange (aReuseStatement.reuseExpr.range)
    }
    expr.currentObjectScopeFor (aReuseStatement)
}

method transformBind(bindNode) ancestors(anc) {
    // bindNode is (a shallow copy of) a bindNode.  If it is binding a
    // "member" or field of an object, transform it into a request on a setter

    def lhs = bindNode.lhs
    def nm = lhs.nameString
    def s = bindNode.scope
    if (lhs.isMember) then {
        // we know that this must be a request, and not a normal assignment
        def part = ast.requestPart(nm ++ ":=") withArgs [bindNode.rhs].setScope (s)
              .setStart(lhs.receiver.end.addColumn 2)
        def newCall = ast.request(lhs.receiver, [part])
              .setScope (s).setPositionFrom(bindNode)
        newCall.end := bindNode.end
        if (lhs.receiver.isSelfOrOuter) then { newCall.onSelf }
        return newCall
    }
    def defs = sm.variableResolver.definitionsOf (lhs.writerNameString) visibleIn (s)
    if (defs.isEmpty) then {
        def variable = s.lookup (nm) ifAbsent {
            // no def for "{nm}" or "{nm}:=(1)"
            errormessages.undeclaredIdentifier (lhs)
        }
        if (variable.isAssignable.not) then {
            errormessages.badAssignmentTo(lhs) declaredInScope(variable.definingScope)
        }
        def declaredType = variable.definingParseNode.dtype
        if (false ≠ declaredType) then {
            lhs.dtype := resolveIdentifiers(declaredType)
        }
        bindNode      // no definition for "{nm}:=(1)", so we do not transform
    } elseif { defs.size == 1 } then {
        def newCall = generateOneselfRequestFrom (bindNode) using (defs.first)
        newCall.end := bindNode.value.end
        newCall
    } else {
        errormessages.ambiguityError (defs) node (lhs)
    }
}

method transformReuse (ruNode) ancestors(anc) {
    // ruNode is (a shallow copy of) a reuseNode (inherit or use).  Transform its
    // request to disambiguate the receiver.  Superobject initialization and
    // alias and exclude modifiers are dealt with in the code generator
    // Checks on the legality of the reuse

    def reuseExpr = ruNode.reuseExpr
    def currentScope = ruNode.scope
    if (currentScope.isObjectScope.not) then {
        errormessages.syntaxError
              "'{ruNode.statementName}' statements must be directly inside an object."
              atRange(ruNode.range)
    }
    def reusedScope = ruNode.reusedScope
    if (reusedScope.isFresh.not) then {
        errormessages.syntaxError "to '{ruNode.statementName}' an object, it must be freshly-created"
              atRange(reuseExpr.range)
    }
    if (ruNode.isUse) then {
        if (reusedScope.isTrait.not) then {
            errormessages.syntaxError ("the expression in your use " ++
                  "statement does not refer to a trait")
                  atRange (reuseExpr)
        }
    }
    ruNode
}

method transformCall(cNode) → ast.AstNode {
    def methodName = cNode.nameString
    def s = cNode.scope
    var nominalRcvr := cNode.receiver
    def result = if (nominalRcvr.isImplicit) then {
        def defs = sm.variableResolver.definitionsOf (methodName) visibleIn (s)
        if (defs.isEmpty) then {
            errormessages.undeclaredIdentifier (cNode)
        }
        if (defs.size > 1) then {
            errormessages.ambiguityError (defs) node (cNode)
        }
        generateOneselfRequestFrom (cNode) using (defs.first)
    } else {
        cNode
    }
    if (result.isTailCall) then {    // do this work only when someone might care
        def answerScope = result.attributeScope
        if (answerScope.isFresh) then {
            result.returnedObjectScope := answerScope
        }
    }
    result
}

method resolve(moduleNode) {
    util.log_verbose "rewriting tree."
    setupContext(moduleNode)
    xmodule.doParseCheck(moduleNode)
    util.setPosition(0, 0)
    moduleNode.scope := moduleScope
    def dialectObject = ast.module [moduleNode.theDialect] named "$dialect"
          .setScope (dialectScope)
    def dialectChain = ast.ancestorChain.with(dialectObject)

    buildSymbolTableFor(moduleNode) ancestors(dialectChain)
    util.log_verbose "symbol tables built."

    if (util.target == "symbols") then {
        util.extensions.at "gctfile" put true
        writeGctForModule(moduleNode)
        util.outprint(moduleNode.pretty 0)
        util.log_verbose "done"
        util.outfile.close
        sys.exit(0)
    }
    def processedAst = resolveIdentifiers(moduleNode)

    if ((util.target == "processed-ast") || (util.target == "ast")) then {
        util.outprint "====================================="
        util.outprint "module-level symbol table"
        util.outprint (processedAst.scope.asStringWithParents)
        util.outprint "====================================="
        util.outprint(processedAst.pretty 0)
        util.outfile.close
        sys.exit(0)
    }
    xmodule.doAstCheck(processedAst)
    processedAst
}
