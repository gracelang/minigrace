"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_math() {
  setModuleName("math");
  this.definitionModule = "math";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_math_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_math_outer0;
  setLineNumber(16);    // compilenode method
  var func1 = function(argcv) {    // method sin(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_a = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for sin(1)"));
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_Number, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in sin (arg list 1), which corresponds to parameter a, does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("math");
    setLineNumber(19);    // compilenode call
       // start native code from line 19
    var result = GraceDone;
        return new GraceNum(Math.sin(var_a._value));
    var nat2 = result;
       // end native code insertion
    if (!Grace_isTrue(callmethod(var_Number, "match", [1], nat2)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("result of method sin(1) does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    return nat2;
  };
  func1.paramTypes = [];
  func1.paramTypes.push([type_Number, "a"]);
  func1.paramCounts = [1];
  this.methods["sin"] = func1;
  func1.definitionLine = 16;
  func1.definitionModule = "math";
  setLineNumber(22);    // compilenode method
  var func3 = function(argcv) {    // method cos(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_a = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for cos(1)"));
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_Number, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in cos (arg list 1), which corresponds to parameter a, does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("math");
    setLineNumber(25);    // compilenode call
       // start native code from line 25
    var result = GraceDone;
        return new GraceNum(Math.cos(var_a._value));
    var nat4 = result;
       // end native code insertion
    if (!Grace_isTrue(callmethod(var_Number, "match", [1], nat4)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("result of method cos(1) does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    return nat4;
  };
  func3.paramTypes = [];
  func3.paramTypes.push([type_Number, "a"]);
  func3.paramCounts = [1];
  this.methods["cos"] = func3;
  func3.definitionLine = 22;
  func3.definitionModule = "math";
  setLineNumber(28);    // compilenode method
  var func5 = function(argcv) {    // method tan(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_a = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for tan(1)"));
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_Number, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in tan (arg list 1), which corresponds to parameter a, does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("math");
    setLineNumber(31);    // compilenode call
       // start native code from line 31
    var result = GraceDone;
        return new GraceNum(Math.tan(var_a._value));
    var nat6 = result;
       // end native code insertion
    if (!Grace_isTrue(callmethod(var_Number, "match", [1], nat6)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("result of method tan(1) does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    return nat6;
  };
  func5.paramTypes = [];
  func5.paramTypes.push([type_Number, "a"]);
  func5.paramCounts = [1];
  this.methods["tan"] = func5;
  func5.definitionLine = 28;
  func5.definitionModule = "math";
  setLineNumber(34);    // compilenode method
  var func7 = function(argcv) {    // method asin(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_a = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asin(1)"));
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_Number, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in asin (arg list 1), which corresponds to parameter a, does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("math");
    setLineNumber(37);    // compilenode call
       // start native code from line 37
    var result = GraceDone;
        return new GraceNum(Math.asin(var_a._value));
    var nat8 = result;
       // end native code insertion
    if (!Grace_isTrue(callmethod(var_Number, "match", [1], nat8)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("result of method asin(1) does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    return nat8;
  };
  func7.paramTypes = [];
  func7.paramTypes.push([type_Number, "a"]);
  func7.paramCounts = [1];
  this.methods["asin"] = func7;
  func7.definitionLine = 34;
  func7.definitionModule = "math";
  setLineNumber(40);    // compilenode method
  var func9 = function(argcv) {    // method acos(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_a = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for acos(1)"));
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_Number, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in acos (arg list 1), which corresponds to parameter a, does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("math");
    setLineNumber(43);    // compilenode call
       // start native code from line 43
    var result = GraceDone;
        return new GraceNum(Math.acos(var_a._value));
    var nat10 = result;
       // end native code insertion
    if (!Grace_isTrue(callmethod(var_Number, "match", [1], nat10)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("result of method acos(1) does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    return nat10;
  };
  func9.paramTypes = [];
  func9.paramTypes.push([type_Number, "a"]);
  func9.paramCounts = [1];
  this.methods["acos"] = func9;
  func9.definitionLine = 40;
  func9.definitionModule = "math";
  setLineNumber(46);    // compilenode method
  var func11 = function(argcv) {    // method atan(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_a = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for atan(1)"));
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_Number, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in atan (arg list 1), which corresponds to parameter a, does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("math");
    setLineNumber(49);    // compilenode call
       // start native code from line 49
    var result = GraceDone;
        return new GraceNum(Math.atan(var_a._value));
    var nat12 = result;
       // end native code insertion
    if (!Grace_isTrue(callmethod(var_Number, "match", [1], nat12)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("result of method atan(1) does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    return nat12;
  };
  func11.paramTypes = [];
  func11.paramTypes.push([type_Number, "a"]);
  func11.paramCounts = [1];
  this.methods["atan"] = func11;
  func11.definitionLine = 46;
  func11.definitionModule = "math";
  setLineNumber(52);    // compilenode method
  var func13 = function(argcv) {    // method random
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for random"));
    setModuleName("math");
    setLineNumber(55);    // compilenode call
       // start native code from line 55
    var result = GraceDone;
        return new GraceNum(Math.random());
    var nat14 = result;
       // end native code insertion
    if (!Grace_isTrue(callmethod(var_Number, "match", [1], nat14)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("result of method random does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    return nat14;
  };
  func13.paramCounts = [0];
  this.methods["random"] = func13;
  func13.definitionLine = 52;
  func13.definitionModule = "math";
  setLineNumber(58);    // compilenode method
  var func15 = function(argcv) {    // method π
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for π"));
    setModuleName("math");
    setLineNumber(61);    // compilenode call
       // start native code from line 61
    var result = GraceDone;
        return new GraceNum(3.141592653589793);
    var nat16 = result;
       // end native code insertion
    if (!Grace_isTrue(callmethod(var_Number, "match", [1], nat16)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("result of method π does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    return nat16;
  };
  func15.paramCounts = [0];
  this.methods["\u03c0"] = func15;
  func15.definitionLine = 58;
  func15.definitionModule = "math";
  setLineNumber(64);    // compilenode method
  var func17 = function(argcv) {    // method pi
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for pi"));
    setModuleName("math");
    setLineNumber(67);    // compilenode call
       // start native code from line 67
    var result = GraceDone;
        return new GraceNum(3.141592653589793);
    var nat18 = result;
       // end native code insertion
    if (!Grace_isTrue(callmethod(var_Number, "match", [1], nat18)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("result of method pi does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    return nat18;
  };
  func17.paramCounts = [0];
  this.methods["pi"] = func17;
  func17.definitionLine = 64;
  func17.definitionModule = "math";
  setLineNumber(70);    // compilenode method
  var func19 = function(argcv) {    // method sqrt(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_a = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for sqrt(1)"));
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_Number, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in sqrt (arg list 1), which corresponds to parameter a, does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("math");
    setLineNumber(73);    // compilenode call
       // start native code from line 73
    var result = GraceDone;
        return new GraceNum(Math.sqrt(var_a._value));
    var nat20 = result;
       // end native code insertion
    if (!Grace_isTrue(callmethod(var_Number, "match", [1], nat20)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("result of method sqrt(1) does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    return nat20;
  };
  func19.paramTypes = [];
  func19.paramTypes.push([type_Number, "a"]);
  func19.paramCounts = [1];
  this.methods["sqrt"] = func19;
  func19.definitionLine = 70;
  func19.definitionModule = "math";
  setLineNumber(76);    // compilenode method
  var func21 = function(argcv) {    // method abs(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_a = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for abs(1)"));
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_Number, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in abs (arg list 1), which corresponds to parameter a, does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("math");
    setLineNumber(79);    // compilenode call
       // start native code from line 79
    var result = GraceDone;
        return new GraceNum(Math.abs(var_a._value));
    var nat22 = result;
       // end native code insertion
    if (!Grace_isTrue(callmethod(var_Number, "match", [1], nat22)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("result of method abs(1) does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    return nat22;
  };
  func21.paramTypes = [];
  func21.paramTypes.push([type_Number, "a"]);
  func21.paramCounts = [1];
  this.methods["abs"] = func21;
  func21.definitionLine = 76;
  func21.definitionModule = "math";
  setLineNumber(82);    // compilenode method
  var func23 = function(argcv) {    // method lg(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_a = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for lg(1)"));
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_Number, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in lg (arg list 1), which corresponds to parameter a, does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("math");
    setLineNumber(87);    // compilenode call
       // start native code from line 87
    var result = GraceDone;
        return new GraceNum(Math.log(var_a._value) / Math.LN2);
    var nat24 = result;
       // end native code insertion
    if (!Grace_isTrue(callmethod(var_Number, "match", [1], nat24)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("result of method lg(1) does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    return nat24;
  };
  func23.paramTypes = [];
  func23.paramTypes.push([type_Number, "a"]);
  func23.paramCounts = [1];
  this.methods["lg"] = func23;
  func23.definitionLine = 82;
  func23.definitionModule = "math";
  setLineNumber(90);    // compilenode method
  var func25 = function(argcv) {    // method ln(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_a = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ln(1)"));
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_Number, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in ln (arg list 1), which corresponds to parameter a, does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("math");
    setLineNumber(93);    // compilenode call
       // start native code from line 93
    var result = GraceDone;
        return new GraceNum(Math.log(var_a._value));
    var nat26 = result;
       // end native code insertion
    if (!Grace_isTrue(callmethod(var_Number, "match", [1], nat26)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("result of method ln(1) does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    return nat26;
  };
  func25.paramTypes = [];
  func25.paramTypes.push([type_Number, "a"]);
  func25.paramCounts = [1];
  this.methods["ln"] = func25;
  func25.definitionLine = 90;
  func25.definitionModule = "math";
  setLineNumber(96);    // compilenode method
  var func27 = function(argcv) {    // method exp(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_a = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for exp(1)"));
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_Number, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in exp (arg list 1), which corresponds to parameter a, does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("math");
    setLineNumber(99);    // compilenode call
       // start native code from line 99
    var result = GraceDone;
        return new GraceNum(Math.exp(var_a._value));
    var nat28 = result;
       // end native code insertion
    if (!Grace_isTrue(callmethod(var_Number, "match", [1], nat28)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("result of method exp(1) does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    return nat28;
  };
  func27.paramTypes = [];
  func27.paramTypes.push([type_Number, "a"]);
  func27.paramCounts = [1];
  this.methods["exp"] = func27;
  func27.definitionLine = 96;
  func27.definitionModule = "math";
  setLineNumber(102);    // compilenode method
  var func29 = function(argcv) {    // method log10(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_a = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for log10(1)"));
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_Number, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in log10 (arg list 1), which corresponds to parameter a, does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("math");
    setLineNumber(105);    // compilenode call
       // start native code from line 105
    var result = GraceDone;
        return new GraceNum(Math.log(var_a._value) / Math.LN10);
    var nat30 = result;
       // end native code insertion
    if (!Grace_isTrue(callmethod(var_Number, "match", [1], nat30)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("result of method log10(1) does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    return nat30;
  };
  func29.paramTypes = [];
  func29.paramTypes.push([type_Number, "a"]);
  func29.paramCounts = [1];
  this.methods["log10"] = func29;
  func29.definitionLine = 102;
  func29.definitionModule = "math";
  return this;
}
gracecode_math.imports = [];
if (typeof gctCache !== "undefined")
  gctCache['math'] = "classes:\nconfidential:\nfresh-methods:\nmodules:\npath:\n math\npublic:\n abs\n acos\n asin\n atan\n cos\n exp\n lg\n ln\n log10\n pi\n random\n sin\n sqrt\n tan\n \u03c0\ntypes:\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["math"] = [
    "// C calling conventions:",
    "// - the method's arguments are in args[0], args[1], ...",
    "// - the insatnce variables of an object o are in o->data, but exactly where depends",
    "//     on whether it is built-in or defined in Grace.",
    "// - ‹return› returns from the method",
    "// - the native code insertions can be treated as an expression answering a value;",
    "//     that value should be assigend to ‹result›",
    "",
    "// JS conventions:",
    "// - Access ‹param› by writing var_‹param›",
    "// - Access ‹field› by writing this.data.‹field›",
    "// - set result by assigning to ‹result›",
    "// - ‹return› returns from the method",
    "",
    "",
    "method sin(a:Number) -> Number {",
    "    // sine of a (assumed to be radians)",
    "    native \"c\" code ‹    return alloc_Float64(sin(*(double*) args[0]->data));›",
    "    native \"js\" code ‹    return new GraceNum(Math.sin(var_a._value));›",
    "}",
    "",
    "method cos(a:Number) -> Number {",
    "    // cosine of a (assumed to be radians)",
    "    native \"c\" code ‹    return alloc_Float64(cos(*(double*) args[0]->data));›",
    "    native \"js\" code ‹    return new GraceNum(Math.cos(var_a._value));›",
    "}",
    "",
    "method tan(a:Number) -> Number {",
    "    // tangent of a (assumed to be radians)",
    "    native \"c\" code ‹    return alloc_Float64(tan(*(double*) args[0]->data));›",
    "    native \"js\" code ‹    return new GraceNum(Math.tan(var_a._value));›",
    "}",
    "",
    "method asin(a:Number) -> Number {",
    "    // arcsin of a (in radians)",
    "    native \"c\" code ‹    return alloc_Float64(asin(*(double*) args[0]->data));›",
    "    native \"js\" code ‹    return new GraceNum(Math.asin(var_a._value));›",
    "}",
    "",
    "method acos(a:Number) -> Number {",
    "    // arccos of a (in radians)",
    "    native \"c\" code ‹    return alloc_Float64(acos(*(double*) args[0]->data));›",
    "    native \"js\" code ‹    return new GraceNum(Math.acos(var_a._value));›",
    "}",
    "",
    "method atan(a:Number) -> Number {",
    "    // arctan of a (in radians)",
    "    native \"c\" code ‹    return alloc_Float64(atan(*(double*) args[0]->data));›",
    "    native \"js\" code ‹    return new GraceNum(Math.atan(var_a._value));›",
    "}",
    "",
    "method random -> Number {",
    "    // a pseudo-random number",
    "    native \"c\" code ‹    return alloc_Float64((double)rand() / RAND_MAX);›",
    "    native \"js\" code ‹    return new GraceNum(Math.random());›",
    "}",
    "",
    "method π -> Number {",
    "    // an approximation of the constant π",
    "    native \"c\" code ‹    return alloc_Float64((double)3.141592653589793);›",
    "    native \"js\" code ‹    return new GraceNum(3.141592653589793);›",
    "}",
    "",
    "method pi -> Number {",
    "    // same as π — for those who don't know Greek",
    "    native \"c\" code ‹    return alloc_Float64((double)3.141592653589793);›",
    "    native \"js\" code ‹    return new GraceNum(3.141592653589793);›",
    "}",
    "",
    "method sqrt(a:Number) -> Number {",
    "    // square root of a",
    "    native \"c\" code ‹    return alloc_Float64(sqrt(*(double*) args[0]->data));›",
    "    native \"js\" code ‹    return new GraceNum(Math.sqrt(var_a._value));›",
    "}",
    "",
    "method abs(a:Number) -> Number {",
    "    // absolute value of a",
    "    native \"c\" code ‹    return alloc_Float64(fabs(*(double*) args[0]->data));›",
    "    native \"js\" code ‹    return new GraceNum(Math.abs(var_a._value));›",
    "}",
    "",
    "method lg(a:Number) -> Number {",
    "    // logarithm to base 2 of a",
    "    native \"c\" code ‹    double log2 = log(2.0);",
    "    double logA = log(*(double*) args[0]->data);",
    "    return alloc_Float64(logA/log2);›",
    "    native \"js\" code ‹    return new GraceNum(Math.log(var_a._value) / Math.LN2);›",
    "}",
    "",
    "method ln(a:Number) -> Number {",
    "    // natural logarithm (base e) of a",
    "    native \"c\" code ‹    return alloc_Float64(log(*(double*) args[0]->data));›",
    "    native \"js\" code ‹    return new GraceNum(Math.log(var_a._value));›",
    "}",
    "",
    "method exp(a:Number) -> Number {",
    "    // e to the power a",
    "    native \"c\" code ‹    return alloc_Float64(exp(*(double*) args[0]->data));›",
    "    native \"js\" code ‹    return new GraceNum(Math.exp(var_a._value));›",
    "}",
    "",
    "method log10(a:Number) -> Number {",
    "    // logarithm to base 10 of a",
    "    native \"c\" code ‹    return alloc_Float64(log10(*(double*) args[0]->data));›",
    "    native \"js\" code ‹    return new GraceNum(Math.log(var_a._value) / Math.LN10);›",
    "}" ];
}
if (typeof global !== "undefined")
  global.gracecode_math = gracecode_math;
if (typeof window !== "undefined")
  window.gracecode_math = gracecode_math;
