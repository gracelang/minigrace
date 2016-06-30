// This stub exists to generate the .gct file for mirrors.
// The real implementation of mirrors is in gracelib.js

type Mirror = Object & type {
    methods -> List⟦MethodMirror⟧
    methodNames ->Set⟦String⟧
    getMethod(nm:String) -> MethodMirror
}

type MethodMirror = Object & type {
    name -> String
    partcount -> Number
    paramcounts -> List⟦Number⟧
    isVariableArity -> List⟦Boolean⟧
    request(args:List⟦ArgList⟧) -> Unknown
    requestWithArgs(args:List⟦Object⟧) -> Unknown
}
type ArgList = List⟦Object⟧

method loadDynamicModule(name:String) -> Done { }
class reflect(obj:Unknown) -> Mirror {
    method methods -> List⟦MethodMirror⟧  { }
    method methodNames -> List⟦String⟧ { }
    class getMethod(nm:String) -> MethodMirror { 
        method name -> String { }
        method partcount -> Number { }
        method paramcounts -> List⟦Number⟧  { }
        method isVariableArity -> List⟦Boolean⟧ { }
        method request(args:List⟦ArgList⟧) -> Unknown { }
        method requestWithArgs(args:List⟦Object⟧) -> Unknown { }
    }
}

