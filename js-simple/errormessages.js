"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_errormessages() {
  setModuleName("errormessages");
  this.definitionModule = "errormessages";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_errormessages_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_errormessages_outer0;
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
    setModuleName("errormessages");
    // io is a simple accessor - elide try ... catch
    return var_io;
  };
  func1.paramCounts = [0];
  this.methods["io"] = func1;
  func1.definitionLine = 2;
  func1.definitionModule = "errormessages";
  func1.debug = "import";
  func1.confidential = true;
  setModuleName("errormessages");
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
    setModuleName("errormessages");
    // sys is a simple accessor - elide try ... catch
    return var_sys;
  };
  func2.paramCounts = [0];
  this.methods["sys"] = func2;
  func2.definitionLine = 3;
  func2.definitionModule = "errormessages";
  func2.debug = "import";
  func2.confidential = true;
  setModuleName("errormessages");
  setLineNumber(4);    // compilenode import
  // Import of util as util
  if (typeof gracecode_util == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module util'));
  var var_util = do_import("util", gracecode_util);
  var func3 = function(argcv) {    // method util
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for util"));
    setModuleName("errormessages");
    // util is a simple accessor - elide try ... catch
    return var_util;
  };
  func3.paramCounts = [0];
  this.methods["util"] = func3;
  func3.definitionLine = 4;
  func3.definitionModule = "errormessages";
  func3.debug = "import";
  func3.confidential = true;
  setModuleName("errormessages");
  setLineNumber(280);    // compilenode method
  var func4 = function(argcv) {    // method name(1)matches(1)within(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_p = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for name (arg list 1) of name(1)matches(1)within(1)"));
    var var_t = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for matches (arg list 2) of name(1)matches(1)within(1)"));
    var var_k = arguments[curarg];
    curarg++;
    if (argcv[2] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for within (arg list 3) of name(1)matches(1)within(1)"));
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_String, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in name (arg list 1), which corresponds to parameter p, does not have " + 
                callmethod(var_String, "asString", [0])._value + "."));
    curarg++;
    if (!Grace_isTrue(callmethod(var_String, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in matches (arg list 2), which corresponds to parameter t, does not have " + 
                callmethod(var_String, "asString", [0])._value + "."));
    curarg++;
    if (!Grace_isTrue(callmethod(var_Number, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in within (arg list 3), which corresponds to parameter k, does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("errormessages");
    setLineNumber(301);    // compilenode identifier
    var call5 = callmethodChecked(var_p, "size", [0]);
    var var_m = call5;
    setLineNumber(302);    // compilenode identifier
    var call6 = callmethodChecked(var_t, "size", [0]);
    var var_n = call6;
    var if7 = GraceDone;
    setLineNumber(303);    // compilenode identifier
    var opresult10 = callmethodChecked(var_k, "\u2265", [1], var_m);
    if (Grace_isTrue(opresult10)) {
      return var_m;
    }
    setLineNumber(304);    // compilenode identifier
    var diff13 = callmethodChecked(var_n, "-", [1], new GraceNum(1));
    var diff16 = callmethodChecked(var_m, "-", [1], new GraceNum(1));
    onSelf = true;
    var call17 = callmethodChecked(this, "min3", [3], var_k, diff13, diff16);
    var var_k__39__ = call17;
    setLineNumber(305);    // compilenode identifier
    var opresult20 = callmethodChecked(var_k__39__, "+", [1], new GraceNum(1));
    var var_top = opresult20;
    setLineNumber(307);    // compilenode call
    var call21 = callmethodChecked(var_prelude, "emptyList", [0]);
    var var_h = call21;
    setLineNumber(308);    // compilenode num
    var opresult24 = callmethodChecked(new GraceNum(0), "..", [1], var_m);
    var block25 = new GraceBlock(this, 308, 1);
    setLineNumber(1);    // compilenode identifier
    block25.real = function(var_i) {
      setLineNumber(308);    // compilenode identifier
      var opresult28 = callmethodChecked(var_i, "+", [1], new GraceNum(1));
      var opresult31 = callmethodChecked(var_i, "+", [1], new GraceNum(1));
      var call32 = callmethodChecked(var_h, "at()put", [1, 1], opresult28, opresult31);
      return call32;
    };
    var call33 = callmethodChecked(var_prelude, "for()do", [1, 1], opresult24, block25);
    setLineNumber(309);    // compilenode block
    var block35 = new GraceBlock(this, 309, 0);
    block35.real = function() {
      setLineNumber(310);    // compilenode num
      var opresult38 = callmethodChecked(new GraceNum(1), "..", [1], var_n);
      var block39 = new GraceBlock(this, 310, 1);
      setLineNumber(1);    // compilenode identifier
      block39.real = function(var_j) {
        setLineNumber(311);    // compilenode num
        var var_c = new GraceNum(0);
        setLineNumber(312);    // compilenode num
        var opresult42 = callmethodChecked(new GraceNum(1), "..", [1], var_top);
        var block43 = new GraceBlock(this, 312, 1);
        setLineNumber(1);    // compilenode identifier
        block43.real = function(var_i) {
          var if44 = GraceDone;
          setLineNumber(313);    // compilenode identifier
          var call45 = callmethodChecked(var_t, "at", [1], var_j);
          var call47 = callmethodChecked(var_p, "at", [1], var_i);
          var opresult49 = callmethodChecked(call47, "==", [1], call45);
          if (Grace_isTrue(opresult49)) {
            setLineNumber(314);    // compilenode identifier
            if44 = var_c;
          } else {
            setLineNumber(316);    // compilenode identifier
            var call51 = callmethodChecked(var_h, "at", [1], var_i);
            var opresult54 = callmethodChecked(var_i, "+", [1], new GraceNum(1));
            var call55 = callmethodChecked(var_h, "at", [1], opresult54);
            onSelf = true;
            var call56 = callmethodChecked(this, "min3", [3], call51, call55, var_c);
            var opresult58 = callmethodChecked(call56, "+", [1], new GraceNum(1));
            if44 = opresult58;
          }
          var var_e = if44;
          setLineNumber(318);    // compilenode identifier
          var opresult61 = callmethodChecked(var_i, "+", [1], new GraceNum(1));
          var call62 = callmethodChecked(var_h, "at", [1], opresult61);
          var_c = call62;
          setLineNumber(319);    // compilenode identifier
          var opresult65 = callmethodChecked(var_i, "+", [1], new GraceNum(1));
          var call66 = callmethodChecked(var_h, "at()put", [1, 1], opresult65, var_e);
          return call66;
        };
        var call67 = callmethodChecked(var_prelude, "for()do", [1, 1], opresult42, block43);
        setLineNumber(321);    // compilenode block
        var block68 = new GraceBlock(this, 321, 0);
        block68.real = function() {
          var block69 = new GraceBlock(this, 321, 0);
          block69.real = function() {
            var opresult73 = callmethodChecked(var_top, "+", [1], new GraceNum(1));
            var call74 = callmethodChecked(var_h, "at", [1], opresult73);
            var opresult76 = callmethodChecked(call74, ">", [1], var_k__39__);
            return opresult76;
          };
          var opresult80 = callmethodChecked(var_top, "\u2265", [1], new GraceNum(0));
          var opresult82 = callmethodChecked(opresult80, "&&", [1], block69);
          return opresult82;
        };
        var block83 = new GraceBlock(this, 321, 0);
        block83.real = function() {
          var diff86 = callmethodChecked(var_top, "-", [1], new GraceNum(1));
          var_top = diff86;
          return GraceDone;
        };
        var call87 = callmethodChecked(var_prelude, "while()do", [1, 1], block68, block83);
        var if88 = GraceDone;
        setLineNumber(322);    // compilenode identifier
        var opresult91 = callmethodChecked(var_top, "==", [1], var_m);
        if (Grace_isTrue(opresult91)) {
          setLineNumber(323);    // compilenode identifier
          throw new ReturnException(var_j, returnTarget);
        } else {
          setLineNumber(325);    // compilenode identifier
          var opresult94 = callmethodChecked(var_top, "+", [1], new GraceNum(1));
          var_top = opresult94;
          if88 = GraceDone;
        }
        return if88;
      };
      var call95 = callmethodChecked(var_prelude, "for()do", [1, 1], opresult38, block39);
      return call95;
    };
    var cases34 = [];
    setLineNumber(328);    // compilenode block
    var block96 = new GraceBlock(this, 328, 1);
    setLineNumber(0);    // compilenode string
    var string97 = new GraceString("e");
    var call98 = callmethodChecked(var_prelude, "VariablePattern", [0]);
    var call99 = callmethodChecked(call98, "new", [1], string97);
    setLineNumber(328);    // compilenode call
    var call100 = callmethodChecked(var_prelude, "BoundsError", [0]);
    setLineNumber(0);    // compilenode call
    var call101 = callmethodChecked(var_prelude, "AndPattern", [0]);
    var call102 = callmethodChecked(call101, "new", [2], call99, call100);
    block96.pattern = call102;
    setLineNumber(328);    // compilenode call
    var call103 = callmethodChecked(var_prelude, "BoundsError", [0]);
    block96.paramTypes = [call103];
    block96.real = function(var_e) {
      throw new ReturnException(new GraceNum(0), returnTarget);
      return undefined;
    };
    cases34.push(block96);
    setLineNumber(309);    // compiletrycatch
    var catchres34 = tryCatch(block35,cases34,false);
    setModuleName("errormessages");
    setLineNumber(329);    // compilenode num
    return new GraceNum(0);
  };
  func4.paramTypes = [];
  func4.paramTypes.push([type_String, "p"]);
  func4.paramTypes.push([type_String, "t"]);
  func4.paramTypes.push([type_Number, "k"]);
  func4.paramCounts = [1, 1, 1];
  this.methods["name()matches()within"] = func4;
  func4.definitionLine = 280;
  func4.definitionModule = "errormessages";
  setLineNumber(332);    // compilenode method
  var func104 = function(argcv) {    // method min3(3)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_a = arguments[curarg];
    curarg++;
    var var_b = arguments[curarg];
    curarg++;
    var var_c = arguments[curarg];
    curarg++;
    if (argcv[0] !== 3)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for min3(3)"));
    setModuleName("errormessages");
    var if105 = GraceDone;
    setLineNumber(333);    // compilenode identifier
    var opresult108 = callmethodChecked(var_a, "<", [1], var_b);
    if (Grace_isTrue(opresult108)) {
      if105 = var_a;
    } else {
      if105 = var_b;
    }
    var var_sf = if105;
    var if109 = GraceDone;
    setLineNumber(334);    // compilenode identifier
    var opresult112 = callmethodChecked(var_sf, "<", [1], var_c);
    if (Grace_isTrue(opresult112)) {
      if109 = var_sf;
    } else {
      if109 = var_c;
    }
    return if109;
  };
  func104.confidential = true;
  func104.paramCounts = [3];
  this.methods["min3"] = func104;
  func104.definitionLine = 332;
  func104.definitionModule = "errormessages";
  setLineNumber(339);    // compilenode method
  var func113 = function(argcv) {    // method syntaxError(1)atRange(3)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_message = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for syntaxError (arg list 1) of syntaxError(1)atRange(3)"));
    var var_errlinenum = arguments[curarg];
    curarg++;
    var var_startpos = arguments[curarg];
    curarg++;
    var var_endpos = arguments[curarg];
    curarg++;
    if (argcv[1] !== 3)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for atRange (arg list 2) of syntaxError(1)atRange(3)"));
    setModuleName("errormessages");
    setLineNumber(340);    // compilenode array
    var array114 = new PrimitiveGraceList([]);
    onSelf = true;
    var call115 = callmethodChecked(this, "syntaxError()atRange()withSuggestions", [1, 3, 1], var_message, var_errlinenum, var_startpos, var_endpos, array114);
    return call115;
  };
  func113.paramCounts = [1, 3];
  this.methods["syntaxError()atRange"] = func113;
  func113.definitionLine = 339;
  func113.definitionModule = "errormessages";
  setLineNumber(343);    // compilenode method
  var func116 = function(argcv) {    // method syntaxError(1)atRange(3)withSuggestion(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_message = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for syntaxError (arg list 1) of syntaxError(1)atRange(3)withSuggestion(1)"));
    var var_errlinenum = arguments[curarg];
    curarg++;
    var var_startpos = arguments[curarg];
    curarg++;
    var var_endpos = arguments[curarg];
    curarg++;
    if (argcv[1] !== 3)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for atRange (arg list 2) of syntaxError(1)atRange(3)withSuggestion(1)"));
    var var_suggestion__39__ = arguments[curarg];
    curarg++;
    if (argcv[2] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for withSuggestion (arg list 3) of syntaxError(1)atRange(3)withSuggestion(1)"));
    setModuleName("errormessages");
    setLineNumber(344);    // compilenode identifier
    var array117 = new PrimitiveGraceList([var_suggestion__39__]);
    onSelf = true;
    var call118 = callmethodChecked(this, "syntaxError()atRange()withSuggestions", [1, 3, 1], var_message, var_errlinenum, var_startpos, var_endpos, array117);
    return call118;
  };
  func116.paramCounts = [1, 3, 1];
  this.methods["syntaxError()atRange()withSuggestion"] = func116;
  func116.definitionLine = 343;
  func116.definitionModule = "errormessages";
  setLineNumber(347);    // compilenode method
  var func119 = function(argcv) {    // method syntaxError(1)atRange(3)withSuggestions(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_message = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for syntaxError (arg list 1) of syntaxError(1)atRange(3)withSuggestions(1)"));
    var var_errlinenum = arguments[curarg];
    curarg++;
    var var_startpos = arguments[curarg];
    curarg++;
    var var_endpos = arguments[curarg];
    curarg++;
    if (argcv[1] !== 3)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for atRange (arg list 2) of syntaxError(1)atRange(3)withSuggestions(1)"));
    var var_suggestions = arguments[curarg];
    curarg++;
    if (argcv[2] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for withSuggestions (arg list 3) of syntaxError(1)atRange(3)withSuggestions(1)"));
    setModuleName("errormessages");
    var if120 = GraceDone;
    setLineNumber(348);    // compilenode identifier
    var opresult123 = callmethodChecked(var_startpos, "==", [1], var_endpos);
    if (Grace_isTrue(opresult123)) {
      var call124 = callmethodChecked(var_startpos, "asString", [0]);
      if120 = call124;
    } else {
      var string125 = new GraceString("");
      var string128 = new GraceString("-");
      var string131 = new GraceString("");
      var opresult133 = callmethodChecked(string131, "++", [1], var_startpos);
      var opresult135 = callmethodChecked(opresult133, "++", [1], string128);
      var opresult137 = callmethodChecked(opresult135, "++", [1], var_endpos);
      var opresult139 = callmethodChecked(opresult137, "++", [1], string125);
      if120 = opresult139;
    }
    var var_loc = if120;
    setLineNumber(349);    // compilenode string
    var string140 = new GraceString("----");
    var var_arr = string140;
    setLineNumber(350);    // compilenode identifier
    var call141 = callmethodChecked(var_errlinenum, "asString", [0]);
    var call142 = callmethodChecked(call141, "size", [0]);
    var opresult145 = callmethodChecked(var_startpos, "+", [1], call142);
    var opresult148 = callmethodChecked(new GraceNum(2), "..", [1], opresult145);
    var block149 = new GraceBlock(this, 350, 1);
    setLineNumber(1);    // compilenode identifier
    block149.real = function(var___95____95__0) {
      setLineNumber(351);    // compilenode string
      var string150 = new GraceString("-");
      var opresult153 = callmethodChecked(var_arr, "++", [1], string150);
      var_arr = opresult153;
      return GraceDone;
    };
    var call154 = callmethodChecked(var_prelude, "for()do", [1, 1], opresult148, block149);
    setLineNumber(353);    // compilenode identifier
    var opresult157 = callmethodChecked(var_startpos, "..", [1], var_endpos);
    var block158 = new GraceBlock(this, 353, 1);
    setLineNumber(1);    // compilenode identifier
    block158.real = function(var___95____95__1) {
      setLineNumber(354);    // compilenode string
      var string159 = new GraceString("^");
      var opresult162 = callmethodChecked(var_arr, "++", [1], string159);
      var_arr = opresult162;
      return GraceDone;
    };
    var call163 = callmethodChecked(var_prelude, "for()do", [1, 1], opresult157, block158);
    setLineNumber(356);    // compilenode string
    var string164 = new GraceString("");
    var string167 = new GraceString(":");
    var opresult169 = callmethodChecked(string167, "++", [1], var_loc);
    var opresult171 = callmethodChecked(opresult169, "++", [1], string164);
    var call172 = callmethodChecked(var_util, "syntaxError", [6], var_message, var_errlinenum, opresult171, var_arr, GraceFalse, var_suggestions);
    return call172;
  };
  func119.paramCounts = [1, 3, 1];
  this.methods["syntaxError()atRange()withSuggestions"] = func119;
  func119.definitionLine = 347;
  func119.definitionModule = "errormessages";
  setLineNumber(359);    // compilenode method
  var func173 = function(argcv) {    // method error(1)atRange(3)withSuggestions(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_message = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for error (arg list 1) of error(1)atRange(3)withSuggestions(1)"));
    var var_errlinenum = arguments[curarg];
    curarg++;
    var var_startpos = arguments[curarg];
    curarg++;
    var var_endpos = arguments[curarg];
    curarg++;
    if (argcv[1] !== 3)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for atRange (arg list 2) of error(1)atRange(3)withSuggestions(1)"));
    var var_suggestions = arguments[curarg];
    curarg++;
    if (argcv[2] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for withSuggestions (arg list 3) of error(1)atRange(3)withSuggestions(1)"));
    setModuleName("errormessages");
    var if174 = GraceDone;
    setLineNumber(360);    // compilenode identifier
    var opresult177 = callmethodChecked(var_startpos, "==", [1], var_endpos);
    if (Grace_isTrue(opresult177)) {
      var call178 = callmethodChecked(var_startpos, "asString", [0]);
      if174 = call178;
    } else {
      var string179 = new GraceString("");
      var string182 = new GraceString("-");
      var string185 = new GraceString("");
      var opresult187 = callmethodChecked(string185, "++", [1], var_startpos);
      var opresult189 = callmethodChecked(opresult187, "++", [1], string182);
      var opresult191 = callmethodChecked(opresult189, "++", [1], var_endpos);
      var opresult193 = callmethodChecked(opresult191, "++", [1], string179);
      if174 = opresult193;
    }
    var var_loc = if174;
    setLineNumber(361);    // compilenode string
    var string194 = new GraceString("----");
    var var_arr = string194;
    setLineNumber(362);    // compilenode identifier
    var call195 = callmethodChecked(var_errlinenum, "asString", [0]);
    var call196 = callmethodChecked(call195, "size", [0]);
    var opresult199 = callmethodChecked(var_startpos, "+", [1], call196);
    var opresult202 = callmethodChecked(new GraceNum(2), "..", [1], opresult199);
    var block203 = new GraceBlock(this, 362, 1);
    setLineNumber(1);    // compilenode identifier
    block203.real = function(var___95____95__2) {
      setLineNumber(363);    // compilenode string
      var string204 = new GraceString("-");
      var opresult207 = callmethodChecked(var_arr, "++", [1], string204);
      var_arr = opresult207;
      return GraceDone;
    };
    var call208 = callmethodChecked(var_prelude, "for()do", [1, 1], opresult202, block203);
    setLineNumber(365);    // compilenode identifier
    var opresult211 = callmethodChecked(var_startpos, "..", [1], var_endpos);
    var block212 = new GraceBlock(this, 365, 1);
    setLineNumber(1);    // compilenode identifier
    block212.real = function(var___95____95__3) {
      setLineNumber(366);    // compilenode string
      var string213 = new GraceString("^");
      var opresult216 = callmethodChecked(var_arr, "++", [1], string213);
      var_arr = opresult216;
      return GraceDone;
    };
    var call217 = callmethodChecked(var_prelude, "for()do", [1, 1], opresult211, block212);
    setLineNumber(368);    // compilenode string
    var string218 = new GraceString("");
    var string221 = new GraceString(":");
    var opresult223 = callmethodChecked(string221, "++", [1], var_loc);
    var opresult225 = callmethodChecked(opresult223, "++", [1], string218);
    var call226 = callmethodChecked(var_util, "generalError", [6], var_message, var_errlinenum, opresult225, var_arr, GraceFalse, var_suggestions);
    return call226;
  };
  func173.paramCounts = [1, 3, 1];
  this.methods["error()atRange()withSuggestions"] = func173;
  func173.definitionLine = 359;
  func173.definitionModule = "errormessages";
  setLineNumber(371);    // compilenode method
  var func227 = function(argcv) {    // method error(1)atRange(3)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_message = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for error (arg list 1) of error(1)atRange(3)"));
    var var_errlinenum = arguments[curarg];
    curarg++;
    var var_startpos = arguments[curarg];
    curarg++;
    var var_endpos = arguments[curarg];
    curarg++;
    if (argcv[1] !== 3)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for atRange (arg list 2) of error(1)atRange(3)"));
    setModuleName("errormessages");
    setLineNumber(372);    // compilenode array
    var array228 = new PrimitiveGraceList([]);
    onSelf = true;
    var call229 = callmethodChecked(this, "error()atRange()withSuggestions", [1, 3, 1], var_message, var_errlinenum, var_startpos, var_endpos, array228);
    return call229;
  };
  func227.paramCounts = [1, 3];
  this.methods["error()atRange"] = func227;
  func227.definitionLine = 371;
  func227.definitionModule = "errormessages";
  setLineNumber(375);    // compilenode method
  var func230 = function(argcv) {    // method syntaxError(1)atPosition(2)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_message = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for syntaxError (arg list 1) of syntaxError(1)atPosition(2)"));
    var var_errlinenum = arguments[curarg];
    curarg++;
    var var_errpos = arguments[curarg];
    curarg++;
    if (argcv[1] !== 2)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for atPosition (arg list 2) of syntaxError(1)atPosition(2)"));
    setModuleName("errormessages");
    setLineNumber(376);    // compilenode array
    var array231 = new PrimitiveGraceList([]);
    onSelf = true;
    var call232 = callmethodChecked(this, "syntaxError()atPosition()withSuggestions", [1, 2, 1], var_message, var_errlinenum, var_errpos, array231);
    return call232;
  };
  func230.paramCounts = [1, 2];
  this.methods["syntaxError()atPosition"] = func230;
  func230.definitionLine = 375;
  func230.definitionModule = "errormessages";
  setLineNumber(379);    // compilenode method
  var func233 = function(argcv) {    // method error(1)atPosition(2)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_message = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for error (arg list 1) of error(1)atPosition(2)"));
    var var_errlinenum = arguments[curarg];
    curarg++;
    var var_errpos = arguments[curarg];
    curarg++;
    if (argcv[1] !== 2)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for atPosition (arg list 2) of error(1)atPosition(2)"));
    setModuleName("errormessages");
    setLineNumber(380);    // compilenode array
    var array234 = new PrimitiveGraceList([]);
    onSelf = true;
    var call235 = callmethodChecked(this, "error()atPosition()withSuggestions", [1, 2, 1], var_message, var_errlinenum, var_errpos, array234);
    return call235;
  };
  func233.paramCounts = [1, 2];
  this.methods["error()atPosition"] = func233;
  func233.definitionLine = 379;
  func233.definitionModule = "errormessages";
  setLineNumber(383);    // compilenode method
  var func236 = function(argcv) {    // method syntaxError(1)atPosition(2)withSuggestion(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_message = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for syntaxError (arg list 1) of syntaxError(1)atPosition(2)withSuggestion(1)"));
    var var_errlinenum = arguments[curarg];
    curarg++;
    var var_errpos = arguments[curarg];
    curarg++;
    if (argcv[1] !== 2)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for atPosition (arg list 2) of syntaxError(1)atPosition(2)withSuggestion(1)"));
    var var_suggestion__39__ = arguments[curarg];
    curarg++;
    if (argcv[2] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for withSuggestion (arg list 3) of syntaxError(1)atPosition(2)withSuggestion(1)"));
    setModuleName("errormessages");
    setLineNumber(384);    // compilenode identifier
    var array237 = new PrimitiveGraceList([var_suggestion__39__]);
    onSelf = true;
    var call238 = callmethodChecked(this, "syntaxError()atPosition()withSuggestions", [1, 2, 1], var_message, var_errlinenum, var_errpos, array237);
    return call238;
  };
  func236.paramCounts = [1, 2, 1];
  this.methods["syntaxError()atPosition()withSuggestion"] = func236;
  func236.definitionLine = 383;
  func236.definitionModule = "errormessages";
  setLineNumber(387);    // compilenode method
  var func239 = function(argcv) {    // method syntaxError(1)atPosition(2)withSuggestions(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_message = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for syntaxError (arg list 1) of syntaxError(1)atPosition(2)withSuggestions(1)"));
    var var_errlinenum = arguments[curarg];
    curarg++;
    var var_errpos = arguments[curarg];
    curarg++;
    if (argcv[1] !== 2)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for atPosition (arg list 2) of syntaxError(1)atPosition(2)withSuggestions(1)"));
    var var_suggestions = arguments[curarg];
    curarg++;
    if (argcv[2] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for withSuggestions (arg list 3) of syntaxError(1)atPosition(2)withSuggestions(1)"));
    setModuleName("errormessages");
    setLineNumber(388);    // compilenode string
    var string240 = new GraceString("----");
    var var_arr = string240;
    setLineNumber(389);    // compilenode identifier
    var call241 = callmethodChecked(var_errlinenum, "asString", [0]);
    var call242 = callmethodChecked(call241, "size", [0]);
    var opresult245 = callmethodChecked(var_errpos, "+", [1], call242);
    var opresult248 = callmethodChecked(new GraceNum(2), "..", [1], opresult245);
    var block249 = new GraceBlock(this, 389, 1);
    setLineNumber(1);    // compilenode identifier
    block249.real = function(var___95____95__4) {
      setLineNumber(390);    // compilenode string
      var string250 = new GraceString("-");
      var opresult253 = callmethodChecked(var_arr, "++", [1], string250);
      var_arr = opresult253;
      return GraceDone;
    };
    var call254 = callmethodChecked(var_prelude, "for()do", [1, 1], opresult248, block249);
    setLineNumber(392);    // compilenode string
    var string255 = new GraceString("^");
    var opresult258 = callmethodChecked(var_arr, "++", [1], string255);
    var_arr = opresult258;
    setLineNumber(393);    // compilenode string
    var string259 = new GraceString(")");
    var string262 = new GraceString(":(");
    var opresult264 = callmethodChecked(string262, "++", [1], var_errpos);
    var opresult266 = callmethodChecked(opresult264, "++", [1], string259);
    var call267 = callmethodChecked(var_util, "syntaxError", [6], var_message, var_errlinenum, opresult266, var_arr, GraceFalse, var_suggestions);
    return call267;
  };
  func239.paramCounts = [1, 2, 1];
  this.methods["syntaxError()atPosition()withSuggestions"] = func239;
  func239.definitionLine = 387;
  func239.definitionModule = "errormessages";
  setLineNumber(396);    // compilenode method
  var func268 = function(argcv) {    // method error(1)atPosition(2)withSuggestions(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_message = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for error (arg list 1) of error(1)atPosition(2)withSuggestions(1)"));
    var var_errlinenum = arguments[curarg];
    curarg++;
    var var_errpos = arguments[curarg];
    curarg++;
    if (argcv[1] !== 2)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for atPosition (arg list 2) of error(1)atPosition(2)withSuggestions(1)"));
    var var_suggestions = arguments[curarg];
    curarg++;
    if (argcv[2] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for withSuggestions (arg list 3) of error(1)atPosition(2)withSuggestions(1)"));
    setModuleName("errormessages");
    setLineNumber(398);    // compilenode string
    var string269 = new GraceString("----");
    var var_arr = string269;
    setLineNumber(399);    // compilenode identifier
    var call270 = callmethodChecked(var_errlinenum, "asString", [0]);
    var call271 = callmethodChecked(call270, "size", [0]);
    var opresult274 = callmethodChecked(var_errpos, "+", [1], call271);
    var opresult277 = callmethodChecked(new GraceNum(2), "..", [1], opresult274);
    var block278 = new GraceBlock(this, 399, 1);
    setLineNumber(1);    // compilenode identifier
    block278.real = function(var___95____95__5) {
      setLineNumber(400);    // compilenode string
      var string279 = new GraceString("-");
      var opresult282 = callmethodChecked(var_arr, "++", [1], string279);
      var_arr = opresult282;
      return GraceDone;
    };
    var call283 = callmethodChecked(var_prelude, "for()do", [1, 1], opresult277, block278);
    setLineNumber(402);    // compilenode string
    var string284 = new GraceString("^");
    var opresult287 = callmethodChecked(var_arr, "++", [1], string284);
    var_arr = opresult287;
    setLineNumber(403);    // compilenode string
    var string288 = new GraceString(")");
    var string291 = new GraceString(":(");
    var opresult293 = callmethodChecked(string291, "++", [1], var_errpos);
    var opresult295 = callmethodChecked(opresult293, "++", [1], string288);
    var call296 = callmethodChecked(var_util, "generalError", [6], var_message, var_errlinenum, opresult295, var_arr, GraceFalse, var_suggestions);
    return call296;
  };
  func268.paramCounts = [1, 2, 1];
  this.methods["error()atPosition()withSuggestions"] = func268;
  func268.definitionLine = 396;
  func268.definitionModule = "errormessages";
  setLineNumber(406);    // compilenode method
  var func297 = function(argcv) {    // method error(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_message = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for error(1)"));
    setModuleName("errormessages");
    setLineNumber(407);    // compilenode string
    var string298 = new GraceString("");
    var string299 = new GraceString("");
    var array300 = new PrimitiveGraceList([]);
    var call301 = callmethodChecked(var_util, "generalError", [6], var_message, new GraceNum(0), string298, string299, GraceFalse, array300);
    return call301;
  };
  func297.paramCounts = [1];
  this.methods["error"] = func297;
  func297.definitionLine = 406;
  func297.definitionModule = "errormessages";
  setLineNumber(410);    // compilenode method
  var func302 = function(argcv) {    // method error(1)atLine(1)withSuggestions(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_message = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for error (arg list 1) of error(1)atLine(1)withSuggestions(1)"));
    var var_errlinenum = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for atLine (arg list 2) of error(1)atLine(1)withSuggestions(1)"));
    var var_suggestions = arguments[curarg];
    curarg++;
    if (argcv[2] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for withSuggestions (arg list 3) of error(1)atLine(1)withSuggestions(1)"));
    setModuleName("errormessages");
    setLineNumber(411);    // compilenode string
    var string303 = new GraceString("----");
    var var_arr = string303;
    setLineNumber(412);    // compilenode identifier
    var call304 = callmethodChecked(var_errlinenum, "asString", [0]);
    var call305 = callmethodChecked(call304, "size", [0]);
    var opresult308 = callmethodChecked(new GraceNum(1), "..", [1], call305);
    var block309 = new GraceBlock(this, 412, 1);
    setLineNumber(1);    // compilenode identifier
    block309.real = function(var___95____95__6) {
      setLineNumber(413);    // compilenode string
      var string310 = new GraceString("-");
      var opresult313 = callmethodChecked(var_arr, "++", [1], string310);
      var_arr = opresult313;
      return GraceDone;
    };
    var call314 = callmethodChecked(var_prelude, "for()do", [1, 1], opresult308, block309);
    setLineNumber(415);    // compilenode identifier
    var call315 = callmethodChecked(var_util, "lines", [0]);
    var call316 = callmethodChecked(call315, "at", [1], var_errlinenum);
    var call317 = callmethodChecked(call316, "size", [0]);
    var opresult320 = callmethodChecked(new GraceNum(1), "..", [1], call317);
    var block321 = new GraceBlock(this, 415, 1);
    setLineNumber(1);    // compilenode identifier
    block321.real = function(var___95____95__7) {
      setLineNumber(416);    // compilenode string
      var string322 = new GraceString("^");
      var opresult325 = callmethodChecked(var_arr, "++", [1], string322);
      var_arr = opresult325;
      return GraceDone;
    };
    var call326 = callmethodChecked(var_prelude, "for()do", [1, 1], opresult320, block321);
    setLineNumber(418);    // compilenode string
    var string327 = new GraceString("");
    var call328 = callmethodChecked(var_util, "generalError", [6], var_message, var_errlinenum, string327, var_arr, GraceFalse, var_suggestions);
    return call328;
  };
  func302.paramCounts = [1, 1, 1];
  this.methods["error()atLine()withSuggestions"] = func302;
  func302.definitionLine = 410;
  func302.definitionModule = "errormessages";
  setLineNumber(421);    // compilenode method
  var func329 = function(argcv) {    // method error(1)atLine(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_message = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for error (arg list 1) of error(1)atLine(1)"));
    var var_errlinenum = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for atLine (arg list 2) of error(1)atLine(1)"));
    setModuleName("errormessages");
    setLineNumber(422);    // compilenode array
    var array330 = new PrimitiveGraceList([]);
    onSelf = true;
    var call331 = callmethodChecked(this, "error()atLine()withSuggestions", [1, 1, 1], var_message, var_errlinenum, array330);
    return call331;
  };
  func329.paramCounts = [1, 1];
  this.methods["error()atLine"] = func329;
  func329.definitionLine = 421;
  func329.definitionModule = "errormessages";
  setLineNumber(425);    // compilenode method
  var func332 = function(argcv) {    // method syntaxError(1)atLine(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_message = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for syntaxError (arg list 1) of syntaxError(1)atLine(1)"));
    var var_errlinenum = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for atLine (arg list 2) of syntaxError(1)atLine(1)"));
    setModuleName("errormessages");
    setLineNumber(426);    // compilenode array
    var array333 = new PrimitiveGraceList([]);
    onSelf = true;
    var call334 = callmethodChecked(this, "syntaxError()atLine()withSuggestions", [1, 1, 1], var_message, var_errlinenum, array333);
    return call334;
  };
  func332.paramCounts = [1, 1];
  this.methods["syntaxError()atLine"] = func332;
  func332.definitionLine = 425;
  func332.definitionModule = "errormessages";
  setLineNumber(429);    // compilenode method
  var func335 = function(argcv) {    // method syntaxError(1)atLine(1)withSuggestion(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_message = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for syntaxError (arg list 1) of syntaxError(1)atLine(1)withSuggestion(1)"));
    var var_errlinenum = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for atLine (arg list 2) of syntaxError(1)atLine(1)withSuggestion(1)"));
    var var_suggestion__39__ = arguments[curarg];
    curarg++;
    if (argcv[2] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for withSuggestion (arg list 3) of syntaxError(1)atLine(1)withSuggestion(1)"));
    setModuleName("errormessages");
    setLineNumber(430);    // compilenode identifier
    var array336 = new PrimitiveGraceList([var_suggestion__39__]);
    onSelf = true;
    var call337 = callmethodChecked(this, "syntaxError()atLine()withSuggestions", [1, 1, 1], var_message, var_errlinenum, array336);
    return call337;
  };
  func335.paramCounts = [1, 1, 1];
  this.methods["syntaxError()atLine()withSuggestion"] = func335;
  func335.definitionLine = 429;
  func335.definitionModule = "errormessages";
  setLineNumber(433);    // compilenode method
  var func338 = function(argcv) {    // method syntaxError(1)atLine(1)withSuggestions(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_message = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for syntaxError (arg list 1) of syntaxError(1)atLine(1)withSuggestions(1)"));
    var var_errlinenum = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for atLine (arg list 2) of syntaxError(1)atLine(1)withSuggestions(1)"));
    var var_suggestions = arguments[curarg];
    curarg++;
    if (argcv[2] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for withSuggestions (arg list 3) of syntaxError(1)atLine(1)withSuggestions(1)"));
    setModuleName("errormessages");
    setLineNumber(434);    // compilenode string
    var string339 = new GraceString("----");
    var var_arr = string339;
    setLineNumber(435);    // compilenode identifier
    var call340 = callmethodChecked(var_errlinenum, "asString", [0]);
    var call341 = callmethodChecked(call340, "size", [0]);
    var opresult344 = callmethodChecked(new GraceNum(1), "..", [1], call341);
    var block345 = new GraceBlock(this, 435, 1);
    setLineNumber(1);    // compilenode identifier
    block345.real = function(var___95____95__8) {
      setLineNumber(436);    // compilenode string
      var string346 = new GraceString("-");
      var opresult349 = callmethodChecked(var_arr, "++", [1], string346);
      var_arr = opresult349;
      return GraceDone;
    };
    var call350 = callmethodChecked(var_prelude, "for()do", [1, 1], opresult344, block345);
    setLineNumber(438);    // compilenode identifier
    var call351 = callmethodChecked(var_util, "lines", [0]);
    var call352 = callmethodChecked(call351, "at", [1], var_errlinenum);
    var call353 = callmethodChecked(call352, "size", [0]);
    var opresult356 = callmethodChecked(new GraceNum(1), "..", [1], call353);
    var block357 = new GraceBlock(this, 438, 1);
    setLineNumber(1);    // compilenode identifier
    block357.real = function(var___95____95__9) {
      setLineNumber(439);    // compilenode string
      var string358 = new GraceString("^");
      var opresult361 = callmethodChecked(var_arr, "++", [1], string358);
      var_arr = opresult361;
      return GraceDone;
    };
    var call362 = callmethodChecked(var_prelude, "for()do", [1, 1], opresult356, block357);
    setLineNumber(441);    // compilenode string
    var string363 = new GraceString("");
    var call364 = callmethodChecked(var_util, "syntaxError", [6], var_message, var_errlinenum, string363, var_arr, GraceFalse, var_suggestions);
    return call364;
  };
  func338.paramCounts = [1, 1, 1];
  this.methods["syntaxError()atLine()withSuggestions"] = func338;
  func338.definitionLine = 433;
  func338.definitionModule = "errormessages";
  setLineNumber(13);    // compilenode object
  var obj365 = Grace_allocObject(GraceObject, "suggestion");
  obj365.definitionModule = "errormessages";
  obj365.definitionLine = 13;
  obj365.outer = this;
  var reader_errormessages_outer366 = function() {
    return this.outer;
  };
  obj365.methods["outer"] = reader_errormessages_outer366;
  var obj_init_365 = function() {
    var origSuperDepth = superDepth;
    superDepth = obj365;
    var func367 = function(argcv) {    // method new
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for new"));
      setModuleName("errormessages");
      setLineNumber(14);    // compilenode object
      var obj368 = Grace_allocObject(GraceObject, "suggestion.new");
      obj368.definitionModule = "errormessages";
      obj368.definitionLine = 14;
      obj368.outer = this;
      var reader_errormessages_outer369 = function() {
        return this.outer;
      };
      obj368.methods["outer"] = reader_errormessages_outer369;
      var obj_init_368 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj368;
        var func370 = function(argcv) {    // method replaceRange(2)with(1)onLine(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_start = arguments[curarg];
          curarg++;
          var var_end = arguments[curarg];
          curarg++;
          if (argcv[0] !== 2)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for replaceRange (arg list 1) of replaceRange(2)with(1)onLine(1)"));
          var var_s = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for with (arg list 2) of replaceRange(2)with(1)onLine(1)"));
          var var_lineNumber = arguments[curarg];
          curarg++;
          if (argcv[2] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onLine (arg list 3) of replaceRange(2)with(1)onLine(1)"));
          setModuleName("errormessages");
          setLineNumber(24);    // compilenode identifier
          onSelf = true;
          var call371 = callmethodChecked(this, "getLine", [1], var_lineNumber);
          var var_line = call371;
          var if372 = GraceDone;
          setLineNumber(25);    // compilenode identifier
          var opresult375 = callmethodChecked(var_start, "==", [1], new GraceNum(1));
          if (Grace_isTrue(opresult375)) {
            setLineNumber(26);    // compilenode identifier
            var opresult378 = callmethodChecked(var_end, "+", [1], new GraceNum(1));
            var call379 = callmethodChecked(var_line, "size", [0]);
            var call380 = callmethodChecked(var_line, "substringFrom()to", [1, 1], opresult378, call379);
            var opresult383 = callmethodChecked(var_s, "++", [1], call380);
            onSelf = true;
            var call384 = callmethodChecked(this, "addLine", [2], var_lineNumber, opresult383);
            if372 = call384;
          } else {
            setLineNumber(29);    // compilenode identifier
            var opresult387 = callmethodChecked(var_end, "+", [1], new GraceNum(1));
            var call388 = callmethodChecked(var_line, "size", [0]);
            var call389 = callmethodChecked(var_line, "substringFrom()to", [1, 1], opresult387, call388);
            setLineNumber(28);    // compilenode identifier
            var diff394 = callmethodChecked(var_start, "-", [1], new GraceNum(1));
            var call395 = callmethodChecked(var_line, "substringFrom()to", [1, 1], new GraceNum(1), diff394);
            var opresult397 = callmethodChecked(call395, "++", [1], var_s);
            var opresult399 = callmethodChecked(opresult397, "++", [1], call389);
            onSelf = true;
            var call400 = callmethodChecked(this, "addLine", [2], var_lineNumber, opresult399);
            if372 = call400;
          }
          return if372;
        };
        func370.paramCounts = [2, 1, 1];
        obj368.methods["replaceRange()with()onLine"] = func370;
        func370.definitionLine = 23;
        func370.definitionModule = "errormessages";
        var func401 = function(argcv) {    // method replaceChar(1)with(1)onLine(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_pos = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for replaceChar (arg list 1) of replaceChar(1)with(1)onLine(1)"));
          var var_s = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for with (arg list 2) of replaceChar(1)with(1)onLine(1)"));
          var var_lineNumber = arguments[curarg];
          curarg++;
          if (argcv[2] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onLine (arg list 3) of replaceChar(1)with(1)onLine(1)"));
          setModuleName("errormessages");
          setLineNumber(34);    // compilenode identifier
          onSelf = true;
          var call402 = callmethodChecked(this, "replaceRange()with()onLine", [2, 1, 1], var_pos, var_pos, var_s, var_lineNumber);
          return call402;
        };
        func401.paramCounts = [1, 1, 1];
        obj368.methods["replaceChar()with()onLine"] = func401;
        func401.definitionLine = 33;
        func401.definitionModule = "errormessages";
        var func403 = function(argcv) {    // method replaceUntil(1)with(1)onLine(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_until = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for replaceUntil (arg list 1) of replaceUntil(1)with(1)onLine(1)"));
          var var_s = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for with (arg list 2) of replaceUntil(1)with(1)onLine(1)"));
          var var_lineNumber = arguments[curarg];
          curarg++;
          if (argcv[2] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onLine (arg list 3) of replaceUntil(1)with(1)onLine(1)"));
          setModuleName("errormessages");
          setLineNumber(38);    // compilenode identifier
          onSelf = true;
          var call404 = callmethodChecked(this, "getLine", [1], var_lineNumber);
          var var_line = call404;
          setLineNumber(39);    // compilenode identifier
          var call405 = callmethodChecked(var_until, "size", [0]);
          var var_len = call405;
          setLineNumber(40);    // compilenode identifier
          var call406 = callmethodChecked(var_line, "size", [0]);
          var opresult409 = callmethodChecked(new GraceNum(1), "..", [1], call406);
          var block410 = new GraceBlock(this, 40, 1);
          setLineNumber(1);    // compilenode identifier
          block410.real = function(var_i) {
            var if411 = GraceDone;
            setLineNumber(41);    // compilenode identifier
            var opresult416 = callmethodChecked(var_i, "+", [1], var_len);
            var diff418 = callmethodChecked(opresult416, "-", [1], new GraceNum(1));
            var call419 = callmethodChecked(var_line, "substringFrom()to", [1, 1], var_i, diff418);
            var opresult421 = callmethodChecked(call419, "==", [1], var_until);
            if (Grace_isTrue(opresult421)) {
              setLineNumber(42);    // compilenode identifier
              var opresult425 = callmethodChecked(var_i, "+", [1], var_len);
              var diff427 = callmethodChecked(opresult425, "-", [1], new GraceNum(1));
              onSelf = true;
              var call428 = callmethodChecked(this, "replaceRange()with()onLine", [2, 1, 1], new GraceNum(1), diff427, var_s, var_lineNumber);
              setLineNumber(43);    // compilenode identifier
              throw new ReturnException(GraceTrue, returnTarget);
            }
            return if411;
          };
          var call429 = callmethodChecked(var_prelude, "for()do", [1, 1], opresult409, block410);
          setLineNumber(46);    // compilenode identifier
          return GraceFalse;
        };
        func403.paramCounts = [1, 1, 1];
        obj368.methods["replaceUntil()with()onLine"] = func403;
        func403.definitionLine = 37;
        func403.definitionModule = "errormessages";
        var func430 = function(argcv) {    // method deleteRange(2)onLine(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_start = arguments[curarg];
          curarg++;
          var var_end = arguments[curarg];
          curarg++;
          if (argcv[0] !== 2)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for deleteRange (arg list 1) of deleteRange(2)onLine(1)"));
          var var_lineNumber = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onLine (arg list 2) of deleteRange(2)onLine(1)"));
          setModuleName("errormessages");
          setLineNumber(50);    // compilenode identifier
          var var_start__39__ = var_start;
          setLineNumber(51);    // compilenode identifier
          onSelf = true;
          var call431 = callmethodChecked(this, "getLine", [1], var_lineNumber);
          var var_line = call431;
          var if432 = GraceDone;
          setLineNumber(52);    // compilenode identifier
          var call433 = callmethodChecked(var_line, "size", [0]);
          var opresult436 = callmethodChecked(var_end, "==", [1], call433);
          var opresult440 = callmethodChecked(var_start__39__, ">", [1], new GraceNum(1));
          var opresult442 = callmethodChecked(opresult440, "&&", [1], opresult436);
          if (Grace_isTrue(opresult442)) {
            setLineNumber(54);    // compilenode identifier
            var var_indent = GraceTrue;
            setLineNumber(55);    // compilenode identifier
            var diff445 = callmethodChecked(var_start__39__, "-", [1], new GraceNum(1));
            var opresult448 = callmethodChecked(new GraceNum(1), "..", [1], diff445);
            var block449 = new GraceBlock(this, 55, 1);
            setLineNumber(1);    // compilenode identifier
            block449.real = function(var_i) {
              var if450 = GraceDone;
              setLineNumber(56);    // compilenode string
              var string451 = new GraceString(" ");
              var call453 = callmethodChecked(var_line, "at", [1], var_i);
              var opresult455 = callmethodChecked(call453, "\u2260", [1], string451);
              if (Grace_isTrue(opresult455)) {
                setLineNumber(57);    // compilenode identifier
                var_indent = GraceFalse;
                if450 = GraceDone;
              }
              return if450;
            };
            var call456 = callmethodChecked(var_prelude, "for()do", [1, 1], opresult448, block449);
            var if457 = GraceDone;
            setLineNumber(60);    // compilenode identifier
            var opresult460 = callmethodChecked(var_indent, "==", [1], GraceTrue);
            if (Grace_isTrue(opresult460)) {
              setLineNumber(61);    // compilenode num
              var_start__39__ = new GraceNum(1);
              if457 = GraceDone;
            }
            if432 = if457;
          }
          setLineNumber(64);    // compilenode string
          var string461 = new GraceString("");
          onSelf = true;
          var call462 = callmethodChecked(this, "replaceRange()with()onLine", [2, 1, 1], var_start__39__, var_end, string461, var_lineNumber);
          return call462;
        };
        func430.paramCounts = [2, 1];
        obj368.methods["deleteRange()onLine"] = func430;
        func430.definitionLine = 49;
        func430.definitionModule = "errormessages";
        var func463 = function(argcv) {    // method deleteChar(1)onLine(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_pos = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for deleteChar (arg list 1) of deleteChar(1)onLine(1)"));
          var var_lineNumber = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onLine (arg list 2) of deleteChar(1)onLine(1)"));
          setModuleName("errormessages");
          setLineNumber(68);    // compilenode string
          var string464 = new GraceString("");
          onSelf = true;
          var call465 = callmethodChecked(this, "replaceRange()with()onLine", [2, 1, 1], var_pos, var_pos, string464, var_lineNumber);
          return call465;
        };
        func463.paramCounts = [1, 1];
        obj368.methods["deleteChar()onLine"] = func463;
        func463.definitionLine = 67;
        func463.definitionModule = "errormessages";
        var func466 = function(argcv) {    // method append(1)onLine(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_s = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for append (arg list 1) of append(1)onLine(1)"));
          var var_lineNumber = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onLine (arg list 2) of append(1)onLine(1)"));
          setModuleName("errormessages");
          setLineNumber(72);    // compilenode identifier
          onSelf = true;
          var call467 = callmethodChecked(this, "getLine", [1], var_lineNumber);
          var var_line = call467;
          setLineNumber(73);    // compilenode identifier
          var opresult470 = callmethodChecked(var_line, "++", [1], var_s);
          onSelf = true;
          var call471 = callmethodChecked(this, "addLine", [2], var_lineNumber, opresult470);
          return call471;
        };
        func466.paramCounts = [1, 1];
        obj368.methods["append()onLine"] = func466;
        func466.definitionLine = 71;
        func466.definitionModule = "errormessages";
        var func472 = function(argcv) {    // method insert(1)atPosition(1)onLine(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_s = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for insert (arg list 1) of insert(1)atPosition(1)onLine(1)"));
          var var_pos = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for atPosition (arg list 2) of insert(1)atPosition(1)onLine(1)"));
          var var_lineNumber = arguments[curarg];
          curarg++;
          if (argcv[2] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onLine (arg list 3) of insert(1)atPosition(1)onLine(1)"));
          setModuleName("errormessages");
          setLineNumber(77);    // compilenode identifier
          onSelf = true;
          var call473 = callmethodChecked(this, "getLine", [1], var_lineNumber);
          var var_line = call473;
          var if474 = GraceDone;
          setLineNumber(78);    // compilenode identifier
          var opresult477 = callmethodChecked(var_pos, "==", [1], new GraceNum(1));
          if (Grace_isTrue(opresult477)) {
            setLineNumber(79);    // compilenode identifier
            var opresult480 = callmethodChecked(var_s, "++", [1], var_line);
            onSelf = true;
            var call481 = callmethodChecked(this, "addLine", [2], var_lineNumber, opresult480);
            if474 = call481;
          } else {
            setLineNumber(82);    // compilenode identifier
            var call482 = callmethodChecked(var_line, "size", [0]);
            var call483 = callmethodChecked(var_line, "substringFrom()to", [1, 1], var_pos, call482);
            setLineNumber(81);    // compilenode identifier
            var diff488 = callmethodChecked(var_pos, "-", [1], new GraceNum(1));
            var call489 = callmethodChecked(var_line, "substringFrom()to", [1, 1], new GraceNum(1), diff488);
            var opresult491 = callmethodChecked(call489, "++", [1], var_s);
            var opresult493 = callmethodChecked(opresult491, "++", [1], call483);
            onSelf = true;
            var call494 = callmethodChecked(this, "addLine", [2], var_lineNumber, opresult493);
            if474 = call494;
          }
          return if474;
        };
        func472.paramCounts = [1, 1, 1];
        obj368.methods["insert()atPosition()onLine"] = func472;
        func472.definitionLine = 76;
        func472.definitionModule = "errormessages";
        var func495 = function(argcv) {    // method getTokenStart(1)includeLeadingSpace(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_token = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for getTokenStart (arg list 1) of getTokenStart(1)includeLeadingSpace(1)"));
          var var_includeLeading = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for includeLeadingSpace (arg list 2) of getTokenStart(1)includeLeadingSpace(1)"));
          setModuleName("errormessages");
          setLineNumber(91);    // compilenode identifier
          var call496 = callmethodChecked(var_token, "linePos", [0]);
          var var_start = call496;
          var if497 = GraceDone;
          setLineNumber(93);    // compilenode identifier
          var opresult500 = callmethodChecked(var_includeLeading, "==", [1], GraceTrue);
          if (Grace_isTrue(opresult500)) {
            var if501 = GraceDone;
            setLineNumber(94);    // compilenode block
            var block502 = new GraceBlock(this, 94, 0);
            block502.real = function() {
              var call503 = callmethodChecked(var_token, "line", [0]);
              var call505 = callmethodChecked(var_token, "prev", [0]);
              var call506 = callmethodChecked(call505, "line", [0]);
              var opresult508 = callmethodChecked(call506, "==", [1], call503);
              return opresult508;
            };
            var call511 = callmethodChecked(var_token, "prev", [0]);
            var opresult513 = callmethodChecked(call511, "\u2260", [1], GraceFalse);
            var opresult515 = callmethodChecked(opresult513, "&&", [1], block502);
            if (Grace_isTrue(opresult515)) {
              setLineNumber(95);    // compilenode identifier
              var call516 = callmethodChecked(var_token, "prev", [0]);
              var call517 = callmethodChecked(call516, "size", [0]);
              var call519 = callmethodChecked(var_token, "prev", [0]);
              var call520 = callmethodChecked(call519, "linePos", [0]);
              var opresult522 = callmethodChecked(call520, "+", [1], call517);
              var_start = opresult522;
              if501 = GraceDone;
            }
            if497 = if501;
          }
          var if523 = GraceDone;
          setLineNumber(99);    // compilenode identifier
          var call525 = callmethodChecked(var_token, "indent", [0]);
          var opresult527 = callmethodChecked(call525, "+", [1], new GraceNum(1));
          var call529 = callmethodChecked(var_token, "linePos", [0]);
          var opresult531 = callmethodChecked(call529, "==", [1], opresult527);
          if (Grace_isTrue(opresult531)) {
            var if532 = GraceDone;
            setLineNumber(100);    // compilenode block
            var block533 = new GraceBlock(this, 100, 0);
            block533.real = function() {
              var call534 = callmethodChecked(var_token, "line", [0]);
              var call536 = callmethodChecked(var_token, "next", [0]);
              var call537 = callmethodChecked(call536, "line", [0]);
              var opresult539 = callmethodChecked(call537, "\u2260", [1], call534);
              return opresult539;
            };
            var call542 = callmethodChecked(var_token, "next", [0]);
            var opresult544 = callmethodChecked(call542, "==", [1], GraceFalse);
            var opresult546 = callmethodChecked(opresult544, "||", [1], block533);
            if (Grace_isTrue(opresult546)) {
              setLineNumber(101);    // compilenode num
              var_start = new GraceNum(1);
              if532 = GraceDone;
            }
            if523 = if532;
          }
          setLineNumber(104);    // compilenode identifier
          return var_start;
        };
        func495.paramCounts = [1, 1];
        obj368.methods["getTokenStart()includeLeadingSpace"] = func495;
        func495.definitionLine = 90;
        func495.definitionModule = "errormessages";
        var func547 = function(argcv) {    // method getTokenEnd(1)includeTrailingSpace(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_token = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for getTokenEnd (arg list 1) of getTokenEnd(1)includeTrailingSpace(1)"));
          var var_includeTrailing = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for includeTrailingSpace (arg list 2) of getTokenEnd(1)includeTrailingSpace(1)"));
          setModuleName("errormessages");
          setLineNumber(108);    // compilenode identifier
          var call549 = callmethodChecked(var_token, "size", [0]);
          var call551 = callmethodChecked(var_token, "linePos", [0]);
          var opresult553 = callmethodChecked(call551, "+", [1], call549);
          var diff555 = callmethodChecked(opresult553, "-", [1], new GraceNum(1));
          var var_end = diff555;
          var if556 = GraceDone;
          setLineNumber(110);    // compilenode identifier
          var opresult559 = callmethodChecked(var_includeTrailing, "==", [1], GraceTrue);
          if (Grace_isTrue(opresult559)) {
            var if560 = GraceDone;
            setLineNumber(111);    // compilenode block
            var block561 = new GraceBlock(this, 111, 0);
            block561.real = function() {
              var call562 = callmethodChecked(var_token, "line", [0]);
              var call564 = callmethodChecked(var_token, "next", [0]);
              var call565 = callmethodChecked(call564, "line", [0]);
              var opresult567 = callmethodChecked(call565, "==", [1], call562);
              return opresult567;
            };
            var call570 = callmethodChecked(var_token, "next", [0]);
            var opresult572 = callmethodChecked(call570, "\u2260", [1], GraceFalse);
            var opresult574 = callmethodChecked(opresult572, "&&", [1], block561);
            if (Grace_isTrue(opresult574)) {
              setLineNumber(112);    // compilenode identifier
              var call576 = callmethodChecked(var_token, "next", [0]);
              var call577 = callmethodChecked(call576, "linePos", [0]);
              var diff579 = callmethodChecked(call577, "-", [1], new GraceNum(1));
              var_end = diff579;
              if560 = GraceDone;
            } else {
              setLineNumber(114);    // compilenode identifier
              var call580 = callmethodChecked(var_token, "line", [0]);
              onSelf = true;
              var call581 = callmethodChecked(this, "getLine", [1], call580);
              var call582 = callmethodChecked(call581, "size", [0]);
              var_end = call582;
              if560 = GraceDone;
            }
            if556 = if560;
          }
          setLineNumber(117);    // compilenode identifier
          return var_end;
        };
        func547.paramCounts = [1, 1];
        obj368.methods["getTokenEnd()includeTrailingSpace"] = func547;
        func547.definitionLine = 107;
        func547.definitionModule = "errormessages";
        var func583 = function(argcv) {    // method replaceToken(1)leading(1)trailing(1)with(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_token = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for replaceToken (arg list 1) of replaceToken(1)leading(1)trailing(1)with(1)"));
          var var_replaceLeading = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for leading (arg list 2) of replaceToken(1)leading(1)trailing(1)with(1)"));
          var var_replaceTrailing = arguments[curarg];
          curarg++;
          if (argcv[2] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for trailing (arg list 3) of replaceToken(1)leading(1)trailing(1)with(1)"));
          var var_s = arguments[curarg];
          curarg++;
          if (argcv[3] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for with (arg list 4) of replaceToken(1)leading(1)trailing(1)with(1)"));
          setModuleName("errormessages");
          setLineNumber(121);    // compilenode identifier
          onSelf = true;
          var call584 = callmethodChecked(this, "getTokenStart()includeLeadingSpace", [1, 1], var_token, var_replaceLeading);
          var var_start = call584;
          setLineNumber(122);    // compilenode identifier
          onSelf = true;
          var call585 = callmethodChecked(this, "getTokenEnd()includeTrailingSpace", [1, 1], var_token, var_replaceTrailing);
          var var_end = call585;
          setLineNumber(123);    // compilenode identifier
          var call586 = callmethodChecked(var_token, "line", [0]);
          onSelf = true;
          var call587 = callmethodChecked(this, "replaceRange()with()onLine", [2, 1, 1], var_start, var_end, var_s, call586);
          return call587;
        };
        func583.paramCounts = [1, 1, 1, 1];
        obj368.methods["replaceToken()leading()trailing()with"] = func583;
        func583.definitionLine = 120;
        func583.definitionModule = "errormessages";
        var func588 = function(argcv) {    // method replaceToken(1)with(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_token = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for replaceToken (arg list 1) of replaceToken(1)with(1)"));
          var var_s = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for with (arg list 2) of replaceToken(1)with(1)"));
          setModuleName("errormessages");
          setLineNumber(127);    // compilenode identifier
          onSelf = true;
          var call589 = callmethodChecked(this, "replaceToken()leading()trailing()with", [1, 1, 1, 1], var_token, GraceFalse, GraceFalse, var_s);
          return call589;
        };
        func588.paramCounts = [1, 1];
        obj368.methods["replaceToken()with"] = func588;
        func588.definitionLine = 126;
        func588.definitionModule = "errormessages";
        var func590 = function(argcv) {    // method replaceTokenRange(2)leading(1)trailing(1)with(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_start = arguments[curarg];
          curarg++;
          var var_end = arguments[curarg];
          curarg++;
          if (argcv[0] !== 2)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for replaceTokenRange (arg list 1) of replaceTokenRange(2)leading(1)trailing(1)with(1)"));
          var var_replaceLeading = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for leading (arg list 2) of replaceTokenRange(2)leading(1)trailing(1)with(1)"));
          var var_replaceTrailing = arguments[curarg];
          curarg++;
          if (argcv[2] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for trailing (arg list 3) of replaceTokenRange(2)leading(1)trailing(1)with(1)"));
          var var_s = arguments[curarg];
          curarg++;
          if (argcv[3] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for with (arg list 4) of replaceTokenRange(2)leading(1)trailing(1)with(1)"));
          setModuleName("errormessages");
          var if591 = GraceDone;
          setLineNumber(131);    // compilenode identifier
          var opresult594 = callmethodChecked(var_start, "==", [1], var_end);
          if (Grace_isTrue(opresult594)) {
            setLineNumber(132);    // compilenode identifier
            onSelf = true;
            var call595 = callmethodChecked(this, "replaceToken()leading()trailing()with", [1, 1, 1, 1], var_start, var_replaceLeading, var_replaceTrailing, var_s);
            if591 = call595;
          } else {
            setLineNumber(135);    // compilenode identifier
            onSelf = true;
            var call596 = callmethodChecked(this, "getTokenStart()includeLeadingSpace", [1, 1], var_start, var_replaceLeading);
            var var_insertPos = call596;
            setLineNumber(136);    // compilenode identifier
            var call597 = callmethodChecked(var_start, "indent", [0]);
            var call598 = callmethodChecked(var_start, "line", [0]);
            onSelf = true;
            var call599 = callmethodChecked(this, "getLine", [1], call598);
            var call600 = callmethodChecked(call599, "substringFrom()to", [1, 1], new GraceNum(1), call597);
            var var_indent = call600;
            setLineNumber(137);    // compilenode identifier
            onSelf = true;
            var call601 = callmethodChecked(this, "deleteTokenRange()leading()trailing", [2, 1, 1], var_start, var_end, var_replaceLeading, var_replaceTrailing);
            var if602 = GraceDone;
            setLineNumber(139);    // compilenode string
            var string603 = new GraceString("");
            var call605 = callmethodChecked(var_start, "line", [0]);
            onSelf = true;
            var call606 = callmethodChecked(this, "getLine", [1], call605);
            var opresult608 = callmethodChecked(call606, "==", [1], string603);
            if (Grace_isTrue(opresult608)) {
              setLineNumber(140);    // compilenode identifier
              var opresult611 = callmethodChecked(var_indent, "++", [1], var_s);
              var call612 = callmethodChecked(var_start, "line", [0]);
              onSelf = true;
              var call613 = callmethodChecked(this, "insert()atPosition()onLine", [1, 1, 1], opresult611, var_insertPos, call612);
              if602 = call613;
            } else {
              setLineNumber(142);    // compilenode identifier
              var call614 = callmethodChecked(var_start, "line", [0]);
              onSelf = true;
              var call615 = callmethodChecked(this, "insert()atPosition()onLine", [1, 1, 1], var_s, var_insertPos, call614);
              if602 = call615;
            }
            if591 = if602;
          }
          return if591;
        };
        func590.paramCounts = [2, 1, 1, 1];
        obj368.methods["replaceTokenRange()leading()trailing()with"] = func590;
        func590.definitionLine = 130;
        func590.definitionModule = "errormessages";
        var func616 = function(argcv) {    // method replaceTokenRange(2)with(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_start = arguments[curarg];
          curarg++;
          var var_end = arguments[curarg];
          curarg++;
          if (argcv[0] !== 2)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for replaceTokenRange (arg list 1) of replaceTokenRange(2)with(1)"));
          var var_s = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for with (arg list 2) of replaceTokenRange(2)with(1)"));
          setModuleName("errormessages");
          setLineNumber(148);    // compilenode identifier
          onSelf = true;
          var call617 = callmethodChecked(this, "replaceTokenRange()leading()trailing()with", [2, 1, 1, 1], var_start, var_end, GraceFalse, GraceFalse, var_s);
          return call617;
        };
        func616.paramCounts = [2, 1];
        obj368.methods["replaceTokenRange()with"] = func616;
        func616.definitionLine = 147;
        func616.definitionModule = "errormessages";
        var func618 = function(argcv) {    // method deleteToken(1)leading(1)trailing(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_token = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for deleteToken (arg list 1) of deleteToken(1)leading(1)trailing(1)"));
          var var_deleteLeading = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for leading (arg list 2) of deleteToken(1)leading(1)trailing(1)"));
          var var_deleteTrailing = arguments[curarg];
          curarg++;
          if (argcv[2] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for trailing (arg list 3) of deleteToken(1)leading(1)trailing(1)"));
          setModuleName("errormessages");
          setLineNumber(153);    // compilenode identifier
          onSelf = true;
          var call619 = callmethodChecked(this, "getTokenStart()includeLeadingSpace", [1, 1], var_token, var_deleteLeading);
          var var_start = call619;
          setLineNumber(154);    // compilenode identifier
          onSelf = true;
          var call620 = callmethodChecked(this, "getTokenEnd()includeTrailingSpace", [1, 1], var_token, var_deleteTrailing);
          var var_end = call620;
          setLineNumber(155);    // compilenode identifier
          var call621 = callmethodChecked(var_token, "line", [0]);
          onSelf = true;
          var call622 = callmethodChecked(this, "deleteRange()onLine", [2, 1], var_start, var_end, call621);
          return call622;
        };
        func618.paramCounts = [1, 1, 1];
        obj368.methods["deleteToken()leading()trailing"] = func618;
        func618.definitionLine = 152;
        func618.definitionModule = "errormessages";
        var func623 = function(argcv) {    // method deleteToken(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_token = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for deleteToken(1)"));
          setModuleName("errormessages");
          setLineNumber(159);    // compilenode identifier
          onSelf = true;
          var call624 = callmethodChecked(this, "deleteToken()leading()trailing", [1, 1, 1], var_token, GraceFalse, GraceFalse);
          return call624;
        };
        func623.paramCounts = [1];
        obj368.methods["deleteToken"] = func623;
        func623.definitionLine = 158;
        func623.definitionModule = "errormessages";
        var func625 = function(argcv) {    // method deleteTokenRange(2)leading(1)trailing(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_start = arguments[curarg];
          curarg++;
          var var_end = arguments[curarg];
          curarg++;
          if (argcv[0] !== 2)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for deleteTokenRange (arg list 1) of deleteTokenRange(2)leading(1)trailing(1)"));
          var var_deleteLeading = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for leading (arg list 2) of deleteTokenRange(2)leading(1)trailing(1)"));
          var var_deleteTrailing = arguments[curarg];
          curarg++;
          if (argcv[2] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for trailing (arg list 3) of deleteTokenRange(2)leading(1)trailing(1)"));
          setModuleName("errormessages");
          var if626 = GraceDone;
          setLineNumber(164);    // compilenode identifier
          var opresult629 = callmethodChecked(var_start, "==", [1], var_end);
          if (Grace_isTrue(opresult629)) {
            setLineNumber(165);    // compilenode identifier
            onSelf = true;
            var call630 = callmethodChecked(this, "deleteToken()leading()trailing", [1, 1, 1], var_start, var_deleteLeading, var_deleteTrailing);
            if626 = call630;
          } else {
            setLineNumber(167);    // compilenode identifier
            var call631 = callmethodChecked(var_start, "line", [0]);
            var var_line = call631;
            setLineNumber(168);    // compilenode identifier
            onSelf = true;
            var call632 = callmethodChecked(this, "getTokenStart()includeLeadingSpace", [1, 1], var_start, var_deleteLeading);
            var var_startPos = call632;
            setLineNumber(169);    // compilenode identifier
            onSelf = true;
            var call633 = callmethodChecked(this, "getTokenEnd()includeTrailingSpace", [1, 1], var_start, var_deleteTrailing);
            var var_endPos = call633;
            setLineNumber(170);    // compilenode identifier
            var call634 = callmethodChecked(var_start, "next", [0]);
            var var_tok = call634;
            setLineNumber(171);    // compilenode block
            var block635 = new GraceBlock(this, 171, 0);
            block635.real = function() {
              var opresult638 = callmethodChecked(var_tok, "\u2260", [1], var_end);
              return opresult638;
            };
            var block639 = new GraceBlock(this, 171, 0);
            block639.real = function() {
              var if640 = GraceDone;
              setLineNumber(172);    // compilenode identifier
              var call642 = callmethodChecked(var_tok, "line", [0]);
              var opresult644 = callmethodChecked(call642, "\u2260", [1], var_line);
              if (Grace_isTrue(opresult644)) {
                setLineNumber(173);    // compilenode identifier
                onSelf = true;
                var call645 = callmethodChecked(this, "deleteRange()onLine", [2, 1], var_startPos, var_endPos, var_line);
                setLineNumber(174);    // compilenode identifier
                var call646 = callmethodChecked(var_tok, "line", [0]);
                var_line = call646;
                setLineNumber(175);    // compilenode identifier
                onSelf = true;
                var call647 = callmethodChecked(this, "getTokenStart()includeLeadingSpace", [1, 1], var_tok, var_deleteLeading);
                var_startPos = call647;
                if640 = GraceDone;
              }
              setLineNumber(177);    // compilenode identifier
              onSelf = true;
              var call648 = callmethodChecked(this, "getTokenEnd()includeTrailingSpace", [1, 1], var_tok, var_deleteTrailing);
              var_endPos = call648;
              setLineNumber(178);    // compilenode identifier
              var call649 = callmethodChecked(var_tok, "next", [0]);
              var_tok = call649;
              return GraceDone;
            };
            var call650 = callmethodChecked(var_prelude, "while()do", [1, 1], block635, block639);
            var if651 = GraceDone;
            setLineNumber(180);    // compilenode identifier
            var call653 = callmethodChecked(var_end, "line", [0]);
            var opresult655 = callmethodChecked(call653, "\u2260", [1], var_line);
            if (Grace_isTrue(opresult655)) {
              setLineNumber(181);    // compilenode identifier
              onSelf = true;
              var call656 = callmethodChecked(this, "deleteRange()onLine", [2, 1], var_startPos, var_endPos, var_line);
              if651 = call656;
            }
            setLineNumber(183);    // compilenode identifier
            onSelf = true;
            var call657 = callmethodChecked(this, "getTokenEnd()includeTrailingSpace", [1, 1], var_end, var_deleteTrailing);
            var_endPos = call657;
            setLineNumber(184);    // compilenode identifier
            var call658 = callmethodChecked(var_end, "line", [0]);
            onSelf = true;
            var call659 = callmethodChecked(this, "deleteRange()onLine", [2, 1], var_startPos, var_endPos, call658);
            if626 = call659;
          }
          return if626;
        };
        func625.paramCounts = [2, 1, 1];
        obj368.methods["deleteTokenRange()leading()trailing"] = func625;
        func625.definitionLine = 163;
        func625.definitionModule = "errormessages";
        var func660 = function(argcv) {    // method deleteTokenRange(2)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_start = arguments[curarg];
          curarg++;
          var var_end = arguments[curarg];
          curarg++;
          if (argcv[0] !== 2)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for deleteTokenRange(2)"));
          setModuleName("errormessages");
          setLineNumber(189);    // compilenode identifier
          onSelf = true;
          var call661 = callmethodChecked(this, "deleteTokenRange()leading()trailing", [2, 1, 1], var_start, var_end, GraceFalse, GraceFalse);
          return call661;
        };
        func660.paramCounts = [2];
        obj368.methods["deleteTokenRange"] = func660;
        func660.definitionLine = 188;
        func660.definitionModule = "errormessages";
        var func662 = function(argcv) {    // method deleteLine(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_lineNumber = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for deleteLine(1)"));
          setModuleName("errormessages");
          setLineNumber(193);    // compilenode string
          var string663 = new GraceString("");
          onSelf = true;
          var call664 = callmethodChecked(this, "addLine", [2], var_lineNumber, string663);
          return call664;
        };
        func662.paramCounts = [1];
        obj368.methods["deleteLine"] = func662;
        func662.definitionLine = 192;
        func662.definitionModule = "errormessages";
        var func665 = function(argcv) {    // method insert(1)afterToken(1)andTrailingSpace(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_s = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for insert (arg list 1) of insert(1)afterToken(1)andTrailingSpace(1)"));
          var var_token = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for afterToken (arg list 2) of insert(1)afterToken(1)andTrailingSpace(1)"));
          var var_afterTrailing = arguments[curarg];
          curarg++;
          if (argcv[2] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for andTrailingSpace (arg list 3) of insert(1)afterToken(1)andTrailingSpace(1)"));
          setModuleName("errormessages");
          setLineNumber(197);    // compilenode identifier
          onSelf = true;
          var call667 = callmethodChecked(this, "getTokenEnd()includeTrailingSpace", [1, 1], var_token, var_afterTrailing);
          var opresult669 = callmethodChecked(call667, "+", [1], new GraceNum(1));
          var var_pos = opresult669;
          setLineNumber(198);    // compilenode identifier
          var call670 = callmethodChecked(var_token, "line", [0]);
          onSelf = true;
          var call671 = callmethodChecked(this, "insert()atPosition()onLine", [1, 1, 1], var_s, var_pos, call670);
          return call671;
        };
        func665.paramCounts = [1, 1, 1];
        obj368.methods["insert()afterToken()andTrailingSpace"] = func665;
        func665.definitionLine = 196;
        func665.definitionModule = "errormessages";
        var func672 = function(argcv) {    // method insert(1)afterToken(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_s = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for insert (arg list 1) of insert(1)afterToken(1)"));
          var var_token = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for afterToken (arg list 2) of insert(1)afterToken(1)"));
          setModuleName("errormessages");
          setLineNumber(202);    // compilenode identifier
          onSelf = true;
          var call673 = callmethodChecked(this, "insert()afterToken()andTrailingSpace", [1, 1, 1], var_s, var_token, GraceFalse);
          return call673;
        };
        func672.paramCounts = [1, 1];
        obj368.methods["insert()afterToken"] = func672;
        func672.definitionLine = 201;
        func672.definitionModule = "errormessages";
        var func674 = function(argcv) {    // method insert(1)beforeToken(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_s = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for insert (arg list 1) of insert(1)beforeToken(1)"));
          var var_token = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for beforeToken (arg list 2) of insert(1)beforeToken(1)"));
          setModuleName("errormessages");
          setLineNumber(206);    // compilenode identifier
          var call675 = callmethodChecked(var_token, "linePos", [0]);
          var call676 = callmethodChecked(var_token, "line", [0]);
          onSelf = true;
          var call677 = callmethodChecked(this, "insert()atPosition()onLine", [1, 1, 1], var_s, call675, call676);
          return call677;
        };
        func674.paramCounts = [1, 1];
        obj368.methods["insert()beforeToken"] = func674;
        func674.definitionLine = 205;
        func674.definitionModule = "errormessages";
        var func678 = function(argcv) {    // method insertNewLine(1)after(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_line = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for insertNewLine (arg list 1) of insertNewLine(1)after(1)"));
          var var_lineNumber = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for after (arg list 2) of insertNewLine(1)after(1)"));
          setModuleName("errormessages");
          setLineNumber(211);    // compilenode identifier
          onSelf = true;
          var call679 = callmethodChecked(this, "addLine", [2], var_lineNumber, var_line);
          return call679;
        };
        func678.paramCounts = [1, 1];
        obj368.methods["insertNewLine()after"] = func678;
        func678.definitionLine = 210;
        func678.definitionModule = "errormessages";
        var func680 = function(argcv) {    // method addLine(2)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_lineNumber = arguments[curarg];
          curarg++;
          var var_line = arguments[curarg];
          curarg++;
          if (argcv[0] !== 2)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addLine(2)"));
          setModuleName("errormessages");
          setLineNumber(217);    // compilenode identifier
          onSelf = true;
          var call681 = callmethodChecked(this, "findLine", [1], var_lineNumber);
          var var_i = call681;
          var if682 = GraceDone;
          setLineNumber(218);    // compilenode identifier
          var opresult685 = callmethodChecked(var_i, "\u2260", [1], GraceFalse);
          if (Grace_isTrue(opresult685)) {
            setLineNumber(219);    // compilenode call
            onSelf = true;
            var call686 = callmethodChecked(this, "lines", [0]);
            var call687 = callmethodChecked(call686, "at()put", [1, 1], var_i, var_line);
            if682 = call687;
          } else {
            setLineNumber(222);    // compilenode call
            onSelf = true;
            var call688 = callmethodChecked(this, "lineNumbers", [0]);
            var call689 = callmethodChecked(call688, "push", [1], var_lineNumber);
            setLineNumber(223);    // compilenode call
            onSelf = true;
            var call690 = callmethodChecked(this, "lines", [0]);
            var call691 = callmethodChecked(call690, "push", [1], var_line);
            var if692 = GraceDone;
            setLineNumber(224);    // compilenode call
            onSelf = true;
            var call694 = callmethodChecked(this, "lines", [0]);
            var call695 = callmethodChecked(call694, "size", [0]);
            var opresult697 = callmethodChecked(call695, ">", [1], new GraceNum(1));
            if (Grace_isTrue(opresult697)) {
              setLineNumber(226);    // compilenode call
              onSelf = true;
              var call698 = callmethodChecked(this, "lines", [0]);
              var call699 = callmethodChecked(call698, "size", [0]);
              var_i = call699;
              setLineNumber(227);    // compilenode block
              var block700 = new GraceBlock(this, 227, 0);
              block700.real = function() {
                var block701 = new GraceBlock(this, 227, 0);
                block701.real = function() {
                  var diff704 = callmethodChecked(var_i, "-", [1], new GraceNum(1));
                  onSelf = true;
                  var call705 = callmethodChecked(this, "lineNumbers", [0]);
                  var call706 = callmethodChecked(call705, "at", [1], diff704);
                  var opresult709 = callmethodChecked(var_lineNumber, "<", [1], call706);
                  return opresult709;
                };
                var opresult713 = callmethodChecked(var_i, ">", [1], new GraceNum(1));
                var opresult715 = callmethodChecked(opresult713, "&&", [1], block701);
                return opresult715;
              };
              var block716 = new GraceBlock(this, 227, 0);
              block716.real = function() {
                setLineNumber(228);    // compilenode identifier
                var diff719 = callmethodChecked(var_i, "-", [1], new GraceNum(1));
                onSelf = true;
                var call720 = callmethodChecked(this, "lineNumbers", [0]);
                var call721 = callmethodChecked(call720, "at", [1], diff719);
                onSelf = true;
                var call722 = callmethodChecked(this, "lineNumbers", [0]);
                var call723 = callmethodChecked(call722, "at()put", [1, 1], var_i, call721);
                setLineNumber(229);    // compilenode identifier
                var diff726 = callmethodChecked(var_i, "-", [1], new GraceNum(1));
                onSelf = true;
                var call727 = callmethodChecked(this, "lines", [0]);
                var call728 = callmethodChecked(call727, "at", [1], diff726);
                onSelf = true;
                var call729 = callmethodChecked(this, "lines", [0]);
                var call730 = callmethodChecked(call729, "at()put", [1, 1], var_i, call728);
                setLineNumber(230);    // compilenode identifier
                var diff733 = callmethodChecked(var_i, "-", [1], new GraceNum(1));
                var_i = diff733;
                return GraceDone;
              };
              var call734 = callmethodChecked(var_prelude, "while()do", [1, 1], block700, block716);
              setLineNumber(232);    // compilenode call
              onSelf = true;
              var call735 = callmethodChecked(this, "lineNumbers", [0]);
              var call736 = callmethodChecked(call735, "at()put", [1, 1], var_i, var_lineNumber);
              setLineNumber(233);    // compilenode call
              onSelf = true;
              var call737 = callmethodChecked(this, "lines", [0]);
              var call738 = callmethodChecked(call737, "at()put", [1, 1], var_i, var_line);
              if692 = call738;
            }
            if682 = if692;
          }
          return if682;
        };
        func680.paramCounts = [2];
        obj368.methods["addLine"] = func680;
        func680.definitionLine = 216;
        func680.definitionModule = "errormessages";
        var func739 = function(argcv) {    // method findLine(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_lineNumber = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for findLine(1)"));
          setModuleName("errormessages");
          setLineNumber(241);    // compilenode call
          onSelf = true;
          var call740 = callmethodChecked(this, "lineNumbers", [0]);
          var call741 = callmethodChecked(call740, "indices", [0]);
          var block742 = new GraceBlock(this, 241, 1);
          setLineNumber(1);    // compilenode identifier
          block742.real = function(var_i) {
            var if743 = GraceDone;
            setLineNumber(242);    // compilenode call
            onSelf = true;
            var call745 = callmethodChecked(this, "lineNumbers", [0]);
            var call746 = callmethodChecked(call745, "at", [1], var_i);
            var opresult748 = callmethodChecked(call746, "==", [1], var_lineNumber);
            if (Grace_isTrue(opresult748)) {
              setLineNumber(243);    // compilenode identifier
              throw new ReturnException(var_i, returnTarget);
            }
            return if743;
          };
          var call749 = callmethodChecked(var_prelude, "for()do", [1, 1], call741, block742);
          setLineNumber(246);    // compilenode identifier
          return GraceFalse;
        };
        func739.confidential = true;
        func739.paramCounts = [1];
        obj368.methods["findLine"] = func739;
        func739.definitionLine = 240;
        func739.definitionModule = "errormessages";
        var func750 = function(argcv) {    // method getLine(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_lineNumber = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for getLine(1)"));
          setModuleName("errormessages");
          setLineNumber(252);    // compilenode identifier
          onSelf = true;
          var call751 = callmethodChecked(this, "findLine", [1], var_lineNumber);
          var var_i = call751;
          var if752 = GraceDone;
          setLineNumber(253);    // compilenode identifier
          var opresult755 = callmethodChecked(var_i, "==", [1], GraceFalse);
          if (Grace_isTrue(opresult755)) {
            setLineNumber(254);    // compilenode identifier
            var call756 = callmethodChecked(var_util, "lines", [0]);
            var call757 = callmethodChecked(call756, "at", [1], var_lineNumber);
            if752 = call757;
          } else {
            setLineNumber(256);    // compilenode call
            onSelf = true;
            var call758 = callmethodChecked(this, "lines", [0]);
            var call759 = callmethodChecked(call758, "at", [1], var_i);
            if752 = call759;
          }
          return if752;
        };
        func750.confidential = true;
        func750.paramCounts = [1];
        obj368.methods["getLine"] = func750;
        func750.definitionLine = 251;
        func750.definitionModule = "errormessages";
        var func760 = function(argcv) {    // method print
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for print"));
          setModuleName("errormessages");
          setLineNumber(261);    // compilenode call
          onSelf = true;
          var call761 = callmethodChecked(this, "lines", [0]);
          var call762 = callmethodChecked(call761, "size", [0]);
          var opresult765 = callmethodChecked(new GraceNum(1), "..", [1], call762);
          var block766 = new GraceBlock(this, 261, 1);
          setLineNumber(1);    // compilenode identifier
          block766.real = function(var_i) {
            var if767 = GraceDone;
            setLineNumber(262);    // compilenode block
            var block768 = new GraceBlock(this, 262, 0);
            block768.real = function() {
              var diff772 = callmethodChecked(var_i, "-", [1], new GraceNum(1));
              onSelf = true;
              var call773 = callmethodChecked(this, "lineNumbers", [0]);
              var call774 = callmethodChecked(call773, "at", [1], diff772);
              var opresult776 = callmethodChecked(call774, "+", [1], new GraceNum(1));
              onSelf = true;
              var call778 = callmethodChecked(this, "lineNumbers", [0]);
              var call779 = callmethodChecked(call778, "at", [1], var_i);
              var opresult781 = callmethodChecked(call779, ">", [1], opresult776);
              return opresult781;
            };
            var opresult785 = callmethodChecked(var_i, ">", [1], new GraceNum(1));
            var opresult787 = callmethodChecked(opresult785, "&&", [1], block768);
            if (Grace_isTrue(opresult787)) {
              setLineNumber(263);    // compilenode string
              var string788 = new GraceString("");
              var var_s = string788;
              setLineNumber(264);    // compilenode identifier
              var diff791 = callmethodChecked(var_i, "-", [1], new GraceNum(1));
              onSelf = true;
              var call792 = callmethodChecked(this, "lineNumbers", [0]);
              var call793 = callmethodChecked(call792, "at", [1], diff791);
              var call794 = callmethodChecked(call793, "asString", [0]);
              var call795 = callmethodChecked(call794, "size", [0]);
              var opresult798 = callmethodChecked(new GraceNum(1), "..", [1], call795);
              var block799 = new GraceBlock(this, 264, 0);
              block799.real = function() {
                setLineNumber(265);    // compilenode string
                var string800 = new GraceString(" ");
                var opresult803 = callmethodChecked(var_s, "++", [1], string800);
                var_s = opresult803;
                return GraceDone;
              };
              var call804 = callmethodChecked(var_prelude, "for()do", [1, 1], opresult798, block799);
              setLineNumber(267);    // compilenode string
              var string805 = new GraceString("...\n");
              var string808 = new GraceString("    ");
              var opresult810 = callmethodChecked(string808, "++", [1], var_s);
              var opresult812 = callmethodChecked(opresult810, "++", [1], string805);
              var call813 = callmethodChecked(var_io, "error", [0]);
              var call814 = callmethodChecked(call813, "write", [1], opresult812);
              if767 = call814;
            }
            var if815 = GraceDone;
            setLineNumber(270);    // compilenode call
            onSelf = true;
            var call816 = callmethodChecked(this, "lineNumbers", [0]);
            var call817 = callmethodChecked(call816, "at", [1], var_i);
            onSelf = true;
            var call819 = callmethodChecked(this, "lineNumbers", [0]);
            var call820 = callmethodChecked(call819, "at", [1], var_i);
            var call821 = callmethodChecked(call820, "truncated", [0]);
            var opresult823 = callmethodChecked(call821, "\u2260", [1], call817);
            if (Grace_isTrue(opresult823)) {
              setLineNumber(271);    // compilenode string
              var string824 = new GraceString("\n");
              onSelf = true;
              var call826 = callmethodChecked(this, "lines", [0]);
              var call827 = callmethodChecked(call826, "at", [1], var_i);
              var string829 = new GraceString(": ");
              onSelf = true;
              var call831 = callmethodChecked(this, "lineNumbers", [0]);
              var call832 = callmethodChecked(call831, "at", [1], var_i);
              var call833 = callmethodChecked(call832, "truncated", [0]);
              var string835 = new GraceString(" *");
              var opresult837 = callmethodChecked(string835, "++", [1], call833);
              var opresult839 = callmethodChecked(opresult837, "++", [1], string829);
              var opresult841 = callmethodChecked(opresult839, "++", [1], call827);
              var opresult843 = callmethodChecked(opresult841, "++", [1], string824);
              var call844 = callmethodChecked(var_io, "error", [0]);
              var call845 = callmethodChecked(call844, "write", [1], opresult843);
              if815 = call845;
            } else {
              setLineNumber(273);    // compilenode string
              var string846 = new GraceString("\n");
              onSelf = true;
              var call848 = callmethodChecked(this, "lines", [0]);
              var call849 = callmethodChecked(call848, "at", [1], var_i);
              var string851 = new GraceString(": ");
              onSelf = true;
              var call853 = callmethodChecked(this, "lineNumbers", [0]);
              var call854 = callmethodChecked(call853, "at", [1], var_i);
              var string856 = new GraceString("  ");
              var opresult858 = callmethodChecked(string856, "++", [1], call854);
              var opresult860 = callmethodChecked(opresult858, "++", [1], string851);
              var opresult862 = callmethodChecked(opresult860, "++", [1], call849);
              var opresult864 = callmethodChecked(opresult862, "++", [1], string846);
              var call865 = callmethodChecked(var_io, "error", [0]);
              var call866 = callmethodChecked(call865, "write", [1], opresult864);
              if815 = call866;
            }
            return if815;
          };
          var call867 = callmethodChecked(var_prelude, "for()do", [1, 1], opresult765, block766);
          return call867;
        };
        func760.paramCounts = [0];
        obj368.methods["print"] = func760;
        func760.definitionLine = 260;
        func760.definitionModule = "errormessages";
        setLineNumber(15);    // compilenode array
        var array868 = new PrimitiveGraceList([]);
        obj368.data["lineNumbers"] = array868;
        var reader_errormessages_lineNumbers869 = function() {
          return this.data["lineNumbers"];
        };
        reader_errormessages_lineNumbers869.def = true;
        reader_errormessages_lineNumbers869.confidential = true;
        obj368.methods["lineNumbers"] = reader_errormessages_lineNumbers869;
        setLineNumber(16);    // compilenode array
        var array870 = new PrimitiveGraceList([]);
        obj368.data["lines"] = array870;
        var reader_errormessages_lines871 = function() {
          return this.data["lines"];
        };
        reader_errormessages_lines871.def = true;
        reader_errormessages_lines871.confidential = true;
        obj368.methods["lines"] = reader_errormessages_lines871;
        superDepth = origSuperDepth;
      };
      obj_init_368.apply(obj368, []);
      return obj368;
    };
    func367.paramCounts = [0];
    obj365.methods["new"] = func367;
    func367.definitionLine = 14;
    func367.definitionModule = "errormessages";
      var func872 = function(argcv) {    // method new()object
        var curarg = 1;
        var inheritingObject = arguments[curarg++];
        // Start argument processing
        curarg = 1;
        // End argument processing
        setModuleName("errormessages");
        var returnTarget = invocationCount;
        invocationCount++;
        var obj873 = Grace_allocObject(GraceObject, "new");
        obj873.definitionModule = "errormessages";
        obj873.definitionLine = 14;
        var inho873 = inheritingObject;
        while (inho873.superobj) inho873 = inho873.superobj;
        inho873.superobj = obj873;
        obj873.data = inheritingObject.data;
        if (inheritingObject.hasOwnProperty('_value'))
          obj873._value = inheritingObject._value;
        obj873.outer = this;
        var reader_errormessages_outer874 = function() {
          return this.outer;
        };
        obj873.methods["outer"] = reader_errormessages_outer874;
        var obj_init_873 = function() {
          var origSuperDepth = superDepth;
          superDepth = obj873;
          var func875 = function(argcv) {    // method replaceRange(2)with(1)onLine(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_start = arguments[curarg];
            curarg++;
            var var_end = arguments[curarg];
            curarg++;
            if (argcv[0] !== 2)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for replaceRange (arg list 1) of replaceRange(2)with(1)onLine(1)"));
            var var_s = arguments[curarg];
            curarg++;
            if (argcv[1] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for with (arg list 2) of replaceRange(2)with(1)onLine(1)"));
            var var_lineNumber = arguments[curarg];
            curarg++;
            if (argcv[2] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onLine (arg list 3) of replaceRange(2)with(1)onLine(1)"));
            setModuleName("errormessages");
            setLineNumber(24);    // compilenode identifier
            onSelf = true;
            var call876 = callmethodChecked(this, "getLine", [1], var_lineNumber);
            var var_line = call876;
            var if877 = GraceDone;
            setLineNumber(25);    // compilenode identifier
            var opresult880 = callmethodChecked(var_start, "==", [1], new GraceNum(1));
            if (Grace_isTrue(opresult880)) {
              setLineNumber(26);    // compilenode identifier
              var opresult883 = callmethodChecked(var_end, "+", [1], new GraceNum(1));
              var call884 = callmethodChecked(var_line, "size", [0]);
              var call885 = callmethodChecked(var_line, "substringFrom()to", [1, 1], opresult883, call884);
              var opresult888 = callmethodChecked(var_s, "++", [1], call885);
              onSelf = true;
              var call889 = callmethodChecked(this, "addLine", [2], var_lineNumber, opresult888);
              if877 = call889;
            } else {
              setLineNumber(29);    // compilenode identifier
              var opresult892 = callmethodChecked(var_end, "+", [1], new GraceNum(1));
              var call893 = callmethodChecked(var_line, "size", [0]);
              var call894 = callmethodChecked(var_line, "substringFrom()to", [1, 1], opresult892, call893);
              setLineNumber(28);    // compilenode identifier
              var diff899 = callmethodChecked(var_start, "-", [1], new GraceNum(1));
              var call900 = callmethodChecked(var_line, "substringFrom()to", [1, 1], new GraceNum(1), diff899);
              var opresult902 = callmethodChecked(call900, "++", [1], var_s);
              var opresult904 = callmethodChecked(opresult902, "++", [1], call894);
              onSelf = true;
              var call905 = callmethodChecked(this, "addLine", [2], var_lineNumber, opresult904);
              if877 = call905;
            }
            return if877;
          };
          func875.paramCounts = [2, 1, 1];
          obj873.methods["replaceRange()with()onLine"] = func875;
          func875.definitionLine = 23;
          func875.definitionModule = "errormessages";
          var func906 = function(argcv) {    // method replaceChar(1)with(1)onLine(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_pos = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for replaceChar (arg list 1) of replaceChar(1)with(1)onLine(1)"));
            var var_s = arguments[curarg];
            curarg++;
            if (argcv[1] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for with (arg list 2) of replaceChar(1)with(1)onLine(1)"));
            var var_lineNumber = arguments[curarg];
            curarg++;
            if (argcv[2] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onLine (arg list 3) of replaceChar(1)with(1)onLine(1)"));
            setModuleName("errormessages");
            setLineNumber(34);    // compilenode identifier
            onSelf = true;
            var call907 = callmethodChecked(this, "replaceRange()with()onLine", [2, 1, 1], var_pos, var_pos, var_s, var_lineNumber);
            return call907;
          };
          func906.paramCounts = [1, 1, 1];
          obj873.methods["replaceChar()with()onLine"] = func906;
          func906.definitionLine = 33;
          func906.definitionModule = "errormessages";
          var func908 = function(argcv) {    // method replaceUntil(1)with(1)onLine(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_until = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for replaceUntil (arg list 1) of replaceUntil(1)with(1)onLine(1)"));
            var var_s = arguments[curarg];
            curarg++;
            if (argcv[1] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for with (arg list 2) of replaceUntil(1)with(1)onLine(1)"));
            var var_lineNumber = arguments[curarg];
            curarg++;
            if (argcv[2] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onLine (arg list 3) of replaceUntil(1)with(1)onLine(1)"));
            setModuleName("errormessages");
            setLineNumber(38);    // compilenode identifier
            onSelf = true;
            var call909 = callmethodChecked(this, "getLine", [1], var_lineNumber);
            var var_line = call909;
            setLineNumber(39);    // compilenode identifier
            var call910 = callmethodChecked(var_until, "size", [0]);
            var var_len = call910;
            setLineNumber(40);    // compilenode identifier
            var call911 = callmethodChecked(var_line, "size", [0]);
            var opresult914 = callmethodChecked(new GraceNum(1), "..", [1], call911);
            var block915 = new GraceBlock(this, 40, 1);
            setLineNumber(1);    // compilenode identifier
            block915.real = function(var_i) {
              var if916 = GraceDone;
              setLineNumber(41);    // compilenode identifier
              var opresult921 = callmethodChecked(var_i, "+", [1], var_len);
              var diff923 = callmethodChecked(opresult921, "-", [1], new GraceNum(1));
              var call924 = callmethodChecked(var_line, "substringFrom()to", [1, 1], var_i, diff923);
              var opresult926 = callmethodChecked(call924, "==", [1], var_until);
              if (Grace_isTrue(opresult926)) {
                setLineNumber(42);    // compilenode identifier
                var opresult930 = callmethodChecked(var_i, "+", [1], var_len);
                var diff932 = callmethodChecked(opresult930, "-", [1], new GraceNum(1));
                onSelf = true;
                var call933 = callmethodChecked(this, "replaceRange()with()onLine", [2, 1, 1], new GraceNum(1), diff932, var_s, var_lineNumber);
                setLineNumber(43);    // compilenode identifier
                throw new ReturnException(GraceTrue, returnTarget);
              }
              return if916;
            };
            var call934 = callmethodChecked(var_prelude, "for()do", [1, 1], opresult914, block915);
            setLineNumber(46);    // compilenode identifier
            return GraceFalse;
          };
          func908.paramCounts = [1, 1, 1];
          obj873.methods["replaceUntil()with()onLine"] = func908;
          func908.definitionLine = 37;
          func908.definitionModule = "errormessages";
          var func935 = function(argcv) {    // method deleteRange(2)onLine(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_start = arguments[curarg];
            curarg++;
            var var_end = arguments[curarg];
            curarg++;
            if (argcv[0] !== 2)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for deleteRange (arg list 1) of deleteRange(2)onLine(1)"));
            var var_lineNumber = arguments[curarg];
            curarg++;
            if (argcv[1] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onLine (arg list 2) of deleteRange(2)onLine(1)"));
            setModuleName("errormessages");
            setLineNumber(50);    // compilenode identifier
            var var_start__39__ = var_start;
            setLineNumber(51);    // compilenode identifier
            onSelf = true;
            var call936 = callmethodChecked(this, "getLine", [1], var_lineNumber);
            var var_line = call936;
            var if937 = GraceDone;
            setLineNumber(52);    // compilenode identifier
            var call938 = callmethodChecked(var_line, "size", [0]);
            var opresult941 = callmethodChecked(var_end, "==", [1], call938);
            var opresult945 = callmethodChecked(var_start__39__, ">", [1], new GraceNum(1));
            var opresult947 = callmethodChecked(opresult945, "&&", [1], opresult941);
            if (Grace_isTrue(opresult947)) {
              setLineNumber(54);    // compilenode identifier
              var var_indent = GraceTrue;
              setLineNumber(55);    // compilenode identifier
              var diff950 = callmethodChecked(var_start__39__, "-", [1], new GraceNum(1));
              var opresult953 = callmethodChecked(new GraceNum(1), "..", [1], diff950);
              var block954 = new GraceBlock(this, 55, 1);
              setLineNumber(1);    // compilenode identifier
              block954.real = function(var_i) {
                var if955 = GraceDone;
                setLineNumber(56);    // compilenode string
                var string956 = new GraceString(" ");
                var call958 = callmethodChecked(var_line, "at", [1], var_i);
                var opresult960 = callmethodChecked(call958, "\u2260", [1], string956);
                if (Grace_isTrue(opresult960)) {
                  setLineNumber(57);    // compilenode identifier
                  var_indent = GraceFalse;
                  if955 = GraceDone;
                }
                return if955;
              };
              var call961 = callmethodChecked(var_prelude, "for()do", [1, 1], opresult953, block954);
              var if962 = GraceDone;
              setLineNumber(60);    // compilenode identifier
              var opresult965 = callmethodChecked(var_indent, "==", [1], GraceTrue);
              if (Grace_isTrue(opresult965)) {
                setLineNumber(61);    // compilenode num
                var_start__39__ = new GraceNum(1);
                if962 = GraceDone;
              }
              if937 = if962;
            }
            setLineNumber(64);    // compilenode string
            var string966 = new GraceString("");
            onSelf = true;
            var call967 = callmethodChecked(this, "replaceRange()with()onLine", [2, 1, 1], var_start__39__, var_end, string966, var_lineNumber);
            return call967;
          };
          func935.paramCounts = [2, 1];
          obj873.methods["deleteRange()onLine"] = func935;
          func935.definitionLine = 49;
          func935.definitionModule = "errormessages";
          var func968 = function(argcv) {    // method deleteChar(1)onLine(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_pos = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for deleteChar (arg list 1) of deleteChar(1)onLine(1)"));
            var var_lineNumber = arguments[curarg];
            curarg++;
            if (argcv[1] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onLine (arg list 2) of deleteChar(1)onLine(1)"));
            setModuleName("errormessages");
            setLineNumber(68);    // compilenode string
            var string969 = new GraceString("");
            onSelf = true;
            var call970 = callmethodChecked(this, "replaceRange()with()onLine", [2, 1, 1], var_pos, var_pos, string969, var_lineNumber);
            return call970;
          };
          func968.paramCounts = [1, 1];
          obj873.methods["deleteChar()onLine"] = func968;
          func968.definitionLine = 67;
          func968.definitionModule = "errormessages";
          var func971 = function(argcv) {    // method append(1)onLine(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_s = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for append (arg list 1) of append(1)onLine(1)"));
            var var_lineNumber = arguments[curarg];
            curarg++;
            if (argcv[1] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onLine (arg list 2) of append(1)onLine(1)"));
            setModuleName("errormessages");
            setLineNumber(72);    // compilenode identifier
            onSelf = true;
            var call972 = callmethodChecked(this, "getLine", [1], var_lineNumber);
            var var_line = call972;
            setLineNumber(73);    // compilenode identifier
            var opresult975 = callmethodChecked(var_line, "++", [1], var_s);
            onSelf = true;
            var call976 = callmethodChecked(this, "addLine", [2], var_lineNumber, opresult975);
            return call976;
          };
          func971.paramCounts = [1, 1];
          obj873.methods["append()onLine"] = func971;
          func971.definitionLine = 71;
          func971.definitionModule = "errormessages";
          var func977 = function(argcv) {    // method insert(1)atPosition(1)onLine(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_s = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for insert (arg list 1) of insert(1)atPosition(1)onLine(1)"));
            var var_pos = arguments[curarg];
            curarg++;
            if (argcv[1] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for atPosition (arg list 2) of insert(1)atPosition(1)onLine(1)"));
            var var_lineNumber = arguments[curarg];
            curarg++;
            if (argcv[2] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onLine (arg list 3) of insert(1)atPosition(1)onLine(1)"));
            setModuleName("errormessages");
            setLineNumber(77);    // compilenode identifier
            onSelf = true;
            var call978 = callmethodChecked(this, "getLine", [1], var_lineNumber);
            var var_line = call978;
            var if979 = GraceDone;
            setLineNumber(78);    // compilenode identifier
            var opresult982 = callmethodChecked(var_pos, "==", [1], new GraceNum(1));
            if (Grace_isTrue(opresult982)) {
              setLineNumber(79);    // compilenode identifier
              var opresult985 = callmethodChecked(var_s, "++", [1], var_line);
              onSelf = true;
              var call986 = callmethodChecked(this, "addLine", [2], var_lineNumber, opresult985);
              if979 = call986;
            } else {
              setLineNumber(82);    // compilenode identifier
              var call987 = callmethodChecked(var_line, "size", [0]);
              var call988 = callmethodChecked(var_line, "substringFrom()to", [1, 1], var_pos, call987);
              setLineNumber(81);    // compilenode identifier
              var diff993 = callmethodChecked(var_pos, "-", [1], new GraceNum(1));
              var call994 = callmethodChecked(var_line, "substringFrom()to", [1, 1], new GraceNum(1), diff993);
              var opresult996 = callmethodChecked(call994, "++", [1], var_s);
              var opresult998 = callmethodChecked(opresult996, "++", [1], call988);
              onSelf = true;
              var call999 = callmethodChecked(this, "addLine", [2], var_lineNumber, opresult998);
              if979 = call999;
            }
            return if979;
          };
          func977.paramCounts = [1, 1, 1];
          obj873.methods["insert()atPosition()onLine"] = func977;
          func977.definitionLine = 76;
          func977.definitionModule = "errormessages";
          var func1000 = function(argcv) {    // method getTokenStart(1)includeLeadingSpace(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_token = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for getTokenStart (arg list 1) of getTokenStart(1)includeLeadingSpace(1)"));
            var var_includeLeading = arguments[curarg];
            curarg++;
            if (argcv[1] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for includeLeadingSpace (arg list 2) of getTokenStart(1)includeLeadingSpace(1)"));
            setModuleName("errormessages");
            setLineNumber(91);    // compilenode identifier
            var call1001 = callmethodChecked(var_token, "linePos", [0]);
            var var_start = call1001;
            var if1002 = GraceDone;
            setLineNumber(93);    // compilenode identifier
            var opresult1005 = callmethodChecked(var_includeLeading, "==", [1], GraceTrue);
            if (Grace_isTrue(opresult1005)) {
              var if1006 = GraceDone;
              setLineNumber(94);    // compilenode block
              var block1007 = new GraceBlock(this, 94, 0);
              block1007.real = function() {
                var call1008 = callmethodChecked(var_token, "line", [0]);
                var call1010 = callmethodChecked(var_token, "prev", [0]);
                var call1011 = callmethodChecked(call1010, "line", [0]);
                var opresult1013 = callmethodChecked(call1011, "==", [1], call1008);
                return opresult1013;
              };
              var call1016 = callmethodChecked(var_token, "prev", [0]);
              var opresult1018 = callmethodChecked(call1016, "\u2260", [1], GraceFalse);
              var opresult1020 = callmethodChecked(opresult1018, "&&", [1], block1007);
              if (Grace_isTrue(opresult1020)) {
                setLineNumber(95);    // compilenode identifier
                var call1021 = callmethodChecked(var_token, "prev", [0]);
                var call1022 = callmethodChecked(call1021, "size", [0]);
                var call1024 = callmethodChecked(var_token, "prev", [0]);
                var call1025 = callmethodChecked(call1024, "linePos", [0]);
                var opresult1027 = callmethodChecked(call1025, "+", [1], call1022);
                var_start = opresult1027;
                if1006 = GraceDone;
              }
              if1002 = if1006;
            }
            var if1028 = GraceDone;
            setLineNumber(99);    // compilenode identifier
            var call1030 = callmethodChecked(var_token, "indent", [0]);
            var opresult1032 = callmethodChecked(call1030, "+", [1], new GraceNum(1));
            var call1034 = callmethodChecked(var_token, "linePos", [0]);
            var opresult1036 = callmethodChecked(call1034, "==", [1], opresult1032);
            if (Grace_isTrue(opresult1036)) {
              var if1037 = GraceDone;
              setLineNumber(100);    // compilenode block
              var block1038 = new GraceBlock(this, 100, 0);
              block1038.real = function() {
                var call1039 = callmethodChecked(var_token, "line", [0]);
                var call1041 = callmethodChecked(var_token, "next", [0]);
                var call1042 = callmethodChecked(call1041, "line", [0]);
                var opresult1044 = callmethodChecked(call1042, "\u2260", [1], call1039);
                return opresult1044;
              };
              var call1047 = callmethodChecked(var_token, "next", [0]);
              var opresult1049 = callmethodChecked(call1047, "==", [1], GraceFalse);
              var opresult1051 = callmethodChecked(opresult1049, "||", [1], block1038);
              if (Grace_isTrue(opresult1051)) {
                setLineNumber(101);    // compilenode num
                var_start = new GraceNum(1);
                if1037 = GraceDone;
              }
              if1028 = if1037;
            }
            setLineNumber(104);    // compilenode identifier
            return var_start;
          };
          func1000.paramCounts = [1, 1];
          obj873.methods["getTokenStart()includeLeadingSpace"] = func1000;
          func1000.definitionLine = 90;
          func1000.definitionModule = "errormessages";
          var func1052 = function(argcv) {    // method getTokenEnd(1)includeTrailingSpace(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_token = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for getTokenEnd (arg list 1) of getTokenEnd(1)includeTrailingSpace(1)"));
            var var_includeTrailing = arguments[curarg];
            curarg++;
            if (argcv[1] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for includeTrailingSpace (arg list 2) of getTokenEnd(1)includeTrailingSpace(1)"));
            setModuleName("errormessages");
            setLineNumber(108);    // compilenode identifier
            var call1054 = callmethodChecked(var_token, "size", [0]);
            var call1056 = callmethodChecked(var_token, "linePos", [0]);
            var opresult1058 = callmethodChecked(call1056, "+", [1], call1054);
            var diff1060 = callmethodChecked(opresult1058, "-", [1], new GraceNum(1));
            var var_end = diff1060;
            var if1061 = GraceDone;
            setLineNumber(110);    // compilenode identifier
            var opresult1064 = callmethodChecked(var_includeTrailing, "==", [1], GraceTrue);
            if (Grace_isTrue(opresult1064)) {
              var if1065 = GraceDone;
              setLineNumber(111);    // compilenode block
              var block1066 = new GraceBlock(this, 111, 0);
              block1066.real = function() {
                var call1067 = callmethodChecked(var_token, "line", [0]);
                var call1069 = callmethodChecked(var_token, "next", [0]);
                var call1070 = callmethodChecked(call1069, "line", [0]);
                var opresult1072 = callmethodChecked(call1070, "==", [1], call1067);
                return opresult1072;
              };
              var call1075 = callmethodChecked(var_token, "next", [0]);
              var opresult1077 = callmethodChecked(call1075, "\u2260", [1], GraceFalse);
              var opresult1079 = callmethodChecked(opresult1077, "&&", [1], block1066);
              if (Grace_isTrue(opresult1079)) {
                setLineNumber(112);    // compilenode identifier
                var call1081 = callmethodChecked(var_token, "next", [0]);
                var call1082 = callmethodChecked(call1081, "linePos", [0]);
                var diff1084 = callmethodChecked(call1082, "-", [1], new GraceNum(1));
                var_end = diff1084;
                if1065 = GraceDone;
              } else {
                setLineNumber(114);    // compilenode identifier
                var call1085 = callmethodChecked(var_token, "line", [0]);
                onSelf = true;
                var call1086 = callmethodChecked(this, "getLine", [1], call1085);
                var call1087 = callmethodChecked(call1086, "size", [0]);
                var_end = call1087;
                if1065 = GraceDone;
              }
              if1061 = if1065;
            }
            setLineNumber(117);    // compilenode identifier
            return var_end;
          };
          func1052.paramCounts = [1, 1];
          obj873.methods["getTokenEnd()includeTrailingSpace"] = func1052;
          func1052.definitionLine = 107;
          func1052.definitionModule = "errormessages";
          var func1088 = function(argcv) {    // method replaceToken(1)leading(1)trailing(1)with(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_token = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for replaceToken (arg list 1) of replaceToken(1)leading(1)trailing(1)with(1)"));
            var var_replaceLeading = arguments[curarg];
            curarg++;
            if (argcv[1] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for leading (arg list 2) of replaceToken(1)leading(1)trailing(1)with(1)"));
            var var_replaceTrailing = arguments[curarg];
            curarg++;
            if (argcv[2] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for trailing (arg list 3) of replaceToken(1)leading(1)trailing(1)with(1)"));
            var var_s = arguments[curarg];
            curarg++;
            if (argcv[3] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for with (arg list 4) of replaceToken(1)leading(1)trailing(1)with(1)"));
            setModuleName("errormessages");
            setLineNumber(121);    // compilenode identifier
            onSelf = true;
            var call1089 = callmethodChecked(this, "getTokenStart()includeLeadingSpace", [1, 1], var_token, var_replaceLeading);
            var var_start = call1089;
            setLineNumber(122);    // compilenode identifier
            onSelf = true;
            var call1090 = callmethodChecked(this, "getTokenEnd()includeTrailingSpace", [1, 1], var_token, var_replaceTrailing);
            var var_end = call1090;
            setLineNumber(123);    // compilenode identifier
            var call1091 = callmethodChecked(var_token, "line", [0]);
            onSelf = true;
            var call1092 = callmethodChecked(this, "replaceRange()with()onLine", [2, 1, 1], var_start, var_end, var_s, call1091);
            return call1092;
          };
          func1088.paramCounts = [1, 1, 1, 1];
          obj873.methods["replaceToken()leading()trailing()with"] = func1088;
          func1088.definitionLine = 120;
          func1088.definitionModule = "errormessages";
          var func1093 = function(argcv) {    // method replaceToken(1)with(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_token = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for replaceToken (arg list 1) of replaceToken(1)with(1)"));
            var var_s = arguments[curarg];
            curarg++;
            if (argcv[1] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for with (arg list 2) of replaceToken(1)with(1)"));
            setModuleName("errormessages");
            setLineNumber(127);    // compilenode identifier
            onSelf = true;
            var call1094 = callmethodChecked(this, "replaceToken()leading()trailing()with", [1, 1, 1, 1], var_token, GraceFalse, GraceFalse, var_s);
            return call1094;
          };
          func1093.paramCounts = [1, 1];
          obj873.methods["replaceToken()with"] = func1093;
          func1093.definitionLine = 126;
          func1093.definitionModule = "errormessages";
          var func1095 = function(argcv) {    // method replaceTokenRange(2)leading(1)trailing(1)with(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_start = arguments[curarg];
            curarg++;
            var var_end = arguments[curarg];
            curarg++;
            if (argcv[0] !== 2)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for replaceTokenRange (arg list 1) of replaceTokenRange(2)leading(1)trailing(1)with(1)"));
            var var_replaceLeading = arguments[curarg];
            curarg++;
            if (argcv[1] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for leading (arg list 2) of replaceTokenRange(2)leading(1)trailing(1)with(1)"));
            var var_replaceTrailing = arguments[curarg];
            curarg++;
            if (argcv[2] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for trailing (arg list 3) of replaceTokenRange(2)leading(1)trailing(1)with(1)"));
            var var_s = arguments[curarg];
            curarg++;
            if (argcv[3] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for with (arg list 4) of replaceTokenRange(2)leading(1)trailing(1)with(1)"));
            setModuleName("errormessages");
            var if1096 = GraceDone;
            setLineNumber(131);    // compilenode identifier
            var opresult1099 = callmethodChecked(var_start, "==", [1], var_end);
            if (Grace_isTrue(opresult1099)) {
              setLineNumber(132);    // compilenode identifier
              onSelf = true;
              var call1100 = callmethodChecked(this, "replaceToken()leading()trailing()with", [1, 1, 1, 1], var_start, var_replaceLeading, var_replaceTrailing, var_s);
              if1096 = call1100;
            } else {
              setLineNumber(135);    // compilenode identifier
              onSelf = true;
              var call1101 = callmethodChecked(this, "getTokenStart()includeLeadingSpace", [1, 1], var_start, var_replaceLeading);
              var var_insertPos = call1101;
              setLineNumber(136);    // compilenode identifier
              var call1102 = callmethodChecked(var_start, "indent", [0]);
              var call1103 = callmethodChecked(var_start, "line", [0]);
              onSelf = true;
              var call1104 = callmethodChecked(this, "getLine", [1], call1103);
              var call1105 = callmethodChecked(call1104, "substringFrom()to", [1, 1], new GraceNum(1), call1102);
              var var_indent = call1105;
              setLineNumber(137);    // compilenode identifier
              onSelf = true;
              var call1106 = callmethodChecked(this, "deleteTokenRange()leading()trailing", [2, 1, 1], var_start, var_end, var_replaceLeading, var_replaceTrailing);
              var if1107 = GraceDone;
              setLineNumber(139);    // compilenode string
              var string1108 = new GraceString("");
              var call1110 = callmethodChecked(var_start, "line", [0]);
              onSelf = true;
              var call1111 = callmethodChecked(this, "getLine", [1], call1110);
              var opresult1113 = callmethodChecked(call1111, "==", [1], string1108);
              if (Grace_isTrue(opresult1113)) {
                setLineNumber(140);    // compilenode identifier
                var opresult1116 = callmethodChecked(var_indent, "++", [1], var_s);
                var call1117 = callmethodChecked(var_start, "line", [0]);
                onSelf = true;
                var call1118 = callmethodChecked(this, "insert()atPosition()onLine", [1, 1, 1], opresult1116, var_insertPos, call1117);
                if1107 = call1118;
              } else {
                setLineNumber(142);    // compilenode identifier
                var call1119 = callmethodChecked(var_start, "line", [0]);
                onSelf = true;
                var call1120 = callmethodChecked(this, "insert()atPosition()onLine", [1, 1, 1], var_s, var_insertPos, call1119);
                if1107 = call1120;
              }
              if1096 = if1107;
            }
            return if1096;
          };
          func1095.paramCounts = [2, 1, 1, 1];
          obj873.methods["replaceTokenRange()leading()trailing()with"] = func1095;
          func1095.definitionLine = 130;
          func1095.definitionModule = "errormessages";
          var func1121 = function(argcv) {    // method replaceTokenRange(2)with(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_start = arguments[curarg];
            curarg++;
            var var_end = arguments[curarg];
            curarg++;
            if (argcv[0] !== 2)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for replaceTokenRange (arg list 1) of replaceTokenRange(2)with(1)"));
            var var_s = arguments[curarg];
            curarg++;
            if (argcv[1] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for with (arg list 2) of replaceTokenRange(2)with(1)"));
            setModuleName("errormessages");
            setLineNumber(148);    // compilenode identifier
            onSelf = true;
            var call1122 = callmethodChecked(this, "replaceTokenRange()leading()trailing()with", [2, 1, 1, 1], var_start, var_end, GraceFalse, GraceFalse, var_s);
            return call1122;
          };
          func1121.paramCounts = [2, 1];
          obj873.methods["replaceTokenRange()with"] = func1121;
          func1121.definitionLine = 147;
          func1121.definitionModule = "errormessages";
          var func1123 = function(argcv) {    // method deleteToken(1)leading(1)trailing(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_token = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for deleteToken (arg list 1) of deleteToken(1)leading(1)trailing(1)"));
            var var_deleteLeading = arguments[curarg];
            curarg++;
            if (argcv[1] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for leading (arg list 2) of deleteToken(1)leading(1)trailing(1)"));
            var var_deleteTrailing = arguments[curarg];
            curarg++;
            if (argcv[2] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for trailing (arg list 3) of deleteToken(1)leading(1)trailing(1)"));
            setModuleName("errormessages");
            setLineNumber(153);    // compilenode identifier
            onSelf = true;
            var call1124 = callmethodChecked(this, "getTokenStart()includeLeadingSpace", [1, 1], var_token, var_deleteLeading);
            var var_start = call1124;
            setLineNumber(154);    // compilenode identifier
            onSelf = true;
            var call1125 = callmethodChecked(this, "getTokenEnd()includeTrailingSpace", [1, 1], var_token, var_deleteTrailing);
            var var_end = call1125;
            setLineNumber(155);    // compilenode identifier
            var call1126 = callmethodChecked(var_token, "line", [0]);
            onSelf = true;
            var call1127 = callmethodChecked(this, "deleteRange()onLine", [2, 1], var_start, var_end, call1126);
            return call1127;
          };
          func1123.paramCounts = [1, 1, 1];
          obj873.methods["deleteToken()leading()trailing"] = func1123;
          func1123.definitionLine = 152;
          func1123.definitionModule = "errormessages";
          var func1128 = function(argcv) {    // method deleteToken(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_token = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for deleteToken(1)"));
            setModuleName("errormessages");
            setLineNumber(159);    // compilenode identifier
            onSelf = true;
            var call1129 = callmethodChecked(this, "deleteToken()leading()trailing", [1, 1, 1], var_token, GraceFalse, GraceFalse);
            return call1129;
          };
          func1128.paramCounts = [1];
          obj873.methods["deleteToken"] = func1128;
          func1128.definitionLine = 158;
          func1128.definitionModule = "errormessages";
          var func1130 = function(argcv) {    // method deleteTokenRange(2)leading(1)trailing(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_start = arguments[curarg];
            curarg++;
            var var_end = arguments[curarg];
            curarg++;
            if (argcv[0] !== 2)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for deleteTokenRange (arg list 1) of deleteTokenRange(2)leading(1)trailing(1)"));
            var var_deleteLeading = arguments[curarg];
            curarg++;
            if (argcv[1] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for leading (arg list 2) of deleteTokenRange(2)leading(1)trailing(1)"));
            var var_deleteTrailing = arguments[curarg];
            curarg++;
            if (argcv[2] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for trailing (arg list 3) of deleteTokenRange(2)leading(1)trailing(1)"));
            setModuleName("errormessages");
            var if1131 = GraceDone;
            setLineNumber(164);    // compilenode identifier
            var opresult1134 = callmethodChecked(var_start, "==", [1], var_end);
            if (Grace_isTrue(opresult1134)) {
              setLineNumber(165);    // compilenode identifier
              onSelf = true;
              var call1135 = callmethodChecked(this, "deleteToken()leading()trailing", [1, 1, 1], var_start, var_deleteLeading, var_deleteTrailing);
              if1131 = call1135;
            } else {
              setLineNumber(167);    // compilenode identifier
              var call1136 = callmethodChecked(var_start, "line", [0]);
              var var_line = call1136;
              setLineNumber(168);    // compilenode identifier
              onSelf = true;
              var call1137 = callmethodChecked(this, "getTokenStart()includeLeadingSpace", [1, 1], var_start, var_deleteLeading);
              var var_startPos = call1137;
              setLineNumber(169);    // compilenode identifier
              onSelf = true;
              var call1138 = callmethodChecked(this, "getTokenEnd()includeTrailingSpace", [1, 1], var_start, var_deleteTrailing);
              var var_endPos = call1138;
              setLineNumber(170);    // compilenode identifier
              var call1139 = callmethodChecked(var_start, "next", [0]);
              var var_tok = call1139;
              setLineNumber(171);    // compilenode block
              var block1140 = new GraceBlock(this, 171, 0);
              block1140.real = function() {
                var opresult1143 = callmethodChecked(var_tok, "\u2260", [1], var_end);
                return opresult1143;
              };
              var block1144 = new GraceBlock(this, 171, 0);
              block1144.real = function() {
                var if1145 = GraceDone;
                setLineNumber(172);    // compilenode identifier
                var call1147 = callmethodChecked(var_tok, "line", [0]);
                var opresult1149 = callmethodChecked(call1147, "\u2260", [1], var_line);
                if (Grace_isTrue(opresult1149)) {
                  setLineNumber(173);    // compilenode identifier
                  onSelf = true;
                  var call1150 = callmethodChecked(this, "deleteRange()onLine", [2, 1], var_startPos, var_endPos, var_line);
                  setLineNumber(174);    // compilenode identifier
                  var call1151 = callmethodChecked(var_tok, "line", [0]);
                  var_line = call1151;
                  setLineNumber(175);    // compilenode identifier
                  onSelf = true;
                  var call1152 = callmethodChecked(this, "getTokenStart()includeLeadingSpace", [1, 1], var_tok, var_deleteLeading);
                  var_startPos = call1152;
                  if1145 = GraceDone;
                }
                setLineNumber(177);    // compilenode identifier
                onSelf = true;
                var call1153 = callmethodChecked(this, "getTokenEnd()includeTrailingSpace", [1, 1], var_tok, var_deleteTrailing);
                var_endPos = call1153;
                setLineNumber(178);    // compilenode identifier
                var call1154 = callmethodChecked(var_tok, "next", [0]);
                var_tok = call1154;
                return GraceDone;
              };
              var call1155 = callmethodChecked(var_prelude, "while()do", [1, 1], block1140, block1144);
              var if1156 = GraceDone;
              setLineNumber(180);    // compilenode identifier
              var call1158 = callmethodChecked(var_end, "line", [0]);
              var opresult1160 = callmethodChecked(call1158, "\u2260", [1], var_line);
              if (Grace_isTrue(opresult1160)) {
                setLineNumber(181);    // compilenode identifier
                onSelf = true;
                var call1161 = callmethodChecked(this, "deleteRange()onLine", [2, 1], var_startPos, var_endPos, var_line);
                if1156 = call1161;
              }
              setLineNumber(183);    // compilenode identifier
              onSelf = true;
              var call1162 = callmethodChecked(this, "getTokenEnd()includeTrailingSpace", [1, 1], var_end, var_deleteTrailing);
              var_endPos = call1162;
              setLineNumber(184);    // compilenode identifier
              var call1163 = callmethodChecked(var_end, "line", [0]);
              onSelf = true;
              var call1164 = callmethodChecked(this, "deleteRange()onLine", [2, 1], var_startPos, var_endPos, call1163);
              if1131 = call1164;
            }
            return if1131;
          };
          func1130.paramCounts = [2, 1, 1];
          obj873.methods["deleteTokenRange()leading()trailing"] = func1130;
          func1130.definitionLine = 163;
          func1130.definitionModule = "errormessages";
          var func1165 = function(argcv) {    // method deleteTokenRange(2)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_start = arguments[curarg];
            curarg++;
            var var_end = arguments[curarg];
            curarg++;
            if (argcv[0] !== 2)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for deleteTokenRange(2)"));
            setModuleName("errormessages");
            setLineNumber(189);    // compilenode identifier
            onSelf = true;
            var call1166 = callmethodChecked(this, "deleteTokenRange()leading()trailing", [2, 1, 1], var_start, var_end, GraceFalse, GraceFalse);
            return call1166;
          };
          func1165.paramCounts = [2];
          obj873.methods["deleteTokenRange"] = func1165;
          func1165.definitionLine = 188;
          func1165.definitionModule = "errormessages";
          var func1167 = function(argcv) {    // method deleteLine(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_lineNumber = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for deleteLine(1)"));
            setModuleName("errormessages");
            setLineNumber(193);    // compilenode string
            var string1168 = new GraceString("");
            onSelf = true;
            var call1169 = callmethodChecked(this, "addLine", [2], var_lineNumber, string1168);
            return call1169;
          };
          func1167.paramCounts = [1];
          obj873.methods["deleteLine"] = func1167;
          func1167.definitionLine = 192;
          func1167.definitionModule = "errormessages";
          var func1170 = function(argcv) {    // method insert(1)afterToken(1)andTrailingSpace(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_s = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for insert (arg list 1) of insert(1)afterToken(1)andTrailingSpace(1)"));
            var var_token = arguments[curarg];
            curarg++;
            if (argcv[1] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for afterToken (arg list 2) of insert(1)afterToken(1)andTrailingSpace(1)"));
            var var_afterTrailing = arguments[curarg];
            curarg++;
            if (argcv[2] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for andTrailingSpace (arg list 3) of insert(1)afterToken(1)andTrailingSpace(1)"));
            setModuleName("errormessages");
            setLineNumber(197);    // compilenode identifier
            onSelf = true;
            var call1172 = callmethodChecked(this, "getTokenEnd()includeTrailingSpace", [1, 1], var_token, var_afterTrailing);
            var opresult1174 = callmethodChecked(call1172, "+", [1], new GraceNum(1));
            var var_pos = opresult1174;
            setLineNumber(198);    // compilenode identifier
            var call1175 = callmethodChecked(var_token, "line", [0]);
            onSelf = true;
            var call1176 = callmethodChecked(this, "insert()atPosition()onLine", [1, 1, 1], var_s, var_pos, call1175);
            return call1176;
          };
          func1170.paramCounts = [1, 1, 1];
          obj873.methods["insert()afterToken()andTrailingSpace"] = func1170;
          func1170.definitionLine = 196;
          func1170.definitionModule = "errormessages";
          var func1177 = function(argcv) {    // method insert(1)afterToken(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_s = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for insert (arg list 1) of insert(1)afterToken(1)"));
            var var_token = arguments[curarg];
            curarg++;
            if (argcv[1] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for afterToken (arg list 2) of insert(1)afterToken(1)"));
            setModuleName("errormessages");
            setLineNumber(202);    // compilenode identifier
            onSelf = true;
            var call1178 = callmethodChecked(this, "insert()afterToken()andTrailingSpace", [1, 1, 1], var_s, var_token, GraceFalse);
            return call1178;
          };
          func1177.paramCounts = [1, 1];
          obj873.methods["insert()afterToken"] = func1177;
          func1177.definitionLine = 201;
          func1177.definitionModule = "errormessages";
          var func1179 = function(argcv) {    // method insert(1)beforeToken(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_s = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for insert (arg list 1) of insert(1)beforeToken(1)"));
            var var_token = arguments[curarg];
            curarg++;
            if (argcv[1] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for beforeToken (arg list 2) of insert(1)beforeToken(1)"));
            setModuleName("errormessages");
            setLineNumber(206);    // compilenode identifier
            var call1180 = callmethodChecked(var_token, "linePos", [0]);
            var call1181 = callmethodChecked(var_token, "line", [0]);
            onSelf = true;
            var call1182 = callmethodChecked(this, "insert()atPosition()onLine", [1, 1, 1], var_s, call1180, call1181);
            return call1182;
          };
          func1179.paramCounts = [1, 1];
          obj873.methods["insert()beforeToken"] = func1179;
          func1179.definitionLine = 205;
          func1179.definitionModule = "errormessages";
          var func1183 = function(argcv) {    // method insertNewLine(1)after(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_line = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for insertNewLine (arg list 1) of insertNewLine(1)after(1)"));
            var var_lineNumber = arguments[curarg];
            curarg++;
            if (argcv[1] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for after (arg list 2) of insertNewLine(1)after(1)"));
            setModuleName("errormessages");
            setLineNumber(211);    // compilenode identifier
            onSelf = true;
            var call1184 = callmethodChecked(this, "addLine", [2], var_lineNumber, var_line);
            return call1184;
          };
          func1183.paramCounts = [1, 1];
          obj873.methods["insertNewLine()after"] = func1183;
          func1183.definitionLine = 210;
          func1183.definitionModule = "errormessages";
          var func1185 = function(argcv) {    // method addLine(2)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_lineNumber = arguments[curarg];
            curarg++;
            var var_line = arguments[curarg];
            curarg++;
            if (argcv[0] !== 2)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addLine(2)"));
            setModuleName("errormessages");
            setLineNumber(217);    // compilenode identifier
            onSelf = true;
            var call1186 = callmethodChecked(this, "findLine", [1], var_lineNumber);
            var var_i = call1186;
            var if1187 = GraceDone;
            setLineNumber(218);    // compilenode identifier
            var opresult1190 = callmethodChecked(var_i, "\u2260", [1], GraceFalse);
            if (Grace_isTrue(opresult1190)) {
              setLineNumber(219);    // compilenode call
              onSelf = true;
              var call1191 = callmethodChecked(this, "lines", [0]);
              var call1192 = callmethodChecked(call1191, "at()put", [1, 1], var_i, var_line);
              if1187 = call1192;
            } else {
              setLineNumber(222);    // compilenode call
              onSelf = true;
              var call1193 = callmethodChecked(this, "lineNumbers", [0]);
              var call1194 = callmethodChecked(call1193, "push", [1], var_lineNumber);
              setLineNumber(223);    // compilenode call
              onSelf = true;
              var call1195 = callmethodChecked(this, "lines", [0]);
              var call1196 = callmethodChecked(call1195, "push", [1], var_line);
              var if1197 = GraceDone;
              setLineNumber(224);    // compilenode call
              onSelf = true;
              var call1199 = callmethodChecked(this, "lines", [0]);
              var call1200 = callmethodChecked(call1199, "size", [0]);
              var opresult1202 = callmethodChecked(call1200, ">", [1], new GraceNum(1));
              if (Grace_isTrue(opresult1202)) {
                setLineNumber(226);    // compilenode call
                onSelf = true;
                var call1203 = callmethodChecked(this, "lines", [0]);
                var call1204 = callmethodChecked(call1203, "size", [0]);
                var_i = call1204;
                setLineNumber(227);    // compilenode block
                var block1205 = new GraceBlock(this, 227, 0);
                block1205.real = function() {
                  var block1206 = new GraceBlock(this, 227, 0);
                  block1206.real = function() {
                    var diff1209 = callmethodChecked(var_i, "-", [1], new GraceNum(1));
                    onSelf = true;
                    var call1210 = callmethodChecked(this, "lineNumbers", [0]);
                    var call1211 = callmethodChecked(call1210, "at", [1], diff1209);
                    var opresult1214 = callmethodChecked(var_lineNumber, "<", [1], call1211);
                    return opresult1214;
                  };
                  var opresult1218 = callmethodChecked(var_i, ">", [1], new GraceNum(1));
                  var opresult1220 = callmethodChecked(opresult1218, "&&", [1], block1206);
                  return opresult1220;
                };
                var block1221 = new GraceBlock(this, 227, 0);
                block1221.real = function() {
                  setLineNumber(228);    // compilenode identifier
                  var diff1224 = callmethodChecked(var_i, "-", [1], new GraceNum(1));
                  onSelf = true;
                  var call1225 = callmethodChecked(this, "lineNumbers", [0]);
                  var call1226 = callmethodChecked(call1225, "at", [1], diff1224);
                  onSelf = true;
                  var call1227 = callmethodChecked(this, "lineNumbers", [0]);
                  var call1228 = callmethodChecked(call1227, "at()put", [1, 1], var_i, call1226);
                  setLineNumber(229);    // compilenode identifier
                  var diff1231 = callmethodChecked(var_i, "-", [1], new GraceNum(1));
                  onSelf = true;
                  var call1232 = callmethodChecked(this, "lines", [0]);
                  var call1233 = callmethodChecked(call1232, "at", [1], diff1231);
                  onSelf = true;
                  var call1234 = callmethodChecked(this, "lines", [0]);
                  var call1235 = callmethodChecked(call1234, "at()put", [1, 1], var_i, call1233);
                  setLineNumber(230);    // compilenode identifier
                  var diff1238 = callmethodChecked(var_i, "-", [1], new GraceNum(1));
                  var_i = diff1238;
                  return GraceDone;
                };
                var call1239 = callmethodChecked(var_prelude, "while()do", [1, 1], block1205, block1221);
                setLineNumber(232);    // compilenode call
                onSelf = true;
                var call1240 = callmethodChecked(this, "lineNumbers", [0]);
                var call1241 = callmethodChecked(call1240, "at()put", [1, 1], var_i, var_lineNumber);
                setLineNumber(233);    // compilenode call
                onSelf = true;
                var call1242 = callmethodChecked(this, "lines", [0]);
                var call1243 = callmethodChecked(call1242, "at()put", [1, 1], var_i, var_line);
                if1197 = call1243;
              }
              if1187 = if1197;
            }
            return if1187;
          };
          func1185.paramCounts = [2];
          obj873.methods["addLine"] = func1185;
          func1185.definitionLine = 216;
          func1185.definitionModule = "errormessages";
          var func1244 = function(argcv) {    // method findLine(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_lineNumber = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for findLine(1)"));
            setModuleName("errormessages");
            setLineNumber(241);    // compilenode call
            onSelf = true;
            var call1245 = callmethodChecked(this, "lineNumbers", [0]);
            var call1246 = callmethodChecked(call1245, "indices", [0]);
            var block1247 = new GraceBlock(this, 241, 1);
            setLineNumber(1);    // compilenode identifier
            block1247.real = function(var_i) {
              var if1248 = GraceDone;
              setLineNumber(242);    // compilenode call
              onSelf = true;
              var call1250 = callmethodChecked(this, "lineNumbers", [0]);
              var call1251 = callmethodChecked(call1250, "at", [1], var_i);
              var opresult1253 = callmethodChecked(call1251, "==", [1], var_lineNumber);
              if (Grace_isTrue(opresult1253)) {
                setLineNumber(243);    // compilenode identifier
                throw new ReturnException(var_i, returnTarget);
              }
              return if1248;
            };
            var call1254 = callmethodChecked(var_prelude, "for()do", [1, 1], call1246, block1247);
            setLineNumber(246);    // compilenode identifier
            return GraceFalse;
          };
          func1244.confidential = true;
          func1244.paramCounts = [1];
          obj873.methods["findLine"] = func1244;
          func1244.definitionLine = 240;
          func1244.definitionModule = "errormessages";
          var func1255 = function(argcv) {    // method getLine(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_lineNumber = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for getLine(1)"));
            setModuleName("errormessages");
            setLineNumber(252);    // compilenode identifier
            onSelf = true;
            var call1256 = callmethodChecked(this, "findLine", [1], var_lineNumber);
            var var_i = call1256;
            var if1257 = GraceDone;
            setLineNumber(253);    // compilenode identifier
            var opresult1260 = callmethodChecked(var_i, "==", [1], GraceFalse);
            if (Grace_isTrue(opresult1260)) {
              setLineNumber(254);    // compilenode identifier
              var call1261 = callmethodChecked(var_util, "lines", [0]);
              var call1262 = callmethodChecked(call1261, "at", [1], var_lineNumber);
              if1257 = call1262;
            } else {
              setLineNumber(256);    // compilenode call
              onSelf = true;
              var call1263 = callmethodChecked(this, "lines", [0]);
              var call1264 = callmethodChecked(call1263, "at", [1], var_i);
              if1257 = call1264;
            }
            return if1257;
          };
          func1255.confidential = true;
          func1255.paramCounts = [1];
          obj873.methods["getLine"] = func1255;
          func1255.definitionLine = 251;
          func1255.definitionModule = "errormessages";
          var func1265 = function(argcv) {    // method print
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for print"));
            setModuleName("errormessages");
            setLineNumber(261);    // compilenode call
            onSelf = true;
            var call1266 = callmethodChecked(this, "lines", [0]);
            var call1267 = callmethodChecked(call1266, "size", [0]);
            var opresult1270 = callmethodChecked(new GraceNum(1), "..", [1], call1267);
            var block1271 = new GraceBlock(this, 261, 1);
            setLineNumber(1);    // compilenode identifier
            block1271.real = function(var_i) {
              var if1272 = GraceDone;
              setLineNumber(262);    // compilenode block
              var block1273 = new GraceBlock(this, 262, 0);
              block1273.real = function() {
                var diff1277 = callmethodChecked(var_i, "-", [1], new GraceNum(1));
                onSelf = true;
                var call1278 = callmethodChecked(this, "lineNumbers", [0]);
                var call1279 = callmethodChecked(call1278, "at", [1], diff1277);
                var opresult1281 = callmethodChecked(call1279, "+", [1], new GraceNum(1));
                onSelf = true;
                var call1283 = callmethodChecked(this, "lineNumbers", [0]);
                var call1284 = callmethodChecked(call1283, "at", [1], var_i);
                var opresult1286 = callmethodChecked(call1284, ">", [1], opresult1281);
                return opresult1286;
              };
              var opresult1290 = callmethodChecked(var_i, ">", [1], new GraceNum(1));
              var opresult1292 = callmethodChecked(opresult1290, "&&", [1], block1273);
              if (Grace_isTrue(opresult1292)) {
                setLineNumber(263);    // compilenode string
                var string1293 = new GraceString("");
                var var_s = string1293;
                setLineNumber(264);    // compilenode identifier
                var diff1296 = callmethodChecked(var_i, "-", [1], new GraceNum(1));
                onSelf = true;
                var call1297 = callmethodChecked(this, "lineNumbers", [0]);
                var call1298 = callmethodChecked(call1297, "at", [1], diff1296);
                var call1299 = callmethodChecked(call1298, "asString", [0]);
                var call1300 = callmethodChecked(call1299, "size", [0]);
                var opresult1303 = callmethodChecked(new GraceNum(1), "..", [1], call1300);
                var block1304 = new GraceBlock(this, 264, 0);
                block1304.real = function() {
                  setLineNumber(265);    // compilenode string
                  var string1305 = new GraceString(" ");
                  var opresult1308 = callmethodChecked(var_s, "++", [1], string1305);
                  var_s = opresult1308;
                  return GraceDone;
                };
                var call1309 = callmethodChecked(var_prelude, "for()do", [1, 1], opresult1303, block1304);
                setLineNumber(267);    // compilenode string
                var string1310 = new GraceString("...\n");
                var string1313 = new GraceString("    ");
                var opresult1315 = callmethodChecked(string1313, "++", [1], var_s);
                var opresult1317 = callmethodChecked(opresult1315, "++", [1], string1310);
                var call1318 = callmethodChecked(var_io, "error", [0]);
                var call1319 = callmethodChecked(call1318, "write", [1], opresult1317);
                if1272 = call1319;
              }
              var if1320 = GraceDone;
              setLineNumber(270);    // compilenode call
              onSelf = true;
              var call1321 = callmethodChecked(this, "lineNumbers", [0]);
              var call1322 = callmethodChecked(call1321, "at", [1], var_i);
              onSelf = true;
              var call1324 = callmethodChecked(this, "lineNumbers", [0]);
              var call1325 = callmethodChecked(call1324, "at", [1], var_i);
              var call1326 = callmethodChecked(call1325, "truncated", [0]);
              var opresult1328 = callmethodChecked(call1326, "\u2260", [1], call1322);
              if (Grace_isTrue(opresult1328)) {
                setLineNumber(271);    // compilenode string
                var string1329 = new GraceString("\n");
                onSelf = true;
                var call1331 = callmethodChecked(this, "lines", [0]);
                var call1332 = callmethodChecked(call1331, "at", [1], var_i);
                var string1334 = new GraceString(": ");
                onSelf = true;
                var call1336 = callmethodChecked(this, "lineNumbers", [0]);
                var call1337 = callmethodChecked(call1336, "at", [1], var_i);
                var call1338 = callmethodChecked(call1337, "truncated", [0]);
                var string1340 = new GraceString(" *");
                var opresult1342 = callmethodChecked(string1340, "++", [1], call1338);
                var opresult1344 = callmethodChecked(opresult1342, "++", [1], string1334);
                var opresult1346 = callmethodChecked(opresult1344, "++", [1], call1332);
                var opresult1348 = callmethodChecked(opresult1346, "++", [1], string1329);
                var call1349 = callmethodChecked(var_io, "error", [0]);
                var call1350 = callmethodChecked(call1349, "write", [1], opresult1348);
                if1320 = call1350;
              } else {
                setLineNumber(273);    // compilenode string
                var string1351 = new GraceString("\n");
                onSelf = true;
                var call1353 = callmethodChecked(this, "lines", [0]);
                var call1354 = callmethodChecked(call1353, "at", [1], var_i);
                var string1356 = new GraceString(": ");
                onSelf = true;
                var call1358 = callmethodChecked(this, "lineNumbers", [0]);
                var call1359 = callmethodChecked(call1358, "at", [1], var_i);
                var string1361 = new GraceString("  ");
                var opresult1363 = callmethodChecked(string1361, "++", [1], call1359);
                var opresult1365 = callmethodChecked(opresult1363, "++", [1], string1356);
                var opresult1367 = callmethodChecked(opresult1365, "++", [1], call1354);
                var opresult1369 = callmethodChecked(opresult1367, "++", [1], string1351);
                var call1370 = callmethodChecked(var_io, "error", [0]);
                var call1371 = callmethodChecked(call1370, "write", [1], opresult1369);
                if1320 = call1371;
              }
              return if1320;
            };
            var call1372 = callmethodChecked(var_prelude, "for()do", [1, 1], opresult1270, block1271);
            return call1372;
          };
          func1265.paramCounts = [0];
          obj873.methods["print"] = func1265;
          func1265.definitionLine = 260;
          func1265.definitionModule = "errormessages";
          setLineNumber(15);    // compilenode array
          var array1373 = new PrimitiveGraceList([]);
          obj873.data["lineNumbers"] = array1373;
          var reader_errormessages_lineNumbers1374 = function() {
            return this.data["lineNumbers"];
          };
          reader_errormessages_lineNumbers1374.def = true;
          reader_errormessages_lineNumbers1374.confidential = true;
          obj873.methods["lineNumbers"] = reader_errormessages_lineNumbers1374;
          setLineNumber(16);    // compilenode array
          var array1375 = new PrimitiveGraceList([]);
          obj873.data["lines"] = array1375;
          var reader_errormessages_lines1376 = function() {
            return this.data["lines"];
          };
          reader_errormessages_lines1376.def = true;
          reader_errormessages_lines1376.confidential = true;
          obj873.methods["lines"] = reader_errormessages_lines1376;
          superDepth = origSuperDepth;
        };
        obj_init_873.apply(inheritingObject, []);
        return obj873;
        };
        obj365.methods["new()object"] = func872;
      superDepth = origSuperDepth;
    };
    obj_init_365.apply(obj365, []);
    var var_suggestion = obj365;
    setLineNumber(273);    // compilenode method
    var func1377 = function(argcv) {    // method suggestion
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for suggestion"));
      setModuleName("errormessages");
      // suggestion is a simple accessor - elide try ... catch
      setLineNumber(13);    // compilenode identifier
      return var_suggestion;
    };
    func1377.paramCounts = [0];
    this.methods["suggestion"] = func1377;
    func1377.definitionLine = 273;
    func1377.definitionModule = "errormessages";
    this.methods["suggestion"].debug = "def";
    return this;
  }
  gracecode_errormessages.imports = ['io', 'sys', 'util'];
  if (typeof gctCache !== "undefined")
    gctCache['errormessages'] = "classes:\n suggestion\nconfidential:\n min3\nconstructors-of:suggestion:\n new\nfresh-methods:\nmethods-of:suggestion.new:\n addLine\n append()onLine\n deleteChar()onLine\n deleteLine\n deleteRange()onLine\n deleteToken\n deleteToken()leading()trailing\n deleteTokenRange\n deleteTokenRange()leading()trailing\n findLine\n getLine\n getTokenEnd()includeTrailingSpace\n getTokenStart()includeLeadingSpace\n insert()afterToken\n insert()afterToken()andTrailingSpace\n insert()atPosition()onLine\n insert()beforeToken\n insertNewLine()after\n lineNumbers\n lines\n print\n replaceChar()with()onLine\n replaceRange()with()onLine\n replaceToken()leading()trailing()with\n replaceToken()with\n replaceTokenRange()leading()trailing()with\n replaceTokenRange()with\n replaceUntil()with()onLine\nmodules:\n io\n sys\n util\npath:\n errormessages\npublic:\n error\n error()atLine\n error()atLine()withSuggestions\n error()atPosition\n error()atPosition()withSuggestions\n error()atRange\n error()atRange()withSuggestions\n name()matches()within\n suggestion\n syntaxError()atLine\n syntaxError()atLine()withSuggestion\n syntaxError()atLine()withSuggestions\n syntaxError()atPosition\n syntaxError()atPosition()withSuggestion\n syntaxError()atPosition()withSuggestions\n syntaxError()atRange\n syntaxError()atRange()withSuggestion\n syntaxError()atRange()withSuggestions\ntypes:\n";
  if (typeof originalSourceLines !== "undefined") {
    originalSourceLines["errormessages"] = [
      "#pragma ExtendedLineups",
      "import \"io\" as io",
      "import \"sys\" as sys",
      "import \"util\" as util",
      "",
      "// Contains modified lines used as suggestions for error messages.",
      "// When a line is added using one of the utility methods such as",
      "// insert()afterToken()onLine(), the line is copied from util.lines to the",
      "// internal lines array in the suggestion, and when a line that is already in",
      "// the array is modified, the internal lines array is updated.",
      "// There is no sorting of the order of the lines at any point, so",
      "// lines must be added in ascending order.",
      "def suggestion is public = object {",
      "  class new {",
      "    def lineNumbers is confidential = []",
      "    def lines is confidential = []",
      "",
      "    // Methods that deal with inserting/replacing/deleting character positions",
      "    // and ranges. These methods are usually called by lexing error messages",
      "    // due to lack of access to tokens, and by insert/replace/delete methods",
      "    // that operate on tokens.",
      "",
      "    method replaceRange(start, end)with(s)onLine(lineNumber) {",
      "        def line = getLine(lineNumber)",
      "        if(start == 1) then {",
      "            addLine(lineNumber, s ++ line.substringFrom(end + 1)to(line.size))",
      "        } else {",
      "            addLine(lineNumber, line.substringFrom(1)to(start - 1)",
      "                ++ s ++ line.substringFrom(end + 1)to(line.size))",
      "        }",
      "    }",
      "",
      "    method replaceChar(pos)with(s)onLine(lineNumber) {",
      "        replaceRange(pos, pos)with(s)onLine(lineNumber)",
      "    }",
      "",
      "    method replaceUntil(until)with(s)onLine(lineNumber) {",
      "        def line = getLine(lineNumber)",
      "        def len = until.size",
      "        for (1..line.size) do {i->",
      "            if (line.substringFrom(i)to(i + len - 1) == until) then {",
      "                replaceRange(1, i + len - 1)with(s)onLine(lineNumber)",
      "                return true",
      "            }",
      "        }",
      "        return false",
      "    }",
      "",
      "    method deleteRange(start, end)onLine(lineNumber) {",
      "        var start' := start",
      "        def line = getLine(lineNumber)",
      "        if((start' > 1) && (end == line.size)) then {",
      "            // Check for removing the whole line, then remove the indent also.",
      "            var indent := true",
      "            for(1..(start'-1)) do { i ->",
      "                if(line.at(i) != \" \") then {",
      "                    indent := false",
      "                }",
      "            }",
      "            if(indent == true) then {",
      "                start' := 1",
      "            }",
      "        }",
      "        replaceRange(start', end)with(\"\")onLine(lineNumber)",
      "    }",
      "",
      "    method deleteChar(pos)onLine(lineNumber) {",
      "        replaceRange(pos, pos)with(\"\")onLine(lineNumber)",
      "    }",
      "",
      "    method append(s)onLine(lineNumber) {",
      "        def line = getLine(lineNumber)",
      "        addLine(lineNumber, line ++ s)",
      "    }",
      "",
      "    method insert(s)atPosition(pos)onLine(lineNumber) {",
      "        def line = getLine(lineNumber)",
      "        if(pos == 1) then {",
      "            addLine(lineNumber, s ++ line)",
      "        } else {",
      "            addLine(lineNumber, line.substringFrom(1)to(pos - 1) ++ s",
      "                ++ line.substringFrom(pos)to(line.size))",
      "        }",
      "    }",
      "",
      "    // Methods that deal with inserting/replacing/deleteing tokens or ranges of",
      "    // tokens. These methods call the underlying methods that operate on",
      "    // characters.",
      "",
      "    method getTokenStart(token)includeLeadingSpace(includeLeading) {",
      "        var start := token.linePos",
      "        // Include leading whitespace.",
      "        if(includeLeading == true) then {",
      "            if((token.prev != false) && ({token.prev.line == token.line})) then {",
      "                start := token.prev.linePos + token.prev.size",
      "            }",
      "        }",
      "        // Include indentation if this is the only token on the line.",
      "        if(token.linePos == (token.indent + 1)) then {",
      "            if ((token.next == false) || {token.next.line != token.line}) then {",
      "                start := 1",
      "            }",
      "        }",
      "        start",
      "    }",
      "",
      "    method getTokenEnd(token)includeTrailingSpace(includeTrailing) {",
      "        var end := token.linePos + token.size - 1",
      "        // Include trailing space.",
      "        if(includeTrailing == true) then {",
      "            if((token.next != false) && ({token.next.line == token.line})) then {",
      "                end := token.next.linePos - 1;",
      "            } else {",
      "                end := getLine(token.line).size",
      "            }",
      "        }",
      "        end",
      "    }",
      "",
      "    method replaceToken(token)leading(replaceLeading)trailing(replaceTrailing)with(s) {",
      "        def start = getTokenStart(token)includeLeadingSpace(replaceLeading)",
      "        def end = getTokenEnd(token)includeTrailingSpace(replaceTrailing)",
      "        replaceRange(start, end)with(s)onLine(token.line)",
      "    }",
      "",
      "    method replaceToken(token)with(s) {",
      "        replaceToken(token)leading(false)trailing(false)with(s)",
      "    }",
      "",
      "    method replaceTokenRange(start, end)leading(replaceLeading)trailing(replaceTrailing)with(s) {",
      "        if(start == end) then {",
      "            replaceToken(start)leading(replaceLeading)trailing(replaceTrailing)with(s)",
      "        } else {",
      "            // Get the ident and position now in case deleteTokenRange changes it.",
      "            def insertPos = getTokenStart(start)includeLeadingSpace(replaceLeading)",
      "            def indent = getLine(start.line).substringFrom(1)to(start.indent)",
      "            deleteTokenRange(start, end)leading(replaceLeading)trailing(replaceTrailing)",
      "            // If delete token range deleted the indent, then add it back.",
      "            if(getLine(start.line) == \"\") then {",
      "                insert(indent ++ s)atPosition(insertPos)onLine(start.line)",
      "            } else {",
      "                insert(s)atPosition(insertPos)onLine(start.line)",
      "            }",
      "        }",
      "    }",
      "",
      "    method replaceTokenRange(start, end)with(s) {",
      "        replaceTokenRange(start, end)leading(false)trailing(false)with(s)",
      "    }",
      "",
      "    // Deletes a token, and optionally leading and/or trailing spaces.",
      "    method deleteToken(token)leading(deleteLeading)trailing(deleteTrailing) {",
      "        def start = getTokenStart(token)includeLeadingSpace(deleteLeading)",
      "        def end = getTokenEnd(token)includeTrailingSpace(deleteTrailing)",
      "        deleteRange(start, end)onLine(token.line)",
      "    }",
      "",
      "    method deleteToken(token) {",
      "        deleteToken(token)leading(false)trailing(false)",
      "    }",
      "",
      "    // Deletes a range of tokens, and optionally leading and/or trailing spaces.",
      "    method deleteTokenRange(start, end)leading(deleteLeading)trailing(deleteTrailing) {",
      "        if(start == end) then {",
      "            deleteToken(start)leading(deleteLeading)trailing(deleteTrailing)",
      "        } else {",
      "            var line := start.line",
      "            var startPos := getTokenStart(start)includeLeadingSpace(deleteLeading)",
      "            var endPos := getTokenEnd(start)includeTrailingSpace(deleteTrailing)",
      "            var tok := start.next",
      "            while {tok != end} do {",
      "                if(tok.line != line) then {",
      "                    deleteRange(startPos, endPos)onLine(line)",
      "                    line := tok.line",
      "                    startPos := getTokenStart(tok)includeLeadingSpace(deleteLeading)",
      "                }",
      "                endPos := getTokenEnd(tok)includeTrailingSpace(deleteTrailing)",
      "                tok := tok.next",
      "            }",
      "            if(end.line != line) then {",
      "                deleteRange(startPos, endPos)onLine(line)",
      "            }",
      "            endPos := getTokenEnd(end)includeTrailingSpace(deleteTrailing)",
      "            deleteRange(startPos, endPos)onLine(end.line)",
      "        }",
      "    }",
      "",
      "    method deleteTokenRange(start, end) {",
      "        deleteTokenRange(start, end)leading(false)trailing(false)",
      "    }",
      "",
      "    method deleteLine(lineNumber) {",
      "        addLine(lineNumber, \"\")",
      "    }",
      "",
      "    method insert(s)afterToken(token)andTrailingSpace(afterTrailing) {",
      "        def pos = getTokenEnd(token)includeTrailingSpace(afterTrailing) + 1",
      "        insert(s)atPosition(pos)onLine(token.line)",
      "    }",
      "",
      "    method insert(s)afterToken(token) {",
      "        insert(s)afterToken(token)andTrailingSpace(false)",
      "    }",
      "",
      "    method insert(s)beforeToken(token) {",
      "        insert(s)atPosition(token.linePos)onLine(token.line)",
      "    }",
      "",
      "    // Insert a new line. This stores the line with the same number as the line it comes after.",
      "    method insertNewLine(line)after(lineNumber) {",
      "        addLine(lineNumber, line)",
      "    }",
      "",
      "    // Manually add a line to the suggestion. This will overwrite any previous",
      "    // changes that may have been made to this line.",
      "    method addLine(lineNumber, line) {",
      "        var i := findLine(lineNumber)",
      "        if(i != false) then {",
      "            lines.at(i)put(line)",
      "        } else {",
      "            // Add new lines to make the list big enough.",
      "            lineNumbers.push(lineNumber)",
      "            lines.push(line)",
      "            if (lines.size > 1) then {",
      "                // Re-order the list.",
      "                i := lines.size",
      "                while {(i > 1) && {lineNumber < lineNumbers.at(i - 1)}} do {",
      "                    lineNumbers.at(i) put(lineNumbers.at(i - 1))",
      "                    lines.at(i) put (lines.at(i - 1))",
      "                    i := i - 1",
      "                }",
      "                lineNumbers.at(i) put (lineNumber)",
      "                lines.at(i) put (line)",
      "            }",
      "        }",
      "    }",
      "",
      "    // Internal method used to find the index of a line in the lines array.",
      "    // Returns false if the line is not found.",
      "    method findLine(lineNumber) is confidential {",
      "        for(lineNumbers.indices) do { i ->",
      "            if(lineNumbers.at(i) == lineNumber) then {",
      "                return i",
      "            }",
      "        }",
      "        false",
      "    }",
      "",
      "    // Internal method used to get the contents of a line so far.",
      "    // If the line is not part of this suggestion then it gets the unmodified line.",
      "    method getLine(lineNumber) is confidential {",
      "        def i = findLine(lineNumber)",
      "        if(i == false) then {",
      "            util.lines.at(lineNumber)",
      "        } else {",
      "            lines.at(i)",
      "        }",
      "    }",
      "",
      "    method print {",
      "        for(1..lines.size) do { i ->",
      "            if((i > 1) && {(lineNumbers.at(i) > (lineNumbers.at(i-1) + 1))}) then {",
      "                var s := \"\"",
      "                for(1..lineNumbers.at(i-1).asString.size) do {",
      "                    s := s ++ \" \"",
      "                }",
      "                io.error.write(\"    {s}...\\n\")",
      "            }",
      "            // Handle insertion of new lines.",
      "            if(lineNumbers.at(i).truncated != lineNumbers.at(i)) then {",
      "                io.error.write(\" *{lineNumbers.at(i).truncated}: {lines.at(i)}\\n\")",
      "            } else {",
      "                io.error.write(\"  {lineNumbers.at(i)}: {lines.at(i)}\\n\")",
      "            }",
      "        }",
      "    }",
      "  }",
      "}",
      "",
      "method name (p:String) matches (t:String) within (k:Number) {",
      "    // This is algorithm EDP from Jokinen, Jorma, Tarhio and Ukkinen:",
      "    // \"A comparison of Approximate String Matching Algorithms\"",
      "    // Software—Practice and Experience Vol 1(1), January 1988, pp.1–19",
      "    //",
      "    // Implements the \"Enhanced Dynamic Programming\" (EDP) algorithm for",
      "    // approximate string matching.  If pattern p matches text t within",
      "    // an edit distance ≤ k, this method returns j, the index of the highest",
      "    // character of t involved in the match.  Its time compelxity is O(k*|p|).",
      "    //",
      "    // The algorithm builds a dynamic progarmming table D such that",
      "    // D[i,j] is the minimum edit distance between p[1] p[2] ... p[i]",
      "    // and any substring of t ending at t[j].   However, it isn't necessary",
      "    // to store the whole table D.  Because D[i,j] depends on only D[i-1, j],",
      "    // D[i-1, j-1] and D[i, j-1], we can store only the current",
      "    // column, which we do in h, and the value of D[i-1,j-1], which is",
      "    // cached in c.  Moreover, since we are not interested in edit",
      "    // distances > k, it's only necessary to evalue the elments of the table",
      "    // around the diagonal.",
      "",
      "",
      "    def m = p.size",
      "    def n = t.size",
      "    if (k >= m) then { return m }  // trivial case",
      "    def k' = min3(k, n-1, m-1)",
      "    var top := k' + 1  // the location where the topmost diagonal under",
      "                       // threshold intersects the current column",
      "    def h = emptyList",
      "    for (0..m) do { i -> h.at(i+1) put(i+1) }",
      "    try {",
      "        for (1..n) do { j ->",
      "            var c := 0",
      "            for (1..top) do { i ->",
      "                def e = if (p.at(i) == t.at(j)) then {",
      "                    c",
      "                } else {",
      "                    min3(h.at(i), h.at(i+1), c) + 1",
      "                }",
      "                c := h.at(i+1)",
      "                h.at(i+1) put (e)",
      "            }",
      "            while { (top >= 0) && {h.at(top+1) > k'} } do { top := top - 1 }",
      "            if (top == m) then {",
      "                return j    // the last character of t that was used in the match",
      "            } else {",
      "                top := top + 1",
      "            }",
      "        }",
      "    } catch { e:BoundsError -> return 0 }   // if the code is buggy, don't crash",
      "    return 0            // there was no match",
      "}",
      "",
      "method min3(a, b, c) is confidential {",
      "    def sf = if (a < b) then { a } else { b }",
      "    if (sf < c) then { sf } else { c }",
      "}",
      "",
      "",
      "// Methods to actually display an error message and suggestions, then exit.",
      "method syntaxError(message)atRange(errlinenum, startpos, endpos) {",
      "    syntaxError(message)atRange(errlinenum, startpos, endpos)withSuggestions([])",
      "}",
      "",
      "method syntaxError(message)atRange(errlinenum, startpos, endpos)withSuggestion(suggestion') {",
      "    syntaxError(message)atRange(errlinenum, startpos, endpos)withSuggestions([suggestion'])",
      "}",
      "",
      "method syntaxError(message)atRange(errlinenum, startpos, endpos)withSuggestions(suggestions) {",
      "    var loc := if(startpos == endpos) then {startpos.asString} else { \"{startpos}-{endpos}\" }",
      "    var arr := \"----\"",
      "    for (2..(startpos + errlinenum.asString.size)) do { _ ->",
      "        arr := arr ++ \"-\"",
      "    }",
      "    for (startpos..endpos) do { _ ->",
      "        arr := arr ++ \"^\"",
      "    }",
      "    util.syntaxError(message, errlinenum, \":{loc}\", arr, false, suggestions)",
      "}",
      "",
      "method error(message)atRange(errlinenum, startpos, endpos)withSuggestions(suggestions) {",
      "    var loc := if(startpos == endpos) then {startpos.asString} else { \"{startpos}-{endpos}\" }",
      "    var arr := \"----\"",
      "    for (2..(startpos + errlinenum.asString.size)) do { _ ->",
      "        arr := arr ++ \"-\"",
      "    }",
      "    for (startpos..endpos) do { _ ->",
      "        arr := arr ++ \"^\"",
      "    }",
      "    util.generalError(message, errlinenum, \":{loc}\", arr, false, suggestions)",
      "}",
      "",
      "method error(message) atRange(errlinenum, startpos, endpos) {",
      "    error (message) atRange(errlinenum, startpos, endpos) withSuggestions([])",
      "}",
      "",
      "method syntaxError(message)atPosition(errlinenum, errpos) {",
      "    syntaxError(message)atPosition(errlinenum, errpos)withSuggestions([])",
      "}",
      "",
      "method error(message) atPosition(errlinenum, errpos) {",
      "    error(message) atPosition(errlinenum, errpos) withSuggestions([])",
      "}",
      "",
      "method syntaxError(message)atPosition(errlinenum, errpos)withSuggestion(suggestion') {",
      "    syntaxError(message)atPosition(errlinenum, errpos)withSuggestions([suggestion'])",
      "}",
      "",
      "method syntaxError(message)atPosition(errlinenum, errpos)withSuggestions(suggestions) {",
      "    var arr := \"----\"",
      "    for (2..(errpos + errlinenum.asString.size)) do { _ ->",
      "        arr := arr ++ \"-\"",
      "    }",
      "    arr := arr ++ \"^\"",
      "    util.syntaxError(message, errlinenum, \":({errpos})\", arr, false, suggestions)",
      "}",
      "",
      "method error(message) atPosition(errlinenum, errpos)",
      "        withSuggestions(suggestions) {",
      "    var arr := \"----\"",
      "    for (2..(errpos + errlinenum.asString.size)) do { _ ->",
      "        arr := arr ++ \"-\"",
      "    }",
      "    arr := arr ++ \"^\"",
      "    util.generalError(message, errlinenum, \":({errpos})\", arr, false, suggestions)",
      "}",
      "",
      "method error(message) {",
      "    util.generalError(message, 0, \"\", \"\", false, [])",
      "}",
      "",
      "method error(message)atLine(errlinenum)withSuggestions(suggestions) {",
      "    var arr := \"----\"",
      "    for (1..errlinenum.asString.size) do { _ ->",
      "        arr := arr ++ \"-\"",
      "    }",
      "    for (1..util.lines.at(errlinenum).size) do { _ ->",
      "        arr := arr ++ \"^\"",
      "    }",
      "    util.generalError(message, errlinenum, \"\", arr, false, suggestions)",
      "}",
      "",
      "method error(message)atLine(errlinenum) {",
      "    error(message)atLine(errlinenum)withSuggestions([])",
      "}",
      "",
      "method syntaxError(message)atLine(errlinenum) {",
      "    syntaxError(message)atLine(errlinenum)withSuggestions([])",
      "}",
      "",
      "method syntaxError(message)atLine(errlinenum)withSuggestion(suggestion') {",
      "    syntaxError(message)atLine(errlinenum)withSuggestions([suggestion'])",
      "}",
      "",
      "method syntaxError(message)atLine(errlinenum)withSuggestions(suggestions) {",
      "    var arr := \"----\"",
      "    for (1..errlinenum.asString.size) do { _ ->",
      "        arr := arr ++ \"-\"",
      "    }",
      "    for (1..util.lines.at(errlinenum).size) do { _ ->",
      "        arr := arr ++ \"^\"",
      "    }",
      "    util.syntaxError(message, errlinenum, \"\", arr, false, suggestions)",
      "}" ];
  }
  if (typeof global !== "undefined")
    global.gracecode_errormessages = gracecode_errormessages;
  if (typeof window !== "undefined")
    window.gracecode_errormessages = gracecode_errormessages;
