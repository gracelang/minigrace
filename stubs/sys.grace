type Environment = type {
    at(key:String) -> String
    [](key:String) -> String
    at(key:String) put(value:String) -> Boolean
    []:= (key:String) put(value:String) -> Boolean
    contains(key:String) -> Boolean
}

method argv -> Sequence<String> {}
method elapsed -> Number {}
method elapsedTime -> Number {}
method exit(code:Number) -> Done {}
method execPath -> String {}
factory method environ -> Environment {
    method at(key:String) -> String {}
    method [](key:String) -> String {}
    method at(key:String) put(value:String) -> Boolean {}
    method []:= (key:String) put(value:String) -> Boolean {}
    method contains(key:String) -> Boolean {}
}
