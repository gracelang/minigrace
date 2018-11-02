// This stub exists to generate the .gct file for mirrors.
// The real implementation of mirrors is in gracelib.js

type Mirror = Object & interface {
    methods -> List⟦MethodMirror⟧
    methodNames ->Set⟦String⟧
    onMethod(nm:String) -> MethodMirror
}

type MethodMirror = Object & interface {
     name -> String
     numberOfParams -> Number
     partCount -> Number
     paramCounts -> List⟦Number⟧
     paramNames -> List⟦String⟧
     requestWithArgs(args:List⟦Object⟧) -> Unknown
     isConfidential -> Boolean
     isPublic -> Boolean
}
type ArgList = List⟦Object⟧

method loadDynamicModule(name:String) -> Done { }
class reflect(obj:Unknown) -> Mirror {
    method methods -> List⟦MethodMirror⟧  { }
    method methodNames -> List⟦String⟧ { }
    class onMethod(nm:String) -> MethodMirror {
        method name -> String { }
        method partCount -> Number { }
        method paramCounts -> List⟦Number⟧  { }
        method paramNames -> List⟦String⟧  { }
        method numberOfParams -> Number { }
        method requestWithArgs(args:List⟦Object⟧) -> Unknown { }
        method isConfidential -> Boolean { }
        method isPublic -> Boolean { }
    }
    method getMethod(nm) { onMethod(nm) }
}

