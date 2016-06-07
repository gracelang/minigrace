"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_dialect() {
  setModuleName("dialect");
  this.definitionModule = "dialect";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_dialect_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_dialect_outer0;
  setLineNumber(2);    // compilenode import
  // Import of errormessages as errormessages
  if (typeof gracecode_errormessages == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module errormessages'));
  var var_errormessages = do_import("errormessages", gracecode_errormessages);
  var func1 = function(argcv) {    // method errormessages
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for errormessages"));
    setModuleName("dialect");
    // errormessages is a simple accessor - elide try ... catch
    return var_errormessages;
  };
  func1.paramCounts = [0];
  this.methods["errormessages"] = func1;
  func1.definitionLine = 2;
  func1.definitionModule = "dialect";
  func1.debug = "import";
  func1.confidential = true;
  setModuleName("dialect");
  setLineNumber(3);    // compilenode import
  // Import of ast as ast
  if (typeof gracecode_ast == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module ast'));
  var var_ast = do_import("ast", gracecode_ast);
  var func2 = function(argcv) {    // method ast
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ast"));
    setModuleName("dialect");
    // ast is a simple accessor - elide try ... catch
    return var_ast;
  };
  func2.paramCounts = [0];
  this.methods["ast"] = func2;
  func2.definitionLine = 3;
  func2.definitionModule = "dialect";
  func2.debug = "import";
  func2.confidential = true;
  setModuleName("dialect");
  setLineNumber(5);    // compilenode identifier
  var call3 = callmethodChecked(var_prelude, "methods()object", [0, 1], this);
  this.superobj = call3;
  if (call3.data) this.data = call3.data;
  if (call3.hasOwnProperty('_value'))
      this._value = call3._value;
  setLineNumber(14);    // compilenode method
  var func4 = function(argcv) {    // method entryFrom(1)to(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_key__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for entryFrom (arg list 1) of entryFrom(1)to(1)"));
    var var_value__39__ = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for to (arg list 2) of entryFrom(1)to(1)"));
    setModuleName("dialect");
    var obj5 = Grace_allocObject(GraceObject, "dialect.entryFrom()to");
    obj5.definitionModule = "dialect";
    obj5.definitionLine = 14;
    obj5.outer = this;
    var reader_dialect_outer6 = function() {
      return this.outer;
    };
    obj5.methods["outer"] = reader_dialect_outer6;
    var obj_init_5 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj5;
      setLineNumber(15);    // compilenode identifier
      obj5.data["key"] = var_key__39__;
      var reader_dialect_key7 = function() {
        return this.data["key"];
      };
      reader_dialect_key7.def = true;
      obj5.methods["key"] = reader_dialect_key7;
      setLineNumber(16);    // compilenode identifier
      obj5.data["value"] = var_value__39__;
      var reader_dialect_value8 = function() {
        return this.data["value"];
      };
      obj5.methods["value"] = reader_dialect_value8;
      obj5.data["value"] = var_value__39__;
      var writer_dialect_value8 = function(argcv, o) {
        this.data["value"] = o;
        return GraceDone;
      };
      obj5.methods["value:="] = writer_dialect_value8;
      obj5.mutable = true;
      superDepth = origSuperDepth;
    };
    obj_init_5.apply(obj5, []);
    return obj5;
  };
  func4.confidential = true;
  func4.paramCounts = [1, 1];
  this.methods["entryFrom()to"] = func4;
  func4.definitionLine = 14;
  func4.definitionModule = "dialect";
    var func9 = function(argcv) {    // method entryFrom(1     )to(1     )()object
      var curarg = 1;
      var var_key__39__ = arguments[curarg];
      curarg++;
      var var_value__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      // Start argument processing
      curarg = 1;
      curarg++;
      curarg++;
      // End argument processing
      setModuleName("dialect");
      var returnTarget = invocationCount;
      invocationCount++;
      var obj10 = Grace_allocObject(GraceObject, "entryFrom()to");
      obj10.definitionModule = "dialect";
      obj10.definitionLine = 14;
      var inho10 = inheritingObject;
      while (inho10.superobj) inho10 = inho10.superobj;
      inho10.superobj = obj10;
      obj10.data = inheritingObject.data;
      if (inheritingObject.hasOwnProperty('_value'))
        obj10._value = inheritingObject._value;
      obj10.outer = this;
      var reader_dialect_outer11 = function() {
        return this.outer;
      };
      obj10.methods["outer"] = reader_dialect_outer11;
      var obj_init_10 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj10;
        setLineNumber(15);    // compilenode identifier
        obj10.data["key"] = var_key__39__;
        var reader_dialect_key12 = function() {
          return this.data["key"];
        };
        reader_dialect_key12.def = true;
        obj10.methods["key"] = reader_dialect_key12;
        setLineNumber(16);    // compilenode identifier
        obj10.data["value"] = var_value__39__;
        var reader_dialect_value13 = function() {
          return this.data["value"];
        };
        obj10.methods["value"] = reader_dialect_value13;
        obj10.data["value"] = var_value__39__;
        var writer_dialect_value13 = function(argcv, o) {
          this.data["value"] = o;
          return GraceDone;
        };
        obj10.methods["value:="] = writer_dialect_value13;
        obj10.mutable = true;
        superDepth = origSuperDepth;
      };
      obj_init_10.apply(inheritingObject, []);
      return obj10;
      };
      func9.confidential = true;
      this.methods["entryFrom()to()object"] = func9;
    setLineNumber(19);    // compilenode method
    var func14 = function(argcv) {    // method aMutableMap
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for aMutableMap"));
      setModuleName("dialect");
      var obj15 = Grace_allocObject(GraceObject, "dialect.aMutableMap");
      obj15.definitionModule = "dialect";
      obj15.definitionLine = 19;
      obj15.outer = this;
      var reader_dialect_outer16 = function() {
        return this.outer;
      };
      obj15.methods["outer"] = reader_dialect_outer16;
      var obj_init_15 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj15;
        var func17 = function(argcv) {    // method isEmpty
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isEmpty"));
          setModuleName("dialect");
          setLineNumber(23);    // compilenode call
          onSelf = true;
          var call19 = callmethodChecked(this, "size", [0]);
          var opresult21 = callmethodChecked(call19, "==", [1], new GraceNum(0));
          if (!Grace_isTrue(callmethod(var_Boolean, "match", [1], opresult21)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method isEmpty does not have " + 
                      callmethod(var_Boolean, "asString", [0])._value + "."));
          return opresult21;
        };
        func17.paramCounts = [0];
        obj15.methods["isEmpty"] = func17;
        func17.definitionLine = 23;
        func17.definitionModule = "dialect";
        var func22 = function(argcv) {    // method size
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for size"));
          setModuleName("dialect");
          setLineNumber(25);    // compilenode call
          onSelf = true;
          var call23 = callmethodChecked(this, "entries", [0]);
          var call24 = callmethodChecked(call23, "size", [0]);
          if (!Grace_isTrue(callmethod(var_Number, "match", [1], call24)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method size does not have " + 
                      callmethod(var_Number, "asString", [0])._value + "."));
          return call24;
        };
        func22.paramCounts = [0];
        obj15.methods["size"] = func22;
        func22.definitionLine = 25;
        func22.definitionModule = "dialect";
        var func25 = function(argcv) {    // method at(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_key = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for at(1)"));
          setModuleName("dialect");
          setLineNumber(28);    // compilenode block
          var block26 = new GraceBlock(this, 28, 1);
          setLineNumber(1);    // compilenode identifier
          block26.real = function(var_value) {
            setLineNumber(28);    // compilenode identifier
            throw new ReturnException(var_value, returnTarget);
            return undefined;
          };
          onSelf = true;
          var call27 = callmethodChecked(this, "atKey()do", [1, 1], var_key, block26);
          setLineNumber(30);    // compilenode string
          var string28 = new GraceString(" in aMutableMap");
          var string31 = new GraceString("no key ");
          var opresult33 = callmethodChecked(string31, "++", [1], var_key);
          var opresult35 = callmethodChecked(opresult33, "++", [1], string28);
          var call36 = callmethodChecked(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call37 = callmethodChecked(call36, "NoSuchObject", [0]);
          var call38 = callmethodChecked(call37, "raise", [1], opresult35);
          return call38;
        };
        func25.paramCounts = [1];
        obj15.methods["at"] = func25;
        func25.definitionLine = 27;
        func25.definitionModule = "dialect";
        var func39 = function(argcv) {    // method at(1)put(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_key = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for at (arg list 1) of at(1)put(1)"));
          var var_value = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for put (arg list 2) of at(1)put(1)"));
          setModuleName("dialect");
          setLineNumber(34);    // compilenode call
          onSelf = true;
          var call40 = callmethodChecked(this, "entries", [0]);
          var block41 = new GraceBlock(this, 34, 1);
          setLineNumber(1);    // compilenode identifier
          block41.real = function(var_entry) {
            var if42 = GraceDone;
            setLineNumber(35);    // compilenode identifier
            var call44 = callmethodChecked(var_entry, "key", [0]);
            var opresult46 = callmethodChecked(call44, "==", [1], var_key);
            if (Grace_isTrue(opresult46)) {
              setLineNumber(36);    // compilenode identifier
              var call47 = callmethodChecked(var_entry, "value:=", [1], var_value);
              setLineNumber(37);    // compilenode identifier
              throw new ReturnException(var_done, returnTarget);
            }
            return if42;
          };
          var call48 = callmethodChecked(var_prelude, "for()do", [1, 1], call40, block41);
          setLineNumber(41);    // compilenode call
          var call49 = callmethodChecked(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call50 = callmethodChecked(call49, "entryFrom()to", [1, 1], var_key, var_value);
          onSelf = true;
          var call51 = callmethodChecked(this, "entries", [0]);
          var call52 = callmethodChecked(call51, "push", [1], call50);
          if (!Grace_isTrue(callmethod(var_Done, "match", [1], call52)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method at(1)put(1) does not have " + 
                      callmethod(var_Done, "asString", [0])._value + "."));
          return call52;
        };
        func39.paramCounts = [1, 1];
        obj15.methods["at()put"] = func39;
        func39.definitionLine = 33;
        func39.definitionModule = "dialect";
        var func53 = function(argcv) {    // method keys
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for keys"));
          setModuleName("dialect");
          setLineNumber(45);    // compilenode array
          var array54 = new PrimitiveGraceList([]);
          var var_keys__39__ = array54;
          setLineNumber(47);    // compilenode call
          onSelf = true;
          var call55 = callmethodChecked(this, "entries", [0]);
          var block56 = new GraceBlock(this, 47, 1);
          setLineNumber(1);    // compilenode identifier
          block56.real = function(var_entry) {
            setLineNumber(48);    // compilenode identifier
            var call57 = callmethodChecked(var_entry, "key", [0]);
            var call58 = callmethodChecked(var_keys__39__, "push", [1], call57);
            return call58;
          };
          var call59 = callmethodChecked(var_prelude, "for()do", [1, 1], call55, block56);
          setLineNumber(51);    // compilenode identifier
          return var_keys__39__;
        };
        func53.paramCounts = [0];
        obj15.methods["keys"] = func53;
        func53.definitionLine = 44;
        func53.definitionModule = "dialect";
        var func60 = function(argcv) {    // method values
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for values"));
          setModuleName("dialect");
          setLineNumber(55);    // compilenode array
          var array61 = new PrimitiveGraceList([]);
          var var_values__39__ = array61;
          setLineNumber(57);    // compilenode call
          onSelf = true;
          var call62 = callmethodChecked(this, "entries", [0]);
          var block63 = new GraceBlock(this, 57, 1);
          setLineNumber(1);    // compilenode identifier
          block63.real = function(var_entry) {
            setLineNumber(58);    // compilenode identifier
            var call64 = callmethodChecked(var_entry, "value", [0]);
            var call65 = callmethodChecked(var_values__39__, "push", [1], call64);
            return call65;
          };
          var call66 = callmethodChecked(var_prelude, "for()do", [1, 1], call62, block63);
          setLineNumber(61);    // compilenode identifier
          return var_values__39__;
        };
        func60.paramCounts = [0];
        obj15.methods["values"] = func60;
        func60.definitionLine = 54;
        func60.definitionModule = "dialect";
        var func67 = function(argcv) {    // method containsKey(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_key = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for containsKey(1)"));
          setModuleName("dialect");
          setLineNumber(65);    // compilenode block
          var block68 = new GraceBlock(this, 65, 1);
          setLineNumber(1);    // compilenode identifier
          block68.real = function(var___95____95__0) {
            setLineNumber(65);    // compilenode identifier
            throw new ReturnException(GraceTrue, returnTarget);
            return undefined;
          };
          onSelf = true;
          var call69 = callmethodChecked(this, "atKey()do", [1, 1], var_key, block68);
          setLineNumber(67);    // compilenode identifier
          return GraceFalse;
        };
        func67.paramCounts = [1];
        obj15.methods["containsKey"] = func67;
        func67.definitionLine = 64;
        func67.definitionModule = "dialect";
        var func70 = function(argcv) {    // method atKey(1)do(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_key = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for atKey (arg list 1) of atKey(1)do(1)"));
          var var_block = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for do (arg list 2) of atKey(1)do(1)"));
          setModuleName("dialect");
          setLineNumber(71);    // compilenode block
          var block71 = new GraceBlock(this, 71, 0);
          block71.real = function() {
            return GraceDone;
          };
          onSelf = true;
          var call72 = callmethodChecked(this, "atKey()do()else", [1, 1, 1], var_key, var_block, block71);
          setLineNumber(73);    // compilenode identifier
          return var_done;
        };
        func70.paramCounts = [1, 1];
        obj15.methods["atKey()do"] = func70;
        func70.definitionLine = 70;
        func70.definitionModule = "dialect";
        var func73 = function(argcv) {    // method atKey(1)do(1)else(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_key = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for atKey (arg list 1) of atKey(1)do(1)else(1)"));
          var var_block = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for do (arg list 2) of atKey(1)do(1)else(1)"));
          var var_block__39__ = arguments[curarg];
          curarg++;
          if (argcv[2] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for else (arg list 3) of atKey(1)do(1)else(1)"));
          setModuleName("dialect");
          setLineNumber(76);    // compilenode call
          onSelf = true;
          var call74 = callmethodChecked(this, "entries", [0]);
          var block75 = new GraceBlock(this, 76, 1);
          setLineNumber(1);    // compilenode identifier
          block75.real = function(var_entry) {
            var if76 = GraceDone;
            setLineNumber(77);    // compilenode identifier
            var call78 = callmethodChecked(var_entry, "key", [0]);
            var opresult80 = callmethodChecked(call78, "==", [1], var_key);
            if (Grace_isTrue(opresult80)) {
              setLineNumber(78);    // compilenode identifier
              var call81 = callmethodChecked(var_entry, "value", [0]);
              var call82 = callmethodChecked(var_block, "apply", [1], call81);
              throw new ReturnException(call82, returnTarget);
            }
            return if76;
          };
          var call83 = callmethodChecked(var_prelude, "for()do", [1, 1], call74, block75);
          setLineNumber(82);    // compilenode identifier
          var call84 = callmethodChecked(var_block__39__, "apply", [0]);
          return call84;
        };
        func73.paramCounts = [1, 1, 1];
        obj15.methods["atKey()do()else"] = func73;
        func73.definitionLine = 75;
        func73.definitionModule = "dialect";
        var func85 = function(argcv) {    // method asString
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
          setModuleName("dialect");
          var if86 = GraceDone;
          setLineNumber(86);    // compilenode call
          onSelf = true;
          var call87 = callmethodChecked(this, "isEmpty", [0]);
          if (Grace_isTrue(call87)) {
            setLineNumber(87);    // compilenode string
            var string88 = new GraceString("{}");
            return string88;
          }
          setLineNumber(90);    // compilenode string
          var string89 = new GraceString("{");
          var var_out = string89;
          setLineNumber(92);    // compilenode identifier
          var var_once = GraceFalse;
          setLineNumber(93);    // compilenode call
          onSelf = true;
          var call90 = callmethodChecked(this, "entries", [0]);
          var block91 = new GraceBlock(this, 93, 1);
          setLineNumber(1);    // compilenode identifier
          block91.real = function(var_entry) {
            var if92 = GraceDone;
            setLineNumber(94);    // compilenode identifier
            if (Grace_isTrue(var_once)) {
              setLineNumber(95);    // compilenode string
              var string93 = new GraceString(",");
              var string96 = new GraceString("");
              var opresult98 = callmethodChecked(string96, "++", [1], var_out);
              var opresult100 = callmethodChecked(opresult98, "++", [1], string93);
              var_out = opresult100;
              if92 = GraceDone;
            }
            setLineNumber(97);    // compilenode string
            var string101 = new GraceString("");
            var call103 = callmethodChecked(var_entry, "value", [0]);
            var string105 = new GraceString(" => ");
            var call107 = callmethodChecked(var_entry, "key", [0]);
            var string109 = new GraceString(" ");
            var string112 = new GraceString("");
            var opresult114 = callmethodChecked(string112, "++", [1], var_out);
            var opresult116 = callmethodChecked(opresult114, "++", [1], string109);
            var opresult118 = callmethodChecked(opresult116, "++", [1], call107);
            var opresult120 = callmethodChecked(opresult118, "++", [1], string105);
            var opresult122 = callmethodChecked(opresult120, "++", [1], call103);
            var opresult124 = callmethodChecked(opresult122, "++", [1], string101);
            var_out = opresult124;
            setLineNumber(98);    // compilenode identifier
            var_once = GraceTrue;
            return GraceDone;
          };
          var call125 = callmethodChecked(var_prelude, "for()do", [1, 1], call90, block91);
          setLineNumber(101);    // compilenode string
          var string126 = new GraceString(" }");
          var string129 = new GraceString("");
          var opresult131 = callmethodChecked(string129, "++", [1], var_out);
          var opresult133 = callmethodChecked(opresult131, "++", [1], string126);
          return opresult133;
        };
        func85.paramCounts = [0];
        obj15.methods["asString"] = func85;
        func85.definitionLine = 85;
        func85.definitionModule = "dialect";
        setLineNumber(21);    // compilenode array
        var array134 = new PrimitiveGraceList([]);
        obj15.data["entries"] = array134;
        var reader_dialect_entries135 = function() {
          return this.data["entries"];
        };
        reader_dialect_entries135.def = true;
        reader_dialect_entries135.confidential = true;
        obj15.methods["entries"] = reader_dialect_entries135;
        superDepth = origSuperDepth;
      };
      obj_init_15.apply(obj15, []);
      return obj15;
    };
    func14.paramCounts = [0];
    this.methods["aMutableMap"] = func14;
    func14.definitionLine = 19;
    func14.definitionModule = "dialect";
      var func136 = function(argcv) {    // method aMutableMap()object
        var curarg = 1;
        var inheritingObject = arguments[curarg++];
        // Start argument processing
        curarg = 1;
        // End argument processing
        setModuleName("dialect");
        var returnTarget = invocationCount;
        invocationCount++;
        var obj137 = Grace_allocObject(GraceObject, "aMutableMap");
        obj137.definitionModule = "dialect";
        obj137.definitionLine = 19;
        var inho137 = inheritingObject;
        while (inho137.superobj) inho137 = inho137.superobj;
        inho137.superobj = obj137;
        obj137.data = inheritingObject.data;
        if (inheritingObject.hasOwnProperty('_value'))
          obj137._value = inheritingObject._value;
        obj137.outer = this;
        var reader_dialect_outer138 = function() {
          return this.outer;
        };
        obj137.methods["outer"] = reader_dialect_outer138;
        var obj_init_137 = function() {
          var origSuperDepth = superDepth;
          superDepth = obj137;
          var func139 = function(argcv) {    // method isEmpty
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isEmpty"));
            setModuleName("dialect");
            setLineNumber(23);    // compilenode call
            onSelf = true;
            var call141 = callmethodChecked(this, "size", [0]);
            var opresult143 = callmethodChecked(call141, "==", [1], new GraceNum(0));
            if (!Grace_isTrue(callmethod(var_Boolean, "match", [1], opresult143)))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("result of method isEmpty does not have " + 
                        callmethod(var_Boolean, "asString", [0])._value + "."));
            return opresult143;
          };
          func139.paramCounts = [0];
          obj137.methods["isEmpty"] = func139;
          func139.definitionLine = 23;
          func139.definitionModule = "dialect";
          var func144 = function(argcv) {    // method size
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for size"));
            setModuleName("dialect");
            setLineNumber(25);    // compilenode call
            onSelf = true;
            var call145 = callmethodChecked(this, "entries", [0]);
            var call146 = callmethodChecked(call145, "size", [0]);
            if (!Grace_isTrue(callmethod(var_Number, "match", [1], call146)))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("result of method size does not have " + 
                        callmethod(var_Number, "asString", [0])._value + "."));
            return call146;
          };
          func144.paramCounts = [0];
          obj137.methods["size"] = func144;
          func144.definitionLine = 25;
          func144.definitionModule = "dialect";
          var func147 = function(argcv) {    // method at(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for at(1)"));
            setModuleName("dialect");
            setLineNumber(28);    // compilenode block
            var block148 = new GraceBlock(this, 28, 1);
            setLineNumber(1);    // compilenode identifier
            block148.real = function(var_value) {
              setLineNumber(28);    // compilenode identifier
              throw new ReturnException(var_value, returnTarget);
              return undefined;
            };
            onSelf = true;
            var call149 = callmethodChecked(this, "atKey()do", [1, 1], var_key, block148);
            setLineNumber(30);    // compilenode string
            var string150 = new GraceString(" in aMutableMap");
            var string153 = new GraceString("no key ");
            var opresult155 = callmethodChecked(string153, "++", [1], var_key);
            var opresult157 = callmethodChecked(opresult155, "++", [1], string150);
            var call158 = callmethodChecked(superDepth, "outer", [0]);
            onOuter = true;
            onSelf = true;
            var call159 = callmethodChecked(call158, "NoSuchObject", [0]);
            var call160 = callmethodChecked(call159, "raise", [1], opresult157);
            return call160;
          };
          func147.paramCounts = [1];
          obj137.methods["at"] = func147;
          func147.definitionLine = 27;
          func147.definitionModule = "dialect";
          var func161 = function(argcv) {    // method at(1)put(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for at (arg list 1) of at(1)put(1)"));
            var var_value = arguments[curarg];
            curarg++;
            if (argcv[1] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for put (arg list 2) of at(1)put(1)"));
            setModuleName("dialect");
            setLineNumber(34);    // compilenode call
            onSelf = true;
            var call162 = callmethodChecked(this, "entries", [0]);
            var block163 = new GraceBlock(this, 34, 1);
            setLineNumber(1);    // compilenode identifier
            block163.real = function(var_entry) {
              var if164 = GraceDone;
              setLineNumber(35);    // compilenode identifier
              var call166 = callmethodChecked(var_entry, "key", [0]);
              var opresult168 = callmethodChecked(call166, "==", [1], var_key);
              if (Grace_isTrue(opresult168)) {
                setLineNumber(36);    // compilenode identifier
                var call169 = callmethodChecked(var_entry, "value:=", [1], var_value);
                setLineNumber(37);    // compilenode identifier
                throw new ReturnException(var_done, returnTarget);
              }
              return if164;
            };
            var call170 = callmethodChecked(var_prelude, "for()do", [1, 1], call162, block163);
            setLineNumber(41);    // compilenode call
            var call171 = callmethodChecked(superDepth, "outer", [0]);
            onOuter = true;
            onSelf = true;
            var call172 = callmethodChecked(call171, "entryFrom()to", [1, 1], var_key, var_value);
            onSelf = true;
            var call173 = callmethodChecked(this, "entries", [0]);
            var call174 = callmethodChecked(call173, "push", [1], call172);
            if (!Grace_isTrue(callmethod(var_Done, "match", [1], call174)))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("result of method at(1)put(1) does not have " + 
                        callmethod(var_Done, "asString", [0])._value + "."));
            return call174;
          };
          func161.paramCounts = [1, 1];
          obj137.methods["at()put"] = func161;
          func161.definitionLine = 33;
          func161.definitionModule = "dialect";
          var func175 = function(argcv) {    // method keys
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for keys"));
            setModuleName("dialect");
            setLineNumber(45);    // compilenode array
            var array176 = new PrimitiveGraceList([]);
            var var_keys__39__ = array176;
            setLineNumber(47);    // compilenode call
            onSelf = true;
            var call177 = callmethodChecked(this, "entries", [0]);
            var block178 = new GraceBlock(this, 47, 1);
            setLineNumber(1);    // compilenode identifier
            block178.real = function(var_entry) {
              setLineNumber(48);    // compilenode identifier
              var call179 = callmethodChecked(var_entry, "key", [0]);
              var call180 = callmethodChecked(var_keys__39__, "push", [1], call179);
              return call180;
            };
            var call181 = callmethodChecked(var_prelude, "for()do", [1, 1], call177, block178);
            setLineNumber(51);    // compilenode identifier
            return var_keys__39__;
          };
          func175.paramCounts = [0];
          obj137.methods["keys"] = func175;
          func175.definitionLine = 44;
          func175.definitionModule = "dialect";
          var func182 = function(argcv) {    // method values
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for values"));
            setModuleName("dialect");
            setLineNumber(55);    // compilenode array
            var array183 = new PrimitiveGraceList([]);
            var var_values__39__ = array183;
            setLineNumber(57);    // compilenode call
            onSelf = true;
            var call184 = callmethodChecked(this, "entries", [0]);
            var block185 = new GraceBlock(this, 57, 1);
            setLineNumber(1);    // compilenode identifier
            block185.real = function(var_entry) {
              setLineNumber(58);    // compilenode identifier
              var call186 = callmethodChecked(var_entry, "value", [0]);
              var call187 = callmethodChecked(var_values__39__, "push", [1], call186);
              return call187;
            };
            var call188 = callmethodChecked(var_prelude, "for()do", [1, 1], call184, block185);
            setLineNumber(61);    // compilenode identifier
            return var_values__39__;
          };
          func182.paramCounts = [0];
          obj137.methods["values"] = func182;
          func182.definitionLine = 54;
          func182.definitionModule = "dialect";
          var func189 = function(argcv) {    // method containsKey(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for containsKey(1)"));
            setModuleName("dialect");
            setLineNumber(65);    // compilenode block
            var block190 = new GraceBlock(this, 65, 1);
            setLineNumber(1);    // compilenode identifier
            block190.real = function(var___95____95__0) {
              setLineNumber(65);    // compilenode identifier
              throw new ReturnException(GraceTrue, returnTarget);
              return undefined;
            };
            onSelf = true;
            var call191 = callmethodChecked(this, "atKey()do", [1, 1], var_key, block190);
            setLineNumber(67);    // compilenode identifier
            return GraceFalse;
          };
          func189.paramCounts = [1];
          obj137.methods["containsKey"] = func189;
          func189.definitionLine = 64;
          func189.definitionModule = "dialect";
          var func192 = function(argcv) {    // method atKey(1)do(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for atKey (arg list 1) of atKey(1)do(1)"));
            var var_block = arguments[curarg];
            curarg++;
            if (argcv[1] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for do (arg list 2) of atKey(1)do(1)"));
            setModuleName("dialect");
            setLineNumber(71);    // compilenode block
            var block193 = new GraceBlock(this, 71, 0);
            block193.real = function() {
              return GraceDone;
            };
            onSelf = true;
            var call194 = callmethodChecked(this, "atKey()do()else", [1, 1, 1], var_key, var_block, block193);
            setLineNumber(73);    // compilenode identifier
            return var_done;
          };
          func192.paramCounts = [1, 1];
          obj137.methods["atKey()do"] = func192;
          func192.definitionLine = 70;
          func192.definitionModule = "dialect";
          var func195 = function(argcv) {    // method atKey(1)do(1)else(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for atKey (arg list 1) of atKey(1)do(1)else(1)"));
            var var_block = arguments[curarg];
            curarg++;
            if (argcv[1] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for do (arg list 2) of atKey(1)do(1)else(1)"));
            var var_block__39__ = arguments[curarg];
            curarg++;
            if (argcv[2] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for else (arg list 3) of atKey(1)do(1)else(1)"));
            setModuleName("dialect");
            setLineNumber(76);    // compilenode call
            onSelf = true;
            var call196 = callmethodChecked(this, "entries", [0]);
            var block197 = new GraceBlock(this, 76, 1);
            setLineNumber(1);    // compilenode identifier
            block197.real = function(var_entry) {
              var if198 = GraceDone;
              setLineNumber(77);    // compilenode identifier
              var call200 = callmethodChecked(var_entry, "key", [0]);
              var opresult202 = callmethodChecked(call200, "==", [1], var_key);
              if (Grace_isTrue(opresult202)) {
                setLineNumber(78);    // compilenode identifier
                var call203 = callmethodChecked(var_entry, "value", [0]);
                var call204 = callmethodChecked(var_block, "apply", [1], call203);
                throw new ReturnException(call204, returnTarget);
              }
              return if198;
            };
            var call205 = callmethodChecked(var_prelude, "for()do", [1, 1], call196, block197);
            setLineNumber(82);    // compilenode identifier
            var call206 = callmethodChecked(var_block__39__, "apply", [0]);
            return call206;
          };
          func195.paramCounts = [1, 1, 1];
          obj137.methods["atKey()do()else"] = func195;
          func195.definitionLine = 75;
          func195.definitionModule = "dialect";
          var func207 = function(argcv) {    // method asString
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
            setModuleName("dialect");
            var if208 = GraceDone;
            setLineNumber(86);    // compilenode call
            onSelf = true;
            var call209 = callmethodChecked(this, "isEmpty", [0]);
            if (Grace_isTrue(call209)) {
              setLineNumber(87);    // compilenode string
              var string210 = new GraceString("{}");
              return string210;
            }
            setLineNumber(90);    // compilenode string
            var string211 = new GraceString("{");
            var var_out = string211;
            setLineNumber(92);    // compilenode identifier
            var var_once = GraceFalse;
            setLineNumber(93);    // compilenode call
            onSelf = true;
            var call212 = callmethodChecked(this, "entries", [0]);
            var block213 = new GraceBlock(this, 93, 1);
            setLineNumber(1);    // compilenode identifier
            block213.real = function(var_entry) {
              var if214 = GraceDone;
              setLineNumber(94);    // compilenode identifier
              if (Grace_isTrue(var_once)) {
                setLineNumber(95);    // compilenode string
                var string215 = new GraceString(",");
                var string218 = new GraceString("");
                var opresult220 = callmethodChecked(string218, "++", [1], var_out);
                var opresult222 = callmethodChecked(opresult220, "++", [1], string215);
                var_out = opresult222;
                if214 = GraceDone;
              }
              setLineNumber(97);    // compilenode string
              var string223 = new GraceString("");
              var call225 = callmethodChecked(var_entry, "value", [0]);
              var string227 = new GraceString(" => ");
              var call229 = callmethodChecked(var_entry, "key", [0]);
              var string231 = new GraceString(" ");
              var string234 = new GraceString("");
              var opresult236 = callmethodChecked(string234, "++", [1], var_out);
              var opresult238 = callmethodChecked(opresult236, "++", [1], string231);
              var opresult240 = callmethodChecked(opresult238, "++", [1], call229);
              var opresult242 = callmethodChecked(opresult240, "++", [1], string227);
              var opresult244 = callmethodChecked(opresult242, "++", [1], call225);
              var opresult246 = callmethodChecked(opresult244, "++", [1], string223);
              var_out = opresult246;
              setLineNumber(98);    // compilenode identifier
              var_once = GraceTrue;
              return GraceDone;
            };
            var call247 = callmethodChecked(var_prelude, "for()do", [1, 1], call212, block213);
            setLineNumber(101);    // compilenode string
            var string248 = new GraceString(" }");
            var string251 = new GraceString("");
            var opresult253 = callmethodChecked(string251, "++", [1], var_out);
            var opresult255 = callmethodChecked(opresult253, "++", [1], string248);
            return opresult255;
          };
          func207.paramCounts = [0];
          obj137.methods["asString"] = func207;
          func207.definitionLine = 85;
          func207.definitionModule = "dialect";
          setLineNumber(21);    // compilenode array
          var array256 = new PrimitiveGraceList([]);
          obj137.data["entries"] = array256;
          var reader_dialect_entries257 = function() {
            return this.data["entries"];
          };
          reader_dialect_entries257.def = true;
          reader_dialect_entries257.confidential = true;
          obj137.methods["entries"] = reader_dialect_entries257;
          superDepth = origSuperDepth;
        };
        obj_init_137.apply(inheritingObject, []);
        return obj137;
        };
        this.methods["aMutableMap()object"] = func136;
      setLineNumber(117);    // compilenode method
      var func258 = function(argcv) {    // method rule(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_block = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for rule(1)"));
        setModuleName("dialect");
        setLineNumber(118);    // compilenode identifier
        var call259 = callmethodChecked(var_rules, "push", [1], var_block);
        if (!Grace_isTrue(callmethod(var_Done, "match", [1], call259)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method rule(1) does not have " + 
                    callmethod(var_Done, "asString", [0])._value + "."));
        return call259;
      };
      func258.paramCounts = [1];
      this.methods["rule"] = func258;
      func258.definitionLine = 117;
      func258.definitionModule = "dialect";
      setLineNumber(125);    // compilenode method
      var func260 = function(argcv) {    // method fail(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_message = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for fail(1)"));
        setModuleName("dialect");
        setLineNumber(126);    // compilenode object
        var obj261 = Grace_allocObject(GraceObject, "object");
        obj261.definitionModule = "dialect";
        obj261.definitionLine = 126;
        obj261.outer = this;
        var reader_dialect_outer262 = function() {
          return this.outer;
        };
        obj261.methods["outer"] = reader_dialect_outer262;
        var obj_init_261 = function() {
          var origSuperDepth = superDepth;
          superDepth = obj261;
          setLineNumber(127);    // compilenode identifier
          obj261.data["line"] = var_currentLine;
          var reader_dialect_line263 = function() {
            return this.data["line"];
          };
          reader_dialect_line263.def = true;
          obj261.methods["line"] = reader_dialect_line263;
          setLineNumber(128);    // compilenode num
          obj261.data["linePos"] = new GraceNum(1);
          var reader_dialect_linePos264 = function() {
            return this.data["linePos"];
          };
          reader_dialect_linePos264.def = true;
          obj261.methods["linePos"] = reader_dialect_linePos264;
          superDepth = origSuperDepth;
        };
        obj_init_261.apply(obj261, []);
        setLineNumber(126);    // compilenode identifier
        var call265 = callmethodChecked(var_CheckerFailure, "raise()with", [1, 1], var_message, obj261);
        return call265;
      };
      func260.paramCounts = [1];
      this.methods["fail"] = func260;
      func260.definitionLine = 125;
      func260.definitionModule = "dialect";
      setLineNumber(131);    // compilenode method
      var func266 = function(argcv) {    // method fail(1)at(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_message = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for fail (arg list 1) of fail(1)at(1)"));
        var var_p = arguments[curarg];
        curarg++;
        if (argcv[1] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for at (arg list 2) of fail(1)at(1)"));
        setModuleName("dialect");
        setLineNumber(132);    // compilenode identifier
        var call267 = callmethodChecked(var_CheckerFailure, "raise()with", [1, 1], var_message, var_p);
        return call267;
      };
      func266.paramCounts = [1, 1];
      this.methods["fail()at"] = func266;
      func266.definitionLine = 131;
      func266.definitionModule = "dialect";
      setLineNumber(134);    // compilenode method
      var func268 = function(argcv) {    // method fail(1)from(1)to(1)suggest(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_message = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for fail (arg list 1) of fail(1)from(1)to(1)suggest(1)"));
        var var_startPos = arguments[curarg];
        curarg++;
        if (argcv[1] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for from (arg list 2) of fail(1)from(1)to(1)suggest(1)"));
        var var_endPos = arguments[curarg];
        curarg++;
        if (argcv[2] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for to (arg list 3) of fail(1)from(1)to(1)suggest(1)"));
        var var_sugg = arguments[curarg];
        curarg++;
        if (argcv[3] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for suggest (arg list 4) of fail(1)from(1)to(1)suggest(1)"));
        setModuleName("dialect");
        setLineNumber(135);    // compilenode object
        var obj269 = Grace_allocObject(GraceObject, "o");
        obj269.definitionModule = "dialect";
        obj269.definitionLine = 135;
        obj269.outer = this;
        var reader_dialect_outer270 = function() {
          return this.outer;
        };
        obj269.methods["outer"] = reader_dialect_outer270;
        var obj_init_269 = function() {
          var origSuperDepth = superDepth;
          superDepth = obj269;
          setLineNumber(136);    // compilenode identifier
          obj269.data["line"] = var_currentLine;
          var reader_dialect_line271 = function() {
            return this.data["line"];
          };
          reader_dialect_line271.def = true;
          obj269.methods["line"] = reader_dialect_line271;
          setLineNumber(137);    // compilenode identifier
          obj269.data["posStart"] = var_startPos;
          var reader_dialect_posStart272 = function() {
            return this.data["posStart"];
          };
          reader_dialect_posStart272.def = true;
          obj269.methods["posStart"] = reader_dialect_posStart272;
          setLineNumber(138);    // compilenode identifier
          obj269.data["posEnd"] = var_endPos;
          var reader_dialect_posEnd273 = function() {
            return this.data["posEnd"];
          };
          reader_dialect_posEnd273.def = true;
          obj269.methods["posEnd"] = reader_dialect_posEnd273;
          setLineNumber(139);    // compilenode identifier
          var array274 = new PrimitiveGraceList([var_sugg]);
          obj269.data["suggestions"] = array274;
          var reader_dialect_suggestions275 = function() {
            return this.data["suggestions"];
          };
          reader_dialect_suggestions275.def = true;
          obj269.methods["suggestions"] = reader_dialect_suggestions275;
          superDepth = origSuperDepth;
        };
        obj_init_269.apply(obj269, []);
        var var_o = obj269;
        setLineNumber(141);    // compilenode identifier
        var call276 = callmethodChecked(var_CheckerFailure, "raise()with", [1, 1], var_message, var_o);
        return call276;
      };
      func268.paramCounts = [1, 1, 1, 1];
      this.methods["fail()from()to()suggest"] = func268;
      func268.definitionLine = 134;
      func268.definitionModule = "dialect";
      setLineNumber(143);    // compilenode method
      var func277 = function(argcv) {    // method fail(1)from(1)to(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_message = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for fail (arg list 1) of fail(1)from(1)to(1)"));
        var var_startPos = arguments[curarg];
        curarg++;
        if (argcv[1] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for from (arg list 2) of fail(1)from(1)to(1)"));
        var var_endPos = arguments[curarg];
        curarg++;
        if (argcv[2] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for to (arg list 3) of fail(1)from(1)to(1)"));
        setModuleName("dialect");
        setLineNumber(144);    // compilenode object
        var obj278 = Grace_allocObject(GraceObject, "o");
        obj278.definitionModule = "dialect";
        obj278.definitionLine = 144;
        obj278.outer = this;
        var reader_dialect_outer279 = function() {
          return this.outer;
        };
        obj278.methods["outer"] = reader_dialect_outer279;
        var obj_init_278 = function() {
          var origSuperDepth = superDepth;
          superDepth = obj278;
          setLineNumber(145);    // compilenode identifier
          obj278.data["line"] = var_currentLine;
          var reader_dialect_line280 = function() {
            return this.data["line"];
          };
          reader_dialect_line280.def = true;
          obj278.methods["line"] = reader_dialect_line280;
          setLineNumber(146);    // compilenode identifier
          obj278.data["posStart"] = var_startPos;
          var reader_dialect_posStart281 = function() {
            return this.data["posStart"];
          };
          reader_dialect_posStart281.def = true;
          obj278.methods["posStart"] = reader_dialect_posStart281;
          setLineNumber(147);    // compilenode identifier
          obj278.data["posEnd"] = var_endPos;
          var reader_dialect_posEnd282 = function() {
            return this.data["posEnd"];
          };
          reader_dialect_posEnd282.def = true;
          obj278.methods["posEnd"] = reader_dialect_posEnd282;
          setLineNumber(148);    // compilenode array
          var array283 = new PrimitiveGraceList([]);
          obj278.data["suggestions"] = array283;
          var reader_dialect_suggestions284 = function() {
            return this.data["suggestions"];
          };
          reader_dialect_suggestions284.def = true;
          obj278.methods["suggestions"] = reader_dialect_suggestions284;
          superDepth = origSuperDepth;
        };
        obj_init_278.apply(obj278, []);
        var var_o = obj278;
        setLineNumber(150);    // compilenode identifier
        var call285 = callmethodChecked(var_CheckerFailure, "raise()with", [1, 1], var_message, var_o);
        return call285;
      };
      func277.paramCounts = [1, 1, 1];
      this.methods["fail()from()to"] = func277;
      func277.definitionLine = 143;
      func277.definitionModule = "dialect";
      setLineNumber(152);    // compilenode method
      var func286 = function(argcv) {    // method fail(1)when(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_msg = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for fail (arg list 1) of fail(1)when(1)"));
        var var_pat = arguments[curarg];
        curarg++;
        if (argcv[1] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for when (arg list 2) of fail(1)when(1)"));
        setModuleName("dialect");
        setLineNumber(153);    // compilenode block
        var block287 = new GraceBlock(this, 153, 1);
        setLineNumber(1);    // compilenode identifier
        block287.real = function(var_x) {
          setLineNumber(154);    // compilenode identifier
          var call288 = callmethodChecked(var_pat, "match", [1], var_x);
          var var_mat = call288;
          var if289 = GraceDone;
          setLineNumber(155);    // compilenode block
          var block290 = new GraceBlock(this, 155, 0);
          block290.real = function() {
            var call291 = callmethodChecked(var_mat, "result", [0]);
            return call291;
          };
          var opresult294 = callmethodChecked(var_mat, "&&", [1], block290);
          if (Grace_isTrue(opresult294)) {
            setLineNumber(156);    // compilenode identifier
            onSelf = true;
            var call295 = callmethodChecked(this, "fail", [1], var_msg);
            if289 = call295;
          }
          return if289;
        };
        onSelf = true;
        var call296 = callmethodChecked(this, "rule", [1], block287);
        return call296;
      };
      func286.paramCounts = [1, 1];
      this.methods["fail()when"] = func286;
      func286.definitionLine = 152;
      func286.definitionModule = "dialect";
      setLineNumber(160);    // compilenode method
      var func297 = function(argcv) {    // method createSuggestion
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for createSuggestion"));
        setModuleName("dialect");
        setLineNumber(161);    // compilenode identifier
        var call298 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call299 = callmethodChecked(call298, "new", [0]);
        return call299;
      };
      func297.paramCounts = [0];
      this.methods["createSuggestion"] = func297;
      func297.definitionLine = 160;
      func297.definitionModule = "dialect";
      setLineNumber(163);    // compilenode method
      var func300 = function(argcv) {    // method when(1)error(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_pat = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for when (arg list 1) of when(1)error(1)"));
        var var_msg = arguments[curarg];
        curarg++;
        if (argcv[1] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for error (arg list 2) of when(1)error(1)"));
        setModuleName("dialect");
        setLineNumber(164);    // compilenode identifier
        onSelf = true;
        var call301 = callmethodChecked(this, "fail()when", [1, 1], var_msg, var_pat);
        return call301;
      };
      func300.paramCounts = [1, 1];
      this.methods["when()error"] = func300;
      func300.definitionLine = 163;
      func300.definitionModule = "dialect";
      setLineNumber(169);    // compilenode method
      var func302 = function(argcv) {    // method stackOfKind(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_kind = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for stackOfKind(1)"));
        // Start argument checking
        curarg = 1;
        if (!Grace_isTrue(callmethod(var_String, "match",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in stackOfKind (arg list 1), which corresponds to parameter kind, does not have " + 
                    callmethod(var_String, "asString", [0])._value + "."));
        curarg++;
        // End argument checking
        setModuleName("dialect");
        var obj303 = Grace_allocObject(GraceObject, "dialect.stackOfKind");
        obj303.definitionModule = "dialect";
        obj303.definitionLine = 169;
        obj303.outer = this;
        var reader_dialect_outer304 = function() {
          return this.outer;
        };
        obj303.methods["outer"] = reader_dialect_outer304;
        var obj_init_303 = function() {
          var origSuperDepth = superDepth;
          superDepth = obj303;
          var func305 = function(argcv) {    // method at(1)put(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_name = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for at (arg list 1) of at(1)put(1)"));
            var var_value = arguments[curarg];
            curarg++;
            if (argcv[1] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for put (arg list 2) of at(1)put(1)"));
            // Start argument checking
            curarg = 1;
            setLineNumber(172);    // compilenode identifier
            if (!Grace_isTrue(callmethod(var_String, "match",  [1], arguments[curarg])))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("argument 1 in at (arg list 1), which corresponds to parameter name, does not have " + 
                        callmethod(var_String, "asString", [0])._value + "."));
            curarg++;
            curarg++;
            // End argument checking
            setModuleName("dialect");
            setLineNumber(173);    // compilenode call
            onSelf = true;
            var call306 = callmethodChecked(this, "stack", [0]);
            var call307 = callmethodChecked(call306, "last", [0]);
            var call308 = callmethodChecked(call307, "at()put", [1, 1], var_name, var_value);
            if (!Grace_isTrue(callmethod(var_Done, "match", [1], call308)))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("result of method at(1)put(1) does not have " + 
                        callmethod(var_Done, "asString", [0])._value + "."));
            return call308;
          };
          func305.paramTypes = [];
          func305.paramTypes.push([type_String, "name"]);
          func305.paramTypes.push([]);
          func305.paramCounts = [1, 1];
          obj303.methods["at()put"] = func305;
          func305.definitionLine = 172;
          func305.definitionModule = "dialect";
          var func309 = function(argcv) {    // method find(1)butIfMissing(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_name = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for find (arg list 1) of find(1)butIfMissing(1)"));
            var var_bl = arguments[curarg];
            curarg++;
            if (argcv[1] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for butIfMissing (arg list 2) of find(1)butIfMissing(1)"));
            // Start argument checking
            curarg = 1;
            setLineNumber(176);    // compilenode identifier
            if (!Grace_isTrue(callmethod(var_String, "match",  [1], arguments[curarg])))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("argument 1 in find (arg list 1), which corresponds to parameter name, does not have " + 
                        callmethod(var_String, "asString", [0])._value + "."));
            curarg++;
            curarg++;
            // End argument checking
            setModuleName("dialect");
            setLineNumber(177);    // compilenode call
            onSelf = true;
            var call310 = callmethodChecked(this, "stack", [0]);
            var call311 = callmethodChecked(call310, "size", [0]);
            var var_i = call311;
            setLineNumber(178);    // compilenode block
            var block312 = new GraceBlock(this, 178, 0);
            block312.real = function() {
              var opresult315 = callmethodChecked(var_i, ">", [1], new GraceNum(0));
              return opresult315;
            };
            var block316 = new GraceBlock(this, 178, 0);
            block316.real = function() {
              setLineNumber(179);    // compilenode block
              var block317 = new GraceBlock(this, 179, 1);
              setLineNumber(1);    // compilenode identifier
              block317.real = function(var_value) {
                setLineNumber(180);    // compilenode identifier
                throw new ReturnException(var_value, returnTarget);
                return undefined;
              };
              setLineNumber(179);    // compilenode call
              onSelf = true;
              var call318 = callmethodChecked(this, "stack", [0]);
              var call319 = callmethodChecked(call318, "at", [1], var_i);
              var call320 = callmethodChecked(call319, "atKey()do", [1, 1], var_name, block317);
              setLineNumber(183);    // compilenode identifier
              var diff323 = callmethodChecked(var_i, "-", [1], new GraceNum(1));
              var_i = diff323;
              return GraceDone;
            };
            var call324 = callmethodChecked(var_prelude, "while()do", [1, 1], block312, block316);
            setLineNumber(186);    // compilenode identifier
            var call325 = callmethodChecked(var_bl, "apply", [0]);
            return call325;
          };
          func309.paramTypes = [];
          func309.paramTypes.push([type_String, "name"]);
          func309.paramTypes.push([]);
          func309.paramCounts = [1, 1];
          obj303.methods["find()butIfMissing"] = func309;
          func309.definitionLine = 176;
          func309.definitionModule = "dialect";
          setLineNumber(170);    // compilenode call
          var call327 = callmethodChecked(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call328 = callmethodChecked(call327, "aMutableMap", [0]);
          var array326 = new PrimitiveGraceList([call328]);
          obj303.data["stack"] = array326;
          var reader_dialect_stack329 = function() {
            return this.data["stack"];
          };
          reader_dialect_stack329.def = true;
          obj303.methods["stack"] = reader_dialect_stack329;
          superDepth = origSuperDepth;
        };
        obj_init_303.apply(obj303, []);
        return obj303;
      };
      func302.paramTypes = [];
      func302.paramTypes.push([type_String, "kind"]);
      func302.confidential = true;
      func302.paramCounts = [1];
      this.methods["stackOfKind"] = func302;
      func302.definitionLine = 169;
      func302.definitionModule = "dialect";
        var func330 = function(argcv) {    // method stackOfKind(1     )()object
          var curarg = 1;
          var var_kind = arguments[curarg];
          curarg++;
          var inheritingObject = arguments[curarg++];
          // Start argument processing
          curarg = 1;
          setLineNumber(169);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_String, "match",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in stackOfKind (arg list 1), which corresponds to parameter kind, does not have " + 
                      callmethod(var_String, "asString", [0])._value + "."));
          curarg++;
          // End argument processing
          setModuleName("dialect");
          var returnTarget = invocationCount;
          invocationCount++;
          var obj331 = Grace_allocObject(GraceObject, "stackOfKind");
          obj331.definitionModule = "dialect";
          obj331.definitionLine = 169;
          var inho331 = inheritingObject;
          while (inho331.superobj) inho331 = inho331.superobj;
          inho331.superobj = obj331;
          obj331.data = inheritingObject.data;
          if (inheritingObject.hasOwnProperty('_value'))
            obj331._value = inheritingObject._value;
          obj331.outer = this;
          var reader_dialect_outer332 = function() {
            return this.outer;
          };
          obj331.methods["outer"] = reader_dialect_outer332;
          var obj_init_331 = function() {
            var origSuperDepth = superDepth;
            superDepth = obj331;
            var func333 = function(argcv) {    // method at(1)put(1)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_name = arguments[curarg];
              curarg++;
              if (argcv[0] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for at (arg list 1) of at(1)put(1)"));
              var var_value = arguments[curarg];
              curarg++;
              if (argcv[1] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for put (arg list 2) of at(1)put(1)"));
              // Start argument checking
              curarg = 1;
              setLineNumber(172);    // compilenode identifier
              if (!Grace_isTrue(callmethod(var_String, "match",  [1], arguments[curarg])))
                  throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("argument 1 in at (arg list 1), which corresponds to parameter name, does not have " + 
                          callmethod(var_String, "asString", [0])._value + "."));
              curarg++;
              curarg++;
              // End argument checking
              setModuleName("dialect");
              setLineNumber(173);    // compilenode call
              onSelf = true;
              var call334 = callmethodChecked(this, "stack", [0]);
              var call335 = callmethodChecked(call334, "last", [0]);
              var call336 = callmethodChecked(call335, "at()put", [1, 1], var_name, var_value);
              if (!Grace_isTrue(callmethod(var_Done, "match", [1], call336)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("result of method at(1)put(1) does not have " + 
                          callmethod(var_Done, "asString", [0])._value + "."));
              return call336;
            };
            func333.paramTypes = [];
            func333.paramTypes.push([type_String, "name"]);
            func333.paramTypes.push([]);
            func333.paramCounts = [1, 1];
            obj331.methods["at()put"] = func333;
            func333.definitionLine = 172;
            func333.definitionModule = "dialect";
            var func337 = function(argcv) {    // method find(1)butIfMissing(1)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_name = arguments[curarg];
              curarg++;
              if (argcv[0] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for find (arg list 1) of find(1)butIfMissing(1)"));
              var var_bl = arguments[curarg];
              curarg++;
              if (argcv[1] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for butIfMissing (arg list 2) of find(1)butIfMissing(1)"));
              // Start argument checking
              curarg = 1;
              setLineNumber(176);    // compilenode identifier
              if (!Grace_isTrue(callmethod(var_String, "match",  [1], arguments[curarg])))
                  throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("argument 1 in find (arg list 1), which corresponds to parameter name, does not have " + 
                          callmethod(var_String, "asString", [0])._value + "."));
              curarg++;
              curarg++;
              // End argument checking
              setModuleName("dialect");
              setLineNumber(177);    // compilenode call
              onSelf = true;
              var call338 = callmethodChecked(this, "stack", [0]);
              var call339 = callmethodChecked(call338, "size", [0]);
              var var_i = call339;
              setLineNumber(178);    // compilenode block
              var block340 = new GraceBlock(this, 178, 0);
              block340.real = function() {
                var opresult343 = callmethodChecked(var_i, ">", [1], new GraceNum(0));
                return opresult343;
              };
              var block344 = new GraceBlock(this, 178, 0);
              block344.real = function() {
                setLineNumber(179);    // compilenode block
                var block345 = new GraceBlock(this, 179, 1);
                setLineNumber(1);    // compilenode identifier
                block345.real = function(var_value) {
                  setLineNumber(180);    // compilenode identifier
                  throw new ReturnException(var_value, returnTarget);
                  return undefined;
                };
                setLineNumber(179);    // compilenode call
                onSelf = true;
                var call346 = callmethodChecked(this, "stack", [0]);
                var call347 = callmethodChecked(call346, "at", [1], var_i);
                var call348 = callmethodChecked(call347, "atKey()do", [1, 1], var_name, block345);
                setLineNumber(183);    // compilenode identifier
                var diff351 = callmethodChecked(var_i, "-", [1], new GraceNum(1));
                var_i = diff351;
                return GraceDone;
              };
              var call352 = callmethodChecked(var_prelude, "while()do", [1, 1], block340, block344);
              setLineNumber(186);    // compilenode identifier
              var call353 = callmethodChecked(var_bl, "apply", [0]);
              return call353;
            };
            func337.paramTypes = [];
            func337.paramTypes.push([type_String, "name"]);
            func337.paramTypes.push([]);
            func337.paramCounts = [1, 1];
            obj331.methods["find()butIfMissing"] = func337;
            func337.definitionLine = 176;
            func337.definitionModule = "dialect";
            setLineNumber(170);    // compilenode call
            var call355 = callmethodChecked(superDepth, "outer", [0]);
            onOuter = true;
            onSelf = true;
            var call356 = callmethodChecked(call355, "aMutableMap", [0]);
            var array354 = new PrimitiveGraceList([call356]);
            obj331.data["stack"] = array354;
            var reader_dialect_stack357 = function() {
              return this.data["stack"];
            };
            reader_dialect_stack357.def = true;
            obj331.methods["stack"] = reader_dialect_stack357;
            superDepth = origSuperDepth;
          };
          obj_init_331.apply(inheritingObject, []);
          return obj331;
          };
          func330.paramTypes = [];
          func330.paramTypes.push([type_String, "kind"]);
          func330.confidential = true;
          this.methods["stackOfKind()object"] = func330;
        setLineNumber(219);    // compilenode method
        var func358 = function(argcv) {    // method checkTypes(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_node = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for checkTypes(1)"));
          setModuleName("dialect");
          setLineNumber(220);    // compilenode identifier
          var call359 = callmethodChecked(var_node, "accept", [1], var_astVisitor);
          return call359;
        };
        func358.paramCounts = [1];
        this.methods["checkTypes"] = func358;
        func358.definitionLine = 219;
        func358.definitionModule = "dialect";
        setLineNumber(223);    // compilenode method
        var func360 = function(argcv) {    // method typeOf(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_node = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for typeOf(1)"));
          setModuleName("dialect");
          setLineNumber(224);    // compilenode identifier
          onSelf = true;
          var call361 = callmethodChecked(this, "checkTypes", [1], var_node);
          setLineNumber(225);    // compilenode block
          var block362 = new GraceBlock(this, 225, 1);
          setLineNumber(1);    // compilenode identifier
          block362.real = function(var_value) {
            setLineNumber(225);    // compilenode identifier
            throw new ReturnException(var_value, returnTarget);
            return undefined;
          };
          var call363 = callmethodChecked(var_cache, "atKey()do", [1, 1], var_node, block362);
          setLineNumber(226);    // compilenode string
          var string364 = new GraceString("cannot type non-expression");
          var call365 = callmethodChecked(var_CheckerFailure, "raise()with", [1, 1], string364, var_node);
          return call365;
        };
        func360.paramCounts = [1];
        this.methods["typeOf"] = func360;
        func360.definitionLine = 223;
        func360.definitionModule = "dialect";
        setLineNumber(229);    // compilenode method
        var func366 = function(argcv) {    // method runRules(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_node = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for runRules(1)"));
          setModuleName("dialect");
          setLineNumber(232);    // compilenode block
          var block367 = new GraceBlock(this, 232, 1);
          setLineNumber(1);    // compilenode identifier
          block367.real = function(var_value) {
            setLineNumber(232);    // compilenode identifier
            throw new ReturnException(var_value, returnTarget);
            return undefined;
          };
          var call368 = callmethodChecked(var_cache, "atKey()do", [1, 1], var_node, block367);
          setLineNumber(233);    // compilenode identifier
          var call369 = callmethodChecked(var_node, "line", [0]);
          var_currentLine = call369;
          setLineNumber(235);    // compilenode call
          onSelf = true;
          var call370 = callmethodChecked(this, "FailedMatch", [0]);
          var call371 = callmethodChecked(call370, "new", [1], var_node);
          var var_result = call371;
          setLineNumber(236);    // compilenode block
          var block372 = new GraceBlock(this, 236, 1);
          setLineNumber(1);    // compilenode identifier
          block372.real = function(var_each) {
            setLineNumber(237);    // compilenode identifier
            var call373 = callmethodChecked(var_each, "match", [1], var_node);
            var var_matched = call373;
            var if374 = GraceDone;
            setLineNumber(238);    // compilenode identifier
            if (Grace_isTrue(var_matched)) {
              setLineNumber(239);    // compilenode identifier
              var call375 = callmethodChecked(var_matched, "result", [0]);
              var_result = call375;
              setLineNumber(240);    // compilenode identifier
              var call376 = callmethodChecked(var_cache, "at()put", [1, 1], var_node, var_result);
              if374 = call376;
            }
            return if374;
          };
          var call377 = callmethodChecked(var_prelude, "for()do", [1, 1], var_rules, block372);
          setLineNumber(243);    // compilenode identifier
          return var_result;
        };
        func366.paramCounts = [1];
        this.methods["runRules"] = func366;
        func366.definitionLine = 229;
        func366.definitionModule = "dialect";
        setLineNumber(250);    // compilenode method
        var func378 = function(argcv) {    // method check(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_nodes = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for check(1)"));
          setModuleName("dialect");
          setLineNumber(252);    // compilenode identifier
          var call379 = callmethodChecked(var_ast, "objectNode", [0]);
          var call380 = callmethodChecked(call379, "new", [2], var_nodes, GraceFalse);
          var call381 = callmethodChecked(call380, "accept", [1], var_astVisitor);
          if (!Grace_isTrue(callmethod(var_Done, "match", [1], call381)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method check(1) does not have " + 
                      callmethod(var_Done, "asString", [0])._value + "."));
          return call381;
        };
        func378.paramCounts = [1];
        this.methods["check"] = func378;
        func378.definitionLine = 250;
        func378.definitionModule = "dialect";
        setLineNumber(257);    // compilenode method
        var func382 = function(argcv) {    // method aPatternMatchingNode(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_kind = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for aPatternMatchingNode(1)"));
          // Start argument checking
          curarg = 1;
          if (!Grace_isTrue(callmethod(var_String, "match",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in aPatternMatchingNode (arg list 1), which corresponds to parameter kind, does not have " + 
                      callmethod(var_String, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("dialect");
          var obj383 = Grace_allocObject(null, "dialect.aPatternMatchingNode");
          obj383.definitionModule = "dialect";
          obj383.definitionLine = 257;
          obj383.outer = this;
          var reader_dialect_outer384 = function() {
            return this.outer;
          };
          obj383.methods["outer"] = reader_dialect_outer384;
          var obj_init_383 = function() {
            var origSuperDepth = superDepth;
            superDepth = obj383;
            var func385 = function(argcv) {    // method match(1)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_obj = arguments[curarg];
              curarg++;
              if (argcv[0] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for match(1)"));
              // Start argument checking
              curarg = 1;
              setLineNumber(260);    // compilenode identifier
              if (!Grace_isTrue(callmethod(var_Object, "match",  [1], arguments[curarg])))
                  throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("argument 1 in match (arg list 1), which corresponds to parameter obj, does not have " + 
                          callmethod(var_Object, "asString", [0])._value + "."));
              curarg++;
              // End argument checking
              setModuleName("dialect");
              setLineNumber(261);    // compilenode identifier
              var cases386 = [];
              setLineNumber(262);    // compilenode block
              var block387 = new GraceBlock(this, 262, 1);
              setLineNumber(0);    // compilenode string
              var string388 = new GraceString("node");
              var call389 = callmethodChecked(var_prelude, "VariablePattern", [0]);
              var call390 = callmethodChecked(call389, "new", [1], string388);
              var call391 = callmethodChecked(var_prelude, "AndPattern", [0]);
              var call392 = callmethodChecked(call391, "new", [2], call390, var_AstNode);
              block387.pattern = call392;
              setLineNumber(262);    // compilenode identifier
              block387.paramTypes = [var_AstNode];
              block387.real = function(var_node) {
                var if393 = GraceDone;
                setLineNumber(263);    // compilenode identifier
                var call394 = callmethodChecked(var_node, "kind", [0]);
                var opresult397 = callmethodChecked(var_kind, "==", [1], call394);
                if (Grace_isTrue(opresult397)) {
                  setLineNumber(264);    // compilenode array
                  var array398 = new PrimitiveGraceList([]);
                  var call399 = callmethodChecked(superDepth, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call400 = callmethodChecked(call399, "SuccessfulMatch", [0]);
                  var call401 = callmethodChecked(call400, "new", [2], var_node, array398);
                  if393 = call401;
                } else {
                  setLineNumber(266);    // compilenode call
                  var call402 = callmethodChecked(superDepth, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call403 = callmethodChecked(call402, "FailedMatch", [0]);
                  var call404 = callmethodChecked(call403, "new", [1], var_node);
                  if393 = call404;
                }
                return if393;
              };
              cases386.push(block387);
              setLineNumber(268);    // compilenode block
              var block405 = new GraceBlock(this, 268, 1);
              setLineNumber(1);    // compilenode identifier
              block405.real = function(var___95____95__2) {
                setLineNumber(268);    // compilenode call
                var call406 = callmethodChecked(superDepth, "outer", [0]);
                onOuter = true;
                onSelf = true;
                var call407 = callmethodChecked(call406, "FailedMatch", [0]);
                var call408 = callmethodChecked(call407, "new", [1], var_obj);
                return call408;
              };
              cases386.push(block405);
              setLineNumber(261);    // compilematchcase
              var matchres386 = matchCase(var_obj,cases386,false);
              setModuleName("dialect");
              return matchres386;
            };
            func385.paramTypes = [];
            func385.paramTypes.push([type_Object, "obj"]);
            func385.paramCounts = [1];
            obj383.methods["match"] = func385;
            func385.definitionLine = 260;
            func385.definitionModule = "dialect";
            setLineNumber(258);    // compilenode call
            var call409 = callmethodChecked(superDepth, "outer", [0]);
            onOuter = true;
            onSelf = true;
            var call410 = callmethodChecked(call409, "BasicPattern", [0]);
            var call411 = callmethodChecked(call410, "new()object", [0, 1], this);
            obj383.superobj = call411;
            if (call411.data) obj383.data = call411.data;
            if (call411.hasOwnProperty('_value'))
                obj383._value = call411._value;
            superDepth = origSuperDepth;
          };
          obj_init_383.apply(obj383, []);
          setLineNumber(257);    // compilenode call
          onSelf = true;
          var call412 = callmethodChecked(this, "Pattern", [0]);
          if (!Grace_isTrue(callmethod(call412, "match", [1], obj383)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method aPatternMatchingNode(1) does not have " + 
                      callmethod(call412, "asString", [0])._value + "."));
          return obj383;
        };
        func382.paramTypes = [];
        func382.paramTypes.push([type_String, "kind"]);
        func382.paramCounts = [1];
        this.methods["aPatternMatchingNode"] = func382;
        func382.definitionLine = 257;
        func382.definitionModule = "dialect";
          var func413 = function(argcv) {    // method aPatternMatchingNode(1     )()object
            var curarg = 1;
            var var_kind = arguments[curarg];
            curarg++;
            var inheritingObject = arguments[curarg++];
            // Start argument processing
            curarg = 1;
            if (!Grace_isTrue(callmethod(var_String, "match",  [1], arguments[curarg])))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("argument 1 in aPatternMatchingNode (arg list 1), which corresponds to parameter kind, does not have " + 
                        callmethod(var_String, "asString", [0])._value + "."));
            curarg++;
            // End argument processing
            setModuleName("dialect");
            var returnTarget = invocationCount;
            invocationCount++;
            var obj414 = Grace_allocObject(null, "aPatternMatchingNode");
            obj414.definitionModule = "dialect";
            obj414.definitionLine = 257;
            var inho414 = inheritingObject;
            while (inho414.superobj) inho414 = inho414.superobj;
            inho414.superobj = obj414;
            obj414.data = inheritingObject.data;
            if (inheritingObject.hasOwnProperty('_value'))
              obj414._value = inheritingObject._value;
            obj414.outer = this;
            var reader_dialect_outer415 = function() {
              return this.outer;
            };
            obj414.methods["outer"] = reader_dialect_outer415;
            var obj_init_414 = function() {
              var origSuperDepth = superDepth;
              superDepth = obj414;
              var func416 = function(argcv) {    // method match(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_obj = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for match(1)"));
                // Start argument checking
                curarg = 1;
                setLineNumber(260);    // compilenode identifier
                if (!Grace_isTrue(callmethod(var_Object, "match",  [1], arguments[curarg])))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("argument 1 in match (arg list 1), which corresponds to parameter obj, does not have " + 
                            callmethod(var_Object, "asString", [0])._value + "."));
                curarg++;
                // End argument checking
                setModuleName("dialect");
                setLineNumber(261);    // compilenode identifier
                var cases417 = [];
                setLineNumber(262);    // compilenode block
                var block418 = new GraceBlock(this, 262, 1);
                setLineNumber(0);    // compilenode string
                var string419 = new GraceString("node");
                var call420 = callmethodChecked(var_prelude, "VariablePattern", [0]);
                var call421 = callmethodChecked(call420, "new", [1], string419);
                var call422 = callmethodChecked(var_prelude, "AndPattern", [0]);
                var call423 = callmethodChecked(call422, "new", [2], call421, var_AstNode);
                block418.pattern = call423;
                setLineNumber(262);    // compilenode identifier
                block418.paramTypes = [var_AstNode];
                block418.real = function(var_node) {
                  var if424 = GraceDone;
                  setLineNumber(263);    // compilenode identifier
                  var call425 = callmethodChecked(var_node, "kind", [0]);
                  var opresult428 = callmethodChecked(var_kind, "==", [1], call425);
                  if (Grace_isTrue(opresult428)) {
                    setLineNumber(264);    // compilenode array
                    var array429 = new PrimitiveGraceList([]);
                    var call430 = callmethodChecked(superDepth, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call431 = callmethodChecked(call430, "SuccessfulMatch", [0]);
                    var call432 = callmethodChecked(call431, "new", [2], var_node, array429);
                    if424 = call432;
                  } else {
                    setLineNumber(266);    // compilenode call
                    var call433 = callmethodChecked(superDepth, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call434 = callmethodChecked(call433, "FailedMatch", [0]);
                    var call435 = callmethodChecked(call434, "new", [1], var_node);
                    if424 = call435;
                  }
                  return if424;
                };
                cases417.push(block418);
                setLineNumber(268);    // compilenode block
                var block436 = new GraceBlock(this, 268, 1);
                setLineNumber(1);    // compilenode identifier
                block436.real = function(var___95____95__2) {
                  setLineNumber(268);    // compilenode call
                  var call437 = callmethodChecked(superDepth, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call438 = callmethodChecked(call437, "FailedMatch", [0]);
                  var call439 = callmethodChecked(call438, "new", [1], var_obj);
                  return call439;
                };
                cases417.push(block436);
                setLineNumber(261);    // compilematchcase
                var matchres417 = matchCase(var_obj,cases417,false);
                setModuleName("dialect");
                return matchres417;
              };
              func416.paramTypes = [];
              func416.paramTypes.push([type_Object, "obj"]);
              func416.paramCounts = [1];
              obj414.methods["match"] = func416;
              func416.definitionLine = 260;
              func416.definitionModule = "dialect";
              setLineNumber(258);    // compilenode call
              var call440 = callmethodChecked(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call441 = callmethodChecked(call440, "BasicPattern", [0]);
              var call442 = callmethodChecked(call441, "new()object", [0, 1], this);
              obj414.superobj = call442;
              if (call442.data) obj414.data = call442.data;
              if (call442.hasOwnProperty('_value'))
                  obj414._value = call442._value;
              superDepth = origSuperDepth;
            };
            obj_init_414.apply(inheritingObject, []);
            return obj414;
            };
            func413.paramTypes = [];
            func413.paramTypes.push([type_String, "kind"]);
            this.methods["aPatternMatchingNode()object"] = func413;
          setLineNumber(303);    // compilenode method
          var func443 = function(argcv) {    // method RequestOf(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_methodName = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for RequestOf(1)"));
            // Start argument checking
            curarg = 1;
            if (!Grace_isTrue(callmethod(var_String, "match",  [1], arguments[curarg])))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("argument 1 in RequestOf (arg list 1), which corresponds to parameter methodName, does not have " + 
                        callmethod(var_String, "asString", [0])._value + "."));
            curarg++;
            // End argument checking
            setModuleName("dialect");
            var obj444 = Grace_allocObject(null, "dialect.RequestOf");
            obj444.definitionModule = "dialect";
            obj444.definitionLine = 303;
            obj444.outer = this;
            var reader_dialect_outer445 = function() {
              return this.outer;
            };
            obj444.methods["outer"] = reader_dialect_outer445;
            var obj_init_444 = function() {
              var origSuperDepth = superDepth;
              superDepth = obj444;
              var func446 = function(argcv) {    // method match(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_obj = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for match(1)"));
                // Start argument checking
                curarg = 1;
                setLineNumber(307);    // compilenode identifier
                if (!Grace_isTrue(callmethod(var_Object, "match",  [1], arguments[curarg])))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("argument 1 in match (arg list 1), which corresponds to parameter obj, does not have " + 
                            callmethod(var_Object, "asString", [0])._value + "."));
                curarg++;
                // End argument checking
                setModuleName("dialect");
                setLineNumber(308);    // compilenode identifier
                var cases447 = [];
                setLineNumber(309);    // compilenode block
                var block448 = new GraceBlock(this, 309, 1);
                setLineNumber(0);    // compilenode string
                var string449 = new GraceString("node");
                var call450 = callmethodChecked(var_prelude, "VariablePattern", [0]);
                var call451 = callmethodChecked(call450, "new", [1], string449);
                var call452 = callmethodChecked(var_prelude, "AndPattern", [0]);
                var call453 = callmethodChecked(call452, "new", [2], call451, var_AstNode);
                block448.pattern = call453;
                setLineNumber(309);    // compilenode identifier
                block448.paramTypes = [var_AstNode];
                block448.real = function(var_node) {
                  var if454 = GraceDone;
                  setLineNumber(310);    // compilenode block
                  var block455 = new GraceBlock(this, 310, 0);
                  block455.real = function() {
                    setLineNumber(311);    // compilenode identifier
                    var call457 = callmethodChecked(var_node, "value", [0]);
                    var call458 = callmethodChecked(call457, "value", [0]);
                    var opresult460 = callmethodChecked(call458, "==", [1], var_methodName);
                    return opresult460;
                  };
                  setLineNumber(310);    // compilenode string
                  var string462 = new GraceString("call");
                  var call464 = callmethodChecked(var_node, "kind", [0]);
                  var opresult466 = callmethodChecked(call464, "==", [1], string462);
                  var opresult468 = callmethodChecked(opresult466, "&&", [1], block455);
                  if (Grace_isTrue(opresult468)) {
                    setLineNumber(313);    // compilenode identifier
                    onSelf = true;
                    var call469 = callmethodChecked(this, "makeBindings", [1], var_node);
                    var call470 = callmethodChecked(superDepth, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call471 = callmethodChecked(call470, "SuccessfulMatch", [0]);
                    var call472 = callmethodChecked(call471, "new", [2], var_node, call469);
                    if454 = call472;
                  } else {
                    setLineNumber(315);    // compilenode call
                    var call473 = callmethodChecked(superDepth, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call474 = callmethodChecked(call473, "FailedMatch", [0]);
                    var call475 = callmethodChecked(call474, "new", [1], var_node);
                    if454 = call475;
                  }
                  return if454;
                };
                cases447.push(block448);
                setLineNumber(317);    // compilenode block
                var block476 = new GraceBlock(this, 317, 1);
                setLineNumber(1);    // compilenode identifier
                block476.real = function(var___95____95__3) {
                  setLineNumber(317);    // compilenode call
                  var call477 = callmethodChecked(superDepth, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call478 = callmethodChecked(call477, "FailedMatch", [0]);
                  var call479 = callmethodChecked(call478, "new", [1], var_obj);
                  return call479;
                };
                cases447.push(block476);
                setLineNumber(308);    // compilematchcase
                var matchres447 = matchCase(var_obj,cases447,false);
                setModuleName("dialect");
                return matchres447;
              };
              func446.paramTypes = [];
              func446.paramTypes.push([type_Object, "obj"]);
              func446.paramCounts = [1];
              obj444.methods["match"] = func446;
              func446.definitionLine = 307;
              func446.definitionModule = "dialect";
              var func480 = function(argcv) {    // method makeBindings(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for makeBindings(1)"));
                setModuleName("dialect");
                setLineNumber(321);    // compilenode array
                var array481 = new PrimitiveGraceList([]);
                return array481;
              };
              func480.paramCounts = [1];
              obj444.methods["makeBindings"] = func480;
              func480.definitionLine = 321;
              func480.definitionModule = "dialect";
              setLineNumber(305);    // compilenode call
              var call482 = callmethodChecked(var_prelude, "BasicPattern", [0]);
              var call483 = callmethodChecked(call482, "new()object", [0, 1], this);
              obj444.superobj = call483;
              if (call483.data) obj444.data = call483.data;
              if (call483.hasOwnProperty('_value'))
                  obj444._value = call483._value;
              superDepth = origSuperDepth;
            };
            obj_init_444.apply(obj444, []);
            setLineNumber(303);    // compilenode call
            onSelf = true;
            var call484 = callmethodChecked(this, "Pattern", [0]);
            if (!Grace_isTrue(callmethod(call484, "match", [1], obj444)))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("result of method RequestOf(1) does not have " + 
                        callmethod(call484, "asString", [0])._value + "."));
            return obj444;
          };
          func443.paramTypes = [];
          func443.paramTypes.push([type_String, "methodName"]);
          func443.paramCounts = [1];
          this.methods["RequestOf"] = func443;
          func443.definitionLine = 303;
          func443.definitionModule = "dialect";
            var func485 = function(argcv) {    // method RequestOf(1     )()object
              var curarg = 1;
              var var_methodName = arguments[curarg];
              curarg++;
              var inheritingObject = arguments[curarg++];
              // Start argument processing
              curarg = 1;
              if (!Grace_isTrue(callmethod(var_String, "match",  [1], arguments[curarg])))
                  throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("argument 1 in RequestOf (arg list 1), which corresponds to parameter methodName, does not have " + 
                          callmethod(var_String, "asString", [0])._value + "."));
              curarg++;
              // End argument processing
              setModuleName("dialect");
              var returnTarget = invocationCount;
              invocationCount++;
              var obj486 = Grace_allocObject(null, "RequestOf");
              obj486.definitionModule = "dialect";
              obj486.definitionLine = 303;
              var inho486 = inheritingObject;
              while (inho486.superobj) inho486 = inho486.superobj;
              inho486.superobj = obj486;
              obj486.data = inheritingObject.data;
              if (inheritingObject.hasOwnProperty('_value'))
                obj486._value = inheritingObject._value;
              obj486.outer = this;
              var reader_dialect_outer487 = function() {
                return this.outer;
              };
              obj486.methods["outer"] = reader_dialect_outer487;
              var obj_init_486 = function() {
                var origSuperDepth = superDepth;
                superDepth = obj486;
                var func488 = function(argcv) {    // method match(1)
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  var var_obj = arguments[curarg];
                  curarg++;
                  if (argcv[0] !== 1)
                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for match(1)"));
                  // Start argument checking
                  curarg = 1;
                  setLineNumber(307);    // compilenode identifier
                  if (!Grace_isTrue(callmethod(var_Object, "match",  [1], arguments[curarg])))
                      throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("argument 1 in match (arg list 1), which corresponds to parameter obj, does not have " + 
                              callmethod(var_Object, "asString", [0])._value + "."));
                  curarg++;
                  // End argument checking
                  setModuleName("dialect");
                  setLineNumber(308);    // compilenode identifier
                  var cases489 = [];
                  setLineNumber(309);    // compilenode block
                  var block490 = new GraceBlock(this, 309, 1);
                  setLineNumber(0);    // compilenode string
                  var string491 = new GraceString("node");
                  var call492 = callmethodChecked(var_prelude, "VariablePattern", [0]);
                  var call493 = callmethodChecked(call492, "new", [1], string491);
                  var call494 = callmethodChecked(var_prelude, "AndPattern", [0]);
                  var call495 = callmethodChecked(call494, "new", [2], call493, var_AstNode);
                  block490.pattern = call495;
                  setLineNumber(309);    // compilenode identifier
                  block490.paramTypes = [var_AstNode];
                  block490.real = function(var_node) {
                    var if496 = GraceDone;
                    setLineNumber(310);    // compilenode block
                    var block497 = new GraceBlock(this, 310, 0);
                    block497.real = function() {
                      setLineNumber(311);    // compilenode identifier
                      var call499 = callmethodChecked(var_node, "value", [0]);
                      var call500 = callmethodChecked(call499, "value", [0]);
                      var opresult502 = callmethodChecked(call500, "==", [1], var_methodName);
                      return opresult502;
                    };
                    setLineNumber(310);    // compilenode string
                    var string504 = new GraceString("call");
                    var call506 = callmethodChecked(var_node, "kind", [0]);
                    var opresult508 = callmethodChecked(call506, "==", [1], string504);
                    var opresult510 = callmethodChecked(opresult508, "&&", [1], block497);
                    if (Grace_isTrue(opresult510)) {
                      setLineNumber(313);    // compilenode identifier
                      onSelf = true;
                      var call511 = callmethodChecked(this, "makeBindings", [1], var_node);
                      var call512 = callmethodChecked(superDepth, "outer", [0]);
                      onOuter = true;
                      onSelf = true;
                      var call513 = callmethodChecked(call512, "SuccessfulMatch", [0]);
                      var call514 = callmethodChecked(call513, "new", [2], var_node, call511);
                      if496 = call514;
                    } else {
                      setLineNumber(315);    // compilenode call
                      var call515 = callmethodChecked(superDepth, "outer", [0]);
                      onOuter = true;
                      onSelf = true;
                      var call516 = callmethodChecked(call515, "FailedMatch", [0]);
                      var call517 = callmethodChecked(call516, "new", [1], var_node);
                      if496 = call517;
                    }
                    return if496;
                  };
                  cases489.push(block490);
                  setLineNumber(317);    // compilenode block
                  var block518 = new GraceBlock(this, 317, 1);
                  setLineNumber(1);    // compilenode identifier
                  block518.real = function(var___95____95__3) {
                    setLineNumber(317);    // compilenode call
                    var call519 = callmethodChecked(superDepth, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call520 = callmethodChecked(call519, "FailedMatch", [0]);
                    var call521 = callmethodChecked(call520, "new", [1], var_obj);
                    return call521;
                  };
                  cases489.push(block518);
                  setLineNumber(308);    // compilematchcase
                  var matchres489 = matchCase(var_obj,cases489,false);
                  setModuleName("dialect");
                  return matchres489;
                };
                func488.paramTypes = [];
                func488.paramTypes.push([type_Object, "obj"]);
                func488.paramCounts = [1];
                obj486.methods["match"] = func488;
                func488.definitionLine = 307;
                func488.definitionModule = "dialect";
                var func522 = function(argcv) {    // method makeBindings(1)
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  var var_node = arguments[curarg];
                  curarg++;
                  if (argcv[0] !== 1)
                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for makeBindings(1)"));
                  setModuleName("dialect");
                  setLineNumber(321);    // compilenode array
                  var array523 = new PrimitiveGraceList([]);
                  return array523;
                };
                func522.paramCounts = [1];
                obj486.methods["makeBindings"] = func522;
                func522.definitionLine = 321;
                func522.definitionModule = "dialect";
                setLineNumber(305);    // compilenode call
                var call524 = callmethodChecked(var_prelude, "BasicPattern", [0]);
                var call525 = callmethodChecked(call524, "new()object", [0, 1], this);
                obj486.superobj = call525;
                if (call525.data) obj486.data = call525.data;
                if (call525.hasOwnProperty('_value'))
                    obj486._value = call525._value;
                superDepth = origSuperDepth;
              };
              obj_init_486.apply(inheritingObject, []);
              return obj486;
              };
              func485.paramTypes = [];
              func485.paramTypes.push([type_String, "methodName"]);
              this.methods["RequestOf()object"] = func485;
            setLineNumber(327);    // compilenode method
            var func526 = function(argcv) {    // method whileCond(1)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_node = arguments[curarg];
              curarg++;
              if (argcv[0] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for whileCond(1)"));
              setModuleName("dialect");
              setLineNumber(330);    // compilenode identifier
              var call527 = callmethodChecked(var_node, "with", [0]);
              var var_sig = call527;
              setLineNumber(331);    // compilenode identifier
              var call528 = callmethodChecked(var_sig, "first", [0]);
              var call529 = callmethodChecked(call528, "args", [0]);
              var call530 = callmethodChecked(call529, "first", [0]);
              return call530;
            };
            func526.paramCounts = [1];
            this.methods["whileCond"] = func526;
            func526.definitionLine = 327;
            func526.definitionModule = "dialect";
            setLineNumber(334);    // compilenode method
            var func531 = function(argcv) {    // method whileBody(1)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_node = arguments[curarg];
              curarg++;
              if (argcv[0] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for whileBody(1)"));
              setModuleName("dialect");
              setLineNumber(337);    // compilenode identifier
              var call532 = callmethodChecked(var_node, "with", [0]);
              var var_sig = call532;
              setLineNumber(338);    // compilenode identifier
              var call533 = callmethodChecked(var_sig, "second", [0]);
              var call534 = callmethodChecked(call533, "args", [0]);
              var call535 = callmethodChecked(call534, "first", [0]);
              return call535;
            };
            func531.paramCounts = [1];
            this.methods["whileBody"] = func531;
            func531.definitionLine = 334;
            func531.definitionModule = "dialect";
            setLineNumber(341);    // compilenode method
            var func536 = function(argcv) {    // method forCollection(1)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_node = arguments[curarg];
              curarg++;
              if (argcv[0] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for forCollection(1)"));
              setModuleName("dialect");
              setLineNumber(344);    // compilenode identifier
              var call537 = callmethodChecked(var_node, "with", [0]);
              var var_sig = call537;
              setLineNumber(345);    // compilenode identifier
              var call538 = callmethodChecked(var_sig, "first", [0]);
              var call539 = callmethodChecked(call538, "args", [0]);
              var call540 = callmethodChecked(call539, "first", [0]);
              return call540;
            };
            func536.paramCounts = [1];
            this.methods["forCollection"] = func536;
            func536.definitionLine = 341;
            func536.definitionModule = "dialect";
            setLineNumber(348);    // compilenode method
            var func541 = function(argcv) {    // method forBody(1)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_node = arguments[curarg];
              curarg++;
              if (argcv[0] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for forBody(1)"));
              setModuleName("dialect");
              setLineNumber(351);    // compilenode identifier
              var call542 = callmethodChecked(var_node, "with", [0]);
              var var_sig = call542;
              setLineNumber(352);    // compilenode identifier
              var call543 = callmethodChecked(var_sig, "second", [0]);
              var call544 = callmethodChecked(call543, "args", [0]);
              var call545 = callmethodChecked(call544, "first", [0]);
              return call545;
            };
            func541.paramCounts = [1];
            this.methods["forBody"] = func541;
            func541.definitionLine = 348;
            func541.definitionModule = "dialect";
            setLineNumber(9);    // compilenode string
            var string546 = new GraceString("CheckerFailure");
            var call547 = callmethodChecked(var_prelude, "Exception", [0]);
            var call548 = callmethodChecked(call547, "refine", [1], string546);
            var var_CheckerFailure = call548;
            var func549 = function(argcv) {    // method CheckerFailure
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for CheckerFailure"));
              setModuleName("dialect");
              // CheckerFailure is a simple accessor - elide try ... catch
              return var_CheckerFailure;
            };
            func549.paramCounts = [0];
            this.methods["CheckerFailure"] = func549;
            func549.definitionLine = 9;
            func549.definitionModule = "dialect";
            this.methods["CheckerFailure"].debug = "def";
            setLineNumber(111);    // compilenode array
            var array550 = new PrimitiveGraceList([]);
            var var_rules = array550;
            setLineNumber(9);    // compilenode method
            var func551 = function(argcv) {    // method rules
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for rules"));
              setModuleName("dialect");
              // rules is a simple accessor - elide try ... catch
              setLineNumber(111);    // compilenode identifier
              return var_rules;
            };
            func551.paramCounts = [0];
            this.methods["rules"] = func551;
            func551.definitionLine = 9;
            func551.definitionModule = "dialect";
            this.methods["rules"].debug = "def";
            setLineNumber(114);    // compilenode call
            onSelf = true;
            var call552 = callmethodChecked(this, "aMutableMap", [0]);
            var var_cache = call552;
            var func553 = function(argcv) {    // method cache
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for cache"));
              setModuleName("dialect");
              // cache is a simple accessor - elide try ... catch
              return var_cache;
            };
            func553.paramCounts = [0];
            this.methods["cache"] = func553;
            func553.definitionLine = 114;
            func553.definitionModule = "dialect";
            this.methods["cache"].debug = "def";
            setLineNumber(124);    // compilenode num
            var var_currentLine = new GraceNum(0);
            setLineNumber(114);    // compilenode method
            var func554 = function(argcv) {    // method currentLine
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for currentLine"));
              setModuleName("dialect");
              // currentLine is a simple accessor - elide try ... catch
              setLineNumber(124);    // compilenode identifier
              return var_currentLine;
            };
            func554.paramCounts = [0];
            this.methods["currentLine"] = func554;
            func554.definitionLine = 114;
            func554.definitionModule = "dialect";
            setLineNumber(114);    // compilenode method
            var func555 = function(argcv) {    // method currentLine:=(1)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var___95__var__95__assign__95__tmp = arguments[curarg];
              curarg++;
              if (argcv[0] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for currentLine:=(1)"));
              setModuleName("dialect");
              var_currentLine = var___95__var__95__assign__95__tmp;
              return GraceDone;
            };
            func555.paramCounts = [1];
            this.methods["currentLine:="] = func555;
            func555.definitionLine = 114;
            func555.definitionModule = "dialect";
            this.methods["currentLine"].debug = "var";
            setLineNumber(191);    // compilenode object
            var obj556 = Grace_allocObject(GraceObject, "scope");
            obj556.definitionModule = "dialect";
            obj556.definitionLine = 191;
            obj556.outer = this;
            var reader_dialect_outer557 = function() {
              return this.outer;
            };
            obj556.methods["outer"] = reader_dialect_outer557;
            var obj_init_556 = function() {
              var origSuperDepth = superDepth;
              superDepth = obj556;
              var func558 = function(argcv) {    // method size
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                if (argcv[0] !== 0)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for size"));
                setModuleName("dialect");
                setLineNumber(197);    // compilenode call
                onSelf = true;
                var call559 = callmethodChecked(this, "variables", [0]);
                var call560 = callmethodChecked(call559, "stack", [0]);
                var call561 = callmethodChecked(call560, "size", [0]);
                if (!Grace_isTrue(callmethod(var_Number, "match", [1], call561)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method size does not have " + 
                            callmethod(var_Number, "asString", [0])._value + "."));
                return call561;
              };
              func558.paramCounts = [0];
              obj556.methods["size"] = func558;
              func558.definitionLine = 196;
              func558.definitionModule = "dialect";
              var func562 = function(argcv) {    // method enter(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_bl = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for enter(1)"));
                setModuleName("dialect");
                setLineNumber(201);    // compilenode call
                var call563 = callmethodChecked(superDepth, "outer", [0]);
                onOuter = true;
                onSelf = true;
                var call564 = callmethodChecked(call563, "aMutableMap", [0]);
                onSelf = true;
                var call565 = callmethodChecked(this, "variables", [0]);
                var call566 = callmethodChecked(call565, "stack", [0]);
                var call567 = callmethodChecked(call566, "push", [1], call564);
                setLineNumber(202);    // compilenode call
                var call568 = callmethodChecked(superDepth, "outer", [0]);
                onOuter = true;
                onSelf = true;
                var call569 = callmethodChecked(call568, "aMutableMap", [0]);
                onSelf = true;
                var call570 = callmethodChecked(this, "methods", [0]);
                var call571 = callmethodChecked(call570, "stack", [0]);
                var call572 = callmethodChecked(call571, "push", [1], call569);
                setLineNumber(203);    // compilenode call
                var call573 = callmethodChecked(superDepth, "outer", [0]);
                onOuter = true;
                onSelf = true;
                var call574 = callmethodChecked(call573, "aMutableMap", [0]);
                onSelf = true;
                var call575 = callmethodChecked(this, "types", [0]);
                var call576 = callmethodChecked(call575, "stack", [0]);
                var call577 = callmethodChecked(call576, "push", [1], call574);
                setLineNumber(205);    // compilenode identifier
                var call578 = callmethodChecked(var_bl, "apply", [0]);
                var var_result = call578;
                setLineNumber(207);    // compilenode call
                onSelf = true;
                var call579 = callmethodChecked(this, "variables", [0]);
                var call580 = callmethodChecked(call579, "stack", [0]);
                var call581 = callmethodChecked(call580, "pop", [0]);
                setLineNumber(208);    // compilenode call
                onSelf = true;
                var call582 = callmethodChecked(this, "methods", [0]);
                var call583 = callmethodChecked(call582, "stack", [0]);
                var call584 = callmethodChecked(call583, "pop", [0]);
                setLineNumber(209);    // compilenode call
                onSelf = true;
                var call585 = callmethodChecked(this, "types", [0]);
                var call586 = callmethodChecked(call585, "stack", [0]);
                var call587 = callmethodChecked(call586, "pop", [0]);
                setLineNumber(211);    // compilenode identifier
                return var_result;
              };
              func562.paramCounts = [1];
              obj556.methods["enter"] = func562;
              func562.definitionLine = 200;
              func562.definitionModule = "dialect";
              var func588 = function(argcv) {    // method asString
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                if (argcv[0] !== 0)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                setModuleName("dialect");
                setLineNumber(215);    // compilenode string
                var string589 = new GraceString(">");
                onSelf = true;
                var call591 = callmethodChecked(this, "size", [0]);
                var string593 = new GraceString("scope<");
                var opresult595 = callmethodChecked(string593, "++", [1], call591);
                var opresult597 = callmethodChecked(opresult595, "++", [1], string589);
                if (!Grace_isTrue(callmethod(var_String, "match", [1], opresult597)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method asString does not have " + 
                            callmethod(var_String, "asString", [0])._value + "."));
                return opresult597;
              };
              func588.paramCounts = [0];
              obj556.methods["asString"] = func588;
              func588.definitionLine = 214;
              func588.definitionModule = "dialect";
              setLineNumber(192);    // compilenode string
              var string598 = new GraceString("variable");
              var call599 = callmethodChecked(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call600 = callmethodChecked(call599, "stackOfKind", [1], string598);
              obj556.data["variables"] = call600;
              var reader_dialect_variables601 = function() {
                return this.data["variables"];
              };
              reader_dialect_variables601.def = true;
              obj556.methods["variables"] = reader_dialect_variables601;
              setLineNumber(193);    // compilenode string
              var string602 = new GraceString("method");
              var call603 = callmethodChecked(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call604 = callmethodChecked(call603, "stackOfKind", [1], string602);
              obj556.data["methods"] = call604;
              var reader_dialect_methods605 = function() {
                return this.data["methods"];
              };
              reader_dialect_methods605.def = true;
              obj556.methods["methods"] = reader_dialect_methods605;
              setLineNumber(194);    // compilenode string
              var string606 = new GraceString("type");
              var call607 = callmethodChecked(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call608 = callmethodChecked(call607, "stackOfKind", [1], string606);
              obj556.data["types"] = call608;
              var reader_dialect_types609 = function() {
                return this.data["types"];
              };
              reader_dialect_types609.def = true;
              obj556.methods["types"] = reader_dialect_types609;
              superDepth = origSuperDepth;
            };
            obj_init_556.apply(obj556, []);
            var var_scope = obj556;
            var func610 = function(argcv) {    // method scope
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for scope"));
              setModuleName("dialect");
              // scope is a simple accessor - elide try ... catch
              setLineNumber(191);    // compilenode identifier
              return var_scope;
            };
            func610.paramCounts = [0];
            this.methods["scope"] = func610;
            func610.definitionLine = 194;
            func610.definitionModule = "dialect";
            this.methods["scope"].debug = "def";
            setLineNumber(255);    // compilenode typedec
            // Type decl AstNode
            //   Type literal 
            var type612 = new GraceType("AstNode");
            type612.typeMethods.push("kind");
            var var_AstNode = type612;
            setLineNumber(194);    // compilenode method
            var func613 = function(argcv) {    // method AstNode
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for AstNode"));
              setModuleName("dialect");
              // AstNode is a simple accessor - elide try ... catch
              setLineNumber(255);    // compilenode identifier
              return var_AstNode;
            };
            func613.paramCounts = [0];
            this.methods["AstNode"] = func613;
            func613.definitionLine = 194;
            func613.definitionModule = "dialect";
            setLineNumber(272);    // compilenode string
            var string614 = new GraceString("if");
            onSelf = true;
            var call615 = callmethodChecked(this, "aPatternMatchingNode", [1], string614);
            var var_If = call615;
            setLineNumber(194);    // compilenode method
            var func616 = function(argcv) {    // method If
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for If"));
              setModuleName("dialect");
              // If is a simple accessor - elide try ... catch
              setLineNumber(272);    // compilenode identifier
              return var_If;
            };
            func616.paramCounts = [0];
            this.methods["If"] = func616;
            func616.definitionLine = 194;
            func616.definitionModule = "dialect";
            this.methods["If"].debug = "def";
            setLineNumber(273);    // compilenode string
            var string617 = new GraceString("block");
            onSelf = true;
            var call618 = callmethodChecked(this, "aPatternMatchingNode", [1], string617);
            var var_BlockLiteral = call618;
            setLineNumber(194);    // compilenode method
            var func619 = function(argcv) {    // method BlockLiteral
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for BlockLiteral"));
              setModuleName("dialect");
              // BlockLiteral is a simple accessor - elide try ... catch
              setLineNumber(273);    // compilenode identifier
              return var_BlockLiteral;
            };
            func619.paramCounts = [0];
            this.methods["BlockLiteral"] = func619;
            func619.definitionLine = 194;
            func619.definitionModule = "dialect";
            this.methods["BlockLiteral"].debug = "def";
            setLineNumber(274);    // compilenode string
            var string620 = new GraceString("matchcase");
            onSelf = true;
            var call621 = callmethodChecked(this, "aPatternMatchingNode", [1], string620);
            var var_MatchCase = call621;
            setLineNumber(194);    // compilenode method
            var func622 = function(argcv) {    // method MatchCase
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for MatchCase"));
              setModuleName("dialect");
              // MatchCase is a simple accessor - elide try ... catch
              setLineNumber(274);    // compilenode identifier
              return var_MatchCase;
            };
            func622.paramCounts = [0];
            this.methods["MatchCase"] = func622;
            func622.definitionLine = 194;
            func622.definitionModule = "dialect";
            this.methods["MatchCase"].debug = "def";
            setLineNumber(275);    // compilenode string
            var string623 = new GraceString("trycatch");
            onSelf = true;
            var call624 = callmethodChecked(this, "aPatternMatchingNode", [1], string623);
            var var_TryCatch = call624;
            setLineNumber(194);    // compilenode method
            var func625 = function(argcv) {    // method TryCatch
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for TryCatch"));
              setModuleName("dialect");
              // TryCatch is a simple accessor - elide try ... catch
              setLineNumber(275);    // compilenode identifier
              return var_TryCatch;
            };
            func625.paramCounts = [0];
            this.methods["TryCatch"] = func625;
            func625.definitionLine = 194;
            func625.definitionModule = "dialect";
            this.methods["TryCatch"].debug = "def";
            setLineNumber(276);    // compilenode string
            var string626 = new GraceString("methodtype");
            onSelf = true;
            var call627 = callmethodChecked(this, "aPatternMatchingNode", [1], string626);
            var var_MethodSignature = call627;
            setLineNumber(194);    // compilenode method
            var func628 = function(argcv) {    // method MethodSignature
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for MethodSignature"));
              setModuleName("dialect");
              // MethodSignature is a simple accessor - elide try ... catch
              setLineNumber(276);    // compilenode identifier
              return var_MethodSignature;
            };
            func628.paramCounts = [0];
            this.methods["MethodSignature"] = func628;
            func628.definitionLine = 194;
            func628.definitionModule = "dialect";
            this.methods["MethodSignature"].debug = "def";
            setLineNumber(277);    // compilenode string
            var string629 = new GraceString("typeliteral");
            onSelf = true;
            var call630 = callmethodChecked(this, "aPatternMatchingNode", [1], string629);
            var var_TypeLiteral = call630;
            setLineNumber(194);    // compilenode method
            var func631 = function(argcv) {    // method TypeLiteral
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for TypeLiteral"));
              setModuleName("dialect");
              // TypeLiteral is a simple accessor - elide try ... catch
              setLineNumber(277);    // compilenode identifier
              return var_TypeLiteral;
            };
            func631.paramCounts = [0];
            this.methods["TypeLiteral"] = func631;
            func631.definitionLine = 194;
            func631.definitionModule = "dialect";
            this.methods["TypeLiteral"].debug = "def";
            setLineNumber(278);    // compilenode string
            var string632 = new GraceString("typedec");
            onSelf = true;
            var call633 = callmethodChecked(this, "aPatternMatchingNode", [1], string632);
            var var_TypeDeclaration = call633;
            setLineNumber(194);    // compilenode method
            var func634 = function(argcv) {    // method TypeDeclaration
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for TypeDeclaration"));
              setModuleName("dialect");
              // TypeDeclaration is a simple accessor - elide try ... catch
              setLineNumber(278);    // compilenode identifier
              return var_TypeDeclaration;
            };
            func634.paramCounts = [0];
            this.methods["TypeDeclaration"] = func634;
            func634.definitionLine = 194;
            func634.definitionModule = "dialect";
            this.methods["TypeDeclaration"].debug = "def";
            setLineNumber(279);    // compilenode string
            var string635 = new GraceString("dtype");
            onSelf = true;
            var call636 = callmethodChecked(this, "aPatternMatchingNode", [1], string635);
            var var_TypeAnnotation = call636;
            setLineNumber(194);    // compilenode method
            var func637 = function(argcv) {    // method TypeAnnotation
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for TypeAnnotation"));
              setModuleName("dialect");
              // TypeAnnotation is a simple accessor - elide try ... catch
              setLineNumber(279);    // compilenode identifier
              return var_TypeAnnotation;
            };
            func637.paramCounts = [0];
            this.methods["TypeAnnotation"] = func637;
            func637.definitionLine = 194;
            func637.definitionModule = "dialect";
            this.methods["TypeAnnotation"].debug = "def";
            setLineNumber(280);    // compilenode string
            var string638 = new GraceString("method");
            onSelf = true;
            var call639 = callmethodChecked(this, "aPatternMatchingNode", [1], string638);
            var var_Method = call639;
            setLineNumber(194);    // compilenode method
            var func640 = function(argcv) {    // method Method
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Method"));
              setModuleName("dialect");
              // Method is a simple accessor - elide try ... catch
              setLineNumber(280);    // compilenode identifier
              return var_Method;
            };
            func640.paramCounts = [0];
            this.methods["Method"] = func640;
            func640.definitionLine = 194;
            func640.definitionModule = "dialect";
            this.methods["Method"].debug = "def";
            setLineNumber(281);    // compilenode string
            var string641 = new GraceString("parameter");
            onSelf = true;
            var call642 = callmethodChecked(this, "aPatternMatchingNode", [1], string641);
            var var_Parameter = call642;
            setLineNumber(194);    // compilenode method
            var func643 = function(argcv) {    // method Parameter
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Parameter"));
              setModuleName("dialect");
              // Parameter is a simple accessor - elide try ... catch
              setLineNumber(281);    // compilenode identifier
              return var_Parameter;
            };
            func643.paramCounts = [0];
            this.methods["Parameter"] = func643;
            func643.definitionLine = 194;
            func643.definitionModule = "dialect";
            this.methods["Parameter"].debug = "def";
            setLineNumber(282);    // compilenode string
            var string644 = new GraceString("call");
            onSelf = true;
            var call645 = callmethodChecked(this, "aPatternMatchingNode", [1], string644);
            var var_Request = call645;
            setLineNumber(194);    // compilenode method
            var func646 = function(argcv) {    // method Request
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Request"));
              setModuleName("dialect");
              // Request is a simple accessor - elide try ... catch
              setLineNumber(282);    // compilenode identifier
              return var_Request;
            };
            func646.paramCounts = [0];
            this.methods["Request"] = func646;
            func646.definitionLine = 194;
            func646.definitionModule = "dialect";
            this.methods["Request"].debug = "def";
            setLineNumber(283);    // compilenode string
            var string647 = new GraceString("class");
            onSelf = true;
            var call648 = callmethodChecked(this, "aPatternMatchingNode", [1], string647);
            var var_Class = call648;
            setLineNumber(194);    // compilenode method
            var func649 = function(argcv) {    // method Class
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Class"));
              setModuleName("dialect");
              // Class is a simple accessor - elide try ... catch
              setLineNumber(283);    // compilenode identifier
              return var_Class;
            };
            func649.paramCounts = [0];
            this.methods["Class"] = func649;
            func649.definitionLine = 194;
            func649.definitionModule = "dialect";
            this.methods["Class"].debug = "def";
            setLineNumber(284);    // compilenode string
            var string650 = new GraceString("object");
            onSelf = true;
            var call651 = callmethodChecked(this, "aPatternMatchingNode", [1], string650);
            var var_ObjectLiteral = call651;
            setLineNumber(194);    // compilenode method
            var func652 = function(argcv) {    // method ObjectLiteral
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ObjectLiteral"));
              setModuleName("dialect");
              // ObjectLiteral is a simple accessor - elide try ... catch
              setLineNumber(284);    // compilenode identifier
              return var_ObjectLiteral;
            };
            func652.paramCounts = [0];
            this.methods["ObjectLiteral"] = func652;
            func652.definitionLine = 194;
            func652.definitionModule = "dialect";
            this.methods["ObjectLiteral"].debug = "def";
            setLineNumber(285);    // compilenode string
            var string653 = new GraceString("array");
            onSelf = true;
            var call654 = callmethodChecked(this, "aPatternMatchingNode", [1], string653);
            var var_ArrayLiteral = call654;
            setLineNumber(194);    // compilenode method
            var func655 = function(argcv) {    // method ArrayLiteral
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ArrayLiteral"));
              setModuleName("dialect");
              // ArrayLiteral is a simple accessor - elide try ... catch
              setLineNumber(285);    // compilenode identifier
              return var_ArrayLiteral;
            };
            func655.paramCounts = [0];
            this.methods["ArrayLiteral"] = func655;
            func655.definitionLine = 194;
            func655.definitionModule = "dialect";
            this.methods["ArrayLiteral"].debug = "def";
            setLineNumber(286);    // compilenode string
            var string656 = new GraceString("member");
            onSelf = true;
            var call657 = callmethodChecked(this, "aPatternMatchingNode", [1], string656);
            var var_Member = call657;
            setLineNumber(194);    // compilenode method
            var func658 = function(argcv) {    // method Member
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Member"));
              setModuleName("dialect");
              // Member is a simple accessor - elide try ... catch
              setLineNumber(286);    // compilenode identifier
              return var_Member;
            };
            func658.paramCounts = [0];
            this.methods["Member"] = func658;
            func658.definitionLine = 194;
            func658.definitionModule = "dialect";
            this.methods["Member"].debug = "def";
            setLineNumber(287);    // compilenode string
            var string659 = new GraceString("generic");
            onSelf = true;
            var call660 = callmethodChecked(this, "aPatternMatchingNode", [1], string659);
            var var_Generic = call660;
            setLineNumber(194);    // compilenode method
            var func661 = function(argcv) {    // method Generic
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Generic"));
              setModuleName("dialect");
              // Generic is a simple accessor - elide try ... catch
              setLineNumber(287);    // compilenode identifier
              return var_Generic;
            };
            func661.paramCounts = [0];
            this.methods["Generic"] = func661;
            func661.definitionLine = 194;
            func661.definitionModule = "dialect";
            this.methods["Generic"].debug = "def";
            setLineNumber(288);    // compilenode string
            var string662 = new GraceString("identifier");
            onSelf = true;
            var call663 = callmethodChecked(this, "aPatternMatchingNode", [1], string662);
            var var_Identifier = call663;
            setLineNumber(194);    // compilenode method
            var func664 = function(argcv) {    // method Identifier
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Identifier"));
              setModuleName("dialect");
              // Identifier is a simple accessor - elide try ... catch
              setLineNumber(288);    // compilenode identifier
              return var_Identifier;
            };
            func664.paramCounts = [0];
            this.methods["Identifier"] = func664;
            func664.definitionLine = 194;
            func664.definitionModule = "dialect";
            this.methods["Identifier"].debug = "def";
            setLineNumber(289);    // compilenode string
            var string665 = new GraceString("octets");
            onSelf = true;
            var call666 = callmethodChecked(this, "aPatternMatchingNode", [1], string665);
            var var_OctetsLiteral = call666;
            setLineNumber(194);    // compilenode method
            var func667 = function(argcv) {    // method OctetsLiteral
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for OctetsLiteral"));
              setModuleName("dialect");
              // OctetsLiteral is a simple accessor - elide try ... catch
              setLineNumber(289);    // compilenode identifier
              return var_OctetsLiteral;
            };
            func667.paramCounts = [0];
            this.methods["OctetsLiteral"] = func667;
            func667.definitionLine = 194;
            func667.definitionModule = "dialect";
            this.methods["OctetsLiteral"].debug = "def";
            setLineNumber(290);    // compilenode string
            var string668 = new GraceString("string");
            onSelf = true;
            var call669 = callmethodChecked(this, "aPatternMatchingNode", [1], string668);
            var var_StringLiteral = call669;
            setLineNumber(194);    // compilenode method
            var func670 = function(argcv) {    // method StringLiteral
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for StringLiteral"));
              setModuleName("dialect");
              // StringLiteral is a simple accessor - elide try ... catch
              setLineNumber(290);    // compilenode identifier
              return var_StringLiteral;
            };
            func670.paramCounts = [0];
            this.methods["StringLiteral"] = func670;
            func670.definitionLine = 194;
            func670.definitionModule = "dialect";
            this.methods["StringLiteral"].debug = "def";
            setLineNumber(291);    // compilenode string
            var string671 = new GraceString("num");
            onSelf = true;
            var call672 = callmethodChecked(this, "aPatternMatchingNode", [1], string671);
            var var_NumberLiteral = call672;
            setLineNumber(194);    // compilenode method
            var func673 = function(argcv) {    // method NumberLiteral
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for NumberLiteral"));
              setModuleName("dialect");
              // NumberLiteral is a simple accessor - elide try ... catch
              setLineNumber(291);    // compilenode identifier
              return var_NumberLiteral;
            };
            func673.paramCounts = [0];
            this.methods["NumberLiteral"] = func673;
            func673.definitionLine = 194;
            func673.definitionModule = "dialect";
            this.methods["NumberLiteral"].debug = "def";
            setLineNumber(292);    // compilenode string
            var string674 = new GraceString("op");
            onSelf = true;
            var call675 = callmethodChecked(this, "aPatternMatchingNode", [1], string674);
            var var_Operator = call675;
            setLineNumber(194);    // compilenode method
            var func676 = function(argcv) {    // method Operator
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Operator"));
              setModuleName("dialect");
              // Operator is a simple accessor - elide try ... catch
              setLineNumber(292);    // compilenode identifier
              return var_Operator;
            };
            func676.paramCounts = [0];
            this.methods["Operator"] = func676;
            func676.definitionLine = 194;
            func676.definitionModule = "dialect";
            this.methods["Operator"].debug = "def";
            setLineNumber(293);    // compilenode string
            var string677 = new GraceString("bind");
            onSelf = true;
            var call678 = callmethodChecked(this, "aPatternMatchingNode", [1], string677);
            var var_Bind = call678;
            setLineNumber(194);    // compilenode method
            var func679 = function(argcv) {    // method Bind
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Bind"));
              setModuleName("dialect");
              // Bind is a simple accessor - elide try ... catch
              setLineNumber(293);    // compilenode identifier
              return var_Bind;
            };
            func679.paramCounts = [0];
            this.methods["Bind"] = func679;
            func679.definitionLine = 194;
            func679.definitionModule = "dialect";
            this.methods["Bind"].debug = "def";
            setLineNumber(294);    // compilenode string
            var string680 = new GraceString("defdec");
            onSelf = true;
            var call681 = callmethodChecked(this, "aPatternMatchingNode", [1], string680);
            var var_Def = call681;
            setLineNumber(194);    // compilenode method
            var func682 = function(argcv) {    // method Def
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Def"));
              setModuleName("dialect");
              // Def is a simple accessor - elide try ... catch
              setLineNumber(294);    // compilenode identifier
              return var_Def;
            };
            func682.paramCounts = [0];
            this.methods["Def"] = func682;
            func682.definitionLine = 194;
            func682.definitionModule = "dialect";
            this.methods["Def"].debug = "def";
            setLineNumber(295);    // compilenode string
            var string683 = new GraceString("vardec");
            onSelf = true;
            var call684 = callmethodChecked(this, "aPatternMatchingNode", [1], string683);
            var var_Var = call684;
            setLineNumber(194);    // compilenode method
            var func685 = function(argcv) {    // method Var
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Var"));
              setModuleName("dialect");
              // Var is a simple accessor - elide try ... catch
              setLineNumber(295);    // compilenode identifier
              return var_Var;
            };
            func685.paramCounts = [0];
            this.methods["Var"] = func685;
            func685.definitionLine = 194;
            func685.definitionModule = "dialect";
            this.methods["Var"].debug = "def";
            setLineNumber(296);    // compilenode string
            var string686 = new GraceString("import");
            onSelf = true;
            var call687 = callmethodChecked(this, "aPatternMatchingNode", [1], string686);
            var var_Import = call687;
            setLineNumber(194);    // compilenode method
            var func688 = function(argcv) {    // method Import
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Import"));
              setModuleName("dialect");
              // Import is a simple accessor - elide try ... catch
              setLineNumber(296);    // compilenode identifier
              return var_Import;
            };
            func688.paramCounts = [0];
            this.methods["Import"] = func688;
            func688.definitionLine = 194;
            func688.definitionModule = "dialect";
            this.methods["Import"].debug = "def";
            setLineNumber(297);    // compilenode string
            var string689 = new GraceString("dialect");
            onSelf = true;
            var call690 = callmethodChecked(this, "aPatternMatchingNode", [1], string689);
            var var_Dialect = call690;
            setLineNumber(194);    // compilenode method
            var func691 = function(argcv) {    // method Dialect
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Dialect"));
              setModuleName("dialect");
              // Dialect is a simple accessor - elide try ... catch
              setLineNumber(297);    // compilenode identifier
              return var_Dialect;
            };
            func691.paramCounts = [0];
            this.methods["Dialect"] = func691;
            func691.definitionLine = 194;
            func691.definitionModule = "dialect";
            this.methods["Dialect"].debug = "def";
            setLineNumber(298);    // compilenode string
            var string692 = new GraceString("return");
            onSelf = true;
            var call693 = callmethodChecked(this, "aPatternMatchingNode", [1], string692);
            var var_Return = call693;
            setLineNumber(194);    // compilenode method
            var func694 = function(argcv) {    // method Return
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Return"));
              setModuleName("dialect");
              // Return is a simple accessor - elide try ... catch
              setLineNumber(298);    // compilenode identifier
              return var_Return;
            };
            func694.paramCounts = [0];
            this.methods["Return"] = func694;
            func694.definitionLine = 194;
            func694.definitionModule = "dialect";
            this.methods["Return"].debug = "def";
            setLineNumber(299);    // compilenode string
            var string695 = new GraceString("inherits");
            onSelf = true;
            var call696 = callmethodChecked(this, "aPatternMatchingNode", [1], string695);
            var var_Inherits = call696;
            setLineNumber(194);    // compilenode method
            var func697 = function(argcv) {    // method Inherits
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Inherits"));
              setModuleName("dialect");
              // Inherits is a simple accessor - elide try ... catch
              setLineNumber(299);    // compilenode identifier
              return var_Inherits;
            };
            func697.paramCounts = [0];
            this.methods["Inherits"] = func697;
            func697.definitionLine = 194;
            func697.definitionModule = "dialect";
            this.methods["Inherits"].debug = "def";
            setLineNumber(324);    // compilenode string
            var string698 = new GraceString("while()do");
            onSelf = true;
            var call699 = callmethodChecked(this, "RequestOf", [1], string698);
            var var_WhileRequest = call699;
            setLineNumber(194);    // compilenode method
            var func700 = function(argcv) {    // method WhileRequest
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for WhileRequest"));
              setModuleName("dialect");
              // WhileRequest is a simple accessor - elide try ... catch
              setLineNumber(324);    // compilenode identifier
              return var_WhileRequest;
            };
            func700.paramCounts = [0];
            this.methods["WhileRequest"] = func700;
            func700.definitionLine = 194;
            func700.definitionModule = "dialect";
            this.methods["WhileRequest"].debug = "def";
            setLineNumber(325);    // compilenode string
            var string701 = new GraceString("for()do");
            onSelf = true;
            var call702 = callmethodChecked(this, "RequestOf", [1], string701);
            var var_ForRequest = call702;
            setLineNumber(194);    // compilenode method
            var func703 = function(argcv) {    // method ForRequest
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ForRequest"));
              setModuleName("dialect");
              // ForRequest is a simple accessor - elide try ... catch
              setLineNumber(325);    // compilenode identifier
              return var_ForRequest;
            };
            func703.paramCounts = [0];
            this.methods["ForRequest"] = func703;
            func703.definitionLine = 194;
            func703.definitionModule = "dialect";
            this.methods["ForRequest"].debug = "def";
            setLineNumber(355);    // compilenode object
            var obj704 = Grace_allocObject(null, "astVisitor");
            obj704.definitionModule = "dialect";
            obj704.definitionLine = 355;
            obj704.outer = this;
            var reader_dialect_outer705 = function() {
              return this.outer;
            };
            obj704.methods["outer"] = reader_dialect_outer705;
            var obj_init_704 = function() {
              var origSuperDepth = superDepth;
              superDepth = obj704;
              var func706 = function(argcv) {    // method checkMatch(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for checkMatch(1)"));
                setModuleName("dialect");
                setLineNumber(359);    // compilenode call
                var call707 = callmethodChecked(superDepth, "outer", [0]);
                onOuter = true;
                onSelf = true;
                var call708 = callmethodChecked(call707, "runRules", [1], var_node);
                setLineNumber(360);    // compilenode identifier
                return GraceTrue;
              };
              func706.paramCounts = [1];
              obj704.methods["checkMatch"] = func706;
              func706.definitionLine = 358;
              func706.definitionModule = "dialect";
              var func709 = function(argcv) {    // method visitIf(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitIf(1)"));
                setModuleName("dialect");
                setLineNumber(364);    // compilenode identifier
                onSelf = true;
                var call710 = callmethodChecked(this, "checkMatch", [1], var_node);
                if (!Grace_isTrue(callmethod(var_Boolean, "match", [1], call710)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitIf(1) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return call710;
              };
              func709.paramCounts = [1];
              obj704.methods["visitIf"] = func709;
              func709.definitionLine = 363;
              func709.definitionModule = "dialect";
              var func711 = function(argcv) {    // method visitBlock(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitBlock(1)"));
                setModuleName("dialect");
                setLineNumber(368);    // compilenode call
                var call712 = callmethodChecked(superDepth, "outer", [0]);
                onOuter = true;
                onSelf = true;
                var call713 = callmethodChecked(call712, "runRules", [1], var_node);
                setLineNumber(370);    // compilenode identifier
                var call714 = callmethodChecked(var_node, "params", [0]);
                var block715 = new GraceBlock(this, 370, 1);
                setLineNumber(1);    // compilenode identifier
                block715.real = function(var_param) {
                  setLineNumber(371);    // compilenode identifier
                  var call716 = callmethodChecked(var_aParameter, "fromNode", [1], var_param);
                  var call717 = callmethodChecked(superDepth, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call718 = callmethodChecked(call717, "runRules", [1], call716);
                  return call718;
                };
                var call719 = callmethodChecked(var_prelude, "for()do", [1, 1], call714, block715);
                setLineNumber(374);    // compilenode identifier
                var call720 = callmethodChecked(var_node, "body", [0]);
                var block721 = new GraceBlock(this, 374, 1);
                setLineNumber(1);    // compilenode identifier
                block721.real = function(var_stmt) {
                  setLineNumber(375);    // compilenode identifier
                  var call722 = callmethodChecked(var_stmt, "accept", [1], this);
                  return call722;
                };
                var call723 = callmethodChecked(var_prelude, "for()do", [1, 1], call720, block721);
                setLineNumber(378);    // compilenode identifier
                return GraceFalse;
              };
              func711.paramCounts = [1];
              obj704.methods["visitBlock"] = func711;
              func711.definitionLine = 367;
              func711.definitionModule = "dialect";
              var func724 = function(argcv) {    // method visitMatchCase(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitMatchCase(1)"));
                setModuleName("dialect");
                setLineNumber(382);    // compilenode identifier
                onSelf = true;
                var call725 = callmethodChecked(this, "checkMatch", [1], var_node);
                if (!Grace_isTrue(callmethod(var_Boolean, "match", [1], call725)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitMatchCase(1) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return call725;
              };
              func724.paramCounts = [1];
              obj704.methods["visitMatchCase"] = func724;
              func724.definitionLine = 381;
              func724.definitionModule = "dialect";
              var func726 = function(argcv) {    // method visitTryCatch(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitTryCatch(1)"));
                setModuleName("dialect");
                setLineNumber(386);    // compilenode identifier
                onSelf = true;
                var call727 = callmethodChecked(this, "checkMatch", [1], var_node);
                if (!Grace_isTrue(callmethod(var_Boolean, "match", [1], call727)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitTryCatch(1) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return call727;
              };
              func726.paramCounts = [1];
              obj704.methods["visitTryCatch"] = func726;
              func726.definitionLine = 385;
              func726.definitionModule = "dialect";
              var func728 = function(argcv) {    // method visitMethodType(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitMethodType(1)"));
                setModuleName("dialect");
                setLineNumber(390);    // compilenode call
                var call729 = callmethodChecked(superDepth, "outer", [0]);
                onOuter = true;
                onSelf = true;
                var call730 = callmethodChecked(call729, "runRules", [1], var_node);
                setLineNumber(392);    // compilenode identifier
                var call731 = callmethodChecked(var_node, "signature", [0]);
                var block732 = new GraceBlock(this, 392, 1);
                setLineNumber(1);    // compilenode identifier
                block732.real = function(var_part) {
                  setLineNumber(393);    // compilenode identifier
                  var call733 = callmethodChecked(var_part, "params", [0]);
                  var block734 = new GraceBlock(this, 393, 1);
                  setLineNumber(1);    // compilenode identifier
                  block734.real = function(var_param) {
                    setLineNumber(394);    // compilenode identifier
                    var call735 = callmethodChecked(var_aParameter, "fromNode", [1], var_param);
                    var call736 = callmethodChecked(superDepth, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call737 = callmethodChecked(call736, "runRules", [1], call735);
                    return call737;
                  };
                  var call738 = callmethodChecked(var_prelude, "for()do", [1, 1], call733, block734);
                  return call738;
                };
                var call739 = callmethodChecked(var_prelude, "for()do", [1, 1], call731, block732);
                setLineNumber(398);    // compilenode identifier
                return GraceFalse;
              };
              func728.paramCounts = [1];
              obj704.methods["visitMethodType"] = func728;
              func728.definitionLine = 389;
              func728.definitionModule = "dialect";
              var func740 = function(argcv) {    // method visitType(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitType(1)"));
                setModuleName("dialect");
                setLineNumber(402);    // compilenode identifier
                onSelf = true;
                var call741 = callmethodChecked(this, "checkMatch", [1], var_node);
                if (!Grace_isTrue(callmethod(var_Boolean, "match", [1], call741)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitType(1) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return call741;
              };
              func740.paramCounts = [1];
              obj704.methods["visitType"] = func740;
              func740.definitionLine = 401;
              func740.definitionModule = "dialect";
              var func742 = function(argcv) {    // method visitMethod(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitMethod(1)"));
                setModuleName("dialect");
                setLineNumber(406);    // compilenode call
                var call743 = callmethodChecked(superDepth, "outer", [0]);
                onOuter = true;
                onSelf = true;
                var call744 = callmethodChecked(call743, "runRules", [1], var_node);
                setLineNumber(408);    // compilenode identifier
                var call745 = callmethodChecked(var_node, "signature", [0]);
                var block746 = new GraceBlock(this, 408, 1);
                setLineNumber(1);    // compilenode identifier
                block746.real = function(var_part) {
                  setLineNumber(409);    // compilenode identifier
                  var call747 = callmethodChecked(var_part, "params", [0]);
                  var block748 = new GraceBlock(this, 409, 1);
                  setLineNumber(1);    // compilenode identifier
                  block748.real = function(var_param) {
                    setLineNumber(410);    // compilenode identifier
                    var call749 = callmethodChecked(var_aParameter, "fromNode", [1], var_param);
                    var call750 = callmethodChecked(superDepth, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call751 = callmethodChecked(call750, "runRules", [1], call749);
                    return call751;
                  };
                  var call752 = callmethodChecked(var_prelude, "for()do", [1, 1], call747, block748);
                  return call752;
                };
                var call753 = callmethodChecked(var_prelude, "for()do", [1, 1], call745, block746);
                setLineNumber(414);    // compilenode identifier
                var call754 = callmethodChecked(var_node, "body", [0]);
                var block755 = new GraceBlock(this, 414, 1);
                setLineNumber(1);    // compilenode identifier
                block755.real = function(var_stmt) {
                  setLineNumber(415);    // compilenode identifier
                  var call756 = callmethodChecked(var_stmt, "accept", [1], this);
                  return call756;
                };
                var call757 = callmethodChecked(var_prelude, "for()do", [1, 1], call754, block755);
                setLineNumber(418);    // compilenode identifier
                return GraceFalse;
              };
              func742.paramCounts = [1];
              obj704.methods["visitMethod"] = func742;
              func742.definitionLine = 405;
              func742.definitionModule = "dialect";
              var func758 = function(argcv) {    // method visitCall(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitCall(1)"));
                setModuleName("dialect");
                setLineNumber(422);    // compilenode identifier
                onSelf = true;
                var call759 = callmethodChecked(this, "checkMatch", [1], var_node);
                setLineNumber(424);    // compilenode identifier
                var call761 = callmethodChecked(var_node, "value", [0]);
                var cases760 = [];
                var block762 = new GraceBlock(this, 424, 1);
                setLineNumber(0);    // compilenode string
                var string763 = new GraceString("memb");
                var call764 = callmethodChecked(var_prelude, "VariablePattern", [0]);
                var call765 = callmethodChecked(call764, "new", [1], string763);
                var call766 = callmethodChecked(var_prelude, "AndPattern", [0]);
                var call767 = callmethodChecked(call766, "new", [2], call765, var_Member);
                block762.pattern = call767;
                setLineNumber(424);    // compilenode identifier
                block762.paramTypes = [var_Member];
                block762.real = function(var_memb) {
                  setLineNumber(425);    // compilenode identifier
                  var call768 = callmethodChecked(var_memb, "in", [0]);
                  var call769 = callmethodChecked(call768, "accept", [1], this);
                  return call769;
                };
                cases760.push(block762);
                setLineNumber(426);    // compilenode block
                var block770 = new GraceBlock(this, 426, 1);
                setLineNumber(1);    // compilenode identifier
                block770.real = function(var___95____95__4) {
                  return GraceDone;
                };
                cases760.push(block770);
                setLineNumber(424);    // compilematchcase
                var matchres760 = matchCase(call761,cases760,false);
                setModuleName("dialect");
                setLineNumber(428);    // compilenode identifier
                var call771 = callmethodChecked(var_node, "with", [0]);
                var block772 = new GraceBlock(this, 428, 1);
                setLineNumber(1);    // compilenode identifier
                block772.real = function(var_part) {
                  setLineNumber(429);    // compilenode identifier
                  var call773 = callmethodChecked(var_part, "args", [0]);
                  var block774 = new GraceBlock(this, 429, 1);
                  setLineNumber(1);    // compilenode identifier
                  block774.real = function(var_arg) {
                    setLineNumber(430);    // compilenode identifier
                    var call775 = callmethodChecked(var_arg, "accept", [1], this);
                    return call775;
                  };
                  var call776 = callmethodChecked(var_prelude, "for()do", [1, 1], call773, block774);
                  return call776;
                };
                var call777 = callmethodChecked(var_prelude, "for()do", [1, 1], call771, block772);
                setLineNumber(434);    // compilenode identifier
                return GraceFalse;
              };
              func758.paramCounts = [1];
              obj704.methods["visitCall"] = func758;
              func758.definitionLine = 421;
              func758.definitionModule = "dialect";
              var func778 = function(argcv) {    // method visitObject(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitObject(1)"));
                setModuleName("dialect");
                setLineNumber(438);    // compilenode identifier
                onSelf = true;
                var call779 = callmethodChecked(this, "checkMatch", [1], var_node);
                if (!Grace_isTrue(callmethod(var_Boolean, "match", [1], call779)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitObject(1) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return call779;
              };
              func778.paramCounts = [1];
              obj704.methods["visitObject"] = func778;
              func778.definitionLine = 437;
              func778.definitionModule = "dialect";
              var func780 = function(argcv) {    // method visitArray(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitArray(1)"));
                setModuleName("dialect");
                setLineNumber(442);    // compilenode identifier
                onSelf = true;
                var call781 = callmethodChecked(this, "checkMatch", [1], var_node);
                if (!Grace_isTrue(callmethod(var_Boolean, "match", [1], call781)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitArray(1) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return call781;
              };
              func780.paramCounts = [1];
              obj704.methods["visitArray"] = func780;
              func780.definitionLine = 441;
              func780.definitionModule = "dialect";
              var func782 = function(argcv) {    // method visitMember(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitMember(1)"));
                setModuleName("dialect");
                setLineNumber(446);    // compilenode identifier
                onSelf = true;
                var call783 = callmethodChecked(this, "checkMatch", [1], var_node);
                if (!Grace_isTrue(callmethod(var_Boolean, "match", [1], call783)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitMember(1) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return call783;
              };
              func782.paramCounts = [1];
              obj704.methods["visitMember"] = func782;
              func782.definitionLine = 445;
              func782.definitionModule = "dialect";
              var func784 = function(argcv) {    // method visitGeneric(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitGeneric(1)"));
                setModuleName("dialect");
                setLineNumber(450);    // compilenode identifier
                onSelf = true;
                var call785 = callmethodChecked(this, "checkMatch", [1], var_node);
                if (!Grace_isTrue(callmethod(var_Boolean, "match", [1], call785)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitGeneric(1) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return call785;
              };
              func784.paramCounts = [1];
              obj704.methods["visitGeneric"] = func784;
              func784.definitionLine = 449;
              func784.definitionModule = "dialect";
              var func786 = function(argcv) {    // method visitIdentifier(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitIdentifier(1)"));
                setModuleName("dialect");
                setLineNumber(454);    // compilenode identifier
                onSelf = true;
                var call787 = callmethodChecked(this, "checkMatch", [1], var_node);
                if (!Grace_isTrue(callmethod(var_Boolean, "match", [1], call787)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitIdentifier(1) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return call787;
              };
              func786.paramCounts = [1];
              obj704.methods["visitIdentifier"] = func786;
              func786.definitionLine = 453;
              func786.definitionModule = "dialect";
              var func788 = function(argcv) {    // method visitOctets(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitOctets(1)"));
                setModuleName("dialect");
                setLineNumber(458);    // compilenode identifier
                onSelf = true;
                var call789 = callmethodChecked(this, "checkMatch", [1], var_node);
                if (!Grace_isTrue(callmethod(var_Boolean, "match", [1], call789)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitOctets(1) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return call789;
              };
              func788.paramCounts = [1];
              obj704.methods["visitOctets"] = func788;
              func788.definitionLine = 457;
              func788.definitionModule = "dialect";
              var func790 = function(argcv) {    // method visitString(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitString(1)"));
                setModuleName("dialect");
                setLineNumber(462);    // compilenode identifier
                onSelf = true;
                var call791 = callmethodChecked(this, "checkMatch", [1], var_node);
                if (!Grace_isTrue(callmethod(var_Boolean, "match", [1], call791)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitString(1) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return call791;
              };
              func790.paramCounts = [1];
              obj704.methods["visitString"] = func790;
              func790.definitionLine = 461;
              func790.definitionModule = "dialect";
              var func792 = function(argcv) {    // method visitNum(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitNum(1)"));
                setModuleName("dialect");
                setLineNumber(466);    // compilenode identifier
                onSelf = true;
                var call793 = callmethodChecked(this, "checkMatch", [1], var_node);
                if (!Grace_isTrue(callmethod(var_Boolean, "match", [1], call793)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitNum(1) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return call793;
              };
              func792.paramCounts = [1];
              obj704.methods["visitNum"] = func792;
              func792.definitionLine = 465;
              func792.definitionModule = "dialect";
              var func794 = function(argcv) {    // method visitOp(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitOp(1)"));
                setModuleName("dialect");
                setLineNumber(470);    // compilenode identifier
                onSelf = true;
                var call795 = callmethodChecked(this, "checkMatch", [1], var_node);
                if (!Grace_isTrue(callmethod(var_Boolean, "match", [1], call795)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitOp(1) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return call795;
              };
              func794.paramCounts = [1];
              obj704.methods["visitOp"] = func794;
              func794.definitionLine = 469;
              func794.definitionModule = "dialect";
              var func796 = function(argcv) {    // method visitBind(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitBind(1)"));
                setModuleName("dialect");
                setLineNumber(474);    // compilenode identifier
                onSelf = true;
                var call797 = callmethodChecked(this, "checkMatch", [1], var_node);
                if (!Grace_isTrue(callmethod(var_Boolean, "match", [1], call797)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitBind(1) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return call797;
              };
              func796.paramCounts = [1];
              obj704.methods["visitBind"] = func796;
              func796.definitionLine = 473;
              func796.definitionModule = "dialect";
              var func798 = function(argcv) {    // method visitDefDec(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitDefDec(1)"));
                setModuleName("dialect");
                setLineNumber(478);    // compilenode identifier
                onSelf = true;
                var call799 = callmethodChecked(this, "checkMatch", [1], var_node);
                if (!Grace_isTrue(callmethod(var_Boolean, "match", [1], call799)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitDefDec(1) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return call799;
              };
              func798.paramCounts = [1];
              obj704.methods["visitDefDec"] = func798;
              func798.definitionLine = 477;
              func798.definitionModule = "dialect";
              var func800 = function(argcv) {    // method visitVarDec(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitVarDec(1)"));
                setModuleName("dialect");
                setLineNumber(482);    // compilenode identifier
                onSelf = true;
                var call801 = callmethodChecked(this, "checkMatch", [1], var_node);
                if (!Grace_isTrue(callmethod(var_Boolean, "match", [1], call801)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitVarDec(1) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return call801;
              };
              func800.paramCounts = [1];
              obj704.methods["visitVarDec"] = func800;
              func800.definitionLine = 481;
              func800.definitionModule = "dialect";
              var func802 = function(argcv) {    // method visitImport(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitImport(1)"));
                setModuleName("dialect");
                setLineNumber(486);    // compilenode identifier
                onSelf = true;
                var call803 = callmethodChecked(this, "checkMatch", [1], var_node);
                if (!Grace_isTrue(callmethod(var_Boolean, "match", [1], call803)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitImport(1) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return call803;
              };
              func802.paramCounts = [1];
              obj704.methods["visitImport"] = func802;
              func802.definitionLine = 485;
              func802.definitionModule = "dialect";
              var func804 = function(argcv) {    // method visitReturn(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitReturn(1)"));
                setModuleName("dialect");
                setLineNumber(490);    // compilenode identifier
                onSelf = true;
                var call805 = callmethodChecked(this, "checkMatch", [1], var_node);
                if (!Grace_isTrue(callmethod(var_Boolean, "match", [1], call805)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitReturn(1) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return call805;
              };
              func804.paramCounts = [1];
              obj704.methods["visitReturn"] = func804;
              func804.definitionLine = 489;
              func804.definitionModule = "dialect";
              var func806 = function(argcv) {    // method visitInherits(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitInherits(1)"));
                setModuleName("dialect");
                setLineNumber(494);    // compilenode identifier
                onSelf = true;
                var call807 = callmethodChecked(this, "checkMatch", [1], var_node);
                if (!Grace_isTrue(callmethod(var_Boolean, "match", [1], call807)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitInherits(1) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return call807;
              };
              func806.paramCounts = [1];
              obj704.methods["visitInherits"] = func806;
              func806.definitionLine = 493;
              func806.definitionModule = "dialect";
              var func808 = function(argcv) {    // method visitDialect(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitDialect(1)"));
                setModuleName("dialect");
                setLineNumber(498);    // compilenode identifier
                onSelf = true;
                var call809 = callmethodChecked(this, "checkMatch", [1], var_node);
                if (!Grace_isTrue(callmethod(var_Boolean, "match", [1], call809)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitDialect(1) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return call809;
              };
              func808.paramCounts = [1];
              obj704.methods["visitDialect"] = func808;
              func808.definitionLine = 497;
              func808.definitionModule = "dialect";
              setLineNumber(356);    // compilenode identifier
              var call810 = callmethodChecked(var_ast, "baseVisitor()object", [0, 1], this);
              obj704.superobj = call810;
              if (call810.data) obj704.data = call810.data;
              if (call810.hasOwnProperty('_value'))
                  obj704._value = call810._value;
              superDepth = origSuperDepth;
            };
            obj_init_704.apply(obj704, []);
            var var_astVisitor = obj704;
            setLineNumber(429);    // compilenode method
            var func811 = function(argcv) {    // method astVisitor
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for astVisitor"));
              setModuleName("dialect");
              // astVisitor is a simple accessor - elide try ... catch
              setLineNumber(355);    // compilenode identifier
              return var_astVisitor;
            };
            func811.paramCounts = [0];
            this.methods["astVisitor"] = func811;
            func811.definitionLine = 429;
            func811.definitionModule = "dialect";
            this.methods["astVisitor"].debug = "def";
            setLineNumber(503);    // compilenode object
            var obj812 = Grace_allocObject(GraceObject, "aTypeAnnotation");
            obj812.definitionModule = "dialect";
            obj812.definitionLine = 503;
            obj812.outer = this;
            var reader_dialect_outer813 = function() {
              return this.outer;
            };
            obj812.methods["outer"] = reader_dialect_outer813;
            var obj_init_812 = function() {
              var origSuperDepth = superDepth;
              superDepth = obj812;
              var func814 = function(argcv) {    // method fromNode(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for fromNode(1)"));
                setModuleName("dialect");
                setLineNumber(504);    // compilenode object
                var obj815 = Grace_allocObject(GraceObject, "aTypeAnnotation.fromNode");
                obj815.definitionModule = "dialect";
                obj815.definitionLine = 504;
                obj815.outer = this;
                var reader_dialect_outer816 = function() {
                  return this.outer;
                };
                obj815.methods["outer"] = reader_dialect_outer816;
                var obj_init_815 = function() {
                  var origSuperDepth = superDepth;
                  superDepth = obj815;
                  setLineNumber(505);    // compilenode string
                  var string817 = new GraceString("dtype");
                  obj815.data["kind"] = string817;
                  var reader_dialect_kind818 = function() {
                    return this.data["kind"];
                  };
                  reader_dialect_kind818.def = true;
                  obj815.methods["kind"] = reader_dialect_kind818;
                  setLineNumber(506);    // compilenode identifier
                  obj815.data["value"] = var_node;
                  var reader_dialect_value819 = function() {
                    return this.data["value"];
                  };
                  reader_dialect_value819.def = true;
                  obj815.methods["value"] = reader_dialect_value819;
                  setLineNumber(507);    // compilenode identifier
                  var call820 = callmethodChecked(var_node, "line", [0]);
                  obj815.data["line"] = call820;
                  var reader_dialect_line821 = function() {
                    return this.data["line"];
                  };
                  reader_dialect_line821.def = true;
                  obj815.methods["line"] = reader_dialect_line821;
                  setLineNumber(508);    // compilenode identifier
                  var call822 = callmethodChecked(var_node, "linePos", [0]);
                  obj815.data["linePos"] = call822;
                  var reader_dialect_linePos823 = function() {
                    return this.data["linePos"];
                  };
                  reader_dialect_linePos823.def = true;
                  obj815.methods["linePos"] = reader_dialect_linePos823;
                  superDepth = origSuperDepth;
                };
                obj_init_815.apply(obj815, []);
                setLineNumber(504);    // return value
                if (!Grace_isTrue(callmethod(var_TypeAnnotation, "match", [1], obj815)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method fromNode(1) does not have " + 
                            callmethod(var_TypeAnnotation, "asString", [0])._value + "."));
                return obj815;
              };
              func814.paramCounts = [1];
              obj812.methods["fromNode"] = func814;
              func814.definitionLine = 504;
              func814.definitionModule = "dialect";
                var func824 = function(argcv) {    // method fromNode(1     )()object
                  var curarg = 1;
                  var var_node = arguments[curarg];
                  curarg++;
                  var inheritingObject = arguments[curarg++];
                  // Start argument processing
                  curarg = 1;
                  curarg++;
                  // End argument processing
                  setModuleName("dialect");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var obj825 = Grace_allocObject(GraceObject, "fromNode");
                  obj825.definitionModule = "dialect";
                  obj825.definitionLine = 504;
                  var inho825 = inheritingObject;
                  while (inho825.superobj) inho825 = inho825.superobj;
                  inho825.superobj = obj825;
                  obj825.data = inheritingObject.data;
                  if (inheritingObject.hasOwnProperty('_value'))
                    obj825._value = inheritingObject._value;
                  obj825.outer = this;
                  var reader_dialect_outer826 = function() {
                    return this.outer;
                  };
                  obj825.methods["outer"] = reader_dialect_outer826;
                  var obj_init_825 = function() {
                    var origSuperDepth = superDepth;
                    superDepth = obj825;
                    setLineNumber(505);    // compilenode string
                    var string827 = new GraceString("dtype");
                    obj825.data["kind"] = string827;
                    var reader_dialect_kind828 = function() {
                      return this.data["kind"];
                    };
                    reader_dialect_kind828.def = true;
                    obj825.methods["kind"] = reader_dialect_kind828;
                    setLineNumber(506);    // compilenode identifier
                    obj825.data["value"] = var_node;
                    var reader_dialect_value829 = function() {
                      return this.data["value"];
                    };
                    reader_dialect_value829.def = true;
                    obj825.methods["value"] = reader_dialect_value829;
                    setLineNumber(507);    // compilenode identifier
                    var call830 = callmethodChecked(var_node, "line", [0]);
                    obj825.data["line"] = call830;
                    var reader_dialect_line831 = function() {
                      return this.data["line"];
                    };
                    reader_dialect_line831.def = true;
                    obj825.methods["line"] = reader_dialect_line831;
                    setLineNumber(508);    // compilenode identifier
                    var call832 = callmethodChecked(var_node, "linePos", [0]);
                    obj825.data["linePos"] = call832;
                    var reader_dialect_linePos833 = function() {
                      return this.data["linePos"];
                    };
                    reader_dialect_linePos833.def = true;
                    obj825.methods["linePos"] = reader_dialect_linePos833;
                    superDepth = origSuperDepth;
                  };
                  obj_init_825.apply(inheritingObject, []);
                  return obj825;
                  };
                  obj812.methods["fromNode()object"] = func824;
                superDepth = origSuperDepth;
              };
              obj_init_812.apply(obj812, []);
              var var_aTypeAnnotation = obj812;
              var func834 = function(argcv) {    // method aTypeAnnotation
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                if (argcv[0] !== 0)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for aTypeAnnotation"));
                setModuleName("dialect");
                // aTypeAnnotation is a simple accessor - elide try ... catch
                setLineNumber(503);    // compilenode identifier
                return var_aTypeAnnotation;
              };
              func834.paramCounts = [0];
              this.methods["aTypeAnnotation"] = func834;
              func834.definitionLine = 508;
              func834.definitionModule = "dialect";
              this.methods["aTypeAnnotation"].debug = "def";
              setLineNumber(512);    // compilenode object
              var obj835 = Grace_allocObject(GraceObject, "aParameter");
              obj835.definitionModule = "dialect";
              obj835.definitionLine = 512;
              obj835.outer = this;
              var reader_dialect_outer836 = function() {
                return this.outer;
              };
              obj835.methods["outer"] = reader_dialect_outer836;
              var obj_init_835 = function() {
                var origSuperDepth = superDepth;
                superDepth = obj835;
                var func837 = function(argcv) {    // method fromNode(1)
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  var var_node = arguments[curarg];
                  curarg++;
                  if (argcv[0] !== 1)
                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for fromNode(1)"));
                  setModuleName("dialect");
                  setLineNumber(513);    // compilenode object
                  var obj838 = Grace_allocObject(GraceObject, "aParameter.fromNode");
                  obj838.definitionModule = "dialect";
                  obj838.definitionLine = 513;
                  obj838.outer = this;
                  var reader_dialect_outer839 = function() {
                    return this.outer;
                  };
                  obj838.methods["outer"] = reader_dialect_outer839;
                  var obj_init_838 = function() {
                    var origSuperDepth = superDepth;
                    superDepth = obj838;
                    setLineNumber(514);    // compilenode string
                    var string840 = new GraceString("parameter");
                    obj838.data["kind"] = string840;
                    var reader_dialect_kind841 = function() {
                      return this.data["kind"];
                    };
                    reader_dialect_kind841.def = true;
                    obj838.methods["kind"] = reader_dialect_kind841;
                    setLineNumber(515);    // compilenode identifier
                    var call842 = callmethodChecked(var_node, "value", [0]);
                    obj838.data["value"] = call842;
                    var reader_dialect_value843 = function() {
                      return this.data["value"];
                    };
                    reader_dialect_value843.def = true;
                    obj838.methods["value"] = reader_dialect_value843;
                    setLineNumber(516);    // compilenode identifier
                    var call844 = callmethodChecked(var_node, "dtype", [0]);
                    obj838.data["dtype"] = call844;
                    var reader_dialect_dtype845 = function() {
                      return this.data["dtype"];
                    };
                    reader_dialect_dtype845.def = true;
                    obj838.methods["dtype"] = reader_dialect_dtype845;
                    setLineNumber(517);    // compilenode identifier
                    var call846 = callmethodChecked(var_node, "line", [0]);
                    obj838.data["line"] = call846;
                    var reader_dialect_line847 = function() {
                      return this.data["line"];
                    };
                    reader_dialect_line847.def = true;
                    obj838.methods["line"] = reader_dialect_line847;
                    setLineNumber(518);    // compilenode identifier
                    var call848 = callmethodChecked(var_node, "linePos", [0]);
                    obj838.data["linePos"] = call848;
                    var reader_dialect_linePos849 = function() {
                      return this.data["linePos"];
                    };
                    reader_dialect_linePos849.def = true;
                    obj838.methods["linePos"] = reader_dialect_linePos849;
                    superDepth = origSuperDepth;
                  };
                  obj_init_838.apply(obj838, []);
                  setLineNumber(513);    // return value
                  if (!Grace_isTrue(callmethod(var_Parameter, "match", [1], obj838)))
                      throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("result of method fromNode(1) does not have " + 
                              callmethod(var_Parameter, "asString", [0])._value + "."));
                  return obj838;
                };
                func837.paramCounts = [1];
                obj835.methods["fromNode"] = func837;
                func837.definitionLine = 513;
                func837.definitionModule = "dialect";
                  var func850 = function(argcv) {    // method fromNode(1     )()object
                    var curarg = 1;
                    var var_node = arguments[curarg];
                    curarg++;
                    var inheritingObject = arguments[curarg++];
                    // Start argument processing
                    curarg = 1;
                    curarg++;
                    // End argument processing
                    setModuleName("dialect");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var obj851 = Grace_allocObject(GraceObject, "fromNode");
                    obj851.definitionModule = "dialect";
                    obj851.definitionLine = 513;
                    var inho851 = inheritingObject;
                    while (inho851.superobj) inho851 = inho851.superobj;
                    inho851.superobj = obj851;
                    obj851.data = inheritingObject.data;
                    if (inheritingObject.hasOwnProperty('_value'))
                      obj851._value = inheritingObject._value;
                    obj851.outer = this;
                    var reader_dialect_outer852 = function() {
                      return this.outer;
                    };
                    obj851.methods["outer"] = reader_dialect_outer852;
                    var obj_init_851 = function() {
                      var origSuperDepth = superDepth;
                      superDepth = obj851;
                      setLineNumber(514);    // compilenode string
                      var string853 = new GraceString("parameter");
                      obj851.data["kind"] = string853;
                      var reader_dialect_kind854 = function() {
                        return this.data["kind"];
                      };
                      reader_dialect_kind854.def = true;
                      obj851.methods["kind"] = reader_dialect_kind854;
                      setLineNumber(515);    // compilenode identifier
                      var call855 = callmethodChecked(var_node, "value", [0]);
                      obj851.data["value"] = call855;
                      var reader_dialect_value856 = function() {
                        return this.data["value"];
                      };
                      reader_dialect_value856.def = true;
                      obj851.methods["value"] = reader_dialect_value856;
                      setLineNumber(516);    // compilenode identifier
                      var call857 = callmethodChecked(var_node, "dtype", [0]);
                      obj851.data["dtype"] = call857;
                      var reader_dialect_dtype858 = function() {
                        return this.data["dtype"];
                      };
                      reader_dialect_dtype858.def = true;
                      obj851.methods["dtype"] = reader_dialect_dtype858;
                      setLineNumber(517);    // compilenode identifier
                      var call859 = callmethodChecked(var_node, "line", [0]);
                      obj851.data["line"] = call859;
                      var reader_dialect_line860 = function() {
                        return this.data["line"];
                      };
                      reader_dialect_line860.def = true;
                      obj851.methods["line"] = reader_dialect_line860;
                      setLineNumber(518);    // compilenode identifier
                      var call861 = callmethodChecked(var_node, "linePos", [0]);
                      obj851.data["linePos"] = call861;
                      var reader_dialect_linePos862 = function() {
                        return this.data["linePos"];
                      };
                      reader_dialect_linePos862.def = true;
                      obj851.methods["linePos"] = reader_dialect_linePos862;
                      superDepth = origSuperDepth;
                    };
                    obj_init_851.apply(inheritingObject, []);
                    return obj851;
                    };
                    obj835.methods["fromNode()object"] = func850;
                  superDepth = origSuperDepth;
                };
                obj_init_835.apply(obj835, []);
                var var_aParameter = obj835;
                var func863 = function(argcv) {    // method aParameter
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  if (argcv[0] !== 0)
                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for aParameter"));
                  setModuleName("dialect");
                  // aParameter is a simple accessor - elide try ... catch
                  setLineNumber(512);    // compilenode identifier
                  return var_aParameter;
                };
                func863.paramCounts = [0];
                this.methods["aParameter"] = func863;
                func863.definitionLine = 518;
                func863.definitionModule = "dialect";
                this.methods["aParameter"].debug = "def";
                return this;
              }
              gracecode_dialect.imports = ['ast', 'errormessages'];
              if (typeof gctCache !== "undefined")
                gctCache['dialect'] = "classes:\n aParameter\n aTypeAnnotation\nconfidential:\n entryFrom()to\n stackOfKind\nconstructors-of:aParameter:\n fromNode\nconstructors-of:aTypeAnnotation:\n fromNode\nfresh-methods:\n RequestOf\n aMutableMap\n aPatternMatchingNode\n entryFrom()to\n stackOfKind\nfresh:RequestOf:\n &\n makeBindings\n match\n |\nfresh:aMutableMap:\n asString\n at\n at()put\n atKey()do\n atKey()do()else\n containsKey\n entries\n isEmpty\n keys\n size\n values\nfresh:aPatternMatchingNode:\n match\nfresh:entryFrom()to:\n key\n value\nfresh:stackOfKind:\n at()put\n find()butIfMissing\n stack\nmethods-of:aParameter.fromNode:\n dtype\n kind\n line\n linePos\n value\nmethods-of:aTypeAnnotation.fromNode:\n kind\n line\n linePos\n value\nmethodtypes-of:AstNode:\n 1 kind -> String\nmodules:\n ast\n errormessages\n identifierKinds\n io\n stringMap\n sys\n unixFilePath\n util\npath:\n dialect\npublic:\n AndPattern\n ArrayLiteral\n AstNode\n BaseType\n BasicPattern\n Bind\n Binding\n BindingPattern\n Block0\n Block1\n Block2\n Block3\n BlockLiteral\n BoundsError\n CheckerFailure\n Class\n Cmd\n Collection\n ConcurrentModification\n Def\n Dialect\n Dictionary\n Enumerable\n ExceptionKind\n Expandable\n Extractable\n FailedMatch\n ForRequest\n Fun\n Fun2\n Fun3\n Generic\n Identifier\n If\n Import\n Inherits\n Iterable\n Iterator\n IteratorExhausted\n List\n MatchAndDestructuringPattern\n MatchCase\n MatchResult\n Member\n Method\n MethodSignature\n NoSuchObject\n NumberLiteral\n ObjectLiteral\n OctetsLiteral\n Operator\n OrPattern\n Parameter\n Pattern\n Point\n Proc\n Proc2\n Proc3\n Request\n RequestError\n RequestOf\n Return\n Sequence\n Set\n Singleton\n StringLiteral\n SubobjectResponsibility\n SuccessfulMatch\n TryCatch\n TypeAnnotation\n TypeDeclaration\n TypeIntersection\n TypeLiteral\n TypeSubtraction\n TypeUnion\n TypeVariant\n UninitializedVariable\n Var\n VariablePattern\n WhileRequest\n WildcardPattern\n aMutableMap\n aPatternMatchingNode\n abstract\n alwaysEqual\n binding\n check\n checkTypes\n collection\n collections\n createSuggestion\n dictionary\n do()while\n emptyDictionary\n emptyList\n emptySequence\n emptySet\n enumerable\n fail\n fail()at\n fail()from()to\n fail()from()to()suggest\n fail()when\n for()and()do\n forBody\n forCollection\n indexable\n list\n max\n methods\n min\n point2Dx()y\n range\n repeat()times\n required\n rule\n runRules\n scope\n sequence\n set\n typeOf\n valueOf\n when()error\n whileBody\n whileCond\ntypes:\n AstNode\n";
              if (typeof originalSourceLines !== "undefined") {
                originalSourceLines["dialect"] = [
                  "#pragma ExtendedLineups",
                  "import \"errormessages\" as errormessages",
                  "import \"ast\" as ast",
                  "",
                  "inherits prelude.methods",
                  "",
                  "// Checker error",
                  "",
                  "def CheckerFailure is public = Exception.refine \"CheckerFailure\"",
                  "",
                  "",
                  "// Helper Map",
                  "",
                  "class entryFrom(key') to(value') is confidential {",
                  "    def key is public = key'",
                  "    var value is public := value'",
                  "}",
                  "",
                  "class aMutableMap {",
                  "",
                  "    def entries = []",
                  "",
                  "    method isEmpty -> Boolean { size == 0 }",
                  "",
                  "    method size -> Number { entries.size }",
                  "",
                  "    method at(key) {",
                  "        atKey(key) do { value -> return value }",
                  "",
                  "        NoSuchObject.raise \"no key {key} in aMutableMap\"",
                  "    }",
                  "",
                  "    method at(key) put(value) -> Done {",
                  "        for(entries) do { entry ->",
                  "            if(entry.key == key) then {",
                  "                entry.value := value",
                  "                return done",
                  "            }",
                  "        }",
                  "",
                  "        entries.push(entryFrom(key) to(value))",
                  "    }",
                  "",
                  "    method keys -> List {",
                  "        def keys' = []",
                  "",
                  "        for(entries) do { entry ->",
                  "            keys'.push(entry.key)",
                  "        }",
                  "",
                  "        return keys'",
                  "    }",
                  "",
                  "    method values -> List {",
                  "        def values' = []",
                  "",
                  "        for(entries) do { entry ->",
                  "            values'.push(entry.value)",
                  "        }",
                  "",
                  "        return values'",
                  "    }",
                  "",
                  "    method containsKey(key) -> Boolean {",
                  "        atKey(key) do { _ -> return true }",
                  "",
                  "        return false",
                  "    }",
                  "",
                  "    method atKey(key) do(block) -> Done {",
                  "        atKey(key) do(block) else {}",
                  "        return",
                  "    }",
                  "",
                  "    method atKey(key) do(block) else(block') {",
                  "        for(entries) do { entry ->",
                  "            if(entry.key == key) then {",
                  "                return block.apply(entry.value)",
                  "            }",
                  "        }",
                  "",
                  "        return block'.apply",
                  "    }",
                  "",
                  "    method asString -> String is override {",
                  "        if(isEmpty) then {",
                  "            return \"\\{\\}\"",
                  "        }",
                  "",
                  "        var out := \"\\{\"",
                  "",
                  "        var once := false",
                  "        for(entries) do { entry ->",
                  "            if(once) then {",
                  "                out := \"{out},\"",
                  "            }",
                  "            out := \"{out} {entry.key} => {entry.value}\"",
                  "            once := true",
                  "        }",
                  "",
                  "        return \"{out} \\}\"",
                  "    }",
                  "",
                  "}",
                  "",
                  "",
                  "",
                  "// Rules",
                  "",
                  "// The defined type rules.",
                  "def rules = []",
                  "",
                  "// The cached type assignments.",
                  "def cache = aMutableMap",
                  "",
                  "// Creates a new type rule.",
                  "method rule(block) -> Done {",
                  "    rules.push(block)",
                  "}",
                  "",
                  "// Short fail-with-message",
                  "",
                  "// Will be updated with each node examined",
                  "var currentLine := 0",
                  "method fail(message) {",
                  "    CheckerFailure.raise (message) with (object {",
                  "        def line is public = currentLine",
                  "        def linePos is public = 1",
                  "    })",
                  "}",
                  "method fail(message)at(p) {",
                  "    CheckerFailure.raise (message) with (p)",
                  "}",
                  "method fail(message)from(startPos)to(endPos)suggest(sugg) {",
                  "    def o = object {",
                  "        def line is public = currentLine",
                  "        def posStart is public = startPos",
                  "        def posEnd is public = endPos",
                  "        def suggestions is public = [sugg]",
                  "    }",
                  "    CheckerFailure.raise (message) with (o)",
                  "}",
                  "method fail(message)from(startPos)to(endPos) {",
                  "    def o = object {",
                  "        def line is public = currentLine",
                  "        def posStart is public = startPos",
                  "        def posEnd is public = endPos",
                  "        def suggestions is public = []",
                  "    }",
                  "    CheckerFailure.raise (message) with (o)",
                  "}",
                  "method fail(msg)when(pat) {",
                  "    rule { x ->",
                  "        def mat = pat.match(x)",
                  "        if (mat && {mat.result}) then {",
                  "            fail(msg)",
                  "        }",
                  "    }",
                  "}",
                  "method createSuggestion {",
                  "    errormessages.suggestion.new",
                  "}",
                  "method when(pat)error(msg) {",
                  "    fail(msg)when(pat)",
                  "}",
                  "",
                  "// Scope",
                  "",
                  "class stackOfKind(kind : String) is confidential {",
                  "    def stack is public = [aMutableMap]",
                  "",
                  "    method at(name : String) put(value) -> Done {",
                  "        stack.last.at(name) put(value)",
                  "    }",
                  "",
                  "    method find(name : String) butIfMissing(bl) {",
                  "        var i := stack.size",
                  "        while { i > 0 } do {",
                  "            stack.at(i).atKey(name) do { value ->",
                  "                return value",
                  "            }",
                  "",
                  "            i := i - 1",
                  "        }",
                  "",
                  "        return bl.apply",
                  "    }",
                  "",
                  "}",
                  "",
                  "def scope is public = object {",
                  "    def variables is public = stackOfKind(\"variable\")",
                  "    def methods is public = stackOfKind(\"method\")",
                  "    def types is public = stackOfKind(\"type\")",
                  "",
                  "    method size -> Number {",
                  "        variables.stack.size",
                  "    }",
                  "",
                  "    method enter(bl) {",
                  "        variables.stack.push(aMutableMap)",
                  "        methods.stack.push(aMutableMap)",
                  "        types.stack.push(aMutableMap)",
                  "",
                  "        def result = bl.apply",
                  "",
                  "        variables.stack.pop",
                  "        methods.stack.pop",
                  "        types.stack.pop",
                  "",
                  "        return result",
                  "    }",
                  "",
                  "    method asString -> String is override {",
                  "        \"scope<{size}>\"",
                  "    }",
                  "}",
                  "",
                  "method checkTypes(node) {",
                  "    node.accept(astVisitor)",
                  "}",
                  "",
                  "method typeOf(node) {",
                  "    checkTypes(node)",
                  "    cache.atKey(node) do { value -> return value }",
                  "    CheckerFailure.raise \"cannot type non-expression\" with (node)",
                  "}",
                  "",
                  "method runRules(node) {",
                  "    // apply all rules to node; returns the last SuccessfulMatch.",
                  "    // if there is no successful match, returns FailedMatch(node).",
                  "    cache.atKey(node) do { value -> return value }",
                  "    currentLine := node.line",
                  "",
                  "    var result := FailedMatch.new(node)",
                  "    for(rules) do { each ->",
                  "        def matched = each.match(node)",
                  "        if(matched) then {",
                  "            result := matched.result",
                  "            cache.at(node) put(result)",
                  "        }",
                  "    }",
                  "    return result",
                  "}",
                  "",
                  "",
                  "// Type checker",
                  "",
                  "// Checks the defined rules on the given AST.",
                  "method check(nodes) -> Done {",
                  "    // Runs the check on the module object.",
                  "    ast.objectNode.new(nodes, false).accept(astVisitor)",
                  "}",
                  "",
                  "type AstNode = { kind -> String }",
                  "",
                  "class aPatternMatchingNode(kind : String) -> Pattern {",
                  "    inherits BasicPattern.new",
                  "",
                  "    method match(obj : Object) {",
                  "        match(obj) ",
                  "          case { node : AstNode ->",
                  "            if(kind == node.kind) then {",
                  "                SuccessfulMatch.new(node, [])",
                  "            } else {",
                  "                FailedMatch.new(node)",
                  "            }",
                  "          } case { _ -> FailedMatch.new(obj) }",
                  "    }",
                  "}",
                  "",
                  "def If is public = aPatternMatchingNode \"if\"",
                  "def BlockLiteral is public = aPatternMatchingNode \"block\"",
                  "def MatchCase is public = aPatternMatchingNode \"matchcase\"",
                  "def TryCatch is public = aPatternMatchingNode \"trycatch\"",
                  "def MethodSignature is public = aPatternMatchingNode \"methodtype\"",
                  "def TypeLiteral is public = aPatternMatchingNode \"typeliteral\"",
                  "def TypeDeclaration is public = aPatternMatchingNode \"typedec\"",
                  "def TypeAnnotation is public = aPatternMatchingNode \"dtype\"",
                  "def Method is public = aPatternMatchingNode \"method\"",
                  "def Parameter is public = aPatternMatchingNode \"parameter\"",
                  "def Request is public = aPatternMatchingNode \"call\"",
                  "def Class is public = aPatternMatchingNode \"class\"",
                  "def ObjectLiteral is public = aPatternMatchingNode \"object\"",
                  "def ArrayLiteral is public = aPatternMatchingNode \"array\"",
                  "def Member is public = aPatternMatchingNode \"member\"",
                  "def Generic is public = aPatternMatchingNode \"generic\"",
                  "def Identifier is public = aPatternMatchingNode \"identifier\"",
                  "def OctetsLiteral is public = aPatternMatchingNode \"octets\"",
                  "def StringLiteral is public = aPatternMatchingNode \"string\"",
                  "def NumberLiteral is public = aPatternMatchingNode \"num\"",
                  "def Operator is public = aPatternMatchingNode \"op\"",
                  "def Bind is public = aPatternMatchingNode \"bind\"",
                  "def Def is public = aPatternMatchingNode \"defdec\"",
                  "def Var is public = aPatternMatchingNode \"vardec\"",
                  "def Import is public = aPatternMatchingNode \"import\"",
                  "def Dialect is public = aPatternMatchingNode \"dialect\"",
                  "def Return is public = aPatternMatchingNode \"return\"",
                  "def Inherits is public = aPatternMatchingNode \"inherits\"",
                  "",
                  "// Special requests patterns.",
                  "",
                  "class RequestOf(methodName:String) -> Pattern {",
                  "",
                  "    inherits prelude.BasicPattern.new",
                  "",
                  "    method match(obj : Object) {",
                  "        match(obj) ",
                  "          case { node : AstNode ->",
                  "            if((node.kind == \"call\") && {",
                  "                node.value.value == methodName",
                  "            }) then {",
                  "                SuccessfulMatch.new(node, makeBindings(node))",
                  "            } else {",
                  "                FailedMatch.new(node)",
                  "            }",
                  "          } case { _ -> FailedMatch.new(obj)",
                  "          }",
                  "    }",
                  "",
                  "    method makeBindings(node) { [] }",
                  "}",
                  "",
                  "def WhileRequest is public = RequestOf \"while()do\"",
                  "def ForRequest is public = RequestOf \"for()do\"",
                  "",
                  "method whileCond(node) {",
                  "    // answers the condition expression from node, which must be a",
                  "    // a callNode calling \"while(_)do(_)\"",
                  "    def sig = node.with",
                  "    sig.first.args.first",
                  "}",
                  "",
                  "method whileBody(node) {",
                  "    // answers the body expression from node, which must be a",
                  "    // a callNode calling \"while(_)do(_)\"",
                  "    def sig = node.with",
                  "    sig.second.args.first",
                  "}",
                  "",
                  "method forCollection(node) {",
                  "    // answers the collection expression from node, which must be a",
                  "    // a callNode calling \"for(_)do(_)\"",
                  "    def sig = node.with",
                  "    sig.first.args.first",
                  "}",
                  "",
                  "method forBody(node) {",
                  "    // answers the body expression from node, which must be a",
                  "    // a callNode calling \"for(_)do(_)\"",
                  "    def sig = node.with",
                  "    sig.second.args.first",
                  "}",
                  "",
                  "def astVisitor = object {",
                  "    inherits ast.baseVisitor",
                  "",
                  "    method checkMatch(node) -> Boolean {",
                  "        runRules(node)",
                  "        return true",
                  "    }",
                  "",
                  "    method visitIf(node) -> Boolean {",
                  "        checkMatch(node)",
                  "    }",
                  "",
                  "    method visitBlock(node) -> Boolean {",
                  "        runRules(node)",
                  "",
                  "        for(node.params) do { param ->",
                  "            runRules(aParameter.fromNode(param))",
                  "        }",
                  "",
                  "        for(node.body) do { stmt ->",
                  "            stmt.accept(self)",
                  "        }",
                  "",
                  "        return false",
                  "    }",
                  "",
                  "    method visitMatchCase(node) -> Boolean {",
                  "        checkMatch(node)",
                  "    }",
                  "",
                  "    method visitTryCatch(node) -> Boolean {",
                  "        checkMatch(node)",
                  "    }",
                  "",
                  "    method visitMethodType(node) -> Boolean {",
                  "        runRules(node)",
                  "",
                  "        for(node.signature) do { part ->",
                  "            for(part.params) do { param ->",
                  "                runRules(aParameter.fromNode(param))",
                  "            }",
                  "        }",
                  "",
                  "        return false",
                  "    }",
                  "",
                  "    method visitType(node) -> Boolean {",
                  "        checkMatch(node)",
                  "    }",
                  "",
                  "    method visitMethod(node) -> Boolean {",
                  "        runRules(node)",
                  "",
                  "        for(node.signature) do { part ->",
                  "            for(part.params) do { param ->",
                  "                runRules(aParameter.fromNode(param))",
                  "            }",
                  "        }",
                  "",
                  "        for(node.body) do { stmt ->",
                  "            stmt.accept(self)",
                  "        }",
                  "",
                  "        return false",
                  "    }",
                  "",
                  "    method visitCall(node) -> Boolean {",
                  "        checkMatch(node)",
                  "",
                  "        match(node.value) case { memb : Member ->",
                  "            memb.in.accept(self)",
                  "        } case { _ -> }",
                  "",
                  "        for(node.with) do { part ->",
                  "            for(part.args) do { arg ->",
                  "                arg.accept(self)",
                  "            }",
                  "        }",
                  "",
                  "        return false",
                  "    }",
                  "",
                  "    method visitObject(node) -> Boolean {",
                  "        checkMatch(node)",
                  "    }",
                  "",
                  "    method visitArray(node) -> Boolean {",
                  "        checkMatch(node)",
                  "    }",
                  "",
                  "    method visitMember(node) -> Boolean {",
                  "        checkMatch(node)",
                  "    }",
                  "",
                  "    method visitGeneric(node) -> Boolean {",
                  "        checkMatch(node)",
                  "    }",
                  "",
                  "    method visitIdentifier(node) -> Boolean {",
                  "        checkMatch(node)",
                  "    }",
                  "",
                  "    method visitOctets(node) -> Boolean {",
                  "        checkMatch(node)",
                  "    }",
                  "",
                  "    method visitString(node) -> Boolean {",
                  "        checkMatch(node)",
                  "    }",
                  "",
                  "    method visitNum(node) -> Boolean {",
                  "        checkMatch(node)",
                  "    }",
                  "",
                  "    method visitOp(node) -> Boolean {",
                  "        checkMatch(node)",
                  "    }",
                  "",
                  "    method visitBind(node) -> Boolean {",
                  "        checkMatch(node)",
                  "    }",
                  "",
                  "    method visitDefDec(node) -> Boolean {",
                  "        checkMatch(node)",
                  "    }",
                  "",
                  "    method visitVarDec(node) -> Boolean {",
                  "        checkMatch(node)",
                  "    }",
                  "",
                  "    method visitImport(node) -> Boolean {",
                  "        checkMatch(node)",
                  "    }",
                  "",
                  "    method visitReturn(node) -> Boolean {",
                  "        checkMatch(node)",
                  "    }",
                  "",
                  "    method visitInherits(node) -> Boolean {",
                  "        checkMatch(node)",
                  "    }",
                  "",
                  "    method visitDialect(node) -> Boolean {",
                  "        checkMatch(node)",
                  "    }",
                  "",
                  "}",
                  "",
                  "def aTypeAnnotation is confidential = object {",
                  "    class fromNode(node) -> TypeAnnotation {",
                  "        def kind is public = \"dtype\"",
                  "        def value is public = node",
                  "        def line is public = node.line",
                  "        def linePos is public = node.linePos",
                  "    }",
                  "}",
                  "",
                  "def aParameter is confidential = object {",
                  "    class fromNode(node) -> Parameter {",
                  "        def kind is public = \"parameter\"",
                  "        def value is public = node.value",
                  "        def dtype is public = node.dtype",
                  "        def line is public = node.line",
                  "        def linePos is public = node.linePos",
                  "    }",
                  "}",
                  "" ];
              }
              if (typeof global !== "undefined")
                global.gracecode_dialect = gracecode_dialect;
              if (typeof window !== "undefined")
                window.gracecode_dialect = gracecode_dialect;
