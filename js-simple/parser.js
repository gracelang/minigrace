"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_parser() {
  setModuleName("parser");
  this.definitionModule = "parser";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_parser_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_parser_outer0;
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
    setModuleName("parser");
    // io is a simple accessor - elide try ... catch
    return var_io;
  };
  func1.paramCounts = [0];
  this.methods["io"] = func1;
  func1.definitionLine = 2;
  func1.definitionModule = "parser";
  func1.debug = "import";
  func1.confidential = true;
  setModuleName("parser");
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
    setModuleName("parser");
    // ast is a simple accessor - elide try ... catch
    return var_ast;
  };
  func2.paramCounts = [0];
  this.methods["ast"] = func2;
  func2.definitionLine = 3;
  func2.definitionModule = "parser";
  func2.debug = "import";
  func2.confidential = true;
  setModuleName("parser");
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
    setModuleName("parser");
    // util is a simple accessor - elide try ... catch
    return var_util;
  };
  func3.paramCounts = [0];
  this.methods["util"] = func3;
  func3.definitionLine = 4;
  func3.definitionModule = "parser";
  func3.debug = "import";
  func3.confidential = true;
  setModuleName("parser");
  setLineNumber(5);    // compilenode import
  // Import of errormessages as errormessages
  if (typeof gracecode_errormessages == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module errormessages'));
  var var_errormessages = do_import("errormessages", gracecode_errormessages);
  var func4 = function(argcv) {    // method errormessages
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for errormessages"));
    setModuleName("parser");
    // errormessages is a simple accessor - elide try ... catch
    return var_errormessages;
  };
  func4.paramCounts = [0];
  this.methods["errormessages"] = func4;
  func4.definitionLine = 5;
  func4.definitionModule = "parser";
  func4.debug = "import";
  func4.confidential = true;
  setModuleName("parser");
  setLineNumber(37);    // compilenode method
  var func5 = function(argcv) {    // method noteBlank
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for noteBlank"));
    setModuleName("parser");
    setLineNumber(38);    // compilenode identifier
    var call7 = callmethodChecked(var_sym, "line", [0]);
    var diff9 = callmethodChecked(call7, "-", [1], new GraceNum(1));
    var_blankLocation = diff9;
    return GraceDone;
  };
  func5.paramCounts = [0];
  this.methods["noteBlank"] = func5;
  func5.definitionLine = 37;
  func5.definitionModule = "parser";
  setLineNumber(43);    // compilenode method
  var func10 = function(argcv) {    // method next
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for next"));
    setModuleName("parser");
    var if11 = GraceDone;
    setLineNumber(47);    // compilenode identifier
    var call13 = callmethodChecked(var_tokens, "size", [0]);
    var opresult15 = callmethodChecked(call13, ">", [1], new GraceNum(0));
    if (Grace_isTrue(opresult15)) {
      setLineNumber(48);    // compilenode identifier
      var_lastToken = var_sym;
      setLineNumber(49);    // compilenode identifier
      var call16 = callmethodChecked(var_lastToken, "line", [0]);
      var_lastLine = call16;
      setLineNumber(50);    // compilenode identifier
      var call17 = callmethodChecked(var_lastToken, "indent", [0]);
      var_lastIndent = call17;
      setLineNumber(51);    // compilenode identifier
      var call18 = callmethodChecked(var_tokens, "poll", [0]);
      var_sym = call18;
      var if19 = GraceDone;
      setLineNumber(52);    // compilenode identifier
      var opresult22 = callmethodChecked(var_lastLine, "+", [1], new GraceNum(1));
      var call24 = callmethodChecked(var_sym, "line", [0]);
      var opresult26 = callmethodChecked(call24, ">", [1], opresult22);
      if (Grace_isTrue(opresult26)) {
        onSelf = true;
        var call27 = callmethodChecked(this, "noteBlank", [0]);
        if19 = call27;
      }
      setLineNumber(53);    // compilenode call
      onSelf = true;
      var call28 = callmethodChecked(this, "pushComments", [0]);
      setLineNumber(54);    // compilenode identifier
      var call29 = callmethodChecked(var_sym, "line", [0]);
      var call30 = callmethodChecked(var_sym, "linePos", [0]);
      var call31 = callmethodChecked(var_util, "setPosition", [2], call29, call30);
      if11 = call31;
    } else {
      setLineNumber(57);    // compilenode string
      var string32 = new GraceString("This is often caused by a missing '}'");
      setLineNumber(56);    // compilenode string
      var string34 = new GraceString("unexpectedly found the end of the input. ");
      var opresult36 = callmethodChecked(string34, "++", [1], string32);
      setLineNumber(58);    // compilenode identifier
      var call37 = callmethodChecked(var_sym, "line", [0]);
      var call38 = callmethodChecked(var_sym, "linePos", [0]);
      var call39 = callmethodChecked(var_sym, "linePos", [0]);
      setLineNumber(56);    // compilenode identifier
      var call40 = callmethodChecked(var_errormessages, "syntaxError()atRange", [1, 3], opresult36, call37, call38, call39);
      if11 = call40;
    }
    return if11;
  };
  func10.paramCounts = [0];
  this.methods["next"] = func10;
  func10.definitionLine = 43;
  func10.definitionModule = "parser";
  setLineNumber(63);    // compilenode method
  var func41 = function(argcv) {    // method findNextToken(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_tokenMatcher = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for findNextToken(1)"));
    setModuleName("parser");
    var if42 = GraceDone;
    setLineNumber(67);    // compilenode identifier
    var call43 = callmethodChecked(var_tokenMatcher, "apply", [1], var_sym);
    if (Grace_isTrue(call43)) {
      setLineNumber(68);    // compilenode identifier
      return var_sym;
    }
    setLineNumber(70);    // compilenode identifier
    var var_nextTok = GraceFalse;
    setLineNumber(71);    // compilenode identifier
    var var_n = var_sym;
    setLineNumber(72);    // compilenode block
    var block44 = new GraceBlock(this, 72, 0);
    block44.real = function() {
      var block45 = new GraceBlock(this, 72, 0);
      block45.real = function() {
        var call46 = callmethodChecked(var_lastToken, "indent", [0]);
        var call48 = callmethodChecked(var_n, "indent", [0]);
        var opresult50 = callmethodChecked(call48, "\u2265", [1], call46);
        return opresult50;
      };
      var block52 = new GraceBlock(this, 72, 0);
      block52.real = function() {
        var opresult55 = callmethodChecked(GraceFalse, "==", [1], var_nextTok);
        return opresult55;
      };
      var opresult59 = callmethodChecked(GraceFalse, "\u2260", [1], var_n);
      var opresult61 = callmethodChecked(opresult59, "&&", [1], block52);
      var opresult63 = callmethodChecked(opresult61, "&&", [1], block45);
      return opresult63;
    };
    var block64 = new GraceBlock(this, 72, 0);
    block64.real = function() {
      var if65 = GraceDone;
      setLineNumber(73);    // compilenode identifier
      var call66 = callmethodChecked(var_tokenMatcher, "apply", [1], var_n);
      if (Grace_isTrue(call66)) {
        setLineNumber(74);    // compilenode identifier
        var_nextTok = var_n;
        if65 = GraceDone;
      }
      setLineNumber(76);    // compilenode identifier
      var call67 = callmethodChecked(var_n, "next", [0]);
      var_n = call67;
      return GraceDone;
    };
    var call68 = callmethodChecked(var_prelude, "while()do", [1, 1], block44, block64);
    setLineNumber(78);    // compilenode identifier
    return var_nextTok;
  };
  func41.paramCounts = [1];
  this.methods["findNextToken"] = func41;
  func41.definitionLine = 63;
  func41.definitionModule = "parser";
  setLineNumber(81);    // compilenode method
  var func69 = function(argcv) {    // method findNextTokenIndentedAt(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_tok = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for findNextTokenIndentedAt(1)"));
    setModuleName("parser");
    var if70 = GraceDone;
    setLineNumber(82);    // compilenode string
    var string71 = new GraceString("eof");
    var call73 = callmethodChecked(var_sym, "kind", [0]);
    var opresult75 = callmethodChecked(call73, "==", [1], string71);
    var call77 = callmethodChecked(var_tok, "indent", [0]);
    var call79 = callmethodChecked(var_sym, "indent", [0]);
    var opresult81 = callmethodChecked(call79, "\u2264", [1], call77);
    var call83 = callmethodChecked(var_tok, "line", [0]);
    var call85 = callmethodChecked(var_sym, "line", [0]);
    var opresult87 = callmethodChecked(call85, ">", [1], call83);
    var opresult89 = callmethodChecked(opresult87, "&&", [1], opresult81);
    var opresult91 = callmethodChecked(opresult89, "||", [1], opresult75);
    if (Grace_isTrue(opresult91)) {
      setLineNumber(83);    // compilenode identifier
      return var_sym;
    }
    setLineNumber(85);    // compilenode identifier
    var var_nextTok = GraceFalse;
    setLineNumber(86);    // compilenode identifier
    var var_n = var_sym;
    setLineNumber(87);    // compilenode block
    var block92 = new GraceBlock(this, 87, 0);
    block92.real = function() {
      var block93 = new GraceBlock(this, 87, 0);
      block93.real = function() {
        var opresult96 = callmethodChecked(GraceFalse, "==", [1], var_nextTok);
        return opresult96;
      };
      var opresult100 = callmethodChecked(GraceFalse, "\u2260", [1], var_n);
      var opresult102 = callmethodChecked(opresult100, "&&", [1], block93);
      return opresult102;
    };
    var block103 = new GraceBlock(this, 87, 0);
    block103.real = function() {
      var if104 = GraceDone;
      setLineNumber(88);    // compilenode string
      var string105 = new GraceString("eof");
      var call107 = callmethodChecked(var_sym, "kind", [0]);
      var opresult109 = callmethodChecked(call107, "==", [1], string105);
      var call111 = callmethodChecked(var_tok, "indent", [0]);
      var call113 = callmethodChecked(var_n, "indent", [0]);
      var opresult115 = callmethodChecked(call113, "\u2264", [1], call111);
      var call117 = callmethodChecked(var_tok, "line", [0]);
      var call119 = callmethodChecked(var_n, "line", [0]);
      var opresult121 = callmethodChecked(call119, ">", [1], call117);
      var opresult123 = callmethodChecked(opresult121, "&&", [1], opresult115);
      var opresult125 = callmethodChecked(opresult123, "||", [1], opresult109);
      if (Grace_isTrue(opresult125)) {
        setLineNumber(89);    // compilenode identifier
        var_nextTok = var_n;
        if104 = GraceDone;
      }
      setLineNumber(91);    // compilenode identifier
      var call126 = callmethodChecked(var_n, "next", [0]);
      var_n = call126;
      return GraceDone;
    };
    var call127 = callmethodChecked(var_prelude, "while()do", [1, 1], block92, block103);
    setLineNumber(93);    // compilenode identifier
    return var_nextTok;
  };
  func69.paramCounts = [1];
  this.methods["findNextTokenIndentedAt"] = func69;
  func69.definitionLine = 81;
  func69.definitionModule = "parser";
  setLineNumber(96);    // compilenode method
  var func128 = function(argcv) {    // method findNextValidToken(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_validFollowTokens = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for findNextValidToken(1)"));
    setModuleName("parser");
    setLineNumber(98);    // compilenode string
    var string130 = new GraceString("dot");
    var string131 = new GraceString("comma");
    var string132 = new GraceString("colon");
    var string133 = new GraceString("rparen");
    setLineNumber(99);    // compilenode string
    var string134 = new GraceString("rbrace");
    var string135 = new GraceString("rsquare");
    var string136 = new GraceString("arrow");
    var string137 = new GraceString("bind");
    var array129 = new PrimitiveGraceList([string130, string131, string132, string133, string134, string135, string136, string137]);
    var call138 = callmethodChecked(var_prelude, "set", [1], array129);
    var var_invalidTokens = call138;
    setLineNumber(100);    // compilenode identifier
    var var_validToken = var_sym;
    setLineNumber(101);    // compilenode block
    var block139 = new GraceBlock(this, 101, 0);
    block139.real = function() {
      var string140 = new GraceString("eof");
      var call142 = callmethodChecked(var_validToken, "kind", [0]);
      var opresult144 = callmethodChecked(call142, "\u2260", [1], string140);
      return opresult144;
    };
    var block145 = new GraceBlock(this, 101, 0);
    block145.real = function() {
      var if146 = GraceDone;
      setLineNumber(103);    // compilenode identifier
      var call147 = callmethodChecked(var_validToken, "kind", [0]);
      var call148 = callmethodChecked(var_validFollowTokens, "contains", [1], call147);
      if (Grace_isTrue(call148)) {
        setLineNumber(104);    // compilenode identifier
        throw new ReturnException(var_validToken, returnTarget);
      }
      var if149 = GraceDone;
      setLineNumber(107);    // compilenode identifier
      var call150 = callmethodChecked(var_validToken, "kind", [0]);
      var call151 = callmethodChecked(var_invalidTokens, "contains", [1], call150);
      var call152 = callmethodChecked(call151, "prefix!", [0]);
      if (Grace_isTrue(call152)) {
        setLineNumber(108);    // compilenode identifier
        throw new ReturnException(var_validToken, returnTarget);
      }
      setLineNumber(111);    // compilenode identifier
      var call153 = callmethodChecked(var_validToken, "next", [0]);
      var_validToken = call153;
      return GraceDone;
    };
    var call154 = callmethodChecked(var_prelude, "while()do", [1, 1], block139, block145);
    setLineNumber(113);    // compilenode identifier
    return var_validToken;
  };
  func128.paramCounts = [1];
  this.methods["findNextValidToken"] = func128;
  func128.definitionLine = 96;
  func128.definitionModule = "parser";
  setLineNumber(121);    // compilenode method
  var func155 = function(argcv) {    // method findClosingBrace(2)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_token = arguments[curarg];
    curarg++;
    var var_inserted = arguments[curarg];
    curarg++;
    if (argcv[0] !== 2)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for findClosingBrace(2)"));
    setModuleName("parser");
    setLineNumber(122);    // compilenode identifier
    var var_n = var_sym;
    var if156 = GraceDone;
    setLineNumber(123);    // compilenode identifier
    if (Grace_isTrue(var_inserted)) {
      if156 = new GraceNum(1);
    } else {
      if156 = new GraceNum(0);
    }
    var var_numOpening = if156;
    setLineNumber(124);    // compilenode num
    var var_numClosing = new GraceNum(0);
    setLineNumber(125);    // compilenode object
    var obj157 = Grace_allocObject(GraceObject, "result");
    obj157.definitionModule = "parser";
    obj157.definitionLine = 125;
    obj157.outer = this;
    var reader_parser_outer158 = function() {
      return this.outer;
    };
    obj157.methods["outer"] = reader_parser_outer158;
    var obj_init_157 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj157;
      obj157.data["found"] = undefined;
      var reader_parser_found159 = function() {
        return this.data["found"];
      };
      obj157.methods["found"] = reader_parser_found159;
      obj157.data["found"] = undefined;
      var writer_parser_found159 = function(argcv, o) {
        this.data["found"] = o;
        return GraceDone;
      };
      obj157.methods["found:="] = writer_parser_found159;
      obj157.mutable = true;
      obj157.data["tok"] = undefined;
      var reader_parser_tok160 = function() {
        return this.data["tok"];
      };
      obj157.methods["tok"] = reader_parser_tok160;
      obj157.data["tok"] = undefined;
      var writer_parser_tok160 = function(argcv, o) {
        this.data["tok"] = o;
        return GraceDone;
      };
      obj157.methods["tok:="] = writer_parser_tok160;
      obj157.mutable = true;
      superDepth = origSuperDepth;
    };
    obj_init_157.apply(obj157, []);
    var var_result = obj157;
    setLineNumber(130);    // compilenode block
    var block161 = new GraceBlock(this, 130, 0);
    block161.real = function() {
      var call162 = callmethodChecked(var_token, "line", [0]);
      var call164 = callmethodChecked(var_n, "line", [0]);
      var opresult166 = callmethodChecked(call164, "==", [1], call162);
      var string168 = new GraceString("eof");
      var call170 = callmethodChecked(var_n, "kind", [0]);
      var opresult172 = callmethodChecked(call170, "\u2260", [1], string168);
      var opresult174 = callmethodChecked(opresult172, "&&", [1], opresult166);
      return opresult174;
    };
    var block175 = new GraceBlock(this, 130, 0);
    block175.real = function() {
      var if176 = GraceDone;
      setLineNumber(131);    // compilenode string
      var string177 = new GraceString("lbrace");
      var call179 = callmethodChecked(var_n, "kind", [0]);
      var opresult181 = callmethodChecked(call179, "==", [1], string177);
      if (Grace_isTrue(opresult181)) {
        var opresult184 = callmethodChecked(var_numOpening, "+", [1], new GraceNum(1));
        var_numOpening = opresult184;
        if176 = GraceDone;
      } else {
        var if185 = GraceDone;
        setLineNumber(132);    // compilenode string
        var string186 = new GraceString("rbrace");
        var call188 = callmethodChecked(var_n, "kind", [0]);
        var opresult190 = callmethodChecked(call188, "==", [1], string186);
        if (Grace_isTrue(opresult190)) {
          var opresult193 = callmethodChecked(var_numClosing, "+", [1], new GraceNum(1));
          var_numClosing = opresult193;
          if185 = GraceDone;
        }
        if176 = if185;
      }
      setLineNumber(133);    // compilenode identifier
      var call194 = callmethodChecked(var_n, "next", [0]);
      var_n = call194;
      return GraceDone;
    };
    var call195 = callmethodChecked(var_prelude, "while()do", [1, 1], block161, block175);
    setLineNumber(136);    // compilenode block
    var block196 = new GraceBlock(this, 136, 0);
    block196.real = function() {
      var call197 = callmethodChecked(var_token, "indent", [0]);
      var call199 = callmethodChecked(var_n, "indent", [0]);
      var opresult201 = callmethodChecked(call199, ">", [1], call197);
      var string203 = new GraceString("eof");
      var call205 = callmethodChecked(var_n, "kind", [0]);
      var opresult207 = callmethodChecked(call205, "\u2260", [1], string203);
      var opresult209 = callmethodChecked(opresult207, "&&", [1], opresult201);
      return opresult209;
    };
    var block210 = new GraceBlock(this, 136, 0);
    block210.real = function() {
      var if211 = GraceDone;
      setLineNumber(137);    // compilenode string
      var string212 = new GraceString("lbrace");
      var call214 = callmethodChecked(var_n, "kind", [0]);
      var opresult216 = callmethodChecked(call214, "==", [1], string212);
      if (Grace_isTrue(opresult216)) {
        setLineNumber(138);    // compilenode identifier
        var opresult219 = callmethodChecked(var_numOpening, "+", [1], new GraceNum(1));
        var_numOpening = opresult219;
        if211 = GraceDone;
      } else {
        var if220 = GraceDone;
        setLineNumber(139);    // compilenode string
        var string221 = new GraceString("rbrace");
        var call223 = callmethodChecked(var_n, "kind", [0]);
        var opresult225 = callmethodChecked(call223, "==", [1], string221);
        if (Grace_isTrue(opresult225)) {
          setLineNumber(140);    // compilenode identifier
          var opresult228 = callmethodChecked(var_numClosing, "+", [1], new GraceNum(1));
          var_numClosing = opresult228;
          if220 = GraceDone;
        }
        if211 = if220;
      }
      setLineNumber(142);    // compilenode identifier
      var call229 = callmethodChecked(var_n, "next", [0]);
      var_n = call229;
      return GraceDone;
    };
    var call230 = callmethodChecked(var_prelude, "while()do", [1, 1], block196, block210);
    var if231 = GraceDone;
    setLineNumber(144);    // compilenode string
    var string232 = new GraceString("rbrace");
    var call234 = callmethodChecked(var_n, "kind", [0]);
    var opresult236 = callmethodChecked(call234, "==", [1], string232);
    if (Grace_isTrue(opresult236)) {
      setLineNumber(145);    // compilenode identifier
      var call237 = callmethodChecked(var_result, "found:=", [1], GraceTrue);
      setLineNumber(146);    // compilenode identifier
      var call238 = callmethodChecked(var_result, "tok:=", [1], var_n);
      if231 = call238;
    } else {
      var if239 = GraceDone;
      setLineNumber(147);    // compilenode identifier
      var opresult242 = callmethodChecked(var_numOpening, "==", [1], var_numClosing);
      var string244 = new GraceString("rbrace");
      var call246 = callmethodChecked(var_n, "prev", [0]);
      var call247 = callmethodChecked(call246, "kind", [0]);
      var opresult249 = callmethodChecked(call247, "==", [1], string244);
      var opresult251 = callmethodChecked(opresult249, "&&", [1], opresult242);
      if (Grace_isTrue(opresult251)) {
        setLineNumber(149);    // compilenode identifier
        var call252 = callmethodChecked(var_result, "found:=", [1], GraceTrue);
        setLineNumber(150);    // compilenode identifier
        var call253 = callmethodChecked(var_n, "prev", [0]);
        var call254 = callmethodChecked(var_result, "tok:=", [1], call253);
        if239 = call254;
      } else {
        setLineNumber(152);    // compilenode identifier
        var call255 = callmethodChecked(var_result, "found:=", [1], GraceFalse);
        setLineNumber(153);    // compilenode identifier
        var call256 = callmethodChecked(var_n, "prev", [0]);
        var call257 = callmethodChecked(var_result, "tok:=", [1], call256);
        if239 = call257;
      }
      if231 = if239;
    }
    setLineNumber(155);    // compilenode identifier
    return var_result;
  };
  func155.paramCounts = [2];
  this.methods["findClosingBrace"] = func155;
  func155.definitionLine = 121;
  func155.definitionModule = "parser";
  setLineNumber(159);    // compilenode method
  var func258 = function(argcv) {    // method accept(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_t = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for accept(1)"));
    setModuleName("parser");
    setLineNumber(162);    // compilenode identifier
    var call260 = callmethodChecked(var_sym, "kind", [0]);
    var opresult262 = callmethodChecked(call260, "==", [1], var_t);
    return opresult262;
  };
  func258.paramCounts = [1];
  this.methods["accept"] = func258;
  func258.definitionLine = 159;
  func258.definitionModule = "parser";
  setLineNumber(165);    // compilenode method
  var func263 = function(argcv) {    // method acceptKeyword(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_kw = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for acceptKeyword(1)"));
    setModuleName("parser");
    var if264 = GraceDone;
    setLineNumber(166);    // compilenode string
    var string265 = new GraceString("keyword");
    var call267 = callmethodChecked(var_sym, "kind", [0]);
    var opresult269 = callmethodChecked(call267, "\u2260", [1], string265);
    if (Grace_isTrue(opresult269)) {
      return GraceFalse;
    }
    setLineNumber(167);    // compilenode identifier
    var call271 = callmethodChecked(var_sym, "value", [0]);
    var opresult273 = callmethodChecked(call271, "==", [1], var_kw);
    return opresult273;
  };
  func263.paramCounts = [1];
  this.methods["acceptKeyword"] = func263;
  func263.definitionLine = 165;
  func263.definitionModule = "parser";
  setLineNumber(170);    // compilenode method
  var func274 = function(argcv) {    // method acceptSameLine(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_t = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for acceptSameLine(1)"));
    setModuleName("parser");
    setLineNumber(176);    // compilenode identifier
    var call276 = callmethodChecked(var_sym, "indent", [0]);
    var opresult278 = callmethodChecked(call276, ">", [1], var_lastIndent);
    var call280 = callmethodChecked(var_sym, "line", [0]);
    var opresult283 = callmethodChecked(var_lastLine, "==", [1], call280);
    var opresult285 = callmethodChecked(opresult283, "||", [1], opresult278);
    setLineNumber(175);    // compilenode identifier
    var call288 = callmethodChecked(var_sym, "kind", [0]);
    var opresult290 = callmethodChecked(call288, "==", [1], var_t);
    var opresult292 = callmethodChecked(opresult290, "&&", [1], opresult285);
    return opresult292;
  };
  func274.paramCounts = [1];
  this.methods["acceptSameLine"] = func274;
  func274.definitionLine = 170;
  func274.definitionModule = "parser";
  setLineNumber(178);    // compilenode method
  var func293 = function(argcv) {    // method acceptWithoutSpaces(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_t = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for acceptWithoutSpaces(1)"));
    setModuleName("parser");
    setLineNumber(183);    // compilenode identifier
    var call294 = callmethodChecked(var_lastToken, "size", [0]);
    var call296 = callmethodChecked(var_lastToken, "linePos", [0]);
    var opresult298 = callmethodChecked(call296, "+", [1], call294);
    var call300 = callmethodChecked(var_sym, "linePos", [0]);
    var opresult302 = callmethodChecked(call300, "==", [1], opresult298);
    var call304 = callmethodChecked(var_sym, "line", [0]);
    var opresult307 = callmethodChecked(var_lastLine, "==", [1], call304);
    setLineNumber(182);    // compilenode identifier
    var call310 = callmethodChecked(var_sym, "kind", [0]);
    var opresult312 = callmethodChecked(call310, "==", [1], var_t);
    var opresult314 = callmethodChecked(opresult312, "&&", [1], opresult307);
    var opresult316 = callmethodChecked(opresult314, "&&", [1], opresult302);
    return opresult316;
  };
  func293.paramCounts = [1];
  this.methods["acceptWithoutSpaces"] = func293;
  func293.definitionLine = 178;
  func293.definitionModule = "parser";
  setLineNumber(185);    // compilenode method
  var func317 = function(argcv) {    // method acceptAfterSpaces(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_t = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for acceptAfterSpaces(1)"));
    setModuleName("parser");
    var if318 = GraceDone;
    setLineNumber(189);    // compilenode identifier
    var call320 = callmethodChecked(var_sym, "kind", [0]);
    var opresult322 = callmethodChecked(call320, "\u2260", [1], var_t);
    if (Grace_isTrue(opresult322)) {
      return GraceFalse;
    }
    var if323 = GraceDone;
    setLineNumber(190);    // compilenode identifier
    var call324 = callmethodChecked(var_sym, "line", [0]);
    var opresult327 = callmethodChecked(var_lastLine, "==", [1], call324);
    if (Grace_isTrue(opresult327)) {
      setLineNumber(191);    // compilenode identifier
      var call328 = callmethodChecked(var_lastToken, "size", [0]);
      var call330 = callmethodChecked(var_lastToken, "linePos", [0]);
      var opresult332 = callmethodChecked(call330, "+", [1], call328);
      var call334 = callmethodChecked(var_sym, "linePos", [0]);
      var opresult336 = callmethodChecked(call334, "\u2260", [1], opresult332);
      return opresult336;
    }
    setLineNumber(193);    // compilenode identifier
    var call338 = callmethodChecked(var_sym, "indent", [0]);
    var opresult340 = callmethodChecked(call338, "+", [1], new GraceNum(1));
    var call342 = callmethodChecked(var_sym, "linePos", [0]);
    var opresult344 = callmethodChecked(call342, "==", [1], opresult340);
    return opresult344;
  };
  func317.paramCounts = [1];
  this.methods["acceptAfterSpaces"] = func317;
  func317.definitionLine = 185;
  func317.definitionModule = "parser";
  setLineNumber(195);    // compilenode method
  var func345 = function(argcv) {    // method accept(1)onLineOf(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_t = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for accept (arg list 1) of accept(1)onLineOf(1)"));
    var var_other = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onLineOf (arg list 2) of accept(1)onLineOf(1)"));
    setModuleName("parser");
    setLineNumber(200);    // compilenode identifier
    var call346 = callmethodChecked(var_other, "indent", [0]);
    var call348 = callmethodChecked(var_sym, "indent", [0]);
    var opresult350 = callmethodChecked(call348, ">", [1], call346);
    setLineNumber(199);    // compilenode identifier
    var call352 = callmethodChecked(var_sym, "line", [0]);
    var call354 = callmethodChecked(var_other, "line", [0]);
    var opresult356 = callmethodChecked(call354, "==", [1], call352);
    var opresult358 = callmethodChecked(opresult356, "||", [1], opresult350);
    var call361 = callmethodChecked(var_sym, "kind", [0]);
    var opresult363 = callmethodChecked(call361, "==", [1], var_t);
    var opresult365 = callmethodChecked(opresult363, "&&", [1], opresult358);
    return opresult365;
  };
  func345.paramCounts = [1, 1];
  this.methods["accept()onLineOf"] = func345;
  func345.definitionLine = 195;
  func345.definitionModule = "parser";
  setLineNumber(202);    // compilenode method
  var func366 = function(argcv) {    // method acceptAfterSpaces(1)onLineOf(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_t = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for acceptAfterSpaces (arg list 1) of acceptAfterSpaces(1)onLineOf(1)"));
    var var_other = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onLineOf (arg list 2) of acceptAfterSpaces(1)onLineOf(1)"));
    setModuleName("parser");
    var if367 = GraceDone;
    setLineNumber(207);    // compilenode identifier
    var call369 = callmethodChecked(var_sym, "kind", [0]);
    var opresult371 = callmethodChecked(call369, "\u2260", [1], var_t);
    if (Grace_isTrue(opresult371)) {
      return GraceFalse;
    }
    var if372 = GraceDone;
    setLineNumber(208);    // compilenode identifier
    var call373 = callmethodChecked(var_other, "line", [0]);
    var call375 = callmethodChecked(var_sym, "line", [0]);
    var opresult377 = callmethodChecked(call375, "==", [1], call373);
    if (Grace_isTrue(opresult377)) {
      setLineNumber(209);    // compilenode identifier
      var call378 = callmethodChecked(var_lastToken, "size", [0]);
      var call380 = callmethodChecked(var_lastToken, "linePos", [0]);
      var opresult382 = callmethodChecked(call380, "+", [1], call378);
      var call384 = callmethodChecked(var_sym, "linePos", [0]);
      var opresult386 = callmethodChecked(call384, "\u2260", [1], opresult382);
      return opresult386;
    } else {
      setLineNumber(211);    // compilenode identifier
      var call388 = callmethodChecked(var_sym, "indent", [0]);
      var opresult390 = callmethodChecked(call388, "+", [1], new GraceNum(1));
      var call392 = callmethodChecked(var_sym, "linePos", [0]);
      var opresult394 = callmethodChecked(call392, "==", [1], opresult390);
      return opresult394;
    }
    return if372;
  };
  func366.paramCounts = [1, 1];
  this.methods["acceptAfterSpaces()onLineOf"] = func366;
  func366.definitionLine = 202;
  func366.definitionModule = "parser";
  setLineNumber(214);    // compilenode method
  var func395 = function(argcv) {    // method accept(1)onLineOfLastOr(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_t = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for accept (arg list 1) of accept(1)onLineOfLastOr(1)"));
    var var_other = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onLineOfLastOr (arg list 2) of accept(1)onLineOfLastOr(1)"));
    setModuleName("parser");
    setLineNumber(218);    // compilenode identifier
    var call396 = callmethodChecked(var_sym, "line", [0]);
    var call398 = callmethodChecked(var_lastToken, "line", [0]);
    var opresult400 = callmethodChecked(call398, "==", [1], call396);
    var call402 = callmethodChecked(var_other, "indent", [0]);
    var call404 = callmethodChecked(var_sym, "indent", [0]);
    var opresult406 = callmethodChecked(call404, ">", [1], call402);
    setLineNumber(217);    // compilenode identifier
    var call408 = callmethodChecked(var_sym, "line", [0]);
    var call410 = callmethodChecked(var_other, "line", [0]);
    var opresult412 = callmethodChecked(call410, "==", [1], call408);
    var opresult414 = callmethodChecked(opresult412, "||", [1], opresult406);
    var opresult416 = callmethodChecked(opresult414, "||", [1], opresult400);
    var call419 = callmethodChecked(var_sym, "kind", [0]);
    var opresult421 = callmethodChecked(call419, "==", [1], var_t);
    var opresult423 = callmethodChecked(opresult421, "&&", [1], opresult416);
    return opresult423;
  };
  func395.paramCounts = [1, 1];
  this.methods["accept()onLineOfLastOr"] = func395;
  func395.definitionLine = 214;
  func395.definitionModule = "parser";
  setLineNumber(220);    // compilenode method
  var func424 = function(argcv) {    // method acceptArgumentOnLineOf(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_tok = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for acceptArgumentOnLineOf(1)"));
    setModuleName("parser");
    var if425 = GraceDone;
    setLineNumber(222);    // compilenode string
    var string426 = new GraceString("string");
    onSelf = true;
    var call427 = callmethodChecked(this, "accept()onLineOf", [1, 1], string426, var_tok);
    if (Grace_isTrue(call427)) {
      return GraceTrue;
    }
    var if428 = GraceDone;
    setLineNumber(223);    // compilenode string
    var string429 = new GraceString("num");
    onSelf = true;
    var call430 = callmethodChecked(this, "accept()onLineOf", [1, 1], string429, var_tok);
    if (Grace_isTrue(call430)) {
      return GraceTrue;
    }
    var if431 = GraceDone;
    setLineNumber(224);    // compilenode string
    var string432 = new GraceString("lbrace");
    onSelf = true;
    var call433 = callmethodChecked(this, "accept()onLineOf", [1, 1], string432, var_tok);
    if (Grace_isTrue(call433)) {
      return GraceTrue;
    }
    var if434 = GraceDone;
    setLineNumber(225);    // compilenode string
    var string435 = new GraceString("lsquare");
    onSelf = true;
    var call436 = callmethodChecked(this, "acceptAfterSpaces()onLineOf", [1, 1], string435, var_tok);
    if (Grace_isTrue(call436)) {
      return GraceTrue;
    }
    var if437 = GraceDone;
    setLineNumber(226);    // compilenode string
    var string438 = new GraceString("identifier");
    onSelf = true;
    var call439 = callmethodChecked(this, "accept()onLineOf", [1, 1], string438, var_tok);
    if (Grace_isTrue(call439)) {
      setLineNumber(227);    // compilenode string
      var string440 = new GraceString("false");
      var call442 = callmethodChecked(var_sym, "value", [0]);
      var opresult444 = callmethodChecked(call442, "==", [1], string440);
      var string446 = new GraceString("true");
      var call448 = callmethodChecked(var_sym, "value", [0]);
      var opresult450 = callmethodChecked(call448, "==", [1], string446);
      var opresult452 = callmethodChecked(opresult450, "||", [1], opresult444);
      return opresult452;
    }
    setLineNumber(229);    // compilenode identifier
    return GraceFalse;
  };
  func424.paramCounts = [1];
  this.methods["acceptArgumentOnLineOf"] = func424;
  func424.definitionLine = 220;
  func424.definitionModule = "parser";
  setLineNumber(231);    // compilenode method
  var func453 = function(argcv) {    // method tokenOnSameLine
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for tokenOnSameLine"));
    setModuleName("parser");
    setLineNumber(233);    // compilenode identifier
    var call455 = callmethodChecked(var_sym, "indent", [0]);
    var opresult457 = callmethodChecked(call455, ">", [1], var_lastIndent);
    var call459 = callmethodChecked(var_sym, "line", [0]);
    var opresult462 = callmethodChecked(var_lastLine, "==", [1], call459);
    var opresult464 = callmethodChecked(opresult462, "||", [1], opresult457);
    return opresult464;
  };
  func453.paramCounts = [0];
  this.methods["tokenOnSameLine"] = func453;
  func453.definitionLine = 231;
  func453.definitionModule = "parser";
  setLineNumber(235);    // compilenode method
  var func465 = function(argcv) {    // method didConsume(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_aParsingBlock = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for didConsume(1)"));
    setModuleName("parser");
    setLineNumber(237);    // compilenode identifier
    var call466 = callmethodChecked(var_tokens, "size", [0]);
    var var_sz = call466;
    setLineNumber(238);    // compilenode identifier
    var call467 = callmethodChecked(var_aParsingBlock, "apply", [0]);
    setLineNumber(239);    // compilenode identifier
    var call469 = callmethodChecked(var_tokens, "size", [0]);
    var opresult471 = callmethodChecked(call469, "\u2260", [1], var_sz);
    return opresult471;
  };
  func465.paramCounts = [1];
  this.methods["didConsume"] = func465;
  func465.definitionLine = 235;
  func465.definitionModule = "parser";
  setLineNumber(241);    // compilenode method
  var func472 = function(argcv) {    // method ifConsume(1)then(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_ablock = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ifConsume (arg list 1) of ifConsume(1)then(1)"));
    var var_tblock = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for then (arg list 2) of ifConsume(1)then(1)"));
    setModuleName("parser");
    setLineNumber(243);    // compilenode identifier
    var call473 = callmethodChecked(var_tokens, "size", [0]);
    var var_sz = call473;
    setLineNumber(244);    // compilenode identifier
    var call474 = callmethodChecked(var_ablock, "apply", [0]);
    var if475 = GraceDone;
    setLineNumber(245);    // compilenode identifier
    var call477 = callmethodChecked(var_tokens, "size", [0]);
    var opresult479 = callmethodChecked(call477, "\u2260", [1], var_sz);
    if (Grace_isTrue(opresult479)) {
      setLineNumber(246);    // compilenode identifier
      var call480 = callmethodChecked(var_tblock, "apply", [0]);
      if475 = call480;
    }
    return if475;
  };
  func472.paramCounts = [1, 1];
  this.methods["ifConsume()then"] = func472;
  func472.definitionLine = 241;
  func472.definitionModule = "parser";
  setLineNumber(251);    // compilenode method
  var func481 = function(argcv) {    // method pushnum
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for pushnum"));
    setModuleName("parser");
    setLineNumber(252);    // compilenode identifier
    var call482 = callmethodChecked(var_sym, "value", [0]);
    var call483 = callmethodChecked(var_ast, "numNode", [0]);
    var call484 = callmethodChecked(call483, "new", [1], call482);
    var var_o = call484;
    setLineNumber(253);    // compilenode identifier
    var call485 = callmethodChecked(var_values, "push", [1], var_o);
    setLineNumber(254);    // compilenode call
    onSelf = true;
    var call486 = callmethodChecked(this, "next", [0]);
    return call486;
  };
  func481.paramCounts = [0];
  this.methods["pushnum"] = func481;
  func481.definitionLine = 251;
  func481.definitionModule = "parser";
  setLineNumber(258);    // compilenode method
  var func487 = function(argcv) {    // method pushstring
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for pushstring"));
    setModuleName("parser");
    setLineNumber(259);    // compilenode identifier
    var call488 = callmethodChecked(var_sym, "value", [0]);
    var call489 = callmethodChecked(var_ast, "stringNode", [0]);
    var call490 = callmethodChecked(call489, "new", [1], call488);
    var var_o = call490;
    setLineNumber(260);    // compilenode identifier
    var call491 = callmethodChecked(var_values, "push", [1], var_o);
    setLineNumber(261);    // compilenode call
    onSelf = true;
    var call492 = callmethodChecked(this, "next", [0]);
    return call492;
  };
  func487.paramCounts = [0];
  this.methods["pushstring"] = func487;
  func487.definitionLine = 258;
  func487.definitionModule = "parser";
  setLineNumber(266);    // compilenode method
  var func493 = function(argcv) {    // method pushidentifier
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for pushidentifier"));
    setModuleName("parser");
    setLineNumber(267);    // compilenode identifier
    var call494 = callmethodChecked(var_sym, "line", [0]);
    var call495 = callmethodChecked(var_sym, "linePos", [0]);
    var call496 = callmethodChecked(var_util, "setPosition", [2], call494, call495);
    setLineNumber(268);    // compilenode identifier
    var call497 = callmethodChecked(var_sym, "value", [0]);
    var call498 = callmethodChecked(var_ast, "identifierNode", [0]);
    var call499 = callmethodChecked(call498, "new", [2], call497, GraceFalse);
    var var_o = call499;
    var if500 = GraceDone;
    setLineNumber(269);    // compilenode string
    var string501 = new GraceString("_");
    var call503 = callmethodChecked(var_o, "value", [0]);
    var opresult505 = callmethodChecked(call503, "==", [1], string501);
    if (Grace_isTrue(opresult505)) {
      setLineNumber(270);    // compilenode string
      var string507 = new GraceString("__");
      var opresult509 = callmethodChecked(string507, "++", [1], var_auto__95__count);
      var call510 = callmethodChecked(var_o, "value:=", [1], opresult509);
      setLineNumber(271);    // compilenode identifier
      var call511 = callmethodChecked(var_o, "wildcard:=", [1], GraceTrue);
      setLineNumber(272);    // compilenode identifier
      var opresult514 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
      var_auto__95__count = opresult514;
      if500 = GraceDone;
    }
    setLineNumber(274);    // compilenode identifier
    var call515 = callmethodChecked(var_values, "push", [1], var_o);
    setLineNumber(275);    // compilenode call
    onSelf = true;
    var call516 = callmethodChecked(this, "next", [0]);
    return call516;
  };
  func493.paramCounts = [0];
  this.methods["pushidentifier"] = func493;
  func493.definitionLine = 266;
  func493.definitionModule = "parser";
  setLineNumber(278);    // compilenode method
  var func517 = function(argcv) {    // method checkAnnotation(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_ann = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for checkAnnotation(1)"));
    setModuleName("parser");
    var if518 = GraceDone;
    setLineNumber(279);    // compilenode string
    var string519 = new GraceString("call");
    var call521 = callmethodChecked(var_ann, "kind", [0]);
    var opresult523 = callmethodChecked(call521, "==", [1], string519);
    if (Grace_isTrue(opresult523)) {
      setLineNumber(280);    // compilenode identifier
      var call524 = callmethodChecked(var_ann, "with", [0]);
      var block525 = new GraceBlock(this, 280, 1);
      setLineNumber(1);    // compilenode identifier
      block525.real = function(var_p) {
        setLineNumber(281);    // compilenode identifier
        var call526 = callmethodChecked(var_p, "args", [0]);
        var block527 = new GraceBlock(this, 281, 1);
        setLineNumber(1);    // compilenode identifier
        block527.real = function(var_a) {
          var if528 = GraceDone;
          setLineNumber(282);    // compilenode block
          var block529 = new GraceBlock(this, 282, 0);
          block529.real = function() {
            var call530 = callmethodChecked(var_a, "dtype", [0]);
            var opresult533 = callmethodChecked(GraceFalse, "\u2260", [1], call530);
            return opresult533;
          };
          var string535 = new GraceString("identifier");
          var call537 = callmethodChecked(var_a, "kind", [0]);
          var opresult539 = callmethodChecked(call537, "==", [1], string535);
          var opresult541 = callmethodChecked(opresult539, "&&", [1], block529);
          if (Grace_isTrue(opresult541)) {
            setLineNumber(283);    // compilenode identifier
            var var_tok = var_sym;
            setLineNumber(285);    // compilenode block
            var block542 = new GraceBlock(this, 285, 0);
            block542.real = function() {
              var string543 = new GraceString(":");
              var call545 = callmethodChecked(var_tok, "value", [0]);
              var opresult547 = callmethodChecked(call545, "\u2260", [1], string543);
              return opresult547;
            };
            var block548 = new GraceBlock(this, 285, 0);
            block548.real = function() {
              var call549 = callmethodChecked(var_tok, "prev", [0]);
              var_tok = call549;
              return GraceDone;
            };
            var call550 = callmethodChecked(var_prelude, "while()do", [1, 1], block542, block548);
            setLineNumber(286);    // compilenode identifier
            var call551 = callmethodChecked(var_errormessages, "suggestion", [0]);
            var call552 = callmethodChecked(call551, "new", [0]);
            var var_suggestion = call552;
            setLineNumber(287);    // compilenode identifier
            var call553 = callmethodChecked(var_tok, "next", [0]);
            var call554 = callmethodChecked(var_suggestion, "deleteTokenRange()leading()trailing", [2, 1, 1], var_tok, call553, GraceTrue, GraceFalse);
            setLineNumber(288);    // compilenode string
            var string555 = new GraceString("an argument to an annotation cannot have a type.");
            setLineNumber(289);    // compilenode identifier
            var call556 = callmethodChecked(var_tok, "line", [0]);
            var call557 = callmethodChecked(var_tok, "linePos", [0]);
            var call559 = callmethodChecked(var_tok, "next", [0]);
            var call560 = callmethodChecked(call559, "size", [0]);
            var call562 = callmethodChecked(var_tok, "next", [0]);
            var call563 = callmethodChecked(call562, "linePos", [0]);
            var opresult565 = callmethodChecked(call563, "+", [1], call560);
            var diff567 = callmethodChecked(opresult565, "-", [1], new GraceNum(1));
            setLineNumber(288);    // compilenode identifier
            var call568 = callmethodChecked(var_errormessages, "syntaxError()atRange()withSuggestion", [1, 3, 1], string555, call556, call557, diff567, var_suggestion);
            if528 = call568;
          }
          return if528;
        };
        var call569 = callmethodChecked(var_prelude, "for()do", [1, 1], call526, block527);
        return call569;
      };
      var call570 = callmethodChecked(var_prelude, "for()do", [1, 1], call524, block525);
      if518 = call570;
    }
    setLineNumber(294);    // compilenode identifier
    return var_ann;
  };
  func517.paramCounts = [1];
  this.methods["checkAnnotation"] = func517;
  func517.definitionLine = 278;
  func517.definitionModule = "parser";
  setLineNumber(296);    // compilenode method
  var func571 = function(argcv) {    // method doannotation
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for doannotation"));
    setModuleName("parser");
    var if572 = GraceDone;
    setLineNumber(297);    // compilenode string
    var string573 = new GraceString("is");
    onSelf = true;
    var call574 = callmethodChecked(this, "acceptKeyword", [1], string573);
    var call575 = callmethodChecked(call574, "not", [0]);
    if (Grace_isTrue(call575)) {
      setLineNumber(298);    // compilenode identifier
      return GraceFalse;
    }
    setLineNumber(300);    // compilenode call
    onSelf = true;
    var call576 = callmethodChecked(this, "next", [0]);
    setLineNumber(301);    // compilenode array
    var array577 = new PrimitiveGraceList([]);
    var var_anns = array577;
    var if578 = GraceDone;
    setLineNumber(302);    // compilenode block
    var block579 = new GraceBlock(this, 302, 0);
    block579.real = function() {
      onSelf = true;
      var call580 = callmethodChecked(this, "expression", [1], var_noBlocks);
      return call580;
    };
    onSelf = true;
    var call581 = callmethodChecked(this, "didConsume", [1], block579);
    var call582 = callmethodChecked(call581, "not", [0]);
    if (Grace_isTrue(call582)) {
      setLineNumber(303);    // compilenode array
      var array583 = new PrimitiveGraceList([]);
      var var_suggestions = array583;
      setLineNumber(304);    // compilenode identifier
      var call584 = callmethodChecked(var_errormessages, "suggestion", [0]);
      var call585 = callmethodChecked(call584, "new", [0]);
      var var_suggestion = call585;
      setLineNumber(305);    // compilenode string
      var string587 = new GraceString("bind");
      var array586 = new PrimitiveGraceList([string587]);
      onSelf = true;
      var call588 = callmethodChecked(this, "findNextValidToken", [1], array586);
      var var_nextTok = call588;
      var if589 = GraceDone;
      setLineNumber(306);    // compilenode identifier
      var opresult592 = callmethodChecked(var_nextTok, "==", [1], var_sym);
      if (Grace_isTrue(opresult592)) {
        setLineNumber(307);    // compilenode string
        var string593 = new GraceString(" \u00abannotation\u00bb");
        var call594 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string593, var_lastToken);
        if589 = call594;
      } else {
        setLineNumber(309);    // compilenode identifier
        var call595 = callmethodChecked(var_nextTok, "prev", [0]);
        var string596 = new GraceString(" \u00abannotation\u00bb");
        var call597 = callmethodChecked(var_suggestion, "replaceTokenRange()leading()trailing()with", [2, 1, 1, 1], var_sym, call595, GraceTrue, GraceFalse, string596);
        if589 = call597;
      }
      setLineNumber(311);    // compilenode identifier
      var call598 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
      setLineNumber(312);    // compilenode identifier
      var call599 = callmethodChecked(var_errormessages, "suggestion", [0]);
      var call600 = callmethodChecked(call599, "new", [0]);
      var_suggestion = call600;
      setLineNumber(313);    // compilenode identifier
      var call601 = callmethodChecked(var_nextTok, "prev", [0]);
      var call602 = callmethodChecked(var_suggestion, "deleteTokenRange()leading()trailing", [2, 1, 1], var_lastToken, call601, GraceTrue, GraceFalse);
      setLineNumber(314);    // compilenode identifier
      var call603 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
      setLineNumber(315);    // compilenode string
      var string604 = new GraceString("one or more annotations separated by commas must follow 'is'.");
      setLineNumber(316);    // compilenode identifier
      var call605 = callmethodChecked(var_lastToken, "line", [0]);
      var call607 = callmethodChecked(var_lastToken, "size", [0]);
      var call609 = callmethodChecked(var_lastToken, "linePos", [0]);
      var opresult611 = callmethodChecked(call609, "+", [1], call607);
      var opresult613 = callmethodChecked(opresult611, "+", [1], new GraceNum(1));
      setLineNumber(315);    // compilenode identifier
      var call614 = callmethodChecked(var_errormessages, "syntaxError()atRange()withSuggestions", [1, 2, 1], string604, call605, opresult613, var_suggestions);
      if578 = call614;
    }
    setLineNumber(319);    // compilenode block
    var block615 = new GraceBlock(this, 319, 0);
    block615.real = function() {
      var string616 = new GraceString("comma");
      onSelf = true;
      var call617 = callmethodChecked(this, "accept", [1], string616);
      return call617;
    };
    var block618 = new GraceBlock(this, 319, 0);
    block618.real = function() {
      setLineNumber(320);    // compilenode identifier
      var call619 = callmethodChecked(var_values, "pop", [0]);
      onSelf = true;
      var call620 = callmethodChecked(this, "checkAnnotation", [1], call619);
      var call621 = callmethodChecked(var_anns, "push", [1], call620);
      setLineNumber(321);    // compilenode call
      onSelf = true;
      var call622 = callmethodChecked(this, "next", [0]);
      var if623 = GraceDone;
      setLineNumber(322);    // compilenode block
      var block624 = new GraceBlock(this, 322, 0);
      block624.real = function() {
        onSelf = true;
        var call625 = callmethodChecked(this, "expression", [1], var_noBlocks);
        return call625;
      };
      onSelf = true;
      var call626 = callmethodChecked(this, "didConsume", [1], block624);
      var call627 = callmethodChecked(call626, "not", [0]);
      if (Grace_isTrue(call627)) {
        setLineNumber(323);    // compilenode array
        var array628 = new PrimitiveGraceList([]);
        var var_suggestions = array628;
        setLineNumber(324);    // compilenode identifier
        var call629 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call630 = callmethodChecked(call629, "new", [0]);
        var var_suggestion = call630;
        setLineNumber(325);    // compilenode string
        var string632 = new GraceString("bind");
        var array631 = new PrimitiveGraceList([string632]);
        onSelf = true;
        var call633 = callmethodChecked(this, "findNextValidToken", [1], array631);
        var var_nextTok = call633;
        var if634 = GraceDone;
        setLineNumber(326);    // compilenode identifier
        var opresult637 = callmethodChecked(var_nextTok, "==", [1], var_sym);
        if (Grace_isTrue(opresult637)) {
          setLineNumber(327);    // compilenode string
          var string638 = new GraceString(" \u00abannotation\u00bb");
          var call639 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string638, var_lastToken);
          if634 = call639;
        } else {
          setLineNumber(329);    // compilenode identifier
          var call640 = callmethodChecked(var_nextTok, "prev", [0]);
          var string641 = new GraceString(" \u00abannotation\u00bb");
          var call642 = callmethodChecked(var_suggestion, "replaceTokenRange()leading()trailing()with", [2, 1, 1, 1], var_sym, call640, GraceTrue, GraceFalse, string641);
          if634 = call642;
        }
        setLineNumber(331);    // compilenode identifier
        var call643 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
        setLineNumber(332);    // compilenode identifier
        var call644 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call645 = callmethodChecked(call644, "new", [0]);
        var_suggestion = call645;
        setLineNumber(333);    // compilenode identifier
        var call646 = callmethodChecked(var_nextTok, "prev", [0]);
        var call647 = callmethodChecked(var_suggestion, "deleteTokenRange()leading()trailing", [2, 1, 1], var_lastToken, call646, GraceTrue, GraceFalse);
        setLineNumber(334);    // compilenode identifier
        var call648 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
        setLineNumber(335);    // compilenode string
        var string649 = new GraceString("one or more annotations separated by commas must follow 'is'.");
        setLineNumber(336);    // compilenode identifier
        var call650 = callmethodChecked(var_lastToken, "line", [0]);
        var call652 = callmethodChecked(var_lastToken, "size", [0]);
        var call654 = callmethodChecked(var_lastToken, "linePos", [0]);
        var opresult656 = callmethodChecked(call654, "+", [1], call652);
        var opresult658 = callmethodChecked(opresult656, "+", [1], new GraceNum(1));
        setLineNumber(335);    // compilenode identifier
        var call659 = callmethodChecked(var_errormessages, "syntaxError()atRange()withSuggestions", [1, 2, 1], string649, call650, opresult658, var_suggestions);
        if623 = call659;
      }
      return if623;
    };
    var call660 = callmethodChecked(var_prelude, "while()do", [1, 1], block615, block618);
    setLineNumber(340);    // compilenode identifier
    var call661 = callmethodChecked(var_values, "pop", [0]);
    onSelf = true;
    var call662 = callmethodChecked(this, "checkAnnotation", [1], call661);
    var call663 = callmethodChecked(var_anns, "push", [1], call662);
    setLineNumber(341);    // compilenode identifier
    return var_anns;
  };
  func571.paramCounts = [0];
  this.methods["doannotation"] = func571;
  func571.definitionLine = 296;
  func571.definitionModule = "parser";
  setLineNumber(344);    // compilenode method
  var func664 = function(argcv) {    // method blank
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for blank"));
    setModuleName("parser");
    var if665 = GraceDone;
    setLineNumber(345);    // compilenode identifier
    var opresult668 = callmethodChecked(var_blankLocation, "==", [1], new GraceNum(0));
    if (Grace_isTrue(opresult668)) {
      var if669 = GraceDone;
      setLineNumber(346);    // compilenode identifier
      var call671 = callmethodChecked(var_lastToken, "line", [0]);
      var opresult673 = callmethodChecked(call671, "+", [1], new GraceNum(1));
      var call675 = callmethodChecked(var_sym, "line", [0]);
      var opresult677 = callmethodChecked(call675, "\u2264", [1], opresult673);
      if (Grace_isTrue(opresult677)) {
        return var_done;
      }
      var if678 = GraceDone;
      setLineNumber(347);    // compilenode identifier
      var call680 = callmethodChecked(var_previousCommentToken, "line", [0]);
      var opresult682 = callmethodChecked(call680, "+", [1], new GraceNum(1));
      var call684 = callmethodChecked(var_sym, "line", [0]);
      var opresult686 = callmethodChecked(call684, "\u2264", [1], opresult682);
      if (Grace_isTrue(opresult686)) {
        return var_done;
      }
      if665 = if678;
    }
    setLineNumber(349);    // compilenode call
    onSelf = true;
    var call687 = callmethodChecked(this, "pushComments", [0]);
    var if688 = GraceDone;
    setLineNumber(351);    // compilenode block
    var block689 = new GraceBlock(this, 351, 0);
    block689.real = function() {
      var string690 = new GraceString("blank");
      var call692 = callmethodChecked(var_values, "last", [0]);
      var call693 = callmethodChecked(call692, "kind", [0]);
      var opresult695 = callmethodChecked(call693, "\u2260", [1], string690);
      return opresult695;
    };
    var call698 = callmethodChecked(var_values, "size", [0]);
    var opresult700 = callmethodChecked(call698, ">", [1], new GraceNum(0));
    var opresult702 = callmethodChecked(opresult700, "&&", [1], block689);
    setLineNumber(350);    // compilenode identifier
    var call705 = callmethodChecked(var_values, "size", [0]);
    var opresult707 = callmethodChecked(call705, "==", [1], new GraceNum(0));
    var opresult709 = callmethodChecked(opresult707, "||", [1], opresult702);
    if (Grace_isTrue(opresult709)) {
      var if710 = GraceDone;
      setLineNumber(352);    // compilenode identifier
      var opresult713 = callmethodChecked(var_blankLocation, ">", [1], new GraceNum(0));
      if (Grace_isTrue(opresult713)) {
        setLineNumber(353);    // compilenode identifier
        var call714 = callmethodChecked(var_util, "setPosition", [2], var_blankLocation, new GraceNum(0));
        setLineNumber(354);    // compilenode num
        var_blankLocation = new GraceNum(0);
        if710 = GraceDone;
      } else {
        setLineNumber(356);    // compilenode identifier
        var call716 = callmethodChecked(var_sym, "line", [0]);
        var diff718 = callmethodChecked(call716, "-", [1], new GraceNum(1));
        var call719 = callmethodChecked(var_util, "setPosition", [2], diff718, new GraceNum(0));
        if710 = call719;
      }
      setLineNumber(358);    // compilenode identifier
      var call720 = callmethodChecked(var_ast, "blankNode", [0]);
      var call721 = callmethodChecked(call720, "new", [0]);
      var call722 = callmethodChecked(var_values, "push", [1], call721);
      if688 = call722;
    }
    return if688;
  };
  func664.paramCounts = [0];
  this.methods["blank"] = func664;
  func664.definitionLine = 344;
  func664.definitionModule = "parser";
  setLineNumber(362);    // compilenode method
  var func723 = function(argcv) {    // method dotypeterm
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for dotypeterm"));
    setModuleName("parser");
    var if724 = GraceDone;
    setLineNumber(363);    // compilenode string
    var string725 = new GraceString("identifier");
    onSelf = true;
    var call726 = callmethodChecked(this, "accept", [1], string725);
    if (Grace_isTrue(call726)) {
      setLineNumber(364);    // compilenode call
      onSelf = true;
      var call727 = callmethodChecked(this, "pushidentifier", [0]);
      setLineNumber(365);    // compilenode call
      onSelf = true;
      var call728 = callmethodChecked(this, "generic", [0]);
      setLineNumber(366);    // compilenode identifier
      onSelf = true;
      var call729 = callmethodChecked(this, "dotrest", [1], var_noBlocks);
      if724 = call729;
    } else {
      var if730 = GraceDone;
      setLineNumber(368);    // compilenode string
      var string731 = new GraceString("type");
      onSelf = true;
      var call732 = callmethodChecked(this, "acceptKeyword", [1], string731);
      if (Grace_isTrue(call732)) {
        setLineNumber(369);    // compilenode call
        onSelf = true;
        var call733 = callmethodChecked(this, "dotypeLiteral", [0]);
        if730 = call733;
      }
      if724 = if730;
    }
    return if724;
  };
  func723.paramCounts = [0];
  this.methods["dotypeterm"] = func723;
  func723.definitionLine = 362;
  func723.definitionModule = "parser";
  setLineNumber(374);    // compilenode method
  var func734 = function(argcv) {    // method typeexpression
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for typeexpression"));
    setModuleName("parser");
    setLineNumber(375);    // compilenode identifier
    var call735 = callmethodChecked(var_values, "size", [0]);
    var var_sz = call735;
    var if736 = GraceDone;
    setLineNumber(376);    // compilenode string
    var string737 = new GraceString("lparen");
    onSelf = true;
    var call738 = callmethodChecked(this, "accept", [1], string737);
    if (Grace_isTrue(call738)) {
      setLineNumber(377);    // compilenode identifier
      var var_prevStatementToken = var_statementToken;
      setLineNumber(378);    // compilenode identifier
      var_statementToken = var_sym;
      setLineNumber(379);    // compilenode call
      onSelf = true;
      var call739 = callmethodChecked(this, "next", [0]);
      var if740 = GraceDone;
      setLineNumber(380);    // compilenode block
      var block741 = new GraceBlock(this, 380, 0);
      block741.real = function() {
        onSelf = true;
        var call742 = callmethodChecked(this, "typeexpression", [0]);
        return call742;
      };
      onSelf = true;
      var call743 = callmethodChecked(this, "didConsume", [1], block741);
      var call744 = callmethodChecked(call743, "not", [0]);
      if (Grace_isTrue(call744)) {
        setLineNumber(381);    // compilenode identifier
        var call745 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call746 = callmethodChecked(call745, "new", [0]);
        var var_suggestion = call746;
        setLineNumber(382);    // compilenode string
        var string748 = new GraceString("rparen");
        var array747 = new PrimitiveGraceList([string748]);
        onSelf = true;
        var call749 = callmethodChecked(this, "findNextValidToken", [1], array747);
        var var_nextTok = call749;
        var if750 = GraceDone;
        setLineNumber(383);    // compilenode identifier
        var opresult753 = callmethodChecked(var_nextTok, "==", [1], var_sym);
        if (Grace_isTrue(opresult753)) {
          setLineNumber(384);    // compilenode string
          var string754 = new GraceString("\u00abtype expression\u00bb");
          var call755 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string754, var_lastToken);
          if750 = call755;
        } else {
          setLineNumber(386);    // compilenode identifier
          var call756 = callmethodChecked(var_nextTok, "prev", [0]);
          setLineNumber(387);    // compilenode string
          var string757 = new GraceString("\u00abtype expression\u00bb");
          setLineNumber(386);    // compilenode identifier
          var call758 = callmethodChecked(var_suggestion, "replaceTokenRange()leading()trailing()with", [2, 1, 1, 1], var_sym, call756, GraceTrue, GraceFalse, string757);
          if750 = call758;
        }
        setLineNumber(389);    // compilenode string
        var string759 = new GraceString("parentheses must contain a valid type expression.");
        setLineNumber(390);    // compilenode identifier
        var call760 = callmethodChecked(var_sym, "line", [0]);
        var call761 = callmethodChecked(var_sym, "linePos", [0]);
        setLineNumber(389);    // compilenode identifier
        var call762 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string759, call760, call761, var_suggestion);
        if740 = call762;
      }
      var if763 = GraceDone;
      setLineNumber(392);    // compilenode string
      var string764 = new GraceString("rparen");
      var call766 = callmethodChecked(var_sym, "kind", [0]);
      var opresult768 = callmethodChecked(call766, "\u2260", [1], string764);
      if (Grace_isTrue(opresult768)) {
        setLineNumber(393);    // compilenode call
        onSelf = true;
        var call769 = callmethodChecked(this, "checkBadOperators", [0]);
        setLineNumber(394);    // compilenode identifier
        var call770 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call771 = callmethodChecked(call770, "new", [0]);
        var var_suggestion = call771;
        setLineNumber(395);    // compilenode string
        var string772 = new GraceString(")");
        var call773 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string772, var_lastToken);
        setLineNumber(396);    // compilenode string
        var string774 = new GraceString("a type expression beginning with a '(' must end with a ')'.");
        setLineNumber(397);    // compilenode identifier
        var call775 = callmethodChecked(var_lastToken, "line", [0]);
        var call776 = callmethodChecked(var_lastToken, "size", [0]);
        var call778 = callmethodChecked(var_lastToken, "linePos", [0]);
        var opresult780 = callmethodChecked(call778, "+", [1], call776);
        setLineNumber(396);    // compilenode identifier
        var call781 = callmethodChecked(var_errormessages, "syntaxError()atRange()withSuggestion", [1, 2, 1], string774, call775, opresult780, var_suggestion);
        if763 = call781;
      }
      setLineNumber(400);    // compilenode identifier
      var_statementToken = var_prevStatementToken;
      setLineNumber(401);    // compilenode call
      onSelf = true;
      var call782 = callmethodChecked(this, "next", [0]);
      if736 = call782;
    } else {
      setLineNumber(403);    // compilenode call
      onSelf = true;
      var call783 = callmethodChecked(this, "dotypeterm", [0]);
      if736 = call783;
    }
    var if784 = GraceDone;
    setLineNumber(405);    // compilenode identifier
    var call786 = callmethodChecked(var_values, "size", [0]);
    var opresult788 = callmethodChecked(call786, ">", [1], var_sz);
    if (Grace_isTrue(opresult788)) {
      setLineNumber(406);    // compilenode identifier
      onSelf = true;
      var call789 = callmethodChecked(this, "dotrest", [1], var_noBlocks);
      setLineNumber(407);    // compilenode call
      onSelf = true;
      var call790 = callmethodChecked(this, "typeexpressionrest", [0]);
      if784 = call790;
    }
    return if784;
  };
  func734.paramCounts = [0];
  this.methods["typeexpression"] = func734;
  func734.definitionLine = 374;
  func734.definitionModule = "parser";
  setLineNumber(413);    // compilenode method
  var func791 = function(argcv) {    // method newIf(3)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_cond = arguments[curarg];
    curarg++;
    var var_thenList = arguments[curarg];
    curarg++;
    var var_elseList = arguments[curarg];
    curarg++;
    if (argcv[0] !== 3)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for newIf(3)"));
    setModuleName("parser");
    setLineNumber(414);    // compilenode call
    var call792 = callmethodChecked(var_prelude, "emptySequence", [0]);
    var call793 = callmethodChecked(var_ast, "blockNode", [0]);
    var call794 = callmethodChecked(call793, "new", [2], call792, var_thenList);
    var var_thenBlock = call794;
    setLineNumber(415);    // compilenode call
    var call795 = callmethodChecked(var_prelude, "emptySequence", [0]);
    var call796 = callmethodChecked(var_ast, "blockNode", [0]);
    var call797 = callmethodChecked(call796, "new", [2], call795, var_elseList);
    var var_elseBlock = call797;
    setLineNumber(416);    // compilenode identifier
    var call798 = callmethodChecked(var_ast, "ifNode", [0]);
    var call799 = callmethodChecked(call798, "new", [3], var_cond, var_thenBlock, var_elseBlock);
    return call799;
  };
  func791.paramCounts = [3];
  this.methods["newIf"] = func791;
  func791.definitionLine = 413;
  func791.definitionModule = "parser";
  setLineNumber(419);    // compilenode method
  var func800 = function(argcv) {    // method block
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for block"));
    setModuleName("parser");
    var if801 = GraceDone;
    setLineNumber(421);    // compilenode string
    var string802 = new GraceString("lbrace");
    onSelf = true;
    var call803 = callmethodChecked(this, "accept", [1], string802);
    if (Grace_isTrue(call803)) {
      setLineNumber(422);    // compilenode identifier
      var var_btok = var_sym;
      setLineNumber(423);    // compilenode call
      onSelf = true;
      var call804 = callmethodChecked(this, "next", [0]);
      setLineNumber(424);    // compilenode identifier
      var opresult807 = callmethodChecked(var_statementIndent, "+", [1], new GraceNum(2));
      var var_minInd = opresult807;
      setLineNumber(425);    // compilenode identifier
      var var_startIndent = var_statementIndent;
      setLineNumber(426);    // compilenode vardec
      var var_expr1;
      setLineNumber(427);    // compilenode identifier
      var var_s = var_sym;
      setLineNumber(428);    // compilenode vardec
      var var_tmp;
      setLineNumber(429);    // compilenode array
      var array808 = new PrimitiveGraceList([]);
      var var_params = array808;
      setLineNumber(430);    // compilenode array
      var array809 = new PrimitiveGraceList([]);
      var var_body = array809;
      setLineNumber(431);    // compilenode identifier
      var var_havearrow = GraceTrue;
      setLineNumber(432);    // compilenode identifier
      var var_found = GraceFalse;
      setLineNumber(433);    // compilenode num
      var var_i = new GraceNum(0);
      setLineNumber(434);    // compilenode identifier
      var var_isMatchingBlock = GraceFalse;
      setLineNumber(435);    // compilenode identifier
      var_statementToken = var_sym;
      var if810 = GraceDone;
      setLineNumber(436);    // compilenode string
      var string811 = new GraceString("lparen");
      var call813 = callmethodChecked(var_sym, "kind", [0]);
      var opresult815 = callmethodChecked(call813, "==", [1], string811);
      if (Grace_isTrue(opresult815)) {
        setLineNumber(437);    // compilenode identifier
        var_isMatchingBlock = GraceTrue;
        if810 = GraceDone;
      }
      setLineNumber(441);    // compilenode block
      var block816 = new GraceBlock(this, 441, 0);
      block816.real = function() {
        onSelf = true;
        var call817 = callmethodChecked(this, "expression", [1], var_blocksOK);
        return call817;
      };
      var block818 = new GraceBlock(this, 441, 0);
      block818.real = function() {
        var if819 = GraceDone;
        setLineNumber(442);    // compilenode string
        var string820 = new GraceString("colon");
        onSelf = true;
        var call821 = callmethodChecked(this, "accept", [1], string820);
        var string823 = new GraceString("arrow");
        onSelf = true;
        var call824 = callmethodChecked(this, "accept", [1], string823);
        var string826 = new GraceString("comma");
        onSelf = true;
        var call827 = callmethodChecked(this, "accept", [1], string826);
        var opresult829 = callmethodChecked(call827, "||", [1], call824);
        var opresult831 = callmethodChecked(opresult829, "||", [1], call821);
        if (Grace_isTrue(opresult831)) {
          setLineNumber(444);    // compilenode identifier
          var call832 = callmethodChecked(var_values, "pop", [0]);
          var_expr1 = call832;
          var if833 = GraceDone;
          setLineNumber(445);    // compilenode string
          var string834 = new GraceString("colon");
          onSelf = true;
          var call835 = callmethodChecked(this, "accept", [1], string834);
          if (Grace_isTrue(call835)) {
            setLineNumber(448);    // compilenode call
            onSelf = true;
            var call836 = callmethodChecked(this, "next", [0]);
            setLineNumber(449);    // compilenode identifier
            var_braceIsType = GraceTrue;
            var if837 = GraceDone;
            setLineNumber(450);    // compilenode block
            var block838 = new GraceBlock(this, 450, 0);
            block838.real = function() {
              onSelf = true;
              var call839 = callmethodChecked(this, "expression", [1], var_blocksOK);
              return call839;
            };
            onSelf = true;
            var call840 = callmethodChecked(this, "didConsume", [1], block838);
            var call841 = callmethodChecked(call840, "not", [0]);
            if (Grace_isTrue(call841)) {
              setLineNumber(451);    // compilenode array
              var array842 = new PrimitiveGraceList([]);
              var var_suggestions = array842;
              setLineNumber(452);    // compilenode identifier
              var call843 = callmethodChecked(var_errormessages, "suggestion", [0]);
              var call844 = callmethodChecked(call843, "new", [0]);
              var var_suggestion = call844;
              setLineNumber(453);    // compilenode string
              var string846 = new GraceString("arrow");
              var string847 = new GraceString("rbrace");
              var array845 = new PrimitiveGraceList([string846, string847]);
              onSelf = true;
              var call848 = callmethodChecked(this, "findNextValidToken", [1], array845);
              var var_nextTok = call848;
              var if849 = GraceDone;
              setLineNumber(454);    // compilenode identifier
              var opresult852 = callmethodChecked(var_nextTok, "==", [1], var_sym);
              if (Grace_isTrue(opresult852)) {
                setLineNumber(455);    // compilenode string
                var string853 = new GraceString(" \u00abexpression\u00bb");
                var call854 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string853, var_lastToken);
                if849 = call854;
              } else {
                setLineNumber(457);    // compilenode identifier
                var call855 = callmethodChecked(var_nextTok, "prev", [0]);
                var string856 = new GraceString(" \u00abexpression\u00bb");
                var call857 = callmethodChecked(var_suggestion, "replaceTokenRange()leading()trailing()with", [2, 1, 1, 1], var_sym, call855, GraceTrue, GraceFalse, string856);
                if849 = call857;
              }
              setLineNumber(459);    // compilenode identifier
              var call858 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
              setLineNumber(460);    // compilenode identifier
              var call859 = callmethodChecked(var_errormessages, "suggestion", [0]);
              var call860 = callmethodChecked(call859, "new", [0]);
              var_suggestion = call860;
              setLineNumber(461);    // compilenode identifier
              var call861 = callmethodChecked(var_nextTok, "prev", [0]);
              var call862 = callmethodChecked(var_suggestion, "deleteTokenRange()leading()trailing", [2, 1, 1], var_lastToken, call861, GraceTrue, GraceFalse);
              setLineNumber(462);    // compilenode identifier
              var call863 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
              setLineNumber(463);    // compilenode string
              var string864 = new GraceString("a block must have an expression after the ':'.");
              setLineNumber(464);    // compilenode identifier
              var call865 = callmethodChecked(var_sym, "line", [0]);
              var call866 = callmethodChecked(var_sym, "linePos", [0]);
              setLineNumber(463);    // compilenode identifier
              var call867 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestions", [1, 2, 1], string864, call865, call866, var_suggestions);
              if837 = call867;
            }
            setLineNumber(467);    // compilenode identifier
            var_braceIsType = GraceFalse;
            setLineNumber(468);    // compilenode identifier
            var call868 = callmethodChecked(var_values, "pop", [0]);
            var call869 = callmethodChecked(var_expr1, "dtype:=", [1], call868);
            if833 = call869;
          }
          setLineNumber(470);    // compilenode identifier
          var call870 = callmethodChecked(var_params, "push", [1], var_expr1);
          var if871 = GraceDone;
          setLineNumber(471);    // compilenode identifier
          var call872 = callmethodChecked(var_expr1, "isIdentifier", [0]);
          var call874 = callmethodChecked(var_isMatchingBlock, "not", [0]);
          var opresult876 = callmethodChecked(call874, "&&", [1], call872);
          if (Grace_isTrue(opresult876)) {
            setLineNumber(472);    // compilenode identifier
            var call877 = callmethodChecked(var_expr1, "isBindingOccurrence:=", [1], GraceTrue);
            if871 = call877;
          } else {
            setLineNumber(474);    // compilenode identifier
            var_isMatchingBlock = GraceTrue;
            if871 = GraceDone;
          }
          var if878 = GraceDone;
          setLineNumber(476);    // compilenode block
          var block879 = new GraceBlock(this, 476, 0);
          block879.real = function() {
            var string880 = new GraceString("comma");
            onSelf = true;
            var call881 = callmethodChecked(this, "accept", [1], string880);
            return call881;
          };
          var opresult884 = callmethodChecked(var_isMatchingBlock, "&&", [1], block879);
          if (Grace_isTrue(opresult884)) {
            setLineNumber(477);    // compilenode array
            var array885 = new PrimitiveGraceList([]);
            var var_suggestions = array885;
            setLineNumber(478);    // compilenode vardec
            var var_suggestion;
            setLineNumber(479);    // compilenode block
            var block886 = new GraceBlock(this, 479, 1);
            setLineNumber(1);    // compilenode identifier
            block886.real = function(var_t) {
              setLineNumber(479);    // compilenode string
              var string887 = new GraceString("arrow");
              var call889 = callmethodChecked(var_t, "kind", [0]);
              var opresult891 = callmethodChecked(call889, "==", [1], string887);
              return opresult891;
            };
            onSelf = true;
            var call892 = callmethodChecked(this, "findNextToken", [1], block886);
            var var_arrow = call892;
            var if893 = GraceDone;
            setLineNumber(480);    // compilenode identifier
            var opresult896 = callmethodChecked(GraceFalse, "\u2260", [1], var_arrow);
            if (Grace_isTrue(opresult896)) {
              setLineNumber(481);    // compilenode identifier
              var call897 = callmethodChecked(var_errormessages, "suggestion", [0]);
              var call898 = callmethodChecked(call897, "new", [0]);
              var_suggestion = call898;
              setLineNumber(482);    // compilenode identifier
              var call899 = callmethodChecked(var_arrow, "prev", [0]);
              var call900 = callmethodChecked(var_suggestion, "deleteTokenRange", [2], var_sym, call899);
              setLineNumber(483);    // compilenode identifier
              var call901 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
              if893 = call901;
            }
            setLineNumber(485);    // compilenode identifier
            var call902 = callmethodChecked(var_errormessages, "suggestion", [0]);
            var call903 = callmethodChecked(call902, "new", [0]);
            var_suggestion = call903;
            setLineNumber(486);    // compilenode string
            var string904 = new GraceString(" |");
            var call905 = callmethodChecked(var_suggestion, "replaceToken()leading()trailing()with", [1, 1, 1, 1], var_sym, GraceTrue, GraceFalse, string904);
            setLineNumber(487);    // compilenode identifier
            var call906 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
            setLineNumber(488);    // compilenode string
            var string907 = new GraceString("a matching block may only have one parameter.");
            setLineNumber(489);    // compilenode identifier
            var call908 = callmethodChecked(var_sym, "line", [0]);
            var call909 = callmethodChecked(var_sym, "linePos", [0]);
            var call910 = callmethodChecked(var_sym, "linePos", [0]);
            setLineNumber(488);    // compilenode identifier
            var call911 = callmethodChecked(var_errormessages, "syntaxError()atRange()withSuggestions", [1, 3, 1], string907, call908, call909, call910, var_suggestions);
            if878 = call911;
          }
          setLineNumber(491);    // compilenode block
          var block912 = new GraceBlock(this, 491, 0);
          block912.real = function() {
            var string913 = new GraceString("comma");
            onSelf = true;
            var call914 = callmethodChecked(this, "accept", [1], string913);
            return call914;
          };
          var block915 = new GraceBlock(this, 491, 0);
          block915.real = function() {
            setLineNumber(493);    // compilenode call
            onSelf = true;
            var call916 = callmethodChecked(this, "next", [0]);
            setLineNumber(494);    // compilenode call
            onSelf = true;
            var call917 = callmethodChecked(this, "pushidentifier", [0]);
            setLineNumber(495);    // compilenode identifier
            var call918 = callmethodChecked(var_values, "pop", [0]);
            var_expr1 = call918;
            setLineNumber(496);    // compilenode identifier
            var call919 = callmethodChecked(var_expr1, "isBindingOccurrence:=", [1], GraceTrue);
            setLineNumber(497);    // compilenode call
            onSelf = true;
            var call920 = callmethodChecked(this, "optionalTypeAnnotation", [0]);
            var call921 = callmethodChecked(var_expr1, "dtype:=", [1], call920);
            setLineNumber(498);    // compilenode identifier
            var call922 = callmethodChecked(var_params, "push", [1], var_expr1);
            return call922;
          };
          var call923 = callmethodChecked(var_prelude, "while()do", [1, 1], block912, block915);
          var if924 = GraceDone;
          setLineNumber(500);    // compilenode string
          var string925 = new GraceString("arrow");
          onSelf = true;
          var call926 = callmethodChecked(this, "accept", [1], string925);
          var call927 = callmethodChecked(call926, "not", [0]);
          if (Grace_isTrue(call927)) {
            setLineNumber(501);    // compilenode identifier
            var call928 = callmethodChecked(var_errormessages, "suggestion", [0]);
            var call929 = callmethodChecked(call928, "new", [0]);
            var var_suggestion = call929;
            var if930 = GraceDone;
            setLineNumber(502);    // compilenode string
            var string931 = new GraceString("=");
            var call933 = callmethodChecked(var_sym, "value", [0]);
            var opresult935 = callmethodChecked(call933, "==", [1], string931);
            var string937 = new GraceString("bind");
            var call939 = callmethodChecked(var_sym, "kind", [0]);
            var opresult941 = callmethodChecked(call939, "==", [1], string937);
            var opresult943 = callmethodChecked(opresult941, "||", [1], opresult935);
            if (Grace_isTrue(opresult943)) {
              setLineNumber(503);    // compilenode string
              var string944 = new GraceString("->");
              var call945 = callmethodChecked(var_suggestion, "replaceToken()with", [1, 1], var_sym, string944);
              if930 = call945;
            } else {
              setLineNumber(505);    // compilenode string
              var string946 = new GraceString(" ->");
              var call947 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string946, var_lastToken);
              if930 = call947;
            }
            setLineNumber(507);    // compilenode string
            var string948 = new GraceString("a block must have one or more parameters followed by '->' and an expression.");
            setLineNumber(508);    // compilenode identifier
            var call949 = callmethodChecked(var_sym, "line", [0]);
            var call950 = callmethodChecked(var_sym, "linePos", [0]);
            setLineNumber(507);    // compilenode identifier
            var call951 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string948, call949, call950, var_suggestion);
            if924 = call951;
          }
          setLineNumber(510);    // compilenode call
          onSelf = true;
          var call952 = callmethodChecked(this, "next", [0]);
          if819 = call952;
        } else {
          var if953 = GraceDone;
          setLineNumber(511);    // compilenode string
          var string954 = new GraceString("semicolon");
          onSelf = true;
          var call955 = callmethodChecked(this, "accept", [1], string954);
          if (Grace_isTrue(call955)) {
            setLineNumber(512);    // compilenode identifier
            var call956 = callmethodChecked(var_values, "pop", [0]);
            var call957 = callmethodChecked(var_body, "push", [1], call956);
            setLineNumber(513);    // compilenode call
            onSelf = true;
            var call958 = callmethodChecked(this, "next", [0]);
            var if959 = GraceDone;
            setLineNumber(514);    // compilenode string
            var string960 = new GraceString("semicolon");
            onSelf = true;
            var call961 = callmethodChecked(this, "accept", [1], string960);
            if (Grace_isTrue(call961)) {
              setLineNumber(515);    // compilenode call
              onSelf = true;
              var call962 = callmethodChecked(this, "next", [0]);
              var if963 = GraceDone;
              setLineNumber(516);    // compilenode identifier
              var call964 = callmethodChecked(var_lastToken, "line", [0]);
              var call966 = callmethodChecked(var_sym, "line", [0]);
              var opresult968 = callmethodChecked(call966, "==", [1], call964);
              if (Grace_isTrue(opresult968)) {
                setLineNumber(517);    // compilenode identifier
                var_indentFreePass = GraceTrue;
                if963 = GraceDone;
              }
              if959 = if963;
            }
            if953 = if959;
          } else {
            var if969 = GraceDone;
            setLineNumber(523);    // compilenode string
            var string970 = new GraceString("bind");
            onSelf = true;
            var call971 = callmethodChecked(this, "accept", [1], string970);
            setLineNumber(522);    // compilenode string
            var string973 = new GraceString("index");
            var call975 = callmethodChecked(var_values, "last", [0]);
            var call976 = callmethodChecked(call975, "kind", [0]);
            var opresult978 = callmethodChecked(call976, "==", [1], string973);
            setLineNumber(521);    // compilenode string
            var string980 = new GraceString("identifier");
            var call982 = callmethodChecked(var_values, "last", [0]);
            var call983 = callmethodChecked(call982, "kind", [0]);
            var opresult985 = callmethodChecked(call983, "==", [1], string980);
            setLineNumber(520);    // compilenode string
            var string987 = new GraceString("member");
            var call989 = callmethodChecked(var_values, "last", [0]);
            var call990 = callmethodChecked(call989, "kind", [0]);
            var opresult992 = callmethodChecked(call990, "==", [1], string987);
            var opresult994 = callmethodChecked(opresult992, "||", [1], opresult985);
            var opresult996 = callmethodChecked(opresult994, "||", [1], opresult978);
            var opresult998 = callmethodChecked(opresult996, "&&", [1], call971);
            if (Grace_isTrue(opresult998)) {
              setLineNumber(524);    // compilenode identifier
              var call999 = callmethodChecked(var_values, "pop", [0]);
              var var_lhs = call999;
              setLineNumber(525);    // compilenode call
              onSelf = true;
              var call1000 = callmethodChecked(this, "next", [0]);
              var if1001 = GraceDone;
              setLineNumber(526);    // compilenode block
              var block1002 = new GraceBlock(this, 526, 0);
              block1002.real = function() {
                onSelf = true;
                var call1003 = callmethodChecked(this, "expression", [1], var_blocksOK);
                return call1003;
              };
              onSelf = true;
              var call1004 = callmethodChecked(this, "didConsume", [1], block1002);
              var call1005 = callmethodChecked(call1004, "not", [0]);
              if (Grace_isTrue(call1005)) {
                setLineNumber(527);    // compilenode array
                var array1006 = new PrimitiveGraceList([]);
                var var_suggestions = array1006;
                setLineNumber(528);    // compilenode identifier
                var call1007 = callmethodChecked(var_errormessages, "suggestion", [0]);
                var call1008 = callmethodChecked(call1007, "new", [0]);
                var var_suggestion = call1008;
                setLineNumber(529);    // compilenode string
                var string1010 = new GraceString("rbrace");
                var array1009 = new PrimitiveGraceList([string1010]);
                onSelf = true;
                var call1011 = callmethodChecked(this, "findNextValidToken", [1], array1009);
                var var_nextTok = call1011;
                var if1012 = GraceDone;
                setLineNumber(530);    // compilenode identifier
                var opresult1015 = callmethodChecked(var_nextTok, "==", [1], var_sym);
                if (Grace_isTrue(opresult1015)) {
                  setLineNumber(531);    // compilenode string
                  var string1016 = new GraceString(" \u00abexpression\u00bb");
                  var call1017 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string1016, var_lastToken);
                  if1012 = call1017;
                } else {
                  setLineNumber(533);    // compilenode identifier
                  var call1018 = callmethodChecked(var_nextTok, "prev", [0]);
                  var string1019 = new GraceString(" \u00abexpression\u00bb");
                  var call1020 = callmethodChecked(var_suggestion, "replaceTokenRange()leading()trailing()with", [2, 1, 1, 1], var_sym, call1018, GraceTrue, GraceFalse, string1019);
                  if1012 = call1020;
                }
                setLineNumber(535);    // compilenode identifier
                var call1021 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
                setLineNumber(536);    // compilenode identifier
                var call1022 = callmethodChecked(var_errormessages, "suggestion", [0]);
                var call1023 = callmethodChecked(call1022, "new", [0]);
                var_suggestion = call1023;
                setLineNumber(537);    // compilenode identifier
                var call1024 = callmethodChecked(var_nextTok, "prev", [0]);
                var call1025 = callmethodChecked(var_suggestion, "deleteTokenRange()leading()trailing", [2, 1, 1], var_lastToken, call1024, GraceTrue, GraceFalse);
                setLineNumber(538);    // compilenode identifier
                var call1026 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
                setLineNumber(539);    // compilenode string
                var string1027 = new GraceString("a valid expression must follow ':='.");
                setLineNumber(540);    // compilenode identifier
                var call1028 = callmethodChecked(var_sym, "line", [0]);
                var call1029 = callmethodChecked(var_sym, "linePos", [0]);
                setLineNumber(539);    // compilenode identifier
                var call1030 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestions", [1, 2, 1], string1027, call1028, call1029, var_suggestions);
                if1001 = call1030;
              }
              setLineNumber(542);    // compilenode identifier
              var call1031 = callmethodChecked(var_values, "pop", [0]);
              var var_rhs = call1031;
              setLineNumber(543);    // compilenode identifier
              var call1032 = callmethodChecked(var_btok, "line", [0]);
              var call1033 = callmethodChecked(var_btok, "linePos", [0]);
              var call1034 = callmethodChecked(var_util, "setPosition", [2], call1032, call1033);
              setLineNumber(544);    // compilenode identifier
              var call1035 = callmethodChecked(var_ast, "bindNode", [0]);
              var call1036 = callmethodChecked(call1035, "new", [2], var_lhs, var_rhs);
              var call1037 = callmethodChecked(var_body, "push", [1], call1036);
              var if1038 = GraceDone;
              setLineNumber(545);    // compilenode string
              var string1039 = new GraceString("semicolon");
              onSelf = true;
              var call1040 = callmethodChecked(this, "accept", [1], string1039);
              if (Grace_isTrue(call1040)) {
                setLineNumber(546);    // compilenode call
                onSelf = true;
                var call1041 = callmethodChecked(this, "next", [0]);
                var if1042 = GraceDone;
                setLineNumber(547);    // compilenode identifier
                var call1043 = callmethodChecked(var_lastToken, "line", [0]);
                var call1045 = callmethodChecked(var_sym, "line", [0]);
                var opresult1047 = callmethodChecked(call1045, "==", [1], call1043);
                if (Grace_isTrue(opresult1047)) {
                  setLineNumber(548);    // compilenode identifier
                  var_indentFreePass = GraceTrue;
                  if1042 = GraceDone;
                }
                if1038 = if1042;
              }
              if969 = if1038;
            } else {
              setLineNumber(552);    // compilenode call
              onSelf = true;
              var call1048 = callmethodChecked(this, "checkUnexpectedTokenAfterStatement", [0]);
              setLineNumber(553);    // compilenode identifier
              var call1049 = callmethodChecked(var_values, "pop", [0]);
              var call1050 = callmethodChecked(var_body, "push", [1], call1049);
              if969 = call1050;
            }
            if953 = if969;
          }
          if819 = if953;
        }
        return if819;
      };
      onSelf = true;
      var call1051 = callmethodChecked(this, "ifConsume()then", [1, 1], block816, block818);
      var if1052 = GraceDone;
      setLineNumber(556);    // compilenode string
      var string1053 = new GraceString("arrow");
      onSelf = true;
      var call1054 = callmethodChecked(this, "accept", [1], string1053);
      if (Grace_isTrue(call1054)) {
        setLineNumber(557);    // compilenode call
        onSelf = true;
        var call1055 = callmethodChecked(this, "next", [0]);
        if1052 = call1055;
      }
      var if1056 = GraceDone;
      setLineNumber(559);    // compilenode identifier
      var call1057 = callmethodChecked(var_lastToken, "line", [0]);
      var call1059 = callmethodChecked(var_sym, "line", [0]);
      var opresult1061 = callmethodChecked(call1059, "==", [1], call1057);
      if (Grace_isTrue(opresult1061)) {
        setLineNumber(560);    // compilenode identifier
        var call1063 = callmethodChecked(var_sym, "linePos", [0]);
        var diff1065 = callmethodChecked(call1063, "-", [1], new GraceNum(1));
        var_minIndentLevel = diff1065;
        if1056 = GraceDone;
      } else {
        setLineNumber(562);    // compilenode identifier
        var_minIndentLevel = var_minInd;
        if1056 = GraceDone;
      }
      setLineNumber(564);    // compilenode block
      var block1066 = new GraceBlock(this, 564, 0);
      block1066.real = function() {
        var string1067 = new GraceString("rbrace");
        onSelf = true;
        var call1068 = callmethodChecked(this, "accept", [1], string1067);
        var call1069 = callmethodChecked(call1068, "not", [0]);
        return call1069;
      };
      var block1070 = new GraceBlock(this, 564, 0);
      block1070.real = function() {
        var if1071 = GraceDone;
        setLineNumber(566);    // compilenode block
        var block1072 = new GraceBlock(this, 566, 0);
        block1072.real = function() {
          onSelf = true;
          var call1073 = callmethodChecked(this, "statement", [0]);
          return call1073;
        };
        onSelf = true;
        var call1074 = callmethodChecked(this, "didConsume", [1], block1072);
        var call1075 = callmethodChecked(call1074, "not", [0]);
        if (Grace_isTrue(call1075)) {
          setLineNumber(567);    // compilenode identifier
          var call1076 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call1077 = callmethodChecked(call1076, "new", [0]);
          var var_suggestion = call1077;
          setLineNumber(568);    // compilenode string
          var string1078 = new GraceString("}");
          var call1079 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string1078, var_lastToken);
          setLineNumber(569);    // compilenode string
          var string1080 = new GraceString("a block must end with a '}'.");
          setLineNumber(570);    // compilenode identifier
          var call1081 = callmethodChecked(var_sym, "line", [0]);
          var call1082 = callmethodChecked(var_sym, "linePos", [0]);
          setLineNumber(569);    // compilenode identifier
          var call1083 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string1080, call1081, call1082, var_suggestion);
          if1071 = call1083;
        }
        setLineNumber(572);    // compilenode identifier
        var call1084 = callmethodChecked(var_values, "pop", [0]);
        var_tmp = call1084;
        setLineNumber(573);    // compilenode identifier
        var call1085 = callmethodChecked(var_body, "push", [1], var_tmp);
        return call1085;
      };
      var call1086 = callmethodChecked(var_prelude, "while()do", [1, 1], block1066, block1070);
      setLineNumber(575);    // compilenode identifier
      var diff1089 = callmethodChecked(var_minInd, "-", [1], new GraceNum(2));
      var_minIndentLevel = diff1089;
      setLineNumber(576);    // compilenode identifier
      var_statementIndent = var_startIndent;
      setLineNumber(577);    // compilenode call
      onSelf = true;
      var call1090 = callmethodChecked(this, "next", [0]);
      setLineNumber(578);    // compilenode identifier
      var call1091 = callmethodChecked(var_btok, "line", [0]);
      var call1092 = callmethodChecked(var_btok, "linePos", [0]);
      var call1093 = callmethodChecked(var_util, "setPosition", [2], call1091, call1092);
      setLineNumber(579);    // compilenode identifier
      var call1094 = callmethodChecked(var_ast, "blockNode", [0]);
      var call1095 = callmethodChecked(call1094, "new", [2], var_params, var_body);
      var var_o = call1095;
      var if1096 = GraceDone;
      setLineNumber(580);    // compilenode identifier
      if (Grace_isTrue(var_isMatchingBlock)) {
        var if1097 = GraceDone;
        setLineNumber(581);    // compilenode identifier
        var call1099 = callmethodChecked(var_params, "size", [0]);
        var opresult1101 = callmethodChecked(call1099, ">", [1], new GraceNum(0));
        if (Grace_isTrue(opresult1101)) {
          setLineNumber(582);    // compilenode identifier
          var call1102 = callmethodChecked(var_params, "first", [0]);
          var call1103 = callmethodChecked(var_o, "matchingPattern:=", [1], call1102);
          if1097 = call1103;
        }
        if1096 = if1097;
      }
      setLineNumber(585);    // compilenode identifier
      var call1104 = callmethodChecked(var_values, "push", [1], var_o);
      if801 = call1104;
    }
    return if801;
  };
  func800.paramCounts = [0];
  this.methods["block"] = func800;
  func800.definitionLine = 419;
  func800.definitionModule = "parser";
  setLineNumber(592);    // compilenode method
  var func1105 = function(argcv) {    // method doif
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for doif"));
    setModuleName("parser");
    var if1106 = GraceDone;
    setLineNumber(593);    // compilenode string
    var string1107 = new GraceString("if");
    var call1109 = callmethodChecked(var_sym, "value", [0]);
    var opresult1111 = callmethodChecked(call1109, "==", [1], string1107);
    var string1113 = new GraceString("identifier");
    onSelf = true;
    var call1114 = callmethodChecked(this, "accept", [1], string1113);
    var opresult1116 = callmethodChecked(call1114, "&&", [1], opresult1111);
    if (Grace_isTrue(opresult1116)) {
      setLineNumber(594);    // compilenode identifier
      var var_btok = var_sym;
      setLineNumber(595);    // compilenode call
      onSelf = true;
      var call1117 = callmethodChecked(this, "next", [0]);
      var if1118 = GraceDone;
      setLineNumber(596);    // compilenode block
      var block1119 = new GraceBlock(this, 596, 0);
      block1119.real = function() {
        var string1120 = new GraceString("lbrace");
        var call1122 = callmethodChecked(var_sym, "kind", [0]);
        var opresult1124 = callmethodChecked(call1122, "==", [1], string1120);
        return opresult1124;
      };
      var string1126 = new GraceString("lparen");
      var call1128 = callmethodChecked(var_sym, "kind", [0]);
      var opresult1130 = callmethodChecked(call1128, "==", [1], string1126);
      var opresult1132 = callmethodChecked(opresult1130, "||", [1], block1119);
      if (Grace_isTrue(opresult1132)) {
        setLineNumber(597);    // compilenode identifier
        var call1133 = callmethodChecked(var_sym, "value", [0]);
        if1118 = call1133;
      } else {
        var string1134 = new GraceString("-missing-");
        if1118 = string1134;
      }
      var var_opener = if1118;
      var if1135 = GraceDone;
      setLineNumber(598);    // compilenode string
      var string1136 = new GraceString("(");
      var opresult1139 = callmethodChecked(var_opener, "==", [1], string1136);
      if (Grace_isTrue(opresult1139)) {
        var string1140 = new GraceString(")");
        if1135 = string1140;
      } else {
        var if1141 = GraceDone;
        setLineNumber(599);    // compilenode string
        var string1142 = new GraceString("{");
        var opresult1145 = callmethodChecked(var_opener, "==", [1], string1142);
        if (Grace_isTrue(opresult1145)) {
          var string1146 = new GraceString("}");
          if1141 = string1146;
        } else {
          var string1147 = new GraceString("-nothing-");
          if1141 = string1147;
        }
        if1135 = if1141;
      }
      var var_closer = if1135;
      var if1148 = GraceDone;
      setLineNumber(600);    // compilenode string
      var string1149 = new GraceString("-missing-");
      var opresult1152 = callmethodChecked(var_opener, "==", [1], string1149);
      if (Grace_isTrue(opresult1152)) {
        setLineNumber(601);    // compilenode identifier
        var call1153 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call1154 = callmethodChecked(call1153, "new", [0]);
        var var_suggestion = call1154;
        setLineNumber(603);    // compilenode block
        var block1155 = new GraceBlock(this, 603, 1);
        setLineNumber(1);    // compilenode identifier
        block1155.real = function(var_t) {
          setLineNumber(605);    // compilenode string
          var string1156 = new GraceString("then");
          var call1158 = callmethodChecked(var_t, "value", [0]);
          var opresult1160 = callmethodChecked(call1158, "==", [1], string1156);
          var string1162 = new GraceString("identifier");
          var call1164 = callmethodChecked(var_t, "kind", [0]);
          var opresult1166 = callmethodChecked(call1164, "==", [1], string1162);
          var opresult1168 = callmethodChecked(opresult1166, "&&", [1], opresult1160);
          setLineNumber(604);    // compilenode string
          var string1170 = new GraceString("lbrace");
          var call1172 = callmethodChecked(var_t, "kind", [0]);
          var opresult1174 = callmethodChecked(call1172, "==", [1], string1170);
          var string1176 = new GraceString("rbrace");
          var call1178 = callmethodChecked(var_t, "kind", [0]);
          var opresult1180 = callmethodChecked(call1178, "==", [1], string1176);
          var string1182 = new GraceString("rparen");
          var call1184 = callmethodChecked(var_t, "kind", [0]);
          var opresult1186 = callmethodChecked(call1184, "==", [1], string1182);
          var opresult1188 = callmethodChecked(opresult1186, "||", [1], opresult1180);
          var opresult1190 = callmethodChecked(opresult1188, "||", [1], opresult1174);
          var opresult1192 = callmethodChecked(opresult1190, "||", [1], opresult1168);
          setLineNumber(603);    // compilenode identifier
          var call1194 = callmethodChecked(var_btok, "line", [0]);
          var call1196 = callmethodChecked(var_t, "line", [0]);
          var opresult1198 = callmethodChecked(call1196, "==", [1], call1194);
          var opresult1200 = callmethodChecked(opresult1198, "&&", [1], opresult1192);
          return opresult1200;
        };
        onSelf = true;
        var call1201 = callmethodChecked(this, "findNextToken", [1], block1155);
        var var_nextTok = call1201;
        var if1202 = GraceDone;
        setLineNumber(606);    // compilenode identifier
        var opresult1205 = callmethodChecked(GraceFalse, "==", [1], var_nextTok);
        if (Grace_isTrue(opresult1205)) {
          setLineNumber(607);    // compilenode string
          var string1206 = new GraceString(" (\u00abcondition\u00bb) then {");
          var call1207 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string1206, var_btok);
          if1202 = call1207;
        } else {
          var if1208 = GraceDone;
          setLineNumber(608);    // compilenode string
          var string1209 = new GraceString("rparen");
          var call1211 = callmethodChecked(var_nextTok, "kind", [0]);
          var opresult1213 = callmethodChecked(call1211, "==", [1], string1209);
          if (Grace_isTrue(opresult1213)) {
            var if1214 = GraceDone;
            setLineNumber(609);    // compilenode identifier
            var opresult1217 = callmethodChecked(var_nextTok, "==", [1], var_sym);
            if (Grace_isTrue(opresult1217)) {
              setLineNumber(610);    // compilenode string
              var string1218 = new GraceString("(\u00abcondition\u00bb");
              var call1219 = callmethodChecked(var_suggestion, "insert()beforeToken", [1, 1], string1218, var_sym);
              if1214 = call1219;
            } else {
              setLineNumber(612);    // compilenode string
              var string1220 = new GraceString("(");
              var call1221 = callmethodChecked(var_suggestion, "insert()beforeToken", [1, 1], string1220, var_sym);
              if1214 = call1221;
            }
            if1208 = if1214;
          } else {
            var if1222 = GraceDone;
            setLineNumber(614);    // compilenode string
            var string1223 = new GraceString("lbrace");
            var call1225 = callmethodChecked(var_nextTok, "kind", [0]);
            var opresult1227 = callmethodChecked(call1225, "==", [1], string1223);
            if (Grace_isTrue(opresult1227)) {
              var if1228 = GraceDone;
              setLineNumber(615);    // compilenode identifier
              var opresult1231 = callmethodChecked(var_nextTok, "==", [1], var_sym);
              if (Grace_isTrue(opresult1231)) {
                setLineNumber(616);    // compilenode string
                var string1232 = new GraceString(" (\u00abcondition\u00bb) then");
                var call1233 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string1232, var_btok);
                if1228 = call1233;
              } else {
                setLineNumber(618);    // compilenode string
                var string1234 = new GraceString("(");
                var call1235 = callmethodChecked(var_suggestion, "insert()beforeToken", [1, 1], string1234, var_sym);
                setLineNumber(619);    // compilenode string
                var string1236 = new GraceString(") then");
                var call1237 = callmethodChecked(var_nextTok, "prev", [0]);
                var call1238 = callmethodChecked(var_suggestion, "insert()afterToken()andTrailingSpace", [1, 1, 1], string1236, call1237, GraceTrue);
                if1228 = call1238;
              }
              if1222 = if1228;
            } else {
              var if1239 = GraceDone;
              setLineNumber(621);    // compilenode string
              var string1240 = new GraceString("identifier");
              var call1242 = callmethodChecked(var_nextTok, "kind", [0]);
              var opresult1244 = callmethodChecked(call1242, "==", [1], string1240);
              if (Grace_isTrue(opresult1244)) {
                var if1245 = GraceDone;
                setLineNumber(622);    // compilenode identifier
                var opresult1248 = callmethodChecked(var_nextTok, "==", [1], var_sym);
                if (Grace_isTrue(opresult1248)) {
                  setLineNumber(623);    // compilenode string
                  var string1249 = new GraceString("(\u00abcondition\u00bb) ");
                  var call1250 = callmethodChecked(var_suggestion, "insert()beforeToken", [1, 1], string1249, var_sym);
                  if1245 = call1250;
                } else {
                  setLineNumber(625);    // compilenode string
                  var string1251 = new GraceString("(");
                  var call1252 = callmethodChecked(var_suggestion, "insert()beforeToken", [1, 1], string1251, var_sym);
                  setLineNumber(626);    // compilenode string
                  var string1253 = new GraceString(")");
                  var call1254 = callmethodChecked(var_nextTok, "prev", [0]);
                  var call1255 = callmethodChecked(var_suggestion, "insert()afterToken()andTrailingSpace", [1, 1, 1], string1253, call1254, GraceTrue);
                  if1245 = call1255;
                }
                if1239 = if1245;
              }
              if1222 = if1239;
            }
            if1208 = if1222;
          }
          if1202 = if1208;
        }
        setLineNumber(630);    // compilenode string
        var string1256 = new GraceString("in parentheses or braces after the 'if'.");
        setLineNumber(629);    // compilenode string
        var string1258 = new GraceString("an if statement must have a condition ");
        var opresult1260 = callmethodChecked(string1258, "++", [1], string1256);
        setLineNumber(631);    // compilenode identifier
        var call1261 = callmethodChecked(var_sym, "line", [0]);
        var call1262 = callmethodChecked(var_sym, "linePos", [0]);
        setLineNumber(629);    // compilenode identifier
        var call1263 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], opresult1260, call1261, call1262, var_suggestion);
        if1148 = call1263;
      }
      setLineNumber(633);    // compilenode call
      onSelf = true;
      var call1264 = callmethodChecked(this, "next", [0]);
      var if1265 = GraceDone;
      setLineNumber(634);    // compilenode block
      var block1266 = new GraceBlock(this, 634, 0);
      block1266.real = function() {
        onSelf = true;
        var call1267 = callmethodChecked(this, "expression", [1], var_blocksOK);
        return call1267;
      };
      onSelf = true;
      var call1268 = callmethodChecked(this, "didConsume", [1], block1266);
      var call1269 = callmethodChecked(call1268, "not", [0]);
      if (Grace_isTrue(call1269)) {
        setLineNumber(635);    // compilenode identifier
        var call1270 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call1271 = callmethodChecked(call1270, "new", [0]);
        var var_suggestion = call1271;
        setLineNumber(637);    // compilenode block
        var block1272 = new GraceBlock(this, 637, 1);
        setLineNumber(1);    // compilenode identifier
        block1272.real = function(var_t) {
          setLineNumber(637);    // compilenode string
          var string1273 = new GraceString("rparen");
          var call1275 = callmethodChecked(var_t, "kind", [0]);
          var opresult1277 = callmethodChecked(call1275, "==", [1], string1273);
          var call1279 = callmethodChecked(var_lastToken, "line", [0]);
          var call1281 = callmethodChecked(var_t, "line", [0]);
          var opresult1283 = callmethodChecked(call1281, "==", [1], call1279);
          var opresult1285 = callmethodChecked(opresult1283, "&&", [1], opresult1277);
          return opresult1285;
        };
        onSelf = true;
        var call1286 = callmethodChecked(this, "findNextToken", [1], block1272);
        var var_nextTok = call1286;
        var if1287 = GraceDone;
        setLineNumber(638);    // compilenode identifier
        var opresult1290 = callmethodChecked(GraceFalse, "==", [1], var_nextTok);
        if (Grace_isTrue(opresult1290)) {
          setLineNumber(639);    // compilenode string
          var string1292 = new GraceString("rparen");
          var array1291 = new PrimitiveGraceList([string1292]);
          onSelf = true;
          var call1293 = callmethodChecked(this, "findNextValidToken", [1], array1291);
          var_nextTok = call1293;
          var if1294 = GraceDone;
          setLineNumber(640);    // compilenode identifier
          var opresult1297 = callmethodChecked(var_nextTok, "==", [1], var_sym);
          if (Grace_isTrue(opresult1297)) {
            setLineNumber(641);    // compilenode string
            var string1298 = new GraceString("\u00abexpression\u00bb) then {");
            var call1299 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string1298, var_lastToken);
            if1294 = call1299;
          } else {
            setLineNumber(643);    // compilenode identifier
            var call1300 = callmethodChecked(var_nextTok, "prev", [0]);
            setLineNumber(644);    // compilenode string
            var string1301 = new GraceString("\u00abexpression\u00bb) then {");
            setLineNumber(643);    // compilenode identifier
            var call1302 = callmethodChecked(var_suggestion, "replaceTokenRange()leading()trailing()with", [2, 1, 1, 1], var_sym, call1300, GraceTrue, GraceFalse, string1301);
            if1294 = call1302;
          }
          setLineNumber(647);    // compilenode string
          var string1303 = new GraceString("condition in parentheses or braces after the 'if'.");
          setLineNumber(646);    // compilenode string
          var string1305 = new GraceString("an if statement must have a ");
          var opresult1307 = callmethodChecked(string1305, "++", [1], string1303);
          setLineNumber(648);    // compilenode identifier
          var call1308 = callmethodChecked(var_sym, "line", [0]);
          var call1309 = callmethodChecked(var_sym, "linePos", [0]);
          setLineNumber(646);    // compilenode identifier
          var call1310 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], opresult1307, call1308, call1309, var_suggestion);
          if1287 = call1310;
        } else {
          var if1311 = GraceDone;
          setLineNumber(651);    // compilenode identifier
          var opresult1314 = callmethodChecked(var_nextTok, "==", [1], var_sym);
          if (Grace_isTrue(opresult1314)) {
            setLineNumber(652);    // compilenode string
            var string1315 = new GraceString("\u00abexpression\u00bb");
            var call1316 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string1315, var_lastToken);
            setLineNumber(654);    // compilenode string
            var string1317 = new GraceString("condition in parentheses or braces after the 'if'.");
            setLineNumber(653);    // compilenode string
            var string1319 = new GraceString("an if statement must have a ");
            var opresult1321 = callmethodChecked(string1319, "++", [1], string1317);
            setLineNumber(655);    // compilenode identifier
            var call1322 = callmethodChecked(var_sym, "line", [0]);
            var call1323 = callmethodChecked(var_sym, "linePos", [0]);
            setLineNumber(653);    // compilenode identifier
            var call1324 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], opresult1321, call1322, call1323, var_suggestion);
            if1311 = call1324;
          } else {
            setLineNumber(658);    // compilenode identifier
            var call1325 = callmethodChecked(var_nextTok, "prev", [0]);
            setLineNumber(659);    // compilenode string
            var string1326 = new GraceString("\u00abexpression\u00bb");
            setLineNumber(658);    // compilenode identifier
            var call1327 = callmethodChecked(var_suggestion, "replaceTokenRange()leading()trailing()with", [2, 1, 1, 1], var_sym, call1325, GraceFalse, GraceTrue, string1326);
            setLineNumber(661);    // compilenode string
            var string1328 = new GraceString("condition in parentheses or braces after the 'if'.");
            setLineNumber(660);    // compilenode string
            var string1330 = new GraceString("an if statement must have a ");
            var opresult1332 = callmethodChecked(string1330, "++", [1], string1328);
            setLineNumber(662);    // compilenode identifier
            var call1333 = callmethodChecked(var_sym, "line", [0]);
            var call1334 = callmethodChecked(var_sym, "linePos", [0]);
            var call1336 = callmethodChecked(var_nextTok, "linePos", [0]);
            var diff1338 = callmethodChecked(call1336, "-", [1], new GraceNum(1));
            setLineNumber(660);    // compilenode identifier
            var call1339 = callmethodChecked(var_errormessages, "syntaxError()atRange()withSuggestion", [1, 3, 1], opresult1332, call1333, call1334, diff1338, var_suggestion);
            if1311 = call1339;
          }
          if1287 = if1311;
        }
        if1265 = if1287;
      }
      var if1340 = GraceDone;
      setLineNumber(667);    // compilenode identifier
      var call1342 = callmethodChecked(var_sym, "value", [0]);
      var opresult1344 = callmethodChecked(call1342, "\u2260", [1], var_closer);
      if (Grace_isTrue(opresult1344)) {
        setLineNumber(668);    // compilenode call
        onSelf = true;
        var call1345 = callmethodChecked(this, "checkBadOperators", [0]);
        setLineNumber(669);    // compilenode identifier
        var call1346 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call1347 = callmethodChecked(call1346, "new", [0]);
        var var_suggestion = call1347;
        setLineNumber(670);    // compilenode string
        var string1348 = new GraceString(")");
        var call1349 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string1348, var_lastToken);
        setLineNumber(672);    // compilenode string
        var string1350 = new GraceString("'.");
        var string1353 = new GraceString("' must end with a '");
        var string1356 = new GraceString("'");
        var opresult1358 = callmethodChecked(string1356, "++", [1], var_opener);
        var opresult1360 = callmethodChecked(opresult1358, "++", [1], string1353);
        var opresult1362 = callmethodChecked(opresult1360, "++", [1], var_closer);
        var opresult1364 = callmethodChecked(opresult1362, "++", [1], string1350);
        setLineNumber(671);    // compilenode string
        var string1366 = new GraceString("an expression beginning with a ");
        var opresult1368 = callmethodChecked(string1366, "++", [1], opresult1364);
        setLineNumber(673);    // compilenode identifier
        var call1369 = callmethodChecked(var_lastToken, "line", [0]);
        var call1370 = callmethodChecked(var_lastToken, "size", [0]);
        var call1372 = callmethodChecked(var_lastToken, "linePos", [0]);
        var opresult1374 = callmethodChecked(call1372, "+", [1], call1370);
        setLineNumber(671);    // compilenode identifier
        var call1375 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], opresult1368, call1369, opresult1374, var_suggestion);
        if1340 = call1375;
      }
      setLineNumber(676);    // compilenode call
      onSelf = true;
      var call1376 = callmethodChecked(this, "next", [0]);
      setLineNumber(677);    // compilenode identifier
      var call1377 = callmethodChecked(var_values, "pop", [0]);
      var var_cond = call1377;
      setLineNumber(678);    // compilenode array
      var array1378 = new PrimitiveGraceList([]);
      var var_body = array1378;
      setLineNumber(686);    // compilenode array
      var array1379 = new PrimitiveGraceList([]);
      var var_elseblock = array1379;
      setLineNumber(687);    // compilenode identifier
      var var_curelse = var_elseblock;
      setLineNumber(688);    // compilenode vardec
      var var_v;
      setLineNumber(689);    // compilenode identifier
      var var_localMin = var_minIndentLevel;
      setLineNumber(690);    // compilenode identifier
      var var_localStatementIndent = var_statementIndent;
      setLineNumber(691);    // compilenode identifier
      var opresult1382 = callmethodChecked(var_statementIndent, "+", [1], new GraceNum(2));
      var var_minInd = opresult1382;
      var if1383 = GraceDone;
      setLineNumber(692);    // compilenode string
      var string1384 = new GraceString("then");
      var call1386 = callmethodChecked(var_sym, "value", [0]);
      var opresult1388 = callmethodChecked(call1386, "==", [1], string1384);
      var string1390 = new GraceString("identifier");
      onSelf = true;
      var call1391 = callmethodChecked(this, "accept", [1], string1390);
      var opresult1393 = callmethodChecked(call1391, "&&", [1], opresult1388);
      if (Grace_isTrue(opresult1393)) {
        setLineNumber(693);    // compilenode call
        onSelf = true;
        var call1394 = callmethodChecked(this, "next", [0]);
        var if1395 = GraceDone;
        setLineNumber(694);    // compilenode string
        var string1396 = new GraceString("lbrace");
        var call1398 = callmethodChecked(var_sym, "kind", [0]);
        var opresult1400 = callmethodChecked(call1398, "\u2260", [1], string1396);
        if (Grace_isTrue(opresult1400)) {
          setLineNumber(695);    // compilenode identifier
          var call1401 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call1402 = callmethodChecked(call1401, "new", [0]);
          var var_suggestion = call1402;
          setLineNumber(696);    // compilenode identifier
          onSelf = true;
          var call1403 = callmethodChecked(this, "findClosingBrace", [2], var_btok, GraceTrue);
          var var_closingBrace = call1403;
          var if1404 = GraceDone;
          setLineNumber(697);    // compilenode identifier
          var call1405 = callmethodChecked(var_closingBrace, "found", [0]);
          var call1406 = callmethodChecked(call1405, "not", [0]);
          if (Grace_isTrue(call1406)) {
            var if1407 = GraceDone;
            setLineNumber(698);    // compilenode identifier
            var call1409 = callmethodChecked(var_closingBrace, "tok", [0]);
            var opresult1411 = callmethodChecked(call1409, "==", [1], var_lastToken);
            if (Grace_isTrue(opresult1411)) {
              setLineNumber(699);    // compilenode string
              var string1412 = new GraceString("then {}");
              var call1413 = callmethodChecked(var_suggestion, "replaceToken()leading()trailing()with", [1, 1, 1, 1], var_lastToken, GraceFalse, GraceTrue, string1412);
              if1407 = call1413;
            } else {
              setLineNumber(701);    // compilenode identifier
              var call1415 = callmethodChecked(var_closingBrace, "tok", [0]);
              var call1416 = callmethodChecked(call1415, "line", [0]);
              var opresult1418 = callmethodChecked(call1416, "+", [1], new GraceNum(0.1));
              var string1419 = new GraceString("}");
              var call1420 = callmethodChecked(var_suggestion, "addLine", [2], opresult1418, string1419);
              setLineNumber(702);    // compilenode string
              var string1421 = new GraceString("then {");
              var call1422 = callmethodChecked(var_suggestion, "replaceToken()leading()trailing()with", [1, 1, 1, 1], var_lastToken, GraceFalse, GraceTrue, string1421);
              if1407 = call1422;
            }
            if1404 = if1407;
          } else {
            setLineNumber(705);    // compilenode string
            var string1423 = new GraceString("then {");
            var call1424 = callmethodChecked(var_suggestion, "replaceToken()leading()trailing()with", [1, 1, 1, 1], var_lastToken, GraceFalse, GraceTrue, string1423);
            if1404 = call1424;
          }
          setLineNumber(707);    // compilenode string
          var string1425 = new GraceString("an if statement must have a '{' after the 'then'.");
          setLineNumber(708);    // compilenode identifier
          var call1426 = callmethodChecked(var_lastToken, "line", [0]);
          var call1427 = callmethodChecked(var_lastToken, "size", [0]);
          var call1429 = callmethodChecked(var_lastToken, "linePos", [0]);
          var opresult1431 = callmethodChecked(call1429, "+", [1], call1427);
          setLineNumber(707);    // compilenode identifier
          var call1432 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string1425, call1426, opresult1431, var_suggestion);
          if1395 = call1432;
        }
        setLineNumber(710);    // compilenode call
        onSelf = true;
        var call1433 = callmethodChecked(this, "next", [0]);
        var if1434 = GraceDone;
        setLineNumber(711);    // compilenode identifier
        var call1435 = callmethodChecked(var_lastToken, "line", [0]);
        var call1437 = callmethodChecked(var_sym, "line", [0]);
        var opresult1439 = callmethodChecked(call1437, "==", [1], call1435);
        if (Grace_isTrue(opresult1439)) {
          setLineNumber(712);    // compilenode identifier
          var call1441 = callmethodChecked(var_sym, "linePos", [0]);
          var diff1443 = callmethodChecked(call1441, "-", [1], new GraceNum(1));
          var_minIndentLevel = diff1443;
          if1434 = GraceDone;
        } else {
          setLineNumber(714);    // compilenode identifier
          var_minIndentLevel = var_minInd;
          if1434 = GraceDone;
        }
        setLineNumber(716);    // compilenode block
        var block1444 = new GraceBlock(this, 716, 0);
        block1444.real = function() {
          var string1445 = new GraceString("rbrace");
          onSelf = true;
          var call1446 = callmethodChecked(this, "accept", [1], string1445);
          var call1447 = callmethodChecked(call1446, "not", [0]);
          return call1447;
        };
        var block1448 = new GraceBlock(this, 716, 0);
        block1448.real = function() {
          var if1449 = GraceDone;
          setLineNumber(717);    // compilenode block
          var block1450 = new GraceBlock(this, 717, 0);
          block1450.real = function() {
            onSelf = true;
            var call1451 = callmethodChecked(this, "statement", [0]);
            return call1451;
          };
          onSelf = true;
          var call1452 = callmethodChecked(this, "didConsume", [1], block1450);
          var call1453 = callmethodChecked(call1452, "not", [0]);
          if (Grace_isTrue(call1453)) {
            setLineNumber(718);    // compilenode identifier
            var call1454 = callmethodChecked(var_errormessages, "suggestion", [0]);
            var call1455 = callmethodChecked(call1454, "new", [0]);
            var var_suggestion = call1455;
            setLineNumber(719);    // compilenode identifier
            onSelf = true;
            var call1456 = callmethodChecked(this, "findClosingBrace", [2], var_btok, GraceFalse);
            var var_closingBrace = call1456;
            var if1457 = GraceDone;
            setLineNumber(720);    // compilenode identifier
            var call1458 = callmethodChecked(var_closingBrace, "found", [0]);
            var call1459 = callmethodChecked(call1458, "not", [0]);
            if (Grace_isTrue(call1459)) {
              var if1460 = GraceDone;
              setLineNumber(721);    // compilenode identifier
              var call1462 = callmethodChecked(var_closingBrace, "tok", [0]);
              var opresult1464 = callmethodChecked(call1462, "==", [1], var_lastToken);
              if (Grace_isTrue(opresult1464)) {
                setLineNumber(722);    // compilenode string
                var string1465 = new GraceString("}");
                var call1466 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string1465, var_lastToken);
                if1460 = call1466;
              } else {
                setLineNumber(724);    // compilenode identifier
                var call1468 = callmethodChecked(var_closingBrace, "tok", [0]);
                var call1469 = callmethodChecked(call1468, "line", [0]);
                var opresult1471 = callmethodChecked(call1469, "+", [1], new GraceNum(0.1));
                var string1472 = new GraceString("}");
                var call1473 = callmethodChecked(var_suggestion, "addLine", [2], opresult1471, string1472);
                if1460 = call1473;
              }
              if1457 = if1460;
            }
            setLineNumber(727);    // compilenode identifier
            var call1474 = callmethodChecked(var_suggestion, "deleteToken", [1], var_sym);
            setLineNumber(728);    // compilenode string
            var string1475 = new GraceString("an if statement must end with a '}'.");
            setLineNumber(729);    // compilenode identifier
            var call1476 = callmethodChecked(var_sym, "line", [0]);
            var call1477 = callmethodChecked(var_sym, "linePos", [0]);
            setLineNumber(728);    // compilenode identifier
            var call1478 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string1475, call1476, call1477, var_suggestion);
            if1449 = call1478;
          }
          setLineNumber(731);    // compilenode identifier
          var call1479 = callmethodChecked(var_values, "pop", [0]);
          var_v = call1479;
          setLineNumber(732);    // compilenode identifier
          var call1480 = callmethodChecked(var_body, "push", [1], var_v);
          return call1480;
        };
        var call1481 = callmethodChecked(var_prelude, "while()do", [1, 1], block1444, block1448);
        setLineNumber(734);    // compilenode call
        onSelf = true;
        var call1482 = callmethodChecked(this, "next", [0]);
        setLineNumber(735);    // compilenode vardec
        var var_econd;
        setLineNumber(736);    // compilenode vardec
        var var_eif;
        setLineNumber(737);    // compilenode vardec
        var var_newelse;
        setLineNumber(738);    // compilenode vardec
        var var_ebody;
        setLineNumber(739);    // compilenode block
        var block1483 = new GraceBlock(this, 739, 0);
        block1483.real = function() {
          var string1484 = new GraceString("elseif");
          var call1486 = callmethodChecked(var_sym, "value", [0]);
          var opresult1488 = callmethodChecked(call1486, "==", [1], string1484);
          var string1490 = new GraceString("identifier");
          onSelf = true;
          var call1491 = callmethodChecked(this, "accept", [1], string1490);
          var opresult1493 = callmethodChecked(call1491, "&&", [1], opresult1488);
          return opresult1493;
        };
        var block1494 = new GraceBlock(this, 739, 0);
        block1494.real = function() {
          setLineNumber(743);    // compilenode identifier
          var_statementToken = var_sym;
          setLineNumber(744);    // compilenode call
          onSelf = true;
          var call1495 = callmethodChecked(this, "next", [0]);
          var if1496 = GraceDone;
          setLineNumber(745);    // compilenode block
          var block1497 = new GraceBlock(this, 745, 0);
          block1497.real = function() {
            var string1498 = new GraceString("lbrace");
            var call1500 = callmethodChecked(var_sym, "kind", [0]);
            var opresult1502 = callmethodChecked(call1500, "==", [1], string1498);
            return opresult1502;
          };
          var string1504 = new GraceString("lparen");
          var call1506 = callmethodChecked(var_sym, "kind", [0]);
          var opresult1508 = callmethodChecked(call1506, "==", [1], string1504);
          var opresult1510 = callmethodChecked(opresult1508, "||", [1], block1497);
          if (Grace_isTrue(opresult1510)) {
            setLineNumber(746);    // compilenode identifier
            var call1511 = callmethodChecked(var_sym, "value", [0]);
            if1496 = call1511;
          } else {
            var string1512 = new GraceString("-missing-");
            if1496 = string1512;
          }
          var var_elopener = if1496;
          var if1513 = GraceDone;
          setLineNumber(747);    // compilenode string
          var string1514 = new GraceString("(");
          var opresult1517 = callmethodChecked(var_elopener, "==", [1], string1514);
          if (Grace_isTrue(opresult1517)) {
            var string1518 = new GraceString(")");
            if1513 = string1518;
          } else {
            var if1519 = GraceDone;
            setLineNumber(748);    // compilenode string
            var string1520 = new GraceString("{");
            var opresult1523 = callmethodChecked(var_elopener, "==", [1], string1520);
            if (Grace_isTrue(opresult1523)) {
              var string1524 = new GraceString("}");
              if1519 = string1524;
            } else {
              var string1525 = new GraceString("-nothing-");
              if1519 = string1525;
            }
            if1513 = if1519;
          }
          var var_elcloser = if1513;
          var if1526 = GraceDone;
          setLineNumber(749);    // compilenode string
          var string1527 = new GraceString("-missing-");
          var opresult1530 = callmethodChecked(var_elopener, "==", [1], string1527);
          if (Grace_isTrue(opresult1530)) {
            setLineNumber(750);    // compilenode identifier
            var call1531 = callmethodChecked(var_errormessages, "suggestion", [0]);
            var call1532 = callmethodChecked(call1531, "new", [0]);
            var var_suggestion = call1532;
            setLineNumber(752);    // compilenode block
            var block1533 = new GraceBlock(this, 752, 1);
            setLineNumber(1);    // compilenode identifier
            block1533.real = function(var_t) {
              setLineNumber(754);    // compilenode string
              var string1534 = new GraceString("then");
              var call1536 = callmethodChecked(var_t, "value", [0]);
              var opresult1538 = callmethodChecked(call1536, "==", [1], string1534);
              var string1540 = new GraceString("identifier");
              var call1542 = callmethodChecked(var_t, "kind", [0]);
              var opresult1544 = callmethodChecked(call1542, "==", [1], string1540);
              var opresult1546 = callmethodChecked(opresult1544, "&&", [1], opresult1538);
              setLineNumber(753);    // compilenode string
              var string1548 = new GraceString("lbrace");
              var call1550 = callmethodChecked(var_t, "kind", [0]);
              var opresult1552 = callmethodChecked(call1550, "==", [1], string1548);
              var string1554 = new GraceString("rbrace");
              var call1556 = callmethodChecked(var_t, "kind", [0]);
              var opresult1558 = callmethodChecked(call1556, "==", [1], string1554);
              var string1560 = new GraceString("rparen");
              var call1562 = callmethodChecked(var_t, "kind", [0]);
              var opresult1564 = callmethodChecked(call1562, "==", [1], string1560);
              var opresult1566 = callmethodChecked(opresult1564, "||", [1], opresult1558);
              var opresult1568 = callmethodChecked(opresult1566, "||", [1], opresult1552);
              var opresult1570 = callmethodChecked(opresult1568, "||", [1], opresult1546);
              setLineNumber(752);    // compilenode identifier
              var call1572 = callmethodChecked(var_statementToken, "line", [0]);
              var call1574 = callmethodChecked(var_t, "line", [0]);
              var opresult1576 = callmethodChecked(call1574, "==", [1], call1572);
              var opresult1578 = callmethodChecked(opresult1576, "&&", [1], opresult1570);
              return opresult1578;
            };
            onSelf = true;
            var call1579 = callmethodChecked(this, "findNextToken", [1], block1533);
            var var_nextTok = call1579;
            var if1580 = GraceDone;
            setLineNumber(755);    // compilenode identifier
            var opresult1583 = callmethodChecked(GraceFalse, "==", [1], var_nextTok);
            if (Grace_isTrue(opresult1583)) {
              setLineNumber(756);    // compilenode string
              var string1584 = new GraceString(" (\u00abexpression\u00bb) then {");
              var call1585 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string1584, var_statementToken);
              if1580 = call1585;
            } else {
              var if1586 = GraceDone;
              setLineNumber(757);    // compilenode string
              var string1587 = new GraceString("rparen");
              var call1589 = callmethodChecked(var_nextTok, "kind", [0]);
              var opresult1591 = callmethodChecked(call1589, "==", [1], string1587);
              if (Grace_isTrue(opresult1591)) {
                var if1592 = GraceDone;
                setLineNumber(758);    // compilenode identifier
                var opresult1595 = callmethodChecked(var_nextTok, "==", [1], var_sym);
                if (Grace_isTrue(opresult1595)) {
                  setLineNumber(759);    // compilenode string
                  var string1596 = new GraceString("(\u00abexpression\u00bb");
                  var call1597 = callmethodChecked(var_suggestion, "insert()beforeToken", [1, 1], string1596, var_sym);
                  if1592 = call1597;
                } else {
                  setLineNumber(761);    // compilenode string
                  var string1598 = new GraceString("(");
                  var call1599 = callmethodChecked(var_suggestion, "insert()beforeToken", [1, 1], string1598, var_sym);
                  if1592 = call1599;
                }
                if1586 = if1592;
              } else {
                var if1600 = GraceDone;
                setLineNumber(763);    // compilenode string
                var string1601 = new GraceString("lbrace");
                var call1603 = callmethodChecked(var_nextTok, "kind", [0]);
                var opresult1605 = callmethodChecked(call1603, "==", [1], string1601);
                if (Grace_isTrue(opresult1605)) {
                  var if1606 = GraceDone;
                  setLineNumber(764);    // compilenode identifier
                  var opresult1609 = callmethodChecked(var_nextTok, "==", [1], var_sym);
                  if (Grace_isTrue(opresult1609)) {
                    setLineNumber(765);    // compilenode string
                    var string1610 = new GraceString(" (\u00abexpression\u00bb) then");
                    var call1611 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string1610, var_statementToken);
                    if1606 = call1611;
                  } else {
                    setLineNumber(767);    // compilenode string
                    var string1612 = new GraceString("(");
                    var call1613 = callmethodChecked(var_suggestion, "insert()beforeToken", [1, 1], string1612, var_sym);
                    setLineNumber(768);    // compilenode string
                    var string1614 = new GraceString(") then");
                    var call1615 = callmethodChecked(var_nextTok, "prev", [0]);
                    var call1616 = callmethodChecked(var_suggestion, "insert()afterToken()andTrailingSpace", [1, 1, 1], string1614, call1615, GraceTrue);
                    if1606 = call1616;
                  }
                  if1600 = if1606;
                } else {
                  var if1617 = GraceDone;
                  setLineNumber(770);    // compilenode string
                  var string1618 = new GraceString("identifier");
                  var call1620 = callmethodChecked(var_nextTok, "kind", [0]);
                  var opresult1622 = callmethodChecked(call1620, "==", [1], string1618);
                  if (Grace_isTrue(opresult1622)) {
                    var if1623 = GraceDone;
                    setLineNumber(771);    // compilenode identifier
                    var opresult1626 = callmethodChecked(var_nextTok, "==", [1], var_sym);
                    if (Grace_isTrue(opresult1626)) {
                      setLineNumber(772);    // compilenode string
                      var string1627 = new GraceString("(\u00abexpression\u00bb) ");
                      var call1628 = callmethodChecked(var_suggestion, "insert()beforeToken", [1, 1], string1627, var_sym);
                      if1623 = call1628;
                    } else {
                      setLineNumber(774);    // compilenode string
                      var string1629 = new GraceString("(");
                      var call1630 = callmethodChecked(var_suggestion, "insert()beforeToken", [1, 1], string1629, var_sym);
                      setLineNumber(775);    // compilenode string
                      var string1631 = new GraceString(")");
                      var call1632 = callmethodChecked(var_nextTok, "prev", [0]);
                      var call1633 = callmethodChecked(var_suggestion, "insert()afterToken()andTrailingSpace", [1, 1, 1], string1631, call1632, GraceTrue);
                      if1623 = call1633;
                    }
                    if1617 = if1623;
                  }
                  if1600 = if1617;
                }
                if1586 = if1600;
              }
              if1580 = if1586;
            }
            setLineNumber(779);    // compilenode string
            var string1634 = new GraceString("condition in parentheses or braces after the 'elseif'.");
            setLineNumber(778);    // compilenode string
            var string1636 = new GraceString("an elseif statement must have a ");
            var opresult1638 = callmethodChecked(string1636, "++", [1], string1634);
            setLineNumber(780);    // compilenode identifier
            var call1639 = callmethodChecked(var_sym, "line", [0]);
            var call1640 = callmethodChecked(var_sym, "linePos", [0]);
            setLineNumber(778);    // compilenode identifier
            var call1641 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], opresult1638, call1639, call1640, var_suggestion);
            if1526 = call1641;
          }
          setLineNumber(783);    // compilenode call
          onSelf = true;
          var call1642 = callmethodChecked(this, "next", [0]);
          var if1643 = GraceDone;
          setLineNumber(784);    // compilenode block
          var block1644 = new GraceBlock(this, 784, 0);
          block1644.real = function() {
            onSelf = true;
            var call1645 = callmethodChecked(this, "expression", [1], var_blocksOK);
            return call1645;
          };
          onSelf = true;
          var call1646 = callmethodChecked(this, "didConsume", [1], block1644);
          var call1647 = callmethodChecked(call1646, "not", [0]);
          if (Grace_isTrue(call1647)) {
            setLineNumber(785);    // compilenode identifier
            var call1648 = callmethodChecked(var_errormessages, "suggestion", [0]);
            var call1649 = callmethodChecked(call1648, "new", [0]);
            var var_suggestion = call1649;
            setLineNumber(787);    // compilenode block
            var block1650 = new GraceBlock(this, 787, 1);
            setLineNumber(1);    // compilenode identifier
            block1650.real = function(var_t) {
              setLineNumber(788);    // compilenode string
              var string1651 = new GraceString("rbrace");
              var call1653 = callmethodChecked(var_t, "kind", [0]);
              var opresult1655 = callmethodChecked(call1653, "==", [1], string1651);
              var string1657 = new GraceString("rparen");
              var call1659 = callmethodChecked(var_t, "kind", [0]);
              var opresult1661 = callmethodChecked(call1659, "==", [1], string1657);
              var opresult1663 = callmethodChecked(opresult1661, "||", [1], opresult1655);
              setLineNumber(787);    // compilenode identifier
              var call1665 = callmethodChecked(var_lastToken, "line", [0]);
              var call1667 = callmethodChecked(var_t, "line", [0]);
              var opresult1669 = callmethodChecked(call1667, "==", [1], call1665);
              var opresult1671 = callmethodChecked(opresult1669, "&&", [1], opresult1663);
              return opresult1671;
            };
            onSelf = true;
            var call1672 = callmethodChecked(this, "findNextToken", [1], block1650);
            var var_nextTok = call1672;
            var if1673 = GraceDone;
            setLineNumber(789);    // compilenode identifier
            var opresult1676 = callmethodChecked(GraceFalse, "==", [1], var_nextTok);
            if (Grace_isTrue(opresult1676)) {
              setLineNumber(790);    // compilenode string
              var string1678 = new GraceString("rparen");
              var array1677 = new PrimitiveGraceList([string1678]);
              onSelf = true;
              var call1679 = callmethodChecked(this, "findNextValidToken", [1], array1677);
              var_nextTok = call1679;
              var if1680 = GraceDone;
              setLineNumber(791);    // compilenode identifier
              var opresult1683 = callmethodChecked(var_nextTok, "==", [1], var_sym);
              if (Grace_isTrue(opresult1683)) {
                setLineNumber(792);    // compilenode string
                var string1684 = new GraceString("\u00abexpression\u00bb) then {");
                var call1685 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string1684, var_lastToken);
                if1680 = call1685;
              } else {
                setLineNumber(794);    // compilenode identifier
                var call1686 = callmethodChecked(var_nextTok, "prev", [0]);
                var string1687 = new GraceString("\u00abexpression\u00bb) then {");
                var call1688 = callmethodChecked(var_suggestion, "replaceTokenRange()leading()trailing()with", [2, 1, 1, 1], var_sym, call1686, GraceTrue, GraceFalse, string1687);
                if1680 = call1688;
              }
              setLineNumber(796);    // compilenode string
              var string1689 = new GraceString("an elseif statement must have an expression in parentheses or braces after the 'elseif'.");
              setLineNumber(797);    // compilenode identifier
              var call1690 = callmethodChecked(var_sym, "line", [0]);
              var call1691 = callmethodChecked(var_sym, "linePos", [0]);
              setLineNumber(796);    // compilenode identifier
              var call1692 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string1689, call1690, call1691, var_suggestion);
              if1673 = call1692;
            } else {
              var if1693 = GraceDone;
              setLineNumber(799);    // compilenode identifier
              var opresult1696 = callmethodChecked(var_nextTok, "==", [1], var_sym);
              if (Grace_isTrue(opresult1696)) {
                setLineNumber(800);    // compilenode string
                var string1697 = new GraceString("\u00abexpression\u00bb");
                var call1698 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string1697, var_lastToken);
                setLineNumber(801);    // compilenode string
                var string1699 = new GraceString("an elseif statement must have an expression in parentheses or braces after the 'elseif'.");
                setLineNumber(802);    // compilenode identifier
                var call1700 = callmethodChecked(var_sym, "line", [0]);
                var call1701 = callmethodChecked(var_sym, "linePos", [0]);
                setLineNumber(801);    // compilenode identifier
                var call1702 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string1699, call1700, call1701, var_suggestion);
                if1693 = call1702;
              } else {
                setLineNumber(805);    // compilenode identifier
                var call1703 = callmethodChecked(var_nextTok, "prev", [0]);
                var string1704 = new GraceString("\u00abexpression\u00bb");
                var call1705 = callmethodChecked(var_suggestion, "replaceTokenRange()leading()trailing()with", [2, 1, 1, 1], var_sym, call1703, GraceFalse, GraceTrue, string1704);
                setLineNumber(806);    // compilenode string
                var string1706 = new GraceString("4: An elseif statement must have an expression in parentheses or braces after the 'elseif'.");
                setLineNumber(807);    // compilenode identifier
                var call1707 = callmethodChecked(var_sym, "line", [0]);
                var call1708 = callmethodChecked(var_sym, "linePos", [0]);
                var call1710 = callmethodChecked(var_nextTok, "linePos", [0]);
                var diff1712 = callmethodChecked(call1710, "-", [1], new GraceNum(1));
                setLineNumber(806);    // compilenode identifier
                var call1713 = callmethodChecked(var_errormessages, "syntaxError()atRange()withSuggestion", [1, 3, 1], string1706, call1707, call1708, diff1712, var_suggestion);
                if1693 = call1713;
              }
              if1673 = if1693;
            }
            if1643 = if1673;
          }
          var if1714 = GraceDone;
          setLineNumber(811);    // compilenode identifier
          var call1716 = callmethodChecked(var_sym, "value", [0]);
          var opresult1718 = callmethodChecked(call1716, "\u2260", [1], var_elcloser);
          if (Grace_isTrue(opresult1718)) {
            setLineNumber(812);    // compilenode call
            onSelf = true;
            var call1719 = callmethodChecked(this, "checkBadOperators", [0]);
            setLineNumber(813);    // compilenode identifier
            var call1720 = callmethodChecked(var_errormessages, "suggestion", [0]);
            var call1721 = callmethodChecked(call1720, "new", [0]);
            var var_suggestion = call1721;
            setLineNumber(814);    // compilenode string
            var string1722 = new GraceString(")");
            var call1723 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string1722, var_lastToken);
            setLineNumber(816);    // compilenode string
            var string1724 = new GraceString("'.");
            var string1727 = new GraceString("' must end with a '");
            var string1730 = new GraceString("'");
            var opresult1732 = callmethodChecked(string1730, "++", [1], var_elopener);
            var opresult1734 = callmethodChecked(opresult1732, "++", [1], string1727);
            var opresult1736 = callmethodChecked(opresult1734, "++", [1], var_elcloser);
            var opresult1738 = callmethodChecked(opresult1736, "++", [1], string1724);
            setLineNumber(815);    // compilenode string
            var string1740 = new GraceString("an expression beginning with a ");
            var opresult1742 = callmethodChecked(string1740, "++", [1], opresult1738);
            setLineNumber(817);    // compilenode identifier
            var call1743 = callmethodChecked(var_lastToken, "line", [0]);
            var call1744 = callmethodChecked(var_lastToken, "size", [0]);
            var call1746 = callmethodChecked(var_lastToken, "linePos", [0]);
            var opresult1748 = callmethodChecked(call1746, "+", [1], call1744);
            setLineNumber(815);    // compilenode identifier
            var call1749 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], opresult1742, call1743, opresult1748, var_suggestion);
            if1714 = call1749;
          }
          setLineNumber(820);    // compilenode call
          onSelf = true;
          var call1750 = callmethodChecked(this, "next", [0]);
          setLineNumber(821);    // compilenode identifier
          var call1751 = callmethodChecked(var_values, "pop", [0]);
          var_econd = call1751;
          var if1752 = GraceDone;
          setLineNumber(823);    // compilenode string
          var string1753 = new GraceString("then");
          var call1755 = callmethodChecked(var_sym, "value", [0]);
          var opresult1757 = callmethodChecked(call1755, "==", [1], string1753);
          setLineNumber(822);    // compilenode string
          var string1759 = new GraceString("identifier");
          onSelf = true;
          var call1760 = callmethodChecked(this, "accept", [1], string1759);
          var opresult1762 = callmethodChecked(call1760, "&&", [1], opresult1757);
          if (Grace_isTrue(opresult1762)) {
            setLineNumber(824);    // compilenode call
            onSelf = true;
            var call1763 = callmethodChecked(this, "next", [0]);
            setLineNumber(825);    // compilenode array
            var array1764 = new PrimitiveGraceList([]);
            var_ebody = array1764;
            if1752 = GraceDone;
          } else {
            setLineNumber(827);    // compilenode identifier
            var call1765 = callmethodChecked(var_errormessages, "suggestion", [0]);
            var call1766 = callmethodChecked(call1765, "new", [0]);
            var var_suggestion = call1766;
            var if1767 = GraceDone;
            setLineNumber(828);    // compilenode string
            var string1768 = new GraceString("lbrace");
            var call1770 = callmethodChecked(var_sym, "kind", [0]);
            var opresult1772 = callmethodChecked(call1770, "==", [1], string1768);
            if (Grace_isTrue(opresult1772)) {
              setLineNumber(829);    // compilenode identifier
              onSelf = true;
              var call1773 = callmethodChecked(this, "findClosingBrace", [2], var_statementToken, GraceFalse);
              var var_closingBrace = call1773;
              var if1774 = GraceDone;
              setLineNumber(830);    // compilenode identifier
              var call1775 = callmethodChecked(var_closingBrace, "found", [0]);
              var call1776 = callmethodChecked(call1775, "not", [0]);
              if (Grace_isTrue(call1776)) {
                var if1777 = GraceDone;
                setLineNumber(831);    // compilenode identifier
                var call1779 = callmethodChecked(var_closingBrace, "tok", [0]);
                var opresult1781 = callmethodChecked(call1779, "==", [1], var_sym);
                if (Grace_isTrue(opresult1781)) {
                  setLineNumber(832);    // compilenode string
                  var string1782 = new GraceString(" then {}");
                  var call1783 = callmethodChecked(var_suggestion, "replaceToken()leading()trailing()with", [1, 1, 1, 1], var_sym, GraceTrue, GraceFalse, string1782);
                  if1777 = call1783;
                } else {
                  setLineNumber(834);    // compilenode string
                  var string1784 = new GraceString(" then {");
                  var call1785 = callmethodChecked(var_suggestion, "replaceToken()leading()trailing()with", [1, 1, 1, 1], var_sym, GraceTrue, GraceFalse, string1784);
                  setLineNumber(835);    // compilenode identifier
                  var call1787 = callmethodChecked(var_closingBrace, "tok", [0]);
                  var call1788 = callmethodChecked(call1787, "line", [0]);
                  var opresult1790 = callmethodChecked(call1788, "+", [1], new GraceNum(0.1));
                  var string1791 = new GraceString("}");
                  var call1792 = callmethodChecked(var_suggestion, "addLine", [2], opresult1790, string1791);
                  if1777 = call1792;
                }
                if1774 = if1777;
              } else {
                setLineNumber(838);    // compilenode string
                var string1793 = new GraceString(" then {");
                var call1794 = callmethodChecked(var_suggestion, "replaceToken()leading()trailing()with", [1, 1, 1, 1], var_sym, GraceTrue, GraceFalse, string1793);
                if1774 = call1794;
              }
              if1767 = if1774;
            } else {
              setLineNumber(841);    // compilenode identifier
              onSelf = true;
              var call1795 = callmethodChecked(this, "findClosingBrace", [2], var_statementToken, GraceTrue);
              var var_closingBrace = call1795;
              var if1796 = GraceDone;
              setLineNumber(842);    // compilenode identifier
              var call1797 = callmethodChecked(var_closingBrace, "found", [0]);
              var call1798 = callmethodChecked(call1797, "not", [0]);
              if (Grace_isTrue(call1798)) {
                var if1799 = GraceDone;
                setLineNumber(843);    // compilenode identifier
                var call1801 = callmethodChecked(var_closingBrace, "tok", [0]);
                var opresult1803 = callmethodChecked(call1801, "==", [1], var_lastToken);
                if (Grace_isTrue(opresult1803)) {
                  setLineNumber(844);    // compilenode string
                  var string1804 = new GraceString(" then {}");
                  var call1805 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string1804, var_lastToken);
                  if1799 = call1805;
                } else {
                  setLineNumber(846);    // compilenode string
                  var string1806 = new GraceString(" then {");
                  var call1807 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string1806, var_lastToken);
                  setLineNumber(847);    // compilenode identifier
                  var call1809 = callmethodChecked(var_closingBrace, "tok", [0]);
                  var call1810 = callmethodChecked(call1809, "line", [0]);
                  var opresult1812 = callmethodChecked(call1810, "+", [1], new GraceNum(0.1));
                  var string1813 = new GraceString("}");
                  var call1814 = callmethodChecked(var_suggestion, "addLine", [2], opresult1812, string1813);
                  if1799 = call1814;
                }
                if1796 = if1799;
              } else {
                setLineNumber(850);    // compilenode string
                var string1815 = new GraceString(" then {");
                var call1816 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string1815, var_lastToken);
                if1796 = call1816;
              }
              if1767 = if1796;
            }
            setLineNumber(853);    // compilenode string
            var string1817 = new GraceString("an elseif statement must have 'then' after the expression in parentheses.");
            setLineNumber(854);    // compilenode identifier
            var call1818 = callmethodChecked(var_sym, "line", [0]);
            var call1819 = callmethodChecked(var_sym, "linePos", [0]);
            setLineNumber(853);    // compilenode identifier
            var call1820 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string1817, call1818, call1819, var_suggestion);
            if1752 = call1820;
          }
          var if1821 = GraceDone;
          setLineNumber(856);    // compilenode string
          var string1822 = new GraceString("lbrace");
          var call1824 = callmethodChecked(var_sym, "kind", [0]);
          var opresult1826 = callmethodChecked(call1824, "\u2260", [1], string1822);
          if (Grace_isTrue(opresult1826)) {
            setLineNumber(857);    // compilenode identifier
            var call1827 = callmethodChecked(var_errormessages, "suggestion", [0]);
            var call1828 = callmethodChecked(call1827, "new", [0]);
            var var_suggestion = call1828;
            setLineNumber(858);    // compilenode identifier
            onSelf = true;
            var call1829 = callmethodChecked(this, "findClosingBrace", [2], var_btok, GraceTrue);
            var var_closingBrace = call1829;
            var if1830 = GraceDone;
            setLineNumber(859);    // compilenode identifier
            var call1831 = callmethodChecked(var_closingBrace, "found", [0]);
            var call1832 = callmethodChecked(call1831, "not", [0]);
            if (Grace_isTrue(call1832)) {
              var if1833 = GraceDone;
              setLineNumber(860);    // compilenode identifier
              var call1835 = callmethodChecked(var_closingBrace, "tok", [0]);
              var opresult1837 = callmethodChecked(call1835, "==", [1], var_lastToken);
              if (Grace_isTrue(opresult1837)) {
                setLineNumber(861);    // compilenode string
                var string1838 = new GraceString("then {}");
                var call1839 = callmethodChecked(var_suggestion, "replaceToken()leading()trailing()with", [1, 1, 1, 1], var_lastToken, GraceFalse, GraceTrue, string1838);
                if1833 = call1839;
              } else {
                setLineNumber(863);    // compilenode identifier
                var call1841 = callmethodChecked(var_closingBrace, "tok", [0]);
                var call1842 = callmethodChecked(call1841, "line", [0]);
                var opresult1844 = callmethodChecked(call1842, "+", [1], new GraceNum(0.1));
                var string1845 = new GraceString("}");
                var call1846 = callmethodChecked(var_suggestion, "addLine", [2], opresult1844, string1845);
                setLineNumber(864);    // compilenode string
                var string1847 = new GraceString("then {");
                var call1848 = callmethodChecked(var_suggestion, "replaceToken()leading()trailing()with", [1, 1, 1, 1], var_lastToken, GraceFalse, GraceTrue, string1847);
                if1833 = call1848;
              }
              if1830 = if1833;
            } else {
              setLineNumber(867);    // compilenode string
              var string1849 = new GraceString("then {");
              var call1850 = callmethodChecked(var_suggestion, "replaceToken()leading()trailing()with", [1, 1, 1, 1], var_lastToken, GraceFalse, GraceTrue, string1849);
              if1830 = call1850;
            }
            setLineNumber(869);    // compilenode string
            var string1851 = new GraceString("an elseif statement must have a '{' after the 'then'.");
            setLineNumber(870);    // compilenode identifier
            var call1852 = callmethodChecked(var_lastToken, "line", [0]);
            var call1853 = callmethodChecked(var_lastToken, "size", [0]);
            var call1855 = callmethodChecked(var_lastToken, "linePos", [0]);
            var opresult1857 = callmethodChecked(call1855, "+", [1], call1853);
            setLineNumber(869);    // compilenode identifier
            var call1858 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string1851, call1852, opresult1857, var_suggestion);
            if1821 = call1858;
          }
          setLineNumber(872);    // compilenode call
          onSelf = true;
          var call1859 = callmethodChecked(this, "next", [0]);
          var if1860 = GraceDone;
          setLineNumber(873);    // compilenode identifier
          var call1861 = callmethodChecked(var_lastToken, "line", [0]);
          var call1863 = callmethodChecked(var_sym, "line", [0]);
          var opresult1865 = callmethodChecked(call1863, "==", [1], call1861);
          if (Grace_isTrue(opresult1865)) {
            setLineNumber(874);    // compilenode identifier
            var call1867 = callmethodChecked(var_sym, "linePos", [0]);
            var diff1869 = callmethodChecked(call1867, "-", [1], new GraceNum(1));
            var_minIndentLevel = diff1869;
            if1860 = GraceDone;
          } else {
            setLineNumber(876);    // compilenode identifier
            var_minIndentLevel = var_minInd;
            if1860 = GraceDone;
          }
          setLineNumber(878);    // compilenode block
          var block1870 = new GraceBlock(this, 878, 0);
          block1870.real = function() {
            var string1871 = new GraceString("rbrace");
            onSelf = true;
            var call1872 = callmethodChecked(this, "accept", [1], string1871);
            var call1873 = callmethodChecked(call1872, "not", [0]);
            return call1873;
          };
          var block1874 = new GraceBlock(this, 878, 0);
          block1874.real = function() {
            var if1875 = GraceDone;
            setLineNumber(879);    // compilenode block
            var block1876 = new GraceBlock(this, 879, 0);
            block1876.real = function() {
              onSelf = true;
              var call1877 = callmethodChecked(this, "statement", [0]);
              return call1877;
            };
            onSelf = true;
            var call1878 = callmethodChecked(this, "didConsume", [1], block1876);
            var call1879 = callmethodChecked(call1878, "not", [0]);
            if (Grace_isTrue(call1879)) {
              setLineNumber(880);    // compilenode identifier
              var call1880 = callmethodChecked(var_errormessages, "suggestion", [0]);
              var call1881 = callmethodChecked(call1880, "new", [0]);
              var var_suggestion = call1881;
              setLineNumber(881);    // compilenode identifier
              onSelf = true;
              var call1882 = callmethodChecked(this, "findClosingBrace", [2], var_btok, GraceFalse);
              var var_closingBrace = call1882;
              var if1883 = GraceDone;
              setLineNumber(882);    // compilenode identifier
              var call1884 = callmethodChecked(var_closingBrace, "found", [0]);
              var call1885 = callmethodChecked(call1884, "not", [0]);
              if (Grace_isTrue(call1885)) {
                var if1886 = GraceDone;
                setLineNumber(883);    // compilenode identifier
                var call1888 = callmethodChecked(var_closingBrace, "tok", [0]);
                var opresult1890 = callmethodChecked(call1888, "==", [1], var_lastToken);
                if (Grace_isTrue(opresult1890)) {
                  setLineNumber(884);    // compilenode string
                  var string1891 = new GraceString("}");
                  var call1892 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string1891, var_lastToken);
                  if1886 = call1892;
                } else {
                  setLineNumber(886);    // compilenode identifier
                  var call1894 = callmethodChecked(var_closingBrace, "tok", [0]);
                  var call1895 = callmethodChecked(call1894, "line", [0]);
                  var opresult1897 = callmethodChecked(call1895, "+", [1], new GraceNum(0.1));
                  var string1898 = new GraceString("}");
                  var call1899 = callmethodChecked(var_suggestion, "addLine", [2], opresult1897, string1898);
                  if1886 = call1899;
                }
                if1883 = if1886;
              }
              setLineNumber(889);    // compilenode identifier
              var call1900 = callmethodChecked(var_suggestion, "deleteToken", [1], var_sym);
              setLineNumber(890);    // compilenode string
              var string1901 = new GraceString("an elseif statement must end with a '}'.");
              setLineNumber(891);    // compilenode identifier
              var call1902 = callmethodChecked(var_sym, "line", [0]);
              var call1903 = callmethodChecked(var_sym, "linePos", [0]);
              setLineNumber(890);    // compilenode identifier
              var call1904 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string1901, call1902, call1903, var_suggestion);
              if1875 = call1904;
            }
            setLineNumber(893);    // compilenode identifier
            var call1905 = callmethodChecked(var_values, "pop", [0]);
            var_v = call1905;
            setLineNumber(894);    // compilenode identifier
            var call1906 = callmethodChecked(var_ebody, "push", [1], var_v);
            return call1906;
          };
          var call1907 = callmethodChecked(var_prelude, "while()do", [1, 1], block1870, block1874);
          setLineNumber(896);    // compilenode call
          onSelf = true;
          var call1908 = callmethodChecked(this, "next", [0]);
          setLineNumber(897);    // compilenode array
          var array1909 = new PrimitiveGraceList([]);
          var_newelse = array1909;
          setLineNumber(898);    // compilenode identifier
          onSelf = true;
          var call1910 = callmethodChecked(this, "newIf", [3], var_econd, var_ebody, var_newelse);
          var_eif = call1910;
          setLineNumber(901);    // compilenode identifier
          var call1911 = callmethodChecked(var_curelse, "push", [1], var_eif);
          setLineNumber(904);    // compilenode identifier
          var_curelse = var_newelse;
          return GraceDone;
        };
        var call1912 = callmethodChecked(var_prelude, "while()do", [1, 1], block1483, block1494);
        var if1913 = GraceDone;
        setLineNumber(906);    // compilenode string
        var string1914 = new GraceString("else");
        var call1916 = callmethodChecked(var_sym, "value", [0]);
        var opresult1918 = callmethodChecked(call1916, "==", [1], string1914);
        var string1920 = new GraceString("identifier");
        onSelf = true;
        var call1921 = callmethodChecked(this, "accept", [1], string1920);
        var opresult1923 = callmethodChecked(call1921, "&&", [1], opresult1918);
        if (Grace_isTrue(opresult1923)) {
          setLineNumber(907);    // compilenode call
          onSelf = true;
          var call1924 = callmethodChecked(this, "next", [0]);
          var if1925 = GraceDone;
          setLineNumber(908);    // compilenode string
          var string1926 = new GraceString("lbrace");
          var call1928 = callmethodChecked(var_sym, "kind", [0]);
          var opresult1930 = callmethodChecked(call1928, "\u2260", [1], string1926);
          if (Grace_isTrue(opresult1930)) {
            setLineNumber(909);    // compilenode identifier
            var call1931 = callmethodChecked(var_errormessages, "suggestion", [0]);
            var call1932 = callmethodChecked(call1931, "new", [0]);
            var var_suggestion = call1932;
            setLineNumber(910);    // compilenode identifier
            onSelf = true;
            var call1933 = callmethodChecked(this, "findClosingBrace", [2], var_btok, GraceTrue);
            var var_closingBrace = call1933;
            var if1934 = GraceDone;
            setLineNumber(911);    // compilenode identifier
            var call1935 = callmethodChecked(var_closingBrace, "found", [0]);
            var call1936 = callmethodChecked(call1935, "not", [0]);
            if (Grace_isTrue(call1936)) {
              var if1937 = GraceDone;
              setLineNumber(912);    // compilenode identifier
              var call1939 = callmethodChecked(var_closingBrace, "tok", [0]);
              var opresult1941 = callmethodChecked(call1939, "==", [1], var_lastToken);
              if (Grace_isTrue(opresult1941)) {
                setLineNumber(913);    // compilenode string
                var string1942 = new GraceString("else {}");
                var call1943 = callmethodChecked(var_suggestion, "replaceToken()leading()trailing()with", [1, 1, 1, 1], var_lastToken, GraceFalse, GraceTrue, string1942);
                if1937 = call1943;
              } else {
                setLineNumber(915);    // compilenode identifier
                var call1945 = callmethodChecked(var_closingBrace, "tok", [0]);
                var call1946 = callmethodChecked(call1945, "line", [0]);
                var opresult1948 = callmethodChecked(call1946, "+", [1], new GraceNum(0.1));
                var string1949 = new GraceString("}");
                var call1950 = callmethodChecked(var_suggestion, "addLine", [2], opresult1948, string1949);
                setLineNumber(916);    // compilenode string
                var string1951 = new GraceString("else {");
                var call1952 = callmethodChecked(var_suggestion, "replaceToken()leading()trailing()with", [1, 1, 1, 1], var_lastToken, GraceFalse, GraceTrue, string1951);
                if1937 = call1952;
              }
              if1934 = if1937;
            } else {
              setLineNumber(919);    // compilenode string
              var string1953 = new GraceString("else {");
              var call1954 = callmethodChecked(var_suggestion, "replaceToken()leading()trailing()with", [1, 1, 1, 1], var_lastToken, GraceFalse, GraceTrue, string1953);
              if1934 = call1954;
            }
            setLineNumber(921);    // compilenode string
            var string1955 = new GraceString("an else statement must have a '{' after the 'else'.");
            setLineNumber(922);    // compilenode identifier
            var call1956 = callmethodChecked(var_lastToken, "line", [0]);
            var call1957 = callmethodChecked(var_lastToken, "size", [0]);
            var call1959 = callmethodChecked(var_lastToken, "linePos", [0]);
            var opresult1961 = callmethodChecked(call1959, "+", [1], call1957);
            setLineNumber(921);    // compilenode identifier
            var call1962 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string1955, call1956, opresult1961, var_suggestion);
            if1925 = call1962;
          }
          setLineNumber(924);    // compilenode call
          onSelf = true;
          var call1963 = callmethodChecked(this, "next", [0]);
          var if1964 = GraceDone;
          setLineNumber(927);    // compilenode identifier
          var call1965 = callmethodChecked(var_lastToken, "line", [0]);
          var call1967 = callmethodChecked(var_sym, "line", [0]);
          var opresult1969 = callmethodChecked(call1967, "==", [1], call1965);
          if (Grace_isTrue(opresult1969)) {
            setLineNumber(928);    // compilenode identifier
            var call1971 = callmethodChecked(var_sym, "linePos", [0]);
            var diff1973 = callmethodChecked(call1971, "-", [1], new GraceNum(1));
            var_minIndentLevel = diff1973;
            if1964 = GraceDone;
          } else {
            setLineNumber(930);    // compilenode identifier
            var_minIndentLevel = var_minInd;
            if1964 = GraceDone;
          }
          setLineNumber(932);    // compilenode block
          var block1974 = new GraceBlock(this, 932, 0);
          block1974.real = function() {
            var string1975 = new GraceString("rbrace");
            onSelf = true;
            var call1976 = callmethodChecked(this, "accept", [1], string1975);
            var call1977 = callmethodChecked(call1976, "not", [0]);
            return call1977;
          };
          var block1978 = new GraceBlock(this, 932, 0);
          block1978.real = function() {
            var if1979 = GraceDone;
            setLineNumber(933);    // compilenode block
            var block1980 = new GraceBlock(this, 933, 0);
            block1980.real = function() {
              onSelf = true;
              var call1981 = callmethodChecked(this, "statement", [0]);
              return call1981;
            };
            onSelf = true;
            var call1982 = callmethodChecked(this, "didConsume", [1], block1980);
            var call1983 = callmethodChecked(call1982, "not", [0]);
            if (Grace_isTrue(call1983)) {
              setLineNumber(934);    // compilenode identifier
              var call1984 = callmethodChecked(var_errormessages, "suggestion", [0]);
              var call1985 = callmethodChecked(call1984, "new", [0]);
              var var_suggestion = call1985;
              setLineNumber(935);    // compilenode identifier
              onSelf = true;
              var call1986 = callmethodChecked(this, "findClosingBrace", [2], var_btok, GraceFalse);
              var var_closingBrace = call1986;
              var if1987 = GraceDone;
              setLineNumber(936);    // compilenode identifier
              var call1988 = callmethodChecked(var_closingBrace, "found", [0]);
              var call1989 = callmethodChecked(call1988, "not", [0]);
              if (Grace_isTrue(call1989)) {
                var if1990 = GraceDone;
                setLineNumber(937);    // compilenode identifier
                var call1992 = callmethodChecked(var_closingBrace, "tok", [0]);
                var opresult1994 = callmethodChecked(call1992, "==", [1], var_lastToken);
                if (Grace_isTrue(opresult1994)) {
                  setLineNumber(938);    // compilenode string
                  var string1995 = new GraceString("}");
                  var call1996 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string1995, var_lastToken);
                  if1990 = call1996;
                } else {
                  setLineNumber(940);    // compilenode identifier
                  var call1998 = callmethodChecked(var_closingBrace, "tok", [0]);
                  var call1999 = callmethodChecked(call1998, "line", [0]);
                  var opresult2001 = callmethodChecked(call1999, "+", [1], new GraceNum(0.1));
                  var string2002 = new GraceString("}");
                  var call2003 = callmethodChecked(var_suggestion, "addLine", [2], opresult2001, string2002);
                  if1990 = call2003;
                }
                if1987 = if1990;
              }
              setLineNumber(943);    // compilenode identifier
              var call2004 = callmethodChecked(var_suggestion, "deleteToken", [1], var_sym);
              setLineNumber(944);    // compilenode string
              var string2005 = new GraceString("an else statement must end with a '}'.");
              setLineNumber(945);    // compilenode identifier
              var call2006 = callmethodChecked(var_sym, "line", [0]);
              var call2007 = callmethodChecked(var_sym, "linePos", [0]);
              setLineNumber(944);    // compilenode identifier
              var call2008 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string2005, call2006, call2007, var_suggestion);
              if1979 = call2008;
            }
            setLineNumber(947);    // compilenode identifier
            var call2009 = callmethodChecked(var_values, "pop", [0]);
            var_v = call2009;
            setLineNumber(948);    // compilenode identifier
            var call2010 = callmethodChecked(var_curelse, "push", [1], var_v);
            return call2010;
          };
          var call2011 = callmethodChecked(var_prelude, "while()do", [1, 1], block1974, block1978);
          setLineNumber(950);    // compilenode call
          onSelf = true;
          var call2012 = callmethodChecked(this, "next", [0]);
          if1913 = call2012;
        }
        setLineNumber(952);    // compilenode identifier
        var call2013 = callmethodChecked(var_btok, "line", [0]);
        var call2014 = callmethodChecked(var_btok, "linePos", [0]);
        var call2015 = callmethodChecked(var_util, "setPosition", [2], call2013, call2014);
        setLineNumber(953);    // compilenode identifier
        onSelf = true;
        var call2016 = callmethodChecked(this, "newIf", [3], var_cond, var_body, var_elseblock);
        var var_o = call2016;
        setLineNumber(954);    // compilenode identifier
        var call2017 = callmethodChecked(var_values, "push", [1], var_o);
        if1383 = call2017;
      } else {
        setLineNumber(957);    // compilenode identifier
        var call2018 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call2019 = callmethodChecked(call2018, "new", [0]);
        var var_suggestion = call2019;
        var if2020 = GraceDone;
        setLineNumber(958);    // compilenode string
        var string2021 = new GraceString("lbrace");
        var call2023 = callmethodChecked(var_sym, "kind", [0]);
        var opresult2025 = callmethodChecked(call2023, "==", [1], string2021);
        if (Grace_isTrue(opresult2025)) {
          setLineNumber(959);    // compilenode identifier
          onSelf = true;
          var call2026 = callmethodChecked(this, "findClosingBrace", [2], var_btok, GraceFalse);
          var var_closingBrace = call2026;
          var if2027 = GraceDone;
          setLineNumber(960);    // compilenode identifier
          var call2028 = callmethodChecked(var_closingBrace, "found", [0]);
          var call2029 = callmethodChecked(call2028, "not", [0]);
          if (Grace_isTrue(call2029)) {
            var if2030 = GraceDone;
            setLineNumber(961);    // compilenode identifier
            var call2032 = callmethodChecked(var_closingBrace, "tok", [0]);
            var opresult2034 = callmethodChecked(call2032, "==", [1], var_sym);
            if (Grace_isTrue(opresult2034)) {
              setLineNumber(962);    // compilenode string
              var string2035 = new GraceString(" then {}");
              var call2036 = callmethodChecked(var_suggestion, "replaceToken()leading()trailing()with", [1, 1, 1, 1], var_sym, GraceTrue, GraceFalse, string2035);
              if2030 = call2036;
            } else {
              setLineNumber(964);    // compilenode string
              var string2037 = new GraceString(" then {");
              var call2038 = callmethodChecked(var_suggestion, "replaceToken()leading()trailing()with", [1, 1, 1, 1], var_sym, GraceTrue, GraceFalse, string2037);
              setLineNumber(965);    // compilenode identifier
              var call2040 = callmethodChecked(var_closingBrace, "tok", [0]);
              var call2041 = callmethodChecked(call2040, "line", [0]);
              var opresult2043 = callmethodChecked(call2041, "+", [1], new GraceNum(0.1));
              var string2044 = new GraceString("}");
              var call2045 = callmethodChecked(var_suggestion, "addLine", [2], opresult2043, string2044);
              if2030 = call2045;
            }
            if2027 = if2030;
          } else {
            setLineNumber(968);    // compilenode string
            var string2046 = new GraceString(" then {");
            var call2047 = callmethodChecked(var_suggestion, "replaceToken()leading()trailing()with", [1, 1, 1, 1], var_sym, GraceTrue, GraceFalse, string2046);
            if2027 = call2047;
          }
          if2020 = if2027;
        } else {
          setLineNumber(971);    // compilenode identifier
          onSelf = true;
          var call2048 = callmethodChecked(this, "findClosingBrace", [2], var_btok, GraceTrue);
          var var_closingBrace = call2048;
          var if2049 = GraceDone;
          setLineNumber(972);    // compilenode identifier
          var call2050 = callmethodChecked(var_closingBrace, "found", [0]);
          var call2051 = callmethodChecked(call2050, "not", [0]);
          if (Grace_isTrue(call2051)) {
            var if2052 = GraceDone;
            setLineNumber(973);    // compilenode identifier
            var call2054 = callmethodChecked(var_closingBrace, "tok", [0]);
            var opresult2056 = callmethodChecked(call2054, "==", [1], var_lastToken);
            if (Grace_isTrue(opresult2056)) {
              setLineNumber(974);    // compilenode string
              var string2057 = new GraceString(" then {}");
              var call2058 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string2057, var_lastToken);
              if2052 = call2058;
            } else {
              setLineNumber(976);    // compilenode string
              var string2059 = new GraceString(" then {");
              var call2060 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string2059, var_lastToken);
              setLineNumber(977);    // compilenode identifier
              var call2062 = callmethodChecked(var_closingBrace, "tok", [0]);
              var call2063 = callmethodChecked(call2062, "line", [0]);
              var opresult2065 = callmethodChecked(call2063, "+", [1], new GraceNum(0.1));
              var string2066 = new GraceString("}");
              var call2067 = callmethodChecked(var_suggestion, "addLine", [2], opresult2065, string2066);
              if2052 = call2067;
            }
            if2049 = if2052;
          } else {
            setLineNumber(980);    // compilenode string
            var string2068 = new GraceString(" then {");
            var call2069 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string2068, var_lastToken);
            if2049 = call2069;
          }
          if2020 = if2049;
        }
        setLineNumber(984);    // compilenode string
        var string2070 = new GraceString("the condition in parentheses.");
        setLineNumber(983);    // compilenode string
        var string2072 = new GraceString("an if statement must have 'then' after ");
        var opresult2074 = callmethodChecked(string2072, "++", [1], string2070);
        setLineNumber(985);    // compilenode identifier
        var call2075 = callmethodChecked(var_sym, "line", [0]);
        var call2076 = callmethodChecked(var_sym, "linePos", [0]);
        setLineNumber(983);    // compilenode identifier
        var call2077 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], opresult2074, call2075, call2076, var_suggestion);
        if1383 = call2077;
      }
      setLineNumber(987);    // compilenode identifier
      var_minIndentLevel = var_localMin;
      setLineNumber(988);    // compilenode identifier
      var_statementIndent = var_localStatementIndent;
      if1106 = GraceDone;
    }
    return if1106;
  };
  func1105.paramCounts = [0];
  this.methods["doif"] = func1105;
  func1105.definitionLine = 592;
  func1105.definitionModule = "parser";
  setLineNumber(994);    // compilenode method
  var func2078 = function(argcv) {    // method identifier
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for identifier"));
    setModuleName("parser");
    var if2079 = GraceDone;
    setLineNumber(995);    // compilenode string
    var string2080 = new GraceString("identifier");
    onSelf = true;
    var call2081 = callmethodChecked(this, "accept", [1], string2080);
    if (Grace_isTrue(call2081)) {
      var if2082 = GraceDone;
      setLineNumber(996);    // compilenode string
      var string2083 = new GraceString("if");
      var call2085 = callmethodChecked(var_sym, "value", [0]);
      var opresult2087 = callmethodChecked(call2085, "==", [1], string2083);
      if (Grace_isTrue(opresult2087)) {
        setLineNumber(997);    // compilenode call
        onSelf = true;
        var call2088 = callmethodChecked(this, "doif", [0]);
        if2082 = call2088;
      } else {
        setLineNumber(999);    // compilenode call
        onSelf = true;
        var call2089 = callmethodChecked(this, "pushidentifier", [0]);
        if2082 = call2089;
      }
      if2079 = if2082;
    }
    return if2079;
  };
  func2078.paramCounts = [0];
  this.methods["identifier"] = func2078;
  func2078.definitionLine = 994;
  func2078.definitionModule = "parser";
  setLineNumber(1004);    // compilenode method
  var func2090 = function(argcv) {    // method prefixop
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for prefixop"));
    setModuleName("parser");
    var if2091 = GraceDone;
    setLineNumber(1005);    // compilenode string
    var string2092 = new GraceString("op");
    onSelf = true;
    var call2093 = callmethodChecked(this, "accept", [1], string2092);
    if (Grace_isTrue(call2093)) {
      setLineNumber(1006);    // compilenode identifier
      var call2094 = callmethodChecked(var_sym, "value", [0]);
      var var_op = call2094;
      setLineNumber(1007);    // compilenode vardec
      var var_val;
      setLineNumber(1008);    // compilenode call
      onSelf = true;
      var call2095 = callmethodChecked(this, "next", [0]);
      var if2096 = GraceDone;
      setLineNumber(1009);    // compilenode string
      var string2097 = new GraceString("lparen");
      onSelf = true;
      var call2098 = callmethodChecked(this, "accept", [1], string2097);
      if (Grace_isTrue(call2098)) {
        setLineNumber(1010);    // compilenode call
        onSelf = true;
        var call2099 = callmethodChecked(this, "next", [0]);
        var if2100 = GraceDone;
        setLineNumber(1011);    // compilenode block
        var block2101 = new GraceBlock(this, 1011, 0);
        block2101.real = function() {
          onSelf = true;
          var call2102 = callmethodChecked(this, "expression", [1], var_blocksOK);
          return call2102;
        };
        onSelf = true;
        var call2103 = callmethodChecked(this, "didConsume", [1], block2101);
        var call2104 = callmethodChecked(call2103, "not", [0]);
        if (Grace_isTrue(call2104)) {
          setLineNumber(1012);    // compilenode identifier
          var call2105 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call2106 = callmethodChecked(call2105, "new", [0]);
          var var_suggestion = call2106;
          setLineNumber(1013);    // compilenode string
          var string2108 = new GraceString("rparen");
          var array2107 = new PrimitiveGraceList([string2108]);
          onSelf = true;
          var call2109 = callmethodChecked(this, "findNextValidToken", [1], array2107);
          var var_nextTok = call2109;
          var if2110 = GraceDone;
          setLineNumber(1014);    // compilenode identifier
          var opresult2113 = callmethodChecked(var_nextTok, "==", [1], var_sym);
          if (Grace_isTrue(opresult2113)) {
            setLineNumber(1015);    // compilenode string
            var string2114 = new GraceString("\u00abexpression\u00bb");
            var call2115 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string2114, var_lastToken);
            if2110 = call2115;
          } else {
            setLineNumber(1017);    // compilenode identifier
            var call2116 = callmethodChecked(var_nextTok, "prev", [0]);
            var string2117 = new GraceString("\u00abexpression\u00bb");
            var call2118 = callmethodChecked(var_suggestion, "replaceTokenRange()leading()trailing()with", [2, 1, 1, 1], var_sym, call2116, GraceTrue, GraceFalse, string2117);
            if2110 = call2118;
          }
          setLineNumber(1019);    // compilenode string
          var string2119 = new GraceString("parentheses must contain a valid expression.");
          setLineNumber(1020);    // compilenode identifier
          var call2120 = callmethodChecked(var_sym, "line", [0]);
          var call2121 = callmethodChecked(var_sym, "linePos", [0]);
          setLineNumber(1019);    // compilenode identifier
          var call2122 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string2119, call2120, call2121, var_suggestion);
          if2100 = call2122;
        }
        var if2123 = GraceDone;
        setLineNumber(1022);    // compilenode string
        var string2124 = new GraceString("rparen");
        var call2126 = callmethodChecked(var_sym, "kind", [0]);
        var opresult2128 = callmethodChecked(call2126, "\u2260", [1], string2124);
        if (Grace_isTrue(opresult2128)) {
          setLineNumber(1023);    // compilenode call
          onSelf = true;
          var call2129 = callmethodChecked(this, "checkBadOperators", [0]);
          setLineNumber(1024);    // compilenode identifier
          var call2130 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call2131 = callmethodChecked(call2130, "new", [0]);
          var var_suggestion = call2131;
          setLineNumber(1025);    // compilenode string
          var string2132 = new GraceString(")");
          var call2133 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string2132, var_lastToken);
          setLineNumber(1026);    // compilenode string
          var string2134 = new GraceString("an expression beginning with a '(' must end with a ')'.");
          setLineNumber(1027);    // compilenode identifier
          var call2135 = callmethodChecked(var_lastToken, "line", [0]);
          var call2136 = callmethodChecked(var_lastToken, "size", [0]);
          var call2138 = callmethodChecked(var_lastToken, "linePos", [0]);
          var opresult2140 = callmethodChecked(call2138, "+", [1], call2136);
          setLineNumber(1026);    // compilenode identifier
          var call2141 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string2134, call2135, opresult2140, var_suggestion);
          if2123 = call2141;
        }
        setLineNumber(1029);    // compilenode call
        onSelf = true;
        var call2142 = callmethodChecked(this, "next", [0]);
        if2096 = call2142;
      } else {
        var if2143 = GraceDone;
        setLineNumber(1031);    // compilenode block
        var block2144 = new GraceBlock(this, 1031, 0);
        block2144.real = function() {
          onSelf = true;
          var call2145 = callmethodChecked(this, "term", [0]);
          return call2145;
        };
        onSelf = true;
        var call2146 = callmethodChecked(this, "didConsume", [1], block2144);
        var call2147 = callmethodChecked(call2146, "not", [0]);
        if (Grace_isTrue(call2147)) {
          setLineNumber(1032);    // compilenode array
          var array2148 = new PrimitiveGraceList([]);
          var var_suggestions = array2148;
          setLineNumber(1033);    // compilenode identifier
          var call2149 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call2150 = callmethodChecked(call2149, "new", [0]);
          var var_suggestion = call2150;
          setLineNumber(1034);    // compilenode string
          var string2152 = new GraceString("rparen");
          var array2151 = new PrimitiveGraceList([string2152]);
          onSelf = true;
          var call2153 = callmethodChecked(this, "findNextValidToken", [1], array2151);
          var var_nextTok = call2153;
          var if2154 = GraceDone;
          setLineNumber(1035);    // compilenode identifier
          var opresult2157 = callmethodChecked(var_nextTok, "==", [1], var_sym);
          if (Grace_isTrue(opresult2157)) {
            setLineNumber(1036);    // compilenode string
            var string2158 = new GraceString("\u00abexpression\u00bb");
            var call2159 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string2158, var_lastToken);
            if2154 = call2159;
          } else {
            setLineNumber(1038);    // compilenode identifier
            var call2160 = callmethodChecked(var_nextTok, "prev", [0]);
            var string2161 = new GraceString("\u00abexpression\u00bb");
            var call2162 = callmethodChecked(var_suggestion, "replaceTokenRange()leading()trailing()with", [2, 1, 1, 1], var_sym, call2160, GraceTrue, GraceFalse, string2161);
            if2154 = call2162;
          }
          setLineNumber(1040);    // compilenode identifier
          var call2163 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
          var if2164 = GraceDone;
          setLineNumber(1041);    // compilenode string
          var string2165 = new GraceString("bind");
          var call2167 = callmethodChecked(var_lastToken, "prev", [0]);
          var call2168 = callmethodChecked(call2167, "kind", [0]);
          var opresult2170 = callmethodChecked(call2168, "==", [1], string2165);
          if (Grace_isTrue(opresult2170)) {
            setLineNumber(1042);    // compilenode identifier
            var call2171 = callmethodChecked(var_errormessages, "suggestion", [0]);
            var call2172 = callmethodChecked(call2171, "new", [0]);
            var_suggestion = call2172;
            setLineNumber(1043);    // compilenode identifier
            var call2173 = callmethodChecked(var_nextTok, "prev", [0]);
            var call2174 = callmethodChecked(var_suggestion, "deleteTokenRange()leading()trailing", [2, 1, 1], var_lastToken, call2173, GraceTrue, GraceFalse);
            setLineNumber(1044);    // compilenode identifier
            var call2175 = callmethodChecked(var_lastToken, "prev", [0]);
            var call2176 = callmethodChecked(var_suggestion, "deleteToken()leading()trailing", [1, 1, 1], call2175, GraceTrue, GraceFalse);
            setLineNumber(1045);    // compilenode identifier
            var call2177 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
            if2164 = call2177;
          }
          setLineNumber(1047);    // compilenode string
          var string2178 = new GraceString("a prefix operator must be followed by an expression.");
          setLineNumber(1048);    // compilenode identifier
          var call2179 = callmethodChecked(var_lastToken, "line", [0]);
          var call2180 = callmethodChecked(var_lastToken, "size", [0]);
          var call2182 = callmethodChecked(var_lastToken, "linePos", [0]);
          var opresult2184 = callmethodChecked(call2182, "+", [1], call2180);
          setLineNumber(1047);    // compilenode identifier
          var call2185 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestions", [1, 2, 1], string2178, call2179, opresult2184, var_suggestions);
          if2143 = call2185;
        }
        if2096 = if2143;
      }
      setLineNumber(1051);    // compilenode identifier
      onSelf = true;
      var call2186 = callmethodChecked(this, "dotrest", [1], var_blocksOK);
      setLineNumber(1052);    // compilenode identifier
      onSelf = true;
      var call2187 = callmethodChecked(this, "callrest", [1], var_blocksOK);
      setLineNumber(1053);    // compilenode call
      onSelf = true;
      var call2188 = callmethodChecked(this, "postfixsquare", [0]);
      setLineNumber(1054);    // compilenode identifier
      var call2189 = callmethodChecked(var_values, "pop", [0]);
      var_val = call2189;
      setLineNumber(1055);    // compilenode string
      var string2191 = new GraceString("prefix");
      var opresult2193 = callmethodChecked(string2191, "++", [1], var_op);
      var call2194 = callmethodChecked(var_ast, "memberNode", [0]);
      var call2195 = callmethodChecked(call2194, "new", [2], opresult2193, var_val);
      var var_mem = call2195;
      setLineNumber(1056);    // compilenode identifier
      var call2197 = callmethodChecked(var_mem, "value", [0]);
      var array2198 = new PrimitiveGraceList([]);
      var call2199 = callmethodChecked(var_ast, "callWithPart", [0]);
      var call2200 = callmethodChecked(call2199, "request()withArgs", [1, 1], call2197, array2198);
      var array2196 = new PrimitiveGraceList([call2200]);
      var call2201 = callmethodChecked(var_ast, "callNode", [0]);
      var call2202 = callmethodChecked(call2201, "new", [2], var_mem, array2196);
      var var_call = call2202;
      setLineNumber(1057);    // compilenode identifier
      var call2203 = callmethodChecked(var_values, "push", [1], var_call);
      if2091 = call2203;
    }
    return if2091;
  };
  func2090.paramCounts = [0];
  this.methods["prefixop"] = func2090;
  func2090.definitionLine = 1004;
  func2090.definitionModule = "parser";
  setLineNumber(1061);    // compilenode method
  var func2204 = function(argcv) {    // method generic
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for generic"));
    setModuleName("parser");
    var if2205 = GraceDone;
    setLineNumber(1062);    // compilenode string
    var string2206 = new GraceString("lgeneric");
    onSelf = true;
    var call2207 = callmethodChecked(this, "accept", [1], string2206);
    if (Grace_isTrue(call2207)) {
      setLineNumber(1063);    // compilenode identifier
      var call2208 = callmethodChecked(var_values, "pop", [0]);
      var var_id = call2208;
      setLineNumber(1064);    // compilenode array
      var array2209 = new PrimitiveGraceList([]);
      var var_gens = array2209;
      setLineNumber(1065);    // compilenode identifier
      var var_startToken = var_sym;
      setLineNumber(1066);    // compilenode call
      onSelf = true;
      var call2210 = callmethodChecked(this, "next", [0]);
      setLineNumber(1067);    // compilenode block
      var block2211 = new GraceBlock(this, 1067, 0);
      block2211.real = function() {
        var string2212 = new GraceString("identifier");
        onSelf = true;
        var call2213 = callmethodChecked(this, "accept", [1], string2212);
        return call2213;
      };
      var block2214 = new GraceBlock(this, 1067, 0);
      block2214.real = function() {
        setLineNumber(1068);    // compilenode call
        onSelf = true;
        var call2215 = callmethodChecked(this, "identifier", [0]);
        setLineNumber(1069);    // compilenode block
        var block2216 = new GraceBlock(this, 1069, 0);
        block2216.real = function() {
          var string2217 = new GraceString("dot");
          onSelf = true;
          var call2218 = callmethodChecked(this, "accept", [1], string2217);
          return call2218;
        };
        var block2219 = new GraceBlock(this, 1069, 0);
        block2219.real = function() {
          setLineNumber(1070);    // compilenode call
          onSelf = true;
          var call2220 = callmethodChecked(this, "next", [0]);
          setLineNumber(1071);    // compilenode identifier
          var call2221 = callmethodChecked(var_values, "pop", [0]);
          var var_memberIn = call2221;
          var if2222 = GraceDone;
          setLineNumber(1072);    // compilenode string
          var string2223 = new GraceString("identifier");
          var call2225 = callmethodChecked(var_sym, "kind", [0]);
          var opresult2227 = callmethodChecked(call2225, "\u2260", [1], string2223);
          if (Grace_isTrue(opresult2227)) {
            setLineNumber(1073);    // compilenode array
            var array2228 = new PrimitiveGraceList([]);
            var var_suggestions = array2228;
            setLineNumber(1074);    // compilenode identifier
            var call2229 = callmethodChecked(var_errormessages, "suggestion", [0]);
            var call2230 = callmethodChecked(call2229, "new", [0]);
            var var_suggestion = call2230;
            setLineNumber(1075);    // compilenode string
            var string2231 = new GraceString("\u00abtype name\u00bb");
            var call2232 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string2231, var_lastToken);
            setLineNumber(1076);    // compilenode identifier
            var call2233 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
            setLineNumber(1077);    // compilenode identifier
            var call2234 = callmethodChecked(var_errormessages, "suggestion", [0]);
            var call2235 = callmethodChecked(call2234, "new", [0]);
            var_suggestion = call2235;
            setLineNumber(1078);    // compilenode identifier
            var call2236 = callmethodChecked(var_suggestion, "deleteToken", [1], var_lastToken);
            setLineNumber(1079);    // compilenode identifier
            var call2237 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
            setLineNumber(1080);    // compilenode string
            var string2238 = new GraceString("a type name must follow the '.'.");
            setLineNumber(1081);    // compilenode identifier
            var call2239 = callmethodChecked(var_lastToken, "line", [0]);
            var call2241 = callmethodChecked(var_lastToken, "linePos", [0]);
            var opresult2243 = callmethodChecked(call2241, "+", [1], new GraceNum(1));
            setLineNumber(1080);    // compilenode identifier
            var call2244 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestions", [1, 2, 1], string2238, call2239, opresult2243, var_suggestions);
            if2222 = call2244;
          }
          setLineNumber(1083);    // compilenode call
          onSelf = true;
          var call2245 = callmethodChecked(this, "identifier", [0]);
          setLineNumber(1084);    // compilenode identifier
          var call2246 = callmethodChecked(var_values, "pop", [0]);
          var var_memberName = call2246;
          setLineNumber(1085);    // compilenode identifier
          var call2247 = callmethodChecked(var_memberName, "value", [0]);
          var call2248 = callmethodChecked(var_ast, "memberNode", [0]);
          var call2249 = callmethodChecked(call2248, "new", [2], call2247, var_memberIn);
          var var_memberNd = call2249;
          setLineNumber(1086);    // compilenode identifier
          var call2250 = callmethodChecked(var_memberName, "line", [0]);
          var call2251 = callmethodChecked(var_memberNd, "line:=", [1], call2250);
          setLineNumber(1087);    // compilenode identifier
          var call2252 = callmethodChecked(var_memberName, "linePos", [0]);
          var call2253 = callmethodChecked(var_memberNd, "linePos:=", [1], call2252);
          setLineNumber(1088);    // compilenode identifier
          var call2254 = callmethodChecked(var_values, "push", [1], var_memberNd);
          return call2254;
        };
        var call2255 = callmethodChecked(var_prelude, "while()do", [1, 1], block2216, block2219);
        setLineNumber(1090);    // compilenode call
        onSelf = true;
        var call2256 = callmethodChecked(this, "generic", [0]);
        setLineNumber(1091);    // compilenode identifier
        var call2257 = callmethodChecked(var_values, "pop", [0]);
        var call2258 = callmethodChecked(var_gens, "push", [1], call2257);
        var if2259 = GraceDone;
        setLineNumber(1092);    // compilenode string
        var string2260 = new GraceString("comma");
        onSelf = true;
        var call2261 = callmethodChecked(this, "accept", [1], string2260);
        if (Grace_isTrue(call2261)) {
          setLineNumber(1093);    // compilenode call
          onSelf = true;
          var call2262 = callmethodChecked(this, "next", [0]);
          if2259 = call2262;
        } else {
          var if2263 = GraceDone;
          setLineNumber(1095);    // compilenode string
          var string2264 = new GraceString("rgeneric");
          var call2266 = callmethodChecked(var_sym, "kind", [0]);
          var opresult2268 = callmethodChecked(call2266, "\u2260", [1], string2264);
          if (Grace_isTrue(opresult2268)) {
            setLineNumber(1096);    // compilenode identifier
            var call2269 = callmethodChecked(var_errormessages, "suggestion", [0]);
            var call2270 = callmethodChecked(call2269, "new", [0]);
            var var_suggestion = call2270;
            setLineNumber(1097);    // compilenode string
            var string2271 = new GraceString(">");
            var call2272 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string2271, var_lastToken);
            setLineNumber(1098);    // compilenode identifier
            var call2273 = callmethodChecked(var_errormessages, "suggestion", [0]);
            var call2274 = callmethodChecked(call2273, "new", [0]);
            var var_suggestion2 = call2274;
            setLineNumber(1099);    // compilenode string
            var string2275 = new GraceString(" ");
            var call2276 = callmethodChecked(var_suggestion2, "insert()beforeToken", [1, 1], string2275, var_startToken);
            setLineNumber(1100);    // compilenode identifier
            var array2277 = new PrimitiveGraceList([var_suggestion, var_suggestion2]);
            var var_suggestions = array2277;
            setLineNumber(1101);    // compilenode string
            var string2278 = new GraceString("a type containing a '<' must end with a '>', or the '<' operator must have a space before it.");
            setLineNumber(1102);    // compilenode identifier
            var call2279 = callmethodChecked(var_lastToken, "line", [0]);
            var call2280 = callmethodChecked(var_lastToken, "size", [0]);
            var call2282 = callmethodChecked(var_lastToken, "linePos", [0]);
            var opresult2284 = callmethodChecked(call2282, "+", [1], call2280);
            setLineNumber(1101);    // compilenode identifier
            var call2285 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestions", [1, 2, 1], string2278, call2279, opresult2284, var_suggestions);
            if2263 = call2285;
          }
          if2259 = if2263;
        }
        return if2259;
      };
      var call2286 = callmethodChecked(var_prelude, "while()do", [1, 1], block2211, block2214);
      var if2287 = GraceDone;
      setLineNumber(1107);    // compilenode string
      var string2288 = new GraceString("rgeneric");
      var call2290 = callmethodChecked(var_sym, "kind", [0]);
      var opresult2292 = callmethodChecked(call2290, "\u2260", [1], string2288);
      if (Grace_isTrue(opresult2292)) {
        setLineNumber(1108);    // compilenode identifier
        var call2293 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call2294 = callmethodChecked(call2293, "new", [0]);
        var var_suggestion = call2294;
        setLineNumber(1109);    // compilenode string
        var string2295 = new GraceString(">");
        var call2296 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string2295, var_lastToken);
        setLineNumber(1110);    // compilenode identifier
        var call2297 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call2298 = callmethodChecked(call2297, "new", [0]);
        var var_suggestion2 = call2298;
        setLineNumber(1111);    // compilenode string
        var string2299 = new GraceString(" ");
        var call2300 = callmethodChecked(var_suggestion2, "insert()beforeToken", [1, 1], string2299, var_startToken);
        setLineNumber(1112);    // compilenode identifier
        var array2301 = new PrimitiveGraceList([var_suggestion, var_suggestion2]);
        var var_suggestions = array2301;
        setLineNumber(1113);    // compilenode string
        var string2302 = new GraceString("a type containing a '<' must end with a '>', or the '<' operator must have a space before it.");
        setLineNumber(1114);    // compilenode identifier
        var call2303 = callmethodChecked(var_lastToken, "line", [0]);
        var call2304 = callmethodChecked(var_lastToken, "size", [0]);
        var call2306 = callmethodChecked(var_lastToken, "linePos", [0]);
        var opresult2308 = callmethodChecked(call2306, "+", [1], call2304);
        setLineNumber(1113);    // compilenode identifier
        var call2309 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestions", [1, 2, 1], string2302, call2303, opresult2308, var_suggestions);
        if2287 = call2309;
      }
      setLineNumber(1117);    // compilenode call
      onSelf = true;
      var call2310 = callmethodChecked(this, "next", [0]);
      setLineNumber(1118);    // compilenode identifier
      var call2311 = callmethodChecked(var_ast, "genericNode", [0]);
      var call2312 = callmethodChecked(call2311, "new", [2], var_id, var_gens);
      var call2313 = callmethodChecked(var_values, "push", [1], call2312);
      if2205 = call2313;
    }
    return if2205;
  };
  func2204.paramCounts = [0];
  this.methods["generic"] = func2204;
  func2204.definitionLine = 1061;
  func2204.definitionModule = "parser";
  setLineNumber(1121);    // compilenode method
  var func2314 = function(argcv) {    // method trycatch
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for trycatch"));
    setModuleName("parser");
    var if2315 = GraceDone;
    setLineNumber(1122);    // compilenode string
    var string2316 = new GraceString("try");
    var call2318 = callmethodChecked(var_sym, "value", [0]);
    var opresult2320 = callmethodChecked(call2318, "==", [1], string2316);
    var string2322 = new GraceString("identifier");
    onSelf = true;
    var call2323 = callmethodChecked(this, "accept", [1], string2322);
    var opresult2325 = callmethodChecked(call2323, "&&", [1], opresult2320);
    var call2326 = callmethodChecked(opresult2325, "prefix!", [0]);
    if (Grace_isTrue(call2326)) {
      setLineNumber(1123);    // compilenode num
      return new GraceNum(0);
    }
    setLineNumber(1125);    // compilenode identifier
    var var_localmin = var_minIndentLevel;
    setLineNumber(1126);    // compilenode identifier
    var var_catchTok = var_sym;
    setLineNumber(1127);    // compilenode call
    onSelf = true;
    var call2327 = callmethodChecked(this, "next", [0]);
    var if2328 = GraceDone;
    setLineNumber(1128);    // compilenode string
    var string2329 = new GraceString("lbrace");
    onSelf = true;
    var call2330 = callmethodChecked(this, "accept", [1], string2329);
    if (Grace_isTrue(call2330)) {
      setLineNumber(1129);    // compilenode call
      onSelf = true;
      var call2331 = callmethodChecked(this, "block", [0]);
      if2328 = call2331;
    } else {
      var if2332 = GraceDone;
      setLineNumber(1131);    // compilenode string
      var string2333 = new GraceString("lparen");
      var call2335 = callmethodChecked(var_sym, "kind", [0]);
      var opresult2337 = callmethodChecked(call2335, "\u2260", [1], string2333);
      if (Grace_isTrue(opresult2337)) {
        setLineNumber(1132);    // compilenode identifier
        var call2338 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call2339 = callmethodChecked(call2338, "new", [0]);
        var var_suggestion = call2339;
        setLineNumber(1134);    // compilenode block
        var block2340 = new GraceBlock(this, 1134, 1);
        setLineNumber(1);    // compilenode identifier
        block2340.real = function(var_t) {
          setLineNumber(1136);    // compilenode string
          var string2341 = new GraceString("catch");
          var call2343 = callmethodChecked(var_t, "value", [0]);
          var opresult2345 = callmethodChecked(call2343, "==", [1], string2341);
          var string2347 = new GraceString("identifier");
          var call2349 = callmethodChecked(var_t, "kind", [0]);
          var opresult2351 = callmethodChecked(call2349, "==", [1], string2347);
          var opresult2353 = callmethodChecked(opresult2351, "&&", [1], opresult2345);
          setLineNumber(1135);    // compilenode identifier
          var call2355 = callmethodChecked(var_catchTok, "line", [0]);
          var call2357 = callmethodChecked(var_t, "line", [0]);
          var opresult2359 = callmethodChecked(call2357, "==", [1], call2355);
          var string2361 = new GraceString("rparen");
          var call2363 = callmethodChecked(var_t, "kind", [0]);
          var opresult2365 = callmethodChecked(call2363, "==", [1], string2361);
          var opresult2367 = callmethodChecked(opresult2365, "&&", [1], opresult2359);
          setLineNumber(1134);    // compilenode string
          var string2369 = new GraceString("rbrace");
          var call2371 = callmethodChecked(var_t, "kind", [0]);
          var opresult2373 = callmethodChecked(call2371, "==", [1], string2369);
          var opresult2375 = callmethodChecked(opresult2373, "||", [1], opresult2367);
          var opresult2377 = callmethodChecked(opresult2375, "||", [1], opresult2353);
          return opresult2377;
        };
        onSelf = true;
        var call2378 = callmethodChecked(this, "findNextToken", [1], block2340);
        var var_nextTok = call2378;
        var if2379 = GraceDone;
        setLineNumber(1137);    // compilenode identifier
        var opresult2382 = callmethodChecked(GraceFalse, "==", [1], var_nextTok);
        if (Grace_isTrue(opresult2382)) {
          setLineNumber(1138);    // compilenode string
          var string2383 = new GraceString(" {}");
          var call2384 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string2383, var_catchTok);
          if2379 = call2384;
        } else {
          var if2385 = GraceDone;
          setLineNumber(1139);    // compilenode string
          var string2386 = new GraceString("rbrace");
          var call2388 = callmethodChecked(var_nextTok, "kind", [0]);
          var opresult2390 = callmethodChecked(call2388, "==", [1], string2386);
          if (Grace_isTrue(opresult2390)) {
            setLineNumber(1140);    // compilenode string
            var string2391 = new GraceString(" {");
            var call2392 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string2391, var_catchTok);
            if2385 = call2392;
          } else {
            var if2393 = GraceDone;
            setLineNumber(1141);    // compilenode string
            var string2394 = new GraceString("rparen");
            var call2396 = callmethodChecked(var_nextTok, "kind", [0]);
            var opresult2398 = callmethodChecked(call2396, "==", [1], string2394);
            if (Grace_isTrue(opresult2398)) {
              var if2399 = GraceDone;
              setLineNumber(1142);    // compilenode identifier
              var opresult2402 = callmethodChecked(var_nextTok, "==", [1], var_sym);
              if (Grace_isTrue(opresult2402)) {
                setLineNumber(1143);    // compilenode string
                var string2403 = new GraceString("(\u00abexpression\u00bb");
                var call2404 = callmethodChecked(var_suggestion, "insert()afterToken()andTrailingSpace", [1, 1, 1], string2403, var_lastToken, GraceTrue);
                if2399 = call2404;
              } else {
                setLineNumber(1145);    // compilenode string
                var string2405 = new GraceString("(");
                var call2406 = callmethodChecked(var_suggestion, "insert()afterToken()andTrailingSpace", [1, 1, 1], string2405, var_lastToken, GraceTrue);
                if2399 = call2406;
              }
              if2393 = if2399;
            } else {
              var if2407 = GraceDone;
              setLineNumber(1147);    // compilenode string
              var string2408 = new GraceString("identifier");
              var call2410 = callmethodChecked(var_nextTok, "kind", [0]);
              var opresult2412 = callmethodChecked(call2410, "==", [1], string2408);
              if (Grace_isTrue(opresult2412)) {
                setLineNumber(1148);    // compilenode string
                var string2413 = new GraceString(" {");
                var call2414 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string2413, var_catchTok);
                setLineNumber(1149);    // compilenode string
                var string2415 = new GraceString("} ");
                var call2416 = callmethodChecked(var_suggestion, "insert()beforeToken", [1, 1], string2415, var_nextTok);
                if2407 = call2416;
              }
              if2393 = if2407;
            }
            if2385 = if2393;
          }
          if2379 = if2385;
        }
        setLineNumber(1151);    // compilenode string
        var string2417 = new GraceString("a catch statement must have either a block or an expression in parentheses after the 'catch'.");
        setLineNumber(1152);    // compilenode identifier
        var call2418 = callmethodChecked(var_catchTok, "line", [0]);
        var call2420 = callmethodChecked(var_catchTok, "size", [0]);
        var call2422 = callmethodChecked(var_catchTok, "linePos", [0]);
        var opresult2424 = callmethodChecked(call2422, "+", [1], call2420);
        var opresult2426 = callmethodChecked(opresult2424, "+", [1], new GraceNum(1));
        setLineNumber(1151);    // compilenode identifier
        var call2427 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string2417, call2418, opresult2426, var_suggestion);
        if2332 = call2427;
      }
      setLineNumber(1154);    // compilenode call
      onSelf = true;
      var call2428 = callmethodChecked(this, "next", [0]);
      var if2429 = GraceDone;
      setLineNumber(1155);    // compilenode block
      var block2430 = new GraceBlock(this, 1155, 0);
      block2430.real = function() {
        onSelf = true;
        var call2431 = callmethodChecked(this, "expression", [1], var_blocksOK);
        return call2431;
      };
      onSelf = true;
      var call2432 = callmethodChecked(this, "didConsume", [1], block2430);
      var call2433 = callmethodChecked(call2432, "not", [0]);
      if (Grace_isTrue(call2433)) {
        setLineNumber(1156);    // compilenode identifier
        var call2434 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call2435 = callmethodChecked(call2434, "new", [0]);
        var var_suggestion = call2435;
        setLineNumber(1157);    // compilenode string
        var string2437 = new GraceString("rparen");
        var array2436 = new PrimitiveGraceList([string2437]);
        onSelf = true;
        var call2438 = callmethodChecked(this, "findNextValidToken", [1], array2436);
        var var_nextTok = call2438;
        var if2439 = GraceDone;
        setLineNumber(1158);    // compilenode identifier
        var opresult2442 = callmethodChecked(var_nextTok, "==", [1], var_sym);
        if (Grace_isTrue(opresult2442)) {
          setLineNumber(1159);    // compilenode string
          var string2443 = new GraceString("\u00abexpression\u00bb");
          var call2444 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string2443, var_lastToken);
          if2439 = call2444;
        } else {
          setLineNumber(1161);    // compilenode identifier
          var call2445 = callmethodChecked(var_nextTok, "prev", [0]);
          var string2446 = new GraceString("\u00abexpression\u00bb");
          var call2447 = callmethodChecked(var_suggestion, "replaceTokenRange()leading()trailing()with", [2, 1, 1, 1], var_sym, call2445, GraceTrue, GraceFalse, string2446);
          if2439 = call2447;
        }
        setLineNumber(1163);    // compilenode string
        var string2448 = new GraceString("a catch statement must have either a block or an expression in parentheses after the 'catch'.");
        setLineNumber(1164);    // compilenode identifier
        var call2449 = callmethodChecked(var_sym, "line", [0]);
        var call2450 = callmethodChecked(var_sym, "linePos", [0]);
        setLineNumber(1163);    // compilenode identifier
        var call2451 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string2448, call2449, call2450, var_suggestion);
        if2429 = call2451;
      }
      var if2452 = GraceDone;
      setLineNumber(1166);    // compilenode string
      var string2453 = new GraceString("rparen");
      var call2455 = callmethodChecked(var_sym, "kind", [0]);
      var opresult2457 = callmethodChecked(call2455, "\u2260", [1], string2453);
      if (Grace_isTrue(opresult2457)) {
        setLineNumber(1167);    // compilenode call
        onSelf = true;
        var call2458 = callmethodChecked(this, "checkBadOperators", [0]);
        setLineNumber(1168);    // compilenode identifier
        var call2459 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call2460 = callmethodChecked(call2459, "new", [0]);
        var var_suggestion = call2460;
        setLineNumber(1169);    // compilenode string
        var string2461 = new GraceString(")");
        var call2462 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string2461, var_lastToken);
        setLineNumber(1170);    // compilenode string
        var string2463 = new GraceString("an expression beginning with a '(' must end with a ')'.");
        setLineNumber(1171);    // compilenode identifier
        var call2464 = callmethodChecked(var_lastToken, "line", [0]);
        var call2465 = callmethodChecked(var_lastToken, "size", [0]);
        var call2467 = callmethodChecked(var_lastToken, "linePos", [0]);
        var opresult2469 = callmethodChecked(call2467, "+", [1], call2465);
        setLineNumber(1170);    // compilenode identifier
        var call2470 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string2463, call2464, opresult2469, var_suggestion);
        if2452 = call2470;
      }
      setLineNumber(1173);    // compilenode call
      onSelf = true;
      var call2471 = callmethodChecked(this, "next", [0]);
      if2328 = call2471;
    }
    setLineNumber(1175);    // compilenode identifier
    var call2472 = callmethodChecked(var_values, "pop", [0]);
    var var_mainblock = call2472;
    setLineNumber(1176);    // compilenode array
    var array2473 = new PrimitiveGraceList([]);
    var var_cases = array2473;
    setLineNumber(1177);    // compilenode identifier
    var var_finally = GraceFalse;
    setLineNumber(1178);    // compilenode block
    var block2474 = new GraceBlock(this, 1178, 0);
    block2474.real = function() {
      var string2475 = new GraceString("catch");
      var call2477 = callmethodChecked(var_sym, "value", [0]);
      var opresult2479 = callmethodChecked(call2477, "==", [1], string2475);
      var string2481 = new GraceString("identifier");
      onSelf = true;
      var call2482 = callmethodChecked(this, "accept", [1], string2481);
      var opresult2484 = callmethodChecked(call2482, "&&", [1], opresult2479);
      return opresult2484;
    };
    var block2485 = new GraceBlock(this, 1178, 0);
    block2485.real = function() {
      setLineNumber(1179);    // compilenode call
      onSelf = true;
      var call2486 = callmethodChecked(this, "next", [0]);
      var if2487 = GraceDone;
      setLineNumber(1180);    // compilenode string
      var string2488 = new GraceString("lbrace");
      onSelf = true;
      var call2489 = callmethodChecked(this, "accept", [1], string2488);
      if (Grace_isTrue(call2489)) {
        setLineNumber(1181);    // compilenode call
        onSelf = true;
        var call2490 = callmethodChecked(this, "block", [0]);
        if2487 = call2490;
      } else {
        var if2491 = GraceDone;
        setLineNumber(1182);    // compilenode string
        var string2492 = new GraceString("lparen");
        onSelf = true;
        var call2493 = callmethodChecked(this, "accept", [1], string2492);
        if (Grace_isTrue(call2493)) {
          setLineNumber(1183);    // compilenode call
          onSelf = true;
          var call2494 = callmethodChecked(this, "next", [0]);
          var if2495 = GraceDone;
          setLineNumber(1184);    // compilenode block
          var block2496 = new GraceBlock(this, 1184, 0);
          block2496.real = function() {
            onSelf = true;
            var call2497 = callmethodChecked(this, "expression", [1], var_blocksOK);
            return call2497;
          };
          onSelf = true;
          var call2498 = callmethodChecked(this, "didConsume", [1], block2496);
          var call2499 = callmethodChecked(call2498, "not", [0]);
          if (Grace_isTrue(call2499)) {
            setLineNumber(1185);    // compilenode identifier
            var call2500 = callmethodChecked(var_errormessages, "suggestion", [0]);
            var call2501 = callmethodChecked(call2500, "new", [0]);
            var var_suggestion = call2501;
            setLineNumber(1186);    // compilenode string
            var string2503 = new GraceString("rparen");
            var array2502 = new PrimitiveGraceList([string2503]);
            onSelf = true;
            var call2504 = callmethodChecked(this, "findNextValidToken", [1], array2502);
            var var_nextTok = call2504;
            var if2505 = GraceDone;
            setLineNumber(1187);    // compilenode identifier
            var opresult2508 = callmethodChecked(var_nextTok, "==", [1], var_sym);
            if (Grace_isTrue(opresult2508)) {
              setLineNumber(1188);    // compilenode string
              var string2509 = new GraceString("\u00abexpression\u00bb");
              var call2510 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string2509, var_lastToken);
              if2505 = call2510;
            } else {
              setLineNumber(1190);    // compilenode identifier
              var call2511 = callmethodChecked(var_nextTok, "prev", [0]);
              var string2512 = new GraceString("\u00abexpression\u00bb");
              var call2513 = callmethodChecked(var_suggestion, "replaceTokenRange()leading()trailing()with", [2, 1, 1, 1], var_sym, call2511, GraceTrue, GraceFalse, string2512);
              if2505 = call2513;
            }
            setLineNumber(1192);    // compilenode string
            var string2514 = new GraceString("a try-catch statement must have either a matching block or an expression in parentheses after the 'catch'.");
            setLineNumber(1193);    // compilenode identifier
            var call2515 = callmethodChecked(var_sym, "line", [0]);
            var call2516 = callmethodChecked(var_sym, "linePos", [0]);
            setLineNumber(1192);    // compilenode identifier
            var call2517 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string2514, call2515, call2516, var_suggestion);
            if2495 = call2517;
          }
          var if2518 = GraceDone;
          setLineNumber(1195);    // compilenode string
          var string2519 = new GraceString("rparen");
          var call2521 = callmethodChecked(var_sym, "kind", [0]);
          var opresult2523 = callmethodChecked(call2521, "\u2260", [1], string2519);
          if (Grace_isTrue(opresult2523)) {
            setLineNumber(1196);    // compilenode call
            onSelf = true;
            var call2524 = callmethodChecked(this, "checkBadOperators", [0]);
            setLineNumber(1197);    // compilenode identifier
            var call2525 = callmethodChecked(var_errormessages, "suggestion", [0]);
            var call2526 = callmethodChecked(call2525, "new", [0]);
            var var_suggestion = call2526;
            setLineNumber(1198);    // compilenode string
            var string2527 = new GraceString(")");
            var call2528 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string2527, var_lastToken);
            setLineNumber(1199);    // compilenode string
            var string2529 = new GraceString("an expression beginning with a '(' must end with a ')'.");
            setLineNumber(1200);    // compilenode identifier
            var call2530 = callmethodChecked(var_lastToken, "line", [0]);
            var call2531 = callmethodChecked(var_lastToken, "size", [0]);
            var call2533 = callmethodChecked(var_lastToken, "linePos", [0]);
            var opresult2535 = callmethodChecked(call2533, "+", [1], call2531);
            setLineNumber(1199);    // compilenode identifier
            var call2536 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string2529, call2530, opresult2535, var_suggestion);
            if2518 = call2536;
          }
          setLineNumber(1202);    // compilenode call
          onSelf = true;
          var call2537 = callmethodChecked(this, "next", [0]);
          if2491 = call2537;
        } else {
          setLineNumber(1204);    // compilenode array
          var array2538 = new PrimitiveGraceList([]);
          var var_suggestions = array2538;
          setLineNumber(1205);    // compilenode identifier
          onSelf = true;
          var call2539 = callmethodChecked(this, "findNextTokenIndentedAt", [1], var_lastToken);
          var var_nextTok = call2539;
          setLineNumber(1206);    // compilenode identifier
          var call2540 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call2541 = callmethodChecked(call2540, "new", [0]);
          var var_suggestion = call2541;
          var if2542 = GraceDone;
          setLineNumber(1207);    // compilenode identifier
          var opresult2545 = callmethodChecked(GraceFalse, "==", [1], var_nextTok);
          if (Grace_isTrue(opresult2545)) {
            setLineNumber(1208);    // compilenode string
            var string2546 = new GraceString(" }");
            var call2547 = callmethodChecked(var_tokens, "last", [0]);
            var call2548 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string2546, call2547);
            setLineNumber(1209);    // compilenode string
            var string2549 = new GraceString(" {");
            var call2550 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string2549, var_lastToken);
            setLineNumber(1210);    // compilenode identifier
            var call2551 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
            if2542 = call2551;
          } else {
            var if2552 = GraceDone;
            setLineNumber(1211);    // compilenode identifier
            var opresult2555 = callmethodChecked(var_nextTok, "==", [1], var_sym);
            if (Grace_isTrue(opresult2555)) {
              setLineNumber(1212);    // compilenode string
              var string2556 = new GraceString(" (\u00abexpression\u00bb)");
              var call2557 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string2556, var_lastToken);
              setLineNumber(1213);    // compilenode identifier
              var call2558 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
              setLineNumber(1214);    // compilenode identifier
              var call2559 = callmethodChecked(var_errormessages, "suggestion", [0]);
              var call2560 = callmethodChecked(call2559, "new", [0]);
              var_suggestion = call2560;
              setLineNumber(1215);    // compilenode string
              var string2561 = new GraceString(" { \u00abmatch expression\u00bb }");
              var call2562 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string2561, var_lastToken);
              setLineNumber(1216);    // compilenode identifier
              var call2563 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
              if2552 = call2563;
            } else {
              setLineNumber(1218);    // compilenode string
              var string2564 = new GraceString(" }");
              var call2565 = callmethodChecked(var_nextTok, "prev", [0]);
              var call2566 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string2564, call2565);
              setLineNumber(1219);    // compilenode string
              var string2567 = new GraceString(" {");
              var call2568 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string2567, var_lastToken);
              setLineNumber(1220);    // compilenode identifier
              var call2569 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
              if2552 = call2569;
            }
            if2542 = if2552;
          }
          setLineNumber(1222);    // compilenode string
          var string2570 = new GraceString("a try-catch statement must have either a matching block or an expression in parentheses after the 'catch'.");
          setLineNumber(1223);    // compilenode identifier
          var call2571 = callmethodChecked(var_sym, "line", [0]);
          var call2572 = callmethodChecked(var_sym, "linePos", [0]);
          setLineNumber(1222);    // compilenode identifier
          var call2573 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestions", [1, 2, 1], string2570, call2571, call2572, var_suggestions);
          if2491 = call2573;
        }
        if2487 = if2491;
      }
      setLineNumber(1225);    // compilenode identifier
      var call2574 = callmethodChecked(var_values, "pop", [0]);
      var call2575 = callmethodChecked(var_cases, "push", [1], call2574);
      return call2575;
    };
    var call2576 = callmethodChecked(var_prelude, "while()do", [1, 1], block2474, block2485);
    var if2577 = GraceDone;
    setLineNumber(1227);    // compilenode string
    var string2578 = new GraceString("case");
    var call2580 = callmethodChecked(var_sym, "value", [0]);
    var opresult2582 = callmethodChecked(call2580, "==", [1], string2578);
    var string2584 = new GraceString("identifier");
    onSelf = true;
    var call2585 = callmethodChecked(this, "accept()onLineOf", [1, 1], string2584, var_catchTok);
    var opresult2587 = callmethodChecked(call2585, "&&", [1], opresult2582);
    if (Grace_isTrue(opresult2587)) {
      setLineNumber(1228);    // compilenode identifier
      var call2588 = callmethodChecked(var_errormessages, "suggestion", [0]);
      var call2589 = callmethodChecked(call2588, "new", [0]);
      var var_suggestion = call2589;
      setLineNumber(1229);    // compilenode string
      var string2590 = new GraceString("catch");
      var call2591 = callmethodChecked(var_suggestion, "replaceToken()with", [1, 1], var_sym, string2590);
      setLineNumber(1232);    // compilenode string
      var string2592 = new GraceString("are no 'case' blocks.");
      setLineNumber(1231);    // compilenode string
      var string2594 = new GraceString("'try' and then zero or more 'catch' blocks; there ");
      setLineNumber(1230);    // compilenode string
      var string2596 = new GraceString("a try-catch statement starts with a ");
      var opresult2598 = callmethodChecked(string2596, "++", [1], string2594);
      var opresult2600 = callmethodChecked(opresult2598, "++", [1], string2592);
      setLineNumber(1233);    // compilenode identifier
      var call2601 = callmethodChecked(var_sym, "line", [0]);
      var call2602 = callmethodChecked(var_sym, "linePos", [0]);
      var call2604 = callmethodChecked(var_sym, "linePos", [0]);
      var opresult2606 = callmethodChecked(call2604, "+", [1], new GraceNum(3));
      setLineNumber(1230);    // compilenode identifier
      var call2607 = callmethodChecked(var_errormessages, "syntaxError()atRange()withSuggestion", [1, 3, 1], opresult2600, call2601, call2602, opresult2606, var_suggestion);
      if2577 = call2607;
    }
    var if2608 = GraceDone;
    setLineNumber(1236);    // compilenode string
    var string2609 = new GraceString("finally");
    var call2611 = callmethodChecked(var_sym, "value", [0]);
    var opresult2613 = callmethodChecked(call2611, "==", [1], string2609);
    var string2615 = new GraceString("identifier");
    onSelf = true;
    var call2616 = callmethodChecked(this, "accept", [1], string2615);
    var opresult2618 = callmethodChecked(call2616, "&&", [1], opresult2613);
    if (Grace_isTrue(opresult2618)) {
      setLineNumber(1237);    // compilenode call
      onSelf = true;
      var call2619 = callmethodChecked(this, "next", [0]);
      var if2620 = GraceDone;
      setLineNumber(1238);    // compilenode string
      var string2621 = new GraceString("lbrace");
      onSelf = true;
      var call2622 = callmethodChecked(this, "accept", [1], string2621);
      if (Grace_isTrue(call2622)) {
        setLineNumber(1239);    // compilenode call
        onSelf = true;
        var call2623 = callmethodChecked(this, "block", [0]);
        if2620 = call2623;
      } else {
        var if2624 = GraceDone;
        setLineNumber(1240);    // compilenode string
        var string2625 = new GraceString("lparen");
        onSelf = true;
        var call2626 = callmethodChecked(this, "accept", [1], string2625);
        if (Grace_isTrue(call2626)) {
          setLineNumber(1241);    // compilenode call
          onSelf = true;
          var call2627 = callmethodChecked(this, "next", [0]);
          var if2628 = GraceDone;
          setLineNumber(1242);    // compilenode block
          var block2629 = new GraceBlock(this, 1242, 0);
          block2629.real = function() {
            onSelf = true;
            var call2630 = callmethodChecked(this, "expression", [1], var_blocksOK);
            return call2630;
          };
          onSelf = true;
          var call2631 = callmethodChecked(this, "didConsume", [1], block2629);
          var call2632 = callmethodChecked(call2631, "not", [0]);
          if (Grace_isTrue(call2632)) {
            setLineNumber(1243);    // compilenode identifier
            var call2633 = callmethodChecked(var_errormessages, "suggestion", [0]);
            var call2634 = callmethodChecked(call2633, "new", [0]);
            var var_suggestion = call2634;
            setLineNumber(1244);    // compilenode string
            var string2636 = new GraceString("rparen");
            var array2635 = new PrimitiveGraceList([string2636]);
            onSelf = true;
            var call2637 = callmethodChecked(this, "findNextValidToken", [1], array2635);
            var var_nextTok = call2637;
            var if2638 = GraceDone;
            setLineNumber(1245);    // compilenode identifier
            var opresult2641 = callmethodChecked(var_nextTok, "==", [1], var_sym);
            if (Grace_isTrue(opresult2641)) {
              setLineNumber(1246);    // compilenode string
              var string2642 = new GraceString("\u00abexpression\u00bb");
              var call2643 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string2642, var_lastToken);
              if2638 = call2643;
            } else {
              setLineNumber(1248);    // compilenode identifier
              var call2644 = callmethodChecked(var_nextTok, "prev", [0]);
              var string2645 = new GraceString("\u00abexpression\u00bb");
              var call2646 = callmethodChecked(var_suggestion, "replaceTokenRange()leading()trailing()with", [2, 1, 1, 1], var_sym, call2644, GraceTrue, GraceFalse, string2645);
              if2638 = call2646;
            }
            setLineNumber(1250);    // compilenode string
            var string2647 = new GraceString("a catch statement must have either a block or an expression in parentheses after the 'finally'.");
            setLineNumber(1251);    // compilenode identifier
            var call2648 = callmethodChecked(var_sym, "line", [0]);
            var call2649 = callmethodChecked(var_sym, "linePos", [0]);
            setLineNumber(1250);    // compilenode identifier
            var call2650 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string2647, call2648, call2649, var_suggestion);
            if2628 = call2650;
          }
          var if2651 = GraceDone;
          setLineNumber(1253);    // compilenode string
          var string2652 = new GraceString("rparen");
          var call2654 = callmethodChecked(var_sym, "kind", [0]);
          var opresult2656 = callmethodChecked(call2654, "\u2260", [1], string2652);
          if (Grace_isTrue(opresult2656)) {
            setLineNumber(1254);    // compilenode call
            onSelf = true;
            var call2657 = callmethodChecked(this, "checkBadOperators", [0]);
            setLineNumber(1255);    // compilenode identifier
            var call2658 = callmethodChecked(var_errormessages, "suggestion", [0]);
            var call2659 = callmethodChecked(call2658, "new", [0]);
            var var_suggestion = call2659;
            setLineNumber(1256);    // compilenode string
            var string2660 = new GraceString(")");
            var call2661 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string2660, var_lastToken);
            setLineNumber(1257);    // compilenode string
            var string2662 = new GraceString("an expression beginning with a '(' must end with a ')'.");
            setLineNumber(1258);    // compilenode identifier
            var call2663 = callmethodChecked(var_lastToken, "line", [0]);
            var call2664 = callmethodChecked(var_lastToken, "size", [0]);
            var call2666 = callmethodChecked(var_lastToken, "linePos", [0]);
            var opresult2668 = callmethodChecked(call2666, "+", [1], call2664);
            setLineNumber(1257);    // compilenode identifier
            var call2669 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string2662, call2663, opresult2668, var_suggestion);
            if2651 = call2669;
          }
          setLineNumber(1260);    // compilenode call
          onSelf = true;
          var call2670 = callmethodChecked(this, "next", [0]);
          if2624 = call2670;
        } else {
          setLineNumber(1262);    // compilenode array
          var array2671 = new PrimitiveGraceList([]);
          var var_suggestions = array2671;
          setLineNumber(1263);    // compilenode identifier
          onSelf = true;
          var call2672 = callmethodChecked(this, "findNextTokenIndentedAt", [1], var_lastToken);
          var var_nextTok = call2672;
          setLineNumber(1264);    // compilenode identifier
          var call2673 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call2674 = callmethodChecked(call2673, "new", [0]);
          var var_suggestion = call2674;
          var if2675 = GraceDone;
          setLineNumber(1265);    // compilenode identifier
          var opresult2678 = callmethodChecked(GraceFalse, "==", [1], var_nextTok);
          if (Grace_isTrue(opresult2678)) {
            setLineNumber(1266);    // compilenode string
            var string2679 = new GraceString(" }");
            var call2680 = callmethodChecked(var_tokens, "first", [0]);
            var call2681 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string2679, call2680);
            setLineNumber(1267);    // compilenode string
            var string2682 = new GraceString(" {");
            var call2683 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string2682, var_lastToken);
            setLineNumber(1268);    // compilenode identifier
            var call2684 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
            if2675 = call2684;
          } else {
            var if2685 = GraceDone;
            setLineNumber(1269);    // compilenode identifier
            var opresult2688 = callmethodChecked(var_nextTok, "==", [1], var_sym);
            if (Grace_isTrue(opresult2688)) {
              setLineNumber(1270);    // compilenode string
              var string2689 = new GraceString(" (\u00abexpression\u00bb)");
              var call2690 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string2689, var_lastToken);
              setLineNumber(1271);    // compilenode identifier
              var call2691 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
              setLineNumber(1272);    // compilenode identifier
              var call2692 = callmethodChecked(var_errormessages, "suggestion", [0]);
              var call2693 = callmethodChecked(call2692, "new", [0]);
              var_suggestion = call2693;
              setLineNumber(1273);    // compilenode string
              var string2694 = new GraceString(" { \u00abexpression\u00bb }");
              var call2695 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string2694, var_lastToken);
              setLineNumber(1274);    // compilenode identifier
              var call2696 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
              if2685 = call2696;
            } else {
              setLineNumber(1276);    // compilenode string
              var string2697 = new GraceString(" }");
              var call2698 = callmethodChecked(var_nextTok, "prev", [0]);
              var call2699 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string2697, call2698);
              setLineNumber(1277);    // compilenode string
              var string2700 = new GraceString(" {");
              var call2701 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string2700, var_lastToken);
              setLineNumber(1278);    // compilenode identifier
              var call2702 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
              if2685 = call2702;
            }
            if2675 = if2685;
          }
          setLineNumber(1280);    // compilenode string
          var string2703 = new GraceString("a try-finally statement must have either a block or an expression in parentheses after the 'finally'.");
          setLineNumber(1281);    // compilenode identifier
          var call2704 = callmethodChecked(var_sym, "line", [0]);
          var call2705 = callmethodChecked(var_sym, "linePos", [0]);
          setLineNumber(1280);    // compilenode identifier
          var call2706 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestions", [1, 2, 1], string2703, call2704, call2705, var_suggestions);
          if2624 = call2706;
        }
        if2620 = if2624;
      }
      setLineNumber(1283);    // compilenode identifier
      var call2707 = callmethodChecked(var_values, "pop", [0]);
      var_finally = call2707;
      if2608 = GraceDone;
    }
    setLineNumber(1285);    // compilenode identifier
    var call2708 = callmethodChecked(var_catchTok, "line", [0]);
    var call2709 = callmethodChecked(var_catchTok, "linePos", [0]);
    var call2710 = callmethodChecked(var_util, "setPosition", [2], call2708, call2709);
    setLineNumber(1286);    // compilenode identifier
    var call2711 = callmethodChecked(var_ast, "tryCatchNode", [0]);
    var call2712 = callmethodChecked(call2711, "new", [3], var_mainblock, var_cases, var_finally);
    var call2713 = callmethodChecked(var_values, "push", [1], call2712);
    setLineNumber(1287);    // compilenode identifier
    var_minIndentLevel = var_localmin;
    return GraceDone;
  };
  func2314.paramCounts = [0];
  this.methods["trycatch"] = func2314;
  func2314.definitionLine = 1121;
  func2314.definitionModule = "parser";
  setLineNumber(1289);    // compilenode method
  var func2714 = function(argcv) {    // method matchcase
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for matchcase"));
    setModuleName("parser");
    var if2715 = GraceDone;
    setLineNumber(1290);    // compilenode string
    var string2716 = new GraceString("match");
    var call2718 = callmethodChecked(var_sym, "value", [0]);
    var opresult2720 = callmethodChecked(call2718, "==", [1], string2716);
    var string2722 = new GraceString("identifier");
    onSelf = true;
    var call2723 = callmethodChecked(this, "accept", [1], string2722);
    var opresult2725 = callmethodChecked(call2723, "&&", [1], opresult2720);
    var call2726 = callmethodChecked(opresult2725, "prefix!", [0]);
    if (Grace_isTrue(call2726)) {
      setLineNumber(1291);    // compilenode num
      return new GraceNum(0);
    }
    setLineNumber(1293);    // compilenode identifier
    var var_localmin = var_minIndentLevel;
    setLineNumber(1294);    // compilenode identifier
    var var_matchTok = var_sym;
    setLineNumber(1295);    // compilenode call
    onSelf = true;
    var call2727 = callmethodChecked(this, "next", [0]);
    var if2728 = GraceDone;
    setLineNumber(1296);    // compilenode string
    var string2729 = new GraceString("lparen");
    var call2731 = callmethodChecked(var_sym, "kind", [0]);
    var opresult2733 = callmethodChecked(call2731, "\u2260", [1], string2729);
    if (Grace_isTrue(opresult2733)) {
      setLineNumber(1297);    // compilenode identifier
      var call2734 = callmethodChecked(var_errormessages, "suggestion", [0]);
      var call2735 = callmethodChecked(call2734, "new", [0]);
      var var_suggestion = call2735;
      setLineNumber(1299);    // compilenode block
      var block2736 = new GraceBlock(this, 1299, 1);
      setLineNumber(1);    // compilenode identifier
      block2736.real = function(var_t) {
        setLineNumber(1300);    // compilenode string
        var string2737 = new GraceString("case");
        var call2739 = callmethodChecked(var_t, "value", [0]);
        var opresult2741 = callmethodChecked(call2739, "==", [1], string2737);
        var string2743 = new GraceString("identifier");
        var call2745 = callmethodChecked(var_t, "kind", [0]);
        var opresult2747 = callmethodChecked(call2745, "==", [1], string2743);
        var opresult2749 = callmethodChecked(opresult2747, "&&", [1], opresult2741);
        setLineNumber(1299);    // compilenode identifier
        var call2751 = callmethodChecked(var_matchTok, "line", [0]);
        var call2753 = callmethodChecked(var_t, "line", [0]);
        var opresult2755 = callmethodChecked(call2753, "==", [1], call2751);
        var string2757 = new GraceString("rparen");
        var call2759 = callmethodChecked(var_t, "kind", [0]);
        var opresult2761 = callmethodChecked(call2759, "==", [1], string2757);
        var opresult2763 = callmethodChecked(opresult2761, "&&", [1], opresult2755);
        var opresult2765 = callmethodChecked(opresult2763, "||", [1], opresult2749);
        return opresult2765;
      };
      onSelf = true;
      var call2766 = callmethodChecked(this, "findNextToken", [1], block2736);
      var var_nextTok = call2766;
      var if2767 = GraceDone;
      setLineNumber(1301);    // compilenode identifier
      var opresult2770 = callmethodChecked(GraceFalse, "==", [1], var_nextTok);
      if (Grace_isTrue(opresult2770)) {
        setLineNumber(1302);    // compilenode string
        var string2771 = new GraceString("(\u00abexpression\u00bb)");
        var call2772 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string2771, var_matchTok);
        if2767 = call2772;
      } else {
        var if2773 = GraceDone;
        setLineNumber(1303);    // compilenode string
        var string2774 = new GraceString("rparen");
        var call2776 = callmethodChecked(var_nextTok, "kind", [0]);
        var opresult2778 = callmethodChecked(call2776, "==", [1], string2774);
        if (Grace_isTrue(opresult2778)) {
          var if2779 = GraceDone;
          setLineNumber(1304);    // compilenode identifier
          var opresult2782 = callmethodChecked(var_nextTok, "==", [1], var_sym);
          if (Grace_isTrue(opresult2782)) {
            setLineNumber(1305);    // compilenode string
            var string2783 = new GraceString("(\u00abexpression\u00bb");
            var call2784 = callmethodChecked(var_suggestion, "insert()beforeToken", [1, 1], string2783, var_sym);
            if2779 = call2784;
          } else {
            setLineNumber(1307);    // compilenode string
            var string2785 = new GraceString("(");
            var call2786 = callmethodChecked(var_suggestion, "insert()beforeToken", [1, 1], string2785, var_sym);
            if2779 = call2786;
          }
          if2773 = if2779;
        } else {
          var if2787 = GraceDone;
          setLineNumber(1309);    // compilenode string
          var string2788 = new GraceString("identifier");
          var call2790 = callmethodChecked(var_nextTok, "kind", [0]);
          var opresult2792 = callmethodChecked(call2790, "==", [1], string2788);
          if (Grace_isTrue(opresult2792)) {
            setLineNumber(1310);    // compilenode string
            var string2793 = new GraceString("(");
            var call2794 = callmethodChecked(var_suggestion, "insert()beforeToken", [1, 1], string2793, var_sym);
            setLineNumber(1311);    // compilenode string
            var string2795 = new GraceString(")");
            var call2796 = callmethodChecked(var_nextTok, "prev", [0]);
            var call2797 = callmethodChecked(var_suggestion, "insert()afterToken()andTrailingSpace", [1, 1, 1], string2795, call2796, GraceTrue);
            if2787 = call2797;
          }
          if2773 = if2787;
        }
        if2767 = if2773;
      }
      setLineNumber(1313);    // compilenode string
      var string2798 = new GraceString("a match statement must have an expression in parentheses after the 'match'.");
      setLineNumber(1314);    // compilenode identifier
      var call2799 = callmethodChecked(var_matchTok, "line", [0]);
      var call2800 = callmethodChecked(var_matchTok, "size", [0]);
      var call2802 = callmethodChecked(var_matchTok, "linePos", [0]);
      var opresult2804 = callmethodChecked(call2802, "+", [1], call2800);
      setLineNumber(1313);    // compilenode identifier
      var call2805 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string2798, call2799, opresult2804, var_suggestion);
      if2728 = call2805;
    }
    setLineNumber(1316);    // compilenode call
    onSelf = true;
    var call2806 = callmethodChecked(this, "next", [0]);
    var if2807 = GraceDone;
    setLineNumber(1317);    // compilenode block
    var block2808 = new GraceBlock(this, 1317, 0);
    block2808.real = function() {
      onSelf = true;
      var call2809 = callmethodChecked(this, "expression", [1], var_blocksOK);
      return call2809;
    };
    onSelf = true;
    var call2810 = callmethodChecked(this, "didConsume", [1], block2808);
    var call2811 = callmethodChecked(call2810, "not", [0]);
    if (Grace_isTrue(call2811)) {
      setLineNumber(1318);    // compilenode identifier
      var call2812 = callmethodChecked(var_errormessages, "suggestion", [0]);
      var call2813 = callmethodChecked(call2812, "new", [0]);
      var var_suggestion = call2813;
      setLineNumber(1319);    // compilenode string
      var string2815 = new GraceString("rparen");
      var array2814 = new PrimitiveGraceList([string2815]);
      onSelf = true;
      var call2816 = callmethodChecked(this, "findNextValidToken", [1], array2814);
      var var_nextTok = call2816;
      var if2817 = GraceDone;
      setLineNumber(1320);    // compilenode identifier
      var opresult2820 = callmethodChecked(var_nextTok, "==", [1], var_sym);
      if (Grace_isTrue(opresult2820)) {
        setLineNumber(1321);    // compilenode string
        var string2821 = new GraceString("\u00abexpression\u00bb");
        var call2822 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string2821, var_lastToken);
        if2817 = call2822;
      } else {
        setLineNumber(1323);    // compilenode identifier
        var call2823 = callmethodChecked(var_nextTok, "prev", [0]);
        var string2824 = new GraceString("\u00abexpression\u00bb");
        var call2825 = callmethodChecked(var_suggestion, "replaceTokenRange()leading()trailing()with", [2, 1, 1, 1], var_sym, call2823, GraceTrue, GraceFalse, string2824);
        if2817 = call2825;
      }
      setLineNumber(1325);    // compilenode string
      var string2826 = new GraceString("a match statement must have an expression in parentheses after the 'match'.");
      setLineNumber(1326);    // compilenode identifier
      var call2827 = callmethodChecked(var_sym, "line", [0]);
      var call2828 = callmethodChecked(var_sym, "linePos", [0]);
      setLineNumber(1325);    // compilenode identifier
      var call2829 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string2826, call2827, call2828, var_suggestion);
      if2807 = call2829;
    }
    setLineNumber(1328);    // compilenode identifier
    var call2830 = callmethodChecked(var_values, "pop", [0]);
    var var_matchee = call2830;
    var if2831 = GraceDone;
    setLineNumber(1329);    // compilenode string
    var string2832 = new GraceString("rparen");
    var call2834 = callmethodChecked(var_sym, "kind", [0]);
    var opresult2836 = callmethodChecked(call2834, "\u2260", [1], string2832);
    if (Grace_isTrue(opresult2836)) {
      setLineNumber(1330);    // compilenode call
      onSelf = true;
      var call2837 = callmethodChecked(this, "checkBadOperators", [0]);
      setLineNumber(1331);    // compilenode identifier
      var call2838 = callmethodChecked(var_errormessages, "suggestion", [0]);
      var call2839 = callmethodChecked(call2838, "new", [0]);
      var var_suggestion = call2839;
      setLineNumber(1332);    // compilenode string
      var string2840 = new GraceString(")");
      var call2841 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string2840, var_lastToken);
      setLineNumber(1333);    // compilenode string
      var string2842 = new GraceString("an expression beginning with a '(' must end with a ')'.");
      setLineNumber(1334);    // compilenode identifier
      var call2843 = callmethodChecked(var_lastToken, "line", [0]);
      var call2844 = callmethodChecked(var_lastToken, "size", [0]);
      var call2846 = callmethodChecked(var_lastToken, "linePos", [0]);
      var opresult2848 = callmethodChecked(call2846, "+", [1], call2844);
      setLineNumber(1333);    // compilenode identifier
      var call2849 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string2842, call2843, opresult2848, var_suggestion);
      if2831 = call2849;
    }
    setLineNumber(1336);    // compilenode call
    onSelf = true;
    var call2850 = callmethodChecked(this, "next", [0]);
    setLineNumber(1337);    // compilenode array
    var array2851 = new PrimitiveGraceList([]);
    var var_cases = array2851;
    setLineNumber(1338);    // compilenode identifier
    var var_elsecase = GraceFalse;
    setLineNumber(1339);    // compilenode block
    var block2852 = new GraceBlock(this, 1339, 0);
    block2852.real = function() {
      var string2853 = new GraceString("case");
      var call2855 = callmethodChecked(var_sym, "value", [0]);
      var opresult2857 = callmethodChecked(call2855, "==", [1], string2853);
      var string2859 = new GraceString("identifier");
      onSelf = true;
      var call2860 = callmethodChecked(this, "accept", [1], string2859);
      var opresult2862 = callmethodChecked(call2860, "&&", [1], opresult2857);
      return opresult2862;
    };
    var block2863 = new GraceBlock(this, 1339, 0);
    block2863.real = function() {
      setLineNumber(1340);    // compilenode call
      onSelf = true;
      var call2864 = callmethodChecked(this, "next", [0]);
      var if2865 = GraceDone;
      setLineNumber(1341);    // compilenode string
      var string2866 = new GraceString("lbrace");
      onSelf = true;
      var call2867 = callmethodChecked(this, "accept", [1], string2866);
      if (Grace_isTrue(call2867)) {
        setLineNumber(1342);    // compilenode call
        onSelf = true;
        var call2868 = callmethodChecked(this, "block", [0]);
        if2865 = call2868;
      } else {
        var if2869 = GraceDone;
        setLineNumber(1343);    // compilenode string
        var string2870 = new GraceString("lparen");
        onSelf = true;
        var call2871 = callmethodChecked(this, "accept", [1], string2870);
        if (Grace_isTrue(call2871)) {
          setLineNumber(1344);    // compilenode call
          onSelf = true;
          var call2872 = callmethodChecked(this, "next", [0]);
          var if2873 = GraceDone;
          setLineNumber(1345);    // compilenode block
          var block2874 = new GraceBlock(this, 1345, 0);
          block2874.real = function() {
            onSelf = true;
            var call2875 = callmethodChecked(this, "expression", [1], var_blocksOK);
            return call2875;
          };
          onSelf = true;
          var call2876 = callmethodChecked(this, "didConsume", [1], block2874);
          var call2877 = callmethodChecked(call2876, "not", [0]);
          if (Grace_isTrue(call2877)) {
            setLineNumber(1346);    // compilenode identifier
            var call2878 = callmethodChecked(var_errormessages, "suggestion", [0]);
            var call2879 = callmethodChecked(call2878, "new", [0]);
            var var_suggestion = call2879;
            setLineNumber(1347);    // compilenode string
            var string2881 = new GraceString("rparen");
            var array2880 = new PrimitiveGraceList([string2881]);
            onSelf = true;
            var call2882 = callmethodChecked(this, "findNextValidToken", [1], array2880);
            var var_nextTok = call2882;
            var if2883 = GraceDone;
            setLineNumber(1348);    // compilenode identifier
            var opresult2886 = callmethodChecked(var_nextTok, "==", [1], var_sym);
            if (Grace_isTrue(opresult2886)) {
              setLineNumber(1349);    // compilenode string
              var string2887 = new GraceString("\u00abexpression\u00bb");
              var call2888 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string2887, var_lastToken);
              if2883 = call2888;
            } else {
              setLineNumber(1351);    // compilenode identifier
              var call2889 = callmethodChecked(var_nextTok, "prev", [0]);
              var string2890 = new GraceString("\u00abexpression\u00bb");
              var call2891 = callmethodChecked(var_suggestion, "replaceTokenRange()leading()trailing()with", [2, 1, 1, 1], var_sym, call2889, GraceTrue, GraceFalse, string2890);
              if2883 = call2891;
            }
            setLineNumber(1353);    // compilenode string
            var string2892 = new GraceString("a match statement must have either a matching block or an expression in parentheses after the 'case'.");
            setLineNumber(1354);    // compilenode identifier
            var call2893 = callmethodChecked(var_sym, "line", [0]);
            var call2894 = callmethodChecked(var_sym, "linePos", [0]);
            setLineNumber(1353);    // compilenode identifier
            var call2895 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string2892, call2893, call2894, var_suggestion);
            if2873 = call2895;
          }
          var if2896 = GraceDone;
          setLineNumber(1356);    // compilenode string
          var string2897 = new GraceString("rparen");
          var call2899 = callmethodChecked(var_sym, "kind", [0]);
          var opresult2901 = callmethodChecked(call2899, "\u2260", [1], string2897);
          if (Grace_isTrue(opresult2901)) {
            setLineNumber(1357);    // compilenode call
            onSelf = true;
            var call2902 = callmethodChecked(this, "checkBadOperators", [0]);
            setLineNumber(1358);    // compilenode identifier
            var call2903 = callmethodChecked(var_errormessages, "suggestion", [0]);
            var call2904 = callmethodChecked(call2903, "new", [0]);
            var var_suggestion = call2904;
            setLineNumber(1359);    // compilenode string
            var string2905 = new GraceString(")");
            var call2906 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string2905, var_lastToken);
            setLineNumber(1360);    // compilenode string
            var string2907 = new GraceString("an expression beginning with a '(' must end with a ')'.");
            setLineNumber(1361);    // compilenode identifier
            var call2908 = callmethodChecked(var_lastToken, "line", [0]);
            var call2909 = callmethodChecked(var_lastToken, "size", [0]);
            var call2911 = callmethodChecked(var_lastToken, "linePos", [0]);
            var opresult2913 = callmethodChecked(call2911, "+", [1], call2909);
            setLineNumber(1360);    // compilenode identifier
            var call2914 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string2907, call2908, opresult2913, var_suggestion);
            if2896 = call2914;
          }
          setLineNumber(1363);    // compilenode call
          onSelf = true;
          var call2915 = callmethodChecked(this, "next", [0]);
          if2869 = call2915;
        } else {
          setLineNumber(1365);    // compilenode array
          var array2916 = new PrimitiveGraceList([]);
          var var_suggestions = array2916;
          setLineNumber(1366);    // compilenode identifier
          onSelf = true;
          var call2917 = callmethodChecked(this, "findNextTokenIndentedAt", [1], var_lastToken);
          var var_nextTok = call2917;
          setLineNumber(1367);    // compilenode identifier
          var call2918 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call2919 = callmethodChecked(call2918, "new", [0]);
          var var_suggestion = call2919;
          var if2920 = GraceDone;
          setLineNumber(1368);    // compilenode identifier
          var opresult2923 = callmethodChecked(GraceFalse, "==", [1], var_nextTok);
          if (Grace_isTrue(opresult2923)) {
            setLineNumber(1369);    // compilenode string
            var string2924 = new GraceString(" }");
            var call2925 = callmethodChecked(var_tokens, "last", [0]);
            var call2926 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string2924, call2925);
            setLineNumber(1370);    // compilenode string
            var string2927 = new GraceString(" {");
            var call2928 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string2927, var_lastToken);
            setLineNumber(1371);    // compilenode identifier
            var call2929 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
            if2920 = call2929;
          } else {
            var if2930 = GraceDone;
            setLineNumber(1372);    // compilenode identifier
            var opresult2933 = callmethodChecked(var_nextTok, "==", [1], var_sym);
            if (Grace_isTrue(opresult2933)) {
              setLineNumber(1373);    // compilenode string
              var string2934 = new GraceString(" (\u00abexpression\u00bb)");
              var call2935 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string2934, var_lastToken);
              setLineNumber(1374);    // compilenode identifier
              var call2936 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
              setLineNumber(1375);    // compilenode identifier
              var call2937 = callmethodChecked(var_errormessages, "suggestion", [0]);
              var call2938 = callmethodChecked(call2937, "new", [0]);
              var_suggestion = call2938;
              setLineNumber(1376);    // compilenode string
              var string2939 = new GraceString(" { \u00abmatch expression\u00bb }");
              var call2940 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string2939, var_lastToken);
              setLineNumber(1377);    // compilenode identifier
              var call2941 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
              if2930 = call2941;
            } else {
              setLineNumber(1379);    // compilenode string
              var string2942 = new GraceString(" }");
              var call2943 = callmethodChecked(var_nextTok, "prev", [0]);
              var call2944 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string2942, call2943);
              setLineNumber(1380);    // compilenode string
              var string2945 = new GraceString(" {");
              var call2946 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string2945, var_lastToken);
              setLineNumber(1381);    // compilenode identifier
              var call2947 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
              if2930 = call2947;
            }
            if2920 = if2930;
          }
          setLineNumber(1383);    // compilenode string
          var string2948 = new GraceString("a match statement must have either a matching block or an expression in parentheses after the 'case'.");
          setLineNumber(1384);    // compilenode identifier
          var call2949 = callmethodChecked(var_sym, "line", [0]);
          var call2950 = callmethodChecked(var_sym, "linePos", [0]);
          setLineNumber(1383);    // compilenode identifier
          var call2951 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestions", [1, 2, 1], string2948, call2949, call2950, var_suggestions);
          if2869 = call2951;
        }
        if2865 = if2869;
      }
      setLineNumber(1386);    // compilenode identifier
      var call2952 = callmethodChecked(var_values, "pop", [0]);
      var call2953 = callmethodChecked(var_cases, "push", [1], call2952);
      return call2953;
    };
    var call2954 = callmethodChecked(var_prelude, "while()do", [1, 1], block2852, block2863);
    setLineNumber(1388);    // compilenode identifier
    var call2955 = callmethodChecked(var_matchTok, "line", [0]);
    var call2956 = callmethodChecked(var_matchTok, "linePos", [0]);
    var call2957 = callmethodChecked(var_util, "setPosition", [2], call2955, call2956);
    setLineNumber(1389);    // compilenode identifier
    var call2958 = callmethodChecked(var_ast, "matchCaseNode", [0]);
    var call2959 = callmethodChecked(call2958, "new", [3], var_matchee, var_cases, var_elsecase);
    var call2960 = callmethodChecked(var_values, "push", [1], call2959);
    setLineNumber(1390);    // compilenode identifier
    var_minIndentLevel = var_localmin;
    return GraceDone;
  };
  func2714.paramCounts = [0];
  this.methods["matchcase"] = func2714;
  func2714.definitionLine = 1289;
  func2714.definitionModule = "parser";
  setLineNumber(1394);    // compilenode method
  var func2961 = function(argcv) {    // method term
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for term"));
    setModuleName("parser");
    setLineNumber(1395);    // compilenode identifier
    var call2962 = callmethodChecked(var_sym, "line", [0]);
    var call2963 = callmethodChecked(var_sym, "linePos", [0]);
    var call2964 = callmethodChecked(var_util, "setPosition", [2], call2962, call2963);
    var if2965 = GraceDone;
    setLineNumber(1396);    // compilenode string
    var string2966 = new GraceString("num");
    onSelf = true;
    var call2967 = callmethodChecked(this, "accept", [1], string2966);
    if (Grace_isTrue(call2967)) {
      setLineNumber(1397);    // compilenode call
      onSelf = true;
      var call2968 = callmethodChecked(this, "pushnum", [0]);
      if2965 = call2968;
    } else {
      var if2969 = GraceDone;
      setLineNumber(1398);    // compilenode string
      var string2970 = new GraceString("string");
      onSelf = true;
      var call2971 = callmethodChecked(this, "accept", [1], string2970);
      if (Grace_isTrue(call2971)) {
        setLineNumber(1399);    // compilenode call
        onSelf = true;
        var call2972 = callmethodChecked(this, "pushstring", [0]);
        if2969 = call2972;
      } else {
        var if2973 = GraceDone;
        setLineNumber(1400);    // compilenode string
        var string2974 = new GraceString("match");
        var call2976 = callmethodChecked(var_sym, "value", [0]);
        var opresult2978 = callmethodChecked(call2976, "==", [1], string2974);
        var string2980 = new GraceString("identifier");
        onSelf = true;
        var call2981 = callmethodChecked(this, "accept", [1], string2980);
        var opresult2983 = callmethodChecked(call2981, "&&", [1], opresult2978);
        if (Grace_isTrue(opresult2983)) {
          setLineNumber(1401);    // compilenode call
          onSelf = true;
          var call2984 = callmethodChecked(this, "matchcase", [0]);
          if2973 = call2984;
        } else {
          var if2985 = GraceDone;
          setLineNumber(1402);    // compilenode string
          var string2986 = new GraceString("try");
          var call2988 = callmethodChecked(var_sym, "value", [0]);
          var opresult2990 = callmethodChecked(call2988, "==", [1], string2986);
          var string2992 = new GraceString("identifier");
          onSelf = true;
          var call2993 = callmethodChecked(this, "accept", [1], string2992);
          var opresult2995 = callmethodChecked(call2993, "&&", [1], opresult2990);
          if (Grace_isTrue(opresult2995)) {
            setLineNumber(1403);    // compilenode call
            onSelf = true;
            var call2996 = callmethodChecked(this, "trycatch", [0]);
            if2985 = call2996;
          } else {
            var if2997 = GraceDone;
            setLineNumber(1404);    // compilenode string
            var string2998 = new GraceString("identifier");
            onSelf = true;
            var call2999 = callmethodChecked(this, "accept", [1], string2998);
            if (Grace_isTrue(call2999)) {
              setLineNumber(1405);    // compilenode call
              onSelf = true;
              var call3000 = callmethodChecked(this, "identifier", [0]);
              if2997 = call3000;
            } else {
              var if3001 = GraceDone;
              setLineNumber(1406);    // compilenode string
              var string3002 = new GraceString("object");
              onSelf = true;
              var call3003 = callmethodChecked(this, "acceptKeyword", [1], string3002);
              if (Grace_isTrue(call3003)) {
                setLineNumber(1407);    // compilenode call
                onSelf = true;
                var call3004 = callmethodChecked(this, "doobject", [0]);
                if3001 = call3004;
              } else {
                var if3005 = GraceDone;
                setLineNumber(1408);    // compilenode string
                var string3006 = new GraceString("type");
                onSelf = true;
                var call3007 = callmethodChecked(this, "acceptKeyword", [1], string3006);
                if (Grace_isTrue(call3007)) {
                  setLineNumber(1409);    // compilenode call
                  onSelf = true;
                  var call3008 = callmethodChecked(this, "dotypeLiteral", [0]);
                  if3005 = call3008;
                } else {
                  var if3009 = GraceDone;
                  setLineNumber(1410);    // compilenode string
                  var string3010 = new GraceString("lbrace");
                  onSelf = true;
                  var call3011 = callmethodChecked(this, "accept", [1], string3010);
                  if (Grace_isTrue(call3011)) {
                    setLineNumber(1411);    // compilenode call
                    onSelf = true;
                    var call3012 = callmethodChecked(this, "block", [0]);
                    if3009 = call3012;
                  } else {
                    var if3013 = GraceDone;
                    setLineNumber(1412);    // compilenode string
                    var string3014 = new GraceString("lsquare");
                    onSelf = true;
                    var call3015 = callmethodChecked(this, "acceptAfterSpaces", [1], string3014);
                    if (Grace_isTrue(call3015)) {
                      setLineNumber(1413);    // compilenode call
                      onSelf = true;
                      var call3016 = callmethodChecked(this, "doarray", [0]);
                      if3013 = call3016;
                    } else {
                      var if3017 = GraceDone;
                      setLineNumber(1414);    // compilenode string
                      var string3018 = new GraceString("lsquare");
                      onSelf = true;
                      var call3019 = callmethodChecked(this, "accept", [1], string3018);
                      var string3021 = new GraceString("identifier");
                      var call3023 = callmethodChecked(var_lastToken, "kind", [0]);
                      var opresult3025 = callmethodChecked(call3023, "\u2260", [1], string3021);
                      var opresult3027 = callmethodChecked(opresult3025, "&&", [1], call3019);
                      if (Grace_isTrue(opresult3027)) {
                        setLineNumber(1415);    // compilenode call
                        onSelf = true;
                        var call3028 = callmethodChecked(this, "doarray", [0]);
                        if3017 = call3028;
                      } else {
                        var if3029 = GraceDone;
                        setLineNumber(1416);    // compilenode string
                        var string3030 = new GraceString("op");
                        onSelf = true;
                        var call3031 = callmethodChecked(this, "accept", [1], string3030);
                        if (Grace_isTrue(call3031)) {
                          setLineNumber(1418);    // compilenode call
                          onSelf = true;
                          var call3032 = callmethodChecked(this, "prefixop", [0]);
                          if3029 = call3032;
                        }
                        if3017 = if3029;
                      }
                      if3013 = if3017;
                    }
                    if3009 = if3013;
                  }
                  if3005 = if3009;
                }
                if3001 = if3005;
              }
              if2997 = if3001;
            }
            if2985 = if2997;
          }
          if2973 = if2985;
        }
        if2969 = if2973;
      }
      if2965 = if2969;
    }
    return if2965;
  };
  func2961.paramCounts = [0];
  this.methods["term"] = func2961;
  func2961.definitionLine = 1394;
  func2961.definitionModule = "parser";
  setLineNumber(1426);    // compilenode method
  var func3033 = function(argcv) {    // method expression(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_acceptBlocks = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for expression(1)"));
    setModuleName("parser");
    setLineNumber(1427);    // compilenode identifier
    var call3034 = callmethodChecked(var_values, "size", [0]);
    var var_sz = call3034;
    setLineNumber(1428);    // compilenode identifier
    var call3035 = callmethodChecked(var_sym, "line", [0]);
    var call3036 = callmethodChecked(var_sym, "linePos", [0]);
    var call3037 = callmethodChecked(var_util, "setPosition", [2], call3035, call3036);
    var if3038 = GraceDone;
    setLineNumber(1429);    // compilenode string
    var string3039 = new GraceString("lparen");
    onSelf = true;
    var call3040 = callmethodChecked(this, "accept", [1], string3039);
    if (Grace_isTrue(call3040)) {
      setLineNumber(1430);    // compilenode identifier
      var var_tmpStatementToken = var_statementToken;
      setLineNumber(1431);    // compilenode identifier
      var_statementToken = var_sym;
      setLineNumber(1432);    // compilenode identifier
      var call3041 = callmethodChecked(var_sym, "line", [0]);
      var call3042 = callmethodChecked(var_sym, "linePos", [0]);
      var call3043 = callmethodChecked(var_util, "setPosition", [2], call3041, call3042);
      setLineNumber(1433);    // compilenode call
      onSelf = true;
      var call3044 = callmethodChecked(this, "next", [0]);
      var if3045 = GraceDone;
      setLineNumber(1434);    // compilenode block
      var block3046 = new GraceBlock(this, 1434, 0);
      block3046.real = function() {
        onSelf = true;
        var call3047 = callmethodChecked(this, "expression", [1], var_acceptBlocks);
        return call3047;
      };
      onSelf = true;
      var call3048 = callmethodChecked(this, "didConsume", [1], block3046);
      var call3049 = callmethodChecked(call3048, "not", [0]);
      if (Grace_isTrue(call3049)) {
        setLineNumber(1435);    // compilenode identifier
        var call3050 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call3051 = callmethodChecked(call3050, "new", [0]);
        var var_suggestion = call3051;
        setLineNumber(1436);    // compilenode string
        var string3053 = new GraceString("rparen");
        var array3052 = new PrimitiveGraceList([string3053]);
        onSelf = true;
        var call3054 = callmethodChecked(this, "findNextValidToken", [1], array3052);
        var var_nextTok = call3054;
        var if3055 = GraceDone;
        setLineNumber(1437);    // compilenode identifier
        var opresult3058 = callmethodChecked(var_nextTok, "==", [1], var_sym);
        if (Grace_isTrue(opresult3058)) {
          setLineNumber(1438);    // compilenode string
          var string3059 = new GraceString("\u00abexpression\u00bb");
          var call3060 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string3059, var_lastToken);
          if3055 = call3060;
        } else {
          setLineNumber(1440);    // compilenode identifier
          var call3061 = callmethodChecked(var_nextTok, "prev", [0]);
          setLineNumber(1441);    // compilenode string
          var string3062 = new GraceString("\u00abexpression\u00bb");
          setLineNumber(1440);    // compilenode identifier
          var call3063 = callmethodChecked(var_suggestion, "replaceTokenRange()leading()trailing()with", [2, 1, 1, 1], var_sym, call3061, GraceTrue, GraceFalse, string3062);
          if3055 = call3063;
        }
        setLineNumber(1443);    // compilenode string
        var string3064 = new GraceString("parentheses must contain a valid expression.");
        setLineNumber(1444);    // compilenode identifier
        var call3065 = callmethodChecked(var_sym, "line", [0]);
        var call3066 = callmethodChecked(var_sym, "linePos", [0]);
        setLineNumber(1443);    // compilenode identifier
        var call3067 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string3064, call3065, call3066, var_suggestion);
        if3045 = call3067;
      }
      var if3068 = GraceDone;
      setLineNumber(1446);    // compilenode string
      var string3069 = new GraceString("rparen");
      var call3071 = callmethodChecked(var_sym, "kind", [0]);
      var opresult3073 = callmethodChecked(call3071, "\u2260", [1], string3069);
      if (Grace_isTrue(opresult3073)) {
        setLineNumber(1447);    // compilenode call
        onSelf = true;
        var call3074 = callmethodChecked(this, "checkBadOperators", [0]);
        setLineNumber(1448);    // compilenode identifier
        var call3075 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call3076 = callmethodChecked(call3075, "new", [0]);
        var var_suggestion = call3076;
        setLineNumber(1449);    // compilenode string
        var string3077 = new GraceString(")");
        var call3078 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string3077, var_lastToken);
        setLineNumber(1450);    // compilenode string
        var string3079 = new GraceString("an expression beginning with a '(' must end with a ')'.");
        setLineNumber(1451);    // compilenode identifier
        var call3080 = callmethodChecked(var_lastToken, "line", [0]);
        var call3081 = callmethodChecked(var_lastToken, "size", [0]);
        var call3083 = callmethodChecked(var_lastToken, "linePos", [0]);
        var opresult3085 = callmethodChecked(call3083, "+", [1], call3081);
        setLineNumber(1450);    // compilenode identifier
        var call3086 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string3079, call3080, opresult3085, var_suggestion);
        if3068 = call3086;
      }
      setLineNumber(1454);    // compilenode identifier
      var_statementToken = var_tmpStatementToken;
      setLineNumber(1455);    // compilenode call
      onSelf = true;
      var call3087 = callmethodChecked(this, "next", [0]);
      if3038 = call3087;
    } else {
      setLineNumber(1457);    // compilenode call
      onSelf = true;
      var call3088 = callmethodChecked(this, "term", [0]);
      if3038 = call3088;
    }
    var if3089 = GraceDone;
    setLineNumber(1459);    // compilenode identifier
    var call3091 = callmethodChecked(var_values, "size", [0]);
    var opresult3093 = callmethodChecked(call3091, ">", [1], var_sz);
    if (Grace_isTrue(opresult3093)) {
      setLineNumber(1460);    // compilenode identifier
      onSelf = true;
      var call3094 = callmethodChecked(this, "dotrest", [1], var_acceptBlocks);
      setLineNumber(1461);    // compilenode identifier
      onSelf = true;
      var call3095 = callmethodChecked(this, "callrest", [1], var_acceptBlocks);
      setLineNumber(1462);    // compilenode call
      onSelf = true;
      var call3096 = callmethodChecked(this, "postfixsquare", [0]);
      setLineNumber(1463);    // compilenode call
      onSelf = true;
      var call3097 = callmethodChecked(this, "valueexpressionrest", [0]);
      if3089 = call3097;
    }
    return if3089;
  };
  func3033.paramCounts = [1];
  this.methods["expression"] = func3033;
  func3033.definitionLine = 1426;
  func3033.definitionModule = "parser";
  setLineNumber(1469);    // compilenode method
  var func3098 = function(argcv) {    // method postfixsquare
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for postfixsquare"));
    setModuleName("parser");
    var if3099 = GraceDone;
    setLineNumber(1470);    // compilenode string
    var string3100 = new GraceString("lsquare");
    onSelf = true;
    var call3101 = callmethodChecked(this, "acceptWithoutSpaces", [1], string3100);
    if (Grace_isTrue(call3101)) {
      setLineNumber(1471);    // compilenode identifier
      var var_opening = var_sym;
      setLineNumber(1472);    // compilenode call
      onSelf = true;
      var call3102 = callmethodChecked(this, "next", [0]);
      setLineNumber(1473);    // compilenode identifier
      var call3103 = callmethodChecked(var_values, "pop", [0]);
      var var_expr = call3103;
      var if3104 = GraceDone;
      setLineNumber(1474);    // compilenode block
      var block3105 = new GraceBlock(this, 1474, 0);
      block3105.real = function() {
        onSelf = true;
        var call3106 = callmethodChecked(this, "expression", [1], var_blocksOK);
        return call3106;
      };
      onSelf = true;
      var call3107 = callmethodChecked(this, "didConsume", [1], block3105);
      var call3108 = callmethodChecked(call3107, "not", [0]);
      if (Grace_isTrue(call3108)) {
        setLineNumber(1475);    // compilenode array
        var array3109 = new PrimitiveGraceList([]);
        var var_suggestions = array3109;
        setLineNumber(1476);    // compilenode identifier
        var call3110 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call3111 = callmethodChecked(call3110, "new", [0]);
        var var_suggestion = call3111;
        setLineNumber(1477);    // compilenode string
        var string3113 = new GraceString("rsquare");
        var array3112 = new PrimitiveGraceList([string3113]);
        onSelf = true;
        var call3114 = callmethodChecked(this, "findNextValidToken", [1], array3112);
        var var_nextTok = call3114;
        var if3115 = GraceDone;
        setLineNumber(1478);    // compilenode identifier
        var opresult3118 = callmethodChecked(var_nextTok, "==", [1], var_sym);
        if (Grace_isTrue(opresult3118)) {
          setLineNumber(1479);    // compilenode string
          var string3119 = new GraceString("\u00abindex\u00bb");
          var call3120 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string3119, var_lastToken);
          if3115 = call3120;
        } else {
          setLineNumber(1481);    // compilenode identifier
          var call3121 = callmethodChecked(var_nextTok, "prev", [0]);
          var string3122 = new GraceString("\u00abindex\u00bb");
          var call3123 = callmethodChecked(var_suggestion, "replaceTokenRange()leading()trailing()with", [2, 1, 1, 1], var_sym, call3121, GraceTrue, GraceFalse, string3122);
          if3115 = call3123;
        }
        setLineNumber(1483);    // compilenode identifier
        var call3124 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
        var if3125 = GraceDone;
        setLineNumber(1484);    // compilenode string
        var string3126 = new GraceString("rsquare");
        var call3128 = callmethodChecked(var_nextTok, "kind", [0]);
        var opresult3130 = callmethodChecked(call3128, "==", [1], string3126);
        if (Grace_isTrue(opresult3130)) {
          setLineNumber(1485);    // compilenode identifier
          var call3131 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call3132 = callmethodChecked(call3131, "new", [0]);
          var_suggestion = call3132;
          setLineNumber(1486);    // compilenode identifier
          var call3133 = callmethodChecked(var_suggestion, "deleteTokenRange()leading()trailing", [2, 1, 1], var_lastToken, var_nextTok, GraceTrue, GraceFalse);
          setLineNumber(1487);    // compilenode identifier
          var call3134 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
          if3125 = call3134;
        }
        setLineNumber(1489);    // compilenode string
        var string3135 = new GraceString("a '[' in an expression must be followed by another expression and a ']'.");
        setLineNumber(1490);    // compilenode identifier
        var call3136 = callmethodChecked(var_sym, "line", [0]);
        var call3137 = callmethodChecked(var_sym, "linePos", [0]);
        setLineNumber(1489);    // compilenode identifier
        var call3138 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestions", [1, 2, 1], string3135, call3136, call3137, var_suggestions);
        if3104 = call3138;
      }
      var if3139 = GraceDone;
      setLineNumber(1492);    // compilenode string
      var string3140 = new GraceString("rsquare");
      var call3142 = callmethodChecked(var_sym, "kind", [0]);
      var opresult3144 = callmethodChecked(call3142, "\u2260", [1], string3140);
      if (Grace_isTrue(opresult3144)) {
        setLineNumber(1493);    // compilenode identifier
        var call3145 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call3146 = callmethodChecked(call3145, "new", [0]);
        var var_suggestion = call3146;
        setLineNumber(1494);    // compilenode string
        var string3147 = new GraceString("]");
        var call3148 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string3147, var_lastToken);
        setLineNumber(1495);    // compilenode string
        var string3149 = new GraceString("a '[' in an expression must be followed by another expression and a ']'.");
        setLineNumber(1496);    // compilenode identifier
        var call3150 = callmethodChecked(var_lastToken, "line", [0]);
        var call3151 = callmethodChecked(var_lastToken, "size", [0]);
        var call3153 = callmethodChecked(var_lastToken, "linePos", [0]);
        var opresult3155 = callmethodChecked(call3153, "+", [1], call3151);
        setLineNumber(1495);    // compilenode identifier
        var call3156 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string3149, call3150, opresult3155, var_suggestion);
        if3139 = call3156;
      }
      setLineNumber(1499);    // compilenode string
      var string3157 = new GraceString("For a Lineup, add a space.  For an indexing operation, use `at(_)` or `at(_)put(_)`.");
      setLineNumber(1498);    // compilenode string
      var string3159 = new GraceString("'[ ... ]' without preceeding space is no longer part of Grace. ");
      var opresult3161 = callmethodChecked(string3159, "++", [1], string3157);
      setLineNumber(1500);    // compilenode identifier
      var call3162 = callmethodChecked(var_opening, "line", [0]);
      var call3163 = callmethodChecked(var_opening, "linePos", [0]);
      setLineNumber(1498);    // compilenode identifier
      var call3164 = callmethodChecked(var_errormessages, "syntaxError()atPosition", [1, 2], opresult3161, call3162, call3163);
      if3099 = call3164;
    }
    return if3099;
  };
  func3098.paramCounts = [0];
  this.methods["postfixsquare"] = func3098;
  func3098.definitionLine = 1469;
  func3098.definitionModule = "parser";
  setLineNumber(1507);    // compilenode method
  var func3165 = function(argcv) {    // method oprec(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for oprec(1)"));
    setModuleName("parser");
    var if3166 = GraceDone;
    setLineNumber(1508);    // compilenode string
    var string3167 = new GraceString("*");
    var opresult3170 = callmethodChecked(var_o, "==", [1], string3167);
    if (Grace_isTrue(opresult3170)) {
      setLineNumber(1509);    // compilenode num
      return new GraceNum(10);
    } else {
      var if3171 = GraceDone;
      setLineNumber(1510);    // compilenode string
      var string3172 = new GraceString("/");
      var opresult3175 = callmethodChecked(var_o, "==", [1], string3172);
      if (Grace_isTrue(opresult3175)) {
        setLineNumber(1511);    // compilenode num
        return new GraceNum(10);
      }
      if3166 = if3171;
    }
    setLineNumber(1513);    // compilenode num
    return new GraceNum(5);
  };
  func3165.paramCounts = [1];
  this.methods["oprec"] = func3165;
  func3165.definitionLine = 1507;
  func3165.definitionModule = "parser";
  setLineNumber(1517);    // compilenode method
  var func3176 = function(argcv) {    // method toprec(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_ops = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for toprec(1)"));
    setModuleName("parser");
    var if3177 = GraceDone;
    setLineNumber(1518);    // compilenode identifier
    var call3179 = callmethodChecked(var_ops, "size", [0]);
    var opresult3181 = callmethodChecked(call3179, ">", [1], new GraceNum(0));
    if (Grace_isTrue(opresult3181)) {
      setLineNumber(1519);    // compilenode identifier
      var call3182 = callmethodChecked(var_ops, "last", [0]);
      var var_o = call3182;
      setLineNumber(1520);    // compilenode identifier
      onSelf = true;
      var call3183 = callmethodChecked(this, "oprec", [1], var_o);
      return call3183;
    }
    setLineNumber(1522);    // compilenode num
    return new GraceNum(0);
  };
  func3176.paramCounts = [1];
  this.methods["toprec"] = func3176;
  func3176.definitionLine = 1517;
  func3176.definitionModule = "parser";
  setLineNumber(1526);    // compilenode method
  var func3184 = function(argcv) {    // method typeexpressionrest
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for typeexpressionrest"));
    setModuleName("parser");
    var if3185 = GraceDone;
    setLineNumber(1527);    // compilenode string
    var string3186 = new GraceString("op");
    onSelf = true;
    var call3187 = callmethodChecked(this, "acceptSameLine", [1], string3186);
    if (Grace_isTrue(call3187)) {
      setLineNumber(1528);    // compilenode string
      var string3188 = new GraceString("type expression");
      var block3189 = new GraceBlock(this, 1528, 0);
      block3189.real = function() {
        onSelf = true;
        var call3190 = callmethodChecked(this, "typeexpression", [0]);
        return call3190;
      };
      onSelf = true;
      var call3191 = callmethodChecked(this, "expressionrest()recursingWith()blocks", [1, 1, 1], string3188, block3189, var_noBlocks);
      if3185 = call3191;
    }
    return if3185;
  };
  func3184.paramCounts = [0];
  this.methods["typeexpressionrest"] = func3184;
  func3184.definitionLine = 1526;
  func3184.definitionModule = "parser";
  setLineNumber(1532);    // compilenode method
  var func3192 = function(argcv) {    // method valueexpressionrest
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for valueexpressionrest"));
    setModuleName("parser");
    var if3193 = GraceDone;
    setLineNumber(1533);    // compilenode string
    var string3194 = new GraceString("op");
    onSelf = true;
    var call3195 = callmethodChecked(this, "accept", [1], string3194);
    if (Grace_isTrue(call3195)) {
      setLineNumber(1534);    // compilenode string
      var string3196 = new GraceString("expression");
      var block3197 = new GraceBlock(this, 1534, 0);
      block3197.real = function() {
        onSelf = true;
        var call3198 = callmethodChecked(this, "expression", [1], var_blocksOK);
        return call3198;
      };
      onSelf = true;
      var call3199 = callmethodChecked(this, "expressionrest()recursingWith()blocks", [1, 1, 1], string3196, block3197, var_blocksOK);
      if3193 = call3199;
    }
    return if3193;
  };
  func3192.paramCounts = [0];
  this.methods["valueexpressionrest"] = func3192;
  func3192.definitionLine = 1532;
  func3192.definitionModule = "parser";
  setLineNumber(1538);    // compilenode method
  var func3200 = function(argcv) {    // method expressionrest(1)recursingWith(1)blocks(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_name = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for expressionrest (arg list 1) of expressionrest(1)recursingWith(1)blocks(1)"));
    var var_recurse = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for recursingWith (arg list 2) of expressionrest(1)recursingWith(1)blocks(1)"));
    var var_acceptBlocks = arguments[curarg];
    curarg++;
    if (argcv[2] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for blocks (arg list 3) of expressionrest(1)recursingWith(1)blocks(1)"));
    setModuleName("parser");
    setLineNumber(1544);    // compilenode array
    var array3201 = new PrimitiveGraceList([]);
    var var_terms = array3201;
    setLineNumber(1545);    // compilenode array
    var array3202 = new PrimitiveGraceList([]);
    var var_ops = array3202;
    setLineNumber(1546);    // compilenode vardec
    var var_o;
    setLineNumber(1547);    // compilenode vardec
    var var_o2;
    setLineNumber(1548);    // compilenode vardec
    var var_tmp2;
    setLineNumber(1549);    // compilenode identifier
    var call3203 = callmethodChecked(var_values, "pop", [0]);
    var var_tmp = call3203;
    setLineNumber(1550);    // compilenode identifier
    var call3204 = callmethodChecked(var_terms, "push", [1], var_tmp);
    setLineNumber(1551);    // compilenode vardec
    var var_prec;
    setLineNumber(1552);    // compilenode identifier
    var var_allarith = GraceTrue;
    setLineNumber(1553);    // compilenode num
    var var_opcount = new GraceNum(0);
    setLineNumber(1554);    // compilenode string
    var string3205 = new GraceString("");
    var var_opdtype = string3205;
    setLineNumber(1555);    // compilenode block
    var block3206 = new GraceBlock(this, 1555, 0);
    block3206.real = function() {
      setLineNumber(1556);    // compilenode block
      var block3207 = new GraceBlock(this, 1556, 0);
      block3207.real = function() {
        var string3208 = new GraceString("=");
        var call3210 = callmethodChecked(var_sym, "value", [0]);
        var opresult3212 = callmethodChecked(call3210, "\u2260", [1], string3208);
        return opresult3212;
      };
      setLineNumber(1555);    // compilenode string
      var string3214 = new GraceString("op");
      onSelf = true;
      var call3215 = callmethodChecked(this, "accept()onLineOfLastOr", [1, 1], string3214, var_statementToken);
      var opresult3217 = callmethodChecked(call3215, "&&", [1], block3207);
      return opresult3217;
    };
    setLineNumber(1556);    // compilenode block
    var block3218 = new GraceBlock(this, 1556, 0);
    block3218.real = function() {
      setLineNumber(1557);    // compilenode identifier
      var opresult3221 = callmethodChecked(var_opcount, "+", [1], new GraceNum(1));
      var_opcount = opresult3221;
      setLineNumber(1558);    // compilenode identifier
      var call3222 = callmethodChecked(var_sym, "value", [0]);
      var_o = call3222;
      setLineNumber(1559);    // compilenode call
      onSelf = true;
      var call3223 = callmethodChecked(this, "next", [0]);
      setLineNumber(1560);    // compilenode identifier
      onSelf = true;
      var call3224 = callmethodChecked(this, "oprec", [1], var_o);
      var_prec = call3224;
      var if3225 = GraceDone;
      setLineNumber(1561);    // compilenode string
      var string3226 = new GraceString("-");
      var opresult3229 = callmethodChecked(var_o, "\u2260", [1], string3226);
      var string3231 = new GraceString("+");
      var opresult3234 = callmethodChecked(var_o, "\u2260", [1], string3231);
      var string3236 = new GraceString("/");
      var opresult3239 = callmethodChecked(var_o, "\u2260", [1], string3236);
      var string3241 = new GraceString("*");
      var opresult3244 = callmethodChecked(var_o, "\u2260", [1], string3241);
      var opresult3246 = callmethodChecked(opresult3244, "&&", [1], opresult3239);
      var opresult3248 = callmethodChecked(opresult3246, "&&", [1], opresult3234);
      var opresult3250 = callmethodChecked(opresult3248, "&&", [1], opresult3229);
      if (Grace_isTrue(opresult3250)) {
        setLineNumber(1562);    // compilenode identifier
        var_allarith = GraceFalse;
        if3225 = GraceDone;
      }
      var if3251 = GraceDone;
      setLineNumber(1564);    // compilenode identifier
      var call3252 = callmethodChecked(var_allarith, "not", [0]);
      var opresult3256 = callmethodChecked(var_opdtype, "\u2260", [1], var_o);
      var string3258 = new GraceString("");
      var opresult3261 = callmethodChecked(var_opdtype, "\u2260", [1], string3258);
      var opresult3263 = callmethodChecked(opresult3261, "&&", [1], opresult3256);
      var opresult3265 = callmethodChecked(opresult3263, "&&", [1], call3252);
      if (Grace_isTrue(opresult3265)) {
        setLineNumber(1568);    // compilenode array
        var array3266 = new PrimitiveGraceList([]);
        var var_suggestions = array3266;
        setLineNumber(1569);    // compilenode identifier
        var call3267 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call3268 = callmethodChecked(call3267, "new", [0]);
        var var_suggestion = call3268;
        setLineNumber(1570);    // compilenode string
        var string3269 = new GraceString(")");
        var call3270 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string3269, var_sym);
        setLineNumber(1571);    // compilenode string
        var string3271 = new GraceString("(");
        var call3272 = callmethodChecked(var_lastToken, "prev", [0]);
        var call3273 = callmethodChecked(var_suggestion, "insert()beforeToken", [1, 1], string3271, call3272);
        setLineNumber(1572);    // compilenode identifier
        var call3274 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
        setLineNumber(1573);    // compilenode identifier
        var call3275 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call3276 = callmethodChecked(call3275, "new", [0]);
        var_suggestion = call3276;
        setLineNumber(1574);    // compilenode string
        var string3277 = new GraceString(")");
        var call3278 = callmethodChecked(var_lastToken, "prev", [0]);
        var call3279 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string3277, call3278);
        setLineNumber(1575);    // compilenode string
        var string3280 = new GraceString("(");
        var call3281 = callmethodChecked(var_lastToken, "prev", [0]);
        var call3282 = callmethodChecked(call3281, "prev", [0]);
        var call3283 = callmethodChecked(call3282, "prev", [0]);
        var call3284 = callmethodChecked(var_suggestion, "insert()beforeToken", [1, 1], string3280, call3283);
        setLineNumber(1576);    // compilenode identifier
        var call3285 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
        setLineNumber(1577);    // compilenode string
        var string3286 = new GraceString("an expression containing both arithmetic and non-arithmetic operators requires parentheses.");
        setLineNumber(1578);    // compilenode identifier
        var call3287 = callmethodChecked(var_lastToken, "prev", [0]);
        var call3288 = callmethodChecked(call3287, "line", [0]);
        var call3289 = callmethodChecked(var_lastToken, "prev", [0]);
        var call3290 = callmethodChecked(call3289, "linePos", [0]);
        setLineNumber(1577);    // compilenode identifier
        var call3291 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestions", [1, 2, 1], string3286, call3288, call3290, var_suggestions);
        if3251 = call3291;
      }
      setLineNumber(1580);    // compilenode identifier
      var_opdtype = var_o;
      setLineNumber(1581);    // compilenode block
      var block3292 = new GraceBlock(this, 1581, 0);
      block3292.real = function() {
        onSelf = true;
        var call3293 = callmethodChecked(this, "toprec", [1], var_ops);
        var opresult3296 = callmethodChecked(var_prec, "\u2264", [1], call3293);
        var call3299 = callmethodChecked(var_ops, "size", [0]);
        var opresult3301 = callmethodChecked(call3299, ">", [1], new GraceNum(0));
        var opresult3303 = callmethodChecked(opresult3301, "&&", [1], opresult3296);
        return opresult3303;
      };
      var block3304 = new GraceBlock(this, 1581, 0);
      block3304.real = function() {
        setLineNumber(1587);    // compilenode identifier
        var call3305 = callmethodChecked(var_ops, "pop", [0]);
        var_o2 = call3305;
        setLineNumber(1588);    // compilenode identifier
        var call3306 = callmethodChecked(var_terms, "pop", [0]);
        var_tmp2 = call3306;
        setLineNumber(1589);    // compilenode identifier
        var call3307 = callmethodChecked(var_terms, "pop", [0]);
        var_tmp = call3307;
        setLineNumber(1590);    // compilenode identifier
        var call3308 = callmethodChecked(var_tmp, "line", [0]);
        var call3309 = callmethodChecked(var_tmp, "linePos", [0]);
        var call3310 = callmethodChecked(var_util, "setPosition", [2], call3308, call3309);
        setLineNumber(1591);    // compilenode identifier
        var call3311 = callmethodChecked(var_ast, "opNode", [0]);
        var call3312 = callmethodChecked(call3311, "new", [3], var_o2, var_tmp, var_tmp2);
        var_tmp = call3312;
        setLineNumber(1592);    // compilenode identifier
        var call3313 = callmethodChecked(var_terms, "push", [1], var_tmp);
        return call3313;
      };
      var call3314 = callmethodChecked(var_prelude, "while()do", [1, 1], block3292, block3304);
      setLineNumber(1594);    // compilenode identifier
      var call3315 = callmethodChecked(var_ops, "push", [1], var_o);
      var if3316 = GraceDone;
      setLineNumber(1595);    // compilenode string
      var string3317 = new GraceString("lparen");
      onSelf = true;
      var call3318 = callmethodChecked(this, "accept", [1], string3317);
      if (Grace_isTrue(call3318)) {
        setLineNumber(1602);    // compilenode call
        onSelf = true;
        var call3319 = callmethodChecked(this, "next", [0]);
        var if3320 = GraceDone;
        setLineNumber(1603);    // compilenode identifier
        onSelf = true;
        var call3321 = callmethodChecked(this, "didConsume", [1], var_recurse);
        var call3322 = callmethodChecked(call3321, "not", [0]);
        if (Grace_isTrue(call3322)) {
          setLineNumber(1604);    // compilenode identifier
          var call3323 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call3324 = callmethodChecked(call3323, "new", [0]);
          var var_suggestion = call3324;
          setLineNumber(1605);    // compilenode string
          var string3326 = new GraceString("rparen");
          var array3325 = new PrimitiveGraceList([string3326]);
          onSelf = true;
          var call3327 = callmethodChecked(this, "findNextValidToken", [1], array3325);
          var var_nextTok = call3327;
          var if3328 = GraceDone;
          setLineNumber(1606);    // compilenode identifier
          var opresult3331 = callmethodChecked(var_nextTok, "==", [1], var_sym);
          if (Grace_isTrue(opresult3331)) {
            setLineNumber(1607);    // compilenode string
            var string3332 = new GraceString("\u00bb");
            var string3335 = new GraceString("\u00ab");
            var opresult3337 = callmethodChecked(string3335, "++", [1], var_name);
            var opresult3339 = callmethodChecked(opresult3337, "++", [1], string3332);
            var call3340 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], opresult3339, var_lastToken);
            if3328 = call3340;
          } else {
            setLineNumber(1609);    // compilenode identifier
            var call3341 = callmethodChecked(var_nextTok, "prev", [0]);
            var string3342 = new GraceString("\u00bb");
            var string3345 = new GraceString("\u00ab");
            var opresult3347 = callmethodChecked(string3345, "++", [1], var_name);
            var opresult3349 = callmethodChecked(opresult3347, "++", [1], string3342);
            var call3350 = callmethodChecked(var_suggestion, "replaceTokenRange()leading()trailing()with", [2, 1, 1, 1], var_sym, call3341, GraceTrue, GraceFalse, opresult3349);
            if3328 = call3350;
          }
          setLineNumber(1611);    // compilenode string
          var string3351 = new GraceString(".");
          var string3354 = new GraceString("parentheses must contain a valid ");
          var opresult3356 = callmethodChecked(string3354, "++", [1], var_name);
          var opresult3358 = callmethodChecked(opresult3356, "++", [1], string3351);
          setLineNumber(1612);    // compilenode identifier
          var call3359 = callmethodChecked(var_sym, "line", [0]);
          var call3360 = callmethodChecked(var_sym, "linePos", [0]);
          setLineNumber(1611);    // compilenode identifier
          var call3361 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], opresult3358, call3359, call3360, var_suggestion);
          if3320 = call3361;
        }
        var if3362 = GraceDone;
        setLineNumber(1614);    // compilenode string
        var string3363 = new GraceString("rparen");
        var call3365 = callmethodChecked(var_sym, "kind", [0]);
        var opresult3367 = callmethodChecked(call3365, "\u2260", [1], string3363);
        if (Grace_isTrue(opresult3367)) {
          setLineNumber(1615);    // compilenode call
          onSelf = true;
          var call3368 = callmethodChecked(this, "checkBadOperators", [0]);
          setLineNumber(1616);    // compilenode identifier
          var call3369 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call3370 = callmethodChecked(call3369, "new", [0]);
          var var_suggestion = call3370;
          setLineNumber(1617);    // compilenode string
          var string3371 = new GraceString(")");
          var call3372 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string3371, var_lastToken);
          setLineNumber(1618);    // compilenode string
          var string3373 = new GraceString("an expression beginning with a '(' must end with a ')'.");
          setLineNumber(1619);    // compilenode identifier
          var call3374 = callmethodChecked(var_lastToken, "line", [0]);
          var call3375 = callmethodChecked(var_lastToken, "size", [0]);
          var call3377 = callmethodChecked(var_lastToken, "linePos", [0]);
          var opresult3379 = callmethodChecked(call3377, "+", [1], call3375);
          setLineNumber(1618);    // compilenode identifier
          var call3380 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string3373, call3374, opresult3379, var_suggestion);
          if3362 = call3380;
        }
        setLineNumber(1621);    // compilenode call
        onSelf = true;
        var call3381 = callmethodChecked(this, "next", [0]);
        if3316 = call3381;
      } else {
        var if3382 = GraceDone;
        setLineNumber(1623);    // compilenode call
        onSelf = true;
        var call3383 = callmethodChecked(this, "tokenOnSameLine", [0]);
        var call3384 = callmethodChecked(call3383, "prefix!", [0]);
        if (Grace_isTrue(call3384)) {
          setLineNumber(1624);    // compilenode array
          var array3385 = new PrimitiveGraceList([]);
          var var_suggestions = array3385;
          setLineNumber(1625);    // compilenode identifier
          var call3386 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call3387 = callmethodChecked(call3386, "new", [0]);
          var var_suggestion = call3387;
          setLineNumber(1626);    // compilenode identifier
          var call3388 = callmethodChecked(var_suggestion, "deleteToken()leading()trailing", [1, 1, 1], var_lastToken, GraceTrue, GraceFalse);
          setLineNumber(1627);    // compilenode identifier
          var call3389 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
          setLineNumber(1628);    // compilenode identifier
          var call3390 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call3391 = callmethodChecked(call3390, "new", [0]);
          var_suggestion = call3391;
          setLineNumber(1629);    // compilenode string
          var string3392 = new GraceString("\u00bb");
          var string3395 = new GraceString(" \u00ab");
          var opresult3397 = callmethodChecked(string3395, "++", [1], var_name);
          var opresult3399 = callmethodChecked(opresult3397, "++", [1], string3392);
          var call3400 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], opresult3399, var_lastToken);
          setLineNumber(1630);    // compilenode identifier
          var call3401 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
          setLineNumber(1631);    // compilenode identifier
          var call3402 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call3403 = callmethodChecked(call3402, "new", [0]);
          var_suggestion = call3403;
          setLineNumber(1632);    // compilenode identifier
          var call3404 = callmethodChecked(var_sym, "line", [0]);
          var call3405 = callmethodChecked(var_util, "lines", [0]);
          var call3406 = callmethodChecked(call3405, "at", [1], call3404);
          var string3408 = new GraceString(" ");
          var opresult3410 = callmethodChecked(string3408, "++", [1], call3406);
          var call3411 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], opresult3410, var_lastToken);
          setLineNumber(1633);    // compilenode identifier
          var call3412 = callmethodChecked(var_sym, "line", [0]);
          var call3413 = callmethodChecked(var_suggestion, "deleteLine", [1], call3412);
          setLineNumber(1634);    // compilenode identifier
          var call3414 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
          setLineNumber(1635);    // compilenode string
          var string3415 = new GraceString("'. This is often caused by a new line in the middle of an expression.");
          var call3417 = callmethodChecked(var_lastToken, "value", [0]);
          var string3419 = new GraceString("a valid expression must follow '");
          var opresult3421 = callmethodChecked(string3419, "++", [1], call3417);
          var opresult3423 = callmethodChecked(opresult3421, "++", [1], string3415);
          setLineNumber(1636);    // compilenode identifier
          var call3424 = callmethodChecked(var_lastToken, "line", [0]);
          var call3425 = callmethodChecked(var_lastToken, "size", [0]);
          var call3427 = callmethodChecked(var_lastToken, "linePos", [0]);
          var opresult3429 = callmethodChecked(call3427, "+", [1], call3425);
          setLineNumber(1635);    // compilenode identifier
          var call3430 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestions", [1, 2, 1], opresult3423, call3424, opresult3429, var_suggestions);
          if3382 = call3430;
        }
        var if3431 = GraceDone;
        setLineNumber(1638);    // compilenode block
        var block3432 = new GraceBlock(this, 1638, 0);
        block3432.real = function() {
          onSelf = true;
          var call3433 = callmethodChecked(this, "term", [0]);
          return call3433;
        };
        onSelf = true;
        var call3434 = callmethodChecked(this, "didConsume", [1], block3432);
        var call3435 = callmethodChecked(call3434, "not", [0]);
        if (Grace_isTrue(call3435)) {
          setLineNumber(1639);    // compilenode array
          var array3436 = new PrimitiveGraceList([]);
          var var_suggestions = array3436;
          setLineNumber(1640);    // compilenode identifier
          var call3437 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call3438 = callmethodChecked(call3437, "new", [0]);
          var var_suggestion = call3438;
          setLineNumber(1641);    // compilenode string
          var string3440 = new GraceString("comma");
          var string3441 = new GraceString("rparen");
          var string3442 = new GraceString("rsquare");
          var string3443 = new GraceString("rbrace");
          var array3439 = new PrimitiveGraceList([string3440, string3441, string3442, string3443]);
          onSelf = true;
          var call3444 = callmethodChecked(this, "findNextValidToken", [1], array3439);
          var var_nextTok = call3444;
          var if3445 = GraceDone;
          setLineNumber(1642);    // compilenode identifier
          var opresult3448 = callmethodChecked(var_nextTok, "==", [1], var_sym);
          if (Grace_isTrue(opresult3448)) {
            setLineNumber(1643);    // compilenode string
            var string3449 = new GraceString("\u00bb");
            var string3452 = new GraceString(" \u00ab");
            var opresult3454 = callmethodChecked(string3452, "++", [1], var_name);
            var opresult3456 = callmethodChecked(opresult3454, "++", [1], string3449);
            var call3457 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], opresult3456, var_lastToken);
            if3445 = call3457;
          } else {
            setLineNumber(1645);    // compilenode identifier
            var call3458 = callmethodChecked(var_nextTok, "prev", [0]);
            var string3459 = new GraceString("\u00bb");
            var string3462 = new GraceString(" \u00ab");
            var opresult3464 = callmethodChecked(string3462, "++", [1], var_name);
            var opresult3466 = callmethodChecked(opresult3464, "++", [1], string3459);
            var call3467 = callmethodChecked(var_suggestion, "replaceTokenRange()leading()trailing()with", [2, 1, 1, 1], var_sym, call3458, GraceTrue, GraceFalse, opresult3466);
            if3445 = call3467;
          }
          setLineNumber(1647);    // compilenode identifier
          var call3468 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
          setLineNumber(1648);    // compilenode identifier
          var call3469 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call3470 = callmethodChecked(call3469, "new", [0]);
          var_suggestion = call3470;
          setLineNumber(1649);    // compilenode identifier
          var call3471 = callmethodChecked(var_nextTok, "prev", [0]);
          var call3472 = callmethodChecked(var_suggestion, "deleteTokenRange()leading()trailing", [2, 1, 1], var_lastToken, call3471, GraceTrue, GraceFalse);
          setLineNumber(1650);    // compilenode identifier
          var call3473 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
          setLineNumber(1651);    // compilenode string
          var string3474 = new GraceString("'. This is often caused by a new line in the middle of an expression.");
          var call3476 = callmethodChecked(var_lastToken, "value", [0]);
          var string3478 = new GraceString(" must follow '");
          var string3481 = new GraceString("a valid ");
          var opresult3483 = callmethodChecked(string3481, "++", [1], var_name);
          var opresult3485 = callmethodChecked(opresult3483, "++", [1], string3478);
          var opresult3487 = callmethodChecked(opresult3485, "++", [1], call3476);
          var opresult3489 = callmethodChecked(opresult3487, "++", [1], string3474);
          setLineNumber(1652);    // compilenode identifier
          var call3490 = callmethodChecked(var_lastToken, "line", [0]);
          var call3491 = callmethodChecked(var_lastToken, "size", [0]);
          var call3493 = callmethodChecked(var_lastToken, "linePos", [0]);
          var opresult3495 = callmethodChecked(call3493, "+", [1], call3491);
          setLineNumber(1651);    // compilenode identifier
          var call3496 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestions", [1, 2, 1], opresult3489, call3490, opresult3495, var_suggestions);
          if3431 = call3496;
        }
        if3316 = if3431;
      }
      setLineNumber(1660);    // compilenode identifier
      onSelf = true;
      var call3497 = callmethodChecked(this, "dotrest", [1], var_acceptBlocks);
      setLineNumber(1661);    // compilenode identifier
      onSelf = true;
      var call3498 = callmethodChecked(this, "callrest", [1], var_acceptBlocks);
      setLineNumber(1662);    // compilenode call
      onSelf = true;
      var call3499 = callmethodChecked(this, "postfixsquare", [0]);
      setLineNumber(1663);    // compilenode identifier
      var call3500 = callmethodChecked(var_values, "pop", [0]);
      var_tmp = call3500;
      setLineNumber(1664);    // compilenode identifier
      var call3501 = callmethodChecked(var_terms, "push", [1], var_tmp);
      return call3501;
    };
    var call3502 = callmethodChecked(var_prelude, "while()do", [1, 1], block3206, block3218);
    setLineNumber(1666);    // compilenode block
    var block3503 = new GraceBlock(this, 1666, 0);
    block3503.real = function() {
      var call3505 = callmethodChecked(var_ops, "size", [0]);
      var opresult3507 = callmethodChecked(call3505, ">", [1], new GraceNum(0));
      return opresult3507;
    };
    var block3508 = new GraceBlock(this, 1666, 0);
    block3508.real = function() {
      setLineNumber(1668);    // compilenode identifier
      var call3509 = callmethodChecked(var_ops, "pop", [0]);
      var_o = call3509;
      setLineNumber(1669);    // compilenode identifier
      var call3510 = callmethodChecked(var_terms, "pop", [0]);
      var_tmp2 = call3510;
      setLineNumber(1670);    // compilenode identifier
      var call3511 = callmethodChecked(var_terms, "pop", [0]);
      var_tmp = call3511;
      setLineNumber(1671);    // compilenode identifier
      var call3512 = callmethodChecked(var_tmp, "line", [0]);
      var call3513 = callmethodChecked(var_tmp, "linePos", [0]);
      var call3514 = callmethodChecked(var_util, "setPosition", [2], call3512, call3513);
      setLineNumber(1672);    // compilenode identifier
      var call3515 = callmethodChecked(var_ast, "opNode", [0]);
      var call3516 = callmethodChecked(call3515, "new", [3], var_o, var_tmp, var_tmp2);
      var_tmp = call3516;
      setLineNumber(1673);    // compilenode identifier
      var call3517 = callmethodChecked(var_terms, "push", [1], var_tmp);
      return call3517;
    };
    var call3518 = callmethodChecked(var_prelude, "while()do", [1, 1], block3503, block3508);
    setLineNumber(1675);    // compilenode identifier
    var call3519 = callmethodChecked(var_terms, "pop", [0]);
    var_tmp = call3519;
    setLineNumber(1676);    // compilenode identifier
    var call3520 = callmethodChecked(var_values, "push", [1], var_tmp);
    var if3521 = GraceDone;
    setLineNumber(1677);    // compilenode identifier
    var call3523 = callmethodChecked(var_terms, "size", [0]);
    var opresult3525 = callmethodChecked(call3523, ">", [1], new GraceNum(0));
    if (Grace_isTrue(opresult3525)) {
      setLineNumber(1678);    // compilenode string
      var string3526 = new GraceString("values left on term stack.");
      var call3527 = callmethodChecked(var_sym, "line", [0]);
      var call3528 = callmethodChecked(var_sym, "linePos", [0]);
      var call3529 = callmethodChecked(var_errormessages, "syntaxError()atPosition", [1, 2], string3526, call3527, call3528);
      if3521 = call3529;
    }
    return if3521;
  };
  func3200.paramCounts = [1, 1, 1];
  this.methods["expressionrest()recursingWith()blocks"] = func3200;
  func3200.definitionLine = 1538;
  func3200.definitionModule = "parser";
  setLineNumber(1685);    // compilenode method
  var func3530 = function(argcv) {    // method dotrest(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_acceptBlocks = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for dotrest(1)"));
    setModuleName("parser");
    var if3531 = GraceDone;
    setLineNumber(1686);    // compilenode string
    var string3532 = new GraceString("dot");
    onSelf = true;
    var call3533 = callmethodChecked(this, "acceptSameLine", [1], string3532);
    if (Grace_isTrue(call3533)) {
      setLineNumber(1687);    // compilenode identifier
      var call3534 = callmethodChecked(var_sym, "line", [0]);
      var call3535 = callmethodChecked(var_sym, "linePos", [0]);
      var call3536 = callmethodChecked(var_util, "setPosition", [2], call3534, call3535);
      setLineNumber(1688);    // compilenode identifier
      var call3537 = callmethodChecked(var_values, "pop", [0]);
      var var_lookuptarget = call3537;
      setLineNumber(1689);    // compilenode call
      onSelf = true;
      var call3538 = callmethodChecked(this, "next", [0]);
      var if3539 = GraceDone;
      setLineNumber(1690);    // compilenode string
      var string3540 = new GraceString("identifier");
      onSelf = true;
      var call3541 = callmethodChecked(this, "accept", [1], string3540);
      if (Grace_isTrue(call3541)) {
        setLineNumber(1691);    // compilenode identifier
        var call3542 = callmethodChecked(var_sym, "line", [0]);
        var call3543 = callmethodChecked(var_sym, "linePos", [0]);
        var call3544 = callmethodChecked(var_util, "setPosition", [2], call3542, call3543);
        setLineNumber(1692);    // compilenode identifier
        var call3545 = callmethodChecked(var_sym, "value", [0]);
        var call3546 = callmethodChecked(var_ast, "memberNode", [0]);
        var call3547 = callmethodChecked(call3546, "new", [2], call3545, var_lookuptarget);
        var var_dro = call3547;
        setLineNumber(1693);    // compilenode identifier
        var call3548 = callmethodChecked(var_values, "push", [1], var_dro);
        setLineNumber(1694);    // compilenode call
        onSelf = true;
        var call3549 = callmethodChecked(this, "next", [0]);
        var if3550 = GraceDone;
        setLineNumber(1695);    // compilenode string
        var string3551 = new GraceString("dot");
        onSelf = true;
        var call3552 = callmethodChecked(this, "accept", [1], string3551);
        if (Grace_isTrue(call3552)) {
          setLineNumber(1696);    // compilenode identifier
          onSelf = true;
          var call3553 = callmethodChecked(this, "dotrest", [1], var_acceptBlocks);
          if3550 = call3553;
        } else {
          var if3554 = GraceDone;
          setLineNumber(1699);    // compilenode string
          var string3555 = new GraceString("lgeneric");
          onSelf = true;
          var call3556 = callmethodChecked(this, "accept", [1], string3555);
          setLineNumber(1698);    // compilenode string
          var string3558 = new GraceString("lsquare");
          onSelf = true;
          var call3559 = callmethodChecked(this, "accept", [1], string3558);
          var string3561 = new GraceString("string");
          onSelf = true;
          var call3562 = callmethodChecked(this, "accept", [1], string3561);
          var string3564 = new GraceString("num");
          onSelf = true;
          var call3565 = callmethodChecked(this, "accept", [1], string3564);
          setLineNumber(1697);    // compilenode string
          var string3567 = new GraceString("lbrace");
          onSelf = true;
          var call3568 = callmethodChecked(this, "accept", [1], string3567);
          var opresult3571 = callmethodChecked(var_acceptBlocks, "&&", [1], call3568);
          var string3573 = new GraceString("lparen");
          onSelf = true;
          var call3574 = callmethodChecked(this, "accept", [1], string3573);
          var opresult3576 = callmethodChecked(call3574, "||", [1], opresult3571);
          var opresult3578 = callmethodChecked(opresult3576, "||", [1], call3565);
          var opresult3580 = callmethodChecked(opresult3578, "||", [1], call3562);
          var opresult3582 = callmethodChecked(opresult3580, "||", [1], call3559);
          var opresult3584 = callmethodChecked(opresult3582, "||", [1], call3556);
          if (Grace_isTrue(opresult3584)) {
            setLineNumber(1700);    // compilenode identifier
            onSelf = true;
            var call3585 = callmethodChecked(this, "callrest", [1], var_acceptBlocks);
            if3554 = call3585;
          }
          if3550 = if3554;
        }
        if3539 = if3550;
      } else {
        setLineNumber(1703);    // compilenode array
        var array3586 = new PrimitiveGraceList([]);
        var var_suggestions = array3586;
        setLineNumber(1704);    // compilenode identifier
        var call3587 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call3588 = callmethodChecked(call3587, "new", [0]);
        var var_suggestion = call3588;
        setLineNumber(1705);    // compilenode identifier
        var call3589 = callmethodChecked(var_suggestion, "deleteToken", [1], var_lastToken);
        setLineNumber(1706);    // compilenode identifier
        var call3590 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
        setLineNumber(1707);    // compilenode identifier
        var call3591 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call3592 = callmethodChecked(call3591, "new", [0]);
        var_suggestion = call3592;
        setLineNumber(1708);    // compilenode string
        var string3593 = new GraceString("\u00abmethod name\u00bb");
        var call3594 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string3593, var_lastToken);
        setLineNumber(1709);    // compilenode identifier
        var call3595 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
        setLineNumber(1710);    // compilenode string
        var string3596 = new GraceString("a field or method name must follow a '.'.");
        setLineNumber(1711);    // compilenode identifier
        var call3597 = callmethodChecked(var_sym, "line", [0]);
        var call3598 = callmethodChecked(var_sym, "linePos", [0]);
        setLineNumber(1710);    // compilenode identifier
        var call3599 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestions", [1, 2, 1], string3596, call3597, call3598, var_suggestions);
        if3539 = call3599;
      }
      if3531 = if3539;
    }
    return if3531;
  };
  func3530.paramCounts = [1];
  this.methods["dotrest"] = func3530;
  func3530.definitionLine = 1685;
  func3530.definitionModule = "parser";
  setLineNumber(1719);    // compilenode method
  var func3600 = function(argcv) {    // method callrest(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_acceptBlocks = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for callrest(1)"));
    setModuleName("parser");
    var if3601 = GraceDone;
    setLineNumber(1720);    // compilenode identifier
    var call3603 = callmethodChecked(var_values, "size", [0]);
    var opresult3605 = callmethodChecked(call3603, "==", [1], new GraceNum(0));
    if (Grace_isTrue(opresult3605)) {
      setLineNumber(1721);    // compilenode num
      return new GraceNum(0);
    }
    setLineNumber(1723);    // compilenode identifier
    var call3606 = callmethodChecked(var_values, "pop", [0]);
    var var_meth = call3606;
    var if3607 = GraceDone;
    setLineNumber(1724);    // compilenode string
    var string3608 = new GraceString("identifier");
    var call3610 = callmethodChecked(var_meth, "kind", [0]);
    var opresult3612 = callmethodChecked(call3610, "\u2260", [1], string3608);
    if (Grace_isTrue(opresult3612)) {
      var if3613 = GraceDone;
      setLineNumber(1725);    // compilenode string
      var string3614 = new GraceString("member");
      var call3616 = callmethodChecked(var_meth, "kind", [0]);
      var opresult3618 = callmethodChecked(call3616, "\u2260", [1], string3614);
      if (Grace_isTrue(opresult3618)) {
        setLineNumber(1726);    // compilenode identifier
        var call3619 = callmethodChecked(var_values, "push", [1], var_meth);
        setLineNumber(1727);    // compilenode num
        return new GraceNum(0);
      }
      if3607 = if3613;
    }
    setLineNumber(1730);    // compilenode identifier
    var call3620 = callmethodChecked(var_meth, "line", [0]);
    var var_lnum = call3620;
    setLineNumber(1731);    // compilenode identifier
    var call3621 = callmethodChecked(var_meth, "linePos", [0]);
    var var_lpos = call3621;
    setLineNumber(1732);    // compilenode identifier
    var call3622 = callmethodChecked(var_meth, "value", [0]);
    var var_methn = call3622;
    setLineNumber(1733);    // compilenode identifier
    var var_btok = var_sym;
    setLineNumber(1734);    // compilenode identifier
    var call3623 = callmethodChecked(var_sym, "line", [0]);
    var call3624 = callmethodChecked(var_sym, "linePos", [0]);
    var call3625 = callmethodChecked(var_util, "setPosition", [2], call3623, call3624);
    setLineNumber(1735);    // compilenode array
    var array3626 = new PrimitiveGraceList([]);
    var var_signature = array3626;
    setLineNumber(1736);    // compilenode identifier
    var call3627 = callmethodChecked(var_ast, "callWithPart", [0]);
    var call3628 = callmethodChecked(call3627, "new", [0]);
    var var_part = call3628;
    setLineNumber(1737);    // compilenode identifier
    var call3629 = callmethodChecked(var_signature, "push", [1], var_part);
    setLineNumber(1738);    // compilenode identifier
    var var_hadcall = GraceFalse;
    setLineNumber(1739);    // compilenode identifier
    var var_tok = var_lastToken;
    setLineNumber(1740);    // compilenode identifier
    var var_startInd = var_minIndentLevel;
    setLineNumber(1741);    // compilenode identifier
    var var_genericIdents = GraceFalse;
    var if3630 = GraceDone;
    setLineNumber(1742);    // compilenode string
    var string3631 = new GraceString("lgeneric");
    onSelf = true;
    var call3632 = callmethodChecked(this, "acceptSameLine", [1], string3631);
    if (Grace_isTrue(call3632)) {
      setLineNumber(1743);    // compilenode call
      onSelf = true;
      var call3633 = callmethodChecked(this, "typeArgs", [0]);
      var_genericIdents = call3633;
      if3630 = GraceDone;
    }
    var if3634 = GraceDone;
    setLineNumber(1745);    // compilenode string
    var string3635 = new GraceString("lparen");
    onSelf = true;
    var call3636 = callmethodChecked(this, "acceptSameLine", [1], string3635);
    if (Grace_isTrue(call3636)) {
      setLineNumber(1746);    // compilenode identifier
      var call3637 = callmethodChecked(var_sym, "line", [0]);
      var call3638 = callmethodChecked(var_part, "line:=", [1], call3637);
      setLineNumber(1747);    // compilenode identifier
      var call3639 = callmethodChecked(var_sym, "linePos", [0]);
      var call3640 = callmethodChecked(var_part, "linePos:=", [1], call3639);
      setLineNumber(1748);    // compilenode identifier
      var call3641 = callmethodChecked(var_part, "name:=", [1], var_methn);
      setLineNumber(1749);    // compilenode identifier
      var_tok = var_sym;
      setLineNumber(1750);    // compilenode identifier
      var_hadcall = GraceTrue;
      setLineNumber(1751);    // compilenode identifier
      onSelf = true;
      var call3642 = callmethodChecked(this, "parenthesizedArg", [1], var_part);
      if3634 = call3642;
    } else {
      var if3643 = GraceDone;
      setLineNumber(1752);    // compilenode block
      var block3644 = new GraceBlock(this, 1752, 0);
      block3644.real = function() {
        var string3645 = new GraceString("lbrace");
        onSelf = true;
        var call3646 = callmethodChecked(this, "accept()onLineOf", [1, 1], string3645, var_tok);
        return call3646;
      };
      var call3648 = callmethodChecked(var_acceptBlocks, "not", [0]);
      var opresult3650 = callmethodChecked(call3648, "&&", [1], block3644);
      if (Grace_isTrue(opresult3650)) {
        setLineNumber(1753);    // compilenode identifier
        var call3651 = callmethodChecked(var_values, "push", [1], var_meth);
        if3643 = call3651;
      } else {
        var if3652 = GraceDone;
        setLineNumber(1754);    // compilenode identifier
        onSelf = true;
        var call3653 = callmethodChecked(this, "acceptArgumentOnLineOf", [1], var_tok);
        if (Grace_isTrue(call3653)) {
          setLineNumber(1755);    // compilenode identifier
          var_tok = var_sym;
          setLineNumber(1756);    // compilenode identifier
          var_hadcall = GraceTrue;
          setLineNumber(1757);    // compilenode identifier
          var call3654 = callmethodChecked(var_part, "name:=", [1], var_methn);
          setLineNumber(1758);    // compilenode call
          onSelf = true;
          var call3655 = callmethodChecked(this, "term", [0]);
          setLineNumber(1759);    // compilenode identifier
          var call3656 = callmethodChecked(var_values, "pop", [0]);
          var var_ar = call3656;
          setLineNumber(1760);    // compilenode identifier
          var call3657 = callmethodChecked(var_part, "args", [0]);
          var call3658 = callmethodChecked(call3657, "push", [1], var_ar);
          if3652 = call3658;
        } else {
          var if3659 = GraceDone;
          setLineNumber(1761);    // compilenode string
          var string3660 = new GraceString("identifier");
          var call3662 = callmethodChecked(var_meth, "kind", [0]);
          var opresult3664 = callmethodChecked(call3662, "==", [1], string3660);
          if (Grace_isTrue(opresult3664)) {
            setLineNumber(1762);    // compilenode identifier
            var call3665 = callmethodChecked(var_values, "push", [1], var_meth);
            if3659 = call3665;
          } else {
            var if3666 = GraceDone;
            setLineNumber(1763);    // compilenode string
            var string3667 = new GraceString("member");
            var call3669 = callmethodChecked(var_meth, "kind", [0]);
            var opresult3671 = callmethodChecked(call3669, "==", [1], string3667);
            if (Grace_isTrue(opresult3671)) {
              setLineNumber(1764);    // compilenode identifier
              var call3672 = callmethodChecked(var_meth, "in", [0]);
              var var_root = call3672;
              setLineNumber(1765);    // compilenode identifier
              var var_outroot = var_meth;
              setLineNumber(1766);    // compilenode block
              var block3673 = new GraceBlock(this, 1766, 0);
              block3673.real = function() {
                var string3674 = new GraceString("member");
                var call3676 = callmethodChecked(var_root, "kind", [0]);
                var opresult3678 = callmethodChecked(call3676, "==", [1], string3674);
                return opresult3678;
              };
              var block3679 = new GraceBlock(this, 1766, 0);
              block3679.real = function() {
                setLineNumber(1767);    // compilenode identifier
                var_outroot = var_root;
                setLineNumber(1768);    // compilenode identifier
                var call3680 = callmethodChecked(var_root, "in", [0]);
                var_root = call3680;
                return GraceDone;
              };
              var call3681 = callmethodChecked(var_prelude, "while()do", [1, 1], block3673, block3679);
              var if3682 = GraceDone;
              setLineNumber(1770);    // compilenode string
              var string3683 = new GraceString("identifier");
              var call3685 = callmethodChecked(var_root, "kind", [0]);
              var opresult3687 = callmethodChecked(call3685, "==", [1], string3683);
              if (Grace_isTrue(opresult3687)) {
                setLineNumber(1771);    // compilenode identifier
                var call3688 = callmethodChecked(var_values, "push", [1], var_meth);
                if3682 = call3688;
              } else {
                setLineNumber(1773);    // compilenode identifier
                var call3689 = callmethodChecked(var_meth, "generics:=", [1], var_genericIdents);
                setLineNumber(1774);    // compilenode identifier
                var call3690 = callmethodChecked(var_values, "push", [1], var_meth);
                if3682 = call3690;
              }
              if3666 = if3682;
            }
            if3659 = if3666;
          }
          if3652 = if3659;
        }
        if3643 = if3652;
      }
      if3634 = if3643;
    }
    var if3691 = GraceDone;
    setLineNumber(1777);    // compilenode identifier
    if (Grace_isTrue(var_hadcall)) {
      var if3692 = GraceDone;
      setLineNumber(1778);    // compilenode string
      var string3693 = new GraceString("identifier");
      onSelf = true;
      var call3694 = callmethodChecked(this, "accept()onLineOfLastOr", [1, 1], string3693, var_tok);
      if (Grace_isTrue(call3694)) {
        setLineNumber(1780);    // compilenode identifier
        var call3695 = callmethodChecked(var_ast, "identifierNode", [0]);
        var call3696 = callmethodChecked(call3695, "new", [2], var_methn, GraceFalse);
        var var_meth__39__ = call3696;
        setLineNumber(1781);    // compilenode identifier
        var call3697 = callmethodChecked(var_meth__39__, "line:=", [1], var_lnum);
        setLineNumber(1782);    // compilenode identifier
        var call3698 = callmethodChecked(var_meth__39__, "linePos:=", [1], var_lpos);
        setLineNumber(1783);    // compilenode identifier
        onSelf = true;
        var call3699 = callmethodChecked(this, "callmprest", [3], var_meth__39__, var_signature, var_tok);
        var_methn = call3699;
        var if3700 = GraceDone;
        setLineNumber(1784);    // compilenode string
        var string3701 = new GraceString("member");
        var call3703 = callmethodChecked(var_meth, "kind", [0]);
        var opresult3705 = callmethodChecked(call3703, "==", [1], string3701);
        if (Grace_isTrue(opresult3705)) {
          setLineNumber(1788);    // compilenode identifier
          var call3706 = callmethodChecked(var_methn, "value", [0]);
          var call3707 = callmethodChecked(var_meth, "in", [0]);
          var call3708 = callmethodChecked(var_ast, "memberNode", [0]);
          var call3709 = callmethodChecked(call3708, "new", [2], call3706, call3707);
          var_meth = call3709;
          setLineNumber(1789);    // compilenode identifier
          var call3710 = callmethodChecked(var_methn, "line", [0]);
          var call3711 = callmethodChecked(var_meth, "line:=", [1], call3710);
          setLineNumber(1790);    // compilenode identifier
          var call3712 = callmethodChecked(var_methn, "linePos", [0]);
          var call3713 = callmethodChecked(var_meth, "linePos:=", [1], call3712);
          if3700 = call3713;
        } else {
          setLineNumber(1792);    // compilenode identifier
          var_meth = var_methn;
          if3700 = GraceDone;
        }
        if3692 = if3700;
      }
      setLineNumber(1795);    // compilenode identifier
      var call3714 = callmethodChecked(var_util, "setline", [1], var_lnum);
      setLineNumber(1796);    // compilenode identifier
      var call3715 = callmethodChecked(var_ast, "callNode", [0]);
      var call3716 = callmethodChecked(call3715, "new", [2], var_meth, var_signature);
      var var_call = call3716;
      setLineNumber(1797);    // compilenode identifier
      var call3717 = callmethodChecked(var_call, "generics:=", [1], var_genericIdents);
      setLineNumber(1798);    // compilenode identifier
      var call3718 = callmethodChecked(var_values, "push", [1], var_call);
      if3691 = call3718;
    } else {
      var if3719 = GraceDone;
      setLineNumber(1799);    // compilenode identifier
      var opresult3722 = callmethodChecked(GraceFalse, "\u2260", [1], var_genericIdents);
      if (Grace_isTrue(opresult3722)) {
        setLineNumber(1800);    // compilenode identifier
        var call3723 = callmethodChecked(var_meth, "generics:=", [1], var_genericIdents);
        if3719 = call3723;
      }
      if3691 = if3719;
    }
    setLineNumber(1802);    // compilenode identifier
    var_minIndentLevel = var_startInd;
    setLineNumber(1803);    // compilenode identifier
    onSelf = true;
    var call3724 = callmethodChecked(this, "dotrest", [1], var_acceptBlocks);
    return call3724;
  };
  func3600.paramCounts = [1];
  this.methods["callrest"] = func3600;
  func3600.definitionLine = 1719;
  func3600.definitionModule = "parser";
  setLineNumber(1806);    // compilenode method
  var func3725 = function(argcv) {    // method parenthesizedArg(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_part = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for parenthesizedArg(1)"));
    setModuleName("parser");
    setLineNumber(1807);    // compilenode call
    onSelf = true;
    var call3726 = callmethodChecked(this, "next", [0]);
    setLineNumber(1808);    // compilenode block
    var block3727 = new GraceBlock(this, 1808, 0);
    block3727.real = function() {
      onSelf = true;
      var call3728 = callmethodChecked(this, "expression", [1], var_blocksOK);
      return call3728;
    };
    var block3729 = new GraceBlock(this, 1808, 0);
    block3729.real = function() {
      var if3730 = GraceDone;
      setLineNumber(1810);    // compilenode string
      var string3731 = new GraceString("colon");
      onSelf = true;
      var call3732 = callmethodChecked(this, "accept", [1], string3731);
      if (Grace_isTrue(call3732)) {
        setLineNumber(1811);    // compilenode identifier
        var call3733 = callmethodChecked(var_values, "pop", [0]);
        var var_expr = call3733;
        var if3734 = GraceDone;
        setLineNumber(1812);    // compilenode string
        var string3735 = new GraceString("identifier");
        var call3737 = callmethodChecked(var_expr, "kind", [0]);
        var opresult3739 = callmethodChecked(call3737, "\u2260", [1], string3735);
        if (Grace_isTrue(opresult3739)) {
          setLineNumber(1813);    // compilenode identifier
          var call3740 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call3741 = callmethodChecked(call3740, "new", [0]);
          var var_suggestion = call3741;
          var if3742 = GraceDone;
          setLineNumber(1814);    // compilenode string
          var string3743 = new GraceString("identifier");
          var call3745 = callmethodChecked(var_sym, "next", [0]);
          var call3746 = callmethodChecked(call3745, "kind", [0]);
          var opresult3748 = callmethodChecked(call3746, "==", [1], string3743);
          if (Grace_isTrue(opresult3748)) {
            setLineNumber(1815);    // compilenode identifier
            var call3749 = callmethodChecked(var_sym, "next", [0]);
            var call3750 = callmethodChecked(var_suggestion, "deleteTokenRange()leading()trailing", [2, 1, 1], var_sym, call3749, GraceTrue, GraceFalse);
            setLineNumber(1816);    // compilenode string
            var string3751 = new GraceString("only variables and constants may be followed by a ':' and a type.");
            setLineNumber(1817);    // compilenode identifier
            var call3752 = callmethodChecked(var_sym, "line", [0]);
            var call3753 = callmethodChecked(var_sym, "linePos", [0]);
            var call3755 = callmethodChecked(var_sym, "next", [0]);
            var call3756 = callmethodChecked(call3755, "size", [0]);
            var call3758 = callmethodChecked(var_sym, "next", [0]);
            var call3759 = callmethodChecked(call3758, "linePos", [0]);
            var opresult3761 = callmethodChecked(call3759, "+", [1], call3756);
            var diff3763 = callmethodChecked(opresult3761, "-", [1], new GraceNum(1));
            setLineNumber(1816);    // compilenode identifier
            var call3764 = callmethodChecked(var_errormessages, "syntaxError()atRange()withSuggestion", [1, 3, 1], string3751, call3752, call3753, diff3763, var_suggestion);
            if3742 = call3764;
          } else {
            setLineNumber(1819);    // compilenode identifier
            var call3765 = callmethodChecked(var_suggestion, "deleteToken()leading()trailing", [1, 1, 1], var_sym, GraceTrue, GraceFalse);
            setLineNumber(1820);    // compilenode string
            var string3766 = new GraceString("only variables and constants may be followed by a ':' and a type.");
            setLineNumber(1821);    // compilenode identifier
            var call3767 = callmethodChecked(var_sym, "line", [0]);
            var call3768 = callmethodChecked(var_sym, "linePos", [0]);
            var call3769 = callmethodChecked(var_sym, "linePos", [0]);
            setLineNumber(1820);    // compilenode identifier
            var call3770 = callmethodChecked(var_errormessages, "syntaxError()atRange()withSuggestion", [1, 3, 1], string3766, call3767, call3768, call3769, var_suggestion);
            if3742 = call3770;
          }
          if3734 = if3742;
        }
        setLineNumber(1824);    // compilenode call
        onSelf = true;
        var call3771 = callmethodChecked(this, "next", [0]);
        var if3772 = GraceDone;
        setLineNumber(1825);    // compilenode block
        var block3773 = new GraceBlock(this, 1825, 0);
        block3773.real = function() {
          onSelf = true;
          var call3774 = callmethodChecked(this, "expression", [1], var_blocksOK);
          return call3774;
        };
        onSelf = true;
        var call3775 = callmethodChecked(this, "didConsume", [1], block3773);
        var call3776 = callmethodChecked(call3775, "not", [0]);
        if (Grace_isTrue(call3776)) {
          setLineNumber(1826);    // compilenode call
          onSelf = true;
          var call3777 = callmethodChecked(this, "checkBadTypeLiteral", [0]);
          setLineNumber(1827);    // compilenode array
          var array3778 = new PrimitiveGraceList([]);
          var var_suggestions = array3778;
          setLineNumber(1828);    // compilenode identifier
          var call3779 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call3780 = callmethodChecked(call3779, "new", [0]);
          var var_suggestion = call3780;
          setLineNumber(1829);    // compilenode string
          var string3782 = new GraceString("rparen");
          var array3781 = new PrimitiveGraceList([string3782]);
          onSelf = true;
          var call3783 = callmethodChecked(this, "findNextValidToken", [1], array3781);
          var var_nextTok = call3783;
          var if3784 = GraceDone;
          setLineNumber(1830);    // compilenode identifier
          var opresult3787 = callmethodChecked(var_nextTok, "==", [1], var_sym);
          if (Grace_isTrue(opresult3787)) {
            setLineNumber(1831);    // compilenode string
            var string3788 = new GraceString(" \u00abtype name\u00bb");
            var call3789 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string3788, var_lastToken);
            if3784 = call3789;
          } else {
            setLineNumber(1833);    // compilenode identifier
            var call3790 = callmethodChecked(var_nextTok, "prev", [0]);
            var string3791 = new GraceString(" \u00abtype name\u00bb");
            var call3792 = callmethodChecked(var_suggestion, "replaceTokenRange()leading()trailing()with", [2, 1, 1, 1], var_sym, call3790, GraceTrue, GraceFalse, string3791);
            if3784 = call3792;
          }
          setLineNumber(1835);    // compilenode identifier
          var call3793 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
          setLineNumber(1836);    // compilenode identifier
          var call3794 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call3795 = callmethodChecked(call3794, "new", [0]);
          var_suggestion = call3795;
          setLineNumber(1837);    // compilenode identifier
          var call3796 = callmethodChecked(var_nextTok, "prev", [0]);
          var call3797 = callmethodChecked(var_suggestion, "deleteTokenRange()leading()trailing", [2, 1, 1], var_lastToken, call3796, GraceTrue, GraceFalse);
          setLineNumber(1838);    // compilenode identifier
          var call3798 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
          setLineNumber(1839);    // compilenode string
          var string3799 = new GraceString("a type name or type expression must follow ':'.");
          setLineNumber(1840);    // compilenode identifier
          var call3800 = callmethodChecked(var_sym, "line", [0]);
          var call3801 = callmethodChecked(var_sym, "linePos", [0]);
          setLineNumber(1839);    // compilenode identifier
          var call3802 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestions", [1, 2, 1], string3799, call3800, call3801, var_suggestions);
          if3772 = call3802;
        }
        setLineNumber(1842);    // compilenode identifier
        var call3803 = callmethodChecked(var_values, "pop", [0]);
        var call3804 = callmethodChecked(var_expr, "dtype:=", [1], call3803);
        setLineNumber(1843);    // compilenode identifier
        var call3805 = callmethodChecked(var_values, "push", [1], var_expr);
        if3730 = call3805;
      }
      setLineNumber(1845);    // compilenode block
      var block3806 = new GraceBlock(this, 1845, 0);
      block3806.real = function() {
        var string3807 = new GraceString("comma");
        onSelf = true;
        var call3808 = callmethodChecked(this, "accept", [1], string3807);
        return call3808;
      };
      var block3809 = new GraceBlock(this, 1845, 0);
      block3809.real = function() {
        setLineNumber(1846);    // compilenode identifier
        var call3810 = callmethodChecked(var_values, "pop", [0]);
        var call3811 = callmethodChecked(var_part, "args", [0]);
        var call3812 = callmethodChecked(call3811, "push", [1], call3810);
        setLineNumber(1847);    // compilenode call
        onSelf = true;
        var call3813 = callmethodChecked(this, "next", [0]);
        var if3814 = GraceDone;
        setLineNumber(1848);    // compilenode block
        var block3815 = new GraceBlock(this, 1848, 0);
        block3815.real = function() {
          onSelf = true;
          var call3816 = callmethodChecked(this, "expression", [1], var_blocksOK);
          return call3816;
        };
        onSelf = true;
        var call3817 = callmethodChecked(this, "didConsume", [1], block3815);
        var call3818 = callmethodChecked(call3817, "not", [0]);
        if (Grace_isTrue(call3818)) {
          setLineNumber(1849);    // compilenode array
          var array3819 = new PrimitiveGraceList([]);
          var var_suggestions = array3819;
          setLineNumber(1850);    // compilenode identifier
          var call3820 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call3821 = callmethodChecked(call3820, "new", [0]);
          var var_suggestion = call3821;
          setLineNumber(1851);    // compilenode string
          var string3823 = new GraceString("rparen");
          var array3822 = new PrimitiveGraceList([string3823]);
          onSelf = true;
          var call3824 = callmethodChecked(this, "findNextValidToken", [1], array3822);
          var var_nextTok = call3824;
          var if3825 = GraceDone;
          setLineNumber(1852);    // compilenode identifier
          var opresult3828 = callmethodChecked(var_nextTok, "==", [1], var_sym);
          if (Grace_isTrue(opresult3828)) {
            setLineNumber(1853);    // compilenode string
            var string3829 = new GraceString(" \u00abexpression\u00bb");
            var call3830 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string3829, var_lastToken);
            if3825 = call3830;
          } else {
            setLineNumber(1855);    // compilenode identifier
            var call3831 = callmethodChecked(var_nextTok, "prev", [0]);
            var string3832 = new GraceString(" \u00abexpression\u00bb");
            var call3833 = callmethodChecked(var_suggestion, "replaceTokenRange()leading()trailing()with", [2, 1, 1, 1], var_sym, call3831, GraceTrue, GraceFalse, string3832);
            if3825 = call3833;
          }
          setLineNumber(1857);    // compilenode identifier
          var call3834 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
          setLineNumber(1858);    // compilenode identifier
          var call3835 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call3836 = callmethodChecked(call3835, "new", [0]);
          var_suggestion = call3836;
          setLineNumber(1859);    // compilenode identifier
          var call3837 = callmethodChecked(var_nextTok, "prev", [0]);
          var call3838 = callmethodChecked(var_suggestion, "deleteTokenRange()leading()trailing", [2, 1, 1], var_lastToken, call3837, GraceTrue, GraceFalse);
          setLineNumber(1860);    // compilenode identifier
          var call3839 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
          setLineNumber(1861);    // compilenode string
          var string3840 = new GraceString("a method request must have an expression after a ','.");
          setLineNumber(1862);    // compilenode identifier
          var call3841 = callmethodChecked(var_sym, "line", [0]);
          var call3842 = callmethodChecked(var_sym, "linePos", [0]);
          setLineNumber(1861);    // compilenode identifier
          var call3843 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestions", [1, 2, 1], string3840, call3841, call3842, var_suggestions);
          if3814 = call3843;
        }
        var if3844 = GraceDone;
        setLineNumber(1865);    // compilenode string
        var string3845 = new GraceString("colon");
        onSelf = true;
        var call3846 = callmethodChecked(this, "accept", [1], string3845);
        if (Grace_isTrue(call3846)) {
          setLineNumber(1866);    // compilenode identifier
          var call3847 = callmethodChecked(var_values, "pop", [0]);
          var var_arg = call3847;
          var if3848 = GraceDone;
          setLineNumber(1867);    // compilenode string
          var string3849 = new GraceString("identifier");
          var call3851 = callmethodChecked(var_arg, "kind", [0]);
          var opresult3853 = callmethodChecked(call3851, "\u2260", [1], string3849);
          if (Grace_isTrue(opresult3853)) {
            setLineNumber(1868);    // compilenode identifier
            var call3854 = callmethodChecked(var_errormessages, "suggestion", [0]);
            var call3855 = callmethodChecked(call3854, "new", [0]);
            var var_suggestion = call3855;
            var if3856 = GraceDone;
            setLineNumber(1869);    // compilenode string
            var string3857 = new GraceString("identifier");
            var call3859 = callmethodChecked(var_sym, "next", [0]);
            var call3860 = callmethodChecked(call3859, "kind", [0]);
            var opresult3862 = callmethodChecked(call3860, "==", [1], string3857);
            if (Grace_isTrue(opresult3862)) {
              setLineNumber(1870);    // compilenode identifier
              var call3863 = callmethodChecked(var_sym, "next", [0]);
              var call3864 = callmethodChecked(var_suggestion, "deleteTokenRange()leading()trailing", [2, 1, 1], var_sym, call3863, GraceTrue, GraceFalse);
              setLineNumber(1871);    // compilenode string
              var string3865 = new GraceString("only declarations may be followed by a ':' and a type.");
              setLineNumber(1872);    // compilenode identifier
              var call3866 = callmethodChecked(var_sym, "line", [0]);
              var call3867 = callmethodChecked(var_sym, "linePos", [0]);
              var call3869 = callmethodChecked(var_sym, "next", [0]);
              var call3870 = callmethodChecked(call3869, "size", [0]);
              var call3872 = callmethodChecked(var_sym, "next", [0]);
              var call3873 = callmethodChecked(call3872, "linePos", [0]);
              var opresult3875 = callmethodChecked(call3873, "+", [1], call3870);
              var diff3877 = callmethodChecked(opresult3875, "-", [1], new GraceNum(1));
              setLineNumber(1871);    // compilenode identifier
              var call3878 = callmethodChecked(var_errormessages, "syntaxError()atRange()withSuggestion", [1, 3, 1], string3865, call3866, call3867, diff3877, var_suggestion);
              if3856 = call3878;
            } else {
              setLineNumber(1874);    // compilenode identifier
              var call3879 = callmethodChecked(var_suggestion, "deleteToken", [1], var_sym);
              setLineNumber(1875);    // compilenode string
              var string3880 = new GraceString("only declarations may be followed by a ':' and a type.");
              setLineNumber(1876);    // compilenode identifier
              var call3881 = callmethodChecked(var_sym, "line", [0]);
              var call3882 = callmethodChecked(var_sym, "linePos", [0]);
              var call3883 = callmethodChecked(var_sym, "linePos", [0]);
              setLineNumber(1875);    // compilenode identifier
              var call3884 = callmethodChecked(var_errormessages, "syntaxError()atRange()withSuggestion", [1, 3, 1], string3880, call3881, call3882, call3883, var_suggestion);
              if3856 = call3884;
            }
            if3848 = if3856;
          }
          setLineNumber(1879);    // compilenode call
          onSelf = true;
          var call3885 = callmethodChecked(this, "next", [0]);
          var if3886 = GraceDone;
          setLineNumber(1880);    // compilenode block
          var block3887 = new GraceBlock(this, 1880, 0);
          block3887.real = function() {
            onSelf = true;
            var call3888 = callmethodChecked(this, "expression", [1], var_blocksOK);
            return call3888;
          };
          onSelf = true;
          var call3889 = callmethodChecked(this, "didConsume", [1], block3887);
          var call3890 = callmethodChecked(call3889, "not", [0]);
          if (Grace_isTrue(call3890)) {
            setLineNumber(1881);    // compilenode call
            onSelf = true;
            var call3891 = callmethodChecked(this, "checkBadTypeLiteral", [0]);
            setLineNumber(1882);    // compilenode array
            var array3892 = new PrimitiveGraceList([]);
            var var_suggestions = array3892;
            setLineNumber(1883);    // compilenode identifier
            var call3893 = callmethodChecked(var_errormessages, "suggestion", [0]);
            var call3894 = callmethodChecked(call3893, "new", [0]);
            var var_suggestion = call3894;
            setLineNumber(1884);    // compilenode string
            var string3896 = new GraceString("rparen");
            var array3895 = new PrimitiveGraceList([string3896]);
            onSelf = true;
            var call3897 = callmethodChecked(this, "findNextValidToken", [1], array3895);
            var var_nextTok = call3897;
            var if3898 = GraceDone;
            setLineNumber(1885);    // compilenode identifier
            var opresult3901 = callmethodChecked(var_nextTok, "==", [1], var_sym);
            if (Grace_isTrue(opresult3901)) {
              setLineNumber(1886);    // compilenode string
              var string3902 = new GraceString(" \u00abtype name\u00bb");
              var call3903 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string3902, var_lastToken);
              if3898 = call3903;
            } else {
              setLineNumber(1888);    // compilenode identifier
              var call3904 = callmethodChecked(var_nextTok, "prev", [0]);
              var string3905 = new GraceString(" \u00abtype name\u00bb");
              var call3906 = callmethodChecked(var_suggestion, "replaceTokenRange()leading()trailing()with", [2, 1, 1, 1], var_sym, call3904, GraceTrue, GraceFalse, string3905);
              if3898 = call3906;
            }
            setLineNumber(1890);    // compilenode identifier
            var call3907 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
            setLineNumber(1891);    // compilenode identifier
            var call3908 = callmethodChecked(var_errormessages, "suggestion", [0]);
            var call3909 = callmethodChecked(call3908, "new", [0]);
            var_suggestion = call3909;
            setLineNumber(1892);    // compilenode identifier
            var call3910 = callmethodChecked(var_nextTok, "prev", [0]);
            var call3911 = callmethodChecked(var_suggestion, "deleteTokenRange()leading()trailing", [2, 1, 1], var_lastToken, call3910, GraceTrue, GraceFalse);
            setLineNumber(1893);    // compilenode identifier
            var call3912 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
            setLineNumber(1894);    // compilenode string
            var string3913 = new GraceString("a type name or type expression must follow ':'.");
            setLineNumber(1895);    // compilenode identifier
            var call3914 = callmethodChecked(var_sym, "line", [0]);
            var call3915 = callmethodChecked(var_sym, "linePos", [0]);
            setLineNumber(1894);    // compilenode identifier
            var call3916 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestions", [1, 2, 1], string3913, call3914, call3915, var_suggestions);
            if3886 = call3916;
          }
          setLineNumber(1897);    // compilenode identifier
          var call3917 = callmethodChecked(var_values, "pop", [0]);
          var call3918 = callmethodChecked(var_arg, "dtype:=", [1], call3917);
          setLineNumber(1898);    // compilenode identifier
          var call3919 = callmethodChecked(var_values, "push", [1], var_arg);
          if3844 = call3919;
        }
        return if3844;
      };
      var call3920 = callmethodChecked(var_prelude, "while()do", [1, 1], block3806, block3809);
      setLineNumber(1901);    // compilenode identifier
      var call3921 = callmethodChecked(var_values, "pop", [0]);
      var call3922 = callmethodChecked(var_part, "args", [0]);
      var call3923 = callmethodChecked(call3922, "push", [1], call3921);
      return call3923;
    };
    onSelf = true;
    var call3924 = callmethodChecked(this, "ifConsume()then", [1, 1], block3727, block3729);
    var if3925 = GraceDone;
    setLineNumber(1903);    // compilenode string
    var string3926 = new GraceString("rparen");
    var call3928 = callmethodChecked(var_sym, "kind", [0]);
    var opresult3930 = callmethodChecked(call3928, "\u2260", [1], string3926);
    if (Grace_isTrue(opresult3930)) {
      setLineNumber(1904);    // compilenode call
      onSelf = true;
      var call3931 = callmethodChecked(this, "checkBadOperators", [0]);
      setLineNumber(1905);    // compilenode identifier
      var call3932 = callmethodChecked(var_errormessages, "suggestion", [0]);
      var call3933 = callmethodChecked(call3932, "new", [0]);
      var var_suggestion = call3933;
      setLineNumber(1906);    // compilenode string
      var string3934 = new GraceString(")");
      var call3935 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string3934, var_lastToken);
      setLineNumber(1907);    // compilenode string
      var string3936 = new GraceString("a method request beginning with a '(' must end with a ')'.");
      setLineNumber(1908);    // compilenode identifier
      var call3937 = callmethodChecked(var_lastToken, "line", [0]);
      var call3938 = callmethodChecked(var_lastToken, "size", [0]);
      var call3940 = callmethodChecked(var_lastToken, "linePos", [0]);
      var opresult3942 = callmethodChecked(call3940, "+", [1], call3938);
      setLineNumber(1907);    // compilenode identifier
      var call3943 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string3936, call3937, opresult3942, var_suggestion);
      if3925 = call3943;
    }
    var if3944 = GraceDone;
    setLineNumber(1910);    // compilenode identifier
    var call3945 = callmethodChecked(var_part, "line", [0]);
    var call3947 = callmethodChecked(var_sym, "line", [0]);
    var opresult3949 = callmethodChecked(call3947, "==", [1], call3945);
    if (Grace_isTrue(opresult3949)) {
      setLineNumber(1911);    // compilenode identifier
      var call3950 = callmethodChecked(var_part, "linePos", [0]);
      var call3952 = callmethodChecked(var_sym, "linePos", [0]);
      var diff3954 = callmethodChecked(call3952, "-", [1], call3950);
      var call3955 = callmethodChecked(var_part, "lineLength:=", [1], diff3954);
      if3944 = call3955;
    }
    setLineNumber(1913);    // compilenode call
    onSelf = true;
    var call3956 = callmethodChecked(this, "next", [0]);
    return call3956;
  };
  func3725.paramCounts = [1];
  this.methods["parenthesizedArg"] = func3725;
  func3725.definitionLine = 1806;
  func3725.definitionModule = "parser";
  setLineNumber(1916);    // compilenode method
  var func3957 = function(argcv) {    // method typeArgs
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for typeArgs"));
    setModuleName("parser");
    setLineNumber(1918);    // compilenode identifier
    var var_startToken = var_sym;
    setLineNumber(1919);    // compilenode array
    var array3958 = new PrimitiveGraceList([]);
    var var_args = array3958;
    var if3959 = GraceDone;
    setLineNumber(1920);    // compilenode string
    var string3960 = new GraceString("lgeneric");
    var call3962 = callmethodChecked(var_sym, "kind", [0]);
    var opresult3964 = callmethodChecked(call3962, "\u2260", [1], string3960);
    if (Grace_isTrue(opresult3964)) {
      return var_args;
    }
    setLineNumber(1921);    // compilenode call
    onSelf = true;
    var call3965 = callmethodChecked(this, "next", [0]);
    setLineNumber(1922);    // compilenode block
    var block3966 = new GraceBlock(this, 1922, 0);
    block3966.real = function() {
      var block3967 = new GraceBlock(this, 1922, 0);
      block3967.real = function() {
        onSelf = true;
        var call3968 = callmethodChecked(this, "typeArg", [0]);
        return call3968;
      };
      onSelf = true;
      var call3969 = callmethodChecked(this, "didConsume", [1], block3967);
      return call3969;
    };
    var block3970 = new GraceBlock(this, 1922, 0);
    block3970.real = function() {
      setLineNumber(1923);    // compilenode identifier
      var call3971 = callmethodChecked(var_values, "pop", [0]);
      var call3972 = callmethodChecked(var_args, "add", [1], call3971);
      var if3973 = GraceDone;
      setLineNumber(1924);    // compilenode string
      var string3974 = new GraceString("comma");
      var call3976 = callmethodChecked(var_sym, "kind", [0]);
      var opresult3978 = callmethodChecked(call3976, "==", [1], string3974);
      if (Grace_isTrue(opresult3978)) {
        onSelf = true;
        var call3979 = callmethodChecked(this, "next", [0]);
        if3973 = call3979;
      }
      return if3973;
    };
    var call3980 = callmethodChecked(var_prelude, "while()do", [1, 1], block3966, block3970);
    var if3981 = GraceDone;
    setLineNumber(1926);    // compilenode string
    var string3982 = new GraceString("rgeneric");
    var call3984 = callmethodChecked(var_sym, "kind", [0]);
    var opresult3986 = callmethodChecked(call3984, "\u2260", [1], string3982);
    if (Grace_isTrue(opresult3986)) {
      setLineNumber(1927);    // compilenode identifier
      var call3987 = callmethodChecked(var_errormessages, "suggestion", [0]);
      var call3988 = callmethodChecked(call3987, "new", [0]);
      var var_suggestion = call3988;
      setLineNumber(1928);    // compilenode string
      var string3989 = new GraceString(">");
      var call3990 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string3989, var_lastToken);
      setLineNumber(1929);    // compilenode identifier
      var call3991 = callmethodChecked(var_errormessages, "suggestion", [0]);
      var call3992 = callmethodChecked(call3991, "new", [0]);
      var var_suggestion2 = call3992;
      setLineNumber(1930);    // compilenode string
      var string3993 = new GraceString(" ");
      var call3994 = callmethodChecked(var_suggestion2, "insert()beforeToken", [1, 1], string3993, var_startToken);
      setLineNumber(1931);    // compilenode identifier
      var array3995 = new PrimitiveGraceList([var_suggestion, var_suggestion2]);
      var var_suggestions = array3995;
      setLineNumber(1933);    // compilenode string
      var string3996 = new GraceString("If '<' is intended as an operator, precede it by a space.");
      setLineNumber(1932);    // compilenode string
      var string3998 = new GraceString("a method request containing a '<' must have a matching '>'. ");
      var opresult4000 = callmethodChecked(string3998, "++", [1], string3996);
      setLineNumber(1934);    // compilenode identifier
      var call4001 = callmethodChecked(var_lastToken, "line", [0]);
      var call4002 = callmethodChecked(var_lastToken, "size", [0]);
      var call4004 = callmethodChecked(var_lastToken, "linePos", [0]);
      var opresult4006 = callmethodChecked(call4004, "+", [1], call4002);
      setLineNumber(1932);    // compilenode identifier
      var call4007 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestions", [1, 2, 1], opresult4000, call4001, opresult4006, var_suggestions);
      if3981 = call4007;
    }
    setLineNumber(1937);    // compilenode call
    onSelf = true;
    var call4008 = callmethodChecked(this, "next", [0]);
    setLineNumber(1938);    // compilenode identifier
    return var_args;
  };
  func3957.paramCounts = [0];
  this.methods["typeArgs"] = func3957;
  func3957.definitionLine = 1916;
  func3957.definitionModule = "parser";
  setLineNumber(1941);    // compilenode method
  var func4009 = function(argcv) {    // method typeArg
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for typeArg"));
    setModuleName("parser");
    var if4010 = GraceDone;
    setLineNumber(1945);    // compilenode string
    var string4011 = new GraceString("identifier");
    onSelf = true;
    var call4012 = callmethodChecked(this, "accept", [1], string4011);
    if (Grace_isTrue(call4012)) {
      setLineNumber(1946);    // compilenode call
      onSelf = true;
      var call4013 = callmethodChecked(this, "identifier", [0]);
      var if4014 = GraceDone;
      setLineNumber(1947);    // compilenode string
      var string4015 = new GraceString("lgeneric");
      var call4017 = callmethodChecked(var_sym, "kind", [0]);
      var opresult4019 = callmethodChecked(call4017, "==", [1], string4015);
      if (Grace_isTrue(opresult4019)) {
        setLineNumber(1948);    // compilenode identifier
        var call4020 = callmethodChecked(var_values, "pop", [0]);
        onSelf = true;
        var call4021 = callmethodChecked(this, "typeArgs", [0]);
        var call4022 = callmethodChecked(var_ast, "genericNode", [0]);
        var call4023 = callmethodChecked(call4022, "new", [2], call4020, call4021);
        var call4024 = callmethodChecked(var_values, "push", [1], call4023);
        if4014 = call4024;
      }
      if4010 = if4014;
    } else {
      var if4025 = GraceDone;
      setLineNumber(1952);    // compilenode block
      var block4026 = new GraceBlock(this, 1952, 0);
      block4026.real = function() {
        onSelf = true;
        var call4027 = callmethodChecked(this, "dotypeLiteral", [0]);
        return call4027;
      };
      onSelf = true;
      var call4028 = callmethodChecked(this, "didConsume", [1], block4026);
      if (Grace_isTrue(call4028)) {
      }
      if4010 = if4025;
    }
    return if4010;
  };
  func4009.paramCounts = [0];
  this.methods["typeArg"] = func4009;
  func4009.definitionLine = 1941;
  func4009.definitionModule = "parser";
  setLineNumber(1957);    // compilenode method
  var func4029 = function(argcv) {    // method callmprest(3)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_meth = arguments[curarg];
    curarg++;
    var var_signature = arguments[curarg];
    curarg++;
    var var_tok = arguments[curarg];
    curarg++;
    if (argcv[0] !== 3)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for callmprest(3)"));
    setModuleName("parser");
    setLineNumber(1962);    // compilenode identifier
    var call4030 = callmethodChecked(var_meth, "value", [0]);
    var var_methname = call4030;
    setLineNumber(1963);    // compilenode vardec
    var var_nxt;
    setLineNumber(1964);    // compilenode identifier
    var call4031 = callmethodChecked(var_meth, "linePos", [0]);
    var var_lp = call4031;
    setLineNumber(1965);    // compilenode vardec
    var var_part;
    setLineNumber(1966);    // compilenode block
    var block4032 = new GraceBlock(this, 1966, 0);
    block4032.real = function() {
      setLineNumber(1967);    // compilenode string
      var string4033 = new GraceString("identifier");
      onSelf = true;
      var call4034 = callmethodChecked(this, "accept()onLineOf", [1, 1], string4033, var_lastToken);
      setLineNumber(1966);    // compilenode string
      var string4036 = new GraceString("identifier");
      onSelf = true;
      var call4037 = callmethodChecked(this, "accept()onLineOf", [1, 1], string4036, var_tok);
      var opresult4039 = callmethodChecked(call4037, "||", [1], call4034);
      return opresult4039;
    };
    setLineNumber(1967);    // compilenode block
    var block4040 = new GraceBlock(this, 1967, 0);
    block4040.real = function() {
      setLineNumber(1970);    // compilenode identifier
      var call4041 = callmethodChecked(var_ast, "callWithPart", [0]);
      var call4042 = callmethodChecked(call4041, "new", [0]);
      var_part = call4042;
      setLineNumber(1971);    // compilenode identifier
      var call4043 = callmethodChecked(var_signature, "push", [1], var_part);
      setLineNumber(1972);    // compilenode string
      var string4044 = new GraceString("()");
      var opresult4047 = callmethodChecked(var_methname, "++", [1], string4044);
      var_methname = opresult4047;
      setLineNumber(1973);    // compilenode call
      onSelf = true;
      var call4048 = callmethodChecked(this, "pushidentifier", [0]);
      setLineNumber(1974);    // compilenode identifier
      var call4049 = callmethodChecked(var_values, "pop", [0]);
      var_nxt = call4049;
      setLineNumber(1975);    // compilenode identifier
      var call4050 = callmethodChecked(var_nxt, "value", [0]);
      var opresult4053 = callmethodChecked(var_methname, "++", [1], call4050);
      var_methname = opresult4053;
      setLineNumber(1976);    // compilenode identifier
      var call4054 = callmethodChecked(var_nxt, "value", [0]);
      var call4055 = callmethodChecked(var_part, "name:=", [1], call4054);
      setLineNumber(1977);    // compilenode identifier
      var var_isTerm = GraceFalse;
      var if4056 = GraceDone;
      setLineNumber(1978);    // compilenode string
      var string4057 = new GraceString("lparen");
      onSelf = true;
      var call4058 = callmethodChecked(this, "accept", [1], string4057);
      if (Grace_isTrue(call4058)) {
        setLineNumber(1979);    // compilenode call
        onSelf = true;
        var call4059 = callmethodChecked(this, "next", [0]);
        if4056 = call4059;
      } else {
        var if4060 = GraceDone;
        setLineNumber(1980);    // compilenode identifier
        onSelf = true;
        var call4061 = callmethodChecked(this, "acceptArgumentOnLineOf", [1], var_lastToken);
        if (Grace_isTrue(call4061)) {
          setLineNumber(1981);    // compilenode identifier
          var_isTerm = GraceTrue;
          if4060 = GraceDone;
        } else {
          setLineNumber(1983);    // compilenode identifier
          var call4062 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call4063 = callmethodChecked(call4062, "new", [0]);
          var var_suggestion = call4063;
          var if4064 = GraceDone;
          setLineNumber(1984);    // compilenode string
          var string4065 = new GraceString("identifier");
          var call4067 = callmethodChecked(var_sym, "kind", [0]);
          var opresult4069 = callmethodChecked(call4067, "==", [1], string4065);
          if (Grace_isTrue(opresult4069)) {
            setLineNumber(1985);    // compilenode string
            var string4070 = new GraceString(")");
            var call4072 = callmethodChecked(var_sym, "value", [0]);
            var string4074 = new GraceString("(");
            var opresult4076 = callmethodChecked(string4074, "++", [1], call4072);
            var opresult4078 = callmethodChecked(opresult4076, "++", [1], string4070);
            var call4079 = callmethodChecked(var_suggestion, "replaceToken()leading()trailing()with", [1, 1, 1, 1], var_sym, GraceTrue, GraceFalse, opresult4078);
            var if4080 = GraceDone;
            setLineNumber(1986);    // compilenode string
            var string4081 = new GraceString("while()do");
            var opresult4084 = callmethodChecked(var_methname, "==", [1], string4081);
            if (Grace_isTrue(opresult4084)) {
              setLineNumber(1987);    // compilenode string
              var string4085 = new GraceString("a while loop must have either a loop body in braces, or a block in parentheses.");
              setLineNumber(1988);    // compilenode identifier
              var call4086 = callmethodChecked(var_sym, "line", [0]);
              var call4087 = callmethodChecked(var_sym, "linePos", [0]);
              setLineNumber(1987);    // compilenode identifier
              var call4088 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string4085, call4086, call4087, var_suggestion);
              if4080 = call4088;
            } else {
              var if4089 = GraceDone;
              setLineNumber(1989);    // compilenode string
              var string4090 = new GraceString("for()do");
              var opresult4093 = callmethodChecked(var_methname, "==", [1], string4090);
              if (Grace_isTrue(opresult4093)) {
                setLineNumber(1990);    // compilenode string
                var string4094 = new GraceString("a for loop must have either a loop body in braces, or a block in parentheses.");
                setLineNumber(1991);    // compilenode identifier
                var call4095 = callmethodChecked(var_sym, "line", [0]);
                var call4096 = callmethodChecked(var_sym, "linePos", [0]);
                setLineNumber(1990);    // compilenode identifier
                var call4097 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string4094, call4095, call4096, var_suggestion);
                if4089 = call4097;
              }
              if4080 = if4089;
            }
            setLineNumber(1993);    // compilenode string
            var string4098 = new GraceString("each argument list in a multi-part method request must be parenthesized, unless it is self-delimiting.");
            setLineNumber(1994);    // compilenode identifier
            var call4099 = callmethodChecked(var_sym, "line", [0]);
            var call4100 = callmethodChecked(var_sym, "linePos", [0]);
            setLineNumber(1993);    // compilenode identifier
            var call4101 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string4098, call4099, call4100, var_suggestion);
            if4064 = call4101;
          } else {
            var if4102 = GraceDone;
            setLineNumber(1996);    // compilenode string
            var string4103 = new GraceString("while()do");
            var opresult4106 = callmethodChecked(var_methname, "==", [1], string4103);
            if (Grace_isTrue(opresult4106)) {
              setLineNumber(1997);    // compilenode string
              var string4107 = new GraceString(" {}");
              var call4108 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string4107, var_lastToken);
              setLineNumber(1998);    // compilenode string
              var string4109 = new GraceString("a while loop must have a body.");
              setLineNumber(1999);    // compilenode identifier
              var call4110 = callmethodChecked(var_sym, "line", [0]);
              var call4111 = callmethodChecked(var_sym, "linePos", [0]);
              setLineNumber(1998);    // compilenode identifier
              var call4112 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string4109, call4110, call4111, var_suggestion);
              if4102 = call4112;
            } else {
              var if4113 = GraceDone;
              setLineNumber(2000);    // compilenode string
              var string4114 = new GraceString("for()do");
              var opresult4117 = callmethodChecked(var_methname, "==", [1], string4114);
              if (Grace_isTrue(opresult4117)) {
                setLineNumber(2001);    // compilenode string
                var string4118 = new GraceString(" {}");
                var call4119 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string4118, var_lastToken);
                setLineNumber(2002);    // compilenode string
                var string4120 = new GraceString("a for loop must have a body.");
                setLineNumber(2003);    // compilenode identifier
                var call4121 = callmethodChecked(var_sym, "line", [0]);
                var call4122 = callmethodChecked(var_sym, "linePos", [0]);
                setLineNumber(2002);    // compilenode identifier
                var call4123 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string4120, call4121, call4122, var_suggestion);
                if4113 = call4123;
              } else {
                setLineNumber(2005);    // compilenode string
                var string4124 = new GraceString("()");
                var call4125 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string4124, var_lastToken);
                setLineNumber(2006);    // compilenode string
                var string4126 = new GraceString("a multi-part method request must end with '()'.");
                setLineNumber(2007);    // compilenode identifier
                var call4127 = callmethodChecked(var_sym, "line", [0]);
                var call4128 = callmethodChecked(var_sym, "linePos", [0]);
                setLineNumber(2006);    // compilenode identifier
                var call4129 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string4126, call4127, call4128, var_suggestion);
                if4113 = call4129;
              }
              if4102 = if4113;
            }
            if4064 = if4102;
          }
          if4060 = if4064;
        }
        if4056 = if4060;
      }
      setLineNumber(2011);    // compilenode string
      var string4130 = new GraceString("rparen");
      onSelf = true;
      var call4131 = callmethodChecked(this, "accept", [1], string4130);
      var var_isEmpty = call4131;
      var if4132 = GraceDone;
      setLineNumber(2012);    // compilenode identifier
      if (Grace_isTrue(var_isTerm)) {
        setLineNumber(2013);    // compilenode call
        onSelf = true;
        var call4133 = callmethodChecked(this, "term", [0]);
        if4132 = call4133;
      } else {
        var if4134 = GraceDone;
        setLineNumber(2015);    // compilenode string
        var string4135 = new GraceString("rparen");
        var call4137 = callmethodChecked(var_sym, "kind", [0]);
        var opresult4139 = callmethodChecked(call4137, "\u2260", [1], string4135);
        if (Grace_isTrue(opresult4139)) {
          var if4140 = GraceDone;
          setLineNumber(2016);    // compilenode block
          var block4141 = new GraceBlock(this, 2016, 0);
          block4141.real = function() {
            onSelf = true;
            var call4142 = callmethodChecked(this, "expression", [1], var_blocksOK);
            return call4142;
          };
          onSelf = true;
          var call4143 = callmethodChecked(this, "didConsume", [1], block4141);
          var call4144 = callmethodChecked(call4143, "not", [0]);
          if (Grace_isTrue(call4144)) {
            setLineNumber(2017);    // compilenode array
            var array4145 = new PrimitiveGraceList([]);
            var var_suggestions = array4145;
            setLineNumber(2018);    // compilenode identifier
            var call4146 = callmethodChecked(var_errormessages, "suggestion", [0]);
            var call4147 = callmethodChecked(call4146, "new", [0]);
            var var_suggestion = call4147;
            setLineNumber(2019);    // compilenode string
            var string4149 = new GraceString("rparen");
            var array4148 = new PrimitiveGraceList([string4149]);
            onSelf = true;
            var call4150 = callmethodChecked(this, "findNextValidToken", [1], array4148);
            var var_nextTok = call4150;
            var if4151 = GraceDone;
            setLineNumber(2020);    // compilenode identifier
            var opresult4154 = callmethodChecked(var_nextTok, "==", [1], var_sym);
            if (Grace_isTrue(opresult4154)) {
              setLineNumber(2021);    // compilenode string
              var string4155 = new GraceString("\u00abexpression\u00bb");
              var call4156 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string4155, var_lastToken);
              if4151 = call4156;
            } else {
              setLineNumber(2023);    // compilenode identifier
              var call4157 = callmethodChecked(var_nextTok, "prev", [0]);
              var string4158 = new GraceString("\u00abexpression\u00bb");
              var call4159 = callmethodChecked(var_suggestion, "replaceTokenRange()leading()trailing()with", [2, 1, 1, 1], var_sym, call4157, GraceTrue, GraceFalse, string4158);
              setLineNumber(2024);    // compilenode identifier
              var call4160 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
              setLineNumber(2025);    // compilenode identifier
              var call4161 = callmethodChecked(var_errormessages, "suggestion", [0]);
              var call4162 = callmethodChecked(call4161, "new", [0]);
              var_suggestion = call4162;
              setLineNumber(2026);    // compilenode identifier
              var call4163 = callmethodChecked(var_nextTok, "prev", [0]);
              var call4164 = callmethodChecked(var_suggestion, "deleteTokenRange()leading()trailing", [2, 1, 1], var_sym, call4163, GraceTrue, GraceFalse);
              if4151 = call4164;
            }
            setLineNumber(2028);    // compilenode identifier
            var call4165 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
            setLineNumber(2029);    // compilenode string
            var string4166 = new GraceString("a method request must have an expression or a ')' after a '('.");
            setLineNumber(2030);    // compilenode identifier
            var call4167 = callmethodChecked(var_sym, "line", [0]);
            var call4168 = callmethodChecked(var_sym, "linePos", [0]);
            setLineNumber(2029);    // compilenode identifier
            var call4169 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestions", [1, 2, 1], string4166, call4167, call4168, var_suggestions);
            if4140 = call4169;
          }
          if4134 = if4140;
        }
        setLineNumber(2033);    // compilenode block
        var block4170 = new GraceBlock(this, 2033, 0);
        block4170.real = function() {
          var string4171 = new GraceString("comma");
          onSelf = true;
          var call4172 = callmethodChecked(this, "accept", [1], string4171);
          return call4172;
        };
        var block4173 = new GraceBlock(this, 2033, 0);
        block4173.real = function() {
          setLineNumber(2034);    // compilenode identifier
          var call4174 = callmethodChecked(var_values, "pop", [0]);
          var_nxt = call4174;
          setLineNumber(2035);    // compilenode identifier
          var call4175 = callmethodChecked(var_part, "args", [0]);
          var call4176 = callmethodChecked(call4175, "push", [1], var_nxt);
          setLineNumber(2036);    // compilenode call
          onSelf = true;
          var call4177 = callmethodChecked(this, "next", [0]);
          var if4178 = GraceDone;
          setLineNumber(2037);    // compilenode block
          var block4179 = new GraceBlock(this, 2037, 0);
          block4179.real = function() {
            onSelf = true;
            var call4180 = callmethodChecked(this, "expression", [1], var_blocksOK);
            return call4180;
          };
          onSelf = true;
          var call4181 = callmethodChecked(this, "didConsume", [1], block4179);
          var call4182 = callmethodChecked(call4181, "not", [0]);
          if (Grace_isTrue(call4182)) {
            setLineNumber(2038);    // compilenode array
            var array4183 = new PrimitiveGraceList([]);
            var var_suggestions = array4183;
            setLineNumber(2039);    // compilenode identifier
            var call4184 = callmethodChecked(var_errormessages, "suggestion", [0]);
            var call4185 = callmethodChecked(call4184, "new", [0]);
            var var_suggestion = call4185;
            setLineNumber(2040);    // compilenode string
            var string4187 = new GraceString("rparen");
            var array4186 = new PrimitiveGraceList([string4187]);
            onSelf = true;
            var call4188 = callmethodChecked(this, "findNextValidToken", [1], array4186);
            var var_nextTok = call4188;
            var if4189 = GraceDone;
            setLineNumber(2041);    // compilenode identifier
            var opresult4192 = callmethodChecked(var_nextTok, "==", [1], var_sym);
            if (Grace_isTrue(opresult4192)) {
              setLineNumber(2042);    // compilenode string
              var string4193 = new GraceString(" \u00abexpression\u00bb");
              var call4194 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string4193, var_lastToken);
              if4189 = call4194;
            } else {
              setLineNumber(2044);    // compilenode identifier
              var call4195 = callmethodChecked(var_nextTok, "prev", [0]);
              var string4196 = new GraceString(" \u00abexpression\u00bb");
              var call4197 = callmethodChecked(var_suggestion, "replaceTokenRange()leading()trailing()with", [2, 1, 1, 1], var_sym, call4195, GraceTrue, GraceFalse, string4196);
              if4189 = call4197;
            }
            setLineNumber(2046);    // compilenode identifier
            var call4198 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
            setLineNumber(2047);    // compilenode identifier
            var call4199 = callmethodChecked(var_errormessages, "suggestion", [0]);
            var call4200 = callmethodChecked(call4199, "new", [0]);
            var_suggestion = call4200;
            setLineNumber(2048);    // compilenode identifier
            var call4201 = callmethodChecked(var_nextTok, "prev", [0]);
            var call4202 = callmethodChecked(var_suggestion, "deleteTokenRange()leading()trailing", [2, 1, 1], var_lastToken, call4201, GraceTrue, GraceFalse);
            setLineNumber(2049);    // compilenode identifier
            var call4203 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
            setLineNumber(2050);    // compilenode string
            var string4204 = new GraceString("a method request must have an expression after a ','.");
            setLineNumber(2051);    // compilenode identifier
            var call4205 = callmethodChecked(var_sym, "line", [0]);
            var call4206 = callmethodChecked(var_sym, "linePos", [0]);
            setLineNumber(2050);    // compilenode identifier
            var call4207 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestions", [1, 2, 1], string4204, call4205, call4206, var_suggestions);
            if4178 = call4207;
          }
          return if4178;
        };
        var call4208 = callmethodChecked(var_prelude, "while()do", [1, 1], block4170, block4173);
        if4132 = call4208;
      }
      var if4209 = GraceDone;
      setLineNumber(2055);    // compilenode identifier
      var call4210 = callmethodChecked(var_isEmpty, "prefix!", [0]);
      if (Grace_isTrue(call4210)) {
        setLineNumber(2056);    // compilenode identifier
        var call4211 = callmethodChecked(var_values, "pop", [0]);
        var_nxt = call4211;
        setLineNumber(2057);    // compilenode identifier
        var call4212 = callmethodChecked(var_part, "args", [0]);
        var call4213 = callmethodChecked(call4212, "push", [1], var_nxt);
        if4209 = call4213;
      }
      var if4214 = GraceDone;
      setLineNumber(2059);    // compilenode identifier
      var call4215 = callmethodChecked(var_isTerm, "not", [0]);
      if (Grace_isTrue(call4215)) {
        var if4216 = GraceDone;
        setLineNumber(2060);    // compilenode string
        var string4217 = new GraceString("rparen");
        var call4219 = callmethodChecked(var_sym, "kind", [0]);
        var opresult4221 = callmethodChecked(call4219, "\u2260", [1], string4217);
        if (Grace_isTrue(opresult4221)) {
          setLineNumber(2061);    // compilenode call
          onSelf = true;
          var call4222 = callmethodChecked(this, "checkBadOperators", [0]);
          setLineNumber(2062);    // compilenode identifier
          var call4223 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call4224 = callmethodChecked(call4223, "new", [0]);
          var var_suggestion = call4224;
          setLineNumber(2063);    // compilenode string
          var string4225 = new GraceString(")");
          var call4226 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string4225, var_lastToken);
          setLineNumber(2064);    // compilenode string
          var string4227 = new GraceString("a part of a multi-part method request beginning with a '(' must end with a ')'.");
          setLineNumber(2065);    // compilenode identifier
          var call4228 = callmethodChecked(var_lastToken, "line", [0]);
          var call4229 = callmethodChecked(var_lastToken, "size", [0]);
          var call4231 = callmethodChecked(var_lastToken, "linePos", [0]);
          var opresult4233 = callmethodChecked(call4231, "+", [1], call4229);
          setLineNumber(2064);    // compilenode identifier
          var call4234 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string4227, call4228, opresult4233, var_suggestion);
          if4216 = call4234;
        }
        if4214 = if4216;
      }
      var if4235 = GraceDone;
      setLineNumber(2068);    // compilenode identifier
      var call4236 = callmethodChecked(var_isTerm, "not", [0]);
      var string4238 = new GraceString("rparen");
      onSelf = true;
      var call4239 = callmethodChecked(this, "accept", [1], string4238);
      var opresult4241 = callmethodChecked(call4239, "&&", [1], call4236);
      if (Grace_isTrue(opresult4241)) {
        setLineNumber(2069);    // compilenode call
        onSelf = true;
        var call4242 = callmethodChecked(this, "next", [0]);
        if4235 = call4242;
      }
      return if4235;
    };
    var call4243 = callmethodChecked(var_prelude, "while()do", [1, 1], block4032, block4040);
    setLineNumber(2072);    // compilenode identifier
    var call4244 = callmethodChecked(var_ast, "identifierNode", [0]);
    var call4245 = callmethodChecked(call4244, "new", [2], var_methname, GraceFalse);
    var var_meth__39__ = call4245;
    setLineNumber(2073);    // compilenode identifier
    var call4246 = callmethodChecked(var_meth, "line", [0]);
    var call4247 = callmethodChecked(var_meth__39__, "line:=", [1], call4246);
    setLineNumber(2074);    // compilenode identifier
    var call4248 = callmethodChecked(var_meth, "linePos", [0]);
    var call4249 = callmethodChecked(var_meth__39__, "linePos:=", [1], call4248);
    setLineNumber(2075);    // compilenode identifier
    return var_meth__39__;
  };
  func4029.paramCounts = [3];
  this.methods["callmprest"] = func4029;
  func4029.definitionLine = 1957;
  func4029.definitionModule = "parser";
  setLineNumber(2079);    // compilenode method
  var func4250 = function(argcv) {    // method defdec
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for defdec"));
    setModuleName("parser");
    var if4251 = GraceDone;
    setLineNumber(2080);    // compilenode string
    var string4252 = new GraceString("def");
    onSelf = true;
    var call4253 = callmethodChecked(this, "acceptKeyword", [1], string4252);
    if (Grace_isTrue(call4253)) {
      setLineNumber(2081);    // compilenode identifier
      var call4254 = callmethodChecked(var_sym, "line", [0]);
      var var_line = call4254;
      setLineNumber(2082);    // compilenode identifier
      var call4255 = callmethodChecked(var_sym, "linePos", [0]);
      var var_pos = call4255;
      setLineNumber(2083);    // compilenode identifier
      var var_defTok = var_sym;
      setLineNumber(2084);    // compilenode call
      onSelf = true;
      var call4256 = callmethodChecked(this, "next", [0]);
      var if4257 = GraceDone;
      setLineNumber(2085);    // compilenode string
      var string4258 = new GraceString("identifier");
      var call4260 = callmethodChecked(var_sym, "kind", [0]);
      var opresult4262 = callmethodChecked(call4260, "\u2260", [1], string4258);
      if (Grace_isTrue(opresult4262)) {
        setLineNumber(2086);    // compilenode identifier
        var call4263 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call4264 = callmethodChecked(call4263, "new", [0]);
        var var_suggestion = call4264;
        setLineNumber(2087);    // compilenode block
        var block4265 = new GraceBlock(this, 2087, 1);
        setLineNumber(1);    // compilenode identifier
        block4265.real = function(var_t) {
          setLineNumber(2088);    // compilenode identifier
          var call4266 = callmethodChecked(var_sym, "line", [0]);
          var call4268 = callmethodChecked(var_t, "line", [0]);
          var opresult4270 = callmethodChecked(call4268, "==", [1], call4266);
          var string4272 = new GraceString("=");
          var call4274 = callmethodChecked(var_t, "value", [0]);
          var opresult4276 = callmethodChecked(call4274, "==", [1], string4272);
          setLineNumber(2087);    // compilenode string
          var string4278 = new GraceString("op");
          var call4280 = callmethodChecked(var_t, "kind", [0]);
          var opresult4282 = callmethodChecked(call4280, "==", [1], string4278);
          var opresult4284 = callmethodChecked(opresult4282, "&&", [1], opresult4276);
          var opresult4286 = callmethodChecked(opresult4284, "&&", [1], opresult4270);
          return opresult4286;
        };
        onSelf = true;
        var call4287 = callmethodChecked(this, "findNextToken", [1], block4265);
        var var_nextToken = call4287;
        var if4288 = GraceDone;
        setLineNumber(2089);    // compilenode identifier
        var opresult4291 = callmethodChecked(GraceFalse, "==", [1], var_nextToken);
        if (Grace_isTrue(opresult4291)) {
          setLineNumber(2090);    // compilenode string
          var string4292 = new GraceString(" \u00abname\u00bb =");
          var call4293 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string4292, var_lastToken);
          if4288 = call4293;
        } else {
          var if4294 = GraceDone;
          setLineNumber(2091);    // compilenode identifier
          var opresult4297 = callmethodChecked(var_nextToken, "==", [1], var_sym);
          if (Grace_isTrue(opresult4297)) {
            setLineNumber(2092);    // compilenode string
            var string4298 = new GraceString(" \u00abname\u00bb");
            var call4299 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string4298, var_lastToken);
            if4294 = call4299;
          } else {
            setLineNumber(2094);    // compilenode identifier
            var call4300 = callmethodChecked(var_nextToken, "prev", [0]);
            setLineNumber(2095);    // compilenode string
            var string4301 = new GraceString("\u00abname\u00bb ");
            setLineNumber(2094);    // compilenode identifier
            var call4302 = callmethodChecked(var_suggestion, "replaceTokenRange()leading()trailing()with", [2, 1, 1, 1], var_sym, call4300, GraceFalse, GraceTrue, string4301);
            if4294 = call4302;
          }
          if4288 = if4294;
        }
        setLineNumber(2098);    // compilenode string
        var string4303 = new GraceString("and a value after the 'def'.");
        setLineNumber(2097);    // compilenode string
        var string4305 = new GraceString("a definition must have a name, '=', ");
        var opresult4307 = callmethodChecked(string4305, "++", [1], string4303);
        setLineNumber(2098);    // compilenode identifier
        var call4308 = callmethodChecked(var_sym, "line", [0]);
        var call4309 = callmethodChecked(var_sym, "linePos", [0]);
        setLineNumber(2097);    // compilenode identifier
        var call4310 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], opresult4307, call4308, call4309, var_suggestion);
        if4257 = call4310;
      }
      setLineNumber(2101);    // compilenode call
      onSelf = true;
      var call4311 = callmethodChecked(this, "pushidentifier", [0]);
      setLineNumber(2102);    // compilenode identifier
      var var_val = GraceFalse;
      setLineNumber(2103);    // compilenode identifier
      var call4312 = callmethodChecked(var_values, "pop", [0]);
      var var_name = call4312;
      setLineNumber(2104);    // compilenode identifier
      var call4313 = callmethodChecked(var_name, "isBindingOccurrence:=", [1], GraceTrue);
      setLineNumber(2105);    // compilenode call
      onSelf = true;
      var call4314 = callmethodChecked(this, "optionalTypeAnnotation", [0]);
      var var_dtype = call4314;
      setLineNumber(2106);    // compilenode call
      onSelf = true;
      var call4315 = callmethodChecked(this, "doannotation", [0]);
      var var_anns = call4315;
      var if4316 = GraceDone;
      setLineNumber(2107);    // compilenode string
      var string4317 = new GraceString("=");
      var call4319 = callmethodChecked(var_sym, "value", [0]);
      var opresult4321 = callmethodChecked(call4319, "==", [1], string4317);
      var string4323 = new GraceString("op");
      onSelf = true;
      var call4324 = callmethodChecked(this, "accept", [1], string4323);
      var opresult4326 = callmethodChecked(call4324, "&&", [1], opresult4321);
      if (Grace_isTrue(opresult4326)) {
        setLineNumber(2108);    // compilenode call
        onSelf = true;
        var call4327 = callmethodChecked(this, "next", [0]);
        var if4328 = GraceDone;
        setLineNumber(2109);    // compilenode block
        var block4329 = new GraceBlock(this, 2109, 0);
        block4329.real = function() {
          onSelf = true;
          var call4330 = callmethodChecked(this, "expression", [1], var_blocksOK);
          return call4330;
        };
        onSelf = true;
        var call4331 = callmethodChecked(this, "didConsume", [1], block4329);
        var call4332 = callmethodChecked(call4331, "not", [0]);
        if (Grace_isTrue(call4332)) {
          setLineNumber(2110);    // compilenode identifier
          var call4333 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call4334 = callmethodChecked(call4333, "new", [0]);
          var var_suggestion = call4334;
          setLineNumber(2111);    // compilenode array
          var array4335 = new PrimitiveGraceList([]);
          onSelf = true;
          var call4336 = callmethodChecked(this, "findNextValidToken", [1], array4335);
          var var_nextTok = call4336;
          var if4337 = GraceDone;
          setLineNumber(2112);    // compilenode identifier
          var opresult4340 = callmethodChecked(var_nextTok, "==", [1], var_sym);
          if (Grace_isTrue(opresult4340)) {
            setLineNumber(2113);    // compilenode string
            var string4341 = new GraceString(" \u00abexpression\u00bb");
            var call4342 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string4341, var_lastToken);
            if4337 = call4342;
          } else {
            setLineNumber(2115);    // compilenode identifier
            var call4343 = callmethodChecked(var_nextTok, "prev", [0]);
            setLineNumber(2116);    // compilenode string
            var string4344 = new GraceString(" \u00abexpression\u00bb");
            setLineNumber(2115);    // compilenode identifier
            var call4345 = callmethodChecked(var_suggestion, "replaceTokenRange()leading()trailing()with", [2, 1, 1, 1], var_sym, call4343, GraceTrue, GraceFalse, string4344);
            if4337 = call4345;
          }
          setLineNumber(2118);    // compilenode string
          var string4346 = new GraceString("a definition must have a value after the '='.");
          setLineNumber(2119);    // compilenode identifier
          var call4347 = callmethodChecked(var_lastToken, "line", [0]);
          var call4348 = callmethodChecked(var_lastToken, "size", [0]);
          var call4350 = callmethodChecked(var_lastToken, "linePos", [0]);
          var opresult4352 = callmethodChecked(call4350, "+", [1], call4348);
          setLineNumber(2118);    // compilenode identifier
          var call4353 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string4346, call4347, opresult4352, var_suggestion);
          if4328 = call4353;
        }
        setLineNumber(2122);    // compilenode identifier
        var call4354 = callmethodChecked(var_values, "pop", [0]);
        var_val = call4354;
        if4316 = GraceDone;
      } else {
        var if4355 = GraceDone;
        setLineNumber(2123);    // compilenode string
        var string4356 = new GraceString("bind");
        onSelf = true;
        var call4357 = callmethodChecked(this, "accept", [1], string4356);
        if (Grace_isTrue(call4357)) {
          setLineNumber(2124);    // compilenode array
          var array4358 = new PrimitiveGraceList([]);
          var var_suggestions = array4358;
          setLineNumber(2125);    // compilenode identifier
          var call4359 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call4360 = callmethodChecked(call4359, "new", [0]);
          var var_suggestion = call4360;
          setLineNumber(2126);    // compilenode string
          var string4361 = new GraceString("=");
          var call4362 = callmethodChecked(var_suggestion, "replaceToken()with", [1, 1], var_sym, string4361);
          setLineNumber(2127);    // compilenode identifier
          var call4363 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
          setLineNumber(2128);    // compilenode identifier
          var call4364 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call4365 = callmethodChecked(call4364, "new", [0]);
          var_suggestion = call4365;
          setLineNumber(2129);    // compilenode string
          var string4366 = new GraceString("var");
          var call4367 = callmethodChecked(var_suggestion, "replaceToken()with", [1, 1], var_defTok, string4366);
          setLineNumber(2130);    // compilenode identifier
          var call4368 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
          setLineNumber(2132);    // compilenode string
          var string4369 = new GraceString("A variable declaration uses 'var' and ':='.");
          setLineNumber(2131);    // compilenode string
          var string4371 = new GraceString("a definition must use '=' instead of ':='. ");
          var opresult4373 = callmethodChecked(string4371, "++", [1], string4369);
          setLineNumber(2133);    // compilenode identifier
          var call4374 = callmethodChecked(var_sym, "line", [0]);
          var call4375 = callmethodChecked(var_sym, "linePos", [0]);
          var call4377 = callmethodChecked(var_sym, "linePos", [0]);
          var opresult4379 = callmethodChecked(call4377, "+", [1], new GraceNum(1));
          setLineNumber(2131);    // compilenode identifier
          var call4380 = callmethodChecked(var_errormessages, "syntaxError()atRange()withSuggestions", [1, 3, 1], opresult4373, call4374, call4375, opresult4379, var_suggestions);
          if4355 = call4380;
        } else {
          setLineNumber(2135);    // compilenode array
          var array4381 = new PrimitiveGraceList([]);
          var var_suggestions = array4381;
          setLineNumber(2136);    // compilenode identifier
          var call4382 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call4383 = callmethodChecked(call4382, "new", [0]);
          var var_suggestion = call4383;
          setLineNumber(2137);    // compilenode string
          var string4384 = new GraceString(" = \u00abexpression\u00bb");
          var call4385 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string4384, var_lastToken);
          setLineNumber(2138);    // compilenode identifier
          var call4386 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
          setLineNumber(2139);    // compilenode identifier
          var call4387 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call4388 = callmethodChecked(call4387, "new", [0]);
          var_suggestion = call4388;
          setLineNumber(2140);    // compilenode string
          var string4389 = new GraceString("var");
          var call4390 = callmethodChecked(var_suggestion, "replaceToken()with", [1, 1], var_defTok, string4389);
          setLineNumber(2141);    // compilenode identifier
          var call4391 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
          setLineNumber(2143);    // compilenode string
          var string4392 = new GraceString("A variable declaration does not require a value but uses 'var', not 'def'.");
          setLineNumber(2142);    // compilenode string
          var string4394 = new GraceString("a definition must have '=' and a value after the name. ");
          var opresult4396 = callmethodChecked(string4394, "++", [1], string4392);
          setLineNumber(2144);    // compilenode identifier
          var call4397 = callmethodChecked(var_sym, "line", [0]);
          var call4398 = callmethodChecked(var_sym, "linePos", [0]);
          setLineNumber(2142);    // compilenode identifier
          var call4399 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestions", [1, 2, 1], opresult4396, call4397, call4398, var_suggestions);
          if4355 = call4399;
        }
        if4316 = if4355;
      }
      setLineNumber(2146);    // compilenode identifier
      var call4400 = callmethodChecked(var_defTok, "line", [0]);
      var call4401 = callmethodChecked(var_defTok, "linePos", [0]);
      var call4402 = callmethodChecked(var_util, "setPosition", [2], call4400, call4401);
      setLineNumber(2147);    // compilenode identifier
      var call4403 = callmethodChecked(var_ast, "defDecNode", [0]);
      var call4404 = callmethodChecked(call4403, "new", [3], var_name, var_val, var_dtype);
      var var_o = call4404;
      var if4405 = GraceDone;
      setLineNumber(2148);    // compilenode identifier
      var opresult4408 = callmethodChecked(GraceFalse, "\u2260", [1], var_anns);
      if (Grace_isTrue(opresult4408)) {
        var call4409 = callmethodChecked(var_o, "annotations", [0]);
        var call4410 = callmethodChecked(call4409, "addAll", [1], var_anns);
        if4405 = call4410;
      }
      setLineNumber(2149);    // compilenode identifier
      var call4411 = callmethodChecked(var_o, "startToken:=", [1], var_defTok);
      setLineNumber(2150);    // compilenode identifier
      var call4412 = callmethodChecked(var_values, "push", [1], var_o);
      setLineNumber(2151);    // compilenode call
      onSelf = true;
      var call4413 = callmethodChecked(this, "reconcileComments", [0]);
      if4251 = call4413;
    }
    return if4251;
  };
  func4250.paramCounts = [0];
  this.methods["defdec"] = func4250;
  func4250.definitionLine = 2079;
  func4250.definitionModule = "parser";
  setLineNumber(2156);    // compilenode method
  var func4414 = function(argcv) {    // method vardec
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for vardec"));
    setModuleName("parser");
    var if4415 = GraceDone;
    setLineNumber(2157);    // compilenode string
    var string4416 = new GraceString("var");
    onSelf = true;
    var call4417 = callmethodChecked(this, "acceptKeyword", [1], string4416);
    if (Grace_isTrue(call4417)) {
      setLineNumber(2158);    // compilenode identifier
      var call4418 = callmethodChecked(var_sym, "line", [0]);
      var var_line = call4418;
      setLineNumber(2159);    // compilenode identifier
      var call4419 = callmethodChecked(var_sym, "linePos", [0]);
      var var_pos = call4419;
      setLineNumber(2160);    // compilenode identifier
      var var_varTok = var_sym;
      setLineNumber(2161);    // compilenode call
      onSelf = true;
      var call4420 = callmethodChecked(this, "next", [0]);
      var if4421 = GraceDone;
      setLineNumber(2162);    // compilenode string
      var string4422 = new GraceString("identifier");
      var call4424 = callmethodChecked(var_sym, "kind", [0]);
      var opresult4426 = callmethodChecked(call4424, "\u2260", [1], string4422);
      if (Grace_isTrue(opresult4426)) {
        setLineNumber(2163);    // compilenode identifier
        var call4427 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call4428 = callmethodChecked(call4427, "new", [0]);
        var var_suggestion = call4428;
        setLineNumber(2164);    // compilenode block
        var block4429 = new GraceBlock(this, 2164, 1);
        setLineNumber(1);    // compilenode identifier
        block4429.real = function(var_t) {
          setLineNumber(2165);    // compilenode identifier
          var call4430 = callmethodChecked(var_sym, "line", [0]);
          var call4432 = callmethodChecked(var_t, "line", [0]);
          var opresult4434 = callmethodChecked(call4432, "==", [1], call4430);
          setLineNumber(2164);    // compilenode string
          var string4436 = new GraceString("bind");
          var call4438 = callmethodChecked(var_t, "kind", [0]);
          var opresult4440 = callmethodChecked(call4438, "==", [1], string4436);
          var opresult4442 = callmethodChecked(opresult4440, "&&", [1], opresult4434);
          return opresult4442;
        };
        onSelf = true;
        var call4443 = callmethodChecked(this, "findNextToken", [1], block4429);
        var var_nextToken = call4443;
        var if4444 = GraceDone;
        setLineNumber(2166);    // compilenode block
        var block4445 = new GraceBlock(this, 2166, 0);
        block4445.real = function() {
          var opresult4448 = callmethodChecked(var_nextToken, "==", [1], var_sym);
          return opresult4448;
        };
        var opresult4452 = callmethodChecked(GraceFalse, "==", [1], var_nextToken);
        var opresult4454 = callmethodChecked(opresult4452, "||", [1], block4445);
        if (Grace_isTrue(opresult4454)) {
          setLineNumber(2167);    // compilenode string
          var string4455 = new GraceString(" \u00abname\u00bb");
          var call4456 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string4455, var_lastToken);
          if4444 = call4456;
        } else {
          setLineNumber(2169);    // compilenode identifier
          var call4457 = callmethodChecked(var_nextToken, "prev", [0]);
          setLineNumber(2170);    // compilenode string
          var string4458 = new GraceString("\u00abname\u00bb ");
          setLineNumber(2169);    // compilenode identifier
          var call4459 = callmethodChecked(var_suggestion, "replaceTokenRange()leading()trailing()with", [2, 1, 1, 1], var_sym, call4457, GraceFalse, GraceTrue, string4458);
          if4444 = call4459;
        }
        setLineNumber(2172);    // compilenode string
        var string4460 = new GraceString("a variable declaration must have a name after the 'var'.");
        setLineNumber(2173);    // compilenode identifier
        var call4461 = callmethodChecked(var_sym, "line", [0]);
        var call4462 = callmethodChecked(var_sym, "linePos", [0]);
        setLineNumber(2172);    // compilenode identifier
        var call4463 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string4460, call4461, call4462, var_suggestion);
        if4421 = call4463;
      }
      setLineNumber(2175);    // compilenode call
      onSelf = true;
      var call4464 = callmethodChecked(this, "pushidentifier", [0]);
      setLineNumber(2176);    // compilenode identifier
      var var_val = GraceFalse;
      setLineNumber(2177);    // compilenode identifier
      var call4465 = callmethodChecked(var_values, "pop", [0]);
      var var_name = call4465;
      setLineNumber(2178);    // compilenode identifier
      var call4466 = callmethodChecked(var_name, "isBindingOccurrence:=", [1], GraceTrue);
      setLineNumber(2179);    // compilenode call
      onSelf = true;
      var call4467 = callmethodChecked(this, "optionalTypeAnnotation", [0]);
      var var_dtype = call4467;
      setLineNumber(2180);    // compilenode call
      onSelf = true;
      var call4468 = callmethodChecked(this, "doannotation", [0]);
      var var_anns = call4468;
      var if4469 = GraceDone;
      setLineNumber(2181);    // compilenode string
      var string4470 = new GraceString("bind");
      onSelf = true;
      var call4471 = callmethodChecked(this, "accept", [1], string4470);
      if (Grace_isTrue(call4471)) {
        setLineNumber(2182);    // compilenode call
        onSelf = true;
        var call4472 = callmethodChecked(this, "next", [0]);
        var if4473 = GraceDone;
        setLineNumber(2183);    // compilenode block
        var block4474 = new GraceBlock(this, 2183, 0);
        block4474.real = function() {
          onSelf = true;
          var call4475 = callmethodChecked(this, "expression", [1], var_blocksOK);
          return call4475;
        };
        onSelf = true;
        var call4476 = callmethodChecked(this, "didConsume", [1], block4474);
        var call4477 = callmethodChecked(call4476, "not", [0]);
        if (Grace_isTrue(call4477)) {
          setLineNumber(2184);    // compilenode array
          var array4478 = new PrimitiveGraceList([]);
          var var_suggestions = array4478;
          setLineNumber(2185);    // compilenode identifier
          var call4479 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call4480 = callmethodChecked(call4479, "new", [0]);
          var var_suggestion = call4480;
          setLineNumber(2186);    // compilenode array
          var array4481 = new PrimitiveGraceList([]);
          onSelf = true;
          var call4482 = callmethodChecked(this, "findNextValidToken", [1], array4481);
          var var_nextTok = call4482;
          var if4483 = GraceDone;
          setLineNumber(2187);    // compilenode identifier
          var opresult4486 = callmethodChecked(var_nextTok, "==", [1], var_sym);
          if (Grace_isTrue(opresult4486)) {
            setLineNumber(2188);    // compilenode string
            var string4487 = new GraceString(" \u00abexpression\u00bb");
            var call4488 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string4487, var_lastToken);
            if4483 = call4488;
          } else {
            setLineNumber(2190);    // compilenode identifier
            var call4489 = callmethodChecked(var_nextTok, "prev", [0]);
            setLineNumber(2191);    // compilenode string
            var string4490 = new GraceString(" \u00abexpression\u00bb");
            setLineNumber(2190);    // compilenode identifier
            var call4491 = callmethodChecked(var_suggestion, "replaceTokenRange()leading()trailing()with", [2, 1, 1, 1], var_sym, call4489, GraceTrue, GraceFalse, string4490);
            if4483 = call4491;
          }
          setLineNumber(2193);    // compilenode identifier
          var call4492 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
          setLineNumber(2194);    // compilenode identifier
          var call4493 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call4494 = callmethodChecked(call4493, "new", [0]);
          var_suggestion = call4494;
          setLineNumber(2195);    // compilenode identifier
          var call4495 = callmethodChecked(var_nextTok, "prev", [0]);
          var call4496 = callmethodChecked(var_suggestion, "deleteTokenRange()leading()trailing", [2, 1, 1], var_lastToken, call4495, GraceTrue, GraceFalse);
          setLineNumber(2196);    // compilenode identifier
          var call4497 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
          setLineNumber(2198);    // compilenode string
          var string4498 = new GraceString("A variable without a value can be declared with 'var' followed only by the variable name.");
          setLineNumber(2197);    // compilenode string
          var string4500 = new GraceString("a variable declaration must have a value after the ':='. ");
          var opresult4502 = callmethodChecked(string4500, "++", [1], string4498);
          setLineNumber(2199);    // compilenode identifier
          var call4503 = callmethodChecked(var_lastToken, "line", [0]);
          var call4504 = callmethodChecked(var_lastToken, "size", [0]);
          var call4506 = callmethodChecked(var_lastToken, "linePos", [0]);
          var opresult4508 = callmethodChecked(call4506, "+", [1], call4504);
          setLineNumber(2197);    // compilenode identifier
          var call4509 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestions", [1, 2, 1], opresult4502, call4503, opresult4508, var_suggestions);
          if4473 = call4509;
        }
        setLineNumber(2201);    // compilenode identifier
        var call4510 = callmethodChecked(var_values, "pop", [0]);
        var_val = call4510;
        if4469 = GraceDone;
      } else {
        var if4511 = GraceDone;
        setLineNumber(2203);    // compilenode string
        var string4512 = new GraceString("=");
        var call4514 = callmethodChecked(var_sym, "value", [0]);
        var opresult4516 = callmethodChecked(call4514, "==", [1], string4512);
        var string4518 = new GraceString("op");
        onSelf = true;
        var call4519 = callmethodChecked(this, "accept", [1], string4518);
        var opresult4521 = callmethodChecked(call4519, "&&", [1], opresult4516);
        if (Grace_isTrue(opresult4521)) {
          setLineNumber(2204);    // compilenode array
          var array4522 = new PrimitiveGraceList([]);
          var var_suggestions = array4522;
          setLineNumber(2205);    // compilenode identifier
          var call4523 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call4524 = callmethodChecked(call4523, "new", [0]);
          var var_suggestion = call4524;
          setLineNumber(2206);    // compilenode string
          var string4525 = new GraceString(":=");
          var call4526 = callmethodChecked(var_suggestion, "replaceToken()with", [1, 1], var_sym, string4525);
          setLineNumber(2207);    // compilenode identifier
          var call4527 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
          setLineNumber(2208);    // compilenode identifier
          var call4528 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call4529 = callmethodChecked(call4528, "new", [0]);
          var_suggestion = call4529;
          setLineNumber(2209);    // compilenode string
          var string4530 = new GraceString("def");
          var call4531 = callmethodChecked(var_suggestion, "replaceToken()with", [1, 1], var_varTok, string4530);
          setLineNumber(2210);    // compilenode identifier
          var call4532 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
          setLineNumber(2211);    // compilenode string
          var string4533 = new GraceString("a variable declaration must use ':=' instead of '='. A definition uses 'def' and '='.");
          setLineNumber(2212);    // compilenode identifier
          var call4534 = callmethodChecked(var_sym, "line", [0]);
          var call4535 = callmethodChecked(var_sym, "linePos", [0]);
          var call4536 = callmethodChecked(var_sym, "linePos", [0]);
          setLineNumber(2211);    // compilenode identifier
          var call4537 = callmethodChecked(var_errormessages, "syntaxError()atRange()withSuggestions", [1, 3, 1], string4533, call4534, call4535, call4536, var_suggestions);
          if4511 = call4537;
        }
        if4469 = if4511;
      }
      setLineNumber(2216);    // compilenode identifier
      var call4538 = callmethodChecked(var_util, "setPosition", [2], var_line, var_pos);
      setLineNumber(2217);    // compilenode identifier
      var call4539 = callmethodChecked(var_ast, "varDecNode", [0]);
      var call4540 = callmethodChecked(call4539, "new", [3], var_name, var_val, var_dtype);
      var var_o = call4540;
      var if4541 = GraceDone;
      setLineNumber(2218);    // compilenode identifier
      var opresult4544 = callmethodChecked(GraceFalse, "\u2260", [1], var_anns);
      if (Grace_isTrue(opresult4544)) {
        var call4545 = callmethodChecked(var_o, "annotations", [0]);
        var call4546 = callmethodChecked(call4545, "addAll", [1], var_anns);
        if4541 = call4546;
      }
      setLineNumber(2219);    // compilenode identifier
      var call4547 = callmethodChecked(var_values, "push", [1], var_o);
      setLineNumber(2220);    // compilenode call
      onSelf = true;
      var call4548 = callmethodChecked(this, "reconcileComments", [0]);
      if4415 = call4548;
    }
    return if4415;
  };
  func4414.paramCounts = [0];
  this.methods["vardec"] = func4414;
  func4414.definitionLine = 2156;
  func4414.definitionModule = "parser";
  setLineNumber(2225);    // compilenode method
  var func4549 = function(argcv) {    // method doarray
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for doarray"));
    setModuleName("parser");
    var if4550 = GraceDone;
    setLineNumber(2226);    // compilenode string
    var string4551 = new GraceString("lsquare");
    onSelf = true;
    var call4552 = callmethodChecked(this, "accept", [1], string4551);
    if (Grace_isTrue(call4552)) {
      setLineNumber(2227);    // compilenode call
      onSelf = true;
      var call4553 = callmethodChecked(this, "next", [0]);
      setLineNumber(2228);    // compilenode vardec
      var var_tmp;
      setLineNumber(2229);    // compilenode array
      var array4554 = new PrimitiveGraceList([]);
      var var_params = array4554;
      setLineNumber(2230);    // compilenode block
      var block4555 = new GraceBlock(this, 2230, 0);
      block4555.real = function() {
        onSelf = true;
        var call4556 = callmethodChecked(this, "expression", [1], var_blocksOK);
        return call4556;
      };
      var block4557 = new GraceBlock(this, 2230, 0);
      block4557.real = function() {
        setLineNumber(2231);    // compilenode block
        var block4558 = new GraceBlock(this, 2231, 0);
        block4558.real = function() {
          var string4559 = new GraceString("comma");
          onSelf = true;
          var call4560 = callmethodChecked(this, "accept", [1], string4559);
          return call4560;
        };
        var block4561 = new GraceBlock(this, 2231, 0);
        block4561.real = function() {
          setLineNumber(2232);    // compilenode identifier
          var call4562 = callmethodChecked(var_values, "pop", [0]);
          var_tmp = call4562;
          setLineNumber(2233);    // compilenode identifier
          var call4563 = callmethodChecked(var_params, "push", [1], var_tmp);
          setLineNumber(2234);    // compilenode call
          onSelf = true;
          var call4564 = callmethodChecked(this, "next", [0]);
          var if4565 = GraceDone;
          setLineNumber(2235);    // compilenode block
          var block4566 = new GraceBlock(this, 2235, 0);
          block4566.real = function() {
            onSelf = true;
            var call4567 = callmethodChecked(this, "expression", [1], var_blocksOK);
            return call4567;
          };
          onSelf = true;
          var call4568 = callmethodChecked(this, "didConsume", [1], block4566);
          var call4569 = callmethodChecked(call4568, "not", [0]);
          if (Grace_isTrue(call4569)) {
            setLineNumber(2236);    // compilenode array
            var array4570 = new PrimitiveGraceList([]);
            var var_suggestions = array4570;
            setLineNumber(2237);    // compilenode identifier
            var call4571 = callmethodChecked(var_errormessages, "suggestion", [0]);
            var call4572 = callmethodChecked(call4571, "new", [0]);
            var var_suggestion = call4572;
            setLineNumber(2238);    // compilenode string
            var string4574 = new GraceString("rsquare");
            var array4573 = new PrimitiveGraceList([string4574]);
            onSelf = true;
            var call4575 = callmethodChecked(this, "findNextValidToken", [1], array4573);
            var var_nextTok = call4575;
            var if4576 = GraceDone;
            setLineNumber(2239);    // compilenode identifier
            var opresult4579 = callmethodChecked(var_nextTok, "==", [1], var_sym);
            if (Grace_isTrue(opresult4579)) {
              setLineNumber(2240);    // compilenode string
              var string4580 = new GraceString(" \u00abexpression\u00bb");
              var call4581 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string4580, var_lastToken);
              if4576 = call4581;
            } else {
              setLineNumber(2242);    // compilenode identifier
              var call4582 = callmethodChecked(var_nextTok, "prev", [0]);
              var string4583 = new GraceString(" \u00abexpression\u00bb");
              var call4584 = callmethodChecked(var_suggestion, "replaceTokenRange()leading()trailing()with", [2, 1, 1, 1], var_sym, call4582, GraceTrue, GraceFalse, string4583);
              if4576 = call4584;
            }
            setLineNumber(2244);    // compilenode identifier
            var call4585 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
            setLineNumber(2245);    // compilenode identifier
            var call4586 = callmethodChecked(var_errormessages, "suggestion", [0]);
            var call4587 = callmethodChecked(call4586, "new", [0]);
            var_suggestion = call4587;
            setLineNumber(2246);    // compilenode identifier
            var call4588 = callmethodChecked(var_nextTok, "prev", [0]);
            var call4589 = callmethodChecked(var_suggestion, "deleteTokenRange()leading()trailing", [2, 1, 1], var_lastToken, call4588, GraceTrue, GraceFalse);
            setLineNumber(2247);    // compilenode identifier
            var call4590 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
            setLineNumber(2248);    // compilenode string
            var string4591 = new GraceString("a Lineup must contain zero or more expressions separated by commas.");
            setLineNumber(2249);    // compilenode identifier
            var call4592 = callmethodChecked(var_sym, "line", [0]);
            var call4593 = callmethodChecked(var_sym, "linePos", [0]);
            setLineNumber(2248);    // compilenode identifier
            var call4594 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestions", [1, 2, 1], string4591, call4592, call4593, var_suggestions);
            if4565 = call4594;
          }
          return if4565;
        };
        var call4595 = callmethodChecked(var_prelude, "while()do", [1, 1], block4558, block4561);
        setLineNumber(2252);    // compilenode identifier
        var call4596 = callmethodChecked(var_values, "pop", [0]);
        var_tmp = call4596;
        setLineNumber(2253);    // compilenode identifier
        var call4597 = callmethodChecked(var_params, "push", [1], var_tmp);
        return call4597;
      };
      onSelf = true;
      var call4598 = callmethodChecked(this, "ifConsume()then", [1, 1], block4555, block4557);
      var if4599 = GraceDone;
      setLineNumber(2255);    // compilenode string
      var string4600 = new GraceString("rsquare");
      var call4602 = callmethodChecked(var_sym, "kind", [0]);
      var opresult4604 = callmethodChecked(call4602, "\u2260", [1], string4600);
      if (Grace_isTrue(opresult4604)) {
        setLineNumber(2256);    // compilenode identifier
        var call4605 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call4606 = callmethodChecked(call4605, "new", [0]);
        var var_suggestion = call4606;
        setLineNumber(2257);    // compilenode string
        var string4607 = new GraceString("]");
        var call4608 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string4607, var_lastToken);
        setLineNumber(2258);    // compilenode string
        var string4609 = new GraceString("a Lineup beginning with a '[' must end with a ']'.");
        setLineNumber(2259);    // compilenode identifier
        var call4610 = callmethodChecked(var_lastToken, "line", [0]);
        var call4611 = callmethodChecked(var_lastToken, "size", [0]);
        var call4613 = callmethodChecked(var_lastToken, "linePos", [0]);
        var opresult4615 = callmethodChecked(call4613, "+", [1], call4611);
        setLineNumber(2258);    // compilenode identifier
        var call4616 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string4609, call4610, opresult4615, var_suggestion);
        if4599 = call4616;
      }
      setLineNumber(2261);    // compilenode identifier
      var call4617 = callmethodChecked(var_ast, "arrayNode", [0]);
      var call4618 = callmethodChecked(call4617, "new", [1], var_params);
      var var_o = call4618;
      setLineNumber(2262);    // compilenode identifier
      var call4619 = callmethodChecked(var_values, "push", [1], var_o);
      setLineNumber(2263);    // compilenode call
      onSelf = true;
      var call4620 = callmethodChecked(this, "next", [0]);
      if4550 = call4620;
    }
    return if4550;
  };
  func4549.paramCounts = [0];
  this.methods["doarray"] = func4549;
  func4549.definitionLine = 2225;
  func4549.definitionModule = "parser";
  setLineNumber(2268);    // compilenode method
  var func4621 = function(argcv) {    // method dodialect
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for dodialect"));
    setModuleName("parser");
    var if4622 = GraceDone;
    setLineNumber(2269);    // compilenode string
    var string4623 = new GraceString("dialect");
    onSelf = true;
    var call4624 = callmethodChecked(this, "acceptKeyword", [1], string4623);
    if (Grace_isTrue(call4624)) {
      setLineNumber(2270);    // compilenode call
      onSelf = true;
      var call4625 = callmethodChecked(this, "next", [0]);
      var if4626 = GraceDone;
      setLineNumber(2271);    // compilenode string
      var string4627 = new GraceString("string");
      var call4629 = callmethodChecked(var_sym, "kind", [0]);
      var opresult4631 = callmethodChecked(call4629, "\u2260", [1], string4627);
      if (Grace_isTrue(opresult4631)) {
        setLineNumber(2272);    // compilenode identifier
        var call4632 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call4633 = callmethodChecked(call4632, "new", [0]);
        var var_suggestion = call4633;
        setLineNumber(2273);    // compilenode vardec
        var var_errorPos;
        var if4634 = GraceDone;
        setLineNumber(2274);    // compilenode identifier
        var call4635 = callmethodChecked(var_lastToken, "line", [0]);
        var call4637 = callmethodChecked(var_sym, "line", [0]);
        var opresult4639 = callmethodChecked(call4637, "==", [1], call4635);
        var string4641 = new GraceString("identifier");
        var call4643 = callmethodChecked(var_sym, "kind", [0]);
        var opresult4645 = callmethodChecked(call4643, "==", [1], string4641);
        var opresult4647 = callmethodChecked(opresult4645, "&&", [1], opresult4639);
        if (Grace_isTrue(opresult4647)) {
          setLineNumber(2275);    // compilenode string
          var string4648 = new GraceString("\"");
          var call4650 = callmethodChecked(var_sym, "value", [0]);
          var string4652 = new GraceString("\"");
          var opresult4654 = callmethodChecked(string4652, "++", [1], call4650);
          var opresult4656 = callmethodChecked(opresult4654, "++", [1], string4648);
          var call4657 = callmethodChecked(var_suggestion, "replaceToken()with", [1, 1], var_sym, opresult4656);
          setLineNumber(2276);    // compilenode identifier
          var call4658 = callmethodChecked(var_sym, "linePos", [0]);
          var_errorPos = call4658;
          if4634 = GraceDone;
        } else {
          setLineNumber(2278);    // compilenode string
          var string4659 = new GraceString(" \"\u00abdialect name\u00bb\"");
          var call4660 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string4659, var_lastToken);
          setLineNumber(2279);    // compilenode identifier
          var call4662 = callmethodChecked(var_lastToken, "size", [0]);
          var call4664 = callmethodChecked(var_lastToken, "linePos", [0]);
          var opresult4666 = callmethodChecked(call4664, "+", [1], call4662);
          var opresult4668 = callmethodChecked(opresult4666, "+", [1], new GraceNum(1));
          var_errorPos = opresult4668;
          if4634 = GraceDone;
        }
        setLineNumber(2281);    // compilenode string
        var string4669 = new GraceString("a dialect statement must have the name of the dialect in quotes after the 'dialect'.");
        setLineNumber(2282);    // compilenode identifier
        var call4670 = callmethodChecked(var_lastToken, "line", [0]);
        setLineNumber(2281);    // compilenode identifier
        var call4671 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string4669, call4670, var_errorPos, var_suggestion);
        if4626 = call4671;
      }
      setLineNumber(2284);    // compilenode identifier
      var call4672 = callmethodChecked(var_sym, "value", [0]);
      var call4673 = callmethodChecked(var_ast, "dialectNode", [0]);
      var call4674 = callmethodChecked(call4673, "new", [1], call4672);
      var call4675 = callmethodChecked(var_values, "push", [1], call4674);
      setLineNumber(2285);    // compilenode call
      onSelf = true;
      var call4676 = callmethodChecked(this, "next", [0]);
      if4622 = call4676;
    }
    return if4622;
  };
  func4621.paramCounts = [0];
  this.methods["dodialect"] = func4621;
  func4621.definitionLine = 2268;
  func4621.definitionModule = "parser";
  setLineNumber(2289);    // compilenode method
  var func4677 = function(argcv) {    // method inheritsOrUses
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for inheritsOrUses"));
    setModuleName("parser");
    var if4678 = GraceDone;
    setLineNumber(2292);    // compilenode string
    var string4679 = new GraceString("keyword");
    onSelf = true;
    var call4680 = callmethodChecked(this, "accept", [1], string4679);
    var call4681 = callmethodChecked(call4680, "prefix!", [0]);
    if (Grace_isTrue(call4681)) {
      return var_done;
    }
    var if4682 = GraceDone;
    setLineNumber(2293);    // compilenode string
    var string4683 = new GraceString("use");
    var call4685 = callmethodChecked(var_sym, "value", [0]);
    var opresult4687 = callmethodChecked(call4685, "==", [1], string4683);
    var string4689 = new GraceString("inherit");
    var call4691 = callmethodChecked(var_sym, "value", [0]);
    var opresult4693 = callmethodChecked(call4691, "==", [1], string4689);
    var string4695 = new GraceString("inherits");
    var call4697 = callmethodChecked(var_sym, "value", [0]);
    var opresult4699 = callmethodChecked(call4697, "==", [1], string4695);
    var opresult4701 = callmethodChecked(opresult4699, "||", [1], opresult4693);
    var opresult4703 = callmethodChecked(opresult4701, "||", [1], opresult4687);
    if (Grace_isTrue(opresult4703)) {
      setLineNumber(2294);    // compilenode identifier
      var var_btok = var_sym;
      setLineNumber(2295);    // compilenode call
      onSelf = true;
      var call4704 = callmethodChecked(this, "checkIndent", [0]);
      setLineNumber(2296);    // compilenode call
      onSelf = true;
      var call4705 = callmethodChecked(this, "next", [0]);
      var if4706 = GraceDone;
      setLineNumber(2297);    // compilenode block
      var block4707 = new GraceBlock(this, 2297, 0);
      block4707.real = function() {
        onSelf = true;
        var call4708 = callmethodChecked(this, "expression", [1], var_noBlocks);
        return call4708;
      };
      onSelf = true;
      var call4709 = callmethodChecked(this, "didConsume", [1], block4707);
      var call4710 = callmethodChecked(call4709, "not", [0]);
      if (Grace_isTrue(call4710)) {
        setLineNumber(2298);    // compilenode array
        var array4711 = new PrimitiveGraceList([]);
        var var_suggestions = array4711;
        setLineNumber(2299);    // compilenode identifier
        var call4712 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call4713 = callmethodChecked(call4712, "new", [0]);
        var var_suggestion = call4713;
        setLineNumber(2300);    // compilenode string
        var string4715 = new GraceString("rsquare");
        var array4714 = new PrimitiveGraceList([string4715]);
        onSelf = true;
        var call4716 = callmethodChecked(this, "findNextValidToken", [1], array4714);
        var var_nextTok = call4716;
        var if4717 = GraceDone;
        setLineNumber(2301);    // compilenode identifier
        var opresult4720 = callmethodChecked(var_nextTok, "==", [1], var_sym);
        if (Grace_isTrue(opresult4720)) {
          setLineNumber(2302);    // compilenode string
          var string4721 = new GraceString(" \u00abparent\u00bb");
          var call4722 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string4721, var_lastToken);
          if4717 = call4722;
        } else {
          setLineNumber(2304);    // compilenode identifier
          var call4723 = callmethodChecked(var_nextTok, "prev", [0]);
          var string4724 = new GraceString(" \u00abparent\u00bb");
          var call4725 = callmethodChecked(var_suggestion, "replaceTokenRange()leading()trailing()with", [2, 1, 1, 1], var_sym, call4723, GraceTrue, GraceFalse, string4724);
          if4717 = call4725;
        }
        setLineNumber(2306);    // compilenode identifier
        var call4726 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
        setLineNumber(2307);    // compilenode identifier
        var call4727 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call4728 = callmethodChecked(call4727, "new", [0]);
        var_suggestion = call4728;
        setLineNumber(2308);    // compilenode identifier
        var call4729 = callmethodChecked(var_nextTok, "prev", [0]);
        var call4730 = callmethodChecked(var_suggestion, "deleteTokenRange()leading()trailing", [2, 1, 1], var_lastToken, call4729, GraceTrue, GraceFalse);
        setLineNumber(2309);    // compilenode identifier
        var call4731 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
        setLineNumber(2310);    // compilenode string
        var string4732 = new GraceString(" keyword must be followed by an expression that creates ");
        var call4734 = callmethodChecked(var_btok, "value", [0]);
        var string4736 = new GraceString("The ");
        var opresult4738 = callmethodChecked(string4736, "++", [1], call4734);
        var opresult4740 = callmethodChecked(opresult4738, "++", [1], string4732);
        var var_msg = opresult4740;
        var if4741 = GraceDone;
        setLineNumber(2311);    // compilenode string
        var string4742 = new GraceString("use");
        var call4744 = callmethodChecked(var_btok, "value", [0]);
        var opresult4746 = callmethodChecked(call4744, "==", [1], string4742);
        if (Grace_isTrue(opresult4746)) {
          setLineNumber(2312);    // compilenode string
          var string4747 = new GraceString("the trait being used.");
          var opresult4750 = callmethodChecked(var_msg, "++", [1], string4747);
          var_msg = opresult4750;
          if4741 = GraceDone;
        } else {
          setLineNumber(2314);    // compilenode string
          var string4751 = new GraceString("the object being inherited.");
          var opresult4754 = callmethodChecked(var_msg, "++", [1], string4751);
          var_msg = opresult4754;
          if4741 = GraceDone;
        }
        setLineNumber(2317);    // compilenode identifier
        var call4755 = callmethodChecked(var_lastToken, "line", [0]);
        var call4757 = callmethodChecked(var_lastToken, "size", [0]);
        var call4759 = callmethodChecked(var_lastToken, "linePos", [0]);
        var opresult4761 = callmethodChecked(call4759, "+", [1], call4757);
        var opresult4763 = callmethodChecked(opresult4761, "+", [1], new GraceNum(1));
        setLineNumber(2316);    // compilenode identifier
        var call4764 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestions", [1, 2, 1], var_msg, call4755, opresult4763, var_suggestions);
        if4706 = call4764;
      }
      setLineNumber(2320);    // compilenode identifier
      var call4765 = callmethodChecked(var_btok, "line", [0]);
      var call4766 = callmethodChecked(var_btok, "linePos", [0]);
      var call4767 = callmethodChecked(var_util, "setPosition", [2], call4765, call4766);
      setLineNumber(2321);    // compilenode identifier
      var call4768 = callmethodChecked(var_values, "pop", [0]);
      var call4769 = callmethodChecked(var_ast, "inheritsNode", [0]);
      var call4770 = callmethodChecked(call4769, "new", [1], call4768);
      var var_inhNode = call4770;
      var if4771 = GraceDone;
      setLineNumber(2322);    // compilenode string
      var string4772 = new GraceString("use");
      var call4774 = callmethodChecked(var_btok, "value", [0]);
      var opresult4776 = callmethodChecked(call4774, "==", [1], string4772);
      if (Grace_isTrue(opresult4776)) {
        setLineNumber(2323);    // compilenode identifier
        var call4777 = callmethodChecked(var_inhNode, "isUse:=", [1], GraceTrue);
        if4771 = call4777;
      }
      setLineNumber(2325);    // compilenode block
      var block4778 = new GraceBlock(this, 2325, 0);
      block4778.real = function() {
        onSelf = true;
        var call4779 = callmethodChecked(this, "inheritsModifier()onLineOf", [1, 1], var_inhNode, var_btok);
        return call4779;
      };
      var block4780 = new GraceBlock(this, 2325, 0);
      block4780.real = function() {
        return GraceDone;
      };
      var call4781 = callmethodChecked(var_prelude, "while()do", [1, 1], block4778, block4780);
      setLineNumber(2326);    // compilenode identifier
      var call4782 = callmethodChecked(var_values, "push", [1], var_inhNode);
      if4682 = call4782;
    }
    return if4682;
  };
  func4677.paramCounts = [0];
  this.methods["inheritsOrUses"] = func4677;
  func4677.definitionLine = 2289;
  func4677.definitionModule = "parser";
  setLineNumber(2330);    // compilenode method
  var func4783 = function(argcv) {    // method inheritsModifier(1)onLineOf(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_node = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for inheritsModifier (arg list 1) of inheritsModifier(1)onLineOf(1)"));
    var var_startToken = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onLineOf (arg list 2) of inheritsModifier(1)onLineOf(1)"));
    setModuleName("parser");
    var if4784 = GraceDone;
    setLineNumber(2332);    // compilenode string
    var string4785 = new GraceString("keyword");
    onSelf = true;
    var call4786 = callmethodChecked(this, "accept()onLineOf", [1, 1], string4785, var_startToken);
    var call4787 = callmethodChecked(call4786, "prefix!", [0]);
    if (Grace_isTrue(call4787)) {
      setLineNumber(2333);    // compilenode identifier
      return GraceFalse;
    }
    var if4788 = GraceDone;
    setLineNumber(2335);    // compilenode string
    var string4789 = new GraceString("alias");
    var call4791 = callmethodChecked(var_sym, "value", [0]);
    var opresult4793 = callmethodChecked(call4791, "==", [1], string4789);
    if (Grace_isTrue(opresult4793)) {
      setLineNumber(2336);    // compilenode identifier
      onSelf = true;
      var call4794 = callmethodChecked(this, "parseAlias", [1], var_node);
      if4788 = call4794;
    } else {
      var if4795 = GraceDone;
      setLineNumber(2337);    // compilenode string
      var string4796 = new GraceString("exclude");
      var call4798 = callmethodChecked(var_sym, "value", [0]);
      var opresult4800 = callmethodChecked(call4798, "==", [1], string4796);
      if (Grace_isTrue(opresult4800)) {
        setLineNumber(2338);    // compilenode identifier
        onSelf = true;
        var call4801 = callmethodChecked(this, "parseExclude", [1], var_node);
        if4795 = call4801;
      } else {
        setLineNumber(2340);    // compilenode identifier
        if4795 = GraceFalse;
      }
      if4788 = if4795;
    }
    return if4788;
  };
  func4783.paramCounts = [1, 1];
  this.methods["inheritsModifier()onLineOf"] = func4783;
  func4783.definitionLine = 2330;
  func4783.definitionModule = "parser";
  setLineNumber(2344);    // compilenode method
  var func4802 = function(argcv) {    // method parseAlias(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_node = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for parseAlias(1)"));
    setModuleName("parser");
    setLineNumber(2345);    // compilenode call
    onSelf = true;
    var call4803 = callmethodChecked(this, "next", [0]);
    setLineNumber(2346);    // compilenode identifier
    onSelf = true;
    var call4804 = callmethodChecked(this, "methodsignature", [1], GraceTrue);
    var var_newSig = call4804;
    setLineNumber(2347);    // compilenode identifier
    var call4805 = callmethodChecked(var_newSig, "m", [0]);
    var var_newMeth = call4805;
    var if4806 = GraceDone;
    setLineNumber(2348);    // compilenode string
    var string4807 = new GraceString("=");
    var call4809 = callmethodChecked(var_sym, "value", [0]);
    var opresult4811 = callmethodChecked(call4809, "==", [1], string4807);
    var string4813 = new GraceString("op");
    onSelf = true;
    var call4814 = callmethodChecked(this, "accept", [1], string4813);
    var opresult4816 = callmethodChecked(call4814, "&&", [1], opresult4811);
    if (Grace_isTrue(opresult4816)) {
      setLineNumber(2349);    // compilenode call
      onSelf = true;
      var call4817 = callmethodChecked(this, "next", [0]);
      setLineNumber(2350);    // compilenode identifier
      onSelf = true;
      var call4818 = callmethodChecked(this, "methodsignature", [1], GraceTrue);
      var var_oldSig = call4818;
      setLineNumber(2351);    // compilenode identifier
      var call4819 = callmethodChecked(var_oldSig, "m", [0]);
      var var_oldMeth = call4819;
      setLineNumber(2352);    // compilenode identifier
      var call4820 = callmethodChecked(var_oldMeth, "isBindingOccurrence:=", [1], GraceFalse);
      setLineNumber(2353);    // compilenode identifier
      var call4821 = callmethodChecked(var_node, "addAlias()for", [1, 1], var_newMeth, var_oldMeth);
      if4806 = call4821;
    } else {
      setLineNumber(2356);    // compilenode string
      var string4822 = new GraceString("'newMethodName = oldMethodName'");
      setLineNumber(2355);    // compilenode string
      var string4824 = new GraceString("An alias modifier must take the form ");
      var opresult4826 = callmethodChecked(string4824, "++", [1], string4822);
      setLineNumber(2357);    // compilenode identifier
      var call4827 = callmethodChecked(var_lastToken, "line", [0]);
      var call4828 = callmethodChecked(var_lastToken, "size", [0]);
      var call4830 = callmethodChecked(var_lastToken, "linePos", [0]);
      var opresult4832 = callmethodChecked(call4830, "+", [1], call4828);
      setLineNumber(2355);    // compilenode identifier
      var call4833 = callmethodChecked(var_errormessages, "syntaxError()atPosition", [1, 2], opresult4826, call4827, opresult4832);
      if4806 = call4833;
    }
    setLineNumber(2359);    // compilenode identifier
    return GraceTrue;
  };
  func4802.paramCounts = [1];
  this.methods["parseAlias"] = func4802;
  func4802.definitionLine = 2344;
  func4802.definitionModule = "parser";
  setLineNumber(2361);    // compilenode method
  var func4834 = function(argcv) {    // method parseExclude(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_node = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for parseExclude(1)"));
    setModuleName("parser");
    setLineNumber(2362);    // compilenode call
    onSelf = true;
    var call4835 = callmethodChecked(this, "next", [0]);
    setLineNumber(2363);    // compilenode identifier
    onSelf = true;
    var call4836 = callmethodChecked(this, "methodsignature", [1], GraceTrue);
    var var_exSig = call4836;
    setLineNumber(2364);    // compilenode identifier
    var call4837 = callmethodChecked(var_exSig, "m", [0]);
    var var_excludedMeth = call4837;
    setLineNumber(2365);    // compilenode identifier
    var call4838 = callmethodChecked(var_excludedMeth, "isBindingOccurrence:=", [1], GraceFalse);
    setLineNumber(2366);    // compilenode identifier
    var call4839 = callmethodChecked(var_node, "addExclusion", [1], var_excludedMeth);
    setLineNumber(2367);    // compilenode identifier
    return GraceTrue;
  };
  func4834.paramCounts = [1];
  this.methods["parseExclude"] = func4834;
  func4834.definitionLine = 2361;
  func4834.definitionModule = "parser";
  setLineNumber(2370);    // compilenode method
  var func4840 = function(argcv) {    // method doobject
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for doobject"));
    setModuleName("parser");
    var if4841 = GraceDone;
    setLineNumber(2374);    // compilenode string
    var string4842 = new GraceString("object");
    onSelf = true;
    var call4843 = callmethodChecked(this, "acceptKeyword", [1], string4842);
    if (Grace_isTrue(call4843)) {
      setLineNumber(2375);    // compilenode call
      onSelf = true;
      var call4844 = callmethodChecked(this, "next", [0]);
      setLineNumber(2376);    // compilenode string
      var string4845 = new GraceString("an object constructor");
      setLineNumber(2377);    // compilenode string
      var string4846 = new GraceString("'object'");
      onSelf = true;
      var call4847 = callmethodChecked(this, "parseObjectConstructorBody()startingWith()after", [1, 1, 1], string4845, var_lastToken, string4846);
      if4841 = call4847;
    }
    return if4841;
  };
  func4840.paramCounts = [0];
  this.methods["doobject"] = func4840;
  func4840.definitionLine = 2370;
  func4840.definitionModule = "parser";
  setLineNumber(2381);    // compilenode method
  var func4848 = function(argcv) {    // method parseObjectConstructorBody(1)startingWith(1)after(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_constructName = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for parseObjectConstructorBody (arg list 1) of parseObjectConstructorBody(1)startingWith(1)after(1)"));
    var var_btok = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for startingWith (arg list 2) of parseObjectConstructorBody(1)startingWith(1)after(1)"));
    var var_prev = arguments[curarg];
    curarg++;
    if (argcv[2] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for after (arg list 3) of parseObjectConstructorBody(1)startingWith(1)after(1)"));
    setModuleName("parser");
    setLineNumber(2386);    // compilenode identifier
    var var_localMinIndentLevel = var_minIndentLevel;
    setLineNumber(2387);    // compilenode call
    onSelf = true;
    var call4849 = callmethodChecked(this, "doannotation", [0]);
    var var_anns = call4849;
    var if4850 = GraceDone;
    setLineNumber(2388);    // compilenode string
    var string4851 = new GraceString("lbrace");
    var call4853 = callmethodChecked(var_sym, "kind", [0]);
    var opresult4855 = callmethodChecked(call4853, "\u2260", [1], string4851);
    if (Grace_isTrue(opresult4855)) {
      setLineNumber(2389);    // compilenode identifier
      var call4856 = callmethodChecked(var_errormessages, "suggestion", [0]);
      var call4857 = callmethodChecked(call4856, "new", [0]);
      var var_suggestion = call4857;
      setLineNumber(2390);    // compilenode block
      var block4858 = new GraceBlock(this, 2390, 1);
      setLineNumber(1);    // compilenode identifier
      block4858.real = function(var_t) {
        setLineNumber(2390);    // compilenode string
        var string4859 = new GraceString("rbrace");
        var call4861 = callmethodChecked(var_t, "kind", [0]);
        var opresult4863 = callmethodChecked(call4861, "==", [1], string4859);
        return opresult4863;
      };
      onSelf = true;
      var call4864 = callmethodChecked(this, "findNextToken", [1], block4858);
      var var_nextTok = call4864;
      var if4865 = GraceDone;
      setLineNumber(2391);    // compilenode identifier
      var opresult4868 = callmethodChecked(GraceFalse, "==", [1], var_nextTok);
      if (Grace_isTrue(opresult4868)) {
        setLineNumber(2392);    // compilenode string
        var string4869 = new GraceString(" {}");
        var call4870 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string4869, var_lastToken);
        if4865 = call4870;
      } else {
        setLineNumber(2394);    // compilenode string
        var string4871 = new GraceString(" {");
        var call4872 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string4871, var_lastToken);
        if4865 = call4872;
      }
      setLineNumber(2396);    // compilenode string
      var string4873 = new GraceString(".");
      var string4876 = new GraceString(" must have a '{' after the ");
      var string4879 = new GraceString("");
      var opresult4881 = callmethodChecked(string4879, "++", [1], var_constructName);
      var opresult4883 = callmethodChecked(opresult4881, "++", [1], string4876);
      var opresult4885 = callmethodChecked(opresult4883, "++", [1], var_prev);
      var opresult4887 = callmethodChecked(opresult4885, "++", [1], string4873);
      setLineNumber(2397);    // compilenode identifier
      var call4888 = callmethodChecked(var_lastToken, "line", [0]);
      var call4889 = callmethodChecked(var_lastToken, "size", [0]);
      var call4891 = callmethodChecked(var_lastToken, "linePos", [0]);
      var opresult4893 = callmethodChecked(call4891, "+", [1], call4889);
      setLineNumber(2396);    // compilenode identifier
      var call4894 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], opresult4887, call4888, opresult4893, var_suggestion);
      if4850 = call4894;
    }
    setLineNumber(2400);    // compilenode call
    onSelf = true;
    var call4895 = callmethodChecked(this, "next", [0]);
    var if4896 = GraceDone;
    setLineNumber(2401);    // compilenode identifier
    var call4897 = callmethodChecked(var_statementToken, "line", [0]);
    var call4899 = callmethodChecked(var_sym, "line", [0]);
    var opresult4901 = callmethodChecked(call4899, "==", [1], call4897);
    if (Grace_isTrue(opresult4901)) {
      setLineNumber(2402);    // compilenode identifier
      var call4903 = callmethodChecked(var_sym, "linePos", [0]);
      var diff4905 = callmethodChecked(call4903, "-", [1], new GraceNum(2));
      var_minIndentLevel = diff4905;
      if4896 = GraceDone;
    } else {
      setLineNumber(2404);    // compilenode identifier
      var call4907 = callmethodChecked(var_statementToken, "indent", [0]);
      var opresult4909 = callmethodChecked(call4907, "+", [1], new GraceNum(2));
      var_minIndentLevel = opresult4909;
      if4896 = GraceDone;
    }
    setLineNumber(2406);    // compilenode array
    var array4910 = new PrimitiveGraceList([]);
    var var_body = array4910;
    setLineNumber(2407);    // compilenode identifier
    var var_superObject = GraceFalse;
    setLineNumber(2408);    // compilenode array
    var array4911 = new PrimitiveGraceList([]);
    var var_usedTraits = array4911;
    setLineNumber(2409);    // compilenode identifier
    var var_inPreamble = GraceTrue;
    setLineNumber(2410);    // compilenode block
    var block4912 = new GraceBlock(this, 2410, 0);
    block4912.real = function() {
      var block4913 = new GraceBlock(this, 2410, 0);
      block4913.real = function() {
        var string4914 = new GraceString("eof");
        var call4916 = callmethodChecked(var_sym, "kind", [0]);
        var opresult4918 = callmethodChecked(call4916, "\u2260", [1], string4914);
        return opresult4918;
      };
      var string4920 = new GraceString("rbrace");
      onSelf = true;
      var call4921 = callmethodChecked(this, "accept", [1], string4920);
      var call4922 = callmethodChecked(call4921, "not", [0]);
      var opresult4924 = callmethodChecked(call4922, "&&", [1], block4913);
      return opresult4924;
    };
    var block4925 = new GraceBlock(this, 2410, 0);
    block4925.real = function() {
      var if4926 = GraceDone;
      setLineNumber(2411);    // compilenode block
      var block4927 = new GraceBlock(this, 2411, 0);
      block4927.real = function() {
        onSelf = true;
        var call4928 = callmethodChecked(this, "inheritsOrUses", [0]);
        return call4928;
      };
      onSelf = true;
      var call4929 = callmethodChecked(this, "didConsume", [1], block4927);
      if (Grace_isTrue(call4929)) {
        setLineNumber(2412);    // compilenode identifier
        var call4930 = callmethodChecked(var_values, "pop", [0]);
        var var_parentNode = call4930;
        var if4931 = GraceDone;
        setLineNumber(2413);    // compilenode identifier
        if (Grace_isTrue(var_inPreamble)) {
          var if4932 = GraceDone;
          setLineNumber(2414);    // compilenode identifier
          var call4933 = callmethodChecked(var_parentNode, "isUse", [0]);
          if (Grace_isTrue(call4933)) {
            setLineNumber(2415);    // compilenode identifier
            var call4934 = callmethodChecked(var_usedTraits, "add", [1], var_parentNode);
            if4932 = call4934;
          } else {
            var if4935 = GraceDone;
            setLineNumber(2416);    // compilenode identifier
            var call4936 = callmethodChecked(var_usedTraits, "isEmpty", [0]);
            if (Grace_isTrue(call4936)) {
              setLineNumber(2417);    // compilenode identifier
              var_superObject = var_parentNode;
              if4935 = GraceDone;
            } else {
              setLineNumber(2420);    // compilenode string
              var string4937 = new GraceString("");
              var string4940 = new GraceString("before 'use' in ");
              var opresult4942 = callmethodChecked(string4940, "++", [1], var_constructName);
              var opresult4944 = callmethodChecked(opresult4942, "++", [1], string4937);
              setLineNumber(2419);    // compilenode string
              var string4946 = new GraceString("'inherit' must come ");
              var opresult4948 = callmethodChecked(string4946, "++", [1], opresult4944);
              setLineNumber(2421);    // compilenode identifier
              var call4949 = callmethodChecked(var_parentNode, "line", [0]);
              var call4950 = callmethodChecked(var_parentNode, "linePos", [0]);
              setLineNumber(2422);    // compilenode identifier
              var call4952 = callmethodChecked(var_parentNode, "linePos", [0]);
              var opresult4954 = callmethodChecked(call4952, "+", [1], new GraceNum(7));
              setLineNumber(2419);    // compilenode identifier
              var call4955 = callmethodChecked(var_errormessages, "syntaxError()atRange", [1, 3], opresult4948, call4949, call4950, opresult4954);
              if4935 = call4955;
            }
            if4932 = if4935;
          }
          if4931 = if4932;
        } else {
          setLineNumber(2426);    // compilenode string
          var string4956 = new GraceString("");
          var string4959 = new GraceString("come at the start of ");
          var opresult4961 = callmethodChecked(string4959, "++", [1], var_constructName);
          var opresult4963 = callmethodChecked(opresult4961, "++", [1], string4956);
          setLineNumber(2425);    // compilenode string
          var string4965 = new GraceString("' must ");
          var call4967 = callmethodChecked(var_parentNode, "statementName", [0]);
          var string4969 = new GraceString("'");
          var opresult4971 = callmethodChecked(string4969, "++", [1], call4967);
          var opresult4973 = callmethodChecked(opresult4971, "++", [1], string4965);
          var opresult4975 = callmethodChecked(opresult4973, "++", [1], opresult4963);
          setLineNumber(2427);    // compilenode identifier
          var call4976 = callmethodChecked(var_parentNode, "line", [0]);
          var call4977 = callmethodChecked(var_parentNode, "linePos", [0]);
          setLineNumber(2428);    // compilenode identifier
          var call4978 = callmethodChecked(var_parentNode, "statementName", [0]);
          var call4979 = callmethodChecked(call4978, "size", [0]);
          var call4981 = callmethodChecked(var_parentNode, "linePos", [0]);
          var opresult4983 = callmethodChecked(call4981, "+", [1], call4979);
          setLineNumber(2425);    // compilenode identifier
          var call4984 = callmethodChecked(var_errormessages, "syntaxError()atRange", [1, 3], opresult4975, call4976, call4977, opresult4983);
          if4931 = call4984;
        }
        if4926 = if4931;
      } else {
        var if4985 = GraceDone;
        setLineNumber(2430);    // compilenode block
        var block4986 = new GraceBlock(this, 2430, 0);
        block4986.real = function() {
          onSelf = true;
          var call4987 = callmethodChecked(this, "methoddec", [0]);
          return call4987;
        };
        onSelf = true;
        var call4988 = callmethodChecked(this, "didConsume", [1], block4986);
        if (Grace_isTrue(call4988)) {
          setLineNumber(2431);    // compilenode identifier
          var_inPreamble = GraceFalse;
          setLineNumber(2432);    // compilenode identifier
          var call4989 = callmethodChecked(var_values, "pop", [0]);
          var call4990 = callmethodChecked(var_body, "push", [1], call4989);
          if4985 = call4990;
        } else {
          var if4991 = GraceDone;
          setLineNumber(2433);    // compilenode block
          var block4992 = new GraceBlock(this, 2433, 0);
          block4992.real = function() {
            onSelf = true;
            var call4993 = callmethodChecked(this, "statement", [0]);
            return call4993;
          };
          onSelf = true;
          var call4994 = callmethodChecked(this, "didConsume", [1], block4992);
          if (Grace_isTrue(call4994)) {
            setLineNumber(2434);    // compilenode identifier
            var_inPreamble = GraceFalse;
            setLineNumber(2435);    // compilenode identifier
            var call4995 = callmethodChecked(var_values, "pop", [0]);
            var call4996 = callmethodChecked(var_body, "push", [1], call4995);
            if4991 = call4996;
          } else {
            setLineNumber(2438);    // compilenode string
            var string4997 = new GraceString("");
            var string5000 = new GraceString("of of ");
            var opresult5002 = callmethodChecked(string5000, "++", [1], var_constructName);
            var opresult5004 = callmethodChecked(opresult5002, "++", [1], string4997);
            setLineNumber(2437);    // compilenode string
            var string5006 = new GraceString("' in body ");
            var call5008 = callmethodChecked(var_sym, "value", [0]);
            var string5010 = new GraceString("unexpected symbol '");
            var opresult5012 = callmethodChecked(string5010, "++", [1], call5008);
            var opresult5014 = callmethodChecked(opresult5012, "++", [1], string5006);
            var opresult5016 = callmethodChecked(opresult5014, "++", [1], opresult5004);
            setLineNumber(2439);    // compilenode identifier
            var call5017 = callmethodChecked(var_sym, "line", [0]);
            var call5018 = callmethodChecked(var_sym, "linePos", [0]);
            var call5020 = callmethodChecked(var_sym, "value", [0]);
            var call5021 = callmethodChecked(call5020, "size", [0]);
            var call5023 = callmethodChecked(var_sym, "linePos", [0]);
            var opresult5025 = callmethodChecked(call5023, "+", [1], call5021);
            var diff5027 = callmethodChecked(opresult5025, "-", [1], new GraceNum(1));
            setLineNumber(2437);    // compilenode identifier
            var call5028 = callmethodChecked(var_errormessages, "syntaxError()atRange", [1, 3], opresult5016, call5017, call5018, diff5027);
            if4991 = call5028;
          }
          if4985 = if4991;
        }
        if4926 = if4985;
      }
      return if4926;
    };
    var call5029 = callmethodChecked(var_prelude, "while()do", [1, 1], block4912, block4925);
    setLineNumber(2442);    // compilenode call
    onSelf = true;
    var call5030 = callmethodChecked(this, "next", [0]);
    setLineNumber(2443);    // compilenode identifier
    var call5031 = callmethodChecked(var_btok, "line", [0]);
    var call5032 = callmethodChecked(var_btok, "linePos", [0]);
    var call5033 = callmethodChecked(var_util, "setPosition", [2], call5031, call5032);
    setLineNumber(2444);    // compilenode identifier
    var call5034 = callmethodChecked(var_ast, "objectNode", [0]);
    var call5035 = callmethodChecked(call5034, "new", [2], var_body, var_superObject);
    var var_objNode = call5035;
    var if5036 = GraceDone;
    setLineNumber(2445);    // compilenode identifier
    var opresult5039 = callmethodChecked(GraceFalse, "\u2260", [1], var_anns);
    if (Grace_isTrue(opresult5039)) {
      var call5040 = callmethodChecked(var_objNode, "annotations", [0]);
      var call5041 = callmethodChecked(call5040, "addAll", [1], var_anns);
      if5036 = call5041;
    }
    setLineNumber(2446);    // compilenode identifier
    var call5042 = callmethodChecked(var_objNode, "usedTraits:=", [1], var_usedTraits);
    setLineNumber(2447);    // compilenode identifier
    var call5043 = callmethodChecked(var_values, "push", [1], var_objNode);
    setLineNumber(2448);    // compilenode identifier
    var_minIndentLevel = var_localMinIndentLevel;
    return GraceDone;
  };
  func4848.paramCounts = [1, 1, 1];
  this.methods["parseObjectConstructorBody()startingWith()after"] = func4848;
  func4848.definitionLine = 2381;
  func4848.definitionModule = "parser";
  setLineNumber(2451);    // compilenode method
  var func5044 = function(argcv) {    // method doclass
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for doclass"));
    setModuleName("parser");
    setLineNumber(2480);    // compilenode identifier
    var var_btok = var_sym;
    setLineNumber(2481);    // compilenode call
    onSelf = true;
    var call5045 = callmethodChecked(this, "next", [0]);
    setLineNumber(2482);    // compilenode identifier
    var var_localMinIndentLevel = var_minIndentLevel;
    var if5046 = GraceDone;
    setLineNumber(2483);    // compilenode string
    var string5047 = new GraceString("identifier");
    var call5049 = callmethodChecked(var_sym, "kind", [0]);
    var opresult5051 = callmethodChecked(call5049, "\u2260", [1], string5047);
    if (Grace_isTrue(opresult5051)) {
      setLineNumber(2484);    // compilenode array
      var array5052 = new PrimitiveGraceList([]);
      var var_suggestions = array5052;
      var if5053 = GraceDone;
      setLineNumber(2485);    // compilenode string
      var string5054 = new GraceString("lbrace");
      var call5056 = callmethodChecked(var_sym, "kind", [0]);
      var opresult5058 = callmethodChecked(call5056, "==", [1], string5054);
      if (Grace_isTrue(opresult5058)) {
        setLineNumber(2486);    // compilenode identifier
        var call5059 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call5060 = callmethodChecked(call5059, "new", [0]);
        var var_suggestion = call5060;
        setLineNumber(2487);    // compilenode string
        var string5061 = new GraceString(" \u00abclass name\u00bb.new");
        var call5062 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string5061, var_lastToken);
        setLineNumber(2488);    // compilenode identifier
        var call5063 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
        setLineNumber(2489);    // compilenode identifier
        var call5064 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call5065 = callmethodChecked(call5064, "new", [0]);
        var_suggestion = call5065;
        setLineNumber(2490);    // compilenode string
        var string5066 = new GraceString("object");
        var call5067 = callmethodChecked(var_suggestion, "replaceToken()with", [1, 1], var_lastToken, string5066);
        setLineNumber(2491);    // compilenode identifier
        var call5068 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
        if5053 = call5068;
      } else {
        setLineNumber(2493);    // compilenode identifier
        var call5069 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call5070 = callmethodChecked(call5069, "new", [0]);
        var var_suggestion = call5070;
        setLineNumber(2494);    // compilenode string
        var string5071 = new GraceString(" \u00abclass name\u00bb.new {}");
        var call5072 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string5071, var_lastToken);
        setLineNumber(2495);    // compilenode identifier
        var call5073 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
        if5053 = call5073;
      }
      setLineNumber(2497);    // compilenode string
      var string5074 = new GraceString("a class must have a name after the 'class'.");
      setLineNumber(2498);    // compilenode identifier
      var call5075 = callmethodChecked(var_lastToken, "line", [0]);
      var call5077 = callmethodChecked(var_lastToken, "size", [0]);
      var call5079 = callmethodChecked(var_lastToken, "linePos", [0]);
      var opresult5081 = callmethodChecked(call5079, "+", [1], call5077);
      var opresult5083 = callmethodChecked(opresult5081, "+", [1], new GraceNum(1));
      setLineNumber(2497);    // compilenode identifier
      var call5084 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestions", [1, 2, 1], string5074, call5075, opresult5083, var_suggestions);
      if5046 = call5084;
    }
    setLineNumber(2500);    // compilenode identifier
    var var_objName = GraceFalse;
    var if5085 = GraceDone;
    setLineNumber(2501);    // compilenode string
    var string5086 = new GraceString("dot");
    var call5088 = callmethodChecked(var_tokens, "first", [0]);
    var call5089 = callmethodChecked(call5088, "kind", [0]);
    var opresult5091 = callmethodChecked(call5089, "==", [1], string5086);
    if (Grace_isTrue(opresult5091)) {
      setLineNumber(2502);    // compilenode call
      onSelf = true;
      var call5092 = callmethodChecked(this, "pushidentifier", [0]);
      setLineNumber(2503);    // compilenode identifier
      var call5093 = callmethodChecked(var_values, "pop", [0]);
      var_objName = call5093;
      setLineNumber(2504);    // compilenode identifier
      var call5094 = callmethodChecked(var_objName, "isBindingOccurrence:=", [1], GraceTrue);
      setLineNumber(2505);    // compilenode call
      onSelf = true;
      var call5095 = callmethodChecked(this, "next", [0]);
      if5085 = call5095;
    }
    setLineNumber(2507);    // compilenode identifier
    onSelf = true;
    var call5096 = callmethodChecked(this, "methodsignature", [1], GraceFalse);
    var var_s = call5096;
    setLineNumber(2508);    // compilenode identifier
    var call5097 = callmethodChecked(var_s, "sig", [0]);
    var var_csig = call5097;
    setLineNumber(2509);    // compilenode identifier
    var call5098 = callmethodChecked(var_s, "m", [0]);
    var var_methodName = call5098;
    setLineNumber(2510);    // compilenode identifier
    var call5099 = callmethodChecked(var_methodName, "isBindingOccurrence:=", [1], GraceTrue);
    setLineNumber(2511);    // compilenode identifier
    var call5100 = callmethodChecked(var_s, "rtype", [0]);
    var var_dtype = call5100;
    setLineNumber(2512);    // compilenode string
    var string5101 = new GraceString("a class");
    var string5102 = new GraceString("method header");
    onSelf = true;
    var call5103 = callmethodChecked(this, "parseObjectConstructorBody()startingWith()after", [1, 1, 1], string5101, var_btok, string5102);
    setLineNumber(2513);    // compilenode identifier
    var call5104 = callmethodChecked(var_values, "pop", [0]);
    var var_objNode = call5104;
    setLineNumber(2514);    // compilenode identifier
    var call5105 = callmethodChecked(var_btok, "line", [0]);
    var call5106 = callmethodChecked(var_btok, "linePos", [0]);
    var call5107 = callmethodChecked(var_util, "setPosition", [2], call5105, call5106);
    setLineNumber(2515);    // compilenode identifier
    var array5108 = new PrimitiveGraceList([var_objNode]);
    var call5109 = callmethodChecked(var_ast, "methodNode", [0]);
    var call5110 = callmethodChecked(call5109, "new", [4], var_methodName, var_csig, array5108, var_dtype);
    var var_meth = call5110;
    setLineNumber(2516);    // compilenode identifier
    var call5111 = callmethodChecked(var_s, "typeParams", [0]);
    var call5112 = callmethodChecked(var_meth, "typeParams:=", [1], call5111);
    setLineNumber(2517);    // compilenode identifier
    var call5113 = callmethodChecked(var_meth, "usesClassSyntax:=", [1], GraceTrue);
    setLineNumber(2518);    // compilenode identifier
    var call5114 = callmethodChecked(var_objNode, "annotations", [0]);
    var call5115 = callmethodChecked(var_meth, "annotations", [0]);
    var call5116 = callmethodChecked(call5115, "addAll", [1], call5114);
    var if5117 = GraceDone;
    setLineNumber(2520);    // compilenode identifier
    var opresult5120 = callmethodChecked(GraceFalse, "\u2260", [1], var_objName);
    if (Grace_isTrue(opresult5120)) {
      setLineNumber(2521);    // compilenode identifier
      var call5121 = callmethodChecked(var_methodName, "nameString", [0]);
      var string5123 = new GraceString(".");
      var call5125 = callmethodChecked(var_objName, "nameString", [0]);
      var opresult5127 = callmethodChecked(call5125, "++", [1], string5123);
      var opresult5129 = callmethodChecked(opresult5127, "++", [1], call5121);
      var call5130 = callmethodChecked(var_objNode, "name:=", [1], opresult5129);
      setLineNumber(2522);    // compilenode string
      var string5132 = new GraceString("");
      var call5134 = callmethodChecked(var_objName, "nameString", [0]);
      var string5136 = new GraceString("class ");
      var opresult5138 = callmethodChecked(string5136, "++", [1], call5134);
      var opresult5140 = callmethodChecked(opresult5138, "++", [1], string5132);
      var call5141 = callmethodChecked(var_ast, "stringNode", [0]);
      var call5142 = callmethodChecked(call5141, "new", [1], opresult5140);
      var array5131 = new PrimitiveGraceList([call5142]);
      var var_asStringBody = array5131;
      setLineNumber(2524);    // compilenode string
      var string5143 = new GraceString("asString");
      var call5144 = callmethodChecked(var_ast, "identifierNode", [0]);
      var call5145 = callmethodChecked(call5144, "new", [2], string5143, GraceFalse);
      var array5146 = new PrimitiveGraceList([]);
      setLineNumber(2523);    // compilenode identifier
      var call5147 = callmethodChecked(var_ast, "methodNode", [0]);
      var call5148 = callmethodChecked(call5147, "new", [4], call5145, array5146, var_asStringBody, GraceFalse);
      var var_asStringMeth = call5148;
      setLineNumber(2525);    // compilenode identifier
      var array5149 = new PrimitiveGraceList([var_meth, var_asStringMeth]);
      var var_metaBody = array5149;
      setLineNumber(2526);    // compilenode string
      var string5150 = new GraceString("");
      var call5152 = callmethodChecked(var_objName, "nameString", [0]);
      var string5154 = new GraceString("class ");
      var opresult5156 = callmethodChecked(string5154, "++", [1], call5152);
      var opresult5158 = callmethodChecked(opresult5156, "++", [1], string5150);
      var call5159 = callmethodChecked(var_ast, "objectNode", [0]);
      var call5160 = callmethodChecked(call5159, "body()named", [1, 1], var_metaBody, opresult5158);
      var var_metaObj = call5160;
      setLineNumber(2527);    // compilenode identifier
      var call5161 = callmethodChecked(var_ast, "unknownType", [0]);
      var call5162 = callmethodChecked(var_ast, "defDecNode", [0]);
      var call5163 = callmethodChecked(call5162, "new", [3], var_objName, var_metaObj, call5161);
      var var_defDec = call5163;
      setLineNumber(2528);    // compilenode identifier
      var call5164 = callmethodChecked(var_defDec, "startToken:=", [1], var_btok);
      setLineNumber(2529);    // compilenode string
      var string5165 = new GraceString("public");
      var call5166 = callmethodChecked(var_ast, "identifierNode", [0]);
      var call5167 = callmethodChecked(call5166, "new", [2], string5165, GraceFalse);
      var call5168 = callmethodChecked(var_defDec, "annotations", [0]);
      var call5169 = callmethodChecked(call5168, "add", [1], call5167);
      setLineNumber(2530);    // compilenode identifier
      var call5170 = callmethodChecked(var_values, "push", [1], var_defDec);
      if5117 = call5170;
    } else {
      setLineNumber(2532);    // compilenode identifier
      var call5171 = callmethodChecked(var_methodName, "nameString", [0]);
      var call5172 = callmethodChecked(var_objNode, "name:=", [1], call5171);
      var if5173 = GraceDone;
      setLineNumber(2533);    // compilenode string
      var string5174 = new GraceString("class");
      var call5176 = callmethodChecked(var_btok, "value", [0]);
      var opresult5178 = callmethodChecked(call5176, "==", [1], string5174);
      if (Grace_isTrue(opresult5178)) {
        setLineNumber(2534);    // compilenode identifier
        var call5179 = callmethodChecked(var_objNode, "inClass:=", [1], GraceTrue);
        if5173 = call5179;
      } else {
        var if5180 = GraceDone;
        setLineNumber(2535);    // compilenode string
        var string5181 = new GraceString("trait");
        var call5183 = callmethodChecked(var_btok, "value", [0]);
        var opresult5185 = callmethodChecked(call5183, "==", [1], string5181);
        if (Grace_isTrue(opresult5185)) {
          setLineNumber(2536);    // compilenode identifier
          var call5186 = callmethodChecked(var_objNode, "inTrait:=", [1], GraceTrue);
          if5180 = call5186;
        }
        if5173 = if5180;
      }
      setLineNumber(2538);    // compilenode identifier
      var call5187 = callmethodChecked(var_values, "push", [1], var_meth);
      if5117 = call5187;
    }
    setLineNumber(2540);    // compilenode call
    onSelf = true;
    var call5188 = callmethodChecked(this, "reconcileComments", [0]);
    setLineNumber(2541);    // compilenode identifier
    var_minIndentLevel = var_localMinIndentLevel;
    return GraceDone;
  };
  func5044.paramCounts = [0];
  this.methods["doclass"] = func5044;
  func5044.definitionLine = 2451;
  func5044.definitionModule = "parser";
  setLineNumber(2544);    // compilenode method
  var func5189 = function(argcv) {    // method dofactoryMethod
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for dofactoryMethod"));
    setModuleName("parser");
    var if5190 = GraceDone;
    setLineNumber(2547);    // compilenode block
    var block5191 = new GraceBlock(this, 2547, 0);
    block5191.real = function() {
      setLineNumber(2548);    // compilenode string
      var string5192 = new GraceString("method");
      var call5194 = callmethodChecked(var_tokens, "first", [0]);
      var call5195 = callmethodChecked(call5194, "value", [0]);
      var opresult5197 = callmethodChecked(call5195, "==", [1], string5192);
      return opresult5197;
    };
    setLineNumber(2546);    // compilenode block
    var block5199 = new GraceBlock(this, 2546, 0);
    block5199.real = function() {
      setLineNumber(2547);    // compilenode string
      var string5200 = new GraceString("keyword");
      var call5202 = callmethodChecked(var_tokens, "first", [0]);
      var call5203 = callmethodChecked(call5202, "kind", [0]);
      var opresult5205 = callmethodChecked(call5203, "==", [1], string5200);
      return opresult5205;
    };
    setLineNumber(2546);    // compilenode string
    var string5207 = new GraceString("factory");
    onSelf = true;
    var call5208 = callmethodChecked(this, "acceptKeyword", [1], string5207);
    var opresult5210 = callmethodChecked(call5208, "&&", [1], block5199);
    var opresult5212 = callmethodChecked(opresult5210, "&&", [1], block5191);
    if (Grace_isTrue(opresult5212)) {
      setLineNumber(2549);    // compilenode identifier
      var var_btok = var_sym;
      setLineNumber(2550);    // compilenode call
      onSelf = true;
      var call5213 = callmethodChecked(this, "next", [0]);
      setLineNumber(2551);    // compilenode call
      onSelf = true;
      var call5214 = callmethodChecked(this, "next", [0]);
      setLineNumber(2552);    // compilenode identifier
      var var_localMinIndentLevel = var_minIndentLevel;
      var if5215 = GraceDone;
      setLineNumber(2553);    // compilenode string
      var string5216 = new GraceString("identifier");
      var call5218 = callmethodChecked(var_sym, "kind", [0]);
      var opresult5220 = callmethodChecked(call5218, "\u2260", [1], string5216);
      if (Grace_isTrue(opresult5220)) {
        setLineNumber(2554);    // compilenode array
        var array5221 = new PrimitiveGraceList([]);
        var var_suggestions = array5221;
        var if5222 = GraceDone;
        setLineNumber(2555);    // compilenode string
        var string5223 = new GraceString("lbrace");
        var call5225 = callmethodChecked(var_sym, "kind", [0]);
        var opresult5227 = callmethodChecked(call5225, "==", [1], string5223);
        if (Grace_isTrue(opresult5227)) {
          setLineNumber(2556);    // compilenode identifier
          var call5228 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call5229 = callmethodChecked(call5228, "new", [0]);
          var var_suggestion = call5229;
          setLineNumber(2557);    // compilenode string
          var string5230 = new GraceString(" \u00abmethod name\u00bb");
          var call5231 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string5230, var_lastToken);
          setLineNumber(2558);    // compilenode identifier
          var call5232 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
          setLineNumber(2559);    // compilenode identifier
          var call5233 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call5234 = callmethodChecked(call5233, "new", [0]);
          var_suggestion = call5234;
          setLineNumber(2560);    // compilenode string
          var string5235 = new GraceString("object");
          var call5236 = callmethodChecked(var_suggestion, "replaceToken()with", [1, 1], var_lastToken, string5235);
          setLineNumber(2561);    // compilenode identifier
          var call5237 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
          if5222 = call5237;
        } else {
          setLineNumber(2563);    // compilenode identifier
          var call5238 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call5239 = callmethodChecked(call5238, "new", [0]);
          var var_suggestion = call5239;
          setLineNumber(2564);    // compilenode string
          var string5240 = new GraceString(" \u00abmethod name\u00bb {}");
          var call5241 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string5240, var_lastToken);
          setLineNumber(2565);    // compilenode identifier
          var call5242 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
          if5222 = call5242;
        }
        setLineNumber(2567);    // compilenode string
        var string5243 = new GraceString("a factory method must have a name after the 'method'.");
        setLineNumber(2568);    // compilenode identifier
        var call5244 = callmethodChecked(var_lastToken, "line", [0]);
        var call5246 = callmethodChecked(var_lastToken, "size", [0]);
        var call5248 = callmethodChecked(var_lastToken, "linePos", [0]);
        var opresult5250 = callmethodChecked(call5248, "+", [1], call5246);
        var opresult5252 = callmethodChecked(opresult5250, "+", [1], new GraceNum(1));
        setLineNumber(2567);    // compilenode identifier
        var call5253 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestions", [1, 2, 1], string5243, call5244, opresult5252, var_suggestions);
        if5215 = call5253;
      }
      setLineNumber(2571);    // compilenode identifier
      onSelf = true;
      var call5254 = callmethodChecked(this, "methodsignature", [1], GraceFalse);
      var var_s = call5254;
      setLineNumber(2572);    // compilenode identifier
      var call5255 = callmethodChecked(var_s, "sig", [0]);
      var var_csig = call5255;
      setLineNumber(2573);    // compilenode identifier
      var call5256 = callmethodChecked(var_s, "m", [0]);
      var var_methodName = call5256;
      setLineNumber(2574);    // compilenode identifier
      var call5257 = callmethodChecked(var_methodName, "isBindingOccurrence:=", [1], GraceTrue);
      setLineNumber(2575);    // compilenode identifier
      var call5258 = callmethodChecked(var_s, "rtype", [0]);
      var var_dtype = call5258;
      setLineNumber(2576);    // compilenode string
      var string5259 = new GraceString("a factory method");
      var string5260 = new GraceString("method header");
      onSelf = true;
      var call5261 = callmethodChecked(this, "parseObjectConstructorBody()startingWith()after", [1, 1, 1], string5259, var_btok, string5260);
      setLineNumber(2577);    // compilenode identifier
      var call5262 = callmethodChecked(var_values, "pop", [0]);
      var var_objNode = call5262;
      setLineNumber(2578);    // compilenode identifier
      var call5263 = callmethodChecked(var_objNode, "name:=", [1], var_methodName);
      setLineNumber(2579);    // compilenode identifier
      var call5264 = callmethodChecked(var_btok, "line", [0]);
      var call5265 = callmethodChecked(var_btok, "linePos", [0]);
      var call5266 = callmethodChecked(var_util, "setPosition", [2], call5264, call5265);
      setLineNumber(2580);    // compilenode identifier
      var array5267 = new PrimitiveGraceList([var_objNode]);
      var call5268 = callmethodChecked(var_ast, "methodNode", [0]);
      var call5269 = callmethodChecked(call5268, "new", [4], var_methodName, var_csig, array5267, var_dtype);
      var var_meth = call5269;
      setLineNumber(2581);    // compilenode identifier
      var call5270 = callmethodChecked(var_s, "typeParams", [0]);
      var call5271 = callmethodChecked(var_meth, "typeParams:=", [1], call5270);
      setLineNumber(2582);    // compilenode identifier
      var call5272 = callmethodChecked(var_objNode, "annotations", [0]);
      var call5273 = callmethodChecked(var_meth, "annotations", [0]);
      var call5274 = callmethodChecked(call5273, "addAll", [1], call5272);
      setLineNumber(2586);    // compilenode identifier
      var call5275 = callmethodChecked(var_values, "push", [1], var_meth);
      setLineNumber(2587);    // compilenode call
      onSelf = true;
      var call5276 = callmethodChecked(this, "reconcileComments", [0]);
      setLineNumber(2588);    // compilenode identifier
      var_minIndentLevel = var_localMinIndentLevel;
      if5190 = GraceDone;
    }
    return if5190;
  };
  func5189.paramCounts = [0];
  this.methods["dofactoryMethod"] = func5189;
  func5189.definitionLine = 2544;
  func5189.definitionModule = "parser";
  setLineNumber(2592);    // compilenode method
  var func5277 = function(argcv) {    // method methoddec
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for methoddec"));
    setModuleName("parser");
    var if5278 = GraceDone;
    setLineNumber(2595);    // compilenode string
    var string5279 = new GraceString("method");
    onSelf = true;
    var call5280 = callmethodChecked(this, "acceptKeyword", [1], string5279);
    if (Grace_isTrue(call5280)) {
      setLineNumber(2596);    // compilenode identifier
      var var_btok = var_sym;
      setLineNumber(2597);    // compilenode call
      onSelf = true;
      var call5281 = callmethodChecked(this, "checkIndent", [0]);
      setLineNumber(2598);    // compilenode identifier
      var_statementToken = var_sym;
      setLineNumber(2599);    // compilenode identifier
      var var_stok = var_sym;
      setLineNumber(2600);    // compilenode call
      onSelf = true;
      var call5282 = callmethodChecked(this, "next", [0]);
      setLineNumber(2601);    // compilenode identifier
      onSelf = true;
      var call5283 = callmethodChecked(this, "methodsignature", [1], GraceFalse);
      var var_m = call5283;
      setLineNumber(2602);    // compilenode identifier
      var call5284 = callmethodChecked(var_m, "m", [0]);
      var var_meth = call5284;
      setLineNumber(2603);    // compilenode identifier
      var call5285 = callmethodChecked(var_m, "sig", [0]);
      var var_signature = call5285;
      setLineNumber(2604);    // compilenode identifier
      var call5286 = callmethodChecked(var_m, "rtype", [0]);
      var var_dtype = call5286;
      setLineNumber(2605);    // compilenode array
      var array5287 = new PrimitiveGraceList([]);
      var var_body = array5287;
      setLineNumber(2606);    // compilenode vardec
      var var_localMin;
      setLineNumber(2607);    // compilenode call
      onSelf = true;
      var call5288 = callmethodChecked(this, "doannotation", [0]);
      var var_anns = call5288;
      var if5289 = GraceDone;
      setLineNumber(2608);    // compilenode string
      var string5290 = new GraceString("lbrace");
      onSelf = true;
      var call5291 = callmethodChecked(this, "accept", [1], string5290);
      if (Grace_isTrue(call5291)) {
        setLineNumber(2609);    // compilenode call
        onSelf = true;
        var call5292 = callmethodChecked(this, "next", [0]);
        setLineNumber(2610);    // compilenode identifier
        var_localMin = var_minIndentLevel;
        var if5293 = GraceDone;
        setLineNumber(2611);    // compilenode identifier
        var call5294 = callmethodChecked(var_stok, "line", [0]);
        var call5296 = callmethodChecked(var_sym, "line", [0]);
        var opresult5298 = callmethodChecked(call5296, "==", [1], call5294);
        if (Grace_isTrue(opresult5298)) {
          setLineNumber(2612);    // compilenode identifier
          var call5300 = callmethodChecked(var_sym, "linePos", [0]);
          var diff5302 = callmethodChecked(call5300, "-", [1], new GraceNum(1));
          var_minIndentLevel = diff5302;
          if5293 = GraceDone;
        } else {
          setLineNumber(2614);    // compilenode identifier
          var call5304 = callmethodChecked(var_stok, "indent", [0]);
          var opresult5306 = callmethodChecked(call5304, "+", [1], new GraceNum(1));
          var_minIndentLevel = opresult5306;
          if5293 = GraceDone;
        }
        setLineNumber(2616);    // compilenode object
        var obj5307 = Grace_allocObject(GraceObject, "object");
        obj5307.definitionModule = "parser";
        obj5307.definitionLine = 2616;
        obj5307.outer = this;
        var reader_parser_outer5308 = function() {
          return this.outer;
        };
        obj5307.methods["outer"] = reader_parser_outer5308;
        var obj_init_5307 = function() {
          var origSuperDepth = superDepth;
          superDepth = obj5307;
          setLineNumber(2617);    // compilenode string
          var string5309 = new GraceString("lbrace");
          obj5307.data["kind"] = string5309;
          var reader_parser_kind5310 = function() {
            return this.data["kind"];
          };
          reader_parser_kind5310.def = true;
          obj5307.methods["kind"] = reader_parser_kind5310;
          setLineNumber(2618);    // compilenode string
          var string5311 = new GraceString("");
          obj5307.data["register"] = string5311;
          var reader_parser_register5312 = function() {
            return this.data["register"];
          };
          obj5307.methods["register"] = reader_parser_register5312;
          obj5307.data["register"] = string5311;
          var writer_parser_register5312 = function(argcv, o) {
            this.data["register"] = o;
            return GraceDone;
          };
          obj5307.methods["register:="] = writer_parser_register5312;
          obj5307.mutable = true;
          superDepth = origSuperDepth;
        };
        obj_init_5307.apply(obj5307, []);
        setLineNumber(2616);    // compilenode identifier
        var call5313 = callmethodChecked(var_values, "push", [1], obj5307);
        setLineNumber(2620);    // compilenode call
        onSelf = true;
        var call5314 = callmethodChecked(this, "statement", [0]);
        setLineNumber(2621);    // compilenode identifier
        var call5315 = callmethodChecked(var_values, "pop", [0]);
        var var_s = call5315;
        setLineNumber(2622);    // compilenode block
        var block5316 = new GraceBlock(this, 2622, 0);
        block5316.real = function() {
          var string5317 = new GraceString("lbrace");
          var call5319 = callmethodChecked(var_s, "kind", [0]);
          var opresult5321 = callmethodChecked(call5319, "\u2260", [1], string5317);
          return opresult5321;
        };
        var block5322 = new GraceBlock(this, 2622, 0);
        block5322.real = function() {
          setLineNumber(2626);    // compilenode identifier
          var call5323 = callmethodChecked(var_body, "push", [1], var_s);
          setLineNumber(2627);    // compilenode call
          onSelf = true;
          var call5324 = callmethodChecked(this, "statement", [0]);
          setLineNumber(2628);    // compilenode identifier
          var call5325 = callmethodChecked(var_values, "pop", [0]);
          var_s = call5325;
          return GraceDone;
        };
        var call5326 = callmethodChecked(var_prelude, "while()do", [1, 1], block5316, block5322);
        var if5327 = GraceDone;
        setLineNumber(2630);    // compilenode string
        var string5328 = new GraceString("rbrace");
        var call5330 = callmethodChecked(var_sym, "kind", [0]);
        var opresult5332 = callmethodChecked(call5330, "\u2260", [1], string5328);
        if (Grace_isTrue(opresult5332)) {
          setLineNumber(2631);    // compilenode identifier
          var call5333 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call5334 = callmethodChecked(call5333, "new", [0]);
          var var_suggestion = call5334;
          setLineNumber(2632);    // compilenode identifier
          onSelf = true;
          var call5335 = callmethodChecked(this, "findClosingBrace", [2], var_btok, GraceFalse);
          var var_closingBrace = call5335;
          var if5336 = GraceDone;
          setLineNumber(2633);    // compilenode identifier
          var call5337 = callmethodChecked(var_closingBrace, "found", [0]);
          var call5338 = callmethodChecked(call5337, "not", [0]);
          if (Grace_isTrue(call5338)) {
            var if5339 = GraceDone;
            setLineNumber(2634);    // compilenode identifier
            var call5341 = callmethodChecked(var_closingBrace, "tok", [0]);
            var opresult5343 = callmethodChecked(call5341, "==", [1], var_sym);
            if (Grace_isTrue(opresult5343)) {
              setLineNumber(2635);    // compilenode string
              var string5344 = new GraceString("}");
              var call5345 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string5344, var_lastToken);
              if5339 = call5345;
            } else {
              setLineNumber(2637);    // compilenode identifier
              var call5347 = callmethodChecked(var_closingBrace, "tok", [0]);
              var call5348 = callmethodChecked(call5347, "line", [0]);
              var opresult5350 = callmethodChecked(call5348, "+", [1], new GraceNum(0.1));
              var string5351 = new GraceString("}");
              var call5352 = callmethodChecked(var_suggestion, "addLine", [2], opresult5350, string5351);
              if5339 = call5352;
            }
            if5336 = if5339;
          }
          setLineNumber(2640);    // compilenode identifier
          var call5353 = callmethodChecked(var_suggestion, "deleteToken", [1], var_sym);
          setLineNumber(2641);    // compilenode string
          var string5354 = new GraceString("a method must end with a '}'.");
          setLineNumber(2642);    // compilenode identifier
          var call5355 = callmethodChecked(var_sym, "line", [0]);
          var call5356 = callmethodChecked(var_sym, "linePos", [0]);
          setLineNumber(2641);    // compilenode identifier
          var call5357 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string5354, call5355, call5356, var_suggestion);
          if5327 = call5357;
        }
        setLineNumber(2644);    // compilenode call
        onSelf = true;
        var call5358 = callmethodChecked(this, "next", [0]);
        setLineNumber(2645);    // compilenode identifier
        var_minIndentLevel = var_localMin;
        if5289 = GraceDone;
      } else {
        setLineNumber(2647);    // compilenode identifier
        var call5359 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call5360 = callmethodChecked(call5359, "new", [0]);
        var var_suggestion = call5360;
        setLineNumber(2648);    // compilenode identifier
        onSelf = true;
        var call5361 = callmethodChecked(this, "findClosingBrace", [2], var_btok, GraceTrue);
        var var_closingBrace = call5361;
        var if5362 = GraceDone;
        setLineNumber(2649);    // compilenode identifier
        var call5363 = callmethodChecked(var_closingBrace, "found", [0]);
        var call5364 = callmethodChecked(call5363, "not", [0]);
        if (Grace_isTrue(call5364)) {
          var if5365 = GraceDone;
          setLineNumber(2650);    // compilenode identifier
          var call5367 = callmethodChecked(var_closingBrace, "tok", [0]);
          var opresult5369 = callmethodChecked(call5367, "==", [1], var_lastToken);
          if (Grace_isTrue(opresult5369)) {
            setLineNumber(2651);    // compilenode string
            var string5370 = new GraceString(" {}");
            var call5371 = callmethodChecked(var_suggestion, "insert()afterToken()andTrailingSpace", [1, 1, 1], string5370, var_lastToken, GraceTrue);
            if5365 = call5371;
          } else {
            setLineNumber(2653);    // compilenode identifier
            var call5373 = callmethodChecked(var_closingBrace, "tok", [0]);
            var call5374 = callmethodChecked(call5373, "line", [0]);
            var opresult5376 = callmethodChecked(call5374, "+", [1], new GraceNum(0.1));
            var string5377 = new GraceString("}");
            var call5378 = callmethodChecked(var_suggestion, "addLine", [2], opresult5376, string5377);
            setLineNumber(2654);    // compilenode string
            var string5379 = new GraceString(" {");
            var call5380 = callmethodChecked(var_suggestion, "insert()afterToken()andTrailingSpace", [1, 1, 1], string5379, var_lastToken, GraceTrue);
            if5365 = call5380;
          }
          if5362 = if5365;
        } else {
          setLineNumber(2657);    // compilenode string
          var string5381 = new GraceString(" {");
          var call5382 = callmethodChecked(var_suggestion, "insert()afterToken()andTrailingSpace", [1, 1, 1], string5381, var_lastToken, GraceTrue);
          if5362 = call5382;
        }
        setLineNumber(2659);    // compilenode string
        var string5383 = new GraceString("a method must have a '{' after the name.");
        setLineNumber(2660);    // compilenode identifier
        var call5384 = callmethodChecked(var_lastToken, "line", [0]);
        var call5385 = callmethodChecked(var_lastToken, "size", [0]);
        var call5387 = callmethodChecked(var_lastToken, "linePos", [0]);
        var opresult5389 = callmethodChecked(call5387, "+", [1], call5385);
        setLineNumber(2659);    // compilenode identifier
        var call5390 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string5383, call5384, opresult5389, var_suggestion);
        if5289 = call5390;
      }
      setLineNumber(2662);    // compilenode identifier
      var call5391 = callmethodChecked(var_btok, "line", [0]);
      var call5392 = callmethodChecked(var_util, "setline", [1], call5391);
      setLineNumber(2663);    // compilenode identifier
      var call5393 = callmethodChecked(var_ast, "methodNode", [0]);
      var call5394 = callmethodChecked(call5393, "new", [4], var_meth, var_signature, var_body, var_dtype);
      var var_o = call5394;
      setLineNumber(2664);    // compilenode identifier
      var call5395 = callmethodChecked(var_m, "typeParams", [0]);
      var call5396 = callmethodChecked(var_o, "typeParams:=", [1], call5395);
      var if5397 = GraceDone;
      setLineNumber(2665);    // compilenode identifier
      var opresult5400 = callmethodChecked(GraceFalse, "\u2260", [1], var_anns);
      if (Grace_isTrue(opresult5400)) {
        var call5401 = callmethodChecked(var_o, "annotations", [0]);
        var call5402 = callmethodChecked(call5401, "addAll", [1], var_anns);
        if5397 = call5402;
      }
      setLineNumber(2666);    // compilenode identifier
      var call5403 = callmethodChecked(var_values, "push", [1], var_o);
      setLineNumber(2667);    // compilenode call
      onSelf = true;
      var call5404 = callmethodChecked(this, "reconcileComments", [0]);
      if5278 = call5404;
    }
    return if5278;
  };
  func5277.paramCounts = [0];
  this.methods["methoddec"] = func5277;
  func5277.definitionLine = 2592;
  func5277.definitionModule = "parser";
  setLineNumber(2672);    // compilenode method
  var func5405 = function(argcv) {    // method methodDecRest(2)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_tm = arguments[curarg];
    curarg++;
    var var_sameline = arguments[curarg];
    curarg++;
    if (argcv[0] !== 2)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for methodDecRest(2)"));
    setModuleName("parser");
    setLineNumber(2680);    // compilenode identifier
    var call5406 = callmethodChecked(var_tm, "value", [0]);
    var call5407 = callmethodChecked(call5406, "value", [0]);
    var var_methname = call5407;
    setLineNumber(2681);    // compilenode identifier
    var call5408 = callmethodChecked(var_tm, "signature", [0]);
    var var_signature = call5408;
    setLineNumber(2682);    // compilenode vardec
    var var_nxt;
    setLineNumber(2683);    // compilenode block
    var block5409 = new GraceBlock(this, 2683, 0);
    block5409.real = function() {
      var string5410 = new GraceString("identifier");
      onSelf = true;
      var call5411 = callmethodChecked(this, "acceptSameLine", [1], string5410);
      var string5413 = new GraceString("identifier");
      onSelf = true;
      var call5414 = callmethodChecked(this, "accept", [1], string5413);
      var call5416 = callmethodChecked(var_sameline, "prefix!", [0]);
      var opresult5418 = callmethodChecked(call5416, "&&", [1], call5414);
      var opresult5420 = callmethodChecked(opresult5418, "||", [1], call5411);
      return opresult5420;
    };
    var block5421 = new GraceBlock(this, 2683, 0);
    block5421.real = function() {
      setLineNumber(2684);    // compilenode string
      var string5422 = new GraceString("()");
      var opresult5425 = callmethodChecked(var_methname, "++", [1], string5422);
      var_methname = opresult5425;
      setLineNumber(2685);    // compilenode identifier
      var call5426 = callmethodChecked(var_ast, "signaturePart", [0]);
      var call5427 = callmethodChecked(call5426, "new", [0]);
      var var_part = call5427;
      setLineNumber(2686);    // compilenode call
      onSelf = true;
      var call5428 = callmethodChecked(this, "pushidentifier", [0]);
      setLineNumber(2687);    // compilenode identifier
      var call5429 = callmethodChecked(var_values, "pop", [0]);
      var_nxt = call5429;
      setLineNumber(2688);    // compilenode identifier
      var call5430 = callmethodChecked(var_nxt, "value", [0]);
      var opresult5433 = callmethodChecked(var_methname, "++", [1], call5430);
      var_methname = opresult5433;
      setLineNumber(2689);    // compilenode identifier
      var call5434 = callmethodChecked(var_nxt, "value", [0]);
      var call5435 = callmethodChecked(var_part, "name:=", [1], call5434);
      var if5436 = GraceDone;
      setLineNumber(2690);    // compilenode string
      var string5437 = new GraceString("lparen");
      onSelf = true;
      var call5438 = callmethodChecked(this, "accept", [1], string5437);
      var call5439 = callmethodChecked(call5438, "not", [0]);
      if (Grace_isTrue(call5439)) {
        setLineNumber(2691);    // compilenode identifier
        var call5440 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call5441 = callmethodChecked(call5440, "new", [0]);
        var var_suggestion = call5441;
        setLineNumber(2692);    // compilenode string
        var string5442 = new GraceString("()");
        var call5443 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string5442, var_lastToken);
        setLineNumber(2694);    // compilenode string
        var string5444 = new GraceString("parameter lists must have parentheses around each parameter list.");
        setLineNumber(2693);    // compilenode string
        var string5446 = new GraceString("the declaration of a method with multiple ");
        var opresult5448 = callmethodChecked(string5446, "++", [1], string5444);
        setLineNumber(2695);    // compilenode identifier
        var call5449 = callmethodChecked(var_sym, "line", [0]);
        var call5450 = callmethodChecked(var_sym, "linePos", [0]);
        setLineNumber(2693);    // compilenode identifier
        var call5451 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], opresult5448, call5449, call5450, var_suggestion);
        if5436 = call5451;
      }
      setLineNumber(2697);    // compilenode call
      onSelf = true;
      var call5452 = callmethodChecked(this, "next", [0]);
      setLineNumber(2698);    // compilenode identifier
      var var_comma = GraceFalse;
      setLineNumber(2699);    // compilenode block
      var block5453 = new GraceBlock(this, 2699, 0);
      block5453.real = function() {
        setLineNumber(2700);    // compilenode string
        var string5454 = new GraceString("*");
        var call5456 = callmethodChecked(var_sym, "value", [0]);
        var opresult5458 = callmethodChecked(call5456, "==", [1], string5454);
        var string5460 = new GraceString("op");
        onSelf = true;
        var call5461 = callmethodChecked(this, "accept", [1], string5460);
        var opresult5463 = callmethodChecked(call5461, "&&", [1], opresult5458);
        setLineNumber(2699);    // compilenode string
        var string5465 = new GraceString("identifier");
        onSelf = true;
        var call5466 = callmethodChecked(this, "accept", [1], string5465);
        var opresult5468 = callmethodChecked(call5466, "||", [1], opresult5463);
        return opresult5468;
      };
      setLineNumber(2700);    // compilenode block
      var block5469 = new GraceBlock(this, 2700, 0);
      block5469.real = function() {
        var if5470 = GraceDone;
        setLineNumber(2701);    // compilenode string
        var string5471 = new GraceString("op");
        onSelf = true;
        var call5472 = callmethodChecked(this, "accept", [1], string5471);
        if (Grace_isTrue(call5472)) {
          setLineNumber(2702);    // compilenode call
          onSelf = true;
          var call5473 = callmethodChecked(this, "next", [0]);
          setLineNumber(2703);    // compilenode string
          var string5474 = new GraceString(" an Iterable.");
          var call5476 = callmethodChecked(var_sym, "value", [0]);
          var string5478 = new GraceString("variable length parameters (parameters prefixed by '*') are no longer part of Grace.  Consider making ");
          var opresult5480 = callmethodChecked(string5478, "++", [1], call5476);
          var opresult5482 = callmethodChecked(opresult5480, "++", [1], string5474);
          setLineNumber(2704);    // compilenode identifier
          var call5483 = callmethodChecked(var_lastToken, "line", [0]);
          var call5484 = callmethodChecked(var_lastToken, "linePos", [0]);
          setLineNumber(2703);    // compilenode identifier
          var call5485 = callmethodChecked(var_errormessages, "syntaxError()atPosition", [1, 2], opresult5482, call5483, call5484);
          if5470 = call5485;
        }
        setLineNumber(2706);    // compilenode call
        onSelf = true;
        var call5486 = callmethodChecked(this, "pushidentifier", [0]);
        setLineNumber(2707);    // compilenode identifier
        var call5487 = callmethodChecked(var_values, "pop", [0]);
        var_nxt = call5487;
        setLineNumber(2708);    // compilenode identifier
        var call5488 = callmethodChecked(var_nxt, "isBindingOccurrence:=", [1], GraceTrue);
        setLineNumber(2709);    // compilenode call
        onSelf = true;
        var call5489 = callmethodChecked(this, "optionalTypeAnnotation", [0]);
        var call5490 = callmethodChecked(var_nxt, "dtype:=", [1], call5489);
        setLineNumber(2710);    // compilenode identifier
        var call5491 = callmethodChecked(var_part, "params", [0]);
        var call5492 = callmethodChecked(call5491, "push", [1], var_nxt);
        var if5493 = GraceDone;
        setLineNumber(2711);    // compilenode string
        var string5494 = new GraceString("comma");
        onSelf = true;
        var call5495 = callmethodChecked(this, "accept", [1], string5494);
        if (Grace_isTrue(call5495)) {
          setLineNumber(2712);    // compilenode identifier
          var_comma = var_sym;
          setLineNumber(2713);    // compilenode call
          onSelf = true;
          var call5496 = callmethodChecked(this, "next", [0]);
          if5493 = call5496;
        }
        return if5493;
      };
      var call5497 = callmethodChecked(var_prelude, "while()do", [1, 1], block5453, block5469);
      var if5498 = GraceDone;
      setLineNumber(2716);    // compilenode string
      var string5499 = new GraceString("rparen");
      var call5501 = callmethodChecked(var_sym, "kind", [0]);
      var opresult5503 = callmethodChecked(call5501, "\u2260", [1], string5499);
      if (Grace_isTrue(opresult5503)) {
        setLineNumber(2717);    // compilenode identifier
        var call5504 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call5505 = callmethodChecked(call5504, "new", [0]);
        var var_suggestion = call5505;
        setLineNumber(2718);    // compilenode string
        var string5506 = new GraceString(")");
        var call5507 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string5506, var_lastToken);
        setLineNumber(2719);    // compilenode string
        var string5508 = new GraceString("a part of a multi-part method beginning with a '(' must end with a ')'.");
        setLineNumber(2720);    // compilenode identifier
        var call5509 = callmethodChecked(var_lastToken, "line", [0]);
        var call5510 = callmethodChecked(var_lastToken, "size", [0]);
        var call5512 = callmethodChecked(var_lastToken, "linePos", [0]);
        var opresult5514 = callmethodChecked(call5512, "+", [1], call5510);
        setLineNumber(2719);    // compilenode identifier
        var call5515 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string5508, call5509, opresult5514, var_suggestion);
        if5498 = call5515;
      }
      setLineNumber(2722);    // compilenode call
      onSelf = true;
      var call5516 = callmethodChecked(this, "next", [0]);
      setLineNumber(2723);    // compilenode identifier
      var call5517 = callmethodChecked(var_signature, "push", [1], var_part);
      return call5517;
    };
    var call5518 = callmethodChecked(var_prelude, "while()do", [1, 1], block5409, block5421);
    setLineNumber(2725);    // compilenode identifier
    var call5519 = callmethodChecked(var_ast, "identifierNode", [0]);
    var call5520 = callmethodChecked(call5519, "new", [2], var_methname, GraceFalse);
    var var_newName = call5520;
    setLineNumber(2726);    // compilenode identifier
    var call5521 = callmethodChecked(var_newName, "isBindingOccurrence:=", [1], GraceTrue);
    setLineNumber(2727);    // compilenode identifier
    return var_newName;
  };
  func5405.paramCounts = [2];
  this.methods["methodDecRest"] = func5405;
  func5405.definitionLine = 2672;
  func5405.definitionModule = "parser";
  setLineNumber(2730);    // compilenode method
  var func5522 = function(argcv) {    // method optionalTypeAnnotation
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for optionalTypeAnnotation"));
    setModuleName("parser");
    var if5523 = GraceDone;
    setLineNumber(2733);    // compilenode string
    var string5524 = new GraceString("colon");
    onSelf = true;
    var call5525 = callmethodChecked(this, "accept", [1], string5524);
    if (Grace_isTrue(call5525)) {
      setLineNumber(2734);    // compilenode call
      onSelf = true;
      var call5526 = callmethodChecked(this, "next", [0]);
      var if5527 = GraceDone;
      setLineNumber(2735);    // compilenode block
      var block5528 = new GraceBlock(this, 2735, 0);
      block5528.real = function() {
        onSelf = true;
        var call5529 = callmethodChecked(this, "typeexpression", [0]);
        return call5529;
      };
      onSelf = true;
      var call5530 = callmethodChecked(this, "didConsume", [1], block5528);
      if (Grace_isTrue(call5530)) {
        setLineNumber(2736);    // compilenode identifier
        var call5531 = callmethodChecked(var_values, "pop", [0]);
        if5527 = call5531;
      } else {
        setLineNumber(2738);    // compilenode call
        onSelf = true;
        var call5532 = callmethodChecked(this, "checkBadTypeLiteral", [0]);
        setLineNumber(2739);    // compilenode array
        var array5533 = new PrimitiveGraceList([]);
        var var_suggestions = array5533;
        setLineNumber(2740);    // compilenode identifier
        var call5534 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call5535 = callmethodChecked(call5534, "new", [0]);
        var var_suggestion = call5535;
        setLineNumber(2741);    // compilenode string
        var string5536 = new GraceString(" \u00abtype name\u00bb");
        var call5537 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string5536, var_lastToken);
        setLineNumber(2742);    // compilenode identifier
        var call5538 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
        setLineNumber(2743);    // compilenode identifier
        var call5539 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call5540 = callmethodChecked(call5539, "new", [0]);
        var_suggestion = call5540;
        setLineNumber(2744);    // compilenode identifier
        var call5541 = callmethodChecked(var_suggestion, "deleteToken()leading()trailing", [1, 1, 1], var_lastToken, GraceTrue, GraceFalse);
        setLineNumber(2745);    // compilenode identifier
        var call5542 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
        setLineNumber(2746);    // compilenode string
        var string5543 = new GraceString("a type name or type expression must follow ':'.");
        setLineNumber(2747);    // compilenode identifier
        var call5544 = callmethodChecked(var_sym, "line", [0]);
        var call5545 = callmethodChecked(var_sym, "linePos", [0]);
        setLineNumber(2746);    // compilenode identifier
        var call5546 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestions", [1, 2, 1], string5543, call5544, call5545, var_suggestions);
        if5527 = call5546;
      }
      if5523 = if5527;
    } else {
      setLineNumber(2750);    // compilenode identifier
      if5523 = GraceFalse;
    }
    return if5523;
  };
  func5522.paramCounts = [0];
  this.methods["optionalTypeAnnotation"] = func5522;
  func5522.definitionLine = 2730;
  func5522.definitionModule = "parser";
  setLineNumber(2753);    // compilenode method
  var func5547 = function(argcv) {    // method methodsignature(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_sameline = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for methodsignature(1)"));
    setModuleName("parser");
    var if5548 = GraceDone;
    setLineNumber(2755);    // compilenode string
    var string5549 = new GraceString("lsquare");
    var call5551 = callmethodChecked(var_sym, "kind", [0]);
    var opresult5553 = callmethodChecked(call5551, "\u2260", [1], string5549);
    var string5555 = new GraceString("op");
    var call5557 = callmethodChecked(var_sym, "kind", [0]);
    var opresult5559 = callmethodChecked(call5557, "\u2260", [1], string5555);
    var string5561 = new GraceString("identifier");
    var call5563 = callmethodChecked(var_sym, "kind", [0]);
    var opresult5565 = callmethodChecked(call5563, "\u2260", [1], string5561);
    var opresult5567 = callmethodChecked(opresult5565, "&&", [1], opresult5559);
    var opresult5569 = callmethodChecked(opresult5567, "&&", [1], opresult5553);
    if (Grace_isTrue(opresult5569)) {
      setLineNumber(2756);    // compilenode identifier
      var call5570 = callmethodChecked(var_errormessages, "suggestion", [0]);
      var call5571 = callmethodChecked(call5570, "new", [0]);
      var var_suggestion = call5571;
      setLineNumber(2757);    // compilenode string
      var string5572 = new GraceString(" \u00abmethod name\u00bb");
      var call5573 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string5572, var_lastToken);
      setLineNumber(2758);    // compilenode string
      var string5574 = new GraceString("a method name must start with an identifier, or be an operator.");
      setLineNumber(2759);    // compilenode identifier
      var call5575 = callmethodChecked(var_lastToken, "line", [0]);
      var call5577 = callmethodChecked(var_lastToken, "size", [0]);
      var call5579 = callmethodChecked(var_lastToken, "linePos", [0]);
      var opresult5581 = callmethodChecked(call5579, "+", [1], call5577);
      var opresult5583 = callmethodChecked(opresult5581, "+", [1], new GraceNum(1));
      setLineNumber(2758);    // compilenode identifier
      var call5584 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string5574, call5575, opresult5583, var_suggestion);
      if5548 = call5584;
    }
    setLineNumber(2762);    // compilenode call
    onSelf = true;
    var call5585 = callmethodChecked(this, "pushidentifier", [0]);
    setLineNumber(2763);    // compilenode identifier
    var call5586 = callmethodChecked(var_values, "pop", [0]);
    var var_meth = call5586;
    setLineNumber(2764);    // compilenode identifier
    var call5587 = callmethodChecked(var_meth, "isBindingOccurrence:=", [1], GraceTrue);
    setLineNumber(2765);    // compilenode array
    var array5588 = new PrimitiveGraceList([]);
    var var_signature = array5588;
    setLineNumber(2766);    // compilenode identifier
    var call5589 = callmethodChecked(var_meth, "value", [0]);
    var call5590 = callmethodChecked(var_ast, "signaturePart", [0]);
    var call5591 = callmethodChecked(call5590, "partName", [1], call5589);
    var var_part = call5591;
    setLineNumber(2767);    // compilenode identifier
    var call5592 = callmethodChecked(var_meth, "line", [0]);
    var call5593 = callmethodChecked(var_part, "line:=", [1], call5592);
    setLineNumber(2768);    // compilenode identifier
    var call5594 = callmethodChecked(var_meth, "linePos", [0]);
    var call5595 = callmethodChecked(var_part, "linePos:=", [1], call5594);
    setLineNumber(2769);    // compilenode identifier
    var call5596 = callmethodChecked(var_signature, "push", [1], var_part);
    var if5597 = GraceDone;
    setLineNumber(2770);    // compilenode block
    var block5598 = new GraceBlock(this, 2770, 0);
    block5598.real = function() {
      var string5599 = new GraceString("rsquare");
      var call5601 = callmethodChecked(var_sym, "kind", [0]);
      var opresult5603 = callmethodChecked(call5601, "==", [1], string5599);
      return opresult5603;
    };
    var string5605 = new GraceString("[");
    var call5607 = callmethodChecked(var_meth, "value", [0]);
    var opresult5609 = callmethodChecked(call5607, "==", [1], string5605);
    var opresult5611 = callmethodChecked(opresult5609, "&&", [1], block5598);
    if (Grace_isTrue(opresult5611)) {
      setLineNumber(2771);    // compilenode string
      var string5612 = new GraceString("methods named '[]' and '[]:=' are no longer part of Grace.");
      setLineNumber(2772);    // compilenode identifier
      var call5613 = callmethodChecked(var_lastToken, "line", [0]);
      var call5614 = callmethodChecked(var_lastToken, "linePos", [0]);
      var call5615 = callmethodChecked(var_sym, "linePos", [0]);
      setLineNumber(2771);    // compilenode identifier
      var call5616 = callmethodChecked(var_errormessages, "syntaxError()atRange", [1, 3], string5612, call5613, call5614, call5615);
      if5597 = call5616;
    }
    setLineNumber(2774);    // compilenode identifier
    var var_myTypeParams = GraceFalse;
    var if5617 = GraceDone;
    setLineNumber(2775);    // compilenode string
    var string5618 = new GraceString("lgeneric");
    onSelf = true;
    var call5619 = callmethodChecked(this, "accept", [1], string5618);
    if (Grace_isTrue(call5619)) {
      onSelf = true;
      var call5620 = callmethodChecked(this, "typeparameters", [0]);
      var_myTypeParams = call5620;
      if5617 = GraceDone;
    }
    var if5621 = GraceDone;
    setLineNumber(2776);    // compilenode string
    var string5622 = new GraceString("bind");
    onSelf = true;
    var call5623 = callmethodChecked(this, "accept", [1], string5622);
    if (Grace_isTrue(call5623)) {
      setLineNumber(2777);    // compilenode call
      onSelf = true;
      var call5624 = callmethodChecked(this, "next", [0]);
      setLineNumber(2778);    // compilenode string
      var string5625 = new GraceString(":=");
      var call5627 = callmethodChecked(var_meth, "value", [0]);
      var opresult5629 = callmethodChecked(call5627, "++", [1], string5625);
      var call5630 = callmethodChecked(var_meth, "value:=", [1], opresult5629);
      setLineNumber(2779);    // compilenode string
      var string5631 = new GraceString(":=");
      var call5633 = callmethodChecked(var_part, "name", [0]);
      var opresult5635 = callmethodChecked(call5633, "++", [1], string5631);
      var call5636 = callmethodChecked(var_part, "name:=", [1], opresult5635);
      if5621 = call5636;
    } else {
      var if5637 = GraceDone;
      setLineNumber(2780);    // compilenode string
      var string5638 = new GraceString("prefix");
      var call5640 = callmethodChecked(var_meth, "value", [0]);
      var opresult5642 = callmethodChecked(call5640, "==", [1], string5638);
      var string5644 = new GraceString("op");
      onSelf = true;
      var call5645 = callmethodChecked(this, "accept", [1], string5644);
      var opresult5647 = callmethodChecked(call5645, "&&", [1], opresult5642);
      if (Grace_isTrue(opresult5647)) {
        setLineNumber(2781);    // compilenode identifier
        var call5648 = callmethodChecked(var_sym, "value", [0]);
        var call5650 = callmethodChecked(var_meth, "value", [0]);
        var opresult5652 = callmethodChecked(call5650, "++", [1], call5648);
        var call5653 = callmethodChecked(var_meth, "value:=", [1], opresult5652);
        setLineNumber(2782);    // compilenode identifier
        var call5654 = callmethodChecked(var_sym, "value", [0]);
        var call5656 = callmethodChecked(var_part, "name", [0]);
        var opresult5658 = callmethodChecked(call5656, "++", [1], call5654);
        var call5659 = callmethodChecked(var_part, "name:=", [1], opresult5658);
        setLineNumber(2783);    // compilenode call
        onSelf = true;
        var call5660 = callmethodChecked(this, "next", [0]);
        if5637 = call5660;
      }
      if5621 = if5637;
    }
    setLineNumber(2785);    // compilenode identifier
    var var_dtype = GraceFalse;
    var if5661 = GraceDone;
    setLineNumber(2786);    // compilenode string
    var string5662 = new GraceString("lparen");
    onSelf = true;
    var call5663 = callmethodChecked(this, "accept", [1], string5662);
    if (Grace_isTrue(call5663)) {
      setLineNumber(2787);    // compilenode identifier
      var var_lparen = var_sym;
      setLineNumber(2788);    // compilenode identifier
      var call5664 = callmethodChecked(var_sym, "linePos", [0]);
      var call5665 = callmethodChecked(var_part, "linePos:=", [1], call5664);
      setLineNumber(2789);    // compilenode call
      onSelf = true;
      var call5666 = callmethodChecked(this, "next", [0]);
      setLineNumber(2790);    // compilenode vardec
      var var_id;
      setLineNumber(2791);    // compilenode identifier
      var var_comma = GraceFalse;
      setLineNumber(2792);    // compilenode block
      var block5667 = new GraceBlock(this, 2792, 0);
      block5667.real = function() {
        setLineNumber(2793);    // compilenode string
        var string5668 = new GraceString("*");
        var call5670 = callmethodChecked(var_sym, "value", [0]);
        var opresult5672 = callmethodChecked(call5670, "==", [1], string5668);
        var string5674 = new GraceString("op");
        onSelf = true;
        var call5675 = callmethodChecked(this, "accept", [1], string5674);
        var opresult5677 = callmethodChecked(call5675, "&&", [1], opresult5672);
        setLineNumber(2792);    // compilenode string
        var string5679 = new GraceString("identifier");
        onSelf = true;
        var call5680 = callmethodChecked(this, "accept", [1], string5679);
        var opresult5682 = callmethodChecked(call5680, "||", [1], opresult5677);
        return opresult5682;
      };
      setLineNumber(2793);    // compilenode block
      var block5683 = new GraceBlock(this, 2793, 0);
      block5683.real = function() {
        var if5684 = GraceDone;
        setLineNumber(2796);    // compilenode string
        var string5685 = new GraceString("op");
        onSelf = true;
        var call5686 = callmethodChecked(this, "accept", [1], string5685);
        if (Grace_isTrue(call5686)) {
          setLineNumber(2797);    // compilenode call
          onSelf = true;
          var call5687 = callmethodChecked(this, "next", [0]);
          setLineNumber(2798);    // compilenode string
          var string5688 = new GraceString(" an Iterable.");
          var call5690 = callmethodChecked(var_sym, "value", [0]);
          var string5692 = new GraceString("variable length parameters (parameters prefixed by '*') are no longer part of Grace.  Consider making ");
          var opresult5694 = callmethodChecked(string5692, "++", [1], call5690);
          var opresult5696 = callmethodChecked(opresult5694, "++", [1], string5688);
          setLineNumber(2799);    // compilenode identifier
          var call5697 = callmethodChecked(var_lastToken, "line", [0]);
          var call5698 = callmethodChecked(var_lastToken, "linePos", [0]);
          setLineNumber(2798);    // compilenode identifier
          var call5699 = callmethodChecked(var_errormessages, "syntaxError()atPosition", [1, 2], opresult5696, call5697, call5698);
          if5684 = call5699;
        }
        setLineNumber(2801);    // compilenode call
        onSelf = true;
        var call5700 = callmethodChecked(this, "pushidentifier", [0]);
        setLineNumber(2802);    // compilenode identifier
        var call5701 = callmethodChecked(var_values, "pop", [0]);
        var_id = call5701;
        setLineNumber(2803);    // compilenode identifier
        var call5702 = callmethodChecked(var_id, "isBindingOccurrence:=", [1], GraceTrue);
        setLineNumber(2804);    // compilenode call
        onSelf = true;
        var call5703 = callmethodChecked(this, "optionalTypeAnnotation", [0]);
        var_dtype = call5703;
        setLineNumber(2805);    // compilenode identifier
        var call5704 = callmethodChecked(var_id, "dtype:=", [1], var_dtype);
        setLineNumber(2806);    // compilenode identifier
        var call5705 = callmethodChecked(var_part, "params", [0]);
        var call5706 = callmethodChecked(call5705, "push", [1], var_id);
        var if5707 = GraceDone;
        setLineNumber(2807);    // compilenode string
        var string5708 = new GraceString("comma");
        onSelf = true;
        var call5709 = callmethodChecked(this, "accept", [1], string5708);
        if (Grace_isTrue(call5709)) {
          setLineNumber(2808);    // compilenode identifier
          var_comma = var_sym;
          setLineNumber(2809);    // compilenode call
          onSelf = true;
          var call5710 = callmethodChecked(this, "next", [0]);
          if5707 = call5710;
        } else {
          var if5711 = GraceDone;
          setLineNumber(2810);    // compilenode string
          var string5712 = new GraceString("rparen");
          var call5714 = callmethodChecked(var_sym, "kind", [0]);
          var opresult5716 = callmethodChecked(call5714, "\u2260", [1], string5712);
          if (Grace_isTrue(opresult5716)) {
            var if5717 = GraceDone;
            setLineNumber(2811);    // compilenode string
            var string5718 = new GraceString("rparen");
            var call5720 = callmethodChecked(var_sym, "kind", [0]);
            var opresult5722 = callmethodChecked(call5720, "\u2260", [1], string5718);
            if (Grace_isTrue(opresult5722)) {
              setLineNumber(2812);    // compilenode identifier
              var call5723 = callmethodChecked(var_errormessages, "suggestion", [0]);
              var call5724 = callmethodChecked(call5723, "new", [0]);
              var var_suggestion = call5724;
              setLineNumber(2813);    // compilenode string
              var string5725 = new GraceString(")");
              var call5726 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string5725, var_lastToken);
              setLineNumber(2814);    // compilenode string
              var string5727 = new GraceString("a part of a method beginning with a '(' must end with a ')'.");
              setLineNumber(2815);    // compilenode identifier
              var call5728 = callmethodChecked(var_lastToken, "line", [0]);
              var call5729 = callmethodChecked(var_lastToken, "size", [0]);
              var call5731 = callmethodChecked(var_lastToken, "linePos", [0]);
              var opresult5733 = callmethodChecked(call5731, "+", [1], call5729);
              setLineNumber(2814);    // compilenode identifier
              var call5734 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string5727, call5728, opresult5733, var_suggestion);
              if5717 = call5734;
            }
            if5711 = if5717;
          }
          if5707 = if5711;
        }
        return if5707;
      };
      var call5735 = callmethodChecked(var_prelude, "while()do", [1, 1], block5667, block5683);
      var if5736 = GraceDone;
      setLineNumber(2819);    // compilenode string
      var string5737 = new GraceString("rparen");
      var call5739 = callmethodChecked(var_sym, "kind", [0]);
      var opresult5741 = callmethodChecked(call5739, "\u2260", [1], string5737);
      if (Grace_isTrue(opresult5741)) {
        setLineNumber(2820);    // compilenode identifier
        var call5742 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call5743 = callmethodChecked(call5742, "new", [0]);
        var var_suggestion = call5743;
        setLineNumber(2821);    // compilenode block
        var block5744 = new GraceBlock(this, 2821, 1);
        setLineNumber(1);    // compilenode identifier
        block5744.real = function(var_t) {
          setLineNumber(2821);    // compilenode identifier
          var call5745 = callmethodChecked(var_lastToken, "line", [0]);
          var call5747 = callmethodChecked(var_t, "line", [0]);
          var opresult5749 = callmethodChecked(call5747, "==", [1], call5745);
          var string5751 = new GraceString("rparen");
          var call5753 = callmethodChecked(var_t, "kind", [0]);
          var opresult5755 = callmethodChecked(call5753, "==", [1], string5751);
          var opresult5757 = callmethodChecked(opresult5755, "&&", [1], opresult5749);
          return opresult5757;
        };
        onSelf = true;
        var call5758 = callmethodChecked(this, "findNextToken", [1], block5744);
        var var_rparen = call5758;
        var if5759 = GraceDone;
        setLineNumber(2822);    // compilenode identifier
        var opresult5762 = callmethodChecked(GraceFalse, "==", [1], var_rparen);
        if (Grace_isTrue(opresult5762)) {
          setLineNumber(2823);    // compilenode string
          var string5763 = new GraceString(")");
          var call5764 = callmethodChecked(var_suggestion, "replaceToken()with", [1, 1], var_lastToken, string5763);
          if5759 = call5764;
        } else {
          setLineNumber(2825);    // compilenode identifier
          var call5765 = callmethodChecked(var_suggestion, "deleteToken", [1], var_sym);
          if5759 = call5765;
        }
        setLineNumber(2827);    // compilenode string
        var string5766 = new GraceString("a part of a method beginning with a '(' must end with a ')'.");
        setLineNumber(2828);    // compilenode identifier
        var call5767 = callmethodChecked(var_lastToken, "line", [0]);
        var call5768 = callmethodChecked(var_lastToken, "linePos", [0]);
        var call5769 = callmethodChecked(var_lastToken, "linePos", [0]);
        setLineNumber(2827);    // compilenode identifier
        var call5770 = callmethodChecked(var_errormessages, "syntaxError()atRange()withSuggestion", [1, 3, 1], string5766, call5767, call5768, call5769, var_suggestion);
        if5736 = call5770;
      }
      var if5771 = GraceDone;
      setLineNumber(2830);    // compilenode identifier
      var call5772 = callmethodChecked(var_part, "line", [0]);
      var call5774 = callmethodChecked(var_sym, "line", [0]);
      var opresult5776 = callmethodChecked(call5774, "==", [1], call5772);
      if (Grace_isTrue(opresult5776)) {
        setLineNumber(2831);    // compilenode identifier
        var call5777 = callmethodChecked(var_part, "linePos", [0]);
        var call5779 = callmethodChecked(var_sym, "linePos", [0]);
        var diff5781 = callmethodChecked(call5779, "-", [1], call5777);
        var call5782 = callmethodChecked(var_part, "lineLength:=", [1], diff5781);
        if5771 = call5782;
      }
      setLineNumber(2833);    // compilenode call
      onSelf = true;
      var call5783 = callmethodChecked(this, "next", [0]);
      var if5784 = GraceDone;
      setLineNumber(2835);    // compilenode string
      var string5785 = new GraceString("identifier");
      onSelf = true;
      var call5786 = callmethodChecked(this, "acceptSameLine", [1], string5785);
      setLineNumber(2834);    // compilenode string
      var string5788 = new GraceString("identifier");
      onSelf = true;
      var call5789 = callmethodChecked(this, "accept", [1], string5788);
      var call5791 = callmethodChecked(var_sameline, "prefix!", [0]);
      var opresult5793 = callmethodChecked(call5791, "&&", [1], call5789);
      var opresult5795 = callmethodChecked(opresult5793, "||", [1], call5786);
      if (Grace_isTrue(opresult5795)) {
        setLineNumber(2838);    // compilenode array
        var array5796 = new PrimitiveGraceList([]);
        var call5797 = callmethodChecked(var_ast, "methodNode", [0]);
        var call5798 = callmethodChecked(call5797, "new", [4], var_meth, var_signature, array5796, GraceFalse);
        var var_tm = call5798;
        setLineNumber(2839);    // compilenode identifier
        onSelf = true;
        var call5799 = callmethodChecked(this, "methodDecRest", [2], var_tm, var_sameline);
        var_meth = call5799;
        if5784 = GraceDone;
      }
      if5661 = if5784;
    }
    var if5800 = GraceDone;
    setLineNumber(2842);    // compilenode string
    var string5801 = new GraceString("arrow");
    onSelf = true;
    var call5802 = callmethodChecked(this, "accept", [1], string5801);
    if (Grace_isTrue(call5802)) {
      setLineNumber(2844);    // compilenode call
      onSelf = true;
      var call5803 = callmethodChecked(this, "next", [0]);
      setLineNumber(2845);    // compilenode call
      onSelf = true;
      var call5804 = callmethodChecked(this, "typeexpression", [0]);
      setLineNumber(2846);    // compilenode identifier
      var call5805 = callmethodChecked(var_values, "pop", [0]);
      var_dtype = call5805;
      if5800 = GraceDone;
    } else {
      setLineNumber(2848);    // compilenode identifier
      var_dtype = GraceFalse;
      if5800 = GraceDone;
    }
    setLineNumber(2850);    // compilenode object
    var obj5806 = Grace_allocObject(GraceObject, "parser.object");
    obj5806.definitionModule = "parser";
    obj5806.definitionLine = 2850;
    obj5806.outer = this;
    var reader_parser_outer5807 = function() {
      return this.outer;
    };
    obj5806.methods["outer"] = reader_parser_outer5807;
    var obj_init_5806 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj5806;
      setLineNumber(2851);    // compilenode identifier
      obj5806.data["m"] = var_meth;
      var reader_parser_m5808 = function() {
        return this.data["m"];
      };
      reader_parser_m5808.def = true;
      obj5806.methods["m"] = reader_parser_m5808;
      setLineNumber(2852);    // compilenode identifier
      obj5806.data["sig"] = var_signature;
      var reader_parser_sig5809 = function() {
        return this.data["sig"];
      };
      reader_parser_sig5809.def = true;
      obj5806.methods["sig"] = reader_parser_sig5809;
      setLineNumber(2853);    // compilenode identifier
      obj5806.data["rtype"] = var_dtype;
      var reader_parser_rtype5810 = function() {
        return this.data["rtype"];
      };
      reader_parser_rtype5810.def = true;
      obj5806.methods["rtype"] = reader_parser_rtype5810;
      setLineNumber(2854);    // compilenode identifier
      obj5806.data["typeParams"] = var_myTypeParams;
      var reader_parser_typeParams5811 = function() {
        return this.data["typeParams"];
      };
      reader_parser_typeParams5811.def = true;
      obj5806.methods["typeParams"] = reader_parser_typeParams5811;
      superDepth = origSuperDepth;
    };
    obj_init_5806.apply(obj5806, []);
    return obj5806;
  };
  func5547.paramCounts = [1];
  this.methods["methodsignature"] = func5547;
  func5547.definitionLine = 2753;
  func5547.definitionModule = "parser";
    var func5812 = function(argcv) {    // method methodsignature(1     )()object
      var curarg = 1;
      var var_sameline = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      // Start argument processing
      curarg = 1;
      curarg++;
      // End argument processing
      setModuleName("parser");
      var returnTarget = invocationCount;
      invocationCount++;
      var if5813 = GraceDone;
      setLineNumber(2755);    // compilenode string
      var string5814 = new GraceString("lsquare");
      var call5816 = callmethodChecked(var_sym, "kind", [0]);
      var opresult5818 = callmethodChecked(call5816, "\u2260", [1], string5814);
      var string5820 = new GraceString("op");
      var call5822 = callmethodChecked(var_sym, "kind", [0]);
      var opresult5824 = callmethodChecked(call5822, "\u2260", [1], string5820);
      var string5826 = new GraceString("identifier");
      var call5828 = callmethodChecked(var_sym, "kind", [0]);
      var opresult5830 = callmethodChecked(call5828, "\u2260", [1], string5826);
      var opresult5832 = callmethodChecked(opresult5830, "&&", [1], opresult5824);
      var opresult5834 = callmethodChecked(opresult5832, "&&", [1], opresult5818);
      if (Grace_isTrue(opresult5834)) {
        setLineNumber(2756);    // compilenode identifier
        var call5835 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call5836 = callmethodChecked(call5835, "new", [0]);
        var var_suggestion = call5836;
        setLineNumber(2757);    // compilenode string
        var string5837 = new GraceString(" \u00abmethod name\u00bb");
        var call5838 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string5837, var_lastToken);
        setLineNumber(2758);    // compilenode string
        var string5839 = new GraceString("a method name must start with an identifier, or be an operator.");
        setLineNumber(2759);    // compilenode identifier
        var call5840 = callmethodChecked(var_lastToken, "line", [0]);
        var call5842 = callmethodChecked(var_lastToken, "size", [0]);
        var call5844 = callmethodChecked(var_lastToken, "linePos", [0]);
        var opresult5846 = callmethodChecked(call5844, "+", [1], call5842);
        var opresult5848 = callmethodChecked(opresult5846, "+", [1], new GraceNum(1));
        setLineNumber(2758);    // compilenode identifier
        var call5849 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string5839, call5840, opresult5848, var_suggestion);
        if5813 = call5849;
      }
      setLineNumber(2762);    // compilenode call
      onSelf = true;
      var call5850 = callmethodChecked(this, "pushidentifier", [0]);
      setLineNumber(2763);    // compilenode identifier
      var call5851 = callmethodChecked(var_values, "pop", [0]);
      var var_meth = call5851;
      setLineNumber(2764);    // compilenode identifier
      var call5852 = callmethodChecked(var_meth, "isBindingOccurrence:=", [1], GraceTrue);
      setLineNumber(2765);    // compilenode array
      var array5853 = new PrimitiveGraceList([]);
      var var_signature = array5853;
      setLineNumber(2766);    // compilenode identifier
      var call5854 = callmethodChecked(var_meth, "value", [0]);
      var call5855 = callmethodChecked(var_ast, "signaturePart", [0]);
      var call5856 = callmethodChecked(call5855, "partName", [1], call5854);
      var var_part = call5856;
      setLineNumber(2767);    // compilenode identifier
      var call5857 = callmethodChecked(var_meth, "line", [0]);
      var call5858 = callmethodChecked(var_part, "line:=", [1], call5857);
      setLineNumber(2768);    // compilenode identifier
      var call5859 = callmethodChecked(var_meth, "linePos", [0]);
      var call5860 = callmethodChecked(var_part, "linePos:=", [1], call5859);
      setLineNumber(2769);    // compilenode identifier
      var call5861 = callmethodChecked(var_signature, "push", [1], var_part);
      var if5862 = GraceDone;
      setLineNumber(2770);    // compilenode block
      var block5863 = new GraceBlock(this, 2770, 0);
      block5863.real = function() {
        var string5864 = new GraceString("rsquare");
        var call5866 = callmethodChecked(var_sym, "kind", [0]);
        var opresult5868 = callmethodChecked(call5866, "==", [1], string5864);
        return opresult5868;
      };
      var string5870 = new GraceString("[");
      var call5872 = callmethodChecked(var_meth, "value", [0]);
      var opresult5874 = callmethodChecked(call5872, "==", [1], string5870);
      var opresult5876 = callmethodChecked(opresult5874, "&&", [1], block5863);
      if (Grace_isTrue(opresult5876)) {
        setLineNumber(2771);    // compilenode string
        var string5877 = new GraceString("methods named '[]' and '[]:=' are no longer part of Grace.");
        setLineNumber(2772);    // compilenode identifier
        var call5878 = callmethodChecked(var_lastToken, "line", [0]);
        var call5879 = callmethodChecked(var_lastToken, "linePos", [0]);
        var call5880 = callmethodChecked(var_sym, "linePos", [0]);
        setLineNumber(2771);    // compilenode identifier
        var call5881 = callmethodChecked(var_errormessages, "syntaxError()atRange", [1, 3], string5877, call5878, call5879, call5880);
        if5862 = call5881;
      }
      setLineNumber(2774);    // compilenode identifier
      var var_myTypeParams = GraceFalse;
      var if5882 = GraceDone;
      setLineNumber(2775);    // compilenode string
      var string5883 = new GraceString("lgeneric");
      onSelf = true;
      var call5884 = callmethodChecked(this, "accept", [1], string5883);
      if (Grace_isTrue(call5884)) {
        onSelf = true;
        var call5885 = callmethodChecked(this, "typeparameters", [0]);
        var_myTypeParams = call5885;
        if5882 = GraceDone;
      }
      var if5886 = GraceDone;
      setLineNumber(2776);    // compilenode string
      var string5887 = new GraceString("bind");
      onSelf = true;
      var call5888 = callmethodChecked(this, "accept", [1], string5887);
      if (Grace_isTrue(call5888)) {
        setLineNumber(2777);    // compilenode call
        onSelf = true;
        var call5889 = callmethodChecked(this, "next", [0]);
        setLineNumber(2778);    // compilenode string
        var string5890 = new GraceString(":=");
        var call5892 = callmethodChecked(var_meth, "value", [0]);
        var opresult5894 = callmethodChecked(call5892, "++", [1], string5890);
        var call5895 = callmethodChecked(var_meth, "value:=", [1], opresult5894);
        setLineNumber(2779);    // compilenode string
        var string5896 = new GraceString(":=");
        var call5898 = callmethodChecked(var_part, "name", [0]);
        var opresult5900 = callmethodChecked(call5898, "++", [1], string5896);
        var call5901 = callmethodChecked(var_part, "name:=", [1], opresult5900);
        if5886 = call5901;
      } else {
        var if5902 = GraceDone;
        setLineNumber(2780);    // compilenode string
        var string5903 = new GraceString("prefix");
        var call5905 = callmethodChecked(var_meth, "value", [0]);
        var opresult5907 = callmethodChecked(call5905, "==", [1], string5903);
        var string5909 = new GraceString("op");
        onSelf = true;
        var call5910 = callmethodChecked(this, "accept", [1], string5909);
        var opresult5912 = callmethodChecked(call5910, "&&", [1], opresult5907);
        if (Grace_isTrue(opresult5912)) {
          setLineNumber(2781);    // compilenode identifier
          var call5913 = callmethodChecked(var_sym, "value", [0]);
          var call5915 = callmethodChecked(var_meth, "value", [0]);
          var opresult5917 = callmethodChecked(call5915, "++", [1], call5913);
          var call5918 = callmethodChecked(var_meth, "value:=", [1], opresult5917);
          setLineNumber(2782);    // compilenode identifier
          var call5919 = callmethodChecked(var_sym, "value", [0]);
          var call5921 = callmethodChecked(var_part, "name", [0]);
          var opresult5923 = callmethodChecked(call5921, "++", [1], call5919);
          var call5924 = callmethodChecked(var_part, "name:=", [1], opresult5923);
          setLineNumber(2783);    // compilenode call
          onSelf = true;
          var call5925 = callmethodChecked(this, "next", [0]);
          if5902 = call5925;
        }
        if5886 = if5902;
      }
      setLineNumber(2785);    // compilenode identifier
      var var_dtype = GraceFalse;
      var if5926 = GraceDone;
      setLineNumber(2786);    // compilenode string
      var string5927 = new GraceString("lparen");
      onSelf = true;
      var call5928 = callmethodChecked(this, "accept", [1], string5927);
      if (Grace_isTrue(call5928)) {
        setLineNumber(2787);    // compilenode identifier
        var var_lparen = var_sym;
        setLineNumber(2788);    // compilenode identifier
        var call5929 = callmethodChecked(var_sym, "linePos", [0]);
        var call5930 = callmethodChecked(var_part, "linePos:=", [1], call5929);
        setLineNumber(2789);    // compilenode call
        onSelf = true;
        var call5931 = callmethodChecked(this, "next", [0]);
        setLineNumber(2790);    // compilenode vardec
        var var_id;
        setLineNumber(2791);    // compilenode identifier
        var var_comma = GraceFalse;
        setLineNumber(2792);    // compilenode block
        var block5932 = new GraceBlock(this, 2792, 0);
        block5932.real = function() {
          setLineNumber(2793);    // compilenode string
          var string5933 = new GraceString("*");
          var call5935 = callmethodChecked(var_sym, "value", [0]);
          var opresult5937 = callmethodChecked(call5935, "==", [1], string5933);
          var string5939 = new GraceString("op");
          onSelf = true;
          var call5940 = callmethodChecked(this, "accept", [1], string5939);
          var opresult5942 = callmethodChecked(call5940, "&&", [1], opresult5937);
          setLineNumber(2792);    // compilenode string
          var string5944 = new GraceString("identifier");
          onSelf = true;
          var call5945 = callmethodChecked(this, "accept", [1], string5944);
          var opresult5947 = callmethodChecked(call5945, "||", [1], opresult5942);
          return opresult5947;
        };
        setLineNumber(2793);    // compilenode block
        var block5948 = new GraceBlock(this, 2793, 0);
        block5948.real = function() {
          var if5949 = GraceDone;
          setLineNumber(2796);    // compilenode string
          var string5950 = new GraceString("op");
          onSelf = true;
          var call5951 = callmethodChecked(this, "accept", [1], string5950);
          if (Grace_isTrue(call5951)) {
            setLineNumber(2797);    // compilenode call
            onSelf = true;
            var call5952 = callmethodChecked(this, "next", [0]);
            setLineNumber(2798);    // compilenode string
            var string5953 = new GraceString(" an Iterable.");
            var call5955 = callmethodChecked(var_sym, "value", [0]);
            var string5957 = new GraceString("variable length parameters (parameters prefixed by '*') are no longer part of Grace.  Consider making ");
            var opresult5959 = callmethodChecked(string5957, "++", [1], call5955);
            var opresult5961 = callmethodChecked(opresult5959, "++", [1], string5953);
            setLineNumber(2799);    // compilenode identifier
            var call5962 = callmethodChecked(var_lastToken, "line", [0]);
            var call5963 = callmethodChecked(var_lastToken, "linePos", [0]);
            setLineNumber(2798);    // compilenode identifier
            var call5964 = callmethodChecked(var_errormessages, "syntaxError()atPosition", [1, 2], opresult5961, call5962, call5963);
            if5949 = call5964;
          }
          setLineNumber(2801);    // compilenode call
          onSelf = true;
          var call5965 = callmethodChecked(this, "pushidentifier", [0]);
          setLineNumber(2802);    // compilenode identifier
          var call5966 = callmethodChecked(var_values, "pop", [0]);
          var_id = call5966;
          setLineNumber(2803);    // compilenode identifier
          var call5967 = callmethodChecked(var_id, "isBindingOccurrence:=", [1], GraceTrue);
          setLineNumber(2804);    // compilenode call
          onSelf = true;
          var call5968 = callmethodChecked(this, "optionalTypeAnnotation", [0]);
          var_dtype = call5968;
          setLineNumber(2805);    // compilenode identifier
          var call5969 = callmethodChecked(var_id, "dtype:=", [1], var_dtype);
          setLineNumber(2806);    // compilenode identifier
          var call5970 = callmethodChecked(var_part, "params", [0]);
          var call5971 = callmethodChecked(call5970, "push", [1], var_id);
          var if5972 = GraceDone;
          setLineNumber(2807);    // compilenode string
          var string5973 = new GraceString("comma");
          onSelf = true;
          var call5974 = callmethodChecked(this, "accept", [1], string5973);
          if (Grace_isTrue(call5974)) {
            setLineNumber(2808);    // compilenode identifier
            var_comma = var_sym;
            setLineNumber(2809);    // compilenode call
            onSelf = true;
            var call5975 = callmethodChecked(this, "next", [0]);
            if5972 = call5975;
          } else {
            var if5976 = GraceDone;
            setLineNumber(2810);    // compilenode string
            var string5977 = new GraceString("rparen");
            var call5979 = callmethodChecked(var_sym, "kind", [0]);
            var opresult5981 = callmethodChecked(call5979, "\u2260", [1], string5977);
            if (Grace_isTrue(opresult5981)) {
              var if5982 = GraceDone;
              setLineNumber(2811);    // compilenode string
              var string5983 = new GraceString("rparen");
              var call5985 = callmethodChecked(var_sym, "kind", [0]);
              var opresult5987 = callmethodChecked(call5985, "\u2260", [1], string5983);
              if (Grace_isTrue(opresult5987)) {
                setLineNumber(2812);    // compilenode identifier
                var call5988 = callmethodChecked(var_errormessages, "suggestion", [0]);
                var call5989 = callmethodChecked(call5988, "new", [0]);
                var var_suggestion = call5989;
                setLineNumber(2813);    // compilenode string
                var string5990 = new GraceString(")");
                var call5991 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string5990, var_lastToken);
                setLineNumber(2814);    // compilenode string
                var string5992 = new GraceString("a part of a method beginning with a '(' must end with a ')'.");
                setLineNumber(2815);    // compilenode identifier
                var call5993 = callmethodChecked(var_lastToken, "line", [0]);
                var call5994 = callmethodChecked(var_lastToken, "size", [0]);
                var call5996 = callmethodChecked(var_lastToken, "linePos", [0]);
                var opresult5998 = callmethodChecked(call5996, "+", [1], call5994);
                setLineNumber(2814);    // compilenode identifier
                var call5999 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string5992, call5993, opresult5998, var_suggestion);
                if5982 = call5999;
              }
              if5976 = if5982;
            }
            if5972 = if5976;
          }
          return if5972;
        };
        var call6000 = callmethodChecked(var_prelude, "while()do", [1, 1], block5932, block5948);
        var if6001 = GraceDone;
        setLineNumber(2819);    // compilenode string
        var string6002 = new GraceString("rparen");
        var call6004 = callmethodChecked(var_sym, "kind", [0]);
        var opresult6006 = callmethodChecked(call6004, "\u2260", [1], string6002);
        if (Grace_isTrue(opresult6006)) {
          setLineNumber(2820);    // compilenode identifier
          var call6007 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call6008 = callmethodChecked(call6007, "new", [0]);
          var var_suggestion = call6008;
          setLineNumber(2821);    // compilenode block
          var block6009 = new GraceBlock(this, 2821, 1);
          setLineNumber(1);    // compilenode identifier
          block6009.real = function(var_t) {
            setLineNumber(2821);    // compilenode identifier
            var call6010 = callmethodChecked(var_lastToken, "line", [0]);
            var call6012 = callmethodChecked(var_t, "line", [0]);
            var opresult6014 = callmethodChecked(call6012, "==", [1], call6010);
            var string6016 = new GraceString("rparen");
            var call6018 = callmethodChecked(var_t, "kind", [0]);
            var opresult6020 = callmethodChecked(call6018, "==", [1], string6016);
            var opresult6022 = callmethodChecked(opresult6020, "&&", [1], opresult6014);
            return opresult6022;
          };
          onSelf = true;
          var call6023 = callmethodChecked(this, "findNextToken", [1], block6009);
          var var_rparen = call6023;
          var if6024 = GraceDone;
          setLineNumber(2822);    // compilenode identifier
          var opresult6027 = callmethodChecked(GraceFalse, "==", [1], var_rparen);
          if (Grace_isTrue(opresult6027)) {
            setLineNumber(2823);    // compilenode string
            var string6028 = new GraceString(")");
            var call6029 = callmethodChecked(var_suggestion, "replaceToken()with", [1, 1], var_lastToken, string6028);
            if6024 = call6029;
          } else {
            setLineNumber(2825);    // compilenode identifier
            var call6030 = callmethodChecked(var_suggestion, "deleteToken", [1], var_sym);
            if6024 = call6030;
          }
          setLineNumber(2827);    // compilenode string
          var string6031 = new GraceString("a part of a method beginning with a '(' must end with a ')'.");
          setLineNumber(2828);    // compilenode identifier
          var call6032 = callmethodChecked(var_lastToken, "line", [0]);
          var call6033 = callmethodChecked(var_lastToken, "linePos", [0]);
          var call6034 = callmethodChecked(var_lastToken, "linePos", [0]);
          setLineNumber(2827);    // compilenode identifier
          var call6035 = callmethodChecked(var_errormessages, "syntaxError()atRange()withSuggestion", [1, 3, 1], string6031, call6032, call6033, call6034, var_suggestion);
          if6001 = call6035;
        }
        var if6036 = GraceDone;
        setLineNumber(2830);    // compilenode identifier
        var call6037 = callmethodChecked(var_part, "line", [0]);
        var call6039 = callmethodChecked(var_sym, "line", [0]);
        var opresult6041 = callmethodChecked(call6039, "==", [1], call6037);
        if (Grace_isTrue(opresult6041)) {
          setLineNumber(2831);    // compilenode identifier
          var call6042 = callmethodChecked(var_part, "linePos", [0]);
          var call6044 = callmethodChecked(var_sym, "linePos", [0]);
          var diff6046 = callmethodChecked(call6044, "-", [1], call6042);
          var call6047 = callmethodChecked(var_part, "lineLength:=", [1], diff6046);
          if6036 = call6047;
        }
        setLineNumber(2833);    // compilenode call
        onSelf = true;
        var call6048 = callmethodChecked(this, "next", [0]);
        var if6049 = GraceDone;
        setLineNumber(2835);    // compilenode string
        var string6050 = new GraceString("identifier");
        onSelf = true;
        var call6051 = callmethodChecked(this, "acceptSameLine", [1], string6050);
        setLineNumber(2834);    // compilenode string
        var string6053 = new GraceString("identifier");
        onSelf = true;
        var call6054 = callmethodChecked(this, "accept", [1], string6053);
        var call6056 = callmethodChecked(var_sameline, "prefix!", [0]);
        var opresult6058 = callmethodChecked(call6056, "&&", [1], call6054);
        var opresult6060 = callmethodChecked(opresult6058, "||", [1], call6051);
        if (Grace_isTrue(opresult6060)) {
          setLineNumber(2838);    // compilenode array
          var array6061 = new PrimitiveGraceList([]);
          var call6062 = callmethodChecked(var_ast, "methodNode", [0]);
          var call6063 = callmethodChecked(call6062, "new", [4], var_meth, var_signature, array6061, GraceFalse);
          var var_tm = call6063;
          setLineNumber(2839);    // compilenode identifier
          onSelf = true;
          var call6064 = callmethodChecked(this, "methodDecRest", [2], var_tm, var_sameline);
          var_meth = call6064;
          if6049 = GraceDone;
        }
        if5926 = if6049;
      }
      var if6065 = GraceDone;
      setLineNumber(2842);    // compilenode string
      var string6066 = new GraceString("arrow");
      onSelf = true;
      var call6067 = callmethodChecked(this, "accept", [1], string6066);
      if (Grace_isTrue(call6067)) {
        setLineNumber(2844);    // compilenode call
        onSelf = true;
        var call6068 = callmethodChecked(this, "next", [0]);
        setLineNumber(2845);    // compilenode call
        onSelf = true;
        var call6069 = callmethodChecked(this, "typeexpression", [0]);
        setLineNumber(2846);    // compilenode identifier
        var call6070 = callmethodChecked(var_values, "pop", [0]);
        var_dtype = call6070;
        if6065 = GraceDone;
      } else {
        setLineNumber(2848);    // compilenode identifier
        var_dtype = GraceFalse;
        if6065 = GraceDone;
      }
      var obj6071 = Grace_allocObject(GraceObject, "methodsignature");
      obj6071.definitionModule = "parser";
      obj6071.definitionLine = 2850;
      var inho6071 = inheritingObject;
      while (inho6071.superobj) inho6071 = inho6071.superobj;
      inho6071.superobj = obj6071;
      obj6071.data = inheritingObject.data;
      if (inheritingObject.hasOwnProperty('_value'))
        obj6071._value = inheritingObject._value;
      obj6071.outer = this;
      var reader_parser_outer6072 = function() {
        return this.outer;
      };
      obj6071.methods["outer"] = reader_parser_outer6072;
      var obj_init_6071 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj6071;
        setLineNumber(2851);    // compilenode identifier
        obj6071.data["m"] = var_meth;
        var reader_parser_m6073 = function() {
          return this.data["m"];
        };
        reader_parser_m6073.def = true;
        obj6071.methods["m"] = reader_parser_m6073;
        setLineNumber(2852);    // compilenode identifier
        obj6071.data["sig"] = var_signature;
        var reader_parser_sig6074 = function() {
          return this.data["sig"];
        };
        reader_parser_sig6074.def = true;
        obj6071.methods["sig"] = reader_parser_sig6074;
        setLineNumber(2853);    // compilenode identifier
        obj6071.data["rtype"] = var_dtype;
        var reader_parser_rtype6075 = function() {
          return this.data["rtype"];
        };
        reader_parser_rtype6075.def = true;
        obj6071.methods["rtype"] = reader_parser_rtype6075;
        setLineNumber(2854);    // compilenode identifier
        obj6071.data["typeParams"] = var_myTypeParams;
        var reader_parser_typeParams6076 = function() {
          return this.data["typeParams"];
        };
        reader_parser_typeParams6076.def = true;
        obj6071.methods["typeParams"] = reader_parser_typeParams6076;
        superDepth = origSuperDepth;
      };
      obj_init_6071.apply(inheritingObject, []);
      return obj6071;
      };
      this.methods["methodsignature()object"] = func5812;
    setLineNumber(2858);    // compilenode method
    var func6077 = function(argcv) {    // method typeparameters
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for typeparameters"));
      setModuleName("parser");
      setLineNumber(2859);    // compilenode call
      onSelf = true;
      var call6078 = callmethodChecked(this, "next", [0]);
      setLineNumber(2860);    // compilenode array
      var array6079 = new PrimitiveGraceList([]);
      var var_typeIds = array6079;
      setLineNumber(2861);    // compilenode block
      var block6080 = new GraceBlock(this, 2861, 0);
      block6080.real = function() {
        var string6081 = new GraceString("identifier");
        onSelf = true;
        var call6082 = callmethodChecked(this, "accept", [1], string6081);
        return call6082;
      };
      var block6083 = new GraceBlock(this, 2861, 0);
      block6083.real = function() {
        setLineNumber(2862);    // compilenode call
        onSelf = true;
        var call6084 = callmethodChecked(this, "identifier", [0]);
        setLineNumber(2863);    // compilenode identifier
        var call6085 = callmethodChecked(var_values, "pop", [0]);
        var var_id = call6085;
        setLineNumber(2864);    // compilenode identifier
        var call6086 = callmethodChecked(var_id, "isBindingOccurrence:=", [1], GraceTrue);
        setLineNumber(2865);    // compilenode identifier
        var call6087 = callmethodChecked(var_typeIds, "push", [1], var_id);
        var if6088 = GraceDone;
        setLineNumber(2866);    // compilenode string
        var string6089 = new GraceString("comma");
        onSelf = true;
        var call6090 = callmethodChecked(this, "accept", [1], string6089);
        if (Grace_isTrue(call6090)) {
          setLineNumber(2867);    // compilenode call
          onSelf = true;
          var call6091 = callmethodChecked(this, "next", [0]);
          if6088 = call6091;
        }
        return if6088;
      };
      var call6092 = callmethodChecked(var_prelude, "while()do", [1, 1], block6080, block6083);
      setLineNumber(2870);    // compilenode block
      var block6093 = new GraceBlock(this, 2870, 1);
      setLineNumber(1);    // compilenode identifier
      block6093.real = function(var_each) {
        setLineNumber(2870);    // compilenode identifier
        var call6094 = callmethodChecked(var_each, "isBindingOccurrence:=", [1], GraceTrue);
        return call6094;
      };
      var call6095 = callmethodChecked(var_typeIds, "do", [1], block6093);
      setLineNumber(2871);    // compilenode identifier
      var call6096 = callmethodChecked(var_ast, "typeParametersNode", [0]);
      var call6097 = callmethodChecked(call6096, "new", [1], var_typeIds);
      var var_result = call6097;
      var if6098 = GraceDone;
      setLineNumber(2872);    // compilenode string
      var string6099 = new GraceString("rgeneric");
      var call6101 = callmethodChecked(var_sym, "kind", [0]);
      var opresult6103 = callmethodChecked(call6101, "\u2260", [1], string6099);
      if (Grace_isTrue(opresult6103)) {
        setLineNumber(2873);    // compilenode identifier
        var call6104 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call6105 = callmethodChecked(call6104, "new", [0]);
        var var_suggestion = call6105;
        setLineNumber(2874);    // compilenode string
        var string6106 = new GraceString(">");
        var call6107 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string6106, var_lastToken);
        setLineNumber(2875);    // compilenode string
        var string6108 = new GraceString("a list of type parameters starting with '<' must end with '>'.");
        setLineNumber(2876);    // compilenode identifier
        var call6109 = callmethodChecked(var_lastToken, "line", [0]);
        var call6110 = callmethodChecked(var_lastToken, "size", [0]);
        var call6112 = callmethodChecked(var_lastToken, "linePos", [0]);
        var opresult6114 = callmethodChecked(call6112, "+", [1], call6110);
        setLineNumber(2875);    // compilenode identifier
        var call6115 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string6108, call6109, opresult6114, var_suggestion);
        if6098 = call6115;
      }
      setLineNumber(2878);    // compilenode call
      onSelf = true;
      var call6116 = callmethodChecked(this, "next", [0]);
      setLineNumber(2879);    // compilenode identifier
      return var_result;
    };
    func6077.paramCounts = [0];
    this.methods["typeparameters"] = func6077;
    func6077.definitionLine = 2858;
    func6077.definitionModule = "parser";
    setLineNumber(2882);    // compilenode method
    var func6117 = function(argcv) {    // method doimport
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for doimport"));
      setModuleName("parser");
      var if6118 = GraceDone;
      setLineNumber(2885);    // compilenode string
      var string6119 = new GraceString("import");
      onSelf = true;
      var call6120 = callmethodChecked(this, "acceptKeyword", [1], string6119);
      if (Grace_isTrue(call6120)) {
        setLineNumber(2886);    // compilenode identifier
        var call6121 = callmethodChecked(var_sym, "line", [0]);
        var var_importline = call6121;
        setLineNumber(2887);    // compilenode call
        onSelf = true;
        var call6122 = callmethodChecked(this, "next", [0]);
        var if6123 = GraceDone;
        setLineNumber(2888);    // compilenode string
        var string6124 = new GraceString("string");
        var call6126 = callmethodChecked(var_sym, "kind", [0]);
        var opresult6128 = callmethodChecked(call6126, "\u2260", [1], string6124);
        if (Grace_isTrue(opresult6128)) {
          setLineNumber(2889);    // compilenode identifier
          var call6129 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call6130 = callmethodChecked(call6129, "new", [0]);
          var var_suggestion = call6130;
          setLineNumber(2890);    // compilenode vardec
          var var_errorPos;
          var if6131 = GraceDone;
          setLineNumber(2891);    // compilenode identifier
          var call6132 = callmethodChecked(var_lastToken, "line", [0]);
          var call6134 = callmethodChecked(var_sym, "line", [0]);
          var opresult6136 = callmethodChecked(call6134, "==", [1], call6132);
          var string6138 = new GraceString("identifier");
          var call6140 = callmethodChecked(var_sym, "kind", [0]);
          var opresult6142 = callmethodChecked(call6140, "==", [1], string6138);
          var opresult6144 = callmethodChecked(opresult6142, "&&", [1], opresult6136);
          if (Grace_isTrue(opresult6144)) {
            setLineNumber(2892);    // compilenode string
            var string6145 = new GraceString("\"");
            var call6147 = callmethodChecked(var_sym, "value", [0]);
            var string6149 = new GraceString("\"");
            var opresult6151 = callmethodChecked(string6149, "++", [1], call6147);
            var opresult6153 = callmethodChecked(opresult6151, "++", [1], string6145);
            var call6154 = callmethodChecked(var_suggestion, "replaceToken()with", [1, 1], var_sym, opresult6153);
            setLineNumber(2893);    // compilenode identifier
            var call6155 = callmethodChecked(var_sym, "linePos", [0]);
            var_errorPos = call6155;
            if6131 = GraceDone;
          } else {
            setLineNumber(2895);    // compilenode string
            var string6156 = new GraceString(" \"\u00abmodule name\u00bb\"");
            var call6157 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string6156, var_lastToken);
            setLineNumber(2896);    // compilenode identifier
            var call6159 = callmethodChecked(var_lastToken, "size", [0]);
            var call6161 = callmethodChecked(var_lastToken, "linePos", [0]);
            var opresult6163 = callmethodChecked(call6161, "+", [1], call6159);
            var opresult6165 = callmethodChecked(opresult6163, "+", [1], new GraceNum(1));
            var_errorPos = opresult6165;
            if6131 = GraceDone;
          }
          setLineNumber(2898);    // compilenode string
          var string6166 = new GraceString("an import statement must have the name of the module in quotes, 'as', and an identifier after 'import'.");
          setLineNumber(2899);    // compilenode identifier
          var call6167 = callmethodChecked(var_lastToken, "line", [0]);
          setLineNumber(2898);    // compilenode identifier
          var call6168 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string6166, call6167, var_errorPos, var_suggestion);
          if6123 = call6168;
        }
        setLineNumber(2901);    // compilenode call
        onSelf = true;
        var call6169 = callmethodChecked(this, "pushstring", [0]);
        setLineNumber(2902);    // compilenode identifier
        var call6170 = callmethodChecked(var_values, "pop", [0]);
        var var_p = call6170;
        var if6171 = GraceDone;
        setLineNumber(2903);    // compilenode string
        var string6172 = new GraceString("as");
        var call6174 = callmethodChecked(var_sym, "value", [0]);
        var opresult6176 = callmethodChecked(call6174, "\u2260", [1], string6172);
        var string6178 = new GraceString("identifier");
        var call6180 = callmethodChecked(var_sym, "kind", [0]);
        var opresult6182 = callmethodChecked(call6180, "\u2260", [1], string6178);
        var opresult6184 = callmethodChecked(opresult6182, "||", [1], opresult6176);
        if (Grace_isTrue(opresult6184)) {
          setLineNumber(2904);    // compilenode identifier
          var call6185 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call6186 = callmethodChecked(call6185, "new", [0]);
          var var_suggestion = call6186;
          var if6187 = GraceDone;
          setLineNumber(2905);    // compilenode identifier
          var call6188 = callmethodChecked(var_lastToken, "line", [0]);
          var call6190 = callmethodChecked(var_sym, "line", [0]);
          var opresult6192 = callmethodChecked(call6190, "==", [1], call6188);
          var string6194 = new GraceString("identifier");
          var call6196 = callmethodChecked(var_sym, "kind", [0]);
          var opresult6198 = callmethodChecked(call6196, "==", [1], string6194);
          var opresult6200 = callmethodChecked(opresult6198, "&&", [1], opresult6192);
          if (Grace_isTrue(opresult6200)) {
            setLineNumber(2906);    // compilenode string
            var string6201 = new GraceString(" as");
            var call6202 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string6201, var_lastToken);
            if6187 = call6202;
          } else {
            setLineNumber(2908);    // compilenode string
            var string6203 = new GraceString("");
            var call6205 = callmethodChecked(var_p, "value", [0]);
            var string6207 = new GraceString(" as ");
            var opresult6209 = callmethodChecked(string6207, "++", [1], call6205);
            var opresult6211 = callmethodChecked(opresult6209, "++", [1], string6203);
            var call6212 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], opresult6211, var_lastToken);
            if6187 = call6212;
          }
          setLineNumber(2910);    // compilenode string
          var string6213 = new GraceString("an import statement must have 'as', and an identifier after the name of the module in quotes.");
          setLineNumber(2911);    // compilenode identifier
          var call6214 = callmethodChecked(var_lastToken, "line", [0]);
          var call6216 = callmethodChecked(var_lastToken, "size", [0]);
          var call6218 = callmethodChecked(var_lastToken, "linePos", [0]);
          var opresult6220 = callmethodChecked(call6218, "+", [1], call6216);
          var opresult6222 = callmethodChecked(opresult6220, "+", [1], new GraceNum(1));
          setLineNumber(2910);    // compilenode identifier
          var call6223 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string6213, call6214, opresult6222, var_suggestion);
          if6171 = call6223;
        }
        setLineNumber(2913);    // compilenode call
        onSelf = true;
        var call6224 = callmethodChecked(this, "next", [0]);
        var if6225 = GraceDone;
        setLineNumber(2914);    // compilenode string
        var string6226 = new GraceString("identifier");
        var call6228 = callmethodChecked(var_sym, "kind", [0]);
        var opresult6230 = callmethodChecked(call6228, "\u2260", [1], string6226);
        if (Grace_isTrue(opresult6230)) {
          setLineNumber(2915);    // compilenode identifier
          var call6231 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call6232 = callmethodChecked(call6231, "new", [0]);
          var var_suggestion = call6232;
          setLineNumber(2916);    // compilenode vardec
          var var_errorPos;
          var if6233 = GraceDone;
          setLineNumber(2917);    // compilenode identifier
          var call6234 = callmethodChecked(var_lastToken, "line", [0]);
          var call6236 = callmethodChecked(var_sym, "line", [0]);
          var opresult6238 = callmethodChecked(call6236, "==", [1], call6234);
          var string6240 = new GraceString("string");
          var call6242 = callmethodChecked(var_sym, "kind", [0]);
          var opresult6244 = callmethodChecked(call6242, "==", [1], string6240);
          var opresult6246 = callmethodChecked(opresult6244, "&&", [1], opresult6238);
          if (Grace_isTrue(opresult6246)) {
            setLineNumber(2918);    // compilenode string
            var string6247 = new GraceString("");
            var call6249 = callmethodChecked(var_sym, "value", [0]);
            var string6251 = new GraceString("");
            var opresult6253 = callmethodChecked(string6251, "++", [1], call6249);
            var opresult6255 = callmethodChecked(opresult6253, "++", [1], string6247);
            var call6256 = callmethodChecked(var_suggestion, "replaceToken()with", [1, 1], var_sym, opresult6255);
            setLineNumber(2919);    // compilenode identifier
            var call6257 = callmethodChecked(var_sym, "linePos", [0]);
            var_errorPos = call6257;
            if6233 = GraceDone;
          } else {
            setLineNumber(2921);    // compilenode string
            var string6258 = new GraceString("");
            var call6260 = callmethodChecked(var_p, "value", [0]);
            var string6262 = new GraceString(" ");
            var opresult6264 = callmethodChecked(string6262, "++", [1], call6260);
            var opresult6266 = callmethodChecked(opresult6264, "++", [1], string6258);
            var call6267 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], opresult6266, var_lastToken);
            setLineNumber(2922);    // compilenode identifier
            var call6269 = callmethodChecked(var_lastToken, "size", [0]);
            var call6271 = callmethodChecked(var_lastToken, "linePos", [0]);
            var opresult6273 = callmethodChecked(call6271, "+", [1], call6269);
            var opresult6275 = callmethodChecked(opresult6273, "+", [1], new GraceNum(1));
            var_errorPos = opresult6275;
            if6233 = GraceDone;
          }
          setLineNumber(2924);    // compilenode string
          var string6276 = new GraceString("an import statement must have an identifier after 'as'.");
          setLineNumber(2925);    // compilenode identifier
          var call6277 = callmethodChecked(var_lastToken, "line", [0]);
          setLineNumber(2924);    // compilenode identifier
          var call6278 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string6276, call6277, var_errorPos, var_suggestion);
          if6225 = call6278;
        }
        setLineNumber(2927);    // compilenode call
        onSelf = true;
        var call6279 = callmethodChecked(this, "pushidentifier", [0]);
        setLineNumber(2928);    // compilenode identifier
        var call6280 = callmethodChecked(var_values, "pop", [0]);
        var var_name = call6280;
        setLineNumber(2929);    // compilenode identifier
        var call6281 = callmethodChecked(var_name, "isBindingOccurrence:=", [1], GraceTrue);
        setLineNumber(2930);    // compilenode call
        onSelf = true;
        var call6282 = callmethodChecked(this, "optionalTypeAnnotation", [0]);
        var var_dtype = call6282;
        setLineNumber(2931);    // compilenode identifier
        var call6283 = callmethodChecked(var_util, "setline", [1], var_importline);
        setLineNumber(2932);    // compilenode identifier
        var call6284 = callmethodChecked(var_p, "value", [0]);
        var call6285 = callmethodChecked(var_ast, "importNode", [0]);
        var call6286 = callmethodChecked(call6285, "new", [3], call6284, var_name, var_dtype);
        var var_o = call6286;
        setLineNumber(2933);    // compilenode call
        onSelf = true;
        var call6287 = callmethodChecked(this, "doannotation", [0]);
        var var_anns = call6287;
        var if6288 = GraceDone;
        setLineNumber(2934);    // compilenode identifier
        var opresult6291 = callmethodChecked(GraceFalse, "\u2260", [1], var_anns);
        if (Grace_isTrue(opresult6291)) {
          var call6292 = callmethodChecked(var_o, "annotations", [0]);
          var call6293 = callmethodChecked(call6292, "addAll", [1], var_anns);
          if6288 = call6293;
        }
        setLineNumber(2935);    // compilenode identifier
        var call6294 = callmethodChecked(var_values, "push", [1], var_o);
        setLineNumber(2936);    // compilenode call
        onSelf = true;
        var call6295 = callmethodChecked(this, "reconcileComments", [0]);
        if6118 = call6295;
      }
      return if6118;
    };
    func6117.paramCounts = [0];
    this.methods["doimport"] = func6117;
    func6117.definitionLine = 2882;
    func6117.definitionModule = "parser";
    setLineNumber(2940);    // compilenode method
    var func6296 = function(argcv) {    // method doreturn
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for doreturn"));
      setModuleName("parser");
      var if6297 = GraceDone;
      setLineNumber(2942);    // compilenode string
      var string6298 = new GraceString("return");
      onSelf = true;
      var call6299 = callmethodChecked(this, "acceptKeyword", [1], string6298);
      if (Grace_isTrue(call6299)) {
        setLineNumber(2943);    // compilenode identifier
        var var_retTok = var_sym;
        setLineNumber(2944);    // compilenode call
        onSelf = true;
        var call6300 = callmethodChecked(this, "next", [0]);
        setLineNumber(2945);    // compilenode vardec
        var var_retval;
        var if6301 = GraceDone;
        setLineNumber(2946);    // compilenode block
        var block6302 = new GraceBlock(this, 2946, 0);
        block6302.real = function() {
          var string6303 = new GraceString("rbrace");
          onSelf = true;
          var call6304 = callmethodChecked(this, "accept", [1], string6303);
          var call6305 = callmethodChecked(call6304, "not", [0]);
          return call6305;
        };
        onSelf = true;
        var call6307 = callmethodChecked(this, "tokenOnSameLine", [0]);
        var opresult6309 = callmethodChecked(call6307, "&&", [1], block6302);
        if (Grace_isTrue(opresult6309)) {
          var if6310 = GraceDone;
          setLineNumber(2947);    // compilenode block
          var block6311 = new GraceBlock(this, 2947, 0);
          block6311.real = function() {
            onSelf = true;
            var call6312 = callmethodChecked(this, "expression", [1], var_blocksOK);
            return call6312;
          };
          onSelf = true;
          var call6313 = callmethodChecked(this, "didConsume", [1], block6311);
          var call6314 = callmethodChecked(call6313, "not", [0]);
          if (Grace_isTrue(call6314)) {
            setLineNumber(2948);    // compilenode array
            var array6315 = new PrimitiveGraceList([]);
            var var_suggestions = array6315;
            setLineNumber(2949);    // compilenode identifier
            var call6316 = callmethodChecked(var_errormessages, "suggestion", [0]);
            var call6317 = callmethodChecked(call6316, "new", [0]);
            var var_suggestion = call6317;
            setLineNumber(2950);    // compilenode string
            var string6319 = new GraceString("rbrace");
            var array6318 = new PrimitiveGraceList([string6319]);
            onSelf = true;
            var call6320 = callmethodChecked(this, "findNextValidToken", [1], array6318);
            var var_nextTok = call6320;
            var if6321 = GraceDone;
            setLineNumber(2951);    // compilenode identifier
            var opresult6324 = callmethodChecked(var_nextTok, "==", [1], var_sym);
            if (Grace_isTrue(opresult6324)) {
              setLineNumber(2952);    // compilenode string
              var string6325 = new GraceString(" \u00abexpression\u00bb");
              var call6326 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string6325, var_lastToken);
              setLineNumber(2953);    // compilenode identifier
              var call6327 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
              setLineNumber(2954);    // compilenode identifier
              var call6328 = callmethodChecked(var_errormessages, "suggestion", [0]);
              var call6329 = callmethodChecked(call6328, "new", [0]);
              var_suggestion = call6329;
              setLineNumber(2955);    // compilenode identifier
              var call6330 = callmethodChecked(var_suggestion, "deleteToken()leading()trailing", [1, 1, 1], var_sym, GraceTrue, GraceFalse);
              if6321 = call6330;
            } else {
              setLineNumber(2957);    // compilenode identifier
              var call6331 = callmethodChecked(var_nextTok, "prev", [0]);
              var string6332 = new GraceString(" \u00abexpression\u00bb");
              var call6333 = callmethodChecked(var_suggestion, "replaceTokenRange()leading()trailing()with", [2, 1, 1, 1], var_sym, call6331, GraceTrue, GraceFalse, string6332);
              setLineNumber(2958);    // compilenode identifier
              var call6334 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
              setLineNumber(2959);    // compilenode identifier
              var call6335 = callmethodChecked(var_errormessages, "suggestion", [0]);
              var call6336 = callmethodChecked(call6335, "new", [0]);
              var_suggestion = call6336;
              setLineNumber(2960);    // compilenode identifier
              var call6337 = callmethodChecked(var_nextTok, "prev", [0]);
              var call6338 = callmethodChecked(var_suggestion, "deleteTokenRange()leading()trailing", [2, 1, 1], var_sym, call6337, GraceTrue, GraceFalse);
              if6321 = call6338;
            }
            setLineNumber(2962);    // compilenode identifier
            var call6339 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
            setLineNumber(2963);    // compilenode string
            var string6340 = new GraceString("a return statement must have either an expression or a new-line after 'return'.");
            setLineNumber(2964);    // compilenode identifier
            var call6341 = callmethodChecked(var_sym, "line", [0]);
            var call6342 = callmethodChecked(var_sym, "linePos", [0]);
            var call6344 = callmethodChecked(var_sym, "size", [0]);
            var call6346 = callmethodChecked(var_sym, "linePos", [0]);
            var opresult6348 = callmethodChecked(call6346, "+", [1], call6344);
            var diff6350 = callmethodChecked(opresult6348, "-", [1], new GraceNum(1));
            setLineNumber(2963);    // compilenode identifier
            var call6351 = callmethodChecked(var_errormessages, "syntaxError()atRange()withSuggestions", [1, 3, 1], string6340, call6341, call6342, diff6350, var_suggestions);
            if6310 = call6351;
          }
          setLineNumber(2966);    // compilenode identifier
          var call6352 = callmethodChecked(var_values, "pop", [0]);
          var_retval = call6352;
          if6301 = GraceDone;
        } else {
          setLineNumber(2968);    // compilenode string
          var string6353 = new GraceString("done");
          var call6354 = callmethodChecked(var_ast, "identifierNode", [0]);
          var call6355 = callmethodChecked(call6354, "new", [2], string6353, GraceFalse);
          var_retval = call6355;
          if6301 = GraceDone;
        }
        setLineNumber(2970);    // compilenode identifier
        var call6356 = callmethodChecked(var_retTok, "line", [0]);
        var call6357 = callmethodChecked(var_retTok, "linePos", [0]);
        var call6358 = callmethodChecked(var_util, "setPosition", [2], call6356, call6357);
        setLineNumber(2971);    // compilenode identifier
        var call6359 = callmethodChecked(var_ast, "returnNode", [0]);
        var call6360 = callmethodChecked(call6359, "new", [1], var_retval);
        var var_o = call6360;
        setLineNumber(2972);    // compilenode identifier
        var call6361 = callmethodChecked(var_values, "push", [1], var_o);
        if6297 = call6361;
      }
      return if6297;
    };
    func6296.paramCounts = [0];
    this.methods["doreturn"] = func6296;
    func6296.definitionLine = 2940;
    func6296.definitionModule = "parser";
    setLineNumber(2976);    // compilenode method
    var func6362 = function(argcv) {    // method domethodtype
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for domethodtype"));
      setModuleName("parser");
      setLineNumber(2978);    // compilenode identifier
      var var_methodTypeTok = var_sym;
      setLineNumber(2979);    // compilenode identifier
      onSelf = true;
      var call6363 = callmethodChecked(this, "methodsignature", [1], GraceTrue);
      var var_m = call6363;
      setLineNumber(2980);    // compilenode identifier
      var call6364 = callmethodChecked(var_m, "m", [0]);
      var var_meth = call6364;
      setLineNumber(2981);    // compilenode identifier
      var call6365 = callmethodChecked(var_m, "sig", [0]);
      var var_signature = call6365;
      setLineNumber(2982);    // compilenode identifier
      var call6366 = callmethodChecked(var_m, "rtype", [0]);
      var var_dtype = call6366;
      var if6367 = GraceDone;
      setLineNumber(2983);    // compilenode identifier
      var opresult6370 = callmethodChecked(GraceFalse, "==", [1], var_dtype);
      if (Grace_isTrue(opresult6370)) {
        setLineNumber(2984);    // compilenode string
        var string6371 = new GraceString("Done");
        var call6372 = callmethodChecked(var_ast, "identifierNode", [0]);
        var call6373 = callmethodChecked(call6372, "new", [2], string6371, GraceFalse);
        var_dtype = call6373;
        if6367 = GraceDone;
      }
      setLineNumber(2986);    // compilenode identifier
      var call6374 = callmethodChecked(var_methodTypeTok, "line", [0]);
      var call6375 = callmethodChecked(var_methodTypeTok, "linePos", [0]);
      var call6376 = callmethodChecked(var_util, "setPosition", [2], call6374, call6375);
      setLineNumber(2987);    // compilenode identifier
      var call6377 = callmethodChecked(var_meth, "value", [0]);
      var call6378 = callmethodChecked(var_ast, "methodTypeNode", [0]);
      var call6379 = callmethodChecked(call6378, "new", [3], call6377, var_signature, var_dtype);
      var var_o = call6379;
      setLineNumber(2988);    // compilenode identifier
      var call6380 = callmethodChecked(var_m, "typeParams", [0]);
      var call6381 = callmethodChecked(var_o, "typeParams:=", [1], call6380);
      setLineNumber(2989);    // compilenode identifier
      var call6382 = callmethodChecked(var_values, "push", [1], var_o);
      setLineNumber(2990);    // compilenode call
      onSelf = true;
      var call6383 = callmethodChecked(this, "reconcileComments", [0]);
      var if6384 = GraceDone;
      setLineNumber(2991);    // compilenode string
      var string6385 = new GraceString("semicolon");
      onSelf = true;
      var call6386 = callmethodChecked(this, "accept", [1], string6385);
      if (Grace_isTrue(call6386)) {
        setLineNumber(2992);    // compilenode call
        onSelf = true;
        var call6387 = callmethodChecked(this, "next", [0]);
        if6384 = call6387;
      } else {
        var if6388 = GraceDone;
        setLineNumber(2994);    // compilenode string
        var string6389 = new GraceString("rbrace");
        onSelf = true;
        var call6390 = callmethodChecked(this, "accept", [1], string6389);
        var call6391 = callmethodChecked(call6390, "prefix!", [0]);
        if (Grace_isTrue(call6391)) {
          var if6392 = GraceDone;
          setLineNumber(2995);    // compilenode identifier
          var call6393 = callmethodChecked(var_sym, "line", [0]);
          var call6395 = callmethodChecked(var_lastToken, "line", [0]);
          var opresult6397 = callmethodChecked(call6395, "==", [1], call6393);
          if (Grace_isTrue(opresult6397)) {
            setLineNumber(2996);    // compilenode identifier
            var call6398 = callmethodChecked(var_errormessages, "suggestion", [0]);
            var call6399 = callmethodChecked(call6398, "new", [0]);
            var var_suggestion = call6399;
            setLineNumber(2997);    // compilenode identifier
            var call6400 = callmethodChecked(var_sym, "value", [0]);
            var call6403 = callmethodChecked(var_lastToken, "linePos", [0]);
            var diff6405 = callmethodChecked(call6403, "-", [1], new GraceNum(1));
            var call6406 = callmethodChecked(var_sym, "line", [0]);
            var call6407 = callmethodChecked(var_util, "lines", [0]);
            var call6408 = callmethodChecked(call6407, "at", [1], call6406);
            var call6409 = callmethodChecked(call6408, "substringFrom()to", [1, 1], new GraceNum(1), diff6405);
            var opresult6411 = callmethodChecked(call6409, "++", [1], call6400);
            var var_newLine = opresult6411;
            setLineNumber(2998);    // compilenode identifier
            var call6413 = callmethodChecked(var_sym, "line", [0]);
            var opresult6415 = callmethodChecked(call6413, "+", [1], new GraceNum(0.1));
            var call6416 = callmethodChecked(var_suggestion, "addLine", [2], opresult6415, var_newLine);
            setLineNumber(2999);    // compilenode identifier
            var call6417 = callmethodChecked(var_suggestion, "deleteToken()leading()trailing", [1, 1, 1], var_sym, GraceTrue, GraceTrue);
            setLineNumber(3000);    // compilenode string
            var string6418 = new GraceString("methods in a type literal must be on separate lines, or separated by semicolons.");
            setLineNumber(3001);    // compilenode identifier
            var call6419 = callmethodChecked(var_sym, "line", [0]);
            var call6420 = callmethodChecked(var_sym, "linePos", [0]);
            setLineNumber(3000);    // compilenode identifier
            var call6421 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string6418, call6419, call6420, var_suggestion);
            if6392 = call6421;
          }
          if6388 = if6392;
        }
        if6384 = if6388;
      }
      return if6384;
    };
    func6362.paramCounts = [0];
    this.methods["domethodtype"] = func6362;
    func6362.definitionLine = 2976;
    func6362.definitionModule = "parser";
    setLineNumber(3007);    // compilenode method
    var func6422 = function(argcv) {    // method dotypeLiteral
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for dotypeLiteral"));
      setModuleName("parser");
      setLineNumber(3009);    // compilenode identifier
      var var_typeLiteralTok = var_sym;
      var if6423 = GraceDone;
      setLineNumber(3010);    // compilenode string
      var string6424 = new GraceString("type");
      onSelf = true;
      var call6425 = callmethodChecked(this, "acceptKeyword", [1], string6424);
      if (Grace_isTrue(call6425)) {
        setLineNumber(3011);    // compilenode call
        onSelf = true;
        var call6426 = callmethodChecked(this, "next", [0]);
        var if6427 = GraceDone;
        setLineNumber(3012);    // compilenode string
        var string6428 = new GraceString("lbrace");
        onSelf = true;
        var call6429 = callmethodChecked(this, "accept", [1], string6428);
        var call6430 = callmethodChecked(call6429, "prefix!", [0]);
        if (Grace_isTrue(call6430)) {
          setLineNumber(3013);    // compilenode identifier
          var call6431 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call6432 = callmethodChecked(call6431, "new", [0]);
          var var_suggestion = call6432;
          setLineNumber(3014);    // compilenode string
          var string6433 = new GraceString("{");
          var call6434 = callmethodChecked(var_suggestion, "replaceToken()with", [1, 1], var_sym, string6433);
          setLineNumber(3015);    // compilenode string
          var string6435 = new GraceString("type literals must open with a brace.");
          setLineNumber(3016);    // compilenode identifier
          var call6436 = callmethodChecked(var_sym, "line", [0]);
          var call6437 = callmethodChecked(var_sym, "linePos", [0]);
          setLineNumber(3015);    // compilenode identifier
          var call6438 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string6435, call6436, call6437, var_suggestion);
          setLineNumber(3018);    // compilenode identifier
          return var_done;
        }
        if6423 = if6427;
      }
      var if6439 = GraceDone;
      setLineNumber(3020);    // compilenode string
      var string6440 = new GraceString("lbrace");
      onSelf = true;
      var call6441 = callmethodChecked(this, "accept", [1], string6440);
      if (Grace_isTrue(call6441)) {
        setLineNumber(3021);    // compilenode array
        var array6442 = new PrimitiveGraceList([]);
        var var_meths = array6442;
        setLineNumber(3022);    // compilenode array
        var array6443 = new PrimitiveGraceList([]);
        var var_types = array6443;
        setLineNumber(3023);    // compilenode identifier
        var var_mc = var_auto__95__count;
        setLineNumber(3024);    // compilenode identifier
        var opresult6446 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
        var_auto__95__count = opresult6446;
        setLineNumber(3025);    // compilenode call
        onSelf = true;
        var call6447 = callmethodChecked(this, "next", [0]);
        setLineNumber(3026);    // compilenode block
        var block6448 = new GraceBlock(this, 3026, 0);
        block6448.real = function() {
          var string6449 = new GraceString("rbrace");
          onSelf = true;
          var call6450 = callmethodChecked(this, "accept", [1], string6449);
          var call6451 = callmethodChecked(call6450, "not", [0]);
          return call6451;
        };
        var block6452 = new GraceBlock(this, 3026, 0);
        block6452.real = function() {
          var if6453 = GraceDone;
          setLineNumber(3027);    // compilenode string
          var string6454 = new GraceString("type");
          onSelf = true;
          var call6455 = callmethodChecked(this, "acceptKeyword", [1], string6454);
          if (Grace_isTrue(call6455)) {
            setLineNumber(3028);    // compilenode call
            onSelf = true;
            var call6456 = callmethodChecked(this, "typedec", [0]);
            setLineNumber(3029);    // compilenode identifier
            var call6457 = callmethodChecked(var_values, "pop", [0]);
            var call6458 = callmethodChecked(var_types, "push", [1], call6457);
            if6453 = call6458;
          } else {
            setLineNumber(3031);    // compilenode call
            onSelf = true;
            var call6459 = callmethodChecked(this, "domethodtype", [0]);
            setLineNumber(3032);    // compilenode identifier
            var call6460 = callmethodChecked(var_values, "pop", [0]);
            var call6461 = callmethodChecked(var_meths, "push", [1], call6460);
            if6453 = call6461;
          }
          return if6453;
        };
        var call6462 = callmethodChecked(var_prelude, "while()do", [1, 1], block6448, block6452);
        setLineNumber(3035);    // compilenode call
        onSelf = true;
        var call6463 = callmethodChecked(this, "next", [0]);
        setLineNumber(3036);    // compilenode identifier
        var call6464 = callmethodChecked(var_typeLiteralTok, "line", [0]);
        var call6465 = callmethodChecked(var_typeLiteralTok, "linePos", [0]);
        var call6466 = callmethodChecked(var_util, "setPosition", [2], call6464, call6465);
        setLineNumber(3037);    // compilenode identifier
        var call6467 = callmethodChecked(var_ast, "typeLiteralNode", [0]);
        var call6468 = callmethodChecked(call6467, "new", [2], var_meths, var_types);
        var var_t = call6468;
        setLineNumber(3038);    // compilenode identifier
        var call6469 = callmethodChecked(var_values, "push", [1], var_t);
        if6439 = call6469;
      }
      return if6439;
    };
    func6422.paramCounts = [0];
    this.methods["dotypeLiteral"] = func6422;
    func6422.definitionLine = 3007;
    func6422.definitionModule = "parser";
    setLineNumber(3042);    // compilenode method
    var func6470 = function(argcv) {    // method typedec
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for typedec"));
      setModuleName("parser");
      var if6471 = GraceDone;
      setLineNumber(3044);    // compilenode string
      var string6472 = new GraceString("type");
      onSelf = true;
      var call6473 = callmethodChecked(this, "acceptKeyword", [1], string6472);
      if (Grace_isTrue(call6473)) {
        setLineNumber(3045);    // compilenode identifier
        var call6474 = callmethodChecked(var_sym, "line", [0]);
        var var_line = call6474;
        setLineNumber(3046);    // compilenode identifier
        var call6475 = callmethodChecked(var_sym, "linePos", [0]);
        var var_pos = call6475;
        setLineNumber(3047);    // compilenode call
        onSelf = true;
        var call6476 = callmethodChecked(this, "next", [0]);
        var if6477 = GraceDone;
        setLineNumber(3048);    // compilenode string
        var string6478 = new GraceString("identifier");
        var call6480 = callmethodChecked(var_sym, "kind", [0]);
        var opresult6482 = callmethodChecked(call6480, "\u2260", [1], string6478);
        if (Grace_isTrue(opresult6482)) {
          setLineNumber(3049);    // compilenode identifier
          var call6483 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call6484 = callmethodChecked(call6483, "new", [0]);
          var var_suggestion = call6484;
          setLineNumber(3050);    // compilenode string
          var string6485 = new GraceString(" \u00abtype name\u00bb");
          var call6486 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string6485, var_lastToken);
          setLineNumber(3051);    // compilenode string
          var string6487 = new GraceString("a type declaration must have a name after the 'type'.");
          setLineNumber(3052);    // compilenode identifier
          var call6488 = callmethodChecked(var_lastToken, "line", [0]);
          var call6490 = callmethodChecked(var_lastToken, "size", [0]);
          var call6492 = callmethodChecked(var_lastToken, "linePos", [0]);
          var opresult6494 = callmethodChecked(call6492, "+", [1], call6490);
          var opresult6496 = callmethodChecked(opresult6494, "+", [1], new GraceNum(1));
          setLineNumber(3051);    // compilenode identifier
          var call6497 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string6487, call6488, opresult6496, var_suggestion);
          if6477 = call6497;
        }
        setLineNumber(3054);    // compilenode call
        onSelf = true;
        var call6498 = callmethodChecked(this, "pushidentifier", [0]);
        setLineNumber(3055);    // compilenode identifier
        var call6499 = callmethodChecked(var_util, "setPosition", [2], var_line, var_pos);
        setLineNumber(3056);    // compilenode identifier
        var call6500 = callmethodChecked(var_values, "pop", [0]);
        var call6501 = callmethodChecked(var_ast, "typeDecNode", [0]);
        var call6502 = callmethodChecked(call6501, "new", [2], call6500, GraceFalse);
        var var_nt = call6502;
        var if6503 = GraceDone;
        setLineNumber(3057);    // compilenode string
        var string6504 = new GraceString("lgeneric");
        onSelf = true;
        var call6505 = callmethodChecked(this, "accept", [1], string6504);
        if (Grace_isTrue(call6505)) {
          onSelf = true;
          var call6506 = callmethodChecked(this, "typeparameters", [0]);
          var call6507 = callmethodChecked(var_nt, "typeParams:=", [1], call6506);
          if6503 = call6507;
        }
        setLineNumber(3058);    // compilenode identifier
        var call6508 = callmethodChecked(var_nt, "name", [0]);
        var call6509 = callmethodChecked(call6508, "isBindingOccurrence:=", [1], GraceTrue);
        setLineNumber(3059);    // compilenode call
        onSelf = true;
        var call6510 = callmethodChecked(this, "doannotation", [0]);
        var var_anns = call6510;
        var if6511 = GraceDone;
        setLineNumber(3060);    // compilenode string
        var string6512 = new GraceString("=");
        var call6514 = callmethodChecked(var_sym, "value", [0]);
        var opresult6516 = callmethodChecked(call6514, "\u2260", [1], string6512);
        var string6518 = new GraceString("op");
        var call6520 = callmethodChecked(var_sym, "kind", [0]);
        var opresult6522 = callmethodChecked(call6520, "\u2260", [1], string6518);
        var opresult6524 = callmethodChecked(opresult6522, "||", [1], opresult6516);
        if (Grace_isTrue(opresult6524)) {
          setLineNumber(3061);    // compilenode identifier
          var call6525 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call6526 = callmethodChecked(call6525, "new", [0]);
          var var_suggestion = call6526;
          setLineNumber(3062);    // compilenode block
          var block6527 = new GraceBlock(this, 3062, 1);
          setLineNumber(1);    // compilenode identifier
          block6527.real = function(var_t) {
            setLineNumber(3062);    // compilenode string
            var string6528 = new GraceString("lbrace");
            var call6530 = callmethodChecked(var_t, "kind", [0]);
            var opresult6532 = callmethodChecked(call6530, "==", [1], string6528);
            return opresult6532;
          };
          onSelf = true;
          var call6533 = callmethodChecked(this, "findNextToken", [1], block6527);
          var var_nextTok = call6533;
          var if6534 = GraceDone;
          setLineNumber(3063);    // compilenode block
          var block6535 = new GraceBlock(this, 3063, 0);
          block6535.real = function() {
            var opresult6538 = callmethodChecked(var_nextTok, "==", [1], var_sym);
            return opresult6538;
          };
          var opresult6542 = callmethodChecked(GraceFalse, "==", [1], var_nextTok);
          var opresult6544 = callmethodChecked(opresult6542, "||", [1], block6535);
          if (Grace_isTrue(opresult6544)) {
            setLineNumber(3064);    // compilenode string
            var string6545 = new GraceString(" =");
            var call6546 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string6545, var_lastToken);
            if6534 = call6546;
          } else {
            setLineNumber(3066);    // compilenode identifier
            var call6547 = callmethodChecked(var_nextTok, "prev", [0]);
            var string6548 = new GraceString("=");
            var call6549 = callmethodChecked(var_suggestion, "replaceTokenRange()with", [2, 1], var_sym, call6547, string6548);
            if6534 = call6549;
          }
          setLineNumber(3068);    // compilenode string
          var string6550 = new GraceString("a type declaration must have an '=' after the type name.");
          setLineNumber(3069);    // compilenode identifier
          var call6551 = callmethodChecked(var_lastToken, "line", [0]);
          var call6553 = callmethodChecked(var_lastToken, "size", [0]);
          var call6555 = callmethodChecked(var_lastToken, "linePos", [0]);
          var opresult6557 = callmethodChecked(call6555, "+", [1], call6553);
          var opresult6559 = callmethodChecked(opresult6557, "+", [1], new GraceNum(1));
          setLineNumber(3068);    // compilenode identifier
          var call6560 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestion", [1, 2, 1], string6550, call6551, opresult6559, var_suggestion);
          if6511 = call6560;
        }
        setLineNumber(3072);    // compilenode call
        onSelf = true;
        var call6561 = callmethodChecked(this, "next", [0]);
        var if6562 = GraceDone;
        setLineNumber(3074);    // compilenode string
        var string6563 = new GraceString("lbrace");
        onSelf = true;
        var call6564 = callmethodChecked(this, "accept", [1], string6563);
        if (Grace_isTrue(call6564)) {
          setLineNumber(3075);    // compilenode call
          onSelf = true;
          var call6565 = callmethodChecked(this, "dotypeLiteral", [0]);
          if6562 = call6565;
        } else {
          setLineNumber(3077);    // compilenode identifier
          onSelf = true;
          var call6566 = callmethodChecked(this, "expression", [1], var_noBlocks);
          if6562 = call6566;
        }
        setLineNumber(3079);    // compilenode identifier
        var call6567 = callmethodChecked(var_values, "pop", [0]);
        var call6568 = callmethodChecked(var_nt, "value:=", [1], call6567);
        var if6569 = GraceDone;
        setLineNumber(3080);    // compilenode identifier
        var opresult6572 = callmethodChecked(GraceFalse, "\u2260", [1], var_anns);
        if (Grace_isTrue(opresult6572)) {
          setLineNumber(3081);    // compilenode identifier
          var call6573 = callmethodChecked(var_nt, "annotations", [0]);
          var call6574 = callmethodChecked(call6573, "addAll", [1], var_anns);
          if6569 = call6574;
        }
        setLineNumber(3083);    // compilenode identifier
        var call6575 = callmethodChecked(var_values, "push", [1], var_nt);
        setLineNumber(3084);    // compilenode call
        onSelf = true;
        var call6576 = callmethodChecked(this, "reconcileComments", [0]);
        if6471 = call6576;
      }
      return if6471;
    };
    func6470.paramCounts = [0];
    this.methods["typedec"] = func6470;
    func6470.definitionLine = 3042;
    func6470.definitionModule = "parser";
    setLineNumber(3088);    // compilenode method
    var func6577 = function(argcv) {    // method checkIndent
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for checkIndent"));
      setModuleName("parser");
      var if6578 = GraceDone;
      setLineNumber(3089);    // compilenode identifier
      if (Grace_isTrue(var_indentFreePass)) {
        setLineNumber(3090);    // compilenode identifier
        var_indentFreePass = GraceFalse;
        if6578 = GraceDone;
      } else {
        var if6579 = GraceDone;
        setLineNumber(3091);    // compilenode string
        var string6580 = new GraceString("semicolon");
        var call6582 = callmethodChecked(var_sym, "kind", [0]);
        var opresult6584 = callmethodChecked(call6582, "==", [1], string6580);
        if (Grace_isTrue(opresult6584)) {
        } else {
          var if6585 = GraceDone;
          setLineNumber(3094);    // compilenode string
          var string6586 = new GraceString("rsquare");
          var call6588 = callmethodChecked(var_sym, "kind", [0]);
          var opresult6590 = callmethodChecked(call6588, "==", [1], string6586);
          setLineNumber(3093);    // compilenode string
          var string6592 = new GraceString("rparen");
          var call6594 = callmethodChecked(var_sym, "kind", [0]);
          var opresult6596 = callmethodChecked(call6594, "==", [1], string6592);
          var string6598 = new GraceString("rbrace");
          var call6600 = callmethodChecked(var_sym, "kind", [0]);
          var opresult6602 = callmethodChecked(call6600, "==", [1], string6598);
          var opresult6604 = callmethodChecked(opresult6602, "||", [1], opresult6596);
          var opresult6606 = callmethodChecked(opresult6604, "||", [1], opresult6590);
          if (Grace_isTrue(opresult6606)) {
          } else {
            var if6607 = GraceDone;
            setLineNumber(3096);    // compilenode string
            var string6608 = new GraceString("eof");
            var call6610 = callmethodChecked(var_sym, "kind", [0]);
            var opresult6612 = callmethodChecked(call6610, "==", [1], string6608);
            if (Grace_isTrue(opresult6612)) {
            } else {
              var if6613 = GraceDone;
              setLineNumber(3097);    // compilenode identifier
              var call6615 = callmethodChecked(var_sym, "indent", [0]);
              var opresult6617 = callmethodChecked(call6615, "<", [1], var_minIndentLevel);
              if (Grace_isTrue(opresult6617)) {
                var if6618 = GraceDone;
                setLineNumber(3098);    // compilenode identifier
                var call6621 = callmethodChecked(var_sym, "linePos", [0]);
                var diff6623 = callmethodChecked(call6621, "-", [1], new GraceNum(1));
                var opresult6625 = callmethodChecked(diff6623, "\u2260", [1], var_minIndentLevel);
                if (Grace_isTrue(opresult6625)) {
                  setLineNumber(3099);    // compilenode array
                  var array6626 = new PrimitiveGraceList([]);
                  var var_suggestions = array6626;
                  setLineNumber(3100);    // compilenode identifier
                  var call6627 = callmethodChecked(var_errormessages, "suggestion", [0]);
                  var call6628 = callmethodChecked(call6627, "new", [0]);
                  var var_suggestion = call6628;
                  setLineNumber(3101);    // compilenode identifier
                  var call6630 = callmethodChecked(var_sym, "linePos", [0]);
                  var diff6632 = callmethodChecked(call6630, "-", [1], new GraceNum(1));
                  var diff6635 = callmethodChecked(var_minIndentLevel, "-", [1], diff6632);
                  var opresult6638 = callmethodChecked(new GraceNum(1), "..", [1], diff6635);
                  var block6639 = new GraceBlock(this, 3101, 1);
                  setLineNumber(1);    // compilenode identifier
                  block6639.real = function(var___95____95__0) {
                    setLineNumber(3102);    // compilenode string
                    var string6640 = new GraceString(" ");
                    var call6641 = callmethodChecked(var_sym, "line", [0]);
                    var call6642 = callmethodChecked(var_suggestion, "insert()atPosition()onLine", [1, 1, 1], string6640, new GraceNum(1), call6641);
                    return call6642;
                  };
                  var call6643 = callmethodChecked(var_prelude, "for()do", [1, 1], opresult6638, block6639);
                  setLineNumber(3104);    // compilenode identifier
                  var call6644 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
                  setLineNumber(3105);    // compilenode identifier
                  var call6645 = callmethodChecked(var_errormessages, "suggestion", [0]);
                  var call6646 = callmethodChecked(call6645, "new", [0]);
                  var_suggestion = call6646;
                  setLineNumber(3107);    // compilenode identifier
                  var var_tok = var_lastToken;
                  setLineNumber(3108);    // compilenode block
                  var block6647 = new GraceBlock(this, 3108, 0);
                  block6647.real = function() {
                    var call6649 = callmethodChecked(var_tok, "indent", [0]);
                    var opresult6651 = callmethodChecked(call6649, "\u2265", [1], var_minIndentLevel);
                    var call6654 = callmethodChecked(var_tok, "indent", [0]);
                    var opresult6656 = callmethodChecked(call6654, "+", [1], new GraceNum(1));
                    var call6658 = callmethodChecked(var_tok, "linePos", [0]);
                    var opresult6660 = callmethodChecked(call6658, "\u2260", [1], opresult6656);
                    var opresult6662 = callmethodChecked(opresult6660, "||", [1], opresult6651);
                    return opresult6662;
                  };
                  var block6663 = new GraceBlock(this, 3108, 0);
                  block6663.real = function() {
                    setLineNumber(3109);    // compilenode identifier
                    var call6664 = callmethodChecked(var_tok, "prev", [0]);
                    var_tok = call6664;
                    return GraceDone;
                  };
                  var call6665 = callmethodChecked(var_prelude, "while()do", [1, 1], block6647, block6663);
                  setLineNumber(3111);    // compilenode string
                  var string6666 = new GraceString("");
                  var var_line = string6666;
                  setLineNumber(3112);    // compilenode identifier
                  var call6667 = callmethodChecked(var_tok, "indent", [0]);
                  var opresult6670 = callmethodChecked(new GraceNum(1), "..", [1], call6667);
                  var block6671 = new GraceBlock(this, 3112, 1);
                  setLineNumber(1);    // compilenode identifier
                  block6671.real = function(var___95____95__1) {
                    setLineNumber(3113);    // compilenode string
                    var string6672 = new GraceString(" ");
                    var opresult6675 = callmethodChecked(var_line, "++", [1], string6672);
                    var_line = opresult6675;
                    return GraceDone;
                  };
                  var call6676 = callmethodChecked(var_prelude, "for()do", [1, 1], opresult6670, block6671);
                  setLineNumber(3115);    // compilenode string
                  var string6677 = new GraceString("}");
                  var opresult6680 = callmethodChecked(var_line, "++", [1], string6677);
                  var_line = opresult6680;
                  setLineNumber(3116);    // compilenode identifier
                  var call6682 = callmethodChecked(var_sym, "line", [0]);
                  var diff6684 = callmethodChecked(call6682, "-", [1], new GraceNum(0.9));
                  var call6685 = callmethodChecked(var_suggestion, "addLine", [2], diff6684, var_line);
                  setLineNumber(3117);    // compilenode identifier
                  var call6686 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
                  setLineNumber(3119);    // compilenode string
                  var string6687 = new GraceString(". This is often caused by a missing '}'.");
                  var string6690 = new GraceString("at least ");
                  var opresult6692 = callmethodChecked(string6690, "++", [1], var_minIndentLevel);
                  var opresult6694 = callmethodChecked(opresult6692, "++", [1], string6687);
                  setLineNumber(3118);    // compilenode string
                  var string6696 = new GraceString("the indentation for this line must be ");
                  var opresult6698 = callmethodChecked(string6696, "++", [1], opresult6694);
                  setLineNumber(3120);    // compilenode identifier
                  var call6699 = callmethodChecked(var_sym, "line", [0]);
                  var call6700 = callmethodChecked(var_sym, "linePos", [0]);
                  setLineNumber(3118);    // compilenode identifier
                  var call6701 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestions", [1, 2, 1], opresult6698, call6699, call6700, var_suggestions);
                  if6618 = call6701;
                }
                if6613 = if6618;
              } else {
                var if6702 = GraceDone;
                setLineNumber(3122);    // compilenode identifier
                var opresult6705 = callmethodChecked(var_minIndentLevel, "+", [1], new GraceNum(1));
                var call6707 = callmethodChecked(var_sym, "indent", [0]);
                var opresult6709 = callmethodChecked(call6707, ">", [1], opresult6705);
                if (Grace_isTrue(opresult6709)) {
                  setLineNumber(3123);    // compilenode identifier
                  var call6710 = callmethodChecked(var_sym, "indent", [0]);
                  var_minIndentLevel = call6710;
                  if6702 = GraceDone;
                } else {
                  var if6711 = GraceDone;
                  setLineNumber(3124);    // compilenode identifier
                  var call6714 = callmethodChecked(var_sym, "indent", [0]);
                  var diff6716 = callmethodChecked(call6714, "-", [1], var_lastIndent);
                  var call6717 = callmethodChecked(diff6716, "abs", [0]);
                  var opresult6719 = callmethodChecked(call6717, "==", [1], new GraceNum(1));
                  if (Grace_isTrue(opresult6719)) {
                    setLineNumber(3125);    // compilenode string
                    var string6720 = new GraceString("the indentation for this line can't differ ");
                    var var_m1 = string6720;
                    setLineNumber(3126);    // compilenode string
                    var string6721 = new GraceString("from that of the previous line by 1.\n  To start a block, or ");
                    var var_m2 = string6721;
                    setLineNumber(3127);    // compilenode string
                    var string6722 = new GraceString("to signal a continuation line, increase the indent by 2 or more. ");
                    var var_m3 = string6722;
                    setLineNumber(3128);    // compilenode string
                    var string6723 = new GraceString("To end a block, or end the continuation, decrease the indent ");
                    var var_m4 = string6723;
                    setLineNumber(3129);    // compilenode string
                    var string6724 = new GraceString("to the prior level. Otherwise, use the same indent as the previous line.");
                    var var_m5 = string6724;
                    setLineNumber(3130);    // compilenode identifier
                    var opresult6730 = callmethodChecked(var_m1, "++", [1], var_m2);
                    var opresult6732 = callmethodChecked(opresult6730, "++", [1], var_m3);
                    var opresult6734 = callmethodChecked(opresult6732, "++", [1], var_m4);
                    var opresult6736 = callmethodChecked(opresult6734, "++", [1], var_m5);
                    var var_msg = opresult6736;
                    setLineNumber(3131);    // compilenode identifier
                    var call6737 = callmethodChecked(var_sym, "line", [0]);
                    var call6738 = callmethodChecked(var_sym, "linePos", [0]);
                    var call6739 = callmethodChecked(var_errormessages, "syntaxError()atPosition", [1, 2], var_msg, call6737, call6738);
                    if6711 = call6739;
                  }
                  if6702 = if6711;
                }
                if6613 = if6702;
              }
              if6607 = if6613;
            }
            if6585 = if6607;
          }
          if6579 = if6585;
        }
        if6578 = if6579;
      }
      return if6578;
    };
    func6577.paramCounts = [0];
    this.methods["checkIndent"] = func6577;
    func6577.definitionLine = 3088;
    func6577.definitionModule = "parser";
    setLineNumber(3135);    // compilenode method
    var func6740 = function(argcv) {    // method statement
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for statement"));
      setModuleName("parser");
      setLineNumber(3142);    // compilenode identifier
      var call6741 = callmethodChecked(var_sym, "indent", [0]);
      var_statementIndent = call6741;
      setLineNumber(3143);    // compilenode identifier
      var_statementToken = var_sym;
      setLineNumber(3144);    // compilenode identifier
      var var_btok = var_sym;
      setLineNumber(3145);    // compilenode call
      onSelf = true;
      var call6742 = callmethodChecked(this, "checkIndent", [0]);
      var if6743 = GraceDone;
      setLineNumber(3146);    // compilenode string
      var string6744 = new GraceString("keyword");
      onSelf = true;
      var call6745 = callmethodChecked(this, "accept", [1], string6744);
      if (Grace_isTrue(call6745)) {
        var if6746 = GraceDone;
        setLineNumber(3147);    // compilenode string
        var string6747 = new GraceString("var");
        var call6749 = callmethodChecked(var_sym, "value", [0]);
        var opresult6751 = callmethodChecked(call6749, "==", [1], string6747);
        if (Grace_isTrue(opresult6751)) {
          setLineNumber(3148);    // compilenode call
          onSelf = true;
          var call6752 = callmethodChecked(this, "vardec", [0]);
          if6746 = call6752;
        } else {
          var if6753 = GraceDone;
          setLineNumber(3149);    // compilenode string
          var string6754 = new GraceString("def");
          var call6756 = callmethodChecked(var_sym, "value", [0]);
          var opresult6758 = callmethodChecked(call6756, "==", [1], string6754);
          if (Grace_isTrue(opresult6758)) {
            setLineNumber(3150);    // compilenode call
            onSelf = true;
            var call6759 = callmethodChecked(this, "defdec", [0]);
            if6753 = call6759;
          } else {
            var if6760 = GraceDone;
            setLineNumber(3151);    // compilenode string
            var string6761 = new GraceString("import");
            var call6763 = callmethodChecked(var_sym, "value", [0]);
            var opresult6765 = callmethodChecked(call6763, "==", [1], string6761);
            if (Grace_isTrue(opresult6765)) {
              setLineNumber(3152);    // compilenode call
              onSelf = true;
              var call6766 = callmethodChecked(this, "doimport", [0]);
              if6760 = call6766;
            } else {
              var if6767 = GraceDone;
              setLineNumber(3153);    // compilenode string
              var string6768 = new GraceString("dialect");
              var call6770 = callmethodChecked(var_sym, "value", [0]);
              var opresult6772 = callmethodChecked(call6770, "==", [1], string6768);
              if (Grace_isTrue(opresult6772)) {
                setLineNumber(3154);    // compilenode call
                onSelf = true;
                var call6773 = callmethodChecked(this, "dodialect", [0]);
                if6767 = call6773;
              } else {
                var if6774 = GraceDone;
                setLineNumber(3155);    // compilenode string
                var string6775 = new GraceString("type");
                var call6777 = callmethodChecked(var_sym, "value", [0]);
                var opresult6779 = callmethodChecked(call6777, "==", [1], string6775);
                if (Grace_isTrue(opresult6779)) {
                  setLineNumber(3156);    // compilenode call
                  onSelf = true;
                  var call6780 = callmethodChecked(this, "typedec", [0]);
                  if6774 = call6780;
                } else {
                  var if6781 = GraceDone;
                  setLineNumber(3157);    // compilenode string
                  var string6782 = new GraceString("class");
                  var call6784 = callmethodChecked(var_sym, "value", [0]);
                  var opresult6786 = callmethodChecked(call6784, "==", [1], string6782);
                  if (Grace_isTrue(opresult6786)) {
                    setLineNumber(3158);    // compilenode call
                    onSelf = true;
                    var call6787 = callmethodChecked(this, "doclass", [0]);
                    if6781 = call6787;
                  } else {
                    var if6788 = GraceDone;
                    setLineNumber(3159);    // compilenode string
                    var string6789 = new GraceString("trait");
                    var call6791 = callmethodChecked(var_sym, "value", [0]);
                    var opresult6793 = callmethodChecked(call6791, "==", [1], string6789);
                    if (Grace_isTrue(opresult6793)) {
                      setLineNumber(3160);    // compilenode call
                      onSelf = true;
                      var call6794 = callmethodChecked(this, "doclass", [0]);
                      if6788 = call6794;
                    } else {
                      var if6795 = GraceDone;
                      setLineNumber(3161);    // compilenode string
                      var string6796 = new GraceString("factory");
                      var call6798 = callmethodChecked(var_sym, "value", [0]);
                      var opresult6800 = callmethodChecked(call6798, "==", [1], string6796);
                      if (Grace_isTrue(opresult6800)) {
                        setLineNumber(3162);    // compilenode call
                        onSelf = true;
                        var call6801 = callmethodChecked(this, "dofactoryMethod", [0]);
                        if6795 = call6801;
                      } else {
                        var if6802 = GraceDone;
                        setLineNumber(3163);    // compilenode string
                        var string6803 = new GraceString("return");
                        var call6805 = callmethodChecked(var_sym, "value", [0]);
                        var opresult6807 = callmethodChecked(call6805, "==", [1], string6803);
                        if (Grace_isTrue(opresult6807)) {
                          setLineNumber(3164);    // compilenode call
                          onSelf = true;
                          var call6808 = callmethodChecked(this, "doreturn", [0]);
                          if6802 = call6808;
                        } else {
                          setLineNumber(3166);    // compilenode identifier
                          onSelf = true;
                          var call6809 = callmethodChecked(this, "expression", [1], var_blocksOK);
                          if6802 = call6809;
                        }
                        if6795 = if6802;
                      }
                      if6788 = if6795;
                    }
                    if6781 = if6788;
                  }
                  if6774 = if6781;
                }
                if6767 = if6774;
              }
              if6760 = if6767;
            }
            if6753 = if6760;
          }
          if6746 = if6753;
        }
        if6743 = if6746;
      } else {
        setLineNumber(3169);    // compilenode block
        var block6810 = new GraceBlock(this, 3169, 0);
        block6810.real = function() {
          onSelf = true;
          var call6811 = callmethodChecked(this, "expression", [1], var_blocksOK);
          return call6811;
        };
        var block6812 = new GraceBlock(this, 3169, 0);
        block6812.real = function() {
          var if6813 = GraceDone;
          setLineNumber(3173);    // compilenode string
          var string6814 = new GraceString("bind");
          onSelf = true;
          var call6815 = callmethodChecked(this, "accept", [1], string6814);
          setLineNumber(3172);    // compilenode string
          var string6817 = new GraceString("index");
          var call6819 = callmethodChecked(var_values, "last", [0]);
          var call6820 = callmethodChecked(call6819, "kind", [0]);
          var opresult6822 = callmethodChecked(call6820, "==", [1], string6817);
          setLineNumber(3171);    // compilenode string
          var string6824 = new GraceString("member");
          var call6826 = callmethodChecked(var_values, "last", [0]);
          var call6827 = callmethodChecked(call6826, "kind", [0]);
          var opresult6829 = callmethodChecked(call6827, "==", [1], string6824);
          setLineNumber(3170);    // compilenode string
          var string6831 = new GraceString("identifier");
          var call6833 = callmethodChecked(var_values, "last", [0]);
          var call6834 = callmethodChecked(call6833, "kind", [0]);
          var opresult6836 = callmethodChecked(call6834, "==", [1], string6831);
          var opresult6838 = callmethodChecked(opresult6836, "||", [1], opresult6829);
          var opresult6840 = callmethodChecked(opresult6838, "||", [1], opresult6822);
          var opresult6842 = callmethodChecked(opresult6840, "&&", [1], call6815);
          if (Grace_isTrue(opresult6842)) {
            setLineNumber(3174);    // compilenode identifier
            var call6843 = callmethodChecked(var_values, "pop", [0]);
            var var_dest = call6843;
            var if6844 = GraceDone;
            setLineNumber(3175);    // compilenode string
            var string6845 = new GraceString("lbrace");
            var call6847 = callmethodChecked(var_dest, "kind", [0]);
            var opresult6849 = callmethodChecked(call6847, "==", [1], string6845);
            if (Grace_isTrue(opresult6849)) {
              setLineNumber(3176);    // compilenode string
              var string6850 = new GraceString("");
              var call6852 = callmethodChecked(var_sym, "line", [0]);
              var string6854 = new GraceString(", sym.line = ");
              var string6857 = new GraceString("sym = ");
              var opresult6859 = callmethodChecked(string6857, "++", [1], var_sym);
              var opresult6861 = callmethodChecked(opresult6859, "++", [1], string6854);
              var opresult6863 = callmethodChecked(opresult6861, "++", [1], call6852);
              var opresult6865 = callmethodChecked(opresult6863, "++", [1], string6850);
              var call6866 = Grace_print(opresult6865);
              setLineNumber(3177);    // compilenode string
              var string6867 = new GraceString("popped lbrace token while parsing statement");
              var call6868 = callmethodChecked(var_prelude, "ProgrammingError", [0]);
              var call6869 = callmethodChecked(call6868, "raise", [1], string6867);
              if6844 = call6869;
            }
            setLineNumber(3179);    // compilenode call
            onSelf = true;
            var call6870 = callmethodChecked(this, "next", [0]);
            var if6871 = GraceDone;
            setLineNumber(3180);    // compilenode block
            var block6872 = new GraceBlock(this, 3180, 0);
            block6872.real = function() {
              onSelf = true;
              var call6873 = callmethodChecked(this, "expression", [1], var_blocksOK);
              return call6873;
            };
            onSelf = true;
            var call6874 = callmethodChecked(this, "didConsume", [1], block6872);
            var call6875 = callmethodChecked(call6874, "not", [0]);
            if (Grace_isTrue(call6875)) {
              setLineNumber(3181);    // compilenode array
              var array6876 = new PrimitiveGraceList([]);
              var var_suggestions = array6876;
              setLineNumber(3182);    // compilenode identifier
              var call6877 = callmethodChecked(var_errormessages, "suggestion", [0]);
              var call6878 = callmethodChecked(call6877, "new", [0]);
              var var_suggestion = call6878;
              setLineNumber(3183);    // compilenode string
              var string6880 = new GraceString("rbrace");
              var array6879 = new PrimitiveGraceList([string6880]);
              onSelf = true;
              var call6881 = callmethodChecked(this, "findNextValidToken", [1], array6879);
              var var_nextTok = call6881;
              var if6882 = GraceDone;
              setLineNumber(3184);    // compilenode identifier
              var opresult6885 = callmethodChecked(var_nextTok, "==", [1], var_sym);
              if (Grace_isTrue(opresult6885)) {
                setLineNumber(3185);    // compilenode string
                var string6886 = new GraceString(" \u00abexpression\u00bb");
                var call6887 = callmethodChecked(var_suggestion, "insert()afterToken", [1, 1], string6886, var_lastToken);
                if6882 = call6887;
              } else {
                setLineNumber(3187);    // compilenode identifier
                var call6888 = callmethodChecked(var_nextTok, "prev", [0]);
                var string6889 = new GraceString(" \u00abexpression\u00bb");
                var call6890 = callmethodChecked(var_suggestion, "replaceTokenRange()leading()trailing()with", [2, 1, 1, 1], var_sym, call6888, GraceTrue, GraceFalse, string6889);
                if6882 = call6890;
              }
              setLineNumber(3189);    // compilenode identifier
              var call6891 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
              setLineNumber(3190);    // compilenode identifier
              var call6892 = callmethodChecked(var_errormessages, "suggestion", [0]);
              var call6893 = callmethodChecked(call6892, "new", [0]);
              var_suggestion = call6893;
              setLineNumber(3191);    // compilenode identifier
              var call6894 = callmethodChecked(var_nextTok, "prev", [0]);
              var call6895 = callmethodChecked(var_suggestion, "deleteTokenRange()leading()trailing", [2, 1, 1], var_lastToken, call6894, GraceTrue, GraceFalse);
              setLineNumber(3192);    // compilenode identifier
              var call6896 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
              setLineNumber(3193);    // compilenode string
              var string6897 = new GraceString("a valid expression must follow ':='.");
              setLineNumber(3194);    // compilenode identifier
              var call6898 = callmethodChecked(var_sym, "line", [0]);
              var call6899 = callmethodChecked(var_sym, "linePos", [0]);
              setLineNumber(3193);    // compilenode identifier
              var call6900 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestions", [1, 2, 1], string6897, call6898, call6899, var_suggestions);
              if6871 = call6900;
            }
            setLineNumber(3196);    // compilenode identifier
            var call6901 = callmethodChecked(var_values, "pop", [0]);
            var var_val = call6901;
            setLineNumber(3197);    // compilenode identifier
            var call6902 = callmethodChecked(var_btok, "line", [0]);
            var call6903 = callmethodChecked(var_btok, "linePos", [0]);
            var call6904 = callmethodChecked(var_util, "setPosition", [2], call6902, call6903);
            setLineNumber(3198);    // compilenode identifier
            var call6905 = callmethodChecked(var_ast, "bindNode", [0]);
            var call6906 = callmethodChecked(call6905, "new", [2], var_dest, var_val);
            var var_o = call6906;
            setLineNumber(3199);    // compilenode identifier
            var call6907 = callmethodChecked(var_values, "push", [1], var_o);
            if6813 = call6907;
          }
          return if6813;
        };
        onSelf = true;
        var call6908 = callmethodChecked(this, "ifConsume()then", [1, 1], block6810, block6812);
        if6743 = call6908;
      }
      setLineNumber(3203);    // compilenode call
      onSelf = true;
      var call6909 = callmethodChecked(this, "reconcileComments", [0]);
      var if6910 = GraceDone;
      setLineNumber(3204);    // compilenode string
      var string6911 = new GraceString("eof");
      onSelf = true;
      var call6912 = callmethodChecked(this, "accept", [1], string6911);
      if (Grace_isTrue(call6912)) {
        setLineNumber(3205);    // compilenode identifier
        return GraceTrue;
      }
      var if6913 = GraceDone;
      setLineNumber(3207);    // compilenode string
      var string6914 = new GraceString("semicolon");
      onSelf = true;
      var call6915 = callmethodChecked(this, "accept", [1], string6914);
      if (Grace_isTrue(call6915)) {
        setLineNumber(3208);    // compilenode identifier
        var call6916 = callmethodChecked(var_sym, "line", [0]);
        var var_oldLine = call6916;
        setLineNumber(3209);    // compilenode call
        onSelf = true;
        var call6917 = callmethodChecked(this, "next", [0]);
        var if6918 = GraceDone;
        setLineNumber(3210);    // compilenode identifier
        var call6920 = callmethodChecked(var_sym, "line", [0]);
        var opresult6922 = callmethodChecked(call6920, "==", [1], var_oldLine);
        if (Grace_isTrue(opresult6922)) {
          setLineNumber(3211);    // compilenode identifier
          var_indentFreePass = GraceTrue;
          if6918 = GraceDone;
        }
        if6913 = if6918;
      } else {
        setLineNumber(3214);    // compilenode call
        onSelf = true;
        var call6923 = callmethodChecked(this, "checkUnexpectedTokenAfterStatement", [0]);
        if6913 = call6923;
      }
      return if6913;
    };
    func6740.paramCounts = [0];
    this.methods["statement"] = func6740;
    func6740.definitionLine = 3135;
    func6740.definitionModule = "parser";
    setLineNumber(3218);    // compilenode method
    var func6924 = function(argcv) {    // method pushComments
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for pushComments"));
      setModuleName("parser");
      var if6925 = GraceDone;
      setLineNumber(3224);    // compilenode string
      var string6926 = new GraceString("comment");
      onSelf = true;
      var call6927 = callmethodChecked(this, "accept", [1], string6926);
      var call6928 = callmethodChecked(call6927, "prefix!", [0]);
      if (Grace_isTrue(call6928)) {
        return var_done;
      }
      setLineNumber(3225);    // compilenode identifier
      var call6929 = callmethodChecked(var_sym, "line", [0]);
      var call6930 = callmethodChecked(var_sym, "linePos", [0]);
      var call6931 = callmethodChecked(var_util, "setPosition", [2], call6929, call6930);
      setLineNumber(3226);    // compilenode identifier
      var call6932 = callmethodChecked(var_sym, "value", [0]);
      var call6933 = callmethodChecked(var_ast, "commentNode", [0]);
      var call6934 = callmethodChecked(call6933, "new", [1], call6932);
      var var_o = call6934;
      var if6935 = GraceDone;
      setLineNumber(3227);    // compilenode string
      var string6936 = new GraceString("comment");
      var call6938 = callmethodChecked(var_lastToken, "kind", [0]);
      var opresult6940 = callmethodChecked(call6938, "\u2260", [1], string6936);
      var call6942 = callmethodChecked(var_sym, "line", [0]);
      var call6944 = callmethodChecked(var_lastToken, "line", [0]);
      var opresult6946 = callmethodChecked(call6944, "==", [1], call6942);
      var opresult6948 = callmethodChecked(opresult6946, "&&", [1], opresult6940);
      if (Grace_isTrue(opresult6948)) {
        setLineNumber(3228);    // compilenode identifier
        var call6949 = callmethodChecked(var_o, "isPartialLine:=", [1], GraceTrue);
        if6935 = call6949;
      } else {
        var if6950 = GraceDone;
        setLineNumber(3229);    // compilenode identifier
        var call6952 = callmethodChecked(var_sym, "line", [0]);
        var diff6954 = callmethodChecked(call6952, "-", [1], new GraceNum(1));
        var call6956 = callmethodChecked(var_lastToken, "line", [0]);
        var opresult6958 = callmethodChecked(call6956, "<", [1], diff6954);
        if (Grace_isTrue(opresult6958)) {
          setLineNumber(3230);    // compilenode identifier
          var call6959 = callmethodChecked(var_o, "isPreceededByBlankLine:=", [1], GraceTrue);
          if6950 = call6959;
        }
        if6935 = if6950;
      }
      setLineNumber(3232);    // compilenode identifier
      var call6960 = callmethodChecked(var_comments, "push", [1], var_o);
      setLineNumber(3233);    // compilenode block
      var block6961 = new GraceBlock(this, 3233, 0);
      block6961.real = function() {
        setLineNumber(3234);    // compilenode identifier
        var_previousCommentToken = var_sym;
        setLineNumber(3235);    // compilenode identifier
        var call6962 = callmethodChecked(var_tokens, "poll", [0]);
        var_sym = call6962;
        var if6963 = GraceDone;
        setLineNumber(3236);    // compilenode identifier
        var call6965 = callmethodChecked(var_previousCommentToken, "line", [0]);
        var opresult6967 = callmethodChecked(call6965, "+", [1], new GraceNum(1));
        var call6969 = callmethodChecked(var_sym, "line", [0]);
        var opresult6971 = callmethodChecked(call6969, ">", [1], opresult6967);
        if (Grace_isTrue(opresult6971)) {
          onSelf = true;
          var call6972 = callmethodChecked(this, "noteBlank", [0]);
          if6963 = call6972;
        }
        setLineNumber(3237);    // compilenode string
        var string6973 = new GraceString("comment");
        onSelf = true;
        var call6974 = callmethodChecked(this, "accept", [1], string6973);
        return call6974;
      };
      setLineNumber(3238);    // compilenode block
      var block6975 = new GraceBlock(this, 3238, 0);
      block6975.real = function() {
        setLineNumber(3239);    // compilenode identifier
        var call6976 = callmethodChecked(var_sym, "line", [0]);
        var call6977 = callmethodChecked(var_sym, "linePos", [0]);
        var call6978 = callmethodChecked(var_util, "setPosition", [2], call6976, call6977);
        setLineNumber(3240);    // compilenode identifier
        var call6979 = callmethodChecked(var_sym, "value", [0]);
        var call6980 = callmethodChecked(var_ast, "commentNode", [0]);
        var call6981 = callmethodChecked(call6980, "new", [1], call6979);
        var_o = call6981;
        var if6982 = GraceDone;
        setLineNumber(3241);    // compilenode identifier
        var call6984 = callmethodChecked(var_sym, "line", [0]);
        var diff6986 = callmethodChecked(call6984, "-", [1], new GraceNum(1));
        var call6988 = callmethodChecked(var_comments, "last", [0]);
        var call6989 = callmethodChecked(call6988, "endLine", [0]);
        var opresult6991 = callmethodChecked(call6989, "==", [1], diff6986);
        if (Grace_isTrue(opresult6991)) {
          setLineNumber(3242);    // compilenode identifier
          var call6992 = callmethodChecked(var_comments, "last", [0]);
          var call6993 = callmethodChecked(call6992, "extendCommentUsing", [1], var_o);
          if6982 = call6993;
        } else {
          setLineNumber(3244);    // compilenode identifier
          var call6994 = callmethodChecked(var_comments, "push", [1], var_o);
          var if6995 = GraceDone;
          setLineNumber(3245);    // compilenode identifier
          var call6997 = callmethodChecked(var_sym, "line", [0]);
          var diff6999 = callmethodChecked(call6997, "-", [1], new GraceNum(1));
          var call7001 = callmethodChecked(var_lastToken, "line", [0]);
          var opresult7003 = callmethodChecked(call7001, "<", [1], diff6999);
          if (Grace_isTrue(opresult7003)) {
            setLineNumber(3246);    // compilenode identifier
            var call7004 = callmethodChecked(var_o, "isPreceededByBlankLine:=", [1], GraceTrue);
            if6995 = call7004;
          }
          if6982 = if6995;
        }
        return if6982;
      };
      var call7005 = callmethodChecked(var_prelude, "while()do", [1, 1], block6961, block6975);
      return call7005;
    };
    func6924.paramCounts = [0];
    this.methods["pushComments"] = func6924;
    func6924.definitionLine = 3218;
    func6924.definitionModule = "parser";
    setLineNumber(3252);    // compilenode method
    var func7006 = function(argcv) {    // method reconcileComments
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for reconcileComments"));
      setModuleName("parser");
      setLineNumber(3258);    // compilenode call
      onSelf = true;
      var call7007 = callmethodChecked(this, "pushComments", [0]);
      var if7008 = GraceDone;
      setLineNumber(3259);    // compilenode identifier
      var call7009 = callmethodChecked(var_values, "isEmpty", [0]);
      if (Grace_isTrue(call7009)) {
        setLineNumber(3260);    // compilenode identifier
        if7008 = var_moduleObject;
      } else {
        setLineNumber(3262);    // compilenode identifier
        var call7010 = callmethodChecked(var_values, "last", [0]);
        if7008 = call7010;
      }
      var var_node = if7008;
      var if7011 = GraceDone;
      setLineNumber(3264);    // compilenode string
      var string7012 = new GraceString("lbrace");
      var call7014 = callmethodChecked(var_node, "kind", [0]);
      var opresult7016 = callmethodChecked(call7014, "==", [1], string7012);
      if (Grace_isTrue(opresult7016)) {
        setLineNumber(3268);    // compilenode identifier
        return var_done;
      }
      setLineNumber(3269);    // compilenode identifier
      var call7017 = callmethodChecked(var_node, "line", [0]);
      var var_oLine = call7017;
      setLineNumber(3270);    // compilenode call
      var call7018 = callmethodChecked(var_prelude, "emptyList", [0]);
      var var_preComments = call7018;
      setLineNumber(3271);    // compilenode call
      var call7019 = callmethodChecked(var_prelude, "emptyList", [0]);
      var var_postComments = call7019;
      setLineNumber(3273);    // compilenode identifier
      var call7020 = callmethodChecked(var_comments, "size", [0]);
      var var_ix = call7020;
      setLineNumber(3274);    // compilenode block
      var block7021 = new GraceBlock(this, 3274, 0);
      block7021.real = function() {
        var opresult7024 = callmethodChecked(var_ix, ">", [1], new GraceNum(0));
        return opresult7024;
      };
      var block7025 = new GraceBlock(this, 3274, 0);
      block7025.real = function() {
        setLineNumber(3275);    // compilenode identifier
        var call7026 = callmethodChecked(var_comments, "at", [1], var_ix);
        var var_each = call7026;
        setLineNumber(3276);    // compilenode identifier
        var opresult7029 = callmethodChecked(var_oLine, "+", [1], new GraceNum(1));
        var call7031 = callmethodChecked(var_each, "line", [0]);
        var opresult7033 = callmethodChecked(call7031, "==", [1], opresult7029);
        var call7036 = callmethodChecked(var_each, "line", [0]);
        var opresult7038 = callmethodChecked(call7036, "==", [1], var_oLine);
        var opresult7040 = callmethodChecked(opresult7038, "||", [1], opresult7033);
        var var_isPostComment = opresult7040;
        setLineNumber(3277);    // compilenode identifier
        var diff7043 = callmethodChecked(var_oLine, "-", [1], new GraceNum(1));
        var call7045 = callmethodChecked(var_each, "endLine", [0]);
        var opresult7047 = callmethodChecked(call7045, "==", [1], diff7043);
        var call7049 = callmethodChecked(var_each, "isPreceededByBlankLine", [0]);
        var opresult7051 = callmethodChecked(call7049, "&&", [1], opresult7047);
        var var_isPreComment = opresult7051;
        var if7052 = GraceDone;
        setLineNumber(3278);    // compilenode identifier
        if (Grace_isTrue(var_isPostComment)) {
          setLineNumber(3279);    // compilenode identifier
          var call7053 = callmethodChecked(var_comments, "removeAt", [1], var_ix);
          var call7054 = callmethodChecked(var_postComments, "push", [1], call7053);
          if7052 = call7054;
        } else {
          var if7055 = GraceDone;
          setLineNumber(3280);    // compilenode identifier
          if (Grace_isTrue(var_isPreComment)) {
            setLineNumber(3281);    // compilenode identifier
            var call7056 = callmethodChecked(var_comments, "removeAt", [1], var_ix);
            var call7057 = callmethodChecked(var_preComments, "addFirst", [1], call7056);
            if7055 = call7057;
          } else {
            var if7058 = GraceDone;
            setLineNumber(3282);    // compilenode identifier
            var diff7061 = callmethodChecked(var_oLine, "-", [1], new GraceNum(1));
            var call7063 = callmethodChecked(var_each, "endLine", [0]);
            var opresult7065 = callmethodChecked(call7063, "<", [1], diff7061);
            if (Grace_isTrue(opresult7065)) {
              setLineNumber(3283);    // compilenode num
              var_ix = new GraceNum(0);
              if7058 = GraceDone;
            }
            if7055 = if7058;
          }
          if7052 = if7055;
        }
        setLineNumber(3285);    // compilenode identifier
        var diff7068 = callmethodChecked(var_ix, "-", [1], new GraceNum(1));
        var_ix = diff7068;
        return GraceDone;
      };
      var call7069 = callmethodChecked(var_prelude, "while()do", [1, 1], block7021, block7025);
      setLineNumber(3288);    // compilenode identifier
      var call7070 = callmethodChecked(var_postComments, "size", [0]);
      var var_postSz = call7070;
      setLineNumber(3289);    // compilenode identifier
      var call7071 = callmethodChecked(var_preComments, "size", [0]);
      var var_preSz = call7071;
      var if7072 = GraceDone;
      setLineNumber(3291);    // compilenode identifier
      var opresult7075 = callmethodChecked(var_preSz, ">", [1], new GraceNum(1));
      var opresult7079 = callmethodChecked(var_postSz, ">", [1], new GraceNum(1));
      var opresult7081 = callmethodChecked(opresult7079, "&&", [1], opresult7075);
      if (Grace_isTrue(opresult7081)) {
        setLineNumber(3292);    // compilenode string
        var string7082 = new GraceString("\n");
        var call7084 = callmethodChecked(var_preComments, "last", [0]);
        var call7085 = callmethodChecked(call7084, "value", [0]);
        var opresult7087 = callmethodChecked(call7085, "++", [1], string7082);
        var call7088 = callmethodChecked(var_preComments, "last", [0]);
        var call7089 = callmethodChecked(call7088, "value:=", [1], opresult7087);
        if7072 = call7089;
      }
      setLineNumber(3294);    // compilenode identifier
      var call7090 = callmethodChecked(var_node, "addComments", [1], var_preComments);
      setLineNumber(3295);    // compilenode identifier
      var call7091 = callmethodChecked(var_node, "addComments", [1], var_postComments);
      return call7091;
    };
    func7006.paramCounts = [0];
    this.methods["reconcileComments"] = func7006;
    func7006.definitionLine = 3252;
    func7006.definitionModule = "parser";
    setLineNumber(3298);    // compilenode method
    var func7092 = function(argcv) {    // method checkBadOperators
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for checkBadOperators"));
      setModuleName("parser");
      var if7093 = GraceDone;
      setLineNumber(3299);    // compilenode string
      var string7094 = new GraceString("=");
      var call7096 = callmethodChecked(var_sym, "value", [0]);
      var opresult7098 = callmethodChecked(call7096, "==", [1], string7094);
      if (Grace_isTrue(opresult7098)) {
        setLineNumber(3300);    // compilenode identifier
        var call7099 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call7100 = callmethodChecked(call7099, "new", [0]);
        var var_sugg = call7100;
        setLineNumber(3301);    // compilenode string
        var string7101 = new GraceString("=");
        var call7102 = callmethodChecked(var_sugg, "insert()afterToken", [1, 1], string7101, var_sym);
        setLineNumber(3302);    // compilenode string
        var string7103 = new GraceString("use '==' to test equality, not '='.");
        setLineNumber(3303);    // compilenode identifier
        var call7104 = callmethodChecked(var_sym, "line", [0]);
        var call7105 = callmethodChecked(var_sym, "linePos", [0]);
        var call7106 = callmethodChecked(var_sym, "linePos", [0]);
        setLineNumber(3302);    // compilenode identifier
        var call7107 = callmethodChecked(var_errormessages, "syntaxError()atRange()withSuggestion", [1, 3, 1], string7103, call7104, call7105, call7106, var_sugg);
        if7093 = call7107;
      }
      var if7108 = GraceDone;
      setLineNumber(3306);    // compilenode string
      var string7109 = new GraceString("rgeneric");
      var call7111 = callmethodChecked(var_sym, "kind", [0]);
      var opresult7113 = callmethodChecked(call7111, "==", [1], string7109);
      if (Grace_isTrue(opresult7113)) {
        setLineNumber(3307);    // compilenode identifier
        var call7114 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call7115 = callmethodChecked(call7114, "new", [0]);
        var var_sugg = call7115;
        setLineNumber(3308);    // compilenode string
        var string7116 = new GraceString(" ");
        var call7117 = callmethodChecked(var_sugg, "insert()beforeToken", [1, 1], string7116, var_sym);
        setLineNumber(3309);    // compilenode string
        var string7118 = new GraceString("the '>' operator must be preceded by a space.");
        setLineNumber(3310);    // compilenode identifier
        var call7119 = callmethodChecked(var_sym, "line", [0]);
        var call7120 = callmethodChecked(var_sym, "linePos", [0]);
        var call7121 = callmethodChecked(var_sym, "linePos", [0]);
        setLineNumber(3309);    // compilenode identifier
        var call7122 = callmethodChecked(var_errormessages, "syntaxError()atRange()withSuggestion", [1, 3, 1], string7118, call7119, call7120, call7121, var_sugg);
        if7108 = call7122;
      }
      return if7108;
    };
    func7092.paramCounts = [0];
    this.methods["checkBadOperators"] = func7092;
    func7092.definitionLine = 3298;
    func7092.definitionModule = "parser";
    setLineNumber(3315);    // compilenode method
    var func7123 = function(argcv) {    // method checkBadTypeLiteral
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for checkBadTypeLiteral"));
      setModuleName("parser");
      var if7124 = GraceDone;
      setLineNumber(3316);    // compilenode string
      var string7125 = new GraceString("lbrace");
      var call7127 = callmethodChecked(var_sym, "kind", [0]);
      var opresult7129 = callmethodChecked(call7127, "==", [1], string7125);
      if (Grace_isTrue(opresult7129)) {
        setLineNumber(3317);    // compilenode identifier
        var call7130 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call7131 = callmethodChecked(call7130, "new", [0]);
        var var_sugg = call7131;
        setLineNumber(3318);    // compilenode string
        var string7132 = new GraceString("type ");
        var call7133 = callmethodChecked(var_sugg, "insert()beforeToken", [1, 1], string7132, var_sym);
        setLineNumber(3319);    // compilenode string
        var string7134 = new GraceString("type literals must start with the keyword 'type'.");
        setLineNumber(3320);    // compilenode identifier
        var call7135 = callmethodChecked(var_sym, "line", [0]);
        var call7136 = callmethodChecked(var_sym, "linePos", [0]);
        var call7137 = callmethodChecked(var_sym, "linePos", [0]);
        setLineNumber(3319);    // compilenode identifier
        var call7138 = callmethodChecked(var_errormessages, "syntaxError()atRange()withSuggestion", [1, 3, 1], string7134, call7135, call7136, call7137, var_sugg);
        if7124 = call7138;
      }
      return if7124;
    };
    func7123.paramCounts = [0];
    this.methods["checkBadTypeLiteral"] = func7123;
    func7123.definitionLine = 3315;
    func7123.definitionModule = "parser";
    setLineNumber(3325);    // compilenode method
    var func7139 = function(argcv) {    // method checkUnexpectedTokenAfterStatement
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for checkUnexpectedTokenAfterStatement"));
      setModuleName("parser");
      var if7140 = GraceDone;
      setLineNumber(3326);    // compilenode identifier
      var call7141 = callmethodChecked(var_lastToken, "line", [0]);
      var call7143 = callmethodChecked(var_sym, "line", [0]);
      var opresult7145 = callmethodChecked(call7143, "==", [1], call7141);
      if (Grace_isTrue(opresult7145)) {
        var if7146 = GraceDone;
        setLineNumber(3328);    // compilenode string
        var string7147 = new GraceString("identifier");
        var call7149 = callmethodChecked(var_lastToken, "kind", [0]);
        var opresult7151 = callmethodChecked(call7149, "==", [1], string7147);
        setLineNumber(3327);    // compilenode string
        var string7153 = new GraceString("=");
        var call7155 = callmethodChecked(var_sym, "value", [0]);
        var opresult7157 = callmethodChecked(call7155, "==", [1], string7153);
        var string7159 = new GraceString("op");
        var call7161 = callmethodChecked(var_sym, "kind", [0]);
        var opresult7163 = callmethodChecked(call7161, "==", [1], string7159);
        var opresult7165 = callmethodChecked(opresult7163, "&&", [1], opresult7157);
        var opresult7167 = callmethodChecked(opresult7165, "&&", [1], opresult7151);
        if (Grace_isTrue(opresult7167)) {
          setLineNumber(3329);    // compilenode identifier
          var call7168 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call7169 = callmethodChecked(call7168, "new", [0]);
          var var_sugg = call7169;
          setLineNumber(3330);    // compilenode array
          var array7170 = new PrimitiveGraceList([]);
          var var_suggestions = array7170;
          setLineNumber(3331);    // compilenode string
          var string7171 = new GraceString(":=");
          var call7172 = callmethodChecked(var_sugg, "replaceToken()leading()trailing()with", [1, 1, 1, 1], var_sym, GraceFalse, GraceFalse, string7171);
          setLineNumber(3332);    // compilenode identifier
          var call7173 = callmethodChecked(var_suggestions, "push", [1], var_sugg);
          setLineNumber(3333);    // compilenode identifier
          var call7174 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call7175 = callmethodChecked(call7174, "new", [0]);
          var var_sugg2 = call7175;
          setLineNumber(3334);    // compilenode string
          var string7176 = new GraceString("==");
          var call7177 = callmethodChecked(var_sugg2, "replaceToken()leading()trailing()with", [1, 1, 1, 1], var_sym, GraceFalse, GraceFalse, string7176);
          setLineNumber(3335);    // compilenode identifier
          var call7178 = callmethodChecked(var_suggestions, "push", [1], var_sugg2);
          setLineNumber(3336);    // compilenode string
          var string7179 = new GraceString("assignment uses ':=', not '='.");
          setLineNumber(3337);    // compilenode identifier
          var call7180 = callmethodChecked(var_sym, "line", [0]);
          var call7181 = callmethodChecked(var_sym, "linePos", [0]);
          var call7182 = callmethodChecked(var_sym, "linePos", [0]);
          setLineNumber(3336);    // compilenode identifier
          var call7183 = callmethodChecked(var_errormessages, "syntaxError()atRange()withSuggestions", [1, 3, 1], string7179, call7180, call7181, call7182, var_suggestions);
          if7146 = call7183;
        }
        var if7184 = GraceDone;
        setLineNumber(3340);    // compilenode string
        var string7185 = new GraceString("rgeneric");
        var call7187 = callmethodChecked(var_sym, "kind", [0]);
        var opresult7189 = callmethodChecked(call7187, "==", [1], string7185);
        if (Grace_isTrue(opresult7189)) {
          setLineNumber(3341);    // compilenode identifier
          var call7190 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call7191 = callmethodChecked(call7190, "new", [0]);
          var var_sugg = call7191;
          setLineNumber(3342);    // compilenode string
          var string7192 = new GraceString(" ");
          var call7193 = callmethodChecked(var_sym, "linePos", [0]);
          var call7194 = callmethodChecked(var_sym, "line", [0]);
          var call7195 = callmethodChecked(var_sugg, "insert()atPosition()onLine", [1, 1, 1], string7192, call7193, call7194);
          setLineNumber(3344);    // compilenode string
          var string7196 = new GraceString("The '>' operator must have a space before it.");
          setLineNumber(3345);    // compilenode identifier
          var call7197 = callmethodChecked(var_sym, "line", [0]);
          var call7198 = callmethodChecked(var_sym, "linePos", [0]);
          var call7199 = callmethodChecked(var_sym, "linePos", [0]);
          setLineNumber(3343);    // compilenode identifier
          var call7200 = callmethodChecked(var_errormessages, "syntaxError()atRange()withSuggestion", [1, 3, 1], string7196, call7197, call7198, call7199, var_sugg);
          if7184 = call7200;
        }
        var if7201 = GraceDone;
        setLineNumber(3348);    // compilenode string
        var string7202 = new GraceString("rbrace");
        var call7204 = callmethodChecked(var_sym, "kind", [0]);
        var opresult7206 = callmethodChecked(call7204, "\u2260", [1], string7202);
        if (Grace_isTrue(opresult7206)) {
          setLineNumber(3349);    // compilenode array
          var array7207 = new PrimitiveGraceList([]);
          var var_suggestions = array7207;
          setLineNumber(3350);    // compilenode vardec
          var var_suggestion;
          var if7208 = GraceDone;
          setLineNumber(3351);    // compilenode block
          var block7209 = new GraceBlock(this, 3351, 0);
          block7209.real = function() {
            var string7210 = new GraceString("identifier");
            var call7212 = callmethodChecked(var_sym, "kind", [0]);
            var opresult7214 = callmethodChecked(call7212, "==", [1], string7210);
            return opresult7214;
          };
          var block7216 = new GraceBlock(this, 3351, 0);
          block7216.real = function() {
            var block7217 = new GraceBlock(this, 3351, 0);
            block7217.real = function() {
              var string7218 = new GraceString("member");
              var call7220 = callmethodChecked(var_values, "last", [0]);
              var call7221 = callmethodChecked(call7220, "kind", [0]);
              var opresult7223 = callmethodChecked(call7221, "==", [1], string7218);
              return opresult7223;
            };
            var string7225 = new GraceString("identifier");
            var call7227 = callmethodChecked(var_values, "last", [0]);
            var call7228 = callmethodChecked(call7227, "kind", [0]);
            var opresult7230 = callmethodChecked(call7228, "==", [1], string7225);
            var opresult7232 = callmethodChecked(opresult7230, "||", [1], block7217);
            return opresult7232;
          };
          var call7235 = callmethodChecked(var_values, "size", [0]);
          var opresult7237 = callmethodChecked(call7235, ">", [1], new GraceNum(0));
          var opresult7239 = callmethodChecked(opresult7237, "&&", [1], block7216);
          var opresult7241 = callmethodChecked(opresult7239, "&&", [1], block7209);
          if (Grace_isTrue(opresult7241)) {
            setLineNumber(3352);    // compilenode identifier
            var call7242 = callmethodChecked(var_errormessages, "suggestion", [0]);
            var call7243 = callmethodChecked(call7242, "new", [0]);
            var_suggestion = call7243;
            setLineNumber(3353);    // compilenode string
            var string7244 = new GraceString(")");
            var call7246 = callmethodChecked(var_sym, "value", [0]);
            var string7248 = new GraceString("(");
            var opresult7250 = callmethodChecked(string7248, "++", [1], call7246);
            var opresult7252 = callmethodChecked(opresult7250, "++", [1], string7244);
            var call7253 = callmethodChecked(var_suggestion, "replaceToken()leading()trailing()with", [1, 1, 1, 1], var_sym, GraceTrue, GraceFalse, opresult7252);
            setLineNumber(3354);    // compilenode identifier
            var call7254 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
            var if7255 = GraceDone;
            setLineNumber(3355);    // compilenode identifier
            var call7256 = callmethodChecked(var_sym, "next", [0]);
            var opresult7259 = callmethodChecked(GraceFalse, "\u2260", [1], call7256);
            if (Grace_isTrue(opresult7259)) {
              setLineNumber(3356);    // compilenode identifier
              var call7260 = callmethodChecked(var_sym, "next", [0]);
              var var_n = call7260;
              var if7261 = GraceDone;
              setLineNumber(3357);    // compilenode identifier
              var call7262 = callmethodChecked(var_sym, "line", [0]);
              var call7264 = callmethodChecked(var_n, "line", [0]);
              var opresult7266 = callmethodChecked(call7264, "==", [1], call7262);
              if (Grace_isTrue(opresult7266)) {
                setLineNumber(3358);    // compilenode identifier
                var call7267 = callmethodChecked(var_errormessages, "suggestion", [0]);
                var call7268 = callmethodChecked(call7267, "new", [0]);
                var_suggestion = call7268;
                setLineNumber(3359);    // compilenode string
                var string7269 = new GraceString("");
                var call7271 = callmethodChecked(var_sym, "value", [0]);
                var string7273 = new GraceString("(");
                var opresult7275 = callmethodChecked(string7273, "++", [1], call7271);
                var opresult7277 = callmethodChecked(opresult7275, "++", [1], string7269);
                var call7278 = callmethodChecked(var_suggestion, "replaceToken()leading()trailing()with", [1, 1, 1, 1], var_sym, GraceTrue, GraceFalse, opresult7277);
                setLineNumber(3360);    // compilenode string
                var string7279 = new GraceString(")");
                var call7280 = callmethodChecked(var_sym, "line", [0]);
                var call7281 = callmethodChecked(var_suggestion, "append()onLine", [1, 1], string7279, call7280);
                setLineNumber(3361);    // compilenode identifier
                var call7282 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
                if7261 = call7282;
              }
              if7255 = if7261;
            }
            var if7283 = GraceDone;
            setLineNumber(3364);    // compilenode string
            var string7284 = new GraceString("identifier");
            var call7286 = callmethodChecked(var_values, "last", [0]);
            var call7287 = callmethodChecked(call7286, "kind", [0]);
            var opresult7289 = callmethodChecked(call7287, "==", [1], string7284);
            if (Grace_isTrue(opresult7289)) {
              setLineNumber(3365);    // compilenode identifier
              var call7290 = callmethodChecked(var_errormessages, "suggestion", [0]);
              var call7291 = callmethodChecked(call7290, "new", [0]);
              var_suggestion = call7291;
              setLineNumber(3366);    // compilenode string
              var string7292 = new GraceString("\"");
              var call7294 = callmethodChecked(var_sym, "value", [0]);
              var string7296 = new GraceString("\"");
              var opresult7298 = callmethodChecked(string7296, "++", [1], call7294);
              var opresult7300 = callmethodChecked(opresult7298, "++", [1], string7292);
              var call7301 = callmethodChecked(var_suggestion, "replaceToken()leading()trailing()with", [1, 1, 1, 1], var_sym, GraceFalse, GraceFalse, opresult7300);
              setLineNumber(3367);    // compilenode identifier
              var call7302 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
              if7283 = call7302;
            }
            if7208 = if7283;
          }
          setLineNumber(3370);    // compilenode string
          var string7304 = new GraceString("rbrace");
          var array7303 = new PrimitiveGraceList([string7304]);
          onSelf = true;
          var call7305 = callmethodChecked(this, "findNextValidToken", [1], array7303);
          var var_nextTok = call7305;
          var if7306 = GraceDone;
          setLineNumber(3371);    // compilenode identifier
          var opresult7309 = callmethodChecked(var_nextTok, "==", [1], var_sym);
          if (Grace_isTrue(opresult7309)) {
            setLineNumber(3372);    // compilenode identifier
            var call7310 = callmethodChecked(var_errormessages, "suggestion", [0]);
            var call7311 = callmethodChecked(call7310, "new", [0]);
            var_suggestion = call7311;
            setLineNumber(3373);    // compilenode identifier
            var call7312 = callmethodChecked(var_lastToken, "line", [0]);
            var call7314 = callmethodChecked(var_lastToken, "size", [0]);
            var call7316 = callmethodChecked(var_lastToken, "linePos", [0]);
            var opresult7318 = callmethodChecked(call7316, "+", [1], call7314);
            var diff7320 = callmethodChecked(opresult7318, "-", [1], new GraceNum(1));
            var call7321 = callmethodChecked(var_lastToken, "line", [0]);
            var call7322 = callmethodChecked(var_util, "lines", [0]);
            var call7323 = callmethodChecked(call7322, "at", [1], call7321);
            var call7324 = callmethodChecked(call7323, "substringFrom()to", [1, 1], new GraceNum(1), diff7320);
            var call7325 = callmethodChecked(var_suggestion, "addLine", [2], call7312, call7324);
            setLineNumber(3374);    // compilenode identifier
            var call7326 = callmethodChecked(var_sym, "linePos", [0]);
            var call7327 = callmethodChecked(var_sym, "line", [0]);
            var call7328 = callmethodChecked(var_util, "lines", [0]);
            var call7329 = callmethodChecked(call7328, "at", [1], call7327);
            var call7330 = callmethodChecked(call7329, "size", [0]);
            var call7331 = callmethodChecked(var_sym, "line", [0]);
            var call7332 = callmethodChecked(var_util, "lines", [0]);
            var call7333 = callmethodChecked(call7332, "at", [1], call7331);
            var call7334 = callmethodChecked(call7333, "substringFrom()to", [1, 1], call7326, call7330);
            var var_newLine = call7334;
            setLineNumber(3375);    // compilenode identifier
            var call7336 = callmethodChecked(var_lastToken, "line", [0]);
            var opresult7338 = callmethodChecked(call7336, "+", [1], new GraceNum(0.1));
            var call7339 = callmethodChecked(var_suggestion, "addLine", [2], opresult7338, var_newLine);
            setLineNumber(3376);    // compilenode identifier
            var call7340 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
            if7306 = call7340;
          } else {
            setLineNumber(3378);    // compilenode identifier
            var call7341 = callmethodChecked(var_errormessages, "suggestion", [0]);
            var call7342 = callmethodChecked(call7341, "new", [0]);
            var_suggestion = call7342;
            setLineNumber(3379);    // compilenode identifier
            var call7343 = callmethodChecked(var_nextTok, "prev", [0]);
            var call7344 = callmethodChecked(var_suggestion, "deleteTokenRange()leading()trailing", [2, 1, 1], var_sym, call7343, GraceTrue, GraceFalse);
            setLineNumber(3380);    // compilenode identifier
            var call7345 = callmethodChecked(var_suggestions, "push", [1], var_suggestion);
            if7306 = call7345;
          }
          setLineNumber(3382);    // compilenode string
          var string7346 = new GraceString("multiple statements must be separated by a newline or a semicolon. This is often caused by missing parentheses.");
          setLineNumber(3383);    // compilenode identifier
          var call7347 = callmethodChecked(var_sym, "line", [0]);
          var call7348 = callmethodChecked(var_sym, "linePos", [0]);
          setLineNumber(3382);    // compilenode identifier
          var call7349 = callmethodChecked(var_errormessages, "syntaxError()atPosition()withSuggestions", [1, 2, 1], string7346, call7347, call7348, var_suggestions);
          if7201 = call7349;
        }
        if7140 = if7201;
      }
      return if7140;
    };
    func7139.paramCounts = [0];
    this.methods["checkUnexpectedTokenAfterStatement"] = func7139;
    func7139.definitionLine = 3325;
    func7139.definitionModule = "parser";
    setLineNumber(3389);    // compilenode method
    var func7350 = function(argcv) {    // method parse(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_toks = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for parse(1)"));
      setModuleName("parser");
      setLineNumber(3393);    // compilenode string
      var string7351 = new GraceString("parsing.");
      var call7352 = callmethodChecked(var_util, "log_verbose", [1], string7351);
      setLineNumber(3394);    // compilenode identifier
      var call7353 = callmethodChecked(var_util, "modname", [0]);
      var call7354 = callmethodChecked(var_ast, "moduleNode", [0]);
      var call7355 = callmethodChecked(call7354, "body()named", [1, 1], var_values, call7353);
      var_moduleObject = call7355;
      var if7356 = GraceDone;
      setLineNumber(3396);    // compilenode identifier
      var call7358 = callmethodChecked(var_toks, "size", [0]);
      var opresult7360 = callmethodChecked(call7358, "==", [1], new GraceNum(0));
      if (Grace_isTrue(opresult7360)) {
        setLineNumber(3397);    // compilenode identifier
        return var_moduleObject;
      }
      setLineNumber(3399);    // compilenode identifier
      var_tokens = var_toks;
      setLineNumber(3400);    // compilenode call
      onSelf = true;
      var call7361 = callmethodChecked(this, "next", [0]);
      var if7362 = GraceDone;
      setLineNumber(3401);    // compilenode identifier
      var call7364 = callmethodChecked(var_sym, "indent", [0]);
      var opresult7366 = callmethodChecked(call7364, ">", [1], new GraceNum(0));
      if (Grace_isTrue(opresult7366)) {
        setLineNumber(3402);    // compilenode identifier
        var call7367 = callmethodChecked(var_errormessages, "suggestion", [0]);
        var call7368 = callmethodChecked(call7367, "new", [0]);
        var var_sugg = call7368;
        setLineNumber(3403);    // compilenode identifier
        var call7369 = callmethodChecked(var_sym, "indent", [0]);
        var call7370 = callmethodChecked(var_sym, "line", [0]);
        var call7371 = callmethodChecked(var_sugg, "deleteRange()onLine", [2, 1], new GraceNum(1), call7369, call7370);
        setLineNumber(3404);    // compilenode string
        var string7372 = new GraceString("the first line must not be indented.");
        setLineNumber(3405);    // compilenode identifier
        var call7373 = callmethodChecked(var_sym, "line", [0]);
        var call7374 = callmethodChecked(var_sym, "indent", [0]);
        setLineNumber(3404);    // compilenode identifier
        var call7375 = callmethodChecked(var_errormessages, "syntaxError()atRange()withSuggestion", [1, 3, 1], string7372, call7373, new GraceNum(1), call7374, var_sugg);
        if7362 = call7375;
      }
      setLineNumber(3408);    // compilenode identifier
      var call7376 = callmethodChecked(var_tokens, "size", [0]);
      var var_oldlength = call7376;
      setLineNumber(3409);    // compilenode block
      var block7377 = new GraceBlock(this, 3409, 0);
      block7377.real = function() {
        var call7379 = callmethodChecked(var_tokens, "size", [0]);
        var opresult7381 = callmethodChecked(call7379, ">", [1], new GraceNum(0));
        return opresult7381;
      };
      var block7382 = new GraceBlock(this, 3409, 0);
      block7382.real = function() {
        setLineNumber(3410);    // compilenode call
        onSelf = true;
        var call7383 = callmethodChecked(this, "blank", [0]);
        setLineNumber(3411);    // compilenode call
        onSelf = true;
        var call7384 = callmethodChecked(this, "methoddec", [0]);
        setLineNumber(3412);    // compilenode call
        onSelf = true;
        var call7385 = callmethodChecked(this, "blank", [0]);
        setLineNumber(3413);    // compilenode block
        var block7386 = new GraceBlock(this, 3413, 0);
        block7386.real = function() {
          onSelf = true;
          var call7387 = callmethodChecked(this, "inheritsOrUses", [0]);
          return call7387;
        };
        var block7388 = new GraceBlock(this, 3413, 0);
        block7388.real = function() {
          setLineNumber(3414);    // compilenode identifier
          var call7389 = callmethodChecked(var_values, "pop", [0]);
          var var_parentNode = call7389;
          var if7390 = GraceDone;
          setLineNumber(3415);    // compilenode identifier
          var call7391 = callmethodChecked(var_parentNode, "isUse", [0]);
          if (Grace_isTrue(call7391)) {
            setLineNumber(3416);    // compilenode identifier
            var call7392 = callmethodChecked(var_moduleObject, "usedTraits", [0]);
            var call7393 = callmethodChecked(call7392, "add", [1], var_parentNode);
            if7390 = call7393;
          } else {
            var if7394 = GraceDone;
            setLineNumber(3417);    // compilenode identifier
            var call7395 = callmethodChecked(var_moduleObject, "usedTraits", [0]);
            var call7396 = callmethodChecked(call7395, "isEmpty", [0]);
            if (Grace_isTrue(call7396)) {
              setLineNumber(3418);    // compilenode identifier
              var call7397 = callmethodChecked(var_moduleObject, "superclass:=", [1], var_parentNode);
              if7394 = call7397;
            } else {
              setLineNumber(3421);    // compilenode string
              var string7398 = new GraceString("before 'use' in a module.");
              setLineNumber(3420);    // compilenode string
              var string7400 = new GraceString("'inherit' must come ");
              var opresult7402 = callmethodChecked(string7400, "++", [1], string7398);
              setLineNumber(3422);    // compilenode identifier
              var call7403 = callmethodChecked(var_parentNode, "line", [0]);
              var call7404 = callmethodChecked(var_parentNode, "linePos", [0]);
              setLineNumber(3423);    // compilenode identifier
              var call7406 = callmethodChecked(var_parentNode, "linePos", [0]);
              var opresult7408 = callmethodChecked(call7406, "+", [1], new GraceNum(7));
              setLineNumber(3420);    // compilenode identifier
              var call7409 = callmethodChecked(var_errormessages, "syntaxError()atRange", [1, 3], opresult7402, call7403, call7404, opresult7408);
              if7394 = call7409;
            }
            if7390 = if7394;
          }
          return if7390;
        };
        onSelf = true;
        var call7410 = callmethodChecked(this, "ifConsume()then", [1, 1], block7386, block7388);
        setLineNumber(3426);    // compilenode call
        onSelf = true;
        var call7411 = callmethodChecked(this, "blank", [0]);
        setLineNumber(3427);    // compilenode call
        onSelf = true;
        var call7412 = callmethodChecked(this, "statement", [0]);
        setLineNumber(3428);    // compilenode call
        onSelf = true;
        var call7413 = callmethodChecked(this, "blank", [0]);
        var if7414 = GraceDone;
        setLineNumber(3429);    // compilenode identifier
        var call7416 = callmethodChecked(var_tokens, "size", [0]);
        var opresult7418 = callmethodChecked(call7416, "==", [1], var_oldlength);
        if (Grace_isTrue(opresult7418)) {
          setLineNumber(3430);    // compilenode identifier
          var call7419 = callmethodChecked(var_errormessages, "suggestion", [0]);
          var call7420 = callmethodChecked(call7419, "new", [0]);
          var var_suggestion = call7420;
          setLineNumber(3431);    // compilenode identifier
          var call7421 = callmethodChecked(var_suggestion, "deleteToken", [1], var_sym);
          setLineNumber(3433);    // compilenode string
          var string7422 = new GraceString("caused by an extra '}', ')', or ']'.");
          setLineNumber(3432);    // compilenode string
          var string7424 = new GraceString("invalid statement. This is often ");
          var opresult7426 = callmethodChecked(string7424, "++", [1], string7422);
          setLineNumber(3434);    // compilenode identifier
          var call7427 = callmethodChecked(var_sym, "line", [0]);
          var call7428 = callmethodChecked(var_sym, "linePos", [0]);
          var call7430 = callmethodChecked(var_sym, "size", [0]);
          var call7432 = callmethodChecked(var_sym, "linePos", [0]);
          var opresult7434 = callmethodChecked(call7432, "+", [1], call7430);
          var diff7436 = callmethodChecked(opresult7434, "-", [1], new GraceNum(1));
          setLineNumber(3432);    // compilenode identifier
          var call7437 = callmethodChecked(var_errormessages, "syntaxError()atRange()withSuggestion", [1, 3, 1], opresult7426, call7427, call7428, diff7436, var_suggestion);
          if7414 = call7437;
        }
        setLineNumber(3437);    // compilenode identifier
        var call7438 = callmethodChecked(var_tokens, "size", [0]);
        var_oldlength = call7438;
        return GraceDone;
      };
      var call7439 = callmethodChecked(var_prelude, "while()do", [1, 1], block7377, block7382);
      setLineNumber(3439);    // compilenode call
      onSelf = true;
      var call7440 = callmethodChecked(this, "blank", [0]);
      setLineNumber(3440);    // compilenode call
      onSelf = true;
      var call7441 = callmethodChecked(this, "statement", [0]);
      setLineNumber(3441);    // compilenode call
      onSelf = true;
      var call7442 = callmethodChecked(this, "blank", [0]);
      setLineNumber(3442);    // compilenode identifier
      return var_moduleObject;
    };
    func7350.paramCounts = [1];
    this.methods["parse"] = func7350;
    func7350.definitionLine = 3389;
    func7350.definitionModule = "parser";
    setLineNumber(7);    // compilenode num
    var var_blankLocation = new GraceNum(0);
    setLineNumber(3441);    // compilenode method
    var func7443 = function(argcv) {    // method blankLocation
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for blankLocation"));
      setModuleName("parser");
      // blankLocation is a simple accessor - elide try ... catch
      setLineNumber(7);    // compilenode identifier
      return var_blankLocation;
    };
    func7443.paramCounts = [0];
    this.methods["blankLocation"] = func7443;
    func7443.definitionLine = 3441;
    func7443.definitionModule = "parser";
    setLineNumber(3441);    // compilenode method
    var func7444 = function(argcv) {    // method blankLocation:=(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var___95__var__95__assign__95__tmp = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for blankLocation:=(1)"));
      setModuleName("parser");
      var_blankLocation = var___95__var__95__assign__95__tmp;
      return GraceDone;
    };
    func7444.paramCounts = [1];
    this.methods["blankLocation:="] = func7444;
    func7444.definitionLine = 3441;
    func7444.definitionModule = "parser";
    this.methods["blankLocation"].debug = "var";
    setLineNumber(8);    // compilenode num
    var var_lastLine = new GraceNum(0);
    setLineNumber(3441);    // compilenode method
    var func7445 = function(argcv) {    // method lastLine
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for lastLine"));
      setModuleName("parser");
      // lastLine is a simple accessor - elide try ... catch
      setLineNumber(8);    // compilenode identifier
      return var_lastLine;
    };
    func7445.paramCounts = [0];
    this.methods["lastLine"] = func7445;
    func7445.definitionLine = 3441;
    func7445.definitionModule = "parser";
    setLineNumber(3441);    // compilenode method
    var func7446 = function(argcv) {    // method lastLine:=(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var___95__var__95__assign__95__tmp = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for lastLine:=(1)"));
      setModuleName("parser");
      var_lastLine = var___95__var__95__assign__95__tmp;
      return GraceDone;
    };
    func7446.paramCounts = [1];
    this.methods["lastLine:="] = func7446;
    func7446.definitionLine = 3441;
    func7446.definitionModule = "parser";
    this.methods["lastLine"].debug = "var";
    setLineNumber(9);    // compilenode num
    var var_lastIndent = new GraceNum(0);
    setLineNumber(3441);    // compilenode method
    var func7447 = function(argcv) {    // method lastIndent
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for lastIndent"));
      setModuleName("parser");
      // lastIndent is a simple accessor - elide try ... catch
      setLineNumber(9);    // compilenode identifier
      return var_lastIndent;
    };
    func7447.paramCounts = [0];
    this.methods["lastIndent"] = func7447;
    func7447.definitionLine = 3441;
    func7447.definitionModule = "parser";
    setLineNumber(3441);    // compilenode method
    var func7448 = function(argcv) {    // method lastIndent:=(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var___95__var__95__assign__95__tmp = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for lastIndent:=(1)"));
      setModuleName("parser");
      var_lastIndent = var___95__var__95__assign__95__tmp;
      return GraceDone;
    };
    func7448.paramCounts = [1];
    this.methods["lastIndent:="] = func7448;
    func7448.definitionLine = 3441;
    func7448.definitionModule = "parser";
    this.methods["lastIndent"].debug = "var";
    setLineNumber(10);    // compilenode identifier
    var var_indentFreePass = GraceFalse;
    setLineNumber(3441);    // compilenode method
    var func7449 = function(argcv) {    // method indentFreePass
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for indentFreePass"));
      setModuleName("parser");
      // indentFreePass is a simple accessor - elide try ... catch
      setLineNumber(10);    // compilenode identifier
      return var_indentFreePass;
    };
    func7449.paramCounts = [0];
    this.methods["indentFreePass"] = func7449;
    func7449.definitionLine = 3441;
    func7449.definitionModule = "parser";
    setLineNumber(3441);    // compilenode method
    var func7450 = function(argcv) {    // method indentFreePass:=(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var___95__var__95__assign__95__tmp = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for indentFreePass:=(1)"));
      setModuleName("parser");
      var_indentFreePass = var___95__var__95__assign__95__tmp;
      return GraceDone;
    };
    func7450.paramCounts = [1];
    this.methods["indentFreePass:="] = func7450;
    func7450.definitionLine = 3441;
    func7450.definitionModule = "parser";
    this.methods["indentFreePass"].debug = "var";
    setLineNumber(11);    // compilenode num
    var var_minIndentLevel = new GraceNum(0);
    setLineNumber(3441);    // compilenode method
    var func7451 = function(argcv) {    // method minIndentLevel
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for minIndentLevel"));
      setModuleName("parser");
      // minIndentLevel is a simple accessor - elide try ... catch
      setLineNumber(11);    // compilenode identifier
      return var_minIndentLevel;
    };
    func7451.paramCounts = [0];
    this.methods["minIndentLevel"] = func7451;
    func7451.definitionLine = 3441;
    func7451.definitionModule = "parser";
    setLineNumber(3441);    // compilenode method
    var func7452 = function(argcv) {    // method minIndentLevel:=(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var___95__var__95__assign__95__tmp = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for minIndentLevel:=(1)"));
      setModuleName("parser");
      var_minIndentLevel = var___95__var__95__assign__95__tmp;
      return GraceDone;
    };
    func7452.paramCounts = [1];
    this.methods["minIndentLevel:="] = func7452;
    func7452.definitionLine = 3441;
    func7452.definitionModule = "parser";
    this.methods["minIndentLevel"].debug = "var";
    setLineNumber(12);    // compilenode num
    var var_statementIndent = new GraceNum(0);
    setLineNumber(3441);    // compilenode method
    var func7453 = function(argcv) {    // method statementIndent
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for statementIndent"));
      setModuleName("parser");
      // statementIndent is a simple accessor - elide try ... catch
      setLineNumber(12);    // compilenode identifier
      return var_statementIndent;
    };
    func7453.paramCounts = [0];
    this.methods["statementIndent"] = func7453;
    func7453.definitionLine = 3441;
    func7453.definitionModule = "parser";
    setLineNumber(3441);    // compilenode method
    var func7454 = function(argcv) {    // method statementIndent:=(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var___95__var__95__assign__95__tmp = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for statementIndent:=(1)"));
      setModuleName("parser");
      var_statementIndent = var___95__var__95__assign__95__tmp;
      return GraceDone;
    };
    func7454.paramCounts = [1];
    this.methods["statementIndent:="] = func7454;
    func7454.definitionLine = 3441;
    func7454.definitionModule = "parser";
    this.methods["statementIndent"].debug = "var";
    setLineNumber(13);    // compilenode identifier
    var var_tokens = GraceFalse;
    setLineNumber(3441);    // compilenode method
    var func7455 = function(argcv) {    // method tokens
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for tokens"));
      setModuleName("parser");
      // tokens is a simple accessor - elide try ... catch
      setLineNumber(13);    // compilenode identifier
      return var_tokens;
    };
    func7455.paramCounts = [0];
    this.methods["tokens"] = func7455;
    func7455.definitionLine = 3441;
    func7455.definitionModule = "parser";
    setLineNumber(3441);    // compilenode method
    var func7456 = function(argcv) {    // method tokens:=(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var___95__var__95__assign__95__tmp = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for tokens:=(1)"));
      setModuleName("parser");
      var_tokens = var___95__var__95__assign__95__tmp;
      return GraceDone;
    };
    func7456.paramCounts = [1];
    this.methods["tokens:="] = func7456;
    func7456.definitionLine = 3441;
    func7456.definitionModule = "parser";
    this.methods["tokens"].debug = "var";
    setLineNumber(14);    // compilenode array
    var array7457 = new PrimitiveGraceList([]);
    var var_values = array7457;
    setLineNumber(3441);    // compilenode method
    var func7458 = function(argcv) {    // method values
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for values"));
      setModuleName("parser");
      // values is a simple accessor - elide try ... catch
      setLineNumber(14);    // compilenode identifier
      return var_values;
    };
    func7458.paramCounts = [0];
    this.methods["values"] = func7458;
    func7458.definitionLine = 3441;
    func7458.definitionModule = "parser";
    setLineNumber(3441);    // compilenode method
    var func7459 = function(argcv) {    // method values:=(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var___95__var__95__assign__95__tmp = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for values:=(1)"));
      setModuleName("parser");
      var_values = var___95__var__95__assign__95__tmp;
      return GraceDone;
    };
    func7459.paramCounts = [1];
    this.methods["values:="] = func7459;
    func7459.definitionLine = 3441;
    func7459.definitionModule = "parser";
    this.methods["values"].debug = "var";
    setLineNumber(15);    // compilenode vardec
    var var_moduleObject;
    setLineNumber(3441);    // compilenode method
    var func7460 = function(argcv) {    // method moduleObject
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for moduleObject"));
      setModuleName("parser");
      // moduleObject is a simple accessor - elide try ... catch
      setLineNumber(15);    // compilenode identifier
      return var_moduleObject;
    };
    func7460.paramCounts = [0];
    this.methods["moduleObject"] = func7460;
    func7460.definitionLine = 3441;
    func7460.definitionModule = "parser";
    setLineNumber(3441);    // compilenode method
    var func7461 = function(argcv) {    // method moduleObject:=(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var___95__var__95__assign__95__tmp = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for moduleObject:=(1)"));
      setModuleName("parser");
      var_moduleObject = var___95__var__95__assign__95__tmp;
      return GraceDone;
    };
    func7461.paramCounts = [1];
    this.methods["moduleObject:="] = func7461;
    func7461.definitionLine = 3441;
    func7461.definitionModule = "parser";
    this.methods["moduleObject"].debug = "var";
    setLineNumber(16);    // compilenode call
    var call7462 = callmethodChecked(var_prelude, "emptyList", [0]);
    var var_comments = call7462;
    var func7463 = function(argcv) {    // method comments
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for comments"));
      setModuleName("parser");
      // comments is a simple accessor - elide try ... catch
      return var_comments;
    };
    func7463.paramCounts = [0];
    this.methods["comments"] = func7463;
    func7463.definitionLine = 16;
    func7463.definitionModule = "parser";
    var func7464 = function(argcv) {    // method comments:=(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var___95__var__95__assign__95__tmp = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for comments:=(1)"));
      setModuleName("parser");
      var_comments = var___95__var__95__assign__95__tmp;
      return GraceDone;
    };
    func7464.paramCounts = [1];
    this.methods["comments:="] = func7464;
    func7464.definitionLine = 16;
    func7464.definitionModule = "parser";
    this.methods["comments"].debug = "var";
    setLineNumber(17);    // compilenode num
    var var_auto__95__count = new GraceNum(0);
    setLineNumber(16);    // compilenode method
    var func7465 = function(argcv) {    // method auto_count
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for auto_count"));
      setModuleName("parser");
      // auto_count is a simple accessor - elide try ... catch
      setLineNumber(17);    // compilenode identifier
      return var_auto__95__count;
    };
    func7465.paramCounts = [0];
    this.methods["auto_count"] = func7465;
    func7465.definitionLine = 16;
    func7465.definitionModule = "parser";
    setLineNumber(16);    // compilenode method
    var func7466 = function(argcv) {    // method auto_count:=(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var___95__var__95__assign__95__tmp = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for auto_count:=(1)"));
      setModuleName("parser");
      var_auto__95__count = var___95__var__95__assign__95__tmp;
      return GraceDone;
    };
    func7466.paramCounts = [1];
    this.methods["auto_count:="] = func7466;
    func7466.definitionLine = 16;
    func7466.definitionModule = "parser";
    this.methods["auto_count"].debug = "var";
    setLineNumber(18);    // compilenode identifier
    var var_noBlocks = GraceFalse;
    setLineNumber(16);    // compilenode method
    var func7467 = function(argcv) {    // method noBlocks
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for noBlocks"));
      setModuleName("parser");
      // noBlocks is a simple accessor - elide try ... catch
      setLineNumber(18);    // compilenode identifier
      return var_noBlocks;
    };
    func7467.paramCounts = [0];
    this.methods["noBlocks"] = func7467;
    func7467.definitionLine = 16;
    func7467.definitionModule = "parser";
    this.methods["noBlocks"].debug = "def";
    setLineNumber(19);    // compilenode identifier
    var var_blocksOK = GraceTrue;
    setLineNumber(16);    // compilenode method
    var func7468 = function(argcv) {    // method blocksOK
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for blocksOK"));
      setModuleName("parser");
      // blocksOK is a simple accessor - elide try ... catch
      setLineNumber(19);    // compilenode identifier
      return var_blocksOK;
    };
    func7468.paramCounts = [0];
    this.methods["blocksOK"] = func7468;
    func7468.definitionLine = 16;
    func7468.definitionModule = "parser";
    this.methods["blocksOK"].debug = "def";
    setLineNumber(20);    // compilenode identifier
    var var_braceIsType = GraceFalse;
    setLineNumber(16);    // compilenode method
    var func7469 = function(argcv) {    // method braceIsType
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for braceIsType"));
      setModuleName("parser");
      // braceIsType is a simple accessor - elide try ... catch
      setLineNumber(20);    // compilenode identifier
      return var_braceIsType;
    };
    func7469.paramCounts = [0];
    this.methods["braceIsType"] = func7469;
    func7469.definitionLine = 16;
    func7469.definitionModule = "parser";
    setLineNumber(16);    // compilenode method
    var func7470 = function(argcv) {    // method braceIsType:=(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var___95__var__95__assign__95__tmp = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for braceIsType:=(1)"));
      setModuleName("parser");
      var_braceIsType = var___95__var__95__assign__95__tmp;
      return GraceDone;
    };
    func7470.paramCounts = [1];
    this.methods["braceIsType:="] = func7470;
    func7470.definitionLine = 16;
    func7470.definitionModule = "parser";
    this.methods["braceIsType"].debug = "var";
    setLineNumber(23);    // compilenode object
    var obj7471 = Grace_allocObject(GraceObject, "object");
    obj7471.definitionModule = "parser";
    obj7471.definitionLine = 23;
    obj7471.outer = this;
    var reader_parser_outer7472 = function() {
      return this.outer;
    };
    obj7471.methods["outer"] = reader_parser_outer7472;
    var obj_init_7471 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj7471;
      setLineNumber(24);    // compilenode string
      var string7473 = new GraceString("start");
      obj7471.data["kind"] = string7473;
      var reader_parser_kind7474 = function() {
        return this.data["kind"];
      };
      reader_parser_kind7474.def = true;
      obj7471.methods["kind"] = reader_parser_kind7474;
      setLineNumber(25);    // compilenode num
      obj7471.data["line"] = new GraceNum(0);
      var reader_parser_line7475 = function() {
        return this.data["line"];
      };
      reader_parser_line7475.def = true;
      obj7471.methods["line"] = reader_parser_line7475;
      setLineNumber(26);    // compilenode num
      obj7471.data["linePos"] = new GraceNum(0);
      var reader_parser_linePos7476 = function() {
        return this.data["linePos"];
      };
      reader_parser_linePos7476.def = true;
      obj7471.methods["linePos"] = reader_parser_linePos7476;
      setLineNumber(27);    // compilenode num
      obj7471.data["indent"] = new GraceNum(0);
      var reader_parser_indent7477 = function() {
        return this.data["indent"];
      };
      reader_parser_indent7477.def = true;
      obj7471.methods["indent"] = reader_parser_indent7477;
      setLineNumber(28);    // compilenode string
      var string7478 = new GraceString("");
      obj7471.data["value"] = string7478;
      var reader_parser_value7479 = function() {
        return this.data["value"];
      };
      reader_parser_value7479.def = true;
      obj7471.methods["value"] = reader_parser_value7479;
      setLineNumber(29);    // compilenode num
      obj7471.data["size"] = new GraceNum(0);
      var reader_parser_size7480 = function() {
        return this.data["size"];
      };
      reader_parser_size7480.def = true;
      obj7471.methods["size"] = reader_parser_size7480;
      superDepth = origSuperDepth;
    };
    obj_init_7471.apply(obj7471, []);
    var var_sym = obj7471;
    setLineNumber(16);    // compilenode method
    var func7481 = function(argcv) {    // method sym
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for sym"));
      setModuleName("parser");
      // sym is a simple accessor - elide try ... catch
      setLineNumber(23);    // compilenode identifier
      return var_sym;
    };
    func7481.paramCounts = [0];
    this.methods["sym"] = func7481;
    func7481.definitionLine = 16;
    func7481.definitionModule = "parser";
    setLineNumber(16);    // compilenode method
    var func7482 = function(argcv) {    // method sym:=(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var___95__var__95__assign__95__tmp = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for sym:=(1)"));
      setModuleName("parser");
      var_sym = var___95__var__95__assign__95__tmp;
      return GraceDone;
    };
    func7482.paramCounts = [1];
    this.methods["sym:="] = func7482;
    func7482.definitionLine = 16;
    func7482.definitionModule = "parser";
    this.methods["sym"].debug = "var";
    setLineNumber(32);    // compilenode identifier
    var var_lastToken = var_sym;
    setLineNumber(16);    // compilenode method
    var func7483 = function(argcv) {    // method lastToken
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for lastToken"));
      setModuleName("parser");
      // lastToken is a simple accessor - elide try ... catch
      setLineNumber(32);    // compilenode identifier
      return var_lastToken;
    };
    func7483.paramCounts = [0];
    this.methods["lastToken"] = func7483;
    func7483.definitionLine = 16;
    func7483.definitionModule = "parser";
    setLineNumber(16);    // compilenode method
    var func7484 = function(argcv) {    // method lastToken:=(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var___95__var__95__assign__95__tmp = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for lastToken:=(1)"));
      setModuleName("parser");
      var_lastToken = var___95__var__95__assign__95__tmp;
      return GraceDone;
    };
    func7484.paramCounts = [1];
    this.methods["lastToken:="] = func7484;
    func7484.definitionLine = 16;
    func7484.definitionModule = "parser";
    this.methods["lastToken"].debug = "var";
    setLineNumber(33);    // compilenode identifier
    var var_previousCommentToken = var_lastToken;
    setLineNumber(16);    // compilenode method
    var func7485 = function(argcv) {    // method previousCommentToken
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for previousCommentToken"));
      setModuleName("parser");
      // previousCommentToken is a simple accessor - elide try ... catch
      setLineNumber(33);    // compilenode identifier
      return var_previousCommentToken;
    };
    func7485.paramCounts = [0];
    this.methods["previousCommentToken"] = func7485;
    func7485.definitionLine = 16;
    func7485.definitionModule = "parser";
    setLineNumber(16);    // compilenode method
    var func7486 = function(argcv) {    // method previousCommentToken:=(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var___95__var__95__assign__95__tmp = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for previousCommentToken:=(1)"));
      setModuleName("parser");
      var_previousCommentToken = var___95__var__95__assign__95__tmp;
      return GraceDone;
    };
    func7486.paramCounts = [1];
    this.methods["previousCommentToken:="] = func7486;
    func7486.definitionLine = 16;
    func7486.definitionModule = "parser";
    this.methods["previousCommentToken"].debug = "var";
    setLineNumber(34);    // compilenode identifier
    var var_statementToken = var_lastToken;
    setLineNumber(16);    // compilenode method
    var func7487 = function(argcv) {    // method statementToken
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for statementToken"));
      setModuleName("parser");
      // statementToken is a simple accessor - elide try ... catch
      setLineNumber(34);    // compilenode identifier
      return var_statementToken;
    };
    func7487.paramCounts = [0];
    this.methods["statementToken"] = func7487;
    func7487.definitionLine = 16;
    func7487.definitionModule = "parser";
    setLineNumber(16);    // compilenode method
    var func7488 = function(argcv) {    // method statementToken:=(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var___95__var__95__assign__95__tmp = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for statementToken:=(1)"));
      setModuleName("parser");
      var_statementToken = var___95__var__95__assign__95__tmp;
      return GraceDone;
    };
    func7488.paramCounts = [1];
    this.methods["statementToken:="] = func7488;
    func7488.definitionLine = 16;
    func7488.definitionModule = "parser";
    this.methods["statementToken"].debug = "var";
    setLineNumber(35);    // compilenode identifier
    var var_comment = GraceFalse;
    setLineNumber(16);    // compilenode method
    var func7489 = function(argcv) {    // method comment
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for comment"));
      setModuleName("parser");
      // comment is a simple accessor - elide try ... catch
      setLineNumber(35);    // compilenode identifier
      return var_comment;
    };
    func7489.paramCounts = [0];
    this.methods["comment"] = func7489;
    func7489.definitionLine = 16;
    func7489.definitionModule = "parser";
    setLineNumber(16);    // compilenode method
    var func7490 = function(argcv) {    // method comment:=(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var___95__var__95__assign__95__tmp = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for comment:=(1)"));
      setModuleName("parser");
      var_comment = var___95__var__95__assign__95__tmp;
      return GraceDone;
    };
    func7490.paramCounts = [1];
    this.methods["comment:="] = func7490;
    func7490.definitionLine = 16;
    func7490.definitionModule = "parser";
    this.methods["comment"].debug = "var";
    setLineNumber(41);    // compilenode identifier
    var var_firstCallOfNext = GraceTrue;
    setLineNumber(16);    // compilenode method
    var func7491 = function(argcv) {    // method firstCallOfNext
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for firstCallOfNext"));
      setModuleName("parser");
      // firstCallOfNext is a simple accessor - elide try ... catch
      setLineNumber(41);    // compilenode identifier
      return var_firstCallOfNext;
    };
    func7491.paramCounts = [0];
    this.methods["firstCallOfNext"] = func7491;
    func7491.definitionLine = 16;
    func7491.definitionModule = "parser";
    setLineNumber(16);    // compilenode method
    var func7492 = function(argcv) {    // method firstCallOfNext:=(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var___95__var__95__assign__95__tmp = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for firstCallOfNext:=(1)"));
      setModuleName("parser");
      var_firstCallOfNext = var___95__var__95__assign__95__tmp;
      return GraceDone;
    };
    func7492.paramCounts = [1];
    this.methods["firstCallOfNext:="] = func7492;
    func7492.definitionLine = 16;
    func7492.definitionModule = "parser";
    this.methods["firstCallOfNext"].debug = "var";
    return this;
  }
  gracecode_parser.imports = ['ast', 'errormessages', 'io', 'util'];
  if (typeof gctCache !== "undefined")
    gctCache['parser'] = "classes:\nconfidential:\nfresh-methods:\n methodsignature\nfresh:methodsignature:\n m\n rtype\n sig\n typeParams\nmodules:\n ast\n errormessages\n identifierKinds\n io\n stringMap\n sys\n unixFilePath\n util\npath:\n parser\npublic:\n accept\n accept()onLineOf\n accept()onLineOfLastOr\n acceptAfterSpaces\n acceptAfterSpaces()onLineOf\n acceptArgumentOnLineOf\n acceptKeyword\n acceptSameLine\n acceptWithoutSpaces\n blank\n block\n callmprest\n callrest\n checkAnnotation\n checkBadOperators\n checkBadTypeLiteral\n checkIndent\n checkUnexpectedTokenAfterStatement\n defdec\n didConsume\n doannotation\n doarray\n doclass\n dodialect\n dofactoryMethod\n doif\n doimport\n domethodtype\n doobject\n doreturn\n dotrest\n dotypeLiteral\n dotypeterm\n expression\n expressionrest()recursingWith()blocks\n findClosingBrace\n findNextToken\n findNextTokenIndentedAt\n findNextValidToken\n generic\n identifier\n ifConsume()then\n inheritsModifier()onLineOf\n inheritsOrUses\n matchcase\n methodDecRest\n methoddec\n methodsignature\n newIf\n next\n noteBlank\n oprec\n optionalTypeAnnotation\n parenthesizedArg\n parse\n parseAlias\n parseExclude\n parseObjectConstructorBody()startingWith()after\n postfixsquare\n prefixop\n pushComments\n pushidentifier\n pushnum\n pushstring\n reconcileComments\n statement\n term\n tokenOnSameLine\n toprec\n trycatch\n typeArg\n typeArgs\n typedec\n typeexpression\n typeexpressionrest\n typeparameters\n valueexpressionrest\n vardec\ntypes:\n";
  if (typeof originalSourceLines !== "undefined") {
    originalSourceLines["parser"] = [
      "#pragma ExtendedLineups",
      "import \"io\" as io",
      "import \"ast\" as ast",
      "import \"util\" as util",
      "import \"errormessages\" as errormessages",
      "",
      "var blankLocation := 0",
      "var lastLine := 0",
      "var lastIndent := 0",
      "var indentFreePass := false",
      "var minIndentLevel := 0",
      "var statementIndent := 0",
      "var tokens := false",
      "var values := [ ]",
      "var moduleObject",
      "var comments := emptyList   // so we can request `removeAt`",
      "var auto_count := 0",
      "def noBlocks = false",
      "def blocksOK = true",
      "var braceIsType := false",
      "",
      "// sym is a module-level field containing the current token",
      "var sym := object {",
      "    def kind is public = \"start\"",
      "    def line is public = 0",
      "    def linePos is public = 0",
      "    def indent is public = 0",
      "    def value is public = \"\"",
      "    def size is public = 0",
      "}",
      "",
      "var lastToken := sym",
      "var previousCommentToken := lastToken",
      "var statementToken := lastToken     // the token starting the current statement",
      "var comment := false",
      "",
      "method noteBlank {",
      "    blankLocation := sym.line - 1",
      "}",
      "",
      "var firstCallOfNext := true",
      "",
      "method next {",
      "    // Advance to the next token in the stream, assigning it to sym.",
      "    // Put the position in the input into util module variables.",
      "",
      "    if (tokens.size > 0) then {",
      "        lastToken := sym",
      "        lastLine := lastToken.line",
      "        lastIndent := lastToken.indent",
      "        sym := tokens.poll",
      "        if (sym.line > (lastLine + 1)) then { noteBlank }",
      "        pushComments",
      "        util.setPosition(sym.line, sym.linePos)",
      "    } else {",
      "        errormessages.syntaxError(\"unexpectedly found the end of the input. \" ",
      "            ++ \"This is often caused by a missing '\\}'\")",
      "            atRange(sym.line, sym.linePos, sym.linePos)",
      "    }",
      "}",
      "",
      "",
      "method findNextToken(tokenMatcher) {",
      "    // Search for the next token for which the given block returns true.",
      "    // Used for generating suggestions.",
      "",
      "    if (tokenMatcher.apply(sym)) then {",
      "        return sym",
      "    }",
      "    var nextTok := false",
      "    var n := sym",
      "    while {(false != n) && { false == nextTok } && { n.indent >= lastToken.indent }} do {",
      "        if(tokenMatcher.apply(n)) then {",
      "            nextTok := n",
      "        }",
      "        n := n.next",
      "    }",
      "    nextTok",
      "}",
      "",
      "method findNextTokenIndentedAt(tok) {",
      "    if(((sym.line > tok.line) && (sym.indent <= tok.indent)) || (sym.kind == \"eof\")) then {",
      "        return sym",
      "    }",
      "    var nextTok := false",
      "    var n := sym",
      "    while {(false != n) && { false == nextTok }} do {",
      "        if(((n.line > tok.line) && (n.indent <= tok.indent)) || (sym.kind == \"eof\")) then {",
      "            nextTok := n",
      "        }",
      "        n := n.next",
      "    }",
      "    nextTok",
      "}",
      "",
      "method findNextValidToken(validFollowTokens) {",
      "    // Tokens that cannot start an expression.",
      "    def invalidTokens = set [\"dot\", \"comma\", \"colon\", \"rparen\",",
      "            \"rbrace\", \"rsquare\", \"arrow\", \"bind\"];",
      "    var validToken := sym",
      "    while {validToken.kind != \"eof\"} do {",
      "        // If the token is a valid follow token, then return that token.",
      "        if(validFollowTokens.contains(validToken.kind)) then {",
      "            return validToken",
      "        }",
      "        // If the token is not an invalid token for starting an expression, return that token.",
      "        if(!invalidTokens.contains(validToken.kind)) then {",
      "            return validToken",
      "        }",
      "        // The token is invalid, go to the next one.",
      "        validToken := validToken.next",
      "    }",
      "    return validToken",
      "}",
      "",
      "// Finds the closing brace for token (that is the beginning of a control",
      "// structure) -- an opening brace. Returns an object with two fields: found",
      "// and tok. If a closing brace is found, found is set to true, and tok is set to",
      "// the closing brace. Otherwise found is set to false, and tok is set to the",
      "// token that the closing brace should appear after.",
      "method findClosingBrace(token, inserted) {",
      "    var n := sym",
      "    var numOpening := if(inserted) then {1} else {0}",
      "    var numClosing := 0",
      "    def result = object {",
      "        var found is public",
      "        var tok is public",
      "    }",
      "    // Skip all tokens on the same line first.",
      "    while {(n.kind != \"eof\") && (n.line == token.line)} do {",
      "        if(n.kind == \"lbrace\") then { numOpening := numOpening + 1 }",
      "        elseif { n.kind == \"rbrace\" } then { numClosing := numClosing + 1 }",
      "        n := n.next",
      "    }",
      "    // Skip all tokens that have greater indent than the target closing brace.",
      "    while {(n.kind != \"eof\") && (n.indent > token.indent)} do {",
      "        if (n.kind == \"lbrace\") then {",
      "            numOpening := numOpening + 1",
      "        } elseif { n.kind == \"rbrace\" } then {",
      "            numClosing := numClosing + 1 ",
      "        }",
      "        n := n.next",
      "    }",
      "    if (n.kind == \"rbrace\") then {",
      "        result.found := true",
      "        result.tok := n",
      "    } elseif {(n.prev.kind == \"rbrace\") && (numOpening == numClosing)} then {",
      "        // Check that the number of opening and closing braces matches.",
      "        result.found := true",
      "        result.tok := n.prev",
      "    } else {",
      "        result.found := false",
      "        result.tok := n.prev",
      "    }",
      "    result",
      "}",
      "",
      "",
      "method accept(t) {",
      "    // True if the current token has kind t, where",
      "    // t is \"num\", \"string\", \"method\", etc.",
      "    sym.kind == t",
      "}",
      "",
      "method acceptKeyword (kw) {",
      "    if (sym.kind != \"keyword\") then { return false }",
      "    return sym.value == kw",
      "}",
      "",
      "method acceptSameLine (t) {",
      "    // True if the current token is a t, and it is on the same logical",
      "    // line (either because it's on the same physical line, or because",
      "    // it's on an indented continuation line).",
      "",
      "    (sym.kind == t) && ",
      "        ((lastLine == sym.line) || (sym.indent > lastIndent))",
      "}",
      "method acceptWithoutSpaces (t) {",
      "    // True if the current token is a t, and follows the previous token",
      "    // without any intervening spaces or continuation lines.",
      "",
      "    (sym.kind == t) && ",
      "        (lastLine == sym.line) && (sym.linePos == (lastToken.linePos + lastToken.size))",
      "}",
      "method acceptAfterSpaces (t) {",
      "    // True if the current token is a t, and is separated from the previous token",
      "    // by one or more spaces, or a continuation line.",
      "",
      "    if (sym.kind != t) then { return false }",
      "    if (lastLine == sym.line) then {",
      "        return sym.linePos != (lastToken.linePos + lastToken.size)",
      "    }",
      "    return sym.linePos == (sym.indent + 1)",
      "}",
      "method accept (t) onLineOf (other) {",
      "    // True if the current token is a t, and it is on the same logical",
      "    // line as other (either because it's on the same physical",
      "    // line, or because it's on an indented continuation line).",
      "    (sym.kind == t) && ((other.line == sym.line) ||",
      "        (sym.indent > other.indent))",
      "}",
      "method acceptAfterSpaces (t) onLineOf (other) {",
      "    // True if the current token is a t, is on the same logical line as other,",
      "    // and is separated from the previous token by one or more spaces, ",
      "    // or a continuation line.",
      "",
      "    if (sym.kind != t) then { return false }",
      "    if (sym.line == other.line) then {",
      "        return sym.linePos != (lastToken.linePos + lastToken.size)",
      "    } else {",
      "        return sym.linePos == (sym.indent + 1)",
      "    }",
      "}",
      "method accept (t) onLineOfLastOr (other) {",
      "    // True if the current token is a t, and it is on the same logical",
      "    // line as the last token, or the other token.",
      "    (sym.kind == t) && (((other.line == sym.line) ||",
      "        (sym.indent > other.indent)) || (lastToken.line == sym.line))",
      "}",
      "method acceptArgumentOnLineOf(tok) {",
      "    // True if the current token can start an argument to a request",
      "    if (accept \"string\" onLineOf(tok)) then { return true }",
      "    if (accept \"num\" onLineOf(tok)) then { return true }",
      "    if (accept \"lbrace\" onLineOf(tok)) then { return true }",
      "    if (acceptAfterSpaces \"lsquare\" onLineOf(tok)) then { return true }",
      "    if (accept \"identifier\" onLineOf(tok)) then { ",
      "        return (sym.value == \"true\") || (sym.value == \"false\")",
      "    }",
      "    return false",
      "}",
      "method tokenOnSameLine {",
      "    // True if there is a token on the current logical line",
      "    (lastLine == sym.line) || (sym.indent > lastIndent)",
      "}",
      "method didConsume(aParsingBlock) {",
      "    // True if executing aParsingBlock consumes at least one token.",
      "    var sz := tokens.size",
      "    aParsingBlock.apply",
      "    tokens.size != sz",
      "}",
      "method ifConsume(ablock)then(tblock) {",
      "    // If ablock consumes at least one token, execute tblock.",
      "    var sz := tokens.size",
      "    ablock.apply",
      "    if (tokens.size != sz) then {",
      "        tblock.apply",
      "    }",
      "}",
      "",
      "// Push the current token onto the output stack as a number",
      "method pushnum {",
      "    var o := ast.numNode.new(sym.value)",
      "    values.push(o)",
      "    next",
      "}",
      "",
      "// Push the current token onto the output stack as a string",
      "method pushstring {",
      "    var o := ast.stringNode.new(sym.value)",
      "    values.push(o)",
      "    next",
      "}",
      "",
      "// Push the current token onto the output stack as an identifier.",
      "// false means that this identifier has not been assigned a dtype (yet).",
      "method pushidentifier {",
      "    util.setPosition(sym.line, sym.linePos)",
      "    var o := ast.identifierNode.new(sym.value, false)",
      "    if (o.value == \"_\") then {",
      "        o.value := \"__\" ++ auto_count",
      "        o.wildcard := true",
      "        auto_count := auto_count + 1",
      "    }",
      "    values.push(o)",
      "    next",
      "}",
      "",
      "method checkAnnotation(ann) {",
      "    if (ann.kind == \"call\") then {",
      "        for (ann.with) do {p->",
      "            for (p.args) do {a->",
      "                if ((a.kind == \"identifier\") && {false != a.dtype}) then {",
      "                    var tok := sym",
      "                    // Look back from the current token to try and find the tokens that cause this error.",
      "                    while {tok.value != \":\"} do { tok := tok.prev }",
      "                    def suggestion = errormessages.suggestion.new",
      "                    suggestion.deleteTokenRange(tok, tok.next)leading(true)trailing(false)",
      "                    errormessages.syntaxError(\"an argument to an annotation cannot have a type.\")atRange(",
      "                        tok.line, tok.linePos, tok.next.linePos + tok.next.size - 1)withSuggestion(suggestion)",
      "                }",
      "            }",
      "        }",
      "    }",
      "    ann",
      "}",
      "method doannotation {",
      "    if (acceptKeyword \"is\" .not) then {",
      "        return false",
      "    }",
      "    next",
      "    def anns = [ ]",
      "    if(didConsume({expression(noBlocks)}).not) then {",
      "        def suggestions = [ ]",
      "        var suggestion := errormessages.suggestion.new",
      "        def nextTok = findNextValidToken( [\"bind\"] )",
      "        if(nextTok == sym) then {",
      "            suggestion.insert(\" «annotation»\")afterToken(lastToken)",
      "        } else {",
      "            suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\" «annotation»\")",
      "        }",
      "        suggestions.push(suggestion)",
      "        suggestion := errormessages.suggestion.new",
      "        suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)",
      "        suggestions.push(suggestion)",
      "        errormessages.syntaxError(\"one or more annotations separated by commas must follow 'is'.\")",
      "            atRange(lastToken.line, lastToken.linePos + lastToken.size + 1)",
      "            withSuggestions(suggestions)",
      "    }",
      "    while {accept(\"comma\")} do {",
      "        anns.push(checkAnnotation(values.pop))",
      "        next",
      "        if(didConsume({expression(noBlocks)}).not) then {",
      "            def suggestions = [ ]",
      "            var suggestion := errormessages.suggestion.new",
      "            def nextTok = findNextValidToken( [\"bind\"] )",
      "            if(nextTok == sym) then {",
      "                suggestion.insert(\" «annotation»\")afterToken(lastToken)",
      "            } else {",
      "                suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\" «annotation»\")",
      "            }",
      "            suggestions.push(suggestion)",
      "            suggestion := errormessages.suggestion.new",
      "            suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)",
      "            suggestions.push(suggestion)",
      "            errormessages.syntaxError(\"one or more annotations separated by commas must follow 'is'.\")",
      "                atRange(lastToken.line, lastToken.linePos + lastToken.size + 1)",
      "                withSuggestions(suggestions)",
      "        }",
      "    }",
      "    anns.push(checkAnnotation(values.pop))",
      "    anns",
      "}",
      "",
      "method blank {",
      "    if (blankLocation == 0) then {",
      "        if ( sym.line <= (lastToken.line + 1) ) then { return }",
      "        if ( sym.line <= (previousCommentToken.line + 1) ) then { return }",
      "    }",
      "    pushComments",
      "    if ((values.size == 0) || ",
      "            ((values.size > 0) && { values.last.kind != \"blank\" })) then {",
      "        if (blankLocation > 0) then {",
      "            util.setPosition(blankLocation, 0)",
      "            blankLocation := 0",
      "        } else {",
      "            util.setPosition(sym.line - 1, 0)",
      "        }",
      "        values.push(ast.blankNode.new)",
      "    }",
      "}",
      "",
      "method dotypeterm {",
      "    if (accept \"identifier\") then {",
      "        pushidentifier",
      "        generic",
      "        dotrest(noBlocks)",
      "    } else {",
      "        if (acceptKeyword \"type\") then {",
      "            dotypeLiteral",
      "        }",
      "    }",
      "}",
      "",
      "method typeexpression {",
      "    var sz := values.size",
      "    if (accept \"lparen\") then {",
      "        def prevStatementToken = statementToken",
      "        statementToken := sym",
      "        next",
      "        if(didConsume({typeexpression}).not) then {",
      "            def suggestion = errormessages.suggestion.new",
      "            def nextTok = findNextValidToken( [\"rparen\"] )",
      "            if (nextTok == sym) then {",
      "                suggestion.insert(\"«type expression»\")afterToken(lastToken)",
      "            } else {",
      "                suggestion.replaceTokenRange(sym, nextTok.prev) leading (true)",
      "                    trailing(false) with \"«type expression»\"",
      "            }",
      "            errormessages.syntaxError \"parentheses must contain a valid type expression.\"",
      "                atPosition(sym.line, sym.linePos) withSuggestion(suggestion)",
      "        }",
      "        if(sym.kind != \"rparen\") then {",
      "            checkBadOperators",
      "            def suggestion = errormessages.suggestion.new",
      "            suggestion.insert(\")\")afterToken(lastToken)",
      "            errormessages.syntaxError \"a type expression beginning with a '(' must end with a ')'.\"",
      "                atRange(lastToken.line, lastToken.linePos + lastToken.size)",
      "                withSuggestion(suggestion)",
      "        }",
      "        statementToken := prevStatementToken",
      "        next",
      "    } else {",
      "        dotypeterm",
      "    }",
      "    if (values.size > sz) then {",
      "        dotrest(noBlocks)",
      "        typeexpressionrest",
      "    }",
      "    // TODO: check that the expression doesn't contain requests or var references.",
      "    // This has to happen in the identifier resolution phase.",
      "}",
      "",
      "method newIf(cond, thenList, elseList) {",
      "    def thenBlock = ast.blockNode.new(emptySequence, thenList)",
      "    def elseBlock = ast.blockNode.new(emptySequence, elseList)",
      "    ast.ifNode.new(cond, thenBlock, elseBlock)",
      "}",
      "",
      "method block {",
      "    // parse a block",
      "    if (accept \"lbrace\") then {",
      "        def btok = sym",
      "        next",
      "        var minInd := statementIndent + 2",
      "        var startIndent := statementIndent",
      "        var expr1",
      "        var s := sym",
      "        var tmp",
      "        var params := [ ]",
      "        var body := [ ]",
      "        var havearrow := true",
      "        var found := false",
      "        var i := 0",
      "        var isMatchingBlock := false",
      "        statementToken := sym",
      "        if (sym.kind == \"lparen\") then {",
      "            isMatchingBlock := true",
      "        }",
      "        // Parsing the expression ‹(a)› will return an identifierNode‹a› .",
      "        // The paren lets us distinguish parameter ‹a› from pattern ‹(a)› .",
      "        ifConsume {expression(blocksOK)} then {",
      "            if (accept(\"comma\") || accept(\"arrow\") || accept(\"colon\")) then {",
      "                // This block has parameters or patterns",
      "                expr1 := values.pop",
      "                if (accept \"colon\") then {",
      "                    // We allow an expression here for the case of v : T",
      "                    // patterns, where T may be \"Pair(hd, tl)\" or similar.",
      "                    next",
      "                    braceIsType := true",
      "                    if(didConsume({expression(blocksOK)}).not) then {",
      "                        def suggestions = [ ]",
      "                        var suggestion := errormessages.suggestion.new",
      "                        def nextTok = findNextValidToken( [\"arrow\", \"rbrace\"] )",
      "                        if(nextTok == sym) then {",
      "                            suggestion.insert(\" «expression»\")afterToken(lastToken)",
      "                        } else {",
      "                            suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\" «expression»\")",
      "                        }",
      "                        suggestions.push(suggestion)",
      "                        suggestion := errormessages.suggestion.new",
      "                        suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)",
      "                        suggestions.push(suggestion)",
      "                        errormessages.syntaxError(\"a block must have an expression after the ':'.\")",
      "                            atPosition(sym.line, sym.linePos)",
      "                            withSuggestions(suggestions)",
      "                    }",
      "                    braceIsType := false",
      "                    expr1.dtype := values.pop",
      "                }",
      "                params.push(expr1)",
      "                if (isMatchingBlock.not && expr1.isIdentifier) then {",
      "                    expr1.isBindingOccurrence := true",
      "                } else {",
      "                    isMatchingBlock := true",
      "                }",
      "                if (isMatchingBlock && {accept(\"comma\")}) then {",
      "                    def suggestions = [ ]",
      "                    var suggestion",
      "                    def arrow = findNextToken({ t -> t.kind == \"arrow\" })",
      "                    if(false != arrow) then {",
      "                        suggestion := errormessages.suggestion.new",
      "                        suggestion.deleteTokenRange(sym, arrow.prev)",
      "                        suggestions.push(suggestion)",
      "                    }",
      "                    suggestion := errormessages.suggestion.new",
      "                    suggestion.replaceToken(sym)leading(true)trailing(false)with(\" |\")",
      "                    suggestions.push(suggestion)",
      "                    errormessages.syntaxError(\"a matching block may only have one parameter.\")atRange(",
      "                        sym.line, sym.linePos, sym.linePos)withSuggestions(suggestions)",
      "                }",
      "                while {accept(\"comma\")} do {",
      "                    // Keep doing the above for the rest of the parameters.",
      "                    next",
      "                    pushidentifier",
      "                    expr1 := values.pop",
      "                    expr1.isBindingOccurrence := true",
      "                    expr1.dtype := optionalTypeAnnotation",
      "                    params.push(expr1)",
      "                }",
      "                if ((accept(\"arrow\")).not) then {",
      "                    def suggestion = errormessages.suggestion.new",
      "                    if((sym.kind == \"bind\") || (sym.value == \"=\")) then {",
      "                        suggestion.replaceToken(sym)with(\"->\")",
      "                    } else {",
      "                        suggestion.insert(\" ->\")afterToken(lastToken)",
      "                    }",
      "                    errormessages.syntaxError(\"a block must have one or more parameters followed by '->' and an expression.\")",
      "                        atPosition(sym.line, sym.linePos) withSuggestion(suggestion)",
      "                }",
      "                next",
      "            } elseif { accept \"semicolon\" } then {",
      "                body.push(values.pop)",
      "                next",
      "                if (accept \"semicolon\") then {",
      "                    next",
      "                    if (sym.line == lastToken.line) then {",
      "                        indentFreePass := true",
      "                    }",
      "                }",
      "            } elseif { ((values.last.kind == \"member\")",
      "                        || (values.last.kind == \"identifier\")",
      "                        || (values.last.kind == \"index\"))",
      "                        && accept(\"bind\") } then {",
      "                var lhs := values.pop",
      "                next",
      "                if(didConsume({expression(blocksOK)}).not) then {",
      "                    def suggestions = [ ]",
      "                    var suggestion := errormessages.suggestion.new",
      "                    def nextTok = findNextValidToken( [\"rbrace\"] )",
      "                    if(nextTok == sym) then {",
      "                        suggestion.insert(\" «expression»\")afterToken(lastToken)",
      "                    } else {",
      "                        suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\" «expression»\")",
      "                    }",
      "                    suggestions.push(suggestion)",
      "                    suggestion := errormessages.suggestion.new",
      "                    suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)",
      "                    suggestions.push(suggestion)",
      "                    errormessages.syntaxError(\"a valid expression must follow ':='.\")",
      "                        atPosition(sym.line, sym.linePos) withSuggestions(suggestions)",
      "                }",
      "                var rhs := values.pop",
      "                util.setPosition(btok.line, btok.linePos)",
      "                body.push(ast.bindNode.new(lhs, rhs))",
      "                if (accept \"semicolon\") then {",
      "                    next",
      "                    if (sym.line == lastToken.line) then {",
      "                        indentFreePass := true",
      "                    }",
      "                }",
      "            } else {",
      "                checkUnexpectedTokenAfterStatement",
      "                body.push(values.pop)",
      "            }",
      "        }",
      "        if (accept \"arrow\") then {",
      "            next",
      "        }",
      "        if (sym.line == lastToken.line) then {",
      "            minIndentLevel := sym.linePos - 1",
      "        } else {",
      "            minIndentLevel := minInd",
      "        }",
      "        while {(accept(\"rbrace\")).not} do {",
      "            // Take the body of the block",
      "            if(didConsume({statement}).not) then {",
      "                def suggestion = errormessages.suggestion.new",
      "                suggestion.insert(\"}\")afterToken(lastToken)",
      "                errormessages.syntaxError(\"a block must end with a '}'.\")",
      "                    atPosition(sym.line, sym.linePos) withSuggestion(suggestion)",
      "            }",
      "            tmp := values.pop",
      "            body.push(tmp)",
      "        }",
      "        minIndentLevel := minInd - 2",
      "        statementIndent := startIndent",
      "        next",
      "        util.setPosition(btok.line, btok.linePos)",
      "        var o := ast.blockNode.new(params, body)",
      "        if (isMatchingBlock) then {",
      "            if (params.size > 0) then {",
      "                o.matchingPattern := params.first",
      "            }",
      "        }",
      "        values.push(o)",
      "    }",
      "}",
      "",
      "// Accept an \"if\" statement. This is a special syntactic case, rather",
      "// than just a call with a multi-part method name - it might be possible",
      "// to change that and compensate later on.",
      "method doif {",
      "    if (accept(\"identifier\") && (sym.value == \"if\")) then {",
      "        def btok = sym",
      "        next",
      "        def opener = if ((sym.kind == \"lparen\") || {sym.kind == \"lbrace\"})",
      "                        then { sym.value } else { \"-missing-\" }",
      "        def closer = if (opener == \"(\") then { \")\" }",
      "                        else { if (opener == \"\\{\") then { \"\\}\" } else { \"-nothing-\" } }",
      "        if (opener == \"-missing-\") then {",
      "            def suggestion = errormessages.suggestion.new",
      "            // Look ahead for a rparen or then.",
      "            def nextTok = findNextToken({ t -> (t.line == btok.line)",
      "                && ((t.kind == \"rparen\") || (t.kind == \"rbrace\") || (t.kind == \"lbrace\")",
      "                || ((t.kind == \"identifier\") && (t.value == \"then\"))) })",
      "            if (false == nextTok) then {",
      "                suggestion.insert(\" («condition») then \\{\")afterToken(btok)",
      "            } elseif { nextTok.kind == \"rparen\" } then {",
      "                if(nextTok == sym) then {",
      "                    suggestion.insert(\"(«condition»\")beforeToken(sym)",
      "                } else {",
      "                    suggestion.insert(\"(\")beforeToken(sym)",
      "                }",
      "            } elseif { nextTok.kind == \"lbrace\" } then {",
      "                if(nextTok == sym) then {",
      "                    suggestion.insert(\" («condition») then\")afterToken(btok)",
      "                } else {",
      "                    suggestion.insert(\"(\")beforeToken(sym)",
      "                    suggestion.insert(\") then\")afterToken(nextTok.prev)andTrailingSpace(true)",
      "                }",
      "            } elseif { nextTok.kind == \"identifier\" } then {",
      "                if(nextTok == sym) then {",
      "                    suggestion.insert(\"(«condition») \")beforeToken(sym)",
      "                } else {",
      "                    suggestion.insert(\"(\")beforeToken(sym)",
      "                    suggestion.insert(\")\")afterToken(nextTok.prev)andTrailingSpace(true)",
      "                }",
      "            }",
      "            errormessages.syntaxError(\"an if statement must have a condition \" ++",
      "                \"in parentheses or braces after the 'if'.\")",
      "                atPosition(sym.line, sym.linePos) withSuggestion(suggestion)",
      "        }",
      "        next",
      "        if (didConsume({expression(blocksOK)}).not) then {",
      "            def suggestion = errormessages.suggestion.new",
      "            // Look ahead for a rparen.",
      "            var nextTok := findNextToken({ t -> (t.line == lastToken.line) && (t.kind == \"rparen\") })",
      "            if (false == nextTok) then {",
      "                nextTok := findNextValidToken( [\"rparen\"] )",
      "                if(nextTok == sym) then {",
      "                    suggestion.insert(\"«expression») then \\{\")afterToken(lastToken)",
      "                } else {",
      "                    suggestion.replaceTokenRange(sym, nextTok.prev)",
      "                          leading(true)trailing(false)with(\"«expression») then \\{\")",
      "                }",
      "                errormessages.syntaxError(\"an if statement must have a \" ++",
      "                      \"condition in parentheses or braces after the 'if'.\")",
      "                      atPosition(sym.line, sym.linePos)",
      "                      withSuggestion(suggestion)",
      "            } else {",
      "                if(nextTok == sym) then {",
      "                    suggestion.insert(\"«expression»\")afterToken(lastToken)",
      "                    errormessages.syntaxError(\"an if statement must have a \" ++",
      "                        \"condition in parentheses or braces after the 'if'.\")",
      "                        atPosition(sym.line, sym.linePos)",
      "                        withSuggestion(suggestion)",
      "                } else {",
      "                    suggestion.replaceTokenRange(sym, nextTok.prev)",
      "                        leading(false)trailing(true)with(\"«expression»\")",
      "                    errormessages.syntaxError(\"an if statement must have a \" ++",
      "                        \"condition in parentheses or braces after the 'if'.\")",
      "                        atRange(sym.line, sym.linePos, nextTok.linePos - 1)",
      "                        withSuggestion(suggestion)",
      "                }",
      "            }",
      "        }",
      "        if (sym.value != closer) then {",
      "            checkBadOperators",
      "            def suggestion = errormessages.suggestion.new",
      "            suggestion.insert(\")\")afterToken(lastToken)",
      "            errormessages.syntaxError(\"an expression beginning with a \"++",
      "                  \"'{opener}' must end with a '{closer}'.\")",
      "                  atPosition(lastToken.line, lastToken.linePos + lastToken.size)",
      "                  withSuggestion(suggestion)",
      "        }",
      "        next",
      "        var cond := values.pop",
      "        var body := []",
      "",
      "        // These two are for else/elseif handling. elseif is turned into",
      "        // nested if statements for the AST, so curelse points to the",
      "        // most deeply-nested of those (where any eventual \"else\" block's",
      "        // statements will go). elseblock contains the statements of the",
      "        // top-level \"else\" block - if there are any elseifs, that",
      "        // consists of only one statement, another if.",
      "        var elseblock := []",
      "        var curelse := elseblock",
      "        var v",
      "        def localMin = minIndentLevel",
      "        def localStatementIndent = statementIndent",
      "        var minInd := statementIndent + 2",
      "        if (accept(\"identifier\") && (sym.value == \"then\")) then {",
      "            next",
      "            if(sym.kind != \"lbrace\") then {",
      "                def suggestion = errormessages.suggestion.new",
      "                def closingBrace = findClosingBrace(btok, true)",
      "                if (closingBrace.found.not) then {",
      "                    if(closingBrace.tok == lastToken) then {",
      "                        suggestion.replaceToken(lastToken)leading(false)trailing(true)with(\"then \\{}\")",
      "                    } else {",
      "                        suggestion.addLine(closingBrace.tok.line + 0.1, \"}\")",
      "                        suggestion.replaceToken(lastToken)leading(false)trailing(true)with(\"then \\{\")",
      "                    }",
      "                } else {",
      "                    suggestion.replaceToken(lastToken)leading(false)trailing(true)with(\"then \\{\")",
      "                }",
      "                errormessages.syntaxError(\"an if statement must have a '\\{' after the 'then'.\")atPosition(",
      "                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)",
      "            }",
      "            next",
      "            if (sym.line == lastToken.line) then {",
      "                minIndentLevel := sym.linePos - 1",
      "            } else {",
      "                minIndentLevel := minInd",
      "            }",
      "            while {(accept(\"rbrace\")).not} do {",
      "                if(didConsume({statement}).not) then {",
      "                    def suggestion = errormessages.suggestion.new",
      "                    def closingBrace = findClosingBrace(btok, false)",
      "                    if (closingBrace.found.not) then {",
      "                        if(closingBrace.tok == lastToken) then {",
      "                            suggestion.insert(\"}\")afterToken(lastToken)",
      "                        } else {",
      "                            suggestion.addLine(closingBrace.tok.line + 0.1, \"}\")",
      "                        }",
      "                    }",
      "                    suggestion.deleteToken(sym)",
      "                    errormessages.syntaxError(\"an if statement must end with a '}'.\")atPosition(",
      "                        sym.line, sym.linePos)withSuggestion(suggestion)",
      "                }",
      "                v := values.pop",
      "                body.push(v)",
      "            }",
      "            next",
      "            var econd",
      "            var eif",
      "            var newelse",
      "            var ebody",
      "            while {accept(\"identifier\") && (sym.value == \"elseif\")} do {",
      "                // Currently, the parser just accepts arbitrarily many",
      "                // \"elseifs\", turning them into ifs inside the else.",
      "                // TODO: allow blocks after elseif to contain a sequence of expressions.",
      "                statementToken := sym",
      "                next",
      "                def elopener = if ((sym.kind == \"lparen\") || {sym.kind == \"lbrace\"})",
      "                                then { sym.value } else { \"-missing-\" }",
      "                def elcloser = if (elopener == \"(\") then { \")\" }",
      "                                else { if (elopener == \"\\{\") then { \"\\}\" } else { \"-nothing-\" } }",
      "                if (elopener == \"-missing-\") then {",
      "                    def suggestion = errormessages.suggestion.new",
      "                    // Look ahead for a rparen or then.",
      "                    def nextTok = findNextToken({ t -> (t.line == statementToken.line)",
      "                        && ((t.kind == \"rparen\") || (t.kind == \"rbrace\") || (t.kind == \"lbrace\")",
      "                        || ((t.kind == \"identifier\") && (t.value == \"then\"))) })",
      "                    if(false == nextTok) then {",
      "                        suggestion.insert(\" («expression») then \\{\")afterToken(statementToken)",
      "                    } elseif { nextTok.kind == \"rparen\" } then {",
      "                        if(nextTok == sym) then {",
      "                            suggestion.insert(\"(«expression»\")beforeToken(sym)",
      "                        } else {",
      "                            suggestion.insert(\"(\")beforeToken(sym)",
      "                        }",
      "                    } elseif { nextTok.kind == \"lbrace\" } then {",
      "                        if(nextTok == sym) then {",
      "                            suggestion.insert(\" («expression») then\")afterToken(statementToken)",
      "                        } else {",
      "                            suggestion.insert(\"(\")beforeToken(sym)",
      "                            suggestion.insert(\") then\")afterToken(nextTok.prev)andTrailingSpace(true)",
      "                        }",
      "                    } elseif { nextTok.kind == \"identifier\" } then {",
      "                        if(nextTok == sym) then {",
      "                            suggestion.insert(\"(«expression») \")beforeToken(sym)",
      "                        } else {",
      "                            suggestion.insert(\"(\")beforeToken(sym)",
      "                            suggestion.insert(\")\")afterToken(nextTok.prev)andTrailingSpace(true)",
      "                        }",
      "                    }",
      "                    errormessages.syntaxError(\"an elseif statement must have a \" ++",
      "                          \"condition in parentheses or braces after the 'elseif'.\")",
      "                          atPosition(sym.line, sym.linePos)",
      "                          withSuggestion(suggestion)",
      "                }",
      "                next",
      "                if(didConsume({expression(blocksOK)}).not) then {",
      "                    def suggestion = errormessages.suggestion.new",
      "                    // Look ahead for a rparen or then.",
      "                    var nextTok := findNextToken({ t -> (t.line == lastToken.line) && ",
      "                        ((t.kind == \"rparen\") || (t.kind == \"rbrace\"))})",
      "                    if(false == nextTok) then {",
      "                        nextTok := findNextValidToken( [\"rparen\"] )",
      "                        if(nextTok == sym) then {",
      "                            suggestion.insert(\"«expression») then \\{\")afterToken(lastToken)",
      "                        } else {",
      "                            suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\"«expression») then \\{\")",
      "                        }",
      "                        errormessages.syntaxError(\"an elseif statement must have an expression in parentheses or braces after the 'elseif'.\")atPosition(",
      "                            sym.line, sym.linePos)withSuggestion(suggestion)",
      "                    } else {",
      "                        if(nextTok == sym) then {",
      "                            suggestion.insert(\"«expression»\")afterToken(lastToken)",
      "                            errormessages.syntaxError(\"an elseif statement must have an expression in parentheses or braces after the 'elseif'.\")atPosition(",
      "                                sym.line, sym.linePos)withSuggestion(suggestion)",
      "                        } else {",
      "                            //checkInvalidExpression",
      "                            suggestion.replaceTokenRange(sym, nextTok.prev)leading(false)trailing(true)with(\"«expression»\")",
      "                            errormessages.syntaxError(\"4: An elseif statement must have an expression in parentheses or braces after the 'elseif'.\")atRange(",
      "                                sym.line, sym.linePos, nextTok.linePos - 1)withSuggestion(suggestion)",
      "                        }",
      "                    }",
      "                }",
      "                if(sym.value != elcloser) then {",
      "                    checkBadOperators",
      "                    def suggestion = errormessages.suggestion.new",
      "                    suggestion.insert(\")\")afterToken(lastToken)",
      "                    errormessages.syntaxError(\"an expression beginning with a \" ++",
      "                        \"'{elopener}' must end with a '{elcloser}'.\")",
      "                        atPosition(lastToken.line, lastToken.linePos + lastToken.size)",
      "                        withSuggestion(suggestion)",
      "                }",
      "                next",
      "                econd := values.pop",
      "                if ((accept(\"identifier\") &&",
      "                    (sym.value == \"then\"))) then {",
      "                    next",
      "                    ebody := []",
      "                } else {",
      "                    def suggestion = errormessages.suggestion.new",
      "                    if(sym.kind == \"lbrace\") then {",
      "                        def closingBrace = findClosingBrace(statementToken, false)",
      "                        if(closingBrace.found.not) then {",
      "                            if(closingBrace.tok == sym) then {",
      "                                suggestion.replaceToken(sym)leading(true)trailing(false)with(\" then \\{}\")",
      "                            } else {",
      "                                suggestion.replaceToken(sym)leading(true)trailing(false)with(\" then \\{\")",
      "                                suggestion.addLine(closingBrace.tok.line + 0.1, \"}\")",
      "                            }",
      "                        } else {",
      "                            suggestion.replaceToken(sym)leading(true)trailing(false)with(\" then \\{\")",
      "                        }",
      "                    } else {",
      "                        def closingBrace = findClosingBrace(statementToken, true)",
      "                        if(closingBrace.found.not) then {",
      "                            if(closingBrace.tok == lastToken) then {",
      "                                suggestion.insert(\" then \\{}\")afterToken(lastToken)",
      "                            } else {",
      "                                suggestion.insert(\" then \\{\")afterToken(lastToken)",
      "                                suggestion.addLine(closingBrace.tok.line + 0.1, \"}\")",
      "                            }",
      "                        } else {",
      "                            suggestion.insert(\" then \\{\")afterToken(lastToken)",
      "                        }",
      "                    }",
      "                    errormessages.syntaxError(\"an elseif statement must have 'then' after the expression in parentheses.\")atPosition(",
      "                        sym.line, sym.linePos)withSuggestion(suggestion)",
      "                }",
      "                if(sym.kind != \"lbrace\") then {",
      "                    def suggestion = errormessages.suggestion.new",
      "                    def closingBrace = findClosingBrace(btok, true)",
      "                    if(closingBrace.found.not) then {",
      "                        if(closingBrace.tok == lastToken) then {",
      "                            suggestion.replaceToken(lastToken)leading(false)trailing(true)with(\"then \\{}\")",
      "                        } else {",
      "                            suggestion.addLine(closingBrace.tok.line + 0.1, \"}\")",
      "                            suggestion.replaceToken(lastToken)leading(false)trailing(true)with(\"then \\{\")",
      "                        }",
      "                    } else {",
      "                        suggestion.replaceToken(lastToken)leading(false)trailing(true)with(\"then \\{\")",
      "                    }",
      "                    errormessages.syntaxError(\"an elseif statement must have a '\\{' after the 'then'.\")atPosition(",
      "                        lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)",
      "                }",
      "                next",
      "                if (sym.line == lastToken.line) then {",
      "                    minIndentLevel := sym.linePos - 1",
      "                } else {",
      "                    minIndentLevel := minInd",
      "                }",
      "                while {(accept(\"rbrace\")).not} do {",
      "                    if(didConsume({statement}).not) then {",
      "                        def suggestion = errormessages.suggestion.new",
      "                        def closingBrace = findClosingBrace(btok, false)",
      "                        if(closingBrace.found.not) then {",
      "                            if(closingBrace.tok == lastToken) then {",
      "                                suggestion.insert(\"}\")afterToken(lastToken)",
      "                            } else {",
      "                                suggestion.addLine(closingBrace.tok.line + 0.1, \"}\")",
      "                            }",
      "                        }",
      "                        suggestion.deleteToken(sym)",
      "                        errormessages.syntaxError(\"an elseif statement must end with a '}'.\")atPosition(",
      "                            sym.line, sym.linePos)withSuggestion(suggestion)",
      "                    }",
      "                    v := values.pop",
      "                    ebody.push(v)",
      "                }",
      "                next",
      "                newelse := []",
      "                eif := newIf(econd, ebody, newelse)",
      "                // Construct the inner \"if\" AST node, and then push it",
      "                // inside the current \"else\" block.",
      "                curelse.push(eif)",
      "                // Update curelse to point to the new, empty, nested",
      "                // else block.",
      "                curelse := newelse",
      "            }",
      "            if (accept(\"identifier\") && (sym.value == \"else\")) then {",
      "                next",
      "                if(sym.kind != \"lbrace\") then {",
      "                    def suggestion = errormessages.suggestion.new",
      "                    def closingBrace = findClosingBrace(btok, true)",
      "                    if(closingBrace.found.not) then {",
      "                        if(closingBrace.tok == lastToken) then {",
      "                            suggestion.replaceToken(lastToken)leading(false)trailing(true)with(\"else \\{}\")",
      "                        } else {",
      "                            suggestion.addLine(closingBrace.tok.line + 0.1, \"}\")",
      "                            suggestion.replaceToken(lastToken)leading(false)trailing(true)with(\"else \\{\")",
      "                        }",
      "                    } else {",
      "                        suggestion.replaceToken(lastToken)leading(false)trailing(true)with(\"else \\{\")",
      "                    }",
      "                    errormessages.syntaxError(\"an else statement must have a '\\{' after the 'else'.\")atPosition(",
      "                        lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)",
      "                }",
      "                next",
      "                // Just take all the statements and put them into",
      "                // curelse.",
      "                if (sym.line == lastToken.line) then {",
      "                    minIndentLevel := sym.linePos - 1",
      "                } else {",
      "                    minIndentLevel := minInd",
      "                }",
      "                while {(accept(\"rbrace\")).not} do {",
      "                    if(didConsume({statement}).not) then {",
      "                        def suggestion = errormessages.suggestion.new",
      "                        def closingBrace = findClosingBrace(btok, false)",
      "                        if(closingBrace.found.not) then {",
      "                            if(closingBrace.tok == lastToken) then {",
      "                                suggestion.insert(\"}\")afterToken(lastToken)",
      "                            } else {",
      "                                suggestion.addLine(closingBrace.tok.line + 0.1, \"}\")",
      "                            }",
      "                        }",
      "                        suggestion.deleteToken(sym)",
      "                        errormessages.syntaxError(\"an else statement must end with a '}'.\")atPosition(",
      "                            sym.line, sym.linePos)withSuggestion(suggestion)",
      "                    }",
      "                    v := values.pop",
      "                    curelse.push(v)",
      "                }",
      "                next",
      "            }",
      "            util.setPosition(btok.line, btok.linePos)",
      "            var o := newIf(cond, body, elseblock)",
      "            values.push(o)",
      "        } else {",
      "            // Raise an error here, or it will spin nastily forever.",
      "            def suggestion = errormessages.suggestion.new",
      "            if(sym.kind == \"lbrace\") then {",
      "                def closingBrace = findClosingBrace(btok, false)",
      "                if(closingBrace.found.not) then {",
      "                    if(closingBrace.tok == sym) then {",
      "                        suggestion.replaceToken(sym)leading(true)trailing(false)with(\" then \\{}\")",
      "                    } else {",
      "                        suggestion.replaceToken(sym)leading(true)trailing(false)with(\" then \\{\")",
      "                        suggestion.addLine(closingBrace.tok.line + 0.1, \"}\")",
      "                    }",
      "                } else {",
      "                    suggestion.replaceToken(sym)leading(true)trailing(false)with(\" then \\{\")",
      "                }",
      "            } else {",
      "                def closingBrace = findClosingBrace(btok, true)",
      "                if(closingBrace.found.not) then {",
      "                    if(closingBrace.tok == lastToken) then {",
      "                        suggestion.insert(\" then \\{}\")afterToken(lastToken)",
      "                    } else {",
      "                        suggestion.insert(\" then \\{\")afterToken(lastToken)",
      "                        suggestion.addLine(closingBrace.tok.line + 0.1, \"}\")",
      "                    }",
      "                } else {",
      "                    suggestion.insert(\" then \\{\")afterToken(lastToken)",
      "                }",
      "            }",
      "            errormessages.syntaxError(\"an if statement must have 'then' after \" ++",
      "                  \"the condition in parentheses.\")",
      "                  atPosition(sym.line, sym.linePos) withSuggestion(suggestion)",
      "        }",
      "        minIndentLevel := localMin",
      "        statementIndent := localStatementIndent",
      "    }",
      "}",
      "",
      "// Accept an identifier. Handle \"if\" specially by",
      "// passing it to the method above.",
      "method identifier {",
      "    if (accept \"identifier\") then {",
      "        if (sym.value == \"if\") then {",
      "            doif",
      "        } else {",
      "            pushidentifier",
      "        }",
      "    }",
      "}",
      "",
      "method prefixop {",
      "    if (accept \"op\") then {",
      "        var op := sym.value",
      "        var val",
      "        next",
      "        if (accept \"lparen\") then {",
      "            next",
      "            if(didConsume({expression(blocksOK)}).not) then {",
      "                def suggestion = errormessages.suggestion.new",
      "                def nextTok = findNextValidToken( [\"rparen\"] )",
      "                if(nextTok == sym) then {",
      "                    suggestion.insert(\"«expression»\")afterToken(lastToken)",
      "                } else {",
      "                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\"«expression»\")",
      "                }",
      "                errormessages.syntaxError(\"parentheses must contain a valid expression.\")atPosition(",
      "                    sym.line, sym.linePos)withSuggestion(suggestion)",
      "            }",
      "            if(sym.kind != \"rparen\") then {",
      "                checkBadOperators",
      "                def suggestion = errormessages.suggestion.new",
      "                suggestion.insert(\")\")afterToken(lastToken)",
      "                errormessages.syntaxError(\"an expression beginning with a '(' must end with a ')'.\")atPosition(",
      "                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)",
      "            }",
      "            next",
      "        } else {",
      "            if(didConsume({term}).not) then {",
      "                def suggestions = [ ]",
      "                var suggestion := errormessages.suggestion.new",
      "                def nextTok = findNextValidToken( [\"rparen\"] )",
      "                if(nextTok == sym) then {",
      "                    suggestion.insert(\"«expression»\")afterToken(lastToken)",
      "                } else {",
      "                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\"«expression»\")",
      "                }",
      "                suggestions.push(suggestion)",
      "                if(lastToken.prev.kind == \"bind\") then {",
      "                    suggestion := errormessages.suggestion.new",
      "                    suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)",
      "                    suggestion.deleteToken(lastToken.prev)leading(true)trailing(false)",
      "                    suggestions.push(suggestion)",
      "                }",
      "                errormessages.syntaxError(\"a prefix operator must be followed by an expression.\")atPosition(",
      "                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestions(suggestions)",
      "            }",
      "        }",
      "        dotrest(blocksOK)",
      "        callrest(blocksOK)",
      "        postfixsquare",
      "        val := values.pop",
      "        var mem := ast.memberNode.new(\"prefix\" ++ op, val)",
      "        var call := ast.callNode.new(mem, [ast.callWithPart.request(mem.value) withArgs( [] )])",
      "        values.push(call)",
      "    }",
      "}",
      "",
      "method generic {",
      "    if (accept \"lgeneric\") then {",
      "        def id = values.pop",
      "        def gens = [ ]",
      "        def startToken = sym",
      "        next",
      "        while {accept(\"identifier\")} do {",
      "            identifier",
      "            while {accept(\"dot\")} do {",
      "                next",
      "                def memberIn = values.pop",
      "                if(sym.kind != \"identifier\") then {",
      "                    def suggestions = [ ]",
      "                    var suggestion := errormessages.suggestion.new",
      "                    suggestion.insert(\"«type name»\")afterToken(lastToken)",
      "                    suggestions.push(suggestion)",
      "                    suggestion := errormessages.suggestion.new",
      "                    suggestion.deleteToken(lastToken)",
      "                    suggestions.push(suggestion)",
      "                    errormessages.syntaxError(\"a type name must follow the '.'.\")atPosition(",
      "                        lastToken.line, lastToken.linePos + 1)withSuggestions(suggestions)",
      "                }",
      "                identifier",
      "                def memberName = values.pop",
      "                def memberNd = ast.memberNode.new(memberName.value, memberIn)",
      "                memberNd.line := memberName.line",
      "                memberNd.linePos := memberName.linePos",
      "                values.push(memberNd)",
      "            }",
      "            generic",
      "            gens.push(values.pop)",
      "            if (accept \"comma\") then {",
      "                next",
      "            } else {",
      "                if(sym.kind != \"rgeneric\") then {",
      "                    def suggestion = errormessages.suggestion.new",
      "                    suggestion.insert(\">\")afterToken(lastToken)",
      "                    def suggestion2 = errormessages.suggestion.new",
      "                    suggestion2.insert(\" \")beforeToken(startToken)",
      "                    def suggestions = [suggestion, suggestion2]",
      "                    errormessages.syntaxError(\"a type containing a '<' must end with a '>', or the '<' operator must have a space before it.\")atPosition(",
      "                            lastToken.line, lastToken.linePos + lastToken.size)",
      "                        withSuggestions(suggestions)",
      "                }",
      "            }",
      "        }",
      "        if(sym.kind != \"rgeneric\") then {",
      "            def suggestion = errormessages.suggestion.new",
      "            suggestion.insert(\">\")afterToken(lastToken)",
      "            def suggestion2 = errormessages.suggestion.new",
      "            suggestion2.insert(\" \")beforeToken(startToken)",
      "            def suggestions = [suggestion, suggestion2]",
      "            errormessages.syntaxError(\"a type containing a '<' must end with a '>', or the '<' operator must have a space before it.\")atPosition(",
      "                    lastToken.line, lastToken.linePos + lastToken.size)",
      "                withSuggestions(suggestions)",
      "        }",
      "        next",
      "        values.push(ast.genericNode.new(id, gens))",
      "    }",
      "}",
      "method trycatch {",
      "    if (!(accept(\"identifier\") && (sym.value == \"try\"))) then {",
      "        return 0",
      "    }",
      "    def localmin = minIndentLevel",
      "    def catchTok = sym",
      "    next",
      "    if (accept \"lbrace\") then {",
      "        block",
      "    } else {",
      "        if(sym.kind != \"lparen\") then {",
      "            def suggestion = errormessages.suggestion.new",
      "            // Look ahead for a rbrace, rparen, or catch.",
      "            def nextTok = findNextToken({ t -> (t.kind == \"rbrace\")",
      "                || ((t.kind == \"rparen\") && (t.line == catchTok.line))",
      "                || ((t.kind == \"identifier\") && (t.value == \"catch\")) })",
      "            if(false == nextTok) then {",
      "                suggestion.insert(\" \\{}\")afterToken(catchTok)",
      "            } elseif { nextTok.kind == \"rbrace\" } then {",
      "                suggestion.insert(\" \\{\")afterToken(catchTok)",
      "            } elseif { nextTok.kind == \"rparen\" } then {",
      "                if(nextTok == sym) then {",
      "                    suggestion.insert(\"(«expression»\")afterToken(lastToken)andTrailingSpace(true)",
      "                } else {",
      "                    suggestion.insert(\"(\")afterToken(lastToken)andTrailingSpace(true)",
      "                }",
      "            } elseif { nextTok.kind == \"identifier\" } then {",
      "                suggestion.insert(\" \\{\")afterToken(catchTok)",
      "                suggestion.insert(\"\\} \")beforeToken(nextTok)",
      "            }",
      "            errormessages.syntaxError(\"a catch statement must have either a block or an expression in parentheses after the 'catch'.\")atPosition(",
      "                catchTok.line, catchTok.linePos + catchTok.size + 1)withSuggestion(suggestion)",
      "        }",
      "        next",
      "        if(didConsume({expression(blocksOK)}).not) then {",
      "            def suggestion = errormessages.suggestion.new",
      "            def nextTok = findNextValidToken( [\"rparen\"] )",
      "            if(nextTok == sym) then {",
      "                suggestion.insert(\"«expression»\")afterToken(lastToken)",
      "            } else {",
      "                suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\"«expression»\")",
      "            }",
      "            errormessages.syntaxError(\"a catch statement must have either a block or an expression in parentheses after the 'catch'.\")atPosition(",
      "                sym.line, sym.linePos)withSuggestion(suggestion)",
      "        }",
      "        if(sym.kind != \"rparen\") then {",
      "            checkBadOperators",
      "            def suggestion = errormessages.suggestion.new",
      "            suggestion.insert(\")\")afterToken(lastToken)",
      "            errormessages.syntaxError(\"an expression beginning with a '(' must end with a ')'.\")atPosition(",
      "                lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)",
      "        }",
      "        next",
      "    }",
      "    def mainblock = values.pop",
      "    def cases = []",
      "    var finally := false",
      "    while {accept(\"identifier\") && (sym.value == \"catch\")} do {",
      "        next",
      "        if (accept \"lbrace\") then {",
      "            block",
      "        } elseif { accept \"lparen\" } then {",
      "            next",
      "            if(didConsume({expression(blocksOK)}).not) then {",
      "                def suggestion = errormessages.suggestion.new",
      "                def nextTok = findNextValidToken( [\"rparen\"] )",
      "                if(nextTok == sym) then {",
      "                    suggestion.insert(\"«expression»\")afterToken(lastToken)",
      "                } else {",
      "                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\"«expression»\")",
      "                }",
      "                errormessages.syntaxError(\"a try-catch statement must have either a matching block or an expression in parentheses after the 'catch'.\")atPosition(",
      "                    sym.line, sym.linePos)withSuggestion(suggestion)",
      "            }",
      "            if(sym.kind != \"rparen\") then {",
      "                checkBadOperators",
      "                def suggestion = errormessages.suggestion.new",
      "                suggestion.insert(\")\")afterToken(lastToken)",
      "                errormessages.syntaxError(\"an expression beginning with a '(' must end with a ')'.\")atPosition(",
      "                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)",
      "            }",
      "            next",
      "        } else {",
      "            def suggestions = [ ]",
      "            def nextTok = findNextTokenIndentedAt(lastToken)",
      "            var suggestion := errormessages.suggestion.new",
      "            if(false == nextTok) then {",
      "                suggestion.insert(\" }\")afterToken(tokens.last)",
      "                suggestion.insert(\" \\{\")afterToken(lastToken)",
      "                suggestions.push(suggestion)",
      "            } elseif { nextTok == sym } then {",
      "                suggestion.insert(\" («expression»)\")afterToken(lastToken)",
      "                suggestions.push(suggestion)",
      "                suggestion := errormessages.suggestion.new",
      "                suggestion.insert(\" \\{ «match expression» }\")afterToken(lastToken)",
      "                suggestions.push(suggestion)",
      "            } else {",
      "                suggestion.insert(\" }\")afterToken(nextTok.prev)",
      "                suggestion.insert(\" \\{\")afterToken(lastToken)",
      "                suggestions.push(suggestion)",
      "            }",
      "            errormessages.syntaxError(\"a try-catch statement must have either a matching block or an expression in parentheses after the 'catch'.\")atPosition(",
      "                sym.line, sym.linePos)withSuggestions(suggestions)",
      "        }",
      "        cases.push(values.pop)",
      "    }",
      "    if (accept(\"identifier\")onLineOf(catchTok) && (sym.value == \"case\")) then {",
      "        def suggestion = errormessages.suggestion.new",
      "        suggestion.replaceToken(sym)with(\"catch\")",
      "        errormessages.syntaxError(\"a try-catch statement starts with a \"",
      "                ++ \"'try' and then zero or more 'catch' blocks; there \"",
      "                ++ \"are no 'case' blocks.\")",
      "            atRange(sym.line, sym.linePos, sym.linePos + 3)",
      "            withSuggestion(suggestion)",
      "    }",
      "    if (accept(\"identifier\") && (sym.value == \"finally\")) then {",
      "        next",
      "        if (accept \"lbrace\") then {",
      "            block",
      "        } elseif { accept \"lparen\" } then {",
      "            next",
      "            if(didConsume({expression(blocksOK)}).not) then {",
      "                def suggestion = errormessages.suggestion.new",
      "                def nextTok = findNextValidToken( [\"rparen\"] )",
      "                if(nextTok == sym) then {",
      "                    suggestion.insert(\"«expression»\")afterToken(lastToken)",
      "                } else {",
      "                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\"«expression»\")",
      "                }",
      "                errormessages.syntaxError(\"a catch statement must have either a block or an expression in parentheses after the 'finally'.\")atPosition(",
      "                    sym.line, sym.linePos)withSuggestion(suggestion)",
      "            }",
      "            if(sym.kind != \"rparen\") then {",
      "                checkBadOperators",
      "                def suggestion = errormessages.suggestion.new",
      "                suggestion.insert(\")\")afterToken(lastToken)",
      "                errormessages.syntaxError(\"an expression beginning with a '(' must end with a ')'.\")atPosition(",
      "                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)",
      "            }",
      "            next",
      "        } else {",
      "            def suggestions = [ ]",
      "            def nextTok = findNextTokenIndentedAt(lastToken)",
      "            var suggestion := errormessages.suggestion.new",
      "            if(false == nextTok) then {",
      "                suggestion.insert(\" }\")afterToken(tokens.first)",
      "                suggestion.insert(\" \\{\")afterToken(lastToken)",
      "                suggestions.push(suggestion)",
      "            } elseif { nextTok == sym } then {",
      "                suggestion.insert(\" («expression»)\")afterToken(lastToken)",
      "                suggestions.push(suggestion)",
      "                suggestion := errormessages.suggestion.new",
      "                suggestion.insert(\" \\{ «expression» }\")afterToken(lastToken)",
      "                suggestions.push(suggestion)",
      "            } else {",
      "                suggestion.insert(\" }\")afterToken(nextTok.prev)",
      "                suggestion.insert(\" \\{\")afterToken(lastToken)",
      "                suggestions.push(suggestion)",
      "            }",
      "            errormessages.syntaxError(\"a try-finally statement must have either a block or an expression in parentheses after the 'finally'.\")atPosition(",
      "                sym.line, sym.linePos)withSuggestions(suggestions)",
      "        }",
      "        finally := values.pop",
      "    }",
      "    util.setPosition(catchTok.line, catchTok.linePos)",
      "    values.push(ast.tryCatchNode.new(mainblock, cases, finally))",
      "    minIndentLevel := localmin",
      "}",
      "method matchcase {",
      "    if (!(accept(\"identifier\") && (sym.value == \"match\"))) then {",
      "        return 0",
      "    }",
      "    def localmin = minIndentLevel",
      "    def matchTok = sym",
      "    next",
      "    if(sym.kind != \"lparen\") then {",
      "        def suggestion = errormessages.suggestion.new",
      "        // Look ahead for a rparen or case.",
      "        def nextTok = findNextToken({ t -> ((t.kind == \"rparen\") && (t.line == matchTok.line))",
      "            || ((t.kind == \"identifier\") && (t.value == \"case\")) })",
      "        if(false == nextTok) then {",
      "            suggestion.insert(\"(«expression»)\")afterToken(matchTok)",
      "        } elseif { nextTok.kind == \"rparen\" } then {",
      "            if(nextTok == sym) then {",
      "                suggestion.insert(\"(«expression»\")beforeToken(sym)",
      "            } else {",
      "                suggestion.insert(\"(\")beforeToken(sym)",
      "            }",
      "        } elseif { nextTok.kind == \"identifier\" } then {",
      "            suggestion.insert(\"(\")beforeToken(sym)",
      "            suggestion.insert(\")\")afterToken(nextTok.prev)andTrailingSpace(true)",
      "        }",
      "        errormessages.syntaxError(\"a match statement must have an expression in parentheses after the 'match'.\")atPosition(",
      "            matchTok.line, matchTok.linePos + matchTok.size)withSuggestion(suggestion)",
      "    }",
      "    next",
      "    if(didConsume({expression(blocksOK)}).not) then {",
      "        def suggestion = errormessages.suggestion.new",
      "        def nextTok = findNextValidToken( [\"rparen\"] )",
      "        if(nextTok == sym) then {",
      "            suggestion.insert(\"«expression»\")afterToken(lastToken)",
      "        } else {",
      "            suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\"«expression»\")",
      "        }",
      "        errormessages.syntaxError(\"a match statement must have an expression in parentheses after the 'match'.\")atPosition(",
      "            sym.line, sym.linePos)withSuggestion(suggestion)",
      "    }",
      "    def matchee = values.pop",
      "    if(sym.kind != \"rparen\") then {",
      "        checkBadOperators",
      "        def suggestion = errormessages.suggestion.new",
      "        suggestion.insert(\")\")afterToken(lastToken)",
      "        errormessages.syntaxError(\"an expression beginning with a '(' must end with a ')'.\")atPosition(",
      "            lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)",
      "    }",
      "    next",
      "    def cases = []",
      "    var elsecase := false",
      "    while {accept(\"identifier\") && (sym.value == \"case\")} do {",
      "        next",
      "        if (accept \"lbrace\") then {",
      "            block",
      "        } elseif { accept \"lparen\" } then {",
      "            next",
      "            if(didConsume({expression(blocksOK)}).not) then {",
      "                def suggestion = errormessages.suggestion.new",
      "                def nextTok = findNextValidToken( [\"rparen\"] )",
      "                if(nextTok == sym) then {",
      "                    suggestion.insert(\"«expression»\")afterToken(lastToken)",
      "                } else {",
      "                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\"«expression»\")",
      "                }",
      "                errormessages.syntaxError(\"a match statement must have either a matching block or an expression in parentheses after the 'case'.\")atPosition(",
      "                    sym.line, sym.linePos)withSuggestion(suggestion)",
      "            }",
      "            if(sym.kind != \"rparen\") then {",
      "                checkBadOperators",
      "                def suggestion = errormessages.suggestion.new",
      "                suggestion.insert(\")\")afterToken(lastToken)",
      "                errormessages.syntaxError(\"an expression beginning with a '(' must end with a ')'.\")atPosition(",
      "                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)",
      "            }",
      "            next",
      "        } else {",
      "            def suggestions = [ ]",
      "            def nextTok = findNextTokenIndentedAt(lastToken)",
      "            var suggestion := errormessages.suggestion.new",
      "            if(false == nextTok) then {",
      "                suggestion.insert(\" }\")afterToken(tokens.last)",
      "                suggestion.insert(\" \\{\")afterToken(lastToken)",
      "                suggestions.push(suggestion)",
      "            } elseif { nextTok == sym } then {",
      "                suggestion.insert(\" («expression»)\")afterToken(lastToken)",
      "                suggestions.push(suggestion)",
      "                suggestion := errormessages.suggestion.new",
      "                suggestion.insert(\" \\{ «match expression» }\")afterToken(lastToken)",
      "                suggestions.push(suggestion)",
      "            } else {",
      "                suggestion.insert(\" }\")afterToken(nextTok.prev)",
      "                suggestion.insert(\" \\{\")afterToken(lastToken)",
      "                suggestions.push(suggestion)",
      "            }",
      "            errormessages.syntaxError(\"a match statement must have either a matching block or an expression in parentheses after the 'case'.\")atPosition(",
      "                sym.line, sym.linePos)withSuggestions(suggestions)",
      "        }",
      "        cases.push(values.pop)",
      "    }",
      "    util.setPosition(matchTok.line, matchTok.linePos)",
      "    values.push(ast.matchCaseNode.new(matchee, cases, elsecase))",
      "    minIndentLevel := localmin",
      "}",
      "// Accept a term. Terms consist only of single syntactic units and",
      "// do not contain any operators or parentheses, unlike expression.",
      "method term {",
      "    util.setPosition(sym.line, sym.linePos)",
      "    if (accept \"num\") then {",
      "        pushnum",
      "    } elseif { accept \"string\" } then {",
      "        pushstring",
      "    } elseif { accept \"identifier\" && (sym.value == \"match\") } then {",
      "        matchcase",
      "    } elseif { accept(\"identifier\") && (sym.value == \"try\") } then {",
      "        trycatch",
      "    } elseif { accept \"identifier\" } then {",
      "        identifier",
      "    } elseif { acceptKeyword \"object\" } then {",
      "        doobject",
      "    } elseif { acceptKeyword \"type\" } then {",
      "        dotypeLiteral",
      "    } elseif { accept \"lbrace\" } then {",
      "        block",
      "    } elseif { acceptAfterSpaces \"lsquare\" } then {",
      "        doarray",
      "    } elseif { (lastToken.kind != \"identifier\") && (accept \"lsquare\") } then {",
      "        doarray",
      "    } elseif { accept \"op\" } then {",
      "        // Prefix operator",
      "        prefixop",
      "    }",
      "}",
      "",
      "// Accept an expression. Expressions may consist of parenthesised",
      "// subexpressions or terms, which may be followed by method invocations",
      "// (dotrest), postcircumfix square brackets, the rest of a method call,",
      "// or an operator expression.",
      "method expression(acceptBlocks) {",
      "    var sz := values.size",
      "    util.setPosition(sym.line, sym.linePos)",
      "    if (accept \"lparen\") then {",
      "        def tmpStatementToken = statementToken",
      "        statementToken := sym",
      "        util.setPosition(sym.line, sym.linePos)",
      "        next",
      "        if (didConsume{expression(acceptBlocks)}.not) then {",
      "            def suggestion = errormessages.suggestion.new",
      "            def nextTok = findNextValidToken( [\"rparen\"] )",
      "            if(nextTok == sym) then {",
      "                suggestion.insert(\"«expression»\")afterToken(lastToken)",
      "            } else {",
      "                suggestion.replaceTokenRange(sym, nextTok.prev)",
      "                      leading(true)trailing(false)with(\"«expression»\")",
      "            }",
      "            errormessages.syntaxError(\"parentheses must contain a valid expression.\")atPosition(",
      "                sym.line, sym.linePos)withSuggestion(suggestion)",
      "        }",
      "        if(sym.kind != \"rparen\") then {",
      "            checkBadOperators",
      "            def suggestion = errormessages.suggestion.new",
      "            suggestion.insert(\")\")afterToken(lastToken)",
      "            errormessages.syntaxError(\"an expression beginning with a '(' must end with a ')'.\")",
      "                  atPosition(lastToken.line, lastToken.linePos + lastToken.size)",
      "                  withSuggestion(suggestion)",
      "        }",
      "        statementToken := tmpStatementToken",
      "        next",
      "    } else {",
      "        term",
      "    }",
      "    if (values.size > sz) then {",
      "        dotrest(acceptBlocks)",
      "        callrest(acceptBlocks)",
      "        postfixsquare",
      "        valueexpressionrest",
      "    }",
      "}",
      "",
      "// Accept postcircumfix square brackets (as in x[y]) and replace the",
      "// preceding expression with an index node into itself.",
      "method postfixsquare {",
      "    if (acceptWithoutSpaces(\"lsquare\")) then {",
      "        def opening = sym",
      "        next",
      "        def expr = values.pop",
      "        if(didConsume({expression(blocksOK)}).not) then {",
      "            def suggestions = [ ]",
      "            var suggestion := errormessages.suggestion.new",
      "            def nextTok = findNextValidToken( [\"rsquare\"] )",
      "            if(nextTok == sym) then {",
      "                suggestion.insert(\"«index»\")afterToken(lastToken)",
      "            } else {",
      "                suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\"«index»\")",
      "            }",
      "            suggestions.push(suggestion)",
      "            if(nextTok.kind == \"rsquare\") then {",
      "                suggestion := errormessages.suggestion.new",
      "                suggestion.deleteTokenRange(lastToken, nextTok)leading(true)trailing(false)",
      "                suggestions.push(suggestion)",
      "            }",
      "            errormessages.syntaxError(\"a '[' in an expression must be followed by another expression and a ']'.\")atPosition(",
      "                sym.line, sym.linePos)withSuggestions(suggestions)",
      "        }",
      "        if(sym.kind != \"rsquare\") then {",
      "            def suggestion = errormessages.suggestion.new",
      "            suggestion.insert(\"]\")afterToken(lastToken)",
      "            errormessages.syntaxError(\"a '[' in an expression must be followed by another expression and a ']'.\")atPosition(",
      "                lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)",
      "        }",
      "        errormessages.syntaxError(\"'[ ... ]' without preceeding space is no longer part of Grace. \" ++",
      "            \"For a Lineup, add a space.  For an indexing operation, use `at(_)` or `at(_)put(_)`.\")",
      "                atPosition(opening.line, opening.linePos)",
      "    }",
      "}",
      "",
      "// Calculate the precedence of an operator. In this case, only",
      "// multiplication and division have nontrivial precedence. Used in",
      "// expressionrest.",
      "method oprec(o) {",
      "    if (o == \"*\") then {",
      "        return 10",
      "    } elseif { o == \"/\" } then {",
      "        return 10",
      "    }",
      "    return 5",
      "}",
      "",
      "// Return the precedence of the operator at the top of the \"ops\" stack.",
      "method toprec(ops) {",
      "    if (ops.size > 0) then {",
      "        var o := ops.last",
      "        return oprec(o)",
      "    }",
      "    0",
      "}",
      "",
      "",
      "method typeexpressionrest {",
      "    if (acceptSameLine(\"op\")) then {",
      "        expressionrest \"type expression\" recursingWith {typeexpression} blocks (noBlocks)",
      "    }",
      "}",
      "",
      "method valueexpressionrest {",
      "    if (accept \"op\") then {",
      "        expressionrest \"expression\" recursingWith {expression(blocksOK)} blocks (blocksOK)",
      "    }",
      "}",
      "",
      "method expressionrest(name) recursingWith (recurse) blocks (acceptBlocks) {",
      "    // Process the rest of an operator expression using the shunting-yard",
      "    // algorithm. This method uses the oprec and toprec methods above to",
      "    // ensure the correct precedence, and treats all operators as",
      "    // left-associative.  It is parametrised so that it",
      "    // can be used for both type- and value- expressions.",
      "    var terms := [] // List of operands yet to be used",
      "    var ops := [] // Operator stack",
      "    var o",
      "    var o2",
      "    var tmp2",
      "    var tmp := values.pop",
      "    terms.push(tmp)",
      "    var prec",
      "    var allarith := true // Consists only of arithmetic operators",
      "    var opcount := 0",
      "    var opdtype := \"\" // The single operator being used in this expression",
      "    while {accept(\"op\")onLineOfLastOr(statementToken) && ",
      "            {sym.value != \"=\"}} do {",
      "        opcount := opcount + 1",
      "        o := sym.value",
      "        next",
      "        prec := oprec(o)",
      "        if ((o != \"*\") && (o != \"/\") && (o != \"+\") && (o != \"-\")) then {",
      "            allarith := false",
      "        }",
      "        if ((opdtype != \"\") && (opdtype != o) && (allarith.not)) then {",
      "            // If: this is not the first operator, it is not the same",
      "            // as the last operator, and the expression has not been",
      "            // entirely arithmetic, raise a syntax error.",
      "            def suggestions = [ ]",
      "            var suggestion := errormessages.suggestion.new",
      "            suggestion.insert(\")\")afterToken(sym)",
      "            suggestion.insert(\"(\")beforeToken(lastToken.prev)",
      "            suggestions.push(suggestion)",
      "            suggestion := errormessages.suggestion.new",
      "            suggestion.insert(\")\")afterToken(lastToken.prev)",
      "            suggestion.insert(\"(\")beforeToken(lastToken.prev.prev.prev)",
      "            suggestions.push(suggestion)",
      "            errormessages.syntaxError(\"an expression containing both arithmetic and non-arithmetic operators requires parentheses.\")atPosition(",
      "                lastToken.prev.line, lastToken.prev.linePos)withSuggestions(suggestions)",
      "        }",
      "        opdtype := o",
      "        while {(ops.size > 0) && (prec <= toprec(ops))} do {",
      "            // Do the shunting: for as long as the current operator",
      "            // has lesser or equal precedence than the one on the",
      "            // top of the stack, take the operator off the stack and",
      "            // replace its two operands with the combined operator node.",
      "            // This corresponds to left-associative operators only.",
      "            o2 := ops.pop",
      "            tmp2 := terms.pop",
      "            tmp := terms.pop",
      "            util.setPosition(tmp.line, tmp.linePos)",
      "            tmp := ast.opNode.new(o2, tmp, tmp2)",
      "            terms.push(tmp)",
      "        }",
      "        ops.push(o)",
      "        if (accept \"lparen\") then {",
      "            // When a parenthesis is found, take an expression from",
      "            // *within* the parentheses and add it to the stack. Do",
      "            // not delegate entirely to expression, because it will",
      "            // then consume all the following operators and break",
      "            // precedence. Possibly parenthesised expressions could",
      "            // be allowed in term above?",
      "            next",
      "            if(didConsume(recurse).not) then {",
      "                def suggestion = errormessages.suggestion.new",
      "                def nextTok = findNextValidToken( [\"rparen\"] )",
      "                if(nextTok == sym) then {",
      "                    suggestion.insert(\"«{name}»\")afterToken(lastToken)",
      "                } else {",
      "                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\"«{name}»\")",
      "                }",
      "                errormessages.syntaxError(\"parentheses must contain a valid {name}.\")atPosition(",
      "                    sym.line, sym.linePos)withSuggestion(suggestion)",
      "            }",
      "            if(sym.kind != \"rparen\") then {",
      "                checkBadOperators",
      "                def suggestion = errormessages.suggestion.new",
      "                suggestion.insert(\")\")afterToken(lastToken)",
      "                errormessages.syntaxError(\"an expression beginning with a '(' must end with a ')'.\")atPosition(",
      "                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)",
      "            }",
      "            next",
      "        } else {",
      "            if (!tokenOnSameLine) then {",
      "                def suggestions = [ ]",
      "                var suggestion := errormessages.suggestion.new",
      "                suggestion.deleteToken(lastToken)leading(true)trailing(false)",
      "                suggestions.push(suggestion)",
      "                suggestion := errormessages.suggestion.new",
      "                suggestion.insert(\" «{name}»\")afterToken(lastToken)",
      "                suggestions.push(suggestion)",
      "                suggestion := errormessages.suggestion.new",
      "                suggestion.insert(\" \" ++ util.lines.at(sym.line))afterToken(lastToken)",
      "                suggestion.deleteLine(sym.line)",
      "                suggestions.push(suggestion)",
      "                errormessages.syntaxError(\"a valid expression must follow '{lastToken.value}'. This is often caused by a new line in the middle of an expression.\")atPosition(",
      "                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestions(suggestions)",
      "            }",
      "            if(didConsume({term}).not) then {",
      "                def suggestions = [ ]",
      "                var suggestion := errormessages.suggestion.new",
      "                def nextTok = findNextValidToken( [\"comma\", \"rparen\", \"rsquare\", \"rbrace\"] )",
      "                if(nextTok == sym) then {",
      "                    suggestion.insert(\" «{name}»\")afterToken(lastToken)",
      "                } else {",
      "                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\" «{name}»\")",
      "                }",
      "                suggestions.push(suggestion)",
      "                suggestion := errormessages.suggestion.new",
      "                suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)",
      "                suggestions.push(suggestion)",
      "                errormessages.syntaxError(\"a valid {name} must follow '{lastToken.value}'. This is often caused by a new line in the middle of an expression.\")atPosition(",
      "                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestions(suggestions)",
      "            }",
      "        }",
      "",
      "        // Regardless of where the last value came from, it may have",
      "        // method invocations, indexes, or method call happening to it,",
      "        // which should be applied and the result put into the operands",
      "        // list.",
      "        dotrest(acceptBlocks)",
      "        callrest(acceptBlocks)",
      "        postfixsquare",
      "        tmp := values.pop",
      "        terms.push(tmp)",
      "    }",
      "    while {ops.size > 0} do {",
      "        // Shunt off any remaining operators at the end",
      "        o := ops.pop",
      "        tmp2 := terms.pop",
      "        tmp := terms.pop",
      "        util.setPosition(tmp.line, tmp.linePos)",
      "        tmp := ast.opNode.new(o, tmp, tmp2)",
      "        terms.push(tmp)",
      "    }",
      "    tmp := terms.pop",
      "    values.push(tmp)",
      "    if (terms.size > 0) then {",
      "        errormessages.syntaxError(\"values left on term stack.\")atPosition(sym.line, sym.linePos)",
      "    }",
      "}",
      "",
      "// Accept a member lookup with \".\". This consumes the dot and",
      "// a following identifier, and will pass along to further lookups or",
      "// method calls on the result.",
      "method dotrest(acceptBlocks) {",
      "    if (acceptSameLine(\"dot\")) then {",
      "        util.setPosition(sym.line, sym.linePos)",
      "        var lookuptarget := values.pop",
      "        next",
      "        if (accept \"identifier\") then {",
      "            util.setPosition(sym.line, sym.linePos)",
      "            var dro := ast.memberNode.new(sym.value, lookuptarget)",
      "            values.push(dro)",
      "            next",
      "            if (accept \"dot\") then {",
      "                dotrest(acceptBlocks)",
      "            } elseif { accept \"lparen\" || (acceptBlocks && accept \"lbrace\")",
      "                  || accept(\"num\") || accept(\"string\") || accept(\"lsquare\")",
      "                  || accept(\"lgeneric\") } then {",
      "                callrest(acceptBlocks)",
      "            }",
      "        } else {",
      "            def suggestions = [ ]",
      "            var suggestion := errormessages.suggestion.new",
      "            suggestion.deleteToken(lastToken)",
      "            suggestions.push(suggestion)",
      "            suggestion := errormessages.suggestion.new",
      "            suggestion.insert(\"«method name»\")afterToken(lastToken)",
      "            suggestions.push(suggestion)",
      "            errormessages.syntaxError(\"a field or method name must follow a '.'.\")atPosition(",
      "                sym.line, sym.linePos)withSuggestions(suggestions)",
      "        }",
      "    }",
      "}",
      "",
      "// Accept a method invocation indicated by parentheses. Unparenthesised",
      "// method calls are left as \"member\" AST nodes and processed correctly at",
      "// a later stage.",
      "method callrest(acceptBlocks) {",
      "    if (values.size == 0) then {",
      "        return 0",
      "    }",
      "    var meth := values.pop",
      "    if (meth.kind != \"identifier\") then {",
      "        if (meth.kind != \"member\") then {",
      "            values.push(meth)",
      "            return 0",
      "        }",
      "    }",
      "    def lnum = meth.line",
      "    def lpos = meth.linePos",
      "    var methn := meth.value",
      "    def btok = sym",
      "    util.setPosition(sym.line, sym.linePos)",
      "    var signature := []",
      "    var part := ast.callWithPart.new",
      "    signature.push(part)",
      "    var hadcall := false",
      "    var tok := lastToken",
      "    var startInd := minIndentLevel",
      "    var genericIdents := false",
      "    if (acceptSameLine \"lgeneric\") then {",
      "        genericIdents := typeArgs",
      "    }",
      "    if (acceptSameLine(\"lparen\")) then {",
      "        part.line := sym.line",
      "        part.linePos := sym.linePos",
      "        part.name := methn",
      "        tok := sym",
      "        hadcall := true",
      "        parenthesizedArg(part)",
      "    } elseif { acceptBlocks.not && {accept(\"lbrace\")onLineOf(tok)} } then {",
      "        values.push(meth)",
      "    } elseif { acceptArgumentOnLineOf(tok) } then {",
      "        tok := sym",
      "        hadcall := true",
      "        part.name := methn",
      "        term",
      "        var ar := values.pop",
      "        part.args.push(ar)",
      "    } elseif { meth.kind == \"identifier\" } then {",
      "        values.push(meth)",
      "    } elseif { meth.kind == \"member\" } then {",
      "        var root := meth.in",
      "        var outroot := meth",
      "        while {root.kind == \"member\"} do {",
      "            outroot := root",
      "            root := root.in",
      "        }",
      "        if (root.kind == \"identifier\") then {",
      "            values.push(meth)",
      "        } else {",
      "            meth.generics := genericIdents",
      "            values.push(meth)",
      "        }",
      "    }",
      "    if (hadcall) then {",
      "        if (accept(\"identifier\")onLineOfLastOr(tok)) then {",
      "            // Multi-part method name",
      "            def meth' = ast.identifierNode.new(methn, false)",
      "            meth'.line := lnum",
      "            meth'.linePos := lpos",
      "            methn := callmprest(meth', signature, tok)",
      "            if (meth.kind == \"member\") then {",
      "                // callmprest loses this information, so restore",
      "                // the member lookup (for x.between(3)and(10)-type",
      "                // calls).",
      "                meth := ast.memberNode.new(methn.value, meth.in)",
      "                meth.line := methn.line",
      "                meth.linePos := methn.linePos",
      "            } else {",
      "                meth := methn",
      "            }",
      "        }",
      "        util.setline(lnum)",
      "        def call = ast.callNode.new(meth, signature)",
      "        call.generics := genericIdents",
      "        values.push(call)",
      "    } elseif {false != genericIdents} then {",
      "        meth.generics := genericIdents",
      "    }",
      "    minIndentLevel := startInd",
      "    dotrest(acceptBlocks)",
      "}",
      "",
      "method parenthesizedArg(part) {",
      "    next",
      "    ifConsume {expression(blocksOK)} then {",
      "        // For matching blocks - same as below",
      "        if (accept \"colon\") then {",
      "            def expr = values.pop",
      "            if (expr.kind != \"identifier\") then {",
      "                def suggestion = errormessages.suggestion.new",
      "                if(sym.next.kind == \"identifier\") then {",
      "                    suggestion.deleteTokenRange(sym, sym.next)leading(true)trailing(false)",
      "                    errormessages.syntaxError(\"only variables and constants may be followed by a ':' and a type.\")atRange(",
      "                        sym.line, sym.linePos, sym.next.linePos + sym.next.size - 1)withSuggestion(suggestion)",
      "                } else {",
      "                    suggestion.deleteToken(sym)leading(true)trailing(false)",
      "                    errormessages.syntaxError(\"only variables and constants may be followed by a ':' and a type.\")atRange(",
      "                        sym.line, sym.linePos, sym.linePos)withSuggestion(suggestion)",
      "                }",
      "            }",
      "            next",
      "            if(didConsume({expression(blocksOK)}).not) then {",
      "                checkBadTypeLiteral",
      "                def suggestions = [ ]",
      "                var suggestion := errormessages.suggestion.new",
      "                def nextTok = findNextValidToken( [\"rparen\"] )",
      "                if(nextTok == sym) then {",
      "                    suggestion.insert(\" «type name»\")afterToken(lastToken)",
      "                } else {",
      "                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\" «type name»\")",
      "                }",
      "                suggestions.push(suggestion)",
      "                suggestion := errormessages.suggestion.new",
      "                suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)",
      "                suggestions.push(suggestion)",
      "                errormessages.syntaxError(\"a type name or type expression must follow ':'.\")atPosition(",
      "                    sym.line, sym.linePos)withSuggestions(suggestions)",
      "            }",
      "            expr.dtype := values.pop",
      "            values.push(expr)",
      "        }",
      "        while {accept(\"comma\")} do {",
      "            part.args.push(values.pop)",
      "            next",
      "            if(didConsume({expression(blocksOK)}).not) then {",
      "                def suggestions = [ ]",
      "                var suggestion := errormessages.suggestion.new",
      "                def nextTok = findNextValidToken( [\"rparen\"] )",
      "                if(nextTok == sym) then {",
      "                    suggestion.insert(\" «expression»\")afterToken(lastToken)",
      "                } else {",
      "                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\" «expression»\")",
      "                }",
      "                suggestions.push(suggestion)",
      "                suggestion := errormessages.suggestion.new",
      "                suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)",
      "                suggestions.push(suggestion)",
      "                errormessages.syntaxError(\"a method request must have an expression after a ','.\")atPosition(",
      "                    sym.line, sym.linePos)withSuggestions(suggestions)",
      "            }",
      "            // For matching blocks - same as above",
      "            if (accept \"colon\") then {",
      "                def arg = values.pop",
      "                if (arg.kind != \"identifier\") then {",
      "                    def suggestion = errormessages.suggestion.new",
      "                    if(sym.next.kind == \"identifier\") then {",
      "                        suggestion.deleteTokenRange(sym, sym.next)leading(true)trailing(false)",
      "                        errormessages.syntaxError(\"only declarations may be followed by a ':' and a type.\")atRange(",
      "                            sym.line, sym.linePos, sym.next.linePos + sym.next.size - 1)withSuggestion(suggestion)",
      "                    } else {",
      "                        suggestion.deleteToken(sym)",
      "                        errormessages.syntaxError(\"only declarations may be followed by a ':' and a type.\")atRange(",
      "                            sym.line, sym.linePos, sym.linePos)withSuggestion(suggestion)",
      "                    }",
      "                }",
      "                next",
      "                if(didConsume({expression(blocksOK)}).not) then {",
      "                    checkBadTypeLiteral",
      "                    def suggestions = [ ]",
      "                    var suggestion := errormessages.suggestion.new",
      "                    def nextTok = findNextValidToken( [\"rparen\"] )",
      "                    if(nextTok == sym) then {",
      "                        suggestion.insert(\" «type name»\")afterToken(lastToken)",
      "                    } else {",
      "                        suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\" «type name»\")",
      "                    }",
      "                    suggestions.push(suggestion)",
      "                    suggestion := errormessages.suggestion.new",
      "                    suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)",
      "                    suggestions.push(suggestion)",
      "                    errormessages.syntaxError(\"a type name or type expression must follow ':'.\")atPosition(",
      "                        sym.line, sym.linePos)withSuggestions(suggestions)",
      "                }",
      "                arg.dtype := values.pop",
      "                values.push(arg)",
      "            }",
      "        }",
      "        part.args.push(values.pop)",
      "    }",
      "    if(sym.kind != \"rparen\") then {",
      "        checkBadOperators",
      "        def suggestion = errormessages.suggestion.new",
      "        suggestion.insert(\")\")afterToken(lastToken)",
      "        errormessages.syntaxError(\"a method request beginning with a '(' must end with a ')'.\")atPosition(",
      "            lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)",
      "    }",
      "    if (sym.line == part.line) then {",
      "        part.lineLength := sym.linePos - part.linePos",
      "    }",
      "    next",
      "}",
      "",
      "method typeArgs {",
      "    // Parse one or more type arguments, if present, and answer them as a list.",
      "    def startToken = sym",
      "    def args = [ ]",
      "    if (sym.kind != \"lgeneric\") then { return args }",
      "    next",
      "    while {didConsume{typeArg}} do {",
      "        args.add(values.pop)",
      "        if (sym.kind == \"comma\") then { next }",
      "    }",
      "    if(sym.kind != \"rgeneric\") then {",
      "        def suggestion = errormessages.suggestion.new",
      "        suggestion.insert(\">\")afterToken(lastToken)",
      "        def suggestion2 = errormessages.suggestion.new",
      "        suggestion2.insert(\" \")beforeToken(startToken)",
      "        def suggestions = [suggestion, suggestion2]",
      "        errormessages.syntaxError(\"a method request containing a '<' must have a matching '>'. \"",
      "            ++ \"If '<' is intended as an operator, precede it by a space.\")",
      "            atPosition(lastToken.line, lastToken.linePos + lastToken.size)",
      "            withSuggestions(suggestions)",
      "    }",
      "    next",
      "    return args",
      "}",
      "",
      "method typeArg {",
      "    // Parses a single type argument, and leave it on the values stack.",
      "    // TODO: 'identifier' could be a dotted identifier, ",
      "    //        or perhaps a type expression?",
      "    if (accept \"identifier\") then {",
      "        identifier",
      "        if (sym.kind == \"lgeneric\") then {",
      "            values.push(ast.genericNode.new(values.pop, typeArgs))",
      "        } else {",
      "            // values.push(values.pop)",
      "        }",
      "    } elseif {didConsume{dotypeLiteral}} then {",
      "        // values.push(values.pop)",
      "    }",
      "}",
      "",
      "method callmprest(meth, signature, tok) {",
      "    // Parses the rest of a multi-part method name.",
      "    // meth is an identifierNode representing the first part of the name.",
      "    // Returns a new identifierNode, representing the full method name,",
      "    // and updates signature.params with the parsed arguments.",
      "    var methname := meth.value",
      "    var nxt",
      "    var lp := meth.linePos",
      "    var part",
      "    while {accept(\"identifier\")onLineOf(tok)",
      "           || accept(\"identifier\")onLineOf(lastToken)} do {",
      "        // Each word must start on the same line as the preceding parameter",
      "        // ended.",
      "        part := ast.callWithPart.new",
      "        signature.push(part)",
      "        methname := methname ++ \"()\"",
      "        pushidentifier",
      "        nxt := values.pop",
      "        methname := methname ++ nxt.value",
      "        part.name := nxt.value",
      "        var isTerm := false",
      "        if (accept \"lparen\") then {",
      "            next    // skip over the `(`",
      "        } elseif { acceptArgumentOnLineOf(lastToken) } then {",
      "            isTerm := true",
      "        } else {",
      "            def suggestion = errormessages.suggestion.new",
      "            if(sym.kind == \"identifier\") then {",
      "                suggestion.replaceToken(sym)leading(true)trailing(false)with(\"({sym.value})\")",
      "                if(methname == \"while()do\") then {",
      "                    errormessages.syntaxError(\"a while loop must have either a loop body in braces, or a block in parentheses.\")atPosition(",
      "                        sym.line, sym.linePos)withSuggestion(suggestion)",
      "                } elseif { methname == \"for()do\" } then {",
      "                    errormessages.syntaxError(\"a for loop must have either a loop body in braces, or a block in parentheses.\")atPosition(",
      "                        sym.line, sym.linePos)withSuggestion(suggestion)",
      "                }",
      "                errormessages.syntaxError(\"each argument list in a multi-part method request must be parenthesized, unless it is self-delimiting.\")atPosition(",
      "                    sym.line, sym.linePos)withSuggestion(suggestion)",
      "            } else {",
      "                if (methname == \"while()do\") then {",
      "                    suggestion.insert(\" \\{}\")afterToken(lastToken)",
      "                    errormessages.syntaxError(\"a while loop must have a body.\")atPosition(",
      "                        sym.line, sym.linePos)withSuggestion(suggestion)",
      "                } elseif { methname == \"for()do\" } then {",
      "                    suggestion.insert(\" \\{}\")afterToken(lastToken)",
      "                    errormessages.syntaxError(\"a for loop must have a body.\")atPosition(",
      "                        sym.line, sym.linePos)withSuggestion(suggestion)",
      "                } else {",
      "                    suggestion.insert(\"()\")afterToken(lastToken)",
      "                    errormessages.syntaxError(\"a multi-part method request must end with '()'.\")atPosition(",
      "                        sym.line, sym.linePos)withSuggestion(suggestion)",
      "                }",
      "            }",
      "        }",
      "        def isEmpty = accept \"rparen\"",
      "        if (isTerm) then {",
      "            term",
      "        } else {",
      "            if(sym.kind != \"rparen\") then {",
      "                if(didConsume({expression(blocksOK)}).not) then {",
      "                    def suggestions = [ ]",
      "                    var suggestion := errormessages.suggestion.new",
      "                    def nextTok = findNextValidToken( [\"rparen\"] )",
      "                    if(nextTok == sym) then {",
      "                        suggestion.insert(\"«expression»\")afterToken(lastToken)",
      "                    } else {",
      "                        suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\"«expression»\")",
      "                        suggestions.push(suggestion)",
      "                        suggestion := errormessages.suggestion.new",
      "                        suggestion.deleteTokenRange(sym, nextTok.prev)leading(true)trailing(false)",
      "                    }",
      "                    suggestions.push(suggestion)",
      "                    errormessages.syntaxError(\"a method request must have an expression or a ')' after a '('.\")atPosition(",
      "                        sym.line, sym.linePos)withSuggestions(suggestions)",
      "                }",
      "            }",
      "            while {accept(\"comma\")} do {",
      "                nxt := values.pop",
      "                part.args.push(nxt)",
      "                next",
      "                if(didConsume({expression(blocksOK)}).not) then {",
      "                    def suggestions = [ ]",
      "                    var suggestion := errormessages.suggestion.new",
      "                    def nextTok = findNextValidToken( [\"rparen\"] )",
      "                    if(nextTok == sym) then {",
      "                        suggestion.insert(\" «expression»\")afterToken(lastToken)",
      "                    } else {",
      "                        suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\" «expression»\")",
      "                    }",
      "                    suggestions.push(suggestion)",
      "                    suggestion := errormessages.suggestion.new",
      "                    suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)",
      "                    suggestions.push(suggestion)",
      "                    errormessages.syntaxError(\"a method request must have an expression after a ','.\")atPosition(",
      "                        sym.line, sym.linePos)withSuggestions(suggestions)",
      "                }",
      "            }",
      "        }",
      "        if (!isEmpty) then {",
      "            nxt := values.pop",
      "            part.args.push(nxt)",
      "        }",
      "        if (isTerm.not) then {",
      "            if(sym.kind != \"rparen\") then {",
      "                checkBadOperators",
      "                def suggestion = errormessages.suggestion.new",
      "                suggestion.insert(\")\")afterToken(lastToken)",
      "                errormessages.syntaxError(\"a part of a multi-part method request beginning with a '(' must end with a ')'.\")atPosition(",
      "                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)",
      "            }",
      "        }",
      "        if (accept(\"rparen\") && isTerm.not) then {",
      "            next",
      "        }",
      "    }",
      "    def meth' = ast.identifierNode.new(methname, false)",
      "    meth'.line := meth.line",
      "    meth'.linePos := meth.linePos",
      "    meth'",
      "}",
      "",
      "// Accept a const declaration",
      "method defdec {",
      "    if (acceptKeyword \"def\") then {",
      "        def line = sym.line",
      "        def pos = sym.linePos",
      "        def defTok = sym",
      "        next",
      "        if(sym.kind != \"identifier\") then {",
      "            def suggestion = errormessages.suggestion.new",
      "            def nextToken = findNextToken({ t -> (t.kind == \"op\")",
      "                && (t.value == \"=\") && (t.line == sym.line)})",
      "            if (false == nextToken) then {",
      "                suggestion.insert(\" «name» =\")afterToken(lastToken)",
      "            } elseif { nextToken == sym } then {",
      "                suggestion.insert(\" «name»\")afterToken(lastToken)",
      "            } else {",
      "                suggestion.replaceTokenRange(sym, nextToken.prev)",
      "                      leading(false)trailing(true)with(\"«name» \")",
      "            }",
      "            errormessages.syntaxError(\"a definition must have a name, '=', \" ++",
      "                  \"and a value after the 'def'.\") atPosition(sym.line, sym.linePos)",
      "                  withSuggestion(suggestion)",
      "        }",
      "        pushidentifier",
      "        var val := false",
      "        var name := values.pop",
      "        name.isBindingOccurrence := true",
      "        var dtype := optionalTypeAnnotation",
      "        def anns = doannotation",
      "        if (accept(\"op\") && (sym.value == \"=\")) then {",
      "            next",
      "            if(didConsume({expression(blocksOK)}).not) then {",
      "                def suggestion = errormessages.suggestion.new",
      "                def nextTok = findNextValidToken( [ ] )",
      "                if(nextTok == sym) then {",
      "                    suggestion.insert(\" «expression»\")afterToken(lastToken)",
      "                } else {",
      "                    suggestion.replaceTokenRange(sym, nextTok.prev)",
      "                          leading(true)trailing(false)with(\" «expression»\")",
      "                }",
      "                errormessages.syntaxError(\"a definition must have a value after the '='.\")",
      "                      atPosition(lastToken.line, lastToken.linePos + lastToken.size)",
      "                      withSuggestion(suggestion)",
      "            }",
      "            val := values.pop",
      "        } elseif { accept \"bind\" } then {",
      "            def suggestions = [ ]",
      "            var suggestion := errormessages.suggestion.new",
      "            suggestion.replaceToken(sym)with(\"=\")",
      "            suggestions.push(suggestion)",
      "            suggestion := errormessages.suggestion.new",
      "            suggestion.replaceToken(defTok)with(\"var\")",
      "            suggestions.push(suggestion)",
      "            errormessages.syntaxError(\"a definition must use '=' instead of ':='. \" ++",
      "                \"A variable declaration uses 'var' and ':='.\")atRange(",
      "                sym.line, sym.linePos, sym.linePos + 1) withSuggestions(suggestions)",
      "        } else {",
      "            def suggestions = [ ]",
      "            var suggestion := errormessages.suggestion.new",
      "            suggestion.insert(\" = «expression»\")afterToken(lastToken)",
      "            suggestions.push(suggestion)",
      "            suggestion := errormessages.suggestion.new",
      "            suggestion.replaceToken(defTok)with(\"var\")",
      "            suggestions.push(suggestion)",
      "            errormessages.syntaxError(\"a definition must have '=' and a value after the name. \"",
      "                ++ \"A variable declaration does not require a value but uses 'var', not 'def'.\")",
      "                atPosition(sym.line, sym.linePos) withSuggestions(suggestions)",
      "        }",
      "        util.setPosition(defTok.line, defTok.linePos)",
      "        var o := ast.defDecNode.new(name, val, dtype)",
      "        if (false != anns) then { o.annotations.addAll(anns) }",
      "        o.startToken := defTok",
      "        values.push(o)",
      "        reconcileComments",
      "    }",
      "}",
      "",
      "// Accept a var declaration",
      "method vardec {",
      "    if (acceptKeyword \"var\") then {",
      "        def line = sym.line",
      "        def pos = sym.linePos",
      "        def varTok = sym",
      "        next",
      "        if(sym.kind != \"identifier\") then {",
      "            def suggestion = errormessages.suggestion.new",
      "            def nextToken = findNextToken({ t -> (t.kind == \"bind\")",
      "                && (t.line == sym.line)})",
      "            if ((false == nextToken) || {nextToken == sym}) then {",
      "                suggestion.insert(\" «name»\")afterToken(lastToken)",
      "            } else {",
      "                suggestion.replaceTokenRange(sym, nextToken.prev)",
      "                      leading(false)trailing(true)with(\"«name» \")",
      "            }",
      "            errormessages.syntaxError \"a variable declaration must have a name after the 'var'.\"",
      "                  atPosition(sym.line, sym.linePos) withSuggestion(suggestion)",
      "        }",
      "        pushidentifier",
      "        var val := false",
      "        var name := values.pop",
      "        name.isBindingOccurrence := true",
      "        def dtype = optionalTypeAnnotation",
      "        def anns = doannotation",
      "        if (accept \"bind\") then {",
      "            next",
      "            if(didConsume({expression(blocksOK)}).not) then {",
      "                def suggestions = [ ]",
      "                var suggestion := errormessages.suggestion.new",
      "                def nextTok = findNextValidToken( [ ] )",
      "                if(nextTok == sym) then {",
      "                    suggestion.insert(\" «expression»\")afterToken(lastToken)",
      "                } else {",
      "                    suggestion.replaceTokenRange(sym, nextTok.prev)",
      "                          leading(true)trailing(false)with(\" «expression»\")",
      "                }",
      "                suggestions.push(suggestion)",
      "                suggestion := errormessages.suggestion.new",
      "                suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)",
      "                suggestions.push(suggestion)",
      "                errormessages.syntaxError(\"a variable declaration must have a value after the ':='. \"",
      "                    ++ \"A variable without a value can be declared with 'var' followed only by the variable name.\")atPosition(",
      "                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestions(suggestions)",
      "            }",
      "            val := values.pop",
      "        } else {",
      "            if (accept(\"op\") && (sym.value == \"=\")) then {",
      "                def suggestions = [ ]",
      "                var suggestion := errormessages.suggestion.new",
      "                suggestion.replaceToken(sym)with(\":=\")",
      "                suggestions.push(suggestion)",
      "                suggestion := errormessages.suggestion.new",
      "                suggestion.replaceToken(varTok)with(\"def\")",
      "                suggestions.push(suggestion)",
      "                errormessages.syntaxError(\"a variable declaration must use ':=' instead of '='. A definition uses 'def' and '='.\")",
      "                    atRange(sym.line, sym.linePos, sym.linePos)",
      "                    withSuggestions(suggestions)",
      "            }",
      "        }",
      "        util.setPosition(line, pos)",
      "        def o = ast.varDecNode.new(name, val, dtype)",
      "        if (false != anns) then { o.annotations.addAll(anns) }",
      "        values.push(o)",
      "        reconcileComments",
      "    }",
      "}",
      "",
      "// Accept a square-bracketed list literal like [1,2,3].",
      "method doarray {",
      "    if (accept \"lsquare\") then {",
      "        next",
      "        var tmp",
      "        var params := []",
      "        ifConsume {expression(blocksOK)} then {",
      "            while {accept(\"comma\")} do {",
      "                tmp := values.pop",
      "                params.push(tmp)",
      "                next",
      "                if(didConsume({expression(blocksOK)}).not) then {",
      "                    def suggestions = [ ]",
      "                    var suggestion := errormessages.suggestion.new",
      "                    def nextTok = findNextValidToken( [\"rsquare\"] )",
      "                    if(nextTok == sym) then {",
      "                        suggestion.insert(\" «expression»\")afterToken(lastToken)",
      "                    } else {",
      "                        suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\" «expression»\")",
      "                    }",
      "                    suggestions.push(suggestion)",
      "                    suggestion := errormessages.suggestion.new",
      "                    suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)",
      "                    suggestions.push(suggestion)",
      "                    errormessages.syntaxError(\"a Lineup must contain zero or more expressions separated by commas.\")",
      "                        atPosition(sym.line, sym.linePos) withSuggestions(suggestions)",
      "                }",
      "            }",
      "            tmp := values.pop",
      "            params.push(tmp)",
      "        }",
      "        if(sym.kind != \"rsquare\") then {",
      "            def suggestion = errormessages.suggestion.new",
      "            suggestion.insert(\"]\")afterToken(lastToken)",
      "            errormessages.syntaxError(\"a Lineup beginning with a '[' must end with a ']'.\")atPosition(",
      "                lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)",
      "        }",
      "        var o := ast.arrayNode.new(params)",
      "        values.push(o)",
      "        next",
      "    }",
      "}",
      "",
      "// Accept \"dialect \"X\"\"",
      "method dodialect {",
      "    if (acceptKeyword \"dialect\") then {",
      "        next",
      "        if(sym.kind != \"string\") then {",
      "            def suggestion = errormessages.suggestion.new",
      "            var errorPos",
      "            if((sym.kind == \"identifier\") && (sym.line == lastToken.line)) then {",
      "                suggestion.replaceToken(sym)with(\"\\\"{sym.value}\\\"\")",
      "                errorPos := sym.linePos",
      "            } else {",
      "                suggestion.insert(\" \\\"«dialect name»\\\"\")afterToken(lastToken)",
      "                errorPos := lastToken.linePos + lastToken.size + 1",
      "            }",
      "            errormessages.syntaxError(\"a dialect statement must have the name of the dialect in quotes after the 'dialect'.\")atPosition(",
      "                lastToken.line, errorPos)withSuggestion(suggestion)",
      "        }",
      "        values.push(ast.dialectNode.new(sym.value))",
      "        next",
      "    }",
      "}",
      "",
      "method inheritsOrUses {",
      "    // Parses \"inherit «object expression»\"",
      "",
      "    if (! accept \"keyword\") then { return }",
      "    if ((sym.value == \"inherits\") || (sym.value == \"inherit\") || (sym.value == \"use\")) then {",
      "        def btok = sym",
      "        checkIndent",
      "        next",
      "        if(didConsume({expression(noBlocks)}).not) then {",
      "            def suggestions = [ ]",
      "            var suggestion := errormessages.suggestion.new",
      "            def nextTok = findNextValidToken( [\"rsquare\"] )",
      "            if(nextTok == sym) then {",
      "                suggestion.insert(\" «parent»\")afterToken(lastToken)",
      "            } else {",
      "                suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\" «parent»\")",
      "            }",
      "            suggestions.push(suggestion)",
      "            suggestion := errormessages.suggestion.new",
      "            suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)",
      "            suggestions.push(suggestion)",
      "            var msg := \"The {btok.value} keyword must be followed by an expression that creates \"",
      "            if (btok.value == \"use\") then {",
      "                msg := msg ++ \"the trait being used.\"",
      "            } else {",
      "                msg := msg ++ \"the object being inherited.\"",
      "            }",
      "            errormessages.syntaxError(msg)",
      "                atPosition(lastToken.line, lastToken.linePos + lastToken.size + 1)",
      "                withSuggestions(suggestions)",
      "        }",
      "        util.setPosition(btok.line, btok.linePos)",
      "        def inhNode = ast.inheritsNode.new(values.pop)",
      "        if (btok.value == \"use\") then {",
      "            inhNode.isUse := true",
      "        }",
      "        while { inheritsModifier(inhNode) onLineOf(btok) } do { }",
      "        values.push(inhNode)",
      "    }",
      "}",
      "",
      "method inheritsModifier(node) onLineOf(startToken) {",
      "    // parse an alias or excludes modifier on an `inherits` clause",
      "    if (! accept \"keyword\" onLineOf(startToken) ) then { ",
      "        return false",
      "    }",
      "    if (sym.value == \"alias\") then { ",
      "        parseAlias(node) ",
      "    } elseif {sym.value == \"exclude\"} then {",
      "        parseExclude(node)",
      "    } else {",
      "        false",
      "    }",
      "}",
      "",
      "method parseAlias(node) {",
      "    next    // skip the alias keyword",
      "    def newSig = methodsignature(true)",
      "    def newMeth = newSig.m",
      "    if (accept \"op\" && (sym.value == \"=\")) then {",
      "        next",
      "        def oldSig = methodsignature(true)",
      "        def oldMeth = oldSig.m",
      "        oldMeth.isBindingOccurrence := false",
      "        node.addAlias (newMeth) for (oldMeth)",
      "    } else {",
      "        errormessages.syntaxError (\"An alias modifier must take the form \" ++",
      "            \"'newMethodName = oldMethodName'\") ",
      "            atPosition (lastToken.line, lastToken.linePos + lastToken.size)",
      "    }",
      "    return true",
      "}",
      "method parseExclude(node) {",
      "    next    // skip the exclude keyword",
      "    def exSig = methodsignature(true)",
      "    def excludedMeth = exSig.m",
      "    excludedMeth.isBindingOccurrence := false",
      "    node.addExclusion (excludedMeth)",
      "    return true",
      "}",
      "",
      "method doobject {",
      "    // Parse an object constructor.",
      "    // this method is called doobject because \"object\" is a keyword",
      "",
      "    if (acceptKeyword \"object\") then {",
      "        next",
      "        parseObjectConstructorBody \"an object constructor\" ",
      "            startingWith (lastToken) after \"'object'\"",
      "    }",
      "}",
      "",
      "method parseObjectConstructorBody(constructName) startingWith (btok) after (prev) {",
      "    // Parse the body of an object constructor, leaving the node on the",
      "    // values stack.  Common code for parsing object, class, and factory method",
      "    // bodies; constructName says which, so that error messages are correct.",
      "    // btok is the keyword token that started the construct: class, object, or trait.",
      "    def localMinIndentLevel = minIndentLevel",
      "    def anns = doannotation",
      "    if (sym.kind != \"lbrace\") then {",
      "        def suggestion = errormessages.suggestion.new",
      "        def nextTok = findNextToken { t -> t.kind == \"rbrace\" }",
      "        if (false == nextTok) then {",
      "            suggestion.insert(\" \\{}\")afterToken(lastToken)",
      "        } else {",
      "            suggestion.insert(\" \\{\")afterToken(lastToken)",
      "        }",
      "        errormessages.syntaxError \"{constructName} must have a '\\{' after the {prev}.\"",
      "            atPosition(lastToken.line, lastToken.linePos + lastToken.size)",
      "            withSuggestion(suggestion)",
      "    }",
      "    next",
      "    if (sym.line == statementToken.line) then {",
      "        minIndentLevel := sym.linePos - 2",
      "    } else {",
      "        minIndentLevel := statementToken.indent + 2",
      "    }",
      "    def body = []",
      "    var superObject := false",
      "    def usedTraits = []",
      "    var inPreamble := true  // => processing inherit and use statements",
      "    while {(accept(\"rbrace\")).not && {sym.kind != \"eof\"}} do {",
      "        if (didConsume {inheritsOrUses}) then {",
      "            def parentNode = values.pop",
      "            if (inPreamble) then {",
      "                if (parentNode.isUse) then {",
      "                    usedTraits.add(parentNode)",
      "                } elseif { usedTraits.isEmpty } then {",
      "                    superObject := parentNode",
      "                } else {",
      "                    errormessages.syntaxError(\"'inherit' must come \" ++",
      "                        \"before 'use' in {constructName}\")",
      "                        atRange(parentNode.line, parentNode.linePos,",
      "                        parentNode.linePos + 7)",
      "                }",
      "            } else {",
      "                errormessages.syntaxError(\"'{parentNode.statementName}' must \" ++",
      "                    \"come at the start of {constructName}\")",
      "                    atRange(parentNode.line, parentNode.linePos,",
      "                            parentNode.linePos + parentNode.statementName.size)",
      "            }",
      "        } elseif { didConsume {methoddec} } then {",
      "            inPreamble := false",
      "            body.push(values.pop)",
      "        } elseif { didConsume {statement} } then {",
      "            inPreamble := false",
      "            body.push(values.pop)",
      "        } else {",
      "            errormessages.syntaxError(\"unexpected symbol '{sym.value}' in body \" ++",
      "                \"of of {constructName}\")",
      "                atRange(sym.line, sym.linePos, sym.linePos + sym.value.size - 1)",
      "        }",
      "    }",
      "    next",
      "    util.setPosition(btok.line, btok.linePos)",
      "    def objNode = ast.objectNode.new(body, superObject)",
      "    if (false != anns) then { objNode.annotations.addAll(anns) }",
      "    objNode.usedTraits := usedTraits",
      "    values.push(objNode)",
      "    minIndentLevel := localMinIndentLevel",
      "}",
      "",
      "method doclass {",
      "    // Accepts a class declaration with or without a `dot`",
      "    // Class declarations were formerly of the form:",
      "    //",
      "    //   class objName.methodName (param1, param2) {",
      "    //     inherits <expr>",
      "    //     var x",
      "    //     method y(z) { ... }",
      "    // }",
      "    // Now they are of the form:",
      "    //",
      "    // class methodName (param1, param2) {",
      "    //     inherits <expr>",
      "    //     var x",
      "    //     method y(z) { ... }",
      "    // }",
      "    // The old \"dotted\" form is compiled into a defDecNode that contains",
      "    // an objectNode that contains the class method and an asString method.",
      "    // The current form is compiled into a methodNode that contains",
      "    // an objectNode, i.e., it is treated as syntactic sugar for",
      "    //",
      "    // method methodName (param1, param2) {",
      "    //     object {",
      "    //         inherits <expr>",
      "    //         var x",
      "    //         method y(z) { ... }",
      "    //     }",
      "    // }",
      "",
      "    def btok = sym",
      "    next",
      "    def localMinIndentLevel = minIndentLevel",
      "    if(sym.kind != \"identifier\") then {",
      "        def suggestions = [ ]",
      "        if(sym.kind == \"lbrace\") then {",
      "            var suggestion := errormessages.suggestion.new",
      "            suggestion.insert(\" «class name».new\")afterToken(lastToken)",
      "            suggestions.push(suggestion)",
      "            suggestion := errormessages.suggestion.new",
      "            suggestion.replaceToken(lastToken)with(\"object\")",
      "            suggestions.push(suggestion)",
      "        } else {",
      "            def suggestion = errormessages.suggestion.new",
      "            suggestion.insert(\" «class name».new \\{}\")afterToken(lastToken)",
      "            suggestions.push(suggestion)",
      "        }",
      "        errormessages.syntaxError(\"a class must have a name after the 'class'.\")atPosition(",
      "            lastToken.line, lastToken.linePos + lastToken.size + 1)withSuggestions(suggestions)",
      "    }",
      "    var objName := false",
      "    if (tokens.first.kind == \"dot\") then {",
      "        pushidentifier // the name of the class object",
      "        objName := values.pop",
      "        objName.isBindingOccurrence := true",
      "        next    // skip over the dot",
      "    }",
      "    def s = methodsignature(false)",
      "    def csig = s.sig",
      "    def methodName = s.m",
      "    methodName.isBindingOccurrence := true",
      "    def dtype = s.rtype",
      "    parseObjectConstructorBody \"a class\" startingWith (btok) after \"method header\"",
      "    def objNode = values.pop",
      "    util.setPosition(btok.line, btok.linePos)",
      "    def meth = ast.methodNode.new(methodName, csig, [objNode], dtype)",
      "    meth.typeParams := s.typeParams",
      "    meth.usesClassSyntax := true",
      "    meth.annotations.addAll(objNode.annotations)  // TODO: sort this out!",
      "    // see comment in dofactoryMethod",
      "    if (false != objName) then {   // deal with (deprecated) dotted class",
      "        objNode.name := objName.nameString ++ \".\" ++ methodName.nameString",
      "        def asStringBody = [ ast.stringNode.new(\"class {objName.nameString}\") ]",
      "        def asStringMeth = ast.methodNode.new(",
      "            ast.identifierNode.new(\"asString\", false), [], asStringBody, false)",
      "        def metaBody = [meth, asStringMeth]",
      "        def metaObj = ast.objectNode.body (metaBody) named \"class {objName.nameString}\"",
      "        def defDec = ast.defDecNode.new(objName, metaObj, ast.unknownType)",
      "        defDec.startToken := btok",
      "        defDec.annotations.add(ast.identifierNode.new(\"public\", false))",
      "        values.push(defDec)",
      "    } else {",
      "        objNode.name := methodName.nameString",
      "        if (btok.value == \"class\") then {",
      "            objNode.inClass := true",
      "        } elseif { btok.value == \"trait\" } then {",
      "            objNode.inTrait := true",
      "        }",
      "        values.push(meth)",
      "    }",
      "    reconcileComments",
      "    minIndentLevel := localMinIndentLevel",
      "}",
      "",
      "method dofactoryMethod {",
      "    // Accept a factory method declaration",
      "    if ((acceptKeyword \"factory\") && {",
      "            tokens.first.kind == \"keyword\"} && {",
      "            tokens.first.value == \"method\"}) then {",
      "        def btok = sym",
      "        next",
      "        next",
      "        def localMinIndentLevel = minIndentLevel",
      "        if (sym.kind != \"identifier\") then {",
      "            def suggestions = [ ]",
      "            if(sym.kind == \"lbrace\") then {",
      "                var suggestion := errormessages.suggestion.new",
      "                suggestion.insert(\" «method name»\")afterToken(lastToken)",
      "                suggestions.push(suggestion)",
      "                suggestion := errormessages.suggestion.new",
      "                suggestion.replaceToken(lastToken)with(\"object\")",
      "                suggestions.push(suggestion)",
      "            } else {",
      "                def suggestion = errormessages.suggestion.new",
      "                suggestion.insert(\" «method name» \\{}\")afterToken(lastToken)",
      "                suggestions.push(suggestion)",
      "            }",
      "            errormessages.syntaxError \"a factory method must have a name after the 'method'.\"",
      "                atPosition (lastToken.line, lastToken.linePos + lastToken.size + 1)",
      "                withSuggestions (suggestions)",
      "        }",
      "        var s := methodsignature(false)",
      "        def csig = s.sig",
      "        var methodName := s.m",
      "        methodName.isBindingOccurrence := true",
      "        def dtype = s.rtype",
      "        parseObjectConstructorBody \"a factory method\" startingWith (btok) after \"method header\"",
      "        def objNode = values.pop",
      "        objNode.name := methodName",
      "        util.setPosition(btok.line, btok.linePos)",
      "        def meth = ast.methodNode.new(methodName, csig, [objNode], dtype)",
      "        meth.typeParams := s.typeParams",
      "        meth.annotations.addAll(objNode.annotations)  // TODO: sort this out!",
      "        // In a class or factory method declaration, there is just one place",
      "        // for annotations.  These might include annotations on the method (such",
      "        // as confidential), and annotations on the object (such as imutable)",
      "        values.push(meth)",
      "        reconcileComments",
      "        minIndentLevel := localMinIndentLevel",
      "    }",
      "}",
      "",
      "method methoddec {",
      "    // Parse a method declaration",
      "",
      "    if (acceptKeyword \"method\") then {",
      "        def btok = sym",
      "        checkIndent",
      "        statementToken := sym",
      "        var stok := sym",
      "        next",
      "        def m = methodsignature(false)",
      "        def meth = m.m",
      "        def signature = m.sig",
      "        def dtype = m.rtype",
      "        def body = []",
      "        var localMin",
      "        def anns = doannotation",
      "        if (accept \"lbrace\") then {",
      "            next",
      "            localMin := minIndentLevel",
      "            if (sym.line == stok.line) then {",
      "                minIndentLevel := sym.linePos - 1",
      "            } else {",
      "                minIndentLevel := stok.indent + 1",
      "            }",
      "            values.push(object {",
      "                def kind is public = \"lbrace\"",
      "                var register is public := \"\"",
      "            })  // a dummy token to mark the position in the values stack",
      "            statement",
      "            var s := values.pop",
      "            while {s.kind != \"lbrace\"} do {",
      "                // The body is a sequence of statements, and",
      "                // the method ends when no further statement",
      "                // is found.",
      "                body.push(s)",
      "                statement",
      "                s := values.pop",
      "            }",
      "            if(sym.kind != \"rbrace\") then {",
      "                def suggestion = errormessages.suggestion.new",
      "                def closingBrace = findClosingBrace(btok, false)",
      "                if(closingBrace.found.not) then {",
      "                    if(closingBrace.tok == sym) then {",
      "                        suggestion.insert(\"}\")afterToken(lastToken)",
      "                    } else {",
      "                        suggestion.addLine(closingBrace.tok.line + 0.1, \"}\")",
      "                    }",
      "                }",
      "                suggestion.deleteToken(sym)",
      "                errormessages.syntaxError(\"a method must end with a '}'.\")atPosition(",
      "                    sym.line, sym.linePos)withSuggestion(suggestion)",
      "            }",
      "            next",
      "            minIndentLevel := localMin",
      "        } else {",
      "            def suggestion = errormessages.suggestion.new",
      "            def closingBrace = findClosingBrace(btok, true)",
      "            if(closingBrace.found.not) then {",
      "                if(closingBrace.tok == lastToken) then {",
      "                    suggestion.insert(\" \\{}\")afterToken(lastToken)andTrailingSpace(true)",
      "                } else {",
      "                    suggestion.addLine(closingBrace.tok.line + 0.1, \"}\")",
      "                    suggestion.insert(\" \\{\")afterToken(lastToken)andTrailingSpace(true)",
      "                }",
      "            } else {",
      "                suggestion.insert(\" \\{\")afterToken(lastToken)andTrailingSpace(true)",
      "            }",
      "            errormessages.syntaxError(\"a method must have a '\\{' after the name.\")atPosition(",
      "                lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)",
      "        }",
      "        util.setline(btok.line)",
      "        var o := ast.methodNode.new(meth, signature, body, dtype)",
      "        o.typeParams := m.typeParams",
      "        if (false != anns) then { o.annotations.addAll(anns) }",
      "        values.push(o)",
      "        reconcileComments",
      "    }",
      "}",
      "",
      "",
      "method methodDecRest(tm, sameline) {",
      "    // Process the remainder of a method header. These follow",
      "    // mostly the same rules as calls, but aren't strictly enforced to be on",
      "    // a single line (because they are ended by \"{\"). ",
      "    //",
      "    // tm is a methodNode.  This method returns a replacement method name ",
      "    // identifier, and modifies tm.params in place.",
      "",
      "    var methname := tm.value.value",
      "    var signature := tm.signature",
      "    var nxt",
      "    while {(!sameline && accept(\"identifier\")) || acceptSameLine(\"identifier\")} do {",
      "        methname := methname ++ \"()\"",
      "        var part := ast.signaturePart.new",
      "        pushidentifier",
      "        nxt := values.pop",
      "        methname := methname ++ nxt.value",
      "        part.name := nxt.value",
      "        if ((accept(\"lparen\")).not) then {",
      "            def suggestion = errormessages.suggestion.new",
      "            suggestion.insert(\"()\")afterToken(lastToken)",
      "            errormessages.syntaxError(\"the declaration of a method with multiple \" ++",
      "                  \"parameter lists must have parentheses around each parameter list.\")",
      "                  atPosition(sym.line, sym.linePos)withSuggestion(suggestion)",
      "        }",
      "        next",
      "        var comma := false",
      "        while {accept(\"identifier\")",
      "                || (accept(\"op\") && (sym.value == \"*\"))} do {",
      "            if (accept \"op\") then {",
      "                next",
      "                errormessages.syntaxError(\"variable length parameters (parameters prefixed by '*') are no longer part of Grace.  Consider making {sym.value} an Iterable.\")",
      "                    atPosition(lastToken.line, lastToken.linePos)",
      "            }",
      "            pushidentifier",
      "            nxt := values.pop",
      "            nxt.isBindingOccurrence := true",
      "            nxt.dtype := optionalTypeAnnotation",
      "            part.params.push(nxt)",
      "            if (accept \"comma\") then {",
      "                comma := sym",
      "                next",
      "            }",
      "        }",
      "        if(sym.kind != \"rparen\") then {",
      "            def suggestion = errormessages.suggestion.new",
      "            suggestion.insert(\")\")afterToken(lastToken)",
      "            errormessages.syntaxError(\"a part of a multi-part method beginning with a '(' must end with a ')'.\")atPosition(",
      "                lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)",
      "        }",
      "        next",
      "        signature.push(part)",
      "    }",
      "    def newName = ast.identifierNode.new(methname, false)",
      "    newName.isBindingOccurrence := true",
      "    newName",
      "}",
      "",
      "method optionalTypeAnnotation {",
      "    // Accept a type annotation if present.",
      "    // Returns the type, or false if there is no annotation",
      "    if (accept \"colon\") then {",
      "        next",
      "        if (didConsume { typeexpression }) then {",
      "            values.pop",
      "        } else {",
      "            checkBadTypeLiteral",
      "            def suggestions = [ ]",
      "            var suggestion := errormessages.suggestion.new",
      "            suggestion.insert(\" «type name»\")afterToken(lastToken)",
      "            suggestions.push(suggestion)",
      "            suggestion := errormessages.suggestion.new",
      "            suggestion.deleteToken(lastToken)leading(true)trailing(false)",
      "            suggestions.push(suggestion)",
      "            errormessages.syntaxError(\"a type name or type expression must follow ':'.\")atPosition(",
      "                sym.line, sym.linePos)withSuggestions(suggestions)",
      "        }",
      "    } else {",
      "        false",
      "    }",
      "}",
      "method methodsignature(sameline) {",
      "    // Accept a method signature",
      "    if((sym.kind != \"identifier\") && (sym.kind != \"op\") && (sym.kind != \"lsquare\")) then {",
      "        def suggestion = errormessages.suggestion.new",
      "        suggestion.insert(\" «method name»\")afterToken(lastToken)",
      "        errormessages.syntaxError(\"a method name must start with an identifier, or be an operator.\")",
      "            atPosition(lastToken.line, lastToken.linePos + lastToken.size + 1)",
      "                withSuggestion(suggestion)",
      "    }",
      "    pushidentifier",
      "    var meth := values.pop",
      "    meth.isBindingOccurrence := true",
      "    var signature := [ ]",
      "    def part = ast.signaturePart.partName(meth.value)",
      "    part.line := meth.line",
      "    part.linePos := meth.linePos",
      "    signature.push(part)",
      "    if ((meth.value == \"[\") && {sym.kind == \"rsquare\"}) then {",
      "        errormessages.syntaxError(\"methods named '[]' and '[]:=' are no longer part of Grace.\")",
      "            atRange(lastToken.line, lastToken.linePos, sym.linePos)",
      "    }",
      "    var myTypeParams := false",
      "    if (accept \"lgeneric\") then { myTypeParams := typeparameters }",
      "    if (accept \"bind\") then {",
      "        next",
      "        meth.value := meth.value ++ \":=\"",
      "        part.name := part.name ++ \":=\"",
      "    } elseif { accept \"op\"  && (meth.value == \"prefix\") } then {",
      "        meth.value := meth.value ++ sym.value",
      "        part.name := part.name ++ sym.value",
      "        next",
      "    }",
      "    var dtype := false",
      "    if (accept \"lparen\") then {",
      "        def lparen = sym",
      "        part.linePos := sym.linePos",
      "        next",
      "        var id",
      "        var comma := false",
      "        while {accept(\"identifier\") ||",
      "                (accept(\"op\") && (sym.value == \"*\"))} do {",
      "            // Parse the parameter list, including optional dtype",
      "            // annotations.",
      "            if (accept \"op\") then {",
      "                next",
      "                errormessages.syntaxError(\"variable length parameters (parameters prefixed by '*') are no longer part of Grace.  Consider making {sym.value} an Iterable.\")",
      "                    atPosition(lastToken.line, lastToken.linePos)",
      "            }",
      "            pushidentifier",
      "            id := values.pop",
      "            id.isBindingOccurrence := true",
      "            dtype := optionalTypeAnnotation",
      "            id.dtype := dtype",
      "            part.params.push(id)",
      "            if (accept \"comma\") then {",
      "                comma := sym",
      "                next",
      "            } elseif { sym.kind != \"rparen\" } then {",
      "                if(sym.kind != \"rparen\") then {",
      "                    def suggestion = errormessages.suggestion.new",
      "                    suggestion.insert(\")\")afterToken(lastToken)",
      "                    errormessages.syntaxError(\"a part of a method beginning with a '(' must end with a ')'.\")atPosition(",
      "                        lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)",
      "                }",
      "            }",
      "        }",
      "        if(sym.kind != \"rparen\") then {",
      "            def suggestion = errormessages.suggestion.new",
      "            def rparen = findNextToken({ t -> (t.kind == \"rparen\") && (t.line == lastToken.line) })",
      "            if(false == rparen) then {",
      "                suggestion.replaceToken(lastToken)with(\")\")",
      "            } else {",
      "                suggestion.deleteToken(sym)",
      "            }",
      "            errormessages.syntaxError(\"a part of a method beginning with a '(' must end with a ')'.\")atRange(",
      "                lastToken.line, lastToken.linePos, lastToken.linePos)withSuggestion(suggestion)",
      "        }",
      "        if (sym.line == part.line) then {",
      "            part.lineLength := sym.linePos - part.linePos",
      "        }",
      "        next",
      "        if ((!sameline && accept(\"identifier\")) ||",
      "            acceptSameLine(\"identifier\")) then {",
      "            // The presence of an identifier here means",
      "            // a multi-part method name.",
      "            var tm := ast.methodNode.new(meth, signature, [], false)",
      "            meth := methodDecRest(tm, sameline)",
      "        }",
      "    }",
      "    if (accept \"arrow\") then {",
      "        // Return dtype",
      "        next",
      "        typeexpression",
      "        dtype := values.pop",
      "    } else {",
      "        dtype := false",
      "    }",
      "    object {",
      "        def m is public = meth",
      "        def sig is public  = signature",
      "        def rtype is public = dtype",
      "        def typeParams is public = myTypeParams",
      "    }",
      "}",
      "",
      "method typeparameters {",
      "    next",
      "    def typeIds = [ ]",
      "    while {accept(\"identifier\")} do {",
      "        identifier",
      "        def id = values.pop",
      "        id.isBindingOccurrence := true",
      "        typeIds.push(id)",
      "        if (accept \"comma\") then {",
      "            next",
      "        }",
      "    }",
      "    typeIds.do { each -> each.isBindingOccurrence := true }",
      "    def result = ast.typeParametersNode.new(typeIds)",
      "    if(sym.kind != \"rgeneric\") then {",
      "        def suggestion = errormessages.suggestion.new",
      "        suggestion.insert(\">\")afterToken(lastToken)",
      "        errormessages.syntaxError(\"a list of type parameters starting with '<' must end with '>'.\")atPosition(",
      "            lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)",
      "    }",
      "    next",
      "    result",
      "}",
      "",
      "method doimport {",
      "    // Accept an import statement, which has the form",
      "    //      import ‹string› as ‹identifier›:‹type expression› is ‹annotation›",
      "    if (acceptKeyword \"import\") then {",
      "        def importline = sym.line",
      "        next",
      "        if(sym.kind != \"string\") then {",
      "            var suggestion := errormessages.suggestion.new",
      "            var errorPos",
      "            if((sym.kind == \"identifier\") && (sym.line == lastToken.line)) then {",
      "                suggestion.replaceToken(sym)with(\"\\\"{sym.value}\\\"\")",
      "                errorPos := sym.linePos",
      "            } else {",
      "                suggestion.insert(\" \\\"«module name»\\\"\")afterToken(lastToken)",
      "                errorPos := lastToken.linePos + lastToken.size + 1",
      "            }",
      "            errormessages.syntaxError(\"an import statement must have the name of the module in quotes, 'as', and an identifier after 'import'.\")atPosition(",
      "                lastToken.line, errorPos)withSuggestion(suggestion)",
      "        }",
      "        pushstring",
      "        def p = values.pop",
      "        if((sym.kind != \"identifier\") || (sym.value != \"as\")) then {",
      "            var suggestion := errormessages.suggestion.new",
      "            if((sym.kind == \"identifier\") && (sym.line == lastToken.line)) then {",
      "                suggestion.insert(\" as\")afterToken(lastToken)",
      "            } else {",
      "                suggestion.insert(\" as {p.value}\")afterToken(lastToken)",
      "            }",
      "            errormessages.syntaxError(\"an import statement must have 'as', and an identifier after the name of the module in quotes.\")atPosition(",
      "                lastToken.line, lastToken.linePos + lastToken.size + 1)withSuggestion(suggestion)",
      "        }",
      "        next",
      "        if(sym.kind != \"identifier\") then {",
      "            var suggestion := errormessages.suggestion.new",
      "            var errorPos",
      "            if((sym.kind == \"string\") && (sym.line == lastToken.line)) then {",
      "                suggestion.replaceToken(sym)with(\"{sym.value}\")",
      "                errorPos := sym.linePos",
      "            } else {",
      "                suggestion.insert(\" {p.value}\")afterToken(lastToken)",
      "                errorPos := lastToken.linePos + lastToken.size + 1",
      "            }",
      "            errormessages.syntaxError(\"an import statement must have an identifier after 'as'.\")atPosition(",
      "                lastToken.line, errorPos)withSuggestion(suggestion)",
      "        }",
      "        pushidentifier",
      "        def name = values.pop",
      "        name.isBindingOccurrence := true",
      "        def dtype = optionalTypeAnnotation",
      "        util.setline(importline)",
      "        def o = ast.importNode.new(p.value, name, dtype)",
      "        def anns = doannotation",
      "        if (false != anns) then { o.annotations.addAll(anns) }",
      "        values.push(o)",
      "        reconcileComments",
      "    }",
      "}",
      "",
      "method doreturn {",
      "    // Accept a return statement; 'return' is followed by an optional expression.",
      "    if (acceptKeyword \"return\") then {",
      "        def retTok = sym",
      "        next",
      "        var retval",
      "        if ((tokenOnSameLine) && {accept(\"rbrace\").not}) then {",
      "            if(didConsume({expression(blocksOK)}).not) then {",
      "                def suggestions = [ ]",
      "                var suggestion := errormessages.suggestion.new",
      "                def nextTok = findNextValidToken( [\"rbrace\"] )",
      "                if(nextTok == sym) then {",
      "                    suggestion.insert(\" «expression»\")afterToken(lastToken)",
      "                    suggestions.push(suggestion)",
      "                    suggestion := errormessages.suggestion.new",
      "                    suggestion.deleteToken(sym)leading(true)trailing(false)",
      "                } else {",
      "                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\" «expression»\")",
      "                    suggestions.push(suggestion)",
      "                    suggestion := errormessages.suggestion.new",
      "                    suggestion.deleteTokenRange(sym, nextTok.prev)leading(true)trailing(false)",
      "                }",
      "                suggestions.push(suggestion)",
      "                errormessages.syntaxError(\"a return statement must have either an expression or a new-line after 'return'.\")atRange(",
      "                    sym.line, sym.linePos, sym.linePos + sym.size - 1)withSuggestions(suggestions)",
      "            }",
      "            retval := values.pop",
      "        } else {",
      "            retval := ast.identifierNode.new(\"done\", false)",
      "        }",
      "        util.setPosition(retTok.line, retTok.linePos)",
      "        var o := ast.returnNode.new(retval)",
      "        values.push(o)",
      "    }",
      "}",
      "",
      "method domethodtype {",
      "    // parses a method in a type literal",
      "    def methodTypeTok = sym",
      "    var m := methodsignature(true)",
      "    var meth := m.m",
      "    var signature := m.sig",
      "    var dtype := m.rtype",
      "    if (false == dtype) then {",
      "        dtype := ast.identifierNode.new(\"Done\", false)",
      "    }",
      "    util.setPosition(methodTypeTok.line, methodTypeTok.linePos)",
      "    def o = ast.methodTypeNode.new(meth.value, signature, dtype)",
      "    o.typeParams := m.typeParams",
      "    values.push(o)",
      "    reconcileComments",
      "    if (accept \"semicolon\") then {",
      "        next",
      "    } else {",
      "        if (!accept(\"rbrace\")) then {",
      "            if (lastToken.line == sym.line) then {",
      "                def suggestion = errormessages.suggestion.new",
      "                def newLine = util.lines.at(sym.line).substringFrom(1)to(lastToken.linePos - 1) ++ sym.value",
      "                suggestion.addLine(sym.line + 0.1, newLine)",
      "                suggestion.deleteToken(sym)leading(true)trailing(true)",
      "                errormessages.syntaxError(\"methods in a type literal must be on separate lines, or separated by semicolons.\")atPosition(",
      "                    sym.line, sym.linePos)withSuggestion(suggestion)",
      "            }",
      "        }",
      "    }",
      "}",
      "",
      "method dotypeLiteral {",
      "    // parses a type literal between braces, with optional leading 'type' keyword.",
      "    def typeLiteralTok = sym",
      "    if (acceptKeyword \"type\") then {",
      "        next",
      "        if (!accept(\"lbrace\")) then {",
      "            def suggestion = errormessages.suggestion.new",
      "            suggestion.replaceToken(sym) with(\"\\{\")",
      "            errormessages.syntaxError \"type literals must open with a brace.\"",
      "                atPosition(sym.line, sym.linePos) withSuggestion(suggestion)",
      "            return",
      "        }",
      "    }",
      "    if (accept \"lbrace\") then {",
      "        def meths = []",
      "        def types = []",
      "        def mc = auto_count",
      "        auto_count := auto_count + 1",
      "        next",
      "        while {accept(\"rbrace\").not} do {",
      "            if (acceptKeyword \"type\") then {",
      "                typedec",
      "                types.push(values.pop)",
      "            } else {",
      "                domethodtype",
      "                meths.push(values.pop)",
      "            }",
      "        }",
      "        next",
      "        util.setPosition(typeLiteralTok.line, typeLiteralTok.linePos)",
      "        def t = ast.typeLiteralNode.new(meths, types)",
      "        values.push(t)",
      "    }",
      "}",
      "",
      "method typedec {",
      "    // Accept a declaration: 'type = <type expression>'",
      "    if (acceptKeyword \"type\") then {",
      "        def line = sym.line",
      "        def pos = sym.linePos",
      "        next",
      "        if(sym.kind != \"identifier\") then {",
      "            def suggestion = errormessages.suggestion.new",
      "            suggestion.insert(\" «type name»\")afterToken(lastToken)",
      "            errormessages.syntaxError(\"a type declaration must have a name after the 'type'.\")atPosition(",
      "                lastToken.line, lastToken.linePos + lastToken.size + 1)withSuggestion(suggestion)",
      "        }",
      "        pushidentifier",
      "        util.setPosition(line, pos)",
      "        def nt = ast.typeDecNode.new(values.pop, false)",
      "        if (accept \"lgeneric\") then { nt.typeParams := typeparameters }",
      "        nt.name.isBindingOccurrence := true",
      "        def anns = doannotation",
      "        if((sym.kind != \"op\") || (sym.value != \"=\")) then {",
      "            var suggestion := errormessages.suggestion.new",
      "            def nextTok = findNextToken({ t -> t.kind == \"lbrace\" })",
      "            if ((false == nextTok) || {nextTok == sym}) then {",
      "                suggestion.insert(\" =\")afterToken(lastToken)",
      "            } else {",
      "                suggestion.replaceTokenRange(sym, nextTok.prev)with(\"=\")",
      "            }",
      "            errormessages.syntaxError \"a type declaration must have an '=' after the type name.\"",
      "                  atPosition(lastToken.line, lastToken.linePos + lastToken.size + 1)",
      "                  withSuggestion(suggestion)",
      "        }",
      "        next",
      "        // Special case for type Literals without leading 'type' keyword.",
      "        if (accept \"lbrace\") then {",
      "            dotypeLiteral",
      "        } else {",
      "            expression(noBlocks)",
      "        }",
      "        nt.value := values.pop",
      "        if (false != anns) then {",
      "            nt.annotations.addAll(anns)",
      "        }",
      "        values.push(nt)",
      "        reconcileComments",
      "    }",
      "}",
      "",
      "method checkIndent {",
      "    if (indentFreePass) then {",
      "        indentFreePass := false",
      "    } elseif { sym.kind == \"semicolon\" } then {",
      "        // pass",
      "    } elseif {(sym.kind == \"rbrace\") || (sym.kind == \"rparen\")",
      "          || (sym.kind == \"rsquare\")} then {",
      "        // pass",
      "    } elseif { sym.kind == \"eof\" } then {",
      "    } elseif { sym.indent < minIndentLevel } then {",
      "        if ((sym.linePos - 1) != minIndentLevel) then {",
      "            def suggestions = [ ]",
      "            var suggestion := errormessages.suggestion.new",
      "            for(1..(minIndentLevel - (sym.linePos - 1))) do { _ ->",
      "                suggestion.insert \" \" atPosition 1 onLine(sym.line)",
      "            }",
      "            suggestions.push(suggestion)",
      "            suggestion := errormessages.suggestion.new",
      "            // Find the indent level for the opening brace.",
      "            var tok := lastToken",
      "            while {(tok.linePos != (tok.indent + 1)) || (tok.indent >= minIndentLevel)} do { ",
      "                tok := tok.prev ",
      "            }",
      "            var line := \"\"",
      "            for(1..(tok.indent)) do { _ ->",
      "                line := line ++ \" \"",
      "            }",
      "            line := line ++ \"}\"",
      "            suggestion.addLine(sym.line - 0.9, line)",
      "            suggestions.push(suggestion)",
      "            errormessages.syntaxError(\"the indentation for this line must be \" ++",
      "                  \"at least {minIndentLevel}. This is often caused by a missing '}'.\")",
      "                  atPosition(sym.line, sym.linePos)withSuggestions(suggestions)",
      "        }",
      "    } elseif { sym.indent > (minIndentLevel + 1) } then {",
      "        minIndentLevel := sym.indent",
      "    } elseif { (sym.indent - lastIndent).abs == 1 } then {",
      "        def m1 = \"the indentation for this line can't differ \"",
      "        def m2 = \"from that of the previous line by 1.\\n  To start a block, or \"",
      "        def m3 = \"to signal a continuation line, increase the indent by 2 or more. \"",
      "        def m4 = \"To end a block, or end the continuation, decrease the indent \"",
      "        def m5 = \"to the prior level. Otherwise, use the same indent as the previous line.\"",
      "        def msg = m1 ++ m2 ++ m3 ++ m4 ++ m5",
      "        errormessages.syntaxError(msg) atPosition(sym.line, sym.linePos)",
      "    }",
      "}",
      "",
      "method statement {",
      "    // Accept a statement. A statement is any of the above that may exist",
      "    // at the top level, and includes expressions.",
      "    // A statement may also be a bind statement x := y, which creates a",
      "    // bind AST node out of the expressions on either side (which at this point",
      "    // can be any arbitrary expression).",
      "",
      "    statementIndent := sym.indent",
      "    statementToken := sym",
      "    def btok = sym",
      "    checkIndent",
      "    if (accept \"keyword\") then {",
      "        if (sym.value == \"var\") then {",
      "            vardec",
      "        } elseif { sym.value == \"def\" } then {",
      "            defdec",
      "        } elseif { sym.value == \"import\" } then {",
      "            doimport",
      "        } elseif { sym.value == \"dialect\" } then {",
      "            dodialect",
      "        } elseif { sym.value == \"type\" } then {",
      "            typedec",
      "        } elseif { sym.value == \"class\" } then {",
      "            doclass",
      "        } elseif { sym.value == \"trait\" } then {",
      "            doclass",
      "        } elseif { sym.value == \"factory\" } then {",
      "            dofactoryMethod",
      "        } elseif { sym.value == \"return\" } then {",
      "            doreturn",
      "        } else {",
      "            expression(blocksOK)",
      "        }",
      "    } else {",
      "        ifConsume {expression(blocksOK)} then {",
      "            if (((values.last.kind == \"identifier\")",
      "                || (values.last.kind == \"member\")",
      "                || (values.last.kind == \"index\"))",
      "                && accept(\"bind\")) then {",
      "                var dest := values.pop",
      "                if (dest.kind == \"lbrace\") then {",
      "                    print \"sym = {sym}, sym.line = {sym.line}\"",
      "                    ProgrammingError.raise \"popped lbrace token while parsing statement\"",
      "                }",
      "                next",
      "                if(didConsume({expression(blocksOK)}).not) then {",
      "                    def suggestions = [ ]",
      "                    var suggestion := errormessages.suggestion.new",
      "                    def nextTok = findNextValidToken( [\"rbrace\"] )",
      "                    if(nextTok == sym) then {",
      "                        suggestion.insert(\" «expression»\")afterToken(lastToken)",
      "                    } else {",
      "                        suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\" «expression»\")",
      "                    }",
      "                    suggestions.push(suggestion)",
      "                    suggestion := errormessages.suggestion.new",
      "                    suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)",
      "                    suggestions.push(suggestion)",
      "                    errormessages.syntaxError(\"a valid expression must follow ':='.\")atPosition(",
      "                        sym.line, sym.linePos)withSuggestions(suggestions)",
      "                }",
      "                var val := values.pop",
      "                util.setPosition(btok.line, btok.linePos)",
      "                var o := ast.bindNode.new(dest, val)",
      "                values.push(o)",
      "            }",
      "        }",
      "    }",
      "    reconcileComments",
      "    if (accept \"eof\") then {",
      "        return true",
      "    }",
      "    if (accept \"semicolon\") then {",
      "        def oldLine = sym.line",
      "        next",
      "        if (sym.line == oldLine) then {",
      "            indentFreePass := true",
      "        }",
      "    } else {",
      "        checkUnexpectedTokenAfterStatement",
      "    }",
      "}",
      "",
      "method pushComments {",
      "    // Push a comment onto the comments stack as a commentNode. If",
      "    // there are consecutive comments following, deal with them all.",
      "    // Adjacent comments extend the first; a break of a blank line",
      "    // starts a new comment node.",
      "",
      "    if ( ! accept \"comment\" ) then { return }",
      "    util.setPosition(sym.line, sym.linePos)",
      "    var o := ast.commentNode.new(sym.value)",
      "    if ((lastToken.line == sym.line) && (lastToken.kind != \"comment\")) then {",
      "        o.isPartialLine := true",
      "    } elseif { lastToken.line < (sym.line - 1) } then {",
      "        o.isPreceededByBlankLine := true",
      "    }",
      "    comments.push(o)",
      "    while { ",
      "        previousCommentToken := sym",
      "        sym := tokens.poll",
      "        if (sym.line > (previousCommentToken.line + 1)) then { noteBlank }",
      "        accept \"comment\"",
      "    } do {",
      "        util.setPosition(sym.line, sym.linePos)",
      "        o := ast.commentNode.new(sym.value)",
      "        if ( comments.last.endLine == (sym.line - 1) ) then {",
      "            comments.last.extendCommentUsing(o)",
      "        } else {",
      "            comments.push(o)",
      "            if ( lastToken.line < (sym.line - 1) ) then {",
      "                o.isPreceededByBlankLine := true",
      "            }",
      "        }",
      "    }",
      "}",
      "",
      "method reconcileComments {",
      "    // Should be requested after a new node that represents a \"syntactic unit\"",
      "    // to which comments can be attached is pushed onto `values`",
      "    // Finds comments associated with that node, remove thems from comments",
      "    // stack, and puts them in that node's comments attribute.",
      "",
      "    pushComments",
      "    def node = if (values.isEmpty) then {",
      "        moduleObject ",
      "    } else {",
      "        values.last",
      "    }",
      "    if (node.kind == \"lbrace\") then {",
      "        // lbrace nodes are not AST nodes.  They are used to mark the stack for",
      "        // nested expressions.  Hence, no comments should be attached to them.",
      "        return",
      "    }",
      "    def oLine = node.line",
      "    def preComments = emptyList",
      "    def postComments = emptyList",
      "",
      "    var ix := comments.size",
      "    while { ix > 0 } do {",
      "        def each = comments.at(ix)",
      "        def isPostComment = (each.line == oLine) || (each.line == (oLine+1))",
      "        def isPreComment = each.isPreceededByBlankLine && (each.endLine == (oLine-1))",
      "        if (isPostComment) then {",
      "            postComments.push(comments.removeAt(ix))",
      "        } elseif { isPreComment } then {",
      "            preComments.addFirst(comments.removeAt(ix))",
      "        } elseif { each.endLine < (oLine-1) } then {",
      "            ix := 0     // exit from while",
      "        }",
      "        ix := ix - 1",
      "    }",
      "",
      "    def postSz = postComments.size",
      "    def preSz = preComments.size",
      "",
      "    if ((postSz > 1) && (preSz > 1)) then {",
      "        preComments.last.value := preComments.last.value ++ \"\\n\"",
      "    }",
      "    node.addComments(preComments)",
      "    node.addComments(postComments)",
      "}",
      "",
      "method checkBadOperators {",
      "    if (sym.value == \"=\") then {",
      "        def sugg = errormessages.suggestion.new",
      "        sugg.insert(\"=\")afterToken(sym)",
      "        errormessages.syntaxError(\"use '==' to test equality, not '='.\")",
      "            atRange(sym.line, sym.linePos, sym.linePos)",
      "            withSuggestion(sugg)",
      "    }",
      "    if (sym.kind == \"rgeneric\") then {",
      "        def sugg = errormessages.suggestion.new",
      "        sugg.insert(\" \")beforeToken(sym)",
      "        errormessages.syntaxError(\"the '>' operator must be preceded by a space.\")",
      "            atRange(sym.line, sym.linePos, sym.linePos)",
      "            withSuggestion(sugg)",
      "    }",
      "}",
      "",
      "method checkBadTypeLiteral {",
      "    if (sym.kind == \"lbrace\") then {",
      "        def sugg = errormessages.suggestion.new",
      "        sugg.insert(\"type \") beforeToken(sym)",
      "        errormessages.syntaxError(\"type literals must start with the keyword 'type'.\")",
      "            atRange(sym.line, sym.linePos, sym.linePos)",
      "            withSuggestion(sugg)",
      "    }",
      "}",
      "",
      "method checkUnexpectedTokenAfterStatement {",
      "    if (sym.line == lastToken.line) then {",
      "        if ((sym.kind == \"op\") && (sym.value == \"=\")",
      "            && (lastToken.kind == \"identifier\")) then {",
      "            def sugg = errormessages.suggestion.new",
      "            def suggestions = [ ]",
      "            sugg.replaceToken(sym)leading(false)trailing(false)with(\":=\")",
      "            suggestions.push(sugg)",
      "            def sugg2 = errormessages.suggestion.new",
      "            sugg2.replaceToken(sym)leading(false)trailing(false)with \"==\"",
      "            suggestions.push(sugg2)",
      "            errormessages.syntaxError(\"assignment uses ':=', not '='.\")",
      "                atRange(sym.line, sym.linePos, sym.linePos)",
      "                withSuggestions (suggestions)",
      "        }",
      "        if (sym.kind == \"rgeneric\") then {",
      "            def sugg = errormessages.suggestion.new",
      "            sugg.insert(\" \")atPosition(sym.linePos)onLine(sym.line)",
      "            errormessages.syntaxError(",
      "                    \"The '>' operator must have a space before it.\")",
      "                atRange(sym.line, sym.linePos, sym.linePos)",
      "                withSuggestion(sugg)",
      "        }",
      "        if (sym.kind != \"rbrace\") then {",
      "            def suggestions = [ ]",
      "            var suggestion",
      "            if ( (values.size > 0) && { (values.last.kind == \"identifier\") || { values.last.kind == \"member\" }} && { sym.kind == \"identifier\" } ) then {",
      "                suggestion := errormessages.suggestion.new",
      "                suggestion.replaceToken(sym)leading(true)trailing(false)with(\"({sym.value})\")",
      "                suggestions.push(suggestion)",
      "                if (false != sym.next) then {",
      "                    def n = sym.next",
      "                    if (n.line == sym.line) then {",
      "                        suggestion := errormessages.suggestion.new",
      "                        suggestion.replaceToken(sym)leading(true)trailing(false)with(\"({sym.value}\")",
      "                        suggestion.append \")\" onLine(sym.line)",
      "                        suggestions.push(suggestion)",
      "                    }",
      "                }",
      "                if (values.last.kind == \"identifier\") then {",
      "                    suggestion := errormessages.suggestion.new",
      "                    suggestion.replaceToken(sym)leading(false)trailing(false)with(\"\\\"{sym.value}\\\"\")",
      "                    suggestions.push(suggestion)",
      "                }",
      "            }",
      "            def nextTok = findNextValidToken( [\"rbrace\"] )",
      "            if(nextTok == sym) then {",
      "                suggestion := errormessages.suggestion.new",
      "                suggestion.addLine(lastToken.line, util.lines.at(lastToken.line).substringFrom(1)to(lastToken.linePos + lastToken.size - 1))",
      "                def newLine = util.lines.at(sym.line).substringFrom(sym.linePos)to(util.lines.at(sym.line).size)",
      "                suggestion.addLine(lastToken.line + 0.1, newLine)",
      "                suggestions.push(suggestion)",
      "            } else {",
      "                suggestion := errormessages.suggestion.new",
      "                suggestion.deleteTokenRange(sym, nextTok.prev)leading(true)trailing(false)",
      "                suggestions.push(suggestion)",
      "            }",
      "            errormessages.syntaxError(\"multiple statements must be separated by a newline or a semicolon. This is often caused by missing parentheses.\")atPosition(",
      "                sym.line, sym.linePos)withSuggestions(suggestions)",
      "        }",
      "    }",
      "}",
      "",
      "",
      "method parse(toks) {",
      "    // Parse the given list of tokens, toks, returning an AST moduleNode",
      "    // corresponding to it.",
      "",
      "    util.log_verbose \"parsing.\"",
      "    moduleObject := ast.moduleNode.body(values) named (util.modname)",
      "",
      "    if (toks.size == 0) then {",
      "        return moduleObject",
      "    }",
      "    tokens := toks",
      "    next",
      "    if (sym.indent > 0) then {",
      "        def sugg = errormessages.suggestion.new",
      "        sugg.deleteRange(1, sym.indent) onLine(sym.line)",
      "        errormessages.syntaxError \"the first line must not be indented.\"",
      "            atRange(sym.line, 1, sym.indent)",
      "            withSuggestion(sugg)",
      "    }",
      "    var oldlength := tokens.size",
      "    while {tokens.size > 0} do {",
      "        blank",
      "        methoddec",
      "        blank",
      "        ifConsume { inheritsOrUses } then {",
      "            def parentNode = values.pop",
      "            if (parentNode.isUse) then {",
      "                moduleObject.usedTraits.add(parentNode)",
      "            } elseif { moduleObject.usedTraits.isEmpty } then {",
      "                moduleObject.superclass := parentNode",
      "            } else {",
      "                errormessages.syntaxError(\"'inherit' must come \" ++",
      "                    \"before 'use' in a module.\")",
      "                    atRange(parentNode.line, parentNode.linePos,",
      "                    parentNode.linePos + 7)",
      "            }",
      "        }",
      "        blank",
      "        statement",
      "        blank",
      "        if (tokens.size == oldlength) then {",
      "            def suggestion = errormessages.suggestion.new",
      "            suggestion.deleteToken(sym)",
      "            errormessages.syntaxError(\"invalid statement. This is often \" ++",
      "                \"caused by an extra '}', ')', or ']'.\")",
      "                atRange(sym.line, sym.linePos, sym.linePos + sym.size - 1)",
      "                withSuggestion(suggestion)",
      "        }",
      "        oldlength := tokens.size",
      "    }",
      "    blank",
      "    statement",
      "    blank",
      "    return moduleObject",
      "}" ];
  }
  if (typeof global !== "undefined")
    global.gracecode_parser = gracecode_parser;
  if (typeof window !== "undefined")
    window.gracecode_parser = gracecode_parser;
