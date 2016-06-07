"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_identifierresolution() {
  setModuleName("identifierresolution");
  this.definitionModule = "identifierresolution";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_identifierresolution_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_identifierresolution_outer0;
  setLineNumber(2);    // compilenode import
  // Import of io as io
  if (typeof gracecode_io == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module io'));
  var var_io = do_import("io", gracecode_io);
  var func1 = function(argcv) {    // method io
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for io"));
    setModuleName("identifierresolution");
    // io is a simple accessor - elide try ... catch
    return var_io;
  };
  func1.paramCounts = [0];
  this.methods["io"] = func1;
  func1.definitionLine = 2;
  func1.definitionModule = "identifierresolution";
  func1.debug = "import";
  func1.confidential = true;
  setModuleName("identifierresolution");
  setLineNumber(3);    // compilenode import
  // Import of sys as sys
  if (typeof gracecode_sys == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module sys'));
  var var_sys = do_import("sys", gracecode_sys);
  var func2 = function(argcv) {    // method sys
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for sys"));
    setModuleName("identifierresolution");
    // sys is a simple accessor - elide try ... catch
    return var_sys;
  };
  func2.paramCounts = [0];
  this.methods["sys"] = func2;
  func2.definitionLine = 3;
  func2.definitionModule = "identifierresolution";
  func2.debug = "import";
  func2.confidential = true;
  setModuleName("identifierresolution");
  setLineNumber(4);    // compilenode import
  // Import of ast as ast
  if (typeof gracecode_ast == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module ast'));
  var var_ast = do_import("ast", gracecode_ast);
  var func3 = function(argcv) {    // method ast
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ast"));
    setModuleName("identifierresolution");
    // ast is a simple accessor - elide try ... catch
    return var_ast;
  };
  func3.paramCounts = [0];
  this.methods["ast"] = func3;
  func3.definitionLine = 4;
  func3.definitionModule = "identifierresolution";
  func3.debug = "import";
  func3.confidential = true;
  setModuleName("identifierresolution");
  setLineNumber(5);    // compilenode import
  // Import of util as util
  if (typeof gracecode_util == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module util'));
  var var_util = do_import("util", gracecode_util);
  var func4 = function(argcv) {    // method util
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for util"));
    setModuleName("identifierresolution");
    // util is a simple accessor - elide try ... catch
    return var_util;
  };
  func4.paramCounts = [0];
  this.methods["util"] = func4;
  func4.definitionLine = 5;
  func4.definitionModule = "identifierresolution";
  func4.debug = "import";
  func4.confidential = true;
  setModuleName("identifierresolution");
  setLineNumber(6);    // compilenode import
  // Import of xmodule as xmodule
  if (typeof gracecode_xmodule == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module xmodule'));
  var var_xmodule = do_import("xmodule", gracecode_xmodule);
  var func5 = function(argcv) {    // method xmodule
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for xmodule"));
    setModuleName("identifierresolution");
    // xmodule is a simple accessor - elide try ... catch
    return var_xmodule;
  };
  func5.paramCounts = [0];
  this.methods["xmodule"] = func5;
  func5.definitionLine = 6;
  func5.definitionModule = "identifierresolution";
  func5.debug = "import";
  func5.confidential = true;
  setModuleName("identifierresolution");
  setLineNumber(7);    // compilenode import
  // Import of stringMap as map
  if (typeof gracecode_stringMap == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module stringMap'));
  var var_map = do_import("stringMap", gracecode_stringMap);
  var func6 = function(argcv) {    // method map
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for map"));
    setModuleName("identifierresolution");
    // map is a simple accessor - elide try ... catch
    return var_map;
  };
  func6.paramCounts = [0];
  this.methods["map"] = func6;
  func6.definitionLine = 7;
  func6.definitionModule = "identifierresolution";
  func6.debug = "import";
  func6.confidential = true;
  setModuleName("identifierresolution");
  setLineNumber(8);    // compilenode import
  // Import of mirrors as mirrors
  if (typeof gracecode_mirrors == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module mirrors'));
  var var_mirrors = do_import("mirrors", gracecode_mirrors);
  var func7 = function(argcv) {    // method mirrors
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for mirrors"));
    setModuleName("identifierresolution");
    // mirrors is a simple accessor - elide try ... catch
    return var_mirrors;
  };
  func7.paramCounts = [0];
  this.methods["mirrors"] = func7;
  func7.definitionLine = 8;
  func7.definitionModule = "identifierresolution";
  func7.debug = "import";
  func7.confidential = true;
  setModuleName("identifierresolution");
  setLineNumber(9);    // compilenode import
  // Import of errormessages as errormessages
  if (typeof gracecode_errormessages == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module errormessages'));
  var var_errormessages = do_import("errormessages", gracecode_errormessages);
  var func8 = function(argcv) {    // method errormessages
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for errormessages"));
    setModuleName("identifierresolution");
    // errormessages is a simple accessor - elide try ... catch
    return var_errormessages;
  };
  func8.paramCounts = [0];
  this.methods["errormessages"] = func8;
  func8.definitionLine = 9;
  func8.definitionModule = "identifierresolution";
  func8.debug = "import";
  func8.confidential = true;
  setModuleName("identifierresolution");
  setLineNumber(10);    // compilenode import
  // Import of identifierKinds as k
  if (typeof gracecode_identifierKinds == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module identifierKinds'));
  var var_k = do_import("identifierKinds", gracecode_identifierKinds);
  var func9 = function(argcv) {    // method k
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for k"));
    setModuleName("identifierresolution");
    // k is a simple accessor - elide try ... catch
    return var_k;
  };
  func9.paramCounts = [0];
  this.methods["k"] = func9;
  func9.definitionLine = 10;
  func9.definitionModule = "identifierresolution";
  func9.debug = "import";
  func9.confidential = true;
  setModuleName("identifierresolution");
  setLineNumber(22);    // compilenode method
  var func10 = function(argcv) {    // method newScopeKind(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_variety__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for newScopeKind(1)"));
    setModuleName("identifierresolution");
    setLineNumber(24);    // compilenode object
    var obj11 = Grace_allocObject(GraceObject, "object");
    obj11.definitionModule = "identifierresolution";
    obj11.definitionLine = 24;
    obj11.outer = this;
    var reader_identifierresolution_outer12 = function() {
      return this.outer;
    };
    obj11.methods["outer"] = reader_identifierresolution_outer12;
    var obj_init_11 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj11;
      superDepth = origSuperDepth;
    };
    obj_init_11.apply(obj11, []);
    onSelf = true;
    var call13 = callmethodChecked(this, "newScopeIn()kind", [1, 1], obj11, var_variety__39__);
    var var_s = call13;
    setLineNumber(25);    // compilenode identifier
    var call14 = callmethodChecked(var_s, "hasParent:=", [1], GraceFalse);
    setLineNumber(26);    // compilenode identifier
    return var_s;
  };
  func10.paramCounts = [1];
  this.methods["newScopeKind"] = func10;
  func10.definitionLine = 22;
  func10.definitionModule = "identifierresolution";
  setLineNumber(33);    // compilenode method
  var func15 = function(argcv) {    // method newScopeIn(1)kind(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_parent__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for newScopeIn (arg list 1) of newScopeIn(1)kind(1)"));
    var var_variety__39__ = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for kind (arg list 2) of newScopeIn(1)kind(1)"));
    setModuleName("identifierresolution");
    var obj16 = Grace_allocObject(GraceObject, "identifierresolution.identifierBinding‹newScopeIn()kind›");
    obj16.definitionModule = "identifierresolution";
    obj16.definitionLine = 33;
    obj16.outer = this;
    var reader_identifierresolution_outer17 = function() {
      return this.outer;
    };
    obj16.methods["outer"] = reader_identifierresolution_outer17;
    var obj_init_16 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj16;
      var func18 = function(argcv) {    // method ==(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_other = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ==(1)"));
        setModuleName("identifierresolution");
        setLineNumber(51);    // compilenode identifier
        onSelf = true;
        var call19 = callmethodChecked(this, "isMe", [1], var_other);
        return call19;
      };
      func18.paramCounts = [1];
      obj16.methods["=="] = func18;
      func18.definitionLine = 51;
      func18.definitionModule = "identifierresolution";
      var func20 = function(argcv) {    // method isEmpty
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isEmpty"));
        setModuleName("identifierresolution");
        setLineNumber(52);    // compilenode call
        onSelf = true;
        var call22 = callmethodChecked(this, "elements", [0]);
        var call23 = callmethodChecked(call22, "size", [0]);
        var opresult25 = callmethodChecked(call23, "==", [1], new GraceNum(0));
        return opresult25;
      };
      func20.paramCounts = [0];
      obj16.methods["isEmpty"] = func20;
      func20.definitionLine = 52;
      func20.definitionModule = "identifierresolution";
      var func26 = function(argcv) {    // method addName(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_n = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addName(1)"));
        setModuleName("identifierresolution");
        setLineNumber(54);    // compilenode identifier
        var call27 = callmethodChecked(var_k, "methdec", [0]);
        onSelf = true;
        var call28 = callmethodChecked(this, "elements", [0]);
        var call29 = callmethodChecked(call28, "put", [2], var_n, call27);
        setLineNumber(55);    // compilenode identifier
        var call30 = callmethodChecked(var_util, "linenum", [0]);
        onSelf = true;
        var call31 = callmethodChecked(this, "elementLines", [0]);
        var call32 = callmethodChecked(call31, "put", [2], var_n, call30);
        return call32;
      };
      func26.paramCounts = [1];
      obj16.methods["addName"] = func26;
      func26.definitionLine = 53;
      func26.definitionModule = "identifierresolution";
      var func33 = function(argcv) {    // method addName(1)as(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_n = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addName (arg list 1) of addName(1)as(1)"));
        var var_kind = arguments[curarg];
        curarg++;
        if (argcv[1] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for as (arg list 2) of addName(1)as(1)"));
        // Start argument checking
        curarg = 1;
        curarg++;
        setLineNumber(57);    // compilenode identifier
        if (!Grace_isTrue(callmethod(var_DeclKind, "match",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in as (arg list 2), which corresponds to parameter kind, does not have " + 
                    callmethod(var_DeclKind, "asString", [0])._value + "."));
        curarg++;
        // End argument checking
        setModuleName("identifierresolution");
        setLineNumber(58);    // compilenode block
        var block34 = new GraceBlock(this, 58, 0);
        block34.real = function() {
          setLineNumber(59);    // compilenode call
          onSelf = true;
          var call35 = callmethodChecked(this, "elements", [0]);
          var call36 = callmethodChecked(call35, "put", [2], var_n, var_kind);
          setLineNumber(60);    // compilenode identifier
          var call37 = callmethodChecked(var_util, "linenum", [0]);
          onSelf = true;
          var call38 = callmethodChecked(this, "elementLines", [0]);
          var call39 = callmethodChecked(call38, "put", [2], var_n, call37);
          setLineNumber(62);    // compilenode identifier
          throw new ReturnException(var_done, returnTarget);
          return undefined;
        };
        setLineNumber(58);    // compilenode call
        onSelf = true;
        var call40 = callmethodChecked(this, "elements", [0]);
        var call41 = callmethodChecked(call40, "get()ifAbsent", [1, 1], var_n, block34);
        var var_oldKind = call41;
        var if42 = GraceDone;
        setLineNumber(63);    // compilenode identifier
        var call43 = callmethodChecked(var_kind, "isImplicit", [0]);
        if (Grace_isTrue(call43)) {
          setLineNumber(65);    // compilenode identifier
          return var_done;
        }
        var if44 = GraceDone;
        setLineNumber(66);    // compilenode identifier
        var call45 = callmethodChecked(var_oldKind, "isImplicit", [0]);
        if (Grace_isTrue(call45)) {
          setLineNumber(67);    // compilenode call
          onSelf = true;
          var call46 = callmethodChecked(this, "elements", [0]);
          var call47 = callmethodChecked(call46, "put", [2], var_n, var_kind);
          setLineNumber(68);    // compilenode identifier
          var call48 = callmethodChecked(var_util, "linenum", [0]);
          onSelf = true;
          var call49 = callmethodChecked(this, "elementLines", [0]);
          var call50 = callmethodChecked(call49, "put", [2], var_n, call48);
          setLineNumber(70);    // compilenode identifier
          return var_done;
        }
        setLineNumber(72);    // compilenode string
        var string51 = new GraceString("");
        var string54 = new GraceString(" because it is already declared as ");
        var string57 = new GraceString(" redefined as ");
        var opresult59 = callmethodChecked(string57, "++", [1], var_kind);
        var opresult61 = callmethodChecked(opresult59, "++", [1], string54);
        var opresult63 = callmethodChecked(opresult61, "++", [1], var_oldKind);
        var opresult65 = callmethodChecked(opresult63, "++", [1], string51);
        setLineNumber(71);    // compilenode string
        var string67 = new GraceString("' cannot be");
        var string70 = new GraceString("'");
        var opresult72 = callmethodChecked(string70, "++", [1], var_n);
        var opresult74 = callmethodChecked(opresult72, "++", [1], string67);
        var opresult76 = callmethodChecked(opresult74, "++", [1], opresult65);
        setLineNumber(73);    // compilenode identifier
        var call77 = callmethodChecked(var_util, "line", [0]);
        var call78 = callmethodChecked(var_util, "linePos", [0]);
        var call80 = callmethodChecked(var_n, "size", [0]);
        var call82 = callmethodChecked(var_util, "linePos", [0]);
        var opresult84 = callmethodChecked(call82, "+", [1], call80);
        var diff86 = callmethodChecked(opresult84, "-", [1], new GraceNum(1));
        setLineNumber(71);    // compilenode identifier
        var call87 = callmethodChecked(var_errormessages, "syntaxError()atRange", [1, 3], opresult76, call77, call78, diff86);
        return call87;
      };
      func33.paramTypes = [];
      func33.paramTypes.push([]);
      func33.paramTypes.push([]);
      func33.paramCounts = [1, 1];
      obj16.methods["addName()as"] = func33;
      func33.definitionLine = 57;
      func33.definitionModule = "identifierresolution";
      var func88 = function(argcv) {    // method addNode(1)as(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_nd = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addNode (arg list 1) of addNode(1)as(1)"));
        var var_kind = arguments[curarg];
        curarg++;
        if (argcv[1] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for as (arg list 2) of addNode(1)as(1)"));
        setModuleName("identifierresolution");
        setLineNumber(76);    // compilenode identifier
        var call89 = callmethodChecked(var_nd, "value", [0]);
        var var_ndName = call89;
        setLineNumber(77);    // compilenode identifier
        onSelf = true;
        var call90 = callmethodChecked(this, "checkShadowing()as", [1, 1], var_nd, var_kind);
        setLineNumber(78);    // compilenode block
        var block91 = new GraceBlock(this, 78, 0);
        block91.real = function() {
          setLineNumber(79);    // compilenode call
          onSelf = true;
          var call92 = callmethodChecked(this, "elements", [0]);
          var call93 = callmethodChecked(call92, "put", [2], var_ndName, var_kind);
          setLineNumber(80);    // compilenode identifier
          var call94 = callmethodChecked(var_nd, "line", [0]);
          onSelf = true;
          var call95 = callmethodChecked(this, "elementLines", [0]);
          var call96 = callmethodChecked(call95, "put", [2], var_ndName, call94);
          setLineNumber(82);    // compilenode identifier
          throw new ReturnException(var_done, returnTarget);
          return undefined;
        };
        setLineNumber(78);    // compilenode call
        onSelf = true;
        var call97 = callmethodChecked(this, "elements", [0]);
        var call98 = callmethodChecked(call97, "get()ifAbsent", [1, 1], var_ndName, block91);
        var var_oldKind = call98;
        var if99 = GraceDone;
        setLineNumber(83);    // compilenode identifier
        var call100 = callmethodChecked(var_kind, "isImplicit", [0]);
        if (Grace_isTrue(call100)) {
          setLineNumber(85);    // compilenode identifier
          return var_done;
        }
        var if101 = GraceDone;
        setLineNumber(86);    // compilenode identifier
        var call102 = callmethodChecked(var_oldKind, "isImplicit", [0]);
        if (Grace_isTrue(call102)) {
          setLineNumber(87);    // compilenode call
          onSelf = true;
          var call103 = callmethodChecked(this, "elements", [0]);
          var call104 = callmethodChecked(call103, "put", [2], var_ndName, var_kind);
          setLineNumber(88);    // compilenode identifier
          var call105 = callmethodChecked(var_nd, "line", [0]);
          onSelf = true;
          var call106 = callmethodChecked(this, "elementLines", [0]);
          var call107 = callmethodChecked(call106, "put", [2], var_ndName, call105);
          setLineNumber(90);    // compilenode identifier
          return var_done;
        }
        setLineNumber(91);    // compilenode string
        var string108 = new GraceString(" in this scope");
        var var_more = string108;
        var if109 = GraceDone;
        setLineNumber(92);    // compilenode call
        onSelf = true;
        var call110 = callmethodChecked(this, "elementLines", [0]);
        var call111 = callmethodChecked(call110, "contains", [1], var_ndName);
        if (Grace_isTrue(call111)) {
          setLineNumber(94);    // compilenode string
          var string112 = new GraceString("");
          onSelf = true;
          var call114 = callmethodChecked(this, "elementLines", [0]);
          var call115 = callmethodChecked(call114, "get", [1], var_ndName);
          var string117 = new GraceString(" on line ");
          var opresult119 = callmethodChecked(string117, "++", [1], call115);
          var opresult121 = callmethodChecked(opresult119, "++", [1], string112);
          setLineNumber(93);    // compilenode string
          var string123 = new GraceString("");
          var string126 = new GraceString(" as a ");
          var opresult128 = callmethodChecked(string126, "++", [1], var_oldKind);
          var opresult130 = callmethodChecked(opresult128, "++", [1], string123);
          var opresult132 = callmethodChecked(opresult130, "++", [1], opresult121);
          var_more = opresult132;
          if109 = GraceDone;
        }
        setLineNumber(98);    // compilenode string
        var string133 = new GraceString(".");
        var call135 = callmethodChecked(var_nd, "line", [0]);
        var string137 = new GraceString(" as well as here at line ");
        var opresult139 = callmethodChecked(string137, "++", [1], call135);
        var opresult141 = callmethodChecked(opresult139, "++", [1], string133);
        setLineNumber(97);    // compilenode string
        var string144 = new GraceString(" redeclared because it is already declared");
        setLineNumber(96);    // compilenode string
        var string146 = new GraceString("' cannot be");
        var string149 = new GraceString("'");
        var opresult151 = callmethodChecked(string149, "++", [1], var_ndName);
        var opresult153 = callmethodChecked(opresult151, "++", [1], string146);
        var opresult155 = callmethodChecked(opresult153, "++", [1], string144);
        var opresult157 = callmethodChecked(opresult155, "++", [1], var_more);
        var opresult159 = callmethodChecked(opresult157, "++", [1], opresult141);
        setLineNumber(99);    // compilenode identifier
        var call160 = callmethodChecked(var_nd, "line", [0]);
        var call161 = callmethodChecked(var_nd, "linePos", [0]);
        var call163 = callmethodChecked(var_ndName, "size", [0]);
        var call165 = callmethodChecked(var_nd, "linePos", [0]);
        var opresult167 = callmethodChecked(call165, "+", [1], call163);
        var diff169 = callmethodChecked(opresult167, "-", [1], new GraceNum(1));
        setLineNumber(96);    // compilenode identifier
        var call170 = callmethodChecked(var_errormessages, "syntaxError()atRange", [1, 3], opresult159, call160, call161, diff169);
        return call170;
      };
      func88.paramCounts = [1, 1];
      obj16.methods["addNode()as"] = func88;
      func88.definitionLine = 75;
      func88.definitionModule = "identifierresolution";
      var func171 = function(argcv) {    // method contains(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_n = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for contains(1)"));
        setModuleName("identifierresolution");
        setLineNumber(102);    // compilenode call
        onSelf = true;
        var call172 = callmethodChecked(this, "elements", [0]);
        var call173 = callmethodChecked(call172, "contains", [1], var_n);
        return call173;
      };
      func171.paramCounts = [1];
      obj16.methods["contains"] = func171;
      func171.definitionLine = 101;
      func171.definitionModule = "identifierresolution";
      var func174 = function(argcv) {    // method withSurroundingScopesDo(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_b = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for withSurroundingScopesDo(1)"));
        setModuleName("identifierresolution");
        setLineNumber(105);    // compilenode identifier
        var var_cur = this;
        setLineNumber(106);    // compilenode block
        var block175 = new GraceBlock(this, 106, 0);
        block175.real = function() {
          var call176 = callmethodChecked(var_b, "apply", [1], var_cur);
          var call177 = callmethodChecked(var_cur, "hasParent", [0]);
          return call177;
        };
        var block178 = new GraceBlock(this, 106, 0);
        block178.real = function() {
          setLineNumber(107);    // compilenode identifier
          var call179 = callmethodChecked(var_cur, "parent", [0]);
          var_cur = call179;
          return GraceDone;
        };
        var call180 = callmethodChecked(var_prelude, "while()do", [1, 1], block175, block178);
        return call180;
      };
      func174.paramCounts = [1];
      obj16.methods["withSurroundingScopesDo"] = func174;
      func174.definitionLine = 104;
      func174.definitionModule = "identifierresolution";
      var func181 = function(argcv) {    // method keysAsList
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for keysAsList"));
        setModuleName("identifierresolution");
        setLineNumber(111);    // compilenode call
        var call182 = callmethodChecked(var_prelude, "emptyList", [0]);
        var var_result = call182;
        setLineNumber(112);    // compilenode block
        var block183 = new GraceBlock(this, 112, 1);
        setLineNumber(1);    // compilenode identifier
        block183.real = function(var_each) {
          setLineNumber(112);    // compilenode identifier
          var call184 = callmethodChecked(var_result, "addLast", [1], var_each);
          return call184;
        };
        onSelf = true;
        var call185 = callmethodChecked(this, "elements", [0]);
        var call186 = callmethodChecked(call185, "keysDo", [1], block183);
        setLineNumber(113);    // compilenode identifier
        return var_result;
      };
      func181.paramCounts = [0];
      obj16.methods["keysAsList"] = func181;
      func181.definitionLine = 110;
      func181.definitionModule = "identifierresolution";
      var func187 = function(argcv) {    // method keysAndKindsDo(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_action = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for keysAndKindsDo(1)"));
        setModuleName("identifierresolution");
        setLineNumber(116);    // compilenode call
        onSelf = true;
        var call188 = callmethodChecked(this, "elements", [0]);
        var call189 = callmethodChecked(call188, "keysAndValuesDo", [1], var_action);
        return call189;
      };
      func187.paramCounts = [1];
      obj16.methods["keysAndKindsDo"] = func187;
      func187.definitionLine = 115;
      func187.definitionModule = "identifierresolution";
      var func190 = function(argcv) {    // method kind(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_n = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for kind(1)"));
        setModuleName("identifierresolution");
        setLineNumber(119);    // compilenode call
        onSelf = true;
        var call191 = callmethodChecked(this, "elements", [0]);
        var call192 = callmethodChecked(call191, "get", [1], var_n);
        var var_kd = call192;
        if (!Grace_isTrue(callmethod(var_DeclKind, "match", [1], var_kd)))
          throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("value of def 'kd' is not of type DeclKind"));
        var if193 = GraceDone;
        setLineNumber(120);    // compilenode identifier
        var call194 = callmethodChecked(var_DeclKind, "match", [1], var_kd);
        var call195 = callmethodChecked(call194, "not", [0]);
        if (Grace_isTrue(call195)) {
          var string196 = new GraceString("");
          var string199 = new GraceString(" is ");
          var string202 = new GraceString("kind of ");
          var opresult204 = callmethodChecked(string202, "++", [1], var_n);
          var opresult206 = callmethodChecked(opresult204, "++", [1], string199);
          var opresult208 = callmethodChecked(opresult206, "++", [1], var_k);
          var opresult210 = callmethodChecked(opresult208, "++", [1], string196);
          var call211 = Grace_print(opresult210);
          if193 = call211;
        }
        setLineNumber(121);    // compilenode identifier
        return var_kd;
      };
      func190.paramCounts = [1];
      obj16.methods["kind"] = func190;
      func190.definitionLine = 118;
      func190.definitionModule = "identifierresolution";
      var func212 = function(argcv) {    // method at(1)putScope(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_n = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for at (arg list 1) of at(1)putScope(1)"));
        var var_scp = arguments[curarg];
        curarg++;
        if (argcv[1] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for putScope (arg list 2) of at(1)putScope(1)"));
        setModuleName("identifierresolution");
        setLineNumber(124);    // compilenode call
        onSelf = true;
        var call213 = callmethodChecked(this, "elementScopes", [0]);
        var call214 = callmethodChecked(call213, "put", [2], var_n, var_scp);
        return call214;
      };
      func212.paramCounts = [1, 1];
      obj16.methods["at()putScope"] = func212;
      func212.definitionLine = 123;
      func212.definitionModule = "identifierresolution";
      var func215 = function(argcv) {    // method getScope(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_n = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for getScope(1)"));
        setModuleName("identifierresolution");
        var if216 = GraceDone;
        setLineNumber(127);    // compilenode call
        onSelf = true;
        var call217 = callmethodChecked(this, "elementScopes", [0]);
        var call218 = callmethodChecked(call217, "contains", [1], var_n);
        if (Grace_isTrue(call218)) {
          setLineNumber(128);    // compilenode call
          onSelf = true;
          var call219 = callmethodChecked(this, "elementScopes", [0]);
          var call220 = callmethodChecked(call219, "get", [1], var_n);
          return call220;
        }
        setLineNumber(136);    // compilenode identifier
        return var_universalScope;
      };
      func215.paramCounts = [1];
      obj16.methods["getScope"] = func215;
      func215.definitionLine = 126;
      func215.definitionModule = "identifierresolution";
      var func221 = function(argcv) {    // method asStringWithParents
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asStringWithParents"));
        setModuleName("identifierresolution");
        setLineNumber(139);    // compilenode string
        var string222 = new GraceString("");
        var string225 = new GraceString("\nCurrent: ");
        var opresult227 = callmethodChecked(string225, "++", [1], this);
        var opresult229 = callmethodChecked(opresult227, "++", [1], string222);
        var var_result = opresult229;
        setLineNumber(140);    // compilenode identifier
        var var_s = this;
        setLineNumber(141);    // compilenode block
        var block230 = new GraceBlock(this, 141, 0);
        block230.real = function() {
          var call231 = callmethodChecked(var_s, "hasParent", [0]);
          return call231;
        };
        var block232 = new GraceBlock(this, 141, 0);
        block232.real = function() {
          setLineNumber(142);    // compilenode identifier
          var call233 = callmethodChecked(var_s, "parent", [0]);
          var_s = call233;
          setLineNumber(143);    // compilenode string
          var string234 = new GraceString("");
          var string237 = new GraceString("\nParent: ");
          var opresult239 = callmethodChecked(string237, "++", [1], var_s);
          var opresult241 = callmethodChecked(opresult239, "++", [1], string234);
          var opresult244 = callmethodChecked(var_result, "++", [1], opresult241);
          var_result = opresult244;
          return GraceDone;
        };
        var call245 = callmethodChecked(var_prelude, "while()do", [1, 1], block230, block232);
        setLineNumber(145);    // compilenode string
        var string246 = new GraceString("\n");
        var opresult249 = callmethodChecked(var_result, "++", [1], string246);
        return opresult249;
      };
      func221.paramCounts = [0];
      obj16.methods["asStringWithParents"] = func221;
      func221.definitionLine = 138;
      func221.definitionModule = "identifierresolution";
      var func250 = function(argcv) {    // method asString
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
        setModuleName("identifierresolution");
        setLineNumber(148);    // compilenode string
        var string251 = new GraceString(" ST: ");
        onSelf = true;
        var call253 = callmethodChecked(this, "variety", [0]);
        var string255 = new GraceString("(");
        var opresult257 = callmethodChecked(string255, "++", [1], call253);
        var opresult259 = callmethodChecked(opresult257, "++", [1], string251);
        var var_result = opresult259;
        setLineNumber(149);    // compilenode block
        var block260 = new GraceBlock(this, 149, 1);
        setLineNumber(1);    // compilenode identifier
        block260.real = function(var_each) {
          setLineNumber(150);    // compilenode identifier
          var call261 = callmethodChecked(var_each, "serialNumber", [0]);
          var opresult264 = callmethodChecked(var_result, "++", [1], call261);
          var_result = opresult264;
          var if265 = GraceDone;
          setLineNumber(151);    // compilenode identifier
          var call266 = callmethodChecked(var_each, "hasParent", [0]);
          if (Grace_isTrue(call266)) {
            var string267 = new GraceString("\u279e");
            var opresult270 = callmethodChecked(var_result, "++", [1], string267);
            var_result = opresult270;
            if265 = GraceDone;
          }
          return if265;
        };
        onSelf = true;
        var call271 = callmethodChecked(this, "withSurroundingScopesDo", [1], block260);
        setLineNumber(153);    // compilenode string
        var string272 = new GraceString("):\n    ");
        var opresult275 = callmethodChecked(var_result, "++", [1], string272);
        var_result = opresult275;
        setLineNumber(154);    // compilenode block
        var block276 = new GraceBlock(this, 154, 1);
        setLineNumber(1);    // compilenode identifier
        block276.real = function(var_each) {
          setLineNumber(155);    // compilenode string
          var string277 = new GraceString(") ");
          var call279 = callmethodChecked(var_each, "key", [0]);
          onSelf = true;
          var call280 = callmethodChecked(this, "kind", [1], call279);
          var string282 = new GraceString("(");
          var call284 = callmethodChecked(var_each, "key", [0]);
          var string286 = new GraceString(" ");
          var string289 = new GraceString("");
          var opresult291 = callmethodChecked(string289, "++", [1], var_result);
          var opresult293 = callmethodChecked(opresult291, "++", [1], string286);
          var opresult295 = callmethodChecked(opresult293, "++", [1], call284);
          var opresult297 = callmethodChecked(opresult295, "++", [1], string282);
          var opresult299 = callmethodChecked(opresult297, "++", [1], call280);
          var opresult301 = callmethodChecked(opresult299, "++", [1], string277);
          var_result = opresult301;
          return GraceDone;
        };
        setLineNumber(154);    // compilenode call
        onSelf = true;
        var call302 = callmethodChecked(this, "elements", [0]);
        var call303 = callmethodChecked(call302, "asList", [0]);
        var call304 = callmethodChecked(call303, "sortBy", [1], var_keyOrdering);
        var call305 = callmethodChecked(call304, "do", [1], block276);
        setLineNumber(157);    // compilenode string
        var string306 = new GraceString("\n");
        var opresult309 = callmethodChecked(var_result, "++", [1], string306);
        return opresult309;
      };
      func250.paramCounts = [0];
      obj16.methods["asString"] = func250;
      func250.definitionLine = 147;
      func250.definitionModule = "identifierresolution";
      var func310 = function(argcv) {    // method asDebugString
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asDebugString"));
        setModuleName("identifierresolution");
        setLineNumber(160);    // compilenode string
        var string311 = new GraceString(")");
        onSelf = true;
        var call313 = callmethodChecked(this, "serialNumber", [0]);
        var string315 = new GraceString("(ST ");
        var opresult317 = callmethodChecked(string315, "++", [1], call313);
        var opresult319 = callmethodChecked(opresult317, "++", [1], string311);
        return opresult319;
      };
      func310.paramCounts = [0];
      obj16.methods["asDebugString"] = func310;
      func310.definitionLine = 160;
      func310.definitionModule = "identifierresolution";
      var func320 = function(argcv) {    // method elementScopesAsString
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for elementScopesAsString"));
        setModuleName("identifierresolution");
        setLineNumber(163);    // compilenode call
        var call321 = callmethodChecked(var_prelude, "emptySet", [0]);
        var var_referencedScopes = call321;
        setLineNumber(164);    // compilenode string
        var string322 = new GraceString("\n    [elementScopes:");
        var var_result = string322;
        setLineNumber(165);    // compilenode block
        var block323 = new GraceBlock(this, 165, 1);
        setLineNumber(1);    // compilenode identifier
        block323.real = function(var_each) {
          setLineNumber(166);    // compilenode string
          var string324 = new GraceString("");
          var call326 = callmethodChecked(var_each, "value", [0]);
          var call327 = callmethodChecked(call326, "asDebugString", [0]);
          var string329 = new GraceString("\u279e");
          var call331 = callmethodChecked(var_each, "key", [0]);
          var string333 = new GraceString(" ");
          var string336 = new GraceString("");
          var opresult338 = callmethodChecked(string336, "++", [1], var_result);
          var opresult340 = callmethodChecked(opresult338, "++", [1], string333);
          var opresult342 = callmethodChecked(opresult340, "++", [1], call331);
          var opresult344 = callmethodChecked(opresult342, "++", [1], string329);
          var opresult346 = callmethodChecked(opresult344, "++", [1], call327);
          var opresult348 = callmethodChecked(opresult346, "++", [1], string324);
          var_result = opresult348;
          setLineNumber(167);    // compilenode identifier
          var call349 = callmethodChecked(var_each, "value", [0]);
          var call350 = callmethodChecked(var_referencedScopes, "add", [1], call349);
          return call350;
        };
        setLineNumber(165);    // compilenode call
        onSelf = true;
        var call351 = callmethodChecked(this, "elementScopes", [0]);
        var call352 = callmethodChecked(call351, "asList", [0]);
        var call353 = callmethodChecked(call352, "sortBy", [1], var_keyOrdering);
        var call354 = callmethodChecked(call353, "do", [1], block323);
        setLineNumber(169);    // compilenode string
        var string355 = new GraceString("]\n____________\n");
        var opresult358 = callmethodChecked(var_result, "++", [1], string355);
        var_result = opresult358;
        setLineNumber(172);    // compilenode block
        var block359 = new GraceBlock(this, 172, 1);
        setLineNumber(1);    // compilenode identifier
        block359.real = function(var_each) {
          setLineNumber(172);    // compilenode identifier
          var call360 = callmethodChecked(var_each, "asString", [0]);
          var opresult363 = callmethodChecked(var_result, "++", [1], call360);
          var_result = opresult363;
          return GraceDone;
        };
        setLineNumber(171);    // compilenode block
        var block364 = new GraceBlock(this, 171, 2);
        setLineNumber(1);    // compilenode identifier
        block364.real = function(var_a, var_b) {
          setLineNumber(171);    // compilenode identifier
          var call365 = callmethodChecked(var_b, "serialNumber", [0]);
          var call366 = callmethodChecked(var_a, "serialNumber", [0]);
          var call367 = callmethodChecked(call366, "compare", [1], call365);
          return call367;
        };
        setLineNumber(170);    // compilenode identifier
        var call368 = callmethodChecked(var_referencedScopes, "asList", [0]);
        var call369 = callmethodChecked(call368, "sortBy", [1], block364);
        var call370 = callmethodChecked(call369, "do", [1], block359);
        setLineNumber(173);    // compilenode string
        var string371 = new GraceString("____________\n");
        var opresult374 = callmethodChecked(var_result, "++", [1], string371);
        return opresult374;
      };
      func320.paramCounts = [0];
      obj16.methods["elementScopesAsString"] = func320;
      func320.definitionLine = 162;
      func320.definitionModule = "identifierresolution";
      var func375 = function(argcv) {    // method hasDefinitionInNest(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_nm = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for hasDefinitionInNest(1)"));
        setModuleName("identifierresolution");
        setLineNumber(176);    // compilenode block
        var block376 = new GraceBlock(this, 176, 1);
        setLineNumber(1);    // compilenode identifier
        block376.real = function(var_s) {
          var if377 = GraceDone;
          setLineNumber(177);    // compilenode identifier
          var call378 = callmethodChecked(var_s, "contains", [1], var_nm);
          if (Grace_isTrue(call378)) {
            setLineNumber(178);    // compilenode identifier
            throw new ReturnException(GraceTrue, returnTarget);
          }
          return if377;
        };
        onSelf = true;
        var call379 = callmethodChecked(this, "withSurroundingScopesDo", [1], block376);
        setLineNumber(181);    // compilenode identifier
        return GraceFalse;
      };
      func375.paramCounts = [1];
      obj16.methods["hasDefinitionInNest"] = func375;
      func375.definitionLine = 175;
      func375.definitionModule = "identifierresolution";
      var func380 = function(argcv) {    // method kindInNest(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_nm = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for kindInNest(1)"));
        setModuleName("identifierresolution");
        setLineNumber(184);    // compilenode block
        var block381 = new GraceBlock(this, 184, 1);
        setLineNumber(1);    // compilenode identifier
        block381.real = function(var_s) {
          var if382 = GraceDone;
          setLineNumber(185);    // compilenode identifier
          var call383 = callmethodChecked(var_s, "contains", [1], var_nm);
          if (Grace_isTrue(call383)) {
            setLineNumber(186);    // compilenode identifier
            var call384 = callmethodChecked(var_s, "kind", [1], var_nm);
            var var_kd = call384;
            var if385 = GraceDone;
            setLineNumber(187);    // compilenode identifier
            var call386 = callmethodChecked(var_kd, "fromParent", [0]);
            if (Grace_isTrue(call386)) {
              setLineNumber(188);    // compilenode identifier
              var call387 = callmethodChecked(var_k, "methdec", [0]);
              throw new ReturnException(call387, returnTarget);
            } else {
              setLineNumber(190);    // compilenode identifier
              throw new ReturnException(var_kd, returnTarget);
            }
            if382 = if385;
          }
          return if382;
        };
        onSelf = true;
        var call388 = callmethodChecked(this, "withSurroundingScopesDo", [1], block381);
        setLineNumber(194);    // compilenode identifier
        var call389 = callmethodChecked(var_k, "undefined", [0]);
        return call389;
      };
      func380.paramCounts = [1];
      obj16.methods["kindInNest"] = func380;
      func380.definitionLine = 183;
      func380.definitionModule = "identifierresolution";
      var func390 = function(argcv) {    // method thatDefines(1)ifNone(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_name = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for thatDefines (arg list 1) of thatDefines(1)ifNone(1)"));
        var var_action = arguments[curarg];
        curarg++;
        if (argcv[1] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ifNone (arg list 2) of thatDefines(1)ifNone(1)"));
        setModuleName("identifierresolution");
        setLineNumber(197);    // compilenode block
        var block391 = new GraceBlock(this, 197, 1);
        setLineNumber(1);    // compilenode identifier
        block391.real = function(var_s) {
          var if392 = GraceDone;
          setLineNumber(198);    // compilenode identifier
          var call393 = callmethodChecked(var_s, "contains", [1], var_name);
          if (Grace_isTrue(call393)) {
            throw new ReturnException(var_s, returnTarget);
          }
          return if392;
        };
        onSelf = true;
        var call394 = callmethodChecked(this, "withSurroundingScopesDo", [1], block391);
        setLineNumber(200);    // compilenode identifier
        var call395 = callmethodChecked(var_action, "apply", [0]);
        return call395;
      };
      func390.paramCounts = [1, 1];
      obj16.methods["thatDefines()ifNone"] = func390;
      func390.definitionLine = 196;
      func390.definitionModule = "identifierresolution";
      var func396 = function(argcv) {    // method thatDefines(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_name = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for thatDefines(1)"));
        setModuleName("identifierresolution");
        setLineNumber(203);    // compilenode block
        var block397 = new GraceBlock(this, 203, 1);
        setLineNumber(1);    // compilenode identifier
        block397.real = function(var_s) {
          var if398 = GraceDone;
          setLineNumber(204);    // compilenode identifier
          var call399 = callmethodChecked(var_s, "contains", [1], var_name);
          if (Grace_isTrue(call399)) {
            throw new ReturnException(var_s, returnTarget);
          }
          return if398;
        };
        onSelf = true;
        var call400 = callmethodChecked(this, "withSurroundingScopesDo", [1], block397);
        setLineNumber(206);    // compilenode call
        onSelf = true;
        var call401 = callmethodChecked(this, "asStringWithParents", [0]);
        var call402 = Grace_print(call401);
        setLineNumber(207);    // compilenode string
        var string403 = new GraceString("");
        var string406 = new GraceString("no scope defines ");
        var opresult408 = callmethodChecked(string406, "++", [1], var_name);
        var opresult410 = callmethodChecked(opresult408, "++", [1], string403);
        var call411 = callmethodChecked(var_prelude, "ProgrammingError", [0]);
        var call412 = callmethodChecked(call411, "raise", [1], opresult410);
        return call412;
      };
      func396.paramCounts = [1];
      obj16.methods["thatDefines"] = func396;
      func396.definitionLine = 202;
      func396.definitionModule = "identifierresolution";
      var func413 = function(argcv) {    // method isInSameObjectAs(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_enclosingScope = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isInSameObjectAs(1)"));
        setModuleName("identifierresolution");
        var if414 = GraceDone;
        setLineNumber(210);    // compilenode identifier
        var opresult417 = callmethodChecked(this, "==", [1], var_enclosingScope);
        if (Grace_isTrue(opresult417)) {
          return GraceTrue;
        }
        var if418 = GraceDone;
        setLineNumber(211);    // compilenode call
        onSelf = true;
        var call419 = callmethodChecked(this, "parent", [0]);
        var call420 = callmethodChecked(call419, "isObjectScope", [0]);
        if (Grace_isTrue(call420)) {
          return GraceFalse;
        }
        setLineNumber(212);    // compilenode call
        onSelf = true;
        var call421 = callmethodChecked(this, "parent", [0]);
        var call422 = callmethodChecked(call421, "isInSameObjectAs", [1], var_enclosingScope);
        return call422;
      };
      func413.paramCounts = [1];
      obj16.methods["isInSameObjectAs"] = func413;
      func413.definitionLine = 209;
      func413.definitionModule = "identifierresolution";
      var func423 = function(argcv) {    // method isObjectScope
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isObjectScope"));
        setModuleName("identifierresolution");
        var if424 = GraceDone;
        setLineNumber(215);    // compilenode string
        var string425 = new GraceString("object");
        onSelf = true;
        var call427 = callmethodChecked(this, "variety", [0]);
        var opresult429 = callmethodChecked(call427, "==", [1], string425);
        if (Grace_isTrue(opresult429)) {
          return GraceTrue;
        }
        var if430 = GraceDone;
        setLineNumber(216);    // compilenode string
        var string431 = new GraceString("module");
        onSelf = true;
        var call433 = callmethodChecked(this, "variety", [0]);
        var opresult435 = callmethodChecked(call433, "==", [1], string431);
        if (Grace_isTrue(opresult435)) {
          return GraceTrue;
        }
        var if436 = GraceDone;
        setLineNumber(217);    // compilenode string
        var string437 = new GraceString("dialect");
        onSelf = true;
        var call439 = callmethodChecked(this, "variety", [0]);
        var opresult441 = callmethodChecked(call439, "==", [1], string437);
        if (Grace_isTrue(opresult441)) {
          return GraceTrue;
        }
        var if442 = GraceDone;
        setLineNumber(218);    // compilenode string
        var string443 = new GraceString("class");
        onSelf = true;
        var call445 = callmethodChecked(this, "variety", [0]);
        var opresult447 = callmethodChecked(call445, "==", [1], string443);
        if (Grace_isTrue(opresult447)) {
          return GraceTrue;
        }
        var if448 = GraceDone;
        setLineNumber(219);    // compilenode string
        var string449 = new GraceString("built-in");
        onSelf = true;
        var call451 = callmethodChecked(this, "variety", [0]);
        var opresult453 = callmethodChecked(call451, "==", [1], string449);
        if (Grace_isTrue(opresult453)) {
          return GraceTrue;
        }
        setLineNumber(220);    // compilenode identifier
        return GraceFalse;
      };
      func423.paramCounts = [0];
      obj16.methods["isObjectScope"] = func423;
      func423.definitionLine = 214;
      func423.definitionModule = "identifierresolution";
      var func454 = function(argcv) {    // method isMethodScope
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isMethodScope"));
        setModuleName("identifierresolution");
        setLineNumber(223);    // compilenode string
        var string455 = new GraceString("method");
        onSelf = true;
        var call457 = callmethodChecked(this, "variety", [0]);
        var opresult459 = callmethodChecked(call457, "==", [1], string455);
        return opresult459;
      };
      func454.paramCounts = [0];
      obj16.methods["isMethodScope"] = func454;
      func454.definitionLine = 222;
      func454.definitionModule = "identifierresolution";
      var func460 = function(argcv) {    // method resolveOuterMethod(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_name = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for resolveOuterMethod(1)"));
        setModuleName("identifierresolution");
        setLineNumber(228);    // compilenode string
        var string461 = new GraceString("self");
        var call462 = callmethodChecked(var_ast, "identifierNode", [0]);
        var call463 = callmethodChecked(call462, "new()scope", [2, 1], string461, GraceFalse, this);
        var var_mem = call463;
        setLineNumber(229);    // compilenode block
        var block464 = new GraceBlock(this, 229, 1);
        setLineNumber(1);    // compilenode identifier
        block464.real = function(var_s) {
          var if465 = GraceDone;
          setLineNumber(230);    // compilenode identifier
          var call466 = callmethodChecked(var_s, "contains", [1], var_name);
          if (Grace_isTrue(call466)) {
            var if467 = GraceDone;
            setLineNumber(231);    // compilenode string
            var string468 = new GraceString("dialect");
            var call470 = callmethodChecked(var_s, "variety", [0]);
            var opresult472 = callmethodChecked(call470, "==", [1], string468);
            if (Grace_isTrue(opresult472)) {
              setLineNumber(233);    // compilenode string
              var string473 = new GraceString("prelude");
              var call474 = callmethodChecked(var_ast, "identifierNode", [0]);
              var call475 = callmethodChecked(call474, "new()scope", [2, 1], string473, GraceFalse, this);
              setLineNumber(232);    // compilenode identifier
              var call476 = callmethodChecked(var_ast, "memberNode", [0]);
              var call477 = callmethodChecked(call476, "new()scope", [2, 1], var_name, call475, this);
              throw new ReturnException(call477, returnTarget);
            }
            setLineNumber(235);    // compilenode identifier
            var call478 = callmethodChecked(var_ast, "memberNode", [0]);
            var call479 = callmethodChecked(call478, "new()scope", [2, 1], var_name, var_mem, this);
            throw new ReturnException(call479, returnTarget);
          }
          setLineNumber(237);    // compilenode identifier
          var call481 = callmethodChecked(var_s, "variety", [0]);
          var cases480 = [];
          setLineNumber(238);    // compilenode block
          var block482 = new GraceBlock(this, 238, 0);
          var string483 = new GraceString("object");
          block482.pattern = string483;
          block482.real = function() {
            setLineNumber(239);    // compilenode string
            var string484 = new GraceString("outer");
            var call485 = callmethodChecked(var_ast, "memberNode", [0]);
            var call486 = callmethodChecked(call485, "new()scope", [2, 1], string484, var_mem, this);
            var_mem = call486;
            return GraceDone;
          };
          cases480.push(block482);
          setLineNumber(240);    // compilenode block
          var block487 = new GraceBlock(this, 240, 0);
          var string488 = new GraceString("class");
          block487.pattern = string488;
          block487.real = function() {
            setLineNumber(241);    // compilenode string
            var string489 = new GraceString("outer");
            var call490 = callmethodChecked(var_ast, "memberNode", [0]);
            var call491 = callmethodChecked(call490, "new()scope", [2, 1], string489, var_mem, this);
            var_mem = call491;
            setLineNumber(242);    // compilenode string
            var string492 = new GraceString("outer");
            var call493 = callmethodChecked(var_ast, "memberNode", [0]);
            var call494 = callmethodChecked(call493, "new()scope", [2, 1], string492, var_mem, this);
            var_mem = call494;
            return GraceDone;
          };
          cases480.push(block487);
          setLineNumber(243);    // compilenode block
          var block495 = new GraceBlock(this, 243, 1);
          setLineNumber(1);    // compilenode identifier
          block495.real = function(var___95____95__0) {
            return GraceDone;
          };
          cases480.push(block495);
          setLineNumber(237);    // compilematchcase
          var matchres480 = matchCase(call481,cases480,false);
          setModuleName("identifierresolution");
          return matchres480;
        };
        onSelf = true;
        var call496 = callmethodChecked(this, "withSurroundingScopesDo", [1], block464);
        setLineNumber(246);    // compilenode identifier
        var call497 = callmethodChecked(var_ast, "identifierNode", [0]);
        var call498 = callmethodChecked(call497, "new()scope", [2, 1], var_name, GraceFalse, this);
        return call498;
      };
      func460.paramCounts = [1];
      obj16.methods["resolveOuterMethod"] = func460;
      func460.definitionLine = 225;
      func460.definitionModule = "identifierresolution";
      var func499 = function(argcv) {    // method scopeReferencedBy(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_nd = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for scopeReferencedBy(1)"));
        setModuleName("identifierresolution");
        var if500 = GraceDone;
        setLineNumber(254);    // compilenode string
        var string501 = new GraceString("identifier");
        var call503 = callmethodChecked(var_nd, "kind", [0]);
        var opresult505 = callmethodChecked(call503, "==", [1], string501);
        if (Grace_isTrue(opresult505)) {
          setLineNumber(255);    // compilenode identifier
          var call506 = callmethodChecked(var_nd, "nameString", [0]);
          var var_sought = call506;
          setLineNumber(256);    // compilenode block
          var block507 = new GraceBlock(this, 256, 1);
          setLineNumber(1);    // compilenode identifier
          block507.real = function(var_s) {
            var if508 = GraceDone;
            setLineNumber(257);    // compilenode identifier
            var call509 = callmethodChecked(var_s, "contains", [1], var_sought);
            if (Grace_isTrue(call509)) {
              setLineNumber(258);    // compilenode identifier
              var call510 = callmethodChecked(var_s, "getScope", [1], var_sought);
              throw new ReturnException(call510, returnTarget);
            }
            return if508;
          };
          onSelf = true;
          var call511 = callmethodChecked(this, "withSurroundingScopesDo", [1], block507);
          setLineNumber(261);    // compilenode string
          var string512 = new GraceString("");
          var string515 = new GraceString("no method ");
          var opresult517 = callmethodChecked(string515, "++", [1], var_sought);
          var opresult519 = callmethodChecked(opresult517, "++", [1], string512);
          setLineNumber(262);    // compilenode identifier
          var call520 = callmethodChecked(var_nd, "line", [0]);
          var call521 = callmethodChecked(var_nd, "linePos", [0]);
          var call523 = callmethodChecked(var_sought, "size", [0]);
          var call525 = callmethodChecked(var_nd, "linePos", [0]);
          var opresult527 = callmethodChecked(call525, "+", [1], call523);
          var diff529 = callmethodChecked(opresult527, "-", [1], new GraceNum(1));
          setLineNumber(261);    // compilenode identifier
          var call530 = callmethodChecked(var_errormessages, "syntaxError()atRange", [1, 3], opresult519, call520, call521, diff529);
          if500 = call530;
        } else {
          var if531 = GraceDone;
          setLineNumber(263);    // compilenode string
          var string532 = new GraceString("member");
          var call534 = callmethodChecked(var_nd, "kind", [0]);
          var opresult536 = callmethodChecked(call534, "==", [1], string532);
          if (Grace_isTrue(opresult536)) {
            setLineNumber(264);    // compilenode identifier
            var call537 = callmethodChecked(var_nd, "in", [0]);
            onSelf = true;
            var call538 = callmethodChecked(this, "scopeReferencedBy", [1], call537);
            var var_receiverScope = call538;
            var if539 = GraceDone;
            setLineNumber(266);    // compilenode string
            var string540 = new GraceString("outer");
            var call542 = callmethodChecked(var_nd, "value", [0]);
            var opresult544 = callmethodChecked(call542, "==", [1], string540);
            if (Grace_isTrue(opresult544)) {
              setLineNumber(267);    // compilenode identifier
              var call545 = callmethodChecked(var_receiverScope, "parent", [0]);
              return call545;
            }
            setLineNumber(269);    // compilenode identifier
            var call546 = callmethodChecked(var_nd, "asIdentifier", [0]);
            var call547 = callmethodChecked(var_receiverScope, "scopeReferencedBy", [1], call546);
            return call547;
          } else {
            var if548 = GraceDone;
            setLineNumber(270);    // compilenode string
            var string549 = new GraceString("call");
            var call551 = callmethodChecked(var_nd, "kind", [0]);
            var opresult553 = callmethodChecked(call551, "==", [1], string549);
            if (Grace_isTrue(opresult553)) {
              setLineNumber(271);    // compilenode identifier
              var call554 = callmethodChecked(var_nd, "value", [0]);
              onSelf = true;
              var call555 = callmethodChecked(this, "scopeReferencedBy", [1], call554);
              return call555;
            } else {
              var if556 = GraceDone;
              setLineNumber(272);    // compilenode string
              var string557 = new GraceString("op");
              var call559 = callmethodChecked(var_nd, "kind", [0]);
              var opresult561 = callmethodChecked(call559, "==", [1], string557);
              if (Grace_isTrue(opresult561)) {
                setLineNumber(273);    // compilenode identifier
                var call562 = callmethodChecked(var_nd, "left", [0]);
                onSelf = true;
                var call563 = callmethodChecked(this, "scopeReferencedBy", [1], call562);
                var var_receiverScope = call563;
                setLineNumber(274);    // compilenode identifier
                var call564 = callmethodChecked(var_nd, "asIdentifier", [0]);
                var call565 = callmethodChecked(var_receiverScope, "scopeReferencedBy", [1], call564);
                return call565;
              }
              if548 = if556;
            }
            if531 = if548;
          }
          if500 = if531;
        }
        setLineNumber(277);    // compilenode identifier
        var call566 = callmethodChecked(var_nd, "pretty", [1], new GraceNum(0));
        setLineNumber(276);    // compilenode string
        var string568 = new GraceString(" is not a Call, Member or Identifier\n");
        var call570 = callmethodChecked(var_nd, "value", [0]);
        var string572 = new GraceString("");
        var opresult574 = callmethodChecked(string572, "++", [1], call570);
        var opresult576 = callmethodChecked(opresult574, "++", [1], string568);
        var opresult578 = callmethodChecked(opresult576, "++", [1], call566);
        var call579 = callmethodChecked(var_prelude, "ProgrammingError", [0]);
        var call580 = callmethodChecked(call579, "raise", [1], opresult578);
        return call580;
      };
      func499.paramCounts = [1];
      obj16.methods["scopeReferencedBy"] = func499;
      func499.definitionLine = 248;
      func499.definitionModule = "identifierresolution";
      var func581 = function(argcv) {    // method enclosingObjectScope
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for enclosingObjectScope"));
        setModuleName("identifierresolution");
        setLineNumber(282);    // compilenode block
        var block582 = new GraceBlock(this, 282, 1);
        setLineNumber(1);    // compilenode identifier
        block582.real = function(var_s) {
          var if583 = GraceDone;
          setLineNumber(283);    // compilenode identifier
          var call584 = callmethodChecked(var_s, "isObjectScope", [0]);
          if (Grace_isTrue(call584)) {
            throw new ReturnException(var_s, returnTarget);
          }
          return if583;
        };
        onSelf = true;
        var call585 = callmethodChecked(this, "withSurroundingScopesDo", [1], block582);
        setLineNumber(285);    // compilenode string
        var string586 = new GraceString("no object scope found!");
        var call587 = callmethodChecked(var_prelude, "ProgrammingError", [1], string586);
        return call587;
      };
      func581.paramCounts = [0];
      obj16.methods["enclosingObjectScope"] = func581;
      func581.definitionLine = 279;
      func581.definitionModule = "identifierresolution";
      var func588 = function(argcv) {    // method inSameContextAs(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_encScope = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for inSameContextAs(1)"));
        setModuleName("identifierresolution");
        var if589 = GraceDone;
        setLineNumber(292);    // compilenode identifier
        var call590 = callmethodChecked(var_encScope, "isObjectScope", [0]);
        if (Grace_isTrue(call590)) {
          return GraceFalse;
        }
        setLineNumber(293);    // compilenode block
        var block591 = new GraceBlock(this, 293, 1);
        setLineNumber(1);    // compilenode identifier
        block591.real = function(var_s) {
          var if592 = GraceDone;
          setLineNumber(294);    // compilenode identifier
          var opresult595 = callmethodChecked(var_s, "==", [1], var_encScope);
          if (Grace_isTrue(opresult595)) {
            throw new ReturnException(GraceTrue, returnTarget);
          }
          var if596 = GraceDone;
          setLineNumber(295);    // compilenode identifier
          var call597 = callmethodChecked(var_s, "isObjectScope", [0]);
          if (Grace_isTrue(call597)) {
            throw new ReturnException(GraceFalse, returnTarget);
          }
          var if598 = GraceDone;
          setLineNumber(296);    // compilenode identifier
          var call599 = callmethodChecked(var_s, "isMethodScope", [0]);
          if (Grace_isTrue(call599)) {
            throw new ReturnException(GraceFalse, returnTarget);
          }
          return if598;
        };
        onSelf = true;
        var call600 = callmethodChecked(this, "withSurroundingScopesDo", [1], block591);
        setLineNumber(298);    // compilenode string
        var string601 = new GraceString("");
        var string604 = new GraceString("; encScope = ");
        var string607 = new GraceString("self = ");
        var opresult609 = callmethodChecked(string607, "++", [1], this);
        var opresult611 = callmethodChecked(opresult609, "++", [1], string604);
        var opresult613 = callmethodChecked(opresult611, "++", [1], var_encScope);
        var opresult615 = callmethodChecked(opresult613, "++", [1], string601);
        var call616 = callmethodChecked(var_prelude, "ProgrammingError", [0]);
        var call617 = callmethodChecked(call616, "raise", [1], opresult615);
        return call617;
      };
      func588.paramCounts = [1];
      obj16.methods["inSameContextAs"] = func588;
      func588.definitionLine = 289;
      func588.definitionModule = "identifierresolution";
      var func618 = function(argcv) {    // method isUniversal
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isUniversal"));
        setModuleName("identifierresolution");
        // isUniversal is a simple accessor - elide try ... catch
        setLineNumber(300);    // compilenode identifier
        return GraceFalse;
      };
      func618.paramCounts = [0];
      obj16.methods["isUniversal"] = func618;
      func618.definitionLine = 300;
      func618.definitionModule = "identifierresolution";
      var func619 = function(argcv) {    // method checkShadowing(1)as(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_ident = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for checkShadowing (arg list 1) of checkShadowing(1)as(1)"));
        var var_newKind = arguments[curarg];
        curarg++;
        if (argcv[1] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for as (arg list 2) of checkShadowing(1)as(1)"));
        setModuleName("identifierresolution");
        setLineNumber(302);    // compilenode identifier
        var call620 = callmethodChecked(var_ident, "nameString", [0]);
        var var_name = call620;
        setLineNumber(303);    // compilenode block
        var block621 = new GraceBlock(this, 303, 0);
        block621.real = function() {
          setLineNumber(305);    // compilenode identifier
          throw new ReturnException(var_done, returnTarget);
          return undefined;
        };
        onSelf = true;
        var call622 = callmethodChecked(this, "thatDefines()ifNone", [1, 1], var_name, block621);
        var var_priorScope = call622;
        var if623 = GraceDone;
        setLineNumber(307);    // compilenode identifier
        var opresult626 = callmethodChecked(var_priorScope, "==", [1], this);
        if (Grace_isTrue(opresult626)) {
          setLineNumber(308);    // compilenode string
          var string627 = new GraceString("this");
          if623 = string627;
        } else {
          setLineNumber(310);    // compilenode string
          var string628 = new GraceString("");
          var call630 = callmethodChecked(var_priorScope, "variety", [0]);
          var string632 = new GraceString("an enclosing ");
          var opresult634 = callmethodChecked(string632, "++", [1], call630);
          var opresult636 = callmethodChecked(opresult634, "++", [1], string628);
          if623 = opresult636;
        }
        var var_description = if623;
        setLineNumber(312);    // compilenode identifier
        var call637 = callmethodChecked(var_priorScope, "kind", [1], var_name);
        var var_priorKind = call637;
        var if638 = GraceDone;
        setLineNumber(313);    // compilenode block
        var block639 = new GraceBlock(this, 313, 0);
        block639.real = function() {
          onSelf = true;
          var call640 = callmethodChecked(this, "isObjectScope", [0]);
          return call640;
        };
        var call642 = callmethodChecked(var_priorScope, "isObjectScope", [0]);
        var opresult644 = callmethodChecked(call642, "&&", [1], block639);
        if (Grace_isTrue(opresult644)) {
          setLineNumber(315);    // compilenode identifier
          return var_done;
        }
        setLineNumber(317);    // compilenode string
        var string645 = new GraceString("");
        var var_more = string645;
        var if646 = GraceDone;
        setLineNumber(318);    // compilenode identifier
        var call647 = callmethodChecked(var_priorScope, "elementLines", [0]);
        var call648 = callmethodChecked(call647, "contains", [1], var_name);
        if (Grace_isTrue(call648)) {
          setLineNumber(319);    // compilenode identifier
          var call649 = callmethodChecked(var_priorScope, "elementLines", [0]);
          var call650 = callmethodChecked(call649, "get", [1], var_name);
          var var_ln = call650;
          var if651 = GraceDone;
          setLineNumber(320);    // compilenode identifier
          var opresult654 = callmethodChecked(var_ln, ">", [1], new GraceNum(0));
          if (Grace_isTrue(opresult654)) {
            setLineNumber(321);    // compilenode string
            var string655 = new GraceString("");
            var call657 = callmethodChecked(var_priorScope, "elementLines", [0]);
            var call658 = callmethodChecked(call657, "get", [1], var_name);
            var string660 = new GraceString(" on line ");
            var opresult662 = callmethodChecked(string660, "++", [1], call658);
            var opresult664 = callmethodChecked(opresult662, "++", [1], string655);
            var_more = opresult664;
            if651 = GraceDone;
          }
          if646 = if651;
        }
        var if665 = GraceDone;
        setLineNumber(324);    // compilenode identifier
        var call666 = callmethodChecked(var_k, "vardec", [0]);
        var opresult669 = callmethodChecked(var_newKind, "==", [1], call666);
        if (Grace_isTrue(opresult669)) {
          setLineNumber(325);    // compilenode array
          var array670 = new PrimitiveGraceList([]);
          var var_suggs = array670;
          setLineNumber(326);    // compilenode identifier
          var call671 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call672 = callmethodChecked(call671, "new", [0]);
          var var_sugg = call672;
          var if673 = GraceDone;
          setLineNumber(327);    // compilenode string
          var string674 = new GraceString("=");
          var string675 = new GraceString(" :=");
          var string678 = new GraceString("");
          var opresult680 = callmethodChecked(string678, "++", [1], var_name);
          var opresult682 = callmethodChecked(opresult680, "++", [1], string675);
          setLineNumber(328);    // compilenode identifier
          var call683 = callmethodChecked(var_ident, "line", [0]);
          setLineNumber(327);    // compilenode identifier
          var call684 = callmethodChecked(var_sugg, "replaceUntil()with()onLine", [1, 1, 1], string674, opresult682, call683);
          if (Grace_isTrue(call684)) {
            setLineNumber(330);    // compilenode identifier
            var call685 = callmethodChecked(var_suggs, "push", [1], var_sugg);
            if673 = call685;
          }
          var if686 = GraceDone;
          setLineNumber(332);    // compilenode identifier
          var call687 = callmethodChecked(var_k, "vardec", [0]);
          var opresult690 = callmethodChecked(var_priorKind, "==", [1], call687);
          if (Grace_isTrue(opresult690)) {
            setLineNumber(333);    // compilenode string
            var string691 = new GraceString(". To assign to the existing variable, remove 'var'");
            var opresult694 = callmethodChecked(var_more, "++", [1], string691);
            var_more = opresult694;
            if686 = GraceDone;
          }
          setLineNumber(337);    // compilenode string
          var string695 = new GraceString(".");
          var string698 = new GraceString(" scope");
          var string701 = new GraceString("");
          var opresult703 = callmethodChecked(string701, "++", [1], var_description);
          var opresult705 = callmethodChecked(opresult703, "++", [1], string698);
          var opresult707 = callmethodChecked(opresult705, "++", [1], var_more);
          var opresult709 = callmethodChecked(opresult707, "++", [1], string695);
          setLineNumber(336);    // compilenode string
          var string711 = new GraceString("redeclared because it is already declared in ");
          setLineNumber(335);    // compilenode string
          var string713 = new GraceString("' cannot be ");
          var string716 = new GraceString("'");
          var opresult718 = callmethodChecked(string716, "++", [1], var_name);
          var opresult720 = callmethodChecked(opresult718, "++", [1], string713);
          var opresult722 = callmethodChecked(opresult720, "++", [1], string711);
          var opresult724 = callmethodChecked(opresult722, "++", [1], opresult709);
          setLineNumber(338);    // compilenode identifier
          var call725 = callmethodChecked(var_ident, "line", [0]);
          var call726 = callmethodChecked(var_ident, "linePos", [0]);
          var call728 = callmethodChecked(var_name, "size", [0]);
          var call730 = callmethodChecked(var_ident, "linePos", [0]);
          var opresult732 = callmethodChecked(call730, "+", [1], call728);
          var diff734 = callmethodChecked(opresult732, "-", [1], new GraceNum(1));
          setLineNumber(335);    // compilenode identifier
          var call735 = callmethodChecked(var_errormessages, "syntaxError()atRange()withSuggestions", [1, 3, 1], opresult724, call725, call726, diff734, var_suggs);
          if665 = call735;
        } else {
          setLineNumber(343);    // compilenode string
          var string736 = new GraceString(". Use a different name.");
          var string739 = new GraceString(" scope");
          var string742 = new GraceString("");
          var opresult744 = callmethodChecked(string742, "++", [1], var_description);
          var opresult746 = callmethodChecked(opresult744, "++", [1], string739);
          var opresult748 = callmethodChecked(opresult746, "++", [1], var_more);
          var opresult750 = callmethodChecked(opresult748, "++", [1], string736);
          setLineNumber(342);    // compilenode string
          var string752 = new GraceString("redeclared because it is already declared in ");
          setLineNumber(341);    // compilenode string
          var string754 = new GraceString("' cannot be ");
          var string757 = new GraceString("'");
          var opresult759 = callmethodChecked(string757, "++", [1], var_name);
          var opresult761 = callmethodChecked(opresult759, "++", [1], string754);
          var opresult763 = callmethodChecked(opresult761, "++", [1], string752);
          var opresult765 = callmethodChecked(opresult763, "++", [1], opresult750);
          setLineNumber(344);    // compilenode identifier
          var call766 = callmethodChecked(var_ident, "line", [0]);
          var call767 = callmethodChecked(var_ident, "linePos", [0]);
          setLineNumber(345);    // compilenode identifier
          var call769 = callmethodChecked(var_name, "size", [0]);
          var call771 = callmethodChecked(var_ident, "linePos", [0]);
          var opresult773 = callmethodChecked(call771, "+", [1], call769);
          var diff775 = callmethodChecked(opresult773, "-", [1], new GraceNum(1));
          setLineNumber(341);    // compilenode identifier
          var call776 = callmethodChecked(var_errormessages, "syntaxError()atRange", [1, 3], opresult765, call766, call767, diff775);
          if665 = call776;
        }
        return if665;
      };
      func619.paramCounts = [1, 1];
      obj16.methods["checkShadowing()as"] = func619;
      func619.definitionLine = 301;
      func619.definitionModule = "identifierresolution";
      setLineNumber(34);    // compilenode identifier
      var call777 = callmethodChecked(var_map, "new", [0]);
      obj16.data["elements"] = call777;
      var reader_identifierresolution_elements778 = function() {
        return this.data["elements"];
      };
      reader_identifierresolution_elements778.def = true;
      obj16.methods["elements"] = reader_identifierresolution_elements778;
      setLineNumber(35);    // compilenode identifier
      var call779 = callmethodChecked(var_map, "new", [0]);
      obj16.data["elementScopes"] = call779;
      var reader_identifierresolution_elementScopes780 = function() {
        return this.data["elementScopes"];
      };
      reader_identifierresolution_elementScopes780.def = true;
      obj16.methods["elementScopes"] = reader_identifierresolution_elementScopes780;
      setLineNumber(36);    // compilenode identifier
      var call781 = callmethodChecked(var_map, "new", [0]);
      obj16.data["elementLines"] = call781;
      var reader_identifierresolution_elementLines782 = function() {
        return this.data["elementLines"];
      };
      reader_identifierresolution_elementLines782.def = true;
      obj16.methods["elementLines"] = reader_identifierresolution_elementLines782;
      setLineNumber(37);    // compilenode identifier
      var call783 = callmethodChecked(var_map, "new", [0]);
      obj16.data["elementTokens"] = call783;
      var reader_identifierresolution_elementTokens784 = function() {
        return this.data["elementTokens"];
      };
      reader_identifierresolution_elementTokens784.def = true;
      obj16.methods["elementTokens"] = reader_identifierresolution_elementTokens784;
      setLineNumber(38);    // compilenode identifier
      obj16.data["parent"] = var_parent__39__;
      var reader_identifierresolution_parent785 = function() {
        return this.data["parent"];
      };
      reader_identifierresolution_parent785.def = true;
      obj16.methods["parent"] = reader_identifierresolution_parent785;
      setLineNumber(39);    // compilenode identifier
      obj16.data["hasParent"] = GraceTrue;
      var reader_identifierresolution_hasParent786 = function() {
        return this.data["hasParent"];
      };
      obj16.methods["hasParent"] = reader_identifierresolution_hasParent786;
      obj16.data["hasParent"] = GraceTrue;
      var writer_identifierresolution_hasParent786 = function(argcv, o) {
        this.data["hasParent"] = o;
        return GraceDone;
      };
      obj16.methods["hasParent:="] = writer_identifierresolution_hasParent786;
      obj16.mutable = true;
      setLineNumber(40);    // compilenode identifier
      obj16.data["variety"] = var_variety__39__;
      var reader_identifierresolution_variety787 = function() {
        return this.data["variety"];
      };
      reader_identifierresolution_variety787.def = true;
      obj16.methods["variety"] = reader_identifierresolution_variety787;
      setLineNumber(41);    // compilenode identifier
      var call788 = callmethodChecked(var_ast, "nullNode", [0]);
      obj16.data["node"] = call788;
      var reader_identifierresolution_node789 = function() {
        return this.data["node"];
      };
      obj16.methods["node"] = reader_identifierresolution_node789;
      obj16.data["node"] = call788;
      var writer_identifierresolution_node789 = function(argcv, o) {
        this.data["node"] = o;
        return GraceDone;
      };
      obj16.methods["node:="] = writer_identifierresolution_node789;
      obj16.mutable = true;
      setLineNumber(42);    // compilenode identifier
      obj16.data["inheritedNames"] = var_undiscovered;
      var reader_identifierresolution_inheritedNames790 = function() {
        return this.data["inheritedNames"];
      };
      obj16.methods["inheritedNames"] = reader_identifierresolution_inheritedNames790;
      obj16.data["inheritedNames"] = var_undiscovered;
      var writer_identifierresolution_inheritedNames790 = function(argcv, o) {
        this.data["inheritedNames"] = o;
        return GraceDone;
      };
      obj16.methods["inheritedNames:="] = writer_identifierresolution_inheritedNames790;
      obj16.mutable = true;
      setLineNumber(43);    // compilenode identifier
      var opresult793 = callmethodChecked(var_stSerial, "+", [1], new GraceNum(1));
      var_stSerial = opresult793;
      setLineNumber(44);    // compilenode identifier
      obj16.data["serialNumber"] = var_stSerial;
      var reader_identifierresolution_serialNumber794 = function() {
        return this.data["serialNumber"];
      };
      reader_identifierresolution_serialNumber794.def = true;
      obj16.methods["serialNumber"] = reader_identifierresolution_serialNumber794;
      setLineNumber(45);    // compilenode call
      onSelf = true;
      var call795 = callmethodChecked(this, "serialNumber", [0]);
      var call796 = callmethodChecked(call795, "hash", [0]);
      obj16.data["hash"] = call796;
      var reader_identifierresolution_hash797 = function() {
        return this.data["hash"];
      };
      reader_identifierresolution_hash797.def = true;
      obj16.methods["hash"] = reader_identifierresolution_hash797;
      var if798 = GraceDone;
      setLineNumber(47);    // compilenode call
      onSelf = true;
      var call799 = callmethodChecked(this, "isObjectScope", [0]);
      if (Grace_isTrue(call799)) {
        setLineNumber(48);    // compilenode string
        var string800 = new GraceString("self");
        var call801 = callmethodChecked(var_k, "selfDef", [0]);
        onSelf = true;
        var call802 = callmethodChecked(this, "addName()as", [1, 1], string800, call801);
        setLineNumber(49);    // compilenode string
        var string803 = new GraceString("self");
        onSelf = true;
        var call804 = callmethodChecked(this, "at()putScope", [1, 1], string803, this);
        if798 = call804;
      }
      superDepth = origSuperDepth;
    };
    obj_init_16.apply(obj16, []);
    return obj16;
  };
  func15.paramCounts = [1, 1];
  this.methods["newScopeIn()kind"] = func15;
  func15.definitionLine = 33;
  func15.definitionModule = "identifierresolution";
    var func805 = function(argcv) {    // method newScopeIn(1     )kind(1     )()object
      var curarg = 1;
      var var_parent__39__ = arguments[curarg];
      curarg++;
      var var_variety__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      // Start argument processing
      curarg = 1;
      curarg++;
      curarg++;
      // End argument processing
      setModuleName("identifierresolution");
      var returnTarget = invocationCount;
      invocationCount++;
      var obj806 = Grace_allocObject(GraceObject, "newScopeIn()kind");
      obj806.definitionModule = "identifierresolution";
      obj806.definitionLine = 33;
      var inho806 = inheritingObject;
      while (inho806.superobj) inho806 = inho806.superobj;
      inho806.superobj = obj806;
      obj806.data = inheritingObject.data;
      if (inheritingObject.hasOwnProperty('_value'))
        obj806._value = inheritingObject._value;
      obj806.outer = this;
      var reader_identifierresolution_outer807 = function() {
        return this.outer;
      };
      obj806.methods["outer"] = reader_identifierresolution_outer807;
      var obj_init_806 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj806;
        var func808 = function(argcv) {    // method ==(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_other = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ==(1)"));
          setModuleName("identifierresolution");
          setLineNumber(51);    // compilenode identifier
          onSelf = true;
          var call809 = callmethodChecked(this, "isMe", [1], var_other);
          return call809;
        };
        func808.paramCounts = [1];
        obj806.methods["=="] = func808;
        func808.definitionLine = 51;
        func808.definitionModule = "identifierresolution";
        var func810 = function(argcv) {    // method isEmpty
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isEmpty"));
          setModuleName("identifierresolution");
          setLineNumber(52);    // compilenode call
          onSelf = true;
          var call812 = callmethodChecked(this, "elements", [0]);
          var call813 = callmethodChecked(call812, "size", [0]);
          var opresult815 = callmethodChecked(call813, "==", [1], new GraceNum(0));
          return opresult815;
        };
        func810.paramCounts = [0];
        obj806.methods["isEmpty"] = func810;
        func810.definitionLine = 52;
        func810.definitionModule = "identifierresolution";
        var func816 = function(argcv) {    // method addName(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_n = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addName(1)"));
          setModuleName("identifierresolution");
          setLineNumber(54);    // compilenode identifier
          var call817 = callmethodChecked(var_k, "methdec", [0]);
          onSelf = true;
          var call818 = callmethodChecked(this, "elements", [0]);
          var call819 = callmethodChecked(call818, "put", [2], var_n, call817);
          setLineNumber(55);    // compilenode identifier
          var call820 = callmethodChecked(var_util, "linenum", [0]);
          onSelf = true;
          var call821 = callmethodChecked(this, "elementLines", [0]);
          var call822 = callmethodChecked(call821, "put", [2], var_n, call820);
          return call822;
        };
        func816.paramCounts = [1];
        obj806.methods["addName"] = func816;
        func816.definitionLine = 53;
        func816.definitionModule = "identifierresolution";
        var func823 = function(argcv) {    // method addName(1)as(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_n = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addName (arg list 1) of addName(1)as(1)"));
          var var_kind = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for as (arg list 2) of addName(1)as(1)"));
          // Start argument checking
          curarg = 1;
          curarg++;
          setLineNumber(57);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_DeclKind, "match",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in as (arg list 2), which corresponds to parameter kind, does not have " + 
                      callmethod(var_DeclKind, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("identifierresolution");
          setLineNumber(58);    // compilenode block
          var block824 = new GraceBlock(this, 58, 0);
          block824.real = function() {
            setLineNumber(59);    // compilenode call
            onSelf = true;
            var call825 = callmethodChecked(this, "elements", [0]);
            var call826 = callmethodChecked(call825, "put", [2], var_n, var_kind);
            setLineNumber(60);    // compilenode identifier
            var call827 = callmethodChecked(var_util, "linenum", [0]);
            onSelf = true;
            var call828 = callmethodChecked(this, "elementLines", [0]);
            var call829 = callmethodChecked(call828, "put", [2], var_n, call827);
            setLineNumber(62);    // compilenode identifier
            throw new ReturnException(var_done, returnTarget);
            return undefined;
          };
          setLineNumber(58);    // compilenode call
          onSelf = true;
          var call830 = callmethodChecked(this, "elements", [0]);
          var call831 = callmethodChecked(call830, "get()ifAbsent", [1, 1], var_n, block824);
          var var_oldKind = call831;
          var if832 = GraceDone;
          setLineNumber(63);    // compilenode identifier
          var call833 = callmethodChecked(var_kind, "isImplicit", [0]);
          if (Grace_isTrue(call833)) {
            setLineNumber(65);    // compilenode identifier
            return var_done;
          }
          var if834 = GraceDone;
          setLineNumber(66);    // compilenode identifier
          var call835 = callmethodChecked(var_oldKind, "isImplicit", [0]);
          if (Grace_isTrue(call835)) {
            setLineNumber(67);    // compilenode call
            onSelf = true;
            var call836 = callmethodChecked(this, "elements", [0]);
            var call837 = callmethodChecked(call836, "put", [2], var_n, var_kind);
            setLineNumber(68);    // compilenode identifier
            var call838 = callmethodChecked(var_util, "linenum", [0]);
            onSelf = true;
            var call839 = callmethodChecked(this, "elementLines", [0]);
            var call840 = callmethodChecked(call839, "put", [2], var_n, call838);
            setLineNumber(70);    // compilenode identifier
            return var_done;
          }
          setLineNumber(72);    // compilenode string
          var string841 = new GraceString("");
          var string844 = new GraceString(" because it is already declared as ");
          var string847 = new GraceString(" redefined as ");
          var opresult849 = callmethodChecked(string847, "++", [1], var_kind);
          var opresult851 = callmethodChecked(opresult849, "++", [1], string844);
          var opresult853 = callmethodChecked(opresult851, "++", [1], var_oldKind);
          var opresult855 = callmethodChecked(opresult853, "++", [1], string841);
          setLineNumber(71);    // compilenode string
          var string857 = new GraceString("' cannot be");
          var string860 = new GraceString("'");
          var opresult862 = callmethodChecked(string860, "++", [1], var_n);
          var opresult864 = callmethodChecked(opresult862, "++", [1], string857);
          var opresult866 = callmethodChecked(opresult864, "++", [1], opresult855);
          setLineNumber(73);    // compilenode identifier
          var call867 = callmethodChecked(var_util, "line", [0]);
          var call868 = callmethodChecked(var_util, "linePos", [0]);
          var call870 = callmethodChecked(var_n, "size", [0]);
          var call872 = callmethodChecked(var_util, "linePos", [0]);
          var opresult874 = callmethodChecked(call872, "+", [1], call870);
          var diff876 = callmethodChecked(opresult874, "-", [1], new GraceNum(1));
          setLineNumber(71);    // compilenode identifier
          var call877 = callmethodChecked(var_errormessages, "syntaxError()atRange", [1, 3], opresult866, call867, call868, diff876);
          return call877;
        };
        func823.paramTypes = [];
        func823.paramTypes.push([]);
        func823.paramTypes.push([]);
        func823.paramCounts = [1, 1];
        obj806.methods["addName()as"] = func823;
        func823.definitionLine = 57;
        func823.definitionModule = "identifierresolution";
        var func878 = function(argcv) {    // method addNode(1)as(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_nd = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addNode (arg list 1) of addNode(1)as(1)"));
          var var_kind = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for as (arg list 2) of addNode(1)as(1)"));
          setModuleName("identifierresolution");
          setLineNumber(76);    // compilenode identifier
          var call879 = callmethodChecked(var_nd, "value", [0]);
          var var_ndName = call879;
          setLineNumber(77);    // compilenode identifier
          onSelf = true;
          var call880 = callmethodChecked(this, "checkShadowing()as", [1, 1], var_nd, var_kind);
          setLineNumber(78);    // compilenode block
          var block881 = new GraceBlock(this, 78, 0);
          block881.real = function() {
            setLineNumber(79);    // compilenode call
            onSelf = true;
            var call882 = callmethodChecked(this, "elements", [0]);
            var call883 = callmethodChecked(call882, "put", [2], var_ndName, var_kind);
            setLineNumber(80);    // compilenode identifier
            var call884 = callmethodChecked(var_nd, "line", [0]);
            onSelf = true;
            var call885 = callmethodChecked(this, "elementLines", [0]);
            var call886 = callmethodChecked(call885, "put", [2], var_ndName, call884);
            setLineNumber(82);    // compilenode identifier
            throw new ReturnException(var_done, returnTarget);
            return undefined;
          };
          setLineNumber(78);    // compilenode call
          onSelf = true;
          var call887 = callmethodChecked(this, "elements", [0]);
          var call888 = callmethodChecked(call887, "get()ifAbsent", [1, 1], var_ndName, block881);
          var var_oldKind = call888;
          var if889 = GraceDone;
          setLineNumber(83);    // compilenode identifier
          var call890 = callmethodChecked(var_kind, "isImplicit", [0]);
          if (Grace_isTrue(call890)) {
            setLineNumber(85);    // compilenode identifier
            return var_done;
          }
          var if891 = GraceDone;
          setLineNumber(86);    // compilenode identifier
          var call892 = callmethodChecked(var_oldKind, "isImplicit", [0]);
          if (Grace_isTrue(call892)) {
            setLineNumber(87);    // compilenode call
            onSelf = true;
            var call893 = callmethodChecked(this, "elements", [0]);
            var call894 = callmethodChecked(call893, "put", [2], var_ndName, var_kind);
            setLineNumber(88);    // compilenode identifier
            var call895 = callmethodChecked(var_nd, "line", [0]);
            onSelf = true;
            var call896 = callmethodChecked(this, "elementLines", [0]);
            var call897 = callmethodChecked(call896, "put", [2], var_ndName, call895);
            setLineNumber(90);    // compilenode identifier
            return var_done;
          }
          setLineNumber(91);    // compilenode string
          var string898 = new GraceString(" in this scope");
          var var_more = string898;
          var if899 = GraceDone;
          setLineNumber(92);    // compilenode call
          onSelf = true;
          var call900 = callmethodChecked(this, "elementLines", [0]);
          var call901 = callmethodChecked(call900, "contains", [1], var_ndName);
          if (Grace_isTrue(call901)) {
            setLineNumber(94);    // compilenode string
            var string902 = new GraceString("");
            onSelf = true;
            var call904 = callmethodChecked(this, "elementLines", [0]);
            var call905 = callmethodChecked(call904, "get", [1], var_ndName);
            var string907 = new GraceString(" on line ");
            var opresult909 = callmethodChecked(string907, "++", [1], call905);
            var opresult911 = callmethodChecked(opresult909, "++", [1], string902);
            setLineNumber(93);    // compilenode string
            var string913 = new GraceString("");
            var string916 = new GraceString(" as a ");
            var opresult918 = callmethodChecked(string916, "++", [1], var_oldKind);
            var opresult920 = callmethodChecked(opresult918, "++", [1], string913);
            var opresult922 = callmethodChecked(opresult920, "++", [1], opresult911);
            var_more = opresult922;
            if899 = GraceDone;
          }
          setLineNumber(98);    // compilenode string
          var string923 = new GraceString(".");
          var call925 = callmethodChecked(var_nd, "line", [0]);
          var string927 = new GraceString(" as well as here at line ");
          var opresult929 = callmethodChecked(string927, "++", [1], call925);
          var opresult931 = callmethodChecked(opresult929, "++", [1], string923);
          setLineNumber(97);    // compilenode string
          var string934 = new GraceString(" redeclared because it is already declared");
          setLineNumber(96);    // compilenode string
          var string936 = new GraceString("' cannot be");
          var string939 = new GraceString("'");
          var opresult941 = callmethodChecked(string939, "++", [1], var_ndName);
          var opresult943 = callmethodChecked(opresult941, "++", [1], string936);
          var opresult945 = callmethodChecked(opresult943, "++", [1], string934);
          var opresult947 = callmethodChecked(opresult945, "++", [1], var_more);
          var opresult949 = callmethodChecked(opresult947, "++", [1], opresult931);
          setLineNumber(99);    // compilenode identifier
          var call950 = callmethodChecked(var_nd, "line", [0]);
          var call951 = callmethodChecked(var_nd, "linePos", [0]);
          var call953 = callmethodChecked(var_ndName, "size", [0]);
          var call955 = callmethodChecked(var_nd, "linePos", [0]);
          var opresult957 = callmethodChecked(call955, "+", [1], call953);
          var diff959 = callmethodChecked(opresult957, "-", [1], new GraceNum(1));
          setLineNumber(96);    // compilenode identifier
          var call960 = callmethodChecked(var_errormessages, "syntaxError()atRange", [1, 3], opresult949, call950, call951, diff959);
          return call960;
        };
        func878.paramCounts = [1, 1];
        obj806.methods["addNode()as"] = func878;
        func878.definitionLine = 75;
        func878.definitionModule = "identifierresolution";
        var func961 = function(argcv) {    // method contains(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_n = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for contains(1)"));
          setModuleName("identifierresolution");
          setLineNumber(102);    // compilenode call
          onSelf = true;
          var call962 = callmethodChecked(this, "elements", [0]);
          var call963 = callmethodChecked(call962, "contains", [1], var_n);
          return call963;
        };
        func961.paramCounts = [1];
        obj806.methods["contains"] = func961;
        func961.definitionLine = 101;
        func961.definitionModule = "identifierresolution";
        var func964 = function(argcv) {    // method withSurroundingScopesDo(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_b = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for withSurroundingScopesDo(1)"));
          setModuleName("identifierresolution");
          setLineNumber(105);    // compilenode identifier
          var var_cur = this;
          setLineNumber(106);    // compilenode block
          var block965 = new GraceBlock(this, 106, 0);
          block965.real = function() {
            var call966 = callmethodChecked(var_b, "apply", [1], var_cur);
            var call967 = callmethodChecked(var_cur, "hasParent", [0]);
            return call967;
          };
          var block968 = new GraceBlock(this, 106, 0);
          block968.real = function() {
            setLineNumber(107);    // compilenode identifier
            var call969 = callmethodChecked(var_cur, "parent", [0]);
            var_cur = call969;
            return GraceDone;
          };
          var call970 = callmethodChecked(var_prelude, "while()do", [1, 1], block965, block968);
          return call970;
        };
        func964.paramCounts = [1];
        obj806.methods["withSurroundingScopesDo"] = func964;
        func964.definitionLine = 104;
        func964.definitionModule = "identifierresolution";
        var func971 = function(argcv) {    // method keysAsList
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for keysAsList"));
          setModuleName("identifierresolution");
          setLineNumber(111);    // compilenode call
          var call972 = callmethodChecked(var_prelude, "emptyList", [0]);
          var var_result = call972;
          setLineNumber(112);    // compilenode block
          var block973 = new GraceBlock(this, 112, 1);
          setLineNumber(1);    // compilenode identifier
          block973.real = function(var_each) {
            setLineNumber(112);    // compilenode identifier
            var call974 = callmethodChecked(var_result, "addLast", [1], var_each);
            return call974;
          };
          onSelf = true;
          var call975 = callmethodChecked(this, "elements", [0]);
          var call976 = callmethodChecked(call975, "keysDo", [1], block973);
          setLineNumber(113);    // compilenode identifier
          return var_result;
        };
        func971.paramCounts = [0];
        obj806.methods["keysAsList"] = func971;
        func971.definitionLine = 110;
        func971.definitionModule = "identifierresolution";
        var func977 = function(argcv) {    // method keysAndKindsDo(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_action = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for keysAndKindsDo(1)"));
          setModuleName("identifierresolution");
          setLineNumber(116);    // compilenode call
          onSelf = true;
          var call978 = callmethodChecked(this, "elements", [0]);
          var call979 = callmethodChecked(call978, "keysAndValuesDo", [1], var_action);
          return call979;
        };
        func977.paramCounts = [1];
        obj806.methods["keysAndKindsDo"] = func977;
        func977.definitionLine = 115;
        func977.definitionModule = "identifierresolution";
        var func980 = function(argcv) {    // method kind(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_n = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for kind(1)"));
          setModuleName("identifierresolution");
          setLineNumber(119);    // compilenode call
          onSelf = true;
          var call981 = callmethodChecked(this, "elements", [0]);
          var call982 = callmethodChecked(call981, "get", [1], var_n);
          var var_kd = call982;
          if (!Grace_isTrue(callmethod(var_DeclKind, "match", [1], var_kd)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("value of def 'kd' is not of type DeclKind"));
          var if983 = GraceDone;
          setLineNumber(120);    // compilenode identifier
          var call984 = callmethodChecked(var_DeclKind, "match", [1], var_kd);
          var call985 = callmethodChecked(call984, "not", [0]);
          if (Grace_isTrue(call985)) {
            var string986 = new GraceString("");
            var string989 = new GraceString(" is ");
            var string992 = new GraceString("kind of ");
            var opresult994 = callmethodChecked(string992, "++", [1], var_n);
            var opresult996 = callmethodChecked(opresult994, "++", [1], string989);
            var opresult998 = callmethodChecked(opresult996, "++", [1], var_k);
            var opresult1000 = callmethodChecked(opresult998, "++", [1], string986);
            var call1001 = Grace_print(opresult1000);
            if983 = call1001;
          }
          setLineNumber(121);    // compilenode identifier
          return var_kd;
        };
        func980.paramCounts = [1];
        obj806.methods["kind"] = func980;
        func980.definitionLine = 118;
        func980.definitionModule = "identifierresolution";
        var func1002 = function(argcv) {    // method at(1)putScope(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_n = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for at (arg list 1) of at(1)putScope(1)"));
          var var_scp = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for putScope (arg list 2) of at(1)putScope(1)"));
          setModuleName("identifierresolution");
          setLineNumber(124);    // compilenode call
          onSelf = true;
          var call1003 = callmethodChecked(this, "elementScopes", [0]);
          var call1004 = callmethodChecked(call1003, "put", [2], var_n, var_scp);
          return call1004;
        };
        func1002.paramCounts = [1, 1];
        obj806.methods["at()putScope"] = func1002;
        func1002.definitionLine = 123;
        func1002.definitionModule = "identifierresolution";
        var func1005 = function(argcv) {    // method getScope(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_n = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for getScope(1)"));
          setModuleName("identifierresolution");
          var if1006 = GraceDone;
          setLineNumber(127);    // compilenode call
          onSelf = true;
          var call1007 = callmethodChecked(this, "elementScopes", [0]);
          var call1008 = callmethodChecked(call1007, "contains", [1], var_n);
          if (Grace_isTrue(call1008)) {
            setLineNumber(128);    // compilenode call
            onSelf = true;
            var call1009 = callmethodChecked(this, "elementScopes", [0]);
            var call1010 = callmethodChecked(call1009, "get", [1], var_n);
            return call1010;
          }
          setLineNumber(136);    // compilenode identifier
          return var_universalScope;
        };
        func1005.paramCounts = [1];
        obj806.methods["getScope"] = func1005;
        func1005.definitionLine = 126;
        func1005.definitionModule = "identifierresolution";
        var func1011 = function(argcv) {    // method asStringWithParents
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asStringWithParents"));
          setModuleName("identifierresolution");
          setLineNumber(139);    // compilenode string
          var string1012 = new GraceString("");
          var string1015 = new GraceString("\nCurrent: ");
          var opresult1017 = callmethodChecked(string1015, "++", [1], this);
          var opresult1019 = callmethodChecked(opresult1017, "++", [1], string1012);
          var var_result = opresult1019;
          setLineNumber(140);    // compilenode identifier
          var var_s = this;
          setLineNumber(141);    // compilenode block
          var block1020 = new GraceBlock(this, 141, 0);
          block1020.real = function() {
            var call1021 = callmethodChecked(var_s, "hasParent", [0]);
            return call1021;
          };
          var block1022 = new GraceBlock(this, 141, 0);
          block1022.real = function() {
            setLineNumber(142);    // compilenode identifier
            var call1023 = callmethodChecked(var_s, "parent", [0]);
            var_s = call1023;
            setLineNumber(143);    // compilenode string
            var string1024 = new GraceString("");
            var string1027 = new GraceString("\nParent: ");
            var opresult1029 = callmethodChecked(string1027, "++", [1], var_s);
            var opresult1031 = callmethodChecked(opresult1029, "++", [1], string1024);
            var opresult1034 = callmethodChecked(var_result, "++", [1], opresult1031);
            var_result = opresult1034;
            return GraceDone;
          };
          var call1035 = callmethodChecked(var_prelude, "while()do", [1, 1], block1020, block1022);
          setLineNumber(145);    // compilenode string
          var string1036 = new GraceString("\n");
          var opresult1039 = callmethodChecked(var_result, "++", [1], string1036);
          return opresult1039;
        };
        func1011.paramCounts = [0];
        obj806.methods["asStringWithParents"] = func1011;
        func1011.definitionLine = 138;
        func1011.definitionModule = "identifierresolution";
        var func1040 = function(argcv) {    // method asString
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
          setModuleName("identifierresolution");
          setLineNumber(148);    // compilenode string
          var string1041 = new GraceString(" ST: ");
          onSelf = true;
          var call1043 = callmethodChecked(this, "variety", [0]);
          var string1045 = new GraceString("(");
          var opresult1047 = callmethodChecked(string1045, "++", [1], call1043);
          var opresult1049 = callmethodChecked(opresult1047, "++", [1], string1041);
          var var_result = opresult1049;
          setLineNumber(149);    // compilenode block
          var block1050 = new GraceBlock(this, 149, 1);
          setLineNumber(1);    // compilenode identifier
          block1050.real = function(var_each) {
            setLineNumber(150);    // compilenode identifier
            var call1051 = callmethodChecked(var_each, "serialNumber", [0]);
            var opresult1054 = callmethodChecked(var_result, "++", [1], call1051);
            var_result = opresult1054;
            var if1055 = GraceDone;
            setLineNumber(151);    // compilenode identifier
            var call1056 = callmethodChecked(var_each, "hasParent", [0]);
            if (Grace_isTrue(call1056)) {
              var string1057 = new GraceString("\u279e");
              var opresult1060 = callmethodChecked(var_result, "++", [1], string1057);
              var_result = opresult1060;
              if1055 = GraceDone;
            }
            return if1055;
          };
          onSelf = true;
          var call1061 = callmethodChecked(this, "withSurroundingScopesDo", [1], block1050);
          setLineNumber(153);    // compilenode string
          var string1062 = new GraceString("):\n    ");
          var opresult1065 = callmethodChecked(var_result, "++", [1], string1062);
          var_result = opresult1065;
          setLineNumber(154);    // compilenode block
          var block1066 = new GraceBlock(this, 154, 1);
          setLineNumber(1);    // compilenode identifier
          block1066.real = function(var_each) {
            setLineNumber(155);    // compilenode string
            var string1067 = new GraceString(") ");
            var call1069 = callmethodChecked(var_each, "key", [0]);
            onSelf = true;
            var call1070 = callmethodChecked(this, "kind", [1], call1069);
            var string1072 = new GraceString("(");
            var call1074 = callmethodChecked(var_each, "key", [0]);
            var string1076 = new GraceString(" ");
            var string1079 = new GraceString("");
            var opresult1081 = callmethodChecked(string1079, "++", [1], var_result);
            var opresult1083 = callmethodChecked(opresult1081, "++", [1], string1076);
            var opresult1085 = callmethodChecked(opresult1083, "++", [1], call1074);
            var opresult1087 = callmethodChecked(opresult1085, "++", [1], string1072);
            var opresult1089 = callmethodChecked(opresult1087, "++", [1], call1070);
            var opresult1091 = callmethodChecked(opresult1089, "++", [1], string1067);
            var_result = opresult1091;
            return GraceDone;
          };
          setLineNumber(154);    // compilenode call
          onSelf = true;
          var call1092 = callmethodChecked(this, "elements", [0]);
          var call1093 = callmethodChecked(call1092, "asList", [0]);
          var call1094 = callmethodChecked(call1093, "sortBy", [1], var_keyOrdering);
          var call1095 = callmethodChecked(call1094, "do", [1], block1066);
          setLineNumber(157);    // compilenode string
          var string1096 = new GraceString("\n");
          var opresult1099 = callmethodChecked(var_result, "++", [1], string1096);
          return opresult1099;
        };
        func1040.paramCounts = [0];
        obj806.methods["asString"] = func1040;
        func1040.definitionLine = 147;
        func1040.definitionModule = "identifierresolution";
        var func1100 = function(argcv) {    // method asDebugString
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asDebugString"));
          setModuleName("identifierresolution");
          setLineNumber(160);    // compilenode string
          var string1101 = new GraceString(")");
          onSelf = true;
          var call1103 = callmethodChecked(this, "serialNumber", [0]);
          var string1105 = new GraceString("(ST ");
          var opresult1107 = callmethodChecked(string1105, "++", [1], call1103);
          var opresult1109 = callmethodChecked(opresult1107, "++", [1], string1101);
          return opresult1109;
        };
        func1100.paramCounts = [0];
        obj806.methods["asDebugString"] = func1100;
        func1100.definitionLine = 160;
        func1100.definitionModule = "identifierresolution";
        var func1110 = function(argcv) {    // method elementScopesAsString
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for elementScopesAsString"));
          setModuleName("identifierresolution");
          setLineNumber(163);    // compilenode call
          var call1111 = callmethodChecked(var_prelude, "emptySet", [0]);
          var var_referencedScopes = call1111;
          setLineNumber(164);    // compilenode string
          var string1112 = new GraceString("\n    [elementScopes:");
          var var_result = string1112;
          setLineNumber(165);    // compilenode block
          var block1113 = new GraceBlock(this, 165, 1);
          setLineNumber(1);    // compilenode identifier
          block1113.real = function(var_each) {
            setLineNumber(166);    // compilenode string
            var string1114 = new GraceString("");
            var call1116 = callmethodChecked(var_each, "value", [0]);
            var call1117 = callmethodChecked(call1116, "asDebugString", [0]);
            var string1119 = new GraceString("\u279e");
            var call1121 = callmethodChecked(var_each, "key", [0]);
            var string1123 = new GraceString(" ");
            var string1126 = new GraceString("");
            var opresult1128 = callmethodChecked(string1126, "++", [1], var_result);
            var opresult1130 = callmethodChecked(opresult1128, "++", [1], string1123);
            var opresult1132 = callmethodChecked(opresult1130, "++", [1], call1121);
            var opresult1134 = callmethodChecked(opresult1132, "++", [1], string1119);
            var opresult1136 = callmethodChecked(opresult1134, "++", [1], call1117);
            var opresult1138 = callmethodChecked(opresult1136, "++", [1], string1114);
            var_result = opresult1138;
            setLineNumber(167);    // compilenode identifier
            var call1139 = callmethodChecked(var_each, "value", [0]);
            var call1140 = callmethodChecked(var_referencedScopes, "add", [1], call1139);
            return call1140;
          };
          setLineNumber(165);    // compilenode call
          onSelf = true;
          var call1141 = callmethodChecked(this, "elementScopes", [0]);
          var call1142 = callmethodChecked(call1141, "asList", [0]);
          var call1143 = callmethodChecked(call1142, "sortBy", [1], var_keyOrdering);
          var call1144 = callmethodChecked(call1143, "do", [1], block1113);
          setLineNumber(169);    // compilenode string
          var string1145 = new GraceString("]\n____________\n");
          var opresult1148 = callmethodChecked(var_result, "++", [1], string1145);
          var_result = opresult1148;
          setLineNumber(172);    // compilenode block
          var block1149 = new GraceBlock(this, 172, 1);
          setLineNumber(1);    // compilenode identifier
          block1149.real = function(var_each) {
            setLineNumber(172);    // compilenode identifier
            var call1150 = callmethodChecked(var_each, "asString", [0]);
            var opresult1153 = callmethodChecked(var_result, "++", [1], call1150);
            var_result = opresult1153;
            return GraceDone;
          };
          setLineNumber(171);    // compilenode block
          var block1154 = new GraceBlock(this, 171, 2);
          setLineNumber(1);    // compilenode identifier
          block1154.real = function(var_a, var_b) {
            setLineNumber(171);    // compilenode identifier
            var call1155 = callmethodChecked(var_b, "serialNumber", [0]);
            var call1156 = callmethodChecked(var_a, "serialNumber", [0]);
            var call1157 = callmethodChecked(call1156, "compare", [1], call1155);
            return call1157;
          };
          setLineNumber(170);    // compilenode identifier
          var call1158 = callmethodChecked(var_referencedScopes, "asList", [0]);
          var call1159 = callmethodChecked(call1158, "sortBy", [1], block1154);
          var call1160 = callmethodChecked(call1159, "do", [1], block1149);
          setLineNumber(173);    // compilenode string
          var string1161 = new GraceString("____________\n");
          var opresult1164 = callmethodChecked(var_result, "++", [1], string1161);
          return opresult1164;
        };
        func1110.paramCounts = [0];
        obj806.methods["elementScopesAsString"] = func1110;
        func1110.definitionLine = 162;
        func1110.definitionModule = "identifierresolution";
        var func1165 = function(argcv) {    // method hasDefinitionInNest(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_nm = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for hasDefinitionInNest(1)"));
          setModuleName("identifierresolution");
          setLineNumber(176);    // compilenode block
          var block1166 = new GraceBlock(this, 176, 1);
          setLineNumber(1);    // compilenode identifier
          block1166.real = function(var_s) {
            var if1167 = GraceDone;
            setLineNumber(177);    // compilenode identifier
            var call1168 = callmethodChecked(var_s, "contains", [1], var_nm);
            if (Grace_isTrue(call1168)) {
              setLineNumber(178);    // compilenode identifier
              throw new ReturnException(GraceTrue, returnTarget);
            }
            return if1167;
          };
          onSelf = true;
          var call1169 = callmethodChecked(this, "withSurroundingScopesDo", [1], block1166);
          setLineNumber(181);    // compilenode identifier
          return GraceFalse;
        };
        func1165.paramCounts = [1];
        obj806.methods["hasDefinitionInNest"] = func1165;
        func1165.definitionLine = 175;
        func1165.definitionModule = "identifierresolution";
        var func1170 = function(argcv) {    // method kindInNest(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_nm = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for kindInNest(1)"));
          setModuleName("identifierresolution");
          setLineNumber(184);    // compilenode block
          var block1171 = new GraceBlock(this, 184, 1);
          setLineNumber(1);    // compilenode identifier
          block1171.real = function(var_s) {
            var if1172 = GraceDone;
            setLineNumber(185);    // compilenode identifier
            var call1173 = callmethodChecked(var_s, "contains", [1], var_nm);
            if (Grace_isTrue(call1173)) {
              setLineNumber(186);    // compilenode identifier
              var call1174 = callmethodChecked(var_s, "kind", [1], var_nm);
              var var_kd = call1174;
              var if1175 = GraceDone;
              setLineNumber(187);    // compilenode identifier
              var call1176 = callmethodChecked(var_kd, "fromParent", [0]);
              if (Grace_isTrue(call1176)) {
                setLineNumber(188);    // compilenode identifier
                var call1177 = callmethodChecked(var_k, "methdec", [0]);
                throw new ReturnException(call1177, returnTarget);
              } else {
                setLineNumber(190);    // compilenode identifier
                throw new ReturnException(var_kd, returnTarget);
              }
              if1172 = if1175;
            }
            return if1172;
          };
          onSelf = true;
          var call1178 = callmethodChecked(this, "withSurroundingScopesDo", [1], block1171);
          setLineNumber(194);    // compilenode identifier
          var call1179 = callmethodChecked(var_k, "undefined", [0]);
          return call1179;
        };
        func1170.paramCounts = [1];
        obj806.methods["kindInNest"] = func1170;
        func1170.definitionLine = 183;
        func1170.definitionModule = "identifierresolution";
        var func1180 = function(argcv) {    // method thatDefines(1)ifNone(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_name = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for thatDefines (arg list 1) of thatDefines(1)ifNone(1)"));
          var var_action = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ifNone (arg list 2) of thatDefines(1)ifNone(1)"));
          setModuleName("identifierresolution");
          setLineNumber(197);    // compilenode block
          var block1181 = new GraceBlock(this, 197, 1);
          setLineNumber(1);    // compilenode identifier
          block1181.real = function(var_s) {
            var if1182 = GraceDone;
            setLineNumber(198);    // compilenode identifier
            var call1183 = callmethodChecked(var_s, "contains", [1], var_name);
            if (Grace_isTrue(call1183)) {
              throw new ReturnException(var_s, returnTarget);
            }
            return if1182;
          };
          onSelf = true;
          var call1184 = callmethodChecked(this, "withSurroundingScopesDo", [1], block1181);
          setLineNumber(200);    // compilenode identifier
          var call1185 = callmethodChecked(var_action, "apply", [0]);
          return call1185;
        };
        func1180.paramCounts = [1, 1];
        obj806.methods["thatDefines()ifNone"] = func1180;
        func1180.definitionLine = 196;
        func1180.definitionModule = "identifierresolution";
        var func1186 = function(argcv) {    // method thatDefines(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_name = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for thatDefines(1)"));
          setModuleName("identifierresolution");
          setLineNumber(203);    // compilenode block
          var block1187 = new GraceBlock(this, 203, 1);
          setLineNumber(1);    // compilenode identifier
          block1187.real = function(var_s) {
            var if1188 = GraceDone;
            setLineNumber(204);    // compilenode identifier
            var call1189 = callmethodChecked(var_s, "contains", [1], var_name);
            if (Grace_isTrue(call1189)) {
              throw new ReturnException(var_s, returnTarget);
            }
            return if1188;
          };
          onSelf = true;
          var call1190 = callmethodChecked(this, "withSurroundingScopesDo", [1], block1187);
          setLineNumber(206);    // compilenode call
          onSelf = true;
          var call1191 = callmethodChecked(this, "asStringWithParents", [0]);
          var call1192 = Grace_print(call1191);
          setLineNumber(207);    // compilenode string
          var string1193 = new GraceString("");
          var string1196 = new GraceString("no scope defines ");
          var opresult1198 = callmethodChecked(string1196, "++", [1], var_name);
          var opresult1200 = callmethodChecked(opresult1198, "++", [1], string1193);
          var call1201 = callmethodChecked(var_prelude, "ProgrammingError", [0]);
          var call1202 = callmethodChecked(call1201, "raise", [1], opresult1200);
          return call1202;
        };
        func1186.paramCounts = [1];
        obj806.methods["thatDefines"] = func1186;
        func1186.definitionLine = 202;
        func1186.definitionModule = "identifierresolution";
        var func1203 = function(argcv) {    // method isInSameObjectAs(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_enclosingScope = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isInSameObjectAs(1)"));
          setModuleName("identifierresolution");
          var if1204 = GraceDone;
          setLineNumber(210);    // compilenode identifier
          var opresult1207 = callmethodChecked(this, "==", [1], var_enclosingScope);
          if (Grace_isTrue(opresult1207)) {
            return GraceTrue;
          }
          var if1208 = GraceDone;
          setLineNumber(211);    // compilenode call
          onSelf = true;
          var call1209 = callmethodChecked(this, "parent", [0]);
          var call1210 = callmethodChecked(call1209, "isObjectScope", [0]);
          if (Grace_isTrue(call1210)) {
            return GraceFalse;
          }
          setLineNumber(212);    // compilenode call
          onSelf = true;
          var call1211 = callmethodChecked(this, "parent", [0]);
          var call1212 = callmethodChecked(call1211, "isInSameObjectAs", [1], var_enclosingScope);
          return call1212;
        };
        func1203.paramCounts = [1];
        obj806.methods["isInSameObjectAs"] = func1203;
        func1203.definitionLine = 209;
        func1203.definitionModule = "identifierresolution";
        var func1213 = function(argcv) {    // method isObjectScope
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isObjectScope"));
          setModuleName("identifierresolution");
          var if1214 = GraceDone;
          setLineNumber(215);    // compilenode string
          var string1215 = new GraceString("object");
          onSelf = true;
          var call1217 = callmethodChecked(this, "variety", [0]);
          var opresult1219 = callmethodChecked(call1217, "==", [1], string1215);
          if (Grace_isTrue(opresult1219)) {
            return GraceTrue;
          }
          var if1220 = GraceDone;
          setLineNumber(216);    // compilenode string
          var string1221 = new GraceString("module");
          onSelf = true;
          var call1223 = callmethodChecked(this, "variety", [0]);
          var opresult1225 = callmethodChecked(call1223, "==", [1], string1221);
          if (Grace_isTrue(opresult1225)) {
            return GraceTrue;
          }
          var if1226 = GraceDone;
          setLineNumber(217);    // compilenode string
          var string1227 = new GraceString("dialect");
          onSelf = true;
          var call1229 = callmethodChecked(this, "variety", [0]);
          var opresult1231 = callmethodChecked(call1229, "==", [1], string1227);
          if (Grace_isTrue(opresult1231)) {
            return GraceTrue;
          }
          var if1232 = GraceDone;
          setLineNumber(218);    // compilenode string
          var string1233 = new GraceString("class");
          onSelf = true;
          var call1235 = callmethodChecked(this, "variety", [0]);
          var opresult1237 = callmethodChecked(call1235, "==", [1], string1233);
          if (Grace_isTrue(opresult1237)) {
            return GraceTrue;
          }
          var if1238 = GraceDone;
          setLineNumber(219);    // compilenode string
          var string1239 = new GraceString("built-in");
          onSelf = true;
          var call1241 = callmethodChecked(this, "variety", [0]);
          var opresult1243 = callmethodChecked(call1241, "==", [1], string1239);
          if (Grace_isTrue(opresult1243)) {
            return GraceTrue;
          }
          setLineNumber(220);    // compilenode identifier
          return GraceFalse;
        };
        func1213.paramCounts = [0];
        obj806.methods["isObjectScope"] = func1213;
        func1213.definitionLine = 214;
        func1213.definitionModule = "identifierresolution";
        var func1244 = function(argcv) {    // method isMethodScope
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isMethodScope"));
          setModuleName("identifierresolution");
          setLineNumber(223);    // compilenode string
          var string1245 = new GraceString("method");
          onSelf = true;
          var call1247 = callmethodChecked(this, "variety", [0]);
          var opresult1249 = callmethodChecked(call1247, "==", [1], string1245);
          return opresult1249;
        };
        func1244.paramCounts = [0];
        obj806.methods["isMethodScope"] = func1244;
        func1244.definitionLine = 222;
        func1244.definitionModule = "identifierresolution";
        var func1250 = function(argcv) {    // method resolveOuterMethod(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_name = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for resolveOuterMethod(1)"));
          setModuleName("identifierresolution");
          setLineNumber(228);    // compilenode string
          var string1251 = new GraceString("self");
          var call1252 = callmethodChecked(var_ast, "identifierNode", [0]);
          var call1253 = callmethodChecked(call1252, "new()scope", [2, 1], string1251, GraceFalse, this);
          var var_mem = call1253;
          setLineNumber(229);    // compilenode block
          var block1254 = new GraceBlock(this, 229, 1);
          setLineNumber(1);    // compilenode identifier
          block1254.real = function(var_s) {
            var if1255 = GraceDone;
            setLineNumber(230);    // compilenode identifier
            var call1256 = callmethodChecked(var_s, "contains", [1], var_name);
            if (Grace_isTrue(call1256)) {
              var if1257 = GraceDone;
              setLineNumber(231);    // compilenode string
              var string1258 = new GraceString("dialect");
              var call1260 = callmethodChecked(var_s, "variety", [0]);
              var opresult1262 = callmethodChecked(call1260, "==", [1], string1258);
              if (Grace_isTrue(opresult1262)) {
                setLineNumber(233);    // compilenode string
                var string1263 = new GraceString("prelude");
                var call1264 = callmethodChecked(var_ast, "identifierNode", [0]);
                var call1265 = callmethodChecked(call1264, "new()scope", [2, 1], string1263, GraceFalse, this);
                setLineNumber(232);    // compilenode identifier
                var call1266 = callmethodChecked(var_ast, "memberNode", [0]);
                var call1267 = callmethodChecked(call1266, "new()scope", [2, 1], var_name, call1265, this);
                throw new ReturnException(call1267, returnTarget);
              }
              setLineNumber(235);    // compilenode identifier
              var call1268 = callmethodChecked(var_ast, "memberNode", [0]);
              var call1269 = callmethodChecked(call1268, "new()scope", [2, 1], var_name, var_mem, this);
              throw new ReturnException(call1269, returnTarget);
            }
            setLineNumber(237);    // compilenode identifier
            var call1271 = callmethodChecked(var_s, "variety", [0]);
            var cases1270 = [];
            setLineNumber(238);    // compilenode block
            var block1272 = new GraceBlock(this, 238, 0);
            var string1273 = new GraceString("object");
            block1272.pattern = string1273;
            block1272.real = function() {
              setLineNumber(239);    // compilenode string
              var string1274 = new GraceString("outer");
              var call1275 = callmethodChecked(var_ast, "memberNode", [0]);
              var call1276 = callmethodChecked(call1275, "new()scope", [2, 1], string1274, var_mem, this);
              var_mem = call1276;
              return GraceDone;
            };
            cases1270.push(block1272);
            setLineNumber(240);    // compilenode block
            var block1277 = new GraceBlock(this, 240, 0);
            var string1278 = new GraceString("class");
            block1277.pattern = string1278;
            block1277.real = function() {
              setLineNumber(241);    // compilenode string
              var string1279 = new GraceString("outer");
              var call1280 = callmethodChecked(var_ast, "memberNode", [0]);
              var call1281 = callmethodChecked(call1280, "new()scope", [2, 1], string1279, var_mem, this);
              var_mem = call1281;
              setLineNumber(242);    // compilenode string
              var string1282 = new GraceString("outer");
              var call1283 = callmethodChecked(var_ast, "memberNode", [0]);
              var call1284 = callmethodChecked(call1283, "new()scope", [2, 1], string1282, var_mem, this);
              var_mem = call1284;
              return GraceDone;
            };
            cases1270.push(block1277);
            setLineNumber(243);    // compilenode block
            var block1285 = new GraceBlock(this, 243, 1);
            setLineNumber(1);    // compilenode identifier
            block1285.real = function(var___95____95__0) {
              return GraceDone;
            };
            cases1270.push(block1285);
            setLineNumber(237);    // compilematchcase
            var matchres1270 = matchCase(call1271,cases1270,false);
            setModuleName("identifierresolution");
            return matchres1270;
          };
          onSelf = true;
          var call1286 = callmethodChecked(this, "withSurroundingScopesDo", [1], block1254);
          setLineNumber(246);    // compilenode identifier
          var call1287 = callmethodChecked(var_ast, "identifierNode", [0]);
          var call1288 = callmethodChecked(call1287, "new()scope", [2, 1], var_name, GraceFalse, this);
          return call1288;
        };
        func1250.paramCounts = [1];
        obj806.methods["resolveOuterMethod"] = func1250;
        func1250.definitionLine = 225;
        func1250.definitionModule = "identifierresolution";
        var func1289 = function(argcv) {    // method scopeReferencedBy(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_nd = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for scopeReferencedBy(1)"));
          setModuleName("identifierresolution");
          var if1290 = GraceDone;
          setLineNumber(254);    // compilenode string
          var string1291 = new GraceString("identifier");
          var call1293 = callmethodChecked(var_nd, "kind", [0]);
          var opresult1295 = callmethodChecked(call1293, "==", [1], string1291);
          if (Grace_isTrue(opresult1295)) {
            setLineNumber(255);    // compilenode identifier
            var call1296 = callmethodChecked(var_nd, "nameString", [0]);
            var var_sought = call1296;
            setLineNumber(256);    // compilenode block
            var block1297 = new GraceBlock(this, 256, 1);
            setLineNumber(1);    // compilenode identifier
            block1297.real = function(var_s) {
              var if1298 = GraceDone;
              setLineNumber(257);    // compilenode identifier
              var call1299 = callmethodChecked(var_s, "contains", [1], var_sought);
              if (Grace_isTrue(call1299)) {
                setLineNumber(258);    // compilenode identifier
                var call1300 = callmethodChecked(var_s, "getScope", [1], var_sought);
                throw new ReturnException(call1300, returnTarget);
              }
              return if1298;
            };
            onSelf = true;
            var call1301 = callmethodChecked(this, "withSurroundingScopesDo", [1], block1297);
            setLineNumber(261);    // compilenode string
            var string1302 = new GraceString("");
            var string1305 = new GraceString("no method ");
            var opresult1307 = callmethodChecked(string1305, "++", [1], var_sought);
            var opresult1309 = callmethodChecked(opresult1307, "++", [1], string1302);
            setLineNumber(262);    // compilenode identifier
            var call1310 = callmethodChecked(var_nd, "line", [0]);
            var call1311 = callmethodChecked(var_nd, "linePos", [0]);
            var call1313 = callmethodChecked(var_sought, "size", [0]);
            var call1315 = callmethodChecked(var_nd, "linePos", [0]);
            var opresult1317 = callmethodChecked(call1315, "+", [1], call1313);
            var diff1319 = callmethodChecked(opresult1317, "-", [1], new GraceNum(1));
            setLineNumber(261);    // compilenode identifier
            var call1320 = callmethodChecked(var_errormessages, "syntaxError()atRange", [1, 3], opresult1309, call1310, call1311, diff1319);
            if1290 = call1320;
          } else {
            var if1321 = GraceDone;
            setLineNumber(263);    // compilenode string
            var string1322 = new GraceString("member");
            var call1324 = callmethodChecked(var_nd, "kind", [0]);
            var opresult1326 = callmethodChecked(call1324, "==", [1], string1322);
            if (Grace_isTrue(opresult1326)) {
              setLineNumber(264);    // compilenode identifier
              var call1327 = callmethodChecked(var_nd, "in", [0]);
              onSelf = true;
              var call1328 = callmethodChecked(this, "scopeReferencedBy", [1], call1327);
              var var_receiverScope = call1328;
              var if1329 = GraceDone;
              setLineNumber(266);    // compilenode string
              var string1330 = new GraceString("outer");
              var call1332 = callmethodChecked(var_nd, "value", [0]);
              var opresult1334 = callmethodChecked(call1332, "==", [1], string1330);
              if (Grace_isTrue(opresult1334)) {
                setLineNumber(267);    // compilenode identifier
                var call1335 = callmethodChecked(var_receiverScope, "parent", [0]);
                return call1335;
              }
              setLineNumber(269);    // compilenode identifier
              var call1336 = callmethodChecked(var_nd, "asIdentifier", [0]);
              var call1337 = callmethodChecked(var_receiverScope, "scopeReferencedBy", [1], call1336);
              return call1337;
            } else {
              var if1338 = GraceDone;
              setLineNumber(270);    // compilenode string
              var string1339 = new GraceString("call");
              var call1341 = callmethodChecked(var_nd, "kind", [0]);
              var opresult1343 = callmethodChecked(call1341, "==", [1], string1339);
              if (Grace_isTrue(opresult1343)) {
                setLineNumber(271);    // compilenode identifier
                var call1344 = callmethodChecked(var_nd, "value", [0]);
                onSelf = true;
                var call1345 = callmethodChecked(this, "scopeReferencedBy", [1], call1344);
                return call1345;
              } else {
                var if1346 = GraceDone;
                setLineNumber(272);    // compilenode string
                var string1347 = new GraceString("op");
                var call1349 = callmethodChecked(var_nd, "kind", [0]);
                var opresult1351 = callmethodChecked(call1349, "==", [1], string1347);
                if (Grace_isTrue(opresult1351)) {
                  setLineNumber(273);    // compilenode identifier
                  var call1352 = callmethodChecked(var_nd, "left", [0]);
                  onSelf = true;
                  var call1353 = callmethodChecked(this, "scopeReferencedBy", [1], call1352);
                  var var_receiverScope = call1353;
                  setLineNumber(274);    // compilenode identifier
                  var call1354 = callmethodChecked(var_nd, "asIdentifier", [0]);
                  var call1355 = callmethodChecked(var_receiverScope, "scopeReferencedBy", [1], call1354);
                  return call1355;
                }
                if1338 = if1346;
              }
              if1321 = if1338;
            }
            if1290 = if1321;
          }
          setLineNumber(277);    // compilenode identifier
          var call1356 = callmethodChecked(var_nd, "pretty", [1], new GraceNum(0));
          setLineNumber(276);    // compilenode string
          var string1358 = new GraceString(" is not a Call, Member or Identifier\n");
          var call1360 = callmethodChecked(var_nd, "value", [0]);
          var string1362 = new GraceString("");
          var opresult1364 = callmethodChecked(string1362, "++", [1], call1360);
          var opresult1366 = callmethodChecked(opresult1364, "++", [1], string1358);
          var opresult1368 = callmethodChecked(opresult1366, "++", [1], call1356);
          var call1369 = callmethodChecked(var_prelude, "ProgrammingError", [0]);
          var call1370 = callmethodChecked(call1369, "raise", [1], opresult1368);
          return call1370;
        };
        func1289.paramCounts = [1];
        obj806.methods["scopeReferencedBy"] = func1289;
        func1289.definitionLine = 248;
        func1289.definitionModule = "identifierresolution";
        var func1371 = function(argcv) {    // method enclosingObjectScope
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for enclosingObjectScope"));
          setModuleName("identifierresolution");
          setLineNumber(282);    // compilenode block
          var block1372 = new GraceBlock(this, 282, 1);
          setLineNumber(1);    // compilenode identifier
          block1372.real = function(var_s) {
            var if1373 = GraceDone;
            setLineNumber(283);    // compilenode identifier
            var call1374 = callmethodChecked(var_s, "isObjectScope", [0]);
            if (Grace_isTrue(call1374)) {
              throw new ReturnException(var_s, returnTarget);
            }
            return if1373;
          };
          onSelf = true;
          var call1375 = callmethodChecked(this, "withSurroundingScopesDo", [1], block1372);
          setLineNumber(285);    // compilenode string
          var string1376 = new GraceString("no object scope found!");
          var call1377 = callmethodChecked(var_prelude, "ProgrammingError", [1], string1376);
          return call1377;
        };
        func1371.paramCounts = [0];
        obj806.methods["enclosingObjectScope"] = func1371;
        func1371.definitionLine = 279;
        func1371.definitionModule = "identifierresolution";
        var func1378 = function(argcv) {    // method inSameContextAs(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_encScope = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for inSameContextAs(1)"));
          setModuleName("identifierresolution");
          var if1379 = GraceDone;
          setLineNumber(292);    // compilenode identifier
          var call1380 = callmethodChecked(var_encScope, "isObjectScope", [0]);
          if (Grace_isTrue(call1380)) {
            return GraceFalse;
          }
          setLineNumber(293);    // compilenode block
          var block1381 = new GraceBlock(this, 293, 1);
          setLineNumber(1);    // compilenode identifier
          block1381.real = function(var_s) {
            var if1382 = GraceDone;
            setLineNumber(294);    // compilenode identifier
            var opresult1385 = callmethodChecked(var_s, "==", [1], var_encScope);
            if (Grace_isTrue(opresult1385)) {
              throw new ReturnException(GraceTrue, returnTarget);
            }
            var if1386 = GraceDone;
            setLineNumber(295);    // compilenode identifier
            var call1387 = callmethodChecked(var_s, "isObjectScope", [0]);
            if (Grace_isTrue(call1387)) {
              throw new ReturnException(GraceFalse, returnTarget);
            }
            var if1388 = GraceDone;
            setLineNumber(296);    // compilenode identifier
            var call1389 = callmethodChecked(var_s, "isMethodScope", [0]);
            if (Grace_isTrue(call1389)) {
              throw new ReturnException(GraceFalse, returnTarget);
            }
            return if1388;
          };
          onSelf = true;
          var call1390 = callmethodChecked(this, "withSurroundingScopesDo", [1], block1381);
          setLineNumber(298);    // compilenode string
          var string1391 = new GraceString("");
          var string1394 = new GraceString("; encScope = ");
          var string1397 = new GraceString("self = ");
          var opresult1399 = callmethodChecked(string1397, "++", [1], this);
          var opresult1401 = callmethodChecked(opresult1399, "++", [1], string1394);
          var opresult1403 = callmethodChecked(opresult1401, "++", [1], var_encScope);
          var opresult1405 = callmethodChecked(opresult1403, "++", [1], string1391);
          var call1406 = callmethodChecked(var_prelude, "ProgrammingError", [0]);
          var call1407 = callmethodChecked(call1406, "raise", [1], opresult1405);
          return call1407;
        };
        func1378.paramCounts = [1];
        obj806.methods["inSameContextAs"] = func1378;
        func1378.definitionLine = 289;
        func1378.definitionModule = "identifierresolution";
        var func1408 = function(argcv) {    // method isUniversal
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isUniversal"));
          setModuleName("identifierresolution");
          // isUniversal is a simple accessor - elide try ... catch
          setLineNumber(300);    // compilenode identifier
          return GraceFalse;
        };
        func1408.paramCounts = [0];
        obj806.methods["isUniversal"] = func1408;
        func1408.definitionLine = 300;
        func1408.definitionModule = "identifierresolution";
        var func1409 = function(argcv) {    // method checkShadowing(1)as(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_ident = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for checkShadowing (arg list 1) of checkShadowing(1)as(1)"));
          var var_newKind = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for as (arg list 2) of checkShadowing(1)as(1)"));
          setModuleName("identifierresolution");
          setLineNumber(302);    // compilenode identifier
          var call1410 = callmethodChecked(var_ident, "nameString", [0]);
          var var_name = call1410;
          setLineNumber(303);    // compilenode block
          var block1411 = new GraceBlock(this, 303, 0);
          block1411.real = function() {
            setLineNumber(305);    // compilenode identifier
            throw new ReturnException(var_done, returnTarget);
            return undefined;
          };
          onSelf = true;
          var call1412 = callmethodChecked(this, "thatDefines()ifNone", [1, 1], var_name, block1411);
          var var_priorScope = call1412;
          var if1413 = GraceDone;
          setLineNumber(307);    // compilenode identifier
          var opresult1416 = callmethodChecked(var_priorScope, "==", [1], this);
          if (Grace_isTrue(opresult1416)) {
            setLineNumber(308);    // compilenode string
            var string1417 = new GraceString("this");
            if1413 = string1417;
          } else {
            setLineNumber(310);    // compilenode string
            var string1418 = new GraceString("");
            var call1420 = callmethodChecked(var_priorScope, "variety", [0]);
            var string1422 = new GraceString("an enclosing ");
            var opresult1424 = callmethodChecked(string1422, "++", [1], call1420);
            var opresult1426 = callmethodChecked(opresult1424, "++", [1], string1418);
            if1413 = opresult1426;
          }
          var var_description = if1413;
          setLineNumber(312);    // compilenode identifier
          var call1427 = callmethodChecked(var_priorScope, "kind", [1], var_name);
          var var_priorKind = call1427;
          var if1428 = GraceDone;
          setLineNumber(313);    // compilenode block
          var block1429 = new GraceBlock(this, 313, 0);
          block1429.real = function() {
            onSelf = true;
            var call1430 = callmethodChecked(this, "isObjectScope", [0]);
            return call1430;
          };
          var call1432 = callmethodChecked(var_priorScope, "isObjectScope", [0]);
          var opresult1434 = callmethodChecked(call1432, "&&", [1], block1429);
          if (Grace_isTrue(opresult1434)) {
            setLineNumber(315);    // compilenode identifier
            return var_done;
          }
          setLineNumber(317);    // compilenode string
          var string1435 = new GraceString("");
          var var_more = string1435;
          var if1436 = GraceDone;
          setLineNumber(318);    // compilenode identifier
          var call1437 = callmethodChecked(var_priorScope, "elementLines", [0]);
          var call1438 = callmethodChecked(call1437, "contains", [1], var_name);
          if (Grace_isTrue(call1438)) {
            setLineNumber(319);    // compilenode identifier
            var call1439 = callmethodChecked(var_priorScope, "elementLines", [0]);
            var call1440 = callmethodChecked(call1439, "get", [1], var_name);
            var var_ln = call1440;
            var if1441 = GraceDone;
            setLineNumber(320);    // compilenode identifier
            var opresult1444 = callmethodChecked(var_ln, ">", [1], new GraceNum(0));
            if (Grace_isTrue(opresult1444)) {
              setLineNumber(321);    // compilenode string
              var string1445 = new GraceString("");
              var call1447 = callmethodChecked(var_priorScope, "elementLines", [0]);
              var call1448 = callmethodChecked(call1447, "get", [1], var_name);
              var string1450 = new GraceString(" on line ");
              var opresult1452 = callmethodChecked(string1450, "++", [1], call1448);
              var opresult1454 = callmethodChecked(opresult1452, "++", [1], string1445);
              var_more = opresult1454;
              if1441 = GraceDone;
            }
            if1436 = if1441;
          }
          var if1455 = GraceDone;
          setLineNumber(324);    // compilenode identifier
          var call1456 = callmethodChecked(var_k, "vardec", [0]);
          var opresult1459 = callmethodChecked(var_newKind, "==", [1], call1456);
          if (Grace_isTrue(opresult1459)) {
            setLineNumber(325);    // compilenode array
            var array1460 = new PrimitiveGraceList([]);
            var var_suggs = array1460;
            setLineNumber(326);    // compilenode identifier
            var call1461 = callmethodChecked(var_errormessages, "suggestion", [0]);
            var call1462 = callmethodChecked(call1461, "new", [0]);
            var var_sugg = call1462;
            var if1463 = GraceDone;
            setLineNumber(327);    // compilenode string
            var string1464 = new GraceString("=");
            var string1465 = new GraceString(" :=");
            var string1468 = new GraceString("");
            var opresult1470 = callmethodChecked(string1468, "++", [1], var_name);
            var opresult1472 = callmethodChecked(opresult1470, "++", [1], string1465);
            setLineNumber(328);    // compilenode identifier
            var call1473 = callmethodChecked(var_ident, "line", [0]);
            setLineNumber(327);    // compilenode identifier
            var call1474 = callmethodChecked(var_sugg, "replaceUntil()with()onLine", [1, 1, 1], string1464, opresult1472, call1473);
            if (Grace_isTrue(call1474)) {
              setLineNumber(330);    // compilenode identifier
              var call1475 = callmethodChecked(var_suggs, "push", [1], var_sugg);
              if1463 = call1475;
            }
            var if1476 = GraceDone;
            setLineNumber(332);    // compilenode identifier
            var call1477 = callmethodChecked(var_k, "vardec", [0]);
            var opresult1480 = callmethodChecked(var_priorKind, "==", [1], call1477);
            if (Grace_isTrue(opresult1480)) {
              setLineNumber(333);    // compilenode string
              var string1481 = new GraceString(". To assign to the existing variable, remove 'var'");
              var opresult1484 = callmethodChecked(var_more, "++", [1], string1481);
              var_more = opresult1484;
              if1476 = GraceDone;
            }
            setLineNumber(337);    // compilenode string
            var string1485 = new GraceString(".");
            var string1488 = new GraceString(" scope");
            var string1491 = new GraceString("");
            var opresult1493 = callmethodChecked(string1491, "++", [1], var_description);
            var opresult1495 = callmethodChecked(opresult1493, "++", [1], string1488);
            var opresult1497 = callmethodChecked(opresult1495, "++", [1], var_more);
            var opresult1499 = callmethodChecked(opresult1497, "++", [1], string1485);
            setLineNumber(336);    // compilenode string
            var string1501 = new GraceString("redeclared because it is already declared in ");
            setLineNumber(335);    // compilenode string
            var string1503 = new GraceString("' cannot be ");
            var string1506 = new GraceString("'");
            var opresult1508 = callmethodChecked(string1506, "++", [1], var_name);
            var opresult1510 = callmethodChecked(opresult1508, "++", [1], string1503);
            var opresult1512 = callmethodChecked(opresult1510, "++", [1], string1501);
            var opresult1514 = callmethodChecked(opresult1512, "++", [1], opresult1499);
            setLineNumber(338);    // compilenode identifier
            var call1515 = callmethodChecked(var_ident, "line", [0]);
            var call1516 = callmethodChecked(var_ident, "linePos", [0]);
            var call1518 = callmethodChecked(var_name, "size", [0]);
            var call1520 = callmethodChecked(var_ident, "linePos", [0]);
            var opresult1522 = callmethodChecked(call1520, "+", [1], call1518);
            var diff1524 = callmethodChecked(opresult1522, "-", [1], new GraceNum(1));
            setLineNumber(335);    // compilenode identifier
            var call1525 = callmethodChecked(var_errormessages, "syntaxError()atRange()withSuggestions", [1, 3, 1], opresult1514, call1515, call1516, diff1524, var_suggs);
            if1455 = call1525;
          } else {
            setLineNumber(343);    // compilenode string
            var string1526 = new GraceString(". Use a different name.");
            var string1529 = new GraceString(" scope");
            var string1532 = new GraceString("");
            var opresult1534 = callmethodChecked(string1532, "++", [1], var_description);
            var opresult1536 = callmethodChecked(opresult1534, "++", [1], string1529);
            var opresult1538 = callmethodChecked(opresult1536, "++", [1], var_more);
            var opresult1540 = callmethodChecked(opresult1538, "++", [1], string1526);
            setLineNumber(342);    // compilenode string
            var string1542 = new GraceString("redeclared because it is already declared in ");
            setLineNumber(341);    // compilenode string
            var string1544 = new GraceString("' cannot be ");
            var string1547 = new GraceString("'");
            var opresult1549 = callmethodChecked(string1547, "++", [1], var_name);
            var opresult1551 = callmethodChecked(opresult1549, "++", [1], string1544);
            var opresult1553 = callmethodChecked(opresult1551, "++", [1], string1542);
            var opresult1555 = callmethodChecked(opresult1553, "++", [1], opresult1540);
            setLineNumber(344);    // compilenode identifier
            var call1556 = callmethodChecked(var_ident, "line", [0]);
            var call1557 = callmethodChecked(var_ident, "linePos", [0]);
            setLineNumber(345);    // compilenode identifier
            var call1559 = callmethodChecked(var_name, "size", [0]);
            var call1561 = callmethodChecked(var_ident, "linePos", [0]);
            var opresult1563 = callmethodChecked(call1561, "+", [1], call1559);
            var diff1565 = callmethodChecked(opresult1563, "-", [1], new GraceNum(1));
            setLineNumber(341);    // compilenode identifier
            var call1566 = callmethodChecked(var_errormessages, "syntaxError()atRange", [1, 3], opresult1555, call1556, call1557, diff1565);
            if1455 = call1566;
          }
          return if1455;
        };
        func1409.paramCounts = [1, 1];
        obj806.methods["checkShadowing()as"] = func1409;
        func1409.definitionLine = 301;
        func1409.definitionModule = "identifierresolution";
        setLineNumber(34);    // compilenode identifier
        var call1567 = callmethodChecked(var_map, "new", [0]);
        obj806.data["elements"] = call1567;
        var reader_identifierresolution_elements1568 = function() {
          return this.data["elements"];
        };
        reader_identifierresolution_elements1568.def = true;
        obj806.methods["elements"] = reader_identifierresolution_elements1568;
        setLineNumber(35);    // compilenode identifier
        var call1569 = callmethodChecked(var_map, "new", [0]);
        obj806.data["elementScopes"] = call1569;
        var reader_identifierresolution_elementScopes1570 = function() {
          return this.data["elementScopes"];
        };
        reader_identifierresolution_elementScopes1570.def = true;
        obj806.methods["elementScopes"] = reader_identifierresolution_elementScopes1570;
        setLineNumber(36);    // compilenode identifier
        var call1571 = callmethodChecked(var_map, "new", [0]);
        obj806.data["elementLines"] = call1571;
        var reader_identifierresolution_elementLines1572 = function() {
          return this.data["elementLines"];
        };
        reader_identifierresolution_elementLines1572.def = true;
        obj806.methods["elementLines"] = reader_identifierresolution_elementLines1572;
        setLineNumber(37);    // compilenode identifier
        var call1573 = callmethodChecked(var_map, "new", [0]);
        obj806.data["elementTokens"] = call1573;
        var reader_identifierresolution_elementTokens1574 = function() {
          return this.data["elementTokens"];
        };
        reader_identifierresolution_elementTokens1574.def = true;
        obj806.methods["elementTokens"] = reader_identifierresolution_elementTokens1574;
        setLineNumber(38);    // compilenode identifier
        obj806.data["parent"] = var_parent__39__;
        var reader_identifierresolution_parent1575 = function() {
          return this.data["parent"];
        };
        reader_identifierresolution_parent1575.def = true;
        obj806.methods["parent"] = reader_identifierresolution_parent1575;
        setLineNumber(39);    // compilenode identifier
        obj806.data["hasParent"] = GraceTrue;
        var reader_identifierresolution_hasParent1576 = function() {
          return this.data["hasParent"];
        };
        obj806.methods["hasParent"] = reader_identifierresolution_hasParent1576;
        obj806.data["hasParent"] = GraceTrue;
        var writer_identifierresolution_hasParent1576 = function(argcv, o) {
          this.data["hasParent"] = o;
          return GraceDone;
        };
        obj806.methods["hasParent:="] = writer_identifierresolution_hasParent1576;
        obj806.mutable = true;
        setLineNumber(40);    // compilenode identifier
        obj806.data["variety"] = var_variety__39__;
        var reader_identifierresolution_variety1577 = function() {
          return this.data["variety"];
        };
        reader_identifierresolution_variety1577.def = true;
        obj806.methods["variety"] = reader_identifierresolution_variety1577;
        setLineNumber(41);    // compilenode identifier
        var call1578 = callmethodChecked(var_ast, "nullNode", [0]);
        obj806.data["node"] = call1578;
        var reader_identifierresolution_node1579 = function() {
          return this.data["node"];
        };
        obj806.methods["node"] = reader_identifierresolution_node1579;
        obj806.data["node"] = call1578;
        var writer_identifierresolution_node1579 = function(argcv, o) {
          this.data["node"] = o;
          return GraceDone;
        };
        obj806.methods["node:="] = writer_identifierresolution_node1579;
        obj806.mutable = true;
        setLineNumber(42);    // compilenode identifier
        obj806.data["inheritedNames"] = var_undiscovered;
        var reader_identifierresolution_inheritedNames1580 = function() {
          return this.data["inheritedNames"];
        };
        obj806.methods["inheritedNames"] = reader_identifierresolution_inheritedNames1580;
        obj806.data["inheritedNames"] = var_undiscovered;
        var writer_identifierresolution_inheritedNames1580 = function(argcv, o) {
          this.data["inheritedNames"] = o;
          return GraceDone;
        };
        obj806.methods["inheritedNames:="] = writer_identifierresolution_inheritedNames1580;
        obj806.mutable = true;
        setLineNumber(43);    // compilenode identifier
        var opresult1583 = callmethodChecked(var_stSerial, "+", [1], new GraceNum(1));
        var_stSerial = opresult1583;
        setLineNumber(44);    // compilenode identifier
        obj806.data["serialNumber"] = var_stSerial;
        var reader_identifierresolution_serialNumber1584 = function() {
          return this.data["serialNumber"];
        };
        reader_identifierresolution_serialNumber1584.def = true;
        obj806.methods["serialNumber"] = reader_identifierresolution_serialNumber1584;
        setLineNumber(45);    // compilenode call
        onSelf = true;
        var call1585 = callmethodChecked(this, "serialNumber", [0]);
        var call1586 = callmethodChecked(call1585, "hash", [0]);
        obj806.data["hash"] = call1586;
        var reader_identifierresolution_hash1587 = function() {
          return this.data["hash"];
        };
        reader_identifierresolution_hash1587.def = true;
        obj806.methods["hash"] = reader_identifierresolution_hash1587;
        var if1588 = GraceDone;
        setLineNumber(47);    // compilenode call
        onSelf = true;
        var call1589 = callmethodChecked(this, "isObjectScope", [0]);
        if (Grace_isTrue(call1589)) {
          setLineNumber(48);    // compilenode string
          var string1590 = new GraceString("self");
          var call1591 = callmethodChecked(var_k, "selfDef", [0]);
          onSelf = true;
          var call1592 = callmethodChecked(this, "addName()as", [1, 1], string1590, call1591);
          setLineNumber(49);    // compilenode string
          var string1593 = new GraceString("self");
          onSelf = true;
          var call1594 = callmethodChecked(this, "at()putScope", [1, 1], string1593, this);
          if1588 = call1594;
        }
        superDepth = origSuperDepth;
      };
      obj_init_806.apply(inheritingObject, []);
      return obj806;
      };
      this.methods["newScopeIn()kind()object"] = func805;
    setLineNumber(375);    // compilenode method
    var func1595 = function(argcv) {    // method rewritematchblockterm(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_arg = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for rewritematchblockterm(1)"));
      setModuleName("identifierresolution");
      setLineNumber(376);    // compilenode identifier
      var call1596 = callmethodChecked(var_arg, "line", [0]);
      var call1597 = callmethodChecked(var_arg, "linePos", [0]);
      var call1598 = callmethodChecked(var_util, "setPosition", [2], call1596, call1597);
      var if1599 = GraceDone;
      setLineNumber(377);    // compilenode string
      var string1600 = new GraceString("num");
      var call1602 = callmethodChecked(var_arg, "kind", [0]);
      var opresult1604 = callmethodChecked(call1602, "==", [1], string1600);
      if (Grace_isTrue(opresult1604)) {
        setLineNumber(378);    // compilenode array
        var array1606 = new PrimitiveGraceList([]);
        var array1605 = new PrimitiveGraceList([var_arg, array1606]);
        return array1605;
      }
      var if1607 = GraceDone;
      setLineNumber(380);    // compilenode string
      var string1608 = new GraceString("string");
      var call1610 = callmethodChecked(var_arg, "kind", [0]);
      var opresult1612 = callmethodChecked(call1610, "==", [1], string1608);
      if (Grace_isTrue(opresult1612)) {
        setLineNumber(381);    // compilenode array
        var array1614 = new PrimitiveGraceList([]);
        var array1613 = new PrimitiveGraceList([var_arg, array1614]);
        return array1613;
      }
      var if1615 = GraceDone;
      setLineNumber(383);    // compilenode string
      var string1616 = new GraceString("boolean");
      var call1618 = callmethodChecked(var_arg, "kind", [0]);
      var opresult1620 = callmethodChecked(call1618, "==", [1], string1616);
      if (Grace_isTrue(opresult1620)) {
        setLineNumber(384);    // compilenode array
        var array1622 = new PrimitiveGraceList([]);
        var array1621 = new PrimitiveGraceList([var_arg, array1622]);
        return array1621;
      }
      var if1623 = GraceDone;
      setLineNumber(386);    // compilenode block
      var block1624 = new GraceBlock(this, 386, 0);
      block1624.real = function() {
        setLineNumber(387);    // compilenode string
        var string1625 = new GraceString("prefix");
        setLineNumber(386);    // compilenode identifier
        var call1627 = callmethodChecked(var_arg, "value", [0]);
        var call1628 = callmethodChecked(call1627, "value", [0]);
        var call1629 = callmethodChecked(call1628, "substringFrom()to", [1, 1], new GraceNum(1), new GraceNum(6));
        var opresult1631 = callmethodChecked(call1629, "==", [1], string1625);
        return opresult1631;
      };
      var string1633 = new GraceString("call");
      var call1635 = callmethodChecked(var_arg, "kind", [0]);
      var opresult1637 = callmethodChecked(call1635, "==", [1], string1633);
      var opresult1639 = callmethodChecked(opresult1637, "&&", [1], block1624);
      if (Grace_isTrue(opresult1639)) {
        setLineNumber(388);    // compilenode array
        var array1641 = new PrimitiveGraceList([]);
        var array1640 = new PrimitiveGraceList([var_arg, array1641]);
        return array1640;
      }
      var if1642 = GraceDone;
      setLineNumber(390);    // compilenode string
      var string1643 = new GraceString("member");
      var call1645 = callmethodChecked(var_arg, "kind", [0]);
      var opresult1647 = callmethodChecked(call1645, "==", [1], string1643);
      if (Grace_isTrue(opresult1647)) {
        setLineNumber(391);    // compilenode array
        var array1649 = new PrimitiveGraceList([]);
        var array1648 = new PrimitiveGraceList([var_arg, array1649]);
        return array1648;
      }
      var if1650 = GraceDone;
      setLineNumber(393);    // compilenode string
      var string1651 = new GraceString("call");
      var call1653 = callmethodChecked(var_arg, "kind", [0]);
      var opresult1655 = callmethodChecked(call1653, "==", [1], string1651);
      if (Grace_isTrue(opresult1655)) {
        setLineNumber(394);    // compilenode array
        var array1656 = new PrimitiveGraceList([]);
        var var_bindings = array1656;
        setLineNumber(395);    // compilenode array
        var array1657 = new PrimitiveGraceList([]);
        var var_subpats = array1657;
        setLineNumber(396);    // compilenode identifier
        var call1658 = callmethodChecked(var_arg, "with", [0]);
        var block1659 = new GraceBlock(this, 396, 1);
        setLineNumber(1);    // compilenode identifier
        block1659.real = function(var_part) {
          setLineNumber(397);    // compilenode identifier
          var call1660 = callmethodChecked(var_part, "args", [0]);
          var block1661 = new GraceBlock(this, 397, 1);
          setLineNumber(1);    // compilenode identifier
          block1661.real = function(var_a) {
            setLineNumber(398);    // compilenode identifier
            onSelf = true;
            var call1662 = callmethodChecked(this, "rewritematchblockterm", [1], var_a);
            var var_tmp = call1662;
            setLineNumber(399);    // compilenode identifier
            var call1663 = callmethodChecked(var_tmp, "first", [0]);
            var call1664 = callmethodChecked(var_subpats, "push", [1], call1663);
            setLineNumber(400);    // compilenode identifier
            var call1665 = callmethodChecked(var_tmp, "second", [0]);
            var block1666 = new GraceBlock(this, 400, 1);
            setLineNumber(1);    // compilenode identifier
            block1666.real = function(var_b) {
              setLineNumber(401);    // compilenode identifier
              var call1667 = callmethodChecked(var_bindings, "push", [1], var_b);
              return call1667;
            };
            var call1668 = callmethodChecked(var_prelude, "for()do", [1, 1], call1665, block1666);
            return call1668;
          };
          var call1669 = callmethodChecked(var_prelude, "for()do", [1, 1], call1660, block1661);
          return call1669;
        };
        var call1670 = callmethodChecked(var_prelude, "for()do", [1, 1], call1658, block1659);
        setLineNumber(407);    // compilenode string
        var string1671 = new GraceString("new");
        setLineNumber(408);    // compilenode string
        var string1672 = new GraceString("MatchAndDestructuringPattern");
        setLineNumber(409);    // compilenode string
        var string1673 = new GraceString("prelude");
        var call1674 = callmethodChecked(var_ast, "identifierNode", [0]);
        var call1675 = callmethodChecked(call1674, "new", [2], string1673, GraceFalse);
        setLineNumber(408);    // compilenode identifier
        var call1676 = callmethodChecked(var_ast, "memberNode", [0]);
        var call1677 = callmethodChecked(call1676, "new", [2], string1672, call1675);
        setLineNumber(406);    // compilenode identifier
        var call1678 = callmethodChecked(var_ast, "memberNode", [0]);
        var call1679 = callmethodChecked(call1678, "new", [2], string1671, call1677);
        setLineNumber(412);    // compilenode string
        var string1681 = new GraceString("new");
        var call1683 = callmethodChecked(var_arg, "value", [0]);
        var call1684 = callmethodChecked(var_ast, "arrayNode", [0]);
        var call1685 = callmethodChecked(call1684, "new", [1], var_subpats);
        var array1682 = new PrimitiveGraceList([call1683, call1685]);
        var call1686 = callmethodChecked(var_ast, "callWithPart", [0]);
        var call1687 = callmethodChecked(call1686, "request()withArgs", [1, 1], string1681, array1682);
        var array1680 = new PrimitiveGraceList([call1687]);
        setLineNumber(405);    // compilenode identifier
        var call1688 = callmethodChecked(var_ast, "callNode", [0]);
        var call1689 = callmethodChecked(call1688, "new", [2], call1679, array1680);
        var var_callpat = call1689;
        setLineNumber(414);    // compilenode identifier
        var array1690 = new PrimitiveGraceList([var_callpat, var_bindings]);
        return array1690;
      }
      var if1691 = GraceDone;
      setLineNumber(416);    // compilenode string
      var string1692 = new GraceString("identifier");
      var call1694 = callmethodChecked(var_arg, "kind", [0]);
      var opresult1696 = callmethodChecked(call1694, "==", [1], string1692);
      if (Grace_isTrue(opresult1696)) {
        setLineNumber(419);    // compilenode string
        var string1697 = new GraceString("new");
        setLineNumber(420);    // compilenode string
        var string1698 = new GraceString("VariablePattern");
        setLineNumber(421);    // compilenode string
        var string1699 = new GraceString("prelude");
        var call1700 = callmethodChecked(var_ast, "identifierNode", [0]);
        var call1701 = callmethodChecked(call1700, "new", [2], string1699, GraceFalse);
        setLineNumber(420);    // compilenode identifier
        var call1702 = callmethodChecked(var_ast, "memberNode", [0]);
        var call1703 = callmethodChecked(call1702, "new", [2], string1698, call1701);
        setLineNumber(418);    // compilenode identifier
        var call1704 = callmethodChecked(var_ast, "memberNode", [0]);
        var call1705 = callmethodChecked(call1704, "new", [2], string1697, call1703);
        setLineNumber(424);    // compilenode string
        var string1707 = new GraceString("new");
        var call1709 = callmethodChecked(var_arg, "value", [0]);
        var call1710 = callmethodChecked(var_ast, "stringNode", [0]);
        var call1711 = callmethodChecked(call1710, "new", [1], call1709);
        var array1708 = new PrimitiveGraceList([call1711]);
        var call1712 = callmethodChecked(var_ast, "callWithPart", [0]);
        var call1713 = callmethodChecked(call1712, "request()withArgs", [1, 1], string1707, array1708);
        var array1706 = new PrimitiveGraceList([call1713]);
        setLineNumber(417);    // compilenode identifier
        var call1714 = callmethodChecked(var_ast, "callNode", [0]);
        var call1715 = callmethodChecked(call1714, "new", [2], call1705, array1706);
        var var_varpat = call1715;
        var if1716 = GraceDone;
        setLineNumber(426);    // compilenode identifier
        var call1717 = callmethodChecked(var_arg, "dtype", [0]);
        var opresult1720 = callmethodChecked(GraceFalse, "\u2260", [1], call1717);
        if (Grace_isTrue(opresult1720)) {
          var if1721 = GraceDone;
          setLineNumber(427);    // compilenode string
          var string1722 = new GraceString("identifier");
          var call1724 = callmethodChecked(var_arg, "dtype", [0]);
          var call1725 = callmethodChecked(call1724, "kind", [0]);
          var opresult1727 = callmethodChecked(call1725, "==", [1], string1722);
          if (Grace_isTrue(opresult1727)) {
            setLineNumber(430);    // compilenode string
            var string1729 = new GraceString("new");
            setLineNumber(431);    // compilenode string
            var string1730 = new GraceString("AndPattern");
            setLineNumber(432);    // compilenode string
            var string1731 = new GraceString("prelude");
            var call1732 = callmethodChecked(var_ast, "identifierNode", [0]);
            var call1733 = callmethodChecked(call1732, "new", [2], string1731, GraceFalse);
            setLineNumber(431);    // compilenode identifier
            var call1734 = callmethodChecked(var_ast, "memberNode", [0]);
            var call1735 = callmethodChecked(call1734, "new", [2], string1730, call1733);
            setLineNumber(429);    // compilenode identifier
            var call1736 = callmethodChecked(var_ast, "memberNode", [0]);
            var call1737 = callmethodChecked(call1736, "new", [2], string1729, call1735);
            setLineNumber(435);    // compilenode string
            var string1739 = new GraceString("new");
            var call1741 = callmethodChecked(var_arg, "dtype", [0]);
            var array1740 = new PrimitiveGraceList([var_varpat, call1741]);
            var call1742 = callmethodChecked(var_ast, "callWithPart", [0]);
            var call1743 = callmethodChecked(call1742, "request()withArgs", [1, 1], string1739, array1740);
            var array1738 = new PrimitiveGraceList([call1743]);
            setLineNumber(428);    // compilenode identifier
            var call1744 = callmethodChecked(var_ast, "callNode", [0]);
            var call1745 = callmethodChecked(call1744, "new", [2], call1737, array1738);
            setLineNumber(436);    // compilenode identifier
            var array1746 = new PrimitiveGraceList([var_arg]);
            var array1728 = new PrimitiveGraceList([call1745, array1746]);
            return array1728;
          }
          setLineNumber(438);    // compilenode identifier
          var call1747 = callmethodChecked(var_arg, "dtype", [0]);
          onSelf = true;
          var call1748 = callmethodChecked(this, "rewritematchblockterm", [1], call1747);
          var var_tmp = call1748;
          setLineNumber(439);    // compilenode identifier
          var array1749 = new PrimitiveGraceList([var_arg]);
          var var_bindings = array1749;
          setLineNumber(440);    // compilenode identifier
          var call1750 = callmethodChecked(var_tmp, "second", [0]);
          var block1751 = new GraceBlock(this, 440, 1);
          setLineNumber(1);    // compilenode identifier
          block1751.real = function(var_b) {
            setLineNumber(441);    // compilenode identifier
            var call1752 = callmethodChecked(var_bindings, "push", [1], var_b);
            return call1752;
          };
          var call1753 = callmethodChecked(var_prelude, "for()do", [1, 1], call1750, block1751);
          setLineNumber(445);    // compilenode string
          var string1754 = new GraceString("new");
          setLineNumber(446);    // compilenode string
          var string1755 = new GraceString("AndPattern");
          setLineNumber(447);    // compilenode string
          var string1756 = new GraceString("prelude");
          var call1757 = callmethodChecked(var_ast, "identifierNode", [0]);
          var call1758 = callmethodChecked(call1757, "new", [2], string1756, GraceFalse);
          setLineNumber(446);    // compilenode identifier
          var call1759 = callmethodChecked(var_ast, "memberNode", [0]);
          var call1760 = callmethodChecked(call1759, "new", [2], string1755, call1758);
          setLineNumber(444);    // compilenode identifier
          var call1761 = callmethodChecked(var_ast, "memberNode", [0]);
          var call1762 = callmethodChecked(call1761, "new", [2], string1754, call1760);
          setLineNumber(450);    // compilenode string
          var string1764 = new GraceString("new");
          var call1766 = callmethodChecked(var_tmp, "first", [0]);
          var array1765 = new PrimitiveGraceList([var_varpat, call1766]);
          var call1767 = callmethodChecked(var_ast, "callWithPart", [0]);
          var call1768 = callmethodChecked(call1767, "request()withArgs", [1, 1], string1764, array1765);
          var array1763 = new PrimitiveGraceList([call1768]);
          setLineNumber(443);    // compilenode identifier
          var call1769 = callmethodChecked(var_ast, "callNode", [0]);
          var call1770 = callmethodChecked(call1769, "new", [2], call1762, array1763);
          var var_bindingpat = call1770;
          setLineNumber(452);    // compilenode identifier
          var array1771 = new PrimitiveGraceList([var_bindingpat, var_bindings]);
          return array1771;
        }
        setLineNumber(454);    // compilenode identifier
        var array1773 = new PrimitiveGraceList([var_arg]);
        var array1772 = new PrimitiveGraceList([var_varpat, array1773]);
        return array1772;
      }
      var if1774 = GraceDone;
      setLineNumber(456);    // compilenode string
      var string1775 = new GraceString("typeliteral");
      var call1777 = callmethodChecked(var_arg, "kind", [0]);
      var opresult1779 = callmethodChecked(call1777, "==", [1], string1775);
      if (Grace_isTrue(opresult1779)) {
        setLineNumber(457);    // compilenode array
        var array1781 = new PrimitiveGraceList([]);
        var array1780 = new PrimitiveGraceList([var_arg, array1781]);
        return array1780;
      }
      setLineNumber(460);    // compilenode string
      var string1782 = new GraceString("'.");
      var call1784 = callmethodChecked(var_arg, "kind", [0]);
      var string1786 = new GraceString("match block of unexpected kind '");
      var opresult1788 = callmethodChecked(string1786, "++", [1], call1784);
      var opresult1790 = callmethodChecked(opresult1788, "++", [1], string1782);
      setLineNumber(459);    // compilenode string
      var string1792 = new GraceString("Internal error in compiler: fell through when rewriting ");
      var opresult1794 = callmethodChecked(string1792, "++", [1], opresult1790);
      var call1795 = callmethodChecked(var_prelude, "ProgrammingError", [0]);
      var call1796 = callmethodChecked(call1795, "raise", [1], opresult1794);
      return call1796;
    };
    func1595.paramCounts = [1];
    this.methods["rewritematchblockterm"] = func1595;
    func1595.definitionLine = 375;
    func1595.definitionModule = "identifierresolution";
    setLineNumber(462);    // compilenode method
    var func1797 = function(argcv) {    // method rewritematchblock(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_blk = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for rewritematchblock(1)"));
      setModuleName("identifierresolution");
      setLineNumber(463);    // compilenode identifier
      var call1798 = callmethodChecked(var_blk, "params", [0]);
      var call1799 = callmethodChecked(call1798, "first", [0]);
      var var_arg = call1799;
      setLineNumber(464);    // compilenode identifier
      var var_pattern = GraceFalse;
      setLineNumber(465);    // compilenode array
      var array1800 = new PrimitiveGraceList([]);
      var var_newparams = array1800;
      setLineNumber(466);    // compilenode identifier
      var call1801 = callmethodChecked(var_blk, "params", [0]);
      var block1802 = new GraceBlock(this, 466, 1);
      setLineNumber(1);    // compilenode identifier
      block1802.real = function(var_p) {
        setLineNumber(467);    // compilenode identifier
        var call1803 = callmethodChecked(var_newparams, "push", [1], var_p);
        return call1803;
      };
      var call1804 = callmethodChecked(var_prelude, "for()do", [1, 1], call1801, block1802);
      var if1805 = GraceDone;
      setLineNumber(470);    // compilenode string
      var string1806 = new GraceString("boolean");
      var call1808 = callmethodChecked(var_arg, "kind", [0]);
      var opresult1810 = callmethodChecked(call1808, "==", [1], string1806);
      setLineNumber(469);    // compilenode string
      var string1812 = new GraceString("string");
      var call1814 = callmethodChecked(var_arg, "kind", [0]);
      var opresult1816 = callmethodChecked(call1814, "==", [1], string1812);
      var string1818 = new GraceString("num");
      var call1820 = callmethodChecked(var_arg, "kind", [0]);
      var opresult1822 = callmethodChecked(call1820, "==", [1], string1818);
      var opresult1824 = callmethodChecked(opresult1822, "||", [1], opresult1816);
      var opresult1826 = callmethodChecked(opresult1824, "||", [1], opresult1810);
      if (Grace_isTrue(opresult1826)) {
        setLineNumber(471);    // compilenode identifier
        onSelf = true;
        var call1827 = callmethodChecked(this, "rewritematchblockterm", [1], var_arg);
        var var_tmp = call1827;
        setLineNumber(472);    // compilenode identifier
        var call1828 = callmethodChecked(var_tmp, "first", [0]);
        var_pattern = call1828;
        setLineNumber(473);    // compilenode identifier
        var call1829 = callmethodChecked(var_tmp, "second", [0]);
        var_newparams = call1829;
        if1805 = GraceDone;
      }
      var if1830 = GraceDone;
      setLineNumber(475);    // compilenode string
      var string1831 = new GraceString("identifier");
      var call1833 = callmethodChecked(var_arg, "kind", [0]);
      var opresult1835 = callmethodChecked(call1833, "==", [1], string1831);
      if (Grace_isTrue(opresult1835)) {
        setLineNumber(478);    // compilenode string
        var string1836 = new GraceString("new");
        setLineNumber(479);    // compilenode string
        var string1837 = new GraceString("VariablePattern");
        setLineNumber(480);    // compilenode string
        var string1838 = new GraceString("prelude");
        var call1839 = callmethodChecked(var_ast, "identifierNode", [0]);
        var call1840 = callmethodChecked(call1839, "new", [2], string1838, GraceFalse);
        setLineNumber(479);    // compilenode identifier
        var call1841 = callmethodChecked(var_ast, "memberNode", [0]);
        var call1842 = callmethodChecked(call1841, "new", [2], string1837, call1840);
        setLineNumber(477);    // compilenode identifier
        var call1843 = callmethodChecked(var_ast, "memberNode", [0]);
        var call1844 = callmethodChecked(call1843, "new", [2], string1836, call1842);
        setLineNumber(483);    // compilenode string
        var string1846 = new GraceString("new");
        var call1848 = callmethodChecked(var_arg, "value", [0]);
        var call1849 = callmethodChecked(var_ast, "stringNode", [0]);
        var call1850 = callmethodChecked(call1849, "new", [1], call1848);
        var array1847 = new PrimitiveGraceList([call1850]);
        var call1851 = callmethodChecked(var_ast, "callWithPart", [0]);
        var call1852 = callmethodChecked(call1851, "request()withArgs", [1, 1], string1846, array1847);
        var array1845 = new PrimitiveGraceList([call1852]);
        setLineNumber(476);    // compilenode identifier
        var call1853 = callmethodChecked(var_ast, "callNode", [0]);
        var call1854 = callmethodChecked(call1853, "new", [2], call1844, array1845);
        var var_varpat = call1854;
        var if1855 = GraceDone;
        setLineNumber(485);    // compilenode identifier
        var call1856 = callmethodChecked(var_arg, "dtype", [0]);
        var opresult1859 = callmethodChecked(GraceFalse, "\u2260", [1], call1856);
        if (Grace_isTrue(opresult1859)) {
          setLineNumber(486);    // compilenode identifier
          var call1861 = callmethodChecked(var_arg, "dtype", [0]);
          var call1862 = callmethodChecked(call1861, "kind", [0]);
          var cases1860 = [];
          setLineNumber(487);    // compilenode block
          var block1863 = new GraceBlock(this, 487, 0);
          var string1864 = new GraceString("op");
          var string1866 = new GraceString("identifier");
          var opresult1868 = callmethodChecked(string1866, "|", [1], string1864);
          block1863.pattern = opresult1868;
          block1863.real = function() {
            setLineNumber(489);    // compilenode string
            var string1869 = new GraceString("new");
            setLineNumber(490);    // compilenode string
            var string1870 = new GraceString("AndPattern");
            setLineNumber(491);    // compilenode string
            var string1871 = new GraceString("prelude");
            var call1872 = callmethodChecked(var_ast, "identifierNode", [0]);
            var call1873 = callmethodChecked(call1872, "new", [2], string1871, GraceFalse);
            setLineNumber(490);    // compilenode identifier
            var call1874 = callmethodChecked(var_ast, "memberNode", [0]);
            var call1875 = callmethodChecked(call1874, "new", [2], string1870, call1873);
            setLineNumber(489);    // compilenode identifier
            var call1876 = callmethodChecked(var_ast, "memberNode", [0]);
            var call1877 = callmethodChecked(call1876, "new", [2], string1869, call1875);
            setLineNumber(494);    // compilenode string
            var string1879 = new GraceString("new");
            var call1881 = callmethodChecked(var_arg, "dtype", [0]);
            var array1880 = new PrimitiveGraceList([var_varpat, call1881]);
            var call1882 = callmethodChecked(var_ast, "callWithPart", [0]);
            var call1883 = callmethodChecked(call1882, "request()withArgs", [1, 1], string1879, array1880);
            var array1878 = new PrimitiveGraceList([call1883]);
            setLineNumber(488);    // compilenode identifier
            var call1884 = callmethodChecked(var_ast, "callNode", [0]);
            var call1885 = callmethodChecked(call1884, "new", [2], call1877, array1878);
            var_pattern = call1885;
            return GraceDone;
          };
          cases1860.push(block1863);
          setLineNumber(495);    // compilenode block
          var block1886 = new GraceBlock(this, 495, 1);
          setLineNumber(1);    // compilenode identifier
          block1886.real = function(var___95____95__1) {
            setLineNumber(496);    // compilenode identifier
            var call1887 = callmethodChecked(var_arg, "dtype", [0]);
            onSelf = true;
            var call1888 = callmethodChecked(this, "rewritematchblockterm", [1], call1887);
            var var_tmp = call1888;
            setLineNumber(498);    // compilenode string
            var string1889 = new GraceString("new");
            setLineNumber(499);    // compilenode string
            var string1890 = new GraceString("AndPattern");
            setLineNumber(500);    // compilenode string
            var string1891 = new GraceString("prelude");
            var call1892 = callmethodChecked(var_ast, "identifierNode", [0]);
            var call1893 = callmethodChecked(call1892, "new", [2], string1891, GraceFalse);
            setLineNumber(499);    // compilenode identifier
            var call1894 = callmethodChecked(var_ast, "memberNode", [0]);
            var call1895 = callmethodChecked(call1894, "new", [2], string1890, call1893);
            setLineNumber(498);    // compilenode identifier
            var call1896 = callmethodChecked(var_ast, "memberNode", [0]);
            var call1897 = callmethodChecked(call1896, "new", [2], string1889, call1895);
            setLineNumber(503);    // compilenode string
            var string1899 = new GraceString("new");
            var call1901 = callmethodChecked(var_tmp, "first", [0]);
            var array1900 = new PrimitiveGraceList([var_varpat, call1901]);
            var call1902 = callmethodChecked(var_ast, "callWithPart", [0]);
            var call1903 = callmethodChecked(call1902, "request()withArgs", [1, 1], string1899, array1900);
            var array1898 = new PrimitiveGraceList([call1903]);
            setLineNumber(497);    // compilenode identifier
            var call1904 = callmethodChecked(var_ast, "callNode", [0]);
            var call1905 = callmethodChecked(call1904, "new", [2], call1897, array1898);
            var var_bindingpat = call1905;
            setLineNumber(505);    // compilenode identifier
            var_pattern = var_bindingpat;
            setLineNumber(506);    // compilenode identifier
            var call1906 = callmethodChecked(var_tmp, "second", [0]);
            var block1907 = new GraceBlock(this, 506, 1);
            setLineNumber(1);    // compilenode identifier
            block1907.real = function(var_p) {
              var if1908 = GraceDone;
              setLineNumber(509);    // compilenode identifier
              var call1909 = callmethodChecked(var_p, "wildcard", [0]);
              if (Grace_isTrue(call1909)) {
                setLineNumber(510);    // compilenode identifier
                var call1910 = callmethodChecked(var_p, "isBindingOccurrence:=", [1], GraceTrue);
                if1908 = call1910;
              } else {
                setLineNumber(512);    // compilenode identifier
                var call1911 = callmethodChecked(var_p, "deepCopy", [0]);
                var var_extraParam = call1911;
                setLineNumber(515);    // compilenode identifier
                var call1912 = callmethodChecked(var_extraParam, "isBindingOccurrence:=", [1], GraceTrue);
                setLineNumber(516);    // compilenode identifier
                var call1913 = callmethodChecked(var_newparams, "push", [1], var_extraParam);
                if1908 = call1913;
              }
              return if1908;
            };
            var call1914 = callmethodChecked(var_prelude, "for()do", [1, 1], call1906, block1907);
            return call1914;
          };
          cases1860.push(block1886);
          setLineNumber(486);    // compilematchcase
          var matchres1860 = matchCase(call1862,cases1860,false);
          setModuleName("identifierresolution");
          if1855 = matchres1860;
        } else {
          var if1915 = GraceDone;
          setLineNumber(521);    // compilenode identifier
          var call1916 = callmethodChecked(var_blk, "matchingPattern", [0]);
          var opresult1919 = callmethodChecked(GraceFalse, "\u2260", [1], call1916);
          if (Grace_isTrue(opresult1919)) {
            var if1920 = GraceDone;
            setLineNumber(522);    // compilenode identifier
            var call1921 = callmethodChecked(var_arg, "value", [0]);
            var call1923 = callmethodChecked(var_blk, "matchingPattern", [0]);
            var call1924 = callmethodChecked(call1923, "value", [0]);
            var opresult1926 = callmethodChecked(call1924, "==", [1], call1921);
            if (Grace_isTrue(opresult1926)) {
              setLineNumber(523);    // compilenode identifier
              var_pattern = var_arg;
              setLineNumber(524);    // compilenode array
              var array1927 = new PrimitiveGraceList([]);
              var_newparams = array1927;
              if1920 = GraceDone;
            }
            if1915 = if1920;
          }
          if1855 = if1915;
        }
        if1830 = if1855;
      } else {
        var if1928 = GraceDone;
        setLineNumber(529);    // compilenode identifier
        var call1929 = callmethodChecked(var_blk, "matchingPattern", [0]);
        var opresult1932 = callmethodChecked(GraceFalse, "\u2260", [1], call1929);
        if (Grace_isTrue(opresult1932)) {
          var if1933 = GraceDone;
          setLineNumber(530);    // compilenode identifier
          var call1934 = callmethodChecked(var_arg, "value", [0]);
          var call1936 = callmethodChecked(var_blk, "matchingPattern", [0]);
          var call1937 = callmethodChecked(call1936, "value", [0]);
          var opresult1939 = callmethodChecked(call1937, "==", [1], call1934);
          if (Grace_isTrue(opresult1939)) {
            setLineNumber(531);    // compilenode identifier
            var_pattern = var_arg;
            setLineNumber(532);    // compilenode array
            var array1940 = new PrimitiveGraceList([]);
            var_newparams = array1940;
            if1933 = GraceDone;
          }
          if1928 = if1933;
        }
        if1830 = if1928;
      }
      setLineNumber(536);    // compilenode identifier
      var call1941 = callmethodChecked(var_blk, "body", [0]);
      var call1942 = callmethodChecked(var_ast, "blockNode", [0]);
      var call1943 = callmethodChecked(call1942, "new", [2], var_newparams, call1941);
      var var_newblk = call1943;
      setLineNumber(537);    // compilenode identifier
      var call1944 = callmethodChecked(var_newblk, "matchingPattern:=", [1], var_pattern);
      setLineNumber(538);    // compilenode identifier
      var call1945 = callmethodChecked(var_blk, "line", [0]);
      var call1946 = callmethodChecked(var_newblk, "line:=", [1], call1945);
      setLineNumber(539);    // compilenode identifier
      return var_newblk;
    };
    func1797.paramCounts = [1];
    this.methods["rewritematchblock"] = func1797;
    func1797.definitionLine = 462;
    func1797.definitionModule = "identifierresolution";
    setLineNumber(542);    // compilenode method
    var func1947 = function(argcv) {    // method rewriteIdentifier(1)ancestors(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_node = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for rewriteIdentifier (arg list 1) of rewriteIdentifier(1)ancestors(1)"));
      var var_as = arguments[curarg];
      curarg++;
      if (argcv[1] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ancestors (arg list 2) of rewriteIdentifier(1)ancestors(1)"));
      setModuleName("identifierresolution");
      setLineNumber(566);    // compilenode identifier
      var call1948 = callmethodChecked(var_node, "value", [0]);
      var var_nm = call1948;
      setLineNumber(567);    // compilenode identifier
      var call1949 = callmethodChecked(var_node, "scope", [0]);
      var var_nodeScope = call1949;
      setLineNumber(568);    // compilenode string
      var string1950 = new GraceString(":=");
      var opresult1953 = callmethodChecked(var_nm, "++", [1], string1950);
      var var_nmGets = opresult1953;
      setLineNumber(569);    // compilenode identifier
      var call1954 = callmethodChecked(var_node, "line", [0]);
      var call1955 = callmethodChecked(var_node, "linePos", [0]);
      var call1956 = callmethodChecked(var_util, "setPosition", [2], call1954, call1955);
      var if1957 = GraceDone;
      setLineNumber(570);    // compilenode identifier
      var call1958 = callmethodChecked(var_node, "isAssigned", [0]);
      if (Grace_isTrue(call1958)) {
        var if1959 = GraceDone;
        setLineNumber(571);    // compilenode identifier
        var call1960 = callmethodChecked(var_nodeScope, "hasDefinitionInNest", [1], var_nmGets);
        if (Grace_isTrue(call1960)) {
          var if1961 = GraceDone;
          setLineNumber(572);    // compilenode identifier
          var call1962 = callmethodChecked(var_k, "methdec", [0]);
          var call1964 = callmethodChecked(var_nodeScope, "kindInNest", [1], var_nmGets);
          var opresult1966 = callmethodChecked(call1964, "==", [1], call1962);
          if (Grace_isTrue(opresult1966)) {
            setLineNumber(573);    // compilenode identifier
            var call1967 = callmethodChecked(var_nodeScope, "resolveOuterMethod", [1], var_nmGets);
            var var_meth = call1967;
            setLineNumber(574);    // compilenode identifier
            var call1968 = callmethodChecked(var_meth, "in", [0]);
            var call1969 = callmethodChecked(var_ast, "memberNode", [0]);
            var call1970 = callmethodChecked(call1969, "new", [2], var_nm, call1968);
            var var_meth2 = call1970;
            setLineNumber(575);    // compilenode identifier
            return var_meth2;
          }
          if1959 = if1961;
        }
        if1957 = if1959;
      }
      setLineNumber(579);    // compilenode block
      var block1971 = new GraceBlock(this, 579, 0);
      block1971.real = function() {
        setLineNumber(580);    // compilenode identifier
        onSelf = true;
        var call1972 = callmethodChecked(this, "reportUndeclaredIdentifier", [1], var_node);
        return call1972;
      };
      setLineNumber(579);    // compilenode identifier
      var call1973 = callmethodChecked(var_nodeScope, "thatDefines()ifNone", [1, 1], var_nm, block1971);
      var var_definingScope = call1973;
      setLineNumber(582);    // compilenode identifier
      var call1974 = callmethodChecked(var_definingScope, "kind", [1], var_nm);
      var var_nodeKind = call1974;
      var if1975 = GraceDone;
      setLineNumber(583);    // compilenode identifier
      var call1976 = callmethodChecked(var_node, "isAssigned", [0]);
      if (Grace_isTrue(call1976)) {
        var if1977 = GraceDone;
        setLineNumber(584);    // compilenode identifier
        var call1978 = callmethodChecked(var_nodeKind, "isAssignable", [0]);
        var call1979 = callmethodChecked(call1978, "not", [0]);
        if (Grace_isTrue(call1979)) {
          setLineNumber(585);    // compilenode identifier
          onSelf = true;
          var call1980 = callmethodChecked(this, "reportAssignmentTo()declaredInScope", [1, 1], var_node, var_definingScope);
          if1977 = call1980;
        }
        if1975 = if1977;
      }
      var if1981 = GraceDone;
      setLineNumber(588);    // compilenode string
      var string1982 = new GraceString("outer");
      var opresult1985 = callmethodChecked(var_nm, "==", [1], string1982);
      if (Grace_isTrue(opresult1985)) {
        setLineNumber(589);    // compilenode string
        var string1986 = new GraceString("self");
        var call1987 = callmethodChecked(var_ast, "identifierNode", [0]);
        var call1988 = callmethodChecked(call1987, "new()scope", [2, 1], string1986, GraceFalse, var_nodeScope);
        var var_selfId = call1988;
        setLineNumber(590);    // compilenode string
        var string1989 = new GraceString("outer");
        var call1990 = callmethodChecked(var_ast, "memberNode", [0]);
        var call1991 = callmethodChecked(call1990, "new()scope", [2, 1], string1989, var_selfId, var_nodeScope);
        var var_memb = call1991;
        setLineNumber(591);    // compilenode identifier
        return var_memb;
      }
      var if1992 = GraceDone;
      setLineNumber(594);    // compilenode string
      var string1993 = new GraceString("self");
      var opresult1996 = callmethodChecked(var_nm, "==", [1], string1993);
      if (Grace_isTrue(opresult1996)) {
        setLineNumber(595);    // compilenode identifier
        return var_node;
      }
      setLineNumber(597);    // compilenode identifier
      onSelf = true;
      var call1997 = callmethodChecked(this, "checkForAmbiguityOf()definedIn()as", [1, 1, 1], var_node, var_definingScope, var_nodeKind);
      setLineNumber(598);    // compilenode identifier
      var call1998 = callmethodChecked(var_definingScope, "variety", [0]);
      var var_v = call1998;
      var if1999 = GraceDone;
      setLineNumber(599);    // compilenode string
      var string2000 = new GraceString("built-in");
      var opresult2003 = callmethodChecked(var_v, "==", [1], string2000);
      if (Grace_isTrue(opresult2003)) {
        return var_node;
      }
      var if2004 = GraceDone;
      setLineNumber(600);    // compilenode string
      var string2005 = new GraceString("dialect");
      var opresult2008 = callmethodChecked(var_v, "==", [1], string2005);
      if (Grace_isTrue(opresult2008)) {
        setLineNumber(601);    // compilenode string
        var string2009 = new GraceString("prelude");
        var call2010 = callmethodChecked(var_ast, "identifierNode", [0]);
        var call2011 = callmethodChecked(call2010, "new()scope", [2, 1], string2009, GraceFalse, var_nodeScope);
        var var_p = call2011;
        setLineNumber(602);    // compilenode identifier
        var call2012 = callmethodChecked(var_ast, "memberNode", [0]);
        var call2013 = callmethodChecked(call2012, "new()scope", [2, 1], var_nm, var_p, var_nodeScope);
        var var_m = call2013;
        setLineNumber(603);    // compilenode identifier
        return var_m;
      }
      var if2014 = GraceDone;
      setLineNumber(605);    // compilenode identifier
      var call2015 = callmethodChecked(var_nodeKind, "isParameter", [0]);
      if (Grace_isTrue(call2015)) {
        return var_node;
      }
      var if2016 = GraceDone;
      setLineNumber(606);    // compilenode identifier
      var call2017 = callmethodChecked(var_k, "typedec", [0]);
      var opresult2020 = callmethodChecked(var_nodeKind, "==", [1], call2017);
      if (Grace_isTrue(opresult2020)) {
        return var_node;
      }
      var if2021 = GraceDone;
      setLineNumber(609);    // compilenode identifier
      var call2022 = callmethodChecked(var_node, "inTypePositionWithAncestors", [1], var_as);
      if (Grace_isTrue(call2022)) {
        return var_node;
      }
      var if2023 = GraceDone;
      setLineNumber(612);    // compilenode identifier
      var opresult2026 = callmethodChecked(var_definingScope, "==", [1], var_moduleScope);
      if (Grace_isTrue(opresult2026)) {
        var if2027 = GraceDone;
        setLineNumber(613);    // compilenode identifier
        var call2028 = callmethodChecked(var_k, "defdec", [0]);
        var opresult2031 = callmethodChecked(var_nodeKind, "==", [1], call2028);
        if (Grace_isTrue(opresult2031)) {
          return var_node;
        }
        var if2032 = GraceDone;
        setLineNumber(614);    // compilenode identifier
        var call2033 = callmethodChecked(var_k, "typedec", [0]);
        var opresult2036 = callmethodChecked(var_nodeKind, "==", [1], call2033);
        if (Grace_isTrue(opresult2036)) {
          return var_node;
        }
        var if2037 = GraceDone;
        setLineNumber(615);    // compilenode identifier
        var call2038 = callmethodChecked(var_k, "vardec", [0]);
        var opresult2041 = callmethodChecked(var_nodeKind, "==", [1], call2038);
        if (Grace_isTrue(opresult2041)) {
          return var_node;
        }
        if2023 = if2037;
      }
      var if2042 = GraceDone;
      setLineNumber(617);    // compilenode identifier
      var call2043 = callmethodChecked(var_nodeScope, "enclosingObjectScope", [0]);
      var opresult2046 = callmethodChecked(var_definingScope, "==", [1], call2043);
      if (Grace_isTrue(opresult2046)) {
        setLineNumber(619);    // compilenode string
        var string2047 = new GraceString("self");
        var call2048 = callmethodChecked(var_ast, "identifierNode", [0]);
        var call2049 = callmethodChecked(call2048, "new()scope", [2, 1], string2047, GraceFalse, var_nodeScope);
        setLineNumber(618);    // compilenode identifier
        var call2050 = callmethodChecked(var_ast, "memberNode", [0]);
        var call2051 = callmethodChecked(call2050, "new()scope", [2, 1], var_nm, call2049, var_nodeScope);
        return call2051;
      }
      var if2052 = GraceDone;
      setLineNumber(623);    // compilenode block
      var block2053 = new GraceBlock(this, 623, 0);
      block2053.real = function() {
        var call2054 = callmethodChecked(var_nodeScope, "isInSameObjectAs", [1], var_definingScope);
        return call2054;
      };
      setLineNumber(622);    // compilenode identifier
      var call2056 = callmethodChecked(var_nodeScope, "isObjectScope", [0]);
      var call2057 = callmethodChecked(call2056, "not", [0]);
      var opresult2059 = callmethodChecked(call2057, "&&", [1], block2053);
      if (Grace_isTrue(opresult2059)) {
        var if2060 = GraceDone;
        setLineNumber(624);    // compilenode identifier
        var call2061 = callmethodChecked(var_k, "methdec", [0]);
        var opresult2064 = callmethodChecked(var_nodeKind, "==", [1], call2061);
        if (Grace_isTrue(opresult2064)) {
          return var_node;
        }
        var if2065 = GraceDone;
        setLineNumber(625);    // compilenode identifier
        var call2066 = callmethodChecked(var_k, "defdec", [0]);
        var opresult2069 = callmethodChecked(var_nodeKind, "==", [1], call2066);
        if (Grace_isTrue(opresult2069)) {
          return var_node;
        }
        var if2070 = GraceDone;
        setLineNumber(626);    // compilenode identifier
        var call2071 = callmethodChecked(var_k, "vardec", [0]);
        var opresult2074 = callmethodChecked(var_nodeKind, "==", [1], call2071);
        if (Grace_isTrue(opresult2074)) {
          return var_node;
        }
        if2052 = if2070;
      }
      var if2075 = GraceDone;
      setLineNumber(628);    // compilenode string
      var string2076 = new GraceString("method");
      var opresult2079 = callmethodChecked(var_v, "==", [1], string2076);
      if (Grace_isTrue(opresult2079)) {
        return var_node;
      }
      var if2080 = GraceDone;
      setLineNumber(634);    // compilenode string
      var string2081 = new GraceString("block");
      var opresult2084 = callmethodChecked(var_v, "==", [1], string2081);
      if (Grace_isTrue(opresult2084)) {
        return var_node;
      }
      setLineNumber(635);    // compilenode identifier
      var call2085 = callmethodChecked(var_nodeScope, "resolveOuterMethod", [1], var_nm);
      return call2085;
    };
    func1947.paramCounts = [1, 1];
    this.methods["rewriteIdentifier()ancestors"] = func1947;
    func1947.definitionLine = 542;
    func1947.definitionModule = "identifierresolution";
    setLineNumber(637);    // compilenode method
    var func2086 = function(argcv) {    // method checkForAmbiguityOf(1)definedIn(1)as(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_node = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for checkForAmbiguityOf (arg list 1) of checkForAmbiguityOf(1)definedIn(1)as(1)"));
      var var_definingScope = arguments[curarg];
      curarg++;
      if (argcv[1] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for definedIn (arg list 2) of checkForAmbiguityOf(1)definedIn(1)as(1)"));
      var var_kind = arguments[curarg];
      curarg++;
      if (argcv[2] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for as (arg list 3) of checkForAmbiguityOf(1)definedIn(1)as(1)"));
      setModuleName("identifierresolution");
      setLineNumber(638);    // compilenode identifier
      var call2087 = callmethodChecked(var_node, "scope", [0]);
      var var_currentScope = call2087;
      var if2088 = GraceDone;
      setLineNumber(639);    // compilenode identifier
      var opresult2091 = callmethodChecked(var_currentScope, "\u2260", [1], var_definingScope);
      if (Grace_isTrue(opresult2091)) {
        return var_done;
      }
      var if2092 = GraceDone;
      setLineNumber(643);    // compilenode identifier
      var call2093 = callmethodChecked(var_kind, "fromParent", [0]);
      var call2094 = callmethodChecked(call2093, "not", [0]);
      if (Grace_isTrue(call2094)) {
        return var_done;
      }
      setLineNumber(644);    // compilenode identifier
      var call2095 = callmethodChecked(var_node, "value", [0]);
      var var_name = call2095;
      setLineNumber(645);    // compilenode block
      var block2096 = new GraceBlock(this, 645, 0);
      block2096.real = function() {
        setLineNumber(647);    // compilenode identifier
        throw new ReturnException(var_done, returnTarget);
        return undefined;
      };
      setLineNumber(645);    // compilenode identifier
      var call2097 = callmethodChecked(var_currentScope, "parent", [0]);
      var call2098 = callmethodChecked(call2097, "thatDefines()ifNone", [1, 1], var_name, block2096);
      var var_conflictingScope = call2098;
      setLineNumber(648);    // compilenode string
      var string2099 = new GraceString("");
      var var_more = string2099;
      var if2100 = GraceDone;
      setLineNumber(649);    // compilenode identifier
      var call2101 = callmethodChecked(var_conflictingScope, "elementLines", [0]);
      var call2102 = callmethodChecked(call2101, "contains", [1], var_name);
      if (Grace_isTrue(call2102)) {
        setLineNumber(650);    // compilenode identifier
        var call2103 = callmethodChecked(var_conflictingScope, "elementLines", [0]);
        var call2104 = callmethodChecked(call2103, "get", [1], var_name);
        var var_earlierDef = call2104;
        var if2105 = GraceDone;
        setLineNumber(651);    // compilenode identifier
        var opresult2108 = callmethodChecked(var_earlierDef, "\u2260", [1], new GraceNum(0));
        if (Grace_isTrue(opresult2108)) {
          setLineNumber(652);    // compilenode string
          var string2109 = new GraceString("");
          var string2112 = new GraceString(" at line ");
          var opresult2114 = callmethodChecked(string2112, "++", [1], var_earlierDef);
          var opresult2116 = callmethodChecked(opresult2114, "++", [1], string2109);
          var_more = opresult2116;
          if2105 = GraceDone;
        }
        if2100 = if2105;
      }
      setLineNumber(655);    // compilenode string
      var string2117 = new GraceString(".");
      var string2120 = new GraceString(" and defined in an enclosing scope");
      var string2123 = new GraceString(" is both ");
      var string2126 = new GraceString("");
      var opresult2128 = callmethodChecked(string2126, "++", [1], var_name);
      var opresult2130 = callmethodChecked(opresult2128, "++", [1], string2123);
      var opresult2132 = callmethodChecked(opresult2130, "++", [1], var_kind);
      var opresult2134 = callmethodChecked(opresult2132, "++", [1], string2120);
      var opresult2136 = callmethodChecked(opresult2134, "++", [1], var_more);
      var opresult2138 = callmethodChecked(opresult2136, "++", [1], string2117);
      setLineNumber(656);    // compilenode identifier
      var call2139 = callmethodChecked(var_node, "line", [0]);
      var call2140 = callmethodChecked(var_node, "linePos", [0]);
      var call2142 = callmethodChecked(var_name, "size", [0]);
      var call2144 = callmethodChecked(var_node, "linePos", [0]);
      var opresult2146 = callmethodChecked(call2144, "+", [1], call2142);
      var diff2148 = callmethodChecked(opresult2146, "-", [1], new GraceNum(1));
      setLineNumber(655);    // compilenode identifier
      var call2149 = callmethodChecked(var_errormessages, "syntaxError()atRange", [1, 3], opresult2138, call2139, call2140, diff2148);
      return call2149;
    };
    func2086.paramCounts = [1, 1, 1];
    this.methods["checkForAmbiguityOf()definedIn()as"] = func2086;
    func2086.definitionLine = 637;
    func2086.definitionModule = "identifierresolution";
    setLineNumber(658);    // compilenode method
    var func2150 = function(argcv) {    // method checkForReservedName(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_node = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for checkForReservedName(1)"));
      setModuleName("identifierresolution");
      setLineNumber(659);    // compilenode identifier
      var call2151 = callmethodChecked(var_node, "nameString", [0]);
      var var_ns = call2151;
      var if2152 = GraceDone;
      setLineNumber(660);    // compilenode identifier
      var call2153 = callmethodChecked(var_reserved, "contains", [1], var_ns);
      if (Grace_isTrue(call2153)) {
        setLineNumber(661);    // compilenode string
        var string2154 = new GraceString(" is a reserved name and cannot be re-declared.");
        var string2157 = new GraceString("");
        var opresult2159 = callmethodChecked(string2157, "++", [1], var_ns);
        var opresult2161 = callmethodChecked(opresult2159, "++", [1], string2154);
        setLineNumber(662);    // compilenode identifier
        var call2162 = callmethodChecked(var_node, "line", [0]);
        var call2163 = callmethodChecked(var_node, "linePos", [0]);
        var call2165 = callmethodChecked(var_ns, "size", [0]);
        var call2167 = callmethodChecked(var_node, "linePos", [0]);
        var opresult2169 = callmethodChecked(call2167, "+", [1], call2165);
        var diff2171 = callmethodChecked(opresult2169, "-", [1], new GraceNum(1));
        setLineNumber(661);    // compilenode identifier
        var call2172 = callmethodChecked(var_errormessages, "syntaxError()atRange", [1, 3], opresult2161, call2162, call2163, diff2171);
        if2152 = call2172;
      }
      return if2152;
    };
    func2150.paramCounts = [1];
    this.methods["checkForReservedName"] = func2150;
    func2150.definitionLine = 658;
    func2150.definitionModule = "identifierresolution";
    setLineNumber(666);    // compilenode method
    var func2173 = function(argcv) {    // method isSameIgnoringCase(2)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_c1 = arguments[curarg];
      curarg++;
      var var_c2 = arguments[curarg];
      curarg++;
      if (argcv[0] !== 2)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isSameIgnoringCase(2)"));
      setModuleName("identifierresolution");
      var if2174 = GraceDone;
      setLineNumber(668);    // compilenode identifier
      var opresult2177 = callmethodChecked(var_c1, "==", [1], var_c2);
      if (Grace_isTrue(opresult2177)) {
        return GraceTrue;
      }
      setLineNumber(669);    // compilenode identifier
      var call2179 = callmethodChecked(var_c2, "ord", [0]);
      var call2181 = callmethodChecked(var_c1, "ord", [0]);
      var diff2183 = callmethodChecked(call2181, "-", [1], call2179);
      var call2184 = callmethodChecked(diff2183, "abs", [0]);
      var opresult2186 = callmethodChecked(call2184, "==", [1], new GraceNum(32));
      return opresult2186;
    };
    func2173.paramCounts = [2];
    this.methods["isSameIgnoringCase"] = func2173;
    func2173.definitionLine = 666;
    func2173.definitionModule = "identifierresolution";
    setLineNumber(672);    // compilenode method
    var func2187 = function(argcv) {    // method reportUndeclaredIdentifier(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_node = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for reportUndeclaredIdentifier(1)"));
      setModuleName("identifierresolution");
      setLineNumber(673);    // compilenode identifier
      var call2188 = callmethodChecked(var_node, "scope", [0]);
      var var_nodeScope = call2188;
      setLineNumber(674);    // compilenode identifier
      var call2189 = callmethodChecked(var_node, "nameString", [0]);
      var var_nm = call2189;
      setLineNumber(675);    // compilenode identifier
      var call2190 = callmethodChecked(var_nm, "size", [0]);
      var var_nmSize = call2190;
      setLineNumber(676);    // compilenode identifier
      var prod2193 = callmethodChecked(var_nmSize, "*", [1], new GraceNum(2));
      var var_sizeLimit = prod2193;
      setLineNumber(678);    // compilenode identifier
      var quotient2197 = callmethodChecked(var_nmSize, "/", [1], new GraceNum(3));
      var opresult2199 = callmethodChecked(quotient2197, "+", [1], new GraceNum(1));
      var call2200 = callmethodChecked(opresult2199, "truncated", [0]);
      var var_thresh = call2200;
      setLineNumber(679);    // compilenode array
      var array2201 = new PrimitiveGraceList([]);
      var var_suggestions = array2201;
      setLineNumber(680);    // compilenode identifier
      var call2202 = callmethodChecked(var_nm, "first", [0]);
      var var_startChar = call2202;
      setLineNumber(681);    // compilenode vardec
      var var_suggestion;
      setLineNumber(682);    // compilenode block
      var block2203 = new GraceBlock(this, 682, 1);
      setLineNumber(1);    // compilenode identifier
      block2203.real = function(var_s) {
        setLineNumber(683);    // compilenode block
        var block2204 = new GraceBlock(this, 683, 1);
        setLineNumber(1);    // compilenode identifier
        block2204.real = function(var_v) {
          var if2205 = GraceDone;
          setLineNumber(684);    // compilenode identifier
          var call2207 = callmethodChecked(var_v, "size", [0]);
          var diff2210 = callmethodChecked(var_nmSize, "-", [1], call2207);
          var call2211 = callmethodChecked(diff2210, "abs", [0]);
          var opresult2213 = callmethodChecked(call2211, "<", [1], var_thresh);
          if (Grace_isTrue(opresult2213)) {
            setLineNumber(685);    // compilenode string
            var string2214 = new GraceString("");
            var string2217 = new GraceString(" within ");
            var string2220 = new GraceString(" to ");
            var string2223 = new GraceString("matching ");
            var opresult2225 = callmethodChecked(string2223, "++", [1], var_nm);
            var opresult2227 = callmethodChecked(opresult2225, "++", [1], string2220);
            var opresult2229 = callmethodChecked(opresult2227, "++", [1], var_v);
            var opresult2231 = callmethodChecked(opresult2229, "++", [1], string2217);
            var opresult2233 = callmethodChecked(opresult2231, "++", [1], var_thresh);
            var opresult2235 = callmethodChecked(opresult2233, "++", [1], string2214);
            var call2236 = callmethodChecked(var_util, "log()verbose", [1, 1], new GraceNum(100), opresult2235);
            setLineNumber(686);    // compilenode identifier
            var call2237 = callmethodChecked(var_errormessages, "name()matches()within", [1, 1, 1], var_nm, var_v, var_thresh);
            var var_matchExtent = call2237;
            var if2238 = GraceDone;
            setLineNumber(688);    // compilenode block
            var block2239 = new GraceBlock(this, 688, 0);
            block2239.real = function() {
              setLineNumber(689);    // compilenode identifier
              var call2240 = callmethodChecked(var_v, "size", [0]);
              var opresult2243 = callmethodChecked(var_matchExtent, "==", [1], call2240);
              var opresult2247 = callmethodChecked(var_nmSize, ">", [1], new GraceNum(2));
              var opresult2249 = callmethodChecked(opresult2247, "&&", [1], opresult2243);
              return opresult2249;
            };
            setLineNumber(688);    // compilenode identifier
            var call2252 = callmethodChecked(var_v, "size", [0]);
            var opresult2254 = callmethodChecked(call2252, "\u2264", [1], var_sizeLimit);
            var call2256 = callmethodChecked(var_v, "size", [0]);
            var opresult2259 = callmethodChecked(var_nmSize, "\u2264", [1], call2256);
            setLineNumber(687);    // compilenode identifier
            var call2261 = callmethodChecked(var_v, "first", [0]);
            onSelf = true;
            var call2262 = callmethodChecked(this, "isSameIgnoringCase", [2], call2261, var_startChar);
            var opresult2266 = callmethodChecked(var_matchExtent, ">", [1], new GraceNum(1));
            var opresult2268 = callmethodChecked(opresult2266, "&&", [1], call2262);
            var opresult2270 = callmethodChecked(opresult2268, "&&", [1], opresult2259);
            var opresult2272 = callmethodChecked(opresult2270, "&&", [1], opresult2254);
            var opresult2274 = callmethodChecked(opresult2272, "||", [1], block2239);
            if (Grace_isTrue(opresult2274)) {
              setLineNumber(690);    // compilenode identifier
              var call2275 = callmethodChecked(var_errormessages, "suggestion", [0]);
              var call2276 = callmethodChecked(call2275, "new", [0]);
              var_suggestion = call2276;
              setLineNumber(691);    // compilenode identifier
              var call2277 = callmethodChecked(var_node, "linePos", [0]);
              setLineNumber(692);    // compilenode identifier
              var call2279 = callmethodChecked(var_node, "value", [0]);
              var call2280 = callmethodChecked(call2279, "size", [0]);
              setLineNumber(691);    // compilenode identifier
              var call2282 = callmethodChecked(var_node, "linePos", [0]);
              var opresult2284 = callmethodChecked(call2282, "+", [1], call2280);
              var diff2286 = callmethodChecked(opresult2284, "-", [1], new GraceNum(1));
              setLineNumber(692);    // compilenode identifier
              var call2287 = callmethodChecked(var_node, "line", [0]);
              setLineNumber(691);    // compilenode identifier
              var call2288 = callmethodChecked(var_suggestion, "replaceRange()with()onLine", [2, 1, 1], call2277, diff2286, var_v, call2287);
              setLineNumber(693);    // compilenode identifier
              var call2289 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
              if2238 = call2289;
            }
            if2205 = if2238;
          }
          return if2205;
        };
        setLineNumber(683);    // compilenode identifier
        var call2290 = callmethodChecked(var_s, "elements", [0]);
        var call2291 = callmethodChecked(call2290, "keysDo", [1], block2204);
        return call2291;
      };
      setLineNumber(682);    // compilenode identifier
      var call2292 = callmethodChecked(var_nodeScope, "withSurroundingScopesDo", [1], block2203);
      setLineNumber(698);    // compilenode block
      var block2293 = new GraceBlock(this, 698, 1);
      setLineNumber(1);    // compilenode identifier
      block2293.real = function(var_s) {
        var if2294 = GraceDone;
        setLineNumber(699);    // compilenode identifier
        var call2295 = callmethodChecked(var_nodeScope, "elementScopes", [0]);
        var call2296 = callmethodChecked(call2295, "get", [1], var_s);
        var call2297 = callmethodChecked(call2296, "contains", [1], var_nm);
        if (Grace_isTrue(call2297)) {
          setLineNumber(700);    // compilenode identifier
          var call2298 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call2299 = callmethodChecked(call2298, "new", [0]);
          var_suggestion = call2299;
          setLineNumber(701);    // compilenode string
          var string2300 = new GraceString(".");
          var string2303 = new GraceString("");
          var opresult2305 = callmethodChecked(string2303, "++", [1], var_s);
          var opresult2307 = callmethodChecked(opresult2305, "++", [1], string2300);
          var call2308 = callmethodChecked(var_node, "linePos", [0]);
          var call2309 = callmethodChecked(var_node, "line", [0]);
          var call2310 = callmethodChecked(var_suggestion, "insert()atPosition()onLine", [1, 1, 1], opresult2307, call2308, call2309);
          setLineNumber(702);    // compilenode identifier
          var call2311 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
          if2294 = call2311;
        }
        return if2294;
      };
      setLineNumber(698);    // compilenode identifier
      var call2312 = callmethodChecked(var_nodeScope, "elementScopes", [0]);
      var call2313 = callmethodChecked(call2312, "keysDo", [1], block2293);
      setLineNumber(705);    // compilenode identifier
      var call2314 = callmethodChecked(var_node, "value", [0]);
      var call2315 = callmethodChecked(call2314, "size", [0]);
      var var_highlightLength = call2315;
      var if2316 = GraceDone;
      setLineNumber(706);    // compilenode identifier
      var call2317 = callmethodChecked(var_node, "value", [0]);
      var string2319 = new GraceString("()");
      var string2320 = new GraceString("XX");
      var call2321 = callmethodChecked(var_node, "value", [0]);
      var call2322 = callmethodChecked(call2321, "replace()with", [1, 1], string2319, string2320);
      var opresult2324 = callmethodChecked(call2322, "\u2260", [1], call2317);
      if (Grace_isTrue(opresult2324)) {
        setLineNumber(707);    // compilenode num
        var var_i = new GraceNum(0);
        setLineNumber(708);    // compilenode identifier
        var var_found = GraceFalse;
        setLineNumber(709);    // compilenode identifier
        var call2325 = callmethodChecked(var_node, "value", [0]);
        var block2326 = new GraceBlock(this, 709, 1);
        setLineNumber(1);    // compilenode identifier
        block2326.real = function(var_c) {
          var if2327 = GraceDone;
          setLineNumber(710);    // compilenode identifier
          var call2328 = callmethodChecked(var_found, "prefix!", [0]);
          var string2330 = new GraceString("(");
          var opresult2333 = callmethodChecked(var_c, "==", [1], string2330);
          var opresult2335 = callmethodChecked(opresult2333, "&&", [1], call2328);
          if (Grace_isTrue(opresult2335)) {
            setLineNumber(711);    // compilenode identifier
            var_highlightLength = var_i;
            setLineNumber(712);    // compilenode identifier
            var_found = GraceTrue;
            if2327 = GraceDone;
          }
          setLineNumber(714);    // compilenode identifier
          var opresult2338 = callmethodChecked(var_i, "+", [1], new GraceNum(1));
          var_i = opresult2338;
          return GraceDone;
        };
        var call2339 = callmethodChecked(var_prelude, "for()do", [1, 1], call2325, block2326);
        if2316 = call2339;
      }
      var if2340 = GraceDone;
      setLineNumber(717);    // compilenode identifier
      var call2341 = callmethodChecked(var_node, "inRequest", [0]);
      if (Grace_isTrue(call2341)) {
        setLineNumber(718);    // compilenode string
        var string2342 = new GraceString("");
        var var_extra = string2342;
        var if2343 = GraceDone;
        setLineNumber(719);    // compilenode string
        var string2344 = new GraceString("while");
        var call2346 = callmethodChecked(var_node, "value", [0]);
        var opresult2348 = callmethodChecked(call2346, "==", [1], string2344);
        if (Grace_isTrue(opresult2348)) {
          setLineNumber(720);    // compilenode identifier
          var call2349 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call2350 = callmethodChecked(call2349, "new", [0]);
          var_suggestion = call2350;
          setLineNumber(721);    // compilenode string
          var string2351 = new GraceString(" do { }");
          var call2352 = callmethodChecked(var_node, "line", [0]);
          var call2353 = callmethodChecked(var_suggestion, "append()onLine", [1, 1], string2351, call2352);
          setLineNumber(722);    // compilenode identifier
          var call2354 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
          if2343 = call2354;
        }
        var if2355 = GraceDone;
        setLineNumber(724);    // compilenode string
        var string2356 = new GraceString("for");
        var call2358 = callmethodChecked(var_node, "value", [0]);
        var opresult2360 = callmethodChecked(call2358, "==", [1], string2356);
        if (Grace_isTrue(opresult2360)) {
          setLineNumber(725);    // compilenode identifier
          var call2361 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call2362 = callmethodChecked(call2361, "new", [0]);
          var_suggestion = call2362;
          setLineNumber(726);    // compilenode string
          var string2363 = new GraceString(" do { aVarName -> }");
          var call2364 = callmethodChecked(var_node, "line", [0]);
          var call2365 = callmethodChecked(var_suggestion, "append()onLine", [1, 1], string2363, call2364);
          setLineNumber(727);    // compilenode identifier
          var call2366 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
          if2355 = call2366;
        }
        setLineNumber(729);    // compilenode string
        var string2367 = new GraceString("");
        var string2370 = new GraceString("'. This may be a spelling mistake or an attempt to access a method in another scope.");
        var string2373 = new GraceString("unknown method '");
        var opresult2375 = callmethodChecked(string2373, "++", [1], var_nm);
        var opresult2377 = callmethodChecked(opresult2375, "++", [1], string2370);
        var opresult2379 = callmethodChecked(opresult2377, "++", [1], var_extra);
        var opresult2381 = callmethodChecked(opresult2379, "++", [1], string2367);
        setLineNumber(730);    // compilenode identifier
        var call2382 = callmethodChecked(var_node, "line", [0]);
        var call2383 = callmethodChecked(var_node, "linePos", [0]);
        var call2386 = callmethodChecked(var_node, "linePos", [0]);
        var opresult2388 = callmethodChecked(call2386, "+", [1], var_highlightLength);
        var diff2390 = callmethodChecked(opresult2388, "-", [1], new GraceNum(1));
        setLineNumber(729);    // compilenode identifier
        var call2391 = callmethodChecked(var_errormessages, "syntaxError()atRange()withSuggestions", [1, 3, 1], opresult2381, call2382, call2383, diff2390, var_suggestions);
        if2340 = call2391;
      }
      setLineNumber(734);    // compilenode string
      var string2392 = new GraceString("'. This may be a spelling mistake or an attempt to access a variable in another scope.");
      var string2395 = new GraceString("unknown variable or method '");
      var opresult2397 = callmethodChecked(string2395, "++", [1], var_nm);
      var opresult2399 = callmethodChecked(opresult2397, "++", [1], string2392);
      setLineNumber(735);    // compilenode identifier
      var call2400 = callmethodChecked(var_node, "line", [0]);
      var call2401 = callmethodChecked(var_node, "linePos", [0]);
      var call2404 = callmethodChecked(var_node, "linePos", [0]);
      var opresult2406 = callmethodChecked(call2404, "+", [1], var_highlightLength);
      var diff2408 = callmethodChecked(opresult2406, "-", [1], new GraceNum(1));
      setLineNumber(734);    // compilenode identifier
      var call2409 = callmethodChecked(var_errormessages, "syntaxError()atRange()withSuggestions", [1, 3, 1], opresult2399, call2400, call2401, diff2408, var_suggestions);
      return call2409;
    };
    func2187.paramCounts = [1];
    this.methods["reportUndeclaredIdentifier"] = func2187;
    func2187.definitionLine = 672;
    func2187.definitionModule = "identifierresolution";
    setLineNumber(737);    // compilenode method
    var func2410 = function(argcv) {    // method reportAssignmentTo(1)declaredInScope(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_node = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for reportAssignmentTo (arg list 1) of reportAssignmentTo(1)declaredInScope(1)"));
      var var_scp = arguments[curarg];
      curarg++;
      if (argcv[1] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for declaredInScope (arg list 2) of reportAssignmentTo(1)declaredInScope(1)"));
      setModuleName("identifierresolution");
      setLineNumber(740);    // compilenode identifier
      var call2411 = callmethodChecked(var_node, "nameString", [0]);
      var var_name = call2411;
      setLineNumber(741);    // compilenode identifier
      var call2412 = callmethodChecked(var_scp, "kind", [1], var_name);
      var var_kind = call2412;
      setLineNumber(742);    // compilenode string
      var string2413 = new GraceString("");
      var var_more = string2413;
      setLineNumber(743);    // compilenode array
      var array2414 = new PrimitiveGraceList([]);
      var var_suggestions = array2414;
      var if2415 = GraceDone;
      setLineNumber(744);    // compilenode identifier
      var call2416 = callmethodChecked(var_scp, "elementLines", [0]);
      var call2417 = callmethodChecked(call2416, "contains", [1], var_name);
      if (Grace_isTrue(call2417)) {
        setLineNumber(745);    // compilenode string
        var string2418 = new GraceString("");
        var call2420 = callmethodChecked(var_scp, "elementLines", [0]);
        var call2421 = callmethodChecked(call2420, "get", [1], var_name);
        var string2423 = new GraceString(" on line ");
        var opresult2425 = callmethodChecked(string2423, "++", [1], call2421);
        var opresult2427 = callmethodChecked(opresult2425, "++", [1], string2418);
        var_more = opresult2427;
        if2415 = GraceDone;
      }
      var if2428 = GraceDone;
      setLineNumber(747);    // compilenode identifier
      var call2429 = callmethodChecked(var_k, "selfDef", [0]);
      var opresult2432 = callmethodChecked(var_kind, "==", [1], call2429);
      if (Grace_isTrue(opresult2432)) {
        setLineNumber(749);    // compilenode string
        var string2433 = new GraceString("it always refers to the current object.");
        setLineNumber(748);    // compilenode string
        var string2435 = new GraceString("' cannot be re-bound; ");
        var string2438 = new GraceString("'");
        var opresult2440 = callmethodChecked(string2438, "++", [1], var_name);
        var opresult2442 = callmethodChecked(opresult2440, "++", [1], string2435);
        var opresult2444 = callmethodChecked(opresult2442, "++", [1], string2433);
        setLineNumber(750);    // compilenode identifier
        var call2445 = callmethodChecked(var_node, "line", [0]);
        var call2446 = callmethodChecked(var_node, "linePos", [0]);
        var call2448 = callmethodChecked(var_name, "size", [0]);
        var call2450 = callmethodChecked(var_node, "linePos", [0]);
        var opresult2452 = callmethodChecked(call2450, "+", [1], call2448);
        var diff2454 = callmethodChecked(opresult2452, "-", [1], new GraceNum(1));
        setLineNumber(748);    // compilenode identifier
        var call2455 = callmethodChecked(var_errormessages, "syntaxError()atRange", [1, 3], opresult2444, call2445, call2446, diff2454);
        if2428 = call2455;
      } else {
        var if2456 = GraceDone;
        setLineNumber(751);    // compilenode identifier
        var call2457 = callmethodChecked(var_reserved, "contains", [1], var_name);
        if (Grace_isTrue(call2457)) {
          setLineNumber(753);    // compilenode string
          var string2458 = new GraceString("cannot be re-bound.");
          setLineNumber(752);    // compilenode string
          var string2460 = new GraceString("' is a reserved name and ");
          var string2463 = new GraceString("'");
          var opresult2465 = callmethodChecked(string2463, "++", [1], var_name);
          var opresult2467 = callmethodChecked(opresult2465, "++", [1], string2460);
          var opresult2469 = callmethodChecked(opresult2467, "++", [1], string2458);
          setLineNumber(754);    // compilenode identifier
          var call2470 = callmethodChecked(var_node, "line", [0]);
          var call2471 = callmethodChecked(var_node, "linePos", [0]);
          var call2473 = callmethodChecked(var_name, "size", [0]);
          var call2475 = callmethodChecked(var_node, "linePos", [0]);
          var opresult2477 = callmethodChecked(call2475, "+", [1], call2473);
          var diff2479 = callmethodChecked(opresult2477, "-", [1], new GraceNum(1));
          setLineNumber(752);    // compilenode identifier
          var call2480 = callmethodChecked(var_errormessages, "syntaxError()atRange", [1, 3], opresult2469, call2470, call2471, diff2479);
          if2456 = call2480;
        } else {
          var if2481 = GraceDone;
          setLineNumber(755);    // compilenode identifier
          var call2482 = callmethodChecked(var_k, "defdec", [0]);
          var opresult2485 = callmethodChecked(var_kind, "==", [1], call2482);
          if (Grace_isTrue(opresult2485)) {
            var if2486 = GraceDone;
            setLineNumber(756);    // compilenode identifier
            var call2487 = callmethodChecked(var_scp, "elementTokens", [0]);
            var call2488 = callmethodChecked(call2487, "contains", [1], var_name);
            if (Grace_isTrue(call2488)) {
              setLineNumber(757);    // compilenode identifier
              var call2489 = callmethodChecked(var_scp, "elementTokens", [0]);
              var call2490 = callmethodChecked(call2489, "get", [1], var_name);
              var var_tok = call2490;
              setLineNumber(758);    // compilenode identifier
              var call2491 = callmethodChecked(var_errormessages, "suggestion", [0]);
              var call2492 = callmethodChecked(call2491, "new", [0]);
              var var_sugg = call2492;
              var if2493 = GraceDone;
              setLineNumber(759);    // compilenode string
              var string2494 = new GraceString("def");
              var call2496 = callmethodChecked(var_tok, "value", [0]);
              var opresult2498 = callmethodChecked(call2496, "==", [1], string2494);
              if (Grace_isTrue(opresult2498)) {
                setLineNumber(760);    // compilenode identifier
                var var_eq = var_tok;
                setLineNumber(761);    // compilenode block
                var block2499 = new GraceBlock(this, 761, 0);
                block2499.real = function() {
                  var string2500 = new GraceString("=");
                  var call2502 = callmethodChecked(var_eq, "value", [0]);
                  var opresult2504 = callmethodChecked(call2502, "\u2260", [1], string2500);
                  var string2506 = new GraceString("op");
                  var call2508 = callmethodChecked(var_eq, "kind", [0]);
                  var opresult2510 = callmethodChecked(call2508, "\u2260", [1], string2506);
                  var opresult2512 = callmethodChecked(opresult2510, "||", [1], opresult2504);
                  return opresult2512;
                };
                var block2513 = new GraceBlock(this, 761, 0);
                block2513.real = function() {
                  setLineNumber(762);    // compilenode identifier
                  var call2514 = callmethodChecked(var_eq, "next", [0]);
                  var_eq = call2514;
                  return GraceDone;
                };
                var call2515 = callmethodChecked(var_prelude, "while()do", [1, 1], block2499, block2513);
                setLineNumber(764);    // compilenode string
                var string2516 = new GraceString(":=");
                var call2517 = callmethodChecked(var_sugg, "replaceToken()with", [1, 1], var_eq, string2516);
                setLineNumber(765);    // compilenode string
                var string2518 = new GraceString("var");
                var call2519 = callmethodChecked(var_sugg, "replaceToken()with", [1, 1], var_tok, string2518);
                setLineNumber(766);    // compilenode identifier
                var call2520 = callmethodChecked(var_suggestions, "push", [1], var_sugg);
                if2493 = call2520;
              } else {
                setLineNumber(769);    // compilenode string
                var string2521 = new GraceString(".");
                var string2524 = new GraceString("'");
                var call2526 = callmethodChecked(var_tok, "value", [0]);
                var string2528 = new GraceString("because it was declared as a '");
                var opresult2530 = callmethodChecked(string2528, "++", [1], call2526);
                var opresult2532 = callmethodChecked(opresult2530, "++", [1], string2524);
                var opresult2534 = callmethodChecked(opresult2532, "++", [1], var_more);
                var opresult2536 = callmethodChecked(opresult2534, "++", [1], string2521);
                setLineNumber(768);    // compilenode string
                var string2538 = new GraceString("' cannot be changed ");
                var string2541 = new GraceString("'");
                var opresult2543 = callmethodChecked(string2541, "++", [1], var_name);
                var opresult2545 = callmethodChecked(opresult2543, "++", [1], string2538);
                var opresult2547 = callmethodChecked(opresult2545, "++", [1], opresult2536);
                setLineNumber(770);    // compilenode identifier
                var call2548 = callmethodChecked(var_node, "line", [0]);
                var call2549 = callmethodChecked(var_node, "linePos", [0]);
                var call2551 = callmethodChecked(var_name, "size", [0]);
                var call2553 = callmethodChecked(var_node, "linePos", [0]);
                var opresult2555 = callmethodChecked(call2553, "+", [1], call2551);
                var diff2557 = callmethodChecked(opresult2555, "-", [1], new GraceNum(1));
                setLineNumber(768);    // compilenode identifier
                var call2558 = callmethodChecked(var_errormessages, "syntaxError()atRange", [1, 3], opresult2547, call2548, call2549, diff2557);
                if2493 = call2558;
              }
              if2486 = if2493;
            }
            setLineNumber(775);    // compilenode string
            var string2559 = new GraceString("To make it a variable, use 'var' in the declaration");
            setLineNumber(774);    // compilenode string
            var string2561 = new GraceString(". ");
            var string2564 = new GraceString("because it was declared with 'def'");
            var opresult2566 = callmethodChecked(string2564, "++", [1], var_more);
            var opresult2568 = callmethodChecked(opresult2566, "++", [1], string2561);
            setLineNumber(773);    // compilenode string
            var string2570 = new GraceString("' cannot be changed ");
            var string2573 = new GraceString("'");
            var opresult2575 = callmethodChecked(string2573, "++", [1], var_name);
            var opresult2577 = callmethodChecked(opresult2575, "++", [1], string2570);
            var opresult2579 = callmethodChecked(opresult2577, "++", [1], opresult2568);
            var opresult2581 = callmethodChecked(opresult2579, "++", [1], string2559);
            setLineNumber(776);    // compilenode identifier
            var call2582 = callmethodChecked(var_node, "line", [0]);
            var call2583 = callmethodChecked(var_node, "linePos", [0]);
            var call2585 = callmethodChecked(var_name, "size", [0]);
            var call2587 = callmethodChecked(var_node, "linePos", [0]);
            var opresult2589 = callmethodChecked(call2587, "+", [1], call2585);
            var diff2591 = callmethodChecked(opresult2589, "-", [1], new GraceNum(1));
            setLineNumber(773);    // compilenode identifier
            var call2592 = callmethodChecked(var_errormessages, "syntaxError()atRange()withSuggestions", [1, 3, 1], opresult2581, call2582, call2583, diff2591, var_suggestions);
            if2481 = call2592;
          } else {
            var if2593 = GraceDone;
            setLineNumber(778);    // compilenode identifier
            var call2594 = callmethodChecked(var_k, "typedec", [0]);
            var opresult2597 = callmethodChecked(var_kind, "==", [1], call2594);
            if (Grace_isTrue(opresult2597)) {
              setLineNumber(780);    // compilenode string
              var string2598 = new GraceString(".");
              var string2601 = new GraceString("because it is declared as a type");
              var opresult2603 = callmethodChecked(string2601, "++", [1], var_more);
              var opresult2605 = callmethodChecked(opresult2603, "++", [1], string2598);
              setLineNumber(779);    // compilenode string
              var string2607 = new GraceString("' cannot be re-bound ");
              var string2610 = new GraceString("'");
              var opresult2612 = callmethodChecked(string2610, "++", [1], var_name);
              var opresult2614 = callmethodChecked(opresult2612, "++", [1], string2607);
              var opresult2616 = callmethodChecked(opresult2614, "++", [1], opresult2605);
              setLineNumber(781);    // compilenode identifier
              var call2617 = callmethodChecked(var_node, "line", [0]);
              var call2618 = callmethodChecked(var_node, "linePos", [0]);
              var call2620 = callmethodChecked(var_name, "size", [0]);
              var call2622 = callmethodChecked(var_node, "linePos", [0]);
              var opresult2624 = callmethodChecked(call2622, "+", [1], call2620);
              var diff2626 = callmethodChecked(opresult2624, "-", [1], new GraceNum(1));
              setLineNumber(779);    // compilenode identifier
              var call2627 = callmethodChecked(var_errormessages, "syntaxError()atRange", [1, 3], opresult2616, call2617, call2618, diff2626);
              if2593 = call2627;
            } else {
              var if2628 = GraceDone;
              setLineNumber(782);    // compilenode identifier
              var call2629 = callmethodChecked(var_kind, "isParameter", [0]);
              if (Grace_isTrue(call2629)) {
                setLineNumber(784);    // compilenode string
                var string2630 = new GraceString(".");
                var string2633 = new GraceString("because it is declared as a parameter");
                var opresult2635 = callmethodChecked(string2633, "++", [1], var_more);
                var opresult2637 = callmethodChecked(opresult2635, "++", [1], string2630);
                setLineNumber(783);    // compilenode string
                var string2639 = new GraceString("' cannot be re-bound ");
                var string2642 = new GraceString("'");
                var opresult2644 = callmethodChecked(string2642, "++", [1], var_name);
                var opresult2646 = callmethodChecked(opresult2644, "++", [1], string2639);
                var opresult2648 = callmethodChecked(opresult2646, "++", [1], opresult2637);
                setLineNumber(785);    // compilenode identifier
                var call2649 = callmethodChecked(var_node, "line", [0]);
                var call2650 = callmethodChecked(var_node, "linePos", [0]);
                var call2652 = callmethodChecked(var_name, "size", [0]);
                var call2654 = callmethodChecked(var_node, "linePos", [0]);
                var opresult2656 = callmethodChecked(call2654, "+", [1], call2652);
                var diff2658 = callmethodChecked(opresult2656, "-", [1], new GraceNum(1));
                setLineNumber(783);    // compilenode identifier
                var call2659 = callmethodChecked(var_errormessages, "syntaxError()atRange", [1, 3], opresult2648, call2649, call2650, diff2658);
                if2628 = call2659;
              } else {
                var if2660 = GraceDone;
                setLineNumber(786);    // compilenode identifier
                var call2661 = callmethodChecked(var_k, "methdec", [0]);
                var opresult2664 = callmethodChecked(var_kind, "==", [1], call2661);
                if (Grace_isTrue(opresult2664)) {
                  setLineNumber(788);    // compilenode string
                  var string2665 = new GraceString(".");
                  var string2668 = new GraceString("because it is declared as a method");
                  var opresult2670 = callmethodChecked(string2668, "++", [1], var_more);
                  var opresult2672 = callmethodChecked(opresult2670, "++", [1], string2665);
                  setLineNumber(787);    // compilenode string
                  var string2674 = new GraceString("' cannot be re-bound ");
                  var string2677 = new GraceString("'");
                  var opresult2679 = callmethodChecked(string2677, "++", [1], var_name);
                  var opresult2681 = callmethodChecked(opresult2679, "++", [1], string2674);
                  var opresult2683 = callmethodChecked(opresult2681, "++", [1], opresult2672);
                  setLineNumber(789);    // compilenode identifier
                  var call2684 = callmethodChecked(var_node, "line", [0]);
                  var call2685 = callmethodChecked(var_node, "linePos", [0]);
                  var call2687 = callmethodChecked(var_name, "size", [0]);
                  var call2689 = callmethodChecked(var_node, "linePos", [0]);
                  var opresult2691 = callmethodChecked(call2689, "+", [1], call2687);
                  var diff2693 = callmethodChecked(opresult2691, "-", [1], new GraceNum(1));
                  setLineNumber(787);    // compilenode identifier
                  var call2694 = callmethodChecked(var_errormessages, "syntaxError()atRange", [1, 3], opresult2683, call2684, call2685, diff2693);
                  if2660 = call2694;
                }
                if2628 = if2660;
              }
              if2593 = if2628;
            }
            if2481 = if2593;
          }
          if2456 = if2481;
        }
        if2428 = if2456;
      }
      return if2428;
    };
    func2410.paramCounts = [1, 1];
    this.methods["reportAssignmentTo()declaredInScope"] = func2410;
    func2410.definitionLine = 737;
    func2410.definitionModule = "identifierresolution";
    setLineNumber(793);    // compilenode method
    var func2695 = function(argcv) {    // method resolveIdentifiers(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_topNode = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for resolveIdentifiers(1)"));
      setModuleName("identifierresolution");
      setLineNumber(799);    // compilenode block
      var block2696 = new GraceBlock(this, 799, 2);
      setLineNumber(1);    // compilenode identifier
      block2696.real = function(var_node, var_as) {
        var if2697 = GraceDone;
        setLineNumber(800);    // compilenode identifier
        var call2698 = callmethodChecked(var_node, "isAppliedOccurenceOfIdentifier", [0]);
        if (Grace_isTrue(call2698)) {
          setLineNumber(801);    // compilenode identifier
          onSelf = true;
          var call2699 = callmethodChecked(this, "rewriteIdentifier()ancestors", [1, 1], var_node, var_as);
          if2697 = call2699;
        } else {
          var if2700 = GraceDone;
          setLineNumber(803);    // compilenode identifier
          var call2701 = callmethodChecked(var_node, "isInherits", [0]);
          if (Grace_isTrue(call2701)) {
            setLineNumber(804);    // compilenode identifier
            onSelf = true;
            var call2702 = callmethodChecked(this, "transformInherits()ancestors", [1, 1], var_node, var_as);
            if2700 = call2702;
          } else {
            var if2703 = GraceDone;
            setLineNumber(805);    // compilenode identifier
            var call2704 = callmethodChecked(var_node, "isBind", [0]);
            if (Grace_isTrue(call2704)) {
              setLineNumber(806);    // compilenode identifier
              onSelf = true;
              var call2705 = callmethodChecked(this, "transformBind()ancestors", [1, 1], var_node, var_as);
              if2703 = call2705;
            } else {
              var if2706 = GraceDone;
              setLineNumber(807);    // compilenode identifier
              var call2707 = callmethodChecked(var_node, "isTypeDec", [0]);
              if (Grace_isTrue(call2707)) {
                setLineNumber(808);    // compilenode identifier
                if2706 = var_node;
              } else {
                setLineNumber(810);    // compilenode identifier
                if2706 = var_node;
              }
              if2703 = if2706;
            }
            if2700 = if2703;
          }
          if2697 = if2700;
        }
        return if2697;
      };
      setLineNumber(812);    // compilenode identifier
      var call2708 = callmethodChecked(var_ast, "ancestorChain", [0]);
      var call2709 = callmethodChecked(call2708, "empty", [0]);
      setLineNumber(799);    // compilenode identifier
      var call2710 = callmethodChecked(var_topNode, "map()ancestors", [1, 1], block2696, call2709);
      return call2710;
    };
    func2695.paramCounts = [1];
    this.methods["resolveIdentifiers"] = func2695;
    func2695.definitionLine = 793;
    func2695.definitionModule = "identifierresolution";
    setLineNumber(815);    // compilenode method
    var func2711 = function(argcv) {    // method processGCT(2)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_gct = arguments[curarg];
      curarg++;
      var var_importedModuleScope = arguments[curarg];
      curarg++;
      if (argcv[0] !== 2)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for processGCT(2)"));
      setModuleName("identifierresolution");
      setLineNumber(816);    // compilenode block
      var block2712 = new GraceBlock(this, 816, 1);
      setLineNumber(1);    // compilenode identifier
      block2712.real = function(var_c) {
        setLineNumber(817);    // compilenode array
        var array2713 = new PrimitiveGraceList([]);
        var var_cmeths = array2713;
        setLineNumber(818);    // compilenode string
        var string2714 = new GraceString("");
        var string2717 = new GraceString("constructors-of:");
        var opresult2719 = callmethodChecked(string2717, "++", [1], var_c);
        var opresult2721 = callmethodChecked(opresult2719, "++", [1], string2714);
        var call2722 = callmethodChecked(var_gct, "at", [1], opresult2721);
        var var_constrs = call2722;
        setLineNumber(819);    // compilenode string
        var string2723 = new GraceString("class");
        onSelf = true;
        var call2724 = callmethodChecked(this, "newScopeIn()kind", [1, 1], var_importedModuleScope, string2723);
        var var_classScope = call2724;
        setLineNumber(820);    // compilenode block
        var block2725 = new GraceBlock(this, 820, 1);
        setLineNumber(1);    // compilenode identifier
        block2725.real = function(var_constr) {
          setLineNumber(821);    // compilenode string
          var string2726 = new GraceString("object");
          onSelf = true;
          var call2727 = callmethodChecked(this, "newScopeIn()kind", [1, 1], var_importedModuleScope, string2726);
          var var_ns = call2727;
          setLineNumber(822);    // compilenode identifier
          var call2728 = callmethodChecked(var_classScope, "addName", [1], var_constr);
          setLineNumber(823);    // compilenode identifier
          var call2729 = callmethodChecked(var_classScope, "at()putScope", [1, 1], var_constr, var_ns);
          setLineNumber(824);    // compilenode block
          var block2730 = new GraceBlock(this, 824, 1);
          setLineNumber(1);    // compilenode identifier
          block2730.real = function(var_mn) {
            setLineNumber(825);    // compilenode identifier
            var call2731 = callmethodChecked(var_ns, "addName", [1], var_mn);
            return call2731;
          };
          setLineNumber(824);    // compilenode string
          var string2732 = new GraceString("");
          var string2735 = new GraceString(".");
          var string2738 = new GraceString("methods-of:");
          var opresult2740 = callmethodChecked(string2738, "++", [1], var_c);
          var opresult2742 = callmethodChecked(opresult2740, "++", [1], string2735);
          var opresult2744 = callmethodChecked(opresult2742, "++", [1], var_constr);
          var opresult2746 = callmethodChecked(opresult2744, "++", [1], string2732);
          var call2747 = callmethodChecked(var_gct, "at", [1], opresult2746);
          var call2748 = callmethodChecked(call2747, "do", [1], block2730);
          return call2748;
        };
        var call2749 = callmethodChecked(var_prelude, "for()do", [1, 1], var_constrs, block2725);
        setLineNumber(828);    // compilenode identifier
        var call2750 = callmethodChecked(var_importedModuleScope, "addName", [1], var_c);
        setLineNumber(829);    // compilenode identifier
        var call2751 = callmethodChecked(var_importedModuleScope, "at()putScope", [1, 1], var_c, var_classScope);
        return call2751;
      };
      setLineNumber(816);    // compilenode string
      var string2752 = new GraceString("classes");
      var block2753 = new GraceBlock(this, 816, 0);
      block2753.real = function() {
        var call2754 = callmethodChecked(var_prelude, "emptySequence", [0]);
        return call2754;
      };
      var call2755 = callmethodChecked(var_gct, "at()ifAbsent", [1, 1], string2752, block2753);
      var call2756 = callmethodChecked(call2755, "do", [1], block2712);
      setLineNumber(831);    // compilenode block
      var block2757 = new GraceBlock(this, 831, 1);
      setLineNumber(1);    // compilenode identifier
      block2757.real = function(var_c) {
        setLineNumber(832);    // compilenode string
        var string2758 = new GraceString("object");
        onSelf = true;
        var call2759 = callmethodChecked(this, "newScopeIn()kind", [1, 1], var_importedModuleScope, string2758);
        var var_objScope = call2759;
        setLineNumber(833);    // compilenode block
        var block2760 = new GraceBlock(this, 833, 1);
        setLineNumber(1);    // compilenode identifier
        block2760.real = function(var_mn) {
          setLineNumber(834);    // compilenode identifier
          var call2761 = callmethodChecked(var_objScope, "addName", [1], var_mn);
          return call2761;
        };
        setLineNumber(833);    // compilenode string
        var string2762 = new GraceString("");
        var string2765 = new GraceString("fresh:");
        var opresult2767 = callmethodChecked(string2765, "++", [1], var_c);
        var opresult2769 = callmethodChecked(opresult2767, "++", [1], string2762);
        var call2770 = callmethodChecked(var_gct, "at", [1], opresult2769);
        var call2771 = callmethodChecked(call2770, "do", [1], block2760);
        setLineNumber(836);    // compilenode identifier
        var call2772 = callmethodChecked(var_importedModuleScope, "addName", [1], var_c);
        setLineNumber(837);    // compilenode identifier
        var call2773 = callmethodChecked(var_importedModuleScope, "at()putScope", [1, 1], var_c, var_objScope);
        return call2773;
      };
      setLineNumber(831);    // compilenode string
      var string2774 = new GraceString("fresh-methods");
      var block2775 = new GraceBlock(this, 831, 0);
      block2775.real = function() {
        var call2776 = callmethodChecked(var_prelude, "emptySequence", [0]);
        return call2776;
      };
      var call2777 = callmethodChecked(var_gct, "at()ifAbsent", [1, 1], string2774, block2775);
      var call2778 = callmethodChecked(call2777, "do", [1], block2757);
      return call2778;
    };
    func2711.paramCounts = [2];
    this.methods["processGCT"] = func2711;
    func2711.definitionLine = 815;
    func2711.definitionModule = "identifierresolution";
    setLineNumber(841);    // compilenode method
    var func2779 = function(argcv) {    // method setupContext(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_moduleObject = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for setupContext(1)"));
      setModuleName("identifierresolution");
      setLineNumber(843);    // compilenode identifier
      var call2780 = callmethodChecked(var_util, "setPosition", [2], new GraceNum(0), new GraceNum(0));
      setLineNumber(845);    // compilenode string
      var string2781 = new GraceString("Type");
      var call2782 = callmethodChecked(var_k, "typedec", [0]);
      var call2783 = callmethodChecked(var_builtInsScope, "addName()as", [1, 1], string2781, call2782);
      setLineNumber(846);    // compilenode string
      var string2784 = new GraceString("Object");
      var call2785 = callmethodChecked(var_k, "typedec", [0]);
      var call2786 = callmethodChecked(var_builtInsScope, "addName()as", [1, 1], string2784, call2785);
      setLineNumber(847);    // compilenode string
      var string2787 = new GraceString("Unknown");
      var call2788 = callmethodChecked(var_k, "typedec", [0]);
      var call2789 = callmethodChecked(var_builtInsScope, "addName()as", [1, 1], string2787, call2788);
      setLineNumber(848);    // compilenode string
      var string2790 = new GraceString("String");
      var call2791 = callmethodChecked(var_k, "typedec", [0]);
      var call2792 = callmethodChecked(var_builtInsScope, "addName()as", [1, 1], string2790, call2791);
      setLineNumber(849);    // compilenode string
      var string2793 = new GraceString("Number");
      var call2794 = callmethodChecked(var_k, "typedec", [0]);
      var call2795 = callmethodChecked(var_builtInsScope, "addName()as", [1, 1], string2793, call2794);
      setLineNumber(850);    // compilenode string
      var string2796 = new GraceString("Boolean");
      var call2797 = callmethodChecked(var_k, "typedec", [0]);
      var call2798 = callmethodChecked(var_builtInsScope, "addName()as", [1, 1], string2796, call2797);
      setLineNumber(851);    // compilenode string
      var string2799 = new GraceString("Block");
      var call2800 = callmethodChecked(var_k, "typedec", [0]);
      var call2801 = callmethodChecked(var_builtInsScope, "addName()as", [1, 1], string2799, call2800);
      setLineNumber(852);    // compilenode string
      var string2802 = new GraceString("Done");
      var call2803 = callmethodChecked(var_k, "typedec", [0]);
      var call2804 = callmethodChecked(var_builtInsScope, "addName()as", [1, 1], string2802, call2803);
      setLineNumber(853);    // compilenode string
      var string2805 = new GraceString("done");
      var call2806 = callmethodChecked(var_k, "defdec", [0]);
      var call2807 = callmethodChecked(var_builtInsScope, "addName()as", [1, 1], string2805, call2806);
      setLineNumber(854);    // compilenode string
      var string2808 = new GraceString("true");
      var call2809 = callmethodChecked(var_k, "defdec", [0]);
      var call2810 = callmethodChecked(var_builtInsScope, "addName()as", [1, 1], string2808, call2809);
      setLineNumber(855);    // compilenode string
      var string2811 = new GraceString("false");
      var call2812 = callmethodChecked(var_k, "defdec", [0]);
      var call2813 = callmethodChecked(var_builtInsScope, "addName()as", [1, 1], string2811, call2812);
      setLineNumber(856);    // compilenode string
      var string2814 = new GraceString("super");
      var call2815 = callmethodChecked(var_k, "defdec", [0]);
      var call2816 = callmethodChecked(var_builtInsScope, "addName()as", [1, 1], string2814, call2815);
      setLineNumber(857);    // compilenode string
      var string2817 = new GraceString("outer");
      var call2818 = callmethodChecked(var_k, "defdec", [0]);
      var call2819 = callmethodChecked(var_builtInsScope, "addName()as", [1, 1], string2817, call2818);
      setLineNumber(858);    // compilenode string
      var string2820 = new GraceString("readable");
      var call2821 = callmethodChecked(var_builtInsScope, "addName", [1], string2820);
      setLineNumber(859);    // compilenode string
      var string2822 = new GraceString("writable");
      var call2823 = callmethodChecked(var_builtInsScope, "addName", [1], string2822);
      setLineNumber(860);    // compilenode string
      var string2824 = new GraceString("public");
      var call2825 = callmethodChecked(var_builtInsScope, "addName", [1], string2824);
      setLineNumber(861);    // compilenode string
      var string2826 = new GraceString("confidential");
      var call2827 = callmethodChecked(var_builtInsScope, "addName", [1], string2826);
      setLineNumber(862);    // compilenode string
      var string2828 = new GraceString("override");
      var call2829 = callmethodChecked(var_builtInsScope, "addName", [1], string2828);
      setLineNumber(863);    // compilenode string
      var string2830 = new GraceString("parent");
      var call2831 = callmethodChecked(var_builtInsScope, "addName", [1], string2830);
      setLineNumber(864);    // compilenode string
      var string2832 = new GraceString("...");
      var call2833 = callmethodChecked(var_k, "defdec", [0]);
      var call2834 = callmethodChecked(var_builtInsScope, "addName()as", [1, 1], string2832, call2833);
      setLineNumber(866);    // compilenode string
      var string2835 = new GraceString("asString");
      var call2836 = callmethodChecked(var_preludeScope, "addName", [1], string2835);
      setLineNumber(867);    // compilenode string
      var string2837 = new GraceString("::");
      var call2838 = callmethodChecked(var_preludeScope, "addName", [1], string2837);
      setLineNumber(868);    // compilenode string
      var string2839 = new GraceString("++");
      var call2840 = callmethodChecked(var_preludeScope, "addName", [1], string2839);
      setLineNumber(869);    // compilenode string
      var string2841 = new GraceString("==");
      var call2842 = callmethodChecked(var_preludeScope, "addName", [1], string2841);
      setLineNumber(870);    // compilenode string
      var string2843 = new GraceString("!=");
      var call2844 = callmethodChecked(var_preludeScope, "addName", [1], string2843);
      setLineNumber(871);    // compilenode string
      var string2845 = new GraceString("\u2260");
      var call2846 = callmethodChecked(var_preludeScope, "addName", [1], string2845);
      setLineNumber(872);    // compilenode string
      var string2847 = new GraceString("for()do");
      var call2848 = callmethodChecked(var_preludeScope, "addName", [1], string2847);
      setLineNumber(873);    // compilenode string
      var string2849 = new GraceString("while()do");
      var call2850 = callmethodChecked(var_preludeScope, "addName", [1], string2849);
      setLineNumber(874);    // compilenode string
      var string2851 = new GraceString("print");
      var call2852 = callmethodChecked(var_preludeScope, "addName", [1], string2851);
      setLineNumber(875);    // compilenode string
      var string2853 = new GraceString("native()code");
      var call2854 = callmethodChecked(var_preludeScope, "addName", [1], string2853);
      setLineNumber(876);    // compilenode string
      var string2855 = new GraceString("Exception");
      var call2856 = callmethodChecked(var_k, "defdec", [0]);
      var call2857 = callmethodChecked(var_preludeScope, "addName()as", [1, 1], string2855, call2856);
      setLineNumber(877);    // compilenode string
      var string2858 = new GraceString("RuntimeError");
      var call2859 = callmethodChecked(var_k, "defdec", [0]);
      var call2860 = callmethodChecked(var_preludeScope, "addName()as", [1, 1], string2858, call2859);
      setLineNumber(878);    // compilenode string
      var string2861 = new GraceString("NoSuchMethod");
      var call2862 = callmethodChecked(var_k, "defdec", [0]);
      var call2863 = callmethodChecked(var_preludeScope, "addName()as", [1, 1], string2861, call2862);
      setLineNumber(879);    // compilenode string
      var string2864 = new GraceString("ProgrammingError");
      var call2865 = callmethodChecked(var_k, "defdec", [0]);
      var call2866 = callmethodChecked(var_preludeScope, "addName()as", [1, 1], string2864, call2865);
      setLineNumber(880);    // compilenode string
      var string2867 = new GraceString("TypeError");
      var call2868 = callmethodChecked(var_k, "defdec", [0]);
      var call2869 = callmethodChecked(var_preludeScope, "addName()as", [1, 1], string2867, call2868);
      setLineNumber(881);    // compilenode string
      var string2870 = new GraceString("ResourceException");
      var call2871 = callmethodChecked(var_k, "defdec", [0]);
      var call2872 = callmethodChecked(var_preludeScope, "addName()as", [1, 1], string2870, call2871);
      setLineNumber(882);    // compilenode string
      var string2873 = new GraceString("EnvironmentException");
      var call2874 = callmethodChecked(var_k, "defdec", [0]);
      var call2875 = callmethodChecked(var_preludeScope, "addName()as", [1, 1], string2873, call2874);
      setLineNumber(883);    // compilenode string
      var string2876 = new GraceString("\u03c0");
      var call2877 = callmethodChecked(var_k, "defdec", [0]);
      var call2878 = callmethodChecked(var_preludeScope, "addName()as", [1, 1], string2876, call2877);
      setLineNumber(884);    // compilenode string
      var string2879 = new GraceString("infinity");
      var call2880 = callmethodChecked(var_k, "defdec", [0]);
      var call2881 = callmethodChecked(var_preludeScope, "addName()as", [1, 1], string2879, call2880);
      setLineNumber(885);    // compilenode string
      var string2882 = new GraceString("minigrace");
      var call2883 = callmethodChecked(var_preludeScope, "addName", [1], string2882);
      setLineNumber(886);    // compilenode string
      var string2884 = new GraceString("_methods");
      var call2885 = callmethodChecked(var_preludeScope, "addName", [1], string2884);
      setLineNumber(887);    // compilenode string
      var string2886 = new GraceString("primitiveArray");
      var call2887 = callmethodChecked(var_preludeScope, "addName", [1], string2886);
      setLineNumber(888);    // compilenode string
      var string2888 = new GraceString("become");
      var call2889 = callmethodChecked(var_preludeScope, "addName", [1], string2888);
      setLineNumber(889);    // compilenode string
      var string2890 = new GraceString("unbecome");
      var call2891 = callmethodChecked(var_preludeScope, "addName", [1], string2890);
      setLineNumber(890);    // compilenode string
      var string2892 = new GraceString("clone");
      var call2893 = callmethodChecked(var_preludeScope, "addName", [1], string2892);
      setLineNumber(891);    // compilenode string
      var string2894 = new GraceString("inBrowser");
      var call2895 = callmethodChecked(var_preludeScope, "addName", [1], string2894);
      setLineNumber(892);    // compilenode string
      var string2896 = new GraceString("engine");
      var call2897 = callmethodChecked(var_preludeScope, "addName", [1], string2896);
      setLineNumber(894);    // compilenode string
      var string2898 = new GraceString("isMe");
      var call2899 = callmethodChecked(var_k, "graceObjectMethod", [0]);
      var call2900 = callmethodChecked(var_graceObjectScope, "addName()as", [1, 1], string2898, call2899);
      setLineNumber(895);    // compilenode string
      var string2901 = new GraceString("!=");
      var call2902 = callmethodChecked(var_k, "graceObjectMethod", [0]);
      var call2903 = callmethodChecked(var_graceObjectScope, "addName()as", [1, 1], string2901, call2902);
      setLineNumber(896);    // compilenode string
      var string2904 = new GraceString("\u2260");
      var call2905 = callmethodChecked(var_k, "graceObjectMethod", [0]);
      var call2906 = callmethodChecked(var_graceObjectScope, "addName()as", [1, 1], string2904, call2905);
      setLineNumber(897);    // compilenode string
      var string2907 = new GraceString("basicAsString");
      var call2908 = callmethodChecked(var_k, "graceObjectMethod", [0]);
      var call2909 = callmethodChecked(var_graceObjectScope, "addName()as", [1, 1], string2907, call2908);
      setLineNumber(898);    // compilenode string
      var string2910 = new GraceString("asString");
      var call2911 = callmethodChecked(var_k, "graceObjectMethod", [0]);
      var call2912 = callmethodChecked(var_graceObjectScope, "addName()as", [1, 1], string2910, call2911);
      setLineNumber(899);    // compilenode string
      var string2913 = new GraceString("asDebugString");
      var call2914 = callmethodChecked(var_k, "graceObjectMethod", [0]);
      var call2915 = callmethodChecked(var_graceObjectScope, "addName()as", [1, 1], string2913, call2914);
      setLineNumber(900);    // compilenode string
      var string2916 = new GraceString("::");
      var call2917 = callmethodChecked(var_k, "graceObjectMethod", [0]);
      var call2918 = callmethodChecked(var_graceObjectScope, "addName()as", [1, 1], string2916, call2917);
      setLineNumber(902);    // compilenode string
      var string2919 = new GraceString("prefix!");
      var call2920 = callmethodChecked(var_booleanScope, "addName", [1], string2919);
      setLineNumber(903);    // compilenode string
      var string2921 = new GraceString("&&");
      var call2922 = callmethodChecked(var_booleanScope, "addName", [1], string2921);
      setLineNumber(904);    // compilenode string
      var string2923 = new GraceString("||");
      var call2924 = callmethodChecked(var_booleanScope, "addName", [1], string2923);
      setLineNumber(905);    // compilenode string
      var string2925 = new GraceString("not");
      var call2926 = callmethodChecked(var_booleanScope, "addName", [1], string2925);
      setLineNumber(907);    // compilenode string
      var string2927 = new GraceString("graceObject");
      var call2928 = callmethodChecked(var_builtInsScope, "addName", [1], string2927);
      setLineNumber(908);    // compilenode string
      var string2929 = new GraceString("graceObject");
      var call2930 = callmethodChecked(var_builtInsScope, "at()putScope", [1, 1], string2929, var_graceObjectScope);
      setLineNumber(909);    // compilenode string
      var string2931 = new GraceString("prelude");
      var call2932 = callmethodChecked(var_k, "defdec", [0]);
      var call2933 = callmethodChecked(var_builtInsScope, "addName()as", [1, 1], string2931, call2932);
      setLineNumber(910);    // compilenode string
      var string2934 = new GraceString("prelude");
      var call2935 = callmethodChecked(var_builtInsScope, "at()putScope", [1, 1], string2934, var_preludeScope);
      setLineNumber(911);    // compilenode string
      var string2936 = new GraceString("_prelude");
      var call2937 = callmethodChecked(var_k, "defdec", [0]);
      var call2938 = callmethodChecked(var_builtInsScope, "addName()as", [1, 1], string2936, call2937);
      setLineNumber(912);    // compilenode string
      var string2939 = new GraceString("_prelude");
      var call2940 = callmethodChecked(var_builtInsScope, "at()putScope", [1, 1], string2939, var_preludeScope);
      setLineNumber(913);    // compilenode string
      var string2941 = new GraceString("true");
      var call2942 = callmethodChecked(var_builtInsScope, "at()putScope", [1, 1], string2941, var_booleanScope);
      setLineNumber(914);    // compilenode string
      var string2943 = new GraceString("false");
      var call2944 = callmethodChecked(var_builtInsScope, "at()putScope", [1, 1], string2943, var_booleanScope);
      var if2945 = GraceDone;
      setLineNumber(917);    // compilenode string
      var string2946 = new GraceString("NativePrelude");
      var call2947 = callmethodChecked(var_util, "extensions", [0]);
      var call2948 = callmethodChecked(call2947, "contains", [1], string2946);
      var call2949 = callmethodChecked(call2948, "prefix!", [0]);
      if (Grace_isTrue(call2949)) {
        setLineNumber(918);    // compilenode identifier
        var var_hadDialect = GraceFalse;
        setLineNumber(919);    // compilenode identifier
        var call2950 = callmethodChecked(var_moduleObject, "value", [0]);
        var block2951 = new GraceBlock(this, 919, 1);
        setLineNumber(1);    // compilenode identifier
        block2951.real = function(var_val) {
          var if2952 = GraceDone;
          setLineNumber(920);    // compilenode string
          var string2953 = new GraceString("dialect");
          var call2955 = callmethodChecked(var_val, "kind", [0]);
          var opresult2957 = callmethodChecked(call2955, "==", [1], string2953);
          if (Grace_isTrue(opresult2957)) {
            setLineNumber(921);    // compilenode identifier
            var_hadDialect = GraceTrue;
            setLineNumber(922);    // compilenode identifier
            var call2958 = callmethodChecked(var_xmodule, "checkExternalModule", [1], var_val);
            setLineNumber(923);    // compilenode identifier
            var call2959 = callmethodChecked(var_val, "value", [0]);
            var call2960 = callmethodChecked(var_xmodule, "parseGCT", [1], call2959);
            var var_gctDict = call2960;
            setLineNumber(924);    // compilenode block
            var block2961 = new GraceBlock(this, 924, 1);
            setLineNumber(1);    // compilenode identifier
            block2961.real = function(var_mn) {
              setLineNumber(925);    // compilenode identifier
              var call2962 = callmethodChecked(var_preludeScope, "addName", [1], var_mn);
              return call2962;
            };
            setLineNumber(924);    // compilenode string
            var string2963 = new GraceString("public");
            var block2964 = new GraceBlock(this, 924, 0);
            block2964.real = function() {
              var call2965 = callmethodChecked(var_prelude, "emptySequence", [0]);
              return call2965;
            };
            var call2966 = callmethodChecked(var_gctDict, "at()ifAbsent", [1, 1], string2963, block2964);
            var call2967 = callmethodChecked(call2966, "do", [1], block2961);
            setLineNumber(927);    // compilenode block
            var block2968 = new GraceBlock(this, 927, 1);
            setLineNumber(1);    // compilenode identifier
            block2968.real = function(var_mn) {
              setLineNumber(928);    // compilenode identifier
              var call2969 = callmethodChecked(var_preludeScope, "addName", [1], var_mn);
              return call2969;
            };
            setLineNumber(927);    // compilenode string
            var string2970 = new GraceString("confidential");
            var block2971 = new GraceBlock(this, 927, 0);
            block2971.real = function() {
              var call2972 = callmethodChecked(var_prelude, "emptySequence", [0]);
              return call2972;
            };
            var call2973 = callmethodChecked(var_gctDict, "at()ifAbsent", [1, 1], string2970, block2971);
            var call2974 = callmethodChecked(call2973, "do", [1], block2968);
            setLineNumber(930);    // compilenode identifier
            onSelf = true;
            var call2975 = callmethodChecked(this, "processGCT", [2], var_gctDict, var_preludeScope);
            if2952 = call2975;
          }
          return if2952;
        };
        var call2976 = callmethodChecked(var_prelude, "for()do", [1, 1], call2950, block2951);
        var if2977 = GraceDone;
        setLineNumber(933);    // compilenode identifier
        var call2978 = callmethodChecked(var_hadDialect, "prefix!", [0]);
        if (Grace_isTrue(call2978)) {
          setLineNumber(934);    // compilenode string
          var string2979 = new GraceString("StandardPrelude");
          var call2980 = callmethodChecked(var_xmodule, "parseGCT", [1], string2979);
          var var_gctDict = call2980;
          setLineNumber(935);    // compilenode block
          var block2981 = new GraceBlock(this, 935, 1);
          setLineNumber(1);    // compilenode identifier
          block2981.real = function(var_mn) {
            setLineNumber(936);    // compilenode identifier
            var call2982 = callmethodChecked(var_preludeScope, "addName", [1], var_mn);
            return call2982;
          };
          setLineNumber(935);    // compilenode string
          var string2983 = new GraceString("public");
          var block2984 = new GraceBlock(this, 935, 0);
          block2984.real = function() {
            var call2985 = callmethodChecked(var_prelude, "emptySequence", [0]);
            return call2985;
          };
          var call2986 = callmethodChecked(var_gctDict, "at()ifAbsent", [1, 1], string2983, block2984);
          var call2987 = callmethodChecked(call2986, "do", [1], block2981);
          setLineNumber(938);    // compilenode block
          var block2988 = new GraceBlock(this, 938, 1);
          setLineNumber(1);    // compilenode identifier
          block2988.real = function(var_mn) {
            setLineNumber(939);    // compilenode identifier
            var call2989 = callmethodChecked(var_preludeScope, "addName", [1], var_mn);
            return call2989;
          };
          setLineNumber(938);    // compilenode string
          var string2990 = new GraceString("confidential");
          var block2991 = new GraceBlock(this, 938, 0);
          block2991.real = function() {
            var call2992 = callmethodChecked(var_prelude, "emptySequence", [0]);
            return call2992;
          };
          var call2993 = callmethodChecked(var_gctDict, "at()ifAbsent", [1, 1], string2990, block2991);
          var call2994 = callmethodChecked(call2993, "do", [1], block2988);
          setLineNumber(941);    // compilenode identifier
          onSelf = true;
          var call2995 = callmethodChecked(this, "processGCT", [2], var_gctDict, var_preludeScope);
          if2977 = call2995;
        }
        if2945 = if2977;
      }
      return if2945;
    };
    func2779.paramCounts = [1];
    this.methods["setupContext"] = func2779;
    func2779.definitionLine = 841;
    func2779.definitionModule = "identifierresolution";
    setLineNumber(946);    // compilenode method
    var func2996 = function(argcv) {    // method checkTraitBody(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_traitObjNode = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for checkTraitBody(1)"));
      setModuleName("identifierresolution");
      setLineNumber(948);    // compilenode block
      var block2997 = new GraceBlock(this, 948, 1);
      setLineNumber(1);    // compilenode identifier
      block2997.real = function(var_node) {
        var if2998 = GraceDone;
        setLineNumber(949);    // compilenode identifier
        var call2999 = callmethodChecked(var_node, "isLegalInTrait", [0]);
        var call3000 = callmethodChecked(call2999, "not", [0]);
        if (Grace_isTrue(call3000)) {
          setLineNumber(950);    // compilenode identifier
          var call3001 = callmethodChecked(var_node, "statementName", [0]);
          var var_badThing = call3001;
          setLineNumber(951);    // compilenode identifier
          onSelf = true;
          var call3002 = callmethodChecked(this, "articleFor", [1], var_badThing);
          var var_article = call3002;
          setLineNumber(953);    // compilenode string
          var string3003 = new GraceString(")");
          var call3005 = callmethodChecked(var_traitObjNode, "line", [0]);
          var string3007 = new GraceString("a trait (defined on line ");
          var opresult3009 = callmethodChecked(string3007, "++", [1], call3005);
          var opresult3011 = callmethodChecked(opresult3009, "++", [1], string3003);
          setLineNumber(952);    // compilenode string
          var string3013 = new GraceString(" cannot appear in ");
          var string3016 = new GraceString(" ");
          var string3019 = new GraceString("");
          var opresult3021 = callmethodChecked(string3019, "++", [1], var_article);
          var opresult3023 = callmethodChecked(opresult3021, "++", [1], string3016);
          var opresult3025 = callmethodChecked(opresult3023, "++", [1], var_badThing);
          var opresult3027 = callmethodChecked(opresult3025, "++", [1], string3013);
          var opresult3029 = callmethodChecked(opresult3027, "++", [1], opresult3011);
          setLineNumber(954);    // compilenode identifier
          var call3030 = callmethodChecked(var_node, "line", [0]);
          setLineNumber(952);    // compilenode identifier
          var call3031 = callmethodChecked(var_errormessages, "syntaxError()atLine", [1, 1], opresult3029, call3030);
          if2998 = call3031;
        }
        return if2998;
      };
      setLineNumber(948);    // compilenode identifier
      var call3032 = callmethodChecked(var_traitObjNode, "value", [0]);
      var call3033 = callmethodChecked(call3032, "do", [1], block2997);
      return call3033;
    };
    func2996.paramCounts = [1];
    this.methods["checkTraitBody"] = func2996;
    func2996.definitionLine = 946;
    func2996.definitionModule = "identifierresolution";
    setLineNumber(959);    // compilenode method
    var func3034 = function(argcv) {    // method articleFor(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_str = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for articleFor(1)"));
      setModuleName("identifierresolution");
      var if3035 = GraceDone;
      setLineNumber(961);    // compilenode identifier
      var call3036 = callmethodChecked(var_str, "first", [0]);
      var string3037 = new GraceString("aeioAEIO");
      var call3038 = callmethodChecked(string3037, "contains", [1], call3036);
      if (Grace_isTrue(call3038)) {
        var string3039 = new GraceString("an");
        if3035 = string3039;
      } else {
        var string3040 = new GraceString("a");
        if3035 = string3040;
      }
      return if3035;
    };
    func3034.paramCounts = [1];
    this.methods["articleFor"] = func3034;
    func3034.definitionLine = 959;
    func3034.definitionModule = "identifierresolution";
    setLineNumber(964);    // compilenode method
    var func3041 = function(argcv) {    // method buildSymbolTableFor(1)ancestors(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_topNode = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for buildSymbolTableFor (arg list 1) of buildSymbolTableFor(1)ancestors(1)"));
      var var_topChain = arguments[curarg];
      curarg++;
      if (argcv[1] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ancestors (arg list 2) of buildSymbolTableFor(1)ancestors(1)"));
      setModuleName("identifierresolution");
      setLineNumber(965);    // compilenode object
      var obj3042 = Grace_allocObject(null, "symbolTableVis");
      obj3042.definitionModule = "identifierresolution";
      obj3042.definitionLine = 965;
      obj3042.outer = this;
      var reader_identifierresolution_outer3043 = function() {
        return this.outer;
      };
      obj3042.methods["outer"] = reader_identifierresolution_outer3043;
      var obj_init_3042 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj3042;
        var func3044 = function(argcv) {    // method visitBind(1)up(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitBind (arg list 1) of visitBind(1)up(1)"));
          var var_as = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for up (arg list 2) of visitBind(1)up(1)"));
          setModuleName("identifierresolution");
          setLineNumber(969);    // compilenode identifier
          var call3045 = callmethodChecked(var_as, "parent", [0]);
          var call3046 = callmethodChecked(call3045, "scope", [0]);
          var call3047 = callmethodChecked(var_o, "scope:=", [1], call3046);
          setLineNumber(970);    // compilenode identifier
          var call3048 = callmethodChecked(var_o, "dest", [0]);
          var var_lValue = call3048;
          var if3049 = GraceDone;
          setLineNumber(971);    // compilenode string
          var string3050 = new GraceString("identifier");
          var call3052 = callmethodChecked(var_lValue, "kind", [0]);
          var opresult3054 = callmethodChecked(call3052, "==", [1], string3050);
          if (Grace_isTrue(opresult3054)) {
            setLineNumber(972);    // compilenode identifier
            var call3055 = callmethodChecked(var_lValue, "isAssigned:=", [1], GraceTrue);
            if3049 = call3055;
          }
          setLineNumber(974);    // compilenode identifier
          return GraceTrue;
        };
        func3044.paramCounts = [1, 1];
        obj3042.methods["visitBind()up"] = func3044;
        func3044.definitionLine = 968;
        func3044.definitionModule = "identifierresolution";
        var func3056 = function(argcv) {    // method visitCall(1)up(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitCall (arg list 1) of visitCall(1)up(1)"));
          var var_as = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for up (arg list 2) of visitCall(1)up(1)"));
          setModuleName("identifierresolution");
          setLineNumber(977);    // compilenode identifier
          var call3057 = callmethodChecked(var_as, "parent", [0]);
          var call3058 = callmethodChecked(call3057, "scope", [0]);
          var call3059 = callmethodChecked(var_o, "scope:=", [1], call3058);
          setLineNumber(978);    // compilenode identifier
          var call3060 = callmethodChecked(var_o, "value", [0]);
          var var_callee = call3060;
          var if3061 = GraceDone;
          setLineNumber(979);    // compilenode string
          var string3062 = new GraceString("identifier");
          var call3064 = callmethodChecked(var_callee, "kind", [0]);
          var opresult3066 = callmethodChecked(call3064, "==", [1], string3062);
          if (Grace_isTrue(opresult3066)) {
            setLineNumber(980);    // compilenode identifier
            var call3067 = callmethodChecked(var_callee, "inRequest:=", [1], GraceTrue);
            if3061 = call3067;
          }
          setLineNumber(982);    // compilenode identifier
          return GraceTrue;
        };
        func3056.paramCounts = [1, 1];
        obj3042.methods["visitCall()up"] = func3056;
        func3056.definitionLine = 976;
        func3056.definitionModule = "identifierresolution";
        var func3068 = function(argcv) {    // method visitBlock(1)up(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitBlock (arg list 1) of visitBlock(1)up(1)"));
          var var_as = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for up (arg list 2) of visitBlock(1)up(1)"));
          setModuleName("identifierresolution");
          setLineNumber(985);    // compilenode identifier
          var call3069 = callmethodChecked(var_as, "parent", [0]);
          var call3070 = callmethodChecked(call3069, "scope", [0]);
          var string3071 = new GraceString("block");
          var call3072 = callmethodChecked(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call3073 = callmethodChecked(call3072, "newScopeIn()kind", [1, 1], call3070, string3071);
          var call3074 = callmethodChecked(var_o, "scope:=", [1], call3073);
          setLineNumber(986);    // compilenode identifier
          return GraceTrue;
        };
        func3068.paramCounts = [1, 1];
        obj3042.methods["visitBlock()up"] = func3068;
        func3068.definitionLine = 984;
        func3068.definitionModule = "identifierresolution";
        var func3075 = function(argcv) {    // method visitDefDec(1)up(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitDefDec (arg list 1) of visitDefDec(1)up(1)"));
          var var_as = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for up (arg list 2) of visitDefDec(1)up(1)"));
          setModuleName("identifierresolution");
          setLineNumber(989);    // compilenode identifier
          var call3076 = callmethodChecked(var_as, "parent", [0]);
          var call3077 = callmethodChecked(call3076, "scope", [0]);
          var call3078 = callmethodChecked(var_o, "scope:=", [1], call3077);
          var if3079 = GraceDone;
          setLineNumber(990);    // compilenode identifier
          var call3080 = callmethodChecked(var_o, "startToken", [0]);
          var opresult3083 = callmethodChecked(GraceFalse, "\u2260", [1], call3080);
          if (Grace_isTrue(opresult3083)) {
            setLineNumber(991);    // compilenode identifier
            var call3084 = callmethodChecked(var_o, "nameString", [0]);
            var call3085 = callmethodChecked(var_o, "startToken", [0]);
            var call3086 = callmethodChecked(var_as, "parent", [0]);
            var call3087 = callmethodChecked(call3086, "scope", [0]);
            var call3088 = callmethodChecked(call3087, "elementTokens", [0]);
            var call3089 = callmethodChecked(call3088, "put", [2], call3084, call3085);
            if3079 = call3089;
          }
          var if3090 = GraceDone;
          setLineNumber(993);    // compilenode identifier
          var call3091 = callmethodChecked(var_o, "value", [0]);
          var call3092 = callmethodChecked(call3091, "isObject", [0]);
          if (Grace_isTrue(call3092)) {
            var call3093 = callmethodChecked(var_o, "nameString", [0]);
            var call3094 = callmethodChecked(var_o, "value", [0]);
            var call3095 = callmethodChecked(call3094, "name:=", [1], call3093);
            if3090 = call3095;
          }
          setLineNumber(994);    // compilenode identifier
          return GraceTrue;
        };
        func3075.paramCounts = [1, 1];
        obj3042.methods["visitDefDec()up"] = func3075;
        func3075.definitionLine = 988;
        func3075.definitionModule = "identifierresolution";
        var func3096 = function(argcv) {    // method visitIdentifier(1)up(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitIdentifier (arg list 1) of visitIdentifier(1)up(1)"));
          var var_as = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for up (arg list 2) of visitIdentifier(1)up(1)"));
          setModuleName("identifierresolution");
          setLineNumber(997);    // compilenode identifier
          var call3097 = callmethodChecked(var_as, "parent", [0]);
          var call3098 = callmethodChecked(call3097, "scope", [0]);
          var var_scope = call3098;
          setLineNumber(998);    // compilenode identifier
          var call3099 = callmethodChecked(var_o, "scope:=", [1], var_scope);
          var if3100 = GraceDone;
          setLineNumber(999);    // compilenode identifier
          var call3101 = callmethodChecked(var_o, "isBindingOccurrence", [0]);
          if (Grace_isTrue(call3101)) {
            var if3102 = GraceDone;
            setLineNumber(1000);    // compilenode block
            var block3103 = new GraceBlock(this, 1000, 0);
            block3103.real = function() {
              var call3104 = callmethodChecked(var_o, "wildcard", [0]);
              var call3105 = callmethodChecked(call3104, "not", [0]);
              return call3105;
            };
            var call3107 = callmethodChecked(var_o, "isDeclaredByParent", [0]);
            var call3108 = callmethodChecked(call3107, "not", [0]);
            var opresult3110 = callmethodChecked(call3108, "&&", [1], block3103);
            if (Grace_isTrue(opresult3110)) {
              setLineNumber(1001);    // compilenode call
              var call3111 = callmethodChecked(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call3112 = callmethodChecked(call3111, "checkForReservedName", [1], var_o);
              setLineNumber(1002);    // compilenode identifier
              var call3113 = callmethodChecked(var_o, "declarationKindWithAncestors", [1], var_as);
              var var_kind = call3113;
              var if3114 = GraceDone;
              setLineNumber(1003);    // compilenode identifier
              var call3115 = callmethodChecked(var_kind, "isParameter", [0]);
              if (Grace_isTrue(call3115)) {
                var if3116 = GraceDone;
                setLineNumber(1004);    // compilenode string
                var string3117 = new GraceString("object");
                var call3119 = callmethodChecked(var_scope, "variety", [0]);
                var opresult3121 = callmethodChecked(call3119, "==", [1], string3117);
                if (Grace_isTrue(opresult3121)) {
                  setLineNumber(1009);    // compilenode identifier
                  var call3122 = callmethodChecked(var_scope, "parent", [0]);
                  var_scope = call3122;
                  var if3123 = GraceDone;
                  setLineNumber(1010);    // compilenode string
                  var string3124 = new GraceString("method");
                  var call3126 = callmethodChecked(var_scope, "variety", [0]);
                  var opresult3128 = callmethodChecked(call3126, "\u2260", [1], string3124);
                  if (Grace_isTrue(opresult3128)) {
                    setLineNumber(1011);    // compilenode string
                    var string3129 = new GraceString("object scope not in method scope");
                    var call3130 = callmethodChecked(var_prelude, "ProgrammingError", [0]);
                    var call3131 = callmethodChecked(call3130, "raise", [1], string3129);
                    if3123 = call3131;
                  }
                  if3116 = if3123;
                }
                if3114 = if3116;
              }
              setLineNumber(1015);    // compilenode identifier
              var call3132 = callmethodChecked(var_scope, "addNode()as", [1, 1], var_o, var_kind);
              if3102 = call3132;
            }
            if3100 = if3102;
          } else {
            var if3133 = GraceDone;
            setLineNumber(1017);    // compilenode identifier
            var call3134 = callmethodChecked(var_o, "wildcard", [0]);
            if (Grace_isTrue(call3134)) {
              setLineNumber(1018);    // compilenode string
              var string3135 = new GraceString("'_' cannot be used in an expression");
              setLineNumber(1019);    // compilenode identifier
              var call3136 = callmethodChecked(var_o, "line", [0]);
              var call3137 = callmethodChecked(var_o, "linePos", [0]);
              var call3138 = callmethodChecked(var_o, "linePos", [0]);
              setLineNumber(1018);    // compilenode identifier
              var call3139 = callmethodChecked(var_errormessages, "syntaxError()atRange", [1, 3], string3135, call3136, call3137, call3138);
              if3133 = call3139;
            }
            if3100 = if3133;
          }
          setLineNumber(1021);    // compilenode identifier
          return GraceTrue;
        };
        func3096.paramCounts = [1, 1];
        obj3042.methods["visitIdentifier()up"] = func3096;
        func3096.definitionLine = 996;
        func3096.definitionModule = "identifierresolution";
        var func3140 = function(argcv) {    // method visitImport(1)up(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitImport (arg list 1) of visitImport(1)up(1)"));
          var var_as = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for up (arg list 2) of visitImport(1)up(1)"));
          setModuleName("identifierresolution");
          setLineNumber(1024);    // compilenode identifier
          var call3141 = callmethodChecked(var_as, "parent", [0]);
          var call3142 = callmethodChecked(call3141, "scope", [0]);
          var call3143 = callmethodChecked(var_o, "scope:=", [1], call3142);
          setLineNumber(1025);    // compilenode identifier
          var call3144 = callmethodChecked(var_xmodule, "checkExternalModule", [1], var_o);
          setLineNumber(1026);    // compilenode identifier
          var call3145 = callmethodChecked(var_o, "path", [0]);
          var call3146 = callmethodChecked(var_xmodule, "parseGCT", [1], call3145);
          var var_gct = call3146;
          setLineNumber(1027);    // compilenode identifier
          var call3147 = callmethodChecked(var_as, "parent", [0]);
          var call3148 = callmethodChecked(call3147, "scope", [0]);
          var string3149 = new GraceString("module");
          var call3150 = callmethodChecked(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call3151 = callmethodChecked(call3150, "newScopeIn()kind", [1, 1], call3148, string3149);
          var var_otherModule = call3151;
          setLineNumber(1028);    // compilenode identifier
          var call3152 = callmethodChecked(var_otherModule, "node:=", [1], var_o);
          setLineNumber(1029);    // compilenode call
          var call3153 = callmethodChecked(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call3154 = callmethodChecked(call3153, "processGCT", [2], var_gct, var_otherModule);
          setLineNumber(1030);    // compilenode identifier
          var call3155 = callmethodChecked(var_o, "nameString", [0]);
          var call3156 = callmethodChecked(var_o, "scope", [0]);
          var call3157 = callmethodChecked(call3156, "at()putScope", [1, 1], call3155, var_otherModule);
          setLineNumber(1031);    // compilenode identifier
          return GraceTrue;
        };
        func3140.paramCounts = [1, 1];
        obj3042.methods["visitImport()up"] = func3140;
        func3140.definitionLine = 1023;
        func3140.definitionModule = "identifierresolution";
        var func3158 = function(argcv) {    // method visitInherits(1)up(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitInherits (arg list 1) of visitInherits(1)up(1)"));
          var var_as = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for up (arg list 2) of visitInherits(1)up(1)"));
          setModuleName("identifierresolution");
          setLineNumber(1034);    // compilenode identifier
          var call3159 = callmethodChecked(var_as, "parent", [0]);
          var call3160 = callmethodChecked(call3159, "scope", [0]);
          var call3161 = callmethodChecked(var_o, "scope:=", [1], call3160);
          var if3162 = GraceDone;
          setLineNumber(1035);    // compilenode identifier
          var call3163 = callmethodChecked(var_o, "isUse", [0]);
          if (Grace_isTrue(call3163)) {
            var if3164 = GraceDone;
            setLineNumber(1036);    // compilenode identifier
            var call3165 = callmethodChecked(var_as, "parent", [0]);
            var call3166 = callmethodChecked(call3165, "canUse", [0]);
            var call3167 = callmethodChecked(call3166, "not", [0]);
            if (Grace_isTrue(call3167)) {
              setLineNumber(1038);    // compilenode string
              var string3168 = new GraceString("be inside an object, class, or trait");
              setLineNumber(1037);    // compilenode string
              var string3170 = new GraceString("use statements must ");
              var opresult3172 = callmethodChecked(string3170, "++", [1], string3168);
              setLineNumber(1039);    // compilenode identifier
              var call3173 = callmethodChecked(var_o, "line", [0]);
              var call3174 = callmethodChecked(var_o, "linePos", [0]);
              var call3176 = callmethodChecked(var_o, "linePos", [0]);
              var opresult3178 = callmethodChecked(call3176, "+", [1], new GraceNum(3));
              setLineNumber(1037);    // compilenode identifier
              var call3179 = callmethodChecked(var_errormessages, "syntaxError()atRange", [1, 3], opresult3172, call3173, call3174, opresult3178);
              if3164 = call3179;
            }
            if3162 = if3164;
          } else {
            var if3180 = GraceDone;
            setLineNumber(1042);    // compilenode identifier
            var call3181 = callmethodChecked(var_as, "parent", [0]);
            var call3182 = callmethodChecked(call3181, "canInherit", [0]);
            var call3183 = callmethodChecked(call3182, "not", [0]);
            if (Grace_isTrue(call3183)) {
              setLineNumber(1044);    // compilenode string
              var string3184 = new GraceString("be inside an object or class; a trait cannot inherit");
              setLineNumber(1043);    // compilenode string
              var string3186 = new GraceString("inherit statements must ");
              var opresult3188 = callmethodChecked(string3186, "++", [1], string3184);
              setLineNumber(1045);    // compilenode identifier
              var call3189 = callmethodChecked(var_o, "line", [0]);
              var call3190 = callmethodChecked(var_o, "linePos", [0]);
              var call3192 = callmethodChecked(var_o, "linePos", [0]);
              var opresult3194 = callmethodChecked(call3192, "+", [1], new GraceNum(7));
              setLineNumber(1043);    // compilenode identifier
              var call3195 = callmethodChecked(var_errormessages, "syntaxError()atRange", [1, 3], opresult3188, call3189, call3190, opresult3194);
              if3180 = call3195;
            }
            if3162 = if3180;
          }
          setLineNumber(1048);    // compilenode identifier
          return GraceTrue;
        };
        func3158.paramCounts = [1, 1];
        obj3042.methods["visitInherits()up"] = func3158;
        func3158.definitionLine = 1033;
        func3158.definitionModule = "identifierresolution";
        var func3196 = function(argcv) {    // method visitMethod(1)up(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitMethod (arg list 1) of visitMethod(1)up(1)"));
          var var_as = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for up (arg list 2) of visitMethod(1)up(1)"));
          setModuleName("identifierresolution");
          setLineNumber(1051);    // compilenode identifier
          var call3197 = callmethodChecked(var_as, "parent", [0]);
          var call3198 = callmethodChecked(call3197, "scope", [0]);
          var var_surroundingScope = call3198;
          var if3199 = GraceDone;
          setLineNumber(1052);    // compilenode identifier
          var call3200 = callmethodChecked(var_surroundingScope, "isObjectScope", [0]);
          var call3201 = callmethodChecked(call3200, "not", [0]);
          if (Grace_isTrue(call3201)) {
            setLineNumber(1058);    // compilenode string
            var string3202 = new GraceString(" inside an object");
            setLineNumber(1057);    // compilenode string
            var string3204 = new GraceString("class declarations are permitted only");
            var opresult3206 = callmethodChecked(string3204, "++", [1], string3202);
            setLineNumber(1058);    // compilenode identifier
            var call3207 = callmethodChecked(var_o, "line", [0]);
            var call3208 = callmethodChecked(var_o, "linePos", [0]);
            var call3210 = callmethodChecked(var_o, "linePos", [0]);
            var opresult3212 = callmethodChecked(call3210, "+", [1], new GraceNum(4));
            setLineNumber(1057);    // compilenode identifier
            var call3213 = callmethodChecked(var_errormessages, "syntaxError()atRange", [1, 3], opresult3206, call3207, call3208, opresult3212);
            if3199 = call3213;
          }
          setLineNumber(1060);    // compilenode identifier
          var call3214 = callmethodChecked(var_o, "value", [0]);
          var var_ident = call3214;
          setLineNumber(1061);    // compilenode call
          var call3215 = callmethodChecked(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call3216 = callmethodChecked(call3215, "checkForReservedName", [1], var_ident);
          setLineNumber(1062);    // compilenode identifier
          var call3217 = callmethodChecked(var_k, "methdec", [0]);
          var call3218 = callmethodChecked(var_surroundingScope, "addNode()as", [1, 1], var_ident, call3217);
          setLineNumber(1063);    // compilenode identifier
          var call3219 = callmethodChecked(var_ident, "isDeclaredByParent:=", [1], GraceTrue);
          setLineNumber(1064);    // compilenode string
          var string3220 = new GraceString("method");
          var call3221 = callmethodChecked(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call3222 = callmethodChecked(call3221, "newScopeIn()kind", [1, 1], var_surroundingScope, string3220);
          var call3223 = callmethodChecked(var_o, "scope:=", [1], call3222);
          var if3224 = GraceDone;
          setLineNumber(1065);    // compilenode identifier
          var call3225 = callmethodChecked(var_o, "returnsObject", [0]);
          if (Grace_isTrue(call3225)) {
            setLineNumber(1066);    // compilenode identifier
            var call3226 = callmethodChecked(var_o, "isFresh:=", [1], GraceTrue);
            if3224 = call3226;
          }
          setLineNumber(1068);    // compilenode identifier
          return GraceTrue;
        };
        func3196.paramCounts = [1, 1];
        obj3042.methods["visitMethod()up"] = func3196;
        func3196.definitionLine = 1050;
        func3196.definitionModule = "identifierresolution";
        var func3227 = function(argcv) {    // method visitMethodType(1)up(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitMethodType (arg list 1) of visitMethodType(1)up(1)"));
          var var_as = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for up (arg list 2) of visitMethodType(1)up(1)"));
          setModuleName("identifierresolution");
          setLineNumber(1071);    // compilenode identifier
          var call3228 = callmethodChecked(var_as, "parent", [0]);
          var call3229 = callmethodChecked(call3228, "scope", [0]);
          var string3230 = new GraceString("methodtype");
          var call3231 = callmethodChecked(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call3232 = callmethodChecked(call3231, "newScopeIn()kind", [1, 1], call3229, string3230);
          var call3233 = callmethodChecked(var_o, "scope:=", [1], call3232);
          setLineNumber(1074);    // compilenode identifier
          return GraceTrue;
        };
        func3227.paramCounts = [1, 1];
        obj3042.methods["visitMethodType()up"] = func3227;
        func3227.definitionLine = 1070;
        func3227.definitionModule = "identifierresolution";
        var func3234 = function(argcv) {    // method visitObject(1)up(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitObject (arg list 1) of visitObject(1)up(1)"));
          var var_as = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for up (arg list 2) of visitObject(1)up(1)"));
          setModuleName("identifierresolution");
          setLineNumber(1077);    // compilenode identifier
          var call3235 = callmethodChecked(var_as, "parent", [0]);
          var var_myParent = call3235;
          setLineNumber(1078);    // compilenode identifier
          var call3236 = callmethodChecked(var_myParent, "scope", [0]);
          var string3237 = new GraceString("object");
          var call3238 = callmethodChecked(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call3239 = callmethodChecked(call3238, "newScopeIn()kind", [1, 1], call3236, string3237);
          var call3240 = callmethodChecked(var_o, "scope:=", [1], call3239);
          var if3241 = GraceDone;
          setLineNumber(1079);    // compilenode identifier
          var call3242 = callmethodChecked(var_o, "inTrait", [0]);
          if (Grace_isTrue(call3242)) {
            var call3243 = callmethodChecked(superDepth, "outer", [0]);
            onOuter = true;
            onSelf = true;
            var call3244 = callmethodChecked(call3243, "checkTraitBody", [1], var_o);
            if3241 = call3244;
          }
          var if3245 = GraceDone;
          setLineNumber(1080);    // compilenode string
          var string3246 = new GraceString("defdec");
          var call3248 = callmethodChecked(var_myParent, "kind", [0]);
          var opresult3250 = callmethodChecked(call3248, "==", [1], string3246);
          if (Grace_isTrue(opresult3250)) {
            setLineNumber(1081);    // compilenode identifier
            var call3251 = callmethodChecked(var_myParent, "nameString", [0]);
            var call3252 = callmethodChecked(var_o, "name:=", [1], call3251);
            if3245 = call3252;
          }
          setLineNumber(1083);    // compilenode identifier
          return GraceTrue;
        };
        func3234.paramCounts = [1, 1];
        obj3042.methods["visitObject()up"] = func3234;
        func3234.definitionLine = 1076;
        func3234.definitionModule = "identifierresolution";
        var func3253 = function(argcv) {    // method visitModule(1)up(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitModule (arg list 1) of visitModule(1)up(1)"));
          var var_as = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for up (arg list 2) of visitModule(1)up(1)"));
          setModuleName("identifierresolution");
          // visitModule(1)up(1) is a simple accessor - elide try ... catch
          setLineNumber(1087);    // compilenode identifier
          return GraceTrue;
        };
        func3253.paramCounts = [1, 1];
        obj3042.methods["visitModule()up"] = func3253;
        func3253.definitionLine = 1085;
        func3253.definitionModule = "identifierresolution";
        var func3254 = function(argcv) {    // method visitTypeDec(1)up(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitTypeDec (arg list 1) of visitTypeDec(1)up(1)"));
          var var_as = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for up (arg list 2) of visitTypeDec(1)up(1)"));
          setModuleName("identifierresolution");
          setLineNumber(1090);    // compilenode identifier
          var call3255 = callmethodChecked(var_as, "parent", [0]);
          var call3256 = callmethodChecked(call3255, "scope", [0]);
          var var_enclosingScope = call3256;
          setLineNumber(1091);    // compilenode identifier
          var call3257 = callmethodChecked(var_o, "name", [0]);
          var call3258 = callmethodChecked(var_k, "typedec", [0]);
          var call3259 = callmethodChecked(var_enclosingScope, "addNode()as", [1, 1], call3257, call3258);
          setLineNumber(1092);    // compilenode identifier
          var call3260 = callmethodChecked(var_o, "name", [0]);
          var call3261 = callmethodChecked(call3260, "isDeclaredByParent:=", [1], GraceTrue);
          setLineNumber(1093);    // compilenode string
          var string3262 = new GraceString("typedec");
          var call3263 = callmethodChecked(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call3264 = callmethodChecked(call3263, "newScopeIn()kind", [1, 1], var_enclosingScope, string3262);
          var call3265 = callmethodChecked(var_o, "scope:=", [1], call3264);
          setLineNumber(1097);    // compilenode identifier
          return GraceTrue;
        };
        func3254.paramCounts = [1, 1];
        obj3042.methods["visitTypeDec()up"] = func3254;
        func3254.definitionLine = 1089;
        func3254.definitionModule = "identifierresolution";
        var func3266 = function(argcv) {    // method visitTypeLiteral(1)up(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitTypeLiteral (arg list 1) of visitTypeLiteral(1)up(1)"));
          var var_as = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for up (arg list 2) of visitTypeLiteral(1)up(1)"));
          setModuleName("identifierresolution");
          setLineNumber(1100);    // compilenode identifier
          var call3267 = callmethodChecked(var_as, "parent", [0]);
          var call3268 = callmethodChecked(call3267, "scope", [0]);
          var string3269 = new GraceString("type");
          var call3270 = callmethodChecked(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call3271 = callmethodChecked(call3270, "newScopeIn()kind", [1, 1], call3268, string3269);
          var call3272 = callmethodChecked(var_o, "scope:=", [1], call3271);
          setLineNumber(1101);    // compilenode identifier
          return GraceTrue;
        };
        func3266.paramCounts = [1, 1];
        obj3042.methods["visitTypeLiteral()up"] = func3266;
        func3266.definitionLine = 1099;
        func3266.definitionModule = "identifierresolution";
        var func3273 = function(argcv) {    // method visitTypeParameters(1)up(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitTypeParameters (arg list 1) of visitTypeParameters(1)up(1)"));
          var var_as = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for up (arg list 2) of visitTypeParameters(1)up(1)"));
          setModuleName("identifierresolution");
          setLineNumber(1103);    // compilenode identifier
          var call3274 = callmethodChecked(var_as, "parent", [0]);
          var call3275 = callmethodChecked(call3274, "scope", [0]);
          var call3276 = callmethodChecked(var_o, "scope:=", [1], call3275);
          return GraceTrue;
        };
        func3273.paramCounts = [1, 1];
        obj3042.methods["visitTypeParameters()up"] = func3273;
        func3273.definitionLine = 1103;
        func3273.definitionModule = "identifierresolution";
        var func3277 = function(argcv) {    // method visitIf(1)up(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitIf (arg list 1) of visitIf(1)up(1)"));
          var var_as = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for up (arg list 2) of visitIf(1)up(1)"));
          setModuleName("identifierresolution");
          setLineNumber(1104);    // compilenode identifier
          var call3278 = callmethodChecked(var_as, "parent", [0]);
          var call3279 = callmethodChecked(call3278, "scope", [0]);
          var call3280 = callmethodChecked(var_o, "scope:=", [1], call3279);
          return GraceTrue;
        };
        func3277.paramCounts = [1, 1];
        obj3042.methods["visitIf()up"] = func3277;
        func3277.definitionLine = 1104;
        func3277.definitionModule = "identifierresolution";
        var func3281 = function(argcv) {    // method visitMatchCase(1)up(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitMatchCase (arg list 1) of visitMatchCase(1)up(1)"));
          var var_as = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for up (arg list 2) of visitMatchCase(1)up(1)"));
          setModuleName("identifierresolution");
          setLineNumber(1105);    // compilenode identifier
          var call3282 = callmethodChecked(var_as, "parent", [0]);
          var call3283 = callmethodChecked(call3282, "scope", [0]);
          var call3284 = callmethodChecked(var_o, "scope:=", [1], call3283);
          return GraceTrue;
        };
        func3281.paramCounts = [1, 1];
        obj3042.methods["visitMatchCase()up"] = func3281;
        func3281.definitionLine = 1105;
        func3281.definitionModule = "identifierresolution";
        var func3285 = function(argcv) {    // method visitTryCatch(1)up(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitTryCatch (arg list 1) of visitTryCatch(1)up(1)"));
          var var_as = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for up (arg list 2) of visitTryCatch(1)up(1)"));
          setModuleName("identifierresolution");
          setLineNumber(1106);    // compilenode identifier
          var call3286 = callmethodChecked(var_as, "parent", [0]);
          var call3287 = callmethodChecked(call3286, "scope", [0]);
          var call3288 = callmethodChecked(var_o, "scope:=", [1], call3287);
          return GraceTrue;
        };
        func3285.paramCounts = [1, 1];
        obj3042.methods["visitTryCatch()up"] = func3285;
        func3285.definitionLine = 1106;
        func3285.definitionModule = "identifierresolution";
        var func3289 = function(argcv) {    // method visitSignaturePart(1)up(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitSignaturePart (arg list 1) of visitSignaturePart(1)up(1)"));
          var var_as = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for up (arg list 2) of visitSignaturePart(1)up(1)"));
          setModuleName("identifierresolution");
          setLineNumber(1107);    // compilenode identifier
          var call3290 = callmethodChecked(var_as, "parent", [0]);
          var call3291 = callmethodChecked(call3290, "scope", [0]);
          var call3292 = callmethodChecked(var_o, "scope:=", [1], call3291);
          return GraceTrue;
        };
        func3289.paramCounts = [1, 1];
        obj3042.methods["visitSignaturePart()up"] = func3289;
        func3289.definitionLine = 1107;
        func3289.definitionModule = "identifierresolution";
        var func3293 = function(argcv) {    // method visitArray(1)up(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitArray (arg list 1) of visitArray(1)up(1)"));
          var var_as = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for up (arg list 2) of visitArray(1)up(1)"));
          setModuleName("identifierresolution");
          setLineNumber(1108);    // compilenode identifier
          var call3294 = callmethodChecked(var_as, "parent", [0]);
          var call3295 = callmethodChecked(call3294, "scope", [0]);
          var call3296 = callmethodChecked(var_o, "scope:=", [1], call3295);
          return GraceTrue;
        };
        func3293.paramCounts = [1, 1];
        obj3042.methods["visitArray()up"] = func3293;
        func3293.definitionLine = 1108;
        func3293.definitionModule = "identifierresolution";
        var func3297 = function(argcv) {    // method visitMember(1)up(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitMember (arg list 1) of visitMember(1)up(1)"));
          var var_as = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for up (arg list 2) of visitMember(1)up(1)"));
          setModuleName("identifierresolution");
          setLineNumber(1109);    // compilenode identifier
          var call3298 = callmethodChecked(var_as, "parent", [0]);
          var call3299 = callmethodChecked(call3298, "scope", [0]);
          var call3300 = callmethodChecked(var_o, "scope:=", [1], call3299);
          return GraceTrue;
        };
        func3297.paramCounts = [1, 1];
        obj3042.methods["visitMember()up"] = func3297;
        func3297.definitionLine = 1109;
        func3297.definitionModule = "identifierresolution";
        var func3301 = function(argcv) {    // method visitGeneric(1)up(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitGeneric (arg list 1) of visitGeneric(1)up(1)"));
          var var_as = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for up (arg list 2) of visitGeneric(1)up(1)"));
          setModuleName("identifierresolution");
          setLineNumber(1110);    // compilenode identifier
          var call3302 = callmethodChecked(var_as, "parent", [0]);
          var call3303 = callmethodChecked(call3302, "scope", [0]);
          var call3304 = callmethodChecked(var_o, "scope:=", [1], call3303);
          return GraceTrue;
        };
        func3301.paramCounts = [1, 1];
        obj3042.methods["visitGeneric()up"] = func3301;
        func3301.definitionLine = 1110;
        func3301.definitionModule = "identifierresolution";
        var func3305 = function(argcv) {    // method visitString(1)up(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitString (arg list 1) of visitString(1)up(1)"));
          var var_as = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for up (arg list 2) of visitString(1)up(1)"));
          setModuleName("identifierresolution");
          setLineNumber(1111);    // compilenode identifier
          var call3306 = callmethodChecked(var_as, "parent", [0]);
          var call3307 = callmethodChecked(call3306, "scope", [0]);
          var call3308 = callmethodChecked(var_o, "scope:=", [1], call3307);
          return GraceTrue;
        };
        func3305.paramCounts = [1, 1];
        obj3042.methods["visitString()up"] = func3305;
        func3305.definitionLine = 1111;
        func3305.definitionModule = "identifierresolution";
        var func3309 = function(argcv) {    // method visitNum(1)up(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitNum (arg list 1) of visitNum(1)up(1)"));
          var var_as = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for up (arg list 2) of visitNum(1)up(1)"));
          setModuleName("identifierresolution");
          setLineNumber(1112);    // compilenode identifier
          var call3310 = callmethodChecked(var_as, "parent", [0]);
          var call3311 = callmethodChecked(call3310, "scope", [0]);
          var call3312 = callmethodChecked(var_o, "scope:=", [1], call3311);
          return GraceTrue;
        };
        func3309.paramCounts = [1, 1];
        obj3042.methods["visitNum()up"] = func3309;
        func3309.definitionLine = 1112;
        func3309.definitionModule = "identifierresolution";
        var func3313 = function(argcv) {    // method visitOp(1)up(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitOp (arg list 1) of visitOp(1)up(1)"));
          var var_as = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for up (arg list 2) of visitOp(1)up(1)"));
          setModuleName("identifierresolution");
          setLineNumber(1113);    // compilenode identifier
          var call3314 = callmethodChecked(var_as, "parent", [0]);
          var call3315 = callmethodChecked(call3314, "scope", [0]);
          var call3316 = callmethodChecked(var_o, "scope:=", [1], call3315);
          return GraceTrue;
        };
        func3313.paramCounts = [1, 1];
        obj3042.methods["visitOp()up"] = func3313;
        func3313.definitionLine = 1113;
        func3313.definitionModule = "identifierresolution";
        var func3317 = function(argcv) {    // method visitVarDec(1)up(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitVarDec (arg list 1) of visitVarDec(1)up(1)"));
          var var_as = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for up (arg list 2) of visitVarDec(1)up(1)"));
          setModuleName("identifierresolution");
          setLineNumber(1114);    // compilenode identifier
          var call3318 = callmethodChecked(var_as, "parent", [0]);
          var call3319 = callmethodChecked(call3318, "scope", [0]);
          var call3320 = callmethodChecked(var_o, "scope:=", [1], call3319);
          return GraceTrue;
        };
        func3317.paramCounts = [1, 1];
        obj3042.methods["visitVarDec()up"] = func3317;
        func3317.definitionLine = 1114;
        func3317.definitionModule = "identifierresolution";
        var func3321 = function(argcv) {    // method visitReturn(1)up(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitReturn (arg list 1) of visitReturn(1)up(1)"));
          var var_as = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for up (arg list 2) of visitReturn(1)up(1)"));
          setModuleName("identifierresolution");
          setLineNumber(1115);    // compilenode identifier
          var call3322 = callmethodChecked(var_as, "parent", [0]);
          var call3323 = callmethodChecked(call3322, "scope", [0]);
          var call3324 = callmethodChecked(var_o, "scope:=", [1], call3323);
          return GraceTrue;
        };
        func3321.paramCounts = [1, 1];
        obj3042.methods["visitReturn()up"] = func3321;
        func3321.definitionLine = 1115;
        func3321.definitionModule = "identifierresolution";
        var func3325 = function(argcv) {    // method visitDialect(1)up(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitDialect (arg list 1) of visitDialect(1)up(1)"));
          var var_as = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for up (arg list 2) of visitDialect(1)up(1)"));
          setModuleName("identifierresolution");
          setLineNumber(1116);    // compilenode identifier
          var call3326 = callmethodChecked(var_as, "parent", [0]);
          var call3327 = callmethodChecked(call3326, "scope", [0]);
          var call3328 = callmethodChecked(var_o, "scope:=", [1], call3327);
          return GraceTrue;
        };
        func3325.paramCounts = [1, 1];
        obj3042.methods["visitDialect()up"] = func3325;
        func3325.definitionLine = 1116;
        func3325.definitionModule = "identifierresolution";
        var func3329 = function(argcv) {    // method visitBlank(1)up(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitBlank (arg list 1) of visitBlank(1)up(1)"));
          var var_as = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for up (arg list 2) of visitBlank(1)up(1)"));
          setModuleName("identifierresolution");
          setLineNumber(1117);    // compilenode identifier
          var call3330 = callmethodChecked(var_as, "parent", [0]);
          var call3331 = callmethodChecked(call3330, "scope", [0]);
          var call3332 = callmethodChecked(var_o, "scope:=", [1], call3331);
          return GraceTrue;
        };
        func3329.paramCounts = [1, 1];
        obj3042.methods["visitBlank()up"] = func3329;
        func3329.definitionLine = 1117;
        func3329.definitionModule = "identifierresolution";
        var func3333 = function(argcv) {    // method visitCommentNode(1)up(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitCommentNode (arg list 1) of visitCommentNode(1)up(1)"));
          var var_as = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for up (arg list 2) of visitCommentNode(1)up(1)"));
          setModuleName("identifierresolution");
          setLineNumber(1118);    // compilenode identifier
          var call3334 = callmethodChecked(var_as, "parent", [0]);
          var call3335 = callmethodChecked(call3334, "scope", [0]);
          var call3336 = callmethodChecked(var_o, "scope:=", [1], call3335);
          return GraceTrue;
        };
        func3333.paramCounts = [1, 1];
        obj3042.methods["visitCommentNode()up"] = func3333;
        func3333.definitionLine = 1118;
        func3333.definitionModule = "identifierresolution";
        setLineNumber(966);    // compilenode identifier
        var call3337 = callmethodChecked(var_ast, "baseVisitor()object", [0, 1], this);
        obj3042.superobj = call3337;
        if (call3337.data) obj3042.data = call3337.data;
        if (call3337.hasOwnProperty('_value'))
            obj3042._value = call3337._value;
        superDepth = origSuperDepth;
      };
      obj_init_3042.apply(obj3042, []);
      var var_symbolTableVis = obj3042;
      setLineNumber(1121);    // compilenode object
      var obj3338 = Grace_allocObject(null, "objectScopesVis");
      obj3338.definitionModule = "identifierresolution";
      obj3338.definitionLine = 1121;
      obj3338.outer = this;
      var reader_identifierresolution_outer3339 = function() {
        return this.outer;
      };
      obj3338.methods["outer"] = reader_identifierresolution_outer3339;
      var obj_init_3338 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj3338;
        var func3340 = function(argcv) {    // method visitDefDec(1)up(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitDefDec (arg list 1) of visitDefDec(1)up(1)"));
          var var_as = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for up (arg list 2) of visitDefDec(1)up(1)"));
          setModuleName("identifierresolution");
          var if3341 = GraceDone;
          setLineNumber(1129);    // compilenode identifier
          var call3342 = callmethodChecked(var_o, "returnsObject", [0]);
          if (Grace_isTrue(call3342)) {
            setLineNumber(1130);    // compilenode identifier
            var call3343 = callmethodChecked(var_o, "nameString", [0]);
            setLineNumber(1131);    // compilenode identifier
            var call3344 = callmethodChecked(var_o, "returnedObjectScope", [0]);
            setLineNumber(1130);    // compilenode identifier
            var call3345 = callmethodChecked(var_o, "scope", [0]);
            var call3346 = callmethodChecked(call3345, "at()putScope", [1, 1], call3343, call3344);
            if3341 = call3346;
          }
          setLineNumber(1133);    // compilenode identifier
          return GraceTrue;
        };
        func3340.paramCounts = [1, 1];
        obj3338.methods["visitDefDec()up"] = func3340;
        func3340.definitionLine = 1128;
        func3340.definitionModule = "identifierresolution";
        var func3347 = function(argcv) {    // method visitMethod(1)up(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitMethod (arg list 1) of visitMethod(1)up(1)"));
          var var_as = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for up (arg list 2) of visitMethod(1)up(1)"));
          setModuleName("identifierresolution");
          setLineNumber(1136);    // compilenode identifier
          var call3348 = callmethodChecked(var_as, "parent", [0]);
          var var_myParent = call3348;
          var if3349 = GraceDone;
          setLineNumber(1137);    // compilenode identifier
          var call3350 = callmethodChecked(var_o, "returnsObject", [0]);
          if (Grace_isTrue(call3350)) {
            setLineNumber(1138);    // compilenode identifier
            var call3351 = callmethodChecked(var_o, "nameString", [0]);
            var call3352 = callmethodChecked(var_o, "returnedObjectScope", [0]);
            var call3353 = callmethodChecked(var_myParent, "scope", [0]);
            var call3354 = callmethodChecked(call3353, "at()putScope", [1, 1], call3351, call3352);
            setLineNumber(1139);    // compilenode identifier
            var call3355 = callmethodChecked(var_myParent, "name", [0]);
            var var_objectName = call3355;
            var if3356 = GraceDone;
            setLineNumber(1140);    // compilenode identifier
            var call3357 = callmethodChecked(var_o, "body", [0]);
            var call3358 = callmethodChecked(call3357, "last", [0]);
            var call3359 = callmethodChecked(call3358, "isObject", [0]);
            var string3361 = new GraceString("object");
            var opresult3364 = callmethodChecked(var_objectName, "\u2260", [1], string3361);
            var opresult3366 = callmethodChecked(opresult3364, "&&", [1], call3359);
            if (Grace_isTrue(opresult3366)) {
              setLineNumber(1141);    // compilenode identifier
              var call3367 = callmethodChecked(var_o, "body", [0]);
              var call3368 = callmethodChecked(call3367, "last", [0]);
              var call3369 = callmethodChecked(call3368, "name", [0]);
              var string3371 = new GraceString(".");
              var opresult3374 = callmethodChecked(var_objectName, "++", [1], string3371);
              var opresult3376 = callmethodChecked(opresult3374, "++", [1], call3369);
              var call3377 = callmethodChecked(var_o, "body", [0]);
              var call3378 = callmethodChecked(call3377, "last", [0]);
              var call3379 = callmethodChecked(call3378, "name:=", [1], opresult3376);
              if3356 = call3379;
            }
            if3349 = if3356;
          }
          setLineNumber(1144);    // compilenode identifier
          return GraceTrue;
        };
        func3347.paramCounts = [1, 1];
        obj3338.methods["visitMethod()up"] = func3347;
        func3347.definitionLine = 1135;
        func3347.definitionModule = "identifierresolution";
        setLineNumber(1127);    // compilenode identifier
        var call3380 = callmethodChecked(var_ast, "baseVisitor()object", [0, 1], this);
        obj3338.superobj = call3380;
        if (call3380.data) obj3338.data = call3380.data;
        if (call3380.hasOwnProperty('_value'))
            obj3338._value = call3380._value;
        superDepth = origSuperDepth;
      };
      obj_init_3338.apply(obj3338, []);
      var var_objectScopesVis = obj3338;
      setLineNumber(1148);    // compilenode object
      var obj3381 = Grace_allocObject(null, "inheritanceVis");
      obj3381.definitionModule = "identifierresolution";
      obj3381.definitionLine = 1148;
      obj3381.outer = this;
      var reader_identifierresolution_outer3382 = function() {
        return this.outer;
      };
      obj3381.methods["outer"] = reader_identifierresolution_outer3382;
      var obj_init_3381 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj3381;
        var func3383 = function(argcv) {    // method visitObject(1)up(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitObject (arg list 1) of visitObject(1)up(1)"));
          var var_as = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for up (arg list 2) of visitObject(1)up(1)"));
          setModuleName("identifierresolution");
          setLineNumber(1151);    // compilenode call
          var call3384 = callmethodChecked(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call3385 = callmethodChecked(call3384, "collectParentNames", [1], var_o);
          setLineNumber(1152);    // compilenode identifier
          return GraceTrue;
        };
        func3383.paramCounts = [1, 1];
        obj3381.methods["visitObject()up"] = func3383;
        func3383.definitionLine = 1150;
        func3383.definitionModule = "identifierresolution";
        var func3386 = function(argcv) {    // method visitModule(1)up(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitModule (arg list 1) of visitModule(1)up(1)"));
          var var_as = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for up (arg list 2) of visitModule(1)up(1)"));
          setModuleName("identifierresolution");
          setLineNumber(1155);    // compilenode call
          var call3387 = callmethodChecked(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call3388 = callmethodChecked(call3387, "collectParentNames", [1], var_o);
          setLineNumber(1156);    // compilenode identifier
          return GraceTrue;
        };
        func3386.paramCounts = [1, 1];
        obj3381.methods["visitModule()up"] = func3386;
        func3386.definitionLine = 1154;
        func3386.definitionModule = "identifierresolution";
        setLineNumber(1149);    // compilenode identifier
        var call3389 = callmethodChecked(var_ast, "baseVisitor()object", [0, 1], this);
        obj3381.superobj = call3389;
        if (call3389.data) obj3381.data = call3389.data;
        if (call3389.hasOwnProperty('_value'))
            obj3381._value = call3389._value;
        superDepth = origSuperDepth;
      };
      obj_init_3381.apply(obj3381, []);
      var var_inheritanceVis = obj3381;
      setLineNumber(1160);    // compilenode identifier
      var call3390 = callmethodChecked(var_topNode, "accept()from", [1, 1], var_symbolTableVis, var_topChain);
      setLineNumber(1161);    // compilenode identifier
      var call3391 = callmethodChecked(var_topNode, "accept()from", [1, 1], var_objectScopesVis, var_topChain);
      setLineNumber(1162);    // compilenode identifier
      var call3392 = callmethodChecked(var_topNode, "accept()from", [1, 1], var_inheritanceVis, var_topChain);
      return call3392;
    };
    func3041.paramCounts = [1, 1];
    this.methods["buildSymbolTableFor()ancestors"] = func3041;
    func3041.definitionLine = 964;
    func3041.definitionModule = "identifierresolution";
    setLineNumber(1165);    // compilenode method
    var func3393 = function(argcv) {    // method collectParentNames(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_node = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for collectParentNames(1)"));
      setModuleName("identifierresolution");
      setLineNumber(1168);    // compilenode identifier
      var call3394 = callmethodChecked(var_node, "scope", [0]);
      var var_nodeScope = call3394;
      var if3395 = GraceDone;
      setLineNumber(1169);    // compilenode identifier
      var call3397 = callmethodChecked(var_ast, "fakeSymbolTable", [0]);
      var opresult3399 = callmethodChecked(call3397, "==", [1], var_nodeScope);
      if (Grace_isTrue(opresult3399)) {
        setLineNumber(1170);    // compilenode string
        var string3400 = new GraceString("");
        var call3402 = callmethodChecked(var_node, "pretty", [1], new GraceNum(0));
        var string3404 = new GraceString(" has no scope.\n");
        var string3407 = new GraceString("node ");
        var opresult3409 = callmethodChecked(string3407, "++", [1], var_node);
        var opresult3411 = callmethodChecked(opresult3409, "++", [1], string3404);
        var opresult3413 = callmethodChecked(opresult3411, "++", [1], call3402);
        var opresult3415 = callmethodChecked(opresult3413, "++", [1], string3400);
        var call3416 = callmethodChecked(var_util, "log()verbose", [1, 1], new GraceNum(20), opresult3415);
        if3395 = call3416;
      }
      var if3417 = GraceDone;
      setLineNumber(1172);    // compilenode identifier
      var call3419 = callmethodChecked(var_nodeScope, "inheritedNames", [0]);
      var opresult3421 = callmethodChecked(call3419, "==", [1], var_completed);
      if (Grace_isTrue(opresult3421)) {
        setLineNumber(1174);    // compilenode identifier
        return var_done;
      }
      var if3422 = GraceDone;
      setLineNumber(1175);    // compilenode identifier
      var call3424 = callmethodChecked(var_nodeScope, "inheritedNames", [0]);
      var opresult3426 = callmethodChecked(call3424, "==", [1], var_inProgress);
      if (Grace_isTrue(opresult3426)) {
        setLineNumber(1176);    // compilenode string
        var string3427 = new GraceString("cyclic inheritance or trait use");
        setLineNumber(1177);    // compilenode identifier
        var call3428 = callmethodChecked(var_node, "line", [0]);
        var call3429 = callmethodChecked(var_node, "linePos", [0]);
        var call3430 = callmethodChecked(var_node, "linePos", [0]);
        setLineNumber(1176);    // compilenode identifier
        var call3431 = callmethodChecked(var_errormessages, "syntaxError()atRange", [1, 3], string3427, call3428, call3429, call3430);
        if3422 = call3431;
      }
      setLineNumber(1179);    // compilenode identifier
      var call3432 = callmethodChecked(var_nodeScope, "inheritedNames:=", [1], var_inProgress);
      setLineNumber(1180);    // compilenode identifier
      onSelf = true;
      var call3433 = callmethodChecked(this, "gatherInheritedNames", [1], var_node);
      setLineNumber(1181);    // compilenode identifier
      onSelf = true;
      var call3434 = callmethodChecked(this, "gatherUsedNames", [1], var_node);
      setLineNumber(1182);    // compilenode identifier
      var call3435 = callmethodChecked(var_nodeScope, "inheritedNames:=", [1], var_completed);
      return call3435;
    };
    func3393.paramCounts = [1];
    this.methods["collectParentNames"] = func3393;
    func3393.definitionLine = 1165;
    func3393.definitionModule = "identifierresolution";
    setLineNumber(1185);    // compilenode method
    var func3436 = function(argcv) {    // method gatherInheritedNames(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_node = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for gatherInheritedNames(1)"));
      setModuleName("identifierresolution");
      setLineNumber(1186);    // compilenode identifier
      var call3437 = callmethodChecked(var_node, "superclass", [0]);
      var var_inhNode = call3437;
      setLineNumber(1187);    // compilenode identifier
      var call3438 = callmethodChecked(var_node, "scope", [0]);
      var var_objScope = call3438;
      setLineNumber(1188);    // compilenode vardec
      var var_superScope;
      setLineNumber(1189);    // compilenode identifier
      var call3439 = callmethodChecked(var_k, "inherited", [0]);
      var var_inheritedKind = call3439;
      var if3440 = GraceDone;
      setLineNumber(1190);    // compilenode identifier
      var opresult3443 = callmethodChecked(GraceFalse, "==", [1], var_inhNode);
      if (Grace_isTrue(opresult3443)) {
        setLineNumber(1191);    // compilenode string
        var string3444 = new GraceString("graceObject");
        var call3445 = callmethodChecked(var_ast, "identifierNode", [0]);
        var call3446 = callmethodChecked(call3445, "new()scope", [2, 1], string3444, GraceFalse, var_objScope);
        var var_gO = call3446;
        setLineNumber(1192);    // compilenode identifier
        var call3447 = callmethodChecked(var_ast, "inheritsNode", [0]);
        var call3448 = callmethodChecked(call3447, "new()scope", [1, 1], var_gO, var_objScope);
        var_inhNode = call3448;
        setLineNumber(1193);    // compilenode identifier
        var_superScope = var_graceObjectScope;
        setLineNumber(1194);    // compilenode identifier
        var call3449 = callmethodChecked(var_k, "graceObjectMethod", [0]);
        var_inheritedKind = call3449;
        if3440 = GraceDone;
      } else {
        setLineNumber(1196);    // compilenode identifier
        var call3450 = callmethodChecked(var_inhNode, "value", [0]);
        var call3451 = callmethodChecked(var_objScope, "scopeReferencedBy", [1], call3450);
        var_superScope = call3451;
        var if3452 = GraceDone;
        setLineNumber(1199);    // compilenode identifier
        var call3453 = callmethodChecked(var_superScope, "isUniversal", [0]);
        var call3454 = callmethodChecked(call3453, "not", [0]);
        if (Grace_isTrue(call3454)) {
          var if3455 = GraceDone;
          setLineNumber(1200);    // compilenode identifier
          var call3456 = callmethodChecked(var_superScope, "node", [0]);
          var call3458 = callmethodChecked(var_ast, "nullNode", [0]);
          var opresult3460 = callmethodChecked(call3458, "\u2260", [1], call3456);
          if (Grace_isTrue(opresult3460)) {
            setLineNumber(1203);    // compilenode identifier
            var call3461 = callmethodChecked(var_superScope, "node", [0]);
            onSelf = true;
            var call3462 = callmethodChecked(this, "collectParentNames", [1], call3461);
            if3455 = call3462;
          } else {
            setLineNumber(1205);    // compilenode string
            var string3463 = new GraceString("\u203a.superscope.node == nullNode");
            var call3465 = callmethodChecked(var_node, "nameString", [0]);
            var string3467 = new GraceString("\u2039");
            var opresult3469 = callmethodChecked(string3467, "++", [1], call3465);
            var opresult3471 = callmethodChecked(opresult3469, "++", [1], string3463);
            var call3472 = callmethodChecked(var_util, "log()verbose", [1, 1], new GraceNum(70), opresult3471);
            if3455 = call3472;
          }
          if3452 = if3455;
        } else {
          setLineNumber(1208);    // compilenode string
          var string3473 = new GraceString(" is universal");
          var call3475 = callmethodChecked(var_node, "nameString", [0]);
          var string3477 = new GraceString("superscope of ");
          var opresult3479 = callmethodChecked(string3477, "++", [1], call3475);
          var opresult3481 = callmethodChecked(opresult3479, "++", [1], string3473);
          var call3482 = callmethodChecked(var_util, "log()verbose", [1, 1], new GraceNum(70), opresult3481);
          if3452 = call3482;
        }
        if3440 = if3452;
      }
      setLineNumber(1211);    // compilenode block
      var block3483 = new GraceBlock(this, 1211, 1);
      setLineNumber(1);    // compilenode identifier
      block3483.real = function(var_each) {
        var if3484 = GraceDone;
        setLineNumber(1212);    // compilenode string
        var string3485 = new GraceString("self");
        var opresult3488 = callmethodChecked(var_each, "\u2260", [1], string3485);
        if (Grace_isTrue(opresult3488)) {
          setLineNumber(1213);    // compilenode identifier
          var call3489 = callmethodChecked(var_objScope, "addName()as", [1, 1], var_each, var_inheritedKind);
          setLineNumber(1214);    // compilenode identifier
          var call3490 = callmethodChecked(var_inhNode, "providedNames", [0]);
          var call3491 = callmethodChecked(call3490, "add", [1], var_each);
          if3484 = call3491;
        }
        return if3484;
      };
      setLineNumber(1211);    // compilenode identifier
      var call3492 = callmethodChecked(var_superScope, "elements", [0]);
      var call3493 = callmethodChecked(call3492, "keysDo", [1], block3483);
      setLineNumber(1217);    // compilenode block
      var block3494 = new GraceBlock(this, 1217, 1);
      setLineNumber(1);    // compilenode identifier
      block3494.real = function(var_a) {
        setLineNumber(1218);    // compilenode identifier
        var call3495 = callmethodChecked(var_a, "oldName", [0]);
        var call3496 = callmethodChecked(call3495, "nameString", [0]);
        var var_old = call3496;
        var if3497 = GraceDone;
        setLineNumber(1219);    // compilenode identifier
        var call3498 = callmethodChecked(var_superScope, "contains", [1], var_old);
        if (Grace_isTrue(call3498)) {
          setLineNumber(1220);    // compilenode identifier
          var call3499 = callmethodChecked(var_a, "newName", [0]);
          var call3500 = callmethodChecked(call3499, "nameString", [0]);
          var call3501 = callmethodChecked(var_inhNode, "providedNames", [0]);
          var call3502 = callmethodChecked(call3501, "add", [1], call3500);
          if3497 = call3502;
        } else {
          setLineNumber(1223);    // compilenode string
          var string3503 = new GraceString("because it is not present in the inherited object");
          setLineNumber(1222);    // compilenode string
          var string3505 = new GraceString(" ");
          var string3508 = new GraceString("can't define an alias for ");
          var opresult3510 = callmethodChecked(string3508, "++", [1], var_old);
          var opresult3512 = callmethodChecked(opresult3510, "++", [1], string3505);
          var opresult3514 = callmethodChecked(opresult3512, "++", [1], string3503);
          setLineNumber(1224);    // compilenode identifier
          var call3515 = callmethodChecked(var_a, "oldName", [0]);
          var call3516 = callmethodChecked(call3515, "line", [0]);
          var call3517 = callmethodChecked(var_a, "oldName", [0]);
          var call3518 = callmethodChecked(call3517, "linePos", [0]);
          setLineNumber(1225);    // compilenode identifier
          var call3520 = callmethodChecked(var_old, "size", [0]);
          var call3522 = callmethodChecked(var_a, "oldName", [0]);
          var call3523 = callmethodChecked(call3522, "linePos", [0]);
          var opresult3525 = callmethodChecked(call3523, "+", [1], call3520);
          var diff3527 = callmethodChecked(opresult3525, "-", [1], new GraceNum(1));
          setLineNumber(1222);    // compilenode identifier
          var call3528 = callmethodChecked(var_errormessages, "syntaxError()atRange", [1, 3], opresult3514, call3516, call3518, diff3527);
          if3497 = call3528;
        }
        return if3497;
      };
      setLineNumber(1217);    // compilenode identifier
      var call3529 = callmethodChecked(var_inhNode, "aliases", [0]);
      var call3530 = callmethodChecked(call3529, "do", [1], block3494);
      setLineNumber(1228);    // compilenode block
      var block3531 = new GraceBlock(this, 1228, 1);
      setLineNumber(1);    // compilenode identifier
      block3531.real = function(var_exId) {
        setLineNumber(1229);    // compilenode identifier
        var call3532 = callmethodChecked(var_exId, "nameString", [0]);
        var block3533 = new GraceBlock(this, 1229, 0);
        block3533.real = function() {
          setLineNumber(1231);    // compilenode string
          var string3534 = new GraceString("because it is not present in the inherited object");
          setLineNumber(1230);    // compilenode string
          var string3536 = new GraceString(" ");
          var call3538 = callmethodChecked(var_exId, "nameString", [0]);
          var string3540 = new GraceString("can't exclude ");
          var opresult3542 = callmethodChecked(string3540, "++", [1], call3538);
          var opresult3544 = callmethodChecked(opresult3542, "++", [1], string3536);
          var opresult3546 = callmethodChecked(opresult3544, "++", [1], string3534);
          setLineNumber(1232);    // compilenode identifier
          var call3547 = callmethodChecked(var_exId, "line", [0]);
          var call3548 = callmethodChecked(var_exId, "linePos", [0]);
          setLineNumber(1233);    // compilenode identifier
          var call3550 = callmethodChecked(var_exId, "nameString", [0]);
          var call3551 = callmethodChecked(call3550, "size", [0]);
          var call3553 = callmethodChecked(var_exId, "linePos", [0]);
          var opresult3555 = callmethodChecked(call3553, "+", [1], call3551);
          var diff3557 = callmethodChecked(opresult3555, "-", [1], new GraceNum(1));
          setLineNumber(1230);    // compilenode identifier
          var call3558 = callmethodChecked(var_errormessages, "syntaxError()atRange", [1, 3], opresult3546, call3547, call3548, diff3557);
          return call3558;
        };
        setLineNumber(1229);    // compilenode identifier
        var call3559 = callmethodChecked(var_inhNode, "providedNames", [0]);
        var call3560 = callmethodChecked(call3559, "remove()ifAbsent", [1, 1], call3532, block3533);
        return call3560;
      };
      setLineNumber(1228);    // compilenode identifier
      var call3561 = callmethodChecked(var_inhNode, "exclusions", [0]);
      var call3562 = callmethodChecked(call3561, "do", [1], block3531);
      return call3562;
    };
    func3436.confidential = true;
    func3436.paramCounts = [1];
    this.methods["gatherInheritedNames"] = func3436;
    func3436.definitionLine = 1185;
    func3436.definitionModule = "identifierresolution";
    setLineNumber(1238);    // compilenode method
    var func3563 = function(argcv) {    // method gatherUsedNames(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_objNode = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for gatherUsedNames(1)"));
      setModuleName("identifierresolution");
      setLineNumber(1242);    // compilenode identifier
      var call3564 = callmethodChecked(var_map, "new", [0]);
      var var_traitMethods = call3564;
      setLineNumber(1243);    // compilenode identifier
      var call3565 = callmethodChecked(var_objNode, "scope", [0]);
      var var_objScope = call3565;
      setLineNumber(1244);    // compilenode block
      var block3566 = new GraceBlock(this, 1244, 1);
      setLineNumber(1);    // compilenode identifier
      block3566.real = function(var_t) {
        setLineNumber(1245);    // compilenode identifier
        var call3567 = callmethodChecked(var_t, "value", [0]);
        var call3568 = callmethodChecked(var_objScope, "scopeReferencedBy", [1], call3567);
        var var_traitScope = call3568;
        setLineNumber(1246);    // compilenode identifier
        var call3569 = callmethodChecked(var_traitScope, "node", [0]);
        var var_traitNode = call3569;
        setLineNumber(1247);    // compilenode string
        var string3570 = new GraceString("");
        var string3573 = new GraceString("\ndefined in node ");
        var string3576 = new GraceString(" which has scope ");
        var string3579 = new GraceString("examining parents of trait ");
        var opresult3581 = callmethodChecked(string3579, "++", [1], var_t);
        var opresult3583 = callmethodChecked(opresult3581, "++", [1], string3576);
        var opresult3585 = callmethodChecked(opresult3583, "++", [1], var_traitScope);
        var opresult3587 = callmethodChecked(opresult3585, "++", [1], string3573);
        var opresult3589 = callmethodChecked(opresult3587, "++", [1], var_traitNode);
        var opresult3591 = callmethodChecked(opresult3589, "++", [1], string3570);
        var call3592 = callmethodChecked(var_util, "log()verbose", [1, 1], new GraceNum(70), opresult3591);
        var if3593 = GraceDone;
        setLineNumber(1248);    // compilenode identifier
        var call3594 = callmethodChecked(var_traitNode, "isObject", [0]);
        if (Grace_isTrue(call3594)) {
          setLineNumber(1249);    // compilenode identifier
          var call3595 = callmethodChecked(var_traitScope, "node", [0]);
          onSelf = true;
          var call3596 = callmethodChecked(this, "collectParentNames", [1], call3595);
          if3593 = call3596;
        } else {
          setLineNumber(1251);    // compilenode string
          var string3597 = new GraceString("");
          var call3599 = callmethodChecked(var_traitNode, "pretty", [1], new GraceNum(1));
          var string3601 = new GraceString(" is not an object.\n");
          var string3604 = new GraceString("traitNode ");
          var opresult3606 = callmethodChecked(string3604, "++", [1], var_traitNode);
          var opresult3608 = callmethodChecked(opresult3606, "++", [1], string3601);
          var opresult3610 = callmethodChecked(opresult3608, "++", [1], call3599);
          var opresult3612 = callmethodChecked(opresult3610, "++", [1], string3597);
          var call3613 = callmethodChecked(var_util, "log()verbose", [1, 1], new GraceNum(70), opresult3612);
          if3593 = call3613;
        }
        setLineNumber(1253);    // compilenode block
        var block3614 = new GraceBlock(this, 1253, 2);
        setLineNumber(1);    // compilenode identifier
        block3614.real = function(var_nm, var_kd) {
          var if3615 = GraceDone;
          setLineNumber(1254);    // compilenode identifier
          var call3616 = callmethodChecked(var_kd, "forUsers", [0]);
          if (Grace_isTrue(call3616)) {
            setLineNumber(1255);    // compilenode string
            var string3617 = new GraceString(")");
            var string3620 = new GraceString(" is forUsers; (kind = ");
            var string3623 = new GraceString("meth ");
            var opresult3625 = callmethodChecked(string3623, "++", [1], var_nm);
            var opresult3627 = callmethodChecked(opresult3625, "++", [1], string3620);
            var opresult3629 = callmethodChecked(opresult3627, "++", [1], var_kd);
            var opresult3631 = callmethodChecked(opresult3629, "++", [1], string3617);
            var call3632 = callmethodChecked(var_util, "log()verbose", [1, 1], new GraceNum(70), opresult3631);
            setLineNumber(1256);    // compilenode identifier
            var call3633 = callmethodChecked(var_k, "fromTrait", [0]);
            var call3634 = callmethodChecked(var_objScope, "addName()as", [1, 1], var_nm, call3633);
            setLineNumber(1257);    // compilenode identifier
            var call3635 = callmethodChecked(var_t, "providedNames", [0]);
            var call3636 = callmethodChecked(call3635, "add", [1], var_nm);
            if3615 = call3636;
          }
          return if3615;
        };
        setLineNumber(1253);    // compilenode identifier
        var call3637 = callmethodChecked(var_traitScope, "keysAndKindsDo", [1], block3614);
        setLineNumber(1260);    // compilenode block
        var block3638 = new GraceBlock(this, 1260, 1);
        setLineNumber(1);    // compilenode identifier
        block3638.real = function(var_a) {
          setLineNumber(1261);    // compilenode identifier
          var call3639 = callmethodChecked(var_a, "oldName", [0]);
          var call3640 = callmethodChecked(call3639, "nameString", [0]);
          var var_old = call3640;
          var if3641 = GraceDone;
          setLineNumber(1262);    // compilenode identifier
          var call3642 = callmethodChecked(var_traitScope, "contains", [1], var_old);
          if (Grace_isTrue(call3642)) {
            setLineNumber(1263);    // compilenode identifier
            var call3643 = callmethodChecked(var_a, "newName", [0]);
            var call3644 = callmethodChecked(call3643, "nameString", [0]);
            var call3645 = callmethodChecked(var_t, "providedNames", [0]);
            var call3646 = callmethodChecked(call3645, "add", [1], call3644);
            if3641 = call3646;
          } else {
            setLineNumber(1266);    // compilenode string
            var string3647 = new GraceString(" because it is not present in the trait");
            var string3650 = new GraceString("");
            var opresult3652 = callmethodChecked(string3650, "++", [1], var_old);
            var opresult3654 = callmethodChecked(opresult3652, "++", [1], string3647);
            setLineNumber(1265);    // compilenode string
            var string3656 = new GraceString("can't define an alias for ");
            var opresult3658 = callmethodChecked(string3656, "++", [1], opresult3654);
            setLineNumber(1267);    // compilenode identifier
            var call3659 = callmethodChecked(var_a, "oldName", [0]);
            var call3660 = callmethodChecked(call3659, "line", [0]);
            var call3661 = callmethodChecked(var_a, "oldName", [0]);
            var call3662 = callmethodChecked(call3661, "linePos", [0]);
            setLineNumber(1268);    // compilenode identifier
            var call3664 = callmethodChecked(var_old, "size", [0]);
            var call3666 = callmethodChecked(var_a, "oldName", [0]);
            var call3667 = callmethodChecked(call3666, "linePos", [0]);
            var opresult3669 = callmethodChecked(call3667, "+", [1], call3664);
            var diff3671 = callmethodChecked(opresult3669, "-", [1], new GraceNum(1));
            setLineNumber(1265);    // compilenode identifier
            var call3672 = callmethodChecked(var_errormessages, "syntaxError()atRange", [1, 3], opresult3658, call3660, call3662, diff3671);
            if3641 = call3672;
          }
          return if3641;
        };
        setLineNumber(1260);    // compilenode identifier
        var call3673 = callmethodChecked(var_t, "aliases", [0]);
        var call3674 = callmethodChecked(call3673, "do", [1], block3638);
        setLineNumber(1271);    // compilenode block
        var block3675 = new GraceBlock(this, 1271, 1);
        setLineNumber(1);    // compilenode identifier
        block3675.real = function(var_exId) {
          setLineNumber(1272);    // compilenode identifier
          var call3676 = callmethodChecked(var_exId, "nameString", [0]);
          var block3677 = new GraceBlock(this, 1272, 0);
          block3677.real = function() {
            setLineNumber(1274);    // compilenode string
            var string3678 = new GraceString("because it is not available in the trait");
            setLineNumber(1273);    // compilenode string
            var string3680 = new GraceString(" ");
            var call3682 = callmethodChecked(var_exId, "nameString", [0]);
            var string3684 = new GraceString("can't exclude ");
            var opresult3686 = callmethodChecked(string3684, "++", [1], call3682);
            var opresult3688 = callmethodChecked(opresult3686, "++", [1], string3680);
            var opresult3690 = callmethodChecked(opresult3688, "++", [1], string3678);
            setLineNumber(1275);    // compilenode identifier
            var call3691 = callmethodChecked(var_exId, "line", [0]);
            var call3692 = callmethodChecked(var_exId, "linePos", [0]);
            setLineNumber(1276);    // compilenode identifier
            var call3694 = callmethodChecked(var_exId, "nameString", [0]);
            var call3695 = callmethodChecked(call3694, "size", [0]);
            var call3697 = callmethodChecked(var_exId, "linePos", [0]);
            var opresult3699 = callmethodChecked(call3697, "+", [1], call3695);
            var diff3701 = callmethodChecked(opresult3699, "-", [1], new GraceNum(1));
            setLineNumber(1273);    // compilenode identifier
            var call3702 = callmethodChecked(var_errormessages, "syntaxError()atRange", [1, 3], opresult3690, call3691, call3692, diff3701);
            return call3702;
          };
          setLineNumber(1272);    // compilenode identifier
          var call3703 = callmethodChecked(var_t, "providedNames", [0]);
          var call3704 = callmethodChecked(call3703, "remove()ifAbsent", [1, 1], call3676, block3677);
          return call3704;
        };
        setLineNumber(1271);    // compilenode identifier
        var call3705 = callmethodChecked(var_t, "exclusions", [0]);
        var call3706 = callmethodChecked(call3705, "do", [1], block3675);
        setLineNumber(1279);    // compilenode block
        var block3707 = new GraceBlock(this, 1279, 1);
        setLineNumber(1);    // compilenode identifier
        block3707.real = function(var_methName) {
          setLineNumber(1280);    // compilenode block
          var block3708 = new GraceBlock(this, 1280, 0);
          block3708.real = function() {
            var array3709 = new PrimitiveGraceList([]);
            return array3709;
          };
          var call3710 = callmethodChecked(var_traitMethods, "get()ifAbsent", [1, 1], var_methName, block3708);
          var var_definingTraits = call3710;
          setLineNumber(1281);    // compilenode identifier
          var call3711 = callmethodChecked(var_definingTraits, "push", [1], var_t);
          setLineNumber(1282);    // compilenode identifier
          var call3712 = callmethodChecked(var_traitMethods, "put", [2], var_methName, var_definingTraits);
          return call3712;
        };
        setLineNumber(1279);    // compilenode identifier
        var call3713 = callmethodChecked(var_t, "providedNames", [0]);
        var call3714 = callmethodChecked(call3713, "do", [1], block3707);
        return call3714;
      };
      setLineNumber(1244);    // compilenode identifier
      var call3715 = callmethodChecked(var_objNode, "usedTraits", [0]);
      var call3716 = callmethodChecked(call3715, "do", [1], block3566);
      setLineNumber(1285);    // compilenode identifier
      onSelf = true;
      var call3717 = callmethodChecked(this, "checkForConflicts", [2], var_objNode, var_traitMethods);
      return call3717;
    };
    func3563.confidential = true;
    func3563.paramCounts = [1];
    this.methods["gatherUsedNames"] = func3563;
    func3563.definitionLine = 1238;
    func3563.definitionModule = "identifierresolution";
    setLineNumber(1288);    // compilenode method
    var func3718 = function(argcv) {    // method checkForConflicts(2)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_objNode = arguments[curarg];
      curarg++;
      var var_traitMethods = arguments[curarg];
      curarg++;
      if (argcv[0] !== 2)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for checkForConflicts(2)"));
      setModuleName("identifierresolution");
      setLineNumber(1292);    // compilenode call
      var call3719 = callmethodChecked(var_prelude, "emptyList", [0]);
      var var_conflicts = call3719;
      setLineNumber(1294);    // compilenode block
      var block3720 = new GraceBlock(this, 1294, 1);
      setLineNumber(1);    // compilenode identifier
      block3720.real = function(var_methName) {
        setLineNumber(1295);    // compilenode identifier
        var call3721 = callmethodChecked(var_traitMethods, "get", [1], var_methName);
        var var_sources = call3721;
        var if3722 = GraceDone;
        setLineNumber(1296);    // compilenode identifier
        var call3724 = callmethodChecked(var_sources, "size", [0]);
        var opresult3726 = callmethodChecked(call3724, ">", [1], new GraceNum(1));
        if (Grace_isTrue(opresult3726)) {
          setLineNumber(1298);    // compilenode string
          var string3727 = new GraceString("");
          var call3729 = callmethodChecked(var_objNode, "localNames", [0]);
          var string3731 = new GraceString("'s localNames = ");
          var call3733 = callmethodChecked(var_objNode, "nameString", [0]);
          var string3735 = new GraceString("\n and ");
          var opresult3737 = callmethodChecked(string3735, "++", [1], call3733);
          var opresult3739 = callmethodChecked(opresult3737, "++", [1], string3731);
          var opresult3741 = callmethodChecked(opresult3739, "++", [1], call3729);
          var opresult3743 = callmethodChecked(opresult3741, "++", [1], string3727);
          setLineNumber(1297);    // compilenode string
          var string3745 = new GraceString("");
          var call3747 = callmethodChecked(var_objNode, "scope", [0]);
          var string3749 = new GraceString("'s scope = ");
          var call3751 = callmethodChecked(var_objNode, "nameString", [0]);
          var string3753 = new GraceString("");
          var opresult3755 = callmethodChecked(string3753, "++", [1], call3751);
          var opresult3757 = callmethodChecked(opresult3755, "++", [1], string3749);
          var opresult3759 = callmethodChecked(opresult3757, "++", [1], call3747);
          var opresult3761 = callmethodChecked(opresult3759, "++", [1], string3745);
          var opresult3763 = callmethodChecked(opresult3761, "++", [1], opresult3743);
          var call3764 = callmethodChecked(var_util, "log()verbose", [1, 1], new GraceNum(70), opresult3763);
          var if3765 = GraceDone;
          setLineNumber(1299);    // compilenode identifier
          var call3766 = callmethodChecked(var_objNode, "localNames", [0]);
          var call3767 = callmethodChecked(call3766, "contains", [1], var_methName);
          var call3768 = callmethodChecked(call3767, "not", [0]);
          if (Grace_isTrue(call3768)) {
            setLineNumber(1300);    // compilenode identifier
            onSelf = true;
            var call3769 = callmethodChecked(this, "conflictForMethodName()from", [1, 1], var_methName, var_sources);
            var call3770 = callmethodChecked(var_conflicts, "addLast", [1], call3769);
            if3765 = call3770;
          }
          if3722 = if3765;
        }
        return if3722;
      };
      setLineNumber(1294);    // compilenode identifier
      var call3771 = callmethodChecked(var_traitMethods, "keysDo", [1], block3720);
      var if3772 = GraceDone;
      setLineNumber(1305);    // compilenode identifier
      var call3773 = callmethodChecked(var_conflicts, "isEmpty", [0]);
      if (Grace_isTrue(call3773)) {
        return var_done;
      }
      setLineNumber(1307);    // compilenode num
      var var_maxSourceLine = new GraceNum(0);
      var if3774 = GraceDone;
      setLineNumber(1308);    // compilenode identifier
      var call3776 = callmethodChecked(var_conflicts, "size", [0]);
      var opresult3778 = callmethodChecked(call3776, ">", [1], new GraceNum(1));
      if (Grace_isTrue(opresult3778)) {
        setLineNumber(1309);    // compilenode string
        var string3779 = new GraceString("Trait conflicts found:\n    ");
        if3774 = string3779;
      } else {
        setLineNumber(1311);    // compilenode string
        var string3780 = new GraceString("Trait conflict found: ");
        if3774 = string3780;
      }
      var var_message = if3774;
      setLineNumber(1313);    // compilenode block
      var block3781 = new GraceBlock(this, 1313, 1);
      setLineNumber(1);    // compilenode identifier
      block3781.real = function(var_each) {
        setLineNumber(1314);    // compilenode block
        var block3782 = new GraceBlock(this, 1314, 1);
        setLineNumber(1);    // compilenode identifier
        block3782.real = function(var_s) {
          setLineNumber(1314);    // compilenode identifier
          var call3783 = callmethodChecked(var_s, "nameString", [0]);
          return call3783;
        };
        var call3784 = callmethodChecked(var_each, "sources", [0]);
        var call3785 = callmethodChecked(call3784, "map", [1], block3782);
        var var_sourceList = call3785;
        setLineNumber(1315);    // compilenode block
        var block3786 = new GraceBlock(this, 1315, 2);
        setLineNumber(1);    // compilenode identifier
        block3786.real = function(var_a, var_s) {
          setLineNumber(1315);    // compilenode identifier
          var call3787 = callmethodChecked(var_s, "line", [0]);
          var call3788 = callmethodChecked(var_prelude, "max", [2], var_a, call3787);
          return call3788;
        };
        var call3789 = callmethodChecked(var_each, "sources", [0]);
        var call3790 = callmethodChecked(call3789, "fold()startingWith", [1, 1], block3786, var_maxSourceLine);
        var_maxSourceLine = call3790;
        setLineNumber(1318);    // compilenode string
        var string3791 = new GraceString(".\n    ");
        onSelf = true;
        var call3793 = callmethodChecked(this, "readableStringFrom", [1], var_sourceList);
        setLineNumber(1317);    // compilenode string
        var string3795 = new GraceString("` is defined in ");
        var call3797 = callmethodChecked(var_each, "methodName", [0]);
        var string3799 = new GraceString("method `");
        var opresult3801 = callmethodChecked(string3799, "++", [1], call3797);
        var opresult3803 = callmethodChecked(opresult3801, "++", [1], string3795);
        var opresult3806 = callmethodChecked(var_message, "++", [1], opresult3803);
        var opresult3808 = callmethodChecked(opresult3806, "++", [1], call3793);
        var opresult3810 = callmethodChecked(opresult3808, "++", [1], string3791);
        var_message = opresult3810;
        return GraceDone;
      };
      setLineNumber(1313);    // compilenode identifier
      var call3811 = callmethodChecked(var_conflicts, "do", [1], block3781);
      var if3812 = GraceDone;
      setLineNumber(1320);    // compilenode identifier
      var opresult3815 = callmethodChecked(var_maxSourceLine, "==", [1], new GraceNum(0));
      if (Grace_isTrue(opresult3815)) {
        setLineNumber(1321);    // compilenode identifier
        var call3816 = callmethodChecked(var_errormessages, "error", [1], var_message);
        if3812 = call3816;
      } else {
        setLineNumber(1323);    // compilenode identifier
        var call3817 = callmethodChecked(var_errormessages, "error()atLine", [1, 1], var_message, var_maxSourceLine);
        if3812 = call3817;
      }
      return if3812;
    };
    func3718.paramCounts = [2];
    this.methods["checkForConflicts"] = func3718;
    func3718.definitionLine = 1288;
    func3718.definitionModule = "identifierresolution";
    setLineNumber(1327);    // compilenode method
    var func3818 = function(argcv) {    // method conflictForMethodName(1)from(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_nm = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for conflictForMethodName (arg list 1) of conflictForMethodName(1)from(1)"));
      var var_srcs = arguments[curarg];
      curarg++;
      if (argcv[1] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for from (arg list 2) of conflictForMethodName(1)from(1)"));
      setModuleName("identifierresolution");
      var obj3819 = Grace_allocObject(GraceObject, "identifierresolution.conflictForMethodName()from");
      obj3819.definitionModule = "identifierresolution";
      obj3819.definitionLine = 1327;
      obj3819.outer = this;
      var reader_identifierresolution_outer3820 = function() {
        return this.outer;
      };
      obj3819.methods["outer"] = reader_identifierresolution_outer3820;
      var obj_init_3819 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj3819;
        setLineNumber(1328);    // compilenode identifier
        obj3819.data["methodName"] = var_nm;
        var reader_identifierresolution_methodName3821 = function() {
          return this.data["methodName"];
        };
        reader_identifierresolution_methodName3821.def = true;
        obj3819.methods["methodName"] = reader_identifierresolution_methodName3821;
        setLineNumber(1329);    // compilenode identifier
        obj3819.data["sources"] = var_srcs;
        var reader_identifierresolution_sources3822 = function() {
          return this.data["sources"];
        };
        reader_identifierresolution_sources3822.def = true;
        obj3819.methods["sources"] = reader_identifierresolution_sources3822;
        superDepth = origSuperDepth;
      };
      obj_init_3819.apply(obj3819, []);
      return obj3819;
    };
    func3818.paramCounts = [1, 1];
    this.methods["conflictForMethodName()from"] = func3818;
    func3818.definitionLine = 1327;
    func3818.definitionModule = "identifierresolution";
      var func3823 = function(argcv) {    // method conflictForMethodName(1     )from(1     )()object
        var curarg = 1;
        var var_nm = arguments[curarg];
        curarg++;
        var var_srcs = arguments[curarg];
        curarg++;
        var inheritingObject = arguments[curarg++];
        // Start argument processing
        curarg = 1;
        curarg++;
        curarg++;
        // End argument processing
        setModuleName("identifierresolution");
        var returnTarget = invocationCount;
        invocationCount++;
        var obj3824 = Grace_allocObject(GraceObject, "conflictForMethodName()from");
        obj3824.definitionModule = "identifierresolution";
        obj3824.definitionLine = 1327;
        var inho3824 = inheritingObject;
        while (inho3824.superobj) inho3824 = inho3824.superobj;
        inho3824.superobj = obj3824;
        obj3824.data = inheritingObject.data;
        if (inheritingObject.hasOwnProperty('_value'))
          obj3824._value = inheritingObject._value;
        obj3824.outer = this;
        var reader_identifierresolution_outer3825 = function() {
          return this.outer;
        };
        obj3824.methods["outer"] = reader_identifierresolution_outer3825;
        var obj_init_3824 = function() {
          var origSuperDepth = superDepth;
          superDepth = obj3824;
          setLineNumber(1328);    // compilenode identifier
          obj3824.data["methodName"] = var_nm;
          var reader_identifierresolution_methodName3826 = function() {
            return this.data["methodName"];
          };
          reader_identifierresolution_methodName3826.def = true;
          obj3824.methods["methodName"] = reader_identifierresolution_methodName3826;
          setLineNumber(1329);    // compilenode identifier
          obj3824.data["sources"] = var_srcs;
          var reader_identifierresolution_sources3827 = function() {
            return this.data["sources"];
          };
          reader_identifierresolution_sources3827.def = true;
          obj3824.methods["sources"] = reader_identifierresolution_sources3827;
          superDepth = origSuperDepth;
        };
        obj_init_3824.apply(inheritingObject, []);
        return obj3824;
        };
        this.methods["conflictForMethodName()from()object"] = func3823;
      setLineNumber(1332);    // compilenode method
      var func3828 = function(argcv) {    // method readableStringFrom(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_xs = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for readableStringFrom(1)"));
        // Start argument checking
        curarg = 1;
        var call3829 = callmethodChecked(var_prelude, "Sequence", [0]);
        if (!Grace_isTrue(callmethod(call3829, "match",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in readableStringFrom (arg list 1), which corresponds to parameter xs, does not have " + 
                    callmethod(call3829, "asString", [0])._value + "."));
        curarg++;
        // End argument checking
        setModuleName("identifierresolution");
        setLineNumber(1333);    // compilenode string
        var string3830 = new GraceString("");
        var var_result = string3830;
        setLineNumber(1334);    // compilenode block
        var block3831 = new GraceBlock(this, 1334, 2);
        setLineNumber(1);    // compilenode identifier
        block3831.real = function(var_ix, var_v) {
          setLineNumber(1335);    // compilenode identifier
          var call3832 = callmethodChecked(var_v, "asString", [0]);
          var opresult3835 = callmethodChecked(var_result, "++", [1], call3832);
          var_result = opresult3835;
          var if3836 = GraceDone;
          setLineNumber(1336);    // compilenode identifier
          var call3838 = callmethodChecked(var_xs, "size", [0]);
          var diff3840 = callmethodChecked(call3838, "-", [1], new GraceNum(1));
          var opresult3843 = callmethodChecked(var_ix, "==", [1], diff3840);
          if (Grace_isTrue(opresult3843)) {
            setLineNumber(1337);    // compilenode string
            var string3844 = new GraceString(" and ");
            var opresult3847 = callmethodChecked(var_result, "++", [1], string3844);
            var_result = opresult3847;
            if3836 = GraceDone;
          } else {
            var if3848 = GraceDone;
            setLineNumber(1338);    // compilenode identifier
            var call3850 = callmethodChecked(var_xs, "size", [0]);
            var diff3852 = callmethodChecked(call3850, "-", [1], new GraceNum(1));
            var opresult3855 = callmethodChecked(var_ix, "<", [1], diff3852);
            if (Grace_isTrue(opresult3855)) {
              setLineNumber(1339);    // compilenode string
              var string3856 = new GraceString(", ");
              var opresult3859 = callmethodChecked(var_result, "++", [1], string3856);
              var_result = opresult3859;
              if3848 = GraceDone;
            }
            if3836 = if3848;
          }
          return if3836;
        };
        setLineNumber(1334);    // compilenode identifier
        var call3860 = callmethodChecked(var_xs, "keysAndValuesDo", [1], block3831);
        setLineNumber(1342);    // compilenode identifier
        return var_result;
      };
      func3828.paramCounts = [1];
      this.methods["readableStringFrom"] = func3828;
      func3828.definitionLine = 1332;
      func3828.definitionModule = "identifierresolution";
      setLineNumber(1345);    // compilenode method
      var func3861 = function(argcv) {    // method transformBind(1)ancestors(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_bindNode = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for transformBind (arg list 1) of transformBind(1)ancestors(1)"));
        var var_as = arguments[curarg];
        curarg++;
        if (argcv[1] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ancestors (arg list 2) of transformBind(1)ancestors(1)"));
        setModuleName("identifierresolution");
        setLineNumber(1349);    // compilenode identifier
        var call3862 = callmethodChecked(var_bindNode, "dest", [0]);
        var var_dest = call3862;
        setLineNumber(1350);    // compilenode identifier
        var call3863 = callmethodChecked(var_bindNode, "scope", [0]);
        var var_currentScope = call3863;
        var if3864 = GraceDone;
        setLineNumber(1351);    // compilenode string
        var string3865 = new GraceString("member");
        var call3867 = callmethodChecked(var_dest, "kind", [0]);
        var opresult3869 = callmethodChecked(call3867, "==", [1], string3865);
        if (Grace_isTrue(opresult3869)) {
          setLineNumber(1352);    // compilenode string
          var string3870 = new GraceString(":=");
          var call3872 = callmethodChecked(var_dest, "value", [0]);
          var opresult3874 = callmethodChecked(call3872, "++", [1], string3870);
          var call3875 = callmethodChecked(var_dest, "value:=", [1], opresult3874);
          setLineNumber(1354);    // compilenode identifier
          var call3877 = callmethodChecked(var_dest, "value", [0]);
          var call3879 = callmethodChecked(var_bindNode, "value", [0]);
          var array3878 = new PrimitiveGraceList([call3879]);
          var call3880 = callmethodChecked(var_ast, "callWithPart", [0]);
          var call3881 = callmethodChecked(call3880, "request()withArgs", [1, 1], call3877, array3878);
          var array3876 = new PrimitiveGraceList([call3881]);
          setLineNumber(1353);    // compilenode identifier
          var call3882 = callmethodChecked(var_ast, "callNode", [0]);
          var call3883 = callmethodChecked(call3882, "new()scope", [2, 1], var_dest, array3876, var_currentScope);
          if3864 = call3883;
        } else {
          setLineNumber(1357);    // compilenode identifier
          if3864 = var_bindNode;
        }
        return if3864;
      };
      func3861.paramCounts = [1, 1];
      this.methods["transformBind()ancestors"] = func3861;
      func3861.definitionLine = 1345;
      func3861.definitionModule = "identifierresolution";
      setLineNumber(1362);    // compilenode method
      var func3884 = function(argcv) {    // method transformInherits(1)ancestors(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_inhNode = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for transformInherits (arg list 1) of transformInherits(1)ancestors(1)"));
        var var_as = arguments[curarg];
        curarg++;
        if (argcv[1] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ancestors (arg list 2) of transformInherits(1)ancestors(1)"));
        setModuleName("identifierresolution");
        setLineNumber(1366);    // compilenode identifier
        var call3885 = callmethodChecked(var_inhNode, "value", [0]);
        var var_superObject = call3885;
        setLineNumber(1367);    // compilenode identifier
        var call3886 = callmethodChecked(var_inhNode, "scope", [0]);
        var var_currentScope = call3886;
        var if3887 = GraceDone;
        setLineNumber(1368);    // compilenode identifier
        var call3888 = callmethodChecked(var_currentScope, "isObjectScope", [0]);
        var call3889 = callmethodChecked(call3888, "not", [0]);
        if (Grace_isTrue(call3889)) {
          setLineNumber(1369);    // compilenode string
          var string3890 = new GraceString(" statements must be directly inside an object");
          var call3892 = callmethodChecked(var_inhNode, "statementName", [0]);
          var string3894 = new GraceString("");
          var opresult3896 = callmethodChecked(string3894, "++", [1], call3892);
          var opresult3898 = callmethodChecked(opresult3896, "++", [1], string3890);
          setLineNumber(1370);    // compilenode identifier
          var call3899 = callmethodChecked(var_inhNode, "line", [0]);
          var call3900 = callmethodChecked(var_inhNode, "linePos", [0]);
          var call3902 = callmethodChecked(var_inhNode, "linePos", [0]);
          var opresult3904 = callmethodChecked(call3902, "+", [1], new GraceNum(7));
          setLineNumber(1369);    // compilenode identifier
          var call3905 = callmethodChecked(var_errormessages, "syntaxError()atRange", [1, 3], opresult3898, call3899, call3900, opresult3904);
          if3887 = call3905;
        }
        var if3906 = GraceDone;
        setLineNumber(1372);    // compilenode identifier
        var call3907 = callmethodChecked(var_superObject, "isAppliedOccurenceOfIdentifier", [0]);
        if (Grace_isTrue(call3907)) {
          setLineNumber(1374);    // compilenode identifier
          var call3908 = callmethodChecked(var_superObject, "nameString", [0]);
          var call3909 = callmethodChecked(var_currentScope, "thatDefines", [1], call3908);
          var var_definingScope = call3909;
          var if3910 = GraceDone;
          setLineNumber(1375);    // compilenode string
          var string3911 = new GraceString("built-in");
          var call3913 = callmethodChecked(var_definingScope, "variety", [0]);
          var opresult3915 = callmethodChecked(call3913, "==", [1], string3911);
          if (Grace_isTrue(opresult3915)) {
            return var_inhNode;
          }
          if3906 = if3910;
        }
        setLineNumber(1377);    // compilenode identifier
        var call3916 = callmethodChecked(var_currentScope, "scopeReferencedBy", [1], var_superObject);
        var var_superScope = call3916;
        var if3917 = GraceDone;
        setLineNumber(1378);    // compilenode identifier
        var call3918 = callmethodChecked(var_inhNode, "isUse", [0]);
        if (Grace_isTrue(call3918)) {
        } else {
          var if3919 = GraceDone;
          setLineNumber(1380);    // compilenode identifier
          var call3920 = callmethodChecked(var_inhNode, "inheritsFromCall", [0]);
          if (Grace_isTrue(call3920)) {
            setLineNumber(1381);    // compilenode identifier
            var call3921 = callmethodChecked(var_inhNode, "value", [0]);
            var var_superCall = call3921;
            setLineNumber(1382);    // compilenode string
            var string3922 = new GraceString("object");
            setLineNumber(1383);    // compilenode string
            var string3924 = new GraceString("self");
            var call3925 = callmethodChecked(var_ast, "identifierNode", [0]);
            var call3926 = callmethodChecked(call3925, "new()scope", [2, 1], string3924, GraceFalse, var_currentScope);
            var array3923 = new PrimitiveGraceList([call3926]);
            setLineNumber(1382);    // compilenode identifier
            var call3927 = callmethodChecked(var_ast, "callWithPart", [0]);
            var call3928 = callmethodChecked(call3927, "request()withArgs", [1, 1], string3922, array3923);
            var call3929 = callmethodChecked(var_superCall, "with", [0]);
            var call3930 = callmethodChecked(call3929, "push", [1], call3928);
            setLineNumber(1384);    // compilenode string
            var string3931 = new GraceString("()object");
            var call3933 = callmethodChecked(var_superCall, "value", [0]);
            var call3934 = callmethodChecked(call3933, "value", [0]);
            var opresult3936 = callmethodChecked(call3934, "++", [1], string3931);
            setLineNumber(1385);    // compilenode identifier
            var call3937 = callmethodChecked(var_superCall, "value", [0]);
            var call3938 = callmethodChecked(call3937, "target", [0]);
            setLineNumber(1384);    // compilenode identifier
            var call3939 = callmethodChecked(var_ast, "memberNode", [0]);
            var call3940 = callmethodChecked(call3939, "new()scope", [2, 1], opresult3936, call3938, var_currentScope);
            var var_newmem = call3940;
            setLineNumber(1387);    // compilenode identifier
            var call3941 = callmethodChecked(var_superCall, "with", [0]);
            var call3942 = callmethodChecked(var_ast, "callNode", [0]);
            var call3943 = callmethodChecked(call3942, "new()scope", [2, 1], var_newmem, call3941, var_currentScope);
            var var_newcall = call3943;
            setLineNumber(1388);    // compilenode identifier
            var call3944 = callmethodChecked(var_inhNode, "value:=", [1], var_newcall);
            if3919 = call3944;
          } else {
            var if3945 = GraceDone;
            setLineNumber(1389);    // compilenode identifier
            var call3946 = callmethodChecked(var_inhNode, "inheritsFromMember", [0]);
            if (Grace_isTrue(call3946)) {
              setLineNumber(1390);    // compilenode string
              var string3947 = new GraceString("()object");
              var call3949 = callmethodChecked(var_inhNode, "value", [0]);
              var call3950 = callmethodChecked(call3949, "value", [0]);
              var opresult3952 = callmethodChecked(call3950, "++", [1], string3947);
              setLineNumber(1391);    // compilenode identifier
              var call3953 = callmethodChecked(var_inhNode, "value", [0]);
              var call3954 = callmethodChecked(call3953, "in", [0]);
              setLineNumber(1390);    // compilenode identifier
              var call3955 = callmethodChecked(var_ast, "memberNode", [0]);
              var call3956 = callmethodChecked(call3955, "new", [2], opresult3952, call3954);
              var var_newmem = call3956;
              setLineNumber(1394);    // compilenode identifier
              var call3958 = callmethodChecked(var_inhNode, "value", [0]);
              var call3959 = callmethodChecked(call3958, "value", [0]);
              var array3960 = new PrimitiveGraceList([]);
              var call3961 = callmethodChecked(var_ast, "callWithPart", [0]);
              var call3962 = callmethodChecked(call3961, "request()withArgs()scope", [1, 1, 1], call3959, array3960, var_currentScope);
              setLineNumber(1395);    // compilenode string
              var string3963 = new GraceString("object");
              setLineNumber(1396);    // compilenode string
              var string3965 = new GraceString("self");
              var call3966 = callmethodChecked(var_ast, "identifierNode", [0]);
              var call3967 = callmethodChecked(call3966, "new()scope", [2, 1], string3965, GraceFalse, var_currentScope);
              var array3964 = new PrimitiveGraceList([call3967]);
              setLineNumber(1395);    // compilenode identifier
              var call3968 = callmethodChecked(var_ast, "callWithPart", [0]);
              var call3969 = callmethodChecked(call3968, "request()withArgs()scope", [1, 1, 1], string3963, array3964, var_currentScope);
              var array3957 = new PrimitiveGraceList([call3962, call3969]);
              setLineNumber(1393);    // compilenode identifier
              var call3970 = callmethodChecked(var_ast, "callNode", [0]);
              var call3971 = callmethodChecked(call3970, "new()scope", [2, 1], var_newmem, array3957, var_currentScope);
              var var_newcall = call3971;
              setLineNumber(1399);    // compilenode identifier
              var call3972 = callmethodChecked(var_inhNode, "value:=", [1], var_newcall);
              if3945 = call3972;
            } else {
              var if3973 = GraceDone;
              setLineNumber(1400);    // compilenode string
              var string3974 = new GraceString("ObjectInheritance");
              var call3975 = callmethodChecked(var_util, "extensions", [0]);
              var call3976 = callmethodChecked(call3975, "contains", [1], string3974);
              var call3977 = callmethodChecked(call3976, "prefix!", [0]);
              if (Grace_isTrue(call3977)) {
                setLineNumber(1401);    // compilenode string
                var string3978 = new GraceString("inheritance must be from a freshly-created object");
                setLineNumber(1402);    // compilenode identifier
                var call3979 = callmethodChecked(var_inhNode, "line", [0]);
                var call3980 = callmethodChecked(var_superObject, "linePos", [0]);
                setLineNumber(1403);    // compilenode identifier
                var call3982 = callmethodChecked(var_superObject, "nameString", [0]);
                var call3983 = callmethodChecked(call3982, "size", [0]);
                var call3985 = callmethodChecked(var_superObject, "linePos", [0]);
                var opresult3987 = callmethodChecked(call3985, "+", [1], call3983);
                var diff3989 = callmethodChecked(opresult3987, "-", [1], new GraceNum(1));
                setLineNumber(1401);    // compilenode identifier
                var call3990 = callmethodChecked(var_errormessages, "syntaxError()atRange", [1, 3], string3978, call3979, call3980, diff3989);
                if3973 = call3990;
              }
              if3945 = if3973;
            }
            if3919 = if3945;
          }
          if3917 = if3919;
        }
        setLineNumber(1405);    // compilenode identifier
        return var_inhNode;
      };
      func3884.paramCounts = [1, 1];
      this.methods["transformInherits()ancestors"] = func3884;
      func3884.definitionLine = 1362;
      func3884.definitionModule = "identifierresolution";
      setLineNumber(1408);    // compilenode method
      var func3991 = function(argcv) {    // method rewriteMatches(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_topNode = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for rewriteMatches(1)"));
        setModuleName("identifierresolution");
        setLineNumber(1409);    // compilenode block
        var block3992 = new GraceBlock(this, 1409, 2);
        setLineNumber(1);    // compilenode identifier
        block3992.real = function(var_node, var_as) {
          var if3993 = GraceDone;
          setLineNumber(1410);    // compilenode identifier
          var call3994 = callmethodChecked(var_node, "isMatchingBlock", [0]);
          if (Grace_isTrue(call3994)) {
            setLineNumber(1411);    // compilenode identifier
            onSelf = true;
            var call3995 = callmethodChecked(this, "rewritematchblock", [1], var_node);
            if3993 = call3995;
          } else {
            setLineNumber(1413);    // compilenode identifier
            if3993 = var_node;
          }
          return if3993;
        };
        setLineNumber(1415);    // compilenode identifier
        var call3996 = callmethodChecked(var_ast, "ancestorChain", [0]);
        var call3997 = callmethodChecked(call3996, "empty", [0]);
        setLineNumber(1409);    // compilenode identifier
        var call3998 = callmethodChecked(var_topNode, "map()ancestors", [1, 1], block3992, call3997);
        return call3998;
      };
      func3991.paramCounts = [1];
      this.methods["rewriteMatches"] = func3991;
      func3991.definitionLine = 1408;
      func3991.definitionModule = "identifierresolution";
      setLineNumber(1418);    // compilenode method
      var func3999 = function(argcv) {    // method resolve(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_moduleObject = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for resolve(1)"));
        setModuleName("identifierresolution");
        setLineNumber(1419);    // compilenode string
        var string4000 = new GraceString("rewriting tree.");
        var call4001 = callmethodChecked(var_util, "log_verbose", [1], string4000);
        setLineNumber(1420);    // compilenode identifier
        onSelf = true;
        var call4002 = callmethodChecked(this, "setupContext", [1], var_moduleObject);
        setLineNumber(1421);    // compilenode identifier
        var call4003 = callmethodChecked(var_util, "setPosition", [2], new GraceNum(0), new GraceNum(0));
        setLineNumber(1422);    // compilenode identifier
        var call4004 = callmethodChecked(var_moduleObject, "scope:=", [1], var_moduleScope);
        setLineNumber(1423);    // compilenode identifier
        var array4005 = new PrimitiveGraceList([var_moduleObject]);
        setLineNumber(1424);    // compilenode string
        var string4006 = new GraceString("prelude");
        setLineNumber(1423);    // compilenode identifier
        var call4007 = callmethodChecked(var_ast, "moduleNode", [0]);
        var call4008 = callmethodChecked(call4007, "body()named()scope", [1, 1, 1], array4005, string4006, var_preludeScope);
        var var_preludeObject = call4008;
        setLineNumber(1425);    // compilenode identifier
        var call4009 = callmethodChecked(var_ast, "ancestorChain", [0]);
        var call4010 = callmethodChecked(call4009, "with", [1], var_preludeObject);
        var var_preludeChain = call4010;
        setLineNumber(1427);    // compilenode identifier
        onSelf = true;
        var call4011 = callmethodChecked(this, "rewriteMatches", [1], var_moduleObject);
        var var_patternMatchModule = call4011;
        setLineNumber(1428);    // compilenode string
        var string4012 = new GraceString("pattern-match rewriting done.");
        var call4013 = callmethodChecked(var_util, "log_verbose", [1], string4012);
        var if4014 = GraceDone;
        setLineNumber(1430);    // compilenode string
        var string4015 = new GraceString("patterns");
        var call4017 = callmethodChecked(var_util, "target", [0]);
        var opresult4019 = callmethodChecked(call4017, "==", [1], string4015);
        if (Grace_isTrue(opresult4019)) {
          setLineNumber(1431);    // compilenode string
          var string4020 = new GraceString("=====================================");
          var call4021 = callmethodChecked(var_util, "outprint", [1], string4020);
          setLineNumber(1432);    // compilenode string
          var string4022 = new GraceString("module after pattern-match re-writing");
          var call4023 = callmethodChecked(var_util, "outprint", [1], string4022);
          setLineNumber(1433);    // compilenode string
          var string4024 = new GraceString("=====================================");
          var call4025 = callmethodChecked(var_util, "outprint", [1], string4024);
          setLineNumber(1434);    // compilenode identifier
          var call4026 = callmethodChecked(var_patternMatchModule, "pretty", [1], new GraceNum(0));
          var call4027 = callmethodChecked(var_util, "outprint", [1], call4026);
          setLineNumber(1435);    // compilenode string
          var string4028 = new GraceString("done");
          var call4029 = callmethodChecked(var_util, "log_verbose", [1], string4028);
          setLineNumber(1436);    // compilenode identifier
          var call4030 = callmethodChecked(var_sys, "exit", [1], new GraceNum(0));
          if4014 = call4030;
        }
        setLineNumber(1439);    // compilenode identifier
        onSelf = true;
        var call4031 = callmethodChecked(this, "buildSymbolTableFor()ancestors", [1, 1], var_patternMatchModule, var_preludeChain);
        setLineNumber(1440);    // compilenode string
        var string4032 = new GraceString("symbol tables built.");
        var call4033 = callmethodChecked(var_util, "log_verbose", [1], string4032);
        var if4034 = GraceDone;
        setLineNumber(1442);    // compilenode string
        var string4035 = new GraceString("symbols");
        var call4037 = callmethodChecked(var_util, "target", [0]);
        var opresult4039 = callmethodChecked(call4037, "==", [1], string4035);
        if (Grace_isTrue(opresult4039)) {
          setLineNumber(1443);    // compilenode string
          var string4040 = new GraceString("=====================================");
          var call4041 = callmethodChecked(var_util, "outprint", [1], string4040);
          setLineNumber(1444);    // compilenode string
          var string4042 = new GraceString("module with symbol tables");
          var call4043 = callmethodChecked(var_util, "outprint", [1], string4042);
          setLineNumber(1445);    // compilenode string
          var string4044 = new GraceString("=====================================");
          var call4045 = callmethodChecked(var_util, "outprint", [1], string4044);
          setLineNumber(1446);    // compilenode string
          var string4046 = new GraceString("top-level");
          var call4047 = callmethodChecked(var_util, "outprint", [1], string4046);
          setLineNumber(1447);    // compilenode string
          var string4048 = new GraceString("");
          var call4050 = callmethodChecked(var_universalScope, "asDebugString", [0]);
          var string4052 = new GraceString("Universal scope = ");
          var opresult4054 = callmethodChecked(string4052, "++", [1], call4050);
          var opresult4056 = callmethodChecked(opresult4054, "++", [1], string4048);
          var call4057 = callmethodChecked(var_util, "outprint", [1], opresult4056);
          setLineNumber(1448);    // compilenode block
          var block4058 = new GraceBlock(this, 1448, 1);
          setLineNumber(1);    // compilenode identifier
          block4058.real = function(var_each) {
            setLineNumber(1449);    // compilenode identifier
            var call4059 = callmethodChecked(var_each, "asString", [0]);
            var call4060 = callmethodChecked(var_util, "outprint", [1], call4059);
            setLineNumber(1450);    // compilenode identifier
            var call4061 = callmethodChecked(var_each, "elementScopesAsString", [0]);
            var call4062 = callmethodChecked(var_util, "outprint", [1], call4061);
            setLineNumber(1451);    // compilenode string
            var string4063 = new GraceString("----------------");
            var call4064 = callmethodChecked(var_util, "outprint", [1], string4063);
            return call4064;
          };
          setLineNumber(1448);    // compilenode identifier
          var call4065 = callmethodChecked(var_patternMatchModule, "scope", [0]);
          var call4066 = callmethodChecked(call4065, "withSurroundingScopesDo", [1], block4058);
          setLineNumber(1453);    // compilenode identifier
          var call4067 = callmethodChecked(var_patternMatchModule, "pretty", [1], new GraceNum(0));
          var call4068 = callmethodChecked(var_util, "outprint", [1], call4067);
          setLineNumber(1454);    // compilenode string
          var string4069 = new GraceString("done");
          var call4070 = callmethodChecked(var_util, "log_verbose", [1], string4069);
          setLineNumber(1455);    // compilenode identifier
          var call4071 = callmethodChecked(var_sys, "exit", [1], new GraceNum(0));
          if4034 = call4071;
        }
        setLineNumber(1457);    // compilenode identifier
        onSelf = true;
        var call4072 = callmethodChecked(this, "resolveIdentifiers", [1], var_patternMatchModule);
        return call4072;
      };
      func3999.paramCounts = [1];
      this.methods["resolve"] = func3999;
      func3999.definitionLine = 1418;
      func3999.definitionModule = "identifierresolution";
      setLineNumber(12);    // compilenode string
      var string4073 = new GraceString("completed");
      var call4074 = callmethodChecked(var_prelude, "Singleton", [0]);
      var call4075 = callmethodChecked(call4074, "named", [1], string4073);
      var var_completed = call4075;
      var func4076 = function(argcv) {    // method completed
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for completed"));
        setModuleName("identifierresolution");
        // completed is a simple accessor - elide try ... catch
        return var_completed;
      };
      func4076.paramCounts = [0];
      this.methods["completed"] = func4076;
      func4076.definitionLine = 12;
      func4076.definitionModule = "identifierresolution";
      this.methods["completed"].debug = "def";
      setLineNumber(13);    // compilenode string
      var string4077 = new GraceString("inProgress");
      var call4078 = callmethodChecked(var_prelude, "Singleton", [0]);
      var call4079 = callmethodChecked(call4078, "named", [1], string4077);
      var var_inProgress = call4079;
      var func4080 = function(argcv) {    // method inProgress
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for inProgress"));
        setModuleName("identifierresolution");
        // inProgress is a simple accessor - elide try ... catch
        return var_inProgress;
      };
      func4080.paramCounts = [0];
      this.methods["inProgress"] = func4080;
      func4080.definitionLine = 13;
      func4080.definitionModule = "identifierresolution";
      this.methods["inProgress"].debug = "def";
      setLineNumber(14);    // compilenode string
      var string4081 = new GraceString("undiscovered");
      var call4082 = callmethodChecked(var_prelude, "Singleton", [0]);
      var call4083 = callmethodChecked(call4082, "named", [1], string4081);
      var var_undiscovered = call4083;
      var func4084 = function(argcv) {    // method undiscovered
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for undiscovered"));
        setModuleName("identifierresolution");
        // undiscovered is a simple accessor - elide try ... catch
        return var_undiscovered;
      };
      func4084.paramCounts = [0];
      this.methods["undiscovered"] = func4084;
      func4084.definitionLine = 14;
      func4084.definitionModule = "identifierresolution";
      this.methods["undiscovered"].debug = "def";
      setLineNumber(17);    // compilenode num
      var var_stSerial = new GraceNum(100);
      setLineNumber(14);    // compilenode method
      var func4085 = function(argcv) {    // method stSerial
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for stSerial"));
        setModuleName("identifierresolution");
        // stSerial is a simple accessor - elide try ... catch
        setLineNumber(17);    // compilenode identifier
        return var_stSerial;
      };
      func4085.paramCounts = [0];
      this.methods["stSerial"] = func4085;
      func4085.definitionLine = 14;
      func4085.definitionModule = "identifierresolution";
      setLineNumber(14);    // compilenode method
      var func4086 = function(argcv) {    // method stSerial:=(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var___95__var__95__assign__95__tmp = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for stSerial:=(1)"));
        setModuleName("identifierresolution");
        var_stSerial = var___95__var__95__assign__95__tmp;
        return GraceDone;
      };
      func4086.paramCounts = [1];
      this.methods["stSerial:="] = func4086;
      func4086.definitionLine = 14;
      func4086.definitionModule = "identifierresolution";
      this.methods["stSerial"].debug = "var";
      setLineNumber(19);    // compilenode string
      var string4088 = new GraceString("self");
      var string4089 = new GraceString("super");
      var string4090 = new GraceString("outer");
      var string4091 = new GraceString("true");
      var string4092 = new GraceString("false");
      var array4087 = new PrimitiveGraceList([string4088, string4089, string4090, string4091, string4092]);
      var call4093 = callmethodChecked(var_prelude, "sequence", [1], array4087);
      var var_reserved = call4093;
      setLineNumber(14);    // compilenode method
      var func4094 = function(argcv) {    // method reserved
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for reserved"));
        setModuleName("identifierresolution");
        // reserved is a simple accessor - elide try ... catch
        setLineNumber(19);    // compilenode identifier
        return var_reserved;
      };
      func4094.paramCounts = [0];
      this.methods["reserved"] = func4094;
      func4094.definitionLine = 14;
      func4094.definitionModule = "identifierresolution";
      this.methods["reserved"].debug = "def";
      setLineNumber(29);    // compilenode block
      var block4095 = new GraceBlock(this, 29, 2);
      setLineNumber(1);    // compilenode identifier
      block4095.real = function(var_a, var_b) {
        setLineNumber(29);    // compilenode identifier
        var call4096 = callmethodChecked(var_b, "key", [0]);
        var call4097 = callmethodChecked(var_a, "key", [0]);
        var call4098 = callmethodChecked(call4097, "compare", [1], call4096);
        return call4098;
      };
      var var_keyOrdering = block4095;
      var func4099 = function(argcv) {    // method keyOrdering
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for keyOrdering"));
        setModuleName("identifierresolution");
        // keyOrdering is a simple accessor - elide try ... catch
        return var_keyOrdering;
      };
      func4099.paramCounts = [0];
      this.methods["keyOrdering"] = func4099;
      func4099.definitionLine = 29;
      func4099.definitionModule = "identifierresolution";
      this.methods["keyOrdering"].debug = "def";
      setLineNumber(31);    // compilenode typedec
      // Type decl DeclKind
      var call4101 = callmethodChecked(var_k, "T", [0]);
      var var_DeclKind = call4101;
      var func4102 = function(argcv) {    // method DeclKind
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for DeclKind"));
        setModuleName("identifierresolution");
        // DeclKind is a simple accessor - elide try ... catch
        return var_DeclKind;
      };
      func4102.paramCounts = [0];
      this.methods["DeclKind"] = func4102;
      func4102.definitionLine = 31;
      func4102.definitionModule = "identifierresolution";
      setLineNumber(350);    // compilenode string
      var string4103 = new GraceString("empty");
      onSelf = true;
      var call4104 = callmethodChecked(this, "newScopeKind", [1], string4103);
      var var_emptyScope = call4104;
      setLineNumber(31);    // compilenode method
      var func4105 = function(argcv) {    // method emptyScope
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for emptyScope"));
        setModuleName("identifierresolution");
        // emptyScope is a simple accessor - elide try ... catch
        setLineNumber(350);    // compilenode identifier
        return var_emptyScope;
      };
      func4105.paramCounts = [0];
      this.methods["emptyScope"] = func4105;
      func4105.definitionLine = 31;
      func4105.definitionModule = "identifierresolution";
      this.methods["emptyScope"].debug = "def";
      setLineNumber(351);    // compilenode identifier
      var call4106 = callmethodChecked(var_ast, "nullNode", [0]);
      var call4107 = callmethodChecked(call4106, "scope:=", [1], var_emptyScope);
      setLineNumber(352);    // compilenode string
      var string4108 = new GraceString("built-in");
      onSelf = true;
      var call4109 = callmethodChecked(this, "newScopeIn()kind", [1, 1], var_emptyScope, string4108);
      var var_builtInsScope = call4109;
      setLineNumber(351);    // compilenode method
      var func4110 = function(argcv) {    // method builtInsScope
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for builtInsScope"));
        setModuleName("identifierresolution");
        // builtInsScope is a simple accessor - elide try ... catch
        setLineNumber(352);    // compilenode identifier
        return var_builtInsScope;
      };
      func4110.paramCounts = [0];
      this.methods["builtInsScope"] = func4110;
      func4110.definitionLine = 351;
      func4110.definitionModule = "identifierresolution";
      this.methods["builtInsScope"].debug = "def";
      setLineNumber(353);    // compilenode string
      var string4111 = new GraceString("dialect");
      onSelf = true;
      var call4112 = callmethodChecked(this, "newScopeIn()kind", [1, 1], var_builtInsScope, string4111);
      var var_preludeScope = call4112;
      setLineNumber(351);    // compilenode method
      var func4113 = function(argcv) {    // method preludeScope
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for preludeScope"));
        setModuleName("identifierresolution");
        // preludeScope is a simple accessor - elide try ... catch
        setLineNumber(353);    // compilenode identifier
        return var_preludeScope;
      };
      func4113.paramCounts = [0];
      this.methods["preludeScope"] = func4113;
      func4113.definitionLine = 351;
      func4113.definitionModule = "identifierresolution";
      this.methods["preludeScope"].debug = "def";
      setLineNumber(354);    // compilenode string
      var string4114 = new GraceString("module");
      onSelf = true;
      var call4115 = callmethodChecked(this, "newScopeIn()kind", [1, 1], var_preludeScope, string4114);
      var var_moduleScope = call4115;
      setLineNumber(351);    // compilenode method
      var func4116 = function(argcv) {    // method moduleScope
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for moduleScope"));
        setModuleName("identifierresolution");
        // moduleScope is a simple accessor - elide try ... catch
        setLineNumber(354);    // compilenode identifier
        return var_moduleScope;
      };
      func4116.paramCounts = [0];
      this.methods["moduleScope"] = func4116;
      func4116.definitionLine = 351;
      func4116.definitionModule = "identifierresolution";
      this.methods["moduleScope"].debug = "def";
      setLineNumber(355);    // compilenode string
      var string4117 = new GraceString("object");
      onSelf = true;
      var call4118 = callmethodChecked(this, "newScopeIn()kind", [1, 1], var_emptyScope, string4117);
      var var_graceObjectScope = call4118;
      setLineNumber(351);    // compilenode method
      var func4119 = function(argcv) {    // method graceObjectScope
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for graceObjectScope"));
        setModuleName("identifierresolution");
        // graceObjectScope is a simple accessor - elide try ... catch
        setLineNumber(355);    // compilenode identifier
        return var_graceObjectScope;
      };
      func4119.paramCounts = [0];
      this.methods["graceObjectScope"] = func4119;
      func4119.definitionLine = 351;
      func4119.definitionModule = "identifierresolution";
      this.methods["graceObjectScope"].debug = "def";
      setLineNumber(356);    // compilenode string
      var string4120 = new GraceString("object");
      onSelf = true;
      var call4121 = callmethodChecked(this, "newScopeIn()kind", [1, 1], var_builtInsScope, string4120);
      var var_booleanScope = call4121;
      setLineNumber(351);    // compilenode method
      var func4122 = function(argcv) {    // method booleanScope
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for booleanScope"));
        setModuleName("identifierresolution");
        // booleanScope is a simple accessor - elide try ... catch
        setLineNumber(356);    // compilenode identifier
        return var_booleanScope;
      };
      func4122.paramCounts = [0];
      this.methods["booleanScope"] = func4122;
      func4122.definitionLine = 351;
      func4122.definitionModule = "identifierresolution";
      this.methods["booleanScope"].debug = "def";
      setLineNumber(358);    // compilenode object
      var obj4123 = Grace_allocObject(null, "universalScope");
      obj4123.definitionModule = "identifierresolution";
      obj4123.definitionLine = 358;
      obj4123.outer = this;
      var reader_identifierresolution_outer4124 = function() {
        return this.outer;
      };
      obj4123.methods["outer"] = reader_identifierresolution_outer4124;
      var obj_init_4123 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj4123;
        var func4125 = function(argcv) {    // method hasParent
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for hasParent"));
          setModuleName("identifierresolution");
          // hasParent is a simple accessor - elide try ... catch
          setLineNumber(362);    // compilenode identifier
          return GraceFalse;
        };
        func4125.paramCounts = [0];
        obj4123.methods["hasParent"] = func4125;
        func4125.definitionLine = 362;
        func4125.definitionModule = "identifierresolution";
        var func4126 = function(argcv) {    // method parent
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for parent"));
          setModuleName("identifierresolution");
          setLineNumber(363);    // compilenode string
          var string4127 = new GraceString("universal scope has no parent");
          var call4128 = callmethodChecked(var_prelude, "ProgrammingError", [0]);
          var call4129 = callmethodChecked(call4128, "raise", [1], string4127);
          return call4129;
        };
        func4126.paramCounts = [0];
        obj4123.methods["parent"] = func4126;
        func4126.definitionLine = 363;
        func4126.definitionModule = "identifierresolution";
        var func4130 = function(argcv) {    // method addName(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_n = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addName(1)"));
          setModuleName("identifierresolution");
          setLineNumber(364);    // compilenode string
          var string4131 = new GraceString("can't add to the universal scope");
          var call4132 = callmethodChecked(var_prelude, "ProgrammingError", [0]);
          var call4133 = callmethodChecked(call4132, "raise", [1], string4131);
          return call4133;
        };
        func4130.paramCounts = [1];
        obj4123.methods["addName"] = func4130;
        func4130.definitionLine = 364;
        func4130.definitionModule = "identifierresolution";
        var func4134 = function(argcv) {    // method addName(1)as(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_n = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addName (arg list 1) of addName(1)as(1)"));
          var var_kd = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for as (arg list 2) of addName(1)as(1)"));
          setModuleName("identifierresolution");
          setLineNumber(365);    // compilenode string
          var string4135 = new GraceString("can't add to the universal scope");
          var call4136 = callmethodChecked(var_prelude, "ProgrammingError", [0]);
          var call4137 = callmethodChecked(call4136, "raise", [1], string4135);
          return call4137;
        };
        func4134.paramCounts = [1, 1];
        obj4123.methods["addName()as"] = func4134;
        func4134.definitionLine = 365;
        func4134.definitionModule = "identifierresolution";
        var func4138 = function(argcv) {    // method addNode(1)as(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_n = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addNode (arg list 1) of addNode(1)as(1)"));
          var var_kd = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for as (arg list 2) of addNode(1)as(1)"));
          setModuleName("identifierresolution");
          setLineNumber(366);    // compilenode string
          var string4139 = new GraceString("can't add to the universal scope");
          var call4140 = callmethodChecked(var_prelude, "ProgrammingError", [0]);
          var call4141 = callmethodChecked(call4140, "raise", [1], string4139);
          return call4141;
        };
        func4138.paramCounts = [1, 1];
        obj4123.methods["addNode()as"] = func4138;
        func4138.definitionLine = 366;
        func4138.definitionModule = "identifierresolution";
        var func4142 = function(argcv) {    // method contains(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_n = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for contains(1)"));
          setModuleName("identifierresolution");
          // contains(1) is a simple accessor - elide try ... catch
          setLineNumber(367);    // compilenode identifier
          return GraceTrue;
        };
        func4142.paramCounts = [1];
        obj4123.methods["contains"] = func4142;
        func4142.definitionLine = 367;
        func4142.definitionModule = "identifierresolution";
        var func4143 = function(argcv) {    // method withSurroundingScopesDo(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_b = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for withSurroundingScopesDo(1)"));
          setModuleName("identifierresolution");
          setLineNumber(368);    // compilenode identifier
          var call4144 = callmethodChecked(var_b, "apply", [1], this);
          return call4144;
        };
        func4143.paramCounts = [1];
        obj4123.methods["withSurroundingScopesDo"] = func4143;
        func4143.definitionLine = 368;
        func4143.definitionModule = "identifierresolution";
        var func4145 = function(argcv) {    // method kind(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_n = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for kind(1)"));
          setModuleName("identifierresolution");
          setLineNumber(369);    // compilenode string
          var string4146 = new GraceString("unknown");
          return string4146;
        };
        func4145.paramCounts = [1];
        obj4123.methods["kind"] = func4145;
        func4145.definitionLine = 369;
        func4145.definitionModule = "identifierresolution";
        var func4147 = function(argcv) {    // method at(1)putScope(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_n = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for at (arg list 1) of at(1)putScope(1)"));
          var var_scp = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for putScope (arg list 2) of at(1)putScope(1)"));
          setModuleName("identifierresolution");
          return GraceDone;
        };
        func4147.paramCounts = [1, 1];
        obj4123.methods["at()putScope"] = func4147;
        func4147.definitionLine = 370;
        func4147.definitionModule = "identifierresolution";
        var func4148 = function(argcv) {    // method getScope(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_n = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for getScope(1)"));
          setModuleName("identifierresolution");
          // getScope(1) is a simple accessor - elide try ... catch
          setLineNumber(371);    // compilenode identifier
          return this;
        };
        func4148.paramCounts = [1];
        obj4123.methods["getScope"] = func4148;
        func4148.definitionLine = 371;
        func4148.definitionModule = "identifierresolution";
        var func4149 = function(argcv) {    // method isUniversal
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isUniversal"));
          setModuleName("identifierresolution");
          // isUniversal is a simple accessor - elide try ... catch
          setLineNumber(372);    // compilenode identifier
          return GraceTrue;
        };
        func4149.paramCounts = [0];
        obj4123.methods["isUniversal"] = func4149;
        func4149.definitionLine = 372;
        func4149.definitionModule = "identifierresolution";
        setLineNumber(361);    // compilenode string
        var string4150 = new GraceString("universal");
        var call4151 = callmethodChecked(superDepth, "outer", [0]);
        onOuter = true;
        onSelf = true;
        var call4152 = callmethodChecked(call4151, "newScopeIn()kind()object", [1, 1, 1], var_emptyScope, string4150, this);
        obj4123.superobj = call4152;
        if (call4152.data) obj4123.data = call4152.data;
        if (call4152.hasOwnProperty('_value'))
            obj4123._value = call4152._value;
        superDepth = origSuperDepth;
      };
      obj_init_4123.apply(obj4123, []);
      var var_universalScope = obj4123;
      var func4153 = function(argcv) {    // method universalScope
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for universalScope"));
        setModuleName("identifierresolution");
        // universalScope is a simple accessor - elide try ... catch
        setLineNumber(358);    // compilenode identifier
        return var_universalScope;
      };
      func4153.paramCounts = [0];
      this.methods["universalScope"] = func4153;
      func4153.definitionLine = 361;
      func4153.definitionModule = "identifierresolution";
      this.methods["universalScope"].debug = "def";
      return this;
    }
    gracecode_identifierresolution.imports = ['ast', 'errormessages', 'identifierKinds', 'io', 'mirrors', 'stringMap', 'sys', 'util', 'xmodule'];
    if (typeof gctCache !== "undefined")
      gctCache['identifierresolution'] = "classes:\nconfidential:\n gatherInheritedNames\n gatherUsedNames\nfresh-methods:\n conflictForMethodName()from\n newScopeIn()kind\nfresh:conflictForMethodName()from:\n methodName\n sources\nfresh:newScopeIn()kind:\n ==\n addName\n addName()as\n addNode()as\n asDebugString\n asString\n asStringWithParents\n at()putScope\n checkShadowing()as\n contains\n elementLines\n elementScopes\n elementScopesAsString\n elementTokens\n elements\n enclosingObjectScope\n getScope\n hasDefinitionInNest\n hasParent\n hash\n inSameContextAs\n inheritedNames\n isEmpty\n isInSameObjectAs\n isMethodScope\n isObjectScope\n isUniversal\n keysAndKindsDo\n keysAsList\n kind\n kindInNest\n node\n parent\n resolveOuterMethod\n scopeReferencedBy\n serialNumber\n thatDefines\n thatDefines()ifNone\n variety\n withSurroundingScopesDo\nmethodtypes-of:DeclKind:\nmodules:\n ast\n errormessages\n identifierKinds\n io\n mirrors\n stringMap\n sys\n unixFilePath\n util\n xmodule\npath:\n identifierresolution\npublic:\n DeclKind\n articleFor\n buildSymbolTableFor()ancestors\n checkForAmbiguityOf()definedIn()as\n checkForConflicts\n checkForReservedName\n checkTraitBody\n collectParentNames\n conflictForMethodName()from\n isSameIgnoringCase\n newScopeIn()kind\n newScopeKind\n processGCT\n readableStringFrom\n reportAssignmentTo()declaredInScope\n reportUndeclaredIdentifier\n resolve\n resolveIdentifiers\n rewriteIdentifier()ancestors\n rewriteMatches\n rewritematchblock\n rewritematchblockterm\n setupContext\n transformBind()ancestors\n transformInherits()ancestors\ntypes:\n DeclKind\n";
    if (typeof originalSourceLines !== "undefined") {
      originalSourceLines["identifierresolution"] = [
        "#pragma ExtendedLineups",
        "import \"io\" as io",
        "import \"sys\" as sys",
        "import \"ast\" as ast",
        "import \"util\" as util",
        "import \"xmodule\" as xmodule",
        "import \"stringMap\" as map",
        "import \"mirrors\" as mirrors",
        "import \"errormessages\" as errormessages",
        "import \"identifierKinds\" as k",
        "",
        "def completed = Singleton.named \"completed\"",
        "def inProgress = Singleton.named \"inProgress\"",
        "def undiscovered = Singleton.named \"undiscovered\"",
        "// constants used in detecting cyclic inheritance",
        "",
        "var stSerial := 100",
        "",
        "def reserved = sequence [\"self\", \"super\", \"outer\", \"true\", \"false\"]",
        "// reserved names that cannot be re-assigned or re-declared",
        "",
        "method newScopeKind(variety') {",
        "    // for the top of the scope chain",
        "    def s = newScopeIn(object {})kind(variety')",
        "    s.hasParent := false",
        "    s",
        "}",
        "",
        "def keyOrdering = { a, b -> a.key.compare(b.key) }",
        "",
        "type DeclKind = k.T",
        "",
        "factory method newScopeIn(parent') kind(variety') {",
        "    def elements is public = map.new",
        "    def elementScopes is public = map.new",
        "    def elementLines is public = map.new",
        "    def elementTokens is public = map.new",
        "    def parent is public = parent'",
        "    var hasParent is public := true",
        "    def variety is public = variety'",
        "    var node is public := ast.nullNode      // the outermost ast node that I'm in",
        "    var inheritedNames is public := undiscovered",
        "    stSerial := stSerial + 1",
        "    def serialNumber is public = stSerial",
        "    def hash is public = serialNumber.hash",
        "",
        "    if (isObjectScope) then {",
        "        addName \"self\" as(k.selfDef)",
        "        at \"self\" putScope(self)",
        "    }",
        "    method == (other) { self.isMe(other) }",
        "    method isEmpty { elements.size == 0 }",
        "    method addName(n) {",
        "        elements.put(n, k.methdec)",
        "        elementLines.put(n, util.linenum)",
        "    }",
        "    method addName (n) as (kind:DeclKind) {",
        "        def oldKind = elements.get(n) ifAbsent {",
        "            elements.put(n, kind)",
        "            elementLines.put(n, util.linenum)",
        "            return",
        "        }",
        "        if (kind.isImplicit) then {",
        "            return  // don't overwrite local id with id from trait or super",
        "        }",
        "        if (oldKind.isImplicit)  then {",
        "            elements.put(n, kind)",
        "            elementLines.put(n, util.linenum)",
        "            return",
        "        }",
        "        errormessages.syntaxError(\"'{n}' cannot be\" ++ ",
        "            \" redefined as {kind} because it is already declared as {oldKind}\")",
        "            atRange(util.line, util.linePos, util.linePos + n.size - 1)",
        "    }",
        "    method addNode (nd) as (kind) {",
        "        def ndName = nd.value",
        "        checkShadowing(nd) as(kind)",
        "        def oldKind = elements.get(ndName) ifAbsent {",
        "            elements.put(ndName, kind)",
        "            elementLines.put(ndName, nd.line)",
        "            return",
        "        }",
        "        if (kind.isImplicit) then {",
        "            return  // don't overwrite local id with id from trait or super",
        "        }",
        "        if (oldKind.isImplicit)  then {",
        "            elements.put(ndName, kind)",
        "            elementLines.put(ndName, nd.line)",
        "            return",
        "        }",
        "        var more := \" in this scope\"",
        "        if (elementLines.contains(ndName)) then {",
        "            more := \" as a {oldKind}\"",
        "                ++ \" on line {elementLines.get(ndName)}\"",
        "        }",
        "        errormessages.syntaxError(\"'{ndName}' cannot be\"",
        "            ++ \" redeclared because it is already declared\"",
        "            ++ more ++ \" as well as here at line {nd.line}.\")",
        "            atRange(nd.line, nd.linePos, nd.linePos + ndName.size - 1)",
        "    }",
        "    method contains (n) {",
        "        elements.contains(n)",
        "    }",
        "    method withSurroundingScopesDo (b) {",
        "        var cur := self",
        "        while {b.apply(cur); cur.hasParent} do {",
        "            cur := cur.parent",
        "        }",
        "    }",
        "    method keysAsList {",
        "        def result = emptyList",
        "        elements.keysDo { each -> result.addLast(each) }",
        "        result",
        "    }",
        "    method keysAndKindsDo (action) {",
        "        elements.keysAndValuesDo(action)",
        "    }",
        "    method kind (n) {",
        "        def kd:DeclKind = elements.get(n)",
        "        if (DeclKind.match(kd).not) then { print \"kind of {n} is {k}\" }",
        "        kd",
        "    }",
        "    method at(n) putScope(scp) {",
        "        elementScopes.put(n, scp)",
        "    }",
        "    method getScope(n) {",
        "        if (elementScopes.contains(n)) then {",
        "            return elementScopes.get(n)",
        "        }",
        "//        util.log 70 verbose (\"scope {self}: elements.contains({n}) = {elements.contains(n)}\" ++",
        "//              \" but elementScopes.contains({n}) = {elementScopes.contains(n)}\")",
        "        //  This occurs for names like `true` that are built-in, but for which there",
        "        //  is no symbolTable describing their atttributes.",
        "        //  TODO: add complete information for the built-in names.",
        "        //  in the meantime:",
        "        return universalScope",
        "    }",
        "    method asStringWithParents {",
        "        var result := \"\\nCurrent: {self}\"",
        "        var s := self",
        "        while {s.hasParent} do {",
        "            s := s.parent",
        "            result := result ++ \"\\nParent: {s}\"",
        "        }",
        "        result ++ \"\\n\"",
        "    }",
        "    method asString {",
        "        var result := \"({variety} ST: \"",
        "        withSurroundingScopesDo { each ->",
        "            result := result ++ each.serialNumber",
        "            if (each.hasParent) then { result := result ++ \"➞\" }",
        "        }",
        "        result := result ++  \"):\\n    \"",
        "        elements.asList.sortBy(keyOrdering).do { each ->",
        "            result := \"{result} {each.key}({kind(each.key)}) \"",
        "        }",
        "        result ++ \"\\n\"",
        "    }",
        "",
        "    method asDebugString { \"(ST {serialNumber})\" }",
        "",
        "    method elementScopesAsString {",
        "        def referencedScopes = emptySet",
        "        var result := \"\\n    [elementScopes:\"",
        "        elementScopes.asList.sortBy(keyOrdering).do { each ->",
        "            result := \"{result} {each.key}➞{each.value.asDebugString}\"",
        "            referencedScopes.add (each.value)",
        "        }",
        "        result := result ++ \"]\\n____________\\n\"",
        "        referencedScopes.asList",
        "            .sortBy { a, b -> a.serialNumber.compare(b.serialNumber) }",
        "                .do { each -> result := result ++ each.asString }",
        "        result ++ \"____________\\n\"",
        "    }",
        "    method hasDefinitionInNest(nm) {",
        "        withSurroundingScopesDo { s ->",
        "            if (s.contains(nm)) then {",
        "                return true",
        "            }",
        "        }",
        "        return false",
        "    }",
        "    method kindInNest(nm) {",
        "        withSurroundingScopesDo {s->",
        "            if (s.contains(nm)) then {",
        "                def kd = s.kind(nm)",
        "                if (kd.fromParent) then {",
        "                    return k.methdec",
        "                } else {",
        "                    return kd",
        "                }",
        "            }",
        "        }",
        "        return k.undefined",
        "    }",
        "    method thatDefines(name) ifNone(action) {",
        "        withSurroundingScopesDo { s->",
        "            if (s.contains(name)) then { return s }",
        "        }",
        "        action.apply",
        "    }",
        "    method thatDefines(name) {",
        "        withSurroundingScopesDo { s->",
        "            if (s.contains(name)) then { return s }",
        "        }",
        "        print(self.asStringWithParents)",
        "        ProgrammingError.raise \"no scope defines {name}\"",
        "    }",
        "    method isInSameObjectAs (enclosingScope) {",
        "        if (self == enclosingScope) then { return true }",
        "        if (self.parent.isObjectScope) then { return false }",
        "        self.parent.isInSameObjectAs(enclosingScope)",
        "    }",
        "    method isObjectScope {",
        "        if (variety == \"object\") then { return true }",
        "        if (variety == \"module\") then { return true }",
        "        if (variety == \"dialect\") then { return true }",
        "        if (variety == \"class\") then { return true }",
        "        if (variety == \"built-in\") then { return true }",
        "        false",
        "    }",
        "    method isMethodScope {",
        "        variety == \"method\"",
        "    }",
        "    method resolveOuterMethod(name) {",
        "        // replace name by outer.outer. ... .name,",
        "        // depending on where name is declared.",
        "        var mem := ast.identifierNode.new(\"self\", false) scope(self)",
        "        withSurroundingScopesDo { s->",
        "            if (s.contains(name)) then {",
        "                if (s.variety == \"dialect\") then {",
        "                    return ast.memberNode.new(name,",
        "                        ast.identifierNode.new(\"prelude\", false) scope(self)) scope(self)",
        "                }",
        "                return ast.memberNode.new(name, mem) scope(self)",
        "            }",
        "            match ( s.variety",
        "            ) case { \"object\" ->",
        "                mem := ast.memberNode.new(\"outer\", mem) scope(self)",
        "            } case { \"class\" ->",
        "                mem := ast.memberNode.new(\"outer\", mem) scope(self)",
        "                mem := ast.memberNode.new(\"outer\", mem) scope(self)",
        "            } case { _ -> }",
        "        }",
        "        // Not found - leave it alone",
        "        return ast.identifierNode.new(name, false) scope(self)",
        "    }",
        "    method scopeReferencedBy(nd) {",
        "        // Finds the scope referenced by astNode nd.",
        "        // If nd references an object, then the returned",
        "        // scope will have bindings for the methods of that object.",
        "        // Otherwise, it will be the empty scope.",
        "//        util.log 70 verbose \"looking for scope referenced by {nd.pretty 0}\"",
        "        if (nd.kind == \"identifier\") then {",
        "            def sought = nd.nameString",
        "            withSurroundingScopesDo {s->",
        "                if (s.contains(sought)) then {",
        "                    return s.getScope(sought)",
        "                }",
        "            }",
        "            errormessages.syntaxError \"no method {sought}\"",
        "                atRange(nd.line, nd.linePos, nd.linePos + sought.size - 1)",
        "        } elseif {nd.kind == \"member\"} then {",
        "            def receiverScope = self.scopeReferencedBy(nd.in)",
        "//            util.log 70 verbose \"receiverScope = {receiverScope}\"",
        "            if (nd.value == \"outer\") then {",
        "                return receiverScope.parent",
        "            }",
        "            return receiverScope.scopeReferencedBy(nd.asIdentifier)",
        "        } elseif {nd.kind == \"call\"} then {",
        "            return scopeReferencedBy(nd.value)",
        "        } elseif {nd.kind == \"op\"} then {",
        "            def receiverScope = self.scopeReferencedBy(nd.left)",
        "            return receiverScope.scopeReferencedBy(nd.asIdentifier)",
        "        }",
        "        ProgrammingError.raise(\"{nd.value} is not a Call, Member or Identifier\\n\"",
        "            ++ nd.pretty(0))",
        "    }",
        "    method enclosingObjectScope {",
        "        // Answer the closest enclosing scope that describes an",
        "        // object, class or module.  Could answer self.",
        "        withSurroundingScopesDo { s ->",
        "            if (s.isObjectScope) then { return s }",
        "        }",
        "        ProgrammingError \"no object scope found!\"",
        "        // the outermost scope should always be a module scope,",
        "        // which is an object scope.",
        "    }",
        "    method inSameContextAs(encScope) {",
        "        // Is this scope within the same context as encScope?",
        "        // i.e. within the same method and object?",
        "        if (encScope.isObjectScope) then { return false }",
        "        withSurroundingScopesDo { s ->",
        "            if (s == encScope) then { return true }",
        "            if (s.isObjectScope) then { return false }",
        "            if (s.isMethodScope) then { return false }",
        "        }",
        "        ProgrammingError.raise \"self = {self}; encScope = {encScope}\"",
        "    }",
        "    method isUniversal { false }",
        "    method checkShadowing(ident) as(newKind) {",
        "        def name = ident.nameString",
        "        def priorScope = thatDefines(name) ifNone {",
        "            return",
        "        }",
        "        def description =",
        "            if (priorScope == self) then {",
        "                \"this\"",
        "            } else {",
        "                \"an enclosing {priorScope.variety}\"",
        "            }",
        "        def priorKind = priorScope.kind(name)",
        "        if (priorScope.isObjectScope && {self.isObjectScope}) then {",
        "            return",
        "        }",
        "        // new object attributes can shadow old, but other shadowing is illegal",
        "        var more := \"\"",
        "        if (priorScope.elementLines.contains(name)) then {",
        "            def ln = priorScope.elementLines.get(name)",
        "            if (ln > 0) then {",
        "                more := \" on line {priorScope.elementLines.get(name)}\"",
        "            }",
        "        }",
        "        if (newKind == k.vardec) then {",
        "            def suggs = [ ]",
        "            def sugg = errormessages.suggestion.new",
        "            if (sugg.replaceUntil(\"=\")with(\"{name} :=\")",
        "                    onLine(ident.line)",
        "                ) then {",
        "                suggs.push(sugg)",
        "            }",
        "            if (priorKind == k.vardec) then {",
        "                more := more ++ \". To assign to the existing variable, remove 'var'\"",
        "            }",
        "            errormessages.syntaxError(\"'{name}' cannot be \"",
        "                ++ \"redeclared because it is already declared in \"",
        "                ++ \"{description} scope{more}.\")",
        "                atRange(ident.line, ident.linePos, ident.linePos + name.size - 1)",
        "                withSuggestions(suggs)",
        "        } else {",
        "            errormessages.syntaxError(\"'{name}' cannot be \"",
        "                ++ \"redeclared because it is already declared in \"",
        "                ++ \"{description} scope{more}. Use a different name.\")",
        "                atRange(ident.line, ident.linePos,",
        "                    ident.linePos + name.size - 1)",
        "        }",
        "    }",
        "}",
        "",
        "def emptyScope = newScopeKind(\"empty\")",
        "ast.nullNode.scope := emptyScope      // TODO: eliminate!",
        "def builtInsScope = newScopeIn(emptyScope) kind(\"built-in\")",
        "def preludeScope = newScopeIn(builtInsScope) kind(\"dialect\")",
        "def moduleScope = newScopeIn(preludeScope) kind(\"module\")",
        "def graceObjectScope = newScopeIn(emptyScope) kind(\"object\")",
        "def booleanScope = newScopeIn(builtInsScope) kind \"object\"",
        "",
        "def universalScope = object {",
        "    // The scope that defines every identifier,",
        "    // used when we have no information about an object",
        "    inherits newScopeIn(emptyScope) kind(\"universal\")",
        "    method hasParent { false }",
        "    method parent { ProgrammingError.raise \"universal scope has no parent\" }",
        "    method addName(n) { ProgrammingError.raise \"can't add to the universal scope\" }",
        "    method addName(n)as(kd) { ProgrammingError.raise \"can't add to the universal scope\" }",
        "    method addNode(n)as(kd) { ProgrammingError.raise \"can't add to the universal scope\" }",
        "    method contains(n) { true }",
        "    method withSurroundingScopesDo(b) { b.apply(self) }",
        "    method kind(n) { \"unknown\" }",
        "    method at(n) putScope(scp) { }",
        "    method getScope(n) { self }",
        "    method isUniversal { true }",
        "}",
        "",
        "method rewritematchblockterm(arg) {",
        "    util.setPosition(arg.line, arg.linePos)",
        "    if (arg.kind == \"num\") then {",
        "        return [arg, [] ]",
        "    }",
        "    if (arg.kind == \"string\") then {",
        "        return [arg, [] ]",
        "    }",
        "    if (arg.kind == \"boolean\") then {",
        "        return [arg, [] ]",
        "    }",
        "    if ((arg.kind == \"call\") && {arg.value.value.substringFrom(1)to(6)",
        "        == \"prefix\"}) then {",
        "        return [arg, [] ]",
        "    }",
        "    if (arg.kind == \"member\") then {",
        "        return [arg, [] ]",
        "    }",
        "    if (arg.kind == \"call\") then {",
        "        def bindings = []",
        "        def subpats = []",
        "        for (arg.with) do { part ->",
        "            for (part.args) do { a ->",
        "                def tmp = rewritematchblockterm(a)",
        "                subpats.push(tmp.first)",
        "                for (tmp.second) do {b->",
        "                    bindings.push(b)",
        "                }",
        "            }",
        "        }",
        "        def callpat = ast.callNode.new(",
        "            ast.memberNode.new(",
        "                \"new\",",
        "                ast.memberNode.new(\"MatchAndDestructuringPattern\",",
        "                    ast.identifierNode.new(\"prelude\", false)",
        "                )",
        "            ),",
        "            [ast.callWithPart.request \"new\" withArgs( [arg.value, ast.arrayNode.new(subpats)] )]",
        "        )",
        "        return [callpat, bindings]",
        "    }",
        "    if (arg.kind == \"identifier\") then {",
        "        def varpat = ast.callNode.new(",
        "            ast.memberNode.new(",
        "                \"new\",",
        "                ast.memberNode.new(\"VariablePattern\",",
        "                    ast.identifierNode.new(\"prelude\", false)",
        "                )",
        "            ),",
        "            [ast.callWithPart.request \"new\" withArgs( [ast.stringNode.new(arg.value)] )]",
        "        )",
        "        if (false != arg.dtype) then {",
        "            if (arg.dtype.kind == \"identifier\") then {",
        "                return [ast.callNode.new(",
        "                    ast.memberNode.new(",
        "                        \"new\",",
        "                        ast.memberNode.new(\"AndPattern\",",
        "                            ast.identifierNode.new(\"prelude\", false)",
        "                        )",
        "                    ),",
        "                    [ast.callWithPart.request \"new\" withArgs( [varpat, arg.dtype] )]",
        "                ), [arg] ]",
        "            }",
        "            def tmp = rewritematchblockterm(arg.dtype)",
        "            def bindings = [arg]",
        "            for (tmp.second) do {b->",
        "                bindings.push(b)",
        "            }",
        "            def bindingpat = ast.callNode.new(",
        "                ast.memberNode.new(",
        "                    \"new\",",
        "                    ast.memberNode.new(\"AndPattern\",",
        "                        ast.identifierNode.new(\"prelude\", false)",
        "                    )",
        "                ),",
        "                [ast.callWithPart.request \"new\" withArgs( [varpat, tmp.first ] )]",
        "            )",
        "            return [bindingpat, bindings]",
        "        }",
        "        return [varpat, [arg] ]",
        "    }",
        "    if (arg.kind == \"typeliteral\") then {",
        "        return [arg, [] ]",
        "    }",
        "    ProgrammingError.raise(\"Internal error in compiler: fell through when rewriting \"",
        "        ++ \"match block of unexpected kind '{arg.kind}'.\")",
        "}",
        "method rewritematchblock(blk) {",
        "    def arg = blk.params.first",
        "    var pattern := false",
        "    var newparams := [ ]",
        "    for (blk.params) do { p ->",
        "        newparams.push(p)",
        "    }",
        "    if ((arg.kind == \"num\") || (arg.kind == \"string\") ||",
        "        (arg.kind == \"boolean\")) then {",
        "        def tmp = rewritematchblockterm(arg)",
        "        pattern := tmp.first",
        "        newparams := tmp.second",
        "    }",
        "    if (arg.kind == \"identifier\") then {",
        "        def varpat = ast.callNode.new(",
        "            ast.memberNode.new(",
        "                \"new\",",
        "                ast.memberNode.new(\"VariablePattern\",",
        "                    ast.identifierNode.new(\"prelude\", false)",
        "                )",
        "            ),",
        "            [ast.callWithPart.request \"new\" withArgs( [ast.stringNode.new(arg.value)] )]",
        "        )",
        "        if (false != arg.dtype) then {",
        "            match (arg.dtype.kind)",
        "                case { \"identifier\" | \"op\" ->",
        "                    pattern := ast.callNode.new(",
        "                        ast.memberNode.new(\"new\",",
        "                            ast.memberNode.new(\"AndPattern\",",
        "                                ast.identifierNode.new(\"prelude\", false)",
        "                                )",
        "                            ),",
        "                        [ast.callWithPart.request \"new\" withArgs( [varpat, arg.dtype] )])",
        "                } case { _ ->",
        "                    def tmp = rewritematchblockterm(arg.dtype)",
        "                    def bindingpat = ast.callNode.new(",
        "                        ast.memberNode.new(\"new\",",
        "                            ast.memberNode.new(\"AndPattern\",",
        "                                ast.identifierNode.new(\"prelude\", false)",
        "                                )",
        "                            ),",
        "                        [ast.callWithPart.request \"new\" withArgs( [varpat, tmp.first ] )]",
        "                    )",
        "                    pattern := bindingpat",
        "                    for (tmp.second) do {p->",
        "                        // We can't name both p and the extra param binding",
        "                        // occurences, because then there would be shadowing.",
        "                        if (p.wildcard) then {",
        "                            p.isBindingOccurrence := true",
        "                        } else {",
        "                            def extraParam = p.deepCopy",
        "                            // The deepCopy copies the type too.",
        "                            // Does this cause an unnecessary dynamic type-check?",
        "                            extraParam.isBindingOccurrence := true",
        "                            newparams.push(extraParam)",
        "                        }",
        "                    }",
        "                }",
        "        } else {",
        "            if (false != blk.matchingPattern) then {",
        "                if (blk.matchingPattern.value == arg.value) then {",
        "                    pattern := arg",
        "                    newparams := []",
        "                }",
        "            }",
        "        }",
        "    } else {",
        "        if (false != blk.matchingPattern) then {",
        "            if (blk.matchingPattern.value == arg.value) then {",
        "                pattern := arg",
        "                newparams := []",
        "            }",
        "        }",
        "    }",
        "    def newblk = ast.blockNode.new(newparams, blk.body)",
        "    newblk.matchingPattern := pattern",
        "    newblk.line := blk.line",
        "    return newblk",
        "}",
        "",
        "method rewriteIdentifier(node) ancestors(as) {",
        "    // node is a (copy of an) ast node that represents an applied occurence of",
        "    // an identifer id.   This implies that node is a leaf in the ast.",
        "    // This method may or may not transform node into another ast.",
        "    // There is no spec for what this method should do.  The code below",
        "    // was developed by addding and removing particular cases until",
        "    // the transformed AST was sufficiecntly similar to the one emitted by the",
        "    // old identifier resolution pass for the C code generator to accept it.",
        "    // This method seems to do the following:",
        "    // - id is self => do nothing",
        "    // - id is super => do nothing",
        "    // - id is in an assignment position and a method ‹id›:= is in scope:",
        "    //          replace node by a method request",
        "    // - id is in the lexical scope: store binding occurence of id in node",
        "    // - id is a method in an outer object scope: transform into member nodes.",
        "    //  TODO: can't make references to fields direct because they might be overridden",
        "    // - id is a self-method: transform into a request on self",
        "    // - id is not declared: generate an error message",
        "",
        "    // Some clauses are flagged \"TODO Compatability Kludge — remove when possible\"",
        "    // This means that APB put them there to produce an AST close enough to the",
        "    // former identifier resolution pass to keep the C code generator (genc) happy.",
        "    // They may represent things that APB doesn't understand, or bugs in genc",
        "",
        "    var nm := node.value",
        "    def nodeScope = node.scope",
        "    def nmGets = nm ++ \":=\"",
        "    util.setPosition(node.line, node.linePos)",
        "    if (node.isAssigned) then {",
        "        if (nodeScope.hasDefinitionInNest(nmGets)) then {",
        "            if (nodeScope.kindInNest(nmGets) == k.methdec) then {",
        "                def meth = nodeScope.resolveOuterMethod(nmGets)",
        "                def meth2 = ast.memberNode.new(nm, meth.in)",
        "                return meth2",
        "            }",
        "        }",
        "    }",
        "    def definingScope = nodeScope.thatDefines(nm) ifNone {",
        "        reportUndeclaredIdentifier(node)",
        "    }",
        "    def nodeKind = definingScope.kind(nm)",
        "    if (node.isAssigned) then {",
        "        if (nodeKind.isAssignable.not) then {",
        "            reportAssignmentTo(node) declaredInScope(definingScope)",
        "        }",
        "    }",
        "    if (nm == \"outer\") then {",
        "        def selfId = ast.identifierNode.new(\"self\", false) scope(nodeScope)",
        "        def memb = ast.memberNode.new(\"outer\", selfId) scope(nodeScope)",
        "        return memb",
        "        // TODO: represent outer statically",
        "    }",
        "    if (nm == \"self\") then {",
        "        return node",
        "    }",
        "    checkForAmbiguityOf (node) definedIn (definingScope) as (nodeKind)",
        "    def v = definingScope.variety",
        "    if (v == \"built-in\") then { return node }",
        "    if (v == \"dialect\") then {",
        "        def p = ast.identifierNode.new(\"prelude\", false) scope(nodeScope)",
        "        def m = ast.memberNode.new(nm, p) scope(nodeScope)",
        "        return m",
        "    }",
        "    if (nodeKind.isParameter) then { return node }",
        "    if (nodeKind == k.typedec) then { return node }",
        "",
        "    // TODO Compatability Kludge — remove when possible",
        "    if (node.inTypePositionWithAncestors(as)) then { return node }",
        "    // the latter is necessary until .gct files distinguish types",
        "",
        "    if (definingScope == moduleScope) then {",
        "        if (nodeKind == k.defdec) then { return node }",
        "        if (nodeKind == k.typedec) then { return node }",
        "        if (nodeKind == k.vardec) then { return node }",
        "    }",
        "    if (definingScope == nodeScope.enclosingObjectScope) then {",
        "        return ast.memberNode.new(nm,",
        "            ast.identifierNode.new(\"self\", false) scope(nodeScope)",
        "        ) scope(nodeScope)",
        "    }",
        "    if (nodeScope.isObjectScope.not",
        "             && {nodeScope.isInSameObjectAs(definingScope)}) then {",
        "        if (nodeKind == k.methdec) then { return node }",
        "        if (nodeKind == k.defdec) then { return node }",
        "        if (nodeKind == k.vardec) then { return node }",
        "    }",
        "    if (v == \"method\") then { return node }",
        "        // node is defined in the closest enclosing method.",
        "        // there may be intervening blocks, but no objects or clases.",
        "        // If this identifier is in a block that is returned, then ids",
        "        // defined in the enclosing method scope have to go in a closure",
        "        // In that case, leaving the id untouched may be wrong",
        "    if (v == \"block\") then { return node }",
        "    return nodeScope.resolveOuterMethod(nm)",
        "}",
        "method checkForAmbiguityOf (node) definedIn (definingScope) as (kind) {",
        "    def currentScope = node.scope",
        "    if (currentScope != definingScope) then { return done }",
        "    // TODO This isn't quite right:  currentScope might be a block (or method)",
        "    // node might be defined by inheritance in the object containing currentScope,",
        "    // and also in an enclosing scope.",
        "    if (kind.fromParent.not) then { return }",
        "    def name = node.value",
        "    def conflictingScope = currentScope.parent.thatDefines(name) ifNone {",
        "        return",
        "    }",
        "    var more := \"\"",
        "    if (conflictingScope.elementLines.contains(name)) then {",
        "        def earlierDef = conflictingScope.elementLines.get(name)",
        "        if (earlierDef != 0) then {",
        "            more := \" at line {earlierDef}\"",
        "        }",
        "    }",
        "    errormessages.syntaxError \"{name} is both {kind} and defined in an enclosing scope{more}.\"",
        "        atRange(node.line, node.linePos, node.linePos + name.size - 1)",
        "}",
        "method checkForReservedName(node) {",
        "    def ns = node.nameString",
        "    if (reserved.contains(ns)) then {",
        "        errormessages.syntaxError \"{ns} is a reserved name and cannot be re-declared.\"",
        "            atRange(node.line, node.linePos, node.linePos + ns.size - 1)",
        "    }",
        "}",
        "",
        "method isSameIgnoringCase(c1, c2) {",
        "    // necessary because the C library doesn't implement asLower or asUpper",
        "    if (c1 == c2) then { return true }",
        "    return (c1.ord - c2.ord).abs == 32",
        "}",
        "",
        "method reportUndeclaredIdentifier(node) {",
        "    def nodeScope = node.scope",
        "    def nm = node.nameString",
        "    def nmSize = nm.size",
        "    def sizeLimit = nmSize * 2",
        "        // below which we want the startChars to match",
        "    def thresh = ((nmSize / 3) + 1).truncated",
        "    def suggestions = []",
        "    def startChar = nm.first",
        "    var suggestion",
        "    nodeScope.withSurroundingScopesDo { s ->",
        "        s.elements.keysDo { v ->",
        "            if ((nmSize - v.size).abs < thresh) then {",
        "                util.log 100 verbose \"matching {nm} to {v} within {thresh}\"",
        "                def matchExtent = errormessages.name (nm) matches (v) within (thresh)",
        "                if (((matchExtent > 1) && (isSameIgnoringCase(v.first, startChar)) &&",
        "                      (nmSize <= v.size) && (v.size <= sizeLimit)) || {",
        "                      (nmSize > 2) && (matchExtent == v.size) } ) then {",
        "                    suggestion := errormessages.suggestion.new",
        "                    suggestion.replaceRange(node.linePos, node.linePos +",
        "                        node.value.size - 1) with (v) onLine(node.line)",
        "                    suggestions.push(suggestion)",
        "                }",
        "            }",
        "        }",
        "    }",
        "    nodeScope.elementScopes.keysDo { s ->",
        "        if (nodeScope.elementScopes.get(s).contains(nm)) then {",
        "            suggestion := errormessages.suggestion.new",
        "            suggestion.insert(\"{s}.\")atPosition(node.linePos)onLine(node.line)",
        "            suggestions.push(suggestion)",
        "        }",
        "    }",
        "    var highlightLength := node.value.size",
        "    if (node.value.replace \"()\" with \"XX\" != node.value) then {",
        "        var i := 0",
        "        var found := false",
        "        for (node.value) do {c->",
        "            if ((c == \"(\") && (!found)) then {",
        "                highlightLength := i",
        "                found := true",
        "            }",
        "            i := i + 1",
        "        }",
        "    }",
        "    if (node.inRequest) then {",
        "        var extra := \"\"",
        "        if (node.value == \"while\") then {",
        "            suggestion := errormessages.suggestion.new",
        "            suggestion.append \" do \\{ \\}\" onLine(node.line)",
        "            suggestions.push(suggestion)",
        "        }",
        "        if (node.value == \"for\") then {",
        "            suggestion := errormessages.suggestion.new",
        "            suggestion.append \" do \\{ aVarName -> \\}\" onLine(node.line)",
        "            suggestions.push(suggestion)",
        "        }",
        "        errormessages.syntaxError \"unknown method '{nm}'. This may be a spelling mistake or an attempt to access a method in another scope.{extra}\"",
        "            atRange(node.line, node.linePos, node.linePos +",
        "                highlightLength - 1)",
        "            withSuggestions(suggestions)",
        "    }",
        "    errormessages.syntaxError(\"unknown variable or method '{nm}'. This may be a spelling mistake or an attempt to access a variable in another scope.\")atRange(",
        "        node.line, node.linePos, node.linePos + highlightLength - 1)withSuggestions(suggestions)",
        "}",
        "method reportAssignmentTo(node) declaredInScope(scp) {",
        "    // Report a syntax error for an illegal assignment",
        "",
        "    def name = node.nameString",
        "    def kind = scp.kind(name)",
        "    var more := \"\"",
        "    def suggestions = []",
        "    if (scp.elementLines.contains(name)) then {",
        "        more := \" on line {scp.elementLines.get(name)}\"",
        "    }",
        "    if (kind == k.selfDef) then {",
        "        errormessages.syntaxError(\"'{name}' cannot be re-bound; \" ++",
        "              \"it always refers to the current object.\")",
        "              atRange(node.line, node.linePos, node.linePos + name.size - 1)",
        "    } elseif { reserved.contains(name) } then {",
        "        errormessages.syntaxError(\"'{name}' is a reserved name and \" ++",
        "              \"cannot be re-bound.\")",
        "              atRange(node.line, node.linePos, node.linePos + name.size - 1)",
        "    } elseif { kind == k.defdec } then {",
        "        if (scp.elementTokens.contains(name)) then {",
        "            def tok = scp.elementTokens.get(name)",
        "            def sugg = errormessages.suggestion.new",
        "            if (tok.value == \"def\") then {",
        "                var eq := tok",
        "                while {(eq.kind != \"op\") || (eq.value != \"=\")} do {",
        "                    eq := eq.next",
        "                }",
        "                sugg.replaceToken(eq)with(\":=\")",
        "                sugg.replaceToken(tok)with(\"var\")",
        "                suggestions.push(sugg)",
        "            } else {",
        "                errormessages.syntaxError(\"'{name}' cannot be changed \" ++",
        "                    \"because it was declared as a '{tok.value}'{more}.\")",
        "                    atRange(node.line, node.linePos, node.linePos + name.size - 1)",
        "            }",
        "        }",
        "        errormessages.syntaxError(\"'{name}' cannot be changed \"",
        "            ++ \"because it was declared with 'def'{more}. \"",
        "            ++ \"To make it a variable, use 'var' in the declaration\")",
        "            atRange(node.line, node.linePos, node.linePos + name.size - 1)",
        "            withSuggestions(suggestions)",
        "    } elseif { kind == k.typedec } then {",
        "        errormessages.syntaxError(\"'{name}' cannot be re-bound \"",
        "            ++ \"because it is declared as a type{more}.\")",
        "            atRange(node.line, node.linePos, node.linePos + name.size - 1)",
        "    } elseif { kind.isParameter } then {",
        "        errormessages.syntaxError(\"'{name}' cannot be re-bound \"",
        "            ++ \"because it is declared as a parameter{more}.\")",
        "            atRange(node.line, node.linePos, node.linePos + name.size - 1)",
        "    } elseif { kind == k.methdec } then {",
        "        errormessages.syntaxError(\"'{name}' cannot be re-bound \"",
        "            ++ \"because it is declared as a method{more}.\")",
        "            atRange(node.line, node.linePos, node.linePos + name.size - 1)",
        "    }",
        "}",
        "",
        "method resolveIdentifiers(topNode) {",
        "    // Recursively replace bare identifiers with their fully-qualified",
        "    // equivalents.  Creates and returns a new AST; map works",
        "    // bottom-up, so by the time a node is mapped, all of its",
        "    // descendents have already been mapped.",
        "",
        "    topNode.map { node, as ->",
        "        if ( node.isAppliedOccurenceOfIdentifier ) then {",
        "            rewriteIdentifier(node) ancestors(as)",
        "            // TODO — opNodes don't contain identifiers!",
        "        } elseif { node.isInherits } then {",
        "            transformInherits(node) ancestors(as)",
        "        } elseif { node.isBind } then {",
        "            transformBind(node) ancestors(as)",
        "        } elseif { node.isTypeDec } then {",
        "            node",
        "        } else {",
        "            node",
        "        }",
        "    } ancestors (ast.ancestorChain.empty)",
        "}",
        "",
        "method processGCT(gct, importedModuleScope) {",
        "    gct.at \"classes\" ifAbsent {emptySequence}.do { c ->",
        "        def cmeths = []",
        "        def constrs = gct.at \"constructors-of:{c}\"",
        "        def classScope = newScopeIn(importedModuleScope) kind \"class\"",
        "        for (constrs) do { constr ->",
        "            def ns = newScopeIn(importedModuleScope) kind(\"object\")",
        "            classScope.addName(constr)",
        "            classScope.at(constr) putScope(ns)",
        "            gct.at \"methods-of:{c}.{constr}\".do { mn ->",
        "                ns.addName(mn)",
        "            }",
        "        }",
        "        importedModuleScope.addName(c)",
        "        importedModuleScope.at(c) putScope(classScope)",
        "    }",
        "    gct.at \"fresh-methods\" ifAbsent {emptySequence}.do { c ->",
        "        def objScope = newScopeIn(importedModuleScope) kind \"object\"",
        "        gct.at \"fresh:{c}\".do { mn ->",
        "            objScope.addName(mn)",
        "        }",
        "        importedModuleScope.addName(c)",
        "        importedModuleScope.at(c) putScope(objScope)",
        "    }",
        "}",
        "",
        "method setupContext(moduleObject) {",
        "    // define the built-in names",
        "    util.setPosition(0, 0)",
        "",
        "    builtInsScope.addName \"Type\" as(k.typedec)",
        "    builtInsScope.addName \"Object\" as(k.typedec)",
        "    builtInsScope.addName \"Unknown\" as(k.typedec)",
        "    builtInsScope.addName \"String\" as(k.typedec)",
        "    builtInsScope.addName \"Number\" as(k.typedec)",
        "    builtInsScope.addName \"Boolean\" as(k.typedec)",
        "    builtInsScope.addName \"Block\" as(k.typedec)",
        "    builtInsScope.addName \"Done\" as(k.typedec)",
        "    builtInsScope.addName \"done\" as(k.defdec)",
        "    builtInsScope.addName \"true\" as(k.defdec)",
        "    builtInsScope.addName \"false\" as(k.defdec)",
        "    builtInsScope.addName \"super\" as(k.defdec)",
        "    builtInsScope.addName \"outer\" as(k.defdec)",
        "    builtInsScope.addName \"readable\"",
        "    builtInsScope.addName \"writable\"",
        "    builtInsScope.addName \"public\"",
        "    builtInsScope.addName \"confidential\"",
        "    builtInsScope.addName \"override\"",
        "    builtInsScope.addName \"parent\"",
        "    builtInsScope.addName \"...\" as(k.defdec)",
        "",
        "    preludeScope.addName \"asString\"",
        "    preludeScope.addName \"::\"",
        "    preludeScope.addName \"++\"",
        "    preludeScope.addName \"==\"",
        "    preludeScope.addName \"!=\"",
        "    preludeScope.addName \"≠\"",
        "    preludeScope.addName \"for()do\"",
        "    preludeScope.addName \"while()do\"",
        "    preludeScope.addName \"print\"",
        "    preludeScope.addName \"native()code\"",
        "    preludeScope.addName \"Exception\" as(k.defdec)",
        "    preludeScope.addName \"RuntimeError\" as(k.defdec)",
        "    preludeScope.addName \"NoSuchMethod\" as(k.defdec)",
        "    preludeScope.addName \"ProgrammingError\" as(k.defdec)",
        "    preludeScope.addName \"TypeError\" as(k.defdec)",
        "    preludeScope.addName \"ResourceException\" as(k.defdec)",
        "    preludeScope.addName \"EnvironmentException\" as(k.defdec)",
        "    preludeScope.addName \"π\" as(k.defdec)",
        "    preludeScope.addName \"infinity\" as(k.defdec)",
        "    preludeScope.addName \"minigrace\"",
        "    preludeScope.addName \"_methods\"",
        "    preludeScope.addName \"primitiveArray\"",
        "    preludeScope.addName \"become\"",
        "    preludeScope.addName \"unbecome\"",
        "    preludeScope.addName \"clone\"",
        "    preludeScope.addName \"inBrowser\"",
        "    preludeScope.addName \"engine\"",
        "",
        "    graceObjectScope.addName \"isMe\" as (k.graceObjectMethod)",
        "    graceObjectScope.addName \"!=\" as (k.graceObjectMethod)",
        "    graceObjectScope.addName \"≠\" as (k.graceObjectMethod)",
        "    graceObjectScope.addName \"basicAsString\" as (k.graceObjectMethod)",
        "    graceObjectScope.addName \"asString\" as (k.graceObjectMethod)",
        "    graceObjectScope.addName \"asDebugString\" as (k.graceObjectMethod)",
        "    graceObjectScope.addName \"::\" as (k.graceObjectMethod)",
        "",
        "    booleanScope.addName \"prefix!\"",
        "    booleanScope.addName \"&&\"",
        "    booleanScope.addName \"||\"",
        "    booleanScope.addName \"not\"",
        "",
        "    builtInsScope.addName \"graceObject\"",
        "    builtInsScope.at \"graceObject\" putScope(graceObjectScope)",
        "    builtInsScope.addName \"prelude\" as(k.defdec)",
        "    builtInsScope.at \"prelude\" putScope(preludeScope)",
        "    builtInsScope.addName \"_prelude\" as(k.defdec)",
        "    builtInsScope.at \"_prelude\" putScope(preludeScope)",
        "    builtInsScope.at \"true\" putScope(booleanScope)",
        "    builtInsScope.at \"false\" putScope(booleanScope)",
        "",
        "    // Historical - should be removed eventually",
        "    if (!util.extensions.contains(\"NativePrelude\")) then {",
        "        var hadDialect := false",
        "        for (moduleObject.value) do {val->",
        "            if (val.kind == \"dialect\") then {",
        "                hadDialect := true",
        "                xmodule.checkExternalModule(val)",
        "                def gctDict = xmodule.parseGCT(val.value)",
        "                gctDict.at \"public\" ifAbsent {emptySequence}.do { mn ->",
        "                    preludeScope.addName(mn)",
        "                }",
        "                gctDict.at \"confidential\" ifAbsent {emptySequence}.do { mn ->",
        "                    preludeScope.addName(mn)",
        "                }",
        "                processGCT(gctDict, preludeScope)",
        "            }",
        "        }",
        "        if (!hadDialect) then {",
        "            def gctDict = xmodule.parseGCT \"StandardPrelude\"",
        "            gctDict.at \"public\" ifAbsent{emptySequence}.do { mn ->",
        "                preludeScope.addName(mn)",
        "            }",
        "            gctDict.at \"confidential\" ifAbsent {emptySequence}.do { mn ->",
        "                preludeScope.addName(mn)",
        "            }",
        "            processGCT(gctDict, preludeScope)",
        "        }",
        "    }",
        "}",
        "",
        "method checkTraitBody(traitObjNode) {",
        "//    util.log 70 verbose \"checking trait object at line {traitObjNode.line}\"",
        "    traitObjNode.value.do { node ->",
        "        if (node.isLegalInTrait.not) then {",
        "            def badThing = node.statementName",
        "            def article = articleFor (badThing)",
        "            errormessages.syntaxError(\"{article} {badThing} cannot appear in \" ++",
        "                \"a trait (defined on line {traitObjNode.line})\")",
        "                atLine(node.line)",
        "        }",
        "    }",
        "}",
        "",
        "method articleFor(str) {",
        "    // the indefinite article to preceed str",
        "    if (\"aeioAEIO\".contains(str.first)) then { \"an\" } else { \"a\" }",
        "}",
        "",
        "method buildSymbolTableFor(topNode) ancestors(topChain) {",
        "    def symbolTableVis = object {",
        "        inherits ast.baseVisitor",
        "",
        "        method visitBind (o) up (as) {",
        "            o.scope := as.parent.scope",
        "            def lValue = o.dest",
        "            if (lValue.kind == \"identifier\") then {",
        "                lValue.isAssigned := true",
        "            }",
        "            return true",
        "        }",
        "        method visitCall (o) up (as) {",
        "            o.scope := as.parent.scope",
        "            def callee = o.value",
        "            if (callee.kind == \"identifier\") then {",
        "                callee.inRequest := true",
        "            }",
        "            return true",
        "        }",
        "        method visitBlock (o) up (as) {",
        "            o.scope := newScopeIn(as.parent.scope) kind \"block\"",
        "            true",
        "        }",
        "        method visitDefDec (o) up (as) {",
        "            o.scope := as.parent.scope",
        "            if (false != o.startToken) then {",
        "                as.parent.scope.elementTokens.put(o.nameString, o.startToken)",
        "            }",
        "            if (o.value.isObject) then { o.value.name := o.nameString }",
        "            true",
        "        }",
        "        method visitIdentifier (o) up (as) {",
        "            var scope := as.parent.scope",
        "            o.scope := scope",
        "            if (o.isBindingOccurrence) then {",
        "                if ((o.isDeclaredByParent.not) && {o.wildcard.not}) then {",
        "                    checkForReservedName(o)",
        "                    def kind = o.declarationKindWithAncestors(as)",
        "                    if (kind.isParameter) then {",
        "                        if (scope.variety == \"object\") then {",
        "                            // this is a hack for declaring the parameters of the factory",
        "                            // method of a class.  The class's symbol table is that of the",
        "                            // fresh object; the factory method's parameters need to go in",
        "                            // the _enclosing_ scope.",
        "                            scope := scope.parent",
        "                            if (scope.variety != \"method\") then {",
        "                                ProgrammingError.raise \"object scope not in method scope\"",
        "                            }",
        "                        }",
        "                    }",
        "                    scope.addNode(o) as (kind)",
        "                }",
        "            } elseif {o.wildcard} then {",
        "                errormessages.syntaxError(\"'_' cannot be used in an expression\")",
        "                    atRange(o.line, o.linePos, o.linePos)",
        "            }",
        "            true",
        "        }",
        "        method visitImport (o) up (as) {",
        "            o.scope := as.parent.scope",
        "            xmodule.checkExternalModule(o)",
        "            def gct = xmodule.parseGCT(o.path)",
        "            def otherModule = newScopeIn(as.parent.scope) kind \"module\"",
        "            otherModule.node := o",
        "            processGCT(gct, otherModule)",
        "            o.scope.at(o.nameString) putScope(otherModule)",
        "            true",
        "        }",
        "        method visitInherits (o) up (as) {",
        "            o.scope := as.parent.scope",
        "            if (o.isUse) then {",
        "                if (as.parent.canUse.not) then {",
        "                    errormessages.syntaxError(\"use statements must \" ++",
        "                        \"be inside an object, class, or trait\")",
        "                        atRange(o.line, o.linePos, o.linePos + 3)",
        "                }",
        "            } else {",
        "                if (as.parent.canInherit.not) then {",
        "                    errormessages.syntaxError(\"inherit statements must \" ++",
        "                        \"be inside an object or class; a trait cannot inherit\")",
        "                        atRange(o.line, o.linePos, o.linePos + 7)",
        "                }",
        "            }",
        "            true",
        "        }",
        "        method visitMethod (o) up (as) {",
        "            def surroundingScope = as.parent.scope",
        "            if (surroundingScope.isObjectScope.not) then {",
        "                // This check needs to be here so long as the parser accepts",
        "                // class declarations as statments, rather than as method",
        "                // declarations.  Why does it do so?  Because of the old",
        "                // \"dotted\" class syntax, wherein a class decl was actually a def.",
        "                errormessages.syntaxError(\"class declarations are permitted only\" ++",
        "                    \" inside an object\") atRange(o.line, o.linePos, o.linePos + 4)",
        "            }",
        "            def ident = o.value",
        "            checkForReservedName(ident)",
        "            surroundingScope.addNode(ident) as(k.methdec)",
        "            ident.isDeclaredByParent := true",
        "            o.scope := newScopeIn(surroundingScope) kind \"method\"",
        "            if (o.returnsObject) then {",
        "                o.isFresh := true",
        "            }",
        "            true",
        "        }",
        "        method visitMethodType (o) up (as) {",
        "            o.scope := newScopeIn(as.parent.scope) kind \"methodtype\"",
        "            // the scope for the parameters (including the type parameters,",
        "            // if any) of this method.",
        "            true",
        "        }",
        "        method visitObject (o) up (as) {",
        "            def myParent = as.parent",
        "            o.scope := newScopeIn(myParent.scope) kind \"object\"",
        "            if (o.inTrait) then { checkTraitBody(o) }",
        "            if (myParent.kind == \"defdec\") then {",
        "                o.name := myParent.nameString",
        "            }",
        "            true",
        "        }",
        "        method visitModule(o) up (as) {",
        "            // the module scope was set before the traversal started",
        "            true",
        "        }",
        "        method visitTypeDec (o) up (as) {",
        "            def enclosingScope = as.parent.scope",
        "            enclosingScope.addNode(o.name) as(k.typedec)",
        "            o.name.isDeclaredByParent := true",
        "            o.scope := newScopeIn(enclosingScope) kind \"typedec\"",
        "            // this scope will be the home for any type parameters.",
        "            // If there are no parameters, it won't be used.",
        "            // For now, we don't distinguish between type decs and type params",
        "            true",
        "        }",
        "        method visitTypeLiteral (o) up (as) {",
        "            o.scope := newScopeIn(as.parent.scope) kind \"type\"",
        "            true",
        "        }",
        "        method visitTypeParameters(o) up (as) { o.scope := as.parent.scope ; true }",
        "        method visitIf(o) up (as) { o.scope := as.parent.scope ; true }",
        "        method visitMatchCase(o) up (as) { o.scope := as.parent.scope ; true }",
        "        method visitTryCatch(o) up (as) { o.scope := as.parent.scope ; true }",
        "        method visitSignaturePart(o) up (as) { o.scope := as.parent.scope ; true }",
        "        method visitArray(o) up (as) { o.scope := as.parent.scope ; true }",
        "        method visitMember(o) up (as) { o.scope := as.parent.scope ; true }",
        "        method visitGeneric(o) up (as) { o.scope := as.parent.scope ; true }",
        "        method visitString(o) up (as) { o.scope := as.parent.scope ; true }",
        "        method visitNum(o) up (as) { o.scope := as.parent.scope ; true }",
        "        method visitOp(o) up (as) { o.scope := as.parent.scope ; true }",
        "        method visitVarDec(o) up (as) { o.scope := as.parent.scope ; true }",
        "        method visitReturn(o) up (as) { o.scope := as.parent.scope ; true }",
        "        method visitDialect(o) up (as) { o.scope := as.parent.scope ; true }",
        "        method visitBlank(o) up (as) { o.scope := as.parent.scope ; true }",
        "        method visitCommentNode(o) up (as) { o.scope := as.parent.scope ; true }",
        "    }   // end of symbolTableVis",
        "",
        "    def objectScopesVis = object {",
        "        // This traversal can't be completed in the buildSymbolTable visitor,",
        "        // because the visitation is top-down, and hence the scope of the",
        "        // body of a def or method won't have been allocated when the",
        "        // delcaration is visited.",
        "",
        "        inherits ast.baseVisitor",
        "        method visitDefDec (o) up (as) {",
        "            if (o.returnsObject) then {",
        "                o.scope.at(o.nameString)",
        "                    putScope(o.returnedObjectScope)",
        "            }",
        "            true",
        "        }",
        "        method visitMethod (o) up (as) {",
        "            def myParent = as.parent",
        "            if (o.returnsObject) then {",
        "                myParent.scope.at(o.nameString) putScope(o.returnedObjectScope)",
        "                def objectName = myParent.name",
        "                if ((objectName != \"object\") && (o.body.last.isObject)) then {",
        "                    o.body.last.name := objectName ++ \".\" ++ o.body.last.name",
        "                }",
        "            }",
        "            true",
        "        }",
        "    }",
        "",
        "    def inheritanceVis = object {",
        "        inherits ast.baseVisitor",
        "        method visitObject (o) up (as) {",
        "            collectParentNames(o)",
        "            true",
        "        }",
        "        method visitModule (o) up (as) {",
        "            collectParentNames(o)",
        "            true",
        "        }",
        "    }",
        "",
        "    topNode.accept(symbolTableVis) from(topChain)",
        "    topNode.accept(objectScopesVis) from(topChain)",
        "    topNode.accept(inheritanceVis) from(topChain)",
        "}",
        "",
        "method collectParentNames(node) {",
        "    // node is an object or class; put the names that it inherits into its scope.",
        "    // In the process, checks for a cycle in the inheritance chain.",
        "    def nodeScope = node.scope",
        "    if (ast.fakeSymbolTable == nodeScope) then {",
        "        util.log 20 verbose \"node {node} has no scope.\\n{node.pretty 0}\"",
        "    }",
        "    if (nodeScope.inheritedNames == completed) then {",
        "        return",
        "    }",
        "    if (nodeScope.inheritedNames == inProgress) then {",
        "        errormessages.syntaxError \"cyclic inheritance or trait use\"",
        "            atRange(node.line, node.linePos, node.linePos)",
        "    }",
        "    nodeScope.inheritedNames := inProgress",
        "    gatherInheritedNames(node)",
        "    gatherUsedNames(node)",
        "    nodeScope.inheritedNames := completed",
        "}",
        "",
        "method gatherInheritedNames(node) is confidential {",
        "    var inhNode := node.superclass",
        "    def objScope = node.scope",
        "    var superScope",
        "    var inheritedKind := k.inherited",
        "    if (false == inhNode) then {",
        "        def gO = ast.identifierNode.new(\"graceObject\", false) scope(objScope)",
        "        inhNode := ast.inheritsNode.new(gO) scope(objScope)",
        "        superScope := graceObjectScope",
        "        inheritedKind := k.graceObjectMethod",
        "    } else {",
        "        superScope := objScope.scopeReferencedBy(inhNode.value)",
        "        // If superScope is the universal scope, then we have no information",
        "        // about the inherited attributes",
        "        if (superScope.isUniversal.not) then {",
        "            if (ast.nullNode != superScope.node) then {",
        "                // superScope.node == nullNode when superScope describes",
        "                // an imported module.",
        "                collectParentNames(superScope.node)",
        "            } else {",
        "                util.log 70 verbose \"‹{node.nameString}›.superscope.node == nullNode\"",
        "            }",
        "        } else {",
        "            util.log 70 verbose \"superscope of {node.nameString} is universal\"",
        "        }",
        "    }",
        "    superScope.elements.keysDo { each ->",
        "        if (each != \"self\") then {",
        "            objScope.addName(each) as(inheritedKind)",
        "            inhNode.providedNames.add(each)",
        "        }",
        "    }",
        "    inhNode.aliases.do { a ->",
        "        def old = a.oldName.nameString",
        "        if (superScope.contains(old)) then {",
        "            inhNode.providedNames.add(a.newName.nameString)",
        "        } else {",
        "            errormessages.syntaxError(\"can't define an alias for {old} \" ++",
        "                \"because it is not present in the inherited object\")",
        "                atRange(a.oldName.line, a.oldName.linePos,",
        "                        a.oldName.linePos + old.size - 1)",
        "        }",
        "    }",
        "    inhNode.exclusions.do { exId ->",
        "        inhNode.providedNames.remove(exId.nameString) ifAbsent {",
        "            errormessages.syntaxError(\"can't exclude {exId.nameString} \" ++",
        "                \"because it is not present in the inherited object\")",
        "                atRange(exId.line, exId.linePos,",
        "                        exId.linePos + exId.nameString.size - 1)",
        "        }",
        "    }",
        "}",
        "",
        "method gatherUsedNames(objNode) is confidential {",
        "    // For each of objNodes's used traits, gather the names",
        "    // introduced by that trait, as modified by alias and exclude.",
        "",
        "    def traitMethods = map.new",
        "    def objScope = objNode.scope",
        "    objNode.usedTraits.do { t ->",
        "        def traitScope = objScope.scopeReferencedBy(t.value)",
        "        def traitNode = traitScope.node",
        "        util.log 70 verbose \"examining parents of trait {t} which has scope {traitScope}\\ndefined in node {traitNode}\"",
        "        if (traitNode.isObject) then {",
        "            collectParentNames(traitScope.node)",
        "        } else {",
        "            util.log 70 verbose \"traitNode {traitNode} is not an object.\\n{traitNode.pretty 1}\"",
        "        }",
        "        traitScope.keysAndKindsDo { nm, kd ->",
        "            if (kd.forUsers) then {",
        "                util.log 70 verbose \"meth {nm} is forUsers; (kind = {kd})\"",
        "                objScope.addName(nm) as(k.fromTrait)",
        "                t.providedNames.add(nm)",
        "            }",
        "        }",
        "        t.aliases.do { a ->",
        "            def old = a.oldName.nameString",
        "            if (traitScope.contains(old)) then {",
        "                t.providedNames.add(a.newName.nameString)",
        "            } else {",
        "                errormessages.syntaxError(\"can't define an alias for \" ++",
        "                    \"{old} because it is not present in the trait\")",
        "                    atRange(a.oldName.line, a.oldName.linePos,",
        "                            a.oldName.linePos + old.size - 1)",
        "            }",
        "        }",
        "        t.exclusions.do { exId ->",
        "            t.providedNames.remove(exId.nameString) ifAbsent {",
        "                errormessages.syntaxError(\"can't exclude {exId.nameString} \" ++",
        "                    \"because it is not available in the trait\")",
        "                    atRange(exId.line, exId.linePos,",
        "                            exId.linePos + exId.nameString.size - 1)",
        "            }",
        "        }",
        "        t.providedNames.do { methName ->",
        "            def definingTraits = traitMethods.get(methName) ifAbsent { [] }",
        "            definingTraits.push(t)",
        "            traitMethods.put(methName, definingTraits)",
        "        }",
        "    }",
        "    checkForConflicts(objNode, traitMethods)",
        "}",
        "",
        "method checkForConflicts(objNode, traitMethods) {",
        "    // traitMethods is a dictionary with methodNames as keys, and",
        "    // a list of sources as values.  Multiple sources indicate a conflict,",
        "    // unless there is a local definition too.",
        "    def conflicts = emptyList",
        "",
        "    traitMethods.keysDo { methName ->",
        "        def sources = traitMethods.get(methName)",
        "        if (sources.size > 1) then {    // a method has more than one source trait",
        "            util.log 70 verbose(\"{objNode.nameString}'s scope = {objNode.scope}\" ++",
        "                  \"\\n and {objNode.nameString}'s localNames = {objNode.localNames}\")",
        "            if (objNode.localNames.contains(methName).not) then {",
        "                conflicts.addLast (conflictForMethodName(methName) from(sources))",
        "            }",
        "        }",
        "    }",
        "",
        "    if (conflicts.isEmpty) then { return }",
        "",
        "    var maxSourceLine := 0",
        "    var message := if (conflicts.size > 1) then {",
        "        \"Trait conflicts found:\\n    \"",
        "    } else {",
        "        \"Trait conflict found: \"",
        "    }",
        "    conflicts.do { each ->",
        "        def sourceList = each.sources.map { s -> s.nameString }",
        "        maxSourceLine := each.sources.fold {a, s -> max(a, s.line) }",
        "              startingWith(maxSourceLine)",
        "        message := message ++ \"method `{each.methodName}` is defined in \" ++",
        "              readableStringFrom(sourceList) ++ \".\\n    \"",
        "    }",
        "    if (maxSourceLine == 0) then {",
        "        errormessages.error(message)",
        "    } else {",
        "        errormessages.error(message) atLine (maxSourceLine)",
        "    }",
        "}",
        "",
        "class conflictForMethodName(nm) from(srcs) {",
        "    def methodName is public = nm",
        "    def sources is public = srcs",
        "}",
        "",
        "method readableStringFrom(xs:Sequence) {",
        "    var result := \"\"",
        "    xs.keysAndValuesDo { ix, v ->",
        "        result := result ++ v.asString",
        "        if (ix == (xs.size - 1)) then {",
        "            result := result ++ \" and \"",
        "        } elseif { ix < (xs.size - 1) } then {",
        "            result := result ++ \", \"",
        "        }",
        "    }",
        "    result",
        "}",
        "",
        "method transformBind(bindNode) ancestors(as) {",
        "    // bindNode is (a shallow copy of) a bindNode.  If it is binding",
        "    // a \"member\", transform it into a request on a setter method",
        "",
        "    def dest = bindNode.dest",
        "    def currentScope = bindNode.scope",
        "    if ( dest.kind == \"member\" ) then {",
        "        dest.value := dest.value ++ \":=\"",
        "        ast.callNode.new(dest,",
        "            ( [ast.callWithPart.request(dest.value) withArgs ( [bindNode.value] ) ] ) )",
        "            scope(currentScope)",
        "    } else {",
        "        bindNode",
        "    }",
        "}",
        "",
        "",
        "method transformInherits(inhNode) ancestors(as) {",
        "    // inhNode is (a shallow copy of) an inheritsNode.  Transform it to deal",
        "    // with superobject initialization and inherited names, including",
        "    // inheritance modifiers",
        "    def superObject = inhNode.value",
        "    def currentScope = inhNode.scope",
        "    if (currentScope.isObjectScope.not) then {",
        "        errormessages.syntaxError \"{inhNode.statementName} statements must be directly inside an object\"",
        "                    atRange(inhNode.line, inhNode.linePos, inhNode.linePos + 7)",
        "    }",
        "    if (superObject.isAppliedOccurenceOfIdentifier) then {",
        "        // this deals with \"inherits true\" etc.",
        "        def definingScope = currentScope.thatDefines(superObject.nameString)",
        "        if (definingScope.variety == \"built-in\") then { return inhNode }",
        "    }",
        "    def superScope = currentScope.scopeReferencedBy(superObject)",
        "    if (inhNode.isUse) then {",
        "        // a `use` statement; no transformation necessary",
        "    } elseif (inhNode.inheritsFromCall) then {",
        "        var superCall := inhNode.value",
        "        superCall.with.push(ast.callWithPart.request \"object\"",
        "            withArgs ( [ast.identifierNode.new(\"self\", false) scope(currentScope)] ))",
        "        def newmem = ast.memberNode.new(superCall.value.value ++ \"()object\",",
        "            superCall.value.target",
        "        ) scope(currentScope)",
        "        def newcall = ast.callNode.new(newmem, superCall.with) scope(currentScope)",
        "        inhNode.value := newcall",
        "    } elseif {inhNode.inheritsFromMember} then {",
        "        def newmem = ast.memberNode.new(inhNode.value.value ++ \"()object\",",
        "            inhNode.value.in",
        "        )",
        "        def newcall = ast.callNode.new(newmem, [",
        "            ast.callWithPart.request(inhNode.value.value) withArgs( [] ) scope(currentScope),",
        "            ast.callWithPart.request \"object\" withArgs (",
        "                [ast.identifierNode.new(\"self\", false) scope(currentScope)]) scope(currentScope)",
        "            ]",
        "        ) scope(currentScope)",
        "        inhNode.value := newcall",
        "    } elseif {! util.extensions.contains \"ObjectInheritance\"} then {",
        "        errormessages.syntaxError \"inheritance must be from a freshly-created object\"",
        "            atRange(inhNode.line, superObject.linePos,",
        "                superObject.linePos + superObject.nameString.size - 1)",
        "    }",
        "    inhNode",
        "}",
        "",
        "method rewriteMatches(topNode) {",
        "    topNode.map { node, as ->",
        "        if (node.isMatchingBlock) then {",
        "            rewritematchblock(node)",
        "        } else {",
        "            node",
        "        }",
        "    } ancestors (ast.ancestorChain.empty)",
        "}",
        "",
        "method resolve(moduleObject) {",
        "    util.log_verbose \"rewriting tree.\"",
        "    setupContext(moduleObject)",
        "    util.setPosition(0, 0)",
        "    moduleObject.scope := moduleScope",
        "    def preludeObject = ast.moduleNode.body([moduleObject])",
        "        named \"prelude\" scope (preludeScope)",
        "    def preludeChain = ast.ancestorChain.with(preludeObject)",
        "",
        "    def patternMatchModule = rewriteMatches(moduleObject)",
        "    util.log_verbose \"pattern-match rewriting done.\"",
        "",
        "    if (util.target == \"patterns\") then {",
        "        util.outprint \"=====================================\"",
        "        util.outprint \"module after pattern-match re-writing\"",
        "        util.outprint \"=====================================\"",
        "        util.outprint(patternMatchModule.pretty(0))",
        "        util.log_verbose \"done\"",
        "        sys.exit(0)",
        "    }",
        "",
        "    buildSymbolTableFor(patternMatchModule) ancestors(preludeChain)",
        "    util.log_verbose \"symbol tables built.\"",
        "",
        "    if (util.target == \"symbols\") then {",
        "        util.outprint \"=====================================\"",
        "        util.outprint \"module with symbol tables\"",
        "        util.outprint \"=====================================\"",
        "        util.outprint \"top-level\"",
        "        util.outprint \"Universal scope = {universalScope.asDebugString}\"",
        "        patternMatchModule.scope.withSurroundingScopesDo { each ->",
        "            util.outprint (each.asString)",
        "            util.outprint (each.elementScopesAsString)",
        "            util.outprint \"----------------\"",
        "        }",
        "        util.outprint(patternMatchModule.pretty(0))",
        "        util.log_verbose \"done\"",
        "        sys.exit(0)",
        "    }",
        "    resolveIdentifiers(patternMatchModule)",
        "}",
        "",
        "",
        "" ];
    }
    if (typeof global !== "undefined")
      global.gracecode_identifierresolution = gracecode_identifierresolution;
    if (typeof window !== "undefined")
      window.gracecode_identifierresolution = gracecode_identifierresolution;
