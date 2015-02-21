// This stub exists to generate the .gct file for mirrors.
// The real implementation of mirrors is in gracelib.js

type Mirror = Object & type {
    methods -> List<MethodMirror>
    methodNames ->Set<String>
    getMethod(nm:String) -> MethodMirror
}

type MethodMirror = Object & type {
    name -> String
    partcount -> Number
    paramcounts -> List<Number>
    isVariableArity -> List<Boolean>
    request(args:List<ArgList>) -> Unknown
}
type ArgList = List<Unknown>

method loadDynamicModule(name:String) -> Done { }
factory method reflect(obj:Unknown) -> Mirror {
    method methods -> List<MethodMirror>  { }
    method methodNames -> List<String> { }
    factory method getMethod(nm:String) -> MethodMirror { 
        method name -> String { }
        method partcount -> Number { }
        method paramcounts -> List<Number>  { }
        method isVariableArity -> List<Boolean> { }
        method request(args:List<ArgList>) -> Unknown { }
    }
}

