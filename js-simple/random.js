"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_random() {
  setModuleName("random");
  this.definitionModule = "random";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_random_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_random_outer0;
  setLineNumber(2);    // compilenode method
  var func1 = function(argcv) {    // method between0And1
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for between0And1"));
    setModuleName("random");
    setLineNumber(5);    // compilenode call
       // start native code from line 5
    var result = GraceDone;
        return new GraceNum(Math.random());
    var nat2 = result;
       // end native code insertion
    if (!Grace_isTrue(callmethod(var_Number, "match", [1], nat2)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("result of method between0And1 does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    return nat2;
  };
  func1.paramCounts = [0];
  this.methods["between0And1"] = func1;
  func1.definitionLine = 2;
  func1.definitionModule = "random";
  setLineNumber(8);    // compilenode method
  var func3 = function(argcv) {    // method between(1)and(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_m = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for between (arg list 1) of between(1)and(1)"));
    var var_n = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for and (arg list 2) of between(1)and(1)"));
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_Number, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in between (arg list 1), which corresponds to parameter m, does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    curarg++;
    if (!Grace_isTrue(callmethod(var_Number, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in and (arg list 2), which corresponds to parameter n, does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("random");
    setLineNumber(10);    // compilenode call
    onSelf = true;
    var call5 = callmethodChecked(this, "between0And1", [0]);
    var diff9 = callmethodChecked(var_n, "-", [1], var_m);
    var prod11 = callmethodChecked(diff9, "*", [1], call5);
    var opresult13 = callmethodChecked(prod11, "+", [1], var_m);
    if (!Grace_isTrue(callmethod(var_Number, "match", [1], opresult13)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("result of method between(1)and(1) does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    return opresult13;
  };
  func3.paramTypes = [];
  func3.paramTypes.push([type_Number, "m"]);
  func3.paramTypes.push([type_Number, "n"]);
  func3.paramCounts = [1, 1];
  this.methods["between()and"] = func3;
  func3.definitionLine = 8;
  func3.definitionModule = "random";
  setLineNumber(13);    // compilenode method
  var func14 = function(argcv) {    // method integerIn(1)to(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_m = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for integerIn (arg list 1) of integerIn(1)to(1)"));
    var var_n = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for to (arg list 2) of integerIn(1)to(1)"));
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_Number, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in integerIn (arg list 1), which corresponds to parameter m, does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    curarg++;
    if (!Grace_isTrue(callmethod(var_Number, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in to (arg list 2), which corresponds to parameter n, does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("random");
    setLineNumber(15);    // compilenode call
    onSelf = true;
    var call16 = callmethodChecked(this, "between0And1", [0]);
    var diff21 = callmethodChecked(var_n, "-", [1], var_m);
    var opresult23 = callmethodChecked(diff21, "+", [1], new GraceNum(1));
    var prod25 = callmethodChecked(opresult23, "*", [1], call16);
    var call26 = callmethodChecked(prod25, "truncated", [0]);
    var opresult28 = callmethodChecked(call26, "+", [1], var_m);
    if (!Grace_isTrue(callmethod(var_Number, "match", [1], opresult28)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("result of method integerIn(1)to(1) does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    return opresult28;
  };
  func14.paramTypes = [];
  func14.paramTypes.push([type_Number, "m"]);
  func14.paramTypes.push([type_Number, "n"]);
  func14.paramCounts = [1, 1];
  this.methods["integerIn()to"] = func14;
  func14.definitionLine = 13;
  func14.definitionModule = "random";
  return this;
}
gracecode_random.imports = [];
if (typeof gctCache !== "undefined")
  gctCache['random'] = "classes:\nconfidential:\nfresh-methods:\nmodules:\npath:\n random\npublic:\n between()and\n between0And1\n integerIn()to\ntypes:\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["random"] = [
    "",
    "method between0And1 -> Number {",
    "    // A pseudo-random number between in the interval [0..1)",
    "    native \"c\" code ‹    return alloc_Float64((double)rand() / RAND_MAX);›",
    "    native \"js\" code ‹    return new GraceNum(Math.random());›",
    "}",
    "",
    "method between (m: Number) and (n: Number) -> Number {",
    "    // A pseudo-random number in the interval [m..n)",
    "    ((n - m) * between0And1) + m",
    "}",
    "",
    "method integerIn (m: Number) to (n: Number) -> Number {",
    "    // A pseudo-random integer in the interval [m..n]",
    "    ((n - m + 1) * between0And1).truncated + m",
    "}" ];
}
if (typeof global !== "undefined")
  global.gracecode_random = gracecode_random;
if (typeof window !== "undefined")
  window.gracecode_random = gracecode_random;
