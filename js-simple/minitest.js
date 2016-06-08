"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_minitest() {
  setModuleName("minitest");
  this.definitionModule = "minitest";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_minitest_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_minitest_outer0;
  setLineNumber(1);    // compilenode import
  // Import of gUnit as gu
  if (typeof gracecode_gUnit == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module gUnit'));
  var var_gu = do_import("gUnit", gracecode_gUnit);
  var func1 = function(argcv) {    // method gu
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for gu"));
    setModuleName("minitest");
    // gu is a simple accessor - elide try ... catch
    return var_gu;
  };
  func1.paramCounts = [0];
  this.methods["gu"] = func1;
  func1.definitionLine = 1;
  func1.definitionModule = "minitest";
  func1.debug = "import";
  func1.confidential = true;
  setModuleName("minitest");
  setLineNumber(3);    // compilenode identifier
  var call2 = callmethodChecked(var_prelude, "methods()object", [0, 1], this);
  this.superobj = call2;
  if (call2.data) this.data = call2.data;
  if (call2.hasOwnProperty('_value'))
      this._value = call2._value;
  setLineNumber(14);    // compilenode method
  var func3 = function(argcv) {    // method numberOfErrorsToRerun
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for numberOfErrorsToRerun"));
    setModuleName("minitest");
    var call4 = callmethodChecked(var_gu, "numberOfErrorsToRerun", [0]);
    if (!Grace_isTrue(callmethod(var_Number, "match", [1], call4)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("result of method numberOfErrorsToRerun does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    return call4;
  };
  func3.paramCounts = [0];
  this.methods["numberOfErrorsToRerun"] = func3;
  func3.definitionLine = 14;
  func3.definitionModule = "minitest";
  setLineNumber(15);    // compilenode method
  var func5 = function(argcv) {    // method numberOfErrorsToRerun:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_n = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for numberOfErrorsToRerun:=(1)"));
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_Number, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in numberOfErrorsToRerun:= (arg list 1), which corresponds to parameter n, does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("minitest");
    setLineNumber(16);    // compilenode identifier
    var call6 = callmethodChecked(var_gu, "numberOfErrorsToRerun:=", [1], var_n);
    return call6;
  };
  func5.paramTypes = [];
  func5.paramTypes.push([type_Number, "n"]);
  func5.paramCounts = [1];
  this.methods["numberOfErrorsToRerun:="] = func5;
  func5.definitionLine = 15;
  func5.definitionModule = "minitest";
  setLineNumber(32);    // compilenode method
  var func7 = function(argcv) {    // method assert(1)description(1)
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
    setModuleName("minitest");
    setLineNumber(33);    // compilenode identifier
    var call8 = callmethodChecked(var_mtAssertion, "assert()description", [1, 1], var_bb, var_str);
    return call8;
  };
  func7.paramTypes = [];
  func7.paramTypes.push([type_Boolean, "bb"]);
  func7.paramTypes.push([type_String, "str"]);
  func7.paramCounts = [1, 1];
  this.methods["assert()description"] = func7;
  func7.definitionLine = 32;
  func7.definitionModule = "minitest";
  setLineNumber(36);    // compilenode method
  var func9 = function(argcv) {    // method deny(1)description(1)
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
    setModuleName("minitest");
    setLineNumber(37);    // compilenode identifier
    var call10 = callmethodChecked(var_mtAssertion, "deny()description", [1, 1], var_bb, var_str);
    return call10;
  };
  func9.paramTypes = [];
  func9.paramTypes.push([type_Boolean, "bb"]);
  func9.paramTypes.push([type_String, "str"]);
  func9.paramCounts = [1, 1];
  this.methods["deny()description"] = func9;
  func9.definitionLine = 36;
  func9.definitionModule = "minitest";
  setLineNumber(40);    // compilenode method
  var func11 = function(argcv) {    // method assert(1)
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
    setModuleName("minitest");
    setLineNumber(41);    // compilenode identifier
    var call12 = callmethodChecked(var_mtAssertion, "assert", [1], var_bb);
    return call12;
  };
  func11.paramTypes = [];
  func11.paramTypes.push([type_Boolean, "bb"]);
  func11.paramCounts = [1];
  this.methods["assert"] = func11;
  func11.definitionLine = 40;
  func11.definitionModule = "minitest";
  setLineNumber(44);    // compilenode method
  var func13 = function(argcv) {    // method deny(1)
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
    setModuleName("minitest");
    setLineNumber(45);    // compilenode identifier
    var call14 = callmethodChecked(var_mtAssertion, "deny", [1], var_bb);
    return call14;
  };
  func13.paramTypes = [];
  func13.paramTypes.push([type_Boolean, "bb"]);
  func13.paramCounts = [1];
  this.methods["deny"] = func13;
  func13.definitionLine = 44;
  func13.definitionModule = "minitest";
  setLineNumber(48);    // compilenode method
  var func15 = function(argcv) {    // method assert(1)shouldBe(1)
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
    setModuleName("minitest");
    setLineNumber(49);    // compilenode identifier
    var call16 = callmethodChecked(var_mtAssertion, "assert()shouldBe", [1, 1], var_s1, var_s2);
    return call16;
  };
  func15.paramTypes = [];
  func15.paramTypes.push([type_Object, "s1"]);
  func15.paramTypes.push([type_Object, "s2"]);
  func15.paramCounts = [1, 1];
  this.methods["assert()shouldBe"] = func15;
  func15.definitionLine = 48;
  func15.definitionModule = "minitest";
  setLineNumber(52);    // compilenode method
  var func17 = function(argcv) {    // method assert(1)shouldntBe(1)
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
    setModuleName("minitest");
    setLineNumber(53);    // compilenode identifier
    var call18 = callmethodChecked(var_mtAssertion, "assert()shouldntBe", [1, 1], var_s1, var_s2);
    return call18;
  };
  func17.paramTypes = [];
  func17.paramTypes.push([type_Object, "s1"]);
  func17.paramTypes.push([type_Object, "s2"]);
  func17.paramCounts = [1, 1];
  this.methods["assert()shouldntBe"] = func17;
  func17.definitionLine = 52;
  func17.definitionModule = "minitest";
  setLineNumber(56);    // compilenode method
  var func19 = function(argcv) {    // method assert(1)shouldEqual(1)within(1)
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
    setModuleName("minitest");
    setLineNumber(57);    // compilenode identifier
    var call20 = callmethodChecked(var_mtAssertion, "assert()shouldEqual()within", [1, 1, 1], var_n1, var_n2, var_epsilon);
    return call20;
  };
  func19.paramTypes = [];
  func19.paramTypes.push([type_Number, "n1"]);
  func19.paramTypes.push([type_Number, "n2"]);
  func19.paramTypes.push([type_Number, "epsilon"]);
  func19.paramCounts = [1, 1, 1];
  this.methods["assert()shouldEqual()within"] = func19;
  func19.definitionLine = 56;
  func19.definitionModule = "minitest";
  setLineNumber(60);    // compilenode method
  var func21 = function(argcv) {    // method assert(1)shouldRaise(1)
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
    var call22 = callmethodChecked(this, "ExceptionKind", [0]);
    if (!Grace_isTrue(callmethod(call22, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in shouldRaise (arg list 2), which corresponds to parameter desired, does not have " + 
                callmethod(call22, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("minitest");
    setLineNumber(61);    // compilenode identifier
    var call23 = callmethodChecked(var_mtAssertion, "assert()shouldRaise", [1, 1], var_b, var_desired);
    return call23;
  };
  func21.paramTypes = [];
  func21.paramTypes.push([type_Block, "b"]);
  func21.paramTypes.push([]);
  func21.paramCounts = [1, 1];
  this.methods["assert()shouldRaise"] = func21;
  func21.definitionLine = 60;
  func21.definitionModule = "minitest";
  setLineNumber(64);    // compilenode method
  var func24 = function(argcv) {    // method assert(1)shouldntRaise(1)
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
    var call25 = callmethodChecked(this, "ExceptionKind", [0]);
    if (!Grace_isTrue(callmethod(call25, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in shouldntRaise (arg list 2), which corresponds to parameter undesired, does not have " + 
                callmethod(call25, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("minitest");
    setLineNumber(65);    // compilenode identifier
    var call26 = callmethodChecked(var_mtAssertion, "assert()shouldntRaise", [1, 1], var_b, var_undesired);
    return call26;
  };
  func24.paramTypes = [];
  func24.paramTypes.push([type_Block, "b"]);
  func24.paramTypes.push([]);
  func24.paramCounts = [1, 1];
  this.methods["assert()shouldntRaise"] = func24;
  func24.definitionLine = 64;
  func24.definitionModule = "minitest";
  setLineNumber(68);    // compilenode method
  var func27 = function(argcv) {    // method assert(1)hasType(1)
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
    setModuleName("minitest");
    setLineNumber(69);    // compilenode identifier
    var call28 = callmethodChecked(var_mtAssertion, "assert()hasType", [1, 1], var_s, var_desired);
    return call28;
  };
  func27.paramTypes = [];
  func27.paramTypes.push([type_Object, "s"]);
  func27.paramTypes.push([type_Type, "desired"]);
  func27.paramCounts = [1, 1];
  this.methods["assert()hasType"] = func27;
  func27.definitionLine = 68;
  func27.definitionModule = "minitest";
  setLineNumber(72);    // compilenode method
  var func29 = function(argcv) {    // method deny(1)hasType(1)
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
    setModuleName("minitest");
    setLineNumber(73);    // compilenode identifier
    var call30 = callmethodChecked(var_mtAssertion, "deny()hasType", [1, 1], var_s, var_undesired);
    return call30;
  };
  func29.paramTypes = [];
  func29.paramTypes.push([type_Object, "s"]);
  func29.paramTypes.push([type_Type, "undesired"]);
  func29.paramCounts = [1, 1];
  this.methods["deny()hasType"] = func29;
  func29.definitionLine = 72;
  func29.definitionModule = "minitest";
  setLineNumber(76);    // compilenode method
  var func31 = function(argcv) {    // method assertType(1)describes(1)
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
    setModuleName("minitest");
    setLineNumber(77);    // compilenode identifier
    var call32 = callmethodChecked(var_mtAssertion, "assertType()describes", [1, 1], var_T, var_value);
    return call32;
  };
  func31.paramTypes = [];
  func31.paramTypes.push([type_Type, "T"]);
  func31.paramTypes.push([]);
  func31.paramCounts = [1, 1];
  this.methods["assertType()describes"] = func31;
  func31.definitionLine = 76;
  func31.definitionModule = "minitest";
  setLineNumber(80);    // compilenode method
  var func33 = function(argcv) {    // method failBecause(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_reason = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for failBecause(1)"));
    setModuleName("minitest");
    setLineNumber(81);    // compilenode identifier
    var call34 = callmethodChecked(var_mtAssertion, "assert()description", [1, 1], GraceFalse, var_reason);
    return call34;
  };
  func33.paramCounts = [1];
  this.methods["failBecause"] = func33;
  func33.definitionLine = 80;
  func33.definitionModule = "minitest";
  setLineNumber(84);    // compilenode method
  var func35 = function(argcv) {    // method testSuiteNamed(1)with(1)
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
    setModuleName("minitest");
    var if36 = GraceDone;
    setLineNumber(85);    // compilenode identifier
    var opresult39 = callmethodChecked(var_nullSuite, "\u2260", [1], var_currentTestSuiteForDialect);
    if (Grace_isTrue(opresult39)) {
      setLineNumber(86);    // compilenode string
      var string40 = new GraceString("a testSuite cannot be created inside a testSuite");
      var call41 = callmethodChecked(var_prelude, "Exception", [0]);
      var call42 = callmethodChecked(call41, "raise", [1], string40);
      if36 = call42;
    }
    setLineNumber(88);    // compilenode identifier
    var call43 = callmethodChecked(var_gu, "testSuite", [0]);
    var call44 = callmethodChecked(call43, "empty", [0]);
    var_currentTestSuiteForDialect = call44;
    setLineNumber(89);    // compilenode identifier
    var call45 = callmethodChecked(var_currentTestSuiteForDialect, "name:=", [1], var_name);
    setLineNumber(90);    // compilenode identifier
    var_currentSetupBlockForTesting = var_block;
    setLineNumber(91);    // compilenode num
    var_currentTestInThisEvaluation = new GraceNum(0);
    setLineNumber(92);    // compilenode identifier
    var call46 = callmethodChecked(var_block, "apply", [0]);
    setLineNumber(93);    // compilenode identifier
    var_currentSetupBlockForTesting = var_nullBlock;
    setLineNumber(94);    // compilenode identifier
    var call47 = callmethodChecked(var_currentTestSuiteForDialect, "runAndPrintResults", [0]);
    setLineNumber(95);    // compilenode identifier
    var_currentTestSuiteForDialect = var_nullSuite;
    setLineNumber(96);    // compilenode num
    var_currentTestBlockForTesting = new GraceNum(0);
    return GraceDone;
  };
  func35.paramTypes = [];
  func35.paramTypes.push([type_String, "name"]);
  func35.paramTypes.push([type_Block, "block"]);
  func35.paramCounts = [1, 1];
  this.methods["testSuiteNamed()with"] = func35;
  func35.definitionLine = 84;
  func35.definitionModule = "minitest";
  setLineNumber(99);    // compilenode method
  var func48 = function(argcv) {    // method doNotRerunErrors
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for doNotRerunErrors"));
    setModuleName("minitest");
    var_errorsToBeRerun = GraceFalse;
    return GraceDone;
  };
  func48.paramCounts = [0];
  this.methods["doNotRerunErrors"] = func48;
  func48.definitionLine = 99;
  func48.definitionModule = "minitest";
  setLineNumber(100);    // compilenode method
  var func49 = function(argcv) {    // method doRerunErrors
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for doRerunErrors"));
    setModuleName("minitest");
    var_errorsToBeRerun = GraceTrue;
    return GraceDone;
  };
  func49.paramCounts = [0];
  this.methods["doRerunErrors"] = func49;
  func49.definitionLine = 100;
  func49.definitionModule = "minitest";
  setLineNumber(102);    // compilenode method
  var func50 = function(argcv) {    // method testSuite(1)
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
    setModuleName("minitest");
    setLineNumber(103);    // compilenode string
    var string51 = new GraceString("");
    onSelf = true;
    var call52 = callmethodChecked(this, "testSuiteNamed()with", [1, 1], string51, var_block);
    return call52;
  };
  func50.paramTypes = [];
  func50.paramTypes.push([type_Block, "block"]);
  func50.paramCounts = [1];
  this.methods["testSuite"] = func50;
  func50.definitionLine = 102;
  func50.definitionModule = "minitest";
  setLineNumber(106);    // compilenode method
  var func53 = function(argcv) {    // method test(1)by(1)
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
    setModuleName("minitest");
    var if54 = GraceDone;
    setLineNumber(107);    // compilenode identifier
    var opresult57 = callmethodChecked(var_nullSuite, "==", [1], var_currentTestSuiteForDialect);
    if (Grace_isTrue(opresult57)) {
      setLineNumber(108);    // compilenode string
      var string58 = new GraceString("a test can be created only within a testSuite");
      var call59 = callmethodChecked(var_prelude, "Exception", [0]);
      var call60 = callmethodChecked(call59, "raise", [1], string58);
      if54 = call60;
    }
    setLineNumber(110);    // compilenode identifier
    var opresult63 = callmethodChecked(var_currentTestInThisEvaluation, "+", [1], new GraceNum(1));
    var_currentTestInThisEvaluation = opresult63;
    var if64 = GraceDone;
    setLineNumber(111);    // compilenode identifier
    var opresult67 = callmethodChecked(var_nullBlock, "\u2260", [1], var_currentSetupBlockForTesting);
    if (Grace_isTrue(opresult67)) {
      setLineNumber(114);    // compilenode identifier
      onSelf = true;
      var call68 = callmethodChecked(this, "testCaseNamed()setupIn()asTestNumber", [1, 1, 1], var_name, var_currentSetupBlockForTesting, var_currentTestInThisEvaluation);
      setLineNumber(112);    // compilenode identifier
      var call69 = callmethodChecked(var_currentTestSuiteForDialect, "add", [1], call68);
      if64 = call69;
    } else {
      var if70 = GraceDone;
      setLineNumber(115);    // compilenode identifier
      var opresult73 = callmethodChecked(var_currentTestInThisEvaluation, "==", [1], var_currentTestBlockForTesting);
      if (Grace_isTrue(opresult73)) {
        setLineNumber(116);    // compilenode identifier
        var call74 = callmethodChecked(var_block, "apply", [0]);
        if70 = call74;
      }
      if64 = if70;
    }
    return if64;
  };
  func53.paramTypes = [];
  func53.paramTypes.push([type_String, "name"]);
  func53.paramTypes.push([type_Block, "block"]);
  func53.paramCounts = [1, 1];
  this.methods["test()by"] = func53;
  func53.definitionLine = 106;
  func53.definitionModule = "minitest";
  setLineNumber(120);    // compilenode method
  var func75 = function(argcv) {    // method testCaseNamed(1)setupIn(1)asTestNumber(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_name__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for testCaseNamed (arg list 1) of testCaseNamed(1)setupIn(1)asTestNumber(1)"));
    var var_setupBlock = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for setupIn (arg list 2) of testCaseNamed(1)setupIn(1)asTestNumber(1)"));
    var var_number = arguments[curarg];
    curarg++;
    if (argcv[2] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asTestNumber (arg list 3) of testCaseNamed(1)setupIn(1)asTestNumber(1)"));
    setModuleName("minitest");
    setLineNumber(121);    // compilenode object
    var obj76 = Grace_allocObject(null, "minitest.object");
    obj76.definitionModule = "minitest";
    obj76.definitionLine = 121;
    obj76.outer = this;
    var reader_minitest_outer77 = function() {
      return this.outer;
    };
    obj76.methods["outer"] = reader_minitest_outer77;
    var obj_init_76 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj76;
      var func78 = function(argcv) {    // method setup
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for setup"));
        setModuleName("minitest");
        setLineNumber(125);    // compilenode call
        var call79 = callmethodsuper(this, "setup", [0]);
        setLineNumber(126);    // compilenode identifier
        var_currentTestBlockForTesting = var_number;
        setLineNumber(127);    // compilenode num
        var_currentTestInThisEvaluation = new GraceNum(0);
        setLineNumber(128);    // compilenode identifier
        var call80 = callmethodChecked(var_setupBlock, "apply", [0]);
        return call80;
      };
      func78.paramCounts = [0];
      obj76.methods["setup"] = func78;
      func78.definitionLine = 124;
      func78.definitionModule = "minitest";
      var func81 = function(argcv) {    // method teardown
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for teardown"));
        setModuleName("minitest");
        setLineNumber(132);    // compilenode num
        var_currentTestBlockForTesting = new GraceNum(0);
        return GraceDone;
      };
      func81.paramCounts = [0];
      obj76.methods["teardown"] = func81;
      func81.definitionLine = 131;
      func81.definitionModule = "minitest";
      var func82 = function(argcv) {    // method currentResult:=(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_r = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for currentResult:=(1)"));
        setModuleName("minitest");
        setLineNumber(136);    // compilenode identifier
        var call83 = callmethodChecked(var_mtAssertion, "currentResult:=", [1], var_r);
        return call83;
      };
      func82.paramCounts = [1];
      obj76.methods["currentResult:="] = func82;
      func82.definitionLine = 135;
      func82.definitionModule = "minitest";
      var func84 = function(argcv) {    // method runTest
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for runTest"));
        setModuleName("minitest");
        return GraceDone;
      };
      func84.paramCounts = [0];
      obj76.methods["runTest"] = func84;
      func84.definitionLine = 139;
      func84.definitionModule = "minitest";
      setLineNumber(122);    // compilenode identifier
      var call85 = callmethodChecked(var_gu, "testCaseNamed()object", [1, 1], var_name__39__, this);
      obj76.superobj = call85;
      if (call85.data) obj76.data = call85.data;
      if (call85.hasOwnProperty('_value'))
          obj76._value = call85._value;
      superDepth = origSuperDepth;
    };
    obj_init_76.apply(obj76, []);
    setLineNumber(120);    // compilenode identifier
    var call86 = callmethodChecked(var_gu, "TestCase", [0]);
    setLineNumber(121);    // return value
    if (!Grace_isTrue(callmethod(call86, "match", [1], obj76)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("result of method testCaseNamed(1)setupIn(1)asTestNumber(1) does not have " + 
                callmethod(call86, "asString", [0])._value + "."));
    return obj76;
  };
  func75.paramCounts = [1, 1, 1];
  this.methods["testCaseNamed()setupIn()asTestNumber"] = func75;
  func75.definitionLine = 120;
  func75.definitionModule = "minitest";
    var func87 = function(argcv) {    // method testCaseNamed(1     )setupIn(1     )asTestNumber(1     )()object
      var curarg = 1;
      var var_name__39__ = arguments[curarg];
      curarg++;
      var var_setupBlock = arguments[curarg];
      curarg++;
      var var_number = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      // Start argument processing
      curarg = 1;
      curarg++;
      curarg++;
      curarg++;
      // End argument processing
      setModuleName("minitest");
      var returnTarget = invocationCount;
      invocationCount++;
      var obj88 = Grace_allocObject(null, "testCaseNamed()setupIn()asTestNumber");
      obj88.definitionModule = "minitest";
      obj88.definitionLine = 121;
      var inho88 = inheritingObject;
      while (inho88.superobj) inho88 = inho88.superobj;
      inho88.superobj = obj88;
      obj88.data = inheritingObject.data;
      if (inheritingObject.hasOwnProperty('_value'))
        obj88._value = inheritingObject._value;
      obj88.outer = this;
      var reader_minitest_outer89 = function() {
        return this.outer;
      };
      obj88.methods["outer"] = reader_minitest_outer89;
      var obj_init_88 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj88;
        var func90 = function(argcv) {    // method setup
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for setup"));
          setModuleName("minitest");
          setLineNumber(125);    // compilenode call
          var call91 = callmethodsuper(this, "setup", [0]);
          setLineNumber(126);    // compilenode identifier
          var_currentTestBlockForTesting = var_number;
          setLineNumber(127);    // compilenode num
          var_currentTestInThisEvaluation = new GraceNum(0);
          setLineNumber(128);    // compilenode identifier
          var call92 = callmethodChecked(var_setupBlock, "apply", [0]);
          return call92;
        };
        func90.paramCounts = [0];
        obj88.methods["setup"] = func90;
        func90.definitionLine = 124;
        func90.definitionModule = "minitest";
        var func93 = function(argcv) {    // method teardown
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for teardown"));
          setModuleName("minitest");
          setLineNumber(132);    // compilenode num
          var_currentTestBlockForTesting = new GraceNum(0);
          return GraceDone;
        };
        func93.paramCounts = [0];
        obj88.methods["teardown"] = func93;
        func93.definitionLine = 131;
        func93.definitionModule = "minitest";
        var func94 = function(argcv) {    // method currentResult:=(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_r = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for currentResult:=(1)"));
          setModuleName("minitest");
          setLineNumber(136);    // compilenode identifier
          var call95 = callmethodChecked(var_mtAssertion, "currentResult:=", [1], var_r);
          return call95;
        };
        func94.paramCounts = [1];
        obj88.methods["currentResult:="] = func94;
        func94.definitionLine = 135;
        func94.definitionModule = "minitest";
        var func96 = function(argcv) {    // method runTest
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for runTest"));
          setModuleName("minitest");
          return GraceDone;
        };
        func96.paramCounts = [0];
        obj88.methods["runTest"] = func96;
        func96.definitionLine = 139;
        func96.definitionModule = "minitest";
        setLineNumber(122);    // compilenode identifier
        var call97 = callmethodChecked(var_gu, "testCaseNamed()object", [1, 1], var_name__39__, this);
        obj88.superobj = call97;
        if (call97.data) obj88.data = call97.data;
        if (call97.hasOwnProperty('_value'))
            obj88._value = call97._value;
        superDepth = origSuperDepth;
      };
      obj_init_88.apply(inheritingObject, []);
      return obj88;
      };
      this.methods["testCaseNamed()setupIn()asTestNumber()object"] = func87;
    setLineNumber(5);    // compilenode string
    var string98 = new GraceString("nullSuite");
    var call99 = callmethodChecked(var___95__prelude, "Singleton", [0]);
    var call100 = callmethodChecked(call99, "named", [1], string98);
    var var_nullSuite = call100;
    var func101 = function(argcv) {    // method nullSuite
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for nullSuite"));
      setModuleName("minitest");
      // nullSuite is a simple accessor - elide try ... catch
      return var_nullSuite;
    };
    func101.paramCounts = [0];
    this.methods["nullSuite"] = func101;
    func101.definitionLine = 5;
    func101.definitionModule = "minitest";
    this.methods["nullSuite"].debug = "def";
    setLineNumber(6);    // compilenode string
    var string102 = new GraceString("nullBlock");
    var call103 = callmethodChecked(var___95__prelude, "Singleton", [0]);
    var call104 = callmethodChecked(call103, "named", [1], string102);
    var var_nullBlock = call104;
    var func105 = function(argcv) {    // method nullBlock
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for nullBlock"));
      setModuleName("minitest");
      // nullBlock is a simple accessor - elide try ... catch
      return var_nullBlock;
    };
    func105.paramCounts = [0];
    this.methods["nullBlock"] = func105;
    func105.definitionLine = 6;
    func105.definitionModule = "minitest";
    this.methods["nullBlock"].debug = "def";
    setLineNumber(8);    // compilenode identifier
    var var_currentTestSuiteForDialect = var_nullSuite;
    setLineNumber(6);    // compilenode method
    var func106 = function(argcv) {    // method currentTestSuiteForDialect
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for currentTestSuiteForDialect"));
      setModuleName("minitest");
      // currentTestSuiteForDialect is a simple accessor - elide try ... catch
      setLineNumber(8);    // compilenode identifier
      return var_currentTestSuiteForDialect;
    };
    func106.paramCounts = [0];
    this.methods["currentTestSuiteForDialect"] = func106;
    func106.definitionLine = 6;
    func106.definitionModule = "minitest";
    setLineNumber(6);    // compilenode method
    var func107 = function(argcv) {    // method currentTestSuiteForDialect:=(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var___95__var__95__assign__95__tmp = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for currentTestSuiteForDialect:=(1)"));
      setModuleName("minitest");
      var_currentTestSuiteForDialect = var___95__var__95__assign__95__tmp;
      return GraceDone;
    };
    func107.paramCounts = [1];
    this.methods["currentTestSuiteForDialect:="] = func107;
    func107.definitionLine = 6;
    func107.definitionModule = "minitest";
    this.methods["currentTestSuiteForDialect"].debug = "var";
    setLineNumber(9);    // compilenode identifier
    var var_currentSetupBlockForTesting = var_nullBlock;
    setLineNumber(6);    // compilenode method
    var func108 = function(argcv) {    // method currentSetupBlockForTesting
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for currentSetupBlockForTesting"));
      setModuleName("minitest");
      // currentSetupBlockForTesting is a simple accessor - elide try ... catch
      setLineNumber(9);    // compilenode identifier
      return var_currentSetupBlockForTesting;
    };
    func108.paramCounts = [0];
    this.methods["currentSetupBlockForTesting"] = func108;
    func108.definitionLine = 6;
    func108.definitionModule = "minitest";
    setLineNumber(6);    // compilenode method
    var func109 = function(argcv) {    // method currentSetupBlockForTesting:=(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var___95__var__95__assign__95__tmp = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for currentSetupBlockForTesting:=(1)"));
      setModuleName("minitest");
      var_currentSetupBlockForTesting = var___95__var__95__assign__95__tmp;
      return GraceDone;
    };
    func109.paramCounts = [1];
    this.methods["currentSetupBlockForTesting:="] = func109;
    func109.definitionLine = 6;
    func109.definitionModule = "minitest";
    this.methods["currentSetupBlockForTesting"].debug = "var";
    setLineNumber(10);    // compilenode num
    var var_currentTestBlockForTesting = new GraceNum(0);
    setLineNumber(6);    // compilenode method
    var func110 = function(argcv) {    // method currentTestBlockForTesting
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for currentTestBlockForTesting"));
      setModuleName("minitest");
      // currentTestBlockForTesting is a simple accessor - elide try ... catch
      setLineNumber(10);    // compilenode identifier
      return var_currentTestBlockForTesting;
    };
    func110.paramCounts = [0];
    this.methods["currentTestBlockForTesting"] = func110;
    func110.definitionLine = 6;
    func110.definitionModule = "minitest";
    setLineNumber(6);    // compilenode method
    var func111 = function(argcv) {    // method currentTestBlockForTesting:=(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var___95__var__95__assign__95__tmp = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for currentTestBlockForTesting:=(1)"));
      setModuleName("minitest");
      var_currentTestBlockForTesting = var___95__var__95__assign__95__tmp;
      return GraceDone;
    };
    func111.paramCounts = [1];
    this.methods["currentTestBlockForTesting:="] = func111;
    func111.definitionLine = 6;
    func111.definitionModule = "minitest";
    this.methods["currentTestBlockForTesting"].debug = "var";
    setLineNumber(11);    // compilenode num
    var var_currentTestInThisEvaluation = new GraceNum(0);
    setLineNumber(6);    // compilenode method
    var func112 = function(argcv) {    // method currentTestInThisEvaluation
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for currentTestInThisEvaluation"));
      setModuleName("minitest");
      // currentTestInThisEvaluation is a simple accessor - elide try ... catch
      setLineNumber(11);    // compilenode identifier
      return var_currentTestInThisEvaluation;
    };
    func112.paramCounts = [0];
    this.methods["currentTestInThisEvaluation"] = func112;
    func112.definitionLine = 6;
    func112.definitionModule = "minitest";
    setLineNumber(6);    // compilenode method
    var func113 = function(argcv) {    // method currentTestInThisEvaluation:=(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var___95__var__95__assign__95__tmp = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for currentTestInThisEvaluation:=(1)"));
      setModuleName("minitest");
      var_currentTestInThisEvaluation = var___95__var__95__assign__95__tmp;
      return GraceDone;
    };
    func113.paramCounts = [1];
    this.methods["currentTestInThisEvaluation:="] = func113;
    func113.definitionLine = 6;
    func113.definitionModule = "minitest";
    this.methods["currentTestInThisEvaluation"].debug = "var";
    setLineNumber(12);    // compilenode identifier
    var var_errorsToBeRerun = GraceTrue;
    setLineNumber(6);    // compilenode method
    var func114 = function(argcv) {    // method errorsToBeRerun
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for errorsToBeRerun"));
      setModuleName("minitest");
      // errorsToBeRerun is a simple accessor - elide try ... catch
      setLineNumber(12);    // compilenode identifier
      return var_errorsToBeRerun;
    };
    func114.paramCounts = [0];
    this.methods["errorsToBeRerun"] = func114;
    func114.definitionLine = 6;
    func114.definitionModule = "minitest";
    setLineNumber(6);    // compilenode method
    var func115 = function(argcv) {    // method errorsToBeRerun:=(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var___95__var__95__assign__95__tmp = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for errorsToBeRerun:=(1)"));
      setModuleName("minitest");
      var_errorsToBeRerun = var___95__var__95__assign__95__tmp;
      return GraceDone;
    };
    func115.paramCounts = [1];
    this.methods["errorsToBeRerun:="] = func115;
    func115.definitionLine = 6;
    func115.definitionModule = "minitest";
    this.methods["errorsToBeRerun"].debug = "var";
    setLineNumber(19);    // compilenode object
    var obj116 = Grace_allocObject(null, "mtAssertion");
    obj116.definitionModule = "minitest";
    obj116.definitionLine = 19;
    obj116.outer = this;
    var reader_minitest_outer117 = function() {
      return this.outer;
    };
    obj116.methods["outer"] = reader_minitest_outer117;
    var obj_init_116 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj116;
      var func118 = function(argcv) {    // method countOneAssertion
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for countOneAssertion"));
        setModuleName("minitest");
        setLineNumber(28);    // compilenode call
        onSelf = true;
        var call119 = callmethodChecked(this, "currentResult", [0]);
        var call120 = callmethodChecked(call119, "countOneAssertion", [0]);
        return call120;
      };
      func118.paramCounts = [0];
      obj116.methods["countOneAssertion"] = func118;
      func118.definitionLine = 27;
      func118.definitionModule = "minitest";
      setLineNumber(20);    // compilenode identifier
      var call121 = callmethodChecked(var_gu, "assertion()object", [0, 1], this);
      obj116.superobj = call121;
      if (call121.data) obj116.data = call121.data;
      if (call121.hasOwnProperty('_value'))
          obj116._value = call121._value;
      setLineNumber(21);    // compilenode object
      var obj122 = Grace_allocObject(GraceObject, "object");
      obj122.definitionModule = "minitest";
      obj122.definitionLine = 21;
      obj122.outer = this;
      var reader_minitest_outer123 = function() {
        return this.outer;
      };
      obj122.methods["outer"] = reader_minitest_outer123;
      var obj_init_122 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj122;
        var func124 = function(argcv) {    // method countOneAssertion
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for countOneAssertion"));
          setModuleName("minitest");
          setLineNumber(23);    // compilenode string
          var string125 = new GraceString("countOneAssertion requested on dummy result");
          var call126 = Grace_print(string125);
          return call126;
        };
        func124.paramCounts = [0];
        obj122.methods["countOneAssertion"] = func124;
        func124.definitionLine = 22;
        func124.definitionModule = "minitest";
        superDepth = origSuperDepth;
      };
      obj_init_122.apply(obj122, []);
      obj116.data["currentResult"] = obj122;
      var reader_minitest_currentResult127 = function() {
        return this.data["currentResult"];
      };
      obj116.methods["currentResult"] = reader_minitest_currentResult127;
      obj116.data["currentResult"] = obj122;
      var writer_minitest_currentResult127 = function(argcv, o) {
        this.data["currentResult"] = o;
        return GraceDone;
      };
      obj116.methods["currentResult:="] = writer_minitest_currentResult127;
      reader_minitest_currentResult127.confidential = true;
      obj116.mutable = true;
      superDepth = origSuperDepth;
    };
    obj_init_116.apply(obj116, []);
    var var_mtAssertion = obj116;
    setLineNumber(28);    // compilenode method
    var func128 = function(argcv) {    // method mtAssertion
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for mtAssertion"));
      setModuleName("minitest");
      // mtAssertion is a simple accessor - elide try ... catch
      setLineNumber(19);    // compilenode identifier
      return var_mtAssertion;
    };
    func128.paramCounts = [0];
    this.methods["mtAssertion"] = func128;
    func128.definitionLine = 28;
    func128.definitionModule = "minitest";
    this.methods["mtAssertion"].debug = "def";
    return this;
  }
  gracecode_minitest.imports = ['gUnit'];
  if (typeof gctCache !== "undefined")
    gctCache['minitest'] = "classes:\nconfidential:\nfresh-methods:\n testCaseNamed()setupIn()asTestNumber\nfresh:testCaseNamed()setupIn()asTestNumber:\n !=\n ::\n AssertionFailure\n asDebugString\n asString\n assert\n assert()description\n assert()hasType\n assert()shouldBe\n assert()shouldEqual()within\n assert()shouldRaise\n assert()shouldntBe\n assert()shouldntRaise\n assertType()describes\n basicAsString\n countOneAssertion\n currentResult\n currentResult:=\n debug\n debugAndPrintResults\n deny\n deny()description\n deny()hasType\n deny()shouldBe\n failBecause\n isMe\n methodsIn()missingFrom\n name\n printBackTrace()limitedTo\n protocolOf()notCoveredBy\n run\n runAndPrintResults\n runTest\n setup\n size\n teardown\n \u2260\nmodules:\n gUnit\n math\n mirrors\npath:\n minitest\npublic:\n AndPattern\n BaseType\n BasicPattern\n Binding\n BindingPattern\n Block0\n Block1\n Block2\n Block3\n BoundsError\n Cmd\n Collection\n ConcurrentModification\n Dictionary\n Enumerable\n ExceptionKind\n Expandable\n Extractable\n FailedMatch\n Fun\n Fun2\n Fun3\n Iterable\n Iterator\n IteratorExhausted\n List\n MatchAndDestructuringPattern\n MatchResult\n NoSuchObject\n OrPattern\n Pattern\n Point\n Proc\n Proc2\n Proc3\n RequestError\n Sequence\n Set\n Singleton\n SubobjectResponsibility\n SuccessfulMatch\n TypeIntersection\n TypeSubtraction\n TypeUnion\n TypeVariant\n UninitializedVariable\n VariablePattern\n WildcardPattern\n abstract\n alwaysEqual\n assert\n assert()description\n assert()hasType\n assert()shouldBe\n assert()shouldEqual()within\n assert()shouldRaise\n assert()shouldntBe\n assert()shouldntRaise\n assertType()describes\n binding\n collection\n collections\n deny\n deny()description\n deny()hasType\n dictionary\n do()while\n doNotRerunErrors\n doRerunErrors\n emptyDictionary\n emptyList\n emptySequence\n emptySet\n enumerable\n failBecause\n for()and()do\n indexable\n list\n max\n methods\n min\n numberOfErrorsToRerun\n numberOfErrorsToRerun:=\n point2Dx()y\n range\n repeat()times\n required\n sequence\n set\n test()by\n testCaseNamed()setupIn()asTestNumber\n testSuite\n testSuiteNamed()with\n valueOf\ntypes:\n";
  if (typeof originalSourceLines !== "undefined") {
    originalSourceLines["minitest"] = [
      "import \"gUnit\" as gu",
      "",
      "inherits prelude.methods",
      "",
      "def nullSuite = _prelude.Singleton.named \"nullSuite\"",
      "def nullBlock = _prelude.Singleton.named \"nullBlock\"",
      "",
      "var currentTestSuiteForDialect := nullSuite",
      "var currentSetupBlockForTesting := nullBlock",
      "var currentTestBlockForTesting := 0",
      "var currentTestInThisEvaluation := 0",
      "var errorsToBeRerun := true",
      "",
      "method numberOfErrorsToRerun -> Number { gu.numberOfErrorsToRerun }",
      "method numberOfErrorsToRerun:=(n:Number) {",
      "    gu.numberOfErrorsToRerun := n",
      "}",
      "",
      "def mtAssertion = object {",
      "    inherits gu.assertion",
      "    var currentResult is writable := object {",
      "        method countOneAssertion {",
      "            print \"countOneAssertion requested on dummy result\"",
      "        }",
      "    }",
      "",
      "    method countOneAssertion {",
      "        currentResult.countOneAssertion",
      "    }",
      "}",
      "",
      "method assert(bb:Boolean) description(str:String) {",
      "    mtAssertion.assert(bb) description(str)",
      "}",
      "",
      "method deny(bb:Boolean) description(str:String) {",
      "    mtAssertion.deny(bb) description(str)",
      "}",
      "",
      "method assert(bb:Boolean) {",
      "    mtAssertion.assert(bb)",
      "}",
      "",
      "method deny(bb:Boolean) {",
      "    mtAssertion.deny(bb)",
      "}",
      "",
      "method assert(s1:Object) shouldBe (s2:Object) {",
      "    mtAssertion.assert(s1) shouldBe (s2)",
      "}",
      "",
      "method assert(s1:Object) shouldntBe (s2:Object) {",
      "    mtAssertion.assert(s1) shouldntBe (s2)",
      "}",
      "",
      "method assert(n1:Number) shouldEqual (n2:Number) within (epsilon:Number) {",
      "    mtAssertion.assert(n1) shouldEqual (n2) within (epsilon)",
      "}",
      "",
      "method assert(b:Block) shouldRaise (desired:ExceptionKind) {",
      "    mtAssertion.assert(b) shouldRaise (desired)",
      "}",
      "",
      "method assert(b:Block) shouldntRaise (undesired:ExceptionKind) {",
      "    mtAssertion.assert(b) shouldntRaise (undesired)",
      "}",
      "",
      "method assert(s:Object) hasType (desired:Type) {",
      "    mtAssertion.assert(s) hasType (desired)",
      "}",
      "",
      "method deny(s:Object) hasType (undesired:Type) {",
      "    mtAssertion.deny(s) hasType (undesired)",
      "}",
      "",
      "method assertType(T:Type) describes (value) {",
      "    mtAssertion.assertType(T) describes (value)",
      "}",
      "",
      "method failBecause(reason) {",
      "    mtAssertion.assert(false) description(reason)",
      "}",
      "",
      "method testSuiteNamed (name:String) with (block:Block) {",
      "    if (nullSuite ≠ currentTestSuiteForDialect) then {",
      "        Exception.raise(\"a testSuite cannot be created inside a testSuite\")",
      "    }",
      "    currentTestSuiteForDialect := gu.testSuite.empty",
      "    currentTestSuiteForDialect.name := name",
      "    currentSetupBlockForTesting := block",
      "    currentTestInThisEvaluation := 0",
      "    block.apply",
      "    currentSetupBlockForTesting := nullBlock",
      "    currentTestSuiteForDialect.runAndPrintResults",
      "    currentTestSuiteForDialect := nullSuite",
      "    currentTestBlockForTesting := 0",
      "}",
      "",
      "method doNotRerunErrors { errorsToBeRerun := false }",
      "method doRerunErrors { errorsToBeRerun := true }",
      "",
      "method testSuite (block:Block) {",
      "    testSuiteNamed \"\" with (block)",
      "}",
      "",
      "method test(name:String) by(block:Block) {",
      "    if (nullSuite == currentTestSuiteForDialect) then {",
      "        Exception.raise(\"a test can be created only within a testSuite\")",
      "    }",
      "    currentTestInThisEvaluation := currentTestInThisEvaluation + 1",
      "    if (nullBlock ≠ currentSetupBlockForTesting) then {",
      "        currentTestSuiteForDialect.add(testCaseNamed(name)",
      "            setupIn(currentSetupBlockForTesting)",
      "            asTestNumber(currentTestInThisEvaluation))",
      "    } elseif { currentTestInThisEvaluation == currentTestBlockForTesting } then {",
      "        block.apply",
      "    }",
      "}",
      "",
      "method testCaseNamed(name') setupIn(setupBlock) asTestNumber(number) -> gu.TestCase {",
      "    object {",
      "        inherits gu.testCaseNamed(name')",
      "",
      "        method setup { ",
      "            super.setup",
      "            currentTestBlockForTesting := number",
      "            currentTestInThisEvaluation := 0",
      "            setupBlock.apply",
      "        }",
      "",
      "        method teardown {",
      "            currentTestBlockForTesting := 0",
      "        }",
      "        ",
      "        method currentResult:= (r) is override {",
      "            mtAssertion.currentResult := r",
      "        }",
      "        ",
      "        method runTest is override {",
      "            // for minitest, the test is run in setup",
      "        }",
      "    }",
      "}",
      "" ];
  }
  if (typeof global !== "undefined")
    global.gracecode_minitest = gracecode_minitest;
  if (typeof window !== "undefined")
    window.gracecode_minitest = gracecode_minitest;
