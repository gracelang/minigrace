"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_gUnit() {
  setModuleName("gUnit");
  this.definitionModule = "gUnit";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_gUnit_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_gUnit_outer0;
  setLineNumber(8);    // compilenode import
  // Import of mirrors as mirror
  if (typeof gracecode_mirrors == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module mirrors'));
  var var_mirror = do_import("mirrors", gracecode_mirrors);
  var func1 = function(argcv) {    // method mirror
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for mirror"));
    setModuleName("gUnit");
    // mirror is a simple accessor - elide try ... catch
    return var_mirror;
  };
  func1.paramCounts = [0];
  this.methods["mirror"] = func1;
  func1.definitionLine = 8;
  func1.definitionModule = "gUnit";
  func1.debug = "import";
  func1.confidential = true;
  setModuleName("gUnit");
  setLineNumber(9);    // compilenode import
  // Import of math as math
  if (typeof gracecode_math == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module math'));
  var var_math = do_import("math", gracecode_math);
  var func2 = function(argcv) {    // method math
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for math"));
    setModuleName("gUnit");
    // math is a simple accessor - elide try ... catch
    return var_math;
  };
  func2.paramCounts = [0];
  this.methods["math"] = func2;
  func2.definitionLine = 9;
  func2.definitionModule = "gUnit";
  func2.debug = "import";
  func2.confidential = true;
  setModuleName("gUnit");
  setLineNumber(62);    // compilenode method
  var func3 = function(argcv) {    // method assertion
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for assertion"));
    setModuleName("gUnit");
    var obj4 = Grace_allocObject(GraceObject, "gUnit.assertion");
    obj4.definitionModule = "gUnit";
    obj4.definitionLine = 62;
    obj4.outer = this;
    var reader_gUnit_outer5 = function() {
      return this.outer;
    };
    obj4.methods["outer"] = reader_gUnit_outer5;
    var obj_init_4 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj4;
      var func6 = function(argcv) {    // method countOneAssertion
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for countOneAssertion"));
        setModuleName("gUnit");
        setLineNumber(64);    // compilenode call
        var call7 = callmethodChecked(var_prelude, "abstract", [0]);
        return call7;
      };
      func6.paramCounts = [0];
      obj4.methods["countOneAssertion"] = func6;
      func6.definitionLine = 64;
      func6.definitionModule = "gUnit";
      var func8 = function(argcv) {    // method failBecause(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_str = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for failBecause(1)"));
        setModuleName("gUnit");
        setLineNumber(67);    // compilenode identifier
        onSelf = true;
        var call9 = callmethodChecked(this, "assert()description", [1, 1], GraceFalse, var_str);
        return call9;
      };
      func8.paramCounts = [1];
      obj4.methods["failBecause"] = func8;
      func8.definitionLine = 66;
      func8.definitionModule = "gUnit";
      var func10 = function(argcv) {    // method assert(1)description(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_bb = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for assert (arg list 1) of assert(1)description(1)"));
        var var_str = arguments[curarg];
        curarg++;
        if (argcv[1] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for description (arg list 2) of assert(1)description(1)"));
        // Start argument checking
        curarg = 1;
        setLineNumber(69);    // compilenode identifier
        if (!Grace_isTrue(callmethod(var_Boolean, "match",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in assert (arg list 1), which corresponds to parameter bb, does not have " + 
                    callmethod(var_Boolean, "asString", [0])._value + "."));
        curarg++;
        curarg++;
        // End argument checking
        setModuleName("gUnit");
        setLineNumber(70);    // compilenode call
        onSelf = true;
        var call11 = callmethodChecked(this, "countOneAssertion", [0]);
        var if12 = GraceDone;
        setLineNumber(71);    // compilenode identifier
        var call13 = callmethodChecked(var_bb, "prefix!", [0]);
        if (Grace_isTrue(call13)) {
          onSelf = true;
          var call14 = callmethodChecked(this, "AssertionFailure", [0]);
          var call15 = callmethodChecked(call14, "raise", [1], var_str);
          if12 = call15;
        }
        return if12;
      };
      func10.paramTypes = [];
      func10.paramTypes.push([type_Boolean, "bb"]);
      func10.paramTypes.push([]);
      func10.paramCounts = [1, 1];
      obj4.methods["assert()description"] = func10;
      func10.definitionLine = 69;
      func10.definitionModule = "gUnit";
      var func16 = function(argcv) {    // method deny(1)description(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_bb = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for deny (arg list 1) of deny(1)description(1)"));
        var var_str = arguments[curarg];
        curarg++;
        if (argcv[1] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for description (arg list 2) of deny(1)description(1)"));
        // Start argument checking
        curarg = 1;
        setLineNumber(73);    // compilenode identifier
        if (!Grace_isTrue(callmethod(var_Boolean, "match",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in deny (arg list 1), which corresponds to parameter bb, does not have " + 
                    callmethod(var_Boolean, "asString", [0])._value + "."));
        curarg++;
        curarg++;
        // End argument checking
        setModuleName("gUnit");
        setLineNumber(74);    // compilenode identifier
        var call17 = callmethodChecked(var_bb, "prefix!", [0]);
        onSelf = true;
        var call18 = callmethodChecked(this, "assert()description", [1, 1], call17, var_str);
        return call18;
      };
      func16.paramTypes = [];
      func16.paramTypes.push([type_Boolean, "bb"]);
      func16.paramTypes.push([]);
      func16.paramCounts = [1, 1];
      obj4.methods["deny()description"] = func16;
      func16.definitionLine = 73;
      func16.definitionModule = "gUnit";
      var func19 = function(argcv) {    // method assert(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_bb = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for assert(1)"));
        // Start argument checking
        curarg = 1;
        setLineNumber(76);    // compilenode identifier
        if (!Grace_isTrue(callmethod(var_Boolean, "match",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in assert (arg list 1), which corresponds to parameter bb, does not have " + 
                    callmethod(var_Boolean, "asString", [0])._value + "."));
        curarg++;
        // End argument checking
        setModuleName("gUnit");
        setLineNumber(77);    // compilenode string
        var string20 = new GraceString("Assertion failed!");
        onSelf = true;
        var call21 = callmethodChecked(this, "assert()description", [1, 1], var_bb, string20);
        return call21;
      };
      func19.paramTypes = [];
      func19.paramTypes.push([type_Boolean, "bb"]);
      func19.paramCounts = [1];
      obj4.methods["assert"] = func19;
      func19.definitionLine = 76;
      func19.definitionModule = "gUnit";
      var func22 = function(argcv) {    // method deny(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_bb = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for deny(1)"));
        // Start argument checking
        curarg = 1;
        setLineNumber(79);    // compilenode identifier
        if (!Grace_isTrue(callmethod(var_Boolean, "match",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in deny (arg list 1), which corresponds to parameter bb, does not have " + 
                    callmethod(var_Boolean, "asString", [0])._value + "."));
        curarg++;
        // End argument checking
        setModuleName("gUnit");
        setLineNumber(80);    // compilenode identifier
        var call23 = callmethodChecked(var_bb, "prefix!", [0]);
        onSelf = true;
        var call24 = callmethodChecked(this, "assert", [1], call23);
        return call24;
      };
      func22.paramTypes = [];
      func22.paramTypes.push([type_Boolean, "bb"]);
      func22.paramCounts = [1];
      obj4.methods["deny"] = func22;
      func22.definitionLine = 79;
      func22.definitionModule = "gUnit";
      var func25 = function(argcv) {    // method assert(1)shouldBe(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_s1 = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for assert (arg list 1) of assert(1)shouldBe(1)"));
        var var_s2 = arguments[curarg];
        curarg++;
        if (argcv[1] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for shouldBe (arg list 2) of assert(1)shouldBe(1)"));
        // Start argument checking
        curarg = 1;
        setLineNumber(82);    // compilenode identifier
        if (!Grace_isTrue(callmethod(var_Object, "match",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in assert (arg list 1), which corresponds to parameter s1, does not have " + 
                    callmethod(var_Object, "asString", [0])._value + "."));
        curarg++;
        if (!Grace_isTrue(callmethod(var_Object, "match",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in shouldBe (arg list 2), which corresponds to parameter s2, does not have " + 
                    callmethod(var_Object, "asString", [0])._value + "."));
        curarg++;
        // End argument checking
        setModuleName("gUnit");
        setLineNumber(83);    // compilenode identifier
        var opresult28 = callmethodChecked(var_s1, "==", [1], var_s2);
        var string29 = new GraceString("\u203a");
        var call31 = callmethodChecked(var_s2, "asDebugString", [0]);
        var string33 = new GraceString("\u203a should be \u2039");
        var call35 = callmethodChecked(var_s1, "asDebugString", [0]);
        var string37 = new GraceString("\u2039");
        var opresult39 = callmethodChecked(string37, "++", [1], call35);
        var opresult41 = callmethodChecked(opresult39, "++", [1], string33);
        var opresult43 = callmethodChecked(opresult41, "++", [1], call31);
        var opresult45 = callmethodChecked(opresult43, "++", [1], string29);
        onSelf = true;
        var call46 = callmethodChecked(this, "assert()description", [1, 1], opresult28, opresult45);
        return call46;
      };
      func25.paramTypes = [];
      func25.paramTypes.push([type_Object, "s1"]);
      func25.paramTypes.push([type_Object, "s2"]);
      func25.paramCounts = [1, 1];
      obj4.methods["assert()shouldBe"] = func25;
      func25.definitionLine = 82;
      func25.definitionModule = "gUnit";
      var func47 = function(argcv) {    // method assert(1)shouldntBe(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_s1 = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for assert (arg list 1) of assert(1)shouldntBe(1)"));
        var var_s2 = arguments[curarg];
        curarg++;
        if (argcv[1] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for shouldntBe (arg list 2) of assert(1)shouldntBe(1)"));
        // Start argument checking
        curarg = 1;
        setLineNumber(85);    // compilenode identifier
        if (!Grace_isTrue(callmethod(var_Object, "match",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in assert (arg list 1), which corresponds to parameter s1, does not have " + 
                    callmethod(var_Object, "asString", [0])._value + "."));
        curarg++;
        if (!Grace_isTrue(callmethod(var_Object, "match",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in shouldntBe (arg list 2), which corresponds to parameter s2, does not have " + 
                    callmethod(var_Object, "asString", [0])._value + "."));
        curarg++;
        // End argument checking
        setModuleName("gUnit");
        setLineNumber(86);    // compilenode identifier
        var opresult50 = callmethodChecked(var_s1, "==", [1], var_s2);
        var call51 = callmethodChecked(opresult50, "not", [0]);
        var string52 = new GraceString("\u203a");
        var call54 = callmethodChecked(var_s2, "asDebugString", [0]);
        var string56 = new GraceString("\u203a should not be \u2039");
        var call58 = callmethodChecked(var_s1, "asDebugString", [0]);
        var string60 = new GraceString("\u2039");
        var opresult62 = callmethodChecked(string60, "++", [1], call58);
        var opresult64 = callmethodChecked(opresult62, "++", [1], string56);
        var opresult66 = callmethodChecked(opresult64, "++", [1], call54);
        var opresult68 = callmethodChecked(opresult66, "++", [1], string52);
        onSelf = true;
        var call69 = callmethodChecked(this, "assert()description", [1, 1], call51, opresult68);
        return call69;
      };
      func47.paramTypes = [];
      func47.paramTypes.push([type_Object, "s1"]);
      func47.paramTypes.push([type_Object, "s2"]);
      func47.paramCounts = [1, 1];
      obj4.methods["assert()shouldntBe"] = func47;
      func47.definitionLine = 85;
      func47.definitionModule = "gUnit";
      var func70 = function(argcv) {    // method deny(1)shouldBe(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_s1 = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for deny (arg list 1) of deny(1)shouldBe(1)"));
        var var_s2 = arguments[curarg];
        curarg++;
        if (argcv[1] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for shouldBe (arg list 2) of deny(1)shouldBe(1)"));
        // Start argument checking
        curarg = 1;
        setLineNumber(88);    // compilenode identifier
        if (!Grace_isTrue(callmethod(var_Object, "match",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in deny (arg list 1), which corresponds to parameter s1, does not have " + 
                    callmethod(var_Object, "asString", [0])._value + "."));
        curarg++;
        if (!Grace_isTrue(callmethod(var_Object, "match",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in shouldBe (arg list 2), which corresponds to parameter s2, does not have " + 
                    callmethod(var_Object, "asString", [0])._value + "."));
        curarg++;
        // End argument checking
        setModuleName("gUnit");
        setLineNumber(89);    // compilenode identifier
        var opresult73 = callmethodChecked(var_s1, "==", [1], var_s2);
        var call74 = callmethodChecked(opresult73, "not", [0]);
        var string75 = new GraceString("\u203a");
        var call77 = callmethodChecked(var_s2, "asDebugString", [0]);
        var string79 = new GraceString("\u203a should not be \u2039");
        var call81 = callmethodChecked(var_s1, "asDebugString", [0]);
        var string83 = new GraceString("\u2039");
        var opresult85 = callmethodChecked(string83, "++", [1], call81);
        var opresult87 = callmethodChecked(opresult85, "++", [1], string79);
        var opresult89 = callmethodChecked(opresult87, "++", [1], call77);
        var opresult91 = callmethodChecked(opresult89, "++", [1], string75);
        onSelf = true;
        var call92 = callmethodChecked(this, "assert()description", [1, 1], call74, opresult91);
        return call92;
      };
      func70.paramTypes = [];
      func70.paramTypes.push([type_Object, "s1"]);
      func70.paramTypes.push([type_Object, "s2"]);
      func70.paramCounts = [1, 1];
      obj4.methods["deny()shouldBe"] = func70;
      func70.definitionLine = 88;
      func70.definitionModule = "gUnit";
      var func93 = function(argcv) {    // method assert(1)shouldEqual(1)within(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_n1 = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for assert (arg list 1) of assert(1)shouldEqual(1)within(1)"));
        var var_n2 = arguments[curarg];
        curarg++;
        if (argcv[1] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for shouldEqual (arg list 2) of assert(1)shouldEqual(1)within(1)"));
        var var_epsilon = arguments[curarg];
        curarg++;
        if (argcv[2] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for within (arg list 3) of assert(1)shouldEqual(1)within(1)"));
        // Start argument checking
        curarg = 1;
        setLineNumber(91);    // compilenode identifier
        if (!Grace_isTrue(callmethod(var_Number, "match",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in assert (arg list 1), which corresponds to parameter n1, does not have " + 
                    callmethod(var_Number, "asString", [0])._value + "."));
        curarg++;
        if (!Grace_isTrue(callmethod(var_Number, "match",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in shouldEqual (arg list 2), which corresponds to parameter n2, does not have " + 
                    callmethod(var_Number, "asString", [0])._value + "."));
        curarg++;
        if (!Grace_isTrue(callmethod(var_Number, "match",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in within (arg list 3), which corresponds to parameter epsilon, does not have " + 
                    callmethod(var_Number, "asString", [0])._value + "."));
        curarg++;
        // End argument checking
        setModuleName("gUnit");
        setLineNumber(92);    // compilenode identifier
        var diff97 = callmethodChecked(var_n1, "-", [1], var_n2);
        var call98 = callmethodChecked(var_math, "abs", [1], diff97);
        var opresult100 = callmethodChecked(call98, "\u2264", [1], var_epsilon);
        var string101 = new GraceString("\u203a");
        var call103 = callmethodChecked(var_n2, "asDebugString", [0]);
        var string105 = new GraceString("\u203a should be approximately \u2039");
        var call107 = callmethodChecked(var_n1, "asDebugString", [0]);
        var string109 = new GraceString("\u2039");
        var opresult111 = callmethodChecked(string109, "++", [1], call107);
        var opresult113 = callmethodChecked(opresult111, "++", [1], string105);
        var opresult115 = callmethodChecked(opresult113, "++", [1], call103);
        var opresult117 = callmethodChecked(opresult115, "++", [1], string101);
        onSelf = true;
        var call118 = callmethodChecked(this, "assert()description", [1, 1], opresult100, opresult117);
        return call118;
      };
      func93.paramTypes = [];
      func93.paramTypes.push([type_Number, "n1"]);
      func93.paramTypes.push([type_Number, "n2"]);
      func93.paramTypes.push([type_Number, "epsilon"]);
      func93.paramCounts = [1, 1, 1];
      obj4.methods["assert()shouldEqual()within"] = func93;
      func93.definitionLine = 91;
      func93.definitionModule = "gUnit";
      var func119 = function(argcv) {    // method assert(1)shouldRaise(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_block0 = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for assert (arg list 1) of assert(1)shouldRaise(1)"));
        var var_desiredException = arguments[curarg];
        curarg++;
        if (argcv[1] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for shouldRaise (arg list 2) of assert(1)shouldRaise(1)"));
        setModuleName("gUnit");
        setLineNumber(95);    // compilenode vardec
        var var_completedNormally;
        setLineNumber(96);    // compilenode call
        onSelf = true;
        var call120 = callmethodChecked(this, "countOneAssertion", [0]);
        setLineNumber(97);    // compilenode block
        var block122 = new GraceBlock(this, 97, 0);
        block122.real = function() {
          setLineNumber(98);    // compilenode identifier
          var call123 = callmethodChecked(var_block0, "apply", [0]);
          setLineNumber(99);    // compilenode identifier
          var_completedNormally = GraceTrue;
          return GraceDone;
        };
        var cases121 = [];
        setLineNumber(100);    // compilenode block
        var block124 = new GraceBlock(this, 100, 1);
        setLineNumber(0);    // compilenode string
        var string125 = new GraceString("raisedException");
        var call126 = callmethodChecked(var_prelude, "VariablePattern", [0]);
        var call127 = callmethodChecked(call126, "new", [1], string125);
        var call128 = callmethodChecked(var_prelude, "AndPattern", [0]);
        var call129 = callmethodChecked(call128, "new", [2], call127, var_desiredException);
        block124.pattern = call129;
        setLineNumber(100);    // compilenode identifier
        block124.paramTypes = [var_desiredException];
        block124.real = function(var_raisedException) {
          setLineNumber(101);    // compilenode identifier
          var_completedNormally = GraceFalse;
          return GraceDone;
        };
        cases121.push(block124);
        setLineNumber(102);    // compilenode block
        var block130 = new GraceBlock(this, 102, 1);
        setLineNumber(1);    // compilenode identifier
        block130.real = function(var_raisedException) {
          setLineNumber(104);    // compilenode string
          var string131 = new GraceString("");
          var string134 = new GraceString("\" instead of ");
          var call136 = callmethodChecked(var_raisedException, "message", [0]);
          var string138 = new GraceString(": \"");
          var opresult140 = callmethodChecked(string138, "++", [1], call136);
          var opresult142 = callmethodChecked(opresult140, "++", [1], string134);
          var opresult144 = callmethodChecked(opresult142, "++", [1], var_desiredException);
          var opresult146 = callmethodChecked(opresult144, "++", [1], string131);
          setLineNumber(103);    // compilenode string
          var string148 = new GraceString("");
          var call150 = callmethodChecked(var_raisedException, "exception", [0]);
          var string152 = new GraceString("code raised exception ");
          var opresult154 = callmethodChecked(string152, "++", [1], call150);
          var opresult156 = callmethodChecked(opresult154, "++", [1], string148);
          var opresult158 = callmethodChecked(opresult156, "++", [1], opresult146);
          onSelf = true;
          var call159 = callmethodChecked(this, "failBecause", [1], opresult158);
          return call159;
        };
        cases121.push(block130);
        setLineNumber(97);    // compiletrycatch
        var catchres121 = tryCatch(block122,cases121,false);
        setModuleName("gUnit");
        var if160 = GraceDone;
        setLineNumber(106);    // compilenode identifier
        if (Grace_isTrue(var_completedNormally)) {
          var string161 = new GraceString("code did not raise an exception");
          onSelf = true;
          var call162 = callmethodChecked(this, "failBecause", [1], string161);
          if160 = call162;
        }
        return if160;
      };
      func119.paramCounts = [1, 1];
      obj4.methods["assert()shouldRaise"] = func119;
      func119.definitionLine = 94;
      func119.definitionModule = "gUnit";
      var func163 = function(argcv) {    // method assert(1)shouldntRaise(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_block0 = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for assert (arg list 1) of assert(1)shouldntRaise(1)"));
        var var_undesiredException = arguments[curarg];
        curarg++;
        if (argcv[1] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for shouldntRaise (arg list 2) of assert(1)shouldntRaise(1)"));
        setModuleName("gUnit");
        setLineNumber(109);    // compilenode call
        onSelf = true;
        var call164 = callmethodChecked(this, "countOneAssertion", [0]);
        setLineNumber(110);    // compilenode block
        var block166 = new GraceBlock(this, 110, 0);
        block166.real = function() {
          setLineNumber(111);    // compilenode identifier
          var call167 = callmethodChecked(var_block0, "apply", [0]);
          return call167;
        };
        var cases165 = [];
        setLineNumber(112);    // compilenode block
        var block168 = new GraceBlock(this, 112, 1);
        setLineNumber(0);    // compilenode string
        var string169 = new GraceString("raisedException");
        var call170 = callmethodChecked(var_prelude, "VariablePattern", [0]);
        var call171 = callmethodChecked(call170, "new", [1], string169);
        var call172 = callmethodChecked(var_prelude, "AndPattern", [0]);
        var call173 = callmethodChecked(call172, "new", [2], call171, var_undesiredException);
        block168.pattern = call173;
        setLineNumber(112);    // compilenode identifier
        block168.paramTypes = [var_undesiredException];
        block168.real = function(var_raisedException) {
          setLineNumber(113);    // compilenode string
          var string174 = new GraceString("");
          var call176 = callmethodChecked(var_raisedException, "exception", [0]);
          var string178 = new GraceString("code raised exception ");
          var opresult180 = callmethodChecked(string178, "++", [1], call176);
          var opresult182 = callmethodChecked(opresult180, "++", [1], string174);
          onSelf = true;
          var call183 = callmethodChecked(this, "failBecause", [1], opresult182);
          return call183;
        };
        cases165.push(block168);
        setLineNumber(114);    // compilenode block
        var block184 = new GraceBlock(this, 114, 1);
        setLineNumber(1);    // compilenode identifier
        block184.real = function(var___95____95__7) {
          return GraceDone;
        };
        cases165.push(block184);
        setLineNumber(110);    // compiletrycatch
        var catchres165 = tryCatch(block166,cases165,false);
        setModuleName("gUnit");
        return catchres165;
      };
      func163.paramCounts = [1, 1];
      obj4.methods["assert()shouldntRaise"] = func163;
      func163.definitionLine = 108;
      func163.definitionModule = "gUnit";
      var func185 = function(argcv) {    // method assert(1)hasType(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_value = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for assert (arg list 1) of assert(1)hasType(1)"));
        var var_Desired = arguments[curarg];
        curarg++;
        if (argcv[1] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for hasType (arg list 2) of assert(1)hasType(1)"));
        // Start argument checking
        curarg = 1;
        curarg++;
        setLineNumber(118);    // compilenode identifier
        if (!Grace_isTrue(callmethod(var_Type, "match",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in hasType (arg list 2), which corresponds to parameter Desired, does not have " + 
                    callmethod(var_Type, "asString", [0])._value + "."));
        curarg++;
        // End argument checking
        setModuleName("gUnit");
        setLineNumber(119);    // compilenode identifier
        var cases186 = [];
        setLineNumber(120);    // compilenode block
        var block187 = new GraceBlock(this, 120, 1);
        setLineNumber(0);    // compilenode string
        var string188 = new GraceString("__8");
        var call189 = callmethodChecked(var_prelude, "VariablePattern", [0]);
        var call190 = callmethodChecked(call189, "new", [1], string188);
        var call191 = callmethodChecked(var_prelude, "AndPattern", [0]);
        var call192 = callmethodChecked(call191, "new", [2], call190, var_Desired);
        block187.pattern = call192;
        setLineNumber(120);    // compilenode identifier
        block187.paramTypes = [var_Desired];
        block187.real = function(var___95____95__8) {
          onSelf = true;
          var call193 = callmethodChecked(this, "countOneAssertion", [0]);
          return call193;
        };
        cases186.push(block187);
        setLineNumber(121);    // compilenode block
        var block194 = new GraceBlock(this, 121, 1);
        setLineNumber(1);    // compilenode identifier
        block194.real = function(var___95____95__9) {
          setLineNumber(122);    // compilenode identifier
          onSelf = true;
          var call195 = callmethodChecked(this, "methodsIn()missingFrom", [1, 1], var_Desired, var_value);
          var var_m = call195;
          setLineNumber(123);    // compilenode string
          var string196 = new GraceString(".");
          var string199 = new GraceString("; it's missing methods ");
          var string202 = new GraceString(" does not have type ");
          var call204 = callmethodChecked(var_value, "asDebugString", [0]);
          var string206 = new GraceString("");
          var opresult208 = callmethodChecked(string206, "++", [1], call204);
          var opresult210 = callmethodChecked(opresult208, "++", [1], string202);
          var opresult212 = callmethodChecked(opresult210, "++", [1], var_Desired);
          var opresult214 = callmethodChecked(opresult212, "++", [1], string199);
          var opresult216 = callmethodChecked(opresult214, "++", [1], var_m);
          var opresult218 = callmethodChecked(opresult216, "++", [1], string196);
          onSelf = true;
          var call219 = callmethodChecked(this, "failBecause", [1], opresult218);
          return call219;
        };
        cases186.push(block194);
        setLineNumber(119);    // compilematchcase
        var matchres186 = matchCase(var_value,cases186,false);
        setModuleName("gUnit");
        return matchres186;
      };
      func185.paramTypes = [];
      func185.paramTypes.push([]);
      func185.paramTypes.push([type_Type, "Desired"]);
      func185.paramCounts = [1, 1];
      obj4.methods["assert()hasType"] = func185;
      func185.definitionLine = 118;
      func185.definitionModule = "gUnit";
      var func220 = function(argcv) {    // method assertType(1)describes(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_T = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for assertType (arg list 1) of assertType(1)describes(1)"));
        var var_value = arguments[curarg];
        curarg++;
        if (argcv[1] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for describes (arg list 2) of assertType(1)describes(1)"));
        // Start argument checking
        curarg = 1;
        setLineNumber(125);    // compilenode identifier
        if (!Grace_isTrue(callmethod(var_Type, "match",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in assertType (arg list 1), which corresponds to parameter T, does not have " + 
                    callmethod(var_Type, "asString", [0])._value + "."));
        curarg++;
        curarg++;
        // End argument checking
        setModuleName("gUnit");
        setLineNumber(126);    // compilenode identifier
        onSelf = true;
        var call221 = callmethodChecked(this, "protocolOf()notCoveredBy", [1, 1], var_value, var_T);
        var var_missingFromT = call221;
        setLineNumber(127);    // compilenode identifier
        var call222 = callmethodChecked(var_missingFromT, "isEmpty", [0]);
        onSelf = true;
        var call223 = callmethodChecked(this, "assert()description", [1, 1], call222, var_missingFromT);
        return call223;
      };
      func220.paramTypes = [];
      func220.paramTypes.push([type_Type, "T"]);
      func220.paramTypes.push([]);
      func220.paramCounts = [1, 1];
      obj4.methods["assertType()describes"] = func220;
      func220.definitionLine = 125;
      func220.definitionModule = "gUnit";
      var func224 = function(argcv) {    // method methodsIn(1)missingFrom(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_DesiredType = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for methodsIn (arg list 1) of methodsIn(1)missingFrom(1)"));
        var var_value = arguments[curarg];
        curarg++;
        if (argcv[1] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for missingFrom (arg list 2) of methodsIn(1)missingFrom(1)"));
        setModuleName("gUnit");
        setLineNumber(131);    // compilenode identifier
        var call225 = callmethodChecked(var_mirror, "reflect", [1], var_value);
        var call226 = callmethodChecked(call225, "methodNames", [0]);
        var var_vMethods = call226;
        setLineNumber(132);    // compilenode identifier
        var call227 = callmethodChecked(var_DesiredType, "methodNames", [0]);
        var var_tMethods = call227;
        setLineNumber(133);    // compilenode identifier
        var opresult230 = callmethodChecked(var_tMethods, "--", [1], var_vMethods);
        var var_missing = opresult230;
        var if231 = GraceDone;
        setLineNumber(134);    // compilenode identifier
        var call233 = callmethodChecked(var_missing, "size", [0]);
        var opresult235 = callmethodChecked(call233, "==", [1], new GraceNum(0));
        if (Grace_isTrue(opresult235)) {
          setLineNumber(135);    // compilenode string
          var string236 = new GraceString("");
          var string239 = new GraceString(" seems to have all the methods of ");
          var call241 = callmethodChecked(var_value, "asDebugString", [0]);
          var string243 = new GraceString("");
          var opresult245 = callmethodChecked(string243, "++", [1], call241);
          var opresult247 = callmethodChecked(opresult245, "++", [1], string239);
          var opresult249 = callmethodChecked(opresult247, "++", [1], var_DesiredType);
          var opresult251 = callmethodChecked(opresult249, "++", [1], string236);
          var call252 = callmethodChecked(var_prelude, "ProgrammingError", [0]);
          var call253 = callmethodChecked(call252, "raise", [1], opresult251);
          if231 = call253;
        } else {
          setLineNumber(137);    // compilenode string
          var string254 = new GraceString("");
          var var_s = string254;
          setLineNumber(138);    // compilenode block
          var block255 = new GraceBlock(this, 138, 1);
          setLineNumber(1);    // compilenode identifier
          block255.real = function(var_each) {
            setLineNumber(138);    // compilenode identifier
            var opresult258 = callmethodChecked(var_s, "++", [1], var_each);
            var_s = opresult258;
            return GraceDone;
          };
          setLineNumber(139);    // compilenode block
          var block259 = new GraceBlock(this, 139, 0);
          block259.real = function() {
            var string260 = new GraceString(", ");
            var opresult263 = callmethodChecked(var_s, "++", [1], string260);
            var_s = opresult263;
            return GraceDone;
          };
          setLineNumber(138);    // compilenode identifier
          var call264 = callmethodChecked(var_missing, "do()separatedBy", [1, 1], block255, block259);
          setLineNumber(140);    // compilenode identifier
          if231 = var_s;
        }
        setLineNumber(134);    // return value
        if (!Grace_isTrue(callmethod(var_String, "match", [1], if231)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method methodsIn(1)missingFrom(1) does not have " + 
                    callmethod(var_String, "asString", [0])._value + "."));
        return if231;
      };
      func224.confidential = true;
      func224.paramCounts = [1, 1];
      obj4.methods["methodsIn()missingFrom"] = func224;
      func224.definitionLine = 130;
      func224.definitionModule = "gUnit";
      var func265 = function(argcv) {    // method protocolOf(1)notCoveredBy(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_value = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for protocolOf (arg list 1) of protocolOf(1)notCoveredBy(1)"));
        var var_Q = arguments[curarg];
        curarg++;
        if (argcv[1] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for notCoveredBy (arg list 2) of protocolOf(1)notCoveredBy(1)"));
        // Start argument checking
        curarg = 1;
        curarg++;
        setLineNumber(143);    // compilenode identifier
        if (!Grace_isTrue(callmethod(var_Type, "match",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in notCoveredBy (arg list 2), which corresponds to parameter Q, does not have " + 
                    callmethod(var_Type, "asString", [0])._value + "."));
        curarg++;
        // End argument checking
        setModuleName("gUnit");
        setLineNumber(144);    // compilenode string
        var string266 = new GraceString("");
        var var_s = string266;
        setLineNumber(145);    // compilenode identifier
        var call267 = callmethodChecked(var_mirror, "reflect", [1], var_value);
        var call268 = callmethodChecked(call267, "methodNames", [0]);
        var call269 = callmethodChecked(var_prelude, "set", [1], call268);
        var var_vMethods = call269;
        setLineNumber(146);    // compilenode identifier
        var call270 = callmethodChecked(var_Q, "methodNames", [0]);
        var call271 = callmethodChecked(var_prelude, "set", [1], call270);
        var var_qMethods = call271;
        setLineNumber(147);    // compilenode block
        var block272 = new GraceBlock(this, 147, 1);
        setLineNumber(1);    // compilenode identifier
        block272.real = function(var_m) {
          setLineNumber(148);    // compilenode string
          var string273 = new GraceString("outer");
          var opresult276 = callmethodChecked(var_m, "\u2260", [1], string273);
          var string278 = new GraceString("()object");
          var call279 = callmethodChecked(var_m, "endsWith", [1], string278);
          var call280 = callmethodChecked(call279, "prefix!", [0]);
          var opresult282 = callmethodChecked(call280, "&&", [1], opresult276);
          return opresult282;
        };
        setLineNumber(147);    // compilenode identifier
        var opresult285 = callmethodChecked(var_vMethods, "--", [1], var_qMethods);
        var call286 = callmethodChecked(opresult285, "filter", [1], block272);
        var call287 = callmethodChecked(call286, "asSet", [0]);
        var var_missing = call287;
        var if288 = GraceDone;
        setLineNumber(149);    // compilenode identifier
        var call289 = callmethodChecked(var_missing, "isEmpty", [0]);
        var call290 = callmethodChecked(call289, "not", [0]);
        if (Grace_isTrue(call290)) {
          setLineNumber(150);    // compilenode string
          var string291 = new GraceString(" is missing ");
          var call293 = callmethodChecked(var_Q, "asDebugString", [0]);
          var string295 = new GraceString("");
          var opresult297 = callmethodChecked(string295, "++", [1], call293);
          var opresult299 = callmethodChecked(opresult297, "++", [1], string291);
          var_s = opresult299;
          setLineNumber(151);    // compilenode block
          var block300 = new GraceBlock(this, 151, 1);
          setLineNumber(1);    // compilenode identifier
          block300.real = function(var_each) {
            setLineNumber(151);    // compilenode identifier
            var opresult303 = callmethodChecked(var_s, "++", [1], var_each);
            var_s = opresult303;
            return GraceDone;
          };
          setLineNumber(152);    // compilenode block
          var block304 = new GraceBlock(this, 152, 0);
          block304.real = function() {
            var string305 = new GraceString(", ");
            var opresult308 = callmethodChecked(var_s, "++", [1], string305);
            var_s = opresult308;
            return GraceDone;
          };
          setLineNumber(151);    // compilenode identifier
          var call309 = callmethodChecked(var_missing, "do()separatedBy", [1, 1], block300, block304);
          if288 = call309;
        }
        setLineNumber(154);    // compilenode identifier
        return var_s;
      };
      func265.paramTypes = [];
      func265.paramTypes.push([]);
      func265.paramTypes.push([type_Type, "Q"]);
      func265.confidential = true;
      func265.paramCounts = [1, 1];
      obj4.methods["protocolOf()notCoveredBy"] = func265;
      func265.definitionLine = 143;
      func265.definitionModule = "gUnit";
      var func310 = function(argcv) {    // method deny(1)hasType(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_value = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for deny (arg list 1) of deny(1)hasType(1)"));
        var var_Undesired = arguments[curarg];
        curarg++;
        if (argcv[1] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for hasType (arg list 2) of deny(1)hasType(1)"));
        // Start argument checking
        curarg = 1;
        curarg++;
        setLineNumber(156);    // compilenode identifier
        if (!Grace_isTrue(callmethod(var_Type, "match",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in hasType (arg list 2), which corresponds to parameter Undesired, does not have " + 
                    callmethod(var_Type, "asString", [0])._value + "."));
        curarg++;
        // End argument checking
        setModuleName("gUnit");
        setLineNumber(157);    // compilenode identifier
        var cases311 = [];
        setLineNumber(158);    // compilenode block
        var block312 = new GraceBlock(this, 158, 1);
        setLineNumber(0);    // compilenode string
        var string313 = new GraceString("__10");
        var call314 = callmethodChecked(var_prelude, "VariablePattern", [0]);
        var call315 = callmethodChecked(call314, "new", [1], string313);
        var call316 = callmethodChecked(var_prelude, "AndPattern", [0]);
        var call317 = callmethodChecked(call316, "new", [2], call315, var_Undesired);
        block312.pattern = call317;
        setLineNumber(158);    // compilenode identifier
        block312.paramTypes = [var_Undesired];
        block312.real = function(var___95____95__10) {
          setLineNumber(159);    // compilenode string
          var string318 = new GraceString("");
          var string321 = new GraceString(" has type ");
          var call323 = callmethodChecked(var_value, "asDebugString", [0]);
          var string325 = new GraceString("");
          var opresult327 = callmethodChecked(string325, "++", [1], call323);
          var opresult329 = callmethodChecked(opresult327, "++", [1], string321);
          var opresult331 = callmethodChecked(opresult329, "++", [1], var_Undesired);
          var opresult333 = callmethodChecked(opresult331, "++", [1], string318);
          onSelf = true;
          var call334 = callmethodChecked(this, "failBecause", [1], opresult333);
          return call334;
        };
        cases311.push(block312);
        setLineNumber(161);    // compilenode block
        var block335 = new GraceBlock(this, 161, 1);
        setLineNumber(1);    // compilenode identifier
        block335.real = function(var___95____95__11) {
          setLineNumber(162);    // compilenode call
          onSelf = true;
          var call336 = callmethodChecked(this, "countOneAssertion", [0]);
          return call336;
        };
        cases311.push(block335);
        setLineNumber(157);    // compilematchcase
        var matchres311 = matchCase(var_value,cases311,false);
        setModuleName("gUnit");
        return matchres311;
      };
      func310.paramTypes = [];
      func310.paramTypes.push([]);
      func310.paramTypes.push([type_Type, "Undesired"]);
      func310.paramCounts = [1, 1];
      obj4.methods["deny()hasType"] = func310;
      func310.definitionLine = 156;
      func310.definitionModule = "gUnit";
      setLineNumber(63);    // compilenode string
      var string337 = new GraceString("AssertionFailure");
      var call338 = callmethodChecked(var_prelude, "Exception", [0]);
      var call339 = callmethodChecked(call338, "refine", [1], string337);
      obj4.data["AssertionFailure"] = call339;
      var reader_gUnit_AssertionFailure340 = function() {
        return this.data["AssertionFailure"];
      };
      reader_gUnit_AssertionFailure340.def = true;
      obj4.methods["AssertionFailure"] = reader_gUnit_AssertionFailure340;
      superDepth = origSuperDepth;
    };
    obj_init_4.apply(obj4, []);
    return obj4;
  };
  func3.paramCounts = [0];
  this.methods["assertion"] = func3;
  func3.definitionLine = 62;
  func3.definitionModule = "gUnit";
    var func341 = function(argcv) {    // method assertion()object
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      // Start argument processing
      curarg = 1;
      // End argument processing
      setModuleName("gUnit");
      var returnTarget = invocationCount;
      invocationCount++;
      var obj342 = Grace_allocObject(GraceObject, "assertion");
      obj342.definitionModule = "gUnit";
      obj342.definitionLine = 62;
      var inho342 = inheritingObject;
      while (inho342.superobj) inho342 = inho342.superobj;
      inho342.superobj = obj342;
      obj342.data = inheritingObject.data;
      if (inheritingObject.hasOwnProperty('_value'))
        obj342._value = inheritingObject._value;
      obj342.outer = this;
      var reader_gUnit_outer343 = function() {
        return this.outer;
      };
      obj342.methods["outer"] = reader_gUnit_outer343;
      var obj_init_342 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj342;
        var func344 = function(argcv) {    // method countOneAssertion
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for countOneAssertion"));
          setModuleName("gUnit");
          setLineNumber(64);    // compilenode call
          var call345 = callmethodChecked(var_prelude, "abstract", [0]);
          return call345;
        };
        func344.paramCounts = [0];
        obj342.methods["countOneAssertion"] = func344;
        func344.definitionLine = 64;
        func344.definitionModule = "gUnit";
        var func346 = function(argcv) {    // method failBecause(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_str = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for failBecause(1)"));
          setModuleName("gUnit");
          setLineNumber(67);    // compilenode identifier
          onSelf = true;
          var call347 = callmethodChecked(this, "assert()description", [1, 1], GraceFalse, var_str);
          return call347;
        };
        func346.paramCounts = [1];
        obj342.methods["failBecause"] = func346;
        func346.definitionLine = 66;
        func346.definitionModule = "gUnit";
        var func348 = function(argcv) {    // method assert(1)description(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_bb = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for assert (arg list 1) of assert(1)description(1)"));
          var var_str = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for description (arg list 2) of assert(1)description(1)"));
          // Start argument checking
          curarg = 1;
          setLineNumber(69);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Boolean, "match",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in assert (arg list 1), which corresponds to parameter bb, does not have " + 
                      callmethod(var_Boolean, "asString", [0])._value + "."));
          curarg++;
          curarg++;
          // End argument checking
          setModuleName("gUnit");
          setLineNumber(70);    // compilenode call
          onSelf = true;
          var call349 = callmethodChecked(this, "countOneAssertion", [0]);
          var if350 = GraceDone;
          setLineNumber(71);    // compilenode identifier
          var call351 = callmethodChecked(var_bb, "prefix!", [0]);
          if (Grace_isTrue(call351)) {
            onSelf = true;
            var call352 = callmethodChecked(this, "AssertionFailure", [0]);
            var call353 = callmethodChecked(call352, "raise", [1], var_str);
            if350 = call353;
          }
          return if350;
        };
        func348.paramTypes = [];
        func348.paramTypes.push([type_Boolean, "bb"]);
        func348.paramTypes.push([]);
        func348.paramCounts = [1, 1];
        obj342.methods["assert()description"] = func348;
        func348.definitionLine = 69;
        func348.definitionModule = "gUnit";
        var func354 = function(argcv) {    // method deny(1)description(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_bb = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for deny (arg list 1) of deny(1)description(1)"));
          var var_str = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for description (arg list 2) of deny(1)description(1)"));
          // Start argument checking
          curarg = 1;
          setLineNumber(73);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Boolean, "match",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in deny (arg list 1), which corresponds to parameter bb, does not have " + 
                      callmethod(var_Boolean, "asString", [0])._value + "."));
          curarg++;
          curarg++;
          // End argument checking
          setModuleName("gUnit");
          setLineNumber(74);    // compilenode identifier
          var call355 = callmethodChecked(var_bb, "prefix!", [0]);
          onSelf = true;
          var call356 = callmethodChecked(this, "assert()description", [1, 1], call355, var_str);
          return call356;
        };
        func354.paramTypes = [];
        func354.paramTypes.push([type_Boolean, "bb"]);
        func354.paramTypes.push([]);
        func354.paramCounts = [1, 1];
        obj342.methods["deny()description"] = func354;
        func354.definitionLine = 73;
        func354.definitionModule = "gUnit";
        var func357 = function(argcv) {    // method assert(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_bb = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for assert(1)"));
          // Start argument checking
          curarg = 1;
          setLineNumber(76);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Boolean, "match",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in assert (arg list 1), which corresponds to parameter bb, does not have " + 
                      callmethod(var_Boolean, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("gUnit");
          setLineNumber(77);    // compilenode string
          var string358 = new GraceString("Assertion failed!");
          onSelf = true;
          var call359 = callmethodChecked(this, "assert()description", [1, 1], var_bb, string358);
          return call359;
        };
        func357.paramTypes = [];
        func357.paramTypes.push([type_Boolean, "bb"]);
        func357.paramCounts = [1];
        obj342.methods["assert"] = func357;
        func357.definitionLine = 76;
        func357.definitionModule = "gUnit";
        var func360 = function(argcv) {    // method deny(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_bb = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for deny(1)"));
          // Start argument checking
          curarg = 1;
          setLineNumber(79);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Boolean, "match",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in deny (arg list 1), which corresponds to parameter bb, does not have " + 
                      callmethod(var_Boolean, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("gUnit");
          setLineNumber(80);    // compilenode identifier
          var call361 = callmethodChecked(var_bb, "prefix!", [0]);
          onSelf = true;
          var call362 = callmethodChecked(this, "assert", [1], call361);
          return call362;
        };
        func360.paramTypes = [];
        func360.paramTypes.push([type_Boolean, "bb"]);
        func360.paramCounts = [1];
        obj342.methods["deny"] = func360;
        func360.definitionLine = 79;
        func360.definitionModule = "gUnit";
        var func363 = function(argcv) {    // method assert(1)shouldBe(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_s1 = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for assert (arg list 1) of assert(1)shouldBe(1)"));
          var var_s2 = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for shouldBe (arg list 2) of assert(1)shouldBe(1)"));
          // Start argument checking
          curarg = 1;
          setLineNumber(82);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Object, "match",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in assert (arg list 1), which corresponds to parameter s1, does not have " + 
                      callmethod(var_Object, "asString", [0])._value + "."));
          curarg++;
          if (!Grace_isTrue(callmethod(var_Object, "match",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in shouldBe (arg list 2), which corresponds to parameter s2, does not have " + 
                      callmethod(var_Object, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("gUnit");
          setLineNumber(83);    // compilenode identifier
          var opresult366 = callmethodChecked(var_s1, "==", [1], var_s2);
          var string367 = new GraceString("\u203a");
          var call369 = callmethodChecked(var_s2, "asDebugString", [0]);
          var string371 = new GraceString("\u203a should be \u2039");
          var call373 = callmethodChecked(var_s1, "asDebugString", [0]);
          var string375 = new GraceString("\u2039");
          var opresult377 = callmethodChecked(string375, "++", [1], call373);
          var opresult379 = callmethodChecked(opresult377, "++", [1], string371);
          var opresult381 = callmethodChecked(opresult379, "++", [1], call369);
          var opresult383 = callmethodChecked(opresult381, "++", [1], string367);
          onSelf = true;
          var call384 = callmethodChecked(this, "assert()description", [1, 1], opresult366, opresult383);
          return call384;
        };
        func363.paramTypes = [];
        func363.paramTypes.push([type_Object, "s1"]);
        func363.paramTypes.push([type_Object, "s2"]);
        func363.paramCounts = [1, 1];
        obj342.methods["assert()shouldBe"] = func363;
        func363.definitionLine = 82;
        func363.definitionModule = "gUnit";
        var func385 = function(argcv) {    // method assert(1)shouldntBe(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_s1 = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for assert (arg list 1) of assert(1)shouldntBe(1)"));
          var var_s2 = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for shouldntBe (arg list 2) of assert(1)shouldntBe(1)"));
          // Start argument checking
          curarg = 1;
          setLineNumber(85);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Object, "match",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in assert (arg list 1), which corresponds to parameter s1, does not have " + 
                      callmethod(var_Object, "asString", [0])._value + "."));
          curarg++;
          if (!Grace_isTrue(callmethod(var_Object, "match",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in shouldntBe (arg list 2), which corresponds to parameter s2, does not have " + 
                      callmethod(var_Object, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("gUnit");
          setLineNumber(86);    // compilenode identifier
          var opresult388 = callmethodChecked(var_s1, "==", [1], var_s2);
          var call389 = callmethodChecked(opresult388, "not", [0]);
          var string390 = new GraceString("\u203a");
          var call392 = callmethodChecked(var_s2, "asDebugString", [0]);
          var string394 = new GraceString("\u203a should not be \u2039");
          var call396 = callmethodChecked(var_s1, "asDebugString", [0]);
          var string398 = new GraceString("\u2039");
          var opresult400 = callmethodChecked(string398, "++", [1], call396);
          var opresult402 = callmethodChecked(opresult400, "++", [1], string394);
          var opresult404 = callmethodChecked(opresult402, "++", [1], call392);
          var opresult406 = callmethodChecked(opresult404, "++", [1], string390);
          onSelf = true;
          var call407 = callmethodChecked(this, "assert()description", [1, 1], call389, opresult406);
          return call407;
        };
        func385.paramTypes = [];
        func385.paramTypes.push([type_Object, "s1"]);
        func385.paramTypes.push([type_Object, "s2"]);
        func385.paramCounts = [1, 1];
        obj342.methods["assert()shouldntBe"] = func385;
        func385.definitionLine = 85;
        func385.definitionModule = "gUnit";
        var func408 = function(argcv) {    // method deny(1)shouldBe(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_s1 = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for deny (arg list 1) of deny(1)shouldBe(1)"));
          var var_s2 = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for shouldBe (arg list 2) of deny(1)shouldBe(1)"));
          // Start argument checking
          curarg = 1;
          setLineNumber(88);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Object, "match",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in deny (arg list 1), which corresponds to parameter s1, does not have " + 
                      callmethod(var_Object, "asString", [0])._value + "."));
          curarg++;
          if (!Grace_isTrue(callmethod(var_Object, "match",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in shouldBe (arg list 2), which corresponds to parameter s2, does not have " + 
                      callmethod(var_Object, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("gUnit");
          setLineNumber(89);    // compilenode identifier
          var opresult411 = callmethodChecked(var_s1, "==", [1], var_s2);
          var call412 = callmethodChecked(opresult411, "not", [0]);
          var string413 = new GraceString("\u203a");
          var call415 = callmethodChecked(var_s2, "asDebugString", [0]);
          var string417 = new GraceString("\u203a should not be \u2039");
          var call419 = callmethodChecked(var_s1, "asDebugString", [0]);
          var string421 = new GraceString("\u2039");
          var opresult423 = callmethodChecked(string421, "++", [1], call419);
          var opresult425 = callmethodChecked(opresult423, "++", [1], string417);
          var opresult427 = callmethodChecked(opresult425, "++", [1], call415);
          var opresult429 = callmethodChecked(opresult427, "++", [1], string413);
          onSelf = true;
          var call430 = callmethodChecked(this, "assert()description", [1, 1], call412, opresult429);
          return call430;
        };
        func408.paramTypes = [];
        func408.paramTypes.push([type_Object, "s1"]);
        func408.paramTypes.push([type_Object, "s2"]);
        func408.paramCounts = [1, 1];
        obj342.methods["deny()shouldBe"] = func408;
        func408.definitionLine = 88;
        func408.definitionModule = "gUnit";
        var func431 = function(argcv) {    // method assert(1)shouldEqual(1)within(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_n1 = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for assert (arg list 1) of assert(1)shouldEqual(1)within(1)"));
          var var_n2 = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for shouldEqual (arg list 2) of assert(1)shouldEqual(1)within(1)"));
          var var_epsilon = arguments[curarg];
          curarg++;
          if (argcv[2] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for within (arg list 3) of assert(1)shouldEqual(1)within(1)"));
          // Start argument checking
          curarg = 1;
          setLineNumber(91);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Number, "match",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in assert (arg list 1), which corresponds to parameter n1, does not have " + 
                      callmethod(var_Number, "asString", [0])._value + "."));
          curarg++;
          if (!Grace_isTrue(callmethod(var_Number, "match",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in shouldEqual (arg list 2), which corresponds to parameter n2, does not have " + 
                      callmethod(var_Number, "asString", [0])._value + "."));
          curarg++;
          if (!Grace_isTrue(callmethod(var_Number, "match",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in within (arg list 3), which corresponds to parameter epsilon, does not have " + 
                      callmethod(var_Number, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("gUnit");
          setLineNumber(92);    // compilenode identifier
          var diff435 = callmethodChecked(var_n1, "-", [1], var_n2);
          var call436 = callmethodChecked(var_math, "abs", [1], diff435);
          var opresult438 = callmethodChecked(call436, "\u2264", [1], var_epsilon);
          var string439 = new GraceString("\u203a");
          var call441 = callmethodChecked(var_n2, "asDebugString", [0]);
          var string443 = new GraceString("\u203a should be approximately \u2039");
          var call445 = callmethodChecked(var_n1, "asDebugString", [0]);
          var string447 = new GraceString("\u2039");
          var opresult449 = callmethodChecked(string447, "++", [1], call445);
          var opresult451 = callmethodChecked(opresult449, "++", [1], string443);
          var opresult453 = callmethodChecked(opresult451, "++", [1], call441);
          var opresult455 = callmethodChecked(opresult453, "++", [1], string439);
          onSelf = true;
          var call456 = callmethodChecked(this, "assert()description", [1, 1], opresult438, opresult455);
          return call456;
        };
        func431.paramTypes = [];
        func431.paramTypes.push([type_Number, "n1"]);
        func431.paramTypes.push([type_Number, "n2"]);
        func431.paramTypes.push([type_Number, "epsilon"]);
        func431.paramCounts = [1, 1, 1];
        obj342.methods["assert()shouldEqual()within"] = func431;
        func431.definitionLine = 91;
        func431.definitionModule = "gUnit";
        var func457 = function(argcv) {    // method assert(1)shouldRaise(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_block0 = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for assert (arg list 1) of assert(1)shouldRaise(1)"));
          var var_desiredException = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for shouldRaise (arg list 2) of assert(1)shouldRaise(1)"));
          setModuleName("gUnit");
          setLineNumber(95);    // compilenode vardec
          var var_completedNormally;
          setLineNumber(96);    // compilenode call
          onSelf = true;
          var call458 = callmethodChecked(this, "countOneAssertion", [0]);
          setLineNumber(97);    // compilenode block
          var block460 = new GraceBlock(this, 97, 0);
          block460.real = function() {
            setLineNumber(98);    // compilenode identifier
            var call461 = callmethodChecked(var_block0, "apply", [0]);
            setLineNumber(99);    // compilenode identifier
            var_completedNormally = GraceTrue;
            return GraceDone;
          };
          var cases459 = [];
          setLineNumber(100);    // compilenode block
          var block462 = new GraceBlock(this, 100, 1);
          setLineNumber(0);    // compilenode string
          var string463 = new GraceString("raisedException");
          var call464 = callmethodChecked(var_prelude, "VariablePattern", [0]);
          var call465 = callmethodChecked(call464, "new", [1], string463);
          var call466 = callmethodChecked(var_prelude, "AndPattern", [0]);
          var call467 = callmethodChecked(call466, "new", [2], call465, var_desiredException);
          block462.pattern = call467;
          setLineNumber(100);    // compilenode identifier
          block462.paramTypes = [var_desiredException];
          block462.real = function(var_raisedException) {
            setLineNumber(101);    // compilenode identifier
            var_completedNormally = GraceFalse;
            return GraceDone;
          };
          cases459.push(block462);
          setLineNumber(102);    // compilenode block
          var block468 = new GraceBlock(this, 102, 1);
          setLineNumber(1);    // compilenode identifier
          block468.real = function(var_raisedException) {
            setLineNumber(104);    // compilenode string
            var string469 = new GraceString("");
            var string472 = new GraceString("\" instead of ");
            var call474 = callmethodChecked(var_raisedException, "message", [0]);
            var string476 = new GraceString(": \"");
            var opresult478 = callmethodChecked(string476, "++", [1], call474);
            var opresult480 = callmethodChecked(opresult478, "++", [1], string472);
            var opresult482 = callmethodChecked(opresult480, "++", [1], var_desiredException);
            var opresult484 = callmethodChecked(opresult482, "++", [1], string469);
            setLineNumber(103);    // compilenode string
            var string486 = new GraceString("");
            var call488 = callmethodChecked(var_raisedException, "exception", [0]);
            var string490 = new GraceString("code raised exception ");
            var opresult492 = callmethodChecked(string490, "++", [1], call488);
            var opresult494 = callmethodChecked(opresult492, "++", [1], string486);
            var opresult496 = callmethodChecked(opresult494, "++", [1], opresult484);
            onSelf = true;
            var call497 = callmethodChecked(this, "failBecause", [1], opresult496);
            return call497;
          };
          cases459.push(block468);
          setLineNumber(97);    // compiletrycatch
          var catchres459 = tryCatch(block460,cases459,false);
          setModuleName("gUnit");
          var if498 = GraceDone;
          setLineNumber(106);    // compilenode identifier
          if (Grace_isTrue(var_completedNormally)) {
            var string499 = new GraceString("code did not raise an exception");
            onSelf = true;
            var call500 = callmethodChecked(this, "failBecause", [1], string499);
            if498 = call500;
          }
          return if498;
        };
        func457.paramCounts = [1, 1];
        obj342.methods["assert()shouldRaise"] = func457;
        func457.definitionLine = 94;
        func457.definitionModule = "gUnit";
        var func501 = function(argcv) {    // method assert(1)shouldntRaise(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_block0 = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for assert (arg list 1) of assert(1)shouldntRaise(1)"));
          var var_undesiredException = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for shouldntRaise (arg list 2) of assert(1)shouldntRaise(1)"));
          setModuleName("gUnit");
          setLineNumber(109);    // compilenode call
          onSelf = true;
          var call502 = callmethodChecked(this, "countOneAssertion", [0]);
          setLineNumber(110);    // compilenode block
          var block504 = new GraceBlock(this, 110, 0);
          block504.real = function() {
            setLineNumber(111);    // compilenode identifier
            var call505 = callmethodChecked(var_block0, "apply", [0]);
            return call505;
          };
          var cases503 = [];
          setLineNumber(112);    // compilenode block
          var block506 = new GraceBlock(this, 112, 1);
          setLineNumber(0);    // compilenode string
          var string507 = new GraceString("raisedException");
          var call508 = callmethodChecked(var_prelude, "VariablePattern", [0]);
          var call509 = callmethodChecked(call508, "new", [1], string507);
          var call510 = callmethodChecked(var_prelude, "AndPattern", [0]);
          var call511 = callmethodChecked(call510, "new", [2], call509, var_undesiredException);
          block506.pattern = call511;
          setLineNumber(112);    // compilenode identifier
          block506.paramTypes = [var_undesiredException];
          block506.real = function(var_raisedException) {
            setLineNumber(113);    // compilenode string
            var string512 = new GraceString("");
            var call514 = callmethodChecked(var_raisedException, "exception", [0]);
            var string516 = new GraceString("code raised exception ");
            var opresult518 = callmethodChecked(string516, "++", [1], call514);
            var opresult520 = callmethodChecked(opresult518, "++", [1], string512);
            onSelf = true;
            var call521 = callmethodChecked(this, "failBecause", [1], opresult520);
            return call521;
          };
          cases503.push(block506);
          setLineNumber(114);    // compilenode block
          var block522 = new GraceBlock(this, 114, 1);
          setLineNumber(1);    // compilenode identifier
          block522.real = function(var___95____95__7) {
            return GraceDone;
          };
          cases503.push(block522);
          setLineNumber(110);    // compiletrycatch
          var catchres503 = tryCatch(block504,cases503,false);
          setModuleName("gUnit");
          return catchres503;
        };
        func501.paramCounts = [1, 1];
        obj342.methods["assert()shouldntRaise"] = func501;
        func501.definitionLine = 108;
        func501.definitionModule = "gUnit";
        var func523 = function(argcv) {    // method assert(1)hasType(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_value = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for assert (arg list 1) of assert(1)hasType(1)"));
          var var_Desired = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for hasType (arg list 2) of assert(1)hasType(1)"));
          // Start argument checking
          curarg = 1;
          curarg++;
          setLineNumber(118);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Type, "match",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in hasType (arg list 2), which corresponds to parameter Desired, does not have " + 
                      callmethod(var_Type, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("gUnit");
          setLineNumber(119);    // compilenode identifier
          var cases524 = [];
          setLineNumber(120);    // compilenode block
          var block525 = new GraceBlock(this, 120, 1);
          setLineNumber(0);    // compilenode string
          var string526 = new GraceString("__8");
          var call527 = callmethodChecked(var_prelude, "VariablePattern", [0]);
          var call528 = callmethodChecked(call527, "new", [1], string526);
          var call529 = callmethodChecked(var_prelude, "AndPattern", [0]);
          var call530 = callmethodChecked(call529, "new", [2], call528, var_Desired);
          block525.pattern = call530;
          setLineNumber(120);    // compilenode identifier
          block525.paramTypes = [var_Desired];
          block525.real = function(var___95____95__8) {
            onSelf = true;
            var call531 = callmethodChecked(this, "countOneAssertion", [0]);
            return call531;
          };
          cases524.push(block525);
          setLineNumber(121);    // compilenode block
          var block532 = new GraceBlock(this, 121, 1);
          setLineNumber(1);    // compilenode identifier
          block532.real = function(var___95____95__9) {
            setLineNumber(122);    // compilenode identifier
            onSelf = true;
            var call533 = callmethodChecked(this, "methodsIn()missingFrom", [1, 1], var_Desired, var_value);
            var var_m = call533;
            setLineNumber(123);    // compilenode string
            var string534 = new GraceString(".");
            var string537 = new GraceString("; it's missing methods ");
            var string540 = new GraceString(" does not have type ");
            var call542 = callmethodChecked(var_value, "asDebugString", [0]);
            var string544 = new GraceString("");
            var opresult546 = callmethodChecked(string544, "++", [1], call542);
            var opresult548 = callmethodChecked(opresult546, "++", [1], string540);
            var opresult550 = callmethodChecked(opresult548, "++", [1], var_Desired);
            var opresult552 = callmethodChecked(opresult550, "++", [1], string537);
            var opresult554 = callmethodChecked(opresult552, "++", [1], var_m);
            var opresult556 = callmethodChecked(opresult554, "++", [1], string534);
            onSelf = true;
            var call557 = callmethodChecked(this, "failBecause", [1], opresult556);
            return call557;
          };
          cases524.push(block532);
          setLineNumber(119);    // compilematchcase
          var matchres524 = matchCase(var_value,cases524,false);
          setModuleName("gUnit");
          return matchres524;
        };
        func523.paramTypes = [];
        func523.paramTypes.push([]);
        func523.paramTypes.push([type_Type, "Desired"]);
        func523.paramCounts = [1, 1];
        obj342.methods["assert()hasType"] = func523;
        func523.definitionLine = 118;
        func523.definitionModule = "gUnit";
        var func558 = function(argcv) {    // method assertType(1)describes(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_T = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for assertType (arg list 1) of assertType(1)describes(1)"));
          var var_value = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for describes (arg list 2) of assertType(1)describes(1)"));
          // Start argument checking
          curarg = 1;
          setLineNumber(125);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Type, "match",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in assertType (arg list 1), which corresponds to parameter T, does not have " + 
                      callmethod(var_Type, "asString", [0])._value + "."));
          curarg++;
          curarg++;
          // End argument checking
          setModuleName("gUnit");
          setLineNumber(126);    // compilenode identifier
          onSelf = true;
          var call559 = callmethodChecked(this, "protocolOf()notCoveredBy", [1, 1], var_value, var_T);
          var var_missingFromT = call559;
          setLineNumber(127);    // compilenode identifier
          var call560 = callmethodChecked(var_missingFromT, "isEmpty", [0]);
          onSelf = true;
          var call561 = callmethodChecked(this, "assert()description", [1, 1], call560, var_missingFromT);
          return call561;
        };
        func558.paramTypes = [];
        func558.paramTypes.push([type_Type, "T"]);
        func558.paramTypes.push([]);
        func558.paramCounts = [1, 1];
        obj342.methods["assertType()describes"] = func558;
        func558.definitionLine = 125;
        func558.definitionModule = "gUnit";
        var func562 = function(argcv) {    // method methodsIn(1)missingFrom(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_DesiredType = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for methodsIn (arg list 1) of methodsIn(1)missingFrom(1)"));
          var var_value = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for missingFrom (arg list 2) of methodsIn(1)missingFrom(1)"));
          setModuleName("gUnit");
          setLineNumber(131);    // compilenode identifier
          var call563 = callmethodChecked(var_mirror, "reflect", [1], var_value);
          var call564 = callmethodChecked(call563, "methodNames", [0]);
          var var_vMethods = call564;
          setLineNumber(132);    // compilenode identifier
          var call565 = callmethodChecked(var_DesiredType, "methodNames", [0]);
          var var_tMethods = call565;
          setLineNumber(133);    // compilenode identifier
          var opresult568 = callmethodChecked(var_tMethods, "--", [1], var_vMethods);
          var var_missing = opresult568;
          var if569 = GraceDone;
          setLineNumber(134);    // compilenode identifier
          var call571 = callmethodChecked(var_missing, "size", [0]);
          var opresult573 = callmethodChecked(call571, "==", [1], new GraceNum(0));
          if (Grace_isTrue(opresult573)) {
            setLineNumber(135);    // compilenode string
            var string574 = new GraceString("");
            var string577 = new GraceString(" seems to have all the methods of ");
            var call579 = callmethodChecked(var_value, "asDebugString", [0]);
            var string581 = new GraceString("");
            var opresult583 = callmethodChecked(string581, "++", [1], call579);
            var opresult585 = callmethodChecked(opresult583, "++", [1], string577);
            var opresult587 = callmethodChecked(opresult585, "++", [1], var_DesiredType);
            var opresult589 = callmethodChecked(opresult587, "++", [1], string574);
            var call590 = callmethodChecked(var_prelude, "ProgrammingError", [0]);
            var call591 = callmethodChecked(call590, "raise", [1], opresult589);
            if569 = call591;
          } else {
            setLineNumber(137);    // compilenode string
            var string592 = new GraceString("");
            var var_s = string592;
            setLineNumber(138);    // compilenode block
            var block593 = new GraceBlock(this, 138, 1);
            setLineNumber(1);    // compilenode identifier
            block593.real = function(var_each) {
              setLineNumber(138);    // compilenode identifier
              var opresult596 = callmethodChecked(var_s, "++", [1], var_each);
              var_s = opresult596;
              return GraceDone;
            };
            setLineNumber(139);    // compilenode block
            var block597 = new GraceBlock(this, 139, 0);
            block597.real = function() {
              var string598 = new GraceString(", ");
              var opresult601 = callmethodChecked(var_s, "++", [1], string598);
              var_s = opresult601;
              return GraceDone;
            };
            setLineNumber(138);    // compilenode identifier
            var call602 = callmethodChecked(var_missing, "do()separatedBy", [1, 1], block593, block597);
            setLineNumber(140);    // compilenode identifier
            if569 = var_s;
          }
          setLineNumber(134);    // return value
          if (!Grace_isTrue(callmethod(var_String, "match", [1], if569)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method methodsIn(1)missingFrom(1) does not have " + 
                      callmethod(var_String, "asString", [0])._value + "."));
          return if569;
        };
        func562.confidential = true;
        func562.paramCounts = [1, 1];
        obj342.methods["methodsIn()missingFrom"] = func562;
        func562.definitionLine = 130;
        func562.definitionModule = "gUnit";
        var func603 = function(argcv) {    // method protocolOf(1)notCoveredBy(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_value = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for protocolOf (arg list 1) of protocolOf(1)notCoveredBy(1)"));
          var var_Q = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for notCoveredBy (arg list 2) of protocolOf(1)notCoveredBy(1)"));
          // Start argument checking
          curarg = 1;
          curarg++;
          setLineNumber(143);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Type, "match",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in notCoveredBy (arg list 2), which corresponds to parameter Q, does not have " + 
                      callmethod(var_Type, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("gUnit");
          setLineNumber(144);    // compilenode string
          var string604 = new GraceString("");
          var var_s = string604;
          setLineNumber(145);    // compilenode identifier
          var call605 = callmethodChecked(var_mirror, "reflect", [1], var_value);
          var call606 = callmethodChecked(call605, "methodNames", [0]);
          var call607 = callmethodChecked(var_prelude, "set", [1], call606);
          var var_vMethods = call607;
          setLineNumber(146);    // compilenode identifier
          var call608 = callmethodChecked(var_Q, "methodNames", [0]);
          var call609 = callmethodChecked(var_prelude, "set", [1], call608);
          var var_qMethods = call609;
          setLineNumber(147);    // compilenode block
          var block610 = new GraceBlock(this, 147, 1);
          setLineNumber(1);    // compilenode identifier
          block610.real = function(var_m) {
            setLineNumber(148);    // compilenode string
            var string611 = new GraceString("outer");
            var opresult614 = callmethodChecked(var_m, "\u2260", [1], string611);
            var string616 = new GraceString("()object");
            var call617 = callmethodChecked(var_m, "endsWith", [1], string616);
            var call618 = callmethodChecked(call617, "prefix!", [0]);
            var opresult620 = callmethodChecked(call618, "&&", [1], opresult614);
            return opresult620;
          };
          setLineNumber(147);    // compilenode identifier
          var opresult623 = callmethodChecked(var_vMethods, "--", [1], var_qMethods);
          var call624 = callmethodChecked(opresult623, "filter", [1], block610);
          var call625 = callmethodChecked(call624, "asSet", [0]);
          var var_missing = call625;
          var if626 = GraceDone;
          setLineNumber(149);    // compilenode identifier
          var call627 = callmethodChecked(var_missing, "isEmpty", [0]);
          var call628 = callmethodChecked(call627, "not", [0]);
          if (Grace_isTrue(call628)) {
            setLineNumber(150);    // compilenode string
            var string629 = new GraceString(" is missing ");
            var call631 = callmethodChecked(var_Q, "asDebugString", [0]);
            var string633 = new GraceString("");
            var opresult635 = callmethodChecked(string633, "++", [1], call631);
            var opresult637 = callmethodChecked(opresult635, "++", [1], string629);
            var_s = opresult637;
            setLineNumber(151);    // compilenode block
            var block638 = new GraceBlock(this, 151, 1);
            setLineNumber(1);    // compilenode identifier
            block638.real = function(var_each) {
              setLineNumber(151);    // compilenode identifier
              var opresult641 = callmethodChecked(var_s, "++", [1], var_each);
              var_s = opresult641;
              return GraceDone;
            };
            setLineNumber(152);    // compilenode block
            var block642 = new GraceBlock(this, 152, 0);
            block642.real = function() {
              var string643 = new GraceString(", ");
              var opresult646 = callmethodChecked(var_s, "++", [1], string643);
              var_s = opresult646;
              return GraceDone;
            };
            setLineNumber(151);    // compilenode identifier
            var call647 = callmethodChecked(var_missing, "do()separatedBy", [1, 1], block638, block642);
            if626 = call647;
          }
          setLineNumber(154);    // compilenode identifier
          return var_s;
        };
        func603.paramTypes = [];
        func603.paramTypes.push([]);
        func603.paramTypes.push([type_Type, "Q"]);
        func603.confidential = true;
        func603.paramCounts = [1, 1];
        obj342.methods["protocolOf()notCoveredBy"] = func603;
        func603.definitionLine = 143;
        func603.definitionModule = "gUnit";
        var func648 = function(argcv) {    // method deny(1)hasType(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_value = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for deny (arg list 1) of deny(1)hasType(1)"));
          var var_Undesired = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for hasType (arg list 2) of deny(1)hasType(1)"));
          // Start argument checking
          curarg = 1;
          curarg++;
          setLineNumber(156);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Type, "match",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in hasType (arg list 2), which corresponds to parameter Undesired, does not have " + 
                      callmethod(var_Type, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("gUnit");
          setLineNumber(157);    // compilenode identifier
          var cases649 = [];
          setLineNumber(158);    // compilenode block
          var block650 = new GraceBlock(this, 158, 1);
          setLineNumber(0);    // compilenode string
          var string651 = new GraceString("__10");
          var call652 = callmethodChecked(var_prelude, "VariablePattern", [0]);
          var call653 = callmethodChecked(call652, "new", [1], string651);
          var call654 = callmethodChecked(var_prelude, "AndPattern", [0]);
          var call655 = callmethodChecked(call654, "new", [2], call653, var_Undesired);
          block650.pattern = call655;
          setLineNumber(158);    // compilenode identifier
          block650.paramTypes = [var_Undesired];
          block650.real = function(var___95____95__10) {
            setLineNumber(159);    // compilenode string
            var string656 = new GraceString("");
            var string659 = new GraceString(" has type ");
            var call661 = callmethodChecked(var_value, "asDebugString", [0]);
            var string663 = new GraceString("");
            var opresult665 = callmethodChecked(string663, "++", [1], call661);
            var opresult667 = callmethodChecked(opresult665, "++", [1], string659);
            var opresult669 = callmethodChecked(opresult667, "++", [1], var_Undesired);
            var opresult671 = callmethodChecked(opresult669, "++", [1], string656);
            onSelf = true;
            var call672 = callmethodChecked(this, "failBecause", [1], opresult671);
            return call672;
          };
          cases649.push(block650);
          setLineNumber(161);    // compilenode block
          var block673 = new GraceBlock(this, 161, 1);
          setLineNumber(1);    // compilenode identifier
          block673.real = function(var___95____95__11) {
            setLineNumber(162);    // compilenode call
            onSelf = true;
            var call674 = callmethodChecked(this, "countOneAssertion", [0]);
            return call674;
          };
          cases649.push(block673);
          setLineNumber(157);    // compilematchcase
          var matchres649 = matchCase(var_value,cases649,false);
          setModuleName("gUnit");
          return matchres649;
        };
        func648.paramTypes = [];
        func648.paramTypes.push([]);
        func648.paramTypes.push([type_Type, "Undesired"]);
        func648.paramCounts = [1, 1];
        obj342.methods["deny()hasType"] = func648;
        func648.definitionLine = 156;
        func648.definitionModule = "gUnit";
        setLineNumber(63);    // compilenode string
        var string675 = new GraceString("AssertionFailure");
        var call676 = callmethodChecked(var_prelude, "Exception", [0]);
        var call677 = callmethodChecked(call676, "refine", [1], string675);
        obj342.data["AssertionFailure"] = call677;
        var reader_gUnit_AssertionFailure678 = function() {
          return this.data["AssertionFailure"];
        };
        reader_gUnit_AssertionFailure678.def = true;
        obj342.methods["AssertionFailure"] = reader_gUnit_AssertionFailure678;
        superDepth = origSuperDepth;
      };
      obj_init_342.apply(inheritingObject, []);
      return obj342;
      };
      this.methods["assertion()object"] = func341;
    setLineNumber(167);    // compilenode method
    var func679 = function(argcv) {    // method testCaseNamed(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_name__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for testCaseNamed(1)"));
      setModuleName("gUnit");
      var obj680 = Grace_allocObject(null, "gUnit.testCaseNamed");
      obj680.definitionModule = "gUnit";
      obj680.definitionLine = 167;
      obj680.outer = this;
      var reader_gUnit_outer681 = function() {
        return this.outer;
      };
      obj680.methods["outer"] = reader_gUnit_outer681;
      var obj_init_680 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj680;
        var func682 = function(argcv) {    // method name
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for name"));
          setModuleName("gUnit");
          // name is a simple accessor - elide try ... catch
          setLineNumber(172);    // compilenode identifier
          return var_name__39__;
        };
        func682.paramCounts = [0];
        obj680.methods["name"] = func682;
        func682.definitionLine = 172;
        func682.definitionModule = "gUnit";
        var func683 = function(argcv) {    // method setup
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for setup"));
          setModuleName("gUnit");
          return GraceDone;
        };
        func683.paramCounts = [0];
        obj680.methods["setup"] = func683;
        func683.definitionLine = 174;
        func683.definitionModule = "gUnit";
        var func684 = function(argcv) {    // method teardown
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for teardown"));
          setModuleName("gUnit");
          return GraceDone;
        };
        func684.paramCounts = [0];
        obj680.methods["teardown"] = func684;
        func684.definitionLine = 175;
        func684.definitionModule = "gUnit";
        var func685 = function(argcv) {    // method countOneAssertion
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for countOneAssertion"));
          setModuleName("gUnit");
          setLineNumber(177);    // compilenode call
          onSelf = true;
          var call686 = callmethodChecked(this, "currentResult", [0]);
          var call687 = callmethodChecked(call686, "countOneAssertion", [0]);
          return call687;
        };
        func685.paramCounts = [0];
        obj680.methods["countOneAssertion"] = func685;
        func685.definitionLine = 176;
        func685.definitionModule = "gUnit";
        var func688 = function(argcv) {    // method run(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_result = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for run(1)"));
          setModuleName("gUnit");
          setLineNumber(181);    // compilenode identifier
          onSelf = true;
          var call689 = callmethodChecked(this, "currentResult:=", [1], var_result);
          setLineNumber(182);    // compilenode call
          onSelf = true;
          var call690 = callmethodChecked(this, "name", [0]);
          var call691 = callmethodChecked(var_result, "testStarted", [1], call690);
          setLineNumber(183);    // compilenode block
          var block693 = new GraceBlock(this, 183, 0);
          block693.real = function() {
            setLineNumber(184);    // compilenode block
            var block695 = new GraceBlock(this, 184, 0);
            block695.real = function() {
              setLineNumber(185);    // compilenode call
              onSelf = true;
              var call696 = callmethodChecked(this, "setup", [0]);
              setLineNumber(186);    // compilenode call
              onSelf = true;
              var call697 = callmethodChecked(this, "runTest", [0]);
              return call697;
            };
            var cases694 = [];
            setLineNumber(187);    // compilenode block
            var block698 = new GraceBlock(this, 187, 0);
            block698.real = function() {
              onSelf = true;
              var call699 = callmethodChecked(this, "teardown", [0]);
              return call699;
            };
            setLineNumber(184);    // compiletrycatch
            var catchres694 = tryCatch(block695,cases694,block698);
            setModuleName("gUnit");
            return catchres694;
          };
          var cases692 = [];
          setLineNumber(188);    // compilenode block
          var block700 = new GraceBlock(this, 188, 1);
          setLineNumber(0);    // compilenode string
          var string701 = new GraceString("e");
          var call702 = callmethodChecked(var_prelude, "VariablePattern", [0]);
          var call703 = callmethodChecked(call702, "new", [1], string701);
          setLineNumber(188);    // compilenode call
          onSelf = true;
          var call704 = callmethodChecked(this, "AssertionFailure", [0]);
          var call705 = callmethodChecked(var_prelude, "AndPattern", [0]);
          var call706 = callmethodChecked(call705, "new", [2], call703, call704);
          block700.pattern = call706;
          onSelf = true;
          var call707 = callmethodChecked(this, "AssertionFailure", [0]);
          block700.paramTypes = [call707];
          block700.real = function(var_e) {
            setLineNumber(189);    // compilenode call
            onSelf = true;
            var call708 = callmethodChecked(this, "name", [0]);
            var call709 = callmethodChecked(var_e, "message", [0]);
            var call710 = callmethodChecked(var_result, "testFailed()withMessage", [1, 1], call708, call709);
            return call710;
          };
          cases692.push(block700);
          setLineNumber(190);    // compilenode block
          var block711 = new GraceBlock(this, 190, 1);
          setLineNumber(188);    // compilenode string
          var string712 = new GraceString("e");
          var call713 = callmethodChecked(var_prelude, "VariablePattern", [0]);
          var call714 = callmethodChecked(call713, "new", [1], string712);
          setLineNumber(190);    // compilenode call
          var call715 = callmethodChecked(var_prelude, "Exception", [0]);
          setLineNumber(188);    // compilenode call
          var call716 = callmethodChecked(var_prelude, "AndPattern", [0]);
          var call717 = callmethodChecked(call716, "new", [2], call714, call715);
          block711.pattern = call717;
          setLineNumber(190);    // compilenode call
          var call718 = callmethodChecked(var_prelude, "Exception", [0]);
          block711.paramTypes = [call718];
          block711.real = function(var_e) {
            setLineNumber(191);    // compilenode call
            onSelf = true;
            var call719 = callmethodChecked(this, "name", [0]);
            var string720 = new GraceString("");
            var call722 = callmethodChecked(var_e, "message", [0]);
            var string724 = new GraceString(": ");
            var call726 = callmethodChecked(var_e, "exception", [0]);
            var string728 = new GraceString("");
            var opresult730 = callmethodChecked(string728, "++", [1], call726);
            var opresult732 = callmethodChecked(opresult730, "++", [1], string724);
            var opresult734 = callmethodChecked(opresult732, "++", [1], call722);
            var opresult736 = callmethodChecked(opresult734, "++", [1], string720);
            var call737 = callmethodChecked(var_result, "testErrored()withMessage", [1, 1], call719, opresult736);
            return call737;
          };
          cases692.push(block711);
          setLineNumber(183);    // compiletrycatch
          var catchres692 = tryCatch(block693,cases692,false);
          setModuleName("gUnit");
          setLineNumber(193);    // compilenode call
          onSelf = true;
          var call738 = callmethodChecked(this, "name", [0]);
          var call739 = callmethodChecked(var_result, "testFinished", [1], call738);
          return call739;
        };
        func688.paramCounts = [1];
        obj680.methods["run"] = func688;
        func688.definitionLine = 180;
        func688.definitionModule = "gUnit";
        var func740 = function(argcv) {    // method debug(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_result = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for debug(1)"));
          setModuleName("gUnit");
          setLineNumber(197);    // compilenode identifier
          onSelf = true;
          var call741 = callmethodChecked(this, "currentResult:=", [1], var_result);
          setLineNumber(198);    // compilenode call
          onSelf = true;
          var call742 = callmethodChecked(this, "name", [0]);
          var call743 = callmethodChecked(var_result, "testStarted", [1], call742);
          setLineNumber(199);    // compilenode block
          var block745 = new GraceBlock(this, 199, 0);
          block745.real = function() {
            setLineNumber(200);    // compilenode string
            var string746 = new GraceString(" ...");
            onSelf = true;
            var call748 = callmethodChecked(this, "name", [0]);
            var string750 = new GraceString("\ndebugging method ");
            var opresult752 = callmethodChecked(string750, "++", [1], call748);
            var opresult754 = callmethodChecked(opresult752, "++", [1], string746);
            var call755 = Grace_print(opresult754);
            setLineNumber(201);    // compilenode block
            var block757 = new GraceBlock(this, 201, 0);
            block757.real = function() {
              setLineNumber(202);    // compilenode call
              onSelf = true;
              var call758 = callmethodChecked(this, "setup", [0]);
              setLineNumber(203);    // compilenode call
              onSelf = true;
              var call759 = callmethodChecked(this, "runTest", [0]);
              return call759;
            };
            var cases756 = [];
            setLineNumber(204);    // compilenode block
            var block760 = new GraceBlock(this, 204, 0);
            block760.real = function() {
              onSelf = true;
              var call761 = callmethodChecked(this, "teardown", [0]);
              return call761;
            };
            setLineNumber(201);    // compiletrycatch
            var catchres756 = tryCatch(block757,cases756,block760);
            setModuleName("gUnit");
            return catchres756;
          };
          var cases744 = [];
          setLineNumber(205);    // compilenode block
          var block762 = new GraceBlock(this, 205, 1);
          setLineNumber(188);    // compilenode string
          var string763 = new GraceString("e");
          var call764 = callmethodChecked(var_prelude, "VariablePattern", [0]);
          var call765 = callmethodChecked(call764, "new", [1], string763);
          setLineNumber(205);    // compilenode call
          var call766 = callmethodChecked(var_prelude, "Exception", [0]);
          setLineNumber(188);    // compilenode call
          var call767 = callmethodChecked(var_prelude, "AndPattern", [0]);
          var call768 = callmethodChecked(call767, "new", [2], call765, call766);
          block762.pattern = call768;
          setLineNumber(205);    // compilenode call
          var call769 = callmethodChecked(var_prelude, "Exception", [0]);
          block762.paramTypes = [call769];
          block762.real = function(var_e) {
            setLineNumber(206);    // compilenode call
            onSelf = true;
            var call770 = callmethodChecked(this, "name", [0]);
            var call771 = callmethodChecked(var_e, "message", [0]);
            var call772 = callmethodChecked(var_result, "testErrored()withMessage", [1, 1], call770, call771);
            setLineNumber(207);    // compilenode call
            onSelf = true;
            var call773 = callmethodChecked(this, "name", [0]);
            onSelf = true;
            var call774 = callmethodChecked(this, "printBackTrace()limitedTo", [1, 1], var_e, call773);
            return call774;
          };
          cases744.push(block762);
          setLineNumber(199);    // compiletrycatch
          var catchres744 = tryCatch(block745,cases744,false);
          setModuleName("gUnit");
          setLineNumber(209);    // compilenode call
          onSelf = true;
          var call775 = callmethodChecked(this, "name", [0]);
          var call776 = callmethodChecked(var_result, "testFinished", [1], call775);
          return call776;
        };
        func740.paramCounts = [1];
        obj680.methods["debug"] = func740;
        func740.definitionLine = 196;
        func740.definitionModule = "gUnit";
        var func777 = function(argcv) {    // method runTest
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for runTest"));
          setModuleName("gUnit");
          setLineNumber(213);    // compilenode call
          onSelf = true;
          var call778 = callmethodChecked(this, "name", [0]);
          var call779 = callmethodChecked(var_mirror, "reflect", [1], this);
          var call780 = callmethodChecked(call779, "getMethod", [1], call778);
          var var_methodImage = call780;
          setLineNumber(214);    // compilenode call
          var call781 = callmethodChecked(var_prelude, "emptySequence", [0]);
          var call782 = callmethodChecked(var_methodImage, "requestWithArgs", [1], call781);
          return call782;
        };
        func777.paramCounts = [0];
        obj680.methods["runTest"] = func777;
        func777.definitionLine = 212;
        func777.definitionModule = "gUnit";
        var func783 = function(argcv) {    // method printBackTrace(1)limitedTo(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_exceptionPacket = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for printBackTrace (arg list 1) of printBackTrace(1)limitedTo(1)"));
          var var_testName = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for limitedTo (arg list 2) of printBackTrace(1)limitedTo(1)"));
          setModuleName("gUnit");
          setLineNumber(218);    // compilenode identifier
          var call784 = callmethodChecked(var_exceptionPacket, "exception", [0]);
          var var_ex = call784;
          setLineNumber(219);    // compilenode identifier
          var call785 = callmethodChecked(var_exceptionPacket, "message", [0]);
          var var_msg = call785;
          setLineNumber(220);    // compilenode identifier
          var call786 = callmethodChecked(var_exceptionPacket, "lineNumber", [0]);
          var var_lineNr = call786;
          setLineNumber(221);    // compilenode string
          var string787 = new GraceString("");
          var string790 = new GraceString(": ");
          var string793 = new GraceString(" on line ");
          var string796 = new GraceString("");
          var opresult798 = callmethodChecked(string796, "++", [1], var_ex);
          var opresult800 = callmethodChecked(opresult798, "++", [1], string793);
          var opresult802 = callmethodChecked(opresult800, "++", [1], var_lineNr);
          var opresult804 = callmethodChecked(opresult802, "++", [1], string790);
          var opresult806 = callmethodChecked(opresult804, "++", [1], var_msg);
          var opresult808 = callmethodChecked(opresult806, "++", [1], string787);
          var call809 = Grace_print(opresult808);
          setLineNumber(222);    // compilenode identifier
          var call810 = callmethodChecked(var_exceptionPacket, "backtrace", [0]);
          var var_bt = call810;
          setLineNumber(223);    // compilenode block
          var block811 = new GraceBlock(this, 223, 0);
          block811.real = function() {
            var call813 = callmethodChecked(var_bt, "size", [0]);
            var opresult815 = callmethodChecked(call813, ">", [1], new GraceNum(0));
            return opresult815;
          };
          var block816 = new GraceBlock(this, 223, 0);
          block816.real = function() {
            setLineNumber(224);    // compilenode identifier
            var call817 = callmethodChecked(var_bt, "pop", [0]);
            var var_frameDescription = call817;
            setLineNumber(225);    // compilenode string
            var string819 = new GraceString("  called from ");
            var opresult821 = callmethodChecked(string819, "++", [1], var_frameDescription);
            var call822 = Grace_print(opresult821);
            var if823 = GraceDone;
            setLineNumber(226);    // compilenode identifier
            var call824 = callmethodChecked(var_frameDescription, "contains", [1], var_testName);
            if (Grace_isTrue(call824)) {
              throw new ReturnException(var_done, returnTarget);
            }
            var if825 = GraceDone;
            setLineNumber(227);    // compilenode string
            var string826 = new GraceString("testCaseNamed()setupIn()asTestNumber");
            var call827 = callmethodChecked(var_frameDescription, "contains", [1], string826);
            if (Grace_isTrue(call827)) {
              setLineNumber(231);    // compilenode identifier
              throw new ReturnException(var_done, returnTarget);
            }
            return if825;
          };
          var call828 = callmethodChecked(var_prelude, "while()do", [1, 1], block811, block816);
          return call828;
        };
        func783.paramCounts = [1, 1];
        obj680.methods["printBackTrace()limitedTo"] = func783;
        func783.definitionLine = 217;
        func783.definitionModule = "gUnit";
        var func829 = function(argcv) {    // method runAndPrintResults
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for runAndPrintResults"));
          setModuleName("gUnit");
          setLineNumber(236);    // compilenode call
          var call830 = callmethodChecked(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call831 = callmethodChecked(call830, "testResult", [0]);
          var var_result = call831;
          setLineNumber(237);    // compilenode identifier
          onSelf = true;
          var call832 = callmethodChecked(this, "run", [1], var_result);
          var if833 = GraceDone;
          setLineNumber(238);    // compilenode string
          var string834 = new GraceString("");
          onSelf = true;
          var call836 = callmethodChecked(this, "name", [0]);
          var opresult838 = callmethodChecked(call836, "==", [1], string834);
          if (Grace_isTrue(opresult838)) {
            setLineNumber(239);    // compilenode string
            var string839 = new GraceString("");
            var call841 = callmethodChecked(var_result, "detailedSummary", [0]);
            var string843 = new GraceString("");
            var opresult845 = callmethodChecked(string843, "++", [1], call841);
            var opresult847 = callmethodChecked(opresult845, "++", [1], string839);
            var call848 = Grace_print(opresult847);
            if833 = call848;
          } else {
            setLineNumber(241);    // compilenode string
            var string849 = new GraceString("");
            var call851 = callmethodChecked(var_result, "detailedSummary", [0]);
            var string853 = new GraceString(": ");
            onSelf = true;
            var call855 = callmethodChecked(this, "name", [0]);
            var string857 = new GraceString("");
            var opresult859 = callmethodChecked(string857, "++", [1], call855);
            var opresult861 = callmethodChecked(opresult859, "++", [1], string853);
            var opresult863 = callmethodChecked(opresult861, "++", [1], call851);
            var opresult865 = callmethodChecked(opresult863, "++", [1], string849);
            var call866 = Grace_print(opresult865);
            if833 = call866;
          }
          return if833;
        };
        func829.paramCounts = [0];
        obj680.methods["runAndPrintResults"] = func829;
        func829.definitionLine = 235;
        func829.definitionModule = "gUnit";
        var func867 = function(argcv) {    // method debugAndPrintResults
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for debugAndPrintResults"));
          setModuleName("gUnit");
          setLineNumber(246);    // compilenode call
          var call868 = callmethodChecked(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call869 = callmethodChecked(call868, "testResult", [0]);
          var var_result = call869;
          setLineNumber(247);    // compilenode identifier
          onSelf = true;
          var call870 = callmethodChecked(this, "debug", [1], var_result);
          var if871 = GraceDone;
          setLineNumber(248);    // compilenode string
          var string872 = new GraceString("");
          onSelf = true;
          var call874 = callmethodChecked(this, "name", [0]);
          var opresult876 = callmethodChecked(call874, "==", [1], string872);
          if (Grace_isTrue(opresult876)) {
            setLineNumber(249);    // compilenode string
            var string877 = new GraceString("");
            var call879 = callmethodChecked(var_result, "detailedSummary", [0]);
            var string881 = new GraceString("");
            var opresult883 = callmethodChecked(string881, "++", [1], call879);
            var opresult885 = callmethodChecked(opresult883, "++", [1], string877);
            var call886 = Grace_print(opresult885);
            if871 = call886;
          } else {
            setLineNumber(251);    // compilenode string
            var string887 = new GraceString("");
            var call889 = callmethodChecked(var_result, "detailedSummary", [0]);
            var string891 = new GraceString(": ");
            onSelf = true;
            var call893 = callmethodChecked(this, "name", [0]);
            var string895 = new GraceString("");
            var opresult897 = callmethodChecked(string895, "++", [1], call893);
            var opresult899 = callmethodChecked(opresult897, "++", [1], string891);
            var opresult901 = callmethodChecked(opresult899, "++", [1], call889);
            var opresult903 = callmethodChecked(opresult901, "++", [1], string887);
            var call904 = Grace_print(opresult903);
            if871 = call904;
          }
          return if871;
        };
        func867.paramCounts = [0];
        obj680.methods["debugAndPrintResults"] = func867;
        func867.definitionLine = 245;
        func867.definitionModule = "gUnit";
        setLineNumber(168);    // compilenode call
        var call905 = callmethodChecked(superDepth, "outer", [0]);
        onOuter = true;
        onSelf = true;
        var call906 = callmethodChecked(call905, "assertion()object", [0, 1], this);
        obj680.superobj = call906;
        if (call906.data) obj680.data = call906.data;
        if (call906.hasOwnProperty('_value'))
            obj680._value = call906._value;
        setLineNumber(170);    // compilenode num
        obj680.data["size"] = new GraceNum(1);
        var reader_gUnit_size907 = function() {
          return this.data["size"];
        };
        reader_gUnit_size907.def = true;
        obj680.methods["size"] = reader_gUnit_size907;
        obj680.data["currentResult"] = undefined;
        var reader_gUnit_currentResult908 = function() {
          return this.data["currentResult"];
        };
        obj680.methods["currentResult"] = reader_gUnit_currentResult908;
        obj680.data["currentResult"] = undefined;
        var writer_gUnit_currentResult908 = function(argcv, o) {
          this.data["currentResult"] = o;
          return GraceDone;
        };
        obj680.methods["currentResult:="] = writer_gUnit_currentResult908;
        reader_gUnit_currentResult908.confidential = true;
        writer_gUnit_currentResult908.confidential = true;
        obj680.mutable = true;
        superDepth = origSuperDepth;
      };
      obj_init_680.apply(obj680, []);
      setLineNumber(167);    // return value
      if (!Grace_isTrue(callmethod(var_TestCase, "match", [1], obj680)))
          throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("result of method testCaseNamed(1) does not have " + 
                  callmethod(var_TestCase, "asString", [0])._value + "."));
      return obj680;
    };
    func679.paramCounts = [1];
    this.methods["testCaseNamed"] = func679;
    func679.definitionLine = 167;
    func679.definitionModule = "gUnit";
      var func909 = function(argcv) {    // method testCaseNamed(1     )()object
        var curarg = 1;
        var var_name__39__ = arguments[curarg];
        curarg++;
        var inheritingObject = arguments[curarg++];
        // Start argument processing
        curarg = 1;
        curarg++;
        // End argument processing
        setModuleName("gUnit");
        var returnTarget = invocationCount;
        invocationCount++;
        var obj910 = Grace_allocObject(null, "testCaseNamed");
        obj910.definitionModule = "gUnit";
        obj910.definitionLine = 167;
        var inho910 = inheritingObject;
        while (inho910.superobj) inho910 = inho910.superobj;
        inho910.superobj = obj910;
        obj910.data = inheritingObject.data;
        if (inheritingObject.hasOwnProperty('_value'))
          obj910._value = inheritingObject._value;
        obj910.outer = this;
        var reader_gUnit_outer911 = function() {
          return this.outer;
        };
        obj910.methods["outer"] = reader_gUnit_outer911;
        var obj_init_910 = function() {
          var origSuperDepth = superDepth;
          superDepth = obj910;
          var func912 = function(argcv) {    // method name
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for name"));
            setModuleName("gUnit");
            // name is a simple accessor - elide try ... catch
            setLineNumber(172);    // compilenode identifier
            return var_name__39__;
          };
          func912.paramCounts = [0];
          obj910.methods["name"] = func912;
          func912.definitionLine = 172;
          func912.definitionModule = "gUnit";
          var func913 = function(argcv) {    // method setup
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for setup"));
            setModuleName("gUnit");
            return GraceDone;
          };
          func913.paramCounts = [0];
          obj910.methods["setup"] = func913;
          func913.definitionLine = 174;
          func913.definitionModule = "gUnit";
          var func914 = function(argcv) {    // method teardown
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for teardown"));
            setModuleName("gUnit");
            return GraceDone;
          };
          func914.paramCounts = [0];
          obj910.methods["teardown"] = func914;
          func914.definitionLine = 175;
          func914.definitionModule = "gUnit";
          var func915 = function(argcv) {    // method countOneAssertion
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for countOneAssertion"));
            setModuleName("gUnit");
            setLineNumber(177);    // compilenode call
            onSelf = true;
            var call916 = callmethodChecked(this, "currentResult", [0]);
            var call917 = callmethodChecked(call916, "countOneAssertion", [0]);
            return call917;
          };
          func915.paramCounts = [0];
          obj910.methods["countOneAssertion"] = func915;
          func915.definitionLine = 176;
          func915.definitionModule = "gUnit";
          var func918 = function(argcv) {    // method run(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_result = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for run(1)"));
            setModuleName("gUnit");
            setLineNumber(181);    // compilenode identifier
            onSelf = true;
            var call919 = callmethodChecked(this, "currentResult:=", [1], var_result);
            setLineNumber(182);    // compilenode call
            onSelf = true;
            var call920 = callmethodChecked(this, "name", [0]);
            var call921 = callmethodChecked(var_result, "testStarted", [1], call920);
            setLineNumber(183);    // compilenode block
            var block923 = new GraceBlock(this, 183, 0);
            block923.real = function() {
              setLineNumber(184);    // compilenode block
              var block925 = new GraceBlock(this, 184, 0);
              block925.real = function() {
                setLineNumber(185);    // compilenode call
                onSelf = true;
                var call926 = callmethodChecked(this, "setup", [0]);
                setLineNumber(186);    // compilenode call
                onSelf = true;
                var call927 = callmethodChecked(this, "runTest", [0]);
                return call927;
              };
              var cases924 = [];
              setLineNumber(187);    // compilenode block
              var block928 = new GraceBlock(this, 187, 0);
              block928.real = function() {
                onSelf = true;
                var call929 = callmethodChecked(this, "teardown", [0]);
                return call929;
              };
              setLineNumber(184);    // compiletrycatch
              var catchres924 = tryCatch(block925,cases924,block928);
              setModuleName("gUnit");
              return catchres924;
            };
            var cases922 = [];
            setLineNumber(188);    // compilenode block
            var block930 = new GraceBlock(this, 188, 1);
            setLineNumber(0);    // compilenode string
            var string931 = new GraceString("e");
            var call932 = callmethodChecked(var_prelude, "VariablePattern", [0]);
            var call933 = callmethodChecked(call932, "new", [1], string931);
            setLineNumber(188);    // compilenode call
            onSelf = true;
            var call934 = callmethodChecked(this, "AssertionFailure", [0]);
            var call935 = callmethodChecked(var_prelude, "AndPattern", [0]);
            var call936 = callmethodChecked(call935, "new", [2], call933, call934);
            block930.pattern = call936;
            onSelf = true;
            var call937 = callmethodChecked(this, "AssertionFailure", [0]);
            block930.paramTypes = [call937];
            block930.real = function(var_e) {
              setLineNumber(189);    // compilenode call
              onSelf = true;
              var call938 = callmethodChecked(this, "name", [0]);
              var call939 = callmethodChecked(var_e, "message", [0]);
              var call940 = callmethodChecked(var_result, "testFailed()withMessage", [1, 1], call938, call939);
              return call940;
            };
            cases922.push(block930);
            setLineNumber(190);    // compilenode block
            var block941 = new GraceBlock(this, 190, 1);
            setLineNumber(188);    // compilenode string
            var string942 = new GraceString("e");
            var call943 = callmethodChecked(var_prelude, "VariablePattern", [0]);
            var call944 = callmethodChecked(call943, "new", [1], string942);
            setLineNumber(190);    // compilenode call
            var call945 = callmethodChecked(var_prelude, "Exception", [0]);
            setLineNumber(188);    // compilenode call
            var call946 = callmethodChecked(var_prelude, "AndPattern", [0]);
            var call947 = callmethodChecked(call946, "new", [2], call944, call945);
            block941.pattern = call947;
            setLineNumber(190);    // compilenode call
            var call948 = callmethodChecked(var_prelude, "Exception", [0]);
            block941.paramTypes = [call948];
            block941.real = function(var_e) {
              setLineNumber(191);    // compilenode call
              onSelf = true;
              var call949 = callmethodChecked(this, "name", [0]);
              var string950 = new GraceString("");
              var call952 = callmethodChecked(var_e, "message", [0]);
              var string954 = new GraceString(": ");
              var call956 = callmethodChecked(var_e, "exception", [0]);
              var string958 = new GraceString("");
              var opresult960 = callmethodChecked(string958, "++", [1], call956);
              var opresult962 = callmethodChecked(opresult960, "++", [1], string954);
              var opresult964 = callmethodChecked(opresult962, "++", [1], call952);
              var opresult966 = callmethodChecked(opresult964, "++", [1], string950);
              var call967 = callmethodChecked(var_result, "testErrored()withMessage", [1, 1], call949, opresult966);
              return call967;
            };
            cases922.push(block941);
            setLineNumber(183);    // compiletrycatch
            var catchres922 = tryCatch(block923,cases922,false);
            setModuleName("gUnit");
            setLineNumber(193);    // compilenode call
            onSelf = true;
            var call968 = callmethodChecked(this, "name", [0]);
            var call969 = callmethodChecked(var_result, "testFinished", [1], call968);
            return call969;
          };
          func918.paramCounts = [1];
          obj910.methods["run"] = func918;
          func918.definitionLine = 180;
          func918.definitionModule = "gUnit";
          var func970 = function(argcv) {    // method debug(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_result = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for debug(1)"));
            setModuleName("gUnit");
            setLineNumber(197);    // compilenode identifier
            onSelf = true;
            var call971 = callmethodChecked(this, "currentResult:=", [1], var_result);
            setLineNumber(198);    // compilenode call
            onSelf = true;
            var call972 = callmethodChecked(this, "name", [0]);
            var call973 = callmethodChecked(var_result, "testStarted", [1], call972);
            setLineNumber(199);    // compilenode block
            var block975 = new GraceBlock(this, 199, 0);
            block975.real = function() {
              setLineNumber(200);    // compilenode string
              var string976 = new GraceString(" ...");
              onSelf = true;
              var call978 = callmethodChecked(this, "name", [0]);
              var string980 = new GraceString("\ndebugging method ");
              var opresult982 = callmethodChecked(string980, "++", [1], call978);
              var opresult984 = callmethodChecked(opresult982, "++", [1], string976);
              var call985 = Grace_print(opresult984);
              setLineNumber(201);    // compilenode block
              var block987 = new GraceBlock(this, 201, 0);
              block987.real = function() {
                setLineNumber(202);    // compilenode call
                onSelf = true;
                var call988 = callmethodChecked(this, "setup", [0]);
                setLineNumber(203);    // compilenode call
                onSelf = true;
                var call989 = callmethodChecked(this, "runTest", [0]);
                return call989;
              };
              var cases986 = [];
              setLineNumber(204);    // compilenode block
              var block990 = new GraceBlock(this, 204, 0);
              block990.real = function() {
                onSelf = true;
                var call991 = callmethodChecked(this, "teardown", [0]);
                return call991;
              };
              setLineNumber(201);    // compiletrycatch
              var catchres986 = tryCatch(block987,cases986,block990);
              setModuleName("gUnit");
              return catchres986;
            };
            var cases974 = [];
            setLineNumber(205);    // compilenode block
            var block992 = new GraceBlock(this, 205, 1);
            setLineNumber(188);    // compilenode string
            var string993 = new GraceString("e");
            var call994 = callmethodChecked(var_prelude, "VariablePattern", [0]);
            var call995 = callmethodChecked(call994, "new", [1], string993);
            setLineNumber(205);    // compilenode call
            var call996 = callmethodChecked(var_prelude, "Exception", [0]);
            setLineNumber(188);    // compilenode call
            var call997 = callmethodChecked(var_prelude, "AndPattern", [0]);
            var call998 = callmethodChecked(call997, "new", [2], call995, call996);
            block992.pattern = call998;
            setLineNumber(205);    // compilenode call
            var call999 = callmethodChecked(var_prelude, "Exception", [0]);
            block992.paramTypes = [call999];
            block992.real = function(var_e) {
              setLineNumber(206);    // compilenode call
              onSelf = true;
              var call1000 = callmethodChecked(this, "name", [0]);
              var call1001 = callmethodChecked(var_e, "message", [0]);
              var call1002 = callmethodChecked(var_result, "testErrored()withMessage", [1, 1], call1000, call1001);
              setLineNumber(207);    // compilenode call
              onSelf = true;
              var call1003 = callmethodChecked(this, "name", [0]);
              onSelf = true;
              var call1004 = callmethodChecked(this, "printBackTrace()limitedTo", [1, 1], var_e, call1003);
              return call1004;
            };
            cases974.push(block992);
            setLineNumber(199);    // compiletrycatch
            var catchres974 = tryCatch(block975,cases974,false);
            setModuleName("gUnit");
            setLineNumber(209);    // compilenode call
            onSelf = true;
            var call1005 = callmethodChecked(this, "name", [0]);
            var call1006 = callmethodChecked(var_result, "testFinished", [1], call1005);
            return call1006;
          };
          func970.paramCounts = [1];
          obj910.methods["debug"] = func970;
          func970.definitionLine = 196;
          func970.definitionModule = "gUnit";
          var func1007 = function(argcv) {    // method runTest
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for runTest"));
            setModuleName("gUnit");
            setLineNumber(213);    // compilenode call
            onSelf = true;
            var call1008 = callmethodChecked(this, "name", [0]);
            var call1009 = callmethodChecked(var_mirror, "reflect", [1], this);
            var call1010 = callmethodChecked(call1009, "getMethod", [1], call1008);
            var var_methodImage = call1010;
            setLineNumber(214);    // compilenode call
            var call1011 = callmethodChecked(var_prelude, "emptySequence", [0]);
            var call1012 = callmethodChecked(var_methodImage, "requestWithArgs", [1], call1011);
            return call1012;
          };
          func1007.paramCounts = [0];
          obj910.methods["runTest"] = func1007;
          func1007.definitionLine = 212;
          func1007.definitionModule = "gUnit";
          var func1013 = function(argcv) {    // method printBackTrace(1)limitedTo(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_exceptionPacket = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for printBackTrace (arg list 1) of printBackTrace(1)limitedTo(1)"));
            var var_testName = arguments[curarg];
            curarg++;
            if (argcv[1] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for limitedTo (arg list 2) of printBackTrace(1)limitedTo(1)"));
            setModuleName("gUnit");
            setLineNumber(218);    // compilenode identifier
            var call1014 = callmethodChecked(var_exceptionPacket, "exception", [0]);
            var var_ex = call1014;
            setLineNumber(219);    // compilenode identifier
            var call1015 = callmethodChecked(var_exceptionPacket, "message", [0]);
            var var_msg = call1015;
            setLineNumber(220);    // compilenode identifier
            var call1016 = callmethodChecked(var_exceptionPacket, "lineNumber", [0]);
            var var_lineNr = call1016;
            setLineNumber(221);    // compilenode string
            var string1017 = new GraceString("");
            var string1020 = new GraceString(": ");
            var string1023 = new GraceString(" on line ");
            var string1026 = new GraceString("");
            var opresult1028 = callmethodChecked(string1026, "++", [1], var_ex);
            var opresult1030 = callmethodChecked(opresult1028, "++", [1], string1023);
            var opresult1032 = callmethodChecked(opresult1030, "++", [1], var_lineNr);
            var opresult1034 = callmethodChecked(opresult1032, "++", [1], string1020);
            var opresult1036 = callmethodChecked(opresult1034, "++", [1], var_msg);
            var opresult1038 = callmethodChecked(opresult1036, "++", [1], string1017);
            var call1039 = Grace_print(opresult1038);
            setLineNumber(222);    // compilenode identifier
            var call1040 = callmethodChecked(var_exceptionPacket, "backtrace", [0]);
            var var_bt = call1040;
            setLineNumber(223);    // compilenode block
            var block1041 = new GraceBlock(this, 223, 0);
            block1041.real = function() {
              var call1043 = callmethodChecked(var_bt, "size", [0]);
              var opresult1045 = callmethodChecked(call1043, ">", [1], new GraceNum(0));
              return opresult1045;
            };
            var block1046 = new GraceBlock(this, 223, 0);
            block1046.real = function() {
              setLineNumber(224);    // compilenode identifier
              var call1047 = callmethodChecked(var_bt, "pop", [0]);
              var var_frameDescription = call1047;
              setLineNumber(225);    // compilenode string
              var string1049 = new GraceString("  called from ");
              var opresult1051 = callmethodChecked(string1049, "++", [1], var_frameDescription);
              var call1052 = Grace_print(opresult1051);
              var if1053 = GraceDone;
              setLineNumber(226);    // compilenode identifier
              var call1054 = callmethodChecked(var_frameDescription, "contains", [1], var_testName);
              if (Grace_isTrue(call1054)) {
                throw new ReturnException(var_done, returnTarget);
              }
              var if1055 = GraceDone;
              setLineNumber(227);    // compilenode string
              var string1056 = new GraceString("testCaseNamed()setupIn()asTestNumber");
              var call1057 = callmethodChecked(var_frameDescription, "contains", [1], string1056);
              if (Grace_isTrue(call1057)) {
                setLineNumber(231);    // compilenode identifier
                throw new ReturnException(var_done, returnTarget);
              }
              return if1055;
            };
            var call1058 = callmethodChecked(var_prelude, "while()do", [1, 1], block1041, block1046);
            return call1058;
          };
          func1013.paramCounts = [1, 1];
          obj910.methods["printBackTrace()limitedTo"] = func1013;
          func1013.definitionLine = 217;
          func1013.definitionModule = "gUnit";
          var func1059 = function(argcv) {    // method runAndPrintResults
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for runAndPrintResults"));
            setModuleName("gUnit");
            setLineNumber(236);    // compilenode call
            var call1060 = callmethodChecked(superDepth, "outer", [0]);
            onOuter = true;
            onSelf = true;
            var call1061 = callmethodChecked(call1060, "testResult", [0]);
            var var_result = call1061;
            setLineNumber(237);    // compilenode identifier
            onSelf = true;
            var call1062 = callmethodChecked(this, "run", [1], var_result);
            var if1063 = GraceDone;
            setLineNumber(238);    // compilenode string
            var string1064 = new GraceString("");
            onSelf = true;
            var call1066 = callmethodChecked(this, "name", [0]);
            var opresult1068 = callmethodChecked(call1066, "==", [1], string1064);
            if (Grace_isTrue(opresult1068)) {
              setLineNumber(239);    // compilenode string
              var string1069 = new GraceString("");
              var call1071 = callmethodChecked(var_result, "detailedSummary", [0]);
              var string1073 = new GraceString("");
              var opresult1075 = callmethodChecked(string1073, "++", [1], call1071);
              var opresult1077 = callmethodChecked(opresult1075, "++", [1], string1069);
              var call1078 = Grace_print(opresult1077);
              if1063 = call1078;
            } else {
              setLineNumber(241);    // compilenode string
              var string1079 = new GraceString("");
              var call1081 = callmethodChecked(var_result, "detailedSummary", [0]);
              var string1083 = new GraceString(": ");
              onSelf = true;
              var call1085 = callmethodChecked(this, "name", [0]);
              var string1087 = new GraceString("");
              var opresult1089 = callmethodChecked(string1087, "++", [1], call1085);
              var opresult1091 = callmethodChecked(opresult1089, "++", [1], string1083);
              var opresult1093 = callmethodChecked(opresult1091, "++", [1], call1081);
              var opresult1095 = callmethodChecked(opresult1093, "++", [1], string1079);
              var call1096 = Grace_print(opresult1095);
              if1063 = call1096;
            }
            return if1063;
          };
          func1059.paramCounts = [0];
          obj910.methods["runAndPrintResults"] = func1059;
          func1059.definitionLine = 235;
          func1059.definitionModule = "gUnit";
          var func1097 = function(argcv) {    // method debugAndPrintResults
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for debugAndPrintResults"));
            setModuleName("gUnit");
            setLineNumber(246);    // compilenode call
            var call1098 = callmethodChecked(superDepth, "outer", [0]);
            onOuter = true;
            onSelf = true;
            var call1099 = callmethodChecked(call1098, "testResult", [0]);
            var var_result = call1099;
            setLineNumber(247);    // compilenode identifier
            onSelf = true;
            var call1100 = callmethodChecked(this, "debug", [1], var_result);
            var if1101 = GraceDone;
            setLineNumber(248);    // compilenode string
            var string1102 = new GraceString("");
            onSelf = true;
            var call1104 = callmethodChecked(this, "name", [0]);
            var opresult1106 = callmethodChecked(call1104, "==", [1], string1102);
            if (Grace_isTrue(opresult1106)) {
              setLineNumber(249);    // compilenode string
              var string1107 = new GraceString("");
              var call1109 = callmethodChecked(var_result, "detailedSummary", [0]);
              var string1111 = new GraceString("");
              var opresult1113 = callmethodChecked(string1111, "++", [1], call1109);
              var opresult1115 = callmethodChecked(opresult1113, "++", [1], string1107);
              var call1116 = Grace_print(opresult1115);
              if1101 = call1116;
            } else {
              setLineNumber(251);    // compilenode string
              var string1117 = new GraceString("");
              var call1119 = callmethodChecked(var_result, "detailedSummary", [0]);
              var string1121 = new GraceString(": ");
              onSelf = true;
              var call1123 = callmethodChecked(this, "name", [0]);
              var string1125 = new GraceString("");
              var opresult1127 = callmethodChecked(string1125, "++", [1], call1123);
              var opresult1129 = callmethodChecked(opresult1127, "++", [1], string1121);
              var opresult1131 = callmethodChecked(opresult1129, "++", [1], call1119);
              var opresult1133 = callmethodChecked(opresult1131, "++", [1], string1117);
              var call1134 = Grace_print(opresult1133);
              if1101 = call1134;
            }
            return if1101;
          };
          func1097.paramCounts = [0];
          obj910.methods["debugAndPrintResults"] = func1097;
          func1097.definitionLine = 245;
          func1097.definitionModule = "gUnit";
          setLineNumber(168);    // compilenode call
          var call1135 = callmethodChecked(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1136 = callmethodChecked(call1135, "assertion()object", [0, 1], this);
          obj910.superobj = call1136;
          if (call1136.data) obj910.data = call1136.data;
          if (call1136.hasOwnProperty('_value'))
              obj910._value = call1136._value;
          setLineNumber(170);    // compilenode num
          obj910.data["size"] = new GraceNum(1);
          var reader_gUnit_size1137 = function() {
            return this.data["size"];
          };
          reader_gUnit_size1137.def = true;
          obj910.methods["size"] = reader_gUnit_size1137;
          obj910.data["currentResult"] = undefined;
          var reader_gUnit_currentResult1138 = function() {
            return this.data["currentResult"];
          };
          obj910.methods["currentResult"] = reader_gUnit_currentResult1138;
          obj910.data["currentResult"] = undefined;
          var writer_gUnit_currentResult1138 = function(argcv, o) {
            this.data["currentResult"] = o;
            return GraceDone;
          };
          obj910.methods["currentResult:="] = writer_gUnit_currentResult1138;
          reader_gUnit_currentResult1138.confidential = true;
          writer_gUnit_currentResult1138.confidential = true;
          obj910.mutable = true;
          superDepth = origSuperDepth;
        };
        obj_init_910.apply(inheritingObject, []);
        return obj910;
        };
        this.methods["testCaseNamed()object"] = func909;
      setLineNumber(257);    // compilenode method
      var func1139 = function(argcv) {    // method testResult
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for testResult"));
        setModuleName("gUnit");
        var obj1140 = Grace_allocObject(GraceObject, "gUnit.testResult");
        obj1140.definitionModule = "gUnit";
        obj1140.definitionLine = 257;
        obj1140.outer = this;
        var reader_gUnit_outer1141 = function() {
          return this.outer;
        };
        obj1140.methods["outer"] = reader_gUnit_outer1141;
        var obj_init_1140 = function() {
          var origSuperDepth = superDepth;
          superDepth = obj1140;
          var func1142 = function(argcv) {    // method countOneAssertion
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for countOneAssertion"));
            setModuleName("gUnit");
            setLineNumber(264);    // compilenode call
            onSelf = true;
            var call1144 = callmethodChecked(this, "currentCountOfAssertions", [0]);
            var opresult1146 = callmethodChecked(call1144, "+", [1], new GraceNum(1));
            onSelf = true;
            var call1147 = callmethodChecked(this, "currentCountOfAssertions:=", [1], opresult1146);
            return call1147;
          };
          func1142.paramCounts = [0];
          obj1140.methods["countOneAssertion"] = func1142;
          func1142.definitionLine = 263;
          func1142.definitionModule = "gUnit";
          var func1148 = function(argcv) {    // method testStarted(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_name = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for testStarted(1)"));
            setModuleName("gUnit");
            setLineNumber(268);    // compilenode call
            onSelf = true;
            var call1150 = callmethodChecked(this, "runCount", [0]);
            var opresult1152 = callmethodChecked(call1150, "+", [1], new GraceNum(1));
            onSelf = true;
            var call1153 = callmethodChecked(this, "runCount:=", [1], opresult1152);
            setLineNumber(269);    // compilenode num
            onSelf = true;
            var call1154 = callmethodChecked(this, "currentCountOfAssertions:=", [1], new GraceNum(0));
            return call1154;
          };
          func1148.paramCounts = [1];
          obj1140.methods["testStarted"] = func1148;
          func1148.definitionLine = 267;
          func1148.definitionModule = "gUnit";
          var func1155 = function(argcv) {    // method testFinished(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_name = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for testFinished(1)"));
            setModuleName("gUnit");
            var if1156 = GraceDone;
            setLineNumber(273);    // compilenode call
            onSelf = true;
            var call1158 = callmethodChecked(this, "currentCountOfAssertions", [0]);
            var opresult1160 = callmethodChecked(call1158, "==", [1], new GraceNum(0));
            if (Grace_isTrue(opresult1160)) {
              setLineNumber(274);    // compilenode string
              var string1161 = new GraceString("no assertions were checked in this test");
              var call1162 = callmethodChecked(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1163 = callmethodChecked(call1162, "testRecordFor()message", [1, 1], var_name, string1161);
              onSelf = true;
              var call1164 = callmethodChecked(this, "failSet", [0]);
              var call1165 = callmethodChecked(call1164, "add", [1], call1163);
              if1156 = call1165;
            }
            return if1156;
          };
          func1155.paramCounts = [1];
          obj1140.methods["testFinished"] = func1155;
          func1155.definitionLine = 272;
          func1155.definitionModule = "gUnit";
          var func1166 = function(argcv) {    // method testFailed(1)withMessage(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_name = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for testFailed (arg list 1) of testFailed(1)withMessage(1)"));
            var var_msg = arguments[curarg];
            curarg++;
            if (argcv[1] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for withMessage (arg list 2) of testFailed(1)withMessage(1)"));
            setModuleName("gUnit");
            setLineNumber(279);    // compilenode call
            var call1167 = callmethodChecked(superDepth, "outer", [0]);
            onOuter = true;
            onSelf = true;
            var call1168 = callmethodChecked(call1167, "testRecordFor()message", [1, 1], var_name, var_msg);
            onSelf = true;
            var call1169 = callmethodChecked(this, "failSet", [0]);
            var call1170 = callmethodChecked(call1169, "add", [1], call1168);
            return call1170;
          };
          func1166.paramCounts = [1, 1];
          obj1140.methods["testFailed()withMessage"] = func1166;
          func1166.definitionLine = 278;
          func1166.definitionModule = "gUnit";
          var func1171 = function(argcv) {    // method testErrored(1)withMessage(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_name = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for testErrored (arg list 1) of testErrored(1)withMessage(1)"));
            var var_msg = arguments[curarg];
            curarg++;
            if (argcv[1] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for withMessage (arg list 2) of testErrored(1)withMessage(1)"));
            setModuleName("gUnit");
            setLineNumber(283);    // compilenode call
            var call1172 = callmethodChecked(superDepth, "outer", [0]);
            onOuter = true;
            onSelf = true;
            var call1173 = callmethodChecked(call1172, "testRecordFor()message", [1, 1], var_name, var_msg);
            onSelf = true;
            var call1174 = callmethodChecked(this, "errorSet", [0]);
            var call1175 = callmethodChecked(call1174, "add", [1], call1173);
            setLineNumber(284);    // compilenode num
            onSelf = true;
            var call1176 = callmethodChecked(this, "currentCountOfAssertions:=", [1], new GraceNum(1));
            return call1176;
          };
          func1171.paramCounts = [1, 1];
          obj1140.methods["testErrored()withMessage"] = func1171;
          func1171.definitionLine = 282;
          func1171.definitionModule = "gUnit";
          var func1177 = function(argcv) {    // method summary
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for summary"));
            setModuleName("gUnit");
            var if1178 = GraceDone;
            setLineNumber(288);    // compilenode call
            onSelf = true;
            var call1180 = callmethodChecked(this, "numberOfErrors", [0]);
            var opresult1182 = callmethodChecked(call1180, "==", [1], new GraceNum(1));
            if (Grace_isTrue(opresult1182)) {
              var string1183 = new GraceString("");
              if1178 = string1183;
            } else {
              var string1184 = new GraceString("s");
              if1178 = string1184;
            }
            var var_s = if1178;
            setLineNumber(289);    // compilenode string
            var string1185 = new GraceString("");
            var string1188 = new GraceString(" error");
            onSelf = true;
            var call1190 = callmethodChecked(this, "numberOfErrors", [0]);
            var string1192 = new GraceString(" failed, ");
            onSelf = true;
            var call1194 = callmethodChecked(this, "numberOfFailures", [0]);
            var string1196 = new GraceString(" run, ");
            onSelf = true;
            var call1198 = callmethodChecked(this, "runCount", [0]);
            var string1200 = new GraceString("");
            var opresult1202 = callmethodChecked(string1200, "++", [1], call1198);
            var opresult1204 = callmethodChecked(opresult1202, "++", [1], string1196);
            var opresult1206 = callmethodChecked(opresult1204, "++", [1], call1194);
            var opresult1208 = callmethodChecked(opresult1206, "++", [1], string1192);
            var opresult1210 = callmethodChecked(opresult1208, "++", [1], call1190);
            var opresult1212 = callmethodChecked(opresult1210, "++", [1], string1188);
            var opresult1214 = callmethodChecked(opresult1212, "++", [1], var_s);
            var opresult1216 = callmethodChecked(opresult1214, "++", [1], string1185);
            return opresult1216;
          };
          func1177.paramCounts = [0];
          obj1140.methods["summary"] = func1177;
          func1177.definitionLine = 287;
          func1177.definitionModule = "gUnit";
          var func1217 = function(argcv) {    // method detailedSummary
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for detailedSummary"));
            setModuleName("gUnit");
            setLineNumber(293);    // compilenode call
            onSelf = true;
            var call1218 = callmethodChecked(this, "summary", [0]);
            var var_output = call1218;
            var if1219 = GraceDone;
            setLineNumber(294);    // compilenode call
            onSelf = true;
            var call1221 = callmethodChecked(this, "numberOfFailures", [0]);
            var opresult1223 = callmethodChecked(call1221, ">", [1], new GraceNum(0));
            if (Grace_isTrue(opresult1223)) {
              setLineNumber(295);    // compilenode string
              var string1224 = new GraceString("\nFailures:");
              var opresult1227 = callmethodChecked(var_output, "++", [1], string1224);
              var_output = opresult1227;
              setLineNumber(296);    // compilenode call
              onSelf = true;
              var call1228 = callmethodChecked(this, "failSet", [0]);
              var call1229 = callmethodChecked(call1228, "asList", [0]);
              var call1230 = callmethodChecked(call1229, "sort", [0]);
              var block1231 = new GraceBlock(this, 296, 1);
              setLineNumber(1);    // compilenode identifier
              block1231.real = function(var_each) {
                setLineNumber(297);    // compilenode string
                var string1233 = new GraceString("\n    ");
                var opresult1236 = callmethodChecked(var_output, "++", [1], string1233);
                var opresult1238 = callmethodChecked(opresult1236, "++", [1], var_each);
                var_output = opresult1238;
                return GraceDone;
              };
              var call1239 = callmethodChecked(var_prelude, "for()do", [1, 1], call1230, block1231);
              if1219 = call1239;
            }
            var if1240 = GraceDone;
            setLineNumber(300);    // compilenode call
            onSelf = true;
            var call1242 = callmethodChecked(this, "numberOfErrors", [0]);
            var opresult1244 = callmethodChecked(call1242, ">", [1], new GraceNum(0));
            if (Grace_isTrue(opresult1244)) {
              setLineNumber(301);    // compilenode string
              var string1245 = new GraceString("\nErrors:");
              var opresult1248 = callmethodChecked(var_output, "++", [1], string1245);
              var_output = opresult1248;
              setLineNumber(302);    // compilenode call
              onSelf = true;
              var call1249 = callmethodChecked(this, "errorSet", [0]);
              var call1250 = callmethodChecked(call1249, "asList", [0]);
              var call1251 = callmethodChecked(call1250, "sort", [0]);
              var block1252 = new GraceBlock(this, 302, 1);
              setLineNumber(1);    // compilenode identifier
              block1252.real = function(var_each) {
                setLineNumber(303);    // compilenode string
                var string1254 = new GraceString("\n    ");
                var opresult1257 = callmethodChecked(var_output, "++", [1], string1254);
                var opresult1259 = callmethodChecked(opresult1257, "++", [1], var_each);
                var_output = opresult1259;
                return GraceDone;
              };
              var call1260 = callmethodChecked(var_prelude, "for()do", [1, 1], call1251, block1252);
              if1240 = call1260;
            }
            setLineNumber(306);    // compilenode identifier
            return var_output;
          };
          func1217.paramCounts = [0];
          obj1140.methods["detailedSummary"] = func1217;
          func1217.definitionLine = 292;
          func1217.definitionModule = "gUnit";
          var func1261 = function(argcv) {    // method numberOfErrors
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for numberOfErrors"));
            setModuleName("gUnit");
            setLineNumber(310);    // compilenode call
            onSelf = true;
            var call1262 = callmethodChecked(this, "errorSet", [0]);
            var call1263 = callmethodChecked(call1262, "size", [0]);
            return call1263;
          };
          func1261.paramCounts = [0];
          obj1140.methods["numberOfErrors"] = func1261;
          func1261.definitionLine = 309;
          func1261.definitionModule = "gUnit";
          var func1264 = function(argcv) {    // method errors
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for errors"));
            setModuleName("gUnit");
            setLineNumber(314);    // compilenode call
            onSelf = true;
            var call1265 = callmethodChecked(this, "errorSet", [0]);
            var call1266 = callmethodChecked(var_prelude, "list", [1], call1265);
            var call1267 = callmethodChecked(call1266, "sort", [0]);
            return call1267;
          };
          func1264.paramCounts = [0];
          obj1140.methods["errors"] = func1264;
          func1264.definitionLine = 313;
          func1264.definitionModule = "gUnit";
          var func1268 = function(argcv) {    // method erroredTestNames
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for erroredTestNames"));
            setModuleName("gUnit");
            setLineNumber(318);    // compilenode block
            var block1269 = new GraceBlock(this, 318, 1);
            setLineNumber(1);    // compilenode identifier
            block1269.real = function(var_each) {
              setLineNumber(318);    // compilenode identifier
              var call1270 = callmethodChecked(var_each, "name", [0]);
              return call1270;
            };
            onSelf = true;
            var call1271 = callmethodChecked(this, "errorSet", [0]);
            var call1272 = callmethodChecked(call1271, "map", [1], block1269);
            var call1273 = callmethodChecked(call1272, "asList", [0]);
            var call1274 = callmethodChecked(call1273, "sort", [0]);
            return call1274;
          };
          func1268.paramCounts = [0];
          obj1140.methods["erroredTestNames"] = func1268;
          func1268.definitionLine = 317;
          func1268.definitionModule = "gUnit";
          var func1275 = function(argcv) {    // method numberOfFailures
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for numberOfFailures"));
            setModuleName("gUnit");
            setLineNumber(322);    // compilenode call
            onSelf = true;
            var call1276 = callmethodChecked(this, "failSet", [0]);
            var call1277 = callmethodChecked(call1276, "size", [0]);
            return call1277;
          };
          func1275.paramCounts = [0];
          obj1140.methods["numberOfFailures"] = func1275;
          func1275.definitionLine = 321;
          func1275.definitionModule = "gUnit";
          var func1278 = function(argcv) {    // method failures
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for failures"));
            setModuleName("gUnit");
            setLineNumber(326);    // compilenode call
            onSelf = true;
            var call1279 = callmethodChecked(this, "failSet", [0]);
            var call1280 = callmethodChecked(var_prelude, "list", [1], call1279);
            var call1281 = callmethodChecked(call1280, "sort", [0]);
            return call1281;
          };
          func1278.paramCounts = [0];
          obj1140.methods["failures"] = func1278;
          func1278.definitionLine = 325;
          func1278.definitionModule = "gUnit";
          var func1282 = function(argcv) {    // method failedTestNames
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for failedTestNames"));
            setModuleName("gUnit");
            setLineNumber(330);    // compilenode block
            var block1283 = new GraceBlock(this, 330, 1);
            setLineNumber(1);    // compilenode identifier
            block1283.real = function(var_each) {
              setLineNumber(330);    // compilenode identifier
              var call1284 = callmethodChecked(var_each, "name", [0]);
              return call1284;
            };
            onSelf = true;
            var call1285 = callmethodChecked(this, "failSet", [0]);
            var call1286 = callmethodChecked(call1285, "map", [1], block1283);
            var call1287 = callmethodChecked(call1286, "asList", [0]);
            var call1288 = callmethodChecked(call1287, "sort", [0]);
            return call1288;
          };
          func1282.paramCounts = [0];
          obj1140.methods["failedTestNames"] = func1282;
          func1282.definitionLine = 329;
          func1282.definitionModule = "gUnit";
          var func1289 = function(argcv) {    // method numberRun
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for numberRun"));
            setModuleName("gUnit");
            setLineNumber(334);    // compilenode call
            onSelf = true;
            var call1290 = callmethodChecked(this, "runCount", [0]);
            return call1290;
          };
          func1289.paramCounts = [0];
          obj1140.methods["numberRun"] = func1289;
          func1289.definitionLine = 333;
          func1289.definitionModule = "gUnit";
          setLineNumber(258);    // compilenode call
          var call1291 = callmethodChecked(var_prelude, "emptySet", [0]);
          obj1140.data["failSet"] = call1291;
          var reader_gUnit_failSet1292 = function() {
            return this.data["failSet"];
          };
          obj1140.methods["failSet"] = reader_gUnit_failSet1292;
          obj1140.data["failSet"] = call1291;
          var writer_gUnit_failSet1292 = function(argcv, o) {
            this.data["failSet"] = o;
            return GraceDone;
          };
          obj1140.methods["failSet:="] = writer_gUnit_failSet1292;
          reader_gUnit_failSet1292.confidential = true;
          writer_gUnit_failSet1292.confidential = true;
          obj1140.mutable = true;
          setLineNumber(259);    // compilenode call
          var call1293 = callmethodChecked(var_prelude, "emptySet", [0]);
          obj1140.data["errorSet"] = call1293;
          var reader_gUnit_errorSet1294 = function() {
            return this.data["errorSet"];
          };
          obj1140.methods["errorSet"] = reader_gUnit_errorSet1294;
          obj1140.data["errorSet"] = call1293;
          var writer_gUnit_errorSet1294 = function(argcv, o) {
            this.data["errorSet"] = o;
            return GraceDone;
          };
          obj1140.methods["errorSet:="] = writer_gUnit_errorSet1294;
          reader_gUnit_errorSet1294.confidential = true;
          writer_gUnit_errorSet1294.confidential = true;
          obj1140.mutable = true;
          setLineNumber(260);    // compilenode num
          obj1140.data["runCount"] = new GraceNum(0);
          var reader_gUnit_runCount1295 = function() {
            return this.data["runCount"];
          };
          obj1140.methods["runCount"] = reader_gUnit_runCount1295;
          obj1140.data["runCount"] = new GraceNum(0);
          var writer_gUnit_runCount1295 = function(argcv, o) {
            this.data["runCount"] = o;
            return GraceDone;
          };
          obj1140.methods["runCount:="] = writer_gUnit_runCount1295;
          reader_gUnit_runCount1295.confidential = true;
          writer_gUnit_runCount1295.confidential = true;
          obj1140.mutable = true;
          setLineNumber(261);    // compilenode num
          obj1140.data["currentCountOfAssertions"] = new GraceNum(0);
          var reader_gUnit_currentCountOfAssertions1296 = function() {
            return this.data["currentCountOfAssertions"];
          };
          obj1140.methods["currentCountOfAssertions"] = reader_gUnit_currentCountOfAssertions1296;
          obj1140.data["currentCountOfAssertions"] = new GraceNum(0);
          var writer_gUnit_currentCountOfAssertions1296 = function(argcv, o) {
            this.data["currentCountOfAssertions"] = o;
            return GraceDone;
          };
          obj1140.methods["currentCountOfAssertions:="] = writer_gUnit_currentCountOfAssertions1296;
          reader_gUnit_currentCountOfAssertions1296.confidential = true;
          writer_gUnit_currentCountOfAssertions1296.confidential = true;
          obj1140.mutable = true;
          superDepth = origSuperDepth;
        };
        obj_init_1140.apply(obj1140, []);
        return obj1140;
      };
      func1139.paramCounts = [0];
      this.methods["testResult"] = func1139;
      func1139.definitionLine = 257;
      func1139.definitionModule = "gUnit";
        var func1297 = function(argcv) {    // method testResult()object
          var curarg = 1;
          var inheritingObject = arguments[curarg++];
          // Start argument processing
          curarg = 1;
          // End argument processing
          setModuleName("gUnit");
          var returnTarget = invocationCount;
          invocationCount++;
          var obj1298 = Grace_allocObject(GraceObject, "testResult");
          obj1298.definitionModule = "gUnit";
          obj1298.definitionLine = 257;
          var inho1298 = inheritingObject;
          while (inho1298.superobj) inho1298 = inho1298.superobj;
          inho1298.superobj = obj1298;
          obj1298.data = inheritingObject.data;
          if (inheritingObject.hasOwnProperty('_value'))
            obj1298._value = inheritingObject._value;
          obj1298.outer = this;
          var reader_gUnit_outer1299 = function() {
            return this.outer;
          };
          obj1298.methods["outer"] = reader_gUnit_outer1299;
          var obj_init_1298 = function() {
            var origSuperDepth = superDepth;
            superDepth = obj1298;
            var func1300 = function(argcv) {    // method countOneAssertion
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for countOneAssertion"));
              setModuleName("gUnit");
              setLineNumber(264);    // compilenode call
              onSelf = true;
              var call1302 = callmethodChecked(this, "currentCountOfAssertions", [0]);
              var opresult1304 = callmethodChecked(call1302, "+", [1], new GraceNum(1));
              onSelf = true;
              var call1305 = callmethodChecked(this, "currentCountOfAssertions:=", [1], opresult1304);
              return call1305;
            };
            func1300.paramCounts = [0];
            obj1298.methods["countOneAssertion"] = func1300;
            func1300.definitionLine = 263;
            func1300.definitionModule = "gUnit";
            var func1306 = function(argcv) {    // method testStarted(1)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_name = arguments[curarg];
              curarg++;
              if (argcv[0] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for testStarted(1)"));
              setModuleName("gUnit");
              setLineNumber(268);    // compilenode call
              onSelf = true;
              var call1308 = callmethodChecked(this, "runCount", [0]);
              var opresult1310 = callmethodChecked(call1308, "+", [1], new GraceNum(1));
              onSelf = true;
              var call1311 = callmethodChecked(this, "runCount:=", [1], opresult1310);
              setLineNumber(269);    // compilenode num
              onSelf = true;
              var call1312 = callmethodChecked(this, "currentCountOfAssertions:=", [1], new GraceNum(0));
              return call1312;
            };
            func1306.paramCounts = [1];
            obj1298.methods["testStarted"] = func1306;
            func1306.definitionLine = 267;
            func1306.definitionModule = "gUnit";
            var func1313 = function(argcv) {    // method testFinished(1)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_name = arguments[curarg];
              curarg++;
              if (argcv[0] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for testFinished(1)"));
              setModuleName("gUnit");
              var if1314 = GraceDone;
              setLineNumber(273);    // compilenode call
              onSelf = true;
              var call1316 = callmethodChecked(this, "currentCountOfAssertions", [0]);
              var opresult1318 = callmethodChecked(call1316, "==", [1], new GraceNum(0));
              if (Grace_isTrue(opresult1318)) {
                setLineNumber(274);    // compilenode string
                var string1319 = new GraceString("no assertions were checked in this test");
                var call1320 = callmethodChecked(superDepth, "outer", [0]);
                onOuter = true;
                onSelf = true;
                var call1321 = callmethodChecked(call1320, "testRecordFor()message", [1, 1], var_name, string1319);
                onSelf = true;
                var call1322 = callmethodChecked(this, "failSet", [0]);
                var call1323 = callmethodChecked(call1322, "add", [1], call1321);
                if1314 = call1323;
              }
              return if1314;
            };
            func1313.paramCounts = [1];
            obj1298.methods["testFinished"] = func1313;
            func1313.definitionLine = 272;
            func1313.definitionModule = "gUnit";
            var func1324 = function(argcv) {    // method testFailed(1)withMessage(1)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_name = arguments[curarg];
              curarg++;
              if (argcv[0] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for testFailed (arg list 1) of testFailed(1)withMessage(1)"));
              var var_msg = arguments[curarg];
              curarg++;
              if (argcv[1] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for withMessage (arg list 2) of testFailed(1)withMessage(1)"));
              setModuleName("gUnit");
              setLineNumber(279);    // compilenode call
              var call1325 = callmethodChecked(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1326 = callmethodChecked(call1325, "testRecordFor()message", [1, 1], var_name, var_msg);
              onSelf = true;
              var call1327 = callmethodChecked(this, "failSet", [0]);
              var call1328 = callmethodChecked(call1327, "add", [1], call1326);
              return call1328;
            };
            func1324.paramCounts = [1, 1];
            obj1298.methods["testFailed()withMessage"] = func1324;
            func1324.definitionLine = 278;
            func1324.definitionModule = "gUnit";
            var func1329 = function(argcv) {    // method testErrored(1)withMessage(1)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_name = arguments[curarg];
              curarg++;
              if (argcv[0] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for testErrored (arg list 1) of testErrored(1)withMessage(1)"));
              var var_msg = arguments[curarg];
              curarg++;
              if (argcv[1] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for withMessage (arg list 2) of testErrored(1)withMessage(1)"));
              setModuleName("gUnit");
              setLineNumber(283);    // compilenode call
              var call1330 = callmethodChecked(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1331 = callmethodChecked(call1330, "testRecordFor()message", [1, 1], var_name, var_msg);
              onSelf = true;
              var call1332 = callmethodChecked(this, "errorSet", [0]);
              var call1333 = callmethodChecked(call1332, "add", [1], call1331);
              setLineNumber(284);    // compilenode num
              onSelf = true;
              var call1334 = callmethodChecked(this, "currentCountOfAssertions:=", [1], new GraceNum(1));
              return call1334;
            };
            func1329.paramCounts = [1, 1];
            obj1298.methods["testErrored()withMessage"] = func1329;
            func1329.definitionLine = 282;
            func1329.definitionModule = "gUnit";
            var func1335 = function(argcv) {    // method summary
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for summary"));
              setModuleName("gUnit");
              var if1336 = GraceDone;
              setLineNumber(288);    // compilenode call
              onSelf = true;
              var call1338 = callmethodChecked(this, "numberOfErrors", [0]);
              var opresult1340 = callmethodChecked(call1338, "==", [1], new GraceNum(1));
              if (Grace_isTrue(opresult1340)) {
                var string1341 = new GraceString("");
                if1336 = string1341;
              } else {
                var string1342 = new GraceString("s");
                if1336 = string1342;
              }
              var var_s = if1336;
              setLineNumber(289);    // compilenode string
              var string1343 = new GraceString("");
              var string1346 = new GraceString(" error");
              onSelf = true;
              var call1348 = callmethodChecked(this, "numberOfErrors", [0]);
              var string1350 = new GraceString(" failed, ");
              onSelf = true;
              var call1352 = callmethodChecked(this, "numberOfFailures", [0]);
              var string1354 = new GraceString(" run, ");
              onSelf = true;
              var call1356 = callmethodChecked(this, "runCount", [0]);
              var string1358 = new GraceString("");
              var opresult1360 = callmethodChecked(string1358, "++", [1], call1356);
              var opresult1362 = callmethodChecked(opresult1360, "++", [1], string1354);
              var opresult1364 = callmethodChecked(opresult1362, "++", [1], call1352);
              var opresult1366 = callmethodChecked(opresult1364, "++", [1], string1350);
              var opresult1368 = callmethodChecked(opresult1366, "++", [1], call1348);
              var opresult1370 = callmethodChecked(opresult1368, "++", [1], string1346);
              var opresult1372 = callmethodChecked(opresult1370, "++", [1], var_s);
              var opresult1374 = callmethodChecked(opresult1372, "++", [1], string1343);
              return opresult1374;
            };
            func1335.paramCounts = [0];
            obj1298.methods["summary"] = func1335;
            func1335.definitionLine = 287;
            func1335.definitionModule = "gUnit";
            var func1375 = function(argcv) {    // method detailedSummary
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for detailedSummary"));
              setModuleName("gUnit");
              setLineNumber(293);    // compilenode call
              onSelf = true;
              var call1376 = callmethodChecked(this, "summary", [0]);
              var var_output = call1376;
              var if1377 = GraceDone;
              setLineNumber(294);    // compilenode call
              onSelf = true;
              var call1379 = callmethodChecked(this, "numberOfFailures", [0]);
              var opresult1381 = callmethodChecked(call1379, ">", [1], new GraceNum(0));
              if (Grace_isTrue(opresult1381)) {
                setLineNumber(295);    // compilenode string
                var string1382 = new GraceString("\nFailures:");
                var opresult1385 = callmethodChecked(var_output, "++", [1], string1382);
                var_output = opresult1385;
                setLineNumber(296);    // compilenode call
                onSelf = true;
                var call1386 = callmethodChecked(this, "failSet", [0]);
                var call1387 = callmethodChecked(call1386, "asList", [0]);
                var call1388 = callmethodChecked(call1387, "sort", [0]);
                var block1389 = new GraceBlock(this, 296, 1);
                setLineNumber(1);    // compilenode identifier
                block1389.real = function(var_each) {
                  setLineNumber(297);    // compilenode string
                  var string1391 = new GraceString("\n    ");
                  var opresult1394 = callmethodChecked(var_output, "++", [1], string1391);
                  var opresult1396 = callmethodChecked(opresult1394, "++", [1], var_each);
                  var_output = opresult1396;
                  return GraceDone;
                };
                var call1397 = callmethodChecked(var_prelude, "for()do", [1, 1], call1388, block1389);
                if1377 = call1397;
              }
              var if1398 = GraceDone;
              setLineNumber(300);    // compilenode call
              onSelf = true;
              var call1400 = callmethodChecked(this, "numberOfErrors", [0]);
              var opresult1402 = callmethodChecked(call1400, ">", [1], new GraceNum(0));
              if (Grace_isTrue(opresult1402)) {
                setLineNumber(301);    // compilenode string
                var string1403 = new GraceString("\nErrors:");
                var opresult1406 = callmethodChecked(var_output, "++", [1], string1403);
                var_output = opresult1406;
                setLineNumber(302);    // compilenode call
                onSelf = true;
                var call1407 = callmethodChecked(this, "errorSet", [0]);
                var call1408 = callmethodChecked(call1407, "asList", [0]);
                var call1409 = callmethodChecked(call1408, "sort", [0]);
                var block1410 = new GraceBlock(this, 302, 1);
                setLineNumber(1);    // compilenode identifier
                block1410.real = function(var_each) {
                  setLineNumber(303);    // compilenode string
                  var string1412 = new GraceString("\n    ");
                  var opresult1415 = callmethodChecked(var_output, "++", [1], string1412);
                  var opresult1417 = callmethodChecked(opresult1415, "++", [1], var_each);
                  var_output = opresult1417;
                  return GraceDone;
                };
                var call1418 = callmethodChecked(var_prelude, "for()do", [1, 1], call1409, block1410);
                if1398 = call1418;
              }
              setLineNumber(306);    // compilenode identifier
              return var_output;
            };
            func1375.paramCounts = [0];
            obj1298.methods["detailedSummary"] = func1375;
            func1375.definitionLine = 292;
            func1375.definitionModule = "gUnit";
            var func1419 = function(argcv) {    // method numberOfErrors
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for numberOfErrors"));
              setModuleName("gUnit");
              setLineNumber(310);    // compilenode call
              onSelf = true;
              var call1420 = callmethodChecked(this, "errorSet", [0]);
              var call1421 = callmethodChecked(call1420, "size", [0]);
              return call1421;
            };
            func1419.paramCounts = [0];
            obj1298.methods["numberOfErrors"] = func1419;
            func1419.definitionLine = 309;
            func1419.definitionModule = "gUnit";
            var func1422 = function(argcv) {    // method errors
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for errors"));
              setModuleName("gUnit");
              setLineNumber(314);    // compilenode call
              onSelf = true;
              var call1423 = callmethodChecked(this, "errorSet", [0]);
              var call1424 = callmethodChecked(var_prelude, "list", [1], call1423);
              var call1425 = callmethodChecked(call1424, "sort", [0]);
              return call1425;
            };
            func1422.paramCounts = [0];
            obj1298.methods["errors"] = func1422;
            func1422.definitionLine = 313;
            func1422.definitionModule = "gUnit";
            var func1426 = function(argcv) {    // method erroredTestNames
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for erroredTestNames"));
              setModuleName("gUnit");
              setLineNumber(318);    // compilenode block
              var block1427 = new GraceBlock(this, 318, 1);
              setLineNumber(1);    // compilenode identifier
              block1427.real = function(var_each) {
                setLineNumber(318);    // compilenode identifier
                var call1428 = callmethodChecked(var_each, "name", [0]);
                return call1428;
              };
              onSelf = true;
              var call1429 = callmethodChecked(this, "errorSet", [0]);
              var call1430 = callmethodChecked(call1429, "map", [1], block1427);
              var call1431 = callmethodChecked(call1430, "asList", [0]);
              var call1432 = callmethodChecked(call1431, "sort", [0]);
              return call1432;
            };
            func1426.paramCounts = [0];
            obj1298.methods["erroredTestNames"] = func1426;
            func1426.definitionLine = 317;
            func1426.definitionModule = "gUnit";
            var func1433 = function(argcv) {    // method numberOfFailures
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for numberOfFailures"));
              setModuleName("gUnit");
              setLineNumber(322);    // compilenode call
              onSelf = true;
              var call1434 = callmethodChecked(this, "failSet", [0]);
              var call1435 = callmethodChecked(call1434, "size", [0]);
              return call1435;
            };
            func1433.paramCounts = [0];
            obj1298.methods["numberOfFailures"] = func1433;
            func1433.definitionLine = 321;
            func1433.definitionModule = "gUnit";
            var func1436 = function(argcv) {    // method failures
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for failures"));
              setModuleName("gUnit");
              setLineNumber(326);    // compilenode call
              onSelf = true;
              var call1437 = callmethodChecked(this, "failSet", [0]);
              var call1438 = callmethodChecked(var_prelude, "list", [1], call1437);
              var call1439 = callmethodChecked(call1438, "sort", [0]);
              return call1439;
            };
            func1436.paramCounts = [0];
            obj1298.methods["failures"] = func1436;
            func1436.definitionLine = 325;
            func1436.definitionModule = "gUnit";
            var func1440 = function(argcv) {    // method failedTestNames
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for failedTestNames"));
              setModuleName("gUnit");
              setLineNumber(330);    // compilenode block
              var block1441 = new GraceBlock(this, 330, 1);
              setLineNumber(1);    // compilenode identifier
              block1441.real = function(var_each) {
                setLineNumber(330);    // compilenode identifier
                var call1442 = callmethodChecked(var_each, "name", [0]);
                return call1442;
              };
              onSelf = true;
              var call1443 = callmethodChecked(this, "failSet", [0]);
              var call1444 = callmethodChecked(call1443, "map", [1], block1441);
              var call1445 = callmethodChecked(call1444, "asList", [0]);
              var call1446 = callmethodChecked(call1445, "sort", [0]);
              return call1446;
            };
            func1440.paramCounts = [0];
            obj1298.methods["failedTestNames"] = func1440;
            func1440.definitionLine = 329;
            func1440.definitionModule = "gUnit";
            var func1447 = function(argcv) {    // method numberRun
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for numberRun"));
              setModuleName("gUnit");
              setLineNumber(334);    // compilenode call
              onSelf = true;
              var call1448 = callmethodChecked(this, "runCount", [0]);
              return call1448;
            };
            func1447.paramCounts = [0];
            obj1298.methods["numberRun"] = func1447;
            func1447.definitionLine = 333;
            func1447.definitionModule = "gUnit";
            setLineNumber(258);    // compilenode call
            var call1449 = callmethodChecked(var_prelude, "emptySet", [0]);
            obj1298.data["failSet"] = call1449;
            var reader_gUnit_failSet1450 = function() {
              return this.data["failSet"];
            };
            obj1298.methods["failSet"] = reader_gUnit_failSet1450;
            obj1298.data["failSet"] = call1449;
            var writer_gUnit_failSet1450 = function(argcv, o) {
              this.data["failSet"] = o;
              return GraceDone;
            };
            obj1298.methods["failSet:="] = writer_gUnit_failSet1450;
            reader_gUnit_failSet1450.confidential = true;
            writer_gUnit_failSet1450.confidential = true;
            obj1298.mutable = true;
            setLineNumber(259);    // compilenode call
            var call1451 = callmethodChecked(var_prelude, "emptySet", [0]);
            obj1298.data["errorSet"] = call1451;
            var reader_gUnit_errorSet1452 = function() {
              return this.data["errorSet"];
            };
            obj1298.methods["errorSet"] = reader_gUnit_errorSet1452;
            obj1298.data["errorSet"] = call1451;
            var writer_gUnit_errorSet1452 = function(argcv, o) {
              this.data["errorSet"] = o;
              return GraceDone;
            };
            obj1298.methods["errorSet:="] = writer_gUnit_errorSet1452;
            reader_gUnit_errorSet1452.confidential = true;
            writer_gUnit_errorSet1452.confidential = true;
            obj1298.mutable = true;
            setLineNumber(260);    // compilenode num
            obj1298.data["runCount"] = new GraceNum(0);
            var reader_gUnit_runCount1453 = function() {
              return this.data["runCount"];
            };
            obj1298.methods["runCount"] = reader_gUnit_runCount1453;
            obj1298.data["runCount"] = new GraceNum(0);
            var writer_gUnit_runCount1453 = function(argcv, o) {
              this.data["runCount"] = o;
              return GraceDone;
            };
            obj1298.methods["runCount:="] = writer_gUnit_runCount1453;
            reader_gUnit_runCount1453.confidential = true;
            writer_gUnit_runCount1453.confidential = true;
            obj1298.mutable = true;
            setLineNumber(261);    // compilenode num
            obj1298.data["currentCountOfAssertions"] = new GraceNum(0);
            var reader_gUnit_currentCountOfAssertions1454 = function() {
              return this.data["currentCountOfAssertions"];
            };
            obj1298.methods["currentCountOfAssertions"] = reader_gUnit_currentCountOfAssertions1454;
            obj1298.data["currentCountOfAssertions"] = new GraceNum(0);
            var writer_gUnit_currentCountOfAssertions1454 = function(argcv, o) {
              this.data["currentCountOfAssertions"] = o;
              return GraceDone;
            };
            obj1298.methods["currentCountOfAssertions:="] = writer_gUnit_currentCountOfAssertions1454;
            reader_gUnit_currentCountOfAssertions1454.confidential = true;
            writer_gUnit_currentCountOfAssertions1454.confidential = true;
            obj1298.mutable = true;
            superDepth = origSuperDepth;
          };
          obj_init_1298.apply(inheritingObject, []);
          return obj1298;
          };
          this.methods["testResult()object"] = func1297;
        setLineNumber(338);    // compilenode method
        var func1455 = function(argcv) {    // method testRecordFor(1)message(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_testName = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for testRecordFor (arg list 1) of testRecordFor(1)message(1)"));
          var var_testMsg = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for message (arg list 2) of testRecordFor(1)message(1)"));
          setModuleName("gUnit");
          var obj1456 = Grace_allocObject(GraceObject, "gUnit.testRecordFor()message");
          obj1456.definitionModule = "gUnit";
          obj1456.definitionLine = 338;
          obj1456.outer = this;
          var reader_gUnit_outer1457 = function() {
            return this.outer;
          };
          obj1456.methods["outer"] = reader_gUnit_outer1457;
          var obj_init_1456 = function() {
            var origSuperDepth = superDepth;
            superDepth = obj1456;
            var func1458 = function(argcv) {    // method name
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for name"));
              setModuleName("gUnit");
              // name is a simple accessor - elide try ... catch
              setLineNumber(339);    // compilenode identifier
              return var_testName;
            };
            func1458.paramCounts = [0];
            obj1456.methods["name"] = func1458;
            func1458.definitionLine = 339;
            func1458.definitionModule = "gUnit";
            var func1459 = function(argcv) {    // method message
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for message"));
              setModuleName("gUnit");
              // message is a simple accessor - elide try ... catch
              setLineNumber(340);    // compilenode identifier
              return var_testMsg;
            };
            func1459.paramCounts = [0];
            obj1456.methods["message"] = func1459;
            func1459.definitionLine = 340;
            func1459.definitionModule = "gUnit";
            var func1460 = function(argcv) {    // method asString
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
              setModuleName("gUnit");
              setLineNumber(341);    // compilenode string
              var string1461 = new GraceString("");
              var string1464 = new GraceString(": ");
              onSelf = true;
              var call1466 = callmethodChecked(this, "name", [0]);
              var string1468 = new GraceString("");
              var opresult1470 = callmethodChecked(string1468, "++", [1], call1466);
              var opresult1472 = callmethodChecked(opresult1470, "++", [1], string1464);
              var opresult1474 = callmethodChecked(opresult1472, "++", [1], var_testMsg);
              var opresult1476 = callmethodChecked(opresult1474, "++", [1], string1461);
              return opresult1476;
            };
            func1460.paramCounts = [0];
            obj1456.methods["asString"] = func1460;
            func1460.definitionLine = 341;
            func1460.definitionModule = "gUnit";
            var func1477 = function(argcv) {    // method hash
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for hash"));
              setModuleName("gUnit");
              setLineNumber(342);    // compilenode call
              onSelf = true;
              var call1478 = callmethodChecked(this, "name", [0]);
              var call1479 = callmethodChecked(call1478, "hash", [0]);
              return call1479;
            };
            func1477.paramCounts = [0];
            obj1456.methods["hash"] = func1477;
            func1477.definitionLine = 342;
            func1477.definitionModule = "gUnit";
            var func1480 = function(argcv) {    // method compare(1)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_other = arguments[curarg];
              curarg++;
              if (argcv[0] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compare(1)"));
              setModuleName("gUnit");
              setLineNumber(343);    // compilenode identifier
              var call1481 = callmethodChecked(var_other, "name", [0]);
              onSelf = true;
              var call1482 = callmethodChecked(this, "name", [0]);
              var call1483 = callmethodChecked(call1482, "compare", [1], call1481);
              return call1483;
            };
            func1480.paramCounts = [1];
            obj1456.methods["compare"] = func1480;
            func1480.definitionLine = 343;
            func1480.definitionModule = "gUnit";
            var func1484 = function(argcv) {    // method <(1)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_other = arguments[curarg];
              curarg++;
              if (argcv[0] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for <(1)"));
              setModuleName("gUnit");
              setLineNumber(344);    // compilenode identifier
              var call1485 = callmethodChecked(var_other, "name", [0]);
              onSelf = true;
              var call1487 = callmethodChecked(this, "name", [0]);
              var opresult1489 = callmethodChecked(call1487, "<", [1], call1485);
              return opresult1489;
            };
            func1484.paramCounts = [1];
            obj1456.methods["<"] = func1484;
            func1484.definitionLine = 344;
            func1484.definitionModule = "gUnit";
            var func1490 = function(argcv) {    // method ≤(1)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_other = arguments[curarg];
              curarg++;
              if (argcv[0] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ≤(1)"));
              setModuleName("gUnit");
              setLineNumber(345);    // compilenode identifier
              var call1491 = callmethodChecked(var_other, "name", [0]);
              onSelf = true;
              var call1493 = callmethodChecked(this, "name", [0]);
              var opresult1495 = callmethodChecked(call1493, "\u2264", [1], call1491);
              return opresult1495;
            };
            func1490.paramCounts = [1];
            obj1456.methods["\u2264"] = func1490;
            func1490.definitionLine = 345;
            func1490.definitionModule = "gUnit";
            var func1496 = function(argcv) {    // method ==(1)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_other = arguments[curarg];
              curarg++;
              if (argcv[0] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ==(1)"));
              setModuleName("gUnit");
              setLineNumber(346);    // compilenode identifier
              var call1497 = callmethodChecked(var_other, "name", [0]);
              onSelf = true;
              var call1499 = callmethodChecked(this, "name", [0]);
              var opresult1501 = callmethodChecked(call1499, "==", [1], call1497);
              return opresult1501;
            };
            func1496.paramCounts = [1];
            obj1456.methods["=="] = func1496;
            func1496.definitionLine = 346;
            func1496.definitionModule = "gUnit";
            var func1502 = function(argcv) {    // method >(1)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_other = arguments[curarg];
              curarg++;
              if (argcv[0] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for >(1)"));
              setModuleName("gUnit");
              setLineNumber(347);    // compilenode identifier
              var call1503 = callmethodChecked(var_other, "name", [0]);
              onSelf = true;
              var call1505 = callmethodChecked(this, "name", [0]);
              var opresult1507 = callmethodChecked(call1505, "<", [1], call1503);
              return opresult1507;
            };
            func1502.paramCounts = [1];
            obj1456.methods[">"] = func1502;
            func1502.definitionLine = 347;
            func1502.definitionModule = "gUnit";
            var func1508 = function(argcv) {    // method ≥(1)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_other = arguments[curarg];
              curarg++;
              if (argcv[0] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ≥(1)"));
              setModuleName("gUnit");
              setLineNumber(348);    // compilenode identifier
              var call1509 = callmethodChecked(var_other, "name", [0]);
              onSelf = true;
              var call1511 = callmethodChecked(this, "name", [0]);
              var opresult1513 = callmethodChecked(call1511, "\u2265", [1], call1509);
              return opresult1513;
            };
            func1508.paramCounts = [1];
            obj1456.methods["\u2265"] = func1508;
            func1508.definitionLine = 348;
            func1508.definitionModule = "gUnit";
            superDepth = origSuperDepth;
          };
          obj_init_1456.apply(obj1456, []);
          return obj1456;
        };
        func1455.paramCounts = [1, 1];
        this.methods["testRecordFor()message"] = func1455;
        func1455.definitionLine = 338;
        func1455.definitionModule = "gUnit";
          var func1514 = function(argcv) {    // method testRecordFor(1     )message(1     )()object
            var curarg = 1;
            var var_testName = arguments[curarg];
            curarg++;
            var var_testMsg = arguments[curarg];
            curarg++;
            var inheritingObject = arguments[curarg++];
            // Start argument processing
            curarg = 1;
            curarg++;
            curarg++;
            // End argument processing
            setModuleName("gUnit");
            var returnTarget = invocationCount;
            invocationCount++;
            var obj1515 = Grace_allocObject(GraceObject, "testRecordFor()message");
            obj1515.definitionModule = "gUnit";
            obj1515.definitionLine = 338;
            var inho1515 = inheritingObject;
            while (inho1515.superobj) inho1515 = inho1515.superobj;
            inho1515.superobj = obj1515;
            obj1515.data = inheritingObject.data;
            if (inheritingObject.hasOwnProperty('_value'))
              obj1515._value = inheritingObject._value;
            obj1515.outer = this;
            var reader_gUnit_outer1516 = function() {
              return this.outer;
            };
            obj1515.methods["outer"] = reader_gUnit_outer1516;
            var obj_init_1515 = function() {
              var origSuperDepth = superDepth;
              superDepth = obj1515;
              var func1517 = function(argcv) {    // method name
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                if (argcv[0] !== 0)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for name"));
                setModuleName("gUnit");
                // name is a simple accessor - elide try ... catch
                setLineNumber(339);    // compilenode identifier
                return var_testName;
              };
              func1517.paramCounts = [0];
              obj1515.methods["name"] = func1517;
              func1517.definitionLine = 339;
              func1517.definitionModule = "gUnit";
              var func1518 = function(argcv) {    // method message
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                if (argcv[0] !== 0)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for message"));
                setModuleName("gUnit");
                // message is a simple accessor - elide try ... catch
                setLineNumber(340);    // compilenode identifier
                return var_testMsg;
              };
              func1518.paramCounts = [0];
              obj1515.methods["message"] = func1518;
              func1518.definitionLine = 340;
              func1518.definitionModule = "gUnit";
              var func1519 = function(argcv) {    // method asString
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                if (argcv[0] !== 0)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                setModuleName("gUnit");
                setLineNumber(341);    // compilenode string
                var string1520 = new GraceString("");
                var string1523 = new GraceString(": ");
                onSelf = true;
                var call1525 = callmethodChecked(this, "name", [0]);
                var string1527 = new GraceString("");
                var opresult1529 = callmethodChecked(string1527, "++", [1], call1525);
                var opresult1531 = callmethodChecked(opresult1529, "++", [1], string1523);
                var opresult1533 = callmethodChecked(opresult1531, "++", [1], var_testMsg);
                var opresult1535 = callmethodChecked(opresult1533, "++", [1], string1520);
                return opresult1535;
              };
              func1519.paramCounts = [0];
              obj1515.methods["asString"] = func1519;
              func1519.definitionLine = 341;
              func1519.definitionModule = "gUnit";
              var func1536 = function(argcv) {    // method hash
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                if (argcv[0] !== 0)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for hash"));
                setModuleName("gUnit");
                setLineNumber(342);    // compilenode call
                onSelf = true;
                var call1537 = callmethodChecked(this, "name", [0]);
                var call1538 = callmethodChecked(call1537, "hash", [0]);
                return call1538;
              };
              func1536.paramCounts = [0];
              obj1515.methods["hash"] = func1536;
              func1536.definitionLine = 342;
              func1536.definitionModule = "gUnit";
              var func1539 = function(argcv) {    // method compare(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_other = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compare(1)"));
                setModuleName("gUnit");
                setLineNumber(343);    // compilenode identifier
                var call1540 = callmethodChecked(var_other, "name", [0]);
                onSelf = true;
                var call1541 = callmethodChecked(this, "name", [0]);
                var call1542 = callmethodChecked(call1541, "compare", [1], call1540);
                return call1542;
              };
              func1539.paramCounts = [1];
              obj1515.methods["compare"] = func1539;
              func1539.definitionLine = 343;
              func1539.definitionModule = "gUnit";
              var func1543 = function(argcv) {    // method <(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_other = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for <(1)"));
                setModuleName("gUnit");
                setLineNumber(344);    // compilenode identifier
                var call1544 = callmethodChecked(var_other, "name", [0]);
                onSelf = true;
                var call1546 = callmethodChecked(this, "name", [0]);
                var opresult1548 = callmethodChecked(call1546, "<", [1], call1544);
                return opresult1548;
              };
              func1543.paramCounts = [1];
              obj1515.methods["<"] = func1543;
              func1543.definitionLine = 344;
              func1543.definitionModule = "gUnit";
              var func1549 = function(argcv) {    // method ≤(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_other = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ≤(1)"));
                setModuleName("gUnit");
                setLineNumber(345);    // compilenode identifier
                var call1550 = callmethodChecked(var_other, "name", [0]);
                onSelf = true;
                var call1552 = callmethodChecked(this, "name", [0]);
                var opresult1554 = callmethodChecked(call1552, "\u2264", [1], call1550);
                return opresult1554;
              };
              func1549.paramCounts = [1];
              obj1515.methods["\u2264"] = func1549;
              func1549.definitionLine = 345;
              func1549.definitionModule = "gUnit";
              var func1555 = function(argcv) {    // method ==(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_other = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ==(1)"));
                setModuleName("gUnit");
                setLineNumber(346);    // compilenode identifier
                var call1556 = callmethodChecked(var_other, "name", [0]);
                onSelf = true;
                var call1558 = callmethodChecked(this, "name", [0]);
                var opresult1560 = callmethodChecked(call1558, "==", [1], call1556);
                return opresult1560;
              };
              func1555.paramCounts = [1];
              obj1515.methods["=="] = func1555;
              func1555.definitionLine = 346;
              func1555.definitionModule = "gUnit";
              var func1561 = function(argcv) {    // method >(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_other = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for >(1)"));
                setModuleName("gUnit");
                setLineNumber(347);    // compilenode identifier
                var call1562 = callmethodChecked(var_other, "name", [0]);
                onSelf = true;
                var call1564 = callmethodChecked(this, "name", [0]);
                var opresult1566 = callmethodChecked(call1564, "<", [1], call1562);
                return opresult1566;
              };
              func1561.paramCounts = [1];
              obj1515.methods[">"] = func1561;
              func1561.definitionLine = 347;
              func1561.definitionModule = "gUnit";
              var func1567 = function(argcv) {    // method ≥(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_other = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ≥(1)"));
                setModuleName("gUnit");
                setLineNumber(348);    // compilenode identifier
                var call1568 = callmethodChecked(var_other, "name", [0]);
                onSelf = true;
                var call1570 = callmethodChecked(this, "name", [0]);
                var opresult1572 = callmethodChecked(call1570, "\u2265", [1], call1568);
                return opresult1572;
              };
              func1567.paramCounts = [1];
              obj1515.methods["\u2265"] = func1567;
              func1567.definitionLine = 348;
              func1567.definitionModule = "gUnit";
              superDepth = origSuperDepth;
            };
            obj_init_1515.apply(inheritingObject, []);
            return obj1515;
            };
            this.methods["testRecordFor()message()object"] = func1514;
          setLineNumber(460);    // compilenode method
          var func1573 = function(argcv) {    // method className(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_testClass = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for className(1)"));
            setModuleName("gUnit");
            setLineNumber(461);    // compilenode identifier
            var call1574 = callmethodChecked(var_testClass, "asString", [0]);
            var var_cName = call1574;
            var if1575 = GraceDone;
            setLineNumber(462);    // compilenode string
            var string1576 = new GraceString("class ");
            var call1577 = callmethodChecked(var_cName, "startsWith", [1], string1576);
            if (Grace_isTrue(call1577)) {
              setLineNumber(463);    // compilenode identifier
              var call1578 = callmethodChecked(var_cName, "size", [0]);
              var call1579 = callmethodChecked(var_cName, "substringFrom()to", [1, 1], new GraceNum(7), call1578);
              if1575 = call1579;
            } else {
              var if1580 = GraceDone;
              setLineNumber(464);    // compilenode string
              var string1581 = new GraceString("trait ");
              var call1582 = callmethodChecked(var_cName, "startsWith", [1], string1581);
              if (Grace_isTrue(call1582)) {
                setLineNumber(465);    // compilenode identifier
                var call1583 = callmethodChecked(var_cName, "size", [0]);
                var call1584 = callmethodChecked(var_cName, "substringFrom()to", [1, 1], new GraceNum(7), call1583);
                if1580 = call1584;
              } else {
                var if1585 = GraceDone;
                setLineNumber(466);    // compilenode string
                var string1586 = new GraceString("a ");
                var call1587 = callmethodChecked(var_cName, "startsWith", [1], string1586);
                if (Grace_isTrue(call1587)) {
                  setLineNumber(467);    // compilenode identifier
                  var call1588 = callmethodChecked(var_cName, "size", [0]);
                  var call1589 = callmethodChecked(var_cName, "substringFrom()to", [1, 1], new GraceNum(3), call1588);
                  if1585 = call1589;
                } else {
                  var if1590 = GraceDone;
                  setLineNumber(468);    // compilenode string
                  var string1591 = new GraceString("an ");
                  var call1592 = callmethodChecked(var_cName, "startsWith", [1], string1591);
                  if (Grace_isTrue(call1592)) {
                    setLineNumber(469);    // compilenode identifier
                    var call1593 = callmethodChecked(var_cName, "size", [0]);
                    var call1594 = callmethodChecked(var_cName, "substringFrom()to", [1, 1], new GraceNum(4), call1593);
                    if1590 = call1594;
                  } else {
                    setLineNumber(471);    // compilenode string
                    var string1595 = new GraceString("un-named");
                    if1590 = string1595;
                  }
                  if1585 = if1590;
                }
                if1580 = if1585;
              }
              if1575 = if1580;
            }
            return if1575;
          };
          func1573.paramCounts = [1];
          this.methods["className"] = func1573;
          func1573.definitionLine = 460;
          func1573.definitionModule = "gUnit";
          setLineNumber(11);    // compilenode typedec
          // Type decl Assertion
          //   Type literal 
          var type1597 = new GraceType("Assertion");
          type1597.typeMethods.push("assert()description");
          type1597.typeMethods.push("deny()description");
          type1597.typeMethods.push("assert");
          type1597.typeMethods.push("deny");
          type1597.typeMethods.push("assert()shouldBe");
          type1597.typeMethods.push("assert()shouldntBe");
          type1597.typeMethods.push("assert()shouldEqual()within");
          type1597.typeMethods.push("assert()shouldRaise");
          type1597.typeMethods.push("assert()shouldntRaise");
          type1597.typeMethods.push("assert()hasType");
          type1597.typeMethods.push("failBecause");
          var var_Assertion = type1597;
          setLineNumber(469);    // compilenode method
          var func1598 = function(argcv) {    // method Assertion
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Assertion"));
            setModuleName("gUnit");
            // Assertion is a simple accessor - elide try ... catch
            setLineNumber(11);    // compilenode identifier
            return var_Assertion;
          };
          func1598.paramCounts = [0];
          this.methods["Assertion"] = func1598;
          func1598.definitionLine = 469;
          func1598.definitionModule = "gUnit";
          setLineNumber(25);    // compilenode typedec
          // Type decl TestCase
          //   Type literal 
          var type1600 = new GraceType("\u2039anon\u203a");
          type1600.typeMethods.push("run");
          type1600.typeMethods.push("debug");
          type1600.typeMethods.push("size");
          type1600.typeMethods.push("name");
          var opresult1603 = callmethodChecked(var_Assertion, "&", [1], type1600);
          var var_TestCase = opresult1603;
          setLineNumber(469);    // compilenode method
          var func1604 = function(argcv) {    // method TestCase
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for TestCase"));
            setModuleName("gUnit");
            // TestCase is a simple accessor - elide try ... catch
            setLineNumber(25);    // compilenode identifier
            return var_TestCase;
          };
          func1604.paramCounts = [0];
          this.methods["TestCase"] = func1604;
          func1604.definitionLine = 469;
          func1604.definitionModule = "gUnit";
          setLineNumber(32);    // compilenode typedec
          // Type decl TestRecord
          //   Type literal 
          var type1606 = new GraceType("TestRecord");
          type1606.typeMethods.push("name");
          type1606.typeMethods.push("message");
          var var_TestRecord = type1606;
          setLineNumber(469);    // compilenode method
          var func1607 = function(argcv) {    // method TestRecord
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for TestRecord"));
            setModuleName("gUnit");
            // TestRecord is a simple accessor - elide try ... catch
            setLineNumber(32);    // compilenode identifier
            return var_TestRecord;
          };
          func1607.paramCounts = [0];
          this.methods["TestRecord"] = func1607;
          func1607.definitionLine = 469;
          func1607.definitionModule = "gUnit";
          setLineNumber(37);    // compilenode typedec
          // Type decl TestResult
          //   Type literal 
          var type1609 = new GraceType("TestResult");
          type1609.typeMethods.push("testStarted");
          type1609.typeMethods.push("testFailed");
          type1609.typeMethods.push("testErrored");
          type1609.typeMethods.push("testFinished");
          type1609.typeMethods.push("erroredTestNames");
          type1609.typeMethods.push("failedTestNames");
          type1609.typeMethods.push("summary");
          type1609.typeMethods.push("detailedSummary");
          type1609.typeMethods.push("numberOfErrors");
          type1609.typeMethods.push("errors");
          type1609.typeMethods.push("numberOfFailures");
          type1609.typeMethods.push("failures");
          type1609.typeMethods.push("numberRun");
          type1609.typeMethods.push("doNotRerunErrors");
          type1609.typeMethods.push("doRerunErrors");
          var var_TestResult = type1609;
          setLineNumber(469);    // compilenode method
          var func1610 = function(argcv) {    // method TestResult
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for TestResult"));
            setModuleName("gUnit");
            // TestResult is a simple accessor - elide try ... catch
            setLineNumber(37);    // compilenode identifier
            return var_TestResult;
          };
          func1610.paramCounts = [0];
          this.methods["TestResult"] = func1610;
          func1610.definitionLine = 469;
          func1610.definitionModule = "gUnit";
          setLineNumber(55);    // compilenode typedec
          // Type decl TestSuite
          //   Type literal 
          var type1612 = new GraceType("\u2039anon\u203a");
          type1612.typeMethods.push("add");
          type1612.typeMethods.push("rerunErrors");
          var opresult1615 = callmethodChecked(var_TestCase, "&", [1], type1612);
          var var_TestSuite = opresult1615;
          setLineNumber(469);    // compilenode method
          var func1616 = function(argcv) {    // method TestSuite
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for TestSuite"));
            setModuleName("gUnit");
            // TestSuite is a simple accessor - elide try ... catch
            setLineNumber(55);    // compilenode identifier
            return var_TestSuite;
          };
          func1616.paramCounts = [0];
          this.methods["TestSuite"] = func1616;
          func1616.definitionLine = 469;
          func1616.definitionModule = "gUnit";
          setLineNumber(60);    // compilenode num
          var var_numberOfErrorsToRerun = new GraceNum(10);
          setLineNumber(469);    // compilenode method
          var func1617 = function(argcv) {    // method numberOfErrorsToRerun
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for numberOfErrorsToRerun"));
            setModuleName("gUnit");
            // numberOfErrorsToRerun is a simple accessor - elide try ... catch
            setLineNumber(60);    // compilenode identifier
            return var_numberOfErrorsToRerun;
          };
          func1617.paramCounts = [0];
          this.methods["numberOfErrorsToRerun"] = func1617;
          func1617.definitionLine = 469;
          func1617.definitionModule = "gUnit";
          setLineNumber(469);    // compilenode method
          var func1618 = function(argcv) {    // method numberOfErrorsToRerun:=(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var___95__var__95__assign__95__tmp = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for numberOfErrorsToRerun:=(1)"));
            setModuleName("gUnit");
            var_numberOfErrorsToRerun = var___95__var__95__assign__95__tmp;
            return GraceDone;
          };
          func1618.paramCounts = [1];
          this.methods["numberOfErrorsToRerun:="] = func1618;
          func1618.definitionLine = 469;
          func1618.definitionModule = "gUnit";
          this.methods["numberOfErrorsToRerun"].debug = "var";
          setLineNumber(351);    // compilenode object
          var obj1619 = Grace_allocObject(GraceObject, "testSuite");
          obj1619.definitionModule = "gUnit";
          obj1619.definitionLine = 351;
          obj1619.outer = this;
          var reader_gUnit_outer1620 = function() {
            return this.outer;
          };
          obj1619.methods["outer"] = reader_gUnit_outer1620;
          var obj_init_1619 = function() {
            var origSuperDepth = superDepth;
            superDepth = obj1619;
            var func1621 = function(argcv) {    // method withAll(1)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_initialContents = arguments[curarg];
              curarg++;
              if (argcv[0] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for withAll(1)"));
              setModuleName("gUnit");
              setLineNumber(353);    // compilenode object
              var obj1622 = Grace_allocObject(null, "testSuite.withAll");
              obj1622.definitionModule = "gUnit";
              obj1622.definitionLine = 353;
              obj1622.outer = this;
              var reader_gUnit_outer1623 = function() {
                return this.outer;
              };
              obj1622.methods["outer"] = reader_gUnit_outer1623;
              var obj_init_1622 = function() {
                var origSuperDepth = superDepth;
                superDepth = obj1622;
                var func1624 = function(argcv) {    // method doNotRerunErrors
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  if (argcv[0] !== 0)
                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for doNotRerunErrors"));
                  setModuleName("gUnit");
                  setLineNumber(360);    // compilenode identifier
                  onSelf = true;
                  var call1625 = callmethodChecked(this, "errorsToBeRerun:=", [1], GraceFalse);
                  return call1625;
                };
                func1624.paramCounts = [0];
                obj1622.methods["doNotRerunErrors"] = func1624;
                func1624.definitionLine = 360;
                func1624.definitionModule = "gUnit";
                var func1626 = function(argcv) {    // method doRerunErrors
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  if (argcv[0] !== 0)
                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for doRerunErrors"));
                  setModuleName("gUnit");
                  setLineNumber(361);    // compilenode identifier
                  onSelf = true;
                  var call1627 = callmethodChecked(this, "errorsToBeRerun:=", [1], GraceTrue);
                  return call1627;
                };
                func1626.paramCounts = [0];
                obj1622.methods["doRerunErrors"] = func1626;
                func1626.definitionLine = 361;
                func1626.definitionModule = "gUnit";
                var func1628 = function(argcv) {    // method add(1)
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  var var_e = arguments[curarg];
                  curarg++;
                  if (argcv[0] !== 1)
                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for add(1)"));
                  setModuleName("gUnit");
                  setLineNumber(365);    // compilenode identifier
                  var call1629 = callmethodChecked(var_e, "name", [0]);
                  var var_eName = call1629;
                  var if1630 = GraceDone;
                  setLineNumber(366);    // compilenode call
                  onSelf = true;
                  var call1631 = callmethodChecked(this, "testNames", [0]);
                  var call1632 = callmethodChecked(call1631, "contains", [1], var_eName);
                  if (Grace_isTrue(call1632)) {
                    setLineNumber(367);    // compilenode string
                    var string1633 = new GraceString("\"");
                    var string1636 = new GraceString("Warning: more than one test named \"");
                    var opresult1638 = callmethodChecked(string1636, "++", [1], var_eName);
                    var opresult1640 = callmethodChecked(opresult1638, "++", [1], string1633);
                    var call1641 = Grace_print(opresult1640);
                    if1630 = call1641;
                  } else {
                    setLineNumber(369);    // compilenode call
                    onSelf = true;
                    var call1642 = callmethodChecked(this, "testNames", [0]);
                    var call1643 = callmethodChecked(call1642, "add", [1], var_eName);
                    if1630 = call1643;
                  }
                  setLineNumber(371);    // compilenode call
                  onSelf = true;
                  var call1644 = callmethodChecked(this, "tests", [0]);
                  var call1645 = callmethodChecked(call1644, "push", [1], var_e);
                  return call1645;
                };
                func1628.paramCounts = [1];
                obj1622.methods["add"] = func1628;
                func1628.definitionLine = 364;
                func1628.definitionModule = "gUnit";
                var func1646 = function(argcv) {    // method run(1)
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  var var_result = arguments[curarg];
                  curarg++;
                  if (argcv[0] !== 1)
                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for run(1)"));
                  setModuleName("gUnit");
                  setLineNumber(375);    // compilenode call
                  onSelf = true;
                  var call1647 = callmethodChecked(this, "tests", [0]);
                  var block1648 = new GraceBlock(this, 375, 1);
                  setLineNumber(1);    // compilenode identifier
                  block1648.real = function(var_each) {
                    setLineNumber(375);    // compilenode identifier
                    var call1649 = callmethodChecked(var_each, "run", [1], var_result);
                    return call1649;
                  };
                  var call1650 = callmethodChecked(var_prelude, "for()do", [1, 1], call1647, block1648);
                  return call1650;
                };
                func1646.paramCounts = [1];
                obj1622.methods["run"] = func1646;
                func1646.definitionLine = 374;
                func1646.definitionModule = "gUnit";
                var func1651 = function(argcv) {    // method debug(1)
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  var var_result = arguments[curarg];
                  curarg++;
                  if (argcv[0] !== 1)
                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for debug(1)"));
                  setModuleName("gUnit");
                  setLineNumber(379);    // compilenode call
                  onSelf = true;
                  var call1652 = callmethodChecked(this, "tests", [0]);
                  var block1653 = new GraceBlock(this, 379, 1);
                  setLineNumber(1);    // compilenode identifier
                  block1653.real = function(var_each) {
                    setLineNumber(379);    // compilenode identifier
                    var call1654 = callmethodChecked(var_each, "debug", [1], var_result);
                    return call1654;
                  };
                  var call1655 = callmethodChecked(var_prelude, "for()do", [1, 1], call1652, block1653);
                  return call1655;
                };
                func1651.paramCounts = [1];
                obj1622.methods["debug"] = func1651;
                func1651.definitionLine = 378;
                func1651.definitionModule = "gUnit";
                var func1656 = function(argcv) {    // method size
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  if (argcv[0] !== 0)
                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for size"));
                  setModuleName("gUnit");
                  setLineNumber(382);    // compilenode call
                  onSelf = true;
                  var call1657 = callmethodChecked(this, "tests", [0]);
                  var call1658 = callmethodChecked(call1657, "size", [0]);
                  return call1658;
                };
                func1656.paramCounts = [0];
                obj1622.methods["size"] = func1656;
                func1656.definitionLine = 382;
                func1656.definitionModule = "gUnit";
                var func1659 = function(argcv) {    // method runAndPrintResults
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  if (argcv[0] !== 0)
                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for runAndPrintResults"));
                  setModuleName("gUnit");
                  setLineNumber(385);    // compilenode call
                  var call1660 = callmethodChecked(superDepth, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call1661 = callmethodChecked(call1660, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call1662 = callmethodChecked(call1661, "testResult", [0]);
                  var var_result = call1662;
                  setLineNumber(386);    // compilenode identifier
                  onSelf = true;
                  var call1663 = callmethodChecked(this, "run", [1], var_result);
                  var if1664 = GraceDone;
                  setLineNumber(387);    // compilenode string
                  var string1665 = new GraceString("");
                  onSelf = true;
                  var call1667 = callmethodChecked(this, "name", [0]);
                  var opresult1669 = callmethodChecked(call1667, "==", [1], string1665);
                  if (Grace_isTrue(opresult1669)) {
                    setLineNumber(388);    // compilenode string
                    var string1670 = new GraceString("");
                    var call1672 = callmethodChecked(var_result, "detailedSummary", [0]);
                    var string1674 = new GraceString("");
                    var opresult1676 = callmethodChecked(string1674, "++", [1], call1672);
                    var opresult1678 = callmethodChecked(opresult1676, "++", [1], string1670);
                    var call1679 = Grace_print(opresult1678);
                    if1664 = call1679;
                  } else {
                    setLineNumber(390);    // compilenode string
                    var string1680 = new GraceString("");
                    var call1682 = callmethodChecked(var_result, "detailedSummary", [0]);
                    var string1684 = new GraceString(": ");
                    onSelf = true;
                    var call1686 = callmethodChecked(this, "name", [0]);
                    var string1688 = new GraceString("");
                    var opresult1690 = callmethodChecked(string1688, "++", [1], call1686);
                    var opresult1692 = callmethodChecked(opresult1690, "++", [1], string1684);
                    var opresult1694 = callmethodChecked(opresult1692, "++", [1], call1682);
                    var opresult1696 = callmethodChecked(opresult1694, "++", [1], string1680);
                    var call1697 = Grace_print(opresult1696);
                    if1664 = call1697;
                  }
                  var if1698 = GraceDone;
                  setLineNumber(392);    // compilenode call
                  onSelf = true;
                  var call1699 = callmethodChecked(this, "errorsToBeRerun", [0]);
                  var call1702 = callmethodChecked(var_result, "numberOfErrors", [0]);
                  var opresult1704 = callmethodChecked(call1702, ">", [1], new GraceNum(0));
                  var opresult1706 = callmethodChecked(opresult1704, "&&", [1], call1699);
                  if (Grace_isTrue(opresult1706)) {
                    setLineNumber(393);    // compilenode identifier
                    onSelf = true;
                    var call1707 = callmethodChecked(this, "rerunErrors", [1], var_result);
                    if1698 = call1707;
                  }
                  return if1698;
                };
                func1659.paramCounts = [0];
                obj1622.methods["runAndPrintResults"] = func1659;
                func1659.definitionLine = 384;
                func1659.definitionModule = "gUnit";
                var func1708 = function(argcv) {    // method debugAndPrintResults
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  if (argcv[0] !== 0)
                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for debugAndPrintResults"));
                  setModuleName("gUnit");
                  setLineNumber(398);    // compilenode call
                  var call1709 = callmethodChecked(superDepth, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call1710 = callmethodChecked(call1709, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call1711 = callmethodChecked(call1710, "testResult", [0]);
                  var var_result = call1711;
                  setLineNumber(399);    // compilenode identifier
                  onSelf = true;
                  var call1712 = callmethodChecked(this, "debug", [1], var_result);
                  var if1713 = GraceDone;
                  setLineNumber(400);    // compilenode string
                  var string1714 = new GraceString("");
                  onSelf = true;
                  var call1716 = callmethodChecked(this, "name", [0]);
                  var opresult1718 = callmethodChecked(call1716, "==", [1], string1714);
                  if (Grace_isTrue(opresult1718)) {
                    setLineNumber(401);    // compilenode string
                    var string1719 = new GraceString("");
                    var call1721 = callmethodChecked(var_result, "detailedSummary", [0]);
                    var string1723 = new GraceString("");
                    var opresult1725 = callmethodChecked(string1723, "++", [1], call1721);
                    var opresult1727 = callmethodChecked(opresult1725, "++", [1], string1719);
                    var call1728 = Grace_print(opresult1727);
                    if1713 = call1728;
                  } else {
                    setLineNumber(403);    // compilenode string
                    var string1729 = new GraceString("");
                    var call1731 = callmethodChecked(var_result, "detailedSummary", [0]);
                    var string1733 = new GraceString(": ");
                    onSelf = true;
                    var call1735 = callmethodChecked(this, "name", [0]);
                    var string1737 = new GraceString("");
                    var opresult1739 = callmethodChecked(string1737, "++", [1], call1735);
                    var opresult1741 = callmethodChecked(opresult1739, "++", [1], string1733);
                    var opresult1743 = callmethodChecked(opresult1741, "++", [1], call1731);
                    var opresult1745 = callmethodChecked(opresult1743, "++", [1], string1729);
                    var call1746 = Grace_print(opresult1745);
                    if1713 = call1746;
                  }
                  return if1713;
                };
                func1708.paramCounts = [0];
                obj1622.methods["debugAndPrintResults"] = func1708;
                func1708.definitionLine = 397;
                func1708.definitionModule = "gUnit";
                var func1747 = function(argcv) {    // method iterator
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  if (argcv[0] !== 0)
                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for iterator"));
                  setModuleName("gUnit");
                  setLineNumber(407);    // compilenode call
                  onSelf = true;
                  var call1748 = callmethodChecked(this, "tests", [0]);
                  var call1749 = callmethodChecked(call1748, "iterator", [0]);
                  return call1749;
                };
                func1747.paramCounts = [0];
                obj1622.methods["iterator"] = func1747;
                func1747.definitionLine = 407;
                func1747.definitionModule = "gUnit";
                var func1750 = function(argcv) {    // method do(1)
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  var var_aBlock = arguments[curarg];
                  curarg++;
                  if (argcv[0] !== 1)
                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for do(1)"));
                  setModuleName("gUnit");
                  setLineNumber(408);    // compilenode call
                  onSelf = true;
                  var call1751 = callmethodChecked(this, "tests", [0]);
                  var call1752 = callmethodChecked(call1751, "do", [1], var_aBlock);
                  return call1752;
                };
                func1750.paramCounts = [1];
                obj1622.methods["do"] = func1750;
                func1750.definitionLine = 408;
                func1750.definitionModule = "gUnit";
                var func1753 = function(argcv) {    // method addAll(1)
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  var var_anotherSuite = arguments[curarg];
                  curarg++;
                  if (argcv[0] !== 1)
                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addAll(1)"));
                  setModuleName("gUnit");
                  setLineNumber(410);    // compilenode block
                  var block1754 = new GraceBlock(this, 410, 1);
                  setLineNumber(1);    // compilenode identifier
                  block1754.real = function(var_each) {
                    setLineNumber(410);    // compilenode identifier
                    onSelf = true;
                    var call1755 = callmethodChecked(this, "add", [1], var_each);
                    return call1755;
                  };
                  var call1756 = callmethodChecked(var_anotherSuite, "do", [1], block1754);
                  setLineNumber(411);    // compilenode identifier
                  return this;
                };
                func1753.paramCounts = [1];
                obj1622.methods["addAll"] = func1753;
                func1753.definitionLine = 409;
                func1753.definitionModule = "gUnit";
                var func1757 = function(argcv) {    // method ++(1)
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  var var_anotherSuite = arguments[curarg];
                  curarg++;
                  if (argcv[0] !== 1)
                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ++(1)"));
                  setModuleName("gUnit");
                  setLineNumber(414);    // compilenode call
                  onSelf = true;
                  var call1758 = callmethodChecked(this, "tests", [0]);
                  var call1759 = callmethodChecked(superDepth, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call1760 = callmethodChecked(call1759, "withAll", [1], call1758);
                  var call1761 = callmethodChecked(call1760, "addAll", [1], var_anotherSuite);
                  return call1761;
                };
                func1757.paramCounts = [1];
                obj1622.methods["++"] = func1757;
                func1757.definitionLine = 413;
                func1757.definitionModule = "gUnit";
                var func1762 = function(argcv) {    // method rerunErrors(1)
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  var var_result = arguments[curarg];
                  curarg++;
                  if (argcv[0] !== 1)
                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for rerunErrors(1)"));
                  setModuleName("gUnit");
                  var if1763 = GraceDone;
                  setLineNumber(417);    // compilenode identifier
                  var opresult1766 = callmethodChecked(var_numberOfErrorsToRerun, "\u2264", [1], new GraceNum(0));
                  if (Grace_isTrue(opresult1766)) {
                    return var_done;
                  }
                  setLineNumber(418);    // compilenode identifier
                  var call1767 = callmethodChecked(var_result, "numberOfErrors", [0]);
                  var call1768 = callmethodChecked(var_prelude, "min", [2], call1767, var_numberOfErrorsToRerun);
                  var var_n = call1768;
                  var if1769 = GraceDone;
                  setLineNumber(419);    // compilenode identifier
                  var opresult1772 = callmethodChecked(var_n, "==", [1], new GraceNum(1));
                  if (Grace_isTrue(opresult1772)) {
                    setLineNumber(420);    // compilenode string
                    var string1773 = new GraceString("\nRe-running 1 error.");
                    var call1774 = Grace_print(string1773);
                    if1769 = call1774;
                  } else {
                    setLineNumber(422);    // compilenode string
                    var string1775 = new GraceString(" errors.");
                    var string1778 = new GraceString("\nRe-running ");
                    var opresult1780 = callmethodChecked(string1778, "++", [1], var_n);
                    var opresult1782 = callmethodChecked(opresult1780, "++", [1], string1775);
                    var call1783 = Grace_print(opresult1782);
                    if1769 = call1783;
                  }
                  setLineNumber(424);    // compilenode call
                  var call1784 = callmethodChecked(superDepth, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call1785 = callmethodChecked(call1784, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call1786 = callmethodChecked(call1785, "testResult", [0]);
                  var var_newResult = call1786;
                  setLineNumber(425);    // compilenode identifier
                  var call1787 = callmethodChecked(var_result, "erroredTestNames", [0]);
                  var var_errors = call1787;
                  setLineNumber(426);    // compilenode block
                  var block1788 = new GraceBlock(this, 426, 1);
                  setLineNumber(1);    // compilenode identifier
                  block1788.real = function(var_each) {
                    var if1789 = GraceDone;
                    setLineNumber(427);    // compilenode identifier
                    var call1790 = callmethodChecked(var_each, "name", [0]);
                    var call1791 = callmethodChecked(var_errors, "contains", [1], call1790);
                    if (Grace_isTrue(call1791)) {
                      setLineNumber(428);    // compilenode identifier
                      var call1792 = callmethodChecked(var_each, "debug", [1], var_newResult);
                      setLineNumber(429);    // compilenode identifier
                      var diff1795 = callmethodChecked(var_n, "-", [1], new GraceNum(1));
                      var_n = diff1795;
                      var if1796 = GraceDone;
                      setLineNumber(430);    // compilenode identifier
                      var opresult1799 = callmethodChecked(var_n, "==", [1], new GraceNum(0));
                      if (Grace_isTrue(opresult1799)) {
                        throw new ReturnException(var_done, returnTarget);
                      }
                      if1789 = if1796;
                    }
                    return if1789;
                  };
                  setLineNumber(426);    // compilenode call
                  onSelf = true;
                  var call1800 = callmethodChecked(this, "tests", [0]);
                  var call1801 = callmethodChecked(call1800, "do", [1], block1788);
                  return call1801;
                };
                func1762.paramCounts = [1];
                obj1622.methods["rerunErrors"] = func1762;
                func1762.definitionLine = 416;
                func1762.definitionModule = "gUnit";
                setLineNumber(354);    // compilenode call
                var call1802 = callmethodChecked(var_prelude, "collections", [0]);
                var call1803 = callmethodChecked(call1802, "enumerable", [0]);
                var call1804 = callmethodChecked(call1803, "TRAIT()object", [0, 1], this);
                obj1622.superobj = call1804;
                if (call1804.data) obj1622.data = call1804.data;
                if (call1804.hasOwnProperty('_value'))
                    obj1622._value = call1804._value;
                setLineNumber(355);    // compilenode string
                var string1805 = new GraceString("");
                obj1622.data["name"] = string1805;
                var reader_gUnit_name1806 = function() {
                  return this.data["name"];
                };
                obj1622.methods["name"] = reader_gUnit_name1806;
                obj1622.data["name"] = string1805;
                var writer_gUnit_name1806 = function(argcv, o) {
                  this.data["name"] = o;
                  return GraceDone;
                };
                obj1622.methods["name:="] = writer_gUnit_name1806;
                obj1622.mutable = true;
                setLineNumber(356);    // compilenode array
                var array1807 = new PrimitiveGraceList([]);
                obj1622.data["tests"] = array1807;
                var reader_gUnit_tests1808 = function() {
                  return this.data["tests"];
                };
                reader_gUnit_tests1808.def = true;
                reader_gUnit_tests1808.confidential = true;
                obj1622.methods["tests"] = reader_gUnit_tests1808;
                setLineNumber(357);    // compilenode call
                var call1809 = callmethodChecked(var_prelude, "emptySet", [0]);
                obj1622.data["testNames"] = call1809;
                var reader_gUnit_testNames1810 = function() {
                  return this.data["testNames"];
                };
                reader_gUnit_testNames1810.def = true;
                reader_gUnit_testNames1810.confidential = true;
                obj1622.methods["testNames"] = reader_gUnit_testNames1810;
                setLineNumber(358);    // compilenode identifier
                obj1622.data["errorsToBeRerun"] = GraceTrue;
                var reader_gUnit_errorsToBeRerun1811 = function() {
                  return this.data["errorsToBeRerun"];
                };
                obj1622.methods["errorsToBeRerun"] = reader_gUnit_errorsToBeRerun1811;
                obj1622.data["errorsToBeRerun"] = GraceTrue;
                var writer_gUnit_errorsToBeRerun1811 = function(argcv, o) {
                  this.data["errorsToBeRerun"] = o;
                  return GraceDone;
                };
                obj1622.methods["errorsToBeRerun:="] = writer_gUnit_errorsToBeRerun1811;
                reader_gUnit_errorsToBeRerun1811.confidential = true;
                writer_gUnit_errorsToBeRerun1811.confidential = true;
                obj1622.mutable = true;
                setLineNumber(362);    // compilenode block
                var block1812 = new GraceBlock(this, 362, 1);
                setLineNumber(1);    // compilenode identifier
                block1812.real = function(var_each) {
                  setLineNumber(362);    // compilenode identifier
                  onSelf = true;
                  var call1813 = callmethodChecked(this, "add", [1], var_each);
                  return call1813;
                };
                var call1814 = callmethodChecked(var_prelude, "for()do", [1, 1], var_initialContents, block1812);
                superDepth = origSuperDepth;
              };
              obj_init_1622.apply(obj1622, []);
              return obj1622;
            };
            func1621.paramCounts = [1];
            obj1619.methods["withAll"] = func1621;
            func1621.definitionLine = 353;
            func1621.definitionModule = "gUnit";
              var func1815 = function(argcv) {    // method withAll(1     )()object
                var curarg = 1;
                var var_initialContents = arguments[curarg];
                curarg++;
                var inheritingObject = arguments[curarg++];
                // Start argument processing
                curarg = 1;
                curarg++;
                // End argument processing
                setModuleName("gUnit");
                var returnTarget = invocationCount;
                invocationCount++;
                var obj1816 = Grace_allocObject(null, "withAll");
                obj1816.definitionModule = "gUnit";
                obj1816.definitionLine = 353;
                var inho1816 = inheritingObject;
                while (inho1816.superobj) inho1816 = inho1816.superobj;
                inho1816.superobj = obj1816;
                obj1816.data = inheritingObject.data;
                if (inheritingObject.hasOwnProperty('_value'))
                  obj1816._value = inheritingObject._value;
                obj1816.outer = this;
                var reader_gUnit_outer1817 = function() {
                  return this.outer;
                };
                obj1816.methods["outer"] = reader_gUnit_outer1817;
                var obj_init_1816 = function() {
                  var origSuperDepth = superDepth;
                  superDepth = obj1816;
                  var func1818 = function(argcv) {    // method doNotRerunErrors
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    if (argcv[0] !== 0)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for doNotRerunErrors"));
                    setModuleName("gUnit");
                    setLineNumber(360);    // compilenode identifier
                    onSelf = true;
                    var call1819 = callmethodChecked(this, "errorsToBeRerun:=", [1], GraceFalse);
                    return call1819;
                  };
                  func1818.paramCounts = [0];
                  obj1816.methods["doNotRerunErrors"] = func1818;
                  func1818.definitionLine = 360;
                  func1818.definitionModule = "gUnit";
                  var func1820 = function(argcv) {    // method doRerunErrors
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    if (argcv[0] !== 0)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for doRerunErrors"));
                    setModuleName("gUnit");
                    setLineNumber(361);    // compilenode identifier
                    onSelf = true;
                    var call1821 = callmethodChecked(this, "errorsToBeRerun:=", [1], GraceTrue);
                    return call1821;
                  };
                  func1820.paramCounts = [0];
                  obj1816.methods["doRerunErrors"] = func1820;
                  func1820.definitionLine = 361;
                  func1820.definitionModule = "gUnit";
                  var func1822 = function(argcv) {    // method add(1)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_e = arguments[curarg];
                    curarg++;
                    if (argcv[0] !== 1)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for add(1)"));
                    setModuleName("gUnit");
                    setLineNumber(365);    // compilenode identifier
                    var call1823 = callmethodChecked(var_e, "name", [0]);
                    var var_eName = call1823;
                    var if1824 = GraceDone;
                    setLineNumber(366);    // compilenode call
                    onSelf = true;
                    var call1825 = callmethodChecked(this, "testNames", [0]);
                    var call1826 = callmethodChecked(call1825, "contains", [1], var_eName);
                    if (Grace_isTrue(call1826)) {
                      setLineNumber(367);    // compilenode string
                      var string1827 = new GraceString("\"");
                      var string1830 = new GraceString("Warning: more than one test named \"");
                      var opresult1832 = callmethodChecked(string1830, "++", [1], var_eName);
                      var opresult1834 = callmethodChecked(opresult1832, "++", [1], string1827);
                      var call1835 = Grace_print(opresult1834);
                      if1824 = call1835;
                    } else {
                      setLineNumber(369);    // compilenode call
                      onSelf = true;
                      var call1836 = callmethodChecked(this, "testNames", [0]);
                      var call1837 = callmethodChecked(call1836, "add", [1], var_eName);
                      if1824 = call1837;
                    }
                    setLineNumber(371);    // compilenode call
                    onSelf = true;
                    var call1838 = callmethodChecked(this, "tests", [0]);
                    var call1839 = callmethodChecked(call1838, "push", [1], var_e);
                    return call1839;
                  };
                  func1822.paramCounts = [1];
                  obj1816.methods["add"] = func1822;
                  func1822.definitionLine = 364;
                  func1822.definitionModule = "gUnit";
                  var func1840 = function(argcv) {    // method run(1)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_result = arguments[curarg];
                    curarg++;
                    if (argcv[0] !== 1)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for run(1)"));
                    setModuleName("gUnit");
                    setLineNumber(375);    // compilenode call
                    onSelf = true;
                    var call1841 = callmethodChecked(this, "tests", [0]);
                    var block1842 = new GraceBlock(this, 375, 1);
                    setLineNumber(1);    // compilenode identifier
                    block1842.real = function(var_each) {
                      setLineNumber(375);    // compilenode identifier
                      var call1843 = callmethodChecked(var_each, "run", [1], var_result);
                      return call1843;
                    };
                    var call1844 = callmethodChecked(var_prelude, "for()do", [1, 1], call1841, block1842);
                    return call1844;
                  };
                  func1840.paramCounts = [1];
                  obj1816.methods["run"] = func1840;
                  func1840.definitionLine = 374;
                  func1840.definitionModule = "gUnit";
                  var func1845 = function(argcv) {    // method debug(1)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_result = arguments[curarg];
                    curarg++;
                    if (argcv[0] !== 1)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for debug(1)"));
                    setModuleName("gUnit");
                    setLineNumber(379);    // compilenode call
                    onSelf = true;
                    var call1846 = callmethodChecked(this, "tests", [0]);
                    var block1847 = new GraceBlock(this, 379, 1);
                    setLineNumber(1);    // compilenode identifier
                    block1847.real = function(var_each) {
                      setLineNumber(379);    // compilenode identifier
                      var call1848 = callmethodChecked(var_each, "debug", [1], var_result);
                      return call1848;
                    };
                    var call1849 = callmethodChecked(var_prelude, "for()do", [1, 1], call1846, block1847);
                    return call1849;
                  };
                  func1845.paramCounts = [1];
                  obj1816.methods["debug"] = func1845;
                  func1845.definitionLine = 378;
                  func1845.definitionModule = "gUnit";
                  var func1850 = function(argcv) {    // method size
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    if (argcv[0] !== 0)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for size"));
                    setModuleName("gUnit");
                    setLineNumber(382);    // compilenode call
                    onSelf = true;
                    var call1851 = callmethodChecked(this, "tests", [0]);
                    var call1852 = callmethodChecked(call1851, "size", [0]);
                    return call1852;
                  };
                  func1850.paramCounts = [0];
                  obj1816.methods["size"] = func1850;
                  func1850.definitionLine = 382;
                  func1850.definitionModule = "gUnit";
                  var func1853 = function(argcv) {    // method runAndPrintResults
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    if (argcv[0] !== 0)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for runAndPrintResults"));
                    setModuleName("gUnit");
                    setLineNumber(385);    // compilenode call
                    var call1854 = callmethodChecked(superDepth, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call1855 = callmethodChecked(call1854, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call1856 = callmethodChecked(call1855, "testResult", [0]);
                    var var_result = call1856;
                    setLineNumber(386);    // compilenode identifier
                    onSelf = true;
                    var call1857 = callmethodChecked(this, "run", [1], var_result);
                    var if1858 = GraceDone;
                    setLineNumber(387);    // compilenode string
                    var string1859 = new GraceString("");
                    onSelf = true;
                    var call1861 = callmethodChecked(this, "name", [0]);
                    var opresult1863 = callmethodChecked(call1861, "==", [1], string1859);
                    if (Grace_isTrue(opresult1863)) {
                      setLineNumber(388);    // compilenode string
                      var string1864 = new GraceString("");
                      var call1866 = callmethodChecked(var_result, "detailedSummary", [0]);
                      var string1868 = new GraceString("");
                      var opresult1870 = callmethodChecked(string1868, "++", [1], call1866);
                      var opresult1872 = callmethodChecked(opresult1870, "++", [1], string1864);
                      var call1873 = Grace_print(opresult1872);
                      if1858 = call1873;
                    } else {
                      setLineNumber(390);    // compilenode string
                      var string1874 = new GraceString("");
                      var call1876 = callmethodChecked(var_result, "detailedSummary", [0]);
                      var string1878 = new GraceString(": ");
                      onSelf = true;
                      var call1880 = callmethodChecked(this, "name", [0]);
                      var string1882 = new GraceString("");
                      var opresult1884 = callmethodChecked(string1882, "++", [1], call1880);
                      var opresult1886 = callmethodChecked(opresult1884, "++", [1], string1878);
                      var opresult1888 = callmethodChecked(opresult1886, "++", [1], call1876);
                      var opresult1890 = callmethodChecked(opresult1888, "++", [1], string1874);
                      var call1891 = Grace_print(opresult1890);
                      if1858 = call1891;
                    }
                    var if1892 = GraceDone;
                    setLineNumber(392);    // compilenode call
                    onSelf = true;
                    var call1893 = callmethodChecked(this, "errorsToBeRerun", [0]);
                    var call1896 = callmethodChecked(var_result, "numberOfErrors", [0]);
                    var opresult1898 = callmethodChecked(call1896, ">", [1], new GraceNum(0));
                    var opresult1900 = callmethodChecked(opresult1898, "&&", [1], call1893);
                    if (Grace_isTrue(opresult1900)) {
                      setLineNumber(393);    // compilenode identifier
                      onSelf = true;
                      var call1901 = callmethodChecked(this, "rerunErrors", [1], var_result);
                      if1892 = call1901;
                    }
                    return if1892;
                  };
                  func1853.paramCounts = [0];
                  obj1816.methods["runAndPrintResults"] = func1853;
                  func1853.definitionLine = 384;
                  func1853.definitionModule = "gUnit";
                  var func1902 = function(argcv) {    // method debugAndPrintResults
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    if (argcv[0] !== 0)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for debugAndPrintResults"));
                    setModuleName("gUnit");
                    setLineNumber(398);    // compilenode call
                    var call1903 = callmethodChecked(superDepth, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call1904 = callmethodChecked(call1903, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call1905 = callmethodChecked(call1904, "testResult", [0]);
                    var var_result = call1905;
                    setLineNumber(399);    // compilenode identifier
                    onSelf = true;
                    var call1906 = callmethodChecked(this, "debug", [1], var_result);
                    var if1907 = GraceDone;
                    setLineNumber(400);    // compilenode string
                    var string1908 = new GraceString("");
                    onSelf = true;
                    var call1910 = callmethodChecked(this, "name", [0]);
                    var opresult1912 = callmethodChecked(call1910, "==", [1], string1908);
                    if (Grace_isTrue(opresult1912)) {
                      setLineNumber(401);    // compilenode string
                      var string1913 = new GraceString("");
                      var call1915 = callmethodChecked(var_result, "detailedSummary", [0]);
                      var string1917 = new GraceString("");
                      var opresult1919 = callmethodChecked(string1917, "++", [1], call1915);
                      var opresult1921 = callmethodChecked(opresult1919, "++", [1], string1913);
                      var call1922 = Grace_print(opresult1921);
                      if1907 = call1922;
                    } else {
                      setLineNumber(403);    // compilenode string
                      var string1923 = new GraceString("");
                      var call1925 = callmethodChecked(var_result, "detailedSummary", [0]);
                      var string1927 = new GraceString(": ");
                      onSelf = true;
                      var call1929 = callmethodChecked(this, "name", [0]);
                      var string1931 = new GraceString("");
                      var opresult1933 = callmethodChecked(string1931, "++", [1], call1929);
                      var opresult1935 = callmethodChecked(opresult1933, "++", [1], string1927);
                      var opresult1937 = callmethodChecked(opresult1935, "++", [1], call1925);
                      var opresult1939 = callmethodChecked(opresult1937, "++", [1], string1923);
                      var call1940 = Grace_print(opresult1939);
                      if1907 = call1940;
                    }
                    return if1907;
                  };
                  func1902.paramCounts = [0];
                  obj1816.methods["debugAndPrintResults"] = func1902;
                  func1902.definitionLine = 397;
                  func1902.definitionModule = "gUnit";
                  var func1941 = function(argcv) {    // method iterator
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    if (argcv[0] !== 0)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for iterator"));
                    setModuleName("gUnit");
                    setLineNumber(407);    // compilenode call
                    onSelf = true;
                    var call1942 = callmethodChecked(this, "tests", [0]);
                    var call1943 = callmethodChecked(call1942, "iterator", [0]);
                    return call1943;
                  };
                  func1941.paramCounts = [0];
                  obj1816.methods["iterator"] = func1941;
                  func1941.definitionLine = 407;
                  func1941.definitionModule = "gUnit";
                  var func1944 = function(argcv) {    // method do(1)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_aBlock = arguments[curarg];
                    curarg++;
                    if (argcv[0] !== 1)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for do(1)"));
                    setModuleName("gUnit");
                    setLineNumber(408);    // compilenode call
                    onSelf = true;
                    var call1945 = callmethodChecked(this, "tests", [0]);
                    var call1946 = callmethodChecked(call1945, "do", [1], var_aBlock);
                    return call1946;
                  };
                  func1944.paramCounts = [1];
                  obj1816.methods["do"] = func1944;
                  func1944.definitionLine = 408;
                  func1944.definitionModule = "gUnit";
                  var func1947 = function(argcv) {    // method addAll(1)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_anotherSuite = arguments[curarg];
                    curarg++;
                    if (argcv[0] !== 1)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addAll(1)"));
                    setModuleName("gUnit");
                    setLineNumber(410);    // compilenode block
                    var block1948 = new GraceBlock(this, 410, 1);
                    setLineNumber(1);    // compilenode identifier
                    block1948.real = function(var_each) {
                      setLineNumber(410);    // compilenode identifier
                      onSelf = true;
                      var call1949 = callmethodChecked(this, "add", [1], var_each);
                      return call1949;
                    };
                    var call1950 = callmethodChecked(var_anotherSuite, "do", [1], block1948);
                    setLineNumber(411);    // compilenode identifier
                    return this;
                  };
                  func1947.paramCounts = [1];
                  obj1816.methods["addAll"] = func1947;
                  func1947.definitionLine = 409;
                  func1947.definitionModule = "gUnit";
                  var func1951 = function(argcv) {    // method ++(1)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_anotherSuite = arguments[curarg];
                    curarg++;
                    if (argcv[0] !== 1)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ++(1)"));
                    setModuleName("gUnit");
                    setLineNumber(414);    // compilenode call
                    onSelf = true;
                    var call1952 = callmethodChecked(this, "tests", [0]);
                    var call1953 = callmethodChecked(superDepth, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call1954 = callmethodChecked(call1953, "withAll", [1], call1952);
                    var call1955 = callmethodChecked(call1954, "addAll", [1], var_anotherSuite);
                    return call1955;
                  };
                  func1951.paramCounts = [1];
                  obj1816.methods["++"] = func1951;
                  func1951.definitionLine = 413;
                  func1951.definitionModule = "gUnit";
                  var func1956 = function(argcv) {    // method rerunErrors(1)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_result = arguments[curarg];
                    curarg++;
                    if (argcv[0] !== 1)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for rerunErrors(1)"));
                    setModuleName("gUnit");
                    var if1957 = GraceDone;
                    setLineNumber(417);    // compilenode identifier
                    var opresult1960 = callmethodChecked(var_numberOfErrorsToRerun, "\u2264", [1], new GraceNum(0));
                    if (Grace_isTrue(opresult1960)) {
                      return var_done;
                    }
                    setLineNumber(418);    // compilenode identifier
                    var call1961 = callmethodChecked(var_result, "numberOfErrors", [0]);
                    var call1962 = callmethodChecked(var_prelude, "min", [2], call1961, var_numberOfErrorsToRerun);
                    var var_n = call1962;
                    var if1963 = GraceDone;
                    setLineNumber(419);    // compilenode identifier
                    var opresult1966 = callmethodChecked(var_n, "==", [1], new GraceNum(1));
                    if (Grace_isTrue(opresult1966)) {
                      setLineNumber(420);    // compilenode string
                      var string1967 = new GraceString("\nRe-running 1 error.");
                      var call1968 = Grace_print(string1967);
                      if1963 = call1968;
                    } else {
                      setLineNumber(422);    // compilenode string
                      var string1969 = new GraceString(" errors.");
                      var string1972 = new GraceString("\nRe-running ");
                      var opresult1974 = callmethodChecked(string1972, "++", [1], var_n);
                      var opresult1976 = callmethodChecked(opresult1974, "++", [1], string1969);
                      var call1977 = Grace_print(opresult1976);
                      if1963 = call1977;
                    }
                    setLineNumber(424);    // compilenode call
                    var call1978 = callmethodChecked(superDepth, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call1979 = callmethodChecked(call1978, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call1980 = callmethodChecked(call1979, "testResult", [0]);
                    var var_newResult = call1980;
                    setLineNumber(425);    // compilenode identifier
                    var call1981 = callmethodChecked(var_result, "erroredTestNames", [0]);
                    var var_errors = call1981;
                    setLineNumber(426);    // compilenode block
                    var block1982 = new GraceBlock(this, 426, 1);
                    setLineNumber(1);    // compilenode identifier
                    block1982.real = function(var_each) {
                      var if1983 = GraceDone;
                      setLineNumber(427);    // compilenode identifier
                      var call1984 = callmethodChecked(var_each, "name", [0]);
                      var call1985 = callmethodChecked(var_errors, "contains", [1], call1984);
                      if (Grace_isTrue(call1985)) {
                        setLineNumber(428);    // compilenode identifier
                        var call1986 = callmethodChecked(var_each, "debug", [1], var_newResult);
                        setLineNumber(429);    // compilenode identifier
                        var diff1989 = callmethodChecked(var_n, "-", [1], new GraceNum(1));
                        var_n = diff1989;
                        var if1990 = GraceDone;
                        setLineNumber(430);    // compilenode identifier
                        var opresult1993 = callmethodChecked(var_n, "==", [1], new GraceNum(0));
                        if (Grace_isTrue(opresult1993)) {
                          throw new ReturnException(var_done, returnTarget);
                        }
                        if1983 = if1990;
                      }
                      return if1983;
                    };
                    setLineNumber(426);    // compilenode call
                    onSelf = true;
                    var call1994 = callmethodChecked(this, "tests", [0]);
                    var call1995 = callmethodChecked(call1994, "do", [1], block1982);
                    return call1995;
                  };
                  func1956.paramCounts = [1];
                  obj1816.methods["rerunErrors"] = func1956;
                  func1956.definitionLine = 416;
                  func1956.definitionModule = "gUnit";
                  setLineNumber(354);    // compilenode call
                  var call1996 = callmethodChecked(var_prelude, "collections", [0]);
                  var call1997 = callmethodChecked(call1996, "enumerable", [0]);
                  var call1998 = callmethodChecked(call1997, "TRAIT()object", [0, 1], this);
                  obj1816.superobj = call1998;
                  if (call1998.data) obj1816.data = call1998.data;
                  if (call1998.hasOwnProperty('_value'))
                      obj1816._value = call1998._value;
                  setLineNumber(355);    // compilenode string
                  var string1999 = new GraceString("");
                  obj1816.data["name"] = string1999;
                  var reader_gUnit_name2000 = function() {
                    return this.data["name"];
                  };
                  obj1816.methods["name"] = reader_gUnit_name2000;
                  obj1816.data["name"] = string1999;
                  var writer_gUnit_name2000 = function(argcv, o) {
                    this.data["name"] = o;
                    return GraceDone;
                  };
                  obj1816.methods["name:="] = writer_gUnit_name2000;
                  obj1816.mutable = true;
                  setLineNumber(356);    // compilenode array
                  var array2001 = new PrimitiveGraceList([]);
                  obj1816.data["tests"] = array2001;
                  var reader_gUnit_tests2002 = function() {
                    return this.data["tests"];
                  };
                  reader_gUnit_tests2002.def = true;
                  reader_gUnit_tests2002.confidential = true;
                  obj1816.methods["tests"] = reader_gUnit_tests2002;
                  setLineNumber(357);    // compilenode call
                  var call2003 = callmethodChecked(var_prelude, "emptySet", [0]);
                  obj1816.data["testNames"] = call2003;
                  var reader_gUnit_testNames2004 = function() {
                    return this.data["testNames"];
                  };
                  reader_gUnit_testNames2004.def = true;
                  reader_gUnit_testNames2004.confidential = true;
                  obj1816.methods["testNames"] = reader_gUnit_testNames2004;
                  setLineNumber(358);    // compilenode identifier
                  obj1816.data["errorsToBeRerun"] = GraceTrue;
                  var reader_gUnit_errorsToBeRerun2005 = function() {
                    return this.data["errorsToBeRerun"];
                  };
                  obj1816.methods["errorsToBeRerun"] = reader_gUnit_errorsToBeRerun2005;
                  obj1816.data["errorsToBeRerun"] = GraceTrue;
                  var writer_gUnit_errorsToBeRerun2005 = function(argcv, o) {
                    this.data["errorsToBeRerun"] = o;
                    return GraceDone;
                  };
                  obj1816.methods["errorsToBeRerun:="] = writer_gUnit_errorsToBeRerun2005;
                  reader_gUnit_errorsToBeRerun2005.confidential = true;
                  writer_gUnit_errorsToBeRerun2005.confidential = true;
                  obj1816.mutable = true;
                  setLineNumber(362);    // compilenode block
                  var block2006 = new GraceBlock(this, 362, 1);
                  setLineNumber(1);    // compilenode identifier
                  block2006.real = function(var_each) {
                    setLineNumber(362);    // compilenode identifier
                    onSelf = true;
                    var call2007 = callmethodChecked(this, "add", [1], var_each);
                    return call2007;
                  };
                  var call2008 = callmethodChecked(var_prelude, "for()do", [1, 1], var_initialContents, block2006);
                  superDepth = origSuperDepth;
                };
                obj_init_1816.apply(inheritingObject, []);
                return obj1816;
                };
                obj1619.methods["withAll()object"] = func1815;
              var func2009 = function(argcv) {    // method empty
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                if (argcv[0] !== 0)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for empty"));
                setModuleName("gUnit");
                setLineNumber(436);    // compilenode array
                var array2010 = new PrimitiveGraceList([]);
                onSelf = true;
                var call2011 = callmethodChecked(this, "withAll", [1], array2010);
                return call2011;
              };
              func2009.paramCounts = [0];
              obj1619.methods["empty"] = func2009;
              func2009.definitionLine = 436;
              func2009.definitionModule = "gUnit";
              var func2012 = function(argcv) {    // method fromTestMethodsIn(1)named(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_aTestClass = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for fromTestMethodsIn (arg list 1) of fromTestMethodsIn(1)named(1)"));
                var var_aName = arguments[curarg];
                curarg++;
                if (argcv[1] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for named (arg list 2) of fromTestMethodsIn(1)named(1)"));
                setModuleName("gUnit");
                setLineNumber(439);    // compilenode call
                onSelf = true;
                var call2013 = callmethodChecked(this, "empty", [0]);
                var var_newSuite = call2013;
                setLineNumber(440);    // compilenode string
                var string2014 = new GraceString("null");
                var call2015 = callmethodChecked(var_aTestClass, "forMethod", [1], string2014);
                var var_example = call2015;
                setLineNumber(441);    // compilenode identifier
                var call2016 = callmethodChecked(var_newSuite, "name:=", [1], var_aName);
                setLineNumber(442);    // compilenode identifier
                var call2017 = callmethodChecked(var_mirror, "reflect", [1], var_example);
                var call2018 = callmethodChecked(call2017, "methods", [0]);
                var block2019 = new GraceBlock(this, 442, 1);
                setLineNumber(1);    // compilenode identifier
                block2019.real = function(var_each) {
                  var if2020 = GraceDone;
                  setLineNumber(443);    // compilenode string
                  var string2021 = new GraceString("test");
                  var call2022 = callmethodChecked(var_each, "name", [0]);
                  var call2023 = callmethodChecked(call2022, "startsWith", [1], string2021);
                  if (Grace_isTrue(call2023)) {
                    var if2024 = GraceDone;
                    setLineNumber(444);    // compilenode string
                    var string2025 = new GraceString("()object");
                    var call2026 = callmethodChecked(var_each, "name", [0]);
                    var call2027 = callmethodChecked(call2026, "endsWith", [1], string2025);
                    var call2028 = callmethodChecked(call2027, "prefix!", [0]);
                    if (Grace_isTrue(call2028)) {
                      setLineNumber(448);    // compilenode identifier
                      var call2029 = callmethodChecked(var_each, "name", [0]);
                      var call2030 = callmethodChecked(var_aTestClass, "forMethod", [1], call2029);
                      var call2031 = callmethodChecked(var_newSuite, "add", [1], call2030);
                      if2024 = call2031;
                    }
                    if2020 = if2024;
                  }
                  return if2020;
                };
                var call2032 = callmethodChecked(var_prelude, "for()do", [1, 1], call2018, block2019);
                setLineNumber(452);    // compilenode identifier
                return var_newSuite;
              };
              func2012.paramCounts = [1, 1];
              obj1619.methods["fromTestMethodsIn()named"] = func2012;
              func2012.definitionLine = 438;
              func2012.definitionModule = "gUnit";
              var func2033 = function(argcv) {    // method fromTestMethodsIn(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_aTestClass = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for fromTestMethodsIn(1)"));
                setModuleName("gUnit");
                setLineNumber(456);    // compilenode call
                var call2034 = callmethodChecked(superDepth, "outer", [0]);
                onOuter = true;
                onSelf = true;
                var call2035 = callmethodChecked(call2034, "className", [1], var_aTestClass);
                onSelf = true;
                var call2036 = callmethodChecked(this, "fromTestMethodsIn()named", [1, 1], var_aTestClass, call2035);
                return call2036;
              };
              func2033.paramCounts = [1];
              obj1619.methods["fromTestMethodsIn"] = func2033;
              func2033.definitionLine = 455;
              func2033.definitionModule = "gUnit";
              superDepth = origSuperDepth;
            };
            obj_init_1619.apply(obj1619, []);
            var var_testSuite = obj1619;
            var func2037 = function(argcv) {    // method testSuite
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for testSuite"));
              setModuleName("gUnit");
              // testSuite is a simple accessor - elide try ... catch
              setLineNumber(351);    // compilenode identifier
              return var_testSuite;
            };
            func2037.paramCounts = [0];
            this.methods["testSuite"] = func2037;
            func2037.definitionLine = 456;
            func2037.definitionModule = "gUnit";
            this.methods["testSuite"].debug = "def";
            return this;
          }
          gracecode_gUnit.imports = ['math', 'mirrors'];
          if (typeof gctCache !== "undefined")
            gctCache['gUnit'] = "classes:\n testSuite\nconfidential:\nconstructors-of:testSuite:\n withAll\nfresh-methods:\n assertion\n testCaseNamed\n testRecordFor()message\n testResult\nfresh:assertion:\n AssertionFailure\n assert\n assert()description\n assert()hasType\n assert()shouldBe\n assert()shouldEqual()within\n assert()shouldRaise\n assert()shouldntBe\n assert()shouldntRaise\n assertType()describes\n countOneAssertion\n deny\n deny()description\n deny()hasType\n deny()shouldBe\n failBecause\n methodsIn()missingFrom\n protocolOf()notCoveredBy\nfresh:testCaseNamed:\n !=\n ::\n AssertionFailure\n asDebugString\n asString\n assert\n assert()description\n assert()hasType\n assert()shouldBe\n assert()shouldEqual()within\n assert()shouldRaise\n assert()shouldntBe\n assert()shouldntRaise\n assertType()describes\n basicAsString\n countOneAssertion\n currentResult\n debug\n debugAndPrintResults\n deny\n deny()description\n deny()hasType\n deny()shouldBe\n failBecause\n isMe\n methodsIn()missingFrom\n name\n printBackTrace()limitedTo\n protocolOf()notCoveredBy\n run\n runAndPrintResults\n runTest\n setup\n size\n teardown\n \u2260\nfresh:testRecordFor()message:\n <\n ==\n >\n asString\n compare\n hash\n message\n name\n \u2264\n \u2265\nfresh:testResult:\n countOneAssertion\n currentCountOfAssertions\n detailedSummary\n errorSet\n erroredTestNames\n errors\n failSet\n failedTestNames\n failures\n numberOfErrors\n numberOfFailures\n numberRun\n runCount\n summary\n testErrored()withMessage\n testFailed()withMessage\n testFinished\n testStarted\nmethods-of:testSuite.withAll:\n ++\n add\n addAll\n debug\n debugAndPrintResults\n do\n doNotRerunErrors\n doRerunErrors\n errorsToBeRerun\n iterator\n name\n rerunErrors\n run\n runAndPrintResults\n size\n testNames\n tests\nmethodtypes-of:Assertion:\n 1 assert(b : Block)shouldRaise(desireed : prelude.ExceptionKind) -> Done\n 1 assert(b : Block)shouldntRaise(undesired : prelude.ExceptionKind) -> Done\n 1 assert(bb : Boolean) -> Done\n 1 assert(bb : Boolean)description(str : String) -> Done\n 1 assert(n1 : Number)shouldEqual(n2 : Number)within(epsilon : Number) -> Done\n 1 assert(s : Object)hasType(t : Type) -> Done\n 1 assert(s1 : Object)shouldBe(s2 : Object) -> Done\n 1 assert(s1 : Object)shouldntBe(s2 : Object) -> Done\n 1 deny(bb : Boolean) -> Done\n 1 deny(bb : Boolean)description(str : String) -> Done\n 1 failBecause(Message : String) -> Done\nmethodtypes-of:TestCase:\n & 2\n & Assertion\n 2 debug(_ : TestResult) -> Done\n 2 name -> String\n 2 run(_ : TestResult) -> Done\n 2 size -> Number\nmethodtypes-of:TestRecord:\n 2 message -> String\n 2 name -> String\nmethodtypes-of:TestResult:\n 2 detailedSummary -> String\n 2 doNotRerunErrors -> Done\n 2 doRerunErrors -> Done\n 2 erroredTestNames -> List<String>\n 2 errors -> List<TestRecord>\n 2 failedTestNames -> List<String>\n 2 failures -> List<TestRecord>\n 2 numberOfErrors -> Number\n 2 numberOfFailures -> Number\n 2 numberRun -> Number\n 2 summary -> String\n 2 testErrored(name : String) -> Done\n 2 testFailed(name : String) -> Done\n 2 testFinished(name : String) -> Done\n 2 testStarted(name : String) -> Done\nmethodtypes-of:TestSuite:\n & 3\n & TestCase\n 3 add(t : TestCase) -> Done\n 3 rerunErrors(r : TestResult) -> Done\nmodules:\n math\n mirrors\npath:\n gUnit\npublic:\n Assertion\n TestCase\n TestRecord\n TestResult\n TestSuite\n assertion\n className\n numberOfErrorsToRerun\n numberOfErrorsToRerun:=\n testCaseNamed\n testRecordFor()message\n testResult\n testSuite\ntypes:\n Assertion\n TestCase\n TestRecord\n TestResult\n TestSuite\n";
          if (typeof originalSourceLines !== "undefined") {
            originalSourceLines["gUnit"] = [
              "#pragma ExtendedLineups",
              "// GUnit.grace",
              "// GUnit project",
              "//",
              "// Created by Andrew Black on 6/26/12.",
              "",
              "",
              "import \"mirrors\" as mirror",
              "import \"math\" as math",
              "",
              "type Assertion = { ",
              "    assert(bb:Boolean) description(str:String) -> Done",
              "    deny(bb:Boolean) description (str:String)  -> Done",
              "    assert(bb:Boolean) -> Done",
              "    deny(bb:Boolean) -> Done",
              "    assert(s1:Object) shouldBe(s2:Object) -> Done",
              "    assert(s1:Object) shouldntBe(s2:Object) -> Done",
              "    assert(n1:Number) shouldEqual(n2:Number) within(epsilon:Number) -> Done",
              "    assert(b:Block) shouldRaise(desireed:ExceptionKind) -> Done",
              "    assert(b:Block) shouldntRaise(undesired:ExceptionKind) -> Done",
              "    assert(s:Object) hasType(t:Type) -> Done",
              "    failBecause(Message:String) -> Done",
              "}",
              "   ",
              "type TestCase = Assertion & type {",
              "    run(_:TestResult) -> Done",
              "    debug(_:TestResult) -> Done",
              "    size -> Number",
              "    name -> String",
              "}",
              "",
              "type TestRecord = {",
              "    name -> String",
              "    message -> String",
              "}",
              "",
              "type TestResult =  {",
              "    testStarted(name:String) -> Done",
              "    testFailed(name:String) -> Done",
              "    testErrored(name:String) -> Done",
              "    testFinished(name:String) -> Done",
              "    erroredTestNames -> List<String>",
              "    failedTestNames -> List<String>",
              "    summary -> String",
              "    detailedSummary -> String",
              "    numberOfErrors -> Number",
              "    errors -> List<TestRecord>",
              "    numberOfFailures -> Number",
              "    failures -> List<TestRecord>",
              "    numberRun -> Number",
              "    doNotRerunErrors -> Done",
              "    doRerunErrors -> Done",
              "}",
              "",
              "type TestSuite = TestCase & type {",
              "    add(t:TestCase) -> Done",
              "    rerunErrors(r:TestResult) -> Done",
              "}",
              "",
              "var numberOfErrorsToRerun is public := 10",
              "",
              "class assertion {",
              "    def AssertionFailure is readable = Exception.refine \"AssertionFailure\"",
              "    method countOneAssertion { abstract }",
              "    ",
              "    method failBecause(str) {",
              "        assert (false) description (str)",
              "    }",
              "    method assert(bb: Boolean)description(str) {",
              "        countOneAssertion",
              "        if (! bb) then { AssertionFailure.raise(str) }",
              "    }",
              "    method deny(bb: Boolean) description (str) {",
              "        assert (! bb) description (str)",
              "    }",
              "    method assert(bb: Boolean) {",
              "        assert (bb) description \"Assertion failed!\"",
              "    }",
              "    method deny(bb: Boolean) {",
              "        assert (! bb)",
              "    }",
              "    method assert(s1:Object) shouldBe (s2:Object) {",
              "        assert (s1 == s2) description \"‹{s1.asDebugString}› should be ‹{s2.asDebugString}›\"",
              "    }",
              "    method assert(s1:Object) shouldntBe (s2:Object) {",
              "        assert ((s1 == s2).not) description \"‹{s1.asDebugString}› should not be ‹{s2.asDebugString}›\"",
              "    }",
              "    method deny(s1:Object) shouldBe (s2:Object) {",
              "        assert ((s1 == s2).not) description \"‹{s1.asDebugString}› should not be ‹{s2.asDebugString}›\"",
              "    }",
              "    method assert(n1:Number) shouldEqual (n2:Number) within (epsilon:Number) {",
              "        assert (math.abs(n1 - n2) ≤ epsilon) description \"‹{n1.asDebugString}› should be approximately ‹{n2.asDebugString}›\"",
              "    }",
              "    method assert(block0) shouldRaise (desiredException) {",
              "        var completedNormally",
              "        countOneAssertion",
              "        try {",
              "            block0.apply",
              "            completedNormally := true",
              "        } catch { raisedException:desiredException ->",
              "            completedNormally := false",
              "        } catch { raisedException ->",
              "            failBecause(\"code raised exception {raisedException.exception}\" ++",
              "                \": \\\"{raisedException.message}\\\" instead of {desiredException}\")",
              "        }",
              "        if (completedNormally) then {failBecause \"code did not raise an exception\"}",
              "    }",
              "    method assert(block0) shouldntRaise (undesiredException) {",
              "        countOneAssertion",
              "        try {",
              "            block0.apply",
              "        } catch { raisedException:undesiredException ->",
              "            failBecause \"code raised exception {raisedException.exception}\"",
              "        } catch { _ -> ",
              "            // do nothing; it's OK to raise a different exception.",
              "        }",
              "    }",
              "    method assert(value) hasType (Desired:Type) {",
              "        match (value)",
              "            case { _:Desired -> countOneAssertion }",
              "            case { _ -> ",
              "                def m = methodsIn(Desired) missingFrom (value)",
              "                failBecause \"{value.asDebugString} does not have type {Desired}; it's missing methods {m}.\" }",
              "    }",
              "    method assertType(T:Type) describes (value) {",
              "        def missingFromT = protocolOf(value) notCoveredBy(T)",
              "        assert (missingFromT.isEmpty) description (missingFromT)",
              "    }",
              "",
              "    method methodsIn(DesiredType) missingFrom (value) -> String is confidential {",
              "        def vMethods = mirror.reflect(value).methodNames",
              "        def tMethods = DesiredType.methodNames",
              "        def missing = tMethods -- vMethods",
              "        if (missing.size == 0) then {",
              "            ProgrammingError.raise \"{value.asDebugString} seems to have all the methods of {DesiredType}\"",
              "        } else {",
              "            var s := \"\"",
              "            missing.do { each -> s := s ++ each } ",
              "                separatedBy { s := s ++ \", \" }",
              "            s",
              "        }",
              "    }",
              "    method protocolOf(value) notCoveredBy (Q:Type) -> String is confidential {",
              "        var s := \"\"",
              "        def vMethods = set(mirror.reflect(value).methodNames)",
              "        def qMethods = set(Q.methodNames)",
              "        def missing = (vMethods -- qMethods).filter{m -> ",
              "            (! m.endsWith \"()object\") && (m != \"outer\")}.asSet",
              "        if (missing.isEmpty.not) then {",
              "            s := \"{Q.asDebugString} is missing \"",
              "            missing.do { each -> s := s ++ each } ",
              "                separatedBy { s := s ++ \", \" }",
              "        }",
              "        return s",
              "    }",
              "    method deny(value) hasType (Undesired:Type) {",
              "        match (value)",
              "            case { _:Undesired ->",
              "                failBecause \"{value.asDebugString} has type {Undesired}\"",
              "            }",
              "            case { _ -> ",
              "                countOneAssertion ",
              "            }",
              "    }",
              "}",
              "",
              "class testCaseNamed(name') -> TestCase {",
              "    inherits assertion",
              "",
              "    def size is public = 1",
              "    var currentResult",
              "    method name {name'}",
              "",
              "    method setup { }",
              "    method teardown { }",
              "    method countOneAssertion {",
              "        currentResult.countOneAssertion",
              "    }",
              "",
              "    method run (result) {",
              "        currentResult := result",
              "        result.testStarted(name)",
              "        try {",
              "            try {",
              "                setup",
              "                runTest",
              "            } finally { teardown }",
              "        } catch {e: self.AssertionFailure ->",
              "            result.testFailed(name)withMessage(e.message)",
              "        } catch {e: Exception ->",
              "            result.testErrored(name)withMessage \"{e.exception}: {e.message}\"",
              "        }",
              "        result.testFinished(name)",
              "    }",
              "",
              "    method debug (result) {",
              "        currentResult := result",
              "        result.testStarted(name)",
              "        try {",
              "            print \"\\ndebugging method {name} ...\"",
              "            try {",
              "                setup",
              "                runTest",
              "            } finally { teardown }",
              "        } catch {e: Exception ->",
              "            result.testErrored(name)withMessage(e.message)",
              "            printBackTrace(e) limitedTo(name)",
              "        }",
              "        result.testFinished(name)",
              "    }",
              "    ",
              "    method runTest {",
              "        def methodImage = mirror.reflect(self).getMethod(name)",
              "        methodImage.requestWithArgs(emptySequence)",
              "    }",
              "",
              "    method printBackTrace(exceptionPacket) limitedTo(testName) {",
              "        def ex = exceptionPacket.exception",
              "        def msg = exceptionPacket.message",
              "        def lineNr = exceptionPacket.lineNumber",
              "        print \"{ex} on line {lineNr}: {msg}\"",
              "        def bt = exceptionPacket.backtrace",
              "        while {bt.size > 0} do {",
              "            def frameDescription = bt.pop",
              "            print(\"  called from \" ++ frameDescription)",
              "            if (frameDescription.contains(testName)) then { return }",
              "            if (frameDescription.contains \"testCaseNamed()setupIn()asTestNumber\")",
              "                    then {  ",
              "                // this is for minitest, where the name won't be on the stack",
              "                return",
              "            }",
              "        }",
              "    }",
              "",
              "    method runAndPrintResults {",
              "        def result = testResult",
              "        self.run(result)",
              "        if (name == \"\") then {",
              "            print \"{result.detailedSummary}\"",
              "        } else {",
              "            print \"{self.name}: {result.detailedSummary}\"",
              "        }",
              "    }",
              "    ",
              "    method debugAndPrintResults {",
              "        def result = testResult",
              "        self.debug(result)",
              "        if (name == \"\") then {",
              "            print \"{result.detailedSummary}\"",
              "        } else {",
              "            print \"{self.name}: {result.detailedSummary}\"",
              "        }",
              "    }",
              "}",
              "",
              "",
              "class testResult {",
              "    var failSet := emptySet",
              "    var errorSet := emptySet",
              "    var runCount := 0",
              "    var currentCountOfAssertions := 0",
              "",
              "    method countOneAssertion {",
              "        currentCountOfAssertions := currentCountOfAssertions + 1",
              "    }",
              "",
              "    method testStarted(name) {",
              "        runCount := runCount + 1",
              "        currentCountOfAssertions := 0",
              "    }",
              "",
              "    method testFinished(name) {",
              "        if(currentCountOfAssertions == 0) then {",
              "            failSet.add(testRecordFor(name)message(\"no assertions were checked in this test\"))",
              "        }",
              "    }",
              "    ",
              "    method testFailed(name)withMessage(msg) {",
              "        failSet.add(testRecordFor(name)message(msg))",
              "    }",
              "    ",
              "    method testErrored(name)withMessage(msg) {",
              "        errorSet.add(testRecordFor(name)message(msg))",
              "        currentCountOfAssertions := 1   // to prevent the \"no assertions\" failure",
              "    }",
              "    ",
              "    method summary {",
              "        def s = if (numberOfErrors == 1) then {\"\"} else {\"s\"}",
              "        \"{runCount} run, {numberOfFailures} failed, {numberOfErrors} error{s}\"",
              "    }",
              "    ",
              "    method detailedSummary {",
              "        var output := summary",
              "        if (numberOfFailures > 0) then {",
              "            output := output ++ \"\\nFailures:\"",
              "            for (failSet.asList.sort) do { each ->",
              "                output := output ++ \"\\n    \" ++ each",
              "            }",
              "        }",
              "        if (numberOfErrors > 0) then {",
              "            output := output ++ \"\\nErrors:\"",
              "            for (errorSet.asList.sort) do { each ->",
              "                output := output ++ \"\\n    \" ++ each",
              "            }",
              "        }",
              "        output",
              "    }",
              "    ",
              "    method numberOfErrors {",
              "        errorSet.size",
              "    }",
              "    ",
              "    method errors {",
              "        list(errorSet).sort",
              "    }",
              "    ",
              "    method erroredTestNames {",
              "        errorSet.map{each -> each.name}.asList.sort",
              "    }",
              "    ",
              "    method numberOfFailures {",
              "        failSet.size",
              "    }",
              "    ",
              "    method failures {",
              "        list(failSet).sort",
              "    }",
              "    ",
              "    method failedTestNames {",
              "        failSet.map{each -> each.name}.asList.sort",
              "    }",
              "    ",
              "    method numberRun {",
              "        runCount",
              "    }",
              "}",
              "",
              "class testRecordFor(testName)message(testMsg) {",
              "    method name {testName}",
              "    method message {testMsg}",
              "    method asString {\"{name}: {testMsg}\"}",
              "    method hash {name.hash}",
              "    method compare(other) { name.compare(other.name) }",
              "    method < (other) { name < other.name }",
              "    method ≤ (other) { name ≤ other.name }",
              "    method == (other) { name == other.name }",
              "    method > (other) { name < other.name }",
              "    method ≥ (other) { name ≥ other.name }",
              "}",
              "",
              "def testSuite is public = object {",
              "",
              "    class withAll(initialContents) {",
              "        inherits collections.enumerable.TRAIT",
              "        var name is public := \"\"",
              "        def tests = [ ]",
              "        def testNames = emptySet",
              "        var errorsToBeRerun := true",
              "",
              "        method doNotRerunErrors { errorsToBeRerun := false }",
              "        method doRerunErrors { errorsToBeRerun := true }",
              "        for (initialContents) do { each -> self.add(each) }",
              "                ",
              "        method add(e) {",
              "            def eName = e.name",
              "            if (testNames.contains (eName)) then {",
              "                print \"Warning: more than one test named \\\"{eName}\\\"\"",
              "            } else {",
              "                testNames.add(eName)",
              "            }",
              "            tests.push(e)",
              "        }",
              "        ",
              "        method run(result) {",
              "            for (tests) do { each -> each.run(result) }",
              "        }",
              "        ",
              "        method debug(result) {",
              "            for (tests) do { each -> each.debug(result) }",
              "        }",
              "",
              "        method size { tests.size }",
              "        ",
              "        method runAndPrintResults {",
              "            def result = testResult",
              "            self.run(result)",
              "            if (name == \"\") then {",
              "                print \"{result.detailedSummary}\"",
              "            } else {",
              "                print \"{self.name}: {result.detailedSummary}\"",
              "            }",
              "            if ((result.numberOfErrors > 0) && errorsToBeRerun) then {",
              "                rerunErrors(result)",
              "            }",
              "        }",
              "        ",
              "        method debugAndPrintResults {",
              "            def result = testResult",
              "            self.debug(result)",
              "            if (name == \"\") then {",
              "                print \"{result.detailedSummary}\"",
              "            } else {",
              "                print \"{self.name}: {result.detailedSummary}\"",
              "            }",
              "        }",
              "        ",
              "        method iterator { tests.iterator }",
              "        method do (aBlock) { tests.do (aBlock) }",
              "        method addAll(anotherSuite) {",
              "            anotherSuite.do { each -> self.add(each) }",
              "            self",
              "        }",
              "        method ++ (anotherSuite) {",
              "            outer.withAll(tests).addAll(anotherSuite)",
              "        }",
              "        method rerunErrors(result) {",
              "            if (numberOfErrorsToRerun ≤ 0) then { return }",
              "            var n := min(result.numberOfErrors, numberOfErrorsToRerun)",
              "            if (n == 1) then {",
              "                print \"\\nRe-running 1 error.\"",
              "            } else {",
              "                print \"\\nRe-running {n} errors.\"",
              "            }",
              "            def newResult = testResult",
              "            def errors = result.erroredTestNames",
              "            tests.do { each ->",
              "                if (errors.contains(each.name)) then {",
              "                    each.debug(newResult)",
              "                    n := n - 1",
              "                    if (n == 0) then { return }",
              "                }",
              "            }",
              "        }",
              "    }",
              "    ",
              "    method empty { withAll [] }",
              "    ",
              "    method fromTestMethodsIn(aTestClass) named (aName) {",
              "        def newSuite = self.empty",
              "        def example = aTestClass.forMethod(\"null\")",
              "        newSuite.name := aName",
              "        for (mirror.reflect(example).methods) do { each ->",
              "            if (each.name.startsWith \"test\") then {",
              "                if (! each.name.endsWith \"()object\") then {",
              "                    // we should also check that there are no arguments",
              "                    // but a mirror on a method with no arguments currently",
              "                    // has a partcount of 1!",
              "                    newSuite.add(aTestClass.forMethod(each.name))",
              "                }",
              "            }",
              "        }",
              "        newSuite",
              "    }",
              "    ",
              "    method fromTestMethodsIn(aTestClass) {",
              "        fromTestMethodsIn(aTestClass) named (className(aTestClass))",
              "    }",
              "}",
              "",
              "method className(testClass) {",
              "    def cName = testClass.asString",
              "    if (cName.startsWith \"class \") then {",
              "        cName.substringFrom 7 to (cName.size)",
              "    } elseif { cName.startsWith \"trait \" } then {",
              "        cName.substringFrom 7 to (cName.size)",
              "    } elseif { cName.startsWith \"a \" } then {",
              "        cName.substringFrom 3 to (cName.size)",
              "    } elseif { cName.startsWith \"an \" } then {",
              "        cName.substringFrom 4 to (cName.size)",
              "    } else {",
              "        \"un-named\"",
              "    }",
              "}" ];
          }
          if (typeof global !== "undefined")
            global.gracecode_gUnit = gracecode_gUnit;
          if (typeof window !== "undefined")
            window.gracecode_gUnit = gracecode_gUnit;
