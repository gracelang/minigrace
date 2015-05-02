"use strict";
this.outer = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_moth () {
  setModuleName("moth");
  if (callStack.length == 0)
    callStack = ["execution environment"]
  this.definitionModule = "moth";
  this.definitionLine = 0;
  setLineNumber(16)    // compilenode method;
  var func0 = function(argcv) {    // method sin(1)
    var curarg = 1;
    var var_a = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for sin(1)"));
    setModuleName("moth");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      setLineNumber(19)    // compilenode call;
         // start native code from line 19
      var result = GraceDone;
          return new GraceNum(Math.sin(var_a._value));
      var nat1 = result;
         // end native code insertion
      return nat1;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func0.paramTypes = [];
  func0.paramTypes.push([type_Number, "a"]);
  func0.paramCounts = [
      1,
  ];
  func0.variableArities = [
      false,
  ];
  this.methods["sin"] = func0;
  func0.definitionLine = 16;
  func0.definitionModule = "moth";
  setLineNumber(22)    // compilenode method;
  var func2 = function(argcv) {    // method cos(1)
    var curarg = 1;
    var var_a = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for cos(1)"));
    setModuleName("moth");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      setLineNumber(25)    // compilenode call;
         // start native code from line 25
      var result = GraceDone;
          return new GraceNum(Math.cos(var_a._value));
      var nat3 = result;
         // end native code insertion
      return nat3;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func2.paramTypes = [];
  func2.paramTypes.push([type_Number, "a"]);
  func2.paramCounts = [
      1,
  ];
  func2.variableArities = [
      false,
  ];
  this.methods["cos"] = func2;
  func2.definitionLine = 22;
  func2.definitionModule = "moth";
  setLineNumber(28)    // compilenode method;
  var func4 = function(argcv) {    // method tan(1)
    var curarg = 1;
    var var_a = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for tan(1)"));
    setModuleName("moth");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      setLineNumber(31)    // compilenode call;
         // start native code from line 31
      var result = GraceDone;
          return new GraceNum(Math.tan(var_a._value));;
      var nat5 = result;
         // end native code insertion
      return nat5;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func4.paramTypes = [];
  func4.paramTypes.push([type_Number, "a"]);
  func4.paramCounts = [
      1,
  ];
  func4.variableArities = [
      false,
  ];
  this.methods["tan"] = func4;
  func4.definitionLine = 28;
  func4.definitionModule = "moth";
  setLineNumber(34)    // compilenode method;
  var func6 = function(argcv) {    // method asin(1)
    var curarg = 1;
    var var_a = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for asin(1)"));
    setModuleName("moth");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      setLineNumber(37)    // compilenode call;
         // start native code from line 37
      var result = GraceDone;
          return new GraceNum(Math.asin(var_a._value));
      var nat7 = result;
         // end native code insertion
      return nat7;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func6.paramTypes = [];
  func6.paramTypes.push([type_Number, "a"]);
  func6.paramCounts = [
      1,
  ];
  func6.variableArities = [
      false,
  ];
  this.methods["asin"] = func6;
  func6.definitionLine = 34;
  func6.definitionModule = "moth";
  setLineNumber(40)    // compilenode method;
  var func8 = function(argcv) {    // method acos(1)
    var curarg = 1;
    var var_a = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for acos(1)"));
    setModuleName("moth");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      setLineNumber(43)    // compilenode call;
         // start native code from line 43
      var result = GraceDone;
          return new GraceNum(Math.acos(var_a._value));
      var nat9 = result;
         // end native code insertion
      return nat9;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func8.paramTypes = [];
  func8.paramTypes.push([type_Number, "a"]);
  func8.paramCounts = [
      1,
  ];
  func8.variableArities = [
      false,
  ];
  this.methods["acos"] = func8;
  func8.definitionLine = 40;
  func8.definitionModule = "moth";
  setLineNumber(46)    // compilenode method;
  var func10 = function(argcv) {    // method atan(1)
    var curarg = 1;
    var var_a = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for atan(1)"));
    setModuleName("moth");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      setLineNumber(49)    // compilenode call;
         // start native code from line 49
      var result = GraceDone;
          return new GraceNum(Math.atan(var_a._value));
      var nat11 = result;
         // end native code insertion
      return nat11;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func10.paramTypes = [];
  func10.paramTypes.push([type_Number, "a"]);
  func10.paramCounts = [
      1,
  ];
  func10.variableArities = [
      false,
  ];
  this.methods["atan"] = func10;
  func10.definitionLine = 46;
  func10.definitionModule = "moth";
  setLineNumber(52)    // compilenode method;
  var func12 = function(argcv) {    // method random
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for random"));
    setModuleName("moth");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      setLineNumber(55)    // compilenode call;
         // start native code from line 55
      var result = GraceDone;
          return new GraceNum(Math.random());
      var nat13 = result;
         // end native code insertion
      return nat13;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func12.paramCounts = [
      0,
  ];
  func12.variableArities = [
      false,
  ];
  this.methods["random"] = func12;
  func12.definitionLine = 52;
  func12.definitionModule = "moth";
  setLineNumber(58)    // compilenode method;
  var func14 = function(argcv) {    // method π
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for π"));
    setModuleName("moth");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      setLineNumber(61)    // compilenode call;
         // start native code from line 61
      var result = GraceDone;
          return new GraceNum(3.141592653589793);
      var nat15 = result;
         // end native code insertion
      return nat15;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func14.paramCounts = [
      0,
  ];
  func14.variableArities = [
      false,
  ];
  this.methods["\u03c0"] = func14;
  func14.definitionLine = 58;
  func14.definitionModule = "moth";
  setLineNumber(64)    // compilenode method;
  var func16 = function(argcv) {    // method pi
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for pi"));
    setModuleName("moth");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      setLineNumber(67)    // compilenode call;
         // start native code from line 67
      var result = GraceDone;
          return new GraceNum(3.141592653589793);
      var nat17 = result;
         // end native code insertion
      return nat17;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func16.paramCounts = [
      0,
  ];
  func16.variableArities = [
      false,
  ];
  this.methods["pi"] = func16;
  func16.definitionLine = 64;
  func16.definitionModule = "moth";
  setLineNumber(70)    // compilenode method;
  var func18 = function(argcv) {    // method sqrt(1)
    var curarg = 1;
    var var_a = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for sqrt(1)"));
    setModuleName("moth");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      setLineNumber(73)    // compilenode call;
         // start native code from line 73
      var result = GraceDone;
          return new GraceNum(Math.sqrt(var_a._value));
      var nat19 = result;
         // end native code insertion
      return nat19;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func18.paramTypes = [];
  func18.paramTypes.push([type_Number, "a"]);
  func18.paramCounts = [
      1,
  ];
  func18.variableArities = [
      false,
  ];
  this.methods["sqrt"] = func18;
  func18.definitionLine = 70;
  func18.definitionModule = "moth";
  setLineNumber(76)    // compilenode method;
  var func20 = function(argcv) {    // method abs(1)
    var curarg = 1;
    var var_a = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for abs(1)"));
    setModuleName("moth");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      setLineNumber(79)    // compilenode call;
         // start native code from line 79
      var result = GraceDone;
          return new GraceNum(Math.abs(var_a._value));
      var nat21 = result;
         // end native code insertion
      return nat21;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func20.paramTypes = [];
  func20.paramTypes.push([type_Number, "a"]);
  func20.paramCounts = [
      1,
  ];
  func20.variableArities = [
      false,
  ];
  this.methods["abs"] = func20;
  func20.definitionLine = 76;
  func20.definitionModule = "moth";
  setLineNumber(82)    // compilenode method;
  var func22 = function(argcv) {    // method lg(1)
    var curarg = 1;
    var var_a = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for lg(1)"));
    setModuleName("moth");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      setLineNumber(87)    // compilenode call;
         // start native code from line 87
      var result = GraceDone;
          return new GraceNum(Math.log(var_a._value) / Math.LN2);
      var nat23 = result;
         // end native code insertion
      return nat23;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func22.paramTypes = [];
  func22.paramTypes.push([type_Number, "a"]);
  func22.paramCounts = [
      1,
  ];
  func22.variableArities = [
      false,
  ];
  this.methods["lg"] = func22;
  func22.definitionLine = 82;
  func22.definitionModule = "moth";
  setLineNumber(90)    // compilenode method;
  var func24 = function(argcv) {    // method ln(1)
    var curarg = 1;
    var var_a = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for ln(1)"));
    setModuleName("moth");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      setLineNumber(93)    // compilenode call;
         // start native code from line 93
      var result = GraceDone;
          return new GraceNum(Math.log(var_a._value));
      var nat25 = result;
         // end native code insertion
      return nat25;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func24.paramTypes = [];
  func24.paramTypes.push([type_Number, "a"]);
  func24.paramCounts = [
      1,
  ];
  func24.variableArities = [
      false,
  ];
  this.methods["ln"] = func24;
  func24.definitionLine = 90;
  func24.definitionModule = "moth";
  setLineNumber(96)    // compilenode method;
  var func26 = function(argcv) {    // method exp(1)
    var curarg = 1;
    var var_a = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for exp(1)"));
    setModuleName("moth");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      setLineNumber(99)    // compilenode call;
         // start native code from line 99
      var result = GraceDone;
          return new GraceNum(Math.exp(var_a._value));
      var nat27 = result;
         // end native code insertion
      return nat27;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func26.paramTypes = [];
  func26.paramTypes.push([type_Number, "a"]);
  func26.paramCounts = [
      1,
  ];
  func26.variableArities = [
      false,
  ];
  this.methods["exp"] = func26;
  func26.definitionLine = 96;
  func26.definitionModule = "moth";
  setLineNumber(102)    // compilenode method;
  var func28 = function(argcv) {    // method log10(1)
    var curarg = 1;
    var var_a = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for log10(1)"));
    setModuleName("moth");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      setLineNumber(105)    // compilenode call;
         // start native code from line 105
      var result = GraceDone;
          return new GraceNum(Math.log(var_a._value) / Math.LN10);
      var nat29 = result;
         // end native code insertion
      return nat29;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func28.paramTypes = [];
  func28.paramTypes.push([type_Number, "a"]);
  func28.paramCounts = [
      1,
  ];
  func28.variableArities = [
      false,
  ];
  this.methods["log10"] = func28;
  func28.definitionLine = 102;
  func28.definitionModule = "moth";
  setLineNumber(101)    // compilenode blank;
  return this;
}
gracecode_moth.imports = [
];
if (typeof gctCache !== "undefined")
  gctCache['moth'] = "modules:\nfresh-methods:\npath:\n moth\nclasses:\npublic:\n sin\n cos\n tan\n asin\n acos\n atan\n random\n \u03c0\n pi\n sqrt\n abs\n lg\n ln\n exp\n log10\nconfidential:\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["moth"] = [
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
    "method sin(a:Number) {",
    "    // sine of a (assumed to be radians)",
    "    native \"c\" code ‹    return alloc_Float64(sin(*(double*) args[0]->data));›",
    "    native \"js\" code ‹    return new GraceNum(Math.sin(var_a._value));›",
    "}",
    "",
    "method cos(a:Number) {",
    "    // cosine of a (assumed to be radians)",
    "    native \"c\" code ‹    return alloc_Float64(cos(*(double*) args[0]->data));›",
    "    native \"js\" code ‹    return new GraceNum(Math.cos(var_a._value));›",
    "}",
    "",
    "method tan(a:Number) {",
    "    // tangent of a (assumed to be radians)",
    "    native \"c\" code ‹    return alloc_Float64(tan(*(double*) args[0]->data));›",
    "    native \"js\" code ‹    return new GraceNum(Math.tan(var_a._value));;›",
    "}",
    "",
    "method asin(a:Number) {",
    "    // arcsin of a (in radians)",
    "    native \"c\" code ‹    return alloc_Float64(asin(*(double*) args[0]->data));›",
    "    native \"js\" code ‹    return new GraceNum(Math.asin(var_a._value));›",
    "}",
    "",
    "method acos(a:Number) {",
    "    // arccos of a (in radians)",
    "    native \"c\" code ‹    return alloc_Float64(acos(*(double*) args[0]->data));›",
    "    native \"js\" code ‹    return new GraceNum(Math.acos(var_a._value));›",
    "}",
    "",
    "method atan(a:Number) {",
    "    // arctan of a (in radians)",
    "    native \"c\" code ‹    return alloc_Float64(atan(*(double*) args[0]->data));›",
    "    native \"js\" code ‹    return new GraceNum(Math.atan(var_a._value));›",
    "}",
    "",
    "method random {",
    "    // a pseudo-random number",
    "    native \"c\" code ‹    return alloc_Float64((double)rand() / RAND_MAX);›",
    "    native \"js\" code ‹    return new GraceNum(Math.random());›",
    "}",
    "",
    "method π {",
    "    // an approximation of the constant π",
    "    native \"c\" code ‹    return alloc_Float64((double)3.141592653589793);›",
    "    native \"js\" code ‹    return new GraceNum(3.141592653589793);›",
    "}",
    "",
    "method pi {",
    "    // same as π — for those who don't know Greek",
    "    native \"c\" code ‹    return alloc_Float64((double)3.141592653589793);›",
    "    native \"js\" code ‹    return new GraceNum(3.141592653589793);›",
    "}",
    "",
    "method sqrt(a:Number) {",
    "    // square root of a",
    "    native \"c\" code ‹    return alloc_Float64(sqrt(*(double*) args[0]->data));›",
    "    native \"js\" code ‹    return new GraceNum(Math.sqrt(var_a._value));›",
    "}",
    "",
    "method abs(a:Number) {",
    "    // absolute value of a",
    "    native \"c\" code ‹    return alloc_Float64(fabs(*(double*) args[0]->data));›",
    "    native \"js\" code ‹    return new GraceNum(Math.abs(var_a._value));›",
    "}",
    "",
    "method lg(a:Number) {",
    "    // logarithm to base 2 of a",
    "    native \"c\" code ‹    double log2 = log(2.0);",
    "    double logA = log(*(double*) args[0]->data);",
    "    return alloc_Float64(logA/log2);›",
    "    native \"js\" code ‹    return new GraceNum(Math.log(var_a._value) / Math.LN2);›",
    "}",
    "",
    "method ln(a:Number) {",
    "    // natural logarithm (base e) of a",
    "    native \"c\" code ‹    return alloc_Float64(log(*(double*) args[0]->data));›",
    "    native \"js\" code ‹    return new GraceNum(Math.log(var_a._value));›",
    "}",
    "",
    "method exp(a:Number) {",
    "    // e to the power a",
    "    native \"c\" code ‹    return alloc_Float64(exp(*(double*) args[0]->data));›",
    "    native \"js\" code ‹    return new GraceNum(Math.exp(var_a._value));›",
    "}",
    "",
    "method log10(a:Number) {",
    "    // logarithm to base 10 of a",
    "    native \"c\" code ‹    return alloc_Float64(log10(*(double*) args[0]->data));›",
    "    native \"js\" code ‹    return new GraceNum(Math.log(var_a._value) / Math.LN10);›",
    "}",
  ];
};
if (typeof global !== "undefined")
  global.gracecode_moth = gracecode_moth;
if (typeof window !== "undefined")
  window.gracecode_moth = gracecode_moth;
