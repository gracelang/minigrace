// defines a dictionary with special logic for finding the names of Grace's
// "special" control structures, such as if .. then .. elseif .. then .. else
// These names are found in any dictionary that contains the magicKey.

import "fastDict" as fastDict
import "regularExpression" as regEx
import "variable" as variable

type Variable = variable.Variable

def ctrlStructureRegEx is public = regEx.fromString ( 
    ‹^((if\(1\)then\(1\)(elseif\(1\)then\(1\))*(else\(1\))?)$|› ++
    ‹(match\(1\)(case\(1\))+(else\(1\))?)|› ++
    ‹(try\(1\)(catch\(1\))*(finally\(1\))?))$› )
    
def magicKey is public = "standardGraceExtendedControlStructures"
    
class empty {
    inherit fastDict.dictionary⟦String,Variable⟧.empty
        alias superAt(_)ifAbsent(_) = at(_)ifAbsent(_)
    // This is a dictionary with special logic for looking-up the names of Grace's control structures.

    method isNameOfSpecialControlStructure (aName) {
        ctrlStructureRegEx.matches (aName)
    }
    method specialVariableFor (markerDef) withName (key) {
        variable.graceSpecialControlStructureFrom (markerDef.definingParseNode) withName (key)
    }
    method at (key) ifAbsent (aBlock) {
        // Answer the value associated with key or, if key isn't found, answer
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
}

method withAll(initialBindings: Collection⟦Binding⟧) -> Dictionary⟦String,Variable⟧ {
    def result = empty
    initialBindings.do { b:Binding -> result.add(b) }
    result
}

method << (source:Collection⟦Binding⟧) { self.withAll(source) }
