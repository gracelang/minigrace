// defines a dictionary with special logic for finding the names of Grace's 
// "special" control structures, such as if .. then .. elseif .. then .. else
// These names are found in any dictionary that contains the magicKey.

import "fastDict" as fastDict
import "regularExpression" as regEx
import "variables" as variables

type Variable = variables.Variable 

def ctrlStructureRegEx is public = regEx.fromString ( 
    ‹^((if\(_\)then\(_\)(elseif\(_\)then\(_\))*(else\(_\))?)$|› ++
    ‹(match\(_\)(case\(_\))+(else\(_\))?)|› ++
    ‹(try\(_\)(catch\(_\))*(finally\(_\))?))$› )
    
def magicKey is public = "standardGraceExtendedControlStructures"
    
class empty {
    inherit fastDict.dictionary⟦String,Variable⟧.empty
        alias superAt(_)ifAbsent(_) = at(_)ifAbsent(_)
    // This is a dictionary with special logic for looking-up the names of Grace's control structures.

    method isNameOfSpecialControlStructure (aName) {
        ctrlStructureRegEx.matches (aName)
    }
    method specialVariableFor (markerDef) withName (key) {
        variables.graceSpecialControlStructureFrom (markerDef.definingParseNode) withName (key)
    }
    method at (key) ifAbsent (aBlock) {
        // Answer the value associated with key or, if key isn't found, answer
        // the result of evaluating aBlock.  Make sure that the names of the special control
        // structures are found if the key "standardGraceExtendedControlStructures" is present.
        if (key == "try(_)catch(_)finally(_)") then { native "js" code "debugger;" }
        superAt (key) ifAbsent {
            if (self.containsKey (magicKey) && {
                isNameOfSpecialControlStructure (key)
            }) then {
                def markerDef = self.at (magicKey)
                def variable = specialVariableFor (markerDef) withName (key)
                self.at (key) put (variable)
                variable
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
}

method withAll(initialBindings: Collection⟦Binding⟧) -> Dictionary⟦String,Variable⟧ {
    def result = empty
    initialBindings.do { b:Binding -> result.add(b) }
    result
}

method << (source:Collection⟦Binding⟧) { self.withAll(source) }