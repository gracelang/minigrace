import "errormessages" as errormessages
import "fastDict" as fastDict
import "regularExpression" as regEx
import "basic" as basic

use basic.open

def NamingError is public = errormessages.SyntaxError.refine "NamingError"
def predefined is public = dictionary.empty
var typeType is writable        // dependency injected from constantScope

type MinimalScope = interface {
    localNames → Collection
    reusedNames → Collection
    defines(name) → Boolean
}

var id := 100       // for generating unique ids for scopes

class graceBlockScope {
    inherit graceScope
    method variety { "block" }
}
class graceBuiltInScope {
    inherit graceModuleScope
    method variety { "builtIn" }
    method areReusedNamesCompleted {
        true
    }
    method isBuiltInScope { true }
}
class graceDialectScope {
    inherit graceModuleScope
    method variety { "dialect" }
    method areReusedNamesCompleted {
        true    // because any reuse in the dialect
                // happended before it became our dialect
    }
    method isDialectScope { true }
}
def graceEmptyScope:MinimalScope is public = object {
    // I represent the empty scope, with no definitions, and to which no definitions can be added.
    use identityEquality

    method <(other) { uid < other.uid }

    def uid is public = "$scopeEmpty"
    predefined.at(uid) put (self)
    method isTheEmptyScope { true }
    method isTheUniversalScope { false }
    method isFresh { false }
    method isDialectScope { false }
    method lookup (name) ifAbsent (aBlock) ifPresent (pBlock) {
        aBlock.apply
    }
    method localNames { dictionary.empty }
    method reusedNames { dictionary.empty }
    method types { dictionary.empty }
    method lookup (name) ifAbsent (aBlock) {
        aBlock.apply
    }
    method attributeScopeOf(name) {
        self
    }
    method lookup(name) {
        ProgrammingError.raise "{name} was not found in any lexical scope"
    }
    method lookupLocally (name) ifAbsent (aBlock) {
        aBlock.apply
    }
    method localAndReusedNamesAndValuesDo (aBlock) {
        done
    }
    method node {
        ProgrammingError.raise "the empty scope is not associated with a node"
    }
    method node := (nu) {
        ProgrammingError.raise "the empty scope cannot be associated with a node"
    }
    method asString {
        "the empty scope"
    }
    method add (aVariable:Variable) withName (aString) {
        ProgrammingError.raise("an attempt was made to add {aVariable.name} with " ++
            "name {aString} to the empty scope")
    }
    method lookupLocallyOrReused (name) ifAbsent (aBlock) {
        aBlock.apply
    }
    method allNamesAndValuesDo (aBlock) {
        self
    }
    method lookupLexically (name) ifAbsent (aBlock) {
        aBlock.apply
    }
    method objectScope {
        self
    }
    method defines (name) {
        false
    }
    method allNamesAndValuesDo (aBlock) filteringOut (closerDefinitions) {
        self
    }
    method lookupLocallyOrReused (name) ifAbsent (aBlock) ifPresent (pBlock) {
        aBlock.apply
    }
    method localNamesAndValuesDo (aBlock) {
        self
    }
    method isObjectScope {
        // I'm treated as an object scope so that every non-empty scope has
        // an enclosingObjectScope
        true
    }
    method lookupLexically (name) ifAbsent (aBlock) ifPresent (pBlock) {
        aBlock.apply
    }
    method outerScope {
        ProgrammingError.raise "the empty scope has no outerScope"
    }
    method outerScope := (nu) {
        ProgrammingError.raise "the empty scope cannot be given an outerScope"
    }
    method variety { "empty" }
    method clear { }
}

def graceUniversalScope:Scope is public = object {
    inherit graceScope
    // I represent the universal scope, which defines all names
    // I'm used when no more specific scope information is available.

    def universalVariable = singleton "universal variable"

    method iterationError is confidential {
        ProgrammingError.raise "can't iterate through the Universal Scope"
    }
    uidCache := "$scopeUniv"
    predefined.at(uidCache) put (self)
    method isTheEmptyScope { false }
    method isFresh { false }
    method isFresh:=(_) {
        ProgrammingError.raise "can't change the freshness of the Universal Scope"
    }
    method isTheUniversalScope { true }
    method lookup (name) ifAbsent (aBlock) ifPresent (pBlock) {
        pBlock.apply
    }
    method lookup (name) ifAbsent (aBlock) { universalVariable }
    method lookup(name) { universalVariable }
    method lookupLocally (name) ifAbsent (aBlock) { universalVariable }
    method localAndReusedNamesAndValuesDo (aBlock) { iterationError }
    method node {
        ProgrammingError.raise "the universal scope is not associated with a node"
    }
    method node := (nu) {
        ProgrammingError.raise "the universal scope cannot be associated with a node"
    }
    method asString {
        "the universal scope"
    }
    method add (aVariable:Variable) withName (aString) {
        ProgrammingError.raise("an attempt was made to add {aVariable.name} with " ++
            "name {aString} to the universal scope")
    }
    method lookupLocallyOrReused (name) ifAbsent (aBlock) { universalVariable }
    method allNamesAndValuesDo (aBlock) { iterationError }
    method lookupLexically (name) ifAbsent (aBlock) { universalVariable }
    method objectScope { self }
    method defines (name) { true }
    method allNamesAndValuesDo (aBlock) filteringOut (closerDefinitions) {
        iterationError
    }
    method lookupLocallyOrReused (name) ifAbsent (aBlock) ifPresent (pBlock) {
        pBlock.apply
    }
    method localNamesAndValuesDo (aBlock) {
        iterationError
    }
    method attributeScopeOf (aName) { self }
    method isObjectScope {
        // I'm treated as an object scope so that every non-empty scope has
        // an enclosing objectScope
        true
    }
    method lookupLexically (name) ifAbsent (aBlock) ifPresent (pBlock) {
        pBlock.apply
    }
    method outerScope {
        ProgrammingError.raise "the universal scope has no outerScope"
    }
    method outerScope := (nu) {
        ProgrammingError.raise "the universal scope cannot be given an outerScope"
    }
    method variety { "universal" }
    method clear {
        ProgrammingError.raise "can't clear the universal scope"
    }
    method types { dictionary.empty }

}
class graceInterfaceScope {
    inherit graceScope
    // I represent an iterface scope, that is, a set of methods.  Thus, I also
    // represent the methods in an interface type.

    method initialize(aNode) is confidential {
        if (definesLocally "Self".not) then {
            add (variableTypeFrom(aNode)) withName "Self"
        }
    }

    method meet (anotherScope) {
        // create and return a new scope that is the mathematical meet of self
        // and anotherScope; it contains those names common to both scopes.
        def result = graceInterfaceScope
        anotherScope.localNamesAndValuesDo { nm, rightVal →
            lookupLocally (nm) ifAbsent {
            } ifPresent { leftVal →
                result.add (leftVal.meet (rightVal)) withName (nm)
            }
        }
        result
    }
    method join (anotherScope) {
        // create and return a new scope that is the mathematical join of self
        // and anotherTypeScope; it contains the definitions from both scopes.
        def result = self.copy
        anotherScope.localNamesAndValuesDo { nm, val →
            result.lookupLocally (nm) ifAbsent {
                result.add (val) withName (nm)
            } ifPresent { originalVal →
                result.redefine (val.join (originalVal)) withName (nm)
            }
        }
        result
    }
    method variety { "interface" }
}
class graceMethodScope {
    inherit graceScope
        alias superAdd(_)withName(_) = add(_)withName(_)

    method add (aVariable:Variable) withName (aString) {
        if (aVariable.isExplicitMethod) then {
            structuralError "sorry, you can't declare a method immediately inside a method"
                  variable (aVariable)
        }
        superAdd (aVariable) withName (aString)
    }
    method variety { "method" }
}
class graceObjectScope {
    // I represent an object scope in a Grace program.  I support reuse via
    // inheritance of objects and use of traits, and hence have an additional
    // dictionary for reused names.
    //
    // My fields are those of graceScope, and:
    //   reusedNames — a dictionary containing as keys all of the names reused
    //          (from a trait or superobject) in my scope.  This dictionary
    //          is polpulated on demand.
    //   statusOfReusedNames — one of "undiscovered", "inProgress", or "completed";
    //          the state of the process of collecting the reusedNames.
    //   methodTypes - a dictionary containing the type (aString) of each method
    //          defined in this object
    //   types - a dictionary containing the types defined in this object (as strings)
    //   isFresh — can objects with me as their scope be inherited or used?

    inherit graceScope
        alias superCopy(other) = copy(other)
        alias superClear = clear

    def reusedNames is public = nameDictionary []
    var statusOfReusedNames := "undiscovered"
    def methodTypes is public = dictionary.empty
    def types is public = dictionary.empty

    var isFresh is public := false  // changed in objectScopesVis in identifierResolution

    method initialize(aNode) is confidential {
        if (definesLocally "self".not) then {
            add (variablePseudoFrom(aNode).attributeScope (self)) withName "self"
            def enclosingObjectScope = outerScope.objectScope
            def enclosingObjectVariable =
                variablePseudoFrom(enclosingObjectScope.node).
                    attributeScope (enclosingObjectScope)
            add (enclosingObjectVariable) withName "outer"
        }
    }
    method allNames {
        (names.keys ++ reusedNames.keys) >> sequence
    }
    method markReusedNamesAsInProgress {
        statusOfReusedNames := "inProgress"
    }
    once method isTrait {
        // Can objects with me as their scope be used as a trait?
        // My declaration may or may not use the trait syntax.
        node.value.do { each →           // TODO: use allSatisfy on collections
            if (each.isLegalInTrait.not) then { return false }
        }
        true
    }
    method objectScope {
        // this scope, since it is an object scope
        self
    }
    method addLocalAndReusedFrom (anotherScope) {
        anotherScope.localAndReusedNamesAndValuesDo { nm, defn →
            if (defn.isAvailableForReuse) then {
                addReused (defn) withName (nm)
            }
        }
    }
    method addReused (aVariable:Variable) {
        addReused (aVariable) withName (aVariable.declaredName)
    }
    method localAndReusedNamesAndValuesDo (aBlock) filteringOut (closerDefinitions) {
        names.keysAndValuesDo { name, defn →
            if (closerDefinitions.contains (name).not) then {
                aBlock.apply (name, defn)
                closerDefinitions.add (name)
            }
        }
        reusedNames.keysAndValuesDo { name, defn →
            if (closerDefinitions.contains (name).not) then {
                aBlock.apply (name, defn)
                closerDefinitions.add (name)
            }
        }
    }
    method addReused (aVariable:Variable) withName (aName) {
        reusedNames.at (aName) put (aVariable)
        aVariable
    }
    method reuses (name) {
        // Is name defined by a scope that this scope reuses?
        if (areReusedNamesCompleted.not) then {
            ProgrammingError.raise ("reused names of {self} declared on " ++
                "{node.range.lineRangeString} have not been gathered")
        }
        reusedNames.containsKey (name)
    }
    method lookupReused (name) ifAbsent (aBlock) {
        // Return the variable corresponding to name, if it is defined in a scope that this
        // scope reuses.	If it is not defined, return the value of executing aBlock.
        if (areReusedNamesCompleted.not) then {
            ProgrammingError.raise ("reused names of {self} declared on " ++
                "{node.range.lineRangeString} have not been gathered")
        }
        reusedNames.at (name) ifAbsent {
            aBlock.apply
        }
    }
    method reusedNamesAndValuesDo (aBlock) {
        reusedNames.keysAndValuesDo (aBlock)
    }
    method areReusedNamesInProgress {
        (statusOfReusedNames == "inProgress")
    }
    method lookupReused (name) ifAbsent (aBlock) ifPresent (pBlock) {
        // If the variable corresponding to name is defined in a scope that this
        // scope reuses, apply pBlock to it and return the result.
        // If it is not defined, return the value of executing aBlock.
        if (areReusedNamesCompleted.not) then {
            ProgrammingError.raise ("reused names of {self} declared on " ++
                "{node.range.lineRangeString} have not been gathered")
        }
        def variable = reusedNames.at (name) ifAbsent {
            return aBlock.apply
        }
        pBlock.apply (variable)
    }
    method copy(other) {
        def result = superCopy(other)
        other.reusedNames.keysAndValuesDo { name, variable →
            result.addReused(variable) withName (name)
        }
        result
    }
    method areReusedNamesCompleted {
        statusOfReusedNames == "completed"
    }
    method markReusedNamesAsCompleted {
        statusOfReusedNames := "completed"
    }
    method isObjectScope {
        true
    }
    method variety { "object" }
    method clear {
        reusedNames.clear
        statusOfReusedNames := "undiscovered"
    }
}

class externalScope {
    // I describe a scope defined in some other module.
    //
    // I've been made known to the module being compiled by a gct entry.
    // and consequently have no parse node associated with me

    inherit graceObjectScope
    method node is override {
        ProgrammingError.raise "an external variable has no associated node"
    }
    var isTrait is public := false
    var isFresh is public := false
    method isExternal { true }
    method variety { "external" }
    method areReusedNamesCompleted { true }
}

class predefinedObjectScope(name) {
    // I'm an object scope for predefined objects like String and Number.
    //
    // I differ from an ordinary externalScope because I don't need to be
    // written to the gct.  To support this, I have the same uid in every
    // compilation.  The dictionary `predefined` can be used to find me

    inherit externalScope
    uidCache := "$scope_{name}"
    predefined.at(uidCache) put (self)
    method variety { "predefined" }
}

class graceParameterScope {
    // A parameter scope is used to declare the type parameters and the value
    // parameters of a method.  Type parameters of a type go in the type scope.

    inherit graceScope

    method variety { "parameter" }
}
class graceTypeScope {
    // I record the names introduced by a type declaration.  These are the
    // parameters to the type, if any.
    // Nothing else goes in the type scope; the methods of an interface go in
    // an interface scope.

    inherit graceScope
    method variety { "type" }
}
class graceModuleScope {
    inherit graceObjectScope

    method isModuleScope { true }

    method lookup (name) ifAbsent (aBlock) {
        // Return the variable corresponding to name, which may or may not be
        // defined in this scope, or in the surroundng dialect scope, but no further.
        // If name is not defined, return the value of executing aBlock.

        lookupLocallyOrReused (name) ifAbsent {
            outerScope.lookupLocallyOrReused (name) ifAbsent {
                aBlock.apply
            }
        }
    }
    method lookupLexically (name) ifAbsent (aBlock) {
        // Return the variable corresponding to name, which may or may not be
        // defined in this scope, or in the surroundng dialect scope,
        // but no further.  If name is not defined, return the value of executing aBlock.
        // Note that this method ignores reused names; it is intended for implementing Grace's shadowing check
        lookupLocally (name) ifAbsent {
            outerScope.lookupLocally (name) ifAbsent {
                aBlock.apply
            }
        }
    }
    method importedModules {
        names.values.select { each →
            each.isImport
        }
    }
    method variety { "module" }
}
class graceScope {
    // I represent a declaration scope in a Grace program.
    //
    // My fields are:
    //   names — a dictionary containing as keys all of the names declared in my scope.
    //          The values are the "variable" objects that represent the declaration.
    //   outerScope — the scope surrounding me, or emptyScope if there is none.
    //   openingNode — the node that opens this scope. For example, if this is a method scope,
    //                   then openingNode is the method node
    //   uidCache — a string that uniquely identifies this scope within the current compilation,
    //              or the empty string if the uid has yet to be requested.

    use identityEquality

    method <(other) { uid < other.uid }
    def names = nameDictionary []
    var outerScope is public := graceEmptyScope
    var openingNode := nullNode
    var uidCache := ""

    method isExternal { false }
    method uid {
        if (uidCache.isEmpty) then {
            uidCache := "${id}"
            id := id + 1
        }
        uidCache
    }
    method allNames { names.keys >> sequence }

    method in(anotherScope) {
        // sets the outerScope for this scope, and returns self
        outerScope := anotherScope
        self
    }
    method node(nu) {
        // sets the node for this scope, and returns self
        openingNode := nu
        initialize(openingNode)
        self
    }
    method node:=(nu) {
        openingNode := nu
        initialize(openingNode)
        done
    }
    method node {
        openingNode
    }
    method initialize(aNode) is confidential {
        // a hook method
    }
    method lookup (name) ifAbsent (aBlock) {
        // Return the variable corresponding to name, which may or may not be
        // defined in this scope, or in one of the lexically surrounding scopes.
        // If it is not defined, return the value of executing aBlock.

        lookupLocallyOrReused (name) ifAbsent {
            outerScope.lookup (name) ifAbsent {
                aBlock.apply
            }
        }
    }
    method lookup (name) {
        // Return the variable corresponding to name, which must be
        // defined in this scope, or in one of the lexically surrounding scopes.

        lookup (name) ifAbsent {
            ProgrammingError.raise "name {name} not found in scope {self}"
        }
    }
    method localAndReusedNamesAndValuesDo (aBlock)
          filteringOut (closerDefinitions) is confidential {
        names.keysAndValuesDo { name, defn →
            if (closerDefinitions.contains (name).not) then {
                aBlock.apply (name, defn)
                closerDefinitions.add (name)
            }
        }
    }
    method lookupLocally (name) ifAbsent (aBlock) ifPresent (pBlock) {
        // Look up variable corresponding to name, which may or may not be defined
        // in this scope. If it is not defined, return the result of executing
        // aBlock; otherwise, return the result of applying pBlock to the variable.

        def variable = names.at (name) ifAbsent {
            return aBlock.apply
        }
        pBlock.apply (variable)
    }
    method attributeScopeOf (aName) {
        lookup (aName) ifAbsent {
            // this happens with, e.g., parameters and vars,
            // where we don't know the attribute scope
            return graceUniversalScope
        }.attributeScope
    }
    method asString {
        "{variety} scope {uid} containing " ++ (names.keys.sorted >> sequence)
    }
    method lookupLocallyOrReused (name) ifAbsent (aBlock) {
        // Return the variable corresponding to name, which may or may not be defined in this scope,
        // or in one of the scopes that it reuses.
        // If name is not defined, return the value of executing aBlock.
        lookupLocally (name) ifAbsent {
            lookupReused (name) ifAbsent {
                aBlock.apply
            }
        }
    }
    method lookupLocallyOrReused (name) {
        lookupLocallyOrReused (name) ifAbsent { ProgrammingError.raise "{name} not found" }
    }
    method copy(other) {
        def result = graceScope
        other.names.keysAndValuesDo { name, variable →
            result.add(variable) withName (name)
        }
        result.outerScope := graceEmptyScope
        result
    }
    method areReusedNamesCompleted {
        // Overriden in graceObjectScope
        true
    }
    method objectScope {
        // the enclosing object scope, since this scope is not an object scope
        var s := self.outerScope
        while { s.isObjectScope.not } do {
             s := s.outerScope
        }
        s
    }
    method reusedNames { dictionary.empty }
    method reuses (name) {
        // Is name defined by a scope that this scope reuses?
        false
    }
    method lookup (name) ifAbsent (aBlock) ifPresent (pBlock) {
        // applies pBlock to the variable corresponding to name, if it is defined
        // in this scope, or in one of the lexically surrounding scopes.  If it
        // is not defined, return the value of executing aBlock.
        
        lookupLocallyOrReused (name) ifAbsent {
            outerScope.lookup (name) ifAbsent (aBlock) ifPresent (pBlock)
        } ifPresent (pBlock)
    }
    method error (innerDefn) shadows (outerDefn) is confidential {
        NamingError.raise ("You can't use `{innerDefn.declaredName}` as the name " ++
              "of a {innerDefn.kind}, because `{innerDefn.declaredName}` " ++
              "is declared as a {outerDefn.kind} on {outerDefn.lineRangeString} " ++
              "in a surrounding scope; use a different name")
              with (innerDefn.definingParseNode)
    }
    method lookupLexically (name) {
        // Return the variable corresponding to name, which may or may not be
        // defined in this scope, or in one of the lexically surrounding scopes.
        // If name is not defined, return the value of executing aBlock.
        // Note that this method ignores reused names; it is intended for
        // implementing Grace's shadowing check
        lookupLexically (name) ifAbsent {
            NamingError.raise "{name} was not found in any lexical scope"
        }
    }
    method redeclarationError (aMessage) variable (aVariable) {
        NamingError.raise (aMessage) with (aVariable.definingParseNode)
    }
    method add (aVariable:Variable) withName (aName) {
        def priorDeclaration = names.at (aName) ifAbsent {
            names.at (aName) put (aVariable)
            return aVariable
        }
        NamingError.raise ("sorry, you can't declare `{aName}` as a " ++
              "{aVariable.kind}, because it's already declared as a "++
              "{priorDeclaration.kind} on {priorDeclaration.rangeLongString}, " ++
              "which is in the same scope; use a different name")
              with (aVariable.definingParseNode)
    }
    method structuralError (aMessage) variable (aVariable) {
        NamingError.raise (aMessage) with (aVariable.definingParseNode)
    }
    method allNamesAndValuesDo (aBlock) {
        allNamesAndValuesDo (aBlock) filteringOut (Set.new)
    }
    method defines (name) {
        // Is name defined in this scope, or in one of the lexically surrounding scopes?
        definesLocallyOrReuses (name) || { outerScope.defines (name) }
    }
    method allNamesAndValuesDo (aBlock) filteringOut (closerDefinitions) {
        names.keysAndValuesDo { name, defn →
            if (closerDefinitions.contains (name).not) then {
                aBlock.apply (name, defn)
                closerDefinitions.add (name)
            }
        }
        reusedNames.keysAndValuesDo { name, defn →
            if (closerDefinitions.contains (name).not) then {
                aBlock.apply (name, defn)
                closerDefinitions.add (name)
            }
        }
        outerScope.allNamesAndValuesDo (aBlock) filteringOut (closerDefinitions)
    }
    method redefine (aVariable) withName (aName) {
        // overwites an existing defintion
        names.at (aName) put (aVariable)
        aVariable
    }
    method isTrait { false }
    method isFresh { false }
    method isTheEmptyScope { false }
    method isTheUniversalScope { false }
    method isDialectScope { false }
    method isModuleScope { false }
    method isBuiltInScope { false }
    method reportShadowingErrors {
        names.keysAndValuesDo { name, defn →
            outerScope.lookup (name) ifAbsent {
            } ifPresent { outerDefn →
                error (defn) shadows (outerDefn)
            }
        }
    }
    method localAndReusedNamesAndValuesDo (aBlock) {
        localAndReusedNamesAndValuesDo (aBlock) filteringOut (set.empty)
    }
    method lookupReused (name) ifAbsent (aBlock) {
        // this is the default behaviour for scopes that don't allow reuse.
        // This method is overriden for object scopes
        aBlock.apply
    }
    method lookupReused (name) ifAbsent (aBlock) ifPresent (pBlock) {
        // this is the default behaviour for scopes that don't allow reuse.
        // This method is overriden for object scopes
        aBlock.apply
    }
    method lookupLexically (name) ifAbsent (aBlock) {
        // Return the variable corresponding to name, which may or may not be
        // defined in this scope, or in one of the lexically surrounding scopes.
        // If name is not defined, return the value of executing aBlock.
        // Note that this method ignores reused names; it is intended for
        // implementing Grace's shadowing check
        lookupLocally (name) ifAbsent {
            outerScope.lookupLexically (name) ifAbsent {
                aBlock.apply
            }
        }
    }
    method definesLocallyOrReuses (name) {
        // Is name defined in this scope, or a scope that it reuses
        // (ignoring surrounding scopes)
        names.containsKey (name) || { reuses (name) }
    }
    method dialectError (aString) {
        errormessages.CompilationError.raise (aString) with (emptyRange)
    }
    method localNamesAndValuesDo (aBlock) {
        names.keysAndValuesDo (aBlock)
    }
    method removeReused (aName) ifAbsent (aBlock) {
        ProgrammingError.raise "a {variety} scope has no reused names"
    }
    method lookupLocallyOrOutwards (name) ifAbsent (aBlock) {
        // Return the variable corresponding to name, which may or may not be
        // defined in this scope, or in one of the lexically-enclosing scopes.
        // We do NOT look in the reused names of this scope.
        // If name is not defined, return the value of executing aBlock.
        lookupLocally (name) ifAbsent {
            outerScope.lookup (name) ifAbsent {
                aBlock.apply
            }
        }
    }
    method add (aVariable:Variable) {
        add (aVariable) withName (aVariable.declaredName)
    }
    method localNames {
        names
    }
    method lookupLocally (name) ifAbsent (aBlock) {
        // Return the variable corresponding to name, which may or may not be
        // defined in this scope.  If name is not defined, return the value of
        // executing aBlock.
        names.at (name) ifAbsent {
            aBlock.apply
        }
    }
    method reusedNamesAndValuesDo (aBlock) {
        self
    }
    method definesLocally (name) {
        // Is name defined in this scope (ignoring surrounding scopes)
        names.at (name) ifAbsent {
            return false
        }.isConcrete
    }
    method doesNotDefineLocally (name) {
        definesLocally (name).not
    }
    method lookupLocallyOrReused (name) ifAbsent (aBlock) ifPresent (pBlock) {
        // applies pBlock to the variable corresponding to name, if it is defined in this scope,
        // or in one of the scopes that it reuses.
        // If name is not defined, return the value of executing aBlock.
        lookupLocally (name) ifAbsent {
            lookupReused (name) ifAbsent {
                aBlock.apply
            } ifPresent (pBlock)
        } ifPresent (pBlock)
    }
    method isObjectScope {
        false
    }
    method variety is abstract
    method clear { names.clear }
    method at (name) putScope (attrScope) {
        // changes the variable associated with name so that its attributeScope is attrScope
        lookupLocally (name) ifAbsent {
            ProgrammingError.raise "attempt to putScope for {name}, which is not present in {self}"
        } ifPresent { variable →
            variable.attributeScope := attrScope
        }
    }

    method withSurroundingScopesDo (b) {
        // do b in this scope and all surounding scopes.
        var cur := self
        while {
            b.apply(cur)
            cur := cur.outerScope
            cur.isTheEmptyScope.not
        } do { }
    }
}

class resolvedVariable(aVariable) {
    // My instances represent the defining occurence of a name, as seen from
    // the perspective of an applied occurrence of that name.
    // - definition: a subinstance of abstractVariable, representing the defining occurence.
    // - objectsUp: the number of levels of object nesting above me where the
    //              defining occurence was found.  0 means that the definiing occurence
    //              is in the current object, 1 in the outer object, etc.
    // - isReused: true if the definition is obtained from a use of a trait, or from
    //             an inherited object.

    def definition is public = aVariable
    var objectsUp is public
    var isReused is public  // true if this variable is accessible by virtue of
                            // a reuse (inherit or use) statement

    method resolutionString {
        // Answers a string, suitable for printing, that describes the location of this variable.
        var s :=  if (isReused) then {
            "reused {definition.kind} in the "
        } else {
            "lexically-enclosing {definition.kind} in the "
        }
        if (objectsUp == 0) then {
            s := s ++ "current"
        } else {
            (1 .. objectsUp).do { _ →
                s := s ++ "outer"
            } separatedBy {
                s := s ++ "."
            }
        }
        s ++ " object"
    }
    method reuseString {
        // Answers a string, suitable for printing, that describes my reuse.
        if (isReused) then {
             "reused"
        } else {
             "lexically-enclosing"
        }
    }
    method definingScope {
        // the scope in which this 'variable' is defined
        definition.definingParseNode.scope
    }
    method asString {
        "{reuseString} {definition.kind} declared on {definition.rangeLongString}"
    }
    method moduleName {
        // the name of the module in which this name was defined
        definition.moduleName
    }
}
class variableResolver {
    // this class has no state; it encapsulates the process of finding the definitions
    // of a name in a scope.  The only public method is definitionsOf(_)visibleIn(_)

    method definitionsOf (aName) visibleIn (aScope) {
        // answers a list of resolvedVariables describing the definitions of aName that
        // are visible from aScope. The collection is empty if there is no definition.
        // If aName is defined locally in aScope, then we allways answer a
        // singleton collection, ignoring inherited definitions and those in
        // outer scopes; this gives local definitions priority over inherited and
        // enclosing definitions. If aName is defined by inheritance _and_
        // directly in an outer scope, then the collection will have 2 elements.
        // In no case will it have more than 2 elements.

        definitionsOf (aName) visibleIn (aScope) atObject 0
    }

    method definitionsOf (aName) visibleIn (aScope) atObject (n) → Collection is confidential {
        // local version of definitionsOf(_)visibleIn(_) with additional recursion parameter

        lexicalOrLocalDefinitionOf (aName) in (aScope) atObject (n) ifPresent { defn →
            list.with(defn)
        } ifAbsent {
            def objectScope = aScope.objectScope  //  may be aScope itself
            def result = reusedDefinitionOf (aName) in (objectScope) atObject (n) addTo (list.empty)
            if (result.isEmpty) then {
                def outerScope = objectScope.outerScope
                if (outerScope.isTheEmptyScope) then { return result }
                definitionsOf (aName) visibleIn (outerScope) atObject (n+1) // simple recursion
            } else {
                // we have found a reused definition, so we look for a conflicting
                // _direct_ definition.
                outerDefinitionOf (aName) in (objectScope) atObject (n) addTo (result)
            }
        }
    }

    method outerDefinitionOf (aName) in (aScope) atObject (o) addTo (aCollection) is confidential {
        // Looks for the first direct definition of aName in the scopes
        // _surrounding_ aScope, and adds it to aCollection, along with its
        // depth from our start point.  Ignores reused definitions. Although the
        // language spec says that we stop searching in the dialect scope, we need
        // to also look in the builtIn scope, which surrounds the dialect

        var currentScope := aScope
        var objectLevel := o
        while {
            if (currentScope.isObjectScope) then {
                objectLevel := objectLevel + 1
            }
            currentScope := currentScope.outerScope
            currentScope.isDialectScope.not
        } do {
            currentScope.lookupLocally (aName) ifAbsent {
            } ifPresent { defn →
                return aCollection.add (definition (defn) atObject (objectLevel))
            }
        }
        if { currentScope.isDialectScope.not } then { ProgrammingError.raise "currentScope not dialect scope" }
        currentScope.lookupLocally (aName) ifAbsent {
        } ifPresent { dialectDef →
            if (dialectDef.isPublic) then {
                // confidential defs in the dialect are hidden
                return aCollection.add (definition (dialectDef) atObject (objectLevel))
            }
        }
        // no public dialect definition
        currentScope := currentScope.outerScope // the builtIn scope
        currentScope.lookupLocally (aName) ifAbsent {
            aCollection
        } ifPresent { builtInDef →
            aCollection.add (definition (builtInDef) atObject (objectLevel+1))
        }
    }
    method reusedDefinitionOf (aName) in (aScope) atObject (o) addTo (aCollection) is confidential {
        if (aScope.areReusedNamesCompleted.not) then {
            return aCollection
        }
        def defn = aScope.lookupReused (aName) ifAbsent {
            return aCollection
        }
        aCollection.add (reusedDefinition (defn) atObject (o))
    }
    method lexicalOrLocalDefinitionOf (aName) in (aScope) atObject(o)
        ifPresent (pBlock) ifAbsent (aBlock)  is confidential {
        // Look for a definition of aName in the nest of method and block scopes including and
        // surrounding aScope, but not outside the current object.  Don't look at reused names.
        // If aName is not found, applies aBlock; if it is found, applies pBlock to a ResolvedVariable
        // containing the definition.
        var currentScope := aScope
        while { true } do {
            currentScope.lookupLocally (aName) ifAbsent {
            } ifPresent { defn →
                return pBlock.apply (definition (defn) atObject(o))
            }
            if (currentScope.isObjectScope) then {
                return aBlock.apply
            }
            currentScope := currentScope.outerScope
        }
    }
    method reusedDefinition (aVariable) atObject (o) is confidential {
        def result = resolvedVariable (aVariable)
        result.isReused := true
        result.objectsUp := o
        result
    }
    method definition (aVariable) atObject (o) is confidential {
        def result = resolvedVariable (aVariable)
        result.isReused := false
        result.objectsUp := o
        result
    }
}

// We now define "variables": the objects that populate the symbol table.
// Every name declared in a Grace program is bound to one of these "variables",
// so methods, types, parameters, and imported modules are all "variables" in
// this sense.

// Type variables also double as type objects for type checking; this is
// probably wrong, and has been commented out.

var moduleRegistry

class variableDefFrom (node) {
    inherit abstractVariableFrom (node)
    // I describe the variable defined in a def declaration.

    method canBeOriginOfSuperExpression {
        definingParseNode.scope.isModuleScope
    }
    once method isPublic {
        isAnnotatedPublic || { isAnnotatedReadable }
    }
    method == (anotherType) {
        (self == anotherType )
    }
    method asString {
        "def "++ name
    }
    method needsUndefinedCheck { true }
    method kind { "def" }
    def tagString = "def"
}

class variableImportFrom (node) {
    inherit abstractVariableFrom (node)
    // I describe the "nickname" variable defined in an import declaration.

    method canBeOriginOfSuperExpression {
        true
    }
    once method isPublic {
        isAnnotatedPublic || { isAnnotatedReadable }
    }
    method isAvailableForReuse {
        false
    }
    method canBeOverridden {
        false
    }
    method asString {
        "import " ++ name
    }
    method isImport {
        true
    }
    method kind { "import" }
    def tagString = "impt"
}

class variableMethodFrom (node) {
    // I describe a method defined in the method declaration `node`.
    inherit abstractVariableFrom (node)

    method isPublicByDefault {
        true
    }
    method substitute (bindings) {
        self.shouldBeImplemented
    }
    method isMethodOrParameterizedType {
        true
    }
    method asString {
        "meth " ++ name
    }
    method isExplicitMethod {
        true
    }
    once method isOnceMethod {
        definingParseNode.isOnceMethod
    }
    method parametersDo(b) {
        definingParseNode.parametersDo(b)
    }
//    method join (anotherMethod) {
//        def result = graceImplicitSignatureFrom(nullNode)
//        return result
//    }
    method isMethod { true }
    method kind { "method" }
    def tagString = "mth"
}
class variableGraceObjectMethodFrom (node) {
    inherit variableMethodFrom (node)
    method fromGraceObject { true }
    method forUsers { false }
    def tagString = "go"
}

class variableParameterFrom (node) {
    // I describe the parameter to  a method or block.
    // node is the identifier, since parameters don't have real declaration nodes

    inherit abstractVariableFrom (node)

    method isAvailableForReuse { false }
    method asString { "param " ++ name }
    method isParameter { true }
    method kind { "parameter" }
    attributeScope := graceUniversalScope
    def tagString = "par"
}
class variablePseudoFrom (node) {
    inherit abstractVariableFrom (node)
    // I represent the pseudoVariable self, or the pseudovariable outer, or
    // outer.outer, or outer.outer.outer ...
    //
    // isModule:  true if the object that I refer to is a module object
    // isDialect: true if the object that I refer to is a dialect object

    def isModule is public = node.isModule
    def isDialect is public = node.isDialect

    method isAvailableForReuse { false }
    method isImplicit { true }
    method forUsers { false }
    method forGct { false }
    method canBeOverridden {
        // the object associated with self or outer... is not subject to overriding
        return false
    }
    method asString { "psdVar for " ++ name }
    method kind { "pseudo-variable" }
    def tagString = "pseudo"
}
class variableTypeFrom (node) {
    inherit abstractVariableFrom (node)
    // I describe the type name defined in a type declaration.
    // instance variables:
    // typeValue --- once type objects have been created, a type object representing me.
    // It will be a subinstance of graceAbstractType

    method declaredType is override { typeType }
    method typeName { name }
//    method methodNamed (aName) {
//        methodNamed (aName) ifAbsent {
//            errormessages.error "the type {name} does not have a method {aName}"
//        }
//    }
    method isPublicByDefault { true }
    method isType { true }
//    method substitute (bindings) {
//        return self
//    }
    method isMethodOrParameterizedType {
        return (numberOfParameters > 0)
    }
//    method methodNamesAndSignaturesDo (a2ArgBlock) {
//        attributeScope.localNamesAndValuesDo { n, v →
//            def sig = graceSignatureOfMethod (v)
//            a2ArgBlock.value (n) value (sig)
//        }
//   }
    method isSelfTypeType { false }
    method asString {
        var result := "type " ++ name
        if (hasParameters) then {
            result := result ++ "⟦"
            parameters.do { each →
                result := result ++ each.name
            } separatedBy {
                result := result ++  ", "
            }
            result := result ++ "⟧"
        }
        result
    }
//    method methodNames {
//        typeValue.methodNames
//    }
//    once method typeValue {
//        // typeValue unwinds this type definition exactly once.  Any references into this variable in
//        // the resulting type are NOT replaced by the type that they name, since this would lead to infinite
//        // regress.
//        graceBuildType.from (definingParseNode.value) typeName (name)
//    }
    method numberOfParameters { definingParseNode.numTypeParams }
    method parameters { definingParseNode.typeParameters.parameters }
//    method conformsTo (aGraceType) underAssumptions (assumptions) {
//        return typeValue.conformsTo (aGraceType) underAssumptions (assumptions)
//    }
//    method isUnknown {
//        return typeValue.isUnknown
//    }
//    method conformsTo (aGraceType) {
//        return typeValue.conformsTo (aGraceType)
//    }
    method isPublic { true }
//    method conformsTo (anotherType) inType (selfType) underAssumptions (assumptions) {
//        return typeValue.conformsTo (anotherType) inType (selfType) underAssumptions (assumptions)
//    }
//    method variants {
//        // this method was not complete in the Smalltalk code
//        def val = definingParseNode.value
//        if (val.isInterface) then {
//            [ self ]
//        } else {
//            buildTypeFrom(val).variants
//        }
//    }
//    method instantiateWithArgs (aCollectionOfTypes) {
//        def instance = graceTypeInstance.newFrom (self) withArguments (aCollectionOfTypes)
//        return instance
//    }
//    method methodNamed (aString) ifAbsent (aBlockClosure) {
//        return typeValue.methodNamed (aString) ifAbsent (aBlockClosure)
//    }
    method checkNumberOfTypeArguments (aType) {
        if ((aType.numberOfArguments == numberOfParameters).not) then {
            errormessages.syntaxError.
                  raise "type {typeName} needs {numberOfParameters} arguments, but given {aType.numberOfArguments}"
                  with (aType)
        }
    }
//    method isVariant {
//        return typeValue.isVariant
//    }
//    method typeValue (aTypeObject) {
//        // sets the typeValue field to aTypeObject, and returns aTypeObject.
//        // Makes the aTypeObject aware that it now has a name
//        aTypeObject.typeName (typeName)
//        typeValue := aTypeObject
//        aTypeObject
//    }
    method hasParameters {
        return (numberOfParameters > 0)
    }
    method kind { "type" }
    def tagString = "type"
}
class variableTypeParameterFrom (node) {
    inherit abstractVariableFrom (node)
    use identityEquality
    // I describe a type parameter to a type or method.

//    method conformsTo (anotherType) inType (selfType) underAssumptions (assumptions) {
//        return anotherType.isTypeParameter
//    }

    method isParameter { true }
    method isAvailableForReuse { false }
    method isType { true }
    method variants {
        return [ self ]
    }
//    method substitute (bindings) {
//        // bindings maps type parameters to argument values
//        def argValue = bindings.at (self) ifAbsent {
//            return self
//        }
//        halt
//        return argValue
//    }
    method isTypeParameter { true }
    method asString {
        "typeParam " ++ name
    }
    method kind { "type parameter" }
    def tagString = "tpar"

}
class variableVarFrom (node) {
    inherit abstractVariableFrom (node)
    // I describe the variable defined in a var declaration.

    attributeScope := graceUniversalScope
    method isAssignable { true }
    method asString {
        "var " ++ name
    }
    method needsUndefinedCheck { true }
    method isWritable { isPublic || { isAnnotatedWritable } }
    method isConfidential { isReadable.not && { isWritable.not } }
    method kind { "var" }
    def tagString = "var"

}
class variableImplicitMethodFrom (node) {
    inherit variableMethodFrom (node)
    // I represent a writer method implicitly declared by a var declaration

    method isPublic { false }
    method asString { "implicitMeth " ++ name }
    method isImplicit { true }
    method kind { "method" }
}
class variableRequiredMethodFrom (node) {
    inherit variableMethodFrom (node)
    // A required method is one that has no body, but serves as a marker that the
    // programmer should provide a real method.   Required methods never override
    // real methods, even if the required method comes from a trait and the real
    // method comes from a superobject.

    method isPublic { false }
    method isConcrete { false }
    method kind { "required method" }
    def tagString = "req"
}
class variableSpecialControlStructureFrom (node) withName (aMethodName) {
    inherit variableMethodFrom (node)
    // I represent a method implicitly declared for one of the special control structures.
    // These are (using regular expression notation and omitting argument lists):
    // - if then ( elseif then )* else?
    // - match case+
    // - try catch * finally?

    name := aMethodName
    method isSpecialControlStructure { true }
    method asString { "ctrl " ++ name }
    method kind { "method" }
    method isTryCatch { name.startsWith "try" }
    method isIfThenElse { name.startsWith "if" }
    method isMatchCase { name.startsWith "match" }
    method forGct { false }
    def tagString = "ctrl"
}
//class implicitSignatureFrom (node) {
//    inherit variableMethodFrom (node)
//    // I represent a signature created implicitly while calculating the meet and join of other signatures.
//
//    method initializeAsJoinOf (methA) and (methB) {
//        name := methA.declaredName
//        argumentTypes := methA.arguments.with (methB.arguments) collect { a, b →
//            a.declaredType.meet (b.declaredType)
//        }
//        resultType := methA.result.declaredType.join (methB.result.declaredType)
//    }
//}
//class graceTypeInstanceFrom (aGraceType) withArguments (typeArgs) {
//    inherit variableTypeFrom (aGraceType.definingParseNode)
//    // I represent a graceType that has been instantiated with type arguments.
//    // Instance variables:
//    // arguments – a list of type arguments, with size self.numberOfParameters.
//
//
//    attributeScope := aGraceType.attributeScope
//    isAnnotation := aGraceType.isAnnotation
//    isMarker := aGraceType.isMarker
//    isPublic := aGraceType.isPublic
//    name := aGraceType.name
//    arguments := typeArgs
//
//    method substituteForParametersIn (aSignature) {
//        def bindings = Dictionary.new
//        parameters.with (arguments) do { param, val →
//            bindings.at (param.variable) put (val)
//        }
//        return aSignature.substitute (bindings)
//    }
//    method arguments {
//        return arguments
//    }
//
//    method substitute (bindings) {
//        arguments.doWithIndex { each, i →
//            bindings.at (each) ifAbsent {
//            } ifPresent { val →
//                arguments.at (i) put (val)
//            }
//        }
//    }
//    method parameters {
//        return definingParseNode.typeParameters.parameters
//    }
//}

class abstractVariable {

    // The superclass of classes that describe the various kinds of variable
    // in a Grace program.
    // The common interface lets clients make the following requests
    //   isAssignable  — true for vars only
    //   isType — true for types only
    //   isMethod — true for methods, both implicit & explicit
    //   isExplicitMethod — true for explicit methods only
    //   isImplicit — self, outer^n, and implicit methods
    //   kind — a string ("var", "def", "method", "parameter" etc.)
    //   definingNode — the parse tree node that defines this variable
    //   range — the source-code range of my declaration
    //   startPosition — the start of the range
    //   stopPosition  — the end of the range
    //   attributeScope — characterizes the attributes of the object bound
    //      to this variable.  For example, if I am a def bound to an object j,
    //      then attributeScope describes the attibutes of j.
    //      paramaters and vars have the emptyScope as attributeScope,
    //      because we don't know to what object they will be bound.

    var name is public
    var declaredType is public
    var definingScope is public
    var attributeScope is public := graceEmptyScope  // TODO: graceUniversalScope?
    var isMarker is readable
    method annotationNames is required
    method isAnnotation { annotationNames.contains "annotation" }
    var definingParseNode is readable
    var isModule is readable := false
    var isDialect is readable := false

    method tagString is abstract, confidential

    method tag { "({tagString})" }
    method stopPosition { definingParseNode.stopPosition }
    method canBeOriginOfSuperExpression { false }
    method isPublicByDefault { false }
    method isAvailableForReuse { true }
    method isAnnotatedReadable {
        isAnnotatedWith "readable"
    }
    method isType { false }
    method isConcrete { true }
    method isMethodOrParameterizedType { false }
    method kind is abstract
    method isAnnotatedConfidential {
        return isAnnotatedWith "confidential"
    }
    method isWritable { false }
    method isExplicitMethod { false }
    method isImport { false }
    method isOnceMethod { false }
    method rangeLongString { range.rangeLongString }
    method declaredName { name }
    method isAnnotatedWith (anAnnotationName) {
        annotationNames.contains (anAnnotationName)
    }
    method needsUndefinedCheck { false }
    method isRequired { isAnnotatedWith "required" }
    method isAbstract { isAnnotatedWith "abstract" }
    method isSpecialControlStructure { false }
    method isAssignable { false }
    method isParameter { false }
    method isImplicit { false }
    method forUsers { true }
    method fromParent { false }
    method forGct { true }
    method fromGraceObject { false }
    var isFresh is public := false
    method range { definingParseNode.range }
    method isAnnotatedWritable { isAnnotatedWith "writable" }
    once method isPublic {
        isAnnotatedPublic || { isAnnotatedConfidential.not && isPublicByDefault }
    }
    method startPosition { definingParseNode.startPosition }
    method lineRangeString { range.lineRangeString }
    method isReadable { isPublic || { isAnnotatedReadable } }
    method rangeString { range.rangeString }
    method isTypeParameter { false }
    method isConfidential { isPublic.not }
    method isAnnotatedPublic { isAnnotatedWith "public" }
    method isMethod { false }
    method isTryCatch { false }
    method isIfThenElse { false }
    method isMatchCase { false }
    method annotations { definingParseNode.annotations }
    method hasAnnotation(annName) { definingParseNode.hasAnnotation(annName) }
    method moduleName { definingParseNode.moduleName }
    method attributeScope(s) {
        // a writer method that retrns self, for chaining
        attributeScope := s
        self
    }
}

class abstractVariableFrom (aDeclarationNode) {
    inherit abstractVariable

    name := aDeclarationNode.nameString
    declaredType := aDeclarationNode.decType
    isMarker := aDeclarationNode.isMarkerDeclaration
    var annotationNames is public :=
          aDeclarationNode.annotations.map { idNode -> idNode.nameString }
    definingParseNode := aDeclarationNode
    definingScope := if (aDeclarationNode.isDeclaredByParent) then {
        aDeclarationNode.scope.outerScope
    } else {
        aDeclarationNode.scope
    }
}

method variable(tag) from(node) {
    match (tag)
      case {"(def)" -> variableDefFrom (node)
    } case {"(impt)" -> variableImportFrom (node)
    } case {"(mth)" -> variableMethodFrom (node)
    } case {"(go)" -> variableGraceObjectMethodFrom (node)
    } case {"(par)" -> variableParameterFrom (node)
    } case {"(pseudo)" -> variablePseudoFrom (node)
    } case {"(type)" -> variableTypeFrom (node)
    } case {"(tpar)" -> variableTypeParameterFrom (node)
    } case {"(var)" -> variableVarFrom (node)
    } case {"(req)" -> variableRequiredMethodFrom (node)
    } case {"(ctrl)" -> variableSpecialControlStructureFrom (node) withName (node.nameString)
    }
}

// nameDictionaries are a dictionaries with special logic for finding the names of
// Grace's "special" control structures, such as if .. then .. elseif .. .
// These names are found in any dictionary that contains the magicKey.

def ctrlStructureRegEx is public = regEx.fromString (
    ‹^((if\(1\)then\(1\)(elseif\(1\)then\(1\))*(else\(1\))?)$|› ++
    ‹(match\(1\)(case\(1\))+(else\(1\))?)|› ++
    ‹(try\(1\)(catch\(1\))*(finally\(1\))?))$› )

def magicKey is public = "standardGraceExtendedControlStructures"

class nameDictionary (initialBindings: Collection⟦Binding⟧) → Dictionary⟦String,Variable⟧ {
    inherit fastDict.dictionary⟦String,Variable⟧.empty
        alias superAt(_)ifAbsent(_) = at(_)ifAbsent(_)
    // This is a dictionary with special logic for looking-up the names of Grace's control structures.

    initialBindings.do { b:Binding → self.add(b) }  // TODO: can we remove "self" now?

    method isNameOfSpecialControlStructure (aName) {
        ctrlStructureRegEx.matches (aName)
    }
    method specialVariableFor (markerDef) withName (key) {
        variableSpecialControlStructureFrom (markerDef.definingParseNode) withName (key)
    }
    method at (key) ifAbsent (aBlock) {
        // Answer the value associated with key; if key isn't found, answer
        // the result of evaluating aBlock.  Make sure that the names of the special control
        // structures are found if the key "standardGraceExtendedControlStructures" is present.
        superAt (key) ifAbsent {
            if (self.containsKey (magicKey) && {
                isNameOfSpecialControlStructure (key)
            }) then {
                def markerDef = self.at (magicKey)
                def specialVar = specialVariableFor (markerDef) withName (key)
                self.at (key) put (specialVar)
                specialVar
            } else {
                aBlock.apply
            }
        }
    }
    method at (key) {
        at(key) ifAbsent {
            NoSuchObject.raise "dictionary does not contain entry with key {key}"
        }
    }
    method includesKey (k) {
        var result := true
        at(k) ifAbsent { result := false }
        result
    }
}

def nameDictionary = object {
    method empty { nameDictionary [] }
    method withAll (initialBindings) { nameDictionary (initialBindings) }
    method << (source:Collection⟦Binding⟧) { nameDictionary (source) }
}

