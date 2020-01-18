dialect "standard"
// This is a transitional version of the compiler. There is now a dialect
// scope in addition to a built-in scope. The predefined preludeScope has
// been eliminated

import "io" as io
import "sys" as sys
import "ast" as ast
import "util" as util
import "xmodule" as xmodule
import "fastDict" as map
import "errormessages" as errormessages
import "identifierKinds" as k
import "mirror" as mirror
import "scope" as sm
import "variable" as variable

def completed = singleton "completed"
def inProgress = singleton "inProgress"
def undiscovered = singleton "undiscovered"
// constants used in detecting cyclic inheritance

var stSerial := 100

def reserved = ["self", "outer", "true", "false", "Unknown", "Self"]
// reserved names that cannot be re-assigned or re-declared

def keyOrdering = { a, b -> a.key.compare(b.key) }

type DeclKind = k.T

def emptyScope = sm.graceEmptyScope
ast.nullNode.scope := emptyScope      // TODO: eliminate!
def builtInsScope = sm.graceBuiltInScope.in(emptyScope)
def dialectScope = sm.graceDialectScope.in(builtInsScope)
def moduleScope = sm.graceModuleScope.in(dialectScope)
def graceObjectScope = sm.graceObjectScope.in(emptyScope)
def booleanScope = sm.graceObjectScope.in(builtInsScope)
def numberScope = sm.graceObjectScope.in(builtInsScope)
def stringScope = sm.graceObjectScope.in(builtInsScope)
def sequenceScope = sm.graceObjectScope.in(builtInsScope)
// TODO:  shouldn't the last 4 all be in emptyScope?

initializeConstantScopes

def varFieldDecls = list []   // a list of nodes that declare var fields

util.setPosition(0, 0)

method initializeConstantScopes {
    // populate the scopes corresponding to the language literals.
    // we reflect on a witness object, rather than using its type,
    // so that we include the confidential method names

    mirror.reflect(object{}).allMethodNames.do { each ->
        graceObjectScope.add(
            variable.named (mirror.numericName(each))
                typed (ast.unknownType)
                kind (k.graceObjectMethod) )
    }
    mirror.reflect(true).allMethodNames.do { each ->
        booleanScope.add(
            variable.named (mirror.numericName(each))
                typed (ast.unknownType)
                kind (k.methdec) )
    }
    mirror.reflect(1).allMethodNames.do { each ->
        numberScope.add(
            variable.named (mirror.numericName(each))
                typed (ast.unknownType)
                kind (k.methdec) )
    }
    mirror.reflect "a".allMethodNames.do { each ->
        stringScope.add(
            variable.named (mirror.numericName(each))
                typed (ast.unknownType)
                kind (k.methdec) )
    }
    mirror.reflect [].allMethodNames.do { each ->
        sequenceScope.add(
            variable.named (mirror.numericName(each))
                typed (ast.unknownType)
                kind (k.methdec) )
    }

    builtInsScope.add(
        variable.named "true"
            typed (ast.identifierNode.new("Boolean", ast.typeType))
            kind (k.methdec)
            attributeScope(booleanScope) )
    builtInsScope.add(
        variable.named "false"
            typed (ast.identifierNode.new("Boolean", ast.typeType))
            kind (k.methdec)
            attributeScope(booleanScope) )
    builtInsScope.add(
        variable.named "Unknown"
            typed (ast.typeType)
            kind (k.typedec) )
    builtInsScope.add(
        variable.named "outer"
            typed (ast.unknownType)
            kind (k.defdec) )
    builtInsScope.add(
        variable.named "..."
            typed (ast.unknownType)
            kind (k.defdec) )
    builtInsScope.add(
        variable.named "print(1)"
            typed (ast.unknownType)
            kind (k.methdec) )
    builtInsScope.add(
        variable.named "native(1)code(1)"
            typed (ast.unknownType)
            kind (k.methdec) )
    builtInsScope.add(
        variable.named "native(1)header(1)"
            typed (ast.unknownType)
            kind (k.methdec) )
}

method pathScope(reqs) {
    // reqs is an AST node representing a sequence of requests, such as a.b.c;
    // return the scope. That is, find the scope associated with c in the scope
    // associated with b in the scope associated with a in a's scope.  Answers
    // universalScope if we don't have enough information to be exact.

    def s = reqs.scope
    if (reqs.isIdentifier) then {
        s.lookup(reqs.nameString)
    } elseif { reqs.isCall } then {
        pathScope(reqs.receiver).attributeScopeOf(reqs.nameString)
    } elseif { reqs.isOuter } then {
        var resultScope := s.objectScope  // self's scope
        repeat (reqs.numberOfLevels) times {
            resultScope := resultScope.objectScope
        }
        resultScope
    } elseif { reqs.isConstant } then {
        match (reqs.kind)
              case {"string" -> stringScope }
              case {"num" -> numberScope }
    } elseif { reqs.isSequenceConstructor } then {
        sequenceScope
    } elseif { reqs.isObject } then {
        s  // this is for the case where a is an literal object constructor
    } else {
        ProgrammingError.raise("In pathScopes — unexpected request sequence {reqs.toGrace 0} " ++
              "on line {reqs.line}")
    }
}

method transformIdentifier(anIdentifier) ancestors(anc) {
    // node is a (copy of an) ast node that represents an applied occurrence of
    // an identifer id.
    // This method may or may not transform node into another ast node
    def defs = sm.variableResolver.definitionsOf (anIdentifier.name) visibleIn (anIdentifier.scope)
    if (defs.isEmpty) then {
        reportUndeclaredIdentifier (anIdentifier)
    }
    if (defs.size > 1) then {
        reportAmbiguityError (defs) node (anIdentifier)
    }
    def request = ast.requestPart.request (anIdentifier.nameString)
    generateOneselfRequestOf (request) from (anIdentifier) using (defs.first)
}

method checkForReservedName(node) {
    def ns = node.nameString
    if (reserved.contains(ns)) then {
        errormessages.syntaxError "{ns} is a reserved name and cannot be re-declared."
            atRange(node.range)
    }
}
method generateOneselfRequestOf (request) from (aSourceNode) using (aResolvedVariable) {
    // generates and returns some form of "self request" based on aSourceNode.
    // The receiver may be a literal self, an outerNode, or a direct reference
    // to the module or dialect

    def objectsUp = aResolvedVariable.objectsUp
    def nodeScope = aSourceNode.scope
    def receiver = valueOf {
        def outerChain = list.empty
        var s := aSourceNode.scope.objectScope
        repeat (objectsUp) times {
            outerChain.addLast(s.node)
            s := s.objectScope
        }
        def v = s.variety
        if ("dialect | builtIn | module".contains(v)) then {
            ast.identifierNode.new("$" ++ v, false) scope(self)
        } elseif {outerChain.isEmpty} then {
            ast.identifierNode.new("self", false) scope(nodeScope)
        } else {
            ast.outerNode(outerChain).setScope(nodeScope)
        }
    }
    ast.memberNode.new (request, receiver).onSelf.scope(nodeScope).
        withGenericArgs (aSourceNode.generics).setPositionFrom (aSourceNode)
}
method reportAmbiguityError (defs) node (node) → None {
    // Signals an ambiguity error.  Does not return

    var msg := "the name `{node.canonicalName}` is ambiguous; it might refer to either the "
    defs.do { aVar →
        msg := msg ++ variable.resolutionString
    } separatedBy {
        msg := msg ++ ", or the "
    }
    errormessages.syntaxError (msg) atRange (node.range)
}

method guessesForIdentifier(node) {
    def nm = node.nameString
    def suggestions = set.empty
    def nodeScope = node.scope
    def thresh = 4      // max number of suggestions
    nodeScope.withSurroundingScopesDo { s ->
        s.elements.keysDo { v ->
            if (errormessages.name (nm) mightBeIntendedToBe(v)) then {
                suggestions.add(canonical(v))
                if (suggestions.size ≥ thresh) then { return suggestions }
            }
        }
    }
    nodeScope.elementScopes.keysDo { s ->
        if (nodeScope.elementScopes.at(s).contains(nm)) then {
            suggestions.add "{s}.{nm}"
            if (suggestions.size ≥ thresh) then { return suggestions }
        }
    }
    suggestions
}

method canonical(numericName) {
    def parts = numericName.split "("
    var output := parts.first
    for (2..parts.size) do { i ->
        def part_split = parts.at(i).split ")"
        def n = part_split.first.asNumber
        if (n.isNaN) then {
            output := output ++ part_split.first
        } else {
            output := output ++ "(" ++ ("_," * (n - 1)) ++ "_)"
            if (part_split.size > 1) then {
                output := output ++ part_split.second
            }
        }
    }
    return output
}

method reportUndeclaredIdentifier(node) {
    def guesses = guessesForIdentifier(node)
    def cn = node.canonicalName
    def varBit = if (cn.endsWith ")") then { "" } else { " variable or" }
    def guessBit = if (guesses.isEmpty) then {
        ""
    } else {
        ". Did you mean {errormessages.readableStringFrom(guesses) using "or"}?"
    }
    errormessages.syntaxError("unknown{varBit} method '{cn}'; " ++
          "this may be a spelling mistake, or an attempt to access a{varBit} " ++
          "method in another scope{guessBit}")
          atRange (node.range)
}

method reportAssignmentTo(node) declaredInScope(scp) {
    // Report a syntax error for an illegal assignment

    def name = node.nameString
    def kind = scp.kind(name)
    var lineInfo := ""
    if (scp.elementLines.containsKey(name)) then {
        lineInfo := " on line {scp.elementLines.at(name)}"
    }
    if (kind == k.selfDef) then {
        errormessages.syntaxError("'{name}' cannot be re-bound; " ++
            "it always refers to the current object.")
            atRange(node.range)
    } elseif { reserved.contains(name) } then {
        errormessages.syntaxError("'{name}' is a reserved name and " ++
            "cannot be re-bound.")
            atRange(node.range)
    } elseif { kind == k.defdec } then {
        errormessages.syntaxError("'{name}' cannot be changed " ++
            "because it was declared with 'def'{lineInfo}. To make it " ++
            "a variable, use 'var {name}' and ':=' in the declaration")
            atRange(node.range)
    } elseif { kind == k.importdec } then {
        errormessages.syntaxError("'{name}' cannot be changed " ++
            "because it was declared with 'import'{lineInfo}.")
            atRange(node.range)
    } elseif { kind == k.typedec } then {
        errormessages.syntaxError("'{name}' cannot be re-bound " ++
            "because it is declared as a type{lineInfo}.")
            atRange(node.range)
    } elseif { kind.isParameter } then {
        errormessages.syntaxError("'{name}' cannot be re-bound " ++
            "because it is declared as a parameter{lineInfo}.")
            atRange(node.range)
    } elseif { kind == k.methdec } then {
        errormessages.syntaxError("'{name}' cannot be re-bound " ++
            "because it is declared as a method{lineInfo}.")
            atRange(node.range)
    }
}

method resolveIdentifiers(topNode) {
    // Recursively replace bare identifiers with their fully-qualified
    // equivalents.  Creates and returns a new AST; map works
    // bottom-up, so by the time a node is mapped, all of its
    // descendents have already been mapped.

    def newModule = topNode.map { node, anc ->
        if ( node.isAppliedOccurrence ) then {
            transformIdentifier(node) ancestors(anc)
        } elseif { node.isCall } then {
            transformCall(node)
        } elseif { node.isInherits } then {
            transformReuse(node) ancestors(anc)
        } elseif { node.isBind } then {
            transformBind(node) ancestors(anc)
        } else {
            node
        }
    } ancestors (ast.ancestorChain.empty)
    addAssignmentMethodsToSymbolTable
    newModule
}

method addAssignmentMethodsToSymbolTable {
    // Adds the ‹var›(_):= methods for var fields to the symbol table, so that
    // they will be inserted into the gct file.  This is delayed until after
    // identifiers have been resolved, so that assignments to module-level
    // var fields are _not_ resolved into requests on the ‹var›(_):= method,
    // but are compiled as simple assignments (which are more efficient). Note
    // that module-level var fields that are not public don't get (_):= methods;
    // because module can't be re-used, such methods are never needed.

    varFieldDecls.do { declNode ->
        def dScope = declNode.scope
        def nameGets = declNode.nameString ++ ":=(_)"
        if (dScope.isModuleScope.not || declNode.isPublic) then {
            dScope.add(declNode) withName (nameGets)  // will complain if already declared
            // is it necessary to construct a fake method node? The old symbol table did
        }
    }
}

method writeGctForModule(moduleObject) {
    xmodule.writeGCT(moduleObject.name, generateGctForModule(moduleObject))
}

method generateGctForModule(module) {
    // The gct is essentially a representation of module's symbol table.
    // We built this representation by iterating over the symbol table.
    // Older versions of this method used to iterate over the ast,
    // but reused methods are not in the ast, and so were omitted.
    //
    // The lines in the gct will be parsed by addGctLine(_)toScope(_) and has format
    // <methodName> <declaredType> <kindString> <attributeScope> <attributes>,
    // where attributes is optional, and consists of a comma-separated list of strings

    def gct = dictionary.empty
    def theDialect = module.theDialect.moduleName
    def methodList = list.empty
    def typeList = list.empty
    def ms = module.scope
    def scopesToProcess = set.empty
    def scopesAlreadyProcessed = set [ms, sm.graceEmptyScope, sm.graceUniversalScope]
    ms.types.keysAndValuesDo { typeName, typeDec ->
        gct.at "typedec-of:{typeName}" put [typeDec]
        typeList.add (typeName)
    }

    ms.localAndReusedNamesAndValuesDo { vName, defn ->
        if (defn.kind.forGct) then {
            methodList.add (serializeVariable (defn) in (ms))
            scopesToProcess.add(defn.attributeScope)
        }
    }
    while { scopesToProcess.isEmpty.not } do {
        def s = scopesToProcess.removeFirst
        if (scopesAlreadyProcessed.contains(s).not) then {
            scopesAlreadyProcessed.add(s)
            def entries = list.empty
            s.localNamesAndValuesDo { vName, v ->
                if (vName == "graphicApplicationSize(1)") then {
                    util.log 45 verbose "graphicApplicationSize(1) scope contains names {vName.attributeScope.allNames}"
                }
                entries.add(serializeVariable (v) in (s))
                def subScope = v.attributeScope
                if (scopesAlreadyProcessed.contains(subScope).not) then {
                    scopesToProcess.add(subScope)
                }
            }
            if (entries.isEmpty.not) then {
                gct.at (s.uid) put (entries.sort)
            }
            s.types.keysAndValuesDo { eachType, eachDef ->
                gct.at "typedec-of:{s.uid}.{eachType}" put [eachDef.toGrace]
                typeList.add "{s.uid}.{eachType}"
            }
        }
    }
    gct.at "methods" put (methodList.sort)
    gct.at "types" put (typeList.sort)
    gct.at "modules" put (xmodule.externalModules.keys.sorted)
    gct.at "methodTypes" put (ms.methodTypes.values.sorted)
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
    gct
}

method serializeVariable (defn) in (s) {
    // returns a string representation of the variable defn
    var anns := ""
    if (defn.hasAnnotations) then {
        anns := defn.annotations.fold {
            acc, each -> "{acc},{each}"
        } startingWith " "
    }
    def attrScp = defn.attributeScope
    "{defn.nameString} {typeName (defn.declaredType) in (attrScp)} {defn.kind.tag} {attrScp.uid}{anns}"
}

method typeName (typeNode) in (scope) {
    // returns a name for the type expression denoted by tyepNode
    // Creates a name starting with $ if necessary
    if (typeNode.isIdentifier) then {
        typeNode.nameString
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

method methodSignature(methNode) -> String {
    var s: String := ""
    var shouldEmitTypeParams := methNode.hasTypeParams
    for (methNode.signature) do { part ->
        s := s ++ part.name
        if (shouldEmitTypeParams) then {
            s := s ++ methNode.typeParams.toGrace 1
            shouldEmitTypeParams := false   // emit them once, after first part
        }
        if (part.params.isEmpty.not) then {
            s := s ++ "("
            part.params.do { p ->
                s := "{s}{p.toGrace 1}:{p.decType.toGrace 1}"
            } separatedBy {
                s := "{s}, "
            }
            s := s ++ ")"
        }
    }
    "{s} → {methNode.decType.toGrace 0}"
}

method readerSignature(declNode) -> String {
    "{declNode.nameString} → {declNode.decType.toGrace 0}"
}

method writerSignature(declNode) -> String {
    "{declNode.nameString}:=(_:{declNode.decType.toGrace 0}) → Done"
}

def importedSubscopes = dictionary.empty

method processGct(gct, importedModuleScope) {
    // Populates importedModuleScope with the information in gct,
    // which is a dictionary mapping gct keys to collections.

    def moduleName = (ast.withoutLeadingComponents (gct.at "path".first)).
            replace ".grace" with ""
    importedSubscopes.clear        // because we will be importing multiple modules
    def moduleMethods = gct.at "methods" ifAbsent { [] } >> set
    moduleMethods.do { meth ->
        addGctLine (meth) toScope (importedModuleScope) for (gct)
    }
    while {moduleMethods.isEmpty.not} do {
        def meth = moduleMethods.anyone
        moduleMethods.remove(meth)
        def split = meth.split " "
        def methName = split.first
        def knd = if (split.size == 1) then {
            k.methdec
        } else {
            k.for(split.second)
        }
        if (knd == k.freshmeth) then {
            def objScope = importedModuleScope.scopeForDottedName(methName)
            if (methName.endsWith "graphicApplicationSize(1)") then {
                util.log 45 verbose "processing scope for {methName}"
            }
            gct.at "methods-of:{methName}" ifAbsent {
                util.log 45 verbose "no {moduleName} gct entry for \"methods-of:{methName}\""
                []
            }.do { each ->
                if (methName.endsWith "graphicApplicationSize(1)") then {
                    util.log 45 verbose "adding `{each}` to {objScope.asDebugString}"
                }
                def eachName = each.split " ".first
                addGctLine (each) toScope (objScope) for (gct)
                def ns = sm.graceObjectScope.in(objScope)
                objScope.at(eachName) putScope(ns)
                moduleMethods.add "{methName}.{each}"
                if (eachName == "graphicApplicationSize(1)") then {
                    util.log 45 verbose "objScope for {eachName} is {ns.asDebugString}\n    added `{methName}.{each}` to moduleMethods"
                }
            }
        }
    }
}

method addGctLine (gctLine:String) toScope (s) for (gct) {
    // Adds a symbol table entry based on gctLine to scope s
    //
    // gctLine generated by the method generateGctForModule, and has format
    // <methodName> <declaredType> <kindString> <attributeScope> <attributes>
    // where attributes is optional, and consists of a comma-separated list of strings

    def split = gctLine.split " "
    if (split.size < 4) then {
        EnvironmentException.raise "gct line \"{gctLine}\" has wrong number of fields"
    }
    def newVar = variable.named (split.first)
        typed (split.second)
        kind (k.for(split.third))
        attributeScope (scopeWithUid(split.fourth) for (gct))
    if (split.size == 5) then {
        def annotations = split.fifth.split ","
        newVar.isAnnotation := annotations.contains "annotation"
        newVar.isRequired := annotations.contains "required"
        newVar.isAbstract := annotations.contains "abstract"
    }
    s.add(newVar)
}

method scopeWithUid(str) for (gct) {
    importedSubscopes.at(str) ifAbsent {
        def newScope = sm.graceObjectScope
        importedSubscopes.at(str) put (newScope)
        gct.at "scope:{str}" do { gctLine ->
            addGctLine (gctLine) toScope (newScope) for (gct)
        }
        newScope
    }
}

var isInBeginningStudentDialect := false

method setupContext(moduleNode) {
    // define the built-in names
    util.setPosition(0, 0)

    dialectScope.clear      // so that resolve can be serially re-used.
    moduleScope.clear
    varFieldDecls.clear

    moduleScope.add(variable.named "$module"
        typed (ast.unknownType) kind (k.selfDef) attributeScope (moduleScope))

    moduleScope.add(variable.named "$dialect"
        typed (ast.unknownType) kind (k.selfDef) attributeScope (dialectScope))

    def dialectNode = moduleNode.theDialect
    def dialectName:String = dialectNode.value
    if (dialectName ≠ "none") then {
        xmodule.checkDialect(moduleNode)
        processGct(xmodule.gctDictionaryFor(dialectName), dialectScope)
    }
    isInBeginningStudentDialect := (dialectName == "beginningStudent")
}

method checkTraitBody(traitObjNode) {
    traitObjNode.value.do { node ->
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

        method visitBind (o) up (anc) {
            o.scope := anc.parent.scope
            def lValue = o.dest
            if (lValue.kind == "identifier") then {
                lValue.isAssigned := true
            }
            return true
        }
        method visitCall (o) up (anc) {
            def enclosingNode = anc.parent
            def scope = enclosingNode.scope
            o.scope := scope
            def callee = o.receiver
            if (callee.isIdentifier) then {
                callee.inRequest := true
            }
            o.parts.do { each -> each.scope := scope }
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
            o.scope := sm.graceBlockScope.in(anc.parent.scope)
            true
        }
        method visitDefDec (o) up (anc) {
            def myParent = anc.parent
            def s = myParent.scope
            o.scope := s
            o.parentKind := myParent.kind
            def rhs = o.value
            if (rhs.isObject) then { rhs.name := o.nameString }
            if (myParent.isObject && o.isReadable) then {
                s.methodTypes.at(o.nameString) put(readerSignature(o))
            }
            true
        }
        method visitVarDec(o) up (anc) {
            def myParent = anc.parent
            def s = myParent.scope
            o.scope := s
            o.parentKind := myParent.kind
            if (myParent.isObject) then {
                if (o.isReadable) then {
                    s.methodTypes.at(o.nameString) put(readerSignature(o))
                }
                if (o.isWritable) then {
                    s.methodTypes.at(o.nameString) put(writerSignature(o))
                }
            }
            true
        }
        method visitIdentifier (o) up (anc) {
            var scope := anc.parent.scope
            o.scope := scope
            if (o.isBindingOccurrence) then {
                if ((o.isDeclaredByParent.not) && {o.wildcard.not}) then {
                    checkForReservedName(o)
                    def kind = o.declarationKindWithAncestors(anc)
                    if (scope.isObjectScope && (kind == k.vardec)) then {
                        varFieldDecls.add(anc.parent)
                        // Why not just add the :=(_) now?
                        // Because we want some field assignments to be compiled as
                        // direct assignments, and hence have to distinguish
                        // programmer-writen :=(_) methods from synthetic ones.
                    }
                    scope.add(match (kind)
                        case {k.vardec -> variable.graceVarFrom(o)}
                        case {k.defdec -> variable.graceDefFrom(o)}
                        case {k.typedec -> variable.graceTypeFrom(o)}
                        case {k.parameter -> variable.graceParameterFrom(o)}
                    )
                }
            } elseif {o.wildcard} then {
                errormessages.syntaxError("'_' cannot be used in an expression")
                    atRange(o.range)
            }
            true
        }
        method visitAlias (o) up (ac) {
            o.scope := ac.parent.scope
            o.newName.accept(self) from (ac.extend(o))
            false   // no need to visit the aliasNode's other components
        }
        method visitImport (o) up (anc) {
            o.scope := anc.parent.scope
            xmodule.checkExternalModule(o)
            def gct = xmodule.gctDictionaryFor(o.moduleName)
            def otherModule = sm.graceModuleScope.in(anc.parent.scope)
            otherModule.node := o
            processGct(gct, otherModule)
            o.scope.at(o.nameString) putScope(otherModule)
            true
        }
        method visitInherits (o) up (anc) {
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
        method visitMethod (o) up (anc) {
            def surroundingScope = anc.parent.scope
            if (surroundingScope.isObjectScope.not) then {
                // The parser accepts method declarations as statments, and thus
                // class and trait declarations as statements too.
                // Here we check that they are inside an object.
                // This produces better diagnostics than rejecting them in
                // the parser, as well as simplifying the parser.

                errormessages.syntaxError("{o.description} declarations are permitted only" ++
                    " inside an object") atRange(o.range)
            }
            def ident = o.asIdentifier
            checkForReservedName(ident)
            if (ident.isBindingOccurrence) then {
                ident.isDeclaredByParent := true
                // aliased and excluded names are appliedOccurrences
                o.scope := sm.graceMethodScope.in(surroundingScope)
                if (o.returnsObject && o.isOnceMethod.not) then {
                    o.isFresh := true
                }
                def varObj = if (o.isRequired || o.isAbstract) then {
                    // TODO: do we need to distinguish abstract and required methods?
                    variable.graceRequiredMethodFrom(o)
                } else {
                    variable.graceMethodFrom (o)
                }
                surroundingScope.add(varObj)
                if (o.isPublic) then {
                    surroundingScope.methodTypes.at(ident.nameString) put(methodSignature(o))
                }
            }
            if (o.body.isEmpty.not && {o.body.last.isObject}) then {
                o.body.last.name := o.canonicalName
            }
            true
        }
        method visitMethodType (o) up (anc) {       // used to visit a methodSignatureNode
            def surroundingScope = anc.parent.scope
            if (o.isAppliedOccurrence) then {       // on rhs of an alias, or in an exclude
                o.scope := surroundingScope
                return true
            }
            def ident = o.asIdentifier
            checkForReservedName(ident)
            surroundingScope.add(variable.graceMethodFrom (o))
            ident.isDeclaredByParent := true
            o.scope := sm.graceParameterScope.in(anc.parent.scope)
            // the scope for the parameters (including the type parameters,
            // if any) of this method.
            true
        }
        method visitObject (o) up (anc) {
            def myParent = anc.parent
            o.scope := sm.graceObjectScope.in(myParent.scope)
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
            checkForReservedName(ident)
            enclosingScope.add(variable.graceTypeFrom(ident))
            enclosingScope.types.at(ident.nameString) put(o.toGrace 0)
            ident.isDeclaredByParent := true
            o.scope := sm.graceTypeScope.in(enclosingScope)
            // this scope will be the home for any type parameters.
            // If there are no parameters, it won't be used.
            true
        }
        method visitTypeLiteral (o) up (anc) {
            o.scope := sm.graceInterfaceScope.in(anc.parent.scope)
            true
        }
        method visitReturn(o) up (anc) {
            o.scope := anc.parent.scope;
            def enclosingMethodNode = anc.suchThat { n -> n.isMethod } ifAbsent {
                errormessages.syntaxError "`return` statements must be inside methods."
                    atRange(o.range)
            }
            o.dtype := enclosingMethodNode.dtype
            true
        }
        method visitTypeParameters(o) up (anc) { o.scope := anc.parent.scope ; true }
        method visitIf(o) up (anc) { o.scope := anc.parent.scope ; true }
        method visitMatchCase(o) up (anc) { o.scope := anc.parent.scope ; true }
        method visitTryCatch(o) up (anc) { o.scope := anc.parent.scope ; true }
        method visitSignaturePart(o) up (anc) { o.scope := anc.parent.scope ; true }
        method visitArray(o) up (anc) { o.scope := anc.parent.scope ; true }
        method visitMember(o) up (anc) {
            visitCall(o) up (anc)
        }
        method visitGeneric(o) up (anc) { o.scope := anc.parent.scope ; true }
        method visitString(o) up (anc) { o.scope := anc.parent.scope ; true }
        method visitNum(o) up (anc) { o.scope := anc.parent.scope ; true }
        method visitOp(o) up (anc) { o.scope := anc.parent.scope ; true }
        method visitDialect(o) up (anc) { o.scope := anc.parent.scope ; true }
        method visitCommentNode(o) up (anc) { o.scope := anc.parent.scope ; true }
    }   // end of symbolTableVis

    def objectScopesVis = object {
        // This traversal can't be completed in the buildSymbolTable visitor,
        // because the visitation is top-down, and hence the scope of the
        // body of a def or method won't have been allocated when the
        // declaration is visited.

        inherit ast.baseVisitor
        method visitDefDec (o) up (anc) {
            def rhs = o.value
            if (rhs.returnsObject) then {
                o.scope.at(o.nameString) putScope(rhs.returnedObjectScope)
            }
            true
        }
        method visitMethod (o) up (anc) {
            def myParent = anc.parent
            if (o.returnsObject) then {
                def ros = o.returnedObjectScope
                def methodName = o.nameString
                myParent.scope.at(o.nameString) putScope(ros)
                util.log 45 verbose "putting returned object scope {ros.asDebugString} at \"{methodName}\" in {myParent.scope.asDebugString}"
                if (anc.forebears.forebears.isEmpty.not) then {
                    // associates a dotted name with the returned object
                    // omit this if I'm at the module-level
                    def factoryName = myParent.name
                    def tailNode = o.returnedObject
                    if ((factoryName != "object") && (tailNode.isObject)) then {
                        tailNode.name := factoryName ++ "." ++ tailNode.name
                    }
                }
            }
            true
        }
    }

    def inheritanceVis = object {
        inherit ast.baseVisitor
        method visitObject (o) up (anc) {
            collectParentNames(o)
            true
        }
        method visitModule (o) up (anc) {
            collectParentNames(o)
            true
        }
    }

    topNode.accept(symbolTableVis) from(topChain)
    topNode.accept(objectScopesVis) from(topChain)
    topNode.accept(inheritanceVis) from(topChain)
}

method collectParentNames(node) {
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
        var inheritedKind := k.inherited
        if (false == inhNode) then {
            def gO = ast.identifierNode.new("graceObject", false) scope(objScope)
            inhNode := ast.inheritNode.new(gO) scope(objScope)
            superScope := graceObjectScope
            inheritedKind := k.graceObjectMethod
        } else {
            superScope := objScope.scopeReferencedBy(inhNode.value)
            if (superScope.node.isNull.not) then {
                // superScope.node.isNull when superScope describes
                // an imported module, in which case the names have
                // already been collected, or superScope is universal,
                // when we have no information about inherited attributes
                collectParentNames(superScope.node)
            }
        }
        def excludedNames = inhNode.exclusions.map { exMeth -> exMeth.nameString } >> list
        superScope.localAndReusedNamesAndValuesDo { name, defn ->
            if ((name ≠ "self") && (excludedNames.contains(name).not)) then {
                objScope.addReused(defn) withName (name)
                inhNode.providedNames.add(name)
            }
        }
        inhNode.aliases.do { a ->
            def old = a.oldName.nameString
            def new = a.newName.nameString
            if (superScope.defines(old)) then {
                def defn = superScope.lookupLocallyOrReused(old) ifAbsent {
                    ProgrammingError.raise "superscope is inconsistet"
                }
                objScope.addReused (defn) withName (new)
                inhNode.providedNames.add(new)
            } else {
                errormessages.syntaxError("can't define an alias for " ++ a.oldName.canonicalName ++
                    " because it is not present in the inherited object")
                    atRange(a.oldName.range)
            }
        }
        inhNode.exclusions.do { exMeth ->
            if (superScope.contains(exMeth.nameString).not) then {
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

    def traitMethods = map.dictionary.empty
        // maps method names to the trait(s) that provide(s) them - for detecting conflicts
    def objScope = objNode.scope
    objNode.usedTraits.do { t ->
        def traitScope = objScope.scopeReferencedBy(t.value)
        util.log 46 verbose "Trait: {t.toGrace 0} with scope {traitScope}"

        def traitNode = traitScope.node
        def requiredNames = list.empty
        if (traitNode.isNull.not) then {
            // if traitNode is null, the trait's scope comes from a gct, and
            // we have no information as to whether or not it references a trait.
            // TODO: add this information to gct
            if (traitNode.isTrait.not) then {
                errormessages.syntaxError("{t.value.toGrace 0} is not a trait,"
                      + " so it may not appear in a 'use' statement")
                      atRange(t)
            }
            collectParentNames(traitNode)
        }
        def excludedNames = t.exclusions.map { exMeth -> exMeth.nameString } >> list
        traitScope.localAndReusedNamesAndValuesDo { nm, defn ->
            if (defn.kind.forUsers && excludedNames.contains(nm).not) then {
                objScope.addReused(defn)
                if (nm == "graphicApplicationSize(1)") then {
                    util.log 45 verbose "put scope {traitScope.lookupReused(nm).asDebugString} at {nm} in {objScope.asDebugString}"
                }
                t.providedNames.add(nm)
                if (defn.isRequired) then {
                    requiredNames.add(nm)
                }
            }
        }
        t.aliases.do { a ->
            def old = a.oldName.nameString
            def new = a.newName.nameString
            traitScope.lookupLocallyOrReused(old) ifAbsent {
                errormessages.syntaxError("can't define an alias for " ++
                    "{a.oldName.canonicalName} because it is not present in the trait")
                    atRange(a.oldName.range)
            } ifPresent { defn ->
                objScope.addReused (defn) withName (new)
                t.providedNames.add(new)
            }
        }
        t.exclusions.do { exMeth ->
            if (traitScope.contains(exMeth.nameString).not) then {
                errormessages.syntaxError("can't exclude {exMeth.canonicalName} " ++
                    "because it is not available in the used trait")
                    atRange(exMeth.range)
            }
        }
        t.providedNames.do { methName ->
            if (requiredNames.contains(methName).not) then {
                def definingTraits = traitMethods.at(methName) ifAbsent { list [] }
                definingTraits.push(t)
                traitMethods.at(methName)put(definingTraits)
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

    traitMethods.keysDo { methName ->
        def sources = traitMethods.at(methName)
        if (sources.size > 1) then {    // a method has more than one source trait
            if (objNode.localNames.contains(methName).not) then {
                conflicts.addLast (conflictForMethodName(methName) from(sources))
            }
        }
    }

    if (conflicts.isEmpty) then { return }

    var maxSourceLine := 0
    var message := if (conflicts.size > 1) then {
        "trait conflicts found.\n    "
    } else {
        "trait conflict found. "
    }
    conflicts.do { each ->
        def sourceList = each.sources.map { s -> s.nameString }
        maxSourceLine := each.sources.fold {a, s -> max(a, s.line) }
              startingWith(maxSourceLine)
        message := message ++ "Method `{each.methodName}` is defined in " ++
              errormessages.readableStringFrom(sourceList) ++ ".\n    "
    }
    if (maxSourceLine == 0) then {
        errormessages.error(message)
    } else {
        errormessages.error(message) atLine (maxSourceLine)
    }
}

class conflictForMethodName(nm) from(srcs) {
    def methodName is public = nm
    def sources is public = srcs
}

method reusedScope (aReuseStatement) {
    // answers the scope referenced by the super expression in aReuseStatement
    def expr = aReuseStatement.reuseExpr
    if (expr.receiver.isSelf) then {
        selfReuseError (aReuseStatement)
    }
    expr.objectScopeFor (aReuseStatement)
}

method selfReuseError (aReuseNode) {
    errormessages.SyntaxError(
          "it's not possible to {aReuseNode.statementName} `self`, because " ++
          "`self` does not yet exist when the {aReuseNode.statementName} " ++
          "statement is executed"
    ) atRange (aReuseNode.reuseExpr.range)
}

method transformBind(bindNode) ancestors(anc) {
    // bindNode is (a shallow copy of) a bindNode.  If it is binding a
    // "member" or an identifier, transform it into a request on a setter

    def lhs = bindNode.lhs
    def nm = lhs.nameString
    def nmGets = nm ++ ":=(1)"
    def defs = sm.variableResolver.definitionsOf (nmGets) visibleIn (bindNode.scope)
    defs.ifEmpty {
        def badBinding = bindNode.scope.lookup (lhs.name) ifAbsent {
            reportAssignmentTo (lhs) declaredInScope (lhs.scope)
        }
    }
    if (defs.size > 1) then {
        reportAmbiguityError (defs) node (lhs)
    }
    def aResolvedVariable = defs.first
    if (aResolvedVariable.definition.isMethod) then {
        def request = ast.requestPart.request(nm ++ ":=")
                withArgs [bindNode.rhs] scope(bindNode.scope).
                setPositionFrom(bindNode)
        generateOneselfRequestOf (request) from (bindNode) using (aResolvedVariable)
    } else {
        bindNode
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
              "{ruNode.statementName} statements must be directly inside an object."
              atRange(ruNode.range)
    }
    if (reuseExpr.isAppliedOccurrence) then {
        ruNode.value := transformIdentifier (reuseExpr) ancestors (anc)
    } elseif {reuseExpr.isCall} then {
        ruNode.value := transformCall (reuseExpr)
    } else {
        errormessages.CompilationError.raise "unknown reuse expression {reuseExpr.toGrace 0}"
    }
    def reusedScope = reusedScope (ruNode)
    if (reusedScope.isGenerative.not) then {
        errormessages.syntaxError "inheritance must be from a freshly-created object."
              atRange(ruNode.range)
    }
    if (ruNode.isUse) then {
        if (reusedScope.isLegalAsTrait.not) then {
            errormessages.syntaxError ("the expression in your use " ++
                  "statement does not refer to a trait")
                  atRange (reuseExpr)
        }
    }
    ruNode
}

method transformCall(cNode) -> ast.AstNode {
    def methodName = cNode.nameString
    def s = cNode.scope
    def nominalRcvr = cNode.receiver
    def result = if (nominalRcvr.isImplicit) then {
        def theRequest = cNode.nameString
        def defs = sm.variableResolver.definitionsOf (methodName) visibleIn (s)
        if (defs.isEmpty) then {
            reportUndeclaredIdentifier (cNode)
        }
        if (defs.size > 1) then {
            reportAmbiguityError (defs) node (cNode)
        }
        generateOneselfRequestOf (theRequest) from (cNode) using (defs.first)
    } elseif { nominalRcvr.isOuter && (cNode.nameString == "outer") } then {
        // deal with outer.outer ..., which has been (incorrectly) parsed into a
        // a request of `outer` with an outernode as receiver.
        // Here we add another object to that outerNode's object list.

        def priorOuter = nominalRcvr.theObjects.last
        def newOuter = priorOuter.objectScope.outerScope.objectScope.node
        nominalRcvr.theObjects.addLast(newOuter)
        nominalRcvr
    } else {
        cNode
    }
    if (result.isTailCall) then {    // do this work only when someone might care
        def rcvrScope = pathScope(result.receiver)
        def answerScope = rcvrScope.attributeScopeOf(result.nameString)
        if (answerScope.isFreshObjectScope) then {
            result.isFresh := true
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
    def dialectObject = ast.moduleNode.body [moduleNode]
        named "$dialect" scope (dialectScope)
    def dialectChain = ast.ancestorChain.with(dialectObject)

    buildSymbolTableFor(moduleNode) ancestors(dialectChain)
    util.log_verbose "symbol tables built."

    if (util.target == "symbols") then {
        def additionalScopes = set.empty
        util.outprint "====================================="
        util.outprint "module with symbol tables"
        util.outprint "====================================="
        util.outprint "top-level"
        util.outprint "Universal scope = {sm.graceUniversalScope.asDebugString}"
        moduleNode.scope.withSurroundingScopesDo { each ->
            util.outprint (each.asString)
            util.outprint (each.elementScopesAsString)
            each.elementScopes.values >> additionalScopes
        }
        additionalScopes.do { each ->
            util.outprint (each.asString)
            util.outprint (each.elementScopesAsString)
            util.outprint "----------------"
        }
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
