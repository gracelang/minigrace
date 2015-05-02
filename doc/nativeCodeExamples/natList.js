"use strict";
this.outer = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_natList () {
  setModuleName("natList");
  if (callStack.length == 0)
    callStack = ["execution environment"]
  this.definitionModule = "natList";
  this.definitionLine = 0;
  setLineNumber(8)    // compilenode method;
  var func0 = function(argcv) {    // method list
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for list"));
    // Start generics
    if (argcv.length == 1 + 1) {
      if (argcv[argcv.length-1] < 1) {
        callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("insufficient generic parameters"));
      }
      var var_T = arguments[curarg++];
    } else {
      var_T = var_Unknown;
    }
    // End generics
    var curarg2 = 1;
    // End checking generics
    setModuleName("natList");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj1 = Grace_allocObject();
      obj1.definitionModule = "natList";
      obj1.definitionLine = 8;
      obj1.outer = this;
      var reader_natList_outer2 = function() {
        return this.outer;
      }
      obj1.methods["outer"] = reader_natList_outer2;
      var obj_init_1 = function () {
        var origSuperDepth = superDepth;
        superDepth = obj1;
        var func3 = function(argcv) {    // method withAll(1)
          var curarg = 1;
          var var_a = arguments[curarg];
          curarg++;
          if (argcv[0] != 1)
            callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for withAll(1)"));
          setModuleName("natList");
          var returnTarget = invocationCount;
          invocationCount++;
          try {
            setLineNumber(11)    // compilenode object;
            var obj4 = Grace_allocObject();
            obj4.definitionModule = "natList";
            obj4.definitionLine = 11;
            obj4.outer = this;
            var reader_natList_outer5 = function() {
              return this.outer;
            }
            obj4.methods["outer"] = reader_natList_outer5;
            var obj_init_4 = function () {
              var origSuperDepth = superDepth;
              superDepth = obj4;
              var func6 = function(argcv) {    // method boundsCheck(1)
                var curarg = 1;
                var var_n = arguments[curarg];
                curarg++;
                if (argcv[0] != 1)
                  callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for boundsCheck(1)"));
                setModuleName("natList");
                var returnTarget = invocationCount;
                invocationCount++;
                try {
                  setLineNumber(21)    // compilenode call;
                     // start native code from line 21
                  var result = GraceDone;
                  var ix = var_n._value;
                    if ((ix < 1) || (ix > this.data.jsArray.length)) {
                        var msg = "index " + ix + " out of bounds 1.." + this.data.jsArray.length;
                        var BoundsError = callmethod(Grace_prelude, "BoundsError", [0]);
                        callmethod(BoundsError,"raise", [1], new GraceString(msg));
                    }
                  var nat7 = result;
                     // end native code insertion
                  var if8 = GraceDone;
                  setLineNumber(27)    // compilenode call;
                  onSelf = true;
                  var call9 = callmethod(this, "size", [0]);
                  var opresult12 = callmethod(var_n, ">", [1], call9);
                  var opresult16 = callmethod(var_n, "<", [1], new GraceNum(1));
                  var opresult18 = callmethod(opresult16, "||", [1], opresult12);
                  if (Grace_isTrue(opresult18)) {
                    setLineNumber(28)    // compilenode string;
                    var string19 = new GraceString("");
                    onSelf = true;
                    var call21 = callmethod(this, "size", [0]);
                    var string23 = new GraceString(" out of bounds 1..");
                    var string26 = new GraceString("index ");
                    var opresult28 = callmethod(string26, "++", [1], var_n);
                    var opresult30 = callmethod(opresult28, "++", [1], string23);
                    var opresult32 = callmethod(opresult30, "++", [1], call21);
                    var opresult34 = callmethod(opresult32, "++", [1], string19);
                    var call35 = callmethod(Grace_prelude, "BoundsError", [0]);
                    var call36 = callmethod(call35,"raise", [1], opresult34);
                    if8 = call36;
                  }
                  return if8;
                } catch(e) {
                  if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                  } else {
                    throw e;
                  }
                }
              }
                func6.confidential = true;
              func6.paramCounts = [
                  1,
              ];
              func6.variableArities = [
                  false,
              ];
              obj4.methods["boundsCheck"] = func6;
              func6.definitionLine = 20;
              func6.definitionModule = "natList";
              var func37 = function(argcv) {    // method size
                var curarg = 1;
                if (argcv[0] != 0)
                  callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for size"));
                setModuleName("natList");
                var returnTarget = invocationCount;
                invocationCount++;
                try {
                  setLineNumber(34)    // compilenode call;
                     // start native code from line 34
                  var result = GraceDone;
                  return new GraceNum(this.data.jsArray.length)
                  var nat38 = result;
                     // end native code insertion
                  setLineNumber(35)    // compilenode call;
                  onSelf = true;
                  var call39 = callmethod(this, "sz", [0]);
                  return call39;
                } catch(e) {
                  if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                  } else {
                    throw e;
                  }
                }
              }
              func37.paramCounts = [
                  0,
              ];
              func37.variableArities = [
                  false,
              ];
              obj4.methods["size"] = func37;
              func37.definitionLine = 33;
              func37.definitionModule = "natList";
              var func40 = function(argcv) {    // method at(1)
                var curarg = 1;
                var var_n = arguments[curarg];
                curarg++;
                if (argcv[0] != 1)
                  callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for at(1)"));
                setModuleName("natList");
                var returnTarget = invocationCount;
                invocationCount++;
                try {
                  setLineNumber(40)    // compilenode call;
                     // start native code from line 40
                  var result = GraceDone;
                  var ix = var_n._value;
                    if ((ix < 1) || (ix > this.data.jsArray.length)) {
                        var msg = "index " + ix + " out of bounds 1.." + this.data.jsArray.length;
                        var BoundsError = callmethod(Grace_prelude, "BoundsError", [0]);
                        callmethod(BoundsError, "raise", [1], new GraceString(msg));
                    }
                    return this.data.jsArray[ix - 1];
                  var nat41 = result;
                     // end native code insertion
                  return nat41;
                } catch(e) {
                  if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                  } else {
                    throw e;
                  }
                }
              }
              func40.paramCounts = [
                  1,
              ];
              func40.variableArities = [
                  false,
              ];
              obj4.methods["at"] = func40;
              func40.definitionLine = 39;
              func40.definitionModule = "natList";
              var func42 = function(argcv) {    // method [(1)
                var curarg = 1;
                var var_n = arguments[curarg];
                curarg++;
                if (argcv[0] != 1)
                  callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for [(1)"));
                setModuleName("natList");
                var returnTarget = invocationCount;
                invocationCount++;
                try {
                  setLineNumber(51)    // compilenode call;
                     // start native code from line 51
                  var result = GraceDone;
                  var ix = var_n._value;
                    if ((ix < 1) || (ix > this.data.jsArray.length)) {
                        var msg = "index " + ix + " out of bounds 1.." + this.data.jsArray.length;
                        var BoundsError = callmethod(Grace_prelude, "BoundsError", [0]);
                        callmethod(BoundsError, "raise", [1], new GraceString(msg));
                    }
                    return this.data.jsArray[ix - 1];
                  var nat43 = result;
                     // end native code insertion
                  return nat43;
                } catch(e) {
                  if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                  } else {
                    throw e;
                  }
                }
              }
              func42.paramCounts = [
                  1,
              ];
              func42.variableArities = [
                  false,
              ];
              obj4.methods["[]"] = func42;
              func42.definitionLine = 50;
              func42.definitionModule = "natList";
              var func44 = function(argcv) {    // method at(1)put(1)
                var curarg = 1;
                var var_n = arguments[curarg];
                curarg++;
                if (argcv[0] != 1)
                  callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for at (arg list 1) of at(1)put(1)"));
                var var_x = arguments[curarg];
                curarg++;
                if (argcv[1] != 1)
                  callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for put (arg list 2) of at(1)put(1)"));
                setModuleName("natList");
                var returnTarget = invocationCount;
                invocationCount++;
                try {
                  setLineNumber(62)    // compilenode call;
                     // start native code from line 62
                  var result = GraceDone;
                  var  ix = var_n._value;
                    if ((ix < 1) || (ix > this.data.jsArray.length + 1)) {
                        var msg = "index " + ix + " out of bounds 1.." + this.data.jsArray.length;
                        var BoundsError = callmethod(Grace_prelude, "BoundsError", [0]);
                        callmethod(BoundsError, "raise", [1], new GraceString(msg));
                    }
                    this.data.jsArray[ix-1] = var_x;
                    return this;
                  var nat45 = result;
                     // end native code insertion
                  return nat45;
                } catch(e) {
                  if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                  } else {
                    throw e;
                  }
                }
              }
              func44.paramCounts = [
                  1,
                  1,
              ];
              func44.variableArities = [
                  false,
                  false,
              ];
              obj4.methods["at()put"] = func44;
              func44.definitionLine = 61;
              func44.definitionModule = "natList";
              var func46 = function(argcv) {    // method [:=(2)
                var curarg = 1;
                var var_n = arguments[curarg];
                curarg++;
                var var_x = arguments[curarg];
                curarg++;
                if (argcv[0] != 2)
                  callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for [:=(2)"));
                setModuleName("natList");
                var returnTarget = invocationCount;
                invocationCount++;
                try {
                  setLineNumber(73)    // compilenode call;
                     // start native code from line 73
                  var result = GraceDone;
                  var ix = var_n._value;
                    if ((ix < 1) || (ix > this.data.jsArray.length + 1)) {
                        var msg = "index " + ix + " out of bounds 1.." + this.data.jsArray.length;
                        var BoundsError = callmethod(Grace_prelude, "BoundsError", [0]);
                        callmethod(BoundsError, "raise", [1], new GraceString(msg));
                    }
                    this.data.jsArray[ix-1] = var_x;
                    return GraceDone;
                  var nat47 = result;
                     // end native code insertion
                  return nat47;
                } catch(e) {
                  if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                  } else {
                    throw e;
                  }
                }
              }
              func46.paramCounts = [
                  2,
              ];
              func46.variableArities = [
                  false,
              ];
              obj4.methods["[]:="] = func46;
              func46.definitionLine = 72;
              func46.definitionModule = "natList";
              var func48 = function(argcv) {    // method add(0+)
                var curarg = 1;
                var var_sequenceClass = callmethod(Grace_prelude, "sequence", [0]);
                var var_x_len = argcv[0] - 0;
                var var_x_array = new GracePrimitiveArray(var_x_len);
                for (var ix = 0; ix < var_x_len; ix++)
                  var_x_array._value[ix] = arguments[curarg++];
                onSelf = true
                var var_x = callmethod(var_sequenceClass, "fromPrimitiveArray", [2], var_x_array, new GraceNum(var_x_len));
                setModuleName("natList");
                var returnTarget = invocationCount;
                invocationCount++;
                try {
                  var if49 = GraceDone;
                  setLineNumber(84)    // compilenode identifier;
                  var call51 = callmethod(var_x,"size", [0]);
                  var opresult53 = callmethod(call51, "==", [1], new GraceNum(1));
                  if (Grace_isTrue(opresult53)) {
                    setLineNumber(85)    // compilenode call;
                       // start native code from line 85
                    var result = GraceDone;
                    var v = callmethod(var_x, "first", [0]);
                    this.data.jsArray.push(v);
                    return this;
                    var nat54 = result;
                       // end native code insertion
                    if49 = nat54;
                  }
                  setLineNumber(89)    // compilenode identifier;
                  onSelf = true;
                  var call55 = callmethod(this, "addAll", [1], var_x);
                  return call55;
                } catch(e) {
                  if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                  } else {
                    throw e;
                  }
                }
              }
              func48.paramCounts = [
                  0,
              ];
              func48.variableArities = [
                  true,
              ];
              obj4.methods["add"] = func48;
              func48.definitionLine = 83;
              func48.definitionModule = "natList";
              var func56 = function(argcv) {    // method addAll(1)
                var curarg = 1;
                var var_l = arguments[curarg];
                curarg++;
                if (argcv[0] != 1)
                  callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for addAll(1)"));
                setModuleName("natList");
                var returnTarget = invocationCount;
                invocationCount++;
                try {
                  setLineNumber(93)    // compilenode block;
                  var block57 = new GraceBlock(this, 93, 1);
                  block57.real = function(var_each) {
                    sourceObject = this;
                    onSelf = true;
                    var call58 = callmethod(this, "push", [1], var_each);
                    return call58;
                  };
                  var call59 = callmethod(Grace_prelude, "for()do", [1, 1], var_l, block57);
                  setLineNumber(94)    // compilenode identifier;
                  return this;
                } catch(e) {
                  if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                  } else {
                    throw e;
                  }
                }
              }
              func56.paramCounts = [
                  1,
              ];
              func56.variableArities = [
                  false,
              ];
              obj4.methods["addAll"] = func56;
              func56.definitionLine = 92;
              func56.definitionModule = "natList";
              var func60 = function(argcv) {    // method push(1)
                var curarg = 1;
                var var_x = arguments[curarg];
                curarg++;
                if (argcv[0] != 1)
                  callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for push(1)"));
                setModuleName("natList");
                var returnTarget = invocationCount;
                invocationCount++;
                try {
                  setLineNumber(98)    // compilenode call;
                     // start native code from line 98
                  var result = GraceDone;
                  this.data.jsArray.push(var_x);
                    return this;
                  var nat61 = result;
                     // end native code insertion
                  return nat61;
                } catch(e) {
                  if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                  } else {
                    throw e;
                  }
                }
              }
              func60.paramCounts = [
                  1,
              ];
              func60.variableArities = [
                  false,
              ];
              obj4.methods["push"] = func60;
              func60.definitionLine = 97;
              func60.definitionModule = "natList";
              var func62 = function(argcv) {    // method addLast(0+)
                var curarg = 1;
                var var_sequenceClass = callmethod(Grace_prelude, "sequence", [0]);
                var var_x_len = argcv[0] - 0;
                var var_x_array = new GracePrimitiveArray(var_x_len);
                for (var ix = 0; ix < var_x_len; ix++)
                  var_x_array._value[ix] = arguments[curarg++];
                onSelf = true
                var var_x = callmethod(var_sequenceClass, "fromPrimitiveArray", [2], var_x_array, new GraceNum(var_x_len));
                setModuleName("natList");
                var returnTarget = invocationCount;
                invocationCount++;
                try {
                  setLineNumber(102)    // compilenode identifier;
                  onSelf = true;
                  var call63 = callmethod(this, "addAll", [1], var_x);
                  return call63;
                } catch(e) {
                  if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                  } else {
                    throw e;
                  }
                }
              }
              func62.paramCounts = [
                  0,
              ];
              func62.variableArities = [
                  true,
              ];
              obj4.methods["addLast"] = func62;
              func62.definitionLine = 102;
              func62.definitionModule = "natList";
              var func64 = function(argcv) {    // method removeLast
                var curarg = 1;
                if (argcv[0] != 0)
                  callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for removeLast"));
                setModuleName("natList");
                var returnTarget = invocationCount;
                invocationCount++;
                try {
                  setLineNumber(106)    // compilenode call;
                  onSelf = true;
                  var call65 = callmethod(this, "size", [0]);
                  onSelf = true;
                  var call66 = callmethod(this, "at", [1], call65);
                  var var_result = call66;
                  setLineNumber(107)    // compilenode call;
                     // start native code from line 107
                  var result = GraceDone;
                  if (this.data.jsArray.length = 0) {
                        var msg = "index " + ix + " out of bounds 1.." + this.data.jsArray.length;
                        var BoundsError = callmethod(Grace_prelude, "BoundsError", [0]);
                        callmethod(BoundsError, "raise", [1], new GraceString(msg));
                    } else return this.data.jsArray.pop();
                  var nat67 = result;
                     // end native code insertion
                  return nat67;
                } catch(e) {
                  if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                  } else {
                    throw e;
                  }
                }
              }
              func64.paramCounts = [
                  0,
              ];
              func64.variableArities = [
                  false,
              ];
              obj4.methods["removeLast"] = func64;
              func64.definitionLine = 105;
              func64.definitionModule = "natList";
              var func68 = function(argcv) {    // method addAllFirst(1)
                var curarg = 1;
                var var_l = arguments[curarg];
                curarg++;
                if (argcv[0] != 1)
                  callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for addAllFirst(1)"));
                setModuleName("natList");
                var returnTarget = invocationCount;
                invocationCount++;
                try {
                  setLineNumber(115)    // compilenode identifier;
                  var call69 = callmethod(var_l,"size", [0]);
                  var var_ix = call69;
                  setLineNumber(116)    // compilenode block;
                  var block70 = new GraceBlock(this, 116, 0);
                  block70.real = function() {
                    sourceObject = this;
                    var opresult73 = callmethod(var_ix, ">", [1], new GraceNum(0));
                    return opresult73;
                  };
                  var block74 = new GraceBlock(this, 116, 0);
                  block74.real = function() {
                    sourceObject = this;
                    setLineNumber(117)    // compilenode identifier;
                    var call75 = callmethod(var_l,"at", [1], var_ix);
                    var var_each = call75;
                    setLineNumber(118)    // compilenode identifier;
                    var diff78 = callmethod(var_ix, "-", [1], new GraceNum(1));
                    var_ix = diff78;
                    setLineNumber(119)    // compilenode call;
                       // start native code from line 119
                    var result = GraceDone;
                    this.data.jsArray.unshift(var_each);
                    var nat79 = result;
                       // end native code insertion
                    return nat79;
                  };
                  var call80 = callmethod(Grace_prelude, "while()do", [1, 1], block70, block74);
                  setLineNumber(121)    // compilenode identifier;
                  return this;
                } catch(e) {
                  if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                  } else {
                    throw e;
                  }
                }
              }
              func68.paramCounts = [
                  1,
              ];
              func68.variableArities = [
                  false,
              ];
              obj4.methods["addAllFirst"] = func68;
              func68.definitionLine = 114;
              func68.definitionModule = "natList";
              var func81 = function(argcv) {    // method addFirst(0+)
                var curarg = 1;
                var var_sequenceClass = callmethod(Grace_prelude, "sequence", [0]);
                var var_l_len = argcv[0] - 0;
                var var_l_array = new GracePrimitiveArray(var_l_len);
                for (var ix = 0; ix < var_l_len; ix++)
                  var_l_array._value[ix] = arguments[curarg++];
                onSelf = true
                var var_l = callmethod(var_sequenceClass, "fromPrimitiveArray", [2], var_l_array, new GraceNum(var_l_len));
                setModuleName("natList");
                var returnTarget = invocationCount;
                invocationCount++;
                try {
                  setLineNumber(125)    // compilenode identifier;
                  onSelf = true;
                  var call82 = callmethod(this, "addAllFirst", [1], var_l);
                  return call82;
                } catch(e) {
                  if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                  } else {
                    throw e;
                  }
                }
              }
              func81.paramCounts = [
                  0,
              ];
              func81.variableArities = [
                  true,
              ];
              obj4.methods["addFirst"] = func81;
              func81.definitionLine = 125;
              func81.definitionModule = "natList";
              var func83 = function(argcv) {    // method removeFirst
                var curarg = 1;
                if (argcv[0] != 0)
                  callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for removeFirst"));
                setModuleName("natList");
                var returnTarget = invocationCount;
                invocationCount++;
                try {
                  setLineNumber(129)    // compilenode num;
                  onSelf = true;
                  var call84 = callmethod(this, "removeAt", [1], new GraceNum(1));
                  return call84;
                } catch(e) {
                  if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                  } else {
                    throw e;
                  }
                }
              }
              func83.paramCounts = [
                  0,
              ];
              func83.variableArities = [
                  false,
              ];
              obj4.methods["removeFirst"] = func83;
              func83.definitionLine = 128;
              func83.definitionModule = "natList";
              var func85 = function(argcv) {    // method removeAt(1)
                var curarg = 1;
                var var_n = arguments[curarg];
                curarg++;
                if (argcv[0] != 1)
                  callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for removeAt(1)"));
                setModuleName("natList");
                var returnTarget = invocationCount;
                invocationCount++;
                try {
                  setLineNumber(134)    // compilenode identifier;
                  onSelf = true;
                  var call86 = callmethod(this, "at", [1], var_n);
                  var var_removed = call86;
                  setLineNumber(135)    // compilenode call;
                     // start native code from line 135
                  var result = GraceDone;
                  this.data.jsArray.splice(var_n._value - 1, 1);
                  var nat87 = result;
                     // end native code insertion
                  setLineNumber(136)    // compilenode identifier;
                    return var_removed
                  return undefined;
                } catch(e) {
                  if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                  } else {
                    throw e;
                  }
                }
              }
              func85.paramCounts = [
                  1,
              ];
              func85.variableArities = [
                  false,
              ];
              obj4.methods["removeAt"] = func85;
              func85.definitionLine = 133;
              func85.definitionModule = "natList";
              var func88 = function(argcv) {    // method remove(0+)
                var curarg = 1;
                var var_sequenceClass = callmethod(Grace_prelude, "sequence", [0]);
                var var_v_len = argcv[0] - 0;
                var var_v_array = new GracePrimitiveArray(var_v_len);
                for (var ix = 0; ix < var_v_len; ix++)
                  var_v_array._value[ix] = arguments[curarg++];
                onSelf = true
                var var_v = callmethod(var_sequenceClass, "fromPrimitiveArray", [2], var_v_array, new GraceNum(var_v_len));
                setModuleName("natList");
                var returnTarget = invocationCount;
                invocationCount++;
                try {
                  setLineNumber(141)    // compilenode identifier;
                  onSelf = true;
                  var call89 = callmethod(this, "removeAll", [1], var_v);
                  return call89;
                } catch(e) {
                  if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                  } else {
                    throw e;
                  }
                }
              }
              func88.paramCounts = [
                  0,
              ];
              func88.variableArities = [
                  true,
              ];
              obj4.methods["remove"] = func88;
              func88.definitionLine = 140;
              func88.definitionModule = "natList";
              var func90 = function(argcv) {    // method remove(0+)ifAbsent(1)
                var curarg = 1;
                var var_sequenceClass = callmethod(Grace_prelude, "sequence", [0]);
                var var_v_len = argcv[0] - 0;
                var var_v_array = new GracePrimitiveArray(var_v_len);
                for (var ix = 0; ix < var_v_len; ix++)
                  var_v_array._value[ix] = arguments[curarg++];
                onSelf = true
                var var_v = callmethod(var_sequenceClass, "fromPrimitiveArray", [2], var_v_array, new GraceNum(var_v_len));
                var var_action = arguments[curarg];
                curarg++;
                if (argcv[1] != 1)
                  callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for ifAbsent (arg list 2) of remove(0+)ifAbsent(1)"));
                setModuleName("natList");
                var returnTarget = invocationCount;
                invocationCount++;
                try {
                  setLineNumber(146)    // compilenode identifier;
                  onSelf = true;
                  var call91 = callmethod(this, "removeAll()ifAbsent", [1, 1], var_v, var_action);
                  return call91;
                } catch(e) {
                  if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                  } else {
                    throw e;
                  }
                }
              }
              func90.paramCounts = [
                  0,
                  1,
              ];
              func90.variableArities = [
                  true,
                  false,
              ];
              obj4.methods["remove()ifAbsent"] = func90;
              func90.definitionLine = 145;
              func90.definitionModule = "natList";
              var func92 = function(argcv) {    // method removeAll(1)
                var curarg = 1;
                var var_vs = arguments[curarg];
                curarg++;
                if (argcv[0] != 1)
                  callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for removeAll(1)"));
                setModuleName("natList");
                var returnTarget = invocationCount;
                invocationCount++;
                try {
                  setLineNumber(151)    // compilenode block;
                  var block93 = new GraceBlock(this, 151, 0);
                  block93.real = function() {
                    sourceObject = this;
                    var string94 = new GraceString("object not in list");
                    var call95 = callmethod(Grace_prelude, "NoSuchObject", [0]);
                    var call96 = callmethod(call95,"raise", [1], string94);
                    return call96;
                  };
                  onSelf = true;
                  var call97 = callmethod(this, "removeAll()ifAbsent", [1, 1], var_vs, block93);
                  return call97;
                } catch(e) {
                  if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                  } else {
                    throw e;
                  }
                }
              }
              func92.paramCounts = [
                  1,
              ];
              func92.variableArities = [
                  false,
              ];
              obj4.methods["removeAll"] = func92;
              func92.definitionLine = 150;
              func92.definitionModule = "natList";
              var func98 = function(argcv) {    // method removeAll(1)ifAbsent(1)
                var curarg = 1;
                var var_vs = arguments[curarg];
                curarg++;
                if (argcv[0] != 1)
                  callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for removeAll (arg list 1) of removeAll(1)ifAbsent(1)"));
                var var_action = arguments[curarg];
                curarg++;
                if (argcv[1] != 1)
                  callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for ifAbsent (arg list 2) of removeAll(1)ifAbsent(1)"));
                setModuleName("natList");
                var returnTarget = invocationCount;
                invocationCount++;
                try {
                  setLineNumber(156)    // compilenode block;
                  var block99 = new GraceBlock(this, 156, 1);
                  block99.real = function(var_each) {
                    sourceObject = this;
                    setLineNumber(157)    // compilenode block;
                    var block100 = new GraceBlock(this, 157, 0);
                    block100.real = function() {
                      sourceObject = this;
                      var call101 = callmethod(var_action,"apply", [0]);
                      throw new ReturnException(call101, returnTarget);
                      return undefined;
                    };
                    onSelf = true;
                    var call102 = callmethod(this, "indexOf()ifAbsent", [1, 1], var_each, block100);
                    var var_ix = call102;
                    setLineNumber(158)    // compilenode identifier;
                    onSelf = true;
                    var call103 = callmethod(this, "removeAt", [1], var_ix);
                    return call103;
                  };
                  var call104 = callmethod(Grace_prelude, "for()do", [1, 1], var_vs, block99);
                  setLineNumber(160)    // compilenode identifier;
                  return this;
                } catch(e) {
                  if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                  } else {
                    throw e;
                  }
                }
              }
              func98.paramCounts = [
                  1,
                  1,
              ];
              func98.variableArities = [
                  false,
                  false,
              ];
              obj4.methods["removeAll()ifAbsent"] = func98;
              func98.definitionLine = 155;
              func98.definitionModule = "natList";
              var func105 = function(argcv) {    // method pop
                var curarg = 1;
                if (argcv[0] != 0)
                  callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for pop"));
                setModuleName("natList");
                var returnTarget = invocationCount;
                invocationCount++;
                try {
                  setLineNumber(164)    // compilenode call;
                  onSelf = true;
                  var call106 = callmethod(this, "removeLast", [0]);
                  return call106;
                } catch(e) {
                  if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                  } else {
                    throw e;
                  }
                }
              }
              func105.paramCounts = [
                  0,
              ];
              func105.variableArities = [
                  false,
              ];
              obj4.methods["pop"] = func105;
              func105.definitionLine = 164;
              func105.definitionModule = "natList";
              var func107 = function(argcv) {    // method reversed
                var curarg = 1;
                if (argcv[0] != 0)
                  callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for reversed"));
                setModuleName("natList");
                var returnTarget = invocationCount;
                invocationCount++;
                try {
                  setLineNumber(167)    // compilenode call;
                  var call108 = callmethod(superDepth, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call109 = callmethod(call108, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call110 = callmethod(call109, "list", [0]);
                  var call111 = callmethod(call110,"empty", [0]);
                  var var_result = call111;
                  setLineNumber(168)    // compilenode block;
                  var block112 = new GraceBlock(this, 168, 1);
                  block112.real = function(var_each) {
                    sourceObject = this;
                    var call113 = callmethod(var_result,"addFirst", [1], var_each);
                    return call113;
                  };
                  onSelf = true;
                  var call114 = callmethod(this, "do", [1], block112);
                  setLineNumber(169)    // compilenode identifier;
                  return var_result;
                } catch(e) {
                  if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                  } else {
                    throw e;
                  }
                }
              }
              func107.paramCounts = [
                  0,
              ];
              func107.variableArities = [
                  false,
              ];
              obj4.methods["reversed"] = func107;
              func107.definitionLine = 166;
              func107.definitionModule = "natList";
              var func115 = function(argcv) {    // method reverse
                var curarg = 1;
                if (argcv[0] != 0)
                  callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for reverse"));
                setModuleName("natList");
                var returnTarget = invocationCount;
                invocationCount++;
                try {
                  setLineNumber(172)    // compilenode call;
                  onSelf = true;
                  var call116 = callmethod(this, "size", [0]);
                  var var_hiIx = call116;
                  setLineNumber(173)    // compilenode num;
                  var var_loIx = new GraceNum(1);
                  setLineNumber(174)    // compilenode block;
                  var block117 = new GraceBlock(this, 174, 0);
                  block117.real = function() {
                    sourceObject = this;
                    var opresult120 = callmethod(var_loIx, "<", [1], var_hiIx);
                    return opresult120;
                  };
                  var block121 = new GraceBlock(this, 174, 0);
                  block121.real = function() {
                    sourceObject = this;
                    setLineNumber(175)    // compilenode identifier;
                    onSelf = true;
                    var call122 = callmethod(this, "at", [1], var_hiIx);
                    var var_hiVal = call122;
                    setLineNumber(176)    // compilenode identifier;
                    onSelf = true;
                    var call123 = callmethod(this, "at", [1], var_loIx);
                    onSelf = true;
                    var call124 = callmethod(this, "at()put", [1, 1], var_hiIx, call123);
                    setLineNumber(177)    // compilenode identifier;
                    onSelf = true;
                    var call125 = callmethod(this, "at()put", [1, 1], var_loIx, var_hiVal);
                    setLineNumber(178)    // compilenode identifier;
                    var diff128 = callmethod(var_hiIx, "-", [1], new GraceNum(1));
                    var_hiIx = diff128;
                    setLineNumber(179)    // compilenode identifier;
                    var opresult131 = callmethod(var_loIx, "+", [1], new GraceNum(1));
                    var_loIx = opresult131;
                    return opresult131;
                  };
                  var call132 = callmethod(Grace_prelude, "while()do", [1, 1], block117, block121);
                  setLineNumber(181)    // compilenode identifier;
                  return this;
                } catch(e) {
                  if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                  } else {
                    throw e;
                  }
                }
              }
              func115.paramCounts = [
                  0,
              ];
              func115.variableArities = [
                  false,
              ];
              obj4.methods["reverse"] = func115;
              func115.definitionLine = 171;
              func115.definitionModule = "natList";
              var func133 = function(argcv) {    // method ++(1)
                var curarg = 1;
                var var_o = arguments[curarg];
                curarg++;
                if (argcv[0] != 1)
                  callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for ++(1)"));
                setModuleName("natList");
                var returnTarget = invocationCount;
                invocationCount++;
                try {
                  setLineNumber(185)    // compilenode call;
                  var call134 = callmethod(superDepth, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call135 = callmethod(call134, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call136 = callmethod(call135, "list", [0]);
                  var call137 = callmethod(call136,"withAll", [1], this);
                  var var_l = call137;
                  setLineNumber(186)    // compilenode identifier;
                  var call138 = callmethod(var_l,"addAll", [1], var_o);
                  return call138;
                } catch(e) {
                  if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                  } else {
                    throw e;
                  }
                }
              }
              func133.paramCounts = [
                  1,
              ];
              func133.variableArities = [
                  false,
              ];
              obj4.methods["++"] = func133;
              func133.definitionLine = 184;
              func133.definitionModule = "natList";
              var func139 = function(argcv) {    // method asString
                var curarg = 1;
                if (argcv[0] != 0)
                  callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for asString"));
                setModuleName("natList");
                var returnTarget = invocationCount;
                invocationCount++;
                try {
                  setLineNumber(191)    // compilenode string;
                  var string140 = new GraceString("[");
                  var var_s = string140;
                  setLineNumber(192)    // compilenode call;
                  onSelf = true;
                  var call141 = callmethod(this, "size", [0]);
                  var var_curSize = call141;
                  setLineNumber(193)    // compilenode num;
                  var opresult144 = callmethod(new GraceNum(1), "..", [1], var_curSize);
                  var block145 = new GraceBlock(this, 193, 1);
                  block145.real = function(var_i) {
                    sourceObject = this;
                    setLineNumber(194)    // compilenode identifier;
                    onSelf = true;
                    var call146 = callmethod(this, "at", [1], var_i);
                    var call147 = callmethod(call146,"asString", [0]);
                    var opresult150 = callmethod(var_s, "++", [1], call147);
                    var_s = opresult150;
                    var if151 = GraceDone;
                    setLineNumber(195)    // compilenode identifier;
                    var opresult154 = callmethod(var_i, "<", [1], var_curSize);
                    if (Grace_isTrue(opresult154)) {
                      var string155 = new GraceString(",");
                      var opresult158 = callmethod(var_s, "++", [1], string155);
                      var_s = opresult158;
                      if151 = opresult158;
                    }
                    return if151;
                  };
                  var call159 = callmethod(Grace_prelude, "for()do", [1, 1], opresult144, block145);
                  setLineNumber(197)    // compilenode string;
                  var string160 = new GraceString("]");
                  var opresult163 = callmethod(var_s, "++", [1], string160);
                  return opresult163;
                } catch(e) {
                  if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                  } else {
                    throw e;
                  }
                }
              }
              func139.paramCounts = [
                  0,
              ];
              func139.variableArities = [
                  false,
              ];
              obj4.methods["asString"] = func139;
              func139.definitionLine = 190;
              func139.definitionModule = "natList";
              var func164 = function(argcv) {    // method extend(1)
                var curarg = 1;
                var var_l = arguments[curarg];
                curarg++;
                if (argcv[0] != 1)
                  callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for extend(1)"));
                setModuleName("natList");
                var returnTarget = invocationCount;
                invocationCount++;
                try {
                  setLineNumber(201)    // compilenode identifier;
                  onSelf = true;
                  var call165 = callmethod(this, "addAll", [1], var_l);
                  return var_done;
                } catch(e) {
                  if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                  } else {
                    throw e;
                  }
                }
              }
              func164.paramCounts = [
                  1,
              ];
              func164.variableArities = [
                  false,
              ];
              obj4.methods["extend"] = func164;
              func164.definitionLine = 201;
              func164.definitionModule = "natList";
              var func166 = function(argcv) {    // method contains(1)
                var curarg = 1;
                var var_element = arguments[curarg];
                curarg++;
                if (argcv[0] != 1)
                  callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for contains(1)"));
                setModuleName("natList");
                var returnTarget = invocationCount;
                invocationCount++;
                try {
                  setLineNumber(205)    // compilenode block;
                  var block167 = new GraceBlock(this, 205, 1);
                  block167.real = function(var_each) {
                    sourceObject = this;
                    var if168 = GraceDone;
                    var opresult171 = callmethod(var_each, "==", [1], var_element);
                    if (Grace_isTrue(opresult171)) {
                      throw new ReturnException(GraceTrue, returnTarget);
                      if168 = undefined;
                    }
                    return if168;
                  };
                  onSelf = true;
                  var call172 = callmethod(this, "do", [1], block167);
                  setLineNumber(206)    // compilenode identifier;
                    return GraceFalse
                  return undefined;
                } catch(e) {
                  if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                  } else {
                    throw e;
                  }
                }
              }
              func166.paramCounts = [
                  1,
              ];
              func166.variableArities = [
                  false,
              ];
              obj4.methods["contains"] = func166;
              func166.definitionLine = 204;
              func166.definitionModule = "natList";
              var func173 = function(argcv) {    // method do(1)
                var curarg = 1;
                var var_block1 = arguments[curarg];
                curarg++;
                if (argcv[0] != 1)
                  callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for do(1)"));
                setModuleName("natList");
                var returnTarget = invocationCount;
                invocationCount++;
                try {
                  setLineNumber(211)    // compilenode num;
                  var var_i = new GraceNum(1);
                  setLineNumber(212)    // compilenode call;
                  onSelf = true;
                  var call174 = callmethod(this, "size", [0]);
                  var var_curSize = call174;
                  setLineNumber(213)    // compilenode block;
                  var block175 = new GraceBlock(this, 213, 0);
                  block175.real = function() {
                    sourceObject = this;
                    var opresult178 = callmethod(var_i, "<=", [1], var_curSize);
                    return opresult178;
                  };
                  var block179 = new GraceBlock(this, 213, 0);
                  block179.real = function() {
                    sourceObject = this;
                    setLineNumber(214)    // compilenode identifier;
                    onSelf = true;
                    var call180 = callmethod(this, "at", [1], var_i);
                    var call181 = callmethod(var_block1,"apply", [1], call180);
                    setLineNumber(215)    // compilenode identifier;
                    var opresult184 = callmethod(var_i, "+", [1], new GraceNum(1));
                    var_i = opresult184;
                    return opresult184;
                  };
                  var call185 = callmethod(Grace_prelude, "while()do", [1, 1], block175, block179);
                  return call185;
                } catch(e) {
                  if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                  } else {
                    throw e;
                  }
                }
              }
              func173.paramCounts = [
                  1,
              ];
              func173.variableArities = [
                  false,
              ];
              obj4.methods["do"] = func173;
              func173.definitionLine = 210;
              func173.definitionModule = "natList";
              var func186 = function(argcv) {    // method ==(1)
                var curarg = 1;
                var var_other = arguments[curarg];
                curarg++;
                if (argcv[0] != 1)
                  callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for ==(1)"));
                setModuleName("natList");
                var returnTarget = invocationCount;
                invocationCount++;
                try {
                  setLineNumber(221)    // compilenode identifier;
                  var cases187 = [];
                  setLineNumber(222)    // compilenode block;
                  var block188 = new GraceBlock(this, 222, 1);
                  setLineNumber(0)    // compilenode string;
                  var string189 = new GraceString("o");
                  var call190 = callmethod(Grace_prelude, "VariablePattern", [0]);
                  var call191 = callmethod(call190,"new", [1], string189);
                  setLineNumber(222)    // compilenode call;
                  var call192 = callmethod(Grace_prelude, "Sequence", [0]);
                  setLineNumber(0)    // compilenode call;
                  var call193 = callmethod(Grace_prelude, "AndPattern", [0]);
                  var call194 = callmethod(call193,"new", [2], call191, call192);
                  block188.pattern = call194;
                  block188.real = function(var_o) {
                    sourceObject = this;
                    var if195 = GraceDone;
                    setLineNumber(223)    // compilenode identifier;
                    var call196 = callmethod(var_o,"size", [0]);
                    onSelf = true;
                    var call198 = callmethod(this, "size", [0]);
                    var opresult200 = callmethod(call198, "!=", [1], call196);
                    if (Grace_isTrue(opresult200)) {
                      throw new ReturnException(GraceFalse, returnTarget);
                      if195 = undefined;
                    }
                    setLineNumber(224)    // compilenode block;
                    var block201 = new GraceBlock(this, 224, 1);
                    block201.real = function(var_ix) {
                      sourceObject = this;
                      var if202 = GraceDone;
                      setLineNumber(225)    // compilenode identifier;
                      var call203 = callmethod(var_o,"at", [1], var_ix);
                      onSelf = true;
                      var call205 = callmethod(this, "at", [1], var_ix);
                      var opresult207 = callmethod(call205, "!=", [1], call203);
                      if (Grace_isTrue(opresult207)) {
                        setLineNumber(226)    // compilenode identifier;
                        throw new ReturnException(GraceFalse, returnTarget);
                        if202 = undefined;
                      }
                      return if202;
                    };
                    setLineNumber(224)    // compilenode call;
                    onSelf = true;
                    var call208 = callmethod(this, "indices", [0]);
                    var call209 = callmethod(call208,"do", [1], block201);
                    setLineNumber(229)    // compilenode identifier;
                    throw new ReturnException(GraceTrue, returnTarget);
                    return undefined;
                  };
                  cases187.push(block188);
                  setLineNumber(231)    // compilenode block;
                  var block210 = new GraceBlock(this, 231, 1);
                  block210.real = function(var___95____95__0) {
                    sourceObject = this;
                    setLineNumber(232)    // compilenode identifier;
                    throw new ReturnException(GraceFalse, returnTarget);
                    return undefined;
                  };
                  cases187.push(block210);
                  setLineNumber(231)    // compilematchcase;
                  var matchres187 = matchCase(var_other,cases187,false);
                  setModuleName("natList");
                  return matchres187;
                } catch(e) {
                  if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                  } else {
                    throw e;
                  }
                }
              }
              func186.paramCounts = [
                  1,
              ];
              func186.variableArities = [
                  false,
              ];
              obj4.methods["=="] = func186;
              func186.definitionLine = 220;
              func186.definitionModule = "natList";
              var func211 = function(argcv) {    // method iterator
                var curarg = 1;
                if (argcv[0] != 0)
                  callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for iterator"));
                setModuleName("natList");
                var returnTarget = invocationCount;
                invocationCount++;
                try {
                  setLineNumber(238)    // compilenode object;
                  var obj212 = Grace_allocObject();
                  obj212.definitionModule = "natList";
                  obj212.definitionLine = 238;
                  obj212.outer = this;
                  var reader_natList_outer213 = function() {
                    return this.outer;
                  }
                  obj212.methods["outer"] = reader_natList_outer213;
                  var obj_init_212 = function () {
                    var origSuperDepth = superDepth;
                    superDepth = obj212;
                    var func214 = function(argcv) {    // method asDebugString
                      var curarg = 1;
                      if (argcv[0] != 0)
                        callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for asDebugString"));
                      setModuleName("natList");
                      var returnTarget = invocationCount;
                      invocationCount++;
                      try {
                        setLineNumber(241)    // compilenode string;
                        var string215 = new GraceString("\u27eb");
                        onSelf = true;
                        var call217 = callmethod(this, "idx", [0]);
                        var string219 = new GraceString("\u27ea");
                        onSelf = true;
                        var call221 = callmethod(this, "asString", [0]);
                        var string223 = new GraceString("");
                        var opresult225 = callmethod(string223, "++", [1], call221);
                        var opresult227 = callmethod(opresult225, "++", [1], string219);
                        var opresult229 = callmethod(opresult227, "++", [1], call217);
                        var opresult231 = callmethod(opresult229, "++", [1], string215);
                        return opresult231;
                      } catch(e) {
                        if ((e.exctype == 'return') && (e.target == returnTarget)) {
                          return e.returnvalue;
                        } else {
                          throw e;
                        }
                      }
                    }
                    func214.paramCounts = [
                        0,
                    ];
                    func214.variableArities = [
                        false,
                    ];
                    obj212.methods["asDebugString"] = func214;
                    func214.definitionLine = 241;
                    func214.definitionModule = "natList";
                    var func232 = function(argcv) {    // method asString
                      var curarg = 1;
                      if (argcv[0] != 0)
                        callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for asString"));
                      setModuleName("natList");
                      var returnTarget = invocationCount;
                      invocationCount++;
                      try {
                        setLineNumber(242)    // compilenode string;
                        var string233 = new GraceString("aListIterator");
                        return string233;
                      } catch(e) {
                        if ((e.exctype == 'return') && (e.target == returnTarget)) {
                          return e.returnvalue;
                        } else {
                          throw e;
                        }
                      }
                    }
                    func232.paramCounts = [
                        0,
                    ];
                    func232.variableArities = [
                        false,
                    ];
                    obj212.methods["asString"] = func232;
                    func232.definitionLine = 242;
                    func232.definitionModule = "natList";
                    var func234 = function(argcv) {    // method havemore
                      var curarg = 1;
                      if (argcv[0] != 0)
                        callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for havemore"));
                      setModuleName("natList");
                      var returnTarget = invocationCount;
                      invocationCount++;
                      try {
                        setLineNumber(243)    // compilenode call;
                        var call235 = callmethod(superDepth, "outer", [0]);
                        onOuter = true;
                        onSelf = true;
                        var call236 = callmethod(call235, "size", [0]);
                        onSelf = true;
                        var call238 = callmethod(this, "idx", [0]);
                        var opresult240 = callmethod(call238, "<=", [1], call236);
                        return opresult240;
                      } catch(e) {
                        if ((e.exctype == 'return') && (e.target == returnTarget)) {
                          return e.returnvalue;
                        } else {
                          throw e;
                        }
                      }
                    }
                    func234.paramCounts = [
                        0,
                    ];
                    func234.variableArities = [
                        false,
                    ];
                    obj212.methods["havemore"] = func234;
                    func234.definitionLine = 243;
                    func234.definitionModule = "natList";
                    var func241 = function(argcv) {    // method hasNext
                      var curarg = 1;
                      if (argcv[0] != 0)
                        callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for hasNext"));
                      setModuleName("natList");
                      var returnTarget = invocationCount;
                      invocationCount++;
                      try {
                        setLineNumber(244)    // compilenode call;
                        var call242 = callmethod(superDepth, "outer", [0]);
                        onOuter = true;
                        onSelf = true;
                        var call243 = callmethod(call242, "size", [0]);
                        onSelf = true;
                        var call245 = callmethod(this, "idx", [0]);
                        var opresult247 = callmethod(call245, "<=", [1], call243);
                        return opresult247;
                      } catch(e) {
                        if ((e.exctype == 'return') && (e.target == returnTarget)) {
                          return e.returnvalue;
                        } else {
                          throw e;
                        }
                      }
                    }
                    func241.paramCounts = [
                        0,
                    ];
                    func241.variableArities = [
                        false,
                    ];
                    obj212.methods["hasNext"] = func241;
                    func241.definitionLine = 244;
                    func241.definitionModule = "natList";
                    var func248 = function(argcv) {    // method next
                      var curarg = 1;
                      if (argcv[0] != 0)
                        callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for next"));
                      setModuleName("natList");
                      var returnTarget = invocationCount;
                      invocationCount++;
                      try {
                        var if249 = GraceDone;
                        setLineNumber(246)    // compilenode call;
                        var call250 = callmethod(superDepth, "outer", [0]);
                        onOuter = true;
                        onSelf = true;
                        var call251 = callmethod(call250, "size", [0]);
                        onSelf = true;
                        var call253 = callmethod(this, "idx", [0]);
                        var opresult255 = callmethod(call253, ">", [1], call251);
                        if (Grace_isTrue(opresult255)) {
                          var string256 = new GraceString("on list");
                          var call257 = callmethod(Grace_prelude, "Exhausted", [0]);
                          var call258 = callmethod(call257,"raise", [1], string256);
                          if249 = call258;
                        }
                        setLineNumber(247)    // compilenode call;
                        onSelf = true;
                        var call259 = callmethod(this, "idx", [0]);
                        var call260 = callmethod(superDepth, "outer", [0]);
                        onOuter = true;
                        onSelf = true;
                        var call261 = callmethod(call260, "at", [1], call259);
                        var var_ret = call261;
                        setLineNumber(248)    // compilenode call;
                        onSelf = true;
                        var call263 = callmethod(this, "idx", [0]);
                        var opresult265 = callmethod(call263, "+", [1], new GraceNum(1));
                        onSelf = true;
                        var call266 = callmethod(this, "idx:=", [1], opresult265);
                        setLineNumber(249)    // compilenode identifier;
                        return var_ret;
                      } catch(e) {
                        if ((e.exctype == 'return') && (e.target == returnTarget)) {
                          return e.returnvalue;
                        } else {
                          throw e;
                        }
                      }
                    }
                    func248.paramCounts = [
                        0,
                    ];
                    func248.variableArities = [
                        false,
                    ];
                    obj212.methods["next"] = func248;
                    func248.definitionLine = 245;
                    func248.definitionModule = "natList";
                    sourceObject = obj212;
                    setLineNumber(239)    // compilenode call;
                    var call267 = callmethod(Grace_prelude, "iterable", [0]);
                    var call268 = callmethod(call267,"trait()object", [0, 1], this);
                    obj212.superobj = call268;
                    obj212._value = call268._value;
                    sourceObject = obj212;
                    setLineNumber(240)    // compilenode num;
                    obj212.data["idx"] = new GraceNum(1);
                    var reader_natList_idx269 = function() {
                      return this.data["idx"];
                    }
                    obj212.methods["idx"] = reader_natList_idx269;
                    obj212.data["idx"] = new GraceNum(1);
                    var writer_natList_idx269 = function(argcv, o) {
                      this.data["idx"] = o;
                    }
                    obj212.methods["idx:="] = writer_natList_idx269;
                    reader_natList_idx269.confidential = true;
                    writer_natList_idx269.confidential = true;
                    obj212.mutable = true;
                    sourceObject = obj212;
                    sourceObject = obj212;
                    sourceObject = obj212;
                    sourceObject = obj212;
                    sourceObject = obj212;
                    superDepth = origSuperDepth;
                  }
                  obj_init_212.apply(obj212, []);
                  return obj212;
                } catch(e) {
                  if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                  } else {
                    throw e;
                  }
                }
              }
              func211.paramCounts = [
                  0,
              ];
              func211.variableArities = [
                  false,
              ];
              obj4.methods["iterator"] = func211;
              func211.definitionLine = 237;
              func211.definitionModule = "natList";
                var func270 = function(argcv) {    // method iterator()object
                  var curarg = 1;
                  var inheritingObject = arguments[curarg++];
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    var obj271 = Grace_allocObject();
                    obj271.definitionModule = "natList";
                    obj271.definitionLine = 238;
                    var inho271 = inheritingObject;
                    while (inho271.superobj) inho271 = inho271.superobj;
                    inho271.superobj = obj271;
                    obj271.data = inheritingObject.data;
                    obj271.outer = this;
                    var reader_natList_outer272 = function() {
                      return this.outer;
                    }
                    obj271.methods["outer"] = reader_natList_outer272;
                    var obj_init_271 = function () {
                      var origSuperDepth = superDepth;
                      superDepth = obj271;
                      var func273 = function(argcv) {    // method asDebugString
                        var curarg = 1;
                        if (argcv[0] != 0)
                          callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for asDebugString"));
                        setModuleName("natList");
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                          setLineNumber(241)    // compilenode string;
                          var string274 = new GraceString("\u27eb");
                          onSelf = true;
                          var call276 = callmethod(this, "idx", [0]);
                          var string278 = new GraceString("\u27ea");
                          onSelf = true;
                          var call280 = callmethod(this, "asString", [0]);
                          var string282 = new GraceString("");
                          var opresult284 = callmethod(string282, "++", [1], call280);
                          var opresult286 = callmethod(opresult284, "++", [1], string278);
                          var opresult288 = callmethod(opresult286, "++", [1], call276);
                          var opresult290 = callmethod(opresult288, "++", [1], string274);
                          return opresult290;
                        } catch(e) {
                          if ((e.exctype == 'return') && (e.target == returnTarget)) {
                            return e.returnvalue;
                          } else {
                            throw e;
                          }
                        }
                      }
                      func273.paramCounts = [
                          0,
                      ];
                      func273.variableArities = [
                          false,
                      ];
                      obj271.methods["asDebugString"] = func273;
                      func273.definitionLine = 241;
                      func273.definitionModule = "natList";
                      var func291 = function(argcv) {    // method asString
                        var curarg = 1;
                        if (argcv[0] != 0)
                          callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for asString"));
                        setModuleName("natList");
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                          setLineNumber(242)    // compilenode string;
                          var string292 = new GraceString("aListIterator");
                          return string292;
                        } catch(e) {
                          if ((e.exctype == 'return') && (e.target == returnTarget)) {
                            return e.returnvalue;
                          } else {
                            throw e;
                          }
                        }
                      }
                      func291.paramCounts = [
                          0,
                      ];
                      func291.variableArities = [
                          false,
                      ];
                      obj271.methods["asString"] = func291;
                      func291.definitionLine = 242;
                      func291.definitionModule = "natList";
                      var func293 = function(argcv) {    // method havemore
                        var curarg = 1;
                        if (argcv[0] != 0)
                          callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for havemore"));
                        setModuleName("natList");
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                          setLineNumber(243)    // compilenode call;
                          var call294 = callmethod(superDepth, "outer", [0]);
                          onOuter = true;
                          onSelf = true;
                          var call295 = callmethod(call294, "size", [0]);
                          onSelf = true;
                          var call297 = callmethod(this, "idx", [0]);
                          var opresult299 = callmethod(call297, "<=", [1], call295);
                          return opresult299;
                        } catch(e) {
                          if ((e.exctype == 'return') && (e.target == returnTarget)) {
                            return e.returnvalue;
                          } else {
                            throw e;
                          }
                        }
                      }
                      func293.paramCounts = [
                          0,
                      ];
                      func293.variableArities = [
                          false,
                      ];
                      obj271.methods["havemore"] = func293;
                      func293.definitionLine = 243;
                      func293.definitionModule = "natList";
                      var func300 = function(argcv) {    // method hasNext
                        var curarg = 1;
                        if (argcv[0] != 0)
                          callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for hasNext"));
                        setModuleName("natList");
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                          setLineNumber(244)    // compilenode call;
                          var call301 = callmethod(superDepth, "outer", [0]);
                          onOuter = true;
                          onSelf = true;
                          var call302 = callmethod(call301, "size", [0]);
                          onSelf = true;
                          var call304 = callmethod(this, "idx", [0]);
                          var opresult306 = callmethod(call304, "<=", [1], call302);
                          return opresult306;
                        } catch(e) {
                          if ((e.exctype == 'return') && (e.target == returnTarget)) {
                            return e.returnvalue;
                          } else {
                            throw e;
                          }
                        }
                      }
                      func300.paramCounts = [
                          0,
                      ];
                      func300.variableArities = [
                          false,
                      ];
                      obj271.methods["hasNext"] = func300;
                      func300.definitionLine = 244;
                      func300.definitionModule = "natList";
                      var func307 = function(argcv) {    // method next
                        var curarg = 1;
                        if (argcv[0] != 0)
                          callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for next"));
                        setModuleName("natList");
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                          var if308 = GraceDone;
                          setLineNumber(246)    // compilenode call;
                          var call309 = callmethod(superDepth, "outer", [0]);
                          onOuter = true;
                          onSelf = true;
                          var call310 = callmethod(call309, "size", [0]);
                          onSelf = true;
                          var call312 = callmethod(this, "idx", [0]);
                          var opresult314 = callmethod(call312, ">", [1], call310);
                          if (Grace_isTrue(opresult314)) {
                            var string315 = new GraceString("on list");
                            var call316 = callmethod(Grace_prelude, "Exhausted", [0]);
                            var call317 = callmethod(call316,"raise", [1], string315);
                            if308 = call317;
                          }
                          setLineNumber(247)    // compilenode call;
                          onSelf = true;
                          var call318 = callmethod(this, "idx", [0]);
                          var call319 = callmethod(superDepth, "outer", [0]);
                          onOuter = true;
                          onSelf = true;
                          var call320 = callmethod(call319, "at", [1], call318);
                          var var_ret = call320;
                          setLineNumber(248)    // compilenode call;
                          onSelf = true;
                          var call322 = callmethod(this, "idx", [0]);
                          var opresult324 = callmethod(call322, "+", [1], new GraceNum(1));
                          onSelf = true;
                          var call325 = callmethod(this, "idx:=", [1], opresult324);
                          setLineNumber(249)    // compilenode identifier;
                          return var_ret;
                        } catch(e) {
                          if ((e.exctype == 'return') && (e.target == returnTarget)) {
                            return e.returnvalue;
                          } else {
                            throw e;
                          }
                        }
                      }
                      func307.paramCounts = [
                          0,
                      ];
                      func307.variableArities = [
                          false,
                      ];
                      obj271.methods["next"] = func307;
                      func307.definitionLine = 245;
                      func307.definitionModule = "natList";
                      sourceObject = obj271;
                      setLineNumber(239)    // compilenode call;
                      var call326 = callmethod(Grace_prelude, "iterable", [0]);
                      var call327 = callmethod(call326,"trait()object", [0, 1], this);
                      obj271.superobj = call327;
                      obj271._value = call327._value;
                      sourceObject = obj271;
                      setLineNumber(240)    // compilenode num;
                      obj271.data["idx"] = new GraceNum(1);
                      var reader_natList_idx328 = function() {
                        return this.data["idx"];
                      }
                      obj271.methods["idx"] = reader_natList_idx328;
                      obj271.data["idx"] = new GraceNum(1);
                      var writer_natList_idx328 = function(argcv, o) {
                        this.data["idx"] = o;
                      }
                      obj271.methods["idx:="] = writer_natList_idx328;
                      reader_natList_idx328.confidential = true;
                      writer_natList_idx328.confidential = true;
                      obj271.mutable = true;
                      sourceObject = obj271;
                      sourceObject = obj271;
                      sourceObject = obj271;
                      sourceObject = obj271;
                      sourceObject = obj271;
                      superDepth = origSuperDepth;
                    }
                    obj_init_271.apply(inheritingObject, []);
                    return obj271;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                obj4.methods["iterator()object"] = func270;
              var func329 = function(argcv) {    // method values
                var curarg = 1;
                if (argcv[0] != 0)
                  callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for values"));
                setModuleName("natList");
                var returnTarget = invocationCount;
                invocationCount++;
                try {
                  setLineNumber(256)    // compilenode call;
                  onSelf = true;
                  var call330 = callmethod(this, "iterator", [0]);
                  return call330;
                } catch(e) {
                  if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                  } else {
                    throw e;
                  }
                }
              }
              func329.paramCounts = [
                  0,
              ];
              func329.variableArities = [
                  false,
              ];
              obj4.methods["values"] = func329;
              func329.definitionLine = 255;
              func329.definitionModule = "natList";
              var func331 = function(argcv) {    // method keys
                var curarg = 1;
                if (argcv[0] != 0)
                  callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for keys"));
                setModuleName("natList");
                var returnTarget = invocationCount;
                invocationCount++;
                try {
                  setLineNumber(261)    // compilenode call;
                  onSelf = true;
                  var call332 = callmethod(this, "indices", [0]);
                  var call333 = callmethod(call332,"iterator", [0]);
                  return call333;
                } catch(e) {
                  if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                  } else {
                    throw e;
                  }
                }
              }
              func331.paramCounts = [
                  0,
              ];
              func331.variableArities = [
                  false,
              ];
              obj4.methods["keys"] = func331;
              func331.definitionLine = 260;
              func331.definitionModule = "natList";
              var func334 = function(argcv) {    // method keysAndValuesDo(1)
                var curarg = 1;
                var var_block2 = arguments[curarg];
                curarg++;
                if (argcv[0] != 1)
                  callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for keysAndValuesDo(1)"));
                setModuleName("natList");
                var returnTarget = invocationCount;
                invocationCount++;
                try {
                  setLineNumber(266)    // compilenode call;
                  onSelf = true;
                  var call335 = callmethod(this, "size", [0]);
                  var var_curSize = call335;
                  setLineNumber(267)    // compilenode num;
                  var var_i = new GraceNum(1);
                  setLineNumber(268)    // compilenode block;
                  var block336 = new GraceBlock(this, 268, 0);
                  block336.real = function() {
                    sourceObject = this;
                    onSelf = true;
                    var call337 = callmethod(this, "size", [0]);
                    var opresult340 = callmethod(var_i, "<=", [1], call337);
                    return opresult340;
                  };
                  var block341 = new GraceBlock(this, 268, 0);
                  block341.real = function() {
                    sourceObject = this;
                    setLineNumber(269)    // compilenode identifier;
                    onSelf = true;
                    var call342 = callmethod(this, "at", [1], var_i);
                    var call343 = callmethod(var_block2,"apply", [2], var_i, call342);
                    setLineNumber(270)    // compilenode identifier;
                    var opresult346 = callmethod(var_i, "+", [1], new GraceNum(1));
                    var_i = opresult346;
                    return opresult346;
                  };
                  var call347 = callmethod(Grace_prelude, "while()do", [1, 1], block336, block341);
                  return call347;
                } catch(e) {
                  if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                  } else {
                    throw e;
                  }
                }
              }
              func334.paramCounts = [
                  1,
              ];
              func334.variableArities = [
                  false,
              ];
              obj4.methods["keysAndValuesDo"] = func334;
              func334.definitionLine = 265;
              func334.definitionModule = "natList";
              var func348 = function(argcv) {    // method sortBy(1)
                var curarg = 1;
                var var_sortBlock = arguments[curarg];
                curarg++;
                if (argcv[0] != 1)
                  callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for sortBy(1)"));
                setModuleName("natList");
                var returnTarget = invocationCount;
                invocationCount++;
                try {
                  setLineNumber(275)    // compilenode call;
                     // start native code from line 275
                  var result = GraceDone;
                  var compareFun = function compareFun(a, b) {
                      var res = callmethod(var_sortBlock, "apply", [2], a, b);
                      if (res.className == "number") return res._value;
                      throw new GraceExceptionPacket(TypeErrorObject,
                             new GraceString("sort block in list.sortBy method did not return a number"));
                  }
                  this.data.jsArray.sort(compareFun);
                  var nat349 = result;
                     // end native code insertion
                  setLineNumber(282)    // compilenode identifier;
                  return this;
                } catch(e) {
                  if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                  } else {
                    throw e;
                  }
                }
              }
              func348.paramCounts = [
                  1,
              ];
              func348.variableArities = [
                  false,
              ];
              obj4.methods["sortBy"] = func348;
              func348.definitionLine = 274;
              func348.definitionModule = "natList";
              var func350 = function(argcv) {    // method sort
                var curarg = 1;
                if (argcv[0] != 0)
                  callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for sort"));
                setModuleName("natList");
                var returnTarget = invocationCount;
                invocationCount++;
                try {
                  setLineNumber(287)    // compilenode block;
                  var block351 = new GraceBlock(this, 287, 2);
                  block351.real = function(var_l, var_r) {
                    sourceObject = this;
                    var if352 = GraceDone;
                    setLineNumber(288)    // compilenode identifier;
                    var opresult355 = callmethod(var_l, "==", [1], var_r);
                    if (Grace_isTrue(opresult355)) {
                      if352 = new GraceNum(0);
                    } else {
                      var if356 = GraceDone;
                      setLineNumber(289)    // compilenode identifier;
                      var opresult359 = callmethod(var_l, "<", [1], var_r);
                      if (Grace_isTrue(opresult359)) {
                        var call360 = callmethod(new GraceNum(1),"prefix-", [0]);
                        if356 = call360;
                      } else {
                        setLineNumber(290)    // compilenode num;
                        if356 = new GraceNum(1);
                      }
                      if352 = if356;
                    }
                    return if352;
                  };
                  onSelf = true;
                  var call361 = callmethod(this, "sortBy", [1], block351);
                  return call361;
                } catch(e) {
                  if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                  } else {
                    throw e;
                  }
                }
              }
              func350.paramCounts = [
                  0,
              ];
              func350.variableArities = [
                  false,
              ];
              obj4.methods["sort"] = func350;
              func350.definitionLine = 286;
              func350.definitionModule = "natList";
              var func362 = function(argcv) {    // method copySortedBy(1)
                var curarg = 1;
                var var_sortBlock = arguments[curarg];
                curarg++;
                if (argcv[0] != 1)
                  callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for copySortedBy(1)"));
                setModuleName("natList");
                var returnTarget = invocationCount;
                invocationCount++;
                try {
                  setLineNumber(294)    // compilenode call;
                  onSelf = true;
                  var call363 = callmethod(this, "copy", [0]);
                  var call364 = callmethod(call363,"sortBy", [1], var_sortBlock);
                  return call364;
                } catch(e) {
                  if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                  } else {
                    throw e;
                  }
                }
              }
              func362.paramCounts = [
                  1,
              ];
              func362.variableArities = [
                  false,
              ];
              obj4.methods["copySortedBy"] = func362;
              func362.definitionLine = 293;
              func362.definitionModule = "natList";
              var func365 = function(argcv) {    // method copySorted
                var curarg = 1;
                if (argcv[0] != 0)
                  callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for copySorted"));
                setModuleName("natList");
                var returnTarget = invocationCount;
                invocationCount++;
                try {
                  setLineNumber(297)    // compilenode call;
                  onSelf = true;
                  var call366 = callmethod(this, "copy", [0]);
                  var call367 = callmethod(call366,"sort", [0]);
                  return call367;
                } catch(e) {
                  if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                  } else {
                    throw e;
                  }
                }
              }
              func365.paramCounts = [
                  0,
              ];
              func365.variableArities = [
                  false,
              ];
              obj4.methods["copySorted"] = func365;
              func365.definitionLine = 296;
              func365.definitionModule = "natList";
              var func368 = function(argcv) {    // method copy
                var curarg = 1;
                if (argcv[0] != 0)
                  callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for copy"));
                setModuleName("natList");
                var returnTarget = invocationCount;
                invocationCount++;
                try {
                  setLineNumber(300)    // compilenode call;
                  var call369 = callmethod(superDepth, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call370 = callmethod(call369, "withAll", [1], this);
                  return call370;
                } catch(e) {
                  if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                  } else {
                    throw e;
                  }
                }
              }
              func368.paramCounts = [
                  0,
              ];
              func368.variableArities = [
                  false,
              ];
              obj4.methods["copy"] = func368;
              func368.definitionLine = 299;
              func368.definitionModule = "natList";
              sourceObject = obj4;
              setLineNumber(12)    // compilenode call;
              var call371 = callmethod(Grace_prelude, "collections", [0]);
              var call372 = callmethod(call371,"indexable", [0]);
              var call373 = callmethod(call372,"trait()object", [0, 1], this);
              obj4.superobj = call373;
              obj4._value = call373._value;
              sourceObject = obj4;
              setLineNumber(13)    // compilenode num;
              obj4.data["sz"] = new GraceNum(0);
              var reader_natList_sz374 = function() {
                return this.data["sz"];
              }
              obj4.methods["sz"] = reader_natList_sz374;
              obj4.data["sz"] = new GraceNum(0);
              var writer_natList_sz374 = function(argcv, o) {
                this.data["sz"] = o;
              }
              obj4.methods["sz:="] = writer_natList_sz374;
              reader_natList_sz374.confidential = true;
              writer_natList_sz374.confidential = true;
              obj4.mutable = true;
              sourceObject = obj4;
              setLineNumber(14)    // compilenode call;
                 // start native code from line 14
              var result = GraceDone;
              var result = [];
              var nat375 = result;
                 // end native code insertion
              obj4.data["jsArray"] = nat375;
              var reader_natList_jsArray376 = function() {
                return this.data["jsArray"];
              }
              obj4.methods["jsArray"] = reader_natList_jsArray376;
              obj4.data["jsArray"] = nat375;
              var writer_natList_jsArray376 = function(argcv, o) {
                this.data["jsArray"] = o;
              }
              obj4.methods["jsArray:="] = writer_natList_jsArray376;
              reader_natList_jsArray376.confidential = true;
              writer_natList_jsArray376.confidential = true;
              obj4.mutable = true;
              sourceObject = obj4;
              setLineNumber(15)    // compilenode block;
              var block377 = new GraceBlock(this, 15, 1);
              block377.real = function(var_each) {
                sourceObject = this;
                setLineNumber(16)    // compilenode call;
                   // start native code from line 16
                var result = GraceDone;
                this.data.jsArray.push(var_each);
                var nat378 = result;
                   // end native code insertion
                return nat378;
              };
              setLineNumber(15)    // compilenode identifier;
              var call379 = callmethod(var_a,"do", [1], block377);
              sourceObject = obj4;
              sourceObject = obj4;
              sourceObject = obj4;
              sourceObject = obj4;
              sourceObject = obj4;
              sourceObject = obj4;
              sourceObject = obj4;
              sourceObject = obj4;
              sourceObject = obj4;
              sourceObject = obj4;
              sourceObject = obj4;
              sourceObject = obj4;
              sourceObject = obj4;
              sourceObject = obj4;
              sourceObject = obj4;
              sourceObject = obj4;
              sourceObject = obj4;
              sourceObject = obj4;
              sourceObject = obj4;
              sourceObject = obj4;
              sourceObject = obj4;
              sourceObject = obj4;
              sourceObject = obj4;
              sourceObject = obj4;
              sourceObject = obj4;
              sourceObject = obj4;
              sourceObject = obj4;
              sourceObject = obj4;
              sourceObject = obj4;
              sourceObject = obj4;
              sourceObject = obj4;
              sourceObject = obj4;
              sourceObject = obj4;
              sourceObject = obj4;
              sourceObject = obj4;
              sourceObject = obj4;
              sourceObject = obj4;
              superDepth = origSuperDepth;
            }
            obj_init_4.apply(obj4, []);
            return obj4;
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func3.paramCounts = [
            1,
        ];
        func3.variableArities = [
            false,
        ];
        obj1.methods["withAll"] = func3;
        func3.definitionLine = 11;
        func3.definitionModule = "natList";
          var func380 = function(argcv) {    // method withAll(1)()object
            var curarg = 1;
            var var_a = arguments[curarg];
            curarg++;
            var inheritingObject = arguments[curarg++];
            var returnTarget = invocationCount;
            invocationCount++;
            try {
              var obj381 = Grace_allocObject();
              obj381.definitionModule = "natList";
              obj381.definitionLine = 11;
              var inho381 = inheritingObject;
              while (inho381.superobj) inho381 = inho381.superobj;
              inho381.superobj = obj381;
              obj381.data = inheritingObject.data;
              obj381.outer = this;
              var reader_natList_outer382 = function() {
                return this.outer;
              }
              obj381.methods["outer"] = reader_natList_outer382;
              var obj_init_381 = function () {
                var origSuperDepth = superDepth;
                superDepth = obj381;
                var func383 = function(argcv) {    // method boundsCheck(1)
                  var curarg = 1;
                  var var_n = arguments[curarg];
                  curarg++;
                  if (argcv[0] != 1)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for boundsCheck(1)"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(21)    // compilenode call;
                       // start native code from line 21
                    var result = GraceDone;
                    var ix = var_n._value;
                    if ((ix < 1) || (ix > this.data.jsArray.length)) {
                        var msg = "index " + ix + " out of bounds 1.." + this.data.jsArray.length;
                        var BoundsError = callmethod(Grace_prelude, "BoundsError", [0]);
                        callmethod(BoundsError,"raise", [1], new GraceString(msg));
                    }
                    var nat384 = result;
                       // end native code insertion
                    var if385 = GraceDone;
                    setLineNumber(27)    // compilenode call;
                    onSelf = true;
                    var call386 = callmethod(this, "size", [0]);
                    var opresult389 = callmethod(var_n, ">", [1], call386);
                    var opresult393 = callmethod(var_n, "<", [1], new GraceNum(1));
                    var opresult395 = callmethod(opresult393, "||", [1], opresult389);
                    if (Grace_isTrue(opresult395)) {
                      setLineNumber(28)    // compilenode string;
                      var string396 = new GraceString("");
                      onSelf = true;
                      var call398 = callmethod(this, "size", [0]);
                      var string400 = new GraceString(" out of bounds 1..");
                      var string403 = new GraceString("index ");
                      var opresult405 = callmethod(string403, "++", [1], var_n);
                      var opresult407 = callmethod(opresult405, "++", [1], string400);
                      var opresult409 = callmethod(opresult407, "++", [1], call398);
                      var opresult411 = callmethod(opresult409, "++", [1], string396);
                      var call412 = callmethod(Grace_prelude, "BoundsError", [0]);
                      var call413 = callmethod(call412,"raise", [1], opresult411);
                      if385 = call413;
                    }
                    return if385;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                  func383.confidential = true;
                func383.paramCounts = [
                    1,
                ];
                func383.variableArities = [
                    false,
                ];
                obj381.methods["boundsCheck"] = func383;
                func383.definitionLine = 20;
                func383.definitionModule = "natList";
                var func414 = function(argcv) {    // method size
                  var curarg = 1;
                  if (argcv[0] != 0)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for size"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(34)    // compilenode call;
                       // start native code from line 34
                    var result = GraceDone;
                    return new GraceNum(this.data.jsArray.length)
                    var nat415 = result;
                       // end native code insertion
                    setLineNumber(35)    // compilenode call;
                    onSelf = true;
                    var call416 = callmethod(this, "sz", [0]);
                    return call416;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func414.paramCounts = [
                    0,
                ];
                func414.variableArities = [
                    false,
                ];
                obj381.methods["size"] = func414;
                func414.definitionLine = 33;
                func414.definitionModule = "natList";
                var func417 = function(argcv) {    // method at(1)
                  var curarg = 1;
                  var var_n = arguments[curarg];
                  curarg++;
                  if (argcv[0] != 1)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for at(1)"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(40)    // compilenode call;
                       // start native code from line 40
                    var result = GraceDone;
                    var ix = var_n._value;
                    if ((ix < 1) || (ix > this.data.jsArray.length)) {
                        var msg = "index " + ix + " out of bounds 1.." + this.data.jsArray.length;
                        var BoundsError = callmethod(Grace_prelude, "BoundsError", [0]);
                        callmethod(BoundsError, "raise", [1], new GraceString(msg));
                    }
                    return this.data.jsArray[ix - 1];
                    var nat418 = result;
                       // end native code insertion
                    return nat418;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func417.paramCounts = [
                    1,
                ];
                func417.variableArities = [
                    false,
                ];
                obj381.methods["at"] = func417;
                func417.definitionLine = 39;
                func417.definitionModule = "natList";
                var func419 = function(argcv) {    // method [(1)
                  var curarg = 1;
                  var var_n = arguments[curarg];
                  curarg++;
                  if (argcv[0] != 1)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for [(1)"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(51)    // compilenode call;
                       // start native code from line 51
                    var result = GraceDone;
                    var ix = var_n._value;
                    if ((ix < 1) || (ix > this.data.jsArray.length)) {
                        var msg = "index " + ix + " out of bounds 1.." + this.data.jsArray.length;
                        var BoundsError = callmethod(Grace_prelude, "BoundsError", [0]);
                        callmethod(BoundsError, "raise", [1], new GraceString(msg));
                    }
                    return this.data.jsArray[ix - 1];
                    var nat420 = result;
                       // end native code insertion
                    return nat420;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func419.paramCounts = [
                    1,
                ];
                func419.variableArities = [
                    false,
                ];
                obj381.methods["[]"] = func419;
                func419.definitionLine = 50;
                func419.definitionModule = "natList";
                var func421 = function(argcv) {    // method at(1)put(1)
                  var curarg = 1;
                  var var_n = arguments[curarg];
                  curarg++;
                  if (argcv[0] != 1)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for at (arg list 1) of at(1)put(1)"));
                  var var_x = arguments[curarg];
                  curarg++;
                  if (argcv[1] != 1)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for put (arg list 2) of at(1)put(1)"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(62)    // compilenode call;
                       // start native code from line 62
                    var result = GraceDone;
                    var  ix = var_n._value;
                    if ((ix < 1) || (ix > this.data.jsArray.length + 1)) {
                        var msg = "index " + ix + " out of bounds 1.." + this.data.jsArray.length;
                        var BoundsError = callmethod(Grace_prelude, "BoundsError", [0]);
                        callmethod(BoundsError, "raise", [1], new GraceString(msg));
                    }
                    this.data.jsArray[ix-1] = var_x;
                    return this;
                    var nat422 = result;
                       // end native code insertion
                    return nat422;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func421.paramCounts = [
                    1,
                    1,
                ];
                func421.variableArities = [
                    false,
                    false,
                ];
                obj381.methods["at()put"] = func421;
                func421.definitionLine = 61;
                func421.definitionModule = "natList";
                var func423 = function(argcv) {    // method [:=(2)
                  var curarg = 1;
                  var var_n = arguments[curarg];
                  curarg++;
                  var var_x = arguments[curarg];
                  curarg++;
                  if (argcv[0] != 2)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for [:=(2)"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(73)    // compilenode call;
                       // start native code from line 73
                    var result = GraceDone;
                    var ix = var_n._value;
                    if ((ix < 1) || (ix > this.data.jsArray.length + 1)) {
                        var msg = "index " + ix + " out of bounds 1.." + this.data.jsArray.length;
                        var BoundsError = callmethod(Grace_prelude, "BoundsError", [0]);
                        callmethod(BoundsError, "raise", [1], new GraceString(msg));
                    }
                    this.data.jsArray[ix-1] = var_x;
                    return GraceDone;
                    var nat424 = result;
                       // end native code insertion
                    return nat424;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func423.paramCounts = [
                    2,
                ];
                func423.variableArities = [
                    false,
                ];
                obj381.methods["[]:="] = func423;
                func423.definitionLine = 72;
                func423.definitionModule = "natList";
                var func425 = function(argcv) {    // method add(0+)
                  var curarg = 1;
                  var var_sequenceClass = callmethod(Grace_prelude, "sequence", [0]);
                  var var_x_len = argcv[0] - 0;
                  var var_x_array = new GracePrimitiveArray(var_x_len);
                  for (var ix = 0; ix < var_x_len; ix++)
                    var_x_array._value[ix] = arguments[curarg++];
                  onSelf = true
                  var var_x = callmethod(var_sequenceClass, "fromPrimitiveArray", [2], var_x_array, new GraceNum(var_x_len));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    var if426 = GraceDone;
                    setLineNumber(84)    // compilenode identifier;
                    var call428 = callmethod(var_x,"size", [0]);
                    var opresult430 = callmethod(call428, "==", [1], new GraceNum(1));
                    if (Grace_isTrue(opresult430)) {
                      setLineNumber(85)    // compilenode call;
                         // start native code from line 85
                      var result = GraceDone;
                      var v = callmethod(var_x, "first", [0]);
                    this.data.jsArray.push(v);
                    return this;
                      var nat431 = result;
                         // end native code insertion
                      if426 = nat431;
                    }
                    setLineNumber(89)    // compilenode identifier;
                    onSelf = true;
                    var call432 = callmethod(this, "addAll", [1], var_x);
                    return call432;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func425.paramCounts = [
                    0,
                ];
                func425.variableArities = [
                    true,
                ];
                obj381.methods["add"] = func425;
                func425.definitionLine = 83;
                func425.definitionModule = "natList";
                var func433 = function(argcv) {    // method addAll(1)
                  var curarg = 1;
                  var var_l = arguments[curarg];
                  curarg++;
                  if (argcv[0] != 1)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for addAll(1)"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(93)    // compilenode block;
                    var block434 = new GraceBlock(this, 93, 1);
                    block434.real = function(var_each) {
                      sourceObject = this;
                      onSelf = true;
                      var call435 = callmethod(this, "push", [1], var_each);
                      return call435;
                    };
                    var call436 = callmethod(Grace_prelude, "for()do", [1, 1], var_l, block434);
                    setLineNumber(94)    // compilenode identifier;
                    return this;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func433.paramCounts = [
                    1,
                ];
                func433.variableArities = [
                    false,
                ];
                obj381.methods["addAll"] = func433;
                func433.definitionLine = 92;
                func433.definitionModule = "natList";
                var func437 = function(argcv) {    // method push(1)
                  var curarg = 1;
                  var var_x = arguments[curarg];
                  curarg++;
                  if (argcv[0] != 1)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for push(1)"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(98)    // compilenode call;
                       // start native code from line 98
                    var result = GraceDone;
                    this.data.jsArray.push(var_x);
                    return this;
                    var nat438 = result;
                       // end native code insertion
                    return nat438;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func437.paramCounts = [
                    1,
                ];
                func437.variableArities = [
                    false,
                ];
                obj381.methods["push"] = func437;
                func437.definitionLine = 97;
                func437.definitionModule = "natList";
                var func439 = function(argcv) {    // method addLast(0+)
                  var curarg = 1;
                  var var_sequenceClass = callmethod(Grace_prelude, "sequence", [0]);
                  var var_x_len = argcv[0] - 0;
                  var var_x_array = new GracePrimitiveArray(var_x_len);
                  for (var ix = 0; ix < var_x_len; ix++)
                    var_x_array._value[ix] = arguments[curarg++];
                  onSelf = true
                  var var_x = callmethod(var_sequenceClass, "fromPrimitiveArray", [2], var_x_array, new GraceNum(var_x_len));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(102)    // compilenode identifier;
                    onSelf = true;
                    var call440 = callmethod(this, "addAll", [1], var_x);
                    return call440;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func439.paramCounts = [
                    0,
                ];
                func439.variableArities = [
                    true,
                ];
                obj381.methods["addLast"] = func439;
                func439.definitionLine = 102;
                func439.definitionModule = "natList";
                var func441 = function(argcv) {    // method removeLast
                  var curarg = 1;
                  if (argcv[0] != 0)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for removeLast"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(106)    // compilenode call;
                    onSelf = true;
                    var call442 = callmethod(this, "size", [0]);
                    onSelf = true;
                    var call443 = callmethod(this, "at", [1], call442);
                    var var_result = call443;
                    setLineNumber(107)    // compilenode call;
                       // start native code from line 107
                    var result = GraceDone;
                    if (this.data.jsArray.length = 0) {
                        var msg = "index " + ix + " out of bounds 1.." + this.data.jsArray.length;
                        var BoundsError = callmethod(Grace_prelude, "BoundsError", [0]);
                        callmethod(BoundsError, "raise", [1], new GraceString(msg));
                    } else return this.data.jsArray.pop();
                    var nat444 = result;
                       // end native code insertion
                    return nat444;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func441.paramCounts = [
                    0,
                ];
                func441.variableArities = [
                    false,
                ];
                obj381.methods["removeLast"] = func441;
                func441.definitionLine = 105;
                func441.definitionModule = "natList";
                var func445 = function(argcv) {    // method addAllFirst(1)
                  var curarg = 1;
                  var var_l = arguments[curarg];
                  curarg++;
                  if (argcv[0] != 1)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for addAllFirst(1)"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(115)    // compilenode identifier;
                    var call446 = callmethod(var_l,"size", [0]);
                    var var_ix = call446;
                    setLineNumber(116)    // compilenode block;
                    var block447 = new GraceBlock(this, 116, 0);
                    block447.real = function() {
                      sourceObject = this;
                      var opresult450 = callmethod(var_ix, ">", [1], new GraceNum(0));
                      return opresult450;
                    };
                    var block451 = new GraceBlock(this, 116, 0);
                    block451.real = function() {
                      sourceObject = this;
                      setLineNumber(117)    // compilenode identifier;
                      var call452 = callmethod(var_l,"at", [1], var_ix);
                      var var_each = call452;
                      setLineNumber(118)    // compilenode identifier;
                      var diff455 = callmethod(var_ix, "-", [1], new GraceNum(1));
                      var_ix = diff455;
                      setLineNumber(119)    // compilenode call;
                         // start native code from line 119
                      var result = GraceDone;
                      this.data.jsArray.unshift(var_each);
                      var nat456 = result;
                         // end native code insertion
                      return nat456;
                    };
                    var call457 = callmethod(Grace_prelude, "while()do", [1, 1], block447, block451);
                    setLineNumber(121)    // compilenode identifier;
                    return this;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func445.paramCounts = [
                    1,
                ];
                func445.variableArities = [
                    false,
                ];
                obj381.methods["addAllFirst"] = func445;
                func445.definitionLine = 114;
                func445.definitionModule = "natList";
                var func458 = function(argcv) {    // method addFirst(0+)
                  var curarg = 1;
                  var var_sequenceClass = callmethod(Grace_prelude, "sequence", [0]);
                  var var_l_len = argcv[0] - 0;
                  var var_l_array = new GracePrimitiveArray(var_l_len);
                  for (var ix = 0; ix < var_l_len; ix++)
                    var_l_array._value[ix] = arguments[curarg++];
                  onSelf = true
                  var var_l = callmethod(var_sequenceClass, "fromPrimitiveArray", [2], var_l_array, new GraceNum(var_l_len));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(125)    // compilenode identifier;
                    onSelf = true;
                    var call459 = callmethod(this, "addAllFirst", [1], var_l);
                    return call459;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func458.paramCounts = [
                    0,
                ];
                func458.variableArities = [
                    true,
                ];
                obj381.methods["addFirst"] = func458;
                func458.definitionLine = 125;
                func458.definitionModule = "natList";
                var func460 = function(argcv) {    // method removeFirst
                  var curarg = 1;
                  if (argcv[0] != 0)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for removeFirst"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(129)    // compilenode num;
                    onSelf = true;
                    var call461 = callmethod(this, "removeAt", [1], new GraceNum(1));
                    return call461;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func460.paramCounts = [
                    0,
                ];
                func460.variableArities = [
                    false,
                ];
                obj381.methods["removeFirst"] = func460;
                func460.definitionLine = 128;
                func460.definitionModule = "natList";
                var func462 = function(argcv) {    // method removeAt(1)
                  var curarg = 1;
                  var var_n = arguments[curarg];
                  curarg++;
                  if (argcv[0] != 1)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for removeAt(1)"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(134)    // compilenode identifier;
                    onSelf = true;
                    var call463 = callmethod(this, "at", [1], var_n);
                    var var_removed = call463;
                    setLineNumber(135)    // compilenode call;
                       // start native code from line 135
                    var result = GraceDone;
                    this.data.jsArray.splice(var_n._value - 1, 1);
                    var nat464 = result;
                       // end native code insertion
                    setLineNumber(136)    // compilenode identifier;
                      return var_removed
                    return undefined;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func462.paramCounts = [
                    1,
                ];
                func462.variableArities = [
                    false,
                ];
                obj381.methods["removeAt"] = func462;
                func462.definitionLine = 133;
                func462.definitionModule = "natList";
                var func465 = function(argcv) {    // method remove(0+)
                  var curarg = 1;
                  var var_sequenceClass = callmethod(Grace_prelude, "sequence", [0]);
                  var var_v_len = argcv[0] - 0;
                  var var_v_array = new GracePrimitiveArray(var_v_len);
                  for (var ix = 0; ix < var_v_len; ix++)
                    var_v_array._value[ix] = arguments[curarg++];
                  onSelf = true
                  var var_v = callmethod(var_sequenceClass, "fromPrimitiveArray", [2], var_v_array, new GraceNum(var_v_len));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(141)    // compilenode identifier;
                    onSelf = true;
                    var call466 = callmethod(this, "removeAll", [1], var_v);
                    return call466;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func465.paramCounts = [
                    0,
                ];
                func465.variableArities = [
                    true,
                ];
                obj381.methods["remove"] = func465;
                func465.definitionLine = 140;
                func465.definitionModule = "natList";
                var func467 = function(argcv) {    // method remove(0+)ifAbsent(1)
                  var curarg = 1;
                  var var_sequenceClass = callmethod(Grace_prelude, "sequence", [0]);
                  var var_v_len = argcv[0] - 0;
                  var var_v_array = new GracePrimitiveArray(var_v_len);
                  for (var ix = 0; ix < var_v_len; ix++)
                    var_v_array._value[ix] = arguments[curarg++];
                  onSelf = true
                  var var_v = callmethod(var_sequenceClass, "fromPrimitiveArray", [2], var_v_array, new GraceNum(var_v_len));
                  var var_action = arguments[curarg];
                  curarg++;
                  if (argcv[1] != 1)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for ifAbsent (arg list 2) of remove(0+)ifAbsent(1)"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(146)    // compilenode identifier;
                    onSelf = true;
                    var call468 = callmethod(this, "removeAll()ifAbsent", [1, 1], var_v, var_action);
                    return call468;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func467.paramCounts = [
                    0,
                    1,
                ];
                func467.variableArities = [
                    true,
                    false,
                ];
                obj381.methods["remove()ifAbsent"] = func467;
                func467.definitionLine = 145;
                func467.definitionModule = "natList";
                var func469 = function(argcv) {    // method removeAll(1)
                  var curarg = 1;
                  var var_vs = arguments[curarg];
                  curarg++;
                  if (argcv[0] != 1)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for removeAll(1)"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(151)    // compilenode block;
                    var block470 = new GraceBlock(this, 151, 0);
                    block470.real = function() {
                      sourceObject = this;
                      var string471 = new GraceString("object not in list");
                      var call472 = callmethod(Grace_prelude, "NoSuchObject", [0]);
                      var call473 = callmethod(call472,"raise", [1], string471);
                      return call473;
                    };
                    onSelf = true;
                    var call474 = callmethod(this, "removeAll()ifAbsent", [1, 1], var_vs, block470);
                    return call474;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func469.paramCounts = [
                    1,
                ];
                func469.variableArities = [
                    false,
                ];
                obj381.methods["removeAll"] = func469;
                func469.definitionLine = 150;
                func469.definitionModule = "natList";
                var func475 = function(argcv) {    // method removeAll(1)ifAbsent(1)
                  var curarg = 1;
                  var var_vs = arguments[curarg];
                  curarg++;
                  if (argcv[0] != 1)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for removeAll (arg list 1) of removeAll(1)ifAbsent(1)"));
                  var var_action = arguments[curarg];
                  curarg++;
                  if (argcv[1] != 1)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for ifAbsent (arg list 2) of removeAll(1)ifAbsent(1)"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(156)    // compilenode block;
                    var block476 = new GraceBlock(this, 156, 1);
                    block476.real = function(var_each) {
                      sourceObject = this;
                      setLineNumber(157)    // compilenode block;
                      var block477 = new GraceBlock(this, 157, 0);
                      block477.real = function() {
                        sourceObject = this;
                        var call478 = callmethod(var_action,"apply", [0]);
                        throw new ReturnException(call478, returnTarget);
                        return undefined;
                      };
                      onSelf = true;
                      var call479 = callmethod(this, "indexOf()ifAbsent", [1, 1], var_each, block477);
                      var var_ix = call479;
                      setLineNumber(158)    // compilenode identifier;
                      onSelf = true;
                      var call480 = callmethod(this, "removeAt", [1], var_ix);
                      return call480;
                    };
                    var call481 = callmethod(Grace_prelude, "for()do", [1, 1], var_vs, block476);
                    setLineNumber(160)    // compilenode identifier;
                    return this;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func475.paramCounts = [
                    1,
                    1,
                ];
                func475.variableArities = [
                    false,
                    false,
                ];
                obj381.methods["removeAll()ifAbsent"] = func475;
                func475.definitionLine = 155;
                func475.definitionModule = "natList";
                var func482 = function(argcv) {    // method pop
                  var curarg = 1;
                  if (argcv[0] != 0)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for pop"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(164)    // compilenode call;
                    onSelf = true;
                    var call483 = callmethod(this, "removeLast", [0]);
                    return call483;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func482.paramCounts = [
                    0,
                ];
                func482.variableArities = [
                    false,
                ];
                obj381.methods["pop"] = func482;
                func482.definitionLine = 164;
                func482.definitionModule = "natList";
                var func484 = function(argcv) {    // method reversed
                  var curarg = 1;
                  if (argcv[0] != 0)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for reversed"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(167)    // compilenode call;
                    var call485 = callmethod(superDepth, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call486 = callmethod(call485, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call487 = callmethod(call486, "list", [0]);
                    var call488 = callmethod(call487,"empty", [0]);
                    var var_result = call488;
                    setLineNumber(168)    // compilenode block;
                    var block489 = new GraceBlock(this, 168, 1);
                    block489.real = function(var_each) {
                      sourceObject = this;
                      var call490 = callmethod(var_result,"addFirst", [1], var_each);
                      return call490;
                    };
                    onSelf = true;
                    var call491 = callmethod(this, "do", [1], block489);
                    setLineNumber(169)    // compilenode identifier;
                    return var_result;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func484.paramCounts = [
                    0,
                ];
                func484.variableArities = [
                    false,
                ];
                obj381.methods["reversed"] = func484;
                func484.definitionLine = 166;
                func484.definitionModule = "natList";
                var func492 = function(argcv) {    // method reverse
                  var curarg = 1;
                  if (argcv[0] != 0)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for reverse"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(172)    // compilenode call;
                    onSelf = true;
                    var call493 = callmethod(this, "size", [0]);
                    var var_hiIx = call493;
                    setLineNumber(173)    // compilenode num;
                    var var_loIx = new GraceNum(1);
                    setLineNumber(174)    // compilenode block;
                    var block494 = new GraceBlock(this, 174, 0);
                    block494.real = function() {
                      sourceObject = this;
                      var opresult497 = callmethod(var_loIx, "<", [1], var_hiIx);
                      return opresult497;
                    };
                    var block498 = new GraceBlock(this, 174, 0);
                    block498.real = function() {
                      sourceObject = this;
                      setLineNumber(175)    // compilenode identifier;
                      onSelf = true;
                      var call499 = callmethod(this, "at", [1], var_hiIx);
                      var var_hiVal = call499;
                      setLineNumber(176)    // compilenode identifier;
                      onSelf = true;
                      var call500 = callmethod(this, "at", [1], var_loIx);
                      onSelf = true;
                      var call501 = callmethod(this, "at()put", [1, 1], var_hiIx, call500);
                      setLineNumber(177)    // compilenode identifier;
                      onSelf = true;
                      var call502 = callmethod(this, "at()put", [1, 1], var_loIx, var_hiVal);
                      setLineNumber(178)    // compilenode identifier;
                      var diff505 = callmethod(var_hiIx, "-", [1], new GraceNum(1));
                      var_hiIx = diff505;
                      setLineNumber(179)    // compilenode identifier;
                      var opresult508 = callmethod(var_loIx, "+", [1], new GraceNum(1));
                      var_loIx = opresult508;
                      return opresult508;
                    };
                    var call509 = callmethod(Grace_prelude, "while()do", [1, 1], block494, block498);
                    setLineNumber(181)    // compilenode identifier;
                    return this;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func492.paramCounts = [
                    0,
                ];
                func492.variableArities = [
                    false,
                ];
                obj381.methods["reverse"] = func492;
                func492.definitionLine = 171;
                func492.definitionModule = "natList";
                var func510 = function(argcv) {    // method ++(1)
                  var curarg = 1;
                  var var_o = arguments[curarg];
                  curarg++;
                  if (argcv[0] != 1)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for ++(1)"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(185)    // compilenode call;
                    var call511 = callmethod(superDepth, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call512 = callmethod(call511, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call513 = callmethod(call512, "list", [0]);
                    var call514 = callmethod(call513,"withAll", [1], this);
                    var var_l = call514;
                    setLineNumber(186)    // compilenode identifier;
                    var call515 = callmethod(var_l,"addAll", [1], var_o);
                    return call515;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func510.paramCounts = [
                    1,
                ];
                func510.variableArities = [
                    false,
                ];
                obj381.methods["++"] = func510;
                func510.definitionLine = 184;
                func510.definitionModule = "natList";
                var func516 = function(argcv) {    // method asString
                  var curarg = 1;
                  if (argcv[0] != 0)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for asString"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(191)    // compilenode string;
                    var string517 = new GraceString("[");
                    var var_s = string517;
                    setLineNumber(192)    // compilenode call;
                    onSelf = true;
                    var call518 = callmethod(this, "size", [0]);
                    var var_curSize = call518;
                    setLineNumber(193)    // compilenode num;
                    var opresult521 = callmethod(new GraceNum(1), "..", [1], var_curSize);
                    var block522 = new GraceBlock(this, 193, 1);
                    block522.real = function(var_i) {
                      sourceObject = this;
                      setLineNumber(194)    // compilenode identifier;
                      onSelf = true;
                      var call523 = callmethod(this, "at", [1], var_i);
                      var call524 = callmethod(call523,"asString", [0]);
                      var opresult527 = callmethod(var_s, "++", [1], call524);
                      var_s = opresult527;
                      var if528 = GraceDone;
                      setLineNumber(195)    // compilenode identifier;
                      var opresult531 = callmethod(var_i, "<", [1], var_curSize);
                      if (Grace_isTrue(opresult531)) {
                        var string532 = new GraceString(",");
                        var opresult535 = callmethod(var_s, "++", [1], string532);
                        var_s = opresult535;
                        if528 = opresult535;
                      }
                      return if528;
                    };
                    var call536 = callmethod(Grace_prelude, "for()do", [1, 1], opresult521, block522);
                    setLineNumber(197)    // compilenode string;
                    var string537 = new GraceString("]");
                    var opresult540 = callmethod(var_s, "++", [1], string537);
                    return opresult540;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func516.paramCounts = [
                    0,
                ];
                func516.variableArities = [
                    false,
                ];
                obj381.methods["asString"] = func516;
                func516.definitionLine = 190;
                func516.definitionModule = "natList";
                var func541 = function(argcv) {    // method extend(1)
                  var curarg = 1;
                  var var_l = arguments[curarg];
                  curarg++;
                  if (argcv[0] != 1)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for extend(1)"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(201)    // compilenode identifier;
                    onSelf = true;
                    var call542 = callmethod(this, "addAll", [1], var_l);
                    return var_done;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func541.paramCounts = [
                    1,
                ];
                func541.variableArities = [
                    false,
                ];
                obj381.methods["extend"] = func541;
                func541.definitionLine = 201;
                func541.definitionModule = "natList";
                var func543 = function(argcv) {    // method contains(1)
                  var curarg = 1;
                  var var_element = arguments[curarg];
                  curarg++;
                  if (argcv[0] != 1)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for contains(1)"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(205)    // compilenode block;
                    var block544 = new GraceBlock(this, 205, 1);
                    block544.real = function(var_each) {
                      sourceObject = this;
                      var if545 = GraceDone;
                      var opresult548 = callmethod(var_each, "==", [1], var_element);
                      if (Grace_isTrue(opresult548)) {
                        throw new ReturnException(GraceTrue, returnTarget);
                        if545 = undefined;
                      }
                      return if545;
                    };
                    onSelf = true;
                    var call549 = callmethod(this, "do", [1], block544);
                    setLineNumber(206)    // compilenode identifier;
                      return GraceFalse
                    return undefined;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func543.paramCounts = [
                    1,
                ];
                func543.variableArities = [
                    false,
                ];
                obj381.methods["contains"] = func543;
                func543.definitionLine = 204;
                func543.definitionModule = "natList";
                var func550 = function(argcv) {    // method do(1)
                  var curarg = 1;
                  var var_block1 = arguments[curarg];
                  curarg++;
                  if (argcv[0] != 1)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for do(1)"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(211)    // compilenode num;
                    var var_i = new GraceNum(1);
                    setLineNumber(212)    // compilenode call;
                    onSelf = true;
                    var call551 = callmethod(this, "size", [0]);
                    var var_curSize = call551;
                    setLineNumber(213)    // compilenode block;
                    var block552 = new GraceBlock(this, 213, 0);
                    block552.real = function() {
                      sourceObject = this;
                      var opresult555 = callmethod(var_i, "<=", [1], var_curSize);
                      return opresult555;
                    };
                    var block556 = new GraceBlock(this, 213, 0);
                    block556.real = function() {
                      sourceObject = this;
                      setLineNumber(214)    // compilenode identifier;
                      onSelf = true;
                      var call557 = callmethod(this, "at", [1], var_i);
                      var call558 = callmethod(var_block1,"apply", [1], call557);
                      setLineNumber(215)    // compilenode identifier;
                      var opresult561 = callmethod(var_i, "+", [1], new GraceNum(1));
                      var_i = opresult561;
                      return opresult561;
                    };
                    var call562 = callmethod(Grace_prelude, "while()do", [1, 1], block552, block556);
                    return call562;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func550.paramCounts = [
                    1,
                ];
                func550.variableArities = [
                    false,
                ];
                obj381.methods["do"] = func550;
                func550.definitionLine = 210;
                func550.definitionModule = "natList";
                var func563 = function(argcv) {    // method ==(1)
                  var curarg = 1;
                  var var_other = arguments[curarg];
                  curarg++;
                  if (argcv[0] != 1)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for ==(1)"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(221)    // compilenode identifier;
                    var cases564 = [];
                    setLineNumber(222)    // compilenode block;
                    var block565 = new GraceBlock(this, 222, 1);
                    setLineNumber(0)    // compilenode string;
                    var string566 = new GraceString("o");
                    var call567 = callmethod(Grace_prelude, "VariablePattern", [0]);
                    var call568 = callmethod(call567,"new", [1], string566);
                    setLineNumber(222)    // compilenode call;
                    var call569 = callmethod(Grace_prelude, "Sequence", [0]);
                    setLineNumber(0)    // compilenode call;
                    var call570 = callmethod(Grace_prelude, "AndPattern", [0]);
                    var call571 = callmethod(call570,"new", [2], call568, call569);
                    block565.pattern = call571;
                    block565.real = function(var_o) {
                      sourceObject = this;
                      var if572 = GraceDone;
                      setLineNumber(223)    // compilenode identifier;
                      var call573 = callmethod(var_o,"size", [0]);
                      onSelf = true;
                      var call575 = callmethod(this, "size", [0]);
                      var opresult577 = callmethod(call575, "!=", [1], call573);
                      if (Grace_isTrue(opresult577)) {
                        throw new ReturnException(GraceFalse, returnTarget);
                        if572 = undefined;
                      }
                      setLineNumber(224)    // compilenode block;
                      var block578 = new GraceBlock(this, 224, 1);
                      block578.real = function(var_ix) {
                        sourceObject = this;
                        var if579 = GraceDone;
                        setLineNumber(225)    // compilenode identifier;
                        var call580 = callmethod(var_o,"at", [1], var_ix);
                        onSelf = true;
                        var call582 = callmethod(this, "at", [1], var_ix);
                        var opresult584 = callmethod(call582, "!=", [1], call580);
                        if (Grace_isTrue(opresult584)) {
                          setLineNumber(226)    // compilenode identifier;
                          throw new ReturnException(GraceFalse, returnTarget);
                          if579 = undefined;
                        }
                        return if579;
                      };
                      setLineNumber(224)    // compilenode call;
                      onSelf = true;
                      var call585 = callmethod(this, "indices", [0]);
                      var call586 = callmethod(call585,"do", [1], block578);
                      setLineNumber(229)    // compilenode identifier;
                      throw new ReturnException(GraceTrue, returnTarget);
                      return undefined;
                    };
                    cases564.push(block565);
                    setLineNumber(231)    // compilenode block;
                    var block587 = new GraceBlock(this, 231, 1);
                    block587.real = function(var___95____95__0) {
                      sourceObject = this;
                      setLineNumber(232)    // compilenode identifier;
                      throw new ReturnException(GraceFalse, returnTarget);
                      return undefined;
                    };
                    cases564.push(block587);
                    setLineNumber(231)    // compilematchcase;
                    var matchres564 = matchCase(var_other,cases564,false);
                    setModuleName("natList");
                    return matchres564;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func563.paramCounts = [
                    1,
                ];
                func563.variableArities = [
                    false,
                ];
                obj381.methods["=="] = func563;
                func563.definitionLine = 220;
                func563.definitionModule = "natList";
                var func588 = function(argcv) {    // method iterator
                  var curarg = 1;
                  if (argcv[0] != 0)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for iterator"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(238)    // compilenode object;
                    var obj589 = Grace_allocObject();
                    obj589.definitionModule = "natList";
                    obj589.definitionLine = 238;
                    obj589.outer = this;
                    var reader_natList_outer590 = function() {
                      return this.outer;
                    }
                    obj589.methods["outer"] = reader_natList_outer590;
                    var obj_init_589 = function () {
                      var origSuperDepth = superDepth;
                      superDepth = obj589;
                      var func591 = function(argcv) {    // method asDebugString
                        var curarg = 1;
                        if (argcv[0] != 0)
                          callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for asDebugString"));
                        setModuleName("natList");
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                          setLineNumber(241)    // compilenode string;
                          var string592 = new GraceString("\u27eb");
                          onSelf = true;
                          var call594 = callmethod(this, "idx", [0]);
                          var string596 = new GraceString("\u27ea");
                          onSelf = true;
                          var call598 = callmethod(this, "asString", [0]);
                          var string600 = new GraceString("");
                          var opresult602 = callmethod(string600, "++", [1], call598);
                          var opresult604 = callmethod(opresult602, "++", [1], string596);
                          var opresult606 = callmethod(opresult604, "++", [1], call594);
                          var opresult608 = callmethod(opresult606, "++", [1], string592);
                          return opresult608;
                        } catch(e) {
                          if ((e.exctype == 'return') && (e.target == returnTarget)) {
                            return e.returnvalue;
                          } else {
                            throw e;
                          }
                        }
                      }
                      func591.paramCounts = [
                          0,
                      ];
                      func591.variableArities = [
                          false,
                      ];
                      obj589.methods["asDebugString"] = func591;
                      func591.definitionLine = 241;
                      func591.definitionModule = "natList";
                      var func609 = function(argcv) {    // method asString
                        var curarg = 1;
                        if (argcv[0] != 0)
                          callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for asString"));
                        setModuleName("natList");
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                          setLineNumber(242)    // compilenode string;
                          var string610 = new GraceString("aListIterator");
                          return string610;
                        } catch(e) {
                          if ((e.exctype == 'return') && (e.target == returnTarget)) {
                            return e.returnvalue;
                          } else {
                            throw e;
                          }
                        }
                      }
                      func609.paramCounts = [
                          0,
                      ];
                      func609.variableArities = [
                          false,
                      ];
                      obj589.methods["asString"] = func609;
                      func609.definitionLine = 242;
                      func609.definitionModule = "natList";
                      var func611 = function(argcv) {    // method havemore
                        var curarg = 1;
                        if (argcv[0] != 0)
                          callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for havemore"));
                        setModuleName("natList");
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                          setLineNumber(243)    // compilenode call;
                          var call612 = callmethod(superDepth, "outer", [0]);
                          onOuter = true;
                          onSelf = true;
                          var call613 = callmethod(call612, "size", [0]);
                          onSelf = true;
                          var call615 = callmethod(this, "idx", [0]);
                          var opresult617 = callmethod(call615, "<=", [1], call613);
                          return opresult617;
                        } catch(e) {
                          if ((e.exctype == 'return') && (e.target == returnTarget)) {
                            return e.returnvalue;
                          } else {
                            throw e;
                          }
                        }
                      }
                      func611.paramCounts = [
                          0,
                      ];
                      func611.variableArities = [
                          false,
                      ];
                      obj589.methods["havemore"] = func611;
                      func611.definitionLine = 243;
                      func611.definitionModule = "natList";
                      var func618 = function(argcv) {    // method hasNext
                        var curarg = 1;
                        if (argcv[0] != 0)
                          callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for hasNext"));
                        setModuleName("natList");
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                          setLineNumber(244)    // compilenode call;
                          var call619 = callmethod(superDepth, "outer", [0]);
                          onOuter = true;
                          onSelf = true;
                          var call620 = callmethod(call619, "size", [0]);
                          onSelf = true;
                          var call622 = callmethod(this, "idx", [0]);
                          var opresult624 = callmethod(call622, "<=", [1], call620);
                          return opresult624;
                        } catch(e) {
                          if ((e.exctype == 'return') && (e.target == returnTarget)) {
                            return e.returnvalue;
                          } else {
                            throw e;
                          }
                        }
                      }
                      func618.paramCounts = [
                          0,
                      ];
                      func618.variableArities = [
                          false,
                      ];
                      obj589.methods["hasNext"] = func618;
                      func618.definitionLine = 244;
                      func618.definitionModule = "natList";
                      var func625 = function(argcv) {    // method next
                        var curarg = 1;
                        if (argcv[0] != 0)
                          callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for next"));
                        setModuleName("natList");
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                          var if626 = GraceDone;
                          setLineNumber(246)    // compilenode call;
                          var call627 = callmethod(superDepth, "outer", [0]);
                          onOuter = true;
                          onSelf = true;
                          var call628 = callmethod(call627, "size", [0]);
                          onSelf = true;
                          var call630 = callmethod(this, "idx", [0]);
                          var opresult632 = callmethod(call630, ">", [1], call628);
                          if (Grace_isTrue(opresult632)) {
                            var string633 = new GraceString("on list");
                            var call634 = callmethod(Grace_prelude, "Exhausted", [0]);
                            var call635 = callmethod(call634,"raise", [1], string633);
                            if626 = call635;
                          }
                          setLineNumber(247)    // compilenode call;
                          onSelf = true;
                          var call636 = callmethod(this, "idx", [0]);
                          var call637 = callmethod(superDepth, "outer", [0]);
                          onOuter = true;
                          onSelf = true;
                          var call638 = callmethod(call637, "at", [1], call636);
                          var var_ret = call638;
                          setLineNumber(248)    // compilenode call;
                          onSelf = true;
                          var call640 = callmethod(this, "idx", [0]);
                          var opresult642 = callmethod(call640, "+", [1], new GraceNum(1));
                          onSelf = true;
                          var call643 = callmethod(this, "idx:=", [1], opresult642);
                          setLineNumber(249)    // compilenode identifier;
                          return var_ret;
                        } catch(e) {
                          if ((e.exctype == 'return') && (e.target == returnTarget)) {
                            return e.returnvalue;
                          } else {
                            throw e;
                          }
                        }
                      }
                      func625.paramCounts = [
                          0,
                      ];
                      func625.variableArities = [
                          false,
                      ];
                      obj589.methods["next"] = func625;
                      func625.definitionLine = 245;
                      func625.definitionModule = "natList";
                      sourceObject = obj589;
                      setLineNumber(239)    // compilenode call;
                      var call644 = callmethod(Grace_prelude, "iterable", [0]);
                      var call645 = callmethod(call644,"trait()object", [0, 1], this);
                      obj589.superobj = call645;
                      obj589._value = call645._value;
                      sourceObject = obj589;
                      setLineNumber(240)    // compilenode num;
                      obj589.data["idx"] = new GraceNum(1);
                      var reader_natList_idx646 = function() {
                        return this.data["idx"];
                      }
                      obj589.methods["idx"] = reader_natList_idx646;
                      obj589.data["idx"] = new GraceNum(1);
                      var writer_natList_idx646 = function(argcv, o) {
                        this.data["idx"] = o;
                      }
                      obj589.methods["idx:="] = writer_natList_idx646;
                      reader_natList_idx646.confidential = true;
                      writer_natList_idx646.confidential = true;
                      obj589.mutable = true;
                      sourceObject = obj589;
                      sourceObject = obj589;
                      sourceObject = obj589;
                      sourceObject = obj589;
                      sourceObject = obj589;
                      superDepth = origSuperDepth;
                    }
                    obj_init_589.apply(obj589, []);
                    return obj589;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func588.paramCounts = [
                    0,
                ];
                func588.variableArities = [
                    false,
                ];
                obj381.methods["iterator"] = func588;
                func588.definitionLine = 237;
                func588.definitionModule = "natList";
                  var func647 = function(argcv) {    // method iterator()object
                    var curarg = 1;
                    var inheritingObject = arguments[curarg++];
                    var returnTarget = invocationCount;
                    invocationCount++;
                    try {
                      var obj648 = Grace_allocObject();
                      obj648.definitionModule = "natList";
                      obj648.definitionLine = 238;
                      var inho648 = inheritingObject;
                      while (inho648.superobj) inho648 = inho648.superobj;
                      inho648.superobj = obj648;
                      obj648.data = inheritingObject.data;
                      obj648.outer = this;
                      var reader_natList_outer649 = function() {
                        return this.outer;
                      }
                      obj648.methods["outer"] = reader_natList_outer649;
                      var obj_init_648 = function () {
                        var origSuperDepth = superDepth;
                        superDepth = obj648;
                        var func650 = function(argcv) {    // method asDebugString
                          var curarg = 1;
                          if (argcv[0] != 0)
                            callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for asDebugString"));
                          setModuleName("natList");
                          var returnTarget = invocationCount;
                          invocationCount++;
                          try {
                            setLineNumber(241)    // compilenode string;
                            var string651 = new GraceString("\u27eb");
                            onSelf = true;
                            var call653 = callmethod(this, "idx", [0]);
                            var string655 = new GraceString("\u27ea");
                            onSelf = true;
                            var call657 = callmethod(this, "asString", [0]);
                            var string659 = new GraceString("");
                            var opresult661 = callmethod(string659, "++", [1], call657);
                            var opresult663 = callmethod(opresult661, "++", [1], string655);
                            var opresult665 = callmethod(opresult663, "++", [1], call653);
                            var opresult667 = callmethod(opresult665, "++", [1], string651);
                            return opresult667;
                          } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                              return e.returnvalue;
                            } else {
                              throw e;
                            }
                          }
                        }
                        func650.paramCounts = [
                            0,
                        ];
                        func650.variableArities = [
                            false,
                        ];
                        obj648.methods["asDebugString"] = func650;
                        func650.definitionLine = 241;
                        func650.definitionModule = "natList";
                        var func668 = function(argcv) {    // method asString
                          var curarg = 1;
                          if (argcv[0] != 0)
                            callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for asString"));
                          setModuleName("natList");
                          var returnTarget = invocationCount;
                          invocationCount++;
                          try {
                            setLineNumber(242)    // compilenode string;
                            var string669 = new GraceString("aListIterator");
                            return string669;
                          } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                              return e.returnvalue;
                            } else {
                              throw e;
                            }
                          }
                        }
                        func668.paramCounts = [
                            0,
                        ];
                        func668.variableArities = [
                            false,
                        ];
                        obj648.methods["asString"] = func668;
                        func668.definitionLine = 242;
                        func668.definitionModule = "natList";
                        var func670 = function(argcv) {    // method havemore
                          var curarg = 1;
                          if (argcv[0] != 0)
                            callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for havemore"));
                          setModuleName("natList");
                          var returnTarget = invocationCount;
                          invocationCount++;
                          try {
                            setLineNumber(243)    // compilenode call;
                            var call671 = callmethod(superDepth, "outer", [0]);
                            onOuter = true;
                            onSelf = true;
                            var call672 = callmethod(call671, "size", [0]);
                            onSelf = true;
                            var call674 = callmethod(this, "idx", [0]);
                            var opresult676 = callmethod(call674, "<=", [1], call672);
                            return opresult676;
                          } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                              return e.returnvalue;
                            } else {
                              throw e;
                            }
                          }
                        }
                        func670.paramCounts = [
                            0,
                        ];
                        func670.variableArities = [
                            false,
                        ];
                        obj648.methods["havemore"] = func670;
                        func670.definitionLine = 243;
                        func670.definitionModule = "natList";
                        var func677 = function(argcv) {    // method hasNext
                          var curarg = 1;
                          if (argcv[0] != 0)
                            callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for hasNext"));
                          setModuleName("natList");
                          var returnTarget = invocationCount;
                          invocationCount++;
                          try {
                            setLineNumber(244)    // compilenode call;
                            var call678 = callmethod(superDepth, "outer", [0]);
                            onOuter = true;
                            onSelf = true;
                            var call679 = callmethod(call678, "size", [0]);
                            onSelf = true;
                            var call681 = callmethod(this, "idx", [0]);
                            var opresult683 = callmethod(call681, "<=", [1], call679);
                            return opresult683;
                          } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                              return e.returnvalue;
                            } else {
                              throw e;
                            }
                          }
                        }
                        func677.paramCounts = [
                            0,
                        ];
                        func677.variableArities = [
                            false,
                        ];
                        obj648.methods["hasNext"] = func677;
                        func677.definitionLine = 244;
                        func677.definitionModule = "natList";
                        var func684 = function(argcv) {    // method next
                          var curarg = 1;
                          if (argcv[0] != 0)
                            callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for next"));
                          setModuleName("natList");
                          var returnTarget = invocationCount;
                          invocationCount++;
                          try {
                            var if685 = GraceDone;
                            setLineNumber(246)    // compilenode call;
                            var call686 = callmethod(superDepth, "outer", [0]);
                            onOuter = true;
                            onSelf = true;
                            var call687 = callmethod(call686, "size", [0]);
                            onSelf = true;
                            var call689 = callmethod(this, "idx", [0]);
                            var opresult691 = callmethod(call689, ">", [1], call687);
                            if (Grace_isTrue(opresult691)) {
                              var string692 = new GraceString("on list");
                              var call693 = callmethod(Grace_prelude, "Exhausted", [0]);
                              var call694 = callmethod(call693,"raise", [1], string692);
                              if685 = call694;
                            }
                            setLineNumber(247)    // compilenode call;
                            onSelf = true;
                            var call695 = callmethod(this, "idx", [0]);
                            var call696 = callmethod(superDepth, "outer", [0]);
                            onOuter = true;
                            onSelf = true;
                            var call697 = callmethod(call696, "at", [1], call695);
                            var var_ret = call697;
                            setLineNumber(248)    // compilenode call;
                            onSelf = true;
                            var call699 = callmethod(this, "idx", [0]);
                            var opresult701 = callmethod(call699, "+", [1], new GraceNum(1));
                            onSelf = true;
                            var call702 = callmethod(this, "idx:=", [1], opresult701);
                            setLineNumber(249)    // compilenode identifier;
                            return var_ret;
                          } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                              return e.returnvalue;
                            } else {
                              throw e;
                            }
                          }
                        }
                        func684.paramCounts = [
                            0,
                        ];
                        func684.variableArities = [
                            false,
                        ];
                        obj648.methods["next"] = func684;
                        func684.definitionLine = 245;
                        func684.definitionModule = "natList";
                        sourceObject = obj648;
                        setLineNumber(239)    // compilenode call;
                        var call703 = callmethod(Grace_prelude, "iterable", [0]);
                        var call704 = callmethod(call703,"trait()object", [0, 1], this);
                        obj648.superobj = call704;
                        obj648._value = call704._value;
                        sourceObject = obj648;
                        setLineNumber(240)    // compilenode num;
                        obj648.data["idx"] = new GraceNum(1);
                        var reader_natList_idx705 = function() {
                          return this.data["idx"];
                        }
                        obj648.methods["idx"] = reader_natList_idx705;
                        obj648.data["idx"] = new GraceNum(1);
                        var writer_natList_idx705 = function(argcv, o) {
                          this.data["idx"] = o;
                        }
                        obj648.methods["idx:="] = writer_natList_idx705;
                        reader_natList_idx705.confidential = true;
                        writer_natList_idx705.confidential = true;
                        obj648.mutable = true;
                        sourceObject = obj648;
                        sourceObject = obj648;
                        sourceObject = obj648;
                        sourceObject = obj648;
                        sourceObject = obj648;
                        superDepth = origSuperDepth;
                      }
                      obj_init_648.apply(inheritingObject, []);
                      return obj648;
                    } catch(e) {
                      if ((e.exctype == 'return') && (e.target == returnTarget)) {
                        return e.returnvalue;
                      } else {
                        throw e;
                      }
                    }
                  }
                  obj381.methods["iterator()object"] = func647;
                var func706 = function(argcv) {    // method values
                  var curarg = 1;
                  if (argcv[0] != 0)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for values"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(256)    // compilenode call;
                    onSelf = true;
                    var call707 = callmethod(this, "iterator", [0]);
                    return call707;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func706.paramCounts = [
                    0,
                ];
                func706.variableArities = [
                    false,
                ];
                obj381.methods["values"] = func706;
                func706.definitionLine = 255;
                func706.definitionModule = "natList";
                var func708 = function(argcv) {    // method keys
                  var curarg = 1;
                  if (argcv[0] != 0)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for keys"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(261)    // compilenode call;
                    onSelf = true;
                    var call709 = callmethod(this, "indices", [0]);
                    var call710 = callmethod(call709,"iterator", [0]);
                    return call710;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func708.paramCounts = [
                    0,
                ];
                func708.variableArities = [
                    false,
                ];
                obj381.methods["keys"] = func708;
                func708.definitionLine = 260;
                func708.definitionModule = "natList";
                var func711 = function(argcv) {    // method keysAndValuesDo(1)
                  var curarg = 1;
                  var var_block2 = arguments[curarg];
                  curarg++;
                  if (argcv[0] != 1)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for keysAndValuesDo(1)"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(266)    // compilenode call;
                    onSelf = true;
                    var call712 = callmethod(this, "size", [0]);
                    var var_curSize = call712;
                    setLineNumber(267)    // compilenode num;
                    var var_i = new GraceNum(1);
                    setLineNumber(268)    // compilenode block;
                    var block713 = new GraceBlock(this, 268, 0);
                    block713.real = function() {
                      sourceObject = this;
                      onSelf = true;
                      var call714 = callmethod(this, "size", [0]);
                      var opresult717 = callmethod(var_i, "<=", [1], call714);
                      return opresult717;
                    };
                    var block718 = new GraceBlock(this, 268, 0);
                    block718.real = function() {
                      sourceObject = this;
                      setLineNumber(269)    // compilenode identifier;
                      onSelf = true;
                      var call719 = callmethod(this, "at", [1], var_i);
                      var call720 = callmethod(var_block2,"apply", [2], var_i, call719);
                      setLineNumber(270)    // compilenode identifier;
                      var opresult723 = callmethod(var_i, "+", [1], new GraceNum(1));
                      var_i = opresult723;
                      return opresult723;
                    };
                    var call724 = callmethod(Grace_prelude, "while()do", [1, 1], block713, block718);
                    return call724;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func711.paramCounts = [
                    1,
                ];
                func711.variableArities = [
                    false,
                ];
                obj381.methods["keysAndValuesDo"] = func711;
                func711.definitionLine = 265;
                func711.definitionModule = "natList";
                var func725 = function(argcv) {    // method sortBy(1)
                  var curarg = 1;
                  var var_sortBlock = arguments[curarg];
                  curarg++;
                  if (argcv[0] != 1)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for sortBy(1)"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(275)    // compilenode call;
                       // start native code from line 275
                    var result = GraceDone;
                    var compareFun = function compareFun(a, b) {
                      var res = callmethod(var_sortBlock, "apply", [2], a, b);
                      if (res.className == "number") return res._value;
                      throw new GraceExceptionPacket(TypeErrorObject,
                             new GraceString("sort block in list.sortBy method did not return a number"));
                  }
                  this.data.jsArray.sort(compareFun);
                    var nat726 = result;
                       // end native code insertion
                    setLineNumber(282)    // compilenode identifier;
                    return this;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func725.paramCounts = [
                    1,
                ];
                func725.variableArities = [
                    false,
                ];
                obj381.methods["sortBy"] = func725;
                func725.definitionLine = 274;
                func725.definitionModule = "natList";
                var func727 = function(argcv) {    // method sort
                  var curarg = 1;
                  if (argcv[0] != 0)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for sort"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(287)    // compilenode block;
                    var block728 = new GraceBlock(this, 287, 2);
                    block728.real = function(var_l, var_r) {
                      sourceObject = this;
                      var if729 = GraceDone;
                      setLineNumber(288)    // compilenode identifier;
                      var opresult732 = callmethod(var_l, "==", [1], var_r);
                      if (Grace_isTrue(opresult732)) {
                        if729 = new GraceNum(0);
                      } else {
                        var if733 = GraceDone;
                        setLineNumber(289)    // compilenode identifier;
                        var opresult736 = callmethod(var_l, "<", [1], var_r);
                        if (Grace_isTrue(opresult736)) {
                          var call737 = callmethod(new GraceNum(1),"prefix-", [0]);
                          if733 = call737;
                        } else {
                          setLineNumber(290)    // compilenode num;
                          if733 = new GraceNum(1);
                        }
                        if729 = if733;
                      }
                      return if729;
                    };
                    onSelf = true;
                    var call738 = callmethod(this, "sortBy", [1], block728);
                    return call738;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func727.paramCounts = [
                    0,
                ];
                func727.variableArities = [
                    false,
                ];
                obj381.methods["sort"] = func727;
                func727.definitionLine = 286;
                func727.definitionModule = "natList";
                var func739 = function(argcv) {    // method copySortedBy(1)
                  var curarg = 1;
                  var var_sortBlock = arguments[curarg];
                  curarg++;
                  if (argcv[0] != 1)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for copySortedBy(1)"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(294)    // compilenode call;
                    onSelf = true;
                    var call740 = callmethod(this, "copy", [0]);
                    var call741 = callmethod(call740,"sortBy", [1], var_sortBlock);
                    return call741;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func739.paramCounts = [
                    1,
                ];
                func739.variableArities = [
                    false,
                ];
                obj381.methods["copySortedBy"] = func739;
                func739.definitionLine = 293;
                func739.definitionModule = "natList";
                var func742 = function(argcv) {    // method copySorted
                  var curarg = 1;
                  if (argcv[0] != 0)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for copySorted"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(297)    // compilenode call;
                    onSelf = true;
                    var call743 = callmethod(this, "copy", [0]);
                    var call744 = callmethod(call743,"sort", [0]);
                    return call744;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func742.paramCounts = [
                    0,
                ];
                func742.variableArities = [
                    false,
                ];
                obj381.methods["copySorted"] = func742;
                func742.definitionLine = 296;
                func742.definitionModule = "natList";
                var func745 = function(argcv) {    // method copy
                  var curarg = 1;
                  if (argcv[0] != 0)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for copy"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(300)    // compilenode call;
                    var call746 = callmethod(superDepth, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call747 = callmethod(call746, "withAll", [1], this);
                    return call747;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func745.paramCounts = [
                    0,
                ];
                func745.variableArities = [
                    false,
                ];
                obj381.methods["copy"] = func745;
                func745.definitionLine = 299;
                func745.definitionModule = "natList";
                sourceObject = obj381;
                setLineNumber(12)    // compilenode call;
                var call748 = callmethod(Grace_prelude, "collections", [0]);
                var call749 = callmethod(call748,"indexable", [0]);
                var call750 = callmethod(call749,"trait()object", [0, 1], this);
                obj381.superobj = call750;
                obj381._value = call750._value;
                sourceObject = obj381;
                setLineNumber(13)    // compilenode num;
                obj381.data["sz"] = new GraceNum(0);
                var reader_natList_sz751 = function() {
                  return this.data["sz"];
                }
                obj381.methods["sz"] = reader_natList_sz751;
                obj381.data["sz"] = new GraceNum(0);
                var writer_natList_sz751 = function(argcv, o) {
                  this.data["sz"] = o;
                }
                obj381.methods["sz:="] = writer_natList_sz751;
                reader_natList_sz751.confidential = true;
                writer_natList_sz751.confidential = true;
                obj381.mutable = true;
                sourceObject = obj381;
                setLineNumber(14)    // compilenode call;
                   // start native code from line 14
                var result = GraceDone;
                var result = [];
                var nat752 = result;
                   // end native code insertion
                obj381.data["jsArray"] = nat752;
                var reader_natList_jsArray753 = function() {
                  return this.data["jsArray"];
                }
                obj381.methods["jsArray"] = reader_natList_jsArray753;
                obj381.data["jsArray"] = nat752;
                var writer_natList_jsArray753 = function(argcv, o) {
                  this.data["jsArray"] = o;
                }
                obj381.methods["jsArray:="] = writer_natList_jsArray753;
                reader_natList_jsArray753.confidential = true;
                writer_natList_jsArray753.confidential = true;
                obj381.mutable = true;
                sourceObject = obj381;
                setLineNumber(15)    // compilenode block;
                var block754 = new GraceBlock(this, 15, 1);
                block754.real = function(var_each) {
                  sourceObject = this;
                  setLineNumber(16)    // compilenode call;
                     // start native code from line 16
                  var result = GraceDone;
                  this.data.jsArray.push(var_each);
                  var nat755 = result;
                     // end native code insertion
                  return nat755;
                };
                setLineNumber(15)    // compilenode identifier;
                var call756 = callmethod(var_a,"do", [1], block754);
                sourceObject = obj381;
                sourceObject = obj381;
                sourceObject = obj381;
                sourceObject = obj381;
                sourceObject = obj381;
                sourceObject = obj381;
                sourceObject = obj381;
                sourceObject = obj381;
                sourceObject = obj381;
                sourceObject = obj381;
                sourceObject = obj381;
                sourceObject = obj381;
                sourceObject = obj381;
                sourceObject = obj381;
                sourceObject = obj381;
                sourceObject = obj381;
                sourceObject = obj381;
                sourceObject = obj381;
                sourceObject = obj381;
                sourceObject = obj381;
                sourceObject = obj381;
                sourceObject = obj381;
                sourceObject = obj381;
                sourceObject = obj381;
                sourceObject = obj381;
                sourceObject = obj381;
                sourceObject = obj381;
                sourceObject = obj381;
                sourceObject = obj381;
                sourceObject = obj381;
                sourceObject = obj381;
                sourceObject = obj381;
                sourceObject = obj381;
                sourceObject = obj381;
                sourceObject = obj381;
                sourceObject = obj381;
                sourceObject = obj381;
                superDepth = origSuperDepth;
              }
              obj_init_381.apply(inheritingObject, []);
              return obj381;
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          obj1.methods["withAll()object"] = func380;
        sourceObject = obj1;
        setLineNumber(9)    // compilenode call;
        var call757 = callmethod(Grace_prelude, "collections", [0]);
        var call758 = callmethod(call757,"collectionFactory", [0]);
        var call759 = callmethod(call758,"trait()object", [0, 1], this);
        obj1.superobj = call759;
        obj1._value = call759._value;
        sourceObject = obj1;
        superDepth = origSuperDepth;
      }
      obj_init_1.apply(obj1, []);
      return obj1;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func0.paramCounts = [
      0,
  ];
  func0.variableArities = [
      false,
  ];
  this.methods["list"] = func0;
  func0.definitionLine = 8;
  func0.definitionModule = "natList";
    var func760 = function(argcv) {    // method list()object
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      // Start generics
      if (argcv.length == 1 + 1) {
        if (argcv[argcv.length-1] < 1) {
          callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("insufficient generic parameters"));
        }
        var var_T = arguments[curarg++];
      } else {
        var_T = var_Unknown;
      }
      // End generics
      var curarg2 = 1;
      // End checking generics
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj761 = Grace_allocObject();
        obj761.definitionModule = "natList";
        obj761.definitionLine = 8;
        var inho761 = inheritingObject;
        while (inho761.superobj) inho761 = inho761.superobj;
        inho761.superobj = obj761;
        obj761.data = inheritingObject.data;
        obj761.outer = this;
        var reader_natList_outer762 = function() {
          return this.outer;
        }
        obj761.methods["outer"] = reader_natList_outer762;
        var obj_init_761 = function () {
          var origSuperDepth = superDepth;
          superDepth = obj761;
          var func763 = function(argcv) {    // method withAll(1)
            var curarg = 1;
            var var_a = arguments[curarg];
            curarg++;
            if (argcv[0] != 1)
              callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for withAll(1)"));
            setModuleName("natList");
            var returnTarget = invocationCount;
            invocationCount++;
            try {
              setLineNumber(11)    // compilenode object;
              var obj764 = Grace_allocObject();
              obj764.definitionModule = "natList";
              obj764.definitionLine = 11;
              obj764.outer = this;
              var reader_natList_outer765 = function() {
                return this.outer;
              }
              obj764.methods["outer"] = reader_natList_outer765;
              var obj_init_764 = function () {
                var origSuperDepth = superDepth;
                superDepth = obj764;
                var func766 = function(argcv) {    // method boundsCheck(1)
                  var curarg = 1;
                  var var_n = arguments[curarg];
                  curarg++;
                  if (argcv[0] != 1)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for boundsCheck(1)"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(21)    // compilenode call;
                       // start native code from line 21
                    var result = GraceDone;
                    var ix = var_n._value;
                    if ((ix < 1) || (ix > this.data.jsArray.length)) {
                        var msg = "index " + ix + " out of bounds 1.." + this.data.jsArray.length;
                        var BoundsError = callmethod(Grace_prelude, "BoundsError", [0]);
                        callmethod(BoundsError,"raise", [1], new GraceString(msg));
                    }
                    var nat767 = result;
                       // end native code insertion
                    var if768 = GraceDone;
                    setLineNumber(27)    // compilenode call;
                    onSelf = true;
                    var call769 = callmethod(this, "size", [0]);
                    var opresult772 = callmethod(var_n, ">", [1], call769);
                    var opresult776 = callmethod(var_n, "<", [1], new GraceNum(1));
                    var opresult778 = callmethod(opresult776, "||", [1], opresult772);
                    if (Grace_isTrue(opresult778)) {
                      setLineNumber(28)    // compilenode string;
                      var string779 = new GraceString("");
                      onSelf = true;
                      var call781 = callmethod(this, "size", [0]);
                      var string783 = new GraceString(" out of bounds 1..");
                      var string786 = new GraceString("index ");
                      var opresult788 = callmethod(string786, "++", [1], var_n);
                      var opresult790 = callmethod(opresult788, "++", [1], string783);
                      var opresult792 = callmethod(opresult790, "++", [1], call781);
                      var opresult794 = callmethod(opresult792, "++", [1], string779);
                      var call795 = callmethod(Grace_prelude, "BoundsError", [0]);
                      var call796 = callmethod(call795,"raise", [1], opresult794);
                      if768 = call796;
                    }
                    return if768;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                  func766.confidential = true;
                func766.paramCounts = [
                    1,
                ];
                func766.variableArities = [
                    false,
                ];
                obj764.methods["boundsCheck"] = func766;
                func766.definitionLine = 20;
                func766.definitionModule = "natList";
                var func797 = function(argcv) {    // method size
                  var curarg = 1;
                  if (argcv[0] != 0)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for size"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(34)    // compilenode call;
                       // start native code from line 34
                    var result = GraceDone;
                    return new GraceNum(this.data.jsArray.length)
                    var nat798 = result;
                       // end native code insertion
                    setLineNumber(35)    // compilenode call;
                    onSelf = true;
                    var call799 = callmethod(this, "sz", [0]);
                    return call799;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func797.paramCounts = [
                    0,
                ];
                func797.variableArities = [
                    false,
                ];
                obj764.methods["size"] = func797;
                func797.definitionLine = 33;
                func797.definitionModule = "natList";
                var func800 = function(argcv) {    // method at(1)
                  var curarg = 1;
                  var var_n = arguments[curarg];
                  curarg++;
                  if (argcv[0] != 1)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for at(1)"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(40)    // compilenode call;
                       // start native code from line 40
                    var result = GraceDone;
                    var ix = var_n._value;
                    if ((ix < 1) || (ix > this.data.jsArray.length)) {
                        var msg = "index " + ix + " out of bounds 1.." + this.data.jsArray.length;
                        var BoundsError = callmethod(Grace_prelude, "BoundsError", [0]);
                        callmethod(BoundsError, "raise", [1], new GraceString(msg));
                    }
                    return this.data.jsArray[ix - 1];
                    var nat801 = result;
                       // end native code insertion
                    return nat801;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func800.paramCounts = [
                    1,
                ];
                func800.variableArities = [
                    false,
                ];
                obj764.methods["at"] = func800;
                func800.definitionLine = 39;
                func800.definitionModule = "natList";
                var func802 = function(argcv) {    // method [(1)
                  var curarg = 1;
                  var var_n = arguments[curarg];
                  curarg++;
                  if (argcv[0] != 1)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for [(1)"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(51)    // compilenode call;
                       // start native code from line 51
                    var result = GraceDone;
                    var ix = var_n._value;
                    if ((ix < 1) || (ix > this.data.jsArray.length)) {
                        var msg = "index " + ix + " out of bounds 1.." + this.data.jsArray.length;
                        var BoundsError = callmethod(Grace_prelude, "BoundsError", [0]);
                        callmethod(BoundsError, "raise", [1], new GraceString(msg));
                    }
                    return this.data.jsArray[ix - 1];
                    var nat803 = result;
                       // end native code insertion
                    return nat803;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func802.paramCounts = [
                    1,
                ];
                func802.variableArities = [
                    false,
                ];
                obj764.methods["[]"] = func802;
                func802.definitionLine = 50;
                func802.definitionModule = "natList";
                var func804 = function(argcv) {    // method at(1)put(1)
                  var curarg = 1;
                  var var_n = arguments[curarg];
                  curarg++;
                  if (argcv[0] != 1)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for at (arg list 1) of at(1)put(1)"));
                  var var_x = arguments[curarg];
                  curarg++;
                  if (argcv[1] != 1)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for put (arg list 2) of at(1)put(1)"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(62)    // compilenode call;
                       // start native code from line 62
                    var result = GraceDone;
                    var  ix = var_n._value;
                    if ((ix < 1) || (ix > this.data.jsArray.length + 1)) {
                        var msg = "index " + ix + " out of bounds 1.." + this.data.jsArray.length;
                        var BoundsError = callmethod(Grace_prelude, "BoundsError", [0]);
                        callmethod(BoundsError, "raise", [1], new GraceString(msg));
                    }
                    this.data.jsArray[ix-1] = var_x;
                    return this;
                    var nat805 = result;
                       // end native code insertion
                    return nat805;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func804.paramCounts = [
                    1,
                    1,
                ];
                func804.variableArities = [
                    false,
                    false,
                ];
                obj764.methods["at()put"] = func804;
                func804.definitionLine = 61;
                func804.definitionModule = "natList";
                var func806 = function(argcv) {    // method [:=(2)
                  var curarg = 1;
                  var var_n = arguments[curarg];
                  curarg++;
                  var var_x = arguments[curarg];
                  curarg++;
                  if (argcv[0] != 2)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for [:=(2)"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(73)    // compilenode call;
                       // start native code from line 73
                    var result = GraceDone;
                    var ix = var_n._value;
                    if ((ix < 1) || (ix > this.data.jsArray.length + 1)) {
                        var msg = "index " + ix + " out of bounds 1.." + this.data.jsArray.length;
                        var BoundsError = callmethod(Grace_prelude, "BoundsError", [0]);
                        callmethod(BoundsError, "raise", [1], new GraceString(msg));
                    }
                    this.data.jsArray[ix-1] = var_x;
                    return GraceDone;
                    var nat807 = result;
                       // end native code insertion
                    return nat807;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func806.paramCounts = [
                    2,
                ];
                func806.variableArities = [
                    false,
                ];
                obj764.methods["[]:="] = func806;
                func806.definitionLine = 72;
                func806.definitionModule = "natList";
                var func808 = function(argcv) {    // method add(0+)
                  var curarg = 1;
                  var var_sequenceClass = callmethod(Grace_prelude, "sequence", [0]);
                  var var_x_len = argcv[0] - 0;
                  var var_x_array = new GracePrimitiveArray(var_x_len);
                  for (var ix = 0; ix < var_x_len; ix++)
                    var_x_array._value[ix] = arguments[curarg++];
                  onSelf = true
                  var var_x = callmethod(var_sequenceClass, "fromPrimitiveArray", [2], var_x_array, new GraceNum(var_x_len));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    var if809 = GraceDone;
                    setLineNumber(84)    // compilenode identifier;
                    var call811 = callmethod(var_x,"size", [0]);
                    var opresult813 = callmethod(call811, "==", [1], new GraceNum(1));
                    if (Grace_isTrue(opresult813)) {
                      setLineNumber(85)    // compilenode call;
                         // start native code from line 85
                      var result = GraceDone;
                      var v = callmethod(var_x, "first", [0]);
                    this.data.jsArray.push(v);
                    return this;
                      var nat814 = result;
                         // end native code insertion
                      if809 = nat814;
                    }
                    setLineNumber(89)    // compilenode identifier;
                    onSelf = true;
                    var call815 = callmethod(this, "addAll", [1], var_x);
                    return call815;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func808.paramCounts = [
                    0,
                ];
                func808.variableArities = [
                    true,
                ];
                obj764.methods["add"] = func808;
                func808.definitionLine = 83;
                func808.definitionModule = "natList";
                var func816 = function(argcv) {    // method addAll(1)
                  var curarg = 1;
                  var var_l = arguments[curarg];
                  curarg++;
                  if (argcv[0] != 1)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for addAll(1)"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(93)    // compilenode block;
                    var block817 = new GraceBlock(this, 93, 1);
                    block817.real = function(var_each) {
                      sourceObject = this;
                      onSelf = true;
                      var call818 = callmethod(this, "push", [1], var_each);
                      return call818;
                    };
                    var call819 = callmethod(Grace_prelude, "for()do", [1, 1], var_l, block817);
                    setLineNumber(94)    // compilenode identifier;
                    return this;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func816.paramCounts = [
                    1,
                ];
                func816.variableArities = [
                    false,
                ];
                obj764.methods["addAll"] = func816;
                func816.definitionLine = 92;
                func816.definitionModule = "natList";
                var func820 = function(argcv) {    // method push(1)
                  var curarg = 1;
                  var var_x = arguments[curarg];
                  curarg++;
                  if (argcv[0] != 1)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for push(1)"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(98)    // compilenode call;
                       // start native code from line 98
                    var result = GraceDone;
                    this.data.jsArray.push(var_x);
                    return this;
                    var nat821 = result;
                       // end native code insertion
                    return nat821;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func820.paramCounts = [
                    1,
                ];
                func820.variableArities = [
                    false,
                ];
                obj764.methods["push"] = func820;
                func820.definitionLine = 97;
                func820.definitionModule = "natList";
                var func822 = function(argcv) {    // method addLast(0+)
                  var curarg = 1;
                  var var_sequenceClass = callmethod(Grace_prelude, "sequence", [0]);
                  var var_x_len = argcv[0] - 0;
                  var var_x_array = new GracePrimitiveArray(var_x_len);
                  for (var ix = 0; ix < var_x_len; ix++)
                    var_x_array._value[ix] = arguments[curarg++];
                  onSelf = true
                  var var_x = callmethod(var_sequenceClass, "fromPrimitiveArray", [2], var_x_array, new GraceNum(var_x_len));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(102)    // compilenode identifier;
                    onSelf = true;
                    var call823 = callmethod(this, "addAll", [1], var_x);
                    return call823;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func822.paramCounts = [
                    0,
                ];
                func822.variableArities = [
                    true,
                ];
                obj764.methods["addLast"] = func822;
                func822.definitionLine = 102;
                func822.definitionModule = "natList";
                var func824 = function(argcv) {    // method removeLast
                  var curarg = 1;
                  if (argcv[0] != 0)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for removeLast"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(106)    // compilenode call;
                    onSelf = true;
                    var call825 = callmethod(this, "size", [0]);
                    onSelf = true;
                    var call826 = callmethod(this, "at", [1], call825);
                    var var_result = call826;
                    setLineNumber(107)    // compilenode call;
                       // start native code from line 107
                    var result = GraceDone;
                    if (this.data.jsArray.length = 0) {
                        var msg = "index " + ix + " out of bounds 1.." + this.data.jsArray.length;
                        var BoundsError = callmethod(Grace_prelude, "BoundsError", [0]);
                        callmethod(BoundsError, "raise", [1], new GraceString(msg));
                    } else return this.data.jsArray.pop();
                    var nat827 = result;
                       // end native code insertion
                    return nat827;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func824.paramCounts = [
                    0,
                ];
                func824.variableArities = [
                    false,
                ];
                obj764.methods["removeLast"] = func824;
                func824.definitionLine = 105;
                func824.definitionModule = "natList";
                var func828 = function(argcv) {    // method addAllFirst(1)
                  var curarg = 1;
                  var var_l = arguments[curarg];
                  curarg++;
                  if (argcv[0] != 1)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for addAllFirst(1)"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(115)    // compilenode identifier;
                    var call829 = callmethod(var_l,"size", [0]);
                    var var_ix = call829;
                    setLineNumber(116)    // compilenode block;
                    var block830 = new GraceBlock(this, 116, 0);
                    block830.real = function() {
                      sourceObject = this;
                      var opresult833 = callmethod(var_ix, ">", [1], new GraceNum(0));
                      return opresult833;
                    };
                    var block834 = new GraceBlock(this, 116, 0);
                    block834.real = function() {
                      sourceObject = this;
                      setLineNumber(117)    // compilenode identifier;
                      var call835 = callmethod(var_l,"at", [1], var_ix);
                      var var_each = call835;
                      setLineNumber(118)    // compilenode identifier;
                      var diff838 = callmethod(var_ix, "-", [1], new GraceNum(1));
                      var_ix = diff838;
                      setLineNumber(119)    // compilenode call;
                         // start native code from line 119
                      var result = GraceDone;
                      this.data.jsArray.unshift(var_each);
                      var nat839 = result;
                         // end native code insertion
                      return nat839;
                    };
                    var call840 = callmethod(Grace_prelude, "while()do", [1, 1], block830, block834);
                    setLineNumber(121)    // compilenode identifier;
                    return this;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func828.paramCounts = [
                    1,
                ];
                func828.variableArities = [
                    false,
                ];
                obj764.methods["addAllFirst"] = func828;
                func828.definitionLine = 114;
                func828.definitionModule = "natList";
                var func841 = function(argcv) {    // method addFirst(0+)
                  var curarg = 1;
                  var var_sequenceClass = callmethod(Grace_prelude, "sequence", [0]);
                  var var_l_len = argcv[0] - 0;
                  var var_l_array = new GracePrimitiveArray(var_l_len);
                  for (var ix = 0; ix < var_l_len; ix++)
                    var_l_array._value[ix] = arguments[curarg++];
                  onSelf = true
                  var var_l = callmethod(var_sequenceClass, "fromPrimitiveArray", [2], var_l_array, new GraceNum(var_l_len));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(125)    // compilenode identifier;
                    onSelf = true;
                    var call842 = callmethod(this, "addAllFirst", [1], var_l);
                    return call842;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func841.paramCounts = [
                    0,
                ];
                func841.variableArities = [
                    true,
                ];
                obj764.methods["addFirst"] = func841;
                func841.definitionLine = 125;
                func841.definitionModule = "natList";
                var func843 = function(argcv) {    // method removeFirst
                  var curarg = 1;
                  if (argcv[0] != 0)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for removeFirst"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(129)    // compilenode num;
                    onSelf = true;
                    var call844 = callmethod(this, "removeAt", [1], new GraceNum(1));
                    return call844;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func843.paramCounts = [
                    0,
                ];
                func843.variableArities = [
                    false,
                ];
                obj764.methods["removeFirst"] = func843;
                func843.definitionLine = 128;
                func843.definitionModule = "natList";
                var func845 = function(argcv) {    // method removeAt(1)
                  var curarg = 1;
                  var var_n = arguments[curarg];
                  curarg++;
                  if (argcv[0] != 1)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for removeAt(1)"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(134)    // compilenode identifier;
                    onSelf = true;
                    var call846 = callmethod(this, "at", [1], var_n);
                    var var_removed = call846;
                    setLineNumber(135)    // compilenode call;
                       // start native code from line 135
                    var result = GraceDone;
                    this.data.jsArray.splice(var_n._value - 1, 1);
                    var nat847 = result;
                       // end native code insertion
                    setLineNumber(136)    // compilenode identifier;
                      return var_removed
                    return undefined;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func845.paramCounts = [
                    1,
                ];
                func845.variableArities = [
                    false,
                ];
                obj764.methods["removeAt"] = func845;
                func845.definitionLine = 133;
                func845.definitionModule = "natList";
                var func848 = function(argcv) {    // method remove(0+)
                  var curarg = 1;
                  var var_sequenceClass = callmethod(Grace_prelude, "sequence", [0]);
                  var var_v_len = argcv[0] - 0;
                  var var_v_array = new GracePrimitiveArray(var_v_len);
                  for (var ix = 0; ix < var_v_len; ix++)
                    var_v_array._value[ix] = arguments[curarg++];
                  onSelf = true
                  var var_v = callmethod(var_sequenceClass, "fromPrimitiveArray", [2], var_v_array, new GraceNum(var_v_len));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(141)    // compilenode identifier;
                    onSelf = true;
                    var call849 = callmethod(this, "removeAll", [1], var_v);
                    return call849;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func848.paramCounts = [
                    0,
                ];
                func848.variableArities = [
                    true,
                ];
                obj764.methods["remove"] = func848;
                func848.definitionLine = 140;
                func848.definitionModule = "natList";
                var func850 = function(argcv) {    // method remove(0+)ifAbsent(1)
                  var curarg = 1;
                  var var_sequenceClass = callmethod(Grace_prelude, "sequence", [0]);
                  var var_v_len = argcv[0] - 0;
                  var var_v_array = new GracePrimitiveArray(var_v_len);
                  for (var ix = 0; ix < var_v_len; ix++)
                    var_v_array._value[ix] = arguments[curarg++];
                  onSelf = true
                  var var_v = callmethod(var_sequenceClass, "fromPrimitiveArray", [2], var_v_array, new GraceNum(var_v_len));
                  var var_action = arguments[curarg];
                  curarg++;
                  if (argcv[1] != 1)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for ifAbsent (arg list 2) of remove(0+)ifAbsent(1)"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(146)    // compilenode identifier;
                    onSelf = true;
                    var call851 = callmethod(this, "removeAll()ifAbsent", [1, 1], var_v, var_action);
                    return call851;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func850.paramCounts = [
                    0,
                    1,
                ];
                func850.variableArities = [
                    true,
                    false,
                ];
                obj764.methods["remove()ifAbsent"] = func850;
                func850.definitionLine = 145;
                func850.definitionModule = "natList";
                var func852 = function(argcv) {    // method removeAll(1)
                  var curarg = 1;
                  var var_vs = arguments[curarg];
                  curarg++;
                  if (argcv[0] != 1)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for removeAll(1)"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(151)    // compilenode block;
                    var block853 = new GraceBlock(this, 151, 0);
                    block853.real = function() {
                      sourceObject = this;
                      var string854 = new GraceString("object not in list");
                      var call855 = callmethod(Grace_prelude, "NoSuchObject", [0]);
                      var call856 = callmethod(call855,"raise", [1], string854);
                      return call856;
                    };
                    onSelf = true;
                    var call857 = callmethod(this, "removeAll()ifAbsent", [1, 1], var_vs, block853);
                    return call857;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func852.paramCounts = [
                    1,
                ];
                func852.variableArities = [
                    false,
                ];
                obj764.methods["removeAll"] = func852;
                func852.definitionLine = 150;
                func852.definitionModule = "natList";
                var func858 = function(argcv) {    // method removeAll(1)ifAbsent(1)
                  var curarg = 1;
                  var var_vs = arguments[curarg];
                  curarg++;
                  if (argcv[0] != 1)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for removeAll (arg list 1) of removeAll(1)ifAbsent(1)"));
                  var var_action = arguments[curarg];
                  curarg++;
                  if (argcv[1] != 1)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for ifAbsent (arg list 2) of removeAll(1)ifAbsent(1)"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(156)    // compilenode block;
                    var block859 = new GraceBlock(this, 156, 1);
                    block859.real = function(var_each) {
                      sourceObject = this;
                      setLineNumber(157)    // compilenode block;
                      var block860 = new GraceBlock(this, 157, 0);
                      block860.real = function() {
                        sourceObject = this;
                        var call861 = callmethod(var_action,"apply", [0]);
                        throw new ReturnException(call861, returnTarget);
                        return undefined;
                      };
                      onSelf = true;
                      var call862 = callmethod(this, "indexOf()ifAbsent", [1, 1], var_each, block860);
                      var var_ix = call862;
                      setLineNumber(158)    // compilenode identifier;
                      onSelf = true;
                      var call863 = callmethod(this, "removeAt", [1], var_ix);
                      return call863;
                    };
                    var call864 = callmethod(Grace_prelude, "for()do", [1, 1], var_vs, block859);
                    setLineNumber(160)    // compilenode identifier;
                    return this;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func858.paramCounts = [
                    1,
                    1,
                ];
                func858.variableArities = [
                    false,
                    false,
                ];
                obj764.methods["removeAll()ifAbsent"] = func858;
                func858.definitionLine = 155;
                func858.definitionModule = "natList";
                var func865 = function(argcv) {    // method pop
                  var curarg = 1;
                  if (argcv[0] != 0)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for pop"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(164)    // compilenode call;
                    onSelf = true;
                    var call866 = callmethod(this, "removeLast", [0]);
                    return call866;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func865.paramCounts = [
                    0,
                ];
                func865.variableArities = [
                    false,
                ];
                obj764.methods["pop"] = func865;
                func865.definitionLine = 164;
                func865.definitionModule = "natList";
                var func867 = function(argcv) {    // method reversed
                  var curarg = 1;
                  if (argcv[0] != 0)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for reversed"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(167)    // compilenode call;
                    var call868 = callmethod(superDepth, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call869 = callmethod(call868, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call870 = callmethod(call869, "list", [0]);
                    var call871 = callmethod(call870,"empty", [0]);
                    var var_result = call871;
                    setLineNumber(168)    // compilenode block;
                    var block872 = new GraceBlock(this, 168, 1);
                    block872.real = function(var_each) {
                      sourceObject = this;
                      var call873 = callmethod(var_result,"addFirst", [1], var_each);
                      return call873;
                    };
                    onSelf = true;
                    var call874 = callmethod(this, "do", [1], block872);
                    setLineNumber(169)    // compilenode identifier;
                    return var_result;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func867.paramCounts = [
                    0,
                ];
                func867.variableArities = [
                    false,
                ];
                obj764.methods["reversed"] = func867;
                func867.definitionLine = 166;
                func867.definitionModule = "natList";
                var func875 = function(argcv) {    // method reverse
                  var curarg = 1;
                  if (argcv[0] != 0)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for reverse"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(172)    // compilenode call;
                    onSelf = true;
                    var call876 = callmethod(this, "size", [0]);
                    var var_hiIx = call876;
                    setLineNumber(173)    // compilenode num;
                    var var_loIx = new GraceNum(1);
                    setLineNumber(174)    // compilenode block;
                    var block877 = new GraceBlock(this, 174, 0);
                    block877.real = function() {
                      sourceObject = this;
                      var opresult880 = callmethod(var_loIx, "<", [1], var_hiIx);
                      return opresult880;
                    };
                    var block881 = new GraceBlock(this, 174, 0);
                    block881.real = function() {
                      sourceObject = this;
                      setLineNumber(175)    // compilenode identifier;
                      onSelf = true;
                      var call882 = callmethod(this, "at", [1], var_hiIx);
                      var var_hiVal = call882;
                      setLineNumber(176)    // compilenode identifier;
                      onSelf = true;
                      var call883 = callmethod(this, "at", [1], var_loIx);
                      onSelf = true;
                      var call884 = callmethod(this, "at()put", [1, 1], var_hiIx, call883);
                      setLineNumber(177)    // compilenode identifier;
                      onSelf = true;
                      var call885 = callmethod(this, "at()put", [1, 1], var_loIx, var_hiVal);
                      setLineNumber(178)    // compilenode identifier;
                      var diff888 = callmethod(var_hiIx, "-", [1], new GraceNum(1));
                      var_hiIx = diff888;
                      setLineNumber(179)    // compilenode identifier;
                      var opresult891 = callmethod(var_loIx, "+", [1], new GraceNum(1));
                      var_loIx = opresult891;
                      return opresult891;
                    };
                    var call892 = callmethod(Grace_prelude, "while()do", [1, 1], block877, block881);
                    setLineNumber(181)    // compilenode identifier;
                    return this;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func875.paramCounts = [
                    0,
                ];
                func875.variableArities = [
                    false,
                ];
                obj764.methods["reverse"] = func875;
                func875.definitionLine = 171;
                func875.definitionModule = "natList";
                var func893 = function(argcv) {    // method ++(1)
                  var curarg = 1;
                  var var_o = arguments[curarg];
                  curarg++;
                  if (argcv[0] != 1)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for ++(1)"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(185)    // compilenode call;
                    var call894 = callmethod(superDepth, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call895 = callmethod(call894, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call896 = callmethod(call895, "list", [0]);
                    var call897 = callmethod(call896,"withAll", [1], this);
                    var var_l = call897;
                    setLineNumber(186)    // compilenode identifier;
                    var call898 = callmethod(var_l,"addAll", [1], var_o);
                    return call898;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func893.paramCounts = [
                    1,
                ];
                func893.variableArities = [
                    false,
                ];
                obj764.methods["++"] = func893;
                func893.definitionLine = 184;
                func893.definitionModule = "natList";
                var func899 = function(argcv) {    // method asString
                  var curarg = 1;
                  if (argcv[0] != 0)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for asString"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(191)    // compilenode string;
                    var string900 = new GraceString("[");
                    var var_s = string900;
                    setLineNumber(192)    // compilenode call;
                    onSelf = true;
                    var call901 = callmethod(this, "size", [0]);
                    var var_curSize = call901;
                    setLineNumber(193)    // compilenode num;
                    var opresult904 = callmethod(new GraceNum(1), "..", [1], var_curSize);
                    var block905 = new GraceBlock(this, 193, 1);
                    block905.real = function(var_i) {
                      sourceObject = this;
                      setLineNumber(194)    // compilenode identifier;
                      onSelf = true;
                      var call906 = callmethod(this, "at", [1], var_i);
                      var call907 = callmethod(call906,"asString", [0]);
                      var opresult910 = callmethod(var_s, "++", [1], call907);
                      var_s = opresult910;
                      var if911 = GraceDone;
                      setLineNumber(195)    // compilenode identifier;
                      var opresult914 = callmethod(var_i, "<", [1], var_curSize);
                      if (Grace_isTrue(opresult914)) {
                        var string915 = new GraceString(",");
                        var opresult918 = callmethod(var_s, "++", [1], string915);
                        var_s = opresult918;
                        if911 = opresult918;
                      }
                      return if911;
                    };
                    var call919 = callmethod(Grace_prelude, "for()do", [1, 1], opresult904, block905);
                    setLineNumber(197)    // compilenode string;
                    var string920 = new GraceString("]");
                    var opresult923 = callmethod(var_s, "++", [1], string920);
                    return opresult923;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func899.paramCounts = [
                    0,
                ];
                func899.variableArities = [
                    false,
                ];
                obj764.methods["asString"] = func899;
                func899.definitionLine = 190;
                func899.definitionModule = "natList";
                var func924 = function(argcv) {    // method extend(1)
                  var curarg = 1;
                  var var_l = arguments[curarg];
                  curarg++;
                  if (argcv[0] != 1)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for extend(1)"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(201)    // compilenode identifier;
                    onSelf = true;
                    var call925 = callmethod(this, "addAll", [1], var_l);
                    return var_done;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func924.paramCounts = [
                    1,
                ];
                func924.variableArities = [
                    false,
                ];
                obj764.methods["extend"] = func924;
                func924.definitionLine = 201;
                func924.definitionModule = "natList";
                var func926 = function(argcv) {    // method contains(1)
                  var curarg = 1;
                  var var_element = arguments[curarg];
                  curarg++;
                  if (argcv[0] != 1)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for contains(1)"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(205)    // compilenode block;
                    var block927 = new GraceBlock(this, 205, 1);
                    block927.real = function(var_each) {
                      sourceObject = this;
                      var if928 = GraceDone;
                      var opresult931 = callmethod(var_each, "==", [1], var_element);
                      if (Grace_isTrue(opresult931)) {
                        throw new ReturnException(GraceTrue, returnTarget);
                        if928 = undefined;
                      }
                      return if928;
                    };
                    onSelf = true;
                    var call932 = callmethod(this, "do", [1], block927);
                    setLineNumber(206)    // compilenode identifier;
                      return GraceFalse
                    return undefined;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func926.paramCounts = [
                    1,
                ];
                func926.variableArities = [
                    false,
                ];
                obj764.methods["contains"] = func926;
                func926.definitionLine = 204;
                func926.definitionModule = "natList";
                var func933 = function(argcv) {    // method do(1)
                  var curarg = 1;
                  var var_block1 = arguments[curarg];
                  curarg++;
                  if (argcv[0] != 1)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for do(1)"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(211)    // compilenode num;
                    var var_i = new GraceNum(1);
                    setLineNumber(212)    // compilenode call;
                    onSelf = true;
                    var call934 = callmethod(this, "size", [0]);
                    var var_curSize = call934;
                    setLineNumber(213)    // compilenode block;
                    var block935 = new GraceBlock(this, 213, 0);
                    block935.real = function() {
                      sourceObject = this;
                      var opresult938 = callmethod(var_i, "<=", [1], var_curSize);
                      return opresult938;
                    };
                    var block939 = new GraceBlock(this, 213, 0);
                    block939.real = function() {
                      sourceObject = this;
                      setLineNumber(214)    // compilenode identifier;
                      onSelf = true;
                      var call940 = callmethod(this, "at", [1], var_i);
                      var call941 = callmethod(var_block1,"apply", [1], call940);
                      setLineNumber(215)    // compilenode identifier;
                      var opresult944 = callmethod(var_i, "+", [1], new GraceNum(1));
                      var_i = opresult944;
                      return opresult944;
                    };
                    var call945 = callmethod(Grace_prelude, "while()do", [1, 1], block935, block939);
                    return call945;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func933.paramCounts = [
                    1,
                ];
                func933.variableArities = [
                    false,
                ];
                obj764.methods["do"] = func933;
                func933.definitionLine = 210;
                func933.definitionModule = "natList";
                var func946 = function(argcv) {    // method ==(1)
                  var curarg = 1;
                  var var_other = arguments[curarg];
                  curarg++;
                  if (argcv[0] != 1)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for ==(1)"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(221)    // compilenode identifier;
                    var cases947 = [];
                    setLineNumber(222)    // compilenode block;
                    var block948 = new GraceBlock(this, 222, 1);
                    setLineNumber(0)    // compilenode string;
                    var string949 = new GraceString("o");
                    var call950 = callmethod(Grace_prelude, "VariablePattern", [0]);
                    var call951 = callmethod(call950,"new", [1], string949);
                    setLineNumber(222)    // compilenode call;
                    var call952 = callmethod(Grace_prelude, "Sequence", [0]);
                    setLineNumber(0)    // compilenode call;
                    var call953 = callmethod(Grace_prelude, "AndPattern", [0]);
                    var call954 = callmethod(call953,"new", [2], call951, call952);
                    block948.pattern = call954;
                    block948.real = function(var_o) {
                      sourceObject = this;
                      var if955 = GraceDone;
                      setLineNumber(223)    // compilenode identifier;
                      var call956 = callmethod(var_o,"size", [0]);
                      onSelf = true;
                      var call958 = callmethod(this, "size", [0]);
                      var opresult960 = callmethod(call958, "!=", [1], call956);
                      if (Grace_isTrue(opresult960)) {
                        throw new ReturnException(GraceFalse, returnTarget);
                        if955 = undefined;
                      }
                      setLineNumber(224)    // compilenode block;
                      var block961 = new GraceBlock(this, 224, 1);
                      block961.real = function(var_ix) {
                        sourceObject = this;
                        var if962 = GraceDone;
                        setLineNumber(225)    // compilenode identifier;
                        var call963 = callmethod(var_o,"at", [1], var_ix);
                        onSelf = true;
                        var call965 = callmethod(this, "at", [1], var_ix);
                        var opresult967 = callmethod(call965, "!=", [1], call963);
                        if (Grace_isTrue(opresult967)) {
                          setLineNumber(226)    // compilenode identifier;
                          throw new ReturnException(GraceFalse, returnTarget);
                          if962 = undefined;
                        }
                        return if962;
                      };
                      setLineNumber(224)    // compilenode call;
                      onSelf = true;
                      var call968 = callmethod(this, "indices", [0]);
                      var call969 = callmethod(call968,"do", [1], block961);
                      setLineNumber(229)    // compilenode identifier;
                      throw new ReturnException(GraceTrue, returnTarget);
                      return undefined;
                    };
                    cases947.push(block948);
                    setLineNumber(231)    // compilenode block;
                    var block970 = new GraceBlock(this, 231, 1);
                    block970.real = function(var___95____95__0) {
                      sourceObject = this;
                      setLineNumber(232)    // compilenode identifier;
                      throw new ReturnException(GraceFalse, returnTarget);
                      return undefined;
                    };
                    cases947.push(block970);
                    setLineNumber(231)    // compilematchcase;
                    var matchres947 = matchCase(var_other,cases947,false);
                    setModuleName("natList");
                    return matchres947;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func946.paramCounts = [
                    1,
                ];
                func946.variableArities = [
                    false,
                ];
                obj764.methods["=="] = func946;
                func946.definitionLine = 220;
                func946.definitionModule = "natList";
                var func971 = function(argcv) {    // method iterator
                  var curarg = 1;
                  if (argcv[0] != 0)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for iterator"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(238)    // compilenode object;
                    var obj972 = Grace_allocObject();
                    obj972.definitionModule = "natList";
                    obj972.definitionLine = 238;
                    obj972.outer = this;
                    var reader_natList_outer973 = function() {
                      return this.outer;
                    }
                    obj972.methods["outer"] = reader_natList_outer973;
                    var obj_init_972 = function () {
                      var origSuperDepth = superDepth;
                      superDepth = obj972;
                      var func974 = function(argcv) {    // method asDebugString
                        var curarg = 1;
                        if (argcv[0] != 0)
                          callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for asDebugString"));
                        setModuleName("natList");
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                          setLineNumber(241)    // compilenode string;
                          var string975 = new GraceString("\u27eb");
                          onSelf = true;
                          var call977 = callmethod(this, "idx", [0]);
                          var string979 = new GraceString("\u27ea");
                          onSelf = true;
                          var call981 = callmethod(this, "asString", [0]);
                          var string983 = new GraceString("");
                          var opresult985 = callmethod(string983, "++", [1], call981);
                          var opresult987 = callmethod(opresult985, "++", [1], string979);
                          var opresult989 = callmethod(opresult987, "++", [1], call977);
                          var opresult991 = callmethod(opresult989, "++", [1], string975);
                          return opresult991;
                        } catch(e) {
                          if ((e.exctype == 'return') && (e.target == returnTarget)) {
                            return e.returnvalue;
                          } else {
                            throw e;
                          }
                        }
                      }
                      func974.paramCounts = [
                          0,
                      ];
                      func974.variableArities = [
                          false,
                      ];
                      obj972.methods["asDebugString"] = func974;
                      func974.definitionLine = 241;
                      func974.definitionModule = "natList";
                      var func992 = function(argcv) {    // method asString
                        var curarg = 1;
                        if (argcv[0] != 0)
                          callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for asString"));
                        setModuleName("natList");
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                          setLineNumber(242)    // compilenode string;
                          var string993 = new GraceString("aListIterator");
                          return string993;
                        } catch(e) {
                          if ((e.exctype == 'return') && (e.target == returnTarget)) {
                            return e.returnvalue;
                          } else {
                            throw e;
                          }
                        }
                      }
                      func992.paramCounts = [
                          0,
                      ];
                      func992.variableArities = [
                          false,
                      ];
                      obj972.methods["asString"] = func992;
                      func992.definitionLine = 242;
                      func992.definitionModule = "natList";
                      var func994 = function(argcv) {    // method havemore
                        var curarg = 1;
                        if (argcv[0] != 0)
                          callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for havemore"));
                        setModuleName("natList");
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                          setLineNumber(243)    // compilenode call;
                          var call995 = callmethod(superDepth, "outer", [0]);
                          onOuter = true;
                          onSelf = true;
                          var call996 = callmethod(call995, "size", [0]);
                          onSelf = true;
                          var call998 = callmethod(this, "idx", [0]);
                          var opresult1000 = callmethod(call998, "<=", [1], call996);
                          return opresult1000;
                        } catch(e) {
                          if ((e.exctype == 'return') && (e.target == returnTarget)) {
                            return e.returnvalue;
                          } else {
                            throw e;
                          }
                        }
                      }
                      func994.paramCounts = [
                          0,
                      ];
                      func994.variableArities = [
                          false,
                      ];
                      obj972.methods["havemore"] = func994;
                      func994.definitionLine = 243;
                      func994.definitionModule = "natList";
                      var func1001 = function(argcv) {    // method hasNext
                        var curarg = 1;
                        if (argcv[0] != 0)
                          callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for hasNext"));
                        setModuleName("natList");
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                          setLineNumber(244)    // compilenode call;
                          var call1002 = callmethod(superDepth, "outer", [0]);
                          onOuter = true;
                          onSelf = true;
                          var call1003 = callmethod(call1002, "size", [0]);
                          onSelf = true;
                          var call1005 = callmethod(this, "idx", [0]);
                          var opresult1007 = callmethod(call1005, "<=", [1], call1003);
                          return opresult1007;
                        } catch(e) {
                          if ((e.exctype == 'return') && (e.target == returnTarget)) {
                            return e.returnvalue;
                          } else {
                            throw e;
                          }
                        }
                      }
                      func1001.paramCounts = [
                          0,
                      ];
                      func1001.variableArities = [
                          false,
                      ];
                      obj972.methods["hasNext"] = func1001;
                      func1001.definitionLine = 244;
                      func1001.definitionModule = "natList";
                      var func1008 = function(argcv) {    // method next
                        var curarg = 1;
                        if (argcv[0] != 0)
                          callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for next"));
                        setModuleName("natList");
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                          var if1009 = GraceDone;
                          setLineNumber(246)    // compilenode call;
                          var call1010 = callmethod(superDepth, "outer", [0]);
                          onOuter = true;
                          onSelf = true;
                          var call1011 = callmethod(call1010, "size", [0]);
                          onSelf = true;
                          var call1013 = callmethod(this, "idx", [0]);
                          var opresult1015 = callmethod(call1013, ">", [1], call1011);
                          if (Grace_isTrue(opresult1015)) {
                            var string1016 = new GraceString("on list");
                            var call1017 = callmethod(Grace_prelude, "Exhausted", [0]);
                            var call1018 = callmethod(call1017,"raise", [1], string1016);
                            if1009 = call1018;
                          }
                          setLineNumber(247)    // compilenode call;
                          onSelf = true;
                          var call1019 = callmethod(this, "idx", [0]);
                          var call1020 = callmethod(superDepth, "outer", [0]);
                          onOuter = true;
                          onSelf = true;
                          var call1021 = callmethod(call1020, "at", [1], call1019);
                          var var_ret = call1021;
                          setLineNumber(248)    // compilenode call;
                          onSelf = true;
                          var call1023 = callmethod(this, "idx", [0]);
                          var opresult1025 = callmethod(call1023, "+", [1], new GraceNum(1));
                          onSelf = true;
                          var call1026 = callmethod(this, "idx:=", [1], opresult1025);
                          setLineNumber(249)    // compilenode identifier;
                          return var_ret;
                        } catch(e) {
                          if ((e.exctype == 'return') && (e.target == returnTarget)) {
                            return e.returnvalue;
                          } else {
                            throw e;
                          }
                        }
                      }
                      func1008.paramCounts = [
                          0,
                      ];
                      func1008.variableArities = [
                          false,
                      ];
                      obj972.methods["next"] = func1008;
                      func1008.definitionLine = 245;
                      func1008.definitionModule = "natList";
                      sourceObject = obj972;
                      setLineNumber(239)    // compilenode call;
                      var call1027 = callmethod(Grace_prelude, "iterable", [0]);
                      var call1028 = callmethod(call1027,"trait()object", [0, 1], this);
                      obj972.superobj = call1028;
                      obj972._value = call1028._value;
                      sourceObject = obj972;
                      setLineNumber(240)    // compilenode num;
                      obj972.data["idx"] = new GraceNum(1);
                      var reader_natList_idx1029 = function() {
                        return this.data["idx"];
                      }
                      obj972.methods["idx"] = reader_natList_idx1029;
                      obj972.data["idx"] = new GraceNum(1);
                      var writer_natList_idx1029 = function(argcv, o) {
                        this.data["idx"] = o;
                      }
                      obj972.methods["idx:="] = writer_natList_idx1029;
                      reader_natList_idx1029.confidential = true;
                      writer_natList_idx1029.confidential = true;
                      obj972.mutable = true;
                      sourceObject = obj972;
                      sourceObject = obj972;
                      sourceObject = obj972;
                      sourceObject = obj972;
                      sourceObject = obj972;
                      superDepth = origSuperDepth;
                    }
                    obj_init_972.apply(obj972, []);
                    return obj972;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func971.paramCounts = [
                    0,
                ];
                func971.variableArities = [
                    false,
                ];
                obj764.methods["iterator"] = func971;
                func971.definitionLine = 237;
                func971.definitionModule = "natList";
                  var func1030 = function(argcv) {    // method iterator()object
                    var curarg = 1;
                    var inheritingObject = arguments[curarg++];
                    var returnTarget = invocationCount;
                    invocationCount++;
                    try {
                      var obj1031 = Grace_allocObject();
                      obj1031.definitionModule = "natList";
                      obj1031.definitionLine = 238;
                      var inho1031 = inheritingObject;
                      while (inho1031.superobj) inho1031 = inho1031.superobj;
                      inho1031.superobj = obj1031;
                      obj1031.data = inheritingObject.data;
                      obj1031.outer = this;
                      var reader_natList_outer1032 = function() {
                        return this.outer;
                      }
                      obj1031.methods["outer"] = reader_natList_outer1032;
                      var obj_init_1031 = function () {
                        var origSuperDepth = superDepth;
                        superDepth = obj1031;
                        var func1033 = function(argcv) {    // method asDebugString
                          var curarg = 1;
                          if (argcv[0] != 0)
                            callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for asDebugString"));
                          setModuleName("natList");
                          var returnTarget = invocationCount;
                          invocationCount++;
                          try {
                            setLineNumber(241)    // compilenode string;
                            var string1034 = new GraceString("\u27eb");
                            onSelf = true;
                            var call1036 = callmethod(this, "idx", [0]);
                            var string1038 = new GraceString("\u27ea");
                            onSelf = true;
                            var call1040 = callmethod(this, "asString", [0]);
                            var string1042 = new GraceString("");
                            var opresult1044 = callmethod(string1042, "++", [1], call1040);
                            var opresult1046 = callmethod(opresult1044, "++", [1], string1038);
                            var opresult1048 = callmethod(opresult1046, "++", [1], call1036);
                            var opresult1050 = callmethod(opresult1048, "++", [1], string1034);
                            return opresult1050;
                          } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                              return e.returnvalue;
                            } else {
                              throw e;
                            }
                          }
                        }
                        func1033.paramCounts = [
                            0,
                        ];
                        func1033.variableArities = [
                            false,
                        ];
                        obj1031.methods["asDebugString"] = func1033;
                        func1033.definitionLine = 241;
                        func1033.definitionModule = "natList";
                        var func1051 = function(argcv) {    // method asString
                          var curarg = 1;
                          if (argcv[0] != 0)
                            callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for asString"));
                          setModuleName("natList");
                          var returnTarget = invocationCount;
                          invocationCount++;
                          try {
                            setLineNumber(242)    // compilenode string;
                            var string1052 = new GraceString("aListIterator");
                            return string1052;
                          } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                              return e.returnvalue;
                            } else {
                              throw e;
                            }
                          }
                        }
                        func1051.paramCounts = [
                            0,
                        ];
                        func1051.variableArities = [
                            false,
                        ];
                        obj1031.methods["asString"] = func1051;
                        func1051.definitionLine = 242;
                        func1051.definitionModule = "natList";
                        var func1053 = function(argcv) {    // method havemore
                          var curarg = 1;
                          if (argcv[0] != 0)
                            callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for havemore"));
                          setModuleName("natList");
                          var returnTarget = invocationCount;
                          invocationCount++;
                          try {
                            setLineNumber(243)    // compilenode call;
                            var call1054 = callmethod(superDepth, "outer", [0]);
                            onOuter = true;
                            onSelf = true;
                            var call1055 = callmethod(call1054, "size", [0]);
                            onSelf = true;
                            var call1057 = callmethod(this, "idx", [0]);
                            var opresult1059 = callmethod(call1057, "<=", [1], call1055);
                            return opresult1059;
                          } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                              return e.returnvalue;
                            } else {
                              throw e;
                            }
                          }
                        }
                        func1053.paramCounts = [
                            0,
                        ];
                        func1053.variableArities = [
                            false,
                        ];
                        obj1031.methods["havemore"] = func1053;
                        func1053.definitionLine = 243;
                        func1053.definitionModule = "natList";
                        var func1060 = function(argcv) {    // method hasNext
                          var curarg = 1;
                          if (argcv[0] != 0)
                            callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for hasNext"));
                          setModuleName("natList");
                          var returnTarget = invocationCount;
                          invocationCount++;
                          try {
                            setLineNumber(244)    // compilenode call;
                            var call1061 = callmethod(superDepth, "outer", [0]);
                            onOuter = true;
                            onSelf = true;
                            var call1062 = callmethod(call1061, "size", [0]);
                            onSelf = true;
                            var call1064 = callmethod(this, "idx", [0]);
                            var opresult1066 = callmethod(call1064, "<=", [1], call1062);
                            return opresult1066;
                          } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                              return e.returnvalue;
                            } else {
                              throw e;
                            }
                          }
                        }
                        func1060.paramCounts = [
                            0,
                        ];
                        func1060.variableArities = [
                            false,
                        ];
                        obj1031.methods["hasNext"] = func1060;
                        func1060.definitionLine = 244;
                        func1060.definitionModule = "natList";
                        var func1067 = function(argcv) {    // method next
                          var curarg = 1;
                          if (argcv[0] != 0)
                            callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for next"));
                          setModuleName("natList");
                          var returnTarget = invocationCount;
                          invocationCount++;
                          try {
                            var if1068 = GraceDone;
                            setLineNumber(246)    // compilenode call;
                            var call1069 = callmethod(superDepth, "outer", [0]);
                            onOuter = true;
                            onSelf = true;
                            var call1070 = callmethod(call1069, "size", [0]);
                            onSelf = true;
                            var call1072 = callmethod(this, "idx", [0]);
                            var opresult1074 = callmethod(call1072, ">", [1], call1070);
                            if (Grace_isTrue(opresult1074)) {
                              var string1075 = new GraceString("on list");
                              var call1076 = callmethod(Grace_prelude, "Exhausted", [0]);
                              var call1077 = callmethod(call1076,"raise", [1], string1075);
                              if1068 = call1077;
                            }
                            setLineNumber(247)    // compilenode call;
                            onSelf = true;
                            var call1078 = callmethod(this, "idx", [0]);
                            var call1079 = callmethod(superDepth, "outer", [0]);
                            onOuter = true;
                            onSelf = true;
                            var call1080 = callmethod(call1079, "at", [1], call1078);
                            var var_ret = call1080;
                            setLineNumber(248)    // compilenode call;
                            onSelf = true;
                            var call1082 = callmethod(this, "idx", [0]);
                            var opresult1084 = callmethod(call1082, "+", [1], new GraceNum(1));
                            onSelf = true;
                            var call1085 = callmethod(this, "idx:=", [1], opresult1084);
                            setLineNumber(249)    // compilenode identifier;
                            return var_ret;
                          } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                              return e.returnvalue;
                            } else {
                              throw e;
                            }
                          }
                        }
                        func1067.paramCounts = [
                            0,
                        ];
                        func1067.variableArities = [
                            false,
                        ];
                        obj1031.methods["next"] = func1067;
                        func1067.definitionLine = 245;
                        func1067.definitionModule = "natList";
                        sourceObject = obj1031;
                        setLineNumber(239)    // compilenode call;
                        var call1086 = callmethod(Grace_prelude, "iterable", [0]);
                        var call1087 = callmethod(call1086,"trait()object", [0, 1], this);
                        obj1031.superobj = call1087;
                        obj1031._value = call1087._value;
                        sourceObject = obj1031;
                        setLineNumber(240)    // compilenode num;
                        obj1031.data["idx"] = new GraceNum(1);
                        var reader_natList_idx1088 = function() {
                          return this.data["idx"];
                        }
                        obj1031.methods["idx"] = reader_natList_idx1088;
                        obj1031.data["idx"] = new GraceNum(1);
                        var writer_natList_idx1088 = function(argcv, o) {
                          this.data["idx"] = o;
                        }
                        obj1031.methods["idx:="] = writer_natList_idx1088;
                        reader_natList_idx1088.confidential = true;
                        writer_natList_idx1088.confidential = true;
                        obj1031.mutable = true;
                        sourceObject = obj1031;
                        sourceObject = obj1031;
                        sourceObject = obj1031;
                        sourceObject = obj1031;
                        sourceObject = obj1031;
                        superDepth = origSuperDepth;
                      }
                      obj_init_1031.apply(inheritingObject, []);
                      return obj1031;
                    } catch(e) {
                      if ((e.exctype == 'return') && (e.target == returnTarget)) {
                        return e.returnvalue;
                      } else {
                        throw e;
                      }
                    }
                  }
                  obj764.methods["iterator()object"] = func1030;
                var func1089 = function(argcv) {    // method values
                  var curarg = 1;
                  if (argcv[0] != 0)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for values"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(256)    // compilenode call;
                    onSelf = true;
                    var call1090 = callmethod(this, "iterator", [0]);
                    return call1090;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func1089.paramCounts = [
                    0,
                ];
                func1089.variableArities = [
                    false,
                ];
                obj764.methods["values"] = func1089;
                func1089.definitionLine = 255;
                func1089.definitionModule = "natList";
                var func1091 = function(argcv) {    // method keys
                  var curarg = 1;
                  if (argcv[0] != 0)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for keys"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(261)    // compilenode call;
                    onSelf = true;
                    var call1092 = callmethod(this, "indices", [0]);
                    var call1093 = callmethod(call1092,"iterator", [0]);
                    return call1093;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func1091.paramCounts = [
                    0,
                ];
                func1091.variableArities = [
                    false,
                ];
                obj764.methods["keys"] = func1091;
                func1091.definitionLine = 260;
                func1091.definitionModule = "natList";
                var func1094 = function(argcv) {    // method keysAndValuesDo(1)
                  var curarg = 1;
                  var var_block2 = arguments[curarg];
                  curarg++;
                  if (argcv[0] != 1)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for keysAndValuesDo(1)"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(266)    // compilenode call;
                    onSelf = true;
                    var call1095 = callmethod(this, "size", [0]);
                    var var_curSize = call1095;
                    setLineNumber(267)    // compilenode num;
                    var var_i = new GraceNum(1);
                    setLineNumber(268)    // compilenode block;
                    var block1096 = new GraceBlock(this, 268, 0);
                    block1096.real = function() {
                      sourceObject = this;
                      onSelf = true;
                      var call1097 = callmethod(this, "size", [0]);
                      var opresult1100 = callmethod(var_i, "<=", [1], call1097);
                      return opresult1100;
                    };
                    var block1101 = new GraceBlock(this, 268, 0);
                    block1101.real = function() {
                      sourceObject = this;
                      setLineNumber(269)    // compilenode identifier;
                      onSelf = true;
                      var call1102 = callmethod(this, "at", [1], var_i);
                      var call1103 = callmethod(var_block2,"apply", [2], var_i, call1102);
                      setLineNumber(270)    // compilenode identifier;
                      var opresult1106 = callmethod(var_i, "+", [1], new GraceNum(1));
                      var_i = opresult1106;
                      return opresult1106;
                    };
                    var call1107 = callmethod(Grace_prelude, "while()do", [1, 1], block1096, block1101);
                    return call1107;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func1094.paramCounts = [
                    1,
                ];
                func1094.variableArities = [
                    false,
                ];
                obj764.methods["keysAndValuesDo"] = func1094;
                func1094.definitionLine = 265;
                func1094.definitionModule = "natList";
                var func1108 = function(argcv) {    // method sortBy(1)
                  var curarg = 1;
                  var var_sortBlock = arguments[curarg];
                  curarg++;
                  if (argcv[0] != 1)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for sortBy(1)"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(275)    // compilenode call;
                       // start native code from line 275
                    var result = GraceDone;
                    var compareFun = function compareFun(a, b) {
                      var res = callmethod(var_sortBlock, "apply", [2], a, b);
                      if (res.className == "number") return res._value;
                      throw new GraceExceptionPacket(TypeErrorObject,
                             new GraceString("sort block in list.sortBy method did not return a number"));
                  }
                  this.data.jsArray.sort(compareFun);
                    var nat1109 = result;
                       // end native code insertion
                    setLineNumber(282)    // compilenode identifier;
                    return this;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func1108.paramCounts = [
                    1,
                ];
                func1108.variableArities = [
                    false,
                ];
                obj764.methods["sortBy"] = func1108;
                func1108.definitionLine = 274;
                func1108.definitionModule = "natList";
                var func1110 = function(argcv) {    // method sort
                  var curarg = 1;
                  if (argcv[0] != 0)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for sort"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(287)    // compilenode block;
                    var block1111 = new GraceBlock(this, 287, 2);
                    block1111.real = function(var_l, var_r) {
                      sourceObject = this;
                      var if1112 = GraceDone;
                      setLineNumber(288)    // compilenode identifier;
                      var opresult1115 = callmethod(var_l, "==", [1], var_r);
                      if (Grace_isTrue(opresult1115)) {
                        if1112 = new GraceNum(0);
                      } else {
                        var if1116 = GraceDone;
                        setLineNumber(289)    // compilenode identifier;
                        var opresult1119 = callmethod(var_l, "<", [1], var_r);
                        if (Grace_isTrue(opresult1119)) {
                          var call1120 = callmethod(new GraceNum(1),"prefix-", [0]);
                          if1116 = call1120;
                        } else {
                          setLineNumber(290)    // compilenode num;
                          if1116 = new GraceNum(1);
                        }
                        if1112 = if1116;
                      }
                      return if1112;
                    };
                    onSelf = true;
                    var call1121 = callmethod(this, "sortBy", [1], block1111);
                    return call1121;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func1110.paramCounts = [
                    0,
                ];
                func1110.variableArities = [
                    false,
                ];
                obj764.methods["sort"] = func1110;
                func1110.definitionLine = 286;
                func1110.definitionModule = "natList";
                var func1122 = function(argcv) {    // method copySortedBy(1)
                  var curarg = 1;
                  var var_sortBlock = arguments[curarg];
                  curarg++;
                  if (argcv[0] != 1)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for copySortedBy(1)"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(294)    // compilenode call;
                    onSelf = true;
                    var call1123 = callmethod(this, "copy", [0]);
                    var call1124 = callmethod(call1123,"sortBy", [1], var_sortBlock);
                    return call1124;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func1122.paramCounts = [
                    1,
                ];
                func1122.variableArities = [
                    false,
                ];
                obj764.methods["copySortedBy"] = func1122;
                func1122.definitionLine = 293;
                func1122.definitionModule = "natList";
                var func1125 = function(argcv) {    // method copySorted
                  var curarg = 1;
                  if (argcv[0] != 0)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for copySorted"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(297)    // compilenode call;
                    onSelf = true;
                    var call1126 = callmethod(this, "copy", [0]);
                    var call1127 = callmethod(call1126,"sort", [0]);
                    return call1127;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func1125.paramCounts = [
                    0,
                ];
                func1125.variableArities = [
                    false,
                ];
                obj764.methods["copySorted"] = func1125;
                func1125.definitionLine = 296;
                func1125.definitionModule = "natList";
                var func1128 = function(argcv) {    // method copy
                  var curarg = 1;
                  if (argcv[0] != 0)
                    callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for copy"));
                  setModuleName("natList");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  try {
                    setLineNumber(300)    // compilenode call;
                    var call1129 = callmethod(superDepth, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call1130 = callmethod(call1129, "withAll", [1], this);
                    return call1130;
                  } catch(e) {
                    if ((e.exctype == 'return') && (e.target == returnTarget)) {
                      return e.returnvalue;
                    } else {
                      throw e;
                    }
                  }
                }
                func1128.paramCounts = [
                    0,
                ];
                func1128.variableArities = [
                    false,
                ];
                obj764.methods["copy"] = func1128;
                func1128.definitionLine = 299;
                func1128.definitionModule = "natList";
                sourceObject = obj764;
                setLineNumber(12)    // compilenode call;
                var call1131 = callmethod(Grace_prelude, "collections", [0]);
                var call1132 = callmethod(call1131,"indexable", [0]);
                var call1133 = callmethod(call1132,"trait()object", [0, 1], this);
                obj764.superobj = call1133;
                obj764._value = call1133._value;
                sourceObject = obj764;
                setLineNumber(13)    // compilenode num;
                obj764.data["sz"] = new GraceNum(0);
                var reader_natList_sz1134 = function() {
                  return this.data["sz"];
                }
                obj764.methods["sz"] = reader_natList_sz1134;
                obj764.data["sz"] = new GraceNum(0);
                var writer_natList_sz1134 = function(argcv, o) {
                  this.data["sz"] = o;
                }
                obj764.methods["sz:="] = writer_natList_sz1134;
                reader_natList_sz1134.confidential = true;
                writer_natList_sz1134.confidential = true;
                obj764.mutable = true;
                sourceObject = obj764;
                setLineNumber(14)    // compilenode call;
                   // start native code from line 14
                var result = GraceDone;
                var result = [];
                var nat1135 = result;
                   // end native code insertion
                obj764.data["jsArray"] = nat1135;
                var reader_natList_jsArray1136 = function() {
                  return this.data["jsArray"];
                }
                obj764.methods["jsArray"] = reader_natList_jsArray1136;
                obj764.data["jsArray"] = nat1135;
                var writer_natList_jsArray1136 = function(argcv, o) {
                  this.data["jsArray"] = o;
                }
                obj764.methods["jsArray:="] = writer_natList_jsArray1136;
                reader_natList_jsArray1136.confidential = true;
                writer_natList_jsArray1136.confidential = true;
                obj764.mutable = true;
                sourceObject = obj764;
                setLineNumber(15)    // compilenode block;
                var block1137 = new GraceBlock(this, 15, 1);
                block1137.real = function(var_each) {
                  sourceObject = this;
                  setLineNumber(16)    // compilenode call;
                     // start native code from line 16
                  var result = GraceDone;
                  this.data.jsArray.push(var_each);
                  var nat1138 = result;
                     // end native code insertion
                  return nat1138;
                };
                setLineNumber(15)    // compilenode identifier;
                var call1139 = callmethod(var_a,"do", [1], block1137);
                sourceObject = obj764;
                sourceObject = obj764;
                sourceObject = obj764;
                sourceObject = obj764;
                sourceObject = obj764;
                sourceObject = obj764;
                sourceObject = obj764;
                sourceObject = obj764;
                sourceObject = obj764;
                sourceObject = obj764;
                sourceObject = obj764;
                sourceObject = obj764;
                sourceObject = obj764;
                sourceObject = obj764;
                sourceObject = obj764;
                sourceObject = obj764;
                sourceObject = obj764;
                sourceObject = obj764;
                sourceObject = obj764;
                sourceObject = obj764;
                sourceObject = obj764;
                sourceObject = obj764;
                sourceObject = obj764;
                sourceObject = obj764;
                sourceObject = obj764;
                sourceObject = obj764;
                sourceObject = obj764;
                sourceObject = obj764;
                sourceObject = obj764;
                sourceObject = obj764;
                sourceObject = obj764;
                sourceObject = obj764;
                sourceObject = obj764;
                sourceObject = obj764;
                sourceObject = obj764;
                sourceObject = obj764;
                sourceObject = obj764;
                superDepth = origSuperDepth;
              }
              obj_init_764.apply(obj764, []);
              return obj764;
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func763.paramCounts = [
              1,
          ];
          func763.variableArities = [
              false,
          ];
          obj761.methods["withAll"] = func763;
          func763.definitionLine = 11;
          func763.definitionModule = "natList";
            var func1140 = function(argcv) {    // method withAll(1)()object
              var curarg = 1;
              var var_a = arguments[curarg];
              curarg++;
              var inheritingObject = arguments[curarg++];
              var returnTarget = invocationCount;
              invocationCount++;
              try {
                var obj1141 = Grace_allocObject();
                obj1141.definitionModule = "natList";
                obj1141.definitionLine = 11;
                var inho1141 = inheritingObject;
                while (inho1141.superobj) inho1141 = inho1141.superobj;
                inho1141.superobj = obj1141;
                obj1141.data = inheritingObject.data;
                obj1141.outer = this;
                var reader_natList_outer1142 = function() {
                  return this.outer;
                }
                obj1141.methods["outer"] = reader_natList_outer1142;
                var obj_init_1141 = function () {
                  var origSuperDepth = superDepth;
                  superDepth = obj1141;
                  var func1143 = function(argcv) {    // method boundsCheck(1)
                    var curarg = 1;
                    var var_n = arguments[curarg];
                    curarg++;
                    if (argcv[0] != 1)
                      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for boundsCheck(1)"));
                    setModuleName("natList");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    try {
                      setLineNumber(21)    // compilenode call;
                         // start native code from line 21
                      var result = GraceDone;
                      var ix = var_n._value;
                    if ((ix < 1) || (ix > this.data.jsArray.length)) {
                        var msg = "index " + ix + " out of bounds 1.." + this.data.jsArray.length;
                        var BoundsError = callmethod(Grace_prelude, "BoundsError", [0]);
                        callmethod(BoundsError,"raise", [1], new GraceString(msg));
                    }
                      var nat1144 = result;
                         // end native code insertion
                      var if1145 = GraceDone;
                      setLineNumber(27)    // compilenode call;
                      onSelf = true;
                      var call1146 = callmethod(this, "size", [0]);
                      var opresult1149 = callmethod(var_n, ">", [1], call1146);
                      var opresult1153 = callmethod(var_n, "<", [1], new GraceNum(1));
                      var opresult1155 = callmethod(opresult1153, "||", [1], opresult1149);
                      if (Grace_isTrue(opresult1155)) {
                        setLineNumber(28)    // compilenode string;
                        var string1156 = new GraceString("");
                        onSelf = true;
                        var call1158 = callmethod(this, "size", [0]);
                        var string1160 = new GraceString(" out of bounds 1..");
                        var string1163 = new GraceString("index ");
                        var opresult1165 = callmethod(string1163, "++", [1], var_n);
                        var opresult1167 = callmethod(opresult1165, "++", [1], string1160);
                        var opresult1169 = callmethod(opresult1167, "++", [1], call1158);
                        var opresult1171 = callmethod(opresult1169, "++", [1], string1156);
                        var call1172 = callmethod(Grace_prelude, "BoundsError", [0]);
                        var call1173 = callmethod(call1172,"raise", [1], opresult1171);
                        if1145 = call1173;
                      }
                      return if1145;
                    } catch(e) {
                      if ((e.exctype == 'return') && (e.target == returnTarget)) {
                        return e.returnvalue;
                      } else {
                        throw e;
                      }
                    }
                  }
                    func1143.confidential = true;
                  func1143.paramCounts = [
                      1,
                  ];
                  func1143.variableArities = [
                      false,
                  ];
                  obj1141.methods["boundsCheck"] = func1143;
                  func1143.definitionLine = 20;
                  func1143.definitionModule = "natList";
                  var func1174 = function(argcv) {    // method size
                    var curarg = 1;
                    if (argcv[0] != 0)
                      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for size"));
                    setModuleName("natList");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    try {
                      setLineNumber(34)    // compilenode call;
                         // start native code from line 34
                      var result = GraceDone;
                      return new GraceNum(this.data.jsArray.length)
                      var nat1175 = result;
                         // end native code insertion
                      setLineNumber(35)    // compilenode call;
                      onSelf = true;
                      var call1176 = callmethod(this, "sz", [0]);
                      return call1176;
                    } catch(e) {
                      if ((e.exctype == 'return') && (e.target == returnTarget)) {
                        return e.returnvalue;
                      } else {
                        throw e;
                      }
                    }
                  }
                  func1174.paramCounts = [
                      0,
                  ];
                  func1174.variableArities = [
                      false,
                  ];
                  obj1141.methods["size"] = func1174;
                  func1174.definitionLine = 33;
                  func1174.definitionModule = "natList";
                  var func1177 = function(argcv) {    // method at(1)
                    var curarg = 1;
                    var var_n = arguments[curarg];
                    curarg++;
                    if (argcv[0] != 1)
                      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for at(1)"));
                    setModuleName("natList");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    try {
                      setLineNumber(40)    // compilenode call;
                         // start native code from line 40
                      var result = GraceDone;
                      var ix = var_n._value;
                    if ((ix < 1) || (ix > this.data.jsArray.length)) {
                        var msg = "index " + ix + " out of bounds 1.." + this.data.jsArray.length;
                        var BoundsError = callmethod(Grace_prelude, "BoundsError", [0]);
                        callmethod(BoundsError, "raise", [1], new GraceString(msg));
                    }
                    return this.data.jsArray[ix - 1];
                      var nat1178 = result;
                         // end native code insertion
                      return nat1178;
                    } catch(e) {
                      if ((e.exctype == 'return') && (e.target == returnTarget)) {
                        return e.returnvalue;
                      } else {
                        throw e;
                      }
                    }
                  }
                  func1177.paramCounts = [
                      1,
                  ];
                  func1177.variableArities = [
                      false,
                  ];
                  obj1141.methods["at"] = func1177;
                  func1177.definitionLine = 39;
                  func1177.definitionModule = "natList";
                  var func1179 = function(argcv) {    // method [(1)
                    var curarg = 1;
                    var var_n = arguments[curarg];
                    curarg++;
                    if (argcv[0] != 1)
                      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for [(1)"));
                    setModuleName("natList");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    try {
                      setLineNumber(51)    // compilenode call;
                         // start native code from line 51
                      var result = GraceDone;
                      var ix = var_n._value;
                    if ((ix < 1) || (ix > this.data.jsArray.length)) {
                        var msg = "index " + ix + " out of bounds 1.." + this.data.jsArray.length;
                        var BoundsError = callmethod(Grace_prelude, "BoundsError", [0]);
                        callmethod(BoundsError, "raise", [1], new GraceString(msg));
                    }
                    return this.data.jsArray[ix - 1];
                      var nat1180 = result;
                         // end native code insertion
                      return nat1180;
                    } catch(e) {
                      if ((e.exctype == 'return') && (e.target == returnTarget)) {
                        return e.returnvalue;
                      } else {
                        throw e;
                      }
                    }
                  }
                  func1179.paramCounts = [
                      1,
                  ];
                  func1179.variableArities = [
                      false,
                  ];
                  obj1141.methods["[]"] = func1179;
                  func1179.definitionLine = 50;
                  func1179.definitionModule = "natList";
                  var func1181 = function(argcv) {    // method at(1)put(1)
                    var curarg = 1;
                    var var_n = arguments[curarg];
                    curarg++;
                    if (argcv[0] != 1)
                      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for at (arg list 1) of at(1)put(1)"));
                    var var_x = arguments[curarg];
                    curarg++;
                    if (argcv[1] != 1)
                      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for put (arg list 2) of at(1)put(1)"));
                    setModuleName("natList");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    try {
                      setLineNumber(62)    // compilenode call;
                         // start native code from line 62
                      var result = GraceDone;
                      var  ix = var_n._value;
                    if ((ix < 1) || (ix > this.data.jsArray.length + 1)) {
                        var msg = "index " + ix + " out of bounds 1.." + this.data.jsArray.length;
                        var BoundsError = callmethod(Grace_prelude, "BoundsError", [0]);
                        callmethod(BoundsError, "raise", [1], new GraceString(msg));
                    }
                    this.data.jsArray[ix-1] = var_x;
                    return this;
                      var nat1182 = result;
                         // end native code insertion
                      return nat1182;
                    } catch(e) {
                      if ((e.exctype == 'return') && (e.target == returnTarget)) {
                        return e.returnvalue;
                      } else {
                        throw e;
                      }
                    }
                  }
                  func1181.paramCounts = [
                      1,
                      1,
                  ];
                  func1181.variableArities = [
                      false,
                      false,
                  ];
                  obj1141.methods["at()put"] = func1181;
                  func1181.definitionLine = 61;
                  func1181.definitionModule = "natList";
                  var func1183 = function(argcv) {    // method [:=(2)
                    var curarg = 1;
                    var var_n = arguments[curarg];
                    curarg++;
                    var var_x = arguments[curarg];
                    curarg++;
                    if (argcv[0] != 2)
                      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for [:=(2)"));
                    setModuleName("natList");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    try {
                      setLineNumber(73)    // compilenode call;
                         // start native code from line 73
                      var result = GraceDone;
                      var ix = var_n._value;
                    if ((ix < 1) || (ix > this.data.jsArray.length + 1)) {
                        var msg = "index " + ix + " out of bounds 1.." + this.data.jsArray.length;
                        var BoundsError = callmethod(Grace_prelude, "BoundsError", [0]);
                        callmethod(BoundsError, "raise", [1], new GraceString(msg));
                    }
                    this.data.jsArray[ix-1] = var_x;
                    return GraceDone;
                      var nat1184 = result;
                         // end native code insertion
                      return nat1184;
                    } catch(e) {
                      if ((e.exctype == 'return') && (e.target == returnTarget)) {
                        return e.returnvalue;
                      } else {
                        throw e;
                      }
                    }
                  }
                  func1183.paramCounts = [
                      2,
                  ];
                  func1183.variableArities = [
                      false,
                  ];
                  obj1141.methods["[]:="] = func1183;
                  func1183.definitionLine = 72;
                  func1183.definitionModule = "natList";
                  var func1185 = function(argcv) {    // method add(0+)
                    var curarg = 1;
                    var var_sequenceClass = callmethod(Grace_prelude, "sequence", [0]);
                    var var_x_len = argcv[0] - 0;
                    var var_x_array = new GracePrimitiveArray(var_x_len);
                    for (var ix = 0; ix < var_x_len; ix++)
                      var_x_array._value[ix] = arguments[curarg++];
                    onSelf = true
                    var var_x = callmethod(var_sequenceClass, "fromPrimitiveArray", [2], var_x_array, new GraceNum(var_x_len));
                    setModuleName("natList");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    try {
                      var if1186 = GraceDone;
                      setLineNumber(84)    // compilenode identifier;
                      var call1188 = callmethod(var_x,"size", [0]);
                      var opresult1190 = callmethod(call1188, "==", [1], new GraceNum(1));
                      if (Grace_isTrue(opresult1190)) {
                        setLineNumber(85)    // compilenode call;
                           // start native code from line 85
                        var result = GraceDone;
                        var v = callmethod(var_x, "first", [0]);
                    this.data.jsArray.push(v);
                    return this;
                        var nat1191 = result;
                           // end native code insertion
                        if1186 = nat1191;
                      }
                      setLineNumber(89)    // compilenode identifier;
                      onSelf = true;
                      var call1192 = callmethod(this, "addAll", [1], var_x);
                      return call1192;
                    } catch(e) {
                      if ((e.exctype == 'return') && (e.target == returnTarget)) {
                        return e.returnvalue;
                      } else {
                        throw e;
                      }
                    }
                  }
                  func1185.paramCounts = [
                      0,
                  ];
                  func1185.variableArities = [
                      true,
                  ];
                  obj1141.methods["add"] = func1185;
                  func1185.definitionLine = 83;
                  func1185.definitionModule = "natList";
                  var func1193 = function(argcv) {    // method addAll(1)
                    var curarg = 1;
                    var var_l = arguments[curarg];
                    curarg++;
                    if (argcv[0] != 1)
                      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for addAll(1)"));
                    setModuleName("natList");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    try {
                      setLineNumber(93)    // compilenode block;
                      var block1194 = new GraceBlock(this, 93, 1);
                      block1194.real = function(var_each) {
                        sourceObject = this;
                        onSelf = true;
                        var call1195 = callmethod(this, "push", [1], var_each);
                        return call1195;
                      };
                      var call1196 = callmethod(Grace_prelude, "for()do", [1, 1], var_l, block1194);
                      setLineNumber(94)    // compilenode identifier;
                      return this;
                    } catch(e) {
                      if ((e.exctype == 'return') && (e.target == returnTarget)) {
                        return e.returnvalue;
                      } else {
                        throw e;
                      }
                    }
                  }
                  func1193.paramCounts = [
                      1,
                  ];
                  func1193.variableArities = [
                      false,
                  ];
                  obj1141.methods["addAll"] = func1193;
                  func1193.definitionLine = 92;
                  func1193.definitionModule = "natList";
                  var func1197 = function(argcv) {    // method push(1)
                    var curarg = 1;
                    var var_x = arguments[curarg];
                    curarg++;
                    if (argcv[0] != 1)
                      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for push(1)"));
                    setModuleName("natList");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    try {
                      setLineNumber(98)    // compilenode call;
                         // start native code from line 98
                      var result = GraceDone;
                      this.data.jsArray.push(var_x);
                    return this;
                      var nat1198 = result;
                         // end native code insertion
                      return nat1198;
                    } catch(e) {
                      if ((e.exctype == 'return') && (e.target == returnTarget)) {
                        return e.returnvalue;
                      } else {
                        throw e;
                      }
                    }
                  }
                  func1197.paramCounts = [
                      1,
                  ];
                  func1197.variableArities = [
                      false,
                  ];
                  obj1141.methods["push"] = func1197;
                  func1197.definitionLine = 97;
                  func1197.definitionModule = "natList";
                  var func1199 = function(argcv) {    // method addLast(0+)
                    var curarg = 1;
                    var var_sequenceClass = callmethod(Grace_prelude, "sequence", [0]);
                    var var_x_len = argcv[0] - 0;
                    var var_x_array = new GracePrimitiveArray(var_x_len);
                    for (var ix = 0; ix < var_x_len; ix++)
                      var_x_array._value[ix] = arguments[curarg++];
                    onSelf = true
                    var var_x = callmethod(var_sequenceClass, "fromPrimitiveArray", [2], var_x_array, new GraceNum(var_x_len));
                    setModuleName("natList");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    try {
                      setLineNumber(102)    // compilenode identifier;
                      onSelf = true;
                      var call1200 = callmethod(this, "addAll", [1], var_x);
                      return call1200;
                    } catch(e) {
                      if ((e.exctype == 'return') && (e.target == returnTarget)) {
                        return e.returnvalue;
                      } else {
                        throw e;
                      }
                    }
                  }
                  func1199.paramCounts = [
                      0,
                  ];
                  func1199.variableArities = [
                      true,
                  ];
                  obj1141.methods["addLast"] = func1199;
                  func1199.definitionLine = 102;
                  func1199.definitionModule = "natList";
                  var func1201 = function(argcv) {    // method removeLast
                    var curarg = 1;
                    if (argcv[0] != 0)
                      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for removeLast"));
                    setModuleName("natList");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    try {
                      setLineNumber(106)    // compilenode call;
                      onSelf = true;
                      var call1202 = callmethod(this, "size", [0]);
                      onSelf = true;
                      var call1203 = callmethod(this, "at", [1], call1202);
                      var var_result = call1203;
                      setLineNumber(107)    // compilenode call;
                         // start native code from line 107
                      var result = GraceDone;
                      if (this.data.jsArray.length = 0) {
                        var msg = "index " + ix + " out of bounds 1.." + this.data.jsArray.length;
                        var BoundsError = callmethod(Grace_prelude, "BoundsError", [0]);
                        callmethod(BoundsError, "raise", [1], new GraceString(msg));
                    } else return this.data.jsArray.pop();
                      var nat1204 = result;
                         // end native code insertion
                      return nat1204;
                    } catch(e) {
                      if ((e.exctype == 'return') && (e.target == returnTarget)) {
                        return e.returnvalue;
                      } else {
                        throw e;
                      }
                    }
                  }
                  func1201.paramCounts = [
                      0,
                  ];
                  func1201.variableArities = [
                      false,
                  ];
                  obj1141.methods["removeLast"] = func1201;
                  func1201.definitionLine = 105;
                  func1201.definitionModule = "natList";
                  var func1205 = function(argcv) {    // method addAllFirst(1)
                    var curarg = 1;
                    var var_l = arguments[curarg];
                    curarg++;
                    if (argcv[0] != 1)
                      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for addAllFirst(1)"));
                    setModuleName("natList");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    try {
                      setLineNumber(115)    // compilenode identifier;
                      var call1206 = callmethod(var_l,"size", [0]);
                      var var_ix = call1206;
                      setLineNumber(116)    // compilenode block;
                      var block1207 = new GraceBlock(this, 116, 0);
                      block1207.real = function() {
                        sourceObject = this;
                        var opresult1210 = callmethod(var_ix, ">", [1], new GraceNum(0));
                        return opresult1210;
                      };
                      var block1211 = new GraceBlock(this, 116, 0);
                      block1211.real = function() {
                        sourceObject = this;
                        setLineNumber(117)    // compilenode identifier;
                        var call1212 = callmethod(var_l,"at", [1], var_ix);
                        var var_each = call1212;
                        setLineNumber(118)    // compilenode identifier;
                        var diff1215 = callmethod(var_ix, "-", [1], new GraceNum(1));
                        var_ix = diff1215;
                        setLineNumber(119)    // compilenode call;
                           // start native code from line 119
                        var result = GraceDone;
                        this.data.jsArray.unshift(var_each);
                        var nat1216 = result;
                           // end native code insertion
                        return nat1216;
                      };
                      var call1217 = callmethod(Grace_prelude, "while()do", [1, 1], block1207, block1211);
                      setLineNumber(121)    // compilenode identifier;
                      return this;
                    } catch(e) {
                      if ((e.exctype == 'return') && (e.target == returnTarget)) {
                        return e.returnvalue;
                      } else {
                        throw e;
                      }
                    }
                  }
                  func1205.paramCounts = [
                      1,
                  ];
                  func1205.variableArities = [
                      false,
                  ];
                  obj1141.methods["addAllFirst"] = func1205;
                  func1205.definitionLine = 114;
                  func1205.definitionModule = "natList";
                  var func1218 = function(argcv) {    // method addFirst(0+)
                    var curarg = 1;
                    var var_sequenceClass = callmethod(Grace_prelude, "sequence", [0]);
                    var var_l_len = argcv[0] - 0;
                    var var_l_array = new GracePrimitiveArray(var_l_len);
                    for (var ix = 0; ix < var_l_len; ix++)
                      var_l_array._value[ix] = arguments[curarg++];
                    onSelf = true
                    var var_l = callmethod(var_sequenceClass, "fromPrimitiveArray", [2], var_l_array, new GraceNum(var_l_len));
                    setModuleName("natList");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    try {
                      setLineNumber(125)    // compilenode identifier;
                      onSelf = true;
                      var call1219 = callmethod(this, "addAllFirst", [1], var_l);
                      return call1219;
                    } catch(e) {
                      if ((e.exctype == 'return') && (e.target == returnTarget)) {
                        return e.returnvalue;
                      } else {
                        throw e;
                      }
                    }
                  }
                  func1218.paramCounts = [
                      0,
                  ];
                  func1218.variableArities = [
                      true,
                  ];
                  obj1141.methods["addFirst"] = func1218;
                  func1218.definitionLine = 125;
                  func1218.definitionModule = "natList";
                  var func1220 = function(argcv) {    // method removeFirst
                    var curarg = 1;
                    if (argcv[0] != 0)
                      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for removeFirst"));
                    setModuleName("natList");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    try {
                      setLineNumber(129)    // compilenode num;
                      onSelf = true;
                      var call1221 = callmethod(this, "removeAt", [1], new GraceNum(1));
                      return call1221;
                    } catch(e) {
                      if ((e.exctype == 'return') && (e.target == returnTarget)) {
                        return e.returnvalue;
                      } else {
                        throw e;
                      }
                    }
                  }
                  func1220.paramCounts = [
                      0,
                  ];
                  func1220.variableArities = [
                      false,
                  ];
                  obj1141.methods["removeFirst"] = func1220;
                  func1220.definitionLine = 128;
                  func1220.definitionModule = "natList";
                  var func1222 = function(argcv) {    // method removeAt(1)
                    var curarg = 1;
                    var var_n = arguments[curarg];
                    curarg++;
                    if (argcv[0] != 1)
                      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for removeAt(1)"));
                    setModuleName("natList");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    try {
                      setLineNumber(134)    // compilenode identifier;
                      onSelf = true;
                      var call1223 = callmethod(this, "at", [1], var_n);
                      var var_removed = call1223;
                      setLineNumber(135)    // compilenode call;
                         // start native code from line 135
                      var result = GraceDone;
                      this.data.jsArray.splice(var_n._value - 1, 1);
                      var nat1224 = result;
                         // end native code insertion
                      setLineNumber(136)    // compilenode identifier;
                        return var_removed
                      return undefined;
                    } catch(e) {
                      if ((e.exctype == 'return') && (e.target == returnTarget)) {
                        return e.returnvalue;
                      } else {
                        throw e;
                      }
                    }
                  }
                  func1222.paramCounts = [
                      1,
                  ];
                  func1222.variableArities = [
                      false,
                  ];
                  obj1141.methods["removeAt"] = func1222;
                  func1222.definitionLine = 133;
                  func1222.definitionModule = "natList";
                  var func1225 = function(argcv) {    // method remove(0+)
                    var curarg = 1;
                    var var_sequenceClass = callmethod(Grace_prelude, "sequence", [0]);
                    var var_v_len = argcv[0] - 0;
                    var var_v_array = new GracePrimitiveArray(var_v_len);
                    for (var ix = 0; ix < var_v_len; ix++)
                      var_v_array._value[ix] = arguments[curarg++];
                    onSelf = true
                    var var_v = callmethod(var_sequenceClass, "fromPrimitiveArray", [2], var_v_array, new GraceNum(var_v_len));
                    setModuleName("natList");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    try {
                      setLineNumber(141)    // compilenode identifier;
                      onSelf = true;
                      var call1226 = callmethod(this, "removeAll", [1], var_v);
                      return call1226;
                    } catch(e) {
                      if ((e.exctype == 'return') && (e.target == returnTarget)) {
                        return e.returnvalue;
                      } else {
                        throw e;
                      }
                    }
                  }
                  func1225.paramCounts = [
                      0,
                  ];
                  func1225.variableArities = [
                      true,
                  ];
                  obj1141.methods["remove"] = func1225;
                  func1225.definitionLine = 140;
                  func1225.definitionModule = "natList";
                  var func1227 = function(argcv) {    // method remove(0+)ifAbsent(1)
                    var curarg = 1;
                    var var_sequenceClass = callmethod(Grace_prelude, "sequence", [0]);
                    var var_v_len = argcv[0] - 0;
                    var var_v_array = new GracePrimitiveArray(var_v_len);
                    for (var ix = 0; ix < var_v_len; ix++)
                      var_v_array._value[ix] = arguments[curarg++];
                    onSelf = true
                    var var_v = callmethod(var_sequenceClass, "fromPrimitiveArray", [2], var_v_array, new GraceNum(var_v_len));
                    var var_action = arguments[curarg];
                    curarg++;
                    if (argcv[1] != 1)
                      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for ifAbsent (arg list 2) of remove(0+)ifAbsent(1)"));
                    setModuleName("natList");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    try {
                      setLineNumber(146)    // compilenode identifier;
                      onSelf = true;
                      var call1228 = callmethod(this, "removeAll()ifAbsent", [1, 1], var_v, var_action);
                      return call1228;
                    } catch(e) {
                      if ((e.exctype == 'return') && (e.target == returnTarget)) {
                        return e.returnvalue;
                      } else {
                        throw e;
                      }
                    }
                  }
                  func1227.paramCounts = [
                      0,
                      1,
                  ];
                  func1227.variableArities = [
                      true,
                      false,
                  ];
                  obj1141.methods["remove()ifAbsent"] = func1227;
                  func1227.definitionLine = 145;
                  func1227.definitionModule = "natList";
                  var func1229 = function(argcv) {    // method removeAll(1)
                    var curarg = 1;
                    var var_vs = arguments[curarg];
                    curarg++;
                    if (argcv[0] != 1)
                      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for removeAll(1)"));
                    setModuleName("natList");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    try {
                      setLineNumber(151)    // compilenode block;
                      var block1230 = new GraceBlock(this, 151, 0);
                      block1230.real = function() {
                        sourceObject = this;
                        var string1231 = new GraceString("object not in list");
                        var call1232 = callmethod(Grace_prelude, "NoSuchObject", [0]);
                        var call1233 = callmethod(call1232,"raise", [1], string1231);
                        return call1233;
                      };
                      onSelf = true;
                      var call1234 = callmethod(this, "removeAll()ifAbsent", [1, 1], var_vs, block1230);
                      return call1234;
                    } catch(e) {
                      if ((e.exctype == 'return') && (e.target == returnTarget)) {
                        return e.returnvalue;
                      } else {
                        throw e;
                      }
                    }
                  }
                  func1229.paramCounts = [
                      1,
                  ];
                  func1229.variableArities = [
                      false,
                  ];
                  obj1141.methods["removeAll"] = func1229;
                  func1229.definitionLine = 150;
                  func1229.definitionModule = "natList";
                  var func1235 = function(argcv) {    // method removeAll(1)ifAbsent(1)
                    var curarg = 1;
                    var var_vs = arguments[curarg];
                    curarg++;
                    if (argcv[0] != 1)
                      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for removeAll (arg list 1) of removeAll(1)ifAbsent(1)"));
                    var var_action = arguments[curarg];
                    curarg++;
                    if (argcv[1] != 1)
                      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for ifAbsent (arg list 2) of removeAll(1)ifAbsent(1)"));
                    setModuleName("natList");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    try {
                      setLineNumber(156)    // compilenode block;
                      var block1236 = new GraceBlock(this, 156, 1);
                      block1236.real = function(var_each) {
                        sourceObject = this;
                        setLineNumber(157)    // compilenode block;
                        var block1237 = new GraceBlock(this, 157, 0);
                        block1237.real = function() {
                          sourceObject = this;
                          var call1238 = callmethod(var_action,"apply", [0]);
                          throw new ReturnException(call1238, returnTarget);
                          return undefined;
                        };
                        onSelf = true;
                        var call1239 = callmethod(this, "indexOf()ifAbsent", [1, 1], var_each, block1237);
                        var var_ix = call1239;
                        setLineNumber(158)    // compilenode identifier;
                        onSelf = true;
                        var call1240 = callmethod(this, "removeAt", [1], var_ix);
                        return call1240;
                      };
                      var call1241 = callmethod(Grace_prelude, "for()do", [1, 1], var_vs, block1236);
                      setLineNumber(160)    // compilenode identifier;
                      return this;
                    } catch(e) {
                      if ((e.exctype == 'return') && (e.target == returnTarget)) {
                        return e.returnvalue;
                      } else {
                        throw e;
                      }
                    }
                  }
                  func1235.paramCounts = [
                      1,
                      1,
                  ];
                  func1235.variableArities = [
                      false,
                      false,
                  ];
                  obj1141.methods["removeAll()ifAbsent"] = func1235;
                  func1235.definitionLine = 155;
                  func1235.definitionModule = "natList";
                  var func1242 = function(argcv) {    // method pop
                    var curarg = 1;
                    if (argcv[0] != 0)
                      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for pop"));
                    setModuleName("natList");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    try {
                      setLineNumber(164)    // compilenode call;
                      onSelf = true;
                      var call1243 = callmethod(this, "removeLast", [0]);
                      return call1243;
                    } catch(e) {
                      if ((e.exctype == 'return') && (e.target == returnTarget)) {
                        return e.returnvalue;
                      } else {
                        throw e;
                      }
                    }
                  }
                  func1242.paramCounts = [
                      0,
                  ];
                  func1242.variableArities = [
                      false,
                  ];
                  obj1141.methods["pop"] = func1242;
                  func1242.definitionLine = 164;
                  func1242.definitionModule = "natList";
                  var func1244 = function(argcv) {    // method reversed
                    var curarg = 1;
                    if (argcv[0] != 0)
                      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for reversed"));
                    setModuleName("natList");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    try {
                      setLineNumber(167)    // compilenode call;
                      var call1245 = callmethod(superDepth, "outer", [0]);
                      onOuter = true;
                      onSelf = true;
                      var call1246 = callmethod(call1245, "outer", [0]);
                      onOuter = true;
                      onSelf = true;
                      var call1247 = callmethod(call1246, "list", [0]);
                      var call1248 = callmethod(call1247,"empty", [0]);
                      var var_result = call1248;
                      setLineNumber(168)    // compilenode block;
                      var block1249 = new GraceBlock(this, 168, 1);
                      block1249.real = function(var_each) {
                        sourceObject = this;
                        var call1250 = callmethod(var_result,"addFirst", [1], var_each);
                        return call1250;
                      };
                      onSelf = true;
                      var call1251 = callmethod(this, "do", [1], block1249);
                      setLineNumber(169)    // compilenode identifier;
                      return var_result;
                    } catch(e) {
                      if ((e.exctype == 'return') && (e.target == returnTarget)) {
                        return e.returnvalue;
                      } else {
                        throw e;
                      }
                    }
                  }
                  func1244.paramCounts = [
                      0,
                  ];
                  func1244.variableArities = [
                      false,
                  ];
                  obj1141.methods["reversed"] = func1244;
                  func1244.definitionLine = 166;
                  func1244.definitionModule = "natList";
                  var func1252 = function(argcv) {    // method reverse
                    var curarg = 1;
                    if (argcv[0] != 0)
                      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for reverse"));
                    setModuleName("natList");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    try {
                      setLineNumber(172)    // compilenode call;
                      onSelf = true;
                      var call1253 = callmethod(this, "size", [0]);
                      var var_hiIx = call1253;
                      setLineNumber(173)    // compilenode num;
                      var var_loIx = new GraceNum(1);
                      setLineNumber(174)    // compilenode block;
                      var block1254 = new GraceBlock(this, 174, 0);
                      block1254.real = function() {
                        sourceObject = this;
                        var opresult1257 = callmethod(var_loIx, "<", [1], var_hiIx);
                        return opresult1257;
                      };
                      var block1258 = new GraceBlock(this, 174, 0);
                      block1258.real = function() {
                        sourceObject = this;
                        setLineNumber(175)    // compilenode identifier;
                        onSelf = true;
                        var call1259 = callmethod(this, "at", [1], var_hiIx);
                        var var_hiVal = call1259;
                        setLineNumber(176)    // compilenode identifier;
                        onSelf = true;
                        var call1260 = callmethod(this, "at", [1], var_loIx);
                        onSelf = true;
                        var call1261 = callmethod(this, "at()put", [1, 1], var_hiIx, call1260);
                        setLineNumber(177)    // compilenode identifier;
                        onSelf = true;
                        var call1262 = callmethod(this, "at()put", [1, 1], var_loIx, var_hiVal);
                        setLineNumber(178)    // compilenode identifier;
                        var diff1265 = callmethod(var_hiIx, "-", [1], new GraceNum(1));
                        var_hiIx = diff1265;
                        setLineNumber(179)    // compilenode identifier;
                        var opresult1268 = callmethod(var_loIx, "+", [1], new GraceNum(1));
                        var_loIx = opresult1268;
                        return opresult1268;
                      };
                      var call1269 = callmethod(Grace_prelude, "while()do", [1, 1], block1254, block1258);
                      setLineNumber(181)    // compilenode identifier;
                      return this;
                    } catch(e) {
                      if ((e.exctype == 'return') && (e.target == returnTarget)) {
                        return e.returnvalue;
                      } else {
                        throw e;
                      }
                    }
                  }
                  func1252.paramCounts = [
                      0,
                  ];
                  func1252.variableArities = [
                      false,
                  ];
                  obj1141.methods["reverse"] = func1252;
                  func1252.definitionLine = 171;
                  func1252.definitionModule = "natList";
                  var func1270 = function(argcv) {    // method ++(1)
                    var curarg = 1;
                    var var_o = arguments[curarg];
                    curarg++;
                    if (argcv[0] != 1)
                      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for ++(1)"));
                    setModuleName("natList");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    try {
                      setLineNumber(185)    // compilenode call;
                      var call1271 = callmethod(superDepth, "outer", [0]);
                      onOuter = true;
                      onSelf = true;
                      var call1272 = callmethod(call1271, "outer", [0]);
                      onOuter = true;
                      onSelf = true;
                      var call1273 = callmethod(call1272, "list", [0]);
                      var call1274 = callmethod(call1273,"withAll", [1], this);
                      var var_l = call1274;
                      setLineNumber(186)    // compilenode identifier;
                      var call1275 = callmethod(var_l,"addAll", [1], var_o);
                      return call1275;
                    } catch(e) {
                      if ((e.exctype == 'return') && (e.target == returnTarget)) {
                        return e.returnvalue;
                      } else {
                        throw e;
                      }
                    }
                  }
                  func1270.paramCounts = [
                      1,
                  ];
                  func1270.variableArities = [
                      false,
                  ];
                  obj1141.methods["++"] = func1270;
                  func1270.definitionLine = 184;
                  func1270.definitionModule = "natList";
                  var func1276 = function(argcv) {    // method asString
                    var curarg = 1;
                    if (argcv[0] != 0)
                      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for asString"));
                    setModuleName("natList");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    try {
                      setLineNumber(191)    // compilenode string;
                      var string1277 = new GraceString("[");
                      var var_s = string1277;
                      setLineNumber(192)    // compilenode call;
                      onSelf = true;
                      var call1278 = callmethod(this, "size", [0]);
                      var var_curSize = call1278;
                      setLineNumber(193)    // compilenode num;
                      var opresult1281 = callmethod(new GraceNum(1), "..", [1], var_curSize);
                      var block1282 = new GraceBlock(this, 193, 1);
                      block1282.real = function(var_i) {
                        sourceObject = this;
                        setLineNumber(194)    // compilenode identifier;
                        onSelf = true;
                        var call1283 = callmethod(this, "at", [1], var_i);
                        var call1284 = callmethod(call1283,"asString", [0]);
                        var opresult1287 = callmethod(var_s, "++", [1], call1284);
                        var_s = opresult1287;
                        var if1288 = GraceDone;
                        setLineNumber(195)    // compilenode identifier;
                        var opresult1291 = callmethod(var_i, "<", [1], var_curSize);
                        if (Grace_isTrue(opresult1291)) {
                          var string1292 = new GraceString(",");
                          var opresult1295 = callmethod(var_s, "++", [1], string1292);
                          var_s = opresult1295;
                          if1288 = opresult1295;
                        }
                        return if1288;
                      };
                      var call1296 = callmethod(Grace_prelude, "for()do", [1, 1], opresult1281, block1282);
                      setLineNumber(197)    // compilenode string;
                      var string1297 = new GraceString("]");
                      var opresult1300 = callmethod(var_s, "++", [1], string1297);
                      return opresult1300;
                    } catch(e) {
                      if ((e.exctype == 'return') && (e.target == returnTarget)) {
                        return e.returnvalue;
                      } else {
                        throw e;
                      }
                    }
                  }
                  func1276.paramCounts = [
                      0,
                  ];
                  func1276.variableArities = [
                      false,
                  ];
                  obj1141.methods["asString"] = func1276;
                  func1276.definitionLine = 190;
                  func1276.definitionModule = "natList";
                  var func1301 = function(argcv) {    // method extend(1)
                    var curarg = 1;
                    var var_l = arguments[curarg];
                    curarg++;
                    if (argcv[0] != 1)
                      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for extend(1)"));
                    setModuleName("natList");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    try {
                      setLineNumber(201)    // compilenode identifier;
                      onSelf = true;
                      var call1302 = callmethod(this, "addAll", [1], var_l);
                      return var_done;
                    } catch(e) {
                      if ((e.exctype == 'return') && (e.target == returnTarget)) {
                        return e.returnvalue;
                      } else {
                        throw e;
                      }
                    }
                  }
                  func1301.paramCounts = [
                      1,
                  ];
                  func1301.variableArities = [
                      false,
                  ];
                  obj1141.methods["extend"] = func1301;
                  func1301.definitionLine = 201;
                  func1301.definitionModule = "natList";
                  var func1303 = function(argcv) {    // method contains(1)
                    var curarg = 1;
                    var var_element = arguments[curarg];
                    curarg++;
                    if (argcv[0] != 1)
                      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for contains(1)"));
                    setModuleName("natList");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    try {
                      setLineNumber(205)    // compilenode block;
                      var block1304 = new GraceBlock(this, 205, 1);
                      block1304.real = function(var_each) {
                        sourceObject = this;
                        var if1305 = GraceDone;
                        var opresult1308 = callmethod(var_each, "==", [1], var_element);
                        if (Grace_isTrue(opresult1308)) {
                          throw new ReturnException(GraceTrue, returnTarget);
                          if1305 = undefined;
                        }
                        return if1305;
                      };
                      onSelf = true;
                      var call1309 = callmethod(this, "do", [1], block1304);
                      setLineNumber(206)    // compilenode identifier;
                        return GraceFalse
                      return undefined;
                    } catch(e) {
                      if ((e.exctype == 'return') && (e.target == returnTarget)) {
                        return e.returnvalue;
                      } else {
                        throw e;
                      }
                    }
                  }
                  func1303.paramCounts = [
                      1,
                  ];
                  func1303.variableArities = [
                      false,
                  ];
                  obj1141.methods["contains"] = func1303;
                  func1303.definitionLine = 204;
                  func1303.definitionModule = "natList";
                  var func1310 = function(argcv) {    // method do(1)
                    var curarg = 1;
                    var var_block1 = arguments[curarg];
                    curarg++;
                    if (argcv[0] != 1)
                      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for do(1)"));
                    setModuleName("natList");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    try {
                      setLineNumber(211)    // compilenode num;
                      var var_i = new GraceNum(1);
                      setLineNumber(212)    // compilenode call;
                      onSelf = true;
                      var call1311 = callmethod(this, "size", [0]);
                      var var_curSize = call1311;
                      setLineNumber(213)    // compilenode block;
                      var block1312 = new GraceBlock(this, 213, 0);
                      block1312.real = function() {
                        sourceObject = this;
                        var opresult1315 = callmethod(var_i, "<=", [1], var_curSize);
                        return opresult1315;
                      };
                      var block1316 = new GraceBlock(this, 213, 0);
                      block1316.real = function() {
                        sourceObject = this;
                        setLineNumber(214)    // compilenode identifier;
                        onSelf = true;
                        var call1317 = callmethod(this, "at", [1], var_i);
                        var call1318 = callmethod(var_block1,"apply", [1], call1317);
                        setLineNumber(215)    // compilenode identifier;
                        var opresult1321 = callmethod(var_i, "+", [1], new GraceNum(1));
                        var_i = opresult1321;
                        return opresult1321;
                      };
                      var call1322 = callmethod(Grace_prelude, "while()do", [1, 1], block1312, block1316);
                      return call1322;
                    } catch(e) {
                      if ((e.exctype == 'return') && (e.target == returnTarget)) {
                        return e.returnvalue;
                      } else {
                        throw e;
                      }
                    }
                  }
                  func1310.paramCounts = [
                      1,
                  ];
                  func1310.variableArities = [
                      false,
                  ];
                  obj1141.methods["do"] = func1310;
                  func1310.definitionLine = 210;
                  func1310.definitionModule = "natList";
                  var func1323 = function(argcv) {    // method ==(1)
                    var curarg = 1;
                    var var_other = arguments[curarg];
                    curarg++;
                    if (argcv[0] != 1)
                      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for ==(1)"));
                    setModuleName("natList");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    try {
                      setLineNumber(221)    // compilenode identifier;
                      var cases1324 = [];
                      setLineNumber(222)    // compilenode block;
                      var block1325 = new GraceBlock(this, 222, 1);
                      setLineNumber(0)    // compilenode string;
                      var string1326 = new GraceString("o");
                      var call1327 = callmethod(Grace_prelude, "VariablePattern", [0]);
                      var call1328 = callmethod(call1327,"new", [1], string1326);
                      setLineNumber(222)    // compilenode call;
                      var call1329 = callmethod(Grace_prelude, "Sequence", [0]);
                      setLineNumber(0)    // compilenode call;
                      var call1330 = callmethod(Grace_prelude, "AndPattern", [0]);
                      var call1331 = callmethod(call1330,"new", [2], call1328, call1329);
                      block1325.pattern = call1331;
                      block1325.real = function(var_o) {
                        sourceObject = this;
                        var if1332 = GraceDone;
                        setLineNumber(223)    // compilenode identifier;
                        var call1333 = callmethod(var_o,"size", [0]);
                        onSelf = true;
                        var call1335 = callmethod(this, "size", [0]);
                        var opresult1337 = callmethod(call1335, "!=", [1], call1333);
                        if (Grace_isTrue(opresult1337)) {
                          throw new ReturnException(GraceFalse, returnTarget);
                          if1332 = undefined;
                        }
                        setLineNumber(224)    // compilenode block;
                        var block1338 = new GraceBlock(this, 224, 1);
                        block1338.real = function(var_ix) {
                          sourceObject = this;
                          var if1339 = GraceDone;
                          setLineNumber(225)    // compilenode identifier;
                          var call1340 = callmethod(var_o,"at", [1], var_ix);
                          onSelf = true;
                          var call1342 = callmethod(this, "at", [1], var_ix);
                          var opresult1344 = callmethod(call1342, "!=", [1], call1340);
                          if (Grace_isTrue(opresult1344)) {
                            setLineNumber(226)    // compilenode identifier;
                            throw new ReturnException(GraceFalse, returnTarget);
                            if1339 = undefined;
                          }
                          return if1339;
                        };
                        setLineNumber(224)    // compilenode call;
                        onSelf = true;
                        var call1345 = callmethod(this, "indices", [0]);
                        var call1346 = callmethod(call1345,"do", [1], block1338);
                        setLineNumber(229)    // compilenode identifier;
                        throw new ReturnException(GraceTrue, returnTarget);
                        return undefined;
                      };
                      cases1324.push(block1325);
                      setLineNumber(231)    // compilenode block;
                      var block1347 = new GraceBlock(this, 231, 1);
                      block1347.real = function(var___95____95__0) {
                        sourceObject = this;
                        setLineNumber(232)    // compilenode identifier;
                        throw new ReturnException(GraceFalse, returnTarget);
                        return undefined;
                      };
                      cases1324.push(block1347);
                      setLineNumber(231)    // compilematchcase;
                      var matchres1324 = matchCase(var_other,cases1324,false);
                      setModuleName("natList");
                      return matchres1324;
                    } catch(e) {
                      if ((e.exctype == 'return') && (e.target == returnTarget)) {
                        return e.returnvalue;
                      } else {
                        throw e;
                      }
                    }
                  }
                  func1323.paramCounts = [
                      1,
                  ];
                  func1323.variableArities = [
                      false,
                  ];
                  obj1141.methods["=="] = func1323;
                  func1323.definitionLine = 220;
                  func1323.definitionModule = "natList";
                  var func1348 = function(argcv) {    // method iterator
                    var curarg = 1;
                    if (argcv[0] != 0)
                      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for iterator"));
                    setModuleName("natList");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    try {
                      setLineNumber(238)    // compilenode object;
                      var obj1349 = Grace_allocObject();
                      obj1349.definitionModule = "natList";
                      obj1349.definitionLine = 238;
                      obj1349.outer = this;
                      var reader_natList_outer1350 = function() {
                        return this.outer;
                      }
                      obj1349.methods["outer"] = reader_natList_outer1350;
                      var obj_init_1349 = function () {
                        var origSuperDepth = superDepth;
                        superDepth = obj1349;
                        var func1351 = function(argcv) {    // method asDebugString
                          var curarg = 1;
                          if (argcv[0] != 0)
                            callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for asDebugString"));
                          setModuleName("natList");
                          var returnTarget = invocationCount;
                          invocationCount++;
                          try {
                            setLineNumber(241)    // compilenode string;
                            var string1352 = new GraceString("\u27eb");
                            onSelf = true;
                            var call1354 = callmethod(this, "idx", [0]);
                            var string1356 = new GraceString("\u27ea");
                            onSelf = true;
                            var call1358 = callmethod(this, "asString", [0]);
                            var string1360 = new GraceString("");
                            var opresult1362 = callmethod(string1360, "++", [1], call1358);
                            var opresult1364 = callmethod(opresult1362, "++", [1], string1356);
                            var opresult1366 = callmethod(opresult1364, "++", [1], call1354);
                            var opresult1368 = callmethod(opresult1366, "++", [1], string1352);
                            return opresult1368;
                          } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                              return e.returnvalue;
                            } else {
                              throw e;
                            }
                          }
                        }
                        func1351.paramCounts = [
                            0,
                        ];
                        func1351.variableArities = [
                            false,
                        ];
                        obj1349.methods["asDebugString"] = func1351;
                        func1351.definitionLine = 241;
                        func1351.definitionModule = "natList";
                        var func1369 = function(argcv) {    // method asString
                          var curarg = 1;
                          if (argcv[0] != 0)
                            callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for asString"));
                          setModuleName("natList");
                          var returnTarget = invocationCount;
                          invocationCount++;
                          try {
                            setLineNumber(242)    // compilenode string;
                            var string1370 = new GraceString("aListIterator");
                            return string1370;
                          } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                              return e.returnvalue;
                            } else {
                              throw e;
                            }
                          }
                        }
                        func1369.paramCounts = [
                            0,
                        ];
                        func1369.variableArities = [
                            false,
                        ];
                        obj1349.methods["asString"] = func1369;
                        func1369.definitionLine = 242;
                        func1369.definitionModule = "natList";
                        var func1371 = function(argcv) {    // method havemore
                          var curarg = 1;
                          if (argcv[0] != 0)
                            callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for havemore"));
                          setModuleName("natList");
                          var returnTarget = invocationCount;
                          invocationCount++;
                          try {
                            setLineNumber(243)    // compilenode call;
                            var call1372 = callmethod(superDepth, "outer", [0]);
                            onOuter = true;
                            onSelf = true;
                            var call1373 = callmethod(call1372, "size", [0]);
                            onSelf = true;
                            var call1375 = callmethod(this, "idx", [0]);
                            var opresult1377 = callmethod(call1375, "<=", [1], call1373);
                            return opresult1377;
                          } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                              return e.returnvalue;
                            } else {
                              throw e;
                            }
                          }
                        }
                        func1371.paramCounts = [
                            0,
                        ];
                        func1371.variableArities = [
                            false,
                        ];
                        obj1349.methods["havemore"] = func1371;
                        func1371.definitionLine = 243;
                        func1371.definitionModule = "natList";
                        var func1378 = function(argcv) {    // method hasNext
                          var curarg = 1;
                          if (argcv[0] != 0)
                            callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for hasNext"));
                          setModuleName("natList");
                          var returnTarget = invocationCount;
                          invocationCount++;
                          try {
                            setLineNumber(244)    // compilenode call;
                            var call1379 = callmethod(superDepth, "outer", [0]);
                            onOuter = true;
                            onSelf = true;
                            var call1380 = callmethod(call1379, "size", [0]);
                            onSelf = true;
                            var call1382 = callmethod(this, "idx", [0]);
                            var opresult1384 = callmethod(call1382, "<=", [1], call1380);
                            return opresult1384;
                          } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                              return e.returnvalue;
                            } else {
                              throw e;
                            }
                          }
                        }
                        func1378.paramCounts = [
                            0,
                        ];
                        func1378.variableArities = [
                            false,
                        ];
                        obj1349.methods["hasNext"] = func1378;
                        func1378.definitionLine = 244;
                        func1378.definitionModule = "natList";
                        var func1385 = function(argcv) {    // method next
                          var curarg = 1;
                          if (argcv[0] != 0)
                            callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for next"));
                          setModuleName("natList");
                          var returnTarget = invocationCount;
                          invocationCount++;
                          try {
                            var if1386 = GraceDone;
                            setLineNumber(246)    // compilenode call;
                            var call1387 = callmethod(superDepth, "outer", [0]);
                            onOuter = true;
                            onSelf = true;
                            var call1388 = callmethod(call1387, "size", [0]);
                            onSelf = true;
                            var call1390 = callmethod(this, "idx", [0]);
                            var opresult1392 = callmethod(call1390, ">", [1], call1388);
                            if (Grace_isTrue(opresult1392)) {
                              var string1393 = new GraceString("on list");
                              var call1394 = callmethod(Grace_prelude, "Exhausted", [0]);
                              var call1395 = callmethod(call1394,"raise", [1], string1393);
                              if1386 = call1395;
                            }
                            setLineNumber(247)    // compilenode call;
                            onSelf = true;
                            var call1396 = callmethod(this, "idx", [0]);
                            var call1397 = callmethod(superDepth, "outer", [0]);
                            onOuter = true;
                            onSelf = true;
                            var call1398 = callmethod(call1397, "at", [1], call1396);
                            var var_ret = call1398;
                            setLineNumber(248)    // compilenode call;
                            onSelf = true;
                            var call1400 = callmethod(this, "idx", [0]);
                            var opresult1402 = callmethod(call1400, "+", [1], new GraceNum(1));
                            onSelf = true;
                            var call1403 = callmethod(this, "idx:=", [1], opresult1402);
                            setLineNumber(249)    // compilenode identifier;
                            return var_ret;
                          } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                              return e.returnvalue;
                            } else {
                              throw e;
                            }
                          }
                        }
                        func1385.paramCounts = [
                            0,
                        ];
                        func1385.variableArities = [
                            false,
                        ];
                        obj1349.methods["next"] = func1385;
                        func1385.definitionLine = 245;
                        func1385.definitionModule = "natList";
                        sourceObject = obj1349;
                        setLineNumber(239)    // compilenode call;
                        var call1404 = callmethod(Grace_prelude, "iterable", [0]);
                        var call1405 = callmethod(call1404,"trait()object", [0, 1], this);
                        obj1349.superobj = call1405;
                        obj1349._value = call1405._value;
                        sourceObject = obj1349;
                        setLineNumber(240)    // compilenode num;
                        obj1349.data["idx"] = new GraceNum(1);
                        var reader_natList_idx1406 = function() {
                          return this.data["idx"];
                        }
                        obj1349.methods["idx"] = reader_natList_idx1406;
                        obj1349.data["idx"] = new GraceNum(1);
                        var writer_natList_idx1406 = function(argcv, o) {
                          this.data["idx"] = o;
                        }
                        obj1349.methods["idx:="] = writer_natList_idx1406;
                        reader_natList_idx1406.confidential = true;
                        writer_natList_idx1406.confidential = true;
                        obj1349.mutable = true;
                        sourceObject = obj1349;
                        sourceObject = obj1349;
                        sourceObject = obj1349;
                        sourceObject = obj1349;
                        sourceObject = obj1349;
                        superDepth = origSuperDepth;
                      }
                      obj_init_1349.apply(obj1349, []);
                      return obj1349;
                    } catch(e) {
                      if ((e.exctype == 'return') && (e.target == returnTarget)) {
                        return e.returnvalue;
                      } else {
                        throw e;
                      }
                    }
                  }
                  func1348.paramCounts = [
                      0,
                  ];
                  func1348.variableArities = [
                      false,
                  ];
                  obj1141.methods["iterator"] = func1348;
                  func1348.definitionLine = 237;
                  func1348.definitionModule = "natList";
                    var func1407 = function(argcv) {    // method iterator()object
                      var curarg = 1;
                      var inheritingObject = arguments[curarg++];
                      var returnTarget = invocationCount;
                      invocationCount++;
                      try {
                        var obj1408 = Grace_allocObject();
                        obj1408.definitionModule = "natList";
                        obj1408.definitionLine = 238;
                        var inho1408 = inheritingObject;
                        while (inho1408.superobj) inho1408 = inho1408.superobj;
                        inho1408.superobj = obj1408;
                        obj1408.data = inheritingObject.data;
                        obj1408.outer = this;
                        var reader_natList_outer1409 = function() {
                          return this.outer;
                        }
                        obj1408.methods["outer"] = reader_natList_outer1409;
                        var obj_init_1408 = function () {
                          var origSuperDepth = superDepth;
                          superDepth = obj1408;
                          var func1410 = function(argcv) {    // method asDebugString
                            var curarg = 1;
                            if (argcv[0] != 0)
                              callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for asDebugString"));
                            setModuleName("natList");
                            var returnTarget = invocationCount;
                            invocationCount++;
                            try {
                              setLineNumber(241)    // compilenode string;
                              var string1411 = new GraceString("\u27eb");
                              onSelf = true;
                              var call1413 = callmethod(this, "idx", [0]);
                              var string1415 = new GraceString("\u27ea");
                              onSelf = true;
                              var call1417 = callmethod(this, "asString", [0]);
                              var string1419 = new GraceString("");
                              var opresult1421 = callmethod(string1419, "++", [1], call1417);
                              var opresult1423 = callmethod(opresult1421, "++", [1], string1415);
                              var opresult1425 = callmethod(opresult1423, "++", [1], call1413);
                              var opresult1427 = callmethod(opresult1425, "++", [1], string1411);
                              return opresult1427;
                            } catch(e) {
                              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                              } else {
                                throw e;
                              }
                            }
                          }
                          func1410.paramCounts = [
                              0,
                          ];
                          func1410.variableArities = [
                              false,
                          ];
                          obj1408.methods["asDebugString"] = func1410;
                          func1410.definitionLine = 241;
                          func1410.definitionModule = "natList";
                          var func1428 = function(argcv) {    // method asString
                            var curarg = 1;
                            if (argcv[0] != 0)
                              callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for asString"));
                            setModuleName("natList");
                            var returnTarget = invocationCount;
                            invocationCount++;
                            try {
                              setLineNumber(242)    // compilenode string;
                              var string1429 = new GraceString("aListIterator");
                              return string1429;
                            } catch(e) {
                              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                              } else {
                                throw e;
                              }
                            }
                          }
                          func1428.paramCounts = [
                              0,
                          ];
                          func1428.variableArities = [
                              false,
                          ];
                          obj1408.methods["asString"] = func1428;
                          func1428.definitionLine = 242;
                          func1428.definitionModule = "natList";
                          var func1430 = function(argcv) {    // method havemore
                            var curarg = 1;
                            if (argcv[0] != 0)
                              callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for havemore"));
                            setModuleName("natList");
                            var returnTarget = invocationCount;
                            invocationCount++;
                            try {
                              setLineNumber(243)    // compilenode call;
                              var call1431 = callmethod(superDepth, "outer", [0]);
                              onOuter = true;
                              onSelf = true;
                              var call1432 = callmethod(call1431, "size", [0]);
                              onSelf = true;
                              var call1434 = callmethod(this, "idx", [0]);
                              var opresult1436 = callmethod(call1434, "<=", [1], call1432);
                              return opresult1436;
                            } catch(e) {
                              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                              } else {
                                throw e;
                              }
                            }
                          }
                          func1430.paramCounts = [
                              0,
                          ];
                          func1430.variableArities = [
                              false,
                          ];
                          obj1408.methods["havemore"] = func1430;
                          func1430.definitionLine = 243;
                          func1430.definitionModule = "natList";
                          var func1437 = function(argcv) {    // method hasNext
                            var curarg = 1;
                            if (argcv[0] != 0)
                              callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for hasNext"));
                            setModuleName("natList");
                            var returnTarget = invocationCount;
                            invocationCount++;
                            try {
                              setLineNumber(244)    // compilenode call;
                              var call1438 = callmethod(superDepth, "outer", [0]);
                              onOuter = true;
                              onSelf = true;
                              var call1439 = callmethod(call1438, "size", [0]);
                              onSelf = true;
                              var call1441 = callmethod(this, "idx", [0]);
                              var opresult1443 = callmethod(call1441, "<=", [1], call1439);
                              return opresult1443;
                            } catch(e) {
                              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                              } else {
                                throw e;
                              }
                            }
                          }
                          func1437.paramCounts = [
                              0,
                          ];
                          func1437.variableArities = [
                              false,
                          ];
                          obj1408.methods["hasNext"] = func1437;
                          func1437.definitionLine = 244;
                          func1437.definitionModule = "natList";
                          var func1444 = function(argcv) {    // method next
                            var curarg = 1;
                            if (argcv[0] != 0)
                              callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for next"));
                            setModuleName("natList");
                            var returnTarget = invocationCount;
                            invocationCount++;
                            try {
                              var if1445 = GraceDone;
                              setLineNumber(246)    // compilenode call;
                              var call1446 = callmethod(superDepth, "outer", [0]);
                              onOuter = true;
                              onSelf = true;
                              var call1447 = callmethod(call1446, "size", [0]);
                              onSelf = true;
                              var call1449 = callmethod(this, "idx", [0]);
                              var opresult1451 = callmethod(call1449, ">", [1], call1447);
                              if (Grace_isTrue(opresult1451)) {
                                var string1452 = new GraceString("on list");
                                var call1453 = callmethod(Grace_prelude, "Exhausted", [0]);
                                var call1454 = callmethod(call1453,"raise", [1], string1452);
                                if1445 = call1454;
                              }
                              setLineNumber(247)    // compilenode call;
                              onSelf = true;
                              var call1455 = callmethod(this, "idx", [0]);
                              var call1456 = callmethod(superDepth, "outer", [0]);
                              onOuter = true;
                              onSelf = true;
                              var call1457 = callmethod(call1456, "at", [1], call1455);
                              var var_ret = call1457;
                              setLineNumber(248)    // compilenode call;
                              onSelf = true;
                              var call1459 = callmethod(this, "idx", [0]);
                              var opresult1461 = callmethod(call1459, "+", [1], new GraceNum(1));
                              onSelf = true;
                              var call1462 = callmethod(this, "idx:=", [1], opresult1461);
                              setLineNumber(249)    // compilenode identifier;
                              return var_ret;
                            } catch(e) {
                              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                              } else {
                                throw e;
                              }
                            }
                          }
                          func1444.paramCounts = [
                              0,
                          ];
                          func1444.variableArities = [
                              false,
                          ];
                          obj1408.methods["next"] = func1444;
                          func1444.definitionLine = 245;
                          func1444.definitionModule = "natList";
                          sourceObject = obj1408;
                          setLineNumber(239)    // compilenode call;
                          var call1463 = callmethod(Grace_prelude, "iterable", [0]);
                          var call1464 = callmethod(call1463,"trait()object", [0, 1], this);
                          obj1408.superobj = call1464;
                          obj1408._value = call1464._value;
                          sourceObject = obj1408;
                          setLineNumber(240)    // compilenode num;
                          obj1408.data["idx"] = new GraceNum(1);
                          var reader_natList_idx1465 = function() {
                            return this.data["idx"];
                          }
                          obj1408.methods["idx"] = reader_natList_idx1465;
                          obj1408.data["idx"] = new GraceNum(1);
                          var writer_natList_idx1465 = function(argcv, o) {
                            this.data["idx"] = o;
                          }
                          obj1408.methods["idx:="] = writer_natList_idx1465;
                          reader_natList_idx1465.confidential = true;
                          writer_natList_idx1465.confidential = true;
                          obj1408.mutable = true;
                          sourceObject = obj1408;
                          sourceObject = obj1408;
                          sourceObject = obj1408;
                          sourceObject = obj1408;
                          sourceObject = obj1408;
                          superDepth = origSuperDepth;
                        }
                        obj_init_1408.apply(inheritingObject, []);
                        return obj1408;
                      } catch(e) {
                        if ((e.exctype == 'return') && (e.target == returnTarget)) {
                          return e.returnvalue;
                        } else {
                          throw e;
                        }
                      }
                    }
                    obj1141.methods["iterator()object"] = func1407;
                  var func1466 = function(argcv) {    // method values
                    var curarg = 1;
                    if (argcv[0] != 0)
                      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for values"));
                    setModuleName("natList");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    try {
                      setLineNumber(256)    // compilenode call;
                      onSelf = true;
                      var call1467 = callmethod(this, "iterator", [0]);
                      return call1467;
                    } catch(e) {
                      if ((e.exctype == 'return') && (e.target == returnTarget)) {
                        return e.returnvalue;
                      } else {
                        throw e;
                      }
                    }
                  }
                  func1466.paramCounts = [
                      0,
                  ];
                  func1466.variableArities = [
                      false,
                  ];
                  obj1141.methods["values"] = func1466;
                  func1466.definitionLine = 255;
                  func1466.definitionModule = "natList";
                  var func1468 = function(argcv) {    // method keys
                    var curarg = 1;
                    if (argcv[0] != 0)
                      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for keys"));
                    setModuleName("natList");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    try {
                      setLineNumber(261)    // compilenode call;
                      onSelf = true;
                      var call1469 = callmethod(this, "indices", [0]);
                      var call1470 = callmethod(call1469,"iterator", [0]);
                      return call1470;
                    } catch(e) {
                      if ((e.exctype == 'return') && (e.target == returnTarget)) {
                        return e.returnvalue;
                      } else {
                        throw e;
                      }
                    }
                  }
                  func1468.paramCounts = [
                      0,
                  ];
                  func1468.variableArities = [
                      false,
                  ];
                  obj1141.methods["keys"] = func1468;
                  func1468.definitionLine = 260;
                  func1468.definitionModule = "natList";
                  var func1471 = function(argcv) {    // method keysAndValuesDo(1)
                    var curarg = 1;
                    var var_block2 = arguments[curarg];
                    curarg++;
                    if (argcv[0] != 1)
                      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for keysAndValuesDo(1)"));
                    setModuleName("natList");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    try {
                      setLineNumber(266)    // compilenode call;
                      onSelf = true;
                      var call1472 = callmethod(this, "size", [0]);
                      var var_curSize = call1472;
                      setLineNumber(267)    // compilenode num;
                      var var_i = new GraceNum(1);
                      setLineNumber(268)    // compilenode block;
                      var block1473 = new GraceBlock(this, 268, 0);
                      block1473.real = function() {
                        sourceObject = this;
                        onSelf = true;
                        var call1474 = callmethod(this, "size", [0]);
                        var opresult1477 = callmethod(var_i, "<=", [1], call1474);
                        return opresult1477;
                      };
                      var block1478 = new GraceBlock(this, 268, 0);
                      block1478.real = function() {
                        sourceObject = this;
                        setLineNumber(269)    // compilenode identifier;
                        onSelf = true;
                        var call1479 = callmethod(this, "at", [1], var_i);
                        var call1480 = callmethod(var_block2,"apply", [2], var_i, call1479);
                        setLineNumber(270)    // compilenode identifier;
                        var opresult1483 = callmethod(var_i, "+", [1], new GraceNum(1));
                        var_i = opresult1483;
                        return opresult1483;
                      };
                      var call1484 = callmethod(Grace_prelude, "while()do", [1, 1], block1473, block1478);
                      return call1484;
                    } catch(e) {
                      if ((e.exctype == 'return') && (e.target == returnTarget)) {
                        return e.returnvalue;
                      } else {
                        throw e;
                      }
                    }
                  }
                  func1471.paramCounts = [
                      1,
                  ];
                  func1471.variableArities = [
                      false,
                  ];
                  obj1141.methods["keysAndValuesDo"] = func1471;
                  func1471.definitionLine = 265;
                  func1471.definitionModule = "natList";
                  var func1485 = function(argcv) {    // method sortBy(1)
                    var curarg = 1;
                    var var_sortBlock = arguments[curarg];
                    curarg++;
                    if (argcv[0] != 1)
                      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for sortBy(1)"));
                    setModuleName("natList");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    try {
                      setLineNumber(275)    // compilenode call;
                         // start native code from line 275
                      var result = GraceDone;
                      var compareFun = function compareFun(a, b) {
                      var res = callmethod(var_sortBlock, "apply", [2], a, b);
                      if (res.className == "number") return res._value;
                      throw new GraceExceptionPacket(TypeErrorObject,
                             new GraceString("sort block in list.sortBy method did not return a number"));
                  }
                  this.data.jsArray.sort(compareFun);
                      var nat1486 = result;
                         // end native code insertion
                      setLineNumber(282)    // compilenode identifier;
                      return this;
                    } catch(e) {
                      if ((e.exctype == 'return') && (e.target == returnTarget)) {
                        return e.returnvalue;
                      } else {
                        throw e;
                      }
                    }
                  }
                  func1485.paramCounts = [
                      1,
                  ];
                  func1485.variableArities = [
                      false,
                  ];
                  obj1141.methods["sortBy"] = func1485;
                  func1485.definitionLine = 274;
                  func1485.definitionModule = "natList";
                  var func1487 = function(argcv) {    // method sort
                    var curarg = 1;
                    if (argcv[0] != 0)
                      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for sort"));
                    setModuleName("natList");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    try {
                      setLineNumber(287)    // compilenode block;
                      var block1488 = new GraceBlock(this, 287, 2);
                      block1488.real = function(var_l, var_r) {
                        sourceObject = this;
                        var if1489 = GraceDone;
                        setLineNumber(288)    // compilenode identifier;
                        var opresult1492 = callmethod(var_l, "==", [1], var_r);
                        if (Grace_isTrue(opresult1492)) {
                          if1489 = new GraceNum(0);
                        } else {
                          var if1493 = GraceDone;
                          setLineNumber(289)    // compilenode identifier;
                          var opresult1496 = callmethod(var_l, "<", [1], var_r);
                          if (Grace_isTrue(opresult1496)) {
                            var call1497 = callmethod(new GraceNum(1),"prefix-", [0]);
                            if1493 = call1497;
                          } else {
                            setLineNumber(290)    // compilenode num;
                            if1493 = new GraceNum(1);
                          }
                          if1489 = if1493;
                        }
                        return if1489;
                      };
                      onSelf = true;
                      var call1498 = callmethod(this, "sortBy", [1], block1488);
                      return call1498;
                    } catch(e) {
                      if ((e.exctype == 'return') && (e.target == returnTarget)) {
                        return e.returnvalue;
                      } else {
                        throw e;
                      }
                    }
                  }
                  func1487.paramCounts = [
                      0,
                  ];
                  func1487.variableArities = [
                      false,
                  ];
                  obj1141.methods["sort"] = func1487;
                  func1487.definitionLine = 286;
                  func1487.definitionModule = "natList";
                  var func1499 = function(argcv) {    // method copySortedBy(1)
                    var curarg = 1;
                    var var_sortBlock = arguments[curarg];
                    curarg++;
                    if (argcv[0] != 1)
                      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for copySortedBy(1)"));
                    setModuleName("natList");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    try {
                      setLineNumber(294)    // compilenode call;
                      onSelf = true;
                      var call1500 = callmethod(this, "copy", [0]);
                      var call1501 = callmethod(call1500,"sortBy", [1], var_sortBlock);
                      return call1501;
                    } catch(e) {
                      if ((e.exctype == 'return') && (e.target == returnTarget)) {
                        return e.returnvalue;
                      } else {
                        throw e;
                      }
                    }
                  }
                  func1499.paramCounts = [
                      1,
                  ];
                  func1499.variableArities = [
                      false,
                  ];
                  obj1141.methods["copySortedBy"] = func1499;
                  func1499.definitionLine = 293;
                  func1499.definitionModule = "natList";
                  var func1502 = function(argcv) {    // method copySorted
                    var curarg = 1;
                    if (argcv[0] != 0)
                      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for copySorted"));
                    setModuleName("natList");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    try {
                      setLineNumber(297)    // compilenode call;
                      onSelf = true;
                      var call1503 = callmethod(this, "copy", [0]);
                      var call1504 = callmethod(call1503,"sort", [0]);
                      return call1504;
                    } catch(e) {
                      if ((e.exctype == 'return') && (e.target == returnTarget)) {
                        return e.returnvalue;
                      } else {
                        throw e;
                      }
                    }
                  }
                  func1502.paramCounts = [
                      0,
                  ];
                  func1502.variableArities = [
                      false,
                  ];
                  obj1141.methods["copySorted"] = func1502;
                  func1502.definitionLine = 296;
                  func1502.definitionModule = "natList";
                  var func1505 = function(argcv) {    // method copy
                    var curarg = 1;
                    if (argcv[0] != 0)
                      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for copy"));
                    setModuleName("natList");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    try {
                      setLineNumber(300)    // compilenode call;
                      var call1506 = callmethod(superDepth, "outer", [0]);
                      onOuter = true;
                      onSelf = true;
                      var call1507 = callmethod(call1506, "withAll", [1], this);
                      return call1507;
                    } catch(e) {
                      if ((e.exctype == 'return') && (e.target == returnTarget)) {
                        return e.returnvalue;
                      } else {
                        throw e;
                      }
                    }
                  }
                  func1505.paramCounts = [
                      0,
                  ];
                  func1505.variableArities = [
                      false,
                  ];
                  obj1141.methods["copy"] = func1505;
                  func1505.definitionLine = 299;
                  func1505.definitionModule = "natList";
                  sourceObject = obj1141;
                  setLineNumber(12)    // compilenode call;
                  var call1508 = callmethod(Grace_prelude, "collections", [0]);
                  var call1509 = callmethod(call1508,"indexable", [0]);
                  var call1510 = callmethod(call1509,"trait()object", [0, 1], this);
                  obj1141.superobj = call1510;
                  obj1141._value = call1510._value;
                  sourceObject = obj1141;
                  setLineNumber(13)    // compilenode num;
                  obj1141.data["sz"] = new GraceNum(0);
                  var reader_natList_sz1511 = function() {
                    return this.data["sz"];
                  }
                  obj1141.methods["sz"] = reader_natList_sz1511;
                  obj1141.data["sz"] = new GraceNum(0);
                  var writer_natList_sz1511 = function(argcv, o) {
                    this.data["sz"] = o;
                  }
                  obj1141.methods["sz:="] = writer_natList_sz1511;
                  reader_natList_sz1511.confidential = true;
                  writer_natList_sz1511.confidential = true;
                  obj1141.mutable = true;
                  sourceObject = obj1141;
                  setLineNumber(14)    // compilenode call;
                     // start native code from line 14
                  var result = GraceDone;
                  var result = [];
                  var nat1512 = result;
                     // end native code insertion
                  obj1141.data["jsArray"] = nat1512;
                  var reader_natList_jsArray1513 = function() {
                    return this.data["jsArray"];
                  }
                  obj1141.methods["jsArray"] = reader_natList_jsArray1513;
                  obj1141.data["jsArray"] = nat1512;
                  var writer_natList_jsArray1513 = function(argcv, o) {
                    this.data["jsArray"] = o;
                  }
                  obj1141.methods["jsArray:="] = writer_natList_jsArray1513;
                  reader_natList_jsArray1513.confidential = true;
                  writer_natList_jsArray1513.confidential = true;
                  obj1141.mutable = true;
                  sourceObject = obj1141;
                  setLineNumber(15)    // compilenode block;
                  var block1514 = new GraceBlock(this, 15, 1);
                  block1514.real = function(var_each) {
                    sourceObject = this;
                    setLineNumber(16)    // compilenode call;
                       // start native code from line 16
                    var result = GraceDone;
                    this.data.jsArray.push(var_each);
                    var nat1515 = result;
                       // end native code insertion
                    return nat1515;
                  };
                  setLineNumber(15)    // compilenode identifier;
                  var call1516 = callmethod(var_a,"do", [1], block1514);
                  sourceObject = obj1141;
                  sourceObject = obj1141;
                  sourceObject = obj1141;
                  sourceObject = obj1141;
                  sourceObject = obj1141;
                  sourceObject = obj1141;
                  sourceObject = obj1141;
                  sourceObject = obj1141;
                  sourceObject = obj1141;
                  sourceObject = obj1141;
                  sourceObject = obj1141;
                  sourceObject = obj1141;
                  sourceObject = obj1141;
                  sourceObject = obj1141;
                  sourceObject = obj1141;
                  sourceObject = obj1141;
                  sourceObject = obj1141;
                  sourceObject = obj1141;
                  sourceObject = obj1141;
                  sourceObject = obj1141;
                  sourceObject = obj1141;
                  sourceObject = obj1141;
                  sourceObject = obj1141;
                  sourceObject = obj1141;
                  sourceObject = obj1141;
                  sourceObject = obj1141;
                  sourceObject = obj1141;
                  sourceObject = obj1141;
                  sourceObject = obj1141;
                  sourceObject = obj1141;
                  sourceObject = obj1141;
                  sourceObject = obj1141;
                  sourceObject = obj1141;
                  sourceObject = obj1141;
                  sourceObject = obj1141;
                  sourceObject = obj1141;
                  sourceObject = obj1141;
                  superDepth = origSuperDepth;
                }
                obj_init_1141.apply(inheritingObject, []);
                return obj1141;
              } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                  return e.returnvalue;
                } else {
                  throw e;
                }
              }
            }
            obj761.methods["withAll()object"] = func1140;
          sourceObject = obj761;
          setLineNumber(9)    // compilenode call;
          var call1517 = callmethod(Grace_prelude, "collections", [0]);
          var call1518 = callmethod(call1517,"collectionFactory", [0]);
          var call1519 = callmethod(call1518,"trait()object", [0, 1], this);
          obj761.superobj = call1519;
          obj761._value = call1519._value;
          sourceObject = obj761;
          superDepth = origSuperDepth;
        }
        obj_init_761.apply(inheritingObject, []);
        return obj761;
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    this.methods["list()object"] = func760;
  return this;
}
gracecode_natList.imports = [
];
if (typeof gctCache !== "undefined")
  gctCache['natList'] = "path:\n natList\nclasses:\npublic:\n list\nconfidential:\nfresh:list:\n withAll\n self\nfresh-methods:\n list\nmodules:\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["natList"] = [
    "// Rules for writing JS native code",
    "// Access ‹param› by writing var_‹param›",
    "// Access ‹field› by writing this.data.‹field›",
    "// set result by assigning to ‹result›",
    "// return returns from the method",
    "",
    "",
    "factory method list<T> {",
    "    inherits collections.collectionFactory.trait",
    "",
    "    factory method withAll(a:Collection<T>) -> List<T> {",
    "        inherits collections.indexable.trait<T>",
    "        var sz := 0",
    "        var jsArray := native \"js\" code ‹var result = [];›",
    "        a.do { each ->",
    "            native \"js\" code ‹this.data.jsArray.push(var_each);›",
    "        }",
    "        ",
    "",
    "        method boundsCheck(n) is confidential {",
    "            native \"js\" code ‹var ix = var_n._value;",
    "                    if ((ix < 1) || (ix > this.data.jsArray.length)) {",
    "                        var msg = \"index \" + ix + \" out of bounds 1..\" + this.data.jsArray.length;",
    "                        var BoundsError = callmethod(Grace_prelude, \"BoundsError\", [0]);",
    "                        callmethod(BoundsError,\"raise\", [1], new GraceString(msg));",
    "                    }›",
    "            if ((n < 1) || (n > size)) then {",
    "                BoundsError.raise \"index {n} out of bounds 1..{size}\" ",
    "            }",
    "        }",
    "        ",
    "",
    "        method size {",
    "            native \"js\" code ‹return new GraceNum(this.data.jsArray.length)›",
    "            sz",
    "        }",
    "        ",
    "",
    "        method at(n) {",
    "            native \"js\" code ‹var ix = var_n._value;",
    "                    if ((ix < 1) || (ix > this.data.jsArray.length)) {",
    "                        var msg = \"index \" + ix + \" out of bounds 1..\" + this.data.jsArray.length;",
    "                        var BoundsError = callmethod(Grace_prelude, \"BoundsError\", [0]);",
    "                        callmethod(BoundsError, \"raise\", [1], new GraceString(msg));",
    "                    }",
    "                    return this.data.jsArray[ix - 1];›",
    "        }",
    "        ",
    "",
    "        method [](n) {",
    "            native \"js\" code ‹var ix = var_n._value;",
    "                    if ((ix < 1) || (ix > this.data.jsArray.length)) {",
    "                        var msg = \"index \" + ix + \" out of bounds 1..\" + this.data.jsArray.length;",
    "                        var BoundsError = callmethod(Grace_prelude, \"BoundsError\", [0]);",
    "                        callmethod(BoundsError, \"raise\", [1], new GraceString(msg));",
    "                    }",
    "                    return this.data.jsArray[ix - 1];›",
    "        }",
    "        ",
    "",
    "        method at(n)put(x) {",
    "            native \"js\" code ‹var  ix = var_n._value;",
    "                    if ((ix < 1) || (ix > this.data.jsArray.length + 1)) {",
    "                        var msg = \"index \" + ix + \" out of bounds 1..\" + this.data.jsArray.length;",
    "                        var BoundsError = callmethod(Grace_prelude, \"BoundsError\", [0]);",
    "                        callmethod(BoundsError, \"raise\", [1], new GraceString(msg));",
    "                    }",
    "                    this.data.jsArray[ix-1] = var_x;",
    "                    return this;›",
    "        }",
    "",
    "        method []:=(n, x) {",
    "            native \"js\" code ‹var ix = var_n._value;",
    "                    if ((ix < 1) || (ix > this.data.jsArray.length + 1)) {",
    "                        var msg = \"index \" + ix + \" out of bounds 1..\" + this.data.jsArray.length;",
    "                        var BoundsError = callmethod(Grace_prelude, \"BoundsError\", [0]);",
    "                        callmethod(BoundsError, \"raise\", [1], new GraceString(msg));",
    "                    }",
    "                    this.data.jsArray[ix-1] = var_x;",
    "                    return GraceDone;›",
    "        }",
    "",
    "        method add(*x) {",
    "            if (x.size == 1) then {",
    "                native \"js\" code ‹var v = callmethod(var_x, \"first\", [0]);",
    "                    this.data.jsArray.push(v);",
    "                    return this;›",
    "            }",
    "            addAll(x)",
    "        }",
    "",
    "        method addAll(l) {",
    "            for (l) do { each -> push(each) }",
    "            self",
    "        }",
    "",
    "        method push(x) {",
    "            native \"js\" code ‹this.data.jsArray.push(var_x);",
    "                    return this;›",
    "        }",
    "        ",
    "        method addLast(*x) { addAll(x) }    // compatibility",
    "        ",
    "",
    "        method removeLast {",
    "            def result = self.at(size)",
    "            native \"js\" code ‹if (this.data.jsArray.length = 0) {",
    "                        var msg = \"index \" + ix + \" out of bounds 1..\" + this.data.jsArray.length;",
    "                        var BoundsError = callmethod(Grace_prelude, \"BoundsError\", [0]);",
    "                        callmethod(BoundsError, \"raise\", [1], new GraceString(msg));",
    "                    } else return this.data.jsArray.pop();›",
    "        }",
    "",
    "        method addAllFirst(l) {",
    "            var ix := l.size;",
    "            while {ix > 0} do {",
    "                def each = l.at(ix)",
    "                ix := ix - 1",
    "                native \"js\" code ‹this.data.jsArray.unshift(var_each);›",
    "            }",
    "            self",
    "        }",
    "        ",
    "",
    "        method addFirst(*l) { addAllFirst(l) }",
    "        ",
    "",
    "        method removeFirst {",
    "            removeAt(1)",
    "        }",
    "        ",
    "",
    "        method removeAt(n) {",
    "            def removed = self.at(n)    // does the bounds check",
    "            native \"js\" code ‹this.data.jsArray.splice(var_n._value - 1, 1);›",
    "            return removed",
    "        }",
    "        ",
    "",
    "        method remove(*v:T) {",
    "            removeAll(v)",
    "        }",
    "        ",
    "",
    "        method remove(*v:T) ifAbsent(action:Block0<Done>) {",
    "            removeAll(v) ifAbsent (action)",
    "        }",
    "        ",
    "",
    "        method removeAll(vs: Collection<T>) {",
    "            removeAll(vs) ifAbsent { NoSuchObject.raise \"object not in list\" }",
    "        }",
    "        ",
    "",
    "        method removeAll(vs: Collection<T>) ifAbsent(action:Block0<Done>)  {",
    "            for (vs) do { each -> ",
    "                def ix = self.indexOf(each) ifAbsent {return action.apply}",
    "                removeAt(ix)",
    "            }",
    "            self",
    "        }",
    "        ",
    "",
    "        method pop { removeLast }",
    "",
    "        method reversed {",
    "            def result = list.empty",
    "            do { each -> result.addFirst(each) }",
    "            result",
    "        }",
    "        method reverse {",
    "            var hiIx := size",
    "            var loIx := 1",
    "            while {loIx < hiIx} do {",
    "                def hiVal = self.at(hiIx)",
    "                self.at(hiIx) put (self.at(loIx))",
    "                self.at(loIx) put (hiVal)",
    "                hiIx := hiIx - 1",
    "                loIx := loIx + 1",
    "            }",
    "            self",
    "        }",
    "",
    "        method ++(o) {",
    "            def l = list.withAll(self)",
    "            l.addAll(o)",
    "        }",
    "        ",
    "",
    "        method asString {",
    "            var s := \"[\"",
    "            def curSize = self.size",
    "            for (1..curSize) do { i ->",
    "                s := s ++ at(i).asString",
    "                if (i < curSize) then { s := s ++ \",\" }",
    "            }",
    "            s ++ \"]\"",
    "        }",
    "        ",
    "",
    "        method extend(l) { addAll(l); done }    // compatibility",
    "        ",
    "",
    "        method contains(element) {",
    "            do { each -> if (each == element) then { return true } }",
    "            return false",
    "        }",
    "        ",
    "",
    "        method do(block1) {",
    "            var i := 1",
    "            def curSize = self.size",
    "            while {i <= curSize} do {",
    "                block1.apply(self.at(i))",
    "                i := i + 1",
    "            }",
    "        }",
    "        ",
    "",
    "        method ==(other) {",
    "            match (other)",
    "                case {o:Sequence ->",
    "                    if (self.size != o.size) then {return false}",
    "                    self.indices.do { ix ->",
    "                        if (self.at(ix) != o.at(ix)) then {",
    "                            return false",
    "                        }",
    "                    }",
    "                    return true",
    "                } ",
    "                case {_ ->",
    "                    return false",
    "                }",
    "        }",
    "        ",
    "",
    "        method iterator {",
    "            object {",
    "                inherits iterable.trait",
    "                var idx := 1",
    "                method asDebugString { \"{asString}⟪{idx}⟫\" }",
    "                method asString { \"aListIterator\" }",
    "                method havemore { idx <= size }",
    "                method hasNext { idx <= size }",
    "                method next {",
    "                    if (idx > size) then { Exhausted.raise \"on list\" }",
    "                    def ret = at(idx)",
    "                    idx := idx + 1",
    "                    ret",
    "                }",
    "            }",
    "        }",
    "        ",
    "",
    "        method values {",
    "            self.iterator",
    "        }",
    "        ",
    "",
    "        method keys {",
    "            self.indices.iterator",
    "        }",
    "        ",
    "",
    "        method keysAndValuesDo(block2) {",
    "            def curSize = size",
    "            var i := 1",
    "            while {i <= size} do {",
    "                block2.apply(i, self.at(i))",
    "                i := i + 1",
    "            }",
    "        }",
    "",
    "        method sortBy(sortBlock:Block2) {",
    "            native \"js\" code ‹var compareFun = function compareFun(a, b) {",
    "                      var res = callmethod(var_sortBlock, \"apply\", [2], a, b);",
    "                      if (res.className == \"number\") return res._value;",
    "                      throw new GraceExceptionPacket(TypeErrorObject,",
    "                             new GraceString(\"sort block in list.sortBy method did not return a number\"));",
    "                  }",
    "                  this.data.jsArray.sort(compareFun);›",
    "            self",
    "        }",
    "        ",
    "",
    "        method sort {",
    "            sortBy { l, r ->",
    "                if (l == r) then {0} ",
    "                    elseif (l < r) then {-1} ",
    "                    else {1}",
    "            }",
    "        }",
    "        method copySortedBy(sortBlock:Block2) {",
    "            copy.sortBy(sortBlock:Block2)",
    "        }",
    "        method copySorted {",
    "            copy.sort",
    "        }",
    "        method copy {",
    "            outer.withAll(self)",
    "        }",
    "    }",
    "}",
  ];
};
if (typeof global !== "undefined")
  global.gracecode_natList = gracecode_natList;
if (typeof window !== "undefined")
  window.gracecode_natList = gracecode_natList;
