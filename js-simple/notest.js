"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_notest() {
  setModuleName("notest");
  this.definitionModule = "notest";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_notest_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_notest_outer0;
  setLineNumber(6);    // compilenode identifier
  var call1 = callmethodChecked(var_prelude, "methods()object", [0, 1], this);
  this.superobj = call1;
  if (call1.data) this.data = call1.data;
  if (call1.hasOwnProperty('_value'))
      this._value = call1._value;
  setLineNumber(8);    // compilenode method
  var func2 = function(argcv) {    // method assert(1)description(1)
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
    if (!Grace_isTrue(callmethod(var_Boolean, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in assert (arg list 1), which corresponds to parameter bb, does not have " + 
                callmethod(var_Boolean, "asString", [0])._value + "."));
    curarg++;
    if (!Grace_isTrue(callmethod(var_String, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in description (arg list 2), which corresponds to parameter str, does not have " + 
                callmethod(var_String, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("notest");
    return GraceDone;
  };
  func2.paramTypes = [];
  func2.paramTypes.push([type_Boolean, "bb"]);
  func2.paramTypes.push([type_String, "str"]);
  func2.paramCounts = [1, 1];
  this.methods["assert()description"] = func2;
  func2.definitionLine = 8;
  func2.definitionModule = "notest";
  setLineNumber(10);    // compilenode method
  var func3 = function(argcv) {    // method deny(1)description(1)
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
    if (!Grace_isTrue(callmethod(var_Boolean, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in deny (arg list 1), which corresponds to parameter bb, does not have " + 
                callmethod(var_Boolean, "asString", [0])._value + "."));
    curarg++;
    if (!Grace_isTrue(callmethod(var_String, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in description (arg list 2), which corresponds to parameter str, does not have " + 
                callmethod(var_String, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("notest");
    return GraceDone;
  };
  func3.paramTypes = [];
  func3.paramTypes.push([type_Boolean, "bb"]);
  func3.paramTypes.push([type_String, "str"]);
  func3.paramCounts = [1, 1];
  this.methods["deny()description"] = func3;
  func3.definitionLine = 10;
  func3.definitionModule = "notest";
  setLineNumber(12);    // compilenode method
  var func4 = function(argcv) {    // method assert(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_bb = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for assert(1)"));
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_Boolean, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in assert (arg list 1), which corresponds to parameter bb, does not have " + 
                callmethod(var_Boolean, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("notest");
    return GraceDone;
  };
  func4.paramTypes = [];
  func4.paramTypes.push([type_Boolean, "bb"]);
  func4.paramCounts = [1];
  this.methods["assert"] = func4;
  func4.definitionLine = 12;
  func4.definitionModule = "notest";
  setLineNumber(14);    // compilenode method
  var func5 = function(argcv) {    // method deny(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_bb = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for deny(1)"));
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_Boolean, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in deny (arg list 1), which corresponds to parameter bb, does not have " + 
                callmethod(var_Boolean, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("notest");
    return GraceDone;
  };
  func5.paramTypes = [];
  func5.paramTypes.push([type_Boolean, "bb"]);
  func5.paramCounts = [1];
  this.methods["deny"] = func5;
  func5.definitionLine = 14;
  func5.definitionModule = "notest";
  setLineNumber(16);    // compilenode method
  var func6 = function(argcv) {    // method assert(1)shouldBe(1)
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
    setModuleName("notest");
    return GraceDone;
  };
  func6.paramTypes = [];
  func6.paramTypes.push([type_Object, "s1"]);
  func6.paramTypes.push([type_Object, "s2"]);
  func6.paramCounts = [1, 1];
  this.methods["assert()shouldBe"] = func6;
  func6.definitionLine = 16;
  func6.definitionModule = "notest";
  setLineNumber(18);    // compilenode method
  var func7 = function(argcv) {    // method assert(1)shouldntBe(1)
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
    setModuleName("notest");
    return GraceDone;
  };
  func7.paramTypes = [];
  func7.paramTypes.push([type_Object, "s1"]);
  func7.paramTypes.push([type_Object, "s2"]);
  func7.paramCounts = [1, 1];
  this.methods["assert()shouldntBe"] = func7;
  func7.definitionLine = 18;
  func7.definitionModule = "notest";
  setLineNumber(20);    // compilenode method
  var func8 = function(argcv) {    // method assert(1)shouldEqual(1)within(1)
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
    setModuleName("notest");
    return GraceDone;
  };
  func8.paramTypes = [];
  func8.paramTypes.push([type_Number, "n1"]);
  func8.paramTypes.push([type_Number, "n2"]);
  func8.paramTypes.push([type_Number, "epsilon"]);
  func8.paramCounts = [1, 1, 1];
  this.methods["assert()shouldEqual()within"] = func8;
  func8.definitionLine = 20;
  func8.definitionModule = "notest";
  setLineNumber(22);    // compilenode method
  var func9 = function(argcv) {    // method assert(1)shouldRaise(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_b = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for assert (arg list 1) of assert(1)shouldRaise(1)"));
    var var_desired = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for shouldRaise (arg list 2) of assert(1)shouldRaise(1)"));
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_Block, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in assert (arg list 1), which corresponds to parameter b, does not have " + 
                callmethod(var_Block, "asString", [0])._value + "."));
    curarg++;
    onSelf = true;
    var call10 = callmethodChecked(this, "ExceptionKind", [0]);
    if (!Grace_isTrue(callmethod(call10, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in shouldRaise (arg list 2), which corresponds to parameter desired, does not have " + 
                callmethod(call10, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("notest");
    return GraceDone;
  };
  func9.paramTypes = [];
  func9.paramTypes.push([type_Block, "b"]);
  func9.paramTypes.push([]);
  func9.paramCounts = [1, 1];
  this.methods["assert()shouldRaise"] = func9;
  func9.definitionLine = 22;
  func9.definitionModule = "notest";
  setLineNumber(24);    // compilenode method
  var func11 = function(argcv) {    // method assert(1)shouldntRaise(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_b = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for assert (arg list 1) of assert(1)shouldntRaise(1)"));
    var var_undesired = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for shouldntRaise (arg list 2) of assert(1)shouldntRaise(1)"));
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_Block, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in assert (arg list 1), which corresponds to parameter b, does not have " + 
                callmethod(var_Block, "asString", [0])._value + "."));
    curarg++;
    onSelf = true;
    var call12 = callmethodChecked(this, "ExceptionKind", [0]);
    if (!Grace_isTrue(callmethod(call12, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in shouldntRaise (arg list 2), which corresponds to parameter undesired, does not have " + 
                callmethod(call12, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("notest");
    return GraceDone;
  };
  func11.paramTypes = [];
  func11.paramTypes.push([type_Block, "b"]);
  func11.paramTypes.push([]);
  func11.paramCounts = [1, 1];
  this.methods["assert()shouldntRaise"] = func11;
  func11.definitionLine = 24;
  func11.definitionModule = "notest";
  setLineNumber(26);    // compilenode method
  var func13 = function(argcv) {    // method assert(1)hasType(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_s = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for assert (arg list 1) of assert(1)hasType(1)"));
    var var_desired = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for hasType (arg list 2) of assert(1)hasType(1)"));
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_Object, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in assert (arg list 1), which corresponds to parameter s, does not have " + 
                callmethod(var_Object, "asString", [0])._value + "."));
    curarg++;
    if (!Grace_isTrue(callmethod(var_Type, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in hasType (arg list 2), which corresponds to parameter desired, does not have " + 
                callmethod(var_Type, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("notest");
    return GraceDone;
  };
  func13.paramTypes = [];
  func13.paramTypes.push([type_Object, "s"]);
  func13.paramTypes.push([type_Type, "desired"]);
  func13.paramCounts = [1, 1];
  this.methods["assert()hasType"] = func13;
  func13.definitionLine = 26;
  func13.definitionModule = "notest";
  setLineNumber(28);    // compilenode method
  var func14 = function(argcv) {    // method deny(1)hasType(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_s = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for deny (arg list 1) of deny(1)hasType(1)"));
    var var_undesired = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for hasType (arg list 2) of deny(1)hasType(1)"));
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_Object, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in deny (arg list 1), which corresponds to parameter s, does not have " + 
                callmethod(var_Object, "asString", [0])._value + "."));
    curarg++;
    if (!Grace_isTrue(callmethod(var_Type, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in hasType (arg list 2), which corresponds to parameter undesired, does not have " + 
                callmethod(var_Type, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("notest");
    return GraceDone;
  };
  func14.paramTypes = [];
  func14.paramTypes.push([type_Object, "s"]);
  func14.paramTypes.push([type_Type, "undesired"]);
  func14.paramCounts = [1, 1];
  this.methods["deny()hasType"] = func14;
  func14.definitionLine = 28;
  func14.definitionModule = "notest";
  setLineNumber(30);    // compilenode method
  var func15 = function(argcv) {    // method assertType(1)describes(1)
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
    if (!Grace_isTrue(callmethod(var_Type, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in assertType (arg list 1), which corresponds to parameter T, does not have " + 
                callmethod(var_Type, "asString", [0])._value + "."));
    curarg++;
    curarg++;
    // End argument checking
    setModuleName("notest");
    return GraceDone;
  };
  func15.paramTypes = [];
  func15.paramTypes.push([type_Type, "T"]);
  func15.paramTypes.push([]);
  func15.paramCounts = [1, 1];
  this.methods["assertType()describes"] = func15;
  func15.definitionLine = 30;
  func15.definitionModule = "notest";
  setLineNumber(32);    // compilenode method
  var func16 = function(argcv) {    // method failBecause(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_reason = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for failBecause(1)"));
    setModuleName("notest");
    return GraceDone;
  };
  func16.paramCounts = [1];
  this.methods["failBecause"] = func16;
  func16.definitionLine = 32;
  func16.definitionModule = "notest";
  setLineNumber(34);    // compilenode method
  var func17 = function(argcv) {    // method testSuiteNamed(1)with(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_name = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for testSuiteNamed (arg list 1) of testSuiteNamed(1)with(1)"));
    var var_block = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for with (arg list 2) of testSuiteNamed(1)with(1)"));
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_String, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in testSuiteNamed (arg list 1), which corresponds to parameter name, does not have " + 
                callmethod(var_String, "asString", [0])._value + "."));
    curarg++;
    if (!Grace_isTrue(callmethod(var_Block, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in with (arg list 2), which corresponds to parameter block, does not have " + 
                callmethod(var_Block, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("notest");
    return GraceDone;
  };
  func17.paramTypes = [];
  func17.paramTypes.push([type_String, "name"]);
  func17.paramTypes.push([type_Block, "block"]);
  func17.paramCounts = [1, 1];
  this.methods["testSuiteNamed()with"] = func17;
  func17.definitionLine = 34;
  func17.definitionModule = "notest";
  setLineNumber(36);    // compilenode method
  var func18 = function(argcv) {    // method testSuite(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_block = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for testSuite(1)"));
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_Block, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in testSuite (arg list 1), which corresponds to parameter block, does not have " + 
                callmethod(var_Block, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("notest");
    return GraceDone;
  };
  func18.paramTypes = [];
  func18.paramTypes.push([type_Block, "block"]);
  func18.paramCounts = [1];
  this.methods["testSuite"] = func18;
  func18.definitionLine = 36;
  func18.definitionModule = "notest";
  setLineNumber(38);    // compilenode method
  var func19 = function(argcv) {    // method test(1)by(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_name = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for test (arg list 1) of test(1)by(1)"));
    var var_block = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for by (arg list 2) of test(1)by(1)"));
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_String, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in test (arg list 1), which corresponds to parameter name, does not have " + 
                callmethod(var_String, "asString", [0])._value + "."));
    curarg++;
    if (!Grace_isTrue(callmethod(var_Block, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in by (arg list 2), which corresponds to parameter block, does not have " + 
                callmethod(var_Block, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("notest");
    return GraceDone;
  };
  func19.paramTypes = [];
  func19.paramTypes.push([type_String, "name"]);
  func19.paramTypes.push([type_Block, "block"]);
  func19.paramCounts = [1, 1];
  this.methods["test()by"] = func19;
  func19.definitionLine = 38;
  func19.definitionModule = "notest";
  return this;
}
gracecode_notest.imports = [];
if (typeof gctCache !== "undefined")
  gctCache['notest'] = "classes:\nconfidential:\nfresh-methods:\nmodules:\npath:\n notest\npublic:\n AndPattern\n BaseType\n BasicPattern\n Binding\n BindingPattern\n Block0\n Block1\n Block2\n Block3\n BoundsError\n Cmd\n Collection\n ConcurrentModification\n Dictionary\n Enumerable\n ExceptionKind\n Expandable\n Extractable\n FailedMatch\n Fun\n Fun2\n Fun3\n Iterable\n Iterator\n IteratorExhausted\n List\n MatchAndDestructuringPattern\n MatchResult\n NoSuchObject\n OrPattern\n Pattern\n Point\n Proc\n Proc2\n Proc3\n RequestError\n Sequence\n Set\n Singleton\n SubobjectResponsibility\n SuccessfulMatch\n TypeIntersection\n TypeSubtraction\n TypeUnion\n TypeVariant\n UninitializedVariable\n VariablePattern\n WildcardPattern\n abstract\n alwaysEqual\n assert\n assert()description\n assert()hasType\n assert()shouldBe\n assert()shouldEqual()within\n assert()shouldRaise\n assert()shouldntBe\n assert()shouldntRaise\n assertType()describes\n binding\n collection\n collections\n deny\n deny()description\n deny()hasType\n dictionary\n do()while\n emptyDictionary\n emptyList\n emptySequence\n emptySet\n enumerable\n failBecause\n for()and()do\n indexable\n list\n max\n methods\n min\n point2Dx()y\n range\n repeat()times\n required\n sequence\n set\n test()by\n testSuite\n testSuiteNamed()with\n valueOf\ntypes:\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["notest"] = [
    "// This module is a subsitute fo rthe minitest dialect.",
    "// It does no testing at all.  It exists so that student code that",
    "// depends on minitest can be run by the instuctor under gUnit,",
    "// without getting confounding results from the mintest tests.",
    "",
    "inherits prelude.methods",
    "",
    "method assert(bb:Boolean) description(str:String) { }",
    "",
    "method deny(bb:Boolean) description(str:String) { }",
    "",
    "method assert(bb:Boolean) { }",
    "",
    "method deny(bb:Boolean) { }",
    "",
    "method assert(s1:Object) shouldBe (s2:Object) { }",
    "",
    "method assert(s1:Object) shouldntBe (s2:Object) { }",
    "",
    "method assert(n1:Number) shouldEqual (n2:Number) within (epsilon:Number) { }",
    "",
    "method assert(b:Block) shouldRaise (desired:ExceptionKind) { }",
    "",
    "method assert(b:Block) shouldntRaise (undesired:ExceptionKind) { }",
    "",
    "method assert(s:Object) hasType (desired:Type) { }",
    "",
    "method deny(s:Object) hasType (undesired:Type) { }",
    "",
    "method assertType(T:Type) describes (value) { }",
    "",
    "method failBecause(reason) { }",
    "",
    "method testSuiteNamed (name:String) with (block:Block) { }",
    "",
    "method testSuite (block:Block) { }",
    "",
    "method test(name:String) by(block:Block) { }",
    "" ];
}
if (typeof global !== "undefined")
  global.gracecode_notest = gracecode_notest;
if (typeof window !== "undefined")
  window.gracecode_notest = gracecode_notest;
